
import {Top_Website_Categories} from '@/lib/top_websites';
export const runtime = 'edge';
export const metadata = {
  title: 'Top Science and Education Websites Ranking in the World, 2025',
  description: 'The top 1000 most visited entertainment websites in the World by Ahrefs organic search traffic estimates. Updated monthly. 2025',
  keywords: ['Top Websites', 'Top Websites Ranking','Science and Education'],
  authors: [
    { name: 'hackX', url: 'https://www.xucongyong.com' }
  ]
}


export default function TopWebsite() {

  const global_rank_all = [
    {
      "global_rank": 463,
      "category_rank": 1,
      "domain": "goodreads.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 84932988.9238817,
      "curr_month_visits": 84932988.9238817,
      "unique_users": 34885055.0871007,
      "pages_per_visit": 4.67104376315287
    },
    {
      "global_rank": 16962,
      "category_rank": 1,
      "domain": "1000kitap.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 3553129.10464649,
      "curr_month_visits": 3553129.10464649,
      "unique_users": 1407476.63211897,
      "pages_per_visit": 4.9960795375445
    },
    {
      "global_rank": 27471,
      "category_rank": 1,
      "domain": "sparxmaths.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 3099790.43177702,
      "curr_month_visits": 3099790.43177702,
      "unique_users": 1247617.77884426,
      "pages_per_visit": 1.40571763529885
    },
    {
      "global_rank": 15657,
      "category_rank": 1,
      "domain": "oreilly.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 3423106.231235,
      "curr_month_visits": 3423106.231235,
      "unique_users": 1465625.98810712,
      "pages_per_visit": 6.08018534256396
    },
    {
      "global_rank": 5290,
      "category_rank": 1,
      "domain": "acs.org",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 13184851.5901749,
      "curr_month_visits": 13184851.5901749,
      "unique_users": 3700759.5634554,
      "pages_per_visit": 3.16625657804655
    },
    {
      "global_rank": 1010,
      "category_rank": 1,
      "domain": "calculator.net",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 50955999.0951855,
      "curr_month_visits": 50955999.0951855,
      "unique_users": 29021909.029616,
      "pages_per_visit": 3.42778782665982
    },
    {
      "global_rank": 8284,
      "category_rank": 1,
      "domain": "archives.gov",
      "category": "Science_and_Education/History",
      "avg_month_visits": 6377269.23144201,
      "curr_month_visits": 6377269.23144201,
      "unique_users": 4497396.51360224,
      "pages_per_visit": 2.78263124443977
    },
    {
      "global_rank": 3529,
      "category_rank": 1,
      "domain": "arxiv.org",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 19406016.2011537,
      "curr_month_visits": 19406016.2011537,
      "unique_users": 4940968.44390424,
      "pages_per_visit": 3.14420288866185
    },
    {
      "global_rank": 595,
      "category_rank": 1,
      "domain": "cambridge.org",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 75905660.5554147,
      "curr_month_visits": 75905660.5554147,
      "unique_users": 31258775.0248612,
      "pages_per_visit": 3.81178795021283
    },
    {
      "global_rank": 1214,
      "category_rank": 1,
      "domain": "elsevier.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 41580786.3380373,
      "curr_month_visits": 41580786.3380373,
      "unique_users": 13320505.0772236,
      "pages_per_visit": 4.38431167006547
    },
    {
      "global_rank": 6087,
      "category_rank": 1,
      "domain": "animehay.de",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 4211574.83979696,
      "curr_month_visits": 4211574.83979696,
      "unique_users": 490285.608566064,
      "pages_per_visit": 4.15509194798638
    },
    {
      "global_rank": 35108,
      "category_rank": 2,
      "domain": "bold.org",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 1332664.2172905,
      "curr_month_visits": 1332664.2172905,
      "unique_users": 640096.659926533,
      "pages_per_visit": 7.14881500054404
    },
    {
      "global_rank": 2352,
      "category_rank": 2,
      "domain": "jstor.org",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 18655975.5049368,
      "curr_month_visits": 18655975.5049368,
      "unique_users": 8874312.43739597,
      "pages_per_visit": 5.26701099860355
    },
    {
      "global_rank": 22447,
      "category_rank": 2,
      "domain": "worldhistory.org",
      "category": "Science_and_Education/History",
      "avg_month_visits": 3920581.3248301,
      "curr_month_visits": 3920581.3248301,
      "unique_users": 2355063.23245249,
      "pages_per_visit": 2.03453706140461
    },
    {
      "global_rank": 648,
      "category_rank": 2,
      "domain": "mit.edu",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 47560486.5138589,
      "curr_month_visits": 47560486.5138589,
      "unique_users": 15437090.3544937,
      "pages_per_visit": 9.23139010619359
    },
    {
      "global_rank": 20579,
      "category_rank": 2,
      "domain": "topographic-map.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 1735563.7724691,
      "curr_month_visits": 1735563.7724691,
      "unique_users": 1029749.00664412,
      "pages_per_visit": 13.924046736319
    },
    {
      "global_rank": 12318,
      "category_rank": 2,
      "domain": "sigmaaldrich.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 5692413.85696112,
      "curr_month_visits": 5692413.85696112,
      "unique_users": 2720269.01871977,
      "pages_per_visit": 3.00150480195425
    },
    {
      "global_rank": 20287,
      "category_rank": 2,
      "domain": "booknode.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 2656987.30963801,
      "curr_month_visits": 2656987.30963801,
      "unique_users": 1120862.80920523,
      "pages_per_visit": 4.58225665151234
    },
    {
      "global_rank": 16937,
      "category_rank": 2,
      "domain": "cern.ch",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 4324403.30280931,
      "curr_month_visits": 4324403.30280931,
      "unique_users": 803992.644930962,
      "pages_per_visit": 5.40452579989674
    },
    {
      "global_rank": 7197,
      "category_rank": 2,
      "domain": "scopus.com",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 7231905.14164288,
      "curr_month_visits": 7231905.14164288,
      "unique_users": 2466628.24786155,
      "pages_per_visit": 6.36630666824131
    },
    {
      "global_rank": 42722,
      "category_rank": 2,
      "domain": "philpapers.org",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 1504566.20725408,
      "curr_month_visits": 1504566.20725408,
      "unique_users": 736695.056455015,
      "pages_per_visit": 2.33847565604793
    },
    {
      "global_rank": 18929,
      "category_rank": 2,
      "domain": "tac-school.co.jp",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 3243868.38912498,
      "curr_month_visits": 3243868.38912498,
      "unique_users": 1352148.016605,
      "pages_per_visit": 3.91590488361836
    },
    {
      "global_rank": 20699,
      "category_rank": 3,
      "domain": "zamg.ac.at",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 4435251.20864469,
      "curr_month_visits": 4435251.20864469,
      "unique_users": 715893.984053654,
      "pages_per_visit": 3.51852286532113
    },
    {
      "global_rank": 43944,
      "category_rank": 3,
      "domain": "chevening.org",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 1377081.99667488,
      "curr_month_visits": 1377081.99667488,
      "unique_users": 589003.425183999,
      "pages_per_visit": 5.26912546354685
    },
    {
      "global_rank": 2939,
      "category_rank": 3,
      "domain": "mybib.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 13656419.2782088,
      "curr_month_visits": 13656419.2782088,
      "unique_users": 4048791.28855884,
      "pages_per_visit": 7.6388171571338
    },
    {
      "global_rank": 26565,
      "category_rank": 3,
      "domain": "kakomonn.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 1867973.56105674,
      "curr_month_visits": 1867973.56105674,
      "unique_users": 432087.229407755,
      "pages_per_visit": 8.23065063913235
    },
    {
      "global_rank": 394,
      "category_rank": 3,
      "domain": "uchi.ru",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 54870822.0729137,
      "curr_month_visits": 54870822.0729137,
      "unique_users": 12813550.0835573,
      "pages_per_visit": 14.1208971429335
    },
    {
      "global_rank": 3276,
      "category_rank": 3,
      "domain": "ksu.edu.sa",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 17391535.5677582,
      "curr_month_visits": 17391535.5677582,
      "unique_users": 7327184.5210403,
      "pages_per_visit": 4.23862496752998
    },
    {
      "global_rank": 11509,
      "category_rank": 3,
      "domain": "dost.gov.ph",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 6327937.59712128,
      "curr_month_visits": 6327937.59712128,
      "unique_users": 2987756.71654074,
      "pages_per_visit": 2.18511064523617
    },
    {
      "global_rank": 32420,
      "category_rank": 3,
      "domain": "desuarchive.org",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 1183843.50175912,
      "curr_month_visits": 1183843.50175912,
      "unique_users": 309541.350359732,
      "pages_per_visit": 10.2456991240037
    },
    {
      "global_rank": 23905,
      "category_rank": 3,
      "domain": "cubicol.pe",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 2229195.97975526,
      "curr_month_visits": 2229195.97975526,
      "unique_users": 193169.478870444,
      "pages_per_visit": 6.06756850251223
    },
    {
      "global_rank": 17284,
      "category_rank": 3,
      "domain": "smodin.io",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 3731681.61341562,
      "curr_month_visits": 3731681.61341562,
      "unique_users": 2265119.72944787,
      "pages_per_visit": 3.18772176844592
    },
    {
      "global_rank": 628,
      "category_rank": 3,
      "domain": "quillbot.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 78000300.984551,
      "curr_month_visits": 78000300.984551,
      "unique_users": 24984479.3023415,
      "pages_per_visit": 3.44223446641704
    },
    {
      "global_rank": 51279,
      "category_rank": 3,
      "domain": "lesswrong.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 1292482.38138075,
      "curr_month_visits": 1292482.38138075,
      "unique_users": 435756.86095267,
      "pages_per_visit": 2.84022593875894
    },
    {
      "global_rank": 30626,
      "category_rank": 3,
      "domain": "allpoetry.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 2238901.80940123,
      "curr_month_visits": 2238901.80940123,
      "unique_users": 1151750.99786396,
      "pages_per_visit": 2.91417722785847
    },
    {
      "global_rank": 13144,
      "category_rank": 3,
      "domain": "rsc.org",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 5861316.14655363,
      "curr_month_visits": 5861316.14655363,
      "unique_users": 2074386.38808477,
      "pages_per_visit": 2.52786258527823
    },
    {
      "global_rank": 47670,
      "category_rank": 4,
      "domain": "txst.edu",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 1634363.64809658,
      "curr_month_visits": 1634363.64809658,
      "unique_users": 377922.23556342,
      "pages_per_visit": 2.47034958272
    },
    {
      "global_rank": 25071,
      "category_rank": 4,
      "domain": "alternatehistory.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 2050749.46442781,
      "curr_month_visits": 2050749.46442781,
      "unique_users": 347363.057350385,
      "pages_per_visit": 6.74401940331513
    },
    {
      "global_rank": 55386,
      "category_rank": 4,
      "domain": "archived.moe",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 665342.288893166,
      "curr_month_visits": 665342.288893166,
      "unique_users": 311855.259699419,
      "pages_per_visit": 7.11653402879803
    },
    {
      "global_rank": 22341,
      "category_rank": 4,
      "domain": "copernicus.eu",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 1530396.29992009,
      "curr_month_visits": 1530396.29992009,
      "unique_users": 643221.6111528,
      "pages_per_visit": 12.6260141268691
    },
    {
      "global_rank": 51588,
      "category_rank": 4,
      "domain": "lovelybooks.de",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 1265776.7663426,
      "curr_month_visits": 1265776.7663426,
      "unique_users": 694907.003974266,
      "pages_per_visit": 2.46419012202303
    },
    {
      "global_rank": 3408,
      "category_rank": 4,
      "domain": "nz.ua",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 13712078.5845767,
      "curr_month_visits": 13712078.5845767,
      "unique_users": 1009020.08558827,
      "pages_per_visit": 8.23517874112065
    },
    {
      "global_rank": 30305,
      "category_rank": 4,
      "domain": "dailygalaxy.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 1604195.46079134,
      "curr_month_visits": 1604195.46079134,
      "unique_users": 936070.926184598,
      "pages_per_visit": 1.46118964042927
    },
    {
      "global_rank": 1167,
      "category_rank": 4,
      "domain": "wiley.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 45140991.1226418,
      "curr_month_visits": 45140991.1226418,
      "unique_users": 15762451.8269782,
      "pages_per_visit": 4.03785741934925
    },
    {
      "global_rank": 18352,
      "category_rank": 4,
      "domain": "iop.org",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 4356012.56354863,
      "curr_month_visits": 4356012.56354863,
      "unique_users": 2026870.03586435,
      "pages_per_visit": 2.19561524566753
    },
    {
      "global_rank": 13146,
      "category_rank": 4,
      "domain": "osmanonline.info",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 3471188.31281706,
      "curr_month_visits": 3471188.31281706,
      "unique_users": 316592.734803777,
      "pages_per_visit": 3.61500966205083
    },
    {
      "global_rank": 71063,
      "category_rank": 4,
      "domain": "anthiago.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 1152810.66688093,
      "curr_month_visits": 1152810.66688093,
      "unique_users": 459371.284816489,
      "pages_per_visit": 2.60289269093466
    },
    {
      "global_rank": 27206,
      "category_rank": 4,
      "domain": "tafensw.edu.au",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 1612852.99036435,
      "curr_month_visits": 1612852.99036435,
      "unique_users": 531886.53514478,
      "pages_per_visit": 5.61267253346959
    },
    {
      "global_rank": 1692,
      "category_rank": 4,
      "domain": "harvard.edu",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 34623173.4115556,
      "curr_month_visits": 34623173.4115556,
      "unique_users": 17259405.4061756,
      "pages_per_visit": 3.47221649050472
    },
    {
      "global_rank": 22539,
      "category_rank": 5,
      "domain": "hcmr.gr",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 1415098.5488963,
      "curr_month_visits": 1415098.5488963,
      "unique_users": 325263.413904941,
      "pages_per_visit": 8.93819952084262
    },
    {
      "global_rank": 35369,
      "category_rank": 5,
      "domain": "cloudynights.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 1690740.88710969,
      "curr_month_visits": 1690740.88710969,
      "unique_users": 484627.237879237,
      "pages_per_visit": 4.1575254705549
    },
    {
      "global_rank": 407,
      "category_rank": 5,
      "domain": "quizizz.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 63039135.3250692,
      "curr_month_visits": 63039135.3250692,
      "unique_users": 23947073.2048527,
      "pages_per_visit": 9.1756014160688
    },
    {
      "global_rank": 27942,
      "category_rank": 5,
      "domain": "stepenin.ru",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 999451.323464703,
      "curr_month_visits": 999451.323464703,
      "unique_users": 257035.858407565,
      "pages_per_visit": 14.5358041067513
    },
    {
      "global_rank": 3804,
      "category_rank": 5,
      "domain": "oceanofpdf.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 9165406.83622872,
      "curr_month_visits": 9165406.83622872,
      "unique_users": 3187473.12095449,
      "pages_per_visit": 10.9870366077717
    },
    {
      "global_rank": 19233,
      "category_rank": 5,
      "domain": "yesmovies.mn",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 3649366.02869334,
      "curr_month_visits": 3649366.02869334,
      "unique_users": 452993.485092163,
      "pages_per_visit": 3.97718758565795
    },
    {
      "global_rank": 1874,
      "category_rank": 5,
      "domain": "cnki.net",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 21389110.8039343,
      "curr_month_visits": 21389110.8039343,
      "unique_users": 5328895.72011515,
      "pages_per_visit": 7.10910820040705
    },
    {
      "global_rank": 30019,
      "category_rank": 5,
      "domain": "iata.org",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 1664121.36956825,
      "curr_month_visits": 1664121.36956825,
      "unique_users": 721266.189500171,
      "pages_per_visit": 5.86842128882457
    },
    {
      "global_rank": 3473,
      "category_rank": 5,
      "domain": "naurok.com.ua",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 15956484.8739602,
      "curr_month_visits": 15956484.8739602,
      "unique_users": 4259783.32610783,
      "pages_per_visit": 3.93204014035051
    },
    {
      "global_rank": 57978,
      "category_rank": 5,
      "domain": "penguinlibros.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 1182342.31850886,
      "curr_month_visits": 1182342.31850886,
      "unique_users": 750175.725748697,
      "pages_per_visit": 2.35709953856292
    },
    {
      "global_rank": 108589,
      "category_rank": 5,
      "domain": "bibme.org",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 304685.500080815,
      "curr_month_visits": 304685.500080815,
      "unique_users": 161852.436050425,
      "pages_per_visit": 6.47529615684005
    },
    {
      "global_rank": 28179,
      "category_rank": 5,
      "domain": "cervantesvirtual.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 2399068.95671398,
      "curr_month_visits": 2399068.95671398,
      "unique_users": 1556455.11350272,
      "pages_per_visit": 2.20017575717073
    },
    {
      "global_rank": 13094,
      "category_rank": 5,
      "domain": "udocz.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 5484487.70654859,
      "curr_month_visits": 5484487.70654859,
      "unique_users": 2724860.78505183,
      "pages_per_visit": 2.90571267419889
    },
    {
      "global_rank": 77556,
      "category_rank": 5,
      "domain": "fivebooks.com",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 965263.630803219,
      "curr_month_visits": 965263.630803219,
      "unique_users": 541562.030712618,
      "pages_per_visit": 1.83215325700108
    },
    {
      "global_rank": 64631,
      "category_rank": 5,
      "domain": "fastweb.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 765061.008120675,
      "curr_month_visits": 765061.008120675,
      "unique_users": 429725.50377354,
      "pages_per_visit": 4.18558795360862
    },
    {
      "global_rank": 98189,
      "category_rank": 6,
      "domain": "turkedebiyati.org",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 761113.398459559,
      "curr_month_visits": 761113.398459559,
      "unique_users": 473419.615933832,
      "pages_per_visit": 1.67856604347042
    },
    {
      "global_rank": 9254,
      "category_rank": 6,
      "domain": "inaturalist.org",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 4899490.08291485,
      "curr_month_visits": 4899490.08291485,
      "unique_users": 2158529.74573329,
      "pages_per_visit": 8.34158329035614
    },
    {
      "global_rank": 65898,
      "category_rank": 6,
      "domain": "scholarships.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 661831.635060577,
      "curr_month_visits": 661831.635060577,
      "unique_users": 417186.614560567,
      "pages_per_visit": 5.11617746655637
    },
    {
      "global_rank": 91041,
      "category_rank": 6,
      "domain": "philpeople.org",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 663066.292289497,
      "curr_month_visits": 663066.292289497,
      "unique_users": 214603.510845638,
      "pages_per_visit": 2.85879500917658
    },
    {
      "global_rank": 37075,
      "category_rank": 6,
      "domain": "myflixer.is",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 1842060.98569002,
      "curr_month_visits": 1842060.98569002,
      "unique_users": 261660.612578679,
      "pages_per_visit": 4.29908400581926
    },
    {
      "global_rank": 14487,
      "category_rank": 6,
      "domain": "usherbrooke.ca",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 3959946.33446174,
      "curr_month_visits": 3959946.33446174,
      "unique_users": 1057681.53893344,
      "pages_per_visit": 5.85760677756275
    },
    {
      "global_rank": 33977,
      "category_rank": 6,
      "domain": "niidpo.ru",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 1270823.75968785,
      "curr_month_visits": 1270823.75968785,
      "unique_users": 455278.819547558,
      "pages_per_visit": 7.10111374446854
    },
    {
      "global_rank": 31613,
      "category_rank": 6,
      "domain": "olymponline.ru",
      "category": "Science_and_Education/History",
      "avg_month_visits": 2769895.705318,
      "curr_month_visits": 2769895.705318,
      "unique_users": 556282.995451363,
      "pages_per_visit": 7.85792476440294
    },
    {
      "global_rank": 132041,
      "category_rank": 6,
      "domain": "nationaalarchief.nl",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 202825.280212985,
      "curr_month_visits": 202825.280212985,
      "unique_users": 94995.0214726644,
      "pages_per_visit": 10.7750564516498
    },
    {
      "global_rank": 24632,
      "category_rank": 6,
      "domain": "ingv.it",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 3393081.36157685,
      "curr_month_visits": 3393081.36157685,
      "unique_users": 533208.810740409,
      "pages_per_visit": 3.06323350188792
    },
    {
      "global_rank": 19261,
      "category_rank": 6,
      "domain": "aps.org",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 3408856.13602588,
      "curr_month_visits": 3408856.13602588,
      "unique_users": 961484.759983169,
      "pages_per_visit": 3.52473677928326
    },
    {
      "global_rank": 438,
      "category_rank": 6,
      "domain": "blackboard.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 91187386.5452171,
      "curr_month_visits": 91187386.5452171,
      "unique_users": 6661788.94921832,
      "pages_per_visit": 8.25917935260467
    },
    {
      "global_rank": 28382,
      "category_rank": 6,
      "domain": "cas.org",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 1404240.22844805,
      "curr_month_visits": 1404240.22844805,
      "unique_users": 423448.097928734,
      "pages_per_visit": 9.27406494020819
    },
    {
      "global_rank": 4136,
      "category_rank": 6,
      "domain": "sagepub.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 17650369.0212257,
      "curr_month_visits": 17650369.0212257,
      "unique_users": 8238705.38736793,
      "pages_per_visit": 2.72895507924363
    },
    {
      "global_rank": 506,
      "category_rank": 7,
      "domain": "udemy.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 81660393.6249841,
      "curr_month_visits": 81660393.6249841,
      "unique_users": 19951081.1307609,
      "pages_per_visit": 5.68083785786109
    },
    {
      "global_rank": 142344,
      "category_rank": 7,
      "domain": "nationalarchives.ie",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 192555.226547376,
      "curr_month_visits": 192555.226547376,
      "unique_users": 85733.3895751258,
      "pages_per_visit": 9.69261808578614
    },
    {
      "global_rank": 2395,
      "category_rank": 7,
      "domain": "libgen.is",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 16809329.166078,
      "curr_month_visits": 16809329.166078,
      "unique_users": 5965248.18113175,
      "pages_per_visit": 7.80881913398525
    },
    {
      "global_rank": 95342,
      "category_rank": 7,
      "domain": "effectivealtruism.org",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 637245.427735999,
      "curr_month_visits": 637245.427735999,
      "unique_users": 212135.547232038,
      "pages_per_visit": 2.95222126028828
    },
    {
      "global_rank": 177603,
      "category_rank": 7,
      "domain": "bookbrowse.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 298816.071285492,
      "curr_month_visits": 298816.071285492,
      "unique_users": 196601.595473445,
      "pages_per_visit": 1.97646315768473
    },
    {
      "global_rank": 28409,
      "category_rank": 7,
      "domain": "acetyl.ru",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 2004355.04468068,
      "curr_month_visits": 2004355.04468068,
      "unique_users": 886363.642307078,
      "pages_per_visit": 2.29577300438903
    },
    {
      "global_rank": 67871,
      "category_rank": 7,
      "domain": "scholarsapply.org",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 404434.27596981,
      "curr_month_visits": 404434.27596981,
      "unique_users": 193614.902068872,
      "pages_per_visit": 5.82341594101376
    },
    {
      "global_rank": 19409,
      "category_rank": 7,
      "domain": "clarivate.cn",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 2278895.53095932,
      "curr_month_visits": 2278895.53095932,
      "unique_users": 593209.155989139,
      "pages_per_visit": 8.11082857320024
    },
    {
      "global_rank": 15468,
      "category_rank": 7,
      "domain": "kuleuven.cloud",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 3562379.97273553,
      "curr_month_visits": 3562379.97273553,
      "unique_users": 211722.704785804,
      "pages_per_visit": 6.4479064487704
    },
    {
      "global_rank": 37183,
      "category_rank": 7,
      "domain": "zeiss.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 1324742.95700971,
      "curr_month_visits": 1324742.95700971,
      "unique_users": 575113.539236784,
      "pages_per_visit": 5.02454401637977
    },
    {
      "global_rank": 32822,
      "category_rank": 7,
      "domain": "kooralive.id",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 867636.880318758,
      "curr_month_visits": 867636.880318758,
      "unique_users": 413768.123786648,
      "pages_per_visit": 2.27137841569068
    },
    {
      "global_rank": 37410,
      "category_rank": 7,
      "domain": "u-can.co.jp",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 1877727.83918527,
      "curr_month_visits": 1877727.83918527,
      "unique_users": 1353073.4263724,
      "pages_per_visit": 2.52283996619113
    },
    {
      "global_rank": 44273,
      "category_rank": 7,
      "domain": "history.go.kr",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 1054381.59113343,
      "curr_month_visits": 1054381.59113343,
      "unique_users": 483384.895831268,
      "pages_per_visit": 4.92968988571738
    },
    {
      "global_rank": 9617,
      "category_rank": 8,
      "domain": "z-lib.id",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 5966091.25296427,
      "curr_month_visits": 5966091.25296427,
      "unique_users": 3821511.58028737,
      "pages_per_visit": 5.84214202276271
    },
    {
      "global_rank": 190400,
      "category_rank": 8,
      "domain": "literatura.us",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 280595.139386342,
      "curr_month_visits": 280595.139386342,
      "unique_users": 137178.746928939,
      "pages_per_visit": 1.87227163285875
    },
    {
      "global_rank": 5498,
      "category_rank": 8,
      "domain": "z-lib.gs",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 4960983.8411537,
      "curr_month_visits": 4960983.8411537,
      "unique_users": 1536079.97251982,
      "pages_per_visit": 9.91665940461852
    },
    {
      "global_rank": 70672,
      "category_rank": 8,
      "domain": "daadscholarship.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 788661.541204935,
      "curr_month_visits": 788661.541204935,
      "unique_users": 360503.133812292,
      "pages_per_visit": 2.1861127811928
    },
    {
      "global_rank": 38700,
      "category_rank": 8,
      "domain": "lec-jp.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 1417177.83368152,
      "curr_month_visits": 1417177.83368152,
      "unique_users": 500542.670489591,
      "pages_per_visit": 6.14125079516349
    },
    {
      "global_rank": 3130,
      "category_rank": 8,
      "domain": "nasa.gov",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 20339126.3653623,
      "curr_month_visits": 20339126.3653623,
      "unique_users": 10685426.550887,
      "pages_per_visit": 3.962820465341
    },
    {
      "global_rank": 21914,
      "category_rank": 8,
      "domain": "mpg.de",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 2747081.97577007,
      "curr_month_visits": 2747081.97577007,
      "unique_users": 1134968.02925207,
      "pages_per_visit": 3.96515738289638
    },
    {
      "global_rank": 99323,
      "category_rank": 8,
      "domain": "uqac.ca",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 443036.834657699,
      "curr_month_visits": 443036.834657699,
      "unique_users": 147927.411167898,
      "pages_per_visit": 5.52927073298814
    },
    {
      "global_rank": 28499,
      "category_rank": 8,
      "domain": "chemicalbook.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 1872610.64802409,
      "curr_month_visits": 1872610.64802409,
      "unique_users": 723355.086510306,
      "pages_per_visit": 4.12689103030983
    },
    {
      "global_rank": 40030,
      "category_rank": 8,
      "domain": "spaceweatherlive.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 2792327.847745,
      "curr_month_visits": 2792327.847745,
      "unique_users": 1024612.07729451,
      "pages_per_visit": 2.02663792314399
    },
    {
      "global_rank": 17531,
      "category_rank": 8,
      "domain": "ewg.org",
      "category": "Science_and_Education/History",
      "avg_month_visits": 2867001.77872952,
      "curr_month_visits": 2867001.77872952,
      "unique_users": 1802362.75661441,
      "pages_per_visit": 4.79860539485204
    },
    {
      "global_rank": 151462,
      "category_rank": 8,
      "domain": "cultureelerfgoed.nl",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 206201.195990745,
      "curr_month_visits": 206201.195990745,
      "unique_users": 112173.018803811,
      "pages_per_visit": 5.70763990670193
    },
    {
      "global_rank": 36568,
      "category_rank": 8,
      "domain": "geology.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 2309279.61508277,
      "curr_month_visits": 2309279.61508277,
      "unique_users": 1677607.26753844,
      "pages_per_visit": 1.94993971457429
    },
    {
      "global_rank": 49207,
      "category_rank": 8,
      "domain": "ducksters.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 1312009.85051822,
      "curr_month_visits": 1312009.85051822,
      "unique_users": 772479.93807133,
      "pages_per_visit": 3.00046445212104
    },
    {
      "global_rank": 41956,
      "category_rank": 9,
      "domain": "c-c-j.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 1490237.42465869,
      "curr_month_visits": 1490237.42465869,
      "unique_users": 808996.838312609,
      "pages_per_visit": 3.56597712376743
    },
    {
      "global_rank": 195328,
      "category_rank": 9,
      "domain": "mamalisa.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 269071.721728699,
      "curr_month_visits": 269071.721728699,
      "unique_users": 153887.308843381,
      "pages_per_visit": 1.86497489135873
    },
    {
      "global_rank": 18098,
      "category_rank": 9,
      "domain": "cnrs.fr",
      "category": "Science_and_Education/History",
      "avg_month_visits": 3303098.7609363,
      "curr_month_visits": 3303098.7609363,
      "unique_users": 1220179.31783911,
      "pages_per_visit": 4.42871793391834
    },
    {
      "global_rank": 3299,
      "category_rank": 9,
      "domain": "mdpi.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 21998820.5729405,
      "curr_month_visits": 21998820.5729405,
      "unique_users": 9293426.36770268,
      "pages_per_visit": 2.39264441839799
    },
    {
      "global_rank": 54847,
      "category_rank": 9,
      "domain": "historianet.nl",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 1512687.32602722,
      "curr_month_visits": 1512687.32602722,
      "unique_users": 654395.496453405,
      "pages_per_visit": 1.83193850914514
    },
    {
      "global_rank": 76897,
      "category_rank": 9,
      "domain": "webportalapp.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 789267.436119863,
      "curr_month_visits": 789267.436119863,
      "unique_users": 266965.126188905,
      "pages_per_visit": 5.61218253882386
    },
    {
      "global_rank": 48285,
      "category_rank": 9,
      "domain": "moongiant.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 1124650.33471734,
      "curr_month_visits": 1124650.33471734,
      "unique_users": 665365.903535626,
      "pages_per_visit": 3.89525148897906
    },
    {
      "global_rank": 101535,
      "category_rank": 9,
      "domain": "monoskop.org",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 633444.476497697,
      "curr_month_visits": 633444.476497697,
      "unique_users": 364087.931256625,
      "pages_per_visit": 1.71770541622199
    },
    {
      "global_rank": 38132,
      "category_rank": 9,
      "domain": "sentinel-hub.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 626148.149144888,
      "curr_month_visits": 626148.149144888,
      "unique_users": 258013.19159674,
      "pages_per_visit": 25.9911910501749
    },
    {
      "global_rank": 175393,
      "category_rank": 9,
      "domain": "spbarchives.ru",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 149989.331609969,
      "curr_month_visits": 149989.331609969,
      "unique_users": 75520.0382668518,
      "pages_per_visit": 7.10955244811171
    },
    {
      "global_rank": 26249,
      "category_rank": 9,
      "domain": "askaichat.app",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 2276902.30261738,
      "curr_month_visits": 2276902.30261738,
      "unique_users": 1318589.37173311,
      "pages_per_visit": 4.09058096400446
    },
    {
      "global_rank": 10239,
      "category_rank": 9,
      "domain": "springernature.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 6085193.65814037,
      "curr_month_visits": 6085193.65814037,
      "unique_users": 2990562.17424461,
      "pages_per_visit": 3.29241747313382
    },
    {
      "global_rank": 28661,
      "category_rank": 9,
      "domain": "x-mol.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 1958686.21770625,
      "curr_month_visits": 1958686.21770625,
      "unique_users": 632338.963324079,
      "pages_per_visit": 3.89553612393328
    },
    {
      "global_rank": 35606,
      "category_rank": 10,
      "domain": "ptable.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 2389848.67196235,
      "curr_month_visits": 2389848.67196235,
      "unique_users": 1010999.44805393,
      "pages_per_visit": 2.05782926095719
    },
    {
      "global_rank": 581,
      "category_rank": 10,
      "domain": "librus.pl",
      "category": "Science_and_Education/History",
      "avg_month_visits": 63586925.2171497,
      "curr_month_visits": 63586925.2171497,
      "unique_users": 3631238.94273011,
      "pages_per_visit": 8.85442339320266
    },
    {
      "global_rank": 78231,
      "category_rank": 10,
      "domain": "scholarshipuniverse.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 405559.453535328,
      "curr_month_visits": 405559.453535328,
      "unique_users": 215700.085515995,
      "pages_per_visit": 9.13461003489597
    },
    {
      "global_rank": 9000,
      "category_rank": 10,
      "domain": "smhi.se",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 10699840.7941438,
      "curr_month_visits": 10699840.7941438,
      "unique_users": 1417612.86484794,
      "pages_per_visit": 2.20092115274715
    },
    {
      "global_rank": 57424,
      "category_rank": 10,
      "domain": "nasaspaceflight.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 749362.447913063,
      "curr_month_visits": 749362.447913063,
      "unique_users": 292233.653025937,
      "pages_per_visit": 6.52414886849549
    },
    {
      "global_rank": 26423,
      "category_rank": 10,
      "domain": "caltech.edu",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 2379264.83647975,
      "curr_month_visits": 2379264.83647975,
      "unique_users": 1075992.03348924,
      "pages_per_visit": 3.50062346469658
    },
    {
      "global_rank": 39073,
      "category_rank": 10,
      "domain": "nationalgeographic.org",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 2481996.96603467,
      "curr_month_visits": 2481996.96603467,
      "unique_users": 1730894.89231208,
      "pages_per_visit": 1.70082492153003
    },
    {
      "global_rank": 18159,
      "category_rank": 10,
      "domain": "ibge.gov.br",
      "category": "Science_and_Education/History",
      "avg_month_visits": 3340871.66121905,
      "curr_month_visits": 3340871.66121905,
      "unique_users": 1854876.37466481,
      "pages_per_visit": 4.60534402666948
    },
    {
      "global_rank": 262703,
      "category_rank": 10,
      "domain": "randomhouse.com",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 173919.233788167,
      "curr_month_visits": 173919.233788167,
      "unique_users": 106828.375327943,
      "pages_per_visit": 1.77416392362296
    },
    {
      "global_rank": 14955,
      "category_rank": 10,
      "domain": "cell.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 5159290.62902224,
      "curr_month_visits": 5159290.62902224,
      "unique_users": 2109883.1148643,
      "pages_per_visit": 2.38368292508938
    },
    {
      "global_rank": 48984,
      "category_rank": 10,
      "domain": "hogent.be",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 889887.382511853,
      "curr_month_visits": 889887.382511853,
      "unique_users": 93859.1232288663,
      "pages_per_visit": 10.2054236493705
    },
    {
      "global_rank": 178716,
      "category_rank": 10,
      "domain": "doxpop.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 228884.59893005,
      "curr_month_visits": 228884.59893005,
      "unique_users": 64273.7330917637,
      "pages_per_visit": 7.1296976666662
    },
    {
      "global_rank": 107980,
      "category_rank": 10,
      "domain": "philarchive.org",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 558962.089407263,
      "curr_month_visits": 558962.089407263,
      "unique_users": 309139.370440344,
      "pages_per_visit": 1.66910858470598
    },
    {
      "global_rank": 58931,
      "category_rank": 10,
      "domain": "westpoint.edu",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 779904.64868276,
      "curr_month_visits": 779904.64868276,
      "unique_users": 341270.256908045,
      "pages_per_visit": 4.47580231066502
    },
    {
      "global_rank": 53528,
      "category_rank": 11,
      "domain": "torrens.edu.au",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 876435.504304735,
      "curr_month_visits": 876435.504304735,
      "unique_users": 193446.033175287,
      "pages_per_visit": 6.34318163372271
    },
    {
      "global_rank": 202025,
      "category_rank": 11,
      "domain": "iphan.gov.br",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 216883.513810303,
      "curr_month_visits": 216883.513810303,
      "unique_users": 133423.107954906,
      "pages_per_visit": 3.95178853586166
    },
    {
      "global_rank": 70427,
      "category_rank": 11,
      "domain": "historyquiz.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 1267647.39227801,
      "curr_month_visits": 1267647.39227801,
      "unique_users": 209005.590707795,
      "pages_per_visit": 1.90001976425216
    },
    {
      "global_rank": 36457,
      "category_rank": 11,
      "domain": "chemicalaid.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 1878102.52453983,
      "curr_month_visits": 1878102.52453983,
      "unique_users": 1130543.18238934,
      "pages_per_visit": 2.42049675901125
    },
    {
      "global_rank": 81784,
      "category_rank": 11,
      "domain": "scholarshipowl.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 546220.802096239,
      "curr_month_visits": 546220.802096239,
      "unique_users": 355211.66266976,
      "pages_per_visit": 5.82164091424453
    },
    {
      "global_rank": 6791,
      "category_rank": 11,
      "domain": "calculatorsoup.com",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 11867557.1671863,
      "curr_month_visits": 11867557.1671863,
      "unique_users": 6875895.37697765,
      "pages_per_visit": 2.6008292813223
    },
    {
      "global_rank": 10725,
      "category_rank": 11,
      "domain": "pdfroom.com",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 4192357.20432398,
      "curr_month_visits": 4192357.20432398,
      "unique_users": 2447949.23974669,
      "pages_per_visit": 6.28472650954722
    },
    {
      "global_rank": 586,
      "category_rank": 11,
      "domain": "duolingo.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 66629291.2394134,
      "curr_month_visits": 66629291.2394134,
      "unique_users": 15292420.045483,
      "pages_per_visit": 5.7636846218638
    },
    {
      "global_rank": 28941,
      "category_rank": 11,
      "domain": "cas.cn",
      "category": "Science_and_Education/History",
      "avg_month_visits": 2226470.53852082,
      "curr_month_visits": 2226470.53852082,
      "unique_users": 863854.022426094,
      "pages_per_visit": 4.08258697271056
    },
    {
      "global_rank": 21174,
      "category_rank": 11,
      "domain": "silverchair.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 4073143.68228079,
      "curr_month_visits": 4073143.68228079,
      "unique_users": 2181476.51209136,
      "pages_per_visit": 1.68657229927248
    },
    {
      "global_rank": 60707,
      "category_rank": 11,
      "domain": "sab.gov.co",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 616160.874044796,
      "curr_month_visits": 616160.874044796,
      "unique_users": 161569.919387144,
      "pages_per_visit": 3.68565253837412
    },
    {
      "global_rank": 42566,
      "category_rank": 11,
      "domain": "kadaster.nl",
      "category": "Science_and_Education/History",
      "avg_month_visits": 819648.48898389,
      "curr_month_visits": 819648.48898389,
      "unique_users": 337223.87830684,
      "pages_per_visit": 11.0728047429748
    },
    {
      "global_rank": 314173,
      "category_rank": 11,
      "domain": "pensieriparole.it",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 135998.266999387,
      "curr_month_visits": 135998.266999387,
      "unique_users": 96081.6163800794,
      "pages_per_visit": 1.88614427877199
    },
    {
      "global_rank": 28937,
      "category_rank": 11,
      "domain": "aip.org",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 2509029.80224993,
      "curr_month_visits": 2509029.80224993,
      "unique_users": 1136799.86179188,
      "pages_per_visit": 2.183814108437
    },
    {
      "global_rank": 109255,
      "category_rank": 11,
      "domain": "quesonlosvaloreseticos.com",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 338089.362941191,
      "curr_month_visits": 338089.362941191,
      "unique_users": 65953.3312622916,
      "pages_per_visit": 5.44177910017677
    },
    {
      "global_rank": 4125,
      "category_rank": 11,
      "domain": "livescience.com",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 19296309.70451,
      "curr_month_visits": 19296309.70451,
      "unique_users": 12651677.0248306,
      "pages_per_visit": 1.53185847695623
    },
    {
      "global_rank": 37184,
      "category_rank": 12,
      "domain": "pw.edu.pl",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 1322236.67100215,
      "curr_month_visits": 1322236.67100215,
      "unique_users": 275723.649382205,
      "pages_per_visit": 7.55283386680312
    },
    {
      "global_rank": 324616,
      "category_rank": 12,
      "domain": "michaelconnelly.com",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 149713.970675761,
      "curr_month_visits": 149713.970675761,
      "unique_users": 79547.8538272856,
      "pages_per_visit": 2.16031747105828
    },
    {
      "global_rank": 12213,
      "category_rank": 12,
      "domain": "ndl.go.jp",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 4556480.38896936,
      "curr_month_visits": 4556480.38896936,
      "unique_users": 2725936.50703749,
      "pages_per_visit": 5.01812078199071
    },
    {
      "global_rank": 36717,
      "category_rank": 12,
      "domain": "fishersci.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 1704405.40918074,
      "curr_month_visits": 1704405.40918074,
      "unique_users": 877454.093851379,
      "pages_per_visit": 3.64483708475599
    },
    {
      "global_rank": 600,
      "category_rank": 12,
      "domain": "gdz.ru",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 70172754.8762747,
      "curr_month_visits": 70172754.8762747,
      "unique_users": 14795189.5821293,
      "pages_per_visit": 4.17024194497699
    },
    {
      "global_rank": 43668,
      "category_rank": 12,
      "domain": "ucar.edu",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 974173.711092931,
      "curr_month_visits": 974173.711092931,
      "unique_users": 400489.146792077,
      "pages_per_visit": 7.98891156536641
    },
    {
      "global_rank": 71712,
      "category_rank": 12,
      "domain": "timetoast.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 1182484.80798922,
      "curr_month_visits": 1182484.80798922,
      "unique_users": 767623.455301069,
      "pages_per_visit": 1.98648159052486
    },
    {
      "global_rank": 63925,
      "category_rank": 12,
      "domain": "idrivesafely.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 497147.249753507,
      "curr_month_visits": 497147.249753507,
      "unique_users": 265993.197400148,
      "pages_per_visit": 9.97194825709751
    },
    {
      "global_rank": 22082,
      "category_rank": 12,
      "domain": "nycu.edu.tw",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 2303582.87039231,
      "curr_month_visits": 2303582.87039231,
      "unique_users": 447194.963664012,
      "pages_per_visit": 7.74692516194299
    },
    {
      "global_rank": 109508,
      "category_rank": 12,
      "domain": "dreammoods.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 466622.482962502,
      "curr_month_visits": 466622.482962502,
      "unique_users": 231632.461127358,
      "pages_per_visit": 3.97186969230645
    },
    {
      "global_rank": 37876,
      "category_rank": 12,
      "domain": "scielo.org.co",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 3501132.01945596,
      "curr_month_visits": 3501132.01945596,
      "unique_users": 2148750.10150098,
      "pages_per_visit": 1.88558831444679
    },
    {
      "global_rank": 83135,
      "category_rank": 12,
      "domain": "scholarshipdb.net",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 548620.727919465,
      "curr_month_visits": 548620.727919465,
      "unique_users": 251103.145516246,
      "pages_per_visit": 4.3042382835257
    },
    {
      "global_rank": 70521,
      "category_rank": 12,
      "domain": "earthsky.org",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 1240968.53805114,
      "curr_month_visits": 1240968.53805114,
      "unique_users": 820395.206917067,
      "pages_per_visit": 1.44561656774448
    },
    {
      "global_rank": 668,
      "category_rank": 13,
      "domain": "vietjack.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 75388966.2445603,
      "curr_month_visits": 75388966.2445603,
      "unique_users": 17080958.2148559,
      "pages_per_visit": 3.92751226496441
    },
    {
      "global_rank": 71963,
      "category_rank": 13,
      "domain": "vle.lt",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 941456.048058805,
      "curr_month_visits": 941456.048058805,
      "unique_users": 467289.594401641,
      "pages_per_visit": 1.70984286987455
    },
    {
      "global_rank": 23077,
      "category_rank": 13,
      "domain": "ablesci.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 1266908.16119918,
      "curr_month_visits": 1266908.16119918,
      "unique_users": 332606.888582189,
      "pages_per_visit": 9.29019019685184
    },
    {
      "global_rank": 7653,
      "category_rank": 13,
      "domain": "ebscohost.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 6295931.6196963,
      "curr_month_visits": 6295931.6196963,
      "unique_users": 2583331.24810639,
      "pages_per_visit": 6.95491983396889
    },
    {
      "global_rank": 7699,
      "category_rank": 13,
      "domain": "edstem.org",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 8264515.29297902,
      "curr_month_visits": 8264515.29297902,
      "unique_users": 718015.072313733,
      "pages_per_visit": 7.71938508683277
    },
    {
      "global_rank": 90567,
      "category_rank": 13,
      "domain": "scholarshiproar.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 585619.486626334,
      "curr_month_visits": 585619.486626334,
      "unique_users": 270019.69409931,
      "pages_per_visit": 3.46125644772414
    },
    {
      "global_rank": 48915,
      "category_rank": 13,
      "domain": "nrsc.gov.in",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 1000547.97690129,
      "curr_month_visits": 1000547.97690129,
      "unique_users": 437369.877957802,
      "pages_per_visit": 4.00462114267149
    },
    {
      "global_rank": 12646,
      "category_rank": 13,
      "domain": "si.edu",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 5632266.63361741,
      "curr_month_visits": 5632266.63361741,
      "unique_users": 3797153.31581119,
      "pages_per_visit": 2.68235444840177
    },
    {
      "global_rank": 43251,
      "category_rank": 13,
      "domain": "vwr.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 1323839.08115421,
      "curr_month_visits": 1323839.08115421,
      "unique_users": 716582.566055106,
      "pages_per_visit": 3.70677379292357
    },
    {
      "global_rank": 113530,
      "category_rank": 13,
      "domain": "theanarchistlibrary.org",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 417840.755693899,
      "curr_month_visits": 417840.755693899,
      "unique_users": 198258.384670524,
      "pages_per_visit": 2.85124281722389
    },
    {
      "global_rank": 345808,
      "category_rank": 13,
      "domain": "aynitap.com",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 118925.983351664,
      "curr_month_visits": 118925.983351664,
      "unique_users": 88929.001722971,
      "pages_per_visit": 1.91693655261874
    },
    {
      "global_rank": 72059,
      "category_rank": 13,
      "domain": "astrobin.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 526198.296032575,
      "curr_month_visits": 526198.296032575,
      "unique_users": 194894.593541701,
      "pages_per_visit": 7.1339498190965
    },
    {
      "global_rank": 77861,
      "category_rank": 13,
      "domain": "open.edu.au",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 542868.424016963,
      "curr_month_visits": 542868.424016963,
      "unique_users": 254452.044328901,
      "pages_per_visit": 4.56353903831377
    },
    {
      "global_rank": 38412,
      "category_rank": 13,
      "domain": "miteco.gob.es",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 1315541.46172164,
      "curr_month_visits": 1315541.46172164,
      "unique_users": 777103.281908623,
      "pages_per_visit": 2.65140758522752
    },
    {
      "global_rank": 222086,
      "category_rank": 13,
      "domain": "archivogeneral.gov.co",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 203646.574846279,
      "curr_month_visits": 203646.574846279,
      "unique_users": 98566.8110818074,
      "pages_per_visit": 3.5107124907323
    },
    {
      "global_rank": 673,
      "category_rank": 14,
      "domain": "studocu.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 71716975.4971405,
      "curr_month_visits": 71716975.4971405,
      "unique_users": 36193648.6113469,
      "pages_per_visit": 3.35475740325065
    },
    {
      "global_rank": 25618,
      "category_rank": 14,
      "domain": "biorender.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 1969265.25024581,
      "curr_month_visits": 1969265.25024581,
      "unique_users": 628885.364291385,
      "pages_per_visit": 5.60608182659429
    },
    {
      "global_rank": 74754,
      "category_rank": 14,
      "domain": "spaceweather.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 1453292.00701761,
      "curr_month_visits": 1453292.00701761,
      "unique_users": 324157.823610749,
      "pages_per_visit": 1.52129473073748
    },
    {
      "global_rank": 38600,
      "category_rank": 14,
      "domain": "greenpeace.org",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 1924572.8497073,
      "curr_month_visits": 1924572.8497073,
      "unique_users": 1242712.17507565,
      "pages_per_visit": 1.8800999710141
    },
    {
      "global_rank": 55746,
      "category_rank": 14,
      "domain": "tamilvip.bike",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 2431120.5189242,
      "curr_month_visits": 2431120.5189242,
      "unique_users": 1122711.23430546,
      "pages_per_visit": 3.180452949658
    },
    {
      "global_rank": 100238,
      "category_rank": 14,
      "domain": "opportunitiespedia.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 616377.449728871,
      "curr_month_visits": 616377.449728871,
      "unique_users": 268064.235066285,
      "pages_per_visit": 2.06050628986081
    },
    {
      "global_rank": 257194,
      "category_rank": 14,
      "domain": "opensourceshakespeare.org",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 181715.551374286,
      "curr_month_visits": 181715.551374286,
      "unique_users": 100548.957835701,
      "pages_per_visit": 2.55828442208345
    },
    {
      "global_rank": 74003,
      "category_rank": 14,
      "domain": "annefrank.org",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 843744.022177807,
      "curr_month_visits": 843744.022177807,
      "unique_users": 535908.725680511,
      "pages_per_visit": 2.48096702611639
    },
    {
      "global_rank": 10074,
      "category_rank": 14,
      "domain": "ethz.ch",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 4830781.32484556,
      "curr_month_visits": 4830781.32484556,
      "unique_users": 1215358.3237752,
      "pages_per_visit": 7.85129629927677
    },
    {
      "global_rank": 48806,
      "category_rank": 14,
      "domain": "chemequations.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 940005.694481228,
      "curr_month_visits": 940005.694481228,
      "unique_users": 497393.086572719,
      "pages_per_visit": 3.02803402965484
    },
    {
      "global_rank": 346892,
      "category_rank": 14,
      "domain": "poemario.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 111191.901663379,
      "curr_month_visits": 111191.901663379,
      "unique_users": 58046.441761777,
      "pages_per_visit": 2.0775405040205
    },
    {
      "global_rank": 12958,
      "category_rank": 14,
      "domain": "bnf.fr",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 2989138.65232711,
      "curr_month_visits": 2989138.65232711,
      "unique_users": 1469921.66741731,
      "pages_per_visit": 8.63412082714763
    },
    {
      "global_rank": 81123,
      "category_rank": 14,
      "domain": "foresight.jp",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 743750.225052339,
      "curr_month_visits": 743750.225052339,
      "unique_users": 323435.933638709,
      "pages_per_visit": 3.89332694013599
    },
    {
      "global_rank": 43266,
      "category_rank": 14,
      "domain": "optica.org",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 1419880.50908985,
      "curr_month_visits": 1419880.50908985,
      "unique_users": 452612.239259963,
      "pages_per_visit": 3.64555491081626
    },
    {
      "global_rank": 44152,
      "category_rank": 15,
      "domain": "physicsforums.com",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 1909826.03193151,
      "curr_month_visits": 1909826.03193151,
      "unique_users": 1249825.49473224,
      "pages_per_visit": 1.46950470850429
    },
    {
      "global_rank": 39929,
      "category_rank": 15,
      "domain": "icar.gov.in",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 1593377.40894441,
      "curr_month_visits": 1593377.40894441,
      "unique_users": 429344.491738468,
      "pages_per_visit": 4.89547762917129
    },
    {
      "global_rank": 57552,
      "category_rank": 15,
      "domain": "copernicus.org",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 1146687.794788,
      "curr_month_visits": 1146687.794788,
      "unique_users": 481951.49098113,
      "pages_per_visit": 2.44028265877904
    },
    {
      "global_rank": 28050,
      "category_rank": 15,
      "domain": "ut.ee",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 1750108.67049097,
      "curr_month_visits": 1750108.67049097,
      "unique_users": 323343.503098382,
      "pages_per_visit": 8.51490085474463
    },
    {
      "global_rank": 57527,
      "category_rank": 15,
      "domain": "aktiv.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 1046625.94385692,
      "curr_month_visits": 1046625.94385692,
      "unique_users": 109394.562496511,
      "pages_per_visit": 6.29288593678018
    },
    {
      "global_rank": 15353,
      "category_rank": 15,
      "domain": "d1wqtxts1xzle7.cloudfront.net",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 5567438.74469514,
      "curr_month_visits": 5567438.74469514,
      "unique_users": 3180315.34901048,
      "pages_per_visit": 1.76870547570151
    },
    {
      "global_rank": 82749,
      "category_rank": 15,
      "domain": "tafesa.edu.au",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 474454.384255131,
      "curr_month_visits": 474454.384255131,
      "unique_users": 130417.488344341,
      "pages_per_visit": 8.67805859906201
    },
    {
      "global_rank": 84420,
      "category_rank": 15,
      "domain": "highpointscientific.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 504899.689699325,
      "curr_month_visits": 504899.689699325,
      "unique_users": 217936.256891099,
      "pages_per_visit": 2.85896480592816
    },
    {
      "global_rank": 136503,
      "category_rank": 15,
      "domain": "major-prepa.com",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 364598.918003885,
      "curr_month_visits": 364598.918003885,
      "unique_users": 198889.651562659,
      "pages_per_visit": 1.93056632872773
    },
    {
      "global_rank": 704,
      "category_rank": 15,
      "domain": "blooket.com",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 38496905.1105087,
      "curr_month_visits": 38496905.1105087,
      "unique_users": 11802263.236598,
      "pages_per_visit": 11.4767593549413
    },
    {
      "global_rank": 74085,
      "category_rank": 15,
      "domain": "smarthistory.org",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 957405.170404798,
      "curr_month_visits": 957405.170404798,
      "unique_users": 464341.908234085,
      "pages_per_visit": 2.33594190425609
    },
    {
      "global_rank": 286388,
      "category_rank": 15,
      "domain": "webcitation.org",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 146263.559378274,
      "curr_month_visits": 146263.559378274,
      "unique_users": 97917.7224670997,
      "pages_per_visit": 1.84144845248011
    },
    {
      "global_rank": 106636,
      "category_rank": 15,
      "domain": "fcdo.gov.uk",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 461191.132154847,
      "curr_month_visits": 461191.132154847,
      "unique_users": 229182.102519689,
      "pages_per_visit": 3.3453637447551
    },
    {
      "global_rank": 77071,
      "category_rank": 16,
      "domain": "battlefields.org",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 836769.23669135,
      "curr_month_visits": 836769.23669135,
      "unique_users": 539625.755240728,
      "pages_per_visit": 1.75692176290384
    },
    {
      "global_rank": 733,
      "category_rank": 16,
      "domain": "schoology.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 71891285.7500176,
      "curr_month_visits": 71891285.7500176,
      "unique_users": 5335404.85678606,
      "pages_per_visit": 6.90102196893933
    },
    {
      "global_rank": 57588,
      "category_rank": 16,
      "domain": "merckmillipore.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 984589.208417129,
      "curr_month_visits": 984589.208417129,
      "unique_users": 510866.389085366,
      "pages_per_visit": 2.84853580922197
    },
    {
      "global_rank": 15355,
      "category_rank": 16,
      "domain": "openlibrary.org",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 3901472.42266379,
      "curr_month_visits": 3901472.42266379,
      "unique_users": 2695465.0847292,
      "pages_per_visit": 3.36039098013175
    },
    {
      "global_rank": 415773,
      "category_rank": 16,
      "domain": "poetryinvoice.ca",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 107824.480554088,
      "curr_month_visits": 107824.480554088,
      "unique_users": 39935.0358272048,
      "pages_per_visit": 3.39072585338448
    },
    {
      "global_rank": 108388,
      "category_rank": 16,
      "domain": "opportunitydesk.org",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 612402.563301762,
      "curr_month_visits": 612402.563301762,
      "unique_users": 318561.228225743,
      "pages_per_visit": 2.13876168559325
    },
    {
      "global_rank": 15697,
      "category_rank": 16,
      "domain": "mathsgenie.co.uk",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 3119874.82960663,
      "curr_month_visits": 3119874.82960663,
      "unique_users": 868975.570157951,
      "pages_per_visit": 5.32830127355583
    },
    {
      "global_rank": 60805,
      "category_rank": 16,
      "domain": "hdhub4u.tattoo",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 1758648.75239241,
      "curr_month_visits": 1758648.75239241,
      "unique_users": 691167.637514786,
      "pages_per_visit": 3.9122910784254
    },
    {
      "global_rank": 30382,
      "category_rank": 16,
      "domain": "letpub.com.cn",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 2150266.96174861,
      "curr_month_visits": 2150266.96174861,
      "unique_users": 672895.058555839,
      "pages_per_visit": 3.41587367208339
    },
    {
      "global_rank": 50068,
      "category_rank": 16,
      "domain": "quantamagazine.org",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 1726138.89471999,
      "curr_month_visits": 1726138.89471999,
      "unique_users": 861979.920609039,
      "pages_per_visit": 1.64075974133425
    },
    {
      "global_rank": 83333,
      "category_rank": 16,
      "domain": "kdg.be",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 516919.494368625,
      "curr_month_visits": 516919.494368625,
      "unique_users": 67727.9732857345,
      "pages_per_visit": 7.31405025300353
    },
    {
      "global_rank": 41540,
      "category_rank": 16,
      "domain": "ecologiaverde.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 2107397.71857504,
      "curr_month_visits": 2107397.71857504,
      "unique_users": 1469503.61259955,
      "pages_per_visit": 1.93558489399561
    },
    {
      "global_rank": 137056,
      "category_rank": 16,
      "domain": "philomag.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 449700.390884707,
      "curr_month_visits": 449700.390884707,
      "unique_users": 252500.112297057,
      "pages_per_visit": 1.79605469117593
    },
    {
      "global_rank": 86537,
      "category_rank": 16,
      "domain": "celestron.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 496077.908348039,
      "curr_month_visits": 496077.908348039,
      "unique_users": 237976.91940506,
      "pages_per_visit": 4.73961087041575
    },
    {
      "global_rank": 41600,
      "category_rank": 17,
      "domain": "worldwildlife.org",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 1442766.72170605,
      "curr_month_visits": 1442766.72170605,
      "unique_users": 992106.077005156,
      "pages_per_visit": 2.23496436979313
    },
    {
      "global_rank": 30688,
      "category_rank": 17,
      "domain": "sciquest.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 1519608.51546236,
      "curr_month_visits": 1519608.51546236,
      "unique_users": 246303.790640743,
      "pages_per_visit": 12.1923499095967
    },
    {
      "global_rank": 19223,
      "category_rank": 17,
      "domain": "searchpeoplefree.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 2393839.17199845,
      "curr_month_visits": 2393839.17199845,
      "unique_users": 1465715.05519127,
      "pages_per_visit": 4.59383353007353
    },
    {
      "global_rank": 760,
      "category_rank": 17,
      "domain": "pw.live",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 53287843.0363339,
      "curr_month_visits": 53287843.0363339,
      "unique_users": 12108215.4517256,
      "pages_per_visit": 6.36816558479994
    },
    {
      "global_rank": 421036,
      "category_rank": 17,
      "domain": "poetrysociety.org",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 92170.9256975398,
      "curr_month_visits": 92170.9256975398,
      "unique_users": 51147.3897717265,
      "pages_per_visit": 1.81825121534599
    },
    {
      "global_rank": 62345,
      "category_rank": 17,
      "domain": "mindat.org",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 928122.105982153,
      "curr_month_visits": 928122.105982153,
      "unique_users": 506258.395882146,
      "pages_per_visit": 3.3998311449737
    },
    {
      "global_rank": 92460,
      "category_rank": 17,
      "domain": "astronomy.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 810025.73761369,
      "curr_month_visits": 810025.73761369,
      "unique_users": 531485.17393707,
      "pages_per_visit": 1.57974808430201
    },
    {
      "global_rank": 86708,
      "category_rank": 17,
      "domain": "cbt-s.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 823925.244727763,
      "curr_month_visits": 823925.244727763,
      "unique_users": 501713.877016707,
      "pages_per_visit": 2.30353053133971
    },
    {
      "global_rank": 77937,
      "category_rank": 17,
      "domain": "diletant.media",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 732174.057615722,
      "curr_month_visits": 732174.057615722,
      "unique_users": 467745.521234555,
      "pages_per_visit": 1.87000267118931
    },
    {
      "global_rank": 64037,
      "category_rank": 17,
      "domain": "aist.go.jp",
      "category": "Science_and_Education/History",
      "avg_month_visits": 720211.265932909,
      "curr_month_visits": 720211.265932909,
      "unique_users": 350784.210363021,
      "pages_per_visit": 4.84184613397119
    },
    {
      "global_rank": 120525,
      "category_rank": 17,
      "domain": "scholarshipsads.com",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 305520.769465197,
      "curr_month_visits": 305520.769465197,
      "unique_users": 151595.804550934,
      "pages_per_visit": 3.89640074984188
    },
    {
      "global_rank": 16012,
      "category_rank": 17,
      "domain": "metmuseum.org",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 3810672.49833181,
      "curr_month_visits": 3810672.49833181,
      "unique_users": 2224811.65910039,
      "pages_per_visit": 3.61483129064402
    },
    {
      "global_rank": 65663,
      "category_rank": 18,
      "domain": "tcichemicals.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 878186.914883053,
      "curr_month_visits": 878186.914883053,
      "unique_users": 328415.414309498,
      "pages_per_visit": 4.6848985149152
    },
    {
      "global_rank": 87335,
      "category_rank": 18,
      "domain": "sanno.ac.jp",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 461739.682903005,
      "curr_month_visits": 461739.682903005,
      "unique_users": 161302.825909045,
      "pages_per_visit": 8.11469135942817
    },
    {
      "global_rank": 31568,
      "category_rank": 18,
      "domain": "biorxiv.org",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 2447278.32500182,
      "curr_month_visits": 2447278.32500182,
      "unique_users": 932272.837234185,
      "pages_per_visit": 2.29344635228914
    },
    {
      "global_rank": 96664,
      "category_rank": 18,
      "domain": "heavens-above.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 580495.33233898,
      "curr_month_visits": 580495.33233898,
      "unique_users": 234002.921062718,
      "pages_per_visit": 4.84730548339544
    },
    {
      "global_rank": 42011,
      "category_rank": 18,
      "domain": "conicet.gov.ar",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 1417607.0984246,
      "curr_month_visits": 1417607.0984246,
      "unique_users": 756803.155574527,
      "pages_per_visit": 3.5225438220405
    },
    {
      "global_rank": 19311,
      "category_rank": 18,
      "domain": "192.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 2816752.61639333,
      "curr_month_visits": 2816752.61639333,
      "unique_users": 1952139.79509273,
      "pages_per_visit": 3.53755434677494
    },
    {
      "global_rank": 762,
      "category_rank": 18,
      "domain": "coursera.org",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 46659295.8784829,
      "curr_month_visits": 46659295.8784829,
      "unique_users": 14068782.3551024,
      "pages_per_visit": 8.76568717533958
    },
    {
      "global_rank": 17170,
      "category_rank": 18,
      "domain": "contentreserve.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 5345360.16275621,
      "curr_month_visits": 5345360.16275621,
      "unique_users": 1751912.65645306,
      "pages_per_visit": 1.47833577049928
    },
    {
      "global_rank": 16796,
      "category_rank": 18,
      "domain": "studyflix.de",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 4414727.88893624,
      "curr_month_visits": 4414727.88893624,
      "unique_users": 2546340.03649346,
      "pages_per_visit": 1.83065327887285
    },
    {
      "global_rank": 78030,
      "category_rank": 18,
      "domain": "histrf.ru",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 859261.000539003,
      "curr_month_visits": 859261.000539003,
      "unique_users": 580292.704296413,
      "pages_per_visit": 1.59758318558389
    },
    {
      "global_rank": 125004,
      "category_rank": 18,
      "domain": "universityguru.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 449988.095377451,
      "curr_month_visits": 449988.095377451,
      "unique_users": 263121.803766856,
      "pages_per_visit": 2.95331888832622
    },
    {
      "global_rank": 425178,
      "category_rank": 18,
      "domain": "folklore.ee",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 78422.9433930664,
      "curr_month_visits": 78422.9433930664,
      "unique_users": 45075.387323499,
      "pages_per_visit": 2.90876915439574
    },
    {
      "global_rank": 62358,
      "category_rank": 18,
      "domain": "ncees.org",
      "category": "Science_and_Education/History",
      "avg_month_visits": 763769.083208109,
      "curr_month_visits": 763769.083208109,
      "unique_users": 263248.917643781,
      "pages_per_visit": 5.93773408824165
    },
    {
      "global_rank": 144451,
      "category_rank": 19,
      "domain": "leiterreports.typepad.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 418090.283554999,
      "curr_month_visits": 418090.283554999,
      "unique_users": 69854.4865565726,
      "pages_per_visit": 2.04640997187744
    },
    {
      "global_rank": 18032,
      "category_rank": 19,
      "domain": "libkey.io",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 3758849.60946858,
      "curr_month_visits": 3758849.60946858,
      "unique_users": 1430769.51584796,
      "pages_per_visit": 3.20423301766752
    },
    {
      "global_rank": 56988,
      "category_rank": 19,
      "domain": "physicsclassroom.com",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 1272745.60903375,
      "curr_month_visits": 1272745.60903375,
      "unique_users": 696606.901371277,
      "pages_per_visit": 2.69153668092078
    },
    {
      "global_rank": 128916,
      "category_rank": 19,
      "domain": "awardspring.com",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 268161.584306864,
      "curr_month_visits": 268161.584306864,
      "unique_users": 118610.325537685,
      "pages_per_visit": 5.21701968758294
    },
    {
      "global_rank": 833,
      "category_rank": 19,
      "domain": "mheducation.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 39378314.0569072,
      "curr_month_visits": 39378314.0569072,
      "unique_users": 5067496.76017663,
      "pages_per_visit": 15.7531623365378
    },
    {
      "global_rank": 34412,
      "category_rank": 19,
      "domain": "wellesu.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 2235428.40436454,
      "curr_month_visits": 2235428.40436454,
      "unique_users": 836228.269431351,
      "pages_per_visit": 3.27215303318797
    },
    {
      "global_rank": 65920,
      "category_rank": 19,
      "domain": "reaxys.com",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 386101.273552361,
      "curr_month_visits": 386101.273552361,
      "unique_users": 84625.0659403273,
      "pages_per_visit": 16.8428480933491
    },
    {
      "global_rank": 79454,
      "category_rank": 19,
      "domain": "biografiasyvidas.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 1047035.08145677,
      "curr_month_visits": 1047035.08145677,
      "unique_users": 675604.619291673,
      "pages_per_visit": 1.92387859360125
    },
    {
      "global_rank": 46345,
      "category_rank": 19,
      "domain": "enbw.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 1172541.267598,
      "curr_month_visits": 1172541.267598,
      "unique_users": 682704.73106732,
      "pages_per_visit": 3.65231611416808
    },
    {
      "global_rank": 425587,
      "category_rank": 19,
      "domain": "bookpage.com",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 91084.7693636396,
      "curr_month_visits": 91084.7693636396,
      "unique_users": 54688.2542133738,
      "pages_per_visit": 1.75620632704078
    },
    {
      "global_rank": 97389,
      "category_rank": 19,
      "domain": "inaf.it",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 561633.178811566,
      "curr_month_visits": 561633.178811566,
      "unique_users": 280754.173886335,
      "pages_per_visit": 3.1629613890384
    },
    {
      "global_rank": 73929,
      "category_rank": 20,
      "domain": "volcanodiscovery.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 1169722.16089497,
      "curr_month_visits": 1169722.16089497,
      "unique_users": 583452.629102225,
      "pages_per_visit": 1.80101728064123
    },
    {
      "global_rank": 47227,
      "category_rank": 20,
      "domain": "nationalacademies.org",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 1016107.85593009,
      "curr_month_visits": 1016107.85593009,
      "unique_users": 618172.15334982,
      "pages_per_visit": 5.16903643125008
    },
    {
      "global_rank": 103623,
      "category_rank": 20,
      "domain": "astrogeo.va.it",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 485267.592941665,
      "curr_month_visits": 485267.592941665,
      "unique_users": 92514.4621018067,
      "pages_per_visit": 3.76829303518763
    },
    {
      "global_rank": 130788,
      "category_rank": 20,
      "domain": "mykaleidoscope.com",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 237862.475767575,
      "curr_month_visits": 237862.475767575,
      "unique_users": 101790.498555037,
      "pages_per_visit": 4.86500327364875
    },
    {
      "global_rank": 23241,
      "category_rank": 20,
      "domain": "bappam.re",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 1342604.54742903,
      "curr_month_visits": 1342604.54742903,
      "unique_users": 545070.657876722,
      "pages_per_visit": 2.54641240389348
    },
    {
      "global_rank": 66104,
      "category_rank": 20,
      "domain": "grail.moe",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 394800.895156822,
      "curr_month_visits": 394800.895156822,
      "unique_users": 61076.4955801795,
      "pages_per_visit": 7.54507417308699
    },
    {
      "global_rank": 18244,
      "category_rank": 20,
      "domain": "gale.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 3269702.49490162,
      "curr_month_visits": 3269702.49490162,
      "unique_users": 1541439.92933908,
      "pages_per_visit": 3.82661235735766
    },
    {
      "global_rank": 88937,
      "category_rank": 20,
      "domain": "pxl.be",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 559178.57006397,
      "curr_month_visits": 559178.57006397,
      "unique_users": 47274.4838550934,
      "pages_per_visit": 7.29953208224668
    },
    {
      "global_rank": 34542,
      "category_rank": 20,
      "domain": "charite.de",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 1558157.162515,
      "curr_month_visits": 1558157.162515,
      "unique_users": 596311.941206283,
      "pages_per_visit": 4.62798778152154
    },
    {
      "global_rank": 80649,
      "category_rank": 20,
      "domain": "historyextra.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 851810.361932763,
      "curr_month_visits": 851810.361932763,
      "unique_users": 556902.670152382,
      "pages_per_visit": 1.73748960852886
    },
    {
      "global_rank": 148664,
      "category_rank": 20,
      "domain": "dailynous.com",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 376769.03724457,
      "curr_month_visits": 376769.03724457,
      "unique_users": 147338.388875428,
      "pages_per_visit": 2.01058897794114
    },
    {
      "global_rank": 434437,
      "category_rank": 20,
      "domain": "thrillercafe.it",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 92370.3555674194,
      "curr_month_visits": 92370.3555674194,
      "unique_users": 58325.1264284777,
      "pages_per_visit": 2.02135317005083
    },
    {
      "global_rank": 91575,
      "category_rank": 21,
      "domain": "kentei.ne.jp",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 518809.372525067,
      "curr_month_visits": 518809.372525067,
      "unique_users": 303075.814965791,
      "pages_per_visit": 3.74183478531886
    },
    {
      "global_rank": 74585,
      "category_rank": 21,
      "domain": "inpe.br",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 959627.872863156,
      "curr_month_visits": 959627.872863156,
      "unique_users": 428440.973609683,
      "pages_per_visit": 2.29263842267164
    },
    {
      "global_rank": 434755,
      "category_rank": 21,
      "domain": "lecturia.org",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 133950.507681465,
      "curr_month_visits": 133950.507681465,
      "unique_users": 59059.8226010871,
      "pages_per_visit": 1.82599737292851
    },
    {
      "global_rank": 106111,
      "category_rank": 21,
      "domain": "astroarts.co.jp",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 518265.273984261,
      "curr_month_visits": 518265.273984261,
      "unique_users": 281916.377339343,
      "pages_per_visit": 3.45129277973445
    },
    {
      "global_rank": 873,
      "category_rank": 21,
      "domain": "grammarly.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 66253291.9144496,
      "curr_month_visits": 66253291.9144496,
      "unique_users": 28059957.8128891,
      "pages_per_visit": 2.906801679111
    },
    {
      "global_rank": 141998,
      "category_rank": 21,
      "domain": "utahtech.edu",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 387436.386954532,
      "curr_month_visits": 387436.386954532,
      "unique_users": 99622.2234165039,
      "pages_per_visit": 3.29863079939691
    },
    {
      "global_rank": 48094,
      "category_rank": 21,
      "domain": "concytec.gob.pe",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 1000690.91188873,
      "curr_month_visits": 1000690.91188873,
      "unique_users": 548010.505334468,
      "pages_per_visit": 4.23730818825978
    },
    {
      "global_rank": 34681,
      "category_rank": 21,
      "domain": "i-egybest.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 1924389.78116024,
      "curr_month_visits": 1924389.78116024,
      "unique_users": 812892.382601425,
      "pages_per_visit": 3.13229855969819
    },
    {
      "global_rank": 18587,
      "category_rank": 21,
      "domain": "senecapolytechnic.ca",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 2888279.50455471,
      "curr_month_visits": 2888279.50455471,
      "unique_users": 319777.813330302,
      "pages_per_visit": 9.44844730047538
    },
    {
      "global_rank": 66781,
      "category_rank": 21,
      "domain": "thermofisher.cn",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 600532.132052396,
      "curr_month_visits": 600532.132052396,
      "unique_users": 244211.192149589,
      "pages_per_visit": 4.11780853596045
    },
    {
      "global_rank": 85640,
      "category_rank": 21,
      "domain": "nationalww2museum.org",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 812623.69583192,
      "curr_month_visits": 812623.69583192,
      "unique_users": 550125.216340473,
      "pages_per_visit": 1.59578796507588
    },
    {
      "global_rank": 109052,
      "category_rank": 22,
      "domain": "planetary.org",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 541125.451360691,
      "curr_month_visits": 541125.451360691,
      "unique_users": 316554.233552576,
      "pages_per_visit": 1.72550245965314
    },
    {
      "global_rank": 67708,
      "category_rank": 22,
      "domain": "studymind.co.uk",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 946600.497109296,
      "curr_month_visits": 946600.497109296,
      "unique_users": 469943.284889911,
      "pages_per_visit": 2.2669038138545
    },
    {
      "global_rank": 453071,
      "category_rank": 22,
      "domain": "letralia.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 105738.594342555,
      "curr_month_visits": 105738.594342555,
      "unique_users": 61077.4137598138,
      "pages_per_visit": 1.79850600222327
    },
    {
      "global_rank": 36021,
      "category_rank": 22,
      "domain": "volgistics.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 1347094.68805142,
      "curr_month_visits": 1347094.68805142,
      "unique_users": 458539.774380561,
      "pages_per_visit": 5.79364956414391
    },
    {
      "global_rank": 18588,
      "category_rank": 22,
      "domain": "numerade.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 5180875.65859149,
      "curr_month_visits": 5180875.65859149,
      "unique_users": 3488285.77867821,
      "pages_per_visit": 2.01132346106078
    },
    {
      "global_rank": 78601,
      "category_rank": 22,
      "domain": "wmo.int",
      "category": "Science_and_Education/History",
      "avg_month_visits": 848988.96967112,
      "curr_month_visits": 848988.96967112,
      "unique_users": 446183.112503101,
      "pages_per_visit": 2.3274514412502
    },
    {
      "global_rank": 142137,
      "category_rank": 22,
      "domain": "vigilearnlms.com",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 184898.547622871,
      "curr_month_visits": 184898.547622871,
      "unique_users": 37596.5702191704,
      "pages_per_visit": 8.2391097031838
    },
    {
      "global_rank": 91695,
      "category_rank": 22,
      "domain": "northmetrotafe.wa.edu.au",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 488864.299986696,
      "curr_month_visits": 488864.299986696,
      "unique_users": 93474.0567028872,
      "pages_per_visit": 4.50034366701339
    },
    {
      "global_rank": 13666,
      "category_rank": 22,
      "domain": "wikidata.org",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 5420729.5615431,
      "curr_month_visits": 5420729.5615431,
      "unique_users": 4155497.45588757,
      "pages_per_visit": 2.34605768552362
    },
    {
      "global_rank": 1018,
      "category_rank": 22,
      "domain": "k12.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 38920971.8045062,
      "curr_month_visits": 38920971.8045062,
      "unique_users": 1576289.97509305,
      "pages_per_visit": 18.518464671478
    },
    {
      "global_rank": 51460,
      "category_rank": 22,
      "domain": "fws.gov",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 1195796.80321809,
      "curr_month_visits": 1195796.80321809,
      "unique_users": 792083.492569656,
      "pages_per_visit": 2.75659119804434
    },
    {
      "global_rank": 69386,
      "category_rank": 23,
      "domain": "masterorganicchemistry.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 994066.293563594,
      "curr_month_visits": 994066.293563594,
      "unique_users": 479572.137056162,
      "pages_per_visit": 1.86152943198574
    },
    {
      "global_rank": 95184,
      "category_rank": 23,
      "domain": "provincedeliege.be",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 484841.883262694,
      "curr_month_visits": 484841.883262694,
      "unique_users": 87801.6554192339,
      "pages_per_visit": 5.90034351547915
    },
    {
      "global_rank": 142791,
      "category_rank": 23,
      "domain": "scholars4dev.com",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 316202.255705154,
      "curr_month_visits": 316202.255705154,
      "unique_users": 159226.578366401,
      "pages_per_visit": 3.38262525575852
    },
    {
      "global_rank": 19656,
      "category_rank": 23,
      "domain": "zybooks.com",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 3907663.5821824,
      "curr_month_visits": 3907663.5821824,
      "unique_users": 400572.241731082,
      "pages_per_visit": 5.26083128022339
    },
    {
      "global_rank": 109502,
      "category_rank": 23,
      "domain": "eso.org",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 563689.951353756,
      "curr_month_visits": 563689.951353756,
      "unique_users": 264692.443746072,
      "pages_per_visit": 2.92039268279433
    },
    {
      "global_rank": 14517,
      "category_rank": 23,
      "domain": "ukrlib.com.ua",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 4339421.2219813,
      "curr_month_visits": 4339421.2219813,
      "unique_users": 1659850.43240054,
      "pages_per_visit": 2.44100298371561
    },
    {
      "global_rank": 19020,
      "category_rank": 23,
      "domain": "scielo.cl",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 4767577.68371682,
      "curr_month_visits": 4767577.68371682,
      "unique_users": 2653931.67772741,
      "pages_per_visit": 1.67348521876979
    },
    {
      "global_rank": 36320,
      "category_rank": 23,
      "domain": "ebi.ac.uk",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 1363514.18612792,
      "curr_month_visits": 1363514.18612792,
      "unique_users": 579926.863975841,
      "pages_per_visit": 4.60701762820061
    },
    {
      "global_rank": 1052,
      "category_rank": 23,
      "domain": "pearson.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 50184321.7110931,
      "curr_month_visits": 50184321.7110931,
      "unique_users": 7490550.76316598,
      "pages_per_visit": 6.35716783473661
    },
    {
      "global_rank": 88387,
      "category_rank": 23,
      "domain": "ign.es",
      "category": "Science_and_Education/History",
      "avg_month_visits": 749473.66495465,
      "curr_month_visits": 749473.66495465,
      "unique_users": 388479.896673824,
      "pages_per_visit": 2.24978322102679
    },
    {
      "global_rank": 7544,
      "category_rank": 23,
      "domain": "mapfan.com",
      "category": "Science_and_Education",
      "avg_month_visits": 5502478.94183614,
      "curr_month_visits": 5502478.94183614,
      "unique_users": 3952306.59992454,
      "pages_per_visit": 7.97646210094942
    },
    {
      "global_rank": 52263,
      "category_rank": 23,
      "domain": "nabu.de",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 1696526.70292581,
      "curr_month_visits": 1696526.70292581,
      "unique_users": 1175749.7398999,
      "pages_per_visit": 1.91069600635887
    },
    {
      "global_rank": 99465,
      "category_rank": 24,
      "domain": "hermods.se",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 519925.099559492,
      "curr_month_visits": 519925.099559492,
      "unique_users": 81243.0042227474,
      "pages_per_visit": 6.41941214910598
    },
    {
      "global_rank": 1071,
      "category_rank": 24,
      "domain": "wordwall.net",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 42058879.2326208,
      "curr_month_visits": 42058879.2326208,
      "unique_users": 16195347.7525239,
      "pages_per_visit": 4.38734994925085
    },
    {
      "global_rank": 9947,
      "category_rank": 24,
      "domain": "fsolver.fr",
      "category": "Science_and_Education",
      "avg_month_visits": 5269718.98188002,
      "curr_month_visits": 5269718.98188002,
      "unique_users": 1019005.15653451,
      "pages_per_visit": 6.43323685957201
    },
    {
      "global_rank": 19167,
      "category_rank": 24,
      "domain": "plos.org",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 4428854.19503559,
      "curr_month_visits": 4428854.19503559,
      "unique_users": 2380385.30292324,
      "pages_per_visit": 1.82639349067284
    },
    {
      "global_rank": 95275,
      "category_rank": 24,
      "domain": "ready.gov",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 730478.968288229,
      "curr_month_visits": 730478.968288229,
      "unique_users": 495844.490220542,
      "pages_per_visit": 1.81997598740757
    },
    {
      "global_rank": 476267,
      "category_rank": 24,
      "domain": "yourdailypoem.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 101725.078853866,
      "curr_month_visits": 101725.078853866,
      "unique_users": 54632.6618056858,
      "pages_per_visit": 1.65878016773311
    },
    {
      "global_rank": 36426,
      "category_rank": 24,
      "domain": "kew.org",
      "category": "Science_and_Education/History",
      "avg_month_visits": 1258725.14722993,
      "curr_month_visits": 1258725.14722993,
      "unique_users": 670057.09319981,
      "pages_per_visit": 4.50685261652501
    },
    {
      "global_rank": 73496,
      "category_rank": 24,
      "domain": "antpedia.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 898709.424821991,
      "curr_month_visits": 898709.424821991,
      "unique_users": 595537.340030081,
      "pages_per_visit": 1.84100978265298
    },
    {
      "global_rank": 15310,
      "category_rank": 24,
      "domain": "shamela.ws",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 3738506.27763705,
      "curr_month_visits": 3738506.27763705,
      "unique_users": 1658931.21811972,
      "pages_per_visit": 4.5519714013126
    },
    {
      "global_rank": 143564,
      "category_rank": 24,
      "domain": "scholarships365.info",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 320323.560510763,
      "curr_month_visits": 320323.560510763,
      "unique_users": 137635.721943977,
      "pages_per_visit": 2.34583005891395
    },
    {
      "global_rank": 111135,
      "category_rank": 24,
      "domain": "skyatnightmagazine.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 757959.881478038,
      "curr_month_visits": 757959.881478038,
      "unique_users": 464201.612703373,
      "pages_per_visit": 1.45493016480558
    },
    {
      "global_rank": 95276,
      "category_rank": 25,
      "domain": "deutsche-digitale-bibliothek.de",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 561002.18116849,
      "curr_month_visits": 561002.18116849,
      "unique_users": 404367.27250818,
      "pages_per_visit": 2.7896055293864
    },
    {
      "global_rank": 120276,
      "category_rank": 25,
      "domain": "webbtelescope.org",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 364094.105779875,
      "curr_month_visits": 364094.105779875,
      "unique_users": 198458.677144784,
      "pages_per_visit": 3.39449207021405
    },
    {
      "global_rank": 103524,
      "category_rank": 25,
      "domain": "iris.edu",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 477627.442995292,
      "curr_month_visits": 477627.442995292,
      "unique_users": 180602.408271096,
      "pages_per_visit": 4.66031221445199
    },
    {
      "global_rank": 74435,
      "category_rank": 25,
      "domain": "vietchem.com.vn",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 329083.370485382,
      "curr_month_visits": 329083.370485382,
      "unique_users": 234775.731816092,
      "pages_per_visit": 11.812898378198
    },
    {
      "global_rank": 484523,
      "category_rank": 25,
      "domain": "vseskazki.su",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 165394.943323034,
      "curr_month_visits": 165394.943323034,
      "unique_users": 64738.3036410411,
      "pages_per_visit": 1.6452928422718
    },
    {
      "global_rank": 54554,
      "category_rank": 25,
      "domain": "memberclicks.net",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 1047632.77341631,
      "curr_month_visits": 1047632.77341631,
      "unique_users": 572572.659091958,
      "pages_per_visit": 3.99009129315412
    },
    {
      "global_rank": 100075,
      "category_rank": 25,
      "domain": "sanko.ac.jp",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 448194.596950325,
      "curr_month_visits": 448194.596950325,
      "unique_users": 164148.343737039,
      "pages_per_visit": 4.21363103243724
    },
    {
      "global_rank": 147919,
      "category_rank": 25,
      "domain": "meindaad.de",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 203834.095163725,
      "curr_month_visits": 203834.095163725,
      "unique_users": 66493.3587385198,
      "pages_per_visit": 7.11931985007203
    },
    {
      "global_rank": 15760,
      "category_rank": 25,
      "domain": "brainyquote.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 4712057.0295633,
      "curr_month_visits": 4712057.0295633,
      "unique_users": 3176504.41970696,
      "pages_per_visit": 2.38217710589844
    },
    {
      "global_rank": 37219,
      "category_rank": 25,
      "domain": "benchling.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 1530475.00299312,
      "curr_month_visits": 1530475.00299312,
      "unique_users": 233771.012880692,
      "pages_per_visit": 6.05379100754344
    },
    {
      "global_rank": 175781,
      "category_rank": 25,
      "domain": "philjobs.org",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 349085.677138096,
      "curr_month_visits": 349085.677138096,
      "unique_users": 40618.1712566042,
      "pages_per_visit": 3.36369693951022
    },
    {
      "global_rank": 1126,
      "category_rank": 25,
      "domain": "index-education.net",
      "category": "Science_and_Education/History",
      "avg_month_visits": 60204280.421779,
      "curr_month_visits": 60204280.421779,
      "unique_users": 5484629.83982165,
      "pages_per_visit": 2.44131021136402
    },
    {
      "global_rank": 20249,
      "category_rank": 25,
      "domain": "moma.org",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 2539023.39464897,
      "curr_month_visits": 2539023.39464897,
      "unique_users": 1501958.49210614,
      "pages_per_visit": 3.69556153430814
    },
    {
      "global_rank": 74650,
      "category_rank": 26,
      "domain": "masteringchemistry.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 752609.172151474,
      "curr_month_visits": 752609.172151474,
      "unique_users": 128078.766480686,
      "pages_per_visit": 8.8965162002734
    },
    {
      "global_rank": 23648,
      "category_rank": 26,
      "domain": "youmath.it",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 3245334.02630469,
      "curr_month_visits": 3245334.02630469,
      "unique_users": 1489041.72910031,
      "pages_per_visit": 2.19432126083519
    },
    {
      "global_rank": 20947,
      "category_rank": 26,
      "domain": "znanierussia.ru",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 3315389.02967733,
      "curr_month_visits": 3315389.02967733,
      "unique_users": 2020098.72888729,
      "pages_per_visit": 2.1684349278722
    },
    {
      "global_rank": 104638,
      "category_rank": 26,
      "domain": "allmetsat.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 682703.199966126,
      "curr_month_visits": 682703.199966126,
      "unique_users": 227451.85287037,
      "pages_per_visit": 2.15251330657936
    },
    {
      "global_rank": 101524,
      "category_rank": 26,
      "domain": "teambuilding.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 741960.216904511,
      "curr_month_visits": 741960.216904511,
      "unique_users": 469894.715505967,
      "pages_per_visit": 1.7121077313894
    },
    {
      "global_rank": 488922,
      "category_rank": 26,
      "domain": "detskiychas.ru",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 112894.008930163,
      "curr_month_visits": 112894.008930163,
      "unique_users": 78725.3602480141,
      "pages_per_visit": 1.54675515090896
    },
    {
      "global_rank": 38257,
      "category_rank": 26,
      "domain": "aspca.org",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 2008612.82859979,
      "curr_month_visits": 2008612.82859979,
      "unique_users": 1446103.67625767,
      "pages_per_visit": 2.01661682439584
    },
    {
      "global_rank": 1177,
      "category_rank": 26,
      "domain": "dnevnik.ru",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 50809423.6361878,
      "curr_month_visits": 50809423.6361878,
      "unique_users": 2740883.70256305,
      "pages_per_visit": 5.01643142336162
    },
    {
      "global_rank": 54829,
      "category_rank": 26,
      "domain": "cas.cz",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 1068477.39773247,
      "curr_month_visits": 1068477.39773247,
      "unique_users": 346944.806198723,
      "pages_per_visit": 4.0545028737085
    },
    {
      "global_rank": 155866,
      "category_rank": 26,
      "domain": "fellowshipbard.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 392346.38588332,
      "curr_month_visits": 392346.38588332,
      "unique_users": 180177.908499122,
      "pages_per_visit": 2.09868628803249
    },
    {
      "global_rank": 121725,
      "category_rank": 26,
      "domain": "jhuapl.edu",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 407346.851393287,
      "curr_month_visits": 407346.851393287,
      "unique_users": 157724.165958145,
      "pages_per_visit": 3.99751702272162
    },
    {
      "global_rank": 16342,
      "category_rank": 26,
      "domain": "lexilogos.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 5241513.3247139,
      "curr_month_visits": 5241513.3247139,
      "unique_users": 1791369.94858231,
      "pages_per_visit": 2.05141986280757
    },
    {
      "global_rank": 28333,
      "category_rank": 26,
      "domain": "canada411.ca",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 2122866.60576904,
      "curr_month_visits": 2122866.60576904,
      "unique_users": 1411479.73942167,
      "pages_per_visit": 3.77364548448683
    },
    {
      "global_rank": 56011,
      "category_rank": 27,
      "domain": "mongabay.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 1475229.16605372,
      "curr_month_visits": 1475229.16605372,
      "unique_users": 960680.81198985,
      "pages_per_visit": 1.55877823195118
    },
    {
      "global_rank": 102469,
      "category_rank": 27,
      "domain": "bushoojapan.com",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 555375.100704499,
      "curr_month_visits": 555375.100704499,
      "unique_users": 225250.668302608,
      "pages_per_visit": 2.98222156200257
    },
    {
      "global_rank": 38832,
      "category_rank": 27,
      "domain": "pebblego.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 788472.033976699,
      "curr_month_visits": 788472.033976699,
      "unique_users": 405167.534457868,
      "pages_per_visit": 10.7090036381751
    },
    {
      "global_rank": 75899,
      "category_rank": 27,
      "domain": "webqc.org",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 892855.755339795,
      "curr_month_visits": 892855.755339795,
      "unique_users": 545467.73031883,
      "pages_per_visit": 2.01745040821661
    },
    {
      "global_rank": 18671,
      "category_rank": 27,
      "domain": "pkup.fr",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 4091067.09792143,
      "curr_month_visits": 4091067.09792143,
      "unique_users": 2116163.38002287,
      "pages_per_visit": 1.42869994476539
    },
    {
      "global_rank": 125510,
      "category_rank": 27,
      "domain": "stsci.edu",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 354096.8921351,
      "curr_month_visits": 354096.8921351,
      "unique_users": 99219.1216067556,
      "pages_per_visit": 9.1003408938506
    },
    {
      "global_rank": 103910,
      "category_rank": 27,
      "domain": "highspeedtraining.co.uk",
      "category": "Science_and_Education/History",
      "avg_month_visits": 433943.096482179,
      "curr_month_visits": 433943.096482179,
      "unique_users": 235190.326897128,
      "pages_per_visit": 3.98427691952013
    },
    {
      "global_rank": 28676,
      "category_rank": 27,
      "domain": "yell.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 2633201.25236088,
      "curr_month_visits": 2633201.25236088,
      "unique_users": 1842645.69741323,
      "pages_per_visit": 2.70714688398551
    },
    {
      "global_rank": 1261,
      "category_rank": 27,
      "domain": "benesse.ne.jp",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 39607749.6931337,
      "curr_month_visits": 39607749.6931337,
      "unique_users": 15383165.6006707,
      "pages_per_visit": 3.85454501988492
    },
    {
      "global_rank": 492339,
      "category_rank": 27,
      "domain": "booklistonline.com",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 82455.557004383,
      "curr_month_visits": 82455.557004383,
      "unique_users": 40137.4858217959,
      "pages_per_visit": 3.43977081117819
    },
    {
      "global_rank": 29355,
      "category_rank": 28,
      "domain": "local.ch",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 2449690.9770627,
      "curr_month_visits": 2449690.9770627,
      "unique_users": 1398776.03796672,
      "pages_per_visit": 2.31399806152072
    },
    {
      "global_rank": 183967,
      "category_rank": 28,
      "domain": "librefutboltv.com",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 563823.650536142,
      "curr_month_visits": 563823.650536142,
      "unique_users": 295382.333382796,
      "pages_per_visit": 1.29611104902305
    },
    {
      "global_rank": 57362,
      "category_rank": 28,
      "domain": "treehugger.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 1480800.43275019,
      "curr_month_visits": 1480800.43275019,
      "unique_users": 1091211.05954841,
      "pages_per_visit": 1.54977190146354
    },
    {
      "global_rank": 126656,
      "category_rank": 28,
      "domain": "usra.edu",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 334967.158874494,
      "curr_month_visits": 334967.158874494,
      "unique_users": 166162.055643988,
      "pages_per_visit": 3.70329686493105
    },
    {
      "global_rank": 104829,
      "category_rank": 28,
      "domain": "wbstraining.de",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 409449.078308827,
      "curr_month_visits": 409449.078308827,
      "unique_users": 156571.823560292,
      "pages_per_visit": 5.63977717032337
    },
    {
      "global_rank": 86979,
      "category_rank": 28,
      "domain": "aladdin-e.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 429850.661118475,
      "curr_month_visits": 429850.661118475,
      "unique_users": 126768.659723754,
      "pages_per_visit": 4.82934241514206
    },
    {
      "global_rank": 1281,
      "category_rank": 28,
      "domain": "powerschool.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 43025279.4786182,
      "curr_month_visits": 43025279.4786182,
      "unique_users": 6344294.77096609,
      "pages_per_visit": 6.26075555414724
    },
    {
      "global_rank": 103887,
      "category_rank": 28,
      "domain": "americanyawp.com",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 612626.048535096,
      "curr_month_visits": 612626.048535096,
      "unique_users": 192189.647871295,
      "pages_per_visit": 3.21126008235334
    },
    {
      "global_rank": 109089,
      "category_rank": 28,
      "domain": "agu.org",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 381152.249663778,
      "curr_month_visits": 381152.249663778,
      "unique_users": 159753.0283167,
      "pages_per_visit": 3.52487625920299
    },
    {
      "global_rank": 170062,
      "category_rank": 28,
      "domain": "opportunitiesforafricans.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 372937.24128094,
      "curr_month_visits": 372937.24128094,
      "unique_users": 188495.260111907,
      "pages_per_visit": 2.33061617175365
    },
    {
      "global_rank": 39215,
      "category_rank": 28,
      "domain": "amrita.edu",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 914927.389295779,
      "curr_month_visits": 914927.389295779,
      "unique_users": 321319.235879295,
      "pages_per_visit": 6.14044793543855
    },
    {
      "global_rank": 12693,
      "category_rank": 28,
      "domain": "viamichelin.fr",
      "category": "Science_and_Education",
      "avg_month_visits": 5163235.03575895,
      "curr_month_visits": 5163235.03575895,
      "unique_users": 2979003.41830522,
      "pages_per_visit": 3.92779608800551
    },
    {
      "global_rank": 40862,
      "category_rank": 29,
      "domain": "hubermanlab.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 1681277.86751128,
      "curr_month_visits": 1681277.86751128,
      "unique_users": 768453.098711225,
      "pages_per_visit": 2.84440450494726
    },
    {
      "global_rank": 107823,
      "category_rank": 29,
      "domain": "sharousi-kakomon.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 148379.439638127,
      "curr_month_visits": 148379.439638127,
      "unique_users": 35957.3483410008,
      "pages_per_visit": 39.1148750095324
    },
    {
      "global_rank": 30411,
      "category_rank": 29,
      "domain": "yell.ru",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 2356123.42724445,
      "curr_month_visits": 2356123.42724445,
      "unique_users": 1800208.65801251,
      "pages_per_visit": 2.11272271145659
    },
    {
      "global_rank": 133171,
      "category_rank": 29,
      "domain": "skyandtelescope.org",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 597721.845064831,
      "curr_month_visits": 597721.845064831,
      "unique_users": 347665.396715415,
      "pages_per_visit": 1.72350715805361
    },
    {
      "global_rank": 90049,
      "category_rank": 29,
      "domain": "knowunity.de",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 410979.949103273,
      "curr_month_visits": 410979.949103273,
      "unique_users": 210009.080898897,
      "pages_per_visit": 2.9382299089808
    },
    {
      "global_rank": 186191,
      "category_rank": 29,
      "domain": "uncf.org",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 215978.359602802,
      "curr_month_visits": 215978.359602802,
      "unique_users": 115439.636159064,
      "pages_per_visit": 4.41144924689942
    },
    {
      "global_rank": 105299,
      "category_rank": 29,
      "domain": "ciekawostkihistoryczne.pl",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 591524.597416639,
      "curr_month_visits": 591524.597416639,
      "unique_users": 366437.377840061,
      "pages_per_visit": 1.83612366341738
    },
    {
      "global_rank": 63242,
      "category_rank": 29,
      "domain": "zaragoza.es",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 753352.623294123,
      "curr_month_visits": 753352.623294123,
      "unique_users": 321039.545189652,
      "pages_per_visit": 4.80073019102893
    },
    {
      "global_rank": 19510,
      "category_rank": 29,
      "domain": "wikiquote.org",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 4070481.10740302,
      "curr_month_visits": 4070481.10740302,
      "unique_users": 2733053.1758358,
      "pages_per_visit": 1.95282416478578
    },
    {
      "global_rank": 27408,
      "category_rank": 29,
      "domain": "convertunits.com",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 3436939.72563851,
      "curr_month_visits": 3436939.72563851,
      "unique_users": 2452616.31182366,
      "pages_per_visit": 1.48695901058345
    },
    {
      "global_rank": 13360,
      "category_rank": 29,
      "domain": "wikimapia.org",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 2722681.05941399,
      "curr_month_visits": 2722681.05941399,
      "unique_users": 1698644.38259743,
      "pages_per_visit": 11.8365676234525
    },
    {
      "global_rank": 1283,
      "category_rank": 29,
      "domain": "truyenfull.io",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 44091590.0560084,
      "curr_month_visits": 44091590.0560084,
      "unique_users": 2116073.16499046,
      "pages_per_visit": 10.2282942597884
    },
    {
      "global_rank": 110314,
      "category_rank": 29,
      "domain": "bosai.go.jp",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 689679.074971611,
      "curr_month_visits": 689679.074971611,
      "unique_users": 184720.218997217,
      "pages_per_visit": 1.95969551080251
    },
    {
      "global_rank": 21226,
      "category_rank": 30,
      "domain": "menetrendek.hu",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 4636582.53211807,
      "curr_month_visits": 4636582.53211807,
      "unique_users": 958088.168974336,
      "pages_per_visit": 2.03391396789697
    },
    {
      "global_rank": 22942,
      "category_rank": 30,
      "domain": "serialssolutions.com",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 2671216.24423003,
      "curr_month_visits": 2671216.24423003,
      "unique_users": 918767.087783921,
      "pages_per_visit": 3.97554059535834
    },
    {
      "global_rank": 112707,
      "category_rank": 30,
      "domain": "gfz-potsdam.de",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 588467.009606623,
      "curr_month_visits": 588467.009606623,
      "unique_users": 147656.444530968,
      "pages_per_visit": 2.65352000187852
    },
    {
      "global_rank": 34674,
      "category_rank": 30,
      "domain": "general-medicare.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 1224481.01115715,
      "curr_month_visits": 1224481.01115715,
      "unique_users": 705979.25582114,
      "pages_per_visit": 1.81505995717619
    },
    {
      "global_rank": 111415,
      "category_rank": 30,
      "domain": "u-can.jp",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 351290.457668772,
      "curr_month_visits": 351290.457668772,
      "unique_users": 97620.5804489487,
      "pages_per_visit": 10.2990518978053
    },
    {
      "global_rank": 14024,
      "category_rank": 30,
      "domain": "city-data.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 4727691.73205733,
      "curr_month_visits": 4727691.73205733,
      "unique_users": 3009904.8424022,
      "pages_per_visit": 3.59415843644829
    },
    {
      "global_rank": 105326,
      "category_rank": 30,
      "domain": "obd-memorial.ru",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 177055.159365201,
      "curr_month_visits": 177055.159365201,
      "unique_users": 75977.4605471216,
      "pages_per_visit": 13.1605711148459
    },
    {
      "global_rank": 42892,
      "category_rank": 30,
      "domain": "rcsb.org",
      "category": "Science_and_Education/History",
      "avg_month_visits": 1247296.95855528,
      "curr_month_visits": 1247296.95855528,
      "unique_users": 492930.526063233,
      "pages_per_visit": 3.98234072271039
    },
    {
      "global_rank": 144363,
      "category_rank": 30,
      "domain": "aanda.org",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 390527.392128375,
      "curr_month_visits": 390527.392128375,
      "unique_users": 153476.71534957,
      "pages_per_visit": 2.1286565514469
    },
    {
      "global_rank": 92354,
      "category_rank": 30,
      "domain": "sciencenotes.org",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 809803.118370995,
      "curr_month_visits": 809803.118370995,
      "unique_users": 526897.143656683,
      "pages_per_visit": 1.73237377382619
    },
    {
      "global_rank": 93041,
      "category_rank": 31,
      "domain": "instrument.com.cn",
      "category": "Science_and_Education/History",
      "avg_month_visits": 660133.252939984,
      "curr_month_visits": 660133.252939984,
      "unique_users": 393320.156523573,
      "pages_per_visit": 2.21181350983914
    },
    {
      "global_rank": 105870,
      "category_rank": 31,
      "domain": "millercenter.org",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 550315.306487614,
      "curr_month_visits": 550315.306487614,
      "unique_users": 362646.781581922,
      "pages_per_visit": 1.81092620497343
    },
    {
      "global_rank": 113835,
      "category_rank": 31,
      "domain": "ametsoc.org",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 498440.362201275,
      "curr_month_visits": 498440.362201275,
      "unique_users": 212077.168029406,
      "pages_per_visit": 2.28677638557511
    },
    {
      "global_rank": 23886,
      "category_rank": 31,
      "domain": "ushmm.org",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 2862569.66043456,
      "curr_month_visits": 2862569.66043456,
      "unique_users": 1928679.43349218,
      "pages_per_visit": 2.21118573570766
    },
    {
      "global_rank": 194741,
      "category_rank": 31,
      "domain": "nationalhonorsociety.org",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 210404.228361946,
      "curr_month_visits": 210404.228361946,
      "unique_users": 121204.399365155,
      "pages_per_visit": 2.72243604799895
    },
    {
      "global_rank": 2666,
      "category_rank": 31,
      "domain": "geoguessr.com",
      "category": "Science_and_Education",
      "avg_month_visits": 15538056.8559144,
      "curr_month_visits": 15538056.8559144,
      "unique_users": 5561308.17779807,
      "pages_per_visit": 6.64702612715716
    },
    {
      "global_rank": 43256,
      "category_rank": 31,
      "domain": "cmu.edu.tw",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 1535258.74103994,
      "curr_month_visits": 1535258.74103994,
      "unique_users": 781211.603483452,
      "pages_per_visit": 3.24636949967395
    },
    {
      "global_rank": 64270,
      "category_rank": 31,
      "domain": "nature.org",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 972393.283616701,
      "curr_month_visits": 972393.283616701,
      "unique_users": 623865.133240873,
      "pages_per_visit": 2.03811855343612
    },
    {
      "global_rank": 1359,
      "category_rank": 31,
      "domain": "ixl.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 34692817.6235734,
      "curr_month_visits": 34692817.6235734,
      "unique_users": 6606699.06565515,
      "pages_per_visit": 6.70521500455334
    },
    {
      "global_rank": 114193,
      "category_rank": 31,
      "domain": "btt.network",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 466270.470286249,
      "curr_month_visits": 466270.470286249,
      "unique_users": 358720.434172965,
      "pages_per_visit": 2.68416548152503
    },
    {
      "global_rank": 30460,
      "category_rank": 31,
      "domain": "oraridiapertura24.it",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 2799314.93262151,
      "curr_month_visits": 2799314.93262151,
      "unique_users": 1984251.12160704,
      "pages_per_visit": 1.53721988331072
    },
    {
      "global_rank": 144888,
      "category_rank": 31,
      "domain": "agenaastro.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 303876.748223522,
      "curr_month_visits": 303876.748223522,
      "unique_users": 123971.991757827,
      "pages_per_visit": 3.15262047120863
    },
    {
      "global_rank": 34144,
      "category_rank": 32,
      "domain": "gelbeseiten.de",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 2409793.01073778,
      "curr_month_visits": 2409793.01073778,
      "unique_users": 1941817.44342236,
      "pages_per_visit": 1.80808327538556
    },
    {
      "global_rank": 96572,
      "category_rank": 32,
      "domain": "eurofins.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 510504.207940221,
      "curr_month_visits": 510504.207940221,
      "unique_users": 199740.445609376,
      "pages_per_visit": 3.9518600243525
    },
    {
      "global_rank": 144987,
      "category_rank": 32,
      "domain": "aas.org",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 368035.21796701,
      "curr_month_visits": 368035.21796701,
      "unique_users": 119156.883470031,
      "pages_per_visit": 3.1735436004792
    },
    {
      "global_rank": 7516,
      "category_rank": 32,
      "domain": "gov.cz",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 6257034.93823328,
      "curr_month_visits": 6257034.93823328,
      "unique_users": 2443178.55773431,
      "pages_per_visit": 4.01513767164404
    },
    {
      "global_rank": 16618,
      "category_rank": 32,
      "domain": "instantstreetview.com",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 977154.947517221,
      "curr_month_visits": 977154.947517221,
      "unique_users": 441081.451150875,
      "pages_per_visit": 74.5127237272692
    },
    {
      "global_rank": 65611,
      "category_rank": 32,
      "domain": "woodlandtrust.org.uk",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 1085475.40429112,
      "curr_month_visits": 1085475.40429112,
      "unique_users": 730004.602289573,
      "pages_per_visit": 2.36928506523387
    },
    {
      "global_rank": 197793,
      "category_rank": 32,
      "domain": "studyaustralia.gov.au",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 251399.115607207,
      "curr_month_visits": 251399.115607207,
      "unique_users": 134816.326519447,
      "pages_per_visit": 2.5707649962645
    },
    {
      "global_rank": 199653,
      "category_rank": 32,
      "domain": "vipleague.la",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 451668.788096777,
      "curr_month_visits": 451668.788096777,
      "unique_users": 181967.534350443,
      "pages_per_visit": 1.38601276015474
    },
    {
      "global_rank": 107624,
      "category_rank": 33,
      "domain": "sutori.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 594370.833193214,
      "curr_month_visits": 594370.833193214,
      "unique_users": 346020.077332497,
      "pages_per_visit": 2.01184926016322
    },
    {
      "global_rank": 98346,
      "category_rank": 33,
      "domain": "clackamas.edu",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 352505.703319282,
      "curr_month_visits": 352505.703319282,
      "unique_users": 57622.7249011484,
      "pages_per_visit": 9.65257471522143
    },
    {
      "global_rank": 163048,
      "category_rank": 33,
      "domain": "swarovskioptik.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 241608.974280412,
      "curr_month_visits": 241608.974280412,
      "unique_users": 120006.771383397,
      "pages_per_visit": 3.36698378301343
    },
    {
      "global_rank": 38613,
      "category_rank": 33,
      "domain": "yellowpages.com.eg",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 2261870.23389795,
      "curr_month_visits": 2261870.23389795,
      "unique_users": 1504074.48452516,
      "pages_per_visit": 1.95878565185177
    },
    {
      "global_rank": 46719,
      "category_rank": 33,
      "domain": "asm.org",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 1551096.22635019,
      "curr_month_visits": 1551096.22635019,
      "unique_users": 735632.641218837,
      "pages_per_visit": 1.95259432370966
    },
    {
      "global_rank": 126148,
      "category_rank": 33,
      "domain": "convenia.com.br",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 385750.756315601,
      "curr_month_visits": 385750.756315601,
      "unique_users": 184513.769531308,
      "pages_per_visit": 3.40010885412643
    },
    {
      "global_rank": 33396,
      "category_rank": 33,
      "domain": "socratic.org",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 2995083.51367619,
      "curr_month_visits": 2995083.51367619,
      "unique_users": 2105072.80629559,
      "pages_per_visit": 1.45377949594254
    },
    {
      "global_rank": 17428,
      "category_rank": 33,
      "domain": "kudikina.ru",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 4729516.74957907,
      "curr_month_visits": 4729516.74957907,
      "unique_users": 1724608.03171218,
      "pages_per_visit": 2.4190822715511
    },
    {
      "global_rank": 67099,
      "category_rank": 33,
      "domain": "framaforms.org",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 778743.536999526,
      "curr_month_visits": 778743.536999526,
      "unique_users": 414744.18386562,
      "pages_per_visit": 2.71420634760065
    },
    {
      "global_rank": 23687,
      "category_rank": 33,
      "domain": "cometium.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 5895782.34496055,
      "curr_month_visits": 5895782.34496055,
      "unique_users": 3604966.7423006,
      "pages_per_visit": 1.15733237571649
    },
    {
      "global_rank": 114949,
      "category_rank": 33,
      "domain": "iirs.gov.in",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 393373.891977512,
      "curr_month_visits": 393373.891977512,
      "unique_users": 162224.7564396,
      "pages_per_visit": 5.55295043199096
    },
    {
      "global_rank": 38642,
      "category_rank": 34,
      "domain": "411.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 1566284.03128482,
      "curr_month_visits": 1566284.03128482,
      "unique_users": 1226023.62979313,
      "pages_per_visit": 2.55899955772206
    },
    {
      "global_rank": 101671,
      "category_rank": 34,
      "domain": "carlroth.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 539066.958055462,
      "curr_month_visits": 539066.958055462,
      "unique_users": 298847.642359859,
      "pages_per_visit": 2.76567227979026
    },
    {
      "global_rank": 166247,
      "category_rank": 34,
      "domain": "nextspaceflight.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 315631.311486071,
      "curr_month_visits": 315631.311486071,
      "unique_users": 130215.514671345,
      "pages_per_visit": 2.07281697219867
    },
    {
      "global_rank": 24795,
      "category_rank": 34,
      "domain": "mensagemaniversario.com.br",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 4061866.23213552,
      "curr_month_visits": 4061866.23213552,
      "unique_users": 2708334.45583501,
      "pages_per_visit": 1.41944519249211
    },
    {
      "global_rank": 115109,
      "category_rank": 34,
      "domain": "trustmyscience.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 725222.085548628,
      "curr_month_visits": 725222.085548628,
      "unique_users": 400697.429004412,
      "pages_per_visit": 1.57586603753447
    },
    {
      "global_rank": 69943,
      "category_rank": 34,
      "domain": "nrdc.org",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 842214.061860841,
      "curr_month_visits": 842214.061860841,
      "unique_users": 539712.793278983,
      "pages_per_visit": 2.20476219075597
    },
    {
      "global_rank": 49848,
      "category_rank": 34,
      "domain": "endnote.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 1327873.46209442,
      "curr_month_visits": 1327873.46209442,
      "unique_users": 604990.160489618,
      "pages_per_visit": 2.76697242516095
    },
    {
      "global_rank": 234884,
      "category_rank": 34,
      "domain": "ascentfunding.com",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 181917.105461373,
      "curr_month_visits": 181917.105461373,
      "unique_users": 93459.687102554,
      "pages_per_visit": 3.75521518410549
    },
    {
      "global_rank": 126815,
      "category_rank": 34,
      "domain": "studentarteveldehsbe.sharepoint.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 401114.67393721,
      "curr_month_visits": 401114.67393721,
      "unique_users": 32905.1020040975,
      "pages_per_visit": 3.78911386293946
    },
    {
      "global_rank": 37155,
      "category_rank": 34,
      "domain": "petrescue.com.au",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 1368970.45304512,
      "curr_month_visits": 1368970.45304512,
      "unique_users": 388076.640324644,
      "pages_per_visit": 6.5995583637197
    },
    {
      "global_rank": 1427,
      "category_rank": 34,
      "domain": "brightspace.com",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 34997545.3858077,
      "curr_month_visits": 34997545.3858077,
      "unique_users": 2107456.02974309,
      "pages_per_visit": 8.63936221356942
    },
    {
      "global_rank": 18250,
      "category_rank": 34,
      "domain": "maps.gsi.go.jp",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 1982478.84030612,
      "curr_month_visits": 1982478.84030612,
      "unique_users": 772538.557884548,
      "pages_per_visit": 15.7035307319973
    },
    {
      "global_rank": 108300,
      "category_rank": 34,
      "domain": "mountvernon.org",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 637117.163029119,
      "curr_month_visits": 637117.163029119,
      "unique_users": 426315.680283365,
      "pages_per_visit": 1.93314603583027
    },
    {
      "global_rank": 1546,
      "category_rank": 35,
      "domain": "chegg.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 32590971.5799378,
      "curr_month_visits": 32590971.5799378,
      "unique_users": 11498862.1877102,
      "pages_per_visit": 5.87589472923347
    },
    {
      "global_rank": 38609,
      "category_rank": 35,
      "domain": "shelterluv.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 1406747.53474329,
      "curr_month_visits": 1406747.53474329,
      "unique_users": 596938.614958355,
      "pages_per_visit": 5.73323046174868
    },
    {
      "global_rank": 115586,
      "category_rank": 35,
      "domain": "rics.org",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 428765.360175604,
      "curr_month_visits": 428765.360175604,
      "unique_users": 204370.312517555,
      "pages_per_visit": 3.66363136996998
    },
    {
      "global_rank": 49981,
      "category_rank": 35,
      "domain": "europepmc.org",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 1485671.23712711,
      "curr_month_visits": 1485671.23712711,
      "unique_users": 938185.85172712,
      "pages_per_visit": 1.75045041526778
    },
    {
      "global_rank": 3039,
      "category_rank": 35,
      "domain": "marinetraffic.com",
      "category": "Science_and_Education",
      "avg_month_visits": 15748543.1409176,
      "curr_month_visits": 15748543.1409176,
      "unique_users": 3575123.27448115,
      "pages_per_visit": 7.23639588317331
    },
    {
      "global_rank": 129906,
      "category_rank": 35,
      "domain": "ehb.be",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 330741.21897019,
      "curr_month_visits": 330741.21897019,
      "unique_users": 40798.098894454,
      "pages_per_visit": 7.01350597240615
    },
    {
      "global_rank": 103554,
      "category_rank": 35,
      "domain": "shimadzu.co.jp",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 526631.365953179,
      "curr_month_visits": 526631.365953179,
      "unique_users": 283108.324445571,
      "pages_per_visit": 3.09031252467883
    },
    {
      "global_rank": 18295,
      "category_rank": 35,
      "domain": "poznatsvet.cz",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 4053172.4288138,
      "curr_month_visits": 4053172.4288138,
      "unique_users": 1646061.0773446,
      "pages_per_visit": 1.52339412716281
    },
    {
      "global_rank": 74755,
      "category_rank": 35,
      "domain": "obmep.org.br",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 958975.455595647,
      "curr_month_visits": 958975.455595647,
      "unique_users": 403086.449574116,
      "pages_per_visit": 4.4230068707579
    },
    {
      "global_rank": 24965,
      "category_rank": 35,
      "domain": "citethisforme.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 1578532.84900006,
      "curr_month_visits": 1578532.84900006,
      "unique_users": 907600.300075769,
      "pages_per_visit": 7.89844983382333
    },
    {
      "global_rank": 167090,
      "category_rank": 35,
      "domain": "clockfaceonline.co.uk",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 317573.489021412,
      "curr_month_visits": 317573.489021412,
      "unique_users": 156815.530849068,
      "pages_per_visit": 1.88498890946194
    },
    {
      "global_rank": 104173,
      "category_rank": 36,
      "domain": "scholarsconferences.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 351409.068437842,
      "curr_month_visits": 351409.068437842,
      "unique_users": 248960.017588031,
      "pages_per_visit": 1.28979390788713
    },
    {
      "global_rank": 111010,
      "category_rank": 36,
      "domain": "historyhit.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 569761.26494376,
      "curr_month_visits": 569761.26494376,
      "unique_users": 364066.127258085,
      "pages_per_visit": 1.90951837746755
    },
    {
      "global_rank": 167950,
      "category_rank": 36,
      "domain": "firstlightoptics.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 228886.412031479,
      "curr_month_visits": 228886.412031479,
      "unique_users": 82725.8892180997,
      "pages_per_visit": 3.9381671832707
    },
    {
      "global_rank": 19127,
      "category_rank": 36,
      "domain": "24timezones.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 4057307.14566123,
      "curr_month_visits": 4057307.14566123,
      "unique_users": 2536036.90509626,
      "pages_per_visit": 2.08663088713773
    },
    {
      "global_rank": 130326,
      "category_rank": 36,
      "domain": "helha.be",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 327110.131188893,
      "curr_month_visits": 327110.131188893,
      "unique_users": 43240.1393782899,
      "pages_per_visit": 6.53892458108949
    },
    {
      "global_rank": 50259,
      "category_rank": 36,
      "domain": "atyponrex.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 995198.58000937,
      "curr_month_visits": 995198.58000937,
      "unique_users": 246547.808080745,
      "pages_per_visit": 4.84075025764071
    },
    {
      "global_rank": 75042,
      "category_rank": 36,
      "domain": "dnv.com",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 742346.386075219,
      "curr_month_visits": 742346.386075219,
      "unique_users": 313467.303362863,
      "pages_per_visit": 3.81400723052668
    },
    {
      "global_rank": 41599,
      "category_rank": 36,
      "domain": "11880.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 2138159.22261648,
      "curr_month_visits": 2138159.22261648,
      "unique_users": 1588878.55341354,
      "pages_per_visit": 1.83921234889647
    },
    {
      "global_rank": 238721,
      "category_rank": 36,
      "domain": "globalscholarships.com",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 233351.758614904,
      "curr_month_visits": 233351.758614904,
      "unique_users": 66210.2484262802,
      "pages_per_visit": 1.96651603651291
    },
    {
      "global_rank": 27374,
      "category_rank": 36,
      "domain": "lib.ru",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 2798930.71177969,
      "curr_month_visits": 2798930.71177969,
      "unique_users": 1333606.05591124,
      "pages_per_visit": 2.00798823282204
    },
    {
      "global_rank": 253117,
      "category_rank": 37,
      "domain": "unischolars.com",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 172428.780016501,
      "curr_month_visits": 172428.780016501,
      "unique_users": 90384.8206570903,
      "pages_per_visit": 2.92149175371281
    },
    {
      "global_rank": 51274,
      "category_rank": 37,
      "domain": "a-z-animals.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 1356224.37848383,
      "curr_month_visits": 1356224.37848383,
      "unique_users": 932042.801712438,
      "pages_per_visit": 1.95446306655588
    },
    {
      "global_rank": 1580,
      "category_rank": 37,
      "domain": "academia.edu",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 39806360.3014094,
      "curr_month_visits": 39806360.3014094,
      "unique_users": 22375064.3621409,
      "pages_per_visit": 2.58822357374822
    },
    {
      "global_rank": 130711,
      "category_rank": 37,
      "domain": "uprav.ru",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 285426.090960761,
      "curr_month_visits": 285426.090960761,
      "unique_users": 119812.703739136,
      "pages_per_visit": 5.16963559473935
    },
    {
      "global_rank": 3217,
      "category_rank": 37,
      "domain": "laposte.net",
      "category": "Science_and_Education",
      "avg_month_visits": 16933927.0005597,
      "curr_month_visits": 16933927.0005597,
      "unique_users": 1298580.38800444,
      "pages_per_visit": 7.21017428083094
    },
    {
      "global_rank": 168806,
      "category_rank": 37,
      "domain": "hubblesite.org",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 349209.168027094,
      "curr_month_visits": 349209.168027094,
      "unique_users": 205452.587216065,
      "pages_per_visit": 2.26744638667777
    },
    {
      "global_rank": 46325,
      "category_rank": 37,
      "domain": "chiens-de-france.com",
      "category": "Science_and_Education",
      "avg_month_visits": 819134.215800946,
      "curr_month_visits": 819134.215800946,
      "unique_users": 279448.557115714,
      "pages_per_visit": 11.1969465636398
    },
    {
      "global_rank": 44905,
      "category_rank": 37,
      "domain": "novayagazeta.eu",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 2426171.92959353,
      "curr_month_visits": 2426171.92959353,
      "unique_users": 665382.052382503,
      "pages_per_visit": 1.67715803200291
    },
    {
      "global_rank": 106553,
      "category_rank": 37,
      "domain": "revvitycloud.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 421460.744318068,
      "curr_month_visits": 421460.744318068,
      "unique_users": 18807.7428360114,
      "pages_per_visit": 12.1461658546693
    },
    {
      "global_rank": 121602,
      "category_rank": 37,
      "domain": "medievalists.net",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 509747.229840444,
      "curr_month_visits": 509747.229840444,
      "unique_users": 301564.791265178,
      "pages_per_visit": 1.58746898480457
    },
    {
      "global_rank": 39880,
      "category_rank": 37,
      "domain": "eliteforgetful.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 852518.501788821,
      "curr_month_visits": 852518.501788821,
      "unique_users": 438922.165716319,
      "pages_per_visit": 4.0116394433146
    },
    {
      "global_rank": 75671,
      "category_rank": 37,
      "domain": "climate-data.org",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 869321.871356769,
      "curr_month_visits": 869321.871356769,
      "unique_users": 588018.805706213,
      "pages_per_visit": 2.21785351692204
    },
    {
      "global_rank": 76649,
      "category_rank": 38,
      "domain": "ecycle.com.br",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 1048775.24823368,
      "curr_month_visits": 1048775.24823368,
      "unique_users": 816004.559319872,
      "pages_per_visit": 1.46146705094948
    },
    {
      "global_rank": 45413,
      "category_rank": 38,
      "domain": "astralcodexten.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 1261769.89250179,
      "curr_month_visits": 1261769.89250179,
      "unique_users": 340041.133601866,
      "pages_per_visit": 3.13675945351741
    },
    {
      "global_rank": 122317,
      "category_rank": 38,
      "domain": "leica-geosystems.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 382818.739028096,
      "curr_month_visits": 382818.739028096,
      "unique_users": 192739.093684368,
      "pages_per_visit": 3.73722937333832
    },
    {
      "global_rank": 53937,
      "category_rank": 38,
      "domain": "rjmart.cn",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 858790.774707253,
      "curr_month_visits": 858790.774707253,
      "unique_users": 93481.5719816389,
      "pages_per_visit": 6.16485862053204
    },
    {
      "global_rank": 270529,
      "category_rank": 38,
      "domain": "gatescambridge.org",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 178241.339245168,
      "curr_month_visits": 178241.339245168,
      "unique_users": 86511.9705200402,
      "pages_per_visit": 2.90600613048228
    },
    {
      "global_rank": 174026,
      "category_rank": 38,
      "domain": "astronomy.ru",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 243290.143730863,
      "curr_month_visits": 243290.143730863,
      "unique_users": 63508.0482618498,
      "pages_per_visit": 4.58240189817475
    },
    {
      "global_rank": 1079,
      "category_rank": 38,
      "domain": "testbook.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 51814995.1851674,
      "curr_month_visits": 51814995.1851674,
      "unique_users": 21087152.5024156,
      "pages_per_visit": 3.76081275720747
    },
    {
      "global_rank": 131407,
      "category_rank": 38,
      "domain": "myhumandesign.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 493974.403990842,
      "curr_month_visits": 493974.403990842,
      "unique_users": 203683.291860111,
      "pages_per_visit": 3.70665324406725
    },
    {
      "global_rank": 1638,
      "category_rank": 38,
      "domain": "reshak.ru",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 36936887.3480439,
      "curr_month_visits": 36936887.3480439,
      "unique_users": 9471559.19691934,
      "pages_per_visit": 3.19913270422846
    },
    {
      "global_rank": 175546,
      "category_rank": 39,
      "domain": "griffithobservatory.org",
      "category": "Science_and_Education/History",
      "avg_month_visits": 277510.056969012,
      "curr_month_visits": 277510.056969012,
      "unique_users": 172273.44301927,
      "pages_per_visit": 2.30741408500509
    },
    {
      "global_rank": 3470,
      "category_rank": 39,
      "domain": "proquest.com",
      "category": "Science_and_Education",
      "avg_month_visits": 16837220.1384136,
      "curr_month_visits": 16837220.1384136,
      "unique_users": 6358072.33173872,
      "pages_per_visit": 4.21437830053948
    },
    {
      "global_rank": 122856,
      "category_rank": 39,
      "domain": "bgs.ac.uk",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 497130.008972585,
      "curr_month_visits": 497130.008972585,
      "unique_users": 249422.275037347,
      "pages_per_visit": 2.13335558770016
    },
    {
      "global_rank": 80158,
      "category_rank": 39,
      "domain": "ucanr.edu",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 812114.502622873,
      "curr_month_visits": 812114.502622873,
      "unique_users": 483780.327079161,
      "pages_per_visit": 2.66773325675992
    },
    {
      "global_rank": 48876,
      "category_rank": 39,
      "domain": "paginasamarillas.es",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 1535052.33916099,
      "curr_month_visits": 1535052.33916099,
      "unique_users": 1174989.06726967,
      "pages_per_visit": 1.76535604820278
    },
    {
      "global_rank": 111770,
      "category_rank": 39,
      "domain": "waters.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 491489.99606315,
      "curr_month_visits": 491489.99606315,
      "unique_users": 206218.888135699,
      "pages_per_visit": 2.87532913818746
    },
    {
      "global_rank": 28092,
      "category_rank": 39,
      "domain": "jitenon.jp",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 2231104.04027875,
      "curr_month_visits": 2231104.04027875,
      "unique_users": 1398003.9964006,
      "pages_per_visit": 3.75247426758964
    },
    {
      "global_rank": 132156,
      "category_rank": 39,
      "domain": "tds.ms",
      "category": "Science_and_Education/History",
      "avg_month_visits": 447769.596253578,
      "curr_month_visits": 447769.596253578,
      "unique_users": 163142.050789011,
      "pages_per_visit": 3.28861226535854
    },
    {
      "global_rank": 54217,
      "category_rank": 39,
      "domain": "illumina.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 924955.682253998,
      "curr_month_visits": 924955.682253998,
      "unique_users": 348284.726287426,
      "pages_per_visit": 5.16870627062573
    },
    {
      "global_rank": 179154,
      "category_rank": 40,
      "domain": "in-the-sky.org",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 329895.938379293,
      "curr_month_visits": 329895.938379293,
      "unique_users": 174247.141643976,
      "pages_per_visit": 2.58705948438594
    },
    {
      "global_rank": 54248,
      "category_rank": 40,
      "domain": "okayama-u.ac.jp",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 734703.603957125,
      "curr_month_visits": 734703.603957125,
      "unique_users": 284142.746944905,
      "pages_per_visit": 7.01685259515019
    },
    {
      "global_rank": 3722,
      "category_rank": 40,
      "domain": "manualslib.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 11113552.2476815,
      "curr_month_visits": 11113552.2476815,
      "unique_users": 7581855.2129343,
      "pages_per_visit": 6.76060857173305
    },
    {
      "global_rank": 128011,
      "category_rank": 40,
      "domain": "geoscienceworld.org",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 458375.639593349,
      "curr_month_visits": 458375.639593349,
      "unique_users": 218337.355824412,
      "pages_per_visit": 1.95092116918056
    },
    {
      "global_rank": 49398,
      "category_rank": 40,
      "domain": "heizoel24.de",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 2062948.55084317,
      "curr_month_visits": 2062948.55084317,
      "unique_users": 511500.756299595,
      "pages_per_visit": 2.02294095210874
    },
    {
      "global_rank": 128073,
      "category_rank": 40,
      "domain": "studentontask.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 589758.061086421,
      "curr_month_visits": 589758.061086421,
      "unique_users": 101383.337327681,
      "pages_per_visit": 2.35945605597669
    },
    {
      "global_rank": 28711,
      "category_rank": 40,
      "domain": "foulabook.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 2407443.28888902,
      "curr_month_visits": 2407443.28888902,
      "unique_users": 1337324.22650516,
      "pages_per_visit": 3.09030951761918
    },
    {
      "global_rank": 44015,
      "category_rank": 40,
      "domain": "hike-footwear.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 1352616.51332362,
      "curr_month_visits": 1352616.51332362,
      "unique_users": 703227.008472637,
      "pages_per_visit": 3.10916092371965
    },
    {
      "global_rank": 20209,
      "category_rank": 40,
      "domain": "satellites.pro",
      "category": "Science_and_Education/History",
      "avg_month_visits": 1285208.6757418,
      "curr_month_visits": 1285208.6757418,
      "unique_users": 740551.879211158,
      "pages_per_visit": 19.9152147372072
    },
    {
      "global_rank": 132579,
      "category_rank": 40,
      "domain": "crear-ac.co.jp",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 462894.332687547,
      "curr_month_visits": 462894.332687547,
      "unique_users": 231367.161314898,
      "pages_per_visit": 2.33133110160875
    },
    {
      "global_rank": 57926,
      "category_rank": 41,
      "domain": "gbif.org",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 884353.035648209,
      "curr_month_visits": 884353.035648209,
      "unique_users": 454470.348050201,
      "pages_per_visit": 3.90867173363634
    },
    {
      "global_rank": 128271,
      "category_rank": 41,
      "domain": "historic-uk.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 562628.056040529,
      "curr_month_visits": 562628.056040529,
      "unique_users": 361340.859348285,
      "pages_per_visit": 1.59386608661787
    },
    {
      "global_rank": 1772,
      "category_rank": 41,
      "domain": "jagranjosh.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 40271485.2363324,
      "curr_month_visits": 40271485.2363324,
      "unique_users": 22600583.3258347,
      "pages_per_visit": 2.07589574711731
    },
    {
      "global_rank": 133369,
      "category_rank": 41,
      "domain": "vinci.be",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 322322.973165309,
      "curr_month_visits": 322322.973165309,
      "unique_users": 46559.8072393883,
      "pages_per_visit": 7.05947007011265
    },
    {
      "global_rank": 50590,
      "category_rank": 41,
      "domain": "orgpage.ru",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 1529036.87906014,
      "curr_month_visits": 1529036.87906014,
      "unique_users": 1199282.93441919,
      "pages_per_visit": 1.67059818964271
    },
    {
      "global_rank": 130315,
      "category_rank": 41,
      "domain": "gisgeography.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 609280.399428369,
      "curr_month_visits": 609280.399428369,
      "unique_users": 408707.486547188,
      "pages_per_visit": 1.77792553707711
    },
    {
      "global_rank": 44700,
      "category_rank": 41,
      "domain": "tractive.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 1398556.39159123,
      "curr_month_visits": 1398556.39159123,
      "unique_users": 680503.132435071,
      "pages_per_visit": 3.2395183819926
    },
    {
      "global_rank": 22073,
      "category_rank": 41,
      "domain": "e-map.ne.jp",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 2668463.2304815,
      "curr_month_visits": 2668463.2304815,
      "unique_users": 1941032.06588568,
      "pages_per_visit": 3.32337177565592
    },
    {
      "global_rank": 179793,
      "category_rank": 41,
      "domain": "swri.edu",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 146974.71784876,
      "curr_month_visits": 146974.71784876,
      "unique_users": 76836.0223585348,
      "pages_per_visit": 2.63417238687505
    },
    {
      "global_rank": 113219,
      "category_rank": 41,
      "domain": "chemspider.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 446917.062375172,
      "curr_month_visits": 446917.062375172,
      "unique_users": 251444.733716147,
      "pages_per_visit": 2.61771392776286
    },
    {
      "global_rank": 29606,
      "category_rank": 42,
      "domain": "toolforge.org",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 2844810.63128127,
      "curr_month_visits": 2844810.63128127,
      "unique_users": 1685337.50810011,
      "pages_per_visit": 1.8364354234181
    },
    {
      "global_rank": 50780,
      "category_rank": 42,
      "domain": "meteomedia.de",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 2519341.07782541,
      "curr_month_visits": 2519341.07782541,
      "unique_users": 195957.348341662,
      "pages_per_visit": 1.35818232615943
    },
    {
      "global_rank": 133627,
      "category_rank": 42,
      "domain": "helmo.be",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 299653.152989636,
      "curr_month_visits": 299653.152989636,
      "unique_users": 38158.37193088,
      "pages_per_visit": 7.5418574199358
    },
    {
      "global_rank": 113865,
      "category_rank": 42,
      "domain": "fz-juelich.de",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 357341.889280409,
      "curr_month_visits": 357341.889280409,
      "unique_users": 99032.0644906965,
      "pages_per_visit": 6.55876776168995
    },
    {
      "global_rank": 45109,
      "category_rank": 42,
      "domain": "goodwillfinds.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 1123746.79637185,
      "curr_month_visits": 1123746.79637185,
      "unique_users": 493875.565473595,
      "pages_per_visit": 7.38304436808297
    },
    {
      "global_rank": 130754,
      "category_rank": 42,
      "domain": "meteo.fr",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 489225.601801246,
      "curr_month_visits": 489225.601801246,
      "unique_users": 111293.199120158,
      "pages_per_visit": 2.2472873091148
    },
    {
      "global_rank": 1795,
      "category_rank": 42,
      "domain": "education.gouv.fr",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 37161055.0265819,
      "curr_month_visits": 37161055.0265819,
      "unique_users": 7779161.65539814,
      "pages_per_visit": 3.00803404806143
    },
    {
      "global_rank": 58159,
      "category_rank": 42,
      "domain": "researchsquare.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 1099455.51670718,
      "curr_month_visits": 1099455.51670718,
      "unique_users": 505441.775904434,
      "pages_per_visit": 2.44059055518421
    },
    {
      "global_rank": 184960,
      "category_rank": 42,
      "domain": "iac.es",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 176041.768002399,
      "curr_month_visits": 176041.768002399,
      "unique_users": 83082.6680505929,
      "pages_per_visit": 4.87952294773012
    },
    {
      "global_rank": 3776,
      "category_rank": 42,
      "domain": "time.is",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 11840014.119024,
      "curr_month_visits": 11840014.119024,
      "unique_users": 5657937.55809491,
      "pages_per_visit": 6.22358864577377
    },
    {
      "global_rank": 192917,
      "category_rank": 43,
      "domain": "sao.ru",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 39360.0305297178,
      "curr_month_visits": 39360.0305297178,
      "unique_users": 12507.8435509554,
      "pages_per_visit": 105.306603344692
    },
    {
      "global_rank": 331820,
      "category_rank": 43,
      "domain": "paradigmshift.com.pk",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 195448.724883111,
      "curr_month_visits": 195448.724883111,
      "unique_users": 101465.626973729,
      "pages_per_visit": 1.92459420999478
    },
    {
      "global_rank": 3796,
      "category_rank": 43,
      "domain": "hitta.se",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 13946186.6109746,
      "curr_month_visits": 13946186.6109746,
      "unique_users": 5036217.39713251,
      "pages_per_visit": 4.78590675655532
    },
    {
      "global_rank": 45471,
      "category_rank": 43,
      "domain": "pawboost.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 1149638.20619132,
      "curr_month_visits": 1149638.20619132,
      "unique_users": 484687.020833893,
      "pages_per_visit": 3.73348477732403
    },
    {
      "global_rank": 31694,
      "category_rank": 43,
      "domain": "funity.jp",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 1601275.69394444,
      "curr_month_visits": 1601275.69394444,
      "unique_users": 561725.773022877,
      "pages_per_visit": 5.96719806162268
    },
    {
      "global_rank": 58394,
      "category_rank": 43,
      "domain": "royalsocietypublishing.org",
      "category": "Science_and_Education/History",
      "avg_month_visits": 1170586.80714238,
      "curr_month_visits": 1170586.80714238,
      "unique_users": 651223.119283643,
      "pages_per_visit": 1.93829427483613
    },
    {
      "global_rank": 136522,
      "category_rank": 43,
      "domain": "careers.duolingo.com",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 321307.42966281,
      "curr_month_visits": 321307.42966281,
      "unique_users": 188132.087050886,
      "pages_per_visit": 3.37906186621704
    },
    {
      "global_rank": 91088,
      "category_rank": 43,
      "domain": "scielo.org.bo",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 884904.724167192,
      "curr_month_visits": 884904.724167192,
      "unique_users": 592155.080769378,
      "pages_per_visit": 1.67268027606057
    },
    {
      "global_rank": 131826,
      "category_rank": 43,
      "domain": "topotijdreis.nl",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 119737.621851798,
      "curr_month_visits": 119737.621851798,
      "unique_users": 49035.133022011,
      "pages_per_visit": 35.6698353237416
    },
    {
      "global_rank": 32015,
      "category_rank": 44,
      "domain": "heinonline.org",
      "category": "Science_and_Education/History",
      "avg_month_visits": 1487606.12252285,
      "curr_month_visits": 1487606.12252285,
      "unique_users": 795205.209953393,
      "pages_per_visit": 5.05241811901286
    },
    {
      "global_rank": 1838,
      "category_rank": 44,
      "domain": "infourok.ru",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 37259662.692307,
      "curr_month_visits": 37259662.692307,
      "unique_users": 14365332.993842,
      "pages_per_visit": 2.36574516023692
    },
    {
      "global_rank": 25054,
      "category_rank": 44,
      "domain": "toolbaz.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 2823253.79698996,
      "curr_month_visits": 2823253.79698996,
      "unique_users": 749652.824958171,
      "pages_per_visit": 3.32509423316485
    },
    {
      "global_rank": 132406,
      "category_rank": 44,
      "domain": "eumetsat.int",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 369779.743100812,
      "curr_month_visits": 369779.743100812,
      "unique_users": 125078.619899002,
      "pages_per_visit": 4.04419769434625
    },
    {
      "global_rank": 58831,
      "category_rank": 44,
      "domain": "sandiegozoo.org",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 1112965.02838613,
      "curr_month_visits": 1112965.02838613,
      "unique_users": 632493.218706875,
      "pages_per_visit": 3.16063789414911
    },
    {
      "global_rank": 194436,
      "category_rank": 44,
      "domain": "asahikawa-med.ac.jp",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 216119.449945426,
      "curr_month_visits": 216119.449945426,
      "unique_users": 77802.2896539988,
      "pages_per_visit": 4.68608650157163
    },
    {
      "global_rank": 3809,
      "category_rank": 44,
      "domain": "azet.sk",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 10161722.9954895,
      "curr_month_visits": 10161722.9954895,
      "unique_users": 1002676.76348221,
      "pages_per_visit": 15.5195595492394
    },
    {
      "global_rank": 136647,
      "category_rank": 44,
      "domain": "sydneytafe.edu.au",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 147447.534624461,
      "curr_month_visits": 147447.534624461,
      "unique_users": 20236.7751654447,
      "pages_per_visit": 15.0258419386557
    },
    {
      "global_rank": 860216,
      "category_rank": 45,
      "domain": "the-instillery.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 218091.446652818,
      "curr_month_visits": 218091.446652818,
      "unique_users": 34172.3721565168,
      "pages_per_visit": 23.5676168843053
    },
    {
      "global_rank": 128069,
      "category_rank": 45,
      "domain": "chemistryworld.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 466685.065145928,
      "curr_month_visits": 466685.065145928,
      "unique_users": 271117.965492963,
      "pages_per_visit": 1.77910010534347
    },
    {
      "global_rank": 133699,
      "category_rank": 45,
      "domain": "ngac.cn",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 426315.237526626,
      "curr_month_visits": 426315.237526626,
      "unique_users": 195346.106496721,
      "pages_per_visit": 2.35032374793087
    },
    {
      "global_rank": 196295,
      "category_rank": 45,
      "domain": "cleardarksky.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 324812.949308535,
      "curr_month_visits": 324812.949308535,
      "unique_users": 138567.962339286,
      "pages_per_visit": 2.25971999124948
    },
    {
      "global_rank": 136963,
      "category_rank": 45,
      "domain": "henallux.be",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 397300.385774181,
      "curr_month_visits": 397300.385774181,
      "unique_users": 59744.2202642643,
      "pages_per_visit": 5.32165261809264
    },
    {
      "global_rank": 92770,
      "category_rank": 45,
      "domain": "australian.museum",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 789348.410904901,
      "curr_month_visits": 789348.410904901,
      "unique_users": 484272.203184833,
      "pages_per_visit": 1.6749832853094
    },
    {
      "global_rank": 59356,
      "category_rank": 45,
      "domain": "graphpad.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 942506.618657295,
      "curr_month_visits": 942506.618657295,
      "unique_users": 529860.850195094,
      "pages_per_visit": 3.04329079428452
    },
    {
      "global_rank": 26161,
      "category_rank": 45,
      "domain": "targeo.pl",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 2662827.68947116,
      "curr_month_visits": 2662827.68947116,
      "unique_users": 1643344.36076023,
      "pages_per_visit": 3.17201669782545
    },
    {
      "global_rank": 10807,
      "category_rank": 45,
      "domain": "jisho.org",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 5184158.54637046,
      "curr_month_visits": 5184158.54637046,
      "unique_users": 959640.389866878,
      "pages_per_visit": 5.96308256641436
    },
    {
      "global_rank": 55717,
      "category_rank": 45,
      "domain": "werkenntdenbesten.de",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 1350404.80160185,
      "curr_month_visits": 1350404.80160185,
      "unique_users": 1041844.2386945,
      "pages_per_visit": 2.28997992449641
    },
    {
      "global_rank": 33874,
      "category_rank": 45,
      "domain": "lifeder.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 2868101.43325642,
      "curr_month_visits": 2868101.43325642,
      "unique_users": 1776915.9869153,
      "pages_per_visit": 1.55903265930216
    },
    {
      "global_rank": 31902,
      "category_rank": 46,
      "domain": "ozone.ru",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 2343593.41970481,
      "curr_month_visits": 2343593.41970481,
      "unique_users": 1362621.79277749,
      "pages_per_visit": 1.77700659430323
    },
    {
      "global_rank": 59385,
      "category_rank": 46,
      "domain": "genome.gov",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 1288331.73501661,
      "curr_month_visits": 1288331.73501661,
      "unique_users": 817186.706651733,
      "pages_per_visit": 1.68393828793372
    },
    {
      "global_rank": 10814,
      "category_rank": 46,
      "domain": "sti.edu",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 5353773.39419239,
      "curr_month_visits": 5353773.39419239,
      "unique_users": 562687.644506078,
      "pages_per_visit": 9.67841775783395
    },
    {
      "global_rank": 1960,
      "category_rank": 46,
      "domain": "signupgenius.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 34664162.5728817,
      "curr_month_visits": 34664162.5728817,
      "unique_users": 14041488.5369289,
      "pages_per_visit": 3.17631433482451
    },
    {
      "global_rank": 35429,
      "category_rank": 46,
      "domain": "login.gov.az",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 2070253.29128134,
      "curr_month_visits": 2070253.29128134,
      "unique_users": 256124.149757261,
      "pages_per_visit": 3.57940507732509
    },
    {
      "global_rank": 27737,
      "category_rank": 46,
      "domain": "maps.yandex.ru",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 1191403.77956627,
      "curr_month_visits": 1191403.77956627,
      "unique_users": 827538.425781668,
      "pages_per_visit": 10.844813573445
    },
    {
      "global_rank": 363963,
      "category_rank": 46,
      "domain": "campuscommunicator.com",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 180243.630982356,
      "curr_month_visits": 180243.630982356,
      "unique_users": 116046.722745913,
      "pages_per_visit": 1.52052200939497
    },
    {
      "global_rank": 45729,
      "category_rank": 46,
      "domain": "statikco.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 934809.014356793,
      "curr_month_visits": 934809.014356793,
      "unique_users": 483344.574195246,
      "pages_per_visit": 2.03511667951745
    },
    {
      "global_rank": 199741,
      "category_rank": 46,
      "domain": "astronomie.de",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 215975.957492522,
      "curr_month_visits": 215975.957492522,
      "unique_users": 64256.1270169557,
      "pages_per_visit": 5.32791566292438
    },
    {
      "global_rank": 55264,
      "category_rank": 46,
      "domain": "greenfieldpuppies.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 698635.501985603,
      "curr_month_visits": 698635.501985603,
      "unique_users": 404533.41746551,
      "pages_per_visit": 5.03976383953032
    },
    {
      "global_rank": 128656,
      "category_rank": 46,
      "domain": "chemie.de",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 496800.952584702,
      "curr_month_visits": 496800.952584702,
      "unique_users": 331829.575626962,
      "pages_per_visit": 1.63121330530659
    },
    {
      "global_rank": 57199,
      "category_rank": 46,
      "domain": "golocal.de",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 1468450.66502851,
      "curr_month_visits": 1468450.66502851,
      "unique_users": 1297505.70281045,
      "pages_per_visit": 1.40805249733101
    },
    {
      "global_rank": 141800,
      "category_rank": 46,
      "domain": "o-hara.ac.jp",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 347352.492445942,
      "curr_month_visits": 347352.492445942,
      "unique_users": 130073.445896797,
      "pages_per_visit": 4.44007214650032
    },
    {
      "global_rank": 59629,
      "category_rank": 47,
      "domain": "labster.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 781889.059839046,
      "curr_month_visits": 781889.059839046,
      "unique_users": 360041.993500994,
      "pages_per_visit": 5.31730105878691
    },
    {
      "global_rank": 139769,
      "category_rank": 47,
      "domain": "ushistory.org",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 500951.397343955,
      "curr_month_visits": 500951.397343955,
      "unique_users": 340123.360404989,
      "pages_per_visit": 1.90253819379524
    },
    {
      "global_rank": 93446,
      "category_rank": 47,
      "domain": "climatecentral.org",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 252791.24990626,
      "curr_month_visits": 252791.24990626,
      "unique_users": 130050.355012743,
      "pages_per_visit": 14.4724606314606
    },
    {
      "global_rank": 46329,
      "category_rank": 47,
      "domain": "freetheocean.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 1198783.20531635,
      "curr_month_visits": 1198783.20531635,
      "unique_users": 130535.088931555,
      "pages_per_visit": 3.05426100697527
    },
    {
      "global_rank": 136518,
      "category_rank": 47,
      "domain": "spe.org",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 335175.085707992,
      "curr_month_visits": 335175.085707992,
      "unique_users": 157266.248054968,
      "pages_per_visit": 3.30461994524751
    },
    {
      "global_rank": 203169,
      "category_rank": 47,
      "domain": "amsmeteors.org",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 223189.917256574,
      "curr_month_visits": 223189.917256574,
      "unique_users": 149886.917680744,
      "pages_per_visit": 2.47538319039717
    },
    {
      "global_rank": 4126,
      "category_rank": 47,
      "domain": "larkoffice.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 13953588.2614099,
      "curr_month_visits": 13953588.2614099,
      "unique_users": 836530.028134317,
      "pages_per_visit": 10.0705861015929
    },
    {
      "global_rank": 35569,
      "category_rank": 47,
      "domain": "famikura-store.jp",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 1957814.84088767,
      "curr_month_visits": 1957814.84088767,
      "unique_users": 494177.276039136,
      "pages_per_visit": 5.81803429955974
    },
    {
      "global_rank": 129527,
      "category_rank": 47,
      "domain": "libgenesis.net",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 361851.274782724,
      "curr_month_visits": 361851.274782724,
      "unique_users": 218435.51002574,
      "pages_per_visit": 4.55820351894537
    },
    {
      "global_rank": 35792,
      "category_rank": 47,
      "domain": "vetprep.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 453296.106928238,
      "curr_month_visits": 453296.106928238,
      "unique_users": 48044.5062253691,
      "pages_per_visit": 54.2653015528169
    },
    {
      "global_rank": 10988,
      "category_rank": 47,
      "domain": "thefreedictionary.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 6384884.22504335,
      "curr_month_visits": 6384884.22504335,
      "unique_users": 3362750.19585004,
      "pages_per_visit": 2.90746675998535
    },
    {
      "global_rank": 27939,
      "category_rank": 47,
      "domain": "viamichelin.it",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 2281227.24438805,
      "curr_month_visits": 2281227.24438805,
      "unique_users": 1608008.80752092,
      "pages_per_visit": 3.82405891047424
    },
    {
      "global_rank": 60039,
      "category_rank": 47,
      "domain": "tuttitalia.it",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 972182.953043446,
      "curr_month_visits": 972182.953043446,
      "unique_users": 682009.767687706,
      "pages_per_visit": 2.48746082996597
    },
    {
      "global_rank": 146901,
      "category_rank": 47,
      "domain": "cityandguilds.com",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 295256.61270303,
      "curr_month_visits": 295256.61270303,
      "unique_users": 171875.443392371,
      "pages_per_visit": 3.81921690436995
    },
    {
      "global_rank": 130492,
      "category_rank": 48,
      "domain": "lernhelfer.de",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 444667.107988518,
      "curr_month_visits": 444667.107988518,
      "unique_users": 319907.748402475,
      "pages_per_visit": 1.76356446342906
    },
    {
      "global_rank": 36259,
      "category_rank": 48,
      "domain": "onepet.com.br",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 877450.310771258,
      "curr_month_visits": 877450.310771258,
      "unique_users": 43420.2421311115,
      "pages_per_visit": 25.0599611080447
    },
    {
      "global_rank": 148760,
      "category_rank": 48,
      "domain": "pic-chan.net",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 277240.808022669,
      "curr_month_visits": 277240.808022669,
      "unique_users": 180221.570677529,
      "pages_per_visit": 3.56054523614369
    },
    {
      "global_rank": 142589,
      "category_rank": 48,
      "domain": "geokniga.org",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 353318.380789816,
      "curr_month_visits": 353318.380789816,
      "unique_users": 177101.50658579,
      "pages_per_visit": 2.6137200053512
    },
    {
      "global_rank": 139938,
      "category_rank": 48,
      "domain": "besthistorysites.net",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 173489.329179628,
      "curr_month_visits": 173489.329179628,
      "unique_users": 128548.336445111,
      "pages_per_visit": 2.06054634478792
    },
    {
      "global_rank": 207296,
      "category_rank": 48,
      "domain": "zeiss.de",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 197686.285438044,
      "curr_month_visits": 197686.285438044,
      "unique_users": 131365.268669932,
      "pages_per_visit": 3.54484766615597
    },
    {
      "global_rank": 40612,
      "category_rank": 48,
      "domain": "guinnessworldrecords.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 1879201.0983833,
      "curr_month_visits": 1879201.0983833,
      "unique_users": 1398446.89492504,
      "pages_per_visit": 1.98508446303854
    },
    {
      "global_rank": 60036,
      "category_rank": 48,
      "domain": "neb.com",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 861107.08510214,
      "curr_month_visits": 861107.08510214,
      "unique_users": 317385.75515775,
      "pages_per_visit": 4.27982244238578
    },
    {
      "global_rank": 93505,
      "category_rank": 48,
      "domain": "fundacionaquae.org",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 799277.443492881,
      "curr_month_visits": 799277.443492881,
      "unique_users": 569773.229755801,
      "pages_per_visit": 1.66308734425024
    },
    {
      "global_rank": 47637,
      "category_rank": 48,
      "domain": "thedecorideas.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 1215558.96865152,
      "curr_month_visits": 1215558.96865152,
      "unique_users": 904979.203285131,
      "pages_per_visit": 5.09456820583365
    },
    {
      "global_rank": 43007,
      "category_rank": 49,
      "domain": "negisoku.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 2271568.61645654,
      "curr_month_visits": 2271568.61645654,
      "unique_users": 569299.033240791,
      "pages_per_visit": 1.85860094010261
    },
    {
      "global_rank": 60529,
      "category_rank": 49,
      "domain": "ibric.org",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 869283.71731822,
      "curr_month_visits": 869283.71731822,
      "unique_users": 382964.045118039,
      "pages_per_visit": 3.47227090223066
    },
    {
      "global_rank": 36260,
      "category_rank": 49,
      "domain": "pawfecthouse.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 1014926.21341072,
      "curr_month_visits": 1014926.21341072,
      "unique_users": 474105.708411928,
      "pages_per_visit": 2.99031264922069
    },
    {
      "global_rank": 4350,
      "category_rank": 49,
      "domain": "email.cz",
      "category": "Science_and_Education",
      "avg_month_visits": 16119303.0148713,
      "curr_month_visits": 16119303.0148713,
      "unique_users": 3307086.55839491,
      "pages_per_visit": 3.11559799702866
    },
    {
      "global_rank": 28250,
      "category_rank": 49,
      "domain": "maps.google.fr",
      "category": "Science_and_Education",
      "avg_month_visits": 5234149.7303374,
      "curr_month_visits": 5234149.7303374,
      "unique_users": 403232.928983346,
      "pages_per_visit": 4.65315723175457
    },
    {
      "global_rank": 209743,
      "category_rank": 49,
      "domain": "kasi.re.kr",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 237006.466538734,
      "curr_month_visits": 237006.466538734,
      "unique_users": 139301.215665088,
      "pages_per_visit": 2.17236050537195
    },
    {
      "global_rank": 143530,
      "category_rank": 49,
      "domain": "nsidc.org",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 455235.34429158,
      "curr_month_visits": 455235.34429158,
      "unique_users": 188937.415276415,
      "pages_per_visit": 2.57652647595642
    },
    {
      "global_rank": 11270,
      "category_rank": 49,
      "domain": "imagetotext.info",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 6312327.07494466,
      "curr_month_visits": 6312327.07494466,
      "unique_users": 2936376.72408201,
      "pages_per_visit": 2.43129273775669
    },
    {
      "global_rank": 41747,
      "category_rank": 49,
      "domain": "ans.app",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 693743.525464794,
      "curr_month_visits": 693743.525464794,
      "unique_users": 141388.22185486,
      "pages_per_visit": 11.6592709041368
    },
    {
      "global_rank": 148971,
      "category_rank": 49,
      "domain": "ucll.be",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 394944.30073254,
      "curr_month_visits": 394944.30073254,
      "unique_users": 98895.9243687785,
      "pages_per_visit": 4.64332329093997
    },
    {
      "global_rank": 147841,
      "category_rank": 50,
      "domain": "onepetro.org",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 428550.282624893,
      "curr_month_visits": 428550.282624893,
      "unique_users": 196573.641854209,
      "pages_per_visit": 2.25341694946954
    },
    {
      "global_rank": 61199,
      "category_rank": 50,
      "domain": "paperpile.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 1086997.04147188,
      "curr_month_visits": 1086997.04147188,
      "unique_users": 308751.426009522,
      "pages_per_visit": 3.18483932014742
    },
    {
      "global_rank": 137647,
      "category_rank": 50,
      "domain": "chem-station.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 437883.500046533,
      "curr_month_visits": 437883.500046533,
      "unique_users": 177002.84673966,
      "pages_per_visit": 2.15576831323291
    },
    {
      "global_rank": 4530,
      "category_rank": 50,
      "domain": "beenverified.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 13341858.0056556,
      "curr_month_visits": 13341858.0056556,
      "unique_users": 9432816.32786806,
      "pages_per_visit": 4.04725321559137
    },
    {
      "global_rank": 214336,
      "category_rank": 50,
      "domain": "obspm.fr",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 207442.6061549,
      "curr_month_visits": 207442.6061549,
      "unique_users": 82457.9747895604,
      "pages_per_visit": 4.79377806230134
    },
    {
      "global_rank": 140737,
      "category_rank": 50,
      "domain": "cruiserx.net",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 505411.550452474,
      "curr_month_visits": 505411.550452474,
      "unique_users": 322781.347974887,
      "pages_per_visit": 1.24561441058546
    },
    {
      "global_rank": 64234,
      "category_rank": 50,
      "domain": "designkit.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 812331.422670487,
      "curr_month_visits": 812331.422670487,
      "unique_users": 417499.270935788,
      "pages_per_visit": 3.51393059304863
    },
    {
      "global_rank": 43055,
      "category_rank": 50,
      "domain": "schule-infoportal.de",
      "category": "Science_and_Education/History",
      "avg_month_visits": 1539489.41046596,
      "curr_month_visits": 1539489.41046596,
      "unique_users": 69158.4370465567,
      "pages_per_visit": 6.06240119199582
    },
    {
      "global_rank": 28651,
      "category_rank": 50,
      "domain": "webcamtaxi.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 2007165.90345147,
      "curr_month_visits": 2007165.90345147,
      "unique_users": 699600.364790686,
      "pages_per_visit": 3.82389210458841
    },
    {
      "global_rank": 154012,
      "category_rank": 51,
      "domain": "nti.nl",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 361030.763739261,
      "curr_month_visits": 361030.763739261,
      "unique_users": 122350.140233017,
      "pages_per_visit": 2.78796794263004
    },
    {
      "global_rank": 1330,
      "category_rank": 51,
      "domain": "timeanddate.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 47677922.9449204,
      "curr_month_visits": 47677922.9449204,
      "unique_users": 26513056.6554543,
      "pages_per_visit": 2.48430651142712
    },
    {
      "global_rank": 64682,
      "category_rank": 51,
      "domain": "pn.com.ua",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 575309.679280529,
      "curr_month_visits": 575309.679280529,
      "unique_users": 215739.524692971,
      "pages_per_visit": 6.94529792491678
    },
    {
      "global_rank": 29431,
      "category_rank": 51,
      "domain": "mapcarta.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 2699510.58306108,
      "curr_month_visits": 2699510.58306108,
      "unique_users": 1848667.84253898,
      "pages_per_visit": 2.08699893960817
    },
    {
      "global_rank": 44931,
      "category_rank": 51,
      "domain": "citaty.net",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 1582227.55831156,
      "curr_month_visits": 1582227.55831156,
      "unique_users": 1001707.63669324,
      "pages_per_visit": 2.01845925417907
    },
    {
      "global_rank": 149664,
      "category_rank": 51,
      "domain": "vulkane.net",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 455753.540154306,
      "curr_month_visits": 455753.540154306,
      "unique_users": 123507.870858194,
      "pages_per_visit": 1.86828046527451
    },
    {
      "global_rank": 214740,
      "category_rank": 51,
      "domain": "iau.org",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 203946.42337073,
      "curr_month_visits": 203946.42337073,
      "unique_users": 105280.728298703,
      "pages_per_visit": 1.83867924074365
    },
    {
      "global_rank": 4583,
      "category_rank": 51,
      "domain": "mappy.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 12025138.6201925,
      "curr_month_visits": 12025138.6201925,
      "unique_users": 7018125.48340509,
      "pages_per_visit": 4.79705107264446
    },
    {
      "global_rank": 137847,
      "category_rank": 51,
      "domain": "chemguide.co.uk",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 393066.500856571,
      "curr_month_visits": 393066.500856571,
      "unique_users": 203048.068915078,
      "pages_per_visit": 1.8795161630263
    },
    {
      "global_rank": 4588,
      "category_rank": 52,
      "domain": "openstreetmap.org",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 6626033.20522702,
      "curr_month_visits": 6626033.20522702,
      "unique_users": 3903905.28981739,
      "pages_per_visit": 17.588474742412
    },
    {
      "global_rank": 48755,
      "category_rank": 52,
      "domain": "publicmediasignin.org",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 974426.126133972,
      "curr_month_visits": 974426.126133972,
      "unique_users": 750262.979142171,
      "pages_per_visit": 3.36175738553257
    },
    {
      "global_rank": 59785,
      "category_rank": 52,
      "domain": "arkenzoo.se",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 678795.171487649,
      "curr_month_visits": 678795.171487649,
      "unique_users": 323880.464146486,
      "pages_per_visit": 4.90670077166433
    },
    {
      "global_rank": 29837,
      "category_rank": 52,
      "domain": "whentaken.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 1267067.7195536,
      "curr_month_visits": 1267067.7195536,
      "unique_users": 266712.972212685,
      "pages_per_visit": 7.62548648636724
    },
    {
      "global_rank": 62747,
      "category_rank": 52,
      "domain": "nagasaki-u.ac.jp",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 757006.856930879,
      "curr_month_visits": 757006.856930879,
      "unique_users": 203941.290839619,
      "pages_per_visit": 7.46246574444615
    },
    {
      "global_rank": 152993,
      "category_rank": 52,
      "domain": "serbianmeteo.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 372566.988282707,
      "curr_month_visits": 372566.988282707,
      "unique_users": 46622.5615310325,
      "pages_per_visit": 2.66348397247415
    },
    {
      "global_rank": 64872,
      "category_rank": 52,
      "domain": "brisant.de",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 1364876.78821683,
      "curr_month_visits": 1364876.78821683,
      "unique_users": 1022971.64795136,
      "pages_per_visit": 1.39337673237266
    },
    {
      "global_rank": 444440,
      "category_rank": 52,
      "domain": "thegatesscholarship.org",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 211715.132019814,
      "curr_month_visits": 211715.132019814,
      "unique_users": 91915.2533315572,
      "pages_per_visit": 3.72318268685509
    },
    {
      "global_rank": 45814,
      "category_rank": 52,
      "domain": "mots-croises-solutions.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 1333582.94872931,
      "curr_month_visits": 1333582.94872931,
      "unique_users": 456742.741137451,
      "pages_per_visit": 2.87549261470781
    },
    {
      "global_rank": 11862,
      "category_rank": 52,
      "domain": "sinonimos.com.br",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 6274304.75632705,
      "curr_month_visits": 6274304.75632705,
      "unique_users": 2464990.30723824,
      "pages_per_visit": 3.14510253355625
    },
    {
      "global_rank": 218421,
      "category_rank": 52,
      "domain": "darksky.org",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 213693.8159484,
      "curr_month_visits": 213693.8159484,
      "unique_users": 130374.051867724,
      "pages_per_visit": 2.2041326967989
    },
    {
      "global_rank": 48858,
      "category_rank": 53,
      "domain": "top101lifehacks.com",
      "category": "Science_and_Education",
      "avg_month_visits": 1422374.7475804,
      "curr_month_visits": 1422374.7475804,
      "unique_users": 1067896.49262342,
      "pages_per_visit": 1.89711374776842
    },
    {
      "global_rank": 59937,
      "category_rank": 53,
      "domain": "petango.com",
      "category": "Science_and_Education",
      "avg_month_visits": 814957.675041119,
      "curr_month_visits": 814957.675041119,
      "unique_users": 393525.54139233,
      "pages_per_visit": 3.4418983958359
    },
    {
      "global_rank": 230496,
      "category_rank": 53,
      "domain": "nrao.edu",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 181786.546691548,
      "curr_month_visits": 181786.546691548,
      "unique_users": 87943.4496699474,
      "pages_per_visit": 3.5196146423958
    },
    {
      "global_rank": 64404,
      "category_rank": 53,
      "domain": "physiology.org",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 1017586.57882604,
      "curr_month_visits": 1017586.57882604,
      "unique_users": 545491.958867777,
      "pages_per_visit": 2.08058042981799
    },
    {
      "global_rank": 4666,
      "category_rank": 53,
      "domain": "amap.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 10437819.6322621,
      "curr_month_visits": 10437819.6322621,
      "unique_users": 4093499.34727596,
      "pages_per_visit": 6.31173121384039
    },
    {
      "global_rank": 11951,
      "category_rank": 53,
      "domain": "diki.pl",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 5297922.71637436,
      "curr_month_visits": 5297922.71637436,
      "unique_users": 1367588.47100971,
      "pages_per_visit": 4.16289330277383
    },
    {
      "global_rank": 161203,
      "category_rank": 54,
      "domain": "arteveldehogeschool.be",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 340201.385103076,
      "curr_month_visits": 340201.385103076,
      "unique_users": 79359.2224556587,
      "pages_per_visit": 2.29447112465028
    },
    {
      "global_rank": 234675,
      "category_rank": 54,
      "domain": "clearoutside.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 324933.540080291,
      "curr_month_visits": 324933.540080291,
      "unique_users": 71581.7230597576,
      "pages_per_visit": 1.7441030747884
    },
    {
      "global_rank": 49225,
      "category_rank": 54,
      "domain": "buzztests.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 932003.144925964,
      "curr_month_visits": 932003.144925964,
      "unique_users": 683126.396936085,
      "pages_per_visit": 4.73255980542103
    },
    {
      "global_rank": 51743,
      "category_rank": 54,
      "domain": "meteomaroc.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 1591504.59322673,
      "curr_month_visits": 1591504.59322673,
      "unique_users": 346904.628471732,
      "pages_per_visit": 1.82707155758132
    },
    {
      "global_rank": 1380,
      "category_rank": 54,
      "domain": "collegeboard.org",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 29752948.1737711,
      "curr_month_visits": 29752948.1737711,
      "unique_users": 6771612.6557392,
      "pages_per_visit": 8.70823155151767
    },
    {
      "global_rank": 4853,
      "category_rank": 54,
      "domain": "dictionary.com",
      "category": "Science_and_Education",
      "avg_month_visits": 16681847.7417589,
      "curr_month_visits": 16681847.7417589,
      "unique_users": 10227575.5379526,
      "pages_per_visit": 2.1630884013632
    },
    {
      "global_rank": 68452,
      "category_rank": 54,
      "domain": "lu.ch",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 632617.854318273,
      "curr_month_visits": 632617.854318273,
      "unique_users": 253166.586275282,
      "pages_per_visit": 4.55757153929457
    },
    {
      "global_rank": 143473,
      "category_rank": 54,
      "domain": "xumuk.ru",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 395133.939532939,
      "curr_month_visits": 395133.939532939,
      "unique_users": 260221.899462008,
      "pages_per_visit": 1.45754164116661
    },
    {
      "global_rank": 31143,
      "category_rank": 54,
      "domain": "falk.de",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 1140619.68298074,
      "curr_month_visits": 1140619.68298074,
      "unique_users": 521880.677876613,
      "pages_per_visit": 14.1755532162109
    },
    {
      "global_rank": 53262,
      "category_rank": 55,
      "domain": "xoyondo.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 1241080.0058547,
      "curr_month_visits": 1241080.0058547,
      "unique_users": 459099.690044997,
      "pages_per_visit": 2.43710738320567
    },
    {
      "global_rank": 13019,
      "category_rank": 55,
      "domain": "buchstaben.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 4990414.40545532,
      "curr_month_visits": 4990414.40545532,
      "unique_users": 1992244.81582249,
      "pages_per_visit": 3.85408177189028
    },
    {
      "global_rank": 68882,
      "category_rank": 55,
      "domain": "kalenderpedia.de",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 772977.274524577,
      "curr_month_visits": 772977.274524577,
      "unique_users": 603192.276213003,
      "pages_per_visit": 3.21098427782956
    },
    {
      "global_rank": 65130,
      "category_rank": 55,
      "domain": "juntendo.ac.jp",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 938835.399198351,
      "curr_month_visits": 938835.399198351,
      "unique_users": 532752.647862137,
      "pages_per_visit": 3.11461374049377
    },
    {
      "global_rank": 164330,
      "category_rank": 55,
      "domain": "customguide.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 331901.737336334,
      "curr_month_visits": 331901.737336334,
      "unique_users": 199711.642819368,
      "pages_per_visit": 2.22103078113768
    },
    {
      "global_rank": 235985,
      "category_rank": 55,
      "domain": "asc-csa.gc.ca",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 199908.364644093,
      "curr_month_visits": 199908.364644093,
      "unique_users": 112319.151011321,
      "pages_per_visit": 2.20505016610678
    },
    {
      "global_rank": 144339,
      "category_rank": 55,
      "domain": "sartorius.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 343981.280502011,
      "curr_month_visits": 343981.280502011,
      "unique_users": 181630.846884108,
      "pages_per_visit": 2.73713914463781
    },
    {
      "global_rank": 1408,
      "category_rank": 55,
      "domain": "khanacademy.org",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 31971723.1774179,
      "curr_month_visits": 31971723.1774179,
      "unique_users": 12103312.0977943,
      "pages_per_visit": 5.78838117580126
    },
    {
      "global_rank": 121124,
      "category_rank": 55,
      "domain": "scdongran.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 3256418.99716551,
      "curr_month_visits": 3256418.99716551,
      "unique_users": 1002457.61008463,
      "pages_per_visit": 5.26502119202642
    },
    {
      "global_rank": 106153,
      "category_rank": 55,
      "domain": "km.se",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 316665.876800267,
      "curr_month_visits": 316665.876800267,
      "unique_users": 72019.4703565359,
      "pages_per_visit": 7.85451160511528
    },
    {
      "global_rank": 5121,
      "category_rank": 55,
      "domain": "mapion.co.jp",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 11890228.8743463,
      "curr_month_visits": 11890228.8743463,
      "unique_users": 7823714.45091351,
      "pages_per_visit": 3.64830637228286
    },
    {
      "global_rank": 50044,
      "category_rank": 55,
      "domain": "puzzmo.com",
      "category": "Science_and_Education",
      "avg_month_visits": 1474675.72683794,
      "curr_month_visits": 1474675.72683794,
      "unique_users": 174737.725180509,
      "pages_per_visit": 3.30015801753611
    },
    {
      "global_rank": 32777,
      "category_rank": 55,
      "domain": "herohero.co",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 2371144.30673118,
      "curr_month_visits": 2371144.30673118,
      "unique_users": 538318.520970317,
      "pages_per_visit": 2.3811027005335
    },
    {
      "global_rank": 66754,
      "category_rank": 56,
      "domain": "cabidigitallibrary.org",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 938627.73083842,
      "curr_month_visits": 938627.73083842,
      "unique_users": 538337.532379459,
      "pages_per_visit": 1.93928420297317
    },
    {
      "global_rank": 33487,
      "category_rank": 56,
      "domain": "map.goo.ne.jp",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 1407400.3723758,
      "curr_month_visits": 1407400.3723758,
      "unique_users": 1012585.85758179,
      "pages_per_visit": 3.22005944295499
    },
    {
      "global_rank": 126323,
      "category_rank": 56,
      "domain": "positivephysics.org",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 203812.216703191,
      "curr_month_visits": 203812.216703191,
      "unique_users": 37914.017036944,
      "pages_per_visit": 13.6183785210047
    },
    {
      "global_rank": 299614,
      "category_rank": 56,
      "domain": "howtobeastoic.wordpress.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 82240.8993538898,
      "curr_month_visits": 82240.8993538898,
      "unique_users": 33379.6486842244,
      "pages_per_visit": 3.3065300287658
    },
    {
      "global_rank": 5255,
      "category_rank": 56,
      "domain": "dictionary.goo.ne.jp",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 15119080.6826821,
      "curr_month_visits": 15119080.6826821,
      "unique_users": 7052831.30551583,
      "pages_per_visit": 2.18267855902154
    },
    {
      "global_rank": 165253,
      "category_rank": 56,
      "domain": "whoi.edu",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 412099.356274925,
      "curr_month_visits": 412099.356274925,
      "unique_users": 226556.009593838,
      "pages_per_visit": 2.01287216203636
    },
    {
      "global_rank": 236638,
      "category_rank": 56,
      "domain": "stelvision.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 269960.578461666,
      "curr_month_visits": 269960.578461666,
      "unique_users": 155297.847365899,
      "pages_per_visit": 1.73542891357547
    },
    {
      "global_rank": 53859,
      "category_rank": 56,
      "domain": "eventfrog.ch",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 998530.492614752,
      "curr_month_visits": 998530.492614752,
      "unique_users": 511570.068347753,
      "pages_per_visit": 3.24284905169512
    },
    {
      "global_rank": 145504,
      "category_rank": 56,
      "domain": "bruker.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 383184.894448417,
      "curr_month_visits": 383184.894448417,
      "unique_users": 206828.512027149,
      "pages_per_visit": 2.70306886328777
    },
    {
      "global_rank": 69441,
      "category_rank": 56,
      "domain": "pincode.net.in",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 864281.092844477,
      "curr_month_visits": 864281.092844477,
      "unique_users": 549296.774670746,
      "pages_per_visit": 2.25943737775084
    },
    {
      "global_rank": 167192,
      "category_rank": 56,
      "domain": "trafficschool.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 122662.792400608,
      "curr_month_visits": 122662.792400608,
      "unique_users": 50633.0439167623,
      "pages_per_visit": 12.7647567824942
    },
    {
      "global_rank": 148230,
      "category_rank": 57,
      "domain": "colab.ws",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 421144.11136783,
      "curr_month_visits": 421144.11136783,
      "unique_users": 279337.33562146,
      "pages_per_visit": 1.3946458482878
    },
    {
      "global_rank": 13674,
      "category_rank": 57,
      "domain": "synonymer.se",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 5333206.04953009,
      "curr_month_visits": 5333206.04953009,
      "unique_users": 1493948.86240192,
      "pages_per_visit": 3.13757714716807
    },
    {
      "global_rank": 167354,
      "category_rank": 57,
      "domain": "eduson.tv",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 272854.875403308,
      "curr_month_visits": 272854.875403308,
      "unique_users": 67580.2886974081,
      "pages_per_visit": 6.73436863246268
    },
    {
      "global_rank": 5380,
      "category_rank": 57,
      "domain": "pons.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 11954150.4987361,
      "curr_month_visits": 11954150.4987361,
      "unique_users": 5789716.80146324,
      "pages_per_visit": 3.32572014571862
    },
    {
      "global_rank": 51022,
      "category_rank": 57,
      "domain": "truthfully.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 1311432.43042911,
      "curr_month_visits": 1311432.43042911,
      "unique_users": 791137.675713488,
      "pages_per_visit": 1.8303384431119
    },
    {
      "global_rank": 55356,
      "category_rank": 57,
      "domain": "thecanadianencyclopedia.ca",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 1359701.20312051,
      "curr_month_visits": 1359701.20312051,
      "unique_users": 820719.879103055,
      "pages_per_visit": 1.70030430295999
    },
    {
      "global_rank": 238350,
      "category_rank": 57,
      "domain": "solarsystemscope.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 226125.821066608,
      "curr_month_visits": 226125.821066608,
      "unique_users": 115470.973074251,
      "pages_per_visit": 2.10402717815593
    },
    {
      "global_rank": 107601,
      "category_rank": 57,
      "domain": "scielo.org.ar",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 759453.983193057,
      "curr_month_visits": 759453.983193057,
      "unique_users": 464342.931347714,
      "pages_per_visit": 1.72211653127485
    },
    {
      "global_rank": 1494,
      "category_rank": 57,
      "domain": "doubtnut.com",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 36293856.1013972,
      "curr_month_visits": 36293856.1013972,
      "unique_users": 9779530.22942408,
      "pages_per_visit": 3.30412063451007
    },
    {
      "global_rank": 69480,
      "category_rank": 57,
      "domain": "veripages.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 751796.400792687,
      "curr_month_visits": 751796.400792687,
      "unique_users": 590810.026628583,
      "pages_per_visit": 3.34236519509394
    },
    {
      "global_rank": 5796,
      "category_rank": 58,
      "domain": "glosbe.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 12438180.2575985,
      "curr_month_visits": 12438180.2575985,
      "unique_users": 7224470.6164871,
      "pages_per_visit": 2.8374686200729
    },
    {
      "global_rank": 53190,
      "category_rank": 58,
      "domain": "ovarit.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 1363695.87651351,
      "curr_month_visits": 1363695.87651351,
      "unique_users": 94690.8456110499,
      "pages_per_visit": 6.82094107098975
    },
    {
      "global_rank": 166357,
      "category_rank": 58,
      "domain": "sgc.gov.co",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 331076.188453962,
      "curr_month_visits": 331076.188453962,
      "unique_users": 150453.910653572,
      "pages_per_visit": 2.65877377953238
    },
    {
      "global_rank": 69719,
      "category_rank": 58,
      "domain": "logineonrw-lms.de",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 579328.257485739,
      "curr_month_visits": 579328.257485739,
      "unique_users": 141839.356574817,
      "pages_per_visit": 6.20532071887377
    },
    {
      "global_rank": 55374,
      "category_rank": 58,
      "domain": "b144.co.il",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 1202433.69388809,
      "curr_month_visits": 1202433.69388809,
      "unique_users": 770823.259742036,
      "pages_per_visit": 2.1157587489516
    },
    {
      "global_rank": 67062,
      "category_rank": 58,
      "domain": "microbenotes.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 1020376.95277099,
      "curr_month_visits": 1020376.95277099,
      "unique_users": 556789.752318715,
      "pages_per_visit": 1.80984095215311
    },
    {
      "global_rank": 238857,
      "category_rank": 58,
      "domain": "space-track.org",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 144860.345354879,
      "curr_month_visits": 144860.345354879,
      "unique_users": 68220.9978328536,
      "pages_per_visit": 2.17218072413347
    },
    {
      "global_rank": 498716,
      "category_rank": 58,
      "domain": "daad-kenya.org",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 36385.1444300243,
      "curr_month_visits": 36385.1444300243,
      "unique_users": 13058.1643599174,
      "pages_per_visit": 2.68890302698281
    },
    {
      "global_rank": 14174,
      "category_rank": 58,
      "domain": "dicio.com.br",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 5679541.76155015,
      "curr_month_visits": 5679541.76155015,
      "unique_users": 3582798.79664374,
      "pages_per_visit": 2.00752941530496
    },
    {
      "global_rank": 64882,
      "category_rank": 59,
      "domain": "sheltermanager.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 617828.741988141,
      "curr_month_visits": 617828.741988141,
      "unique_users": 204653.772905426,
      "pages_per_visit": 8.31516665966506
    },
    {
      "global_rank": 55903,
      "category_rank": 59,
      "domain": "gufengmh9.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 226173.455995879,
      "curr_month_visits": 226173.455995879,
      "unique_users": 92517.5301180096,
      "pages_per_visit": 19.7452472433735
    },
    {
      "global_rank": 14421,
      "category_rank": 59,
      "domain": "multitran.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 4418720.74930456,
      "curr_month_visits": 4418720.74930456,
      "unique_users": 740106.77177325,
      "pages_per_visit": 6.27470737344293
    },
    {
      "global_rank": 53206,
      "category_rank": 59,
      "domain": "animalwebaction.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 1144201.9122419,
      "curr_month_visits": 1144201.9122419,
      "unique_users": 122157.681494297,
      "pages_per_visit": 4.18835205005556
    },
    {
      "global_rank": 169135,
      "category_rank": 59,
      "domain": "vives.be",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 412962.055114543,
      "curr_month_visits": 412962.055114543,
      "unique_users": 102104.268216829,
      "pages_per_visit": 2.56325632810273
    },
    {
      "global_rank": 5915,
      "category_rank": 59,
      "domain": "maps.arcgis.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 12268091.1436551,
      "curr_month_visits": 12268091.1436551,
      "unique_users": 6278426.54892342,
      "pages_per_visit": 3.30542907683048
    },
    {
      "global_rank": 69726,
      "category_rank": 59,
      "domain": "jpon.xyz",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 715416.141833837,
      "curr_month_visits": 715416.141833837,
      "unique_users": 445813.631326537,
      "pages_per_visit": 5.59840459577079
    },
    {
      "global_rank": 150643,
      "category_rank": 59,
      "domain": "studygovtjob.in",
      "category": "Science_and_Education/History",
      "avg_month_visits": 758489.404273527,
      "curr_month_visits": 758489.404273527,
      "unique_users": 245322.610614066,
      "pages_per_visit": 1.83656378224341
    },
    {
      "global_rank": 169204,
      "category_rank": 60,
      "domain": "geologyscience.com",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 331707.605420502,
      "curr_month_visits": 331707.605420502,
      "unique_users": 187380.034934187,
      "pages_per_visit": 1.73790481965485
    },
    {
      "global_rank": 56037,
      "category_rank": 60,
      "domain": "babynamesdirect.com",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 943508.402066593,
      "curr_month_visits": 943508.402066593,
      "unique_users": 612912.233747258,
      "pages_per_visit": 3.6970038585345
    },
    {
      "global_rank": 67446,
      "category_rank": 60,
      "domain": "tokyo-zoo.net",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 1101582.14363543,
      "curr_month_visits": 1101582.14363543,
      "unique_users": 610095.928239167,
      "pages_per_visit": 2.72419802691354
    },
    {
      "global_rank": 1571,
      "category_rank": 60,
      "domain": "yaklass.ru",
      "category": "Science_and_Education/History",
      "avg_month_visits": 17216968.3095599,
      "curr_month_visits": 17216968.3095599,
      "unique_users": 7442064.4388319,
      "pages_per_visit": 12.122066518787
    },
    {
      "global_rank": 66190,
      "category_rank": 60,
      "domain": "petcolove.org",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 687427.980223256,
      "curr_month_visits": 687427.980223256,
      "unique_users": 356900.10478732,
      "pages_per_visit": 3.71873478089499
    },
    {
      "global_rank": 153155,
      "category_rank": 60,
      "domain": "chemrevise.org",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 324231.860221724,
      "curr_month_visits": 324231.860221724,
      "unique_users": 96195.7733365947,
      "pages_per_visit": 2.49867997772332
    },
    {
      "global_rank": 6124,
      "category_rank": 60,
      "domain": "treccani.it",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 14155996.4157474,
      "curr_month_visits": 14155996.4157474,
      "unique_users": 7543460.46846281,
      "pages_per_visit": 1.69954816803173
    },
    {
      "global_rank": 36346,
      "category_rank": 60,
      "domain": "maps.google.co.jp",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 1974670.84806876,
      "curr_month_visits": 1974670.84806876,
      "unique_users": 998195.688290517,
      "pages_per_visit": 2.3085272066043
    },
    {
      "global_rank": 6215,
      "category_rank": 61,
      "domain": "spanishdict.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 8680483.6146919,
      "curr_month_visits": 8680483.6146919,
      "unique_users": 3341700.93929511,
      "pages_per_visit": 5.83487632339514
    },
    {
      "global_rank": 14708,
      "category_rank": 61,
      "domain": "behindthename.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 3272007.60997408,
      "curr_month_visits": 3272007.60997408,
      "unique_users": 1743833.9860188,
      "pages_per_visit": 6.22746083273587
    },
    {
      "global_rank": 153913,
      "category_rank": 61,
      "domain": "organic-chemistry.org",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 339024.987873886,
      "curr_month_visits": 339024.987873886,
      "unique_users": 158559.836210309,
      "pages_per_visit": 2.0993056191689
    },
    {
      "global_rank": 36752,
      "category_rank": 61,
      "domain": "schweizmobil.ch",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 876192.321617108,
      "curr_month_visits": 876192.321617108,
      "unique_users": 378339.914056549,
      "pages_per_visit": 21.2735265486464
    },
    {
      "global_rank": 256622,
      "category_rank": 61,
      "domain": "nineplanets.org",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 213898.307439136,
      "curr_month_visits": 213898.307439136,
      "unique_users": 134345.021011358,
      "pages_per_visit": 2.01167097034193
    },
    {
      "global_rank": 66496,
      "category_rank": 61,
      "domain": "dierenbescherming.nl",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 779750.582880968,
      "curr_month_visits": 779750.582880968,
      "unique_users": 309159.779019791,
      "pages_per_visit": 4.91051345372187
    },
    {
      "global_rank": 72475,
      "category_rank": 61,
      "domain": "bztrauer.de",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 894917.663888844,
      "curr_month_visits": 894917.663888844,
      "unique_users": 247587.741753439,
      "pages_per_visit": 3.00824232086913
    },
    {
      "global_rank": 178626,
      "category_rank": 61,
      "domain": "superprof.be",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 256090.389896599,
      "curr_month_visits": 256090.389896599,
      "unique_users": 140637.290823978,
      "pages_per_visit": 3.76641035763203
    },
    {
      "global_rank": 72664,
      "category_rank": 62,
      "domain": "herold.at",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 956782.758214338,
      "curr_month_visits": 956782.758214338,
      "unique_users": 655279.778192822,
      "pages_per_visit": 2.23009982684436
    },
    {
      "global_rank": 56977,
      "category_rank": 62,
      "domain": "classforkids.io",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 965025.269338224,
      "curr_month_visits": 965025.269338224,
      "unique_users": 357020.518842613,
      "pages_per_visit": 6.206133443162
    },
    {
      "global_rank": 55209,
      "category_rank": 62,
      "domain": "capitalisminstitute.org",
      "category": "Science_and_Education",
      "avg_month_visits": 1466535.77123834,
      "curr_month_visits": 1466535.77123834,
      "unique_users": 157283.727073075,
      "pages_per_visit": 3.5348368778755
    },
    {
      "global_rank": 14821,
      "category_rank": 62,
      "domain": "squaredle.app",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 4967763.04690043,
      "curr_month_visits": 4967763.04690043,
      "unique_users": 303330.669319864,
      "pages_per_visit": 3.36699331476114
    },
    {
      "global_rank": 265627,
      "category_rank": 62,
      "domain": "auroraforecast.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 492840.440919711,
      "curr_month_visits": 492840.440919711,
      "unique_users": 208873.117164619,
      "pages_per_visit": 1.8851509642945
    },
    {
      "global_rank": 6234,
      "category_rank": 62,
      "domain": "economia.uol.com.br",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 10337137.2334677,
      "curr_month_visits": 10337137.2334677,
      "unique_users": 7236911.77022653,
      "pages_per_visit": 2.77892888191739
    },
    {
      "global_rank": 179181,
      "category_rank": 62,
      "domain": "nha.eu",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 286190.626919815,
      "curr_month_visits": 286190.626919815,
      "unique_users": 49237.7077001346,
      "pages_per_visit": 5.35922838139091
    },
    {
      "global_rank": 37024,
      "category_rank": 62,
      "domain": "here.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 1253901.27663391,
      "curr_month_visits": 1253901.27663391,
      "unique_users": 671858.959307768,
      "pages_per_visit": 5.98965948515688
    },
    {
      "global_rank": 6291,
      "category_rank": 63,
      "domain": "oxfordlearnersdictionaries.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 9611802.49646602,
      "curr_month_visits": 9611802.49646602,
      "unique_users": 2334671.43168954,
      "pages_per_visit": 5.38090220306446
    },
    {
      "global_rank": 67343,
      "category_rank": 63,
      "domain": "thekennelclub.org.uk",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 749981.922965039,
      "curr_month_visits": 749981.922965039,
      "unique_users": 409449.100027411,
      "pages_per_visit": 3.91750746550725
    },
    {
      "global_rank": 45661,
      "category_rank": 63,
      "domain": "la-spa.fr",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 1040384.89955779,
      "curr_month_visits": 1040384.89955779,
      "unique_users": 495298.106816737,
      "pages_per_visit": 5.05289198789551
    },
    {
      "global_rank": 154577,
      "category_rank": 63,
      "domain": "periodni.com",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 328984.25958811,
      "curr_month_visits": 328984.25958811,
      "unique_users": 184972.306471345,
      "pages_per_visit": 2.15938058976855
    },
    {
      "global_rank": 55301,
      "category_rank": 63,
      "domain": "fullofcarts.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 871801.259969607,
      "curr_month_visits": 871801.259969607,
      "unique_users": 519671.05203751,
      "pages_per_visit": 1.921418714742
    },
    {
      "global_rank": 74382,
      "category_rank": 63,
      "domain": "yelp.co.uk",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 715220.347231676,
      "curr_month_visits": 715220.347231676,
      "unique_users": 553153.262115118,
      "pages_per_visit": 2.83863362829042
    },
    {
      "global_rank": 113561,
      "category_rank": 63,
      "domain": "etri.re.kr",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 283990.129839448,
      "curr_month_visits": 283990.129839448,
      "unique_users": 63882.3578120243,
      "pages_per_visit": 11.5164499441536
    },
    {
      "global_rank": 102185,
      "category_rank": 63,
      "domain": "allbreedpedigree.com",
      "category": "Science_and_Education",
      "avg_month_visits": 309559.622076855,
      "curr_month_visits": 309559.622076855,
      "unique_users": 116536.167011013,
      "pages_per_visit": 11.0867044670349
    },
    {
      "global_rank": 70569,
      "category_rank": 63,
      "domain": "genecards.org",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 723071.933781136,
      "curr_month_visits": 723071.933781136,
      "unique_users": 301251.630245936,
      "pages_per_visit": 3.52439903562646
    },
    {
      "global_rank": 60151,
      "category_rank": 63,
      "domain": "translit.ru",
      "category": "Science_and_Education/History",
      "avg_month_visits": 1438136.73025793,
      "curr_month_visits": 1438136.73025793,
      "unique_users": 276198.786663326,
      "pages_per_visit": 1.89291961037297
    },
    {
      "global_rank": 14929,
      "category_rank": 63,
      "domain": "linguee.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 5695021.60640108,
      "curr_month_visits": 5695021.60640108,
      "unique_users": 2873722.05775992,
      "pages_per_visit": 2.33983082635548
    },
    {
      "global_rank": 2559,
      "category_rank": 63,
      "domain": "toppr.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 44832201.713263,
      "curr_month_visits": 44832201.713263,
      "unique_users": 14030388.0295692,
      "pages_per_visit": 2.90095317700388
    },
    {
      "global_rank": 179427,
      "category_rank": 63,
      "domain": "acfe.com",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 248939.109955721,
      "curr_month_visits": 248939.109955721,
      "unique_users": 116573.995697061,
      "pages_per_visit": 3.38545710025433
    },
    {
      "global_rank": 77145,
      "category_rank": 64,
      "domain": "refdesk.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 732501.147883947,
      "curr_month_visits": 732501.147883947,
      "unique_users": 58356.3831580137,
      "pages_per_visit": 5.14909553434354
    },
    {
      "global_rank": 70668,
      "category_rank": 64,
      "domain": "wum.edu.pl",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 525912.457349149,
      "curr_month_visits": 525912.457349149,
      "unique_users": 173342.326688099,
      "pages_per_visit": 6.99436638390323
    },
    {
      "global_rank": 14971,
      "category_rank": 64,
      "domain": "databazeknih.cz",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 3865574.17026084,
      "curr_month_visits": 3865574.17026084,
      "unique_users": 1222418.54054097,
      "pages_per_visit": 4.42580779002115
    },
    {
      "global_rank": 174996,
      "category_rank": 64,
      "domain": "geonet.org.nz",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 393547.508835791,
      "curr_month_visits": 393547.508835791,
      "unique_users": 117818.668914174,
      "pages_per_visit": 2.35642563833407
    },
    {
      "global_rank": 6497,
      "category_rank": 64,
      "domain": "noor-book.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 10320515.0708848,
      "curr_month_visits": 10320515.0708848,
      "unique_users": 4822015.14167422,
      "pages_per_visit": 3.20223058069992
    },
    {
      "global_rank": 45846,
      "category_rank": 64,
      "domain": "arcaplanet.it",
      "category": "Science_and_Education",
      "avg_month_visits": 1083035.61224472,
      "curr_month_visits": 1083035.61224472,
      "unique_users": 659683.398151871,
      "pages_per_visit": 4.64226709937351
    },
    {
      "global_rank": 60917,
      "category_rank": 64,
      "domain": "e-kartoteka.pl",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 770962.467740245,
      "curr_month_visits": 770962.467740245,
      "unique_users": 320347.070359371,
      "pages_per_visit": 4.95382014328916
    },
    {
      "global_rank": 67687,
      "category_rank": 64,
      "domain": "pawrade.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 772323.042479412,
      "curr_month_visits": 772323.042479412,
      "unique_users": 411699.602009628,
      "pages_per_visit": 4.74700268370308
    },
    {
      "global_rank": 157353,
      "category_rank": 65,
      "domain": "chemrxiv.org",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 386206.015295982,
      "curr_month_visits": 386206.015295982,
      "unique_users": 186095.64839008,
      "pages_per_visit": 1.88711809454147
    },
    {
      "global_rank": 281795,
      "category_rank": 65,
      "domain": "newscientist.nl",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 193383.881628356,
      "curr_month_visits": 193383.881628356,
      "unique_users": 117663.915033256,
      "pages_per_visit": 1.67337422886379
    },
    {
      "global_rank": 62886,
      "category_rank": 65,
      "domain": "nczas.info",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 1362467.26626404,
      "curr_month_visits": 1362467.26626404,
      "unique_users": 135586.174582338,
      "pages_per_visit": 2.70831631413462
    },
    {
      "global_rank": 140321,
      "category_rank": 65,
      "domain": "scilympiad.com",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 183315.07631426,
      "curr_month_visits": 183315.07631426,
      "unique_users": 57632.2131092584,
      "pages_per_visit": 6.69431100755119
    },
    {
      "global_rank": 176253,
      "category_rank": 65,
      "domain": "floodmap.net",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 320163.375039337,
      "curr_month_visits": 320163.375039337,
      "unique_users": 173181.166717182,
      "pages_per_visit": 1.85508213190736
    },
    {
      "global_rank": 55886,
      "category_rank": 65,
      "domain": "premiumsearches.net",
      "category": "Science_and_Education",
      "avg_month_visits": 1480768.88148661,
      "curr_month_visits": 1480768.88148661,
      "unique_users": 1233405.54420853,
      "pages_per_visit": 2.1454360836442
    },
    {
      "global_rank": 6543,
      "category_rank": 65,
      "domain": "collinsdictionary.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 12875968.2065655,
      "curr_month_visits": 12875968.2065655,
      "unique_users": 8605298.80294934,
      "pages_per_visit": 2.12544969115394
    },
    {
      "global_rank": 1721,
      "category_rank": 65,
      "domain": "chaoxing.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 18089072.4243564,
      "curr_month_visits": 18089072.4243564,
      "unique_users": 2822299.82770064,
      "pages_per_visit": 10.6357556357894
    },
    {
      "global_rank": 71520,
      "category_rank": 65,
      "domain": "zukan-bouz.com",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 750574.079124616,
      "curr_month_visits": 750574.079124616,
      "unique_users": 472118.345600799,
      "pages_per_visit": 3.28703965663329
    },
    {
      "global_rank": 15012,
      "category_rank": 65,
      "domain": "linguee.fr",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 5677689.4385056,
      "curr_month_visits": 5677689.4385056,
      "unique_users": 2913215.90504238,
      "pages_per_visit": 1.9990391229554
    },
    {
      "global_rank": 15071,
      "category_rank": 66,
      "domain": "academic.ru",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 5641796.15556306,
      "curr_month_visits": 5641796.15556306,
      "unique_users": 3758531.01165317,
      "pages_per_visit": 1.74062679424258
    },
    {
      "global_rank": 6650,
      "category_rank": 66,
      "domain": "wordhippo.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 11083000.5174339,
      "curr_month_visits": 11083000.5174339,
      "unique_users": 5892807.12990675,
      "pages_per_visit": 2.68494477264753
    },
    {
      "global_rank": 73029,
      "category_rank": 66,
      "domain": "visiblebody.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 915039.6535464,
      "curr_month_visits": 915039.6535464,
      "unique_users": 441155.838777805,
      "pages_per_visit": 2.64306480274767
    },
    {
      "global_rank": 2643,
      "category_rank": 66,
      "domain": "moe.gov.sa",
      "category": "Science_and_Education/History",
      "avg_month_visits": 13137622.3328557,
      "curr_month_visits": 13137622.3328557,
      "unique_users": 3168531.19329644,
      "pages_per_visit": 11.8089150192785
    },
    {
      "global_rank": 284159,
      "category_rank": 66,
      "domain": "mondkalender-online.de",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 175559.936521436,
      "curr_month_visits": 175559.936521436,
      "unique_users": 70259.4129237529,
      "pages_per_visit": 3.11222293463112
    },
    {
      "global_rank": 80705,
      "category_rank": 66,
      "domain": "trauerhilfe.at",
      "category": "Science_and_Education/History",
      "avg_month_visits": 820989.741464907,
      "curr_month_visits": 820989.741464907,
      "unique_users": 107672.614907154,
      "pages_per_visit": 3.52330055874107
    },
    {
      "global_rank": 39543,
      "category_rank": 66,
      "domain": "task-asp.net",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 1065861.34141235,
      "curr_month_visits": 1065861.34141235,
      "unique_users": 427137.568109182,
      "pages_per_visit": 8.41556698714257
    },
    {
      "global_rank": 39805,
      "category_rank": 67,
      "domain": "geoportail.gouv.fr",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 1996710.4281212,
      "curr_month_visits": 1996710.4281212,
      "unique_users": 792116.517902176,
      "pages_per_visit": 2.07123972113705
    },
    {
      "global_rank": 6716,
      "category_rank": 67,
      "domain": "almaany.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 11293274.0036867,
      "curr_month_visits": 11293274.0036867,
      "unique_users": 5557711.24630492,
      "pages_per_visit": 2.54900495241709
    },
    {
      "global_rank": 56431,
      "category_rank": 67,
      "domain": "ibomma.co.in",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 857982.60592466,
      "curr_month_visits": 857982.60592466,
      "unique_users": 624947.376252073,
      "pages_per_visit": 2.7955256947297
    },
    {
      "global_rank": 82674,
      "category_rank": 67,
      "domain": "118712.fr",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 856012.089813985,
      "curr_month_visits": 856012.089813985,
      "unique_users": 676300.172014537,
      "pages_per_visit": 1.77071208886995
    },
    {
      "global_rank": 54560,
      "category_rank": 67,
      "domain": "menofia.education",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 659354.902023031,
      "curr_month_visits": 659354.902023031,
      "unique_users": 111856.846165659,
      "pages_per_visit": 8.81899851041774
    },
    {
      "global_rank": 64738,
      "category_rank": 67,
      "domain": "inmemoriam.be",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 720098.886246736,
      "curr_month_visits": 720098.886246736,
      "unique_users": 221702.975794351,
      "pages_per_visit": 4.94691196634414
    },
    {
      "global_rank": 15358,
      "category_rank": 67,
      "domain": "duden.de",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 5002800.26659644,
      "curr_month_visits": 5002800.26659644,
      "unique_users": 2768239.00723192,
      "pages_per_visit": 2.34089942252518
    },
    {
      "global_rank": 288835,
      "category_rank": 68,
      "domain": "astronet.ru",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 168045.845015466,
      "curr_month_visits": 168045.845015466,
      "unique_users": 95649.4350967116,
      "pages_per_visit": 2.04511335640415
    },
    {
      "global_rank": 16810,
      "category_rank": 68,
      "domain": "cuzk.cz",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 3616291.27135495,
      "curr_month_visits": 3616291.27135495,
      "unique_users": 1153452.42581052,
      "pages_per_visit": 8.1710509242676
    },
    {
      "global_rank": 47715,
      "category_rank": 68,
      "domain": "animalsworld.vn",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 980377.640229661,
      "curr_month_visits": 980377.640229661,
      "unique_users": 404349.373023687,
      "pages_per_visit": 2.24888343677905
    },
    {
      "global_rank": 84462,
      "category_rank": 68,
      "domain": "infobel.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 832139.787007563,
      "curr_month_visits": 832139.787007563,
      "unique_users": 575345.262714022,
      "pages_per_visit": 1.84721012369275
    },
    {
      "global_rank": 6987,
      "category_rank": 68,
      "domain": "leo.org",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 9818050.3010426,
      "curr_month_visits": 9818050.3010426,
      "unique_users": 2666371.94547977,
      "pages_per_visit": 3.59370549224318
    },
    {
      "global_rank": 186641,
      "category_rank": 68,
      "domain": "erb.org",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 250522.930229773,
      "curr_month_visits": 250522.930229773,
      "unique_users": 72433.4805644305,
      "pages_per_visit": 5.10700348591704
    },
    {
      "global_rank": 1784,
      "category_rank": 68,
      "domain": "nature.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 37969725.4213595,
      "curr_month_visits": 37969725.4213595,
      "unique_users": 14011242.6137225,
      "pages_per_visit": 2.39959598655114
    },
    {
      "global_rank": 41505,
      "category_rank": 68,
      "domain": "maps.visicom.ua",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 908345.100132145,
      "curr_month_visits": 908345.100132145,
      "unique_users": 482613.073178818,
      "pages_per_visit": 8.17102352497324
    },
    {
      "global_rank": 294057,
      "category_rank": 69,
      "domain": "tbcsschid.sharepoint.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 87871.3915597506,
      "curr_month_visits": 87871.3915597506,
      "unique_users": 36641.4414477493,
      "pages_per_visit": 5.01849783341838
    },
    {
      "global_rank": 186941,
      "category_rank": 69,
      "domain": "thomasmore.be",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 272732.604265181,
      "curr_month_visits": 272732.604265181,
      "unique_users": 96636.533203892,
      "pages_per_visit": 4.38780329446989
    },
    {
      "global_rank": 16966,
      "category_rank": 69,
      "domain": "bakalari.cz",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 4338896.97770122,
      "curr_month_visits": 4338896.97770122,
      "unique_users": 522405.035428283,
      "pages_per_visit": 4.01932481283661
    },
    {
      "global_rank": 2719,
      "category_rank": 69,
      "domain": "colaboraread.com.br",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 12946589.5603515,
      "curr_month_visits": 12946589.5603515,
      "unique_users": 1623112.01050122,
      "pages_per_visit": 10.5509230119092
    },
    {
      "global_rank": 7024,
      "category_rank": 69,
      "domain": "scielo.br",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 11002762.7582994,
      "curr_month_visits": 11002762.7582994,
      "unique_users": 5792794.47870402,
      "pages_per_visit": 2.47710848681893
    },
    {
      "global_rank": 67217,
      "category_rank": 69,
      "domain": "al-maktaba.org",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 880779.935107204,
      "curr_month_visits": 880779.935107204,
      "unique_users": 512783.680030437,
      "pages_per_visit": 3.07659702064497
    },
    {
      "global_rank": 61005,
      "category_rank": 69,
      "domain": "smartshopresults.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 417341.141768451,
      "curr_month_visits": 417341.141768451,
      "unique_users": 335500.193839726,
      "pages_per_visit": 2.10074486535754
    },
    {
      "global_rank": 70226,
      "category_rank": 69,
      "domain": "bestfriends.org",
      "category": "Science_and_Education",
      "avg_month_visits": 863781.788430382,
      "curr_month_visits": 863781.788430382,
      "unique_users": 540559.156897957,
      "pages_per_visit": 2.82814789798902
    },
    {
      "global_rank": 344956,
      "category_rank": 69,
      "domain": "writingtoiq.com",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 85065.0276430465,
      "curr_month_visits": 85065.0276430465,
      "unique_users": 18567.0885781458,
      "pages_per_visit": 4.84073235256981
    },
    {
      "global_rank": 75282,
      "category_rank": 69,
      "domain": "biodiversitylibrary.org",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 400326.072904095,
      "curr_month_visits": 400326.072904095,
      "unique_users": 176208.14397412,
      "pages_per_visit": 8.56373061617338
    },
    {
      "global_rank": 42012,
      "category_rank": 69,
      "domain": "wikiroutes.info",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 1477505.39492919,
      "curr_month_visits": 1477505.39492919,
      "unique_users": 724913.333499819,
      "pages_per_visit": 2.38247019241692
    },
    {
      "global_rank": 84566,
      "category_rank": 69,
      "domain": "argoviatoday.ch",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 971139.801161658,
      "curr_month_visits": 971139.801161658,
      "unique_users": 299353.042179033,
      "pages_per_visit": 1.92803890977319
    },
    {
      "global_rank": 585849,
      "category_rank": 70,
      "domain": "bookoxex.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 36186.367914102,
      "curr_month_visits": 36186.367914102,
      "unique_users": 12397.1778346194,
      "pages_per_visit": 3.74001879590617
    },
    {
      "global_rank": 1807,
      "category_rank": 70,
      "domain": "unam.mx",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 30127747.5030022,
      "curr_month_visits": 30127747.5030022,
      "unique_users": 10280715.148226,
      "pages_per_visit": 4.65956993841405
    },
    {
      "global_rank": 7176,
      "category_rank": 70,
      "domain": "kotobank.jp",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 13078452.6468814,
      "curr_month_visits": 13078452.6468814,
      "unique_users": 7605415.90785147,
      "pages_per_visit": 1.63547755350114
    },
    {
      "global_rank": 61142,
      "category_rank": 70,
      "domain": "rbo.org.uk",
      "category": "Science_and_Education/History",
      "avg_month_visits": 766689.183678108,
      "curr_month_visits": 766689.183678108,
      "unique_users": 349338.188910607,
      "pages_per_visit": 5.41297492180088
    },
    {
      "global_rank": 47736,
      "category_rank": 70,
      "domain": "znu.edu.ua",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 711460.915058744,
      "curr_month_visits": 711460.915058744,
      "unique_users": 252773.682928516,
      "pages_per_visit": 6.31843075357997
    },
    {
      "global_rank": 75770,
      "category_rank": 70,
      "domain": "jove.com",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 830319.218022751,
      "curr_month_visits": 830319.218022751,
      "unique_users": 490930.930442408,
      "pages_per_visit": 2.3283007549462
    },
    {
      "global_rank": 85142,
      "category_rank": 70,
      "domain": "numeroinconnu.fr",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 909729.08928735,
      "curr_month_visits": 909729.08928735,
      "unique_users": 634485.845263643,
      "pages_per_visit": 1.32994467997014
    },
    {
      "global_rank": 166696,
      "category_rank": 70,
      "domain": "toyaku.ac.jp",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 162121.616268924,
      "curr_month_visits": 162121.616268924,
      "unique_users": 50455.5520781729,
      "pages_per_visit": 8.41718521409713
    },
    {
      "global_rank": 17188,
      "category_rank": 70,
      "domain": "translated.net",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 5403718.95372416,
      "curr_month_visits": 5403718.95372416,
      "unique_users": 4119107.45111289,
      "pages_per_visit": 1.69641375042514
    },
    {
      "global_rank": 68067,
      "category_rank": 70,
      "domain": "topendsports.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 1118477.65137351,
      "curr_month_visits": 1118477.65137351,
      "unique_users": 718613.89187204,
      "pages_per_visit": 1.82101677165062
    },
    {
      "global_rank": 68437,
      "category_rank": 71,
      "domain": "lalanguefrancaise.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 1149637.13517854,
      "curr_month_visits": 1149637.13517854,
      "unique_users": 795774.290600485,
      "pages_per_visit": 1.70726194700028
    },
    {
      "global_rank": 309354,
      "category_rank": 71,
      "domain": "quantumproject.in",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 343944.290799227,
      "curr_month_visits": 343944.290799227,
      "unique_users": 210025.172838582,
      "pages_per_visit": 2.04266970551878
    },
    {
      "global_rank": 146153,
      "category_rank": 71,
      "domain": "brandenburg.cloud",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 194877.722583216,
      "curr_month_visits": 194877.722583216,
      "unique_users": 44218.7821580586,
      "pages_per_visit": 7.82353162428114
    },
    {
      "global_rank": 85231,
      "category_rank": 71,
      "domain": "degulesider.dk",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 586700.0372107,
      "curr_month_visits": 586700.0372107,
      "unique_users": 372565.348728415,
      "pages_per_visit": 3.66630827043037
    },
    {
      "global_rank": 75847,
      "category_rank": 71,
      "domain": "csiro.au",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 908708.04155189,
      "curr_month_visits": 908708.04155189,
      "unique_users": 496121.929660475,
      "pages_per_visit": 2.3432879978448
    },
    {
      "global_rank": 112061,
      "category_rank": 71,
      "domain": "chicksaddlery.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 286819.987672176,
      "curr_month_visits": 286819.987672176,
      "unique_users": 144142.303933731,
      "pages_per_visit": 6.29042493639563
    },
    {
      "global_rank": 49001,
      "category_rank": 71,
      "domain": "securevetsource.com",
      "category": "Science_and_Education",
      "avg_month_visits": 1082334.59666804,
      "curr_month_visits": 1082334.59666804,
      "unique_users": 534993.089011893,
      "pages_per_visit": 4.4050513697221
    },
    {
      "global_rank": 73912,
      "category_rank": 71,
      "domain": "lapkins.ru",
      "category": "Science_and_Education",
      "avg_month_visits": 826686.786497124,
      "curr_month_visits": 826686.786497124,
      "unique_users": 544325.680302417,
      "pages_per_visit": 2.64925271305995
    },
    {
      "global_rank": 61416,
      "category_rank": 71,
      "domain": "humanesociety.org",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 1247856.24464081,
      "curr_month_visits": 1247856.24464081,
      "unique_users": 911219.074014928,
      "pages_per_visit": 1.79663182182098
    },
    {
      "global_rank": 589099,
      "category_rank": 71,
      "domain": "corescholars.org",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 29766.7361887376,
      "curr_month_visits": 29766.7361887376,
      "unique_users": 26086.6914777108,
      "pages_per_visit": 1.15152444170489
    },
    {
      "global_rank": 197196,
      "category_rank": 71,
      "domain": "cgg.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 111752.860260241,
      "curr_month_visits": 111752.860260241,
      "unique_users": 11807.2389592891,
      "pages_per_visit": 24.3474964529039
    },
    {
      "global_rank": 7387,
      "category_rank": 71,
      "domain": "rapidtables.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 10268258.6574807,
      "curr_month_visits": 10268258.6574807,
      "unique_users": 5699106.77412739,
      "pages_per_visit": 2.42997102192882
    },
    {
      "global_rank": 42555,
      "category_rank": 71,
      "domain": "flamp.ru",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 1976353.26085967,
      "curr_month_visits": 1976353.26085967,
      "unique_users": 1274960.40730078,
      "pages_per_visit": 1.75224771175035
    },
    {
      "global_rank": 17349,
      "category_rank": 71,
      "domain": "mijnwoordenboek.nl",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 3174744.53280851,
      "curr_month_visits": 3174744.53280851,
      "unique_users": 815080.182011855,
      "pages_per_visit": 4.92311181745027
    },
    {
      "global_rank": 45240,
      "category_rank": 72,
      "domain": "its-mo.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 1355614.75341081,
      "curr_month_visits": 1355614.75341081,
      "unique_users": 904609.747813011,
      "pages_per_visit": 3.81224318671735
    },
    {
      "global_rank": 112321,
      "category_rank": 72,
      "domain": "doversaddlery.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 278025.553640453,
      "curr_month_visits": 278025.553640453,
      "unique_users": 137836.050527141,
      "pages_per_visit": 5.25852452626618
    },
    {
      "global_rank": 311842,
      "category_rank": 72,
      "domain": "astro.cz",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 168350.260769595,
      "curr_month_visits": 168350.260769595,
      "unique_users": 59361.6938452423,
      "pages_per_visit": 2.12828607109562
    },
    {
      "global_rank": 1864,
      "category_rank": 72,
      "domain": "overleaf.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 31545287.0014986,
      "curr_month_visits": 31545287.0014986,
      "unique_users": 4270226.08860911,
      "pages_per_visit": 4.1852279179195
    },
    {
      "global_rank": 68820,
      "category_rank": 72,
      "domain": "regjeringen.no",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 902725.127797974,
      "curr_month_visits": 902725.127797974,
      "unique_users": 450174.895333556,
      "pages_per_visit": 2.57769152989376
    },
    {
      "global_rank": 17501,
      "category_rank": 72,
      "domain": "howtopronounce.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 4968863.9860694,
      "curr_month_visits": 4968863.9860694,
      "unique_users": 3698960.40116671,
      "pages_per_visit": 1.77976813319734
    },
    {
      "global_rank": 168254,
      "category_rank": 72,
      "domain": "pharmdbm.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 151992.372892676,
      "curr_month_visits": 151992.372892676,
      "unique_users": 35708.262573513,
      "pages_per_visit": 5.2065167047939
    },
    {
      "global_rank": 86117,
      "category_rank": 72,
      "domain": "myzmanim.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 736559.810006226,
      "curr_month_visits": 736559.810006226,
      "unique_users": 209395.275240909,
      "pages_per_visit": 2.52873085616376
    },
    {
      "global_rank": 69585,
      "category_rank": 73,
      "domain": "conso.gouv.fr",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 781028.698493255,
      "curr_month_visits": 781028.698493255,
      "unique_users": 409097.48213745,
      "pages_per_visit": 3.3790888963116
    },
    {
      "global_rank": 313094,
      "category_rank": 73,
      "domain": "webastro.net",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 145927.810870288,
      "curr_month_visits": 145927.810870288,
      "unique_users": 54497.7891804382,
      "pages_per_visit": 2.51513045503311
    },
    {
      "global_rank": 61817,
      "category_rank": 73,
      "domain": "newtoki337.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 1027804.7944455,
      "curr_month_visits": 1027804.7944455,
      "unique_users": 170778.048619129,
      "pages_per_visit": 2.70298331767675
    },
    {
      "global_rank": 79009,
      "category_rank": 73,
      "domain": "lpopi0127.blog.jp",
      "category": "Science_and_Education",
      "avg_month_visits": 796924.037333354,
      "curr_month_visits": 796924.037333354,
      "unique_users": 92116.2895783068,
      "pages_per_visit": 2.99801532242824
    },
    {
      "global_rank": 46016,
      "category_rank": 73,
      "domain": "moscowmap.ru",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 1539062.4231663,
      "curr_month_visits": 1539062.4231663,
      "unique_users": 973410.182934864,
      "pages_per_visit": 2.15074151306574
    },
    {
      "global_rank": 87917,
      "category_rank": 73,
      "domain": "om-trauer.de",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 299731.988545361,
      "curr_month_visits": 299731.988545361,
      "unique_users": 63101.8305772605,
      "pages_per_visit": 4.50572347537375
    },
    {
      "global_rank": 195744,
      "category_rank": 73,
      "domain": "odisee.be",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 268779.360117861,
      "curr_month_visits": 268779.360117861,
      "unique_users": 65809.8683239881,
      "pages_per_visit": 4.93671311748956
    },
    {
      "global_rank": 1473314,
      "category_rank": 73,
      "domain": "committedchameleon.wordpress.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 11647.0256246948,
      "curr_month_visits": 11647.0256246948,
      "unique_users": 3941.74188950201,
      "pages_per_visit": 5.57135830477473
    },
    {
      "global_rank": 322690,
      "category_rank": 74,
      "domain": "ursa.fi",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 170218.460055323,
      "curr_month_visits": 170218.460055323,
      "unique_users": 85182.6454646491,
      "pages_per_visit": 3.7445784408641
    },
    {
      "global_rank": 77777,
      "category_rank": 74,
      "domain": "quartzy.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 427127.120147786,
      "curr_month_visits": 427127.120147786,
      "unique_users": 85047.3820461218,
      "pages_per_visit": 7.95561538004313
    },
    {
      "global_rank": 170822,
      "category_rank": 74,
      "domain": "lens.org",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 192999.594884211,
      "curr_month_visits": 192999.594884211,
      "unique_users": 82857.8983866611,
      "pages_per_visit": 5.37387201024021
    },
    {
      "global_rank": 63298,
      "category_rank": 74,
      "domain": "pigeon-auction.de",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 360970.204293611,
      "curr_month_visits": 360970.204293611,
      "unique_users": 42256.1309005864,
      "pages_per_visit": 12.5969399482093
    },
    {
      "global_rank": 70829,
      "category_rank": 74,
      "domain": "webtretho.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 1140341.27336215,
      "curr_month_visits": 1140341.27336215,
      "unique_users": 535518.066748801,
      "pages_per_visit": 1.71256989012317
    },
    {
      "global_rank": 196637,
      "category_rank": 74,
      "domain": "g1.ca",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 253677.238105105,
      "curr_month_visits": 253677.238105105,
      "unique_users": 108388.158286293,
      "pages_per_visit": 3.22124013443217
    },
    {
      "global_rank": 7647,
      "category_rank": 74,
      "domain": "wikisource.org",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 9641133.37047344,
      "curr_month_visits": 9641133.37047344,
      "unique_users": 5520827.23565436,
      "pages_per_visit": 2.35086709237438
    },
    {
      "global_rank": 81455,
      "category_rank": 74,
      "domain": "primayahospital.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 779943.14286973,
      "curr_month_visits": 779943.14286973,
      "unique_users": 483280.360865117,
      "pages_per_visit": 1.92868625833735
    },
    {
      "global_rank": 89269,
      "category_rank": 74,
      "domain": "lydec.ma",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 617123.590291072,
      "curr_month_visits": 617123.590291072,
      "unique_users": 266241.979612492,
      "pages_per_visit": 3.85230464779968
    },
    {
      "global_rank": 126768,
      "category_rank": 74,
      "domain": "globalforestwatch.org",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 242998.764700409,
      "curr_month_visits": 242998.764700409,
      "unique_users": 121005.769325625,
      "pages_per_visit": 8.02413142682758
    },
    {
      "global_rank": 18476,
      "category_rank": 74,
      "domain": "forvo.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 3526372.79675579,
      "curr_month_visits": 3526372.79675579,
      "unique_users": 2316443.76772719,
      "pages_per_visit": 2.85545739642312
    },
    {
      "global_rank": 51049,
      "category_rank": 75,
      "domain": "covetruspharmacy.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 1051561.40637529,
      "curr_month_visits": 1051561.40637529,
      "unique_users": 598197.153030028,
      "pages_per_visit": 4.21086290976001
    },
    {
      "global_rank": 89316,
      "category_rank": 75,
      "domain": "exsalut.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 607884.828814254,
      "curr_month_visits": 607884.828814254,
      "unique_users": 18871.5357843941,
      "pages_per_visit": 7.36619457244873
    },
    {
      "global_rank": 70979,
      "category_rank": 75,
      "domain": "projekt-gutenberg.org",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 413225.442801978,
      "curr_month_visits": 413225.442801978,
      "unique_users": 204144.112088849,
      "pages_per_visit": 6.88541737729298
    },
    {
      "global_rank": 116979,
      "category_rank": 75,
      "domain": "racing.racingnsw.com.au",
      "category": "Science_and_Education",
      "avg_month_visits": 296974.601270884,
      "curr_month_visits": 296974.601270884,
      "unique_users": 32104.6321089655,
      "pages_per_visit": 8.33194533851683
    },
    {
      "global_rank": 19355,
      "category_rank": 75,
      "domain": "priberam.org",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 4681763.31881143,
      "curr_month_visits": 4681763.31881143,
      "unique_users": 2734435.37981738,
      "pages_per_visit": 1.68588019983351
    },
    {
      "global_rank": 48998,
      "category_rank": 75,
      "domain": "ign.fr",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 507953.710993642,
      "curr_month_visits": 507953.710993642,
      "unique_users": 233228.409676669,
      "pages_per_visit": 21.0522672685853
    },
    {
      "global_rank": 1879,
      "category_rank": 75,
      "domain": "cherrycreekschools.org",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 30665914.2235716,
      "curr_month_visits": 30665914.2235716,
      "unique_users": 1837214.6733307,
      "pages_per_visit": 7.15810165889771
    },
    {
      "global_rank": 357775,
      "category_rank": 75,
      "domain": "carnap.io",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 81545.2233922746,
      "curr_month_visits": 81545.2233922746,
      "unique_users": 18718.8938957616,
      "pages_per_visit": 5.4552610654128
    },
    {
      "global_rank": 63352,
      "category_rank": 75,
      "domain": "edogs.de",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 784174.305142925,
      "curr_month_visits": 784174.305142925,
      "unique_users": 399982.611281739,
      "pages_per_visit": 5.70690533534751
    },
    {
      "global_rank": 81488,
      "category_rank": 75,
      "domain": "verhuisdieren.nl",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 607174.919570658,
      "curr_month_visits": 607174.919570658,
      "unique_users": 140889.686823571,
      "pages_per_visit": 4.7626394305384
    },
    {
      "global_rank": 127176,
      "category_rank": 75,
      "domain": "terracycle.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 304955.396909047,
      "curr_month_visits": 304955.396909047,
      "unique_users": 193178.408583434,
      "pages_per_visit": 4.26680423479625
    },
    {
      "global_rank": 49291,
      "category_rank": 76,
      "domain": "lantmateriet.se",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 1088294.10969637,
      "curr_month_visits": 1088294.10969637,
      "unique_users": 428893.683754037,
      "pages_per_visit": 4.38851572995212
    },
    {
      "global_rank": 202583,
      "category_rank": 76,
      "domain": "prepfe.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 122004.277252973,
      "curr_month_visits": 122004.277252973,
      "unique_users": 46994.1740686163,
      "pages_per_visit": 13.2695748495675
    },
    {
      "global_rank": 72483,
      "category_rank": 76,
      "domain": "khaledalsabt.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 980480.81802452,
      "curr_month_visits": 980480.81802452,
      "unique_users": 618650.937083622,
      "pages_per_visit": 1.65849046043286
    },
    {
      "global_rank": 323213,
      "category_rank": 76,
      "domain": "optcorp.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 151934.906838676,
      "curr_month_visits": 151934.906838676,
      "unique_users": 80277.3260146041,
      "pages_per_visit": 2.06085975936179
    },
    {
      "global_rank": 19657,
      "category_rank": 76,
      "domain": "free4talk.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 3118050.54111597,
      "curr_month_visits": 3118050.54111597,
      "unique_users": 459318.211307374,
      "pages_per_visit": 7.02921285522485
    },
    {
      "global_rank": 64167,
      "category_rank": 76,
      "domain": "furiousnandemise.com",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 459022.340269968,
      "curr_month_visits": 459022.340269968,
      "unique_users": 287898.744509186,
      "pages_per_visit": 4.98554421023658
    },
    {
      "global_rank": 78921,
      "category_rank": 76,
      "domain": "medsci.cn",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 732452.362520994,
      "curr_month_visits": 732452.362520994,
      "unique_users": 467701.156895167,
      "pages_per_visit": 2.34050664305397
    },
    {
      "global_rank": 89641,
      "category_rank": 76,
      "domain": "wikibrief.org",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 1036833.05393351,
      "curr_month_visits": 1036833.05393351,
      "unique_users": 661873.583332637,
      "pages_per_visit": 1.57149839697094
    },
    {
      "global_rank": 7705,
      "category_rank": 76,
      "domain": "alc.co.jp",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 9109072.39746521,
      "curr_month_visits": 9109072.39746521,
      "unique_users": 3410685.5473757,
      "pages_per_visit": 3.33311638711182
    },
    {
      "global_rank": 127836,
      "category_rank": 76,
      "domain": "rti.org",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 290456.858055157,
      "curr_month_visits": 290456.858055157,
      "unique_users": 133089.164982016,
      "pages_per_visit": 5.8200614804889
    },
    {
      "global_rank": 7789,
      "category_rank": 77,
      "domain": "kompasiana.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 10040061.5707292,
      "curr_month_visits": 10040061.5707292,
      "unique_users": 6170733.82555022,
      "pages_per_visit": 2.35013089182123
    },
    {
      "global_rank": 79573,
      "category_rank": 77,
      "domain": "yokohama-cu.ac.jp",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 518261.637763862,
      "curr_month_visits": 518261.637763862,
      "unique_users": 194417.851568545,
      "pages_per_visit": 5.98434356618381
    },
    {
      "global_rank": 201687,
      "category_rank": 77,
      "domain": "recurrent.co.jp",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 258265.828970444,
      "curr_month_visits": 258265.828970444,
      "unique_users": 77952.1177769782,
      "pages_per_visit": 4.73331322607953
    },
    {
      "global_rank": 49407,
      "category_rank": 77,
      "domain": "maps.nls.uk",
      "category": "Science_and_Education/History",
      "avg_month_visits": 385279.905581192,
      "curr_month_visits": 385279.905581192,
      "unique_users": 142782.999968991,
      "pages_per_visit": 42.8061541376441
    },
    {
      "global_rank": 82689,
      "category_rank": 77,
      "domain": "petplace.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 663012.02063775,
      "curr_month_visits": 663012.02063775,
      "unique_users": 460124.503800673,
      "pages_per_visit": 2.80597193620435
    },
    {
      "global_rank": 173304,
      "category_rank": 77,
      "domain": "schulcloud-thueringen.de",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 184669.311507917,
      "curr_month_visits": 184669.311507917,
      "unique_users": 39744.3958531556,
      "pages_per_visit": 7.3999940483502
    },
    {
      "global_rank": 207551,
      "category_rank": 77,
      "domain": "civilwartalk.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 188145.2148768,
      "curr_month_visits": 188145.2148768,
      "unique_users": 79486.6789359816,
      "pages_per_visit": 2.47974061883594
    },
    {
      "global_rank": 50763,
      "category_rank": 77,
      "domain": "nli.org.il",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 883030.901313888,
      "curr_month_visits": 883030.901313888,
      "unique_users": 476337.997476561,
      "pages_per_visit": 4.58121024073475
    },
    {
      "global_rank": 72727,
      "category_rank": 77,
      "domain": "wmcloud.org",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 665438.210785886,
      "curr_month_visits": 665438.210785886,
      "unique_users": 202160.556290992,
      "pages_per_visit": 4.80903612213171
    },
    {
      "global_rank": 65432,
      "category_rank": 77,
      "domain": "truthpress.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 858304.87797528,
      "curr_month_visits": 858304.87797528,
      "unique_users": 135155.491018097,
      "pages_per_visit": 2.4508090614058
    },
    {
      "global_rank": 19679,
      "category_rank": 77,
      "domain": "zdic.net",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 3755346.77236165,
      "curr_month_visits": 3755346.77236165,
      "unique_users": 1280163.34791967,
      "pages_per_visit": 3.40146313904105
    },
    {
      "global_rank": 51948,
      "category_rank": 77,
      "domain": "daikenshop.com",
      "category": "Science_and_Education",
      "avg_month_visits": 1081432.80322317,
      "curr_month_visits": 1081432.80322317,
      "unique_users": 675842.467967662,
      "pages_per_visit": 2.51008680436183
    },
    {
      "global_rank": 90968,
      "category_rank": 77,
      "domain": "telephoneannuaire.fr",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 710217.601894921,
      "curr_month_visits": 710217.601894921,
      "unique_users": 572527.639323617,
      "pages_per_visit": 1.81452415507361
    },
    {
      "global_rank": 60110,
      "category_rank": 78,
      "domain": "thebrightthinker.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 774935.903909774,
      "curr_month_visits": 774935.903909774,
      "unique_users": 35431.0958510986,
      "pages_per_visit": 13.0476179289528
    },
    {
      "global_rank": 51030,
      "category_rank": 78,
      "domain": "map.schweizmobil.ch",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 525130.554340282,
      "curr_month_visits": 525130.554340282,
      "unique_users": 179607.476000769,
      "pages_per_visit": 30.1572213377185
    },
    {
      "global_rank": 7987,
      "category_rank": 78,
      "domain": "worldcat.org",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 7659331.52994169,
      "curr_month_visits": 7659331.52994169,
      "unique_users": 3916828.04586758,
      "pages_per_visit": 4.14906573755891
    },
    {
      "global_rank": 19883,
      "category_rank": 78,
      "domain": "lexicanum.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 3625770.49564681,
      "curr_month_visits": 3625770.49564681,
      "unique_users": 1458764.57520485,
      "pages_per_visit": 4.98523586029666
    },
    {
      "global_rank": 75398,
      "category_rank": 78,
      "domain": "greenwichmeantime.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 947596.433239392,
      "curr_month_visits": 947596.433239392,
      "unique_users": 578042.571091086,
      "pages_per_visit": 1.60732716514507
    },
    {
      "global_rank": 91677,
      "category_rank": 78,
      "domain": "todesanzeigenportal.ch",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 618494.55807389,
      "curr_month_visits": 618494.55807389,
      "unique_users": 229413.997958422,
      "pages_per_visit": 2.55740837851317
    },
    {
      "global_rank": 326397,
      "category_rank": 78,
      "domain": "astrometry.net",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 85348.495167946,
      "curr_month_visits": 85348.495167946,
      "unique_users": 34152.8105853194,
      "pages_per_visit": 9.60666914512896
    },
    {
      "global_rank": 217180,
      "category_rank": 79,
      "domain": "earthengine.app",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 134862.922705741,
      "curr_month_visits": 134862.922705741,
      "unique_users": 61968.6979601226,
      "pages_per_visit": 4.31510624729927
    },
    {
      "global_rank": 651945,
      "category_rank": 79,
      "domain": "thedream.us",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 36248.503989834,
      "curr_month_visits": 36248.503989834,
      "unique_users": 22351.9499785841,
      "pages_per_visit": 2.57487644335244
    },
    {
      "global_rank": 51807,
      "category_rank": 79,
      "domain": "govmap.gov.il",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 505108.169356101,
      "curr_month_visits": 505108.169356101,
      "unique_users": 150408.294651079,
      "pages_per_visit": 16.8553706885772
    },
    {
      "global_rank": 207321,
      "category_rank": 79,
      "domain": "bookaplace.be",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 92744.5341442895,
      "curr_month_visits": 92744.5341442895,
      "unique_users": 28555.0022622856,
      "pages_per_visit": 6.63717174816668
    },
    {
      "global_rank": 328573,
      "category_rank": 79,
      "domain": "xuanaxuan.wordpress.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 82521.3852514797,
      "curr_month_visits": 82521.3852514797,
      "unique_users": 28783.4303641215,
      "pages_per_visit": 2.36761141816224
    },
    {
      "global_rank": 93024,
      "category_rank": 79,
      "domain": "localsearch.com.au",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 711333.861477545,
      "curr_month_visits": 711333.861477545,
      "unique_users": 447041.360839412,
      "pages_per_visit": 1.91310612502193
    },
    {
      "global_rank": 53331,
      "category_rank": 79,
      "domain": "zukureview.com",
      "category": "Science_and_Education",
      "avg_month_visits": 493243.849540574,
      "curr_month_visits": 493243.849540574,
      "unique_users": 52508.2676289587,
      "pages_per_visit": 21.1726595139576
    },
    {
      "global_rank": 67056,
      "category_rank": 79,
      "domain": "thesimplifydaily.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 1085708.87998983,
      "curr_month_visits": 1085708.87998983,
      "unique_users": 446730.154945286,
      "pages_per_visit": 2.06762735487716
    },
    {
      "global_rank": 80031,
      "category_rank": 79,
      "domain": "genscript.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 427450.296429466,
      "curr_month_visits": 427450.296429466,
      "unique_users": 177170.476814785,
      "pages_per_visit": 6.27313544356634
    },
    {
      "global_rank": 8007,
      "category_rank": 79,
      "domain": "meinestadt.de",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 10242597.3029417,
      "curr_month_visits": 10242597.3029417,
      "unique_users": 5534108.45448246,
      "pages_per_visit": 2.71171176908298
    },
    {
      "global_rank": 19896,
      "category_rank": 79,
      "domain": "powerthesaurus.org",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 3894719.69707413,
      "curr_month_visits": 3894719.69707413,
      "unique_users": 2067767.64331123,
      "pages_per_visit": 2.44681656682622
    },
    {
      "global_rank": 67258,
      "category_rank": 80,
      "domain": "goodfavornews.com",
      "category": "Science_and_Education",
      "avg_month_visits": 1526761.66158758,
      "curr_month_visits": 1526761.66158758,
      "unique_users": 819244.776148065,
      "pages_per_visit": 1.97183310365828
    },
    {
      "global_rank": 53628,
      "category_rank": 80,
      "domain": "embarkvet.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 869567.729002621,
      "curr_month_visits": 869567.729002621,
      "unique_users": 451610.346679304,
      "pages_per_visit": 4.75471564012215
    },
    {
      "global_rank": 8011,
      "category_rank": 80,
      "domain": "rekhta.org",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 7751130.01812461,
      "curr_month_visits": 7751130.01812461,
      "unique_users": 3582617.50606989,
      "pages_per_visit": 3.30282832042984
    },
    {
      "global_rank": 53181,
      "category_rank": 80,
      "domain": "ekispert.net",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 1205934.28774821,
      "curr_month_visits": 1205934.28774821,
      "unique_users": 362136.940092751,
      "pages_per_visit": 4.00687829766575
    },
    {
      "global_rank": 81056,
      "category_rank": 80,
      "domain": "catholic.ac.kr",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 477399.76718244,
      "curr_month_visits": 477399.76718244,
      "unique_users": 108227.101453956,
      "pages_per_visit": 7.67795387571413
    },
    {
      "global_rank": 78552,
      "category_rank": 80,
      "domain": "eksiduyuru.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 724361.896653656,
      "curr_month_visits": 724361.896653656,
      "unique_users": 229242.067560747,
      "pages_per_visit": 5.23645825773405
    },
    {
      "global_rank": 20011,
      "category_rank": 80,
      "domain": "wooordhunt.ru",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 3005850.49613741,
      "curr_month_visits": 3005850.49613741,
      "unique_users": 854317.523286448,
      "pages_per_visit": 4.4493217099131
    },
    {
      "global_rank": 1966,
      "category_rank": 80,
      "domain": "loigiaihay.com",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 30817903.416082,
      "curr_month_visits": 30817903.416082,
      "unique_users": 9942013.29514182,
      "pages_per_visit": 3.25906823178407
    },
    {
      "global_rank": 383386,
      "category_rank": 80,
      "domain": "biblissima.fr",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 79162.4602059696,
      "curr_month_visits": 79162.4602059696,
      "unique_users": 33638.1614136464,
      "pages_per_visit": 2.40969992940228
    },
    {
      "global_rank": 8285,
      "category_rank": 81,
      "domain": "kartaslov.ru",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 9007949.02242711,
      "curr_month_visits": 9007949.02242711,
      "unique_users": 5508052.99372418,
      "pages_per_visit": 2.11781348396614
    },
    {
      "global_rank": 94380,
      "category_rank": 81,
      "domain": "whitepages.com.au",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 550605.30414059,
      "curr_month_visits": 550605.30414059,
      "unique_users": 390265.079870914,
      "pages_per_visit": 2.68148884555025
    },
    {
      "global_rank": 221583,
      "category_rank": 81,
      "domain": "marinebio.org",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 106596.530408434,
      "curr_month_visits": 106596.530408434,
      "unique_users": 50550.8231818318,
      "pages_per_visit": 4.01594965390576
    },
    {
      "global_rank": 52179,
      "category_rank": 81,
      "domain": "noodletools.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 776183.189192008,
      "curr_month_visits": 776183.189192008,
      "unique_users": 216681.15597429,
      "pages_per_visit": 5.61921010994004
    },
    {
      "global_rank": 81205,
      "category_rank": 81,
      "domain": "ensembl.org",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 424357.260536262,
      "curr_month_visits": 424357.260536262,
      "unique_users": 179026.012128072,
      "pages_per_visit": 7.21319414439847
    },
    {
      "global_rank": 20061,
      "category_rank": 81,
      "domain": "teleparty.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 3814059.56431842,
      "curr_month_visits": 3814059.56431842,
      "unique_users": 1661198.38714343,
      "pages_per_visit": 1.91986675857421
    },
    {
      "global_rank": 162663,
      "category_rank": 81,
      "domain": "wakayama-u.ac.jp",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 180908.399218501,
      "curr_month_visits": 180908.399218501,
      "unique_users": 62345.5052577568,
      "pages_per_visit": 9.12073066988212
    },
    {
      "global_rank": 69169,
      "category_rank": 81,
      "domain": "ibomma.movie",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 813025.428057466,
      "curr_month_visits": 813025.428057466,
      "unique_users": 538639.712601752,
      "pages_per_visit": 2.78927525986469
    },
    {
      "global_rank": 78727,
      "category_rank": 81,
      "domain": "midad.com",
      "category": "Science_and_Education",
      "avg_month_visits": 446714.509918522,
      "curr_month_visits": 446714.509918522,
      "unique_users": 254465.291422597,
      "pages_per_visit": 4.89325426763485
    },
    {
      "global_rank": 54221,
      "category_rank": 82,
      "domain": "petinsurance.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 927756.542691096,
      "curr_month_visits": 927756.542691096,
      "unique_users": 570113.179357676,
      "pages_per_visit": 4.30089417968491
    },
    {
      "global_rank": 8419,
      "category_rank": 82,
      "domain": "sinonim.org",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 7058056.58625648,
      "curr_month_visits": 7058056.58625648,
      "unique_users": 3856581.40727316,
      "pages_per_visit": 2.42822804419516
    },
    {
      "global_rank": 80171,
      "category_rank": 82,
      "domain": "online-translator.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 721572.221052271,
      "curr_month_visits": 721572.221052271,
      "unique_users": 345085.301441906,
      "pages_per_visit": 2.7907719437172
    },
    {
      "global_rank": 20263,
      "category_rank": 82,
      "domain": "ldoceonline.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 3444385.55756744,
      "curr_month_visits": 3444385.55756744,
      "unique_users": 1035165.16922257,
      "pages_per_visit": 4.34607633977788
    },
    {
      "global_rank": 90563,
      "category_rank": 82,
      "domain": "aquariumforum.de",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 628504.113069558,
      "curr_month_visits": 628504.113069558,
      "unique_users": 175153.635120507,
      "pages_per_visit": 4.04048255277
    },
    {
      "global_rank": 52471,
      "category_rank": 82,
      "domain": "rijksmuseum.nl",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 726701.766537421,
      "curr_month_visits": 726701.766537421,
      "unique_users": 421968.569215646,
      "pages_per_visit": 8.21216766551122
    },
    {
      "global_rank": 69535,
      "category_rank": 82,
      "domain": "myhomesgardens.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 227701.598998274,
      "curr_month_visits": 227701.598998274,
      "unique_users": 100574.438385968,
      "pages_per_visit": 13.9546317387778
    },
    {
      "global_rank": 335014,
      "category_rank": 82,
      "domain": "kodomonokagaku.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 174307.396399017,
      "curr_month_visits": 174307.396399017,
      "unique_users": 146256.653608842,
      "pages_per_visit": 1.66026380344888
    },
    {
      "global_rank": 97380,
      "category_rank": 82,
      "domain": "кто-звонит.рф",
      "category": "Science_and_Education",
      "avg_month_visits": 393899.474756298,
      "curr_month_visits": 393899.474756298,
      "unique_users": 264526.46938013,
      "pages_per_visit": 1.21852055746123
    },
    {
      "global_rank": 81944,
      "category_rank": 82,
      "domain": "biospace.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 792777.426975559,
      "curr_month_visits": 792777.426975559,
      "unique_users": 460470.604988775,
      "pages_per_visit": 2.05765169909004
    },
    {
      "global_rank": 61444,
      "category_rank": 82,
      "domain": "numberempire.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 684002.66047963,
      "curr_month_visits": 684002.66047963,
      "unique_users": 394766.221698047,
      "pages_per_visit": 5.72714960551737
    },
    {
      "global_rank": 53929,
      "category_rank": 82,
      "domain": "mapsofworld.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 1303702.18374401,
      "curr_month_visits": 1303702.18374401,
      "unique_users": 929695.691028162,
      "pages_per_visit": 1.88722049552364
    },
    {
      "global_rank": 54973,
      "category_rank": 83,
      "domain": "bluecross.org.uk",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 937422.224974424,
      "curr_month_visits": 937422.224974424,
      "unique_users": 609356.50607454,
      "pages_per_visit": 3.53010429853004
    },
    {
      "global_rank": 8791,
      "category_rank": 83,
      "domain": "neuralwriter.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 1885868.0918235,
      "curr_month_visits": 1885868.0918235,
      "unique_users": 862915.199243586,
      "pages_per_visit": 47.3527550811265
    },
    {
      "global_rank": 164191,
      "category_rank": 83,
      "domain": "tgm.ac.at",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 202366.667815458,
      "curr_month_visits": 202366.667815458,
      "unique_users": 24023.1609469944,
      "pages_per_visit": 7.6199397835177
    },
    {
      "global_rank": 55833,
      "category_rank": 83,
      "domain": "schieber.ch",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 924329.186063218,
      "curr_month_visits": 924329.186063218,
      "unique_users": 76235.4421140869,
      "pages_per_visit": 7.38022820944187
    },
    {
      "global_rank": 218443,
      "category_rank": 83,
      "domain": "colsanantoniodepadua.com",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 149975.70453671,
      "curr_month_visits": 149975.70453671,
      "unique_users": 43710.7588645176,
      "pages_per_visit": 5.65228400173101
    },
    {
      "global_rank": 97607,
      "category_rank": 83,
      "domain": "pkt.pl",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 671276.399436574,
      "curr_month_visits": 671276.399436574,
      "unique_users": 451731.842206778,
      "pages_per_visit": 2.75322329197064
    },
    {
      "global_rank": 225295,
      "category_rank": 83,
      "domain": "cnes.fr",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 141469.007872491,
      "curr_month_visits": 141469.007872491,
      "unique_users": 70654.159529735,
      "pages_per_visit": 3.29617125683769
    },
    {
      "global_rank": 71006,
      "category_rank": 84,
      "domain": "superduperior.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 866002.07218875,
      "curr_month_visits": 866002.07218875,
      "unique_users": 327693.9202038,
      "pages_per_visit": 1.28376800954174
    },
    {
      "global_rank": 20336,
      "category_rank": 84,
      "domain": "linguee.de",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 4010545.71463598,
      "curr_month_visits": 4010545.71463598,
      "unique_users": 1952676.64975231,
      "pages_per_visit": 2.0610050080425
    },
    {
      "global_rank": 93186,
      "category_rank": 84,
      "domain": "newscast.jp",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 783737.725960968,
      "curr_month_visits": 783737.725960968,
      "unique_users": 631623.551123889,
      "pages_per_visit": 1.7577333352168
    },
    {
      "global_rank": 97785,
      "category_rank": 84,
      "domain": "vhs.cloud",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 332307.584471113,
      "curr_month_visits": 332307.584471113,
      "unique_users": 83749.0355189776,
      "pages_per_visit": 8.97303570833261
    },
    {
      "global_rank": 83170,
      "category_rank": 84,
      "domain": "elifesciences.org",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 764897.433941735,
      "curr_month_visits": 764897.433941735,
      "unique_users": 354913.814770066,
      "pages_per_visit": 2.13763186671219
    },
    {
      "global_rank": 345979,
      "category_rank": 84,
      "domain": "nightearth.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 37466.6904460434,
      "curr_month_visits": 37466.6904460434,
      "unique_users": 18789.3200968437,
      "pages_per_visit": 35.4376326759821
    },
    {
      "global_rank": 137100,
      "category_rank": 84,
      "domain": "ufra.edu.br",
      "category": "Science_and_Education/History",
      "avg_month_visits": 303906.295028366,
      "curr_month_visits": 303906.295028366,
      "unique_users": 97478.248059086,
      "pages_per_visit": 4.48254881529204
    },
    {
      "global_rank": 56265,
      "category_rank": 84,
      "domain": "planplus.rs",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 1335991.83961126,
      "curr_month_visits": 1335991.83961126,
      "unique_users": 818992.411382308,
      "pages_per_visit": 1.72346005937807
    },
    {
      "global_rank": 82166,
      "category_rank": 84,
      "domain": "youtubetranscript.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 771886.113893929,
      "curr_month_visits": 771886.113893929,
      "unique_users": 426505.370666493,
      "pages_per_visit": 2.6795549082704
    },
    {
      "global_rank": 8810,
      "category_rank": 84,
      "domain": "bab.la",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 9961146.64844361,
      "curr_month_visits": 9961146.64844361,
      "unique_users": 6784760.02755189,
      "pages_per_visit": 1.81481820087913
    },
    {
      "global_rank": 667604,
      "category_rank": 84,
      "domain": "terryfoundation.org",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 34025.4762859292,
      "curr_month_visits": 34025.4762859292,
      "unique_users": 15171.4731511423,
      "pages_per_visit": 2.07791395061947
    },
    {
      "global_rank": 2060760,
      "category_rank": 84,
      "domain": "archiefpunt.be",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 7403.28418686198,
      "curr_month_visits": 7403.28418686198,
      "unique_users": 4292.35590657392,
      "pages_per_visit": 2.76819040394332
    },
    {
      "global_rank": 93301,
      "category_rank": 85,
      "domain": "dogfoodadvisor.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 687322.327632932,
      "curr_month_visits": 687322.327632932,
      "unique_users": 477395.072363254,
      "pages_per_visit": 2.52628484082928
    },
    {
      "global_rank": 133249,
      "category_rank": 85,
      "domain": "statelinetack.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 277359.363990808,
      "curr_month_visits": 277359.363990808,
      "unique_users": 153277.51385376,
      "pages_per_visit": 4.35456854242618
    },
    {
      "global_rank": 84785,
      "category_rank": 85,
      "domain": "ikatastr.cz",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 288552.678638867,
      "curr_month_visits": 288552.678638867,
      "unique_users": 105827.465523823,
      "pages_per_visit": 17.2607800635405
    },
    {
      "global_rank": 224025,
      "category_rank": 85,
      "domain": "iti.gov.eg",
      "category": "Science_and_Education/History",
      "avg_month_visits": 414782.267554576,
      "curr_month_visits": 414782.267554576,
      "unique_users": 87510.712371795,
      "pages_per_visit": 5.8627470345275
    },
    {
      "global_rank": 99225,
      "category_rank": 85,
      "domain": "yp.ru",
      "category": "Science_and_Education/History",
      "avg_month_visits": 810034.305532353,
      "curr_month_visits": 810034.305532353,
      "unique_users": 659114.828203312,
      "pages_per_visit": 1.46362245718407
    },
    {
      "global_rank": 56433,
      "category_rank": 85,
      "domain": "skyvector.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 1384069.93954579,
      "curr_month_visits": 1384069.93954579,
      "unique_users": 419329.522911019,
      "pages_per_visit": 2.28667175510152
    },
    {
      "global_rank": 9101,
      "category_rank": 85,
      "domain": "tureng.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 7113091.26739021,
      "curr_month_visits": 7113091.26739021,
      "unique_users": 2278773.67324925,
      "pages_per_visit": 3.55320638303577
    },
    {
      "global_rank": 2069,
      "category_rank": 85,
      "domain": "desmos.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 32482911.5605312,
      "curr_month_visits": 32482911.5605312,
      "unique_users": 9883528.37999976,
      "pages_per_visit": 2.92852528455342
    },
    {
      "global_rank": 348718,
      "category_rank": 85,
      "domain": "astromart.com",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 85086.4649587211,
      "curr_month_visits": 85086.4649587211,
      "unique_users": 22035.5310062172,
      "pages_per_visit": 6.07475935299802
    },
    {
      "global_rank": 3419,
      "category_rank": 85,
      "domain": "slidesgo.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 12494903.0470698,
      "curr_month_visits": 12494903.0470698,
      "unique_users": 7613417.97340785,
      "pages_per_visit": 5.84415562985631
    },
    {
      "global_rank": 20513,
      "category_rank": 85,
      "domain": "zivotvcesku.cz",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 4453484.19865106,
      "curr_month_visits": 4453484.19865106,
      "unique_users": 1756354.31422031,
      "pages_per_visit": 2.10892948040084
    },
    {
      "global_rank": 58163,
      "category_rank": 86,
      "domain": "e-mapa.net",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 1127222.2809261,
      "curr_month_visits": 1127222.2809261,
      "unique_users": 426749.838736943,
      "pages_per_visit": 2.87564147376843
    },
    {
      "global_rank": 93475,
      "category_rank": 86,
      "domain": "pesiq.ru",
      "category": "Science_and_Education",
      "avg_month_visits": 333548.562414505,
      "curr_month_visits": 333548.562414505,
      "unique_users": 81680.9856358583,
      "pages_per_visit": 6.92710338979823
    },
    {
      "global_rank": 2103,
      "category_rank": 86,
      "domain": "renaissance-go.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 18959536.1068844,
      "curr_month_visits": 18959536.1068844,
      "unique_users": 3893636.84201542,
      "pages_per_visit": 11.6629535558936
    },
    {
      "global_rank": 73858,
      "category_rank": 86,
      "domain": "zooplus.se",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 434975.01160347,
      "curr_month_visits": 434975.01160347,
      "unique_users": 251478.571610112,
      "pages_per_visit": 5.17056539429097
    },
    {
      "global_rank": 9107,
      "category_rank": 86,
      "domain": "dict.cc",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 7754956.30058184,
      "curr_month_visits": 7754956.30058184,
      "unique_users": 1690314.91523356,
      "pages_per_visit": 3.6513122176234
    },
    {
      "global_rank": 234345,
      "category_rank": 86,
      "domain": "globe.gov",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 136755.490919039,
      "curr_month_visits": 136755.490919039,
      "unique_users": 69944.9923589901,
      "pages_per_visit": 2.64072311211492
    },
    {
      "global_rank": 348888,
      "category_rank": 86,
      "domain": "cieletespace.fr",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 206023.322222006,
      "curr_month_visits": 206023.322222006,
      "unique_users": 118433.460878986,
      "pages_per_visit": 1.69725541966969
    },
    {
      "global_rank": 85743,
      "category_rank": 86,
      "domain": "ancfcc.gov.ma",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 642162.506995274,
      "curr_month_visits": 642162.506995274,
      "unique_users": 148464.470639074,
      "pages_per_visit": 5.4624048225988
    },
    {
      "global_rank": 56117,
      "category_rank": 86,
      "domain": "petsplace.nl",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 957594.931835858,
      "curr_month_visits": 957594.931835858,
      "unique_users": 500812.293611249,
      "pages_per_visit": 3.93854273459188
    },
    {
      "global_rank": 100550,
      "category_rank": 86,
      "domain": "supermarktcheck.de",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 663098.077354739,
      "curr_month_visits": 663098.077354739,
      "unique_users": 539942.860031205,
      "pages_per_visit": 2.05635651248721
    },
    {
      "global_rank": 22014,
      "category_rank": 87,
      "domain": "oed.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 2808264.86319367,
      "curr_month_visits": 2808264.86319367,
      "unique_users": 1774791.21125704,
      "pages_per_visit": 3.25232804851237
    },
    {
      "global_rank": 56227,
      "category_rank": 87,
      "domain": "petstock.com.au",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 853079.006353204,
      "curr_month_visits": 853079.006353204,
      "unique_users": 460778.155689201,
      "pages_per_visit": 3.92901937196928
    },
    {
      "global_rank": 58971,
      "category_rank": 87,
      "domain": "jeu-tarot-en-ligne.com",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 854253.066254093,
      "curr_month_visits": 854253.066254093,
      "unique_users": 52230.6016046071,
      "pages_per_visit": 7.58583038796598
    },
    {
      "global_rank": 138767,
      "category_rank": 87,
      "domain": "teletrak.cl",
      "category": "Science_and_Education/Astronomy",
      "avg_month_visits": 281156.426867243,
      "curr_month_visits": 281156.426867243,
      "unique_users": 44299.5084958223,
      "pages_per_visit": 12.8891280217755
    },
    {
      "global_rank": 9135,
      "category_rank": 87,
      "domain": "larousse.fr",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 9172609.08946163,
      "curr_month_visits": 9172609.08946163,
      "unique_users": 5422822.0472701,
      "pages_per_visit": 1.89235163066595
    },
    {
      "global_rank": 229793,
      "category_rank": 87,
      "domain": "safe2drive.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 97795.7468304029,
      "curr_month_visits": 97795.7468304029,
      "unique_users": 41122.9500212893,
      "pages_per_visit": 13.138105980985
    },
    {
      "global_rank": 88687,
      "category_rank": 87,
      "domain": "hungaricana.hu",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 252551.902512461,
      "curr_month_visits": 252551.902512461,
      "unique_users": 108027.742961188,
      "pages_per_visit": 16.3166569040513
    },
    {
      "global_rank": 101550,
      "category_rank": 87,
      "domain": "france-inverse.com",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 537849.414877013,
      "curr_month_visits": 537849.414877013,
      "unique_users": 464837.766448464,
      "pages_per_visit": 2.00193085209087
    },
    {
      "global_rank": 85873,
      "category_rank": 87,
      "domain": "genome.jp",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 479427.737768101,
      "curr_month_visits": 479427.737768101,
      "unique_users": 223497.384809679,
      "pages_per_visit": 4.95365916308613
    },
    {
      "global_rank": 139481,
      "category_rank": 87,
      "domain": "livejaverianaedu-my.sharepoint.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 288656.103515593,
      "curr_month_visits": 288656.103515593,
      "unique_users": 40571.8221610245,
      "pages_per_visit": 5.21211848728804
    },
    {
      "global_rank": 229859,
      "category_rank": 88,
      "domain": "cvovolt.be",
      "category": "Science_and_Education/History",
      "avg_month_visits": 105811.000412286,
      "curr_month_visits": 105811.000412286,
      "unique_users": 19355.0778460675,
      "pages_per_visit": 16.3171083978581
    },
    {
      "global_rank": 103065,
      "category_rank": 88,
      "domain": "financecharts.com",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 324379.719782222,
      "curr_month_visits": 324379.719782222,
      "unique_users": 155552.089946888,
      "pages_per_visit": 5.09685930938616
    },
    {
      "global_rank": 9183,
      "category_rank": 88,
      "domain": "yourdictionary.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 7603544.56080178,
      "curr_month_visits": 7603544.56080178,
      "unique_users": 2773967.69921966,
      "pages_per_visit": 3.7852330993303
    },
    {
      "global_rank": 60169,
      "category_rank": 88,
      "domain": "seurl.cz",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 1204946.77740456,
      "curr_month_visits": 1204946.77740456,
      "unique_users": 623566.975169894,
      "pages_per_visit": 1.34433019200901
    },
    {
      "global_rank": 357320,
      "category_rank": 88,
      "domain": "constellation-guide.com",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 143258.730384258,
      "curr_month_visits": 143258.730384258,
      "unique_users": 80882.7239109511,
      "pages_per_visit": 1.52768590324033
    },
    {
      "global_rank": 174242,
      "category_rank": 88,
      "domain": "physicsisbeautiful.com",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 191035.416867686,
      "curr_month_visits": 191035.416867686,
      "unique_users": 79369.510540817,
      "pages_per_visit": 3.38402881855495
    },
    {
      "global_rank": 56402,
      "category_rank": 88,
      "domain": "orijenpetfoods.com",
      "category": "Science_and_Education",
      "avg_month_visits": 1080158.84270637,
      "curr_month_visits": 1080158.84270637,
      "unique_users": 657628.315467272,
      "pages_per_visit": 1.58579751358768
    },
    {
      "global_rank": 90091,
      "category_rank": 88,
      "domain": "onlinestreet.de",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 693055.763886405,
      "curr_month_visits": 693055.763886405,
      "unique_users": 551669.181058798,
      "pages_per_visit": 1.94619638815545
    },
    {
      "global_rank": 87053,
      "category_rank": 88,
      "domain": "proteinatlas.org",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 469540.022621937,
      "curr_month_visits": 469540.022621937,
      "unique_users": 205979.291694259,
      "pages_per_visit": 4.92215579024603
    },
    {
      "global_rank": 22017,
      "category_rank": 88,
      "domain": "hamal.co.il",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 3313738.54998831,
      "curr_month_visits": 3313738.54998831,
      "unique_users": 811124.817798949,
      "pages_per_visit": 4.13438049376782
    },
    {
      "global_rank": 140040,
      "category_rank": 89,
      "domain": "root-top.com",
      "category": "Science_and_Education",
      "avg_month_visits": 295470.796492685,
      "curr_month_visits": 295470.796492685,
      "unique_users": 34623.8977541283,
      "pages_per_visit": 6.82184214743974
    },
    {
      "global_rank": 75913,
      "category_rank": 89,
      "domain": "brainway.app",
      "category": "Science_and_Education/Biology",
      "avg_month_visits": 441613.344880142,
      "curr_month_visits": 441613.344880142,
      "unique_users": 225076.180683938,
      "pages_per_visit": 2.92412301820179
    },
    {
      "global_rank": 229889,
      "category_rank": 89,
      "domain": "fahrschule.de",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 145051.748778441,
      "curr_month_visits": 145051.748778441,
      "unique_users": 61021.4197443549,
      "pages_per_visit": 4.43911398284854
    },
    {
      "global_rank": 207842,
      "category_rank": 89,
      "domain": "pasternack.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 185295.8472355,
      "curr_month_visits": 185295.8472355,
      "unique_users": 87074.2205886374,
      "pages_per_visit": 3.51004058938116
    },
    {
      "global_rank": 90760,
      "category_rank": 89,
      "domain": "calendar-365.com",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 685645.527785858,
      "curr_month_visits": 685645.527785858,
      "unique_users": 467941.666857706,
      "pages_per_visit": 1.71778031849102
    },
    {
      "global_rank": 9468,
      "category_rank": 89,
      "domain": "amalgama-lab.com",
      "category": "Science_and_Education/Earth_Sciences",
      "avg_month_visits": 9865566.19051409,
      "curr_month_visits": 9865566.19051409,
      "unique_users": 4898474.2618408,
      "pages_per_visit": 1.68112248542071
    },
    {
      "global_rank": 1843638,
      "category_rank": 89,
      "domain": "remue.net",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 10245.4576591533,
      "curr_month_visits": 10245.4576591533,
      "unique_users": 4578.46886399695,
      "pages_per_visit": 2.49558075305703
    },
    {
      "global_rank": 3691,
      "category_rank": 89,
      "domain": "physicsandmathstutor.com",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 12880692.7719706,
      "curr_month_visits": 12880692.7719706,
      "unique_users": 2404923.51538812,
      "pages_per_visit": 5.32439566565817
    },
    {
      "global_rank": 94804,
      "category_rank": 89,
      "domain": "pixelcatsend.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 190423.627972702,
      "curr_month_visits": 190423.627972702,
      "unique_users": 27220.729744777,
      "pages_per_visit": 31.1291179967004
    },
    {
      "global_rank": 60476,
      "category_rank": 89,
      "domain": "tabuademares.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 1312013.65516487,
      "curr_month_visits": 1312013.65516487,
      "unique_users": 526278.362750153,
      "pages_per_visit": 1.59197009904662
    },
    {
      "global_rank": 22564,
      "category_rank": 90,
      "domain": "metric-conversions.org",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 3842521.64540989,
      "curr_month_visits": 3842521.64540989,
      "unique_users": 2698345.33271836,
      "pages_per_visit": 1.69469645530609
    },
    {
      "global_rank": 105063,
      "category_rank": 90,
      "domain": "starofservice.com",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 722721.897808611,
      "curr_month_visits": 722721.897808611,
      "unique_users": 557770.489344456,
      "pages_per_visit": 1.80567307852511
    },
    {
      "global_rank": 55818,
      "category_rank": 90,
      "domain": "koob.ru",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 838455.874490893,
      "curr_month_visits": 838455.874490893,
      "unique_users": 417260.014179502,
      "pages_per_visit": 4.76618949287591
    },
    {
      "global_rank": 715238,
      "category_rank": 90,
      "domain": "postgraduatestudentships.co.uk",
      "category": "Science_and_Education/History",
      "avg_month_visits": 35445.3206918297,
      "curr_month_visits": 35445.3206918297,
      "unique_users": 18455.3987587748,
      "pages_per_visit": 2.34777300991895
    },
    {
      "global_rank": 9911,
      "category_rank": 90,
      "domain": "rhymezone.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 6452823.04711817,
      "curr_month_visits": 6452823.04711817,
      "unique_users": 2881226.00317066,
      "pages_per_visit": 3.80293688959212
    },
    {
      "global_rank": 208395,
      "category_rank": 90,
      "domain": "u-shizuoka-ken.ac.jp",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 175739.243348989,
      "curr_month_visits": 175739.243348989,
      "unique_users": 55593.1619765084,
      "pages_per_visit": 6.55149634453046
    },
    {
      "global_rank": 76747,
      "category_rank": 90,
      "domain": "morery.com",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 1200200.49950028,
      "curr_month_visits": 1200200.49950028,
      "unique_users": 927508.817442124,
      "pages_per_visit": 2.23645401335727
    },
    {
      "global_rank": 94733,
      "category_rank": 90,
      "domain": "termiumplus.gc.ca",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 794576.804296526,
      "curr_month_visits": 794576.804296526,
      "unique_users": 297885.605486891,
      "pages_per_visit": 3.3394338677613
    },
    {
      "global_rank": 140961,
      "category_rank": 90,
      "domain": "ird.fr",
      "category": "Science_and_Education/History",
      "avg_month_visits": 302674.083929253,
      "curr_month_visits": 302674.083929253,
      "unique_users": 139001.408818072,
      "pages_per_visit": 4.14778524604812
    },
    {
      "global_rank": 87493,
      "category_rank": 91,
      "domain": "innerbody.com",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 736029.182428313,
      "curr_month_visits": 736029.182428313,
      "unique_users": 486177.528386906,
      "pages_per_visit": 1.64408781230831
    },
    {
      "global_rank": 720732,
      "category_rank": 91,
      "domain": "truman.gov",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 32261.3437179074,
      "curr_month_visits": 32261.3437179074,
      "unique_users": 16586.4887269723,
      "pages_per_visit": 3.86944522394862
    },
    {
      "global_rank": 62136,
      "category_rank": 91,
      "domain": "distance.to",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 1117163.88086002,
      "curr_month_visits": 1117163.88086002,
      "unique_users": 712079.452792193,
      "pages_per_visit": 2.20927368143183
    },
    {
      "global_rank": 22687,
      "category_rank": 91,
      "domain": "dictionnaire.lerobert.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 3260138.03308481,
      "curr_month_visits": 3260138.03308481,
      "unique_users": 1734240.54532281,
      "pages_per_visit": 2.32777563299121
    },
    {
      "global_rank": 2197125,
      "category_rank": 91,
      "domain": "saskarchives.com",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 7445.69540895695,
      "curr_month_visits": 7445.69540895695,
      "unique_users": 4152.68766800762,
      "pages_per_visit": 3.43213190627917
    },
    {
      "global_rank": 3812,
      "category_rank": 92,
      "domain": "nhasachmienphi.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 12954805.1547771,
      "curr_month_visits": 12954805.1547771,
      "unique_users": 2533560.24045912,
      "pages_per_visit": 3.30101510619627
    },
    {
      "global_rank": 178021,
      "category_rank": 92,
      "domain": "ciemat.es",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 191949.94594978,
      "curr_month_visits": 191949.94594978,
      "unique_users": 40783.2568318322,
      "pages_per_visit": 7.14335841116795
    },
    {
      "global_rank": 106385,
      "category_rank": 92,
      "domain": "reteimprese.it",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 636096.23251795,
      "curr_month_visits": 636096.23251795,
      "unique_users": 537641.230233256,
      "pages_per_visit": 1.59363259318504
    },
    {
      "global_rank": 2234,
      "category_rank": 92,
      "domain": "nsportal.ru",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 30323411.1906476,
      "curr_month_visits": 30323411.1906476,
      "unique_users": 11331320.843276,
      "pages_per_visit": 2.27523625334426
    },
    {
      "global_rank": 238538,
      "category_rank": 92,
      "domain": "zcasu.edu.zm",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 142097.165345772,
      "curr_month_visits": 142097.165345772,
      "unique_users": 25775.9318956406,
      "pages_per_visit": 7.51456230240771
    },
    {
      "global_rank": 23667,
      "category_rank": 92,
      "domain": "kyushu-u.ac.jp",
      "category": "Science_and_Education/Social_Sciences",
      "avg_month_visits": 2267113.21542632,
      "curr_month_visits": 2267113.21542632,
      "unique_users": 726734.44055317,
      "pages_per_visit": 6.34865325832736
    },
    {
      "global_rank": 79762,
      "category_rank": 92,
      "domain": "olevod.one",
      "category": "Science_and_Education/Chemistry",
      "avg_month_visits": 1139109.81609086,
      "curr_month_visits": 1139109.81609086,
      "unique_users": 384725.729334232,
      "pages_per_visit": 4.20490892668813
    },
    {
      "global_rank": 88378,
      "category_rank": 92,
      "domain": "novogene.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 441644.142581382,
      "curr_month_visits": 441644.142581382,
      "unique_users": 98595.1450638944,
      "pages_per_visit": 4.47929263254343
    },
    {
      "global_rank": 364194,
      "category_rank": 92,
      "domain": "apm-telescopes.net",
      "category": "Science_and_Education/Business_Training",
      "avg_month_visits": 80926.1068410339,
      "curr_month_visits": 80926.1068410339,
      "unique_users": 34626.9544276283,
      "pages_per_visit": 3.88697947284653
    },
    {
      "global_rank": 46000,
      "category_rank": 92,
      "domain": "malmo.se",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 1106909.88274545,
      "curr_month_visits": 1106909.88274545,
      "unique_users": 317307.538478935,
      "pages_per_visit": 5.72488239625404
    },
    {
      "global_rank": 62571,
      "category_rank": 92,
      "domain": "autostrade.it",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 1159691.19226027,
      "curr_month_visits": 1159691.19226027,
      "unique_users": 642682.521982093,
      "pages_per_visit": 3.00543064311172
    },
    {
      "global_rank": 9982,
      "category_rank": 92,
      "domain": "weedmaps.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 6424329.31220037,
      "curr_month_visits": 6424329.31220037,
      "unique_users": 3081592.7973718,
      "pages_per_visit": 3.92120037271523
    },
    {
      "global_rank": 244429,
      "category_rank": 93,
      "domain": "ibccoaching.com.br",
      "category": "Science_and_Education/Weather",
      "avg_month_visits": 245247.549431051,
      "curr_month_visits": 245247.549431051,
      "unique_users": 180753.764313255,
      "pages_per_visit": 1.5597704084781
    },
    {
      "global_rank": 62808,
      "category_rank": 93,
      "domain": "retromap.ru",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 332974.240559837,
      "curr_month_visits": 332974.240559837,
      "unique_users": 175012.093575679,
      "pages_per_visit": 19.1593272766067
    },
    {
      "global_rank": 2284424,
      "category_rank": 93,
      "domain": "wilhelm-busch-seiten.de",
      "category": "Science_and_Education/Public_Records_and_Directories",
      "avg_month_visits": 7852.13787820765,
      "curr_month_visits": 7852.13787820765,
      "unique_users": 5059.74252169695,
      "pages_per_visit": 2.3044037601935
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