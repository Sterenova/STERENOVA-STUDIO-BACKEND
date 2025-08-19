import { Module } from '@nestjs/common';
import { TemplatesController } from './templates.controller';
import { TemplatesService } from './templates.service';
import { TemplateRegistryService } from './registry/template-registry.service';

@Module({
  controllers: [TemplatesController],
  providers: [TemplatesService, TemplateRegistryService],
  exports: [TemplatesService, TemplateRegistryService],
})
export class TemplatesModule {} 