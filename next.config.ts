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
          source: '/blog/fogg_behavior_model',
          destination: '/en/articles/fogg_behavior_model',
          permanent: true,
        },
        {
          source: '/blog/quant/vnpy_tutorial/vnpy_tutorial_0x02_futu/',
          destination: '/en/articles/vnpy_tutorial_0x02_futu',
          permanent: true,
        },
        {
          source: '/blog/quant/vnpy_tutorial/vnpy_tutorial_0x02_futu',
          destination: '/en/articles/vnpy_tutorial_0x02_futu',
          permanent: true,
        },
      ];
    },
    
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);