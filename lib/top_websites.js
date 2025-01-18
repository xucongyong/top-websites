"use client"
import { useEffect,useState } from 'react';  
import {useLocale, useTranslations} from 'next-intl';

export const Top_Website_Categories = () => {
    const [lastSegment, setLastSegment] = useState('');
    useEffect(() => {
      var url = window.location.href;
      const pathSegments = url.split('/');
      url = pathSegments[pathSegments.length - 1];
      setLastSegment(url);
  }, []);
  const locale = useLocale();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    window.location.href = `/${locale}/top-websites/${selectedValue}`; // Adjust the URL path as needed
  };

  
  
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
    return (
        <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        value={lastSegment}
        onChange={handleSelectChange}

      >
            {Object.keys(categories).map(category => (
              <option key={category} value={categories[category]}>{category}</option>
            ))}
      </select>
    );
  };