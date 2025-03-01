
import {Top_Website_Categories} from '@/lib/top_websites';
import {useLocale, useTranslations} from 'next-intl';

export const metadata = {
  title: 'Top Pets and Animals Websites Ranking in the World, 2025',
  description: 'The top 1000 most visited entertainment websites in the World by Ahrefs organic search traffic estimates. Updated monthly. 2025',
  keywords: ['Top Websites', 'Top Websites Ranking','Pets and Animals'],
  authors: [
    { name: 'hackX', url: 'https://www.xucongyong.com' }
  ]
}


export default function TopWebsite() {


  const global_rank_all = [
    {
      "global_rank": 1809,
      "category_rank": 1,
      "domain": "zinchangmanga.net",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 16554551.3009015,
      "curr_month_visits": 16554551.3009015,
      "unique_users": 1976763.91693016,
      "pages_per_visit": 4.79808797479323
    },
    {
      "global_rank": 14666,
      "category_rank": 1,
      "domain": "fitnesslove.net",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 5297592.32031867,
      "curr_month_visits": 5297592.32031867,
      "unique_users": 2600453.56105267,
      "pages_per_visit": 3.80228058011451
    },
    {
      "global_rank": 728,
      "category_rank": 1,
      "domain": "chewy.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 47766260.4233839,
      "curr_month_visits": 47766260.4233839,
      "unique_users": 23238028.9355999,
      "pages_per_visit": 5.80396418809721
    },
    {
      "global_rank": 3928,
      "category_rank": 1,
      "domain": "geny.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 10811237.5235441,
      "curr_month_visits": 10811237.5235441,
      "unique_users": 401970.019973104,
      "pages_per_visit": 14.7648628161334
    },
    {
      "global_rank": 566,
      "category_rank": 1,
      "domain": "shallalflexors.top",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 58386888.7730739,
      "curr_month_visits": 58386888.7730739,
      "unique_users": 28975366.5197008,
      "pages_per_visit": 2.88038545546919
    },
    {
      "global_rank": 3322,
      "category_rank": 1,
      "domain": "cety.app",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 13742722.6411589,
      "curr_month_visits": 13742722.6411589,
      "unique_users": 6092849.60989839,
      "pages_per_visit": 5.9110797590141
    },
    {
      "global_rank": 3308,
      "category_rank": 2,
      "domain": "petsmart.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 14344853.8366803,
      "curr_month_visits": 14344853.8366803,
      "unique_users": 8535737.14003759,
      "pages_per_visit": 4.15874016694021
    },
    {
      "global_rank": 29102,
      "category_rank": 2,
      "domain": "waarneming.nl",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 1267355.90019718,
      "curr_month_visits": 1267355.90019718,
      "unique_users": 205038.604232899,
      "pages_per_visit": 19.2318460029157
    },
    {
      "global_rank": 9523,
      "category_rank": 2,
      "domain": "zone-turf.fr",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 6072277.42830347,
      "curr_month_visits": 6072277.42830347,
      "unique_users": 515871.34341631,
      "pages_per_visit": 6.89764229116902
    },
    {
      "global_rank": 2111,
      "category_rank": 2,
      "domain": "ibomma.day",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 12786502.1726226,
      "curr_month_visits": 12786502.1726226,
      "unique_users": 4039174.82957122,
      "pages_per_visit": 5.53609437977564
    },
    {
      "global_rank": 18071,
      "category_rank": 2,
      "domain": "workingnews117.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 6110196.69226342,
      "curr_month_visits": 6110196.69226342,
      "unique_users": 1421253.90351556,
      "pages_per_visit": 1.55002606871671
    },
    {
      "global_rank": 17896,
      "category_rank": 2,
      "domain": "newtoki462.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 16295799.646289,
      "curr_month_visits": 16295799.646289,
      "unique_users": 2285273.94227395,
      "pages_per_visit": 10.2647764501725
    },
    {
      "global_rank": 3815,
      "category_rank": 2,
      "domain": "petfinder.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 10166625.566381,
      "curr_month_visits": 10166625.566381,
      "unique_users": 4266557.64576662,
      "pages_per_visit": 8.7575611221059
    },
    {
      "global_rank": 4669,
      "category_rank": 3,
      "domain": "bappam.to",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 13114971.4245344,
      "curr_month_visits": 13114971.4245344,
      "unique_users": 2887267.91935679,
      "pages_per_visit": 4.58277289808844
    },
    {
      "global_rank": 3629,
      "category_rank": 3,
      "domain": "petco.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 13515159.7105043,
      "curr_month_visits": 13515159.7105043,
      "unique_users": 7919872.44676559,
      "pages_per_visit": 4.75978051648979
    },
    {
      "global_rank": 10062,
      "category_rank": 3,
      "domain": "racing.hkjc.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 4499711.14123558,
      "curr_month_visits": 4499711.14123558,
      "unique_users": 436208.38377922,
      "pages_per_visit": 14.2037004554674
    },
    {
      "global_rank": 36691,
      "category_rank": 3,
      "domain": "wagwalking.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 2461314.94376299,
      "curr_month_visits": 2461314.94376299,
      "unique_users": 1823669.57336598,
      "pages_per_visit": 1.45743651959807
    },
    {
      "global_rank": 5719,
      "category_rank": 3,
      "domain": "mania.kr",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 7301094.29800636,
      "curr_month_visits": 7301094.29800636,
      "unique_users": 1692937.07951819,
      "pages_per_visit": 8.55520829017239
    },
    {
      "global_rank": 6057,
      "category_rank": 4,
      "domain": "clickfilter.co",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 18471715.6448281,
      "curr_month_visits": 18471715.6448281,
      "unique_users": 13002388.5957827,
      "pages_per_visit": 1.75822689439901
    },
    {
      "global_rank": 39469,
      "category_rank": 4,
      "domain": "pethelpful.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 2123494.01276853,
      "curr_month_visits": 2123494.01276853,
      "unique_users": 1387404.22687569,
      "pages_per_visit": 1.57987534705094
    },
    {
      "global_rank": 6932,
      "category_rank": 4,
      "domain": "oversolosisor.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 7893413.07547858,
      "curr_month_visits": 7893413.07547858,
      "unique_users": 4845648.36574521,
      "pages_per_visit": 2.29659369370716
    },
    {
      "global_rank": 31967,
      "category_rank": 4,
      "domain": "allaboutbirds.org",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 2266201.39169652,
      "curr_month_visits": 2266201.39169652,
      "unique_users": 1342495.41546501,
      "pages_per_visit": 2.57357239909337
    },
    {
      "global_rank": 3944,
      "category_rank": 4,
      "domain": "vetrf.ru",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 6438268.92137202,
      "curr_month_visits": 6438268.92137202,
      "unique_users": 481207.010822363,
      "pages_per_visit": 31.8872479615879
    },
    {
      "global_rank": 14069,
      "category_rank": 4,
      "domain": "turfomania.fr",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 3697763.32210002,
      "curr_month_visits": 3697763.32210002,
      "unique_users": 305718.492504202,
      "pages_per_visit": 7.16344708810907
    },
    {
      "global_rank": 45121,
      "category_rank": 5,
      "domain": "starpassing.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 2071458.40495886,
      "curr_month_visits": 2071458.40495886,
      "unique_users": 1281541.48932886,
      "pages_per_visit": 1.53136630203802
    },
    {
      "global_rank": 6971,
      "category_rank": 5,
      "domain": "blinkit.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 6552237.22222866,
      "curr_month_visits": 6552237.22222866,
      "unique_users": 3893193.33108483,
      "pages_per_visit": 4.24153458264909
    },
    {
      "global_rank": 58041,
      "category_rank": 5,
      "domain": "kiwoko.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 908292.498998745,
      "curr_month_visits": 908292.498998745,
      "unique_users": 529003.255736909,
      "pages_per_visit": 3.75479659635258
    },
    {
      "global_rank": 9130,
      "category_rank": 5,
      "domain": "pets4homes.co.uk",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 6359752.1671277,
      "curr_month_visits": 6359752.1671277,
      "unique_users": 2222357.17163567,
      "pages_per_visit": 5.93539949346075
    },
    {
      "global_rank": 54199,
      "category_rank": 6,
      "domain": "danseisama.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 818168.454403371,
      "curr_month_visits": 818168.454403371,
      "unique_users": 330213.843423308,
      "pages_per_visit": 2.74797288158589
    },
    {
      "global_rank": 18826,
      "category_rank": 6,
      "domain": "horseandhound.co.uk",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 2019543.66989505,
      "curr_month_visits": 2019543.66989505,
      "unique_users": 671620.732721551,
      "pages_per_visit": 6.55051512519071
    },
    {
      "global_rank": 8004,
      "category_rank": 6,
      "domain": "rover.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 7855836.29485817,
      "curr_month_visits": 7855836.29485817,
      "unique_users": 4397529.36421764,
      "pages_per_visit": 3.93065936694617
    },
    {
      "global_rank": 8872,
      "category_rank": 6,
      "domain": "mp3juices.click",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 5967137.55542905,
      "curr_month_visits": 5967137.55542905,
      "unique_users": 2461501.5027095,
      "pages_per_visit": 5.31707868072247
    },
    {
      "global_rank": 9738,
      "category_rank": 6,
      "domain": "nap-camp.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 7837055.95336359,
      "curr_month_visits": 7837055.95336359,
      "unique_users": 2791532.13771322,
      "pages_per_visit": 3.71397633722392
    },
    {
      "global_rank": 9773,
      "category_rank": 7,
      "domain": "akc.org",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 7365869.41653338,
      "curr_month_visits": 7365869.41653338,
      "unique_users": 4855777.15614513,
      "pages_per_visit": 2.67339893008059
    },
    {
      "global_rank": 9809,
      "category_rank": 7,
      "domain": "thedodo.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 9447457.15361914,
      "curr_month_visits": 9447457.15361914,
      "unique_users": 5053441.18722365,
      "pages_per_visit": 1.61503345428714
    },
    {
      "global_rank": 45000,
      "category_rank": 7,
      "domain": "burgerprofiel.be",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 931716.477137783,
      "curr_month_visits": 931716.477137783,
      "unique_users": 517204.632861679,
      "pages_per_visit": 4.74895658555374
    },
    {
      "global_rank": 18981,
      "category_rank": 7,
      "domain": "horsereality.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 1037873.02723885,
      "curr_month_visits": 1037873.02723885,
      "unique_users": 107338.477603485,
      "pages_per_visit": 50.9188843514025
    },
    {
      "global_rank": 55389,
      "category_rank": 7,
      "domain": "bulkreefsupply.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 679829.482685529,
      "curr_month_visits": 679829.482685529,
      "unique_users": 233005.916525698,
      "pages_per_visit": 5.59158550108613
    },
    {
      "global_rank": 78187,
      "category_rank": 8,
      "domain": "rescuegroups.org",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 458744.856200011,
      "curr_month_visits": 458744.856200011,
      "unique_users": 136266.943182483,
      "pages_per_visit": 8.85717652978368
    },
    {
      "global_rank": 19367,
      "category_rank": 8,
      "domain": "notifpush.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 5197336.19519159,
      "curr_month_visits": 5197336.19519159,
      "unique_users": 1977891.83959108,
      "pages_per_visit": 1.19668504488326
    },
    {
      "global_rank": 10459,
      "category_rank": 8,
      "domain": "gingrapp.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 4838993.5748297,
      "curr_month_visits": 4838993.5748297,
      "unique_users": 985138.44974185,
      "pages_per_visit": 8.9478029919428
    },
    {
      "global_rank": 3744,
      "category_rank": 8,
      "domain": "dramacool.bg",
      "category": "Pets_and_Animals",
      "avg_month_visits": 17571460.2500942,
      "curr_month_visits": 17571460.2500942,
      "unique_users": 4074299.8787655,
      "pages_per_visit": 3.67170293149256
    },
    {
      "global_rank": 10817,
      "category_rank": 8,
      "domain": "adoptapet.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 5260541.51237649,
      "curr_month_visits": 5260541.51237649,
      "unique_users": 2435454.09115195,
      "pages_per_visit": 4.68042434628361
    },
    {
      "global_rank": 48055,
      "category_rank": 9,
      "domain": "rspb.org.uk",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 1153604.21717039,
      "curr_month_visits": 1153604.21717039,
      "unique_users": 713672.298847908,
      "pages_per_visit": 2.79614124013547
    },
    {
      "global_rank": 62985,
      "category_rank": 9,
      "domain": "aquariumcoop.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 1193662.81301806,
      "curr_month_visits": 1193662.81301806,
      "unique_users": 525670.007462584,
      "pages_per_visit": 2.28801243257665
    },
    {
      "global_rank": 19891,
      "category_rank": 9,
      "domain": "equidia.fr",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 3727287.77861193,
      "curr_month_visits": 3727287.77861193,
      "unique_users": 493724.120226277,
      "pages_per_visit": 3.06852099989304
    },
    {
      "global_rank": 12929,
      "category_rank": 9,
      "domain": "hint-pot.jp",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 7333042.38854883,
      "curr_month_visits": 7333042.38854883,
      "unique_users": 3958801.36269087,
      "pages_per_visit": 1.75532501729773
    },
    {
      "global_rank": 9812,
      "category_rank": 9,
      "domain": "sweetastes.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 6892859.46639283,
      "curr_month_visits": 6892859.46639283,
      "unique_users": 607172.962262001,
      "pages_per_visit": 4.16760550334648
    },
    {
      "global_rank": 11839,
      "category_rank": 9,
      "domain": "petlove.com.br",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 4980032.18643273,
      "curr_month_visits": 4980032.18643273,
      "unique_users": 2644267.33872148,
      "pages_per_visit": 3.65724685985575
    },
    {
      "global_rank": 13347,
      "category_rank": 10,
      "domain": "wanchan.jp",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 5131836.30765273,
      "curr_month_visits": 5131836.30765273,
      "unique_users": 2950152.26703621,
      "pages_per_visit": 1.87410731997949
    },
    {
      "global_rank": 12391,
      "category_rank": 10,
      "domain": "petz.com.br",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 5518444.32976769,
      "curr_month_visits": 5518444.32976769,
      "unique_users": 3571213.64529616,
      "pages_per_visit": 2.41821104999988
    },
    {
      "global_rank": 15499,
      "category_rank": 11,
      "domain": "min-breeder.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 3799460.47957048,
      "curr_month_visits": 3799460.47957048,
      "unique_users": 1363485.5018855,
      "pages_per_visit": 4.94285993412111
    },
    {
      "global_rank": 115860,
      "category_rank": 11,
      "domain": "wooo.tw",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 163375.960851186,
      "curr_month_visits": 163375.960851186,
      "unique_users": 51054.5864310016,
      "pages_per_visit": 29.4812214538747
    },
    {
      "global_rank": 65342,
      "category_rank": 11,
      "domain": "expres-wallet.pro",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 886024.091174655,
      "curr_month_visits": 886024.091174655,
      "unique_users": 156443.073891174,
      "pages_per_visit": 2.29086799310529
    },
    {
      "global_rank": 18370,
      "category_rank": 12,
      "domain": "eureka.tokyo",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 4697725.69265652,
      "curr_month_visits": 4697725.69265652,
      "unique_users": 1573005.18095579,
      "pages_per_visit": 1.50757061922811
    },
    {
      "global_rank": 116114,
      "category_rank": 12,
      "domain": "pngaaa.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 441509.252828913,
      "curr_month_visits": 441509.252828913,
      "unique_users": 264360.863249422,
      "pages_per_visit": 2.56144139658754
    },
    {
      "global_rank": 72425,
      "category_rank": 12,
      "domain": "news4wide.net",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 1171644.24238183,
      "curr_month_visits": 1171644.24238183,
      "unique_users": 287502.302197897,
      "pages_per_visit": 1.42978890342158
    },
    {
      "global_rank": 16116,
      "category_rank": 12,
      "domain": "bappam.market",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 7039026.88899355,
      "curr_month_visits": 7039026.88899355,
      "unique_users": 1857988.36427811,
      "pages_per_visit": 3.98560315605029
    },
    {
      "global_rank": 14224,
      "category_rank": 12,
      "domain": "petsathome.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 3843804.74585967,
      "curr_month_visits": 3843804.74585967,
      "unique_users": 2281765.58767958,
      "pages_per_visit": 4.40962270214784
    },
    {
      "global_rank": 15932,
      "category_rank": 13,
      "domain": "centerwellpharmacy.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 2740998.32682718,
      "curr_month_visits": 2740998.32682718,
      "unique_users": 1192285.17643525,
      "pages_per_visit": 7.21807673863401
    },
    {
      "global_rank": 57074,
      "category_rank": 13,
      "domain": "audubon.org",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 1250407.63612297,
      "curr_month_visits": 1250407.63612297,
      "unique_users": 828100.755288069,
      "pages_per_visit": 2.03339538195934
    },
    {
      "global_rank": 127657,
      "category_rank": 13,
      "domain": "c-platonus.kz",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 197370.929726773,
      "curr_month_visits": 197370.929726773,
      "unique_users": 42629.2258881193,
      "pages_per_visit": 6.11968521487333
    },
    {
      "global_rank": 18735,
      "category_rank": 13,
      "domain": "cornucopia.se",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 5198267.37823218,
      "curr_month_visits": 5198267.37823218,
      "unique_users": 272255.499307913,
      "pages_per_visit": 2.72855214767495
    },
    {
      "global_rank": 22664,
      "category_rank": 13,
      "domain": "creditlose.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 3991983.93532918,
      "curr_month_visits": 3991983.93532918,
      "unique_users": 461115.863886516,
      "pages_per_visit": 4.04472564913694
    },
    {
      "global_rank": 84913,
      "category_rank": 13,
      "domain": "mojianime.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 1337774.48211328,
      "curr_month_visits": 1337774.48211328,
      "unique_users": 81370.4274100539,
      "pages_per_visit": 3.49717697984819
    },
    {
      "global_rank": 5005,
      "category_rank": 13,
      "domain": "kaido.to",
      "category": "Pets_and_Animals",
      "avg_month_visits": 13593596.6981293,
      "curr_month_visits": 13593596.6981293,
      "unique_users": 2309393.44361988,
      "pages_per_visit": 6.08249949018169
    },
    {
      "global_rank": 20282,
      "category_rank": 14,
      "domain": "nekochan.jp",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 4112513.78169195,
      "curr_month_visits": 4112513.78169195,
      "unique_users": 2366498.09544427,
      "pages_per_visit": 1.82100851616471
    },
    {
      "global_rank": 16753,
      "category_rank": 14,
      "domain": "cobasi.com.br",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 3570366.48158366,
      "curr_month_visits": 3570366.48158366,
      "unique_users": 2285022.11534491,
      "pages_per_visit": 3.09980177017966
    },
    {
      "global_rank": 128828,
      "category_rank": 14,
      "domain": "whatsappgb.top",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 245538.424249228,
      "curr_month_visits": 245538.424249228,
      "unique_users": 164300.886913148,
      "pages_per_visit": 4.11469090302542
    },
    {
      "global_rank": 23541,
      "category_rank": 14,
      "domain": "racenet.com.au",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 1995223.57088588,
      "curr_month_visits": 1995223.57088588,
      "unique_users": 547091.911783336,
      "pages_per_visit": 4.06302933911974
    },
    {
      "global_rank": 86996,
      "category_rank": 14,
      "domain": "liveaquaria.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 461147.233337848,
      "curr_month_visits": 461147.233337848,
      "unique_users": 202578.697692608,
      "pages_per_visit": 5.4830090047623
    },
    {
      "global_rank": 63762,
      "category_rank": 14,
      "domain": "news.ohmymag.co.uk",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 1241805.19688088,
      "curr_month_visits": 1241805.19688088,
      "unique_users": 643943.754953308,
      "pages_per_visit": 1.64096891755067
    },
    {
      "global_rank": 24881,
      "category_rank": 15,
      "domain": "bokt.nl",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 2319484.95201919,
      "curr_month_visits": 2319484.95201919,
      "unique_users": 639569.662540246,
      "pages_per_visit": 7.32398631337339
    },
    {
      "global_rank": 65842,
      "category_rank": 15,
      "domain": "pipa.be",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 493951.842959131,
      "curr_month_visits": 493951.842959131,
      "unique_users": 98108.2980841119,
      "pages_per_visit": 7.97200456347522
    },
    {
      "global_rank": 20517,
      "category_rank": 15,
      "domain": "ardsmamoswineon.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 7843159.43000206,
      "curr_month_visits": 7843159.43000206,
      "unique_users": 4407678.36724554,
      "pages_per_visit": 2.25802212621893
    },
    {
      "global_rank": 16875,
      "category_rank": 15,
      "domain": "zooplus.de",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 3057488.70163896,
      "curr_month_visits": 3057488.70163896,
      "unique_users": 1573638.01459944,
      "pages_per_visit": 5.43606995507025
    },
    {
      "global_rank": 129506,
      "category_rank": 15,
      "domain": "lebenskompass.eu",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 322981.240217875,
      "curr_month_visits": 322981.240217875,
      "unique_users": 189244.344573854,
      "pages_per_visit": 3.13029786520815
    },
    {
      "global_rank": 23791,
      "category_rank": 16,
      "domain": "paradepets.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 2910027.72596097,
      "curr_month_visits": 2910027.72596097,
      "unique_users": 1360657.50398979,
      "pages_per_visit": 1.60811145616853
    },
    {
      "global_rank": 137621,
      "category_rank": 16,
      "domain": "metlifepetinsurance.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 382302.597101354,
      "curr_month_visits": 382302.597101354,
      "unique_users": 251876.231040114,
      "pages_per_visit": 2.08105598719776
    },
    {
      "global_rank": 17345,
      "category_rank": 16,
      "domain": "zooplus.pl",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 2686817.9988985,
      "curr_month_visits": 2686817.9988985,
      "unique_users": 1356230.57723208,
      "pages_per_visit": 6.13236810612672
    },
    {
      "global_rank": 26919,
      "category_rank": 17,
      "domain": "indiarace.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 2452652.44046535,
      "curr_month_visits": 2452652.44046535,
      "unique_users": 147430.057652614,
      "pages_per_visit": 5.98974008317356
    },
    {
      "global_rank": 17422,
      "category_rank": 17,
      "domain": "fressnapf.de",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 3276631.63945691,
      "curr_month_visits": 3276631.63945691,
      "unique_users": 1870921.81747264,
      "pages_per_visit": 3.52883680906161
    },
    {
      "global_rank": 109284,
      "category_rank": 17,
      "domain": "buceplant.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 370878.425563966,
      "curr_month_visits": 370878.425563966,
      "unique_users": 161047.907050911,
      "pages_per_visit": 4.70347376288499
    },
    {
      "global_rank": 6312,
      "category_rank": 17,
      "domain": "hitmos.me",
      "category": "Pets_and_Animals",
      "avg_month_visits": 14050075.5042768,
      "curr_month_visits": 14050075.5042768,
      "unique_users": 5284810.16814331,
      "pages_per_visit": 1.47491829326936
    },
    {
      "global_rank": 152042,
      "category_rank": 17,
      "domain": "dogsnaturallymagazine.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 397257.700004561,
      "curr_month_visits": 397257.700004561,
      "unique_users": 242142.703076252,
      "pages_per_visit": 1.51078745550382
    },
    {
      "global_rank": 45649,
      "category_rank": 18,
      "domain": "passgallery.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 1080357.93512088,
      "curr_month_visits": 1080357.93512088,
      "unique_users": 412828.508641544,
      "pages_per_visit": 4.61556778027868
    },
    {
      "global_rank": 79116,
      "category_rank": 18,
      "domain": "pitts.be",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 240134.854522927,
      "curr_month_visits": 240134.854522927,
      "unique_users": 37035.7544580718,
      "pages_per_visit": 18.1216220669553
    },
    {
      "global_rank": 154590,
      "category_rank": 18,
      "domain": "campbowwow.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 283434.317932928,
      "curr_month_visits": 283434.317932928,
      "unique_users": 158064.369605392,
      "pages_per_visit": 3.41938318189403
    },
    {
      "global_rank": 17954,
      "category_rank": 18,
      "domain": "ezyvet.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 4477618.23042098,
      "curr_month_visits": 4477618.23042098,
      "unique_users": 533517.131019291,
      "pages_per_visit": 5.25600829309827
    },
    {
      "global_rank": 24687,
      "category_rank": 18,
      "domain": "woopets.fr",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 3163104.20312291,
      "curr_month_visits": 3163104.20312291,
      "unique_users": 1537453.62826055,
      "pages_per_visit": 1.85897996974629
    },
    {
      "global_rank": 111465,
      "category_rank": 18,
      "domain": "plantedtank.net",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 620894.008874194,
      "curr_month_visits": 620894.008874194,
      "unique_users": 284190.691129566,
      "pages_per_visit": 1.89557165082466
    },
    {
      "global_rank": 32444,
      "category_rank": 18,
      "domain": "drf.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 1527978.04244881,
      "curr_month_visits": 1527978.04244881,
      "unique_users": 265320.780981972,
      "pages_per_visit": 9.92655510893107
    },
    {
      "global_rank": 159558,
      "category_rank": 19,
      "domain": "02516.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 442693.696243806,
      "curr_month_visits": 442693.696243806,
      "unique_users": 145660.253794225,
      "pages_per_visit": 2.17902336146055
    },
    {
      "global_rank": 46489,
      "category_rank": 19,
      "domain": "postable.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 637113.50539616,
      "curr_month_visits": 637113.50539616,
      "unique_users": 337852.275395805,
      "pages_per_visit": 6.02489881312134
    },
    {
      "global_rank": 114968,
      "category_rank": 19,
      "domain": "eccjrbsaudiomovie.jp",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 328287.14967484,
      "curr_month_visits": 328287.14967484,
      "unique_users": 41857.9496658976,
      "pages_per_visit": 9.5201791584948
    },
    {
      "global_rank": 93894,
      "category_rank": 19,
      "domain": "bird.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 456157.058819393,
      "curr_month_visits": 456157.058819393,
      "unique_users": 228068.493375267,
      "pages_per_visit": 5.65366133602985
    },
    {
      "global_rank": 18199,
      "category_rank": 19,
      "domain": "petmd.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 5190717.41648467,
      "curr_month_visits": 5190717.41648467,
      "unique_users": 3836057.0628444,
      "pages_per_visit": 1.51774295356131
    },
    {
      "global_rank": 39157,
      "category_rank": 20,
      "domain": "notifadz.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 2229314.53922997,
      "curr_month_visits": 2229314.53922997,
      "unique_users": 994269.250920487,
      "pages_per_visit": 1.45566000173653
    },
    {
      "global_rank": 180969,
      "category_rank": 20,
      "domain": "petsmartcharities.org",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 200276.659055556,
      "curr_month_visits": 200276.659055556,
      "unique_users": 146159.547428985,
      "pages_per_visit": 5.41806426165327
    },
    {
      "global_rank": 101746,
      "category_rank": 20,
      "domain": "medico.com.bd",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 300218.301243013,
      "curr_month_visits": 300218.301243013,
      "unique_users": 26749.7993467453,
      "pages_per_visit": 5.38371011030823
    },
    {
      "global_rank": 115993,
      "category_rank": 20,
      "domain": "fanfishka.ru",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 550008.436128376,
      "curr_month_visits": 550008.436128376,
      "unique_users": 199657.38831141,
      "pages_per_visit": 2.50937162024935
    },
    {
      "global_rank": 27294,
      "category_rank": 20,
      "domain": "besttoolsforai.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 3477188.3800331,
      "curr_month_visits": 3477188.3800331,
      "unique_users": 2326281.13009172,
      "pages_per_visit": 1.6146967031413
    },
    {
      "global_rank": 18678,
      "category_rank": 20,
      "domain": "royalcanin.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 4092808.88503412,
      "curr_month_visits": 4092808.88503412,
      "unique_users": 2710369.42941493,
      "pages_per_visit": 2.60511758953143
    },
    {
      "global_rank": 18847,
      "category_rank": 21,
      "domain": "yeschat.ai",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 3282166.23658626,
      "curr_month_visits": 3282166.23658626,
      "unique_users": 2079450.25166626,
      "pages_per_visit": 2.18817228914847
    },
    {
      "global_rank": 8819,
      "category_rank": 21,
      "domain": "papadustream.id",
      "category": "Pets_and_Animals",
      "avg_month_visits": 24228973.2520947,
      "curr_month_visits": 24228973.2520947,
      "unique_users": 2852541.25547429,
      "pages_per_visit": 2.46292421436584
    },
    {
      "global_rank": 122233,
      "category_rank": 21,
      "domain": "babareo.site",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 289217.147008498,
      "curr_month_visits": 289217.147008498,
      "unique_users": 101108.978550114,
      "pages_per_visit": 8.26191759197414
    },
    {
      "global_rank": 181123,
      "category_rank": 21,
      "domain": "24petwatch.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 285070.252270854,
      "curr_month_visits": 285070.252270854,
      "unique_users": 204976.942794358,
      "pages_per_visit": 2.10724141826386
    },
    {
      "global_rank": 39695,
      "category_rank": 21,
      "domain": "val9ja.com.ng",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 1021535.73614834,
      "curr_month_visits": 1021535.73614834,
      "unique_users": 482473.837592973,
      "pages_per_visit": 4.92741129850123
    },
    {
      "global_rank": 19545,
      "category_rank": 22,
      "domain": "petbarn.com.au",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 2835718.92944353,
      "curr_month_visits": 2835718.92944353,
      "unique_users": 1119317.70649813,
      "pages_per_visit": 4.45185753041082
    },
    {
      "global_rank": 126750,
      "category_rank": 22,
      "domain": "newtoki344.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 899588.623550102,
      "curr_month_visits": 899588.623550102,
      "unique_users": 131588.782080294,
      "pages_per_visit": 1.14607125635635
    },
    {
      "global_rank": 39751,
      "category_rank": 22,
      "domain": "letrot.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 1165274.37388056,
      "curr_month_visits": 1165274.37388056,
      "unique_users": 209621.228343465,
      "pages_per_visit": 6.83129008498911
    },
    {
      "global_rank": 182965,
      "category_rank": 22,
      "domain": "purina.it",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 379232.270307657,
      "curr_month_visits": 379232.270307657,
      "unique_users": 300574.415046755,
      "pages_per_visit": 1.42697787497595
    },
    {
      "global_rank": 103658,
      "category_rank": 22,
      "domain": "observation.org",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 433573.104049021,
      "curr_month_visits": 433573.104049021,
      "unique_users": 178579.140538645,
      "pages_per_visit": 5.74409531835165
    },
    {
      "global_rank": 19658,
      "category_rank": 23,
      "domain": "zooplus.fr",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 2232350.95247955,
      "curr_month_visits": 2232350.95247955,
      "unique_users": 1134142.56926542,
      "pages_per_visit": 5.76081247691424
    },
    {
      "global_rank": 40723,
      "category_rank": 23,
      "domain": "turf-fr.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 1362084.6787809,
      "curr_month_visits": 1362084.6787809,
      "unique_users": 204327.166118886,
      "pages_per_visit": 4.38705924538528
    },
    {
      "global_rank": 52436,
      "category_rank": 23,
      "domain": "bridallive.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 730525.088206971,
      "curr_month_visits": 730525.088206971,
      "unique_users": 156339.053546356,
      "pages_per_visit": 13.7313309444121
    },
    {
      "global_rank": 128373,
      "category_rank": 23,
      "domain": "fishbase.se",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 372956.302975447,
      "curr_month_visits": 372956.302975447,
      "unique_users": 186295.744469387,
      "pages_per_visit": 2.43739099887337
    },
    {
      "global_rank": 191415,
      "category_rank": 23,
      "domain": "jethrojeff.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 364473.522512473,
      "curr_month_visits": 364473.522512473,
      "unique_users": 232445.713157507,
      "pages_per_visit": 1.70623582380737
    },
    {
      "global_rank": 129684,
      "category_rank": 24,
      "domain": "tetra.net",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 481113.083545966,
      "curr_month_visits": 481113.083545966,
      "unique_users": 250995.265624384,
      "pages_per_visit": 1.89664064744216
    },
    {
      "global_rank": 53233,
      "category_rank": 24,
      "domain": "gorko.ru",
      "category": "Pets_and_Animals",
      "avg_month_visits": 750385.423733579,
      "curr_month_visits": 750385.423733579,
      "unique_users": 431120.274714697,
      "pages_per_visit": 5.48628336951995
    },
    {
      "global_rank": 29937,
      "category_rank": 24,
      "domain": "pobretv.net",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 2558455.87847371,
      "curr_month_visits": 2558455.87847371,
      "unique_users": 699800.539598728,
      "pages_per_visit": 2.47212813947916
    },
    {
      "global_rank": 107204,
      "category_rank": 24,
      "domain": "agri.bg",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 695773.203968174,
      "curr_month_visits": 695773.203968174,
      "unique_users": 214581.455214035,
      "pages_per_visit": 1.76876073784519
    },
    {
      "global_rank": 21241,
      "category_rank": 24,
      "domain": "hostlereshook.top",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 3608785.08781535,
      "curr_month_visits": 3608785.08781535,
      "unique_users": 2669491.26485936,
      "pages_per_visit": 1.50087018355847
    },
    {
      "global_rank": 193255,
      "category_rank": 24,
      "domain": "iamcountryside.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 319526.835354054,
      "curr_month_visits": 319526.835354054,
      "unique_users": 202804.586455299,
      "pages_per_visit": 1.59894492163267
    },
    {
      "global_rank": 41814,
      "category_rank": 25,
      "domain": "ecollege78.fr",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 1554612.03137551,
      "curr_month_visits": 1554612.03137551,
      "unique_users": 133234.797703353,
      "pages_per_visit": 3.53544207101173
    },
    {
      "global_rank": 194902,
      "category_rank": 25,
      "domain": "mcmurrayhatchery.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 173252.406983114,
      "curr_month_visits": 173252.406983114,
      "unique_users": 99644.8800188984,
      "pages_per_visit": 4.93936676940477
    },
    {
      "global_rank": 141338,
      "category_rank": 25,
      "domain": "swelluk.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 328957.231606569,
      "curr_month_visits": 328957.231606569,
      "unique_users": 159744.665995816,
      "pages_per_visit": 3.45463510067897
    },
    {
      "global_rank": 30594,
      "category_rank": 25,
      "domain": "logoform.jp",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 2933663.02462031,
      "curr_month_visits": 2933663.02462031,
      "unique_users": 1460376.44734948,
      "pages_per_visit": 1.84361457813584
    },
    {
      "global_rank": 110598,
      "category_rank": 26,
      "domain": "birdguides.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 503181.198827024,
      "curr_month_visits": 503181.198827024,
      "unique_users": 231589.141130456,
      "pages_per_visit": 2.71832419995358
    },
    {
      "global_rank": 195883,
      "category_rank": 26,
      "domain": "youcare.world",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 250941.481740834,
      "curr_month_visits": 250941.481740834,
      "unique_users": 19146.9851027496,
      "pages_per_visit": 5.57206611824995
    },
    {
      "global_rank": 37306,
      "category_rank": 26,
      "domain": "lovemeow.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 2220947.78279615,
      "curr_month_visits": 2220947.78279615,
      "unique_users": 879182.502404637,
      "pages_per_visit": 1.69989051163841
    },
    {
      "global_rank": 43906,
      "category_rank": 26,
      "domain": "move-hub.net",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 2364121.12258142,
      "curr_month_visits": 2364121.12258142,
      "unique_users": 994090.650612633,
      "pages_per_visit": 1.29103186117329
    },
    {
      "global_rank": 54237,
      "category_rank": 26,
      "domain": "client-gallery.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 472034.945173268,
      "curr_month_visits": 472034.945173268,
      "unique_users": 188031.727769204,
      "pages_per_visit": 12.4022413360041
    },
    {
      "global_rank": 144291,
      "category_rank": 26,
      "domain": "mgevs.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 316806.015165266,
      "curr_month_visits": 316806.015165266,
      "unique_users": 142514.758280504,
      "pages_per_visit": 3.93593440421992
    },
    {
      "global_rank": 22022,
      "category_rank": 27,
      "domain": "vcahospitals.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 3769664.31831046,
      "curr_month_visits": 3769664.31831046,
      "unique_users": 2615262.71225293,
      "pages_per_visit": 2.23739277282542
    },
    {
      "global_rank": 50190,
      "category_rank": 27,
      "domain": "racing.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 1048874.182872,
      "curr_month_visits": 1048874.182872,
      "unique_users": 306814.755304214,
      "pages_per_visit": 4.12185045510758
    },
    {
      "global_rank": 196936,
      "category_rank": 27,
      "domain": "wanimo.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 219466.21252545,
      "curr_month_visits": 219466.21252545,
      "unique_users": 124852.013109577,
      "pages_per_visit": 3.26620789751539
    },
    {
      "global_rank": 157318,
      "category_rank": 27,
      "domain": "guide.in.ua",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 519851.035694506,
      "curr_month_visits": 519851.035694506,
      "unique_users": 355318.551832286,
      "pages_per_visit": 1.32479705673245
    },
    {
      "global_rank": 112411,
      "category_rank": 27,
      "domain": "vogelbescherming.nl",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 515722.955056853,
      "curr_month_visits": 515722.955056853,
      "unique_users": 230513.28222259,
      "pages_per_visit": 2.58289054987045
    },
    {
      "global_rank": 61446,
      "category_rank": 28,
      "domain": "stillwhite.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 544891.006021492,
      "curr_month_visits": 544891.006021492,
      "unique_users": 253264.816209277,
      "pages_per_visit": 9.45512084857852
    },
    {
      "global_rank": 203304,
      "category_rank": 28,
      "domain": "tierliebhaber.de",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 190678.457082903,
      "curr_month_visits": 190678.457082903,
      "unique_users": 104427.546281814,
      "pages_per_visit": 2.65807792271511
    },
    {
      "global_rank": 116158,
      "category_rank": 28,
      "domain": "birdsoftheworld.org",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 339840.175421729,
      "curr_month_visits": 339840.175421729,
      "unique_users": 147769.702340076,
      "pages_per_visit": 4.40106939959994
    },
    {
      "global_rank": 22716,
      "category_rank": 28,
      "domain": "petsuppliesplus.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 2375232.72852396,
      "curr_month_visits": 2375232.72852396,
      "unique_users": 1401086.48720769,
      "pages_per_visit": 4.51095890602515
    },
    {
      "global_rank": 160686,
      "category_rank": 28,
      "domain": "powdervalley.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 223435.776602558,
      "curr_month_visits": 223435.776602558,
      "unique_users": 111045.653747,
      "pages_per_visit": 3.54287179193628
    },
    {
      "global_rank": 50787,
      "category_rank": 28,
      "domain": "france-galop.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 684128.721640847,
      "curr_month_visits": 684128.721640847,
      "unique_users": 118927.021807352,
      "pages_per_visit": 22.9388233346065
    },
    {
      "global_rank": 62562,
      "category_rank": 29,
      "domain": "rsvpify.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 1055732.47191661,
      "curr_month_visits": 1055732.47191661,
      "unique_users": 526585.348560069,
      "pages_per_visit": 2.95244951897056
    },
    {
      "global_rank": 125162,
      "category_rank": 29,
      "domain": "birdforum.net",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 390044.556659796,
      "curr_month_visits": 390044.556659796,
      "unique_users": 164098.098988049,
      "pages_per_visit": 2.93298786148307
    },
    {
      "global_rank": 52423,
      "category_rank": 29,
      "domain": "pronostics-turf.info",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 880809.419456499,
      "curr_month_visits": 880809.419456499,
      "unique_users": 90781.4772545244,
      "pages_per_visit": 5.95755846790181
    },
    {
      "global_rank": 204405,
      "category_rank": 29,
      "domain": "123pilzsuche.de",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 225744.581897814,
      "curr_month_visits": 225744.581897814,
      "unique_users": 118848.484093733,
      "pages_per_visit": 5.25977359072026
    },
    {
      "global_rank": 162836,
      "category_rank": 29,
      "domain": "sanblo.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 282259.421542726,
      "curr_month_visits": 282259.421542726,
      "unique_users": 98336.7448974149,
      "pages_per_visit": 5.19232877725449
    },
    {
      "global_rank": 171898,
      "category_rank": 30,
      "domain": "brain-testing.org",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 207320.430982126,
      "curr_month_visits": 207320.430982126,
      "unique_users": 98095.5753544588,
      "pages_per_visit": 3.51766568800938
    },
    {
      "global_rank": 206440,
      "category_rank": 30,
      "domain": "mypetchicken.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 143980.714224187,
      "curr_month_visits": 143980.714224187,
      "unique_users": 78442.4310765413,
      "pages_per_visit": 4.36176756851939
    },
    {
      "global_rank": 60387,
      "category_rank": 30,
      "domain": "justhorseracing.com.au",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 722270.534840968,
      "curr_month_visits": 722270.534840968,
      "unique_users": 204348.351461891,
      "pages_per_visit": 4.17799852599163
    },
    {
      "global_rank": 147115,
      "category_rank": 30,
      "domain": "footpathmap.co.uk",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 147615.753434234,
      "curr_month_visits": 147615.753434234,
      "unique_users": 63934.7757305648,
      "pages_per_visit": 30.2169351843428
    },
    {
      "global_rank": 212447,
      "category_rank": 31,
      "domain": "gooutdoorsnorthcarolina.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 147623.946943744,
      "curr_month_visits": 147623.946943744,
      "unique_users": 60211.1154910318,
      "pages_per_visit": 10.5591877103715
    },
    {
      "global_rank": 67283,
      "category_rank": 31,
      "domain": "tableclothsfactory.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 723227.550698192,
      "curr_month_visits": 723227.550698192,
      "unique_users": 378883.489192939,
      "pages_per_visit": 5.5444226861524
    },
    {
      "global_rank": 153843,
      "category_rank": 31,
      "domain": "herbots.be",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 188954.394646441,
      "curr_month_visits": 188954.394646441,
      "unique_users": 47639.1027124543,
      "pages_per_visit": 7.7747183153531
    },
    {
      "global_rank": 173707,
      "category_rank": 31,
      "domain": "lady.24tv.ua",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 307354.071288421,
      "curr_month_visits": 307354.071288421,
      "unique_users": 157210.918539309,
      "pages_per_visit": 1.27152498539964
    },
    {
      "global_rank": 61414,
      "category_rank": 31,
      "domain": "ustrotting.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 980658.645208494,
      "curr_month_visits": 980658.645208494,
      "unique_users": 73410.0256147332,
      "pages_per_visit": 7.1466887674257
    },
    {
      "global_rank": 10407,
      "category_rank": 32,
      "domain": "ebird.org",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 4120679.05327825,
      "curr_month_visits": 4120679.05327825,
      "unique_users": 999552.923381833,
      "pages_per_visit": 9.12855467132227
    },
    {
      "global_rank": 26781,
      "category_rank": 32,
      "domain": "vin.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 2299683.10640185,
      "curr_month_visits": 2299683.10640185,
      "unique_users": 754722.34053525,
      "pages_per_visit": 5.35676633741634
    },
    {
      "global_rank": 175475,
      "category_rank": 32,
      "domain": "aquaticarts.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 225134.652788597,
      "curr_month_visits": 225134.652788597,
      "unique_users": 100515.783511624,
      "pages_per_visit": 5.12797564277805
    },
    {
      "global_rank": 154072,
      "category_rank": 32,
      "domain": "benzing.live",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 222877.591496007,
      "curr_month_visits": 222877.591496007,
      "unique_users": 53097.0438275224,
      "pages_per_visit": 9.00714686397591
    },
    {
      "global_rank": 212894,
      "category_rank": 32,
      "domain": "petivity.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 242526.977414277,
      "curr_month_visits": 242526.977414277,
      "unique_users": 191213.347297662,
      "pages_per_visit": 1.26560881413288
    },
    {
      "global_rank": 75852,
      "category_rank": 32,
      "domain": "premagic.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 356486.65223262,
      "curr_month_visits": 356486.65223262,
      "unique_users": 135315.709263952,
      "pages_per_visit": 10.2072895181676
    },
    {
      "global_rank": 77164,
      "category_rank": 33,
      "domain": "artifactuprising.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 453405.566957368,
      "curr_month_visits": 453405.566957368,
      "unique_users": 241302.148899383,
      "pages_per_visit": 4.22949316084975
    },
    {
      "global_rank": 182777,
      "category_rank": 33,
      "domain": "saltwateraquarium.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 231044.853563879,
      "curr_month_visits": 231044.853563879,
      "unique_users": 104807.697731149,
      "pages_per_visit": 3.06040605080929
    },
    {
      "global_rank": 218016,
      "category_rank": 33,
      "domain": "pethonesty.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 157227.117324483,
      "curr_month_visits": 157227.117324483,
      "unique_users": 90073.9129851078,
      "pages_per_visit": 3.40918547806093
    },
    {
      "global_rank": 154677,
      "category_rank": 33,
      "domain": "kartalescortkizlar.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 392847.48617951,
      "curr_month_visits": 392847.48617951,
      "unique_users": 263056.925920162,
      "pages_per_visit": 1.13348529482877
    },
    {
      "global_rank": 61954,
      "category_rank": 34,
      "domain": "special-newseeds.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 1029669.27551441,
      "curr_month_visits": 1029669.27551441,
      "unique_users": 730092.021850493,
      "pages_per_visit": 1.7656415309119
    },
    {
      "global_rank": 158955,
      "category_rank": 34,
      "domain": "ornitho.de",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 184733.473162659,
      "curr_month_visits": 184733.473162659,
      "unique_users": 28856.0129504985,
      "pages_per_visit": 12.6554415043784
    },
    {
      "global_rank": 77912,
      "category_rank": 34,
      "domain": "goodshuffle.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 336264.066773961,
      "curr_month_visits": 336264.066773961,
      "unique_users": 83789.8494534444,
      "pages_per_visit": 15.3834274667791
    },
    {
      "global_rank": 229440,
      "category_rank": 34,
      "domain": "trixie.de",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 152309.903178221,
      "curr_month_visits": 152309.903178221,
      "unique_users": 85821.6085828531,
      "pages_per_visit": 3.67572795798738
    },
    {
      "global_rank": 106659,
      "category_rank": 34,
      "domain": "hro.gg",
      "category": "Pets_and_Animals",
      "avg_month_visits": 275646.844066959,
      "curr_month_visits": 275646.844066959,
      "unique_users": 35594.9311605773,
      "pages_per_visit": 17.5339705678904
    },
    {
      "global_rank": 27359,
      "category_rank": 34,
      "domain": "purina.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 2600063.59596549,
      "curr_month_visits": 2600063.59596549,
      "unique_users": 1915931.79439548,
      "pages_per_visit": 2.1188268585597
    },
    {
      "global_rank": 183592,
      "category_rank": 34,
      "domain": "fishkeeper.co.uk",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 261213.44950506,
      "curr_month_visits": 261213.44950506,
      "unique_users": 129653.423278726,
      "pages_per_visit": 2.83740346921598
    },
    {
      "global_rank": 184246,
      "category_rank": 35,
      "domain": "upmoney.top",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 396341.338573561,
      "curr_month_visits": 396341.338573561,
      "unique_users": 104803.301878255,
      "pages_per_visit": 7.60734829424352
    },
    {
      "global_rank": 246913,
      "category_rank": 35,
      "domain": "annuncianimali.it",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 169233.877220747,
      "curr_month_visits": 169233.877220747,
      "unique_users": 96334.8991495995,
      "pages_per_visit": 2.97923612750936
    },
    {
      "global_rank": 81271,
      "category_rank": 35,
      "domain": "usesession.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 681711.179424296,
      "curr_month_visits": 681711.179424296,
      "unique_users": 263503.836450148,
      "pages_per_visit": 3.03375507485831
    },
    {
      "global_rank": 62518,
      "category_rank": 35,
      "domain": "nanjmuseum.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 1105288.29512171,
      "curr_month_visits": 1105288.29512171,
      "unique_users": 396568.54274707,
      "pages_per_visit": 2.71945653022748
    },
    {
      "global_rank": 160091,
      "category_rank": 35,
      "domain": "xeno-canto.org",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 313836.560101965,
      "curr_month_visits": 313836.560101965,
      "unique_users": 131030.290164538,
      "pages_per_visit": 3.66832162620707
    },
    {
      "global_rank": 162316,
      "category_rank": 36,
      "domain": "macaulaylibrary.org",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 285271.872197689,
      "curr_month_visits": 285271.872197689,
      "unique_users": 118408.461525795,
      "pages_per_visit": 3.13144078906692
    },
    {
      "global_rank": 85128,
      "category_rank": 36,
      "domain": "piary.jp",
      "category": "Pets_and_Animals",
      "avg_month_visits": 662113.675602671,
      "curr_month_visits": 662113.675602671,
      "unique_users": 363543.642194419,
      "pages_per_visit": 3.6063034564387
    },
    {
      "global_rank": 64726,
      "category_rank": 36,
      "domain": "188channel.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 648421.349464392,
      "curr_month_visits": 648421.349464392,
      "unique_users": 200417.189454954,
      "pages_per_visit": 5.97065777387284
    },
    {
      "global_rank": 186443,
      "category_rank": 36,
      "domain": "wiltec.de",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 237385.0951645,
      "curr_month_visits": 237385.0951645,
      "unique_users": 135135.774712231,
      "pages_per_visit": 3.13259474428248
    },
    {
      "global_rank": 250199,
      "category_rank": 36,
      "domain": "belfiusdirect.be",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 161488.116617823,
      "curr_month_visits": 161488.116617823,
      "unique_users": 87421.5889045544,
      "pages_per_visit": 3.15969505650575
    },
    {
      "global_rank": 28038,
      "category_rank": 37,
      "domain": "covetrus.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 2596623.96806902,
      "curr_month_visits": 2596623.96806902,
      "unique_users": 682107.332289338,
      "pages_per_visit": 4.37566110550218
    },
    {
      "global_rank": 163060,
      "category_rank": 37,
      "domain": "wincompanion.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 188484.465988753,
      "curr_month_visits": 188484.465988753,
      "unique_users": 20812.1856302474,
      "pages_per_visit": 13.8001634375186
    },
    {
      "global_rank": 111309,
      "category_rank": 37,
      "domain": "goodtimestobacco.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 224848.199651163,
      "curr_month_visits": 224848.199651163,
      "unique_users": 75997.775529674,
      "pages_per_visit": 4.16124871517138
    },
    {
      "global_rank": 259417,
      "category_rank": 37,
      "domain": "exo-terra.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 137517.437584228,
      "curr_month_visits": 137517.437584228,
      "unique_users": 74383.3717027472,
      "pages_per_visit": 3.64945407681281
    },
    {
      "global_rank": 193317,
      "category_rank": 37,
      "domain": "greenaqua.hu",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 166904.558792666,
      "curr_month_visits": 166904.558792666,
      "unique_users": 65391.0296484979,
      "pages_per_visit": 3.73334068371735
    },
    {
      "global_rank": 67492,
      "category_rank": 37,
      "domain": "keenelandselect.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 1865402.52300316,
      "curr_month_visits": 1865402.52300316,
      "unique_users": 104698.223729419,
      "pages_per_visit": 4.46410007843198
    },
    {
      "global_rank": 92608,
      "category_rank": 37,
      "domain": "theblacktux.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 575281.395095225,
      "curr_month_visits": 575281.395095225,
      "unique_users": 354751.372877071,
      "pages_per_visit": 4.24070828724391
    },
    {
      "global_rank": 67995,
      "category_rank": 38,
      "domain": "bukefalos.se",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 765742.819716285,
      "curr_month_visits": 765742.819716285,
      "unique_users": 190022.653972837,
      "pages_per_visit": 5.36180312684713
    },
    {
      "global_rank": 173890,
      "category_rank": 38,
      "domain": "argentinat.org",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 149706.539587237,
      "curr_month_visits": 149706.539587237,
      "unique_users": 73260.4434537772,
      "pages_per_visit": 7.19393284566329
    },
    {
      "global_rank": 93061,
      "category_rank": 38,
      "domain": "sayi.do",
      "category": "Pets_and_Animals",
      "avg_month_visits": 603580.17721917,
      "curr_month_visits": 603580.17721917,
      "unique_users": 246767.320891749,
      "pages_per_visit": 3.56664834337683
    },
    {
      "global_rank": 261217,
      "category_rank": 38,
      "domain": "adoptapet.com.au",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 153848.482570941,
      "curr_month_visits": 153848.482570941,
      "unique_users": 76262.7191088216,
      "pages_per_visit": 3.93521530773037
    },
    {
      "global_rank": 182141,
      "category_rank": 39,
      "domain": "francolomb.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 330073.012236743,
      "curr_month_visits": 330073.012236743,
      "unique_users": 32975.3169777973,
      "pages_per_visit": 5.98488832453747
    },
    {
      "global_rank": 93982,
      "category_rank": 39,
      "domain": "herecomestheguide.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 670221.985160575,
      "curr_month_visits": 670221.985160575,
      "unique_users": 427108.168330288,
      "pages_per_visit": 2.85295626039181
    },
    {
      "global_rank": 267867,
      "category_rank": 39,
      "domain": "careers.webuy.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 62505.8727199129,
      "curr_month_visits": 62505.8727199129,
      "unique_users": 27507.5824538712,
      "pages_per_visit": 7.76007050605988
    },
    {
      "global_rank": 70143,
      "category_rank": 40,
      "domain": "clicmouse.fr",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 827390.843866799,
      "curr_month_visits": 827390.843866799,
      "unique_users": 93897.9743467849,
      "pages_per_visit": 2.9337534508505
    },
    {
      "global_rank": 207200,
      "category_rank": 40,
      "domain": "aqa.ru",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 282377.970229413,
      "curr_month_visits": 282377.970229413,
      "unique_users": 123975.242372999,
      "pages_per_visit": 1.81754299108057
    },
    {
      "global_rank": 273456,
      "category_rank": 40,
      "domain": "chat-perdu.org",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 160337.347706034,
      "curr_month_visits": 160337.347706034,
      "unique_users": 48859.1072773231,
      "pages_per_visit": 2.85478824851738
    },
    {
      "global_rank": 99618,
      "category_rank": 40,
      "domain": "shop.apothecarium.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 528884.513514687,
      "curr_month_visits": 528884.513514687,
      "unique_users": 88267.6184285996,
      "pages_per_visit": 3.51075798045458
    },
    {
      "global_rank": 185492,
      "category_rank": 40,
      "domain": "avianavenue.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 288757.452012074,
      "curr_month_visits": 288757.452012074,
      "unique_users": 151127.668734814,
      "pages_per_visit": 1.99667744479037
    },
    {
      "global_rank": 214331,
      "category_rank": 41,
      "domain": "iroironetnews.blog.jp",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 216739.159732927,
      "curr_month_visits": 216739.159732927,
      "unique_users": 113653.170827014,
      "pages_per_visit": 1.15414345868391
    },
    {
      "global_rank": 194500,
      "category_rank": 41,
      "domain": "birdlife.org",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 257870.379916619,
      "curr_month_visits": 257870.379916619,
      "unique_users": 136141.907102066,
      "pages_per_visit": 1.89063000485395
    },
    {
      "global_rank": 103257,
      "category_rank": 41,
      "domain": "efavormart.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 480052.340159636,
      "curr_month_visits": 480052.340159636,
      "unique_users": 234961.260113428,
      "pages_per_visit": 4.48044433207057
    },
    {
      "global_rank": 287375,
      "category_rank": 41,
      "domain": "123pilze.de",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 182030.261634319,
      "curr_month_visits": 182030.261634319,
      "unique_users": 83652.8561729846,
      "pages_per_visit": 3.07256503944369
    },
    {
      "global_rank": 71518,
      "category_rank": 41,
      "domain": "racing.ustrotting.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 842689.169552322,
      "curr_month_visits": 842689.169552322,
      "unique_users": 61238.8787057193,
      "pages_per_visit": 6.50433092717347
    },
    {
      "global_rank": 195311,
      "category_rank": 42,
      "domain": "tiira.fi",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 401191.311214868,
      "curr_month_visits": 401191.311214868,
      "unique_users": 41587.3823361459,
      "pages_per_visit": 3.56588216435416
    },
    {
      "global_rank": 300541,
      "category_rank": 42,
      "domain": "petprinted.de",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 96375.5079837748,
      "curr_month_visits": 96375.5079837748,
      "unique_users": 59430.9411187433,
      "pages_per_visit": 3.63859871801423
    },
    {
      "global_rank": 122510,
      "category_rank": 42,
      "domain": "oozelife.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 297145.669668644,
      "curr_month_visits": 297145.669668644,
      "unique_users": 162294.978769975,
      "pages_per_visit": 3.99197016992284
    },
    {
      "global_rank": 217751,
      "category_rank": 42,
      "domain": "ukaps.org",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 260240.800340583,
      "curr_month_visits": 260240.800340583,
      "unique_users": 120719.841816367,
      "pages_per_visit": 2.11831999912592
    },
    {
      "global_rank": 104045,
      "category_rank": 42,
      "domain": "minted.us",
      "category": "Pets_and_Animals",
      "avg_month_visits": 709141.072403398,
      "curr_month_visits": 709141.072403398,
      "unique_users": 352915.495968638,
      "pages_per_visit": 3.04059852498349
    },
    {
      "global_rank": 52012,
      "category_rank": 43,
      "domain": "sunnyhouse-improved.blogspot.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 277434.351934305,
      "curr_month_visits": 277434.351934305,
      "unique_users": 19896.2304327917,
      "pages_per_visit": 39.5008863595213
    },
    {
      "global_rank": 224110,
      "category_rank": 43,
      "domain": "monsterfishkeepers.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 244815.620106217,
      "curr_month_visits": 244815.620106217,
      "unique_users": 135659.931594385,
      "pages_per_visit": 1.74897975165295
    },
    {
      "global_rank": 305456,
      "category_rank": 43,
      "domain": "dogorama.app",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 184963.582433872,
      "curr_month_visits": 184963.582433872,
      "unique_users": 129891.481200343,
      "pages_per_visit": 1.93315081627098
    },
    {
      "global_rank": 104931,
      "category_rank": 43,
      "domain": "benable.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 367039.1692528,
      "curr_month_visits": 367039.1692528,
      "unique_users": 80883.1542390884,
      "pages_per_visit": 6.96140154229173
    },
    {
      "global_rank": 196140,
      "category_rank": 43,
      "domain": "bto.org",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 202112.411931415,
      "curr_month_visits": 202112.411931415,
      "unique_users": 91407.5281664847,
      "pages_per_visit": 4.29371659053469
    },
    {
      "global_rank": 105094,
      "category_rank": 44,
      "domain": "honeyfund.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 658853.900615002,
      "curr_month_visits": 658853.900615002,
      "unique_users": 432091.648673277,
      "pages_per_visit": 2.69556813516665
    },
    {
      "global_rank": 125541,
      "category_rank": 44,
      "domain": "cgarsltd.co.uk",
      "category": "Pets_and_Animals",
      "avg_month_visits": 249819.917083258,
      "curr_month_visits": 249819.917083258,
      "unique_users": 110424.42930357,
      "pages_per_visit": 5.275717484644
    },
    {
      "global_rank": 32312,
      "category_rank": 44,
      "domain": "vetconnectplus.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 2474167.61994443,
      "curr_month_visits": 2474167.61994443,
      "unique_users": 236082.866490979,
      "pages_per_visit": 3.65067697442322
    },
    {
      "global_rank": 82457,
      "category_rank": 44,
      "domain": "lowadi.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 214327.311481183,
      "curr_month_visits": 214327.311481183,
      "unique_users": 13389.7360175692,
      "pages_per_visit": 69.4338218578239
    },
    {
      "global_rank": 198794,
      "category_rank": 44,
      "domain": "biodiversity4all.org",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 219793.379527609,
      "curr_month_visits": 219793.379527609,
      "unique_users": 144301.843954476,
      "pages_per_visit": 2.28058106945594
    },
    {
      "global_rank": 306386,
      "category_rank": 44,
      "domain": "qartel.co",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 171691.926248971,
      "curr_month_visits": 171691.926248971,
      "unique_users": 102368.922233271,
      "pages_per_visit": 1.5319103977805
    },
    {
      "global_rank": 231623,
      "category_rank": 44,
      "domain": "2hraquarist.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 183491.454395842,
      "curr_month_visits": 183491.454395842,
      "unique_users": 53691.4546594616,
      "pages_per_visit": 2.90778991696312
    },
    {
      "global_rank": 201243,
      "category_rank": 45,
      "domain": "birdcollective.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 144758.248110094,
      "curr_month_visits": 144758.248110094,
      "unique_users": 79947.1357434402,
      "pages_per_visit": 4.09390456845064
    },
    {
      "global_rank": 105194,
      "category_rank": 45,
      "domain": "weddingz.in",
      "category": "Pets_and_Animals",
      "avg_month_visits": 538115.318012293,
      "curr_month_visits": 538115.318012293,
      "unique_users": 378637.431420849,
      "pages_per_visit": 2.06429106961496
    },
    {
      "global_rank": 308233,
      "category_rank": 45,
      "domain": "wallpaper.dog",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 175826.931844536,
      "curr_month_visits": 175826.931844536,
      "unique_users": 100057.107834171,
      "pages_per_visit": 1.90206900048621
    },
    {
      "global_rank": 15486,
      "category_rank": 45,
      "domain": "topicbee.net",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 5939319.77074752,
      "curr_month_visits": 5939319.77074752,
      "unique_users": 3482433.32793931,
      "pages_per_visit": 1.8183577359609
    },
    {
      "global_rank": 232021,
      "category_rank": 45,
      "domain": "futoshiki.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 238706.059279956,
      "curr_month_visits": 238706.059279956,
      "unique_users": 13687.1831463318,
      "pages_per_visit": 1.2128767447669
    },
    {
      "global_rank": 201669,
      "category_rank": 46,
      "domain": "birdfy.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 162903.199614545,
      "curr_month_visits": 162903.199614545,
      "unique_users": 88063.3431842908,
      "pages_per_visit": 2.73248885899039
    },
    {
      "global_rank": 232057,
      "category_rank": 46,
      "domain": "invitalshop.sk",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 207770.56036621,
      "curr_month_visits": 207770.56036621,
      "unique_users": 68832.2931564805,
      "pages_per_visit": 5.70269747474611
    },
    {
      "global_rank": 108032,
      "category_rank": 46,
      "domain": "weddingwire.ca",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 477368.04812007,
      "curr_month_visits": 477368.04812007,
      "unique_users": 249275.18989079,
      "pages_per_visit": 3.34216015233581
    },
    {
      "global_rank": 84278,
      "category_rank": 46,
      "domain": "turfpronos.fr",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 823948.183920701,
      "curr_month_visits": 823948.183920701,
      "unique_users": 47437.295292249,
      "pages_per_visit": 4.8047129199581
    },
    {
      "global_rank": 310367,
      "category_rank": 46,
      "domain": "woopylibreria.com.ar",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 77270.9764691123,
      "curr_month_visits": 77270.9764691123,
      "unique_users": 41274.5205814196,
      "pages_per_visit": 7.79472644442194
    },
    {
      "global_rank": 202158,
      "category_rank": 47,
      "domain": "whocall.cc",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 243423.669135407,
      "curr_month_visits": 243423.669135407,
      "unique_users": 182022.215178247,
      "pages_per_visit": 1.66064446512932
    },
    {
      "global_rank": 110351,
      "category_rank": 47,
      "domain": "paperculture.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 130985.400187308,
      "curr_month_visits": 130985.400187308,
      "unique_users": 60065.7550554487,
      "pages_per_visit": 10.0658352856294
    },
    {
      "global_rank": 86245,
      "category_rank": 47,
      "domain": "equipe.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 599750.923556671,
      "curr_month_visits": 599750.923556671,
      "unique_users": 148264.352793098,
      "pages_per_visit": 4.71862273039343
    },
    {
      "global_rank": 310621,
      "category_rank": 47,
      "domain": "nongdanct.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 182573.664120848,
      "curr_month_visits": 182573.664120848,
      "unique_users": 78369.9812703032,
      "pages_per_visit": 1.61168811024204
    },
    {
      "global_rank": 202342,
      "category_rank": 48,
      "domain": "animalspot.net",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 261864.601596978,
      "curr_month_visits": 261864.601596978,
      "unique_users": 171850.586872854,
      "pages_per_visit": 1.82297209377023
    },
    {
      "global_rank": 311940,
      "category_rank": 48,
      "domain": "cocopuplondon.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 122336.353380081,
      "curr_month_visits": 122336.353380081,
      "unique_users": 64984.1447440171,
      "pages_per_visit": 5.58363573052541
    },
    {
      "global_rank": 111170,
      "category_rank": 48,
      "domain": "myprint.co.jp",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 262162.001051599,
      "curr_month_visits": 262162.001051599,
      "unique_users": 77539.7555229782,
      "pages_per_visit": 9.95282913329603
    },
    {
      "global_rank": 240464,
      "category_rank": 48,
      "domain": "fluvalaquatics.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 172229.496192957,
      "curr_month_visits": 172229.496192957,
      "unique_users": 90425.0753850136,
      "pages_per_visit": 3.0297449796396
    },
    {
      "global_rank": 131360,
      "category_rank": 48,
      "domain": "elfbargermany.de",
      "category": "Pets_and_Animals",
      "avg_month_visits": 310162.14284565,
      "curr_month_visits": 310162.14284565,
      "unique_users": 119573.466883102,
      "pages_per_visit": 6.21972767518912
    },
    {
      "global_rank": 131599,
      "category_rank": 49,
      "domain": "tecon-gmbh.de",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 168205.242943676,
      "curr_month_visits": 168205.242943676,
      "unique_users": 55930.4064598402,
      "pages_per_visit": 9.91490682114225
    },
    {
      "global_rank": 16684,
      "category_rank": 49,
      "domain": "ss7.info",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 4171390.14695364,
      "curr_month_visits": 4171390.14695364,
      "unique_users": 2054064.22753716,
      "pages_per_visit": 3.0647645777313
    },
    {
      "global_rank": 113673,
      "category_rank": 49,
      "domain": "guestpix.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 475587.030739661,
      "curr_month_visits": 475587.030739661,
      "unique_users": 183166.000612404,
      "pages_per_visit": 3.72642972015529
    },
    {
      "global_rank": 204903,
      "category_rank": 49,
      "domain": "trektellen.nl",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 228023.677662842,
      "curr_month_visits": 228023.677662842,
      "unique_users": 43594.4937767253,
      "pages_per_visit": 8.99506798931763
    },
    {
      "global_rank": 86563,
      "category_rank": 49,
      "domain": "hrnz.co.nz",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 241144.733124989,
      "curr_month_visits": 241144.733124989,
      "unique_users": 42757.23596743,
      "pages_per_visit": 9.7526990381526
    },
    {
      "global_rank": 313338,
      "category_rank": 49,
      "domain": "dbregiobus-nord.de",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 83117.5916322288,
      "curr_month_visits": 83117.5916322288,
      "unique_users": 39655.4832625874,
      "pages_per_visit": 2.47501090045173
    },
    {
      "global_rank": 115791,
      "category_rank": 50,
      "domain": "lovepop.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 372399.0594567,
      "curr_month_visits": 372399.0594567,
      "unique_users": 209779.045234801,
      "pages_per_visit": 2.90906322450595
    },
    {
      "global_rank": 206077,
      "category_rank": 50,
      "domain": "pictureinsect.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 349543.710024728,
      "curr_month_visits": 349543.710024728,
      "unique_users": 196984.626140902,
      "pages_per_visit": 1.47750412784265
    },
    {
      "global_rank": 323138,
      "category_rank": 50,
      "domain": "petted.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 53742.8646523037,
      "curr_month_visits": 53742.8646523037,
      "unique_users": 30841.5566094581,
      "pages_per_visit": 4.78869833192277
    },
    {
      "global_rank": 136686,
      "category_rank": 50,
      "domain": "tabakguru.de",
      "category": "Pets_and_Animals",
      "avg_month_visits": 313870.246932944,
      "curr_month_visits": 313870.246932944,
      "unique_users": 194025.008566336,
      "pages_per_visit": 4.99176578003811
    },
    {
      "global_rank": 241686,
      "category_rank": 50,
      "domain": "thuysinhtim.vn",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 203306.749163468,
      "curr_month_visits": 203306.749163468,
      "unique_users": 92812.3328421789,
      "pages_per_visit": 3.19347703955968
    },
    {
      "global_rank": 137331,
      "category_rank": 51,
      "domain": "vapestore.co.uk",
      "category": "Pets_and_Animals",
      "avg_month_visits": 318678.197194411,
      "curr_month_visits": 318678.197194411,
      "unique_users": 187899.472338122,
      "pages_per_visit": 4.22808013549761
    },
    {
      "global_rank": 208574,
      "category_rank": 51,
      "domain": "kmpforum.online",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 405108.640607987,
      "curr_month_visits": 405108.640607987,
      "unique_users": 55579.5402437092,
      "pages_per_visit": 3.10290173148394
    },
    {
      "global_rank": 323183,
      "category_rank": 51,
      "domain": "pilepoils.vet",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 145273.398396957,
      "curr_month_visits": 145273.398396957,
      "unique_users": 92494.9584146989,
      "pages_per_visit": 1.81659121239646
    },
    {
      "global_rank": 121051,
      "category_rank": 52,
      "domain": "one-w.net",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 348338.568667922,
      "curr_month_visits": 348338.568667922,
      "unique_users": 83081.0205660367,
      "pages_per_visit": 5.8240434985087
    },
    {
      "global_rank": 352609,
      "category_rank": 52,
      "domain": "kabochan.blog.jp",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 186864.418984125,
      "curr_month_visits": 186864.418984125,
      "unique_users": 50578.566337387,
      "pages_per_visit": 2.18591792217196
    },
    {
      "global_rank": 212888,
      "category_rank": 52,
      "domain": "superzebra.bg",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 181892.53834253,
      "curr_month_visits": 181892.53834253,
      "unique_users": 78298.7722153535,
      "pages_per_visit": 1.39458284087966
    },
    {
      "global_rank": 245388,
      "category_rank": 52,
      "domain": "gohatori.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 210919.81642188,
      "curr_month_visits": 210919.81642188,
      "unique_users": 76507.8625634026,
      "pages_per_visit": 2.12806420951099
    },
    {
      "global_rank": 90743,
      "category_rank": 52,
      "domain": "zeturf.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 699009.906828659,
      "curr_month_visits": 699009.906828659,
      "unique_users": 90268.6180835428,
      "pages_per_visit": 7.04598565974673
    },
    {
      "global_rank": 140672,
      "category_rank": 52,
      "domain": "cigar.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 201852.475086996,
      "curr_month_visits": 201852.475086996,
      "unique_users": 99213.1147155654,
      "pages_per_visit": 6.70280934847564
    },
    {
      "global_rank": 92352,
      "category_rank": 53,
      "domain": "e-sorec.ma",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 894108.864181008,
      "curr_month_visits": 894108.864181008,
      "unique_users": 93821.3158060369,
      "pages_per_visit": 4.21065039134984
    },
    {
      "global_rank": 123303,
      "category_rank": 53,
      "domain": "partyslate.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 311262.576259303,
      "curr_month_visits": 311262.576259303,
      "unique_users": 208615.376437824,
      "pages_per_visit": 3.41124134958859
    },
    {
      "global_rank": 142074,
      "category_rank": 53,
      "domain": "stiiizy.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 300226.689343022,
      "curr_month_visits": 300226.689343022,
      "unique_users": 187545.012264842,
      "pages_per_visit": 3.0837350644571
    },
    {
      "global_rank": 213324,
      "category_rank": 53,
      "domain": "abcbirds.org",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 247214.219139005,
      "curr_month_visits": 247214.219139005,
      "unique_users": 145503.36655651,
      "pages_per_visit": 2.34238847954721
    },
    {
      "global_rank": 246610,
      "category_rank": 53,
      "domain": "akvarieboden.net",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 89098.1383413969,
      "curr_month_visits": 89098.1383413969,
      "unique_users": 37072.2129726202,
      "pages_per_visit": 4.69579177641143
    },
    {
      "global_rank": 370167,
      "category_rank": 53,
      "domain": "paracord.de",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 53256.2181525742,
      "curr_month_visits": 53256.2181525742,
      "unique_users": 22953.2233481546,
      "pages_per_visit": 10.9882120284721
    },
    {
      "global_rank": 213755,
      "category_rank": 54,
      "domain": "myfate.herokuapp.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 291152.450377328,
      "curr_month_visits": 291152.450377328,
      "unique_users": 129983.832286947,
      "pages_per_visit": 1.75492614205779
    },
    {
      "global_rank": 123459,
      "category_rank": 54,
      "domain": "photorait.net",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 320263.85411796,
      "curr_month_visits": 320263.85411796,
      "unique_users": 148254.823329958,
      "pages_per_visit": 7.49717012767627
    },
    {
      "global_rank": 376214,
      "category_rank": 54,
      "domain": "naturesvariety.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 149969.441526143,
      "curr_month_visits": 149969.441526143,
      "unique_users": 84080.361040299,
      "pages_per_visit": 1.52906424329731
    },
    {
      "global_rank": 142376,
      "category_rank": 54,
      "domain": "kumulusvape.fr",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 226983.840292814,
      "curr_month_visits": 226983.840292814,
      "unique_users": 101892.186071574,
      "pages_per_visit": 4.04430031124672
    },
    {
      "global_rank": 143461,
      "category_rank": 55,
      "domain": "cohcigars.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 208137.467621281,
      "curr_month_visits": 208137.467621281,
      "unique_users": 66169.3007501534,
      "pages_per_visit": 4.61385320150188
    },
    {
      "global_rank": 214346,
      "category_rank": 55,
      "domain": "vanhatkartat.fi",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 71165.2996455113,
      "curr_month_visits": 71165.2996455113,
      "unique_users": 24993.3921862521,
      "pages_per_visit": 20.296616838073
    },
    {
      "global_rank": 393862,
      "category_rank": 55,
      "domain": "moriahelizabethmerch.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 67274.6613737401,
      "curr_month_visits": 67274.6613737401,
      "unique_users": 36901.9626749865,
      "pages_per_visit": 3.15041924734991
    },
    {
      "global_rank": 123606,
      "category_rank": 55,
      "domain": "watabe-wedding.co.jp",
      "category": "Pets_and_Animals",
      "avg_month_visits": 146778.794357367,
      "curr_month_visits": 146778.794357367,
      "unique_users": 62425.0382054467,
      "pages_per_visit": 20.3603254520274
    },
    {
      "global_rank": 98178,
      "category_rank": 56,
      "domain": "equi-score.de",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 840310.652294176,
      "curr_month_visits": 840310.652294176,
      "unique_users": 134038.694830685,
      "pages_per_visit": 6.43313899565902
    },
    {
      "global_rank": 399559,
      "category_rank": 56,
      "domain": "miau.bg",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 123463.7817589,
      "curr_month_visits": 123463.7817589,
      "unique_users": 68544.938327308,
      "pages_per_visit": 1.86263520328971
    },
    {
      "global_rank": 127118,
      "category_rank": 56,
      "domain": "weddingnews.jp",
      "category": "Pets_and_Animals",
      "avg_month_visits": 541843.014361993,
      "curr_month_visits": 541843.014361993,
      "unique_users": 337730.264244259,
      "pages_per_visit": 1.90047997853671
    },
    {
      "global_rank": 222232,
      "category_rank": 56,
      "domain": "inaturalist.ca",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 196427.298275086,
      "curr_month_visits": 196427.298275086,
      "unique_users": 81936.231153472,
      "pages_per_visit": 5.24804204024869
    },
    {
      "global_rank": 251204,
      "category_rank": 56,
      "domain": "aqueon.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 246458.26395577,
      "curr_month_visits": 246458.26395577,
      "unique_users": 150904.898019453,
      "pages_per_visit": 1.61646258307434
    },
    {
      "global_rank": 144848,
      "category_rank": 56,
      "domain": "levapoteur-discount.fr",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 212856.903561954,
      "curr_month_visits": 212856.903561954,
      "unique_users": 99082.9521043184,
      "pages_per_visit": 5.73538064362149
    },
    {
      "global_rank": 252971,
      "category_rank": 57,
      "domain": "careers.arm.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 192842.929527297,
      "curr_month_visits": 192842.929527297,
      "unique_users": 101397.135632289,
      "pages_per_visit": 2.39775690490953
    },
    {
      "global_rank": 127809,
      "category_rank": 57,
      "domain": "anniversaire.co.jp",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 491634.612462891,
      "curr_month_visits": 491634.612462891,
      "unique_users": 374834.842657584,
      "pages_per_visit": 1.59039565730161
    },
    {
      "global_rank": 225058,
      "category_rank": 57,
      "domain": "whyevolutionistrue.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 253541.056829427,
      "curr_month_visits": 253541.056829427,
      "unique_users": 108148.54178491,
      "pages_per_visit": 2.08860089462639
    },
    {
      "global_rank": 406703,
      "category_rank": 57,
      "domain": "lmmountford.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 69431.5789650724,
      "curr_month_visits": 69431.5789650724,
      "unique_users": 21651.5333927685,
      "pages_per_visit": 6.255968251568
    },
    {
      "global_rank": 145983,
      "category_rank": 58,
      "domain": "dynavap.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 264524.767549062,
      "curr_month_visits": 264524.767549062,
      "unique_users": 115010.601849932,
      "pages_per_visit": 3.81323223230975
    },
    {
      "global_rank": 128746,
      "category_rank": 58,
      "domain": "weddingbee.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 534736.019014164,
      "curr_month_visits": 534736.019014164,
      "unique_users": 300606.714823973,
      "pages_per_visit": 1.81564875520987
    },
    {
      "global_rank": 98719,
      "category_rank": 58,
      "domain": "horseracingnation.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 595011.876493895,
      "curr_month_visits": 595011.876493895,
      "unique_users": 196167.700046141,
      "pages_per_visit": 3.98451457292056
    },
    {
      "global_rank": 407971,
      "category_rank": 58,
      "domain": "vier-pfoten.de",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 82793.3845181602,
      "curr_month_visits": 82793.3845181602,
      "unique_users": 62953.0423557812,
      "pages_per_visit": 1.81398235529981
    },
    {
      "global_rank": 147326,
      "category_rank": 59,
      "domain": "jti.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 321751.023786103,
      "curr_month_visits": 321751.023786103,
      "unique_users": 151023.033418166,
      "pages_per_visit": 2.90053385666719
    },
    {
      "global_rank": 133469,
      "category_rank": 59,
      "domain": "weddingpro.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 416769.863652919,
      "curr_month_visits": 416769.863652919,
      "unique_users": 123373.957922315,
      "pages_per_visit": 4.41130154341163
    },
    {
      "global_rank": 413115,
      "category_rank": 59,
      "domain": "paleoridge.co.uk",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 34529.030965749,
      "curr_month_visits": 34529.030965749,
      "unique_users": 12692.5283001006,
      "pages_per_visit": 17.0973208493323
    },
    {
      "global_rank": 133648,
      "category_rank": 60,
      "domain": "bridestory.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 454013.993312637,
      "curr_month_visits": 454013.993312637,
      "unique_users": 279102.583745966,
      "pages_per_visit": 2.49819917543996
    },
    {
      "global_rank": 147401,
      "category_rank": 60,
      "domain": "smokersoutletonline.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 194064.57774963,
      "curr_month_visits": 194064.57774963,
      "unique_users": 103037.728508352,
      "pages_per_visit": 6.58937370020323
    },
    {
      "global_rank": 54322,
      "category_rank": 60,
      "domain": "feedingcuriosity.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 707032.847817047,
      "curr_month_visits": 707032.847817047,
      "unique_users": 346698.813714506,
      "pages_per_visit": 2.13859893620933
    },
    {
      "global_rank": 416736,
      "category_rank": 60,
      "domain": "mollies.ca",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 42869.2691421398,
      "curr_month_visits": 42869.2691421398,
      "unique_users": 21527.7676709917,
      "pages_per_visit": 5.97973712723231
    },
    {
      "global_rank": 235019,
      "category_rank": 60,
      "domain": "birdlife.org.au",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 162865.898562392,
      "curr_month_visits": 162865.898562392,
      "unique_users": 85558.6076209858,
      "pages_per_visit": 4.70051336854624
    },
    {
      "global_rank": 55023,
      "category_rank": 61,
      "domain": "newtoki461.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 16687646.7199487,
      "curr_month_visits": 16687646.7199487,
      "unique_users": 2035883.00841851,
      "pages_per_visit": 10.282929546697
    },
    {
      "global_rank": 137995,
      "category_rank": 61,
      "domain": "aisleplanner.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 397662.025762516,
      "curr_month_visits": 397662.025762516,
      "unique_users": 127738.451196151,
      "pages_per_visit": 6.47083184545218
    },
    {
      "global_rank": 236875,
      "category_rank": 61,
      "domain": "webcam-binnenvaart.nl",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 191187.711345985,
      "curr_month_visits": 191187.711345985,
      "unique_users": 17987.2102169411,
      "pages_per_visit": 5.85056264623634
    },
    {
      "global_rank": 147528,
      "category_rank": 61,
      "domain": "vapordna.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 238847.899732436,
      "curr_month_visits": 238847.899732436,
      "unique_users": 116961.933683866,
      "pages_per_visit": 5.01738455173189
    },
    {
      "global_rank": 420666,
      "category_rank": 61,
      "domain": "puppiezo.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 70430.0041111518,
      "curr_month_visits": 70430.0041111518,
      "unique_users": 44329.4386088634,
      "pages_per_visit": 2.88746892210253
    },
    {
      "global_rank": 256685,
      "category_rank": 61,
      "domain": "jbl.de",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 219437.407596739,
      "curr_month_visits": 219437.407596739,
      "unique_users": 112254.171708609,
      "pages_per_visit": 2.64028674942578
    },
    {
      "global_rank": 257980,
      "category_rank": 62,
      "domain": "tropica.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 170172.740234564,
      "curr_month_visits": 170172.740234564,
      "unique_users": 80554.8036541472,
      "pages_per_visit": 2.98281892265598
    },
    {
      "global_rank": 151790,
      "category_rank": 62,
      "domain": "shop.perfumersapprentice.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 171853.610488288,
      "curr_month_visits": 171853.610488288,
      "unique_users": 69916.6244914436,
      "pages_per_visit": 8.12325283057737
    },
    {
      "global_rank": 18416,
      "category_rank": 62,
      "domain": "omo-app.io",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 3151393.58016098,
      "curr_month_visits": 3151393.58016098,
      "unique_users": 2321632.4661093,
      "pages_per_visit": 6.58872817895655
    },
    {
      "global_rank": 138272,
      "category_rank": 62,
      "domain": "generationtux.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 407418.499696059,
      "curr_month_visits": 407418.499696059,
      "unique_users": 246417.703413686,
      "pages_per_visit": 4.09329488056124
    },
    {
      "global_rank": 433055,
      "category_rank": 62,
      "domain": "basicnetworkchain.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 120242.662163125,
      "curr_month_visits": 120242.662163125,
      "unique_users": 66088.9996563162,
      "pages_per_visit": 2.16678678647721
    },
    {
      "global_rank": 247880,
      "category_rank": 62,
      "domain": "gooutdoorsne.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 69906.793567933,
      "curr_month_visits": 69906.793567933,
      "unique_users": 36493.1721500725,
      "pages_per_visit": 6.21617169519048
    },
    {
      "global_rank": 139153,
      "category_rank": 63,
      "domain": "appycouple.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 231581.287121405,
      "curr_month_visits": 231581.287121405,
      "unique_users": 104026.445978585,
      "pages_per_visit": 6.86563428148609
    },
    {
      "global_rank": 435658,
      "category_rank": 63,
      "domain": "fregis.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 122805.368797061,
      "curr_month_visits": 122805.368797061,
      "unique_users": 86495.2799333006,
      "pages_per_visit": 1.41269206450434
    },
    {
      "global_rank": 261275,
      "category_rank": 63,
      "domain": "reefcentral.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 241490.900239898,
      "curr_month_visits": 241490.900239898,
      "unique_users": 121471.599914273,
      "pages_per_visit": 1.50231894779611
    },
    {
      "global_rank": 150558,
      "category_rank": 64,
      "domain": "brapla.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 548498.148424114,
      "curr_month_visits": 548498.148424114,
      "unique_users": 286654.461126919,
      "pages_per_visit": 1.83882280086898
    },
    {
      "global_rank": 444468,
      "category_rank": 64,
      "domain": "pharmacy4pets.fr",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 80579.9436651573,
      "curr_month_visits": 80579.9436651573,
      "unique_users": 57029.4289754355,
      "pages_per_visit": 3.02677771090293
    },
    {
      "global_rank": 153526,
      "category_rank": 64,
      "domain": "e-liquide-fr.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 225980.125243234,
      "curr_month_visits": 225980.125243234,
      "unique_users": 109076.420535021,
      "pages_per_visit": 6.55969806191298
    },
    {
      "global_rank": 149657,
      "category_rank": 64,
      "domain": "levanta.io",
      "category": "Pets_and_Animals",
      "avg_month_visits": 180555.252910028,
      "curr_month_visits": 180555.252910028,
      "unique_users": 38086.4968334797,
      "pages_per_visit": 11.976797008807
    },
    {
      "global_rank": 248515,
      "category_rank": 64,
      "domain": "jungus.cn",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 196585.097068491,
      "curr_month_visits": 196585.097068491,
      "unique_users": 93797.1539778615,
      "pages_per_visit": 2.04585302058642
    },
    {
      "global_rank": 445485,
      "category_rank": 65,
      "domain": "schulportal-erzbistum-pb.de",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 35000.0890041028,
      "curr_month_visits": 35000.0890041028,
      "unique_users": 9091.42965154191,
      "pages_per_visit": 10.7349449737602
    },
    {
      "global_rank": 263931,
      "category_rank": 65,
      "domain": "aquabid.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 83557.0857124173,
      "curr_month_visits": 83557.0857124173,
      "unique_users": 29676.8749394826,
      "pages_per_visit": 12.5457924193234
    },
    {
      "global_rank": 67765,
      "category_rank": 65,
      "domain": "movies-search.xyz",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 525215.352332066,
      "curr_month_visits": 525215.352332066,
      "unique_users": 117190.644556384,
      "pages_per_visit": 1.24388206678619
    },
    {
      "global_rank": 151720,
      "category_rank": 65,
      "domain": "wedding-spot.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 306707.439213733,
      "curr_month_visits": 306707.439213733,
      "unique_users": 218149.880955267,
      "pages_per_visit": 3.64112477823584
    },
    {
      "global_rank": 158478,
      "category_rank": 66,
      "domain": "tobaccopipes.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 216320.380822055,
      "curr_month_visits": 216320.380822055,
      "unique_users": 92289.0953809504,
      "pages_per_visit": 6.45976484394712
    },
    {
      "global_rank": 105530,
      "category_rank": 66,
      "domain": "frequence-turf.fr",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 626562.399296546,
      "curr_month_visits": 626562.399296546,
      "unique_users": 165001.767681342,
      "pages_per_visit": 2.00100724153668
    },
    {
      "global_rank": 446700,
      "category_rank": 66,
      "domain": "petraveller.com.au",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 80229.6944782529,
      "curr_month_visits": 80229.6944782529,
      "unique_users": 42786.6504845679,
      "pages_per_visit": 2.16759628475832
    },
    {
      "global_rank": 152092,
      "category_rank": 66,
      "domain": "cakedecoco.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 130614.741476229,
      "curr_month_visits": 130614.741476229,
      "unique_users": 65324.9813666451,
      "pages_per_visit": 6.5164570249511
    },
    {
      "global_rank": 46628,
      "category_rank": 66,
      "domain": "kimbino.bg",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 771980.285049196,
      "curr_month_visits": 771980.285049196,
      "unique_users": 259436.573893163,
      "pages_per_visit": 11.0922289717499
    },
    {
      "global_rank": 456359,
      "category_rank": 67,
      "domain": "casasbaratas.com.es",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 107156.527085661,
      "curr_month_visits": 107156.527085661,
      "unique_users": 43341.1059092736,
      "pages_per_visit": 2.20126171417499
    },
    {
      "global_rank": 68163,
      "category_rank": 67,
      "domain": "mustijamirri.fi",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 553889.883713261,
      "curr_month_visits": 553889.883713261,
      "unique_users": 302210.549933952,
      "pages_per_visit": 5.09397506340908
    },
    {
      "global_rank": 159997,
      "category_rank": 67,
      "domain": "ecigplanete.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 236028.418912796,
      "curr_month_visits": 236028.418912796,
      "unique_users": 100704.848554269,
      "pages_per_visit": 3.86966180537273
    },
    {
      "global_rank": 276691,
      "category_rank": 67,
      "domain": "zenjido.blog.jp",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 171084.01334607,
      "curr_month_visits": 171084.01334607,
      "unique_users": 76786.9823139138,
      "pages_per_visit": 2.27642179090621
    },
    {
      "global_rank": 155739,
      "category_rank": 67,
      "domain": "weddinginspirasi.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 904918.228886886,
      "curr_month_visits": 904918.228886886,
      "unique_users": 48063.6068228706,
      "pages_per_visit": 1.15706149895005
    },
    {
      "global_rank": 160771,
      "category_rank": 68,
      "domain": "cigaraficionado.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 322079.686137057,
      "curr_month_visits": 322079.686137057,
      "unique_users": 184074.474943258,
      "pages_per_visit": 2.59557355618485
    },
    {
      "global_rank": 159607,
      "category_rank": 68,
      "domain": "bridebook.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 301975.721961985,
      "curr_month_visits": 301975.721961985,
      "unique_users": 164751.282564098,
      "pages_per_visit": 4.68990469224603
    },
    {
      "global_rank": 456414,
      "category_rank": 68,
      "domain": "petchef.hu",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 113746.114703303,
      "curr_month_visits": 113746.114703303,
      "unique_users": 75910.3279151995,
      "pages_per_visit": 2.29559025409026
    },
    {
      "global_rank": 259370,
      "category_rank": 69,
      "domain": "bsc-eoc.org",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 193362.461587159,
      "curr_month_visits": 193362.461587159,
      "unique_users": 91738.2502855886,
      "pages_per_visit": 4.43155755439396
    },
    {
      "global_rank": 458669,
      "category_rank": 69,
      "domain": "mein-wetter.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 136546.138984727,
      "curr_month_visits": 136546.138984727,
      "unique_users": 45123.2347146262,
      "pages_per_visit": 1.40953042948415
    },
    {
      "global_rank": 161047,
      "category_rank": 69,
      "domain": "smoke-king.co.uk",
      "category": "Pets_and_Animals",
      "avg_month_visits": 252244.034069418,
      "curr_month_visits": 252244.034069418,
      "unique_users": 138681.881332573,
      "pages_per_visit": 3.93858282964455
    },
    {
      "global_rank": 264902,
      "category_rank": 70,
      "domain": "newipigeon.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 64281.1047911047,
      "curr_month_visits": 64281.1047911047,
      "unique_users": 15307.2304103768,
      "pages_per_visit": 12.1318357133029
    },
    {
      "global_rank": 467962,
      "category_rank": 70,
      "domain": "vetapotek.se",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 69892.0416243692,
      "curr_month_visits": 69892.0416243692,
      "unique_users": 41614.5007626124,
      "pages_per_visit": 2.66110602366458
    },
    {
      "global_rank": 73123,
      "category_rank": 70,
      "domain": "wolvden.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 267720.539469025,
      "curr_month_visits": 267720.539469025,
      "unique_users": 41313.6574778563,
      "pages_per_visit": 55.7322096464961
    },
    {
      "global_rank": 163153,
      "category_rank": 70,
      "domain": "fabmood.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 207944.645750375,
      "curr_month_visits": 207944.645750375,
      "unique_users": 127287.299355794,
      "pages_per_visit": 4.37241710529983
    },
    {
      "global_rank": 161525,
      "category_rank": 70,
      "domain": "iqosclub.pl",
      "category": "Pets_and_Animals",
      "avg_month_visits": 230752.609871217,
      "curr_month_visits": 230752.609871217,
      "unique_users": 113188.58798402,
      "pages_per_visit": 3.90154376556955
    },
    {
      "global_rank": 165752,
      "category_rank": 71,
      "domain": "weduploader.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 418190.595916803,
      "curr_month_visits": 418190.595916803,
      "unique_users": 183339.588830462,
      "pages_per_visit": 2.20302485986623
    },
    {
      "global_rank": 265997,
      "category_rank": 71,
      "domain": "forwardblue.org",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 216989.233042276,
      "curr_month_visits": 216989.233042276,
      "unique_users": 139342.907366564,
      "pages_per_visit": 1.20690022388277
    },
    {
      "global_rank": 474866,
      "category_rank": 71,
      "domain": "terra-aventura.fr",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 87830.9666300916,
      "curr_month_visits": 87830.9666300916,
      "unique_users": 32443.6122131669,
      "pages_per_visit": 4.64080647714449
    },
    {
      "global_rank": 282458,
      "category_rank": 71,
      "domain": "daycarekorea.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 99435.3496048525,
      "curr_month_visits": 99435.3496048525,
      "unique_users": 67976.5164732434,
      "pages_per_visit": 3.38592426923462
    },
    {
      "global_rank": 163587,
      "category_rank": 72,
      "domain": "ecigarettedirect.co.uk",
      "category": "Pets_and_Animals",
      "avg_month_visits": 295515.45783227,
      "curr_month_visits": 295515.45783227,
      "unique_users": 163973.340373937,
      "pages_per_visit": 2.8870381967289
    },
    {
      "global_rank": 49385,
      "category_rank": 72,
      "domain": "zooplus.hu",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 759754.005080939,
      "curr_month_visits": 759754.005080939,
      "unique_users": 365684.300973091,
      "pages_per_visit": 6.36192790246199
    },
    {
      "global_rank": 162548,
      "category_rank": 72,
      "domain": "armazemdoschinelos.com.br",
      "category": "Pets_and_Animals",
      "avg_month_visits": 170819.020310754,
      "curr_month_visits": 170819.020310754,
      "unique_users": 91323.2733599588,
      "pages_per_visit": 5.38589863424704
    },
    {
      "global_rank": 478623,
      "category_rank": 72,
      "domain": "unprenom.fr",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 84484.9313399906,
      "curr_month_visits": 84484.9313399906,
      "unique_users": 59519.6206499652,
      "pages_per_visit": 1.76451984732878
    },
    {
      "global_rank": 288153,
      "category_rank": 73,
      "domain": "poisson-or.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 102360.631429305,
      "curr_month_visits": 102360.631429305,
      "unique_users": 48420.3103454788,
      "pages_per_visit": 5.94446020565156
    },
    {
      "global_rank": 281621,
      "category_rank": 73,
      "domain": "lafeber.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 204622.960696425,
      "curr_month_visits": 204622.960696425,
      "unique_users": 120191.463730642,
      "pages_per_visit": 2.00543751967622
    },
    {
      "global_rank": 50514,
      "category_rank": 73,
      "domain": "homebuddy.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 2237871.03860079,
      "curr_month_visits": 2237871.03860079,
      "unique_users": 1770880.94087975,
      "pages_per_visit": 1.5566257064622
    },
    {
      "global_rank": 171806,
      "category_rank": 73,
      "domain": "overthemoon.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 212473.916443788,
      "curr_month_visits": 212473.916443788,
      "unique_users": 129577.440934824,
      "pages_per_visit": 3.39113492167146
    },
    {
      "global_rank": 483030,
      "category_rank": 73,
      "domain": "tierschutzbund.de",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 90083.7652378581,
      "curr_month_visits": 90083.7652378581,
      "unique_users": 66428.6112549703,
      "pages_per_visit": 1.61706334290458
    },
    {
      "global_rank": 163597,
      "category_rank": 73,
      "domain": "tobaccoreviews.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 311818.390899862,
      "curr_month_visits": 311818.390899862,
      "unique_users": 104381.48330527,
      "pages_per_visit": 3.13815008935152
    },
    {
      "global_rank": 115962,
      "category_rank": 73,
      "domain": "casacourses.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 633311.212675235,
      "curr_month_visits": 633311.212675235,
      "unique_users": 84354.1146204523,
      "pages_per_visit": 1.90233504166929
    },
    {
      "global_rank": 484453,
      "category_rank": 74,
      "domain": "vetmarket.biz.ua",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 79922.00039158,
      "curr_month_visits": 79922.00039158,
      "unique_users": 34485.0880378482,
      "pages_per_visit": 2.06773544141968
    },
    {
      "global_rank": 289676,
      "category_rank": 74,
      "domain": "ultimate-mushroom.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 84822.7094573697,
      "curr_month_visits": 84822.7094573697,
      "unique_users": 44271.6935152195,
      "pages_per_visit": 3.24548216809245
    },
    {
      "global_rank": 168812,
      "category_rank": 74,
      "domain": "tabak-brucker.de",
      "category": "Pets_and_Animals",
      "avg_month_visits": 286129.360488755,
      "curr_month_visits": 286129.360488755,
      "unique_users": 191287.608917151,
      "pages_per_visit": 3.86797147734065
    },
    {
      "global_rank": 116023,
      "category_rank": 74,
      "domain": "ifce.fr",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 240504.971370756,
      "curr_month_visits": 240504.971370756,
      "unique_users": 115731.152381228,
      "pages_per_visit": 6.94636484322412
    },
    {
      "global_rank": 19999,
      "category_rank": 74,
      "domain": "canalturf.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 2587880.05389965,
      "curr_month_visits": 2587880.05389965,
      "unique_users": 205780.515697503,
      "pages_per_visit": 9.46561419144201
    },
    {
      "global_rank": 495614,
      "category_rank": 75,
      "domain": "groomit.me",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 33557.1780347812,
      "curr_month_visits": 33557.1780347812,
      "unique_users": 16737.2837313509,
      "pages_per_visit": 12.9185209413206
    },
    {
      "global_rank": 173818,
      "category_rank": 75,
      "domain": "thewhisperingpages.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 166895.293554209,
      "curr_month_visits": 166895.293554209,
      "unique_users": 97127.4267769979,
      "pages_per_visit": 3.9582157839448
    },
    {
      "global_rank": 291084,
      "category_rank": 75,
      "domain": "fishermap.org",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 205924.296981434,
      "curr_month_visits": 205924.296981434,
      "unique_users": 113197.913400836,
      "pages_per_visit": 1.80869349338066
    },
    {
      "global_rank": 175842,
      "category_rank": 75,
      "domain": "templett.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 322786.22128569,
      "curr_month_visits": 322786.22128569,
      "unique_users": 130616.277590145,
      "pages_per_visit": 3.26851930866168
    },
    {
      "global_rank": 291638,
      "category_rank": 75,
      "domain": "birdwatchinghq.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 265315.417112341,
      "curr_month_visits": 265315.417112341,
      "unique_users": 179010.427615434,
      "pages_per_visit": 1.51979423352225
    },
    {
      "global_rank": 20499,
      "category_rank": 76,
      "domain": "bappam.net",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 3249292.49227992,
      "curr_month_visits": 3249292.49227992,
      "unique_users": 1082549.03179946,
      "pages_per_visit": 1.40595807607037
    },
    {
      "global_rank": 291693,
      "category_rank": 76,
      "domain": "gps-auctions.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 59084.635852996,
      "curr_month_visits": 59084.635852996,
      "unique_users": 18983.9898054777,
      "pages_per_visit": 9.64289340215338
    },
    {
      "global_rank": 501001,
      "category_rank": 76,
      "domain": "vet-firmika.ru",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 68092.1268388716,
      "curr_month_visits": 68092.1268388716,
      "unique_users": 36455.2202473262,
      "pages_per_visit": 2.11303827987678
    },
    {
      "global_rank": 51797,
      "category_rank": 76,
      "domain": "babyoftheyear.org",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 7151926.98599915,
      "curr_month_visits": 7151926.98599915,
      "unique_users": 2102567.37437408,
      "pages_per_visit": 3.61584428733472
    },
    {
      "global_rank": 171634,
      "category_rank": 76,
      "domain": "blu.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 234264.946298865,
      "curr_month_visits": 234264.946298865,
      "unique_users": 124715.723572554,
      "pages_per_visit": 4.29343943720509
    },
    {
      "global_rank": 291169,
      "category_rank": 76,
      "domain": "imperialtropicals.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 100733.630393118,
      "curr_month_visits": 100733.630393118,
      "unique_users": 46177.6859545224,
      "pages_per_visit": 4.86060105979023
    },
    {
      "global_rank": 177560,
      "category_rank": 76,
      "domain": "instaproofs.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 103990.936676878,
      "curr_month_visits": 103990.936676878,
      "unique_users": 38994.265798388,
      "pages_per_visit": 20.2131400970558
    },
    {
      "global_rank": 123797,
      "category_rank": 77,
      "domain": "sstack.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 255969.432553678,
      "curr_month_visits": 255969.432553678,
      "unique_users": 132638.006629097,
      "pages_per_visit": 4.32043397618952
    },
    {
      "global_rank": 177626,
      "category_rank": 77,
      "domain": "sixstories.co.uk",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 228815.320559506,
      "curr_month_visits": 228815.320559506,
      "unique_users": 115660.078770484,
      "pages_per_visit": 4.81146033691572
    },
    {
      "global_rank": 506124,
      "category_rank": 77,
      "domain": "everypaw.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 102049.749427519,
      "curr_month_visits": 102049.749427519,
      "unique_users": 57727.2044573024,
      "pages_per_visit": 3.18838488454189
    },
    {
      "global_rank": 125527,
      "category_rank": 78,
      "domain": "magrigg.co.uk",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 197955.000574731,
      "curr_month_visits": 197955.000574731,
      "unique_users": 125730.50982412,
      "pages_per_visit": 6.24821736446204
    },
    {
      "global_rank": 175607,
      "category_rank": 78,
      "domain": "myvaporstore.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 175033.388784263,
      "curr_month_visits": 175033.388784263,
      "unique_users": 90736.0164121048,
      "pages_per_visit": 6.41502987941987
    },
    {
      "global_rank": 177735,
      "category_rank": 78,
      "domain": "showit.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 282544.443016496,
      "curr_month_visits": 282544.443016496,
      "unique_users": 83581.3291519114,
      "pages_per_visit": 3.78190580840034
    },
    {
      "global_rank": 294169,
      "category_rank": 78,
      "domain": "rspbteemillstore.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 86467.1209696333,
      "curr_month_visits": 86467.1209696333,
      "unique_users": 45629.3750083456,
      "pages_per_visit": 3.66502346859413
    },
    {
      "global_rank": 52074,
      "category_rank": 78,
      "domain": "tails.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 846899.288953905,
      "curr_month_visits": 846899.288953905,
      "unique_users": 463803.744572184,
      "pages_per_visit": 4.99178072745713
    },
    {
      "global_rank": 192922,
      "category_rank": 78,
      "domain": "yoficial.com.br",
      "category": "Pets_and_Animals",
      "avg_month_visits": 147265.014431235,
      "curr_month_visits": 147265.014431235,
      "unique_users": 25082.1477565641,
      "pages_per_visit": 4.28104380296881
    },
    {
      "global_rank": 508483,
      "category_rank": 78,
      "domain": "kidscorner.net",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 69976.0239528545,
      "curr_month_visits": 69976.0239528545,
      "unique_users": 29127.6849932575,
      "pages_per_visit": 2.93469415725538
    },
    {
      "global_rank": 297058,
      "category_rank": 79,
      "domain": "thesafemoneyreport.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 265014.422599115,
      "curr_month_visits": 265014.422599115,
      "unique_users": 186340.357172939,
      "pages_per_visit": 1.73743980217426
    },
    {
      "global_rank": 178012,
      "category_rank": 79,
      "domain": "wezoree.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 359922.727401255,
      "curr_month_visits": 359922.727401255,
      "unique_users": 177395.094772151,
      "pages_per_visit": 1.94231633764328
    },
    {
      "global_rank": 198000,
      "category_rank": 79,
      "domain": "cittadesign.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 149683.501199613,
      "curr_month_visits": 149683.501199613,
      "unique_users": 67346.3425017583,
      "pages_per_visit": 5.22730835856885
    },
    {
      "global_rank": 298058,
      "category_rank": 79,
      "domain": "aqvium.ru",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 95029.2487363283,
      "curr_month_visits": 95029.2487363283,
      "unique_users": 31846.4294129267,
      "pages_per_visit": 2.13665795051042
    },
    {
      "global_rank": 509288,
      "category_rank": 79,
      "domain": "pets.ie",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 34304.8895726954,
      "curr_month_visits": 34304.8895726954,
      "unique_users": 18415.6479211952,
      "pages_per_visit": 6.57156321694094
    },
    {
      "global_rank": 302615,
      "category_rank": 80,
      "domain": "logome.ai",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 284616.071162038,
      "curr_month_visits": 284616.071162038,
      "unique_users": 106791.675468945,
      "pages_per_visit": 2.08472531283571
    },
    {
      "global_rank": 513567,
      "category_rank": 80,
      "domain": "kuwana.com.ar",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 53715.8412208573,
      "curr_month_visits": 53715.8412208573,
      "unique_users": 25779.559781293,
      "pages_per_visit": 4.69443247506247
    },
    {
      "global_rank": 178829,
      "category_rank": 80,
      "domain": "cigarsdaily.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 197891.59485038,
      "curr_month_visits": 197891.59485038,
      "unique_users": 54601.6227828733,
      "pages_per_visit": 5.12151307416472
    },
    {
      "global_rank": 302961,
      "category_rank": 80,
      "domain": "aqua2ch.net",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 182344.152795562,
      "curr_month_visits": 182344.152795562,
      "unique_users": 53122.2777384715,
      "pages_per_visit": 1.7296274963755
    },
    {
      "global_rank": 180874,
      "category_rank": 80,
      "domain": "planning.wedding",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 316981.787576024,
      "curr_month_visits": 316981.787576024,
      "unique_users": 134245.114285963,
      "pages_per_visit": 2.55001595872705
    },
    {
      "global_rank": 180856,
      "category_rank": 81,
      "domain": "vapejuicedepot.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 180103.295366901,
      "curr_month_visits": 180103.295366901,
      "unique_users": 100364.713765883,
      "pages_per_visit": 5.12295523606779
    },
    {
      "global_rank": 129892,
      "category_rank": 81,
      "domain": "breyerhorses.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 262552.402740965,
      "curr_month_visits": 262552.402740965,
      "unique_users": 101148.267505054,
      "pages_per_visit": 4.85730132395768
    },
    {
      "global_rank": 303684,
      "category_rank": 81,
      "domain": "ronscichlids.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 95795.3105887646,
      "curr_month_visits": 95795.3105887646,
      "unique_users": 27629.1037958111,
      "pages_per_visit": 3.99765877306886
    },
    {
      "global_rank": 21348,
      "category_rank": 81,
      "domain": "equibase.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 2477471.12075127,
      "curr_month_visits": 2477471.12075127,
      "unique_users": 315571.323538827,
      "pages_per_visit": 9.20448628855302
    },
    {
      "global_rank": 303466,
      "category_rank": 81,
      "domain": "shoulder.fan",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 217851.132306592,
      "curr_month_visits": 217851.132306592,
      "unique_users": 44184.7507683513,
      "pages_per_visit": 7.44421786768712
    },
    {
      "global_rank": 516065,
      "category_rank": 81,
      "domain": "classypetlife.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 49622.9966141976,
      "curr_month_visits": 49622.9966141976,
      "unique_users": 27370.119556529,
      "pages_per_visit": 3.9170009421028
    },
    {
      "global_rank": 182507,
      "category_rank": 81,
      "domain": "justinalexander.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 232845.811960492,
      "curr_month_visits": 232845.811960492,
      "unique_users": 98716.5678050186,
      "pages_per_visit": 4.09177426915025
    },
    {
      "global_rank": 183935,
      "category_rank": 82,
      "domain": "hana-yume.net",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 456737.530936694,
      "curr_month_visits": 456737.530936694,
      "unique_users": 242685.092097952,
      "pages_per_visit": 2.36171150261651
    },
    {
      "global_rank": 305628,
      "category_rank": 82,
      "domain": "patience-spelen.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 325069.428905961,
      "curr_month_visits": 325069.428905961,
      "unique_users": 37335.4976277303,
      "pages_per_visit": 2.576586599005
    },
    {
      "global_rank": 521765,
      "category_rank": 82,
      "domain": "drjonesnaturals.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 43983.7332021833,
      "curr_month_visits": 43983.7332021833,
      "unique_users": 26239.8504356349,
      "pages_per_visit": 3.01056738449691
    },
    {
      "global_rank": 130396,
      "category_rank": 82,
      "domain": "agradi.nl",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 235006.526612781,
      "curr_month_visits": 235006.526612781,
      "unique_users": 106268.53047305,
      "pages_per_visit": 4.5573936464585
    },
    {
      "global_rank": 93116,
      "category_rank": 83,
      "domain": "adopets.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 477240.373666836,
      "curr_month_visits": 477240.373666836,
      "unique_users": 204092.41209779,
      "pages_per_visit": 5.17390493224319
    },
    {
      "global_rank": 524838,
      "category_rank": 83,
      "domain": "garde-malade.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 19234.5461430233,
      "curr_month_visits": 19234.5461430233,
      "unique_users": 7338.07909382378,
      "pages_per_visit": 11.8447156854627
    },
    {
      "global_rank": 186379,
      "category_rank": 83,
      "domain": "registryfinder.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 334821.195617635,
      "curr_month_visits": 334821.195617635,
      "unique_users": 263007.317350746,
      "pages_per_visit": 1.97785216063024
    },
    {
      "global_rank": 21864,
      "category_rank": 83,
      "domain": "hevostalli.net",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 3233798.31220955,
      "curr_month_visits": 3233798.31220955,
      "unique_users": 76565.1215734565,
      "pages_per_visit": 9.1296172933218
    },
    {
      "global_rank": 547477,
      "category_rank": 84,
      "domain": "makeadogsmile.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 78226.6151979289,
      "curr_month_visits": 78226.6151979289,
      "unique_users": 44784.9451066988,
      "pages_per_visit": 2.5447035830255
    },
    {
      "global_rank": 216032,
      "category_rank": 84,
      "domain": "releaf.co.uk",
      "category": "Pets_and_Animals",
      "avg_month_visits": 168373.772382405,
      "curr_month_visits": 168373.772382405,
      "unique_users": 80994.4003558823,
      "pages_per_visit": 2.70443613575515
    },
    {
      "global_rank": 313582,
      "category_rank": 84,
      "domain": "parrotforums.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 153827.369717757,
      "curr_month_visits": 153827.369717757,
      "unique_users": 80838.3978471292,
      "pages_per_visit": 1.84474048388182
    },
    {
      "global_rank": 187092,
      "category_rank": 84,
      "domain": "vapoter.fr",
      "category": "Pets_and_Animals",
      "avg_month_visits": 275313.339497338,
      "curr_month_visits": 275313.339497338,
      "unique_users": 151260.508626489,
      "pages_per_visit": 4.52283805061524
    },
    {
      "global_rank": 131932,
      "category_rank": 84,
      "domain": "pedigreequery.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 223433.462250914,
      "curr_month_visits": 223433.462250914,
      "unique_users": 61499.4365819716,
      "pages_per_visit": 9.44554421383511
    },
    {
      "global_rank": 188529,
      "category_rank": 84,
      "domain": "pov.camera",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 234002.300214271,
      "curr_month_visits": 234002.300214271,
      "unique_users": 118022.849570754,
      "pages_per_visit": 2.43160828598288
    },
    {
      "global_rank": 56114,
      "category_rank": 85,
      "domain": "vetinfo.it",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 685504.197870134,
      "curr_month_visits": 685504.197870134,
      "unique_users": 66612.4488408667,
      "pages_per_visit": 13.2544352558834
    },
    {
      "global_rank": 189256,
      "category_rank": 85,
      "domain": "wed2b.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 222866.075479241,
      "curr_month_visits": 222866.075479241,
      "unique_users": 117359.033132478,
      "pages_per_visit": 4.08760283936276
    },
    {
      "global_rank": 220079,
      "category_rank": 85,
      "domain": "modi.ru",
      "category": "Pets_and_Animals",
      "avg_month_visits": 158705.479664255,
      "curr_month_visits": 158705.479664255,
      "unique_users": 93508.4505687084,
      "pages_per_visit": 3.4052272642805
    },
    {
      "global_rank": 554300,
      "category_rank": 85,
      "domain": "marspetcare.jp",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 80779.5664962655,
      "curr_month_visits": 80779.5664962655,
      "unique_users": 48220.4172483642,
      "pages_per_visit": 2.67313826963135
    },
    {
      "global_rank": 310183,
      "category_rank": 85,
      "domain": "beejwala.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 96943.6817177088,
      "curr_month_visits": 96943.6817177088,
      "unique_users": 51503.7695737132,
      "pages_per_visit": 3.42144133473881
    },
    {
      "global_rank": 325523,
      "category_rank": 86,
      "domain": "vogelbeschermingshop.nl",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 58580.3121827742,
      "curr_month_visits": 58580.3121827742,
      "unique_users": 31592.2758337379,
      "pages_per_visit": 5.27984300755581
    },
    {
      "global_rank": 189737,
      "category_rank": 86,
      "domain": "singaporebrides.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 254235.422908597,
      "curr_month_visits": 254235.422908597,
      "unique_users": 153517.73502864,
      "pages_per_visit": 2.43499710484433
    },
    {
      "global_rank": 313732,
      "category_rank": 86,
      "domain": "aquahuna.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 85449.5657556625,
      "curr_month_visits": 85449.5657556625,
      "unique_users": 39086.6471358402,
      "pages_per_visit": 8.91637842576532
    },
    {
      "global_rank": 226808,
      "category_rank": 86,
      "domain": "rewardoo.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 150539.169393942,
      "curr_month_visits": 150539.169393942,
      "unique_users": 107076.978941019,
      "pages_per_visit": 1.69743804773513
    },
    {
      "global_rank": 189761,
      "category_rank": 86,
      "domain": "zedaco.de",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 225259.634966524,
      "curr_month_visits": 225259.634966524,
      "unique_users": 126519.741115321,
      "pages_per_visit": 3.33043154929942
    },
    {
      "global_rank": 22256,
      "category_rank": 86,
      "domain": "food.topicbee.net",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 3886377.07232296,
      "curr_month_visits": 3886377.07232296,
      "unique_users": 2152114.56867786,
      "pages_per_visit": 1.76389457823615
    },
    {
      "global_rank": 229153,
      "category_rank": 87,
      "domain": "disneystore.asia",
      "category": "Pets_and_Animals",
      "avg_month_visits": 145537.179471967,
      "curr_month_visits": 145537.179471967,
      "unique_users": 67377.0174404954,
      "pages_per_visit": 3.79658730066081
    },
    {
      "global_rank": 94348,
      "category_rank": 87,
      "domain": "pets-kojima.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 512988.395177862,
      "curr_month_visits": 512988.395177862,
      "unique_users": 285665.364205858,
      "pages_per_visit": 5.12606492207541
    },
    {
      "global_rank": 565340,
      "category_rank": 87,
      "domain": "rabbits.world",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 42070.0280322294,
      "curr_month_visits": 42070.0280322294,
      "unique_users": 20921.0010167667,
      "pages_per_visit": 4.16487535540064
    },
    {
      "global_rank": 326443,
      "category_rank": 87,
      "domain": "pigeons.biz",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 137943.710451902,
      "curr_month_visits": 137943.710451902,
      "unique_users": 74351.279517449,
      "pages_per_visit": 1.94713017410827
    },
    {
      "global_rank": 190616,
      "category_rank": 87,
      "domain": "maggiesottero.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 253573.807743508,
      "curr_month_visits": 253573.807743508,
      "unique_users": 163137.033729241,
      "pages_per_visit": 2.73363256406216
    },
    {
      "global_rank": 337305,
      "category_rank": 88,
      "domain": "kikibom.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 196044.896177498,
      "curr_month_visits": 196044.896177498,
      "unique_users": 103024.867325709,
      "pages_per_visit": 1.73184034609201
    },
    {
      "global_rank": 94529,
      "category_rank": 88,
      "domain": "byanavrin.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 505309.733760392,
      "curr_month_visits": 505309.733760392,
      "unique_users": 239330.490740766,
      "pages_per_visit": 2.28518041136247
    },
    {
      "global_rank": 573742,
      "category_rank": 88,
      "domain": "greenflow.hk",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 55198.9145881346,
      "curr_month_visits": 55198.9145881346,
      "unique_users": 25401.0997500206,
      "pages_per_visit": 3.25674558104113
    },
    {
      "global_rank": 194193,
      "category_rank": 88,
      "domain": "wedgewoodweddings.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 231267.329180216,
      "curr_month_visits": 231267.329180216,
      "unique_users": 136076.322238044,
      "pages_per_visit": 4.15762224240274
    },
    {
      "global_rank": 322486,
      "category_rank": 89,
      "domain": "shrimpybusiness.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 104589.177049803,
      "curr_month_visits": 104589.177049803,
      "unique_users": 52368.8526593859,
      "pages_per_visit": 3.34421552434889
    },
    {
      "global_rank": 575255,
      "category_rank": 89,
      "domain": "pawlicywizard.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 69642.7699914882,
      "curr_month_visits": 69642.7699914882,
      "unique_users": 47894.6364969928,
      "pages_per_visit": 1.32070449225558
    },
    {
      "global_rank": 206606,
      "category_rank": 89,
      "domain": "cigarplace.biz",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 221743.770830458,
      "curr_month_visits": 221743.770830458,
      "unique_users": 94987.782939448,
      "pages_per_visit": 5.25958483088158
    },
    {
      "global_rank": 56913,
      "category_rank": 89,
      "domain": "zooart.com.pl",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 778273.908650176,
      "curr_month_visits": 778273.908650176,
      "unique_users": 467744.002667881,
      "pages_per_visit": 5.37779471398915
    },
    {
      "global_rank": 195833,
      "category_rank": 89,
      "domain": "awbridal.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 136069.408017752,
      "curr_month_visits": 136069.408017752,
      "unique_users": 77814.7758251672,
      "pages_per_visit": 6.52098584706424
    },
    {
      "global_rank": 322688,
      "category_rank": 90,
      "domain": "new-reporter.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 207318.686935822,
      "curr_month_visits": 207318.686935822,
      "unique_users": 112833.591418169,
      "pages_per_visit": 1.45893972092048
    },
    {
      "global_rank": 206736,
      "category_rank": 90,
      "domain": "mygrizzly.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 182301.019121376,
      "curr_month_visits": 182301.019121376,
      "unique_users": 86923.7607342125,
      "pages_per_visit": 4.31876378051743
    },
    {
      "global_rank": 339549,
      "category_rank": 90,
      "domain": "thewildlifetrustsshop.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 84403.7538613701,
      "curr_month_visits": 84403.7538613701,
      "unique_users": 46068.6786276601,
      "pages_per_visit": 3.8162408541674
    },
    {
      "global_rank": 575666,
      "category_rank": 90,
      "domain": "petsnowy.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 62152.7875298596,
      "curr_month_visits": 62152.7875298596,
      "unique_users": 35452.3849920925,
      "pages_per_visit": 2.39635295990737
    },
    {
      "global_rank": 56991,
      "category_rank": 90,
      "domain": "petvalu.ca",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 846302.111050272,
      "curr_month_visits": 846302.111050272,
      "unique_users": 429435.894044357,
      "pages_per_visit": 3.74122633825775
    },
    {
      "global_rank": 341445,
      "category_rank": 91,
      "domain": "birdfact.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 155703.776877724,
      "curr_month_visits": 155703.776877724,
      "unique_users": 91787.5318743878,
      "pages_per_visit": 1.41240832813545
    },
    {
      "global_rank": 235158,
      "category_rank": 91,
      "domain": "suspire.in",
      "category": "Pets_and_Animals",
      "avg_month_visits": 160958.193284824,
      "curr_month_visits": 160958.193284824,
      "unique_users": 96612.2589780961,
      "pages_per_visit": 2.91045491834532
    },
    {
      "global_rank": 200136,
      "category_rank": 91,
      "domain": "halfdaytravel.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 207529.518123185,
      "curr_month_visits": 207529.518123185,
      "unique_users": 111662.251697973,
      "pages_per_visit": 2.4916444851693
    },
    {
      "global_rank": 581570,
      "category_rank": 91,
      "domain": "usserviceanimalregistrar.org",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 35473.2388151952,
      "curr_month_visits": 35473.2388151952,
      "unique_users": 18920.4066396133,
      "pages_per_visit": 9.19736370690499
    },
    {
      "global_rank": 206816,
      "category_rank": 91,
      "domain": "gfc-provap.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 210548.21929784,
      "curr_month_visits": 210548.21929784,
      "unique_users": 58584.256720315,
      "pages_per_visit": 4.24622556166086
    },
    {
      "global_rank": 581923,
      "category_rank": 92,
      "domain": "fresheggsdaily.blog",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 84674.8304269301,
      "curr_month_visits": 84674.8304269301,
      "unique_users": 41749.2021792551,
      "pages_per_visit": 1.92322061802997
    },
    {
      "global_rank": 95667,
      "category_rank": 92,
      "domain": "kennelliitto.fi",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 505022.453461179,
      "curr_month_visits": 505022.453461179,
      "unique_users": 146438.996185072,
      "pages_per_visit": 6.86166112755079
    },
    {
      "global_rank": 345444,
      "category_rank": 92,
      "domain": "salamandre.org",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 157702.975713854,
      "curr_month_visits": 157702.975713854,
      "unique_users": 111047.153527068,
      "pages_per_visit": 2.12218281101406
    },
    {
      "global_rank": 57699,
      "category_rank": 92,
      "domain": "funnyfuzzy.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 710597.647706779,
      "curr_month_visits": 710597.647706779,
      "unique_users": 374624.260262063,
      "pages_per_visit": 3.01108406731086
    },
    {
      "global_rank": 201050,
      "category_rank": 92,
      "domain": "kululu.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 308146.602286018,
      "curr_month_visits": 308146.602286018,
      "unique_users": 84683.9334812972,
      "pages_per_visit": 2.30529732660035
    },
    {
      "global_rank": 590336,
      "category_rank": 93,
      "domain": "getstronganimals.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 85569.9120821215,
      "curr_month_visits": 85569.9120821215,
      "unique_users": 48983.1571316475,
      "pages_per_visit": 1.28273903654891
    },
    {
      "global_rank": 142801,
      "category_rank": 93,
      "domain": "equinenow.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 209966.889920467,
      "curr_month_visits": 209966.889920467,
      "unique_users": 117582.510715109,
      "pages_per_visit": 6.03420901519353
    },
    {
      "global_rank": 365965,
      "category_rank": 93,
      "domain": "jetstarmove.com.tw",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 92092.6590859669,
      "curr_month_visits": 92092.6590859669,
      "unique_users": 49840.4650856221,
      "pages_per_visit": 1.23652977033376
    },
    {
      "global_rank": 591353,
      "category_rank": 94,
      "domain": "hsi-europe.org",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 65415.2578454415,
      "curr_month_visits": 65415.2578454415,
      "unique_users": 43126.2298232948,
      "pages_per_visit": 1.72353089169521
    },
    {
      "global_rank": 23957,
      "category_rank": 94,
      "domain": "wiflix.al",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 2716726.76522593,
      "curr_month_visits": 2716726.76522593,
      "unique_users": 1634716.09555203,
      "pages_per_visit": 3.22845871530338
    },
    {
      "global_rank": 334378,
      "category_rank": 94,
      "domain": "seachem.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 95240.9742023722,
      "curr_month_visits": 95240.9742023722,
      "unique_users": 46268.5119357236,
      "pages_per_visit": 3.3986042375751
    },
    {
      "global_rank": 210721,
      "category_rank": 95,
      "domain": "4noggins-com.myshopify.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 226191.751558172,
      "curr_month_visits": 226191.751558172,
      "unique_users": 33067.7270694794,
      "pages_per_visit": 4.63570567488016
    },
    {
      "global_rank": 247178,
      "category_rank": 95,
      "domain": "brandili.com.br",
      "category": "Pets_and_Animals",
      "avg_month_visits": 180980.344772124,
      "curr_month_visits": 180980.344772124,
      "unique_users": 125173.395153724,
      "pages_per_visit": 3.30310864748686
    },
    {
      "global_rank": 143907,
      "category_rank": 95,
      "domain": "crane.jp",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 240125.316650698,
      "curr_month_visits": 240125.316650698,
      "unique_users": 35335.7363981497,
      "pages_per_visit": 7.28195073345945
    },
    {
      "global_rank": 595150,
      "category_rank": 95,
      "domain": "deutschewildtierstiftung.de",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 87344.0248421198,
      "curr_month_visits": 87344.0248421198,
      "unique_users": 62941.0200165859,
      "pages_per_visit": 1.52466314781403
    },
    {
      "global_rank": 214655,
      "category_rank": 96,
      "domain": "vaporshop.pl",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 182315.541106421,
      "curr_month_visits": 182315.541106421,
      "unique_users": 88458.8386036558,
      "pages_per_visit": 4.93817114440497
    },
    {
      "global_rank": 601511,
      "category_rank": 96,
      "domain": "chasseseternelles.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 68846.7446279593,
      "curr_month_visits": 68846.7446279593,
      "unique_users": 31645.7294486948,
      "pages_per_visit": 1.71848047916837
    },
    {
      "global_rank": 220648,
      "category_rank": 96,
      "domain": "anicrit.jp",
      "category": "Pets_and_Animals",
      "avg_month_visits": 141805.471630669,
      "curr_month_visits": 141805.471630669,
      "unique_users": 32225.1430175538,
      "pages_per_visit": 9.76457527024465
    },
    {
      "global_rank": 376166,
      "category_rank": 96,
      "domain": "avibirds.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 140587.618142527,
      "curr_month_visits": 140587.618142527,
      "unique_users": 89100.0192948839,
      "pages_per_visit": 1.29024021389265
    },
    {
      "global_rank": 144437,
      "category_rank": 96,
      "domain": "breederscup.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 207227.573080049,
      "curr_month_visits": 207227.573080049,
      "unique_users": 104542.519213112,
      "pages_per_visit": 3.83606255952372
    },
    {
      "global_rank": 101680,
      "category_rank": 96,
      "domain": "dogbreedergame.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 259100.326552292,
      "curr_month_visits": 259100.326552292,
      "unique_users": 11935.0560499756,
      "pages_per_visit": 19.5207326616371
    },
    {
      "global_rank": 214661,
      "category_rank": 97,
      "domain": "shopnaked.se",
      "category": "Pets_and_Animals",
      "avg_month_visits": 110712.511411418,
      "curr_month_visits": 110712.511411418,
      "unique_users": 38774.8245016587,
      "pages_per_visit": 6.68218411544913
    },
    {
      "global_rank": 102484,
      "category_rank": 97,
      "domain": "zoozavr.ru",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 516020.874904865,
      "curr_month_visits": 516020.874904865,
      "unique_users": 271001.855464149,
      "pages_per_visit": 3.84916094736185
    },
    {
      "global_rank": 602172,
      "category_rank": 97,
      "domain": "plant.id",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 71987.5946206303,
      "curr_month_visits": 71987.5946206303,
      "unique_users": 36485.929923235,
      "pages_per_visit": 2.97671736671313
    },
    {
      "global_rank": 379435,
      "category_rank": 97,
      "domain": "zuiso.net",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 78445.0983740275,
      "curr_month_visits": 78445.0983740275,
      "unique_users": 9901.73698705836,
      "pages_per_visit": 8.73072755777492
    },
    {
      "global_rank": 617700,
      "category_rank": 98,
      "domain": "thecomfortcompany.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 56669.2241460594,
      "curr_month_visits": 56669.2241460594,
      "unique_users": 31104.4407981947,
      "pages_per_visit": 1.62515671007661
    },
    {
      "global_rank": 226177,
      "category_rank": 98,
      "domain": "uggoriginals.com.au",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 105724.67748077,
      "curr_month_visits": 105724.67748077,
      "unique_users": 60861.5170308841,
      "pages_per_visit": 4.05520557974068
    },
    {
      "global_rank": 216162,
      "category_rank": 98,
      "domain": "itcportal.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 198246.625055699,
      "curr_month_visits": 198246.625055699,
      "unique_users": 132910.98612944,
      "pages_per_visit": 2.79842617390185
    },
    {
      "global_rank": 345154,
      "category_rank": 98,
      "domain": "hygger-online.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 85046.8352124059,
      "curr_month_visits": 85046.8352124059,
      "unique_users": 34089.8978059043,
      "pages_per_visit": 5.06363590001919
    },
    {
      "global_rank": 251219,
      "category_rank": 98,
      "domain": "besni.com.br",
      "category": "Pets_and_Animals",
      "avg_month_visits": 170658.188762725,
      "curr_month_visits": 170658.188762725,
      "unique_users": 113337.350300748,
      "pages_per_visit": 3.32089021067496
    },
    {
      "global_rank": 226710,
      "category_rank": 99,
      "domain": "prezola.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 218264.61062515,
      "curr_month_visits": 218264.61062515,
      "unique_users": 93760.5050403883,
      "pages_per_visit": 3.86744745466689
    },
    {
      "global_rank": 60903,
      "category_rank": 99,
      "domain": "msdvetmanual.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 846050.058304426,
      "curr_month_visits": 846050.058304426,
      "unique_users": 404360.649079068,
      "pages_per_visit": 3.74083882250281
    },
    {
      "global_rank": 380195,
      "category_rank": 99,
      "domain": "birdsnow.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 56687.3921341764,
      "curr_month_visits": 56687.3921341764,
      "unique_users": 33564.7328245775,
      "pages_per_visit": 4.88246266050758
    },
    {
      "global_rank": 256420,
      "category_rank": 99,
      "domain": "theworkoutwitch.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 147550.551619231,
      "curr_month_visits": 147550.551619231,
      "unique_users": 70811.6673680939,
      "pages_per_visit": 2.68325457907587
    },
    {
      "global_rank": 623661,
      "category_rank": 99,
      "domain": "fanfans.com.tw",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 51751.5866260915,
      "curr_month_visits": 51751.5866260915,
      "unique_users": 29386.0247062523,
      "pages_per_visit": 2.73154717525775
    },
    {
      "global_rank": 146985,
      "category_rank": 99,
      "domain": "vrc.com.au",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 194780.670624158,
      "curr_month_visits": 194780.670624158,
      "unique_users": 119882.816326855,
      "pages_per_visit": 2.37505477078858
    },
    {
      "global_rank": 346231,
      "category_rank": 100,
      "domain": "aqua-imports.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 92234.9745030275,
      "curr_month_visits": 92234.9745030275,
      "unique_users": 45055.3863906731,
      "pages_per_visit": 4.39181168571156
    },
    {
      "global_rank": 628865,
      "category_rank": 100,
      "domain": "anivetdirect.hu",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 23400.1647862136,
      "curr_month_visits": 23400.1647862136,
      "unique_users": 13641.4627359707,
      "pages_per_visit": 10.51478975033
    },
    {
      "global_rank": 104887,
      "category_rank": 100,
      "domain": "johndog.pl",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 484808.106100071,
      "curr_month_visits": 484808.106100071,
      "unique_users": 318618.253621991,
      "pages_per_visit": 2.33948588690555
    },
    {
      "global_rank": 382153,
      "category_rank": 100,
      "domain": "agase.co.kr",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 82927.3906631058,
      "curr_month_visits": 82927.3906631058,
      "unique_users": 20076.8414757649,
      "pages_per_visit": 6.30264787880275
    },
    {
      "global_rank": 61740,
      "category_rank": 100,
      "domain": "trupanion.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 836083.651808339,
      "curr_month_visits": 836083.651808339,
      "unique_users": 456054.793435772,
      "pages_per_visit": 3.65047671061607
    },
    {
      "global_rank": 641824,
      "category_rank": 101,
      "domain": "umweltverbaende.at",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 37813.017630043,
      "curr_month_visits": 37813.017630043,
      "unique_users": 24238.0813324597,
      "pages_per_visit": 3.07635114487548
    },
    {
      "global_rank": 348189,
      "category_rank": 101,
      "domain": "fishykart.in",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 83875.7940085405,
      "curr_month_visits": 83875.7940085405,
      "unique_users": 43288.9014043983,
      "pages_per_visit": 4.10334825956452
    },
    {
      "global_rank": 262109,
      "category_rank": 102,
      "domain": "kidscasting.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 161611.562133481,
      "curr_month_visits": 161611.562133481,
      "unique_users": 75663.6371655208,
      "pages_per_visit": 3.0377128323669
    },
    {
      "global_rank": 154656,
      "category_rank": 102,
      "domain": "heart-tips.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 262454.510667652,
      "curr_month_visits": 262454.510667652,
      "unique_users": 130199.205130197,
      "pages_per_visit": 1.6550771860386
    },
    {
      "global_rank": 26298,
      "category_rank": 102,
      "domain": "turfoo.fr",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 2588130.92648937,
      "curr_month_visits": 2588130.92648937,
      "unique_users": 285481.522335977,
      "pages_per_visit": 4.34369669971086
    },
    {
      "global_rank": 62632,
      "category_rank": 102,
      "domain": "maxizoo.fr",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 740726.601412771,
      "curr_month_visits": 740726.601412771,
      "unique_users": 471019.60103246,
      "pages_per_visit": 3.85787625063041
    },
    {
      "global_rank": 418844,
      "category_rank": 103,
      "domain": "movie.freshnews96.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 68535.1606960632,
      "curr_month_visits": 68535.1606960632,
      "unique_users": 44286.6005074667,
      "pages_per_visit": 1.44170606385952
    },
    {
      "global_rank": 233114,
      "category_rank": 103,
      "domain": "vidflow.co",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 228078.016915224,
      "curr_month_visits": 228078.016915224,
      "unique_users": 66634.4032711653,
      "pages_per_visit": 3.29013172649561
    },
    {
      "global_rank": 350744,
      "category_rank": 103,
      "domain": "zfin.org",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 60918.521438212,
      "curr_month_visits": 60918.521438212,
      "unique_users": 24679.5511269849,
      "pages_per_visit": 8.10659666971465
    },
    {
      "global_rank": 652383,
      "category_rank": 103,
      "domain": "hunterspoint.dk",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 16127.3773434658,
      "curr_month_visits": 16127.3773434658,
      "unique_users": 7856.3972526306,
      "pages_per_visit": 10.3713574960333
    },
    {
      "global_rank": 64278,
      "category_rank": 104,
      "domain": "battersea.org.uk",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 766149.617982564,
      "curr_month_visits": 766149.617982564,
      "unique_users": 412262.512984416,
      "pages_per_visit": 4.0889578018845
    },
    {
      "global_rank": 652728,
      "category_rank": 104,
      "domain": "artisticanticsllc.myshopify.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 38255.2827988006,
      "curr_month_visits": 38255.2827988006,
      "unique_users": 19785.2373718458,
      "pages_per_visit": 3.88308392228939
    },
    {
      "global_rank": 155710,
      "category_rank": 104,
      "domain": "dreamhorse.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 201771.092556934,
      "curr_month_visits": 201771.092556934,
      "unique_users": 103335.11578144,
      "pages_per_visit": 8.29454413010467
    },
    {
      "global_rank": 233488,
      "category_rank": 104,
      "domain": "greenweddingshoes.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 269697.919383824,
      "curr_month_visits": 269697.919383824,
      "unique_users": 168306.913495496,
      "pages_per_visit": 1.81290940697915
    },
    {
      "global_rank": 418965,
      "category_rank": 104,
      "domain": "veldshop.nl",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 60653.2367029418,
      "curr_month_visits": 60653.2367029418,
      "unique_users": 30848.1694733415,
      "pages_per_visit": 4.7580494358399
    },
    {
      "global_rank": 106544,
      "category_rank": 104,
      "domain": "chien.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 495387.245414156,
      "curr_month_visits": 495387.245414156,
      "unique_users": 334458.448951295,
      "pages_per_visit": 3.06227814276473
    },
    {
      "global_rank": 227076,
      "category_rank": 104,
      "domain": "tabakstore.de",
      "category": "Pets_and_Animals",
      "avg_month_visits": 227884.359911817,
      "curr_month_visits": 227884.359911817,
      "unique_users": 135319.296813741,
      "pages_per_visit": 3.13169613163041
    },
    {
      "global_rank": 657242,
      "category_rank": 105,
      "domain": "relxtech.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 49670.1672232871,
      "curr_month_visits": 49670.1672232871,
      "unique_users": 25742.1462435691,
      "pages_per_visit": 1.97501114666221
    },
    {
      "global_rank": 266877,
      "category_rank": 105,
      "domain": "magote.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 141605.418509714,
      "curr_month_visits": 141605.418509714,
      "unique_users": 79415.9016426737,
      "pages_per_visit": 2.24671869947072
    },
    {
      "global_rank": 425206,
      "category_rank": 105,
      "domain": "ornithomedia.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 79124.4970398893,
      "curr_month_visits": 79124.4970398893,
      "unique_users": 47492.0196185402,
      "pages_per_visit": 2.55233379042808
    },
    {
      "global_rank": 65631,
      "category_rank": 105,
      "domain": "zooroyal.de",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 737272.969235565,
      "curr_month_visits": 737272.969235565,
      "unique_users": 465977.740792818,
      "pages_per_visit": 4.48390037478999
    },
    {
      "global_rank": 87074,
      "category_rank": 105,
      "domain": "247politics.net",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 706638.753331002,
      "curr_month_visits": 706638.753331002,
      "unique_users": 153166.162088744,
      "pages_per_visit": 1.91987652688574
    },
    {
      "global_rank": 227483,
      "category_rank": 105,
      "domain": "discountvapepen.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 180609.160035457,
      "curr_month_visits": 180609.160035457,
      "unique_users": 99342.4194162121,
      "pages_per_visit": 3.2808644643445
    },
    {
      "global_rank": 429023,
      "category_rank": 106,
      "domain": "reconyx.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 32720.6879147613,
      "curr_month_visits": 32720.6879147613,
      "unique_users": 14557.2984105351,
      "pages_per_visit": 9.9431075122577
    },
    {
      "global_rank": 658534,
      "category_rank": 106,
      "domain": "obshtinaruse.bg",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 60689.3883666369,
      "curr_month_visits": 60689.3883666369,
      "unique_users": 27846.0947395725,
      "pages_per_visit": 2.62627127073569
    },
    {
      "global_rank": 351924,
      "category_rank": 106,
      "domain": "dejongmarinelife.nl",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 64651.5685858089,
      "curr_month_visits": 64651.5685858089,
      "unique_users": 23528.4039848272,
      "pages_per_visit": 9.38174447789645
    },
    {
      "global_rank": 659085,
      "category_rank": 107,
      "domain": "captainvet.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 54845.1327017604,
      "curr_month_visits": 54845.1327017604,
      "unique_users": 33399.4100293489,
      "pages_per_visit": 2.85708588519833
    },
    {
      "global_rank": 352977,
      "category_rank": 107,
      "domain": "coralandfishstore.nl",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 80110.058220005,
      "curr_month_visits": 80110.058220005,
      "unique_users": 31847.8159126401,
      "pages_per_visit": 5.40051239698221
    },
    {
      "global_rank": 159909,
      "category_rank": 107,
      "domain": "forcedata.net",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 200655.221219627,
      "curr_month_visits": 200655.221219627,
      "unique_users": 133167.539735821,
      "pages_per_visit": 22.8205449093606
    },
    {
      "global_rank": 66015,
      "category_rank": 107,
      "domain": "provetcloud.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 415836.741003057,
      "curr_month_visits": 415836.741003057,
      "unique_users": 79289.0509443458,
      "pages_per_visit": 25.0974348054102
    },
    {
      "global_rank": 234418,
      "category_rank": 108,
      "domain": "smokea.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 106381.714439674,
      "curr_month_visits": 106381.714439674,
      "unique_users": 67134.7881967915,
      "pages_per_visit": 6.6750807537095
    },
    {
      "global_rank": 438008,
      "category_rank": 108,
      "domain": "birdcast.info",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 234235.253947709,
      "curr_month_visits": 234235.253947709,
      "unique_users": 95743.712347667,
      "pages_per_visit": 2.28722829195432
    },
    {
      "global_rank": 66089,
      "category_rank": 108,
      "domain": "wisdompanel.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 736624.725579805,
      "curr_month_visits": 736624.725579805,
      "unique_users": 355104.194744109,
      "pages_per_visit": 4.29869465343197
    },
    {
      "global_rank": 161187,
      "category_rank": 108,
      "domain": "rydale.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 184600.630502401,
      "curr_month_visits": 184600.630502401,
      "unique_users": 107886.767309784,
      "pages_per_visit": 4.53324396365528
    },
    {
      "global_rank": 236629,
      "category_rank": 108,
      "domain": "onefabday.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 298176.402958444,
      "curr_month_visits": 298176.402958444,
      "unique_users": 175742.094659223,
      "pages_per_visit": 1.84126101524838
    },
    {
      "global_rank": 360461,
      "category_rank": 109,
      "domain": "myhomenature.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 100640.111784077,
      "curr_month_visits": 100640.111784077,
      "unique_users": 36102.760069147,
      "pages_per_visit": 4.67805567364327
    },
    {
      "global_rank": 237151,
      "category_rank": 110,
      "domain": "iplan.co.il",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 202622.014960927,
      "curr_month_visits": 202622.014960927,
      "unique_users": 62814.5214792838,
      "pages_per_visit": 4.06037865010105
    },
    {
      "global_rank": 236707,
      "category_rank": 110,
      "domain": "smallbatchcigar.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 97381.1687639796,
      "curr_month_visits": 97381.1687639796,
      "unique_users": 25958.0050915644,
      "pages_per_visit": 7.53278092419765
    },
    {
      "global_rank": 698067,
      "category_rank": 110,
      "domain": "hundehotel.info",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 59814.3223221553,
      "curr_month_visits": 59814.3223221553,
      "unique_users": 22972.9110914532,
      "pages_per_visit": 3.17583252212276
    },
    {
      "global_rank": 361501,
      "category_rank": 111,
      "domain": "reef-aquarium-store.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 59544.2138085919,
      "curr_month_visits": 59544.2138085919,
      "unique_users": 28503.0228244019,
      "pages_per_visit": 4.82301498319187
    },
    {
      "global_rank": 237180,
      "category_rank": 111,
      "domain": "georgestreetphoto.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 158317.406106038,
      "curr_month_visits": 158317.406106038,
      "unique_users": 92792.6269730997,
      "pages_per_visit": 3.58876613862998
    },
    {
      "global_rank": 237422,
      "category_rank": 111,
      "domain": "cigars.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 176783.928971519,
      "curr_month_visits": 176783.928971519,
      "unique_users": 105682.364470425,
      "pages_per_visit": 4.36465031759148
    },
    {
      "global_rank": 167845,
      "category_rank": 112,
      "domain": "myracehorse.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 240285.764341884,
      "curr_month_visits": 240285.764341884,
      "unique_users": 57394.700917268,
      "pages_per_visit": 5.41260143491569
    },
    {
      "global_rank": 91975,
      "category_rank": 112,
      "domain": "mymuddymat.cc",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 332670.769385442,
      "curr_month_visits": 332670.769385442,
      "unique_users": 207600.653186166,
      "pages_per_visit": 2.08562422593357
    },
    {
      "global_rank": 238152,
      "category_rank": 112,
      "domain": "cigarsdirect.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 101773.868443741,
      "curr_month_visits": 101773.868443741,
      "unique_users": 52745.3903135404,
      "pages_per_visit": 8.54175170765239
    },
    {
      "global_rank": 699040,
      "category_rank": 112,
      "domain": "baddiehub.news",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 40033.7376506566,
      "curr_month_visits": 40033.7376506566,
      "unique_users": 23100.4415744123,
      "pages_per_visit": 1.54980920933803
    },
    {
      "global_rank": 68096,
      "category_rank": 112,
      "domain": "embracepetinsurance.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 809970.30618767,
      "curr_month_visits": 809970.30618767,
      "unique_users": 495519.154571489,
      "pages_per_visit": 3.42215893969335
    },
    {
      "global_rank": 68264,
      "category_rank": 113,
      "domain": "vetcove.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 685721.677275048,
      "curr_month_visits": 685721.677275048,
      "unique_users": 73621.6822591828,
      "pages_per_visit": 8.52066390022468
    },
    {
      "global_rank": 465357,
      "category_rank": 113,
      "domain": "oneloftrace.live",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 233349.210768456,
      "curr_month_visits": 233349.210768456,
      "unique_users": 43185.820639837,
      "pages_per_visit": 2.89582743735905
    },
    {
      "global_rank": 239698,
      "category_rank": 113,
      "domain": "rosemood.co.uk",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 56853.9491080395,
      "curr_month_visits": 56853.9491080395,
      "unique_users": 31354.365508054,
      "pages_per_visit": 13.7593323929019
    },
    {
      "global_rank": 371125,
      "category_rank": 113,
      "domain": "dansfish.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 101520.01202432,
      "curr_month_visits": 101520.01202432,
      "unique_users": 47190.9777553498,
      "pages_per_visit": 4.25051165782954
    },
    {
      "global_rank": 700638,
      "category_rank": 113,
      "domain": "cfrservicesrebates.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 71682.9570472221,
      "curr_month_visits": 71682.9570472221,
      "unique_users": 32698.9416234739,
      "pages_per_visit": 4.46759319747977
    },
    {
      "global_rank": 371536,
      "category_rank": 114,
      "domain": "shop.dejongmarinelife.nl",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 59417.6599014137,
      "curr_month_visits": 59417.6599014137,
      "unique_users": 21090.2350196743,
      "pages_per_visit": 10.0009455415364
    },
    {
      "global_rank": 703399,
      "category_rank": 114,
      "domain": "tokiioy.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 43351.1656274726,
      "curr_month_visits": 43351.1656274726,
      "unique_users": 28104.9675970695,
      "pages_per_visit": 1.39283868791598
    },
    {
      "global_rank": 171401,
      "category_rank": 114,
      "domain": "montanasilversmiths.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 110316.479080503,
      "curr_month_visits": 110316.479080503,
      "unique_users": 66294.7136141495,
      "pages_per_visit": 8.4044725733625
    },
    {
      "global_rank": 241216,
      "category_rank": 114,
      "domain": "tgn.co.jp",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 204202.547281585,
      "curr_month_visits": 204202.547281585,
      "unique_users": 130215.166298447,
      "pages_per_visit": 2.2815066171972
    },
    {
      "global_rank": 171700,
      "category_rank": 115,
      "domain": "kramer.fr",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 130848.885056811,
      "curr_month_visits": 130848.885056811,
      "unique_users": 55720.9511952808,
      "pages_per_visit": 7.14555518505656
    },
    {
      "global_rank": 241455,
      "category_rank": 115,
      "domain": "pla-cole.wedding",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 236082.541272461,
      "curr_month_visits": 236082.541272461,
      "unique_users": 180647.17101096,
      "pages_per_visit": 1.66817986806859
    },
    {
      "global_rank": 29097,
      "category_rank": 115,
      "domain": "drfrost.org",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 1541464.28411911,
      "curr_month_visits": 1541464.28411911,
      "unique_users": 351164.54016707,
      "pages_per_visit": 6.16400060620504
    },
    {
      "global_rank": 474799,
      "category_rank": 115,
      "domain": "vitrin.shop",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 57471.6106260639,
      "curr_month_visits": 57471.6106260639,
      "unique_users": 24102.1744295858,
      "pages_per_visit": 4.51038502858851
    },
    {
      "global_rank": 708000,
      "category_rank": 115,
      "domain": "romneys.de",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 28355.1160689645,
      "curr_month_visits": 28355.1160689645,
      "unique_users": 11547.3744293906,
      "pages_per_visit": 7.8832015109968
    },
    {
      "global_rank": 246181,
      "category_rank": 116,
      "domain": "totallypromotional.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 245568.026740034,
      "curr_month_visits": 245568.026740034,
      "unique_users": 108591.364740377,
      "pages_per_visit": 2.40642606019452
    },
    {
      "global_rank": 173867,
      "category_rank": 116,
      "domain": "horze.de",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 125879.597432632,
      "curr_month_visits": 125879.597432632,
      "unique_users": 64856.9003579385,
      "pages_per_visit": 6.44317018783348
    },
    {
      "global_rank": 711167,
      "category_rank": 116,
      "domain": "gilvet.ru",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 21316.4495372068,
      "curr_month_visits": 21316.4495372068,
      "unique_users": 10839.4781377282,
      "pages_per_visit": 3.4873814178099
    },
    {
      "global_rank": 244214,
      "category_rank": 116,
      "domain": "ejuiceconnect.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 113420.206578593,
      "curr_month_visits": 113420.206578593,
      "unique_users": 53054.9598734508,
      "pages_per_visit": 7.48575812123451
    },
    {
      "global_rank": 325272,
      "category_rank": 116,
      "domain": "bellabelleshoes.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 140832.27864085,
      "curr_month_visits": 140832.27864085,
      "unique_users": 70737.9797094672,
      "pages_per_visit": 2.70006738973788
    },
    {
      "global_rank": 378302,
      "category_rank": 116,
      "domain": "adana.co.jp",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 95245.4072427376,
      "curr_month_visits": 95245.4072427376,
      "unique_users": 45945.357821432,
      "pages_per_visit": 2.83236716345261
    },
    {
      "global_rank": 487410,
      "category_rank": 117,
      "domain": "tokotna.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 57456.3189307301,
      "curr_month_visits": 57456.3189307301,
      "unique_users": 11010.3402405288,
      "pages_per_visit": 15.91618164204
    },
    {
      "global_rank": 380086,
      "category_rank": 117,
      "domain": "azaqua.nl",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 89782.2238975796,
      "curr_month_visits": 89782.2238975796,
      "unique_users": 31531.9179704836,
      "pages_per_visit": 4.51444630213951
    },
    {
      "global_rank": 718498,
      "category_rank": 117,
      "domain": "buydrcleanspray.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 54642.1673777977,
      "curr_month_visits": 54642.1673777977,
      "unique_users": 30914.2227130757,
      "pages_per_visit": 1.53617699620618
    },
    {
      "global_rank": 175282,
      "category_rank": 117,
      "domain": "loveracing.nz",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 268062.179422441,
      "curr_month_visits": 268062.179422441,
      "unique_users": 58026.1073278365,
      "pages_per_visit": 7.55335596736161
    },
    {
      "global_rank": 488156,
      "category_rank": 118,
      "domain": "birdnote.org",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 83392.1661535232,
      "curr_month_visits": 83392.1661535232,
      "unique_users": 48092.6214938437,
      "pages_per_visit": 1.61447219485057
    },
    {
      "global_rank": 246707,
      "category_rank": 118,
      "domain": "top15moscow.ru",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 214335.961058315,
      "curr_month_visits": 214335.961058315,
      "unique_users": 113935.077853854,
      "pages_per_visit": 2.4926197844244
    },
    {
      "global_rank": 70006,
      "category_rank": 118,
      "domain": "cgmdarrein.top",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 5980167.23782658,
      "curr_month_visits": 5980167.23782658,
      "unique_users": 3641480.85184324,
      "pages_per_visit": 2.44484263316826
    },
    {
      "global_rank": 721113,
      "category_rank": 118,
      "domain": "botanikus.de",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 53730.2068836403,
      "curr_month_visits": 53730.2068836403,
      "unique_users": 25565.0921076077,
      "pages_per_visit": 2.03769890269399
    },
    {
      "global_rank": 248492,
      "category_rank": 119,
      "domain": "millemercismariage.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 278063.05908561,
      "curr_month_visits": 278063.05908561,
      "unique_users": 172534.999971037,
      "pages_per_visit": 3.37856394226056
    },
    {
      "global_rank": 727503,
      "category_rank": 119,
      "domain": "cardiffdogshome.co.uk",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 26315.69440591,
      "curr_month_visits": 26315.69440591,
      "unique_users": 10058.2136310703,
      "pages_per_visit": 3.10136811509189
    },
    {
      "global_rank": 491625,
      "category_rank": 119,
      "domain": "birdtrader.co.uk",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 64810.4019329657,
      "curr_month_visits": 64810.4019329657,
      "unique_users": 24893.5804531732,
      "pages_per_visit": 2.8718067034645
    },
    {
      "global_rank": 496369,
      "category_rank": 120,
      "domain": "faune-france.org",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 39748.4485094296,
      "curr_month_visits": 39748.4485094296,
      "unique_users": 16358.9831336293,
      "pages_per_visit": 5.68930122336209
    },
    {
      "global_rank": 248733,
      "category_rank": 120,
      "domain": "glamlora.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 154259.43845794,
      "curr_month_visits": 154259.43845794,
      "unique_users": 93121.4743125385,
      "pages_per_visit": 5.93612266311629
    },
    {
      "global_rank": 180421,
      "category_rank": 120,
      "domain": "coulisses-politique.fr",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 247752.08557331,
      "curr_month_visits": 247752.08557331,
      "unique_users": 99342.6726743351,
      "pages_per_visit": 1.55251233323073
    },
    {
      "global_rank": 387283,
      "category_rank": 120,
      "domain": "aquariumbreeder.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 99502.279031766,
      "curr_month_visits": 99502.279031766,
      "unique_users": 53274.4484812435,
      "pages_per_visit": 1.84370179638837
    },
    {
      "global_rank": 728876,
      "category_rank": 120,
      "domain": "pljbnature.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 60549.9392293257,
      "curr_month_visits": 60549.9392293257,
      "unique_users": 41447.6421933191,
      "pages_per_visit": 1.19050329938279
    },
    {
      "global_rank": 503093,
      "category_rank": 121,
      "domain": "birdsinbackyards.net",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 82931.4420678308,
      "curr_month_visits": 82931.4420678308,
      "unique_users": 53301.399101969,
      "pages_per_visit": 2.49164148468798
    },
    {
      "global_rank": 735533,
      "category_rank": 121,
      "domain": "cani.it",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 59876.2392861635,
      "curr_month_visits": 59876.2392861635,
      "unique_users": 44830.3712714899,
      "pages_per_visit": 1.61762484314998
    },
    {
      "global_rank": 338210,
      "category_rank": 121,
      "domain": "ngsservicos.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 163263.712937775,
      "curr_month_visits": 163263.712937775,
      "unique_users": 44753.3865952868,
      "pages_per_visit": 1.43249624267025
    },
    {
      "global_rank": 182382,
      "category_rank": 121,
      "domain": "standardbredcanada.ca",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 261532.092549359,
      "curr_month_visits": 261532.092549359,
      "unique_users": 45466.0818076246,
      "pages_per_visit": 6.10361812333644
    },
    {
      "global_rank": 387554,
      "category_rank": 121,
      "domain": "coastgemusa.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 61536.18258487,
      "curr_month_visits": 61536.18258487,
      "unique_users": 32930.8978324531,
      "pages_per_visit": 4.65743022409709
    },
    {
      "global_rank": 247982,
      "category_rank": 122,
      "domain": "cigarshopworld.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 108076.211136551,
      "curr_month_visits": 108076.211136551,
      "unique_users": 18398.279751468,
      "pages_per_visit": 11.2168995317922
    },
    {
      "global_rank": 388339,
      "category_rank": 122,
      "domain": "sera.de",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 103477.732053049,
      "curr_month_visits": 103477.732053049,
      "unique_users": 56857.6981025698,
      "pages_per_visit": 2.51896489591699
    },
    {
      "global_rank": 736239,
      "category_rank": 122,
      "domain": "frontline.de",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 56409.3565031198,
      "curr_month_visits": 56409.3565031198,
      "unique_users": 40051.8295804167,
      "pages_per_visit": 1.78220090911712
    },
    {
      "global_rank": 98689,
      "category_rank": 122,
      "domain": "policetocitizen.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 716028.142685914,
      "curr_month_visits": 716028.142685914,
      "unique_users": 203546.365147507,
      "pages_per_visit": 1.75094917629743
    },
    {
      "global_rank": 185757,
      "category_rank": 122,
      "domain": "moleonline.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 224615.163563273,
      "curr_month_visits": 224615.163563273,
      "unique_users": 126602.479247716,
      "pages_per_visit": 4.60215891535536
    },
    {
      "global_rank": 257743,
      "category_rank": 122,
      "domain": "thebridalbox.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 301046.766486713,
      "curr_month_visits": 301046.766486713,
      "unique_users": 215711.377446054,
      "pages_per_visit": 1.76416366651517
    },
    {
      "global_rank": 114763,
      "category_rank": 122,
      "domain": "animalhumanesociety.org",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 524179.048498493,
      "curr_month_visits": 524179.048498493,
      "unique_users": 313120.477117593,
      "pages_per_visit": 2.26076448034355
    },
    {
      "global_rank": 504565,
      "category_rank": 123,
      "domain": "celebrateurbanbirds.org",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 84410.8302783253,
      "curr_month_visits": 84410.8302783253,
      "unique_users": 46673.1978842293,
      "pages_per_visit": 1.96059593252993
    },
    {
      "global_rank": 99659,
      "category_rank": 123,
      "domain": "santevet.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 691455.036077426,
      "curr_month_visits": 691455.036077426,
      "unique_users": 489109.644395448,
      "pages_per_visit": 1.7551120224676
    },
    {
      "global_rank": 347292,
      "category_rank": 123,
      "domain": "lift.bio",
      "category": "Pets_and_Animals",
      "avg_month_visits": 168934.15005879,
      "curr_month_visits": 168934.15005879,
      "unique_users": 90325.2749218439,
      "pages_per_visit": 1.46858663910196
    },
    {
      "global_rank": 188080,
      "category_rank": 123,
      "domain": "hastnet.se",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 205620.463252029,
      "curr_month_visits": 205620.463252029,
      "unique_users": 65687.3827456416,
      "pages_per_visit": 5.0719714601763
    },
    {
      "global_rank": 388756,
      "category_rank": 123,
      "domain": "aqadvisor.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 83026.5044725786,
      "curr_month_visits": 83026.5044725786,
      "unique_users": 33092.8691501655,
      "pages_per_visit": 6.39819242211689
    },
    {
      "global_rank": 258022,
      "category_rank": 123,
      "domain": "anayadesignerstudio.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 102165.391258237,
      "curr_month_visits": 102165.391258237,
      "unique_users": 49458.3300181569,
      "pages_per_visit": 3.70322601833351
    },
    {
      "global_rank": 752297,
      "category_rank": 123,
      "domain": "wonder-cloud.jp",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 48982.2585494362,
      "curr_month_visits": 48982.2585494362,
      "unique_users": 10717.247520894,
      "pages_per_visit": 3.02185188346782
    },
    {
      "global_rank": 756398,
      "category_rank": 124,
      "domain": "dobbsdogs.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 20398.7986605178,
      "curr_month_visits": 20398.7986605178,
      "unique_users": 13721.8218215984,
      "pages_per_visit": 1.02765130572838
    },
    {
      "global_rank": 254968,
      "category_rank": 124,
      "domain": "pipesmokersdens.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 174567.786900767,
      "curr_month_visits": 174567.786900767,
      "unique_users": 29160.9776459462,
      "pages_per_visit": 3.45484653280339
    },
    {
      "global_rank": 508071,
      "category_rank": 124,
      "domain": "panneauxsolaires.me",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 71653.7322130185,
      "curr_month_visits": 71653.7322130185,
      "unique_users": 54705.6288567441,
      "pages_per_visit": 1.23877756222853
    },
    {
      "global_rank": 258141,
      "category_rank": 124,
      "domain": "marry-xoxo.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 257038.400644525,
      "curr_month_visits": 257038.400644525,
      "unique_users": 166204.424477793,
      "pages_per_visit": 1.34012588758167
    },
    {
      "global_rank": 390776,
      "category_rank": 125,
      "domain": "reefs.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 86589.1317702056,
      "curr_month_visits": 86589.1317702056,
      "unique_users": 36778.9403880625,
      "pages_per_visit": 1.66783188443386
    },
    {
      "global_rank": 756469,
      "category_rank": 125,
      "domain": "outdoorando.de",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 45442.0331766594,
      "curr_month_visits": 45442.0331766594,
      "unique_users": 27124.3865604739,
      "pages_per_visit": 1.33942789208496
    },
    {
      "global_rank": 191195,
      "category_rank": 125,
      "domain": "cabinethealth.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 231067.33924266,
      "curr_month_visits": 231067.33924266,
      "unique_users": 152112.313110943,
      "pages_per_visit": 1.78202013056856
    },
    {
      "global_rank": 509580,
      "category_rank": 125,
      "domain": "veee271.vip",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 67401.0911150941,
      "curr_month_visits": 67401.0911150941,
      "unique_users": 31897.0515938882,
      "pages_per_visit": 3.18868609457312
    },
    {
      "global_rank": 261593,
      "category_rank": 125,
      "domain": "arcenciel-g.jp",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 257449.93083873,
      "curr_month_visits": 257449.93083873,
      "unique_users": 178953.879574766,
      "pages_per_visit": 1.34271209642804
    },
    {
      "global_rank": 516213,
      "category_rank": 126,
      "domain": "birdtricksstore.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 84673.8859155773,
      "curr_month_visits": 84673.8859155773,
      "unique_users": 43098.2916171159,
      "pages_per_visit": 2.13535139427045
    },
    {
      "global_rank": 762628,
      "category_rank": 126,
      "domain": "juggyusa.myshopify.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 37194.5498115693,
      "curr_month_visits": 37194.5498115693,
      "unique_users": 18334.2989405147,
      "pages_per_visit": 5.37222762892951
    },
    {
      "global_rank": 262869,
      "category_rank": 126,
      "domain": "kimono-365.jp",
      "category": "Pets_and_Animals",
      "avg_month_visits": 137893.948620246,
      "curr_month_visits": 137893.948620246,
      "unique_users": 79204.8309508021,
      "pages_per_visit": 4.67369384220122
    },
    {
      "global_rank": 391362,
      "category_rank": 126,
      "domain": "worldwidecorals.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 65491.5066789076,
      "curr_month_visits": 65491.5066789076,
      "unique_users": 30422.9664315104,
      "pages_per_visit": 4.8794955827427
    },
    {
      "global_rank": 524603,
      "category_rank": 127,
      "domain": "carniumbotanicals.hu",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 86512.9521343963,
      "curr_month_visits": 86512.9521343963,
      "unique_users": 46375.7323343417,
      "pages_per_visit": 1.67001888323707
    },
    {
      "global_rank": 767982,
      "category_rank": 127,
      "domain": "futureforecastinggroup.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 26983.7540433574,
      "curr_month_visits": 26983.7540433574,
      "unique_users": 6835.9117239839,
      "pages_per_visit": 6.16508247906468
    },
    {
      "global_rank": 267243,
      "category_rank": 127,
      "domain": "urbanbridesmag.co.il",
      "category": "Pets_and_Animals",
      "avg_month_visits": 148467.383155368,
      "curr_month_visits": 148467.383155368,
      "unique_users": 85363.2991063871,
      "pages_per_visit": 2.75930653975829
    },
    {
      "global_rank": 261251,
      "category_rank": 127,
      "domain": "cigaretteelec.fr",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 163552.948534749,
      "curr_month_visits": 163552.948534749,
      "unique_users": 89524.9413428563,
      "pages_per_visit": 2.95201984499331
    },
    {
      "global_rank": 77700,
      "category_rank": 128,
      "domain": "avma.org",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 826942.066724005,
      "curr_month_visits": 826942.066724005,
      "unique_users": 476563.539064287,
      "pages_per_visit": 2.17763429041848
    },
    {
      "global_rank": 526331,
      "category_rank": 128,
      "domain": "thehubnews.net",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 83758.4422610354,
      "curr_month_visits": 83758.4422610354,
      "unique_users": 56036.0695301277,
      "pages_per_visit": 1.31142335148266
    },
    {
      "global_rank": 770887,
      "category_rank": 128,
      "domain": "wowpetsmart.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 53352.7369513728,
      "curr_month_visits": 53352.7369513728,
      "unique_users": 29209.2125990133,
      "pages_per_visit": 2.97031325422767
    },
    {
      "global_rank": 267450,
      "category_rank": 128,
      "domain": "moncheribridals.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 109747.763462154,
      "curr_month_visits": 109747.763462154,
      "unique_users": 44146.6019644014,
      "pages_per_visit": 5.71663731539543
    },
    {
      "global_rank": 392988,
      "category_rank": 128,
      "domain": "ultimatereef.net",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 99346.7193259398,
      "curr_month_visits": 99346.7193259398,
      "unique_users": 47191.6094929424,
      "pages_per_visit": 2.6348884194952
    },
    {
      "global_rank": 119176,
      "category_rank": 128,
      "domain": "fsvps.gov.ru",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 536467.515711238,
      "curr_month_visits": 536467.515711238,
      "unique_users": 252873.355932902,
      "pages_per_visit": 2.51730690359539
    },
    {
      "global_rank": 262499,
      "category_rank": 128,
      "domain": "pp-trading.de",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 91820.4768977413,
      "curr_month_visits": 91820.4768977413,
      "unique_users": 36256.5372740079,
      "pages_per_visit": 6.54622869697896
    },
    {
      "global_rank": 771867,
      "category_rank": 129,
      "domain": "uokon.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 68181.1995035319,
      "curr_month_visits": 68181.1995035319,
      "unique_users": 30240.6699253538,
      "pages_per_visit": 1.125350408813
    },
    {
      "global_rank": 119284,
      "category_rank": 129,
      "domain": "pet-onelove.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 476589.477922909,
      "curr_month_visits": 476589.477922909,
      "unique_users": 206986.49069774,
      "pages_per_visit": 3.23227671577595
    },
    {
      "global_rank": 196138,
      "category_rank": 129,
      "domain": "nanjdesuno.blog.jp",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 254610.677070583,
      "curr_month_visits": 254610.677070583,
      "unique_users": 166196.054841966,
      "pages_per_visit": 1.73914544091292
    },
    {
      "global_rank": 30872,
      "category_rank": 129,
      "domain": "lifestyle-insights.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 1524219.17769003,
      "curr_month_visits": 1524219.17769003,
      "unique_users": 1263588.23295151,
      "pages_per_visit": 2.56014645613016
    },
    {
      "global_rank": 269783,
      "category_rank": 129,
      "domain": "farbeco.jp",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 212557.821338119,
      "curr_month_visits": 212557.821338119,
      "unique_users": 140935.240473589,
      "pages_per_visit": 2.2010891672495
    },
    {
      "global_rank": 393359,
      "category_rank": 129,
      "domain": "predatoryfins.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 65592.9971498932,
      "curr_month_visits": 65592.9971498932,
      "unique_users": 33259.7886188893,
      "pages_per_visit": 9.15102695558391
    },
    {
      "global_rank": 528364,
      "category_rank": 130,
      "domain": "artpedia.asia",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 85862.7293165659,
      "curr_month_visits": 85862.7293165659,
      "unique_users": 65356.0446334762,
      "pages_per_visit": 1.46788290917443
    },
    {
      "global_rank": 774962,
      "category_rank": 130,
      "domain": "omaspride.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 43484.8210863954,
      "curr_month_visits": 43484.8210863954,
      "unique_users": 20764.3943951041,
      "pages_per_visit": 2.19252213637951
    },
    {
      "global_rank": 263525,
      "category_rank": 130,
      "domain": "agechecker.net",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 188295.01819011,
      "curr_month_visits": 188295.01819011,
      "unique_users": 146342.005597858,
      "pages_per_visit": 1.50794772497366
    },
    {
      "global_rank": 273633,
      "category_rank": 130,
      "domain": "itakeyou.co.uk",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 117566.032749753,
      "curr_month_visits": 117566.032749753,
      "unique_users": 65809.2265293761,
      "pages_per_visit": 2.63748292103448
    },
    {
      "global_rank": 102140,
      "category_rank": 130,
      "domain": "owara.info",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 711638.322512303,
      "curr_month_visits": 711638.322512303,
      "unique_users": 264213.622173129,
      "pages_per_visit": 2.24753019451939
    },
    {
      "global_rank": 787642,
      "category_rank": 131,
      "domain": "nutrofar.es",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 39124.1341469188,
      "curr_month_visits": 39124.1341469188,
      "unique_users": 20653.2559630063,
      "pages_per_visit": 2.40928227192581
    },
    {
      "global_rank": 533916,
      "category_rank": 131,
      "domain": "gencalc.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 54460.9139379823,
      "curr_month_visits": 54460.9139379823,
      "unique_users": 18401.2120526603,
      "pages_per_visit": 4.38982576434244
    },
    {
      "global_rank": 275894,
      "category_rank": 131,
      "domain": "rusticandmain.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 141232.78617868,
      "curr_month_visits": 141232.78617868,
      "unique_users": 85309.5790353405,
      "pages_per_visit": 3.76168718163652
    },
    {
      "global_rank": 78550,
      "category_rank": 131,
      "domain": "smartflowsheet.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 829499.124114281,
      "curr_month_visits": 829499.124114281,
      "unique_users": 37533.7213469426,
      "pages_per_visit": 8.05011866417569
    },
    {
      "global_rank": 547246,
      "category_rank": 132,
      "domain": "northernparrots.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 63156.3531658283,
      "curr_month_visits": 63156.3531658283,
      "unique_users": 31800.983691024,
      "pages_per_visit": 2.60674691105056
    },
    {
      "global_rank": 201271,
      "category_rank": 132,
      "domain": "business.in",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 727182.040010151,
      "curr_month_visits": 727182.040010151,
      "unique_users": 259062.47767429,
      "pages_per_visit": 5.1509241582716
    },
    {
      "global_rank": 103863,
      "category_rank": 132,
      "domain": "pokerallday.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 672776.554359158,
      "curr_month_visits": 672776.554359158,
      "unique_users": 37074.8446104513,
      "pages_per_visit": 3.86717335458931
    },
    {
      "global_rank": 264195,
      "category_rank": 132,
      "domain": "tabako.co.jp",
      "category": "Pets_and_Animals",
      "avg_month_visits": 69307.521735357,
      "curr_month_visits": 69307.521735357,
      "unique_users": 40434.8086359498,
      "pages_per_visit": 17.2348913848108
    },
    {
      "global_rank": 791586,
      "category_rank": 132,
      "domain": "servicedogtrainingschool.org",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 54777.9590344536,
      "curr_month_visits": 54777.9590344536,
      "unique_users": 31245.8749870472,
      "pages_per_visit": 1.61802150875178
    },
    {
      "global_rank": 79290,
      "category_rank": 132,
      "domain": "docfly.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 678342.051992398,
      "curr_month_visits": 678342.051992398,
      "unique_users": 425202.97146719,
      "pages_per_visit": 3.02967621005982
    },
    {
      "global_rank": 276507,
      "category_rank": 132,
      "domain": "checkcherry.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 93402.847639308,
      "curr_month_visits": 93402.847639308,
      "unique_users": 28380.7196314387,
      "pages_per_visit": 8.35681635370382
    },
    {
      "global_rank": 79613,
      "category_rank": 133,
      "domain": "virbac.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 722853.291502186,
      "curr_month_visits": 722853.291502186,
      "unique_users": 446774.406486887,
      "pages_per_visit": 2.33110599989991
    },
    {
      "global_rank": 549383,
      "category_rank": 133,
      "domain": "goingbirding.co.uk",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 73686.2479031658,
      "curr_month_visits": 73686.2479031658,
      "unique_users": 10502.2998019655,
      "pages_per_visit": 2.92525100790986
    },
    {
      "global_rank": 265322,
      "category_rank": 133,
      "domain": "cbd-discounter.fr",
      "category": "Pets_and_Animals",
      "avg_month_visits": 113666.64683393,
      "curr_month_visits": 113666.64683393,
      "unique_users": 44542.2292898196,
      "pages_per_visit": 5.43292490386747
    },
    {
      "global_rank": 280205,
      "category_rank": 133,
      "domain": "optimalprint.ca",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 62941.4181854433,
      "curr_month_visits": 62941.4181854433,
      "unique_users": 32549.0261597636,
      "pages_per_visit": 6.48707439459765
    },
    {
      "global_rank": 399410,
      "category_rank": 133,
      "domain": "livefish.com.au",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 65442.6691624758,
      "curr_month_visits": 65442.6691624758,
      "unique_users": 28009.890153657,
      "pages_per_visit": 4.55569716856244
    },
    {
      "global_rank": 802465,
      "category_rank": 134,
      "domain": "pasespana.org",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 61964.5659022188,
      "curr_month_visits": 61964.5659022188,
      "unique_users": 28196.5904302032,
      "pages_per_visit": 1.81444921646107
    },
    {
      "global_rank": 282986,
      "category_rank": 134,
      "domain": "marrysys.jp",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 221273.540516762,
      "curr_month_visits": 221273.540516762,
      "unique_users": 40374.3079190399,
      "pages_per_visit": 2.95946150767655
    },
    {
      "global_rank": 392165,
      "category_rank": 134,
      "domain": "danceticketing.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 38427.0309831613,
      "curr_month_visits": 38427.0309831613,
      "unique_users": 17941.455748989,
      "pages_per_visit": 3.96436086294697
    },
    {
      "global_rank": 549464,
      "category_rank": 134,
      "domain": "radio-suomi.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 171345.509370946,
      "curr_month_visits": 171345.509370946,
      "unique_users": 43927.3483351973,
      "pages_per_visit": 1.89628380383924
    },
    {
      "global_rank": 204947,
      "category_rank": 134,
      "domain": "prism.horse",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 204807.306840246,
      "curr_month_visits": 204807.306840246,
      "unique_users": 44836.5375283095,
      "pages_per_visit": 1.89025189192098
    },
    {
      "global_rank": 122471,
      "category_rank": 135,
      "domain": "star7.jp",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 478199.535698959,
      "curr_month_visits": 478199.535698959,
      "unique_users": 124691.60816984,
      "pages_per_visit": 3.28565901771108
    },
    {
      "global_rank": 805105,
      "category_rank": 135,
      "domain": "interbrasilrn.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 30075.9144294304,
      "curr_month_visits": 30075.9144294304,
      "unique_users": 10251.6170903202,
      "pages_per_visit": 6.4463293907048
    },
    {
      "global_rank": 286825,
      "category_rank": 135,
      "domain": "downloads.pixieset.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 123440.906385693,
      "curr_month_visits": 123440.906385693,
      "unique_users": 51009.2926653697,
      "pages_per_visit": 2.90871386028803
    },
    {
      "global_rank": 558392,
      "category_rank": 135,
      "domain": "featherbase.info",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 54179.725584326,
      "curr_month_visits": 54179.725584326,
      "unique_users": 25292.0881504706,
      "pages_per_visit": 3.21132062812551
    },
    {
      "global_rank": 80490,
      "category_rank": 136,
      "domain": "pawsionate.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 432699.934279877,
      "curr_month_visits": 432699.934279877,
      "unique_users": 216069.124854708,
      "pages_per_visit": 3.55850754408864
    },
    {
      "global_rank": 404652,
      "category_rank": 136,
      "domain": "uniquecorals.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 45050.6085567877,
      "curr_month_visits": 45050.6085567877,
      "unique_users": 11769.1068810697,
      "pages_per_visit": 12.174831633379
    },
    {
      "global_rank": 562763,
      "category_rank": 136,
      "domain": "birdwatchireland.ie",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 71178.2705937042,
      "curr_month_visits": 71178.2705937042,
      "unique_users": 37545.2260818708,
      "pages_per_visit": 1.89031783057715
    },
    {
      "global_rank": 805167,
      "category_rank": 136,
      "domain": "reverselife.co.uk",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 43862.5602437044,
      "curr_month_visits": 43862.5602437044,
      "unique_users": 22569.2379625914,
      "pages_per_visit": 1.95678170888082
    },
    {
      "global_rank": 269136,
      "category_rank": 136,
      "domain": "mjarsenal.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 103279.383235216,
      "curr_month_visits": 103279.383235216,
      "unique_users": 47716.2230734443,
      "pages_per_visit": 4.54018949024485
    },
    {
      "global_rank": 292066,
      "category_rank": 136,
      "domain": "wedding.net",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 115506.648084994,
      "curr_month_visits": 115506.648084994,
      "unique_users": 80808.7287934613,
      "pages_per_visit": 2.39850216910519
    },
    {
      "global_rank": 570498,
      "category_rank": 137,
      "domain": "protectthewild.org.uk",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 75824.4085048276,
      "curr_month_visits": 75824.4085048276,
      "unique_users": 39262.1453540779,
      "pages_per_visit": 2.27305199147513
    },
    {
      "global_rank": 808754,
      "category_rank": 137,
      "domain": "ukrzoovet.com.ua",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 25305.6268190555,
      "curr_month_visits": 25305.6268190555,
      "unique_users": 7370.8378660106,
      "pages_per_visit": 14.5466939123888
    },
    {
      "global_rank": 404794,
      "category_rank": 137,
      "domain": "aquariumok.ru",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 95240.0724870095,
      "curr_month_visits": 95240.0724870095,
      "unique_users": 46959.9067341454,
      "pages_per_visit": 1.58489892928533
    },
    {
      "global_rank": 297445,
      "category_rank": 137,
      "domain": "french-union.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 104217.437645832,
      "curr_month_visits": 104217.437645832,
      "unique_users": 19709.25050268,
      "pages_per_visit": 5.1033741841113
    },
    {
      "global_rank": 300274,
      "category_rank": 138,
      "domain": "herculescandy.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 89687.5247127904,
      "curr_month_visits": 89687.5247127904,
      "unique_users": 44232.3523983042,
      "pages_per_visit": 7.74953735367547
    },
    {
      "global_rank": 576135,
      "category_rank": 138,
      "domain": "birdlife.fi",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 73720.1787592794,
      "curr_month_visits": 73720.1787592794,
      "unique_users": 41618.6400561291,
      "pages_per_visit": 2.31966934357362
    },
    {
      "global_rank": 269478,
      "category_rank": 138,
      "domain": "ejuicesteals.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 42431.4995156043,
      "curr_month_visits": 42431.4995156043,
      "unique_users": 14718.4790047691,
      "pages_per_visit": 14.9677762828938
    },
    {
      "global_rank": 810445,
      "category_rank": 138,
      "domain": "modernvet.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 72952.9546157435,
      "curr_month_visits": 72952.9546157435,
      "unique_users": 37545.7799385358,
      "pages_per_visit": 1.61692475684859
    },
    {
      "global_rank": 214405,
      "category_rank": 139,
      "domain": "thoroughbreddailynews.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 268793.658424255,
      "curr_month_visits": 268793.658424255,
      "unique_users": 127921.895328345,
      "pages_per_visit": 1.69024797479322
    },
    {
      "global_rank": 413120,
      "category_rank": 139,
      "domain": "seoclub.su",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 65480.2689091346,
      "curr_month_visits": 65480.2689091346,
      "unique_users": 16046.2368947441,
      "pages_per_visit": 7.62056140647412
    },
    {
      "global_rank": 817688,
      "category_rank": 139,
      "domain": "teachmelife.net",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 29835.7979891726,
      "curr_month_visits": 29835.7979891726,
      "unique_users": 16872.8400511348,
      "pages_per_visit": 1.21014338754831
    },
    {
      "global_rank": 300783,
      "category_rank": 139,
      "domain": "weddingwire.us",
      "category": "Pets_and_Animals",
      "avg_month_visits": 157893.612884978,
      "curr_month_visits": 157893.612884978,
      "unique_users": 93322.1929729351,
      "pages_per_visit": 2.16258795573279
    },
    {
      "global_rank": 35174,
      "category_rank": 139,
      "domain": "tempatwisata.pro",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 972094.196509607,
      "curr_month_visits": 972094.196509607,
      "unique_users": 593047.146628246,
      "pages_per_visit": 8.50575423930132
    },
    {
      "global_rank": 81885,
      "category_rank": 139,
      "domain": "allydvm.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 803371.291073422,
      "curr_month_visits": 803371.291073422,
      "unique_users": 489220.250296385,
      "pages_per_visit": 2.75363342095185
    },
    {
      "global_rank": 576875,
      "category_rank": 139,
      "domain": "ruo-vratsa.bg",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 52288.3861645942,
      "curr_month_visits": 52288.3861645942,
      "unique_users": 3764.28092559109,
      "pages_per_visit": 9.44252454330215
    },
    {
      "global_rank": 215305,
      "category_rank": 140,
      "domain": "horseforum.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 232387.470893478,
      "curr_month_visits": 232387.470893478,
      "unique_users": 118018.567382052,
      "pages_per_visit": 2.28026532423772
    },
    {
      "global_rank": 413329,
      "category_rank": 140,
      "domain": "zoomalia.nl",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 65148.876722217,
      "curr_month_visits": 65148.876722217,
      "unique_users": 35212.5591448058,
      "pages_per_visit": 3.2307581093907
    },
    {
      "global_rank": 830940,
      "category_rank": 140,
      "domain": "wwf-junior.de",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 36270.4658873077,
      "curr_month_visits": 36270.4658873077,
      "unique_users": 23765.0586925327,
      "pages_per_visit": 2.26118370339261
    },
    {
      "global_rank": 302517,
      "category_rank": 140,
      "domain": "rockmywedding.co.uk",
      "category": "Pets_and_Animals",
      "avg_month_visits": 144837.443013762,
      "curr_month_visits": 144837.443013762,
      "unique_users": 86118.5024650713,
      "pages_per_visit": 2.26043420036566
    },
    {
      "global_rank": 82263,
      "category_rank": 140,
      "domain": "budgetpetproducts.com.au",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 432243.495535351,
      "curr_month_visits": 432243.495535351,
      "unique_users": 204607.853186024,
      "pages_per_visit": 5.46734340978712
    },
    {
      "global_rank": 586943,
      "category_rank": 140,
      "domain": "talented.co.kr",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 56094.7344168444,
      "curr_month_visits": 56094.7344168444,
      "unique_users": 35795.9840787461,
      "pages_per_visit": 3.82501627246795
    },
    {
      "global_rank": 414607,
      "category_rank": 141,
      "domain": "aquariumplantsfactory.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 90169.4141973428,
      "curr_month_visits": 90169.4141973428,
      "unique_users": 38444.3137881296,
      "pages_per_visit": 5.27873701271738
    },
    {
      "global_rank": 834078,
      "category_rank": 141,
      "domain": "news.nabu.de",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 56741.1886626419,
      "curr_month_visits": 56741.1886626419,
      "unique_users": 30277.4233829057,
      "pages_per_visit": 1.58551502478935
    },
    {
      "global_rank": 82597,
      "category_rank": 141,
      "domain": "eslcloud.com.br",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 438796.709733134,
      "curr_month_visits": 438796.709733134,
      "unique_users": 50577.9277723333,
      "pages_per_visit": 12.9419292356145
    },
    {
      "global_rank": 125552,
      "category_rank": 141,
      "domain": "hundarutanhem.se",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 255726.519045553,
      "curr_month_visits": 255726.519045553,
      "unique_users": 64747.4251161317,
      "pages_per_visit": 7.73841934746417
    },
    {
      "global_rank": 303460,
      "category_rank": 141,
      "domain": "celebrateally.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 95414.0036004032,
      "curr_month_visits": 95414.0036004032,
      "unique_users": 53138.0089929804,
      "pages_per_visit": 2.52861475005835
    },
    {
      "global_rank": 216055,
      "category_rank": 141,
      "domain": "thedonkeysanctuary.org.uk",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 191832.025999631,
      "curr_month_visits": 191832.025999631,
      "unique_users": 97048.8412887389,
      "pages_per_visit": 3.27364821035633
    },
    {
      "global_rank": 591006,
      "category_rank": 141,
      "domain": "1clkaccess.xyz",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 40583.7506966174,
      "curr_month_visits": 40583.7506966174,
      "unique_users": 3688.51021334847,
      "pages_per_visit": 16.1607278549559
    },
    {
      "global_rank": 840563,
      "category_rank": 142,
      "domain": "monkimau.de",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 30764.6104755699,
      "curr_month_visits": 30764.6104755699,
      "unique_users": 17132.4835430422,
      "pages_per_visit": 1.85969345583054
    },
    {
      "global_rank": 594502,
      "category_rank": 142,
      "domain": "wbsj.org",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 80467.8430179928,
      "curr_month_visits": 80467.8430179928,
      "unique_users": 54986.7814252006,
      "pages_per_visit": 1.92657713357686
    },
    {
      "global_rank": 304286,
      "category_rank": 142,
      "domain": "tokihana.net",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 211359.918150181,
      "curr_month_visits": 211359.918150181,
      "unique_users": 135640.998991138,
      "pages_per_visit": 2.07750656577572
    },
    {
      "global_rank": 278861,
      "category_rank": 142,
      "domain": "snusdaddy.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 175728.271669689,
      "curr_month_visits": 175728.271669689,
      "unique_users": 102282.697250058,
      "pages_per_visit": 2.43501838411314
    },
    {
      "global_rank": 417258,
      "category_rank": 142,
      "domain": "heevis.nl",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 56931.3993675046,
      "curr_month_visits": 56931.3993675046,
      "unique_users": 21545.3023573372,
      "pages_per_visit": 5.42673235817641
    },
    {
      "global_rank": 218680,
      "category_rank": 143,
      "domain": "meilleurpronostic.fr",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 264748.980044327,
      "curr_month_visits": 264748.980044327,
      "unique_users": 45562.5703896645,
      "pages_per_visit": 1.84694810830249
    },
    {
      "global_rank": 127655,
      "category_rank": 143,
      "domain": "proplan.ru",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 539523.299017475,
      "curr_month_visits": 539523.299017475,
      "unique_users": 387769.510931643,
      "pages_per_visit": 1.54014401561582
    },
    {
      "global_rank": 840900,
      "category_rank": 143,
      "domain": "bestnfast.it",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 41638.1851399583,
      "curr_month_visits": 41638.1851399583,
      "unique_users": 24208.7841885908,
      "pages_per_visit": 1.34968546741759
    },
    {
      "global_rank": 304396,
      "category_rank": 143,
      "domain": "destinationweddings.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 119780.878672657,
      "curr_month_visits": 119780.878672657,
      "unique_users": 54460.7812370319,
      "pages_per_visit": 4.97271413278477
    },
    {
      "global_rank": 280712,
      "category_rank": 144,
      "domain": "cigusto.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 113107.700710554,
      "curr_month_visits": 113107.700710554,
      "unique_users": 66002.6671665246,
      "pages_per_visit": 3.3479354055164
    },
    {
      "global_rank": 218772,
      "category_rank": 144,
      "domain": "trotto.de",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 122884.156170191,
      "curr_month_visits": 122884.156170191,
      "unique_users": 15367.3975126611,
      "pages_per_visit": 15.5819556610225
    },
    {
      "global_rank": 847289,
      "category_rank": 144,
      "domain": "vemvex.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 44683.4384734655,
      "curr_month_visits": 44683.4384734655,
      "unique_users": 30487.4127916359,
      "pages_per_visit": 1.31386303489413
    },
    {
      "global_rank": 305547,
      "category_rank": 144,
      "domain": "eventdecordirect.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 121185.070908778,
      "curr_month_visits": 121185.070908778,
      "unique_users": 71079.5405206319,
      "pages_per_visit": 3.22306794910425
    },
    {
      "global_rank": 114377,
      "category_rank": 145,
      "domain": "unforgettablegadgets.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 687336.76227005,
      "curr_month_visits": 687336.76227005,
      "unique_users": 550348.061395265,
      "pages_per_visit": 1.73111566891102
    },
    {
      "global_rank": 307691,
      "category_rank": 145,
      "domain": "netose.in",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 111500.978834371,
      "curr_month_visits": 111500.978834371,
      "unique_users": 65896.5657610498,
      "pages_per_visit": 1.78969488897152
    },
    {
      "global_rank": 405622,
      "category_rank": 145,
      "domain": "meadowfarms.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 60555.7498221164,
      "curr_month_visits": 60555.7498221164,
      "unique_users": 26396.4030744127,
      "pages_per_visit": 10.7659013252174
    },
    {
      "global_rank": 424017,
      "category_rank": 145,
      "domain": "membrana-publishers.media",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 59204.0141508881,
      "curr_month_visits": 59204.0141508881,
      "unique_users": 7546.80557195219,
      "pages_per_visit": 9.21122797916027
    },
    {
      "global_rank": 606180,
      "category_rank": 145,
      "domain": "piatadeporumbei.ro",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 26500.0113847307,
      "curr_month_visits": 26500.0113847307,
      "unique_users": 8956.83117720974,
      "pages_per_visit": 7.96161922835497
    },
    {
      "global_rank": 847441,
      "category_rank": 145,
      "domain": "tiermedizinportal.de",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 52785.9548197705,
      "curr_month_visits": 52785.9548197705,
      "unique_users": 37202.9704765873,
      "pages_per_visit": 1.48480333717106
    },
    {
      "global_rank": 36305,
      "category_rank": 145,
      "domain": "mebpersonel.org",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 3589713.25273732,
      "curr_month_visits": 3589713.25273732,
      "unique_users": 620240.787305006,
      "pages_per_visit": 2.52409932196447
    },
    {
      "global_rank": 281622,
      "category_rank": 145,
      "domain": "lvp-distribution.fr",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 91415.6700172363,
      "curr_month_visits": 91415.6700172363,
      "unique_users": 24541.9689915508,
      "pages_per_visit": 10.8806388051131
    },
    {
      "global_rank": 282356,
      "category_rank": 146,
      "domain": "rasoigoodfellas.eu",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 59040.9077620355,
      "curr_month_visits": 59040.9077620355,
      "unique_users": 19800.736921584,
      "pages_per_visit": 8.59082768834981
    },
    {
      "global_rank": 221171,
      "category_rank": 146,
      "domain": "nennung-online.de",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 191888.707820765,
      "curr_month_visits": 191888.707820765,
      "unique_users": 43753.7200086903,
      "pages_per_visit": 6.24098836192318
    },
    {
      "global_rank": 612252,
      "category_rank": 146,
      "domain": "talkbudgies.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 48519.7431438488,
      "curr_month_visits": 48519.7431438488,
      "unique_users": 24951.1819720585,
      "pages_per_visit": 3.16322285332671
    },
    {
      "global_rank": 615234,
      "category_rank": 147,
      "domain": "55688life.com.tw",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 50946.8088620764,
      "curr_month_visits": 50946.8088620764,
      "unique_users": 17196.0492241032,
      "pages_per_visit": 4.32404128142146
    },
    {
      "global_rank": 310302,
      "category_rank": 147,
      "domain": "weddingstyle.de",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 204003.833229365,
      "curr_month_visits": 204003.833229365,
      "unique_users": 146616.769881964,
      "pages_per_visit": 1.68471779940275
    },
    {
      "global_rank": 848386,
      "category_rank": 147,
      "domain": "zoomark.com.ua",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 38228.486494219,
      "curr_month_visits": 38228.486494219,
      "unique_users": 23959.1516146376,
      "pages_per_visit": 2.10265483408476
    },
    {
      "global_rank": 872686,
      "category_rank": 148,
      "domain": "vetoadom.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 15636.8425784476,
      "curr_month_visits": 15636.8425784476,
      "unique_users": 7452.9861387488,
      "pages_per_visit": 10.593544575244
    },
    {
      "global_rank": 116316,
      "category_rank": 148,
      "domain": "games.greatergood.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 708742.810374408,
      "curr_month_visits": 708742.810374408,
      "unique_users": 39992.0280478954,
      "pages_per_visit": 3.3309929020387
    },
    {
      "global_rank": 618697,
      "category_rank": 148,
      "domain": "animalfunfacts.net",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 56261.7411385807,
      "curr_month_visits": 56261.7411385807,
      "unique_users": 31709.4872839096,
      "pages_per_visit": 1.73908774275647
    },
    {
      "global_rank": 284941,
      "category_rank": 148,
      "domain": "stormrock.fr",
      "category": "Pets_and_Animals",
      "avg_month_visits": 107463.891182942,
      "curr_month_visits": 107463.891182942,
      "unique_users": 41314.0157696957,
      "pages_per_visit": 3.33825256620675
    },
    {
      "global_rank": 418613,
      "category_rank": 148,
      "domain": "quiettownhome.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 56356.7173059355,
      "curr_month_visits": 56356.7173059355,
      "unique_users": 31778.9738912474,
      "pages_per_visit": 4.22284863655802
    },
    {
      "global_rank": 225702,
      "category_rank": 148,
      "domain": "prokoni.ru",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 199884.232909359,
      "curr_month_visits": 199884.232909359,
      "unique_users": 87464.1465625849,
      "pages_per_visit": 3.04127598166234
    },
    {
      "global_rank": 873837,
      "category_rank": 149,
      "domain": "tiendademascotas.com.ar",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 48308.6407186002,
      "curr_month_visits": 48308.6407186002,
      "unique_users": 21089.0549652102,
      "pages_per_visit": 1.73718042516481
    },
    {
      "global_rank": 90673,
      "category_rank": 149,
      "domain": "clinicaonline.co.il",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 404262.429216696,
      "curr_month_visits": 404262.429216696,
      "unique_users": 21826.9371441906,
      "pages_per_visit": 23.0285734666352
    },
    {
      "global_rank": 436655,
      "category_rank": 149,
      "domain": "appleskin.net",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 173605.588976238,
      "curr_month_visits": 173605.588976238,
      "unique_users": 80454.1687211092,
      "pages_per_visit": 1.13400227116318
    },
    {
      "global_rank": 314818,
      "category_rank": 149,
      "domain": "tave.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 159195.542260181,
      "curr_month_visits": 159195.542260181,
      "unique_users": 66667.2158572155,
      "pages_per_visit": 2.0940161867807
    },
    {
      "global_rank": 881514,
      "category_rank": 150,
      "domain": "yefa.de",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 43392.078625423,
      "curr_month_visits": 43392.078625423,
      "unique_users": 24793.6237087505,
      "pages_per_visit": 2.37025509673699
    },
    {
      "global_rank": 230887,
      "category_rank": 150,
      "domain": "whydonate.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 189837.977822773,
      "curr_month_visits": 189837.977822773,
      "unique_users": 85557.7113571652,
      "pages_per_visit": 2.73028570383839
    },
    {
      "global_rank": 621216,
      "category_rank": 150,
      "domain": "perkypet.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 73078.15830583,
      "curr_month_visits": 73078.15830583,
      "unique_users": 47213.4274315495,
      "pages_per_visit": 1.84307229619471
    },
    {
      "global_rank": 426202,
      "category_rank": 150,
      "domain": "alltrue.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 38776.2405195749,
      "curr_month_visits": 38776.2405195749,
      "unique_users": 20809.5295382324,
      "pages_per_visit": 5.97654461462922
    },
    {
      "global_rank": 317883,
      "category_rank": 150,
      "domain": "blissandbone.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 131188.211356466,
      "curr_month_visits": 131188.211356466,
      "unique_users": 59396.6239869761,
      "pages_per_visit": 4.40351685826607
    },
    {
      "global_rank": 438917,
      "category_rank": 151,
      "domain": "taikutsublog.jp",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 87938.9535016572,
      "curr_month_visits": 87938.9535016572,
      "unique_users": 25138.5083028932,
      "pages_per_visit": 3.88772589717754
    },
    {
      "global_rank": 628932,
      "category_rank": 151,
      "domain": "moesews.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 36430.7129815084,
      "curr_month_visits": 36430.7129815084,
      "unique_users": 17439.1266065561,
      "pages_per_visit": 4.73124078461033
    },
    {
      "global_rank": 91372,
      "category_rank": 151,
      "domain": "prettylitter.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 681167.141058816,
      "curr_month_visits": 681167.141058816,
      "unique_users": 440658.668561285,
      "pages_per_visit": 2.50706437131622
    },
    {
      "global_rank": 319576,
      "category_rank": 151,
      "domain": "myblissandbone.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 104751.058522798,
      "curr_month_visits": 104751.058522798,
      "unique_users": 43264.5939410607,
      "pages_per_visit": 4.9089395074992
    },
    {
      "global_rank": 883469,
      "category_rank": 151,
      "domain": "lua-ronnie.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 112102.587937316,
      "curr_month_visits": 112102.587937316,
      "unique_users": 25143.7644271268,
      "pages_per_visit": 10.0364391049678
    },
    {
      "global_rank": 91510,
      "category_rank": 152,
      "domain": "soul-path.me",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 712011.704359617,
      "curr_month_visits": 712011.704359617,
      "unique_users": 431027.808513549,
      "pages_per_visit": 1.36134111321048
    },
    {
      "global_rank": 325166,
      "category_rank": 152,
      "domain": "somethingborrowedblooms.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 105707.466482143,
      "curr_month_visits": 105707.466482143,
      "unique_users": 51370.5929425085,
      "pages_per_visit": 4.01543896874082
    },
    {
      "global_rank": 903523,
      "category_rank": 152,
      "domain": "clinicanimal.vet",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 52899.0395110094,
      "curr_month_visits": 52899.0395110094,
      "unique_users": 28169.978766182,
      "pages_per_visit": 1.49124770794082
    },
    {
      "global_rank": 439598,
      "category_rank": 152,
      "domain": "waterboxaquariums.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 55886.4011004688,
      "curr_month_visits": 55886.4011004688,
      "unique_users": 29760.7565464535,
      "pages_per_visit": 4.0421655144234
    },
    {
      "global_rank": 325492,
      "category_rank": 153,
      "domain": "mediazilla.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 135058.351307681,
      "curr_month_visits": 135058.351307681,
      "unique_users": 63821.7999372884,
      "pages_per_visit": 2.59746208825183
    },
    {
      "global_rank": 440082,
      "category_rank": 153,
      "domain": "cyberdefender.hk",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 85518.6204576715,
      "curr_month_visits": 85518.6204576715,
      "unique_users": 45523.0276841495,
      "pages_per_visit": 2.13347155097839
    },
    {
      "global_rank": 904619,
      "category_rank": 153,
      "domain": "ridgi-pad.de",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 10930.0557427697,
      "curr_month_visits": 10930.0557427697,
      "unique_users": 5344.21833783256,
      "pages_per_visit": 3.49581222663199
    },
    {
      "global_rank": 91654,
      "category_rank": 153,
      "domain": "zooplus.ch",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 434790.032841471,
      "curr_month_visits": 434790.032841471,
      "unique_users": 205267.253864058,
      "pages_per_visit": 6.59118425853592
    },
    {
      "global_rank": 291738,
      "category_rank": 153,
      "domain": "freshishastore.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 63964.7584141763,
      "curr_month_visits": 63964.7584141763,
      "unique_users": 27090.199064505,
      "pages_per_visit": 5.76313178420516
    },
    {
      "global_rank": 639797,
      "category_rank": 154,
      "domain": "ornithologyexchange.org",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 28227.1640160601,
      "curr_month_visits": 28227.1640160601,
      "unique_users": 11730.2343439053,
      "pages_per_visit": 4.04048830392304
    },
    {
      "global_rank": 233625,
      "category_rank": 154,
      "domain": "bataviabets.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 262735.495622249,
      "curr_month_visits": 262735.495622249,
      "unique_users": 37748.300316694,
      "pages_per_visit": 5.73789214971857
    },
    {
      "global_rank": 326169,
      "category_rank": 154,
      "domain": "thewhitecollection.com.au",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 46047.4253056763,
      "curr_month_visits": 46047.4253056763,
      "unique_users": 14537.741289474,
      "pages_per_visit": 13.7456003740324
    },
    {
      "global_rank": 441561,
      "category_rank": 154,
      "domain": "chihirosaquaticstudio.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 65243.6903338799,
      "curr_month_visits": 65243.6903338799,
      "unique_users": 28568.4364371791,
      "pages_per_visit": 4.37125615080403
    },
    {
      "global_rank": 905797,
      "category_rank": 154,
      "domain": "upco.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 36589.0663485543,
      "curr_month_visits": 36589.0663485543,
      "unique_users": 17230.7458685386,
      "pages_per_visit": 2.71060313697944
    },
    {
      "global_rank": 134632,
      "category_rank": 154,
      "domain": "rottweilerchat.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 183181.665921805,
      "curr_month_visits": 183181.665921805,
      "unique_users": 94024.1532036805,
      "pages_per_visit": 6.60383805175767
    },
    {
      "global_rank": 233715,
      "category_rank": 155,
      "domain": "sorentech.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 126843.105042692,
      "curr_month_visits": 126843.105042692,
      "unique_users": 8620.89218415977,
      "pages_per_visit": 26.7377350960826
    },
    {
      "global_rank": 643200,
      "category_rank": 155,
      "domain": "animalmatchup.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 53420.7571684779,
      "curr_month_visits": 53420.7571684779,
      "unique_users": 27990.9332872333,
      "pages_per_visit": 5.54116654928677
    },
    {
      "global_rank": 326783,
      "category_rank": 155,
      "domain": "isum.or.jp",
      "category": "Pets_and_Animals",
      "avg_month_visits": 139740.046571744,
      "curr_month_visits": 139740.046571744,
      "unique_users": 52248.226219226,
      "pages_per_visit": 5.91668445091838
    },
    {
      "global_rank": 915560,
      "category_rank": 155,
      "domain": "gzxianglong.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 20542.7447043987,
      "curr_month_visits": 20542.7447043987,
      "unique_users": 12532.8080057209,
      "pages_per_visit": 1.02801557640518
    },
    {
      "global_rank": 294916,
      "category_rank": 156,
      "domain": "steam-and-vape.fr",
      "category": "Pets_and_Animals",
      "avg_month_visits": 69586.110000681,
      "curr_month_visits": 69586.110000681,
      "unique_users": 28383.0133655808,
      "pages_per_visit": 7.25732623157639
    },
    {
      "global_rank": 919641,
      "category_rank": 156,
      "domain": "kokoro-jp.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 46934.7640897445,
      "curr_month_visits": 46934.7640897445,
      "unique_users": 21555.5146490345,
      "pages_per_visit": 1.9964239179842
    },
    {
      "global_rank": 446511,
      "category_rank": 156,
      "domain": "c1ub.net",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 91624.9296291207,
      "curr_month_visits": 91624.9296291207,
      "unique_users": 45691.3181181237,
      "pages_per_visit": 1.24459062436138
    },
    {
      "global_rank": 296532,
      "category_rank": 157,
      "domain": "vapevo.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 91000.2164495307,
      "curr_month_visits": 91000.2164495307,
      "unique_users": 36493.9106218497,
      "pages_per_visit": 3.8669492035996
    },
    {
      "global_rank": 647237,
      "category_rank": 157,
      "domain": "birdbreeders.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 41496.1809364559,
      "curr_month_visits": 41496.1809364559,
      "unique_users": 20844.2959630505,
      "pages_per_visit": 3.75366453059825
    },
    {
      "global_rank": 330802,
      "category_rank": 157,
      "domain": "theknotpro.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 160422.954485233,
      "curr_month_visits": 160422.954485233,
      "unique_users": 44874.6338458301,
      "pages_per_visit": 2.86229192338384
    },
    {
      "global_rank": 447034,
      "category_rank": 157,
      "domain": "nitiweb.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 104354.497731734,
      "curr_month_visits": 104354.497731734,
      "unique_users": 30787.6181927299,
      "pages_per_visit": 3.09836512947749
    },
    {
      "global_rank": 331114,
      "category_rank": 158,
      "domain": "stillwhite.com.au",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 104904.704918387,
      "curr_month_visits": 104904.704918387,
      "unique_users": 41482.8007612539,
      "pages_per_visit": 7.80899239549429
    },
    {
      "global_rank": 932093,
      "category_rank": 158,
      "domain": "royalcanin.ca",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 36421.3450141261,
      "curr_month_visits": 36421.3450141261,
      "unique_users": 16470.0664667223,
      "pages_per_visit": 2.91453295711588
    },
    {
      "global_rank": 453647,
      "category_rank": 158,
      "domain": "lojasminiso.com.br",
      "category": "Pets_and_Animals",
      "avg_month_visits": 59889.1549577349,
      "curr_month_visits": 59889.1549577349,
      "unique_users": 30264.5394275622,
      "pages_per_visit": 2.90495917338525
    },
    {
      "global_rank": 299790,
      "category_rank": 158,
      "domain": "evaps.fr",
      "category": "Pets_and_Animals",
      "avg_month_visits": 112578.367033954,
      "curr_month_visits": 112578.367033954,
      "unique_users": 63714.4110111544,
      "pages_per_visit": 5.363108073644
    },
    {
      "global_rank": 647612,
      "category_rank": 158,
      "domain": "bida123.vn",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 79782.1057358549,
      "curr_month_visits": 79782.1057358549,
      "unique_users": 34655.6024217887,
      "pages_per_visit": 2.45218236184085
    },
    {
      "global_rank": 332188,
      "category_rank": 159,
      "domain": "bvnavi-asp.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 62903.1647570934,
      "curr_month_visits": 62903.1647570934,
      "unique_users": 19328.8136491911,
      "pages_per_visit": 22.4604110353349
    },
    {
      "global_rank": 453846,
      "category_rank": 159,
      "domain": "somedays.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 59685.9110882087,
      "curr_month_visits": 59685.9110882087,
      "unique_users": 31294.0847359868,
      "pages_per_visit": 2.70689238809571
    },
    {
      "global_rank": 934194,
      "category_rank": 159,
      "domain": "sivakka.fi",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 34879.9526525729,
      "curr_month_visits": 34879.9526525729,
      "unique_users": 16564.3921402994,
      "pages_per_visit": 3.806063869072
    },
    {
      "global_rank": 647743,
      "category_rank": 159,
      "domain": "wawa365.sharepoint.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 39361.435851583,
      "curr_month_visits": 39361.435851583,
      "unique_users": 4176.44906632994,
      "pages_per_visit": 4.94267627292255
    },
    {
      "global_rank": 141792,
      "category_rank": 160,
      "domain": "tomandco.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 278069.893506779,
      "curr_month_visits": 278069.893506779,
      "unique_users": 174073.39452099,
      "pages_per_visit": 3.51379541038714
    },
    {
      "global_rank": 653243,
      "category_rank": 160,
      "domain": "gploft.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 22137.9316324374,
      "curr_month_visits": 22137.9316324374,
      "unique_users": 6826.18197854158,
      "pages_per_visit": 6.9632867837809
    },
    {
      "global_rank": 332243,
      "category_rank": 160,
      "domain": "wed-expert.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 106000.000008401,
      "curr_month_visits": 106000.000008401,
      "unique_users": 66700.3361051507,
      "pages_per_visit": 2.59154181867427
    },
    {
      "global_rank": 936354,
      "category_rank": 160,
      "domain": "zooroyal.md",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 24610.1741595051,
      "curr_month_visits": 24610.1741595051,
      "unique_users": 8257.82257259085,
      "pages_per_visit": 4.01996246244715
    },
    {
      "global_rank": 302227,
      "category_rank": 160,
      "domain": "hemper.co",
      "category": "Pets_and_Animals",
      "avg_month_visits": 107571.32935369,
      "curr_month_visits": 107571.32935369,
      "unique_users": 58731.6851752616,
      "pages_per_visit": 3.76939963775658
    },
    {
      "global_rank": 451718,
      "category_rank": 160,
      "domain": "tropicflow.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 85320.2763249123,
      "curr_month_visits": 85320.2763249123,
      "unique_users": 41491.5035529537,
      "pages_per_visit": 2.76034543278054
    },
    {
      "global_rank": 938375,
      "category_rank": 161,
      "domain": "realdateshere.online",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 272638.704899201,
      "curr_month_visits": 272638.704899201,
      "unique_users": 182948.609998247,
      "pages_per_visit": 1.25401634321738
    },
    {
      "global_rank": 241739,
      "category_rank": 161,
      "domain": "usef.org",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 196616.902306088,
      "curr_month_visits": 196616.902306088,
      "unique_users": 84931.0655181756,
      "pages_per_visit": 5.3984089241469
    },
    {
      "global_rank": 663063,
      "category_rank": 161,
      "domain": "bgpochivnidni.eu",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 64036.5609086583,
      "curr_month_visits": 64036.5609086583,
      "unique_users": 43458.8156746436,
      "pages_per_visit": 1.22576308186973
    },
    {
      "global_rank": 332577,
      "category_rank": 161,
      "domain": "weddingsutra.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 149753.817712744,
      "curr_month_visits": 149753.817712744,
      "unique_users": 96243.9557327613,
      "pages_per_visit": 1.5692328191012
    },
    {
      "global_rank": 337760,
      "category_rank": 162,
      "domain": "wedwed.ru",
      "category": "Pets_and_Animals",
      "avg_month_visits": 71012.3448520528,
      "curr_month_visits": 71012.3448520528,
      "unique_users": 31476.6477651774,
      "pages_per_visit": 4.12035144907928
    },
    {
      "global_rank": 456084,
      "category_rank": 162,
      "domain": "glassaqua.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 60394.8031998776,
      "curr_month_visits": 60394.8031998776,
      "unique_users": 27979.9964776421,
      "pages_per_visit": 4.16312808608739
    },
    {
      "global_rank": 241940,
      "category_rank": 162,
      "domain": "readerlinks.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 252498.4487977,
      "curr_month_visits": 252498.4487977,
      "unique_users": 117838.045786192,
      "pages_per_visit": 1.75364581363468
    },
    {
      "global_rank": 945966,
      "category_rank": 162,
      "domain": "shop.martinruetter.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 34038.8184516452,
      "curr_month_visits": 34038.8184516452,
      "unique_users": 12936.9268016779,
      "pages_per_visit": 2.52524198556815
    },
    {
      "global_rank": 94834,
      "category_rank": 163,
      "domain": "newluxe.jp",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 397407.72083208,
      "curr_month_visits": 397407.72083208,
      "unique_users": 296459.057342571,
      "pages_per_visit": 3.44851192302801
    },
    {
      "global_rank": 946394,
      "category_rank": 163,
      "domain": "financecraze.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 32851.5145335897,
      "curr_month_visits": 32851.5145335897,
      "unique_users": 21482.2831887491,
      "pages_per_visit": 2.32390704446319
    },
    {
      "global_rank": 142409,
      "category_rank": 163,
      "domain": "zoohit.sk",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 253854.763700269,
      "curr_month_visits": 253854.763700269,
      "unique_users": 142929.276205289,
      "pages_per_visit": 4.77574102162797
    },
    {
      "global_rank": 663926,
      "category_rank": 163,
      "domain": "mickaboo.org",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 42465.8683423264,
      "curr_month_visits": 42465.8683423264,
      "unique_users": 11895.583285544,
      "pages_per_visit": 4.73304404351178
    },
    {
      "global_rank": 456198,
      "category_rank": 163,
      "domain": "tukcom.ru",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 61919.6273960794,
      "curr_month_visits": 61919.6273960794,
      "unique_users": 22723.165308564,
      "pages_per_visit": 3.18123530453332
    },
    {
      "global_rank": 244536,
      "category_rank": 163,
      "domain": "ongait.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 108899.614685407,
      "curr_month_visits": 108899.614685407,
      "unique_users": 24787.8733242282,
      "pages_per_visit": 5.46593800179926
    },
    {
      "global_rank": 306511,
      "category_rank": 163,
      "domain": "vapedinnerlady.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 224332.411465059,
      "curr_month_visits": 224332.411465059,
      "unique_users": 120863.725181078,
      "pages_per_visit": 1.34390508105299
    },
    {
      "global_rank": 126791,
      "category_rank": 163,
      "domain": "chomered.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 138172.047294654,
      "curr_month_visits": 138172.047294654,
      "unique_users": 31941.9970846967,
      "pages_per_visit": 7.24692474227935
    },
    {
      "global_rank": 457388,
      "category_rank": 164,
      "domain": "momomamemomo.blog.jp",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 62232.2419427448,
      "curr_month_visits": 62232.2419427448,
      "unique_users": 29146.8039925204,
      "pages_per_visit": 4.27060143127146
    },
    {
      "global_rank": 955750,
      "category_rank": 164,
      "domain": "deu-reptiles.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 29933.2460967844,
      "curr_month_visits": 29933.2460967844,
      "unique_users": 15903.0733953194,
      "pages_per_visit": 2.80348060934432
    },
    {
      "global_rank": 664259,
      "category_rank": 164,
      "domain": "irecord.org.uk",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 37503.6215617792,
      "curr_month_visits": 37503.6215617792,
      "unique_users": 6937.69198265662,
      "pages_per_visit": 10.2120108804595
    },
    {
      "global_rank": 306694,
      "category_rank": 164,
      "domain": "eliquidandco.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 91618.7706968783,
      "curr_month_visits": 91618.7706968783,
      "unique_users": 43729.7353325887,
      "pages_per_visit": 3.8732347021413
    },
    {
      "global_rank": 143051,
      "category_rank": 164,
      "domain": "imihu.net",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 545499.766588471,
      "curr_month_visits": 545499.766588471,
      "unique_users": 147678.895522476,
      "pages_per_visit": 1.32102415227954
    },
    {
      "global_rank": 350531,
      "category_rank": 164,
      "domain": "ichrisfrontier.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 71481.4073311555,
      "curr_month_visits": 71481.4073311555,
      "unique_users": 28160.2318783027,
      "pages_per_visit": 6.10572099795438
    },
    {
      "global_rank": 956680,
      "category_rank": 165,
      "domain": "licences.ie",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 16555.7418996961,
      "curr_month_visits": 16555.7418996961,
      "unique_users": 8001.06498412492,
      "pages_per_visit": 5.09433543070034
    },
    {
      "global_rank": 351686,
      "category_rank": 165,
      "domain": "millanova.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 71408.4835421777,
      "curr_month_visits": 71408.4835421777,
      "unique_users": 36396.3717627085,
      "pages_per_visit": 5.85589967406507
    },
    {
      "global_rank": 461624,
      "category_rank": 165,
      "domain": "exoticfishshop.net",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 34169.7457237553,
      "curr_month_visits": 34169.7457237553,
      "unique_users": 16829.3471678469,
      "pages_per_visit": 6.83054895071405
    },
    {
      "global_rank": 95236,
      "category_rank": 166,
      "domain": "clinichq.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 776675.21366402,
      "curr_month_visits": 776675.21366402,
      "unique_users": 379571.168131626,
      "pages_per_visit": 2.0307471702344
    },
    {
      "global_rank": 461661,
      "category_rank": 166,
      "domain": "theshrimpfarm.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 93002.4242392879,
      "curr_month_visits": 93002.4242392879,
      "unique_users": 50378.2967280457,
      "pages_per_visit": 2.21826987298306
    },
    {
      "global_rank": 247000,
      "category_rank": 166,
      "domain": "horses.nl",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 234197.432298805,
      "curr_month_visits": 234197.432298805,
      "unique_users": 55089.2138697988,
      "pages_per_visit": 2.28420020947637
    },
    {
      "global_rank": 310575,
      "category_rank": 166,
      "domain": "nordicspirit.co.uk",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 101780.465882456,
      "curr_month_visits": 101780.465882456,
      "unique_users": 55655.0388488138,
      "pages_per_visit": 3.99028996219308
    },
    {
      "global_rank": 670899,
      "category_rank": 166,
      "domain": "miviewpoint.net",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 49194.2687976512,
      "curr_month_visits": 49194.2687976512,
      "unique_users": 11234.5440619736,
      "pages_per_visit": 3.01813104274296
    },
    {
      "global_rank": 352305,
      "category_rank": 166,
      "domain": "chicsew.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 85391.0743089083,
      "curr_month_visits": 85391.0743089083,
      "unique_users": 49141.4394928718,
      "pages_per_visit": 3.5297435291981
    },
    {
      "global_rank": 960548,
      "category_rank": 166,
      "domain": "maybienvh.wordpress.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 40049.5116259824,
      "curr_month_visits": 40049.5116259824,
      "unique_users": 22770.3961292469,
      "pages_per_visit": 1.42727379826873
    },
    {
      "global_rank": 247200,
      "category_rank": 167,
      "domain": "galopponline.de",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 219192.369677569,
      "curr_month_visits": 219192.369677569,
      "unique_users": 42018.6699312876,
      "pages_per_visit": 3.02998755638015
    },
    {
      "global_rank": 462415,
      "category_rank": 167,
      "domain": "tropco.co.uk",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 45755.9121550099,
      "curr_month_visits": 45755.9121550099,
      "unique_users": 21754.8176231511,
      "pages_per_visit": 8.61069569042064
    },
    {
      "global_rank": 973294,
      "category_rank": 167,
      "domain": "schloss-tempelhof.de",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 27571.570831412,
      "curr_month_visits": 27571.570831412,
      "unique_users": 12751.9769656247,
      "pages_per_visit": 2.51822908991635
    },
    {
      "global_rank": 976133,
      "category_rank": 168,
      "domain": "farmhouseguide.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 21919.3627900206,
      "curr_month_visits": 21919.3627900206,
      "unique_users": 11541.7431922252,
      "pages_per_visit": 1.64983596484486
    },
    {
      "global_rank": 247828,
      "category_rank": 168,
      "domain": "hauptner.ch",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 119342.046385921,
      "curr_month_visits": 119342.046385921,
      "unique_users": 71773.3678036565,
      "pages_per_visit": 3.95442988609916
    },
    {
      "global_rank": 355132,
      "category_rank": 168,
      "domain": "la-viephoto.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 88113.320402773,
      "curr_month_visits": 88113.320402773,
      "unique_users": 47805.1140977606,
      "pages_per_visit": 4.02931414499701
    },
    {
      "global_rank": 147041,
      "category_rank": 168,
      "domain": "dyrenesbeskyttelse.dk",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 276557.23665001,
      "curr_month_visits": 276557.23665001,
      "unique_users": 131145.222227184,
      "pages_per_visit": 4.66186271435606
    },
    {
      "global_rank": 96914,
      "category_rank": 168,
      "domain": "deplorabledaily.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 844535.6948597,
      "curr_month_visits": 844535.6948597,
      "unique_users": 180179.23784493,
      "pages_per_visit": 2.30167706130572
    },
    {
      "global_rank": 40363,
      "category_rank": 168,
      "domain": "maxvandaag.nl",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 1886281.86246326,
      "curr_month_visits": 1886281.86246326,
      "unique_users": 1287730.82130794,
      "pages_per_visit": 1.64818109810008
    },
    {
      "global_rank": 677886,
      "category_rank": 168,
      "domain": "ornitho.at",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 42048.395189844,
      "curr_month_visits": 42048.395189844,
      "unique_users": 11641.7442796,
      "pages_per_visit": 4.84145131772023
    },
    {
      "global_rank": 359886,
      "category_rank": 169,
      "domain": "braidbabes.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 61002.1976394933,
      "curr_month_visits": 61002.1976394933,
      "unique_users": 10067.4322914612,
      "pages_per_visit": 9.0966481617289
    },
    {
      "global_rank": 678122,
      "category_rank": 169,
      "domain": "galuxe.com.tw",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 59068.291913197,
      "curr_month_visits": 59068.291913197,
      "unique_users": 32181.9823245302,
      "pages_per_visit": 2.49035694639147
    },
    {
      "global_rank": 979668,
      "category_rank": 169,
      "domain": "flipgorilla.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 19506.3817398489,
      "curr_month_visits": 19506.3817398489,
      "unique_users": 10597.7059744869,
      "pages_per_visit": 5.94434656336377
    },
    {
      "global_rank": 249672,
      "category_rank": 170,
      "domain": "equi-clic.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 113468.619261002,
      "curr_month_visits": 113468.619261002,
      "unique_users": 52971.5659119825,
      "pages_per_visit": 4.42891435572048
    },
    {
      "global_rank": 476063,
      "category_rank": 170,
      "domain": "degalls.com.br",
      "category": "Pets_and_Animals",
      "avg_month_visits": 56078.1218830285,
      "curr_month_visits": 56078.1218830285,
      "unique_users": 38088.5990190321,
      "pages_per_visit": 2.43849295142305
    },
    {
      "global_rank": 678778,
      "category_rank": 170,
      "domain": "ourmediashop.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 54684.9407084684,
      "curr_month_visits": 54684.9407084684,
      "unique_users": 25473.9928274371,
      "pages_per_visit": 3.04746803467524
    },
    {
      "global_rank": 988633,
      "category_rank": 170,
      "domain": "bestiepaws.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 32625.7234617765,
      "curr_month_visits": 32625.7234617765,
      "unique_users": 21913.2936222462,
      "pages_per_visit": 1.3882115874826
    },
    {
      "global_rank": 466459,
      "category_rank": 170,
      "domain": "monosola.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 92746.063930259,
      "curr_month_visits": 92746.063930259,
      "unique_users": 57607.3611869649,
      "pages_per_visit": 1.63132938451061
    },
    {
      "global_rank": 315693,
      "category_rank": 170,
      "domain": "my-probance.one",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 93885.2551852625,
      "curr_month_visits": 93885.2551852625,
      "unique_users": 19805.1036885612,
      "pages_per_visit": 12.5253045999889
    },
    {
      "global_rank": 316882,
      "category_rank": 171,
      "domain": "420science.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 88582.1133113911,
      "curr_month_visits": 88582.1133113911,
      "unique_users": 56095.9264540591,
      "pages_per_visit": 3.37820163268559
    },
    {
      "global_rank": 988954,
      "category_rank": 171,
      "domain": "awl.ch",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 28060.5336554666,
      "curr_month_visits": 28060.5336554666,
      "unique_users": 13749.7749846706,
      "pages_per_visit": 2.16735710139497
    },
    {
      "global_rank": 251996,
      "category_rank": 171,
      "domain": "terreseteaux.fr",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 126806.740779006,
      "curr_month_visits": 126806.740779006,
      "unique_users": 72520.0614222107,
      "pages_per_visit": 4.38193088371854
    },
    {
      "global_rank": 364466,
      "category_rank": 171,
      "domain": "phorbs.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 75431.3172748893,
      "curr_month_visits": 75431.3172748893,
      "unique_users": 2419.01373651297,
      "pages_per_visit": 17.5696122585768
    },
    {
      "global_rank": 149938,
      "category_rank": 171,
      "domain": "herz-fuer-tiere.de",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 533788.469734297,
      "curr_month_visits": 533788.469734297,
      "unique_users": 353016.732931203,
      "pages_per_visit": 1.37731556769288
    },
    {
      "global_rank": 680094,
      "category_rank": 171,
      "domain": "avianreport.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 56146.6548499737,
      "curr_month_visits": 56146.6548499737,
      "unique_users": 32648.6632905976,
      "pages_per_visit": 1.57586617091573
    },
    {
      "global_rank": 98768,
      "category_rank": 171,
      "domain": "valleyvet.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 450828.332486319,
      "curr_month_visits": 450828.332486319,
      "unique_users": 272906.483419113,
      "pages_per_visit": 4.21909492897246
    },
    {
      "global_rank": 989382,
      "category_rank": 172,
      "domain": "planetcare.org",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 22842.4796523828,
      "curr_month_visits": 22842.4796523828,
      "unique_users": 10682.1504024258,
      "pages_per_visit": 1.91957068846841
    },
    {
      "global_rank": 364826,
      "category_rank": 172,
      "domain": "wedibox.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 228443.319797956,
      "curr_month_visits": 228443.319797956,
      "unique_users": 80880.0222743157,
      "pages_per_visit": 2.56710194223746
    },
    {
      "global_rank": 99020,
      "category_rank": 172,
      "domain": "searchtribune.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 690856.94223637,
      "curr_month_visits": 690856.94223637,
      "unique_users": 402203.856151936,
      "pages_per_visit": 1.53082271316299
    },
    {
      "global_rank": 254425,
      "category_rank": 172,
      "domain": "woodbine.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 191855.762763263,
      "curr_month_visits": 191855.762763263,
      "unique_users": 52313.070805638,
      "pages_per_visit": 3.05204356160293
    },
    {
      "global_rank": 471745,
      "category_rank": 172,
      "domain": "jungleaquatics.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 63572.1796243803,
      "curr_month_visits": 63572.1796243803,
      "unique_users": 26605.2742058376,
      "pages_per_visit": 2.77053147006135
    },
    {
      "global_rank": 151381,
      "category_rank": 173,
      "domain": "desicdenic24.ru",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 269194.032130424,
      "curr_month_visits": 269194.032130424,
      "unique_users": 159744.552822372,
      "pages_per_visit": 1.20345173215157
    },
    {
      "global_rank": 256147,
      "category_rank": 173,
      "domain": "kavalio.de",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 126385.401746527,
      "curr_month_visits": 126385.401746527,
      "unique_users": 74281.4420735645,
      "pages_per_visit": 3.75324625880257
    },
    {
      "global_rank": 989548,
      "category_rank": 173,
      "domain": "64online.jp",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 52232.2148768543,
      "curr_month_visits": 52232.2148768543,
      "unique_users": 2249.47782156844,
      "pages_per_visit": 11.1631312613655
    },
    {
      "global_rank": 366985,
      "category_rank": 173,
      "domain": "averyaustin.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 58035.5984645944,
      "curr_month_visits": 58035.5984645944,
      "unique_users": 26693.9125744377,
      "pages_per_visit": 5.32383564630168
    },
    {
      "global_rank": 133831,
      "category_rank": 173,
      "domain": "ibomma.games",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 12270156.8419724,
      "curr_month_visits": 12270156.8419724,
      "unique_users": 2623376.40887644,
      "pages_per_visit": 4.11101874603792
    },
    {
      "global_rank": 694196,
      "category_rank": 173,
      "domain": "columbofil.net",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 34070.0686537996,
      "curr_month_visits": 34070.0686537996,
      "unique_users": 8268.84381397447,
      "pages_per_visit": 3.40513813130537
    },
    {
      "global_rank": 134504,
      "category_rank": 174,
      "domain": "groundedfootwear.co",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 318699.900846864,
      "curr_month_visits": 318699.900846864,
      "unique_users": 224858.222507524,
      "pages_per_visit": 2.50163899618779
    },
    {
      "global_rank": 100914,
      "category_rank": 174,
      "domain": "numarasorgulamax.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 720094.54008255,
      "curr_month_visits": 720094.54008255,
      "unique_users": 588072.349317227,
      "pages_per_visit": 1.09987934544783
    },
    {
      "global_rank": 474162,
      "category_rank": 174,
      "domain": "fishi-pedia.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 90602.622866362,
      "curr_month_visits": 90602.622866362,
      "unique_users": 45286.9407608613,
      "pages_per_visit": 1.73642062347309
    },
    {
      "global_rank": 321420,
      "category_rank": 174,
      "domain": "whitesnus.pl",
      "category": "Pets_and_Animals",
      "avg_month_visits": 69824.491726838,
      "curr_month_visits": 69824.491726838,
      "unique_users": 25475.7205229487,
      "pages_per_visit": 5.84919458598091
    },
    {
      "global_rank": 694910,
      "category_rank": 174,
      "domain": "1959bhsmustangs.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 59740.2696910921,
      "curr_month_visits": 59740.2696910921,
      "unique_users": 21277.3051122933,
      "pages_per_visit": 1.83301992007838
    },
    {
      "global_rank": 481182,
      "category_rank": 174,
      "domain": "imageconsultantmaidenhead.co.uk",
      "category": "Pets_and_Animals",
      "avg_month_visits": 38781.5437060248,
      "curr_month_visits": 38781.5437060248,
      "unique_users": 17943.9817912937,
      "pages_per_visit": 5.01068419812471
    },
    {
      "global_rank": 373811,
      "category_rank": 174,
      "domain": "emmalinebride.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 64933.7600659927,
      "curr_month_visits": 64933.7600659927,
      "unique_users": 28400.769420724,
      "pages_per_visit": 8.99999963787314
    },
    {
      "global_rank": 989702,
      "category_rank": 174,
      "domain": "rybalka.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 52119.5953651489,
      "curr_month_visits": 52119.5953651489,
      "unique_users": 33948.2994142645,
      "pages_per_visit": 1.88232936253317
    },
    {
      "global_rank": 990313,
      "category_rank": 175,
      "domain": "spa-de-loire-atlantique.fr",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 24103.4038127121,
      "curr_month_visits": 24103.4038127121,
      "unique_users": 11158.6842639354,
      "pages_per_visit": 4.47311366204851
    },
    {
      "global_rank": 698009,
      "category_rank": 175,
      "domain": "nestwatch.org",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 48379.9367001948,
      "curr_month_visits": 48379.9367001948,
      "unique_users": 29799.7023675,
      "pages_per_visit": 2.67211868100273
    },
    {
      "global_rank": 474605,
      "category_rank": 175,
      "domain": "aquariumsource.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 96708.2499692283,
      "curr_month_visits": 96708.2499692283,
      "unique_users": 53532.3986662759,
      "pages_per_visit": 1.52664346147125
    },
    {
      "global_rank": 101970,
      "category_rank": 175,
      "domain": "pshoken.co.jp",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 683150.809669804,
      "curr_month_visits": 683150.809669804,
      "unique_users": 471030.510093748,
      "pages_per_visit": 1.85874880011643
    },
    {
      "global_rank": 260244,
      "category_rank": 175,
      "domain": "turf-pronostics.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 210586.813216926,
      "curr_month_visits": 210586.813216926,
      "unique_users": 47262.4267713419,
      "pages_per_visit": 3.08851325165221
    },
    {
      "global_rank": 474992,
      "category_rank": 176,
      "domain": "spotlesswater.co.uk",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 82316.3002977538,
      "curr_month_visits": 82316.3002977538,
      "unique_users": 15387.9293703283,
      "pages_per_visit": 5.53822783719087
    },
    {
      "global_rank": 991266,
      "category_rank": 176,
      "domain": "pro-igel.de",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 25767.0802864664,
      "curr_month_visits": 25767.0802864664,
      "unique_users": 15448.9231608899,
      "pages_per_visit": 3.21235969246292
    },
    {
      "global_rank": 701861,
      "category_rank": 176,
      "domain": "derbyshireos.org.uk",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 69183.9479391116,
      "curr_month_visits": 69183.9479391116,
      "unique_users": 11374.7972700976,
      "pages_per_visit": 1.6925254874789
    },
    {
      "global_rank": 262314,
      "category_rank": 177,
      "domain": "worldclasstrotting.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 135503.238556807,
      "curr_month_visits": 135503.238556807,
      "unique_users": 79940.5480848464,
      "pages_per_visit": 1.54288561443419
    },
    {
      "global_rank": 991815,
      "category_rank": 177,
      "domain": "botaneo.co",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 50552.0202550322,
      "curr_month_visits": 50552.0202550322,
      "unique_users": 32228.4215546086,
      "pages_per_visit": 1.3502926155837
    },
    {
      "global_rank": 702897,
      "category_rank": 177,
      "domain": "shop.wwt.org.uk",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 17990.5342930257,
      "curr_month_visits": 17990.5342930257,
      "unique_users": 6776.51916874981,
      "pages_per_visit": 16.6807096289514
    },
    {
      "global_rank": 706560,
      "category_rank": 178,
      "domain": "suomenlintuvaruste.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 37373.67362287,
      "curr_month_visits": 37373.67362287,
      "unique_users": 10286.7745766464,
      "pages_per_visit": 2.469276974977
    },
    {
      "global_rank": 714530,
      "category_rank": 179,
      "domain": "outforia.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 66062.2447884718,
      "curr_month_visits": 66062.2447884718,
      "unique_users": 37797.1818110621,
      "pages_per_visit": 1.30161102283161
    },
    {
      "global_rank": 994924,
      "category_rank": 179,
      "domain": "prodogsdirect.org.uk",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 26700.4903834539,
      "curr_month_visits": 26700.4903834539,
      "unique_users": 14185.2946112276,
      "pages_per_visit": 3.82559284723755
    },
    {
      "global_rank": 403206,
      "category_rank": 179,
      "domain": "caratsandcake.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 90090.7380943182,
      "curr_month_visits": 90090.7380943182,
      "unique_users": 55955.2409627346,
      "pages_per_visit": 3.18904322510695
    },
    {
      "global_rank": 103801,
      "category_rank": 179,
      "domain": "bluebuffalo.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 798287.67573629,
      "curr_month_visits": 798287.67573629,
      "unique_users": 637902.321192326,
      "pages_per_visit": 1.55732911952518
    },
    {
      "global_rank": 476943,
      "category_rank": 179,
      "domain": "bantam.earth",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 100234.574211652,
      "curr_month_visits": 100234.574211652,
      "unique_users": 54488.2048875071,
      "pages_per_visit": 1.69034804277283
    },
    {
      "global_rank": 481857,
      "category_rank": 180,
      "domain": "saltwaterfish.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 79927.0135871491,
      "curr_month_visits": 79927.0135871491,
      "unique_users": 42810.1884534171,
      "pages_per_visit": 6.05433257201638
    },
    {
      "global_rank": 403498,
      "category_rank": 180,
      "domain": "vowdweddings.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 72400.753270869,
      "curr_month_visits": 72400.753270869,
      "unique_users": 42483.765213019,
      "pages_per_visit": 5.47208434779032
    },
    {
      "global_rank": 42316,
      "category_rank": 180,
      "domain": "espn.nl",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 1797751.68897299,
      "curr_month_visits": 1797751.68897299,
      "unique_users": 979031.887271225,
      "pages_per_visit": 2.18644938155502
    },
    {
      "global_rank": 995381,
      "category_rank": 180,
      "domain": "clicanimaux.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 32093.3252982053,
      "curr_month_visits": 32093.3252982053,
      "unique_users": 11440.9298949126,
      "pages_per_visit": 3.46028181844215
    },
    {
      "global_rank": 505356,
      "category_rank": 180,
      "domain": "racco.com.br",
      "category": "Pets_and_Animals",
      "avg_month_visits": 57692.2220550707,
      "curr_month_visits": 57692.2220550707,
      "unique_users": 22608.1948168407,
      "pages_per_visit": 5.06400899070963
    },
    {
      "global_rank": 330409,
      "category_rank": 180,
      "domain": "fatbuddhaglass.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 89299.1642874842,
      "curr_month_visits": 89299.1642874842,
      "unique_users": 58169.02350214,
      "pages_per_visit": 3.75865646742276
    },
    {
      "global_rank": 408266,
      "category_rank": 181,
      "domain": "stylemepretty.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 104165.172664756,
      "curr_month_visits": 104165.172664756,
      "unique_users": 59008.3870572362,
      "pages_per_visit": 2.38912227223372
    },
    {
      "global_rank": 330684,
      "category_rank": 181,
      "domain": "pricepointny.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 96494.5775297907,
      "curr_month_visits": 96494.5775297907,
      "unique_users": 51828.5618833641,
      "pages_per_visit": 3.59366587492974
    },
    {
      "global_rank": 997027,
      "category_rank": 181,
      "domain": "heartofchelsea.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 26847.6060268787,
      "curr_month_visits": 26847.6060268787,
      "unique_users": 14471.8166308164,
      "pages_per_visit": 1.63245557655699
    },
    {
      "global_rank": 718204,
      "category_rank": 181,
      "domain": "uvmoffice.sharepoint.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 33543.1509535491,
      "curr_month_visits": 33543.1509535491,
      "unique_users": 7430.12252298073,
      "pages_per_visit": 4.1635954644199
    },
    {
      "global_rank": 158703,
      "category_rank": 182,
      "domain": "jordbruksverket.se",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 260683.152733698,
      "curr_month_visits": 260683.152733698,
      "unique_users": 150556.853236914,
      "pages_per_visit": 4.09147588065276
    },
    {
      "global_rank": 999904,
      "category_rank": 182,
      "domain": "reptiledirect.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 37852.7825382962,
      "curr_month_visits": 37852.7825382962,
      "unique_users": 19401.1533350585,
      "pages_per_visit": 1.51336851176525
    },
    {
      "global_rank": 726961,
      "category_rank": 182,
      "domain": "moveforwardparty.org",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 64575.3456071488,
      "curr_month_visits": 64575.3456071488,
      "unique_users": 39938.466780036,
      "pages_per_visit": 1.47683470945426
    },
    {
      "global_rank": 43536,
      "category_rank": 182,
      "domain": "visitsealife.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 1510102.5740172,
      "curr_month_visits": 1510102.5740172,
      "unique_users": 880445.952481116,
      "pages_per_visit": 3.39558954174327
    },
    {
      "global_rank": 483702,
      "category_rank": 182,
      "domain": "inari.site",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 105057.992599591,
      "curr_month_visits": 105057.992599591,
      "unique_users": 51336.7067903441,
      "pages_per_visit": 1.51358850876805
    },
    {
      "global_rank": 270257,
      "category_rank": 183,
      "domain": "britishhorseracing.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 188340.13811391,
      "curr_month_visits": 188340.13811391,
      "unique_users": 62277.4278309,
      "pages_per_visit": 3.60401271278798
    },
    {
      "global_rank": 161206,
      "category_rank": 183,
      "domain": "iheartcats.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 270113.532485278,
      "curr_month_visits": 270113.532485278,
      "unique_users": 151821.688456789,
      "pages_per_visit": 2.57459761973059
    },
    {
      "global_rank": 333345,
      "category_rank": 183,
      "domain": "streetshop-france.fr",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 94067.3974520789,
      "curr_month_visits": 94067.3974520789,
      "unique_users": 42811.7907675651,
      "pages_per_visit": 6.88171666458511
    },
    {
      "global_rank": 1011341,
      "category_rank": 183,
      "domain": "regal-basse-cour.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 56664.0272973931,
      "curr_month_visits": 56664.0272973931,
      "unique_users": 28330.6325062058,
      "pages_per_visit": 1.42043895654453
    },
    {
      "global_rank": 106176,
      "category_rank": 184,
      "domain": "farmina.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 428554.945585278,
      "curr_month_visits": 428554.945585278,
      "unique_users": 233606.609205335,
      "pages_per_visit": 4.33983558357585
    },
    {
      "global_rank": 490242,
      "category_rank": 184,
      "domain": "imazo.se",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 82725.2229933491,
      "curr_month_visits": 82725.2229933491,
      "unique_users": 17789.6100017353,
      "pages_per_visit": 2.47757238122474
    },
    {
      "global_rank": 161724,
      "category_rank": 184,
      "domain": "pangovet.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 475504.277923681,
      "curr_month_visits": 475504.277923681,
      "unique_users": 299386.920561431,
      "pages_per_visit": 1.4084213851875
    },
    {
      "global_rank": 270860,
      "category_rank": 184,
      "domain": "ustrottingnews.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 208104.674833272,
      "curr_month_visits": 208104.674833272,
      "unique_users": 34518.1395348923,
      "pages_per_visit": 2.11928043170136
    },
    {
      "global_rank": 412150,
      "category_rank": 184,
      "domain": "ungrandjour.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 118333.753333841,
      "curr_month_visits": 118333.753333841,
      "unique_users": 46960.7430240293,
      "pages_per_visit": 1.96334564643878
    },
    {
      "global_rank": 729463,
      "category_rank": 184,
      "domain": "diceunderwear.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 33971.4839219792,
      "curr_month_visits": 33971.4839219792,
      "unique_users": 17256.4637186215,
      "pages_per_visit": 4.03819311545628
    },
    {
      "global_rank": 1016291,
      "category_rank": 185,
      "domain": "mag-clock.jp",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 42050.7921443258,
      "curr_month_visits": 42050.7921443258,
      "unique_users": 23678.9819366391,
      "pages_per_visit": 1.61025408457402
    },
    {
      "global_rank": 729510,
      "category_rank": 185,
      "domain": "wildlifeillinois.org",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 39242.0869224251,
      "curr_month_visits": 39242.0869224251,
      "unique_users": 24063.7623636818,
      "pages_per_visit": 4.3702175089364
    },
    {
      "global_rank": 334886,
      "category_rank": 185,
      "domain": "blacknote.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 105834.997334866,
      "curr_month_visits": 105834.997334866,
      "unique_users": 64466.6131651212,
      "pages_per_visit": 4.02536323739244
    },
    {
      "global_rank": 162283,
      "category_rank": 185,
      "domain": "body-guard.jp",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 180445.231791787,
      "curr_month_visits": 180445.231791787,
      "unique_users": 112830.270136084,
      "pages_per_visit": 4.14139731928637
    },
    {
      "global_rank": 336243,
      "category_rank": 186,
      "domain": "foxcigar.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 111167.613960642,
      "curr_month_visits": 111167.613960642,
      "unique_users": 46386.1853692489,
      "pages_per_visit": 4.22351846932706
    },
    {
      "global_rank": 272061,
      "category_rank": 186,
      "domain": "fundis-reitsport.de",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 115243.586468176,
      "curr_month_visits": 115243.586468176,
      "unique_users": 68489.5921403879,
      "pages_per_visit": 3.37425272870828
    },
    {
      "global_rank": 412722,
      "category_rank": 186,
      "domain": "mesibalend.co.il",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 64793.7494190104,
      "curr_month_visits": 64793.7494190104,
      "unique_users": 36298.7657456021,
      "pages_per_visit": 2.84507062245758
    },
    {
      "global_rank": 731321,
      "category_rank": 186,
      "domain": "bplant.org",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 59920.2605483917,
      "curr_month_visits": 59920.2605483917,
      "unique_users": 33409.1841940427,
      "pages_per_visit": 2.41533358689729
    },
    {
      "global_rank": 490733,
      "category_rank": 186,
      "domain": "bigals.ca",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 60864.4238127976,
      "curr_month_visits": 60864.4238127976,
      "unique_users": 32353.0261302106,
      "pages_per_visit": 4.02087646705898
    },
    {
      "global_rank": 1023169,
      "category_rank": 186,
      "domain": "lionsland.ru",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 41423.9804958458,
      "curr_month_visits": 41423.9804958458,
      "unique_users": 23173.0734833315,
      "pages_per_visit": 2.2976423316358
    },
    {
      "global_rank": 1023519,
      "category_rank": 187,
      "domain": "dur-a-avaler.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 34539.7642883145,
      "curr_month_visits": 34539.7642883145,
      "unique_users": 23557.5908543783,
      "pages_per_visit": 1.55984015677389
    },
    {
      "global_rank": 414024,
      "category_rank": 187,
      "domain": "weddingchicks.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 106515.227785552,
      "curr_month_visits": 106515.227785552,
      "unique_users": 58450.3730606291,
      "pages_per_visit": 1.64395070409226
    },
    {
      "global_rank": 731353,
      "category_rank": 187,
      "domain": "btarboretum.org",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 36879.7639512078,
      "curr_month_visits": 36879.7639512078,
      "unique_users": 20596.7258423494,
      "pages_per_visit": 2.23154888073758
    },
    {
      "global_rank": 336256,
      "category_rank": 187,
      "domain": "goldenpump.de",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 62900.60385039,
      "curr_month_visits": 62900.60385039,
      "unique_users": 28705.7960181317,
      "pages_per_visit": 4.83033983378577
    },
    {
      "global_rank": 148397,
      "category_rank": 188,
      "domain": "recordstrivia.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 692198.753113589,
      "curr_month_visits": 692198.753113589,
      "unique_users": 281464.079078699,
      "pages_per_visit": 2.69054222069424
    },
    {
      "global_rank": 273469,
      "category_rank": 188,
      "domain": "equiva.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 118842.302661648,
      "curr_month_visits": 118842.302661648,
      "unique_users": 65323.9379125655,
      "pages_per_visit": 4.6454600662723
    },
    {
      "global_rank": 1044915,
      "category_rank": 188,
      "domain": "lundemoellen.dk",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 18605.5828725522,
      "curr_month_visits": 18605.5828725522,
      "unique_users": 8500.94567210732,
      "pages_per_visit": 4.36453739298187
    },
    {
      "global_rank": 44165,
      "category_rank": 188,
      "domain": "reef2reef.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 1564090.49436085,
      "curr_month_visits": 1564090.49436085,
      "unique_users": 425213.120870678,
      "pages_per_visit": 3.28491033682256
    },
    {
      "global_rank": 739065,
      "category_rank": 188,
      "domain": "volnistye.ru",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 56163.8537460167,
      "curr_month_visits": 56163.8537460167,
      "unique_users": 31694.1865667726,
      "pages_per_visit": 1.62422018656221
    },
    {
      "global_rank": 414715,
      "category_rank": 188,
      "domain": "icefabrics.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 87975.1945993435,
      "curr_month_visits": 87975.1945993435,
      "unique_users": 45697.0225281209,
      "pages_per_visit": 2.16707977965039
    },
    {
      "global_rank": 534386,
      "category_rank": 188,
      "domain": "kashikimono.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 59843.2335867042,
      "curr_month_visits": 59843.2335867042,
      "unique_users": 39803.2606945403,
      "pages_per_visit": 4.06187744991138
    },
    {
      "global_rank": 148455,
      "category_rank": 189,
      "domain": "omlet.co.uk",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 335794.898139517,
      "curr_month_visits": 335794.898139517,
      "unique_users": 192853.622919089,
      "pages_per_visit": 2.3723159154346
    },
    {
      "global_rank": 108705,
      "category_rank": 189,
      "domain": "навигатор.дети",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 707650.482818643,
      "curr_month_visits": 707650.482818643,
      "unique_users": 289620.514741608,
      "pages_per_visit": 3.74322761404018
    },
    {
      "global_rank": 1050824,
      "category_rank": 189,
      "domain": "gcoc.net",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 13363.3611299452,
      "curr_month_visits": 13363.3611299452,
      "unique_users": 2560.30804801889,
      "pages_per_visit": 17.7126154319206
    },
    {
      "global_rank": 416124,
      "category_rank": 189,
      "domain": "laceandfavour.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 95731.080789882,
      "curr_month_visits": 95731.080789882,
      "unique_users": 50942.436610667,
      "pages_per_visit": 3.19124795771056
    },
    {
      "global_rank": 343710,
      "category_rank": 189,
      "domain": "tabako-sakuranbo.co.jp",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 94357.7364403628,
      "curr_month_visits": 94357.7364403628,
      "unique_users": 57478.2873530041,
      "pages_per_visit": 4.32775968192929
    },
    {
      "global_rank": 275230,
      "category_rank": 189,
      "domain": "bigdweb.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 135540.632207495,
      "curr_month_visits": 135540.632207495,
      "unique_users": 76778.6051285113,
      "pages_per_visit": 3.90064498039161
    },
    {
      "global_rank": 742496,
      "category_rank": 189,
      "domain": "birdbgone.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 58369.4308438077,
      "curr_month_visits": 58369.4308438077,
      "unique_users": 31450.7364743525,
      "pages_per_visit": 2.1630588391325
    },
    {
      "global_rank": 746281,
      "category_rank": 190,
      "domain": "lsaassoc.sharepoint.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 33632.3745868619,
      "curr_month_visits": 33632.3745868619,
      "unique_users": 7219.83428855475,
      "pages_per_visit": 4.55835379794105
    },
    {
      "global_rank": 344115,
      "category_rank": 190,
      "domain": "luxurycigarclub.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 32520.7788740315,
      "curr_month_visits": 32520.7788740315,
      "unique_users": 14151.2131657638,
      "pages_per_visit": 14.061942534152
    },
    {
      "global_rank": 1053888,
      "category_rank": 190,
      "domain": "nsarco.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 34505.9286267889,
      "curr_month_visits": 34505.9286267889,
      "unique_users": 21440.5010565823,
      "pages_per_visit": 1.84581097376574
    },
    {
      "global_rank": 416746,
      "category_rank": 190,
      "domain": "seemagujral.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 103860.184657424,
      "curr_month_visits": 103860.184657424,
      "unique_users": 36346.0438283436,
      "pages_per_visit": 2.713695023194
    },
    {
      "global_rank": 491746,
      "category_rank": 190,
      "domain": "kensfish.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 46422.5915449501,
      "curr_month_visits": 46422.5915449501,
      "unique_users": 16388.0907745699,
      "pages_per_visit": 7.29233213480141
    },
    {
      "global_rank": 165676,
      "category_rank": 191,
      "domain": "superzoo.sk",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 180864.149353401,
      "curr_month_visits": 180864.149353401,
      "unique_users": 95315.7715258785,
      "pages_per_visit": 5.56563821445936
    },
    {
      "global_rank": 44711,
      "category_rank": 191,
      "domain": "avsee.me",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 1909187.1647387,
      "curr_month_visits": 1909187.1647387,
      "unique_users": 579440.0028824,
      "pages_per_visit": 2.66396235635134
    },
    {
      "global_rank": 1061856,
      "category_rank": 191,
      "domain": "thefeatherbrain.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 41274.3593328847,
      "curr_month_visits": 41274.3593328847,
      "unique_users": 20087.7858434699,
      "pages_per_visit": 1.51982357401042
    },
    {
      "global_rank": 492682,
      "category_rank": 191,
      "domain": "aquaforum.ua",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 58917.3134071853,
      "curr_month_visits": 58917.3134071853,
      "unique_users": 26867.0026571979,
      "pages_per_visit": 3.33425384778214
    },
    {
      "global_rank": 345004,
      "category_rank": 192,
      "domain": "cupojoes.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 107237.558627168,
      "curr_month_visits": 107237.558627168,
      "unique_users": 42937.4925062498,
      "pages_per_visit": 5.64720565014982
    },
    {
      "global_rank": 276232,
      "category_rank": 192,
      "domain": "equirodi.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 135572.167148406,
      "curr_month_visits": 135572.167148406,
      "unique_users": 57550.0191602045,
      "pages_per_visit": 6.37306798146648
    },
    {
      "global_rank": 417674,
      "category_rank": 192,
      "domain": "cordy.jp",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 67510.8591091242,
      "curr_month_visits": 67510.8591091242,
      "unique_users": 42417.1284340698,
      "pages_per_visit": 3.47564380893521
    },
    {
      "global_rank": 346006,
      "category_rank": 193,
      "domain": "chillhabit.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 99504.1155610842,
      "curr_month_visits": 99504.1155610842,
      "unique_users": 60882.0553808434,
      "pages_per_visit": 2.03548152576436
    },
    {
      "global_rank": 495490,
      "category_rank": 193,
      "domain": "digiticket.vn",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 104030.669391152,
      "curr_month_visits": 104030.669391152,
      "unique_users": 69149.4920391907,
      "pages_per_visit": 1.24267412909744
    },
    {
      "global_rank": 419536,
      "category_rank": 193,
      "domain": "annsbridalbargains.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 125200.64792814,
      "curr_month_visits": 125200.64792814,
      "unique_users": 65433.7010051009,
      "pages_per_visit": 3.79442311588985
    },
    {
      "global_rank": 1071753,
      "category_rank": 193,
      "domain": "dr-pets.ru",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 31843.9882555874,
      "curr_month_visits": 31843.9882555874,
      "unique_users": 18444.8667397499,
      "pages_per_visit": 1.26055788263956
    },
    {
      "global_rank": 749073,
      "category_rank": 193,
      "domain": "sovon.nl",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 34691.3640775848,
      "curr_month_visits": 34691.3640775848,
      "unique_users": 13802.7755010423,
      "pages_per_visit": 4.13939528208764
    },
    {
      "global_rank": 548874,
      "category_rank": 193,
      "domain": "pecararabrecho.com.br",
      "category": "Pets_and_Animals",
      "avg_month_visits": 59293.1714367862,
      "curr_month_visits": 59293.1714367862,
      "unique_users": 20307.1534038008,
      "pages_per_visit": 12.0792791688894
    },
    {
      "global_rank": 750724,
      "category_rank": 194,
      "domain": "uitvaartenderas.be",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 48302.1757797749,
      "curr_month_visits": 48302.1757797749,
      "unique_users": 18163.9231966346,
      "pages_per_visit": 1.4535301470169
    },
    {
      "global_rank": 110557,
      "category_rank": 194,
      "domain": "zooplus.at",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 309155.734026648,
      "curr_month_visits": 309155.734026648,
      "unique_users": 174742.894245587,
      "pages_per_visit": 6.13788789189855
    },
    {
      "global_rank": 1075227,
      "category_rank": 194,
      "domain": "thattogspot.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 31109.0073858741,
      "curr_month_visits": 31109.0073858741,
      "unique_users": 14741.5109424064,
      "pages_per_visit": 2.19463462522952
    },
    {
      "global_rank": 419612,
      "category_rank": 194,
      "domain": "elegantweddinginvites.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 100380.478651222,
      "curr_month_visits": 100380.478651222,
      "unique_users": 61717.5442895626,
      "pages_per_visit": 2.31247359840167
    },
    {
      "global_rank": 353426,
      "category_rank": 195,
      "domain": "coronacigar.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 99980.0761489997,
      "curr_month_visits": 99980.0761489997,
      "unique_users": 51281.438798227,
      "pages_per_visit": 3.10310224553672
    },
    {
      "global_rank": 420293,
      "category_rank": 195,
      "domain": "lilyandlime.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 85245.7603841788,
      "curr_month_visits": 85245.7603841788,
      "unique_users": 36494.9660240912,
      "pages_per_visit": 6.26317732885537
    },
    {
      "global_rank": 753769,
      "category_rank": 195,
      "domain": "birda.org",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 42349.7902442778,
      "curr_month_visits": 42349.7902442778,
      "unique_users": 22827.5289830219,
      "pages_per_visit": 1.84889508923351
    },
    {
      "global_rank": 112288,
      "category_rank": 196,
      "domain": "mypethealth.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 400113.192433606,
      "curr_month_visits": 400113.192433606,
      "unique_users": 235010.211011895,
      "pages_per_visit": 3.87258734439505
    },
    {
      "global_rank": 758658,
      "category_rank": 196,
      "domain": "speciesplus.net",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 34546.2211717298,
      "curr_month_visits": 34546.2211717298,
      "unique_users": 14753.1740887827,
      "pages_per_visit": 3.43946040584157
    },
    {
      "global_rank": 281578,
      "category_rank": 196,
      "domain": "babydiscuss.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 124987.750949556,
      "curr_month_visits": 124987.750949556,
      "unique_users": 55446.1260127184,
      "pages_per_visit": 5.70656777885034
    },
    {
      "global_rank": 1089070,
      "category_rank": 196,
      "domain": "valuepetsupplies.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 26791.1233428947,
      "curr_month_visits": 26791.1233428947,
      "unique_users": 16224.0507308868,
      "pages_per_visit": 3.722708348103
    },
    {
      "global_rank": 497798,
      "category_rank": 196,
      "domain": "aquarium.bg",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 39472.4385269206,
      "curr_month_visits": 39472.4385269206,
      "unique_users": 15193.1979486488,
      "pages_per_visit": 6.08585306636004
    },
    {
      "global_rank": 354261,
      "category_rank": 196,
      "domain": "tabakland.de",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 99697.192505358,
      "curr_month_visits": 99697.192505358,
      "unique_users": 63037.0271837579,
      "pages_per_visit": 4.11757842940425
    },
    {
      "global_rank": 429221,
      "category_rank": 197,
      "domain": "lovevsdesign.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 68673.9544826964,
      "curr_month_visits": 68673.9544826964,
      "unique_users": 37930.9110683403,
      "pages_per_visit": 4.97088851995502
    },
    {
      "global_rank": 498132,
      "category_rank": 197,
      "domain": "netizen-voice.blog.jp",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 61719.9574377702,
      "curr_month_visits": 61719.9574377702,
      "unique_users": 35371.6539478577,
      "pages_per_visit": 1.69334579692909
    },
    {
      "global_rank": 1090112,
      "category_rank": 197,
      "domain": "dogs4rescue.co.uk",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 21690.4590677397,
      "curr_month_visits": 21690.4590677397,
      "unique_users": 10452.7261180386,
      "pages_per_visit": 2.15313490620029
    },
    {
      "global_rank": 112752,
      "category_rank": 198,
      "domain": "ultrapremiumdirect.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 424404.15733981,
      "curr_month_visits": 424404.15733981,
      "unique_users": 244709.529679977,
      "pages_per_visit": 3.20388650969504
    },
    {
      "global_rank": 361613,
      "category_rank": 198,
      "domain": "zigarre.de",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 64755.6577523137,
      "curr_month_visits": 64755.6577523137,
      "unique_users": 39888.1426004855,
      "pages_per_visit": 5.00673526698695
    },
    {
      "global_rank": 1091901,
      "category_rank": 198,
      "domain": "petnolza.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 23679.5400563271,
      "curr_month_visits": 23679.5400563271,
      "unique_users": 13739.0455577221,
      "pages_per_visit": 1.49277395726665
    },
    {
      "global_rank": 431778,
      "category_rank": 198,
      "domain": "chiavarisales.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 65215.6250241575,
      "curr_month_visits": 65215.6250241575,
      "unique_users": 26511.6159628448,
      "pages_per_visit": 3.45266093287888
    },
    {
      "global_rank": 286050,
      "category_rank": 198,
      "domain": "redpostequestrian.co.uk",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 111893.853065986,
      "curr_month_visits": 111893.853065986,
      "unique_users": 59026.5293653349,
      "pages_per_visit": 3.33933383813956
    },
    {
      "global_rank": 761119,
      "category_rank": 198,
      "domain": "oiseaux-birds.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 50452.3399450591,
      "curr_month_visits": 50452.3399450591,
      "unique_users": 27066.6510617715,
      "pages_per_visit": 1.5107884088512
    },
    {
      "global_rank": 363676,
      "category_rank": 199,
      "domain": "e-garette.fr",
      "category": "Pets_and_Animals",
      "avg_month_visits": 65611.6270065666,
      "curr_month_visits": 65611.6270065666,
      "unique_users": 36824.4062825404,
      "pages_per_visit": 7.66481997489519
    },
    {
      "global_rank": 761382,
      "category_rank": 199,
      "domain": "picturebirdai.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 33300.6335165729,
      "curr_month_visits": 33300.6335165729,
      "unique_users": 17037.7205329622,
      "pages_per_visit": 2.26421830602713
    },
    {
      "global_rank": 502579,
      "category_rank": 199,
      "domain": "newlands.ie",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 55926.2429124128,
      "curr_month_visits": 55926.2429124128,
      "unique_users": 24489.2405499186,
      "pages_per_visit": 3.77619633278464
    },
    {
      "global_rank": 1092198,
      "category_rank": 199,
      "domain": "milefour.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 28770.6370334854,
      "curr_month_visits": 28770.6370334854,
      "unique_users": 15558.9562781822,
      "pages_per_visit": 1.65114742106253
    },
    {
      "global_rank": 286205,
      "category_rank": 199,
      "domain": "ohlala-sellerie.com",
      "category": "Pets_and_Animals/Pets",
      "avg_month_visits": 72289.0017915744,
      "curr_month_visits": 72289.0017915744,
      "unique_users": 31418.3103807068,
      "pages_per_visit": 5.764774673585
    },
    {
      "global_rank": 431928,
      "category_rank": 199,
      "domain": "bethandbrianqipao.com",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 54924.8420908339,
      "curr_month_visits": 54924.8420908339,
      "unique_users": 31567.4049347615,
      "pages_per_visit": 5.119072624159
    },
    {
      "global_rank": 433020,
      "category_rank": 200,
      "domain": "luvsolaflowers.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 36979.3303993812,
      "curr_month_visits": 36979.3303993812,
      "unique_users": 14913.6326618585,
      "pages_per_visit": 7.35318308989253
    },
    {
      "global_rank": 286455,
      "category_rank": 200,
      "domain": "stall-frei.de",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 126187.080153021,
      "curr_month_visits": 126187.080153021,
      "unique_users": 63501.6438667385,
      "pages_per_visit": 4.49845879326622
    },
    {
      "global_rank": 1099092,
      "category_rank": 200,
      "domain": "meteo-toulouse.org",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 47339.8217608664,
      "curr_month_visits": 47339.8217608664,
      "unique_users": 12347.2947116561,
      "pages_per_visit": 1.58713020222831
    },
    {
      "global_rank": 555481,
      "category_rank": 200,
      "domain": "mothermag.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 56722.2989763107,
      "curr_month_visits": 56722.2989763107,
      "unique_users": 33937.8703974422,
      "pages_per_visit": 1.62872916071206
    },
    {
      "global_rank": 175996,
      "category_rank": 200,
      "domain": "wallstreetviral.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 501438.842756078,
      "curr_month_visits": 501438.842756078,
      "unique_users": 339598.117314447,
      "pages_per_visit": 2.00832139636534
    },
    {
      "global_rank": 364561,
      "category_rank": 200,
      "domain": "vaporbeast.com",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 90057.9171508501,
      "curr_month_visits": 90057.9171508501,
      "unique_users": 43825.5041745298,
      "pages_per_visit": 3.9384773753253
    },
    {
      "global_rank": 113790,
      "category_rank": 201,
      "domain": "openfarmpet.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 302466.005561813,
      "curr_month_visits": 302466.005561813,
      "unique_users": 174505.151913535,
      "pages_per_visit": 4.54256830447084
    },
    {
      "global_rank": 771603,
      "category_rank": 201,
      "domain": "grcboard.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 25359.8900626781,
      "curr_month_visits": 25359.8900626781,
      "unique_users": 6295.183750436,
      "pages_per_visit": 16.9586023442937
    },
    {
      "global_rank": 1101972,
      "category_rank": 201,
      "domain": "marlin.hu",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 25457.7367118163,
      "curr_month_visits": 25457.7367118163,
      "unique_users": 11793.7170797251,
      "pages_per_visit": 4.33048274277379
    },
    {
      "global_rank": 287586,
      "category_rank": 201,
      "domain": "maisonfleursdebach.fr",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 132769.162897878,
      "curr_month_visits": 132769.162897878,
      "unique_users": 73224.3920740556,
      "pages_per_visit": 2.12060437219299
    },
    {
      "global_rank": 433836,
      "category_rank": 201,
      "domain": "client.photos",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 86293.6503606368,
      "curr_month_visits": 86293.6503606368,
      "unique_users": 35646.7588895178,
      "pages_per_visit": 2.2656353296737
    },
    {
      "global_rank": 772222,
      "category_rank": 202,
      "domain": "kafeskuslari.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 39463.8572497515,
      "curr_month_visits": 39463.8572497515,
      "unique_users": 24770.9086807928,
      "pages_per_visit": 2.28845389429494
    },
    {
      "global_rank": 289945,
      "category_rank": 202,
      "domain": "rbsellars.com.au",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 106091.692684246,
      "curr_month_visits": 106091.692684246,
      "unique_users": 32727.0515591145,
      "pages_per_visit": 3.84220819540545
    },
    {
      "global_rank": 1104061,
      "category_rank": 202,
      "domain": "vgt.at",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 37630.7785177005,
      "curr_month_visits": 37630.7785177005,
      "unique_users": 20536.7183721995,
      "pages_per_visit": 2.4803246724371
    },
    {
      "global_rank": 435346,
      "category_rank": 202,
      "domain": "lense.app",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 104470.807699825,
      "curr_month_visits": 104470.807699825,
      "unique_users": 39224.7467663117,
      "pages_per_visit": 3.37004322216374
    },
    {
      "global_rank": 1116332,
      "category_rank": 203,
      "domain": "medpets.at",
      "category": "Pets_and_Animals/Horses",
      "avg_month_visits": 21274.8459070042,
      "curr_month_visits": 21274.8459070042,
      "unique_users": 10975.8922196258,
      "pages_per_visit": 3.09114919066849
    },
    {
      "global_rank": 440761,
      "category_rank": 203,
      "domain": "bridal-esthe.com",
      "category": "Pets_and_Animals",
      "avg_month_visits": 136628.670275725,
      "curr_month_visits": 136628.670275725,
      "unique_users": 89613.409194327,
      "pages_per_visit": 1.36298050913233
    },
    {
      "global_rank": 365180,
      "category_rank": 203,
      "domain": "kennysfit.com",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 102052.870833999,
      "curr_month_visits": 102052.870833999,
      "unique_users": 33654.1360307939,
      "pages_per_visit": 3.85945125208701
    },
    {
      "global_rank": 504673,
      "category_rank": 203,
      "domain": "premiumaquatics.com",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 56123.3427143546,
      "curr_month_visits": 56123.3427143546,
      "unique_users": 28039.8851638459,
      "pages_per_visit": 3.02273692381283
    },
    {
      "global_rank": 773630,
      "category_rank": 203,
      "domain": "softbillsforsale.com",
      "category": "Pets_and_Animals/Fish_and_Aquaria",
      "avg_month_visits": 26301.7568886386,
      "curr_month_visits": 26301.7568886386,
      "unique_users": 17042.9136697521,
      "pages_per_visit": 2.59656484430985
    },
    {
      "global_rank": 568729,
      "category_rank": 204,
      "domain": "usevillagriffe.com.br",
      "category": "Pets_and_Animals",
      "avg_month_visits": 38364.8163623247,
      "curr_month_visits": 38364.8163623247,
      "unique_users": 18986.0705728717,
      "pages_per_visit": 3.41068443617202
    },
    {
      "global_rank": 367295,
      "category_rank": 204,
      "domain": "smoking.fr",
      "category": "Pets_and_Animals/Animals",
      "avg_month_visits": 100751.924573908,
      "curr_month_visits": 100751.924573908,
      "unique_users": 62129.8042233947,
      "pages_per_visit": 4.60985746117905
    },
    {
      "global_rank": 774945,
      "category_rank": 204,
      "domain": "columba.ro",
      "category": "Pets_and_Animals/Birds",
      "avg_month_visits": 89445.0498123546,
      "curr_month_visits": 89445.0498123546,
      "unique_users": 19719.3543574595,
      "pages_per_visit": 5.74946046426073
    },
    {
      "global_rank": 157805,
      "category_rank": 204,
      "domain": "omisenomikata.jp",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 326306.881508917,
      "curr_month_visits": 326306.881508917,
      "unique_users": 244532.277185389,
      "pages_per_visit": 2.66935204098596
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
                <td className="px-4 py-2 border-t">{index + 1}</td>
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


