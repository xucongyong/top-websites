
import {Top_Website_Categories} from '@/lib/top_websites';
export const runtime = 'edge';
export const metadata = {
  title: 'Top food and drink Websites Ranking in the World, 2025',
  description: 'The top 1000 most visited entertainment websites in the World by Ahrefs organic search traffic estimates. Updated monthly. 2025',
  keywords: ['Top Websites', 'Top Websites Ranking','food and drink'],
  authors: [
    { name: 'hackX', url: 'https://www.xucongyong.com' }
  ]
}


export default function TopWebsite() {

  const global_rank_all = [
    {
      "global_rank": 1020,
      "category_rank": 1,
      "domain": "kroger.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 44097319.0385149,
      "curr_month_visits": 44097319.0385149,
      "unique_users": 16651250.5142243,
      "pages_per_visit": 4.24555592931061
    },
    {
      "global_rank": 38540,
      "category_rank": 1,
      "domain": "peta.org",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 1694578.69042967,
      "curr_month_visits": 1694578.69042967,
      "unique_users": 1041427.50122053,
      "pages_per_visit": 2.3016101755058
    },
    {
      "global_rank": 3903,
      "category_rank": 1,
      "domain": "suntory.co.jp",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 12385475.5466212,
      "curr_month_visits": 12385475.5466212,
      "unique_users": 5536973.53242403,
      "pages_per_visit": 5.88141627917895
    },
    {
      "global_rank": 557,
      "category_rank": 1,
      "domain": "doordash.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 68911545.6617199,
      "curr_month_visits": 68911545.6617199,
      "unique_users": 31144981.3822427,
      "pages_per_visit": 5.09876220579083
    },
    {
      "global_rank": 338,
      "category_rank": 1,
      "domain": "allrecipes.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 131431818.815047,
      "curr_month_visits": 131431818.815047,
      "unique_users": 63847592.1075756,
      "pages_per_visit": 1.90980007842878
    },
    {
      "global_rank": 251,
      "category_rank": 1,
      "domain": "tabelog.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 123682982.625635,
      "curr_month_visits": 123682982.625635,
      "unique_users": 44252907.4824298,
      "pages_per_visit": 4.87286870910888
    },
    {
      "global_rank": 342,
      "category_rank": 2,
      "domain": "cookpad.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 145908886.163352,
      "curr_month_visits": 145908886.163352,
      "unique_users": 57072043.0084977,
      "pages_per_visit": 2.2672380694281
    },
    {
      "global_rank": 44985,
      "category_rank": 2,
      "domain": "itdoesnttastelikechicken.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 1286665.8954426,
      "curr_month_visits": 1286665.8954426,
      "unique_users": 738728.042051899,
      "pages_per_visit": 2.00026444965035
    },
    {
      "global_rank": 420,
      "category_rank": 2,
      "domain": "trilltrill.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 169811682.161002,
      "curr_month_visits": 169811682.161002,
      "unique_users": 24084816.8777945,
      "pages_per_visit": 1.68448283957083
    },
    {
      "global_rank": 1055,
      "category_rank": 2,
      "domain": "instacart.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 38560136.6344794,
      "curr_month_visits": 38560136.6344794,
      "unique_users": 20227212.9852268,
      "pages_per_visit": 5.71415324972065
    },
    {
      "global_rank": 601,
      "category_rank": 2,
      "domain": "ubereats.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 49496058.6550944,
      "curr_month_visits": 49496058.6550944,
      "unique_users": 21467411.8108825,
      "pages_per_visit": 8.69627373594672
    },
    {
      "global_rank": 5011,
      "category_rank": 2,
      "domain": "totalwine.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 9637468.98286445,
      "curr_month_visits": 9637468.98286445,
      "unique_users": 5945916.00141008,
      "pages_per_visit": 4.02492924534454
    },
    {
      "global_rank": 776,
      "category_rank": 3,
      "domain": "ytmp3.la",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 38282971.8366087,
      "curr_month_visits": 38282971.8366087,
      "unique_users": 11603513.9997448,
      "pages_per_visit": 3.22281285090784
    },
    {
      "global_rank": 1112,
      "category_rank": 3,
      "domain": "russianfood.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 55962985.2803372,
      "curr_month_visits": 55962985.2803372,
      "unique_users": 22026163.4554151,
      "pages_per_visit": 2.56818048996431
    },
    {
      "global_rank": 6702,
      "category_rank": 3,
      "domain": "monsterenergy.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 4395417.04589341,
      "curr_month_visits": 4395417.04589341,
      "unique_users": 1922920.48949851,
      "pages_per_visit": 4.61883690411251
    },
    {
      "global_rank": 1171,
      "category_rank": 3,
      "domain": "tesco.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 29262373.6104805,
      "curr_month_visits": 29262373.6104805,
      "unique_users": 12640226.7623686,
      "pages_per_visit": 7.22202976953155
    },
    {
      "global_rank": 423,
      "category_rank": 3,
      "domain": "hotpepper.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 73639683.4146593,
      "curr_month_visits": 73639683.4146593,
      "unique_users": 27299500.7152654,
      "pages_per_visit": 6.54618425403795
    },
    {
      "global_rank": 46586,
      "category_rank": 3,
      "domain": "happycow.net",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 1192622.43721932,
      "curr_month_visits": 1192622.43721932,
      "unique_users": 706155.771809873,
      "pages_per_visit": 3.90136890706087
    },
    {
      "global_rank": 59291,
      "category_rank": 4,
      "domain": "elavegan.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 1219450.06223598,
      "curr_month_visits": 1219450.06223598,
      "unique_users": 717216.413669943,
      "pages_per_visit": 1.86842290018353
    },
    {
      "global_rank": 917,
      "category_rank": 4,
      "domain": "toasttab.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 48934819.7876782,
      "curr_month_visits": 48934819.7876782,
      "unique_users": 25340603.5270925,
      "pages_per_visit": 4.15652844975586
    },
    {
      "global_rank": 1252,
      "category_rank": 4,
      "domain": "foodnetwork.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 43749958.1842495,
      "curr_month_visits": 43749958.1842495,
      "unique_users": 21614983.5391072,
      "pages_per_visit": 2.44462559820097
    },
    {
      "global_rank": 6880,
      "category_rank": 4,
      "domain": "coca-cola.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 10344744.4676453,
      "curr_month_visits": 10344744.4676453,
      "unique_users": 6025431.02071804,
      "pages_per_visit": 2.83301583064802
    },
    {
      "global_rank": 1372,
      "category_rank": 4,
      "domain": "asda.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 29282670.3928106,
      "curr_month_visits": 29282670.3928106,
      "unique_users": 10553466.9323533,
      "pages_per_visit": 6.04676212207803
    },
    {
      "global_rank": 1368,
      "category_rank": 4,
      "domain": "dropgame.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 31947750.2410896,
      "curr_month_visits": 31947750.2410896,
      "unique_users": 855516.035472431,
      "pages_per_visit": 16.054341032659
    },
    {
      "global_rank": 1319,
      "category_rank": 5,
      "domain": "dominos.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 31272217.1104975,
      "curr_month_visits": 31272217.1104975,
      "unique_users": 16945062.3105772,
      "pages_per_visit": 5.5245258066064
    },
    {
      "global_rank": 1972,
      "category_rank": 5,
      "domain": "recruit.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 36886469.1691585,
      "curr_month_visits": 36886469.1691585,
      "unique_users": 13158780.4419493,
      "pages_per_visit": 2.19999880432349
    },
    {
      "global_rank": 1479,
      "category_rank": 5,
      "domain": "sainsburys.co.uk",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 22894283.2604223,
      "curr_month_visits": 22894283.2604223,
      "unique_users": 9765550.60568504,
      "pages_per_visit": 8.60773653631985
    },
    {
      "global_rank": 10087,
      "category_rank": 5,
      "domain": "vivino.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 6277199.82929588,
      "curr_month_visits": 6277199.82929588,
      "unique_users": 3856521.84692653,
      "pages_per_visit": 2.88262361197934
    },
    {
      "global_rank": 1348,
      "category_rank": 5,
      "domain": "giallozafferano.it",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 48676642.9873057,
      "curr_month_visits": 48676642.9873057,
      "unique_users": 14655147.7814222,
      "pages_per_visit": 2.06850140764445
    },
    {
      "global_rank": 65814,
      "category_rank": 5,
      "domain": "zuckerjagdwurst.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 992832.73666691,
      "curr_month_visits": 992832.73666691,
      "unique_users": 505279.814042961,
      "pages_per_visit": 2.16718801229348
    },
    {
      "global_rank": 2114,
      "category_rank": 6,
      "domain": "otzovik.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 29068582.6567335,
      "curr_month_visits": 29068582.6567335,
      "unique_users": 15386821.0337883,
      "pages_per_visit": 2.85933812405736
    },
    {
      "global_rank": 1439,
      "category_rank": 6,
      "domain": "opentable.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 32481821.1530859,
      "curr_month_visits": 32481821.1530859,
      "unique_users": 19229292.3876675,
      "pages_per_visit": 3.77902527405792
    },
    {
      "global_rank": 69714,
      "category_rank": 6,
      "domain": "eatwithclarity.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 963329.072163675,
      "curr_month_visits": 963329.072163675,
      "unique_users": 557900.597068384,
      "pages_per_visit": 1.99499516985333
    },
    {
      "global_rank": 1498,
      "category_rank": 6,
      "domain": "kurashiru.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 50999781.3031444,
      "curr_month_visits": 50999781.3031444,
      "unique_users": 21353721.1076107,
      "pages_per_visit": 1.60569255601392
    },
    {
      "global_rank": 11450,
      "category_rank": 6,
      "domain": "danmurphys.com.au",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 4621186.05071478,
      "curr_month_visits": 4621186.05071478,
      "unique_users": 2283846.53236894,
      "pages_per_visit": 3.74358244510432
    },
    {
      "global_rank": 1700,
      "category_rank": 6,
      "domain": "kaufland.de",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 30679229.339679,
      "curr_month_visits": 30679229.339679,
      "unique_users": 15095703.4216293,
      "pages_per_visit": 3.38046231100334
    },
    {
      "global_rank": 1687,
      "category_rank": 7,
      "domain": "invl.io",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 42996343.2990527,
      "curr_month_visits": 42996343.2990527,
      "unique_users": 20349779.3175833,
      "pages_per_visit": 1.77194812028959
    },
    {
      "global_rank": 12764,
      "category_rank": 7,
      "domain": "asahibeer.co.jp",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 3607581.2215922,
      "curr_month_visits": 3607581.2215922,
      "unique_users": 2142713.195885,
      "pages_per_visit": 6.04354960816469
    },
    {
      "global_rank": 2611,
      "category_rank": 7,
      "domain": "starbucks.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 17567224.796233,
      "curr_month_visits": 17567224.796233,
      "unique_users": 7894901.76890747,
      "pages_per_visit": 3.73069956452945
    },
    {
      "global_rank": 72382,
      "category_rank": 7,
      "domain": "theplantbasedschool.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 979057.356872924,
      "curr_month_visits": 979057.356872924,
      "unique_users": 445663.760736391,
      "pages_per_visit": 2.615628293906
    },
    {
      "global_rank": 1557,
      "category_rank": 7,
      "domain": "lettuceclub.net",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 36669456.0240768,
      "curr_month_visits": 36669456.0240768,
      "unique_users": 16556256.0403556,
      "pages_per_visit": 3.18210233930962
    },
    {
      "global_rank": 1767,
      "category_rank": 7,
      "domain": "woolworths.com.au",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 21050596.1055453,
      "curr_month_visits": 21050596.1055453,
      "unique_users": 7031749.56666047,
      "pages_per_visit": 7.55327241595806
    },
    {
      "global_rank": 15681,
      "category_rank": 8,
      "domain": "wine-searcher.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 3607709.18634113,
      "curr_month_visits": 3607709.18634113,
      "unique_users": 2129315.4830609,
      "pages_per_visit": 3.72080058711662
    },
    {
      "global_rank": 88043,
      "category_rank": 8,
      "domain": "frommybowl.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 738648.306406314,
      "curr_month_visits": 738648.306406314,
      "unique_users": 436490.983909539,
      "pages_per_visit": 2.15351209954536
    },
    {
      "global_rank": 1817,
      "category_rank": 8,
      "domain": "ifood.com.br",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 27497615.1109033,
      "curr_month_visits": 27497615.1109033,
      "unique_users": 7104584.70988731,
      "pages_per_visit": 5.69154382466234
    },
    {
      "global_rank": 1562,
      "category_rank": 8,
      "domain": "marmiton.org",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 44908610.0077961,
      "curr_month_visits": 44908610.0077961,
      "unique_users": 16062710.8826785,
      "pages_per_visit": 2.01789583206251
    },
    {
      "global_rank": 2709,
      "category_rank": 8,
      "domain": "wamgame.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 15742796.953211,
      "curr_month_visits": 15742796.953211,
      "unique_users": 656255.254682324,
      "pages_per_visit": 16.5689048917001
    },
    {
      "global_rank": 1835,
      "category_rank": 8,
      "domain": "carrefour.fr",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 20341886.0335227,
      "curr_month_visits": 20341886.0335227,
      "unique_users": 9405466.47038373,
      "pages_per_visit": 6.23173878128004
    },
    {
      "global_rank": 2903,
      "category_rank": 9,
      "domain": "gnavi.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 16705750.6882634,
      "curr_month_visits": 16705750.6882634,
      "unique_users": 9348007.86304582,
      "pages_per_visit": 3.77559722180821
    },
    {
      "global_rank": 89421,
      "category_rank": 9,
      "domain": "lovingitvegan.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 691102.22591345,
      "curr_month_visits": 691102.22591345,
      "unique_users": 360592.396505374,
      "pages_per_visit": 2.04249456805937
    },
    {
      "global_rank": 1896,
      "category_rank": 9,
      "domain": "lidl.fr",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 15554454.9647165,
      "curr_month_visits": 15554454.9647165,
      "unique_users": 6802077.75803079,
      "pages_per_visit": 10.6033792168898
    },
    {
      "global_rank": 2309,
      "category_rank": 9,
      "domain": "just-eat.co.uk",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 15583735.7932609,
      "curr_month_visits": 15583735.7932609,
      "unique_users": 5424064.52099844,
      "pages_per_visit": 9.02721286754848
    },
    {
      "global_rank": 1602,
      "category_rank": 9,
      "domain": "chefkoch.de",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 37538654.2226834,
      "curr_month_visits": 37538654.2226834,
      "unique_users": 15305508.3051665,
      "pages_per_visit": 2.61432070402114
    },
    {
      "global_rank": 18546,
      "category_rank": 9,
      "domain": "untappd.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 3778691.18006717,
      "curr_month_visits": 3778691.18006717,
      "unique_users": 2116322.79269473,
      "pages_per_visit": 3.06982610608929
    },
    {
      "global_rank": 89517,
      "category_rank": 10,
      "domain": "bigtix.io",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 442830.295935464,
      "curr_month_visits": 442830.295935464,
      "unique_users": 177417.513143985,
      "pages_per_visit": 5.2423037948674
    },
    {
      "global_rank": 2498,
      "category_rank": 10,
      "domain": "grubhub.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 17429714.5074948,
      "curr_month_visits": 17429714.5074948,
      "unique_users": 8494091.64580402,
      "pages_per_visit": 6.64158647219436
    },
    {
      "global_rank": 1691,
      "category_rank": 10,
      "domain": "tudogostoso.com.br",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 50781107.6361243,
      "curr_month_visits": 50781107.6361243,
      "unique_users": 23739372.7045222,
      "pages_per_visit": 1.36736682727178
    },
    {
      "global_rank": 3194,
      "category_rank": 10,
      "domain": "retty.me",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 19847024.5900908,
      "curr_month_visits": 19847024.5900908,
      "unique_users": 12364969.3870423,
      "pages_per_visit": 2.56893820111582
    },
    {
      "global_rank": 2635,
      "category_rank": 10,
      "domain": "kaufland.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 11183196.1619867,
      "curr_month_visits": 11183196.1619867,
      "unique_users": 4840732.12581396,
      "pages_per_visit": 11.9442865221934
    },
    {
      "global_rank": 21845,
      "category_rank": 10,
      "domain": "liquor.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 3565888.10364104,
      "curr_month_visits": 3565888.10364104,
      "unique_users": 2253643.32325699,
      "pages_per_visit": 1.85729086438772
    },
    {
      "global_rank": 2673,
      "category_rank": 11,
      "domain": "rewe.de",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 20611748.4325604,
      "curr_month_visits": 20611748.4325604,
      "unique_users": 10781263.4311762,
      "pages_per_visit": 3.69992008259064
    },
    {
      "global_rank": 23483,
      "category_rank": 11,
      "domain": "lcbo.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 2309030.66886994,
      "curr_month_visits": 2309030.66886994,
      "unique_users": 1279209.17434538,
      "pages_per_visit": 4.1352729025451
    },
    {
      "global_rank": 1747,
      "category_rank": 11,
      "domain": "bbcgoodfood.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 39443080.91793,
      "curr_month_visits": 39443080.91793,
      "unique_users": 18222336.372543,
      "pages_per_visit": 2.28460451957412
    },
    {
      "global_rank": 3304,
      "category_rank": 11,
      "domain": "nespresso.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 13817156.0310532,
      "curr_month_visits": 13817156.0310532,
      "unique_users": 8042792.59256773,
      "pages_per_visit": 4.42512817494696
    },
    {
      "global_rank": 2519,
      "category_rank": 11,
      "domain": "square.site",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 22694108.8220666,
      "curr_month_visits": 22694108.8220666,
      "unique_users": 13921897.2904096,
      "pages_per_visit": 3.57759628053012
    },
    {
      "global_rank": 90384,
      "category_rank": 11,
      "domain": "pickuplimes.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 635060.08191031,
      "curr_month_visits": 635060.08191031,
      "unique_users": 296278.888571876,
      "pages_per_visit": 2.75630928048289
    },
    {
      "global_rank": 2688,
      "category_rank": 12,
      "domain": "publix.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 18445217.1747787,
      "curr_month_visits": 18445217.1747787,
      "unique_users": 7931855.51384977,
      "pages_per_visit": 4.71184355920048
    },
    {
      "global_rank": 3420,
      "category_rank": 12,
      "domain": "tokubai.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 19534101.8658279,
      "curr_month_visits": 19534101.8658279,
      "unique_users": 6633663.62828173,
      "pages_per_visit": 2.69045852538199
    },
    {
      "global_rank": 90754,
      "category_rank": 12,
      "domain": "slowlyveggie.de",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 732221.929393867,
      "curr_month_visits": 732221.929393867,
      "unique_users": 460677.538400102,
      "pages_per_visit": 1.83408649015481
    },
    {
      "global_rank": 24440,
      "category_rank": 12,
      "domain": "cocacola.co.jp",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 2352063.14968254,
      "curr_month_visits": 2352063.14968254,
      "unique_users": 981592.898958519,
      "pages_per_visit": 4.9292185733766
    },
    {
      "global_rank": 1895,
      "category_rank": 12,
      "domain": "thekitchn.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 33104735.8099807,
      "curr_month_visits": 33104735.8099807,
      "unique_users": 20057165.1894841,
      "pages_per_visit": 1.73178428623521
    },
    {
      "global_rank": 2554,
      "category_rank": 12,
      "domain": "swiggy.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 18787829.7391692,
      "curr_month_visits": 18787829.7391692,
      "unique_users": 6754331.19770822,
      "pages_per_visit": 6.17909691168133
    },
    {
      "global_rank": 24641,
      "category_rank": 13,
      "domain": "pepsico.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 2407494.12855028,
      "curr_month_visits": 2407494.12855028,
      "unique_users": 874415.246042132,
      "pages_per_visit": 4.68087831048383
    },
    {
      "global_rank": 2086,
      "category_rank": 13,
      "domain": "delishkitchen.tv",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 39961923.9216051,
      "curr_month_visits": 39961923.9216051,
      "unique_users": 16532408.4225978,
      "pages_per_visit": 1.59339202572934
    },
    {
      "global_rank": 2761,
      "category_rank": 13,
      "domain": "starbucks.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 20033440.8772398,
      "curr_month_visits": 20033440.8772398,
      "unique_users": 10857343.6279177,
      "pages_per_visit": 3.3420262144023
    },
    {
      "global_rank": 93120,
      "category_rank": 13,
      "domain": "theconsciousplantkitchen.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 784344.8764941,
      "curr_month_visits": 784344.8764941,
      "unique_users": 464675.295654126,
      "pages_per_visit": 1.77653765155671
    },
    {
      "global_rank": 3458,
      "category_rank": 13,
      "domain": "ah.nl",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 15374725.8152516,
      "curr_month_visits": 15374725.8152516,
      "unique_users": 6304743.58432282,
      "pages_per_visit": 4.71277524218221
    },
    {
      "global_rank": 2808,
      "category_rank": 13,
      "domain": "aldi.us",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 18027905.6136856,
      "curr_month_visits": 18027905.6136856,
      "unique_users": 9170126.89748259,
      "pages_per_visit": 4.319734462938
    },
    {
      "global_rank": 2149,
      "category_rank": 14,
      "domain": "recipetineats.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 34246242.6882701,
      "curr_month_visits": 34246242.6882701,
      "unique_users": 16466960.9340721,
      "pages_per_visit": 2.28498504411306
    },
    {
      "global_rank": 93334,
      "category_rank": 14,
      "domain": "plantbasednews.org",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 694259.113123169,
      "curr_month_visits": 694259.113123169,
      "unique_users": 411957.633300065,
      "pages_per_visit": 1.76138866360002
    },
    {
      "global_rank": 2811,
      "category_rank": 14,
      "domain": "coles.com.au",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 15230222.9525107,
      "curr_month_visits": 15230222.9525107,
      "unique_users": 5327345.25371167,
      "pages_per_visit": 6.57610106617396
    },
    {
      "global_rank": 2827,
      "category_rank": 14,
      "domain": "shoptastic.io",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 26004982.2200021,
      "curr_month_visits": 26004982.2200021,
      "unique_users": 13537380.3392981,
      "pages_per_visit": 1.516819320313
    },
    {
      "global_rank": 3534,
      "category_rank": 14,
      "domain": "ica.se",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 17881881.3222867,
      "curr_month_visits": 17881881.3222867,
      "unique_users": 4816741.74561905,
      "pages_per_visit": 3.62325893492294
    },
    {
      "global_rank": 29803,
      "category_rank": 14,
      "domain": "lupicia.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1381319.64953154,
      "curr_month_visits": 1381319.64953154,
      "unique_users": 617105.71806045,
      "pages_per_visit": 5.47741769201034
    },
    {
      "global_rank": 30978,
      "category_rank": 15,
      "domain": "kirin.co.jp",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 2526190.06115418,
      "curr_month_visits": 2526190.06115418,
      "unique_users": 1735316.04602842,
      "pages_per_visit": 2.51799091995264
    },
    {
      "global_rank": 2861,
      "category_rank": 15,
      "domain": "zomato.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 20848573.7736418,
      "curr_month_visits": 20848573.7736418,
      "unique_users": 9907749.93453919,
      "pages_per_visit": 3.6683517927942
    },
    {
      "global_rank": 2507,
      "category_rank": 15,
      "domain": "delish.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 26270370.8994582,
      "curr_month_visits": 26270370.8994582,
      "unique_users": 16887005.7191094,
      "pages_per_visit": 2.10340862117378
    },
    {
      "global_rank": 3896,
      "category_rank": 15,
      "domain": "meijer.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 12309404.0153667,
      "curr_month_visits": 12309404.0153667,
      "unique_users": 5247861.85515477,
      "pages_per_visit": 4.58474158168539
    },
    {
      "global_rank": 2944,
      "category_rank": 15,
      "domain": "lidl.pl",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 11550453.4480731,
      "curr_month_visits": 11550453.4480731,
      "unique_users": 4255008.47134677,
      "pages_per_visit": 8.71172187867118
    },
    {
      "global_rank": 94729,
      "category_rank": 15,
      "domain": "plantyou.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 728398.817328415,
      "curr_month_visits": 728398.817328415,
      "unique_users": 341661.556190786,
      "pages_per_visit": 2.60316718201817
    },
    {
      "global_rank": 3427,
      "category_rank": 16,
      "domain": "safeway.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 13904335.01891,
      "curr_month_visits": 13904335.01891,
      "unique_users": 5699352.98424051,
      "pages_per_visit": 5.52065382012987
    },
    {
      "global_rank": 33470,
      "category_rank": 16,
      "domain": "doutor.co.jp",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1880424.61406923,
      "curr_month_visits": 1880424.61406923,
      "unique_users": 1090653.85664031,
      "pages_per_visit": 3.15283092614186
    },
    {
      "global_rank": 95043,
      "category_rank": 16,
      "domain": "eat-this.org",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 536930.376324493,
      "curr_month_visits": 536930.376324493,
      "unique_users": 302936.248842305,
      "pages_per_visit": 2.06764319565088
    },
    {
      "global_rank": 2556,
      "category_rank": 16,
      "domain": "tasteofhome.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 23829047.9886619,
      "curr_month_visits": 23829047.9886619,
      "unique_users": 14065534.965432,
      "pages_per_visit": 2.2923892493864
    },
    {
      "global_rank": 4060,
      "category_rank": 16,
      "domain": "wolt.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 10212758.390176,
      "curr_month_visits": 10212758.390176,
      "unique_users": 4573219.35975318,
      "pages_per_visit": 7.7792678719728
    },
    {
      "global_rank": 3256,
      "category_rank": 16,
      "domain": "mcdonalds.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 21088185.975176,
      "curr_month_visits": 21088185.975176,
      "unique_users": 14570579.3240723,
      "pages_per_visit": 2.58820563584836
    },
    {
      "global_rank": 3819,
      "category_rank": 17,
      "domain": "papajohns.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 11441596.7645303,
      "curr_month_visits": 11441596.7645303,
      "unique_users": 6887465.97383419,
      "pages_per_visit": 6.74682034558412
    },
    {
      "global_rank": 3578,
      "category_rank": 17,
      "domain": "carrefour.es",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 10802971.5266124,
      "curr_month_visits": 10802971.5266124,
      "unique_users": 5200793.88881857,
      "pages_per_visit": 7.03815968593844
    },
    {
      "global_rank": 99048,
      "category_rank": 17,
      "domain": "veganricha.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 605997.551267778,
      "curr_month_visits": 605997.551267778,
      "unique_users": 319105.903533721,
      "pages_per_visit": 2.06816001545075
    },
    {
      "global_rank": 4245,
      "category_rank": 17,
      "domain": "news.ntv.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 21237259.0881121,
      "curr_month_visits": 21237259.0881121,
      "unique_users": 13476209.7762061,
      "pages_per_visit": 1.57250435142566
    },
    {
      "global_rank": 2561,
      "category_rank": 17,
      "domain": "parade.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 28895305.8463484,
      "curr_month_visits": 28895305.8463484,
      "unique_users": 18929139.790333,
      "pages_per_visit": 1.50964754906945
    },
    {
      "global_rank": 33686,
      "category_rank": 17,
      "domain": "hellorayo.co.uk",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 2246431.7613688,
      "curr_month_visits": 2246431.7613688,
      "unique_users": 1194609.36115381,
      "pages_per_visit": 2.06345004335318
    },
    {
      "global_rank": 34171,
      "category_rank": 18,
      "domain": "yango.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1933781.4939585,
      "curr_month_visits": 1933781.4939585,
      "unique_users": 954790.520769129,
      "pages_per_visit": 2.63885964359282
    },
    {
      "global_rank": 4653,
      "category_rank": 18,
      "domain": "championcross.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 12263208.2804041,
      "curr_month_visits": 12263208.2804041,
      "unique_users": 3021860.54274272,
      "pages_per_visit": 5.16362796085027
    },
    {
      "global_rank": 104150,
      "category_rank": 18,
      "domain": "mediafyre.net",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 456482.465170662,
      "curr_month_visits": 456482.465170662,
      "unique_users": 307746.624102276,
      "pages_per_visit": 2.33360466781863
    },
    {
      "global_rank": 4032,
      "category_rank": 18,
      "domain": "pizzahut.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 12496141.0098096,
      "curr_month_visits": 12496141.0098096,
      "unique_users": 7590606.40748858,
      "pages_per_visit": 5.37950794497468
    },
    {
      "global_rank": 4082,
      "category_rank": 18,
      "domain": "morrisons.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 9837257.79993612,
      "curr_month_visits": 9837257.79993612,
      "unique_users": 4256863.92674038,
      "pages_per_visit": 7.68562536216795
    },
    {
      "global_rank": 2644,
      "category_rank": 18,
      "domain": "1000.menu",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 27770123.480836,
      "curr_month_visits": 27770123.480836,
      "unique_users": 13578372.290036,
      "pages_per_visit": 2.05686357459031
    },
    {
      "global_rank": 5319,
      "category_rank": 19,
      "domain": "webstaurantstore.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 10466832.7494504,
      "curr_month_visits": 10466832.7494504,
      "unique_users": 5648027.64219203,
      "pages_per_visit": 4.7380186957909
    },
    {
      "global_rank": 4147,
      "category_rank": 19,
      "domain": "mitiendanube.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 11190082.2978574,
      "curr_month_visits": 11190082.2978574,
      "unique_users": 3523600.96842964,
      "pages_per_visit": 7.20709650499624
    },
    {
      "global_rank": 35379,
      "category_rank": 19,
      "domain": "pepsico.info",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1973792.58171388,
      "curr_month_visits": 1973792.58171388,
      "unique_users": 1520303.26624334,
      "pages_per_visit": 1.27849717041714
    },
    {
      "global_rank": 108256,
      "category_rank": 19,
      "domain": "vegnews.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 601137.465815139,
      "curr_month_visits": 601137.465815139,
      "unique_users": 365451.000130978,
      "pages_per_visit": 1.86740731587795
    },
    {
      "global_rank": 4218,
      "category_rank": 19,
      "domain": "heb.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 11359207.6831924,
      "curr_month_visits": 11359207.6831924,
      "unique_users": 4421757.67662696,
      "pages_per_visit": 6.13635339257729
    },
    {
      "global_rank": 2758,
      "category_rank": 19,
      "domain": "sallysbakingaddiction.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 21422384.1488706,
      "curr_month_visits": 21422384.1488706,
      "unique_users": 10891707.3487782,
      "pages_per_visit": 2.38463424302978
    },
    {
      "global_rank": 113781,
      "category_rank": 20,
      "domain": "thefoodietakesflight.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 564083.945345771,
      "curr_month_visits": 564083.945345771,
      "unique_users": 329618.889007487,
      "pages_per_visit": 1.95358980227156
    },
    {
      "global_rank": 4876,
      "category_rank": 20,
      "domain": "ocado.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 7757222.41723517,
      "curr_month_visits": 7757222.41723517,
      "unique_users": 3269421.85089938,
      "pages_per_visit": 9.6757188502544
    },
    {
      "global_rank": 36890,
      "category_rank": 20,
      "domain": "masterofmalt.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1177137.78744173,
      "curr_month_visits": 1177137.78744173,
      "unique_users": 612738.078217416,
      "pages_per_visit": 3.97661326853583
    },
    {
      "global_rank": 4223,
      "category_rank": 20,
      "domain": "order.online",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 14399931.2773878,
      "curr_month_visits": 14399931.2773878,
      "unique_users": 9253357.22842931,
      "pages_per_visit": 2.93475736790571
    },
    {
      "global_rank": 6005,
      "category_rank": 20,
      "domain": "eater.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 14093860.0600979,
      "curr_month_visits": 14093860.0600979,
      "unique_users": 8547669.21624153,
      "pages_per_visit": 1.94570004215731
    },
    {
      "global_rank": 2781,
      "category_rank": 20,
      "domain": "eatingwell.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 25708395.673492,
      "curr_month_visits": 25708395.673492,
      "unique_users": 15345842.4873321,
      "pages_per_visit": 2.03005905341957
    },
    {
      "global_rank": 6283,
      "category_rank": 21,
      "domain": "furunavi.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 7500351.71116024,
      "curr_month_visits": 7500351.71116024,
      "unique_users": 4367795.99079841,
      "pages_per_visit": 4.34606817262339
    },
    {
      "global_rank": 37686,
      "category_rank": 21,
      "domain": "elmachips.com.br",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1925817.21893689,
      "curr_month_visits": 1925817.21893689,
      "unique_users": 1337031.11879709,
      "pages_per_visit": 2.07416039426871
    },
    {
      "global_rank": 4286,
      "category_rank": 21,
      "domain": "resy.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 12262580.3086341,
      "curr_month_visits": 12262580.3086341,
      "unique_users": 7006358.27585344,
      "pages_per_visit": 4.19332597761719
    },
    {
      "global_rank": 3078,
      "category_rank": 21,
      "domain": "simplyrecipes.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 23716510.1883493,
      "curr_month_visits": 23716510.1883493,
      "unique_users": 14486234.9854678,
      "pages_per_visit": 1.61116574956773
    },
    {
      "global_rank": 123486,
      "category_rank": 21,
      "domain": "satvicmovement.org",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 514883.920498674,
      "curr_month_visits": 514883.920498674,
      "unique_users": 266633.329782262,
      "pages_per_visit": 2.22205029750425
    },
    {
      "global_rank": 5021,
      "category_rank": 21,
      "domain": "lidl.nl",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 8732870.51049292,
      "curr_month_visits": 8732870.51049292,
      "unique_users": 3522189.63992108,
      "pages_per_visit": 5.9916079376122
    },
    {
      "global_rank": 5031,
      "category_rank": 22,
      "domain": "lidl.it",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 7601136.13988055,
      "curr_month_visits": 7601136.13988055,
      "unique_users": 2919174.22536466,
      "pages_per_visit": 8.00503393578444
    },
    {
      "global_rank": 3079,
      "category_rank": 22,
      "domain": "seriouseats.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 19170607.2187515,
      "curr_month_visits": 19170607.2187515,
      "unique_users": 10528103.7396492,
      "pages_per_visit": 2.05144820080452
    },
    {
      "global_rank": 39821,
      "category_rank": 22,
      "domain": "wine.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1321911.0466395,
      "curr_month_visits": 1321911.0466395,
      "unique_users": 850212.77510195,
      "pages_per_visit": 3.29686601486789
    },
    {
      "global_rank": 124533,
      "category_rank": 22,
      "domain": "nashgogogo.tw",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 516143.879707701,
      "curr_month_visits": 516143.879707701,
      "unique_users": 274273.860426152,
      "pages_per_visit": 1.35007494802343
    },
    {
      "global_rank": 6425,
      "category_rank": 22,
      "domain": "family.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 11378723.0367648,
      "curr_month_visits": 11378723.0367648,
      "unique_users": 5728168.63007053,
      "pages_per_visit": 2.40701697920684
    },
    {
      "global_rank": 4464,
      "category_rank": 22,
      "domain": "mcdonalds.co.jp",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 14418888.91476,
      "curr_month_visits": 14418888.91476,
      "unique_users": 8309750.51142826,
      "pages_per_visit": 2.85582503638194
    },
    {
      "global_rank": 6833,
      "category_rank": 23,
      "domain": "directoalpaladar.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 12912739.5072057,
      "curr_month_visits": 12912739.5072057,
      "unique_users": 7245198.56110289,
      "pages_per_visit": 1.63245030353716
    },
    {
      "global_rank": 4868,
      "category_rank": 23,
      "domain": "demae-can.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 9411100.22607242,
      "curr_month_visits": 9411100.22607242,
      "unique_users": 3736075.0480141,
      "pages_per_visit": 6.04639983310356
    },
    {
      "global_rank": 3103,
      "category_rank": 23,
      "domain": "thepioneerwoman.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 19541744.3754932,
      "curr_month_visits": 19541744.3754932,
      "unique_users": 12727239.7834188,
      "pages_per_visit": 1.87078241110323
    },
    {
      "global_rank": 125520,
      "category_rank": 23,
      "domain": "farmfreshtoyou.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 272738.768201977,
      "curr_month_visits": 272738.768201977,
      "unique_users": 123200.251242245,
      "pages_per_visit": 5.61786745112301
    },
    {
      "global_rank": 5041,
      "category_rank": 23,
      "domain": "satofull.jp",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 6936670.68212042,
      "curr_month_visits": 6936670.68212042,
      "unique_users": 3582330.98504398,
      "pages_per_visit": 6.00072338033082
    },
    {
      "global_rank": 40174,
      "category_rank": 23,
      "domain": "sapporobeer.jp",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1926219.54197342,
      "curr_month_visits": 1926219.54197342,
      "unique_users": 1389103.47922825,
      "pages_per_visit": 1.95169628290668
    },
    {
      "global_rank": 129654,
      "category_rank": 24,
      "domain": "fairment.de",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 313507.599148219,
      "curr_month_visits": 313507.599148219,
      "unique_users": 175729.223312112,
      "pages_per_visit": 2.50355618134297
    },
    {
      "global_rank": 5085,
      "category_rank": 24,
      "domain": "aldi-sued.de",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 8104505.69571992,
      "curr_month_visits": 8104505.69571992,
      "unique_users": 3992634.65603751,
      "pages_per_visit": 7.24213940144
    },
    {
      "global_rank": 7154,
      "category_rank": 24,
      "domain": "ajinomoto.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 12331399.3956027,
      "curr_month_visits": 12331399.3956027,
      "unique_users": 7077000.98288782,
      "pages_per_visit": 1.83190306266746
    },
    {
      "global_rank": 42240,
      "category_rank": 24,
      "domain": "cellartracker.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1091886.64390271,
      "curr_month_visits": 1091886.64390271,
      "unique_users": 490585.09853088,
      "pages_per_visit": 4.90161918602418
    },
    {
      "global_rank": 3147,
      "category_rank": 24,
      "domain": "oceans-nadia.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 26075140.8192412,
      "curr_month_visits": 26075140.8192412,
      "unique_users": 10482012.1363616,
      "pages_per_visit": 1.82683874759464
    },
    {
      "global_rank": 5002,
      "category_rank": 24,
      "domain": "tacobell.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 10828810.7290377,
      "curr_month_visits": 10828810.7290377,
      "unique_users": 7518811.27744508,
      "pages_per_visit": 4.40353564447975
    },
    {
      "global_rank": 7352,
      "category_rank": 25,
      "domain": "k-ruoka.fi",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 7419405.77208968,
      "curr_month_visits": 7419405.77208968,
      "unique_users": 3020652.42332563,
      "pages_per_visit": 4.85872748846905
    },
    {
      "global_rank": 5392,
      "category_rank": 25,
      "domain": "leclercdrive.fr",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 5806294.23451459,
      "curr_month_visits": 5806294.23451459,
      "unique_users": 1993174.77792758,
      "pages_per_visit": 14.5098766735542
    },
    {
      "global_rank": 131260,
      "category_rank": 25,
      "domain": "namawell.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 268030.650134633,
      "curr_month_visits": 268030.650134633,
      "unique_users": 139947.498400917,
      "pages_per_visit": 4.19018274139791
    },
    {
      "global_rank": 3265,
      "category_rank": 25,
      "domain": "macaro-ni.jp",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 22337169.3217598,
      "curr_month_visits": 22337169.3217598,
      "unique_users": 12435564.0379379,
      "pages_per_visit": 1.94439794691401
    },
    {
      "global_rank": 42560,
      "category_rank": 25,
      "domain": "beer52.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 832449.344816485,
      "curr_month_visits": 832449.344816485,
      "unique_users": 511693.761855653,
      "pages_per_visit": 4.34363834738431
    },
    {
      "global_rank": 5054,
      "category_rank": 25,
      "domain": "lieferando.de",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 9796646.05037651,
      "curr_month_visits": 9796646.05037651,
      "unique_users": 3985742.4821473,
      "pages_per_visit": 6.34349722744117
    },
    {
      "global_rank": 3334,
      "category_rank": 26,
      "domain": "cuisineaz.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 18888671.0097146,
      "curr_month_visits": 18888671.0097146,
      "unique_users": 8995696.54611427,
      "pages_per_visit": 2.54970096329947
    },
    {
      "global_rank": 43895,
      "category_rank": 26,
      "domain": "lsp-campaign.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1717557.77529814,
      "curr_month_visits": 1717557.77529814,
      "unique_users": 674513.99992038,
      "pages_per_visit": 1.596390617431
    },
    {
      "global_rank": 5149,
      "category_rank": 26,
      "domain": "chick-fil-a.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 11474671.5838679,
      "curr_month_visits": 11474671.5838679,
      "unique_users": 8508017.93413658,
      "pages_per_visit": 4.2292252827581
    },
    {
      "global_rank": 7406,
      "category_rank": 26,
      "domain": "vauva.fi",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 8158368.87194442,
      "curr_month_visits": 8158368.87194442,
      "unique_users": 1653486.87303851,
      "pages_per_visit": 5.39721154403351
    },
    {
      "global_rank": 133148,
      "category_rank": 26,
      "domain": "qopla.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 457620.85196501,
      "curr_month_visits": 457620.85196501,
      "unique_users": 171584.805554109,
      "pages_per_visit": 2.80694094008298
    },
    {
      "global_rank": 5693,
      "category_rank": 26,
      "domain": "wholefoodsmarket.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 8879733.00953894,
      "curr_month_visits": 8879733.00953894,
      "unique_users": 5944663.80980122,
      "pages_per_visit": 3.3051264200068
    },
    {
      "global_rank": 136626,
      "category_rank": 27,
      "domain": "makeitdairyfree.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 435841.458271773,
      "curr_month_visits": 435841.458271773,
      "unique_users": 190840.615818777,
      "pages_per_visit": 2.74185326991997
    },
    {
      "global_rank": 5262,
      "category_rank": 27,
      "domain": "sevenrooms.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 13402390.2026684,
      "curr_month_visits": 13402390.2026684,
      "unique_users": 7204634.3051056,
      "pages_per_visit": 2.51597395900152
    },
    {
      "global_rank": 3449,
      "category_rank": 27,
      "domain": "food.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 20471012.0203996,
      "curr_month_visits": 20471012.0203996,
      "unique_users": 13435571.9038611,
      "pages_per_visit": 1.9287024914159
    },
    {
      "global_rank": 44072,
      "category_rank": 27,
      "domain": "whiskybase.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1110462.98912399,
      "curr_month_visits": 1110462.98912399,
      "unique_users": 431048.030461388,
      "pages_per_visit": 4.97655162549967
    },
    {
      "global_rank": 6406,
      "category_rank": 27,
      "domain": "intermarche.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 5494518.19183723,
      "curr_month_visits": 5494518.19183723,
      "unique_users": 2763984.25640971,
      "pages_per_visit": 10.5160256734176
    },
    {
      "global_rank": 7522,
      "category_rank": 27,
      "domain": "jp.sharp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 6610887.1233905,
      "curr_month_visits": 6610887.1233905,
      "unique_users": 2978050.65767032,
      "pages_per_visit": 5.27952944214812
    },
    {
      "global_rank": 140658,
      "category_rank": 28,
      "domain": "planthood.co.uk",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 303651.929344994,
      "curr_month_visits": 303651.929344994,
      "unique_users": 75459.2242283702,
      "pages_per_visit": 6.21558596017027
    },
    {
      "global_rank": 44260,
      "category_rank": 28,
      "domain": "readyrefresh.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1198159.60240862,
      "curr_month_visits": 1198159.60240862,
      "unique_users": 674897.420538373,
      "pages_per_visit": 4.63060018518196
    },
    {
      "global_rank": 3551,
      "category_rank": 28,
      "domain": "foodandwine.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 21087397.9141429,
      "curr_month_visits": 21087397.9141429,
      "unique_users": 14000009.5545712,
      "pages_per_visit": 1.73923792476852
    },
    {
      "global_rank": 5304,
      "category_rank": 28,
      "domain": "littlecaesars.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 9058192.76519933,
      "curr_month_visits": 9058192.76519933,
      "unique_users": 5763097.79047652,
      "pages_per_visit": 4.14660264545998
    },
    {
      "global_rank": 7707,
      "category_rank": 28,
      "domain": "hellofresh.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 7697211.81825006,
      "curr_month_visits": 7697211.81825006,
      "unique_users": 4317068.55056013,
      "pages_per_visit": 4.50254165858742
    },
    {
      "global_rank": 6407,
      "category_rank": 28,
      "domain": "waitrose.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 7229014.42499474,
      "curr_month_visits": 7229014.42499474,
      "unique_users": 3842518.91297864,
      "pages_per_visit": 5.23174483722525
    },
    {
      "global_rank": 3679,
      "category_rank": 29,
      "domain": "loveandlemons.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 21317623.0204823,
      "curr_month_visits": 21317623.0204823,
      "unique_users": 13785945.9518092,
      "pages_per_visit": 1.81359887328614
    },
    {
      "global_rank": 7936,
      "category_rank": 29,
      "domain": "libbyapp.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 6031489.46261143,
      "curr_month_visits": 6031489.46261143,
      "unique_users": 1806401.19638769,
      "pages_per_visit": 6.84796418839955
    },
    {
      "global_rank": 44619,
      "category_rank": 29,
      "domain": "diffordsguide.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1369648.22020461,
      "curr_month_visits": 1369648.22020461,
      "unique_users": 767176.211473885,
      "pages_per_visit": 3.10443309429879
    },
    {
      "global_rank": 143387,
      "category_rank": 29,
      "domain": "danzadefogones.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 468549.352051409,
      "curr_month_visits": 468549.352051409,
      "unique_users": 293538.786696256,
      "pages_per_visit": 1.43446260317143
    },
    {
      "global_rank": 5358,
      "category_rank": 29,
      "domain": "tablecheck.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 12817039.1341619,
      "curr_month_visits": 12817039.1341619,
      "unique_users": 6390167.77038319,
      "pages_per_visit": 2.67121696740832
    },
    {
      "global_rank": 6957,
      "category_rank": 29,
      "domain": "biedronka.pl",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 8696774.0009833,
      "curr_month_visits": 8696774.0009833,
      "unique_users": 3211708.8424953,
      "pages_per_visit": 3.35467065886845
    },
    {
      "global_rank": 143709,
      "category_rank": 30,
      "domain": "schoolnightvegan.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 324974.259498138,
      "curr_month_visits": 324974.259498138,
      "unique_users": 173280.57435418,
      "pages_per_visit": 2.10032867402692
    },
    {
      "global_rank": 46842,
      "category_rank": 30,
      "domain": "mikmak.ai",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 2007104.18411484,
      "curr_month_visits": 2007104.18411484,
      "unique_users": 1518032.74645079,
      "pages_per_visit": 1.27983650990322
    },
    {
      "global_rank": 4092,
      "category_rank": 30,
      "domain": "nefisyemektarifleri.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 20554408.5229133,
      "curr_month_visits": 20554408.5229133,
      "unique_users": 7446851.26273952,
      "pages_per_visit": 1.96975361453337
    },
    {
      "global_rank": 5416,
      "category_rank": 30,
      "domain": "skylark.co.jp",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 10059245.5980631,
      "curr_month_visits": 10059245.5980631,
      "unique_users": 5820893.96889154,
      "pages_per_visit": 4.07359983593533
    },
    {
      "global_rank": 8098,
      "category_rank": 30,
      "domain": "kfc.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 7319916.14628717,
      "curr_month_visits": 7319916.14628717,
      "unique_users": 4604443.61743366,
      "pages_per_visit": 3.236460666349
    },
    {
      "global_rank": 7025,
      "category_rank": 30,
      "domain": "aldi.co.uk",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 7169113.04188829,
      "curr_month_visits": 7169113.04188829,
      "unique_users": 3750788.77693709,
      "pages_per_visit": 4.75895542418834
    },
    {
      "global_rank": 159221,
      "category_rank": 31,
      "domain": "sarahsvegankitchen.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 301818.353084419,
      "curr_month_visits": 301818.353084419,
      "unique_users": 135688.32281138,
      "pages_per_visit": 2.59643676618281
    },
    {
      "global_rank": 7127,
      "category_rank": 31,
      "domain": "iceland.co.uk",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 6631060.99955306,
      "curr_month_visits": 6631060.99955306,
      "unique_users": 2345147.64902062,
      "pages_per_visit": 7.11002330311636
    },
    {
      "global_rank": 8202,
      "category_rank": 31,
      "domain": "vkusvill.ru",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 6224336.02290022,
      "curr_month_visits": 6224336.02290022,
      "unique_users": 2706264.98595422,
      "pages_per_visit": 5.93151473602923
    },
    {
      "global_rank": 5551,
      "category_rank": 31,
      "domain": "subway.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 10094352.1989645,
      "curr_month_visits": 10094352.1989645,
      "unique_users": 6434535.2104611,
      "pages_per_visit": 5.28183162455122
    },
    {
      "global_rank": 47689,
      "category_rank": 31,
      "domain": "meandu.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 790671.541835358,
      "curr_month_visits": 790671.541835358,
      "unique_users": 421817.555833421,
      "pages_per_visit": 7.28361286689486
    },
    {
      "global_rank": 4300,
      "category_rank": 31,
      "domain": "aniagotuje.pl",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 20122012.4896999,
      "curr_month_visits": 20122012.4896999,
      "unique_users": 7891183.71089592,
      "pages_per_visit": 1.89123492116984
    },
    {
      "global_rank": 5850,
      "category_rank": 32,
      "domain": "sej.co.jp",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 11587299.5233194,
      "curr_month_visits": 11587299.5233194,
      "unique_users": 5800486.28605984,
      "pages_per_visit": 2.88969593303264
    },
    {
      "global_rank": 160337,
      "category_rank": 32,
      "domain": "thebananadiaries.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 341543.82552719,
      "curr_month_visits": 341543.82552719,
      "unique_users": 178250.402929258,
      "pages_per_visit": 2.0963593603953
    },
    {
      "global_rank": 47710,
      "category_rank": 32,
      "domain": "alliedbeverage.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1058631.81661861,
      "curr_month_visits": 1058631.81661861,
      "unique_users": 86814.4882915882,
      "pages_per_visit": 14.2963179883512
    },
    {
      "global_rank": 7345,
      "category_rank": 32,
      "domain": "yemeksepeti.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 7135167.12423101,
      "curr_month_visits": 7135167.12423101,
      "unique_users": 2243743.60951939,
      "pages_per_visit": 6.71271672380385
    },
    {
      "global_rank": 4416,
      "category_rank": 32,
      "domain": "spendwithpennies.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 14743261.7811954,
      "curr_month_visits": 14743261.7811954,
      "unique_users": 9134519.50141461,
      "pages_per_visit": 2.00126333905001
    },
    {
      "global_rank": 8270,
      "category_rank": 32,
      "domain": "ozmall.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 7921548.57136331,
      "curr_month_visits": 7921548.57136331,
      "unique_users": 5298430.55416967,
      "pages_per_visit": 2.81828014548559
    },
    {
      "global_rank": 7511,
      "category_rank": 33,
      "domain": "roller.app",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 5273823.29230209,
      "curr_month_visits": 5273823.29230209,
      "unique_users": 2533445.67056085,
      "pages_per_visit": 10.2329585287106
    },
    {
      "global_rank": 161316,
      "category_rank": 33,
      "domain": "onegreenplanet.org",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 356326.954160789,
      "curr_month_visits": 356326.954160789,
      "unique_users": 222215.865026521,
      "pages_per_visit": 1.84121348194334
    },
    {
      "global_rank": 4444,
      "category_rank": 33,
      "domain": "tastesbetterfromscratch.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 15095799.9102787,
      "curr_month_visits": 15095799.9102787,
      "unique_users": 8901467.89780153,
      "pages_per_visit": 2.13618738324497
    },
    {
      "global_rank": 8619,
      "category_rank": 33,
      "domain": "thuisbezorgd.nl",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 5464560.77325164,
      "curr_month_visits": 5464560.77325164,
      "unique_users": 2140813.08818441,
      "pages_per_visit": 6.04921561304852
    },
    {
      "global_rank": 6022,
      "category_rank": 33,
      "domain": "bttn.io",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 10014914.5031959,
      "curr_month_visits": 10014914.5031959,
      "unique_users": 6884743.32284388,
      "pages_per_visit": 1.78428597451484
    },
    {
      "global_rank": 48670,
      "category_rank": 33,
      "domain": "shop.mikmak.ai",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1957473.94907236,
      "curr_month_visits": 1957473.94907236,
      "unique_users": 1476254.10566629,
      "pages_per_visit": 1.27094952646024
    },
    {
      "global_rank": 6081,
      "category_rank": 34,
      "domain": "deliveroo.co.uk",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 7135600.01819743,
      "curr_month_visits": 7135600.01819743,
      "unique_users": 3022005.18887121,
      "pages_per_visit": 7.73669020144796
    },
    {
      "global_rank": 161395,
      "category_rank": 34,
      "domain": "wodup.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 329315.190302485,
      "curr_month_visits": 329315.190302485,
      "unique_users": 48903.089958935,
      "pages_per_visit": 2.87386509115217
    },
    {
      "global_rank": 9063,
      "category_rank": 34,
      "domain": "dianping.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 9232882.83388892,
      "curr_month_visits": 9232882.83388892,
      "unique_users": 5697983.72550511,
      "pages_per_visit": 2.71334676528773
    },
    {
      "global_rank": 49352,
      "category_rank": 34,
      "domain": "beeradvocate.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1390437.74255528,
      "curr_month_visits": 1390437.74255528,
      "unique_users": 756754.729915191,
      "pages_per_visit": 2.62018864892712
    },
    {
      "global_rank": 7883,
      "category_rank": 34,
      "domain": "migros.com.tr",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 6892067.03604739,
      "curr_month_visits": 6892067.03604739,
      "unique_users": 3211518.28001432,
      "pages_per_visit": 5.36728920825216
    },
    {
      "global_rank": 5207,
      "category_rank": 34,
      "domain": "fattoincasadabenedetta.it",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 15022653.4329937,
      "curr_month_visits": 15022653.4329937,
      "unique_users": 6637040.40941426,
      "pages_per_visit": 1.88175960085529
    },
    {
      "global_rank": 6104,
      "category_rank": 35,
      "domain": "panerabread.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 9046659.73888501,
      "curr_month_visits": 9046659.73888501,
      "unique_users": 4979242.71347574,
      "pages_per_visit": 4.33839037998102
    },
    {
      "global_rank": 7973,
      "category_rank": 35,
      "domain": "shoprite.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 4955081.33516139,
      "curr_month_visits": 4955081.33516139,
      "unique_users": 2046885.67556432,
      "pages_per_visit": 7.53909502181062
    },
    {
      "global_rank": 5228,
      "category_rank": 35,
      "domain": "pysznosci.pl",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 19099291.8794046,
      "curr_month_visits": 19099291.8794046,
      "unique_users": 9339354.97434094,
      "pages_per_visit": 1.63136602731061
    },
    {
      "global_rank": 50412,
      "category_rank": 35,
      "domain": "liquorland.com.au",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1067450.64641937,
      "curr_month_visits": 1067450.64641937,
      "unique_users": 570380.13433679,
      "pages_per_visit": 2.4690273633226
    },
    {
      "global_rank": 165356,
      "category_rank": 35,
      "domain": "plantbasedrdblog.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 373426.931558048,
      "curr_month_visits": 373426.931558048,
      "unique_users": 155470.464892062,
      "pages_per_visit": 2.82535956046911
    },
    {
      "global_rank": 9180,
      "category_rank": 35,
      "domain": "foodlion.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 6075180.06729019,
      "curr_month_visits": 6075180.06729019,
      "unique_users": 2420243.80640822,
      "pages_per_visit": 4.55693301087032
    },
    {
      "global_rank": 5526,
      "category_rank": 36,
      "domain": "woman.excite.co.jp",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 8101788.46180431,
      "curr_month_visits": 8101788.46180431,
      "unique_users": 2503567.26034031,
      "pages_per_visit": 8.91011930449942
    },
    {
      "global_rank": 6447,
      "category_rank": 36,
      "domain": "crackerbarrel.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 5772404.40149541,
      "curr_month_visits": 5772404.40149541,
      "unique_users": 3115846.75185872,
      "pages_per_visit": 4.92159702459294
    },
    {
      "global_rank": 9474,
      "category_rank": 36,
      "domain": "epark.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 9199704.44113009,
      "curr_month_visits": 9199704.44113009,
      "unique_users": 5627976.50696923,
      "pages_per_visit": 2.96822935349771
    },
    {
      "global_rank": 8109,
      "category_rank": 36,
      "domain": "kuper.ru",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 7221394.19699193,
      "curr_month_visits": 7221394.19699193,
      "unique_users": 3496785.4913569,
      "pages_per_visit": 5.57058336431672
    },
    {
      "global_rank": 165947,
      "category_rank": 36,
      "domain": "plantbasedonabudget.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 289057.956718788,
      "curr_month_visits": 289057.956718788,
      "unique_users": 161360.294765946,
      "pages_per_visit": 2.14217403755015
    },
    {
      "global_rank": 50667,
      "category_rank": 36,
      "domain": "ohlq.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 678808.028854683,
      "curr_month_visits": 678808.028854683,
      "unique_users": 194462.15924464,
      "pages_per_visit": 8.75803510456652
    },
    {
      "global_rank": 50991,
      "category_rank": 37,
      "domain": "thewhiskyexchange.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1053590.25979822,
      "curr_month_visits": 1053590.25979822,
      "unique_users": 637197.540233091,
      "pages_per_visit": 3.12124985386377
    },
    {
      "global_rank": 166159,
      "category_rank": 37,
      "domain": "throughthefibrofog.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 248556.472551038,
      "curr_month_visits": 248556.472551038,
      "unique_users": 114730.242292933,
      "pages_per_visit": 3.72168664521513
    },
    {
      "global_rank": 5539,
      "category_rank": 37,
      "domain": "iamcook.ru",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 16333967.0346718,
      "curr_month_visits": 16333967.0346718,
      "unique_users": 8942885.68516232,
      "pages_per_visit": 1.73537559293047
    },
    {
      "global_rank": 9484,
      "category_rank": 37,
      "domain": "fredmeyer.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 5339309.69995372,
      "curr_month_visits": 5339309.69995372,
      "unique_users": 2215459.7627545,
      "pages_per_visit": 4.62806105708611
    },
    {
      "global_rank": 6757,
      "category_rank": 37,
      "domain": "olivegarden.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 6700165.1005464,
      "curr_month_visits": 6700165.1005464,
      "unique_users": 4531056.53752234,
      "pages_per_visit": 6.53186845726633
    },
    {
      "global_rank": 8289,
      "category_rank": 37,
      "domain": "aldi-onlineshop.de",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 6909325.58909194,
      "curr_month_visits": 6909325.58909194,
      "unique_users": 3428172.62782193,
      "pages_per_visit": 3.75645213538447
    },
    {
      "global_rank": 175504,
      "category_rank": 38,
      "domain": "myquietkitchen.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 240887.976661158,
      "curr_month_visits": 240887.976661158,
      "unique_users": 137334.821028584,
      "pages_per_visit": 2.1531044912413
    },
    {
      "global_rank": 53901,
      "category_rank": 38,
      "domain": "klwines.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 552906.797694775,
      "curr_month_visits": 552906.797694775,
      "unique_users": 182830.488555056,
      "pages_per_visit": 10.906481525833
    },
    {
      "global_rank": 6872,
      "category_rank": 38,
      "domain": "chipotle.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 9524105.14213092,
      "curr_month_visits": 9524105.14213092,
      "unique_users": 5960027.66852411,
      "pages_per_visit": 3.50047088976697
    },
    {
      "global_rank": 5620,
      "category_rank": 38,
      "domain": "82cook.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 9354606.28938618,
      "curr_month_visits": 9354606.28938618,
      "unique_users": 2837988.50286492,
      "pages_per_visit": 5.58037907453771
    },
    {
      "global_rank": 8682,
      "category_rank": 38,
      "domain": "shop.rewe.de",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 5868132.74185849,
      "curr_month_visits": 5868132.74185849,
      "unique_users": 3880633.52907645,
      "pages_per_visit": 5.57383496051993
    },
    {
      "global_rank": 9635,
      "category_rank": 38,
      "domain": "cmnw.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 7596903.3105233,
      "curr_month_visits": 7596903.3105233,
      "unique_users": 350193.397462862,
      "pages_per_visit": 5.71946882225116
    },
    {
      "global_rank": 9648,
      "category_rank": 39,
      "domain": "traderjoes.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 6021015.91173737,
      "curr_month_visits": 6021015.91173737,
      "unique_users": 3999531.29671906,
      "pages_per_visit": 4.03227030702009
    },
    {
      "global_rank": 54240,
      "category_rank": 39,
      "domain": "sgproof.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 735495.168494656,
      "curr_month_visits": 735495.168494656,
      "unique_users": 99804.8709516873,
      "pages_per_visit": 9.3960968260025
    },
    {
      "global_rank": 180824,
      "category_rank": 39,
      "domain": "abillion.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 481150.66349372,
      "curr_month_visits": 481150.66349372,
      "unique_users": 300444.341713577,
      "pages_per_visit": 1.49287899674352
    },
    {
      "global_rank": 5658,
      "category_rank": 39,
      "domain": "cuisineactuelle.fr",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 9984049.93933249,
      "curr_month_visits": 9984049.93933249,
      "unique_users": 5541385.23290227,
      "pages_per_visit": 3.21326917537448
    },
    {
      "global_rank": 9303,
      "category_rank": 39,
      "domain": "hy-vee.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 5786253.02594983,
      "curr_month_visits": 5786253.02594983,
      "unique_users": 2428036.40009313,
      "pages_per_visit": 4.56592020017104
    },
    {
      "global_rank": 6886,
      "category_rank": 39,
      "domain": "inline.app",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 12407420.7398828,
      "curr_month_visits": 12407420.7398828,
      "unique_users": 5798667.49212914,
      "pages_per_visit": 1.93647851901668
    },
    {
      "global_rank": 9339,
      "category_rank": 40,
      "domain": "albertsons.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 5526050.07997561,
      "curr_month_visits": 5526050.07997561,
      "unique_users": 2668536.45305588,
      "pages_per_visit": 4.97210479888948
    },
    {
      "global_rank": 9701,
      "category_rank": 40,
      "domain": "napbizblog.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 6193056.04366114,
      "curr_month_visits": 6193056.04366114,
      "unique_users": 487892.163969264,
      "pages_per_visit": 5.56935198306132
    },
    {
      "global_rank": 184740,
      "category_rank": 40,
      "domain": "sweetsimplevegan.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 290132.887958594,
      "curr_month_visits": 290132.887958594,
      "unique_users": 165941.556059057,
      "pages_per_visit": 1.93945864143368
    },
    {
      "global_rank": 55146,
      "category_rank": 40,
      "domain": "finestore.ro",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 564319.723723527,
      "curr_month_visits": 564319.723723527,
      "unique_users": 283084.554415603,
      "pages_per_visit": 4.6143557183372
    },
    {
      "global_rank": 6962,
      "category_rank": 40,
      "domain": "wongnai.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 11352090.2219928,
      "curr_month_visits": 11352090.2219928,
      "unique_users": 5901342.76949874,
      "pages_per_visit": 1.94421934818942
    },
    {
      "global_rank": 5847,
      "category_rank": 40,
      "domain": "kwestiasmaku.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 13629795.403784,
      "curr_month_visits": 13629795.403784,
      "unique_users": 4891399.67298403,
      "pages_per_visit": 2.38305749904712
    },
    {
      "global_rank": 9491,
      "category_rank": 41,
      "domain": "esselunga.it",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 4189948.5831229,
      "curr_month_visits": 4189948.5831229,
      "unique_users": 1759816.40500336,
      "pages_per_visit": 9.19920809527435
    },
    {
      "global_rank": 9737,
      "category_rank": 41,
      "domain": "misterdonut.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3936153.4020372,
      "curr_month_visits": 3936153.4020372,
      "unique_users": 2532106.1626557,
      "pages_per_visit": 3.5991409241843
    },
    {
      "global_rank": 56198,
      "category_rank": 41,
      "domain": "lvmh.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1102784.3801452,
      "curr_month_visits": 1102784.3801452,
      "unique_users": 535533.632312931,
      "pages_per_visit": 3.14360301461063
    },
    {
      "global_rank": 7439,
      "category_rank": 41,
      "domain": "wendys.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 6968887.26153249,
      "curr_month_visits": 6968887.26153249,
      "unique_users": 5037692.80942795,
      "pages_per_visit": 6.06862282427571
    },
    {
      "global_rank": 187934,
      "category_rank": 41,
      "domain": "officialveganshop.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 159505.565679725,
      "curr_month_visits": 159505.565679725,
      "unique_users": 75686.5637145192,
      "pages_per_visit": 5.01127833496744
    },
    {
      "global_rank": 5927,
      "category_rank": 41,
      "domain": "eyudud.net",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 8942598.07355221,
      "curr_month_visits": 8942598.07355221,
      "unique_users": 1542087.01411565,
      "pages_per_visit": 4.55111735699184
    },
    {
      "global_rank": 7640,
      "category_rank": 42,
      "domain": "boxlunch.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4318225.06064698,
      "curr_month_visits": 4318225.06064698,
      "unique_users": 2037130.97713917,
      "pages_per_visit": 6.98765508998169
    },
    {
      "global_rank": 9543,
      "category_rank": 42,
      "domain": "aldi-nord.de",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 5551202.55102111,
      "curr_month_visits": 5551202.55102111,
      "unique_users": 2811915.81133263,
      "pages_per_visit": 5.26260852528628
    },
    {
      "global_rank": 189341,
      "category_rank": 42,
      "domain": "theeburgerdude.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 234645.229246698,
      "curr_month_visits": 234645.229246698,
      "unique_users": 90938.6891237627,
      "pages_per_visit": 2.03016889041123
    },
    {
      "global_rank": 56284,
      "category_rank": 42,
      "domain": "dunkinfun.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1064217.97198981,
      "curr_month_visits": 1064217.97198981,
      "unique_users": 255232.61111077,
      "pages_per_visit": 4.42201162084155
    },
    {
      "global_rank": 10530,
      "category_rank": 42,
      "domain": "factor75.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 6234594.68129838,
      "curr_month_visits": 6234594.68129838,
      "unique_users": 3512145.50563881,
      "pages_per_visit": 4.059051896775
    },
    {
      "global_rank": 6175,
      "category_rank": 42,
      "domain": "einfachbacken.de",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 13012386.3524372,
      "curr_month_visits": 13012386.3524372,
      "unique_users": 6412257.77237074,
      "pages_per_visit": 1.79752371490662
    },
    {
      "global_rank": 192775,
      "category_rank": 43,
      "domain": "crowdedkitchen.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 246581.720829266,
      "curr_month_visits": 246581.720829266,
      "unique_users": 131345.972251632,
      "pages_per_visit": 1.88134029566904
    },
    {
      "global_rank": 56579,
      "category_rank": 43,
      "domain": "costa.co.uk",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 974793.864398948,
      "curr_month_visits": 974793.864398948,
      "unique_users": 634918.990830769,
      "pages_per_visit": 2.47238619169654
    },
    {
      "global_rank": 7920,
      "category_rank": 43,
      "domain": "meandu.app",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 5643101.3577113,
      "curr_month_visits": 5643101.3577113,
      "unique_users": 2431872.1909076,
      "pages_per_visit": 7.58821756293647
    },
    {
      "global_rank": 6333,
      "category_rank": 43,
      "domain": "sirogohan.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 13544602.5424835,
      "curr_month_visits": 13544602.5424835,
      "unique_users": 6803378.60501804,
      "pages_per_visit": 2.07311194527581
    },
    {
      "global_rank": 9636,
      "category_rank": 43,
      "domain": "lidl.co.uk",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 6249089.33805911,
      "curr_month_visits": 6249089.33805911,
      "unique_users": 3325393.90183399,
      "pages_per_visit": 3.97425396641829
    },
    {
      "global_rank": 10828,
      "category_rank": 43,
      "domain": "sukiya.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 5139597.68628473,
      "curr_month_visits": 5139597.68628473,
      "unique_users": 3099853.26596845,
      "pages_per_visit": 4.63926156747481
    },
    {
      "global_rank": 10833,
      "category_rank": 44,
      "domain": "chocozap.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 7066956.33847728,
      "curr_month_visits": 7066956.33847728,
      "unique_users": 2937363.0094934,
      "pages_per_visit": 2.3321760386201
    },
    {
      "global_rank": 194915,
      "category_rank": 44,
      "domain": "velivery.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 192947.295042394,
      "curr_month_visits": 192947.295042394,
      "unique_users": 108741.845503345,
      "pages_per_visit": 3.87096504660697
    },
    {
      "global_rank": 6779,
      "category_rank": 44,
      "domain": "taste.com.au",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 8730210.20172136,
      "curr_month_visits": 8730210.20172136,
      "unique_users": 4454366.8023653,
      "pages_per_visit": 4.3654223750244
    },
    {
      "global_rank": 8058,
      "category_rank": 44,
      "domain": "accurx.nhs.uk",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 8331844.08481829,
      "curr_month_visits": 8331844.08481829,
      "unique_users": 3581002.51457909,
      "pages_per_visit": 4.22744698436362
    },
    {
      "global_rank": 10007,
      "category_rank": 44,
      "domain": "oisix.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 5910645.81453481,
      "curr_month_visits": 5910645.81453481,
      "unique_users": 2643696.73523617,
      "pages_per_visit": 3.3134785839694
    },
    {
      "global_rank": 56648,
      "category_rank": 44,
      "domain": "enoteca.co.jp",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1082483.19452426,
      "curr_month_visits": 1082483.19452426,
      "unique_users": 620938.607328465,
      "pages_per_visit": 2.19736374474173
    },
    {
      "global_rank": 56813,
      "category_rank": 45,
      "domain": "fellowproducts.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 660096.70587475,
      "curr_month_visits": 660096.70587475,
      "unique_users": 359243.800373026,
      "pages_per_visit": 3.88610998228986
    },
    {
      "global_rank": 11021,
      "category_rank": 45,
      "domain": "hottomotto.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 5913413.80280825,
      "curr_month_visits": 5913413.80280825,
      "unique_users": 3037278.03846173,
      "pages_per_visit": 3.29463240571677
    },
    {
      "global_rank": 6804,
      "category_rank": 45,
      "domain": "thespruceeats.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 12900833.627293,
      "curr_month_visits": 12900833.627293,
      "unique_users": 9041232.50803849,
      "pages_per_visit": 1.58714903664304
    },
    {
      "global_rank": 8393,
      "category_rank": 45,
      "domain": "bk.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 6552555.66231458,
      "curr_month_visits": 6552555.66231458,
      "unique_users": 4339684.28675405,
      "pages_per_visit": 4.43208778681815
    },
    {
      "global_rank": 197159,
      "category_rank": 45,
      "domain": "rainbownourishments.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 261262.004274532,
      "curr_month_visits": 261262.004274532,
      "unique_users": 122012.804709352,
      "pages_per_visit": 2.04115375397723
    },
    {
      "global_rank": 10347,
      "category_rank": 45,
      "domain": "samokat.ru",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 5367665.7565619,
      "curr_month_visits": 5367665.7565619,
      "unique_users": 1819922.24157502,
      "pages_per_visit": 6.12016343225745
    },
    {
      "global_rank": 10476,
      "category_rank": 46,
      "domain": "perekrestok.ru",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 4606347.63524142,
      "curr_month_visits": 4606347.63524142,
      "unique_users": 2770877.28760828,
      "pages_per_visit": 4.3507033171775
    },
    {
      "global_rank": 11561,
      "category_rank": 46,
      "domain": "honeybaked.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1674273.31708018,
      "curr_month_visits": 1674273.31708018,
      "unique_users": 1063882.43821244,
      "pages_per_visit": 6.02329956046089
    },
    {
      "global_rank": 57295,
      "category_rank": 46,
      "domain": "falstaff.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1224762.72835273,
      "curr_month_visits": 1224762.72835273,
      "unique_users": 697862.853407193,
      "pages_per_visit": 2.14260609008752
    },
    {
      "global_rank": 6829,
      "category_rank": 46,
      "domain": "kingarthurbaking.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 8730202.39133835,
      "curr_month_visits": 8730202.39133835,
      "unique_users": 3756372.39151308,
      "pages_per_visit": 3.11840424305313
    },
    {
      "global_rank": 198562,
      "category_rank": 46,
      "domain": "bytheforkful.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 173892.062837641,
      "curr_month_visits": 173892.062837641,
      "unique_users": 100300.627783975,
      "pages_per_visit": 2.22159002868974
    },
    {
      "global_rank": 8651,
      "category_rank": 46,
      "domain": "crumblcookies.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 9636125.48142774,
      "curr_month_visits": 9636125.48142774,
      "unique_users": 4987254.94118235,
      "pages_per_visit": 2.19642072737848
    },
    {
      "global_rank": 8660,
      "category_rank": 47,
      "domain": "matsuyafoods.co.jp",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 6997075.98503301,
      "curr_month_visits": 6997075.98503301,
      "unique_users": 3512826.459534,
      "pages_per_visit": 3.96879892202652
    },
    {
      "global_rank": 200606,
      "category_rank": 47,
      "domain": "test-iq-online.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 246305.631359054,
      "curr_month_visits": 246305.631359054,
      "unique_users": 167302.832884892,
      "pages_per_visit": 3.86384543992027
    },
    {
      "global_rank": 10551,
      "category_rank": 47,
      "domain": "netto-online.de",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 5819565.05050204,
      "curr_month_visits": 5819565.05050204,
      "unique_users": 3257958.5113141,
      "pages_per_visit": 3.61058441182617
    },
    {
      "global_rank": 57888,
      "category_rank": 47,
      "domain": "provi.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 810032.591935993,
      "curr_month_visits": 810032.591935993,
      "unique_users": 120873.092538089,
      "pages_per_visit": 6.37804044436265
    },
    {
      "global_rank": 7074,
      "category_rank": 47,
      "domain": "toprecepty.cz",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 11661370.940513,
      "curr_month_visits": 11661370.940513,
      "unique_users": 3700652.20580033,
      "pages_per_visit": 1.99474598352982
    },
    {
      "global_rank": 12020,
      "category_rank": 47,
      "domain": "hama-sushi.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 4804160.68717548,
      "curr_month_visits": 4804160.68717548,
      "unique_users": 2433981.934497,
      "pages_per_visit": 3.78269000034781
    },
    {
      "global_rank": 7135,
      "category_rank": 48,
      "domain": "natashaskitchen.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 12884352.0059632,
      "curr_month_visits": 12884352.0059632,
      "unique_users": 7582184.27476852,
      "pages_per_visit": 1.92534105428081
    },
    {
      "global_rank": 58342,
      "category_rank": 48,
      "domain": "heineken.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1182111.52974591,
      "curr_month_visits": 1182111.52974591,
      "unique_users": 573087.296913515,
      "pages_per_visit": 2.74820489324725
    },
    {
      "global_rank": 211567,
      "category_rank": 48,
      "domain": "shaneandsimple.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 218817.604247701,
      "curr_month_visits": 218817.604247701,
      "unique_users": 121833.676183176,
      "pages_per_visit": 1.6764931189675
    },
    {
      "global_rank": 12024,
      "category_rank": 48,
      "domain": "kaldi.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3873990.58296734,
      "curr_month_visits": 3873990.58296734,
      "unique_users": 2002307.41158767,
      "pages_per_visit": 4.17765147461915
    },
    {
      "global_rank": 10556,
      "category_rank": 48,
      "domain": "edeka.de",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 6705586.54005162,
      "curr_month_visits": 6705586.54005162,
      "unique_users": 4065927.70783952,
      "pages_per_visit": 2.44742566655871
    },
    {
      "global_rank": 8977,
      "category_rank": 48,
      "domain": "chilis.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4941343.65915291,
      "curr_month_visits": 4941343.65915291,
      "unique_users": 3447267.59791872,
      "pages_per_visit": 5.73243270168896
    },
    {
      "global_rank": 213472,
      "category_rank": 49,
      "domain": "beyondmeat.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 275067.558972927,
      "curr_month_visits": 275067.558972927,
      "unique_users": 179752.902798353,
      "pages_per_visit": 1.99445870821065
    },
    {
      "global_rank": 7191,
      "category_rank": 49,
      "domain": "lecker.de",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 9751065.87439083,
      "curr_month_visits": 9751065.87439083,
      "unique_users": 5085571.15722245,
      "pages_per_visit": 2.4661049437973
    },
    {
      "global_rank": 59499,
      "category_rank": 49,
      "domain": "brewdog.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 834933.900385366,
      "curr_month_visits": 834933.900385366,
      "unique_users": 453117.755945978,
      "pages_per_visit": 3.85677766732777
    },
    {
      "global_rank": 12093,
      "category_rank": 49,
      "domain": "survey-z.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 4999496.50531281,
      "curr_month_visits": 4999496.50531281,
      "unique_users": 1177717.12712424,
      "pages_per_visit": 3.38005373004278
    },
    {
      "global_rank": 9360,
      "category_rank": 49,
      "domain": "glovoapp.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 6237147.69381161,
      "curr_month_visits": 6237147.69381161,
      "unique_users": 2620025.83087096,
      "pages_per_visit": 4.9331960960112
    },
    {
      "global_rank": 11240,
      "category_rank": 49,
      "domain": "coop.se",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 5587087.83018228,
      "curr_month_visits": 5587087.83018228,
      "unique_users": 2230410.8282756,
      "pages_per_visit": 3.79098573714501
    },
    {
      "global_rank": 12470,
      "category_rank": 50,
      "domain": "systembolaget.se",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 4053689.33121612,
      "curr_month_visits": 4053689.33121612,
      "unique_users": 1573316.37590803,
      "pages_per_visit": 5.14078487731019
    },
    {
      "global_rank": 216129,
      "category_rank": 50,
      "domain": "cucinabotanica.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 311360.982432685,
      "curr_month_visits": 311360.982432685,
      "unique_users": 160990.183153646,
      "pages_per_visit": 1.84241388342599
    },
    {
      "global_rank": 59707,
      "category_rank": 50,
      "domain": "shop.sgproof.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 692059.686540404,
      "curr_month_visits": 692059.686540404,
      "unique_users": 93945.3470331249,
      "pages_per_visit": 8.34989558573721
    },
    {
      "global_rank": 9613,
      "category_rank": 50,
      "domain": "exploretock.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 6037022.88018482,
      "curr_month_visits": 6037022.88018482,
      "unique_users": 3834881.09199476,
      "pages_per_visit": 4.00847232359118
    },
    {
      "global_rank": 7444,
      "category_rank": 50,
      "domain": "bonappetit.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 9875061.5893659,
      "curr_month_visits": 9875061.5893659,
      "unique_users": 6527550.38174678,
      "pages_per_visit": 1.84993215390686
    },
    {
      "global_rank": 11465,
      "category_rank": 50,
      "domain": "torrentbay.st",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3652146.97595925,
      "curr_month_visits": 3652146.97595925,
      "unique_users": 585872.722164596,
      "pages_per_visit": 9.23002254385936
    },
    {
      "global_rank": 59768,
      "category_rank": 51,
      "domain": "dineplan.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 823415.446914664,
      "curr_month_visits": 823415.446914664,
      "unique_users": 268977.561960456,
      "pages_per_visit": 4.46958820441397
    },
    {
      "global_rank": 11931,
      "category_rank": 51,
      "domain": "stopandshop.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 4565427.93650305,
      "curr_month_visits": 4565427.93650305,
      "unique_users": 2004978.33011431,
      "pages_per_visit": 4.17956944940822
    },
    {
      "global_rank": 7663,
      "category_rank": 51,
      "domain": "eda.ru",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 11823868.8804975,
      "curr_month_visits": 11823868.8804975,
      "unique_users": 6818153.62499811,
      "pages_per_visit": 1.59756068089029
    },
    {
      "global_rank": 12512,
      "category_rank": 51,
      "domain": "giftee.biz",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 5250426.35819215,
      "curr_month_visits": 5250426.35819215,
      "unique_users": 1778391.51686861,
      "pages_per_visit": 3.3266635875277
    },
    {
      "global_rank": 219891,
      "category_rank": 51,
      "domain": "soupersage.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 274573.341186267,
      "curr_month_visits": 274573.341186267,
      "unique_users": 145394.181432413,
      "pages_per_visit": 1.51990144566256
    },
    {
      "global_rank": 9681,
      "category_rank": 51,
      "domain": "owst.jp",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 7424940.7065266,
      "curr_month_visits": 7424940.7065266,
      "unique_users": 5108590.97701622,
      "pages_per_visit": 2.37293017583741
    },
    {
      "global_rank": 220944,
      "category_rank": 52,
      "domain": "joyridesweets.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 211071.047688343,
      "curr_month_visits": 211071.047688343,
      "unique_users": 128224.921016765,
      "pages_per_visit": 2.31005536236848
    },
    {
      "global_rank": 12479,
      "category_rank": 52,
      "domain": "aldi.com.au",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 4513092.22465266,
      "curr_month_visits": 4513092.22465266,
      "unique_users": 1818263.70530765,
      "pages_per_visit": 4.72103234945992
    },
    {
      "global_rank": 59769,
      "category_rank": 52,
      "domain": "laithwaites.co.uk",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 548308.386466148,
      "curr_month_visits": 548308.386466148,
      "unique_users": 318805.654705091,
      "pages_per_visit": 4.78589488649108
    },
    {
      "global_rank": 7911,
      "category_rank": 52,
      "domain": "food.ru",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 12358154.6904503,
      "curr_month_visits": 12358154.6904503,
      "unique_users": 7207775.66560117,
      "pages_per_visit": 1.35547175714037
    },
    {
      "global_rank": 12651,
      "category_rank": 52,
      "domain": "obicnet.ne.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3795756.33008955,
      "curr_month_visits": 3795756.33008955,
      "unique_users": 218119.262708254,
      "pages_per_visit": 7.76195510517691
    },
    {
      "global_rank": 9708,
      "category_rank": 52,
      "domain": "wingstop.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 5974688.7902628,
      "curr_month_visits": 5974688.7902628,
      "unique_users": 4001826.64106707,
      "pages_per_visit": 3.75451425205218
    },
    {
      "global_rank": 12782,
      "category_rank": 53,
      "domain": "sprouts.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 4117462.37432241,
      "curr_month_visits": 4117462.37432241,
      "unique_users": 2242565.74992144,
      "pages_per_visit": 3.84296458184335
    },
    {
      "global_rank": 225909,
      "category_rank": 53,
      "domain": "foodisgood.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 239976.3006287,
      "curr_month_visits": 239976.3006287,
      "unique_users": 166032.363177004,
      "pages_per_visit": 1.56308188789569
    },
    {
      "global_rank": 9746,
      "category_rank": 53,
      "domain": "sonicdrivein.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 6981677.0844009,
      "curr_month_visits": 6981677.0844009,
      "unique_users": 5300699.60209768,
      "pages_per_visit": 3.26246287474819
    },
    {
      "global_rank": 8033,
      "category_rank": 53,
      "domain": "ricardocuisine.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 9985071.22467266,
      "curr_month_visits": 9985071.22467266,
      "unique_users": 4357809.93836008,
      "pages_per_visit": 2.04926967090362
    },
    {
      "global_rank": 59944,
      "category_rank": 53,
      "domain": "superbexperience.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 877526.277690943,
      "curr_month_visits": 877526.277690943,
      "unique_users": 442794.579144886,
      "pages_per_visit": 3.76783568625571
    },
    {
      "global_rank": 12998,
      "category_rank": 53,
      "domain": "meny.no",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 5127432.56508179,
      "curr_month_visits": 5127432.56508179,
      "unique_users": 2301989.31744211,
      "pages_per_visit": 2.89181785954056
    },
    {
      "global_rank": 226253,
      "category_rank": 54,
      "domain": "addictedtodates.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 206819.617938183,
      "curr_month_visits": 206819.617938183,
      "unique_users": 98732.5601382817,
      "pages_per_visit": 2.27511598784636
    },
    {
      "global_rank": 61167,
      "category_rank": 54,
      "domain": "majestic.co.uk",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 592511.741148267,
      "curr_month_visits": 592511.741148267,
      "unique_users": 373127.323763487,
      "pages_per_visit": 4.53629382130281
    },
    {
      "global_rank": 12908,
      "category_rank": 54,
      "domain": "coop.co.uk",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 5283348.8898309,
      "curr_month_visits": 5283348.8898309,
      "unique_users": 1924002.942772,
      "pages_per_visit": 3.74597615438218
    },
    {
      "global_rank": 13074,
      "category_rank": 54,
      "domain": "ebtedge.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 4827355.39174441,
      "curr_month_visits": 4827355.39174441,
      "unique_users": 1715655.95948961,
      "pages_per_visit": 3.74461455673147
    },
    {
      "global_rank": 9868,
      "category_rank": 54,
      "domain": "applebees.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4915546.65566578,
      "curr_month_visits": 4915546.65566578,
      "unique_users": 3466993.82913047,
      "pages_per_visit": 5.26306372147742
    },
    {
      "global_rank": 8076,
      "category_rank": 54,
      "domain": "tastingtable.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 9858931.57703753,
      "curr_month_visits": 9858931.57703753,
      "unique_users": 7095281.5361024,
      "pages_per_visit": 1.45623231144433
    },
    {
      "global_rank": 10073,
      "category_rank": 55,
      "domain": "dodopizza.ru",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 6534209.24120909,
      "curr_month_visits": 6534209.24120909,
      "unique_users": 2169511.62901509,
      "pages_per_visit": 4.80370628015662
    },
    {
      "global_rank": 227494,
      "category_rank": 55,
      "domain": "thelittleblogofvegan.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 219462.19455337,
      "curr_month_visits": 219462.19455337,
      "unique_users": 99575.6597481807,
      "pages_per_visit": 2.2135425738557
    },
    {
      "global_rank": 61198,
      "category_rank": 55,
      "domain": "delhidutyfree.co.in",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 953203.428838435,
      "curr_month_visits": 953203.428838435,
      "unique_users": 667159.300158924,
      "pages_per_visit": 2.37652014245008
    },
    {
      "global_rank": 8390,
      "category_rank": 55,
      "domain": "onceuponachef.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 9394219.48852568,
      "curr_month_visits": 9394219.48852568,
      "unique_users": 5654144.64605137,
      "pages_per_visit": 2.09336939400179
    },
    {
      "global_rank": 13259,
      "category_rank": 55,
      "domain": "harristeeter.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 4406278.53693538,
      "curr_month_visits": 4406278.53693538,
      "unique_users": 1729799.27325089,
      "pages_per_visit": 4.26588669365255
    },
    {
      "global_rank": 13101,
      "category_rank": 55,
      "domain": "pal-system.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 4388264.46321146,
      "curr_month_visits": 4388264.46321146,
      "unique_users": 1955080.01076177,
      "pages_per_visit": 4.3342277518871
    },
    {
      "global_rank": 235756,
      "category_rank": 56,
      "domain": "vancouverwithlove.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 211977.38630283,
      "curr_month_visits": 211977.38630283,
      "unique_users": 108037.740210718,
      "pages_per_visit": 1.89913112397569
    },
    {
      "global_rank": 61567,
      "category_rank": 56,
      "domain": "livcheers.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 968381.673838889,
      "curr_month_visits": 968381.673838889,
      "unique_users": 685204.988344594,
      "pages_per_visit": 2.25124652550991
    },
    {
      "global_rank": 14168,
      "category_rank": 56,
      "domain": "pcid.ca",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 4129886.42753955,
      "curr_month_visits": 4129886.42753955,
      "unique_users": 2054777.0714654,
      "pages_per_visit": 4.00658842791611
    },
    {
      "global_rank": 8409,
      "category_rank": 56,
      "domain": "gastronom.ru",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 10397137.340908,
      "curr_month_visits": 10397137.340908,
      "unique_users": 6938591.45809438,
      "pages_per_visit": 1.80387984178663
    },
    {
      "global_rank": 13229,
      "category_rank": 56,
      "domain": "nanairo.coop",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3487674.14417227,
      "curr_month_visits": 3487674.14417227,
      "unique_users": 458932.876464439,
      "pages_per_visit": 8.17731725094501
    },
    {
      "global_rank": 10111,
      "category_rank": 56,
      "domain": "restaurantguru.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 7602812.81919882,
      "curr_month_visits": 7602812.81919882,
      "unique_users": 5939196.00876785,
      "pages_per_visit": 2.26038279904439
    },
    {
      "global_rank": 14215,
      "category_rank": 57,
      "domain": "penny.de",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3631245.14870188,
      "curr_month_visits": 3631245.14870188,
      "unique_users": 2104555.56907848,
      "pages_per_visit": 2.83942705749436
    },
    {
      "global_rank": 8490,
      "category_rank": 57,
      "domain": "cookieandkate.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 10132126.3734978,
      "curr_month_visits": 10132126.3734978,
      "unique_users": 6253491.01303255,
      "pages_per_visit": 1.81448610211943
    },
    {
      "global_rank": 246909,
      "category_rank": 57,
      "domain": "vegancocotte.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 236580.781042055,
      "curr_month_visits": 236580.781042055,
      "unique_users": 113496.324993829,
      "pages_per_visit": 2.1721464614973
    },
    {
      "global_rank": 10325,
      "category_rank": 57,
      "domain": "petpooja.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 5228469.72821589,
      "curr_month_visits": 5228469.72821589,
      "unique_users": 1780981.91179043,
      "pages_per_visit": 5.63577261382671
    },
    {
      "global_rank": 62155,
      "category_rank": 57,
      "domain": "budlight.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1055179.03554221,
      "curr_month_visits": 1055179.03554221,
      "unique_users": 498818.231537661,
      "pages_per_visit": 3.3513818187215
    },
    {
      "global_rank": 13267,
      "category_rank": 57,
      "domain": "gumgum.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 6154209.67853642,
      "curr_month_visits": 6154209.67853642,
      "unique_users": 2850433.89717718,
      "pages_per_visit": 2.83020307098902
    },
    {
      "global_rank": 62502,
      "category_rank": 58,
      "domain": "bartesian.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 480802.753854169,
      "curr_month_visits": 480802.753854169,
      "unique_users": 270046.859806236,
      "pages_per_visit": 4.50719182371705
    },
    {
      "global_rank": 8573,
      "category_rank": 58,
      "domain": "750g.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 9764885.24451094,
      "curr_month_visits": 9764885.24451094,
      "unique_users": 5734065.37777184,
      "pages_per_visit": 1.54600070663462
    },
    {
      "global_rank": 13465,
      "category_rank": 58,
      "domain": "eway.in.ua",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 6432993.41696872,
      "curr_month_visits": 6432993.41696872,
      "unique_users": 1115242.1266719,
      "pages_per_visit": 2.63186590156466
    },
    {
      "global_rank": 10442,
      "category_rank": 58,
      "domain": "saizeriya.co.jp",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4552639.54122575,
      "curr_month_visits": 4552639.54122575,
      "unique_users": 2649821.12464986,
      "pages_per_visit": 6.77734266681449
    },
    {
      "global_rank": 248180,
      "category_rank": 58,
      "domain": "ohsheglows.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 202555.578342648,
      "curr_month_visits": 202555.578342648,
      "unique_users": 113604.075342067,
      "pages_per_visit": 2.03061665290216
    },
    {
      "global_rank": 14424,
      "category_rank": 58,
      "domain": "shop.coles.com.au",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1731410.07104188,
      "curr_month_visits": 1731410.07104188,
      "unique_users": 830764.632117687,
      "pages_per_visit": 32.6442459279584
    },
    {
      "global_rank": 62940,
      "category_rank": 59,
      "domain": "nikka.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 911830.744145961,
      "curr_month_visits": 911830.744145961,
      "unique_users": 461338.774579668,
      "pages_per_visit": 3.1237219190945
    },
    {
      "global_rank": 249438,
      "category_rank": 59,
      "domain": "plantbaes.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 205012.757977792,
      "curr_month_visits": 205012.757977792,
      "unique_users": 92595.7793072521,
      "pages_per_visit": 2.48778034037208
    },
    {
      "global_rank": 13482,
      "category_rank": 59,
      "domain": "nbblog.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3814227.30214149,
      "curr_month_visits": 3814227.30214149,
      "unique_users": 475644.90454062,
      "pages_per_visit": 6.73796163362486
    },
    {
      "global_rank": 14433,
      "category_rank": 59,
      "domain": "wegmans.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3445606.04679642,
      "curr_month_visits": 3445606.04679642,
      "unique_users": 1736799.04615236,
      "pages_per_visit": 4.45813307739195
    },
    {
      "global_rank": 8641,
      "category_rank": 59,
      "domain": "10000recipe.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 9132178.79601769,
      "curr_month_visits": 9132178.79601769,
      "unique_users": 3916052.53468359,
      "pages_per_visit": 1.84954641929335
    },
    {
      "global_rank": 10591,
      "category_rank": 59,
      "domain": "texasroadhouse.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4688488.03720376,
      "curr_month_visits": 4688488.03720376,
      "unique_users": 3376287.84858327,
      "pages_per_visit": 4.80549242187132
    },
    {
      "global_rank": 14901,
      "category_rank": 60,
      "domain": "frysfood.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3886114.93833132,
      "curr_month_visits": 3886114.93833132,
      "unique_users": 1264706.51354246,
      "pages_per_visit": 4.48408094073494
    },
    {
      "global_rank": 63495,
      "category_rank": 60,
      "domain": "cp-asahi.jp",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 298450.02461906,
      "curr_month_visits": 298450.02461906,
      "unique_users": 66562.9472195293,
      "pages_per_visit": 5.18872533093897
    },
    {
      "global_rank": 249777,
      "category_rank": 60,
      "domain": "byanjushka.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 174159.143288766,
      "curr_month_visits": 174159.143288766,
      "unique_users": 94456.796785314,
      "pages_per_visit": 1.83523068417932
    },
    {
      "global_rank": 8672,
      "category_rank": 60,
      "domain": "inspiredtaste.net",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 9506887.01215837,
      "curr_month_visits": 9506887.01215837,
      "unique_users": 6430870.31345257,
      "pages_per_visit": 1.66633360912953
    },
    {
      "global_rank": 10605,
      "category_rank": 60,
      "domain": "popeyes.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4293669.81365386,
      "curr_month_visits": 4293669.81365386,
      "unique_users": 2985879.52799875,
      "pages_per_visit": 4.35825232305841
    },
    {
      "global_rank": 13538,
      "category_rank": 60,
      "domain": "smp.ne.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 4216567.93169028,
      "curr_month_visits": 4216567.93169028,
      "unique_users": 2261590.19809296,
      "pages_per_visit": 4.44440249282963
    },
    {
      "global_rank": 14939,
      "category_rank": 61,
      "domain": "conad.it",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3516552.98545815,
      "curr_month_visits": 3516552.98545815,
      "unique_users": 1886249.72122129,
      "pages_per_visit": 4.29160629014935
    },
    {
      "global_rank": 13543,
      "category_rank": 61,
      "domain": "news-fan.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3914331.39313411,
      "curr_month_visits": 3914331.39313411,
      "unique_users": 414244.055254114,
      "pages_per_visit": 6.89095018331824
    },
    {
      "global_rank": 10728,
      "category_rank": 61,
      "domain": "chownow.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 5606394.23226601,
      "curr_month_visits": 5606394.23226601,
      "unique_users": 3913293.04685766,
      "pages_per_visit": 3.73566523926174
    },
    {
      "global_rank": 8707,
      "category_rank": 61,
      "domain": "cucchiaio.it",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 8932392.46794084,
      "curr_month_visits": 8932392.46794084,
      "unique_users": 4953486.1954627,
      "pages_per_visit": 1.9476825794872
    },
    {
      "global_rank": 63602,
      "category_rank": 61,
      "domain": "finewineandgoodspirits.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 697089.032833363,
      "curr_month_visits": 697089.032833363,
      "unique_users": 403836.281397234,
      "pages_per_visit": 3.71775562640243
    },
    {
      "global_rank": 250253,
      "category_rank": 61,
      "domain": "madeleineolivia.co.uk",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 117160.680150363,
      "curr_month_visits": 117160.680150363,
      "unique_users": 44950.7758321229,
      "pages_per_visit": 3.87573161597817
    },
    {
      "global_rank": 66075,
      "category_rank": 62,
      "domain": "binnys.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 628764.617343787,
      "curr_month_visits": 628764.617343787,
      "unique_users": 317841.563625539,
      "pages_per_visit": 4.70283221027839
    },
    {
      "global_rank": 10911,
      "category_rank": 62,
      "domain": "designmynight.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 5099434.12090824,
      "curr_month_visits": 5099434.12090824,
      "unique_users": 2954970.91197714,
      "pages_per_visit": 3.37805354727637
    },
    {
      "global_rank": 252001,
      "category_rank": 62,
      "domain": "koro-shop.at",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 98540.7812909511,
      "curr_month_visits": 98540.7812909511,
      "unique_users": 53358.2811232367,
      "pages_per_visit": 5.41413987825908
    },
    {
      "global_rank": 8723,
      "category_rank": 62,
      "domain": "kikkoman.co.jp",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 10048512.1871488,
      "curr_month_visits": 10048512.1871488,
      "unique_users": 5977299.4066608,
      "pages_per_visit": 1.61025185713691
    },
    {
      "global_rank": 13624,
      "category_rank": 62,
      "domain": "willys.se",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 4514361.69755573,
      "curr_month_visits": 4514361.69755573,
      "unique_users": 1654328.97131021,
      "pages_per_visit": 4.21141695487827
    },
    {
      "global_rank": 14967,
      "category_rank": 62,
      "domain": "rewe.co.at",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 4732444.52777771,
      "curr_month_visits": 4732444.52777771,
      "unique_users": 1647832.88169599,
      "pages_per_visit": 2.40602712157073
    },
    {
      "global_rank": 15096,
      "category_rank": 63,
      "domain": "metro.de",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2722094.90877081,
      "curr_month_visits": 2722094.90877081,
      "unique_users": 1624182.40923161,
      "pages_per_visit": 5.98364375586028
    },
    {
      "global_rank": 8861,
      "category_rank": 63,
      "domain": "gimmesomeoven.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 9143979.48317686,
      "curr_month_visits": 9143979.48317686,
      "unique_users": 5794137.96430928,
      "pages_per_visit": 1.83142399547691
    },
    {
      "global_rank": 11125,
      "category_rank": 63,
      "domain": "pandaexpress.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 5267477.80148202,
      "curr_month_visits": 5267477.80148202,
      "unique_users": 3703287.16278558,
      "pages_per_visit": 4.41186689637519
    },
    {
      "global_rank": 66469,
      "category_rank": 63,
      "domain": "vtinfo.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 623678.887208565,
      "curr_month_visits": 623678.887208565,
      "unique_users": 84715.9846725931,
      "pages_per_visit": 11.2806426635528
    },
    {
      "global_rank": 261525,
      "category_rank": 63,
      "domain": "veganfoodandliving.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 194685.302764438,
      "curr_month_visits": 194685.302764438,
      "unique_users": 109852.323064067,
      "pages_per_visit": 1.86826130147997
    },
    {
      "global_rank": 14232,
      "category_rank": 63,
      "domain": "cloud.openbravo.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 7837443.94208998,
      "curr_month_visits": 7837443.94208998,
      "unique_users": 165451.579251293,
      "pages_per_visit": 17.2908555987665
    },
    {
      "global_rank": 11278,
      "category_rank": 64,
      "domain": "smartanswers.net",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 5243326.87002629,
      "curr_month_visits": 5243326.87002629,
      "unique_users": 3640410.1115459,
      "pages_per_visit": 2.11353530243698
    },
    {
      "global_rank": 14355,
      "category_rank": 64,
      "domain": "europris.no",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3451401.62310768,
      "curr_month_visits": 3451401.62310768,
      "unique_users": 1497520.88915894,
      "pages_per_visit": 4.28175212006372
    },
    {
      "global_rank": 8898,
      "category_rank": 64,
      "domain": "budgetbytes.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 9211628.804394,
      "curr_month_visits": 9211628.804394,
      "unique_users": 5051415.03583084,
      "pages_per_visit": 2.62018232503747
    },
    {
      "global_rank": 66673,
      "category_rank": 64,
      "domain": "bevmo.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 668159.326851716,
      "curr_month_visits": 668159.326851716,
      "unique_users": 466319.06113454,
      "pages_per_visit": 3.67253475058559
    },
    {
      "global_rank": 15455,
      "category_rank": 64,
      "domain": "ninjakitchen.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3458138.26829935,
      "curr_month_visits": 3458138.26829935,
      "unique_users": 2081140.12944756,
      "pages_per_visit": 2.8578393039927
    },
    {
      "global_rank": 278057,
      "category_rank": 64,
      "domain": "cozypeachkitchen.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 173825.470321906,
      "curr_month_visits": 173825.470321906,
      "unique_users": 102891.120483998,
      "pages_per_visit": 1.84513798663756
    },
    {
      "global_rank": 14494,
      "category_rank": 65,
      "domain": "ekiten.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 4850012.57023179,
      "curr_month_visits": 4850012.57023179,
      "unique_users": 3587420.02287039,
      "pages_per_visit": 2.88682862030445
    },
    {
      "global_rank": 67553,
      "category_rank": 65,
      "domain": "hawesko.de",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 604556.158291034,
      "curr_month_visits": 604556.158291034,
      "unique_users": 359576.657078996,
      "pages_per_visit": 4.31081693702202
    },
    {
      "global_rank": 15849,
      "category_rank": 65,
      "domain": "cacaushow.com.br",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 4475986.00256612,
      "curr_month_visits": 4475986.00256612,
      "unique_users": 2286901.82658646,
      "pages_per_visit": 3.17563342633421
    },
    {
      "global_rank": 11646,
      "category_rank": 65,
      "domain": "mac.bid",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2034582.35300806,
      "curr_month_visits": 2034582.35300806,
      "unique_users": 516918.778000552,
      "pages_per_visit": 29.0672230668779
    },
    {
      "global_rank": 9024,
      "category_rank": 65,
      "domain": "g.pl",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 7616263.69540178,
      "curr_month_visits": 7616263.69540178,
      "unique_users": 3146524.04910777,
      "pages_per_visit": 2.47682436568577
    },
    {
      "global_rank": 283427,
      "category_rank": 65,
      "domain": "koro-shop.ch",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 149482.237414931,
      "curr_month_visits": 149482.237414931,
      "unique_users": 62984.639945272,
      "pages_per_visit": 3.58540338561588
    },
    {
      "global_rank": 67973,
      "category_rank": 66,
      "domain": "blackriflecoffee.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 678587.264630352,
      "curr_month_visits": 678587.264630352,
      "unique_users": 388219.832555228,
      "pages_per_visit": 4.05897561939677
    },
    {
      "global_rank": 15852,
      "category_rank": 66,
      "domain": "smithsfoodanddrug.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3290733.86022551,
      "curr_month_visits": 3290733.86022551,
      "unique_users": 1410795.74548105,
      "pages_per_visit": 4.51715410615907
    },
    {
      "global_rank": 9388,
      "category_rank": 66,
      "domain": "sugarspunrun.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 7285587.58308177,
      "curr_month_visits": 7285587.58308177,
      "unique_users": 4425117.61607103,
      "pages_per_visit": 2.0533839715754
    },
    {
      "global_rank": 11992,
      "category_rank": 66,
      "domain": "kfc.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4750913.72122188,
      "curr_month_visits": 4750913.72122188,
      "unique_users": 3329853.86660587,
      "pages_per_visit": 4.68458569403926
    },
    {
      "global_rank": 14721,
      "category_rank": 66,
      "domain": "gorp.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 5495085.85334138,
      "curr_month_visits": 5495085.85334138,
      "unique_users": 4044132.19362831,
      "pages_per_visit": 1.6757497188647
    },
    {
      "global_rank": 284290,
      "category_rank": 66,
      "domain": "gazoakleychef.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 134610.731451126,
      "curr_month_visits": 134610.731451126,
      "unique_users": 57974.866728574,
      "pages_per_visit": 3.47651949290737
    },
    {
      "global_rank": 67990,
      "category_rank": 67,
      "domain": "vinepair.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1217851.63478076,
      "curr_month_visits": 1217851.63478076,
      "unique_users": 852265.08281401,
      "pages_per_visit": 1.51745862810718
    },
    {
      "global_rank": 9396,
      "category_rank": 67,
      "domain": "nosalty.hu",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 7567474.9214417,
      "curr_month_visits": 7567474.9214417,
      "unique_users": 2421657.78143174,
      "pages_per_visit": 2.488123573389
    },
    {
      "global_rank": 285184,
      "category_rank": 67,
      "domain": "vegansociety.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 159554.72057146,
      "curr_month_visits": 159554.72057146,
      "unique_users": 91956.1567179874,
      "pages_per_visit": 2.08809370744152
    },
    {
      "global_rank": 15933,
      "category_rank": 67,
      "domain": "jewelosco.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3182034.61054864,
      "curr_month_visits": 3182034.61054864,
      "unique_users": 1340802.01702118,
      "pages_per_visit": 5.63406907137543
    },
    {
      "global_rank": 12056,
      "category_rank": 67,
      "domain": "jimmyjohns.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4264394.51066012,
      "curr_month_visits": 4264394.51066012,
      "unique_users": 2798984.79763059,
      "pages_per_visit": 4.96486269993368
    },
    {
      "global_rank": 14878,
      "category_rank": 67,
      "domain": "mozaikportail.ca",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 4465216.96930953,
      "curr_month_visits": 4465216.96930953,
      "unique_users": 764326.50782831,
      "pages_per_visit": 3.14711120786816
    },
    {
      "global_rank": 9534,
      "category_rank": 68,
      "domain": "povar.ru",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 10270986.9562235,
      "curr_month_visits": 10270986.9562235,
      "unique_users": 6049928.23967347,
      "pages_per_visit": 1.72317182815391
    },
    {
      "global_rank": 68675,
      "category_rank": 68,
      "domain": "frostbuddy.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 437681.712367679,
      "curr_month_visits": 437681.712367679,
      "unique_users": 203015.429330418,
      "pages_per_visit": 4.89894071741229
    },
    {
      "global_rank": 15954,
      "category_rank": 68,
      "domain": "thrivemarket.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3368928.18285326,
      "curr_month_visits": 3368928.18285326,
      "unique_users": 2021235.94131987,
      "pages_per_visit": 4.68092287097867
    },
    {
      "global_rank": 12060,
      "category_rank": 68,
      "domain": "dominos.co.uk",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3911284.04468427,
      "curr_month_visits": 3911284.04468427,
      "unique_users": 2280284.13502049,
      "pages_per_visit": 6.64759038796956
    },
    {
      "global_rank": 14920,
      "category_rank": 68,
      "domain": "eatbu.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 5465928.95277247,
      "curr_month_visits": 5465928.95277247,
      "unique_users": 3966060.11561134,
      "pages_per_visit": 1.97863604186241
    },
    {
      "global_rank": 286733,
      "category_rank": 68,
      "domain": "zardyplants.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 166071.903562878,
      "curr_month_visits": 166071.903562878,
      "unique_users": 90575.7885341511,
      "pages_per_visit": 1.92010601028889
    },
    {
      "global_rank": 287366,
      "category_rank": 69,
      "domain": "vegansupply.ca",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 63566.3155566208,
      "curr_month_visits": 63566.3155566208,
      "unique_users": 29033.9854687841,
      "pages_per_visit": 10.528432414733
    },
    {
      "global_rank": 12116,
      "category_rank": 69,
      "domain": "jerseymikes.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4431470.83095454,
      "curr_month_visits": 4431470.83095454,
      "unique_users": 3067896.22788767,
      "pages_per_visit": 4.45902915105226
    },
    {
      "global_rank": 15982,
      "category_rank": 69,
      "domain": "hofer.at",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3007585.76961917,
      "curr_month_visits": 3007585.76961917,
      "unique_users": 1173272.47463884,
      "pages_per_visit": 4.92629918560416
    },
    {
      "global_rank": 15773,
      "category_rank": 69,
      "domain": "cookaround.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 4802945.34760259,
      "curr_month_visits": 4802945.34760259,
      "unique_users": 2559264.21929561,
      "pages_per_visit": 1.89702220099827
    },
    {
      "global_rank": 9811,
      "category_rank": 69,
      "domain": "gutekueche.at",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 8467176.50562084,
      "curr_month_visits": 8467176.50562084,
      "unique_users": 4628889.87816749,
      "pages_per_visit": 1.705091707518
    },
    {
      "global_rank": 69366,
      "category_rank": 69,
      "domain": "bisleri.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 644377.424194228,
      "curr_month_visits": 644377.424194228,
      "unique_users": 372150.720656915,
      "pages_per_visit": 5.25816900303101
    },
    {
      "global_rank": 70066,
      "category_rank": 70,
      "domain": "perfectdraft.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 607091.264117395,
      "curr_month_visits": 607091.264117395,
      "unique_users": 285422.401532561,
      "pages_per_visit": 3.44633397647176
    },
    {
      "global_rank": 12126,
      "category_rank": 70,
      "domain": "dominos.com.au",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3413535.53258371,
      "curr_month_visits": 3413535.53258371,
      "unique_users": 1667950.97008786,
      "pages_per_visit": 8.03937183889716
    },
    {
      "global_rank": 287583,
      "category_rank": 70,
      "domain": "barnivore.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 128833.119018987,
      "curr_month_visits": 128833.119018987,
      "unique_users": 60375.1415522353,
      "pages_per_visit": 3.34986856030448
    },
    {
      "global_rank": 15880,
      "category_rank": 70,
      "domain": "francelive.fr",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 5420825.66536254,
      "curr_month_visits": 5420825.66536254,
      "unique_users": 2324381.33439033,
      "pages_per_visit": 1.4198749420395
    },
    {
      "global_rank": 9953,
      "category_rank": 70,
      "domain": "kinarino.jp",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 8648548.57196325,
      "curr_month_visits": 8648548.57196325,
      "unique_users": 5768402.92062886,
      "pages_per_visit": 1.82217360366922
    },
    {
      "global_rank": 16019,
      "category_rank": 70,
      "domain": "auchan.ru",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3541883.79110242,
      "curr_month_visits": 3541883.79110242,
      "unique_users": 1807448.36773777,
      "pages_per_visit": 4.39069869178286
    },
    {
      "global_rank": 291068,
      "category_rank": 71,
      "domain": "proveg.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 194325.762785609,
      "curr_month_visits": 194325.762785609,
      "unique_users": 109963.653068213,
      "pages_per_visit": 1.68780217873181
    },
    {
      "global_rank": 71125,
      "category_rank": 71,
      "domain": "millerlite.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 842112.121142518,
      "curr_month_visits": 842112.121142518,
      "unique_users": 348718.880781079,
      "pages_per_visit": 2.30854947015411
    },
    {
      "global_rank": 16506,
      "category_rank": 71,
      "domain": "pingodoce.pt",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3368816.55323759,
      "curr_month_visits": 3368816.55323759,
      "unique_users": 1668271.59891117,
      "pages_per_visit": 4.11892362425093
    },
    {
      "global_rank": 12195,
      "category_rank": 71,
      "domain": "seamless.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4498108.79963769,
      "curr_month_visits": 4498108.79963769,
      "unique_users": 2652174.45412094,
      "pages_per_visit": 4.80582884442171
    },
    {
      "global_rank": 10054,
      "category_rank": 71,
      "domain": "kyounoryouri.jp",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 8617550.53334904,
      "curr_month_visits": 8617550.53334904,
      "unique_users": 4187409.29590503,
      "pages_per_visit": 2.11048400848959
    },
    {
      "global_rank": 15923,
      "category_rank": 71,
      "domain": "rtrp.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 5180873.71776941,
      "curr_month_visits": 5180873.71776941,
      "unique_users": 3919230.04644939,
      "pages_per_visit": 1.9512302923909
    },
    {
      "global_rank": 10337,
      "category_rank": 72,
      "domain": "edimdoma.ru",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 9801792.73609038,
      "curr_month_visits": 9801792.73609038,
      "unique_users": 5420817.41632689,
      "pages_per_visit": 1.546974616988
    },
    {
      "global_rank": 291296,
      "category_rank": 72,
      "domain": "thekoreanvegan.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 145919.268659945,
      "curr_month_visits": 145919.268659945,
      "unique_users": 69644.5836193453,
      "pages_per_visit": 2.46146744893953
    },
    {
      "global_rank": 15953,
      "category_rank": 72,
      "domain": "happylilac.net",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2902041.50614139,
      "curr_month_visits": 2902041.50614139,
      "unique_users": 1615606.87430316,
      "pages_per_visit": 5.89540199388583
    },
    {
      "global_rank": 17247,
      "category_rank": 72,
      "domain": "getir.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2065681.87587476,
      "curr_month_visits": 2065681.87587476,
      "unique_users": 852083.364279533,
      "pages_per_visit": 14.5337068274342
    },
    {
      "global_rank": 72484,
      "category_rank": 72,
      "domain": "thewinesociety.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 417568.990561633,
      "curr_month_visits": 417568.990561633,
      "unique_users": 179066.025868816,
      "pages_per_visit": 7.26409233787448
    },
    {
      "global_rank": 12323,
      "category_rank": 72,
      "domain": "mews.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2929207.2635492,
      "curr_month_visits": 2929207.2635492,
      "unique_users": 1276972.65441892,
      "pages_per_visit": 17.2433723993707
    },
    {
      "global_rank": 73431,
      "category_rank": 73,
      "domain": "bcliquorstores.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 510060.975896343,
      "curr_month_visits": 510060.975896343,
      "unique_users": 280476.205750256,
      "pages_per_visit": 5.48262018383476
    },
    {
      "global_rank": 296447,
      "category_rank": 73,
      "domain": "woonheng.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 159046.499862902,
      "curr_month_visits": 159046.499862902,
      "unique_users": 81172.8739328669,
      "pages_per_visit": 2.05693151462842
    },
    {
      "global_rank": 17308,
      "category_rank": 73,
      "domain": "harryanddavid.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1968269.48329487,
      "curr_month_visits": 1968269.48329487,
      "unique_users": 1183392.50937088,
      "pages_per_visit": 3.63941270654682
    },
    {
      "global_rank": 10456,
      "category_rank": 73,
      "domain": "downshiftology.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 7963192.48488476,
      "curr_month_visits": 7963192.48488476,
      "unique_users": 5326725.31614419,
      "pages_per_visit": 1.83502972900388
    },
    {
      "global_rank": 16177,
      "category_rank": 73,
      "domain": "aumo.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 6405065.76486821,
      "curr_month_visits": 6405065.76486821,
      "unique_users": 3888907.43659963,
      "pages_per_visit": 1.33443904868485
    },
    {
      "global_rank": 12454,
      "category_rank": 73,
      "domain": "menudino.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 6168945.10782516,
      "curr_month_visits": 6168945.10782516,
      "unique_users": 2184182.05877119,
      "pages_per_visit": 2.41108342734044
    },
    {
      "global_rank": 12482,
      "category_rank": 74,
      "domain": "dunkindonuts.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 5353038.12038066,
      "curr_month_visits": 5353038.12038066,
      "unique_users": 3782232.62155856,
      "pages_per_visit": 2.98832497324176
    },
    {
      "global_rank": 302687,
      "category_rank": 74,
      "domain": "kokku-online.de",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 107250.955220876,
      "curr_month_visits": 107250.955220876,
      "unique_users": 66547.5489399205,
      "pages_per_visit": 3.09757822528721
    },
    {
      "global_rank": 16389,
      "category_rank": 74,
      "domain": "mezamashi.media",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 5723931.05627706,
      "curr_month_visits": 5723931.05627706,
      "unique_users": 3799296.91541204,
      "pages_per_visit": 1.62062771350456
    },
    {
      "global_rank": 17535,
      "category_rank": 74,
      "domain": "goldbelly.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2504201.94529302,
      "curr_month_visits": 2504201.94529302,
      "unique_users": 1555394.40578015,
      "pages_per_visit": 3.67253014809807
    },
    {
      "global_rank": 10509,
      "category_rank": 74,
      "domain": "preppykitchen.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 6359367.00469116,
      "curr_month_visits": 6359367.00469116,
      "unique_users": 3656488.85912244,
      "pages_per_visit": 2.31479081420769
    },
    {
      "global_rank": 73802,
      "category_rank": 74,
      "domain": "evino.com.br",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 680782.270957211,
      "curr_month_visits": 680782.270957211,
      "unique_users": 408186.857084362,
      "pages_per_visit": 2.26584615887668
    },
    {
      "global_rank": 73982,
      "category_rank": 75,
      "domain": "punchdrink.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 888278.922660998,
      "curr_month_visits": 888278.922660998,
      "unique_users": 436695.095714889,
      "pages_per_visit": 2.38910619761858
    },
    {
      "global_rank": 10661,
      "category_rank": 75,
      "domain": "housedigest.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 7372460.94677321,
      "curr_month_visits": 7372460.94677321,
      "unique_users": 3991166.02573484,
      "pages_per_visit": 1.59464340458234
    },
    {
      "global_rank": 17558,
      "category_rank": 75,
      "domain": "pcoptimum.ca",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3684507.25348694,
      "curr_month_visits": 3684507.25348694,
      "unique_users": 1292200.03148092,
      "pages_per_visit": 2.94469468220378
    },
    {
      "global_rank": 12614,
      "category_rank": 75,
      "domain": "thewoobles.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2799264.28983216,
      "curr_month_visits": 2799264.28983216,
      "unique_users": 1088438.65979919,
      "pages_per_visit": 6.35466540870906
    },
    {
      "global_rank": 303780,
      "category_rank": 75,
      "domain": "sweetpotatosoul.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 145430.723923276,
      "curr_month_visits": 145430.723923276,
      "unique_users": 80331.4214164434,
      "pages_per_visit": 2.04333961517511
    },
    {
      "global_rank": 305260,
      "category_rank": 76,
      "domain": "plantbasedjess.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 143500.455685054,
      "curr_month_visits": 143500.455685054,
      "unique_users": 82518.9733968678,
      "pages_per_visit": 1.95083826547696
    },
    {
      "global_rank": 12683,
      "category_rank": 76,
      "domain": "drd.sh",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 6426220.99913404,
      "curr_month_visits": 6426220.99913404,
      "unique_users": 3647994.47273377,
      "pages_per_visit": 1.72280704972792
    },
    {
      "global_rank": 11011,
      "category_rank": 76,
      "domain": "themediterraneandish.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 8064005.54899549,
      "curr_month_visits": 8064005.54899549,
      "unique_users": 4880943.12022779,
      "pages_per_visit": 2.07943082196857
    },
    {
      "global_rank": 74741,
      "category_rank": 76,
      "domain": "entertowinprizes.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 692964.696120571,
      "curr_month_visits": 692964.696120571,
      "unique_users": 149147.157271416,
      "pages_per_visit": 5.01842090666813
    },
    {
      "global_rank": 17627,
      "category_rank": 76,
      "domain": "kingsoopers.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2834084.49726595,
      "curr_month_visits": 2834084.49726595,
      "unique_users": 1194392.7240028,
      "pages_per_visit": 5.07598079163107
    },
    {
      "global_rank": 17116,
      "category_rank": 76,
      "domain": "cotta.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3839440.91808845,
      "curr_month_visits": 3839440.91808845,
      "unique_users": 1636130.10046983,
      "pages_per_visit": 2.93437070651258
    },
    {
      "global_rank": 12976,
      "category_rank": 77,
      "domain": "skipthedishes.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3633098.91525622,
      "curr_month_visits": 3633098.91525622,
      "unique_users": 1403559.48720851,
      "pages_per_visit": 5.84544653522863
    },
    {
      "global_rank": 17629,
      "category_rank": 77,
      "domain": "kaufino.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1335934.21626821,
      "curr_month_visits": 1335934.21626821,
      "unique_users": 738775.422897557,
      "pages_per_visit": 12.7392486435377
    },
    {
      "global_rank": 308093,
      "category_rank": 77,
      "domain": "peta2.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 80739.0783711719,
      "curr_month_visits": 80739.0783711719,
      "unique_users": 51516.158302066,
      "pages_per_visit": 3.64051572049023
    },
    {
      "global_rank": 17269,
      "category_rank": 77,
      "domain": "proshoper.ru",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1816093.76933797,
      "curr_month_visits": 1816093.76933797,
      "unique_users": 363136.853374661,
      "pages_per_visit": 14.3138438890519
    },
    {
      "global_rank": 11015,
      "category_rank": 77,
      "domain": "kochbar.de",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 7738612.94669593,
      "curr_month_visits": 7738612.94669593,
      "unique_users": 4427756.98965988,
      "pages_per_visit": 1.53154036749759
    },
    {
      "global_rank": 75422,
      "category_rank": 77,
      "domain": "nescafe.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 1017564.24334595,
      "curr_month_visits": 1017564.24334595,
      "unique_users": 633708.50716522,
      "pages_per_visit": 1.78356839076376
    },
    {
      "global_rank": 11494,
      "category_rank": 78,
      "domain": "wellplated.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 7679921.89566875,
      "curr_month_visits": 7679921.89566875,
      "unique_users": 4826716.93706846,
      "pages_per_visit": 2.52810318178644
    },
    {
      "global_rank": 17623,
      "category_rank": 78,
      "domain": "point-game.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2309963.72119893,
      "curr_month_visits": 2309963.72119893,
      "unique_users": 100331.869978384,
      "pages_per_visit": 13.8036446526508
    },
    {
      "global_rank": 17882,
      "category_rank": 78,
      "domain": "checkers.co.za",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2950827.72696642,
      "curr_month_visits": 2950827.72696642,
      "unique_users": 1689019.74547354,
      "pages_per_visit": 4.10432503060502
    },
    {
      "global_rank": 309384,
      "category_rank": 78,
      "domain": "healthylivingjames.co.uk",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 154869.264750226,
      "curr_month_visits": 154869.264750226,
      "unique_users": 83393.5102523191,
      "pages_per_visit": 2.10517131609984
    },
    {
      "global_rank": 13042,
      "category_rank": 78,
      "domain": "teleticket.com.pe",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4608803.72498859,
      "curr_month_visits": 4608803.72498859,
      "unique_users": 1826079.44797784,
      "pages_per_visit": 5.41526953557312
    },
    {
      "global_rank": 76231,
      "category_rank": 78,
      "domain": "specsonline.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 537715.092476652,
      "curr_month_visits": 537715.092476652,
      "unique_users": 364447.359336857,
      "pages_per_visit": 4.26521606559751
    },
    {
      "global_rank": 11633,
      "category_rank": 79,
      "domain": "circulaires.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3105287.95436872,
      "curr_month_visits": 3105287.95436872,
      "unique_users": 588280.926956201,
      "pages_per_visit": 11.114644965322
    },
    {
      "global_rank": 76324,
      "category_rank": 79,
      "domain": "home-barista.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 842143.946461629,
      "curr_month_visits": 842143.946461629,
      "unique_users": 383185.729765302,
      "pages_per_visit": 2.41443681185665
    },
    {
      "global_rank": 17997,
      "category_rank": 79,
      "domain": "rohlik.cz",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1974999.50078109,
      "curr_month_visits": 1974999.50078109,
      "unique_users": 628348.99433258,
      "pages_per_visit": 12.1830830874872
    },
    {
      "global_rank": 13237,
      "category_rank": 79,
      "domain": "trendndaily.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3664462.13907181,
      "curr_month_visits": 3664462.13907181,
      "unique_users": 1954530.44088484,
      "pages_per_visit": 2.65248173806182
    },
    {
      "global_rank": 309586,
      "category_rank": 79,
      "domain": "thevegan.com.tw",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 112985.376393565,
      "curr_month_visits": 112985.376393565,
      "unique_users": 45900.8843565042,
      "pages_per_visit": 2.87010723971493
    },
    {
      "global_rank": 76329,
      "category_rank": 80,
      "domain": "cocacola.jp",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 481924.6541863,
      "curr_month_visits": 481924.6541863,
      "unique_users": 269302.482146261,
      "pages_per_visit": 4.16613045588443
    },
    {
      "global_rank": 11685,
      "category_rank": 80,
      "domain": "bg-mamma.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5405269.40261483,
      "curr_month_visits": 5405269.40261483,
      "unique_users": 1269189.28009445,
      "pages_per_visit": 4.61017771126568
    },
    {
      "global_rank": 13648,
      "category_rank": 80,
      "domain": "akindo-sushiro.co.jp",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4726875.38599476,
      "curr_month_visits": 4726875.38599476,
      "unique_users": 2441199.23297052,
      "pages_per_visit": 3.38029305125709
    },
    {
      "global_rank": 18113,
      "category_rank": 80,
      "domain": "ninjakitchen.co.uk",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2695941.98071031,
      "curr_month_visits": 2695941.98071031,
      "unique_users": 1561249.59569911,
      "pages_per_visit": 3.01251770260711
    },
    {
      "global_rank": 310077,
      "category_rank": 80,
      "domain": "theedgyveg.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 149224.336704001,
      "curr_month_visits": 149224.336704001,
      "unique_users": 85027.3919111466,
      "pages_per_visit": 1.92166811385849
    },
    {
      "global_rank": 18248,
      "category_rank": 80,
      "domain": "donki.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3629621.35379124,
      "curr_month_visits": 3629621.35379124,
      "unique_users": 2160552.4173661,
      "pages_per_visit": 2.82709982217378
    },
    {
      "global_rank": 77919,
      "category_rank": 81,
      "domain": "winespectator.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 565036.608773705,
      "curr_month_visits": 565036.608773705,
      "unique_users": 325265.425618464,
      "pages_per_visit": 2.6598400330815
    },
    {
      "global_rank": 13826,
      "category_rank": 81,
      "domain": "komeda.co.jp",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4003551.84758179,
      "curr_month_visits": 4003551.84758179,
      "unique_users": 2639381.72561869,
      "pages_per_visit": 3.69749878800993
    },
    {
      "global_rank": 315789,
      "category_rank": 81,
      "domain": "eatplanted.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 128906.887189257,
      "curr_month_visits": 128906.887189257,
      "unique_users": 62739.7784295535,
      "pages_per_visit": 2.20389738711582
    },
    {
      "global_rank": 18348,
      "category_rank": 81,
      "domain": "zwilling.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2428624.2628305,
      "curr_month_visits": 2428624.2628305,
      "unique_users": 1348072.40182724,
      "pages_per_visit": 4.08777086851379
    },
    {
      "global_rank": 18872,
      "category_rank": 81,
      "domain": "delhaize.be",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2576617.24668315,
      "curr_month_visits": 2576617.24668315,
      "unique_users": 1245986.29150619,
      "pages_per_visit": 5.32120002322832
    },
    {
      "global_rank": 11714,
      "category_rank": 81,
      "domain": "mindmegette.hu",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 6734355.69571947,
      "curr_month_visits": 6734355.69571947,
      "unique_users": 2261156.74512811,
      "pages_per_visit": 2.05211599420035
    },
    {
      "global_rank": 331619,
      "category_rank": 82,
      "domain": "greensingles.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 50446.328211627,
      "curr_month_visits": 50446.328211627,
      "unique_users": 14788.4642513376,
      "pages_per_visit": 10.2433409574459
    },
    {
      "global_rank": 11771,
      "category_rank": 82,
      "domain": "smaker.pl",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 7165780.10898545,
      "curr_month_visits": 7165780.10898545,
      "unique_users": 3507591.2625325,
      "pages_per_visit": 1.95530960592535
    },
    {
      "global_rank": 78938,
      "category_rank": 82,
      "domain": "firstchoiceliquor.com.au",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 703943.315268741,
      "curr_month_visits": 703943.315268741,
      "unique_users": 372643.297658326,
      "pages_per_visit": 3.22184333987202
    },
    {
      "global_rank": 13940,
      "category_rank": 82,
      "domain": "buffalowildwings.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4591774.27505382,
      "curr_month_visits": 4591774.27505382,
      "unique_users": 3162385.20942786,
      "pages_per_visit": 4.0854460777865
    },
    {
      "global_rank": 18689,
      "category_rank": 82,
      "domain": "olehdtv.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 4097735.09645495,
      "curr_month_visits": 4097735.09645495,
      "unique_users": 500242.672893229,
      "pages_per_visit": 3.7083084531045
    },
    {
      "global_rank": 19931,
      "category_rank": 82,
      "domain": "kaufland.cz",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3200891.12338261,
      "curr_month_visits": 3200891.12338261,
      "unique_users": 1778937.35620487,
      "pages_per_visit": 2.53417951302061
    },
    {
      "global_rank": 335497,
      "category_rank": 83,
      "domain": "itslivb.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 136248.980394689,
      "curr_month_visits": 136248.980394689,
      "unique_users": 63692.3896364209,
      "pages_per_visit": 2.28754368805728
    },
    {
      "global_rank": 18760,
      "category_rank": 83,
      "domain": "chateraise.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2812021.68755879,
      "curr_month_visits": 2812021.68755879,
      "unique_users": 1762970.94294477,
      "pages_per_visit": 4.04825567520687
    },
    {
      "global_rank": 20227,
      "category_rank": 83,
      "domain": "metro.ca",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2933096.78378914,
      "curr_month_visits": 2933096.78378914,
      "unique_users": 1430310.1710946,
      "pages_per_visit": 3.90222709114033
    },
    {
      "global_rank": 13967,
      "category_rank": 83,
      "domain": "tripleseat.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3702277.75653895,
      "curr_month_visits": 3702277.75653895,
      "unique_users": 1361023.15379334,
      "pages_per_visit": 6.70913751872224
    },
    {
      "global_rank": 80329,
      "category_rank": 83,
      "domain": "wine.com.br",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 568743.517602453,
      "curr_month_visits": 568743.517602453,
      "unique_users": 347064.084282989,
      "pages_per_visit": 3.17641919196482
    },
    {
      "global_rank": 12090,
      "category_rank": 83,
      "domain": "indianhealthyrecipes.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 6992648.67673654,
      "curr_month_visits": 6992648.67673654,
      "unique_users": 3971487.31185473,
      "pages_per_visit": 1.96137618639571
    },
    {
      "global_rank": 337349,
      "category_rank": 84,
      "domain": "leezen.com.tw",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 124557.854997384,
      "curr_month_visits": 124557.854997384,
      "unique_users": 65836.2840790716,
      "pages_per_visit": 3.02720618364037
    },
    {
      "global_rank": 18813,
      "category_rank": 84,
      "domain": "shipt.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2787703.51120696,
      "curr_month_visits": 2787703.51120696,
      "unique_users": 1485628.02379312,
      "pages_per_visit": 4.04333432546851
    },
    {
      "global_rank": 14159,
      "category_rank": 84,
      "domain": "arbys.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4274899.92135993,
      "curr_month_visits": 4274899.92135993,
      "unique_users": 3046423.65350286,
      "pages_per_visit": 3.84772776697618
    },
    {
      "global_rank": 80411,
      "category_rank": 84,
      "domain": "water.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 682654.723017306,
      "curr_month_visits": 682654.723017306,
      "unique_users": 426351.16038348,
      "pages_per_visit": 3.46064419918002
    },
    {
      "global_rank": 21625,
      "category_rank": 84,
      "domain": "one.nz",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3638158.89101879,
      "curr_month_visits": 3638158.89101879,
      "unique_users": 828300.922092109,
      "pages_per_visit": 2.75228826397559
    },
    {
      "global_rank": 12177,
      "category_rank": 84,
      "domain": "hitosara.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 6087217.7347894,
      "curr_month_visits": 6087217.7347894,
      "unique_users": 4627423.51691741,
      "pages_per_visit": 2.38187407674052
    },
    {
      "global_rank": 12218,
      "category_rank": 85,
      "domain": "rewardany.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 6942599.5521851,
      "curr_month_visits": 6942599.5521851,
      "unique_users": 4275749.93512091,
      "pages_per_visit": 1.53224210340302
    },
    {
      "global_rank": 21707,
      "category_rank": 85,
      "domain": "hexclad.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1827286.84301145,
      "curr_month_visits": 1827286.84301145,
      "unique_users": 1177313.66174003,
      "pages_per_visit": 2.84998953337446
    },
    {
      "global_rank": 18886,
      "category_rank": 85,
      "domain": "knshow.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2611099.6009941,
      "curr_month_visits": 2611099.6009941,
      "unique_users": 595962.736746187,
      "pages_per_visit": 6.92420402424376
    },
    {
      "global_rank": 81667,
      "category_rank": 85,
      "domain": "gatorade.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 846139.761562738,
      "curr_month_visits": 846139.761562738,
      "unique_users": 558063.243073673,
      "pages_per_visit": 2.9658485582143
    },
    {
      "global_rank": 339152,
      "category_rank": 85,
      "domain": "sunwarrior.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 130788.035556474,
      "curr_month_visits": 130788.035556474,
      "unique_users": 63033.4549928586,
      "pages_per_visit": 2.62273854105409
    },
    {
      "global_rank": 14171,
      "category_rank": 85,
      "domain": "simple-life-app.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4275716.56773164,
      "curr_month_visits": 4275716.56773164,
      "unique_users": 2851135.32521703,
      "pages_per_visit": 6.07798930276024
    },
    {
      "global_rank": 346762,
      "category_rank": 86,
      "domain": "unrealsnacks.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 68406.0972942417,
      "curr_month_visits": 68406.0972942417,
      "unique_users": 42006.7615556219,
      "pages_per_visit": 3.29199243143357
    },
    {
      "global_rank": 81822,
      "category_rank": 86,
      "domain": "alternativebrewing.com.au",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 391243.491564228,
      "curr_month_visits": 391243.491564228,
      "unique_users": 203138.647749094,
      "pages_per_visit": 4.29029158103454
    },
    {
      "global_rank": 22004,
      "category_rank": 86,
      "domain": "gianteagle.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2292409.79861258,
      "curr_month_visits": 2292409.79861258,
      "unique_users": 1017086.26451797,
      "pages_per_visit": 4.69132870432676
    },
    {
      "global_rank": 12325,
      "category_rank": 86,
      "domain": "gaumenfreundin.de",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 7196653.78255682,
      "curr_month_visits": 7196653.78255682,
      "unique_users": 4059601.21304608,
      "pages_per_visit": 1.84026903277354
    },
    {
      "global_rank": 18906,
      "category_rank": 86,
      "domain": "cloud.aeolservice.es",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2514801.00179431,
      "curr_month_visits": 2514801.00179431,
      "unique_users": 313379.745362879,
      "pages_per_visit": 9.82410514739831
    },
    {
      "global_rank": 14191,
      "category_rank": 86,
      "domain": "dominos.co.in",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2980702.7871639,
      "curr_month_visits": 2980702.7871639,
      "unique_users": 1825018.04355241,
      "pages_per_visit": 6.04657376651889
    },
    {
      "global_rank": 12430,
      "category_rank": 87,
      "domain": "emmikochteinfach.de",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 6474950.84515186,
      "curr_month_visits": 6474950.84515186,
      "unique_users": 3423939.29723887,
      "pages_per_visit": 1.80121994588655
    },
    {
      "global_rank": 22061,
      "category_rank": 87,
      "domain": "newworld.co.nz",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2336425.06294221,
      "curr_month_visits": 2336425.06294221,
      "unique_users": 1072311.73953811,
      "pages_per_visit": 4.52822621455465
    },
    {
      "global_rank": 14277,
      "category_rank": 87,
      "domain": "olo.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4442343.88811381,
      "curr_month_visits": 4442343.88811381,
      "unique_users": 3051399.02722492,
      "pages_per_visit": 3.48711867548335
    },
    {
      "global_rank": 19037,
      "category_rank": 87,
      "domain": "24028-net.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2971954.6369156,
      "curr_month_visits": 2971954.6369156,
      "unique_users": 1170975.92180037,
      "pages_per_visit": 5.45685698868213
    },
    {
      "global_rank": 82043,
      "category_rank": 87,
      "domain": "abcfws.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 471017.124920505,
      "curr_month_visits": 471017.124920505,
      "unique_users": 319221.435451644,
      "pages_per_visit": 3.32411445704657
    },
    {
      "global_rank": 348206,
      "category_rank": 87,
      "domain": "thefullhelping.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 147398.582596022,
      "curr_month_visits": 147398.582596022,
      "unique_users": 78987.0978912714,
      "pages_per_visit": 1.77895822491963
    },
    {
      "global_rank": 19057,
      "category_rank": 88,
      "domain": "jysk.no",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2398439.03249595,
      "curr_month_visits": 2398439.03249595,
      "unique_users": 1121121.30726565,
      "pages_per_visit": 5.32899609450466
    },
    {
      "global_rank": 14298,
      "category_rank": 88,
      "domain": "hololivepro.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4096279.04514142,
      "curr_month_visits": 4096279.04514142,
      "unique_users": 1411232.4304584,
      "pages_per_visit": 4.209843523115
    },
    {
      "global_rank": 22092,
      "category_rank": 88,
      "domain": "tesco.ie",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1677275.11123965,
      "curr_month_visits": 1677275.11123965,
      "unique_users": 769360.871697228,
      "pages_per_visit": 8.92613462988833
    },
    {
      "global_rank": 83525,
      "category_rank": 88,
      "domain": "saketime.jp",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 636160.165970171,
      "curr_month_visits": 636160.165970171,
      "unique_users": 379021.48419352,
      "pages_per_visit": 2.52635762221575
    },
    {
      "global_rank": 12431,
      "category_rank": 88,
      "domain": "minimalistbaker.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 6478826.4841785,
      "curr_month_visits": 6478826.4841785,
      "unique_users": 3896613.41262907,
      "pages_per_visit": 1.92775778542783
    },
    {
      "global_rank": 356764,
      "category_rank": 88,
      "domain": "essentialorganicingredients.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 51370.792890239,
      "curr_month_visits": 51370.792890239,
      "unique_users": 30393.8327353578,
      "pages_per_visit": 5.2879451085922
    },
    {
      "global_rank": 22137,
      "category_rank": 89,
      "domain": "pnp.co.za",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2475961.58485251,
      "curr_month_visits": 2475961.58485251,
      "unique_users": 1348120.614588,
      "pages_per_visit": 3.40542219746662
    },
    {
      "global_rank": 14350,
      "category_rank": 89,
      "domain": "mos.jp",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4086314.32907887,
      "curr_month_visits": 4086314.32907887,
      "unique_users": 2635518.25664948,
      "pages_per_visit": 3.63644901098102
    },
    {
      "global_rank": 83701,
      "category_rank": 89,
      "domain": "guinness.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 534962.25418784,
      "curr_month_visits": 534962.25418784,
      "unique_users": 329560.59198497,
      "pages_per_visit": 1.93233167122386
    },
    {
      "global_rank": 12531,
      "category_rank": 89,
      "domain": "povarenok.ru",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5866452.94703672,
      "curr_month_visits": 5866452.94703672,
      "unique_users": 2970662.91731537,
      "pages_per_visit": 2.59731595829662
    },
    {
      "global_rank": 359035,
      "category_rank": 89,
      "domain": "plantte.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 157726.789731598,
      "curr_month_visits": 157726.789731598,
      "unique_users": 122398.370928159,
      "pages_per_visit": 1.16514496298909
    },
    {
      "global_rank": 19234,
      "category_rank": 89,
      "domain": "morinaga.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 4855660.95974641,
      "curr_month_visits": 4855660.95974641,
      "unique_users": 3387683.6665011,
      "pages_per_visit": 1.66553622121924
    },
    {
      "global_rank": 83878,
      "category_rank": 90,
      "domain": "chefstore.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 742879.679686817,
      "curr_month_visits": 742879.679686817,
      "unique_users": 370522.145275065,
      "pages_per_visit": 3.91613620081772
    },
    {
      "global_rank": 14553,
      "category_rank": 90,
      "domain": "slicelife.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4034371.43130379,
      "curr_month_visits": 4034371.43130379,
      "unique_users": 2918621.94810123,
      "pages_per_visit": 3.30185184289889
    },
    {
      "global_rank": 12703,
      "category_rank": 90,
      "domain": "skinnytaste.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 6592607.14051016,
      "curr_month_visits": 6592607.14051016,
      "unique_users": 3769909.04371468,
      "pages_per_visit": 2.48992737447366
    },
    {
      "global_rank": 367651,
      "category_rank": 90,
      "domain": "thehumaneleague.org",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 140941.466821608,
      "curr_month_visits": 140941.466821608,
      "unique_users": 76874.2261362991,
      "pages_per_visit": 1.80745169572299
    },
    {
      "global_rank": 22192,
      "category_rank": 90,
      "domain": "paknsave.co.nz",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2283067.89157033,
      "curr_month_visits": 2283067.89157033,
      "unique_users": 874755.149917277,
      "pages_per_visit": 5.05313895512381
    },
    {
      "global_rank": 19376,
      "category_rank": 90,
      "domain": "oyako-heya.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1450337.4303884,
      "curr_month_visits": 1450337.4303884,
      "unique_users": 635228.260517726,
      "pages_per_visit": 13.5295244807728
    },
    {
      "global_rank": 22671,
      "category_rank": 91,
      "domain": "hannaford.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2373776.64678964,
      "curr_month_visits": 2373776.64678964,
      "unique_users": 857890.687094656,
      "pages_per_visit": 4.95408481889552
    },
    {
      "global_rank": 83954,
      "category_rank": 91,
      "domain": "whisky.de",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 362643.074038395,
      "curr_month_visits": 362643.074038395,
      "unique_users": 166264.438874695,
      "pages_per_visit": 5.93079133216969
    },
    {
      "global_rank": 12742,
      "category_rank": 91,
      "domain": "cookist.it",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 6177814.42474976,
      "curr_month_visits": 6177814.42474976,
      "unique_users": 3421263.54701942,
      "pages_per_visit": 1.77937365182254
    },
    {
      "global_rank": 370023,
      "category_rank": 91,
      "domain": "thehappypear.ie",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 121522.149735802,
      "curr_month_visits": 121522.149735802,
      "unique_users": 59029.8158429218,
      "pages_per_visit": 2.39937728757219
    },
    {
      "global_rank": 14620,
      "category_rank": 91,
      "domain": "dominos.jp",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3427520.62361303,
      "curr_month_visits": 3427520.62361303,
      "unique_users": 1859770.17939778,
      "pages_per_visit": 5.18025726395781
    },
    {
      "global_rank": 19377,
      "category_rank": 91,
      "domain": "research-plus.net",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3295880.51816007,
      "curr_month_visits": 3295880.51816007,
      "unique_users": 827202.781703002,
      "pages_per_visit": 3.18194526836708
    },
    {
      "global_rank": 12794,
      "category_rank": 92,
      "domain": "top.pl",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 8415378.10437635,
      "curr_month_visits": 8415378.10437635,
      "unique_users": 4152508.2361407,
      "pages_per_visit": 1.32140051132314
    },
    {
      "global_rank": 22810,
      "category_rank": 92,
      "domain": "shop.aldi.us",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2452692.61525488,
      "curr_month_visits": 2452692.61525488,
      "unique_users": 1490078.45015203,
      "pages_per_visit": 3.54186959044022
    },
    {
      "global_rank": 85405,
      "category_rank": 92,
      "domain": "illy.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 508485.047518114,
      "curr_month_visits": 508485.047518114,
      "unique_users": 298692.444813205,
      "pages_per_visit": 3.6890201067883
    },
    {
      "global_rank": 19453,
      "category_rank": 92,
      "domain": "ralphs.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2847635.90667407,
      "curr_month_visits": 2847635.90667407,
      "unique_users": 1388341.53616062,
      "pages_per_visit": 3.91667024789885
    },
    {
      "global_rank": 370871,
      "category_rank": 92,
      "domain": "gfi.org",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 110214.268434953,
      "curr_month_visits": 110214.268434953,
      "unique_users": 54649.6667832423,
      "pages_per_visit": 2.08775559221831
    },
    {
      "global_rank": 14695,
      "category_rank": 92,
      "domain": "ctfassets.net",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 6407719.46585393,
      "curr_month_visits": 6407719.46585393,
      "unique_users": 4661942.55628727,
      "pages_per_visit": 1.53886811438841
    },
    {
      "global_rank": 375457,
      "category_rank": 93,
      "domain": "gamechangersmovie.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 127154.421669523,
      "curr_month_visits": 127154.421669523,
      "unique_users": 40241.2028296159,
      "pages_per_visit": 1.63344732430033
    },
    {
      "global_rank": 22917,
      "category_rank": 93,
      "domain": "omahasteaks.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1816275.57515904,
      "curr_month_visits": 1816275.57515904,
      "unique_users": 1021725.41559436,
      "pages_per_visit": 3.79385235673262
    },
    {
      "global_rank": 14921,
      "category_rank": 93,
      "domain": "joinhomebase.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4511164.76730232,
      "curr_month_visits": 4511164.76730232,
      "unique_users": 781937.380031889,
      "pages_per_visit": 4.80814514840069
    },
    {
      "global_rank": 19640,
      "category_rank": 93,
      "domain": "aeon.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3905034.80369359,
      "curr_month_visits": 3905034.80369359,
      "unique_users": 2465963.00027253,
      "pages_per_visit": 2.18931986495899
    },
    {
      "global_rank": 12904,
      "category_rank": 93,
      "domain": "yemek.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 6463126.6645579,
      "curr_month_visits": 6463126.6645579,
      "unique_users": 3434100.28589993,
      "pages_per_visit": 1.77242655267599
    },
    {
      "global_rank": 85884,
      "category_rank": 93,
      "domain": "idealwine.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 446820.866250572,
      "curr_month_visits": 446820.866250572,
      "unique_users": 223510.903894144,
      "pages_per_visit": 3.90019142032462
    },
    {
      "global_rank": 19642,
      "category_rank": 94,
      "domain": "mognavi.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3315247.37643001,
      "curr_month_visits": 3315247.37643001,
      "unique_users": 1903984.42662243,
      "pages_per_visit": 3.4956947311418
    },
    {
      "global_rank": 13244,
      "category_rank": 94,
      "domain": "brigitte.de",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 7358690.37114583,
      "curr_month_visits": 7358690.37114583,
      "unique_users": 4041002.89991197,
      "pages_per_visit": 1.70935043470338
    },
    {
      "global_rank": 15040,
      "category_rank": 94,
      "domain": "culvers.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4120291.33757035,
      "curr_month_visits": 4120291.33757035,
      "unique_users": 2510362.17442487,
      "pages_per_visit": 4.19127482474454
    },
    {
      "global_rank": 378391,
      "category_rank": 94,
      "domain": "glow-diaries.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 176959.512856699,
      "curr_month_visits": 176959.512856699,
      "unique_users": 72279.8446187389,
      "pages_per_visit": 2.56923172735416
    },
    {
      "global_rank": 22949,
      "category_rank": 94,
      "domain": "shop.sprouts.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2354974.18200111,
      "curr_month_visits": 2354974.18200111,
      "unique_users": 1233530.45999308,
      "pages_per_visit": 3.69024946042594
    },
    {
      "global_rank": 86567,
      "category_rank": 94,
      "domain": "vino.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 486088.493851899,
      "curr_month_visits": 486088.493851899,
      "unique_users": 251649.054551971,
      "pages_per_visit": 3.29845412505575
    },
    {
      "global_rank": 15391,
      "category_rank": 95,
      "domain": "opentable.co.uk",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3833120.03705849,
      "curr_month_visits": 3833120.03705849,
      "unique_users": 2376107.25277246,
      "pages_per_visit": 3.31476694712595
    },
    {
      "global_rank": 19811,
      "category_rank": 95,
      "domain": "jysk.ro",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2432637.54157168,
      "curr_month_visits": 2432637.54157168,
      "unique_users": 1146237.21861606,
      "pages_per_visit": 4.43623318987781
    },
    {
      "global_rank": 23056,
      "category_rank": 95,
      "domain": "nuts.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1900786.1168302,
      "curr_month_visits": 1900786.1168302,
      "unique_users": 1163626.60539798,
      "pages_per_visit": 4.40496447165454
    },
    {
      "global_rank": 87028,
      "category_rank": 95,
      "domain": "vin65.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 449932.340270615,
      "curr_month_visits": 449932.340270615,
      "unique_users": 101862.207261707,
      "pages_per_visit": 9.74461425544671
    },
    {
      "global_rank": 13262,
      "category_rank": 95,
      "domain": "doradcasmaku.pl",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 7099608.39958202,
      "curr_month_visits": 7099608.39958202,
      "unique_users": 3857597.13474512,
      "pages_per_visit": 1.44966803241683
    },
    {
      "global_rank": 379530,
      "category_rank": 95,
      "domain": "naturallieplantbased.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 131398.291662246,
      "curr_month_visits": 131398.291662246,
      "unique_users": 64162.8857317782,
      "pages_per_visit": 2.36383332310535
    },
    {
      "global_rank": 13330,
      "category_rank": 96,
      "domain": "gotvach.bg",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5263764.41763303,
      "curr_month_visits": 5263764.41763303,
      "unique_users": 1587198.09015076,
      "pages_per_visit": 3.17469905658223
    },
    {
      "global_rank": 15414,
      "category_rank": 96,
      "domain": "takeaway.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3966120.92008571,
      "curr_month_visits": 3966120.92008571,
      "unique_users": 1663768.43407562,
      "pages_per_visit": 3.86214385060252
    },
    {
      "global_rank": 19894,
      "category_rank": 96,
      "domain": "nichireifoods.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 5231046.00855025,
      "curr_month_visits": 5231046.00855025,
      "unique_users": 3502827.72994247,
      "pages_per_visit": 1.50853952708768
    },
    {
      "global_rank": 89097,
      "category_rank": 96,
      "domain": "wordswithfriends.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 803121.717211339,
      "curr_month_visits": 803121.717211339,
      "unique_users": 167475.99979465,
      "pages_per_visit": 2.13862923154773
    },
    {
      "global_rank": 382199,
      "category_rank": 96,
      "domain": "thishealthykitchen.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 127480.551213301,
      "curr_month_visits": 127480.551213301,
      "unique_users": 68478.5134159822,
      "pages_per_visit": 2.05693196197493
    },
    {
      "global_rank": 23564,
      "category_rank": 96,
      "domain": "winndixie.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2403498.83834997,
      "curr_month_visits": 2403498.83834997,
      "unique_users": 1122447.95007983,
      "pages_per_visit": 4.06437391000106
    },
    {
      "global_rank": 20004,
      "category_rank": 97,
      "domain": "picard.fr",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2126525.83752174,
      "curr_month_visits": 2126525.83752174,
      "unique_users": 1199260.11115444,
      "pages_per_visit": 4.97187723322559
    },
    {
      "global_rank": 24020,
      "category_rank": 97,
      "domain": "mizkan.co.jp",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3356549.94485979,
      "curr_month_visits": 3356549.94485979,
      "unique_users": 2304258.36487762,
      "pages_per_visit": 2.03966795373156
    },
    {
      "global_rank": 13404,
      "category_rank": 97,
      "domain": "thebigmansworld.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 6191031.97903575,
      "curr_month_visits": 6191031.97903575,
      "unique_users": 4012446.92597328,
      "pages_per_visit": 1.94510289440444
    },
    {
      "global_rank": 15419,
      "category_rank": 97,
      "domain": "ze.delivery",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3947462.08626394,
      "curr_month_visits": 3947462.08626394,
      "unique_users": 1089729.30411256,
      "pages_per_visit": 7.83484888321496
    },
    {
      "global_rank": 384867,
      "category_rank": 97,
      "domain": "nae-vegan.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 75111.6728094802,
      "curr_month_visits": 75111.6728094802,
      "unique_users": 33020.9777051603,
      "pages_per_visit": 3.89708105204827
    },
    {
      "global_rank": 89324,
      "category_rank": 97,
      "domain": "supernosso.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 788069.342884256,
      "curr_month_visits": 788069.342884256,
      "unique_users": 489887.894686085,
      "pages_per_visit": 1.63344015625648
    },
    {
      "global_rank": 89702,
      "category_rank": 98,
      "domain": "encompass8.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 308606.694063644,
      "curr_month_visits": 308606.694063644,
      "unique_users": 40416.9248864287,
      "pages_per_visit": 25.9188124870065
    },
    {
      "global_rank": 15469,
      "category_rank": 98,
      "domain": "pathe.fr",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3548628.46099232,
      "curr_month_visits": 3548628.46099232,
      "unique_users": 1681241.78835278,
      "pages_per_visit": 3.78528084341809
    },
    {
      "global_rank": 387315,
      "category_rank": 98,
      "domain": "nutriciously.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 140682.852962874,
      "curr_month_visits": 140682.852962874,
      "unique_users": 76360.057356279,
      "pages_per_visit": 1.82448620462803
    },
    {
      "global_rank": 13427,
      "category_rank": 98,
      "domain": "edziecko.pl",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5420769.07962882,
      "curr_month_visits": 5420769.07962882,
      "unique_users": 2267319.32161502,
      "pages_per_visit": 2.08394099797633
    },
    {
      "global_rank": 20006,
      "category_rank": 98,
      "domain": "autoline.link",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 4591626.70567747,
      "curr_month_visits": 4591626.70567747,
      "unique_users": 2004398.85990444,
      "pages_per_visit": 1.3806014157161
    },
    {
      "global_rank": 24150,
      "category_rank": 98,
      "domain": "skynet-c.jp",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1414475.10015775,
      "curr_month_visits": 1414475.10015775,
      "unique_users": 824316.036164607,
      "pages_per_visit": 4.28418341012887
    },
    {
      "global_rank": 15484,
      "category_rank": 99,
      "domain": "couchtuner.show",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 5547846.34575884,
      "curr_month_visits": 5547846.34575884,
      "unique_users": 578196.986976995,
      "pages_per_visit": 2.75783219401952
    },
    {
      "global_rank": 387783,
      "category_rank": 99,
      "domain": "blueberryvegan.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 190248.879570057,
      "curr_month_visits": 190248.879570057,
      "unique_users": 63503.1453396418,
      "pages_per_visit": 1.13996676115122
    },
    {
      "global_rank": 90726,
      "category_rank": 99,
      "domain": "starbucks.co.uk",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 557543.483300176,
      "curr_month_visits": 557543.483300176,
      "unique_users": 365339.808707573,
      "pages_per_visit": 3.58247213348527
    },
    {
      "global_rank": 20215,
      "category_rank": 99,
      "domain": "lidl.se",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2718961.3682254,
      "curr_month_visits": 2718961.3682254,
      "unique_users": 832141.592853171,
      "pages_per_visit": 5.2334665623032
    },
    {
      "global_rank": 13518,
      "category_rank": 99,
      "domain": "happyinshape.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4257180.45639021,
      "curr_month_visits": 4257180.45639021,
      "unique_users": 3079352.92031595,
      "pages_per_visit": 4.32760439334657
    },
    {
      "global_rank": 24351,
      "category_rank": 99,
      "domain": "fairprice.com.sg",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2439194.07620088,
      "curr_month_visits": 2439194.07620088,
      "unique_users": 1356682.79388258,
      "pages_per_visit": 3.72802368582645
    },
    {
      "global_rank": 20283,
      "category_rank": 100,
      "domain": "rema1000.dk",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1817447.56400898,
      "curr_month_visits": 1817447.56400898,
      "unique_users": 657268.388092818,
      "pages_per_visit": 9.09272405054553
    },
    {
      "global_rank": 393729,
      "category_rank": 100,
      "domain": "vegconomist.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 119884.169842177,
      "curr_month_visits": 119884.169842177,
      "unique_users": 61455.6593718499,
      "pages_per_visit": 1.6884634934957
    },
    {
      "global_rank": 13703,
      "category_rank": 100,
      "domain": "food52.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5089487.61904181,
      "curr_month_visits": 5089487.61904181,
      "unique_users": 3580350.672896,
      "pages_per_visit": 1.76954645942234
    },
    {
      "global_rank": 93757,
      "category_rank": 100,
      "domain": "drinkprime.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 475447.711496985,
      "curr_month_visits": 475447.711496985,
      "unique_users": 256159.914260744,
      "pages_per_visit": 2.81187703835413
    },
    {
      "global_rank": 24886,
      "category_rank": 100,
      "domain": "giantfood.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2306443.0017246,
      "curr_month_visits": 2306443.0017246,
      "unique_users": 1088672.32153856,
      "pages_per_visit": 3.60988899308912
    },
    {
      "global_rank": 15595,
      "category_rank": 100,
      "domain": "publix.org",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3889078.22584189,
      "curr_month_visits": 3889078.22584189,
      "unique_users": 293992.798992887,
      "pages_per_visit": 4.37946835117605
    },
    {
      "global_rank": 26418,
      "category_rank": 101,
      "domain": "carrefoursa.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2420532.85857167,
      "curr_month_visits": 2420532.85857167,
      "unique_users": 1313448.05154359,
      "pages_per_visit": 3.82187825522265
    },
    {
      "global_rank": 20943,
      "category_rank": 101,
      "domain": "carrefour.ro",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2245988.37397397,
      "curr_month_visits": 2245988.37397397,
      "unique_users": 1191839.99629282,
      "pages_per_visit": 3.76167794991051
    },
    {
      "global_rank": 95806,
      "category_rank": 101,
      "domain": "bluebottlecoffee.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 389926.487000888,
      "curr_month_visits": 389926.487000888,
      "unique_users": 228716.172868913,
      "pages_per_visit": 3.22286342040122
    },
    {
      "global_rank": 14053,
      "category_rank": 101,
      "domain": "koket.se",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5527408.53092862,
      "curr_month_visits": 5527408.53092862,
      "unique_users": 2085820.96538221,
      "pages_per_visit": 2.38634758302792
    },
    {
      "global_rank": 394402,
      "category_rank": 101,
      "domain": "daisybeet.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 110652.609139444,
      "curr_month_visits": 110652.609139444,
      "unique_users": 46288.2417457683,
      "pages_per_visit": 1.99797070412424
    },
    {
      "global_rank": 15794,
      "category_rank": 101,
      "domain": "yoshinoya.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4758128.93881699,
      "curr_month_visits": 4758128.93881699,
      "unique_users": 2990878.3256941,
      "pages_per_visit": 3.58526702382595
    },
    {
      "global_rank": 395978,
      "category_rank": 102,
      "domain": "myplantifulcooking.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 119466.394644444,
      "curr_month_visits": 119466.394644444,
      "unique_users": 62869.0242993495,
      "pages_per_visit": 1.8863505417919
    },
    {
      "global_rank": 26474,
      "category_rank": 102,
      "domain": "azurestandard.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1768803.02372318,
      "curr_month_visits": 1768803.02372318,
      "unique_users": 588607.750344581,
      "pages_per_visit": 6.73963200252417
    },
    {
      "global_rank": 21308,
      "category_rank": 102,
      "domain": "vons.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2303759.64466321,
      "curr_month_visits": 2303759.64466321,
      "unique_users": 1099642.31611051,
      "pages_per_visit": 5.4907038510336
    },
    {
      "global_rank": 16068,
      "category_rank": 102,
      "domain": "talabat.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4276801.63837275,
      "curr_month_visits": 4276801.63837275,
      "unique_users": 1566521.53477124,
      "pages_per_visit": 3.58598950512779
    },
    {
      "global_rank": 96499,
      "category_rank": 102,
      "domain": "homebrewtalk.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 673535.964841215,
      "curr_month_visits": 673535.964841215,
      "unique_users": 355679.67734604,
      "pages_per_visit": 1.95102704086263
    },
    {
      "global_rank": 14119,
      "category_rank": 102,
      "domain": "matprat.no",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5345331.94616093,
      "curr_month_visits": 5345331.94616093,
      "unique_users": 1978463.14681774,
      "pages_per_visit": 2.62408626132405
    },
    {
      "global_rank": 21580,
      "category_rank": 103,
      "domain": "amonitors.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3801764.49255583,
      "curr_month_visits": 3801764.49255583,
      "unique_users": 608269.569134273,
      "pages_per_visit": 2.38821996599319
    },
    {
      "global_rank": 397485,
      "category_rank": 103,
      "domain": "veganuary.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 146088.076913058,
      "curr_month_visits": 146088.076913058,
      "unique_users": 77677.0218409766,
      "pages_per_visit": 1.7560595289265
    },
    {
      "global_rank": 14228,
      "category_rank": 103,
      "domain": "epicurious.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5312566.12224588,
      "curr_month_visits": 5312566.12224588,
      "unique_users": 3738545.55416876,
      "pages_per_visit": 1.68665749021314
    },
    {
      "global_rank": 26476,
      "category_rank": 103,
      "domain": "nooro-us.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1280702.65736412,
      "curr_month_visits": 1280702.65736412,
      "unique_users": 660114.080499511,
      "pages_per_visit": 2.12119651397001
    },
    {
      "global_rank": 16191,
      "category_rank": 103,
      "domain": "hungerrush.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2937270.79170792,
      "curr_month_visits": 2937270.79170792,
      "unique_users": 1842499.74216122,
      "pages_per_visit": 5.95872944298838
    },
    {
      "global_rank": 97048,
      "category_rank": 103,
      "domain": "reservebar.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 589695.737560016,
      "curr_month_visits": 589695.737560016,
      "unique_users": 393119.433142519,
      "pages_per_visit": 2.12248498950105
    },
    {
      "global_rank": 400370,
      "category_rank": 104,
      "domain": "worldofvegan.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 99405.7533071661,
      "curr_month_visits": 99405.7533071661,
      "unique_users": 58932.0721222407,
      "pages_per_visit": 1.81554635888275
    },
    {
      "global_rank": 26497,
      "category_rank": 104,
      "domain": "fortnumandmason.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1364953.81559864,
      "curr_month_visits": 1364953.81559864,
      "unique_users": 824661.724828917,
      "pages_per_visit": 4.47815135953199
    },
    {
      "global_rank": 21633,
      "category_rank": 104,
      "domain": "ebica.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3348854.83288612,
      "curr_month_visits": 3348854.83288612,
      "unique_users": 1813171.86834611,
      "pages_per_visit": 2.59468713231209
    },
    {
      "global_rank": 98532,
      "category_rank": 104,
      "domain": "cityhive.net",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 411058.218917518,
      "curr_month_visits": 411058.218917518,
      "unique_users": 78009.4087672591,
      "pages_per_visit": 7.40462234207414
    },
    {
      "global_rank": 16255,
      "category_rank": 104,
      "domain": "thecheesecakefactory.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3275915.11326915,
      "curr_month_visits": 3275915.11326915,
      "unique_users": 2185657.46392457,
      "pages_per_visit": 4.62773735918901
    },
    {
      "global_rank": 14270,
      "category_rank": 104,
      "domain": "halfbakedharvest.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4958669.36080505,
      "curr_month_visits": 4958669.36080505,
      "unique_users": 2735669.93299067,
      "pages_per_visit": 2.47997041009414
    },
    {
      "global_rank": 16295,
      "category_rank": 105,
      "domain": "mcdonalds.fr",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3472752.10525496,
      "curr_month_visits": 3472752.10525496,
      "unique_users": 2388518.4711533,
      "pages_per_visit": 3.38664292899993
    },
    {
      "global_rank": 26569,
      "category_rank": 105,
      "domain": "giantfoodstores.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1868036.08859703,
      "curr_month_visits": 1868036.08859703,
      "unique_users": 788128.66653097,
      "pages_per_visit": 5.03382849992876
    },
    {
      "global_rank": 14520,
      "category_rank": 105,
      "domain": "lifestyle.sapo.pt",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4924140.61405522,
      "curr_month_visits": 4924140.61405522,
      "unique_users": 1425166.82832901,
      "pages_per_visit": 2.64712757657594
    },
    {
      "global_rank": 401078,
      "category_rank": 105,
      "domain": "proveg.org",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 108374.481111485,
      "curr_month_visits": 108374.481111485,
      "unique_users": 52149.2444596128,
      "pages_per_visit": 1.74502774684713
    },
    {
      "global_rank": 21819,
      "category_rank": 105,
      "domain": "sauna-ikitai.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3049799.2443631,
      "curr_month_visits": 3049799.2443631,
      "unique_users": 947517.68383489,
      "pages_per_visit": 3.62859577508297
    },
    {
      "global_rank": 98826,
      "category_rank": 105,
      "domain": "dosedaily.co",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 347777.265021927,
      "curr_month_visits": 347777.265021927,
      "unique_users": 186374.549252449,
      "pages_per_visit": 2.44512314563137
    },
    {
      "global_rank": 100888,
      "category_rank": 106,
      "domain": "winefolly.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 629080.978430712,
      "curr_month_visits": 629080.978430712,
      "unique_users": 395892.476156558,
      "pages_per_visit": 1.85600798076457
    },
    {
      "global_rank": 26850,
      "category_rank": 106,
      "domain": "billa.at",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2202024.11114131,
      "curr_month_visits": 2202024.11114131,
      "unique_users": 1193959.64885577,
      "pages_per_visit": 3.23706904142137
    },
    {
      "global_rank": 16479,
      "category_rank": 106,
      "domain": "pergikuliner.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4594754.52596268,
      "curr_month_visits": 4594754.52596268,
      "unique_users": 2872534.67234214,
      "pages_per_visit": 2.268375566973
    },
    {
      "global_rank": 401265,
      "category_rank": 106,
      "domain": "wateetjedanwel.nl",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 77655.6331210299,
      "curr_month_visits": 77655.6331210299,
      "unique_users": 50208.5153305519,
      "pages_per_visit": 2.34312044783295
    },
    {
      "global_rank": 14562,
      "category_rank": 106,
      "domain": "americastestkitchen.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3792629.83732676,
      "curr_month_visits": 3792629.83732676,
      "unique_users": 1910430.73572643,
      "pages_per_visit": 3.434900126818
    },
    {
      "global_rank": 21826,
      "category_rank": 106,
      "domain": "dv.is",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3268526.11442951,
      "curr_month_visits": 3268526.11442951,
      "unique_users": 277448.054751365,
      "pages_per_visit": 4.20565851653643
    },
    {
      "global_rank": 402890,
      "category_rank": 107,
      "domain": "yupitsvegan.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 117876.590218042,
      "curr_month_visits": 117876.590218042,
      "unique_users": 71430.4841457002,
      "pages_per_visit": 1.74177999553753
    },
    {
      "global_rank": 26962,
      "category_rank": 107,
      "domain": "shop.wegmans.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1761795.08307786,
      "curr_month_visits": 1761795.08307786,
      "unique_users": 902587.41482213,
      "pages_per_visit": 4.28928090697765
    },
    {
      "global_rank": 22161,
      "category_rank": 107,
      "domain": "food.detik.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 4543409.46878327,
      "curr_month_visits": 4543409.46878327,
      "unique_users": 1822817.87482117,
      "pages_per_visit": 1.18880567947664
    },
    {
      "global_rank": 101017,
      "category_rank": 107,
      "domain": "kusmitea.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 313444.544921039,
      "curr_month_visits": 313444.544921039,
      "unique_users": 177199.367465145,
      "pages_per_visit": 3.73412996327081
    },
    {
      "global_rank": 16813,
      "category_rank": 107,
      "domain": "chowhound.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4376018.02690807,
      "curr_month_visits": 4376018.02690807,
      "unique_users": 2996131.91838725,
      "pages_per_visit": 1.41027473204458
    },
    {
      "global_rank": 14701,
      "category_rank": 107,
      "domain": "vorwerk.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3786591.66131237,
      "curr_month_visits": 3786591.66131237,
      "unique_users": 2266412.52397232,
      "pages_per_visit": 2.92953969288775
    },
    {
      "global_rank": 22477,
      "category_rank": 108,
      "domain": "kitchn.no",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1668162.06896374,
      "curr_month_visits": 1668162.06896374,
      "unique_users": 821601.494530629,
      "pages_per_visit": 4.10659928590721
    },
    {
      "global_rank": 101091,
      "category_rank": 108,
      "domain": "visitingmedia.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 479864.668156068,
      "curr_month_visits": 479864.668156068,
      "unique_users": 329959.416014522,
      "pages_per_visit": 4.01352548544089
    },
    {
      "global_rank": 403542,
      "category_rank": 108,
      "domain": "fitdegree.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 107477.294990983,
      "curr_month_visits": 107477.294990983,
      "unique_users": 31786.3423411366,
      "pages_per_visit": 4.5224828914192
    },
    {
      "global_rank": 14792,
      "category_rank": 108,
      "domain": "przyslijprzepis.pl",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 6635102.36393489,
      "curr_month_visits": 6635102.36393489,
      "unique_users": 3631643.63504967,
      "pages_per_visit": 1.56508036059755
    },
    {
      "global_rank": 27083,
      "category_rank": 108,
      "domain": "sklavenitis.gr",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1704944.26096174,
      "curr_month_visits": 1704944.26096174,
      "unique_users": 818851.299663724,
      "pages_per_visit": 5.64021255963323
    },
    {
      "global_rank": 16906,
      "category_rank": 108,
      "domain": "longhornsteakhouse.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2367238.73080383,
      "curr_month_visits": 2367238.73080383,
      "unique_users": 1605516.11199053,
      "pages_per_visit": 7.41600488804191
    },
    {
      "global_rank": 14860,
      "category_rank": 109,
      "domain": "lacucinaitaliana.it",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5580144.38869703,
      "curr_month_visits": 5580144.38869703,
      "unique_users": 3712281.43919922,
      "pages_per_visit": 1.66962378091244
    },
    {
      "global_rank": 17420,
      "category_rank": 109,
      "domain": "pyszne.pl",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2950851.08485898,
      "curr_month_visits": 2950851.08485898,
      "unique_users": 1411344.52758384,
      "pages_per_visit": 5.54468751827095
    },
    {
      "global_rank": 22499,
      "category_rank": 109,
      "domain": "icagruppen.se",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2721664.80845078,
      "curr_month_visits": 2721664.80845078,
      "unique_users": 1147582.23490744,
      "pages_per_visit": 3.22756829175299
    },
    {
      "global_rank": 27154,
      "category_rank": 109,
      "domain": "news.ohmymag.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3541549.58992262,
      "curr_month_visits": 3541549.58992262,
      "unique_users": 1779110.8470822,
      "pages_per_visit": 1.52259242718379
    },
    {
      "global_rank": 403929,
      "category_rank": 109,
      "domain": "innerdimensiontv.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 97163.3431857582,
      "curr_month_visits": 97163.3431857582,
      "unique_users": 34352.9931911848,
      "pages_per_visit": 2.18080773517446
    },
    {
      "global_rank": 101465,
      "category_rank": 109,
      "domain": "virginwines.co.uk",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 351075.578983556,
      "curr_month_visits": 351075.578983556,
      "unique_users": 206674.715548874,
      "pages_per_visit": 4.49286373649983
    },
    {
      "global_rank": 27368,
      "category_rank": 110,
      "domain": "shop.pal-system.co.jp",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1623077.60690762,
      "curr_month_visits": 1623077.60690762,
      "unique_users": 428111.089592399,
      "pages_per_visit": 6.72045139366256
    },
    {
      "global_rank": 15127,
      "category_rank": 110,
      "domain": "receiteria.com.br",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5789251.15124603,
      "curr_month_visits": 5789251.15124603,
      "unique_users": 4022070.97242294,
      "pages_per_visit": 1.72109935125848
    },
    {
      "global_rank": 410735,
      "category_rank": 110,
      "domain": "wearesovegan.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 121768.282759966,
      "curr_month_visits": 121768.282759966,
      "unique_users": 54936.7285554771,
      "pages_per_visit": 2.61253426974326
    },
    {
      "global_rank": 22526,
      "category_rank": 110,
      "domain": "aeonmall.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2542140.11118605,
      "curr_month_visits": 2542140.11118605,
      "unique_users": 1681060.86523409,
      "pages_per_visit": 2.31467421555557
    },
    {
      "global_rank": 102650,
      "category_rank": 110,
      "domain": "citywinery.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 548262.953483648,
      "curr_month_visits": 548262.953483648,
      "unique_users": 329596.398690404,
      "pages_per_visit": 3.14575297375358
    },
    {
      "global_rank": 17568,
      "category_rank": 110,
      "domain": "dominos.ca",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2592578.50532535,
      "curr_month_visits": 2592578.50532535,
      "unique_users": 1319445.39959504,
      "pages_per_visit": 6.28163178202275
    },
    {
      "global_rank": 103020,
      "category_rank": 111,
      "domain": "asahiinryo.co.jp",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 688447.278394635,
      "curr_month_visits": 688447.278394635,
      "unique_users": 491008.586990074,
      "pages_per_visit": 2.02228934322696
    },
    {
      "global_rank": 15226,
      "category_rank": 111,
      "domain": "insanelygoodrecipes.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3305074.98551241,
      "curr_month_visits": 3305074.98551241,
      "unique_users": 1913017.40244935,
      "pages_per_visit": 3.91019498456283
    },
    {
      "global_rank": 417427,
      "category_rank": 111,
      "domain": "cultured.guru",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 117547.431263296,
      "curr_month_visits": 117547.431263296,
      "unique_users": 58888.9186464066,
      "pages_per_visit": 1.89554715680928
    },
    {
      "global_rank": 22537,
      "category_rank": 111,
      "domain": "kddi-l.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 4449905.94791716,
      "curr_month_visits": 4449905.94791716,
      "unique_users": 2528839.98167551,
      "pages_per_visit": 1.24776881973009
    },
    {
      "global_rank": 17605,
      "category_rank": 111,
      "domain": "tg-assist.net",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 1941605.44741668,
      "curr_month_visits": 1941605.44741668,
      "unique_users": 892858.225749713,
      "pages_per_visit": 12.3099216648469
    },
    {
      "global_rank": 27461,
      "category_rank": 111,
      "domain": "paodeacucar.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2271164.85484681,
      "curr_month_visits": 2271164.85484681,
      "unique_users": 1515418.04623425,
      "pages_per_visit": 2.4984831214069
    },
    {
      "global_rank": 27475,
      "category_rank": 112,
      "domain": "yamibuy.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1535570.30377796,
      "curr_month_visits": 1535570.30377796,
      "unique_users": 744696.665381915,
      "pages_per_visit": 6.52474255378889
    },
    {
      "global_rank": 417648,
      "category_rank": 112,
      "domain": "beextravegant.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 76496.1754814417,
      "curr_month_visits": 76496.1754814417,
      "unique_users": 34407.3105534704,
      "pages_per_visit": 2.6195974832897
    },
    {
      "global_rank": 104203,
      "category_rank": 112,
      "domain": "commerce7.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 524483.370479215,
      "curr_month_visits": 524483.370479215,
      "unique_users": 49599.5251091702,
      "pages_per_visit": 5.88453836457743
    },
    {
      "global_rank": 17668,
      "category_rank": 112,
      "domain": "ihop.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2709108.04001992,
      "curr_month_visits": 2709108.04001992,
      "unique_users": 1854087.9556845,
      "pages_per_visit": 5.26802044734241
    },
    {
      "global_rank": 23387,
      "category_rank": 112,
      "domain": "mccormick.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2645895.39139051,
      "curr_month_visits": 2645895.39139051,
      "unique_users": 1936966.05958934,
      "pages_per_visit": 1.71264663758315
    },
    {
      "global_rank": 15258,
      "category_rank": 112,
      "domain": "leckerschmecker.me",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4226713.70164989,
      "curr_month_visits": 4226713.70164989,
      "unique_users": 2081578.79628797,
      "pages_per_visit": 1.87479627613752
    },
    {
      "global_rank": 24001,
      "category_rank": 113,
      "domain": "teller.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1561725.83603514,
      "curr_month_visits": 1561725.83603514,
      "unique_users": 576333.433765493,
      "pages_per_visit": 15.6721595489699
    },
    {
      "global_rank": 17839,
      "category_rank": 113,
      "domain": "foodbooking.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3135819.96673818,
      "curr_month_visits": 3135819.96673818,
      "unique_users": 1861312.1642401,
      "pages_per_visit": 4.11593675703333
    },
    {
      "global_rank": 27551,
      "category_rank": 113,
      "domain": "lidl.at",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1598146.51130601,
      "curr_month_visits": 1598146.51130601,
      "unique_users": 705971.158410249,
      "pages_per_visit": 5.65621220923895
    },
    {
      "global_rank": 419387,
      "category_rank": 113,
      "domain": "ioscelgoveg.it",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 95728.2418895817,
      "curr_month_visits": 95728.2418895817,
      "unique_users": 63619.8335309611,
      "pages_per_visit": 1.68434681363393
    },
    {
      "global_rank": 104990,
      "category_rank": 113,
      "domain": "titosvodka.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 348017.130604574,
      "curr_month_visits": 348017.130604574,
      "unique_users": 235151.089458417,
      "pages_per_visit": 2.46418076639976
    },
    {
      "global_rank": 15441,
      "category_rank": 113,
      "domain": "mealtrain.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4775172.28721368,
      "curr_month_visits": 4775172.28721368,
      "unique_users": 1894527.80070558,
      "pages_per_visit": 3.00863703655531
    },
    {
      "global_rank": 15802,
      "category_rank": 114,
      "domain": "thewoksoflife.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5431838.29359439,
      "curr_month_visits": 5431838.29359439,
      "unique_users": 2892357.00359653,
      "pages_per_visit": 2.09261997112577
    },
    {
      "global_rank": 27670,
      "category_rank": 114,
      "domain": "qualifioapp.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1763409.67462392,
      "curr_month_visits": 1763409.67462392,
      "unique_users": 812049.827799684,
      "pages_per_visit": 2.64409368858766
    },
    {
      "global_rank": 24237,
      "category_rank": 114,
      "domain": "valio.fi",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3028081.54535205,
      "curr_month_visits": 3028081.54535205,
      "unique_users": 1270611.84085458,
      "pages_per_visit": 2.43611882015226
    },
    {
      "global_rank": 108448,
      "category_rank": 114,
      "domain": "wineberserkers.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 327556.047285843,
      "curr_month_visits": 327556.047285843,
      "unique_users": 116609.694179279,
      "pages_per_visit": 8.01317975074021
    },
    {
      "global_rank": 18092,
      "category_rank": 114,
      "domain": "mcdvoice.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 1612899.57759253,
      "curr_month_visits": 1612899.57759253,
      "unique_users": 794374.753854989,
      "pages_per_visit": 14.8910720348303
    },
    {
      "global_rank": 421189,
      "category_rank": 114,
      "domain": "tastythriftytimely.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 88761.5023837363,
      "curr_month_visits": 88761.5023837363,
      "unique_users": 50430.1089931798,
      "pages_per_visit": 1.54308581232739
    },
    {
      "global_rank": 24539,
      "category_rank": 115,
      "domain": "7-eleven.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2552868.30481076,
      "curr_month_visits": 2552868.30481076,
      "unique_users": 1662864.89995564,
      "pages_per_visit": 3.39133182149154
    },
    {
      "global_rank": 15806,
      "category_rank": 115,
      "domain": "deccoria.pl",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5758582.08551252,
      "curr_month_visits": 5758582.08551252,
      "unique_users": 3161751.11057214,
      "pages_per_visit": 1.47024069825547
    },
    {
      "global_rank": 109470,
      "category_rank": 115,
      "domain": "wavebrowserpro.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 518742.950897749,
      "curr_month_visits": 518742.950897749,
      "unique_users": 454921.799499073,
      "pages_per_visit": 2.09273491835816
    },
    {
      "global_rank": 18139,
      "category_rank": 115,
      "domain": "marcos.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3336525.17862005,
      "curr_month_visits": 3336525.17862005,
      "unique_users": 1756879.54081131,
      "pages_per_visit": 4.30336502935375
    },
    {
      "global_rank": 424236,
      "category_rank": 115,
      "domain": "minibatchbaker.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 46343.3596382626,
      "curr_month_visits": 46343.3596382626,
      "unique_users": 26598.3255374676,
      "pages_per_visit": 3.41946727164332
    },
    {
      "global_rank": 27976,
      "category_rank": 115,
      "domain": "lufa.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1051081.76384896,
      "curr_month_visits": 1051081.76384896,
      "unique_users": 218593.578777939,
      "pages_per_visit": 14.2186122284102
    },
    {
      "global_rank": 427804,
      "category_rank": 116,
      "domain": "vegomagasinet.se",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 96388.3817192608,
      "curr_month_visits": 96388.3817192608,
      "unique_users": 47716.210348711,
      "pages_per_visit": 2.35789721295442
    },
    {
      "global_rank": 28370,
      "category_rank": 116,
      "domain": "shoprite.co.za",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1999617.18086291,
      "curr_month_visits": 1999617.18086291,
      "unique_users": 1162940.38805383,
      "pages_per_visit": 4.13866331550294
    },
    {
      "global_rank": 24582,
      "category_rank": 116,
      "domain": "bonviveur.es",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3658298.68608705,
      "curr_month_visits": 3658298.68608705,
      "unique_users": 2433905.48700411,
      "pages_per_visit": 1.47371699935318
    },
    {
      "global_rank": 110646,
      "category_rank": 116,
      "domain": "compasia.com.ph",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 333549.829489065,
      "curr_month_visits": 333549.829489065,
      "unique_users": 139191.647512753,
      "pages_per_visit": 7.35536611375493
    },
    {
      "global_rank": 18206,
      "category_rank": 116,
      "domain": "postmates.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2309563.52034764,
      "curr_month_visits": 2309563.52034764,
      "unique_users": 1309467.38367681,
      "pages_per_visit": 6.14077953249571
    },
    {
      "global_rank": 15816,
      "category_rank": 116,
      "domain": "ricettasprint.it",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4826351.25716702,
      "curr_month_visits": 4826351.25716702,
      "unique_users": 2013164.59844436,
      "pages_per_visit": 1.79918023670457
    },
    {
      "global_rank": 15989,
      "category_rank": 117,
      "domain": "cookingclassy.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5114510.44050286,
      "curr_month_visits": 5114510.44050286,
      "unique_users": 3266237.24215121,
      "pages_per_visit": 1.90262645093417
    },
    {
      "global_rank": 110910,
      "category_rank": 117,
      "domain": "gls-us.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 618127.323660367,
      "curr_month_visits": 618127.323660367,
      "unique_users": 234060.547206958,
      "pages_per_visit": 2.07161911738763
    },
    {
      "global_rank": 24624,
      "category_rank": 117,
      "domain": "mamahiroba.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1807708.59490154,
      "curr_month_visits": 1807708.59490154,
      "unique_users": 655733.983019287,
      "pages_per_visit": 5.23393421257829
    },
    {
      "global_rank": 28412,
      "category_rank": 117,
      "domain": "ab.gr",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1643588.03051603,
      "curr_month_visits": 1643588.03051603,
      "unique_users": 734153.625709146,
      "pages_per_visit": 5.159513145428
    },
    {
      "global_rank": 430864,
      "category_rank": 117,
      "domain": "veganessentials.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 52235.3997099721,
      "curr_month_visits": 52235.3997099721,
      "unique_users": 29173.2444815159,
      "pages_per_visit": 5.29996424188027
    },
    {
      "global_rank": 18222,
      "category_rank": 117,
      "domain": "cinemarkhoyts.com.ar",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3129739.02267414,
      "curr_month_visits": 3129739.02267414,
      "unique_users": 1380169.83508889,
      "pages_per_visit": 4.43903210302332
    },
    {
      "global_rank": 16007,
      "category_rank": 118,
      "domain": "bettybossi.ch",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4028921.61188954,
      "curr_month_visits": 4028921.61188954,
      "unique_users": 2007440.30538216,
      "pages_per_visit": 2.82990504491042
    },
    {
      "global_rank": 111089,
      "category_rank": 118,
      "domain": "ambev.com.br",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 626212.908802003,
      "curr_month_visits": 626212.908802003,
      "unique_users": 271545.404331951,
      "pages_per_visit": 3.40989643750072
    },
    {
      "global_rank": 28668,
      "category_rank": 118,
      "domain": "butcherbox.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1976331.64596593,
      "curr_month_visits": 1976331.64596593,
      "unique_users": 1067398.18195868,
      "pages_per_visit": 3.50309703898275
    },
    {
      "global_rank": 18323,
      "category_rank": 118,
      "domain": "qrcodes.pro",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 5621239.02292746,
      "curr_month_visits": 5621239.02292746,
      "unique_users": 3931903.66283548,
      "pages_per_visit": 1.48058994850826
    },
    {
      "global_rank": 433516,
      "category_rank": 118,
      "domain": "viva.org.uk",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 83150.941988365,
      "curr_month_visits": 83150.941988365,
      "unique_users": 44663.0079186619,
      "pages_per_visit": 2.10656147565284
    },
    {
      "global_rank": 111124,
      "category_rank": 119,
      "domain": "flixbrewhouse.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 451392.344086582,
      "curr_month_visits": 451392.344086582,
      "unique_users": 245912.60057307,
      "pages_per_visit": 3.66101271060907
    },
    {
      "global_rank": 16047,
      "category_rank": 119,
      "domain": "ad-contents.jp",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 2454769.22637771,
      "curr_month_visits": 2454769.22637771,
      "unique_users": 112789.967027012,
      "pages_per_visit": 17.1078345594166
    },
    {
      "global_rank": 28827,
      "category_rank": 119,
      "domain": "maxi.ca",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1854670.72485416,
      "curr_month_visits": 1854670.72485416,
      "unique_users": 835633.54017452,
      "pages_per_visit": 4.09786075857148
    },
    {
      "global_rank": 24870,
      "category_rank": 119,
      "domain": "coop.no",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2251027.02123379,
      "curr_month_visits": 2251027.02123379,
      "unique_users": 926317.649219214,
      "pages_per_visit": 3.98950448550173
    },
    {
      "global_rank": 18522,
      "category_rank": 119,
      "domain": "instacart.ca",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2609094.42130798,
      "curr_month_visits": 2609094.42130798,
      "unique_users": 1311858.45183749,
      "pages_per_visit": 5.88904465358746
    },
    {
      "global_rank": 435367,
      "category_rank": 119,
      "domain": "noyhasade.co.il",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 64556.3501547393,
      "curr_month_visits": 64556.3501547393,
      "unique_users": 42086.2941981641,
      "pages_per_visit": 3.65275935092811
    },
    {
      "global_rank": 29339,
      "category_rank": 120,
      "domain": "interspar.at",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1610955.50455371,
      "curr_month_visits": 1610955.50455371,
      "unique_users": 934610.899103379,
      "pages_per_visit": 3.93222958320437
    },
    {
      "global_rank": 18696,
      "category_rank": 120,
      "domain": "opentable.ca",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2781919.38938123,
      "curr_month_visits": 2781919.38938123,
      "unique_users": 1655468.88154799,
      "pages_per_visit": 3.58637539206246
    },
    {
      "global_rank": 439155,
      "category_rank": 120,
      "domain": "tainanfoodeat.blogspot.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 91727.2215547463,
      "curr_month_visits": 91727.2215547463,
      "unique_users": 53193.2224784089,
      "pages_per_visit": 1.35633279054287
    },
    {
      "global_rank": 24943,
      "category_rank": 120,
      "domain": "sysco.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1726147.13474676,
      "curr_month_visits": 1726147.13474676,
      "unique_users": 633154.765948924,
      "pages_per_visit": 7.23012402499512
    },
    {
      "global_rank": 111956,
      "category_rank": 120,
      "domain": "jackdaniels.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 543104.235514149,
      "curr_month_visits": 543104.235514149,
      "unique_users": 369545.337432704,
      "pages_per_visit": 2.44592430398977
    },
    {
      "global_rank": 16327,
      "category_rank": 120,
      "domain": "leukerecepten.nl",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5089116.09980922,
      "curr_month_visits": 5089116.09980922,
      "unique_users": 2568383.7526085,
      "pages_per_visit": 2.16018548372831
    },
    {
      "global_rank": 16436,
      "category_rank": 121,
      "domain": "arla.se",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4861729.41496681,
      "curr_month_visits": 4861729.41496681,
      "unique_users": 2038786.42004969,
      "pages_per_visit": 2.02795434195443
    },
    {
      "global_rank": 29370,
      "category_rank": 121,
      "domain": "kagome.co.jp",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 3053718.99113454,
      "curr_month_visits": 3053718.99113454,
      "unique_users": 2211516.67509461,
      "pages_per_visit": 1.68304350698361
    },
    {
      "global_rank": 441554,
      "category_rank": 121,
      "domain": "wowitsveggie.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 80379.4537730098,
      "curr_month_visits": 80379.4537730098,
      "unique_users": 38334.6839200995,
      "pages_per_visit": 1.53768861786647
    },
    {
      "global_rank": 24969,
      "category_rank": 121,
      "domain": "kfcclub.com.tw",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1719696.76638394,
      "curr_month_visits": 1719696.76638394,
      "unique_users": 909411.965668803,
      "pages_per_visit": 5.37982180085578
    },
    {
      "global_rank": 112250,
      "category_rank": 121,
      "domain": "bbr.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 261521.938566183,
      "curr_month_visits": 261521.938566183,
      "unique_users": 119109.178781232,
      "pages_per_visit": 8.21493840936164
    },
    {
      "global_rank": 18724,
      "category_rank": 121,
      "domain": "singleplatform.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 5058457.14207952,
      "curr_month_visits": 5058457.14207952,
      "unique_users": 4264755.32749959,
      "pages_per_visit": 1.55253797376035
    },
    {
      "global_rank": 29450,
      "category_rank": 122,
      "domain": "nofrills.ca",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2016737.24754204,
      "curr_month_visits": 2016737.24754204,
      "unique_users": 941923.489731522,
      "pages_per_visit": 2.94589758548612
    },
    {
      "global_rank": 18919,
      "category_rank": 122,
      "domain": "raisingcanes.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3270480.63457712,
      "curr_month_visits": 3270480.63457712,
      "unique_users": 2459359.73696895,
      "pages_per_visit": 3.38038958196999
    },
    {
      "global_rank": 442687,
      "category_rank": 122,
      "domain": "veganheaven.org",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 104735.274217826,
      "curr_month_visits": 104735.274217826,
      "unique_users": 58050.5447546271,
      "pages_per_visit": 1.93686875638286
    },
    {
      "global_rank": 112526,
      "category_rank": 122,
      "domain": "e360.mobi",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 292175.061325148,
      "curr_month_visits": 292175.061325148,
      "unique_users": 73041.6001448848,
      "pages_per_visit": 8.20474975841817
    },
    {
      "global_rank": 16461,
      "category_rank": 122,
      "domain": "panelinha.com.br",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5886216.0806338,
      "curr_month_visits": 5886216.0806338,
      "unique_users": 3914258.4079859,
      "pages_per_visit": 1.51271964024361
    },
    {
      "global_rank": 24978,
      "category_rank": 122,
      "domain": "supleks.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1953326.92709281,
      "curr_month_visits": 1953326.92709281,
      "unique_users": 726671.213238237,
      "pages_per_visit": 7.3126132084802
    },
    {
      "global_rank": 16465,
      "category_rank": 123,
      "domain": "thecozycook.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4580914.46177289,
      "curr_month_visits": 4580914.46177289,
      "unique_users": 3077923.31119085,
      "pages_per_visit": 2.00860662081397
    },
    {
      "global_rank": 112731,
      "category_rank": 123,
      "domain": "flow.page",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 531329.816076926,
      "curr_month_visits": 531329.816076926,
      "unique_users": 328328.036674789,
      "pages_per_visit": 1.51903487066121
    },
    {
      "global_rank": 25243,
      "category_rank": 123,
      "domain": "mypl.net",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3045848.07303108,
      "curr_month_visits": 3045848.07303108,
      "unique_users": 2195287.04421802,
      "pages_per_visit": 2.07248600978824
    },
    {
      "global_rank": 29498,
      "category_rank": 123,
      "domain": "ninjakitchen.de",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1414807.02932048,
      "curr_month_visits": 1414807.02932048,
      "unique_users": 842532.679290715,
      "pages_per_visit": 3.40348513771046
    },
    {
      "global_rank": 444511,
      "category_rank": 123,
      "domain": "mildreds.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 97031.0795818515,
      "curr_month_visits": 97031.0795818515,
      "unique_users": 51775.510182463,
      "pages_per_visit": 3.29830078322538
    },
    {
      "global_rank": 19320,
      "category_rank": 123,
      "domain": "mcdonalds.com.au",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3161600.51299106,
      "curr_month_visits": 3161600.51299106,
      "unique_users": 1075759.94658342,
      "pages_per_visit": 3.52468524385595
    },
    {
      "global_rank": 445374,
      "category_rank": 124,
      "domain": "thatveganbabe.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 115776.015760064,
      "curr_month_visits": 115776.015760064,
      "unique_users": 42948.8150576871,
      "pages_per_visit": 2.97644765032693
    },
    {
      "global_rank": 25251,
      "category_rank": 124,
      "domain": "gyomusuper.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2374448.81754041,
      "curr_month_visits": 2374448.81754041,
      "unique_users": 1537705.24805686,
      "pages_per_visit": 3.43082994131406
    },
    {
      "global_rank": 19322,
      "category_rank": 124,
      "domain": "ezcater.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3292962.09295257,
      "curr_month_visits": 3292962.09295257,
      "unique_users": 1646172.5679185,
      "pages_per_visit": 3.51570243964518
    },
    {
      "global_rank": 16515,
      "category_rank": 124,
      "domain": "therecipecritic.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5243367.33222463,
      "curr_month_visits": 5243367.33222463,
      "unique_users": 3315117.29821771,
      "pages_per_visit": 1.80193218343758
    },
    {
      "global_rank": 29764,
      "category_rank": 124,
      "domain": "countdown.co.nz",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1582479.01153988,
      "curr_month_visits": 1582479.01153988,
      "unique_users": 603387.10707482,
      "pages_per_visit": 5.37833701801792
    },
    {
      "global_rank": 113208,
      "category_rank": 124,
      "domain": "atlascoffeeclub.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 391003.997742875,
      "curr_month_visits": 391003.997742875,
      "unique_users": 251583.091153779,
      "pages_per_visit": 3.04573680742974
    },
    {
      "global_rank": 30001,
      "category_rank": 125,
      "domain": "fasteasy.io",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 4476165.2322831,
      "curr_month_visits": 4476165.2322831,
      "unique_users": 3226522.98508264,
      "pages_per_visit": 1.71989218852887
    },
    {
      "global_rank": 448217,
      "category_rank": 125,
      "domain": "plantifullybasedblog.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 109251.307878982,
      "curr_month_visits": 109251.307878982,
      "unique_users": 55349.1485492337,
      "pages_per_visit": 1.65544195558723
    },
    {
      "global_rank": 25252,
      "category_rank": 125,
      "domain": "saveonfoods.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1640713.393456,
      "curr_month_visits": 1640713.393456,
      "unique_users": 763973.111623122,
      "pages_per_visit": 7.34165172859448
    },
    {
      "global_rank": 16519,
      "category_rank": 125,
      "domain": "einfachkochen.de",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4969296.91714168,
      "curr_month_visits": 4969296.91714168,
      "unique_users": 2556651.71960944,
      "pages_per_visit": 1.63836679990607
    },
    {
      "global_rank": 19701,
      "category_rank": 125,
      "domain": "deliveryhero.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4308187.6532738,
      "curr_month_visits": 4308187.6532738,
      "unique_users": 1882561.31261167,
      "pages_per_visit": 2.27550826467349
    },
    {
      "global_rank": 114598,
      "category_rank": 125,
      "domain": "decanter.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 514450.443560417,
      "curr_month_visits": 514450.443560417,
      "unique_users": 301141.373767737,
      "pages_per_visit": 1.89042431316487
    },
    {
      "global_rank": 30011,
      "category_rank": 126,
      "domain": "kitchenwarehouse.com.au",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1414638.25461497,
      "curr_month_visits": 1414638.25461497,
      "unique_users": 724359.773039347,
      "pages_per_visit": 3.48752122722843
    },
    {
      "global_rank": 25332,
      "category_rank": 126,
      "domain": "airrsv.net",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2534223.11519635,
      "curr_month_visits": 2534223.11519635,
      "unique_users": 1102044.40184404,
      "pages_per_visit": 3.22403181861316
    },
    {
      "global_rank": 19777,
      "category_rank": 126,
      "domain": "mcd.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3431396.03999497,
      "curr_month_visits": 3431396.03999497,
      "unique_users": 592547.671045404,
      "pages_per_visit": 4.39664566011462
    },
    {
      "global_rank": 16720,
      "category_rank": 126,
      "domain": "receitasnestle.com.br",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 6200806.84413731,
      "curr_month_visits": 6200806.84413731,
      "unique_users": 4613071.93844555,
      "pages_per_visit": 1.31521190736909
    },
    {
      "global_rank": 451720,
      "category_rank": 126,
      "domain": "vege.one",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 124125.610342011,
      "curr_month_visits": 124125.610342011,
      "unique_users": 73584.644902047,
      "pages_per_visit": 2.06737860672314
    },
    {
      "global_rank": 115174,
      "category_rank": 126,
      "domain": "duvel.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 379791.618368995,
      "curr_month_visits": 379791.618368995,
      "unique_users": 71344.3509814032,
      "pages_per_visit": 7.50533431101884
    },
    {
      "global_rank": 16724,
      "category_rank": 127,
      "domain": "purewow.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4719630.17543952,
      "curr_month_visits": 4719630.17543952,
      "unique_users": 3294372.92169475,
      "pages_per_visit": 1.54172146832265
    },
    {
      "global_rank": 115182,
      "category_rank": 127,
      "domain": "instabuy.com.br",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 373186.961083376,
      "curr_month_visits": 373186.961083376,
      "unique_users": 181373.052324361,
      "pages_per_visit": 5.51475543701702
    },
    {
      "global_rank": 20021,
      "category_rank": 127,
      "domain": "theinfatuation.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 4231932.39991222,
      "curr_month_visits": 4231932.39991222,
      "unique_users": 2806674.31332377,
      "pages_per_visit": 1.82822339895856
    },
    {
      "global_rank": 25410,
      "category_rank": 127,
      "domain": "glico.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3018958.58269519,
      "curr_month_visits": 3018958.58269519,
      "unique_users": 2186190.75669166,
      "pages_per_visit": 2.36237631820835
    },
    {
      "global_rank": 451866,
      "category_rank": 127,
      "domain": "lovecomplement.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 81103.5202648378,
      "curr_month_visits": 81103.5202648378,
      "unique_users": 45558.3725129167,
      "pages_per_visit": 1.95178808358307
    },
    {
      "global_rank": 30294,
      "category_rank": 127,
      "domain": "meiji.co.jp",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2846176.8465241,
      "curr_month_visits": 2846176.8465241,
      "unique_users": 2032754.89350194,
      "pages_per_visit": 1.83698262610051
    },
    {
      "global_rank": 20134,
      "category_rank": 128,
      "domain": "magicpin.in",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3391962.58101676,
      "curr_month_visits": 3391962.58101676,
      "unique_users": 2215254.4347837,
      "pages_per_visit": 2.49864747054972
    },
    {
      "global_rank": 25462,
      "category_rank": 128,
      "domain": "arclandservice.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2808386.16088352,
      "curr_month_visits": 2808386.16088352,
      "unique_users": 1748541.31260875,
      "pages_per_visit": 2.50679122194294
    },
    {
      "global_rank": 30983,
      "category_rank": 128,
      "domain": "carawayhome.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1115947.91185117,
      "curr_month_visits": 1115947.91185117,
      "unique_users": 696950.583422625,
      "pages_per_visit": 3.25433176860465
    },
    {
      "global_rank": 115750,
      "category_rank": 128,
      "domain": "krombacher.de",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 422419.679698257,
      "curr_month_visits": 422419.679698257,
      "unique_users": 256463.809857062,
      "pages_per_visit": 3.52254915895925
    },
    {
      "global_rank": 16814,
      "category_rank": 128,
      "domain": "momontimeout.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3465100.12408166,
      "curr_month_visits": 3465100.12408166,
      "unique_users": 2114954.17296031,
      "pages_per_visit": 2.00194454777643
    },
    {
      "global_rank": 454689,
      "category_rank": 128,
      "domain": "emilieeats.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 103596.86938562,
      "curr_month_visits": 103596.86938562,
      "unique_users": 59449.6202590375,
      "pages_per_visit": 1.68074001757722
    },
    {
      "global_rank": 25481,
      "category_rank": 129,
      "domain": "social-camp.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2173987.20307615,
      "curr_month_visits": 2173987.20307615,
      "unique_users": 275496.958868235,
      "pages_per_visit": 8.3178158636747
    },
    {
      "global_rank": 16828,
      "category_rank": 129,
      "domain": "thechunkychef.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3557219.10039843,
      "curr_month_visits": 3557219.10039843,
      "unique_users": 2260721.67970549,
      "pages_per_visit": 2.0047959557582
    },
    {
      "global_rank": 20245,
      "category_rank": 129,
      "domain": "dairyqueen.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3302511.17375707,
      "curr_month_visits": 3302511.17375707,
      "unique_users": 2486136.84267178,
      "pages_per_visit": 4.40271792224413
    },
    {
      "global_rank": 116542,
      "category_rank": 129,
      "domain": "resos.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 378915.144916305,
      "curr_month_visits": 378915.144916305,
      "unique_users": 193708.727955414,
      "pages_per_visit": 3.75240740755888
    },
    {
      "global_rank": 454789,
      "category_rank": 129,
      "domain": "tyberrymuch.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 102096.452097994,
      "curr_month_visits": 102096.452097994,
      "unique_users": 56324.5528629485,
      "pages_per_visit": 1.93272705795883
    },
    {
      "global_rank": 31080,
      "category_rank": 129,
      "domain": "atacadao.com.br",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1949145.34702452,
      "curr_month_visits": 1949145.34702452,
      "unique_users": 1258382.30777422,
      "pages_per_visit": 3.04403595747645
    },
    {
      "global_rank": 117427,
      "category_rank": 130,
      "domain": "keytowyn.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 299650.468953372,
      "curr_month_visits": 299650.468953372,
      "unique_users": 95093.1966339095,
      "pages_per_visit": 5.08211553036889
    },
    {
      "global_rank": 25484,
      "category_rank": 130,
      "domain": "trial-net.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2937087.09823944,
      "curr_month_visits": 2937087.09823944,
      "unique_users": 1668456.22087415,
      "pages_per_visit": 2.2407243203015
    },
    {
      "global_rank": 20354,
      "category_rank": 130,
      "domain": "chronoat.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 849386.081682689,
      "curr_month_visits": 849386.081682689,
      "unique_users": 374362.665636923,
      "pages_per_visit": 5.6137160072297
    },
    {
      "global_rank": 455610,
      "category_rank": 130,
      "domain": "marikebol.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 94618.819727713,
      "curr_month_visits": 94618.819727713,
      "unique_users": 47028.5464761807,
      "pages_per_visit": 2.56867511007421
    },
    {
      "global_rank": 16841,
      "category_rank": 130,
      "domain": "mi-journey.jp",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5669553.15762786,
      "curr_month_visits": 5669553.15762786,
      "unique_users": 3735124.57560847,
      "pages_per_visit": 1.43926090678722
    },
    {
      "global_rank": 31221,
      "category_rank": 130,
      "domain": "collectandgo.be",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1162786.85582869,
      "curr_month_visits": 1162786.85582869,
      "unique_users": 529192.965942383,
      "pages_per_visit": 9.18551803649099
    },
    {
      "global_rank": 455685,
      "category_rank": 131,
      "domain": "vegaanihaaste.fi",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 80324.6570181791,
      "curr_month_visits": 80324.6570181791,
      "unique_users": 37261.2930402786,
      "pages_per_visit": 2.08102283006436
    },
    {
      "global_rank": 118020,
      "category_rank": 131,
      "domain": "drinktrade.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 415586.302741165,
      "curr_month_visits": 415586.302741165,
      "unique_users": 193501.045668949,
      "pages_per_visit": 3.87184760731358
    },
    {
      "global_rank": 31361,
      "category_rank": 131,
      "domain": "kasanova.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1340467.65939608,
      "curr_month_visits": 1340467.65939608,
      "unique_users": 831552.069683387,
      "pages_per_visit": 3.56119514823857
    },
    {
      "global_rank": 16899,
      "category_rank": 131,
      "domain": "essen-und-trinken.de",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4166363.02843203,
      "curr_month_visits": 4166363.02843203,
      "unique_users": 2563254.86554266,
      "pages_per_visit": 2.08725129115214
    },
    {
      "global_rank": 20383,
      "category_rank": 131,
      "domain": "outback.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2376948.63451305,
      "curr_month_visits": 2376948.63451305,
      "unique_users": 1677323.08020922,
      "pages_per_visit": 5.13567251535147
    },
    {
      "global_rank": 25490,
      "category_rank": 131,
      "domain": "rankingoo.net",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2607475.31656904,
      "curr_month_visits": 2607475.31656904,
      "unique_users": 1389057.89200561,
      "pages_per_visit": 2.51958428564568
    },
    {
      "global_rank": 32062,
      "category_rank": 132,
      "domain": "swisscolony.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 633604.252957669,
      "curr_month_visits": 633604.252957669,
      "unique_users": 324133.151962655,
      "pages_per_visit": 7.47313003390329
    },
    {
      "global_rank": 456694,
      "category_rank": 132,
      "domain": "thevietvegan.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 105278.816470351,
      "curr_month_visits": 105278.816470351,
      "unique_users": 49809.3816146259,
      "pages_per_visit": 1.79322652297202
    },
    {
      "global_rank": 16931,
      "category_rank": 132,
      "domain": "bettycrocker.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4285958.24952014,
      "curr_month_visits": 4285958.24952014,
      "unique_users": 2588337.55683719,
      "pages_per_visit": 2.04858558194369
    },
    {
      "global_rank": 25579,
      "category_rank": 132,
      "domain": "tomiz.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2706065.09607004,
      "curr_month_visits": 2706065.09607004,
      "unique_users": 1349367.36981188,
      "pages_per_visit": 2.52452818429625
    },
    {
      "global_rank": 119672,
      "category_rank": 132,
      "domain": "alaninu.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 284710.605845451,
      "curr_month_visits": 284710.605845451,
      "unique_users": 155911.23111573,
      "pages_per_visit": 3.84478236584444
    },
    {
      "global_rank": 20561,
      "category_rank": 132,
      "domain": "nothingbundtcakes.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2688765.14594871,
      "curr_month_visits": 2688765.14594871,
      "unique_users": 1859214.78867076,
      "pages_per_visit": 4.13601339358847
    },
    {
      "global_rank": 32102,
      "category_rank": 133,
      "domain": "carrefour.it",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1516258.73056397,
      "curr_month_visits": 1516258.73056397,
      "unique_users": 910072.137039469,
      "pages_per_visit": 4.17054738786492
    },
    {
      "global_rank": 20836,
      "category_rank": 133,
      "domain": "thefork.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2880119.12081524,
      "curr_month_visits": 2880119.12081524,
      "unique_users": 1321579.78492048,
      "pages_per_visit": 4.25875166464186
    },
    {
      "global_rank": 25840,
      "category_rank": 133,
      "domain": "halmek.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3033375.35647974,
      "curr_month_visits": 3033375.35647974,
      "unique_users": 2340407.78703249,
      "pages_per_visit": 2.00007606066031
    },
    {
      "global_rank": 119977,
      "category_rank": 133,
      "domain": "anheuserbuschinbev-my.sharepoint.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 372753.286327217,
      "curr_month_visits": 372753.286327217,
      "unique_users": 68442.2553806968,
      "pages_per_visit": 4.44253352924582
    },
    {
      "global_rank": 17132,
      "category_rank": 133,
      "domain": "lecremedelacrumb.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4337048.61632058,
      "curr_month_visits": 4337048.61632058,
      "unique_users": 2791236.38242516,
      "pages_per_visit": 1.98387442883802
    },
    {
      "global_rank": 461405,
      "category_rank": 133,
      "domain": "thecheaplazyvegan.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 104729.789204377,
      "curr_month_visits": 104729.789204377,
      "unique_users": 55793.7894607214,
      "pages_per_visit": 2.00196687304525
    },
    {
      "global_rank": 32144,
      "category_rank": 134,
      "domain": "gannettcontests.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1447795.7363057,
      "curr_month_visits": 1447795.7363057,
      "unique_users": 594368.934743089,
      "pages_per_visit": 2.53754396539922
    },
    {
      "global_rank": 465917,
      "category_rank": 134,
      "domain": "veganfreundlich.org",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 66334.5347245276,
      "curr_month_visits": 66334.5347245276,
      "unique_users": 33290.5080959775,
      "pages_per_visit": 1.68445367552385
    },
    {
      "global_rank": 120718,
      "category_rank": 134,
      "domain": "flaviar.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 326276.429815749,
      "curr_month_visits": 326276.429815749,
      "unique_users": 196034.240859634,
      "pages_per_visit": 3.09179132015975
    },
    {
      "global_rank": 17356,
      "category_rank": 134,
      "domain": "saltandlavender.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4577107.41018793,
      "curr_month_visits": 4577107.41018793,
      "unique_users": 2967220.86005483,
      "pages_per_visit": 1.88170714295451
    },
    {
      "global_rank": 20873,
      "category_rank": 134,
      "domain": "papamurphys.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2227207.23530545,
      "curr_month_visits": 2227207.23530545,
      "unique_users": 1452555.95162378,
      "pages_per_visit": 6.73068756032203
    },
    {
      "global_rank": 25900,
      "category_rank": 134,
      "domain": "family.com.tw",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2384443.43883923,
      "curr_month_visits": 2384443.43883923,
      "unique_users": 1341041.46127825,
      "pages_per_visit": 2.61943289077455
    },
    {
      "global_rank": 26018,
      "category_rank": 135,
      "domain": "eurospin.it",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2335708.95525205,
      "curr_month_visits": 2335708.95525205,
      "unique_users": 1370661.84824698,
      "pages_per_visit": 2.98490514546382
    },
    {
      "global_rank": 120952,
      "category_rank": 135,
      "domain": "teachermade.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 417040.658325597,
      "curr_month_visits": 417040.658325597,
      "unique_users": 154802.837754191,
      "pages_per_visit": 4.22289958212895
    },
    {
      "global_rank": 17379,
      "category_rank": 135,
      "domain": "noovomoi.ca",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5234443.09496301,
      "curr_month_visits": 5234443.09496301,
      "unique_users": 2395337.43781734,
      "pages_per_visit": 1.7594170565122
    },
    {
      "global_rank": 468520,
      "category_rank": 135,
      "domain": "dailyvegan.de",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 112218.389204709,
      "curr_month_visits": 112218.389204709,
      "unique_users": 76510.452435687,
      "pages_per_visit": 1.69723140419687
    },
    {
      "global_rank": 32530,
      "category_rank": 135,
      "domain": "hellofresh.de",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1889830.42318663,
      "curr_month_visits": 1889830.42318663,
      "unique_users": 1002777.07299521,
      "pages_per_visit": 4.2232189134788
    },
    {
      "global_rank": 20887,
      "category_rank": 135,
      "domain": "restaurant-partners.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 5066960.70978752,
      "curr_month_visits": 5066960.70978752,
      "unique_users": 173178.395028619,
      "pages_per_visit": 4.05889272097505
    },
    {
      "global_rank": 121461,
      "category_rank": 136,
      "domain": "waitrosecellar.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 325475.916231738,
      "curr_month_visits": 325475.916231738,
      "unique_users": 238646.334145301,
      "pages_per_visit": 2.86372605924361
    },
    {
      "global_rank": 26091,
      "category_rank": 136,
      "domain": "speisekarte.de",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2958911.99286667,
      "curr_month_visits": 2958911.99286667,
      "unique_users": 2298039.85507193,
      "pages_per_visit": 2.16336128231902
    },
    {
      "global_rank": 470120,
      "category_rank": 136,
      "domain": "veganheaven.de",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 103911.130178666,
      "curr_month_visits": 103911.130178666,
      "unique_users": 58903.155481522,
      "pages_per_visit": 1.47308699563498
    },
    {
      "global_rank": 21109,
      "category_rank": 136,
      "domain": "redlobster.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2157528.97491633,
      "curr_month_visits": 2157528.97491633,
      "unique_users": 1513544.83133076,
      "pages_per_visit": 5.6812012290569
    },
    {
      "global_rank": 17633,
      "category_rank": 136,
      "domain": "menunedeli.ru",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5057422.49621206,
      "curr_month_visits": 5057422.49621206,
      "unique_users": 3098899.69668085,
      "pages_per_visit": 1.73550857779258
    },
    {
      "global_rank": 32630,
      "category_rank": 136,
      "domain": "thefreshmarket.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1361896.6728934,
      "curr_month_visits": 1361896.6728934,
      "unique_users": 845868.346690952,
      "pages_per_visit": 3.45713165510023
    },
    {
      "global_rank": 121533,
      "category_rank": 137,
      "domain": "caskers.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 311695.827240031,
      "curr_month_visits": 311695.827240031,
      "unique_users": 216886.235255727,
      "pages_per_visit": 2.82067853386753
    },
    {
      "global_rank": 17656,
      "category_rank": 137,
      "domain": "coolinarika.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4531290.13813528,
      "curr_month_visits": 4531290.13813528,
      "unique_users": 1673749.49442247,
      "pages_per_visit": 1.91219064006558
    },
    {
      "global_rank": 21164,
      "category_rank": 137,
      "domain": "inmoment.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2647682.52540544,
      "curr_month_visits": 2647682.52540544,
      "unique_users": 1792637.76830188,
      "pages_per_visit": 4.82344118980719
    },
    {
      "global_rank": 26342,
      "category_rank": 137,
      "domain": "foodpanda.com.tw",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2138843.57941,
      "curr_month_visits": 2138843.57941,
      "unique_users": 978438.462077665,
      "pages_per_visit": 4.40949918883894
    },
    {
      "global_rank": 471303,
      "category_rank": 137,
      "domain": "heartfultable.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 99587.8008399744,
      "curr_month_visits": 99587.8008399744,
      "unique_users": 44905.5200467359,
      "pages_per_visit": 1.96195855169186
    },
    {
      "global_rank": 32982,
      "category_rank": 137,
      "domain": "madeincookware.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1367074.26841343,
      "curr_month_visits": 1367074.26841343,
      "unique_users": 889384.798622106,
      "pages_per_visit": 2.70582947614593
    },
    {
      "global_rank": 121707,
      "category_rank": 138,
      "domain": "bswliquor.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 327577.641647436,
      "curr_month_visits": 327577.641647436,
      "unique_users": 156652.273300118,
      "pages_per_visit": 4.04321645761928
    },
    {
      "global_rank": 26504,
      "category_rank": 138,
      "domain": "kewpie.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3391099.01621996,
      "curr_month_visits": 3391099.01621996,
      "unique_users": 2418871.27437313,
      "pages_per_visit": 1.74128127437455
    },
    {
      "global_rank": 33542,
      "category_rank": 138,
      "domain": "gall.nl",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1524379.82998635,
      "curr_month_visits": 1524379.82998635,
      "unique_users": 847310.253005155,
      "pages_per_visit": 3.76440209814301
    },
    {
      "global_rank": 17790,
      "category_rank": 138,
      "domain": "tasty.co",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4393450.71205741,
      "curr_month_visits": 4393450.71205741,
      "unique_users": 2759160.07545358,
      "pages_per_visit": 2.05589899476226
    },
    {
      "global_rank": 473093,
      "category_rank": 138,
      "domain": "cleanfooddirtygirl.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 58467.7807989662,
      "curr_month_visits": 58467.7807989662,
      "unique_users": 21881.6769758105,
      "pages_per_visit": 4.81209794237202
    },
    {
      "global_rank": 21423,
      "category_rank": 138,
      "domain": "orderexperience.net",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 1692056.29054753,
      "curr_month_visits": 1692056.29054753,
      "unique_users": 1110437.00280271,
      "pages_per_visit": 7.40897367357829
    },
    {
      "global_rank": 121728,
      "category_rank": 139,
      "domain": "coorslight.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 492604.193794659,
      "curr_month_visits": 492604.193794659,
      "unique_users": 215033.133698178,
      "pages_per_visit": 1.80816553557911
    },
    {
      "global_rank": 26551,
      "category_rank": 139,
      "domain": "gamberorosso.it",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3781208.79809105,
      "curr_month_visits": 3781208.79809105,
      "unique_users": 2459913.90426728,
      "pages_per_visit": 1.66787954921039
    },
    {
      "global_rank": 17987,
      "category_rank": 139,
      "domain": "akispetretzikis.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4633515.03640551,
      "curr_month_visits": 4633515.03640551,
      "unique_users": 1694522.47713051,
      "pages_per_visit": 1.6394242771608
    },
    {
      "global_rank": 476270,
      "category_rank": 139,
      "domain": "vegkit.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 75882.928497601,
      "curr_month_visits": 75882.928497601,
      "unique_users": 27226.2394511902,
      "pages_per_visit": 2.25620027174122
    },
    {
      "global_rank": 33576,
      "category_rank": 139,
      "domain": "colesgroupprofile.com.au",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1730508.89898041,
      "curr_month_visits": 1730508.89898041,
      "unique_users": 1190138.33388061,
      "pages_per_visit": 3.58412751671122
    },
    {
      "global_rank": 21589,
      "category_rank": 139,
      "domain": "jackinthebox.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2104642.67281367,
      "curr_month_visits": 2104642.67281367,
      "unique_users": 1411884.81315473,
      "pages_per_visit": 5.24149575574709
    },
    {
      "global_rank": 21636,
      "category_rank": 140,
      "domain": "menulog.com.au",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2182521.69195538,
      "curr_month_visits": 2182521.69195538,
      "unique_users": 952140.34036483,
      "pages_per_visit": 7.08623864019686
    },
    {
      "global_rank": 33659,
      "category_rank": 140,
      "domain": "programmemoi.ca",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1196776.18023893,
      "curr_month_visits": 1196776.18023893,
      "unique_users": 547210.0776846,
      "pages_per_visit": 3.58458457001656
    },
    {
      "global_rank": 26568,
      "category_rank": 140,
      "domain": "yakiniku-king.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2468911.04682743,
      "curr_month_visits": 2468911.04682743,
      "unique_users": 1597305.06236839,
      "pages_per_visit": 3.6519861135146
    },
    {
      "global_rank": 476736,
      "category_rank": 140,
      "domain": "thenightmarebeforechristmaslighttrail.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 103977.066439048,
      "curr_month_visits": 103977.066439048,
      "unique_users": 61385.5570765776,
      "pages_per_visit": 2.23911615639688
    },
    {
      "global_rank": 18634,
      "category_rank": 140,
      "domain": "swissmilk.ch",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4199265.09470509,
      "curr_month_visits": 4199265.09470509,
      "unique_users": 1944621.03461437,
      "pages_per_visit": 2.0686628022693
    },
    {
      "global_rank": 122884,
      "category_rank": 140,
      "domain": "vinomofo.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 303480.252197079,
      "curr_month_visits": 303480.252197079,
      "unique_users": 81453.7593954715,
      "pages_per_visit": 4.14240565626306
    },
    {
      "global_rank": 21646,
      "category_rank": 141,
      "domain": "dennys.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2348786.08726282,
      "curr_month_visits": 2348786.08726282,
      "unique_users": 1538969.52016575,
      "pages_per_visit": 4.05214803112584
    },
    {
      "global_rank": 123147,
      "category_rank": 141,
      "domain": "onshopfront.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 544563.738881741,
      "curr_month_visits": 544563.738881741,
      "unique_users": 15294.3575745994,
      "pages_per_visit": 7.20336825418765
    },
    {
      "global_rank": 26851,
      "category_rank": 141,
      "domain": "sho.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2936210.18196527,
      "curr_month_visits": 2936210.18196527,
      "unique_users": 2099211.72181186,
      "pages_per_visit": 1.50897947060803
    },
    {
      "global_rank": 33835,
      "category_rank": 141,
      "domain": "wakefern.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1909389.23898928,
      "curr_month_visits": 1909389.23898928,
      "unique_users": 796153.617044603,
      "pages_per_visit": 2.73735503525268
    },
    {
      "global_rank": 18745,
      "category_rank": 141,
      "domain": "jamieoliver.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3976851.80736425,
      "curr_month_visits": 3976851.80736425,
      "unique_users": 2380380.01454008,
      "pages_per_visit": 2.2039539684658
    },
    {
      "global_rank": 478575,
      "category_rank": 141,
      "domain": "saucestache.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 45250.3029951907,
      "curr_month_visits": 45250.3029951907,
      "unique_users": 23701.2120310564,
      "pages_per_visit": 3.12364518658823
    },
    {
      "global_rank": 34474,
      "category_rank": 142,
      "domain": "worldofsweets.de",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1218103.2095067,
      "curr_month_visits": 1218103.2095067,
      "unique_users": 766856.373089817,
      "pages_per_visit": 4.64048855449888
    },
    {
      "global_rank": 478665,
      "category_rank": 142,
      "domain": "plantpowercouple.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 70455.7154704511,
      "curr_month_visits": 70455.7154704511,
      "unique_users": 39943.0429047637,
      "pages_per_visit": 1.96945110373273
    },
    {
      "global_rank": 123306,
      "category_rank": 142,
      "domain": "beerforbusiness.ca",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 247487.294006183,
      "curr_month_visits": 247487.294006183,
      "unique_users": 90159.2346083848,
      "pages_per_visit": 12.1230069086911
    },
    {
      "global_rank": 27066,
      "category_rank": 142,
      "domain": "bazurecipe.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2948475.48627099,
      "curr_month_visits": 2948475.48627099,
      "unique_users": 1025587.38797663,
      "pages_per_visit": 2.05545975134107
    },
    {
      "global_rank": 18792,
      "category_rank": 142,
      "domain": "valdemarsro.dk",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3761395.43950235,
      "curr_month_visits": 3761395.43950235,
      "unique_users": 1421940.42958715,
      "pages_per_visit": 2.44979543907663
    },
    {
      "global_rank": 22037,
      "category_rank": 142,
      "domain": "ichibanya.co.jp",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2051574.40757636,
      "curr_month_visits": 2051574.40757636,
      "unique_users": 1379109.91884276,
      "pages_per_visit": 4.19427595621157
    },
    {
      "global_rank": 123828,
      "category_rank": 143,
      "domain": "buffalotracedistillery.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 300925.929127843,
      "curr_month_visits": 300925.929127843,
      "unique_users": 196047.359409649,
      "pages_per_visit": 3.18939605934946
    },
    {
      "global_rank": 34503,
      "category_rank": 143,
      "domain": "hmart.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1636835.99709719,
      "curr_month_visits": 1636835.99709719,
      "unique_users": 897798.760848919,
      "pages_per_visit": 3.64874864221497
    },
    {
      "global_rank": 478903,
      "category_rank": 143,
      "domain": "lovelydelites.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 110257.766356279,
      "curr_month_visits": 110257.766356279,
      "unique_users": 61344.2802625422,
      "pages_per_visit": 1.81046710849931
    },
    {
      "global_rank": 22218,
      "category_rank": 143,
      "domain": "odoui1.azurewebsites.net",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3263369.21238117,
      "curr_month_visits": 3263369.21238117,
      "unique_users": 1286485.5892151,
      "pages_per_visit": 2.85973682282996
    },
    {
      "global_rank": 18823,
      "category_rank": 143,
      "domain": "dinneratthezoo.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4126764.51173296,
      "curr_month_visits": 4126764.51173296,
      "unique_users": 2740065.57178599,
      "pages_per_visit": 1.81153677345414
    },
    {
      "global_rank": 27170,
      "category_rank": 143,
      "domain": "olimpica.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1961358.75724429,
      "curr_month_visits": 1961358.75724429,
      "unique_users": 1056803.11087836,
      "pages_per_visit": 3.24385806957759
    },
    {
      "global_rank": 479962,
      "category_rank": 144,
      "domain": "thegoodroll.nl",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 40324.1291480132,
      "curr_month_visits": 40324.1291480132,
      "unique_users": 24407.0776601117,
      "pages_per_visit": 4.67161078396166
    },
    {
      "global_rank": 18976,
      "category_rank": 144,
      "domain": "backenmachtgluecklich.de",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3661423.9098084,
      "curr_month_visits": 3661423.9098084,
      "unique_users": 2267424.27106158,
      "pages_per_visit": 1.67635456989401
    },
    {
      "global_rank": 27181,
      "category_rank": 144,
      "domain": "resv.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2430652.66009492,
      "curr_month_visits": 2430652.66009492,
      "unique_users": 963591.944333856,
      "pages_per_visit": 3.74148372902436
    },
    {
      "global_rank": 22257,
      "category_rank": 144,
      "domain": "mealkeyway.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3352636.01448129,
      "curr_month_visits": 3352636.01448129,
      "unique_users": 2353910.65560077,
      "pages_per_visit": 2.3220826668964
    },
    {
      "global_rank": 124732,
      "category_rank": 144,
      "domain": "bacardi.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 369332.601777591,
      "curr_month_visits": 369332.601777591,
      "unique_users": 225785.833511718,
      "pages_per_visit": 2.49221552634874
    },
    {
      "global_rank": 34710,
      "category_rank": 144,
      "domain": "moiid.ca",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1014880.15399258,
      "curr_month_visits": 1014880.15399258,
      "unique_users": 511566.793519911,
      "pages_per_visit": 3.78627972283333
    },
    {
      "global_rank": 22799,
      "category_rank": 145,
      "domain": "pizzahut.jp",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2184800.0627575,
      "curr_month_visits": 2184800.0627575,
      "unique_users": 1333542.40250147,
      "pages_per_visit": 4.02125712681931
    },
    {
      "global_rank": 482822,
      "category_rank": 145,
      "domain": "healthygirlkitchen.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 101520.177225363,
      "curr_month_visits": 101520.177225363,
      "unique_users": 54197.8873294442,
      "pages_per_visit": 1.89379629635223
    },
    {
      "global_rank": 27243,
      "category_rank": 145,
      "domain": "dish.co",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3023291.65226622,
      "curr_month_visits": 3023291.65226622,
      "unique_users": 2202189.49679818,
      "pages_per_visit": 1.76117524475136
    },
    {
      "global_rank": 19109,
      "category_rank": 145,
      "domain": "clicsante.ca",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 2462498.98439528,
      "curr_month_visits": 2462498.98439528,
      "unique_users": 1228233.79246201,
      "pages_per_visit": 5.85473505443944
    },
    {
      "global_rank": 34724,
      "category_rank": 145,
      "domain": "frndlytv.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1743164.04120142,
      "curr_month_visits": 1743164.04120142,
      "unique_users": 518010.014054548,
      "pages_per_visit": 3.85408537290103
    },
    {
      "global_rank": 124803,
      "category_rank": 145,
      "domain": "breakingbourbon.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 428946.443316429,
      "curr_month_visits": 428946.443316429,
      "unique_users": 205764.116832695,
      "pages_per_visit": 2.15433717808084
    },
    {
      "global_rank": 125870,
      "category_rank": 146,
      "domain": "whiteclaw.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 574562.871452367,
      "curr_month_visits": 574562.871452367,
      "unique_users": 331493.265977103,
      "pages_per_visit": 1.49627175106367
    },
    {
      "global_rank": 22804,
      "category_rank": 146,
      "domain": "nowbookit.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3385198.61107069,
      "curr_month_visits": 3385198.61107069,
      "unique_users": 1325943.78500948,
      "pages_per_visit": 2.41282593237523
    },
    {
      "global_rank": 483102,
      "category_rank": 146,
      "domain": "vegoutmag.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 102852.213949283,
      "curr_month_visits": 102852.213949283,
      "unique_users": 63917.2230006373,
      "pages_per_visit": 1.57449520345801
    },
    {
      "global_rank": 34770,
      "category_rank": 146,
      "domain": "breville.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1452197.90971728,
      "curr_month_visits": 1452197.90971728,
      "unique_users": 891743.221752866,
      "pages_per_visit": 2.8059546245224
    },
    {
      "global_rank": 19630,
      "category_rank": 146,
      "domain": "feelgoodfoodie.net",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4557939.33916718,
      "curr_month_visits": 4557939.33916718,
      "unique_users": 3069308.49550914,
      "pages_per_visit": 1.7992780378114
    },
    {
      "global_rank": 27278,
      "category_rank": 146,
      "domain": "asken.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2003034.67127345,
      "curr_month_visits": 2003034.67127345,
      "unique_users": 698515.167999254,
      "pages_per_visit": 4.89409239765599
    },
    {
      "global_rank": 34807,
      "category_rank": 147,
      "domain": "dia.es",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1114565.17378766,
      "curr_month_visits": 1114565.17378766,
      "unique_users": 581161.951054853,
      "pages_per_visit": 8.53112953398938
    },
    {
      "global_rank": 27464,
      "category_rank": 147,
      "domain": "reserve.ne.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2114677.20279782,
      "curr_month_visits": 2114677.20279782,
      "unique_users": 734161.29589424,
      "pages_per_visit": 4.07363227122528
    },
    {
      "global_rank": 22901,
      "category_rank": 147,
      "domain": "marugame.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3017780.75479432,
      "curr_month_visits": 3017780.75479432,
      "unique_users": 1897933.48834435,
      "pages_per_visit": 2.13120789448241
    },
    {
      "global_rank": 483429,
      "category_rank": 147,
      "domain": "sofreshnsogreen.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 70244.0804119227,
      "curr_month_visits": 70244.0804119227,
      "unique_users": 26807.9721230089,
      "pages_per_visit": 2.52546275371345
    },
    {
      "global_rank": 126486,
      "category_rank": 147,
      "domain": "vizzyhardseltzer.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 455133.381824038,
      "curr_month_visits": 455133.381824038,
      "unique_users": 132366.929113808,
      "pages_per_visit": 2.23438470644327
    },
    {
      "global_rank": 20078,
      "category_rank": 147,
      "domain": "chefsimon.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 2839795.25073725,
      "curr_month_visits": 2839795.25073725,
      "unique_users": 1889581.85273223,
      "pages_per_visit": 2.64988797032614
    },
    {
      "global_rank": 27489,
      "category_rank": 148,
      "domain": "adnxs-simple.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3263780.27563189,
      "curr_month_visits": 3263780.27563189,
      "unique_users": 1949241.99210651,
      "pages_per_visit": 1.14860716646041
    },
    {
      "global_rank": 34944,
      "category_rank": 148,
      "domain": "aldi.fr",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1337990.67275788,
      "curr_month_visits": 1337990.67275788,
      "unique_users": 685694.679808057,
      "pages_per_visit": 3.82647991955641
    },
    {
      "global_rank": 484664,
      "category_rank": 148,
      "domain": "cookiecef.co.il",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 145967.380169798,
      "curr_month_visits": 145967.380169798,
      "unique_users": 38350.7751006094,
      "pages_per_visit": 2.84031178894817
    },
    {
      "global_rank": 20274,
      "category_rank": 148,
      "domain": "argiro.gr",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3948912.84004318,
      "curr_month_visits": 3948912.84004318,
      "unique_users": 1483391.73913072,
      "pages_per_visit": 1.64779628373181
    },
    {
      "global_rank": 22925,
      "category_rank": 148,
      "domain": "jdadelivers.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3832990.29313358,
      "curr_month_visits": 3832990.29313358,
      "unique_users": 588560.236227592,
      "pages_per_visit": 2.29405691206454
    },
    {
      "global_rank": 126892,
      "category_rank": 148,
      "domain": "camra.org.uk",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 423388.139807536,
      "curr_month_visits": 423388.139807536,
      "unique_users": 240546.038809886,
      "pages_per_visit": 3.09202307664129
    },
    {
      "global_rank": 127570,
      "category_rank": 149,
      "domain": "teabox.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 258341.691151462,
      "curr_month_visits": 258341.691151462,
      "unique_users": 127181.619572285,
      "pages_per_visit": 3.69610253973144
    },
    {
      "global_rank": 23047,
      "category_rank": 149,
      "domain": "resdiary.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2594815.14663069,
      "curr_month_visits": 2594815.14663069,
      "unique_users": 944135.005645785,
      "pages_per_visit": 4.76048645555268
    },
    {
      "global_rank": 27584,
      "category_rank": 149,
      "domain": "s-kaupat.fi",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2303131.19536181,
      "curr_month_visits": 2303131.19536181,
      "unique_users": 1051539.94920155,
      "pages_per_visit": 3.40628962102141
    },
    {
      "global_rank": 20512,
      "category_rank": 149,
      "domain": "libelle-lekker.be",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3636524.6756348,
      "curr_month_visits": 3636524.6756348,
      "unique_users": 1860570.69873758,
      "pages_per_visit": 1.99013093535402
    },
    {
      "global_rank": 484749,
      "category_rank": 149,
      "domain": "amys.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 66234.2422922986,
      "curr_month_visits": 66234.2422922986,
      "unique_users": 39912.7481841901,
      "pages_per_visit": 2.86808700754325
    },
    {
      "global_rank": 7206,
      "category_rank": 149,
      "domain": "lidl.ro",
      "category": "Food_and_Drink",
      "avg_month_visits": 6706908.57344731,
      "curr_month_visits": 6706908.57344731,
      "unique_users": 2506012.15060697,
      "pages_per_visit": 5.49217937734792
    },
    {
      "global_rank": 35461,
      "category_rank": 149,
      "domain": "ediblearrangements.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1422302.52401305,
      "curr_month_visits": 1422302.52401305,
      "unique_users": 873333.552898998,
      "pages_per_visit": 5.26228513604892
    },
    {
      "global_rank": 35725,
      "category_rank": 150,
      "domain": "blissy.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1539607.34876064,
      "curr_month_visits": 1539607.34876064,
      "unique_users": 1056705.22108273,
      "pages_per_visit": 2.43437022157502
    },
    {
      "global_rank": 27663,
      "category_rank": 150,
      "domain": "31ice.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2354973.8982763,
      "curr_month_visits": 2354973.8982763,
      "unique_users": 1456419.95523535,
      "pages_per_visit": 3.14248227557753
    },
    {
      "global_rank": 7232,
      "category_rank": 150,
      "domain": "openrice.com",
      "category": "Food_and_Drink",
      "avg_month_visits": 7174210.84451434,
      "curr_month_visits": 7174210.84451434,
      "unique_users": 2958044.66181407,
      "pages_per_visit": 5.60950553110847
    },
    {
      "global_rank": 23048,
      "category_rank": 150,
      "domain": "7shifts.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2616629.31041894,
      "curr_month_visits": 2616629.31041894,
      "unique_users": 404801.747580137,
      "pages_per_visit": 5.76109558044992
    },
    {
      "global_rank": 20532,
      "category_rank": 150,
      "domain": "justonecookbook.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4029923.10571908,
      "curr_month_visits": 4029923.10571908,
      "unique_users": 2106072.88912074,
      "pages_per_visit": 2.13377268181569
    },
    {
      "global_rank": 128305,
      "category_rank": 150,
      "domain": "aeropress.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 377628.324329895,
      "curr_month_visits": 377628.324329895,
      "unique_users": 204763.357837937,
      "pages_per_visit": 2.77340999436882
    },
    {
      "global_rank": 485314,
      "category_rank": 150,
      "domain": "healthysimpleyum.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 53409.6325138324,
      "curr_month_visits": 53409.6325138324,
      "unique_users": 24971.9777918616,
      "pages_per_visit": 2.86986585965136
    },
    {
      "global_rank": 35853,
      "category_rank": 151,
      "domain": "getconsumerchoice.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2080138.74326353,
      "curr_month_visits": 2080138.74326353,
      "unique_users": 1524381.06505263,
      "pages_per_visit": 1.37207808615299
    },
    {
      "global_rank": 20616,
      "category_rank": 151,
      "domain": "tavolartegusto.it",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4127025.06701247,
      "curr_month_visits": 4127025.06701247,
      "unique_users": 2260527.33601005,
      "pages_per_visit": 1.52804503669741
    },
    {
      "global_rank": 128652,
      "category_rank": 151,
      "domain": "themacallan.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 371955.674132955,
      "curr_month_visits": 371955.674132955,
      "unique_users": 215512.283196531,
      "pages_per_visit": 2.52142561803058
    },
    {
      "global_rank": 485456,
      "category_rank": 151,
      "domain": "greenbowl2soul.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 76928.4809258838,
      "curr_month_visits": 76928.4809258838,
      "unique_users": 39660.740114823,
      "pages_per_visit": 1.58897166308774
    },
    {
      "global_rank": 23181,
      "category_rank": 151,
      "domain": "deliveroo.fr",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 1816268.07142149,
      "curr_month_visits": 1816268.07142149,
      "unique_users": 849059.081989581,
      "pages_per_visit": 7.82695374552655
    },
    {
      "global_rank": 27720,
      "category_rank": 151,
      "domain": "ourtesco.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2088386.67715164,
      "curr_month_visits": 2088386.67715164,
      "unique_users": 327622.736459431,
      "pages_per_visit": 5.56872934676174
    },
    {
      "global_rank": 20722,
      "category_rank": 152,
      "domain": "ambitiouskitchen.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4247991.74328676,
      "curr_month_visits": 4247991.74328676,
      "unique_users": 2390354.15487757,
      "pages_per_visit": 2.2781343536266
    },
    {
      "global_rank": 36653,
      "category_rank": 152,
      "domain": "pricechopper.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1229633.59380593,
      "curr_month_visits": 1229633.59380593,
      "unique_users": 479273.764220826,
      "pages_per_visit": 4.63074280160885
    },
    {
      "global_rank": 23283,
      "category_rank": 152,
      "domain": "macromatix.net",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 3184531.30835463,
      "curr_month_visits": 3184531.30835463,
      "unique_users": 184583.836974589,
      "pages_per_visit": 6.86350997575524
    },
    {
      "global_rank": 27898,
      "category_rank": 152,
      "domain": "kinder.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2928898.5904283,
      "curr_month_visits": 2928898.5904283,
      "unique_users": 1963671.90246318,
      "pages_per_visit": 1.62764971818262
    },
    {
      "global_rank": 486611,
      "category_rank": 152,
      "domain": "rebelcheese.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 46589.1194240218,
      "curr_month_visits": 46589.1194240218,
      "unique_users": 25397.0711895589,
      "pages_per_visit": 4.45928023192249
    },
    {
      "global_rank": 128718,
      "category_rank": 152,
      "domain": "perfectdailygrind.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 588547.198053879,
      "curr_month_visits": 588547.198053879,
      "unique_users": 258702.515889202,
      "pages_per_visit": 1.42172881015972
    },
    {
      "global_rank": 129627,
      "category_rank": 153,
      "domain": "thedrinksbusiness.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 493718.527708233,
      "curr_month_visits": 493718.527708233,
      "unique_users": 332206.55981016,
      "pages_per_visit": 1.38339628179952
    },
    {
      "global_rank": 23698,
      "category_rank": 153,
      "domain": "dominos.co.kr",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 1732585.81271049,
      "curr_month_visits": 1732585.81271049,
      "unique_users": 904805.251922511,
      "pages_per_visit": 8.16081315658052
    },
    {
      "global_rank": 488499,
      "category_rank": 153,
      "domain": "veganbell.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 34509.9033329973,
      "curr_month_visits": 34509.9033329973,
      "unique_users": 14584.6002128337,
      "pages_per_visit": 5.65329882943013
    },
    {
      "global_rank": 37317,
      "category_rank": 153,
      "domain": "lindt.de",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 785041.761285193,
      "curr_month_visits": 785041.761285193,
      "unique_users": 486378.46779129,
      "pages_per_visit": 4.15827082718594
    },
    {
      "global_rank": 20727,
      "category_rank": 153,
      "domain": "streetkitchen.hu",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3580260.46024366,
      "curr_month_visits": 3580260.46024366,
      "unique_users": 1302471.14973392,
      "pages_per_visit": 2.09602658462252
    },
    {
      "global_rank": 28340,
      "category_rank": 153,
      "domain": "huel.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2068210.95019947,
      "curr_month_visits": 2068210.95019947,
      "unique_users": 1207063.57009936,
      "pages_per_visit": 4.56726182134454
    },
    {
      "global_rank": 20765,
      "category_rank": 154,
      "domain": "receitatodahora.com.br",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3937309.01441772,
      "curr_month_visits": 3937309.01441772,
      "unique_users": 2030194.01471473,
      "pages_per_visit": 1.69046507293958
    },
    {
      "global_rank": 28393,
      "category_rank": 154,
      "domain": "colesgroup.sharepoint.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2250847.82036604,
      "curr_month_visits": 2250847.82036604,
      "unique_users": 339989.722929546,
      "pages_per_visit": 4.01016420371973
    },
    {
      "global_rank": 130449,
      "category_rank": 154,
      "domain": "liquorland.co.nz",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 307984.686864112,
      "curr_month_visits": 307984.686864112,
      "unique_users": 201691.950265912,
      "pages_per_visit": 3.22378113234088
    },
    {
      "global_rank": 490708,
      "category_rank": 154,
      "domain": "peasmaker.nl",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 91050.6516510241,
      "curr_month_visits": 91050.6516510241,
      "unique_users": 29149.8391345201,
      "pages_per_visit": 2.38458842662864
    },
    {
      "global_rank": 37640,
      "category_rank": 154,
      "domain": "chirpbooks.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1331082.60680343,
      "curr_month_visits": 1331082.60680343,
      "unique_users": 538225.352057051,
      "pages_per_visit": 4.2322927785208
    },
    {
      "global_rank": 23762,
      "category_rank": 154,
      "domain": "ele.me",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2436517.71764731,
      "curr_month_visits": 2436517.71764731,
      "unique_users": 923370.109189384,
      "pages_per_visit": 4.27516007287991
    },
    {
      "global_rank": 24063,
      "category_rank": 155,
      "domain": "voxcinemas.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2057264.86406795,
      "curr_month_visits": 2057264.86406795,
      "unique_users": 1012881.07417513,
      "pages_per_visit": 4.44158219884773
    },
    {
      "global_rank": 131739,
      "category_rank": 155,
      "domain": "heineken.com.br",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 461198.470786,
      "curr_month_visits": 461198.470786,
      "unique_users": 259660.70494399,
      "pages_per_visit": 2.96129779112522
    },
    {
      "global_rank": 28504,
      "category_rank": 155,
      "domain": "kurasushi.co.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2492712.8971715,
      "curr_month_visits": 2492712.8971715,
      "unique_users": 1400959.57393422,
      "pages_per_visit": 2.65424132128595
    },
    {
      "global_rank": 498416,
      "category_rank": 155,
      "domain": "shop.berlinerbaeder.de",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 32042.8773456339,
      "curr_month_visits": 32042.8773456339,
      "unique_users": 13094.2067144556,
      "pages_per_visit": 16.1091163711842
    },
    {
      "global_rank": 20907,
      "category_rank": 155,
      "domain": "eat.de",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4088589.62306588,
      "curr_month_visits": 4088589.62306588,
      "unique_users": 2469169.98380117,
      "pages_per_visit": 1.61792922144172
    },
    {
      "global_rank": 37929,
      "category_rank": 155,
      "domain": "shop.shoprite.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1232675.26464241,
      "curr_month_visits": 1232675.26464241,
      "unique_users": 684735.390052454,
      "pages_per_visit": 4.11227830429713
    },
    {
      "global_rank": 132492,
      "category_rank": 156,
      "domain": "johnniewalker.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 449992.232268634,
      "curr_month_visits": 449992.232268634,
      "unique_users": 288900.092898683,
      "pages_per_visit": 1.86471372976121
    },
    {
      "global_rank": 500285,
      "category_rank": 156,
      "domain": "ravarubutiken.se",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 82634.395228332,
      "curr_month_visits": 82634.395228332,
      "unique_users": 44390.1123211887,
      "pages_per_visit": 3.34569322880551
    },
    {
      "global_rank": 24272,
      "category_rank": 156,
      "domain": "wgiftcard.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2414492.11478589,
      "curr_month_visits": 2414492.11478589,
      "unique_users": 1754511.53645344,
      "pages_per_visit": 2.68205472620769
    },
    {
      "global_rank": 21442,
      "category_rank": 156,
      "domain": "damndelicious.net",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4038411.14688441,
      "curr_month_visits": 4038411.14688441,
      "unique_users": 2536506.75010317,
      "pages_per_visit": 1.85272362812362
    },
    {
      "global_rank": 38476,
      "category_rank": 156,
      "domain": "norma-online.de",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1144065.05436652,
      "curr_month_visits": 1144065.05436652,
      "unique_users": 622766.910942915,
      "pages_per_visit": 5.41447151543851
    },
    {
      "global_rank": 28617,
      "category_rank": 156,
      "domain": "godare.se",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3104713.20361479,
      "curr_month_visits": 3104713.20361479,
      "unique_users": 1463300.48694925,
      "pages_per_visit": 1.50400215716193
    },
    {
      "global_rank": 28679,
      "category_rank": 157,
      "domain": "nounou-top.fr",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2239356.78489401,
      "curr_month_visits": 2239356.78489401,
      "unique_users": 422011.919958443,
      "pages_per_visit": 5.21646472462376
    },
    {
      "global_rank": 24297,
      "category_rank": 157,
      "domain": "wawa.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2249468.40808429,
      "curr_month_visits": 2249468.40808429,
      "unique_users": 1508186.64995873,
      "pages_per_visit": 3.85252894110221
    },
    {
      "global_rank": 500505,
      "category_rank": 157,
      "domain": "jackfruitful.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 72627.745224016,
      "curr_month_visits": 72627.745224016,
      "unique_users": 36927.7678800743,
      "pages_per_visit": 3.26368594502768
    },
    {
      "global_rank": 38541,
      "category_rank": 157,
      "domain": "davidstea.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 766612.537204944,
      "curr_month_visits": 766612.537204944,
      "unique_users": 368751.654145224,
      "pages_per_visit": 6.1177431997702
    },
    {
      "global_rank": 132685,
      "category_rank": 157,
      "domain": "homedistiller.org",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 417128.293958354,
      "curr_month_visits": 417128.293958354,
      "unique_users": 181762.056201007,
      "pages_per_visit": 2.36697624064104
    },
    {
      "global_rank": 21729,
      "category_rank": 157,
      "domain": "paulinacocina.net",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4259072.7609382,
      "curr_month_visits": 4259072.7609382,
      "unique_users": 2444626.90806949,
      "pages_per_visit": 1.59879050256438
    },
    {
      "global_rank": 133419,
      "category_rank": 158,
      "domain": "ryoutfitters.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 293565.816380519,
      "curr_month_visits": 293565.816380519,
      "unique_users": 146561.020919774,
      "pages_per_visit": 2.97809497664391
    },
    {
      "global_rank": 38904,
      "category_rank": 158,
      "domain": "assai.com.br",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1951415.7762044,
      "curr_month_visits": 1951415.7762044,
      "unique_users": 1141307.34516695,
      "pages_per_visit": 1.88125814023768
    },
    {
      "global_rank": 502737,
      "category_rank": 158,
      "domain": "elephantasticvegan.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 119554.104246414,
      "curr_month_visits": 119554.104246414,
      "unique_users": 62712.040088576,
      "pages_per_visit": 1.76254759592132
    },
    {
      "global_rank": 21758,
      "category_rank": 158,
      "domain": "ofeminin.pl",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 5695280.34211965,
      "curr_month_visits": 5695280.34211965,
      "unique_users": 2829160.39539249,
      "pages_per_visit": 1.44422095392673
    },
    {
      "global_rank": 28900,
      "category_rank": 158,
      "domain": "marktguru.de",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1763215.36404959,
      "curr_month_visits": 1763215.36404959,
      "unique_users": 1074984.55818024,
      "pages_per_visit": 4.61350602352878
    },
    {
      "global_rank": 24905,
      "category_rank": 158,
      "domain": "nandos.co.uk",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 1994316.62801215,
      "curr_month_visits": 1994316.62801215,
      "unique_users": 1200935.42015493,
      "pages_per_visit": 4.66676122799564
    },
    {
      "global_rank": 25088,
      "category_rank": 159,
      "domain": "pedidosya.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2550367.17625933,
      "curr_month_visits": 2550367.17625933,
      "unique_users": 814341.345158665,
      "pages_per_visit": 4.24798190979945
    },
    {
      "global_rank": 133753,
      "category_rank": 159,
      "domain": "ab-inbev.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 346151.535962146,
      "curr_month_visits": 346151.535962146,
      "unique_users": 158657.221513249,
      "pages_per_visit": 3.49068426489061
    },
    {
      "global_rank": 39317,
      "category_rank": 159,
      "domain": "theweeklyad.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 842511.72473561,
      "curr_month_visits": 842511.72473561,
      "unique_users": 365888.573945013,
      "pages_per_visit": 8.4490492256178
    },
    {
      "global_rank": 503279,
      "category_rank": 159,
      "domain": "sixhungryfeet.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 85202.4065567066,
      "curr_month_visits": 85202.4065567066,
      "unique_users": 40790.6654159304,
      "pages_per_visit": 2.00505131160879
    },
    {
      "global_rank": 21858,
      "category_rank": 159,
      "domain": "hidoc.co.kr",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 4900257.21031009,
      "curr_month_visits": 4900257.21031009,
      "unique_users": 3522856.04916516,
      "pages_per_visit": 1.31548110223799
    },
    {
      "global_rank": 29105,
      "category_rank": 159,
      "domain": "rakushifu.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2789427.94719762,
      "curr_month_visits": 2789427.94719762,
      "unique_users": 174525.317402766,
      "pages_per_visit": 3.13783465416627
    },
    {
      "global_rank": 25209,
      "category_rank": 160,
      "domain": "sundayapp.io",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2317063.27286207,
      "curr_month_visits": 2317063.27286207,
      "unique_users": 1394650.70898156,
      "pages_per_visit": 3.64062216571114
    },
    {
      "global_rank": 21921,
      "category_rank": 160,
      "domain": "solitalian.it",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 2976258.19281116,
      "curr_month_visits": 2976258.19281116,
      "unique_users": 204282.813064282,
      "pages_per_visit": 5.41712085062021
    },
    {
      "global_rank": 506018,
      "category_rank": 160,
      "domain": "dcerka.sk",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 45297.38676661,
      "curr_month_visits": 45297.38676661,
      "unique_users": 17502.8540512068,
      "pages_per_visit": 3.00989553017323
    },
    {
      "global_rank": 134150,
      "category_rank": 160,
      "domain": "breakthrubev.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 287226.472413679,
      "curr_month_visits": 287226.472413679,
      "unique_users": 77223.5923348309,
      "pages_per_visit": 6.23202169940734
    },
    {
      "global_rank": 29157,
      "category_rank": 160,
      "domain": "shop.ichefpos.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 3294361.96921027,
      "curr_month_visits": 3294361.96921027,
      "unique_users": 1030666.31087305,
      "pages_per_visit": 1.41416083829964
    },
    {
      "global_rank": 39448,
      "category_rank": 160,
      "domain": "freshdirect.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1028515.19482719,
      "curr_month_visits": 1028515.19482719,
      "unique_users": 451573.760944741,
      "pages_per_visit": 7.07376913940753
    },
    {
      "global_rank": 22177,
      "category_rank": 161,
      "domain": "howsweeteats.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 2520985.33806863,
      "curr_month_visits": 2520985.33806863,
      "unique_users": 1606700.60717667,
      "pages_per_visit": 1.82133108574535
    },
    {
      "global_rank": 134415,
      "category_rank": 161,
      "domain": "boonrawd.co.th",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 305610.789872547,
      "curr_month_visits": 305610.789872547,
      "unique_users": 48683.6303702802,
      "pages_per_visit": 7.94774110572438
    },
    {
      "global_rank": 40462,
      "category_rank": 161,
      "domain": "aldi.it",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 990322.841379866,
      "curr_month_visits": 990322.841379866,
      "unique_users": 427249.978743721,
      "pages_per_visit": 5.70424164794052
    },
    {
      "global_rank": 507790,
      "category_rank": 161,
      "domain": "e-qi.org",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 48140.5021147299,
      "curr_month_visits": 48140.5021147299,
      "unique_users": 9392.57783418971,
      "pages_per_visit": 11.6744861903774
    },
    {
      "global_rank": 29214,
      "category_rank": 161,
      "domain": "portailparents.ca",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1593582.06982839,
      "curr_month_visits": 1593582.06982839,
      "unique_users": 374839.976153924,
      "pages_per_visit": 5.41744669496734
    },
    {
      "global_rank": 25264,
      "category_rank": 161,
      "domain": "fiveguys.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 1968191.04109191,
      "curr_month_visits": 1968191.04109191,
      "unique_users": 1482930.33188509,
      "pages_per_visit": 4.42886428666807
    },
    {
      "global_rank": 135550,
      "category_rank": 162,
      "domain": "firstleaf.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 354804.796420954,
      "curr_month_visits": 354804.796420954,
      "unique_users": 195809.996052063,
      "pages_per_visit": 3.70620829392563
    },
    {
      "global_rank": 29221,
      "category_rank": 162,
      "domain": "nissin.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2052143.44706583,
      "curr_month_visits": 2052143.44706583,
      "unique_users": 1347180.53353495,
      "pages_per_visit": 2.7302473335924
    },
    {
      "global_rank": 25681,
      "category_rank": 162,
      "domain": "cookunity.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2231715.68046781,
      "curr_month_visits": 2231715.68046781,
      "unique_users": 1045689.40037766,
      "pages_per_visit": 4.43133314603875
    },
    {
      "global_rank": 511332,
      "category_rank": 162,
      "domain": "theherbivorousbutcher.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 42552.0360117623,
      "curr_month_visits": 42552.0360117623,
      "unique_users": 23566.412928192,
      "pages_per_visit": 6.47054129903718
    },
    {
      "global_rank": 40687,
      "category_rank": 162,
      "domain": "superc.ca",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1392704.50096608,
      "curr_month_visits": 1392704.50096608,
      "unique_users": 672595.520218446,
      "pages_per_visit": 2.90305697009747
    },
    {
      "global_rank": 22413,
      "category_rank": 162,
      "domain": "cooktopcove.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3690124.49864349,
      "curr_month_visits": 3690124.49864349,
      "unique_users": 1567383.62504722,
      "pages_per_visit": 1.77461622023229
    },
    {
      "global_rank": 25781,
      "category_rank": 163,
      "domain": "getbento.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2409686.12968835,
      "curr_month_visits": 2409686.12968835,
      "unique_users": 1906733.34342884,
      "pages_per_visit": 3.0854596514142
    },
    {
      "global_rank": 22718,
      "category_rank": 163,
      "domain": "smittenkitchen.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3024138.18746066,
      "curr_month_visits": 3024138.18746066,
      "unique_users": 1158658.13514435,
      "pages_per_visit": 3.20344663111886
    },
    {
      "global_rank": 136149,
      "category_rank": 163,
      "domain": "bluemoonbrewingcompany.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 373476.564639791,
      "curr_month_visits": 373476.564639791,
      "unique_users": 186239.327290254,
      "pages_per_visit": 2.50524571588453
    },
    {
      "global_rank": 29383,
      "category_rank": 163,
      "domain": "hotelchocolat.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1286887.50637862,
      "curr_month_visits": 1286887.50637862,
      "unique_users": 733391.81350621,
      "pages_per_visit": 4.05696693298604
    },
    {
      "global_rank": 40818,
      "category_rank": 163,
      "domain": "pggoodeveryday.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1274832.3608404,
      "curr_month_visits": 1274832.3608404,
      "unique_users": 700680.853366758,
      "pages_per_visit": 6.76489691455734
    },
    {
      "global_rank": 512725,
      "category_rank": 163,
      "domain": "stonyfield.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 135619.523167355,
      "curr_month_visits": 135619.523167355,
      "unique_users": 91536.1242089142,
      "pages_per_visit": 1.94294192711152
    },
    {
      "global_rank": 26036,
      "category_rank": 164,
      "domain": "smg.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 1739451.5552734,
      "curr_month_visits": 1739451.5552734,
      "unique_users": 793556.688545751,
      "pages_per_visit": 7.15077079688963
    },
    {
      "global_rank": 136848,
      "category_rank": 164,
      "domain": "brewersfriend.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 471529.41756895,
      "curr_month_visits": 471529.41756895,
      "unique_users": 178811.050963807,
      "pages_per_visit": 2.72695582152526
    },
    {
      "global_rank": 41427,
      "category_rank": 164,
      "domain": "shop.vivaticket.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 1532097.17588481,
      "curr_month_visits": 1532097.17588481,
      "unique_users": 911113.191011005,
      "pages_per_visit": 2.75550367947057
    },
    {
      "global_rank": 29537,
      "category_rank": 164,
      "domain": "dudooeat.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 2556315.63856882,
      "curr_month_visits": 2556315.63856882,
      "unique_users": 1519613.34060982,
      "pages_per_visit": 2.22698023511477
    },
    {
      "global_rank": 517400,
      "category_rank": 164,
      "domain": "veganpunks.com",
      "category": "Food_and_Drink/Vegetarian_and_Vegan",
      "avg_month_visits": 51809.3478175056,
      "curr_month_visits": 51809.3478175056,
      "unique_users": 24505.1790011061,
      "pages_per_visit": 2.57870950460358
    },
    {
      "global_rank": 22976,
      "category_rank": 164,
      "domain": "mojewypieki.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3117764.69820373,
      "curr_month_visits": 3117764.69820373,
      "unique_users": 1118033.75735735,
      "pages_per_visit": 2.4671587276504
    },
    {
      "global_rank": 23080,
      "category_rank": 165,
      "domain": "food.ndtv.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 3747540.31904335,
      "curr_month_visits": 3747540.31904335,
      "unique_users": 2794730.53822219,
      "pages_per_visit": 1.60682396618945
    },
    {
      "global_rank": 137283,
      "category_rank": 165,
      "domain": "saopaulosecreto.com",
      "category": "Food_and_Drink/Beverages",
      "avg_month_visits": 458190.50565699,
      "curr_month_visits": 458190.50565699,
      "unique_users": 353064.40088769,
      "pages_per_visit": 1.40510658296979
    },
    {
      "global_rank": 41557,
      "category_rank": 165,
      "domain": "adgrx.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 2434738.45747284,
      "curr_month_visits": 2434738.45747284,
      "unique_users": 182471.552161377,
      "pages_per_visit": 3.95316117924176
    },
    {
      "global_rank": 29666,
      "category_rank": 165,
      "domain": "bws.com.au",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 1709012.68235228,
      "curr_month_visits": 1709012.68235228,
      "unique_users": 958836.009846095,
      "pages_per_visit": 3.12252144233974
    },
    {
      "global_rank": 26184,
      "category_rank": 165,
      "domain": "zenchef.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 2677810.45048293,
      "curr_month_visits": 2677810.45048293,
      "unique_users": 1600851.62940082,
      "pages_per_visit": 2.17960219883745
    }
  ]
  
  const formatVisits = (visits) => {
    if (visits === null || visits === undefined) {
      return 'N/A'; // Return a placeholder for null or undefined values
    }
    if (visits >= 1e9) {
      return (visits / 1e9).toFixed(2) + 'B';
    } else if (visits >= 1e6) {
      return (visits / 1e6).toFixed(2) + 'M';
    }
    return visits.toString();
}
  return (
    <div className="container mx-auto py-12">

            <Top_Website_Categories />

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">Domain</th>
            <th className="px-4 py-2">Avg month visits</th>
            <th className="px-4 py-2">curr month visits</th>
            <th className="px-4 py-2">unique users</th>
            <th className="px-4 py-2">pages per visit</th>

          </tr>
        </thead>
        <tbody>
        {global_rank_all.map((item, index) => (
            <tr key={item.domain}>
                <td className="px-4 py-2 border-t">{index + 1}</td> {/* Use index + 1 for item number */}
                <td className="px-4 py-2 border-t">{item.domain}</td>
                <td className="px-4 py-2 border-t">{formatVisits(item.avg_month_visits)}</td>
                <td className="px-4 py-2 border-t">{formatVisits(item.curr_month_visits)}</td>
                <td className="px-4 py-2 border-t">{formatVisits(item.unique_users)}</td>
                <td className="px-4 py-2 border-t">{item.pages_per_visit}</td>
            </tr>
            ))}
        </tbody>
      </table>
      
    </div>
  )
}