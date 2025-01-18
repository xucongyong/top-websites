
import {Top_Website_Categories} from '@/lib/top_websites';
export const runtime = 'edge';
export const metadata = {
  title: 'Top  Websites Ranking in the World, January 2025',
  description: 'The top 1000 most visited  websites in the World by Ahrefs organic search traffic estimates. Updated monthly. January 2025',
}


export default function TopWebsite() {

  const global_rank_all = [
    {
      "global_rank": 4850,
      "category_rank": 1,
      "domain": "womenshealthmag.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 17835098.8600024,
      "curr_month_visits": 17835098.8600024,
      "unique_users": 13089949.4181883,
      "pages_per_visit": 1.45556028547845
    },
    {
      "global_rank": 720,
      "category_rank": 1,
      "domain": "mayoclinic.org",
      "category": "Health/Medicine",
      "avg_month_visits": 104877633.756016,
      "curr_month_visits": 104877633.756016,
      "unique_users": 71374867.8621026,
      "pages_per_visit": 1.51829188724845
    },
    {
      "global_rank": 190,
      "category_rank": 1,
      "domain": "nih.gov",
      "category": "Health/Health",
      "avg_month_visits": 219814316.419072,
      "curr_month_visits": 219814316.419072,
      "unique_users": 86702164.5151219,
      "pages_per_visit": 3.17016904654298
    },
    {
      "global_rank": 11588,
      "category_rank": 1,
      "domain": "blocksite.co",
      "category": "Health/Addictions",
      "avg_month_visits": 6158336.01984513,
      "curr_month_visits": 6158336.01984513,
      "unique_users": 2510450.90480417,
      "pages_per_visit": 2.09326994290327
    },
    {
      "global_rank": 444,
      "category_rank": 1,
      "domain": "cvs.com",
      "category": "Health/Pharmacy",
      "avg_month_visits": 88992872.0115962,
      "curr_month_visits": 88992872.0115962,
      "unique_users": 36940758.9441721,
      "pages_per_visit": 4.79384760407882
    },
    {
      "global_rank": 2648,
      "category_rank": 1,
      "domain": "psychologytoday.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 26441713.3510476,
      "curr_month_visits": 26441713.3510476,
      "unique_users": 14458272.6579505,
      "pages_per_visit": 2.65094048611969
    },
    {
      "global_rank": 14039,
      "category_rank": 1,
      "domain": "veevavault.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 2603822.37953929,
      "curr_month_visits": 2603822.37953929,
      "unique_users": 243393.297371268,
      "pages_per_visit": 25.2547335965453
    },
    {
      "global_rank": 11963,
      "category_rank": 1,
      "domain": "dentally.co",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 1831765.50860092,
      "curr_month_visits": 1831765.50860092,
      "unique_users": 110940.308591763,
      "pages_per_visit": 70.7529033981588
    },
    {
      "global_rank": 10733,
      "category_rank": 1,
      "domain": "helsenorge.no",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 5352237.68764866,
      "curr_month_visits": 5352237.68764866,
      "unique_users": 1876412.67500648,
      "pages_per_visit": 4.86988422106155
    },
    {
      "global_rank": 6171,
      "category_rank": 1,
      "domain": "babycenter.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 14593178.7042468,
      "curr_month_visits": 14593178.7042468,
      "unique_users": 7936351.31766236,
      "pages_per_visit": 2.05515672873722
    },
    {
      "global_rank": 7656,
      "category_rank": 1,
      "domain": "reliaslearning.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 5122615.06863937,
      "curr_month_visits": 5122615.06863937,
      "unique_users": 1193898.63830399,
      "pages_per_visit": 15.4170671161349
    },
    {
      "global_rank": 1464,
      "category_rank": 1,
      "domain": "iherb.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 30408401.8211765,
      "curr_month_visits": 30408401.8211765,
      "unique_users": 14817216.7516253,
      "pages_per_visit": 5.30007146411909
    },
    {
      "global_rank": 877,
      "category_rank": 1,
      "domain": "webmd.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 85535251.2923891,
      "curr_month_visits": 85535251.2923891,
      "unique_users": 55912075.1235315,
      "pages_per_visit": 1.56340845732633
    },
    {
      "global_rank": 3117,
      "category_rank": 1,
      "domain": "my-personaltrainer.it",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 25046714.1524804,
      "curr_month_visits": 25046714.1524804,
      "unique_users": 11856927.0338901,
      "pages_per_visit": 1.86557553000051
    },
    {
      "global_rank": 14403,
      "category_rank": 1,
      "domain": "oref.org.il",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 7025585.36862984,
      "curr_month_visits": 7025585.36862984,
      "unique_users": 3053793.35126297,
      "pages_per_visit": 2.04632329417457
    },
    {
      "global_rank": 17136,
      "category_rank": 1,
      "domain": "movember.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 1726297.91220533,
      "curr_month_visits": 1726297.91220533,
      "unique_users": 781581.161386589,
      "pages_per_visit": 3.07333727860687
    },
    {
      "global_rank": 3389,
      "category_rank": 2,
      "domain": "simplepractice.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 14745444.6409946,
      "curr_month_visits": 14745444.6409946,
      "unique_users": 1893770.59958355,
      "pages_per_visit": 10.9920891992258
    },
    {
      "global_rank": 744,
      "category_rank": 2,
      "domain": "clevelandclinic.org",
      "category": "Health/Medicine",
      "avg_month_visits": 90931379.278595,
      "curr_month_visits": 90931379.278595,
      "unique_users": 61203458.4158278,
      "pages_per_visit": 1.79803488290678
    },
    {
      "global_rank": 19669,
      "category_rank": 2,
      "domain": "clinikally.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 3047811.70682244,
      "curr_month_visits": 3047811.70682244,
      "unique_users": 1624709.51376633,
      "pages_per_visit": 2.93396035651478
    },
    {
      "global_rank": 11034,
      "category_rank": 2,
      "domain": "aufeminin.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 6363867.93532691,
      "curr_month_visits": 6363867.93532691,
      "unique_users": 3434920.64124175,
      "pages_per_visit": 2.56006736639722
    },
    {
      "global_rank": 2714,
      "category_rank": 2,
      "domain": "analdin.xxx",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 19723228.5645253,
      "curr_month_visits": 19723228.5645253,
      "unique_users": 11460457.2976007,
      "pages_per_visit": 2.92172748502093
    },
    {
      "global_rank": 15875,
      "category_rank": 2,
      "domain": "denticon.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 2039290.2823865,
      "curr_month_visits": 2039290.2823865,
      "unique_users": 339029.490051224,
      "pages_per_visit": 32.177607256016
    },
    {
      "global_rank": 17479,
      "category_rank": 2,
      "domain": "trulieve.com",
      "category": "Health/Addictions",
      "avg_month_visits": 2751380.55027331,
      "curr_month_visits": 2751380.55027331,
      "unique_users": 652854.75593153,
      "pages_per_visit": 6.8591820533805
    },
    {
      "global_rank": 2052,
      "category_rank": 2,
      "domain": "apteka.ru",
      "category": "Health/Pharmacy",
      "avg_month_visits": 25427921.4568338,
      "curr_month_visits": 25427921.4568338,
      "unique_users": 10890729.9938273,
      "pages_per_visit": 4.29546092468083
    },
    {
      "global_rank": 4189,
      "category_rank": 2,
      "domain": "racunn.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 10379093.6041863,
      "curr_month_visits": 10379093.6041863,
      "unique_users": 6369965.69196888,
      "pages_per_visit": 2.34732136427968
    },
    {
      "global_rank": 7702,
      "category_rank": 2,
      "domain": "babyblog.ru",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 11579687.5592549,
      "curr_month_visits": 11579687.5592549,
      "unique_users": 4220559.80283888,
      "pages_per_visit": 1.86508312184272
    },
    {
      "global_rank": 52236,
      "category_rank": 2,
      "domain": "mznn.ru",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 727096.892404215,
      "curr_month_visits": 727096.892404215,
      "unique_users": 219870.805343988,
      "pages_per_visit": 6.08639143865552
    },
    {
      "global_rank": 22720,
      "category_rank": 2,
      "domain": "mevosaude.com.br",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 4857464.61980655,
      "curr_month_visits": 4857464.61980655,
      "unique_users": 965446.544872492,
      "pages_per_visit": 1.37481238901866
    },
    {
      "global_rank": 336,
      "category_rank": 2,
      "domain": "healthline.com",
      "category": "Health/Health",
      "avg_month_visits": 126451712.260201,
      "curr_month_visits": 126451712.260201,
      "unique_users": 74867945.8165169,
      "pages_per_visit": 3.34532256038736
    },
    {
      "global_rank": 4275,
      "category_rank": 2,
      "domain": "menshealth.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 19390510.4504818,
      "curr_month_visits": 19390510.4504818,
      "unique_users": 13418934.4803358,
      "pages_per_visit": 1.50012811511985
    },
    {
      "global_rank": 19606,
      "category_rank": 2,
      "domain": "jabraenhance.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 4310650.35140446,
      "curr_month_visits": 4310650.35140446,
      "unique_users": 239115.086720349,
      "pages_per_visit": 6.33536579692191
    },
    {
      "global_rank": 12681,
      "category_rank": 2,
      "domain": "mp3juice.ninja",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 3639841.31191491,
      "curr_month_visits": 3639841.31191491,
      "unique_users": 1324910.44346545,
      "pages_per_visit": 3.14101430421051
    },
    {
      "global_rank": 54624,
      "category_rank": 3,
      "domain": "litalico.jp",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 1579041.16266385,
      "curr_month_visits": 1579041.16266385,
      "unique_users": 1202437.5039701,
      "pages_per_visit": 1.54419000580722
    },
    {
      "global_rank": 18339,
      "category_rank": 3,
      "domain": "ga.de",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 5179016.52427145,
      "curr_month_visits": 5179016.52427145,
      "unique_users": 1692907.8631743,
      "pages_per_visit": 2.5669567906452
    },
    {
      "global_rank": 12771,
      "category_rank": 3,
      "domain": "plannedparenthood.org",
      "category": "Health/Womens_Health",
      "avg_month_visits": 6652436.43798169,
      "curr_month_visits": 6652436.43798169,
      "unique_users": 4935982.74677541,
      "pages_per_visit": 1.76806223333871
    },
    {
      "global_rank": 26573,
      "category_rank": 3,
      "domain": "matrixcare.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 1292946.18422924,
      "curr_month_visits": 1292946.18422924,
      "unique_users": 80927.8386169927,
      "pages_per_visit": 29.5110665163959
    },
    {
      "global_rank": 23459,
      "category_rank": 3,
      "domain": "oracleindustry.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 2743391.40680473,
      "curr_month_visits": 2743391.40680473,
      "unique_users": 233256.35933889,
      "pages_per_visit": 6.95701708029034
    },
    {
      "global_rank": 39464,
      "category_rank": 3,
      "domain": "okusurinavi.shop",
      "category": "Health/Mens_Health",
      "avg_month_visits": 1458379.49850464,
      "curr_month_visits": 1458379.49850464,
      "unique_users": 621076.506277177,
      "pages_per_visit": 4.21043447794442
    },
    {
      "global_rank": 5039,
      "category_rank": 3,
      "domain": "myfitnesspal.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 10652086.3785934,
      "curr_month_visits": 10652086.3785934,
      "unique_users": 3141100.59371735,
      "pages_per_visit": 7.01942694564325
    },
    {
      "global_rank": 2671,
      "category_rank": 3,
      "domain": "drugs.com",
      "category": "Health/Pharmacy",
      "avg_month_visits": 25966651.3416874,
      "curr_month_visits": 25966651.3416874,
      "unique_users": 17680443.5297729,
      "pages_per_visit": 2.15589720763947
    },
    {
      "global_rank": 16681,
      "category_rank": 3,
      "domain": "simplesdental.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 2239772.3158115,
      "curr_month_visits": 2239772.3158115,
      "unique_users": 75766.3066400846,
      "pages_per_visit": 26.2602243145323
    },
    {
      "global_rank": 15643,
      "category_rank": 3,
      "domain": "rynekzdrowia.pl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 4853120.65766544,
      "curr_month_visits": 4853120.65766544,
      "unique_users": 2700301.68760943,
      "pages_per_visit": 1.56348680534357
    },
    {
      "global_rank": 7142,
      "category_rank": 3,
      "domain": "doxy.me",
      "category": "Health/Mental_Health",
      "avg_month_visits": 9830449.46565717,
      "curr_month_visits": 9830449.46565717,
      "unique_users": 4250196.46750982,
      "pages_per_visit": 3.44561935291092
    },
    {
      "global_rank": 21264,
      "category_rank": 3,
      "domain": "kipuworks.com",
      "category": "Health/Addictions",
      "avg_month_visits": 2035298.14257154,
      "curr_month_visits": 2035298.14257154,
      "unique_users": 91208.2732303174,
      "pages_per_visit": 18.0417105162595
    },
    {
      "global_rank": 793,
      "category_rank": 3,
      "domain": "walgreens.com",
      "category": "Health/Health",
      "avg_month_visits": 57814576.4661245,
      "curr_month_visits": 57814576.4661245,
      "unique_users": 26079837.7080302,
      "pages_per_visit": 4.52842082147554
    },
    {
      "global_rank": 3144,
      "category_rank": 3,
      "domain": "verywellhealth.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 26644550.7080547,
      "curr_month_visits": 26644550.7080547,
      "unique_users": 20111019.7843659,
      "pages_per_visit": 1.44586317573183
    },
    {
      "global_rank": 1586,
      "category_rank": 3,
      "domain": "kisskh.co",
      "category": "Health/Medicine",
      "avg_month_visits": 43771272.042853,
      "curr_month_visits": 43771272.042853,
      "unique_users": 3518505.1320659,
      "pages_per_visit": 2.89739107457582
    },
    {
      "global_rank": 10368,
      "category_rank": 3,
      "domain": "parenting.pl",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 10455337.7075507,
      "curr_month_visits": 10455337.7075507,
      "unique_users": 4123041.82174194,
      "pages_per_visit": 1.64667323827628
    },
    {
      "global_rank": 8439,
      "category_rank": 4,
      "domain": "betterhelp.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 8570898.00977778,
      "curr_month_visits": 8570898.00977778,
      "unique_users": 4631631.35349967,
      "pages_per_visit": 3.13730092941469
    },
    {
      "global_rank": 24296,
      "category_rank": 4,
      "domain": "curaleaf.com",
      "category": "Health/Addictions",
      "avg_month_visits": 2115488.77258689,
      "curr_month_visits": 2115488.77258689,
      "unique_users": 681030.928779608,
      "pages_per_visit": 5.18820170180669
    },
    {
      "global_rank": 14143,
      "category_rank": 4,
      "domain": "urbia.de",
      "category": "Health/Womens_Health",
      "avg_month_visits": 5170900.8509612,
      "curr_month_visits": 5170900.8509612,
      "unique_users": 2125243.69059834,
      "pages_per_visit": 3.13255188988861
    },
    {
      "global_rank": 2683,
      "category_rank": 4,
      "domain": "tabletki.ua",
      "category": "Health/Pharmacy",
      "avg_month_visits": 18291490.5100658,
      "curr_month_visits": 18291490.5100658,
      "unique_users": 5911648.44531946,
      "pages_per_visit": 5.24264171290126
    },
    {
      "global_rank": 7364,
      "category_rank": 4,
      "domain": "myprotein.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 6334292.08320916,
      "curr_month_visits": 6334292.08320916,
      "unique_users": 3494663.27372623,
      "pages_per_visit": 4.81323876959023
    },
    {
      "global_rank": 954,
      "category_rank": 4,
      "domain": "medicalnewstoday.com",
      "category": "Health/Health",
      "avg_month_visits": 59270082.4557576,
      "curr_month_visits": 59270082.4557576,
      "unique_users": 42034026.6053662,
      "pages_per_visit": 2.82598357359393
    },
    {
      "global_rank": 5332,
      "category_rank": 4,
      "domain": "health.clevelandclinic.org",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 18926692.1986382,
      "curr_month_visits": 18926692.1986382,
      "unique_users": 15590524.4860875,
      "pages_per_visit": 1.42361092955657
    },
    {
      "global_rank": 11359,
      "category_rank": 4,
      "domain": "parents.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 7689218.89008077,
      "curr_month_visits": 7689218.89008077,
      "unique_users": 5245540.75530005,
      "pages_per_visit": 1.69737307542717
    },
    {
      "global_rank": 18554,
      "category_rank": 4,
      "domain": "invisalign.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 2933771.63920276,
      "curr_month_visits": 2933771.63920276,
      "unique_users": 991226.499743215,
      "pages_per_visit": 6.8477681590023
    },
    {
      "global_rank": 26910,
      "category_rank": 4,
      "domain": "fox13seattle.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 3171199.67979669,
      "curr_month_visits": 3171199.67979669,
      "unique_users": 1512568.89656175,
      "pages_per_visit": 1.90259562316153
    },
    {
      "global_rank": 1851,
      "category_rank": 4,
      "domain": "msdmanuals.com",
      "category": "Health/Medicine",
      "avg_month_visits": 35622633.4378775,
      "curr_month_visits": 35622633.4378775,
      "unique_users": 24179465.4514425,
      "pages_per_visit": 2.58896241134063
    },
    {
      "global_rank": 16156,
      "category_rank": 4,
      "domain": "esosuite.net",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 3512699.84250345,
      "curr_month_visits": 3512699.84250345,
      "unique_users": 344877.81778753,
      "pages_per_visit": 6.56883607585954
    },
    {
      "global_rank": 52424,
      "category_rank": 4,
      "domain": "harrys.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 1136910.37119807,
      "curr_month_visits": 1136910.37119807,
      "unique_users": 765236.373493443,
      "pages_per_visit": 3.3810404772104
    },
    {
      "global_rank": 69460,
      "category_rank": 4,
      "domain": "cnsa.fr",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 699105.182170461,
      "curr_month_visits": 699105.182170461,
      "unique_users": 410572.609791135,
      "pages_per_visit": 4.64470766651074
    },
    {
      "global_rank": 23866,
      "category_rank": 4,
      "domain": "massagebook.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 2178530.50688423,
      "curr_month_visits": 2178530.50688423,
      "unique_users": 903821.52627145,
      "pages_per_visit": 6.52551088139751
    },
    {
      "global_rank": 25067,
      "category_rank": 4,
      "domain": "farmazon.com.tr",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 2014596.76338583,
      "curr_month_visits": 2014596.76338583,
      "unique_users": 77643.4132652462,
      "pages_per_visit": 11.2447116682682
    },
    {
      "global_rank": 8915,
      "category_rank": 5,
      "domain": "health.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 11587427.8089215,
      "curr_month_visits": 11587427.8089215,
      "unique_users": 8799980.64876565,
      "pages_per_visit": 1.53790950619488
    },
    {
      "global_rank": 3166,
      "category_rank": 5,
      "domain": "invitro.ru",
      "category": "Health/Medicine",
      "avg_month_visits": 16214835.9789046,
      "curr_month_visits": 16214835.9789046,
      "unique_users": 8753496.22579926,
      "pages_per_visit": 4.39420260057366
    },
    {
      "global_rank": 19737,
      "category_rank": 5,
      "domain": "visitqatar.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 2019762.38003459,
      "curr_month_visits": 2019762.38003459,
      "unique_users": 1196312.89584692,
      "pages_per_visit": 1.62381963093234
    },
    {
      "global_rank": 34090,
      "category_rank": 5,
      "domain": "daiichisankyo-hc.co.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 2555845.2869693,
      "curr_month_visits": 2555845.2869693,
      "unique_users": 1977933.31298485,
      "pages_per_visit": 1.61367519048512
    },
    {
      "global_rank": 31385,
      "category_rank": 5,
      "domain": "clearcareonline.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 1238456.11777481,
      "curr_month_visits": 1238456.11777481,
      "unique_users": 156659.329118152,
      "pages_per_visit": 13.299286081017
    },
    {
      "global_rank": 18136,
      "category_rank": 5,
      "domain": "mamari.jp",
      "category": "Health/Womens_Health",
      "avg_month_visits": 3595235.23445077,
      "curr_month_visits": 3595235.23445077,
      "unique_users": 2078563.50522997,
      "pages_per_visit": 2.79390306345284
    },
    {
      "global_rank": 31012,
      "category_rank": 5,
      "domain": "mercola.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 2610768.10601036,
      "curr_month_visits": 2610768.10601036,
      "unique_users": 657785.684473712,
      "pages_per_visit": 1.93646979513899
    },
    {
      "global_rank": 56696,
      "category_rank": 5,
      "domain": "dollarshaveclub.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 875930.889261518,
      "curr_month_visits": 875930.889261518,
      "unique_users": 507249.496946463,
      "pages_per_visit": 3.67004988767581
    },
    {
      "global_rank": 28379,
      "category_rank": 5,
      "domain": "nofap.com",
      "category": "Health/Addictions",
      "avg_month_visits": 2480656.30898232,
      "curr_month_visits": 2480656.30898232,
      "unique_users": 981453.764380781,
      "pages_per_visit": 3.41039907378035
    },
    {
      "global_rank": 71922,
      "category_rank": 5,
      "domain": "benefitsandwork.co.uk",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 885670.413092735,
      "curr_month_visits": 885670.413092735,
      "unique_users": 426929.698874078,
      "pages_per_visit": 2.81919627386283
    },
    {
      "global_rank": 22422,
      "category_rank": 5,
      "domain": "jrc.or.jp",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 3081038.18709877,
      "curr_month_visits": 3081038.18709877,
      "unique_users": 1984536.67526837,
      "pages_per_visit": 2.81573260227858
    },
    {
      "global_rank": 14083,
      "category_rank": 5,
      "domain": "kidshealth.org",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 7134354.26373962,
      "curr_month_visits": 7134354.26373962,
      "unique_users": 5437026.99101547,
      "pages_per_visit": 1.38889042970981
    },
    {
      "global_rank": 2981,
      "category_rank": 5,
      "domain": "goodrx.com",
      "category": "Health/Pharmacy",
      "avg_month_visits": 23399396.9344537,
      "curr_month_visits": 23399396.9344537,
      "unique_users": 15928258.662045,
      "pages_per_visit": 2.2393104396141
    },
    {
      "global_rank": 13801,
      "category_rank": 5,
      "domain": "cancer.gov",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 6274465.52840796,
      "curr_month_visits": 6274465.52840796,
      "unique_users": 4295036.23691276,
      "pages_per_visit": 1.86310871317516
    },
    {
      "global_rank": 1054,
      "category_rank": 5,
      "domain": "aarp.org",
      "category": "Health/Health",
      "avg_month_visits": 37238274.7416014,
      "curr_month_visits": 37238274.7416014,
      "unique_users": 14602892.1255343,
      "pages_per_visit": 6.78262787135675
    },
    {
      "global_rank": 8686,
      "category_rank": 5,
      "domain": "verywellmind.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 10622379.1374525,
      "curr_month_visits": 10622379.1374525,
      "unique_users": 7379624.43433788,
      "pages_per_visit": 1.60300296579332
    },
    {
      "global_rank": 18393,
      "category_rank": 6,
      "domain": "flo.health",
      "category": "Health/Womens_Health",
      "avg_month_visits": 4208402.21361894,
      "curr_month_visits": 4208402.21361894,
      "unique_users": 2894033.96432094,
      "pages_per_visit": 2.25340105568344
    },
    {
      "global_rank": 21469,
      "category_rank": 6,
      "domain": "dentrixascend.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 1443898.53141446,
      "curr_month_visits": 1443898.53141446,
      "unique_users": 367397.459929409,
      "pages_per_visit": 22.3431270156668
    },
    {
      "global_rank": 34447,
      "category_rank": 6,
      "domain": "liebscher-bracht.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 2155622.42835822,
      "curr_month_visits": 2155622.42835822,
      "unique_users": 1265864.13512172,
      "pages_per_visit": 1.76598234668053
    },
    {
      "global_rank": 1074,
      "category_rank": 6,
      "domain": "doctolib.fr",
      "category": "Health/Health",
      "avg_month_visits": 38684213.7410674,
      "curr_month_visits": 38684213.7410674,
      "unique_users": 13756225.7774782,
      "pages_per_visit": 6.50485617100308
    },
    {
      "global_rank": 19428,
      "category_rank": 6,
      "domain": "u-mama.ru",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 3033335.72277836,
      "curr_month_visits": 3033335.72277836,
      "unique_users": 1097909.89876526,
      "pages_per_visit": 5.04252482520976
    },
    {
      "global_rank": 26977,
      "category_rank": 6,
      "domain": "aladtec.com",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 2575444.1130683,
      "curr_month_visits": 2575444.1130683,
      "unique_users": 141068.607163498,
      "pages_per_visit": 5.18073723235066
    },
    {
      "global_rank": 17015,
      "category_rank": 6,
      "domain": "healthdirect.gov.au",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 5142520.83526271,
      "curr_month_visits": 5142520.83526271,
      "unique_users": 3611651.15881779,
      "pages_per_visit": 1.66293112055419
    },
    {
      "global_rank": 62960,
      "category_rank": 6,
      "domain": "mobizio.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 883681.4548043,
      "curr_month_visits": 883681.4548043,
      "unique_users": 45485.7833201884,
      "pages_per_visit": 20.1915489404482
    },
    {
      "global_rank": 9581,
      "category_rank": 6,
      "domain": "therapynotes.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 5229572.75914511,
      "curr_month_visits": 5229572.75914511,
      "unique_users": 266888.772160393,
      "pages_per_visit": 14.0306067877008
    },
    {
      "global_rank": 4568,
      "category_rank": 6,
      "domain": "eapteka.ru",
      "category": "Health/Pharmacy",
      "avg_month_visits": 16077194.2297536,
      "curr_month_visits": 16077194.2297536,
      "unique_users": 9752075.13787771,
      "pages_per_visit": 2.44506798594376
    },
    {
      "global_rank": 37404,
      "category_rank": 6,
      "domain": "webdiet.com.br",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1232846.25848952,
      "curr_month_visits": 1232846.25848952,
      "unique_users": 226487.787624907,
      "pages_per_visit": 9.52027687346372
    },
    {
      "global_rank": 3594,
      "category_rank": 6,
      "domain": "vidal.ru",
      "category": "Health/Medicine",
      "avg_month_visits": 24523359.7071458,
      "curr_month_visits": 24523359.7071458,
      "unique_users": 12312929.5322922,
      "pages_per_visit": 1.63022245233008
    },
    {
      "global_rank": 34281,
      "category_rank": 6,
      "domain": "zamnesia.com",
      "category": "Health/Addictions",
      "avg_month_visits": 1746924.92770396,
      "curr_month_visits": 1746924.92770396,
      "unique_users": 808680.505422371,
      "pages_per_visit": 3.99491994295872
    },
    {
      "global_rank": 9846,
      "category_rank": 6,
      "domain": "prevention.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 9113814.73707462,
      "curr_month_visits": 9113814.73707462,
      "unique_users": 6802173.46709717,
      "pages_per_visit": 1.56380877952954
    },
    {
      "global_rank": 74533,
      "category_rank": 6,
      "domain": "autism.org.uk",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 905049.915661148,
      "curr_month_visits": 905049.915661148,
      "unique_users": 547697.015865075,
      "pages_per_visit": 1.9468665505435
    },
    {
      "global_rank": 39903,
      "category_rank": 6,
      "domain": "aplaceformom.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 1507557.72353007,
      "curr_month_visits": 1507557.72353007,
      "unique_users": 1149148.06913925,
      "pages_per_visit": 3.62700474480153
    },
    {
      "global_rank": 21328,
      "category_rank": 7,
      "domain": "cancer.org",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 4137396.35245526,
      "curr_month_visits": 4137396.35245526,
      "unique_users": 2831125.60441477,
      "pages_per_visit": 1.86171552771189
    },
    {
      "global_rank": 1113,
      "category_rank": 7,
      "domain": "1mg.com",
      "category": "Health/Health",
      "avg_month_visits": 54305041.937928,
      "curr_month_visits": 54305041.937928,
      "unique_users": 25162149.1726331,
      "pages_per_visit": 2.66049365785289
    },
    {
      "global_rank": 21564,
      "category_rank": 7,
      "domain": "votefab40.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 2436871.96920603,
      "curr_month_visits": 2436871.96920603,
      "unique_users": 555538.776770423,
      "pages_per_visit": 3.30861604665434
    },
    {
      "global_rank": 18845,
      "category_rank": 7,
      "domain": "americanstylo.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 2916066.96010781,
      "curr_month_visits": 2916066.96010781,
      "unique_users": 1202140.19417092,
      "pages_per_visit": 5.93889528850305
    },
    {
      "global_rank": 38807,
      "category_rank": 7,
      "domain": "sberhealth.ru",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1003840.15243733,
      "curr_month_visits": 1003840.15243733,
      "unique_users": 558350.537599617,
      "pages_per_visit": 6.12629959846853
    },
    {
      "global_rank": 39180,
      "category_rank": 7,
      "domain": "dmed.uz",
      "category": "Health/Addictions",
      "avg_month_visits": 639861.043610048,
      "curr_month_visits": 639861.043610048,
      "unique_users": 19666.3389251091,
      "pages_per_visit": 30.0188342999269
    },
    {
      "global_rank": 48135,
      "category_rank": 7,
      "domain": "wellsky.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 678354.873823319,
      "curr_month_visits": 678354.873823319,
      "unique_users": 101845.754476845,
      "pages_per_visit": 20.4085576438936
    },
    {
      "global_rank": 29862,
      "category_rank": 7,
      "domain": "nfz.gov.pl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 1979719.86544578,
      "curr_month_visits": 1979719.86544578,
      "unique_users": 898518.441269592,
      "pages_per_visit": 3.81778057479326
    },
    {
      "global_rank": 86987,
      "category_rank": 7,
      "domain": "vdk.de",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 730584.821597811,
      "curr_month_visits": 730584.821597811,
      "unique_users": 389188.092385378,
      "pages_per_visit": 2.65809929978215
    },
    {
      "global_rank": 4911,
      "category_rank": 7,
      "domain": "drogasil.com.br",
      "category": "Health/Pharmacy",
      "avg_month_visits": 13339004.9439362,
      "curr_month_visits": 13339004.9439362,
      "unique_users": 8387120.78427144,
      "pages_per_visit": 2.98793706491792
    },
    {
      "global_rank": 91878,
      "category_rank": 7,
      "domain": "gillette.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 646483.074888929,
      "curr_month_visits": 646483.074888929,
      "unique_users": 424869.341433,
      "pages_per_visit": 2.0494999367712
    },
    {
      "global_rank": 43025,
      "category_rank": 7,
      "domain": "zanducare.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 1357633.87429402,
      "curr_month_visits": 1357633.87429402,
      "unique_users": 889797.95370804,
      "pages_per_visit": 2.94593612685143
    },
    {
      "global_rank": 28945,
      "category_rank": 7,
      "domain": "guiainfantil.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 2806061.61006216,
      "curr_month_visits": 2806061.61006216,
      "unique_users": 1936418.03627688,
      "pages_per_visit": 1.88525433184791
    },
    {
      "global_rank": 4121,
      "category_rank": 7,
      "domain": "naxadrug.com",
      "category": "Health/Medicine",
      "avg_month_visits": 11409451.98377,
      "curr_month_visits": 11409451.98377,
      "unique_users": 5351053.00496638,
      "pages_per_visit": 6.31938472178569
    },
    {
      "global_rank": 9964,
      "category_rank": 7,
      "domain": "planetfitness.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 5943412.31817584,
      "curr_month_visits": 5943412.31817584,
      "unique_users": 3760059.64219729,
      "pages_per_visit": 3.89547438991679
    },
    {
      "global_rank": 11792,
      "category_rank": 7,
      "domain": "clientsecure.me",
      "category": "Health/Mental_Health",
      "avg_month_visits": 5703751.21185139,
      "curr_month_visits": 5703751.21185139,
      "unique_users": 2232864.67534539,
      "pages_per_visit": 3.9976747029156
    },
    {
      "global_rank": 30065,
      "category_rank": 8,
      "domain": "littleone.ru",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 1402051.49236326,
      "curr_month_visits": 1402051.49236326,
      "unique_users": 291543.751027439,
      "pages_per_visit": 10.0841570741553
    },
    {
      "global_rank": 1118,
      "category_rank": 8,
      "domain": "athenahealth.com",
      "category": "Health/Health",
      "avg_month_visits": 33604441.3443616,
      "curr_month_visits": 33604441.3443616,
      "unique_users": 11532052.4994423,
      "pages_per_visit": 8.17435854216761
    },
    {
      "global_rank": 53204,
      "category_rank": 8,
      "domain": "tyojyu.or.jp",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 1789138.2621986,
      "curr_month_visits": 1789138.2621986,
      "unique_users": 1171046.13078951,
      "pages_per_visit": 1.3468299218256
    },
    {
      "global_rank": 40231,
      "category_rank": 8,
      "domain": "pfizer.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1749428.02769364,
      "curr_month_visits": 1749428.02769364,
      "unique_users": 1021143.82821062,
      "pages_per_visit": 2.70836581715491
    },
    {
      "global_rank": 122516,
      "category_rank": 8,
      "domain": "mycarecorner.net",
      "category": "Health/Mens_Health",
      "avg_month_visits": 284886.244790302,
      "curr_month_visits": 284886.244790302,
      "unique_users": 137324.998232488,
      "pages_per_visit": 6.86683244996889
    },
    {
      "global_rank": 12753,
      "category_rank": 8,
      "domain": "psychcentral.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 5320944.07400626,
      "curr_month_visits": 5320944.07400626,
      "unique_users": 3771687.79880621,
      "pages_per_visit": 3.23068885696127
    },
    {
      "global_rank": 88573,
      "category_rank": 8,
      "domain": "care-wing.jp",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 291355.019245853,
      "curr_month_visits": 291355.019245853,
      "unique_users": 31385.8481075836,
      "pages_per_visit": 25.4307783147864
    },
    {
      "global_rank": 39852,
      "category_rank": 8,
      "domain": "0x3.com",
      "category": "Health/Addictions",
      "avg_month_visits": 2496740.861167,
      "curr_month_visits": 2496740.861167,
      "unique_users": 174874.632322789,
      "pages_per_visit": 1.37862797008706
    },
    {
      "global_rank": 4980,
      "category_rank": 8,
      "domain": "drogaraia.com.br",
      "category": "Health/Pharmacy",
      "avg_month_visits": 14347907.9149504,
      "curr_month_visits": 14347907.9149504,
      "unique_users": 9481693.89272813,
      "pages_per_visit": 2.48000140607058
    },
    {
      "global_rank": 19585,
      "category_rank": 8,
      "domain": "parents.fr",
      "category": "Health/Womens_Health",
      "avg_month_visits": 4474812.87399114,
      "curr_month_visits": 4474812.87399114,
      "unique_users": 2709270.63047742,
      "pages_per_visit": 1.61902173200873
    },
    {
      "global_rank": 48828,
      "category_rank": 8,
      "domain": "functionhealth.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 990159.925216813,
      "curr_month_visits": 990159.925216813,
      "unique_users": 312095.860065762,
      "pages_per_visit": 4.65627127445134
    },
    {
      "global_rank": 23558,
      "category_rank": 8,
      "domain": "intakeq.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 2579287.97019127,
      "curr_month_visits": 2579287.97019127,
      "unique_users": 842480.442511398,
      "pages_per_visit": 5.11063724554587
    },
    {
      "global_rank": 5499,
      "category_rank": 8,
      "domain": "medscape.com",
      "category": "Health/Medicine",
      "avg_month_visits": 13442968.926305,
      "curr_month_visits": 13442968.926305,
      "unique_users": 7514917.16867093,
      "pages_per_visit": 2.61271638633529
    },
    {
      "global_rank": 11687,
      "category_rank": 8,
      "domain": "stips.co.il",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 5029439.08605518,
      "curr_month_visits": 5029439.08605518,
      "unique_users": 1813721.15278231,
      "pages_per_visit": 5.30246025640822
    },
    {
      "global_rank": 37402,
      "category_rank": 8,
      "domain": "ezdrowie.gov.pl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 1073715.12976011,
      "curr_month_visits": 1073715.12976011,
      "unique_users": 462403.84050491,
      "pages_per_visit": 7.43452315709041
    },
    {
      "global_rank": 21821,
      "category_rank": 8,
      "domain": "healthmatch.io",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1636810.65209739,
      "curr_month_visits": 1636810.65209739,
      "unique_users": 1054062.24798881,
      "pages_per_visit": 8.60242583473242
    },
    {
      "global_rank": 54050,
      "category_rank": 9,
      "domain": "alayacare.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 1277068.06693441,
      "curr_month_visits": 1277068.06693441,
      "unique_users": 235129.42939311,
      "pages_per_visit": 3.23133244514112
    },
    {
      "global_rank": 11815,
      "category_rank": 9,
      "domain": "gympass.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 6585434.0729855,
      "curr_month_visits": 6585434.0729855,
      "unique_users": 1388238.74976651,
      "pages_per_visit": 3.96824381437123
    },
    {
      "global_rank": 155443,
      "category_rank": 9,
      "domain": "thunders.place",
      "category": "Health/Mens_Health",
      "avg_month_visits": 357665.913544239,
      "curr_month_visits": 357665.913544239,
      "unique_users": 127354.725800806,
      "pages_per_visit": 6.66360374725254
    },
    {
      "global_rank": 40880,
      "category_rank": 9,
      "domain": "roche.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1411917.96263955,
      "curr_month_visits": 1411917.96263955,
      "unique_users": 687424.956449319,
      "pages_per_visit": 3.98073866061213
    },
    {
      "global_rank": 22363,
      "category_rank": 9,
      "domain": "dcurbanmom.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 2255389.19992067,
      "curr_month_visits": 2255389.19992067,
      "unique_users": 997958.179104033,
      "pages_per_visit": 6.05372902360264
    },
    {
      "global_rank": 51458,
      "category_rank": 9,
      "domain": "chirotouch.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 548886.409866006,
      "curr_month_visits": 548886.409866006,
      "unique_users": 69614.5118838531,
      "pages_per_visit": 28.6489322345732
    },
    {
      "global_rank": 38350,
      "category_rank": 9,
      "domain": "medfile.pl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 887289.855630241,
      "curr_month_visits": 887289.855630241,
      "unique_users": 309665.408287906,
      "pages_per_visit": 14.1515724906218
    },
    {
      "global_rank": 41819,
      "category_rank": 9,
      "domain": "iheartjane.com",
      "category": "Health/Addictions",
      "avg_month_visits": 1351568.51636479,
      "curr_month_visits": 1351568.51636479,
      "unique_users": 634313.379089276,
      "pages_per_visit": 3.93482791681431
    },
    {
      "global_rank": 5317,
      "category_rank": 9,
      "domain": "apollopharmacy.in",
      "category": "Health/Pharmacy",
      "avg_month_visits": 13194696.3509927,
      "curr_month_visits": 13194696.3509927,
      "unique_users": 9079996.77248523,
      "pages_per_visit": 2.56075167666814
    },
    {
      "global_rank": 1623,
      "category_rank": 9,
      "domain": "nhs.uk",
      "category": "Health/Health",
      "avg_month_visits": 44709468.5950358,
      "curr_month_visits": 44709468.5950358,
      "unique_users": 24318597.2925701,
      "pages_per_visit": 2.34297301206776
    },
    {
      "global_rank": 15312,
      "category_rank": 9,
      "domain": "loopearplugs.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 3708251.27477848,
      "curr_month_visits": 3708251.27477848,
      "unique_users": 1782447.82404538,
      "pages_per_visit": 4.06660041545607
    },
    {
      "global_rank": 22505,
      "category_rank": 9,
      "domain": "nhsinform.scot",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 4302307.08412628,
      "curr_month_visits": 4302307.08412628,
      "unique_users": 3185843.02384217,
      "pages_per_visit": 1.63338260562859
    },
    {
      "global_rank": 92813,
      "category_rank": 9,
      "domain": "thementornetwork.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 584886.663205723,
      "curr_month_visits": 584886.663205723,
      "unique_users": 81646.0334517887,
      "pages_per_visit": 4.01082099053391
    },
    {
      "global_rank": 30090,
      "category_rank": 9,
      "domain": "baby.ru",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 3057011.46119853,
      "curr_month_visits": 3057011.46119853,
      "unique_users": 1080791.48422292,
      "pages_per_visit": 2.72164311285763
    },
    {
      "global_rank": 24067,
      "category_rank": 9,
      "domain": "haisha-yoyaku.jp",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 2585999.94147734,
      "curr_month_visits": 2585999.94147734,
      "unique_users": 1493556.16711592,
      "pages_per_visit": 3.40073727836075
    },
    {
      "global_rank": 5576,
      "category_rank": 9,
      "domain": "znanylekarz.pl",
      "category": "Health/Medicine",
      "avg_month_visits": 11704495.8402781,
      "curr_month_visits": 11704495.8402781,
      "unique_users": 5150971.3727329,
      "pages_per_visit": 3.21946994280711
    },
    {
      "global_rank": 164819,
      "category_rank": 10,
      "domain": "calcsd.info",
      "category": "Health/Mens_Health",
      "avg_month_visits": 384086.25301176,
      "curr_month_visits": 384086.25301176,
      "unique_users": 188152.229252415,
      "pages_per_visit": 2.31101405894305
    },
    {
      "global_rank": 54974,
      "category_rank": 10,
      "domain": "apotekajankovic.rs",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 942039.101366424,
      "curr_month_visits": 942039.101366424,
      "unique_users": 246616.94097436,
      "pages_per_visit": 9.53806699871815
    },
    {
      "global_rank": 39234,
      "category_rank": 10,
      "domain": "ortecapps.com",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 1423175.65610571,
      "curr_month_visits": 1423175.65610571,
      "unique_users": 311898.103456302,
      "pages_per_visit": 3.0583941240845
    },
    {
      "global_rank": 22583,
      "category_rank": 10,
      "domain": "sleepfoundation.org",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 4272135.47940822,
      "curr_month_visits": 4272135.47940822,
      "unique_users": 3213185.63814754,
      "pages_per_visit": 1.45605648430422
    },
    {
      "global_rank": 33279,
      "category_rank": 10,
      "domain": "sibmama.ru",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 1856061.10002292,
      "curr_month_visits": 1856061.10002292,
      "unique_users": 637460.317496931,
      "pages_per_visit": 5.16628194180857
    },
    {
      "global_rank": 22662,
      "category_rank": 10,
      "domain": "netmums.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 3495896.28411198,
      "curr_month_visits": 3495896.28411198,
      "unique_users": 2107658.62893551,
      "pages_per_visit": 2.19595081685675
    },
    {
      "global_rank": 28253,
      "category_rank": 10,
      "domain": "colgate.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 3018322.73935392,
      "curr_month_visits": 3018322.73935392,
      "unique_users": 2236912.25262709,
      "pages_per_visit": 1.76470819511795
    },
    {
      "global_rank": 5609,
      "category_rank": 10,
      "domain": "amboss.com",
      "category": "Health/Medicine",
      "avg_month_visits": 8987224.59245676,
      "curr_month_visits": 8987224.59245676,
      "unique_users": 1440083.07588419,
      "pages_per_visit": 11.7098013064484
    },
    {
      "global_rank": 5766,
      "category_rank": 10,
      "domain": "apotea.se",
      "category": "Health/Pharmacy",
      "avg_month_visits": 8621214.49967885,
      "curr_month_visits": 8621214.49967885,
      "unique_users": 2900745.91615938,
      "pages_per_visit": 5.09204074156417
    },
    {
      "global_rank": 12156,
      "category_rank": 10,
      "domain": "eatthis.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 7690599.93969582,
      "curr_month_visits": 7690599.93969582,
      "unique_users": 5385464.02555996,
      "pages_per_visit": 1.38166472871958
    },
    {
      "global_rank": 56703,
      "category_rank": 10,
      "domain": "extendedcare.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 533974.278200138,
      "curr_month_visits": 533974.278200138,
      "unique_users": 49006.2474050112,
      "pages_per_visit": 26.4434069720592
    },
    {
      "global_rank": 41827,
      "category_rank": 10,
      "domain": "sawai.co.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 2364602.65780497,
      "curr_month_visits": 2364602.65780497,
      "unique_users": 1839313.53502808,
      "pages_per_visit": 1.2585279517637
    },
    {
      "global_rank": 97421,
      "category_rank": 10,
      "domain": "onsagenda.nl",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 439442.152723562,
      "curr_month_visits": 439442.152723562,
      "unique_users": 59053.8340247288,
      "pages_per_visit": 8.78335435903616
    },
    {
      "global_rank": 1823,
      "category_rank": 10,
      "domain": "janeapp.com",
      "category": "Health/Health",
      "avg_month_visits": 19809121.0444738,
      "curr_month_visits": 19809121.0444738,
      "unique_users": 4650113.73490288,
      "pages_per_visit": 10.6028956337723
    },
    {
      "global_rank": 44071,
      "category_rank": 10,
      "domain": "notdrink.ru",
      "category": "Health/Addictions",
      "avg_month_visits": 1167359.53321181,
      "curr_month_visits": 1167359.53321181,
      "unique_users": 126289.188746052,
      "pages_per_visit": 9.91176452076459
    },
    {
      "global_rank": 18786,
      "category_rank": 10,
      "domain": "therapyportal.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 3279857.77658467,
      "curr_month_visits": 3279857.77658467,
      "unique_users": 1199722.58141126,
      "pages_per_visit": 4.54549907827867
    },
    {
      "global_rank": 31561,
      "category_rank": 11,
      "domain": "medicaldoc.jp",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 2542824.30655421,
      "curr_month_visits": 2542824.30655421,
      "unique_users": 2023007.56676954,
      "pages_per_visit": 1.65944415143341
    },
    {
      "global_rank": 56761,
      "category_rank": 11,
      "domain": "axxessweb.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 737865.045137449,
      "curr_month_visits": 737865.045137449,
      "unique_users": 59250.6941575407,
      "pages_per_visit": 8.62272419726673
    },
    {
      "global_rank": 170785,
      "category_rank": 11,
      "domain": "looksmaxxing.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 207084.552076022,
      "curr_month_visits": 207084.552076022,
      "unique_users": 93268.0162769048,
      "pages_per_visit": 4.32381588364409
    },
    {
      "global_rank": 5672,
      "category_rank": 11,
      "domain": "hopkinsmedicine.org",
      "category": "Health/Medicine",
      "avg_month_visits": 14423864.5602652,
      "curr_month_visits": 14423864.5602652,
      "unique_users": 10243270.6889944,
      "pages_per_visit": 2.12767650519147
    },
    {
      "global_rank": 12787,
      "category_rank": 11,
      "domain": "w12app.com.br",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 3702034.55619185,
      "curr_month_visits": 3702034.55619185,
      "unique_users": 573243.862253728,
      "pages_per_visit": 14.5949061526633
    },
    {
      "global_rank": 43429,
      "category_rank": 11,
      "domain": "party.pl",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 2078152.37140369,
      "curr_month_visits": 2078152.37140369,
      "unique_users": 1155700.92082677,
      "pages_per_visit": 1.55382254226446
    },
    {
      "global_rank": 57394,
      "category_rank": 11,
      "domain": "drjoedispenza.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 907537.602032358,
      "curr_month_visits": 907537.602032358,
      "unique_users": 356566.786445817,
      "pages_per_visit": 3.87076526404733
    },
    {
      "global_rank": 41608,
      "category_rank": 11,
      "domain": "traumasoft.com",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 1397132.29989604,
      "curr_month_visits": 1397132.29989604,
      "unique_users": 46460.6775290284,
      "pages_per_visit": 8.46334273209973
    },
    {
      "global_rank": 43625,
      "category_rank": 11,
      "domain": "drmax.pl",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1761920.07849798,
      "curr_month_visits": 1761920.07849798,
      "unique_users": 1307743.36854104,
      "pages_per_visit": 1.84981989670783
    },
    {
      "global_rank": 24661,
      "category_rank": 11,
      "domain": "24baby.nl",
      "category": "Health/Womens_Health",
      "avg_month_visits": 3100540.3329787,
      "curr_month_visits": 3100540.3329787,
      "unique_users": 1085317.49612407,
      "pages_per_visit": 2.79943162292955
    },
    {
      "global_rank": 18814,
      "category_rank": 11,
      "domain": "growtherapy.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 3012448.44954048,
      "curr_month_visits": 3012448.44954048,
      "unique_users": 755152.528423174,
      "pages_per_visit": 5.77830946502005
    },
    {
      "global_rank": 47019,
      "category_rank": 11,
      "domain": "aa.org",
      "category": "Health/Addictions",
      "avg_month_visits": 1643875.67529347,
      "curr_month_visits": 1643875.67529347,
      "unique_users": 609642.783168408,
      "pages_per_visit": 1.87263047898231
    },
    {
      "global_rank": 100247,
      "category_rank": 11,
      "domain": "statres.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 734317.077965201,
      "curr_month_visits": 734317.077965201,
      "unique_users": 27956.7572075924,
      "pages_per_visit": 5.09267737603942
    },
    {
      "global_rank": 1849,
      "category_rank": 11,
      "domain": "medicare.gov",
      "category": "Health/Health",
      "avg_month_visits": 12922831.0471399,
      "curr_month_visits": 12922831.0471399,
      "unique_users": 6772741.93163485,
      "pages_per_visit": 11.4977691923041
    },
    {
      "global_rank": 22933,
      "category_rank": 11,
      "domain": "mdanderson.org",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 2944921.78298214,
      "curr_month_visits": 2944921.78298214,
      "unique_users": 1601145.12776067,
      "pages_per_visit": 3.33660013744806
    },
    {
      "global_rank": 6200,
      "category_rank": 11,
      "domain": "fda.gov",
      "category": "Health/Pharmacy",
      "avg_month_visits": 11188092.7874816,
      "curr_month_visits": 11188092.7874816,
      "unique_users": 7614926.94463565,
      "pages_per_visit": 2.84105384207509
    },
    {
      "global_rank": 58474,
      "category_rank": 12,
      "domain": "agingcare.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 1163705.53181936,
      "curr_month_visits": 1163705.53181936,
      "unique_users": 803741.01092204,
      "pages_per_visit": 2.14392185026091
    },
    {
      "global_rank": 58977,
      "category_rank": 12,
      "domain": "bananam.co.kr",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 1721158.9170871,
      "curr_month_visits": 1721158.9170871,
      "unique_users": 731658.246241561,
      "pages_per_visit": 1.20869613830806
    },
    {
      "global_rank": 47901,
      "category_rank": 12,
      "domain": "kipu-11004.s3.amazonaws.com",
      "category": "Health/Addictions",
      "avg_month_visits": 1957517.80657907,
      "curr_month_visits": 1957517.80657907,
      "unique_users": 237729.069084971,
      "pages_per_visit": 1.7765347717045
    },
    {
      "global_rank": 45654,
      "category_rank": 12,
      "domain": "abbvie.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1287372.48025693,
      "curr_month_visits": 1287372.48025693,
      "unique_users": 498996.238674185,
      "pages_per_visit": 3.51414651433834
    },
    {
      "global_rank": 35209,
      "category_rank": 12,
      "domain": "aligntech.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 2109282.36335105,
      "curr_month_visits": 2109282.36335105,
      "unique_users": 383508.506599116,
      "pages_per_visit": 3.75783499818759
    },
    {
      "global_rank": 186198,
      "category_rank": 12,
      "domain": "newyorkurologyspecialists.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 275855.269292181,
      "curr_month_visits": 275855.269292181,
      "unique_users": 153877.795555848,
      "pages_per_visit": 3.12957983075553
    },
    {
      "global_rank": 101978,
      "category_rank": 12,
      "domain": "goodwill.org",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 665270.04981311,
      "curr_month_visits": 665270.04981311,
      "unique_users": 499564.945225449,
      "pages_per_visit": 2.04772302408988
    },
    {
      "global_rank": 26449,
      "category_rank": 12,
      "domain": "santagostino.it",
      "category": "Health/Womens_Health",
      "avg_month_visits": 3344699.4626381,
      "curr_month_visits": 3344699.4626381,
      "unique_users": 2122014.62120171,
      "pages_per_visit": 1.57256535613231
    },
    {
      "global_rank": 20882,
      "category_rank": 12,
      "domain": "headway.co",
      "category": "Health/Mental_Health",
      "avg_month_visits": 2516627.45041191,
      "curr_month_visits": 2516627.45041191,
      "unique_users": 691726.960870591,
      "pages_per_visit": 5.87966294880518
    },
    {
      "global_rank": 13167,
      "category_rank": 12,
      "domain": "alfemminile.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 6205458.20450371,
      "curr_month_visits": 6205458.20450371,
      "unique_users": 2840772.05178575,
      "pages_per_visit": 2.59818942722643
    },
    {
      "global_rank": 41905,
      "category_rank": 12,
      "domain": "myeyedr.com",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 1054860.27508827,
      "curr_month_visits": 1054860.27508827,
      "unique_users": 664464.681165287,
      "pages_per_visit": 4.76227205216282
    },
    {
      "global_rank": 6345,
      "category_rank": 12,
      "domain": "doz.pl",
      "category": "Health/Pharmacy",
      "avg_month_visits": 10538537.3598303,
      "curr_month_visits": 10538537.3598303,
      "unique_users": 5307171.92398088,
      "pages_per_visit": 2.86571001998061
    },
    {
      "global_rank": 24481,
      "category_rank": 12,
      "domain": "merckmanuals.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 2723919.53841662,
      "curr_month_visits": 2723919.53841662,
      "unique_users": 1922861.19768994,
      "pages_per_visit": 3.0249272746296
    },
    {
      "global_rank": 1956,
      "category_rank": 12,
      "domain": "altibbi.com",
      "category": "Health/Health",
      "avg_month_visits": 39116968.5871571,
      "curr_month_visits": 39116968.5871571,
      "unique_users": 20703501.7860499,
      "pages_per_visit": 1.80865336192767
    },
    {
      "global_rank": 48120,
      "category_rank": 12,
      "domain": "stanfordchildrens.org",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 1552780.82552773,
      "curr_month_visits": 1552780.82552773,
      "unique_users": 939314.800799924,
      "pages_per_visit": 2.34778331558712
    },
    {
      "global_rank": 6630,
      "category_rank": 12,
      "domain": "rlsnet.ru",
      "category": "Health/Medicine",
      "avg_month_visits": 14467672.8918274,
      "curr_month_visits": 14467672.8918274,
      "unique_users": 7733379.97138358,
      "pages_per_visit": 1.69758621034461
    },
    {
      "global_rank": 14065,
      "category_rank": 13,
      "domain": "classpass.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 4454409.16209875,
      "curr_month_visits": 4454409.16209875,
      "unique_users": 1823888.56076101,
      "pages_per_visit": 4.80855590201392
    },
    {
      "global_rank": 45651,
      "category_rank": 13,
      "domain": "rivm.nl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 1779335.35663181,
      "curr_month_visits": 1779335.35663181,
      "unique_users": 1118043.91298063,
      "pages_per_visit": 1.8296461085109
    },
    {
      "global_rank": 24853,
      "category_rank": 13,
      "domain": "kohi.or.kr",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 978127.367473616,
      "curr_month_visits": 978127.367473616,
      "unique_users": 275374.115191483,
      "pages_per_visit": 20.4513898875359
    },
    {
      "global_rank": 35107,
      "category_rank": 13,
      "domain": "magicmaman.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 2302949.11755303,
      "curr_month_visits": 2302949.11755303,
      "unique_users": 1550659.00260725,
      "pages_per_visit": 1.56085081709798
    },
    {
      "global_rank": 50289,
      "category_rank": 13,
      "domain": "americanaddictioncenters.org",
      "category": "Health/Addictions",
      "avg_month_visits": 1792825.01186161,
      "curr_month_visits": 1792825.01186161,
      "unique_users": 1352182.16403449,
      "pages_per_visit": 1.35473375879627
    },
    {
      "global_rank": 48533,
      "category_rank": 13,
      "domain": "attractivenesstest.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 782500.249592984,
      "curr_month_visits": 782500.249592984,
      "unique_users": 290661.648066749,
      "pages_per_visit": 8.9103899218359
    },
    {
      "global_rank": 188831,
      "category_rank": 13,
      "domain": "mitoredlight.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 148422.081207747,
      "curr_month_visits": 148422.081207747,
      "unique_users": 81543.2218681317,
      "pages_per_visit": 3.46423740261951
    },
    {
      "global_rank": 118380,
      "category_rank": 13,
      "domain": "guardner.jp",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 383622.545706608,
      "curr_month_visits": 383622.545706608,
      "unique_users": 231733.922967843,
      "pages_per_visit": 1.57053117985957
    },
    {
      "global_rank": 7023,
      "category_rank": 13,
      "domain": "planetazdorovo.ru",
      "category": "Health/Pharmacy",
      "avg_month_visits": 7132370.79038752,
      "curr_month_visits": 7132370.79038752,
      "unique_users": 3196861.58629689,
      "pages_per_visit": 5.30137764150897
    },
    {
      "global_rank": 6832,
      "category_rank": 13,
      "domain": "dr.in",
      "category": "Health/Medicine",
      "avg_month_visits": 2192511.35836982,
      "curr_month_visits": 2192511.35836982,
      "unique_users": 749992.035688023,
      "pages_per_visit": 9.86343881934226
    },
    {
      "global_rank": 46123,
      "category_rank": 13,
      "domain": "rohto.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1536245.72623232,
      "curr_month_visits": 1536245.72623232,
      "unique_users": 1208523.68999936,
      "pages_per_visit": 1.94535141989246
    },
    {
      "global_rank": 59512,
      "category_rank": 13,
      "domain": "krishnaayurved.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 1207081.68884133,
      "curr_month_visits": 1207081.68884133,
      "unique_users": 590648.209218726,
      "pages_per_visit": 2.19315368563808
    },
    {
      "global_rank": 58858,
      "category_rank": 13,
      "domain": "ncoa.org",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 1302984.520963,
      "curr_month_visits": 1302984.520963,
      "unique_users": 950343.894373371,
      "pages_per_visit": 1.49479986082333
    },
    {
      "global_rank": 2392,
      "category_rank": 13,
      "domain": "prodoctorov.ru",
      "category": "Health/Health",
      "avg_month_visits": 23787323.128325,
      "curr_month_visits": 23787323.128325,
      "unique_users": 11545414.0029055,
      "pages_per_visit": 3.24721361324362
    },
    {
      "global_rank": 20974,
      "category_rank": 13,
      "domain": "trendyol-milla.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1725734.86493638,
      "curr_month_visits": 1725734.86493638,
      "unique_users": 716303.963231899,
      "pages_per_visit": 9.17879872925134
    },
    {
      "global_rank": 37638,
      "category_rank": 13,
      "domain": "solutionreach.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 1110457.41035087,
      "curr_month_visits": 1110457.41035087,
      "unique_users": 487200.710661732,
      "pages_per_visit": 7.80986951515224
    },
    {
      "global_rank": 63537,
      "category_rank": 14,
      "domain": "ryokorouter.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 702674.595955933,
      "curr_month_visits": 702674.595955933,
      "unique_users": 479092.526944531,
      "pages_per_visit": 2.04529859059276
    },
    {
      "global_rank": 60602,
      "category_rank": 14,
      "domain": "himalayawellness.in",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 929668.362282564,
      "curr_month_visits": 929668.362282564,
      "unique_users": 614940.419785127,
      "pages_per_visit": 2.64322267713975
    },
    {
      "global_rank": 7220,
      "category_rank": 14,
      "domain": "m3.com",
      "category": "Health/Medicine",
      "avg_month_visits": 5948306.30730385,
      "curr_month_visits": 5948306.30730385,
      "unique_users": 1576530.30525931,
      "pages_per_visit": 9.24191164393785
    },
    {
      "global_rank": 7048,
      "category_rank": 14,
      "domain": "paguemenos.com.br",
      "category": "Health/Pharmacy",
      "avg_month_visits": 8684848.24695309,
      "curr_month_visits": 8684848.24695309,
      "unique_users": 5177800.25523198,
      "pages_per_visit": 3.13359117107841
    },
    {
      "global_rank": 49423,
      "category_rank": 14,
      "domain": "bebemamae.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 1793094.39056075,
      "curr_month_visits": 1793094.39056075,
      "unique_users": 1005388.02884366,
      "pages_per_visit": 1.33180547724383
    },
    {
      "global_rank": 36468,
      "category_rank": 14,
      "domain": "cartaodetodos.com.br",
      "category": "Health/Womens_Health",
      "avg_month_visits": 1991015.93730554,
      "curr_month_visits": 1991015.93730554,
      "unique_users": 1260938.26622946,
      "pages_per_visit": 2.32736062249268
    },
    {
      "global_rank": 46523,
      "category_rank": 14,
      "domain": "cytamins.ru",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1777503.38562503,
      "curr_month_visits": 1777503.38562503,
      "unique_users": 1277557.44166217,
      "pages_per_visit": 1.46859599322474
    },
    {
      "global_rank": 51507,
      "category_rank": 14,
      "domain": "dea.gov",
      "category": "Health/Addictions",
      "avg_month_visits": 1556318.55013888,
      "curr_month_visits": 1556318.55013888,
      "unique_users": 1178582.1425219,
      "pages_per_visit": 1.78273095185297
    },
    {
      "global_rank": 21773,
      "category_rank": 14,
      "domain": "theranest.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 2200997.47607058,
      "curr_month_visits": 2200997.47607058,
      "unique_users": 212914.363184357,
      "pages_per_visit": 14.3951696762982
    },
    {
      "global_rank": 38140,
      "category_rank": 14,
      "domain": "modento.io",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 1584117.43618002,
      "curr_month_visits": 1584117.43618002,
      "unique_users": 738799.388563668,
      "pages_per_visit": 4.309026349958
    },
    {
      "global_rank": 15053,
      "category_rank": 14,
      "domain": "ouraring.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 3594702.41602576,
      "curr_month_visits": 3594702.41602576,
      "unique_users": 2042607.09055685,
      "pages_per_visit": 3.70780049096032
    },
    {
      "global_rank": 26494,
      "category_rank": 14,
      "domain": "dexcom.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 2444340.84779305,
      "curr_month_visits": 2444340.84779305,
      "unique_users": 1383398.36599424,
      "pages_per_visit": 3.08297068724783
    },
    {
      "global_rank": 2422,
      "category_rank": 14,
      "domain": "phreesia.net",
      "category": "Health/Health",
      "avg_month_visits": 21444350.448077,
      "curr_month_visits": 21444350.448077,
      "unique_users": 9763919.90161386,
      "pages_per_visit": 4.5708485949271
    },
    {
      "global_rank": 127350,
      "category_rank": 14,
      "domain": "monparcourshandicap.gouv.fr",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 465295.799229478,
      "curr_month_visits": 465295.799229478,
      "unique_users": 306462.326541571,
      "pages_per_visit": 1.94755246260281
    },
    {
      "global_rank": 49230,
      "category_rank": 14,
      "domain": "wam.go.jp",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 1088240.69476531,
      "curr_month_visits": 1088240.69476531,
      "unique_users": 631568.746395652,
      "pages_per_visit": 4.46435626922204
    },
    {
      "global_rank": 189216,
      "category_rank": 14,
      "domain": "betterconsult.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 328499.268609598,
      "curr_month_visits": 328499.268609598,
      "unique_users": 139472.843547689,
      "pages_per_visit": 1.85448797069509
    },
    {
      "global_rank": 69353,
      "category_rank": 15,
      "domain": "brightstarcare.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 583030.570647487,
      "curr_month_visits": 583030.570647487,
      "unique_users": 92176.198516267,
      "pages_per_visit": 11.2819243432269
    },
    {
      "global_rank": 51482,
      "category_rank": 15,
      "domain": "gabinet.gov.pl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 596093.833187313,
      "curr_month_visits": 596093.833187313,
      "unique_users": 156193.033630381,
      "pages_per_visit": 10.2435746214611
    },
    {
      "global_rank": 198778,
      "category_rank": 15,
      "domain": "healthsea.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 512929.378957337,
      "curr_month_visits": 512929.378957337,
      "unique_users": 414425.072573665,
      "pages_per_visit": 2.38275646672322
    },
    {
      "global_rank": 7261,
      "category_rank": 15,
      "domain": "shoppersdrugmart.ca",
      "category": "Health/Pharmacy",
      "avg_month_visits": 6868946.65768471,
      "curr_month_visits": 6868946.65768471,
      "unique_users": 3680047.14903017,
      "pages_per_visit": 3.88280746612047
    },
    {
      "global_rank": 62302,
      "category_rank": 15,
      "domain": "benu.rs",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 959663.885759577,
      "curr_month_visits": 959663.885759577,
      "unique_users": 565920.587207039,
      "pages_per_visit": 2.20297257497535
    },
    {
      "global_rank": 26993,
      "category_rank": 15,
      "domain": "cancerresearchuk.org",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 2988231.8236164,
      "curr_month_visits": 2988231.8236164,
      "unique_users": 1988161.44056377,
      "pages_per_visit": 2.04073880465774
    },
    {
      "global_rank": 39856,
      "category_rank": 15,
      "domain": "zwangerschapspagina.nl",
      "category": "Health/Womens_Health",
      "avg_month_visits": 1653056.14472696,
      "curr_month_visits": 1653056.14472696,
      "unique_users": 654563.524928129,
      "pages_per_visit": 2.73289735888767
    },
    {
      "global_rank": 15408,
      "category_rank": 15,
      "domain": "basic-fit.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 4554713.37544382,
      "curr_month_visits": 4554713.37544382,
      "unique_users": 2254824.0490522,
      "pages_per_visit": 3.04146048298012
    },
    {
      "global_rank": 38272,
      "category_rank": 15,
      "domain": "stransa.co.jp",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 1720259.2478089,
      "curr_month_visits": 1720259.2478089,
      "unique_users": 389922.472060347,
      "pages_per_visit": 5.16643520493296
    },
    {
      "global_rank": 52273,
      "category_rank": 15,
      "domain": "kimbino.hu",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 499453.24508443,
      "curr_month_visits": 499453.24508443,
      "unique_users": 217128.931357518,
      "pages_per_visit": 13.8727149613073
    },
    {
      "global_rank": 24072,
      "category_rank": 15,
      "domain": "calm.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 3226807.9164602,
      "curr_month_visits": 3226807.9164602,
      "unique_users": 1912250.60855069,
      "pages_per_visit": 2.16169106854146
    },
    {
      "global_rank": 51844,
      "category_rank": 15,
      "domain": "zenleafdispensaries.com",
      "category": "Health/Addictions",
      "avg_month_visits": 1018631.84147385,
      "curr_month_visits": 1018631.84147385,
      "unique_users": 349472.230967599,
      "pages_per_visit": 3.75054319607309
    },
    {
      "global_rank": 164771,
      "category_rank": 15,
      "domain": "carecollabo.jp",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 305154.222574189,
      "curr_month_visits": 305154.222574189,
      "unique_users": 19659.9567173444,
      "pages_per_visit": 5.44816863394503
    },
    {
      "global_rank": 7899,
      "category_rank": 15,
      "domain": "lww.com",
      "category": "Health/Medicine",
      "avg_month_visits": 10011261.9995413,
      "curr_month_visits": 10011261.9995413,
      "unique_users": 4566197.33638773,
      "pages_per_visit": 2.88573521496489
    },
    {
      "global_rank": 47150,
      "category_rank": 15,
      "domain": "kenei-pharm.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1721530.53379458,
      "curr_month_visits": 1721530.53379458,
      "unique_users": 1388859.18808491,
      "pages_per_visit": 1.36003057728653
    },
    {
      "global_rank": 2538,
      "category_rank": 15,
      "domain": "alodokter.com",
      "category": "Health/Health",
      "avg_month_visits": 33567718.7379944,
      "curr_month_visits": 33567718.7379944,
      "unique_users": 15818538.3030165,
      "pages_per_visit": 1.78700597930587
    },
    {
      "global_rank": 27460,
      "category_rank": 16,
      "domain": "bhf.org.uk",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 2864474.06161793,
      "curr_month_visits": 2864474.06161793,
      "unique_users": 1986466.0493037,
      "pages_per_visit": 2.31494075341658
    },
    {
      "global_rank": 7839,
      "category_rank": 16,
      "domain": "drogariasaopaulo.com.br",
      "category": "Health/Pharmacy",
      "avg_month_visits": 9070905.9313829,
      "curr_month_visits": 9070905.9313829,
      "unique_users": 5604325.64612814,
      "pages_per_visit": 2.54473103412141
    },
    {
      "global_rank": 15417,
      "category_rank": 16,
      "domain": "bulk.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 3307729.50711574,
      "curr_month_visits": 3307729.50711574,
      "unique_users": 1584753.6396244,
      "pages_per_visit": 5.4801865455473
    },
    {
      "global_rank": 38794,
      "category_rank": 16,
      "domain": "dentalxchange.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 1393087.03350849,
      "curr_month_visits": 1393087.03350849,
      "unique_users": 173863.089821274,
      "pages_per_visit": 6.89871755661396
    },
    {
      "global_rank": 41140,
      "category_rank": 16,
      "domain": "eltern.de",
      "category": "Health/Womens_Health",
      "avg_month_visits": 2154202.77429446,
      "curr_month_visits": 2154202.77429446,
      "unique_users": 1267954.61445167,
      "pages_per_visit": 1.57736273676741
    },
    {
      "global_rank": 2677,
      "category_rank": 16,
      "domain": "medlineplus.gov",
      "category": "Health/Health",
      "avg_month_visits": 34624618.5009259,
      "curr_month_visits": 34624618.5009259,
      "unique_users": 24532989.3197126,
      "pages_per_visit": 1.44793477621987
    },
    {
      "global_rank": 7993,
      "category_rank": 16,
      "domain": "mp.pl",
      "category": "Health/Medicine",
      "avg_month_visits": 10770825.8186332,
      "curr_month_visits": 10770825.8186332,
      "unique_users": 4956447.92256895,
      "pages_per_visit": 1.86175474116966
    },
    {
      "global_rank": 165538,
      "category_rank": 16,
      "domain": "pflegecampus.de",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 174266.754098592,
      "curr_month_visits": 174266.754098592,
      "unique_users": 46071.5630088993,
      "pages_per_visit": 12.2358958234963
    },
    {
      "global_rank": 54841,
      "category_rank": 16,
      "domain": "perfactive.fr",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 816932.081369462,
      "curr_month_visits": 816932.081369462,
      "unique_users": 262097.537911856,
      "pages_per_visit": 6.0058864997811
    },
    {
      "global_rank": 202744,
      "category_rank": 16,
      "domain": "unidru.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 159668.433685603,
      "curr_month_visits": 159668.433685603,
      "unique_users": 80570.667797153,
      "pages_per_visit": 5.80245611767228
    },
    {
      "global_rank": 53912,
      "category_rank": 16,
      "domain": "vghtpe.gov.tw",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 1106669.95051571,
      "curr_month_visits": 1106669.95051571,
      "unique_users": 586079.117142699,
      "pages_per_visit": 4.41561870410848
    },
    {
      "global_rank": 56953,
      "category_rank": 16,
      "domain": "allbud.com",
      "category": "Health/Addictions",
      "avg_month_visits": 1272280.99827057,
      "curr_month_visits": 1272280.99827057,
      "unique_users": 611450.836113115,
      "pages_per_visit": 2.07376772218836
    },
    {
      "global_rank": 25114,
      "category_rank": 16,
      "domain": "talkspace.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1990378.69846688,
      "curr_month_visits": 1990378.69846688,
      "unique_users": 1083311.79084076,
      "pages_per_visit": 5.57713981437219
    },
    {
      "global_rank": 74014,
      "category_rank": 16,
      "domain": "axiscare.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 637511.883964201,
      "curr_month_visits": 637511.883964201,
      "unique_users": 94296.8186287782,
      "pages_per_visit": 9.16345684964083
    },
    {
      "global_rank": 47512,
      "category_rank": 16,
      "domain": "medical-care.net",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1357369.00032934,
      "curr_month_visits": 1357369.00032934,
      "unique_users": 105909.290426156,
      "pages_per_visit": 4.87014036146626
    },
    {
      "global_rank": 71587,
      "category_rank": 16,
      "domain": "clinicsense.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 773452.675853392,
      "curr_month_visits": 773452.675853392,
      "unique_users": 297645.328098444,
      "pages_per_visit": 3.35990340097166
    },
    {
      "global_rank": 74568,
      "category_rank": 17,
      "domain": "centreofexcellence.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 788987.959008001,
      "curr_month_visits": 788987.959008001,
      "unique_users": 375893.816764999,
      "pages_per_visit": 3.06068768245484
    },
    {
      "global_rank": 166377,
      "category_rank": 17,
      "domain": "granfarma.it",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 222181.172982998,
      "curr_month_visits": 222181.172982998,
      "unique_users": 154431.850913691,
      "pages_per_visit": 5.49324417580853
    },
    {
      "global_rank": 28526,
      "category_rank": 17,
      "domain": "freestyle.abbott",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 2500875.82179081,
      "curr_month_visits": 2500875.82179081,
      "unique_users": 1498373.10775436,
      "pages_per_visit": 2.33222645590391
    },
    {
      "global_rank": 203419,
      "category_rank": 17,
      "domain": "adaptiveems.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 199971.143797103,
      "curr_month_visits": 199971.143797103,
      "unique_users": 55448.7997129277,
      "pages_per_visit": 3.97192935125261
    },
    {
      "global_rank": 25154,
      "category_rank": 17,
      "domain": "thecmhs.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1149457.73142987,
      "curr_month_visits": 1149457.73142987,
      "unique_users": 773610.419201233,
      "pages_per_visit": 1.55315413544751
    },
    {
      "global_rank": 74360,
      "category_rank": 17,
      "domain": "modivcare.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 687819.314554939,
      "curr_month_visits": 687819.314554939,
      "unique_users": 200205.654946254,
      "pages_per_visit": 4.64217722523565
    },
    {
      "global_rank": 8131,
      "category_rank": 17,
      "domain": "pharmeasy.in",
      "category": "Health/Pharmacy",
      "avg_month_visits": 9541535.66313975,
      "curr_month_visits": 9541535.66313975,
      "unique_users": 5792610.29475357,
      "pages_per_visit": 2.53049260761404
    },
    {
      "global_rank": 48050,
      "category_rank": 17,
      "domain": "iqvia.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1196676.70241344,
      "curr_month_visits": 1196676.70241344,
      "unique_users": 538915.65608325,
      "pages_per_visit": 4.6191014601999
    },
    {
      "global_rank": 39291,
      "category_rank": 17,
      "domain": "codental.com.br",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 821777.17580068,
      "curr_month_visits": 821777.17580068,
      "unique_users": 265958.588401614,
      "pages_per_visit": 13.6377997204654
    },
    {
      "global_rank": 2697,
      "category_rank": 17,
      "domain": "cdc.gov",
      "category": "Health/Health",
      "avg_month_visits": 27129057.5683674,
      "curr_month_visits": 27129057.5683674,
      "unique_users": 17957264.763682,
      "pages_per_visit": 2.19036771706979
    },
    {
      "global_rank": 15763,
      "category_rank": 17,
      "domain": "muscleandstrength.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 4445206.74339682,
      "curr_month_visits": 4445206.74339682,
      "unique_users": 2024179.36029851,
      "pages_per_visit": 3.26359312133474
    },
    {
      "global_rank": 8779,
      "category_rank": 17,
      "domain": "providence.org",
      "category": "Health/Medicine",
      "avg_month_visits": 5931018.16562614,
      "curr_month_visits": 5931018.16562614,
      "unique_users": 2198620.85334712,
      "pages_per_visit": 5.82194141004519
    },
    {
      "global_rank": 55876,
      "category_rank": 17,
      "domain": "health.state.mn.us",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 1441467.72385872,
      "curr_month_visits": 1441467.72385872,
      "unique_users": 645349.039608565,
      "pages_per_visit": 2.47425671840352
    },
    {
      "global_rank": 60682,
      "category_rank": 17,
      "domain": "joyous.team",
      "category": "Health/Addictions",
      "avg_month_visits": 1227148.03860274,
      "curr_month_visits": 1227148.03860274,
      "unique_users": 266036.721041113,
      "pages_per_visit": 2.61994894323799
    },
    {
      "global_rank": 43816,
      "category_rank": 17,
      "domain": "llsdzktnxwnnr.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 2451616.58918235,
      "curr_month_visits": 2451616.58918235,
      "unique_users": 1733763.05250404,
      "pages_per_visit": 1.20392908350424
    },
    {
      "global_rank": 57111,
      "category_rank": 17,
      "domain": "babyhome.com.tw",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 960843.879162562,
      "curr_month_visits": 960843.879162562,
      "unique_users": 564400.199403037,
      "pages_per_visit": 2.34591989315431
    },
    {
      "global_rank": 8265,
      "category_rank": 18,
      "domain": "consultaremedios.com.br",
      "category": "Health/Pharmacy",
      "avg_month_visits": 10845836.2032842,
      "curr_month_visits": 10845836.2032842,
      "unique_users": 6847205.63696087,
      "pages_per_visit": 1.80993475905153
    },
    {
      "global_rank": 79313,
      "category_rank": 18,
      "domain": "caring.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 584664.574748312,
      "curr_month_visits": 584664.574748312,
      "unique_users": 451161.204626676,
      "pages_per_visit": 5.14298287221237
    },
    {
      "global_rank": 47065,
      "category_rank": 18,
      "domain": "babycentre.co.uk",
      "category": "Health/Womens_Health",
      "avg_month_visits": 1680497.13748221,
      "curr_month_visits": 1680497.13748221,
      "unique_users": 1004300.42187883,
      "pages_per_visit": 1.96172276067003
    },
    {
      "global_rank": 57678,
      "category_rank": 18,
      "domain": "happiestbaby.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 1356062.56093517,
      "curr_month_visits": 1356062.56093517,
      "unique_users": 928754.172509025,
      "pages_per_visit": 1.73854389409187
    },
    {
      "global_rank": 62935,
      "category_rank": 18,
      "domain": "shroomery.org",
      "category": "Health/Addictions",
      "avg_month_visits": 778032.497869932,
      "curr_month_visits": 778032.497869932,
      "unique_users": 351192.478127419,
      "pages_per_visit": 3.69028283391108
    },
    {
      "global_rank": 16969,
      "category_rank": 18,
      "domain": "unimeal.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 4220344.36400186,
      "curr_month_visits": 4220344.36400186,
      "unique_users": 2384522.7581804,
      "pages_per_visit": 2.80567842631384
    },
    {
      "global_rank": 8809,
      "category_rank": 18,
      "domain": "doccheck.com",
      "category": "Health/Medicine",
      "avg_month_visits": 8789978.60621817,
      "curr_month_visits": 8789978.60621817,
      "unique_users": 3833047.67090196,
      "pages_per_visit": 2.14080567393985
    },
    {
      "global_rank": 75975,
      "category_rank": 18,
      "domain": "mercolamarket.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 824474.746537505,
      "curr_month_visits": 824474.746537505,
      "unique_users": 252659.216854495,
      "pages_per_visit": 2.38673838702881
    },
    {
      "global_rank": 48151,
      "category_rank": 18,
      "domain": "imedidata.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1093331.03119645,
      "curr_month_visits": 1093331.03119645,
      "unique_users": 84572.3073263714,
      "pages_per_visit": 9.89966749432
    },
    {
      "global_rank": 26248,
      "category_rank": 18,
      "domain": "helloalma.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 2098543.70957018,
      "curr_month_visits": 2098543.70957018,
      "unique_users": 507308.885986836,
      "pages_per_visit": 6.75510891541834
    },
    {
      "global_rank": 206888,
      "category_rank": 18,
      "domain": "rocketrx.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 206681.313300046,
      "curr_month_visits": 206681.313300046,
      "unique_users": 83171.9911256082,
      "pages_per_visit": 4.12438942774791
    },
    {
      "global_rank": 56453,
      "category_rank": 18,
      "domain": "ndmctsgh.edu.tw",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 999867.632205622,
      "curr_month_visits": 999867.632205622,
      "unique_users": 487063.448644486,
      "pages_per_visit": 3.98462424482713
    },
    {
      "global_rank": 31324,
      "category_rank": 18,
      "domain": "news-medical.net",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 2874002.31585737,
      "curr_month_visits": 2874002.31585737,
      "unique_users": 2124082.1600488,
      "pages_per_visit": 1.44603588275227
    },
    {
      "global_rank": 174561,
      "category_rank": 18,
      "domain": "shohgaisha.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 352086.505145005,
      "curr_month_visits": 352086.505145005,
      "unique_users": 287193.770331866,
      "pages_per_visit": 1.54633251707277
    },
    {
      "global_rank": 40726,
      "category_rank": 18,
      "domain": "dentalofficetoolkit.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 1827107.60050457,
      "curr_month_visits": 1827107.60050457,
      "unique_users": 180093.984461671,
      "pages_per_visit": 5.84886674364388
    },
    {
      "global_rank": 2747,
      "category_rank": 18,
      "domain": "v2i8b.com",
      "category": "Health/Health",
      "avg_month_visits": 28779957.9782468,
      "curr_month_visits": 28779957.9782468,
      "unique_users": 9509442.77768907,
      "pages_per_visit": 1.11047984006428
    },
    {
      "global_rank": 26948,
      "category_rank": 19,
      "domain": "additudemag.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 3196094.33790129,
      "curr_month_visits": 3196094.33790129,
      "unique_users": 1792151.61638316,
      "pages_per_visit": 2.11006047389092
    },
    {
      "global_rank": 221336,
      "category_rank": 19,
      "domain": "bigdickguide.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 215411.083350195,
      "curr_month_visits": 215411.083350195,
      "unique_users": 110498.580933947,
      "pages_per_visit": 3.17752847874013
    },
    {
      "global_rank": 41731,
      "category_rank": 19,
      "domain": "mydentalhub.online",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 1788655.67016918,
      "curr_month_visits": 1788655.67016918,
      "unique_users": 935214.450649308,
      "pages_per_visit": 2.59747365130172
    },
    {
      "global_rank": 48382,
      "category_rank": 19,
      "domain": "volleyballworld.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 1350159.99599027,
      "curr_month_visits": 1350159.99599027,
      "unique_users": 516676.019594204,
      "pages_per_visit": 4.15486756143033
    },
    {
      "global_rank": 8437,
      "category_rank": 19,
      "domain": "farmaciasguadalajara.com",
      "category": "Health/Pharmacy",
      "avg_month_visits": 7127712.55704586,
      "curr_month_visits": 7127712.55704586,
      "unique_users": 3806226.19700738,
      "pages_per_visit": 3.2230057657241
    },
    {
      "global_rank": 53902,
      "category_rank": 19,
      "domain": "merck.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1125661.2494129,
      "curr_month_visits": 1125661.2494129,
      "unique_users": 392225.035713377,
      "pages_per_visit": 4.1518226719664
    },
    {
      "global_rank": 64495,
      "category_rank": 19,
      "domain": "growdiaries.com",
      "category": "Health/Addictions",
      "avg_month_visits": 825327.974323967,
      "curr_month_visits": 825327.974323967,
      "unique_users": 235073.012449189,
      "pages_per_visit": 4.87523658658057
    },
    {
      "global_rank": 17371,
      "category_rank": 19,
      "domain": "nutritionix.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 4562555.09161731,
      "curr_month_visits": 4562555.09161731,
      "unique_users": 2897654.30211927,
      "pages_per_visit": 2.06172697686481
    },
    {
      "global_rank": 177222,
      "category_rank": 19,
      "domain": "connect-syurou.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 173252.640908127,
      "curr_month_visits": 173252.640908127,
      "unique_users": 87119.0629326795,
      "pages_per_visit": 7.58150920763529
    },
    {
      "global_rank": 67003,
      "category_rank": 19,
      "domain": "raisingchildren.net.au",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 1265320.71206296,
      "curr_month_visits": 1265320.71206296,
      "unique_users": 792313.635156659,
      "pages_per_visit": 1.64035948575204
    },
    {
      "global_rank": 36218,
      "category_rank": 19,
      "domain": "dermnetnz.org",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 2372740.39364895,
      "curr_month_visits": 2372740.39364895,
      "unique_users": 1524383.02323236,
      "pages_per_visit": 1.73649866001991
    },
    {
      "global_rank": 87616,
      "category_rank": 19,
      "domain": "truelinkfinancial.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 668920.341914841,
      "curr_month_visits": 668920.341914841,
      "unique_users": 149873.014386124,
      "pages_per_visit": 3.35042463955664
    },
    {
      "global_rank": 78286,
      "category_rank": 19,
      "domain": "resalib.fr",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 862065.060721974,
      "curr_month_visits": 862065.060721974,
      "unique_users": 452228.605830543,
      "pages_per_visit": 2.28949671482599
    },
    {
      "global_rank": 56949,
      "category_rank": 19,
      "domain": "hvzeeland.nl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 1294750.83393802,
      "curr_month_visits": 1294750.83393802,
      "unique_users": 186215.358167412,
      "pages_per_visit": 2.48080017127709
    },
    {
      "global_rank": 9217,
      "category_rank": 19,
      "domain": "sutterhealth.org",
      "category": "Health/Medicine",
      "avg_month_visits": 5468237.21355091,
      "curr_month_visits": 5468237.21355091,
      "unique_users": 1769143.39587828,
      "pages_per_visit": 6.15522669364972
    },
    {
      "global_rank": 2836,
      "category_rank": 19,
      "domain": "tuasaude.com",
      "category": "Health/Health",
      "avg_month_visits": 30898115.1451938,
      "curr_month_visits": 30898115.1451938,
      "unique_users": 19670104.5913516,
      "pages_per_visit": 1.50437714377278
    },
    {
      "global_rank": 89401,
      "category_rank": 20,
      "domain": "ultrahhc.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 311843.735533808,
      "curr_month_visits": 311843.735533808,
      "unique_users": 27617.247504645,
      "pages_per_visit": 24.723554298676
    },
    {
      "global_rank": 61544,
      "category_rank": 20,
      "domain": "sygeforsikring.dk",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 686176.116424578,
      "curr_month_visits": 686176.116424578,
      "unique_users": 401541.30219745,
      "pages_per_visit": 5.22918598529855
    },
    {
      "global_rank": 40434,
      "category_rank": 20,
      "domain": "kff.org",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1590608.35487986,
      "curr_month_visits": 1590608.35487986,
      "unique_users": 1094091.40091528,
      "pages_per_visit": 2.1132235112174
    },
    {
      "global_rank": 180946,
      "category_rank": 20,
      "domain": "hdsunflower.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 237540.343918092,
      "curr_month_visits": 237540.343918092,
      "unique_users": 109765.567106651,
      "pages_per_visit": 3.56111874007632
    },
    {
      "global_rank": 55207,
      "category_rank": 20,
      "domain": "novartis.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1135725.4928884,
      "curr_month_visits": 1135725.4928884,
      "unique_users": 649530.871282512,
      "pages_per_visit": 2.55640990444416
    },
    {
      "global_rank": 67928,
      "category_rank": 20,
      "domain": "childmind.org",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 1073054.91151334,
      "curr_month_visits": 1073054.91151334,
      "unique_users": 728780.234739804,
      "pages_per_visit": 1.62711208737978
    },
    {
      "global_rank": 9729,
      "category_rank": 20,
      "domain": "24forcare.com",
      "category": "Health/Medicine",
      "avg_month_visits": 6220002.30617084,
      "curr_month_visits": 6220002.30617084,
      "unique_users": 1289605.68795883,
      "pages_per_visit": 4.59782171037798
    },
    {
      "global_rank": 2978,
      "category_rank": 20,
      "domain": "nhathuoclongchau.com.vn",
      "category": "Health/Health",
      "avg_month_visits": 28105513.6444404,
      "curr_month_visits": 28105513.6444404,
      "unique_users": 12386571.9830222,
      "pages_per_visit": 1.6340573629959
    },
    {
      "global_rank": 78692,
      "category_rank": 20,
      "domain": "narayana-verlag.de",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 625002.182660748,
      "curr_month_visits": 625002.182660748,
      "unique_users": 363802.460809925,
      "pages_per_visit": 3.74616169270175
    },
    {
      "global_rank": 68482,
      "category_rank": 20,
      "domain": "grower.ch",
      "category": "Health/Addictions",
      "avg_month_visits": 976466.956075918,
      "curr_month_visits": 976466.956075918,
      "unique_users": 226147.075428167,
      "pages_per_visit": 3.9076002509366
    },
    {
      "global_rank": 28323,
      "category_rank": 20,
      "domain": "h-navi.jp",
      "category": "Health/Mental_Health",
      "avg_month_visits": 2622338.11876045,
      "curr_month_visits": 2622338.11876045,
      "unique_users": 1277158.390628,
      "pages_per_visit": 2.78226514159197
    },
    {
      "global_rank": 227120,
      "category_rank": 20,
      "domain": "airmedscrubs.com.au",
      "category": "Health/Mens_Health",
      "avg_month_visits": 118834.880345766,
      "curr_month_visits": 118834.880345766,
      "unique_users": 57938.5601596648,
      "pages_per_visit": 6.14579427092484
    },
    {
      "global_rank": 41907,
      "category_rank": 20,
      "domain": "chatmix.com.br",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 643306.592674557,
      "curr_month_visits": 643306.592674557,
      "unique_users": 86002.9637875025,
      "pages_per_visit": 34.602514202451
    },
    {
      "global_rank": 8487,
      "category_rank": 20,
      "domain": "fahorro.com",
      "category": "Health/Pharmacy",
      "avg_month_visits": 8970734.14565156,
      "curr_month_visits": 8970734.14565156,
      "unique_users": 5492620.78006455,
      "pages_per_visit": 2.19085510885031
    },
    {
      "global_rank": 18403,
      "category_rank": 20,
      "domain": "framar.bg",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 4397081.60175171,
      "curr_month_visits": 4397081.60175171,
      "unique_users": 1516148.2501281,
      "pages_per_visit": 1.90305003801118
    },
    {
      "global_rank": 48575,
      "category_rank": 20,
      "domain": "reproduccionasistida.org",
      "category": "Health/Womens_Health",
      "avg_month_visits": 1917598.86151261,
      "curr_month_visits": 1917598.86151261,
      "unique_users": 1292322.59829087,
      "pages_per_visit": 1.73539458168013
    },
    {
      "global_rank": 9047,
      "category_rank": 21,
      "domain": "secom-owel.jp",
      "category": "Health/Pharmacy",
      "avg_month_visits": 6118199.07643458,
      "curr_month_visits": 6118199.07643458,
      "unique_users": 425212.807905926,
      "pages_per_visit": 13.9365978823823
    },
    {
      "global_rank": 248490,
      "category_rank": 21,
      "domain": "shop.drinkag1.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 166358.173253503,
      "curr_month_visits": 166358.173253503,
      "unique_users": 108684.607600455,
      "pages_per_visit": 2.10539264273791
    },
    {
      "global_rank": 2991,
      "category_rank": 21,
      "domain": "imss.gob.mx",
      "category": "Health/Health",
      "avg_month_visits": 15208089.2785734,
      "curr_month_visits": 15208089.2785734,
      "unique_users": 6141497.02931709,
      "pages_per_visit": 7.57840330350072
    },
    {
      "global_rank": 81296,
      "category_rank": 21,
      "domain": "ksamata.ru",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 637231.603953783,
      "curr_month_visits": 637231.603953783,
      "unique_users": 184042.800433647,
      "pages_per_visit": 3.73732580958551
    },
    {
      "global_rank": 29321,
      "category_rank": 21,
      "domain": "psychologies.ru",
      "category": "Health/Mental_Health",
      "avg_month_visits": 3029293.24923594,
      "curr_month_visits": 3029293.24923594,
      "unique_users": 1551957.54251147,
      "pages_per_visit": 2.00049198222878
    },
    {
      "global_rank": 47317,
      "category_rank": 21,
      "domain": "myitero.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 1132202.38576201,
      "curr_month_visits": 1132202.38576201,
      "unique_users": 126136.762021193,
      "pages_per_visit": 6.6481646830523
    },
    {
      "global_rank": 10704,
      "category_rank": 21,
      "domain": "kp.org",
      "category": "Health/Medicine",
      "avg_month_visits": 5713855.55301461,
      "curr_month_visits": 5713855.55301461,
      "unique_users": 1644963.95825553,
      "pages_per_visit": 5.1438213870633
    },
    {
      "global_rank": 18508,
      "category_rank": 21,
      "domain": "verywellfit.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 5180657.85464981,
      "curr_month_visits": 5180657.85464981,
      "unique_users": 3851718.26240378,
      "pages_per_visit": 1.49167530212738
    },
    {
      "global_rank": 189990,
      "category_rank": 21,
      "domain": "set-works.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 247172.166419098,
      "curr_month_visits": 247172.166419098,
      "unique_users": 33821.4968066276,
      "pages_per_visit": 3.5726477166218
    },
    {
      "global_rank": 65915,
      "category_rank": 21,
      "domain": "cri.it",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 547474.581536082,
      "curr_month_visits": 547474.581536082,
      "unique_users": 178369.740326597,
      "pages_per_visit": 6.46462755278385
    },
    {
      "global_rank": 69587,
      "category_rank": 21,
      "domain": "well-net.org",
      "category": "Health/Addictions",
      "avg_month_visits": 758445.928486738,
      "curr_month_visits": 758445.928486738,
      "unique_users": 179524.331142285,
      "pages_per_visit": 4.44329374343438
    },
    {
      "global_rank": 50102,
      "category_rank": 21,
      "domain": "clearblue.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 1665260.93016267,
      "curr_month_visits": 1665260.93016267,
      "unique_users": 1095419.24858421,
      "pages_per_visit": 1.5747745748787
    },
    {
      "global_rank": 93958,
      "category_rank": 21,
      "domain": "aloraplus.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 378588.787798427,
      "curr_month_visits": 378588.787798427,
      "unique_users": 20923.799926995,
      "pages_per_visit": 22.1647654889684
    },
    {
      "global_rank": 42340,
      "category_rank": 21,
      "domain": "cancer.ca",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 2005884.1193696,
      "curr_month_visits": 2005884.1193696,
      "unique_users": 1365100.20539848,
      "pages_per_visit": 1.80609701634834
    },
    {
      "global_rank": 68709,
      "category_rank": 21,
      "domain": "7ya.ru",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 1008282.36651051,
      "curr_month_visits": 1008282.36651051,
      "unique_users": 499582.64231689,
      "pages_per_visit": 2.11908774093086
    },
    {
      "global_rank": 56493,
      "category_rank": 21,
      "domain": "bayer.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1047376.23118986,
      "curr_month_visits": 1047376.23118986,
      "unique_users": 623166.351283614,
      "pages_per_visit": 2.650623619363
    },
    {
      "global_rank": 3071,
      "category_rank": 22,
      "domain": "halodoc.com",
      "category": "Health/Health",
      "avg_month_visits": 26732371.9953598,
      "curr_month_visits": 26732371.9953598,
      "unique_users": 15334695.2625491,
      "pages_per_visit": 2.11791339127996
    },
    {
      "global_rank": 192903,
      "category_rank": 22,
      "domain": "enableme.de",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 253154.909090345,
      "curr_month_visits": 253154.909090345,
      "unique_users": 191316.150668032,
      "pages_per_visit": 1.60009681932275
    },
    {
      "global_rank": 74571,
      "category_rank": 22,
      "domain": "madeformums.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 972086.986386258,
      "curr_month_visits": 972086.986386258,
      "unique_users": 640862.074225747,
      "pages_per_visit": 1.57664465898801
    },
    {
      "global_rank": 9658,
      "category_rank": 22,
      "domain": "netmeds.com",
      "category": "Health/Pharmacy",
      "avg_month_visits": 7413794.75074908,
      "curr_month_visits": 7413794.75074908,
      "unique_users": 4585064.29733523,
      "pages_per_visit": 2.53616797634036
    },
    {
      "global_rank": 29726,
      "category_rank": 22,
      "domain": "psicoadvisor.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 2953561.37139455,
      "curr_month_visits": 2953561.37139455,
      "unique_users": 1329904.02372894,
      "pages_per_visit": 1.51394540596401
    },
    {
      "global_rank": 67057,
      "category_rank": 22,
      "domain": "johanniter.de",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 761977.570407648,
      "curr_month_visits": 761977.570407648,
      "unique_users": 406047.658781977,
      "pages_per_visit": 3.94524562339175
    },
    {
      "global_rank": 10964,
      "category_rank": 22,
      "domain": "bmj.com",
      "category": "Health/Medicine",
      "avg_month_visits": 7005546.91654352,
      "curr_month_visits": 7005546.91654352,
      "unique_users": 4172061.62792402,
      "pages_per_visit": 2.09860709935775
    },
    {
      "global_rank": 71214,
      "category_rank": 22,
      "domain": "rehabfamily.com",
      "category": "Health/Addictions",
      "avg_month_visits": 1006923.71230531,
      "curr_month_visits": 1006923.71230531,
      "unique_users": 744086.638039878,
      "pages_per_visit": 1.30014027295517
    },
    {
      "global_rank": 256440,
      "category_rank": 22,
      "domain": "citycave.com.au",
      "category": "Health/Mens_Health",
      "avg_month_visits": 178588.016636528,
      "curr_month_visits": 178588.016636528,
      "unique_users": 124267.418455077,
      "pages_per_visit": 2.19664948453003
    },
    {
      "global_rank": 51546,
      "category_rank": 22,
      "domain": "rund-ums-baby.de",
      "category": "Health/Womens_Health",
      "avg_month_visits": 1509072.02199209,
      "curr_month_visits": 1509072.02199209,
      "unique_users": 717591.261765443,
      "pages_per_visit": 2.14118335285022
    },
    {
      "global_rank": 43126,
      "category_rank": 22,
      "domain": "farmasiet.no",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1074155.57156037,
      "curr_month_visits": 1074155.57156037,
      "unique_users": 558555.060380424,
      "pages_per_visit": 5.02411136069538
    },
    {
      "global_rank": 56754,
      "category_rank": 22,
      "domain": "otsuka.co.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1490262.54398478,
      "curr_month_visits": 1490262.54398478,
      "unique_users": 1171539.33029479,
      "pages_per_visit": 1.62219712566509
    },
    {
      "global_rank": 18568,
      "category_rank": 22,
      "domain": "roguefitness.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 2513965.09815608,
      "curr_month_visits": 2513965.09815608,
      "unique_users": 1207071.25645049,
      "pages_per_visit": 3.77372984952132
    },
    {
      "global_rank": 47790,
      "category_rank": 22,
      "domain": "cloud.myitero.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 1118646.03179747,
      "curr_month_visits": 1118646.03179747,
      "unique_users": 120834.963057604,
      "pages_per_visit": 6.71064904834274
    },
    {
      "global_rank": 30122,
      "category_rank": 23,
      "domain": "halaxy.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1821473.8646449,
      "curr_month_visits": 1821473.8646449,
      "unique_users": 327146.376155665,
      "pages_per_visit": 7.55315268666205
    },
    {
      "global_rank": 18697,
      "category_rank": 23,
      "domain": "smartfit.com.br",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 3329415.97065821,
      "curr_month_visits": 3329415.97065821,
      "unique_users": 1979567.32091567,
      "pages_per_visit": 3.0913346462522
    },
    {
      "global_rank": 73195,
      "category_rank": 23,
      "domain": "psychonautwiki.org",
      "category": "Health/Addictions",
      "avg_month_visits": 859053.140194979,
      "curr_month_visits": 859053.140194979,
      "unique_users": 315360.85553531,
      "pages_per_visit": 3.60110507003018
    },
    {
      "global_rank": 52215,
      "category_rank": 23,
      "domain": "helloclue.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 1667234.03670302,
      "curr_month_visits": 1667234.03670302,
      "unique_users": 1205287.50010621,
      "pages_per_visit": 1.37549116818251
    },
    {
      "global_rank": 45401,
      "category_rank": 23,
      "domain": "ableapp.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1332311.90789837,
      "curr_month_visits": 1332311.90789837,
      "unique_users": 817497.861493359,
      "pages_per_visit": 4.67207460610194
    },
    {
      "global_rank": 3372,
      "category_rank": 23,
      "domain": "doctoralia.com.br",
      "category": "Health/Health",
      "avg_month_visits": 23633542.6646719,
      "curr_month_visits": 23633542.6646719,
      "unique_users": 13086613.2542788,
      "pages_per_visit": 2.22309024962497
    },
    {
      "global_rank": 47807,
      "category_rank": 23,
      "domain": "curvehero.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 555834.30131131,
      "curr_month_visits": 555834.30131131,
      "unique_users": 40747.2503467456,
      "pages_per_visit": 37.1832845817905
    },
    {
      "global_rank": 9960,
      "category_rank": 23,
      "domain": "mintmanga.one",
      "category": "Health/Pharmacy",
      "avg_month_visits": 4189801.6537803,
      "curr_month_visits": 4189801.6537803,
      "unique_users": 813164.099661423,
      "pages_per_visit": 14.3672600932546
    },
    {
      "global_rank": 58392,
      "category_rank": 23,
      "domain": "merckgroup.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1116303.38376398,
      "curr_month_visits": 1116303.38376398,
      "unique_users": 403874.13718345,
      "pages_per_visit": 3.5385131643707
    },
    {
      "global_rank": 79073,
      "category_rank": 23,
      "domain": "serpadres.es",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 1013468.4563427,
      "curr_month_visits": 1013468.4563427,
      "unique_users": 698598.38155998,
      "pages_per_visit": 1.71656291143851
    },
    {
      "global_rank": 11126,
      "category_rank": 23,
      "domain": "103.by",
      "category": "Health/Medicine",
      "avg_month_visits": 6371705.53804192,
      "curr_month_visits": 6371705.53804192,
      "unique_users": 2647167.34632994,
      "pages_per_visit": 2.78839270174385
    },
    {
      "global_rank": 100505,
      "category_rank": 23,
      "domain": "lifelinesupport.org",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 584236.479171583,
      "curr_month_visits": 584236.479171583,
      "unique_users": 401539.635006918,
      "pages_per_visit": 2.1034879181438
    },
    {
      "global_rank": 70830,
      "category_rank": 23,
      "domain": "imagetrendelite.com",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 767521.149298265,
      "curr_month_visits": 767521.149298265,
      "unique_users": 67550.9449127861,
      "pages_per_visit": 7.28395498636799
    },
    {
      "global_rank": 194652,
      "category_rank": 23,
      "domain": "handicap.fr",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 294554.965504066,
      "curr_month_visits": 294554.965504066,
      "unique_users": 202422.514745704,
      "pages_per_visit": 1.69040295086524
    },
    {
      "global_rank": 261739,
      "category_rank": 23,
      "domain": "drakner.ru",
      "category": "Health/Mens_Health",
      "avg_month_visits": 198779.015656064,
      "curr_month_visits": 198779.015656064,
      "unique_users": 101651.690005553,
      "pages_per_visit": 1.60279497675505
    },
    {
      "global_rank": 86564,
      "category_rank": 23,
      "domain": "studio-nd.ru",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 360378.309525938,
      "curr_month_visits": 360378.309525938,
      "unique_users": 60031.5087795818,
      "pages_per_visit": 3.59811397250346
    },
    {
      "global_rank": 55191,
      "category_rank": 24,
      "domain": "americanpregnancy.org",
      "category": "Health/Womens_Health",
      "avg_month_visits": 1356282.42591762,
      "curr_month_visits": 1356282.42591762,
      "unique_users": 887763.368278827,
      "pages_per_visit": 1.72861805951703
    },
    {
      "global_rank": 10829,
      "category_rank": 24,
      "domain": "asna.ru",
      "category": "Health/Pharmacy",
      "avg_month_visits": 7086924.21243854,
      "curr_month_visits": 7086924.21243854,
      "unique_users": 4932309.72493147,
      "pages_per_visit": 2.0867936315551
    },
    {
      "global_rank": 77433,
      "category_rank": 24,
      "domain": "ons-ehr.nl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 849723.195390344,
      "curr_month_visits": 849723.195390344,
      "unique_users": 158644.234726451,
      "pages_per_visit": 2.9910665219218
    },
    {
      "global_rank": 11360,
      "category_rank": 24,
      "domain": "massgeneralbrigham.org",
      "category": "Health/Medicine",
      "avg_month_visits": 4560298.57108521,
      "curr_month_visits": 4560298.57108521,
      "unique_users": 1715032.06527986,
      "pages_per_visit": 5.82440635139555
    },
    {
      "global_rank": 101250,
      "category_rank": 24,
      "domain": "onlinefabricstore.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 925590.289521386,
      "curr_month_visits": 925590.289521386,
      "unique_users": 207508.359854615,
      "pages_per_visit": 2.04776610255886
    },
    {
      "global_rank": 58914,
      "category_rank": 24,
      "domain": "mt-pharma.co.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1570747.44146061,
      "curr_month_visits": 1570747.44146061,
      "unique_users": 1345791.49206933,
      "pages_per_visit": 1.43449739143933
    },
    {
      "global_rank": 18822,
      "category_rank": 24,
      "domain": "self.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 4794076.82853013,
      "curr_month_visits": 4794076.82853013,
      "unique_users": 3533799.55720292,
      "pages_per_visit": 1.43791330707159
    },
    {
      "global_rank": 269429,
      "category_rank": 24,
      "domain": "zdorovnik.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 228894.468403143,
      "curr_month_visits": 228894.468403143,
      "unique_users": 109014.433688419,
      "pages_per_visit": 1.33336314843196
    },
    {
      "global_rank": 75908,
      "category_rank": 24,
      "domain": "erowid.org",
      "category": "Health/Addictions",
      "avg_month_visits": 591057.395565983,
      "curr_month_visits": 591057.395565983,
      "unique_users": 273936.994970086,
      "pages_per_visit": 5.52364474551613
    },
    {
      "global_rank": 3437,
      "category_rank": 24,
      "domain": "shop-apotheke.com",
      "category": "Health/Health",
      "avg_month_visits": 15601187.2679796,
      "curr_month_visits": 15601187.2679796,
      "unique_users": 8722400.35326755,
      "pages_per_visit": 4.06483300579843
    },
    {
      "global_rank": 86949,
      "category_rank": 24,
      "domain": "younity.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 767665.899947618,
      "curr_month_visits": 767665.899947618,
      "unique_users": 225895.003987551,
      "pages_per_visit": 1.7503668803686
    },
    {
      "global_rank": 48124,
      "category_rank": 24,
      "domain": "aspendental.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 1349604.54643667,
      "curr_month_visits": 1349604.54643667,
      "unique_users": 893357.74796429,
      "pages_per_visit": 2.91586642909473
    },
    {
      "global_rank": 45625,
      "category_rank": 24,
      "domain": "sleepstation.org.uk",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 640171.198829998,
      "curr_month_visits": 640171.198829998,
      "unique_users": 167066.824875065,
      "pages_per_visit": 12.5621186925581
    },
    {
      "global_rank": 204964,
      "category_rank": 24,
      "domain": "rakuraku.or.jp",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 202950.137094657,
      "curr_month_visits": 202950.137094657,
      "unique_users": 111310.803969732,
      "pages_per_visit": 3.6045939629747
    },
    {
      "global_rank": 32906,
      "category_rank": 24,
      "domain": "rebox.uk",
      "category": "Health/Mental_Health",
      "avg_month_visits": 724857.352326996,
      "curr_month_visits": 724857.352326996,
      "unique_users": 505981.609299536,
      "pages_per_visit": 2.62342765615957
    },
    {
      "global_rank": 81609,
      "category_rank": 24,
      "domain": "intelite.com.br",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 425615.840366363,
      "curr_month_visits": 425615.840366363,
      "unique_users": 46449.5446342947,
      "pages_per_visit": 15.4138082736981
    },
    {
      "global_rank": 81456,
      "category_rank": 25,
      "domain": "besoeglaegen.dk",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 534832.924106113,
      "curr_month_visits": 534832.924106113,
      "unique_users": 251212.289872351,
      "pages_per_visit": 5.50191355614421
    },
    {
      "global_rank": 206339,
      "category_rank": 25,
      "domain": "icaremanager.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 172496.89498999,
      "curr_month_visits": 172496.89498999,
      "unique_users": 17328.4426928064,
      "pages_per_visit": 9.73780554466131
    },
    {
      "global_rank": 79632,
      "category_rank": 25,
      "domain": "rollitup.org",
      "category": "Health/Addictions",
      "avg_month_visits": 594624.504726017,
      "curr_month_visits": 594624.504726017,
      "unique_users": 180806.554191724,
      "pages_per_visit": 5.20003768622804
    },
    {
      "global_rank": 62566,
      "category_rank": 25,
      "domain": "chahwa.com.tw",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 894296.434825596,
      "curr_month_visits": 894296.434825596,
      "unique_users": 35447.4938282176,
      "pages_per_visit": 7.10425384834834
    },
    {
      "global_rank": 11861,
      "category_rank": 25,
      "domain": "health.usnews.com",
      "category": "Health/Medicine",
      "avg_month_visits": 7046258.39925197,
      "curr_month_visits": 7046258.39925197,
      "unique_users": 5635758.49879569,
      "pages_per_visit": 1.87651149840661
    },
    {
      "global_rank": 101626,
      "category_rank": 25,
      "domain": "sante-ra.fr",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 474148.103125239,
      "curr_month_visits": 474148.103125239,
      "unique_users": 187542.317327448,
      "pages_per_visit": 4.39195238568649
    },
    {
      "global_rank": 55533,
      "category_rank": 25,
      "domain": "acog.org",
      "category": "Health/Womens_Health",
      "avg_month_visits": 1356058.80132258,
      "curr_month_visits": 1356058.80132258,
      "unique_users": 793283.931678066,
      "pages_per_visit": 2.21025241922401
    },
    {
      "global_rank": 45749,
      "category_rank": 25,
      "domain": "kidney.org",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 2035199.26483911,
      "curr_month_visits": 2035199.26483911,
      "unique_users": 1366572.42448782,
      "pages_per_visit": 1.60116130308499
    },
    {
      "global_rank": 19899,
      "category_rank": 25,
      "domain": "livestrong.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 4294275.95933781,
      "curr_month_visits": 4294275.95933781,
      "unique_users": 3254305.2807042,
      "pages_per_visit": 1.57490073260606
    },
    {
      "global_rank": 10836,
      "category_rank": 25,
      "domain": "stolichki.ru",
      "category": "Health/Pharmacy",
      "avg_month_visits": 5670285.51784664,
      "curr_month_visits": 5670285.51784664,
      "unique_users": 2952362.97349535,
      "pages_per_visit": 3.62254404339637
    },
    {
      "global_rank": 87087,
      "category_rank": 25,
      "domain": "optimantra.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 448011.820150364,
      "curr_month_visits": 448011.820150364,
      "unique_users": 103566.012115199,
      "pages_per_visit": 8.84536008009441
    },
    {
      "global_rank": 49705,
      "category_rank": 25,
      "domain": "emedny.org",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 750495.515720746,
      "curr_month_visits": 750495.515720746,
      "unique_users": 78988.3493654,
      "pages_per_visit": 16.7789272426541
    },
    {
      "global_rank": 3526,
      "category_rank": 25,
      "domain": "ecwcloud.com",
      "category": "Health/Health",
      "avg_month_visits": 14884566.2120532,
      "curr_month_visits": 14884566.2120532,
      "unique_users": 5227060.3011175,
      "pages_per_visit": 6.20163309607724
    },
    {
      "global_rank": 271635,
      "category_rank": 25,
      "domain": "issm.info",
      "category": "Health/Mens_Health",
      "avg_month_visits": 215375.047551371,
      "curr_month_visits": 215375.047551371,
      "unique_users": 135704.023609837,
      "pages_per_visit": 1.4497444616011
    },
    {
      "global_rank": 33564,
      "category_rank": 25,
      "domain": "headspace.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1776435.46235897,
      "curr_month_visits": 1776435.46235897,
      "unique_users": 1033332.07166094,
      "pages_per_visit": 2.90455067966771
    },
    {
      "global_rank": 82788,
      "category_rank": 25,
      "domain": "huckleberrycare.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 804079.038884442,
      "curr_month_visits": 804079.038884442,
      "unique_users": 435933.787063951,
      "pages_per_visit": 2.16040351326761
    },
    {
      "global_rank": 80195,
      "category_rank": 26,
      "domain": "addictioncenter.com",
      "category": "Health/Addictions",
      "avg_month_visits": 810536.205392254,
      "curr_month_visits": 810536.205392254,
      "unique_users": 577788.589135356,
      "pages_per_visit": 1.55578533956183
    },
    {
      "global_rank": 211999,
      "category_rank": 26,
      "domain": "perspectivescorporation.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 194316.496121244,
      "curr_month_visits": 194316.496121244,
      "unique_users": 21574.7319323058,
      "pages_per_visit": 7.07088403391231
    },
    {
      "global_rank": 273289,
      "category_rank": 26,
      "domain": "barsclassaction.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 253807.905773136,
      "curr_month_visits": 253807.905773136,
      "unique_users": 199839.060984123,
      "pages_per_visit": 1.46351933482722
    },
    {
      "global_rank": 34557,
      "category_rank": 26,
      "domain": "powerdiary.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1783770.93537131,
      "curr_month_visits": 1783770.93537131,
      "unique_users": 361977.435488015,
      "pages_per_visit": 5.6299645523483
    },
    {
      "global_rank": 57936,
      "category_rank": 26,
      "domain": "natera.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 966630.317772941,
      "curr_month_visits": 966630.317772941,
      "unique_users": 318414.173182153,
      "pages_per_visit": 4.48092457094464
    },
    {
      "global_rank": 63943,
      "category_rank": 26,
      "domain": "kowa.co.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1189110.92440458,
      "curr_month_visits": 1189110.92440458,
      "unique_users": 873988.18106738,
      "pages_per_visit": 1.95776382105682
    },
    {
      "global_rank": 10982,
      "category_rank": 26,
      "domain": "kusurinomadoguchi.com",
      "category": "Health/Pharmacy",
      "avg_month_visits": 8696318.32744181,
      "curr_month_visits": 8696318.32744181,
      "unique_users": 6118985.64756279,
      "pages_per_visit": 1.521719910858
    },
    {
      "global_rank": 87778,
      "category_rank": 26,
      "domain": "alchimiaweb.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 543155.913695835,
      "curr_month_visits": 543155.913695835,
      "unique_users": 256140.122429732,
      "pages_per_visit": 4.345518973711
    },
    {
      "global_rank": 11898,
      "category_rank": 26,
      "domain": "adventhealth.com",
      "category": "Health/Medicine",
      "avg_month_visits": 4525254.70535952,
      "curr_month_visits": 4525254.70535952,
      "unique_users": 1941456.00808336,
      "pages_per_visit": 5.82664275737105
    },
    {
      "global_rank": 86394,
      "category_rank": 26,
      "domain": "gdemoideti.ru",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 1451791.34782033,
      "curr_month_visits": 1451791.34782033,
      "unique_users": 835071.735278895,
      "pages_per_visit": 1.37070718909038
    },
    {
      "global_rank": 104402,
      "category_rank": 26,
      "domain": "capretraite.fr",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 696933.370180864,
      "curr_month_visits": 696933.370180864,
      "unique_users": 505314.827490483,
      "pages_per_visit": 1.45391951752426
    },
    {
      "global_rank": 47059,
      "category_rank": 26,
      "domain": "answers.mawdoo3.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 2162916.69349366,
      "curr_month_visits": 2162916.69349366,
      "unique_users": 1413316.71625315,
      "pages_per_visit": 1.36155413412558
    },
    {
      "global_rank": 20147,
      "category_rank": 26,
      "domain": "weightwatchers.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 3456708.76073276,
      "curr_month_visits": 3456708.76073276,
      "unique_users": 2005656.22339112,
      "pages_per_visit": 3.16215212099024
    },
    {
      "global_rank": 3636,
      "category_rank": 26,
      "domain": "athena.io",
      "category": "Health/Health",
      "avg_month_visits": 20887423.2844427,
      "curr_month_visits": 20887423.2844427,
      "unique_users": 12477593.0464868,
      "pages_per_visit": 2.18584926741319
    },
    {
      "global_rank": 54372,
      "category_rank": 26,
      "domain": "ada.org",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 1096218.42316438,
      "curr_month_visits": 1096218.42316438,
      "unique_users": 652666.538790126,
      "pages_per_visit": 2.99278742209732
    },
    {
      "global_rank": 81958,
      "category_rank": 26,
      "domain": "swiatzdrowia.pl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 897235.801256948,
      "curr_month_visits": 897235.801256948,
      "unique_users": 592762.465662083,
      "pages_per_visit": 1.81050262508212
    },
    {
      "global_rank": 64916,
      "category_rank": 27,
      "domain": "kamimutsukawa.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1176755.70952123,
      "curr_month_visits": 1176755.70952123,
      "unique_users": 916310.43460025,
      "pages_per_visit": 1.56347506361346
    },
    {
      "global_rank": 88065,
      "category_rank": 27,
      "domain": "moneple.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 521060.987729561,
      "curr_month_visits": 521060.987729561,
      "unique_users": 166069.816369142,
      "pages_per_visit": 1.50991463476247
    },
    {
      "global_rank": 83922,
      "category_rank": 27,
      "domain": "advmd.co",
      "category": "Health/Addictions",
      "avg_month_visits": 1046220.94379991,
      "curr_month_visits": 1046220.94379991,
      "unique_users": 647528.087126652,
      "pages_per_visit": 1.16553245179806
    },
    {
      "global_rank": 34613,
      "category_rank": 27,
      "domain": "7cups.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1535199.38430958,
      "curr_month_visits": 1535199.38430958,
      "unique_users": 722899.594850169,
      "pages_per_visit": 4.96172171498928
    },
    {
      "global_rank": 12076,
      "category_rank": 27,
      "domain": "acibadem.com.tr",
      "category": "Health/Medicine",
      "avg_month_visits": 5463193.64700082,
      "curr_month_visits": 5463193.64700082,
      "unique_users": 3848626.81625219,
      "pages_per_visit": 2.84033014386047
    },
    {
      "global_rank": 20161,
      "category_rank": 27,
      "domain": "sopharmacy.bg",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 3288781.96315046,
      "curr_month_visits": 3288781.96315046,
      "unique_users": 1349615.22905619,
      "pages_per_visit": 2.43763772685086
    },
    {
      "global_rank": 55432,
      "category_rank": 27,
      "domain": "vynetrellis.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 1352055.54112229,
      "curr_month_visits": 1352055.54112229,
      "unique_users": 94177.3011907907,
      "pages_per_visit": 3.96813311301596
    },
    {
      "global_rank": 47392,
      "category_rank": 27,
      "domain": "oncoemr.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 411525.652866803,
      "curr_month_visits": 411525.652866803,
      "unique_users": 15287.2231632412,
      "pages_per_visit": 73.4833199906756
    },
    {
      "global_rank": 86593,
      "category_rank": 27,
      "domain": "beautyhub.ph",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 553157.73477135,
      "curr_month_visits": 553157.73477135,
      "unique_users": 339011.978997657,
      "pages_per_visit": 1.56075506782904
    },
    {
      "global_rank": 59766,
      "category_rank": 27,
      "domain": "nostrofiglio.it",
      "category": "Health/Womens_Health",
      "avg_month_visits": 1225195.15573612,
      "curr_month_visits": 1225195.15573612,
      "unique_users": 857038.53667778,
      "pages_per_visit": 1.78799247562215
    },
    {
      "global_rank": 215350,
      "category_rank": 27,
      "domain": "niepelnosprawni.pl",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 279272.069696334,
      "curr_month_visits": 279272.069696334,
      "unique_users": 184018.823948758,
      "pages_per_visit": 1.67453472079593
    },
    {
      "global_rank": 283988,
      "category_rank": 27,
      "domain": "london-andrology.co.uk",
      "category": "Health/Mens_Health",
      "avg_month_visits": 168936.284583103,
      "curr_month_visits": 168936.284583103,
      "unique_users": 99494.6948604318,
      "pages_per_visit": 1.42502952956652
    },
    {
      "global_rank": 112734,
      "category_rank": 27,
      "domain": "flmedicaidmanagedcare.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 231670.577467146,
      "curr_month_visits": 231670.577467146,
      "unique_users": 116233.162492292,
      "pages_per_visit": 6.44802630468512
    },
    {
      "global_rank": 3648,
      "category_rank": 27,
      "domain": "chemistwarehouse.com.au",
      "category": "Health/Health",
      "avg_month_visits": 14902387.3398112,
      "curr_month_visits": 14902387.3398112,
      "unique_users": 6109368.8911042,
      "pages_per_visit": 3.80929595952733
    },
    {
      "global_rank": 82181,
      "category_rank": 27,
      "domain": "openwho.org",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 442404.189125327,
      "curr_month_visits": 442404.189125327,
      "unique_users": 219667.485444091,
      "pages_per_visit": 7.96236766850717
    },
    {
      "global_rank": 12257,
      "category_rank": 27,
      "domain": "panvel.com",
      "category": "Health/Pharmacy",
      "avg_month_visits": 5118799.98666785,
      "curr_month_visits": 5118799.98666785,
      "unique_users": 3565207.02774846,
      "pages_per_visit": 2.36637919016773
    },
    {
      "global_rank": 65288,
      "category_rank": 28,
      "domain": "taisho-kenko.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1134823.28537629,
      "curr_month_visits": 1134823.28537629,
      "unique_users": 962563.342277773,
      "pages_per_visit": 1.65209173710306
    },
    {
      "global_rank": 12335,
      "category_rank": 28,
      "domain": "gorzdrav.org",
      "category": "Health/Pharmacy",
      "avg_month_visits": 5238873.70101221,
      "curr_month_visits": 5238873.70101221,
      "unique_users": 3536051.44269049,
      "pages_per_visit": 3.00024407057323
    },
    {
      "global_rank": 12089,
      "category_rank": 28,
      "domain": "doximity.com",
      "category": "Health/Medicine",
      "avg_month_visits": 6167902.46483762,
      "curr_month_visits": 6167902.46483762,
      "unique_users": 3472974.08950449,
      "pages_per_visit": 2.68145842497539
    },
    {
      "global_rank": 286850,
      "category_rank": 28,
      "domain": "careers.health.qld.gov.au",
      "category": "Health/Mens_Health",
      "avg_month_visits": 171744.323139967,
      "curr_month_visits": 171744.323139967,
      "unique_users": 101522.172308687,
      "pages_per_visit": 2.69051907843652
    },
    {
      "global_rank": 50784,
      "category_rank": 28,
      "domain": "navigatingcare.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 692164.764442541,
      "curr_month_visits": 692164.764442541,
      "unique_users": 208023.819234437,
      "pages_per_visit": 15.0932331344493
    },
    {
      "global_rank": 22409,
      "category_rank": 28,
      "domain": "vitaminshoppe.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 2627461.20717703,
      "curr_month_visits": 2627461.20717703,
      "unique_users": 1618044.04777021,
      "pages_per_visit": 3.57798822555136
    },
    {
      "global_rank": 116119,
      "category_rank": 28,
      "domain": "pour-les-personnes-agees.gouv.fr",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 547901.496556325,
      "curr_month_visits": 547901.496556325,
      "unique_users": 364390.44411283,
      "pages_per_visit": 2.1610654036563
    },
    {
      "global_rank": 94152,
      "category_rank": 28,
      "domain": "healthify.nz",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 725860.052744026,
      "curr_month_visits": 725860.052744026,
      "unique_users": 428412.912267023,
      "pages_per_visit": 1.7093378219212
    },
    {
      "global_rank": 70046,
      "category_rank": 28,
      "domain": "drdavanstaden.co.za",
      "category": "Health/Womens_Health",
      "avg_month_visits": 601419.983422264,
      "curr_month_visits": 601419.983422264,
      "unique_users": 382853.093819021,
      "pages_per_visit": 1.42997974064287
    },
    {
      "global_rank": 84258,
      "category_rank": 28,
      "domain": "2fast4buds.com",
      "category": "Health/Addictions",
      "avg_month_visits": 734506.029486454,
      "curr_month_visits": 734506.029486454,
      "unique_users": 323472.252371026,
      "pages_per_visit": 2.72627577793722
    },
    {
      "global_rank": 84074,
      "category_rank": 28,
      "domain": "saintfrancis.com",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 589815.856885372,
      "curr_month_visits": 589815.856885372,
      "unique_users": 159811.846539768,
      "pages_per_visit": 5.23942813340029
    },
    {
      "global_rank": 3772,
      "category_rank": 28,
      "domain": "sprosivracha.com",
      "category": "Health/Health",
      "avg_month_visits": 21732003.2144854,
      "curr_month_visits": 21732003.2144854,
      "unique_users": 12575840.4028995,
      "pages_per_visit": 1.63568795639326
    },
    {
      "global_rank": 88777,
      "category_rank": 28,
      "domain": "childrenshealthdefense.org",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 796916.510584549,
      "curr_month_visits": 796916.510584549,
      "unique_users": 397198.993324742,
      "pages_per_visit": 1.83124239500413
    },
    {
      "global_rank": 36436,
      "category_rank": 28,
      "domain": "netsmartcloud.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1293934.27528868,
      "curr_month_visits": 1293934.27528868,
      "unique_users": 177904.669509782,
      "pages_per_visit": 7.88137175348275
    },
    {
      "global_rank": 215493,
      "category_rank": 28,
      "domain": "doorinworld.ru",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 175194.182036111,
      "curr_month_visits": 175194.182036111,
      "unique_users": 101259.030639262,
      "pages_per_visit": 2.81155966635946
    },
    {
      "global_rank": 60849,
      "category_rank": 28,
      "domain": "pattersondental.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 342606.276751634,
      "curr_month_visits": 342606.276751634,
      "unique_users": 83370.5099778643,
      "pages_per_visit": 25.0981957791133
    },
    {
      "global_rank": 22847,
      "category_rank": 29,
      "domain": "nasm.org",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1948290.92182371,
      "curr_month_visits": 1948290.92182371,
      "unique_users": 783094.92352079,
      "pages_per_visit": 8.61976690214496
    },
    {
      "global_rank": 86024,
      "category_rank": 29,
      "domain": "localplan.co",
      "category": "Health/Addictions",
      "avg_month_visits": 576339.201875313,
      "curr_month_visits": 576339.201875313,
      "unique_users": 463741.43958962,
      "pages_per_visit": 2.13747955383129
    },
    {
      "global_rank": 70775,
      "category_rank": 29,
      "domain": "myplannedparenthoodchart.org",
      "category": "Health/Womens_Health",
      "avg_month_visits": 572662.998350128,
      "curr_month_visits": 572662.998350128,
      "unique_users": 198675.679173394,
      "pages_per_visit": 5.59237686966745
    },
    {
      "global_rank": 89133,
      "category_rank": 29,
      "domain": "vitakruid.nl",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 584321.151214297,
      "curr_month_visits": 584321.151214297,
      "unique_users": 368634.290649769,
      "pages_per_visit": 2.97622125652999
    },
    {
      "global_rank": 13316,
      "category_rank": 29,
      "domain": "aamc.org",
      "category": "Health/Medicine",
      "avg_month_visits": 8214069.54278021,
      "curr_month_visits": 8214069.54278021,
      "unique_users": 1477436.79771409,
      "pages_per_visit": 6.66863281430077
    },
    {
      "global_rank": 36605,
      "category_rank": 29,
      "domain": "incels.is",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1121087.19214898,
      "curr_month_visits": 1121087.19214898,
      "unique_users": 247942.202973709,
      "pages_per_visit": 12.8506883252997
    },
    {
      "global_rank": 63977,
      "category_rank": 29,
      "domain": "myoryx.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 775816.896723374,
      "curr_month_visits": 775816.896723374,
      "unique_users": 89934.7909826257,
      "pages_per_visit": 10.428833641123
    },
    {
      "global_rank": 51492,
      "category_rank": 29,
      "domain": "libreview.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1289202.96012235,
      "curr_month_visits": 1289202.96012235,
      "unique_users": 374924.717730516,
      "pages_per_visit": 3.35188182376096
    },
    {
      "global_rank": 90533,
      "category_rank": 29,
      "domain": "ezdrav.si",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 399614.626389462,
      "curr_month_visits": 399614.626389462,
      "unique_users": 181960.6905652,
      "pages_per_visit": 6.39058578490318
    },
    {
      "global_rank": 66435,
      "category_rank": 29,
      "domain": "zutool.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 1302113.33445489,
      "curr_month_visits": 1302113.33445489,
      "unique_users": 575197.833993726,
      "pages_per_visit": 1.42301960872682
    },
    {
      "global_rank": 217123,
      "category_rank": 29,
      "domain": "mymodivcare.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 241192.650048659,
      "curr_month_visits": 241192.650048659,
      "unique_users": 134466.002693387,
      "pages_per_visit": 2.12308771283588
    },
    {
      "global_rank": 94307,
      "category_rank": 29,
      "domain": "mamotoja.pl",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 639208.816732786,
      "curr_month_visits": 639208.816732786,
      "unique_users": 437569.605712706,
      "pages_per_visit": 1.70700135161441
    },
    {
      "global_rank": 118569,
      "category_rank": 29,
      "domain": "gogograndparent.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 331446.80387256,
      "curr_month_visits": 331446.80387256,
      "unique_users": 216654.90294257,
      "pages_per_visit": 6.44360992332961
    },
    {
      "global_rank": 3789,
      "category_rank": 29,
      "domain": "labcorp.com",
      "category": "Health/Health",
      "avg_month_visits": 13138161.7970384,
      "curr_month_visits": 13138161.7970384,
      "unique_users": 5946606.45217121,
      "pages_per_visit": 5.91206963891894
    },
    {
      "global_rank": 287125,
      "category_rank": 29,
      "domain": "organicsocean.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 132921.626425679,
      "curr_month_visits": 132921.626425679,
      "unique_users": 66972.4991369932,
      "pages_per_visit": 3.31552182081641
    },
    {
      "global_rank": 12412,
      "category_rank": 29,
      "domain": "drogariaspacheco.com.br",
      "category": "Health/Pharmacy",
      "avg_month_visits": 5375901.97634108,
      "curr_month_visits": 5375901.97634108,
      "unique_users": 3273261.281912,
      "pages_per_visit": 2.93061930585966
    },
    {
      "global_rank": 301099,
      "category_rank": 30,
      "domain": "e-aga.jp",
      "category": "Health/Mens_Health",
      "avg_month_visits": 214297.976042084,
      "curr_month_visits": 214297.976042084,
      "unique_users": 161469.759861088,
      "pages_per_visit": 1.18783519358384
    },
    {
      "global_rank": 92380,
      "category_rank": 30,
      "domain": "leki.pl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 799108.591816276,
      "curr_month_visits": 799108.591816276,
      "unique_users": 614868.598137254,
      "pages_per_visit": 1.28486943699428
    },
    {
      "global_rank": 67163,
      "category_rank": 30,
      "domain": "astrazeneca.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 843147.160197731,
      "curr_month_visits": 843147.160197731,
      "unique_users": 389010.156589372,
      "pages_per_visit": 3.18292776231694
    },
    {
      "global_rank": 38131,
      "category_rank": 30,
      "domain": "focusmate.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 2120562.64751639,
      "curr_month_visits": 2120562.64751639,
      "unique_users": 293243.091335836,
      "pages_per_visit": 4.4300249530872
    },
    {
      "global_rank": 3838,
      "category_rank": 30,
      "domain": "questdiagnostics.com",
      "category": "Health/Health",
      "avg_month_visits": 13697435.995856,
      "curr_month_visits": 13697435.995856,
      "unique_users": 5879365.96792598,
      "pages_per_visit": 5.96717775201362
    },
    {
      "global_rank": 71031,
      "category_rank": 30,
      "domain": "uppa.it",
      "category": "Health/Womens_Health",
      "avg_month_visits": 1122070.88662739,
      "curr_month_visits": 1122070.88662739,
      "unique_users": 693416.073405625,
      "pages_per_visit": 1.38556114041611
    },
    {
      "global_rank": 23280,
      "category_rank": 30,
      "domain": "gnc.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 2500213.30075884,
      "curr_month_visits": 2500213.30075884,
      "unique_users": 1569128.75308723,
      "pages_per_visit": 3.70018634323434
    },
    {
      "global_rank": 12707,
      "category_rank": 30,
      "domain": "medex.com.bd",
      "category": "Health/Pharmacy",
      "avg_month_visits": 5817202.38820439,
      "curr_month_visits": 5817202.38820439,
      "unique_users": 1939602.22686575,
      "pages_per_visit": 3.21208913717254
    },
    {
      "global_rank": 13727,
      "category_rank": 30,
      "domain": "jamanetwork.com",
      "category": "Health/Medicine",
      "avg_month_visits": 5988704.78490179,
      "curr_month_visits": 5988704.78490179,
      "unique_users": 3521507.17010267,
      "pages_per_visit": 1.81493864257634
    },
    {
      "global_rank": 94962,
      "category_rank": 30,
      "domain": "employersolutions.com",
      "category": "Health/Addictions",
      "avg_month_visits": 642905.940721497,
      "curr_month_visits": 642905.940721497,
      "unique_users": 76895.2002938769,
      "pages_per_visit": 3.74891777271507
    },
    {
      "global_rank": 66583,
      "category_rank": 30,
      "domain": "operadds.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 916393.286649098,
      "curr_month_visits": 916393.286649098,
      "unique_users": 390049.815610439,
      "pages_per_visit": 3.88530925165139
    },
    {
      "global_rank": 219878,
      "category_rank": 30,
      "domain": "servimedia.es",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 235730.79954132,
      "curr_month_visits": 235730.79954132,
      "unique_users": 156015.567073007,
      "pages_per_visit": 1.65274456891307
    },
    {
      "global_rank": 92587,
      "category_rank": 30,
      "domain": "meditree.kr",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 649378.197946287,
      "curr_month_visits": 649378.197946287,
      "unique_users": 314070.811393471,
      "pages_per_visit": 2.36690667229742
    },
    {
      "global_rank": 51739,
      "category_rank": 30,
      "domain": "macmillan.org.uk",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1595827.29521702,
      "curr_month_visits": 1595827.29521702,
      "unique_users": 897375.338696213,
      "pages_per_visit": 2.16956328228129
    },
    {
      "global_rank": 118754,
      "category_rank": 30,
      "domain": "reversephone.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 408384.942815956,
      "curr_month_visits": 408384.942815956,
      "unique_users": 310910.9065682,
      "pages_per_visit": 3.07570752673109
    },
    {
      "global_rank": 312469,
      "category_rank": 31,
      "domain": "lavividhair.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 68972.4625355663,
      "curr_month_visits": 68972.4625355663,
      "unique_users": 31714.4171782656,
      "pages_per_visit": 9.62093547287317
    },
    {
      "global_rank": 220924,
      "category_rank": 31,
      "domain": "myresourcedirectory.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 216757.265749484,
      "curr_month_visits": 216757.265749484,
      "unique_users": 152960.504376536,
      "pages_per_visit": 3.10576086987554
    },
    {
      "global_rank": 68630,
      "category_rank": 31,
      "domain": "getweave.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 736740.94877405,
      "curr_month_visits": 736740.94877405,
      "unique_users": 343093.661688869,
      "pages_per_visit": 4.62713679663865
    },
    {
      "global_rank": 12737,
      "category_rank": 31,
      "domain": "movacal.net",
      "category": "Health/Pharmacy",
      "avg_month_visits": 2290498.25832226,
      "curr_month_visits": 2290498.25832226,
      "unique_users": 61427.0501464982,
      "pages_per_visit": 42.8610404553096
    },
    {
      "global_rank": 95859,
      "category_rank": 31,
      "domain": "huggies.ru",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 637767.101115657,
      "curr_month_visits": 637767.101115657,
      "unique_users": 388045.211417719,
      "pages_per_visit": 1.62839118514799
    },
    {
      "global_rank": 51982,
      "category_rank": 31,
      "domain": "alz.org",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1625109.30950726,
      "curr_month_visits": 1625109.30950726,
      "unique_users": 1065459.69892792,
      "pages_per_visit": 2.24520645983305
    },
    {
      "global_rank": 76885,
      "category_rank": 31,
      "domain": "sistematodos.com.br",
      "category": "Health/Womens_Health",
      "avg_month_visits": 459430.235420605,
      "curr_month_visits": 459430.235420605,
      "unique_users": 20060.5183035441,
      "pages_per_visit": 27.238608216547
    },
    {
      "global_rank": 118932,
      "category_rank": 31,
      "domain": "acl.gov",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 273201.069724331,
      "curr_month_visits": 273201.069724331,
      "unique_users": 177835.763353123,
      "pages_per_visit": 6.10492994687519
    },
    {
      "global_rank": 96081,
      "category_rank": 31,
      "domain": "jftna.org",
      "category": "Health/Addictions",
      "avg_month_visits": 860787.027748913,
      "curr_month_visits": 860787.027748913,
      "unique_users": 178278.641922887,
      "pages_per_visit": 2.38809901243295
    },
    {
      "global_rank": 23565,
      "category_rank": 31,
      "domain": "puregym.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 2993374.25594257,
      "curr_month_visits": 2993374.25594257,
      "unique_users": 1538289.25869383,
      "pages_per_visit": 4.11295739274107
    },
    {
      "global_rank": 4006,
      "category_rank": 31,
      "domain": "kaipoke.biz",
      "category": "Health/Health",
      "avg_month_visits": 8257059.48270986,
      "curr_month_visits": 8257059.48270986,
      "unique_users": 637098.334841932,
      "pages_per_visit": 25.6819385651513
    },
    {
      "global_rank": 92854,
      "category_rank": 31,
      "domain": "biogena.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 539430.430474576,
      "curr_month_visits": 539430.430474576,
      "unique_users": 312393.388964236,
      "pages_per_visit": 2.81746663294649
    },
    {
      "global_rank": 38227,
      "category_rank": 31,
      "domain": "guidapsicologi.it",
      "category": "Health/Mental_Health",
      "avg_month_visits": 2227541.53799387,
      "curr_month_visits": 2227541.53799387,
      "unique_users": 1425445.13278744,
      "pages_per_visit": 1.79915983374721
    },
    {
      "global_rank": 94063,
      "category_rank": 31,
      "domain": "nremt.org",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 480339.271388999,
      "curr_month_visits": 480339.271388999,
      "unique_users": 200176.525677501,
      "pages_per_visit": 6.27085005436739
    },
    {
      "global_rank": 13747,
      "category_rank": 31,
      "domain": "iqhealth.com",
      "category": "Health/Medicine",
      "avg_month_visits": 4343002.75025022,
      "curr_month_visits": 4343002.75025022,
      "unique_users": 1659957.95365197,
      "pages_per_visit": 4.49966321543755
    },
    {
      "global_rank": 69464,
      "category_rank": 31,
      "domain": "9meters.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 828084.394657625,
      "curr_month_visits": 828084.394657625,
      "unique_users": 536614.166227311,
      "pages_per_visit": 1.44411712107256
    },
    {
      "global_rank": 321948,
      "category_rank": 32,
      "domain": "sbc-aga.jp",
      "category": "Health/Mens_Health",
      "avg_month_visits": 138264.162330244,
      "curr_month_visits": 138264.162330244,
      "unique_users": 83890.0590801519,
      "pages_per_visit": 2.25903816897158
    },
    {
      "global_rank": 226657,
      "category_rank": 32,
      "domain": "dcig-forum.de",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 437990.390754592,
      "curr_month_visits": 437990.390754592,
      "unique_users": 37196.0548034265,
      "pages_per_visit": 3.56472548866341
    },
    {
      "global_rank": 13755,
      "category_rank": 32,
      "domain": "uclahealth.org",
      "category": "Health/Medicine",
      "avg_month_visits": 4892712.8199453,
      "curr_month_visits": 4892712.8199453,
      "unique_users": 1967728.66387316,
      "pages_per_visit": 3.66066457349193
    },
    {
      "global_rank": 76949,
      "category_rank": 32,
      "domain": "babycenter.in",
      "category": "Health/Womens_Health",
      "avg_month_visits": 868991.759370834,
      "curr_month_visits": 868991.759370834,
      "unique_users": 598579.966976863,
      "pages_per_visit": 1.88061758774496
    },
    {
      "global_rank": 71974,
      "category_rank": 32,
      "domain": "rohto.co.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 748971.056659294,
      "curr_month_visits": 748971.056659294,
      "unique_users": 537845.467590797,
      "pages_per_visit": 2.53816980596004
    },
    {
      "global_rank": 119798,
      "category_rank": 32,
      "domain": "seniorly.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 296675.887758981,
      "curr_month_visits": 296675.887758981,
      "unique_users": 207612.326090958,
      "pages_per_visit": 4.09416459193433
    },
    {
      "global_rank": 12892,
      "category_rank": 32,
      "domain": "zdravcity.ru",
      "category": "Health/Pharmacy",
      "avg_month_visits": 5454134.13818234,
      "curr_month_visits": 5454134.13818234,
      "unique_users": 3292978.72074443,
      "pages_per_visit": 2.31341600005663
    },
    {
      "global_rank": 98013,
      "category_rank": 32,
      "domain": "formfox.com",
      "category": "Health/Addictions",
      "avg_month_visits": 472170.249166195,
      "curr_month_visits": 472170.249166195,
      "unique_users": 226678.931788178,
      "pages_per_visit": 5.47351435101045
    },
    {
      "global_rank": 94968,
      "category_rank": 32,
      "domain": "dlrg.de",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 521908.664305344,
      "curr_month_visits": 521908.664305344,
      "unique_users": 287951.373628588,
      "pages_per_visit": 3.38970626761605
    },
    {
      "global_rank": 97626,
      "category_rank": 32,
      "domain": "mom.life",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 468324.944256036,
      "curr_month_visits": 468324.944256036,
      "unique_users": 359160.776311848,
      "pages_per_visit": 1.40439261438604
    },
    {
      "global_rank": 99284,
      "category_rank": 32,
      "domain": "simplero.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 542160.605161728,
      "curr_month_visits": 542160.605161728,
      "unique_users": 265857.939331133,
      "pages_per_visit": 3.24920528388601
    },
    {
      "global_rank": 69091,
      "category_rank": 32,
      "domain": "oralb.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 773868.277247565,
      "curr_month_visits": 773868.277247565,
      "unique_users": 501981.669138118,
      "pages_per_visit": 2.70893479363891
    },
    {
      "global_rank": 40681,
      "category_rank": 32,
      "domain": "therapyappointment.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1238554.11516407,
      "curr_month_visits": 1238554.11516407,
      "unique_users": 238157.092617348,
      "pages_per_visit": 8.2224029491091
    },
    {
      "global_rank": 24571,
      "category_rank": 32,
      "domain": "totalpass.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 3762985.20065722,
      "curr_month_visits": 3762985.20065722,
      "unique_users": 451215.405302265,
      "pages_per_visit": 3.69915333751395
    },
    {
      "global_rank": 52151,
      "category_rank": 32,
      "domain": "lung.org",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1365431.1681104,
      "curr_month_visits": 1365431.1681104,
      "unique_users": 1003881.04188096,
      "pages_per_visit": 1.60291704355602
    },
    {
      "global_rank": 4154,
      "category_rank": 32,
      "domain": "vinmec.com",
      "category": "Health/Health",
      "avg_month_visits": 20763839.6671465,
      "curr_month_visits": 20763839.6671465,
      "unique_users": 11652749.4133799,
      "pages_per_visit": 1.62081263394215
    },
    {
      "global_rank": 96293,
      "category_rank": 33,
      "domain": "emergencyreporting.com",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 359332.041966364,
      "curr_month_visits": 359332.041966364,
      "unique_users": 50537.1826476449,
      "pages_per_visit": 21.1856247153711
    },
    {
      "global_rank": 123299,
      "category_rank": 33,
      "domain": "seniorliving.org",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 500723.026260997,
      "curr_month_visits": 500723.026260997,
      "unique_users": 385702.229838061,
      "pages_per_visit": 1.69058346063959
    },
    {
      "global_rank": 12917,
      "category_rank": 33,
      "domain": "redcare.it",
      "category": "Health/Pharmacy",
      "avg_month_visits": 4077780.35315389,
      "curr_month_visits": 4077780.35315389,
      "unique_users": 1894017.29735607,
      "pages_per_visit": 4.19593904203784
    },
    {
      "global_rank": 52581,
      "category_rank": 33,
      "domain": "orpha.net",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1495386.11018591,
      "curr_month_visits": 1495386.11018591,
      "unique_users": 994673.241724921,
      "pages_per_visit": 1.67007813058824
    },
    {
      "global_rank": 75880,
      "category_rank": 33,
      "domain": "redcare-apotheke.ch",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 705597.87128185,
      "curr_month_visits": 705597.87128185,
      "unique_users": 341538.662510944,
      "pages_per_visit": 3.61296995874276
    },
    {
      "global_rank": 99183,
      "category_rank": 33,
      "domain": "dodot.es",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 779956.662657493,
      "curr_month_visits": 779956.662657493,
      "unique_users": 526969.966494075,
      "pages_per_visit": 1.60190608436205
    },
    {
      "global_rank": 100728,
      "category_rank": 33,
      "domain": "kinoscan.com",
      "category": "Health/Addictions",
      "avg_month_visits": 799033.508189727,
      "curr_month_visits": 799033.508189727,
      "unique_users": 358273.251825242,
      "pages_per_visit": 1.45094839259157
    },
    {
      "global_rank": 100723,
      "category_rank": 33,
      "domain": "eusemfronteiras.com.br",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 805222.454571632,
      "curr_month_visits": 805222.454571632,
      "unique_users": 464181.463473072,
      "pages_per_visit": 1.2727938969651
    },
    {
      "global_rank": 4160,
      "category_rank": 33,
      "domain": "abczdrowie.pl",
      "category": "Health/Health",
      "avg_month_visits": 22396968.1587485,
      "curr_month_visits": 22396968.1587485,
      "unique_users": 6404966.50382067,
      "pages_per_visit": 1.67814497693516
    },
    {
      "global_rank": 24643,
      "category_rank": 33,
      "domain": "readytocheckline.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1333692.11466601,
      "curr_month_visits": 1333692.11466601,
      "unique_users": 843877.979613093,
      "pages_per_visit": 3.30905211655696
    },
    {
      "global_rank": 323823,
      "category_rank": 33,
      "domain": "agacare.clinic",
      "category": "Health/Mens_Health",
      "avg_month_visits": 182944.336003897,
      "curr_month_visits": 182944.336003897,
      "unique_users": 128068.538286687,
      "pages_per_visit": 1.26123047380667
    },
    {
      "global_rank": 77156,
      "category_rank": 33,
      "domain": "peanut-app.io",
      "category": "Health/Womens_Health",
      "avg_month_visits": 1065263.57959389,
      "curr_month_visits": 1065263.57959389,
      "unique_users": 617157.547314359,
      "pages_per_visit": 1.70619284009314
    },
    {
      "global_rank": 72208,
      "category_rank": 33,
      "domain": "kivihealth.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 414319.390372687,
      "curr_month_visits": 414319.390372687,
      "unique_users": 153954.80779922,
      "pages_per_visit": 14.0124523094837
    },
    {
      "global_rank": 15234,
      "category_rank": 33,
      "domain": "thalamusgme.com",
      "category": "Health/Medicine",
      "avg_month_visits": 2792278.68344546,
      "curr_month_visits": 2792278.68344546,
      "unique_users": 310875.290675623,
      "pages_per_visit": 9.06018860535228
    },
    {
      "global_rank": 236717,
      "category_rank": 33,
      "domain": "disabili.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 260096.726122297,
      "curr_month_visits": 260096.726122297,
      "unique_users": 196562.56595095,
      "pages_per_visit": 1.46683845514369
    },
    {
      "global_rank": 41003,
      "category_rank": 33,
      "domain": "positivepsychology.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1965315.49076494,
      "curr_month_visits": 1965315.49076494,
      "unique_users": 1192436.83222375,
      "pages_per_visit": 1.77970878097219
    },
    {
      "global_rank": 25112,
      "category_rank": 34,
      "domain": "trainerize.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1760832.79051586,
      "curr_month_visits": 1760832.79051586,
      "unique_users": 415778.971048857,
      "pages_per_visit": 9.44697121254823
    },
    {
      "global_rank": 100926,
      "category_rank": 34,
      "domain": "medela.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 629113.194194988,
      "curr_month_visits": 629113.194194988,
      "unique_users": 366575.179352852,
      "pages_per_visit": 2.00242252289636
    },
    {
      "global_rank": 13239,
      "category_rank": 34,
      "domain": "apotekhjartat.se",
      "category": "Health/Pharmacy",
      "avg_month_visits": 3978904.80134616,
      "curr_month_visits": 3978904.80134616,
      "unique_users": 1893473.4034346,
      "pages_per_visit": 3.71871490597119
    },
    {
      "global_rank": 332714,
      "category_rank": 34,
      "domain": "eurocirc.org",
      "category": "Health/Mens_Health",
      "avg_month_visits": 52522.8508908161,
      "curr_month_visits": 52522.8508908161,
      "unique_users": 11817.791554114,
      "pages_per_visit": 9.23885221238048
    },
    {
      "global_rank": 4252,
      "category_rank": 34,
      "domain": "who.int",
      "category": "Health/Health",
      "avg_month_visits": 17173847.054967,
      "curr_month_visits": 17173847.054967,
      "unique_users": 10585262.9800408,
      "pages_per_visit": 2.33382178392533
    },
    {
      "global_rank": 124524,
      "category_rank": 34,
      "domain": "residentapps.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 367696.80578413,
      "curr_month_visits": 367696.80578413,
      "unique_users": 66860.6548686106,
      "pages_per_visit": 4.13250553752991
    },
    {
      "global_rank": 97197,
      "category_rank": 34,
      "domain": "easypractice.net",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 430991.249362197,
      "curr_month_visits": 430991.249362197,
      "unique_users": 103018.377293267,
      "pages_per_visit": 7.27929334964896
    },
    {
      "global_rank": 77778,
      "category_rank": 34,
      "domain": "tommys.org",
      "category": "Health/Womens_Health",
      "avg_month_visits": 1018708.36324053,
      "curr_month_visits": 1018708.36324053,
      "unique_users": 593403.149341975,
      "pages_per_visit": 1.90070260284412
    },
    {
      "global_rank": 81811,
      "category_rank": 34,
      "domain": "alinamin-kenko.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 818039.502266368,
      "curr_month_visits": 818039.502266368,
      "unique_users": 651958.920511517,
      "pages_per_visit": 1.2489027003026
    },
    {
      "global_rank": 41751,
      "category_rank": 34,
      "domain": "lifestance.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1694883.77307969,
      "curr_month_visits": 1694883.77307969,
      "unique_users": 861741.92402098,
      "pages_per_visit": 2.63451438625278
    },
    {
      "global_rank": 53176,
      "category_rank": 34,
      "domain": "spine-health.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1490088.90429281,
      "curr_month_visits": 1490088.90429281,
      "unique_users": 1000546.43533847,
      "pages_per_visit": 1.77886916302419
    },
    {
      "global_rank": 72268,
      "category_rank": 34,
      "domain": "poponveneers.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 694840.491699959,
      "curr_month_visits": 694840.491699959,
      "unique_users": 224291.975808295,
      "pages_per_visit": 4.17637372012263
    },
    {
      "global_rank": 240768,
      "category_rank": 34,
      "domain": "cdpf.org.cn",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 198796.948067827,
      "curr_month_visits": 198796.948067827,
      "unique_users": 71035.2436073002,
      "pages_per_visit": 3.66881980944748
    },
    {
      "global_rank": 103037,
      "category_rank": 34,
      "domain": "osteo2ls.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 401562.721899418,
      "curr_month_visits": 401562.721899418,
      "unique_users": 62176.9502271245,
      "pages_per_visit": 14.0271294280343
    },
    {
      "global_rank": 15364,
      "category_rank": 34,
      "domain": "humanitas.it",
      "category": "Health/Medicine",
      "avg_month_visits": 6026437.38800081,
      "curr_month_visits": 6026437.38800081,
      "unique_users": 4075868.57911522,
      "pages_per_visit": 1.6061072697921
    },
    {
      "global_rank": 103573,
      "category_rank": 34,
      "domain": "talktofrank.com",
      "category": "Health/Addictions",
      "avg_month_visits": 566356.151910169,
      "curr_month_visits": 566356.151910169,
      "unique_users": 368593.359861452,
      "pages_per_visit": 2.35216641249774
    },
    {
      "global_rank": 88766,
      "category_rank": 35,
      "domain": "takeda.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 588209.275596381,
      "curr_month_visits": 588209.275596381,
      "unique_users": 358971.07435284,
      "pages_per_visit": 2.90988517646567
    },
    {
      "global_rank": 78559,
      "category_rank": 35,
      "domain": "engagedmd.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 460295.881358481,
      "curr_month_visits": 460295.881358481,
      "unique_users": 205140.001221692,
      "pages_per_visit": 5.26745155203535
    },
    {
      "global_rank": 74928,
      "category_rank": 35,
      "domain": "etabletka.sk",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 743611.563702941,
      "curr_month_visits": 743611.563702941,
      "unique_users": 429124.887909667,
      "pages_per_visit": 2.57683157899095
    },
    {
      "global_rank": 250668,
      "category_rank": 35,
      "domain": "sevitahealth.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 232847.621043254,
      "curr_month_visits": 232847.621043254,
      "unique_users": 104990.070450191,
      "pages_per_visit": 2.65448287333609
    },
    {
      "global_rank": 335397,
      "category_rank": 35,
      "domain": "phallosan.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 101961.540680353,
      "curr_month_visits": 101961.540680353,
      "unique_users": 49163.445335542,
      "pages_per_visit": 3.98447103857424
    },
    {
      "global_rank": 4316,
      "category_rank": 35,
      "domain": "dmed.kz",
      "category": "Health/Health",
      "avg_month_visits": 7883868.73931943,
      "curr_month_visits": 7883868.73931943,
      "unique_users": 195800.138312938,
      "pages_per_visit": 29.6878249725819
    },
    {
      "global_rank": 130490,
      "category_rank": 35,
      "domain": "action-sociale.org",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 417242.737362241,
      "curr_month_visits": 417242.737362241,
      "unique_users": 282603.989561046,
      "pages_per_visit": 2.39834341691976
    },
    {
      "global_rank": 98258,
      "category_rank": 35,
      "domain": "112meldingen.nl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 866977.914845619,
      "curr_month_visits": 866977.914845619,
      "unique_users": 138221.204077651,
      "pages_per_visit": 1.78622294983324
    },
    {
      "global_rank": 13603,
      "category_rank": 35,
      "domain": "apteka911.ua",
      "category": "Health/Pharmacy",
      "avg_month_visits": 4457471.01965083,
      "curr_month_visits": 4457471.01965083,
      "unique_users": 2023235.85534573,
      "pages_per_visit": 3.2610359166194
    },
    {
      "global_rank": 55556,
      "category_rank": 35,
      "domain": "davita.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 978095.729491329,
      "curr_month_visits": 978095.729491329,
      "unique_users": 449023.213536436,
      "pages_per_visit": 4.5063228658914
    },
    {
      "global_rank": 114254,
      "category_rank": 35,
      "domain": "meinmed.at",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 644366.434117149,
      "curr_month_visits": 644366.434117149,
      "unique_users": 503271.776143805,
      "pages_per_visit": 1.45104632934897
    },
    {
      "global_rank": 25685,
      "category_rank": 35,
      "domain": "trans-returnsummarycard-images-na.s3.amazonaws.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 3451910.95031181,
      "curr_month_visits": 3451910.95031181,
      "unique_users": 2536349.50144478,
      "pages_per_visit": 1.87769639200712
    },
    {
      "global_rank": 105589,
      "category_rank": 35,
      "domain": "laakeinfo.fi",
      "category": "Health/Addictions",
      "avg_month_visits": 636654.28832121,
      "curr_month_visits": 636654.28832121,
      "unique_users": 389497.397652731,
      "pages_per_visit": 1.42967350753218
    },
    {
      "global_rank": 42198,
      "category_rank": 35,
      "domain": "mind.org.uk",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1940388.95977189,
      "curr_month_visits": 1940388.95977189,
      "unique_users": 1279376.34015997,
      "pages_per_visit": 2.10479907162176
    },
    {
      "global_rank": 101854,
      "category_rank": 35,
      "domain": "supermamki.ru",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 212487.462926751,
      "curr_month_visits": 212487.462926751,
      "unique_users": 40332.2168291146,
      "pages_per_visit": 9.04348978732874
    },
    {
      "global_rank": 15619,
      "category_rank": 35,
      "domain": "kenhub.com",
      "category": "Health/Medicine",
      "avg_month_visits": 4955070.67976399,
      "curr_month_visits": 4955070.67976399,
      "unique_users": 2534183.28661173,
      "pages_per_visit": 2.54830346724056
    },
    {
      "global_rank": 105776,
      "category_rank": 36,
      "domain": "adf.org.au",
      "category": "Health/Addictions",
      "avg_month_visits": 717158.549349492,
      "curr_month_visits": 717158.549349492,
      "unique_users": 493844.969462489,
      "pages_per_visit": 1.49292550567512
    },
    {
      "global_rank": 80273,
      "category_rank": 36,
      "domain": "dishcult.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 602611.306503261,
      "curr_month_visits": 602611.306503261,
      "unique_users": 406423.763002857,
      "pages_per_visit": 3.2521112925897
    },
    {
      "global_rank": 90272,
      "category_rank": 36,
      "domain": "eurofarma.com.br",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 941538.185834233,
      "curr_month_visits": 941538.185834233,
      "unique_users": 776724.003382669,
      "pages_per_visit": 1.49230536826232
    },
    {
      "global_rank": 352866,
      "category_rank": 36,
      "domain": "ways2well.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 109231.817584637,
      "curr_month_visits": 109231.817584637,
      "unique_users": 55675.8632250997,
      "pages_per_visit": 2.7633383316474
    },
    {
      "global_rank": 4381,
      "category_rank": 36,
      "domain": "suckhoedoisong.vn",
      "category": "Health/Health",
      "avg_month_visits": 19079142.6306433,
      "curr_month_visits": 19079142.6306433,
      "unique_users": 11213422.0695998,
      "pages_per_visit": 1.57374017637601
    },
    {
      "global_rank": 109616,
      "category_rank": 36,
      "domain": "detkityumen.ru",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 381594.092860717,
      "curr_month_visits": 381594.092860717,
      "unique_users": 87131.0619619397,
      "pages_per_visit": 8.90187818650791
    },
    {
      "global_rank": 140352,
      "category_rank": 36,
      "domain": "brookdale.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 321127.263130807,
      "curr_month_visits": 321127.263130807,
      "unique_users": 232378.343027691,
      "pages_per_visit": 2.81371694356902
    },
    {
      "global_rank": 75648,
      "category_rank": 36,
      "domain": "colgate.com.br",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 1151146.16713469,
      "curr_month_visits": 1151146.16713469,
      "unique_users": 998912.947411503,
      "pages_per_visit": 1.2159418730961
    },
    {
      "global_rank": 99965,
      "category_rank": 36,
      "domain": "pzh.gov.pl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 624710.555274495,
      "curr_month_visits": 624710.555274495,
      "unique_users": 443838.757803756,
      "pages_per_visit": 1.79188525024475
    },
    {
      "global_rank": 16059,
      "category_rank": 36,
      "domain": "nm.org",
      "category": "Health/Medicine",
      "avg_month_visits": 3572663.87772086,
      "curr_month_visits": 3572663.87772086,
      "unique_users": 1418498.41108399,
      "pages_per_visit": 5.05749467897302
    },
    {
      "global_rank": 114306,
      "category_rank": 36,
      "domain": "taypharmacies.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 377974.085581458,
      "curr_month_visits": 377974.085581458,
      "unique_users": 191886.377711324,
      "pages_per_visit": 2.4256620508445
    },
    {
      "global_rank": 15727,
      "category_rank": 36,
      "domain": "apteka-april.ru",
      "category": "Health/Pharmacy",
      "avg_month_visits": 3859031.37059858,
      "curr_month_visits": 3859031.37059858,
      "unique_users": 1971718.23327428,
      "pages_per_visit": 3.58630511097019
    },
    {
      "global_rank": 56534,
      "category_rank": 36,
      "domain": "ourfuturehealth.org.uk",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 656022.985153111,
      "curr_month_visits": 656022.985153111,
      "unique_users": 314704.802355323,
      "pages_per_visit": 10.4296788842978
    },
    {
      "global_rank": 25771,
      "category_rank": 36,
      "domain": "clubready.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1681343.91705954,
      "curr_month_visits": 1681343.91705954,
      "unique_users": 288069.714461409,
      "pages_per_visit": 11.7537695510678
    },
    {
      "global_rank": 42488,
      "category_rank": 36,
      "domain": "choosingtherapy.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 2439433.45875688,
      "curr_month_visits": 2439433.45875688,
      "unique_users": 1506640.30775905,
      "pages_per_visit": 1.58353216307517
    },
    {
      "global_rank": 260088,
      "category_rank": 36,
      "domain": "palcofirst.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 119257.346553571,
      "curr_month_visits": 119257.346553571,
      "unique_users": 38631.0010285194,
      "pages_per_visit": 4.20084733761804
    },
    {
      "global_rank": 110881,
      "category_rank": 37,
      "domain": "mjakmama24.pl",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 593555.166057743,
      "curr_month_visits": 593555.166057743,
      "unique_users": 364434.776046814,
      "pages_per_visit": 1.71625239073094
    },
    {
      "global_rank": 140419,
      "category_rank": 37,
      "domain": "hublo.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 461702.209121866,
      "curr_month_visits": 461702.209121866,
      "unique_users": 174809.279529597,
      "pages_per_visit": 2.29093503223594
    },
    {
      "global_rank": 57087,
      "category_rank": 37,
      "domain": "omnipod.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 994079.338104396,
      "curr_month_visits": 994079.338104396,
      "unique_users": 579124.557100583,
      "pages_per_visit": 2.08843995129003
    },
    {
      "global_rank": 260545,
      "category_rank": 37,
      "domain": "axapa.fr",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 226332.939141766,
      "curr_month_visits": 226332.939141766,
      "unique_users": 13766.2019333494,
      "pages_per_visit": 6.81788300926007
    },
    {
      "global_rank": 26188,
      "category_rank": 37,
      "domain": "lifetime.life",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1985320.17343803,
      "curr_month_visits": 1985320.17343803,
      "unique_users": 1083876.2355747,
      "pages_per_visit": 4.43886871945253
    },
    {
      "global_rank": 120791,
      "category_rank": 37,
      "domain": "theayurvedaexperience.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 341063.334735196,
      "curr_month_visits": 341063.334735196,
      "unique_users": 188117.232992444,
      "pages_per_visit": 2.45857779522104
    },
    {
      "global_rank": 107429,
      "category_rank": 37,
      "domain": "therecoveryvillage.com",
      "category": "Health/Addictions",
      "avg_month_visits": 687080.351470984,
      "curr_month_visits": 687080.351470984,
      "unique_users": 492409.082456071,
      "pages_per_visit": 1.40042520062903
    },
    {
      "global_rank": 91742,
      "category_rank": 37,
      "domain": "joe-cloud.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 301148.366872407,
      "curr_month_visits": 301148.366872407,
      "unique_users": 23495.6166239079,
      "pages_per_visit": 13.2446563896798
    },
    {
      "global_rank": 16076,
      "category_rank": 37,
      "domain": "passmedicine.com",
      "category": "Health/Medicine",
      "avg_month_visits": 3753660.69599609,
      "curr_month_visits": 3753660.69599609,
      "unique_users": 373822.719374486,
      "pages_per_visit": 5.12564701746705
    },
    {
      "global_rank": 44352,
      "category_rank": 37,
      "domain": "crediblebh.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1241506.13048756,
      "curr_month_visits": 1241506.13048756,
      "unique_users": 58891.0665496182,
      "pages_per_visit": 10.8994950648992
    },
    {
      "global_rank": 75985,
      "category_rank": 37,
      "domain": "dentamap.jp",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 680736.589765808,
      "curr_month_visits": 680736.589765808,
      "unique_users": 207552.335828797,
      "pages_per_visit": 6.29621592876526
    },
    {
      "global_rank": 4384,
      "category_rank": 37,
      "domain": "webteb.com",
      "category": "Health/Health",
      "avg_month_visits": 19130367.6956931,
      "curr_month_visits": 19130367.6956931,
      "unique_users": 9837956.34259165,
      "pages_per_visit": 1.55513846762815
    },
    {
      "global_rank": 15857,
      "category_rank": 37,
      "domain": "cruzverde.cl",
      "category": "Health/Pharmacy",
      "avg_month_visits": 4471912.14433905,
      "curr_month_visits": 4471912.14433905,
      "unique_users": 2525288.6723531,
      "pages_per_visit": 3.4263942476546
    },
    {
      "global_rank": 357915,
      "category_rank": 37,
      "domain": "penuma.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 151822.229054481,
      "curr_month_visits": 151822.229054481,
      "unique_users": 91383.2238242705,
      "pages_per_visit": 1.58782464199393
    },
    {
      "global_rank": 81015,
      "category_rank": 37,
      "domain": "ng112.gov.tr",
      "category": "Health/Womens_Health",
      "avg_month_visits": 714428.79336099,
      "curr_month_visits": 714428.79336099,
      "unique_users": 46170.3940132836,
      "pages_per_visit": 9.13463312892804
    },
    {
      "global_rank": 101394,
      "category_rank": 37,
      "domain": "rm.dk",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 479319.42502909,
      "curr_month_visits": 479319.42502909,
      "unique_users": 234809.276998127,
      "pages_per_visit": 5.62116467911082
    },
    {
      "global_rank": 103070,
      "category_rank": 38,
      "domain": "youth19.com",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 1070909.11312932,
      "curr_month_visits": 1070909.11312932,
      "unique_users": 666626.304412656,
      "pages_per_visit": 1.44138039773586
    },
    {
      "global_rank": 115416,
      "category_rank": 38,
      "domain": "mamanoko.jp",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 551059.690429654,
      "curr_month_visits": 551059.690429654,
      "unique_users": 386391.840616539,
      "pages_per_visit": 1.71998242950531
    },
    {
      "global_rank": 81620,
      "category_rank": 38,
      "domain": "mamanatural.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 863151.501437589,
      "curr_month_visits": 863151.501437589,
      "unique_users": 557096.686681946,
      "pages_per_visit": 2.15747904410217
    },
    {
      "global_rank": 4481,
      "category_rank": 38,
      "domain": "pointclickcare.com",
      "category": "Health/Health",
      "avg_month_visits": 5621623.05087464,
      "curr_month_visits": 5621623.05087464,
      "unique_users": 332877.731186303,
      "pages_per_visit": 55.5607522796415
    },
    {
      "global_rank": 91822,
      "category_rank": 38,
      "domain": "careers.lilly.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 554519.872842546,
      "curr_month_visits": 554519.872842546,
      "unique_users": 277006.661130622,
      "pages_per_visit": 4.55699595646894
    },
    {
      "global_rank": 16133,
      "category_rank": 38,
      "domain": "uhhospitals.org",
      "category": "Health/Medicine",
      "avg_month_visits": 3533492.77782819,
      "curr_month_visits": 3533492.77782819,
      "unique_users": 1476650.23997621,
      "pages_per_visit": 4.70527557266507
    },
    {
      "global_rank": 58829,
      "category_rank": 38,
      "domain": "lakartidningen.se",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1149165.45545888,
      "curr_month_visits": 1149165.45545888,
      "unique_users": 501690.272433862,
      "pages_per_visit": 1.77027291657941
    },
    {
      "global_rank": 141680,
      "category_rank": 38,
      "domain": "sanitaire-social.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 377532.63083982,
      "curr_month_visits": 377532.63083982,
      "unique_users": 286716.279071332,
      "pages_per_visit": 2.38118758749586
    },
    {
      "global_rank": 44754,
      "category_rank": 38,
      "domain": "therapistaid.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1080637.71301736,
      "curr_month_visits": 1080637.71301736,
      "unique_users": 459194.673661457,
      "pages_per_visit": 4.97757588318484
    },
    {
      "global_rank": 78128,
      "category_rank": 38,
      "domain": "3shape.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 972540.206435684,
      "curr_month_visits": 972540.206435684,
      "unique_users": 202926.212744526,
      "pages_per_visit": 2.87233038343669
    },
    {
      "global_rank": 122234,
      "category_rank": 38,
      "domain": "naturheilkompass.de",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 546570.54502763,
      "curr_month_visits": 546570.54502763,
      "unique_users": 359934.598018901,
      "pages_per_visit": 1.32248814856132
    },
    {
      "global_rank": 271719,
      "category_rank": 38,
      "domain": "mobilityworks.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 154491.332841776,
      "curr_month_visits": 154491.332841776,
      "unique_users": 99007.4935538302,
      "pages_per_visit": 3.11546271322378
    },
    {
      "global_rank": 16159,
      "category_rank": 38,
      "domain": "apoteket.se",
      "category": "Health/Pharmacy",
      "avg_month_visits": 3972142.7271531,
      "curr_month_visits": 3972142.7271531,
      "unique_users": 1853406.71523658,
      "pages_per_visit": 3.14959223493514
    },
    {
      "global_rank": 26503,
      "category_rank": 38,
      "domain": "galen.bg",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1853283.13817589,
      "curr_month_visits": 1853283.13817589,
      "unique_users": 897474.099066137,
      "pages_per_visit": 3.60788773275086
    },
    {
      "global_rank": 371156,
      "category_rank": 38,
      "domain": "trtnation.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 129947.729044907,
      "curr_month_visits": 129947.729044907,
      "unique_users": 59696.8270724992,
      "pages_per_visit": 2.09176278613391
    },
    {
      "global_rank": 110453,
      "category_rank": 38,
      "domain": "seedsman.com",
      "category": "Health/Addictions",
      "avg_month_visits": 273229.325256322,
      "curr_month_visits": 273229.325256322,
      "unique_users": 119913.404407077,
      "pages_per_visit": 5.8088848979356
    },
    {
      "global_rank": 122547,
      "category_rank": 39,
      "domain": "therapia.gr",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 458332.897927988,
      "curr_month_visits": 458332.897927988,
      "unique_users": 296627.731224086,
      "pages_per_visit": 1.69519675674904
    },
    {
      "global_rank": 110456,
      "category_rank": 39,
      "domain": "lightningstep.com",
      "category": "Health/Addictions",
      "avg_month_visits": 364591.534725601,
      "curr_month_visits": 364591.534725601,
      "unique_users": 20315.0160559594,
      "pages_per_visit": 17.0696238021272
    },
    {
      "global_rank": 59548,
      "category_rank": 39,
      "domain": "sanego.de",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1301676.63562163,
      "curr_month_visits": 1301676.63562163,
      "unique_users": 1007600.05494696,
      "pages_per_visit": 1.61738390446782
    },
    {
      "global_rank": 83453,
      "category_rank": 39,
      "domain": "docasap.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 645030.699580065,
      "curr_month_visits": 645030.699580065,
      "unique_users": 372113.352646133,
      "pages_per_visit": 3.41792893387198
    },
    {
      "global_rank": 17478,
      "category_rank": 39,
      "domain": "366.ru",
      "category": "Health/Pharmacy",
      "avg_month_visits": 4148326.84082887,
      "curr_month_visits": 4148326.84082887,
      "unique_users": 2969968.78024582,
      "pages_per_visit": 2.2153855493693
    },
    {
      "global_rank": 118632,
      "category_rank": 39,
      "domain": "childcare.co.uk",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 353644.796802475,
      "curr_month_visits": 353644.796802475,
      "unique_users": 175060.49088816,
      "pages_per_visit": 6.80683992154506
    },
    {
      "global_rank": 92161,
      "category_rank": 39,
      "domain": "fiercebiotech.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 772559.196724347,
      "curr_month_visits": 772559.196724347,
      "unique_users": 385289.380311421,
      "pages_per_visit": 1.71280397355678
    },
    {
      "global_rank": 106968,
      "category_rank": 39,
      "domain": "swisstph.ch",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 344458.79380336,
      "curr_month_visits": 344458.79380336,
      "unique_users": 42263.5828616418,
      "pages_per_visit": 7.85480599275724
    },
    {
      "global_rank": 273428,
      "category_rank": 39,
      "domain": "openfuturelearning.org",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 38187.6100371475,
      "curr_month_visits": 38187.6100371475,
      "unique_users": 14702.4807130185,
      "pages_per_visit": 19.8777775107999
    },
    {
      "global_rank": 79907,
      "category_rank": 39,
      "domain": "fnanen.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 763698.146385894,
      "curr_month_visits": 763698.146385894,
      "unique_users": 379256.774016134,
      "pages_per_visit": 2.65749794669368
    },
    {
      "global_rank": 4643,
      "category_rank": 39,
      "domain": "doctolib.de",
      "category": "Health/Health",
      "avg_month_visits": 11370823.710361,
      "curr_month_visits": 11370823.710361,
      "unique_users": 5899827.10271787,
      "pages_per_visit": 5.50229013835727
    },
    {
      "global_rank": 380902,
      "category_rank": 39,
      "domain": "growplex.co",
      "category": "Health/Mens_Health",
      "avg_month_visits": 85702.953023511,
      "curr_month_visits": 85702.953023511,
      "unique_users": 27679.9789482694,
      "pages_per_visit": 4.64310096094199
    },
    {
      "global_rank": 45720,
      "category_rank": 39,
      "domain": "mhanational.org",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1369893.10783533,
      "curr_month_visits": 1369893.10783533,
      "unique_users": 941243.529668213,
      "pages_per_visit": 2.55609848042905
    },
    {
      "global_rank": 145851,
      "category_rank": 39,
      "domain": "alayacare.ca",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 159796.366813554,
      "curr_month_visits": 159796.366813554,
      "unique_users": 16593.4806906063,
      "pages_per_visit": 16.8219091409563
    },
    {
      "global_rank": 16630,
      "category_rank": 39,
      "domain": "upmc.com",
      "category": "Health/Medicine",
      "avg_month_visits": 4230796.30237508,
      "curr_month_visits": 4230796.30237508,
      "unique_users": 1880085.43404712,
      "pages_per_visit": 3.47468659967588
    },
    {
      "global_rank": 27626,
      "category_rank": 39,
      "domain": "efarma.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 2329720.44129325,
      "curr_month_visits": 2329720.44129325,
      "unique_users": 1515701.43906962,
      "pages_per_visit": 2.65677854420297
    },
    {
      "global_rank": 18463,
      "category_rank": 40,
      "domain": "erx.com.au",
      "category": "Health/Pharmacy",
      "avg_month_visits": 3765705.03980603,
      "curr_month_visits": 3765705.03980603,
      "unique_users": 1502748.13266192,
      "pages_per_visit": 2.78979227374776
    },
    {
      "global_rank": 60430,
      "category_rank": 40,
      "domain": "diabetes.org.uk",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1176059.92728366,
      "curr_month_visits": 1176059.92728366,
      "unique_users": 745083.937838861,
      "pages_per_visit": 2.32583279541467
    },
    {
      "global_rank": 124606,
      "category_rank": 40,
      "domain": "tkp.at",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 557154.191603039,
      "curr_month_visits": 557154.191603039,
      "unique_users": 200881.401075167,
      "pages_per_visit": 1.82647633255551
    },
    {
      "global_rank": 46646,
      "category_rank": 40,
      "domain": "attachmentproject.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1345378.50491753,
      "curr_month_visits": 1345378.50491753,
      "unique_users": 677344.239523202,
      "pages_per_visit": 3.75665846494436
    },
    {
      "global_rank": 16702,
      "category_rank": 40,
      "domain": "amc.seoul.kr",
      "category": "Health/Medicine",
      "avg_month_visits": 4545688.39838755,
      "curr_month_visits": 4545688.39838755,
      "unique_users": 2901943.56443501,
      "pages_per_visit": 1.89379527033167
    },
    {
      "global_rank": 27920,
      "category_rank": 40,
      "domain": "lafitness.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 2028561.01315442,
      "curr_month_visits": 2028561.01315442,
      "unique_users": 1201279.68852224,
      "pages_per_visit": 3.43607551736833
    },
    {
      "global_rank": 84140,
      "category_rank": 40,
      "domain": "sobrus.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 340210.16723755,
      "curr_month_visits": 340210.16723755,
      "unique_users": 18130.714430756,
      "pages_per_visit": 29.0249112653457
    },
    {
      "global_rank": 82802,
      "category_rank": 40,
      "domain": "providerconnect.ca",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 441001.073296272,
      "curr_month_visits": 441001.073296272,
      "unique_users": 58785.862836516,
      "pages_per_visit": 16.1624429617704
    },
    {
      "global_rank": 125303,
      "category_rank": 40,
      "domain": "bebesymas.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 600744.255342894,
      "curr_month_visits": 600744.255342894,
      "unique_users": 403870.512842684,
      "pages_per_visit": 1.57881393274434
    },
    {
      "global_rank": 107135,
      "category_rank": 40,
      "domain": "train.org",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 366507.105184694,
      "curr_month_visits": 366507.105184694,
      "unique_users": 138922.663864136,
      "pages_per_visit": 10.879676770443
    },
    {
      "global_rank": 279866,
      "category_rank": 40,
      "domain": "yot.org.hk",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 140635.23353574,
      "curr_month_visits": 140635.23353574,
      "unique_users": 56115.0894494799,
      "pages_per_visit": 5.14015686376538
    },
    {
      "global_rank": 114192,
      "category_rank": 40,
      "domain": "lekkergaan.nl",
      "category": "Health/Addictions",
      "avg_month_visits": 269945.610426071,
      "curr_month_visits": 269945.610426071,
      "unique_users": 72004.9144905529,
      "pages_per_visit": 5.42150589891091
    },
    {
      "global_rank": 147623,
      "category_rank": 40,
      "domain": "myagedcare.gov.au",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 327727.053429685,
      "curr_month_visits": 327727.053429685,
      "unique_users": 178194.474312008,
      "pages_per_visit": 3.27837690361299
    },
    {
      "global_rank": 390627,
      "category_rank": 40,
      "domain": "will-agaclinic.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 125296.365535202,
      "curr_month_visits": 125296.365535202,
      "unique_users": 91334.7725040623,
      "pages_per_visit": 1.51016488410157
    },
    {
      "global_rank": 92162,
      "category_rank": 40,
      "domain": "fit.clinic",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 778889.118574689,
      "curr_month_visits": 778889.118574689,
      "unique_users": 553038.257017641,
      "pages_per_visit": 1.31677667121232
    },
    {
      "global_rank": 4769,
      "category_rank": 40,
      "domain": "zennioptical.com",
      "category": "Health/Health",
      "avg_month_visits": 7964502.5379847,
      "curr_month_visits": 7964502.5379847,
      "unique_users": 3651845.38957373,
      "pages_per_visit": 7.95179649809318
    },
    {
      "global_rank": 61247,
      "category_rank": 41,
      "domain": "cdc.gov.tw",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1614002.90112554,
      "curr_month_visits": 1614002.90112554,
      "unique_users": 945308.009835118,
      "pages_per_visit": 2.05269970948779
    },
    {
      "global_rank": 126302,
      "category_rank": 41,
      "domain": "premiumsupps.net",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 262593.512588221,
      "curr_month_visits": 262593.512588221,
      "unique_users": 54281.6507740034,
      "pages_per_visit": 5.26883532584239
    },
    {
      "global_rank": 92872,
      "category_rank": 41,
      "domain": "ryukakusan.co.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 656305.295904369,
      "curr_month_visits": 656305.295904369,
      "unique_users": 452502.766047618,
      "pages_per_visit": 1.51123392176886
    },
    {
      "global_rank": 115562,
      "category_rank": 41,
      "domain": "distractionfreeapps.com",
      "category": "Health/Addictions",
      "avg_month_visits": 385811.88468619,
      "curr_month_visits": 385811.88468619,
      "unique_users": 162897.473200717,
      "pages_per_visit": 3.20229067594707
    },
    {
      "global_rank": 85253,
      "category_rank": 41,
      "domain": "pigeon.info",
      "category": "Health/Womens_Health",
      "avg_month_visits": 1025462.1190717,
      "curr_month_visits": 1025462.1190717,
      "unique_users": 513830.842631499,
      "pages_per_visit": 1.24695841110256
    },
    {
      "global_rank": 127970,
      "category_rank": 41,
      "domain": "clinics-app.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 532671.64497608,
      "curr_month_visits": 532671.64497608,
      "unique_users": 310748.528232677,
      "pages_per_visit": 2.32252865999939
    },
    {
      "global_rank": 47170,
      "category_rank": 41,
      "domain": "treatmyocd.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1401125.68020183,
      "curr_month_visits": 1401125.68020183,
      "unique_users": 717286.038699932,
      "pages_per_visit": 2.64989150706638
    },
    {
      "global_rank": 16905,
      "category_rank": 41,
      "domain": "uchealth.org",
      "category": "Health/Medicine",
      "avg_month_visits": 3195394.79778849,
      "curr_month_visits": 3195394.79778849,
      "unique_users": 1090016.37279391,
      "pages_per_visit": 5.34932992391888
    },
    {
      "global_rank": 18590,
      "category_rank": 41,
      "domain": "kegg.jp",
      "category": "Health/Pharmacy",
      "avg_month_visits": 4671009.87229969,
      "curr_month_visits": 4671009.87229969,
      "unique_users": 2877869.88810969,
      "pages_per_visit": 1.76258928636325
    },
    {
      "global_rank": 285753,
      "category_rank": 41,
      "domain": "marconifarma.it",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 97000.8933273984,
      "curr_month_visits": 97000.8933273984,
      "unique_users": 53022.3124597443,
      "pages_per_visit": 5.93804791403058
    },
    {
      "global_rank": 107555,
      "category_rank": 41,
      "domain": "inspq.qc.ca",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 682203.126095101,
      "curr_month_visits": 682203.126095101,
      "unique_users": 401830.425210399,
      "pages_per_visit": 1.87117681845273
    },
    {
      "global_rank": 84110,
      "category_rank": 41,
      "domain": "topsaude.com.br",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 497658.062219265,
      "curr_month_visits": 497658.062219265,
      "unique_users": 60700.6988489241,
      "pages_per_visit": 8.84379225222722
    },
    {
      "global_rank": 4881,
      "category_rank": 41,
      "domain": "medonet.pl",
      "category": "Health/Health",
      "avg_month_visits": 18282322.1980726,
      "curr_month_visits": 18282322.1980726,
      "unique_users": 7107098.31078416,
      "pages_per_visit": 1.53046513662638
    },
    {
      "global_rank": 158338,
      "category_rank": 41,
      "domain": "tels.net",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 354903.219266409,
      "curr_month_visits": 354903.219266409,
      "unique_users": 31493.926969822,
      "pages_per_visit": 4.58129299496909
    },
    {
      "global_rank": 28080,
      "category_rank": 41,
      "domain": "noom.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1644207.14404256,
      "curr_month_visits": 1644207.14404256,
      "unique_users": 1123388.6220624,
      "pages_per_visit": 7.29504743014829
    },
    {
      "global_rank": 402490,
      "category_rank": 41,
      "domain": "maennergesundheit.info",
      "category": "Health/Mens_Health",
      "avg_month_visits": 116073.763364807,
      "curr_month_visits": 116073.763364807,
      "unique_users": 87091.7952513655,
      "pages_per_visit": 1.47190625698527
    },
    {
      "global_rank": 4937,
      "category_rank": 42,
      "domain": "gsuplementos.com.br",
      "category": "Health/Health",
      "avg_month_visits": 10342993.1787817,
      "curr_month_visits": 10342993.1787817,
      "unique_users": 5252408.56590154,
      "pages_per_visit": 6.34841824943962
    },
    {
      "global_rank": 93417,
      "category_rank": 42,
      "domain": "pharmcube.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 516109.801601716,
      "curr_month_visits": 516109.801601716,
      "unique_users": 228001.053971152,
      "pages_per_visit": 4.06670143357848
    },
    {
      "global_rank": 107934,
      "category_rank": 42,
      "domain": "lshtm.ac.uk",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 386396.194750271,
      "curr_month_visits": 386396.194750271,
      "unique_users": 151953.308074554,
      "pages_per_visit": 5.06538762840865
    },
    {
      "global_rank": 18851,
      "category_rank": 42,
      "domain": "riteaid.com",
      "category": "Health/Pharmacy",
      "avg_month_visits": 3668660.34448342,
      "curr_month_visits": 3668660.34448342,
      "unique_users": 2243574.33097931,
      "pages_per_visit": 3.3861137244701
    },
    {
      "global_rank": 87235,
      "category_rank": 42,
      "domain": "natalben.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 939627.759863141,
      "curr_month_visits": 939627.759863141,
      "unique_users": 566122.228971103,
      "pages_per_visit": 1.51182080822092
    },
    {
      "global_rank": 117434,
      "category_rank": 42,
      "domain": "cerebellumacademy.com",
      "category": "Health/Addictions",
      "avg_month_visits": 442546.245141932,
      "curr_month_visits": 442546.245141932,
      "unique_users": 169290.318236825,
      "pages_per_visit": 4.22845373789019
    },
    {
      "global_rank": 161370,
      "category_rank": 42,
      "domain": "aeroflowurology.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 268603.511017979,
      "curr_month_visits": 268603.511017979,
      "unique_users": 160505.808267734,
      "pages_per_visit": 2.69222151980071
    },
    {
      "global_rank": 406445,
      "category_rank": 42,
      "domain": "dirxhealth.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 57860.7354808984,
      "curr_month_visits": 57860.7354808984,
      "unique_users": 32652.4852785552,
      "pages_per_visit": 4.98746456447504
    },
    {
      "global_rank": 16954,
      "category_rank": 42,
      "domain": "new-innov.com",
      "category": "Health/Medicine",
      "avg_month_visits": 2881410.57079686,
      "curr_month_visits": 2881410.57079686,
      "unique_users": 467691.3268477,
      "pages_per_visit": 7.88479419856808
    },
    {
      "global_rank": 48758,
      "category_rank": 42,
      "domain": "embrace-autism.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1359289.99875814,
      "curr_month_visits": 1359289.99875814,
      "unique_users": 689854.927136457,
      "pages_per_visit": 3.37738323199842
    },
    {
      "global_rank": 126893,
      "category_rank": 42,
      "domain": "acuityinsights.app",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 444826.030104657,
      "curr_month_visits": 444826.030104657,
      "unique_users": 137822.559031299,
      "pages_per_visit": 4.92384159181326
    },
    {
      "global_rank": 87647,
      "category_rank": 42,
      "domain": "webdentalsolucoes.io",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 289267.857769353,
      "curr_month_visits": 289267.857769353,
      "unique_users": 10975.7073120661,
      "pages_per_visit": 32.2826734421518
    },
    {
      "global_rank": 28293,
      "category_rank": 42,
      "domain": "wellnessliving.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 2016603.07127349,
      "curr_month_visits": 2016603.07127349,
      "unique_users": 662383.704135885,
      "pages_per_visit": 4.61478891370309
    },
    {
      "global_rank": 287251,
      "category_rank": 42,
      "domain": "shop.bzga.de",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 115387.144069269,
      "curr_month_visits": 115387.144069269,
      "unique_users": 67132.232202698,
      "pages_per_visit": 5.38219315778438
    },
    {
      "global_rank": 130840,
      "category_rank": 42,
      "domain": "kinderaerzte-im-netz.de",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 477596.03806473,
      "curr_month_visits": 477596.03806473,
      "unique_users": 354149.74103008,
      "pages_per_visit": 1.7389836063914
    },
    {
      "global_rank": 61911,
      "category_rank": 42,
      "domain": "diabetes.org",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1213949.0729538,
      "curr_month_visits": 1213949.0729538,
      "unique_users": 804705.546919382,
      "pages_per_visit": 1.95212238553235
    },
    {
      "global_rank": 99307,
      "category_rank": 43,
      "domain": "3esys.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 305244.351269475,
      "curr_month_visits": 305244.351269475,
      "unique_users": 67315.8257777939,
      "pages_per_visit": 11.2814549773751
    },
    {
      "global_rank": 411537,
      "category_rank": 43,
      "domain": "sparktrivia.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 95414.5197980409,
      "curr_month_visits": 95414.5197980409,
      "unique_users": 14698.6495596734,
      "pages_per_visit": 1.6451681858776
    },
    {
      "global_rank": 28354,
      "category_rank": 43,
      "domain": "virtuagym.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1536590.2781532,
      "curr_month_visits": 1536590.2781532,
      "unique_users": 469419.416647974,
      "pages_per_visit": 8.75798447574392
    },
    {
      "global_rank": 19478,
      "category_rank": 43,
      "domain": "salcobrand.cl",
      "category": "Health/Pharmacy",
      "avg_month_visits": 4048969.88893113,
      "curr_month_visits": 4048969.88893113,
      "unique_users": 2280877.89774895,
      "pages_per_visit": 2.71536288759448
    },
    {
      "global_rank": 88508,
      "category_rank": 43,
      "domain": "rectanglehealth.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 954679.25812209,
      "curr_month_visits": 954679.25812209,
      "unique_users": 48698.5289832863,
      "pages_per_visit": 3.22268038492131
    },
    {
      "global_rank": 63306,
      "category_rank": 43,
      "domain": "alzheimers.org.uk",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1147398.27551415,
      "curr_month_visits": 1147398.27551415,
      "unique_users": 694185.005069759,
      "pages_per_visit": 2.23075467709728
    },
    {
      "global_rank": 17186,
      "category_rank": 43,
      "domain": "atriumhealth.org",
      "category": "Health/Medicine",
      "avg_month_visits": 3067191.78317526,
      "curr_month_visits": 3067191.78317526,
      "unique_users": 1072429.782264,
      "pages_per_visit": 6.06603539466232
    },
    {
      "global_rank": 88286,
      "category_rank": 43,
      "domain": "unclinic.ru",
      "category": "Health/Womens_Health",
      "avg_month_visits": 857051.746838312,
      "curr_month_visits": 857051.746838312,
      "unique_users": 629516.037538896,
      "pages_per_visit": 1.29503032704408
    },
    {
      "global_rank": 129011,
      "category_rank": 43,
      "domain": "foodpovar.ru",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 703495.904563782,
      "curr_month_visits": 703495.904563782,
      "unique_users": 108019.556055038,
      "pages_per_visit": 1.45412250667614
    },
    {
      "global_rank": 136624,
      "category_rank": 43,
      "domain": "parents.ru",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 511653.537631778,
      "curr_month_visits": 511653.537631778,
      "unique_users": 366403.567886197,
      "pages_per_visit": 1.44695185652839
    },
    {
      "global_rank": 108401,
      "category_rank": 43,
      "domain": "konsylium24.pl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 356266.045421552,
      "curr_month_visits": 356266.045421552,
      "unique_users": 89674.2578327796,
      "pages_per_visit": 16.5847927764399
    },
    {
      "global_rank": 49309,
      "category_rank": 43,
      "domain": "breeze-wellbeing.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1323193.99930093,
      "curr_month_visits": 1323193.99930093,
      "unique_users": 942600.911905599,
      "pages_per_visit": 3.62137233084269
    },
    {
      "global_rank": 119825,
      "category_rank": 43,
      "domain": "cannaconnection.com",
      "category": "Health/Addictions",
      "avg_month_visits": 507970.102866225,
      "curr_month_visits": 507970.102866225,
      "unique_users": 289020.473058412,
      "pages_per_visit": 1.86579022730323
    },
    {
      "global_rank": 291100,
      "category_rank": 43,
      "domain": "elo-forum.org",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 168546.038456183,
      "curr_month_visits": 168546.038456183,
      "unique_users": 100959.476749346,
      "pages_per_visit": 2.03459306285371
    },
    {
      "global_rank": 5030,
      "category_rank": 43,
      "domain": "practo.com",
      "category": "Health/Health",
      "avg_month_visits": 13445726.3111449,
      "curr_month_visits": 13445726.3111449,
      "unique_users": 7917282.95854438,
      "pages_per_visit": 2.77484534210316
    },
    {
      "global_rank": 162404,
      "category_rank": 43,
      "domain": "carefeed.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 156242.013246755,
      "curr_month_visits": 156242.013246755,
      "unique_users": 58199.5232137238,
      "pages_per_visit": 4.49981708602667
    },
    {
      "global_rank": 129775,
      "category_rank": 44,
      "domain": "erewhon.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 365787.07991168,
      "curr_month_visits": 365787.07991168,
      "unique_users": 229630.4957949,
      "pages_per_visit": 3.59924236407239
    },
    {
      "global_rank": 122537,
      "category_rank": 44,
      "domain": "dutch-passion.com",
      "category": "Health/Addictions",
      "avg_month_visits": 478095.421515244,
      "curr_month_visits": 478095.421515244,
      "unique_users": 249007.651278308,
      "pages_per_visit": 2.5891041438735
    },
    {
      "global_rank": 50915,
      "category_rank": 44,
      "domain": "clinical-partners.co.uk",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1118537.34476785,
      "curr_month_visits": 1118537.34476785,
      "unique_users": 712479.912292555,
      "pages_per_visit": 2.73830281476732
    },
    {
      "global_rank": 137384,
      "category_rank": 44,
      "domain": "cps.ca",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 452295.452237366,
      "curr_month_visits": 452295.452237366,
      "unique_users": 272013.882970788,
      "pages_per_visit": 2.00779713832784
    },
    {
      "global_rank": 30092,
      "category_rank": 44,
      "domain": "yoga-lava.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 2168600.63284318,
      "curr_month_visits": 2168600.63284318,
      "unique_users": 623376.899651629,
      "pages_per_visit": 4.62487938098524
    },
    {
      "global_rank": 295098,
      "category_rank": 44,
      "domain": "korian.it",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 150431.214532194,
      "curr_month_visits": 150431.214532194,
      "unique_users": 102446.745431039,
      "pages_per_visit": 2.72042737325466
    },
    {
      "global_rank": 89545,
      "category_rank": 44,
      "domain": "platanomelon.mx",
      "category": "Health/Womens_Health",
      "avg_month_visits": 270357.475464488,
      "curr_month_visits": 270357.475464488,
      "unique_users": 155912.827704824,
      "pages_per_visit": 6.76610167441023
    },
    {
      "global_rank": 64065,
      "category_rank": 44,
      "domain": "duodecimlehti.fi",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1257010.95865673,
      "curr_month_visits": 1257010.95865673,
      "unique_users": 751217.89011002,
      "pages_per_visit": 1.83230280006838
    },
    {
      "global_rank": 19972,
      "category_rank": 44,
      "domain": "covermymeds.com",
      "category": "Health/Pharmacy",
      "avg_month_visits": 2484724.28697286,
      "curr_month_visits": 2484724.28697286,
      "unique_users": 319471.579660379,
      "pages_per_visit": 10.0951204984263
    },
    {
      "global_rank": 169817,
      "category_rank": 44,
      "domain": "ersp.biz",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 225561.492048156,
      "curr_month_visits": 225561.492048156,
      "unique_users": 20617.346505623,
      "pages_per_visit": 8.2524601978456
    },
    {
      "global_rank": 110082,
      "category_rank": 44,
      "domain": "complimentawork.dk",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 131085.809742683,
      "curr_month_visits": 131085.809742683,
      "unique_users": 27542.2875016922,
      "pages_per_visit": 57.4940534006177
    },
    {
      "global_rank": 101470,
      "category_rank": 44,
      "domain": "isolms.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 341901.814949587,
      "curr_month_visits": 341901.814949587,
      "unique_users": 129733.652170127,
      "pages_per_visit": 7.1315373148689
    },
    {
      "global_rank": 17916,
      "category_rank": 44,
      "domain": "aah.org",
      "category": "Health/Medicine",
      "avg_month_visits": 3023232.11254484,
      "curr_month_visits": 3023232.11254484,
      "unique_users": 1068601.41389236,
      "pages_per_visit": 6.21797763480116
    },
    {
      "global_rank": 5106,
      "category_rank": 44,
      "domain": "ema.md",
      "category": "Health/Health",
      "avg_month_visits": 5530197.78081593,
      "curr_month_visits": 5530197.78081593,
      "unique_users": 2074263.49725131,
      "pages_per_visit": 23.4787108752072
    },
    {
      "global_rank": 412769,
      "category_rank": 44,
      "domain": "kato-aga-clinic.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 127294.196533334,
      "curr_month_visits": 127294.196533334,
      "unique_users": 80563.2164976762,
      "pages_per_visit": 1.25952272803901
    },
    {
      "global_rank": 90071,
      "category_rank": 44,
      "domain": "patientconnect365.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 699880.816860165,
      "curr_month_visits": 699880.816860165,
      "unique_users": 530717.837167741,
      "pages_per_visit": 2.89197596834042
    },
    {
      "global_rank": 51019,
      "category_rank": 45,
      "domain": "sondermind.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 877171.72268874,
      "curr_month_visits": 877171.72268874,
      "unique_users": 301267.059531505,
      "pages_per_visit": 6.8911997345735
    },
    {
      "global_rank": 130259,
      "category_rank": 45,
      "domain": "symptomdepot.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 331832.347755821,
      "curr_month_visits": 331832.347755821,
      "unique_users": 264419.347757429,
      "pages_per_visit": 1.93005256314228
    },
    {
      "global_rank": 64504,
      "category_rank": 45,
      "domain": "wibbi.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 796499.712609371,
      "curr_month_visits": 796499.712609371,
      "unique_users": 270435.830350328,
      "pages_per_visit": 6.57041929579549
    },
    {
      "global_rank": 424546,
      "category_rank": 45,
      "domain": "prioritymensmedical.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 116056.634991787,
      "curr_month_visits": 116056.634991787,
      "unique_users": 60822.4985745822,
      "pages_per_visit": 1.66707766376527
    },
    {
      "global_rank": 18201,
      "category_rank": 45,
      "domain": "physio-pedia.com",
      "category": "Health/Medicine",
      "avg_month_visits": 5172176.08852294,
      "curr_month_visits": 5172176.08852294,
      "unique_users": 2708911.22082559,
      "pages_per_visit": 2.16050597065974
    },
    {
      "global_rank": 31580,
      "category_rank": 45,
      "domain": "crunch.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1981940.92317533,
      "curr_month_visits": 1981940.92317533,
      "unique_users": 1137733.77488317,
      "pages_per_visit": 2.7477090255387
    },
    {
      "global_rank": 123441,
      "category_rank": 45,
      "domain": "liki.uz",
      "category": "Health/Addictions",
      "avg_month_visits": 464187.384387452,
      "curr_month_visits": 464187.384387452,
      "unique_users": 217568.784300885,
      "pages_per_visit": 1.71095362127208
    },
    {
      "global_rank": 5239,
      "category_rank": 45,
      "domain": "uworld.com",
      "category": "Health/Health",
      "avg_month_visits": 12551995.4443331,
      "curr_month_visits": 12551995.4443331,
      "unique_users": 1145601.56174032,
      "pages_per_visit": 5.67808821293395
    },
    {
      "global_rank": 170065,
      "category_rank": 45,
      "domain": "synergyemr.net",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 171307.167474617,
      "curr_month_visits": 171307.167474617,
      "unique_users": 8412.64405256368,
      "pages_per_visit": 18.0532356242113
    },
    {
      "global_rank": 138011,
      "category_rank": 45,
      "domain": "sickkids.ca",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 348107.408897954,
      "curr_month_visits": 348107.408897954,
      "unique_users": 139269.375494422,
      "pages_per_visit": 3.85299525115155
    },
    {
      "global_rank": 90103,
      "category_rank": 45,
      "domain": "rcog.org.uk",
      "category": "Health/Womens_Health",
      "avg_month_visits": 527760.83368578,
      "curr_month_visits": 527760.83368578,
      "unique_users": 233425.456038929,
      "pages_per_visit": 3.74030134428827
    },
    {
      "global_rank": 102439,
      "category_rank": 45,
      "domain": "ratiopharm.de",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 699974.865240854,
      "curr_month_visits": 699974.865240854,
      "unique_users": 563883.604050276,
      "pages_per_visit": 1.36187247578543
    },
    {
      "global_rank": 20373,
      "category_rank": 45,
      "domain": "ultrafarma.com.br",
      "category": "Health/Pharmacy",
      "avg_month_visits": 2559856.25350107,
      "curr_month_visits": 2559856.25350107,
      "unique_users": 1345558.24202973,
      "pages_per_visit": 4.57310911184056
    },
    {
      "global_rank": 90426,
      "category_rank": 45,
      "domain": "dentalhub.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 590508.539304199,
      "curr_month_visits": 590508.539304199,
      "unique_users": 39035.5503499643,
      "pages_per_visit": 6.67402105944532
    },
    {
      "global_rank": 111310,
      "category_rank": 45,
      "domain": "protection-civile.org",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 309994.300875766,
      "curr_month_visits": 309994.300875766,
      "unique_users": 88696.7887521139,
      "pages_per_visit": 8.4345116604149
    },
    {
      "global_rank": 296743,
      "category_rank": 45,
      "domain": "curaleafclinic.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 167672.797568781,
      "curr_month_visits": 167672.797568781,
      "unique_users": 70556.1046395955,
      "pages_per_visit": 3.46628416124198
    },
    {
      "global_rank": 21475,
      "category_rank": 46,
      "domain": "shop-apotheke.at",
      "category": "Health/Pharmacy",
      "avg_month_visits": 2346023.6543312,
      "curr_month_visits": 2346023.6543312,
      "unique_users": 1171365.33598331,
      "pages_per_visit": 4.91902989487672
    },
    {
      "global_rank": 457395,
      "category_rank": 46,
      "domain": "aventusclinic.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 85753.6123807961,
      "curr_month_visits": 85753.6123807961,
      "unique_users": 46944.6009124898,
      "pages_per_visit": 1.4665289500826
    },
    {
      "global_rank": 125986,
      "category_rank": 46,
      "domain": "adxs.org",
      "category": "Health/Addictions",
      "avg_month_visits": 289905.758724358,
      "curr_month_visits": 289905.758724358,
      "unique_users": 119602.189493949,
      "pages_per_visit": 4.47877899274052
    },
    {
      "global_rank": 91235,
      "category_rank": 46,
      "domain": "womenshealth.gov",
      "category": "Health/Womens_Health",
      "avg_month_visits": 734744.05932888,
      "curr_month_visits": 734744.05932888,
      "unique_users": 494859.990295744,
      "pages_per_visit": 1.42503515720418
    },
    {
      "global_rank": 31594,
      "category_rank": 46,
      "domain": "cronometer.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 2625461.89930461,
      "curr_month_visits": 2625461.89930461,
      "unique_users": 611007.30514592,
      "pages_per_visit": 2.51914905116738
    },
    {
      "global_rank": 18399,
      "category_rank": 46,
      "domain": "med.or.jp",
      "category": "Health/Medicine",
      "avg_month_visits": 4301932.35265783,
      "curr_month_visits": 4301932.35265783,
      "unique_users": 2893751.85773235,
      "pages_per_visit": 2.27970972535385
    },
    {
      "global_rank": 64771,
      "category_rank": 46,
      "domain": "amsterdamumc.nl",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 920594.129707818,
      "curr_month_visits": 920594.129707818,
      "unique_users": 268523.245519389,
      "pages_per_visit": 3.52606133304146
    },
    {
      "global_rank": 140255,
      "category_rank": 46,
      "domain": "ilkadimlarim.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 454509.482087383,
      "curr_month_visits": 454509.482087383,
      "unique_users": 286484.16972345,
      "pages_per_visit": 1.77268357124764
    },
    {
      "global_rank": 90889,
      "category_rank": 46,
      "domain": "providerpayments.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 550760.684612389,
      "curr_month_visits": 550760.684612389,
      "unique_users": 169258.446364279,
      "pages_per_visit": 3.63008956864852
    },
    {
      "global_rank": 297530,
      "category_rank": 46,
      "domain": "clcmoodle.org",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 74703.0807071034,
      "curr_month_visits": 74703.0807071034,
      "unique_users": 26801.8129941294,
      "pages_per_visit": 18.6225630806677
    },
    {
      "global_rank": 5349,
      "category_rank": 46,
      "domain": "uptodate.com",
      "category": "Health/Health",
      "avg_month_visits": 11981268.6206007,
      "curr_month_visits": 11981268.6206007,
      "unique_users": 4225611.75637121,
      "pages_per_visit": 4.51617736396332
    },
    {
      "global_rank": 51067,
      "category_rank": 46,
      "domain": "helpguide.org",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1607367.07084171,
      "curr_month_visits": 1607367.07084171,
      "unique_users": 1067866.50816474,
      "pages_per_visit": 1.48434636097974
    },
    {
      "global_rank": 103347,
      "category_rank": 46,
      "domain": "amgen.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 559373.095261036,
      "curr_month_visits": 559373.095261036,
      "unique_users": 298043.299057871,
      "pages_per_visit": 2.58996663757924
    },
    {
      "global_rank": 113693,
      "category_rank": 46,
      "domain": "healthdata.org",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 485766.42687987,
      "curr_month_visits": 485766.42687987,
      "unique_users": 234836.546099641,
      "pages_per_visit": 2.87279100738612
    },
    {
      "global_rank": 458156,
      "category_rank": 47,
      "domain": "first-clinic.jp",
      "category": "Health/Mens_Health",
      "avg_month_visits": 113871.744624819,
      "curr_month_visits": 113871.744624819,
      "unique_users": 88209.9740649685,
      "pages_per_visit": 1.35664807255643
    },
    {
      "global_rank": 21736,
      "category_rank": 47,
      "domain": "farmaciasanpablo.com.mx",
      "category": "Health/Pharmacy",
      "avg_month_visits": 2975366.86455161,
      "curr_month_visits": 2975366.86455161,
      "unique_users": 1730843.12097792,
      "pages_per_visit": 3.01189201105936
    },
    {
      "global_rank": 95804,
      "category_rank": 47,
      "domain": "siscomplete.cloud",
      "category": "Health/Womens_Health",
      "avg_month_visits": 484885.856175991,
      "curr_month_visits": 484885.856175991,
      "unique_users": 93685.6378661083,
      "pages_per_visit": 9.37193711516662
    },
    {
      "global_rank": 5538,
      "category_rank": 47,
      "domain": "anthem.com",
      "category": "Health/Health",
      "avg_month_visits": 8497084.23579496,
      "curr_month_visits": 8497084.23579496,
      "unique_users": 4127861.28673143,
      "pages_per_visit": 5.80923504965027
    },
    {
      "global_rank": 143394,
      "category_rank": 47,
      "domain": "materinstvo.ru",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 527833.397300763,
      "curr_month_visits": 527833.397300763,
      "unique_users": 160841.771123503,
      "pages_per_visit": 4.19538516162319
    },
    {
      "global_rank": 115527,
      "category_rank": 47,
      "domain": "santepubliquefrance.fr",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 588467.980739563,
      "curr_month_visits": 588467.980739563,
      "unique_users": 392221.292707722,
      "pages_per_visit": 1.84788075794568
    },
    {
      "global_rank": 91801,
      "category_rank": 47,
      "domain": "enguard.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 800338.98368302,
      "curr_month_visits": 800338.98368302,
      "unique_users": 49448.061226294,
      "pages_per_visit": 4.23681509047581
    },
    {
      "global_rank": 173293,
      "category_rank": 47,
      "domain": "homeinstead.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 312253.06069039,
      "curr_month_visits": 312253.06069039,
      "unique_users": 242604.6084645,
      "pages_per_visit": 2.13669699105505
    },
    {
      "global_rank": 298954,
      "category_rank": 47,
      "domain": "rh-dt.de",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 137953.732578204,
      "curr_month_visits": 137953.732578204,
      "unique_users": 60318.8100251523,
      "pages_per_visit": 2.35570432378692
    },
    {
      "global_rank": 52914,
      "category_rank": 47,
      "domain": "psychologue.net",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1571977.27378948,
      "curr_month_visits": 1571977.27378948,
      "unique_users": 1033814.63691892,
      "pages_per_visit": 1.58649692816774
    },
    {
      "global_rank": 107341,
      "category_rank": 47,
      "domain": "iconplc.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 476048.311221069,
      "curr_month_visits": 476048.311221069,
      "unique_users": 187020.945005179,
      "pages_per_visit": 3.69838065538539
    },
    {
      "global_rank": 65951,
      "category_rank": 47,
      "domain": "arthritis.org",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1235722.87572199,
      "curr_month_visits": 1235722.87572199,
      "unique_users": 833694.430551483,
      "pages_per_visit": 1.53491447122196
    },
    {
      "global_rank": 135262,
      "category_rank": 47,
      "domain": "healversity.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 258083.827958677,
      "curr_month_visits": 258083.827958677,
      "unique_users": 39726.5530881629,
      "pages_per_visit": 5.83053597654286
    },
    {
      "global_rank": 31845,
      "category_rank": 47,
      "domain": "mfitpersonal.com.br",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1294485.74753797,
      "curr_month_visits": 1294485.74753797,
      "unique_users": 338348.050435256,
      "pages_per_visit": 9.15445633274317
    },
    {
      "global_rank": 19266,
      "category_rank": 47,
      "domain": "emias.info",
      "category": "Health/Medicine",
      "avg_month_visits": 3928785.71483918,
      "curr_month_visits": 3928785.71483918,
      "unique_users": 769792.832558742,
      "pages_per_visit": 2.89809700808926
    },
    {
      "global_rank": 129260,
      "category_rank": 47,
      "domain": "zinniahealth.com",
      "category": "Health/Addictions",
      "avg_month_visits": 560358.272636854,
      "curr_month_visits": 560358.272636854,
      "unique_users": 395154.72857216,
      "pages_per_visit": 1.31901523958652
    },
    {
      "global_rank": 176080,
      "category_rank": 48,
      "domain": "theseniorlist.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 332688.200338876,
      "curr_month_visits": 332688.200338876,
      "unique_users": 263520.150224909,
      "pages_per_visit": 1.51665263003122
    },
    {
      "global_rank": 54694,
      "category_rank": 48,
      "domain": "samhsa.gov",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1195039.37619886,
      "curr_month_visits": 1195039.37619886,
      "unique_users": 830267.809345511,
      "pages_per_visit": 2.23865474098064
    },
    {
      "global_rank": 21880,
      "category_rank": 48,
      "domain": "farmaline.be",
      "category": "Health/Pharmacy",
      "avg_month_visits": 2436949.41558056,
      "curr_month_visits": 2436949.41558056,
      "unique_users": 1052383.23782891,
      "pages_per_visit": 5.72501961170767
    },
    {
      "global_rank": 31874,
      "category_rank": 48,
      "domain": "24hourfitness.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1827016.10304831,
      "curr_month_visits": 1827016.10304831,
      "unique_users": 1107935.24557673,
      "pages_per_visit": 3.94575475533143
    },
    {
      "global_rank": 136843,
      "category_rank": 48,
      "domain": "drlivingood.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 298756.764682324,
      "curr_month_visits": 298756.764682324,
      "unique_users": 155948.825969189,
      "pages_per_visit": 3.02026289982224
    },
    {
      "global_rank": 116603,
      "category_rank": 48,
      "domain": "minsundhedsplatform.dk",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 299532.71416463,
      "curr_month_visits": 299532.71416463,
      "unique_users": 123102.421427691,
      "pages_per_visit": 8.43580934326054
    },
    {
      "global_rank": 459649,
      "category_rank": 48,
      "domain": "d-clinicgroup.jp",
      "category": "Health/Mens_Health",
      "avg_month_visits": 90232.8890080276,
      "curr_month_visits": 90232.8890080276,
      "unique_users": 59006.3416482065,
      "pages_per_visit": 1.39683162595862
    },
    {
      "global_rank": 129328,
      "category_rank": 48,
      "domain": "saa-recovery.org",
      "category": "Health/Addictions",
      "avg_month_visits": 486635.340535572,
      "curr_month_visits": 486635.340535572,
      "unique_users": 172573.677927753,
      "pages_per_visit": 2.56646024887788
    },
    {
      "global_rank": 65985,
      "category_rank": 48,
      "domain": "herzstiftung.de",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1177634.03918787,
      "curr_month_visits": 1177634.03918787,
      "unique_users": 853823.360896049,
      "pages_per_visit": 1.64433045450779
    },
    {
      "global_rank": 308713,
      "category_rank": 48,
      "domain": "abilitynet.org.uk",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 183536.344780098,
      "curr_month_visits": 183536.344780098,
      "unique_users": 106640.50469779,
      "pages_per_visit": 1.84119716896232
    },
    {
      "global_rank": 19283,
      "category_rank": 48,
      "domain": "thewom.it",
      "category": "Health/Medicine",
      "avg_month_visits": 4274493.49224551,
      "curr_month_visits": 4274493.49224551,
      "unique_users": 2893034.19415697,
      "pages_per_visit": 1.65194157872144
    },
    {
      "global_rank": 107512,
      "category_rank": 48,
      "domain": "kyowakirin.co.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 612923.316036848,
      "curr_month_visits": 612923.316036848,
      "unique_users": 498928.918881009,
      "pages_per_visit": 1.79069999625045
    },
    {
      "global_rank": 5593,
      "category_rank": 48,
      "domain": "uteka.ru",
      "category": "Health/Health",
      "avg_month_visits": 12232437.5471982,
      "curr_month_visits": 12232437.5471982,
      "unique_users": 7731072.62568328,
      "pages_per_visit": 2.38881886089895
    },
    {
      "global_rank": 95917,
      "category_rank": 48,
      "domain": "stdcheck.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 567621.862062559,
      "curr_month_visits": 567621.862062559,
      "unique_users": 315019.215108378,
      "pages_per_visit": 3.12412654448403
    },
    {
      "global_rank": 144033,
      "category_rank": 48,
      "domain": "forocrianzanatural.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 272281.045127183,
      "curr_month_visits": 272281.045127183,
      "unique_users": 100293.554896541,
      "pages_per_visit": 5.55810735294855
    },
    {
      "global_rank": 92930,
      "category_rank": 48,
      "domain": "curvegro.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 542375.704953154,
      "curr_month_visits": 542375.704953154,
      "unique_users": 326571.356391669,
      "pages_per_visit": 2.95920380544514
    },
    {
      "global_rank": 19426,
      "category_rank": 49,
      "domain": "mskcc.org",
      "category": "Health/Medicine",
      "avg_month_visits": 3475976.88112322,
      "curr_month_visits": 3475976.88112322,
      "unique_users": 1825268.19883754,
      "pages_per_visit": 3.17814975591707
    },
    {
      "global_rank": 94820,
      "category_rank": 49,
      "domain": "mrweb-yoyakuv.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 446570.040050658,
      "curr_month_visits": 446570.040050658,
      "unique_users": 118496.243983798,
      "pages_per_visit": 7.50283255833278
    },
    {
      "global_rank": 66472,
      "category_rank": 49,
      "domain": "playtimescheduler.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1434918.06363252,
      "curr_month_visits": 1434918.06363252,
      "unique_users": 116162.874151908,
      "pages_per_visit": 3.03480209160614
    },
    {
      "global_rank": 132257,
      "category_rank": 49,
      "domain": "travel.articlepost.net",
      "category": "Health/Addictions",
      "avg_month_visits": 997669.335530879,
      "curr_month_visits": 997669.335530879,
      "unique_users": 431052.746020072,
      "pages_per_visit": 1.99532034449939
    },
    {
      "global_rank": 139110,
      "category_rank": 49,
      "domain": "sifsaf.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 150535.304920956,
      "curr_month_visits": 150535.304920956,
      "unique_users": 86271.3439457002,
      "pages_per_visit": 6.08421165784133
    },
    {
      "global_rank": 32831,
      "category_rank": 49,
      "domain": "bodybuilding.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 2814796.74297149,
      "curr_month_visits": 2814796.74297149,
      "unique_users": 1644796.68410794,
      "pages_per_visit": 2.19329087787945
    },
    {
      "global_rank": 315103,
      "category_rank": 49,
      "domain": "guidedogs.org.uk",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 133673.962659117,
      "curr_month_visits": 133673.962659117,
      "unique_users": 84051.8758107592,
      "pages_per_visit": 2.29579564072049
    },
    {
      "global_rank": 463656,
      "category_rank": 49,
      "domain": "easytoys.de",
      "category": "Health/Mens_Health",
      "avg_month_visits": 67966.8323052519,
      "curr_month_visits": 67966.8323052519,
      "unique_users": 36621.1992269516,
      "pages_per_visit": 3.62258609452181
    },
    {
      "global_rank": 22060,
      "category_rank": 49,
      "domain": "farmasave.it",
      "category": "Health/Pharmacy",
      "avg_month_visits": 1866522.02651368,
      "curr_month_visits": 1866522.02651368,
      "unique_users": 1121964.5964505,
      "pages_per_visit": 5.35917467717468
    },
    {
      "global_rank": 99045,
      "category_rank": 49,
      "domain": "mutluanneleriz.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 259043.22905099,
      "curr_month_visits": 259043.22905099,
      "unique_users": 142455.109254253,
      "pages_per_visit": 11.7235664718473
    },
    {
      "global_rank": 116670,
      "category_rank": 49,
      "domain": "ambulance.vic.gov.au",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 321953.052124023,
      "curr_month_visits": 321953.052124023,
      "unique_users": 118921.70108605,
      "pages_per_visit": 6.19738472404574
    },
    {
      "global_rank": 144116,
      "category_rank": 49,
      "domain": "info.health.nz",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 411578.832302785,
      "curr_month_visits": 411578.832302785,
      "unique_users": 240452.688355063,
      "pages_per_visit": 1.60981482576536
    },
    {
      "global_rank": 110247,
      "category_rank": 49,
      "domain": "pharmaclick.uz",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 530013.161454562,
      "curr_month_visits": 530013.161454562,
      "unique_users": 261797.2408606,
      "pages_per_visit": 1.57331977071307
    },
    {
      "global_rank": 179059,
      "category_rank": 49,
      "domain": "encompasshealth.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 259686.146168267,
      "curr_month_visits": 259686.146168267,
      "unique_users": 135827.535834999,
      "pages_per_visit": 4.29948180668856
    },
    {
      "global_rank": 54809,
      "category_rank": 49,
      "domain": "springhealth.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 921059.315076921,
      "curr_month_visits": 921059.315076921,
      "unique_users": 246294.774636324,
      "pages_per_visit": 4.80994116023213
    },
    {
      "global_rank": 5742,
      "category_rank": 49,
      "domain": "superdrug.com",
      "category": "Health/Health",
      "avg_month_visits": 9454761.18611401,
      "curr_month_visits": 9454761.18611401,
      "unique_users": 5240408.21505105,
      "pages_per_visit": 3.83801337842401
    },
    {
      "global_rank": 5917,
      "category_rank": 50,
      "domain": "memorial.com.tr",
      "category": "Health/Health",
      "avg_month_visits": 15550594.5607391,
      "curr_month_visits": 15550594.5607391,
      "unique_users": 9532972.07288889,
      "pages_per_visit": 1.49311539431484
    },
    {
      "global_rank": 99388,
      "category_rank": 50,
      "domain": "tricefy4.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 402579.81065036,
      "curr_month_visits": 402579.81065036,
      "unique_users": 153041.183673996,
      "pages_per_visit": 4.62575307694886
    },
    {
      "global_rank": 20055,
      "category_rank": 50,
      "domain": "health.kr",
      "category": "Health/Medicine",
      "avg_month_visits": 3680467.00553461,
      "curr_month_visits": 3680467.00553461,
      "unique_users": 2061519.02670582,
      "pages_per_visit": 2.28926813365356
    },
    {
      "global_rank": 99631,
      "category_rank": 50,
      "domain": "uslowcostdental.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 414232.329200334,
      "curr_month_visits": 414232.329200334,
      "unique_users": 290372.893355342,
      "pages_per_visit": 5.53737828745893
    },
    {
      "global_rank": 139856,
      "category_rank": 50,
      "domain": "yogainternational.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 441092.223902706,
      "curr_month_visits": 441092.223902706,
      "unique_users": 239038.620218878,
      "pages_per_visit": 1.99093781199157
    },
    {
      "global_rank": 67545,
      "category_rank": 50,
      "domain": "mobcup.com.co",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 604314.053960372,
      "curr_month_visits": 604314.053960372,
      "unique_users": 392252.936886855,
      "pages_per_visit": 3.70927394435727
    },
    {
      "global_rank": 179821,
      "category_rank": 50,
      "domain": "vestaevv.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 229849.465380591,
      "curr_month_visits": 229849.465380591,
      "unique_users": 27277.3007272311,
      "pages_per_visit": 8.97435540439306
    },
    {
      "global_rank": 133324,
      "category_rank": 50,
      "domain": "verimed.ru",
      "category": "Health/Addictions",
      "avg_month_visits": 540753.370938098,
      "curr_month_visits": 540753.370938098,
      "unique_users": 381217.612671011,
      "pages_per_visit": 1.28925298507421
    },
    {
      "global_rank": 468771,
      "category_rank": 50,
      "domain": "cos-rd.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 81354.5190278423,
      "curr_month_visits": 81354.5190278423,
      "unique_users": 68924.1067356365,
      "pages_per_visit": 1.26661903454697
    },
    {
      "global_rank": 111659,
      "category_rank": 50,
      "domain": "endpts.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 585782.902903777,
      "curr_month_visits": 585782.902903777,
      "unique_users": 189044.257067466,
      "pages_per_visit": 2.45048539540874
    },
    {
      "global_rank": 158511,
      "category_rank": 50,
      "domain": "mpedia.fr",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 440851.734014761,
      "curr_month_visits": 440851.734014761,
      "unique_users": 257010.875002114,
      "pages_per_visit": 1.3233519775707
    },
    {
      "global_rank": 22637,
      "category_rank": 50,
      "domain": "gelbe-liste.de",
      "category": "Health/Pharmacy",
      "avg_month_visits": 3939029.96945686,
      "curr_month_visits": 3939029.96945686,
      "unique_users": 2634733.73198122,
      "pages_per_visit": 1.85336940379485
    },
    {
      "global_rank": 57453,
      "category_rank": 50,
      "domain": "psychiatry.org",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1168571.2893935,
      "curr_month_visits": 1168571.2893935,
      "unique_users": 732110.51422499,
      "pages_per_visit": 2.12988305077769
    },
    {
      "global_rank": 117649,
      "category_rank": 50,
      "domain": "ihi.org",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 293026.422069238,
      "curr_month_visits": 293026.422069238,
      "unique_users": 120272.600630424,
      "pages_per_visit": 7.99435658811947
    },
    {
      "global_rank": 318057,
      "category_rank": 50,
      "domain": "seikatsuhogo.biz",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 187827.983674912,
      "curr_month_visits": 187827.983674912,
      "unique_users": 137863.313232808,
      "pages_per_visit": 1.32734053298008
    },
    {
      "global_rank": 33246,
      "category_rank": 50,
      "domain": "anytimefitness.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1892106.88023512,
      "curr_month_visits": 1892106.88023512,
      "unique_users": 1106958.46433816,
      "pages_per_visit": 3.20196406208442
    },
    {
      "global_rank": 165118,
      "category_rank": 51,
      "domain": "llli.org",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 394724.10822255,
      "curr_month_visits": 394724.10822255,
      "unique_users": 221370.887051705,
      "pages_per_visit": 1.70992372308455
    },
    {
      "global_rank": 20169,
      "category_rank": 51,
      "domain": "doctornow.co.kr",
      "category": "Health/Medicine",
      "avg_month_visits": 3608031.20113309,
      "curr_month_visits": 3608031.20113309,
      "unique_users": 2184142.817972,
      "pages_per_visit": 1.83014426203293
    },
    {
      "global_rank": 320982,
      "category_rank": 51,
      "domain": "ashdodonline.co.il",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 183594.301584106,
      "curr_month_visits": 183594.301584106,
      "unique_users": 52671.66605768,
      "pages_per_visit": 1.54205517736624
    },
    {
      "global_rank": 23312,
      "category_rank": 51,
      "domain": "mims.com",
      "category": "Health/Pharmacy",
      "avg_month_visits": 3233262.83878828,
      "curr_month_visits": 3233262.83878828,
      "unique_users": 1837654.29176411,
      "pages_per_visit": 2.23865466907631
    },
    {
      "global_rank": 6059,
      "category_rank": 51,
      "domain": "gemotest.ru",
      "category": "Health/Health",
      "avg_month_visits": 11076308.344122,
      "curr_month_visits": 11076308.344122,
      "unique_users": 6608847.1997254,
      "pages_per_visit": 2.85502244041683
    },
    {
      "global_rank": 479342,
      "category_rank": 51,
      "domain": "totalmanshop.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 67650.895543162,
      "curr_month_visits": 67650.895543162,
      "unique_users": 34167.4555896247,
      "pages_per_visit": 4.12812064549832
    },
    {
      "global_rank": 179869,
      "category_rank": 51,
      "domain": "networkofcare.org",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 306441.376578873,
      "curr_month_visits": 306441.376578873,
      "unique_users": 235342.407136406,
      "pages_per_visit": 1.7481988225557
    },
    {
      "global_rank": 118114,
      "category_rank": 51,
      "domain": "inrs.fr",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 458745.442254777,
      "curr_month_visits": 458745.442254777,
      "unique_users": 267926.326360963,
      "pages_per_visit": 2.53937089472938
    },
    {
      "global_rank": 68122,
      "category_rank": 51,
      "domain": "thyrocare.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 917645.206026232,
      "curr_month_visits": 917645.206026232,
      "unique_users": 363589.05111706,
      "pages_per_visit": 3.5726665171051
    },
    {
      "global_rank": 58374,
      "category_rank": 51,
      "domain": "anahana.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1552999.33549132,
      "curr_month_visits": 1552999.33549132,
      "unique_users": 624356.009143544,
      "pages_per_visit": 1.62375724469884
    },
    {
      "global_rank": 140926,
      "category_rank": 51,
      "domain": "midwesterndoctor.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 447159.518203125,
      "curr_month_visits": 447159.518203125,
      "unique_users": 181369.812983063,
      "pages_per_visit": 1.83654266676164
    },
    {
      "global_rank": 33247,
      "category_rank": 51,
      "domain": "healthy.thewom.it",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 2682196.34994785,
      "curr_month_visits": 2682196.34994785,
      "unique_users": 1802320.63304257,
      "pages_per_visit": 1.55875410243573
    },
    {
      "global_rank": 102179,
      "category_rank": 51,
      "domain": "vevidental.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 491518.83314123,
      "curr_month_visits": 491518.83314123,
      "unique_users": 68988.4108498557,
      "pages_per_visit": 9.94343231988877
    },
    {
      "global_rank": 100168,
      "category_rank": 51,
      "domain": "instahms.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 184966.99582986,
      "curr_month_visits": 184966.99582986,
      "unique_users": 15595.1579808952,
      "pages_per_visit": 63.0300776949921
    },
    {
      "global_rank": 135022,
      "category_rank": 51,
      "domain": "behavioralhealth-centers.com",
      "category": "Health/Addictions",
      "avg_month_visits": 463964.200662338,
      "curr_month_visits": 463964.200662338,
      "unique_users": 334359.882595921,
      "pages_per_visit": 1.31760383539793
    },
    {
      "global_rank": 113947,
      "category_rank": 51,
      "domain": "myriad.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 241601.870777148,
      "curr_month_visits": 241601.870777148,
      "unique_users": 121684.162960904,
      "pages_per_visit": 12.5658389602798
    },
    {
      "global_rank": 119863,
      "category_rank": 52,
      "domain": "serum.com.pl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 384852.113958753,
      "curr_month_visits": 384852.113958753,
      "unique_users": 75668.6822550006,
      "pages_per_visit": 7.57961881681668
    },
    {
      "global_rank": 68801,
      "category_rank": 52,
      "domain": "felleskatalogen.no",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 901315.046670683,
      "curr_month_visits": 901315.046670683,
      "unique_users": 403753.052442189,
      "pages_per_visit": 2.52664647540869
    },
    {
      "global_rank": 166006,
      "category_rank": 52,
      "domain": "kita.de",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 374862.62205201,
      "curr_month_visits": 374862.62205201,
      "unique_users": 285846.145016987,
      "pages_per_visit": 1.43475866068632
    },
    {
      "global_rank": 6302,
      "category_rank": 52,
      "domain": "availity.com",
      "category": "Health/Health",
      "avg_month_visits": 7888065.22729045,
      "curr_month_visits": 7888065.22729045,
      "unique_users": 759479.020207511,
      "pages_per_visit": 10.6175840446327
    },
    {
      "global_rank": 33609,
      "category_rank": 52,
      "domain": "voedingscentrum.nl",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 2187979.440634,
      "curr_month_visits": 2187979.440634,
      "unique_users": 1276132.30317143,
      "pages_per_visit": 2.6438642413429
    },
    {
      "global_rank": 114227,
      "category_rank": 52,
      "domain": "ouryao.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 353471.084299884,
      "curr_month_visits": 353471.084299884,
      "unique_users": 127292.642541448,
      "pages_per_visit": 5.48264834456772
    },
    {
      "global_rank": 101625,
      "category_rank": 52,
      "domain": "pregnancybirthbaby.org.au",
      "category": "Health/Womens_Health",
      "avg_month_visits": 743741.800351772,
      "curr_month_visits": 743741.800351772,
      "unique_users": 455789.436762845,
      "pages_per_visit": 1.54762086041423
    },
    {
      "global_rank": 61684,
      "category_rank": 52,
      "domain": "owlpractice.ca",
      "category": "Health/Mental_Health",
      "avg_month_visits": 792071.700341578,
      "curr_month_visits": 792071.700341578,
      "unique_users": 214933.14592833,
      "pages_per_visit": 4.49997164972402
    },
    {
      "global_rank": 182000,
      "category_rank": 52,
      "domain": "tmutest.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 308854.45661114,
      "curr_month_visits": 308854.45661114,
      "unique_users": 63080.2252789107,
      "pages_per_visit": 5.35886138995975
    },
    {
      "global_rank": 102341,
      "category_rank": 52,
      "domain": "tiendaddvc.mx",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 390195.902568923,
      "curr_month_visits": 390195.902568923,
      "unique_users": 100274.505488793,
      "pages_per_visit": 6.95239846524767
    },
    {
      "global_rank": 487734,
      "category_rank": 52,
      "domain": "goodnightmate.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 56319.2019281802,
      "curr_month_visits": 56319.2019281802,
      "unique_users": 10805.084726759,
      "pages_per_visit": 1.67429233193916
    },
    {
      "global_rank": 23493,
      "category_rank": 52,
      "domain": "farmaciasdesimilares.com",
      "category": "Health/Pharmacy",
      "avg_month_visits": 3076641.41613638,
      "curr_month_visits": 3076641.41613638,
      "unique_users": 1920692.65382986,
      "pages_per_visit": 2.72736473501551
    },
    {
      "global_rank": 20738,
      "category_rank": 52,
      "domain": "bswhealth.com",
      "category": "Health/Medicine",
      "avg_month_visits": 2836478.71187909,
      "curr_month_visits": 2836478.71187909,
      "unique_users": 1036000.76189044,
      "pages_per_visit": 4.90382284453734
    },
    {
      "global_rank": 135618,
      "category_rank": 52,
      "domain": "sandstonecare.com",
      "category": "Health/Addictions",
      "avg_month_visits": 401160.649901625,
      "curr_month_visits": 401160.649901625,
      "unique_users": 245798.79937164,
      "pages_per_visit": 1.97346530768253
    },
    {
      "global_rank": 143753,
      "category_rank": 52,
      "domain": "inspirerendleven.nl",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 462699.754210228,
      "curr_month_visits": 462699.754210228,
      "unique_users": 190133.261733847,
      "pages_per_visit": 1.77863320039332
    },
    {
      "global_rank": 322175,
      "category_rank": 52,
      "domain": "sensorydirect.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 101553.651163341,
      "curr_month_visits": 101553.651163341,
      "unique_users": 62611.4513282153,
      "pages_per_visit": 3.87988068640933
    },
    {
      "global_rank": 62967,
      "category_rank": 53,
      "domain": "actualized.org",
      "category": "Health/Mental_Health",
      "avg_month_visits": 662227.54546579,
      "curr_month_visits": 662227.54546579,
      "unique_users": 192690.163366133,
      "pages_per_visit": 5.70736508335771
    },
    {
      "global_rank": 145605,
      "category_rank": 53,
      "domain": "ayzdorov.ru",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 382352.834828323,
      "curr_month_visits": 382352.834828323,
      "unique_users": 206216.942174438,
      "pages_per_visit": 1.89271238866786
    },
    {
      "global_rank": 135920,
      "category_rank": 53,
      "domain": "beyond-hello.com",
      "category": "Health/Addictions",
      "avg_month_visits": 413645.806032587,
      "curr_month_visits": 413645.806032587,
      "unique_users": 128474.105104814,
      "pages_per_visit": 2.30675628691399
    },
    {
      "global_rank": 23693,
      "category_rank": 53,
      "domain": "rigla.ru",
      "category": "Health/Pharmacy",
      "avg_month_visits": 2250280.49448376,
      "curr_month_visits": 2250280.49448376,
      "unique_users": 1571142.34620978,
      "pages_per_visit": 3.1963845404926
    },
    {
      "global_rank": 34851,
      "category_rank": 53,
      "domain": "fitnessblender.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1451109.08535215,
      "curr_month_visits": 1451109.08535215,
      "unique_users": 358781.106008419,
      "pages_per_visit": 6.34114239211504
    },
    {
      "global_rank": 166082,
      "category_rank": 53,
      "domain": "pinmed.co",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 338004.350031929,
      "curr_month_visits": 338004.350031929,
      "unique_users": 229725.684556776,
      "pages_per_visit": 1.29047267159911
    },
    {
      "global_rank": 102459,
      "category_rank": 53,
      "domain": "clearchoice.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 742291.132258502,
      "curr_month_visits": 742291.132258502,
      "unique_users": 565821.300313445,
      "pages_per_visit": 1.59276692433266
    },
    {
      "global_rank": 182865,
      "category_rank": 53,
      "domain": "sunriseseniorliving.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 259674.076323292,
      "curr_month_visits": 259674.076323292,
      "unique_users": 182501.19232748,
      "pages_per_visit": 2.05970059882869
    },
    {
      "global_rank": 120419,
      "category_rank": 53,
      "domain": "cmkp.edu.pl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 327834.866331872,
      "curr_month_visits": 327834.866331872,
      "unique_users": 133216.3833206,
      "pages_per_visit": 3.80753296973476
    },
    {
      "global_rank": 324437,
      "category_rank": 53,
      "domain": "invalidnost.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 129763.627914617,
      "curr_month_visits": 129763.627914617,
      "unique_users": 71695.1036013582,
      "pages_per_visit": 1.67036332632718
    },
    {
      "global_rank": 20910,
      "category_rank": 53,
      "domain": "prometric.com",
      "category": "Health/Medicine",
      "avg_month_visits": 2171233.6384561,
      "curr_month_visits": 2171233.6384561,
      "unique_users": 902007.528771199,
      "pages_per_visit": 6.0991803974517
    },
    {
      "global_rank": 108717,
      "category_rank": 53,
      "domain": "babelli.de",
      "category": "Health/Womens_Health",
      "avg_month_visits": 661785.925851904,
      "curr_month_visits": 661785.925851904,
      "unique_users": 382136.895794158,
      "pages_per_visit": 1.41037680329301
    },
    {
      "global_rank": 504120,
      "category_rank": 53,
      "domain": "ccmtgov-my.sharepoint.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 47801.3954303549,
      "curr_month_visits": 47801.3954303549,
      "unique_users": 21087.5808781439,
      "pages_per_visit": 1.8137036840936
    },
    {
      "global_rank": 116089,
      "category_rank": 53,
      "domain": "cde.org.cn",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 417514.979688433,
      "curr_month_visits": 417514.979688433,
      "unique_users": 105781.137194775,
      "pages_per_visit": 3.30299046137328
    },
    {
      "global_rank": 69095,
      "category_rank": 53,
      "domain": "nanbyou.or.jp",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1224273.72865916,
      "curr_month_visits": 1224273.72865916,
      "unique_users": 901648.581982205,
      "pages_per_visit": 1.50630943919987
    },
    {
      "global_rank": 6399,
      "category_rank": 53,
      "domain": "rxinform.org",
      "category": "Health/Health",
      "avg_month_visits": 11914625.4872134,
      "curr_month_visits": 11914625.4872134,
      "unique_users": 5977580.20972252,
      "pages_per_visit": 2.25071219299196
    },
    {
      "global_rank": 136203,
      "category_rank": 54,
      "domain": "growweedeasy.com",
      "category": "Health/Addictions",
      "avg_month_visits": 497660.774950115,
      "curr_month_visits": 497660.774950115,
      "unique_users": 232167.138066103,
      "pages_per_visit": 2.10054432147268
    },
    {
      "global_rank": 21198,
      "category_rank": 54,
      "domain": "studentdoctor.net",
      "category": "Health/Medicine",
      "avg_month_visits": 3844886.15061431,
      "curr_month_visits": 3844886.15061431,
      "unique_users": 1231597.35427774,
      "pages_per_visit": 3.05355807723581
    },
    {
      "global_rank": 121637,
      "category_rank": 54,
      "domain": "jrcwin2s.sharepoint.com",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 328221.304246969,
      "curr_month_visits": 328221.304246969,
      "unique_users": 57590.8569296151,
      "pages_per_visit": 5.05430852849712
    },
    {
      "global_rank": 71667,
      "category_rank": 54,
      "domain": "mohw.go.kr",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 835785.438673634,
      "curr_month_visits": 835785.438673634,
      "unique_users": 483637.999166533,
      "pages_per_visit": 2.73732299242149
    },
    {
      "global_rank": 118340,
      "category_rank": 54,
      "domain": "jiho.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 415827.594111828,
      "curr_month_visits": 415827.594111828,
      "unique_users": 159443.85930779,
      "pages_per_visit": 3.67164927592805
    },
    {
      "global_rank": 515233,
      "category_rank": 54,
      "domain": "lilli.ch",
      "category": "Health/Mens_Health",
      "avg_month_visits": 89799.1985198549,
      "curr_month_visits": 89799.1985198549,
      "unique_users": 62987.4326044085,
      "pages_per_visit": 2.08395890348197
    },
    {
      "global_rank": 34955,
      "category_rank": 54,
      "domain": "athleanx.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 2064331.55753067,
      "curr_month_visits": 2064331.55753067,
      "unique_users": 858405.652399774,
      "pages_per_visit": 3.5350318216579
    },
    {
      "global_rank": 327165,
      "category_rank": 54,
      "domain": "disabilityrightsuk.org",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 134049.291507261,
      "curr_month_visits": 134049.291507261,
      "unique_users": 96275.9176743998,
      "pages_per_visit": 1.94109832202334
    },
    {
      "global_rank": 148000,
      "category_rank": 54,
      "domain": "easyayurveda.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 360166.795927034,
      "curr_month_visits": 360166.795927034,
      "unique_users": 179341.911703165,
      "pages_per_visit": 1.98537201181125
    },
    {
      "global_rank": 63803,
      "category_rank": 54,
      "domain": "markmanson.net",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1033618.29604881,
      "curr_month_visits": 1033618.29604881,
      "unique_users": 549901.114753985,
      "pages_per_visit": 2.27164816916595
    },
    {
      "global_rank": 103427,
      "category_rank": 54,
      "domain": "alfadocs.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 289953.91850795,
      "curr_month_visits": 289953.91850795,
      "unique_users": 63638.9483885398,
      "pages_per_visit": 17.0221453926828
    },
    {
      "global_rank": 23747,
      "category_rank": 54,
      "domain": "pmda.go.jp",
      "category": "Health/Pharmacy",
      "avg_month_visits": 3152494.85935345,
      "curr_month_visits": 3152494.85935345,
      "unique_users": 1468647.4169486,
      "pages_per_visit": 3.75221415837882
    },
    {
      "global_rank": 6440,
      "category_rank": 54,
      "domain": "health.mail.ru",
      "category": "Health/Health",
      "avg_month_visits": 12357960.7857999,
      "curr_month_visits": 12357960.7857999,
      "unique_users": 4683516.65881335,
      "pages_per_visit": 2.00552661310791
    },
    {
      "global_rank": 112021,
      "category_rank": 54,
      "domain": "marchofdimes.org",
      "category": "Health/Womens_Health",
      "avg_month_visits": 600133.233782577,
      "curr_month_visits": 600133.233782577,
      "unique_users": 428176.616223265,
      "pages_per_visit": 1.55689217225976
    },
    {
      "global_rank": 204679,
      "category_rank": 54,
      "domain": "ecp123.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 313738.576154039,
      "curr_month_visits": 313738.576154039,
      "unique_users": 28038.4902950352,
      "pages_per_visit": 2.8658716268789
    },
    {
      "global_rank": 166508,
      "category_rank": 54,
      "domain": "kindergesundheit-info.de",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 400540.53748634,
      "curr_month_visits": 400540.53748634,
      "unique_users": 280247.615361681,
      "pages_per_visit": 1.37825685378684
    },
    {
      "global_rank": 327547,
      "category_rank": 55,
      "domain": "bloghoptoys.fr",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 144621.835332194,
      "curr_month_visits": 144621.835332194,
      "unique_users": 105020.784861223,
      "pages_per_visit": 1.55653497081491
    },
    {
      "global_rank": 166854,
      "category_rank": 55,
      "domain": "idealnaya-ya.ru",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 446200.307840828,
      "curr_month_visits": 446200.307840828,
      "unique_users": 126558.383963916,
      "pages_per_visit": 1.0847399776089
    },
    {
      "global_rank": 114657,
      "category_rank": 55,
      "domain": "nfp-forum.de",
      "category": "Health/Womens_Health",
      "avg_month_visits": 382897.02734365,
      "curr_month_visits": 382897.02734365,
      "unique_users": 28939.4477874155,
      "pages_per_visit": 21.6217468129249
    },
    {
      "global_rank": 137951,
      "category_rank": 55,
      "domain": "lordmed.ru",
      "category": "Health/Addictions",
      "avg_month_visits": 466173.63006012,
      "curr_month_visits": 466173.63006012,
      "unique_users": 313332.913208392,
      "pages_per_visit": 1.22891571740457
    },
    {
      "global_rank": 23751,
      "category_rank": 55,
      "domain": "helsi.me",
      "category": "Health/Pharmacy",
      "avg_month_visits": 2781268.95861462,
      "curr_month_visits": 2781268.95861462,
      "unique_users": 987652.533247569,
      "pages_per_visit": 3.57566251301196
    },
    {
      "global_rank": 148076,
      "category_rank": 55,
      "domain": "testpap.gov.gr",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 311168.298918344,
      "curr_month_visits": 311168.298918344,
      "unique_users": 175212.365820092,
      "pages_per_visit": 2.23021042160622
    },
    {
      "global_rank": 21366,
      "category_rank": 55,
      "domain": "nyp.org",
      "category": "Health/Medicine",
      "avg_month_visits": 3274420.28379226,
      "curr_month_visits": 3274420.28379226,
      "unique_users": 1216085.18904853,
      "pages_per_visit": 3.27155304037832
    },
    {
      "global_rank": 207343,
      "category_rank": 55,
      "domain": "accessla.org",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 155314.365203963,
      "curr_month_visits": 155314.365203963,
      "unique_users": 32151.6896988016,
      "pages_per_visit": 6.43862375293397
    },
    {
      "global_rank": 74931,
      "category_rank": 55,
      "domain": "moffitt.org",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 811397.932280059,
      "curr_month_visits": 811397.932280059,
      "unique_users": 495963.448385834,
      "pages_per_visit": 2.10356367671577
    },
    {
      "global_rank": 122389,
      "category_rank": 55,
      "domain": "yuhan.co.kr",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 323244.127960711,
      "curr_month_visits": 323244.127960711,
      "unique_users": 98778.1692882827,
      "pages_per_visit": 5.47820767698901
    },
    {
      "global_rank": 126450,
      "category_rank": 55,
      "domain": "twojnzoz.pl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 131188.761769496,
      "curr_month_visits": 131188.761769496,
      "unique_users": 23917.1502466011,
      "pages_per_visit": 33.6550588945365
    },
    {
      "global_rank": 35030,
      "category_rank": 55,
      "domain": "morenutrition.de",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1708646.33665551,
      "curr_month_visits": 1708646.33665551,
      "unique_users": 718908.289585777,
      "pages_per_visit": 4.34831457379825
    },
    {
      "global_rank": 63806,
      "category_rank": 55,
      "domain": "yourbrainonporn.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 980112.270509876,
      "curr_month_visits": 980112.270509876,
      "unique_users": 468252.083596596,
      "pages_per_visit": 2.73292762295997
    },
    {
      "global_rank": 6605,
      "category_rank": 55,
      "domain": "hesaplama.net",
      "category": "Health/Health",
      "avg_month_visits": 10377091.9953955,
      "curr_month_visits": 10377091.9953955,
      "unique_users": 5349070.37628554,
      "pages_per_visit": 2.67764765527927
    },
    {
      "global_rank": 107561,
      "category_rank": 55,
      "domain": "revenuewell.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 449078.829074984,
      "curr_month_visits": 449078.829074984,
      "unique_users": 49429.2076311836,
      "pages_per_visit": 8.61422402913862
    },
    {
      "global_rank": 524497,
      "category_rank": 55,
      "domain": "meindirektlabor.de",
      "category": "Health/Mens_Health",
      "avg_month_visits": 76687.6179467833,
      "curr_month_visits": 76687.6179467833,
      "unique_users": 49951.381501138,
      "pages_per_visit": 2.9204961090725
    },
    {
      "global_rank": 6756,
      "category_rank": 56,
      "domain": "practicefusion.com",
      "category": "Health/Health",
      "avg_month_visits": 4801827.14177031,
      "curr_month_visits": 4801827.14177031,
      "unique_users": 254342.237916945,
      "pages_per_visit": 35.1370483216411
    },
    {
      "global_rank": 124265,
      "category_rank": 56,
      "domain": "medixs.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 244519.86473742,
      "curr_month_visits": 244519.86473742,
      "unique_users": 24261.3327994488,
      "pages_per_visit": 15.9610379351879
    },
    {
      "global_rank": 21503,
      "category_rank": 56,
      "domain": "aafp.org",
      "category": "Health/Medicine",
      "avg_month_visits": 3510370.37200652,
      "curr_month_visits": 3510370.37200652,
      "unique_users": 2220976.63080787,
      "pages_per_visit": 2.38803827820644
    },
    {
      "global_rank": 23818,
      "category_rank": 56,
      "domain": "selcukecza.com.tr",
      "category": "Health/Pharmacy",
      "avg_month_visits": 4093202.57714225,
      "curr_month_visits": 4093202.57714225,
      "unique_users": 331404.419894696,
      "pages_per_visit": 3.23546216360434
    },
    {
      "global_rank": 140336,
      "category_rank": 56,
      "domain": "adultchildren.org",
      "category": "Health/Addictions",
      "avg_month_visits": 383978.078000975,
      "curr_month_visits": 383978.078000975,
      "unique_users": 140214.456387843,
      "pages_per_visit": 3.02974898348752
    },
    {
      "global_rank": 128137,
      "category_rank": 56,
      "domain": "receptomat.pl",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 373370.72799252,
      "curr_month_visits": 373370.72799252,
      "unique_users": 245343.656084523,
      "pages_per_visit": 2.40833038074755
    },
    {
      "global_rank": 149565,
      "category_rank": 56,
      "domain": "maikikii.de",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 691439.839808081,
      "curr_month_visits": 691439.839808081,
      "unique_users": 144358.470375951,
      "pages_per_visit": 2.53139964024588
    },
    {
      "global_rank": 525938,
      "category_rank": 56,
      "domain": "restoredispensaries.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 111836.293141086,
      "curr_month_visits": 111836.293141086,
      "unique_users": 21933.9636609774,
      "pages_per_visit": 2.18204668752877
    },
    {
      "global_rank": 167283,
      "category_rank": 56,
      "domain": "deti74.ru",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 263430.458819585,
      "curr_month_visits": 263430.458819585,
      "unique_users": 37876.8139920616,
      "pages_per_visit": 6.19544000138452
    },
    {
      "global_rank": 328248,
      "category_rank": 56,
      "domain": "rehakids.de",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 155139.366715185,
      "curr_month_visits": 155139.366715185,
      "unique_users": 112198.638841346,
      "pages_per_visit": 1.94433476060448
    },
    {
      "global_rank": 65269,
      "category_rank": 56,
      "domain": "psychiatryonline.org",
      "category": "Health/Mental_Health",
      "avg_month_visits": 996483.169595001,
      "curr_month_visits": 996483.169595001,
      "unique_users": 587067.834515413,
      "pages_per_visit": 2.02691505270261
    },
    {
      "global_rank": 212085,
      "category_rank": 56,
      "domain": "mymaxview.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 264645.707705828,
      "curr_month_visits": 264645.707705828,
      "unique_users": 28813.8064536782,
      "pages_per_visit": 3.05704643949156
    },
    {
      "global_rank": 108070,
      "category_rank": 56,
      "domain": "osstem.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 377686.213106718,
      "curr_month_visits": 377686.213106718,
      "unique_users": 54391.2145173403,
      "pages_per_visit": 6.99387131216037
    },
    {
      "global_rank": 75227,
      "category_rank": 56,
      "domain": "nccn.org",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 668031.441833648,
      "curr_month_visits": 668031.441833648,
      "unique_users": 244039.438841521,
      "pages_per_visit": 3.55892978629101
    },
    {
      "global_rank": 116595,
      "category_rank": 56,
      "domain": "babycenter.ca",
      "category": "Health/Womens_Health",
      "avg_month_visits": 616130.464903486,
      "curr_month_visits": 616130.464903486,
      "unique_users": 377424.060151659,
      "pages_per_visit": 1.68635127961845
    },
    {
      "global_rank": 36177,
      "category_rank": 56,
      "domain": "slism.jp",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1648399.95055257,
      "curr_month_visits": 1648399.95055257,
      "unique_users": 540440.584038573,
      "pages_per_visit": 4.14194168399447
    },
    {
      "global_rank": 108144,
      "category_rank": 57,
      "domain": "affordabledentures.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 468545.201495293,
      "curr_month_visits": 468545.201495293,
      "unique_users": 291626.536475771,
      "pages_per_visit": 3.11671596618944
    },
    {
      "global_rank": 129957,
      "category_rank": 57,
      "domain": "platinumplanner.com",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 351599.302186884,
      "curr_month_visits": 351599.302186884,
      "unique_users": 73861.8715570378,
      "pages_per_visit": 5.01225882420726
    },
    {
      "global_rank": 531614,
      "category_rank": 57,
      "domain": "prostata.de",
      "category": "Health/Mens_Health",
      "avg_month_visits": 87012.6402252535,
      "curr_month_visits": 87012.6402252535,
      "unique_users": 61412.9068111498,
      "pages_per_visit": 1.3578050666935
    },
    {
      "global_rank": 150419,
      "category_rank": 57,
      "domain": "homeoint.org",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 323153.93618515,
      "curr_month_visits": 323153.93618515,
      "unique_users": 124599.670575215,
      "pages_per_visit": 3.92143535868744
    },
    {
      "global_rank": 23924,
      "category_rank": 57,
      "domain": "moviesmod.day",
      "category": "Health/Pharmacy",
      "avg_month_visits": 10136359.731743,
      "curr_month_visits": 10136359.731743,
      "unique_users": 1613393.4862,
      "pages_per_visit": 5.06641716145284
    },
    {
      "global_rank": 65975,
      "category_rank": 57,
      "domain": "charliehealth.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 1019402.50644361,
      "curr_month_visits": 1019402.50644361,
      "unique_users": 495302.030716871,
      "pages_per_visit": 2.65732917803127
    },
    {
      "global_rank": 171629,
      "category_rank": 57,
      "domain": "gritzo.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 165404.191229514,
      "curr_month_visits": 165404.191229514,
      "unique_users": 80502.965350612,
      "pages_per_visit": 3.75750127451221
    },
    {
      "global_rank": 21549,
      "category_rank": 57,
      "domain": "ascension.org",
      "category": "Health/Medicine",
      "avg_month_visits": 3011087.08457365,
      "curr_month_visits": 3011087.08457365,
      "unique_users": 1458841.95464508,
      "pages_per_visit": 4.22680641971283
    },
    {
      "global_rank": 76276,
      "category_rank": 57,
      "domain": "elabassist.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 568132.162057412,
      "curr_month_visits": 568132.162057412,
      "unique_users": 32831.4125231972,
      "pages_per_visit": 14.7743930858653
    },
    {
      "global_rank": 124678,
      "category_rank": 57,
      "domain": "allmed.pro",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 436713.545301822,
      "curr_month_visits": 436713.545301822,
      "unique_users": 181991.048289527,
      "pages_per_visit": 2.64893283331862
    },
    {
      "global_rank": 6859,
      "category_rank": 57,
      "domain": "doctoralia.com.mx",
      "category": "Health/Health",
      "avg_month_visits": 10527351.4404241,
      "curr_month_visits": 10527351.4404241,
      "unique_users": 6045792.65464547,
      "pages_per_visit": 2.53632116843867
    },
    {
      "global_rank": 36603,
      "category_rank": 57,
      "domain": "beachbodyondemand.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1748236.18645716,
      "curr_month_visits": 1748236.18645716,
      "unique_users": 701702.674860204,
      "pages_per_visit": 3.25788776976856
    },
    {
      "global_rank": 140700,
      "category_rank": 57,
      "domain": "newportacademy.com",
      "category": "Health/Addictions",
      "avg_month_visits": 446426.269415243,
      "curr_month_visits": 446426.269415243,
      "unique_users": 305338.166224128,
      "pages_per_visit": 1.58693852834185
    },
    {
      "global_rank": 213590,
      "category_rank": 57,
      "domain": "cubigo.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 152035.521036778,
      "curr_month_visits": 152035.521036778,
      "unique_users": 15736.9672390484,
      "pages_per_visit": 6.26049060974959
    },
    {
      "global_rank": 118396,
      "category_rank": 57,
      "domain": "makl-psms.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 344086.964460055,
      "curr_month_visits": 344086.964460055,
      "unique_users": 13459.6647968532,
      "pages_per_visit": 17.6431245411172
    },
    {
      "global_rank": 328534,
      "category_rank": 57,
      "domain": "vaph.be",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 93151.502936712,
      "curr_month_visits": 93151.502936712,
      "unique_users": 34490.9558640908,
      "pages_per_visit": 5.97650362013402
    },
    {
      "global_rank": 6959,
      "category_rank": 58,
      "domain": "b17.ru",
      "category": "Health/Health",
      "avg_month_visits": 8348171.24060449,
      "curr_month_visits": 8348171.24060449,
      "unique_users": 3477981.361106,
      "pages_per_visit": 4.73990150086305
    },
    {
      "global_rank": 118649,
      "category_rank": 58,
      "domain": "babycenter.com.au",
      "category": "Health/Womens_Health",
      "avg_month_visits": 614419.761757459,
      "curr_month_visits": 614419.761757459,
      "unique_users": 276972.857632868,
      "pages_per_visit": 1.483566206944
    },
    {
      "global_rank": 150985,
      "category_rank": 58,
      "domain": "karadarefre.jp",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 396382.783433905,
      "curr_month_visits": 396382.783433905,
      "unique_users": 284883.880381137,
      "pages_per_visit": 2.23503131771151
    },
    {
      "global_rank": 215362,
      "category_rank": 58,
      "domain": "freedomcare.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 329675.010680382,
      "curr_month_visits": 329675.010680382,
      "unique_users": 230547.811085155,
      "pages_per_visit": 1.55862448000663
    },
    {
      "global_rank": 36792,
      "category_rank": 58,
      "domain": "bryanjohnson.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1481104.73153757,
      "curr_month_visits": 1481104.73153757,
      "unique_users": 682828.214311855,
      "pages_per_visit": 4.39129264147914
    },
    {
      "global_rank": 76487,
      "category_rank": 58,
      "domain": "terveyskyla.fi",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 933725.976809349,
      "curr_month_visits": 933725.976809349,
      "unique_users": 600280.634490932,
      "pages_per_visit": 2.25682294307715
    },
    {
      "global_rank": 109996,
      "category_rank": 58,
      "domain": "getquip.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 363480.667427401,
      "curr_month_visits": 363480.667427401,
      "unique_users": 241609.960130179,
      "pages_per_visit": 4.38014255704671
    },
    {
      "global_rank": 329124,
      "category_rank": 58,
      "domain": "mdph31.fr",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 70825.9679886314,
      "curr_month_visits": 70825.9679886314,
      "unique_users": 31971.5471600891,
      "pages_per_visit": 4.44036260672125
    },
    {
      "global_rank": 141084,
      "category_rank": 58,
      "domain": "aa-intergroup.org",
      "category": "Health/Addictions",
      "avg_month_visits": 562236.776145266,
      "curr_month_visits": 562236.776145266,
      "unique_users": 165660.126632882,
      "pages_per_visit": 1.84684755600372
    },
    {
      "global_rank": 21551,
      "category_rank": 58,
      "domain": "redcrossblood.org",
      "category": "Health/Medicine",
      "avg_month_visits": 2925431.43374004,
      "curr_month_visits": 2925431.43374004,
      "unique_users": 1733646.85525845,
      "pages_per_visit": 4.0901512584862
    },
    {
      "global_rank": 25632,
      "category_rank": 58,
      "domain": "araujo.com.br",
      "category": "Health/Pharmacy",
      "avg_month_visits": 2258178.28867374,
      "curr_month_visits": 2258178.28867374,
      "unique_users": 1316661.62031533,
      "pages_per_visit": 3.05954374277556
    },
    {
      "global_rank": 131662,
      "category_rank": 58,
      "domain": "regionh.dk",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 376465.456217323,
      "curr_month_visits": 376465.456217323,
      "unique_users": 168207.000752101,
      "pages_per_visit": 3.04073228882108
    },
    {
      "global_rank": 182254,
      "category_rank": 58,
      "domain": "todopapas.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 377110.296321317,
      "curr_month_visits": 377110.296321317,
      "unique_users": 255838.388413498,
      "pages_per_visit": 1.64900028656396
    },
    {
      "global_rank": 126018,
      "category_rank": 58,
      "domain": "sokuyaku.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 634290.421033019,
      "curr_month_visits": 634290.421033019,
      "unique_users": 507573.228285286,
      "pages_per_visit": 1.27260173136022
    },
    {
      "global_rank": 66449,
      "category_rank": 58,
      "domain": "footholdtechnology.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 370707.611651829,
      "curr_month_visits": 370707.611651829,
      "unique_users": 29559.0893654199,
      "pages_per_visit": 24.9014290540234
    },
    {
      "global_rank": 535929,
      "category_rank": 58,
      "domain": "thehairypill.com.au",
      "category": "Health/Mens_Health",
      "avg_month_visits": 68954.4616596025,
      "curr_month_visits": 68954.4616596025,
      "unique_users": 25634.5038806681,
      "pages_per_visit": 2.72316259498097
    },
    {
      "global_rank": 118816,
      "category_rank": 59,
      "domain": "mylofamily.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 696782.903688913,
      "curr_month_visits": 696782.903688913,
      "unique_users": 441189.969934341,
      "pages_per_visit": 1.54222935288248
    },
    {
      "global_rank": 7004,
      "category_rank": 59,
      "domain": "farmaciatei.ro",
      "category": "Health/Health",
      "avg_month_visits": 8195170.10171015,
      "curr_month_visits": 8195170.10171015,
      "unique_users": 3210516.1629059,
      "pages_per_visit": 3.26138571869909
    },
    {
      "global_rank": 141434,
      "category_rank": 59,
      "domain": "eve-rave.ch",
      "category": "Health/Addictions",
      "avg_month_visits": 295955.997565434,
      "curr_month_visits": 295955.997565434,
      "unique_users": 116866.558464922,
      "pages_per_visit": 5.72496166237417
    },
    {
      "global_rank": 21732,
      "category_rank": 59,
      "domain": "corewellhealth.org",
      "category": "Health/Medicine",
      "avg_month_visits": 2351020.28903622,
      "curr_month_visits": 2351020.28903622,
      "unique_users": 614603.801802178,
      "pages_per_visit": 6.48891942251013
    },
    {
      "global_rank": 539083,
      "category_rank": 59,
      "domain": "hers.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 58896.0252082521,
      "curr_month_visits": 58896.0252082521,
      "unique_users": 37474.926994435,
      "pages_per_visit": 1.23865026350485
    },
    {
      "global_rank": 186018,
      "category_rank": 59,
      "domain": "ncrdo.ru",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 239777.612079602,
      "curr_month_visits": 239777.612079602,
      "unique_users": 144509.484898197,
      "pages_per_visit": 3.13535652148791
    },
    {
      "global_rank": 215660,
      "category_rank": 59,
      "domain": "pahealthwellness.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 102669.361528792,
      "curr_month_visits": 102669.361528792,
      "unique_users": 34130.0917166749,
      "pages_per_visit": 10.7758715280765
    },
    {
      "global_rank": 110120,
      "category_rank": 59,
      "domain": "corepractice.is",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 196508.754698835,
      "curr_month_visits": 196508.754698835,
      "unique_users": 43832.1331575243,
      "pages_per_visit": 24.1026165584901
    },
    {
      "global_rank": 134654,
      "category_rank": 59,
      "domain": "remedium.md",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 398778.205633274,
      "curr_month_visits": 398778.205633274,
      "unique_users": 158749.585960709,
      "pages_per_visit": 3.1421578118804
    },
    {
      "global_rank": 67548,
      "category_rank": 59,
      "domain": "insighttimer.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 977509.373223579,
      "curr_month_visits": 977509.373223579,
      "unique_users": 453630.210873627,
      "pages_per_visit": 2.45112794195046
    },
    {
      "global_rank": 151139,
      "category_rank": 59,
      "domain": "simplerosites.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 225857.556895434,
      "curr_month_visits": 225857.556895434,
      "unique_users": 69159.22918739,
      "pages_per_visit": 5.03685748107848
    },
    {
      "global_rank": 329996,
      "category_rank": 59,
      "domain": "techno-aids.or.jp",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 114429.570160034,
      "curr_month_visits": 114429.570160034,
      "unique_users": 44376.4680038755,
      "pages_per_visit": 4.85812762734427
    },
    {
      "global_rank": 25909,
      "category_rank": 59,
      "domain": "fass.se",
      "category": "Health/Pharmacy",
      "avg_month_visits": 2399658.6118177,
      "curr_month_visits": 2399658.6118177,
      "unique_users": 1027896.62061819,
      "pages_per_visit": 3.31212890002589
    },
    {
      "global_rank": 78037,
      "category_rank": 59,
      "domain": "health.gov",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 869750.221815553,
      "curr_month_visits": 869750.221815553,
      "unique_users": 537378.855167195,
      "pages_per_visit": 2.57752782585591
    },
    {
      "global_rank": 126585,
      "category_rank": 59,
      "domain": "alf-web.com",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 337879.544022522,
      "curr_month_visits": 337879.544022522,
      "unique_users": 44660.0996386937,
      "pages_per_visit": 6.77400906058462
    },
    {
      "global_rank": 36875,
      "category_rank": 59,
      "domain": "darebee.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1638761.51399502,
      "curr_month_visits": 1638761.51399502,
      "unique_users": 579079.362148176,
      "pages_per_visit": 4.42324933588141
    },
    {
      "global_rank": 141538,
      "category_rank": 60,
      "domain": "publichealthontario.ca",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 276993.167665137,
      "curr_month_visits": 276993.167665137,
      "unique_users": 166210.240645236,
      "pages_per_visit": 4.15112742237766
    },
    {
      "global_rank": 186928,
      "category_rank": 60,
      "domain": "bellababyphotography.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 142668.172188915,
      "curr_month_visits": 142668.172188915,
      "unique_users": 43246.2522861677,
      "pages_per_visit": 10.3467161572105
    },
    {
      "global_rank": 37281,
      "category_rank": 60,
      "domain": "tutorplace.ru",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1628809.69973771,
      "curr_month_visits": 1628809.69973771,
      "unique_users": 1055191.58456243,
      "pages_per_visit": 2.43398982868698
    },
    {
      "global_rank": 129421,
      "category_rank": 60,
      "domain": "melzdrav.ru",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 344659.622720494,
      "curr_month_visits": 344659.622720494,
      "unique_users": 180216.361555015,
      "pages_per_visit": 4.3636862843368
    },
    {
      "global_rank": 21748,
      "category_rank": 60,
      "domain": "libvio.fun",
      "category": "Health/Medicine",
      "avg_month_visits": 2599869.62813092,
      "curr_month_visits": 2599869.62813092,
      "unique_users": 390777.100444171,
      "pages_per_visit": 5.68892249958001
    },
    {
      "global_rank": 114098,
      "category_rank": 60,
      "domain": "dentolo.de",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 369013.987594804,
      "curr_month_visits": 369013.987594804,
      "unique_users": 225692.420348236,
      "pages_per_visit": 5.48851279784219
    },
    {
      "global_rank": 330949,
      "category_rank": 60,
      "domain": "maximusuk.co.uk",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 128418.653820444,
      "curr_month_visits": 128418.653820444,
      "unique_users": 56015.7250002864,
      "pages_per_visit": 3.8995016384199
    },
    {
      "global_rank": 221940,
      "category_rank": 60,
      "domain": "activityconnection.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 186703.517657251,
      "curr_month_visits": 186703.517657251,
      "unique_users": 39928.6595654227,
      "pages_per_visit": 5.49859673127221
    },
    {
      "global_rank": 142517,
      "category_rank": 60,
      "domain": "yocanvaporizer.com",
      "category": "Health/Addictions",
      "avg_month_visits": 238376.647648191,
      "curr_month_visits": 238376.647648191,
      "unique_users": 147435.662699112,
      "pages_per_visit": 4.41920990618933
    },
    {
      "global_rank": 78688,
      "category_rank": 60,
      "domain": "rarediseases.org",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 1003340.94580443,
      "curr_month_visits": 1003340.94580443,
      "unique_users": 675683.772733344,
      "pages_per_visit": 1.50450928705615
    },
    {
      "global_rank": 545898,
      "category_rank": 60,
      "domain": "gokapsel.de",
      "category": "Health/Mens_Health",
      "avg_month_visits": 90236.0778392783,
      "curr_month_visits": 90236.0778392783,
      "unique_users": 53284.803212238,
      "pages_per_visit": 2.49089870511808
    },
    {
      "global_rank": 7092,
      "category_rank": 60,
      "domain": "medlatec.vn",
      "category": "Health/Health",
      "avg_month_visits": 12262935.1515197,
      "curr_month_visits": 12262935.1515197,
      "unique_users": 7768862.64421507,
      "pages_per_visit": 1.62323750670186
    },
    {
      "global_rank": 120902,
      "category_rank": 60,
      "domain": "nct.org.uk",
      "category": "Health/Womens_Health",
      "avg_month_visits": 645106.164464924,
      "curr_month_visits": 645106.164464924,
      "unique_users": 377075.534284248,
      "pages_per_visit": 1.70592345789809
    },
    {
      "global_rank": 151812,
      "category_rank": 60,
      "domain": "health.goturkiye.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 385601.032562622,
      "curr_month_visits": 385601.032562622,
      "unique_users": 188894.200330303,
      "pages_per_visit": 1.17421534982088
    },
    {
      "global_rank": 26025,
      "category_rank": 60,
      "domain": "singlecare.com",
      "category": "Health/Pharmacy",
      "avg_month_visits": 3061730.16670338,
      "curr_month_visits": 3061730.16670338,
      "unique_users": 2275752.28938047,
      "pages_per_visit": 1.69794360907862
    },
    {
      "global_rank": 68024,
      "category_rank": 60,
      "domain": "gottman.com",
      "category": "Health/Mental_Health",
      "avg_month_visits": 991640.496620059,
      "curr_month_visits": 991640.496620059,
      "unique_users": 542634.163344816,
      "pages_per_visit": 2.33472443891827
    },
    {
      "global_rank": 143606,
      "category_rank": 61,
      "domain": "cfa.vic.gov.au",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 193237.007752317,
      "curr_month_visits": 193237.007752317,
      "unique_users": 87618.1917697801,
      "pages_per_visit": 6.25552521800631
    },
    {
      "global_rank": 144053,
      "category_rank": 61,
      "domain": "allevasoft.com",
      "category": "Health/Addictions",
      "avg_month_visits": 315293.467791367,
      "curr_month_visits": 315293.467791367,
      "unique_users": 14532.7651631549,
      "pages_per_visit": 12.2152434770539
    },
    {
      "global_rank": 79069,
      "category_rank": 61,
      "domain": "diabetesjournals.org",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 834573.061168603,
      "curr_month_visits": 834573.061168603,
      "unique_users": 463326.840676919,
      "pages_per_visit": 2.00464187152535
    },
    {
      "global_rank": 335842,
      "category_rank": 61,
      "domain": "easterseals.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 118913.424372342,
      "curr_month_visits": 118913.424372342,
      "unique_users": 81489.7943373579,
      "pages_per_visit": 2.63770422363554
    },
    {
      "global_rank": 21765,
      "category_rank": 61,
      "domain": "cedars-sinai.org",
      "category": "Health/Medicine",
      "avg_month_visits": 3250825.7469044,
      "curr_month_visits": 3250825.7469044,
      "unique_users": 2172688.40883518,
      "pages_per_visit": 2.67983487504226
    },
    {
      "global_rank": 229265,
      "category_rank": 61,
      "domain": "careacademy.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 217721.788209821,
      "curr_month_visits": 217721.788209821,
      "unique_users": 66913.4369022231,
      "pages_per_visit": 2.80454920997832
    },
    {
      "global_rank": 189800,
      "category_rank": 61,
      "domain": "babyboom.pl",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 268306.90064114,
      "curr_month_visits": 268306.90064114,
      "unique_users": 132145.35029915,
      "pages_per_visit": 2.99333285901327
    },
    {
      "global_rank": 37388,
      "category_rank": 61,
      "domain": "pike13.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1355781.54754298,
      "curr_month_visits": 1355781.54754298,
      "unique_users": 229022.84583136,
      "pages_per_visit": 9.21941264802525
    },
    {
      "global_rank": 114432,
      "category_rank": 61,
      "domain": "dental-monitoring.com",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 378359.930978533,
      "curr_month_visits": 378359.930978533,
      "unique_users": 84553.1523562579,
      "pages_per_visit": 4.28650268916386
    },
    {
      "global_rank": 121304,
      "category_rank": 61,
      "domain": "joinmidi.com",
      "category": "Health/Womens_Health",
      "avg_month_visits": 311319.191638304,
      "curr_month_visits": 311319.191638304,
      "unique_users": 213661.03954379,
      "pages_per_visit": 4.27117520967093
    },
    {
      "global_rank": 129541,
      "category_rank": 61,
      "domain": "symbion.com.au",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 418717.785811458,
      "curr_month_visits": 418717.785811458,
      "unique_users": 34331.4818772395,
      "pages_per_visit": 5.18214557537037
    },
    {
      "global_rank": 26559,
      "category_rank": 61,
      "domain": "drsimi.cl",
      "category": "Health/Pharmacy",
      "avg_month_visits": 2270374.84520403,
      "curr_month_visits": 2270374.84520403,
      "unique_users": 1361000.31648177,
      "pages_per_visit": 4.10379098926929
    },
    {
      "global_rank": 551837,
      "category_rank": 61,
      "domain": "themenshealthclinic.co.uk",
      "category": "Health/Mens_Health",
      "avg_month_visits": 65305.5137627389,
      "curr_month_visits": 65305.5137627389,
      "unique_users": 33777.9209571514,
      "pages_per_visit": 2.3870967684945
    },
    {
      "global_rank": 68183,
      "category_rank": 61,
      "domain": "therapie.de",
      "category": "Health/Mental_Health",
      "avg_month_visits": 715580.941558276,
      "curr_month_visits": 715580.941558276,
      "unique_users": 466677.762858999,
      "pages_per_visit": 3.22457629651814
    },
    {
      "global_rank": 7224,
      "category_rank": 61,
      "domain": "eclinicalweb.com",
      "category": "Health/Health",
      "avg_month_visits": 7649978.06311073,
      "curr_month_visits": 7649978.06311073,
      "unique_users": 3033078.76881066,
      "pages_per_visit": 5.7268212694241
    },
    {
      "global_rank": 151911,
      "category_rank": 61,
      "domain": "medicalmedium.com",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 368189.568845689,
      "curr_month_visits": 368189.568845689,
      "unique_users": 155960.514919051,
      "pages_per_visit": 2.89223699649591
    },
    {
      "global_rank": 556270,
      "category_rank": 62,
      "domain": "icarebuddy.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 69122.9928968335,
      "curr_month_visits": 69122.9928968335,
      "unique_users": 38746.1813666038,
      "pages_per_visit": 2.35623452098463
    },
    {
      "global_rank": 197757,
      "category_rank": 62,
      "domain": "cmed72.ru",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 277433.872918744,
      "curr_month_visits": 277433.872918744,
      "unique_users": 177385.824351978,
      "pages_per_visit": 1.58892677605612
    },
    {
      "global_rank": 115587,
      "category_rank": 62,
      "domain": "redeunna.com.br",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 643941.421128948,
      "curr_month_visits": 643941.421128948,
      "unique_users": 38767.5542000839,
      "pages_per_visit": 4.23701573770749
    },
    {
      "global_rank": 79908,
      "category_rank": 62,
      "domain": "medistream.co.kr",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 498748.764210286,
      "curr_month_visits": 498748.764210286,
      "unique_users": 77531.6442489037,
      "pages_per_visit": 6.99973267789542
    },
    {
      "global_rank": 233838,
      "category_rank": 62,
      "domain": "intelycare.com",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 188097.505531217,
      "curr_month_visits": 188097.505531217,
      "unique_users": 110358.373404981,
      "pages_per_visit": 2.30020192332018
    },
    {
      "global_rank": 27005,
      "category_rank": 62,
      "domain": "medplusmart.com",
      "category": "Health/Pharmacy",
      "avg_month_visits": 2161148.53289132,
      "curr_month_visits": 2161148.53289132,
      "unique_users": 1351441.51104025,
      "pages_per_visit": 3.20988017011706
    },
    {
      "global_rank": 145029,
      "category_rank": 62,
      "domain": "jomo.so",
      "category": "Health/Addictions",
      "avg_month_visits": 446603.137280859,
      "curr_month_visits": 446603.137280859,
      "unique_users": 96736.1731702795,
      "pages_per_visit": 2.55064368309294
    },
    {
      "global_rank": 339192,
      "category_rank": 62,
      "domain": "savewithable.com",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 69077.3260022481,
      "curr_month_visits": 69077.3260022481,
      "unique_users": 28567.5624862446,
      "pages_per_visit": 5.94591211944735
    },
    {
      "global_rank": 122061,
      "category_rank": 62,
      "domain": "frauenaerzte-im-netz.de",
      "category": "Health/Womens_Health",
      "avg_month_visits": 602048.55755606,
      "curr_month_visits": 602048.55755606,
      "unique_users": 460779.306870841,
      "pages_per_visit": 1.42972250252299
    },
    {
      "global_rank": 68585,
      "category_rank": 62,
      "domain": "add.org",
      "category": "Health/Mental_Health",
      "avg_month_visits": 870581.267383704,
      "curr_month_visits": 870581.267383704,
      "unique_users": 520998.440947878,
      "pages_per_visit": 1.86952842293333
    },
    {
      "global_rank": 22099,
      "category_rank": 62,
      "domain": "mailsuite.com",
      "category": "Health/Medicine",
      "avg_month_visits": 3719143.1916793,
      "curr_month_visits": 3719143.1916793,
      "unique_users": 1078700.19619385,
      "pages_per_visit": 2.4733093040458
    },
    {
      "global_rank": 38526,
      "category_rank": 62,
      "domain": "thegymgroup.com",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1581160.88596003,
      "curr_month_visits": 1581160.88596003,
      "unique_users": 791959.709703698,
      "pages_per_visit": 4.22734204148239
    },
    {
      "global_rank": 132633,
      "category_rank": 62,
      "domain": "nicho.co.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 407555.054412114,
      "curr_month_visits": 407555.054412114,
      "unique_users": 314520.510590269,
      "pages_per_visit": 2.33896848196183
    },
    {
      "global_rank": 152757,
      "category_rank": 62,
      "domain": "faunusplant.ro",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 258614.640726504,
      "curr_month_visits": 258614.640726504,
      "unique_users": 156721.383927017,
      "pages_per_visit": 2.51671279590761
    },
    {
      "global_rank": 145464,
      "category_rank": 62,
      "domain": "commonwealthfund.org",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 397930.93517743,
      "curr_month_visits": 397930.93517743,
      "unique_users": 248981.699637634,
      "pages_per_visit": 1.6342705201107
    },
    {
      "global_rank": 7274,
      "category_rank": 62,
      "domain": "doctorqube.com",
      "category": "Health/Health",
      "avg_month_visits": 7622250.90630715,
      "curr_month_visits": 7622250.90630715,
      "unique_users": 2724068.55275642,
      "pages_per_visit": 5.86372371738603
    },
    {
      "global_rank": 124769,
      "category_rank": 63,
      "domain": "elriomychart.org",
      "category": "Health/Womens_Health",
      "avg_month_visits": 270885.985468249,
      "curr_month_visits": 270885.985468249,
      "unique_users": 61813.3461922489,
      "pages_per_visit": 5.71926756685715
    },
    {
      "global_rank": 153336,
      "category_rank": 63,
      "domain": "futunatura.hu",
      "category": "Health/Alternative_and_Natural_Medicine",
      "avg_month_visits": 266935.336460583,
      "curr_month_visits": 266935.336460583,
      "unique_users": 132447.334863572,
      "pages_per_visit": 2.79593384623218
    },
    {
      "global_rank": 118511,
      "category_rank": 63,
      "domain": "dent-sys.net",
      "category": "Health/Dentist_and_Dental_Services",
      "avg_month_visits": 256591.016624857,
      "curr_month_visits": 256591.016624857,
      "unique_users": 60496.0604151828,
      "pages_per_visit": 20.8840778167007
    },
    {
      "global_rank": 27239,
      "category_rank": 63,
      "domain": "oficialfarma.com.br",
      "category": "Health/Pharmacy",
      "avg_month_visits": 2409262.08808805,
      "curr_month_visits": 2409262.08808805,
      "unique_users": 1430315.88499132,
      "pages_per_visit": 2.91777616377909
    },
    {
      "global_rank": 198844,
      "category_rank": 63,
      "domain": "owletcare.com",
      "category": "Health/Childrens_Health",
      "avg_month_visits": 205356.205333858,
      "curr_month_visits": 205356.205333858,
      "unique_users": 117419.039490277,
      "pages_per_visit": 2.35177749773696
    },
    {
      "global_rank": 236091,
      "category_rank": 63,
      "domain": "pflegia.de",
      "category": "Health/Geriatric_and_Aging_Care",
      "avg_month_visits": 194069.628830695,
      "curr_month_visits": 194069.628830695,
      "unique_users": 103163.079081122,
      "pages_per_visit": 3.64471115254272
    },
    {
      "global_rank": 38605,
      "category_rank": 63,
      "domain": "tipness.co.jp",
      "category": "Health/Nutrition_Diets_and_Fitness",
      "avg_month_visits": 1686160.81962169,
      "curr_month_visits": 1686160.81962169,
      "unique_users": 638437.641768673,
      "pages_per_visit": 3.83362860613163
    },
    {
      "global_rank": 564238,
      "category_rank": 63,
      "domain": "umpuniversity.com",
      "category": "Health/Mens_Health",
      "avg_month_visits": 34013.3928020308,
      "curr_month_visits": 34013.3928020308,
      "unique_users": 8187.56205217584,
      "pages_per_visit": 9.80712602010462
    },
    {
      "global_rank": 7323,
      "category_rank": 63,
      "domain": "baby-calendar.jp",
      "category": "Health/Health",
      "avg_month_visits": 5406248.26004833,
      "curr_month_visits": 5406248.26004833,
      "unique_users": 2518801.76048338,
      "pages_per_visit": 8.02928274298368
    },
    {
      "global_rank": 133821,
      "category_rank": 63,
      "domain": "shionogi-hc.co.jp",
      "category": "Health/Biotechnology_and_Pharmaceuticals",
      "avg_month_visits": 540707.003305002,
      "curr_month_visits": 540707.003305002,
      "unique_users": 449424.015637156,
      "pages_per_visit": 1.60839197360182
    },
    {
      "global_rank": 340508,
      "category_rank": 63,
      "domain": "aiasmilano.it",
      "category": "Health/Developmental_and_Physical_Disabilities",
      "avg_month_visits": 22387.4192068586,
      "curr_month_visits": 22387.4192068586,
      "unique_users": 7775.27426024972,
      "pages_per_visit": 57.6539521099032
    },
    {
      "global_rank": 69463,
      "category_rank": 63,
      "domain": "psychologos.ru",
      "category": "Health/Mental_Health",
      "avg_month_visits": 876145.051241338,
      "curr_month_visits": 876145.051241338,
      "unique_users": 434683.060182434,
      "pages_per_visit": 1.96070924996022
    },
    {
      "global_rank": 148296,
      "category_rank": 63,
      "domain": "telemedi.com",
      "category": "Health/Public_Health_and_Safety",
      "avg_month_visits": 392736.274931973,
      "curr_month_visits": 392736.274931973,
      "unique_users": 225397.37411855,
      "pages_per_visit": 2.43399610386976
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