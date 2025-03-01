'use client';
import { useEffect } from 'react';

export function Monitor_Crawlers() {
    useEffect(() => {
        // Check referrer
        const referrer = document.referrer.toLowerCase();
        const searchEngines = [
            'google.', 'baidu.', 'sm.', 'soso.', 'so.', 
            '360.', 'yahoo.', 'youdao.', 'sogou.', 'gougou.',
            'bing.'
        ];

        const isFromSearchEngine = searchEngines.some(engine => referrer.includes(engine));

        // More comprehensive regex pattern for search engines
        const searchEngineRegex = /\.(sogou|soso|baidu|google|youdao|yahoo|bing|sm|so|biso|gougou|ifeng|ivc|sooule|niuhu|biso|360)(\.[a-z0-9\-]+){1,2}\//ig;

        if (isFromSearchEngine || searchEngineRegex.test(referrer)) {
            console.log('Search Engine Referrer:', referrer);
            console.log('Current URL:', window.location.href);
            // 这里可以添加额外的跟踪逻辑，比如发送到分析服务
        }
    }, []); // 仅在组件挂载时运行一次

    return null; // 这个组件不渲染任何UI元素
}