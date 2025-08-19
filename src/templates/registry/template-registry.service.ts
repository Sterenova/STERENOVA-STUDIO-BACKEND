import { Injectable, OnModuleInit } from '@nestjs/common';
import { Template, TemplateRegistry } from '../interfaces/template.interface';

// Import all modular templates
import { HeroPostTemplate } from '../modular/hero-post.template';
import { HeroWhitePostTemplate } from '../modular/posts/hero-white-post.template';
import { HeroGradientPostTemplate } from '../modular/posts/hero-gradient-post.template';
import { PromoPackPostTemplate } from '../modular/posts/promo-pack-post.template';
import { BigDiscountPostTemplate } from '../modular/posts/big-discount-post.template';
import { Catalog2x2PostTemplate } from '../modular/posts/catalog-2x2-post.template';
import { Catalog3x3PostTemplate } from '../modular/posts/catalog-3x3-post.template';
import { BeforeAfterVerticalPostTemplate } from '../modular/posts/before-after-vertical-post.template';
import { BeforeAfterHorizontalPostTemplate } from '../modular/posts/before-after-horizontal-post.template';
import { TestimonialStatsPostTemplate } from '../modular/posts/missing-templates';
import { LineupPostTemplate } from '../modular/posts/missing-templates';
import { QuoteGradientPostTemplate } from '../modular/posts/missing-templates';
import { AgendaMonthPostTemplate } from '../modular/posts/missing-templates';
import { TipsSlidePostTemplate } from '../modular/posts/missing-templates';
import { NewArrivalPostTemplate } from '../modular/posts/missing-templates';
import { CollageThreePostTemplate } from '../modular/posts/missing-templates';
import { StaffIntroPostTemplate } from '../modular/posts/missing-templates';
import { FaqPostTemplate } from '../modular/posts/missing-templates';
import { EventTeaserPostTemplate } from '../modular/posts/missing-templates';

import { HeroGradientStoryTemplate } from '../modular/stories/hero-gradient-story.template';
import { CountdownStoryTemplate } from '../modular/stories/countdown-story.template';
import { PricelistStoryTemplate } from '../modular/stories/pricelist-story.template';
import { AgendaStoryTemplate } from '../modular/stories/agenda-story.template';
import { PollStoryTemplate } from '../modular/stories/poll-story.template';

@Injectable()
export class TemplateRegistryService implements OnModuleInit {
  private registry: TemplateRegistry = {};

  onModuleInit() {
    this.registerModularTemplates();
  }

  private registerModularTemplates() {
    // Register all modular templates
    const templates: Template[] = [
      // Posts
      new HeroPostTemplate(),
      new HeroWhitePostTemplate(),
      new HeroGradientPostTemplate(),
      new PromoPackPostTemplate(),
      new BigDiscountPostTemplate(),
      new Catalog2x2PostTemplate(),
      new Catalog3x3PostTemplate(),
      new BeforeAfterVerticalPostTemplate(),
      new BeforeAfterHorizontalPostTemplate(),
      new TestimonialStatsPostTemplate(),
      new LineupPostTemplate(),
      new QuoteGradientPostTemplate(),
      new AgendaMonthPostTemplate(),
      new TipsSlidePostTemplate(),
      new NewArrivalPostTemplate(),
      new CollageThreePostTemplate(),
      new StaffIntroPostTemplate(),
      new FaqPostTemplate(),
      new EventTeaserPostTemplate(),
      
      // Stories
      new HeroGradientStoryTemplate(),
      new CountdownStoryTemplate(),
      new PricelistStoryTemplate(),
      new AgendaStoryTemplate(),
      new PollStoryTemplate(),
    ];

    for (const template of templates) {
      const key = `${template.metadata.category}/${template.metadata.name}`;
      this.registry[key] = template;
    }
  }

  // Public methods
  getAllTemplates(): TemplateRegistry {
    return { ...this.registry };
  }

  getTemplate(key: string): Template | undefined {
    return this.registry[key];
  }

  getTemplatesByCategory(category: 'post' | 'story'): Template[] {
    return Object.values(this.registry).filter(t => t.metadata.category === category);
  }

  getTemplateMetadata(key: string) {
    const template = this.registry[key];
    return template ? template.metadata : null;
  }

  getAllMetadata() {
    return Object.entries(this.registry).map(([key, template]) => ({
      key,
      ...template.metadata,
    }));
  }

  // For future template registration
  registerTemplate(key: string, template: Template) {
    this.registry[key] = template;
  }

  // Get all available placeholders for a template
  getTemplatePlaceholders(key: string) {
    const template = this.registry[key];
    return template ? template.metadata.placeholders : [];
  }

  // Search templates by tags
  searchTemplatesByTags(tags: string[]) {
    const allTemplates = Object.values(this.registry);
    return allTemplates.filter(template => 
      tags.some(tag => template.metadata.tags.includes(tag))
    );
  }
} 