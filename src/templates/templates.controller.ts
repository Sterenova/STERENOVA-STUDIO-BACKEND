import { Controller, Get, Param, Res, Query, Post, Body, BadRequestException } from '@nestjs/common';
import { TemplatesService } from './templates.service';
import type { Response } from 'express';
import { tmpdir } from 'os';
import { PALETTE, gradientCss } from './svg';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags, ApiQuery } from '@nestjs/swagger';
import { GeneratePlaceholdersDto } from './dto';

@ApiTags('templates')
@Controller('templates')
export class TemplatesController {
	constructor(private readonly service: TemplatesService) {}

	@Get('list')
	@ApiOkResponse({ description: 'Liste des templates disponibles avec métadonnées' })
	list() {
		return this.service.list();
	}

	@Get('search')
	@ApiQuery({ name: 'q', description: 'Terme de recherche' })
	@ApiOkResponse({ description: 'Recherche de templates' })
	search(@Query('q') query: string) {
		if (!query) throw new BadRequestException('Query parameter "q" is required');
		return this.service.searchTemplates(query);
	}

	@Get('category/:category')
	@ApiParam({ name: 'category', enum: ['post', 'story'] })
	@ApiOkResponse({ description: 'Templates par catégorie' })
	getByCategory(@Param('category') category: 'post' | 'story') {
		return this.service.getTemplatesByCategory(category);
	}

	@Get('info/:key')
	@ApiParam({ name: 'key', description: 'Clé du template (ex: post/01_post_hero_white.svg)' })
	@ApiOkResponse({ description: 'Informations détaillées d\'un template' })
	getTemplateInfo(@Param('key') key: string) {
		return this.service.getTemplateInfo(key);
	}

	@Get('presets')
	@ApiOkResponse({ description: 'Tous les presets disponibles' })
	presets() {
		return this.service.getAllPresets();
	}

	@Get('presets/:kind/:name')
	@ApiParam({ name: 'kind', enum: ['post', 'story'] })
	@ApiParam({ name: 'name' })
	@ApiOkResponse({ description: 'Preset pour un template spécifique' })
	getPreset(@Param('kind') kind: 'post' | 'story', @Param('name') name: string) {
		return this.service.getPreset(kind, name);
	}

	@Get('config/palette')
	@ApiOkResponse({ description: 'Palette de couleurs' })
	getPalette() {
		return PALETTE;
	}

	@Get('config/gradient.css')
	@ApiOkResponse({ description: 'CSS de gradient' })
	getGradient(@Res() res: Response) {
		res.setHeader('Content-Type', 'text/css; charset=utf-8');
		res.send(gradientCss());
	}

	@Get(':kind/:name')
	@ApiParam({ name: 'kind', enum: ['post', 'story'] })
	@ApiParam({ name: 'name' })
	@ApiOkResponse({ description: 'SVG généré avec valeurs par défaut' })
	getOne(@Param('kind') kind: 'post' | 'story', @Param('name') name: string, @Res() res: Response) {
		const svg = this.service.getOne(kind, name);
		if (!svg) return res.status(404).json({ message: 'Template not found' });
		
		res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
		res.send(svg);
	}

	@Post(':kind/:name')
	@ApiParam({ name: 'kind', enum: ['post', 'story'] })
	@ApiParam({ name: 'name' })
	@ApiBody({ 
		schema: { 
			type: 'object', 
			additionalProperties: { type: 'string' }, 
			example: { TITLE: 'Mon Titre', PRICE: '299€' } 
		} 
	})
	@ApiOkResponse({ description: 'SVG généré avec placeholders remplacés' })
	generate(@Param('kind') kind: 'post' | 'story', @Param('name') name: string, @Body() body: Record<string, string>, @Res() res: Response) {
		if (!body || typeof body !== 'object') {
			throw new BadRequestException('Body must be a JSON object');
		}
		
		const svg = this.service.generateOne(kind, name, body);
		res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
		res.send(svg);
	}

	@Post('placeholders/apply')
	@ApiBody({ type: GeneratePlaceholdersDto })
	@ApiOkResponse({ description: 'SVG avec placeholders remplacés' })
	applyPlaceholders(@Body() dto: GeneratePlaceholdersDto, @Res() res: Response) {
		const svg = this.service.applyPlaceholders(dto.sourceSvg, dto.values);
		res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
		res.send(svg);
	}

	@Get('archive/all.zip')
	@ApiOkResponse({ description: 'Archive ZIP de tous les templates' })
	async zipAll(@Res() res: Response, @Query('dir') dir?: string) {
		const out = await this.service.zipAll(dir || tmpdir());
		res.download(out, 'sterenova_templates.zip');
	}
} 