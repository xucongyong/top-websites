import Head from 'next/head'
// components/Layout.js
import { GoogleAnalytics,GoogleTagManager } from '@next/third-parties/google'
import { Monitor_Crawlers } from '@/lib/Monitor_Crawlers';
import {GoogleAdSenseKey,GoogleTagManagerKey,GoogleAnalyticsKey} from '@/env'
//import { GoogleAdSense } from "next-google-adsense";
export function Header() {
  return (
    <Head>
            <GoogleAnalytics gaId={GoogleAnalyticsKey} />
            <GoogleTagManager gtmId={GoogleTagManagerKey} />
            {/* <GoogleAdSense publisherId="pub-9548635931783170" />  */}
            <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GoogleAdSenseKey}`}
        crossOrigin="anonymous"></script>
            <Monitor_Crawlers />
          </Head>
  )
}