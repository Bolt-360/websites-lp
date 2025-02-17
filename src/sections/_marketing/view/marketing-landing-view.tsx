'use client';

import {
  _brands,
  _members,
  _caseStudies,
  _testimonials,
  _marketingPosts,
  _pricingMarketing,
  _brandsColor,
} from 'src/_mock';

import MarketingLandingFaqs from '../landing/marketing-landing-faqs';

import PricingMarketing from '../../pricing/marketing/pricing-marketing';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';

import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';
import CareerLandingHero from 'src/sections/_career/landing/career-landing-hero';
import MarketingServicesBenefits from '../services/marketing-services-benefits';
import MarketingServicesHowItWork from '../services/marketing-services-how-it-work';
import MarketingServicesInclude from '../services/marketing-services-include';
import ElearningTestimonial from 'src/sections/_elearning/testimonial/elearning-testimonial';

// ----------------------------------------------------------------------

export default function MarketingLandingView() {
  return (
    <>
      <div id="inicio">
        <CareerLandingHero />
      </div>

      <MarketingServicesBenefits />

      <MarketingServicesInclude />

      <MarketingServicesHowItWork />

      <ElearningTestimonial testimonials={_testimonials} />

      <div id="planos">
        <PricingMarketing plans={_pricingMarketing} />
      </div>

      <MarketingLandingFaqs />

      <div id="portfolio">
        <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />
      </div>

      <div id="fale-conosco">
        <MarketingLandingFreeSEO />
      </div>
    </>
  );
}
