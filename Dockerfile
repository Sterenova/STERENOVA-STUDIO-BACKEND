# syntax=docker/dockerfile:1

FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY tsconfig*.json nest-cli.json ./
COPY src ./src
RUN npm run build

# Build Python dependencies in a dedicated Alpine Python image
FROM python:3.11-alpine AS pydeps
RUN apk add --no-cache build-base ffmpeg
WORKDIR /opt
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"
COPY motion/requirements.txt /tmp/requirements.txt
RUN pip install --upgrade pip && pip install --no-cache-dir -r /tmp/requirements.txt

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
# Minimal runtime deps
RUN apk add --no-cache python3 ffmpeg
# Copy prebuilt Python venv with moviepy and deps
COPY --from=pydeps /opt/venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"
# App motion scripts
COPY motion ./motion
# Copy only needed Node artifacts
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package*.json ./
EXPOSE 3000
USER node
CMD ["node", "dist/main.js"] 