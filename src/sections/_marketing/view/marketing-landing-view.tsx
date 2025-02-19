'use client';

import {
  _careerPosts,
  _testimonials,
  _marketingPosts,
  _pricingMarketing,
} from 'src/_mock';

// import MarketingLandingGift from '../landing/marketing-landing-gift'
import CareerLatestPosts from 'src/sections/blog/career/career-latest-posts';
import CareerLandingHero from 'src/sections/_career/landing/career-landing-hero';
import ElearningTestimonial from 'src/sections/_elearning/testimonial/elearning-testimonial';

import MarketingLandingFaqs from '../landing/marketing-landing-faqs';
import PricingMarketing from '../../pricing/marketing/pricing-marketing';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import MarketingServicesInclude from '../services/marketing-services-include';
import MarketingServicesBenefits from '../services/marketing-services-benefits';
import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';
import MarketingServicesHowItWork from '../services/marketing-services-how-it-work';
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

      {/* <MarketingLandingGift /> */}

      <MarketingLandingFaqs />

      <div id="portfolio">
        <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />
      </div>
      <div id="blog">
        <CareerLatestPosts posts={_careerPosts.slice(0, 4)} />
      </div>

      <div id="fale-conosco">
        <MarketingLandingFreeSEO />
      </div>
    </>
  );
}
