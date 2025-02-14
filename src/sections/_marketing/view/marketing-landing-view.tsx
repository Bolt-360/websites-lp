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

import MarketingTeam from '../team/marketing-team';
import MarketingNewsletter from '../marketing-newsletter';
import MarketingOurClients from '../marketing-our-clients';
import MarketingLandingHero from '../landing/marketing-landing-hero';
import MarketingLandingFaqs from '../landing/marketing-landing-faqs';
import MarketingLandingAbout from '../landing/marketing-landing-about';
import MarketingTestimonial from '../testimonial/marketing-testimonial';
import PricingMarketing from '../../pricing/marketing/pricing-marketing';
import MarketingLandingProcess from '../landing/marketing-landing-process';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import MarketingLandingServices from '../landing/marketing-landing-services';
import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';
import MarketingLandingCaseStudies from '../landing/marketing-landing-case-studies';
import CareerLandingHero from 'src/sections/_career/landing/career-landing-hero';
import ElearningOurClients from 'src/sections/_elearning/elearning-our-clients';
import MarketingServicesBenefits from '../services/marketing-services-benefits';
import MarketingServicesHowItWork from '../services/marketing-services-how-it-work';
import MarketingServicesInclude from '../services/marketing-services-include';
import ElearningTestimonial from 'src/sections/_elearning/testimonial/elearning-testimonial';

// ----------------------------------------------------------------------

export default function MarketingLandingView() {
  return (
    <>
       <CareerLandingHero />

       <ElearningOurClients brands={_brandsColor} />

       <MarketingServicesInclude />

       <MarketingServicesBenefits />

       <MarketingServicesHowItWork />

      <PricingMarketing plans={_pricingMarketing} />

      <ElearningTestimonial testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO />
    </>
  );
}
