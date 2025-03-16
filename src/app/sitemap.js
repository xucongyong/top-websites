import {DOMAINURL} from '@/env'

export default function sitemap() {
    var sitemap_data =[
      {
        url: DOMAINURL,
        lastModified: new Date(),
        alternates: {
          languages: {
            en: `${DOMAINURL}/`,
          },
        },
      },
    ]
    //articles sitemap
    var locales = ['']
    const categories = {
      "all": "",
      "Arts and Entertainment": "arts_and_entertainment",
      "Business and Consumer Services":"business_and_consumer_services",
      "Community and Society":"community_and_society",
      "Computers Electronics and Technology":"computers_electronics_and_technology",
      "Ecommerce and Shopping":"ecommerce_and_shopping",
      "Finance":"finance",
      "Food and Drink":"food_and_drink",
      "Gambling":"gambling",
      "Games":"games",
      "Health":"health",
      "Heavy Industry and Engineering":"heavy_industry_and_engineering",
      "Hobbies and Leisure":"hobbies_and_leisure",
      "Home and Garden":"home_and_garden",
      "Jobs and Career":"jobs_and_career",
      "Law and Government":"law_and_government",
      "Lifestyle":"lifestyle",
      "Pets and Animals":"pets_and_animals",
      "Reference Materials":"reference_materials",
      "Science and Education":"science_and_education",
      "Sports":"sports",
      "Travel and Tourism":"travel_and_tourism",
      "Vehicles":"vehicles",
      "Adult":"adult",
    };
    for (let i = 0; i < locales.length; i++) {
      const locale = locales[i];
      Object.entries(categories).forEach(([, value]) => { // 使用空位符忽略第一个参数
        sitemap_data.push({
          url: `${DOMAINURL}/${locale}${value}`,
          lastModified: new Date().toISOString(),
          priority: 0.8,
          changeFrequency: 'monthly',
        });
      });
    }
     
    return sitemap_data; // 添加分号
}