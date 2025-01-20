
import {Top_Website_Categories} from '@/lib/top_websites';
export const runtime = 'edge';
export const metadata = {
  title: 'Top sports Websites Ranking in the World, 2025',
  description: 'The top 1000 most visited entertainment websites in the World by Ahrefs organic search traffic estimates. Updated monthly. 2025',
  keywords: ['Top Websites', 'Top Websites Ranking','sports'],
  authors: [
    { name: 'hackX', url: 'https://www.xucongyong.com' }
  ]
}


export default function TopWebsite() {

  const global_rank_all = [
    {
      "global_rank": 11736,
      "category_rank": 1,
      "domain": "planetrugby.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 6380797.5254836,
      "curr_month_visits": 6380797.5254836,
      "unique_users": 2176845.55824578,
      "pages_per_visit": 2.26235365082081
    },
    {
      "global_rank": 9083,
      "category_rank": 1,
      "domain": "redbull.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 8866716.06314262,
      "curr_month_visits": 8866716.06314262,
      "unique_users": 5889895.22310288,
      "pages_per_visit": 2.15722557777132
    },
    {
      "global_rank": 7708,
      "category_rank": 1,
      "domain": "hockeydb.com",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 6170573.81315741,
      "curr_month_visits": 6170573.81315741,
      "unique_users": 1366069.97123241,
      "pages_per_visit": 4.93822894687022
    },
    {
      "global_rank": 20751,
      "category_rank": 1,
      "domain": "save-from.net",
      "category": "Sports/Volleyball",
      "avg_month_visits": 3678928.58683323,
      "curr_month_visits": 3678928.58683323,
      "unique_users": 1095891.84654887,
      "pages_per_visit": 3.65486664315922
    },
    {
      "global_rank": 1073,
      "category_rank": 1,
      "domain": "methstreams.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 41757712.0323464,
      "curr_month_visits": 41757712.0323464,
      "unique_users": 6212969.94389102,
      "pages_per_visit": 4.11147089289937
    },
    {
      "global_rank": 2793,
      "category_rank": 1,
      "domain": "komoot.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 13485808.2559013,
      "curr_month_visits": 13485808.2559013,
      "unique_users": 7062941.55672994,
      "pages_per_visit": 14.6307180040486
    },
    {
      "global_rank": 22419,
      "category_rank": 1,
      "domain": "anglers.jp",
      "category": "Sports/Fishing",
      "avg_month_visits": 2909200.42449349,
      "curr_month_visits": 2909200.42449349,
      "unique_users": 841923.909547699,
      "pages_per_visit": 3.84237070747277
    },
    {
      "global_rank": 5705,
      "category_rank": 1,
      "domain": "atptour.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 13990316.6331773,
      "curr_month_visits": 13990316.6331773,
      "unique_users": 4306215.61035059,
      "pages_per_visit": 3.14040971269133
    },
    {
      "global_rank": 24545,
      "category_rank": 1,
      "domain": "mountainproject.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 1789682.59473855,
      "curr_month_visits": 1789682.59473855,
      "unique_users": 662179.175091248,
      "pages_per_visit": 7.68443054207035
    },
    {
      "global_rank": 7998,
      "category_rank": 1,
      "domain": "boxrec.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 6449852.88356702,
      "curr_month_visits": 6449852.88356702,
      "unique_users": 2229489.60664153,
      "pages_per_visit": 5.17942996224999
    },
    {
      "global_rank": 500,
      "category_rank": 1,
      "domain": "livescore.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 95799533.6554921,
      "curr_month_visits": 95799533.6554921,
      "unique_users": 11412483.1575206,
      "pages_per_visit": 4.60875251148761
    },
    {
      "global_rank": 4272,
      "category_rank": 1,
      "domain": "hoka.com",
      "category": "Sports/Running",
      "avg_month_visits": 11562750.8882296,
      "curr_month_visits": 11562750.8882296,
      "unique_users": 5611910.49032116,
      "pages_per_visit": 4.09009030357366
    },
    {
      "global_rank": 702,
      "category_rank": 1,
      "domain": "nba.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 44777446.1299432,
      "curr_month_visits": 44777446.1299432,
      "unique_users": 15555466.3198991,
      "pages_per_visit": 3.20829823046129
    },
    {
      "global_rank": 2977,
      "category_rank": 1,
      "domain": "xzqpz.com",
      "category": "Sports/Golf",
      "avg_month_visits": 20612682.0526473,
      "curr_month_visits": 20612682.0526473,
      "unique_users": 12495969.2717052,
      "pages_per_visit": 1.64371685800488
    },
    {
      "global_rank": 3098,
      "category_rank": 1,
      "domain": "palmettostatearmory.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 12884363.7594418,
      "curr_month_visits": 12884363.7594418,
      "unique_users": 3420056.0217445,
      "pages_per_visit": 6.25384999747795
    },
    {
      "global_rank": 11308,
      "category_rank": 1,
      "domain": "surfline.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 6958250.84955499,
      "curr_month_visits": 6958250.84955499,
      "unique_users": 1509115.27327495,
      "pages_per_visit": 3.58626360723578
    },
    {
      "global_rank": 3357,
      "category_rank": 2,
      "domain": "gunbroker.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 12756203.622211,
      "curr_month_visits": 12756203.622211,
      "unique_users": 3137480.41993836,
      "pages_per_visit": 7.77256303033893
    },
    {
      "global_rank": 4572,
      "category_rank": 2,
      "domain": "golfdigest.co.jp",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 10773129.3543677,
      "curr_month_visits": 10773129.3543677,
      "unique_users": 2685637.44121415,
      "pages_per_visit": 5.29085728447024
    },
    {
      "global_rank": 3908,
      "category_rank": 2,
      "domain": "bestsolaris.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 14922768.9530554,
      "curr_month_visits": 14922768.9530554,
      "unique_users": 4849672.46281638,
      "pages_per_visit": 2.96430883437236
    },
    {
      "global_rank": 25647,
      "category_rank": 2,
      "domain": "ukclimbing.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 2128091.47672626,
      "curr_month_visits": 2128091.47672626,
      "unique_users": 642087.144555694,
      "pages_per_visit": 5.89588614106649
    },
    {
      "global_rank": 61612,
      "category_rank": 2,
      "domain": "ufanews.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 808520.700708963,
      "curr_month_visits": 808520.700708963,
      "unique_users": 444060.859179135,
      "pages_per_visit": 1.7699356980765
    },
    {
      "global_rank": 5542,
      "category_rank": 2,
      "domain": "pro-football-reference.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 11786871.912932,
      "curr_month_visits": 11786871.912932,
      "unique_users": 4373458.58182844,
      "pages_per_visit": 4.0128297822795
    },
    {
      "global_rank": 8143,
      "category_rank": 2,
      "domain": "fssp.gov.ru",
      "category": "Sports/Soccer",
      "avg_month_visits": 8861230.10603446,
      "curr_month_visits": 8861230.10603446,
      "unique_users": 3493114.57531931,
      "pages_per_visit": 2.76962907192898
    },
    {
      "global_rank": 3760,
      "category_rank": 2,
      "domain": "basketball-reference.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 11344531.1142228,
      "curr_month_visits": 11344531.1142228,
      "unique_users": 3641576.19669246,
      "pages_per_visit": 4.32236687800902
    },
    {
      "global_rank": 743,
      "category_rank": 2,
      "domain": "goal.com",
      "category": "Sports/Sports",
      "avg_month_visits": 84385516.0965509,
      "curr_month_visits": 84385516.0965509,
      "unique_users": 32915020.8920143,
      "pages_per_visit": 2.38283520295099
    },
    {
      "global_rank": 12667,
      "category_rank": 2,
      "domain": "specialized.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 4528098.00898097,
      "curr_month_visits": 4528098.00898097,
      "unique_users": 2051957.95049353,
      "pages_per_visit": 4.64725479373091
    },
    {
      "global_rank": 18153,
      "category_rank": 2,
      "domain": "secondsout.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 4484500.92265927,
      "curr_month_visits": 4484500.92265927,
      "unique_users": 2017107.51031513,
      "pages_per_visit": 1.43016065717003
    },
    {
      "global_rank": 24529,
      "category_rank": 2,
      "domain": "surf-forecast.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 4056876.51667385,
      "curr_month_visits": 4056876.51667385,
      "unique_users": 1128992.10265096,
      "pages_per_visit": 2.16512706189713
    },
    {
      "global_rank": 22975,
      "category_rank": 2,
      "domain": "volley.ru",
      "category": "Sports/Volleyball",
      "avg_month_visits": 2897917.26456383,
      "curr_month_visits": 2897917.26456383,
      "unique_users": 475487.533147908,
      "pages_per_visit": 4.10400863530966
    },
    {
      "global_rank": 12043,
      "category_rank": 2,
      "domain": "mvp.fan",
      "category": "Sports/Soccer",
      "avg_month_visits": 2537994.9427467,
      "curr_month_visits": 2537994.9427467,
      "unique_users": 965772.107205953,
      "pages_per_visit": 2.00438687525921
    },
    {
      "global_rank": 26720,
      "category_rank": 2,
      "domain": "tsurihack.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 3012436.62548083,
      "curr_month_visits": 3012436.62548083,
      "unique_users": 1001914.88704613,
      "pages_per_visit": 2.08509050180665
    },
    {
      "global_rank": 1046,
      "category_rank": 2,
      "domain": "streameast.gd",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 47936349.7827752,
      "curr_month_visits": 47936349.7827752,
      "unique_users": 11584678.5117295,
      "pages_per_visit": 3.09284298971942
    },
    {
      "global_rank": 33394,
      "category_rank": 3,
      "domain": "loto.lt",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 1577165.22706772,
      "curr_month_visits": 1577165.22706772,
      "unique_users": 308330.606843985,
      "pages_per_visit": 4.9871089488102
    },
    {
      "global_rank": 30246,
      "category_rank": 3,
      "domain": "vringe.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 2719080.45009078,
      "curr_month_visits": 2719080.45009078,
      "unique_users": 645959.844610776,
      "pages_per_visit": 2.20899488231252
    },
    {
      "global_rank": 13634,
      "category_rank": 3,
      "domain": "live-tennis.eu",
      "category": "Sports/Tennis",
      "avg_month_visits": 8001854.73256141,
      "curr_month_visits": 8001854.73256141,
      "unique_users": 1973278.12449382,
      "pages_per_visit": 1.99434170659961
    },
    {
      "global_rank": 37099,
      "category_rank": 3,
      "domain": "tackleberry.co.jp",
      "category": "Sports/Running",
      "avg_month_visits": 969463.420865033,
      "curr_month_visits": 969463.420865033,
      "unique_users": 266059.449707885,
      "pages_per_visit": 8.30590138095038
    },
    {
      "global_rank": 804,
      "category_rank": 3,
      "domain": "gazzetta.it",
      "category": "Sports/Soccer",
      "avg_month_visits": 84390319.9924058,
      "curr_month_visits": 84390319.9924058,
      "unique_users": 13571879.4762762,
      "pages_per_visit": 3.04622917744355
    },
    {
      "global_rank": 4172,
      "category_rank": 3,
      "domain": "strims.in",
      "category": "Sports/Rugby",
      "avg_month_visits": 14450299.9421544,
      "curr_month_visits": 14450299.9421544,
      "unique_users": 2376724.88387849,
      "pages_per_visit": 4.41535405237455
    },
    {
      "global_rank": 2646,
      "category_rank": 3,
      "domain": "fantacalcio.it",
      "category": "Sports/Fishing",
      "avg_month_visits": 46334195.1134806,
      "curr_month_visits": 46334195.1134806,
      "unique_users": 4053134.65186693,
      "pages_per_visit": 2.44205228710084
    },
    {
      "global_rank": 14038,
      "category_rank": 3,
      "domain": "canyon.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 4636884.94475157,
      "curr_month_visits": 4636884.94475157,
      "unique_users": 1916215.47306355,
      "pages_per_visit": 5.06090112073458
    },
    {
      "global_rank": 18383,
      "category_rank": 3,
      "domain": "rugbypass.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 4041549.36067487,
      "curr_month_visits": 4041549.36067487,
      "unique_users": 1523275.58104421,
      "pages_per_visit": 2.14509899939969
    },
    {
      "global_rank": 4695,
      "category_rank": 3,
      "domain": "sportsmans.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 9088496.07686405,
      "curr_month_visits": 9088496.07686405,
      "unique_users": 3946031.38463715,
      "pages_per_visit": 4.9496751282443
    },
    {
      "global_rank": 6437,
      "category_rank": 3,
      "domain": "lpga.or.jp",
      "category": "Sports/Golf",
      "avg_month_visits": 11642218.8513812,
      "curr_month_visits": 11642218.8513812,
      "unique_users": 2145165.44117649,
      "pages_per_visit": 3.17454880883187
    },
    {
      "global_rank": 85701,
      "category_rank": 3,
      "domain": "spard.dk",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 415256.916920551,
      "curr_month_visits": 415256.916920551,
      "unique_users": 138124.634092505,
      "pages_per_visit": 7.73184128104377
    },
    {
      "global_rank": 4847,
      "category_rank": 3,
      "domain": "1stream.eu",
      "category": "Sports/Basketball",
      "avg_month_visits": 14065854.5445473,
      "curr_month_visits": 14065854.5445473,
      "unique_users": 5432932.55039937,
      "pages_per_visit": 2.40046573093604
    },
    {
      "global_rank": 8153,
      "category_rank": 3,
      "domain": "runsignup.com",
      "category": "Sports/Sports",
      "avg_month_visits": 6787757.97032792,
      "curr_month_visits": 6787757.97032792,
      "unique_users": 3224087.28780068,
      "pages_per_visit": 4.3714625772048
    },
    {
      "global_rank": 6482,
      "category_rank": 3,
      "domain": "rugbyrama.fr",
      "category": "Sports/American_Football",
      "avg_month_visits": 12158988.0981635,
      "curr_month_visits": 12158988.0981635,
      "unique_users": 1857055.06560759,
      "pages_per_visit": 2.41245428534597
    },
    {
      "global_rank": 12345,
      "category_rank": 4,
      "domain": "alba.co.jp",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 5167447.48157318,
      "curr_month_visits": 5167447.48157318,
      "unique_users": 1973285.46927892,
      "pages_per_visit": 3.2765506778456
    },
    {
      "global_rank": 475,
      "category_rank": 4,
      "domain": "windy.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 61622932.423886,
      "curr_month_visits": 61622932.423886,
      "unique_users": 11760719.7209602,
      "pages_per_visit": 14.2178151721892
    },
    {
      "global_rank": 111451,
      "category_rank": 4,
      "domain": "warball.ru",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 236434.940287186,
      "curr_month_visits": 236434.940287186,
      "unique_users": 166102.972987583,
      "pages_per_visit": 1.98456565951739
    },
    {
      "global_rank": 7350,
      "category_rank": 4,
      "domain": "midwayusa.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 7057331.54446407,
      "curr_month_visits": 7057331.54446407,
      "unique_users": 2469343.20475258,
      "pages_per_visit": 5.18795702091695
    },
    {
      "global_rank": 5055,
      "category_rank": 4,
      "domain": "titan007.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 8815666.3537154,
      "curr_month_visits": 8815666.3537154,
      "unique_users": 710937.903872092,
      "pages_per_visit": 16.4660441809486
    },
    {
      "global_rank": 51015,
      "category_rank": 4,
      "domain": "thecrag.com",
      "category": "Sports/Golf",
      "avg_month_visits": 785939.624203238,
      "curr_month_visits": 785939.624203238,
      "unique_users": 322119.514158452,
      "pages_per_visit": 8.23595118418232
    },
    {
      "global_rank": 5214,
      "category_rank": 4,
      "domain": "crackstreams.ws",
      "category": "Sports/Rugby",
      "avg_month_visits": 11775644.4226498,
      "curr_month_visits": 11775644.4226498,
      "unique_users": 3367211.85020995,
      "pages_per_visit": 2.63150350280336
    },
    {
      "global_rank": 51585,
      "category_rank": 4,
      "domain": "tsurinews.jp",
      "category": "Sports/Golf",
      "avg_month_visits": 1626929.17430775,
      "curr_month_visits": 1626929.17430775,
      "unique_users": 693896.319598477,
      "pages_per_visit": 1.77407305173108
    },
    {
      "global_rank": 19581,
      "category_rank": 4,
      "domain": "wtatennis.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 4218356.49029368,
      "curr_month_visits": 4218356.49029368,
      "unique_users": 1598722.2416874,
      "pages_per_visit": 3.00911640955296
    },
    {
      "global_rank": 36823,
      "category_rank": 4,
      "domain": "allboxing.ru",
      "category": "Sports/Climbing",
      "avg_month_visits": 2466646.69748535,
      "curr_month_visits": 2466646.69748535,
      "unique_users": 414680.226619579,
      "pages_per_visit": 2.15028813654966
    },
    {
      "global_rank": 38568,
      "category_rank": 4,
      "domain": "snap.app",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 1840983.10312626,
      "curr_month_visits": 1840983.10312626,
      "unique_users": 658791.920096713,
      "pages_per_visit": 3.45034577946015
    },
    {
      "global_rank": 24986,
      "category_rank": 4,
      "domain": "ffr.fr",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 1983778.60068178,
      "curr_month_visits": 1983778.60068178,
      "unique_users": 694309.347240716,
      "pages_per_visit": 4.7475702704379
    },
    {
      "global_rank": 2684,
      "category_rank": 4,
      "domain": "fantasypros.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 30211693.8114272,
      "curr_month_visits": 30211693.8114272,
      "unique_users": 7063266.17912036,
      "pages_per_visit": 4.0536289941433
    },
    {
      "global_rank": 8336,
      "category_rank": 4,
      "domain": "runnersworld.com",
      "category": "Sports/Running",
      "avg_month_visits": 10628402.944145,
      "curr_month_visits": 10628402.944145,
      "unique_users": 6616912.30342162,
      "pages_per_visit": 1.68620031195332
    },
    {
      "global_rank": 7344,
      "category_rank": 4,
      "domain": "thecrackstreams.to",
      "category": "Sports/Climbing",
      "avg_month_visits": 5181256.63921207,
      "curr_month_visits": 5181256.63921207,
      "unique_users": 2077804.8938353,
      "pages_per_visit": 2.5562084958648
    },
    {
      "global_rank": 14189,
      "category_rank": 4,
      "domain": "trekbikes.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 4865702.40687349,
      "curr_month_visits": 4865702.40687349,
      "unique_users": 2385007.61863965,
      "pages_per_visit": 3.9622570835967
    },
    {
      "global_rank": 2342,
      "category_rank": 5,
      "domain": "cuny.edu",
      "category": "Sports",
      "avg_month_visits": 19762706.3520631,
      "curr_month_visits": 19762706.3520631,
      "unique_users": 2528707.00087994,
      "pages_per_visit": 8.98342384137291
    },
    {
      "global_rank": 6848,
      "category_rank": 5,
      "domain": "pirlotvonline.pl",
      "category": "Sports/Boxing",
      "avg_month_visits": 12469414.1005615,
      "curr_month_visits": 12469414.1005615,
      "unique_users": 4799675.9465643,
      "pages_per_visit": 2.17251563406639
    },
    {
      "global_rank": 11957,
      "category_rank": 5,
      "domain": "runrepeat.com",
      "category": "Sports/Sports",
      "avg_month_visits": 5453085.80187355,
      "curr_month_visits": 5453085.80187355,
      "unique_users": 3029118.48799483,
      "pages_per_visit": 3.07424781344668
    },
    {
      "global_rank": 5405,
      "category_rank": 5,
      "domain": "limetorrents.lol",
      "category": "Sports/Running",
      "avg_month_visits": 10439055.8878658,
      "curr_month_visits": 10439055.8878658,
      "unique_users": 1691183.79078661,
      "pages_per_visit": 5.76735028753514
    },
    {
      "global_rank": 8557,
      "category_rank": 5,
      "domain": "newsnationnow.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 9902885.99175759,
      "curr_month_visits": 9902885.99175759,
      "unique_users": 6732150.44001604,
      "pages_per_visit": 1.62089675356838
    },
    {
      "global_rank": 6598,
      "category_rank": 5,
      "domain": "mlbtraderumors.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 11760888.4411126,
      "curr_month_visits": 11760888.4411126,
      "unique_users": 1490934.01828651,
      "pages_per_visit": 2.27096726075048
    },
    {
      "global_rank": 25225,
      "category_rank": 5,
      "domain": "blog-rct.com",
      "category": "Sports/Running",
      "avg_month_visits": 3218953.09211589,
      "curr_month_visits": 3218953.09211589,
      "unique_users": 390947.78425843,
      "pages_per_visit": 3.22733218417946
    },
    {
      "global_rank": 3275,
      "category_rank": 5,
      "domain": "8ballpool.com",
      "category": "Sports/Golf",
      "avg_month_visits": 19674091.6643021,
      "curr_month_visits": 19674091.6643021,
      "unique_users": 5119173.16774084,
      "pages_per_visit": 2.38539478373661
    },
    {
      "global_rank": 54859,
      "category_rank": 5,
      "domain": "luremaga.jp",
      "category": "Sports/Golf",
      "avg_month_visits": 1509367.29589359,
      "curr_month_visits": 1509367.29589359,
      "unique_users": 742075.648188629,
      "pages_per_visit": 1.79863515439117
    },
    {
      "global_rank": 168567,
      "category_rank": 5,
      "domain": "220triathlon.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 388055.561593073,
      "curr_month_visits": 388055.561593073,
      "unique_users": 225606.326246685,
      "pages_per_visit": 1.81326229219097
    },
    {
      "global_rank": 38878,
      "category_rank": 5,
      "domain": "boxingscene.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 2344249.91560126,
      "curr_month_visits": 2344249.91560126,
      "unique_users": 707454.245800415,
      "pages_per_visit": 1.99380564365505
    },
    {
      "global_rank": 53312,
      "category_rank": 5,
      "domain": "joursdegloire.fr",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 844752.225321353,
      "curr_month_visits": 844752.225321353,
      "unique_users": 580683.875861638,
      "pages_per_visit": 3.51992233020494
    },
    {
      "global_rank": 13699,
      "category_rank": 5,
      "domain": "mizuno.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 3792358.57417984,
      "curr_month_visits": 3792358.57417984,
      "unique_users": 2083405.03711762,
      "pages_per_visit": 4.67304517970293
    },
    {
      "global_rank": 923,
      "category_rank": 5,
      "domain": "librefutbol.su",
      "category": "Sports/Volleyball",
      "avg_month_visits": 59358158.7942831,
      "curr_month_visits": 59358158.7942831,
      "unique_users": 12385594.3688307,
      "pages_per_visit": 3.5874950574322
    },
    {
      "global_rank": 14639,
      "category_rank": 5,
      "domain": "pinkbike.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 5370384.22570157,
      "curr_month_visits": 5370384.22570157,
      "unique_users": 1233833.10297699,
      "pages_per_visit": 3.920393229632
    },
    {
      "global_rank": 10187,
      "category_rank": 5,
      "domain": "ar15.com",
      "category": "Sports/Running",
      "avg_month_visits": 4906210.64612332,
      "curr_month_visits": 4906210.64612332,
      "unique_users": 1066188.95431643,
      "pages_per_visit": 7.35755310542352
    },
    {
      "global_rank": 2598,
      "category_rank": 6,
      "domain": "utoronto.ca",
      "category": "Sports",
      "avg_month_visits": 20880934.2208631,
      "curr_month_visits": 20880934.2208631,
      "unique_users": 2980816.40599715,
      "pages_per_visit": 7.43916936470047
    },
    {
      "global_rank": 6428,
      "category_rank": 6,
      "domain": "bloodyelbow.com",
      "category": "Sports/Sports",
      "avg_month_visits": 9395436.58604337,
      "curr_month_visits": 9395436.58604337,
      "unique_users": 3177974.8993989,
      "pages_per_visit": 1.7629813967031
    },
    {
      "global_rank": 29296,
      "category_rank": 6,
      "domain": "rugby365.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 2512825.63068111,
      "curr_month_visits": 2512825.63068111,
      "unique_users": 553600.216371506,
      "pages_per_visit": 2.25587608813253
    },
    {
      "global_rank": 992,
      "category_rank": 6,
      "domain": "kooora.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 66941658.0239651,
      "curr_month_visits": 66941658.0239651,
      "unique_users": 7474339.88321731,
      "pages_per_visit": 3.17176177155765
    },
    {
      "global_rank": 7252,
      "category_rank": 6,
      "domain": "npb.jp",
      "category": "Sports/Basketball",
      "avg_month_visits": 14373937.4574348,
      "curr_month_visits": 14373937.4574348,
      "unique_users": 6501364.82045526,
      "pages_per_visit": 2.38085752920787
    },
    {
      "global_rank": 173616,
      "category_rank": 6,
      "domain": "burblesoft.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 216669.444424746,
      "curr_month_visits": 216669.444424746,
      "unique_users": 102953.383015869,
      "pages_per_visit": 4.69019732782601
    },
    {
      "global_rank": 55338,
      "category_rank": 6,
      "domain": "chowari.jp",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 1230838.36382924,
      "curr_month_visits": 1230838.36382924,
      "unique_users": 414215.871791015,
      "pages_per_visit": 3.35371908784682
    },
    {
      "global_rank": 17098,
      "category_rank": 6,
      "domain": "jgto.org",
      "category": "Sports/Sports",
      "avg_month_visits": 3636135.28043536,
      "curr_month_visits": 3636135.28043536,
      "unique_users": 849520.62760479,
      "pages_per_visit": 2.76609223532623
    },
    {
      "global_rank": 5198,
      "category_rank": 6,
      "domain": "multiversity.click",
      "category": "Sports/Soccer",
      "avg_month_visits": 7650137.66826406,
      "curr_month_visits": 7650137.66826406,
      "unique_users": 559714.108649979,
      "pages_per_visit": 13.9434289812854
    },
    {
      "global_rank": 10263,
      "category_rank": 6,
      "domain": "atozsports.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 8899303.71806264,
      "curr_month_visits": 8899303.71806264,
      "unique_users": 3934653.52551653,
      "pages_per_visit": 1.4699245419302
    },
    {
      "global_rank": 1102,
      "category_rank": 6,
      "domain": "weather.gov",
      "category": "Sports/American_Football",
      "avg_month_visits": 62364872.1194771,
      "curr_month_visits": 62364872.1194771,
      "unique_users": 9959700.5153939,
      "pages_per_visit": 2.6474465699869
    },
    {
      "global_rank": 17062,
      "category_rank": 6,
      "domain": "procyclingstats.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 7033569.12139942,
      "curr_month_visits": 7033569.12139942,
      "unique_users": 1118814.55358925,
      "pages_per_visit": 7.46360099605357
    },
    {
      "global_rank": 8432,
      "category_rank": 6,
      "domain": "yoozhibo.net",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 5930547.74598254,
      "curr_month_visits": 5930547.74598254,
      "unique_users": 1012046.18728127,
      "pages_per_visit": 2.69943139574311
    },
    {
      "global_rank": 12960,
      "category_rank": 6,
      "domain": "runnet.jp",
      "category": "Sports/Volleyball",
      "avg_month_visits": 3694484.29668973,
      "curr_month_visits": 3694484.29668973,
      "unique_users": 1249784.80322584,
      "pages_per_visit": 5.12731185574365
    },
    {
      "global_rank": 58331,
      "category_rank": 6,
      "domain": "rockgympro.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 971561.426475988,
      "curr_month_visits": 971561.426475988,
      "unique_users": 543908.762454358,
      "pages_per_visit": 3.46058283630065
    },
    {
      "global_rank": 49706,
      "category_rank": 6,
      "domain": "box-core.net",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 1038704.26111587,
      "curr_month_visits": 1038704.26111587,
      "unique_users": 449340.092787633,
      "pages_per_visit": 4.26851418788596
    },
    {
      "global_rank": 11780,
      "category_rank": 7,
      "domain": "guns.com",
      "category": "Sports/Running",
      "avg_month_visits": 4761288.86764625,
      "curr_month_visits": 4761288.86764625,
      "unique_users": 2491769.63603074,
      "pages_per_visit": 4.24968220084341
    },
    {
      "global_rank": 22330,
      "category_rank": 7,
      "domain": "wielerflits.nl",
      "category": "Sports/Golf",
      "avg_month_visits": 4469340.54815514,
      "curr_month_visits": 4469340.54815514,
      "unique_users": 1063146.43211704,
      "pages_per_visit": 3.00197181369463
    },
    {
      "global_rank": 176066,
      "category_rank": 7,
      "domain": "xcontest.org",
      "category": "Sports/Fishing",
      "avg_month_visits": 384028.220117619,
      "curr_month_visits": 384028.220117619,
      "unique_users": 111796.677267584,
      "pages_per_visit": 3.75389982394507
    },
    {
      "global_rank": 7584,
      "category_rank": 7,
      "domain": "betman.co.kr",
      "category": "Sports/Climbing",
      "avg_month_visits": 6972606.36525457,
      "curr_month_visits": 6972606.36525457,
      "unique_users": 440033.29480649,
      "pages_per_visit": 7.35031644758062
    },
    {
      "global_rank": 5265,
      "category_rank": 7,
      "domain": "thesportstak.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 12830521.8471453,
      "curr_month_visits": 12830521.8471453,
      "unique_users": 5492712.01594358,
      "pages_per_visit": 1.40706708811719
    },
    {
      "global_rank": 31423,
      "category_rank": 7,
      "domain": "ruck.co.uk",
      "category": "Sports/Tennis",
      "avg_month_visits": 2156769.56873091,
      "curr_month_visits": 2156769.56873091,
      "unique_users": 931996.75826959,
      "pages_per_visit": 1.86520759028552
    },
    {
      "global_rank": 6639,
      "category_rank": 7,
      "domain": "ufc.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 9672463.82578291,
      "curr_month_visits": 9672463.82578291,
      "unique_users": 4492354.87315499,
      "pages_per_visit": 2.94798417865679
    },
    {
      "global_rank": 1181,
      "category_rank": 7,
      "domain": "ilmeteo.it",
      "category": "Sports/American_Football",
      "avg_month_visits": 64349590.7526324,
      "curr_month_visits": 64349590.7526324,
      "unique_users": 13259045.9743083,
      "pages_per_visit": 3.07012689394246
    },
    {
      "global_rank": 1025,
      "category_rank": 7,
      "domain": "kicker.de",
      "category": "Sports/Tennis",
      "avg_month_visits": 60221306.2522433,
      "curr_month_visits": 60221306.2522433,
      "unique_users": 7440734.805918,
      "pages_per_visit": 3.80768534765636
    },
    {
      "global_rank": 9562,
      "category_rank": 7,
      "domain": "markkystreams.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 6280081.46704352,
      "curr_month_visits": 6280081.46704352,
      "unique_users": 2443498.11421015,
      "pages_per_visit": 2.70803137077002
    },
    {
      "global_rank": 2878,
      "category_rank": 7,
      "domain": "commonapp.org",
      "category": "Sports/Boxing",
      "avg_month_visits": 14881502.8869157,
      "curr_month_visits": 14881502.8869157,
      "unique_users": 2251474.84159854,
      "pages_per_visit": 11.1690175770608
    },
    {
      "global_rank": 10417,
      "category_rank": 7,
      "domain": "nflbite.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 8773874.61604233,
      "curr_month_visits": 8773874.61604233,
      "unique_users": 2243491.28183172,
      "pages_per_visit": 2.52775774412376
    },
    {
      "global_rank": 17343,
      "category_rank": 7,
      "domain": "pgatour.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 6529606.56889148,
      "curr_month_visits": 6529606.56889148,
      "unique_users": 1921462.04502661,
      "pages_per_visit": 2.43646688433915
    },
    {
      "global_rank": 554,
      "category_rank": 7,
      "domain": "hupu.com",
      "category": "Sports/Golf",
      "avg_month_visits": 65810843.9606565,
      "curr_month_visits": 65810843.9606565,
      "unique_users": 5910411.36284788,
      "pages_per_visit": 9.71242795713713
    },
    {
      "global_rank": 50157,
      "category_rank": 7,
      "domain": "boxingnews24.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 1941427.3859699,
      "curr_month_visits": 1941427.3859699,
      "unique_users": 508779.698583717,
      "pages_per_visit": 1.95494766615096
    },
    {
      "global_rank": 57078,
      "category_rank": 7,
      "domain": "stripersonline.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 843465.193942545,
      "curr_month_visits": 843465.193942545,
      "unique_users": 177530.594668082,
      "pages_per_visit": 7.76328704602577
    },
    {
      "global_rank": 18226,
      "category_rank": 7,
      "domain": "raceroster.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 3036390.24712454,
      "curr_month_visits": 3036390.24712454,
      "unique_users": 1634783.11568867,
      "pages_per_visit": 3.57128949693071
    },
    {
      "global_rank": 60170,
      "category_rank": 7,
      "domain": "grinnellplans.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 1026652.63061761,
      "curr_month_visits": 1026652.63061761,
      "unique_users": 22432.2117773283,
      "pages_per_visit": 12.3092109152326
    },
    {
      "global_rank": 60563,
      "category_rank": 8,
      "domain": "boxingstream.ai",
      "category": "Sports/Golf",
      "avg_month_visits": 727522.575444053,
      "curr_month_visits": 727522.575444053,
      "unique_users": 349896.033599865,
      "pages_per_visit": 2.17046291128506
    },
    {
      "global_rank": 9549,
      "category_rank": 8,
      "domain": "lions-matome.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 9461327.9826272,
      "curr_month_visits": 9461327.9826272,
      "unique_users": 922754.128816508,
      "pages_per_visit": 3.6947211749726
    },
    {
      "global_rank": 13874,
      "category_rank": 8,
      "domain": "bladehq.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 3595886.52243374,
      "curr_month_visits": 3595886.52243374,
      "unique_users": 945709.402118234,
      "pages_per_visit": 5.71184796364472
    },
    {
      "global_rank": 12502,
      "category_rank": 8,
      "domain": "football.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 3913595.10332999,
      "curr_month_visits": 3913595.10332999,
      "unique_users": 263696.794300648,
      "pages_per_visit": 21.6673421708717
    },
    {
      "global_rank": 9219,
      "category_rank": 8,
      "domain": "tapology.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 5930989.41846608,
      "curr_month_visits": 5930989.41846608,
      "unique_users": 2265075.08975455,
      "pages_per_visit": 4.89444702284318
    },
    {
      "global_rank": 5649,
      "category_rank": 8,
      "domain": "sleeper.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 13777839.2218583,
      "curr_month_visits": 13777839.2218583,
      "unique_users": 1622423.36117179,
      "pages_per_visit": 7.23075008926694
    },
    {
      "global_rank": 1223,
      "category_rank": 8,
      "domain": "wunderground.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 57542214.5150265,
      "curr_month_visits": 57542214.5150265,
      "unique_users": 7669839.21244641,
      "pages_per_visit": 2.50922700520424
    },
    {
      "global_rank": 35612,
      "category_rank": 8,
      "domain": "sarugbymag.co.za",
      "category": "Sports/Sports",
      "avg_month_visits": 2481855.50023914,
      "curr_month_visits": 2481855.50023914,
      "unique_users": 633302.267272861,
      "pages_per_visit": 2.040699047942
    },
    {
      "global_rank": 25356,
      "category_rank": 8,
      "domain": "cyclingnews.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 4610438.50138155,
      "curr_month_visits": 4610438.50138155,
      "unique_users": 1281988.38619296,
      "pages_per_visit": 2.62573347921175
    },
    {
      "global_rank": 60221,
      "category_rank": 8,
      "domain": "mountain-forecast.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 1560201.63989498,
      "curr_month_visits": 1560201.63989498,
      "unique_users": 478646.020554856,
      "pages_per_visit": 2.03508354168259
    },
    {
      "global_rank": 61608,
      "category_rank": 8,
      "domain": "fishingmax.co.jp",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 1129417.84647402,
      "curr_month_visits": 1129417.84647402,
      "unique_users": 251171.626105138,
      "pages_per_visit": 2.53608771413143
    },
    {
      "global_rank": 192385,
      "category_rank": 8,
      "domain": "burnair.cloud",
      "category": "Sports/Volleyball",
      "avg_month_visits": 105597.532283724,
      "curr_month_visits": 105597.532283724,
      "unique_users": 21132.4071860908,
      "pages_per_visit": 17.2198150100729
    },
    {
      "global_rank": 1086,
      "category_rank": 8,
      "domain": "premierleague.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 55736558.1082968,
      "curr_month_visits": 55736558.1082968,
      "unique_users": 8734447.02611173,
      "pages_per_visit": 4.60006576639675
    },
    {
      "global_rank": 9892,
      "category_rank": 8,
      "domain": "espn.com.au",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 6737596.2209639,
      "curr_month_visits": 6737596.2209639,
      "unique_users": 1386609.19332867,
      "pages_per_visit": 3.19100260663047
    },
    {
      "global_rank": 64417,
      "category_rank": 9,
      "domain": "chassepassion.net",
      "category": "Sports/Rugby",
      "avg_month_visits": 1011038.46290954,
      "curr_month_visits": 1011038.46290954,
      "unique_users": 628294.025409421,
      "pages_per_visit": 1.83622452799166
    },
    {
      "global_rank": 3051,
      "category_rank": 9,
      "domain": "stanford.edu",
      "category": "Sports",
      "avg_month_visits": 18872342.6011995,
      "curr_month_visits": 18872342.6011995,
      "unique_users": 7672228.11016978,
      "pages_per_visit": 4.123805057836
    },
    {
      "global_rank": 14669,
      "category_rank": 9,
      "domain": "afl.com.au",
      "category": "Sports/Baseball",
      "avg_month_visits": 9484193.31830432,
      "curr_month_visits": 9484193.31830432,
      "unique_users": 1630986.81875397,
      "pages_per_visit": 3.26034143253744
    },
    {
      "global_rank": 1317,
      "category_rank": 9,
      "domain": "bom.gov.au",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 33956414.5608946,
      "curr_month_visits": 33956414.5608946,
      "unique_users": 5617953.58297987,
      "pages_per_visit": 4.35450736390293
    },
    {
      "global_rank": 11181,
      "category_rank": 9,
      "domain": "japan-baseball.jp",
      "category": "Sports/Soccer",
      "avg_month_visits": 3329353.97030152,
      "curr_month_visits": 3329353.97030152,
      "unique_users": 1983172.56014194,
      "pages_per_visit": 2.8920778453256
    },
    {
      "global_rank": 237397,
      "category_rank": 9,
      "domain": "ifsc-climbing.org",
      "category": "Sports/Golf",
      "avg_month_visits": 367158.572732278,
      "curr_month_visits": 367158.572732278,
      "unique_users": 156724.420526038,
      "pages_per_visit": 3.58498530490421
    },
    {
      "global_rank": 611,
      "category_rank": 9,
      "domain": "nikkansports.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 97402831.7423508,
      "curr_month_visits": 97402831.7423508,
      "unique_users": 32125277.1845654,
      "pages_per_visit": 2.75662814075564
    },
    {
      "global_rank": 6634,
      "category_rank": 9,
      "domain": "statmuse.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 8207995.99674795,
      "curr_month_visits": 8207995.99674795,
      "unique_users": 4817370.4666438,
      "pages_per_visit": 2.91498863779077
    },
    {
      "global_rank": 67672,
      "category_rank": 9,
      "domain": "camptocamp.org",
      "category": "Sports/Golf",
      "avg_month_visits": 773607.80981361,
      "curr_month_visits": 773607.80981361,
      "unique_users": 236041.228777273,
      "pages_per_visit": 5.50133513118147
    },
    {
      "global_rank": 20551,
      "category_rank": 9,
      "domain": "foreupsoftware.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 3811158.74987096,
      "curr_month_visits": 3811158.74987096,
      "unique_users": 1197986.87152616,
      "pages_per_visit": 6.46260066685935
    },
    {
      "global_rank": 25748,
      "category_rank": 9,
      "domain": "buycycle.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 2283732.34603925,
      "curr_month_visits": 2283732.34603925,
      "unique_users": 888016.649993965,
      "pages_per_visit": 4.95106654872064
    },
    {
      "global_rank": 60756,
      "category_rank": 9,
      "domain": "mmastreams.me",
      "category": "Sports/Golf",
      "avg_month_visits": 751049.760638996,
      "curr_month_visits": 751049.760638996,
      "unique_users": 310059.496386539,
      "pages_per_visit": 3.23125773841968
    },
    {
      "global_rank": 22591,
      "category_rank": 9,
      "domain": "letsrun.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 3775656.64325349,
      "curr_month_visits": 3775656.64325349,
      "unique_users": 1342060.50708074,
      "pages_per_visit": 3.25818360527204
    },
    {
      "global_rank": 36757,
      "category_rank": 9,
      "domain": "zerotackle.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 2033889.97789672,
      "curr_month_visits": 2033889.97789672,
      "unique_users": 480082.723716766,
      "pages_per_visit": 2.24994818135018
    },
    {
      "global_rank": 16540,
      "category_rank": 9,
      "domain": "gun.deals",
      "category": "Sports/Sports",
      "avg_month_visits": 3127023.920666,
      "curr_month_visits": 3127023.920666,
      "unique_users": 892403.009780241,
      "pages_per_visit": 3.85495112945978
    },
    {
      "global_rank": 9906,
      "category_rank": 9,
      "domain": "sherdog.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 6409822.57845136,
      "curr_month_visits": 6409822.57845136,
      "unique_users": 1821698.60764969,
      "pages_per_visit": 4.26006771799957
    },
    {
      "global_rank": 7754,
      "category_rank": 9,
      "domain": "1lib.sk",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 3863899.02816876,
      "curr_month_visits": 3863899.02816876,
      "unique_users": 911815.879249865,
      "pages_per_visit": 8.98772835845746
    },
    {
      "global_rank": 10195,
      "category_rank": 10,
      "domain": "mmafighting.com",
      "category": "Sports/Sports",
      "avg_month_visits": 8633815.57388421,
      "curr_month_visits": 8633815.57388421,
      "unique_users": 2693843.47318785,
      "pages_per_visit": 2.054115700885
    },
    {
      "global_rank": 264179,
      "category_rank": 10,
      "domain": "redbullshopus.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 112321.140557264,
      "curr_month_visits": 112321.140557264,
      "unique_users": 67659.360621651,
      "pages_per_visit": 2.68142739457644
    },
    {
      "global_rank": 11521,
      "category_rank": 10,
      "domain": "methstreams.me",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 5875559.14672034,
      "curr_month_visits": 5875559.14672034,
      "unique_users": 2633550.33996257,
      "pages_per_visit": 2.32321788712738
    },
    {
      "global_rank": 11297,
      "category_rank": 10,
      "domain": "mlbshop.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 4574060.37263206,
      "curr_month_visits": 4574060.37263206,
      "unique_users": 2316633.24179351,
      "pages_per_visit": 4.90338161870855
    },
    {
      "global_rank": 68443,
      "category_rank": 10,
      "domain": "tides4fishing.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 1082063.10204625,
      "curr_month_visits": 1082063.10204625,
      "unique_users": 342352.905246663,
      "pages_per_visit": 2.0610180637015
    },
    {
      "global_rank": 26622,
      "category_rank": 10,
      "domain": "livetennis.it",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 4160430.55868343,
      "curr_month_visits": 4160430.55868343,
      "unique_users": 431251.503349085,
      "pages_per_visit": 2.49602174971173
    },
    {
      "global_rank": 61812,
      "category_rank": 10,
      "domain": "dubz.co",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 1403696.29800938,
      "curr_month_visits": 1403696.29800938,
      "unique_users": 747029.058289241,
      "pages_per_visit": 1.96827671164827
    },
    {
      "global_rank": 21316,
      "category_rank": 10,
      "domain": "europeantour.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 4540135.68655891,
      "curr_month_visits": 4540135.68655891,
      "unique_users": 915999.201078465,
      "pages_per_visit": 3.13468489260426
    },
    {
      "global_rank": 17277,
      "category_rank": 10,
      "domain": "brownells.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 2606951.92967498,
      "curr_month_visits": 2606951.92967498,
      "unique_users": 1076336.10046123,
      "pages_per_visit": 4.21890538000138
    },
    {
      "global_rank": 1445,
      "category_rank": 10,
      "domain": "promiedos.com.ar",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 47229919.5621551,
      "curr_month_visits": 47229919.5621551,
      "unique_users": 3469337.36451428,
      "pages_per_visit": 3.37106531808799
    },
    {
      "global_rank": 37243,
      "category_rank": 10,
      "domain": "quinzemondial.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 2072937.76324338,
      "curr_month_visits": 2072937.76324338,
      "unique_users": 1142339.0073757,
      "pages_per_visit": 1.31631488035473
    },
    {
      "global_rank": 6862,
      "category_rank": 10,
      "domain": "rotowire.com",
      "category": "Sports/Running",
      "avg_month_visits": 8094769.38481157,
      "curr_month_visits": 8094769.38481157,
      "unique_users": 1626039.63015852,
      "pages_per_visit": 3.46779408198665
    },
    {
      "global_rank": 16445,
      "category_rank": 10,
      "domain": "globle-game.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 4674450.474847,
      "curr_month_visits": 4674450.474847,
      "unique_users": 1216602.08686301,
      "pages_per_visit": 2.07427294082363
    },
    {
      "global_rank": 26187,
      "category_rank": 10,
      "domain": "road.cc",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 3484531.35326003,
      "curr_month_visits": 3484531.35326003,
      "unique_users": 1398287.73035174,
      "pages_per_visit": 1.95015557686761
    },
    {
      "global_rank": 1376,
      "category_rank": 10,
      "domain": "3bmeteo.com",
      "category": "Sports",
      "avg_month_visits": 67735721.746421,
      "curr_month_visits": 67735721.746421,
      "unique_users": 8765236.39803129,
      "pages_per_visit": 2.63474202913656
    },
    {
      "global_rank": 3530,
      "category_rank": 10,
      "domain": "ubc.ca",
      "category": "Sports/American_Football",
      "avg_month_visits": 16958853.8263648,
      "curr_month_visits": 16958853.8263648,
      "unique_users": 2808750.82473884,
      "pages_per_visit": 7.07380051724206
    },
    {
      "global_rank": 81403,
      "category_rank": 11,
      "domain": "webvolei.com.br",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 1347144.05483082,
      "curr_month_visits": 1347144.05483082,
      "unique_users": 428702.538987886,
      "pages_per_visit": 1.44059753591197
    },
    {
      "global_rank": 41353,
      "category_rank": 11,
      "domain": "lerugbynistere.fr",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 1528545.31406668,
      "curr_month_visits": 1528545.31406668,
      "unique_users": 496708.594430572,
      "pages_per_visit": 1.87870867121182
    },
    {
      "global_rank": 63579,
      "category_rank": 11,
      "domain": "box.live",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 1029287.86339483,
      "curr_month_visits": 1029287.86339483,
      "unique_users": 512380.529274274,
      "pages_per_visit": 1.89949974731674
    },
    {
      "global_rank": 10666,
      "category_rank": 11,
      "domain": "timeedit.net",
      "category": "Sports",
      "avg_month_visits": 7308658.50914797,
      "curr_month_visits": 7308658.50914797,
      "unique_users": 957888.913248597,
      "pages_per_visit": 4.49527594334393
    },
    {
      "global_rank": 16711,
      "category_rank": 11,
      "domain": "texags.com",
      "category": "Sports/Golf",
      "avg_month_visits": 3280256.68458628,
      "curr_month_visits": 3280256.68458628,
      "unique_users": 541146.856152837,
      "pages_per_visit": 9.3222843328731
    },
    {
      "global_rank": 17466,
      "category_rank": 11,
      "domain": "primaryarms.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 2936165.22867009,
      "curr_month_visits": 2936165.22867009,
      "unique_users": 921576.221771005,
      "pages_per_visit": 4.40252945234128
    },
    {
      "global_rank": 7106,
      "category_rank": 11,
      "domain": "cricketaddictor.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 5723984.10158778,
      "curr_month_visits": 5723984.10158778,
      "unique_users": 2987733.19705517,
      "pages_per_visit": 2.02819068682455
    },
    {
      "global_rank": 23109,
      "category_rank": 11,
      "domain": "golf.com",
      "category": "Sports/Running",
      "avg_month_visits": 4073581.77175163,
      "curr_month_visits": 4073581.77175163,
      "unique_users": 1744863.15800246,
      "pages_per_visit": 1.96900391917207
    },
    {
      "global_rank": 10197,
      "category_rank": 11,
      "domain": "sumo.or.jp",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 5722907.48739655,
      "curr_month_visits": 5722907.48739655,
      "unique_users": 1736060.92790013,
      "pages_per_visit": 3.33892825724341
    },
    {
      "global_rank": 11628,
      "category_rank": 11,
      "domain": "euroleaguebasketball.net",
      "category": "Sports/Running",
      "avg_month_visits": 4238246.43014114,
      "curr_month_visits": 4238246.43014114,
      "unique_users": 1380476.97764303,
      "pages_per_visit": 4.01992415134923
    },
    {
      "global_rank": 12682,
      "category_rank": 11,
      "domain": "baystars.co.jp",
      "category": "Sports/Rugby",
      "avg_month_visits": 3596520.29765759,
      "curr_month_visits": 3596520.29765759,
      "unique_users": 981468.757569647,
      "pages_per_visit": 4.20473198740477
    },
    {
      "global_rank": 80105,
      "category_rank": 11,
      "domain": "gazzettadimodena.it",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 1415490.10163327,
      "curr_month_visits": 1415490.10163327,
      "unique_users": 289277.065054887,
      "pages_per_visit": 1.50450994856331
    },
    {
      "global_rank": 275426,
      "category_rank": 11,
      "domain": "holfuy.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 224589.340722045,
      "curr_month_visits": 224589.340722045,
      "unique_users": 61135.0296131108,
      "pages_per_visit": 2.29102216386015
    },
    {
      "global_rank": 1567,
      "category_rank": 11,
      "domain": "wetter.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 64302819.5406825,
      "curr_month_visits": 64302819.5406825,
      "unique_users": 12641327.0781902,
      "pages_per_visit": 2.25332453396904
    },
    {
      "global_rank": 17888,
      "category_rank": 12,
      "domain": "sigsauer.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 2994943.13971844,
      "curr_month_visits": 2994943.13971844,
      "unique_users": 1548120.81962297,
      "pages_per_visit": 3.74349456199635
    },
    {
      "global_rank": 27446,
      "category_rank": 12,
      "domain": "giant-bicycles.com",
      "category": "Sports/Sports",
      "avg_month_visits": 2103281.00741793,
      "curr_month_visits": 2103281.00741793,
      "unique_users": 1056951.41220107,
      "pages_per_visit": 4.87776113958117
    },
    {
      "global_rank": 8112,
      "category_rank": 12,
      "domain": "realgm.com",
      "category": "Sports/Running",
      "avg_month_visits": 7857889.45320402,
      "curr_month_visits": 7857889.45320402,
      "unique_users": 1330305.44301389,
      "pages_per_visit": 5.02153591217577
    },
    {
      "global_rank": 714,
      "category_rank": 12,
      "domain": "si.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 88612791.9050904,
      "curr_month_visits": 88612791.9050904,
      "unique_users": 35148287.7507562,
      "pages_per_visit": 1.65535645920184
    },
    {
      "global_rank": 36701,
      "category_rank": 12,
      "domain": "raceresult.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 2384239.75832049,
      "curr_month_visits": 2384239.75832049,
      "unique_users": 945690.230701173,
      "pages_per_visit": 3.43436333721561
    },
    {
      "global_rank": 212697,
      "category_rank": 12,
      "domain": "bhic.nl",
      "category": "Sports/Baseball",
      "avg_month_visits": 92563.7559867309,
      "curr_month_visits": 92563.7559867309,
      "unique_users": 38075.0762502304,
      "pages_per_visit": 9.20281761608194
    },
    {
      "global_rank": 14614,
      "category_rank": 12,
      "domain": "livejupiter2.blog.jp",
      "category": "Sports/Climbing",
      "avg_month_visits": 6252798.68081635,
      "curr_month_visits": 6252798.68081635,
      "unique_users": 1208850.10873484,
      "pages_per_visit": 2.36692677288052
    },
    {
      "global_rank": 82703,
      "category_rank": 12,
      "domain": "hikr.org",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 427273.054949659,
      "curr_month_visits": 427273.054949659,
      "unique_users": 187884.045524102,
      "pages_per_visit": 11.1500308254227
    },
    {
      "global_rank": 11241,
      "category_rank": 12,
      "domain": "cloud.timeedit.net",
      "category": "Sports",
      "avg_month_visits": 7235562.70249938,
      "curr_month_visits": 7235562.70249938,
      "unique_users": 944315.281144577,
      "pages_per_visit": 4.15411238265666
    },
    {
      "global_rank": 16750,
      "category_rank": 12,
      "domain": "bigfooty.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 3828765.15011716,
      "curr_month_visits": 3828765.15011716,
      "unique_users": 286086.467555212,
      "pages_per_visit": 11.2353893794486
    },
    {
      "global_rank": 4394,
      "category_rank": 12,
      "domain": "sci-hub.se",
      "category": "Sports/American_Football",
      "avg_month_visits": 13220890.9596017,
      "curr_month_visits": 13220890.9596017,
      "unique_users": 4663394.6171032,
      "pages_per_visit": 4.08275232275991
    },
    {
      "global_rank": 3779,
      "category_rank": 12,
      "domain": "shaalaa.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 15459948.0875225,
      "curr_month_visits": 15459948.0875225,
      "unique_users": 6120515.00648576,
      "pages_per_visit": 3.64589473588307
    },
    {
      "global_rank": 1742,
      "category_rank": 12,
      "domain": "metoffice.gov.uk",
      "category": "Sports/Climbing",
      "avg_month_visits": 40839071.2123217,
      "curr_month_visits": 40839071.2123217,
      "unique_users": 8040935.86664864,
      "pages_per_visit": 3.24836289164512
    },
    {
      "global_rank": 13203,
      "category_rank": 12,
      "domain": "parlons-basket.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 6746115.76640446,
      "curr_month_visits": 6746115.76640446,
      "unique_users": 2391998.00038469,
      "pages_per_visit": 1.53955503214302
    },
    {
      "global_rank": 70150,
      "category_rank": 12,
      "domain": "boxingforum24.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 588117.706776862,
      "curr_month_visits": 588117.706776862,
      "unique_users": 193548.376942151,
      "pages_per_visit": 6.28586966893615
    },
    {
      "global_rank": 74929,
      "category_rank": 12,
      "domain": "fishingbooker.com",
      "category": "Sports/Running",
      "avg_month_visits": 895990.84374332,
      "curr_month_visits": 895990.84374332,
      "unique_users": 579332.941445652,
      "pages_per_visit": 2.88328152797112
    },
    {
      "global_rank": 17513,
      "category_rank": 13,
      "domain": "elevenwarriors.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 4627002.34002041,
      "curr_month_visits": 4627002.34002041,
      "unique_users": 511769.749719118,
      "pages_per_visit": 3.67059998009919
    },
    {
      "global_rank": 1865,
      "category_rank": 13,
      "domain": "sinoptik.ua",
      "category": "Sports/Climbing",
      "avg_month_visits": 47557350.9636349,
      "curr_month_visits": 47557350.9636349,
      "unique_users": 5184580.76224488,
      "pages_per_visit": 1.63666213803544
    },
    {
      "global_rank": 27519,
      "category_rank": 13,
      "domain": "mtb-news.de",
      "category": "Sports/Soccer",
      "avg_month_visits": 2402144.23900036,
      "curr_month_visits": 2402144.23900036,
      "unique_users": 630025.95875552,
      "pages_per_visit": 4.2712052186443
    },
    {
      "global_rank": 9476,
      "category_rank": 13,
      "domain": "futbolfantasy.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 9262708.94931094,
      "curr_month_visits": 9262708.94931094,
      "unique_users": 864153.023010939,
      "pages_per_visit": 4.585083715639
    },
    {
      "global_rank": 42506,
      "category_rank": 13,
      "domain": "inspirehep.net",
      "category": "Sports",
      "avg_month_visits": 1266018.93652727,
      "curr_month_visits": 1266018.93652727,
      "unique_users": 379978.672949514,
      "pages_per_visit": 4.62145779244142
    },
    {
      "global_rank": 84020,
      "category_rank": 13,
      "domain": "petzl.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 579960.63377743,
      "curr_month_visits": 579960.63377743,
      "unique_users": 305474.018222611,
      "pages_per_visit": 4.08402948004429
    },
    {
      "global_rank": 81098,
      "category_rank": 13,
      "domain": "tsuritenki.jp",
      "category": "Sports/Sports",
      "avg_month_visits": 780332.149189288,
      "curr_month_visits": 780332.149189288,
      "unique_users": 214602.579618731,
      "pages_per_visit": 2.41879129434648
    },
    {
      "global_rank": 301743,
      "category_rank": 13,
      "domain": "outside.fr",
      "category": "Sports/Golf",
      "avg_month_visits": 253235.05979979,
      "curr_month_visits": 253235.05979979,
      "unique_users": 172435.459382386,
      "pages_per_visit": 1.42316723608017
    },
    {
      "global_rank": 25737,
      "category_rank": 13,
      "domain": "golfdigest.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 4191792.50248919,
      "curr_month_visits": 4191792.50248919,
      "unique_users": 1810589.13458187,
      "pages_per_visit": 1.97925151437763
    },
    {
      "global_rank": 16584,
      "category_rank": 13,
      "domain": "baseballchannel.jp",
      "category": "Sports/Fishing",
      "avg_month_visits": 4525346.4827692,
      "curr_month_visits": 4525346.4827692,
      "unique_users": 3222738.00461406,
      "pages_per_visit": 2.74995811838206
    },
    {
      "global_rank": 3820,
      "category_rank": 13,
      "domain": "cornell.edu",
      "category": "Sports/American_Football",
      "avg_month_visits": 16523688.0975301,
      "curr_month_visits": 16523688.0975301,
      "unique_users": 5873904.60197049,
      "pages_per_visit": 4.44819147677303
    },
    {
      "global_rank": 13392,
      "category_rank": 13,
      "domain": "sportsurge.to",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 4909251.40035752,
      "curr_month_visits": 4909251.40035752,
      "unique_users": 1363730.78756717,
      "pages_per_visit": 2.84798755456101
    },
    {
      "global_rank": 72423,
      "category_rank": 13,
      "domain": "boxingstream.me",
      "category": "Sports/Sports",
      "avg_month_visits": 378324.934086584,
      "curr_month_visits": 378324.934086584,
      "unique_users": 175152.719330343,
      "pages_per_visit": 3.68593125451884
    },
    {
      "global_rank": 11528,
      "category_rank": 13,
      "domain": "psytests.org",
      "category": "Sports/Rugby",
      "avg_month_visits": 2979708.9581423,
      "curr_month_visits": 2979708.9581423,
      "unique_users": 1521131.04034073,
      "pages_per_visit": 9.28932866672223
    },
    {
      "global_rank": 3994,
      "category_rank": 14,
      "domain": "usg.edu",
      "category": "Sports/Baseball",
      "avg_month_visits": 15837187.7240991,
      "curr_month_visits": 15837187.7240991,
      "unique_users": 942595.038233647,
      "pages_per_visit": 8.11554647233797
    },
    {
      "global_rank": 15725,
      "category_rank": 14,
      "domain": "playhq.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 3306078.76523676,
      "curr_month_visits": 3306078.76523676,
      "unique_users": 743292.720493904,
      "pages_per_visit": 6.76591897911495
    },
    {
      "global_rank": 1892,
      "category_rank": 14,
      "domain": "eltiempo.es",
      "category": "Sports/Boxing",
      "avg_month_visits": 48638305.6005344,
      "curr_month_visits": 48638305.6005344,
      "unique_users": 7804631.14442527,
      "pages_per_visit": 2.00535506472035
    },
    {
      "global_rank": 9486,
      "category_rank": 14,
      "domain": "myfantasyleague.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 7241483.12467606,
      "curr_month_visits": 7241483.12467606,
      "unique_users": 444379.499138375,
      "pages_per_visit": 7.72376108042304
    },
    {
      "global_rank": 25814,
      "category_rank": 14,
      "domain": "egolf.jp",
      "category": "Sports/Volleyball",
      "avg_month_visits": 2923371.49123208,
      "curr_month_visits": 2923371.49123208,
      "unique_users": 1374609.47588772,
      "pages_per_visit": 1.95230150358533
    },
    {
      "global_rank": 83513,
      "category_rank": 14,
      "domain": "bdoutdoors.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 620251.594875309,
      "curr_month_visits": 620251.594875309,
      "unique_users": 173859.896779379,
      "pages_per_visit": 5.79858883496726
    },
    {
      "global_rank": 11542,
      "category_rank": 14,
      "domain": "mrkoll.se",
      "category": "Sports/American_Football",
      "avg_month_visits": 6989094.91511099,
      "curr_month_visits": 6989094.91511099,
      "unique_users": 2582753.28985598,
      "pages_per_visit": 2.64405916001035
    },
    {
      "global_rank": 308043,
      "category_rank": 14,
      "domain": "flyspot.com",
      "category": "Sports/Sports",
      "avg_month_visits": 112098.365526635,
      "curr_month_visits": 112098.365526635,
      "unique_users": 61886.6355107859,
      "pages_per_visit": 3.31842365103354
    },
    {
      "global_rank": 31359,
      "category_rank": 14,
      "domain": "totalsportek.football",
      "category": "Sports/Golf",
      "avg_month_visits": 3976384.48874497,
      "curr_month_visits": 3976384.48874497,
      "unique_users": 1700499.93065586,
      "pages_per_visit": 2.83337175106213
    },
    {
      "global_rank": 131078,
      "category_rank": 14,
      "domain": "colombiaevaluadora.co",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 182086.270528482,
      "curr_month_visits": 182086.270528482,
      "unique_users": 42980.9270815318,
      "pages_per_visit": 6.36976287797009
    },
    {
      "global_rank": 77001,
      "category_rank": 14,
      "domain": "bokser.org",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 869572.243584948,
      "curr_month_visits": 869572.243584948,
      "unique_users": 124262.304306419,
      "pages_per_visit": 2.70225352897921
    },
    {
      "global_rank": 94874,
      "category_rank": 14,
      "domain": "climbing.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 805043.654457612,
      "curr_month_visits": 805043.654457612,
      "unique_users": 444439.214079383,
      "pages_per_visit": 1.93788052017522
    },
    {
      "global_rank": 17578,
      "category_rank": 14,
      "domain": "cougarboard.com",
      "category": "Sports/Sports",
      "avg_month_visits": 2410743.59314962,
      "curr_month_visits": 2410743.59314962,
      "unique_users": 362389.053905798,
      "pages_per_visit": 16.342462306523
    },
    {
      "global_rank": 16947,
      "category_rank": 14,
      "domain": "immaculategrid.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 4733679.83014345,
      "curr_month_visits": 4733679.83014345,
      "unique_users": 530357.184292861,
      "pages_per_visit": 3.33737980326857
    },
    {
      "global_rank": 319086,
      "category_rank": 15,
      "domain": "flyozone.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 213334.682948434,
      "curr_month_visits": 213334.682948434,
      "unique_users": 52110.831953567,
      "pages_per_visit": 3.13826067619182
    },
    {
      "global_rank": 4925,
      "category_rank": 15,
      "domain": "vio.edu.vn",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 5760658.71732856,
      "curr_month_visits": 5760658.71732856,
      "unique_users": 953894.545965342,
      "pages_per_visit": 13.3958339584759
    },
    {
      "global_rank": 795,
      "category_rank": 15,
      "domain": "nfl.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 76683643.414298,
      "curr_month_visits": 76683643.414298,
      "unique_users": 22997528.1229143,
      "pages_per_visit": 3.41468665696851
    },
    {
      "global_rank": 17604,
      "category_rank": 15,
      "domain": "profootballnetwork.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 6157644.39140374,
      "curr_month_visits": 6157644.39140374,
      "unique_users": 3621201.4435295,
      "pages_per_visit": 1.72688052822056
    },
    {
      "global_rank": 32763,
      "category_rank": 15,
      "domain": "cyclingweekly.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 2850659.13099895,
      "curr_month_visits": 2850659.13099895,
      "unique_users": 1393693.05211111,
      "pages_per_visit": 1.71769515402375
    },
    {
      "global_rank": 1900,
      "category_rank": 15,
      "domain": "wetteronline.de",
      "category": "Sports/Boxing",
      "avg_month_visits": 50645316.2306215,
      "curr_month_visits": 50645316.2306215,
      "unique_users": 6465068.4233798,
      "pages_per_visit": 3.05522820690258
    },
    {
      "global_rank": 9539,
      "category_rank": 15,
      "domain": "fancode.com",
      "category": "Sports/Sports",
      "avg_month_visits": 7453243.2475627,
      "curr_month_visits": 7453243.2475627,
      "unique_users": 3024852.70066063,
      "pages_per_visit": 3.66060218664655
    },
    {
      "global_rank": 92272,
      "category_rank": 15,
      "domain": "fullfightreplays.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 667767.21850806,
      "curr_month_visits": 667767.21850806,
      "unique_users": 282956.392478251,
      "pages_per_visit": 2.26342861075309
    },
    {
      "global_rank": 16460,
      "category_rank": 15,
      "domain": "allsportsflix.xyz",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 4983776.56167645,
      "curr_month_visits": 4983776.56167645,
      "unique_users": 3304704.02113123,
      "pages_per_visit": 1.72995692387649
    },
    {
      "global_rank": 89630,
      "category_rank": 15,
      "domain": "point-i.jp",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 632876.645630412,
      "curr_month_visits": 632876.645630412,
      "unique_users": 223705.021217685,
      "pages_per_visit": 2.70320265582567
    },
    {
      "global_rank": 4109,
      "category_rank": 15,
      "domain": "anhanguera.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 10727794.7464328,
      "curr_month_visits": 10727794.7464328,
      "unique_users": 2835505.19968177,
      "pages_per_visit": 5.68683695722475
    },
    {
      "global_rank": 356971,
      "category_rank": 15,
      "domain": "skazkaplus.ru",
      "category": "Sports/Basketball",
      "avg_month_visits": 62536.712481551,
      "curr_month_visits": 62536.712481551,
      "unique_users": 28849.9504210356,
      "pages_per_visit": 3.02061016813725
    },
    {
      "global_rank": 11620,
      "category_rank": 15,
      "domain": "cairn.info",
      "category": "Sports/Basketball",
      "avg_month_visits": 5197700.18816411,
      "curr_month_visits": 5197700.18816411,
      "unique_users": 2449298.68924774,
      "pages_per_visit": 2.82340076859885
    },
    {
      "global_rank": 18276,
      "category_rank": 15,
      "domain": "sports.ettoday.net",
      "category": "Sports/Tennis",
      "avg_month_visits": 3118936.63135637,
      "curr_month_visits": 3118936.63135637,
      "unique_users": 760375.301511236,
      "pages_per_visit": 1.80546796561774
    },
    {
      "global_rank": 11881,
      "category_rank": 16,
      "domain": "human.ua",
      "category": "Sports/Baseball",
      "avg_month_visits": 5366091.89892458,
      "curr_month_visits": 5366091.89892458,
      "unique_users": 387717.021359043,
      "pages_per_visit": 7.23357695077348
    },
    {
      "global_rank": 324401,
      "category_rank": 16,
      "domain": "paraglidingforum.com",
      "category": "Sports/Running",
      "avg_month_visits": 131161.121284219,
      "curr_month_visits": 131161.121284219,
      "unique_users": 47672.270992826,
      "pages_per_visit": 3.75228224103536
    },
    {
      "global_rank": 5122,
      "category_rank": 16,
      "domain": "cyberleninka.ru",
      "category": "Sports/American_Football",
      "avg_month_visits": 12332529.7249979,
      "curr_month_visits": 12332529.7249979,
      "unique_users": 6148993.9689602,
      "pages_per_visit": 2.64188870538058
    },
    {
      "global_rank": 2063,
      "category_rank": 16,
      "domain": "noaa.gov",
      "category": "Sports/Basketball",
      "avg_month_visits": 56356641.5314418,
      "curr_month_visits": 56356641.5314418,
      "unique_users": 12457176.0758622,
      "pages_per_visit": 3.21414571480155
    },
    {
      "global_rank": 95967,
      "category_rank": 16,
      "domain": "badlefthook.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 787787.924182933,
      "curr_month_visits": 787787.924182933,
      "unique_users": 315353.201421459,
      "pages_per_visit": 1.8526607865751
    },
    {
      "global_rank": 4215,
      "category_rank": 16,
      "domain": "asu.edu",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 13171943.469027,
      "curr_month_visits": 13171943.469027,
      "unique_users": 2899523.01382033,
      "pages_per_visit": 7.40761445158466
    },
    {
      "global_rank": 26139,
      "category_rank": 16,
      "domain": "golfwrx.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 3262264.21627685,
      "curr_month_visits": 3262264.21627685,
      "unique_users": 1152281.01822811,
      "pages_per_visit": 2.60942143060681
    },
    {
      "global_rank": 32811,
      "category_rank": 16,
      "domain": "bikeradar.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 2991352.21362173,
      "curr_month_visits": 2991352.21362173,
      "unique_users": 1520850.88908646,
      "pages_per_visit": 1.56310647864764
    },
    {
      "global_rank": 20174,
      "category_rank": 16,
      "domain": "fangraphs.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 4541095.23395577,
      "curr_month_visits": 4541095.23395577,
      "unique_users": 1067033.56821177,
      "pages_per_visit": 4.64243003243031
    },
    {
      "global_rank": 99880,
      "category_rank": 16,
      "domain": "explorersweb.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 699018.409626358,
      "curr_month_visits": 699018.409626358,
      "unique_users": 413733.169998437,
      "pages_per_visit": 1.60016244862112
    },
    {
      "global_rank": 288886,
      "category_rank": 16,
      "domain": "archivesdepartementales76.net",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 50506.7348104557,
      "curr_month_visits": 50506.7348104557,
      "unique_users": 11882.3016258404,
      "pages_per_visit": 51.6177505510724
    },
    {
      "global_rank": 18606,
      "category_rank": 16,
      "domain": "steelersdepot.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 6011193.51951502,
      "curr_month_visits": 6011193.51951502,
      "unique_users": 1130801.62103662,
      "pages_per_visit": 1.94845465439529
    },
    {
      "global_rank": 34598,
      "category_rank": 17,
      "domain": "cyclinguptodate.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 3090032.71189177,
      "curr_month_visits": 3090032.71189177,
      "unique_users": 697724.611330734,
      "pages_per_visit": 2.18794352001942
    },
    {
      "global_rank": 26256,
      "category_rank": 17,
      "domain": "topgolf.com",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 2466878.51027457,
      "curr_month_visits": 2466878.51027457,
      "unique_users": 1671298.34524589,
      "pages_per_visit": 2.92823017466342
    },
    {
      "global_rank": 2117,
      "category_rank": 17,
      "domain": "weathercn.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 55092876.1552583,
      "curr_month_visits": 55092876.1552583,
      "unique_users": 15652163.7089331,
      "pages_per_visit": 2.3647024498897
    },
    {
      "global_rank": 142846,
      "category_rank": 17,
      "domain": "loebclassics.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 250526.526524454,
      "curr_month_visits": 250526.526524454,
      "unique_users": 98052.9754224012,
      "pages_per_visit": 5.91486218065631
    },
    {
      "global_rank": 100269,
      "category_rank": 17,
      "domain": "livemomentous.com",
      "category": "Sports/Sports",
      "avg_month_visits": 458752.112826286,
      "curr_month_visits": 458752.112826286,
      "unique_users": 255254.731245453,
      "pages_per_visit": 3.20705479561083
    },
    {
      "global_rank": 110591,
      "category_rank": 17,
      "domain": "sportsurge.best",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 620664.110226729,
      "curr_month_visits": 620664.110226729,
      "unique_users": 327942.17186068,
      "pages_per_visit": 2.01316477129151
    },
    {
      "global_rank": 17100,
      "category_rank": 17,
      "domain": "topstreams.me",
      "category": "Sports/Soccer",
      "avg_month_visits": 3920363.92891768,
      "curr_month_visits": 3920363.92891768,
      "unique_users": 1981047.41912845,
      "pages_per_visit": 2.1511133229051
    },
    {
      "global_rank": 808,
      "category_rank": 17,
      "domain": "diretta.it",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 49613016.2987909,
      "curr_month_visits": 49613016.2987909,
      "unique_users": 3975078.20178298,
      "pages_per_visit": 9.40079272937379
    },
    {
      "global_rank": 4227,
      "category_rank": 17,
      "domain": "purdue.edu",
      "category": "Sports/Baseball",
      "avg_month_visits": 15979182.3739691,
      "curr_month_visits": 15979182.3739691,
      "unique_users": 5711584.46902997,
      "pages_per_visit": 3.69270823729138
    },
    {
      "global_rank": 22001,
      "category_rank": 17,
      "domain": "baseball-mag.net",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 4939980.54106061,
      "curr_month_visits": 4939980.54106061,
      "unique_users": 411086.539352023,
      "pages_per_visit": 2.50775668275892
    },
    {
      "global_rank": 53113,
      "category_rank": 17,
      "domain": "masteringphysics.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 1139524.97682329,
      "curr_month_visits": 1139524.97682329,
      "unique_users": 183145.531570393,
      "pages_per_visit": 7.62353572035335
    },
    {
      "global_rank": 18879,
      "category_rank": 17,
      "domain": "prideofdetroit.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 4347583.66600847,
      "curr_month_visits": 4347583.66600847,
      "unique_users": 780564.751988932,
      "pages_per_visit": 2.10844109404298
    },
    {
      "global_rank": 10060,
      "category_rank": 17,
      "domain": "velkigames365.cc",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 8289376.63468062,
      "curr_month_visits": 8289376.63468062,
      "unique_users": 1837963.18254109,
      "pages_per_visit": 3.2233719782218
    },
    {
      "global_rank": 12500,
      "category_rank": 17,
      "domain": "stockholm.se",
      "category": "Sports/Fishing",
      "avg_month_visits": 3497341.78684041,
      "curr_month_visits": 3497341.78684041,
      "unique_users": 811259.79400906,
      "pages_per_visit": 10.130145453553
    },
    {
      "global_rank": 16153,
      "category_rank": 17,
      "domain": "educationperfect.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 2777858.16752413,
      "curr_month_visits": 2777858.16752413,
      "unique_users": 518463.228522681,
      "pages_per_visit": 7.46142850474084
    },
    {
      "global_rank": 316345,
      "category_rank": 17,
      "domain": "archives.cz",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 56966.6803745128,
      "curr_month_visits": 56966.6803745128,
      "unique_users": 16706.5422497405,
      "pages_per_visit": 23.3438483399502
    },
    {
      "global_rank": 100399,
      "category_rank": 18,
      "domain": "bassresource.com",
      "category": "Sports/Sports",
      "avg_month_visits": 762853.219180657,
      "curr_month_visits": 762853.219180657,
      "unique_users": 336764.09114997,
      "pages_per_visit": 1.91142557149227
    },
    {
      "global_rank": 53417,
      "category_rank": 18,
      "domain": "mephi.ru",
      "category": "Sports/American_Football",
      "avg_month_visits": 1081206.64796732,
      "curr_month_visits": 1081206.64796732,
      "unique_users": 272372.084751869,
      "pages_per_visit": 4.11369902578936
    },
    {
      "global_rank": 117176,
      "category_rank": 18,
      "domain": "boxing247.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 576581.996608666,
      "curr_month_visits": 576581.996608666,
      "unique_users": 310776.099442815,
      "pages_per_visit": 1.53521476151472
    },
    {
      "global_rank": 11574,
      "category_rank": 18,
      "domain": "pff.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 6766583.94916901,
      "curr_month_visits": 6766583.94916901,
      "unique_users": 2801790.06158819,
      "pages_per_visit": 3.72575432983921
    },
    {
      "global_rank": 13484,
      "category_rank": 18,
      "domain": "italki.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 4732453.62933355,
      "curr_month_visits": 4732453.62933355,
      "unique_users": 1720093.96998741,
      "pages_per_visit": 4.54028757858778
    },
    {
      "global_rank": 4250,
      "category_rank": 18,
      "domain": "berkeley.edu",
      "category": "Sports/Climbing",
      "avg_month_visits": 14548903.0709351,
      "curr_month_visits": 14548903.0709351,
      "unique_users": 4308944.43381666,
      "pages_per_visit": 5.24960386362099
    },
    {
      "global_rank": 142953,
      "category_rank": 18,
      "domain": "siged.com.uy",
      "category": "Sports/Running",
      "avg_month_visits": 164665.111291879,
      "curr_month_visits": 164665.111291879,
      "unique_users": 33734.1824697329,
      "pages_per_visit": 10.8194253352477
    },
    {
      "global_rank": 100638,
      "category_rank": 18,
      "domain": "8a.nu",
      "category": "Sports/Rugby",
      "avg_month_visits": 559251.031444487,
      "curr_month_visits": 559251.031444487,
      "unique_users": 141723.122891572,
      "pages_per_visit": 3.86378080370597
    },
    {
      "global_rank": 6559,
      "category_rank": 18,
      "domain": "ulaval.ca",
      "category": "Sports/Fishing",
      "avg_month_visits": 7129557.43091162,
      "curr_month_visits": 7129557.43091162,
      "unique_users": 1305974.69667245,
      "pages_per_visit": 11.2057909375678
    },
    {
      "global_rank": 334575,
      "category_rank": 18,
      "domain": "archieven.nl",
      "category": "Sports/American_Football",
      "avg_month_visits": 110358.53016345,
      "curr_month_visits": 110358.53016345,
      "unique_users": 65134.6147784867,
      "pages_per_visit": 4.12274728270412
    },
    {
      "global_rank": 21893,
      "category_rank": 18,
      "domain": "healthtrition.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 957309.956192772,
      "curr_month_visits": 957309.956192772,
      "unique_users": 734710.829299061,
      "pages_per_visit": 7.24289301840562
    },
    {
      "global_rank": 2478,
      "category_rank": 18,
      "domain": "theweathernetwork.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 32115717.9313617,
      "curr_month_visits": 32115717.9313617,
      "unique_users": 5912038.82958308,
      "pages_per_visit": 2.11193168497575
    },
    {
      "global_rank": 22669,
      "category_rank": 18,
      "domain": "softbankhawks.co.jp",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 2839971.15499208,
      "curr_month_visits": 2839971.15499208,
      "unique_users": 924350.321624221,
      "pages_per_visit": 5.25337459281624
    },
    {
      "global_rank": 339383,
      "category_rank": 19,
      "domain": "noord-hollandsarchief.nl",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 46977.4582654465,
      "curr_month_visits": 46977.4582654465,
      "unique_users": 15841.3885966199,
      "pages_per_visit": 14.1788969208931
    },
    {
      "global_rank": 6601,
      "category_rank": 19,
      "domain": "manuscriptcentral.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 8005338.70718197,
      "curr_month_visits": 8005338.70718197,
      "unique_users": 1546027.12603411,
      "pages_per_visit": 6.89698968589749
    },
    {
      "global_rank": 119329,
      "category_rank": 19,
      "domain": "boxing-social.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 481797.224917083,
      "curr_month_visits": 481797.224917083,
      "unique_users": 276108.187828282,
      "pages_per_visit": 1.47129230331307
    },
    {
      "global_rank": 3057,
      "category_rank": 19,
      "domain": "meteoblue.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 28384717.55987,
      "curr_month_visits": 28384717.55987,
      "unique_users": 5575227.57024479,
      "pages_per_visit": 2.61147141414099
    },
    {
      "global_rank": 12933,
      "category_rank": 19,
      "domain": "actionnetwork.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 5779512.66222424,
      "curr_month_visits": 5779512.66222424,
      "unique_users": 2660108.46355288,
      "pages_per_visit": 2.96179873189863
    },
    {
      "global_rank": 17123,
      "category_rank": 19,
      "domain": "mathspace.co",
      "category": "Sports/Baseball",
      "avg_month_visits": 2348294.24200293,
      "curr_month_visits": 2348294.24200293,
      "unique_users": 507659.257988332,
      "pages_per_visit": 8.57803192269802
    },
    {
      "global_rank": 22333,
      "category_rank": 19,
      "domain": "nrl.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 6441438.848569,
      "curr_month_visits": 6441438.848569,
      "unique_users": 1456549.43068995,
      "pages_per_visit": 2.94842045828474
    },
    {
      "global_rank": 88751,
      "category_rank": 19,
      "domain": "drawnames.ph",
      "category": "Sports/Soccer",
      "avg_month_visits": 168060.332907334,
      "curr_month_visits": 168060.332907334,
      "unique_users": 56274.4936255332,
      "pages_per_visit": 6.84369414789443
    },
    {
      "global_rank": 4264,
      "category_rank": 19,
      "domain": "ratemyprofessors.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 10897191.3047508,
      "curr_month_visits": 10897191.3047508,
      "unique_users": 5067178.58405489,
      "pages_per_visit": 3.54730402446853
    },
    {
      "global_rank": 66688,
      "category_rank": 19,
      "domain": "epsg.io",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 245926.129184861,
      "curr_month_visits": 245926.129184861,
      "unique_users": 117409.407274776,
      "pages_per_visit": 28.3215469090299
    },
    {
      "global_rank": 13615,
      "category_rank": 19,
      "domain": "grandid.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 5266643.7366785,
      "curr_month_visits": 5266643.7366785,
      "unique_users": 1803128.42879162,
      "pages_per_visit": 2.8304395795753
    },
    {
      "global_rank": 28102,
      "category_rank": 19,
      "domain": "usconcealedcarry.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 2437261.38939981,
      "curr_month_visits": 2437261.38939981,
      "unique_users": 1537259.03934845,
      "pages_per_visit": 2.36482494119563
    },
    {
      "global_rank": 17360,
      "category_rank": 19,
      "domain": "basketballnetwork.net",
      "category": "Sports/Volleyball",
      "avg_month_visits": 3451025.54288068,
      "curr_month_visits": 3451025.54288068,
      "unique_users": 1795373.31938451,
      "pages_per_visit": 1.39638799950489
    },
    {
      "global_rank": 853,
      "category_rank": 19,
      "domain": "cbssports.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 73678770.7468101,
      "curr_month_visits": 73678770.7468101,
      "unique_users": 24251625.9972608,
      "pages_per_visit": 2.6513347662242
    },
    {
      "global_rank": 26052,
      "category_rank": 19,
      "domain": "crackstreams.dev",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 5619636.9807548,
      "curr_month_visits": 5619636.9807548,
      "unique_users": 2564656.06265777,
      "pages_per_visit": 2.22453071543831
    },
    {
      "global_rank": 38840,
      "category_rank": 19,
      "domain": "ysroad.co.jp",
      "category": "Sports/Volleyball",
      "avg_month_visits": 1757629.29853798,
      "curr_month_visits": 1757629.29853798,
      "unique_users": 632061.111255495,
      "pages_per_visit": 2.70991961768548
    },
    {
      "global_rank": 17129,
      "category_rank": 20,
      "domain": "myopenmath.com",
      "category": "Sports",
      "avg_month_visits": 2808502.35537726,
      "curr_month_visits": 2808502.35537726,
      "unique_users": 313692.77992438,
      "pages_per_visit": 11.0693866807648
    },
    {
      "global_rank": 4354,
      "category_rank": 20,
      "domain": "joinhandshake.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 15287073.1374097,
      "curr_month_visits": 15287073.1374097,
      "unique_users": 4150888.4146631,
      "pages_per_visit": 6.53485704213781
    },
    {
      "global_rank": 868,
      "category_rank": 20,
      "domain": "ut.ac.id",
      "category": "Sports/Fishing",
      "avg_month_visits": 21198908.7394247,
      "curr_month_visits": 21198908.7394247,
      "unique_users": 3586642.1998484,
      "pages_per_visit": 12.9156614420818
    },
    {
      "global_rank": 345376,
      "category_rank": 20,
      "domain": "archives71.fr",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 51325.6848957602,
      "curr_month_visits": 51325.6848957602,
      "unique_users": 9414.13697251112,
      "pages_per_visit": 15.9652841174182
    },
    {
      "global_rank": 24054,
      "category_rank": 20,
      "domain": "topps.com",
      "category": "Sports/Sports",
      "avg_month_visits": 3180287.36398725,
      "curr_month_visits": 3180287.36398725,
      "unique_users": 1033377.43691675,
      "pages_per_visit": 3.88162167002221
    },
    {
      "global_rank": 122664,
      "category_rank": 20,
      "domain": "hayabusafight.com",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 281083.770553941,
      "curr_month_visits": 281083.770553941,
      "unique_users": 162087.69861128,
      "pages_per_visit": 3.01346502834047
    },
    {
      "global_rank": 18085,
      "category_rank": 20,
      "domain": "acb.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 3925159.72669554,
      "curr_month_visits": 3925159.72669554,
      "unique_users": 560551.473077407,
      "pages_per_visit": 5.08135493648142
    },
    {
      "global_rank": 13731,
      "category_rank": 20,
      "domain": "eiken.or.jp",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 4114838.48124746,
      "curr_month_visits": 4114838.48124746,
      "unique_users": 1530116.76535445,
      "pages_per_visit": 5.0498915304429
    },
    {
      "global_rank": 22885,
      "category_rank": 20,
      "domain": "tigernet.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 2605125.41141956,
      "curr_month_visits": 2605125.41141956,
      "unique_users": 200999.887872026,
      "pages_per_visit": 9.94269000263745
    },
    {
      "global_rank": 29205,
      "category_rank": 20,
      "domain": "pewpewtactical.com",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 2381923.65769927,
      "curr_month_visits": 2381923.65769927,
      "unique_users": 1281348.04980221,
      "pages_per_visit": 1.97421842025675
    },
    {
      "global_rank": 57175,
      "category_rank": 20,
      "domain": "mipt.ru",
      "category": "Sports",
      "avg_month_visits": 1171477.90594876,
      "curr_month_visits": 1171477.90594876,
      "unique_users": 325459.623029323,
      "pages_per_visit": 5.05823060714628
    },
    {
      "global_rank": 154116,
      "category_rank": 21,
      "domain": "poesialatina.it",
      "category": "Sports/American_Football",
      "avg_month_visits": 311804.017409732,
      "curr_month_visits": 311804.017409732,
      "unique_users": 136636.824459623,
      "pages_per_visit": 2.30704643762598
    },
    {
      "global_rank": 18041,
      "category_rank": 21,
      "domain": "arkusze.pl",
      "category": "Sports/Basketball",
      "avg_month_visits": 2155476.51800922,
      "curr_month_visits": 2155476.51800922,
      "unique_users": 792580.607608397,
      "pages_per_visit": 6.08047658279948
    },
    {
      "global_rank": 134197,
      "category_rank": 21,
      "domain": "boxmob.jp",
      "category": "Sports/Tennis",
      "avg_month_visits": 367281.777204439,
      "curr_month_visits": 367281.777204439,
      "unique_users": 187386.464231532,
      "pages_per_visit": 4.27122769568841
    },
    {
      "global_rank": 14836,
      "category_rank": 21,
      "domain": "schoolsoft.se",
      "category": "Sports/Climbing",
      "avg_month_visits": 4413073.60417825,
      "curr_month_visits": 4413073.60417825,
      "unique_users": 553045.967176671,
      "pages_per_visit": 4.70031810577203
    },
    {
      "global_rank": 23226,
      "category_rank": 21,
      "domain": "detroitlions.com",
      "category": "Sports/Running",
      "avg_month_visits": 2756003.16945761,
      "curr_month_visits": 2756003.16945761,
      "unique_users": 1389799.39790458,
      "pages_per_visit": 2.59023262296627
    },
    {
      "global_rank": 3589,
      "category_rank": 21,
      "domain": "ventusky.com",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 11873005.559962,
      "curr_month_visits": 11873005.559962,
      "unique_users": 2403906.00563863,
      "pages_per_visit": 10.8910643954019
    },
    {
      "global_rank": 18869,
      "category_rank": 21,
      "domain": "krepsinis.net",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 4898008.29773621,
      "curr_month_visits": 4898008.29773621,
      "unique_users": 289513.577796576,
      "pages_per_visit": 2.94029633987352
    },
    {
      "global_rank": 24186,
      "category_rank": 21,
      "domain": "hanshintigers.jp",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 4281777.59340899,
      "curr_month_visits": 4281777.59340899,
      "unique_users": 1451770.86212593,
      "pages_per_visit": 3.8221201883527
    },
    {
      "global_rank": 373927,
      "category_rank": 21,
      "domain": "meteo-parapente.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 127405.27021747,
      "curr_month_visits": 127405.27021747,
      "unique_users": 33172.5038904397,
      "pages_per_visit": 4.86456546888926
    },
    {
      "global_rank": 947,
      "category_rank": 21,
      "domain": "hochi.news",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 75899762.9926259,
      "curr_month_visits": 75899762.9926259,
      "unique_users": 30318309.62062,
      "pages_per_visit": 1.85356860669095
    },
    {
      "global_rank": 358806,
      "category_rank": 21,
      "domain": "crummy.com",
      "category": "Sports",
      "avg_month_visits": 132162.140912059,
      "curr_month_visits": 132162.140912059,
      "unique_users": 72916.966960398,
      "pages_per_visit": 1.62442947741451
    },
    {
      "global_rank": 4576,
      "category_rank": 21,
      "domain": "scribbr.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 15431039.0299178,
      "curr_month_visits": 15431039.0299178,
      "unique_users": 7788881.02629753,
      "pages_per_visit": 2.61260124514937
    },
    {
      "global_rank": 7795,
      "category_rank": 21,
      "domain": "semanticscholar.org",
      "category": "Sports/Boxing",
      "avg_month_visits": 8815349.33608385,
      "curr_month_visits": 8815349.33608385,
      "unique_users": 5345715.7874871,
      "pages_per_visit": 2.5569738152027
    },
    {
      "global_rank": 380403,
      "category_rank": 22,
      "domain": "redbull.sharepoint.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 132992.171767351,
      "curr_month_visits": 132992.171767351,
      "unique_users": 12661.5096762669,
      "pages_per_visit": 3.12812533252633
    },
    {
      "global_rank": 24585,
      "category_rank": 22,
      "domain": "bleedinggreennation.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 3530759.00226549,
      "curr_month_visits": 3530759.00226549,
      "unique_users": 709264.200976056,
      "pages_per_visit": 2.22254240942696
    },
    {
      "global_rank": 119585,
      "category_rank": 22,
      "domain": "bergsteigen.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 594331.89572444,
      "curr_month_visits": 594331.89572444,
      "unique_users": 257111.250858222,
      "pages_per_visit": 2.72595785018826
    },
    {
      "global_rank": 60481,
      "category_rank": 22,
      "domain": "infn.it",
      "category": "Sports/Climbing",
      "avg_month_visits": 755710.87949861,
      "curr_month_visits": 755710.87949861,
      "unique_users": 274345.814964382,
      "pages_per_visit": 4.720626617973
    },
    {
      "global_rank": 156425,
      "category_rank": 22,
      "domain": "philosopherscocoon.typepad.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 303779.637068767,
      "curr_month_visits": 303779.637068767,
      "unique_users": 53938.965150237,
      "pages_per_visit": 2.45590511893991
    },
    {
      "global_rank": 109764,
      "category_rank": 22,
      "domain": "wired2fish.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 752544.161414875,
      "curr_month_visits": 752544.161414875,
      "unique_users": 391837.576574417,
      "pages_per_visit": 1.966866364406
    },
    {
      "global_rank": 977,
      "category_rank": 22,
      "domain": "sportbox.ru",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 67213253.4073797,
      "curr_month_visits": 67213253.4073797,
      "unique_users": 5894041.24807205,
      "pages_per_visit": 3.23585865305586
    },
    {
      "global_rank": 18664,
      "category_rank": 22,
      "domain": "listal.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 2049446.04996478,
      "curr_month_visits": 2049446.04996478,
      "unique_users": 1066854.28975788,
      "pages_per_visit": 10.3752457655458
    },
    {
      "global_rank": 7808,
      "category_rank": 22,
      "domain": "umontreal.ca",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 6656283.20090878,
      "curr_month_visits": 6656283.20090878,
      "unique_users": 1035056.65970739,
      "pages_per_visit": 9.10729520191837
    },
    {
      "global_rank": 25050,
      "category_rank": 22,
      "domain": "orical.jp",
      "category": "Sports/Golf",
      "avg_month_visits": 4372795.18711415,
      "curr_month_visits": 4372795.18711415,
      "unique_users": 369249.217941383,
      "pages_per_visit": 1.85779323456083
    },
    {
      "global_rank": 135739,
      "category_rank": 22,
      "domain": "titleboxing.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 327264.359189273,
      "curr_month_visits": 327264.359189273,
      "unique_users": 153658.095573348,
      "pages_per_visit": 4.24641258313847
    },
    {
      "global_rank": 369597,
      "category_rank": 22,
      "domain": "archives.sh.cn",
      "category": "Sports",
      "avg_month_visits": 122224.814317347,
      "curr_month_visits": 122224.814317347,
      "unique_users": 54486.9901093707,
      "pages_per_visit": 1.2962027009122
    },
    {
      "global_rank": 94456,
      "category_rank": 22,
      "domain": "dar.org",
      "category": "Sports/Fishing",
      "avg_month_visits": 330125.578928444,
      "curr_month_visits": 330125.578928444,
      "unique_users": 112168.267266128,
      "pages_per_visit": 10.1106202365578
    },
    {
      "global_rank": 4615,
      "category_rank": 22,
      "domain": "estacio.br",
      "category": "Sports/Rugby",
      "avg_month_visits": 10619206.2552979,
      "curr_month_visits": 10619206.2552979,
      "unique_users": 2923504.65867758,
      "pages_per_visit": 6.49557403500008
    },
    {
      "global_rank": 40761,
      "category_rank": 22,
      "domain": "ridewithgps.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 1875837.41939297,
      "curr_month_visits": 1875837.41939297,
      "unique_users": 769893.992676529,
      "pages_per_visit": 3.96100394204932
    },
    {
      "global_rank": 16257,
      "category_rank": 22,
      "domain": "ourworldindata.org",
      "category": "Sports/Sports",
      "avg_month_visits": 2614161.27025358,
      "curr_month_visits": 2614161.27025358,
      "unique_users": 1611143.18322442,
      "pages_per_visit": 6.36438898951574
    },
    {
      "global_rank": 3620,
      "category_rank": 22,
      "domain": "buienradar.nl",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 29468705.4395903,
      "curr_month_visits": 29468705.4395903,
      "unique_users": 3193148.4959293,
      "pages_per_visit": 2.26231348888904
    },
    {
      "global_rank": 25524,
      "category_rank": 23,
      "domain": "perfectgame.org",
      "category": "Sports/Tennis",
      "avg_month_visits": 3120483.41388734,
      "curr_month_visits": 3120483.41388734,
      "unique_users": 872706.599234956,
      "pages_per_visit": 4.01702860855455
    },
    {
      "global_rank": 378222,
      "category_rank": 23,
      "domain": "archivists.org",
      "category": "Sports/Baseball",
      "avg_month_visits": 103592.506906654,
      "curr_month_visits": 103592.506906654,
      "unique_users": 44650.7259297975,
      "pages_per_visit": 3.07928018489201
    },
    {
      "global_rank": 8292,
      "category_rank": 23,
      "domain": "orcid.org",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 7983408.14615403,
      "curr_month_visits": 7983408.14615403,
      "unique_users": 3899592.80284658,
      "pages_per_visit": 3.00658324817804
    },
    {
      "global_rank": 95020,
      "category_rank": 23,
      "domain": "edelvivesdigitalplus.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 431766.66143491,
      "curr_month_visits": 431766.66143491,
      "unique_users": 70257.8014226085,
      "pages_per_visit": 5.79137388363424
    },
    {
      "global_rank": 470695,
      "category_rank": 23,
      "domain": "isbndb.com",
      "category": "Sports",
      "avg_month_visits": 74721.6704930691,
      "curr_month_visits": 74721.6704930691,
      "unique_users": 40449.7108185967,
      "pages_per_visit": 2.61782222282838
    },
    {
      "global_rank": 120643,
      "category_rank": 23,
      "domain": "sac-cas.ch",
      "category": "Sports/Volleyball",
      "avg_month_visits": 449641.361636016,
      "curr_month_visits": 449641.361636016,
      "unique_users": 251917.391536319,
      "pages_per_visit": 3.45343723384628
    },
    {
      "global_rank": 164625,
      "category_rank": 23,
      "domain": "clearerthinking.org",
      "category": "Sports",
      "avg_month_visits": 338067.633802061,
      "curr_month_visits": 338067.633802061,
      "unique_users": 152902.722382472,
      "pages_per_visit": 4.11816374449919
    },
    {
      "global_rank": 25627,
      "category_rank": 23,
      "domain": "chiefs.com",
      "category": "Sports/Sports",
      "avg_month_visits": 2505715.1642325,
      "curr_month_visits": 2505715.1642325,
      "unique_users": 1489769.04364043,
      "pages_per_visit": 2.34413429473548
    },
    {
      "global_rank": 60829,
      "category_rank": 23,
      "domain": "isaacphysics.org",
      "category": "Sports/Baseball",
      "avg_month_visits": 906605.313239819,
      "curr_month_visits": 906605.313239819,
      "unique_users": 298566.874400598,
      "pages_per_visit": 6.75357601189748
    },
    {
      "global_rank": 16685,
      "category_rank": 23,
      "domain": "duunitori.fi",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 3257792.79268279,
      "curr_month_visits": 3257792.79268279,
      "unique_users": 969941.555674541,
      "pages_per_visit": 4.87559689687505
    },
    {
      "global_rank": 3974,
      "category_rank": 23,
      "domain": "rp5.ru",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 27749483.9416034,
      "curr_month_visits": 27749483.9416034,
      "unique_users": 2433405.18850181,
      "pages_per_visit": 1.52448087705029
    },
    {
      "global_rank": 4664,
      "category_rank": 23,
      "domain": "ucla.edu",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 10926387.3787716,
      "curr_month_visits": 10926387.3787716,
      "unique_users": 2828907.74121892,
      "pages_per_visit": 6.99206760917323
    },
    {
      "global_rank": 32962,
      "category_rank": 23,
      "domain": "golfmonthly.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 2815256.52010322,
      "curr_month_visits": 2815256.52010322,
      "unique_users": 1400264.94964636,
      "pages_per_visit": 1.88662904924007
    },
    {
      "global_rank": 64289,
      "category_rank": 24,
      "domain": "thorlabs.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 699287.511419599,
      "curr_month_visits": 699287.511419599,
      "unique_users": 265953.457601889,
      "pages_per_visit": 5.26885438789733
    },
    {
      "global_rank": 27420,
      "category_rank": 24,
      "domain": "fighters.co.jp",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 3782493.76816165,
      "curr_month_visits": 3782493.76816165,
      "unique_users": 1022420.12477516,
      "pages_per_visit": 3.72224375280153
    },
    {
      "global_rank": 168660,
      "category_rank": 24,
      "domain": "philosophynow.org",
      "category": "Sports/Baseball",
      "avg_month_visits": 277871.441841119,
      "curr_month_visits": 277871.441841119,
      "unique_users": 142122.88349043,
      "pages_per_visit": 2.85546771627582
    },
    {
      "global_rank": 8572,
      "category_rank": 24,
      "domain": "tsinghua.edu.cn",
      "category": "Sports/Tennis",
      "avg_month_visits": 5323067.74161147,
      "curr_month_visits": 5323067.74161147,
      "unique_users": 1905038.13632589,
      "pages_per_visit": 8.13515316188766
    },
    {
      "global_rank": 53303,
      "category_rank": 24,
      "domain": "world.org",
      "category": "Sports/Baseball",
      "avg_month_visits": 641656.367254227,
      "curr_month_visits": 641656.367254227,
      "unique_users": 323865.967027322,
      "pages_per_visit": 2.01603866701727
    },
    {
      "global_rank": 4714,
      "category_rank": 24,
      "domain": "columbia.edu",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 12923803.2693072,
      "curr_month_visits": 12923803.2693072,
      "unique_users": 4468967.25714955,
      "pages_per_visit": 4.91277784867554
    },
    {
      "global_rank": 16707,
      "category_rank": 24,
      "domain": "finna.fi",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 3209669.17955752,
      "curr_month_visits": 3209669.17955752,
      "unique_users": 1045254.74170834,
      "pages_per_visit": 5.11111582514622
    },
    {
      "global_rank": 440996,
      "category_rank": 24,
      "domain": "zeeuwsarchief.nl",
      "category": "Sports/Fishing",
      "avg_month_visits": 46335.8296006772,
      "curr_month_visits": 46335.8296006772,
      "unique_users": 15220.9969184032,
      "pages_per_visit": 7.85148506299737
    },
    {
      "global_rank": 1023,
      "category_rank": 24,
      "domain": "sports.naver.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 59799292.3352468,
      "curr_month_visits": 59799292.3352468,
      "unique_users": 7531522.32451024,
      "pages_per_visit": 4.1341793534583
    },
    {
      "global_rank": 95220,
      "category_rank": 24,
      "domain": "whitehousehistory.org",
      "category": "Sports",
      "avg_month_visits": 486680.328840963,
      "curr_month_visits": 486680.328840963,
      "unique_users": 347115.720665443,
      "pages_per_visit": 2.0484415177079
    },
    {
      "global_rank": 20087,
      "category_rank": 24,
      "domain": "brilliant.org",
      "category": "Sports",
      "avg_month_visits": 2877655.7849552,
      "curr_month_visits": 2877655.7849552,
      "unique_users": 1315997.79150896,
      "pages_per_visit": 4.5792374816363
    },
    {
      "global_rank": 122724,
      "category_rank": 24,
      "domain": "movementgyms.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 434757.833321758,
      "curr_month_visits": 434757.833321758,
      "unique_users": 218208.747319466,
      "pages_per_visit": 2.54101560792361
    },
    {
      "global_rank": 4244,
      "category_rank": 24,
      "domain": "idokep.hu",
      "category": "Sports/Fishing",
      "avg_month_visits": 21322163.1069118,
      "curr_month_visits": 21322163.1069118,
      "unique_users": 2142383.78312279,
      "pages_per_visit": 2.86193288671768
    },
    {
      "global_rank": 33398,
      "category_rank": 24,
      "domain": "golfgenius.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 2602420.79489919,
      "curr_month_visits": 2602420.79489919,
      "unique_users": 722941.772374573,
      "pages_per_visit": 4.54914592777349
    },
    {
      "global_rank": 25759,
      "category_rank": 24,
      "domain": "saturdaydownsouth.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 3696324.07638794,
      "curr_month_visits": 3696324.07638794,
      "unique_users": 1382195.37499453,
      "pages_per_visit": 1.8738625772978
    },
    {
      "global_rank": 136537,
      "category_rank": 24,
      "domain": "boxraw.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 292036.632555761,
      "curr_month_visits": 292036.632555761,
      "unique_users": 131534.976757909,
      "pages_per_visit": 3.40766628620009
    },
    {
      "global_rank": 4790,
      "category_rank": 25,
      "domain": "ucsd.edu",
      "category": "Sports/Sports",
      "avg_month_visits": 10292530.3550481,
      "curr_month_visits": 10292530.3550481,
      "unique_users": 2206619.23016513,
      "pages_per_visit": 7.04313552666956
    },
    {
      "global_rank": 28819,
      "category_rank": 25,
      "domain": "omyutech.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 4180122.05279579,
      "curr_month_visits": 4180122.05279579,
      "unique_users": 1337449.00017628,
      "pages_per_visit": 4.16566943795455
    },
    {
      "global_rank": 8587,
      "category_rank": 25,
      "domain": "futura-sciences.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 11548343.0292389,
      "curr_month_visits": 11548343.0292389,
      "unique_users": 5997490.36343533,
      "pages_per_visit": 1.55748745544887
    },
    {
      "global_rank": 444940,
      "category_rank": 25,
      "domain": "archivespasdecalais.fr",
      "category": "Sports/Climbing",
      "avg_month_visits": 70125.8035737968,
      "curr_month_visits": 70125.8035737968,
      "unique_users": 26272.541077987,
      "pages_per_visit": 2.91010660416012
    },
    {
      "global_rank": 4632,
      "category_rank": 25,
      "domain": "havadurumu15gunluk.xyz",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 16188653.2072625,
      "curr_month_visits": 16188653.2072625,
      "unique_users": 3847878.71235539,
      "pages_per_visit": 1.63441375556494
    },
    {
      "global_rank": 113469,
      "category_rank": 25,
      "domain": "surf-life.blue",
      "category": "Sports/Volleyball",
      "avg_month_visits": 690470.789606581,
      "curr_month_visits": 690470.789606581,
      "unique_users": 311927.949897947,
      "pages_per_visit": 1.3597400140836
    },
    {
      "global_rank": 403918,
      "category_rank": 25,
      "domain": "lu-glidz.blogspot.com",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 100727.70032831,
      "curr_month_visits": 100727.70032831,
      "unique_users": 33113.8336935223,
      "pages_per_visit": 1.90918242363105
    },
    {
      "global_rank": 65449,
      "category_rank": 25,
      "domain": "leifiphysik.de",
      "category": "Sports/Boxing",
      "avg_month_visits": 779649.499615438,
      "curr_month_visits": 779649.499615438,
      "unique_users": 397490.125128192,
      "pages_per_visit": 2.61147018197477
    },
    {
      "global_rank": 26251,
      "category_rank": 25,
      "domain": "dallascowboys.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 3244832.66600421,
      "curr_month_visits": 3244832.66600421,
      "unique_users": 1297365.35641634,
      "pages_per_visit": 2.06414885318824
    },
    {
      "global_rank": 16761,
      "category_rank": 25,
      "domain": "ssrn.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 4282061.62885228,
      "curr_month_visits": 4282061.62885228,
      "unique_users": 2153114.0564477,
      "pages_per_visit": 2.1990749013371
    },
    {
      "global_rank": 21361,
      "category_rank": 25,
      "domain": "univ-lyon1.fr",
      "category": "Sports",
      "avg_month_visits": 2815917.23335281,
      "curr_month_visits": 2815917.23335281,
      "unique_users": 437232.161313559,
      "pages_per_visit": 6.45778861352691
    },
    {
      "global_rank": 128945,
      "category_rank": 25,
      "domain": "gripped.com",
      "category": "Sports/Running",
      "avg_month_visits": 520118.725838604,
      "curr_month_visits": 520118.725838604,
      "unique_users": 253751.661826213,
      "pages_per_visit": 1.89695410805289
    },
    {
      "global_rank": 65824,
      "category_rank": 26,
      "domain": "pdfdrive.to",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 696315.374212597,
      "curr_month_visits": 696315.374212597,
      "unique_users": 371417.959345906,
      "pages_per_visit": 4.17232394385548
    },
    {
      "global_rank": 21044,
      "category_rank": 26,
      "domain": "epe.es",
      "category": "Sports/Golf",
      "avg_month_visits": 5117483.82119523,
      "curr_month_visits": 5117483.82119523,
      "unique_users": 2510954.23465846,
      "pages_per_visit": 1.59382925730838
    },
    {
      "global_rank": 143947,
      "category_rank": 26,
      "domain": "ringpolska.pl",
      "category": "Sports/Running",
      "avg_month_visits": 467711.993381412,
      "curr_month_visits": 467711.993381412,
      "unique_users": 84914.6272520797,
      "pages_per_visit": 2.02147704047335
    },
    {
      "global_rank": 8868,
      "category_rank": 26,
      "domain": "bg.ac.rs",
      "category": "Sports/Climbing",
      "avg_month_visits": 8226880.46685798,
      "curr_month_visits": 8226880.46685798,
      "unique_users": 1439033.48027503,
      "pages_per_visit": 4.34121971168436
    },
    {
      "global_rank": 458984,
      "category_rank": 26,
      "domain": "20000-names.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 107272.65526084,
      "curr_month_visits": 107272.65526084,
      "unique_users": 49334.1242669406,
      "pages_per_visit": 2.27967130999128
    },
    {
      "global_rank": 4705,
      "category_rank": 26,
      "domain": "foreca.fi",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 19217056.2260051,
      "curr_month_visits": 19217056.2260051,
      "unique_users": 1717328.24165554,
      "pages_per_visit": 2.36925120060803
    },
    {
      "global_rank": 30556,
      "category_rank": 26,
      "domain": "bleachernation.com",
      "category": "Sports/Running",
      "avg_month_visits": 3525175.33764789,
      "curr_month_visits": 3525175.33764789,
      "unique_users": 1275639.15958344,
      "pages_per_visit": 1.87237019362061
    },
    {
      "global_rank": 182406,
      "category_rank": 26,
      "domain": "myndighetspost.se",
      "category": "Sports/Soccer",
      "avg_month_visits": 163107.792167025,
      "curr_month_visits": 163107.792167025,
      "unique_users": 69207.3593834459,
      "pages_per_visit": 6.22739571726692
    },
    {
      "global_rank": 96068,
      "category_rank": 26,
      "domain": "navigium.de",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 342587.380412291,
      "curr_month_visits": 342587.380412291,
      "unique_users": 120638.885393626,
      "pages_per_visit": 7.40004043893052
    },
    {
      "global_rank": 17018,
      "category_rank": 26,
      "domain": "trafikverket.se",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 3769203.87303529,
      "curr_month_visits": 3769203.87303529,
      "unique_users": 807130.287898489,
      "pages_per_visit": 5.6464792707366
    },
    {
      "global_rank": 4813,
      "category_rank": 26,
      "domain": "elluciancloud.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 14518298.5487971,
      "curr_month_visits": 14518298.5487971,
      "unique_users": 3032709.05370819,
      "pages_per_visit": 3.11134694851086
    },
    {
      "global_rank": 1036,
      "category_rank": 26,
      "domain": "news.sportbox.ru",
      "category": "Sports/Golf",
      "avg_month_visits": 65114403.6569857,
      "curr_month_visits": 65114403.6569857,
      "unique_users": 5843029.99462435,
      "pages_per_visit": 3.11417499342929
    },
    {
      "global_rank": 105071,
      "category_rank": 27,
      "domain": "ktgis.net",
      "category": "Sports/Sports",
      "avg_month_visits": 205779.015646096,
      "curr_month_visits": 205779.015646096,
      "unique_users": 92185.5191864093,
      "pages_per_visit": 17.3466753231613
    },
    {
      "global_rank": 24704,
      "category_rank": 27,
      "domain": "bsmart.it",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 1336822.33398204,
      "curr_month_visits": 1336822.33398204,
      "unique_users": 421642.119332059,
      "pages_per_visit": 13.6980560513276
    },
    {
      "global_rank": 17414,
      "category_rank": 27,
      "domain": "shkola.in.ua",
      "category": "Sports/Boxing",
      "avg_month_visits": 4944147.52565822,
      "curr_month_visits": 4944147.52565822,
      "unique_users": 1913990.98902219,
      "pages_per_visit": 2.26913253029945
    },
    {
      "global_rank": 464195,
      "category_rank": 27,
      "domain": "netlawman.co.uk",
      "category": "Sports/Basketball",
      "avg_month_visits": 76889.8207537437,
      "curr_month_visits": 76889.8207537437,
      "unique_users": 46118.7993998629,
      "pages_per_visit": 1.83384953263823
    },
    {
      "global_rank": 21543,
      "category_rank": 27,
      "domain": "urait.ru",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 1708707.06544974,
      "curr_month_visits": 1708707.06544974,
      "unique_users": 680133.938215943,
      "pages_per_visit": 10.339648519147
    },
    {
      "global_rank": 4708,
      "category_rank": 27,
      "domain": "weather.gc.ca",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 19619904.9010424,
      "curr_month_visits": 19619904.9010424,
      "unique_users": 2137797.02376501,
      "pages_per_visit": 2.27012614578243
    },
    {
      "global_rank": 4858,
      "category_rank": 27,
      "domain": "unisa.ac.za",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 9994913.18949788,
      "curr_month_visits": 9994913.18949788,
      "unique_users": 1397141.17492558,
      "pages_per_visit": 11.8452744388311
    },
    {
      "global_rank": 30740,
      "category_rank": 27,
      "domain": "giants.jp",
      "category": "Sports/Running",
      "avg_month_visits": 3337771.40263158,
      "curr_month_visits": 3337771.40263158,
      "unique_users": 989265.360845,
      "pages_per_visit": 3.65917329474494
    },
    {
      "global_rank": 9095,
      "category_rank": 27,
      "domain": "redalyc.org",
      "category": "Sports/Basketball",
      "avg_month_visits": 9237633.48431791,
      "curr_month_visits": 9237633.48431791,
      "unique_users": 5054855.82083652,
      "pages_per_visit": 2.08235317213829
    },
    {
      "global_rank": 65994,
      "category_rank": 27,
      "domain": "jlab.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 899399.968035859,
      "curr_month_visits": 899399.968035859,
      "unique_users": 475300.797413463,
      "pages_per_visit": 2.99907738533236
    },
    {
      "global_rank": 183884,
      "category_rank": 27,
      "domain": "ecoleenligne.be",
      "category": "Sports/Sports",
      "avg_month_visits": 160666.814732166,
      "curr_month_visits": 160666.814732166,
      "unique_users": 33781.2031430906,
      "pages_per_visit": 5.20337702279492
    },
    {
      "global_rank": 160219,
      "category_rank": 27,
      "domain": "youthopportunitieshub.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 145625.716758841,
      "curr_month_visits": 145625.716758841,
      "unique_users": 71224.6763424974,
      "pages_per_visit": 1.89894409916293
    },
    {
      "global_rank": 22521,
      "category_rank": 27,
      "domain": "buffstream.io",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 3290895.40533483,
      "curr_month_visits": 3290895.40533483,
      "unique_users": 965342.505771012,
      "pages_per_visit": 2.84147458243499
    },
    {
      "global_rank": 26747,
      "category_rank": 27,
      "domain": "fbschedules.com",
      "category": "Sports/Running",
      "avg_month_visits": 2827136.59711535,
      "curr_month_visits": 2827136.59711535,
      "unique_users": 1444775.88820447,
      "pages_per_visit": 2.59356130106551
    },
    {
      "global_rank": 21722,
      "category_rank": 28,
      "domain": "banq.qc.ca",
      "category": "Sports/Boxing",
      "avg_month_visits": 1761836.07239894,
      "curr_month_visits": 1761836.07239894,
      "unique_users": 645445.197083869,
      "pages_per_visit": 9.79722622330921
    },
    {
      "global_rank": 9179,
      "category_rank": 28,
      "domain": "yumpu.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 8295664.59312109,
      "curr_month_visits": 8295664.59312109,
      "unique_users": 6439694.54674669,
      "pages_per_visit": 2.40374350709981
    },
    {
      "global_rank": 504189,
      "category_rank": 28,
      "domain": "k-12readinglist.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 74112.4098454995,
      "curr_month_visits": 74112.4098454995,
      "unique_users": 44080.2768905149,
      "pages_per_visit": 1.71926214451793
    },
    {
      "global_rank": 5805,
      "category_rank": 28,
      "domain": "gismeteo.by",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 15902448.5523545,
      "curr_month_visits": 15902448.5523545,
      "unique_users": 1779126.88579109,
      "pages_per_visit": 2.44106950423829
    },
    {
      "global_rank": 32421,
      "category_rank": 28,
      "domain": "sportshd.app",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 4568132.90579055,
      "curr_month_visits": 4568132.90579055,
      "unique_users": 472301.274623139,
      "pages_per_visit": 2.82390537540736
    },
    {
      "global_rank": 66428,
      "category_rank": 28,
      "domain": "comsol.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 791035.21407475,
      "curr_month_visits": 791035.21407475,
      "unique_users": 317720.789365375,
      "pages_per_visit": 3.26317468453211
    },
    {
      "global_rank": 4932,
      "category_rank": 28,
      "domain": "gptzero.me",
      "category": "Sports/Running",
      "avg_month_visits": 10606148.2992805,
      "curr_month_visits": 10606148.2992805,
      "unique_users": 4175303.47566305,
      "pages_per_visit": 3.88708946063673
    },
    {
      "global_rank": 26815,
      "category_rank": 28,
      "domain": "sportsmockery.com",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 2356643.81669235,
      "curr_month_visits": 2356643.81669235,
      "unique_users": 724196.095991721,
      "pages_per_visit": 2.12783915448989
    },
    {
      "global_rank": 17436,
      "category_rank": 28,
      "domain": "minhaji.net",
      "category": "Sports/Volleyball",
      "avg_month_visits": 2474738.64911574,
      "curr_month_visits": 2474738.64911574,
      "unique_users": 670265.344285992,
      "pages_per_visit": 6.93245801849501
    },
    {
      "global_rank": 465229,
      "category_rank": 28,
      "domain": "countyrecords.com",
      "category": "Sports/Golf",
      "avg_month_visits": 44834.3549040318,
      "curr_month_visits": 44834.3549040318,
      "unique_users": 10411.7143708253,
      "pages_per_visit": 11.2084537276353
    },
    {
      "global_rank": 161885,
      "category_rank": 28,
      "domain": "fightnews.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 381812.51382663,
      "curr_month_visits": 381812.51382663,
      "unique_users": 120733.4945154,
      "pages_per_visit": 1.79948204740349
    },
    {
      "global_rank": 25324,
      "category_rank": 28,
      "domain": "letsjerk.tv",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 1770266.48204734,
      "curr_month_visits": 1770266.48204734,
      "unique_users": 440021.013967494,
      "pages_per_visit": 7.50615499434543
    },
    {
      "global_rank": 184014,
      "category_rank": 29,
      "domain": "zlibrary.pt",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 205652.172480761,
      "curr_month_visits": 205652.172480761,
      "unique_users": 159291.775888377,
      "pages_per_visit": 2.08352366567356
    },
    {
      "global_rank": 504276,
      "category_rank": 29,
      "domain": "ica.org",
      "category": "Sports/Climbing",
      "avg_month_visits": 70333.8558026001,
      "curr_month_visits": 70333.8558026001,
      "unique_users": 34131.8044691521,
      "pages_per_visit": 1.84829457306257
    },
    {
      "global_rank": 66697,
      "category_rank": 29,
      "domain": "nsu.ru",
      "category": "Sports/Baseball",
      "avg_month_visits": 1014332.17778754,
      "curr_month_visits": 1014332.17778754,
      "unique_users": 319778.368960852,
      "pages_per_visit": 3.59088736231075
    },
    {
      "global_rank": 507714,
      "category_rank": 29,
      "domain": "readinggroupguides.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 73835.2436067073,
      "curr_month_visits": 73835.2436067073,
      "unique_users": 47431.3904634057,
      "pages_per_visit": 2.03963452008777
    },
    {
      "global_rank": 9214,
      "category_rank": 29,
      "domain": "dergipark.org.tr",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 6268359.34167875,
      "curr_month_visits": 6268359.34167875,
      "unique_users": 2675905.40128887,
      "pages_per_visit": 3.97833210542615
    },
    {
      "global_rank": 5911,
      "category_rank": 29,
      "domain": "weather.naver.com",
      "category": "Sports/Golf",
      "avg_month_visits": 20276243.4423897,
      "curr_month_visits": 20276243.4423897,
      "unique_users": 4010984.98306536,
      "pages_per_visit": 1.27936558080351
    },
    {
      "global_rank": 49429,
      "category_rank": 29,
      "domain": "mtbr.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 1649946.80892156,
      "curr_month_visits": 1649946.80892156,
      "unique_users": 766770.242887377,
      "pages_per_visit": 2.09674630304334
    },
    {
      "global_rank": 22835,
      "category_rank": 29,
      "domain": "torontopubliclibrary.ca",
      "category": "Sports",
      "avg_month_visits": 2289526.27483651,
      "curr_month_visits": 2289526.27483651,
      "unique_users": 609828.246522281,
      "pages_per_visit": 6.22623127339871
    },
    {
      "global_rank": 168004,
      "category_rank": 29,
      "domain": "ringtv.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 467679.859384719,
      "curr_month_visits": 467679.859384719,
      "unique_users": 222430.924992029,
      "pages_per_visit": 1.94972318001381
    },
    {
      "global_rank": 460278,
      "category_rank": 29,
      "domain": "f1aldia.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 107841.432007893,
      "curr_month_visits": 107841.432007893,
      "unique_users": 45883.5446775414,
      "pages_per_visit": 1.60288292432736
    },
    {
      "global_rank": 5088,
      "category_rank": 29,
      "domain": "unsw.edu.au",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 11562755.2955603,
      "curr_month_visits": 11562755.2955603,
      "unique_users": 1774860.26396671,
      "pages_per_visit": 7.63491230555863
    },
    {
      "global_rank": 34330,
      "category_rank": 29,
      "domain": "cpbl.com.tw",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 5312276.06173476,
      "curr_month_visits": 5312276.06173476,
      "unique_users": 780268.269711202,
      "pages_per_visit": 3.74048200455342
    },
    {
      "global_rank": 29742,
      "category_rank": 30,
      "domain": "secrant.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 2377755.41888743,
      "curr_month_visits": 2377755.41888743,
      "unique_users": 163508.991141004,
      "pages_per_visit": 8.12703188274001
    },
    {
      "global_rank": 31511,
      "category_rank": 30,
      "domain": "univ-rennes1.fr",
      "category": "Sports/Fishing",
      "avg_month_visits": 1679226.47081486,
      "curr_month_visits": 1679226.47081486,
      "unique_users": 175961.275511968,
      "pages_per_visit": 6.09136021468093
    },
    {
      "global_rank": 509510,
      "category_rank": 30,
      "domain": "towerofthehand.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 74154.3371607758,
      "curr_month_visits": 74154.3371607758,
      "unique_users": 26079.0770466717,
      "pages_per_visit": 2.14759308096957
    },
    {
      "global_rank": 49739,
      "category_rank": 30,
      "domain": "adnx.de",
      "category": "Sports/Running",
      "avg_month_visits": 2728672.55805807,
      "curr_month_visits": 2728672.55805807,
      "unique_users": 431239.76559512,
      "pages_per_visit": 1.26520213385763
    },
    {
      "global_rank": 505694,
      "category_rank": 30,
      "domain": "archives18.fr",
      "category": "Sports/Rugby",
      "avg_month_visits": 36277.0468438397,
      "curr_month_visits": 36277.0468438397,
      "unique_users": 10667.8771980862,
      "pages_per_visit": 22.7658770355489
    },
    {
      "global_rank": 9237,
      "category_rank": 30,
      "domain": "duplichecker.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 7514789.55611972,
      "curr_month_visits": 7514789.55611972,
      "unique_users": 3924492.33943335,
      "pages_per_visit": 2.7004913431845
    },
    {
      "global_rank": 184677,
      "category_rank": 30,
      "domain": "herdereditorial.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 267388.606007529,
      "curr_month_visits": 267388.606007529,
      "unique_users": 161824.637332393,
      "pages_per_visit": 1.98020840439267
    },
    {
      "global_rank": 64032,
      "category_rank": 30,
      "domain": "nokportalen.se",
      "category": "Sports/Running",
      "avg_month_visits": 440272.86511818,
      "curr_month_visits": 440272.86511818,
      "unique_users": 70744.8253322252,
      "pages_per_visit": 14.4434512721573
    },
    {
      "global_rank": 18255,
      "category_rank": 30,
      "domain": "geo.de",
      "category": "Sports/American_Football",
      "avg_month_visits": 5623062.64705953,
      "curr_month_visits": 5623062.64705953,
      "unique_users": 3843991.03402477,
      "pages_per_visit": 1.72957370360113
    },
    {
      "global_rank": 68340,
      "category_rank": 30,
      "domain": "test-uz.ru",
      "category": "Sports/Fishing",
      "avg_month_visits": 626706.163091869,
      "curr_month_visits": 626706.163091869,
      "unique_users": 315535.269901593,
      "pages_per_visit": 5.58522496039931
    },
    {
      "global_rank": 5100,
      "category_rank": 30,
      "domain": "nyu.edu",
      "category": "Sports/Tennis",
      "avg_month_visits": 10239532.7339348,
      "curr_month_visits": 10239532.7339348,
      "unique_users": 2913612.22093465,
      "pages_per_visit": 6.44858774947542
    },
    {
      "global_rank": 145660,
      "category_rank": 30,
      "domain": "desnivel.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 457291.06928397,
      "curr_month_visits": 457291.06928397,
      "unique_users": 179602.41096214,
      "pages_per_visit": 1.6808895883685
    },
    {
      "global_rank": 6297,
      "category_rank": 30,
      "domain": "meteomedia.com",
      "category": "Sports/Running",
      "avg_month_visits": 15674629.7707711,
      "curr_month_visits": 15674629.7707711,
      "unique_users": 2033978.31517509,
      "pages_per_visit": 2.09473037870092
    },
    {
      "global_rank": 188688,
      "category_rank": 30,
      "domain": "vliruos.be",
      "category": "Sports/Climbing",
      "avg_month_visits": 97638.8079713274,
      "curr_month_visits": 97638.8079713274,
      "unique_users": 40042.8320487381,
      "pages_per_visit": 4.08831165763753
    },
    {
      "global_rank": 461047,
      "category_rank": 30,
      "domain": "map.bgmountains.org",
      "category": "Sports/Golf",
      "avg_month_visits": 24764.398051438,
      "curr_month_visits": 24764.398051438,
      "unique_users": 5618.99053517624,
      "pages_per_visit": 39.0742474074492
    },
    {
      "global_rank": 32657,
      "category_rank": 31,
      "domain": "wolfram.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 2210200.58627606,
      "curr_month_visits": 2210200.58627606,
      "unique_users": 1208492.59007255,
      "pages_per_visit": 2.65121835818044
    },
    {
      "global_rank": 6615,
      "category_rank": 31,
      "domain": "windguru.cz",
      "category": "Sports/Rugby",
      "avg_month_visits": 15801448.4540029,
      "curr_month_visits": 15801448.4540029,
      "unique_users": 2201385.49621338,
      "pages_per_visit": 1.74956055534963
    },
    {
      "global_rank": 69402,
      "category_rank": 31,
      "domain": "theexpertta.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 811501.992108516,
      "curr_month_visits": 811501.992108516,
      "unique_users": 81625.0095896352,
      "pages_per_visit": 5.83210260248549
    },
    {
      "global_rank": 524943,
      "category_rank": 31,
      "domain": "espoesia.com",
      "category": "Sports",
      "avg_month_visits": 75725.0396289603,
      "curr_month_visits": 75725.0396289603,
      "unique_users": 46955.3184657604,
      "pages_per_visit": 1.65496398231455
    },
    {
      "global_rank": 516181,
      "category_rank": 31,
      "domain": "bibliotekar.ru",
      "category": "Sports/Baseball",
      "avg_month_visits": 79592.0191634186,
      "curr_month_visits": 79592.0191634186,
      "unique_users": 50676.0895776091,
      "pages_per_visit": 2.47212296322599
    },
    {
      "global_rank": 18485,
      "category_rank": 31,
      "domain": "helsinki.fi",
      "category": "Sports/Running",
      "avg_month_visits": 2928256.44926166,
      "curr_month_visits": 2928256.44926166,
      "unique_users": 709555.586828572,
      "pages_per_visit": 6.93407667150945
    },
    {
      "global_rank": 5101,
      "category_rank": 31,
      "domain": "colorado.edu",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 11502886.1936563,
      "curr_month_visits": 11502886.1936563,
      "unique_users": 4192282.33782802,
      "pages_per_visit": 5.29791056766434
    },
    {
      "global_rank": 187022,
      "category_rank": 31,
      "domain": "filco.es",
      "category": "Sports",
      "avg_month_visits": 334834.813133357,
      "curr_month_visits": 334834.813133357,
      "unique_users": 204622.78410261,
      "pages_per_visit": 1.62201269562453
    },
    {
      "global_rank": 9561,
      "category_rank": 31,
      "domain": "pku.edu.cn",
      "category": "Sports/Sports",
      "avg_month_visits": 5394973.04092839,
      "curr_month_visits": 5394973.04092839,
      "unique_users": 1629229.94961513,
      "pages_per_visit": 8.60789188500478
    },
    {
      "global_rank": 29879,
      "category_rank": 31,
      "domain": "extensions-hub.com",
      "category": "Sports/Golf",
      "avg_month_visits": 3339545.13625348,
      "curr_month_visits": 3339545.13625348,
      "unique_users": 1849697.25279421,
      "pages_per_visit": 1.10538992504369
    },
    {
      "global_rank": 18728,
      "category_rank": 32,
      "domain": "nationalinterest.org",
      "category": "Sports/Basketball",
      "avg_month_visits": 5123371.11208052,
      "curr_month_visits": 5123371.11208052,
      "unique_users": 2734377.53434878,
      "pages_per_visit": 1.55920835189008
    },
    {
      "global_rank": 71494,
      "category_rank": 32,
      "domain": "univ-lemans.fr",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 727607.745890656,
      "curr_month_visits": 727607.745890656,
      "unique_users": 128657.803593618,
      "pages_per_visit": 5.88437317424415
    },
    {
      "global_rank": 199617,
      "category_rank": 32,
      "domain": "izquierdazo.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 299411.783740984,
      "curr_month_visits": 299411.783740984,
      "unique_users": 169082.394961709,
      "pages_per_visit": 1.6231775993014
    },
    {
      "global_rank": 545176,
      "category_rank": 32,
      "domain": "whitmanarchive.org",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 64128.9949693281,
      "curr_month_visits": 64128.9949693281,
      "unique_users": 29531.6157065372,
      "pages_per_visit": 2.72376450095524
    },
    {
      "global_rank": 24901,
      "category_rank": 32,
      "domain": "basketnews.lt",
      "category": "Sports/Sports",
      "avg_month_visits": 3777203.67568132,
      "curr_month_visits": 3777203.67568132,
      "unique_users": 329749.007163169,
      "pages_per_visit": 2.55757934051753
    },
    {
      "global_rank": 23894,
      "category_rank": 32,
      "domain": "onleihe.de",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 1680868.72911448,
      "curr_month_visits": 1680868.72911448,
      "unique_users": 457149.636917602,
      "pages_per_visit": 9.4779553340009
    },
    {
      "global_rank": 9664,
      "category_rank": 32,
      "domain": "wordcounter.net",
      "category": "Sports/Baseball",
      "avg_month_visits": 9590631.40053309,
      "curr_month_visits": 9590631.40053309,
      "unique_users": 3682913.3931635,
      "pages_per_visit": 1.71879821410684
    },
    {
      "global_rank": 149338,
      "category_rank": 32,
      "domain": "alpin.de",
      "category": "Sports/Soccer",
      "avg_month_visits": 491178.337440031,
      "curr_month_visits": 491178.337440031,
      "unique_users": 323735.275095259,
      "pages_per_visit": 1.77790434437485
    },
    {
      "global_rank": 5115,
      "category_rank": 32,
      "domain": "ucdavis.edu",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 9820542.29292024,
      "curr_month_visits": 9820542.29292024,
      "unique_users": 2529065.72784308,
      "pages_per_visit": 6.84397422193193
    },
    {
      "global_rank": 32734,
      "category_rank": 32,
      "domain": "r-project.org",
      "category": "Sports/American_Football",
      "avg_month_visits": 2454949.93776629,
      "curr_month_visits": 2454949.93776629,
      "unique_users": 1193209.83289279,
      "pages_per_visit": 2.12507403952509
    },
    {
      "global_rank": 114175,
      "category_rank": 32,
      "domain": "kiost.ac.kr",
      "category": "Sports/Basketball",
      "avg_month_visits": 278939.288998886,
      "curr_month_visits": 278939.288998886,
      "unique_users": 39597.720324398,
      "pages_per_visit": 9.06787066676995
    },
    {
      "global_rank": 123207,
      "category_rank": 32,
      "domain": "infoclipper.net",
      "category": "Sports/Boxing",
      "avg_month_visits": 213770.042198429,
      "curr_month_visits": 213770.042198429,
      "unique_users": 28045.2026133762,
      "pages_per_visit": 21.5133295431869
    },
    {
      "global_rank": 45950,
      "category_rank": 32,
      "domain": "iris.go.kr",
      "category": "Sports",
      "avg_month_visits": 720432.042745228,
      "curr_month_visits": 720432.042745228,
      "unique_users": 208912.728003498,
      "pages_per_visit": 10.3037072548302
    },
    {
      "global_rank": 529587,
      "category_rank": 32,
      "domain": "ruverses.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 58810.0666814567,
      "curr_month_visits": 58810.0666814567,
      "unique_users": 27923.874118061,
      "pages_per_visit": 2.76653834889392
    },
    {
      "global_rank": 6694,
      "category_rank": 32,
      "domain": "meteored.com.ar",
      "category": "Sports/Sports",
      "avg_month_visits": 12571608.3664522,
      "curr_month_visits": 12571608.3664522,
      "unique_users": 3013245.80615498,
      "pages_per_visit": 1.94620944251715
    },
    {
      "global_rank": 78384,
      "category_rank": 33,
      "domain": "lbl.gov",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 685039.288586266,
      "curr_month_visits": 685039.288586266,
      "unique_users": 322841.508424956,
      "pages_per_visit": 3.32522941911351
    },
    {
      "global_rank": 552022,
      "category_rank": 33,
      "domain": "syndetics.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 66213.1154911084,
      "curr_month_visits": 66213.1154911084,
      "unique_users": 39659.5958667669,
      "pages_per_visit": 2.01617665143855
    },
    {
      "global_rank": 217543,
      "category_rank": 33,
      "domain": "communityforce.com",
      "category": "Sports",
      "avg_month_visits": 171432.879053509,
      "curr_month_visits": 171432.879053509,
      "unique_users": 79859.8922820434,
      "pages_per_visit": 6.23590095731549
    },
    {
      "global_rank": 7082,
      "category_rank": 33,
      "domain": "tiempo.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 12083986.8131182,
      "curr_month_visits": 12083986.8131182,
      "unique_users": 3926633.10547274,
      "pages_per_visit": 2.04902930177705
    },
    {
      "global_rank": 25013,
      "category_rank": 33,
      "domain": "basketball-gm.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 591901.637567312,
      "curr_month_visits": 591901.637567312,
      "unique_users": 109586.481662394,
      "pages_per_visit": 60.2376739418258
    },
    {
      "global_rank": 466719,
      "category_rank": 33,
      "domain": "fai.org",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 104472.108494198,
      "curr_month_visits": 104472.108494198,
      "unique_users": 51691.0703553153,
      "pages_per_visit": 2.08966821976396
    },
    {
      "global_rank": 18751,
      "category_rank": 33,
      "domain": "elte.hu",
      "category": "Sports/Running",
      "avg_month_visits": 2785565.66231886,
      "curr_month_visits": 2785565.66231886,
      "unique_users": 728450.323884313,
      "pages_per_visit": 6.39330430974276
    },
    {
      "global_rank": 957,
      "category_rank": 33,
      "domain": "studentaid.gov",
      "category": "Sports/American_Football",
      "avg_month_visits": 28609453.9918476,
      "curr_month_visits": 28609453.9918476,
      "unique_users": 14318957.0345799,
      "pages_per_visit": 9.89393704964486
    },
    {
      "global_rank": 36516,
      "category_rank": 33,
      "domain": "milb.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 4152520.41366238,
      "curr_month_visits": 4152520.41366238,
      "unique_users": 2022794.27288698,
      "pages_per_visit": 2.82889344543295
    },
    {
      "global_rank": 5257,
      "category_rank": 33,
      "domain": "byu.edu",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 11947207.034217,
      "curr_month_visits": 11947207.034217,
      "unique_users": 2106506.92548099,
      "pages_per_visit": 7.31782575798626
    },
    {
      "global_rank": 209183,
      "category_rank": 33,
      "domain": "pdcnet.org",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 198502.524163174,
      "curr_month_visits": 198502.524163174,
      "unique_users": 107523.098688812,
      "pages_per_visit": 2.74699083488671
    },
    {
      "global_rank": 24193,
      "category_rank": 33,
      "domain": "medialibrary.it",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 1718051.91702968,
      "curr_month_visits": 1718051.91702968,
      "unique_users": 313000.58691433,
      "pages_per_visit": 8.89507070108451
    },
    {
      "global_rank": 55127,
      "category_rank": 33,
      "domain": "indeleiderstrui.nl",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 1648022.3975889,
      "curr_month_visits": 1648022.3975889,
      "unique_users": 483052.181039161,
      "pages_per_visit": 2.3164498358874
    },
    {
      "global_rank": 546806,
      "category_rank": 33,
      "domain": "faqs.org",
      "category": "Sports/Basketball",
      "avg_month_visits": 78510.1664446295,
      "curr_month_visits": 78510.1664446295,
      "unique_users": 40923.1367216831,
      "pages_per_visit": 1.31238583092034
    },
    {
      "global_rank": 25185,
      "category_rank": 34,
      "domain": "sportando.basketball",
      "category": "Sports/Tennis",
      "avg_month_visits": 3633396.29808367,
      "curr_month_visits": 3633396.29808367,
      "unique_users": 353429.169571126,
      "pages_per_visit": 2.83412066501024
    },
    {
      "global_rank": 573166,
      "category_rank": 34,
      "domain": "geldersarchief.nl",
      "category": "Sports/Rugby",
      "avg_month_visits": 38098.2012024315,
      "curr_month_visits": 38098.2012024315,
      "unique_users": 15367.2646012642,
      "pages_per_visit": 6.18047088767132
    },
    {
      "global_rank": 563146,
      "category_rank": 34,
      "domain": "hyaenidae.narod.ru",
      "category": "Sports",
      "avg_month_visits": 75676.3173200143,
      "curr_month_visits": 75676.3173200143,
      "unique_users": 39874.9082440751,
      "pages_per_visit": 1.42926914028969
    },
    {
      "global_rank": 31338,
      "category_rank": 34,
      "domain": "packers.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 2850649.45004653,
      "curr_month_visits": 2850649.45004653,
      "unique_users": 1295669.6814822,
      "pages_per_visit": 2.15852126514963
    },
    {
      "global_rank": 9980,
      "category_rank": 34,
      "domain": "ugent.be",
      "category": "Sports/Tennis",
      "avg_month_visits": 5206273.35124236,
      "curr_month_visits": 5206273.35124236,
      "unique_users": 726360.917245958,
      "pages_per_visit": 7.70425883710353
    },
    {
      "global_rank": 80428,
      "category_rank": 34,
      "domain": "uec.ac.jp",
      "category": "Sports/Tennis",
      "avg_month_visits": 434464.319791042,
      "curr_month_visits": 434464.319791042,
      "unique_users": 195484.142504001,
      "pages_per_visit": 6.50136168448625
    },
    {
      "global_rank": 24510,
      "category_rank": 34,
      "domain": "nypl.org",
      "category": "Sports/American_Football",
      "avg_month_visits": 1959435.44538607,
      "curr_month_visits": 1959435.44538607,
      "unique_users": 1011197.85794853,
      "pages_per_visit": 5.31670349758163
    },
    {
      "global_rank": 218773,
      "category_rank": 34,
      "domain": "getafe.es",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 174300.69337906,
      "curr_month_visits": 174300.69337906,
      "unique_users": 77805.1969776869,
      "pages_per_visit": 5.2177868067992
    },
    {
      "global_rank": 19070,
      "category_rank": 34,
      "domain": "merinfo.se",
      "category": "Sports/Golf",
      "avg_month_visits": 3477314.56646704,
      "curr_month_visits": 3477314.56646704,
      "unique_users": 1534789.38954684,
      "pages_per_visit": 3.43608473211726
    },
    {
      "global_rank": 1141,
      "category_rank": 34,
      "domain": "sofascore.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 59618842.1089935,
      "curr_month_visits": 59618842.1089935,
      "unique_users": 10157137.1808537,
      "pages_per_visit": 4.05930733883635
    },
    {
      "global_rank": 154820,
      "category_rank": 34,
      "domain": "visokogorcicg.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 669609.713609593,
      "curr_month_visits": 669609.713609593,
      "unique_users": 338584.149701026,
      "pages_per_visit": 1.49633762578485
    },
    {
      "global_rank": 110630,
      "category_rank": 35,
      "domain": "runivers.ru",
      "category": "Sports/Running",
      "avg_month_visits": 283772.634552841,
      "curr_month_visits": 283772.634552841,
      "unique_users": 172374.943981169,
      "pages_per_visit": 4.73392436983345
    },
    {
      "global_rank": 25808,
      "category_rank": 35,
      "domain": "polarislibrary.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 1933631.26391659,
      "curr_month_visits": 1933631.26391659,
      "unique_users": 540611.5616857,
      "pages_per_visit": 6.62343705576142
    },
    {
      "global_rank": 5309,
      "category_rank": 35,
      "domain": "utexas.edu",
      "category": "Sports/Soccer",
      "avg_month_visits": 10600790.7077495,
      "curr_month_visits": 10600790.7077495,
      "unique_users": 2960040.73990289,
      "pages_per_visit": 5.63931871155192
    },
    {
      "global_rank": 1142,
      "category_rank": 35,
      "domain": "lequipe.fr",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 61106141.8416375,
      "curr_month_visits": 61106141.8416375,
      "unique_users": 9604520.5654219,
      "pages_per_visit": 2.83443130429804
    },
    {
      "global_rank": 10150,
      "category_rank": 35,
      "domain": "science.org",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 8003109.57973326,
      "curr_month_visits": 8003109.57973326,
      "unique_users": 3685120.10614871,
      "pages_per_visit": 2.14785586323158
    },
    {
      "global_rank": 221877,
      "category_rank": 35,
      "domain": "nopss.gov.cn",
      "category": "Sports/Climbing",
      "avg_month_visits": 206094.191077375,
      "curr_month_visits": 206094.191077375,
      "unique_users": 100329.202394069,
      "pages_per_visit": 3.2094998389719
    },
    {
      "global_rank": 7354,
      "category_rank": 35,
      "domain": "ipma.pt",
      "category": "Sports/Tennis",
      "avg_month_visits": 12293250.7407445,
      "curr_month_visits": 12293250.7407445,
      "unique_users": 1743341.99251628,
      "pages_per_visit": 2.08945492281121
    },
    {
      "global_rank": 599008,
      "category_rank": 35,
      "domain": "poems-and-quotes.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 29882.1574102095,
      "curr_month_visits": 29882.1574102095,
      "unique_users": 10407.6355074375,
      "pages_per_visit": 12.2052089374983
    },
    {
      "global_rank": 80700,
      "category_rank": 35,
      "domain": "research.gov",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 551421.51964786,
      "curr_month_visits": 551421.51964786,
      "unique_users": 135080.823415634,
      "pages_per_visit": 9.658854227685
    },
    {
      "global_rank": 235677,
      "category_rank": 35,
      "domain": "afterschoolafrica.com",
      "category": "Sports",
      "avg_month_visits": 169580.509839272,
      "curr_month_visits": 169580.509839272,
      "unique_users": 87096.6747168702,
      "pages_per_visit": 2.57902254810409
    },
    {
      "global_rank": 33583,
      "category_rank": 35,
      "domain": "weschool.com",
      "category": "Sports/Sports",
      "avg_month_visits": 1378708.11259821,
      "curr_month_visits": 1378708.11259821,
      "unique_users": 824690.070659932,
      "pages_per_visit": 4.69138135427603
    },
    {
      "global_rank": 581510,
      "category_rank": 35,
      "domain": "hetutrechtsarchief.nl",
      "category": "Sports/Fishing",
      "avg_month_visits": 46527.3860995704,
      "curr_month_visits": 46527.3860995704,
      "unique_users": 28904.4430347916,
      "pages_per_visit": 5.86017084831114
    },
    {
      "global_rank": 1158,
      "category_rank": 36,
      "domain": "skysports.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 60379868.1657864,
      "curr_month_visits": 60379868.1657864,
      "unique_users": 12816284.2308409,
      "pages_per_visit": 2.75747213043269
    },
    {
      "global_rank": 5360,
      "category_rank": 36,
      "domain": "umn.edu",
      "category": "Sports/Golf",
      "avg_month_visits": 11013172.5915327,
      "curr_month_visits": 11013172.5915327,
      "unique_users": 3777993.32942306,
      "pages_per_visit": 5.61292704981065
    },
    {
      "global_rank": 10903,
      "category_rank": 36,
      "domain": "scitechdaily.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 9418850.41213572,
      "curr_month_visits": 9418850.41213572,
      "unique_users": 5684045.83368266,
      "pages_per_visit": 1.57724740879204
    },
    {
      "global_rank": 222810,
      "category_rank": 36,
      "domain": "traficantes.net",
      "category": "Sports/Basketball",
      "avg_month_visits": 247068.403126864,
      "curr_month_visits": 247068.403126864,
      "unique_users": 152644.359910201,
      "pages_per_visit": 1.6739194908171
    },
    {
      "global_rank": 7781,
      "category_rank": 36,
      "domain": "tameteo.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 12857685.3035832,
      "curr_month_visits": 12857685.3035832,
      "unique_users": 3654152.01909353,
      "pages_per_visit": 1.9145718035312
    },
    {
      "global_rank": 118674,
      "category_rank": 36,
      "domain": "icgc.cat",
      "category": "Sports/Tennis",
      "avg_month_visits": 203565.517622735,
      "curr_month_visits": 203565.517622735,
      "unique_users": 96331.9338782277,
      "pages_per_visit": 6.82018854559974
    },
    {
      "global_rank": 628154,
      "category_rank": 36,
      "domain": "jacklynch.net",
      "category": "Sports/Fishing",
      "avg_month_visits": 35684.7842491269,
      "curr_month_visits": 35684.7842491269,
      "unique_users": 15387.5596806137,
      "pages_per_visit": 1.96498201378048
    },
    {
      "global_rank": 597579,
      "category_rank": 36,
      "domain": "regionaalarchieftilburg.nl",
      "category": "Sports/Sports",
      "avg_month_visits": 27102.184381988,
      "curr_month_visits": 27102.184381988,
      "unique_users": 12315.986026157,
      "pages_per_visit": 14.7688425376668
    },
    {
      "global_rank": 20012,
      "category_rank": 36,
      "domain": "pidruchnyk.com.ua",
      "category": "Sports/Climbing",
      "avg_month_visits": 4284000.61263836,
      "curr_month_visits": 4284000.61263836,
      "unique_users": 1231666.53182457,
      "pages_per_visit": 2.6381996645841
    },
    {
      "global_rank": 157236,
      "category_rank": 36,
      "domain": "lacrux.com",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 408566.779919358,
      "curr_month_visits": 408566.779919358,
      "unique_users": 167581.349476074,
      "pages_per_visit": 1.82672221692843
    },
    {
      "global_rank": 5366,
      "category_rank": 37,
      "domain": "illinois.edu",
      "category": "Sports/Fishing",
      "avg_month_visits": 11361978.2057743,
      "curr_month_visits": 11361978.2057743,
      "unique_users": 2582442.44673849,
      "pages_per_visit": 6.62658803423981
    },
    {
      "global_rank": 7788,
      "category_rank": 37,
      "domain": "ilmatieteenlaitos.fi",
      "category": "Sports/Tennis",
      "avg_month_visits": 12458353.3836949,
      "curr_month_visits": 12458353.3836949,
      "unique_users": 1159729.96795747,
      "pages_per_visit": 2.16946651455684
    },
    {
      "global_rank": 1166,
      "category_rank": 37,
      "domain": "sport.es",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 80903766.8550699,
      "curr_month_visits": 80903766.8550699,
      "unique_users": 10018305.321966,
      "pages_per_visit": 2.29475819068528
    },
    {
      "global_rank": 27888,
      "category_rank": 37,
      "domain": "rusneb.ru",
      "category": "Sports/Baseball",
      "avg_month_visits": 1949970.75129528,
      "curr_month_visits": 1949970.75129528,
      "unique_users": 1249646.65349289,
      "pages_per_visit": 3.09146909755698
    },
    {
      "global_rank": 91169,
      "category_rank": 37,
      "domain": "ihep.ac.cn",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 412708.87081837,
      "curr_month_visits": 412708.87081837,
      "unique_users": 78069.7118132659,
      "pages_per_visit": 7.55758547737434
    },
    {
      "global_rank": 20503,
      "category_rank": 37,
      "domain": "uw.edu.pl",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 3154744.79648801,
      "curr_month_visits": 3154744.79648801,
      "unique_users": 767816.607235483,
      "pages_per_visit": 6.41532085339078
    },
    {
      "global_rank": 611797,
      "category_rank": 37,
      "domain": "nacr.cz",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 38577.9112941749,
      "curr_month_visits": 38577.9112941749,
      "unique_users": 15969.4028028368,
      "pages_per_visit": 3.72357378608615
    },
    {
      "global_rank": 121168,
      "category_rank": 37,
      "domain": "imn.ac.cr",
      "category": "Sports/Fishing",
      "avg_month_visits": 240197.911288008,
      "curr_month_visits": 240197.911288008,
      "unique_users": 87398.2247912415,
      "pages_per_visit": 3.93451123475326
    },
    {
      "global_rank": 33995,
      "category_rank": 37,
      "domain": "emathhelp.net",
      "category": "Sports/Boxing",
      "avg_month_visits": 1857598.79649979,
      "curr_month_visits": 1857598.79649979,
      "unique_users": 900928.797954742,
      "pages_per_visit": 3.61831697294296
    },
    {
      "global_rank": 650969,
      "category_rank": 37,
      "domain": "tolstoytherapy.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 50721.4430407474,
      "curr_month_visits": 50721.4430407474,
      "unique_users": 23734.0983255978,
      "pages_per_visit": 1.68508810784208
    },
    {
      "global_rank": 33601,
      "category_rank": 38,
      "domain": "fieldgulls.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 3102579.51920755,
      "curr_month_visits": 3102579.51920755,
      "unique_users": 443100.158276762,
      "pages_per_visit": 2.43922942966504
    },
    {
      "global_rank": 28416,
      "category_rank": 38,
      "domain": "pomahach.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 1757075.50683558,
      "curr_month_visits": 1757075.50683558,
      "unique_users": 700731.150072956,
      "pages_per_visit": 3.71123500340003
    },
    {
      "global_rank": 723694,
      "category_rank": 38,
      "domain": "dunenovels.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 37368.4353397267,
      "curr_month_visits": 37368.4353397267,
      "unique_users": 20048.5194027732,
      "pages_per_visit": 1.64797765624362
    },
    {
      "global_rank": 93132,
      "category_rank": 38,
      "domain": "originlab.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 558238.874516818,
      "curr_month_visits": 558238.874516818,
      "unique_users": 297417.026013714,
      "pages_per_visit": 2.98003166812628
    },
    {
      "global_rank": 1179,
      "category_rank": 38,
      "domain": "sportskeeda.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 53166863.4976845,
      "curr_month_visits": 53166863.4976845,
      "unique_users": 26400669.7254073,
      "pages_per_visit": 2.08152208437787
    },
    {
      "global_rank": 35672,
      "category_rank": 38,
      "domain": "mathdf.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 1808078.72665828,
      "curr_month_visits": 1808078.72665828,
      "unique_users": 765219.901716767,
      "pages_per_visit": 1.99518726053083
    },
    {
      "global_rank": 22983,
      "category_rank": 38,
      "domain": "weforum.org",
      "category": "Sports/Fishing",
      "avg_month_visits": 3552498.9855481,
      "curr_month_visits": 3552498.9855481,
      "unique_users": 2343006.62437113,
      "pages_per_visit": 1.81175318701958
    },
    {
      "global_rank": 28742,
      "category_rank": 38,
      "domain": "nbcsportsbayarea.com",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 3280892.27760012,
      "curr_month_visits": 3280892.27760012,
      "unique_users": 1492661.62526501,
      "pages_per_visit": 1.48977384379756
    },
    {
      "global_rank": 11233,
      "category_rank": 38,
      "domain": "studwork.ru",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 7945213.06713713,
      "curr_month_visits": 7945213.06713713,
      "unique_users": 1034340.25366799,
      "pages_per_visit": 4.83784783614811
    },
    {
      "global_rank": 639875,
      "category_rank": 38,
      "domain": "cryptome.org",
      "category": "Sports/Boxing",
      "avg_month_visits": 73169.4101824344,
      "curr_month_visits": 73169.4101824344,
      "unique_users": 34367.0446610723,
      "pages_per_visit": 1.55942635768217
    },
    {
      "global_rank": 225237,
      "category_rank": 38,
      "domain": "teseopress.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 219577.236287789,
      "curr_month_visits": 219577.236287789,
      "unique_users": 129797.630997018,
      "pages_per_visit": 1.98638495727256
    },
    {
      "global_rank": 757676,
      "category_rank": 39,
      "domain": "americanfolklore.net",
      "category": "Sports/Golf",
      "avg_month_visits": 34194.1165231294,
      "curr_month_visits": 34194.1165231294,
      "unique_users": 20960.2832763617,
      "pages_per_visit": 2.39435644342719
    },
    {
      "global_rank": 94199,
      "category_rank": 39,
      "domain": "shanghaitech.edu.cn",
      "category": "Sports/Soccer",
      "avg_month_visits": 451705.012813717,
      "curr_month_visits": 451705.012813717,
      "unique_users": 122762.166180706,
      "pages_per_visit": 7.16325434585494
    },
    {
      "global_rank": 231253,
      "category_rank": 39,
      "domain": "aynrand.org",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 200220.965514504,
      "curr_month_visits": 200220.965514504,
      "unique_users": 90587.4496450686,
      "pages_per_visit": 2.48657467196664
    },
    {
      "global_rank": 127549,
      "category_rank": 39,
      "domain": "herodote.net",
      "category": "Sports/American_Football",
      "avg_month_visits": 461195.415128556,
      "curr_month_visits": 461195.415128556,
      "unique_users": 294574.394784921,
      "pages_per_visit": 2.13176567147939
    },
    {
      "global_rank": 23422,
      "category_rank": 39,
      "domain": "unicaen.fr",
      "category": "Sports/Tennis",
      "avg_month_visits": 2532890.88134793,
      "curr_month_visits": 2532890.88134793,
      "unique_users": 368131.01920943,
      "pages_per_visit": 5.67035261267133
    },
    {
      "global_rank": 1196,
      "category_rank": 39,
      "domain": "championat.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 51458011.0497513,
      "curr_month_visits": 51458011.0497513,
      "unique_users": 10385671.4968215,
      "pages_per_visit": 3.07339498885566
    },
    {
      "global_rank": 662388,
      "category_rank": 39,
      "domain": "cinematheque.ch",
      "category": "Sports/Running",
      "avg_month_visits": 30527.2383709422,
      "curr_month_visits": 30527.2383709422,
      "unique_users": 14695.8514717371,
      "pages_per_visit": 6.46147152759725
    },
    {
      "global_rank": 62519,
      "category_rank": 39,
      "domain": "cyclismactu.net",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 1647221.70377249,
      "curr_month_visits": 1647221.70377249,
      "unique_users": 407793.989194286,
      "pages_per_visit": 2.33048636327694
    },
    {
      "global_rank": 279273,
      "category_rank": 39,
      "domain": "dellscholars.org",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 80000.881754431,
      "curr_month_visits": 80000.881754431,
      "unique_users": 38690.0224478519,
      "pages_per_visit": 3.99800788875307
    },
    {
      "global_rank": 1715,
      "category_rank": 39,
      "domain": "chsi.com.cn",
      "category": "Sports/Sports",
      "avg_month_visits": 20174221.8532361,
      "curr_month_visits": 20174221.8532361,
      "unique_users": 7857980.25478615,
      "pages_per_visit": 10.3378507686771
    },
    {
      "global_rank": 11358,
      "category_rank": 39,
      "domain": "ted.com",
      "category": "Sports/Golf",
      "avg_month_visits": 6738387.2587104,
      "curr_month_visits": 6738387.2587104,
      "unique_users": 3795160.28479636,
      "pages_per_visit": 2.80133657470373
    },
    {
      "global_rank": 28890,
      "category_rank": 39,
      "domain": "ncl.edu.tw",
      "category": "Sports/Boxing",
      "avg_month_visits": 1840768.10455158,
      "curr_month_visits": 1840768.10455158,
      "unique_users": 842648.6211741,
      "pages_per_visit": 5.23304131579405
    },
    {
      "global_rank": 5500,
      "category_rank": 39,
      "domain": "wisc.edu",
      "category": "Sports/Volleyball",
      "avg_month_visits": 10151370.4195776,
      "curr_month_visits": 10151370.4195776,
      "unique_users": 3020004.51569476,
      "pages_per_visit": 6.56611751062495
    },
    {
      "global_rank": 81954,
      "category_rank": 40,
      "domain": "ipcc.ch",
      "category": "Sports/American_Football",
      "avg_month_visits": 654832.532034885,
      "curr_month_visits": 654832.532034885,
      "unique_users": 355220.35335112,
      "pages_per_visit": 2.71819084480149
    },
    {
      "global_rank": 36784,
      "category_rank": 40,
      "domain": "registroelettronico.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 1419641.80238,
      "curr_month_visits": 1419641.80238,
      "unique_users": 133175.273578292,
      "pages_per_visit": 4.35700763361503
    },
    {
      "global_rank": 766351,
      "category_rank": 40,
      "domain": "simplykalaa.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 47424.0193001552,
      "curr_month_visits": 47424.0193001552,
      "unique_users": 24951.5437250736,
      "pages_per_visit": 1.85415569153972
    },
    {
      "global_rank": 282069,
      "category_rank": 40,
      "domain": "oyaop.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 167890.712920931,
      "curr_month_visits": 167890.712920931,
      "unique_users": 87245.7422396801,
      "pages_per_visit": 2.34324610452745
    },
    {
      "global_rank": 233080,
      "category_rank": 40,
      "domain": "asteriskmag.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 190691.899688854,
      "curr_month_visits": 190691.899688854,
      "unique_users": 85292.4041494795,
      "pages_per_visit": 2.60101160703705
    },
    {
      "global_rank": 95783,
      "category_rank": 40,
      "domain": "imperiallondon-my.sharepoint.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 413207.769352012,
      "curr_month_visits": 413207.769352012,
      "unique_users": 59543.9495397729,
      "pages_per_visit": 5.40633050002215
    },
    {
      "global_rank": 1247,
      "category_rank": 40,
      "domain": "fubo.tv",
      "category": "Sports/Soccer",
      "avg_month_visits": 58480634.1195225,
      "curr_month_visits": 58480634.1195225,
      "unique_users": 22943718.3794919,
      "pages_per_visit": 2.48106001334325
    },
    {
      "global_rank": 691256,
      "category_rank": 40,
      "domain": "historyfiles.co.uk",
      "category": "Sports/Boxing",
      "avg_month_visits": 71092.4965648604,
      "curr_month_visits": 71092.4965648604,
      "unique_users": 36483.8166963022,
      "pages_per_visit": 2.17903907908581
    },
    {
      "global_rank": 29036,
      "category_rank": 40,
      "domain": "muzkult.ru",
      "category": "Sports",
      "avg_month_visits": 2170136.22942748,
      "curr_month_visits": 2170136.22942748,
      "unique_users": 1136591.85254203,
      "pages_per_visit": 2.69044260332255
    },
    {
      "global_rank": 11733,
      "category_rank": 40,
      "domain": "eduid.ch",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 4953059.41992615,
      "curr_month_visits": 4953059.41992615,
      "unique_users": 606405.990743379,
      "pages_per_visit": 5.02175962936877
    },
    {
      "global_rank": 96836,
      "category_rank": 41,
      "domain": "digitalschool.club",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 677493.213405157,
      "curr_month_visits": 677493.213405157,
      "unique_users": 506584.953915284,
      "pages_per_visit": 1.57545233490834
    },
    {
      "global_rank": 317142,
      "category_rank": 41,
      "domain": "clscholarship.org",
      "category": "Sports/Boxing",
      "avg_month_visits": 99520.1482575447,
      "curr_month_visits": 99520.1482575447,
      "unique_users": 41696.4151018879,
      "pages_per_visit": 3.25579289121142
    },
    {
      "global_rank": 233836,
      "category_rank": 41,
      "domain": "academyofideas.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 198199.620881428,
      "curr_month_visits": 198199.620881428,
      "unique_users": 79263.4113188559,
      "pages_per_visit": 2.88966552196406
    },
    {
      "global_rank": 36869,
      "category_rank": 41,
      "domain": "miniwebtool.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 1827691.24226948,
      "curr_month_visits": 1827691.24226948,
      "unique_users": 1147862.25288061,
      "pages_per_visit": 2.58546063936834
    },
    {
      "global_rank": 23544,
      "category_rank": 41,
      "domain": "gramota.ru",
      "category": "Sports/Golf",
      "avg_month_visits": 3368020.72119115,
      "curr_month_visits": 3368020.72119115,
      "unique_users": 1878529.0661468,
      "pages_per_visit": 2.09135804098105
    },
    {
      "global_rank": 698925,
      "category_rank": 41,
      "domain": "archives-departementales.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 44240.6182931016,
      "curr_month_visits": 44240.6182931016,
      "unique_users": 21356.6287066523,
      "pages_per_visit": 2.58214267479218
    },
    {
      "global_rank": 9402,
      "category_rank": 41,
      "domain": "weeronline.nl",
      "category": "Sports/Volleyball",
      "avg_month_visits": 12268957.493558,
      "curr_month_visits": 12268957.493558,
      "unique_users": 2386289.12682631,
      "pages_per_visit": 2.00543506910999
    },
    {
      "global_rank": 84102,
      "category_rank": 41,
      "domain": "iucnredlist.org",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 550379.283840882,
      "curr_month_visits": 550379.283840882,
      "unique_users": 272472.720502952,
      "pages_per_visit": 3.74456842255946
    },
    {
      "global_rank": 781404,
      "category_rank": 41,
      "domain": "revistaaltazor.cl",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 36351.2621978823,
      "curr_month_visits": 36351.2621978823,
      "unique_users": 19179.7631805421,
      "pages_per_visit": 2.14889587497239
    },
    {
      "global_rank": 5720,
      "category_rank": 42,
      "domain": "upenn.edu",
      "category": "Sports/Soccer",
      "avg_month_visits": 10437436.655008,
      "curr_month_visits": 10437436.655008,
      "unique_users": 3569709.32709647,
      "pages_per_visit": 5.28343108117044
    },
    {
      "global_rank": 97781,
      "category_rank": 42,
      "domain": "bnl.gov",
      "category": "Sports/Rugby",
      "avg_month_visits": 496734.701462569,
      "curr_month_visits": 496734.701462569,
      "unique_users": 138159.973489318,
      "pages_per_visit": 5.56765382694877
    },
    {
      "global_rank": 87345,
      "category_rank": 42,
      "domain": "mem.gov.cn",
      "category": "Sports/Climbing",
      "avg_month_visits": 596154.46384514,
      "curr_month_visits": 596154.46384514,
      "unique_users": 308447.224104496,
      "pages_per_visit": 4.19258110981288
    },
    {
      "global_rank": 29981,
      "category_rank": 42,
      "domain": "bibliotheek.be",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 1508288.53745407,
      "curr_month_visits": 1508288.53745407,
      "unique_users": 557011.189871476,
      "pages_per_visit": 6.19670681188408
    },
    {
      "global_rank": 11841,
      "category_rank": 42,
      "domain": "u-tokyo.ac.jp",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 4980232.61554508,
      "curr_month_visits": 4980232.61554508,
      "unique_users": 2100275.74403807,
      "pages_per_visit": 4.2978857489008
    },
    {
      "global_rank": 128909,
      "category_rank": 42,
      "domain": "neh.gov",
      "category": "Sports/American_Football",
      "avg_month_visits": 454414.219061987,
      "curr_month_visits": 454414.219061987,
      "unique_users": 231758.496790071,
      "pages_per_visit": 2.16799550019909
    },
    {
      "global_rank": 38370,
      "category_rank": 42,
      "domain": "matrixcalc.org",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 1563761.57673971,
      "curr_month_visits": 1563761.57673971,
      "unique_users": 711141.423912011,
      "pages_per_visit": 2.85170526374362
    },
    {
      "global_rank": 324035,
      "category_rank": 42,
      "domain": "tallo.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 69385.804961645,
      "curr_month_visits": 69385.804961645,
      "unique_users": 43916.6744103035,
      "pages_per_visit": 3.81829030734203
    },
    {
      "global_rank": 737140,
      "category_rank": 42,
      "domain": "arquivonacional.gov.br",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 43582.3822906043,
      "curr_month_visits": 43582.3822906043,
      "unique_users": 31339.5034160909,
      "pages_per_visit": 2.2215631033715
    },
    {
      "global_rank": 795047,
      "category_rank": 42,
      "domain": "bernardcornwell.net",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 42647.5048569065,
      "curr_month_visits": 42647.5048569065,
      "unique_users": 21189.2308656662,
      "pages_per_visit": 2.71550159085686
    },
    {
      "global_rank": 101568,
      "category_rank": 43,
      "domain": "sciencing.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 764920.558181778,
      "curr_month_visits": 764920.558181778,
      "unique_users": 555957.484348191,
      "pages_per_visit": 1.83233491572052
    },
    {
      "global_rank": 136199,
      "category_rank": 43,
      "domain": "facinghistory.org",
      "category": "Sports/Baseball",
      "avg_month_visits": 446028.078918597,
      "curr_month_visits": 446028.078918597,
      "unique_users": 274801.714943428,
      "pages_per_visit": 1.95345017422447
    },
    {
      "global_rank": 236587,
      "category_rank": 43,
      "domain": "collegemoodle.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 143177.105114374,
      "curr_month_visits": 143177.105114374,
      "unique_users": 22857.0736596602,
      "pages_per_visit": 7.25613793249905
    },
    {
      "global_rank": 116409,
      "category_rank": 43,
      "domain": "yinghua8.cc",
      "category": "Sports/Baseball",
      "avg_month_visits": 285122.588107249,
      "curr_month_visits": 285122.588107249,
      "unique_users": 94580.5269216102,
      "pages_per_visit": 3.08331117285886
    },
    {
      "global_rank": 174774,
      "category_rank": 43,
      "domain": "sherpa-gate.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 477488.002316533,
      "curr_month_visits": 477488.002316533,
      "unique_users": 83012.5954441774,
      "pages_per_visit": 3.58521398915391
    },
    {
      "global_rank": 11945,
      "category_rank": 43,
      "domain": "brainly.ph",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 7161964.49770863,
      "curr_month_visits": 7161964.49770863,
      "unique_users": 4206707.0051882,
      "pages_per_visit": 2.51118057051077
    },
    {
      "global_rank": 1318,
      "category_rank": 43,
      "domain": "tycsports.com",
      "category": "Sports/Sports",
      "avg_month_visits": 56778271.7840053,
      "curr_month_visits": 56778271.7840053,
      "unique_users": 19838728.657313,
      "pages_per_visit": 1.92108835365775
    },
    {
      "global_rank": 823417,
      "category_rank": 43,
      "domain": "literarysomnia.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 46883.1982572196,
      "curr_month_visits": 46883.1982572196,
      "unique_users": 24709.8642194186,
      "pages_per_visit": 2.51797192535512
    },
    {
      "global_rank": 38624,
      "category_rank": 43,
      "domain": "calculator.academy",
      "category": "Sports/Basketball",
      "avg_month_visits": 2189516.31756506,
      "curr_month_visits": 2189516.31756506,
      "unique_users": 1546011.40764741,
      "pages_per_visit": 1.81821726376854
    },
    {
      "global_rank": 534026,
      "category_rank": 43,
      "domain": "xcskies.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 109856.038609028,
      "curr_month_visits": 109856.038609028,
      "unique_users": 22864.4336995414,
      "pages_per_visit": 2.67132583942728
    },
    {
      "global_rank": 91865,
      "category_rank": 44,
      "domain": "slu.se",
      "category": "Sports/American_Football",
      "avg_month_visits": 666407.338604742,
      "curr_month_visits": 666407.338604742,
      "unique_users": 186320.231101533,
      "pages_per_visit": 3.74183839190574
    },
    {
      "global_rank": 238792,
      "category_rank": 44,
      "domain": "alianzaeditorial.es",
      "category": "Sports/Climbing",
      "avg_month_visits": 206559.853266895,
      "curr_month_visits": 206559.853266895,
      "unique_users": 128676.509544462,
      "pages_per_visit": 2.13708360860332
    },
    {
      "global_rank": 1323,
      "category_rank": 44,
      "domain": "yr.no",
      "category": "Sports/Soccer",
      "avg_month_visits": 59216174.3063236,
      "curr_month_visits": 59216174.3063236,
      "unique_users": 6770006.88055554,
      "pages_per_visit": 2.52928934523886
    },
    {
      "global_rank": 343095,
      "category_rank": 44,
      "domain": "elmin7a.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 121915.504657151,
      "curr_month_visits": 121915.504657151,
      "unique_users": 66395.3834051514,
      "pages_per_visit": 3.33391482719307
    },
    {
      "global_rank": 53529,
      "category_rank": 44,
      "domain": "mlbbox.me",
      "category": "Sports/Volleyball",
      "avg_month_visits": 2956818.94796987,
      "curr_month_visits": 2956818.94796987,
      "unique_users": 598225.673082017,
      "pages_per_visit": 3.32456711195491
    },
    {
      "global_rank": 103085,
      "category_rank": 44,
      "domain": "simpleclub.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 445345.59364424,
      "curr_month_visits": 445345.59364424,
      "unique_users": 297052.945730979,
      "pages_per_visit": 2.62690508850646
    },
    {
      "global_rank": 127312,
      "category_rank": 44,
      "domain": "shiyanjia.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 262074.265688438,
      "curr_month_visits": 262074.265688438,
      "unique_users": 86511.2197803563,
      "pages_per_visit": 5.27517963534948
    },
    {
      "global_rank": 24404,
      "category_rank": 44,
      "domain": "fastighetsbyran.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 3585456.2538182,
      "curr_month_visits": 3585456.2538182,
      "unique_users": 1018949.40522012,
      "pages_per_visit": 2.11656281127008
    },
    {
      "global_rank": 852467,
      "category_rank": 44,
      "domain": "ilpalio.siena.it",
      "category": "Sports/Rugby",
      "avg_month_visits": 29103.922358864,
      "curr_month_visits": 29103.922358864,
      "unique_users": 12797.9925535268,
      "pages_per_visit": 7.17338442366657
    },
    {
      "global_rank": 30695,
      "category_rank": 44,
      "domain": "nla.gov.au",
      "category": "Sports/Rugby",
      "avg_month_visits": 1446914.89794379,
      "curr_month_visits": 1446914.89794379,
      "unique_users": 794082.66355271,
      "pages_per_visit": 6.42737946831779
    },
    {
      "global_rank": 37777,
      "category_rank": 44,
      "domain": "arrowheadpride.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 2390183.20181946,
      "curr_month_visits": 2390183.20181946,
      "unique_users": 476735.306878269,
      "pages_per_visit": 1.94734394378944
    },
    {
      "global_rank": 349686,
      "category_rank": 45,
      "domain": "iefa.org",
      "category": "Sports/Baseball",
      "avg_month_visits": 138270.59450153,
      "curr_month_visits": 138270.59450153,
      "unique_users": 66265.8055669853,
      "pages_per_visit": 3.51238111145255
    },
    {
      "global_rank": 38426,
      "category_rank": 45,
      "domain": "sen.com.au",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 3051261.00409889,
      "curr_month_visits": 3051261.00409889,
      "unique_users": 549031.566340284,
      "pages_per_visit": 2.87476073318062
    },
    {
      "global_rank": 242796,
      "category_rank": 45,
      "domain": "uaw.edu.ec",
      "category": "Sports/Boxing",
      "avg_month_visits": 69750.5845756156,
      "curr_month_visits": 69750.5845756156,
      "unique_users": 16601.2731948407,
      "pages_per_visit": 10.6308296131752
    },
    {
      "global_rank": 5851,
      "category_rank": 45,
      "domain": "virdocs.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 5028596.66244476,
      "curr_month_visits": 5028596.66244476,
      "unique_users": 678252.206209531,
      "pages_per_visit": 43.2330925706042
    },
    {
      "global_rank": 103452,
      "category_rank": 45,
      "domain": "fisicalab.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 635629.428665652,
      "curr_month_visits": 635629.428665652,
      "unique_users": 400569.251053816,
      "pages_per_visit": 1.86549432321169
    },
    {
      "global_rank": 13488,
      "category_rank": 45,
      "domain": "stayfocusd.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 6890253.08099466,
      "curr_month_visits": 6890253.08099466,
      "unique_users": 742762.905582936,
      "pages_per_visit": 2.43654259290605
    },
    {
      "global_rank": 136998,
      "category_rank": 45,
      "domain": "gilderlehrman.org",
      "category": "Sports",
      "avg_month_visits": 475777.266288883,
      "curr_month_visits": 475777.266288883,
      "unique_users": 290554.997622075,
      "pages_per_visit": 1.79132187537103
    },
    {
      "global_rank": 93359,
      "category_rank": 46,
      "domain": "ibict.br",
      "category": "Sports/Climbing",
      "avg_month_visits": 572521.413513146,
      "curr_month_visits": 572521.413513146,
      "unique_users": 389180.180119328,
      "pages_per_visit": 2.6544109644748
    },
    {
      "global_rank": 135038,
      "category_rank": 46,
      "domain": "cgs.gov.cn",
      "category": "Sports/Boxing",
      "avg_month_visits": 263884.715732012,
      "curr_month_visits": 263884.715732012,
      "unique_users": 102787.380230357,
      "pages_per_visit": 4.97529244655342
    },
    {
      "global_rank": 13525,
      "category_rank": 46,
      "domain": "taylorfrancis.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 5657940.85976575,
      "curr_month_visits": 5657940.85976575,
      "unique_users": 3080481.66622672,
      "pages_per_visit": 2.33155278457636
    },
    {
      "global_rank": 107878,
      "category_rank": 46,
      "domain": "tifr.res.in",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 517823.333574477,
      "curr_month_visits": 517823.333574477,
      "unique_users": 219361.927058319,
      "pages_per_visit": 4.15446941976221
    },
    {
      "global_rank": 138354,
      "category_rank": 46,
      "domain": "konflikty.pl",
      "category": "Sports/Basketball",
      "avg_month_visits": 420917.401216191,
      "curr_month_visits": 420917.401216191,
      "unique_users": 100485.048199947,
      "pages_per_visit": 2.30453776785181
    },
    {
      "global_rank": 248354,
      "category_rank": 46,
      "domain": "filosofia.org",
      "category": "Sports/Basketball",
      "avg_month_visits": 249376.81616706,
      "curr_month_visits": 249376.81616706,
      "unique_users": 154041.294033312,
      "pages_per_visit": 1.54899546030805
    },
    {
      "global_rank": 57202,
      "category_rank": 46,
      "domain": "draft-repo.com",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 2695106.46855429,
      "curr_month_visits": 2695106.46855429,
      "unique_users": 786333.675695329,
      "pages_per_visit": 2.98659446066707
    },
    {
      "global_rank": 961028,
      "category_rank": 46,
      "domain": "archiefalkmaar.nl",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 24331.9752676947,
      "curr_month_visits": 24331.9752676947,
      "unique_users": 11006.4795450179,
      "pages_per_visit": 8.01941733007588
    },
    {
      "global_rank": 248816,
      "category_rank": 47,
      "domain": "euppublishing.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 174510.468834172,
      "curr_month_visits": 174510.468834172,
      "unique_users": 95230.0696437315,
      "pages_per_visit": 2.2928623934267
    },
    {
      "global_rank": 33031,
      "category_rank": 47,
      "domain": "louvre.fr",
      "category": "Sports/Climbing",
      "avg_month_visits": 1750529.99610939,
      "curr_month_visits": 1750529.99610939,
      "unique_users": 969291.365816012,
      "pages_per_visit": 2.83886358196975
    },
    {
      "global_rank": 994006,
      "category_rank": 47,
      "domain": "nationalarchives.nic.in",
      "category": "Sports/Soccer",
      "avg_month_visits": 27980.194750619,
      "curr_month_visits": 27980.194750619,
      "unique_users": 18490.0539466983,
      "pages_per_visit": 2.60135660643905
    },
    {
      "global_rank": 882866,
      "category_rank": 47,
      "domain": "surlalunefairytales.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 39071.1770781964,
      "curr_month_visits": 39071.1770781964,
      "unique_users": 20135.3763076674,
      "pages_per_visit": 1.94591887514346
    },
    {
      "global_rank": 364355,
      "category_rank": 47,
      "domain": "scholarshipamerica.org",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 93508.7972080233,
      "curr_month_visits": 93508.7972080233,
      "unique_users": 58965.9761512214,
      "pages_per_visit": 1.81593010296957
    },
    {
      "global_rank": 40248,
      "category_rank": 48,
      "domain": "bloggingtheboys.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 2400702.47168863,
      "curr_month_visits": 2400702.47168863,
      "unique_users": 512811.209544394,
      "pages_per_visit": 2.25876636043807
    },
    {
      "global_rank": 253653,
      "category_rank": 48,
      "domain": "puter.com",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 141542.70762452,
      "curr_month_visits": 141542.70762452,
      "unique_users": 73734.7996986128,
      "pages_per_visit": 3.04926162986869
    },
    {
      "global_rank": 6164,
      "category_rank": 48,
      "domain": "tamu.edu",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 10148060.0007418,
      "curr_month_visits": 10148060.0007418,
      "unique_users": 1987212.52301778,
      "pages_per_visit": 6.28603735090551
    },
    {
      "global_rank": 33078,
      "category_rank": 48,
      "domain": "nlb.gov.sg",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 1660604.52104315,
      "curr_month_visits": 1660604.52104315,
      "unique_users": 585078.917350059,
      "pages_per_visit": 5.27249277597296
    },
    {
      "global_rank": 907213,
      "category_rank": 48,
      "domain": "thebookbag.co.uk",
      "category": "Sports/Boxing",
      "avg_month_visits": 50190.2444231577,
      "curr_month_visits": 50190.2444231577,
      "unique_users": 26659.944645148,
      "pages_per_visit": 1.5330643132306
    },
    {
      "global_rank": 1026974,
      "category_rank": 48,
      "domain": "kshs.org",
      "category": "Sports/Tennis",
      "avg_month_visits": 26882.3545419185,
      "curr_month_visits": 26882.3545419185,
      "unique_users": 16480.9818768576,
      "pages_per_visit": 3.35690911529506
    },
    {
      "global_rank": 41159,
      "category_rank": 48,
      "domain": "posit.co",
      "category": "Sports/Boxing",
      "avg_month_visits": 1932724.33776299,
      "curr_month_visits": 1932724.33776299,
      "unique_users": 1114456.5531103,
      "pages_per_visit": 2.16067256836014
    },
    {
      "global_rank": 399444,
      "category_rank": 48,
      "domain": "worldscholarshipforum.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 66289.0830979316,
      "curr_month_visits": 66289.0830979316,
      "unique_users": 39423.2644663972,
      "pages_per_visit": 1.892159359653
    },
    {
      "global_rank": 134409,
      "category_rank": 49,
      "domain": "formulacionquimica.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 259515.223230307,
      "curr_month_visits": 259515.223230307,
      "unique_users": 137857.827903735,
      "pages_per_visit": 5.87161203434116
    },
    {
      "global_rank": 26106,
      "category_rank": 49,
      "domain": "esri.com",
      "category": "Sports/Sports",
      "avg_month_visits": 2663540.03377525,
      "curr_month_visits": 2663540.03377525,
      "unique_users": 1251481.7703874,
      "pages_per_visit": 3.31124727222649
    },
    {
      "global_rank": 14374,
      "category_rank": 49,
      "domain": "howstuffworks.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 6016654.28215618,
      "curr_month_visits": 6016654.28215618,
      "unique_users": 4551411.80735771,
      "pages_per_visit": 1.64282179936449
    },
    {
      "global_rank": 1300,
      "category_rank": 49,
      "domain": "sdamgia.ru",
      "category": "Sports",
      "avg_month_visits": 29541775.9947106,
      "curr_month_visits": 29541775.9947106,
      "unique_users": 6683296.74331296,
      "pages_per_visit": 5.71674569606099
    },
    {
      "global_rank": 409308,
      "category_rank": 49,
      "domain": "geezjobs.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 81882.5431510633,
      "curr_month_visits": 81882.5431510633,
      "unique_users": 28045.0092039651,
      "pages_per_visit": 4.63213882491912
    },
    {
      "global_rank": 925519,
      "category_rank": 49,
      "domain": "rialta.org",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 39299.1289727031,
      "curr_month_visits": 39299.1289727031,
      "unique_users": 19446.60873204,
      "pages_per_visit": 1.64256843461227
    },
    {
      "global_rank": 140147,
      "category_rank": 49,
      "domain": "thelatinlibrary.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 283489.85668333,
      "curr_month_visits": 283489.85668333,
      "unique_users": 122353.731070635,
      "pages_per_visit": 3.6653638735641
    },
    {
      "global_rank": 34771,
      "category_rank": 49,
      "domain": "librarything.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 1384823.77067418,
      "curr_month_visits": 1384823.77067418,
      "unique_users": 739547.146202784,
      "pages_per_visit": 5.07938421984805
    },
    {
      "global_rank": 97152,
      "category_rank": 49,
      "domain": "pan.pl",
      "category": "Sports/Golf",
      "avg_month_visits": 477306.582761305,
      "curr_month_visits": 477306.582761305,
      "unique_users": 261539.858819899,
      "pages_per_visit": 5.22556436718633
    },
    {
      "global_rank": 150876,
      "category_rank": 50,
      "domain": "ecam.be",
      "category": "Sports/Baseball",
      "avg_month_visits": 230280.528710996,
      "curr_month_visits": 230280.528710996,
      "unique_users": 18612.335282689,
      "pages_per_visit": 9.2220934641637
    },
    {
      "global_rank": 34780,
      "category_rank": 50,
      "domain": "britishmuseum.org",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 1557554.3611033,
      "curr_month_visits": 1557554.3611033,
      "unique_users": 962473.451234733,
      "pages_per_visit": 3.59196841502495
    },
    {
      "global_rank": 11968,
      "category_rank": 50,
      "domain": "foxweather.com",
      "category": "Sports/Running",
      "avg_month_visits": 14229862.0470625,
      "curr_month_visits": 14229862.0470625,
      "unique_users": 7880411.75709821,
      "pages_per_visit": 1.59343749471949
    },
    {
      "global_rank": 97531,
      "category_rank": 50,
      "domain": "climate.gov",
      "category": "Sports",
      "avg_month_visits": 715092.887472244,
      "curr_month_visits": 715092.887472244,
      "unique_users": 473318.991943012,
      "pages_per_visit": 1.77553988472472
    },
    {
      "global_rank": 257601,
      "category_rank": 50,
      "domain": "newbooksnetwork.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 194580.736234314,
      "curr_month_visits": 194580.736234314,
      "unique_users": 78449.6029661906,
      "pages_per_visit": 2.39509675689309
    },
    {
      "global_rank": 42084,
      "category_rank": 50,
      "domain": "matemaks.pl",
      "category": "Sports/Sports",
      "avg_month_visits": 1365001.36157408,
      "curr_month_visits": 1365001.36157408,
      "unique_users": 604299.94568095,
      "pages_per_visit": 2.58862238797994
    },
    {
      "global_rank": 948699,
      "category_rank": 50,
      "domain": "universolorca.com",
      "category": "Sports/Running",
      "avg_month_visits": 28892.4635687492,
      "curr_month_visits": 28892.4635687492,
      "unique_users": 18342.60557191,
      "pages_per_visit": 1.8954394720636
    },
    {
      "global_rank": 412429,
      "category_rank": 50,
      "domain": "msmathscience-my.sharepoint.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 71003.7337714473,
      "curr_month_visits": 71003.7337714473,
      "unique_users": 14607.7603776386,
      "pages_per_visit": 3.38433981356309
    },
    {
      "global_rank": 39087,
      "category_rank": 50,
      "domain": "erigu.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 8955653.6038434,
      "curr_month_visits": 8955653.6038434,
      "unique_users": 1247950.00011068,
      "pages_per_visit": 5.82269043243291
    },
    {
      "global_rank": 112823,
      "category_rank": 50,
      "domain": "thequantuminsider.com",
      "category": "Sports/Golf",
      "avg_month_visits": 580347.018239618,
      "curr_month_visits": 580347.018239618,
      "unique_users": 281199.41286587,
      "pages_per_visit": 1.67921004628546
    },
    {
      "global_rank": 61388,
      "category_rank": 51,
      "domain": "paris-saclay.fr",
      "category": "Sports/Fishing",
      "avg_month_visits": 624971.066207923,
      "curr_month_visits": 624971.066207923,
      "unique_users": 78718.3223270719,
      "pages_per_visit": 6.44882935257162
    },
    {
      "global_rank": 142111,
      "category_rank": 51,
      "domain": "rah.es",
      "category": "Sports/Baseball",
      "avg_month_visits": 446105.566261164,
      "curr_month_visits": 446105.566261164,
      "unique_users": 278423.155357533,
      "pages_per_visit": 1.78164434953455
    },
    {
      "global_rank": 35483,
      "category_rank": 51,
      "domain": "thecollector.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 1850536.81382734,
      "curr_month_visits": 1850536.81382734,
      "unique_users": 1129615.46377322,
      "pages_per_visit": 2.24133637665973
    },
    {
      "global_rank": 42487,
      "category_rank": 51,
      "domain": "univ-toulouse.fr",
      "category": "Sports/Tennis",
      "avg_month_visits": 1356036.42992951,
      "curr_month_visits": 1356036.42992951,
      "unique_users": 214655.790282182,
      "pages_per_visit": 4.65197106908807
    },
    {
      "global_rank": 1068883,
      "category_rank": 51,
      "domain": "bookishelf.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 24816.2812558029,
      "curr_month_visits": 24816.2812558029,
      "unique_users": 11588.8642511381,
      "pages_per_visit": 2.83006642878938
    },
    {
      "global_rank": 607238,
      "category_rank": 51,
      "domain": "strim-co.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 26368.2243941113,
      "curr_month_visits": 26368.2243941113,
      "unique_users": 12704.7870129065,
      "pages_per_visit": 14.1338532130558
    },
    {
      "global_rank": 35568,
      "category_rank": 52,
      "domain": "momot.rs",
      "category": "Sports/Basketball",
      "avg_month_visits": 1864653.05730597,
      "curr_month_visits": 1864653.05730597,
      "unique_users": 810690.746081335,
      "pages_per_visit": 2.18425555361472
    },
    {
      "global_rank": 2154,
      "category_rank": 52,
      "domain": "brainly.co.id",
      "category": "Sports/Climbing",
      "avg_month_visits": 23562570.4621982,
      "curr_month_visits": 23562570.4621982,
      "unique_users": 9722012.38333658,
      "pages_per_visit": 4.32569275693216
    },
    {
      "global_rank": 157348,
      "category_rank": 52,
      "domain": "libra.jpn.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 162042.251361324,
      "curr_month_visits": 162042.251361324,
      "unique_users": 57498.0301570894,
      "pages_per_visit": 9.98450261253739
    },
    {
      "global_rank": 150464,
      "category_rank": 52,
      "domain": "historynet.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 385836.172512996,
      "curr_month_visits": 385836.172512996,
      "unique_users": 243201.917196117,
      "pages_per_visit": 1.64993424513161
    },
    {
      "global_rank": 137979,
      "category_rank": 52,
      "domain": "hitachi-hightech.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 264185.130150232,
      "curr_month_visits": 264185.130150232,
      "unique_users": 149624.144480462,
      "pages_per_visit": 6.01646498632614
    },
    {
      "global_rank": 1092053,
      "category_rank": 52,
      "domain": "lambdaliterary.org",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 39004.9626170448,
      "curr_month_visits": 39004.9626170448,
      "unique_users": 22081.7219815437,
      "pages_per_visit": 1.95972878146144
    },
    {
      "global_rank": 100151,
      "category_rank": 52,
      "domain": "ajol.info",
      "category": "Sports/Boxing",
      "avg_month_visits": 596744.204057883,
      "curr_month_visits": 596744.204057883,
      "unique_users": 337313.714760877,
      "pages_per_visit": 2.13030650238998
    },
    {
      "global_rank": 119031,
      "category_rank": 53,
      "domain": "cfd-online.com",
      "category": "Sports/Running",
      "avg_month_visits": 471374.050491414,
      "curr_month_visits": 471374.050491414,
      "unique_users": 195054.802841161,
      "pages_per_visit": 2.3376117884626
    },
    {
      "global_rank": 285231,
      "category_rank": 53,
      "domain": "euston96.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 242483.0155312,
      "curr_month_visits": 242483.0155312,
      "unique_users": 155273.767634566,
      "pages_per_visit": 1.48486237232003
    },
    {
      "global_rank": 159746,
      "category_rank": 53,
      "domain": "iwasaki.ac.jp",
      "category": "Sports/Basketball",
      "avg_month_visits": 216729.218519527,
      "curr_month_visits": 216729.218519527,
      "unique_users": 35142.5985239584,
      "pages_per_visit": 7.65634984373451
    },
    {
      "global_rank": 14964,
      "category_rank": 53,
      "domain": "typeset.io",
      "category": "Sports/Volleyball",
      "avg_month_visits": 5141287.02139456,
      "curr_month_visits": 5141287.02139456,
      "unique_users": 2200230.77380891,
      "pages_per_visit": 3.40794517034718
    },
    {
      "global_rank": 456436,
      "category_rank": 53,
      "domain": "cdm.edu.eg",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 88860.4137915373,
      "curr_month_visits": 88860.4137915373,
      "unique_users": 28281.1553851121,
      "pages_per_visit": 4.05742016016874
    },
    {
      "global_rank": 153983,
      "category_rank": 53,
      "domain": "nzhistory.govt.nz",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 375397.756278387,
      "curr_month_visits": 375397.756278387,
      "unique_users": 223985.754056078,
      "pages_per_visit": 1.87178109979853
    },
    {
      "global_rank": 102834,
      "category_rank": 53,
      "domain": "ambiente.gob.ec",
      "category": "Sports/Volleyball",
      "avg_month_visits": 420351.428746033,
      "curr_month_visits": 420351.428746033,
      "unique_users": 168959.613846821,
      "pages_per_visit": 5.17935418105041
    },
    {
      "global_rank": 6493,
      "category_rank": 53,
      "domain": "ufl.edu",
      "category": "Sports/Golf",
      "avg_month_visits": 11319067.465705,
      "curr_month_visits": 11319067.465705,
      "unique_users": 3138772.89195793,
      "pages_per_visit": 3.91052889928247
    },
    {
      "global_rank": 140906,
      "category_rank": 53,
      "domain": "nitech.ac.jp",
      "category": "Sports/Basketball",
      "avg_month_visits": 275377.479660298,
      "curr_month_visits": 275377.479660298,
      "unique_users": 73284.6729801053,
      "pages_per_visit": 5.62979942150073
    },
    {
      "global_rank": 47258,
      "category_rank": 53,
      "domain": "calcio.buzz",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 5469923.95827468,
      "curr_month_visits": 5469923.95827468,
      "unique_users": 1283986.7446359,
      "pages_per_visit": 3.04153707758694
    },
    {
      "global_rank": 36227,
      "category_rank": 53,
      "domain": "vam.ac.uk",
      "category": "Sports/Sports",
      "avg_month_visits": 1377528.63986577,
      "curr_month_visits": 1377528.63986577,
      "unique_users": 841227.37431174,
      "pages_per_visit": 4.43627775477285
    },
    {
      "global_rank": 1186712,
      "category_rank": 53,
      "domain": "delanceyplace.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 24713.3293912449,
      "curr_month_visits": 24713.3293912449,
      "unique_users": 5734.35796002739,
      "pages_per_visit": 2.55877693464574
    },
    {
      "global_rank": 155032,
      "category_rank": 53,
      "domain": "ideam.gov.co",
      "category": "Sports/Baseball",
      "avg_month_visits": 292150.920525454,
      "curr_month_visits": 292150.920525454,
      "unique_users": 151263.489100072,
      "pages_per_visit": 3.34631119869176
    },
    {
      "global_rank": 1106728,
      "category_rank": 53,
      "domain": "bookishwayfarer.com",
      "category": "Sports/Golf",
      "avg_month_visits": 30625.3241909931,
      "curr_month_visits": 30625.3241909931,
      "unique_users": 17065.3419593855,
      "pages_per_visit": 1.52172289175876
    },
    {
      "global_rank": 1158797,
      "category_rank": 54,
      "domain": "chinesefolklore.org.cn",
      "category": "Sports/Soccer",
      "avg_month_visits": 27827.8198578387,
      "curr_month_visits": 27827.8198578387,
      "unique_users": 15334.4487657321,
      "pages_per_visit": 1.77895738464593
    },
    {
      "global_rank": 64672,
      "category_rank": 54,
      "domain": "kumamoto-u.ac.jp",
      "category": "Sports/Fishing",
      "avg_month_visits": 619726.664108537,
      "curr_month_visits": 619726.664108537,
      "unique_users": 209704.438354382,
      "pages_per_visit": 7.02890650028623
    },
    {
      "global_rank": 285392,
      "category_rank": 54,
      "domain": "philosophybreak.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 194041.554109446,
      "curr_month_visits": 194041.554109446,
      "unique_users": 95266.0674495496,
      "pages_per_visit": 1.83817349626875
    },
    {
      "global_rank": 104890,
      "category_rank": 54,
      "domain": "wwf.org.uk",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 552430.872783322,
      "curr_month_visits": 552430.872783322,
      "unique_users": 350573.221234786,
      "pages_per_visit": 2.00986928442486
    },
    {
      "global_rank": 157550,
      "category_rank": 54,
      "domain": "ogimet.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 231550.945334691,
      "curr_month_visits": 231550.945334691,
      "unique_users": 62339.8755030322,
      "pages_per_visit": 6.24834050342859
    },
    {
      "global_rank": 44069,
      "category_rank": 54,
      "domain": "studydrive.net",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 1314031.45713281,
      "curr_month_visits": 1314031.45713281,
      "unique_users": 280462.14025626,
      "pages_per_visit": 5.2910390856251
    },
    {
      "global_rank": 2210,
      "category_rank": 54,
      "domain": "brainly.com.br",
      "category": "Sports/Tennis",
      "avg_month_visits": 19964283.6952517,
      "curr_month_visits": 19964283.6952517,
      "unique_users": 9487366.02499867,
      "pages_per_visit": 5.07466618603791
    },
    {
      "global_rank": 36347,
      "category_rank": 54,
      "domain": "izzi.digital",
      "category": "Sports/Running",
      "avg_month_visits": 1409604.48609886,
      "curr_month_visits": 1409604.48609886,
      "unique_users": 446789.158433181,
      "pages_per_visit": 4.99188185548508
    },
    {
      "global_rank": 160620,
      "category_rank": 54,
      "domain": "mkgandhi.org",
      "category": "Sports/Soccer",
      "avg_month_visits": 276483.392691498,
      "curr_month_visits": 276483.392691498,
      "unique_users": 168761.501066548,
      "pages_per_visit": 2.60043872164901
    },
    {
      "global_rank": 119494,
      "category_rank": 54,
      "domain": "zftsh.online",
      "category": "Sports/Volleyball",
      "avg_month_visits": 430127.378376316,
      "curr_month_visits": 430127.378376316,
      "unique_users": 121499.210406047,
      "pages_per_visit": 4.49005529581711
    },
    {
      "global_rank": 1764,
      "category_rank": 55,
      "domain": "ole.com.ar",
      "category": "Sports/Volleyball",
      "avg_month_visits": 54444160.5035832,
      "curr_month_visits": 54444160.5035832,
      "unique_users": 9572108.53628984,
      "pages_per_visit": 1.77181916422841
    },
    {
      "global_rank": 162908,
      "category_rank": 55,
      "domain": "senamhi.gob.pe",
      "category": "Sports",
      "avg_month_visits": 310076.693345142,
      "curr_month_visits": 310076.693345142,
      "unique_users": 140659.305478134,
      "pages_per_visit": 2.71937175476426
    },
    {
      "global_rank": 36464,
      "category_rank": 55,
      "domain": "nls.uk",
      "category": "Sports/Boxing",
      "avg_month_visits": 627855.57296252,
      "curr_month_visits": 627855.57296252,
      "unique_users": 278856.659745292,
      "pages_per_visit": 28.5607942346394
    },
    {
      "global_rank": 45457,
      "category_rank": 55,
      "domain": "bibmath.net",
      "category": "Sports/Running",
      "avg_month_visits": 1500739.52656413,
      "curr_month_visits": 1500739.52656413,
      "unique_users": 566938.531780316,
      "pages_per_visit": 2.10289132365189
    },
    {
      "global_rank": 297772,
      "category_rank": 55,
      "domain": "thepointmag.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 155030.558212486,
      "curr_month_visits": 155030.558212486,
      "unique_users": 79556.5312818307,
      "pages_per_visit": 2.12053120373863
    },
    {
      "global_rank": 162678,
      "category_rank": 55,
      "domain": "dp.la",
      "category": "Sports/Volleyball",
      "avg_month_visits": 267198.616334012,
      "curr_month_visits": 267198.616334012,
      "unique_users": 164522.41170926,
      "pages_per_visit": 3.15372670846344
    },
    {
      "global_rank": 90802,
      "category_rank": 55,
      "domain": "guardianbikes.com",
      "category": "Sports/Golf",
      "avg_month_visits": 385297.834347373,
      "curr_month_visits": 385297.834347373,
      "unique_users": 204254.000287285,
      "pages_per_visit": 3.53235540170911
    },
    {
      "global_rank": 46043,
      "category_rank": 56,
      "domain": "somatematica.com.br",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 1563100.1711247,
      "curr_month_visits": 1563100.1711247,
      "unique_users": 614458.66696354,
      "pages_per_visit": 2.70136574858743
    },
    {
      "global_rank": 107534,
      "category_rank": 56,
      "domain": "panda.org",
      "category": "Sports/Basketball",
      "avg_month_visits": 629136.719126095,
      "curr_month_visits": 629136.719126095,
      "unique_users": 360550.384197358,
      "pages_per_visit": 1.7149585256757
    },
    {
      "global_rank": 495653,
      "category_rank": 56,
      "domain": "nitrocollege.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 99343.1807329812,
      "curr_month_visits": 99343.1807329812,
      "unique_users": 66677.0374682923,
      "pages_per_visit": 1.85893447821478
    },
    {
      "global_rank": 163279,
      "category_rank": 56,
      "domain": "archives.go.jp",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 301704.051846171,
      "curr_month_visits": 301704.051846171,
      "unique_users": 185789.762350337,
      "pages_per_visit": 3.76875066118809
    },
    {
      "global_rank": 15387,
      "category_rank": 57,
      "domain": "thecalculatorsite.com",
      "category": "Sports/Running",
      "avg_month_visits": 5551477.66444846,
      "curr_month_visits": 5551477.66444846,
      "unique_users": 3206479.13156253,
      "pages_per_visit": 1.83893950657365
    },
    {
      "global_rank": 66908,
      "category_rank": 57,
      "domain": "confex.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 672329.968138497,
      "curr_month_visits": 672329.968138497,
      "unique_users": 307009.411266651,
      "pages_per_visit": 5.00179690221243
    },
    {
      "global_rank": 165403,
      "category_rank": 57,
      "domain": "brgm.fr",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 252370.677329962,
      "curr_month_visits": 252370.677329962,
      "unique_users": 152414.740738307,
      "pages_per_visit": 3.24764325334145
    },
    {
      "global_rank": 38733,
      "category_rank": 57,
      "domain": "tate.org.uk",
      "category": "Sports/Fishing",
      "avg_month_visits": 1630332.52607383,
      "curr_month_visits": 1630332.52607383,
      "unique_users": 1000489.75778164,
      "pages_per_visit": 2.87007721890451
    },
    {
      "global_rank": 495928,
      "category_rank": 57,
      "domain": "tmcf.org",
      "category": "Sports/Sports",
      "avg_month_visits": 63762.5212545068,
      "curr_month_visits": 63762.5212545068,
      "unique_users": 34401.2184773835,
      "pages_per_visit": 3.31881570749747
    },
    {
      "global_rank": 46370,
      "category_rank": 57,
      "domain": "linewize.net",
      "category": "Sports/Golf",
      "avg_month_visits": 1589582.88300391,
      "curr_month_visits": 1589582.88300391,
      "unique_users": 382339.944924859,
      "pages_per_visit": 2.37425610212951
    },
    {
      "global_rank": 1988,
      "category_rank": 57,
      "domain": "mlb.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 98173527.8766052,
      "curr_month_visits": 98173527.8766052,
      "unique_users": 22682158.391188,
      "pages_per_visit": 3.28692225024511
    },
    {
      "global_rank": 304015,
      "category_rank": 57,
      "domain": "alignmentforum.org",
      "category": "Sports/Soccer",
      "avg_month_visits": 160723.198232921,
      "curr_month_visits": 160723.198232921,
      "unique_users": 58256.2400910755,
      "pages_per_visit": 2.65508256111795
    },
    {
      "global_rank": 2320,
      "category_rank": 57,
      "domain": "tandfonline.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 22094178.5146334,
      "curr_month_visits": 22094178.5146334,
      "unique_users": 9625616.95441144,
      "pages_per_visit": 4.03879689787529
    },
    {
      "global_rank": 164387,
      "category_rank": 57,
      "domain": "alphahistory.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 356844.760986918,
      "curr_month_visits": 356844.760986918,
      "unique_users": 183197.207941891,
      "pages_per_visit": 1.77953493732704
    },
    {
      "global_rank": 346848,
      "category_rank": 58,
      "domain": "rivalboxing.ca",
      "category": "Sports/Running",
      "avg_month_visits": 49586.7181638391,
      "curr_month_visits": 49586.7181638391,
      "unique_users": 23325.0091669578,
      "pages_per_visit": 9.87236398486036
    },
    {
      "global_rank": 307410,
      "category_rank": 58,
      "domain": "apaonline.org",
      "category": "Sports/Rugby",
      "avg_month_visits": 167056.576760318,
      "curr_month_visits": 167056.576760318,
      "unique_users": 73805.3119415644,
      "pages_per_visit": 2.05271435095958
    },
    {
      "global_rank": 67021,
      "category_rank": 58,
      "domain": "originusa.com",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 410318.987538849,
      "curr_month_visits": 410318.987538849,
      "unique_users": 212402.616104868,
      "pages_per_visit": 6.84319623440323
    },
    {
      "global_rank": 38916,
      "category_rank": 58,
      "domain": "constitutioncenter.org",
      "category": "Sports/Golf",
      "avg_month_visits": 1582720.91889996,
      "curr_month_visits": 1582720.91889996,
      "unique_users": 1110829.35147676,
      "pages_per_visit": 1.98050254290563
    },
    {
      "global_rank": 73793,
      "category_rank": 58,
      "domain": "bluejaysinsider.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 416589.874512143,
      "curr_month_visits": 416589.874512143,
      "unique_users": 142088.826959127,
      "pages_per_visit": 1.75111814411532
    },
    {
      "global_rank": 2332,
      "category_rank": 58,
      "domain": "frontlineeducation.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 21770460.6973081,
      "curr_month_visits": 21770460.6973081,
      "unique_users": 2873029.63560799,
      "pages_per_visit": 10.2672207024297
    },
    {
      "global_rank": 107729,
      "category_rank": 58,
      "domain": "iucn.org",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 544808.689328975,
      "curr_month_visits": 544808.689328975,
      "unique_users": 275341.640642428,
      "pages_per_visit": 2.44033388822059
    },
    {
      "global_rank": 15508,
      "category_rank": 58,
      "domain": "core.ac.uk",
      "category": "Sports/Running",
      "avg_month_visits": 5547277.99243898,
      "curr_month_visits": 5547277.99243898,
      "unique_users": 3718935.91961271,
      "pages_per_visit": 1.79385555705179
    },
    {
      "global_rank": 168650,
      "category_rank": 58,
      "domain": "melbournepolytechnic.edu.au",
      "category": "Sports/American_Football",
      "avg_month_visits": 237130.677293459,
      "curr_month_visits": 237130.677293459,
      "unique_users": 97182.0640521918,
      "pages_per_visit": 5.66208142477509
    },
    {
      "global_rank": 148600,
      "category_rank": 58,
      "domain": "keinsci.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 266850.643783067,
      "curr_month_visits": 266850.643783067,
      "unique_users": 86019.8761735878,
      "pages_per_visit": 3.60152575396767
    },
    {
      "global_rank": 165273,
      "category_rank": 58,
      "domain": "womenshistory.org",
      "category": "Sports/Boxing",
      "avg_month_visits": 386650.908807051,
      "curr_month_visits": 386650.908807051,
      "unique_users": 238668.187963076,
      "pages_per_visit": 1.47945586306191
    },
    {
      "global_rank": 3119,
      "category_rank": 58,
      "domain": "sportmaster.ru",
      "category": "Sports/Sports",
      "avg_month_visits": 12826434.7868892,
      "curr_month_visits": 12826434.7868892,
      "unique_users": 6041199.7110919,
      "pages_per_visit": 5.89948487477505
    },
    {
      "global_rank": 67417,
      "category_rank": 59,
      "domain": "fujita-hu.ac.jp",
      "category": "Sports/Climbing",
      "avg_month_visits": 644293.518427066,
      "curr_month_visits": 644293.518427066,
      "unique_users": 183864.681111691,
      "pages_per_visit": 8.13252163643838
    },
    {
      "global_rank": 39589,
      "category_rank": 59,
      "domain": "rsl.ru",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 1260950.00259451,
      "curr_month_visits": 1260950.00259451,
      "unique_users": 716101.499677018,
      "pages_per_visit": 3.873273954791
    },
    {
      "global_rank": 166366,
      "category_rank": 59,
      "domain": "rshu.ru",
      "category": "Sports/Soccer",
      "avg_month_visits": 207842.172440598,
      "curr_month_visits": 207842.172440598,
      "unique_users": 79059.5186411866,
      "pages_per_visit": 3.63991036539051
    },
    {
      "global_rank": 1200004,
      "category_rank": 59,
      "domain": "hotbook.mx",
      "category": "Sports/Volleyball",
      "avg_month_visits": 24983.5113408638,
      "curr_month_visits": 24983.5113408638,
      "unique_users": 13773.3605527111,
      "pages_per_visit": 1.87480781369413
    },
    {
      "global_rank": 47662,
      "category_rank": 59,
      "domain": "dataporten.no",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 1755217.75345048,
      "curr_month_visits": 1755217.75345048,
      "unique_users": 378306.805339132,
      "pages_per_visit": 1.54184523757181
    },
    {
      "global_rank": 313636,
      "category_rank": 59,
      "domain": "npopss-cn.gov.cn",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 188880.362397777,
      "curr_month_visits": 188880.362397777,
      "unique_users": 77422.2870904567,
      "pages_per_visit": 2.65239537909649
    },
    {
      "global_rank": 513477,
      "category_rank": 59,
      "domain": "fafsa.gov",
      "category": "Sports/American_Football",
      "avg_month_visits": 147633.597079016,
      "curr_month_visits": 147633.597079016,
      "unique_users": 114232.637358314,
      "pages_per_visit": 1.02983440158217
    },
    {
      "global_rank": 240004,
      "category_rank": 59,
      "domain": "sdss.org",
      "category": "Sports/Baseball",
      "avg_month_visits": 122012.881690453,
      "curr_month_visits": 122012.881690453,
      "unique_users": 53800.055298694,
      "pages_per_visit": 4.74243014833609
    },
    {
      "global_rank": 49324,
      "category_rank": 60,
      "domain": "statology.org",
      "category": "Sports/Climbing",
      "avg_month_visits": 1816988.18871204,
      "curr_month_visits": 1816988.18871204,
      "unique_users": 1103490.26697801,
      "pages_per_visit": 1.40638816053126
    },
    {
      "global_rank": 173787,
      "category_rank": 60,
      "domain": "bbw.de",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 178132.536949437,
      "curr_month_visits": 178132.536949437,
      "unique_users": 21398.3664558176,
      "pages_per_visit": 14.779617708752
    },
    {
      "global_rank": 30923,
      "category_rank": 60,
      "domain": "hel.fi",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 2385105.88205507,
      "curr_month_visits": 2385105.88205507,
      "unique_users": 807111.807228763,
      "pages_per_visit": 3.46106911982725
    },
    {
      "global_rank": 252805,
      "category_rank": 60,
      "domain": "opticswarehouse.co.uk",
      "category": "Sports/Fishing",
      "avg_month_visits": 110605.158918498,
      "curr_month_visits": 110605.158918498,
      "unique_users": 47895.8860387172,
      "pages_per_visit": 4.33889656762594
    },
    {
      "global_rank": 109445,
      "category_rank": 60,
      "domain": "greenmatters.com",
      "category": "Sports",
      "avg_month_visits": 675980.887358091,
      "curr_month_visits": 675980.887358091,
      "unique_users": 463071.451344178,
      "pages_per_visit": 1.32153400720349
    },
    {
      "global_rank": 171503,
      "category_rank": 60,
      "domain": "elbibliote.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 269740.842620475,
      "curr_month_visits": 269740.842620475,
      "unique_users": 145894.821104097,
      "pages_per_visit": 3.06573040406008
    },
    {
      "global_rank": 1221922,
      "category_rank": 60,
      "domain": "revistacontrapunto.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 27753.8214278829,
      "curr_month_visits": 27753.8214278829,
      "unique_users": 14311.3497498969,
      "pages_per_visit": 1.39853427645119
    },
    {
      "global_rank": 170066,
      "category_rank": 61,
      "domain": "cmatc.cn",
      "category": "Sports/American_Football",
      "avg_month_visits": 300459.873287325,
      "curr_month_visits": 300459.873287325,
      "unique_users": 35929.2538726396,
      "pages_per_visit": 6.41210226314871
    },
    {
      "global_rank": 96339,
      "category_rank": 61,
      "domain": "evocycles.co.nz",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 379267.463124195,
      "curr_month_visits": 379267.463124195,
      "unique_users": 184159.056441447,
      "pages_per_visit": 4.17547903122585
    },
    {
      "global_rank": 240316,
      "category_rank": 61,
      "domain": "climbing-history.org",
      "category": "Sports/Running",
      "avg_month_visits": 106916.695132299,
      "curr_month_visits": 106916.695132299,
      "unique_users": 49788.5206751957,
      "pages_per_visit": 4.23370383623358
    },
    {
      "global_rank": 110354,
      "category_rank": 61,
      "domain": "wri.org",
      "category": "Sports/Fishing",
      "avg_month_visits": 505868.31540901,
      "curr_month_visits": 505868.31540901,
      "unique_users": 286038.263476682,
      "pages_per_visit": 2.09745370981431
    },
    {
      "global_rank": 176347,
      "category_rank": 61,
      "domain": "enciclopediaiberoamericana.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 354068.158361095,
      "curr_month_visits": 354068.158361095,
      "unique_users": 201182.130377205,
      "pages_per_visit": 1.4854227928906
    },
    {
      "global_rank": 2438,
      "category_rank": 61,
      "domain": "kundelik.kz",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 20549423.1932253,
      "curr_month_visits": 20549423.1932253,
      "unique_users": 1392447.72412205,
      "pages_per_visit": 9.75610770997295
    },
    {
      "global_rank": 1237705,
      "category_rank": 61,
      "domain": "escuelaestacionsur.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 30524.7289487927,
      "curr_month_visits": 30524.7289487927,
      "unique_users": 16305.802853229,
      "pages_per_visit": 1.38423096519536
    },
    {
      "global_rank": 67694,
      "category_rank": 61,
      "domain": "ecust.edu.cn",
      "category": "Sports/Basketball",
      "avg_month_visits": 658866.176533453,
      "curr_month_visits": 658866.176533453,
      "unique_users": 148160.88592784,
      "pages_per_visit": 6.82680494607327
    },
    {
      "global_rank": 40125,
      "category_rank": 61,
      "domain": "nhm.ac.uk",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 1541677.63206983,
      "curr_month_visits": 1541677.63206983,
      "unique_users": 1006073.05066916,
      "pages_per_visit": 2.95648876351617
    },
    {
      "global_rank": 328296,
      "category_rank": 61,
      "domain": "seuil.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 151174.563353794,
      "curr_month_visits": 151174.563353794,
      "unique_users": 102122.565459471,
      "pages_per_visit": 1.67281833520094
    },
    {
      "global_rank": 134685,
      "category_rank": 61,
      "domain": "ucas.edu.cn",
      "category": "Sports/Volleyball",
      "avg_month_visits": 421964.384604937,
      "curr_month_visits": 421964.384604937,
      "unique_users": 140908.080439001,
      "pages_per_visit": 3.99792683368244
    },
    {
      "global_rank": 551633,
      "category_rank": 61,
      "domain": "ronbrown.org",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 59112.3718562937,
      "curr_month_visits": 59112.3718562937,
      "unique_users": 31389.7139031347,
      "pages_per_visit": 1.64503683699531
    },
    {
      "global_rank": 178901,
      "category_rank": 62,
      "domain": "ellibrototal.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 339885.564169816,
      "curr_month_visits": 339885.564169816,
      "unique_users": 184829.82058343,
      "pages_per_visit": 1.99416655208501
    },
    {
      "global_rank": 154046,
      "category_rank": 62,
      "domain": "scienceready.com.au",
      "category": "Sports/Basketball",
      "avg_month_visits": 271952.535161493,
      "curr_month_visits": 271952.535161493,
      "unique_users": 98072.2143014206,
      "pages_per_visit": 3.05451895561787
    },
    {
      "global_rank": 174098,
      "category_rank": 62,
      "domain": "fossilera.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 261344.851942179,
      "curr_month_visits": 261344.851942179,
      "unique_users": 119935.898300301,
      "pages_per_visit": 4.06447359073158
    },
    {
      "global_rank": 68053,
      "category_rank": 62,
      "domain": "inrae.fr",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 629183.234768748,
      "curr_month_visits": 629183.234768748,
      "unique_users": 210721.014345609,
      "pages_per_visit": 5.95897267569444
    },
    {
      "global_rank": 554575,
      "category_rank": 62,
      "domain": "studygreen.info",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 85771.7363627404,
      "curr_month_visits": 85771.7363627404,
      "unique_users": 40589.276790867,
      "pages_per_visit": 2.02124062019097
    },
    {
      "global_rank": 110452,
      "category_rank": 62,
      "domain": "dieoff.org",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 406473.787159692,
      "curr_month_visits": 406473.787159692,
      "unique_users": 240706.284662167,
      "pages_per_visit": 2.39113802309169
    },
    {
      "global_rank": 50270,
      "category_rank": 62,
      "domain": "planetcalc.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 1733895.45736239,
      "curr_month_visits": 1733895.45736239,
      "unique_users": 1169304.75990522,
      "pages_per_visit": 1.42600490214298
    },
    {
      "global_rank": 99437,
      "category_rank": 63,
      "domain": "locusmap.app",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 213854.7992219,
      "curr_month_visits": 213854.7992219,
      "unique_users": 88599.3892874773,
      "pages_per_visit": 28.4441116260278
    },
    {
      "global_rank": 179323,
      "category_rank": 63,
      "domain": "oerproject.com",
      "category": "Sports/Golf",
      "avg_month_visits": 325755.334863386,
      "curr_month_visits": 325755.334863386,
      "unique_users": 141259.815160824,
      "pages_per_visit": 2.77401018083821
    },
    {
      "global_rank": 328737,
      "category_rank": 63,
      "domain": "safe.ai",
      "category": "Sports/Golf",
      "avg_month_visits": 190143.811229909,
      "curr_month_visits": 190143.811229909,
      "unique_users": 74296.2947566049,
      "pages_per_visit": 3.05873614675408
    },
    {
      "global_rank": 266308,
      "category_rank": 63,
      "domain": "pixinsight.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 129209.29694841,
      "curr_month_visits": 129209.29694841,
      "unique_users": 60720.6528456274,
      "pages_per_visit": 3.47064262604571
    },
    {
      "global_rank": 174200,
      "category_rank": 63,
      "domain": "gsj.jp",
      "category": "Sports/Golf",
      "avg_month_visits": 234248.497146621,
      "curr_month_visits": 234248.497146621,
      "unique_users": 116009.500204284,
      "pages_per_visit": 4.51353157627409
    },
    {
      "global_rank": 51027,
      "category_rank": 63,
      "domain": "analyticsindiamag.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 1649042.85962471,
      "curr_month_visits": 1649042.85962471,
      "unique_users": 859194.224790588,
      "pages_per_visit": 1.73986710726305
    },
    {
      "global_rank": 559920,
      "category_rank": 63,
      "domain": "learner.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 65898.7933084891,
      "curr_month_visits": 65898.7933084891,
      "unique_users": 35371.8357457712,
      "pages_per_visit": 2.05384855038303
    },
    {
      "global_rank": 241944,
      "category_rank": 63,
      "domain": "iglusport.si",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 119411.305048135,
      "curr_month_visits": 119411.305048135,
      "unique_users": 42641.4399129024,
      "pages_per_visit": 6.63635207333241
    },
    {
      "global_rank": 1329811,
      "category_rank": 64,
      "domain": "sivir.ru",
      "category": "Sports/Tennis",
      "avg_month_visits": 26394.7846878463,
      "curr_month_visits": 26394.7846878463,
      "unique_users": 13948.0656795675,
      "pages_per_visit": 1.59410060034432
    },
    {
      "global_rank": 52668,
      "category_rank": 64,
      "domain": "integral-calculator.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 1508888.85587466,
      "curr_month_visits": 1508888.85587466,
      "unique_users": 613039.876879513,
      "pages_per_visit": 1.68909459828366
    },
    {
      "global_rank": 41851,
      "category_rank": 64,
      "domain": "wolnelektury.pl",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 1535176.52273787,
      "curr_month_visits": 1535176.52273787,
      "unique_users": 816016.481155774,
      "pages_per_visit": 2.2657437705671
    },
    {
      "global_rank": 116411,
      "category_rank": 64,
      "domain": "earth.org",
      "category": "Sports/Basketball",
      "avg_month_visits": 628758.278106328,
      "curr_month_visits": 628758.278106328,
      "unique_users": 380179.108075745,
      "pages_per_visit": 1.53124152684008
    },
    {
      "global_rank": 267061,
      "category_rank": 64,
      "domain": "irf.se",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 114060.699206514,
      "curr_month_visits": 114060.699206514,
      "unique_users": 44233.0461413469,
      "pages_per_visit": 8.31632647442287
    },
    {
      "global_rank": 157281,
      "category_rank": 64,
      "domain": "scripps.edu",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 257708.567050192,
      "curr_month_visits": 257708.567050192,
      "unique_users": 120019.83311529,
      "pages_per_visit": 3.29180267950941
    },
    {
      "global_rank": 565573,
      "category_rank": 64,
      "domain": "scholarships4moms.net",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 93224.7426304475,
      "curr_month_visits": 93224.7426304475,
      "unique_users": 65912.9996845134,
      "pages_per_visit": 1.69580253448704
    },
    {
      "global_rank": 183708,
      "category_rank": 64,
      "domain": "elem.mx",
      "category": "Sports/Golf",
      "avg_month_visits": 327772.441765852,
      "curr_month_visits": 327772.441765852,
      "unique_users": 231258.832090935,
      "pages_per_visit": 1.58492605417743
    },
    {
      "global_rank": 1360192,
      "category_rank": 64,
      "domain": "vvbad.be",
      "category": "Sports/Volleyball",
      "avg_month_visits": 24929.8762550102,
      "curr_month_visits": 24929.8762550102,
      "unique_users": 9744.30576082057,
      "pages_per_visit": 1.73177123325759
    },
    {
      "global_rank": 84778,
      "category_rank": 64,
      "domain": "tatamifightwear.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 412171.948232509,
      "curr_month_visits": 412171.948232509,
      "unique_users": 166263.993278304,
      "pages_per_visit": 6.30825536622908
    },
    {
      "global_rank": 140209,
      "category_rank": 64,
      "domain": "ssrf.ac.cn",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 88830.1880626396,
      "curr_month_visits": 88830.1880626396,
      "unique_users": 21117.1695953225,
      "pages_per_visit": 9.65685821476846
    },
    {
      "global_rank": 181055,
      "category_rank": 64,
      "domain": "swinburneonline.edu.au",
      "category": "Sports/Baseball",
      "avg_month_visits": 230979.940360632,
      "curr_month_visits": 230979.940360632,
      "unique_users": 111128.868774043,
      "pages_per_visit": 2.9654079211109
    },
    {
      "global_rank": 32310,
      "category_rank": 64,
      "domain": "simplypsychology.org",
      "category": "Sports/Soccer",
      "avg_month_visits": 2678498.57046042,
      "curr_month_visits": 2678498.57046042,
      "unique_users": 1678970.62223995,
      "pages_per_visit": 1.61264221036738
    },
    {
      "global_rank": 34203,
      "category_rank": 65,
      "domain": "nationalgeographic.fr",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 2423634.34412264,
      "curr_month_visits": 2423634.34412264,
      "unique_users": 1579888.51777483,
      "pages_per_visit": 1.65053749103945
    },
    {
      "global_rank": 54260,
      "category_rank": 65,
      "domain": "98zhibo.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 642154.792717422,
      "curr_month_visits": 642154.792717422,
      "unique_users": 206450.260830229,
      "pages_per_visit": 2.86381005258536
    },
    {
      "global_rank": 181342,
      "category_rank": 65,
      "domain": "nebosh.org.uk",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 206240.710986226,
      "curr_month_visits": 206240.710986226,
      "unique_users": 86728.3894832395,
      "pages_per_visit": 5.13699618552066
    },
    {
      "global_rank": 118193,
      "category_rank": 65,
      "domain": "kier.re.kr",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 190991.335716504,
      "curr_month_visits": 190991.335716504,
      "unique_users": 45942.7028191027,
      "pages_per_visit": 22.5367237772153
    },
    {
      "global_rank": 575524,
      "category_rank": 65,
      "domain": "mekawyat.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 77134.7157686373,
      "curr_month_visits": 77134.7157686373,
      "unique_users": 38606.2691427226,
      "pages_per_visit": 2.68921066822445
    },
    {
      "global_rank": 189770,
      "category_rank": 65,
      "domain": "tshaonline.org",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 307039.477501721,
      "curr_month_visits": 307039.477501721,
      "unique_users": 198137.68371694,
      "pages_per_visit": 1.65591115398846
    },
    {
      "global_rank": 178352,
      "category_rank": 66,
      "domain": "seg.org",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 198120.403087348,
      "curr_month_visits": 198120.403087348,
      "unique_users": 94497.9928225476,
      "pages_per_visit": 3.13306011819977
    },
    {
      "global_rank": 54494,
      "category_rank": 66,
      "domain": "gstadmission.ac.bd",
      "category": "Sports/Golf",
      "avg_month_visits": 1582468.92565034,
      "curr_month_visits": 1582468.92565034,
      "unique_users": 189295.972969833,
      "pages_per_visit": 3.90279189443435
    },
    {
      "global_rank": 119669,
      "category_rank": 66,
      "domain": "are-journal.com",
      "category": "Sports/Sports",
      "avg_month_visits": 424383.467225166,
      "curr_month_visits": 424383.467225166,
      "unique_users": 253362.930581153,
      "pages_per_visit": 3.13117382741894
    },
    {
      "global_rank": 377313,
      "category_rank": 66,
      "domain": "dynastysport.co.nz",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 39589.9134151189,
      "curr_month_visits": 39589.9134151189,
      "unique_users": 16339.7082118721,
      "pages_per_visit": 11.3779295815763
    },
    {
      "global_rank": 64441,
      "category_rank": 66,
      "domain": "p-kashikan.jp",
      "category": "Sports/Baseball",
      "avg_month_visits": 563024.362927763,
      "curr_month_visits": 563024.362927763,
      "unique_users": 126764.035605378,
      "pages_per_visit": 10.5232025362816
    },
    {
      "global_rank": 42885,
      "category_rank": 66,
      "domain": "aspendiscovery.org",
      "category": "Sports/American_Football",
      "avg_month_visits": 2157420.00428086,
      "curr_month_visits": 2157420.00428086,
      "unique_users": 341725.406932253,
      "pages_per_visit": 2.95422240129403
    },
    {
      "global_rank": 577356,
      "category_rank": 66,
      "domain": "universitypressscholarship.com",
      "category": "Sports/Golf",
      "avg_month_visits": 72662.5713035291,
      "curr_month_visits": 72662.5713035291,
      "unique_users": 38345.6532353283,
      "pages_per_visit": 1.38199840217119
    },
    {
      "global_rank": 55702,
      "category_rank": 66,
      "domain": "cricfoot.net",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 608276.153579776,
      "curr_month_visits": 608276.153579776,
      "unique_users": 200817.914568995,
      "pages_per_visit": 5.90831124133719
    },
    {
      "global_rank": 18891,
      "category_rank": 66,
      "domain": "scientificamerican.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 5513420.05460617,
      "curr_month_visits": 5513420.05460617,
      "unique_users": 3857503.98256817,
      "pages_per_visit": 1.49192976277857
    },
    {
      "global_rank": 181494,
      "category_rank": 66,
      "domain": "yrkeshogskolan.se",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 201670.765004651,
      "curr_month_visits": 201670.765004651,
      "unique_users": 90666.526367872,
      "pages_per_visit": 6.25449802904939
    },
    {
      "global_rank": 158611,
      "category_rank": 66,
      "domain": "crackalevel.wordpress.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 267573.110479349,
      "curr_month_visits": 267573.110479349,
      "unique_users": 98881.7681454933,
      "pages_per_visit": 5.73945936033869
    },
    {
      "global_rank": 160230,
      "category_rank": 67,
      "domain": "chemege.ru",
      "category": "Sports",
      "avg_month_visits": 316519.697486634,
      "curr_month_visits": 316519.697486634,
      "unique_users": 187033.867424014,
      "pages_per_visit": 1.73373951839599
    },
    {
      "global_rank": 1358875,
      "category_rank": 67,
      "domain": "bookgeeks.in",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 24637.7855588419,
      "curr_month_visits": 24637.7855588419,
      "unique_users": 16388.7173705283,
      "pages_per_visit": 1.6979917124609
    },
    {
      "global_rank": 42898,
      "category_rank": 67,
      "domain": "kb.nl",
      "category": "Sports/Fishing",
      "avg_month_visits": 1644175.11093734,
      "curr_month_visits": 1644175.11093734,
      "unique_users": 653390.466085455,
      "pages_per_visit": 2.41799163847297
    },
    {
      "global_rank": 288026,
      "category_rank": 67,
      "domain": "oma.be",
      "category": "Sports/Basketball",
      "avg_month_visits": 121940.890630723,
      "curr_month_visits": 121940.890630723,
      "unique_users": 46167.4860656931,
      "pages_per_visit": 4.24087403925448
    },
    {
      "global_rank": 183084,
      "category_rank": 67,
      "domain": "planet-geology.com",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 195945.003669604,
      "curr_month_visits": 195945.003669604,
      "unique_users": 25361.4607932088,
      "pages_per_visit": 5.17588956981427
    },
    {
      "global_rank": 184475,
      "category_rank": 67,
      "domain": "bukischool.com.ua",
      "category": "Sports",
      "avg_month_visits": 239277.33403716,
      "curr_month_visits": 239277.33403716,
      "unique_users": 89543.5183439807,
      "pages_per_visit": 2.9441795124702
    },
    {
      "global_rank": 7506,
      "category_rank": 67,
      "domain": "uniasselvi.com.br",
      "category": "Sports",
      "avg_month_visits": 6001358.20066358,
      "curr_month_visits": 6001358.20066358,
      "unique_users": 1592630.46447889,
      "pages_per_visit": 8.65719494124052
    },
    {
      "global_rank": 577780,
      "category_rank": 67,
      "domain": "cambridgetrust.org",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 54721.3593074464,
      "curr_month_visits": 54721.3593074464,
      "unique_users": 27488.3409997119,
      "pages_per_visit": 3.11333550369955
    },
    {
      "global_rank": 49269,
      "category_rank": 67,
      "domain": "streameasthd.com",
      "category": "Sports/Golf",
      "avg_month_visits": 828058.619000543,
      "curr_month_visits": 828058.619000543,
      "unique_users": 331123.822976884,
      "pages_per_visit": 3.10803665908908
    },
    {
      "global_rank": 73680,
      "category_rank": 67,
      "domain": "bugguide.net",
      "category": "Sports/Boxing",
      "avg_month_visits": 652347.010697441,
      "curr_month_visits": 652347.010697441,
      "unique_users": 390602.299312603,
      "pages_per_visit": 5.52895574175633
    },
    {
      "global_rank": 43656,
      "category_rank": 68,
      "domain": "oszk.hu",
      "category": "Sports/Running",
      "avg_month_visits": 1430252.36541792,
      "curr_month_visits": 1430252.36541792,
      "unique_users": 707456.077648851,
      "pages_per_visit": 2.62865805276494
    },
    {
      "global_rank": 160387,
      "category_rank": 68,
      "domain": "allforlab.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 213961.887685734,
      "curr_month_visits": 213961.887685734,
      "unique_users": 97088.8736332636,
      "pages_per_visit": 5.30252786324935
    },
    {
      "global_rank": 74340,
      "category_rank": 68,
      "domain": "addgene.org",
      "category": "Sports/American_Football",
      "avg_month_visits": 712975.331084684,
      "curr_month_visits": 712975.331084684,
      "unique_users": 287255.314303417,
      "pages_per_visit": 3.62687632274913
    },
    {
      "global_rank": 583661,
      "category_rank": 68,
      "domain": "gotchosen.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 61787.3849398433,
      "curr_month_visits": 61787.3849398433,
      "unique_users": 27742.3612729729,
      "pages_per_visit": 7.05338016908122
    },
    {
      "global_rank": 775051,
      "category_rank": 68,
      "domain": "proskating.by",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 26866.5991590735,
      "curr_month_visits": 26866.5991590735,
      "unique_users": 13356.2596204708,
      "pages_per_visit": 2.54753471764478
    },
    {
      "global_rank": 144436,
      "category_rank": 68,
      "domain": "nsk.su",
      "category": "Sports/Volleyball",
      "avg_month_visits": 143382.937640069,
      "curr_month_visits": 143382.937640069,
      "unique_users": 57766.6999358552,
      "pages_per_visit": 18.4739205881879
    },
    {
      "global_rank": 120469,
      "category_rank": 68,
      "domain": "cbd.int",
      "category": "Sports/Golf",
      "avg_month_visits": 467947.005804784,
      "curr_month_visits": 467947.005804784,
      "unique_users": 204471.172865977,
      "pages_per_visit": 2.40319891842192
    },
    {
      "global_rank": 191407,
      "category_rank": 68,
      "domain": "winstonchurchill.org",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 264461.546397754,
      "curr_month_visits": 264461.546397754,
      "unique_users": 145064.339661902,
      "pages_per_visit": 1.83116219393345
    },
    {
      "global_rank": 183954,
      "category_rank": 68,
      "domain": "schoolofpe.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 261972.090883462,
      "curr_month_visits": 261972.090883462,
      "unique_users": 71276.3802943905,
      "pages_per_visit": 3.22275387646193
    },
    {
      "global_rank": 77737,
      "category_rank": 68,
      "domain": "golfeffort.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 419267.943664946,
      "curr_month_visits": 419267.943664946,
      "unique_users": 146169.33625764,
      "pages_per_visit": 10.039114392632
    },
    {
      "global_rank": 131279,
      "category_rank": 69,
      "domain": "thepowerof10.info",
      "category": "Sports/Running",
      "avg_month_visits": 302252.477302382,
      "curr_month_visits": 302252.477302382,
      "unique_users": 126076.757474568,
      "pages_per_visit": 7.81593757533705
    },
    {
      "global_rank": 191585,
      "category_rank": 69,
      "domain": "icrmedu.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 418332.703580395,
      "curr_month_visits": 418332.703580395,
      "unique_users": 43130.2463188682,
      "pages_per_visit": 2.45569542220317
    },
    {
      "global_rank": 185235,
      "category_rank": 69,
      "domain": "ingemmet.gob.pe",
      "category": "Sports/Fishing",
      "avg_month_visits": 240692.897288059,
      "curr_month_visits": 240692.897288059,
      "unique_users": 92486.1362665521,
      "pages_per_visit": 3.10835124553791
    },
    {
      "global_rank": 2726,
      "category_rank": 69,
      "domain": "soccer.yahoo.co.jp",
      "category": "Sports/Basketball",
      "avg_month_visits": 17808149.5342683,
      "curr_month_visits": 17808149.5342683,
      "unique_users": 2555599.03422113,
      "pages_per_visit": 5.9104180116507
    },
    {
      "global_rank": 165973,
      "category_rank": 69,
      "domain": "tansoole.com",
      "category": "Sports/Golf",
      "avg_month_visits": 240767.843051984,
      "curr_month_visits": 240767.843051984,
      "unique_users": 47935.3074042299,
      "pages_per_visit": 6.71049745077065
    },
    {
      "global_rank": 120889,
      "category_rank": 69,
      "domain": "wildlifetrusts.org",
      "category": "Sports/Baseball",
      "avg_month_visits": 652112.133152487,
      "curr_month_visits": 652112.133152487,
      "unique_users": 434061.948535161,
      "pages_per_visit": 1.67948238125344
    },
    {
      "global_rank": 2809,
      "category_rank": 70,
      "domain": "examinationservices.nic.in",
      "category": "Sports/Volleyball",
      "avg_month_visits": 5978351.81545026,
      "curr_month_visits": 5978351.81545026,
      "unique_users": 2356235.11373644,
      "pages_per_visit": 10.7779647164926
    },
    {
      "global_rank": 121909,
      "category_rank": 70,
      "domain": "hach.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 423990.416787519,
      "curr_month_visits": 423990.416787519,
      "unique_users": 228183.038089674,
      "pages_per_visit": 3.04097205087483
    },
    {
      "global_rank": 192801,
      "category_rank": 70,
      "domain": "elhistoriador.com.ar",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 341080.858130371,
      "curr_month_visits": 341080.858130371,
      "unique_users": 208469.591494291,
      "pages_per_visit": 1.63621904949763
    },
    {
      "global_rank": 298673,
      "category_rank": 70,
      "domain": "seti.org",
      "category": "Sports",
      "avg_month_visits": 138740.847385866,
      "curr_month_visits": 138740.847385866,
      "unique_users": 76754.498784819,
      "pages_per_visit": 2.14164127982554
    },
    {
      "global_rank": 455638,
      "category_rank": 70,
      "domain": "fighthq.com.au",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 55171.3342574188,
      "curr_month_visits": 55171.3342574188,
      "unique_users": 27430.8195002913,
      "pages_per_visit": 4.30645027317054
    },
    {
      "global_rank": 193489,
      "category_rank": 70,
      "domain": "nackademin.se",
      "category": "Sports/Rugby",
      "avg_month_visits": 177668.339904387,
      "curr_month_visits": 177668.339904387,
      "unique_users": 48953.5287863297,
      "pages_per_visit": 5.24836437532523
    },
    {
      "global_rank": 188839,
      "category_rank": 70,
      "domain": "snet.gob.sv",
      "category": "Sports/American_Football",
      "avg_month_visits": 301515.414122875,
      "curr_month_visits": 301515.414122875,
      "unique_users": 91038.3560111048,
      "pages_per_visit": 1.74943568668932
    },
    {
      "global_rank": 124422,
      "category_rank": 71,
      "domain": "nwf.org",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 546667.853735139,
      "curr_month_visits": 546667.853735139,
      "unique_users": 365298.601031549,
      "pages_per_visit": 1.87627458487133
    },
    {
      "global_rank": 24907,
      "category_rank": 71,
      "domain": "pivotalweather.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 1270092.95534498,
      "curr_month_visits": 1270092.95534498,
      "unique_users": 149806.558403843,
      "pages_per_visit": 10.9606621638982
    },
    {
      "global_rank": 89086,
      "category_rank": 71,
      "domain": "milbstore.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 455350.864454639,
      "curr_month_visits": 455350.864454639,
      "unique_users": 246716.14472228,
      "pages_per_visit": 5.4484131945395
    },
    {
      "global_rank": 194246,
      "category_rank": 71,
      "domain": "condorcet.be",
      "category": "Sports",
      "avg_month_visits": 242677.865875556,
      "curr_month_visits": 242677.865875556,
      "unique_users": 23692.9232858366,
      "pages_per_visit": 5.5578501861186
    },
    {
      "global_rank": 279558,
      "category_rank": 71,
      "domain": "mftackle.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 92560.6254289603,
      "curr_month_visits": 92560.6254289603,
      "unique_users": 28188.6073627576,
      "pages_per_visit": 8.06096617684014
    },
    {
      "global_rank": 195416,
      "category_rank": 71,
      "domain": "lhistoire.fr",
      "category": "Sports/Rugby",
      "avg_month_visits": 289079.975863457,
      "curr_month_visits": 289079.975863457,
      "unique_users": 180902.744952929,
      "pages_per_visit": 2.17734556077725
    },
    {
      "global_rank": 167726,
      "category_rank": 71,
      "domain": "chemsrc.com",
      "category": "Sports",
      "avg_month_visits": 299365.674633599,
      "curr_month_visits": 299365.674633599,
      "unique_users": 164101.245019711,
      "pages_per_visit": 2.40758327813583
    },
    {
      "global_rank": 60451,
      "category_rank": 71,
      "domain": "jrkan2023.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 730470.470303721,
      "curr_month_visits": 730470.470303721,
      "unique_users": 106791.577641622,
      "pages_per_visit": 1.43464260957709
    },
    {
      "global_rank": 2925,
      "category_rank": 72,
      "domain": "znanija.com",
      "category": "Sports/Sports",
      "avg_month_visits": 20135726.5896972,
      "curr_month_visits": 20135726.5896972,
      "unique_users": 7231665.45341301,
      "pages_per_visit": 2.79364301983269
    },
    {
      "global_rank": 132814,
      "category_rank": 72,
      "domain": "inov8.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 301615.182832755,
      "curr_month_visits": 301615.182832755,
      "unique_users": 157929.200256107,
      "pages_per_visit": 3.65424331110982
    },
    {
      "global_rank": 36306,
      "category_rank": 72,
      "domain": "naurok.ua",
      "category": "Sports/Basketball",
      "avg_month_visits": 1002239.36053266,
      "curr_month_visits": 1002239.36053266,
      "unique_users": 464335.257612486,
      "pages_per_visit": 4.25391470757299
    },
    {
      "global_rank": 194872,
      "category_rank": 72,
      "domain": "kbs.edu.au",
      "category": "Sports/American_Football",
      "avg_month_visits": 235844.498462976,
      "curr_month_visits": 235844.498462976,
      "unique_users": 51644.1995317332,
      "pages_per_visit": 6.58750857588544
    },
    {
      "global_rank": 7618,
      "category_rank": 72,
      "domain": "uninter.com",
      "category": "Sports",
      "avg_month_visits": 6001802.63863935,
      "curr_month_visits": 6001802.63863935,
      "unique_users": 1310666.10199354,
      "pages_per_visit": 9.19992224509503
    },
    {
      "global_rank": 124919,
      "category_rank": 72,
      "domain": "tidetimes.org.uk",
      "category": "Sports",
      "avg_month_visits": 734856.038035988,
      "curr_month_visits": 734856.038035988,
      "unique_users": 290997.105338306,
      "pages_per_visit": 2.07916311949186
    },
    {
      "global_rank": 76522,
      "category_rank": 72,
      "domain": "bjmu.edu.cn",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 573632.209243293,
      "curr_month_visits": 573632.209243293,
      "unique_users": 225236.079282525,
      "pages_per_visit": 5.16768122488634
    },
    {
      "global_rank": 2734,
      "category_rank": 72,
      "domain": "sports.ndtv.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 15978180.9946746,
      "curr_month_visits": 15978180.9946746,
      "unique_users": 4860905.63985179,
      "pages_per_visit": 4.96211068626906
    },
    {
      "global_rank": 197703,
      "category_rank": 72,
      "domain": "emsc-csem.org",
      "category": "Sports/Baseball",
      "avg_month_visits": 284162.002054128,
      "curr_month_visits": 284162.002054128,
      "unique_users": 106677.521665377,
      "pages_per_visit": 1.98910798119186
    },
    {
      "global_rank": 8304,
      "category_rank": 73,
      "domain": "besoccer.com",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 7123744.53409781,
      "curr_month_visits": 7123744.53409781,
      "unique_users": 2463980.81515619,
      "pages_per_visit": 4.93315957996808
    },
    {
      "global_rank": 170158,
      "category_rank": 73,
      "domain": "shimadzu.com",
      "category": "Sports",
      "avg_month_visits": 300733.07761006,
      "curr_month_visits": 300733.07761006,
      "unique_users": 153839.594564069,
      "pages_per_visit": 2.6515165987707
    },
    {
      "global_rank": 195950,
      "category_rank": 73,
      "domain": "historycooperative.org",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 304421.331272523,
      "curr_month_visits": 304421.331272523,
      "unique_users": 160145.711908928,
      "pages_per_visit": 1.52360113991463
    },
    {
      "global_rank": 76748,
      "category_rank": 73,
      "domain": "nwafu.edu.cn",
      "category": "Sports/Golf",
      "avg_month_visits": 607319.137874713,
      "curr_month_visits": 607319.137874713,
      "unique_users": 134932.074991339,
      "pages_per_visit": 5.46529240332195
    },
    {
      "global_rank": 2926,
      "category_rank": 73,
      "domain": "pdfcoffee.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 22056537.6685809,
      "curr_month_visits": 22056537.6685809,
      "unique_users": 13077018.0570259,
      "pages_per_visit": 3.18524765068398
    },
    {
      "global_rank": 599432,
      "category_rank": 73,
      "domain": "coca-colascholarsfoundation.org",
      "category": "Sports",
      "avg_month_visits": 171079.764750235,
      "curr_month_visits": 171079.764750235,
      "unique_users": 96619.625507282,
      "pages_per_visit": 1.63396324090153
    },
    {
      "global_rank": 199085,
      "category_rank": 73,
      "domain": "forgerock.io",
      "category": "Sports/Rugby",
      "avg_month_visits": 214464.09328432,
      "curr_month_visits": 214464.09328432,
      "unique_users": 84065.1912666979,
      "pages_per_visit": 2.53774698921715
    },
    {
      "global_rank": 267744,
      "category_rank": 73,
      "domain": "tdsystem.co.jp",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 116677.989591336,
      "curr_month_visits": 116677.989591336,
      "unique_users": 31996.5173239057,
      "pages_per_visit": 6.37058316673438
    },
    {
      "global_rank": 125498,
      "category_rank": 73,
      "domain": "iisd.org",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 448626.019453795,
      "curr_month_visits": 448626.019453795,
      "unique_users": 240973.101492228,
      "pages_per_visit": 2.20740839715422
    },
    {
      "global_rank": 406641,
      "category_rank": 73,
      "domain": "redspotapp.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 62310.9198805135,
      "curr_month_visits": 62310.9198805135,
      "unique_users": 13567.5922616195,
      "pages_per_visit": 7.48848144658171
    },
    {
      "global_rank": 154281,
      "category_rank": 74,
      "domain": "nersc.gov",
      "category": "Sports/Boxing",
      "avg_month_visits": 168415.42036713,
      "curr_month_visits": 168415.42036713,
      "unique_users": 41419.5922892239,
      "pages_per_visit": 12.7702893998796
    },
    {
      "global_rank": 58734,
      "category_rank": 74,
      "domain": "sesamath.net",
      "category": "Sports/Boxing",
      "avg_month_visits": 584876.48108758,
      "curr_month_visits": 584876.48108758,
      "unique_users": 196506.134878745,
      "pages_per_visit": 7.53777402177075
    },
    {
      "global_rank": 63069,
      "category_rank": 74,
      "domain": "kbl.or.kr",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 674458.819800597,
      "curr_month_visits": 674458.819800597,
      "unique_users": 241561.434967387,
      "pages_per_visit": 4.85583381158714
    },
    {
      "global_rank": 93975,
      "category_rank": 74,
      "domain": "love-spo.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 466422.886604242,
      "curr_month_visits": 466422.886604242,
      "unique_users": 334249.754325817,
      "pages_per_visit": 2.29459197865684
    },
    {
      "global_rank": 286443,
      "category_rank": 74,
      "domain": "hottackle.com.au",
      "category": "Sports/Soccer",
      "avg_month_visits": 90304.7970194094,
      "curr_month_visits": 90304.7970194094,
      "unique_users": 25493.4332952447,
      "pages_per_visit": 3.97845094888659
    },
    {
      "global_rank": 201524,
      "category_rank": 74,
      "domain": "ga.gov.au",
      "category": "Sports",
      "avg_month_visits": 309598.791507721,
      "curr_month_visits": 309598.791507721,
      "unique_users": 157272.071466687,
      "pages_per_visit": 1.8721833860763
    },
    {
      "global_rank": 78043,
      "category_rank": 75,
      "domain": "livejohnshopkins-my.sharepoint.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 676822.429958686,
      "curr_month_visits": 676822.429958686,
      "unique_users": 84842.3430403081,
      "pages_per_visit": 5.22208218456415
    },
    {
      "global_rank": 607302,
      "category_rank": 75,
      "domain": "accessscholarships.com",
      "category": "Sports/Running",
      "avg_month_visits": 66109.7360523725,
      "curr_month_visits": 66109.7360523725,
      "unique_users": 38943.6204755189,
      "pages_per_visit": 2.16556421600788
    },
    {
      "global_rank": 1685472,
      "category_rank": 75,
      "domain": "varchive.org",
      "category": "Sports/Tennis",
      "avg_month_visits": 25278.7372274647,
      "curr_month_visits": 25278.7372274647,
      "unique_users": 9737.43464207841,
      "pages_per_visit": 1.08442460024771
    },
    {
      "global_rank": 58959,
      "category_rank": 75,
      "domain": "movierulz.nl",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 1742624.74345448,
      "curr_month_visits": 1742624.74345448,
      "unique_users": 670399.726719468,
      "pages_per_visit": 5.06825759381449
    },
    {
      "global_rank": 196776,
      "category_rank": 75,
      "domain": "holmesglen.edu.au",
      "category": "Sports/Golf",
      "avg_month_visits": 187305.498945504,
      "curr_month_visits": 187305.498945504,
      "unique_users": 64424.52236107,
      "pages_per_visit": 7.03624216451143
    },
    {
      "global_rank": 50142,
      "category_rank": 75,
      "domain": "inah.gob.mx",
      "category": "Sports/Tennis",
      "avg_month_visits": 1360306.60490008,
      "curr_month_visits": 1360306.60490008,
      "unique_users": 899554.154109315,
      "pages_per_visit": 2.35633242898119
    },
    {
      "global_rank": 323189,
      "category_rank": 75,
      "domain": "physicsgalaxy.com",
      "category": "Sports",
      "avg_month_visits": 131765.728227596,
      "curr_month_visits": 131765.728227596,
      "unique_users": 47526.8650390561,
      "pages_per_visit": 3.48845621306503
    },
    {
      "global_rank": 172475,
      "category_rank": 76,
      "domain": "lgcstandards.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 291987.773453005,
      "curr_month_visits": 291987.773453005,
      "unique_users": 153734.998476395,
      "pages_per_visit": 2.22805156161279
    },
    {
      "global_rank": 198596,
      "category_rank": 76,
      "domain": "alvis.se",
      "category": "Sports/Sports",
      "avg_month_visits": 163954.040817535,
      "curr_month_visits": 163954.040817535,
      "unique_users": 76894.2263239377,
      "pages_per_visit": 7.73369376779847
    },
    {
      "global_rank": 623952,
      "category_rank": 76,
      "domain": "gilmanscholarship.org",
      "category": "Sports/Boxing",
      "avg_month_visits": 109457.175173901,
      "curr_month_visits": 109457.175173901,
      "unique_users": 51983.6927981862,
      "pages_per_visit": 2.15923833778028
    },
    {
      "global_rank": 56139,
      "category_rank": 76,
      "domain": "playoffpredictors.com",
      "category": "Sports/Golf",
      "avg_month_visits": 341999.089910947,
      "curr_month_visits": 341999.089910947,
      "unique_users": 117978.725754699,
      "pages_per_visit": 33.6544866893467
    },
    {
      "global_rank": 63791,
      "category_rank": 76,
      "domain": "fishker.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 565539.378349792,
      "curr_month_visits": 565539.378349792,
      "unique_users": 154606.180256209,
      "pages_per_visit": 1.74879781265656
    },
    {
      "global_rank": 203983,
      "category_rank": 77,
      "domain": "met.no",
      "category": "Sports/Boxing",
      "avg_month_visits": 270067.094214873,
      "curr_month_visits": 270067.094214873,
      "unique_users": 114245.376870434,
      "pages_per_visit": 3.02269722354517
    },
    {
      "global_rank": 1705554,
      "category_rank": 77,
      "domain": "archivists.org.au",
      "category": "Sports/Soccer",
      "avg_month_visits": 27339.1805640082,
      "curr_month_visits": 27339.1805640082,
      "unique_users": 10263.1468700168,
      "pages_per_visit": 1.80107313804213
    },
    {
      "global_rank": 1530286,
      "category_rank": 77,
      "domain": "linternasybosques.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 30108.6272428606,
      "curr_month_visits": 30108.6272428606,
      "unique_users": 14680.4558268213,
      "pages_per_visit": 1.48208515343354
    },
    {
      "global_rank": 363298,
      "category_rank": 77,
      "domain": "thenewatlantis.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 142528.774793061,
      "curr_month_visits": 142528.774793061,
      "unique_users": 71554.1312677747,
      "pages_per_visit": 1.90320446593039
    },
    {
      "global_rank": 59922,
      "category_rank": 77,
      "domain": "mathpix.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 620907.249144633,
      "curr_month_visits": 620907.249144633,
      "unique_users": 273767.201645781,
      "pages_per_visit": 5.07688300455632
    },
    {
      "global_rank": 324798,
      "category_rank": 77,
      "domain": "skyrocket.de",
      "category": "Sports",
      "avg_month_visits": 134249.059596106,
      "curr_month_visits": 134249.059596106,
      "unique_users": 69568.5140031425,
      "pages_per_visit": 2.5470569294953
    },
    {
      "global_rank": 128249,
      "category_rank": 77,
      "domain": "royalsociety.org",
      "category": "Sports/Rugby",
      "avg_month_visits": 444615.228886311,
      "curr_month_visits": 444615.228886311,
      "unique_users": 241013.958047522,
      "pages_per_visit": 2.25254671712888
    },
    {
      "global_rank": 467217,
      "category_rank": 77,
      "domain": "nakmuaywholesale.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 56362.8608861286,
      "curr_month_visits": 56362.8608861286,
      "unique_users": 26276.5335010592,
      "pages_per_visit": 4.22315828130912
    },
    {
      "global_rank": 3133,
      "category_rank": 77,
      "domain": "grancursosonline.com.br",
      "category": "Sports/Volleyball",
      "avg_month_visits": 19628144.7292157,
      "curr_month_visits": 19628144.7292157,
      "unique_users": 4887555.74871024,
      "pages_per_visit": 4.85752244344567
    },
    {
      "global_rank": 159160,
      "category_rank": 77,
      "domain": "icourse.club",
      "category": "Sports/Rugby",
      "avg_month_visits": 480419.16868449,
      "curr_month_visits": 480419.16868449,
      "unique_users": 108291.638601459,
      "pages_per_visit": 2.6937666175637
    },
    {
      "global_rank": 79676,
      "category_rank": 78,
      "domain": "biosharp.cn",
      "category": "Sports/Basketball",
      "avg_month_visits": 653344.164044391,
      "curr_month_visits": 653344.164044391,
      "unique_users": 307057.938497028,
      "pages_per_visit": 2.49638857349158
    },
    {
      "global_rank": 8666,
      "category_rank": 78,
      "domain": "fupa.net",
      "category": "Sports/Soccer",
      "avg_month_visits": 7602369.80897238,
      "curr_month_visits": 7602369.80897238,
      "unique_users": 1883008.84254824,
      "pages_per_visit": 6.01215626625615
    },
    {
      "global_rank": 203379,
      "category_rank": 78,
      "domain": "permisdeconduire-online.be",
      "category": "Sports/Baseball",
      "avg_month_visits": 223304.16930001,
      "curr_month_visits": 223304.16930001,
      "unique_users": 55591.8884941446,
      "pages_per_visit": 5.37249074793636
    },
    {
      "global_rank": 50800,
      "category_rank": 78,
      "domain": "amnh.org",
      "category": "Sports/Tennis",
      "avg_month_visits": 1350731.30290084,
      "curr_month_visits": 1350731.30290084,
      "unique_users": 859749.150339047,
      "pages_per_visit": 2.45361828421484
    },
    {
      "global_rank": 1941,
      "category_rank": 78,
      "domain": "naturecaptions.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 14753628.6262166,
      "curr_month_visits": 14753628.6262166,
      "unique_users": 4291817.14335426,
      "pages_per_visit": 6.33312139466799
    },
    {
      "global_rank": 466110,
      "category_rank": 78,
      "domain": "rugbylist.ws",
      "category": "Sports/Rugby",
      "avg_month_visits": 46582.0307849005,
      "curr_month_visits": 46582.0307849005,
      "unique_users": 16852.2072761138,
      "pages_per_visit": 8.34048647081939
    },
    {
      "global_rank": 102844,
      "category_rank": 78,
      "domain": "boxingstreamlinks.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 371788.647545337,
      "curr_month_visits": 371788.647545337,
      "unique_users": 175946.957993638,
      "pages_per_visit": 2.56390947645885
    },
    {
      "global_rank": 174729,
      "category_rank": 78,
      "domain": "bldpharm.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 212009.092775977,
      "curr_month_visits": 212009.092775977,
      "unique_users": 71646.401148858,
      "pages_per_visit": 4.14234999088215
    },
    {
      "global_rank": 212058,
      "category_rank": 78,
      "domain": "igp.gob.pe",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 223355.344585919,
      "curr_month_visits": 223355.344585919,
      "unique_users": 116117.001285059,
      "pages_per_visit": 1.86888869935874
    },
    {
      "global_rank": 2966,
      "category_rank": 79,
      "domain": "asics.com",
      "category": "Sports/Sports",
      "avg_month_visits": 15748962.8718629,
      "curr_month_visits": 15748962.8718629,
      "unique_users": 8219321.92841159,
      "pages_per_visit": 4.8950916155385
    },
    {
      "global_rank": 154070,
      "category_rank": 79,
      "domain": "rolexparismasters.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 264787.723549419,
      "curr_month_visits": 264787.723549419,
      "unique_users": 124321.72266859,
      "pages_per_visit": 3.39237705545384
    },
    {
      "global_rank": 281235,
      "category_rank": 79,
      "domain": "adventurebase.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 104842.824887663,
      "curr_month_visits": 104842.824887663,
      "unique_users": 24384.5076448,
      "pages_per_visit": 2.19622447308254
    },
    {
      "global_rank": 56441,
      "category_rank": 79,
      "domain": "surlyhorns.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 967333.38786121,
      "curr_month_visits": 967333.38786121,
      "unique_users": 45957.1590737226,
      "pages_per_visit": 11.5244469265423
    },
    {
      "global_rank": 60173,
      "category_rank": 79,
      "domain": "mathda.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 625607.000725136,
      "curr_month_visits": 625607.000725136,
      "unique_users": 312199.365425029,
      "pages_per_visit": 2.42913060570634
    },
    {
      "global_rank": 181893,
      "category_rank": 79,
      "domain": "muctr.ru",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 257106.270825091,
      "curr_month_visits": 257106.270825091,
      "unique_users": 82934.7864029549,
      "pages_per_visit": 4.21556531289964
    },
    {
      "global_rank": 51410,
      "category_rank": 79,
      "domain": "iwm.org.uk",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 1255518.73967829,
      "curr_month_visits": 1255518.73967829,
      "unique_users": 807870.456219944,
      "pages_per_visit": 2.41964878690092
    },
    {
      "global_rank": 86902,
      "category_rank": 79,
      "domain": "impactguns.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 434207.926631492,
      "curr_month_visits": 434207.926631492,
      "unique_users": 229444.989163763,
      "pages_per_visit": 3.39535682132356
    },
    {
      "global_rank": 95585,
      "category_rank": 79,
      "domain": "jgo-os.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 424293.308582944,
      "curr_month_visits": 424293.308582944,
      "unique_users": 143087.659325214,
      "pages_per_visit": 6.05564525179592
    },
    {
      "global_rank": 3271,
      "category_rank": 80,
      "domain": "coursehero.com",
      "category": "Sports/Running",
      "avg_month_visits": 20269548.6157297,
      "curr_month_visits": 20269548.6157297,
      "unique_users": 11441446.8116461,
      "pages_per_visit": 3.68420958833349
    },
    {
      "global_rank": 72034,
      "category_rank": 80,
      "domain": "fantasygully.com",
      "category": "Sports/Sports",
      "avg_month_visits": 521908.402040182,
      "curr_month_visits": 521908.402040182,
      "unique_users": 114310.712809205,
      "pages_per_visit": 11.1749193635878
    },
    {
      "global_rank": 472096,
      "category_rank": 80,
      "domain": "flysportsuk.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 49098.3062219592,
      "curr_month_visits": 49098.3062219592,
      "unique_users": 21692.2291208572,
      "pages_per_visit": 4.9292827706003
    },
    {
      "global_rank": 217381,
      "category_rank": 80,
      "domain": "cmsjournal.net",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 241039.9374176,
      "curr_month_visits": 241039.9374176,
      "unique_users": 102440.272653887,
      "pages_per_visit": 1.78892533933185
    },
    {
      "global_rank": 97637,
      "category_rank": 80,
      "domain": "golfyoyaku.jp",
      "category": "Sports/Golf",
      "avg_month_visits": 447824.144684442,
      "curr_month_visits": 447824.144684442,
      "unique_users": 169616.450697666,
      "pages_per_visit": 5.79034577954705
    },
    {
      "global_rank": 331201,
      "category_rank": 80,
      "domain": "astronomy.tools",
      "category": "Sports/Baseball",
      "avg_month_visits": 127736.361040149,
      "curr_month_visits": 127736.361040149,
      "unique_users": 52789.3554780569,
      "pages_per_visit": 2.20381993408884
    },
    {
      "global_rank": 211034,
      "category_rank": 80,
      "domain": "reachr.com.br",
      "category": "Sports/Running",
      "avg_month_visits": 175917.606772462,
      "curr_month_visits": 175917.606772462,
      "unique_users": 110252.664328248,
      "pages_per_visit": 2.97826764610392
    },
    {
      "global_rank": 118086,
      "category_rank": 80,
      "domain": "ride1up.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 399514.891234095,
      "curr_month_visits": 399514.891234095,
      "unique_users": 206537.633786956,
      "pages_per_visit": 4.07763987618096
    },
    {
      "global_rank": 189368,
      "category_rank": 80,
      "domain": "chemsoc.org.cn",
      "category": "Sports",
      "avg_month_visits": 121493.329027296,
      "curr_month_visits": 121493.329027296,
      "unique_users": 54526.9433181534,
      "pages_per_visit": 5.82815129622916
    },
    {
      "global_rank": 217288,
      "category_rank": 81,
      "domain": "factsanddetails.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 267940.13312085,
      "curr_month_visits": 267940.13312085,
      "unique_users": 160960.312438792,
      "pages_per_visit": 1.58621194059063
    },
    {
      "global_rank": 97799,
      "category_rank": 81,
      "domain": "golf.co.nz",
      "category": "Sports/Soccer",
      "avg_month_visits": 421226.379610072,
      "curr_month_visits": 421226.379610072,
      "unique_users": 78895.5239949657,
      "pages_per_visit": 5.30420795743766
    },
    {
      "global_rank": 189721,
      "category_rank": 81,
      "domain": "ifasonline.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 230773.08754929,
      "curr_month_visits": 230773.08754929,
      "unique_users": 63341.4259422094,
      "pages_per_visit": 5.12224110140108
    },
    {
      "global_rank": 61413,
      "category_rank": 81,
      "domain": "univ-reunion.fr",
      "category": "Sports/Baseball",
      "avg_month_visits": 613896.699947314,
      "curr_month_visits": 613896.699947314,
      "unique_users": 94982.2832066955,
      "pages_per_visit": 9.54075495160484
    },
    {
      "global_rank": 332399,
      "category_rank": 81,
      "domain": "astrotreff.de",
      "category": "Sports/American_Football",
      "avg_month_visits": 128376.605733121,
      "curr_month_visits": 128376.605733121,
      "unique_users": 35918.0591129135,
      "pages_per_visit": 5.45414135647256
    },
    {
      "global_rank": 1997,
      "category_rank": 81,
      "domain": "teacherspayteachers.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 26352606.6805434,
      "curr_month_visits": 26352606.6805434,
      "unique_users": 10271568.8718685,
      "pages_per_visit": 5.5167515491335
    },
    {
      "global_rank": 660586,
      "category_rank": 81,
      "domain": "calvinrosser.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 67512.8853350542,
      "curr_month_visits": 67512.8853350542,
      "unique_users": 35463.096162041,
      "pages_per_visit": 1.59442361466321
    },
    {
      "global_rank": 211367,
      "category_rank": 81,
      "domain": "arenakoncernen.se",
      "category": "Sports/Tennis",
      "avg_month_visits": 163055.653119361,
      "curr_month_visits": 163055.653119361,
      "unique_users": 19706.8008961313,
      "pages_per_visit": 5.68676386943688
    },
    {
      "global_rank": 135325,
      "category_rank": 81,
      "domain": "nies.go.jp",
      "category": "Sports/Soccer",
      "avg_month_visits": 432082.908148802,
      "curr_month_visits": 432082.908148802,
      "unique_users": 267594.940144733,
      "pages_per_visit": 2.45801967932722
    },
    {
      "global_rank": 474157,
      "category_rank": 81,
      "domain": "elitemmashop.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 56475.2527094243,
      "curr_month_visits": 56475.2527094243,
      "unique_users": 30042.1157822725,
      "pages_per_visit": 2.27667872450407
    },
    {
      "global_rank": 882147,
      "category_rank": 81,
      "domain": "goneoutdoor.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 22888.1603354946,
      "curr_month_visits": 22888.1603354946,
      "unique_users": 10154.8487380468,
      "pages_per_visit": 3.77376422166549
    },
    {
      "global_rank": 217643,
      "category_rank": 82,
      "domain": "arqueologiamexicana.mx",
      "category": "Sports/Rugby",
      "avg_month_visits": 289265.053527611,
      "curr_month_visits": 289265.053527611,
      "unique_users": 195654.894709032,
      "pages_per_visit": 1.59642081721588
    },
    {
      "global_rank": 3323,
      "category_rank": 82,
      "domain": "magister.net",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 18991884.5506679,
      "curr_month_visits": 18991884.5506679,
      "unique_users": 934152.870116861,
      "pages_per_visit": 6.34646581393115
    },
    {
      "global_rank": 478301,
      "category_rank": 82,
      "domain": "mmafactory.com.au",
      "category": "Sports/Rugby",
      "avg_month_visits": 49895.9212681532,
      "curr_month_visits": 49895.9212681532,
      "unique_users": 16272.4095367341,
      "pages_per_visit": 6.60537567986571
    },
    {
      "global_rank": 87316,
      "category_rank": 82,
      "domain": "vanceoutdoors.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 437145.018992192,
      "curr_month_visits": 437145.018992192,
      "unique_users": 199255.212505609,
      "pages_per_visit": 5.52106126074535
    },
    {
      "global_rank": 1605221,
      "category_rank": 82,
      "domain": "penguin.sg",
      "category": "Sports/Rugby",
      "avg_month_visits": 28918.5167747736,
      "curr_month_visits": 28918.5167747736,
      "unique_users": 15244.8675043572,
      "pages_per_visit": 1.5906905041391
    },
    {
      "global_rank": 213964,
      "category_rank": 82,
      "domain": "lowestpricetrafficschool.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 191385.123439144,
      "curr_month_visits": 191385.123439144,
      "unique_users": 72463.2368798413,
      "pages_per_visit": 5.70789364418945
    },
    {
      "global_rank": 2982,
      "category_rank": 82,
      "domain": "tradeinn.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 17243927.1134696,
      "curr_month_visits": 17243927.1134696,
      "unique_users": 8896301.7310827,
      "pages_per_visit": 3.89117400371837
    },
    {
      "global_rank": 224676,
      "category_rank": 82,
      "domain": "nationalmap.gov",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 244436.618001373,
      "curr_month_visits": 244436.618001373,
      "unique_users": 133205.432492639,
      "pages_per_visit": 1.97595152115642
    },
    {
      "global_rank": 661193,
      "category_rank": 82,
      "domain": "usefp.org",
      "category": "Sports/Basketball",
      "avg_month_visits": 123074.475759781,
      "curr_month_visits": 123074.475759781,
      "unique_users": 50542.8353955496,
      "pages_per_visit": 5.27734507995303
    },
    {
      "global_rank": 190353,
      "category_rank": 82,
      "domain": "chemistrydocs.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 245724.141527248,
      "curr_month_visits": 245724.141527248,
      "unique_users": 129420.415710383,
      "pages_per_visit": 2.39877007833642
    },
    {
      "global_rank": 1998,
      "category_rank": 82,
      "domain": "ruangguru.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 24484876.4244082,
      "curr_month_visits": 24484876.4244082,
      "unique_users": 10030448.12586,
      "pages_per_visit": 4.18920017840413
    },
    {
      "global_rank": 217152,
      "category_rank": 83,
      "domain": "southmetrotafe.wa.edu.au",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 178307.361801058,
      "curr_month_visits": 178307.361801058,
      "unique_users": 54301.3261040951,
      "pages_per_visit": 4.85166855423859
    },
    {
      "global_rank": 203665,
      "category_rank": 83,
      "domain": "metrohm.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 227724.792864052,
      "curr_month_visits": 227724.792864052,
      "unique_users": 116158.110917068,
      "pages_per_visit": 2.69710429096635
    },
    {
      "global_rank": 1999,
      "category_rank": 83,
      "domain": "padlet.com",
      "category": "Sports",
      "avg_month_visits": 28758993.9131958,
      "curr_month_visits": 28758993.9131958,
      "unique_users": 10152412.7131919,
      "pages_per_visit": 3.87411863538256
    },
    {
      "global_rank": 80395,
      "category_rank": 83,
      "domain": "jac.go.jp",
      "category": "Sports",
      "avg_month_visits": 622596.663849743,
      "curr_month_visits": 622596.663849743,
      "unique_users": 330265.46274,
      "pages_per_visit": 2.97737977512977
    },
    {
      "global_rank": 3369,
      "category_rank": 83,
      "domain": "brainly.com",
      "category": "Sports/Golf",
      "avg_month_visits": 20782326.9147393,
      "curr_month_visits": 20782326.9147393,
      "unique_users": 11160025.3943003,
      "pages_per_visit": 2.99813352122008
    },
    {
      "global_rank": 82054,
      "category_rank": 83,
      "domain": "tmd.ac.jp",
      "category": "Sports/Rugby",
      "avg_month_visits": 569927.825498753,
      "curr_month_visits": 569927.825498753,
      "unique_users": 259785.821239412,
      "pages_per_visit": 4.63340838119694
    },
    {
      "global_rank": 136344,
      "category_rank": 83,
      "domain": "cast.org.cn",
      "category": "Sports",
      "avg_month_visits": 222226.57194423,
      "curr_month_visits": 222226.57194423,
      "unique_users": 81452.2823339876,
      "pages_per_visit": 9.62043941021463
    },
    {
      "global_rank": 8294,
      "category_rank": 83,
      "domain": "panopto.com",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 11010065.1744498,
      "curr_month_visits": 11010065.1744498,
      "unique_users": 2205155.69208524,
      "pages_per_visit": 2.68735361227327
    },
    {
      "global_rank": 336499,
      "category_rank": 83,
      "domain": "minorplanetcenter.net",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 117377.299854022,
      "curr_month_visits": 117377.299854022,
      "unique_users": 41813.8947550924,
      "pages_per_visit": 3.91695955545799
    },
    {
      "global_rank": 22517,
      "category_rank": 84,
      "domain": "srce.hr",
      "category": "Sports/Boxing",
      "avg_month_visits": 1935867.69814262,
      "curr_month_visits": 1935867.69814262,
      "unique_users": 583688.227331611,
      "pages_per_visit": 5.37313841954635
    },
    {
      "global_rank": 446025,
      "category_rank": 84,
      "domain": "iva.org.il",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 31277.5753364112,
      "curr_month_visits": 31277.5753364112,
      "unique_users": 9599.58883267628,
      "pages_per_visit": 12.4623918136242
    },
    {
      "global_rank": 1677154,
      "category_rank": 84,
      "domain": "publicadomain.ru",
      "category": "Sports/Sports",
      "avg_month_visits": 27482.8052151329,
      "curr_month_visits": 27482.8052151329,
      "unique_users": 18048.2382708706,
      "pages_per_visit": 2.51723457667116
    },
    {
      "global_rank": 3377,
      "category_rank": 84,
      "domain": "myschoolapp.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 22200262.4161289,
      "curr_month_visits": 22200262.4161289,
      "unique_users": 1089017.80468833,
      "pages_per_visit": 6.85027933402839
    },
    {
      "global_rank": 219850,
      "category_rank": 84,
      "domain": "napoleon.org",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 266837.632703411,
      "curr_month_visits": 266837.632703411,
      "unique_users": 156985.524802607,
      "pages_per_visit": 1.58685367852508
    },
    {
      "global_rank": 226082,
      "category_rank": 84,
      "domain": "eos.org",
      "category": "Sports/Basketball",
      "avg_month_visits": 271520.751077282,
      "curr_month_visits": 271520.751077282,
      "unique_users": 157953.253730517,
      "pages_per_visit": 1.46175715394563
    },
    {
      "global_rank": 204455,
      "category_rank": 84,
      "domain": "malvernpanalytical.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 231590.185346385,
      "curr_month_visits": 231590.185346385,
      "unique_users": 126860.487354889,
      "pages_per_visit": 2.38666734085877
    },
    {
      "global_rank": 218228,
      "category_rank": 84,
      "domain": "cbt-cloud.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 195940.757855953,
      "curr_month_visits": 195940.757855953,
      "unique_users": 94323.0701403226,
      "pages_per_visit": 4.37905168552444
    },
    {
      "global_rank": 106622,
      "category_rank": 84,
      "domain": "rockbottomgolf.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 433934.937214987,
      "curr_month_visits": 433934.937214987,
      "unique_users": 202797.160969485,
      "pages_per_visit": 3.98529601484945
    },
    {
      "global_rank": 204700,
      "category_rank": 85,
      "domain": "molview.org",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 235948.564846565,
      "curr_month_visits": 235948.564846565,
      "unique_users": 120910.432051111,
      "pages_per_visit": 2.83345622466604
    },
    {
      "global_rank": 85620,
      "category_rank": 85,
      "domain": "zssgdsb-85176920tsgjnz.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 216358.002117055,
      "curr_month_visits": 216358.002117055,
      "unique_users": 45337.2097081457,
      "pages_per_visit": 19.0044789081156
    },
    {
      "global_rank": 54533,
      "category_rank": 85,
      "domain": "bookey.app",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 1688476.85517866,
      "curr_month_visits": 1688476.85517866,
      "unique_users": 1116478.74931998,
      "pages_per_visit": 1.61176080786768
    },
    {
      "global_rank": 137447,
      "category_rank": 85,
      "domain": "philatlas.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 446665.063519685,
      "curr_month_visits": 446665.063519685,
      "unique_users": 271818.630423684,
      "pages_per_visit": 1.98295831090806
    },
    {
      "global_rank": 68785,
      "category_rank": 85,
      "domain": "wnba.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 4567042.45619322,
      "curr_month_visits": 4567042.45619322,
      "unique_users": 2149643.82727343,
      "pages_per_visit": 2.83573807435712
    },
    {
      "global_rank": 127249,
      "category_rank": 86,
      "domain": "engwe-bikes-eu.com",
      "category": "Sports/Running",
      "avg_month_visits": 354233.805937781,
      "curr_month_visits": 354233.805937781,
      "unique_users": 145042.058461303,
      "pages_per_visit": 3.22899106638672
    },
    {
      "global_rank": 292824,
      "category_rank": 86,
      "domain": "avalanche.ca",
      "category": "Sports/Fishing",
      "avg_month_visits": 58003.2344796782,
      "curr_month_visits": 58003.2344796782,
      "unique_users": 21593.8402929781,
      "pages_per_visit": 3.78280588111504
    },
    {
      "global_rank": 85797,
      "category_rank": 86,
      "domain": "abcam.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 639330.347255773,
      "curr_month_visits": 639330.347255773,
      "unique_users": 296595.457415289,
      "pages_per_visit": 3.20258773131334
    },
    {
      "global_rank": 3512,
      "category_rank": 86,
      "domain": "learncbse.in",
      "category": "Sports/Soccer",
      "avg_month_visits": 20200921.9544154,
      "curr_month_visits": 20200921.9544154,
      "unique_users": 6492338.80577164,
      "pages_per_visit": 2.61527762936851
    },
    {
      "global_rank": 205099,
      "category_rank": 86,
      "domain": "dp.tech",
      "category": "Sports/Volleyball",
      "avg_month_visits": 209848.257489764,
      "curr_month_visits": 209848.257489764,
      "unique_users": 119429.483876546,
      "pages_per_visit": 3.3586914410267
    },
    {
      "global_rank": 103170,
      "category_rank": 86,
      "domain": "bypassmobile.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 376087.715618315,
      "curr_month_visits": 376087.715618315,
      "unique_users": 45194.1433008105,
      "pages_per_visit": 6.83326921198742
    },
    {
      "global_rank": 224792,
      "category_rank": 86,
      "domain": "jpsk.jp",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 185845.48582565,
      "curr_month_visits": 185845.48582565,
      "unique_users": 148172.36699848,
      "pages_per_visit": 3.00497968106865
    },
    {
      "global_rank": 69373,
      "category_rank": 86,
      "domain": "playback.tv",
      "category": "Sports/Basketball",
      "avg_month_visits": 758293.297568907,
      "curr_month_visits": 758293.297568907,
      "unique_users": 210721.492324879,
      "pages_per_visit": 3.2010031351236
    },
    {
      "global_rank": 3637,
      "category_rank": 87,
      "domain": "brasilescola.uol.com.br",
      "category": "Sports/Rugby",
      "avg_month_visits": 20472409.5423901,
      "curr_month_visits": 20472409.5423901,
      "unique_users": 8691051.50745353,
      "pages_per_visit": 2.44757983646064
    },
    {
      "global_rank": 292882,
      "category_rank": 87,
      "domain": "kibuba.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 114422.268233696,
      "curr_month_visits": 114422.268233696,
      "unique_users": 44507.8170200391,
      "pages_per_visit": 3.55517603090569
    },
    {
      "global_rank": 350722,
      "category_rank": 87,
      "domain": "astronautix.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 100133.833600096,
      "curr_month_visits": 100133.833600096,
      "unique_users": 52032.3320481251,
      "pages_per_visit": 2.29374562126497
    },
    {
      "global_rank": 205758,
      "category_rank": 87,
      "domain": "fishersci.co.uk",
      "category": "Sports/Soccer",
      "avg_month_visits": 230507.330728971,
      "curr_month_visits": 230507.330728971,
      "unique_users": 117730.256586482,
      "pages_per_visit": 2.88432491803382
    },
    {
      "global_rank": 62170,
      "category_rank": 87,
      "domain": "mathpapa.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 1539141.73018499,
      "curr_month_visits": 1539141.73018499,
      "unique_users": 820594.699127172,
      "pages_per_visit": 1.87906689155783
    },
    {
      "global_rank": 237491,
      "category_rank": 87,
      "domain": "scijinks.gov",
      "category": "Sports/Rugby",
      "avg_month_visits": 217279.025485028,
      "curr_month_visits": 217279.025485028,
      "unique_users": 132933.042217763,
      "pages_per_visit": 1.62603562674112
    },
    {
      "global_rank": 55044,
      "category_rank": 87,
      "domain": "nlc.cn",
      "category": "Sports/Basketball",
      "avg_month_visits": 643166.82157164,
      "curr_month_visits": 643166.82157164,
      "unique_users": 344815.024992877,
      "pages_per_visit": 7.41952813718235
    },
    {
      "global_rank": 140042,
      "category_rank": 88,
      "domain": "oceana.org",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 519175.166351527,
      "curr_month_visits": 519175.166351527,
      "unique_users": 311910.378699812,
      "pages_per_visit": 1.59461029554952
    },
    {
      "global_rank": 62570,
      "category_rank": 88,
      "domain": "grenet.fr",
      "category": "Sports/Volleyball",
      "avg_month_visits": 1347755.61411015,
      "curr_month_visits": 1347755.61411015,
      "unique_users": 118014.476981616,
      "pages_per_visit": 2.21672399324696
    },
    {
      "global_rank": 104584,
      "category_rank": 88,
      "domain": "altafiber.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 396315.248952549,
      "curr_month_visits": 396315.248952549,
      "unique_users": 233870.881912804,
      "pages_per_visit": 4.99559087473102
    },
    {
      "global_rank": 345385,
      "category_rank": 88,
      "domain": "ohiogamefishing.com",
      "category": "Sports/Sports",
      "avg_month_visits": 89753.3592122269,
      "curr_month_visits": 89753.3592122269,
      "unique_users": 40783.0647553265,
      "pages_per_visit": 5.37357067196214
    },
    {
      "global_rank": 2124,
      "category_rank": 88,
      "domain": "exlibrisgroup.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 27660254.5446713,
      "curr_month_visits": 27660254.5446713,
      "unique_users": 5757002.63740483,
      "pages_per_visit": 5.62304368266061
    },
    {
      "global_rank": 231324,
      "category_rank": 88,
      "domain": "cggedomex.gob.mx",
      "category": "Sports/Boxing",
      "avg_month_visits": 414408.608188433,
      "curr_month_visits": 414408.608188433,
      "unique_users": 146413.661511697,
      "pages_per_visit": 4.32176112224251
    },
    {
      "global_rank": 685277,
      "category_rank": 88,
      "domain": "collegescholarships.org",
      "category": "Sports/Volleyball",
      "avg_month_visits": 61018.7934977127,
      "curr_month_visits": 61018.7934977127,
      "unique_users": 42371.7297671398,
      "pages_per_visit": 2.2866490567446
    },
    {
      "global_rank": 207206,
      "category_rank": 88,
      "domain": "iupac.org",
      "category": "Sports/Golf",
      "avg_month_visits": 238008.07397203,
      "curr_month_visits": 238008.07397203,
      "unique_users": 133511.812940472,
      "pages_per_visit": 2.11561183584461
    },
    {
      "global_rank": 241659,
      "category_rank": 89,
      "domain": "mgri.ru",
      "category": "Sports/Volleyball",
      "avg_month_visits": 199080.065623515,
      "curr_month_visits": 199080.065623515,
      "unique_users": 51408.9304468574,
      "pages_per_visit": 3.41333125612353
    },
    {
      "global_rank": 70276,
      "category_rank": 89,
      "domain": "legapallacanestro.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 696113.628286948,
      "curr_month_visits": 696113.628286948,
      "unique_users": 182276.889335884,
      "pages_per_visit": 3.7506066735596
    },
    {
      "global_rank": 140084,
      "category_rank": 89,
      "domain": "grist.org",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 544774.335207882,
      "curr_month_visits": 544774.335207882,
      "unique_users": 370676.538190303,
      "pages_per_visit": 1.47850337878623
    },
    {
      "global_rank": 359029,
      "category_rank": 89,
      "domain": "moon-cycle.net",
      "category": "Sports/Boxing",
      "avg_month_visits": 119563.834166278,
      "curr_month_visits": 119563.834166278,
      "unique_users": 54725.7485901949,
      "pages_per_visit": 1.98734368063283
    },
    {
      "global_rank": 105042,
      "category_rank": 89,
      "domain": "americantowns.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 185763.047761874,
      "curr_month_visits": 185763.047761874,
      "unique_users": 129078.476322027,
      "pages_per_visit": 11.5276391427052
    },
    {
      "global_rank": 87354,
      "category_rank": 89,
      "domain": "bio-rad.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 638556.451728957,
      "curr_month_visits": 638556.451728957,
      "unique_users": 338845.7111724,
      "pages_per_visit": 2.67668019618883
    },
    {
      "global_rank": 298549,
      "category_rank": 90,
      "domain": "knivesandtools.it",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 122205.003662079,
      "curr_month_visits": 122205.003662079,
      "unique_users": 56203.2408728982,
      "pages_per_visit": 3.61222095828508
    },
    {
      "global_rank": 176421,
      "category_rank": 90,
      "domain": "physicsworld.com",
      "category": "Sports/Sports",
      "avg_month_visits": 437255.085112587,
      "curr_month_visits": 437255.085112587,
      "unique_users": 246538.129429059,
      "pages_per_visit": 1.67807299724299
    },
    {
      "global_rank": 87452,
      "category_rank": 90,
      "domain": "ptgcn.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 356991.808458364,
      "curr_month_visits": 356991.808458364,
      "unique_users": 89993.2468139158,
      "pages_per_visit": 8.36570963784717
    },
    {
      "global_rank": 3732,
      "category_rank": 90,
      "domain": "mathway.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 21404233.5458928,
      "curr_month_visits": 21404233.5458928,
      "unique_users": 10337380.2769757,
      "pages_per_visit": 2.70643044224004
    },
    {
      "global_rank": 131815,
      "category_rank": 90,
      "domain": "ortlieb.com",
      "category": "Sports/Volleyball",
      "avg_month_visits": 344824.344811391,
      "curr_month_visits": 344824.344811391,
      "unique_users": 185072.205831136,
      "pages_per_visit": 5.0715709336011
    },
    {
      "global_rank": 79964,
      "category_rank": 90,
      "domain": "understat.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 609824.356960547,
      "curr_month_visits": 609824.356960547,
      "unique_users": 235089.091220623,
      "pages_per_visit": 3.80349192984531
    },
    {
      "global_rank": 232702,
      "category_rank": 90,
      "domain": "thomasmore365.sharepoint.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 208922.366651753,
      "curr_month_visits": 208922.366651753,
      "unique_users": 30854.6898714669,
      "pages_per_visit": 3.85129637913525
    },
    {
      "global_rank": 2160,
      "category_rank": 90,
      "domain": "richmondlp.com",
      "category": "Sports/Golf",
      "avg_month_visits": 13844543.9629413,
      "curr_month_visits": 13844543.9629413,
      "unique_users": 4141947.19209745,
      "pages_per_visit": 9.77386251599779
    },
    {
      "global_rank": 360060,
      "category_rank": 90,
      "domain": "feutecheduph-my.sharepoint.com",
      "category": "Sports/Fishing",
      "avg_month_visits": 110483.386549299,
      "curr_month_visits": 110483.386549299,
      "unique_users": 22523.8543320018,
      "pages_per_visit": 3.19683391772189
    },
    {
      "global_rank": 70520,
      "category_rank": 90,
      "domain": "eurobasket.com",
      "category": "Sports/Cycling_and_Biking",
      "avg_month_visits": 680009.675566512,
      "curr_month_visits": 680009.675566512,
      "unique_users": 299224.403222981,
      "pages_per_visit": 5.83307565226886
    },
    {
      "global_rank": 63942,
      "category_rank": 90,
      "domain": "hubbl.com.au",
      "category": "Sports/Sports",
      "avg_month_visits": 765506.429603997,
      "curr_month_visits": 765506.429603997,
      "unique_users": 520179.45877468,
      "pages_per_visit": 4.04899740217985
    },
    {
      "global_rank": 3766,
      "category_rank": 91,
      "domain": "todamateria.com.br",
      "category": "Sports/Golf",
      "avg_month_visits": 20750830.9063989,
      "curr_month_visits": 20750830.9063989,
      "unique_users": 10057188.2910328,
      "pages_per_visit": 2.11574473237436
    },
    {
      "global_rank": 362362,
      "category_rank": 91,
      "domain": "cseligman.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 117826.664420499,
      "curr_month_visits": 117826.664420499,
      "unique_users": 46387.4179666401,
      "pages_per_visit": 1.34350806540084
    },
    {
      "global_rank": 235366,
      "category_rank": 91,
      "domain": "mobile-o-hara.jp",
      "category": "Sports/Climbing",
      "avg_month_visits": 207367.128525092,
      "curr_month_visits": 207367.128525092,
      "unique_users": 33422.3571305986,
      "pages_per_visit": 3.46390154747499
    },
    {
      "global_rank": 71447,
      "category_rank": 91,
      "domain": "football-gm.com",
      "category": "Sports/Golf",
      "avg_month_visits": 262112.543591709,
      "curr_month_visits": 262112.543591709,
      "unique_users": 59063.0390096545,
      "pages_per_visit": 40.041492774828
    },
    {
      "global_rank": 97993,
      "category_rank": 91,
      "domain": "reso-m.fr",
      "category": "Sports/Baseball",
      "avg_month_visits": 592707.749874001,
      "curr_month_visits": 592707.749874001,
      "unique_users": 189545.509370666,
      "pages_per_visit": 2.743909923064
    },
    {
      "global_rank": 623374,
      "category_rank": 91,
      "domain": "therugbynetwork.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 42388.9279893422,
      "curr_month_visits": 42388.9279893422,
      "unique_users": 19983.1362848394,
      "pages_per_visit": 2.85321951992226
    },
    {
      "global_rank": 209062,
      "category_rank": 91,
      "domain": "scihub.net.cn",
      "category": "Sports/Baseball",
      "avg_month_visits": 290930.306146443,
      "curr_month_visits": 290930.306146443,
      "unique_users": 130069.783691809,
      "pages_per_visit": 2.47714092949732
    },
    {
      "global_rank": 106080,
      "category_rank": 91,
      "domain": "wlw.de",
      "category": "Sports",
      "avg_month_visits": 514609.641521482,
      "curr_month_visits": 514609.641521482,
      "unique_users": 339501.928914715,
      "pages_per_visit": 3.65448085502483
    },
    {
      "global_rank": 211254,
      "category_rank": 92,
      "domain": "chemistrysteps.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 254539.560919258,
      "curr_month_visits": 254539.560919258,
      "unique_users": 147703.364751822,
      "pages_per_visit": 1.56245243176068
    },
    {
      "global_rank": 101569,
      "category_rank": 92,
      "domain": "khutabaa.com",
      "category": "Sports/American_Football",
      "avg_month_visits": 600938.771343127,
      "curr_month_visits": 600938.771343127,
      "unique_users": 305256.218617549,
      "pages_per_visit": 2.38623107116442
    },
    {
      "global_rank": 142248,
      "category_rank": 92,
      "domain": "justdiggit.org",
      "category": "Sports/Hunting_and_Shooting",
      "avg_month_visits": 455000.266158648,
      "curr_month_visits": 455000.266158648,
      "unique_users": 222277.082367727,
      "pages_per_visit": 1.38965004776866
    },
    {
      "global_rank": 405730,
      "category_rank": 92,
      "domain": "perseus.org",
      "category": "Sports/Baseball",
      "avg_month_visits": 72388.8367904912,
      "curr_month_visits": 72388.8367904912,
      "unique_users": 34444.0094138721,
      "pages_per_visit": 5.02190533008462
    },
    {
      "global_rank": 111275,
      "category_rank": 92,
      "domain": "asts.jp",
      "category": "Sports/Rugby",
      "avg_month_visits": 431422.585414708,
      "curr_month_visits": 431422.585414708,
      "unique_users": 106620.771093014,
      "pages_per_visit": 5.61980053176984
    },
    {
      "global_rank": 3216,
      "category_rank": 92,
      "domain": "sportshub.stream",
      "category": "Sports",
      "avg_month_visits": 20048052.1868596,
      "curr_month_visits": 20048052.1868596,
      "unique_users": 4475208.15976112,
      "pages_per_visit": 3.01065234368312
    },
    {
      "global_rank": 36551,
      "category_rank": 92,
      "domain": "ecmwf.int",
      "category": "Sports/Volleyball",
      "avg_month_visits": 1033688.63164553,
      "curr_month_visits": 1033688.63164553,
      "unique_users": 388713.446526181,
      "pages_per_visit": 11.2246746680783
    },
    {
      "global_rank": 132990,
      "category_rank": 92,
      "domain": "bicyclebluebook.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 402472.171963707,
      "curr_month_visits": 402472.171963707,
      "unique_users": 219675.654921983,
      "pages_per_visit": 4.07332581220567
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