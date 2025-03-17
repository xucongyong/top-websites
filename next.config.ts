import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {

    reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/en/resource',
          destination: '/en/resources',
          permanent: true,
        },
        {
          source: '/en/',
          destination: '/',
          permanent: true,
        },
        {
          source: '/en/',
          destination: '/',
          permanent: true,
        },



        {
          source: '/top-websites/pets_and_animals',
          destination: '/community_and_society',
          permanent: true,
        },
        {
          source: '/top-websites/community_and_society',
          destination: '/community_and_society',
          permanent: true,
        },
        {
          source: '/top-websites/science_and_education',
          destination: '/science_and_education',
          permanent: true,
        },
        {
          source: '/top-websites/lifestyle',
          destination: '/lifestyle',
          permanent: true,
        },
        {
          source: '/top-websites/games',
          destination: '/games',
          permanent: true,
        },
        {
          source: '/top-websites/vehicles',
          destination: '/vehicles',
          permanent: true,
        },
        {
          source: '/top-websites/computers_electronics_and_technology',
          destination: '/computers_electronics_and_technology',
          permanent: true,
        },
        
        {
          source: '/top-websites/heavy_industry_and_engineering',
          destination: '/heavy_industry_and_engineering',
          permanent: true,
        },
        {
          source: '/top-websites/adult',
          destination: '/adult',
          permanent: true,
        },
        {
          source: '/top-websites/sports',
          destination: '/sports',
          permanent: true,
        },
        {
          source: '/top-websites/sports',
          destination: '/sports',
          permanent: true,
        },
        {
          source: '/top-websites/hobbies_and_leisure',
          destination: '/hobbies_and_leisure',
          permanent: true,
        },
        
        {
          source: '/top-websites/travel_and_tourism',
          destination: '/travel_and_tourism',
          permanent: true,
        },
        {
          source: '/top-websites/health',
          destination: '/health',
          permanent: true,
        },
        {
          source: '/top-websites/food_and_drink',
          destination: '/food_and_drink',
          permanent: true,
        },
        {
          source: '/top-websites/jobs_and_career',
          destination: '/jobs_and_career',
          permanent: true,
        },
        {
          source: '/top-websites/reference_materials',
          destination: '/reference_materials',
          permanent: true,
        },
        {
          source: '/top-websites/arts_and_entertainment',
          destination: '/arts_and_entertainment',
          permanent: true,
        },
        {
          source: '/top-websites/business_and_consumer_services',
          destination: '/business_and_consumer_services',
          permanent: true,
        },
        {
          source: '/top-websites/gambling',
          destination: '/gambling',
          permanent: true,
        },
        {
          source: '/top-websites/ecommerce_and_shopping',
          destination: '/ecommerce_and_shopping',
          permanent: true,
        },
        {
          source: '/top-websites/home_and_garden',
          destination: '/home_and_garden',
          permanent: true,
        },
        {
          source: '/top-websites/law_and_government',
          destination: '/law_and_government',
          permanent: true,
        },
        {
          source: '/top-websites/medical_and_health',
          destination: '/medical_and_health',
          permanent: true,
        },
        {
          source: '/top-websites/real_estate',
          destination: '/real_estate',
          permanent: true,
        },
        {
          source: '/top-websites/technology_and_software',
          destination: '/technology_and_software',
          permanent: true,
        },
        {
          source: '/top-websites/travel_and_tourism',
          destination: '/travel_and_tourism',
          permanent: true,
        },
        {
          source: '/top-websites/weapons_and_armament',
          destination: '/weapons_and_armament',
          permanent: true,
        },
        {
          source: '/top-websites/other',
          destination: '/other',
          permanent: true,
        },
        {
          source: '/top-websites/',
          destination: '/',
          permanent: true,
        }
                
      ];
    },
    
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);