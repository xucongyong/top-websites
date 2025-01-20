
import {Top_Website_Categories} from '@/lib/top_websites';
export const runtime = 'edge';
export const metadata = {
  title: 'Top Jobs and Career Websites Ranking in the World, 2025',
  description: 'The top 1000 most visited entertainment websites in the World by Ahrefs organic search traffic estimates. Updated monthly. 2025',
  keywords: ['Top Websites', 'Top Websites Ranking','Jobs and Career'],
  authors: [
    { name: 'hackX', url: 'https://www.xucongyong.com' }
  ]
}


export default function TopWebsite() {

  const global_rank_all = [
    {
      "global_rank": 77,
      "category_rank": 1,
      "domain": "indeed.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 387328596.067381,
      "curr_month_visits": 387328596.067381,
      "unique_users": 111139620.100032,
      "pages_per_visit": 8.5410396788851
    },
    {
      "global_rank": 473,
      "category_rank": 2,
      "domain": "myworkdayjobs.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 97520882.46645,
      "curr_month_visits": 97520882.46645,
      "unique_users": 33030784.708812,
      "pages_per_visit": 4.23326625285933
    },
    {
      "global_rank": 514,
      "category_rank": 3,
      "domain": "fanmtl.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 85062941.2428798,
      "curr_month_visits": 85062941.2428798,
      "unique_users": 3331207.52415071,
      "pages_per_visit": 18.2869290587644
    },
    {
      "global_rank": 584,
      "category_rank": 4,
      "domain": "tbank.ru",
      "category": "Jobs_and_Career",
      "avg_month_visits": 70469311.1848126,
      "curr_month_visits": 70469311.1848126,
      "unique_users": 25746427.5665495,
      "pages_per_visit": 4.19386597342409
    },
    {
      "global_rank": 598,
      "category_rank": 5,
      "domain": "hh.ru",
      "category": "Jobs_and_Career",
      "avg_month_visits": 62549619.9985435,
      "curr_month_visits": 62549619.9985435,
      "unique_users": 12722831.8702122,
      "pages_per_visit": 7.55242661697879
    },
    {
      "global_rank": 675,
      "category_rank": 6,
      "domain": "computrabajo.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 49680481.0235451,
      "curr_month_visits": 49680481.0235451,
      "unique_users": 10737107.7702058,
      "pages_per_visit": 10.0654696794487
    },
    {
      "global_rank": 12163,
      "category_rank": 7,
      "domain": "bollyflix.ind.in",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 2018169.58115703,
      "curr_month_visits": 2018169.58115703,
      "unique_users": 884899.586501661,
      "pages_per_visit": 3.48023346227367
    },
    {
      "global_rank": 899,
      "category_rank": 7,
      "domain": "bunkr.ph",
      "category": "Jobs_and_Career",
      "avg_month_visits": 33390400.3217325,
      "curr_month_visits": 33390400.3217325,
      "unique_users": 6525430.37725447,
      "pages_per_visit": 4.4839975836609
    },
    {
      "global_rank": 1324,
      "category_rank": 8,
      "domain": "naukri.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 31438593.8049448,
      "curr_month_visits": 31438593.8049448,
      "unique_users": 10385593.438564,
      "pages_per_visit": 7.06481993833572
    },
    {
      "global_rank": 1344,
      "category_rank": 9,
      "domain": "francetravail.fr",
      "category": "Jobs_and_Career",
      "avg_month_visits": 27015500.8022483,
      "curr_month_visits": 27015500.8022483,
      "unique_users": 7968664.86457114,
      "pages_per_visit": 8.8708579886872
    },
    {
      "global_rank": 1549,
      "category_rank": 10,
      "domain": "jooble.org",
      "category": "Jobs_and_Career",
      "avg_month_visits": 33350697.7106039,
      "curr_month_visits": 33350697.7106039,
      "unique_users": 16267256.0906788,
      "pages_per_visit": 4.24714033772258
    },
    {
      "global_rank": 21289,
      "category_rank": 11,
      "domain": "modernhire.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1878406.86254676,
      "curr_month_visits": 1878406.86254676,
      "unique_users": 1309843.90395757,
      "pages_per_visit": 8.22945588806999
    },
    {
      "global_rank": 1573,
      "category_rank": 11,
      "domain": "seek.com.au",
      "category": "Jobs_and_Career",
      "avg_month_visits": 27091686.856972,
      "curr_month_visits": 27091686.856972,
      "unique_users": 6796541.97478565,
      "pages_per_visit": 6.62908141781563
    },
    {
      "global_rank": 1683,
      "category_rank": 12,
      "domain": "ziprecruiter.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 30474939.6188402,
      "curr_month_visits": 30474939.6188402,
      "unique_users": 13311991.3847964,
      "pages_per_visit": 4.69582544822625
    },
    {
      "global_rank": 1777,
      "category_rank": 13,
      "domain": "taleo.net",
      "category": "Jobs_and_Career",
      "avg_month_visits": 21767004.0142374,
      "curr_month_visits": 21767004.0142374,
      "unique_users": 9576838.0451106,
      "pages_per_visit": 9.2430078625163
    },
    {
      "global_rank": 1788,
      "category_rank": 14,
      "domain": "glassdoor.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 33024093.2338649,
      "curr_month_visits": 33024093.2338649,
      "unique_users": 15918371.3239886,
      "pages_per_visit": 3.55388837460575
    },
    {
      "global_rank": 29028,
      "category_rank": 14,
      "domain": "zeefliz.one",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1069318.25122718,
      "curr_month_visits": 1069318.25122718,
      "unique_users": 572395.685950322,
      "pages_per_visit": 5.85254720277962
    },
    {
      "global_rank": 1811,
      "category_rank": 15,
      "domain": "arbeitsagentur.de",
      "category": "Jobs_and_Career",
      "avg_month_visits": 20198124.6014224,
      "curr_month_visits": 20198124.6014224,
      "unique_users": 6756994.16392411,
      "pages_per_visit": 8.99664622016552
    },
    {
      "global_rank": 29065,
      "category_rank": 15,
      "domain": "exam-sp.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 980986.569201032,
      "curr_month_visits": 980986.569201032,
      "unique_users": 339650.386352929,
      "pages_per_visit": 7.66354037157805
    },
    {
      "global_rank": 2166,
      "category_rank": 16,
      "domain": "ultipro.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 25266704.6180553,
      "curr_month_visits": 25266704.6180553,
      "unique_users": 7056847.35455214,
      "pages_per_visit": 5.25515935946676
    },
    {
      "global_rank": 29834,
      "category_rank": 16,
      "domain": "reelromeo.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 757042.104636364,
      "curr_month_visits": 757042.104636364,
      "unique_users": 290484.456457132,
      "pages_per_visit": 3.92518453487906
    },
    {
      "global_rank": 30283,
      "category_rank": 17,
      "domain": "brightnetwork.co.uk",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1696653.22193587,
      "curr_month_visits": 1696653.22193587,
      "unique_users": 510822.55215805,
      "pages_per_visit": 6.10101601068558
    },
    {
      "global_rank": 2197,
      "category_rank": 17,
      "domain": "saramin.co.kr",
      "category": "Jobs_and_Career",
      "avg_month_visits": 16359057.8173173,
      "curr_month_visits": 16359057.8173173,
      "unique_users": 4734903.4644018,
      "pages_per_visit": 9.35052851804326
    },
    {
      "global_rank": 31226,
      "category_rank": 18,
      "domain": "cciei.com.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1059625.4488036,
      "curr_month_visits": 1059625.4488036,
      "unique_users": 359979.143411457,
      "pages_per_visit": 10.0026419063235
    },
    {
      "global_rank": 2266,
      "category_rank": 18,
      "domain": "jobstreet.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 14958444.8549298,
      "curr_month_visits": 14958444.8549298,
      "unique_users": 4818573.81414642,
      "pages_per_visit": 6.54661867535323
    },
    {
      "global_rank": 35322,
      "category_rank": 19,
      "domain": "jobright.ai",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1279764.57661371,
      "curr_month_visits": 1279764.57661371,
      "unique_users": 275290.078014473,
      "pages_per_visit": 5.14516888854908
    },
    {
      "global_rank": 2286,
      "category_rank": 19,
      "domain": "gupy.io",
      "category": "Jobs_and_Career",
      "avg_month_visits": 23255965.8204341,
      "curr_month_visits": 23255965.8204341,
      "unique_users": 7940433.14877244,
      "pages_per_visit": 5.20289014997616
    },
    {
      "global_rank": 2318,
      "category_rank": 20,
      "domain": "csod.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 18283348.1922312,
      "curr_month_visits": 18283348.1922312,
      "unique_users": 6419980.46058707,
      "pages_per_visit": 9.03560415171768
    },
    {
      "global_rank": 35729,
      "category_rank": 20,
      "domain": "hotjob.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1882189.7516831,
      "curr_month_visits": 1882189.7516831,
      "unique_users": 510946.829879532,
      "pages_per_visit": 8.86285584038363
    },
    {
      "global_rank": 2386,
      "category_rank": 21,
      "domain": "moonshot.cn",
      "category": "Jobs_and_Career",
      "avg_month_visits": 28580419.0542872,
      "curr_month_visits": 28580419.0542872,
      "unique_users": 4307467.99404747,
      "pages_per_visit": 2.33575175988161
    },
    {
      "global_rank": 35833,
      "category_rank": 21,
      "domain": "charlotte.edu",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1731176.03226722,
      "curr_month_visits": 1731176.03226722,
      "unique_users": 482336.667024559,
      "pages_per_visit": 4.01851689193937
    },
    {
      "global_rank": 2389,
      "category_rank": 22,
      "domain": "greenhouse.io",
      "category": "Jobs_and_Career",
      "avg_month_visits": 27016554.3730398,
      "curr_month_visits": 27016554.3730398,
      "unique_users": 9930865.02699438,
      "pages_per_visit": 3.2447029791118
    },
    {
      "global_rank": 37059,
      "category_rank": 22,
      "domain": "hint.app",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1376332.13325222,
      "curr_month_visits": 1376332.13325222,
      "unique_users": 1064636.74264686,
      "pages_per_visit": 3.78879824946662
    },
    {
      "global_rank": 2459,
      "category_rank": 23,
      "domain": "successfactors.eu",
      "category": "Jobs_and_Career",
      "avg_month_visits": 22017431.7082551,
      "curr_month_visits": 22017431.7082551,
      "unique_users": 8817567.968628,
      "pages_per_visit": 4.52724478775792
    },
    {
      "global_rank": 37259,
      "category_rank": 23,
      "domain": "jobfind.gr",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1432011.29772426,
      "curr_month_visits": 1432011.29772426,
      "unique_users": 298657.547919267,
      "pages_per_visit": 7.16620223276997
    },
    {
      "global_rank": 23067,
      "category_rank": 23,
      "domain": "wageworks.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1465813.32852288,
      "curr_month_visits": 1465813.32852288,
      "unique_users": 689121.322523666,
      "pages_per_visit": 9.93782389431709
    },
    {
      "global_rank": 2497,
      "category_rank": 24,
      "domain": "yts-official.mx",
      "category": "Jobs_and_Career",
      "avg_month_visits": 14071660.6482109,
      "curr_month_visits": 14071660.6482109,
      "unique_users": 3554440.83463818,
      "pages_per_visit": 7.98813216807494
    },
    {
      "global_rank": 37785,
      "category_rank": 24,
      "domain": "cloud.italent.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1218205.61796304,
      "curr_month_visits": 1218205.61796304,
      "unique_users": 295004.320664634,
      "pages_per_visit": 6.33692058750823
    },
    {
      "global_rank": 2523,
      "category_rank": 25,
      "domain": "1tamilmv.wf",
      "category": "Jobs_and_Career",
      "avg_month_visits": 15043341.9803953,
      "curr_month_visits": 15043341.9803953,
      "unique_users": 1618098.27972549,
      "pages_per_visit": 2.85796441787075
    },
    {
      "global_rank": 25091,
      "category_rank": 25,
      "domain": "cloud.tkc.co.jp",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1269795.61879821,
      "curr_month_visits": 1269795.61879821,
      "unique_users": 61116.7309231792,
      "pages_per_visit": 24.1921613708132
    },
    {
      "global_rank": 38411,
      "category_rank": 25,
      "domain": "navan.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1072476.37475257,
      "curr_month_visits": 1072476.37475257,
      "unique_users": 376807.923516744,
      "pages_per_visit": 8.90703267498342
    },
    {
      "global_rank": 2901,
      "category_rank": 26,
      "domain": "jobkorea.co.kr",
      "category": "Jobs_and_Career",
      "avg_month_visits": 12774556.0163069,
      "curr_month_visits": 12774556.0163069,
      "unique_users": 3774848.00866257,
      "pages_per_visit": 8.9349071290491
    },
    {
      "global_rank": 40518,
      "category_rank": 26,
      "domain": "simplify.jobs",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1489632.01008036,
      "curr_month_visits": 1489632.01008036,
      "unique_users": 417794.199433098,
      "pages_per_visit": 4.93525828411743
    },
    {
      "global_rank": 25784,
      "category_rank": 26,
      "domain": "mycareersfuture.gov.sg",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1998588.38592153,
      "curr_month_visits": 1998588.38592153,
      "unique_users": 571666.922599631,
      "pages_per_visit": 6.86644206446231
    },
    {
      "global_rank": 27870,
      "category_rank": 27,
      "domain": "peopleadmin.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1724575.90885357,
      "curr_month_visits": 1724575.90885357,
      "unique_users": 669864.156964373,
      "pages_per_visit": 6.67158472511987
    },
    {
      "global_rank": 40633,
      "category_rank": 27,
      "domain": "jobs.flybreeze.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1905947.95498045,
      "curr_month_visits": 1905947.95498045,
      "unique_users": 1268090.86743648,
      "pages_per_visit": 1.37772294131152
    },
    {
      "global_rank": 2932,
      "category_rank": 27,
      "domain": "usajobs.gov",
      "category": "Jobs_and_Career",
      "avg_month_visits": 14502635.6385383,
      "curr_month_visits": 14502635.6385383,
      "unique_users": 4772601.94250075,
      "pages_per_visit": 8.33473142605416
    },
    {
      "global_rank": 40838,
      "category_rank": 28,
      "domain": "glassdoor.sg",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1529368.03522459,
      "curr_month_visits": 1529368.03522459,
      "unique_users": 760817.617586647,
      "pages_per_visit": 3.65823918338999
    },
    {
      "global_rank": 28837,
      "category_rank": 28,
      "domain": "theforage.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 2368822.88993701,
      "curr_month_visits": 2368822.88993701,
      "unique_users": 893530.606628206,
      "pages_per_visit": 4.29301475094359
    },
    {
      "global_rank": 2954,
      "category_rank": 28,
      "domain": "104.com.tw",
      "category": "Jobs_and_Career",
      "avg_month_visits": 17656193.821139,
      "curr_month_visits": 17656193.821139,
      "unique_users": 4057835.00041097,
      "pages_per_visit": 7.79138560565605
    },
    {
      "global_rank": 3135,
      "category_rank": 29,
      "domain": "dayforcehcm.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 18943375.7174145,
      "curr_month_visits": 18943375.7174145,
      "unique_users": 5106699.44409777,
      "pages_per_visit": 4.09752006616777
    },
    {
      "global_rank": 41213,
      "category_rank": 29,
      "domain": "proson.gr",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 2252094.63862466,
      "curr_month_visits": 2252094.63862466,
      "unique_users": 1270329.75206415,
      "pages_per_visit": 1.75369407843007
    },
    {
      "global_rank": 41457,
      "category_rank": 30,
      "domain": "schooljobs.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1319622.97313015,
      "curr_month_visits": 1319622.97313015,
      "unique_users": 589751.880863288,
      "pages_per_visit": 5.10619206502601
    },
    {
      "global_rank": 3180,
      "category_rank": 30,
      "domain": "animesugetv.to",
      "category": "Jobs_and_Career",
      "avg_month_visits": 14571218.4329318,
      "curr_month_visits": 14571218.4329318,
      "unique_users": 1839931.5359556,
      "pages_per_visit": 4.73465087285502
    },
    {
      "global_rank": 41620,
      "category_rank": 31,
      "domain": "chnenergy.com.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1250351.4230042,
      "curr_month_visits": 1250351.4230042,
      "unique_users": 259397.555521084,
      "pages_per_visit": 13.5291269277603
    },
    {
      "global_rank": 3243,
      "category_rank": 31,
      "domain": "joongang.co.kr",
      "category": "Jobs_and_Career",
      "avg_month_visits": 23878504.898597,
      "curr_month_visits": 23878504.898597,
      "unique_users": 8543475.08929076,
      "pages_per_visit": 1.90007954966844
    },
    {
      "global_rank": 45820,
      "category_rank": 32,
      "domain": "hirevue-app.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1168832.16839524,
      "curr_month_visits": 1168832.16839524,
      "unique_users": 548402.400164953,
      "pages_per_visit": 5.78492993573509
    },
    {
      "global_rank": 3245,
      "category_rank": 32,
      "domain": "zhipin.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 11811455.675883,
      "curr_month_visits": 11811455.675883,
      "unique_users": 3661811.96957927,
      "pages_per_visit": 9.57954180270711
    },
    {
      "global_rank": 31348,
      "category_rank": 32,
      "domain": "nuum.ru",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 2150554.05635868,
      "curr_month_visits": 2150554.05635868,
      "unique_users": 1109102.14690526,
      "pages_per_visit": 2.75520792573016
    },
    {
      "global_rank": 32841,
      "category_rank": 33,
      "domain": "pinpointhq.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1837071.99835608,
      "curr_month_visits": 1837071.99835608,
      "unique_users": 978048.314764574,
      "pages_per_visit": 3.30545634963418
    },
    {
      "global_rank": 46880,
      "category_rank": 33,
      "domain": "i-screammedia.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 2022696.98102142,
      "curr_month_visits": 2022696.98102142,
      "unique_users": 236655.441220815,
      "pages_per_visit": 1.47071994998046
    },
    {
      "global_rank": 3261,
      "category_rank": 33,
      "domain": "appcast.io",
      "category": "Jobs_and_Career",
      "avg_month_visits": 28392129.1579244,
      "curr_month_visits": 28392129.1579244,
      "unique_users": 14996822.4468617,
      "pages_per_visit": 1.6475974119433
    },
    {
      "global_rank": 47102,
      "category_rank": 34,
      "domain": "hirequotient.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 860208.999555543,
      "curr_month_visits": 860208.999555543,
      "unique_users": 524263.53961466,
      "pages_per_visit": 2.05134903348964
    },
    {
      "global_rank": 33594,
      "category_rank": 34,
      "domain": "kdelo.ru",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 2291566.87201809,
      "curr_month_visits": 2291566.87201809,
      "unique_users": 1529034.56425099,
      "pages_per_visit": 1.884939797461
    },
    {
      "global_rank": 3474,
      "category_rank": 34,
      "domain": "doda.jp",
      "category": "Jobs_and_Career",
      "avg_month_visits": 15344117.8277878,
      "curr_month_visits": 15344117.8277878,
      "unique_users": 5119028.48337916,
      "pages_per_visit": 5.58634994005194
    },
    {
      "global_rank": 3482,
      "category_rank": 35,
      "domain": "talent.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 20816059.8006254,
      "curr_month_visits": 20816059.8006254,
      "unique_users": 10751097.0842966,
      "pages_per_visit": 2.95072151450071
    },
    {
      "global_rank": 48291,
      "category_rank": 36,
      "domain": "krogerfamilycareers.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1146499.72171966,
      "curr_month_visits": 1146499.72171966,
      "unique_users": 519271.732794483,
      "pages_per_visit": 5.00472845434679
    },
    {
      "global_rank": 3601,
      "category_rank": 36,
      "domain": "16personalities.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 20337542.2345796,
      "curr_month_visits": 20337542.2345796,
      "unique_users": 10877562.6533134,
      "pages_per_visit": 2.99460068409259
    },
    {
      "global_rank": 38847,
      "category_rank": 36,
      "domain": "querohome.com.br",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1631106.29005869,
      "curr_month_visits": 1631106.29005869,
      "unique_users": 336337.001678776,
      "pages_per_visit": 4.70348166499821
    },
    {
      "global_rank": 38874,
      "category_rank": 37,
      "domain": "careers.adobe.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1352934.2111493,
      "curr_month_visits": 1352934.2111493,
      "unique_users": 680948.88467567,
      "pages_per_visit": 5.4477448877285
    },
    {
      "global_rank": 3681,
      "category_rank": 37,
      "domain": "amazon.jobs",
      "category": "Jobs_and_Career",
      "avg_month_visits": 14580434.9415845,
      "curr_month_visits": 14580434.9415845,
      "unique_users": 6558369.34313345,
      "pages_per_visit": 4.93568990131363
    },
    {
      "global_rank": 49824,
      "category_rank": 37,
      "domain": "pkpics.site",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1040915.38959687,
      "curr_month_visits": 1040915.38959687,
      "unique_users": 403777.731837709,
      "pages_per_visit": 3.56107474189442
    },
    {
      "global_rank": 43475,
      "category_rank": 38,
      "domain": "implan.co.kr",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 2174162.55693905,
      "curr_month_visits": 2174162.55693905,
      "unique_users": 944830.364185393,
      "pages_per_visit": 1.36189481117648
    },
    {
      "global_rank": 3855,
      "category_rank": 38,
      "domain": "governmentjobs.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 13279545.9902725,
      "curr_month_visits": 13279545.9902725,
      "unique_users": 4939651.12301806,
      "pages_per_visit": 6.23263223431916
    },
    {
      "global_rank": 50283,
      "category_rank": 38,
      "domain": "jobs.generationshe.co",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 482258.247574585,
      "curr_month_visits": 482258.247574585,
      "unique_users": 391939.997826107,
      "pages_per_visit": 1.7544065283446
    },
    {
      "global_rank": 3856,
      "category_rank": 39,
      "domain": "infojobs.com.br",
      "category": "Jobs_and_Career",
      "avg_month_visits": 13933121.5942566,
      "curr_month_visits": 13933121.5942566,
      "unique_users": 4368826.15065712,
      "pages_per_visit": 5.4613604709035
    },
    {
      "global_rank": 50393,
      "category_rank": 39,
      "domain": "ceping.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1981041.76463852,
      "curr_month_visits": 1981041.76463852,
      "unique_users": 602670.990508202,
      "pages_per_visit": 4.46756742229509
    },
    {
      "global_rank": 44115,
      "category_rank": 39,
      "domain": "leadermune.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 2437158.72383688,
      "curr_month_visits": 2437158.72383688,
      "unique_users": 848326.322293693,
      "pages_per_visit": 1.72410802228535
    },
    {
      "global_rank": 4164,
      "category_rank": 40,
      "domain": "urssaf.fr",
      "category": "Jobs_and_Career",
      "avg_month_visits": 10506864.7459254,
      "curr_month_visits": 10506864.7459254,
      "unique_users": 4400081.09401376,
      "pages_per_visit": 7.66841195240842
    },
    {
      "global_rank": 44774,
      "category_rank": 40,
      "domain": "wewh.co.kr",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 459710.493090426,
      "curr_month_visits": 459710.493090426,
      "unique_users": 10106.78620903,
      "pages_per_visit": 62.8148402916926
    },
    {
      "global_rank": 52613,
      "category_rank": 40,
      "domain": "careers.mastercard.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1082696.99561677,
      "curr_month_visits": 1082696.99561677,
      "unique_users": 581483.012896738,
      "pages_per_visit": 4.60532244644446
    },
    {
      "global_rank": 45774,
      "category_rank": 41,
      "domain": "hirevue.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1733211.40223599,
      "curr_month_visits": 1733211.40223599,
      "unique_users": 902342.771254122,
      "pages_per_visit": 2.43079003955771
    },
    {
      "global_rank": 4333,
      "category_rank": 41,
      "domain": "pracuj.pl",
      "category": "Jobs_and_Career",
      "avg_month_visits": 12211785.3912671,
      "curr_month_visits": 12211785.3912671,
      "unique_users": 3661476.71715651,
      "pages_per_visit": 6.05119348523903
    },
    {
      "global_rank": 53552,
      "category_rank": 41,
      "domain": "maptq.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 802049.120756815,
      "curr_month_visits": 802049.120756815,
      "unique_users": 369645.891502372,
      "pages_per_visit": 9.16318351372889
    },
    {
      "global_rank": 49532,
      "category_rank": 42,
      "domain": "lifestyleupholstery.co.za",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 2285752.23623679,
      "curr_month_visits": 2285752.23623679,
      "unique_users": 501050.325411625,
      "pages_per_visit": 4.98922979822757
    },
    {
      "global_rank": 58341,
      "category_rank": 42,
      "domain": "careers.jpmorgan.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1130433.04349816,
      "curr_month_visits": 1130433.04349816,
      "unique_users": 603439.714537827,
      "pages_per_visit": 3.38667301615282
    },
    {
      "global_rank": 4364,
      "category_rank": 42,
      "domain": "coxautoinc.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 12431511.0880924,
      "curr_month_visits": 12431511.0880924,
      "unique_users": 581428.229134691,
      "pages_per_visit": 13.1176999082853
    },
    {
      "global_rank": 4395,
      "category_rank": 43,
      "domain": "infojobs.net",
      "category": "Jobs_and_Career",
      "avg_month_visits": 11610002.9461541,
      "curr_month_visits": 11610002.9461541,
      "unique_users": 3193251.89339967,
      "pages_per_visit": 7.13482910102818
    },
    {
      "global_rank": 59427,
      "category_rank": 43,
      "domain": "benify.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 574021.63283975,
      "curr_month_visits": 574021.63283975,
      "unique_users": 236997.625763381,
      "pages_per_visit": 6.85283509792727
    },
    {
      "global_rank": 50729,
      "category_rank": 43,
      "domain": "lhh.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1064915.68364717,
      "curr_month_visits": 1064915.68364717,
      "unique_users": 516268.864273832,
      "pages_per_visit": 4.52902321573761
    },
    {
      "global_rank": 51217,
      "category_rank": 44,
      "domain": "shrm.org",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1277188.82390273,
      "curr_month_visits": 1277188.82390273,
      "unique_users": 744841.504487915,
      "pages_per_visit": 3.21226326656744
    },
    {
      "global_rank": 4580,
      "category_rank": 44,
      "domain": "求人ボックス.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 10290408.761742,
      "curr_month_visits": 10290408.761742,
      "unique_users": 5575235.76462602,
      "pages_per_visit": 5.18911734930887
    },
    {
      "global_rank": 59559,
      "category_rank": 44,
      "domain": "weicewang.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 376286.603491838,
      "curr_month_visits": 376286.603491838,
      "unique_users": 156023.300756936,
      "pages_per_visit": 13.1495946077885
    },
    {
      "global_rank": 60066,
      "category_rank": 45,
      "domain": "workerseed.dev",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 797882.60842047,
      "curr_month_visits": 797882.60842047,
      "unique_users": 304999.605908632,
      "pages_per_visit": 2.8808142107004
    },
    {
      "global_rank": 4686,
      "category_rank": 45,
      "domain": "stepstone.de",
      "category": "Jobs_and_Career",
      "avg_month_visits": 12714429.7503954,
      "curr_month_visits": 12714429.7503954,
      "unique_users": 5337189.26247057,
      "pages_per_visit": 4.19903638761394
    },
    {
      "global_rank": 51944,
      "category_rank": 45,
      "domain": "seekpass.co",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 723025.36491737,
      "curr_month_visits": 723025.36491737,
      "unique_users": 405361.103642419,
      "pages_per_visit": 7.2273992909446
    },
    {
      "global_rank": 61936,
      "category_rank": 46,
      "domain": "jobs.ubs.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1203670.96431488,
      "curr_month_visits": 1203670.96431488,
      "unique_users": 444692.759992152,
      "pages_per_visit": 4.22159272169935
    },
    {
      "global_rank": 52057,
      "category_rank": 46,
      "domain": "familycare.ai",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1396509.4927411,
      "curr_month_visits": 1396509.4927411,
      "unique_users": 907096.324759629,
      "pages_per_visit": 1.41999800652122
    },
    {
      "global_rank": 4716,
      "category_rank": 46,
      "domain": "colearn.id",
      "category": "Jobs_and_Career",
      "avg_month_visits": 10903568.1797032,
      "curr_month_visits": 10903568.1797032,
      "unique_users": 4230546.07996848,
      "pages_per_visit": 4.04026022939385
    },
    {
      "global_rank": 53472,
      "category_rank": 47,
      "domain": "trinet.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1435684.93997167,
      "curr_month_visits": 1435684.93997167,
      "unique_users": 359821.52054798,
      "pages_per_visit": 2.53392420732341
    },
    {
      "global_rank": 4839,
      "category_rank": 47,
      "domain": "lidl.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 11670509.1020426,
      "curr_month_visits": 11670509.1020426,
      "unique_users": 7070908.96098967,
      "pages_per_visit": 3.19894538303193
    },
    {
      "global_rank": 62640,
      "category_rank": 47,
      "domain": "glassdoor.com.hk",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1027235.90397065,
      "curr_month_visits": 1027235.90397065,
      "unique_users": 516447.530134611,
      "pages_per_visit": 2.6713742672359
    },
    {
      "global_rank": 4902,
      "category_rank": 48,
      "domain": "smartrecruiters.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 14215066.6914007,
      "curr_month_visits": 14215066.6914007,
      "unique_users": 6826872.05136631,
      "pages_per_visit": 3.35611001533961
    },
    {
      "global_rank": 63293,
      "category_rank": 48,
      "domain": "careers.airbnb.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 806731.66320424,
      "curr_month_visits": 806731.66320424,
      "unique_users": 406569.7375825,
      "pages_per_visit": 3.98563679974914
    },
    {
      "global_rank": 64961,
      "category_rank": 49,
      "domain": "jobs.bytedance.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 708811.173349376,
      "curr_month_visits": 708811.173349376,
      "unique_users": 323667.225937792,
      "pages_per_visit": 6.84135709950828
    },
    {
      "global_rank": 55929,
      "category_rank": 49,
      "domain": "eo-m.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 663696.498427897,
      "curr_month_visits": 663696.498427897,
      "unique_users": 329561.079278483,
      "pages_per_visit": 4.12176464700504
    },
    {
      "global_rank": 4965,
      "category_rank": 49,
      "domain": "kariyer.net",
      "category": "Jobs_and_Career",
      "avg_month_visits": 11501497.4116656,
      "curr_month_visits": 11501497.4116656,
      "unique_users": 3863980.26840122,
      "pages_per_visit": 6.53566832958842
    },
    {
      "global_rank": 55937,
      "category_rank": 50,
      "domain": "recruitingbypaycor.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1058607.73067862,
      "curr_month_visits": 1058607.73067862,
      "unique_users": 642047.390322122,
      "pages_per_visit": 3.86442727891356
    },
    {
      "global_rank": 65193,
      "category_rank": 50,
      "domain": "motabilityoperations.co.uk",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 763784.036725457,
      "curr_month_visits": 763784.036725457,
      "unique_users": 297221.000836247,
      "pages_per_visit": 5.62245508140386
    },
    {
      "global_rank": 5196,
      "category_rank": 50,
      "domain": "hellowork.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 10437299.4359089,
      "curr_month_visits": 10437299.4359089,
      "unique_users": 4128901.59735557,
      "pages_per_visit": 4.93011790366901
    },
    {
      "global_rank": 57237,
      "category_rank": 51,
      "domain": "litbit.exchange",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 128726.842529836,
      "curr_month_visits": 128726.842529836,
      "unique_users": 92100.9586084373,
      "pages_per_visit": 148.20185189347
    },
    {
      "global_rank": 5224,
      "category_rank": 51,
      "domain": "lever.co",
      "category": "Jobs_and_Career",
      "avg_month_visits": 14031023.2077458,
      "curr_month_visits": 14031023.2077458,
      "unique_users": 6348942.70081819,
      "pages_per_visit": 3.03925932755694
    },
    {
      "global_rank": 73371,
      "category_rank": 51,
      "domain": "yello.co",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 1099881.13234924,
      "curr_month_visits": 1099881.13234924,
      "unique_users": 567196.526225667,
      "pages_per_visit": 3.74171250271473
    },
    {
      "global_rank": 73524,
      "category_rank": 52,
      "domain": "earnbetter.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 646761.628459545,
      "curr_month_visits": 646761.628459545,
      "unique_users": 234179.662949938,
      "pages_per_visit": 5.37958600715303
    },
    {
      "global_rank": 59194,
      "category_rank": 52,
      "domain": "search-redir.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1804741.60306365,
      "curr_month_visits": 1804741.60306365,
      "unique_users": 170142.245710679,
      "pages_per_visit": 1.6826346046937
    },
    {
      "global_rank": 5437,
      "category_rank": 52,
      "domain": "townwork.net",
      "category": "Jobs_and_Career",
      "avg_month_visits": 10323890.9872902,
      "curr_month_visits": 10323890.9872902,
      "unique_users": 4452270.84888223,
      "pages_per_visit": 4.79025308393816
    },
    {
      "global_rank": 73949,
      "category_rank": 53,
      "domain": "mthreads.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 360204.342513231,
      "curr_month_visits": 360204.342513231,
      "unique_users": 46062.4771849824,
      "pages_per_visit": 25.359868062875
    },
    {
      "global_rank": 59969,
      "category_rank": 53,
      "domain": "foundever.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 993409.966855688,
      "curr_month_visits": 993409.966855688,
      "unique_users": 385231.250325498,
      "pages_per_visit": 3.05527702256724
    },
    {
      "global_rank": 5464,
      "category_rank": 53,
      "domain": "work.ua",
      "category": "Jobs_and_Career",
      "avg_month_visits": 10202393.8435067,
      "curr_month_visits": 10202393.8435067,
      "unique_users": 2301637.01745862,
      "pages_per_visit": 6.7348238373714
    },
    {
      "global_rank": 61103,
      "category_rank": 54,
      "domain": "prosple.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1102877.78364984,
      "curr_month_visits": 1102877.78364984,
      "unique_users": 583216.674747065,
      "pages_per_visit": 2.93619914747044
    },
    {
      "global_rank": 5482,
      "category_rank": 54,
      "domain": "glassdoor.co.in",
      "category": "Jobs_and_Career",
      "avg_month_visits": 12837488.9674678,
      "curr_month_visits": 12837488.9674678,
      "unique_users": 6546420.39934752,
      "pages_per_visit": 2.98861168563956
    },
    {
      "global_rank": 75442,
      "category_rank": 54,
      "domain": "personio.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 813833.27304727,
      "curr_month_visits": 813833.27304727,
      "unique_users": 452875.823560408,
      "pages_per_visit": 2.22970278827325
    },
    {
      "global_rank": 76612,
      "category_rank": 55,
      "domain": "m12333.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 819345.259858496,
      "curr_month_visits": 819345.259858496,
      "unique_users": 562483.296783966,
      "pages_per_visit": 2.48936206031936
    },
    {
      "global_rank": 5575,
      "category_rank": 55,
      "domain": "bamboohr.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 13845411.3648681,
      "curr_month_visits": 13845411.3648681,
      "unique_users": 4120466.03396859,
      "pages_per_visit": 3.38347211295411
    },
    {
      "global_rank": 62495,
      "category_rank": 55,
      "domain": "finn-app.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1637873.04487769,
      "curr_month_visits": 1637873.04487769,
      "unique_users": 596860.860036312,
      "pages_per_visit": 1.69455673771396
    },
    {
      "global_rank": 5734,
      "category_rank": 56,
      "domain": "rikunabi.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 10676627.3815752,
      "curr_month_visits": 10676627.3815752,
      "unique_users": 3516279.39932451,
      "pages_per_visit": 4.94610176426864
    },
    {
      "global_rank": 77184,
      "category_rank": 56,
      "domain": "kariera.gr",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 722184.217912243,
      "curr_month_visits": 722184.217912243,
      "unique_users": 271121.434348208,
      "pages_per_visit": 4.29409665358317
    },
    {
      "global_rank": 63546,
      "category_rank": 57,
      "domain": "ableteams.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 808927.391177811,
      "curr_month_visits": 808927.391177811,
      "unique_users": 310466.26248224,
      "pages_per_visit": 5.18414683278844
    },
    {
      "global_rank": 78194,
      "category_rank": 57,
      "domain": "recsolu.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 887464.982553587,
      "curr_month_visits": 887464.982553587,
      "unique_users": 485537.399798348,
      "pages_per_visit": 3.43375369510764
    },
    {
      "global_rank": 5736,
      "category_rank": 57,
      "domain": "fmovies.ps",
      "category": "Jobs_and_Career",
      "avg_month_visits": 14202879.1851512,
      "curr_month_visits": 14202879.1851512,
      "unique_users": 1371808.50938248,
      "pages_per_visit": 3.86444859449805
    },
    {
      "global_rank": 78432,
      "category_rank": 58,
      "domain": "pwc.co.uk",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 870063.248515253,
      "curr_month_visits": 870063.248515253,
      "unique_users": 467179.628626437,
      "pages_per_visit": 3.40050571897304
    },
    {
      "global_rank": 5828,
      "category_rank": 58,
      "domain": "work24.go.kr",
      "category": "Jobs_and_Career",
      "avg_month_visits": 7541949.0075901,
      "curr_month_visits": 7541949.0075901,
      "unique_users": 2114681.73844073,
      "pages_per_visit": 8.72624035071148
    },
    {
      "global_rank": 64027,
      "category_rank": 58,
      "domain": "ovice.in",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1136157.75974212,
      "curr_month_visits": 1136157.75974212,
      "unique_users": 54546.9641533134,
      "pages_per_visit": 5.3699350723659
    },
    {
      "global_rank": 78868,
      "category_rank": 59,
      "domain": "getzealthy.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 413569.630494119,
      "curr_month_visits": 413569.630494119,
      "unique_users": 232032.824511502,
      "pages_per_visit": 5.98690725238674
    },
    {
      "global_rank": 5957,
      "category_rank": 59,
      "domain": "74.ru",
      "category": "Jobs_and_Career",
      "avg_month_visits": 12987208.5632479,
      "curr_month_visits": 12987208.5632479,
      "unique_users": 2357269.07731571,
      "pages_per_visit": 3.54965096149879
    },
    {
      "global_rank": 64565,
      "category_rank": 59,
      "domain": "jusowd2.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1473808.63448902,
      "curr_month_visits": 1473808.63448902,
      "unique_users": 376830.351542807,
      "pages_per_visit": 1.91516053304881
    },
    {
      "global_rank": 5983,
      "category_rank": 60,
      "domain": "brassring.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 10873615.5690031,
      "curr_month_visits": 10873615.5690031,
      "unique_users": 4890803.27005866,
      "pages_per_visit": 4.43743418872658
    },
    {
      "global_rank": 64803,
      "category_rank": 60,
      "domain": "careers.dollartree.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1067978.15483402,
      "curr_month_visits": 1067978.15483402,
      "unique_users": 703669.609708384,
      "pages_per_visit": 3.23549075512461
    },
    {
      "global_rank": 86225,
      "category_rank": 60,
      "domain": "edtex.in",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 432071.01011622,
      "curr_month_visits": 432071.01011622,
      "unique_users": 66625.2439618318,
      "pages_per_visit": 9.97653963751465
    },
    {
      "global_rank": 64932,
      "category_rank": 61,
      "domain": "myskillsfuture.gov.sg",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 694445.125064152,
      "curr_month_visits": 694445.125064152,
      "unique_users": 286512.492378995,
      "pages_per_visit": 6.24537609821842
    },
    {
      "global_rank": 87469,
      "category_rank": 61,
      "domain": "finalroundai.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 524929.462255333,
      "curr_month_visits": 524929.462255333,
      "unique_users": 245547.334845356,
      "pages_per_visit": 3.72140301544131
    },
    {
      "global_rank": 6056,
      "category_rank": 61,
      "domain": "ambitionbox.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 12158405.6783607,
      "curr_month_visits": 12158405.6783607,
      "unique_users": 6989751.27511787,
      "pages_per_visit": 2.64760987796469
    },
    {
      "global_rank": 66269,
      "category_rank": 62,
      "domain": "nathanjames.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 581470.440570797,
      "curr_month_visits": 581470.440570797,
      "unique_users": 309194.344710799,
      "pages_per_visit": 3.84355690214225
    },
    {
      "global_rank": 6110,
      "category_rank": 62,
      "domain": "jobs.lever.co",
      "category": "Jobs_and_Career",
      "avg_month_visits": 12792537.7495615,
      "curr_month_visits": 12792537.7495615,
      "unique_users": 6075557.07142497,
      "pages_per_visit": 2.71114649727771
    },
    {
      "global_rank": 88249,
      "category_rank": 62,
      "domain": "recruitcrm.io",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 709603.306901865,
      "curr_month_visits": 709603.306901865,
      "unique_users": 341223.588929157,
      "pages_per_visit": 2.94994040026167
    },
    {
      "global_rank": 88743,
      "category_rank": 63,
      "domain": "jobs.fidelity.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 640913.21913838,
      "curr_month_visits": 640913.21913838,
      "unique_users": 331777.613981883,
      "pages_per_visit": 4.17251906629595
    },
    {
      "global_rank": 6327,
      "category_rank": 63,
      "domain": "freejobalert.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 11741938.8043594,
      "curr_month_visits": 11741938.8043594,
      "unique_users": 2376375.69182365,
      "pages_per_visit": 4.16904806363668
    },
    {
      "global_rank": 67160,
      "category_rank": 63,
      "domain": "careers.bcg.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 986168.857192689,
      "curr_month_visits": 986168.857192689,
      "unique_users": 539572.020350138,
      "pages_per_visit": 3.00749174561396
    },
    {
      "global_rank": 6387,
      "category_rank": 64,
      "domain": "profi.ru",
      "category": "Jobs_and_Career",
      "avg_month_visits": 9588271.55071334,
      "curr_month_visits": 9588271.55071334,
      "unique_users": 3937999.44226247,
      "pages_per_visit": 5.43011934338573
    },
    {
      "global_rank": 67953,
      "category_rank": 64,
      "domain": "rexx-systems.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 884531.085390434,
      "curr_month_visits": 884531.085390434,
      "unique_users": 194885.767693051,
      "pages_per_visit": 3.828746383348
    },
    {
      "global_rank": 89699,
      "category_rank": 64,
      "domain": "aihr.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 717861.651886369,
      "curr_month_visits": 717861.651886369,
      "unique_users": 388878.080926362,
      "pages_per_visit": 2.0688710083276
    },
    {
      "global_rank": 90640,
      "category_rank": 65,
      "domain": "grantsassistanceforyou.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 698422.671075247,
      "curr_month_visits": 698422.671075247,
      "unique_users": 478453.853309415,
      "pages_per_visit": 3.77583384809413
    },
    {
      "global_rank": 6419,
      "category_rank": 65,
      "domain": "download-privacybear.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 9565665.25626064,
      "curr_month_visits": 9565665.25626064,
      "unique_users": 3225002.59571165,
      "pages_per_visit": 1.2381528038588
    },
    {
      "global_rank": 68545,
      "category_rank": 65,
      "domain": "jobs.mckinsey.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 718755.020601698,
      "curr_month_visits": 718755.020601698,
      "unique_users": 281834.059050016,
      "pages_per_visit": 5.98808977887678
    },
    {
      "global_rank": 90666,
      "category_rank": 66,
      "domain": "careers.cathaypacific.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 487397.585417945,
      "curr_month_visits": 487397.585417945,
      "unique_users": 178180.988304704,
      "pages_per_visit": 4.41093706478262
    },
    {
      "global_rank": 68904,
      "category_rank": 66,
      "domain": "talentics.id",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 772081.82311638,
      "curr_month_visits": 772081.82311638,
      "unique_users": 338647.081343325,
      "pages_per_visit": 4.19078234081631
    },
    {
      "global_rank": 6453,
      "category_rank": 66,
      "domain": "avature.net",
      "category": "Jobs_and_Career",
      "avg_month_visits": 10210647.3169598,
      "curr_month_visits": 10210647.3169598,
      "unique_users": 5292483.66262091,
      "pages_per_visit": 4.44271895998784
    },
    {
      "global_rank": 70083,
      "category_rank": 67,
      "domain": "careers.hcahealthcare.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 753321.29804513,
      "curr_month_visits": 753321.29804513,
      "unique_users": 400879.772145931,
      "pages_per_visit": 3.8734188742998
    },
    {
      "global_rank": 6509,
      "category_rank": 67,
      "domain": "openwork.jp",
      "category": "Jobs_and_Career",
      "avg_month_visits": 9989986.34362216,
      "curr_month_visits": 9989986.34362216,
      "unique_users": 3703505.34512059,
      "pages_per_visit": 4.10940854460107
    },
    {
      "global_rank": 92263,
      "category_rank": 67,
      "domain": "talview.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 446541.390665435,
      "curr_month_visits": 446541.390665435,
      "unique_users": 240557.984868119,
      "pages_per_visit": 4.25572094967796
    },
    {
      "global_rank": 92780,
      "category_rank": 68,
      "domain": "vmock.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 572376.433055226,
      "curr_month_visits": 572376.433055226,
      "unique_users": 174535.310571713,
      "pages_per_visit": 7.45695923338841
    },
    {
      "global_rank": 70303,
      "category_rank": 68,
      "domain": "careers.salesforce.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 685896.834636424,
      "curr_month_visits": 685896.834636424,
      "unique_users": 373067.715449061,
      "pages_per_visit": 4.11871447168819
    },
    {
      "global_rank": 6549,
      "category_rank": 68,
      "domain": "jobcase.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 12260677.7517822,
      "curr_month_visits": 12260677.7517822,
      "unique_users": 4915007.55441886,
      "pages_per_visit": 2.54744637320337
    },
    {
      "global_rank": 70568,
      "category_rank": 69,
      "domain": "zerolifestyle.co",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 570362.170520631,
      "curr_month_visits": 570362.170520631,
      "unique_users": 288623.93076101,
      "pages_per_visit": 4.45564351413347
    },
    {
      "global_rank": 93925,
      "category_rank": 69,
      "domain": "jobly.fi",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 458644.993333602,
      "curr_month_visits": 458644.993333602,
      "unique_users": 177535.923689137,
      "pages_per_visit": 4.69114718978931
    },
    {
      "global_rank": 6579,
      "category_rank": 69,
      "domain": "superjob.ru",
      "category": "Jobs_and_Career",
      "avg_month_visits": 10209387.5300006,
      "curr_month_visits": 10209387.5300006,
      "unique_users": 4204369.98671006,
      "pages_per_visit": 3.47050163234087
    },
    {
      "global_rank": 70699,
      "category_rank": 70,
      "domain": "okkora-live.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 679361.829969397,
      "curr_month_visits": 679361.829969397,
      "unique_users": 307078.411199568,
      "pages_per_visit": 2.66129422861132
    },
    {
      "global_rank": 95163,
      "category_rank": 70,
      "domain": "hiring.cafe",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 620965.200784488,
      "curr_month_visits": 620965.200784488,
      "unique_users": 149628.544007987,
      "pages_per_visit": 3.67694038091475
    },
    {
      "global_rank": 6581,
      "category_rank": 70,
      "domain": "baitoru.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 9558702.10380934,
      "curr_month_visits": 9558702.10380934,
      "unique_users": 4115855.64139027,
      "pages_per_visit": 4.34276044966899
    },
    {
      "global_rank": 97717,
      "category_rank": 71,
      "domain": "pinterestcareers.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 612217.948682085,
      "curr_month_visits": 612217.948682085,
      "unique_users": 347006.635617667,
      "pages_per_visit": 3.70128716510461
    },
    {
      "global_rank": 6602,
      "category_rank": 71,
      "domain": "albamon.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6131674.80581381,
      "curr_month_visits": 6131674.80581381,
      "unique_users": 1203095.4872601,
      "pages_per_visit": 10.9999441765315
    },
    {
      "global_rank": 71639,
      "category_rank": 71,
      "domain": "ethiopianpassportservices.gov.et",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 549094.320289724,
      "curr_month_visits": 549094.320289724,
      "unique_users": 116502.444421879,
      "pages_per_visit": 4.33195161113527
    },
    {
      "global_rank": 72122,
      "category_rank": 72,
      "domain": "shop.ntv.co.jp",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 379140.273905802,
      "curr_month_visits": 379140.273905802,
      "unique_users": 184712.174923629,
      "pages_per_visit": 6.96825626215843
    },
    {
      "global_rank": 98289,
      "category_rank": 72,
      "domain": "manatal.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 448060.529660773,
      "curr_month_visits": 448060.529660773,
      "unique_users": 161437.828453597,
      "pages_per_visit": 5.60748655178611
    },
    {
      "global_rank": 6622,
      "category_rank": 72,
      "domain": "jobs.smartrecruiters.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 11544793.5207877,
      "curr_month_visits": 11544793.5207877,
      "unique_users": 5675382.41943638,
      "pages_per_visit": 2.81597791363453
    },
    {
      "global_rank": 73489,
      "category_rank": 73,
      "domain": "career.nikkei.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 576052.965949686,
      "curr_month_visits": 576052.965949686,
      "unique_users": 290341.363391594,
      "pages_per_visit": 5.25169448116773
    },
    {
      "global_rank": 99108,
      "category_rank": 73,
      "domain": "hdbolly4u.xyz",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 502868.047805275,
      "curr_month_visits": 502868.047805275,
      "unique_users": 275566.673424609,
      "pages_per_visit": 4.23640563128708
    },
    {
      "global_rank": 6835,
      "category_rank": 73,
      "domain": "arbetsformedlingen.se",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6538334.06195437,
      "curr_month_visits": 6538334.06195437,
      "unique_users": 1349410.84994255,
      "pages_per_visit": 8.22780320210881
    },
    {
      "global_rank": 7336,
      "category_rank": 74,
      "domain": "job.mynavi.jp",
      "category": "Jobs_and_Career",
      "avg_month_visits": 7489934.3060185,
      "curr_month_visits": 7489934.3060185,
      "unique_users": 2458933.26403421,
      "pages_per_visit": 5.6543398344192
    },
    {
      "global_rank": 99451,
      "category_rank": 74,
      "domain": "career.pamapersada.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 676965.84939666,
      "curr_month_visits": 676965.84939666,
      "unique_users": 195069.184440581,
      "pages_per_visit": 3.35178003700941
    },
    {
      "global_rank": 73601,
      "category_rank": 74,
      "domain": "movelms.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 603888.779165993,
      "curr_month_visits": 603888.779165993,
      "unique_users": 73135.0910876095,
      "pages_per_visit": 7.3172119973052
    },
    {
      "global_rank": 74689,
      "category_rank": 75,
      "domain": "gogoanime.do",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 927017.517445098,
      "curr_month_visits": 927017.517445098,
      "unique_users": 214254.601972557,
      "pages_per_visit": 3.53694345397542
    },
    {
      "global_rank": 99790,
      "category_rank": 75,
      "domain": "shauryafest.in",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 418384.596136007,
      "curr_month_visits": 418384.596136007,
      "unique_users": 251385.920375087,
      "pages_per_visit": 1.14908308755564
    },
    {
      "global_rank": 7383,
      "category_rank": 75,
      "domain": "inforcloudsuite.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6266927.01837191,
      "curr_month_visits": 6266927.01837191,
      "unique_users": 875726.795108948,
      "pages_per_visit": 11.2891278115206
    },
    {
      "global_rank": 75435,
      "category_rank": 76,
      "domain": "mercer.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 781466.47725779,
      "curr_month_visits": 781466.47725779,
      "unique_users": 454171.065782527,
      "pages_per_visit": 2.13766124917795
    },
    {
      "global_rank": 99827,
      "category_rank": 76,
      "domain": "cappassessments.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 588883.569839165,
      "curr_month_visits": 588883.569839165,
      "unique_users": 221970.411547926,
      "pages_per_visit": 2.94579843014918
    },
    {
      "global_rank": 7475,
      "category_rank": 76,
      "domain": "careerpower.in",
      "category": "Jobs_and_Career",
      "avg_month_visits": 14080667.7782918,
      "curr_month_visits": 14080667.7782918,
      "unique_users": 6464802.68395247,
      "pages_per_visit": 1.77740659173158
    },
    {
      "global_rank": 100871,
      "category_rank": 77,
      "domain": "careers.db.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 527495.949202628,
      "curr_month_visits": 527495.949202628,
      "unique_users": 295534.951550576,
      "pages_per_visit": 3.71763325176854
    },
    {
      "global_rank": 7490,
      "category_rank": 77,
      "domain": "gusto.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 7368680.73173963,
      "curr_month_visits": 7368680.73173963,
      "unique_users": 1911328.76350512,
      "pages_per_visit": 6.16042317644487
    },
    {
      "global_rank": 76550,
      "category_rank": 77,
      "domain": "meritzpartners.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 803018.809683352,
      "curr_month_visits": 803018.809683352,
      "unique_users": 538429.405493048,
      "pages_per_visit": 1.19614598326359
    },
    {
      "global_rank": 76790,
      "category_rank": 78,
      "domain": "appisfree.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 795922.535720847,
      "curr_month_visits": 795922.535720847,
      "unique_users": 633293.393326342,
      "pages_per_visit": 2.09768492728289
    },
    {
      "global_rank": 102206,
      "category_rank": 78,
      "domain": "careers.blackrock.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 647597.059117212,
      "curr_month_visits": 647597.059117212,
      "unique_users": 326302.446296579,
      "pages_per_visit": 2.58574879244735
    },
    {
      "global_rank": 7668,
      "category_rank": 78,
      "domain": "trudvsem.ru",
      "category": "Jobs_and_Career",
      "avg_month_visits": 7456894.33383135,
      "curr_month_visits": 7456894.33383135,
      "unique_users": 2556125.34574843,
      "pages_per_visit": 6.21115579427337
    },
    {
      "global_rank": 7673,
      "category_rank": 79,
      "domain": "careers.microsoft.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 7360404.39309922,
      "curr_month_visits": 7360404.39309922,
      "unique_users": 2588453.66531176,
      "pages_per_visit": 5.92866979184043
    },
    {
      "global_rank": 80442,
      "category_rank": 79,
      "domain": "adplist.org",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 584268.073274196,
      "curr_month_visits": 584268.073274196,
      "unique_users": 191008.600853162,
      "pages_per_visit": 5.74176366960296
    },
    {
      "global_rank": 102236,
      "category_rank": 79,
      "domain": "sparkhire.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 536331.641207347,
      "curr_month_visits": 536331.641207347,
      "unique_users": 244476.306429321,
      "pages_per_visit": 3.84918158166312
    },
    {
      "global_rank": 81857,
      "category_rank": 80,
      "domain": "sensehq.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 632669.987034462,
      "curr_month_visits": 632669.987034462,
      "unique_users": 268044.706232318,
      "pages_per_visit": 3.51480930459725
    },
    {
      "global_rank": 7732,
      "category_rank": 80,
      "domain": "bein-matchs.net",
      "category": "Jobs_and_Career",
      "avg_month_visits": 9711407.24061622,
      "curr_month_visits": 9711407.24061622,
      "unique_users": 1706894.80911979,
      "pages_per_visit": 2.19886331825333
    },
    {
      "global_rank": 103032,
      "category_rank": 80,
      "domain": "oli.vi",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 644181.491263831,
      "curr_month_visits": 644181.491263831,
      "unique_users": 463081.887925143,
      "pages_per_visit": 1.22241778208031
    },
    {
      "global_rank": 83042,
      "category_rank": 81,
      "domain": "sightsinplus.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 952983.292516623,
      "curr_month_visits": 952983.292516623,
      "unique_users": 502593.193599836,
      "pages_per_visit": 1.80718680920936
    },
    {
      "global_rank": 103307,
      "category_rank": 81,
      "domain": "24orebs.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 311119.955847805,
      "curr_month_visits": 311119.955847805,
      "unique_users": 174511.708914991,
      "pages_per_visit": 4.65835541693969
    },
    {
      "global_rank": 7785,
      "category_rank": 81,
      "domain": "binaccount.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6101496.40067425,
      "curr_month_visits": 6101496.40067425,
      "unique_users": 289580.633884571,
      "pages_per_visit": 15.4797310083908
    },
    {
      "global_rank": 104595,
      "category_rank": 82,
      "domain": "csiil.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 464678.077585226,
      "curr_month_visits": 464678.077585226,
      "unique_users": 175496.451366276,
      "pages_per_visit": 2.63221774018868
    },
    {
      "global_rank": 83422,
      "category_rank": 82,
      "domain": "jobs.readysethire.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 457291.878398546,
      "curr_month_visits": 457291.878398546,
      "unique_users": 353502.244722269,
      "pages_per_visit": 3.32574632815279
    },
    {
      "global_rank": 7831,
      "category_rank": 82,
      "domain": "selecao.net.br",
      "category": "Jobs_and_Career",
      "avg_month_visits": 7042632.96670124,
      "curr_month_visits": 7042632.96670124,
      "unique_users": 2633179.29228126,
      "pages_per_visit": 4.13038252811272
    },
    {
      "global_rank": 7930,
      "category_rank": 83,
      "domain": "jobs2careers.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 7395228.97761752,
      "curr_month_visits": 7395228.97761752,
      "unique_users": 3938648.90119432,
      "pages_per_visit": 4.03629638670582
    },
    {
      "global_rank": 83653,
      "category_rank": 83,
      "domain": "tryexponent.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 688766.055617122,
      "curr_month_visits": 688766.055617122,
      "unique_users": 233709.100211965,
      "pages_per_visit": 3.34926560633914
    },
    {
      "global_rank": 106097,
      "category_rank": 83,
      "domain": "job.ceair.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 142157.756431733,
      "curr_month_visits": 142157.756431733,
      "unique_users": 49155.0241255398,
      "pages_per_visit": 17.6476221413203
    },
    {
      "global_rank": 8026,
      "category_rank": 84,
      "domain": "pm61qtrk.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 11522920.4152403,
      "curr_month_visits": 11522920.4152403,
      "unique_users": 3393155.24045819,
      "pages_per_visit": 1.68960820495062
    },
    {
      "global_rank": 83816,
      "category_rank": 84,
      "domain": "careers.cbp.gov",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 565599.051839515,
      "curr_month_visits": 565599.051839515,
      "unique_users": 401676.977755295,
      "pages_per_visit": 1.79556173595083
    },
    {
      "global_rank": 107001,
      "category_rank": 84,
      "domain": "goodtime.io",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 463127.238404881,
      "curr_month_visits": 463127.238404881,
      "unique_users": 186554.048825682,
      "pages_per_visit": 4.3700637092013
    },
    {
      "global_rank": 84203,
      "category_rank": 85,
      "domain": "super.money",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1604883.50356752,
      "curr_month_visits": 1604883.50356752,
      "unique_users": 1264988.8225652,
      "pages_per_visit": 1.26957706645573
    },
    {
      "global_rank": 8057,
      "category_rank": 85,
      "domain": "gorodrabot.ru",
      "category": "Jobs_and_Career",
      "avg_month_visits": 8237368.12352546,
      "curr_month_visits": 8237368.12352546,
      "unique_users": 4004092.84161382,
      "pages_per_visit": 3.47778421351112
    },
    {
      "global_rank": 107340,
      "category_rank": 85,
      "domain": "jobtestprep.co.uk",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 553159.184341532,
      "curr_month_visits": 553159.184341532,
      "unique_users": 269643.772052443,
      "pages_per_visit": 2.94005145557738
    },
    {
      "global_rank": 84784,
      "category_rank": 86,
      "domain": "wonsulting.ai",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 564809.252808106,
      "curr_month_visits": 564809.252808106,
      "unique_users": 237209.41588809,
      "pages_per_visit": 4.32401941901739
    },
    {
      "global_rank": 8094,
      "category_rank": 86,
      "domain": "jobsdb.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6139921.01384808,
      "curr_month_visits": 6139921.01384808,
      "unique_users": 1911536.53842527,
      "pages_per_visit": 6.49093752604444
    },
    {
      "global_rank": 107422,
      "category_rank": 86,
      "domain": "newaiming.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 817124.333386536,
      "curr_month_visits": 817124.333386536,
      "unique_users": 203274.317377448,
      "pages_per_visit": 1.8573307144587
    },
    {
      "global_rank": 87756,
      "category_rank": 87,
      "domain": "sat.cool",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 608391.094068033,
      "curr_month_visits": 608391.094068033,
      "unique_users": 230842.897727,
      "pages_per_visit": 2.92696931094633
    },
    {
      "global_rank": 8206,
      "category_rank": 87,
      "domain": "karmasandhan.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 9085310.97946964,
      "curr_month_visits": 9085310.97946964,
      "unique_users": 3332287.2693336,
      "pages_per_visit": 2.02544299114209
    },
    {
      "global_rank": 108949,
      "category_rank": 87,
      "domain": "practiceaptitudetests.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 436224.012169119,
      "curr_month_visits": 436224.012169119,
      "unique_users": 249193.42280248,
      "pages_per_visit": 3.63396707707954
    },
    {
      "global_rank": 8225,
      "category_rank": 88,
      "domain": "internshala.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6971352.80523812,
      "curr_month_visits": 6971352.80523812,
      "unique_users": 2509228.21213578,
      "pages_per_visit": 5.24347391134515
    },
    {
      "global_rank": 89882,
      "category_rank": 88,
      "domain": "bitmesra.co.in",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 428439.779453633,
      "curr_month_visits": 428439.779453633,
      "unique_users": 21134.9334487177,
      "pages_per_visit": 10.6888620520729
    },
    {
      "global_rank": 108965,
      "category_rank": 88,
      "domain": "bsurl.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 930356.039321113,
      "curr_month_visits": 930356.039321113,
      "unique_users": 358923.359345829,
      "pages_per_visit": 1.40863067686522
    },
    {
      "global_rank": 8496,
      "category_rank": 89,
      "domain": "workable.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 8369267.72932418,
      "curr_month_visits": 8369267.72932418,
      "unique_users": 4607954.25205605,
      "pages_per_visit": 2.87586544677957
    },
    {
      "global_rank": 90179,
      "category_rank": 89,
      "domain": "wuwuwutv.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 450815.960022001,
      "curr_month_visits": 450815.960022001,
      "unique_users": 206088.921665538,
      "pages_per_visit": 1.24122513952126
    },
    {
      "global_rank": 109374,
      "category_rank": 89,
      "domain": "suntekcorps.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 135735.203275191,
      "curr_month_visits": 135735.203275191,
      "unique_users": 7440.89054435215,
      "pages_per_visit": 41.0846451412758
    },
    {
      "global_rank": 110125,
      "category_rank": 90,
      "domain": "eskill.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 190020.823720918,
      "curr_month_visits": 190020.823720918,
      "unique_users": 104900.061903739,
      "pages_per_visit": 32.021828958005
    },
    {
      "global_rank": 8519,
      "category_rank": 90,
      "domain": "gripcloud.show",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6776346.53845045,
      "curr_month_visits": 6776346.53845045,
      "unique_users": 2537314.53041762,
      "pages_per_visit": 1.66158826293671
    },
    {
      "global_rank": 90385,
      "category_rank": 90,
      "domain": "1tamilblasters.pm",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 927375.033868243,
      "curr_month_visits": 927375.033868243,
      "unique_users": 214863.036217439,
      "pages_per_visit": 1.11481473780123
    },
    {
      "global_rank": 92646,
      "category_rank": 91,
      "domain": "wrkstrm.us",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 695211.517694813,
      "curr_month_visits": 695211.517694813,
      "unique_users": 410511.806620284,
      "pages_per_visit": 1.49818949348033
    },
    {
      "global_rank": 8537,
      "category_rank": 91,
      "domain": "vagas.com.br",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6808669.10621216,
      "curr_month_visits": 6808669.10621216,
      "unique_users": 2482345.62769811,
      "pages_per_visit": 5.56719711205982
    },
    {
      "global_rank": 110988,
      "category_rank": 91,
      "domain": "coli688.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 274892.293751491,
      "curr_month_visits": 274892.293751491,
      "unique_users": 64963.7651504439,
      "pages_per_visit": 12.381340277452
    },
    {
      "global_rank": 111446,
      "category_rank": 92,
      "domain": "affinidi.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 660988.134992726,
      "curr_month_visits": 660988.134992726,
      "unique_users": 450532.002354414,
      "pages_per_visit": 1.27075755422999
    },
    {
      "global_rank": 8580,
      "category_rank": 92,
      "domain": "enbek.kz",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4684681.5544141,
      "curr_month_visits": 4684681.5544141,
      "unique_users": 1403344.89172528,
      "pages_per_visit": 7.76436548486929
    },
    {
      "global_rank": 93535,
      "category_rank": 92,
      "domain": "bgsecured.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 258094.9772103,
      "curr_month_visits": 258094.9772103,
      "unique_users": 75870.1935098319,
      "pages_per_visit": 23.4239563502718
    },
    {
      "global_rank": 8670,
      "category_rank": 93,
      "domain": "pageuppeople.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4848502.0618841,
      "curr_month_visits": 4848502.0618841,
      "unique_users": 1984142.97491866,
      "pages_per_visit": 9.2423212043514
    },
    {
      "global_rank": 94426,
      "category_rank": 93,
      "domain": "brownczaritinerary.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 219605.2642833,
      "curr_month_visits": 219605.2642833,
      "unique_users": 104933.609442767,
      "pages_per_visit": 6.78420520441236
    },
    {
      "global_rank": 111635,
      "category_rank": 93,
      "domain": "careers.compassgroupcareers.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 477222.528814862,
      "curr_month_visits": 477222.528814862,
      "unique_users": 247477.173779778,
      "pages_per_visit": 3.54855637617628
    },
    {
      "global_rank": 94715,
      "category_rank": 94,
      "domain": "careerswithus.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 529349.729804061,
      "curr_month_visits": 529349.729804061,
      "unique_users": 294173.512259987,
      "pages_per_visit": 3.58588418809247
    },
    {
      "global_rank": 8883,
      "category_rank": 94,
      "domain": "ibps.in",
      "category": "Jobs_and_Career",
      "avg_month_visits": 7228489.15110961,
      "curr_month_visits": 7228489.15110961,
      "unique_users": 2387818.72243724,
      "pages_per_visit": 4.65753428074776
    },
    {
      "global_rank": 113003,
      "category_rank": 94,
      "domain": "lucid.co",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 584836.682972615,
      "curr_month_visits": 584836.682972615,
      "unique_users": 367563.620863003,
      "pages_per_visit": 1.80476883278177
    },
    {
      "global_rank": 115460,
      "category_rank": 95,
      "domain": "talantix.ru",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 186121.491523665,
      "curr_month_visits": 186121.491523665,
      "unique_users": 37422.6149696064,
      "pages_per_visit": 23.1731337725757
    },
    {
      "global_rank": 8985,
      "category_rank": 95,
      "domain": "glassdoor.co.uk",
      "category": "Jobs_and_Career",
      "avg_month_visits": 7352598.23960676,
      "curr_month_visits": 7352598.23960676,
      "unique_users": 3405599.71362425,
      "pages_per_visit": 3.37210626580447
    },
    {
      "global_rank": 96727,
      "category_rank": 95,
      "domain": "cbt-exam.in",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 382432.353239622,
      "curr_month_visits": 382432.353239622,
      "unique_users": 141955.972578761,
      "pages_per_visit": 3.29394589080704
    },
    {
      "global_rank": 97583,
      "category_rank": 96,
      "domain": "careers.humana.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 406027.138536392,
      "curr_month_visits": 406027.138536392,
      "unique_users": 213629.992087311,
      "pages_per_visit": 4.76332826410411
    },
    {
      "global_rank": 115884,
      "category_rank": 96,
      "domain": "swagapp.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 505685.291306455,
      "curr_month_visits": 505685.291306455,
      "unique_users": 257409.673450977,
      "pages_per_visit": 3.24194757435528
    },
    {
      "global_rank": 9105,
      "category_rank": 96,
      "domain": "freelancer.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5188466.03586998,
      "curr_month_visits": 5188466.03586998,
      "unique_users": 1727389.11970092,
      "pages_per_visit": 8.80963041790926
    },
    {
      "global_rank": 9259,
      "category_rank": 97,
      "domain": "job-medley.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 8168549.61085486,
      "curr_month_visits": 8168549.61085486,
      "unique_users": 2669902.45627097,
      "pages_per_visit": 3.73497231336072
    },
    {
      "global_rank": 116834,
      "category_rank": 97,
      "domain": "shyftoff.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 293610.89402406,
      "curr_month_visits": 293610.89402406,
      "unique_users": 31788.592136834,
      "pages_per_visit": 5.04838871512137
    },
    {
      "global_rank": 99283,
      "category_rank": 97,
      "domain": "career.hh.ru",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 540004.748356329,
      "curr_month_visits": 540004.748356329,
      "unique_users": 343191.513541246,
      "pages_per_visit": 1.9138564848088
    },
    {
      "global_rank": 102010,
      "category_rank": 98,
      "domain": "weather.cma.cn",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 746023.59744791,
      "curr_month_visits": 746023.59744791,
      "unique_users": 327287.307122743,
      "pages_per_visit": 2.65336831909499
    },
    {
      "global_rank": 117062,
      "category_rank": 98,
      "domain": "longfor.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 323496.869581797,
      "curr_month_visits": 323496.869581797,
      "unique_users": 60782.4347800415,
      "pages_per_visit": 10.1998200047088
    },
    {
      "global_rank": 9275,
      "category_rank": 98,
      "domain": "welcometothejungle.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4816900.84840498,
      "curr_month_visits": 4816900.84840498,
      "unique_users": 1585496.13459323,
      "pages_per_visit": 5.74302576272344
    },
    {
      "global_rank": 102192,
      "category_rank": 99,
      "domain": "smallppt.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 439367.460872855,
      "curr_month_visits": 439367.460872855,
      "unique_users": 264110.602047292,
      "pages_per_visit": 5.20713380284863
    },
    {
      "global_rank": 117409,
      "category_rank": 99,
      "domain": "genoma.work",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 447958.873976821,
      "curr_month_visits": 447958.873976821,
      "unique_users": 189114.441676333,
      "pages_per_visit": 3.31942412457184
    },
    {
      "global_rank": 9386,
      "category_rank": 99,
      "domain": "jobrapido.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 8098856.30006484,
      "curr_month_visits": 8098856.30006484,
      "unique_users": 4008789.00314299,
      "pages_per_visit": 2.98188050931308
    },
    {
      "global_rank": 102330,
      "category_rank": 100,
      "domain": "edusign.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 823005.479816164,
      "curr_month_visits": 823005.479816164,
      "unique_users": 246145.92608656,
      "pages_per_visit": 1.78198694813049
    },
    {
      "global_rank": 9395,
      "category_rank": 100,
      "domain": "zhaopin.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4672432.31404792,
      "curr_month_visits": 4672432.31404792,
      "unique_users": 1601989.03033959,
      "pages_per_visit": 9.79351728283838
    },
    {
      "global_rank": 119053,
      "category_rank": 100,
      "domain": "ambertrack.co.uk",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 263354.722179459,
      "curr_month_visits": 263354.722179459,
      "unique_users": 85610.4080686315,
      "pages_per_visit": 6.67026248875768
    },
    {
      "global_rank": 9503,
      "category_rank": 101,
      "domain": "paradox.ai",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6943865.70110445,
      "curr_month_visits": 6943865.70110445,
      "unique_users": 3945583.24323342,
      "pages_per_visit": 2.99414970158471
    },
    {
      "global_rank": 119878,
      "category_rank": 101,
      "domain": "parcoursup.gouv.fr",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 617367.59710657,
      "curr_month_visits": 617367.59710657,
      "unique_users": 330435.497492892,
      "pages_per_visit": 1.89098847134868
    },
    {
      "global_rank": 105225,
      "category_rank": 101,
      "domain": "atom8.jp",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 308736.935153176,
      "curr_month_visits": 308736.935153176,
      "unique_users": 44276.2560125497,
      "pages_per_visit": 4.9328379127545
    },
    {
      "global_rank": 105668,
      "category_rank": 102,
      "domain": "cese2.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 240428.544716804,
      "curr_month_visits": 240428.544716804,
      "unique_users": 11942.4721979362,
      "pages_per_visit": 19.2881762333013
    },
    {
      "global_rank": 9541,
      "category_rank": 102,
      "domain": "r-agent.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6021887.99681979,
      "curr_month_visits": 6021887.99681979,
      "unique_users": 2199057.6948454,
      "pages_per_visit": 5.4104349176715
    },
    {
      "global_rank": 120499,
      "category_rank": 102,
      "domain": "careers.heb.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 568288.477868133,
      "curr_month_visits": 568288.477868133,
      "unique_users": 283725.189496175,
      "pages_per_visit": 2.2674525921633
    },
    {
      "global_rank": 120879,
      "category_rank": 103,
      "domain": "beapplied.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 377664.73412164,
      "curr_month_visits": 377664.73412164,
      "unique_users": 151174.922726625,
      "pages_per_visit": 5.80716740562003
    },
    {
      "global_rank": 108373,
      "category_rank": 103,
      "domain": "jobs.ea.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 113083.224398684,
      "curr_month_visits": 113083.224398684,
      "unique_users": 58202.6700369942,
      "pages_per_visit": 6.20512292746224
    },
    {
      "global_rank": 9700,
      "category_rank": 103,
      "domain": "catho.com.br",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6481085.6292498,
      "curr_month_visits": 6481085.6292498,
      "unique_users": 2755595.08150515,
      "pages_per_visit": 4.53858731696314
    },
    {
      "global_rank": 9879,
      "category_rank": 104,
      "domain": "myjobhelper.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 7753488.22713504,
      "curr_month_visits": 7753488.22713504,
      "unique_users": 2749795.5485735,
      "pages_per_visit": 2.87648290343379
    },
    {
      "global_rank": 121761,
      "category_rank": 104,
      "domain": "expertia.pro",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 585426.425000752,
      "curr_month_visits": 585426.425000752,
      "unique_users": 418880.405170263,
      "pages_per_visit": 1.76230987271727
    },
    {
      "global_rank": 109554,
      "category_rank": 104,
      "domain": "hitostat.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 678914.79910975,
      "curr_month_visits": 678914.79910975,
      "unique_users": 393831.45645013,
      "pages_per_visit": 2.84444703905601
    },
    {
      "global_rank": 109890,
      "category_rank": 105,
      "domain": "careers.labcorp.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 447988.268796535,
      "curr_month_visits": 447988.268796535,
      "unique_users": 279792.145722052,
      "pages_per_visit": 2.82931296162876
    },
    {
      "global_rank": 10012,
      "category_rank": 105,
      "domain": "monster.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5631051.73771605,
      "curr_month_visits": 5631051.73771605,
      "unique_users": 3016114.08411037,
      "pages_per_visit": 5.14245617166904
    },
    {
      "global_rank": 121805,
      "category_rank": 105,
      "domain": "jazz.co",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 365396.181758575,
      "curr_month_visits": 365396.181758575,
      "unique_users": 75436.9458188223,
      "pages_per_visit": 10.8646072530248
    },
    {
      "global_rank": 10026,
      "category_rank": 106,
      "domain": "stanby.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6957205.36736939,
      "curr_month_visits": 6957205.36736939,
      "unique_users": 4199286.40641709,
      "pages_per_visit": 3.66016453888547
    },
    {
      "global_rank": 123462,
      "category_rank": 106,
      "domain": "careers.rolls-royce.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 239546.691137132,
      "curr_month_visits": 239546.691137132,
      "unique_users": 122242.241967823,
      "pages_per_visit": 6.81518099929905
    },
    {
      "global_rank": 111324,
      "category_rank": 106,
      "domain": "jobtest.org",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 182494.383259508,
      "curr_month_visits": 182494.383259508,
      "unique_users": 103701.681840868,
      "pages_per_visit": 20.6978416331415
    },
    {
      "global_rank": 10063,
      "category_rank": 107,
      "domain": "jobleads.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 7094877.16569435,
      "curr_month_visits": 7094877.16569435,
      "unique_users": 3675398.79555508,
      "pages_per_visit": 2.88901845615786
    },
    {
      "global_rank": 113319,
      "category_rank": 107,
      "domain": "fabletwist.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 93643.8087167403,
      "curr_month_visits": 93643.8087167403,
      "unique_users": 61411.3517723644,
      "pages_per_visit": 25.6675674495692
    },
    {
      "global_rank": 123931,
      "category_rank": 107,
      "domain": "bwjf.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 446479.786050894,
      "curr_month_visits": 446479.786050894,
      "unique_users": 305730.815496242,
      "pages_per_visit": 2.51096109366533
    },
    {
      "global_rank": 115953,
      "category_rank": 108,
      "domain": "jobs.usps.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 229820.797197797,
      "curr_month_visits": 229820.797197797,
      "unique_users": 140186.39212981,
      "pages_per_visit": 5.04243539668694
    },
    {
      "global_rank": 10066,
      "category_rank": 108,
      "domain": "totaljobs.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6079473.05596365,
      "curr_month_visits": 6079473.05596365,
      "unique_users": 2303599.08404963,
      "pages_per_visit": 4.80185923674226
    },
    {
      "global_rank": 126947,
      "category_rank": 108,
      "domain": "buk.mx",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 455370.977365359,
      "curr_month_visits": 455370.977365359,
      "unique_users": 240674.691108042,
      "pages_per_visit": 1.7762893508044
    },
    {
      "global_rank": 116216,
      "category_rank": 109,
      "domain": "quicksavesearch.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 733274.745762627,
      "curr_month_visits": 733274.745762627,
      "unique_users": 562916.194862362,
      "pages_per_visit": 2.39049242089556
    },
    {
      "global_rank": 10252,
      "category_rank": 109,
      "domain": "itsme.services",
      "category": "Jobs_and_Career",
      "avg_month_visits": 7901658.80522586,
      "curr_month_visits": 7901658.80522586,
      "unique_users": 2674294.25034734,
      "pages_per_visit": 2.37288191408622
    },
    {
      "global_rank": 127385,
      "category_rank": 109,
      "domain": "graduatesfirst.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 442892.366796789,
      "curr_month_visits": 442892.366796789,
      "unique_users": 208518.2994563,
      "pages_per_visit": 3.69068194306997
    },
    {
      "global_rank": 127540,
      "category_rank": 110,
      "domain": "job.bankcomm.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 493214.525853801,
      "curr_month_visits": 493214.525853801,
      "unique_users": 83562.682774457,
      "pages_per_visit": 4.2525427055815
    },
    {
      "global_rank": 10338,
      "category_rank": 110,
      "domain": "1111.com.tw",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5475124.0091732,
      "curr_month_visits": 5475124.0091732,
      "unique_users": 1892269.31557354,
      "pages_per_visit": 4.88168146018992
    },
    {
      "global_rank": 116256,
      "category_rank": 110,
      "domain": "elevancehealth.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 396941.815608741,
      "curr_month_visits": 396941.815608741,
      "unique_users": 132986.381827317,
      "pages_per_visit": 5.43240736353691
    },
    {
      "global_rank": 116960,
      "category_rank": 111,
      "domain": "h1bgrader.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 311471.904921854,
      "curr_month_visits": 311471.904921854,
      "unique_users": 161789.048880032,
      "pages_per_visit": 5.05110023137167
    },
    {
      "global_rank": 10352,
      "category_rank": 111,
      "domain": "seek.co.nz",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5178714.32183843,
      "curr_month_visits": 5178714.32183843,
      "unique_users": 1294881.25473216,
      "pages_per_visit": 5.90999372773923
    },
    {
      "global_rank": 127999,
      "category_rank": 111,
      "domain": "careers.marshmclennan.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 445875.689905006,
      "curr_month_visits": 445875.689905006,
      "unique_users": 241601.553077057,
      "pages_per_visit": 4.46760001342195
    },
    {
      "global_rank": 10387,
      "category_rank": 112,
      "domain": "profesia.sk",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5399798.5578315,
      "curr_month_visits": 5399798.5578315,
      "unique_users": 1032298.22097389,
      "pages_per_visit": 6.16462553323753
    },
    {
      "global_rank": 128065,
      "category_rank": 112,
      "domain": "careers.truist.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 529771.023919951,
      "curr_month_visits": 529771.023919951,
      "unique_users": 178391.165917038,
      "pages_per_visit": 4.58411637010363
    },
    {
      "global_rank": 118475,
      "category_rank": 112,
      "domain": "sunnyoptical.cn",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 426236.393324229,
      "curr_month_visits": 426236.393324229,
      "unique_users": 18335.7207469843,
      "pages_per_visit": 7.34423986230402
    },
    {
      "global_rank": 118710,
      "category_rank": 113,
      "domain": "jobs.workable.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 452423.53399885,
      "curr_month_visits": 452423.53399885,
      "unique_users": 181047.935477878,
      "pages_per_visit": 2.97022362251077
    },
    {
      "global_rank": 128712,
      "category_rank": 113,
      "domain": "dixcoverhub.com.ng",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 549982.19602202,
      "curr_month_visits": 549982.19602202,
      "unique_users": 155188.072991046,
      "pages_per_visit": 2.48608957773534
    },
    {
      "global_rank": 10560,
      "category_rank": 113,
      "domain": "workday.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5073035.90416335,
      "curr_month_visits": 5073035.90416335,
      "unique_users": 2435602.18517987,
      "pages_per_visit": 6.88922083831601
    },
    {
      "global_rank": 120053,
      "category_rank": 114,
      "domain": "barogo.io",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 227830.999079331,
      "curr_month_visits": 227830.999079331,
      "unique_users": 46602.2099941742,
      "pages_per_visit": 7.9757144904001
    },
    {
      "global_rank": 10708,
      "category_rank": 114,
      "domain": "51job.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4710805.42369179,
      "curr_month_visits": 4710805.42369179,
      "unique_users": 1527465.87719743,
      "pages_per_visit": 9.30308703653104
    },
    {
      "global_rank": 129692,
      "category_rank": 114,
      "domain": "friend.work",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 299532.769361176,
      "curr_month_visits": 299532.769361176,
      "unique_users": 71943.0234346966,
      "pages_per_visit": 13.5341278302208
    },
    {
      "global_rank": 131144,
      "category_rank": 115,
      "domain": "beamery.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 497286.884937957,
      "curr_month_visits": 497286.884937957,
      "unique_users": 299943.715234287,
      "pages_per_visit": 2.5171703029519
    },
    {
      "global_rank": 10837,
      "category_rank": 115,
      "domain": "shine.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5356684.41017559,
      "curr_month_visits": 5356684.41017559,
      "unique_users": 2770163.01753037,
      "pages_per_visit": 3.82688516318977
    },
    {
      "global_rank": 122534,
      "category_rank": 115,
      "domain": "track718.eu",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 537970.202305503,
      "curr_month_visits": 537970.202305503,
      "unique_users": 110981.744079275,
      "pages_per_visit": 1.81052817210935
    },
    {
      "global_rank": 122808,
      "category_rank": 116,
      "domain": "brennanco.ie",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 405711.956339995,
      "curr_month_visits": 405711.956339995,
      "unique_users": 274158.794656477,
      "pages_per_visit": 1.13176526771092
    },
    {
      "global_rank": 133424,
      "category_rank": 116,
      "domain": "careers.bain.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 352939.398578342,
      "curr_month_visits": 352939.398578342,
      "unique_users": 132120.034403107,
      "pages_per_visit": 5.67408187853459
    },
    {
      "global_rank": 10844,
      "category_rank": 116,
      "domain": "topcv.vn",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5681771.32463608,
      "curr_month_visits": 5681771.32463608,
      "unique_users": 1926978.12244092,
      "pages_per_visit": 5.64779025435166
    },
    {
      "global_rank": 123328,
      "category_rank": 117,
      "domain": "globalization-partners.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 508800.568404675,
      "curr_month_visits": 508800.568404675,
      "unique_users": 303304.354106147,
      "pages_per_visit": 1.94229085754815
    },
    {
      "global_rank": 10908,
      "category_rank": 117,
      "domain": "jobthai.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5142360.6296694,
      "curr_month_visits": 5142360.6296694,
      "unique_users": 1228834.08423187,
      "pages_per_visit": 6.96639537505656
    },
    {
      "global_rank": 134799,
      "category_rank": 117,
      "domain": "taasuka.gov.il",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 373896.035624556,
      "curr_month_visits": 373896.035624556,
      "unique_users": 133240.051693416,
      "pages_per_visit": 3.44394270741019
    },
    {
      "global_rank": 136014,
      "category_rank": 118,
      "domain": "kinobi.asia",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 194493.965330795,
      "curr_month_visits": 194493.965330795,
      "unique_users": 90786.2751471781,
      "pages_per_visit": 8.79899782733952
    },
    {
      "global_rank": 123839,
      "category_rank": 118,
      "domain": "aimmo.ai",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 107073.908097581,
      "curr_month_visits": 107073.908097581,
      "unique_users": 18218.1824931096,
      "pages_per_visit": 29.5340953831582
    },
    {
      "global_rank": 10992,
      "category_rank": 118,
      "domain": "tal.net",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5734350.11445746,
      "curr_month_visits": 5734350.11445746,
      "unique_users": 1815338.81942137,
      "pages_per_visit": 5.93407870660205
    },
    {
      "global_rank": 136840,
      "category_rank": 119,
      "domain": "kenvue.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 298302.561690163,
      "curr_month_visits": 298302.561690163,
      "unique_users": 130376.41140198,
      "pages_per_visit": 4.67032271813046
    },
    {
      "global_rank": 124711,
      "category_rank": 119,
      "domain": "pandarank.net",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 357067.274273099,
      "curr_month_visits": 357067.274273099,
      "unique_users": 93258.8870734905,
      "pages_per_visit": 3.95346398891305
    },
    {
      "global_rank": 11033,
      "category_rank": 119,
      "domain": "seek.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5828555.70791844,
      "curr_month_visits": 5828555.70791844,
      "unique_users": 3386382.18399645,
      "pages_per_visit": 3.37775429920054
    },
    {
      "global_rank": 11122,
      "category_rank": 120,
      "domain": "careers.walmart.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6000760.54560573,
      "curr_month_visits": 6000760.54560573,
      "unique_users": 2720739.95801086,
      "pages_per_visit": 3.52976446416841
    },
    {
      "global_rank": 137355,
      "category_rank": 120,
      "domain": "jobs.swagapp.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 397365.538241377,
      "curr_month_visits": 397365.538241377,
      "unique_users": 205683.323462462,
      "pages_per_visit": 3.45139415890951
    },
    {
      "global_rank": 125044,
      "category_rank": 120,
      "domain": "securex.be",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 369775.679555425,
      "curr_month_visits": 369775.679555425,
      "unique_users": 223749.512987908,
      "pages_per_visit": 3.17891699676485
    },
    {
      "global_rank": 11130,
      "category_rank": 121,
      "domain": "en-japan.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5600862.59311318,
      "curr_month_visits": 5600862.59311318,
      "unique_users": 1726757.82154564,
      "pages_per_visit": 5.21469878293226
    },
    {
      "global_rank": 140005,
      "category_rank": 121,
      "domain": "the-trackr.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 442103.941243247,
      "curr_month_visits": 442103.941243247,
      "unique_users": 85664.4139637894,
      "pages_per_visit": 2.00610654745266
    },
    {
      "global_rank": 142009,
      "category_rank": 122,
      "domain": "raterproject.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 214906.346658243,
      "curr_month_visits": 214906.346658243,
      "unique_users": 19729.2272590382,
      "pages_per_visit": 11.1255667418985
    },
    {
      "global_rank": 11141,
      "category_rank": 122,
      "domain": "axol.jp",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3715684.24349767,
      "curr_month_visits": 3715684.24349767,
      "unique_users": 758085.769035918,
      "pages_per_visit": 10.0751577451534
    },
    {
      "global_rank": 126299,
      "category_rank": 122,
      "domain": "newseeming.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 581537.22629874,
      "curr_month_visits": 581537.22629874,
      "unique_users": 155091.163917776,
      "pages_per_visit": 1.78097201478905
    },
    {
      "global_rank": 126601,
      "category_rank": 123,
      "domain": "weam.ai",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 393605.492502202,
      "curr_month_visits": 393605.492502202,
      "unique_users": 216418.188660093,
      "pages_per_visit": 1.60364812711716
    },
    {
      "global_rank": 142937,
      "category_rank": 123,
      "domain": "huice.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 243017.51177863,
      "curr_month_visits": 243017.51177863,
      "unique_users": 21255.4553566598,
      "pages_per_visit": 8.26320081588797
    },
    {
      "global_rank": 11300,
      "category_rank": 123,
      "domain": "kusuguru.co.jp",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5834544.86923951,
      "curr_month_visits": 5834544.86923951,
      "unique_users": 2968375.98411735,
      "pages_per_visit": 2.53097192050821
    },
    {
      "global_rank": 11301,
      "category_rank": 124,
      "domain": "hrsd.gov.sa",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5611354.04570846,
      "curr_month_visits": 5611354.04570846,
      "unique_users": 2418683.91340955,
      "pages_per_visit": 3.97733130812447
    },
    {
      "global_rank": 127104,
      "category_rank": 124,
      "domain": "goodreturn.xyz",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 173316.49564238,
      "curr_month_visits": 173316.49564238,
      "unique_users": 69091.8073622388,
      "pages_per_visit": 14.1538115072126
    },
    {
      "global_rank": 144423,
      "category_rank": 124,
      "domain": "imocha.io",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 268258.234236087,
      "curr_month_visits": 268258.234236087,
      "unique_users": 125379.466091965,
      "pages_per_visit": 8.35025389193181
    },
    {
      "global_rank": 129668,
      "category_rank": 125,
      "domain": "saturncloud.io",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 620096.455629985,
      "curr_month_visits": 620096.455629985,
      "unique_users": 376091.149176163,
      "pages_per_visit": 1.31561477629759
    },
    {
      "global_rank": 146895,
      "category_rank": 125,
      "domain": "cloudwifi.de",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 371361.632903779,
      "curr_month_visits": 371361.632903779,
      "unique_users": 194895.358767475,
      "pages_per_visit": 1.96177861907412
    },
    {
      "global_rank": 11320,
      "category_rank": 125,
      "domain": "joblab.ru",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4756068.3205888,
      "curr_month_visits": 4756068.3205888,
      "unique_users": 1405192.67749239,
      "pages_per_visit": 5.59886694397661
    },
    {
      "global_rank": 129904,
      "category_rank": 126,
      "domain": "careers.rivian.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 443995.385131122,
      "curr_month_visits": 443995.385131122,
      "unique_users": 224967.882544723,
      "pages_per_visit": 2.9502424710288
    },
    {
      "global_rank": 147258,
      "category_rank": 126,
      "domain": "shixiseng.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 218006.125851135,
      "curr_month_visits": 218006.125851135,
      "unique_users": 88206.6012159698,
      "pages_per_visit": 6.51160919230629
    },
    {
      "global_rank": 11420,
      "category_rank": 126,
      "domain": "jobsora.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4748336.04188086,
      "curr_month_visits": 4748336.04188086,
      "unique_users": 2453363.64119629,
      "pages_per_visit": 3.41638331784586
    },
    {
      "global_rank": 11510,
      "category_rank": 127,
      "domain": "onlinejobs.ph",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4483222.94367672,
      "curr_month_visits": 4483222.94367672,
      "unique_users": 669880.243467204,
      "pages_per_visit": 8.66984982870092
    },
    {
      "global_rank": 149006,
      "category_rank": 127,
      "domain": "skywalker.gr",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 269783.028105549,
      "curr_month_visits": 269783.028105549,
      "unique_users": 116264.640400878,
      "pages_per_visit": 4.58486793735648
    },
    {
      "global_rank": 130051,
      "category_rank": 127,
      "domain": "neftegaz.ru",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 529299.636328705,
      "curr_month_visits": 529299.636328705,
      "unique_users": 342095.648599699,
      "pages_per_visit": 1.56973831153085
    },
    {
      "global_rank": 130178,
      "category_rank": 128,
      "domain": "panpowered.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 356622.613164621,
      "curr_month_visits": 356622.613164621,
      "unique_users": 129596.555087696,
      "pages_per_visit": 3.95936296967173
    },
    {
      "global_rank": 11666,
      "category_rank": 128,
      "domain": "liepin.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4300577.08728805,
      "curr_month_visits": 4300577.08728805,
      "unique_users": 1365450.88303921,
      "pages_per_visit": 8.95187865770646
    },
    {
      "global_rank": 149070,
      "category_rank": 128,
      "domain": "ciphr-irecruit.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 313393.087361967,
      "curr_month_visits": 313393.087361967,
      "unique_users": 140262.955889869,
      "pages_per_visit": 4.01428510453096
    },
    {
      "global_rank": 149977,
      "category_rank": 129,
      "domain": "crpcg.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 387233.880982305,
      "curr_month_visits": 387233.880982305,
      "unique_users": 24021.1746478988,
      "pages_per_visit": 4.18225376444183
    },
    {
      "global_rank": 11798,
      "category_rank": 129,
      "domain": "net-empregos.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3436340.44921019,
      "curr_month_visits": 3436340.44921019,
      "unique_users": 922809.870209176,
      "pages_per_visit": 8.73424078250743
    },
    {
      "global_rank": 130239,
      "category_rank": 129,
      "domain": "kuaishou.cn",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 307937.606883561,
      "curr_month_visits": 307937.606883561,
      "unique_users": 127638.636213649,
      "pages_per_visit": 9.72998280579756
    },
    {
      "global_rank": 131713,
      "category_rank": 130,
      "domain": "food.articlepost.net",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 609752.093536739,
      "curr_month_visits": 609752.093536739,
      "unique_users": 280471.38666867,
      "pages_per_visit": 2.22905251284406
    },
    {
      "global_rank": 11840,
      "category_rank": 130,
      "domain": "jobs.nhs.uk",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4039376.26677744,
      "curr_month_visits": 4039376.26677744,
      "unique_users": 1396394.37287677,
      "pages_per_visit": 7.22113572879676
    },
    {
      "global_rank": 150361,
      "category_rank": 130,
      "domain": "delucru.md",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 224440.552786672,
      "curr_month_visits": 224440.552786672,
      "unique_users": 79408.4396357821,
      "pages_per_visit": 6.48312173161986
    },
    {
      "global_rank": 11927,
      "category_rank": 131,
      "domain": "crowdgen.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5506839.91730274,
      "curr_month_visits": 5506839.91730274,
      "unique_users": 953870.611275667,
      "pages_per_visit": 5.39273624557945
    },
    {
      "global_rank": 132231,
      "category_rank": 131,
      "domain": "careers.unilever.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 422728.027853035,
      "curr_month_visits": 422728.027853035,
      "unique_users": 214802.302800627,
      "pages_per_visit": 2.66721157230608
    },
    {
      "global_rank": 150941,
      "category_rank": 131,
      "domain": "inflightcloud.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 120036.476221435,
      "curr_month_visits": 120036.476221435,
      "unique_users": 68963.5653028381,
      "pages_per_visit": 7.17214943121101
    },
    {
      "global_rank": 11930,
      "category_rank": 132,
      "domain": "en-hyouban.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6780205.81661254,
      "curr_month_visits": 6780205.81661254,
      "unique_users": 3867541.12201289,
      "pages_per_visit": 2.3676691718851
    },
    {
      "global_rank": 133091,
      "category_rank": 132,
      "domain": "careers.usbank.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 394959.365818017,
      "curr_month_visits": 394959.365818017,
      "unique_users": 230099.410125005,
      "pages_per_visit": 5.02840822871201
    },
    {
      "global_rank": 151152,
      "category_rank": 132,
      "domain": "republik.gg",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 198491.226013223,
      "curr_month_visits": 198491.226013223,
      "unique_users": 73028.6762536441,
      "pages_per_visit": 3.37055694493901
    },
    {
      "global_rank": 12011,
      "category_rank": 133,
      "domain": "hrmos.co",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3368593.53644957,
      "curr_month_visits": 3368593.53644957,
      "unique_users": 1008316.49985688,
      "pages_per_visit": 12.9171228632103
    },
    {
      "global_rank": 151753,
      "category_rank": 133,
      "domain": "tupu360.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 254712.58023869,
      "curr_month_visits": 254712.58023869,
      "unique_users": 123462.255958753,
      "pages_per_visit": 3.93128470005507
    },
    {
      "global_rank": 133165,
      "category_rank": 133,
      "domain": "careers.caterpillar.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 394037.346088231,
      "curr_month_visits": 394037.346088231,
      "unique_users": 223426.037654856,
      "pages_per_visit": 3.10010656605944
    },
    {
      "global_rank": 133207,
      "category_rank": 134,
      "domain": "pmicareers.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 205184.122886967,
      "curr_month_visits": 205184.122886967,
      "unique_users": 97152.5738015129,
      "pages_per_visit": 3.9070166534309
    },
    {
      "global_rank": 12079,
      "category_rank": 134,
      "domain": "reed.co.uk",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4609080.27229534,
      "curr_month_visits": 4609080.27229534,
      "unique_users": 1972922.42713021,
      "pages_per_visit": 5.9886664543019
    },
    {
      "global_rank": 153542,
      "category_rank": 134,
      "domain": "cipd.org",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 367867.900338325,
      "curr_month_visits": 367867.900338325,
      "unique_users": 179985.223604452,
      "pages_per_visit": 2.40037662636085
    },
    {
      "global_rank": 154387,
      "category_rank": 135,
      "domain": "gofram.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 282491.471470746,
      "curr_month_visits": 282491.471470746,
      "unique_users": 29490.9332314181,
      "pages_per_visit": 3.90572611118385
    },
    {
      "global_rank": 12086,
      "category_rank": 135,
      "domain": "ssc.gov.in",
      "category": "Jobs_and_Career",
      "avg_month_visits": 11106893.7111254,
      "curr_month_visits": 11106893.7111254,
      "unique_users": 4149118.04585679,
      "pages_per_visit": 4.5390869818237
    },
    {
      "global_rank": 133313,
      "category_rank": 135,
      "domain": "job.byd.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 444533.82366692,
      "curr_month_visits": 444533.82366692,
      "unique_users": 154416.00572052,
      "pages_per_visit": 4.95300839038196
    },
    {
      "global_rank": 155025,
      "category_rank": 136,
      "domain": "career.inspur.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 429908.212187833,
      "curr_month_visits": 429908.212187833,
      "unique_users": 227220.773742155,
      "pages_per_visit": 1.1139760826919
    },
    {
      "global_rank": 134899,
      "category_rank": 136,
      "domain": "dreambound.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 288245.92933483,
      "curr_month_visits": 288245.92933483,
      "unique_users": 206734.43719313,
      "pages_per_visit": 3.46172198886477
    },
    {
      "global_rank": 136781,
      "category_rank": 137,
      "domain": "pyjamahr.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 384001.17366832,
      "curr_month_visits": 384001.17366832,
      "unique_users": 211895.995860461,
      "pages_per_visit": 3.72996491867014
    },
    {
      "global_rank": 12210,
      "category_rank": 137,
      "domain": "unstop.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6500229.5224591,
      "curr_month_visits": 6500229.5224591,
      "unique_users": 2247532.08038746,
      "pages_per_visit": 3.81511133490078
    },
    {
      "global_rank": 155746,
      "category_rank": 137,
      "domain": "bandana.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 184720.331042639,
      "curr_month_visits": 184720.331042639,
      "unique_users": 79068.3230075799,
      "pages_per_visit": 4.55147819211095
    },
    {
      "global_rank": 12219,
      "category_rank": 138,
      "domain": "vagas.sc",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2983090.36255921,
      "curr_month_visits": 2983090.36255921,
      "unique_users": 487556.933354837,
      "pages_per_visit": 22.6456706551175
    },
    {
      "global_rank": 155959,
      "category_rank": 138,
      "domain": "mikmak.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 971618.256652464,
      "curr_month_visits": 971618.256652464,
      "unique_users": 728337.274796155,
      "pages_per_visit": 1.39020889837894
    },
    {
      "global_rank": 137866,
      "category_rank": 138,
      "domain": "szzhdj.gov.cn",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 319910.460625885,
      "curr_month_visits": 319910.460625885,
      "unique_users": 123083.35331602,
      "pages_per_visit": 5.27487083534029
    },
    {
      "global_rank": 138981,
      "category_rank": 139,
      "domain": "polytechnicibadan.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 261313.833599941,
      "curr_month_visits": 261313.833599941,
      "unique_users": 42279.8566097615,
      "pages_per_visit": 9.48510207005931
    },
    {
      "global_rank": 156143,
      "category_rank": 139,
      "domain": "ambertrack.global",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 307592.09824454,
      "curr_month_visits": 307592.09824454,
      "unique_users": 97814.2736593153,
      "pages_per_visit": 6.58193958362262
    },
    {
      "global_rank": 12295,
      "category_rank": 139,
      "domain": "ashbyhq.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5995556.77335938,
      "curr_month_visits": 5995556.77335938,
      "unique_users": 2652222.88795922,
      "pages_per_visit": 2.81534765178418
    },
    {
      "global_rank": 12336,
      "category_rank": 140,
      "domain": "job.myjobhelper.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6849870.92625657,
      "curr_month_visits": 6849870.92625657,
      "unique_users": 2090004.05549838,
      "pages_per_visit": 2.2708641014513
    },
    {
      "global_rank": 140865,
      "category_rank": 140,
      "domain": "jadiasn.id",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 919902.036380809,
      "curr_month_visits": 919902.036380809,
      "unique_users": 493209.942195451,
      "pages_per_visit": 3.15250939220415
    },
    {
      "global_rank": 156743,
      "category_rank": 140,
      "domain": "soulhq.ai",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 421148.62615193,
      "curr_month_visits": 421148.62615193,
      "unique_users": 162885.657344638,
      "pages_per_visit": 4.14890971351034
    },
    {
      "global_rank": 140891,
      "category_rank": 141,
      "domain": "citehr.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 399943.962280812,
      "curr_month_visits": 399943.962280812,
      "unique_users": 275803.225936803,
      "pages_per_visit": 2.29902009895822
    },
    {
      "global_rank": 12352,
      "category_rank": 141,
      "domain": "shopping.bookoff.co.jp",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4651822.79000193,
      "curr_month_visits": 4651822.79000193,
      "unique_users": 1757117.74813434,
      "pages_per_visit": 5.01251500008677
    },
    {
      "global_rank": 158127,
      "category_rank": 141,
      "domain": "climatebase.org",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 315262.341891107,
      "curr_month_visits": 315262.341891107,
      "unique_users": 109296.873896733,
      "pages_per_visit": 4.53597957566804
    },
    {
      "global_rank": 12429,
      "category_rank": 142,
      "domain": "occ.com.mx",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4520607.2586157,
      "curr_month_visits": 4520607.2586157,
      "unique_users": 1548582.74544151,
      "pages_per_visit": 5.68055760464446
    },
    {
      "global_rank": 158299,
      "category_rank": 142,
      "domain": "potok.io",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 213487.234649891,
      "curr_month_visits": 213487.234649891,
      "unique_users": 90043.7544714921,
      "pages_per_visit": 8.21040981891676
    },
    {
      "global_rank": 158696,
      "category_rank": 143,
      "domain": "cgpa2percentage.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 403210.521988312,
      "curr_month_visits": 403210.521988312,
      "unique_users": 233207.1205155,
      "pages_per_visit": 2.03608476230171
    },
    {
      "global_rank": 12613,
      "category_rank": 143,
      "domain": "gowork.pl",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6067461.76256107,
      "curr_month_visits": 6067461.76256107,
      "unique_users": 2906142.77938637,
      "pages_per_visit": 2.57316906224046
    },
    {
      "global_rank": 141182,
      "category_rank": 143,
      "domain": "novelmagic.org",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 38033413.6122998,
      "curr_month_visits": 38033413.6122998,
      "unique_users": 2845882.25670243,
      "pages_per_visit": 9.98795071916678
    },
    {
      "global_rank": 158873,
      "category_rank": 144,
      "domain": "jobs.polizei.nrw",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 215670.97960191,
      "curr_month_visits": 215670.97960191,
      "unique_users": 46660.4824529218,
      "pages_per_visit": 6.56223058477675
    },
    {
      "global_rank": 12930,
      "category_rank": 144,
      "domain": "grupoboticario.com.br",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4407276.43132797,
      "curr_month_visits": 4407276.43132797,
      "unique_users": 2030781.78260487,
      "pages_per_visit": 3.94757412468975
    },
    {
      "global_rank": 141478,
      "category_rank": 144,
      "domain": "stepful.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 325112.029389526,
      "curr_month_visits": 325112.029389526,
      "unique_users": 146264.86736045,
      "pages_per_visit": 4.83795774360954
    },
    {
      "global_rank": 13009,
      "category_rank": 145,
      "domain": "money.dailyhunt.in",
      "category": "Jobs_and_Career",
      "avg_month_visits": 8679497.0087838,
      "curr_month_visits": 8679497.0087838,
      "unique_users": 3729284.84579093,
      "pages_per_visit": 1.23420729898946
    },
    {
      "global_rank": 159417,
      "category_rank": 145,
      "domain": "talent-next.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 298748.415237372,
      "curr_month_visits": 298748.415237372,
      "unique_users": 110332.920087451,
      "pages_per_visit": 4.31178710296761
    },
    {
      "global_rank": 141956,
      "category_rank": 145,
      "domain": "arwrk.net",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 380858.615521754,
      "curr_month_visits": 380858.615521754,
      "unique_users": 198019.449013681,
      "pages_per_visit": 2.10116125157793
    },
    {
      "global_rank": 160521,
      "category_rank": 146,
      "domain": "careers.honda.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 261963.239603275,
      "curr_month_visits": 261963.239603275,
      "unique_users": 154119.020384726,
      "pages_per_visit": 4.00677867224332
    },
    {
      "global_rank": 142467,
      "category_rank": 146,
      "domain": "919-system.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 133597.221950762,
      "curr_month_visits": 133597.221950762,
      "unique_users": 3084.01888096637,
      "pages_per_visit": 44.5745928922315
    },
    {
      "global_rank": 13083,
      "category_rank": 146,
      "domain": "careerbuilder.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5355363.63251813,
      "curr_month_visits": 5355363.63251813,
      "unique_users": 2672088.776032,
      "pages_per_visit": 3.8516561256839
    },
    {
      "global_rank": 13178,
      "category_rank": 147,
      "domain": "work.go.kr",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3425243.22242915,
      "curr_month_visits": 3425243.22242915,
      "unique_users": 940645.40107173,
      "pages_per_visit": 9.44984844545322
    },
    {
      "global_rank": 160631,
      "category_rank": 147,
      "domain": "landeed.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 268322.239434198,
      "curr_month_visits": 268322.239434198,
      "unique_users": 183296.511240934,
      "pages_per_visit": 1.92791459425009
    },
    {
      "global_rank": 143335,
      "category_rank": 147,
      "domain": "vacancymitra.org",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 479744.358632053,
      "curr_month_visits": 479744.358632053,
      "unique_users": 200580.562762227,
      "pages_per_visit": 1.74690589122967
    },
    {
      "global_rank": 161161,
      "category_rank": 148,
      "domain": "tnpnsut.in",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 394898.572333896,
      "curr_month_visits": 394898.572333896,
      "unique_users": 34371.8096980186,
      "pages_per_visit": 3.01338636524714
    },
    {
      "global_rank": 146430,
      "category_rank": 148,
      "domain": "onewo.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 276475.772601159,
      "curr_month_visits": 276475.772601159,
      "unique_users": 39432.3689456521,
      "pages_per_visit": 9.17912414264829
    },
    {
      "global_rank": 13200,
      "category_rank": 148,
      "domain": "flymehighs.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3068597.38258543,
      "curr_month_visits": 3068597.38258543,
      "unique_users": 1941195.29018579,
      "pages_per_visit": 2.3475686663759
    },
    {
      "global_rank": 13322,
      "category_rank": 149,
      "domain": "higherincomejobs.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4520657.63288693,
      "curr_month_visits": 4520657.63288693,
      "unique_users": 2526312.55655848,
      "pages_per_visit": 4.38625727302518
    },
    {
      "global_rank": 161189,
      "category_rank": 149,
      "domain": "jobs.rutgers.edu",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 168926.154945053,
      "curr_month_visits": 168926.154945053,
      "unique_users": 67366.7987845607,
      "pages_per_visit": 7.6347540233492
    },
    {
      "global_rank": 147490,
      "category_rank": 149,
      "domain": "jobs.gusto.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 366494.756039196,
      "curr_month_visits": 366494.756039196,
      "unique_users": 247820.162295881,
      "pages_per_visit": 2.53591781795909
    },
    {
      "global_rank": 148100,
      "category_rank": 150,
      "domain": "mssmiv.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 120782.214507206,
      "curr_month_visits": 120782.214507206,
      "unique_users": 31794.8307543748,
      "pages_per_visit": 9.73307827678491
    },
    {
      "global_rank": 161205,
      "category_rank": 150,
      "domain": "careers.gov.sg",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 242607.405702619,
      "curr_month_visits": 242607.405702619,
      "unique_users": 87538.6979414846,
      "pages_per_visit": 4.27607764392934
    },
    {
      "global_rank": 13372,
      "category_rank": 150,
      "domain": "jobvite.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4949959.76845257,
      "curr_month_visits": 4949959.76845257,
      "unique_users": 2777793.62230959,
      "pages_per_visit": 3.7626331406028
    },
    {
      "global_rank": 13418,
      "category_rank": 151,
      "domain": "kununu.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5181230.08366531,
      "curr_month_visits": 5181230.08366531,
      "unique_users": 2844402.65494785,
      "pages_per_visit": 2.68305894406833
    },
    {
      "global_rank": 148634,
      "category_rank": 151,
      "domain": "szzgh.org",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 371436.017465781,
      "curr_month_visits": 371436.017465781,
      "unique_users": 53382.0706619235,
      "pages_per_visit": 6.33531104874641
    },
    {
      "global_rank": 161339,
      "category_rank": 151,
      "domain": "rafael.co.il",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 218882.521327753,
      "curr_month_visits": 218882.521327753,
      "unique_users": 119296.810609246,
      "pages_per_visit": 3.99131734128952
    },
    {
      "global_rank": 13443,
      "category_rank": 152,
      "domain": "alba.co.kr",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3181687.59466955,
      "curr_month_visits": 3181687.59466955,
      "unique_users": 713060.744203177,
      "pages_per_visit": 9.04008371912217
    },
    {
      "global_rank": 161705,
      "category_rank": 152,
      "domain": "jobs.virginia.gov",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 469765.652004998,
      "curr_month_visits": 469765.652004998,
      "unique_users": 122294.352067022,
      "pages_per_visit": 2.43397575882284
    },
    {
      "global_rank": 149362,
      "category_rank": 152,
      "domain": "nafis.gov.ae",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 223903.051360986,
      "curr_month_visits": 223903.051360986,
      "unique_users": 83844.9363337364,
      "pages_per_visit": 5.52968736651051
    },
    {
      "global_rank": 150981,
      "category_rank": 153,
      "domain": "careers.mars.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 343702.216153635,
      "curr_month_visits": 343702.216153635,
      "unique_users": 174209.218629607,
      "pages_per_visit": 2.56916681946439
    },
    {
      "global_rank": 13596,
      "category_rank": 153,
      "domain": "naukrigulf.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3955359.36625431,
      "curr_month_visits": 3955359.36625431,
      "unique_users": 1675190.82436236,
      "pages_per_visit": 5.40001266063095
    },
    {
      "global_rank": 161957,
      "category_rank": 153,
      "domain": "cnnp.com.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 217385.896878556,
      "curr_month_visits": 217385.896878556,
      "unique_users": 35291.931579578,
      "pages_per_visit": 7.86713659932127
    },
    {
      "global_rank": 151342,
      "category_rank": 154,
      "domain": "e-xecutive.ru",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 356892.878669949,
      "curr_month_visits": 356892.878669949,
      "unique_users": 151039.251965991,
      "pages_per_visit": 2.98758619060411
    },
    {
      "global_rank": 162620,
      "category_rank": 154,
      "domain": "optiver.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 356870.151014613,
      "curr_month_visits": 356870.151014613,
      "unique_users": 171874.598852721,
      "pages_per_visit": 3.18448415055283
    },
    {
      "global_rank": 13853,
      "category_rank": 154,
      "domain": "italent.cn",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2868634.38361635,
      "curr_month_visits": 2868634.38361635,
      "unique_users": 455112.662487659,
      "pages_per_visit": 12.7046309977089
    },
    {
      "global_rank": 13934,
      "category_rank": 155,
      "domain": "tosspayments.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4532387.81190046,
      "curr_month_visits": 4532387.81190046,
      "unique_users": 2750929.29583485,
      "pages_per_visit": 3.17817075123425
    },
    {
      "global_rank": 162899,
      "category_rank": 155,
      "domain": "wintalent.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 337683.491496886,
      "curr_month_visits": 337683.491496886,
      "unique_users": 132828.080758761,
      "pages_per_visit": 4.45580412792493
    },
    {
      "global_rank": 153306,
      "category_rank": 155,
      "domain": "osmind.org",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 116106.036620526,
      "curr_month_visits": 116106.036620526,
      "unique_users": 28597.6743695626,
      "pages_per_visit": 19.8992600856596
    },
    {
      "global_rank": 153801,
      "category_rank": 156,
      "domain": "interviewquery.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 355616.832096176,
      "curr_month_visits": 355616.832096176,
      "unique_users": 171736.957514855,
      "pages_per_visit": 2.82320707102335
    },
    {
      "global_rank": 14035,
      "category_rank": 156,
      "domain": "jobplanet.co.kr",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3761990.95055852,
      "curr_month_visits": 3761990.95055852,
      "unique_users": 1552596.8546221,
      "pages_per_visit": 4.80597337846898
    },
    {
      "global_rank": 163419,
      "category_rank": 156,
      "domain": "peoplehum.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 306842.189580311,
      "curr_month_visits": 306842.189580311,
      "unique_users": 119954.774561702,
      "pages_per_visit": 3.89047427957006
    },
    {
      "global_rank": 14089,
      "category_rank": 157,
      "domain": "glassdoor.ca",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5148380.35571757,
      "curr_month_visits": 5148380.35571757,
      "unique_users": 2207685.30484943,
      "pages_per_visit": 3.34125949870421
    },
    {
      "global_rank": 164339,
      "category_rank": 157,
      "domain": "brilliantgrades.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 324249.382091068,
      "curr_month_visits": 324249.382091068,
      "unique_users": 29668.5662525575,
      "pages_per_visit": 4.90078729923682
    },
    {
      "global_rank": 153849,
      "category_rank": 157,
      "domain": "yallashoot.art",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 270159.807023486,
      "curr_month_visits": 270159.807023486,
      "unique_users": 115494.456117736,
      "pages_per_visit": 2.14970694274881
    },
    {
      "global_rank": 14103,
      "category_rank": 158,
      "domain": "robota.ua",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4557204.01520222,
      "curr_month_visits": 4557204.01520222,
      "unique_users": 1731954.95767879,
      "pages_per_visit": 3.81821979537999
    },
    {
      "global_rank": 165165,
      "category_rank": 158,
      "domain": "4399om.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 142915.093867452,
      "curr_month_visits": 142915.093867452,
      "unique_users": 19237.9784682624,
      "pages_per_visit": 15.7232084087254
    },
    {
      "global_rank": 154493,
      "category_rank": 158,
      "domain": "hoikukyuujin.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 472542.419182649,
      "curr_month_visits": 472542.419182649,
      "unique_users": 325735.080822706,
      "pages_per_visit": 1.60345216638064
    },
    {
      "global_rank": 156148,
      "category_rank": 159,
      "domain": "jobs.adventhealth.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 269572.589999452,
      "curr_month_visits": 269572.589999452,
      "unique_users": 120537.924065759,
      "pages_per_visit": 4.90365756318159
    },
    {
      "global_rank": 14149,
      "category_rank": 159,
      "domain": "jobbank.gc.ca",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3862626.05197617,
      "curr_month_visits": 3862626.05197617,
      "unique_users": 1630700.72985133,
      "pages_per_visit": 6.06677500490002
    },
    {
      "global_rank": 165647,
      "category_rank": 159,
      "domain": "cencora.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 282984.62087459,
      "curr_month_visits": 282984.62087459,
      "unique_users": 106736.205703235,
      "pages_per_visit": 3.34149161684003
    },
    {
      "global_rank": 14163,
      "category_rank": 160,
      "domain": "jobs.bg",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4444973.16046538,
      "curr_month_visits": 4444973.16046538,
      "unique_users": 860693.833693613,
      "pages_per_visit": 5.09840479060266
    },
    {
      "global_rank": 156817,
      "category_rank": 160,
      "domain": "bitrix24site.ru",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 468627.73033859,
      "curr_month_visits": 468627.73033859,
      "unique_users": 226355.879653666,
      "pages_per_visit": 1.87075079083787
    },
    {
      "global_rank": 165782,
      "category_rank": 160,
      "domain": "sterlingcheck.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 304509.750194931,
      "curr_month_visits": 304509.750194931,
      "unique_users": 181592.951122293,
      "pages_per_visit": 2.06336898564322
    },
    {
      "global_rank": 14327,
      "category_rank": 161,
      "domain": "gazetaempregosrj.com.br",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4432190.53481332,
      "curr_month_visits": 4432190.53481332,
      "unique_users": 439663.399133712,
      "pages_per_visit": 6.23528150056739
    },
    {
      "global_rank": 158416,
      "category_rank": 161,
      "domain": "30dayscoding.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 279777.506380325,
      "curr_month_visits": 279777.506380325,
      "unique_users": 116926.890631722,
      "pages_per_visit": 4.49989003454582
    },
    {
      "global_rank": 166431,
      "category_rank": 161,
      "domain": "ey.net",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 205523.701421709,
      "curr_month_visits": 205523.701421709,
      "unique_users": 58207.6231723445,
      "pages_per_visit": 6.39317390446086
    },
    {
      "global_rank": 160862,
      "category_rank": 162,
      "domain": "jobs.gauteng.gov.za",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 301057.039179383,
      "curr_month_visits": 301057.039179383,
      "unique_users": 107429.198668833,
      "pages_per_visit": 8.41425600980406
    },
    {
      "global_rank": 166817,
      "category_rank": 162,
      "domain": "kpmguscareers.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 349814.000014993,
      "curr_month_visits": 349814.000014993,
      "unique_users": 183324.58223287,
      "pages_per_visit": 4.39095811850748
    },
    {
      "global_rank": 14360,
      "category_rank": 162,
      "domain": "flexjobs.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4424847.56644758,
      "curr_month_visits": 4424847.56644758,
      "unique_users": 2594750.8090418,
      "pages_per_visit": 4.28952888826642
    },
    {
      "global_rank": 14372,
      "category_rank": 163,
      "domain": "jobs-ups.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3789950.73422218,
      "curr_month_visits": 3789950.73422218,
      "unique_users": 2139715.56903081,
      "pages_per_visit": 2.81200765791911
    },
    {
      "global_rank": 167755,
      "category_rank": 163,
      "domain": "pymetrics.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 191017.930839799,
      "curr_month_visits": 191017.930839799,
      "unique_users": 95807.8587561044,
      "pages_per_visit": 14.089444991478
    },
    {
      "global_rank": 161520,
      "category_rank": 163,
      "domain": "excel-practice-online.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 326152.163872687,
      "curr_month_visits": 326152.163872687,
      "unique_users": 157571.281970028,
      "pages_per_visit": 2.8804664205018
    },
    {
      "global_rank": 168535,
      "category_rank": 164,
      "domain": "careers.deere.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 202756.29719297,
      "curr_month_visits": 202756.29719297,
      "unique_users": 119401.520168386,
      "pages_per_visit": 5.37534642646852
    },
    {
      "global_rank": 14380,
      "category_rank": 164,
      "domain": "glassdoor.com.br",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5012410.69290248,
      "curr_month_visits": 5012410.69290248,
      "unique_users": 2750147.21976649,
      "pages_per_visit": 2.85814184452772
    },
    {
      "global_rank": 162472,
      "category_rank": 164,
      "domain": "starastrogpt.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 191205.956201651,
      "curr_month_visits": 191205.956201651,
      "unique_users": 93151.2581647609,
      "pages_per_visit": 8.06293454949289
    },
    {
      "global_rank": 168924,
      "category_rank": 165,
      "domain": "jobs.careers.gov.sg",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 116673.52174317,
      "curr_month_visits": 116673.52174317,
      "unique_users": 42446.3002542027,
      "pages_per_visit": 10.0832810729498
    },
    {
      "global_rank": 163665,
      "category_rank": 165,
      "domain": "1tamilmv.yt",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 650546.425967866,
      "curr_month_visits": 650546.425967866,
      "unique_users": 142816.510092764,
      "pages_per_visit": 1.17531313755795
    },
    {
      "global_rank": 14399,
      "category_rank": 165,
      "domain": "myperfectresume.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3238315.13105898,
      "curr_month_visits": 3238315.13105898,
      "unique_users": 1923708.45453038,
      "pages_per_visit": 7.57868851237693
    },
    {
      "global_rank": 14482,
      "category_rank": 166,
      "domain": "dice.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3117388.08626256,
      "curr_month_visits": 3117388.08626256,
      "unique_users": 983595.633622597,
      "pages_per_visit": 9.6027808011908
    },
    {
      "global_rank": 170847,
      "category_rank": 166,
      "domain": "jobget.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 337802.476544348,
      "curr_month_visits": 337802.476544348,
      "unique_users": 215516.808146399,
      "pages_per_visit": 1.81188526342087
    },
    {
      "global_rank": 164088,
      "category_rank": 166,
      "domain": "caroloportunidades.com.br",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 667495.470861862,
      "curr_month_visits": 667495.470861862,
      "unique_users": 206638.886115046,
      "pages_per_visit": 4.49364285575258
    },
    {
      "global_rank": 165731,
      "category_rank": 167,
      "domain": "sweldomo.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 349317.518329941,
      "curr_month_visits": 349317.518329941,
      "unique_users": 39378.7342917572,
      "pages_per_visit": 2.7482050442381
    },
    {
      "global_rank": 14526,
      "category_rank": 167,
      "domain": "jobs.ashbyhq.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5405265.11038924,
      "curr_month_visits": 5405265.11038924,
      "unique_users": 2545088.15214304,
      "pages_per_visit": 2.39525772098889
    },
    {
      "global_rank": 171265,
      "category_rank": 167,
      "domain": "talentlyft.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 352701.981623895,
      "curr_month_visits": 352701.981623895,
      "unique_users": 189295.082202171,
      "pages_per_visit": 2.19246380951572
    },
    {
      "global_rank": 14527,
      "category_rank": 168,
      "domain": "eleman.net",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4435804.09124291,
      "curr_month_visits": 4435804.09124291,
      "unique_users": 1983715.46099961,
      "pages_per_visit": 4.50730704461982
    },
    {
      "global_rank": 171308,
      "category_rank": 168,
      "domain": "careersonair.withgoogle.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 172469.025985107,
      "curr_month_visits": 172469.025985107,
      "unique_users": 89598.4132893247,
      "pages_per_visit": 2.87301420141965
    },
    {
      "global_rank": 167745,
      "category_rank": 168,
      "domain": "skillsfuture.gov.sg",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 237451.200104044,
      "curr_month_visits": 237451.200104044,
      "unique_users": 137380.516885088,
      "pages_per_visit": 2.04367472041241
    },
    {
      "global_rank": 167914,
      "category_rank": 169,
      "domain": "ampol.com.au",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 341610.070387058,
      "curr_month_visits": 341610.070387058,
      "unique_users": 179995.877635259,
      "pages_per_visit": 2.47377995526111
    },
    {
      "global_rank": 171678,
      "category_rank": 169,
      "domain": "careers.icf.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 200654.064242655,
      "curr_month_visits": 200654.064242655,
      "unique_users": 109925.878938049,
      "pages_per_visit": 4.72740679256595
    },
    {
      "global_rank": 14617,
      "category_rank": 169,
      "domain": "resume-now.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2640004.43088424,
      "curr_month_visits": 2640004.43088424,
      "unique_users": 1561376.93010019,
      "pages_per_visit": 9.9320786850994
    },
    {
      "global_rank": 14647,
      "category_rank": 170,
      "domain": "incruit.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4253694.42307131,
      "curr_month_visits": 4253694.42307131,
      "unique_users": 1804372.17998426,
      "pages_per_visit": 4.56270669110488
    },
    {
      "global_rank": 167945,
      "category_rank": 170,
      "domain": "ajourney.academy",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 181055.173040769,
      "curr_month_visits": 181055.173040769,
      "unique_users": 35364.4231075466,
      "pages_per_visit": 11.6044045716772
    },
    {
      "global_rank": 171918,
      "category_rank": 170,
      "domain": "sunac.com.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 273335.638963824,
      "curr_month_visits": 273335.638963824,
      "unique_users": 62461.6755849056,
      "pages_per_visit": 6.0313525804508
    },
    {
      "global_rank": 172064,
      "category_rank": 171,
      "domain": "acmcoder.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 268717.32768433,
      "curr_month_visits": 268717.32768433,
      "unique_users": 105308.085732834,
      "pages_per_visit": 15.6669802753492
    },
    {
      "global_rank": 168151,
      "category_rank": 171,
      "domain": "pornoxo2.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 319286.519419052,
      "curr_month_visits": 319286.519419052,
      "unique_users": 193302.955414156,
      "pages_per_visit": 2.48016893575782
    },
    {
      "global_rank": 14648,
      "category_rank": 171,
      "domain": "cv-library.co.uk",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4263260.28887909,
      "curr_month_visits": 4263260.28887909,
      "unique_users": 1324477.48073933,
      "pages_per_visit": 4.82526218398982
    },
    {
      "global_rank": 169497,
      "category_rank": 172,
      "domain": "careers.tranetechnologies.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 225407.59646414,
      "curr_month_visits": 225407.59646414,
      "unique_users": 129682.934665653,
      "pages_per_visit": 5.27260703683191
    },
    {
      "global_rank": 172978,
      "category_rank": 172,
      "domain": "jobs.vodafone.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 240432.122928654,
      "curr_month_visits": 240432.122928654,
      "unique_users": 138738.33042217,
      "pages_per_visit": 4.39662383464561
    },
    {
      "global_rank": 14691,
      "category_rank": 172,
      "domain": "job.axol.jp",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3191796.22863612,
      "curr_month_visits": 3191796.22863612,
      "unique_users": 725749.882809647,
      "pages_per_visit": 7.18911915277985
    },
    {
      "global_rank": 169995,
      "category_rank": 173,
      "domain": "careerpuck.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 360981.717753792,
      "curr_month_visits": 360981.717753792,
      "unique_users": 214992.986706025,
      "pages_per_visit": 2.23583883735583
    },
    {
      "global_rank": 14798,
      "category_rank": 173,
      "domain": "bdjobs.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3312624.88192611,
      "curr_month_visits": 3312624.88192611,
      "unique_users": 841087.910126593,
      "pages_per_visit": 8.50687209925823
    },
    {
      "global_rank": 173124,
      "category_rank": 173,
      "domain": "careers.essilorluxottica.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 271551.891498618,
      "curr_month_visits": 271551.891498618,
      "unique_users": 138713.092307803,
      "pages_per_visit": 3.44267514961092
    },
    {
      "global_rank": 14838,
      "category_rank": 174,
      "domain": "expertjobmatch.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3981005.96911014,
      "curr_month_visits": 3981005.96911014,
      "unique_users": 1832602.61953863,
      "pages_per_visit": 4.64986402136563
    },
    {
      "global_rank": 170753,
      "category_rank": 174,
      "domain": "shenzhenmc.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 179344.120692421,
      "curr_month_visits": 179344.120692421,
      "unique_users": 45775.8260954699,
      "pages_per_visit": 8.07806920585608
    },
    {
      "global_rank": 173583,
      "category_rank": 174,
      "domain": "linklyhq.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 290572.890263134,
      "curr_month_visits": 290572.890263134,
      "unique_users": 133062.502000796,
      "pages_per_visit": 3.80435607084877
    },
    {
      "global_rank": 170993,
      "category_rank": 175,
      "domain": "interpreterintelligence.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 288871.266289452,
      "curr_month_visits": 288871.266289452,
      "unique_users": 50419.0917190296,
      "pages_per_visit": 3.9427278636217
    },
    {
      "global_rank": 14842,
      "category_rank": 175,
      "domain": "profession.hu",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3582317.37043867,
      "curr_month_visits": 3582317.37043867,
      "unique_users": 1000123.31276556,
      "pages_per_visit": 6.16528943385714
    },
    {
      "global_rank": 174071,
      "category_rank": 175,
      "domain": "amentum.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 270781.458698473,
      "curr_month_visits": 270781.458698473,
      "unique_users": 97283.4288476598,
      "pages_per_visit": 3.81596863818334
    },
    {
      "global_rank": 14982,
      "category_rank": 176,
      "domain": "enhancv.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3736391.53510014,
      "curr_month_visits": 3736391.53510014,
      "unique_users": 2014946.11488802,
      "pages_per_visit": 4.69330896925852
    },
    {
      "global_rank": 170995,
      "category_rank": 176,
      "domain": "dataexpert.io",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 136395.738018495,
      "curr_month_visits": 136395.738018495,
      "unique_users": 67686.5472425364,
      "pages_per_visit": 2.75041593030587
    },
    {
      "global_rank": 174695,
      "category_rank": 176,
      "domain": "goertek.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 185509.223278648,
      "curr_month_visits": 185509.223278648,
      "unique_users": 46000.5463410052,
      "pages_per_visit": 6.1188282240737
    },
    {
      "global_rank": 171859,
      "category_rank": 177,
      "domain": "finansi.bg",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 254868.639478845,
      "curr_month_visits": 254868.639478845,
      "unique_users": 160402.428130829,
      "pages_per_visit": 2.59137101387229
    },
    {
      "global_rank": 175124,
      "category_rank": 177,
      "domain": "hr-director.ru",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 344243.617486287,
      "curr_month_visits": 344243.617486287,
      "unique_users": 227651.718307611,
      "pages_per_visit": 2.02723134211568
    },
    {
      "global_rank": 15015,
      "category_rank": 177,
      "domain": "uwv.nl",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3563332.73572896,
      "curr_month_visits": 3563332.73572896,
      "unique_users": 1428541.64640377,
      "pages_per_visit": 5.95157674277092
    },
    {
      "global_rank": 171889,
      "category_rank": 178,
      "domain": "jobs.wien.gv.at",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 284763.040295022,
      "curr_month_visits": 284763.040295022,
      "unique_users": 82206.1017384496,
      "pages_per_visit": 3.36739115126629
    },
    {
      "global_rank": 15059,
      "category_rank": 178,
      "domain": "personio.de",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3875708.61396335,
      "curr_month_visits": 3875708.61396335,
      "unique_users": 1275421.92829919,
      "pages_per_visit": 4.59069935508512
    },
    {
      "global_rank": 175530,
      "category_rank": 178,
      "domain": "applyoffer.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 341473.71168712,
      "curr_month_visits": 341473.71168712,
      "unique_users": 138251.193982695,
      "pages_per_visit": 9.48508183851626
    },
    {
      "global_rank": 15098,
      "category_rank": 179,
      "domain": "bizreach.jp",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4649571.36894498,
      "curr_month_visits": 4649571.36894498,
      "unique_users": 1704033.56353357,
      "pages_per_visit": 3.35788299252601
    },
    {
      "global_rank": 175714,
      "category_rank": 179,
      "domain": "careers.umich.edu",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 259308.40745238,
      "curr_month_visits": 259308.40745238,
      "unique_users": 105753.755426143,
      "pages_per_visit": 3.42142040341774
    },
    {
      "global_rank": 172066,
      "category_rank": 179,
      "domain": "careers.wawa.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 171388.865496787,
      "curr_month_visits": 171388.865496787,
      "unique_users": 95568.3460371875,
      "pages_per_visit": 3.62135795521822
    },
    {
      "global_rank": 172712,
      "category_rank": 180,
      "domain": "amahahealth.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 312260.777166211,
      "curr_month_visits": 312260.777166211,
      "unique_users": 192086.492151259,
      "pages_per_visit": 4.74139571713298
    },
    {
      "global_rank": 15218,
      "category_rank": 180,
      "domain": "jora.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4334742.08475833,
      "curr_month_visits": 4334742.08475833,
      "unique_users": 1831365.22861169,
      "pages_per_visit": 3.5008858456879
    },
    {
      "global_rank": 175933,
      "category_rank": 180,
      "domain": "baijia.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 212804.555397915,
      "curr_month_visits": 212804.555397915,
      "unique_users": 10569.454642521,
      "pages_per_visit": 11.7934545635962
    },
    {
      "global_rank": 177263,
      "category_rank": 181,
      "domain": "apptrkr.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 387953.030284301,
      "curr_month_visits": 387953.030284301,
      "unique_users": 222090.148917112,
      "pages_per_visit": 1.25953366967579
    },
    {
      "global_rank": 15363,
      "category_rank": 181,
      "domain": "fullcast.jp",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3401109.90328634,
      "curr_month_visits": 3401109.90328634,
      "unique_users": 339703.631111288,
      "pages_per_visit": 9.32926325547438
    },
    {
      "global_rank": 174161,
      "category_rank": 181,
      "domain": "ethicspoint.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 303777.270552128,
      "curr_month_visits": 303777.270552128,
      "unique_users": 160428.846552684,
      "pages_per_visit": 3.30538898491187
    },
    {
      "global_rank": 177545,
      "category_rank": 182,
      "domain": "moonactive.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 301888.90629728,
      "curr_month_visits": 301888.90629728,
      "unique_users": 162627.031122076,
      "pages_per_visit": 2.08918261200721
    },
    {
      "global_rank": 175245,
      "category_rank": 182,
      "domain": "careers.tiket.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 233731.922510076,
      "curr_month_visits": 233731.922510076,
      "unique_users": 113505.563581275,
      "pages_per_visit": 4.4932545575153
    },
    {
      "global_rank": 15428,
      "category_rank": 182,
      "domain": "jobs.cz",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3846633.11965012,
      "curr_month_visits": 3846633.11965012,
      "unique_users": 1080964.88950786,
      "pages_per_visit": 5.35005767713437
    },
    {
      "global_rank": 177254,
      "category_rank": 183,
      "domain": "sbiz24.kr",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 250165.163545263,
      "curr_month_visits": 250165.163545263,
      "unique_users": 120013.507552744,
      "pages_per_visit": 3.20071632522349
    },
    {
      "global_rank": 15435,
      "category_rank": 183,
      "domain": "teamtailor.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4313682.06105132,
      "curr_month_visits": 4313682.06105132,
      "unique_users": 2149514.88872974,
      "pages_per_visit": 3.95672972185238
    },
    {
      "global_rank": 179199,
      "category_rank": 183,
      "domain": "pdricloud.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 239788.456604439,
      "curr_month_visits": 239788.456604439,
      "unique_users": 124120.319700505,
      "pages_per_visit": 5.47296369199569
    },
    {
      "global_rank": 179491,
      "category_rank": 184,
      "domain": "nmbys.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 94133.4553049827,
      "curr_month_visits": 94133.4553049827,
      "unique_users": 42782.9953150039,
      "pages_per_visit": 11.2870471161212
    },
    {
      "global_rank": 177269,
      "category_rank": 184,
      "domain": "erieri.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 351156.684268788,
      "curr_month_visits": 351156.684268788,
      "unique_users": 200124.262483919,
      "pages_per_visit": 1.99433871969062
    },
    {
      "global_rank": 15631,
      "category_rank": 184,
      "domain": "tempstaff.co.jp",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3502934.48729317,
      "curr_month_visits": 3502934.48729317,
      "unique_users": 861783.431308344,
      "pages_per_visit": 6.17095387121494
    },
    {
      "global_rank": 16079,
      "category_rank": 185,
      "domain": "wellfound.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3869857.68278291,
      "curr_month_visits": 3869857.68278291,
      "unique_users": 1455543.014856,
      "pages_per_visit": 5.26547630091179
    },
    {
      "global_rank": 179902,
      "category_rank": 185,
      "domain": "meritamerica.org",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 302802.240578575,
      "curr_month_visits": 302802.240578575,
      "unique_users": 166680.816380506,
      "pages_per_visit": 2.06707084465682
    },
    {
      "global_rank": 177461,
      "category_rank": 185,
      "domain": "jobs.bmo.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 267404.466582613,
      "curr_month_visits": 267404.466582613,
      "unique_users": 133205.46954228,
      "pages_per_visit": 3.76942569199183
    },
    {
      "global_rank": 178348,
      "category_rank": 186,
      "domain": "greatplacetowork.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 314379.049264473,
      "curr_month_visits": 314379.049264473,
      "unique_users": 194050.183265391,
      "pages_per_visit": 2.40370029388048
    },
    {
      "global_rank": 180991,
      "category_rank": 186,
      "domain": "onic.com.pk",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 171277.547289777,
      "curr_month_visits": 171277.547289777,
      "unique_users": 54558.1795534943,
      "pages_per_visit": 4.90900867457244
    },
    {
      "global_rank": 16188,
      "category_rank": 186,
      "domain": "workforceaustralia.gov.au",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3074328.89901204,
      "curr_month_visits": 3074328.89901204,
      "unique_users": 1145883.86690057,
      "pages_per_visit": 6.3361935734539
    },
    {
      "global_rank": 178963,
      "category_rank": 187,
      "domain": "github.careers",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 234760.444797105,
      "curr_month_visits": 234760.444797105,
      "unique_users": 128822.487359944,
      "pages_per_visit": 2.66706018102482
    },
    {
      "global_rank": 16268,
      "category_rank": 187,
      "domain": "jobs.ch",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3790241.80995622,
      "curr_month_visits": 3790241.80995622,
      "unique_users": 1345525.84306501,
      "pages_per_visit": 4.42241413359703
    },
    {
      "global_rank": 181032,
      "category_rank": 187,
      "domain": "happy-inc.ru",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 294935.356696295,
      "curr_month_visits": 294935.356696295,
      "unique_users": 140828.155134525,
      "pages_per_visit": 1.56878421638554
    },
    {
      "global_rank": 16299,
      "category_rank": 188,
      "domain": "zarplata.ru",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3588942.77486042,
      "curr_month_visits": 3588942.77486042,
      "unique_users": 1136897.37900896,
      "pages_per_visit": 5.73126161569184
    },
    {
      "global_rank": 181360,
      "category_rank": 188,
      "domain": "onlinecurriculo.com.br",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 125794.900105957,
      "curr_month_visits": 125794.900105957,
      "unique_users": 98093.3846598841,
      "pages_per_visit": 3.85284741446633
    },
    {
      "global_rank": 179016,
      "category_rank": 188,
      "domain": "sagilityhealth.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 198123.565599102,
      "curr_month_visits": 198123.565599102,
      "unique_users": 117425.985849452,
      "pages_per_visit": 2.20868381754087
    },
    {
      "global_rank": 16328,
      "category_rank": 189,
      "domain": "oliveboard.in",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3925787.41729291,
      "curr_month_visits": 3925787.41729291,
      "unique_users": 819059.647847693,
      "pages_per_visit": 5.17001713092886
    },
    {
      "global_rank": 179512,
      "category_rank": 189,
      "domain": "ebcflex.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 185366.606830836,
      "curr_month_visits": 185366.606830836,
      "unique_users": 97375.1673200072,
      "pages_per_visit": 5.15652135332771
    },
    {
      "global_rank": 181769,
      "category_rank": 189,
      "domain": "enterprisemobility.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 233740.436799135,
      "curr_month_visits": 233740.436799135,
      "unique_users": 144203.880183649,
      "pages_per_visit": 2.6686501892071
    },
    {
      "global_rank": 16406,
      "category_rank": 190,
      "domain": "bebee.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4499399.40736116,
      "curr_month_visits": 4499399.40736116,
      "unique_users": 2561554.59171169,
      "pages_per_visit": 2.54798028441241
    },
    {
      "global_rank": 181797,
      "category_rank": 190,
      "domain": "noice.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 178059.963641144,
      "curr_month_visits": 178059.963641144,
      "unique_users": 67914.7719431118,
      "pages_per_visit": 5.1520117466566
    },
    {
      "global_rank": 179617,
      "category_rank": 190,
      "domain": "careers.synopsys.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 201731.712552143,
      "curr_month_visits": 201731.712552143,
      "unique_users": 112262.121727897,
      "pages_per_visit": 2.8388384405855
    },
    {
      "global_rank": 179719,
      "category_rank": 191,
      "domain": "enterprise.gov.ie",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 284123.81801181,
      "curr_month_visits": 284123.81801181,
      "unique_users": 137851.758686927,
      "pages_per_visit": 2.76571289270998
    },
    {
      "global_rank": 17856,
      "category_rank": 191,
      "domain": "sakazi.net",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1329984.76982594,
      "curr_month_visits": 1329984.76982594,
      "unique_users": 556375.647255755,
      "pages_per_visit": 5.67575680223982
    },
    {
      "global_rank": 183288,
      "category_rank": 191,
      "domain": "hirehive.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 341909.574001009,
      "curr_month_visits": 341909.574001009,
      "unique_users": 150757.950539159,
      "pages_per_visit": 2.5357360208905
    },
    {
      "global_rank": 16423,
      "category_rank": 191,
      "domain": "moncompteformation.gouv.fr",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2999856.39294866,
      "curr_month_visits": 2999856.39294866,
      "unique_users": 1462926.82453715,
      "pages_per_visit": 6.97331009079419
    },
    {
      "global_rank": 183445,
      "category_rank": 192,
      "domain": "timesgroup.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 138404.579108925,
      "curr_month_visits": 138404.579108925,
      "unique_users": 49521.6669227219,
      "pages_per_visit": 6.73716701429435
    },
    {
      "global_rank": 16470,
      "category_rank": 192,
      "domain": "expertia.ai",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3515123.82003571,
      "curr_month_visits": 3515123.82003571,
      "unique_users": 1590307.4151827,
      "pages_per_visit": 3.82095444304145
    },
    {
      "global_rank": 181635,
      "category_rank": 193,
      "domain": "jobs.statefarm.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 432371.377168056,
      "curr_month_visits": 432371.377168056,
      "unique_users": 250752.188386393,
      "pages_per_visit": 3.23263177302339
    },
    {
      "global_rank": 183921,
      "category_rank": 193,
      "domain": "bakiciburada.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 241500.108393179,
      "curr_month_visits": 241500.108393179,
      "unique_users": 101097.396999389,
      "pages_per_visit": 6.26105006491787
    },
    {
      "global_rank": 16474,
      "category_rank": 193,
      "domain": "vdab.be",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2682832.08602913,
      "curr_month_visits": 2682832.08602913,
      "unique_users": 732737.696018559,
      "pages_per_visit": 9.04845828507108
    },
    {
      "global_rank": 181681,
      "category_rank": 194,
      "domain": "vectorvms.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 171483.906412988,
      "curr_month_visits": 171483.906412988,
      "unique_users": 29650.844396104,
      "pages_per_visit": 8.29324937732122
    },
    {
      "global_rank": 184016,
      "category_rank": 194,
      "domain": "preparationplus.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 208170.389415623,
      "curr_month_visits": 208170.389415623,
      "unique_users": 90970.5430652063,
      "pages_per_visit": 4.72642772237498
    },
    {
      "global_rank": 16487,
      "category_rank": 194,
      "domain": "lensa.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4549775.73961761,
      "curr_month_visits": 4549775.73961761,
      "unique_users": 2155233.33731366,
      "pages_per_visit": 2.28378850984083
    },
    {
      "global_rank": 184334,
      "category_rank": 195,
      "domain": "i9servicecenter.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 169640.954395581,
      "curr_month_visits": 169640.954395581,
      "unique_users": 71541.8640713919,
      "pages_per_visit": 8.73065895517741
    },
    {
      "global_rank": 16654,
      "category_rank": 195,
      "domain": "trac.jobs",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3847265.17835863,
      "curr_month_visits": 3847265.17835863,
      "unique_users": 951273.528753725,
      "pages_per_visit": 5.3480813398223
    },
    {
      "global_rank": 182721,
      "category_rank": 195,
      "domain": "jobsearch.baesystems.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 228147.084830246,
      "curr_month_visits": 228147.084830246,
      "unique_users": 131737.528088358,
      "pages_per_visit": 3.78326353649204
    },
    {
      "global_rank": 16768,
      "category_rank": 196,
      "domain": "sassa.gov.za",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4873864.51572102,
      "curr_month_visits": 4873864.51572102,
      "unique_users": 3377627.27114316,
      "pages_per_visit": 1.75202388987566
    },
    {
      "global_rank": 184358,
      "category_rank": 196,
      "domain": "joinmodernhealth.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 150822.085264826,
      "curr_month_visits": 150822.085264826,
      "unique_users": 45456.8417370096,
      "pages_per_visit": 5.81983508423203
    },
    {
      "global_rank": 185679,
      "category_rank": 196,
      "domain": "careers.appliedmaterials.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 206172.916404488,
      "curr_month_visits": 206172.916404488,
      "unique_users": 110807.999508534,
      "pages_per_visit": 5.86114455293129
    },
    {
      "global_rank": 16777,
      "category_rank": 197,
      "domain": "zohopublic.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4833345.29023266,
      "curr_month_visits": 4833345.29023266,
      "unique_users": 2569208.37216329,
      "pages_per_visit": 2.18928478670912
    },
    {
      "global_rank": 186612,
      "category_rank": 197,
      "domain": "gpakorea.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 319995.700629339,
      "curr_month_visits": 319995.700629339,
      "unique_users": 97583.4226271991,
      "pages_per_visit": 3.07344670710061
    },
    {
      "global_rank": 186376,
      "category_rank": 197,
      "domain": "jobs.hashmicro.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 256791.146664261,
      "curr_month_visits": 256791.146664261,
      "unique_users": 59185.0760182442,
      "pages_per_visit": 3.85852266980994
    },
    {
      "global_rank": 187521,
      "category_rank": 198,
      "domain": "ajinga.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 190109.405014867,
      "curr_month_visits": 190109.405014867,
      "unique_users": 72290.0964679001,
      "pages_per_visit": 4.25555119850132
    },
    {
      "global_rank": 16812,
      "category_rank": 198,
      "domain": "travel.jr-central.co.jp",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3212315.61775233,
      "curr_month_visits": 3212315.61775233,
      "unique_users": 1590039.5796443,
      "pages_per_visit": 5.32566938951737
    },
    {
      "global_rank": 187121,
      "category_rank": 198,
      "domain": "goletskerja.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 138447.839293144,
      "curr_month_visits": 138447.839293144,
      "unique_users": 63522.6174138971,
      "pages_per_visit": 7.3957954853896
    },
    {
      "global_rank": 190939,
      "category_rank": 199,
      "domain": "kraftshala.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 221030.044332519,
      "curr_month_visits": 221030.044332519,
      "unique_users": 80086.6130474096,
      "pages_per_visit": 2.91083589060591
    },
    {
      "global_rank": 187549,
      "category_rank": 199,
      "domain": "career.telkomsel.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 136846.136555045,
      "curr_month_visits": 136846.136555045,
      "unique_users": 77500.3735439513,
      "pages_per_visit": 3.11808120099982
    },
    {
      "global_rank": 16881,
      "category_rank": 199,
      "domain": "ukg.net",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3393026.63599738,
      "curr_month_visits": 3393026.63599738,
      "unique_users": 1026153.09301084,
      "pages_per_visit": 5.08994272685041
    },
    {
      "global_rank": 191265,
      "category_rank": 200,
      "domain": "goodparty.org",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 317730.188204653,
      "curr_month_visits": 317730.188204653,
      "unique_users": 266630.441913779,
      "pages_per_visit": 1.50087303912777
    },
    {
      "global_rank": 16902,
      "category_rank": 200,
      "domain": "usastaffing.gov",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2556885.49201358,
      "curr_month_visits": 2556885.49201358,
      "unique_users": 1014122.44160402,
      "pages_per_visit": 8.44412483113118
    },
    {
      "global_rank": 191504,
      "category_rank": 200,
      "domain": "careers.wtwco.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 315078.14889816,
      "curr_month_visits": 315078.14889816,
      "unique_users": 161500.551272187,
      "pages_per_visit": 2.53815238823936
    },
    {
      "global_rank": 191392,
      "category_rank": 201,
      "domain": "january.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 180235.1189876,
      "curr_month_visits": 180235.1189876,
      "unique_users": 109252.749055642,
      "pages_per_visit": 3.74685282916523
    },
    {
      "global_rank": 16910,
      "category_rank": 201,
      "domain": "riovagas.com.br",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2650652.05432352,
      "curr_month_visits": 2650652.05432352,
      "unique_users": 452611.434781258,
      "pages_per_visit": 10.0353613996747
    },
    {
      "global_rank": 191858,
      "category_rank": 201,
      "domain": "insidelvmh.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 166357.08899589,
      "curr_month_visits": 166357.08899589,
      "unique_users": 54282.0563950883,
      "pages_per_visit": 4.52836865188313
    },
    {
      "global_rank": 16983,
      "category_rank": 202,
      "domain": "cvbankas.lt",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3391842.53220139,
      "curr_month_visits": 3391842.53220139,
      "unique_users": 530412.415127006,
      "pages_per_visit": 6.1133004898099
    },
    {
      "global_rank": 193037,
      "category_rank": 202,
      "domain": "jobfound.org",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 218566.763101829,
      "curr_month_visits": 218566.763101829,
      "unique_users": 97543.6937026765,
      "pages_per_visit": 3.08137750860148
    },
    {
      "global_rank": 191514,
      "category_rank": 202,
      "domain": "meetacademy.in",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 242881.142055713,
      "curr_month_visits": 242881.142055713,
      "unique_users": 142392.835928077,
      "pages_per_visit": 3.16474013689567
    },
    {
      "global_rank": 16993,
      "category_rank": 203,
      "domain": "simplyhired.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3518850.25172373,
      "curr_month_visits": 3518850.25172373,
      "unique_users": 2051043.33870044,
      "pages_per_visit": 3.84720791426312
    },
    {
      "global_rank": 193177,
      "category_rank": 203,
      "domain": "eztest.org",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 249977.907283748,
      "curr_month_visits": 249977.907283748,
      "unique_users": 137821.288029516,
      "pages_per_visit": 2.348867469485
    },
    {
      "global_rank": 192618,
      "category_rank": 203,
      "domain": "careers.toyota.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 241618.708161803,
      "curr_month_visits": 241618.708161803,
      "unique_users": 151172.332241673,
      "pages_per_visit": 3.98905146152782
    },
    {
      "global_rank": 193368,
      "category_rank": 204,
      "domain": "pg.com.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 145104.889510209,
      "curr_month_visits": 145104.889510209,
      "unique_users": 43659.8829861554,
      "pages_per_visit": 10.5303299959895
    },
    {
      "global_rank": 193118,
      "category_rank": 204,
      "domain": "careers.pnc.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 274917.236148072,
      "curr_month_visits": 274917.236148072,
      "unique_users": 158284.169477181,
      "pages_per_visit": 2.64278902568039
    },
    {
      "global_rank": 17043,
      "category_rank": 204,
      "domain": "playdesi.net",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6087114.10336604,
      "curr_month_visits": 6087114.10336604,
      "unique_users": 918959.662668418,
      "pages_per_visit": 2.70509880505665
    },
    {
      "global_rank": 17225,
      "category_rank": 205,
      "domain": "jobs.jobvite.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4052948.03281449,
      "curr_month_visits": 4052948.03281449,
      "unique_users": 2452296.6679998,
      "pages_per_visit": 3.2742862116829
    },
    {
      "global_rank": 194030,
      "category_rank": 205,
      "domain": "providence.jobs",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 199547.906637693,
      "curr_month_visits": 199547.906637693,
      "unique_users": 101626.843512028,
      "pages_per_visit": 3.93880159544334
    },
    {
      "global_rank": 194625,
      "category_rank": 206,
      "domain": "careers.linkedin.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 328771.413747378,
      "curr_month_visits": 328771.413747378,
      "unique_users": 174928.982034227,
      "pages_per_visit": 1.76871449398093
    },
    {
      "global_rank": 17227,
      "category_rank": 206,
      "domain": "pnet.co.za",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2563968.69087515,
      "curr_month_visits": 2563968.69087515,
      "unique_users": 810832.008652333,
      "pages_per_visit": 6.643846604329
    },
    {
      "global_rank": 197698,
      "category_rank": 207,
      "domain": "reworkd.ai",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 325002.573042122,
      "curr_month_visits": 325002.573042122,
      "unique_users": 128542.940562695,
      "pages_per_visit": 2.14634572380175
    },
    {
      "global_rank": 17240,
      "category_rank": 207,
      "domain": "dol.gov",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4305962.3583085,
      "curr_month_visits": 4305962.3583085,
      "unique_users": 2627589.82567958,
      "pages_per_visit": 2.73502838446029
    },
    {
      "global_rank": 194698,
      "category_rank": 207,
      "domain": "vndly.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 210488.508440447,
      "curr_month_visits": 210488.508440447,
      "unique_users": 50070.7276202042,
      "pages_per_visit": 4.98060505220255
    },
    {
      "global_rank": 198022,
      "category_rank": 208,
      "domain": "fairygodboss.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 281760.737531782,
      "curr_month_visits": 281760.737531782,
      "unique_users": 173390.135479626,
      "pages_per_visit": 2.06411952536142
    },
    {
      "global_rank": 194959,
      "category_rank": 208,
      "domain": "hireflix.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 218482.652960008,
      "curr_month_visits": 218482.652960008,
      "unique_users": 93399.1389868617,
      "pages_per_visit": 4.12369318055668
    },
    {
      "global_rank": 17403,
      "category_rank": 208,
      "domain": "bayt.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3593732.63706381,
      "curr_month_visits": 3593732.63706381,
      "unique_users": 2034217.36165592,
      "pages_per_visit": 3.87512486723574
    },
    {
      "global_rank": 195115,
      "category_rank": 209,
      "domain": "job.icbc.com.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 330143.587953557,
      "curr_month_visits": 330143.587953557,
      "unique_users": 124259.267926266,
      "pages_per_visit": 13.866036027929
    },
    {
      "global_rank": 17426,
      "category_rank": 209,
      "domain": "e-ams.at",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2686647.60134605,
      "curr_month_visits": 2686647.60134605,
      "unique_users": 452660.233634946,
      "pages_per_visit": 7.64149753777499
    },
    {
      "global_rank": 199057,
      "category_rank": 209,
      "domain": "gnapartners.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 266049.6970763,
      "curr_month_visits": 266049.6970763,
      "unique_users": 47711.9439270532,
      "pages_per_visit": 3.94163067293737
    },
    {
      "global_rank": 199482,
      "category_rank": 210,
      "domain": "app-outback.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 175210.345192544,
      "curr_month_visits": 175210.345192544,
      "unique_users": 118236.561195243,
      "pages_per_visit": 1.77211275715963
    },
    {
      "global_rank": 195285,
      "category_rank": 210,
      "domain": "jobkarov.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 238058.975132313,
      "curr_month_visits": 238058.975132313,
      "unique_users": 85568.9485922514,
      "pages_per_visit": 3.26755920615084
    },
    {
      "global_rank": 17469,
      "category_rank": 210,
      "domain": "hh.kz",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3422040.81851057,
      "curr_month_visits": 3422040.81851057,
      "unique_users": 724207.80356771,
      "pages_per_visit": 6.6050584168988
    },
    {
      "global_rank": 19527,
      "category_rank": 210,
      "domain": "cadienttalent.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2182721.43817181,
      "curr_month_visits": 2182721.43817181,
      "unique_users": 1160222.77664494,
      "pages_per_visit": 9.63499492005878
    },
    {
      "global_rank": 196131,
      "category_rank": 211,
      "domain": "careers.datadoghq.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 302686.53329568,
      "curr_month_visits": 302686.53329568,
      "unique_users": 169304.293273182,
      "pages_per_visit": 3.1571586108888
    },
    {
      "global_rank": 200116,
      "category_rank": 211,
      "domain": "mynexthire.io",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 237409.669262048,
      "curr_month_visits": 237409.669262048,
      "unique_users": 84206.9987308039,
      "pages_per_visit": 3.470667037174
    },
    {
      "global_rank": 17509,
      "category_rank": 211,
      "domain": "metacareers.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3495024.3467069,
      "curr_month_visits": 3495024.3467069,
      "unique_users": 1185422.04997213,
      "pages_per_visit": 4.71556041259756
    },
    {
      "global_rank": 202064,
      "category_rank": 212,
      "domain": "careers.acehardware.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 156154.139311748,
      "curr_month_visits": 156154.139311748,
      "unique_users": 102369.347452687,
      "pages_per_visit": 4.68965167117189
    },
    {
      "global_rank": 196605,
      "category_rank": 212,
      "domain": "jobstechjobs.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 140641.026874287,
      "curr_month_visits": 140641.026874287,
      "unique_users": 69291.7115781325,
      "pages_per_visit": 1.94078089698572
    },
    {
      "global_rank": 17544,
      "category_rank": 212,
      "domain": "bio.site",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4818835.55857743,
      "curr_month_visits": 4818835.55857743,
      "unique_users": 2924247.83830664,
      "pages_per_visit": 1.71181385657935
    },
    {
      "global_rank": 19559,
      "category_rank": 212,
      "domain": "jobnet.dk",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2274464.03842487,
      "curr_month_visits": 2274464.03842487,
      "unique_users": 500850.722266176,
      "pages_per_visit": 9.30545407693872
    },
    {
      "global_rank": 17616,
      "category_rank": 213,
      "domain": "resume.io",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3216940.25045364,
      "curr_month_visits": 3216940.25045364,
      "unique_users": 1862991.50226996,
      "pages_per_visit": 4.84747182738842
    },
    {
      "global_rank": 202743,
      "category_rank": 213,
      "domain": "iprep.online",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 205289.600721005,
      "curr_month_visits": 205289.600721005,
      "unique_users": 100019.653592638,
      "pages_per_visit": 3.20007007532514
    },
    {
      "global_rank": 196994,
      "category_rank": 213,
      "domain": "jobs.discover.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 230908.640931723,
      "curr_month_visits": 230908.640931723,
      "unique_users": 130597.136457789,
      "pages_per_visit": 4.16003442764792
    },
    {
      "global_rank": 203007,
      "category_rank": 214,
      "domain": "i9complete.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 187891.156264753,
      "curr_month_visits": 187891.156264753,
      "unique_users": 113442.86588936,
      "pages_per_visit": 4.44703120270938
    },
    {
      "global_rank": 197061,
      "category_rank": 214,
      "domain": "hurma.work",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 244667.321297241,
      "curr_month_visits": 244667.321297241,
      "unique_users": 92816.8272938217,
      "pages_per_visit": 2.96309078640997
    },
    {
      "global_rank": 17620,
      "category_rank": 214,
      "domain": "flowgpt.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3141063.43647697,
      "curr_month_visits": 3141063.43647697,
      "unique_users": 1297225.46694207,
      "pages_per_visit": 5.1128402096635
    },
    {
      "global_rank": 197084,
      "category_rank": 215,
      "domain": "careers.uobgroup.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 195291.097059308,
      "curr_month_visits": 195291.097059308,
      "unique_users": 69209.6897919199,
      "pages_per_visit": 3.475492333896
    },
    {
      "global_rank": 203091,
      "category_rank": 215,
      "domain": "ytmp3converter.online",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 693568.808512703,
      "curr_month_visits": 693568.808512703,
      "unique_users": 293800.254426617,
      "pages_per_visit": 2.64738207718664
    },
    {
      "global_rank": 17622,
      "category_rank": 215,
      "domain": "sapsf.eu",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3166671.84514448,
      "curr_month_visits": 3166671.84514448,
      "unique_users": 1369738.54479753,
      "pages_per_visit": 4.83369453586576
    },
    {
      "global_rank": 197399,
      "category_rank": 216,
      "domain": "careers.garena.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 90337.6629787606,
      "curr_month_visits": 90337.6629787606,
      "unique_users": 50665.8706603415,
      "pages_per_visit": 4.53767491212422
    },
    {
      "global_rank": 203167,
      "category_rank": 216,
      "domain": "vegamovies.se",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 2308772.77247585,
      "curr_month_visits": 2308772.77247585,
      "unique_users": 1258181.36896604,
      "pages_per_visit": 4.58541916265331
    },
    {
      "global_rank": 17777,
      "category_rank": 216,
      "domain": "hatarako.net",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3056631.32564213,
      "curr_month_visits": 3056631.32564213,
      "unique_users": 873969.123052396,
      "pages_per_visit": 6.69321228311639
    },
    {
      "global_rank": 197480,
      "category_rank": 217,
      "domain": "psychometrictests.org",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 153532.604949412,
      "curr_month_visits": 153532.604949412,
      "unique_users": 76404.7468940918,
      "pages_per_visit": 3.78077686764905
    },
    {
      "global_rank": 17780,
      "category_rank": 217,
      "domain": "best-jobs-online.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4239484.06585258,
      "curr_month_visits": 4239484.06585258,
      "unique_users": 2553241.79774666,
      "pages_per_visit": 2.95259455319912
    },
    {
      "global_rank": 204310,
      "category_rank": 217,
      "domain": "worldsalaries.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 273112.012006046,
      "curr_month_visits": 273112.012006046,
      "unique_users": 140104.581817477,
      "pages_per_visit": 1.78181154732803
    },
    {
      "global_rank": 197894,
      "category_rank": 218,
      "domain": "sprinto.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 228337.234741571,
      "curr_month_visits": 228337.234741571,
      "unique_users": 113106.469689102,
      "pages_per_visit": 2.85951668267788
    },
    {
      "global_rank": 206143,
      "category_rank": 218,
      "domain": "kart38.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 206792.696091729,
      "curr_month_visits": 206792.696091729,
      "unique_users": 64409.5844290573,
      "pages_per_visit": 5.03146283460974
    },
    {
      "global_rank": 20335,
      "category_rank": 218,
      "domain": "job.jobnet.dk",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2209245.58143488,
      "curr_month_visits": 2209245.58143488,
      "unique_users": 484088.38424445,
      "pages_per_visit": 9.07878679849831
    },
    {
      "global_rank": 199274,
      "category_rank": 219,
      "domain": "jobs.volvogroup.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 285966.652190038,
      "curr_month_visits": 285966.652190038,
      "unique_users": 144153.985484973,
      "pages_per_visit": 2.11806291633587
    },
    {
      "global_rank": 17934,
      "category_rank": 219,
      "domain": "sbaq.press",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2745148.75976417,
      "curr_month_visits": 2745148.75976417,
      "unique_users": 549410.577095208,
      "pages_per_visit": 2.92566160033066
    },
    {
      "global_rank": 206214,
      "category_rank": 219,
      "domain": "accolade.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 127254.185132466,
      "curr_month_visits": 127254.185132466,
      "unique_users": 60079.0074691419,
      "pages_per_visit": 7.69477178967657
    },
    {
      "global_rank": 17938,
      "category_rank": 220,
      "domain": "thecashmint.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 5810039.30132721,
      "curr_month_visits": 5810039.30132721,
      "unique_users": 2207839.75766604,
      "pages_per_visit": 1.69683084124662
    },
    {
      "global_rank": 207315,
      "category_rank": 220,
      "domain": "french-stream.fun",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 578950.169164456,
      "curr_month_visits": 578950.169164456,
      "unique_users": 133759.327448651,
      "pages_per_visit": 1.48366697879167
    },
    {
      "global_rank": 199289,
      "category_rank": 220,
      "domain": "office.163.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 255764.578904781,
      "curr_month_visits": 255764.578904781,
      "unique_users": 73668.9399940463,
      "pages_per_visit": 3.45847429738545
    },
    {
      "global_rank": 207503,
      "category_rank": 221,
      "domain": "mycv.ge",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 123862.809802096,
      "curr_month_visits": 123862.809802096,
      "unique_users": 46784.2462007419,
      "pages_per_visit": 8.15531471345862
    },
    {
      "global_rank": 18019,
      "category_rank": 221,
      "domain": "onlygreatjobs.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3490145.6072745,
      "curr_month_visits": 3490145.6072745,
      "unique_users": 1712785.58806697,
      "pages_per_visit": 4.09526937520357
    },
    {
      "global_rank": 200175,
      "category_rank": 221,
      "domain": "mucfc.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 189920.639828146,
      "curr_month_visits": 189920.639828146,
      "unique_users": 37054.7980424378,
      "pages_per_visit": 9.01574560436912
    },
    {
      "global_rank": 18035,
      "category_rank": 222,
      "domain": "jobs.apple.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2896844.43844272,
      "curr_month_visits": 2896844.43844272,
      "unique_users": 1231436.73269795,
      "pages_per_visit": 5.82938319639805
    },
    {
      "global_rank": 207893,
      "category_rank": 222,
      "domain": "only1.co.kr",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 126367.428581311,
      "curr_month_visits": 126367.428581311,
      "unique_users": 31702.4320119262,
      "pages_per_visit": 5.16099360299589
    },
    {
      "global_rank": 200248,
      "category_rank": 222,
      "domain": "scoutlife.org",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 248415.127751674,
      "curr_month_visits": 248415.127751674,
      "unique_users": 138296.11222757,
      "pages_per_visit": 2.03475076816583
    },
    {
      "global_rank": 18123,
      "category_rank": 223,
      "domain": "rabota.by",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2843078.1736891,
      "curr_month_visits": 2843078.1736891,
      "unique_users": 791326.025831492,
      "pages_per_visit": 6.96531660097189
    },
    {
      "global_rank": 200249,
      "category_rank": 223,
      "domain": "talentadore.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 337728.690865792,
      "curr_month_visits": 337728.690865792,
      "unique_users": 155253.601476868,
      "pages_per_visit": 2.20485131478457
    },
    {
      "global_rank": 208102,
      "category_rank": 223,
      "domain": "mopla.solutions",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 321216.627724643,
      "curr_month_visits": 321216.627724643,
      "unique_users": 127563.610458784,
      "pages_per_visit": 2.14143145054998
    },
    {
      "global_rank": 201919,
      "category_rank": 224,
      "domain": "candidats.io",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 186683.859174505,
      "curr_month_visits": 186683.859174505,
      "unique_users": 56194.847073095,
      "pages_per_visit": 4.0354752782386
    },
    {
      "global_rank": 208471,
      "category_rank": 224,
      "domain": "ppih.co.jp",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 259692.70830663,
      "curr_month_visits": 259692.70830663,
      "unique_users": 197983.186597602,
      "pages_per_visit": 2.09270765726869
    },
    {
      "global_rank": 18152,
      "category_rank": 224,
      "domain": "prace.cz",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3090246.0395455,
      "curr_month_visits": 3090246.0395455,
      "unique_users": 843851.184403146,
      "pages_per_visit": 4.49188586116126
    },
    {
      "global_rank": 203565,
      "category_rank": 225,
      "domain": "chaicode.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 262981.698220378,
      "curr_month_visits": 262981.698220378,
      "unique_users": 109411.859510553,
      "pages_per_visit": 4.08461387675013
    },
    {
      "global_rank": 18174,
      "category_rank": 225,
      "domain": "vietnamworks.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3774267.01002954,
      "curr_month_visits": 3774267.01002954,
      "unique_users": 1429845.73807578,
      "pages_per_visit": 4.26737576459009
    },
    {
      "global_rank": 210722,
      "category_rank": 225,
      "domain": "careers.georgia.gov",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 178151.51685832,
      "curr_month_visits": 178151.51685832,
      "unique_users": 97210.9640490093,
      "pages_per_visit": 3.51991626372569
    },
    {
      "global_rank": 18321,
      "category_rank": 226,
      "domain": "recruitee.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3109976.22318421,
      "curr_month_visits": 3109976.22318421,
      "unique_users": 1563934.31433147,
      "pages_per_visit": 4.22275704318315
    },
    {
      "global_rank": 211362,
      "category_rank": 226,
      "domain": "aboitizconstructioninc.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 158943.381980932,
      "curr_month_visits": 158943.381980932,
      "unique_users": 9590.81137461655,
      "pages_per_visit": 15.0819227514544
    },
    {
      "global_rank": 205766,
      "category_rank": 226,
      "domain": "bakkah.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 218919.014465369,
      "curr_month_visits": 218919.014465369,
      "unique_users": 114142.236898733,
      "pages_per_visit": 2.74380347769249
    },
    {
      "global_rank": 18363,
      "category_rank": 227,
      "domain": "chiletrabajos.cl",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2725311.77295615,
      "curr_month_visits": 2725311.77295615,
      "unique_users": 808563.114532634,
      "pages_per_visit": 6.15202316906859
    },
    {
      "global_rank": 211702,
      "category_rank": 227,
      "domain": "careers.invesco.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 180314.956287652,
      "curr_month_visits": 180314.956287652,
      "unique_users": 85182.7272789998,
      "pages_per_visit": 2.75854409411362
    },
    {
      "global_rank": 205876,
      "category_rank": 227,
      "domain": "pinatafarm.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 262657.045283709,
      "curr_month_visits": 262657.045283709,
      "unique_users": 159095.67708219,
      "pages_per_visit": 1.61833384114618
    },
    {
      "global_rank": 21430,
      "category_rank": 228,
      "domain": "oaed.gr",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1897297.65254296,
      "curr_month_visits": 1897297.65254296,
      "unique_users": 556001.938544211,
      "pages_per_visit": 8.360981686581
    },
    {
      "global_rank": 18380,
      "category_rank": 228,
      "domain": "apna.co",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2681117.86472465,
      "curr_month_visits": 2681117.86472465,
      "unique_users": 1367923.16187323,
      "pages_per_visit": 4.93439944545295
    },
    {
      "global_rank": 206818,
      "category_rank": 228,
      "domain": "ca-cib.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 158446.166631137,
      "curr_month_visits": 158446.166631137,
      "unique_users": 72918.6885581095,
      "pages_per_visit": 4.67094042274898
    },
    {
      "global_rank": 18415,
      "category_rank": 229,
      "domain": "recruiter.co.kr",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3297752.43804731,
      "curr_month_visits": 3297752.43804731,
      "unique_users": 980575.845401959,
      "pages_per_visit": 6.28088068254649
    },
    {
      "global_rank": 213341,
      "category_rank": 229,
      "domain": "encord.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 226536.059765209,
      "curr_month_visits": 226536.059765209,
      "unique_users": 117125.236065581,
      "pages_per_visit": 2.48553272715976
    },
    {
      "global_rank": 207162,
      "category_rank": 229,
      "domain": "gryphonhr.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 160589.57993309,
      "curr_month_visits": 160589.57993309,
      "unique_users": 60363.4962467878,
      "pages_per_visit": 6.00642182443894
    },
    {
      "global_rank": 213956,
      "category_rank": 230,
      "domain": "salary.sg",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 155509.210722065,
      "curr_month_visits": 155509.210722065,
      "unique_users": 85471.9325918313,
      "pages_per_visit": 4.47344901203163
    },
    {
      "global_rank": 21671,
      "category_rank": 230,
      "domain": "zety.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2395081.99244874,
      "curr_month_visits": 2395081.99244874,
      "unique_users": 1482269.28898954,
      "pages_per_visit": 6.70570461159901
    },
    {
      "global_rank": 18565,
      "category_rank": 230,
      "domain": "wantedly.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3328059.07667841,
      "curr_month_visits": 3328059.07667841,
      "unique_users": 1716543.6773472,
      "pages_per_visit": 3.78567139306649
    },
    {
      "global_rank": 208405,
      "category_rank": 230,
      "domain": "algomap.io",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 411088.258358754,
      "curr_month_visits": 411088.258358754,
      "unique_users": 130619.034351045,
      "pages_per_visit": 1.58437782172932
    },
    {
      "global_rank": 18754,
      "category_rank": 231,
      "domain": "jss.com.cn",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3542614.35048733,
      "curr_month_visits": 3542614.35048733,
      "unique_users": 2112921.39537919,
      "pages_per_visit": 2.78101450115629
    },
    {
      "global_rank": 208882,
      "category_rank": 231,
      "domain": "koibana-dictionary.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 193855.534935925,
      "curr_month_visits": 193855.534935925,
      "unique_users": 149647.928998889,
      "pages_per_visit": 2.0755398487407
    },
    {
      "global_rank": 214268,
      "category_rank": 231,
      "domain": "dip.ai",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 116712.317201283,
      "curr_month_visits": 116712.317201283,
      "unique_users": 46144.6253897057,
      "pages_per_visit": 1.35851907031357
    },
    {
      "global_rank": 21816,
      "category_rank": 231,
      "domain": "airforce.mil.ph",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2312837.72311105,
      "curr_month_visits": 2312837.72311105,
      "unique_users": 494758.356513173,
      "pages_per_visit": 13.2259880345906
    },
    {
      "global_rank": 18954,
      "category_rank": 232,
      "domain": "breezy.hr",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3837472.40259365,
      "curr_month_visits": 3837472.40259365,
      "unique_users": 2217645.54968629,
      "pages_per_visit": 2.65857671971638
    },
    {
      "global_rank": 214711,
      "category_rank": 232,
      "domain": "chattr.ai",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 220313.041825907,
      "curr_month_visits": 220313.041825907,
      "unique_users": 119617.410687873,
      "pages_per_visit": 2.25199747173782
    },
    {
      "global_rank": 209160,
      "category_rank": 232,
      "domain": "careers.becomearoadie.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 128672.784608517,
      "curr_month_visits": 128672.784608517,
      "unique_users": 76916.6058990154,
      "pages_per_visit": 5.24369284474272
    },
    {
      "global_rank": 22206,
      "category_rank": 233,
      "domain": "apec.fr",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2066797.95070006,
      "curr_month_visits": 2066797.95070006,
      "unique_users": 695723.116628926,
      "pages_per_visit": 8.02030580893388
    },
    {
      "global_rank": 209675,
      "category_rank": 233,
      "domain": "careers.elevancehealth.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 176620.248876109,
      "curr_month_visits": 176620.248876109,
      "unique_users": 82940.5718152293,
      "pages_per_visit": 4.710373338292
    },
    {
      "global_rank": 19101,
      "category_rank": 233,
      "domain": "elempleo.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2602037.84486144,
      "curr_month_visits": 2602037.84486144,
      "unique_users": 880422.960188433,
      "pages_per_visit": 7.02490804224487
    },
    {
      "global_rank": 216273,
      "category_rank": 233,
      "domain": "guardian.network",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 116602.648580584,
      "curr_month_visits": 116602.648580584,
      "unique_users": 42393.3911678932,
      "pages_per_visit": 6.74572516465147
    },
    {
      "global_rank": 19310,
      "category_rank": 234,
      "domain": "scaler.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3425060.83143582,
      "curr_month_visits": 3425060.83143582,
      "unique_users": 1545107.68258374,
      "pages_per_visit": 4.09904597672507
    },
    {
      "global_rank": 209994,
      "category_rank": 234,
      "domain": "careers.x.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 193572.242731736,
      "curr_month_visits": 193572.242731736,
      "unique_users": 92036.1223955628,
      "pages_per_visit": 1.89389763054813
    },
    {
      "global_rank": 218432,
      "category_rank": 235,
      "domain": "dev.java",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 237826.398693818,
      "curr_month_visits": 237826.398693818,
      "unique_users": 129679.878413737,
      "pages_per_visit": 2.06889533430296
    },
    {
      "global_rank": 19419,
      "category_rank": 235,
      "domain": "foundit.in",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2890317.51243486,
      "curr_month_visits": 2890317.51243486,
      "unique_users": 1658061.17169759,
      "pages_per_visit": 3.69099238593755
    },
    {
      "global_rank": 210515,
      "category_rank": 235,
      "domain": "mconsultingprep.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 237388.970407322,
      "curr_month_visits": 237388.970407322,
      "unique_users": 120261.371399599,
      "pages_per_visit": 2.53074774534763
    },
    {
      "global_rank": 210542,
      "category_rank": 236,
      "domain": "railslibraries.org",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 312139.198628772,
      "curr_month_visits": 312139.198628772,
      "unique_users": 39716.1440251992,
      "pages_per_visit": 1.9487349672742
    },
    {
      "global_rank": 221570,
      "category_rank": 236,
      "domain": "crisisprevention.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 169165.815891988,
      "curr_month_visits": 169165.815891988,
      "unique_users": 94845.560877371,
      "pages_per_visit": 4.64677947313894
    },
    {
      "global_rank": 22335,
      "category_rank": 236,
      "domain": "trabajosdiarios.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2463651.94174,
      "curr_month_visits": 2463651.94174,
      "unique_users": 1251141.60180419,
      "pages_per_visit": 4.68758329807019
    },
    {
      "global_rank": 19425,
      "category_rank": 236,
      "domain": "applytojob.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4269315.57461232,
      "curr_month_visits": 4269315.57461232,
      "unique_users": 2567003.15851188,
      "pages_per_visit": 2.1498987783241
    },
    {
      "global_rank": 212150,
      "category_rank": 237,
      "domain": "cvmaker.com.tr",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 208277.851585015,
      "curr_month_visits": 208277.851585015,
      "unique_users": 138156.161357141,
      "pages_per_visit": 3.78503761656779
    },
    {
      "global_rank": 222249,
      "category_rank": 237,
      "domain": "markinfo.kr",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 193158.852945971,
      "curr_month_visits": 193158.852945971,
      "unique_users": 81291.5244146651,
      "pages_per_visit": 2.6317644363756
    },
    {
      "global_rank": 19519,
      "category_rank": 237,
      "domain": "jobappnetwork.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3144970.48168394,
      "curr_month_visits": 3144970.48168394,
      "unique_users": 1634303.61236788,
      "pages_per_visit": 5.28768904147831
    },
    {
      "global_rank": 22436,
      "category_rank": 237,
      "domain": "q-net.or.kr",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1927505.51182552,
      "curr_month_visits": 1927505.51182552,
      "unique_users": 948397.549952327,
      "pages_per_visit": 8.84030014837727
    },
    {
      "global_rank": 213092,
      "category_rank": 238,
      "domain": "getmarlee.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 238738.619277455,
      "curr_month_visits": 238738.619277455,
      "unique_users": 116797.334977505,
      "pages_per_visit": 2.59657659825341
    },
    {
      "global_rank": 22502,
      "category_rank": 239,
      "domain": "jobteaser.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2309669.16004925,
      "curr_month_visits": 2309669.16004925,
      "unique_users": 874992.012182995,
      "pages_per_visit": 6.4040797333347
    },
    {
      "global_rank": 223037,
      "category_rank": 239,
      "domain": "mailscitohokuacjp-my.sharepoint.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 243983.734473493,
      "curr_month_visits": 243983.734473493,
      "unique_users": 70558.4128294541,
      "pages_per_visit": 1.8686686431321
    },
    {
      "global_rank": 214033,
      "category_rank": 239,
      "domain": "assessmentday.co.uk",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 228016.615967372,
      "curr_month_visits": 228016.615967372,
      "unique_users": 118367.837460542,
      "pages_per_visit": 2.44468516674563
    },
    {
      "global_rank": 19548,
      "category_rank": 239,
      "domain": "careerviet.vn",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2900222.86738488,
      "curr_month_visits": 2900222.86738488,
      "unique_users": 1234073.39307714,
      "pages_per_visit": 5.0039825302889
    },
    {
      "global_rank": 214188,
      "category_rank": 240,
      "domain": "engineerhub.in",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 265855.441148298,
      "curr_month_visits": 265855.441148298,
      "unique_users": 98341.9211525596,
      "pages_per_visit": 2.59000846196323
    },
    {
      "global_rank": 19736,
      "category_rank": 241,
      "domain": "magneto365.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2668301.22644518,
      "curr_month_visits": 2668301.22644518,
      "unique_users": 1014494.21416202,
      "pages_per_visit": 4.81381735962048
    },
    {
      "global_rank": 229205,
      "category_rank": 241,
      "domain": "careers.jeronimomartins.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 206026.04511954,
      "curr_month_visits": 206026.04511954,
      "unique_users": 115567.515117916,
      "pages_per_visit": 3.6318872177606
    },
    {
      "global_rank": 216045,
      "category_rank": 241,
      "domain": "weatherforecastsdaily.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 195131.147491207,
      "curr_month_visits": 195131.147491207,
      "unique_users": 168265.989235113,
      "pages_per_visit": 1.91448887460334
    },
    {
      "global_rank": 216617,
      "category_rank": 242,
      "domain": "huzzle.app",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 155445.854851856,
      "curr_month_visits": 155445.854851856,
      "unique_users": 90303.4700709133,
      "pages_per_visit": 3.06838905706534
    },
    {
      "global_rank": 19833,
      "category_rank": 242,
      "domain": "employedusa.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3509731.49628977,
      "curr_month_visits": 3509731.49628977,
      "unique_users": 1451173.63584825,
      "pages_per_visit": 2.92509417605863
    },
    {
      "global_rank": 23173,
      "category_rank": 242,
      "domain": "workindia.in",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1772832.3177455,
      "curr_month_visits": 1772832.3177455,
      "unique_users": 739755.022757077,
      "pages_per_visit": 5.60475744181401
    },
    {
      "global_rank": 229285,
      "category_rank": 242,
      "domain": "lasustech.edu.ng",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 109446.536308496,
      "curr_month_visits": 109446.536308496,
      "unique_users": 25595.6705341203,
      "pages_per_visit": 6.07876227795424
    },
    {
      "global_rank": 23246,
      "category_rank": 243,
      "domain": "jobs.bdjobs.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2310231.46460638,
      "curr_month_visits": 2310231.46460638,
      "unique_users": 662379.467185541,
      "pages_per_visit": 6.65403129063828
    },
    {
      "global_rank": 217109,
      "category_rank": 243,
      "domain": "jobs.slalom.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 111636.164070466,
      "curr_month_visits": 111636.164070466,
      "unique_users": 70885.9080975633,
      "pages_per_visit": 8.77267691689087
    },
    {
      "global_rank": 19885,
      "category_rank": 243,
      "domain": "localjobster.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3027482.02726411,
      "curr_month_visits": 3027482.02726411,
      "unique_users": 1565032.02124952,
      "pages_per_visit": 4.36232839880635
    },
    {
      "global_rank": 229423,
      "category_rank": 243,
      "domain": "wonsulting.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 228440.516976897,
      "curr_month_visits": 228440.516976897,
      "unique_users": 138604.077591791,
      "pages_per_visit": 1.92275934788268
    },
    {
      "global_rank": 23359,
      "category_rank": 244,
      "domain": "testgorilla.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2164638.91166948,
      "curr_month_visits": 2164638.91166948,
      "unique_users": 1123232.07787273,
      "pages_per_visit": 5.89265877085946
    },
    {
      "global_rank": 19893,
      "category_rank": 244,
      "domain": "shl.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2492678.82430431,
      "curr_month_visits": 2492678.82430431,
      "unique_users": 1261576.27218092,
      "pages_per_visit": 6.94577301509074
    },
    {
      "global_rank": 229683,
      "category_rank": 244,
      "domain": "hubstafftalent.net",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 146744.221241372,
      "curr_month_visits": 146744.221241372,
      "unique_users": 53136.6606669054,
      "pages_per_visit": 4.96232765749094
    },
    {
      "global_rank": 217629,
      "category_rank": 244,
      "domain": "ampaceinfo.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 161775.348775036,
      "curr_month_visits": 161775.348775036,
      "unique_users": 9032.91706620054,
      "pages_per_visit": 6.19964611532118
    },
    {
      "global_rank": 230049,
      "category_rank": 245,
      "domain": "superagentes.ai",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 117731.691685962,
      "curr_month_visits": 117731.691685962,
      "unique_users": 30156.2562049039,
      "pages_per_visit": 12.722055041125
    },
    {
      "global_rank": 218508,
      "category_rank": 245,
      "domain": "career.nankai.edu.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 128038.248148523,
      "curr_month_visits": 128038.248148523,
      "unique_users": 65881.0843737366,
      "pages_per_visit": 5.13409792434122
    },
    {
      "global_rank": 19959,
      "category_rank": 245,
      "domain": "accessacloud.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3056683.91022174,
      "curr_month_visits": 3056683.91022174,
      "unique_users": 423249.358470767,
      "pages_per_visit": 6.48926134240592
    },
    {
      "global_rank": 23592,
      "category_rank": 246,
      "domain": "randstad.it",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2302074.80504077,
      "curr_month_visits": 2302074.80504077,
      "unique_users": 1126674.0728417,
      "pages_per_visit": 4.77413744727283
    },
    {
      "global_rank": 19995,
      "category_rank": 246,
      "domain": "myworkdaysite.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3834499.76102867,
      "curr_month_visits": 3834499.76102867,
      "unique_users": 1922492.79916051,
      "pages_per_visit": 3.48621974511989
    },
    {
      "global_rank": 220190,
      "category_rank": 246,
      "domain": "supplyit.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 87485.1998480227,
      "curr_month_visits": 87485.1998480227,
      "unique_users": 7338.44635306369,
      "pages_per_visit": 16.1720589198788
    },
    {
      "global_rank": 230523,
      "category_rank": 246,
      "domain": "passports.gov.sd",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 207391.391019013,
      "curr_month_visits": 207391.391019013,
      "unique_users": 82967.6409792367,
      "pages_per_visit": 4.02351411495566
    },
    {
      "global_rank": 220980,
      "category_rank": 247,
      "domain": "100tal.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 185205.954113988,
      "curr_month_visits": 185205.954113988,
      "unique_users": 33357.9682458464,
      "pages_per_visit": 4.35339027942716
    },
    {
      "global_rank": 23761,
      "category_rank": 247,
      "domain": "resumegenius.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2244294.49665634,
      "curr_month_visits": 2244294.49665634,
      "unique_users": 1441380.01865928,
      "pages_per_visit": 4.62131172221729
    },
    {
      "global_rank": 230770,
      "category_rank": 247,
      "domain": "banglabet88.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 845397.501833769,
      "curr_month_visits": 845397.501833769,
      "unique_users": 511822.172119114,
      "pages_per_visit": 2.22219341991544
    },
    {
      "global_rank": 231729,
      "category_rank": 248,
      "domain": "formstack.io",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 239415.535937916,
      "curr_month_visits": 239415.535937916,
      "unique_users": 145018.840194878,
      "pages_per_visit": 1.62908491600945
    },
    {
      "global_rank": 221210,
      "category_rank": 248,
      "domain": "jobs.productmarketingalliance.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 115461.346412373,
      "curr_month_visits": 115461.346412373,
      "unique_users": 81178.9108797918,
      "pages_per_visit": 1.92288417479056
    },
    {
      "global_rank": 20402,
      "category_rank": 248,
      "domain": "everyjobforme.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4287112.02857955,
      "curr_month_visits": 4287112.02857955,
      "unique_users": 2584047.50024496,
      "pages_per_visit": 2.45716558341026
    },
    {
      "global_rank": 23826,
      "category_rank": 248,
      "domain": "temosvaga.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1407295.91421513,
      "curr_month_visits": 1407295.91421513,
      "unique_users": 213710.505215529,
      "pages_per_visit": 12.4916178299138
    },
    {
      "global_rank": 232106,
      "category_rank": 249,
      "domain": "tgu-dpo.ru",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 354051.463154143,
      "curr_month_visits": 354051.463154143,
      "unique_users": 139112.982932504,
      "pages_per_visit": 4.24678778154271
    },
    {
      "global_rank": 222144,
      "category_rank": 249,
      "domain": "instantlymodern.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 236909.196508832,
      "curr_month_visits": 236909.196508832,
      "unique_users": 137578.000371607,
      "pages_per_visit": 4.92287682167369
    },
    {
      "global_rank": 20440,
      "category_rank": 249,
      "domain": "jobindex.dk",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2944030.09508089,
      "curr_month_visits": 2944030.09508089,
      "unique_users": 813593.727579218,
      "pages_per_visit": 4.63371430847432
    },
    {
      "global_rank": 23963,
      "category_rank": 249,
      "domain": "ultipro.ca",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2287167.63136423,
      "curr_month_visits": 2287167.63136423,
      "unique_users": 744149.494053479,
      "pages_per_visit": 5.7373671803973
    },
    {
      "global_rank": 20468,
      "category_rank": 250,
      "domain": "rabota.ru",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3421788.74204835,
      "curr_month_visits": 3421788.74204835,
      "unique_users": 1540273.29163451,
      "pages_per_visit": 3.43325186724884
    },
    {
      "global_rank": 232427,
      "category_rank": 250,
      "domain": "dareway.com.cn",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 438255.764767629,
      "curr_month_visits": 438255.764767629,
      "unique_users": 202473.801072287,
      "pages_per_visit": 2.55455272955376
    },
    {
      "global_rank": 222617,
      "category_rank": 250,
      "domain": "joveo.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 145405.726710827,
      "curr_month_visits": 145405.726710827,
      "unique_users": 50408.0674765741,
      "pages_per_visit": 7.05993887175032
    },
    {
      "global_rank": 233483,
      "category_rank": 251,
      "domain": "ravinews.kr",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 130180.213540502,
      "curr_month_visits": 130180.213540502,
      "unique_users": 105702.884556892,
      "pages_per_visit": 2.60130798926954
    },
    {
      "global_rank": 20608,
      "category_rank": 251,
      "domain": "mid-tenshoku.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2552002.68663582,
      "curr_month_visits": 2552002.68663582,
      "unique_users": 838377.577045311,
      "pages_per_visit": 6.63193474686765
    },
    {
      "global_rank": 24357,
      "category_rank": 251,
      "domain": "job-room.ch",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2084169.27269299,
      "curr_month_visits": 2084169.27269299,
      "unique_users": 375826.867750363,
      "pages_per_visit": 6.66981388148378
    },
    {
      "global_rank": 223562,
      "category_rank": 251,
      "domain": "xiaoyuanzhaopin.net",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 205465.862499423,
      "curr_month_visits": 205465.862499423,
      "unique_users": 46740.8319133959,
      "pages_per_visit": 1.26148150194076
    },
    {
      "global_rank": 233665,
      "category_rank": 252,
      "domain": "genialnet.com.br",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 202535.87729571,
      "curr_month_visits": 202535.87729571,
      "unique_users": 11894.6940792476,
      "pages_per_visit": 5.39650883364083
    },
    {
      "global_rank": 20618,
      "category_rank": 252,
      "domain": "privatter.me",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2730502.96835819,
      "curr_month_visits": 2730502.96835819,
      "unique_users": 514111.454243807,
      "pages_per_visit": 3.65686409167828
    },
    {
      "global_rank": 223579,
      "category_rank": 252,
      "domain": "alphacollege.me",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 114032.998918929,
      "curr_month_visits": 114032.998918929,
      "unique_users": 10152.1441959963,
      "pages_per_visit": 12.2096334375851
    },
    {
      "global_rank": 234185,
      "category_rank": 253,
      "domain": "typingspeedtests.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 127119.050073201,
      "curr_month_visits": 127119.050073201,
      "unique_users": 83961.8272913263,
      "pages_per_visit": 5.24552530089936
    },
    {
      "global_rank": 223820,
      "category_rank": 253,
      "domain": "careers.toasttab.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 201446.634235399,
      "curr_month_visits": 201446.634235399,
      "unique_users": 101246.515323182,
      "pages_per_visit": 2.43008766200669
    },
    {
      "global_rank": 24734,
      "category_rank": 253,
      "domain": "ejobs.ro",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2478288.63614239,
      "curr_month_visits": 2478288.63614239,
      "unique_users": 878081.400582935,
      "pages_per_visit": 4.69979901488716
    },
    {
      "global_rank": 20903,
      "category_rank": 253,
      "domain": "infostud.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3166768.89324341,
      "curr_month_visits": 3166768.89324341,
      "unique_users": 814010.406291208,
      "pages_per_visit": 4.56771447344057
    },
    {
      "global_rank": 227236,
      "category_rank": 254,
      "domain": "kanzhun-inc.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 90552.6983197904,
      "curr_month_visits": 90552.6983197904,
      "unique_users": 4786.31529291943,
      "pages_per_visit": 14.1165671254519
    },
    {
      "global_rank": 20940,
      "category_rank": 254,
      "domain": "horadoempregodf.com.br",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4244790.19905839,
      "curr_month_visits": 4244790.19905839,
      "unique_users": 1606114.46443681,
      "pages_per_visit": 2.51884504303692
    },
    {
      "global_rank": 234746,
      "category_rank": 254,
      "domain": "tneaonline.org",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 192198.926504596,
      "curr_month_visits": 192198.926504596,
      "unique_users": 72042.0248879747,
      "pages_per_visit": 6.91064791565435
    },
    {
      "global_rank": 237464,
      "category_rank": 255,
      "domain": "bollyflix.org.in",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 372409.365507827,
      "curr_month_visits": 372409.365507827,
      "unique_users": 86172.7323360797,
      "pages_per_visit": 5.24307963771411
    },
    {
      "global_rank": 228632,
      "category_rank": 255,
      "domain": "91wllm.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 170734.90372492,
      "curr_month_visits": 170734.90372492,
      "unique_users": 72589.9694864706,
      "pages_per_visit": 7.62728063588486
    },
    {
      "global_rank": 20961,
      "category_rank": 255,
      "domain": "aus.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2510057.70309372,
      "curr_month_visits": 2510057.70309372,
      "unique_users": 537120.560329295,
      "pages_per_visit": 6.14806367234995
    },
    {
      "global_rank": 228798,
      "category_rank": 256,
      "domain": "hiringstores.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 361770.791636728,
      "curr_month_visits": 361770.791636728,
      "unique_users": 219558.398621798,
      "pages_per_visit": 1.69252341609518
    },
    {
      "global_rank": 20998,
      "category_rank": 256,
      "domain": "whatjobs.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3470398.1537203,
      "curr_month_visits": 3470398.1537203,
      "unique_users": 1784724.92884121,
      "pages_per_visit": 2.29125432972891
    },
    {
      "global_rank": 238054,
      "category_rank": 256,
      "domain": "builtinchicago.org",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 183577.481570953,
      "curr_month_visits": 183577.481570953,
      "unique_users": 102973.174616646,
      "pages_per_visit": 3.62202295575728
    },
    {
      "global_rank": 24950,
      "category_rank": 256,
      "domain": "careers.fedex.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2455925.73497924,
      "curr_month_visits": 2455925.73497924,
      "unique_users": 1266013.68963404,
      "pages_per_visit": 3.74427524082615
    },
    {
      "global_rank": 229345,
      "category_rank": 257,
      "domain": "briohr.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 227628.351633919,
      "curr_month_visits": 227628.351633919,
      "unique_users": 67256.6360993675,
      "pages_per_visit": 2.88110355347295
    },
    {
      "global_rank": 25103,
      "category_rank": 257,
      "domain": "pole-emploi.fr",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2286236.8070497,
      "curr_month_visits": 2286236.8070497,
      "unique_users": 787204.000011193,
      "pages_per_visit": 5.08190276441995
    },
    {
      "global_rank": 239636,
      "category_rank": 257,
      "domain": "careers.snowflake.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 234580.195049326,
      "curr_month_visits": 234580.195049326,
      "unique_users": 124180.265796838,
      "pages_per_visit": 3.85469027082909
    },
    {
      "global_rank": 21343,
      "category_rank": 258,
      "domain": "abfrl.in",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2558530.41392889,
      "curr_month_visits": 2558530.41392889,
      "unique_users": 1605346.54231249,
      "pages_per_visit": 4.43227317419836
    },
    {
      "global_rank": 239671,
      "category_rank": 258,
      "domain": "bizlibrary.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 107188.919167252,
      "curr_month_visits": 107188.919167252,
      "unique_users": 49669.1730848265,
      "pages_per_visit": 6.09264106083067
    },
    {
      "global_rank": 229660,
      "category_rank": 258,
      "domain": "capco.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 194464.743627712,
      "curr_month_visits": 194464.743627712,
      "unique_users": 84833.4219977468,
      "pages_per_visit": 3.37083666999681
    },
    {
      "global_rank": 25151,
      "category_rank": 258,
      "domain": "wyndhamdestinations.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2050960.65266277,
      "curr_month_visits": 2050960.65266277,
      "unique_users": 781856.557562204,
      "pages_per_visit": 7.04438767736206
    },
    {
      "global_rank": 240719,
      "category_rank": 259,
      "domain": "bd.cn",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 187397.72551369,
      "curr_month_visits": 187397.72551369,
      "unique_users": 54972.7120926926,
      "pages_per_visit": 3.99320326473917
    },
    {
      "global_rank": 21420,
      "category_rank": 259,
      "domain": "apeuni.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2570062.76617945,
      "curr_month_visits": 2570062.76617945,
      "unique_users": 274877.186133287,
      "pages_per_visit": 11.2499375067394
    },
    {
      "global_rank": 232502,
      "category_rank": 260,
      "domain": "duomian.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 131544.383005572,
      "curr_month_visits": 131544.383005572,
      "unique_users": 61903.6431336321,
      "pages_per_visit": 5.10200857336302
    },
    {
      "global_rank": 240899,
      "category_rank": 260,
      "domain": "thomas.co",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 197887.761072142,
      "curr_month_visits": 197887.761072142,
      "unique_users": 104943.767218206,
      "pages_per_visit": 2.08540303911721
    },
    {
      "global_rank": 25351,
      "category_rank": 261,
      "domain": "erecruit.co",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1914098.40171524,
      "curr_month_visits": 1914098.40171524,
      "unique_users": 781427.915473185,
      "pages_per_visit": 7.04506472493497
    },
    {
      "global_rank": 21607,
      "category_rank": 261,
      "domain": "fullreplays.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3927825.53032414,
      "curr_month_visits": 3927825.53032414,
      "unique_users": 1109397.9815308,
      "pages_per_visit": 2.65650924866962
    },
    {
      "global_rank": 241181,
      "category_rank": 261,
      "domain": "jacksonville.gov",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 226283.997911704,
      "curr_month_visits": 226283.997911704,
      "unique_users": 142964.88868786,
      "pages_per_visit": 1.91681649260376
    },
    {
      "global_rank": 232822,
      "category_rank": 261,
      "domain": "careers.insidehighered.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 227080.73317261,
      "curr_month_visits": 227080.73317261,
      "unique_users": 108724.802647794,
      "pages_per_visit": 2.20973713412807
    },
    {
      "global_rank": 235851,
      "category_rank": 262,
      "domain": "iongroup.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 182585.225523978,
      "curr_month_visits": 182585.225523978,
      "unique_users": 86560.7363602633,
      "pages_per_visit": 3.47359475982275
    },
    {
      "global_rank": 242705,
      "category_rank": 262,
      "domain": "npp.lk",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 133439.25381911,
      "curr_month_visits": 133439.25381911,
      "unique_users": 64933.5301435479,
      "pages_per_visit": 3.0437400461998
    },
    {
      "global_rank": 25510,
      "category_rank": 263,
      "domain": "jobdiva.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2018221.42301623,
      "curr_month_visits": 2018221.42301623,
      "unique_users": 835373.765195753,
      "pages_per_visit": 7.30188727406551
    },
    {
      "global_rank": 238412,
      "category_rank": 263,
      "domain": "oshacademy.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 116787.275589954,
      "curr_month_visits": 116787.275589954,
      "unique_users": 46190.5490436031,
      "pages_per_visit": 11.2183401709954
    },
    {
      "global_rank": 242919,
      "category_rank": 263,
      "domain": "career.paragon-innovation.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 130062.688713542,
      "curr_month_visits": 130062.688713542,
      "unique_users": 43016.6844238426,
      "pages_per_visit": 5.72636161570378
    },
    {
      "global_rank": 244085,
      "category_rank": 264,
      "domain": "figure.ai",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 164718.73744109,
      "curr_month_visits": 164718.73744109,
      "unique_users": 84861.6963216661,
      "pages_per_visit": 2.99917530834147
    },
    {
      "global_rank": 238432,
      "category_rank": 264,
      "domain": "cappfinity.io",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 164081.167158957,
      "curr_month_visits": 164081.167158957,
      "unique_users": 85969.0041170184,
      "pages_per_visit": 2.9613256531518
    },
    {
      "global_rank": 25515,
      "category_rank": 264,
      "domain": "hp.gov.in",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2078756.27565404,
      "curr_month_visits": 2078756.27565404,
      "unique_users": 491009.315439199,
      "pages_per_visit": 8.90235102244633
    },
    {
      "global_rank": 21885,
      "category_rank": 264,
      "domain": "builtin.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3196846.12391807,
      "curr_month_visits": 3196846.12391807,
      "unique_users": 1868305.6053141,
      "pages_per_visit": 3.10647161589105
    },
    {
      "global_rank": 25600,
      "category_rank": 265,
      "domain": "trabajando.cl",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2174959.20387383,
      "curr_month_visits": 2174959.20387383,
      "unique_users": 740360.567819085,
      "pages_per_visit": 4.71748738540582
    },
    {
      "global_rank": 238860,
      "category_rank": 265,
      "domain": "xinrenxinshi.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 163204.066327402,
      "curr_month_visits": 163204.066327402,
      "unique_users": 63049.4642890042,
      "pages_per_visit": 4.51353538388786
    },
    {
      "global_rank": 22067,
      "category_rank": 265,
      "domain": "trabajo.org",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3412032.90802749,
      "curr_month_visits": 3412032.90802749,
      "unique_users": 2143313.77266179,
      "pages_per_visit": 2.06662368777717
    },
    {
      "global_rank": 246896,
      "category_rank": 265,
      "domain": "careers.cencora.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 123298.161757673,
      "curr_month_visits": 123298.161757673,
      "unique_users": 69096.2320680028,
      "pages_per_visit": 4.56074878590385
    },
    {
      "global_rank": 25718,
      "category_rank": 266,
      "domain": "isinolsun.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2258658.88142288,
      "curr_month_visits": 2258658.88142288,
      "unique_users": 1021616.42574129,
      "pages_per_visit": 4.85440269923303
    },
    {
      "global_rank": 250405,
      "category_rank": 266,
      "domain": "jobs.gem.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 156880.724127866,
      "curr_month_visits": 156880.724127866,
      "unique_users": 92765.4408543412,
      "pages_per_visit": 1.69968006122632
    },
    {
      "global_rank": 239732,
      "category_rank": 266,
      "domain": "lunchclub.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 181253.421553853,
      "curr_month_visits": 181253.421553853,
      "unique_users": 40973.4683098605,
      "pages_per_visit": 4.55157387962771
    },
    {
      "global_rank": 251667,
      "category_rank": 267,
      "domain": "inside-sephora.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 159953.004724311,
      "curr_month_visits": 159953.004724311,
      "unique_users": 92693.1285905219,
      "pages_per_visit": 3.84660888127735
    },
    {
      "global_rank": 25762,
      "category_rank": 267,
      "domain": "careers.marriott.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2137358.86838651,
      "curr_month_visits": 2137358.86838651,
      "unique_users": 907589.461669274,
      "pages_per_visit": 2.45685182819153
    },
    {
      "global_rank": 22210,
      "category_rank": 267,
      "domain": "karriere.at",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2501980.51695596,
      "curr_month_visits": 2501980.51695596,
      "unique_users": 812372.667652399,
      "pages_per_visit": 4.25653776931236
    },
    {
      "global_rank": 25821,
      "category_rank": 268,
      "domain": "scribehow.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2486610.94912184,
      "curr_month_visits": 2486610.94912184,
      "unique_users": 1532596.08501473,
      "pages_per_visit": 2.36082334057402
    },
    {
      "global_rank": 252090,
      "category_rank": 268,
      "domain": "career.abchina.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 236499.565275856,
      "curr_month_visits": 236499.565275856,
      "unique_users": 95232.7650752281,
      "pages_per_visit": 6.46046568728876
    },
    {
      "global_rank": 240692,
      "category_rank": 268,
      "domain": "criteriacorp.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 203115.669077396,
      "curr_month_visits": 203115.669077396,
      "unique_users": 96609.2005540018,
      "pages_per_visit": 2.81814151345987
    },
    {
      "global_rank": 22244,
      "category_rank": 268,
      "domain": "offerboom.top",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3642856.63640204,
      "curr_month_visits": 3642856.63640204,
      "unique_users": 1463403.60519781,
      "pages_per_visit": 4.88309195768423
    },
    {
      "global_rank": 22334,
      "category_rank": 269,
      "domain": "startuppedia.in",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3295630.71374366,
      "curr_month_visits": 3295630.71374366,
      "unique_users": 2013898.39271328,
      "pages_per_visit": 2.20785875997613
    },
    {
      "global_rank": 25833,
      "category_rank": 269,
      "domain": "sha.go.ke",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1672376.12746869,
      "curr_month_visits": 1672376.12746869,
      "unique_users": 345480.236232123,
      "pages_per_visit": 7.4366841948939
    },
    {
      "global_rank": 253200,
      "category_rank": 270,
      "domain": "luandre.com.br",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 165625.433711642,
      "curr_month_visits": 165625.433711642,
      "unique_users": 78023.0361538965,
      "pages_per_visit": 3.64951449904836
    },
    {
      "global_rank": 241955,
      "category_rank": 270,
      "domain": "career-inspiration.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 170107.50252165,
      "curr_month_visits": 170107.50252165,
      "unique_users": 94725.7063768742,
      "pages_per_visit": 2.57788351824482
    },
    {
      "global_rank": 241972,
      "category_rank": 271,
      "domain": "lifelenz.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 164333.968422344,
      "curr_month_visits": 164333.968422344,
      "unique_users": 20791.3415239613,
      "pages_per_visit": 7.37124090655331
    },
    {
      "global_rank": 254153,
      "category_rank": 271,
      "domain": "myfranchise.kr",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 105525.707872936,
      "curr_month_visits": 105525.707872936,
      "unique_users": 45721.1219965317,
      "pages_per_visit": 8.04766881032753
    },
    {
      "global_rank": 26265,
      "category_rank": 271,
      "domain": "jobs.target.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2332712.07240206,
      "curr_month_visits": 2332712.07240206,
      "unique_users": 1305779.32821952,
      "pages_per_visit": 3.16494473391597
    },
    {
      "global_rank": 242602,
      "category_rank": 272,
      "domain": "myconsultingoffer.org",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 252601.843748028,
      "curr_month_visits": 252601.843748028,
      "unique_users": 128965.71322053,
      "pages_per_visit": 1.73186617135923
    },
    {
      "global_rank": 22440,
      "category_rank": 272,
      "domain": "harri.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2564698.91050324,
      "curr_month_visits": 2564698.91050324,
      "unique_users": 1007197.69086484,
      "pages_per_visit": 5.88234229502795
    },
    {
      "global_rank": 26368,
      "category_rank": 272,
      "domain": "myavionte.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2071670.11510305,
      "curr_month_visits": 2071670.11510305,
      "unique_users": 398798.741821223,
      "pages_per_visit": 8.4717997938841
    },
    {
      "global_rank": 243312,
      "category_rank": 273,
      "domain": "builtinsf.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 183289.676142358,
      "curr_month_visits": 183289.676142358,
      "unique_users": 104391.605179341,
      "pages_per_visit": 2.51746790689144
    },
    {
      "global_rank": 256564,
      "category_rank": 273,
      "domain": "eddy.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 209536.819099613,
      "curr_month_visits": 209536.819099613,
      "unique_users": 100454.150754542,
      "pages_per_visit": 2.53580926658851
    },
    {
      "global_rank": 26407,
      "category_rank": 273,
      "domain": "jnj.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2463547.22043775,
      "curr_month_visits": 2463547.22043775,
      "unique_users": 874691.036095846,
      "pages_per_visit": 4.52327043441161
    },
    {
      "global_rank": 243464,
      "category_rank": 274,
      "domain": "sig.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 207899.655667561,
      "curr_month_visits": 207899.655667561,
      "unique_users": 106353.881328127,
      "pages_per_visit": 3.33202143670043
    },
    {
      "global_rank": 257654,
      "category_rank": 274,
      "domain": "escreengo.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 174252.280190849,
      "curr_month_visits": 174252.280190849,
      "unique_users": 103181.178131322,
      "pages_per_visit": 3.50436495029366
    },
    {
      "global_rank": 259995,
      "category_rank": 275,
      "domain": "careers.wolt.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 224568.037230016,
      "curr_month_visits": 224568.037230016,
      "unique_users": 118549.983996039,
      "pages_per_visit": 2.51520839148527
    },
    {
      "global_rank": 22981,
      "category_rank": 275,
      "domain": "roberthalf.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2651482.1389112,
      "curr_month_visits": 2651482.1389112,
      "unique_users": 1483495.59320054,
      "pages_per_visit": 4.59124441287995
    },
    {
      "global_rank": 243557,
      "category_rank": 275,
      "domain": "techjobalert.in",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 216132.054264885,
      "curr_month_visits": 216132.054264885,
      "unique_users": 60677.1154468299,
      "pages_per_visit": 3.26999637119303
    },
    {
      "global_rank": 261109,
      "category_rank": 276,
      "domain": "onehcm.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 109311.677406057,
      "curr_month_visits": 109311.677406057,
      "unique_users": 29420.3555626777,
      "pages_per_visit": 7.11702539495069
    },
    {
      "global_rank": 244694,
      "category_rank": 276,
      "domain": "nhrdc.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 90856.3918871544,
      "curr_month_visits": 90856.3918871544,
      "unique_users": 39810.6306204347,
      "pages_per_visit": 21.0788092796454
    },
    {
      "global_rank": 26491,
      "category_rank": 276,
      "domain": "livecareer.co.uk",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1345374.96265333,
      "curr_month_visits": 1345374.96265333,
      "unique_users": 785814.982252336,
      "pages_per_visit": 10.7950668443811
    },
    {
      "global_rank": 245550,
      "category_rank": 277,
      "domain": "pa-hrsuite-production.s3.amazonaws.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 165178.777268426,
      "curr_month_visits": 165178.777268426,
      "unique_users": 87542.441221196,
      "pages_per_visit": 2.79301558242051
    },
    {
      "global_rank": 262339,
      "category_rank": 277,
      "domain": "torontofanshawe.ca",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 115377.620968156,
      "curr_month_visits": 115377.620968156,
      "unique_users": 11136.2431222998,
      "pages_per_visit": 13.830610398792
    },
    {
      "global_rank": 262577,
      "category_rank": 278,
      "domain": "thepower.education",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 327814.005393642,
      "curr_month_visits": 327814.005393642,
      "unique_users": 160681.690450261,
      "pages_per_visit": 2.27754870393152
    },
    {
      "global_rank": 26738,
      "category_rank": 278,
      "domain": "hellowork.careers",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2451284.58555989,
      "curr_month_visits": 2451284.58555989,
      "unique_users": 1076896.67069216,
      "pages_per_visit": 3.48931249228842
    },
    {
      "global_rank": 246011,
      "category_rank": 278,
      "domain": "hirevue-app.eu",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 170470.922147746,
      "curr_month_visits": 170470.922147746,
      "unique_users": 74872.1502695441,
      "pages_per_visit": 6.06913766316787
    },
    {
      "global_rank": 263440,
      "category_rank": 279,
      "domain": "instacart.careers",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 213537.953575381,
      "curr_month_visits": 213537.953575381,
      "unique_users": 136678.524878661,
      "pages_per_visit": 2.21505274087711
    },
    {
      "global_rank": 249068,
      "category_rank": 279,
      "domain": "hrloo.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 258749.871983907,
      "curr_month_visits": 258749.871983907,
      "unique_users": 167351.61340764,
      "pages_per_visit": 2.86920859079004
    },
    {
      "global_rank": 26912,
      "category_rank": 280,
      "domain": "linkareer.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2365167.04910038,
      "curr_month_visits": 2365167.04910038,
      "unique_users": 940354.776399222,
      "pages_per_visit": 4.07887617845209
    },
    {
      "global_rank": 263583,
      "category_rank": 280,
      "domain": "coachhub.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 178332.111551278,
      "curr_month_visits": 178332.111551278,
      "unique_users": 68915.6301992431,
      "pages_per_visit": 2.35513865430846
    },
    {
      "global_rank": 250191,
      "category_rank": 280,
      "domain": "hrtps.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 170700.361200398,
      "curr_month_visits": 170700.361200398,
      "unique_users": 83838.2635585594,
      "pages_per_visit": 2.46909129956022
    },
    {
      "global_rank": 250355,
      "category_rank": 281,
      "domain": "cybervidya.net",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 288484.367010389,
      "curr_month_visits": 288484.367010389,
      "unique_users": 46891.7959836552,
      "pages_per_visit": 4.02517817059588
    },
    {
      "global_rank": 26958,
      "category_rank": 281,
      "domain": "dmw.gov.ph",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1479536.40431853,
      "curr_month_visits": 1479536.40431853,
      "unique_users": 371290.503315232,
      "pages_per_visit": 7.49371067605265
    },
    {
      "global_rank": 264446,
      "category_rank": 281,
      "domain": "cometoplay.kr",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 82244.8487452958,
      "curr_month_visits": 82244.8487452958,
      "unique_users": 27439.1564360682,
      "pages_per_visit": 12.2775681246743
    },
    {
      "global_rank": 265661,
      "category_rank": 282,
      "domain": "eightren10.sharepoint.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 228016.064722373,
      "curr_month_visits": 228016.064722373,
      "unique_users": 3010.79269983415,
      "pages_per_visit": 3.48675119947837
    },
    {
      "global_rank": 250460,
      "category_rank": 282,
      "domain": "cappats.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 225370.752083431,
      "curr_month_visits": 225370.752083431,
      "unique_users": 35527.7915509064,
      "pages_per_visit": 2.88830610720037
    },
    {
      "global_rank": 27041,
      "category_rank": 282,
      "domain": "jobshubusa.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1646544.33793449,
      "curr_month_visits": 1646544.33793449,
      "unique_users": 879600.374431871,
      "pages_per_visit": 2.85194345972541
    },
    {
      "global_rank": 250467,
      "category_rank": 283,
      "domain": "devskiller.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 176122.788266942,
      "curr_month_visits": 176122.788266942,
      "unique_users": 83488.2720380543,
      "pages_per_visit": 2.78044271341313
    },
    {
      "global_rank": 266464,
      "category_rank": 283,
      "domain": "evacg.org",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 140303.683846927,
      "curr_month_visits": 140303.683846927,
      "unique_users": 39184.0302043285,
      "pages_per_visit": 4.54639529503718
    },
    {
      "global_rank": 27074,
      "category_rank": 283,
      "domain": "inappdb.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2473228.62698408,
      "curr_month_visits": 2473228.62698408,
      "unique_users": 786296.598370338,
      "pages_per_visit": 2.51231391040409
    },
    {
      "global_rank": 27229,
      "category_rank": 284,
      "domain": "comwel.or.kr",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1912829.83486105,
      "curr_month_visits": 1912829.83486105,
      "unique_users": 626696.629920417,
      "pages_per_visit": 5.32637589454715
    },
    {
      "global_rank": 250844,
      "category_rank": 284,
      "domain": "hcmcloud.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 145976.227068531,
      "curr_month_visits": 145976.227068531,
      "unique_users": 53299.2005387203,
      "pages_per_visit": 8.27992986100209
    },
    {
      "global_rank": 266836,
      "category_rank": 284,
      "domain": "jobs.chattr.ai",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 174645.416070769,
      "curr_month_visits": 174645.416070769,
      "unique_users": 110090.505019608,
      "pages_per_visit": 2.12027808052249
    },
    {
      "global_rank": 27237,
      "category_rank": 285,
      "domain": "bne.com.br",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2060772.93233882,
      "curr_month_visits": 2060772.93233882,
      "unique_users": 1066613.76452558,
      "pages_per_visit": 4.42701998729477
    },
    {
      "global_rank": 24215,
      "category_rank": 285,
      "domain": "acl.cc",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2630654.34963644,
      "curr_month_visits": 2630654.34963644,
      "unique_users": 1450184.24763302,
      "pages_per_visit": 1.53113608926678
    },
    {
      "global_rank": 251087,
      "category_rank": 285,
      "domain": "outmatch.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 154275.658934319,
      "curr_month_visits": 154275.658934319,
      "unique_users": 104632.685939776,
      "pages_per_visit": 4.27714946780858
    },
    {
      "global_rank": 267518,
      "category_rank": 285,
      "domain": "smartr.me",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 237536.971856774,
      "curr_month_visits": 237536.971856774,
      "unique_users": 132745.890647384,
      "pages_per_visit": 1.46827248566658
    },
    {
      "global_rank": 268175,
      "category_rank": 286,
      "domain": "toppan-edge.co.jp",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 97976.9116293514,
      "curr_month_visits": 97976.9116293514,
      "unique_users": 38048.7346254992,
      "pages_per_visit": 7.03724997192126
    },
    {
      "global_rank": 251168,
      "category_rank": 286,
      "domain": "vinkjobs.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 217954.299317377,
      "curr_month_visits": 217954.299317377,
      "unique_users": 60493.7451350947,
      "pages_per_visit": 3.13195756888019
    },
    {
      "global_rank": 268828,
      "category_rank": 287,
      "domain": "мсп.рф",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 111288.017990613,
      "curr_month_visits": 111288.017990613,
      "unique_users": 48823.0352787914,
      "pages_per_visit": 4.53241488547826
    },
    {
      "global_rank": 27318,
      "category_rank": 287,
      "domain": "snar.jp",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2242392.23896181,
      "curr_month_visits": 2242392.23896181,
      "unique_users": 497192.618962207,
      "pages_per_visit": 4.81771788324374
    },
    {
      "global_rank": 251670,
      "category_rank": 287,
      "domain": "ismartrecruit.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 174813.779593662,
      "curr_month_visits": 174813.779593662,
      "unique_users": 102586.79051585,
      "pages_per_visit": 2.74254616027703
    },
    {
      "global_rank": 24610,
      "category_rank": 287,
      "domain": "gamatotv.info",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2807787.17101816,
      "curr_month_visits": 2807787.17101816,
      "unique_users": 427716.855562201,
      "pages_per_visit": 4.13292923402492
    },
    {
      "global_rank": 24626,
      "category_rank": 288,
      "domain": "hiringroom.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2677203.50291551,
      "curr_month_visits": 2677203.50291551,
      "unique_users": 1270632.28290981,
      "pages_per_visit": 3.40416243023804
    },
    {
      "global_rank": 27454,
      "category_rank": 288,
      "domain": "join.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1984445.97273275,
      "curr_month_visits": 1984445.97273275,
      "unique_users": 967599.508206996,
      "pages_per_visit": 3.82585634418404
    },
    {
      "global_rank": 269442,
      "category_rank": 288,
      "domain": "1hour.ai",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 100565.31809752,
      "curr_month_visits": 100565.31809752,
      "unique_users": 15728.4692633602,
      "pages_per_visit": 12.8915764914577
    },
    {
      "global_rank": 270948,
      "category_rank": 289,
      "domain": "picnicinternational.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 138292.737557261,
      "curr_month_visits": 138292.737557261,
      "unique_users": 27661.3324938496,
      "pages_per_visit": 5.83666723495116
    },
    {
      "global_rank": 27520,
      "category_rank": 289,
      "domain": "belmeta.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1859735.88966157,
      "curr_month_visits": 1859735.88966157,
      "unique_users": 444710.790735197,
      "pages_per_visit": 6.55420345093556
    },
    {
      "global_rank": 251818,
      "category_rank": 289,
      "domain": "karirlab.co",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 176865.883926111,
      "curr_month_visits": 176865.883926111,
      "unique_users": 79255.9005877578,
      "pages_per_visit": 3.70187531015592
    },
    {
      "global_rank": 251825,
      "category_rank": 290,
      "domain": "prepfully.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 179120.608005089,
      "curr_month_visits": 179120.608005089,
      "unique_users": 94690.8838262534,
      "pages_per_visit": 2.23506933221602
    },
    {
      "global_rank": 24750,
      "category_rank": 290,
      "domain": "kitalulus.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3134354.19749518,
      "curr_month_visits": 3134354.19749518,
      "unique_users": 1952248.9097585,
      "pages_per_visit": 2.7202830105198
    },
    {
      "global_rank": 272243,
      "category_rank": 290,
      "domain": "blr.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 139341.812986157,
      "curr_month_visits": 139341.812986157,
      "unique_users": 79116.4524675554,
      "pages_per_visit": 2.89866557910955
    },
    {
      "global_rank": 251877,
      "category_rank": 291,
      "domain": "sberpodbor.ru",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 214999.160147556,
      "curr_month_visits": 214999.160147556,
      "unique_users": 11236.3582091856,
      "pages_per_visit": 9.0860400855721
    },
    {
      "global_rank": 27827,
      "category_rank": 291,
      "domain": "mostaql.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2214814.5290411,
      "curr_month_visits": 2214814.5290411,
      "unique_users": 636164.500235211,
      "pages_per_visit": 4.856620684049
    },
    {
      "global_rank": 272763,
      "category_rank": 291,
      "domain": "kormedia.co.kr",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 107247.697550595,
      "curr_month_visits": 107247.697550595,
      "unique_users": 48810.805892905,
      "pages_per_visit": 2.61777075466969
    },
    {
      "global_rank": 27866,
      "category_rank": 292,
      "domain": "jobup.ch",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2143987.42679628,
      "curr_month_visits": 2143987.42679628,
      "unique_users": 580825.350075737,
      "pages_per_visit": 3.94447488152168
    },
    {
      "global_rank": 273044,
      "category_rank": 292,
      "domain": "careers.racetrac.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 117592.406410643,
      "curr_month_visits": 117592.406410643,
      "unique_users": 68991.8888945304,
      "pages_per_visit": 3.68270983344724
    },
    {
      "global_rank": 252757,
      "category_rank": 292,
      "domain": "jobs.paloaltonetworks.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 173653.542143135,
      "curr_month_visits": 173653.542143135,
      "unique_users": 83953.6182867881,
      "pages_per_visit": 3.6392239413822
    },
    {
      "global_rank": 273510,
      "category_rank": 293,
      "domain": "16labo.jp",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 170569.262267996,
      "curr_month_visits": 170569.262267996,
      "unique_users": 120084.824726123,
      "pages_per_visit": 1.68002723782989
    },
    {
      "global_rank": 27927,
      "category_rank": 293,
      "domain": "vieclam24h.vn",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2102688.13026396,
      "curr_month_visits": 2102688.13026396,
      "unique_users": 833423.123986837,
      "pages_per_visit": 5.33082603566849
    },
    {
      "global_rank": 253451,
      "category_rank": 293,
      "domain": "careers.alvarezandmarsal.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 163230.199474623,
      "curr_month_visits": 163230.199474623,
      "unique_users": 86178.9081088075,
      "pages_per_visit": 3.49904244366949
    },
    {
      "global_rank": 274722,
      "category_rank": 294,
      "domain": "zurl.to",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 234333.006734605,
      "curr_month_visits": 234333.006734605,
      "unique_users": 104788.692866219,
      "pages_per_visit": 1.50503096462856
    },
    {
      "global_rank": 27996,
      "category_rank": 294,
      "domain": "convocatoriasdetrabajo.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2256018.94383998,
      "curr_month_visits": 2256018.94383998,
      "unique_users": 653343.09578004,
      "pages_per_visit": 4.42758971266426
    },
    {
      "global_rank": 275468,
      "category_rank": 295,
      "domain": "maehwasup.wordpress.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 302138.834114833,
      "curr_month_visits": 302138.834114833,
      "unique_users": 45209.2916579471,
      "pages_per_visit": 4.165406276631
    },
    {
      "global_rank": 28010,
      "category_rank": 295,
      "domain": "careers.tiktok.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2284142.16977804,
      "curr_month_visits": 2284142.16977804,
      "unique_users": 904038.472500914,
      "pages_per_visit": 4.30853032759916
    },
    {
      "global_rank": 254421,
      "category_rank": 295,
      "domain": "willhire.co",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 131281.02243753,
      "curr_month_visits": 131281.02243753,
      "unique_users": 73987.4186127605,
      "pages_per_visit": 4.0018828564423
    },
    {
      "global_rank": 25213,
      "category_rank": 296,
      "domain": "indeedassessments.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 6046232.10508058,
      "curr_month_visits": 6046232.10508058,
      "unique_users": 3543397.01633289,
      "pages_per_visit": 3.20332952843106
    },
    {
      "global_rank": 28018,
      "category_rank": 296,
      "domain": "mchire.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2192798.17509848,
      "curr_month_visits": 2192798.17509848,
      "unique_users": 1049842.14914673,
      "pages_per_visit": 3.61784512855925
    },
    {
      "global_rank": 276177,
      "category_rank": 296,
      "domain": "kdiwin.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 101395.891798069,
      "curr_month_visits": 101395.891798069,
      "unique_users": 8230.79160388227,
      "pages_per_visit": 11.7066151566449
    },
    {
      "global_rank": 25323,
      "category_rank": 297,
      "domain": "jobtalk.jp",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2704847.12402345,
      "curr_month_visits": 2704847.12402345,
      "unique_users": 1632033.18638572,
      "pages_per_visit": 2.72064740091395
    },
    {
      "global_rank": 276339,
      "category_rank": 297,
      "domain": "dalecarnegie.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 154440.920400134,
      "curr_month_visits": 154440.920400134,
      "unique_users": 84354.5946398586,
      "pages_per_visit": 2.87460540147718
    },
    {
      "global_rank": 255309,
      "category_rank": 297,
      "domain": "careers.homedepot.ca",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 158015.627442123,
      "curr_month_visits": 158015.627442123,
      "unique_users": 92126.5031537657,
      "pages_per_visit": 3.45639592093802
    },
    {
      "global_rank": 256438,
      "category_rank": 298,
      "domain": "testlify.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 156290.913433085,
      "curr_month_visits": 156290.913433085,
      "unique_users": 75228.1003501017,
      "pages_per_visit": 3.35631122995921
    },
    {
      "global_rank": 276978,
      "category_rank": 298,
      "domain": "resumai.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 126393.847215634,
      "curr_month_visits": 126393.847215634,
      "unique_users": 70143.9813561555,
      "pages_per_visit": 4.33235644416671
    },
    {
      "global_rank": 28134,
      "category_rank": 298,
      "domain": "talent-soft.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1734137.60358333,
      "curr_month_visits": 1734137.60358333,
      "unique_users": 869503.789200901,
      "pages_per_visit": 5.24233933834634
    },
    {
      "global_rank": 25435,
      "category_rank": 299,
      "domain": "agazetaempregosul.com.br",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3238325.67636819,
      "curr_month_visits": 3238325.67636819,
      "unique_users": 196847.565058759,
      "pages_per_visit": 4.99453229219722
    },
    {
      "global_rank": 28162,
      "category_rank": 299,
      "domain": "concentrix.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2285262.04298549,
      "curr_month_visits": 2285262.04298549,
      "unique_users": 841168.170339356,
      "pages_per_visit": 4.65352091167547
    },
    {
      "global_rank": 278788,
      "category_rank": 299,
      "domain": "gentok.net",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 1055744.86830477,
      "curr_month_visits": 1055744.86830477,
      "unique_users": 481793.173136126,
      "pages_per_visit": 1.4705081940438
    },
    {
      "global_rank": 258361,
      "category_rank": 299,
      "domain": "pccpa.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 115634.260956077,
      "curr_month_visits": 115634.260956077,
      "unique_users": 17511.4893053638,
      "pages_per_visit": 8.9597481092689
    },
    {
      "global_rank": 258914,
      "category_rank": 300,
      "domain": "cloud.hecom.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 133223.360986227,
      "curr_month_visits": 133223.360986227,
      "unique_users": 9770.99966953949,
      "pages_per_visit": 6.17612691237326
    },
    {
      "global_rank": 281249,
      "category_rank": 301,
      "domain": "mrfindia.net",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 103376.631430806,
      "curr_month_visits": 103376.631430806,
      "unique_users": 27124.072518766,
      "pages_per_visit": 4.16613210883975
    },
    {
      "global_rank": 261203,
      "category_rank": 301,
      "domain": "psico-smart.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 174516.66095647,
      "curr_month_visits": 174516.66095647,
      "unique_users": 74149.297525957,
      "pages_per_visit": 2.39562576048544
    },
    {
      "global_rank": 28373,
      "category_rank": 302,
      "domain": "abchina.com.cn",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1330952.58735111,
      "curr_month_visits": 1330952.58735111,
      "unique_users": 490409.981974268,
      "pages_per_visit": 7.84206559770195
    },
    {
      "global_rank": 261793,
      "category_rank": 302,
      "domain": "payclip.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 228735.946488576,
      "curr_month_visits": 228735.946488576,
      "unique_users": 108177.590594848,
      "pages_per_visit": 1.77508997188879
    },
    {
      "global_rank": 263026,
      "category_rank": 303,
      "domain": "sunwoda.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 105751.038061207,
      "curr_month_visits": 105751.038061207,
      "unique_users": 34070.0978140367,
      "pages_per_visit": 9.20128050766232
    },
    {
      "global_rank": 28381,
      "category_rank": 303,
      "domain": "alxafrica.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1440237.66275704,
      "curr_month_visits": 1440237.66275704,
      "unique_users": 502475.493299665,
      "pages_per_visit": 6.68553041369206
    },
    {
      "global_rank": 282476,
      "category_rank": 303,
      "domain": "invisible.co",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 171652.532796866,
      "curr_month_visits": 171652.532796866,
      "unique_users": 87612.2964412355,
      "pages_per_visit": 2.45579940372964
    },
    {
      "global_rank": 285127,
      "category_rank": 304,
      "domain": "careers.ansys.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 145244.832980373,
      "curr_month_visits": 145244.832980373,
      "unique_users": 74875.8712452355,
      "pages_per_visit": 2.53169544593808
    },
    {
      "global_rank": 28785,
      "category_rank": 304,
      "domain": "chai-research.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1528265.89103467,
      "curr_month_visits": 1528265.89103467,
      "unique_users": 722534.85135457,
      "pages_per_visit": 1.75897343026773
    },
    {
      "global_rank": 265449,
      "category_rank": 304,
      "domain": "careerjet.gr",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 176780.870223372,
      "curr_month_visits": 176780.870223372,
      "unique_users": 70583.4347600091,
      "pages_per_visit": 3.11066516913097
    },
    {
      "global_rank": 285299,
      "category_rank": 305,
      "domain": "kishoralo.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 195410.887662249,
      "curr_month_visits": 195410.887662249,
      "unique_users": 97593.3102351998,
      "pages_per_visit": 1.72743326907311
    },
    {
      "global_rank": 266571,
      "category_rank": 306,
      "domain": "hudsonrivertrading.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 138834.145178142,
      "curr_month_visits": 138834.145178142,
      "unique_users": 71411.6609168576,
      "pages_per_visit": 3.55383140290667
    },
    {
      "global_rank": 28838,
      "category_rank": 306,
      "domain": "learnus.org",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1712169.53643309,
      "curr_month_visits": 1712169.53643309,
      "unique_users": 81311.0379672598,
      "pages_per_visit": 10.8504481397852
    },
    {
      "global_rank": 288253,
      "category_rank": 306,
      "domain": "ahwxhr.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 140885.154433916,
      "curr_month_visits": 140885.154433916,
      "unique_users": 42733.0152527714,
      "pages_per_visit": 2.85733849906452
    },
    {
      "global_rank": 290020,
      "category_rank": 307,
      "domain": "pdgzf.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 77090.7661202217,
      "curr_month_visits": 77090.7661202217,
      "unique_users": 19487.5513531847,
      "pages_per_visit": 8.69232157829809
    },
    {
      "global_rank": 267001,
      "category_rank": 307,
      "domain": "risesmart.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 155148.508732225,
      "curr_month_visits": 155148.508732225,
      "unique_users": 32628.9169377581,
      "pages_per_visit": 5.30621610839184
    },
    {
      "global_rank": 267405,
      "category_rank": 308,
      "domain": "jobs.colostate.edu",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 108882.251350785,
      "curr_month_visits": 108882.251350785,
      "unique_users": 33363.5585330791,
      "pages_per_visit": 6.03148643633399
    },
    {
      "global_rank": 28873,
      "category_rank": 308,
      "domain": "jobs.siemens.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1865089.03848534,
      "curr_month_visits": 1865089.03848534,
      "unique_users": 845168.629073183,
      "pages_per_visit": 5.74396766858989
    },
    {
      "global_rank": 290320,
      "category_rank": 308,
      "domain": "culture-rh.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 167829.88866107,
      "curr_month_visits": 167829.88866107,
      "unique_users": 114009.543043256,
      "pages_per_visit": 1.52940341323768
    },
    {
      "global_rank": 26084,
      "category_rank": 308,
      "domain": "higher-hire.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2486634.51291705,
      "curr_month_visits": 2486634.51291705,
      "unique_users": 979991.566989797,
      "pages_per_visit": 3.00811085646485
    },
    {
      "global_rank": 29025,
      "category_rank": 309,
      "domain": "jobbkk.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2087005.83147202,
      "curr_month_visits": 2087005.83147202,
      "unique_users": 708631.61311124,
      "pages_per_visit": 5.40129234017503
    },
    {
      "global_rank": 270092,
      "category_rank": 309,
      "domain": "thrivetrm.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 137920.352157799,
      "curr_month_visits": 137920.352157799,
      "unique_users": 11227.3068289413,
      "pages_per_visit": 10.8521211782824
    },
    {
      "global_rank": 26159,
      "category_rank": 309,
      "domain": "zhiye.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2841351.91019148,
      "curr_month_visits": 2841351.91019148,
      "unique_users": 739418.910765985,
      "pages_per_visit": 8.38900358173142
    },
    {
      "global_rank": 292108,
      "category_rank": 309,
      "domain": "xiaoxintv.net",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 372264.812955275,
      "curr_month_visits": 372264.812955275,
      "unique_users": 81914.0338202146,
      "pages_per_visit": 1.10200363272086
    },
    {
      "global_rank": 294124,
      "category_rank": 310,
      "domain": "afrotechconference.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 124390.837234517,
      "curr_month_visits": 124390.837234517,
      "unique_users": 56599.8921814421,
      "pages_per_visit": 1.8717245855258
    },
    {
      "global_rank": 270869,
      "category_rank": 310,
      "domain": "careers.carmax.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 163597.919113117,
      "curr_month_visits": 163597.919113117,
      "unique_users": 92433.5034202267,
      "pages_per_visit": 2.47282798802731
    },
    {
      "global_rank": 271099,
      "category_rank": 311,
      "domain": "zkh.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 142814.335660713,
      "curr_month_visits": 142814.335660713,
      "unique_users": 48346.0311518774,
      "pages_per_visit": 5.10627527748901
    },
    {
      "global_rank": 295266,
      "category_rank": 311,
      "domain": "career.globant.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 160478.655680682,
      "curr_month_visits": 160478.655680682,
      "unique_users": 86783.9134825294,
      "pages_per_visit": 2.4981855465638
    },
    {
      "global_rank": 271354,
      "category_rank": 312,
      "domain": "ue.co",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 242114.506699,
      "curr_month_visits": 242114.506699,
      "unique_users": 193691.067618289,
      "pages_per_visit": 1.1918646653171
    },
    {
      "global_rank": 29108,
      "category_rank": 312,
      "domain": "webitrent.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1753014.03245877,
      "curr_month_visits": 1753014.03245877,
      "unique_users": 688521.880472788,
      "pages_per_visit": 5.48987008013249
    },
    {
      "global_rank": 295626,
      "category_rank": 312,
      "domain": "r365hire.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 118028.215518863,
      "curr_month_visits": 118028.215518863,
      "unique_users": 60289.4189663576,
      "pages_per_visit": 5.67124336112531
    },
    {
      "global_rank": 273096,
      "category_rank": 313,
      "domain": "taou.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 113263.205003067,
      "curr_month_visits": 113263.205003067,
      "unique_users": 35094.9283931208,
      "pages_per_visit": 9.21452266140898
    },
    {
      "global_rank": 296829,
      "category_rank": 313,
      "domain": "finbridge.co.kr",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 208788.474333117,
      "curr_month_visits": 208788.474333117,
      "unique_users": 145574.645708511,
      "pages_per_visit": 1.34246029229174
    },
    {
      "global_rank": 26448,
      "category_rank": 313,
      "domain": "snagajob.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2552326.81603664,
      "curr_month_visits": 2552326.81603664,
      "unique_users": 1588077.4664957,
      "pages_per_visit": 2.99727221767544
    },
    {
      "global_rank": 29345,
      "category_rank": 314,
      "domain": "career-tasu.jp",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1402720.54259903,
      "curr_month_visits": 1402720.54259903,
      "unique_users": 607351.605957593,
      "pages_per_visit": 9.04767957906716
    },
    {
      "global_rank": 273275,
      "category_rank": 314,
      "domain": "studentconsulting.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 137363.311877416,
      "curr_month_visits": 137363.311877416,
      "unique_users": 56813.409602693,
      "pages_per_visit": 5.4924666316106
    },
    {
      "global_rank": 26464,
      "category_rank": 314,
      "domain": "acheconcursos.com.br",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3177090.22520627,
      "curr_month_visits": 3177090.22520627,
      "unique_users": 2156728.43944099,
      "pages_per_visit": 1.99621315411692
    },
    {
      "global_rank": 304024,
      "category_rank": 314,
      "domain": "neaims.go.ke",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 82935.3196927758,
      "curr_month_visits": 82935.3196927758,
      "unique_users": 35408.5441854605,
      "pages_per_visit": 6.61018925682581
    },
    {
      "global_rank": 29377,
      "category_rank": 315,
      "domain": "kakaostyle.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1702560.96405801,
      "curr_month_visits": 1702560.96405801,
      "unique_users": 95523.6703930331,
      "pages_per_visit": 9.58438393450689
    },
    {
      "global_rank": 273462,
      "category_rank": 315,
      "domain": "instacks.co",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 115541.874519094,
      "curr_month_visits": 115541.874519094,
      "unique_users": 26542.8135784255,
      "pages_per_visit": 7.47001459906509
    },
    {
      "global_rank": 304988,
      "category_rank": 316,
      "domain": "careers.quiktrip.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 120801.428054994,
      "curr_month_visits": 120801.428054994,
      "unique_users": 67740.2236988485,
      "pages_per_visit": 3.92742107838884
    },
    {
      "global_rank": 29442,
      "category_rank": 316,
      "domain": "mobilians.co.kr",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2294422.14946999,
      "curr_month_visits": 2294422.14946999,
      "unique_users": 1621025.18225598,
      "pages_per_visit": 2.11351025713126
    },
    {
      "global_rank": 26524,
      "category_rank": 316,
      "domain": "careers-page.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2734968.74946035,
      "curr_month_visits": 2734968.74946035,
      "unique_users": 1486958.0682177,
      "pages_per_visit": 2.62725702402484
    },
    {
      "global_rank": 274302,
      "category_rank": 316,
      "domain": "elevatus.io",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 153786.731190616,
      "curr_month_visits": 153786.731190616,
      "unique_users": 78134.1717268979,
      "pages_per_visit": 2.45293251196054
    },
    {
      "global_rank": 275543,
      "category_rank": 317,
      "domain": "careers.twosigma.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 124444.625080699,
      "curr_month_visits": 124444.625080699,
      "unique_users": 66366.2961575048,
      "pages_per_visit": 4.97468704065506
    },
    {
      "global_rank": 306470,
      "category_rank": 317,
      "domain": "brightspringhealth.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 127101.622255964,
      "curr_month_visits": 127101.622255964,
      "unique_users": 34550.714776277,
      "pages_per_visit": 4.26468317150355
    },
    {
      "global_rank": 29551,
      "category_rank": 317,
      "domain": "e-aidem.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2312080.31798315,
      "curr_month_visits": 2312080.31798315,
      "unique_users": 1256816.17276303,
      "pages_per_visit": 2.68136300210954
    },
    {
      "global_rank": 275593,
      "category_rank": 318,
      "domain": "beisen.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 147216.422482017,
      "curr_month_visits": 147216.422482017,
      "unique_users": 75563.1819313719,
      "pages_per_visit": 3.26505233815183
    },
    {
      "global_rank": 29634,
      "category_rank": 318,
      "domain": "tesco-careers.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1848406.15109792,
      "curr_month_visits": 1848406.15109792,
      "unique_users": 762541.117895292,
      "pages_per_visit": 6.26037433678394
    },
    {
      "global_rank": 308416,
      "category_rank": 318,
      "domain": "bostoninstituteofanalytics.org",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 103955.615494713,
      "curr_month_visits": 103955.615494713,
      "unique_users": 46541.2657441291,
      "pages_per_visit": 3.99473784979654
    },
    {
      "global_rank": 308833,
      "category_rank": 319,
      "domain": "angelsitter.co.kr",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 120619.601088678,
      "curr_month_visits": 120619.601088678,
      "unique_users": 79366.1483452133,
      "pages_per_visit": 2.41636631424686
    },
    {
      "global_rank": 29795,
      "category_rank": 319,
      "domain": "corehr.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1415483.8290624,
      "curr_month_visits": 1415483.8290624,
      "unique_users": 429908.921879449,
      "pages_per_visit": 8.36765116782482
    },
    {
      "global_rank": 275942,
      "category_rank": 319,
      "domain": "bmcc.com.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 113183.108761163,
      "curr_month_visits": 113183.108761163,
      "unique_users": 32152.6596898602,
      "pages_per_visit": 5.23393851699966
    },
    {
      "global_rank": 276294,
      "category_rank": 320,
      "domain": "connectr.co.uk",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 126024.513051228,
      "curr_month_visits": 126024.513051228,
      "unique_users": 42155.8401733385,
      "pages_per_visit": 5.81135048048114
    },
    {
      "global_rank": 29816,
      "category_rank": 320,
      "domain": "dypa.gov.gr",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2100915.93672614,
      "curr_month_visits": 2100915.93672614,
      "unique_users": 643631.09205829,
      "pages_per_visit": 3.75188608366657
    },
    {
      "global_rank": 310727,
      "category_rank": 320,
      "domain": "ltts.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 129773.763015949,
      "curr_month_visits": 129773.763015949,
      "unique_users": 63688.6210620921,
      "pages_per_visit": 3.49793429370453
    },
    {
      "global_rank": 276890,
      "category_rank": 321,
      "domain": "civi.co.il",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 95516.2698487439,
      "curr_month_visits": 95516.2698487439,
      "unique_users": 42154.44000536,
      "pages_per_visit": 6.45086655678045
    },
    {
      "global_rank": 29835,
      "category_rank": 321,
      "domain": "planetspark.in",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2090496.6176625,
      "curr_month_visits": 2090496.6176625,
      "unique_users": 950566.540870207,
      "pages_per_visit": 4.11635686154967
    },
    {
      "global_rank": 310793,
      "category_rank": 321,
      "domain": "careers.duke.edu",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 126386.350342823,
      "curr_month_visits": 126386.350342823,
      "unique_users": 52108.213476992,
      "pages_per_visit": 4.12534210937686
    },
    {
      "global_rank": 30079,
      "category_rank": 322,
      "domain": "shufu-job.jp",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1840102.49815575,
      "curr_month_visits": 1840102.49815575,
      "unique_users": 894223.458256627,
      "pages_per_visit": 5.16714232316861
    },
    {
      "global_rank": 277014,
      "category_rank": 322,
      "domain": "findby.co.kr",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 106736.669191514,
      "curr_month_visits": 106736.669191514,
      "unique_users": 84475.5620073268,
      "pages_per_visit": 2.29860046779439
    },
    {
      "global_rank": 310889,
      "category_rank": 322,
      "domain": "coherehealth.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 86844.5297803864,
      "curr_month_visits": 86844.5297803864,
      "unique_users": 33552.3798285803,
      "pages_per_visit": 8.36890120200525
    },
    {
      "global_rank": 313380,
      "category_rank": 323,
      "domain": "compsych.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 81979.3047384599,
      "curr_month_visits": 81979.3047384599,
      "unique_users": 27154.9938048196,
      "pages_per_visit": 6.7120974062579
    },
    {
      "global_rank": 277261,
      "category_rank": 323,
      "domain": "weareamberjack.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 176462.453107247,
      "curr_month_visits": 176462.453107247,
      "unique_users": 67559.5334992203,
      "pages_per_visit": 2.09794019157841
    },
    {
      "global_rank": 30125,
      "category_rank": 323,
      "domain": "careers.homedepot.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2092093.05610091,
      "curr_month_visits": 2092093.05610091,
      "unique_users": 1055278.84263494,
      "pages_per_visit": 3.64911598797568
    },
    {
      "global_rank": 30149,
      "category_rank": 324,
      "domain": "disnakerja.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1681058.81061925,
      "curr_month_visits": 1681058.81061925,
      "unique_users": 380033.073488983,
      "pages_per_visit": 6.1409198888754
    },
    {
      "global_rank": 278254,
      "category_rank": 324,
      "domain": "jobs.ncsu.edu",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 107492.994680885,
      "curr_month_visits": 107492.994680885,
      "unique_users": 44554.9670746635,
      "pages_per_visit": 7.28365521098544
    },
    {
      "global_rank": 315628,
      "category_rank": 324,
      "domain": "djbx.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 87493.5451306374,
      "curr_month_visits": 87493.5451306374,
      "unique_users": 14620.5600714787,
      "pages_per_visit": 11.5733914283475
    },
    {
      "global_rank": 317820,
      "category_rank": 325,
      "domain": "qtigroup.sharepoint.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 164564.278087053,
      "curr_month_visits": 164564.278087053,
      "unique_users": 14122.6424095664,
      "pages_per_visit": 2.87967464437625
    },
    {
      "global_rank": 278495,
      "category_rank": 325,
      "domain": "ihr360.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 87499.6489823988,
      "curr_month_visits": 87499.6489823988,
      "unique_users": 16911.5469607302,
      "pages_per_visit": 9.31707542762306
    },
    {
      "global_rank": 27264,
      "category_rank": 325,
      "domain": "bullhornstaffing.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 2527159.18963965,
      "curr_month_visits": 2527159.18963965,
      "unique_users": 363816.129116559,
      "pages_per_visit": 4.13462062852493
    },
    {
      "global_rank": 30161,
      "category_rank": 325,
      "domain": "job.rikunabi.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2122272.84233647,
      "curr_month_visits": 2122272.84233647,
      "unique_users": 1119081.79860601,
      "pages_per_visit": 3.90072449853007
    },
    {
      "global_rank": 278985,
      "category_rank": 326,
      "domain": "hrci.org",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 124274.222679014,
      "curr_month_visits": 124274.222679014,
      "unique_users": 57607.9086270346,
      "pages_per_visit": 4.97342559514783
    },
    {
      "global_rank": 30497,
      "category_rank": 326,
      "domain": "hirepro.in",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1775679.30596459,
      "curr_month_visits": 1775679.30596459,
      "unique_users": 724157.914968356,
      "pages_per_visit": 5.55050045461523
    },
    {
      "global_rank": 319740,
      "category_rank": 326,
      "domain": "careers.procore.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 131124.544895198,
      "curr_month_visits": 131124.544895198,
      "unique_users": 79721.1358261292,
      "pages_per_visit": 4.23737243172385
    },
    {
      "global_rank": 280682,
      "category_rank": 327,
      "domain": "brainmanager.co.uk",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 112346.485723022,
      "curr_month_visits": 112346.485723022,
      "unique_users": 72025.2783502998,
      "pages_per_visit": 4.61925152228504
    },
    {
      "global_rank": 320232,
      "category_rank": 327,
      "domain": "majhiladkibahin.in",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 211810.690201291,
      "curr_month_visits": 211810.690201291,
      "unique_users": 109985.168263284,
      "pages_per_visit": 1.84570339858882
    },
    {
      "global_rank": 281008,
      "category_rank": 328,
      "domain": "point72.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 190998.252497632,
      "curr_month_visits": 190998.252497632,
      "unique_users": 100797.340927086,
      "pages_per_visit": 3.58274784760687
    },
    {
      "global_rank": 320723,
      "category_rank": 329,
      "domain": "aivalley.ai",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 95743.0893420411,
      "curr_month_visits": 95743.0893420411,
      "unique_users": 47445.782907264,
      "pages_per_visit": 2.8928313032142
    },
    {
      "global_rank": 27600,
      "category_rank": 329,
      "domain": "doctorblet.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 4793675.76190164,
      "curr_month_visits": 4793675.76190164,
      "unique_users": 966895.872256584,
      "pages_per_visit": 2.129329005396
    },
    {
      "global_rank": 282471,
      "category_rank": 329,
      "domain": "careers.comerica.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 130617.129383928,
      "curr_month_visits": 130617.129383928,
      "unique_users": 51714.0362117654,
      "pages_per_visit": 3.89516509331649
    },
    {
      "global_rank": 30639,
      "category_rank": 329,
      "domain": "meteojob.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2219515.7138465,
      "curr_month_visits": 2219515.7138465,
      "unique_users": 962895.83387534,
      "pages_per_visit": 2.68499406744118
    },
    {
      "global_rank": 285320,
      "category_rank": 330,
      "domain": "squarepeghires.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 115820.20195472,
      "curr_month_visits": 115820.20195472,
      "unique_users": 69428.1319710626,
      "pages_per_visit": 5.11735630753892
    },
    {
      "global_rank": 322202,
      "category_rank": 330,
      "domain": "ibookland.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 136273.965039027,
      "curr_month_visits": 136273.965039027,
      "unique_users": 26408.3754149925,
      "pages_per_visit": 3.8660911235083
    },
    {
      "global_rank": 30698,
      "category_rank": 330,
      "domain": "jasoseol.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2169099.25111053,
      "curr_month_visits": 2169099.25111053,
      "unique_users": 272230.114328806,
      "pages_per_visit": 8.31268111232409
    },
    {
      "global_rank": 324505,
      "category_rank": 331,
      "domain": "hubpass.co.kr",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 110123.111424628,
      "curr_month_visits": 110123.111424628,
      "unique_users": 6431.56445486476,
      "pages_per_visit": 7.70661488297283
    },
    {
      "global_rank": 285941,
      "category_rank": 332,
      "domain": "bbwcorp.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 130986.807519085,
      "curr_month_visits": 130986.807519085,
      "unique_users": 35787.2154209404,
      "pages_per_visit": 4.0888729356194
    },
    {
      "global_rank": 325266,
      "category_rank": 332,
      "domain": "empuls.io",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 164812.429224231,
      "curr_month_visits": 164812.429224231,
      "unique_users": 88692.0518026851,
      "pages_per_visit": 1.75758696378029
    },
    {
      "global_rank": 30927,
      "category_rank": 332,
      "domain": "catch.co.kr",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1716973.45430794,
      "curr_month_visits": 1716973.45430794,
      "unique_users": 903487.708322266,
      "pages_per_visit": 4.12635498668754
    },
    {
      "global_rank": 30982,
      "category_rank": 333,
      "domain": "theamericancareerguide.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1749436.78337149,
      "curr_month_visits": 1749436.78337149,
      "unique_users": 815500.63806726,
      "pages_per_visit": 4.10878112338075
    },
    {
      "global_rank": 286058,
      "category_rank": 333,
      "domain": "foundthejob.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 186102.233707478,
      "curr_month_visits": 186102.233707478,
      "unique_users": 87176.6733614214,
      "pages_per_visit": 2.87439623114508
    },
    {
      "global_rank": 325547,
      "category_rank": 333,
      "domain": "samaritan.org",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 108663.420543505,
      "curr_month_visits": 108663.420543505,
      "unique_users": 18368.3980682541,
      "pages_per_visit": 6.10665307281443
    },
    {
      "global_rank": 31119,
      "category_rank": 334,
      "domain": "news.koreadaily.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2339128.16223112,
      "curr_month_visits": 2339128.16223112,
      "unique_users": 793401.857129006,
      "pages_per_visit": 2.38663330255202
    },
    {
      "global_rank": 325559,
      "category_rank": 334,
      "domain": "careers.redfin.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 90915.7545365585,
      "curr_month_visits": 90915.7545365585,
      "unique_users": 53067.1977426069,
      "pages_per_visit": 3.35881196386882
    },
    {
      "global_rank": 286176,
      "category_rank": 334,
      "domain": "jobs.ufl.edu",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 146754.465900177,
      "curr_month_visits": 146754.465900177,
      "unique_users": 59713.8366014943,
      "pages_per_visit": 3.01142938052575
    },
    {
      "global_rank": 31128,
      "category_rank": 335,
      "domain": "emprego.pt",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2358693.18256181,
      "curr_month_visits": 2358693.18256181,
      "unique_users": 1330648.04895687,
      "pages_per_visit": 2.79158821847544
    },
    {
      "global_rank": 325567,
      "category_rank": 335,
      "domain": "codolio.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 172062.481334327,
      "curr_month_visits": 172062.481334327,
      "unique_users": 42946.9831977298,
      "pages_per_visit": 3.61619423242791
    },
    {
      "global_rank": 328598,
      "category_rank": 336,
      "domain": "meetdandy.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 140545.455064813,
      "curr_month_visits": 140545.455064813,
      "unique_users": 63208.2025741755,
      "pages_per_visit": 2.95164271630098
    },
    {
      "global_rank": 287417,
      "category_rank": 336,
      "domain": "jobs.utdallas.edu",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 112965.825354578,
      "curr_month_visits": 112965.825354578,
      "unique_users": 36795.2629841933,
      "pages_per_visit": 5.08847222514844
    },
    {
      "global_rank": 31189,
      "category_rank": 336,
      "domain": "stimmoney.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1425353.74418649,
      "curr_month_visits": 1425353.74418649,
      "unique_users": 779932.23411963,
      "pages_per_visit": 4.39904715129771
    },
    {
      "global_rank": 290192,
      "category_rank": 337,
      "domain": "foodhelpline.org",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 120922.318475617,
      "curr_month_visits": 120922.318475617,
      "unique_users": 52113.703877834,
      "pages_per_visit": 2.43198373461141
    },
    {
      "global_rank": 329481,
      "category_rank": 337,
      "domain": "resume.supply",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 164503.740442932,
      "curr_month_visits": 164503.740442932,
      "unique_users": 97402.3685473694,
      "pages_per_visit": 1.95853630527367
    },
    {
      "global_rank": 28031,
      "category_rank": 337,
      "domain": "321tw.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3463336.07540774,
      "curr_month_visits": 3463336.07540774,
      "unique_users": 549495.416094253,
      "pages_per_visit": 2.46649419528379
    },
    {
      "global_rank": 290698,
      "category_rank": 338,
      "domain": "tzcpa.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 88823.1738270162,
      "curr_month_visits": 88823.1738270162,
      "unique_users": 28600.0416912051,
      "pages_per_visit": 7.68724023410278
    },
    {
      "global_rank": 335084,
      "category_rank": 338,
      "domain": "telugujobspoint.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 147439.602161421,
      "curr_month_visits": 147439.602161421,
      "unique_users": 58554.0203178693,
      "pages_per_visit": 1.74356783528247
    },
    {
      "global_rank": 31247,
      "category_rank": 338,
      "domain": "bumeran.com.pe",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1797964.38783591,
      "curr_month_visits": 1797964.38783591,
      "unique_users": 520825.927315449,
      "pages_per_visit": 5.78234906713819
    },
    {
      "global_rank": 290902,
      "category_rank": 339,
      "domain": "emertxe-group.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 118158.098863659,
      "curr_month_visits": 118158.098863659,
      "unique_users": 12574.9257310151,
      "pages_per_visit": 12.0503159558712
    },
    {
      "global_rank": 31267,
      "category_rank": 339,
      "domain": "jobs.theamericancareerguide.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1735945.71394725,
      "curr_month_visits": 1735945.71394725,
      "unique_users": 811232.884417805,
      "pages_per_visit": 4.08915588452307
    },
    {
      "global_rank": 336447,
      "category_rank": 339,
      "domain": "careers.opentext.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 113527.571223441,
      "curr_month_visits": 113527.571223441,
      "unique_users": 66531.4571342831,
      "pages_per_visit": 3.15497284959606
    },
    {
      "global_rank": 31474,
      "category_rank": 340,
      "domain": "alljobs.co.il",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1475133.32950284,
      "curr_month_visits": 1475133.32950284,
      "unique_users": 541467.344113973,
      "pages_per_visit": 4.42507147356691
    },
    {
      "global_rank": 338139,
      "category_rank": 340,
      "domain": "smsreceivers.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 143069.020853148,
      "curr_month_visits": 143069.020853148,
      "unique_users": 65430.6828773838,
      "pages_per_visit": 1.62399121306893
    },
    {
      "global_rank": 291031,
      "category_rank": 340,
      "domain": "sahbak.co.il",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 125514.540294193,
      "curr_month_visits": 125514.540294193,
      "unique_users": 73170.6778825056,
      "pages_per_visit": 4.61114047629553
    },
    {
      "global_rank": 338421,
      "category_rank": 341,
      "domain": "akriviahcm.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 85651.4342281966,
      "curr_month_visits": 85651.4342281966,
      "unique_users": 28906.464469053,
      "pages_per_visit": 6.83648479908595
    },
    {
      "global_rank": 291799,
      "category_rank": 341,
      "domain": "glginsights.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 197489.449331919,
      "curr_month_visits": 197489.449331919,
      "unique_users": 109995.706393741,
      "pages_per_visit": 2.06296808636459
    },
    {
      "global_rank": 28325,
      "category_rank": 341,
      "domain": "afflat3a1.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 3759466.72853865,
      "curr_month_visits": 3759466.72853865,
      "unique_users": 2434948.08167175,
      "pages_per_visit": 1.09567776859253
    },
    {
      "global_rank": 31574,
      "category_rank": 341,
      "domain": "interfolio.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1482406.24015786,
      "curr_month_visits": 1482406.24015786,
      "unique_users": 419076.929804269,
      "pages_per_visit": 6.27961870419162
    },
    {
      "global_rank": 338477,
      "category_rank": 342,
      "domain": "visioncyber.kr",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 105834.122622686,
      "curr_month_visits": 105834.122622686,
      "unique_users": 14821.8793493169,
      "pages_per_visit": 5.35227475539901
    },
    {
      "global_rank": 31615,
      "category_rank": 342,
      "domain": "jobs.hilton.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2129334.40066913,
      "curr_month_visits": 2129334.40066913,
      "unique_users": 845977.461877722,
      "pages_per_visit": 3.1254037560215
    },
    {
      "global_rank": 292832,
      "category_rank": 342,
      "domain": "shlglobal.cn",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 94383.4676913112,
      "curr_month_visits": 94383.4676913112,
      "unique_users": 46294.3357336768,
      "pages_per_visit": 9.50108902510755
    },
    {
      "global_rank": 31801,
      "category_rank": 343,
      "domain": "itvbd.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 2126170.68860982,
      "curr_month_visits": 2126170.68860982,
      "unique_users": 904204.246729042,
      "pages_per_visit": 2.194560123187
    },
    {
      "global_rank": 293453,
      "category_rank": 343,
      "domain": "vscocorp.com",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 118046.150431727,
      "curr_month_visits": 118046.150431727,
      "unique_users": 13518.2508479485,
      "pages_per_visit": 6.58353124547741
    },
    {
      "global_rank": 339464,
      "category_rank": 343,
      "domain": "vastushikhar.in",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 151739.545299641,
      "curr_month_visits": 151739.545299641,
      "unique_users": 76639.9647834793,
      "pages_per_visit": 1.39357202018012
    },
    {
      "global_rank": 31816,
      "category_rank": 344,
      "domain": "qspiders.com",
      "category": "Jobs_and_Career/Jobs_and_Employment",
      "avg_month_visits": 1686057.91463822,
      "curr_month_visits": 1686057.91463822,
      "unique_users": 375252.491364958,
      "pages_per_visit": 5.53042923789002
    },
    {
      "global_rank": 293699,
      "category_rank": 344,
      "domain": "thetalent.games",
      "category": "Jobs_and_Career/Jobs_and_Career",
      "avg_month_visits": 135136.44733615,
      "curr_month_visits": 135136.44733615,
      "unique_users": 66335.1379161286,
      "pages_per_visit": 2.39677634525415
    },
    {
      "global_rank": 340276,
      "category_rank": 344,
      "domain": "careercircle.com",
      "category": "Jobs_and_Career/Human_Resources",
      "avg_month_visits": 92595.0075233792,
      "curr_month_visits": 92595.0075233792,
      "unique_users": 40924.7693568275,
      "pages_per_visit": 5.02922420699359
    },
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