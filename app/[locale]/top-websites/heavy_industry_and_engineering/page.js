
import {Top_Website_Categories} from '@/lib/top_websites';
export const runtime = 'edge';
export const metadata = {
  title: 'Top heavy industry and engineering Websites Ranking in the World, 2025',
  description: 'The top 1000 most visited entertainment websites in the World by Ahrefs organic search traffic estimates. Updated monthly. 2025',
  keywords: ['Top Websites', 'Top Websites Ranking','heavy industry and engineering'],
  authors: [
    { name: 'hackX', url: 'https://www.xucongyong.com' }
  ]
}


export default function TopWebsite() {

  const global_rank_all = [
    {
      "global_rank": 2857,
      "category_rank": 1,
      "domain": "nonghyup.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 13848142.2771001,
      "curr_month_visits": 13848142.2771001,
      "unique_users": 4821871.76438395,
      "pages_per_visit": 7.98353441925257
    },
    {
      "global_rank": 3197,
      "category_rank": 1,
      "domain": "edf.fr",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 12846916.1007674,
      "curr_month_visits": 12846916.1007674,
      "unique_users": 4994259.27251669,
      "pages_per_visit": 5.63667119361676
    },
    {
      "global_rank": 4259,
      "category_rank": 1,
      "domain": "archdaily.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 7736781.64547169,
      "curr_month_visits": 7736781.64547169,
      "unique_users": 2839237.3599038,
      "pages_per_visit": 13.5821559874108
    },
    {
      "global_rank": 59852,
      "category_rank": 1,
      "domain": "tnb.com.my",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 908515.730639788,
      "curr_month_visits": 908515.730639788,
      "unique_users": 368869.791310685,
      "pages_per_visit": 4.27357818425799
    },
    {
      "global_rank": 20639,
      "category_rank": 1,
      "domain": "airbus.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 2495738.49040201,
      "curr_month_visits": 2495738.49040201,
      "unique_users": 1094461.38263602,
      "pages_per_visit": 6.32025029877634
    },
    {
      "global_rank": 10845,
      "category_rank": 1,
      "domain": "atlbattery.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 2357398.8230751,
      "curr_month_visits": 2357398.8230751,
      "unique_users": 794659.279556731,
      "pages_per_visit": 22.9395598194268
    },
    {
      "global_rank": 3301,
      "category_rank": 1,
      "domain": "andpad.jp",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 11027592.2292396,
      "curr_month_visits": 11027592.2292396,
      "unique_users": 665518.151077468,
      "pages_per_visit": 17.3717699431185
    },
    {
      "global_rank": 6361,
      "category_rank": 1,
      "domain": "mcmaster.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 7543063.40699877,
      "curr_month_visits": 7543063.40699877,
      "unique_users": 2369447.25905866,
      "pages_per_visit": 7.02523111669729
    },
    {
      "global_rank": 21320,
      "category_rank": 1,
      "domain": "gpb.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 2717206.06377025,
      "curr_month_visits": 2717206.06377025,
      "unique_users": 1064286.37025194,
      "pages_per_visit": 4.05676913694391
    },
    {
      "global_rank": 20495,
      "category_rank": 2,
      "domain": "abb.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 2998518.96193034,
      "curr_month_visits": 2998518.96193034,
      "unique_users": 1351887.19315502,
      "pages_per_visit": 4.00505308728588
    },
    {
      "global_rank": 5512,
      "category_rank": 2,
      "domain": "skyscrapercity.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 9805298.43867313,
      "curr_month_visits": 9805298.43867313,
      "unique_users": 1496630.76726257,
      "pages_per_visit": 7.54871109489052
    },
    {
      "global_rank": 51885,
      "category_rank": 2,
      "domain": "thalesgroup.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 1066537.42644221,
      "curr_month_visits": 1066537.42644221,
      "unique_users": 580947.955296059,
      "pages_per_visit": 3.30242068517047
    },
    {
      "global_rank": 11735,
      "category_rank": 2,
      "domain": "xsion-service.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 8078219.46662212,
      "curr_month_visits": 8078219.46662212,
      "unique_users": 339636.458290636,
      "pages_per_visit": 2.82368473364402
    },
    {
      "global_rank": 3736,
      "category_rank": 2,
      "domain": "indianoil.in",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 5561576.78098119,
      "curr_month_visits": 5561576.78098119,
      "unique_users": 1885230.40894723,
      "pages_per_visit": 35.3436860360116
    },
    {
      "global_rank": 3486,
      "category_rank": 2,
      "domain": "procore.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 13243526.3222542,
      "curr_month_visits": 13243526.3222542,
      "unique_users": 1663852.43302306,
      "pages_per_visit": 11.8695757224338
    },
    {
      "global_rank": 252037,
      "category_rank": 2,
      "domain": "environmental-expert.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 188258.584687847,
      "curr_month_visits": 188258.584687847,
      "unique_users": 105604.3818353,
      "pages_per_visit": 1.8505286961517
    },
    {
      "global_rank": 30534,
      "category_rank": 2,
      "domain": "b2b-center.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 1645790.75454442,
      "curr_month_visits": 1645790.75454442,
      "unique_users": 278203.995613403,
      "pages_per_visit": 9.36566072450526
    },
    {
      "global_rank": 17293,
      "category_rank": 2,
      "domain": "orange-book.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 2931860.08822906,
      "curr_month_visits": 2931860.08822906,
      "unique_users": 818914.68602143,
      "pages_per_visit": 7.15750100053295
    },
    {
      "global_rank": 32535,
      "category_rank": 3,
      "domain": "architecturaldigest.in",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 2176155.257702,
      "curr_month_visits": 2176155.257702,
      "unique_users": 1448554.06613968,
      "pages_per_visit": 1.67350057225468
    },
    {
      "global_rank": 5467,
      "category_rank": 3,
      "domain": "qcc.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 9758316.37880002,
      "curr_month_visits": 9758316.37880002,
      "unique_users": 4048254.76987247,
      "pages_per_visit": 4.65363164307458
    },
    {
      "global_rank": 37609,
      "category_rank": 3,
      "domain": "nipponsteel.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 1178509.58914272,
      "curr_month_visits": 1178509.58914272,
      "unique_users": 549674.015877682,
      "pages_per_visit": 7.53289745559793
    },
    {
      "global_rank": 20711,
      "category_rank": 3,
      "domain": "as-1.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 2736584.59601761,
      "curr_month_visits": 2736584.59601761,
      "unique_users": 1385743.69448105,
      "pages_per_visit": 4.85147722213336
    },
    {
      "global_rank": 24023,
      "category_rank": 3,
      "domain": "regione.toscana.it",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 2617899.11309666,
      "curr_month_visits": 2617899.11309666,
      "unique_users": 1093361.82707032,
      "pages_per_visit": 5.12350689308255
    },
    {
      "global_rank": 4831,
      "category_rank": 3,
      "domain": "mosenergosbyt.ru",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 8236359.02099766,
      "curr_month_visits": 8236359.02099766,
      "unique_users": 2924274.72492766,
      "pages_per_visit": 8.14189545297028
    },
    {
      "global_rank": 54424,
      "category_rank": 3,
      "domain": "baesystems.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 1105280.37537986,
      "curr_month_visits": 1105280.37537986,
      "unique_users": 573762.710209087,
      "pages_per_visit": 3.58130694388185
    },
    {
      "global_rank": 21267,
      "category_rank": 3,
      "domain": "ruralking.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 2398796.86722285,
      "curr_month_visits": 2398796.86722285,
      "unique_users": 1292652.61619384,
      "pages_per_visit": 3.46292799301568
    },
    {
      "global_rank": 272256,
      "category_rank": 3,
      "domain": "tank-depot.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 139389.027745308,
      "curr_month_visits": 139389.027745308,
      "unique_users": 92602.0200260528,
      "pages_per_visit": 3.25919441702886
    },
    {
      "global_rank": 25031,
      "category_rank": 4,
      "domain": "geoportal.gov.pl",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 2428916.98295344,
      "curr_month_visits": 2428916.98295344,
      "unique_users": 911535.24421904,
      "pages_per_visit": 4.90996655673678
    },
    {
      "global_rank": 5202,
      "category_rank": 4,
      "domain": "tepco.co.jp",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 11444133.8378445,
      "curr_month_visits": 11444133.8378445,
      "unique_users": 4295807.62461605,
      "pages_per_visit": 5.10903898237159
    },
    {
      "global_rank": 35331,
      "category_rank": 4,
      "domain": "larchitetto.it",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 1375816.3728973,
      "curr_month_visits": 1375816.3728973,
      "unique_users": 705642.10800061,
      "pages_per_visit": 1.16483566449146
    },
    {
      "global_rank": 22426,
      "category_rank": 4,
      "domain": "wur.nl",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 2443674.15421211,
      "curr_month_visits": 2443674.15421211,
      "unique_users": 590663.791627834,
      "pages_per_visit": 6.3480495774553
    },
    {
      "global_rank": 364568,
      "category_rank": 4,
      "domain": "ntotank.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 122811.068755128,
      "curr_month_visits": 122811.068755128,
      "unique_users": 80640.8768947397,
      "pages_per_visit": 2.38490484207794
    },
    {
      "global_rank": 62578,
      "category_rank": 4,
      "domain": "lockheedmartin.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 1138144.00915125,
      "curr_month_visits": 1138144.00915125,
      "unique_users": 689755.713886429,
      "pages_per_visit": 2.05026463206253
    },
    {
      "global_rank": 6256,
      "category_rank": 4,
      "domain": "kensetsu-site.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 5199154.31450239,
      "curr_month_visits": 5199154.31450239,
      "unique_users": 559563.580770257,
      "pages_per_visit": 21.4340190212777
    },
    {
      "global_rank": 28472,
      "category_rank": 4,
      "domain": "ipros.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 2134673.53158547,
      "curr_month_visits": 2134673.53158547,
      "unique_users": 1393615.48670331,
      "pages_per_visit": 3.52083071671466
    },
    {
      "global_rank": 42806,
      "category_rank": 4,
      "domain": "mye2shop.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 841265.636373496,
      "curr_month_visits": 841265.636373496,
      "unique_users": 25654.0942120341,
      "pages_per_visit": 35.676610573805
    },
    {
      "global_rank": 7496,
      "category_rank": 5,
      "domain": "enel.com.br",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 6655128.47643209,
      "curr_month_visits": 6655128.47643209,
      "unique_users": 3248064.23103989,
      "pages_per_visit": 5.09714601996363
    },
    {
      "global_rank": 34186,
      "category_rank": 5,
      "domain": "sekisui.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 997209.37071142,
      "curr_month_visits": 997209.37071142,
      "unique_users": 192784.052104022,
      "pages_per_visit": 25.9749096946193
    },
    {
      "global_rank": 46556,
      "category_rank": 5,
      "domain": "gooood.cn",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 936396.187890865,
      "curr_month_visits": 936396.187890865,
      "unique_users": 226617.483367319,
      "pages_per_visit": 6.47819806694697
    },
    {
      "global_rank": 6850,
      "category_rank": 5,
      "domain": "grainger.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 9390714.63655621,
      "curr_month_visits": 9390714.63655621,
      "unique_users": 5422909.91121064,
      "pages_per_visit": 4.05943283299313
    },
    {
      "global_rank": 29186,
      "category_rank": 5,
      "domain": "nearmap.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 1231762.32069706,
      "curr_month_visits": 1231762.32069706,
      "unique_users": 209866.33994664,
      "pages_per_visit": 16.7384719335073
    },
    {
      "global_rank": 388462,
      "category_rank": 5,
      "domain": "offshore-mag.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 130734.533765746,
      "curr_month_visits": 130734.533765746,
      "unique_users": 66933.9563858426,
      "pages_per_visit": 1.70443535252278
    },
    {
      "global_rank": 22800,
      "category_rank": 5,
      "domain": "farmer.pl",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 4006634.06084316,
      "curr_month_visits": 4006634.06084316,
      "unique_users": 1400471.61713421,
      "pages_per_visit": 1.9700334721868
    },
    {
      "global_rank": 74373,
      "category_rank": 5,
      "domain": "northropgrumman.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 853004.652059505,
      "curr_month_visits": 853004.652059505,
      "unique_users": 491720.288800045,
      "pages_per_visit": 3.20546171296375
    },
    {
      "global_rank": 42943,
      "category_rank": 5,
      "domain": "rizhaosteel.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 870894.043878412,
      "curr_month_visits": 870894.043878412,
      "unique_users": 276047.579593104,
      "pages_per_visit": 8.05568771590642
    },
    {
      "global_rank": 45884,
      "category_rank": 6,
      "domain": "ulprospector.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 1066119.49222878,
      "curr_month_visits": 1066119.49222878,
      "unique_users": 449076.925515927,
      "pages_per_visit": 5.02706084781004
    },
    {
      "global_rank": 438670,
      "category_rank": 6,
      "domain": "cleanwaterstore.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 99746.443509907,
      "curr_month_visits": 99746.443509907,
      "unique_users": 60319.6491157359,
      "pages_per_visit": 2.29360860634686
    },
    {
      "global_rank": 10268,
      "category_rank": 6,
      "domain": "panasonic.biz",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 5229259.41550771,
      "curr_month_visits": 5229259.41550771,
      "unique_users": 1819695.39877073,
      "pages_per_visit": 5.52111270485196
    },
    {
      "global_rank": 23092,
      "category_rank": 6,
      "domain": "agrarheute.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 3850080.79468689,
      "curr_month_visits": 3850080.79468689,
      "unique_users": 1575274.21873417,
      "pages_per_visit": 1.64287955997348
    },
    {
      "global_rank": 50149,
      "category_rank": 6,
      "domain": "chipmaker.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 1312090.76394476,
      "curr_month_visits": 1312090.76394476,
      "unique_users": 750085.595640669,
      "pages_per_visit": 2.22166664475431
    },
    {
      "global_rank": 38800,
      "category_rank": 6,
      "domain": "regione.piemonte.it",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 1690889.09867227,
      "curr_month_visits": 1690889.09867227,
      "unique_users": 733192.646380607,
      "pages_per_visit": 3.06355294460059
    },
    {
      "global_rank": 75964,
      "category_rank": 6,
      "domain": "aircraftspruce.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 589823.926271581,
      "curr_month_visits": 589823.926271581,
      "unique_users": 207976.356404459,
      "pages_per_visit": 4.98732602150588
    },
    {
      "global_rank": 52358,
      "category_rank": 6,
      "domain": "chateauversailles.fr",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 963995.979237501,
      "curr_month_visits": 963995.979237501,
      "unique_users": 542438.297625734,
      "pages_per_visit": 5.53170780182028
    },
    {
      "global_rank": 7916,
      "category_rank": 6,
      "domain": "pge.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 6474325.59735599,
      "curr_month_visits": 6474325.59735599,
      "unique_users": 2862103.2573978,
      "pages_per_visit": 6.1543559933414
    },
    {
      "global_rank": 10862,
      "category_rank": 7,
      "domain": "deghi.it",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 5251527.80691099,
      "curr_month_visits": 5251527.80691099,
      "unique_users": 2255959.75905614,
      "pages_per_visit": 3.89470864597839
    },
    {
      "global_rank": 81010,
      "category_rank": 7,
      "domain": "pilottraining.ca",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 271589.816394515,
      "curr_month_visits": 271589.816394515,
      "unique_users": 42845.9288728267,
      "pages_per_visit": 22.635556956476
    },
    {
      "global_rank": 56576,
      "category_rank": 7,
      "domain": "arq.com.mx",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 564288.631728381,
      "curr_month_visits": 564288.631728381,
      "unique_users": 335494.044220782,
      "pages_per_visit": 8.57300915343039
    },
    {
      "global_rank": 23444,
      "category_rank": 7,
      "domain": "agroinform.hu",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 2546549.91395288,
      "curr_month_visits": 2546549.91395288,
      "unique_users": 802957.74824238,
      "pages_per_visit": 4.05414344503078
    },
    {
      "global_rank": 45453,
      "category_rank": 7,
      "domain": "geoportal2.pl",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 1416912.3505336,
      "curr_month_visits": 1416912.3505336,
      "unique_users": 318787.437187676,
      "pages_per_visit": 4.05882733386479
    },
    {
      "global_rank": 8106,
      "category_rank": 7,
      "domain": "engie.fr",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 6011144.62134681,
      "curr_month_visits": 6011144.62134681,
      "unique_users": 2963395.24927678,
      "pages_per_visit": 4.95388697201969
    },
    {
      "global_rank": 63076,
      "category_rank": 7,
      "domain": "basf.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 1045041.56061508,
      "curr_month_visits": 1045041.56061508,
      "unique_users": 579723.256295568,
      "pages_per_visit": 2.61989034134681
    },
    {
      "global_rank": 52095,
      "category_rank": 7,
      "domain": "pgg.pl",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 862630.579990203,
      "curr_month_visits": 862630.579990203,
      "unique_users": 187401.029915577,
      "pages_per_visit": 4.02156196060681
    },
    {
      "global_rank": 567259,
      "category_rank": 7,
      "domain": "dombor.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 79433.2920205629,
      "curr_month_visits": 79433.2920205629,
      "unique_users": 41999.7567041804,
      "pages_per_visit": 1.4746777882553
    },
    {
      "global_rank": 57350,
      "category_rank": 8,
      "domain": "hrp.org.uk",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 947092.541301803,
      "curr_month_visits": 947092.541301803,
      "unique_users": 565663.464356353,
      "pages_per_visit": 3.23883907522907
    },
    {
      "global_rank": 56250,
      "category_rank": 8,
      "domain": "luckygunner.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 897228.513118227,
      "curr_month_visits": 897228.513118227,
      "unique_users": 491372.718045531,
      "pages_per_visit": 3.64256178774956
    },
    {
      "global_rank": 82784,
      "category_rank": 8,
      "domain": "bravocompanyusa.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 516420.533634164,
      "curr_month_visits": 516420.533634164,
      "unique_users": 243377.678513813,
      "pages_per_visit": 3.82068088312544
    },
    {
      "global_rank": 25228,
      "category_rank": 8,
      "domain": "landwirt.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1585102.63228128,
      "curr_month_visits": 1585102.63228128,
      "unique_users": 496262.983138362,
      "pages_per_visit": 8.56207775032202
    },
    {
      "global_rank": 52121,
      "category_rank": 8,
      "domain": "hoffmann-group.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 693700.272468642,
      "curr_month_visits": 693700.272468642,
      "unique_users": 302333.479452593,
      "pages_per_visit": 8.02815830083772
    },
    {
      "global_rank": 567874,
      "category_rank": 8,
      "domain": "netsolwater.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 75235.318285881,
      "curr_month_visits": 75235.318285881,
      "unique_users": 42061.2422546098,
      "pages_per_visit": 1.52900034541873
    },
    {
      "global_rank": 8856,
      "category_rank": 8,
      "domain": "cfe.mx",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 6707153.9758243,
      "curr_month_visits": 6707153.9758243,
      "unique_users": 2509385.25276807,
      "pages_per_visit": 4.56967211488404
    },
    {
      "global_rank": 11171,
      "category_rank": 8,
      "domain": "buildee.jp",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 3293563.05013723,
      "curr_month_visits": 3293563.05013723,
      "unique_users": 338174.110361225,
      "pages_per_visit": 16.2053986007143
    },
    {
      "global_rank": 63512,
      "category_rank": 8,
      "domain": "hyponex.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 1353438.29130145,
      "curr_month_visits": 1353438.29130145,
      "unique_users": 967937.275741756,
      "pages_per_visit": 1.34610204651625
    },
    {
      "global_rank": 68559,
      "category_rank": 9,
      "domain": "asahi-kasei.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 878721.46137901,
      "curr_month_visits": 878721.46137901,
      "unique_users": 582826.83954662,
      "pages_per_visit": 2.64347840769733
    },
    {
      "global_rank": 8931,
      "category_rank": 9,
      "domain": "cpfl.com.br",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 6729327.72142662,
      "curr_month_visits": 6729327.72142662,
      "unique_users": 2905914.98782557,
      "pages_per_visit": 4.27858953647451
    },
    {
      "global_rank": 62654,
      "category_rank": 9,
      "domain": "suncalc.org",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 396991.089549385,
      "curr_month_visits": 396991.089549385,
      "unique_users": 179300.866912225,
      "pages_per_visit": 16.6980057574719
    },
    {
      "global_rank": 12943,
      "category_rank": 9,
      "domain": "buildertrend.net",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 3491741.76575727,
      "curr_month_visits": 3491741.76575727,
      "unique_users": 477036.295251449,
      "pages_per_visit": 12.2844940288126
    },
    {
      "global_rank": 58834,
      "category_rank": 9,
      "domain": "haascnc.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 849328.683276328,
      "curr_month_visits": 849328.683276328,
      "unique_users": 339703.800465081,
      "pages_per_visit": 4.6804087835128
    },
    {
      "global_rank": 586303,
      "category_rank": 9,
      "domain": "septicsolutions.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 71409.8372697875,
      "curr_month_visits": 71409.8372697875,
      "unique_users": 37252.5315589003,
      "pages_per_visit": 2.82726694457129
    },
    {
      "global_rank": 86088,
      "category_rank": 9,
      "domain": "rosatom.ru",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 579063.645882461,
      "curr_month_visits": 579063.645882461,
      "unique_users": 216563.571471363,
      "pages_per_visit": 4.70044235686936
    },
    {
      "global_rank": 35105,
      "category_rank": 9,
      "domain": "aurena.at",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1070139.72084366,
      "curr_month_visits": 1070139.72084366,
      "unique_users": 193828.766018149,
      "pages_per_visit": 11.5704977625885
    },
    {
      "global_rank": 62280,
      "category_rank": 9,
      "domain": "vortexoptics.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 780852.446430781,
      "curr_month_visits": 780852.446430781,
      "unique_users": 451106.023356372,
      "pages_per_visit": 3.906072513393
    },
    {
      "global_rank": 600984,
      "category_rank": 10,
      "domain": "efficiencyvermont.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 62873.3684361423,
      "curr_month_visits": 62873.3684361423,
      "unique_users": 32267.0042096616,
      "pages_per_visit": 2.30229618948851
    },
    {
      "global_rank": 35111,
      "category_rank": 10,
      "domain": "tygodnik-rolniczy.pl",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1510917.50147218,
      "curr_month_visits": 1510917.50147218,
      "unique_users": 554916.009098973,
      "pages_per_visit": 3.37267550920515
    },
    {
      "global_rank": 100310,
      "category_rank": 10,
      "domain": "bombardier.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 480622.283721084,
      "curr_month_visits": 480622.283721084,
      "unique_users": 202468.688139462,
      "pages_per_visit": 4.70324109545605
    },
    {
      "global_rank": 64177,
      "category_rank": 10,
      "domain": "atlascopco.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 950064.137317179,
      "curr_month_visits": 950064.137317179,
      "unique_users": 481471.206942077,
      "pages_per_visit": 2.8808017288691
    },
    {
      "global_rank": 63264,
      "category_rank": 10,
      "domain": "ad-italia.it",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 1286264.80035629,
      "curr_month_visits": 1286264.80035629,
      "unique_users": 890591.496351084,
      "pages_per_visit": 1.52736798859819
    },
    {
      "global_rank": 59870,
      "category_rank": 10,
      "domain": "tatasteel.co.in",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 752552.581715289,
      "curr_month_visits": 752552.581715289,
      "unique_users": 139254.80849607,
      "pages_per_visit": 7.7525679241118
    },
    {
      "global_rank": 13399,
      "category_rank": 10,
      "domain": "cat.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 4011509.20289192,
      "curr_month_visits": 4011509.20289192,
      "unique_users": 1680066.75356767,
      "pages_per_visit": 5.78648193459604
    },
    {
      "global_rank": 73675,
      "category_rank": 10,
      "domain": "jotun.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 686619.084750248,
      "curr_month_visits": 686619.084750248,
      "unique_users": 327293.884264765,
      "pages_per_visit": 3.52285138208488
    },
    {
      "global_rank": 9036,
      "category_rank": 10,
      "domain": "tokyo-gas.co.jp",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 6096319.06795888,
      "curr_month_visits": 6096319.06795888,
      "unique_users": 3515663.14076158,
      "pages_per_visit": 4.42516500277394
    },
    {
      "global_rank": 64653,
      "category_rank": 11,
      "domain": "jpdata.net",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 460569.984580752,
      "curr_month_visits": 460569.984580752,
      "unique_users": 155816.305296808,
      "pages_per_visit": 6.20727537178251
    },
    {
      "global_rank": 75254,
      "category_rank": 11,
      "domain": "guidechem.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 667037.20859869,
      "curr_month_visits": 667037.20859869,
      "unique_users": 406481.382158846,
      "pages_per_visit": 4.9001422393718
    },
    {
      "global_rank": 13495,
      "category_rank": 11,
      "domain": "inchcalculator.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 6588072.56662885,
      "curr_month_visits": 6588072.56662885,
      "unique_users": 4646512.29877156,
      "pages_per_visit": 1.70147464699111
    },
    {
      "global_rank": 9887,
      "category_rank": 11,
      "domain": "kepco.jp",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 5406876.35855709,
      "curr_month_visits": 5406876.35855709,
      "unique_users": 1282849.37489014,
      "pages_per_visit": 5.41624067457509
    },
    {
      "global_rank": 108209,
      "category_rank": 11,
      "domain": "paluba.media",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 517787.939273316,
      "curr_month_visits": 517787.939273316,
      "unique_users": 270355.585771393,
      "pages_per_visit": 1.46118515036914
    },
    {
      "global_rank": 60116,
      "category_rank": 11,
      "domain": "practicalmachinist.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 1162160.52706685,
      "curr_month_visits": 1162160.52706685,
      "unique_users": 654852.179273102,
      "pages_per_visit": 2.15093403765443
    },
    {
      "global_rank": 623010,
      "category_rank": 11,
      "domain": "chimet.co.uk",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 63987.5458401748,
      "curr_month_visits": 63987.5458401748,
      "unique_users": 17456.4199699697,
      "pages_per_visit": 4.31857649048268
    },
    {
      "global_rank": 68600,
      "category_rank": 11,
      "domain": "archello.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 657516.142857879,
      "curr_month_visits": 657516.142857879,
      "unique_users": 350582.509234314,
      "pages_per_visit": 5.35492534568828
    },
    {
      "global_rank": 35335,
      "category_rank": 11,
      "domain": "embrapa.br",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1805741.35432792,
      "curr_month_visits": 1805741.35432792,
      "unique_users": 932233.942059371,
      "pages_per_visit": 3.25403991970794
    },
    {
      "global_rank": 640604,
      "category_rank": 12,
      "domain": "rcworst.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 60534.7152313668,
      "curr_month_visits": 60534.7152313668,
      "unique_users": 36014.0811036424,
      "pages_per_visit": 2.16877650423069
    },
    {
      "global_rank": 77983,
      "category_rank": 12,
      "domain": "canadiangunnutz.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 455605.270096064,
      "curr_month_visits": 455605.270096064,
      "unique_users": 74764.759107203,
      "pages_per_visit": 10.8923211843017
    },
    {
      "global_rank": 61577,
      "category_rank": 12,
      "domain": "etpgpb.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 865929.937653053,
      "curr_month_visits": 865929.937653053,
      "unique_users": 269697.407955176,
      "pages_per_visit": 4.74076618995666
    },
    {
      "global_rank": 14129,
      "category_rank": 12,
      "domain": "milwaukeetool.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 3637130.4420555,
      "curr_month_visits": 3637130.4420555,
      "unique_users": 2072649.39982002,
      "pages_per_visit": 4.01144339666807
    },
    {
      "global_rank": 36299,
      "category_rank": 12,
      "domain": "kramp.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1366262.31007041,
      "curr_month_visits": 1366262.31007041,
      "unique_users": 281346.727820505,
      "pages_per_visit": 8.04071074435925
    },
    {
      "global_rank": 70119,
      "category_rank": 12,
      "domain": "skyscraperpage.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 653510.764837353,
      "curr_month_visits": 653510.764837353,
      "unique_users": 124614.634669609,
      "pages_per_visit": 6.54450988388098
    },
    {
      "global_rank": 10064,
      "category_rank": 12,
      "domain": "enel.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 7198574.44836146,
      "curr_month_visits": 7198574.44836146,
      "unique_users": 3651037.23362964,
      "pages_per_visit": 2.65785406954834
    },
    {
      "global_rank": 112074,
      "category_rank": 12,
      "domain": "leonardo.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 412525.514034214,
      "curr_month_visits": 412525.514034214,
      "unique_users": 204043.266855715,
      "pages_per_visit": 2.59738083905071
    },
    {
      "global_rank": 79280,
      "category_rank": 12,
      "domain": "whmall.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 331655.994288589,
      "curr_month_visits": 331655.994288589,
      "unique_users": 98199.5977293896,
      "pages_per_visit": 9.87651922590249
    },
    {
      "global_rank": 644956,
      "category_rank": 13,
      "domain": "aquascience.net",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 49559.5205493527,
      "curr_month_visits": 49559.5205493527,
      "unique_users": 27813.3349915922,
      "pages_per_visit": 2.65651563841662
    },
    {
      "global_rank": 10160,
      "category_rank": 13,
      "domain": "duke-energy.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 8766352.98948783,
      "curr_month_visits": 8766352.98948783,
      "unique_users": 3939992.70286519,
      "pages_per_visit": 3.96490091970655
    },
    {
      "global_rank": 14916,
      "category_rank": 13,
      "domain": "lixil.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 3141301.32856161,
      "curr_month_visits": 3141301.32856161,
      "unique_users": 512577.460771733,
      "pages_per_visit": 10.279127905081
    },
    {
      "global_rank": 81427,
      "category_rank": 13,
      "domain": "crlaurence.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 464446.685243687,
      "curr_month_visits": 464446.685243687,
      "unique_users": 142261.917952965,
      "pages_per_visit": 8.18864317023201
    },
    {
      "global_rank": 62077,
      "category_rank": 13,
      "domain": "mmc.co.jp",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 886842.404391258,
      "curr_month_visits": 886842.404391258,
      "unique_users": 362677.420466437,
      "pages_per_visit": 2.6064879217616
    },
    {
      "global_rank": 70925,
      "category_rank": 13,
      "domain": "architizer.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 808942.570534214,
      "curr_month_visits": 808942.570534214,
      "unique_users": 446063.136118302,
      "pages_per_visit": 3.31669991229906
    },
    {
      "global_rank": 84230,
      "category_rank": 13,
      "domain": "surplex.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 468957.868600831,
      "curr_month_visits": 468957.868600831,
      "unique_users": 217727.183105817,
      "pages_per_visit": 6.34962091821617
    },
    {
      "global_rank": 37703,
      "category_rank": 13,
      "domain": "landi.ch",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1667275.70602527,
      "curr_month_visits": 1667275.70602527,
      "unique_users": 833210.405329622,
      "pages_per_visit": 3.35713927586821
    },
    {
      "global_rank": 126757,
      "category_rank": 13,
      "domain": "textron.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 379934.177708202,
      "curr_month_visits": 379934.177708202,
      "unique_users": 106974.327683541,
      "pages_per_visit": 7.02665320863459
    },
    {
      "global_rank": 82444,
      "category_rank": 14,
      "domain": "specialchem.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 577456.201372704,
      "curr_month_visits": 577456.201372704,
      "unique_users": 298431.473314915,
      "pages_per_visit": 3.62306493705355
    },
    {
      "global_rank": 62941,
      "category_rank": 14,
      "domain": "parker.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 893738.989557009,
      "curr_month_visits": 893738.989557009,
      "unique_users": 457471.698148254,
      "pages_per_visit": 3.65606047238286
    },
    {
      "global_rank": 132893,
      "category_rank": 14,
      "domain": "ooo-nemo.ru",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 392017.534131239,
      "curr_month_visits": 392017.534131239,
      "unique_users": 26630.1846630408,
      "pages_per_visit": 5.99851976976035
    },
    {
      "global_rank": 87272,
      "category_rank": 14,
      "domain": "accurateshooter.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 576684.467845965,
      "curr_month_visits": 576684.467845965,
      "unique_users": 305624.370554707,
      "pages_per_visit": 2.4796225282964
    },
    {
      "global_rank": 70926,
      "category_rank": 14,
      "domain": "archweb.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 492133.504907081,
      "curr_month_visits": 492133.504907081,
      "unique_users": 244115.363351967,
      "pages_per_visit": 6.77284932286833
    },
    {
      "global_rank": 43483,
      "category_rank": 14,
      "domain": "tractordata.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1345040.64493744,
      "curr_month_visits": 1345040.64493744,
      "unique_users": 620789.750095861,
      "pages_per_visit": 3.43695859489456
    },
    {
      "global_rank": 14940,
      "category_rank": 14,
      "domain": "supplyhouse.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 3835502.05574623,
      "curr_month_visits": 3835502.05574623,
      "unique_users": 1909147.95837894,
      "pages_per_visit": 4.12610491051578
    },
    {
      "global_rank": 752479,
      "category_rank": 14,
      "domain": "plastic-mart.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 46195.5290174277,
      "curr_month_visits": 46195.5290174277,
      "unique_users": 25919.2715097316,
      "pages_per_visit": 3.6095620017645
    },
    {
      "global_rank": 10555,
      "category_rank": 14,
      "domain": "nationalgrid.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3814369.00827982,
      "curr_month_visits": 3814369.00827982,
      "unique_users": 2088182.08354617,
      "pages_per_visit": 8.35791331082627
    },
    {
      "global_rank": 80723,
      "category_rank": 15,
      "domain": "sagradafamilia.org",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 705819.786455636,
      "curr_month_visits": 705819.786455636,
      "unique_users": 385286.977975127,
      "pages_per_visit": 4.12906149573301
    },
    {
      "global_rank": 15748,
      "category_rank": 15,
      "domain": "datadeliver.net",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 3969422.37341095,
      "curr_month_visits": 3969422.37341095,
      "unique_users": 1505748.63423193,
      "pages_per_visit": 4.05424520035302
    },
    {
      "global_rank": 44612,
      "category_rank": 15,
      "domain": "machinio.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 799341.055059019,
      "curr_month_visits": 799341.055059019,
      "unique_users": 457053.126632521,
      "pages_per_visit": 7.35032235560414
    },
    {
      "global_rank": 10923,
      "category_rank": 15,
      "domain": "fpl.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 5268246.16958203,
      "curr_month_visits": 5268246.16958203,
      "unique_users": 2350553.54494256,
      "pages_per_visit": 5.49204326412827
    },
    {
      "global_rank": 90378,
      "category_rank": 15,
      "domain": "arcelormittal.com.br",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 480276.746574813,
      "curr_month_visits": 480276.746574813,
      "unique_users": 135035.276864237,
      "pages_per_visit": 8.52949686606754
    },
    {
      "global_rank": 151557,
      "category_rank": 15,
      "domain": "geaerospace.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 369261.767259501,
      "curr_month_visits": 369261.767259501,
      "unique_users": 140338.494454175,
      "pages_per_visit": 2.37038884718194
    },
    {
      "global_rank": 70122,
      "category_rank": 15,
      "domain": "bhp.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 804987.967087443,
      "curr_month_visits": 804987.967087443,
      "unique_users": 332668.398502656,
      "pages_per_visit": 3.886322775177
    },
    {
      "global_rank": 83891,
      "category_rank": 15,
      "domain": "graco.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 741015.505036292,
      "curr_month_visits": 741015.505036292,
      "unique_users": 315671.591623706,
      "pages_per_visit": 3.56189515721262
    },
    {
      "global_rank": 757621,
      "category_rank": 15,
      "domain": "envmart.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 50721.8765244996,
      "curr_month_visits": 50721.8765244996,
      "unique_users": 26634.0230079405,
      "pages_per_visit": 2.0546367799843
    },
    {
      "global_rank": 93546,
      "category_rank": 16,
      "domain": "dupont.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 589071.37091191,
      "curr_month_visits": 589071.37091191,
      "unique_users": 339416.964205638,
      "pages_per_visit": 2.67452262181479
    },
    {
      "global_rank": 19863,
      "category_rank": 16,
      "domain": "buildingconnected.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 3129698.84017707,
      "curr_month_visits": 3129698.84017707,
      "unique_users": 404670.486421045,
      "pages_per_visit": 6.21632880123898
    },
    {
      "global_rank": 786270,
      "category_rank": 16,
      "domain": "bobscontainers.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 32933.6723079449,
      "curr_month_visits": 32933.6723079449,
      "unique_users": 16897.8653227962,
      "pages_per_visit": 3.42983827894543
    },
    {
      "global_rank": 71663,
      "category_rank": 16,
      "domain": "coromant.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 577621.693432017,
      "curr_month_visits": 577621.693432017,
      "unique_users": 249708.629324345,
      "pages_per_visit": 5.78998650129907
    },
    {
      "global_rank": 81975,
      "category_rank": 16,
      "domain": "aia.org",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 482009.072002159,
      "curr_month_visits": 482009.072002159,
      "unique_users": 201745.185947493,
      "pages_per_visit": 5.33394139188651
    },
    {
      "global_rank": 96526,
      "category_rank": 16,
      "domain": "icetrade.by",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 462578.115558891,
      "curr_month_visits": 462578.115558891,
      "unique_users": 44162.3897745636,
      "pages_per_visit": 6.64538382190522
    },
    {
      "global_rank": 158508,
      "category_rank": 16,
      "domain": "csic.com.cn",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 196993.324764712,
      "curr_month_visits": 196993.324764712,
      "unique_users": 108735.434071869,
      "pages_per_visit": 4.54806522980938
    },
    {
      "global_rank": 11072,
      "category_rank": 16,
      "domain": "sce.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 4718703.15131582,
      "curr_month_visits": 4718703.15131582,
      "unique_users": 2237870.33739521,
      "pages_per_visit": 5.93459264438784
    },
    {
      "global_rank": 44929,
      "category_rank": 16,
      "domain": "topagrar.pl",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1411408.55523966,
      "curr_month_visits": 1411408.55523966,
      "unique_users": 570918.894212047,
      "pages_per_visit": 2.46715737124743
    },
    {
      "global_rank": 11318,
      "category_rank": 17,
      "domain": "enel.it",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 4641569.5672073,
      "curr_month_visits": 4641569.5672073,
      "unique_users": 2331919.94275632,
      "pages_per_visit": 5.52114071845317
    },
    {
      "global_rank": 45145,
      "category_rank": 17,
      "domain": "takii.co.jp",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1569777.41511956,
      "curr_month_visits": 1569777.41511956,
      "unique_users": 879454.997629213,
      "pages_per_visit": 2.85187832837568
    },
    {
      "global_rank": 170534,
      "category_rank": 17,
      "domain": "avia-pro.net",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 233451.643592047,
      "curr_month_visits": 233451.643592047,
      "unique_users": 82863.1532325227,
      "pages_per_visit": 1.92887653388393
    },
    {
      "global_rank": 99000,
      "category_rank": 17,
      "domain": "thefiringline.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 723595.562625315,
      "curr_month_visits": 723595.562625315,
      "unique_users": 484085.969915294,
      "pages_per_visit": 1.34328433911548
    },
    {
      "global_rank": 94622,
      "category_rank": 17,
      "domain": "swagelok.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 479849.706312434,
      "curr_month_visits": 479849.706312434,
      "unique_users": 221245.873163387,
      "pages_per_visit": 4.49601363450783
    },
    {
      "global_rank": 84243,
      "category_rank": 17,
      "domain": "wbmcc.nic.in",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 937615.452022461,
      "curr_month_visits": 937615.452022461,
      "unique_users": 235586.371128993,
      "pages_per_visit": 2.9386105742219
    },
    {
      "global_rank": 786964,
      "category_rank": 17,
      "domain": "shop.prmfiltration.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 37940.9208187409,
      "curr_month_visits": 37940.9208187409,
      "unique_users": 23972.9303650502,
      "pages_per_visit": 2.37759659823407
    },
    {
      "global_rank": 20230,
      "category_rank": 17,
      "domain": "obi.hu",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 3292213.88647088,
      "curr_month_visits": 3292213.88647088,
      "unique_users": 1371897.12552823,
      "pages_per_visit": 3.41208078068056
    },
    {
      "global_rank": 73403,
      "category_rank": 17,
      "domain": "arcelormittal.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 769056.706348519,
      "curr_month_visits": 769056.706348519,
      "unique_users": 361778.428386973,
      "pages_per_visit": 3.01189378538726
    },
    {
      "global_rank": 74034,
      "category_rank": 18,
      "domain": "pilkington.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 893231.236433464,
      "curr_month_visits": 893231.236433464,
      "unique_users": 132602.716846113,
      "pages_per_visit": 4.42176478736427
    },
    {
      "global_rank": 45827,
      "category_rank": 18,
      "domain": "noticiasagricolas.com.br",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1926004.81181267,
      "curr_month_visits": 1926004.81181267,
      "unique_users": 571231.731823298,
      "pages_per_visit": 1.89661335865063
    },
    {
      "global_rank": 101519,
      "category_rank": 18,
      "domain": "smarttender.biz",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 449622.269943163,
      "curr_month_visits": 449622.269943163,
      "unique_users": 83394.2339351635,
      "pages_per_visit": 5.87301937566696
    },
    {
      "global_rank": 832427,
      "category_rank": 18,
      "domain": "modopump.org",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 16541.6250537563,
      "curr_month_visits": 16541.6250537563,
      "unique_users": 9012.70762914972,
      "pages_per_visit": 5.48667327325049
    },
    {
      "global_rank": 96587,
      "category_rank": 18,
      "domain": "lonza.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 384586.837753918,
      "curr_month_visits": 384586.837753918,
      "unique_users": 182324.249590116,
      "pages_per_visit": 5.82155247697505
    },
    {
      "global_rank": 11908,
      "category_rank": 18,
      "domain": "mvmnext.hu",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3672483.2307224,
      "curr_month_visits": 3672483.2307224,
      "unique_users": 1494687.23389714,
      "pages_per_visit": 6.46179080123158
    },
    {
      "global_rank": 20298,
      "category_rank": 18,
      "domain": "obsbygg.no",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 2965414.43310048,
      "curr_month_visits": 2965414.43310048,
      "unique_users": 1128235.41171818,
      "pages_per_visit": 4.19836298086907
    },
    {
      "global_rank": 86828,
      "category_rank": 18,
      "domain": "archi.fr",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 609233.996936562,
      "curr_month_visits": 609233.996936562,
      "unique_users": 184462.749211901,
      "pages_per_visit": 5.09655781980674
    },
    {
      "global_rank": 171439,
      "category_rank": 18,
      "domain": "ulkm.ru",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 318842.143552396,
      "curr_month_visits": 318842.143552396,
      "unique_users": 23310.1495261021,
      "pages_per_visit": 20.0168467661885
    },
    {
      "global_rank": 97379,
      "category_rank": 19,
      "domain": "airgas.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 499395.345420864,
      "curr_month_visits": 499395.345420864,
      "unique_users": 325130.560046751,
      "pages_per_visit": 3.76783646510608
    },
    {
      "global_rank": 77540,
      "category_rank": 19,
      "domain": "mining.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 906427.399082924,
      "curr_month_visits": 906427.399082924,
      "unique_users": 479726.524221298,
      "pages_per_visit": 1.75153252169295
    },
    {
      "global_rank": 20854,
      "category_rank": 19,
      "domain": "aceservices.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 4091233.71658711,
      "curr_month_visits": 4091233.71658711,
      "unique_users": 66919.8149666379,
      "pages_per_visit": 7.19346421214302
    },
    {
      "global_rank": 87330,
      "category_rank": 19,
      "domain": "usgbc.org",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 537689.924345698,
      "curr_month_visits": 537689.924345698,
      "unique_users": 237175.25246652,
      "pages_per_visit": 4.63969303043573
    },
    {
      "global_rank": 12248,
      "category_rank": 19,
      "domain": "hydroquebec.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3721822.14464547,
      "curr_month_visits": 3721822.14464547,
      "unique_users": 1563192.79833061,
      "pages_per_visit": 7.53935023623924
    },
    {
      "global_rank": 105834,
      "category_rank": 19,
      "domain": "bicotender.ru",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 449005.264625456,
      "curr_month_visits": 449005.264625456,
      "unique_users": 185359.869605791,
      "pages_per_visit": 4.10606215480873
    },
    {
      "global_rank": 174382,
      "category_rank": 19,
      "domain": "aeroexpo.online",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 307262.584314187,
      "curr_month_visits": 307262.584314187,
      "unique_users": 182230.574662499,
      "pages_per_visit": 2.24327191497231
    },
    {
      "global_rank": 842923,
      "category_rank": 19,
      "domain": "aqon-pure.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 40833.1199076504,
      "curr_month_visits": 40833.1199076504,
      "unique_users": 26235.7099092477,
      "pages_per_visit": 1.66817757790701
    },
    {
      "global_rank": 46597,
      "category_rank": 19,
      "domain": "agroserver.ru",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1437996.06913571,
      "curr_month_visits": 1437996.06913571,
      "unique_users": 646423.740002919,
      "pages_per_visit": 3.56932147361498
    },
    {
      "global_rank": 111645,
      "category_rank": 20,
      "domain": "alabuga.ru",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 627612.746736847,
      "curr_month_visits": 627612.746736847,
      "unique_users": 330586.189456874,
      "pages_per_visit": 8.05237632870427
    },
    {
      "global_rank": 80563,
      "category_rank": 20,
      "domain": "23met.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 792872.617927621,
      "curr_month_visits": 792872.617927621,
      "unique_users": 237022.97844705,
      "pages_per_visit": 3.17306014207271
    },
    {
      "global_rank": 48138,
      "category_rank": 20,
      "domain": "agrofoto.pl",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1236858.44094093,
      "curr_month_visits": 1236858.44094093,
      "unique_users": 338258.139836414,
      "pages_per_visit": 3.27379114211067
    },
    {
      "global_rank": 24411,
      "category_rank": 20,
      "domain": "regione.veneto.it",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 2461453.25625795,
      "curr_month_visits": 2461453.25625795,
      "unique_users": 1175238.4901607,
      "pages_per_visit": 4.84502809790482
    },
    {
      "global_rank": 176542,
      "category_rank": 20,
      "domain": "airship.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 241749.188921981,
      "curr_month_visits": 241749.188921981,
      "unique_users": 85795.4708096956,
      "pages_per_visit": 4.18172610408745
    },
    {
      "global_rank": 87418,
      "category_rank": 20,
      "domain": "professionearchitetto.it",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 673880.926903488,
      "curr_month_visits": 673880.926903488,
      "unique_users": 307322.811099927,
      "pages_per_visit": 2.71646064624247
    },
    {
      "global_rank": 98261,
      "category_rank": 20,
      "domain": "hanwha.co.kr",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 666880.582812559,
      "curr_month_visits": 666880.582812559,
      "unique_users": 331691.549628806,
      "pages_per_visit": 1.65036834883841
    },
    {
      "global_rank": 12472,
      "category_rank": 20,
      "domain": "tecnomat.it",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3880912.32978652,
      "curr_month_visits": 3880912.32978652,
      "unique_users": 1578233.18370972,
      "pages_per_visit": 5.07846401764962
    },
    {
      "global_rank": 852825,
      "category_rank": 20,
      "domain": "haguewater.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 16993.4246077936,
      "curr_month_visits": 16993.4246077936,
      "unique_users": 8657.52416449573,
      "pages_per_visit": 6.48053242786145
    },
    {
      "global_rank": 117778,
      "category_rank": 21,
      "domain": "ferrovial.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 653431.918036182,
      "curr_month_visits": 653431.918036182,
      "unique_users": 426628.009065298,
      "pages_per_visit": 1.56850997318715
    },
    {
      "global_rank": 184952,
      "category_rank": 21,
      "domain": "sita.aero",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 234684.579298803,
      "curr_month_visits": 234684.579298803,
      "unique_users": 107586.641907237,
      "pages_per_visit": 2.89611581130365
    },
    {
      "global_rank": 94102,
      "category_rank": 21,
      "domain": "geoportal-krajowy.pl",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 319531.149654267,
      "curr_month_visits": 319531.149654267,
      "unique_users": 197597.74944688,
      "pages_per_visit": 10.1790655721525
    },
    {
      "global_rank": 51647,
      "category_rank": 21,
      "domain": "naro.go.jp",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 803031.410644562,
      "curr_month_visits": 803031.410644562,
      "unique_users": 246480.707671002,
      "pages_per_visit": 8.16503763731614
    },
    {
      "global_rank": 13571,
      "category_rank": 21,
      "domain": "hpcl.co.in",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3061392.65521248,
      "curr_month_visits": 3061392.65521248,
      "unique_users": 461622.273884824,
      "pages_per_visit": 16.8869417184144
    },
    {
      "global_rank": 855114,
      "category_rank": 21,
      "domain": "genesiswatertech.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 29303.3389531387,
      "curr_month_visits": 29303.3389531387,
      "unique_users": 15112.9545700608,
      "pages_per_visit": 1.99861255761689
    },
    {
      "global_rank": 26506,
      "category_rank": 21,
      "domain": "ykkap.co.jp",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 2113574.06419046,
      "curr_month_visits": 2113574.06419046,
      "unique_users": 802306.779213688,
      "pages_per_visit": 4.7542933393935
    },
    {
      "global_rank": 85131,
      "category_rank": 21,
      "domain": "kikakurui.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 781929.414034843,
      "curr_month_visits": 781929.414034843,
      "unique_users": 439889.95558409,
      "pages_per_visit": 2.07768684312714
    },
    {
      "global_rank": 100624,
      "category_rank": 21,
      "domain": "dow.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 515550.273539129,
      "curr_month_visits": 515550.273539129,
      "unique_users": 280007.357426431,
      "pages_per_visit": 3.38007649766398
    },
    {
      "global_rank": 13600,
      "category_rank": 22,
      "domain": "sgcc.com.cn",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2217076.09197502,
      "curr_month_visits": 2217076.09197502,
      "unique_users": 689201.711496438,
      "pages_per_visit": 8.38175397735288
    },
    {
      "global_rank": 103281,
      "category_rank": 22,
      "domain": "henkel-adhesives.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 506292.907195893,
      "curr_month_visits": 506292.907195893,
      "unique_users": 279884.624903637,
      "pages_per_visit": 2.82126622811125
    },
    {
      "global_rank": 130422,
      "category_rank": 22,
      "domain": "doosan.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 306791.545943571,
      "curr_month_visits": 306791.545943571,
      "unique_users": 91153.2900734676,
      "pages_per_visit": 7.54588423064485
    },
    {
      "global_rank": 189180,
      "category_rank": 22,
      "domain": "empowermx.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 179617.433599314,
      "curr_month_visits": 179617.433599314,
      "unique_users": 48279.7594753283,
      "pages_per_visit": 3.62511959403696
    },
    {
      "global_rank": 861461,
      "category_rank": 22,
      "domain": "daveywater.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 40761.329261263,
      "curr_month_visits": 40761.329261263,
      "unique_users": 19279.0774773765,
      "pages_per_visit": 2.69248082030243
    },
    {
      "global_rank": 86687,
      "category_rank": 22,
      "domain": "nlmk.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 472319.119763822,
      "curr_month_visits": 472319.119763822,
      "unique_users": 87299.8916155359,
      "pages_per_visit": 9.87095103709418
    },
    {
      "global_rank": 26571,
      "category_rank": 22,
      "domain": "houseplans.net",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1769886.62466102,
      "curr_month_visits": 1769886.62466102,
      "unique_users": 860364.199093812,
      "pages_per_visit": 5.75231878779707
    },
    {
      "global_rank": 51784,
      "category_rank": 22,
      "domain": "canalrural.com.br",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 2085498.02898254,
      "curr_month_visits": 2085498.02898254,
      "unique_users": 1257255.3906981,
      "pages_per_visit": 1.52788424727766
    },
    {
      "global_rank": 95475,
      "category_rank": 22,
      "domain": "arquitecturaviva.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 467311.669119084,
      "curr_month_visits": 467311.669119084,
      "unique_users": 222737.42589077,
      "pages_per_visit": 3.6325303708995
    },
    {
      "global_rank": 96480,
      "category_rank": 23,
      "domain": "archinect.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 616026.781230588,
      "curr_month_visits": 616026.781230588,
      "unique_users": 307310.479127716,
      "pages_per_visit": 2.72732432089146
    },
    {
      "global_rank": 160050,
      "category_rank": 23,
      "domain": "prom.uz",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 338397.989264484,
      "curr_month_visits": 338397.989264484,
      "unique_users": 200124.895759455,
      "pages_per_visit": 2.71458682351537
    },
    {
      "global_rank": 890038,
      "category_rank": 23,
      "domain": "pentair.eu",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 32311.9306282,
      "curr_month_visits": 32311.9306282,
      "unique_users": 16927.1115792723,
      "pages_per_visit": 1.808762954127
    },
    {
      "global_rank": 55081,
      "category_rank": 23,
      "domain": "traktorpool.de",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 837611.810811589,
      "curr_month_visits": 837611.810811589,
      "unique_users": 287886.555144198,
      "pages_per_visit": 5.26528970482514
    },
    {
      "global_rank": 104684,
      "category_rank": 23,
      "domain": "vertical.ru",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 349093.780552912,
      "curr_month_visits": 349093.780552912,
      "unique_users": 97655.5806980142,
      "pages_per_visit": 8.09113375502768
    },
    {
      "global_rank": 26901,
      "category_rank": 23,
      "domain": "catalabo.org",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 2895760.18521722,
      "curr_month_visits": 2895760.18521722,
      "unique_users": 956800.440233504,
      "pages_per_visit": 2.38862409926862
    },
    {
      "global_rank": 87203,
      "category_rank": 23,
      "domain": "cnbm.com.cn",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 533409.555244944,
      "curr_month_visits": 533409.555244944,
      "unique_users": 138607.882172313,
      "pages_per_visit": 4.25841156913898
    },
    {
      "global_rank": 13720,
      "category_rank": 23,
      "domain": "firstenergycorp.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 4045409.93915253,
      "curr_month_visits": 4045409.93915253,
      "unique_users": 1942308.01430641,
      "pages_per_visit": 4.96761087540914
    },
    {
      "global_rank": 194546,
      "category_rank": 23,
      "domain": "flightdocs.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 87487.8684472412,
      "curr_month_visits": 87487.8684472412,
      "unique_users": 5863.16472361421,
      "pages_per_visit": 33.6072534268127
    },
    {
      "global_rank": 55333,
      "category_rank": 24,
      "domain": "foodmate.net",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1082700.45097598,
      "curr_month_visits": 1082700.45097598,
      "unique_users": 409037.344780914,
      "pages_per_visit": 3.73016560878297
    },
    {
      "global_rank": 108409,
      "category_rank": 24,
      "domain": "ppg.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 460175.129060022,
      "curr_month_visits": 460175.129060022,
      "unique_users": 217797.160795262,
      "pages_per_visit": 4.02792200263923
    },
    {
      "global_rank": 160998,
      "category_rank": 24,
      "domain": "ammoland.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 371841.585313237,
      "curr_month_visits": 371841.585313237,
      "unique_users": 164559.481911663,
      "pages_per_visit": 1.97477978613009
    },
    {
      "global_rank": 27035,
      "category_rank": 24,
      "domain": "cscec.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1641291.33980826,
      "curr_month_visits": 1641291.33980826,
      "unique_users": 279710.738823424,
      "pages_per_visit": 13.229338620681
    },
    {
      "global_rank": 88880,
      "category_rank": 24,
      "domain": "fabrikant.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 360779.475679381,
      "curr_month_visits": 360779.475679381,
      "unique_users": 93025.2081814353,
      "pages_per_visit": 12.5934880240946
    },
    {
      "global_rank": 195850,
      "category_rank": 24,
      "domain": "kongsberg.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 228233.164097727,
      "curr_month_visits": 228233.164097727,
      "unique_users": 109957.02735655,
      "pages_per_visit": 2.5970246653473
    },
    {
      "global_rank": 96923,
      "category_rank": 24,
      "domain": "ncarb.org",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 405612.076150039,
      "curr_month_visits": 405612.076150039,
      "unique_users": 142407.695845857,
      "pages_per_visit": 5.60409008176074
    },
    {
      "global_rank": 14029,
      "category_rank": 24,
      "domain": "etc-meisai.jp",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3507161.64499349,
      "curr_month_visits": 3507161.64499349,
      "unique_users": 1162278.63483732,
      "pages_per_visit": 7.09452328771939
    },
    {
      "global_rank": 890232,
      "category_rank": 24,
      "domain": "minergie.ch",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 26810.2854063147,
      "curr_month_visits": 26810.2854063147,
      "unique_users": 11616.1472312122,
      "pages_per_visit": 3.60525781556414
    },
    {
      "global_rank": 100831,
      "category_rank": 25,
      "domain": "vigilantcitizen.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 605913.242142257,
      "curr_month_visits": 605913.242142257,
      "unique_users": 230187.337338713,
      "pages_per_visit": 2.64699757311193
    },
    {
      "global_rank": 56269,
      "category_rank": 25,
      "domain": "kubota.co.jp",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 911815.328435876,
      "curr_month_visits": 911815.328435876,
      "unique_users": 388838.023450868,
      "pages_per_visit": 5.08311120678046
    },
    {
      "global_rank": 114872,
      "category_rank": 25,
      "domain": "protolabs.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 402911.482859811,
      "curr_month_visits": 402911.482859811,
      "unique_users": 174985.376326065,
      "pages_per_visit": 4.11806326259971
    },
    {
      "global_rank": 197910,
      "category_rank": 25,
      "domain": "comac.cc",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 177295.680626502,
      "curr_month_visits": 177295.680626502,
      "unique_users": 62950.9029804842,
      "pages_per_visit": 7.43126749757338
    },
    {
      "global_rank": 14744,
      "category_rank": 25,
      "domain": "blacktoon326.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2430832.04887302,
      "curr_month_visits": 2430832.04887302,
      "unique_users": 355727.694631057,
      "pages_per_visit": 7.6604273824048
    },
    {
      "global_rank": 27562,
      "category_rank": 25,
      "domain": "sangetsu.co.jp",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1614375.37348115,
      "curr_month_visits": 1614375.37348115,
      "unique_users": 528263.764409846,
      "pages_per_visit": 7.37150680025607
    },
    {
      "global_rank": 90789,
      "category_rank": 25,
      "domain": "donaldson.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 612324.438545936,
      "curr_month_visits": 612324.438545936,
      "unique_users": 196623.367770914,
      "pages_per_visit": 3.9620519186434
    },
    {
      "global_rank": 170225,
      "category_rank": 25,
      "domain": "applied.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 244565.200996912,
      "curr_month_visits": 244565.200996912,
      "unique_users": 113429.634401123,
      "pages_per_visit": 4.41791828447897
    },
    {
      "global_rank": 907151,
      "category_rank": 25,
      "domain": "wecofilters.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 24905.6706885911,
      "curr_month_visits": 24905.6706885911,
      "unique_users": 13858.5146921681,
      "pages_per_visit": 2.00121532881162
    },
    {
      "global_rank": 15194,
      "category_rank": 26,
      "domain": "wm.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3531940.33976362,
      "curr_month_visits": 3531940.33976362,
      "unique_users": 2234289.65961396,
      "pages_per_visit": 4.4279454325664
    },
    {
      "global_rank": 929015,
      "category_rank": 26,
      "domain": "hupshenghardware.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 34705.3683385791,
      "curr_month_visits": 34705.3683385791,
      "unique_users": 19075.833082925,
      "pages_per_visit": 1.96929403386431
    },
    {
      "global_rank": 172623,
      "category_rank": 26,
      "domain": "sigforum.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 221148.359425694,
      "curr_month_visits": 221148.359425694,
      "unique_users": 100956.499330581,
      "pages_per_visit": 4.49550074343611
    },
    {
      "global_rank": 121554,
      "category_rank": 26,
      "domain": "chembk.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 391331.543429618,
      "curr_month_visits": 391331.543429618,
      "unique_users": 203606.710011032,
      "pages_per_visit": 2.20896089021784
    },
    {
      "global_rank": 27622,
      "category_rank": 26,
      "domain": "architecturaldesigns.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 2086420.40617245,
      "curr_month_visits": 2086420.40617245,
      "unique_users": 830963.213798085,
      "pages_per_visit": 4.94442085834594
    },
    {
      "global_rank": 200338,
      "category_rank": 26,
      "domain": "embraer.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 262670.988171774,
      "curr_month_visits": 262670.988171774,
      "unique_users": 153557.098987402,
      "pages_per_visit": 2.35090603787918
    },
    {
      "global_rank": 92502,
      "category_rank": 26,
      "domain": "phosagro.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 298438.748623357,
      "curr_month_visits": 298438.748623357,
      "unique_users": 66701.8749065507,
      "pages_per_visit": 15.0904550391687
    },
    {
      "global_rank": 57732,
      "category_rank": 26,
      "domain": "agcocorp.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 843150.076687702,
      "curr_month_visits": 843150.076687702,
      "unique_users": 243907.548528735,
      "pages_per_visit": 6.67554554668632
    },
    {
      "global_rank": 102028,
      "category_rank": 26,
      "domain": "deutsches-architekturforum.de",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 450297.362956817,
      "curr_month_visits": 450297.362956817,
      "unique_users": 100961.792293838,
      "pages_per_visit": 4.34333713895366
    },
    {
      "global_rank": 173009,
      "category_rank": 27,
      "domain": "ecostandard.ru",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 159485.746278303,
      "curr_month_visits": 159485.746278303,
      "unique_users": 66734.7080510645,
      "pages_per_visit": 9.91668973140034
    },
    {
      "global_rank": 104262,
      "category_rank": 27,
      "domain": "archdaily.co",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 361287.615705451,
      "curr_month_visits": 361287.615705451,
      "unique_users": 149634.349243544,
      "pages_per_visit": 8.59050954908565
    },
    {
      "global_rank": 28387,
      "category_rank": 27,
      "domain": "moraware.net",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1458057.16857899,
      "curr_month_visits": 1458057.16857899,
      "unique_users": 83006.2913303985,
      "pages_per_visit": 19.1054359584344
    },
    {
      "global_rank": 121827,
      "category_rank": 27,
      "domain": "nipponpaint.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 309960.380652535,
      "curr_month_visits": 309960.380652535,
      "unique_users": 129513.850017564,
      "pages_per_visit": 6.18452721377871
    },
    {
      "global_rank": 202778,
      "category_rank": 27,
      "domain": "dassault-aviation.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 188841.91251586,
      "curr_month_visits": 188841.91251586,
      "unique_users": 103318.669662964,
      "pages_per_visit": 3.3069103428073
    },
    {
      "global_rank": 59905,
      "category_rank": 27,
      "domain": "yardbook.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 904928.470307204,
      "curr_month_visits": 904928.470307204,
      "unique_users": 241555.192976177,
      "pages_per_visit": 8.49137100691973
    },
    {
      "global_rank": 938933,
      "category_rank": 27,
      "domain": "hazenandsawyer.sharepoint.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 25198.488981757,
      "curr_month_visits": 25198.488981757,
      "unique_users": 2418.84842939944,
      "pages_per_visit": 6.63943282631315
    },
    {
      "global_rank": 15205,
      "category_rank": 27,
      "domain": "edfenergy.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3953288.5134174,
      "curr_month_visits": 3953288.5134174,
      "unique_users": 1793250.82609376,
      "pages_per_visit": 4.81565588548395
    },
    {
      "global_rank": 96393,
      "category_rank": 27,
      "domain": "csc.com.tw",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 428106.820206875,
      "curr_month_visits": 428106.820206875,
      "unique_users": 56572.6107193168,
      "pages_per_visit": 8.13672607812629
    },
    {
      "global_rank": 123318,
      "category_rank": 28,
      "domain": "sibur.ru",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 428932.683110687,
      "curr_month_visits": 428932.683110687,
      "unique_users": 189253.983301606,
      "pages_per_visit": 3.69066452347008
    },
    {
      "global_rank": 15316,
      "category_rank": 28,
      "domain": "totalenergies.fr",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3879345.09281041,
      "curr_month_visits": 3879345.09281041,
      "unique_users": 1976971.48915595,
      "pages_per_visit": 3.78773795306815
    },
    {
      "global_rank": 97430,
      "category_rank": 28,
      "domain": "fabricators.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 464064.33113037,
      "curr_month_visits": 464064.33113037,
      "unique_users": 317612.694018969,
      "pages_per_visit": 5.52761092330876
    },
    {
      "global_rank": 173432,
      "category_rank": 28,
      "domain": "nihon-trim.co.jp",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 387643.381472233,
      "curr_month_visits": 387643.381472233,
      "unique_users": 253578.870027516,
      "pages_per_visit": 2.56292302733248
    },
    {
      "global_rank": 29002,
      "category_rank": 28,
      "domain": "dewalt.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1781166.2721751,
      "curr_month_visits": 1781166.2721751,
      "unique_users": 1159050.33825563,
      "pages_per_visit": 3.09873932154549
    },
    {
      "global_rank": 59997,
      "category_rank": 28,
      "domain": "machinerypete.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 763654.520304042,
      "curr_month_visits": 763654.520304042,
      "unique_users": 407597.489818621,
      "pages_per_visit": 3.76693296816684
    },
    {
      "global_rank": 940957,
      "category_rank": 28,
      "domain": "erneuerbarheizen.ch",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 24955.654794822,
      "curr_month_visits": 24955.654794822,
      "unique_users": 9757.63894421936,
      "pages_per_visit": 3.68974770864388
    },
    {
      "global_rank": 108522,
      "category_rank": 28,
      "domain": "thearchitectsdiary.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 527552.805898798,
      "curr_month_visits": 527552.805898798,
      "unique_users": 267330.436777934,
      "pages_per_visit": 1.7989735232245
    },
    {
      "global_rank": 187547,
      "category_rank": 29,
      "domain": "isprambiente.it",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 130408.352256755,
      "curr_month_visits": 130408.352256755,
      "unique_users": 53311.4630486696,
      "pages_per_visit": 7.40763006033698
    },
    {
      "global_rank": 30465,
      "category_rank": 29,
      "domain": "lunda.ru",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 987653.805523921,
      "curr_month_visits": 987653.805523921,
      "unique_users": 395199.024693667,
      "pages_per_visit": 9.93736250415611
    },
    {
      "global_rank": 98337,
      "category_rank": 29,
      "domain": "mc.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 498088.52306639,
      "curr_month_visits": 498088.52306639,
      "unique_users": 132503.855766965,
      "pages_per_visit": 6.06574975900311
    },
    {
      "global_rank": 210043,
      "category_rank": 29,
      "domain": "collinsaerospace.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 251426.378317073,
      "curr_month_visits": 251426.378317073,
      "unique_users": 148141.206149141,
      "pages_per_visit": 2.20062757588538
    },
    {
      "global_rank": 125239,
      "category_rank": 29,
      "domain": "master.pro",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 358419.102756098,
      "curr_month_visits": 358419.102756098,
      "unique_users": 24552.9503935462,
      "pages_per_visit": 8.97913558254413
    },
    {
      "global_rank": 60095,
      "category_rank": 29,
      "domain": "mfrural.com.br",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 955537.107111043,
      "curr_month_visits": 955537.107111043,
      "unique_users": 643628.086890511,
      "pages_per_visit": 3.1004633094503
    },
    {
      "global_rank": 979798,
      "category_rank": 29,
      "domain": "judo.eu",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 25230.5942430553,
      "curr_month_visits": 25230.5942430553,
      "unique_users": 12945.1662707357,
      "pages_per_visit": 2.54886407260573
    },
    {
      "global_rank": 108832,
      "category_rank": 29,
      "domain": "cadmapper.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 434808.560490503,
      "curr_month_visits": 434808.560490503,
      "unique_users": 202553.734479684,
      "pages_per_visit": 4.51736303785459
    },
    {
      "global_rank": 15440,
      "category_rank": 29,
      "domain": "ovoenergy.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3551972.52293875,
      "curr_month_visits": 3551972.52293875,
      "unique_users": 1580590.65034862,
      "pages_per_visit": 5.53787720792706
    },
    {
      "global_rank": 15540,
      "category_rank": 30,
      "domain": "cemig.com.br",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3012812.51595557,
      "curr_month_visits": 3012812.51595557,
      "unique_users": 1292395.01473643,
      "pages_per_visit": 7.85066890817545
    },
    {
      "global_rank": 98359,
      "category_rank": 30,
      "domain": "tatasteel.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 483057.812900383,
      "curr_month_visits": 483057.812900383,
      "unique_users": 269427.5184844,
      "pages_per_visit": 3.90132490085229
    },
    {
      "global_rank": 188199,
      "category_rank": 30,
      "domain": "spiraxsarco.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 310523.62321848,
      "curr_month_visits": 310523.62321848,
      "unique_users": 126214.633049058,
      "pages_per_visit": 2.39523927466572
    },
    {
      "global_rank": 214867,
      "category_rank": 30,
      "domain": "ilsmart.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 179789.702958576,
      "curr_month_visits": 179789.702958576,
      "unique_users": 19540.0901551818,
      "pages_per_visit": 8.70723344327039
    },
    {
      "global_rank": 126237,
      "category_rank": 30,
      "domain": "denka365.sharepoint.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 369114.241454003,
      "curr_month_visits": 369114.241454003,
      "unique_users": 11434.1262835768,
      "pages_per_visit": 5.28144262210001
    },
    {
      "global_rank": 60454,
      "category_rank": 30,
      "domain": "landandfarm.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 674706.175929332,
      "curr_month_visits": 674706.175929332,
      "unique_users": 377648.277998963,
      "pages_per_visit": 5.07304635770794
    },
    {
      "global_rank": 30485,
      "category_rank": 30,
      "domain": "toto.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1986485.66998934,
      "curr_month_visits": 1986485.66998934,
      "unique_users": 1148475.12033483,
      "pages_per_visit": 3.25219969379724
    },
    {
      "global_rank": 981003,
      "category_rank": 30,
      "domain": "septic.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 26227.2597342491,
      "curr_month_visits": 26227.2597342491,
      "unique_users": 16055.8035554318,
      "pages_per_visit": 2.3190804396347
    },
    {
      "global_rank": 108938,
      "category_rank": 30,
      "domain": "arquitecturaydiseno.es",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 561179.747297628,
      "curr_month_visits": 561179.747297628,
      "unique_users": 339771.916372651,
      "pages_per_visit": 2.28319622481422
    },
    {
      "global_rank": 997124,
      "category_rank": 31,
      "domain": "rgf.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 21204.5034200742,
      "curr_month_visits": 21204.5034200742,
      "unique_users": 11526.8964179264,
      "pages_per_visit": 2.52231302635404
    },
    {
      "global_rank": 61382,
      "category_rank": 31,
      "domain": "proplanta.de",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 740986.839671315,
      "curr_month_visits": 740986.839671315,
      "unique_users": 244916.678376557,
      "pages_per_visit": 6.92766248535767
    },
    {
      "global_rank": 15574,
      "category_rank": 31,
      "domain": "shell.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3866239.56924514,
      "curr_month_visits": 3866239.56924514,
      "unique_users": 1846160.36304718,
      "pages_per_visit": 4.85792809386976
    },
    {
      "global_rank": 127568,
      "category_rank": 31,
      "domain": "pcc.eu",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 541155.933997777,
      "curr_month_visits": 541155.933997777,
      "unique_users": 327222.968405197,
      "pages_per_visit": 1.5376873735307
    },
    {
      "global_rank": 110470,
      "category_rank": 31,
      "domain": "architecture.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 382061.607262569,
      "curr_month_visits": 382061.607262569,
      "unique_users": 175817.023017492,
      "pages_per_visit": 3.64916007439898
    },
    {
      "global_rank": 30522,
      "category_rank": 31,
      "domain": "archon.pl",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1330082.560762,
      "curr_month_visits": 1330082.560762,
      "unique_users": 483915.214235074,
      "pages_per_visit": 7.60237114716818
    },
    {
      "global_rank": 194971,
      "category_rank": 31,
      "domain": "altec.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 265358.969498826,
      "curr_month_visits": 265358.969498826,
      "unique_users": 70126.8673078525,
      "pages_per_visit": 6.1502297385908
    },
    {
      "global_rank": 219963,
      "category_rank": 31,
      "domain": "accuristech.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 222109.141017593,
      "curr_month_visits": 222109.141017593,
      "unique_users": 115242.569018915,
      "pages_per_visit": 2.78562805826139
    },
    {
      "global_rank": 102247,
      "category_rank": 31,
      "domain": "directlot.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 386328.615714292,
      "curr_month_visits": 386328.615714292,
      "unique_users": 68103.612390083,
      "pages_per_visit": 8.58247874773465
    },
    {
      "global_rank": 61494,
      "category_rank": 32,
      "domain": "bigiron.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 773834.637913364,
      "curr_month_visits": 773834.637913364,
      "unique_users": 229200.064415839,
      "pages_per_visit": 7.22032161876451
    },
    {
      "global_rank": 132331,
      "category_rank": 32,
      "domain": "coromandel.biz",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 262052.078108669,
      "curr_month_visits": 262052.078108669,
      "unique_users": 38001.881510388,
      "pages_per_visit": 10.141988310577
    },
    {
      "global_rank": 103042,
      "category_rank": 32,
      "domain": "severstal.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 479564.229789267,
      "curr_month_visits": 479564.229789267,
      "unique_users": 193788.751420032,
      "pages_per_visit": 3.46349070342267
    },
    {
      "global_rank": 32236,
      "category_rank": 32,
      "domain": "acca.it",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 2283507.13773495,
      "curr_month_visits": 2283507.13773495,
      "unique_users": 1075823.6699322,
      "pages_per_visit": 2.28526160350343
    },
    {
      "global_rank": 1011074,
      "category_rank": 32,
      "domain": "royaleijkelkamp.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 26597.3250783913,
      "curr_month_visits": 26597.3250783913,
      "unique_users": 13650.6000387621,
      "pages_per_visit": 2.74159121035126
    },
    {
      "global_rank": 15642,
      "category_rank": 32,
      "domain": "enedis.fr",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2841047.69083762,
      "curr_month_visits": 2841047.69083762,
      "unique_users": 1008902.55520238,
      "pages_per_visit": 6.33592365397548
    },
    {
      "global_rank": 222565,
      "category_rank": 32,
      "domain": "kleen-ritecorp.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 203800.377599108,
      "curr_month_visits": 203800.377599108,
      "unique_users": 111837.922699742,
      "pages_per_visit": 3.47045258699948
    },
    {
      "global_rank": 111676,
      "category_rank": 32,
      "domain": "monuments-nationaux.fr",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 420170.833262454,
      "curr_month_visits": 420170.833262454,
      "unique_users": 243111.971615336,
      "pages_per_visit": 3.75270269217655
    },
    {
      "global_rank": 221916,
      "category_rank": 32,
      "domain": "ga.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 204736.140938173,
      "curr_month_visits": 204736.140938173,
      "unique_users": 63241.3539514009,
      "pages_per_visit": 4.16938126101134
    },
    {
      "global_rank": 222392,
      "category_rank": 33,
      "domain": "parkercorp.sharepoint.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 164457.400175761,
      "curr_month_visits": 164457.400175761,
      "unique_users": 45548.870434646,
      "pages_per_visit": 4.10735112111209
    },
    {
      "global_rank": 112953,
      "category_rank": 33,
      "domain": "re-thinkingthefuture.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 583090.144152915,
      "curr_month_visits": 583090.144152915,
      "unique_users": 333540.697049634,
      "pages_per_visit": 1.80827219581106
    },
    {
      "global_rank": 225350,
      "category_rank": 33,
      "domain": "blackwoods.com.au",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 168092.111048461,
      "curr_month_visits": 168092.111048461,
      "unique_users": 86592.6349001276,
      "pages_per_visit": 3.64047903150435
    },
    {
      "global_rank": 132518,
      "category_rank": 33,
      "domain": "lubricantadvisor.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 429607.500021718,
      "curr_month_visits": 429607.500021718,
      "unique_users": 145785.072590019,
      "pages_per_visit": 3.63984324076874
    },
    {
      "global_rank": 32599,
      "category_rank": 33,
      "domain": "hyphensolutions.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1406509.40329564,
      "curr_month_visits": 1406509.40329564,
      "unique_users": 124517.157183851,
      "pages_per_visit": 16.724838916918
    },
    {
      "global_rank": 16403,
      "category_rank": 33,
      "domain": "gas.ua",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3972231.27970811,
      "curr_month_visits": 3972231.27970811,
      "unique_users": 1521280.9037886,
      "pages_per_visit": 3.33286113582063
    },
    {
      "global_rank": 1033372,
      "category_rank": 33,
      "domain": "cecinc.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 22274.8415395554,
      "curr_month_visits": 22274.8415395554,
      "unique_users": 11055.0751518289,
      "pages_per_visit": 3.46227602624612
    },
    {
      "global_rank": 62679,
      "category_rank": 33,
      "domain": "toro.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1058947.9445632,
      "curr_month_visits": 1058947.9445632,
      "unique_users": 571453.768139254,
      "pages_per_visit": 3.51342398755998
    },
    {
      "global_rank": 104301,
      "category_rank": 33,
      "domain": "millerwelds.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 500740.968027973,
      "curr_month_visits": 500740.968027973,
      "unique_users": 286912.446994131,
      "pages_per_visit": 3.13736412873801
    },
    {
      "global_rank": 32652,
      "category_rank": 34,
      "domain": "agsrealestate.it",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 2428088.24764995,
      "curr_month_visits": 2428088.24764995,
      "unique_users": 1172024.48775648,
      "pages_per_visit": 1.3638971014857
    },
    {
      "global_rank": 230070,
      "category_rank": 34,
      "domain": "frazier.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 517386.648603826,
      "curr_month_visits": 517386.648603826,
      "unique_users": 17382.046198018,
      "pages_per_visit": 3.88567102789209
    },
    {
      "global_rank": 143192,
      "category_rank": 34,
      "domain": "rustoleum.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 391649.303927629,
      "curr_month_visits": 391649.303927629,
      "unique_users": 262782.472599824,
      "pages_per_visit": 2.43021081982354
    },
    {
      "global_rank": 231058,
      "category_rank": 34,
      "domain": "jetinsight.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 208823.504547721,
      "curr_month_visits": 208823.504547721,
      "unique_users": 15790.9861942294,
      "pages_per_visit": 4.13547325989565
    },
    {
      "global_rank": 104817,
      "category_rank": 34,
      "domain": "ciglimited.co.za",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 80163.4726737505,
      "curr_month_visits": 80163.4726737505,
      "unique_users": 50137.0735685994,
      "pages_per_visit": 11.8488569418713
    },
    {
      "global_rank": 64279,
      "category_rank": 34,
      "domain": "shop.takii.co.jp",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1004042.85034252,
      "curr_month_visits": 1004042.85034252,
      "unique_users": 607271.636205871,
      "pages_per_visit": 3.20547841906829
    },
    {
      "global_rank": 1064775,
      "category_rank": 34,
      "domain": "rainharvest.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 35637.8310773947,
      "curr_month_visits": 35637.8310773947,
      "unique_users": 19812.2778060318,
      "pages_per_visit": 2.53462785689357
    },
    {
      "global_rank": 119891,
      "category_rank": 34,
      "domain": "kira.or.kr",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 330159.801722807,
      "curr_month_visits": 330159.801722807,
      "unique_users": 105782.039514299,
      "pages_per_visit": 6.28052217253017
    },
    {
      "global_rank": 16589,
      "category_rank": 34,
      "domain": "eon.de",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2531722.69257983,
      "curr_month_visits": 2531722.69257983,
      "unique_users": 1341739.02264843,
      "pages_per_visit": 6.90106461318661
    },
    {
      "global_rank": 17128,
      "category_rank": 35,
      "domain": "solarweb.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 4442879.69751388,
      "curr_month_visits": 4442879.69751388,
      "unique_users": 560027.772418256,
      "pages_per_visit": 3.3110761074634
    },
    {
      "global_rank": 32675,
      "category_rank": 35,
      "domain": "dandoli.jp",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1419208.43677402,
      "curr_month_visits": 1419208.43677402,
      "unique_users": 84097.6945279271,
      "pages_per_visit": 11.2996536359888
    },
    {
      "global_rank": 231516,
      "category_rank": 35,
      "domain": "boeingdistribution.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 332552.130417591,
      "curr_month_visits": 332552.130417591,
      "unique_users": 49203.6533055118,
      "pages_per_visit": 3.56111927003784
    },
    {
      "global_rank": 144418,
      "category_rank": 35,
      "domain": "usplastic.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 323741.708881413,
      "curr_month_visits": 323741.708881413,
      "unique_users": 218188.165695393,
      "pages_per_visit": 4.02277255262968
    },
    {
      "global_rank": 123296,
      "category_rank": 35,
      "domain": "afasiaarchzine.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 302163.147004094,
      "curr_month_visits": 302163.147004094,
      "unique_users": 92853.2455174681,
      "pages_per_visit": 7.4709388721344
    },
    {
      "global_rank": 233108,
      "category_rank": 35,
      "domain": "hoechsmann.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 163878.524245579,
      "curr_month_visits": 163878.524245579,
      "unique_users": 73282.714876559,
      "pages_per_visit": 6.66462408663373
    },
    {
      "global_rank": 65713,
      "category_rank": 35,
      "domain": "24hourcampfire.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 704645.595115972,
      "curr_month_visits": 704645.595115972,
      "unique_users": 215161.784721408,
      "pages_per_visit": 5.05905629072512
    },
    {
      "global_rank": 1096724,
      "category_rank": 35,
      "domain": "crifluidsystems.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 20049.8652157533,
      "curr_month_visits": 20049.8652157533,
      "unique_users": 10551.7640961381,
      "pages_per_visit": 2.49624244390569
    },
    {
      "global_rank": 105748,
      "category_rank": 35,
      "domain": "lincolnelectric.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 482243.325369958,
      "curr_month_visits": 482243.325369958,
      "unique_users": 244632.95494155,
      "pages_per_visit": 3.3959941637902
    },
    {
      "global_rank": 1109847,
      "category_rank": 36,
      "domain": "flomatic.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 28193.3617815512,
      "curr_month_visits": 28193.3617815512,
      "unique_users": 15627.9441488077,
      "pages_per_visit": 1.78210021077788
    },
    {
      "global_rank": 113896,
      "category_rank": 36,
      "domain": "tender.pro",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 356092.528734018,
      "curr_month_visits": 356092.528734018,
      "unique_users": 85317.5241116958,
      "pages_per_visit": 7.11813736622218
    },
    {
      "global_rank": 65812,
      "category_rank": 36,
      "domain": "murdochs.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 550924.018070149,
      "curr_month_visits": 550924.018070149,
      "unique_users": 318901.285425668,
      "pages_per_visit": 3.88955494367684
    },
    {
      "global_rank": 234294,
      "category_rank": 36,
      "domain": "parttarget.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 199226.976720327,
      "curr_month_visits": 199226.976720327,
      "unique_users": 78382.0709030339,
      "pages_per_visit": 2.8613628948468
    },
    {
      "global_rank": 17637,
      "category_rank": 36,
      "domain": "bchydro.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2626752.28788511,
      "curr_month_visits": 2626752.28788511,
      "unique_users": 1061415.34186669,
      "pages_per_visit": 4.13702061150513
    },
    {
      "global_rank": 240431,
      "category_rank": 36,
      "domain": "nen.nl",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 187608.963626995,
      "curr_month_visits": 187608.963626995,
      "unique_users": 102920.027214175,
      "pages_per_visit": 3.89945838943086
    },
    {
      "global_rank": 144470,
      "category_rank": 36,
      "domain": "kansai.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 262721.858100449,
      "curr_month_visits": 262721.858100449,
      "unique_users": 68142.5646937049,
      "pages_per_visit": 6.53146075414333
    },
    {
      "global_rank": 125330,
      "category_rank": 36,
      "domain": "archi.ru",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 478792.040072044,
      "curr_month_visits": 478792.040072044,
      "unique_users": 230003.653482282,
      "pages_per_visit": 2.80468587865632
    },
    {
      "global_rank": 32767,
      "category_rank": 36,
      "domain": "spider-net.jp",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1042931.61303242,
      "curr_month_visits": 1042931.61303242,
      "unique_users": 94181.8097264565,
      "pages_per_visit": 16.1861848067056
    },
    {
      "global_rank": 145616,
      "category_rank": 37,
      "domain": "echemi.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 444816.560300548,
      "curr_month_visits": 444816.560300548,
      "unique_users": 258205.171514367,
      "pages_per_visit": 1.84318471835519
    },
    {
      "global_rank": 32770,
      "category_rank": 37,
      "domain": "deltekfirst.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1565207.35192806,
      "curr_month_visits": 1565207.35192806,
      "unique_users": 102146.590792166,
      "pages_per_visit": 8.97248193771646
    },
    {
      "global_rank": 126563,
      "category_rank": 37,
      "domain": "wikiarquitectura.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 365020.054362107,
      "curr_month_visits": 365020.054362107,
      "unique_users": 178934.391579419,
      "pages_per_visit": 4.85969565354621
    },
    {
      "global_rank": 234388,
      "category_rank": 37,
      "domain": "cnnc.com.cn",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 193174.962959428,
      "curr_month_visits": 193174.962959428,
      "unique_users": 94449.8895143633,
      "pages_per_visit": 7.10233007277406
    },
    {
      "global_rank": 1123230,
      "category_rank": 37,
      "domain": "filtry-wody.pl",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 27910.6497904257,
      "curr_month_visits": 27910.6497904257,
      "unique_users": 17747.8553453281,
      "pages_per_visit": 2.5231135303717
    },
    {
      "global_rank": 66221,
      "category_rank": 37,
      "domain": "agrolink.com.br",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1007117.76543402,
      "curr_month_visits": 1007117.76543402,
      "unique_users": 517997.19741905,
      "pages_per_visit": 2.14534247329765
    },
    {
      "global_rank": 258888,
      "category_rank": 37,
      "domain": "escogroup.org",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 67893.6301263713,
      "curr_month_visits": 67893.6301263713,
      "unique_users": 27260.839962175,
      "pages_per_visit": 21.0434165938713
    },
    {
      "global_rank": 17726,
      "category_rank": 37,
      "domain": "vattenfall.de",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3583940.87162961,
      "curr_month_visits": 3583940.87162961,
      "unique_users": 1407671.43666621,
      "pages_per_visit": 4.1138543754393
    },
    {
      "global_rank": 115717,
      "category_rank": 37,
      "domain": "iscar.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 264167.368537178,
      "curr_month_visits": 264167.368537178,
      "unique_users": 104165.386373167,
      "pages_per_visit": 7.91903838970977
    },
    {
      "global_rank": 1147263,
      "category_rank": 38,
      "domain": "merxtrade.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 15747.5477841311,
      "curr_month_visits": 15747.5477841311,
      "unique_users": 7752.57934851339,
      "pages_per_visit": 3.78655467798826
    },
    {
      "global_rank": 119026,
      "category_rank": 38,
      "domain": "napgp.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 401747.411247578,
      "curr_month_visits": 401747.411247578,
      "unique_users": 246140.20952677,
      "pages_per_visit": 3.9235546968124
    },
    {
      "global_rank": 17825,
      "category_rank": 38,
      "domain": "enpal.de",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 5200654.51502463,
      "curr_month_visits": 5200654.51502463,
      "unique_users": 3652345.72272765,
      "pages_per_visit": 1.44241975463261
    },
    {
      "global_rank": 33515,
      "category_rank": 38,
      "domain": "trane.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 2195262.57885299,
      "curr_month_visits": 2195262.57885299,
      "unique_users": 1114527.33011939,
      "pages_per_visit": 3.14434149945324
    },
    {
      "global_rank": 251707,
      "category_rank": 38,
      "domain": "gd.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 146948.343140225,
      "curr_month_visits": 146948.343140225,
      "unique_users": 86812.6540500613,
      "pages_per_visit": 4.47683442712197
    },
    {
      "global_rank": 151385,
      "category_rank": 38,
      "domain": "averydennison.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 317247.049304665,
      "curr_month_visits": 317247.049304665,
      "unique_users": 174186.767649492,
      "pages_per_visit": 2.7886100120018
    },
    {
      "global_rank": 70487,
      "category_rank": 38,
      "domain": "thefarmingforum.co.uk",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 680101.147076284,
      "curr_month_visits": 680101.147076284,
      "unique_users": 269329.735768905,
      "pages_per_visit": 4.00263199781587
    },
    {
      "global_rank": 260223,
      "category_rank": 38,
      "domain": "repurposedmaterialsinc.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 79291.8005321638,
      "curr_month_visits": 79291.8005321638,
      "unique_users": 42692.387116194,
      "pages_per_visit": 7.19900994438244
    },
    {
      "global_rank": 127138,
      "category_rank": 38,
      "domain": "domusweb.it",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 521643.907197963,
      "curr_month_visits": 521643.907197963,
      "unique_users": 311613.356974629,
      "pages_per_visit": 2.00194217267011
    },
    {
      "global_rank": 156384,
      "category_rank": 39,
      "domain": "landefeld.de",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 168179.196197244,
      "curr_month_visits": 168179.196197244,
      "unique_users": 76621.6896485481,
      "pages_per_visit": 9.34858456164269
    },
    {
      "global_rank": 131309,
      "category_rank": 39,
      "domain": "architectsjournal.co.uk",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 521937.143431777,
      "curr_month_visits": 521937.143431777,
      "unique_users": 266406.942331871,
      "pages_per_visit": 1.79363443694047
    },
    {
      "global_rank": 260843,
      "category_rank": 39,
      "domain": "webshiro.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 183746.265056821,
      "curr_month_visits": 183746.265056821,
      "unique_users": 135967.675235241,
      "pages_per_visit": 2.27767814057252
    },
    {
      "global_rank": 71066,
      "category_rank": 39,
      "domain": "husqvarnagroup.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 700671.127189224,
      "curr_month_visits": 700671.127189224,
      "unique_users": 129479.574957857,
      "pages_per_visit": 7.05596834580434
    },
    {
      "global_rank": 252156,
      "category_rank": 39,
      "domain": "ball.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 176703.539751411,
      "curr_month_visits": 176703.539751411,
      "unique_users": 87260.9872783491,
      "pages_per_visit": 3.79571658327671
    },
    {
      "global_rank": 34034,
      "category_rank": 39,
      "domain": "daikin.co.jp",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1645373.24323101,
      "curr_month_visits": 1645373.24323101,
      "unique_users": 860223.216633786,
      "pages_per_visit": 4.92283853134452
    },
    {
      "global_rank": 1215031,
      "category_rank": 39,
      "domain": "radonaway.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 29303.5504730893,
      "curr_month_visits": 29303.5504730893,
      "unique_users": 15155.6100343279,
      "pages_per_visit": 2.66576682562181
    },
    {
      "global_rank": 124234,
      "category_rank": 39,
      "domain": "tmk-group.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 290433.258354534,
      "curr_month_visits": 290433.258354534,
      "unique_users": 62451.6347342257,
      "pages_per_visit": 7.37057010798435
    },
    {
      "global_rank": 18412,
      "category_rank": 39,
      "domain": "osakagas.co.jp",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2892976.92993146,
      "curr_month_visits": 2892976.92993146,
      "unique_users": 1568304.43710187,
      "pages_per_visit": 4.9013356920203
    },
    {
      "global_rank": 34711,
      "category_rank": 40,
      "domain": "membercatalog.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1553849.26716504,
      "curr_month_visits": 1553849.26716504,
      "unique_users": 59248.0092653217,
      "pages_per_visit": 11.2423108789129
    },
    {
      "global_rank": 19002,
      "category_rank": 40,
      "domain": "tohoku-epco.co.jp",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2980042.44411565,
      "curr_month_visits": 2980042.44411565,
      "unique_users": 885119.847061877,
      "pages_per_visit": 4.62991164704784
    },
    {
      "global_rank": 72994,
      "category_rank": 40,
      "domain": "pleinchamp.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1253937.21336534,
      "curr_month_visits": 1253937.21336534,
      "unique_users": 228075.044969051,
      "pages_per_visit": 1.91894242043865
    },
    {
      "global_rank": 129667,
      "category_rank": 40,
      "domain": "mmk.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 225449.855798655,
      "curr_month_visits": 225449.855798655,
      "unique_users": 49208.023459475,
      "pages_per_visit": 13.6837836119379
    },
    {
      "global_rank": 263624,
      "category_rank": 40,
      "domain": "iai.co.il",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 156116.136616626,
      "curr_month_visits": 156116.136616626,
      "unique_users": 79646.4320141269,
      "pages_per_visit": 3.66540667195284
    },
    {
      "global_rank": 1247726,
      "category_rank": 40,
      "domain": "vertexeng.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 29528.4541261619,
      "curr_month_visits": 29528.4541261619,
      "unique_users": 17092.2516913993,
      "pages_per_visit": 1.70885467140519
    },
    {
      "global_rank": 266311,
      "category_rank": 40,
      "domain": "rinnovabili.it",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 209551.392536965,
      "curr_month_visits": 209551.392536965,
      "unique_users": 142158.059330775,
      "pages_per_visit": 1.59223582549623
    },
    {
      "global_rank": 157058,
      "category_rank": 40,
      "domain": "sabic.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 302489.335253098,
      "curr_month_visits": 302489.335253098,
      "unique_users": 150052.943336977,
      "pages_per_visit": 3.11268475060703
    },
    {
      "global_rank": 131376,
      "category_rank": 40,
      "domain": "soloarquitectura.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 466025.439448893,
      "curr_month_visits": 466025.439448893,
      "unique_users": 294618.930410506,
      "pages_per_visit": 1.72161862016575
    },
    {
      "global_rank": 74944,
      "category_rank": 41,
      "domain": "cenyrolnicze.pl",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1035662.49246681,
      "curr_month_visits": 1035662.49246681,
      "unique_users": 413999.755463691,
      "pages_per_visit": 1.71250707859185
    },
    {
      "global_rank": 35233,
      "category_rank": 41,
      "domain": "rs24.ru",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1289700.14021897,
      "curr_month_visits": 1289700.14021897,
      "unique_users": 194488.328249195,
      "pages_per_visit": 10.2389714458571
    },
    {
      "global_rank": 1253438,
      "category_rank": 41,
      "domain": "shop.rpssolarpumps.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 23094.8619784836,
      "curr_month_visits": 23094.8619784836,
      "unique_users": 10879.6278631236,
      "pages_per_visit": 2.48294279048496
    },
    {
      "global_rank": 269569,
      "category_rank": 41,
      "domain": "crrcgc.cc",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 160834.812589222,
      "curr_month_visits": 160834.812589222,
      "unique_users": 80811.2012497127,
      "pages_per_visit": 3.92662813594667
    },
    {
      "global_rank": 133167,
      "category_rank": 41,
      "domain": "chatsworth.org",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 312248.157586363,
      "curr_month_visits": 312248.157586363,
      "unique_users": 197521.617325366,
      "pages_per_visit": 3.34518933581105
    },
    {
      "global_rank": 19129,
      "category_rank": 41,
      "domain": "solaredge.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3584245.52886962,
      "curr_month_visits": 3584245.52886962,
      "unique_users": 687219.033547355,
      "pages_per_visit": 4.371881079724
    },
    {
      "global_rank": 159335,
      "category_rank": 41,
      "domain": "whchem.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 200693.936627645,
      "curr_month_visits": 200693.936627645,
      "unique_users": 35648.3395987187,
      "pages_per_visit": 12.5336189520574
    },
    {
      "global_rank": 131492,
      "category_rank": 41,
      "domain": "butb.by",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 296948.840393673,
      "curr_month_visits": 296948.840393673,
      "unique_users": 37636.6220764085,
      "pages_per_visit": 9.75975587426409
    },
    {
      "global_rank": 273191,
      "category_rank": 41,
      "domain": "haberkorn.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 111314.546357718,
      "curr_month_visits": 111314.546357718,
      "unique_users": 58548.4799540634,
      "pages_per_visit": 4.35089525188544
    },
    {
      "global_rank": 160833,
      "category_rank": 42,
      "domain": "valspar.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 275225.276527859,
      "curr_month_visits": 275225.276527859,
      "unique_users": 158247.782660388,
      "pages_per_visit": 3.97605814390592
    },
    {
      "global_rank": 75475,
      "category_rank": 42,
      "domain": "steffesgroup.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 349074.521493799,
      "curr_month_visits": 349074.521493799,
      "unique_users": 100164.362400916,
      "pages_per_visit": 11.5408110421701
    },
    {
      "global_rank": 131899,
      "category_rank": 42,
      "domain": "omk.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 283427.694928754,
      "curr_month_visits": 283427.694928754,
      "unique_users": 69213.6401665722,
      "pages_per_visit": 17.051977579793
    },
    {
      "global_rank": 1304575,
      "category_rank": 42,
      "domain": "pinchin.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 24321.9352469598,
      "curr_month_visits": 24321.9352469598,
      "unique_users": 13235.0719527088,
      "pages_per_visit": 1.6633202320411
    },
    {
      "global_rank": 279858,
      "category_rank": 42,
      "domain": "pvcfittingsonline.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 186219.521728157,
      "curr_month_visits": 186219.521728157,
      "unique_users": 117316.093532889,
      "pages_per_visit": 1.9524317228638
    },
    {
      "global_rank": 274685,
      "category_rank": 42,
      "domain": "bellhelicopter.net",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 83328.4986751917,
      "curr_month_visits": 83328.4986751917,
      "unique_users": 14976.029013479,
      "pages_per_visit": 9.81628795465529
    },
    {
      "global_rank": 19269,
      "category_rank": 42,
      "domain": "chuden.co.jp",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3346808.24497468,
      "curr_month_visits": 3346808.24497468,
      "unique_users": 1406005.01698252,
      "pages_per_visit": 4.08919960956131
    },
    {
      "global_rank": 141195,
      "category_rank": 42,
      "domain": "arkitera.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 371068.247812036,
      "curr_month_visits": 371068.247812036,
      "unique_users": 147504.500046516,
      "pages_per_visit": 2.82425582272622
    },
    {
      "global_rank": 35236,
      "category_rank": 42,
      "domain": "hdsupplysolutions.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1423106.84542612,
      "curr_month_visits": 1423106.84542612,
      "unique_users": 628904.010672581,
      "pages_per_visit": 6.5273432941026
    },
    {
      "global_rank": 75890,
      "category_rank": 43,
      "domain": "remsl.in",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 516624.993828849,
      "curr_month_visits": 516624.993828849,
      "unique_users": 107320.821165786,
      "pages_per_visit": 7.86477334837093
    },
    {
      "global_rank": 287264,
      "category_rank": 43,
      "domain": "finning.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 149105.157687396,
      "curr_month_visits": 149105.157687396,
      "unique_users": 61056.825001445,
      "pages_per_visit": 3.9715380989512
    },
    {
      "global_rank": 19427,
      "category_rank": 43,
      "domain": "comed.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2774589.70945429,
      "curr_month_visits": 2774589.70945429,
      "unique_users": 1310414.5505025,
      "pages_per_visit": 5.82135257840433
    },
    {
      "global_rank": 275403,
      "category_rank": 43,
      "domain": "careers.ford.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 138006.28214122,
      "curr_month_visits": 138006.28214122,
      "unique_users": 83479.360949571,
      "pages_per_visit": 1.92819164663062
    },
    {
      "global_rank": 153811,
      "category_rank": 43,
      "domain": "siskom.waw.pl",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 468743.331784516,
      "curr_month_visits": 468743.331784516,
      "unique_users": 98925.0711849288,
      "pages_per_visit": 1.73999228712319
    },
    {
      "global_rank": 161058,
      "category_rank": 43,
      "domain": "yara.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 166980.032510951,
      "curr_month_visits": 166980.032510951,
      "unique_users": 76129.3694166537,
      "pages_per_visit": 8.93802693639319
    },
    {
      "global_rank": 35491,
      "category_rank": 43,
      "domain": "farrow-ball.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1468426.25857317,
      "curr_month_visits": 1468426.25857317,
      "unique_users": 775291.560572213,
      "pages_per_visit": 5.06964091777985
    },
    {
      "global_rank": 1325843,
      "category_rank": 43,
      "domain": "utility-technologies.myshopify.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 24683.0108038036,
      "curr_month_visits": 24683.0108038036,
      "unique_users": 9203.94203900426,
      "pages_per_visit": 1.09996174093255
    },
    {
      "global_rank": 132831,
      "category_rank": 43,
      "domain": "angloamerican.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 353188.275036085,
      "curr_month_visits": 353188.275036085,
      "unique_users": 157780.301073643,
      "pages_per_visit": 3.93371338930635
    },
    {
      "global_rank": 164188,
      "category_rank": 44,
      "domain": "laplasturgie.fr",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 214561.044062943,
      "curr_month_visits": 214561.044062943,
      "unique_users": 98591.1432458013,
      "pages_per_visit": 1.86297698858634
    },
    {
      "global_rank": 35541,
      "category_rank": 44,
      "domain": "mscdirect.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1619661.18618069,
      "curr_month_visits": 1619661.18618069,
      "unique_users": 838609.841624516,
      "pages_per_visit": 4.30445196535001
    },
    {
      "global_rank": 133384,
      "category_rank": 44,
      "domain": "metalsupermarkets.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 389428.184221575,
      "curr_month_visits": 389428.184221575,
      "unique_users": 221780.169878475,
      "pages_per_visit": 2.61761844537278
    },
    {
      "global_rank": 20002,
      "category_rank": 44,
      "domain": "dei.gr",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2457081.2970503,
      "curr_month_visits": 2457081.2970503,
      "unique_users": 1065839.85113007,
      "pages_per_visit": 5.60827388589836
    },
    {
      "global_rank": 1326805,
      "category_rank": 44,
      "domain": "acandb.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 32032.7083853459,
      "curr_month_visits": 32032.7083853459,
      "unique_users": 17414.8437563567,
      "pages_per_visit": 2.98961099977207
    },
    {
      "global_rank": 155976,
      "category_rank": 44,
      "domain": "haeahn.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 247973.171891641,
      "curr_month_visits": 247973.171891641,
      "unique_users": 42727.0964445662,
      "pages_per_visit": 11.4581649126495
    },
    {
      "global_rank": 77096,
      "category_rank": 44,
      "domain": "kubotausa.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 636753.71662233,
      "curr_month_visits": 636753.71662233,
      "unique_users": 365897.846279202,
      "pages_per_visit": 3.7990952996278
    },
    {
      "global_rank": 276063,
      "category_rank": 44,
      "domain": "jamco.co.jp",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 113050.660763937,
      "curr_month_visits": 113050.660763937,
      "unique_users": 28193.567064565,
      "pages_per_visit": 8.74178069350915
    },
    {
      "global_rank": 297592,
      "category_rank": 44,
      "domain": "mytapscore.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 139906.069644839,
      "curr_month_visits": 139906.069644839,
      "unique_users": 89646.8384229926,
      "pages_per_visit": 2.01297666345412
    },
    {
      "global_rank": 20065,
      "category_rank": 45,
      "domain": "energa.pl",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2285860.90422475,
      "curr_month_visits": 2285860.90422475,
      "unique_users": 876478.532040774,
      "pages_per_visit": 5.67962056974555
    },
    {
      "global_rank": 280521,
      "category_rank": 45,
      "domain": "diehl.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 153723.459480333,
      "curr_month_visits": 153723.459480333,
      "unique_users": 73822.7887283019,
      "pages_per_visit": 3.75625338640398
    },
    {
      "global_rank": 157917,
      "category_rank": 45,
      "domain": "vmspace.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 271969.670656722,
      "curr_month_visits": 271969.670656722,
      "unique_users": 118514.284661352,
      "pages_per_visit": 4.08886931944037
    },
    {
      "global_rank": 306461,
      "category_rank": 45,
      "domain": "pureaqua.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 137091.992397815,
      "curr_month_visits": 137091.992397815,
      "unique_users": 71446.4417245209,
      "pages_per_visit": 1.6840510394185
    },
    {
      "global_rank": 35903,
      "category_rank": 45,
      "domain": "sika.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 2032674.36311169,
      "curr_month_visits": 2032674.36311169,
      "unique_users": 1173809.18272462,
      "pages_per_visit": 2.71990769258606
    },
    {
      "global_rank": 133520,
      "category_rank": 45,
      "domain": "xplanet.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 141971.645073998,
      "curr_month_visits": 141971.645073998,
      "unique_users": 6844.95139336205,
      "pages_per_visit": 48.8987677907399
    },
    {
      "global_rank": 1345709,
      "category_rank": 45,
      "domain": "wp-systemmodul.ch",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 12118.2083418181,
      "curr_month_visits": 12118.2083418181,
      "unique_users": 4783.80788232923,
      "pages_per_visit": 2.84731093252231
    },
    {
      "global_rank": 164688,
      "category_rank": 45,
      "domain": "ppgpaints.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 295864.400140684,
      "curr_month_visits": 295864.400140684,
      "unique_users": 181680.163847876,
      "pages_per_visit": 3.50412332320639
    },
    {
      "global_rank": 77943,
      "category_rank": 45,
      "domain": "tractorbynet.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1074443.4046883,
      "curr_month_visits": 1074443.4046883,
      "unique_users": 585522.891359811,
      "pages_per_visit": 2.13768646996261
    },
    {
      "global_rank": 36923,
      "category_rank": 46,
      "domain": "grundfos.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1202404.16349975,
      "curr_month_visits": 1202404.16349975,
      "unique_users": 557045.787943304,
      "pages_per_visit": 6.49347406948111
    },
    {
      "global_rank": 1356352,
      "category_rank": 46,
      "domain": "sklep-instalgrunt.pl",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 19858.9618644343,
      "curr_month_visits": 19858.9618644343,
      "unique_users": 10905.7139080142,
      "pages_per_visit": 4.48966330314507
    },
    {
      "global_rank": 135173,
      "category_rank": 46,
      "domain": "mhi.co.jp",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 235890.990551429,
      "curr_month_visits": 235890.990551429,
      "unique_users": 46184.2744768643,
      "pages_per_visit": 12.1188273305153
    },
    {
      "global_rank": 78162,
      "category_rank": 46,
      "domain": "bighaat.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 773110.885844163,
      "curr_month_visits": 773110.885844163,
      "unique_users": 419371.737289447,
      "pages_per_visit": 2.51433729234234
    },
    {
      "global_rank": 20741,
      "category_rank": 46,
      "domain": "centerpointenergy.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2388706.23428724,
      "curr_month_visits": 2388706.23428724,
      "unique_users": 1142079.5716225,
      "pages_per_visit": 5.84956914328527
    },
    {
      "global_rank": 308309,
      "category_rank": 46,
      "domain": "dillonprecision.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 100654.079560456,
      "curr_month_visits": 100654.079560456,
      "unique_users": 47427.9347865464,
      "pages_per_visit": 5.24258698717924
    },
    {
      "global_rank": 165657,
      "category_rank": 46,
      "domain": "nj-reagent.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 268945.150124479,
      "curr_month_visits": 268945.150124479,
      "unique_users": 122644.257093699,
      "pages_per_visit": 2.57925829871099
    },
    {
      "global_rank": 159351,
      "category_rank": 46,
      "domain": "abcb.gov.au",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 373584.706830081,
      "curr_month_visits": 373584.706830081,
      "unique_users": 154556.406850831,
      "pages_per_visit": 3.10455484392268
    },
    {
      "global_rank": 286820,
      "category_rank": 46,
      "domain": "prattwhitney.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 143509.370028825,
      "curr_month_visits": 143509.370028825,
      "unique_users": 73745.8092279869,
      "pages_per_visit": 3.21185325324623
    },
    {
      "global_rank": 21294,
      "category_rank": 47,
      "domain": "uppclonline.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2114014.78187563,
      "curr_month_visits": 2114014.78187563,
      "unique_users": 766697.049079716,
      "pages_per_visit": 8.81468201401942
    },
    {
      "global_rank": 309582,
      "category_rank": 47,
      "domain": "cittametropolitana.ve.it",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 44869.9433833711,
      "curr_month_visits": 44869.9433833711,
      "unique_users": 25686.1247044798,
      "pages_per_visit": 22.2305695558657
    },
    {
      "global_rank": 37471,
      "category_rank": 47,
      "domain": "miratap.co.jp",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 780238.303906857,
      "curr_month_visits": 780238.303906857,
      "unique_users": 281930.388024311,
      "pages_per_visit": 6.53329544581195
    },
    {
      "global_rank": 162496,
      "category_rank": 47,
      "domain": "parametric-architecture.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 362963.16554602,
      "curr_month_visits": 362963.16554602,
      "unique_users": 207296.378671448,
      "pages_per_visit": 1.64990927531502
    },
    {
      "global_rank": 1361632,
      "category_rank": 47,
      "domain": "worldwaterreserve.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 20966.1911587182,
      "curr_month_visits": 20966.1911587182,
      "unique_users": 13058.8061414128,
      "pages_per_visit": 1.66518382838129
    },
    {
      "global_rank": 81164,
      "category_rank": 47,
      "domain": "stihl.de",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 670493.042933129,
      "curr_month_visits": 670493.042933129,
      "unique_users": 416457.692384707,
      "pages_per_visit": 3.65739871515677
    },
    {
      "global_rank": 166412,
      "category_rank": 47,
      "domain": "kirelis.ru",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 245705.361798897,
      "curr_month_visits": 245705.361798897,
      "unique_users": 110024.083959064,
      "pages_per_visit": 4.80306608514998
    },
    {
      "global_rank": 293091,
      "category_rank": 47,
      "domain": "guns.club",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 193555.698161954,
      "curr_month_visits": 193555.698161954,
      "unique_users": 107313.256978287,
      "pages_per_visit": 1.39183675376769
    },
    {
      "global_rank": 137626,
      "category_rank": 47,
      "domain": "jwes.or.jp",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 252137.194727894,
      "curr_month_visits": 252137.194727894,
      "unique_users": 131170.214476081,
      "pages_per_visit": 7.91258183175547
    },
    {
      "global_rank": 137841,
      "category_rank": 48,
      "domain": "alfalaval.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 347711.344028967,
      "curr_month_visits": 347711.344028967,
      "unique_users": 168846.733350081,
      "pages_per_visit": 2.87009951387686
    },
    {
      "global_rank": 21575,
      "category_rank": 48,
      "domain": "pse.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1875017.16442375,
      "curr_month_visits": 1875017.16442375,
      "unique_users": 818604.954408419,
      "pages_per_visit": 3.23929693320079
    },
    {
      "global_rank": 38008,
      "category_rank": 48,
      "domain": "biz-lixil.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1300102.74042556,
      "curr_month_visits": 1300102.74042556,
      "unique_users": 543610.407628296,
      "pages_per_visit": 5.28132244695642
    },
    {
      "global_rank": 171035,
      "category_rank": 48,
      "domain": "akzonobel.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 319241.497842112,
      "curr_month_visits": 319241.497842112,
      "unique_users": 165589.588235693,
      "pages_per_visit": 2.53632495509222
    },
    {
      "global_rank": 162721,
      "category_rank": 48,
      "domain": "urbanfile.org",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 334369.7337127,
      "curr_month_visits": 334369.7337127,
      "unique_users": 166902.527880191,
      "pages_per_visit": 2.08655135506262
    },
    {
      "global_rank": 1371675,
      "category_rank": 48,
      "domain": "everseal.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 36895.3422101488,
      "curr_month_visits": 36895.3422101488,
      "unique_users": 17298.3452932829,
      "pages_per_visit": 1.32921631895116
    },
    {
      "global_rank": 81348,
      "category_rank": 48,
      "domain": "siteone.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 674430.036387415,
      "curr_month_visits": 674430.036387415,
      "unique_users": 371017.942415817,
      "pages_per_visit": 4.77210183884818
    },
    {
      "global_rank": 312860,
      "category_rank": 48,
      "domain": "maps.zh.ch",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 151927.273846575,
      "curr_month_visits": 151927.273846575,
      "unique_users": 53425.4959894909,
      "pages_per_visit": 2.26366095545737
    },
    {
      "global_rank": 301306,
      "category_rank": 48,
      "domain": "norincogroup.com.cn",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 130514.713713945,
      "curr_month_visits": 130514.713713945,
      "unique_users": 67292.2129954389,
      "pages_per_visit": 3.7139579558697
    },
    {
      "global_rank": 301400,
      "category_rank": 49,
      "domain": "mbda-systems.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 153054.89274492,
      "curr_month_visits": 153054.89274492,
      "unique_users": 76895.8153033998,
      "pages_per_visit": 2.4167755617594
    },
    {
      "global_rank": 21910,
      "category_rank": 49,
      "domain": "vbrr.ru",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3289968.15786017,
      "curr_month_visits": 3289968.15786017,
      "unique_users": 1923693.96448257,
      "pages_per_visit": 2.52870895541571
    },
    {
      "global_rank": 162898,
      "category_rank": 49,
      "domain": "archpaper.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 421380.366592106,
      "curr_month_visits": 421380.366592106,
      "unique_users": 258546.867212738,
      "pages_per_visit": 1.87889183402238
    },
    {
      "global_rank": 172477,
      "category_rank": 49,
      "domain": "evonik.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 263174.720629007,
      "curr_month_visits": 263174.720629007,
      "unique_users": 140759.910998264,
      "pages_per_visit": 2.73466673677653
    },
    {
      "global_rank": 324638,
      "category_rank": 49,
      "domain": "northernsafety.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 83519.0833895139,
      "curr_month_visits": 83519.0833895139,
      "unique_users": 48038.326728462,
      "pages_per_visit": 4.30129251887017
    },
    {
      "global_rank": 38065,
      "category_rank": 49,
      "domain": "companycam.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1744103.54565435,
      "curr_month_visits": 1744103.54565435,
      "unique_users": 325078.91826169,
      "pages_per_visit": 4.94882704322773
    },
    {
      "global_rank": 139985,
      "category_rank": 49,
      "domain": "stanki.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 366429.069282006,
      "curr_month_visits": 366429.069282006,
      "unique_users": 216499.563828527,
      "pages_per_visit": 2.69797798525874
    },
    {
      "global_rank": 1383550,
      "category_rank": 49,
      "domain": "drainagedirect.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 22338.3850130289,
      "curr_month_visits": 22338.3850130289,
      "unique_users": 10634.010144645,
      "pages_per_visit": 1.97206378274132
    },
    {
      "global_rank": 85523,
      "category_rank": 49,
      "domain": "sparex.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 513059.376873139,
      "curr_month_visits": 513059.376873139,
      "unique_users": 128478.229175411,
      "pages_per_visit": 7.41226612600622
    },
    {
      "global_rank": 141006,
      "category_rank": 50,
      "domain": "epiroc.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 318424.170681655,
      "curr_month_visits": 318424.170681655,
      "unique_users": 121912.477386101,
      "pages_per_visit": 3.78973191940318
    },
    {
      "global_rank": 164595,
      "category_rank": 50,
      "domain": "somersethouse.org.uk",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 189474.57332225,
      "curr_month_visits": 189474.57332225,
      "unique_users": 104527.35639008,
      "pages_per_visit": 3.30674746650095
    },
    {
      "global_rank": 325678,
      "category_rank": 50,
      "domain": "bevo.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 75918.0061861679,
      "curr_month_visits": 75918.0061861679,
      "unique_users": 36546.5306405892,
      "pages_per_visit": 9.36095402627081
    },
    {
      "global_rank": 1387513,
      "category_rank": 50,
      "domain": "syrius.hu",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 8750.26074093063,
      "curr_month_visits": 8750.26074093063,
      "unique_users": 3350.67708044035,
      "pages_per_visit": 10.2552820620209
    },
    {
      "global_rank": 307493,
      "category_rank": 50,
      "domain": "dassaultfalcon.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 110240.97816167,
      "curr_month_visits": 110240.97816167,
      "unique_users": 51704.4499946038,
      "pages_per_visit": 3.62634278918175
    },
    {
      "global_rank": 38335,
      "category_rank": 50,
      "domain": "houseplans.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1368670.91325224,
      "curr_month_visits": 1368670.91325224,
      "unique_users": 738296.040518307,
      "pages_per_visit": 5.04513580584461
    },
    {
      "global_rank": 85586,
      "category_rank": 50,
      "domain": "agribegri.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 614199.886604188,
      "curr_month_visits": 614199.886604188,
      "unique_users": 292340.509141168,
      "pages_per_visit": 4.69202028123442
    },
    {
      "global_rank": 174129,
      "category_rank": 50,
      "domain": "sk-kaken.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 232399.828766338,
      "curr_month_visits": 232399.828766338,
      "unique_users": 115193.108094812,
      "pages_per_visit": 4.52697567170438
    },
    {
      "global_rank": 22487,
      "category_rank": 50,
      "domain": "engie.be",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1912431.01813109,
      "curr_month_visits": 1912431.01813109,
      "unique_users": 925881.170007599,
      "pages_per_visit": 6.64228773261846
    },
    {
      "global_rank": 1408872,
      "category_rank": 51,
      "domain": "enviroequipment.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 17670.0300148524,
      "curr_month_visits": 17670.0300148524,
      "unique_users": 4367.84510457787,
      "pages_per_visit": 4.73327553563519
    },
    {
      "global_rank": 174715,
      "category_rank": 51,
      "domain": "adama.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 286196.059564102,
      "curr_month_visits": 286196.059564102,
      "unique_users": 151189.395509817,
      "pages_per_visit": 2.21645252588976
    },
    {
      "global_rank": 141263,
      "category_rank": 51,
      "domain": "riotinto.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 361538.327240052,
      "curr_month_visits": 361538.327240052,
      "unique_users": 174722.682194091,
      "pages_per_visit": 3.0696284955862
    },
    {
      "global_rank": 89285,
      "category_rank": 51,
      "domain": "nextlot.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 504445.53585719,
      "curr_month_visits": 504445.53585719,
      "unique_users": 139265.028025318,
      "pages_per_visit": 6.54061627228855
    },
    {
      "global_rank": 165572,
      "category_rank": 51,
      "domain": "wawel.krakow.pl",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 134823.130319621,
      "curr_month_visits": 134823.130319621,
      "unique_users": 75472.4754870922,
      "pages_per_visit": 4.59906832555606
    },
    {
      "global_rank": 349580,
      "category_rank": 51,
      "domain": "echoland-plus.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 86592.7937076468,
      "curr_month_visits": 86592.7937076468,
      "unique_users": 21952.8406995854,
      "pages_per_visit": 4.80563342293666
    },
    {
      "global_rank": 307615,
      "category_rank": 51,
      "domain": "hanwhasystems.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 119631.340688213,
      "curr_month_visits": 119631.340688213,
      "unique_users": 25846.8646492022,
      "pages_per_visit": 5.91982234337417
    },
    {
      "global_rank": 38674,
      "category_rank": 51,
      "domain": "ichijo.co.jp",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1517252.93409433,
      "curr_month_visits": 1517252.93409433,
      "unique_users": 348891.047502409,
      "pages_per_visit": 5.69816431924502
    },
    {
      "global_rank": 22516,
      "category_rank": 51,
      "domain": "iberdrola.es",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2595901.20642531,
      "curr_month_visits": 2595901.20642531,
      "unique_users": 1169625.62143135,
      "pages_per_visit": 4.1303803045119
    },
    {
      "global_rank": 89945,
      "category_rank": 52,
      "domain": "klaravik.dk",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 456975.85544369,
      "curr_month_visits": 456975.85544369,
      "unique_users": 113353.147039438,
      "pages_per_visit": 8.51879605027595
    },
    {
      "global_rank": 22774,
      "category_rank": 52,
      "domain": "agl.com.au",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2028240.21059102,
      "curr_month_visits": 2028240.21059102,
      "unique_users": 960856.117606607,
      "pages_per_visit": 6.37682286927718
    },
    {
      "global_rank": 321123,
      "category_rank": 52,
      "domain": "airbushelicopters.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 119406.79240804,
      "curr_month_visits": 119406.79240804,
      "unique_users": 31808.208784212,
      "pages_per_visit": 4.45392098719014
    },
    {
      "global_rank": 1410729,
      "category_rank": 52,
      "domain": "puroclean.ca",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 24111.5641657662,
      "curr_month_visits": 24111.5641657662,
      "unique_users": 12411.6528493384,
      "pages_per_visit": 2.0292161241965
    },
    {
      "global_rank": 143703,
      "category_rank": 52,
      "domain": "nucor.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 270820.1854364,
      "curr_month_visits": 270820.1854364,
      "unique_users": 117384.858314505,
      "pages_per_visit": 3.69619617942967
    },
    {
      "global_rank": 38751,
      "category_rank": 52,
      "domain": "up.codes",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1565585.25876066,
      "curr_month_visits": 1565585.25876066,
      "unique_users": 677976.31794146,
      "pages_per_visit": 4.1973746486824
    },
    {
      "global_rank": 174776,
      "category_rank": 52,
      "domain": "mitsubishichem-hd.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 322376.128098514,
      "curr_month_visits": 322376.128098514,
      "unique_users": 44064.906901999,
      "pages_per_visit": 1.94031588767107
    },
    {
      "global_rank": 349848,
      "category_rank": 52,
      "domain": "directindustry.de",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 129681.654591969,
      "curr_month_visits": 129681.654591969,
      "unique_users": 94990.5042177444,
      "pages_per_visit": 2.12041736133718
    },
    {
      "global_rank": 166461,
      "category_rank": 52,
      "domain": "firstinarchitecture.co.uk",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 337255.025157775,
      "curr_month_visits": 337255.025157775,
      "unique_users": 182680.116935188,
      "pages_per_visit": 1.91436039718096
    },
    {
      "global_rank": 22872,
      "category_rank": 53,
      "domain": "bp.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 3056664.63933328,
      "curr_month_visits": 3056664.63933328,
      "unique_users": 2038908.06024246,
      "pages_per_visit": 3.20682641618009
    },
    {
      "global_rank": 167965,
      "category_rank": 53,
      "domain": "monograph.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 252807.968212411,
      "curr_month_visits": 252807.968212411,
      "unique_users": 57875.3538366846,
      "pages_per_visit": 5.75522444687543
    },
    {
      "global_rank": 91442,
      "category_rank": 53,
      "domain": "fwi.co.uk",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 712577.401346748,
      "curr_month_visits": 712577.401346748,
      "unique_users": 386662.840095064,
      "pages_per_visit": 1.71714489193317
    },
    {
      "global_rank": 366798,
      "category_rank": 53,
      "domain": "royalhaskoningdhv.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 101339.309416543,
      "curr_month_visits": 101339.309416543,
      "unique_users": 50829.6129229362,
      "pages_per_visit": 2.56779739074718
    },
    {
      "global_rank": 174864,
      "category_rank": 53,
      "domain": "loctiteproducts.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 363990.452593309,
      "curr_month_visits": 363990.452593309,
      "unique_users": 238099.006147888,
      "pages_per_visit": 1.96651272143545
    },
    {
      "global_rank": 325055,
      "category_rank": 53,
      "domain": "avic.com.cn",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 136498.038606068,
      "curr_month_visits": 136498.038606068,
      "unique_users": 74816.8829400433,
      "pages_per_visit": 1.51314255668094
    },
    {
      "global_rank": 1459029,
      "category_rank": 53,
      "domain": "commercialfiltrationsupply.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 30810.7408200251,
      "curr_month_visits": 30810.7408200251,
      "unique_users": 16805.6718663044,
      "pages_per_visit": 1.41242472598993
    },
    {
      "global_rank": 39153,
      "category_rank": 53,
      "domain": "tn.ru",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1450961.50271418,
      "curr_month_visits": 1450961.50271418,
      "unique_users": 636890.428667612,
      "pages_per_visit": 4.21306450058642
    },
    {
      "global_rank": 143787,
      "category_rank": 53,
      "domain": "msasafety.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 305973.476169845,
      "curr_month_visits": 305973.476169845,
      "unique_users": 169080.665842234,
      "pages_per_visit": 3.69699364148852
    },
    {
      "global_rank": 146113,
      "category_rank": 54,
      "domain": "evraz.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 268048.289992315,
      "curr_month_visits": 268048.289992315,
      "unique_users": 79986.1048784115,
      "pages_per_visit": 5.88866168963809
    },
    {
      "global_rank": 1462513,
      "category_rank": 54,
      "domain": "heitzmann.ch",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 8819.77428866051,
      "curr_month_visits": 8819.77428866051,
      "unique_users": 4629.89443973223,
      "pages_per_visit": 3.31986556220854
    },
    {
      "global_rank": 368357,
      "category_rank": 54,
      "domain": "ciser.com.br",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 122900.11626331,
      "curr_month_visits": 122900.11626331,
      "unique_users": 39926.3269207434,
      "pages_per_visit": 4.6996448625583
    },
    {
      "global_rank": 174096,
      "category_rank": 54,
      "domain": "architectandinteriorsindia.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 358414.311204265,
      "curr_month_visits": 358414.311204265,
      "unique_users": 211461.128806963,
      "pages_per_visit": 1.58743583485008
    },
    {
      "global_rank": 22878,
      "category_rank": 54,
      "domain": "coned.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2458301.53648351,
      "curr_month_visits": 2458301.53648351,
      "unique_users": 1275528.0027344,
      "pages_per_visit": 4.72730002787297
    },
    {
      "global_rank": 175239,
      "category_rank": 54,
      "domain": "huafeng.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 175256.235007724,
      "curr_month_visits": 175256.235007724,
      "unique_users": 14001.9016266288,
      "pages_per_visit": 14.3963873433835
    },
    {
      "global_rank": 331094,
      "category_rank": 54,
      "domain": "airpowerinc.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 122104.679118018,
      "curr_month_visits": 122104.679118018,
      "unique_users": 40975.6133487988,
      "pages_per_visit": 3.37207759783741
    },
    {
      "global_rank": 92316,
      "category_rank": 54,
      "domain": "agroads.com.ar",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 593241.960571322,
      "curr_month_visits": 593241.960571322,
      "unique_users": 165157.282124672,
      "pages_per_visit": 3.87109883001545
    },
    {
      "global_rank": 39570,
      "category_rank": 54,
      "domain": "ahlsell.se",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1176448.82595489,
      "curr_month_visits": 1176448.82595489,
      "unique_users": 408261.020599575,
      "pages_per_visit": 6.60121805608992
    },
    {
      "global_rank": 146945,
      "category_rank": 55,
      "domain": "nornik.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 236597.26023613,
      "curr_month_visits": 236597.26023613,
      "unique_users": 64884.5388401782,
      "pages_per_visit": 8.04221478745171
    },
    {
      "global_rank": 175550,
      "category_rank": 55,
      "domain": "bond.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 203166.779647861,
      "curr_month_visits": 203166.779647861,
      "unique_users": 135671.375778913,
      "pages_per_visit": 5.21781632893121
    },
    {
      "global_rank": 39637,
      "category_rank": 55,
      "domain": "regione.liguria.it",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1676370.65303983,
      "curr_month_visits": 1676370.65303983,
      "unique_users": 570168.933767761,
      "pages_per_visit": 4.525430796072
    },
    {
      "global_rank": 92708,
      "category_rank": 55,
      "domain": "baywa.de",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 564940.329318818,
      "curr_month_visits": 564940.329318818,
      "unique_users": 337540.354282497,
      "pages_per_visit": 4.04022573000687
    },
    {
      "global_rank": 382120,
      "category_rank": 55,
      "domain": "cejn.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 107265.823682846,
      "curr_month_visits": 107265.823682846,
      "unique_users": 54660.0915860183,
      "pages_per_visit": 1.89636792606067
    },
    {
      "global_rank": 1532527,
      "category_rank": 55,
      "domain": "westlakepipe.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 24357.1097251849,
      "curr_month_visits": 24357.1097251849,
      "unique_users": 12813.2373257295,
      "pages_per_visit": 2.93873113933712
    },
    {
      "global_rank": 175562,
      "category_rank": 55,
      "domain": "biad.com.cn",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 199806.03073834,
      "curr_month_visits": 199806.03073834,
      "unique_users": 85230.645738897,
      "pages_per_visit": 2.82850007676979
    },
    {
      "global_rank": 23964,
      "category_rank": 55,
      "domain": "nationalgridus.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2775989.32246517,
      "curr_month_visits": 2775989.32246517,
      "unique_users": 1593262.97787354,
      "pages_per_visit": 2.64062472911294
    },
    {
      "global_rank": 331278,
      "category_rank": 55,
      "domain": "etprf.ru",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 64805.64848128,
      "curr_month_visits": 64805.64848128,
      "unique_users": 17834.5251614477,
      "pages_per_visit": 8.82167269769902
    },
    {
      "global_rank": 1543007,
      "category_rank": 56,
      "domain": "pumpsupermarket.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 18511.5454733639,
      "curr_month_visits": 18511.5454733639,
      "unique_users": 9506.01162990503,
      "pages_per_visit": 1.49976106264052
    },
    {
      "global_rank": 333190,
      "category_rank": 56,
      "domain": "moog.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 131921.706312691,
      "curr_month_visits": 131921.706312691,
      "unique_users": 71160.2269722153,
      "pages_per_visit": 2.42226059230039
    },
    {
      "global_rank": 388745,
      "category_rank": 56,
      "domain": "investprojects.info",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 95313.3532705062,
      "curr_month_visits": 95313.3532705062,
      "unique_users": 58410.5376424433,
      "pages_per_visit": 2.40560777396271
    },
    {
      "global_rank": 24273,
      "category_rank": 56,
      "domain": "enbridgegas.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2049917.80885837,
      "curr_month_visits": 2049917.80885837,
      "unique_users": 1151758.38424137,
      "pages_per_visit": 4.57732249789167
    },
    {
      "global_rank": 92928,
      "category_rank": 56,
      "domain": "kubota.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 411972.482529197,
      "curr_month_visits": 411972.482529197,
      "unique_users": 103268.535632062,
      "pages_per_visit": 7.75588012091464
    },
    {
      "global_rank": 183027,
      "category_rank": 56,
      "domain": "severnaya.ru",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 235238.430499758,
      "curr_month_visits": 235238.430499758,
      "unique_users": 106361.499513767,
      "pages_per_visit": 3.07577122417083
    },
    {
      "global_rank": 40877,
      "category_rank": 56,
      "domain": "aica.co.jp",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 982207.850277561,
      "curr_month_visits": 982207.850277561,
      "unique_users": 377808.55174678,
      "pages_per_visit": 8.02682226892821
    },
    {
      "global_rank": 176672,
      "category_rank": 56,
      "domain": "forumscuole.it",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 84034.6669731288,
      "curr_month_visits": 84034.6669731288,
      "unique_users": 49808.1076820583,
      "pages_per_visit": 2.90398883124844
    },
    {
      "global_rank": 147408,
      "category_rank": 56,
      "domain": "shi.co.jp",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 260516.749003025,
      "curr_month_visits": 260516.749003025,
      "unique_users": 114322.95558641,
      "pages_per_visit": 5.92777929294191
    },
    {
      "global_rank": 179086,
      "category_rank": 57,
      "domain": "rostgroup.ru",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 123762.956256806,
      "curr_month_visits": 123762.956256806,
      "unique_users": 57884.5943261503,
      "pages_per_visit": 2.58872712860042
    },
    {
      "global_rank": 1545645,
      "category_rank": 57,
      "domain": "alamflora.com.my",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 11251.5381118217,
      "curr_month_visits": 11251.5381118217,
      "unique_users": 3805.07334813021,
      "pages_per_visit": 4.17568925109981
    },
    {
      "global_rank": 183929,
      "category_rank": 57,
      "domain": "iqsdirectory.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 289560.53927533,
      "curr_month_visits": 289560.53927533,
      "unique_users": 171948.233663505,
      "pages_per_visit": 1.787723058457
    },
    {
      "global_rank": 338175,
      "category_rank": 57,
      "domain": "fincantieri.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 92231.9776075764,
      "curr_month_visits": 92231.9776075764,
      "unique_users": 52308.0432023315,
      "pages_per_visit": 4.16688827142308
    },
    {
      "global_rank": 94434,
      "category_rank": 57,
      "domain": "sakata-tsushin.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 1008489.28914858,
      "curr_month_visits": 1008489.28914858,
      "unique_users": 587931.851371128,
      "pages_per_visit": 1.50760191735933
    },
    {
      "global_rank": 24452,
      "category_rank": 57,
      "domain": "tylerportico.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2577374.45405601,
      "curr_month_visits": 2577374.45405601,
      "unique_users": 1204255.40662958,
      "pages_per_visit": 3.48313102541547
    },
    {
      "global_rank": 395264,
      "category_rank": 57,
      "domain": "norgren.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 117387.263864297,
      "curr_month_visits": 117387.263864297,
      "unique_users": 59956.3137858769,
      "pages_per_visit": 2.59411663636885
    },
    {
      "global_rank": 148272,
      "category_rank": 57,
      "domain": "metso.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 358319.362853414,
      "curr_month_visits": 358319.362853414,
      "unique_users": 168846.849209864,
      "pages_per_visit": 2.72629591636782
    },
    {
      "global_rank": 40915,
      "category_rank": 57,
      "domain": "jacic.or.jp",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 652747.37094416,
      "curr_month_visits": 652747.37094416,
      "unique_users": 205692.025151146,
      "pages_per_visit": 21.1044597432306
    },
    {
      "global_rank": 96224,
      "category_rank": 58,
      "domain": "terre-net.fr",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 722595.973726002,
      "curr_month_visits": 722595.973726002,
      "unique_users": 257295.630364702,
      "pages_per_visit": 2.05181784806994
    },
    {
      "global_rank": 185841,
      "category_rank": 58,
      "domain": "fukuvi.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 197675.97406401,
      "curr_month_visits": 197675.97406401,
      "unique_users": 112717.073726585,
      "pages_per_visit": 5.99250720987211
    },
    {
      "global_rank": 351538,
      "category_rank": 58,
      "domain": "wbparts.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 130958.170650179,
      "curr_month_visits": 130958.170650179,
      "unique_users": 66130.5356396307,
      "pages_per_visit": 2.06400726519719
    },
    {
      "global_rank": 395634,
      "category_rank": 58,
      "domain": "horizoncableinc.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 74404.7000244965,
      "curr_month_visits": 74404.7000244965,
      "unique_users": 11236.9531618767,
      "pages_per_visit": 13.4487877362718
    },
    {
      "global_rank": 1564060,
      "category_rank": 58,
      "domain": "bluonics.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 14538.7289768122,
      "curr_month_visits": 14538.7289768122,
      "unique_users": 8245.40797302062,
      "pages_per_visit": 2.51735672693913
    },
    {
      "global_rank": 40934,
      "category_rank": 58,
      "domain": "ultratechcement.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 2048523.05934698,
      "curr_month_visits": 2048523.05934698,
      "unique_users": 1284143.19876258,
      "pages_per_visit": 1.50086652447311
    },
    {
      "global_rank": 25293,
      "category_rank": 58,
      "domain": "light.com.br",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2310162.10976074,
      "curr_month_visits": 2310162.10976074,
      "unique_users": 1054540.43523059,
      "pages_per_visit": 4.34120973081123
    },
    {
      "global_rank": 180940,
      "category_rank": 58,
      "domain": "esbnyc.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 344603.289179388,
      "curr_month_visits": 344603.289179388,
      "unique_users": 214277.593832187,
      "pages_per_visit": 2.03816874793448
    },
    {
      "global_rank": 149712,
      "category_rank": 58,
      "domain": "cncmagazine.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 281560.48682257,
      "curr_month_visits": 281560.48682257,
      "unique_users": 91867.3737537791,
      "pages_per_visit": 4.40248255881297
    },
    {
      "global_rank": 402865,
      "category_rank": 59,
      "domain": "obi.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 115955.415962812,
      "curr_month_visits": 115955.415962812,
      "unique_users": 77858.3642162816,
      "pages_per_visit": 2.1514675385304
    },
    {
      "global_rank": 353287,
      "category_rank": 59,
      "domain": "fmv.se",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 73475.8284658221,
      "curr_month_visits": 73475.8284658221,
      "unique_users": 35000.0296507455,
      "pages_per_visit": 4.24883555611228
    },
    {
      "global_rank": 25519,
      "category_rank": 59,
      "domain": "kepco.co.kr",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2316505.95669679,
      "curr_month_visits": 2316505.95669679,
      "unique_users": 1200746.20013648,
      "pages_per_visit": 4.68175130074316
    },
    {
      "global_rank": 186223,
      "category_rank": 59,
      "domain": "lgchem.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 208954.230227737,
      "curr_month_visits": 208954.230227737,
      "unique_users": 87471.0891436994,
      "pages_per_visit": 3.44048910505269
    },
    {
      "global_rank": 184904,
      "category_rank": 59,
      "domain": "nts.org.uk",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 303942.184492489,
      "curr_month_visits": 303942.184492489,
      "unique_users": 180263.765562269,
      "pages_per_visit": 2.87335404349882
    },
    {
      "global_rank": 96960,
      "category_rank": 59,
      "domain": "greentractortalk.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 555842.159985505,
      "curr_month_visits": 555842.159985505,
      "unique_users": 249612.939279016,
      "pages_per_visit": 3.56629362150249
    },
    {
      "global_rank": 1594634,
      "category_rank": 59,
      "domain": "muqawlat.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 26794.2029347032,
      "curr_month_visits": 26794.2029347032,
      "unique_users": 13033.8306691207,
      "pages_per_visit": 2.86140605318952
    },
    {
      "global_rank": 150105,
      "category_rank": 59,
      "domain": "tsubakimoto.co.jp",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 206901.610830297,
      "curr_month_visits": 206901.610830297,
      "unique_users": 81964.5675083802,
      "pages_per_visit": 9.21963636219098
    },
    {
      "global_rank": 41322,
      "category_rank": 59,
      "domain": "liebherr.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1295343.03908279,
      "curr_month_visits": 1295343.03908279,
      "unique_users": 728267.208567577,
      "pages_per_visit": 4.04519833491764
    },
    {
      "global_rank": 1619541,
      "category_rank": 60,
      "domain": "rainharvestingsupplies.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 15730.7524965906,
      "curr_month_visits": 15730.7524965906,
      "unique_users": 8628.06530822002,
      "pages_per_visit": 2.64249131967265
    },
    {
      "global_rank": 353518,
      "category_rank": 60,
      "domain": "mcfarlaneaviation.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 96734.6422268166,
      "curr_month_visits": 96734.6422268166,
      "unique_users": 32248.4725472191,
      "pages_per_visit": 3.35928614070458
    },
    {
      "global_rank": 186401,
      "category_rank": 60,
      "domain": "soulbrain.co.kr",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 91267.0576186898,
      "curr_month_visits": 91267.0576186898,
      "unique_users": 13687.2399275915,
      "pages_per_visit": 43.2440329548646
    },
    {
      "global_rank": 25860,
      "category_rank": 60,
      "domain": "eskom.co.za",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1510124.86800292,
      "curr_month_visits": 1510124.86800292,
      "unique_users": 687025.415680874,
      "pages_per_visit": 5.13802066706661
    },
    {
      "global_rank": 97461,
      "category_rank": 60,
      "domain": "arboristsite.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 781494.043819327,
      "curr_month_visits": 781494.043819327,
      "unique_users": 397635.043970254,
      "pages_per_visit": 1.96873471981661
    },
    {
      "global_rank": 41520,
      "category_rank": 60,
      "domain": "tamahome.jp",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1290801.77360301,
      "curr_month_visits": 1290801.77360301,
      "unique_users": 430942.464316599,
      "pages_per_visit": 4.73532203617269
    },
    {
      "global_rank": 150716,
      "category_rank": 60,
      "domain": "snkc.co.jp",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 123489.95140972,
      "curr_month_visits": 123489.95140972,
      "unique_users": 7667.88828870082,
      "pages_per_visit": 41.4318811542772
    },
    {
      "global_rank": 188330,
      "category_rank": 60,
      "domain": "novatr.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 279701.81549684,
      "curr_month_visits": 279701.81549684,
      "unique_users": 138022.978822448,
      "pages_per_visit": 2.0735971998985
    },
    {
      "global_rank": 416379,
      "category_rank": 60,
      "domain": "homag.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 73782.9705268652,
      "curr_month_visits": 73782.9705268652,
      "unique_users": 38374.145004408,
      "pages_per_visit": 2.82019927857228
    },
    {
      "global_rank": 188699,
      "category_rank": 61,
      "domain": "amberbook.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 196008.610633041,
      "curr_month_visits": 196008.610633041,
      "unique_users": 25548.635974057,
      "pages_per_visit": 11.2365758933287
    },
    {
      "global_rank": 98883,
      "category_rank": 61,
      "domain": "equipmenttrader.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 551887.338942091,
      "curr_month_visits": 551887.338942091,
      "unique_users": 352131.807368534,
      "pages_per_visit": 2.77207132326554
    },
    {
      "global_rank": 418540,
      "category_rank": 61,
      "domain": "fortlev.com.br",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 107051.414809506,
      "curr_month_visits": 107051.414809506,
      "unique_users": 71510.3829243012,
      "pages_per_visit": 2.59641555542491
    },
    {
      "global_rank": 151979,
      "category_rank": 61,
      "domain": "bashrts-rb.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 248320.612456024,
      "curr_month_visits": 248320.612456024,
      "unique_users": 122387.765473256,
      "pages_per_visit": 4.27098982383336
    },
    {
      "global_rank": 360269,
      "category_rank": 61,
      "domain": "cetc.com.cn",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 131831.607696184,
      "curr_month_visits": 131831.607696184,
      "unique_users": 81499.1754637552,
      "pages_per_visit": 3.60942218099852
    },
    {
      "global_rank": 1637188,
      "category_rank": 61,
      "domain": "mkhardware.com.my",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 34323.3293579015,
      "curr_month_visits": 34323.3293579015,
      "unique_users": 13319.8775663232,
      "pages_per_visit": 1.86112437096726
    },
    {
      "global_rank": 186456,
      "category_rank": 61,
      "domain": "kccworld.co.kr",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 201038.68759021,
      "curr_month_visits": 201038.68759021,
      "unique_users": 62829.1908520898,
      "pages_per_visit": 5.41695126510039
    },
    {
      "global_rank": 41952,
      "category_rank": 61,
      "domain": "ctx.co.jp",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1017163.98771449,
      "curr_month_visits": 1017163.98771449,
      "unique_users": 116155.900188906,
      "pages_per_visit": 9.11838658870694
    },
    {
      "global_rank": 26125,
      "category_rank": 61,
      "domain": "yonden.co.jp",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1556852.29332281,
      "curr_month_visits": 1556852.29332281,
      "unique_users": 385061.195271617,
      "pages_per_visit": 7.06164604573729
    },
    {
      "global_rank": 192987,
      "category_rank": 62,
      "domain": "arch2o.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 264589.656356305,
      "curr_month_visits": 264589.656356305,
      "unique_users": 130660.903251154,
      "pages_per_visit": 1.91293812685217
    },
    {
      "global_rank": 1668652,
      "category_rank": 62,
      "domain": "complete-water.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 16159.9045621723,
      "curr_month_visits": 16159.9045621723,
      "unique_users": 7515.18630222384,
      "pages_per_visit": 1.52801831043211
    },
    {
      "global_rank": 26367,
      "category_rank": 62,
      "domain": "enphaseenergy.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2848673.24794681,
      "curr_month_visits": 2848673.24794681,
      "unique_users": 431343.7480666,
      "pages_per_visit": 3.82090181839597
    },
    {
      "global_rank": 42636,
      "category_rank": 62,
      "domain": "crcc.cn",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1339466.388126,
      "curr_month_visits": 1339466.388126,
      "unique_users": 157994.539406244,
      "pages_per_visit": 4.14877064914983
    },
    {
      "global_rank": 418992,
      "category_rank": 62,
      "domain": "wood.ru",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 99571.7591468826,
      "curr_month_visits": 99571.7591468826,
      "unique_users": 51016.3225725637,
      "pages_per_visit": 2.91052581409138
    },
    {
      "global_rank": 187091,
      "category_rank": 62,
      "domain": "lanxess.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 168290.844145521,
      "curr_month_visits": 168290.844145521,
      "unique_users": 71694.3198895951,
      "pages_per_visit": 6.13383465498721
    },
    {
      "global_rank": 99255,
      "category_rank": 62,
      "domain": "geoportail-urbanisme.gouv.fr",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 244208.958887411,
      "curr_month_visits": 244208.958887411,
      "unique_users": 111548.396356876,
      "pages_per_visit": 13.148478352414
    },
    {
      "global_rank": 364004,
      "category_rank": 62,
      "domain": "bpk-spb.ru",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 83728.0447539762,
      "curr_month_visits": 83728.0447539762,
      "unique_users": 9036.71907296051,
      "pages_per_visit": 16.4940722446522
    },
    {
      "global_rank": 152692,
      "category_rank": 62,
      "domain": "kobelco.co.jp",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 236690.167701487,
      "curr_month_visits": 236690.167701487,
      "unique_users": 113761.517788261,
      "pages_per_visit": 4.61753716452871
    },
    {
      "global_rank": 188778,
      "category_rank": 63,
      "domain": "kanto.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 220246.413588723,
      "curr_month_visits": 220246.413588723,
      "unique_users": 92824.7550722372,
      "pages_per_visit": 4.69809728185985
    },
    {
      "global_rank": 364739,
      "category_rank": 63,
      "domain": "elbitsystems.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 118435.794355635,
      "curr_month_visits": 118435.794355635,
      "unique_users": 63759.6983864719,
      "pages_per_visit": 2.26598876668861
    },
    {
      "global_rank": 425167,
      "category_rank": 63,
      "domain": "toptank.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 31051.6496357945,
      "curr_month_visits": 31051.6496357945,
      "unique_users": 13979.9635609718,
      "pages_per_visit": 4.8511128445979
    },
    {
      "global_rank": 99377,
      "category_rank": 63,
      "domain": "farmprogress.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 659571.764435572,
      "curr_month_visits": 659571.764435572,
      "unique_users": 385264.410579257,
      "pages_per_visit": 1.58240277902421
    },
    {
      "global_rank": 43068,
      "category_rank": 63,
      "domain": "iperceramica.it",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1157437.5970931,
      "curr_month_visits": 1157437.5970931,
      "unique_users": 646833.847259705,
      "pages_per_visit": 4.52742785297839
    },
    {
      "global_rank": 26387,
      "category_rank": 63,
      "domain": "enea.pl",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2043785.40337882,
      "curr_month_visits": 2043785.40337882,
      "unique_users": 799348.613038074,
      "pages_per_visit": 4.21949796072658
    },
    {
      "global_rank": 199604,
      "category_rank": 63,
      "domain": "mooool.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 172421.960433148,
      "curr_month_visits": 172421.960433148,
      "unique_users": 63377.3534326288,
      "pages_per_visit": 6.30072821236631
    },
    {
      "global_rank": 153483,
      "category_rank": 63,
      "domain": "minmetals.com.cn",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 338123.295006624,
      "curr_month_visits": 338123.295006624,
      "unique_users": 95995.1719863188,
      "pages_per_visit": 5.77675835969934
    },
    {
      "global_rank": 1696549,
      "category_rank": 63,
      "domain": "pine-environmental.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 20672.9132908798,
      "curr_month_visits": 20672.9132908798,
      "unique_users": 11126.999762602,
      "pages_per_visit": 2.29984084376908
    },
    {
      "global_rank": 154019,
      "category_rank": 64,
      "domain": "oegussa.at",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 428654.871235017,
      "curr_month_visits": 428654.871235017,
      "unique_users": 75954.7772138523,
      "pages_per_visit": 2.23930086707701
    },
    {
      "global_rank": 26414,
      "category_rank": 64,
      "domain": "sinopec.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1500259.85435935,
      "curr_month_visits": 1500259.85435935,
      "unique_users": 372584.91223093,
      "pages_per_visit": 7.72396498063109
    },
    {
      "global_rank": 43252,
      "category_rank": 64,
      "domain": "njss.info",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 860700.288655779,
      "curr_month_visits": 860700.288655779,
      "unique_users": 421962.603706214,
      "pages_per_visit": 9.34136942595175
    },
    {
      "global_rank": 189189,
      "category_rank": 64,
      "domain": "lubrizol.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 268449.892998909,
      "curr_month_visits": 268449.892998909,
      "unique_users": 120882.697181644,
      "pages_per_visit": 2.01374077526108
    },
    {
      "global_rank": 1713665,
      "category_rank": 64,
      "domain": "enduramaxx.co.uk",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 26866.5218428934,
      "curr_month_visits": 26866.5218428934,
      "unique_users": 12887.8988847632,
      "pages_per_visit": 1.87649514322576
    },
    {
      "global_rank": 366146,
      "category_rank": 64,
      "domain": "mtu.de",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 100254.196103126,
      "curr_month_visits": 100254.196103126,
      "unique_users": 51509.8065837723,
      "pages_per_visit": 2.57837591810979
    },
    {
      "global_rank": 200992,
      "category_rank": 64,
      "domain": "architectureau.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 250768.556863334,
      "curr_month_visits": 250768.556863334,
      "unique_users": 124317.561711196,
      "pages_per_visit": 3.01195734844212
    },
    {
      "global_rank": 426290,
      "category_rank": 64,
      "domain": "dawsonprecision.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 67633.0338507282,
      "curr_month_visits": 67633.0338507282,
      "unique_users": 39752.1710982125,
      "pages_per_visit": 3.87374631596105
    },
    {
      "global_rank": 99403,
      "category_rank": 64,
      "domain": "techniekwebshop.nl",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 491933.874923467,
      "curr_month_visits": 491933.874923467,
      "unique_users": 305410.12359636,
      "pages_per_visit": 3.17593456942683
    },
    {
      "global_rank": 203630,
      "category_rank": 65,
      "domain": "architectmagazine.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 293611.12233327,
      "curr_month_visits": 293611.12233327,
      "unique_users": 179619.768835686,
      "pages_per_visit": 1.50861255515605
    },
    {
      "global_rank": 1719645,
      "category_rank": 65,
      "domain": "waterlinetechnologies.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 14462.6515716074,
      "curr_month_visits": 14462.6515716074,
      "unique_users": 7481.34468004684,
      "pages_per_visit": 2.59668257558074
    },
    {
      "global_rank": 433767,
      "category_rank": 65,
      "domain": "lowtechmagazine.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 104548.880212948,
      "curr_month_visits": 104548.880212948,
      "unique_users": 43444.6533120022,
      "pages_per_visit": 2.27834408470761
    },
    {
      "global_rank": 368005,
      "category_rank": 65,
      "domain": "campsystems.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 78849.8678638591,
      "curr_month_visits": 78849.8678638591,
      "unique_users": 17815.6371203627,
      "pages_per_visit": 6.90740872570424
    },
    {
      "global_rank": 190968,
      "category_rank": 65,
      "domain": "4ts.it",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 224811.073386195,
      "curr_month_visits": 224811.073386195,
      "unique_users": 34455.6749532142,
      "pages_per_visit": 5.55291203363186
    },
    {
      "global_rank": 101456,
      "category_rank": 65,
      "domain": "grube.de",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 429410.621609723,
      "curr_month_visits": 429410.621609723,
      "unique_users": 277849.564782834,
      "pages_per_visit": 3.94439260082083
    },
    {
      "global_rank": 154219,
      "category_rank": 65,
      "domain": "kuzcsm.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 320898.934501976,
      "curr_month_visits": 320898.934501976,
      "unique_users": 9532.69464383801,
      "pages_per_visit": 6.65685183632286
    },
    {
      "global_rank": 43665,
      "category_rank": 65,
      "domain": "protechskillsinstitute.org",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 625599.588135301,
      "curr_month_visits": 625599.588135301,
      "unique_users": 68377.096843754,
      "pages_per_visit": 32.6935990305157
    },
    {
      "global_rank": 26533,
      "category_rank": 65,
      "domain": "southernco.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2816098.99223507,
      "curr_month_visits": 2816098.99223507,
      "unique_users": 1468192.35209208,
      "pages_per_visit": 2.99300249696289
    },
    {
      "global_rank": 43729,
      "category_rank": 66,
      "domain": "geoportal360.pl",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 655606.065876469,
      "curr_month_visits": 655606.065876469,
      "unique_users": 353402.102743414,
      "pages_per_visit": 17.9798106529427
    },
    {
      "global_rank": 371206,
      "category_rank": 66,
      "domain": "dmctools.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 99582.9788418254,
      "curr_month_visits": 99582.9788418254,
      "unique_users": 30365.6717621862,
      "pages_per_visit": 3.2945850631752
    },
    {
      "global_rank": 191571,
      "category_rank": 66,
      "domain": "eslontimes.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 244620.279766722,
      "curr_month_visits": 244620.279766722,
      "unique_users": 147482.432301916,
      "pages_per_visit": 2.9714605085415
    },
    {
      "global_rank": 439059,
      "category_rank": 66,
      "domain": "tuzlist.ru",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 104378.233146731,
      "curr_month_visits": 104378.233146731,
      "unique_users": 52940.2106019929,
      "pages_per_visit": 2.07164068229294
    },
    {
      "global_rank": 1744442,
      "category_rank": 66,
      "domain": "stormwater.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 16929.3394151446,
      "curr_month_visits": 16929.3394151446,
      "unique_users": 9566.66782602311,
      "pages_per_visit": 1.52612340705703
    },
    {
      "global_rank": 27487,
      "category_rank": 66,
      "domain": "sunnyportal.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2285442.45844266,
      "curr_month_visits": 2285442.45844266,
      "unique_users": 307465.221451501,
      "pages_per_visit": 4.80178793481689
    },
    {
      "global_rank": 154391,
      "category_rank": 66,
      "domain": "andritz.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 326475.833497215,
      "curr_month_visits": 326475.833497215,
      "unique_users": 159183.950540333,
      "pages_per_visit": 2.60038608403337
    },
    {
      "global_rank": 102134,
      "category_rank": 66,
      "domain": "wrp.pl",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 479941.650783417,
      "curr_month_visits": 479941.650783417,
      "unique_users": 269048.54040811,
      "pages_per_visit": 2.79270842747887
    },
    {
      "global_rank": 207271,
      "category_rank": 66,
      "domain": "arquitectes.cat",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 182877.751335685,
      "curr_month_visits": 182877.751335685,
      "unique_users": 52258.5469570727,
      "pages_per_visit": 4.64931029251397
    },
    {
      "global_rank": 1772081,
      "category_rank": 67,
      "domain": "primeusascales.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 13527.9139175962,
      "curr_month_visits": 13527.9139175962,
      "unique_users": 6913.25613528607,
      "pages_per_visit": 2.02599007751854
    },
    {
      "global_rank": 27818,
      "category_rank": 67,
      "domain": "kyuden.co.jp",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2039514.69640946,
      "curr_month_visits": 2039514.69640946,
      "unique_users": 914525.999605536,
      "pages_per_visit": 4.71315608361378
    },
    {
      "global_rank": 196290,
      "category_rank": 67,
      "domain": "schott.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 200332.401676288,
      "curr_month_visits": 200332.401676288,
      "unique_users": 107032.471494333,
      "pages_per_visit": 3.16969779174045
    },
    {
      "global_rank": 208036,
      "category_rank": 67,
      "domain": "architecturecompetitions.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 243584.787539853,
      "curr_month_visits": 243584.787539853,
      "unique_users": 112191.372484463,
      "pages_per_visit": 2.33588896672759
    },
    {
      "global_rank": 154849,
      "category_rank": 67,
      "domain": "rosseti-sib.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 172367.485591208,
      "curr_month_visits": 172367.485591208,
      "unique_users": 54487.5202335754,
      "pages_per_visit": 8.63601131850984
    },
    {
      "global_rank": 43799,
      "category_rank": 67,
      "domain": "makita.co.jp",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 980065.43417389,
      "curr_month_visits": 980065.43417389,
      "unique_users": 508026.674996247,
      "pages_per_visit": 6.55575552384327
    },
    {
      "global_rank": 102364,
      "category_rank": 67,
      "domain": "wiescirolnicze.pl",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 621814.970085306,
      "curr_month_visits": 621814.970085306,
      "unique_users": 209899.011998317,
      "pages_per_visit": 2.092347806707
    },
    {
      "global_rank": 375014,
      "category_rank": 67,
      "domain": "gknaerospace.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 100250.08228876,
      "curr_month_visits": 100250.08228876,
      "unique_users": 51382.5546856284,
      "pages_per_visit": 2.75656085578814
    },
    {
      "global_rank": 196809,
      "category_rank": 68,
      "domain": "oilchem.net",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 258580.150331703,
      "curr_month_visits": 258580.150331703,
      "unique_users": 43198.8231862046,
      "pages_per_visit": 5.19877002025079
    },
    {
      "global_rank": 469417,
      "category_rank": 68,
      "domain": "hawe.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 68742.525111842,
      "curr_month_visits": 68742.525111842,
      "unique_users": 34149.7756935986,
      "pages_per_visit": 3.66443839273587
    },
    {
      "global_rank": 28002,
      "category_rank": 68,
      "domain": "gruppohera.it",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1962869.31447116,
      "curr_month_visits": 1962869.31447116,
      "unique_users": 1047038.57739739,
      "pages_per_visit": 4.09428775436252
    },
    {
      "global_rank": 43829,
      "category_rank": 68,
      "domain": "muratorplus.pl",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1422874.87493327,
      "curr_month_visits": 1422874.87493327,
      "unique_users": 1001906.77460594,
      "pages_per_visit": 2.32177019755055
    },
    {
      "global_rank": 1806416,
      "category_rank": 68,
      "domain": "aqua6.info",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 15852.7465207509,
      "curr_month_visits": 15852.7465207509,
      "unique_users": 8738.29825971314,
      "pages_per_visit": 2.0338248362534
    },
    {
      "global_rank": 212100,
      "category_rank": 68,
      "domain": "propertydesign.pl",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 223221.503044205,
      "curr_month_visits": 223221.503044205,
      "unique_users": 165265.660217244,
      "pages_per_visit": 2.40697829271795
    },
    {
      "global_rank": 375111,
      "category_rank": 68,
      "domain": "hitachirail.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 112294.956534803,
      "curr_month_visits": 112294.956534803,
      "unique_users": 46789.6745249772,
      "pages_per_visit": 4.5240233067192
    },
    {
      "global_rank": 155020,
      "category_rank": 68,
      "domain": "logintrade.net",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 259303.060513108,
      "curr_month_visits": 259303.060513108,
      "unique_users": 69346.1613466596,
      "pages_per_visit": 4.72794427675191
    },
    {
      "global_rank": 105185,
      "category_rank": 68,
      "domain": "catl.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 414810.832823205,
      "curr_month_visits": 414810.832823205,
      "unique_users": 159994.636662965,
      "pages_per_visit": 5.4458847808099
    },
    {
      "global_rank": 212923,
      "category_rank": 69,
      "domain": "thelocalproject.com.au",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 177914.112515319,
      "curr_month_visits": 177914.112515319,
      "unique_users": 90693.4536275631,
      "pages_per_visit": 3.78620045488072
    },
    {
      "global_rank": 197825,
      "category_rank": 69,
      "domain": "fuchs.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 269229.212636553,
      "curr_month_visits": 269229.212636553,
      "unique_users": 132393.579087534,
      "pages_per_visit": 2.12929425766743
    },
    {
      "global_rank": 28023,
      "category_rank": 69,
      "domain": "copel.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1821228.21724484,
      "curr_month_visits": 1821228.21724484,
      "unique_users": 816095.682536961,
      "pages_per_visit": 5.67400680384049
    },
    {
      "global_rank": 156122,
      "category_rank": 69,
      "domain": "woodone.co.jp",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 332589.649076333,
      "curr_month_visits": 332589.649076333,
      "unique_users": 145218.711763521,
      "pages_per_visit": 3.02460682697424
    },
    {
      "global_rank": 106040,
      "category_rank": 69,
      "domain": "educagri.fr",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 666204.271530076,
      "curr_month_visits": 666204.271530076,
      "unique_users": 192618.0950477,
      "pages_per_visit": 2.85942911216568
    },
    {
      "global_rank": 378339,
      "category_rank": 69,
      "domain": "edrmagazine.eu",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 130743.842021865,
      "curr_month_visits": 130743.842021865,
      "unique_users": 68248.7343767566,
      "pages_per_visit": 2.51394356900534
    },
    {
      "global_rank": 1823354,
      "category_rank": 69,
      "domain": "lakerestoration.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 12166.8808796352,
      "curr_month_visits": 12166.8808796352,
      "unique_users": 7193.5290779518,
      "pages_per_visit": 1.8256660823953
    },
    {
      "global_rank": 44364,
      "category_rank": 69,
      "domain": "ccccltd.cn",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1115894.32468216,
      "curr_month_visits": 1115894.32468216,
      "unique_users": 143835.563296822,
      "pages_per_visit": 8.2834260779111
    },
    {
      "global_rank": 469501,
      "category_rank": 69,
      "domain": "spx.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 56731.8110177077,
      "curr_month_visits": 56731.8110177077,
      "unique_users": 20179.6302727906,
      "pages_per_visit": 6.0082810810158
    },
    {
      "global_rank": 199272,
      "category_rank": 70,
      "domain": "bakersgas.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 214781.661868973,
      "curr_month_visits": 214781.661868973,
      "unique_users": 119699.630343813,
      "pages_per_visit": 3.792778932496
    },
    {
      "global_rank": 217293,
      "category_rank": 70,
      "domain": "sunearthtools.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 290272.979535034,
      "curr_month_visits": 290272.979535034,
      "unique_users": 150689.622906401,
      "pages_per_visit": 2.11453501170428
    },
    {
      "global_rank": 158287,
      "category_rank": 70,
      "domain": "nbk1560.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 325027.076148554,
      "curr_month_visits": 325027.076148554,
      "unique_users": 203524.231021263,
      "pages_per_visit": 2.82477010473148
    },
    {
      "global_rank": 382258,
      "category_rank": 70,
      "domain": "jobyaviation.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 101038.791818933,
      "curr_month_visits": 101038.791818933,
      "unique_users": 59668.5445294711,
      "pages_per_visit": 2.15954118691611
    },
    {
      "global_rank": 1834484,
      "category_rank": 70,
      "domain": "naturalwaterscapes.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 25108.7285732696,
      "curr_month_visits": 25108.7285732696,
      "unique_users": 14436.2545300454,
      "pages_per_visit": 1.57664529540415
    },
    {
      "global_rank": 44463,
      "category_rank": 70,
      "domain": "geopec.it",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1348360.52540277,
      "curr_month_visits": 1348360.52540277,
      "unique_users": 94286.0394304761,
      "pages_per_visit": 5.6909729860366
    },
    {
      "global_rank": 28030,
      "category_rank": 70,
      "domain": "originenergy.com.au",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1842351.65892705,
      "curr_month_visits": 1842351.65892705,
      "unique_users": 839747.923993458,
      "pages_per_visit": 4.73092822325478
    },
    {
      "global_rank": 474043,
      "category_rank": 70,
      "domain": "garlock.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 62969.1538687369,
      "curr_month_visits": 62969.1538687369,
      "unique_users": 32229.696791339,
      "pages_per_visit": 2.46247570995374
    },
    {
      "global_rank": 106589,
      "category_rank": 70,
      "domain": "agrizone.net",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 393067.469272425,
      "curr_month_visits": 393067.469272425,
      "unique_users": 203398.833456728,
      "pages_per_visit": 4.11676133803696
    },
    {
      "global_rank": 480699,
      "category_rank": 71,
      "domain": "contributiregione.it",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 71719.6882073428,
      "curr_month_visits": 71719.6882073428,
      "unique_users": 49555.2194999827,
      "pages_per_visit": 2.80558007354188
    },
    {
      "global_rank": 45066,
      "category_rank": 71,
      "domain": "wuerth.de",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 968220.714535967,
      "curr_month_visits": 968220.714535967,
      "unique_users": 541614.120744556,
      "pages_per_visit": 5.55361197232357
    },
    {
      "global_rank": 383593,
      "category_rank": 71,
      "domain": "monroeaerospace.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 113702.646662136,
      "curr_month_visits": 113702.646662136,
      "unique_users": 53219.8044175482,
      "pages_per_visit": 1.73079847283475
    },
    {
      "global_rank": 206157,
      "category_rank": 71,
      "domain": "asahipen.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 212183.404061707,
      "curr_month_visits": 212183.404061707,
      "unique_users": 154375.737823753,
      "pages_per_visit": 2.33530246288256
    },
    {
      "global_rank": 1859247,
      "category_rank": 71,
      "domain": "ebaa.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 18674.7388320011,
      "curr_month_visits": 18674.7388320011,
      "unique_users": 10521.8693036472,
      "pages_per_visit": 1.81784216746149
    },
    {
      "global_rank": 108393,
      "category_rank": 71,
      "domain": "granit-parts.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 318619.554999212,
      "curr_month_visits": 318619.554999212,
      "unique_users": 66711.5433527823,
      "pages_per_visit": 11.6015909307558
    },
    {
      "global_rank": 28523,
      "category_rank": 71,
      "domain": "energisa.com.br",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1623735.81841038,
      "curr_month_visits": 1623735.81841038,
      "unique_users": 742252.259974885,
      "pages_per_visit": 6.5225563812221
    },
    {
      "global_rank": 220927,
      "category_rank": 71,
      "domain": "archiposition.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 234337.763134725,
      "curr_month_visits": 234337.763134725,
      "unique_users": 103350.416006594,
      "pages_per_visit": 1.90382910849859
    },
    {
      "global_rank": 158827,
      "category_rank": 71,
      "domain": "hyundai-steel.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 338525.358156625,
      "curr_month_visits": 338525.358156625,
      "unique_users": 88100.4294766007,
      "pages_per_visit": 3.24891913532019
    },
    {
      "global_rank": 28777,
      "category_rank": 72,
      "domain": "roseltorg.ru",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1852388.36680417,
      "curr_month_visits": 1852388.36680417,
      "unique_users": 376268.670883607,
      "pages_per_visit": 6.03892153755117
    },
    {
      "global_rank": 1887145,
      "category_rank": 72,
      "domain": "envieq.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 9666.46863729444,
      "curr_month_visits": 9666.46863729444,
      "unique_users": 4933.70012733684,
      "pages_per_visit": 1.69589578819871
    },
    {
      "global_rank": 223460,
      "category_rank": 72,
      "domain": "architectes.org",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 163775.0020966,
      "curr_month_visits": 163775.0020966,
      "unique_users": 65607.8508471115,
      "pages_per_visit": 5.10681184421708
    },
    {
      "global_rank": 159869,
      "category_rank": 72,
      "domain": "voestalpine.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 192851.865288845,
      "curr_month_visits": 192851.865288845,
      "unique_users": 94333.4209658349,
      "pages_per_visit": 7.07593186680537
    },
    {
      "global_rank": 481616,
      "category_rank": 72,
      "domain": "oblgaznnov.ru",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 69733.9008029331,
      "curr_month_visits": 69733.9008029331,
      "unique_users": 39971.6431167834,
      "pages_per_visit": 3.47819640623224
    },
    {
      "global_rank": 45092,
      "category_rank": 72,
      "domain": "stackct.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 398664.998704652,
      "curr_month_visits": 398664.998704652,
      "unique_users": 79623.5451078152,
      "pages_per_visit": 56.3855762979464
    },
    {
      "global_rank": 109801,
      "category_rank": 72,
      "domain": "lawnsite.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 785089.028639063,
      "curr_month_visits": 785089.028639063,
      "unique_users": 563542.264664199,
      "pages_per_visit": 1.89527530509212
    },
    {
      "global_rank": 206299,
      "category_rank": 72,
      "domain": "basf.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 357877.052077692,
      "curr_month_visits": 357877.052077692,
      "unique_users": 261490.719901107,
      "pages_per_visit": 1.39116680593508
    },
    {
      "global_rank": 388704,
      "category_rank": 72,
      "domain": "aviaport.ru",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 116790.622506514,
      "curr_month_visits": 116790.622506514,
      "unique_users": 71094.4031493695,
      "pages_per_visit": 1.59849377848937
    },
    {
      "global_rank": 28859,
      "category_rank": 73,
      "domain": "pseg.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1670321.99023481,
      "curr_month_visits": 1670321.99023481,
      "unique_users": 835411.084991285,
      "pages_per_visit": 5.80965583480548
    },
    {
      "global_rank": 212738,
      "category_rank": 73,
      "domain": "schmalz.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 170888.526599935,
      "curr_month_visits": 170888.526599935,
      "unique_users": 69800.7795434081,
      "pages_per_visit": 4.75612358551812
    },
    {
      "global_rank": 110240,
      "category_rank": 73,
      "domain": "sakata-netshop.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 545925.582446325,
      "curr_month_visits": 545925.582446325,
      "unique_users": 334200.381107718,
      "pages_per_visit": 2.20362545559687
    },
    {
      "global_rank": 484575,
      "category_rank": 73,
      "domain": "gemu-group.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 93417.1095040872,
      "curr_month_visits": 93417.1095040872,
      "unique_users": 44440.3229793916,
      "pages_per_visit": 2.55036501319594
    },
    {
      "global_rank": 1891475,
      "category_rank": 73,
      "domain": "uspumpparts.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 7072.83972057155,
      "curr_month_visits": 7072.83972057155,
      "unique_users": 3767.20956089723,
      "pages_per_visit": 7.34140117630287
    },
    {
      "global_rank": 161750,
      "category_rank": 73,
      "domain": "seah.co.kr",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 234729.574742362,
      "curr_month_visits": 234729.574742362,
      "unique_users": 28100.3842483183,
      "pages_per_visit": 5.2378997563905
    },
    {
      "global_rank": 224126,
      "category_rank": 73,
      "domain": "stpauls.co.uk",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 193032.202917138,
      "curr_month_visits": 193032.202917138,
      "unique_users": 108810.117252901,
      "pages_per_visit": 3.10105326837312
    },
    {
      "global_rank": 45438,
      "category_rank": 73,
      "domain": "pochta.uz",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 843390.240338415,
      "curr_month_visits": 843390.240338415,
      "unique_users": 129059.38184666,
      "pages_per_visit": 11.6946796516429
    },
    {
      "global_rank": 391480,
      "category_rank": 73,
      "domain": "leonardocompany.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 92117.7860347139,
      "curr_month_visits": 92117.7860347139,
      "unique_users": 28327.0487880738,
      "pages_per_visit": 4.49964241785035
    },
    {
      "global_rank": 112916,
      "category_rank": 74,
      "domain": "gala.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 463055.173302873,
      "curr_month_visits": 463055.173302873,
      "unique_users": 140119.597211349,
      "pages_per_visit": 3.93486418920374
    },
    {
      "global_rank": 45543,
      "category_rank": 74,
      "domain": "stroyinf.ru",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1773117.90437611,
      "curr_month_visits": 1773117.90437611,
      "unique_users": 683643.898195092,
      "pages_per_visit": 1.89693802403173
    },
    {
      "global_rank": 162352,
      "category_rank": 74,
      "domain": "ykjt.cn",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 281325.802183527,
      "curr_month_visits": 281325.802183527,
      "unique_users": 77120.9161500055,
      "pages_per_visit": 5.43648281252301
    },
    {
      "global_rank": 28868,
      "category_rank": 74,
      "domain": "atmosenergy.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1672900.39325906,
      "curr_month_visits": 1672900.39325906,
      "unique_users": 970449.098053909,
      "pages_per_visit": 5.15242378760916
    },
    {
      "global_rank": 487679,
      "category_rank": 74,
      "domain": "pumpcatalog.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 67168.7912811324,
      "curr_month_visits": 67168.7912811324,
      "unique_users": 38838.6687124299,
      "pages_per_visit": 1.99618982233297
    },
    {
      "global_rank": 1911683,
      "category_rank": 74,
      "domain": "measur.ca",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 14543.7174466742,
      "curr_month_visits": 14543.7174466742,
      "unique_users": 7614.58242910476,
      "pages_per_visit": 1.72336324647312
    },
    {
      "global_rank": 391919,
      "category_rank": 74,
      "domain": "hutchinson.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 81529.6511063432,
      "curr_month_visits": 81529.6511063432,
      "unique_users": 40639.0270793143,
      "pages_per_visit": 2.82239368741563
    },
    {
      "global_rank": 212886,
      "category_rank": 74,
      "domain": "trelleborg.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 185075.296286935,
      "curr_month_visits": 185075.296286935,
      "unique_users": 90168.4331492887,
      "pages_per_visit": 3.24769534274967
    },
    {
      "global_rank": 225212,
      "category_rank": 74,
      "domain": "burjkhalifa.ae",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 204951.746098233,
      "curr_month_visits": 204951.746098233,
      "unique_users": 112655.676123608,
      "pages_per_visit": 1.96864483142701
    },
    {
      "global_rank": 392405,
      "category_rank": 75,
      "domain": "pilatus-aircraft.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 120735.779731188,
      "curr_month_visits": 120735.779731188,
      "unique_users": 62022.2247687225,
      "pages_per_visit": 2.33453176213063
    },
    {
      "global_rank": 163123,
      "category_rank": 75,
      "domain": "tests24x7.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 89550.8226388663,
      "curr_month_visits": 89550.8226388663,
      "unique_users": 34471.7160981756,
      "pages_per_visit": 9.61892759358768
    },
    {
      "global_rank": 213998,
      "category_rank": 75,
      "domain": "kaneka.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 155036.499472852,
      "curr_month_visits": 155036.499472852,
      "unique_users": 68520.2480274101,
      "pages_per_visit": 8.2064332635191
    },
    {
      "global_rank": 1917056,
      "category_rank": 75,
      "domain": "alfalaval.my",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 9510.29198964423,
      "curr_month_visits": 9510.29198964423,
      "unique_users": 5200.96974682561,
      "pages_per_visit": 1.85255101634676
    },
    {
      "global_rank": 115084,
      "category_rank": 75,
      "domain": "ihi.co.jp",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 388867.903320334,
      "curr_month_visits": 388867.903320334,
      "unique_users": 182924.710273128,
      "pages_per_visit": 4.73490188085371
    },
    {
      "global_rank": 227860,
      "category_rank": 75,
      "domain": "architectenweb.nl",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 162374.250352536,
      "curr_month_visits": 162374.250352536,
      "unique_users": 76273.7368089982,
      "pages_per_visit": 4.1856857382427
    },
    {
      "global_rank": 493046,
      "category_rank": 75,
      "domain": "certifiedmtp.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 96002.1133838373,
      "curr_month_visits": 96002.1133838373,
      "unique_users": 55888.7072143449,
      "pages_per_visit": 1.58069095367848
    },
    {
      "global_rank": 46049,
      "category_rank": 75,
      "domain": "sunbeltrentals.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1305889.57667469,
      "curr_month_visits": 1305889.57667469,
      "unique_users": 801620.854246717,
      "pages_per_visit": 3.77682070679751
    },
    {
      "global_rank": 29047,
      "category_rank": 75,
      "domain": "amwater.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1930508.82853872,
      "curr_month_visits": 1930508.82853872,
      "unique_users": 1015543.25765368,
      "pages_per_visit": 3.87711775765344
    },
    {
      "global_rank": 231971,
      "category_rank": 76,
      "domain": "detail.de",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 173734.942013116,
      "curr_month_visits": 173734.942013116,
      "unique_users": 87406.9370336022,
      "pages_per_visit": 3.00673989803294
    },
    {
      "global_rank": 395347,
      "category_rank": 76,
      "domain": "mtu-solutions.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 95074.0112676491,
      "curr_month_visits": 95074.0112676491,
      "unique_users": 51278.0084489507,
      "pages_per_visit": 2.24503750774874
    },
    {
      "global_rank": 503368,
      "category_rank": 76,
      "domain": "airlinehyd.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 91088.4252559875,
      "curr_month_visits": 91088.4252559875,
      "unique_users": 44819.3071241972,
      "pages_per_visit": 2.0865802484783
    },
    {
      "global_rank": 29215,
      "category_rank": 76,
      "domain": "blacktoon324.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2683722.19844722,
      "curr_month_visits": 2683722.19844722,
      "unique_users": 346663.011453293,
      "pages_per_visit": 8.890728763459
    },
    {
      "global_rank": 46410,
      "category_rank": 76,
      "domain": "milwaukeetool.eu",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1007303.39411311,
      "curr_month_visits": 1007303.39411311,
      "unique_users": 551718.656731768,
      "pages_per_visit": 4.60797733718124
    },
    {
      "global_rank": 1925720,
      "category_rank": 76,
      "domain": "domiwoda.pl",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 24872.6152365903,
      "curr_month_visits": 24872.6152365903,
      "unique_users": 13652.0888186766,
      "pages_per_visit": 1.54918495075367
    },
    {
      "global_rank": 163478,
      "category_rank": 76,
      "domain": "azom.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 375483.933946834,
      "curr_month_visits": 375483.933946834,
      "unique_users": 225995.658501318,
      "pages_per_visit": 1.49518135741763
    },
    {
      "global_rank": 215334,
      "category_rank": 76,
      "domain": "eni.it",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 223614.810524094,
      "curr_month_visits": 223614.810524094,
      "unique_users": 34477.4549413646,
      "pages_per_visit": 3.31502335643041
    },
    {
      "global_rank": 117858,
      "category_rank": 76,
      "domain": "nfl.co.in",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 375359.82115547,
      "curr_month_visits": 375359.82115547,
      "unique_users": 163279.260357942,
      "pages_per_visit": 4.66191020394694
    },
    {
      "global_rank": 2025045,
      "category_rank": 77,
      "domain": "avidityscience.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 12597.0018021787,
      "curr_month_visits": 12597.0018021787,
      "unique_users": 6737.4994476255,
      "pages_per_visit": 1.75500801189461
    },
    {
      "global_rank": 216141,
      "category_rank": 77,
      "domain": "sasol.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 232279.810414828,
      "curr_month_visits": 232279.810414828,
      "unique_users": 107773.749986247,
      "pages_per_visit": 3.41257034517717
    },
    {
      "global_rank": 164810,
      "category_rank": 77,
      "domain": "jsw.in",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 272279.143176334,
      "curr_month_visits": 272279.143176334,
      "unique_users": 156581.818953597,
      "pages_per_visit": 3.24239857580095
    },
    {
      "global_rank": 400124,
      "category_rank": 77,
      "domain": "bellflight.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 129484.526865857,
      "curr_month_visits": 129484.526865857,
      "unique_users": 70931.2859847571,
      "pages_per_visit": 2.11367698651298
    },
    {
      "global_rank": 119450,
      "category_rank": 77,
      "domain": "wochenblatt-dlv.de",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 521758.672663456,
      "curr_month_visits": 521758.672663456,
      "unique_users": 318536.636367157,
      "pages_per_visit": 1.44150672211528
    },
    {
      "global_rank": 46649,
      "category_rank": 77,
      "domain": "servizirl.it",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 881635.830093274,
      "curr_month_visits": 881635.830093274,
      "unique_users": 281902.456933406,
      "pages_per_visit": 7.26205007736664
    },
    {
      "global_rank": 29621,
      "category_rank": 77,
      "domain": "slb.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1607764.56143055,
      "curr_month_visits": 1607764.56143055,
      "unique_users": 487125.687512359,
      "pages_per_visit": 7.4622926057914
    },
    {
      "global_rank": 235068,
      "category_rank": 77,
      "domain": "kaarwan.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 187020.894048086,
      "curr_month_visits": 187020.894048086,
      "unique_users": 47374.3273161138,
      "pages_per_visit": 4.53681490320305
    },
    {
      "global_rank": 505897,
      "category_rank": 77,
      "domain": "sampyo.co.kr",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 49673.5264327021,
      "curr_month_visits": 49673.5264327021,
      "unique_users": 25294.6971591105,
      "pages_per_visit": 3.2965015207761
    },
    {
      "global_rank": 165646,
      "category_rank": 78,
      "domain": "jfe-steel.co.jp",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 304092.015304995,
      "curr_month_visits": 304092.015304995,
      "unique_users": 198891.839672993,
      "pages_per_visit": 2.13409295132743
    },
    {
      "global_rank": 120640,
      "category_rank": 78,
      "domain": "imagelinenetwork.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 445778.549923503,
      "curr_month_visits": 445778.549923503,
      "unique_users": 272766.467773411,
      "pages_per_visit": 2.69957770665414
    },
    {
      "global_rank": 408893,
      "category_rank": 78,
      "domain": "aviationpros.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 119023.497150075,
      "curr_month_visits": 119023.497150075,
      "unique_users": 69136.3789680386,
      "pages_per_visit": 1.62312778328567
    },
    {
      "global_rank": 48272,
      "category_rank": 78,
      "domain": "sdvor.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1456972.52806932,
      "curr_month_visits": 1456972.52806932,
      "unique_users": 629677.951008707,
      "pages_per_visit": 3.64936431462836
    },
    {
      "global_rank": 30551,
      "category_rank": 78,
      "domain": "hallmarkplus.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1228098.14749136,
      "curr_month_visits": 1228098.14749136,
      "unique_users": 619051.72521545,
      "pages_per_visit": 3.61141142301135
    },
    {
      "global_rank": 235508,
      "category_rank": 78,
      "domain": "fosterandpartners.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 203012.431929406,
      "curr_month_visits": 203012.431929406,
      "unique_users": 102701.710505412,
      "pages_per_visit": 2.74296769802823
    },
    {
      "global_rank": 517577,
      "category_rank": 78,
      "domain": "industritorget.se",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 65778.4703293567,
      "curr_month_visits": 65778.4703293567,
      "unique_users": 36121.8326775898,
      "pages_per_visit": 2.2717766973904
    },
    {
      "global_rank": 2026963,
      "category_rank": 78,
      "domain": "verdantas.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 18848.244609904,
      "curr_month_visits": 18848.244609904,
      "unique_users": 8162.28961551258,
      "pages_per_visit": 3.33098604588681
    },
    {
      "global_rank": 217574,
      "category_rank": 78,
      "domain": "ineos.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 239434.446851517,
      "curr_month_visits": 239434.446851517,
      "unique_users": 126092.572963181,
      "pages_per_visit": 2.49800907596757
    },
    {
      "global_rank": 121152,
      "category_rank": 79,
      "domain": "claas.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 337305.975222198,
      "curr_month_visits": 337305.975222198,
      "unique_users": 148960.79574421,
      "pages_per_visit": 4.96580264027589
    },
    {
      "global_rank": 236977,
      "category_rank": 79,
      "domain": "urbandesignlab.in",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 128646.708331821,
      "curr_month_visits": 128646.708331821,
      "unique_users": 63796.4891457794,
      "pages_per_visit": 2.74743805739612
    },
    {
      "global_rank": 409352,
      "category_rank": 79,
      "domain": "rockwellcollins.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 134800.212303876,
      "curr_month_visits": 134800.212303876,
      "unique_users": 32569.7787630559,
      "pages_per_visit": 3.2429454069927
    },
    {
      "global_rank": 48636,
      "category_rank": 79,
      "domain": "meganorm.ru",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1270235.79071659,
      "curr_month_visits": 1270235.79071659,
      "unique_users": 547124.871201112,
      "pages_per_visit": 2.06295070588713
    },
    {
      "global_rank": 527501,
      "category_rank": 79,
      "domain": "metawater.co.jp",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 46722.6084668136,
      "curr_month_visits": 46722.6084668136,
      "unique_users": 21156.897021666,
      "pages_per_visit": 5.05412952344817
    },
    {
      "global_rank": 217932,
      "category_rank": 79,
      "domain": "sicagen.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 77816.5017218479,
      "curr_month_visits": 77816.5017218479,
      "unique_users": 18879.9806256119,
      "pages_per_visit": 19.7978373559803
    },
    {
      "global_rank": 165706,
      "category_rank": 79,
      "domain": "railway.supply",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 179161.604045823,
      "curr_month_visits": 179161.604045823,
      "unique_users": 94785.0449479776,
      "pages_per_visit": 4.8861848589132
    },
    {
      "global_rank": 31020,
      "category_rank": 79,
      "domain": "totalenergies.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1650459.21584902,
      "curr_month_visits": 1650459.21584902,
      "unique_users": 826091.664257639,
      "pages_per_visit": 3.77806129711314
    },
    {
      "global_rank": 2039191,
      "category_rank": 79,
      "domain": "energiefranken.ch",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 11944.2843101939,
      "curr_month_visits": 11944.2843101939,
      "unique_users": 5793.75824645172,
      "pages_per_visit": 3.51096913030226
    },
    {
      "global_rank": 166959,
      "category_rank": 80,
      "domain": "novat.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 215714.630116443,
      "curr_month_visits": 215714.630116443,
      "unique_users": 88069.0073975682,
      "pages_per_visit": 4.99285145138959
    },
    {
      "global_rank": 410221,
      "category_rank": 80,
      "domain": "m14forum.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 108569.767149826,
      "curr_month_visits": 108569.767149826,
      "unique_users": 64725.7392496066,
      "pages_per_visit": 2.40041450398771
    },
    {
      "global_rank": 218533,
      "category_rank": 80,
      "domain": "valvoline.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 263900.830670864,
      "curr_month_visits": 263900.830670864,
      "unique_users": 170100.580113834,
      "pages_per_visit": 1.64507335714984
    },
    {
      "global_rank": 2047256,
      "category_rank": 80,
      "domain": "aquaclearws.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 13360.5998428665,
      "curr_month_visits": 13360.5998428665,
      "unique_users": 6277.89441246936,
      "pages_per_visit": 2.04448712949648
    },
    {
      "global_rank": 33057,
      "category_rank": 80,
      "domain": "scottishpower.co.uk",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1461345.59824387,
      "curr_month_visits": 1461345.59824387,
      "unique_users": 715191.697433197,
      "pages_per_visit": 6.28473278182476
    },
    {
      "global_rank": 121933,
      "category_rank": 80,
      "domain": "ooe.gv.at",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 425231.152951054,
      "curr_month_visits": 425231.152951054,
      "unique_users": 192115.336371988,
      "pages_per_visit": 3.97778282009612
    },
    {
      "global_rank": 48723,
      "category_rank": 80,
      "domain": "hilti.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1091293.00779635,
      "curr_month_visits": 1091293.00779635,
      "unique_users": 446482.138899321,
      "pages_per_visit": 5.11182635671862
    },
    {
      "global_rank": 238313,
      "category_rank": 80,
      "domain": "totalarch.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 145240.008766574,
      "curr_month_visits": 145240.008766574,
      "unique_users": 81182.2875975889,
      "pages_per_visit": 2.91829395168958
    },
    {
      "global_rank": 535278,
      "category_rank": 80,
      "domain": "bustmold.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 88084.4948166435,
      "curr_month_visits": 88084.4948166435,
      "unique_users": 51607.6302420895,
      "pages_per_visit": 1.61689576282512
    },
    {
      "global_rank": 2062115,
      "category_rank": 81,
      "domain": "sewerequipment.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 7505.06683805148,
      "curr_month_visits": 7505.06683805148,
      "unique_users": 4003.09992316396,
      "pages_per_visit": 1.65614847521097
    },
    {
      "global_rank": 167237,
      "category_rank": 81,
      "domain": "amns.in",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 218764.939810586,
      "curr_month_visits": 218764.939810586,
      "unique_users": 58644.7889837465,
      "pages_per_visit": 8.16450882590472
    },
    {
      "global_rank": 122478,
      "category_rank": 81,
      "domain": "landtreff.de",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 382405.563502209,
      "curr_month_visits": 382405.563502209,
      "unique_users": 190613.744742725,
      "pages_per_visit": 3.242643182966
    },
    {
      "global_rank": 240068,
      "category_rank": 81,
      "domain": "archweb.it",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 155688.34744294,
      "curr_month_visits": 155688.34744294,
      "unique_users": 93409.4711438119,
      "pages_per_visit": 3.12421676635778
    },
    {
      "global_rank": 411288,
      "category_rank": 81,
      "domain": "intuitivemachines.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 81208.1686826621,
      "curr_month_visits": 81208.1686826621,
      "unique_users": 40912.8172031997,
      "pages_per_visit": 2.61197920916915
    },
    {
      "global_rank": 535400,
      "category_rank": 81,
      "domain": "viaindustrial.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 79799.0512820738,
      "curr_month_visits": 79799.0512820738,
      "unique_users": 46933.2640821915,
      "pages_per_visit": 2.89523626488965
    },
    {
      "global_rank": 218678,
      "category_rank": 81,
      "domain": "shikoku.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 166316.138455333,
      "curr_month_visits": 166316.138455333,
      "unique_users": 83037.6351879851,
      "pages_per_visit": 5.22679034178104
    },
    {
      "global_rank": 33315,
      "category_rank": 81,
      "domain": "essent.nl",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1559969.14928666,
      "curr_month_visits": 1559969.14928666,
      "unique_users": 618163.685639947,
      "pages_per_visit": 4.38864229369054
    },
    {
      "global_rank": 48923,
      "category_rank": 81,
      "domain": "rexel.fr",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 963874.173938326,
      "curr_month_visits": 963874.173938326,
      "unique_users": 387770.364032561,
      "pages_per_visit": 5.96812353592964
    },
    {
      "global_rank": 33614,
      "category_rank": 82,
      "domain": "dtek-kem.com.ua",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1693123.47015651,
      "curr_month_visits": 1693123.47015651,
      "unique_users": 691845.246666505,
      "pages_per_visit": 2.13253868788618
    },
    {
      "global_rank": 218883,
      "category_rank": 82,
      "domain": "mitsuichemicals.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 167904.421884197,
      "curr_month_visits": 167904.421884197,
      "unique_users": 93514.7708526927,
      "pages_per_visit": 3.90440612996134
    },
    {
      "global_rank": 541092,
      "category_rank": 82,
      "domain": "damnet.or.jp",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 66924.0041172861,
      "curr_month_visits": 66924.0041172861,
      "unique_users": 49149.6938076496,
      "pages_per_visit": 3.3597696840677
    },
    {
      "global_rank": 49323,
      "category_rank": 82,
      "domain": "haustechnikdialog.de",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1392050.57211072,
      "curr_month_visits": 1392050.57211072,
      "unique_users": 868684.807524167,
      "pages_per_visit": 1.848040060579
    },
    {
      "global_rank": 2089785,
      "category_rank": 82,
      "domain": "zestudni.pl",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 8580.66856295581,
      "curr_month_visits": 8580.66856295581,
      "unique_users": 4952.74010595834,
      "pages_per_visit": 1.52981442922636
    },
    {
      "global_rank": 124508,
      "category_rank": 82,
      "domain": "monrovia.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 606018.331828535,
      "curr_month_visits": 606018.331828535,
      "unique_users": 385321.857666855,
      "pages_per_visit": 2.23851048329587
    },
    {
      "global_rank": 417729,
      "category_rank": 82,
      "domain": "vansaircraft.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 76098.0556433581,
      "curr_month_visits": 76098.0556433581,
      "unique_users": 29710.3393045827,
      "pages_per_visit": 3.48109076931191
    },
    {
      "global_rank": 240265,
      "category_rank": 82,
      "domain": "newportmansions.org",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 200729.373969896,
      "curr_month_visits": 200729.373969896,
      "unique_users": 114664.183533243,
      "pages_per_visit": 3.21239578854968
    },
    {
      "global_rank": 167673,
      "category_rank": 82,
      "domain": "walter-tools.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 235129.624825182,
      "curr_month_visits": 235129.624825182,
      "unique_users": 75111.0697637866,
      "pages_per_visit": 7.23188344241036
    },
    {
      "global_rank": 2091587,
      "category_rank": 83,
      "domain": "louisiana811.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 10674.9004238288,
      "curr_month_visits": 10674.9004238288,
      "unique_users": 4541.20626426349,
      "pages_per_visit": 1.90125868731988
    },
    {
      "global_rank": 242887,
      "category_rank": 83,
      "domain": "theurbandeveloper.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 253872.718676191,
      "curr_month_visits": 253872.718676191,
      "unique_users": 110497.554727743,
      "pages_per_visit": 1.78378453240205
    },
    {
      "global_rank": 220726,
      "category_rank": 83,
      "domain": "lookchem.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 204701.255094941,
      "curr_month_visits": 204701.255094941,
      "unique_users": 109840.094297089,
      "pages_per_visit": 1.59158833981793
    },
    {
      "global_rank": 124703,
      "category_rank": 83,
      "domain": "provenwinners.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 744006.271044423,
      "curr_month_visits": 744006.271044423,
      "unique_users": 468335.928406873,
      "pages_per_visit": 2.44547476562125
    },
    {
      "global_rank": 418729,
      "category_rank": 83,
      "domain": "avic.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 74864.0622407649,
      "curr_month_visits": 74864.0622407649,
      "unique_users": 35367.9868643403,
      "pages_per_visit": 4.25242928367522
    },
    {
      "global_rank": 50033,
      "category_rank": 83,
      "domain": "pointp.fr",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1147090.27097985,
      "curr_month_visits": 1147090.27097985,
      "unique_users": 658885.483225937,
      "pages_per_visit": 3.63126495183225
    },
    {
      "global_rank": 34306,
      "category_rank": 83,
      "domain": "mosoblgaz.ru",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1600450.11148501,
      "curr_month_visits": 1600450.11148501,
      "unique_users": 609410.973519313,
      "pages_per_visit": 4.84029943968326
    },
    {
      "global_rank": 171999,
      "category_rank": 83,
      "domain": "fleetguard.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 283642.643860435,
      "curr_month_visits": 283642.643860435,
      "unique_users": 76740.7035586387,
      "pages_per_visit": 4.66889815481668
    },
    {
      "global_rank": 543001,
      "category_rank": 83,
      "domain": "harat.ru",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 64629.1969139005,
      "curr_month_visits": 64629.1969139005,
      "unique_users": 19914.5376614061,
      "pages_per_visit": 2.3448461582975
    },
    {
      "global_rank": 50221,
      "category_rank": 84,
      "domain": "carrier.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1144516.5592705,
      "curr_month_visits": 1144516.5592705,
      "unique_users": 602630.993675966,
      "pages_per_visit": 3.21888042807543
    },
    {
      "global_rank": 2104232,
      "category_rank": 84,
      "domain": "haoshpump.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 13383.6635626635,
      "curr_month_visits": 13383.6635626635,
      "unique_users": 6729.44722304374,
      "pages_per_visit": 1.44911767851838
    },
    {
      "global_rank": 124845,
      "category_rank": 84,
      "domain": "cgiar.org",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 436996.90913931,
      "curr_month_visits": 436996.90913931,
      "unique_users": 204241.93783694,
      "pages_per_visit": 2.26791714648337
    },
    {
      "global_rank": 222770,
      "category_rank": 84,
      "domain": "minwax.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 235210.642473562,
      "curr_month_visits": 235210.642473562,
      "unique_users": 155744.978252279,
      "pages_per_visit": 2.63956822996291
    },
    {
      "global_rank": 172758,
      "category_rank": 84,
      "domain": "fastmarkets.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 338707.892950229,
      "curr_month_visits": 338707.892950229,
      "unique_users": 136403.447853901,
      "pages_per_visit": 2.56820401260705
    },
    {
      "global_rank": 34845,
      "category_rank": 84,
      "domain": "thameswater.co.uk",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1388532.55404257,
      "curr_month_visits": 1388532.55404257,
      "unique_users": 774129.724760936,
      "pages_per_visit": 7.51192416928784
    },
    {
      "global_rank": 245434,
      "category_rank": 84,
      "domain": "epiteszforum.hu",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 209198.129940213,
      "curr_month_visits": 209198.129940213,
      "unique_users": 100976.577268745,
      "pages_per_visit": 2.39069739452394
    },
    {
      "global_rank": 421905,
      "category_rank": 84,
      "domain": "robinsonheli.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 83497.3573612157,
      "curr_month_visits": 83497.3573612157,
      "unique_users": 32577.2466490689,
      "pages_per_visit": 3.47383542261863
    },
    {
      "global_rank": 545211,
      "category_rank": 84,
      "domain": "vesservice.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 73182.2476229601,
      "curr_month_visits": 73182.2476229601,
      "unique_users": 38546.1311303708,
      "pages_per_visit": 1.52063768949864
    },
    {
      "global_rank": 35155,
      "category_rank": 85,
      "domain": "ultragaz.com.br",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1339448.02466459,
      "curr_month_visits": 1339448.02466459,
      "unique_users": 516827.135234587,
      "pages_per_visit": 7.27573811031
    },
    {
      "global_rank": 245626,
      "category_rank": 85,
      "domain": "scorer.co.kr",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 100302.326148221,
      "curr_month_visits": 100302.326148221,
      "unique_users": 27636.0627606538,
      "pages_per_visit": 5.40454272381949
    },
    {
      "global_rank": 2124490,
      "category_rank": 85,
      "domain": "xprt.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 9705.25026115062,
      "curr_month_visits": 9705.25026115062,
      "unique_users": 3922.93753913343,
      "pages_per_visit": 2.30673681772951
    },
    {
      "global_rank": 426142,
      "category_rank": 85,
      "domain": "gdmissionsystems.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 97334.0081916066,
      "curr_month_visits": 97334.0081916066,
      "unique_users": 56279.6890865059,
      "pages_per_visit": 2.88414973068912
    },
    {
      "global_rank": 545798,
      "category_rank": 85,
      "domain": "melnicabiz.ru",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 101155.487724331,
      "curr_month_visits": 101155.487724331,
      "unique_users": 29729.6913089278,
      "pages_per_visit": 1.1602817886586
    },
    {
      "global_rank": 50305,
      "category_rank": 85,
      "domain": "stoneprofits.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 406935.500263308,
      "curr_month_visits": 406935.500263308,
      "unique_users": 26985.0409828864,
      "pages_per_visit": 64.065427709053
    },
    {
      "global_rank": 173099,
      "category_rank": 85,
      "domain": "jfe-eng.co.jp",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 280587.951962542,
      "curr_month_visits": 280587.951962542,
      "unique_users": 60430.6031443745,
      "pages_per_visit": 6.39332427597855
    },
    {
      "global_rank": 226822,
      "category_rank": 85,
      "domain": "gotosirius.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 166399.8175016,
      "curr_month_visits": 166399.8175016,
      "unique_users": 75222.9660447228,
      "pages_per_visit": 4.73519874961495
    },
    {
      "global_rank": 124984,
      "category_rank": 85,
      "domain": "lagerhaus.at",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 439037.540123457,
      "curr_month_visits": 439037.540123457,
      "unique_users": 266779.276791647,
      "pages_per_visit": 3.02493831234181
    },
    {
      "global_rank": 427937,
      "category_rank": 86,
      "domain": "gdeb.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 85848.5595188149,
      "curr_month_visits": 85848.5595188149,
      "unique_users": 41283.3252740294,
      "pages_per_visit": 2.64849552612767
    },
    {
      "global_rank": 174045,
      "category_rank": 86,
      "domain": "noritake.co.jp",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 193645.002706919,
      "curr_month_visits": 193645.002706919,
      "unique_users": 128366.781814389,
      "pages_per_visit": 4.87001339928429
    },
    {
      "global_rank": 554406,
      "category_rank": 86,
      "domain": "kaukokiito.fi",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 75851.8428507447,
      "curr_month_visits": 75851.8428507447,
      "unique_users": 26938.587640553,
      "pages_per_visit": 3.88027357747154
    },
    {
      "global_rank": 2144253,
      "category_rank": 86,
      "domain": "watertreatmentservices.co.uk",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 14693.035705033,
      "curr_month_visits": 14693.035705033,
      "unique_users": 7350.85467190128,
      "pages_per_visit": 1.54064948561733
    },
    {
      "global_rank": 35391,
      "category_rank": 86,
      "domain": "tektorg.ru",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1189772.19217602,
      "curr_month_visits": 1189772.19217602,
      "unique_users": 187747.207966663,
      "pages_per_visit": 8.98712536632662
    },
    {
      "global_rank": 50690,
      "category_rank": 86,
      "domain": "hvacdirect.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 730742.596230087,
      "curr_month_visits": 730742.596230087,
      "unique_users": 456229.176841741,
      "pages_per_visit": 7.38771089573914
    },
    {
      "global_rank": 227455,
      "category_rank": 86,
      "domain": "hazaiya.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 157242.858971841,
      "curr_month_visits": 157242.858971841,
      "unique_users": 91263.0434940486,
      "pages_per_visit": 4.1881270997799
    },
    {
      "global_rank": 246344,
      "category_rank": 86,
      "domain": "comune.rimini.it",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 172190.807080993,
      "curr_month_visits": 172190.807080993,
      "unique_users": 87785.844166653,
      "pages_per_visit": 2.86214212810907
    },
    {
      "global_rank": 125658,
      "category_rank": 86,
      "domain": "aegro.com.br",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 378358.917467012,
      "curr_month_visits": 378358.917467012,
      "unique_users": 125312.434724153,
      "pages_per_visit": 4.33848598779445
    },
    {
      "global_rank": 174855,
      "category_rank": 87,
      "domain": "hydro.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 276209.49476405,
      "curr_month_visits": 276209.49476405,
      "unique_users": 138205.374178195,
      "pages_per_visit": 2.68578923127825
    },
    {
      "global_rank": 127739,
      "category_rank": 87,
      "domain": "igrit.pl",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 432549.065129005,
      "curr_month_visits": 432549.065129005,
      "unique_users": 99076.0378225236,
      "pages_per_visit": 3.98950466146388
    },
    {
      "global_rank": 555458,
      "category_rank": 87,
      "domain": "ingenieriareal.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 76834.720410652,
      "curr_month_visits": 76834.720410652,
      "unique_users": 44405.8599880171,
      "pages_per_visit": 1.61478262760946
    },
    {
      "global_rank": 227498,
      "category_rank": 87,
      "domain": "cooperation.uz",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 200193.403649226,
      "curr_month_visits": 200193.403649226,
      "unique_users": 27820.9055224617,
      "pages_per_visit": 4.53133677206765
    },
    {
      "global_rank": 2162762,
      "category_rank": 87,
      "domain": "approvedhydraulics.co.uk",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 6793.26218321084,
      "curr_month_visits": 6793.26218321084,
      "unique_users": 3497.64068362843,
      "pages_per_visit": 3.08129237021029
    },
    {
      "global_rank": 35834,
      "category_rank": 87,
      "domain": "consumersenergy.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1619752.59021315,
      "curr_month_visits": 1619752.59021315,
      "unique_users": 836403.978128975,
      "pages_per_visit": 3.94897172397924
    },
    {
      "global_rank": 50867,
      "category_rank": 87,
      "domain": "nicewebshinsei.net",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 775281.479521226,
      "curr_month_visits": 775281.479521226,
      "unique_users": 48061.3336307082,
      "pages_per_visit": 11.1641085890407
    },
    {
      "global_rank": 428100,
      "category_rank": 87,
      "domain": "hensoldt.net",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 90884.0690814587,
      "curr_month_visits": 90884.0690814587,
      "unique_users": 45126.6060221197,
      "pages_per_visit": 2.58441818783701
    },
    {
      "global_rank": 248091,
      "category_rank": 87,
      "domain": "espazium.ch",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 188083.173099457,
      "curr_month_visits": 188083.173099457,
      "unique_users": 66523.9139378281,
      "pages_per_visit": 2.28492377979848
    },
    {
      "global_rank": 561951,
      "category_rank": 88,
      "domain": "sardegnaambiente.it",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 84108.1192119862,
      "curr_month_visits": 84108.1192119862,
      "unique_users": 51582.6657958321,
      "pages_per_visit": 1.82442312809386
    },
    {
      "global_rank": 128966,
      "category_rank": 88,
      "domain": "hi-tier.de",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 218953.666592263,
      "curr_month_visits": 218953.666592263,
      "unique_users": 68656.0527565929,
      "pages_per_visit": 8.00454879626329
    },
    {
      "global_rank": 431878,
      "category_rank": 88,
      "domain": "aviationhub.aero",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 58844.3382470728,
      "curr_month_visits": 58844.3382470728,
      "unique_users": 12700.7564506935,
      "pages_per_visit": 8.24570647739379
    },
    {
      "global_rank": 174989,
      "category_rank": 88,
      "domain": "thyssenkrupp.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 416615.005177625,
      "curr_month_visits": 416615.005177625,
      "unique_users": 197552.293641948,
      "pages_per_visit": 3.13140680953389
    },
    {
      "global_rank": 233280,
      "category_rank": 88,
      "domain": "zwickroell.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 217489.946408709,
      "curr_month_visits": 217489.946408709,
      "unique_users": 117228.129141344,
      "pages_per_visit": 2.0294858298808
    },
    {
      "global_rank": 51986,
      "category_rank": 88,
      "domain": "orgill.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1011528.58907263,
      "curr_month_visits": 1011528.58907263,
      "unique_users": 63437.090763493,
      "pages_per_visit": 7.85528442204167
    },
    {
      "global_rank": 2167596,
      "category_rank": 88,
      "domain": "oasisdesign.net",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 7976.96057472712,
      "curr_month_visits": 7976.96057472712,
      "unique_users": 4033.69124254539,
      "pages_per_visit": 2.88201675071656
    },
    {
      "global_rank": 35895,
      "category_rank": 88,
      "domain": "pspcl.in",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1479452.59122987,
      "curr_month_visits": 1479452.59122987,
      "unique_users": 380659.375745305,
      "pages_per_visit": 7.78070212525627
    },
    {
      "global_rank": 248980,
      "category_rank": 88,
      "domain": "archiweb.cz",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 165743.676990058,
      "curr_month_visits": 165743.676990058,
      "unique_users": 65833.5773917033,
      "pages_per_visit": 3.10220959403766
    },
    {
      "global_rank": 432406,
      "category_rank": 89,
      "domain": "poly.com.cn",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 83681.0935617747,
      "curr_month_visits": 83681.0935617747,
      "unique_users": 26256.7428246646,
      "pages_per_visit": 2.66996821162056
    },
    {
      "global_rank": 562570,
      "category_rank": 89,
      "domain": "belgiss.by",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 63861.2758481002,
      "curr_month_visits": 63861.2758481002,
      "unique_users": 24724.441715071,
      "pages_per_visit": 2.37408221478937
    },
    {
      "global_rank": 2170577,
      "category_rank": 89,
      "domain": "jeepumps.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 12682.031594913,
      "curr_month_visits": 12682.031594913,
      "unique_users": 6521.52560117597,
      "pages_per_visit": 2.00827237067123
    },
    {
      "global_rank": 129165,
      "category_rank": 89,
      "domain": "forestryforum.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 407930.664766502,
      "curr_month_visits": 407930.664766502,
      "unique_users": 151084.295878907,
      "pages_per_visit": 4.18832396827898
    },
    {
      "global_rank": 52032,
      "category_rank": 89,
      "domain": "travisperkins.co.uk",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1297552.80815042,
      "curr_month_visits": 1297552.80815042,
      "unique_users": 800288.901228909,
      "pages_per_visit": 3.30726282874659
    },
    {
      "global_rank": 180792,
      "category_rank": 89,
      "domain": "proterial.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 299235.561681134,
      "curr_month_visits": 299235.561681134,
      "unique_users": 105830.946274169,
      "pages_per_visit": 8.56997896368873
    },
    {
      "global_rank": 233932,
      "category_rank": 89,
      "domain": "fpcusa.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 140351.833977813,
      "curr_month_visits": 140351.833977813,
      "unique_users": 19697.8939979053,
      "pages_per_visit": 12.6272884624566
    },
    {
      "global_rank": 249139,
      "category_rank": 89,
      "domain": "landezine.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 165878.952820088,
      "curr_month_visits": 165878.952820088,
      "unique_users": 73188.3741623781,
      "pages_per_visit": 3.38944013095701
    },
    {
      "global_rank": 36082,
      "category_rank": 89,
      "domain": "iec.co.il",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1558882.653965,
      "curr_month_visits": 1558882.653965,
      "unique_users": 873216.779882007,
      "pages_per_visit": 3.79860115447531
    },
    {
      "global_rank": 52480,
      "category_rank": 90,
      "domain": "generac.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1280122.16572366,
      "curr_month_visits": 1280122.16572366,
      "unique_users": 750522.9385942,
      "pages_per_visit": 3.80643316099831
    },
    {
      "global_rank": 182747,
      "category_rank": 90,
      "domain": "gostinfo.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 231020.787442519,
      "curr_month_visits": 231020.787442519,
      "unique_users": 92635.9790437737,
      "pages_per_visit": 3.82158955433852
    },
    {
      "global_rank": 566015,
      "category_rank": 90,
      "domain": "dwa.de",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 51168.3243550265,
      "curr_month_visits": 51168.3243550265,
      "unique_users": 20316.1070501721,
      "pages_per_visit": 3.78309620044313
    },
    {
      "global_rank": 36262,
      "category_rank": 90,
      "domain": "ewe.de",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1502981.50251273,
      "curr_month_visits": 1502981.50251273,
      "unique_users": 379191.904133378,
      "pages_per_visit": 5.12231256842548
    },
    {
      "global_rank": 253352,
      "category_rank": 90,
      "domain": "bsc.by",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 113842.269244419,
      "curr_month_visits": 113842.269244419,
      "unique_users": 36478.2677926824,
      "pages_per_visit": 4.37176992625249
    },
    {
      "global_rank": 129241,
      "category_rank": 90,
      "domain": "aveve.be",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 389854.000547033,
      "curr_month_visits": 389854.000547033,
      "unique_users": 243787.882337091,
      "pages_per_visit": 2.65267343186353
    },
    {
      "global_rank": 433309,
      "category_rank": 90,
      "domain": "crtamg.com.cn",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 41924.6689263524,
      "curr_month_visits": 41924.6689263524,
      "unique_users": 17521.2194541289,
      "pages_per_visit": 6.90568334628414
    },
    {
      "global_rank": 234290,
      "category_rank": 90,
      "domain": "arkema.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 187405.661279531,
      "curr_month_visits": 187405.661279531,
      "unique_users": 92821.9112729072,
      "pages_per_visit": 3.32126217291424
    },
    {
      "global_rank": 2205387,
      "category_rank": 90,
      "domain": "bpssg.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 12619.0745251573,
      "curr_month_visits": 12619.0745251573,
      "unique_users": 6446.54662391126,
      "pages_per_visit": 1.51137279730622
    },
    {
      "global_rank": 256249,
      "category_rank": 91,
      "domain": "catalogoarquitectura.cl",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 187920.966125364,
      "curr_month_visits": 187920.966125364,
      "unique_users": 98920.8049627407,
      "pages_per_visit": 1.91993938221915
    },
    {
      "global_rank": 129242,
      "category_rank": 91,
      "domain": "landbrugnet.dk",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 291845.012435119,
      "curr_month_visits": 291845.012435119,
      "unique_users": 90614.7411267036,
      "pages_per_visit": 7.39466232119363
    },
    {
      "global_rank": 434166,
      "category_rank": 91,
      "domain": "solarturbines.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 74913.879938863,
      "curr_month_visits": 74913.879938863,
      "unique_users": 40003.9699878601,
      "pages_per_visit": 2.58460714292925
    },
    {
      "global_rank": 2257072,
      "category_rank": 91,
      "domain": "orenco.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 8578.27225207492,
      "curr_month_visits": 8578.27225207492,
      "unique_users": 4495.10847321262,
      "pages_per_visit": 2.70123998285093
    },
    {
      "global_rank": 235203,
      "category_rank": 91,
      "domain": "brillux.de",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 160765.112472772,
      "curr_month_visits": 160765.112472772,
      "unique_users": 76976.4625405259,
      "pages_per_visit": 4.62411108587052
    },
    {
      "global_rank": 36511,
      "category_rank": 91,
      "domain": "pttor.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1027666.48146446,
      "curr_month_visits": 1027666.48146446,
      "unique_users": 524784.19473635,
      "pages_per_visit": 2.67496155932418
    },
    {
      "global_rank": 53349,
      "category_rank": 91,
      "domain": "daiken.jp",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 998704.288916076,
      "curr_month_visits": 998704.288916076,
      "unique_users": 597295.090678728,
      "pages_per_visit": 3.45807505364154
    },
    {
      "global_rank": 567405,
      "category_rank": 91,
      "domain": "preferredpump.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 55953.6004408338,
      "curr_month_visits": 55953.6004408338,
      "unique_users": 12750.9803138074,
      "pages_per_visit": 8.63627129637474
    },
    {
      "global_rank": 184085,
      "category_rank": 91,
      "domain": "nonfemet.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 72897.3935068562,
      "curr_month_visits": 72897.3935068562,
      "unique_users": 31263.6159868739,
      "pages_per_visit": 11.1985470810188
    },
    {
      "global_rank": 447486,
      "category_rank": 92,
      "domain": "avinc.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 103170.866773513,
      "curr_month_visits": 103170.866773513,
      "unique_users": 56813.462648862,
      "pages_per_visit": 1.82938901361041
    },
    {
      "global_rank": 568968,
      "category_rank": 92,
      "domain": "business-guide.com.ua",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 64992.9191720261,
      "curr_month_visits": 64992.9191720261,
      "unique_users": 41521.4901146762,
      "pages_per_visit": 2.22815834041871
    },
    {
      "global_rank": 184897,
      "category_rank": 92,
      "domain": "gostassistent.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 331592.796132688,
      "curr_month_visits": 331592.796132688,
      "unique_users": 185480.774935875,
      "pages_per_visit": 1.61100899405429
    },
    {
      "global_rank": 257881,
      "category_rank": 92,
      "domain": "amazingarchitecture.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 215690.673688115,
      "curr_month_visits": 215690.673688115,
      "unique_users": 109916.477370982,
      "pages_per_visit": 2.33818075417419
    },
    {
      "global_rank": 36518,
      "category_rank": 92,
      "domain": "eni.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1476665.45678951,
      "curr_month_visits": 1476665.45678951,
      "unique_users": 558309.813484336,
      "pages_per_visit": 5.05122899538258
    },
    {
      "global_rank": 2275836,
      "category_rank": 92,
      "domain": "easypro.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 7990.44953407745,
      "curr_month_visits": 7990.44953407745,
      "unique_users": 4110.08657432108,
      "pages_per_visit": 2.04855658177353
    },
    {
      "global_rank": 53983,
      "category_rank": 92,
      "domain": "msisurfaces.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 819708.040233487,
      "curr_month_visits": 819708.040233487,
      "unique_users": 389597.709487548,
      "pages_per_visit": 6.31916459806978
    },
    {
      "global_rank": 130956,
      "category_rank": 92,
      "domain": "atl.nu",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 482510.682050779,
      "curr_month_visits": 482510.682050779,
      "unique_users": 170647.320674997,
      "pages_per_visit": 1.80202125159754
    },
    {
      "global_rank": 235386,
      "category_rank": 92,
      "domain": "vanguard.ca",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 239593.765375081,
      "curr_month_visits": 239593.765375081,
      "unique_users": 135443.242224373,
      "pages_per_visit": 2.27783348476395
    },
    {
      "global_rank": 258189,
      "category_rank": 93,
      "domain": "coam.org",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 148140.921578685,
      "curr_month_visits": 148140.921578685,
      "unique_users": 58797.1866907054,
      "pages_per_visit": 4.18885490907848
    },
    {
      "global_rank": 134709,
      "category_rank": 93,
      "domain": "agrofy.com.ar",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 488348.442957402,
      "curr_month_visits": 488348.442957402,
      "unique_users": 220782.750661544,
      "pages_per_visit": 2.0841106870873
    },
    {
      "global_rank": 451145,
      "category_rank": 93,
      "domain": "knds.de",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 84944.4732125685,
      "curr_month_visits": 84944.4732125685,
      "unique_users": 46104.4481752771,
      "pages_per_visit": 2.3093276787731
    },
    {
      "global_rank": 37342,
      "category_rank": 93,
      "domain": "veolia.fr",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1014300.0512993,
      "curr_month_visits": 1014300.0512993,
      "unique_users": 503251.343628671,
      "pages_per_visit": 6.71982945383692
    },
    {
      "global_rank": 236144,
      "category_rank": 93,
      "domain": "proviant-pay.ru",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 115865.476883631,
      "curr_month_visits": 115865.476883631,
      "unique_users": 35823.6582130265,
      "pages_per_visit": 3.86705238924763
    },
    {
      "global_rank": 570008,
      "category_rank": 93,
      "domain": "provincia.bergamo.it",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 58838.0742772908,
      "curr_month_visits": 58838.0742772908,
      "unique_users": 31921.5665938673,
      "pages_per_visit": 3.240923242746
    },
    {
      "global_rank": 2300686,
      "category_rank": 93,
      "domain": "indusroof.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 7773.52895308031,
      "curr_month_visits": 7773.52895308031,
      "unique_users": 4389.84254882424,
      "pages_per_visit": 1.80742739194506
    },
    {
      "global_rank": 54048,
      "category_rank": 93,
      "domain": "texturacorp.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1668443.2002269,
      "curr_month_visits": 1668443.2002269,
      "unique_users": 122622.883233577,
      "pages_per_visit": 4.29018726398916
    },
    {
      "global_rank": 186644,
      "category_rank": 93,
      "domain": "supl.biz",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 240718.288676198,
      "curr_month_visits": 240718.288676198,
      "unique_users": 145999.1491185,
      "pages_per_visit": 3.34073559682502
    },
    {
      "global_rank": 2321297,
      "category_rank": 94,
      "domain": "trapbag.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 9656.09599143999,
      "curr_month_visits": 9656.09599143999,
      "unique_users": 5116.57983284867,
      "pages_per_visit": 1.33446412919785
    },
    {
      "global_rank": 135051,
      "category_rank": 94,
      "domain": "asabe.org",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 286975.950686024,
      "curr_month_visits": 286975.950686024,
      "unique_users": 57412.4668825196,
      "pages_per_visit": 9.720706234723
    },
    {
      "global_rank": 236505,
      "category_rank": 94,
      "domain": "kjmagnetics.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 154343.971240977,
      "curr_month_visits": 154343.971240977,
      "unique_users": 85324.9252282422,
      "pages_per_visit": 3.34374117750547
    },
    {
      "global_rank": 453213,
      "category_rank": 94,
      "domain": "qinetiq.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 105918.071794519,
      "curr_month_visits": 105918.071794519,
      "unique_users": 51310.3100281742,
      "pages_per_visit": 2.45214388389506
    },
    {
      "global_rank": 54277,
      "category_rank": 94,
      "domain": "viessmann.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 714149.601997308,
      "curr_month_visits": 714149.601997308,
      "unique_users": 221661.720260236,
      "pages_per_visit": 6.79482958805055
    },
    {
      "global_rank": 259419,
      "category_rank": 94,
      "domain": "iplan.gov.il",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 140105.894766565,
      "curr_month_visits": 140105.894766565,
      "unique_users": 50994.0856905795,
      "pages_per_visit": 3.86387801534045
    },
    {
      "global_rank": 188835,
      "category_rank": 94,
      "domain": "trumpf.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 282041.985962564,
      "curr_month_visits": 282041.985962564,
      "unique_users": 131651.414893384,
      "pages_per_visit": 3.14458108577867
    },
    {
      "global_rank": 573281,
      "category_rank": 94,
      "domain": "edipesa.com.pe",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 64159.8831313077,
      "curr_month_visits": 64159.8831313077,
      "unique_users": 42627.4713683554,
      "pages_per_visit": 2.40310815065985
    },
    {
      "global_rank": 37364,
      "category_rank": 94,
      "domain": "bpcl.in",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 583055.81683851,
      "curr_month_visits": 583055.81683851,
      "unique_users": 61733.8374765281,
      "pages_per_visit": 31.8503629901869
    },
    {
      "global_rank": 2333133,
      "category_rank": 95,
      "domain": "pumper.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 21237.5362141183,
      "curr_month_visits": 21237.5362141183,
      "unique_users": 10161.1894700741,
      "pages_per_visit": 2.52221708641458
    },
    {
      "global_rank": 260625,
      "category_rank": 95,
      "domain": "waddesdon.org.uk",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 104586.7166359,
      "curr_month_visits": 104586.7166359,
      "unique_users": 64489.283373482,
      "pages_per_visit": 3.33530811774545
    },
    {
      "global_rank": 239319,
      "category_rank": 95,
      "domain": "smooth-on.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 184286.878536864,
      "curr_month_visits": 184286.878536864,
      "unique_users": 93303.6928196666,
      "pages_per_visit": 2.63316405220143
    },
    {
      "global_rank": 135558,
      "category_rank": 95,
      "domain": "hokuren.or.jp",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 290165.933729199,
      "curr_month_visits": 290165.933729199,
      "unique_users": 71481.1280946843,
      "pages_per_visit": 7.00122634892127
    },
    {
      "global_rank": 37627,
      "category_rank": 95,
      "domain": "gse.it",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 866962.892959245,
      "curr_month_visits": 866962.892959245,
      "unique_users": 333393.146918223,
      "pages_per_visit": 12.5382777240419
    },
    {
      "global_rank": 54379,
      "category_rank": 95,
      "domain": "energystar.gov",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1003334.88759972,
      "curr_month_visits": 1003334.88759972,
      "unique_users": 666533.014405525,
      "pages_per_visit": 3.316505143365
    },
    {
      "global_rank": 456383,
      "category_rank": 95,
      "domain": "koreaaero.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 64941.2223095706,
      "curr_month_visits": 64941.2223095706,
      "unique_users": 31432.7240893756,
      "pages_per_visit": 5.06572360723531
    },
    {
      "global_rank": 189026,
      "category_rank": 95,
      "domain": "twi-global.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 311190.055705623,
      "curr_month_visits": 311190.055705623,
      "unique_users": 174969.413016974,
      "pages_per_visit": 1.58581308850111
    },
    {
      "global_rank": 573949,
      "category_rank": 95,
      "domain": "wiktel.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 130963.61726898,
      "curr_month_visits": 130963.61726898,
      "unique_users": 10425.1693595198,
      "pages_per_visit": 2.61158169564794
    },
    {
      "global_rank": 189115,
      "category_rank": 96,
      "domain": "easthope.cn",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 142596.182667451,
      "curr_month_visits": 142596.182667451,
      "unique_users": 45206.9639935337,
      "pages_per_visit": 7.28343173022229
    },
    {
      "global_rank": 37671,
      "category_rank": 96,
      "domain": "fluvius.be",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1214382.24244817,
      "curr_month_visits": 1214382.24244817,
      "unique_users": 566200.327181554,
      "pages_per_visit": 5.80250173544278
    },
    {
      "global_rank": 574546,
      "category_rank": 96,
      "domain": "mrostop.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 47284.1299378867,
      "curr_month_visits": 47284.1299378867,
      "unique_users": 25217.1832616751,
      "pages_per_visit": 1.59331412706321
    },
    {
      "global_rank": 54441,
      "category_rank": 96,
      "domain": "unitedrentals.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1135507.2785189,
      "curr_month_visits": 1135507.2785189,
      "unique_users": 771418.973114772,
      "pages_per_visit": 3.41231534826719
    },
    {
      "global_rank": 2349261,
      "category_rank": 96,
      "domain": "ccmua.org",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 17840.8518669635,
      "curr_month_visits": 17840.8518669635,
      "unique_users": 11441.4553888466,
      "pages_per_visit": 2.11363038387607
    },
    {
      "global_rank": 457162,
      "category_rank": 96,
      "domain": "hyundai-rotem.co.kr",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 50644.0619524862,
      "curr_month_visits": 50644.0619524862,
      "unique_users": 29842.8310324663,
      "pages_per_visit": 2.93348481493379
    },
    {
      "global_rank": 135903,
      "category_rank": 96,
      "domain": "ama.at",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 544825.538416077,
      "curr_month_visits": 544825.538416077,
      "unique_users": 73787.5450645994,
      "pages_per_visit": 3.01483787826651
    },
    {
      "global_rank": 239413,
      "category_rank": 96,
      "domain": "wd40.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 228265.967770654,
      "curr_month_visits": 228265.967770654,
      "unique_users": 137013.295946563,
      "pages_per_visit": 1.74755098618018
    },
    {
      "global_rank": 261837,
      "category_rank": 96,
      "domain": "kkaa.co.jp",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 156245.712464137,
      "curr_month_visits": 156245.712464137,
      "unique_users": 91930.7844616855,
      "pages_per_visit": 3.25868936307802
    },
    {
      "global_rank": 137453,
      "category_rank": 97,
      "domain": "alansfactoryoutlet.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 431571.270561051,
      "curr_month_visits": 431571.270561051,
      "unique_users": 306962.263883462,
      "pages_per_visit": 1.79712965717953
    },
    {
      "global_rank": 240772,
      "category_rank": 97,
      "domain": "tn-sanso.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 182663.728536825,
      "curr_month_visits": 182663.728536825,
      "unique_users": 56739.7190846759,
      "pages_per_visit": 6.96044281587511
    },
    {
      "global_rank": 262770,
      "category_rank": 97,
      "domain": "neuschwanstein.de",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 226980.738923965,
      "curr_month_visits": 226980.738923965,
      "unique_users": 132101.54680125,
      "pages_per_visit": 1.82398400173722
    },
    {
      "global_rank": 577967,
      "category_rank": 97,
      "domain": "vodochet.ru",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 54875.0745953449,
      "curr_month_visits": 54875.0745953449,
      "unique_users": 28967.0916169076,
      "pages_per_visit": 1.98542259412813
    },
    {
      "global_rank": 2352638,
      "category_rank": 97,
      "domain": "intender.my",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 18348.2646378457,
      "curr_month_visits": 18348.2646378457,
      "unique_users": 10617.7743115132,
      "pages_per_visit": 1.16984912158378
    },
    {
      "global_rank": 459561,
      "category_rank": 97,
      "domain": "satair.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 75529.6393786575,
      "curr_month_visits": 75529.6393786575,
      "unique_users": 29276.6633534372,
      "pages_per_visit": 2.89476579650653
    },
    {
      "global_rank": 189834,
      "category_rank": 97,
      "domain": "nanshan.com.cn",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 259163.776554834,
      "curr_month_visits": 259163.776554834,
      "unique_users": 33796.3818136143,
      "pages_per_visit": 4.27222027501354
    },
    {
      "global_rank": 54594,
      "category_rank": 97,
      "domain": "wsp.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1195822.82864415,
      "curr_month_visits": 1195822.82864415,
      "unique_users": 411085.68468252,
      "pages_per_visit": 3.07197102867813
    },
    {
      "global_rank": 37784,
      "category_rank": 97,
      "domain": "dtek-oem.com.ua",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1648204.82863121,
      "curr_month_visits": 1648204.82863121,
      "unique_users": 289702.305838241,
      "pages_per_visit": 1.53461822550406
    },
    {
      "global_rank": 2402463,
      "category_rank": 98,
      "domain": "oczyszczalnia.net",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 14598.8742001857,
      "curr_month_visits": 14598.8742001857,
      "unique_users": 8937.02039801729,
      "pages_per_visit": 2.41482757920752
    },
    {
      "global_rank": 54819,
      "category_rank": 98,
      "domain": "coinscloud.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1050428.08500343,
      "curr_month_visits": 1050428.08500343,
      "unique_users": 43397.9327820778,
      "pages_per_visit": 7.87936819997651
    },
    {
      "global_rank": 461441,
      "category_rank": 98,
      "domain": "sofemaonline.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 72191.108502791,
      "curr_month_visits": 72191.108502791,
      "unique_users": 33002.0503445112,
      "pages_per_visit": 2.1845658614206
    },
    {
      "global_rank": 137726,
      "category_rank": 98,
      "domain": "tractorpartsasap.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 334185.742760583,
      "curr_month_visits": 334185.742760583,
      "unique_users": 186789.600118949,
      "pages_per_visit": 3.06582164319064
    },
    {
      "global_rank": 193199,
      "category_rank": 98,
      "domain": "metallicheckiy-portal.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 308467.448842236,
      "curr_month_visits": 308467.448842236,
      "unique_users": 106491.557121691,
      "pages_per_visit": 1.63472886803989
    },
    {
      "global_rank": 578768,
      "category_rank": 98,
      "domain": "evoqua.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 80823.2094379365,
      "curr_month_visits": 80823.2094379365,
      "unique_users": 42275.102251117,
      "pages_per_visit": 3.95172991990014
    },
    {
      "global_rank": 39507,
      "category_rank": 98,
      "domain": "tatneft.ru",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1004720.48086339,
      "curr_month_visits": 1004720.48086339,
      "unique_users": 197221.456634275,
      "pages_per_visit": 16.5891732774299
    },
    {
      "global_rank": 263158,
      "category_rank": 98,
      "domain": "bibalex.org",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 167643.824708868,
      "curr_month_visits": 167643.824708868,
      "unique_users": 96145.9070448854,
      "pages_per_visit": 2.87078525870574
    },
    {
      "global_rank": 242841,
      "category_rank": 98,
      "domain": "cemedine.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 175576.434660219,
      "curr_month_visits": 175576.434660219,
      "unique_users": 137304.210510192,
      "pages_per_visit": 2.43059862129062
    },
    {
      "global_rank": 137832,
      "category_rank": 99,
      "domain": "landbrugsavisen.dk",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 413196.30370095,
      "curr_month_visits": 413196.30370095,
      "unique_users": 101539.449052486,
      "pages_per_visit": 2.8613829514289
    },
    {
      "global_rank": 194597,
      "category_rank": 99,
      "domain": "esab.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 244740.087523832,
      "curr_month_visits": 244740.087523832,
      "unique_users": 131893.967943382,
      "pages_per_visit": 2.24846949038888
    },
    {
      "global_rank": 266071,
      "category_rank": 99,
      "domain": "mun.gov.bh",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 104539.655750897,
      "curr_month_visits": 104539.655750897,
      "unique_users": 39065.1735038604,
      "pages_per_visit": 7.96188898484897
    },
    {
      "global_rank": 40202,
      "category_rank": 99,
      "domain": "eia.gov",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1722607.39446595,
      "curr_month_visits": 1722607.39446595,
      "unique_users": 1017680.76570816,
      "pages_per_visit": 2.3136786202946
    },
    {
      "global_rank": 244065,
      "category_rank": 99,
      "domain": "upl-ltd.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 195826.71544652,
      "curr_month_visits": 195826.71544652,
      "unique_users": 105413.35193526,
      "pages_per_visit": 2.37918929310647
    },
    {
      "global_rank": 581852,
      "category_rank": 99,
      "domain": "usarollerchain.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 63548.6691612567,
      "curr_month_visits": 63548.6691612567,
      "unique_users": 35427.6114721385,
      "pages_per_visit": 2.27151673558309
    },
    {
      "global_rank": 461758,
      "category_rank": 99,
      "domain": "nbdoc.ru",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 109876.230634398,
      "curr_month_visits": 109876.230634398,
      "unique_users": 64848.6012367243,
      "pages_per_visit": 1.43985322532225
    },
    {
      "global_rank": 2432960,
      "category_rank": 99,
      "domain": "raecorents.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 10486.7557002452,
      "curr_month_visits": 10486.7557002452,
      "unique_users": 5552.60342890031,
      "pages_per_visit": 1.76717049082024
    },
    {
      "global_rank": 54981,
      "category_rank": 99,
      "domain": "bobcat.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1034753.81784727,
      "curr_month_visits": 1034753.81784727,
      "unique_users": 628792.143480645,
      "pages_per_visit": 3.144215095495
    },
    {
      "global_rank": 139550,
      "category_rank": 100,
      "domain": "tractorfan.nl",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 323047.298600394,
      "curr_month_visits": 323047.298600394,
      "unique_users": 79007.1594106358,
      "pages_per_visit": 6.27961079897273
    },
    {
      "global_rank": 462944,
      "category_rank": 100,
      "domain": "oshkoshcorp.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 63979.22107232,
      "curr_month_visits": 63979.22107232,
      "unique_users": 38594.1718513888,
      "pages_per_visit": 2.73240842643151
    },
    {
      "global_rank": 40855,
      "category_rank": 100,
      "domain": "tecoenergy.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 2494193.32561807,
      "curr_month_visits": 2494193.32561807,
      "unique_users": 856989.156336118,
      "pages_per_visit": 3.44014394343629
    },
    {
      "global_rank": 2434679,
      "category_rank": 100,
      "domain": "startsafety.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 11165.2295859597,
      "curr_month_visits": 11165.2295859597,
      "unique_users": 6113.8223423636,
      "pages_per_visit": 1.25382659024706
    },
    {
      "global_rank": 244245,
      "category_rank": 100,
      "domain": "axel-gl.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 119367.638100072,
      "curr_month_visits": 119367.638100072,
      "unique_users": 53963.9184329644,
      "pages_per_visit": 2.72944172335112
    },
    {
      "global_rank": 55897,
      "category_rank": 100,
      "domain": "fieldwire.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 664179.940296398,
      "curr_month_visits": 664179.940296398,
      "unique_users": 135736.913987875,
      "pages_per_visit": 12.1211335346844
    },
    {
      "global_rank": 587045,
      "category_rank": 100,
      "domain": "teesing.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 64492.1978725597,
      "curr_month_visits": 64492.1978725597,
      "unique_users": 34495.5411389902,
      "pages_per_visit": 1.75555059560894
    },
    {
      "global_rank": 271339,
      "category_rank": 100,
      "domain": "architekturaibiznes.pl",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 121044.046403839,
      "curr_month_visits": 121044.046403839,
      "unique_users": 77442.4583166196,
      "pages_per_visit": 2.61444337201176
    },
    {
      "global_rank": 139603,
      "category_rank": 101,
      "domain": "weidezaun.info",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 331942.016609021,
      "curr_month_visits": 331942.016609021,
      "unique_users": 196262.697211088,
      "pages_per_visit": 3.07964739957227
    },
    {
      "global_rank": 589392,
      "category_rank": 101,
      "domain": "daikinthai.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 65444.6101625806,
      "curr_month_visits": 65444.6101625806,
      "unique_users": 21760.302321643,
      "pages_per_visit": 1.95986085065474
    },
    {
      "global_rank": 272372,
      "category_rank": 101,
      "domain": "admiddleeast.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 296552.76919777,
      "curr_month_visits": 296552.76919777,
      "unique_users": 193750.272581709,
      "pages_per_visit": 1.52737787081316
    },
    {
      "global_rank": 200057,
      "category_rank": 101,
      "domain": "kennametal.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 211090.780602546,
      "curr_month_visits": 211090.780602546,
      "unique_users": 109212.744800135,
      "pages_per_visit": 3.46589690150102
    },
    {
      "global_rank": 56494,
      "category_rank": 101,
      "domain": "tsukulink.net",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1079029.77475912,
      "curr_month_visits": 1079029.77475912,
      "unique_users": 726405.8482069,
      "pages_per_visit": 2.83910616104681
    },
    {
      "global_rank": 2461117,
      "category_rank": 101,
      "domain": "ifeu.de",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 9984.67299366584,
      "curr_month_visits": 9984.67299366584,
      "unique_users": 5576.74667394386,
      "pages_per_visit": 2.39332497454713
    },
    {
      "global_rank": 41583,
      "category_rank": 101,
      "domain": "growatt.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1529876.57354863,
      "curr_month_visits": 1529876.57354863,
      "unique_users": 323966.913724299,
      "pages_per_visit": 4.6040151653183
    },
    {
      "global_rank": 463097,
      "category_rank": 101,
      "domain": "spiritaero.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 71251.1286244696,
      "curr_month_visits": 71251.1286244696,
      "unique_users": 29314.5614849536,
      "pages_per_visit": 2.8098794161896
    },
    {
      "global_rank": 140118,
      "category_rank": 102,
      "domain": "agweb.com",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 500620.333549935,
      "curr_month_visits": 500620.333549935,
      "unique_users": 241540.174729809,
      "pages_per_visit": 1.52433688966988
    },
    {
      "global_rank": 41855,
      "category_rank": 102,
      "domain": "tohogas.co.jp",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1130952.63941337,
      "curr_month_visits": 1130952.63941337,
      "unique_users": 532955.881369029,
      "pages_per_visit": 5.31966914161135
    },
    {
      "global_rank": 244832,
      "category_rank": 102,
      "domain": "ralcolorchart.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 162673.559819792,
      "curr_month_visits": 162673.559819792,
      "unique_users": 83252.7374983157,
      "pages_per_visit": 2.75729219442988
    },
    {
      "global_rank": 2498927,
      "category_rank": 102,
      "domain": "tricel.co.uk",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 9890.83762653026,
      "curr_month_visits": 9890.83762653026,
      "unique_users": 4680.51711902973,
      "pages_per_visit": 3.03966347664217
    },
    {
      "global_rank": 595025,
      "category_rank": 102,
      "domain": "bernardo.at",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 46894.0180331597,
      "curr_month_visits": 46894.0180331597,
      "unique_users": 19929.9750830101,
      "pages_per_visit": 2.83480408720854
    },
    {
      "global_rank": 467955,
      "category_rank": 102,
      "domain": "jobs.eni.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 66158.9284191561,
      "curr_month_visits": 66158.9284191561,
      "unique_users": 37315.3419732201,
      "pages_per_visit": 4.85588632600999
    },
    {
      "global_rank": 56760,
      "category_rank": 102,
      "domain": "jacobs.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 849780.72561474,
      "curr_month_visits": 849780.72561474,
      "unique_users": 298649.070359823,
      "pages_per_visit": 5.80408191955793
    },
    {
      "global_rank": 275782,
      "category_rank": 102,
      "domain": "baunetz.de",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 164619.696446666,
      "curr_month_visits": 164619.696446666,
      "unique_users": 56805.1909811476,
      "pages_per_visit": 3.54868873115741
    },
    {
      "global_rank": 280435,
      "category_rank": 103,
      "domain": "arqa.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 164223.525111074,
      "curr_month_visits": 164223.525111074,
      "unique_users": 87334.9041754654,
      "pages_per_visit": 3.67731338377324
    },
    {
      "global_rank": 469875,
      "category_rank": 103,
      "domain": "ameco.com.cn",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 66713.5321693025,
      "curr_month_visits": 66713.5321693025,
      "unique_users": 19885.2083562786,
      "pages_per_visit": 11.2180061901282
    },
    {
      "global_rank": 245443,
      "category_rank": 103,
      "domain": "m-chemical.co.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 171052.531573431,
      "curr_month_visits": 171052.531573431,
      "unique_users": 83635.8541180346,
      "pages_per_visit": 2.5227496591885
    },
    {
      "global_rank": 56870,
      "category_rank": 103,
      "domain": "saturn.net",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 801277.258297516,
      "curr_month_visits": 801277.258297516,
      "unique_users": 368656.964137509,
      "pages_per_visit": 4.6313361945029
    },
    {
      "global_rank": 142726,
      "category_rank": 103,
      "domain": "flagma.uz",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 301153.699211702,
      "curr_month_visits": 301153.699211702,
      "unique_users": 167482.370466006,
      "pages_per_visit": 3.04125445487238
    },
    {
      "global_rank": 42809,
      "category_rank": 103,
      "domain": "jwnetweb.jp",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 867090.547358395,
      "curr_month_visits": 867090.547358395,
      "unique_users": 94116.7915608511,
      "pages_per_visit": 12.3494908608885
    },
    {
      "global_rank": 2514257,
      "category_rank": 103,
      "domain": "local-energy.swiss",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 7720.29862015847,
      "curr_month_visits": 7720.29862015847,
      "unique_users": 3715.61527170021,
      "pages_per_visit": 3.18914196155902
    },
    {
      "global_rank": 598381,
      "category_rank": 103,
      "domain": "izeltas.com.tr",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 43063.857116214,
      "curr_month_visits": 43063.857116214,
      "unique_users": 28062.6688750073,
      "pages_per_visit": 3.37072118518905
    },
    {
      "global_rank": 200491,
      "category_rank": 103,
      "domain": "yokoyama-techno.net",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 212412.771643988,
      "curr_month_visits": 212412.771643988,
      "unique_users": 126813.147298343,
      "pages_per_visit": 2.64646788588774
    },
    {
      "global_rank": 57267,
      "category_rank": 104,
      "domain": "dvir.ru",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 812563.520068825,
      "curr_month_visits": 812563.520068825,
      "unique_users": 534637.022112335,
      "pages_per_visit": 4.38490726998675
    },
    {
      "global_rank": 202037,
      "category_rank": 104,
      "domain": "kitz.co.jp",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 185613.292494991,
      "curr_month_visits": 185613.292494991,
      "unique_users": 86031.8005046738,
      "pages_per_visit": 7.49311043416944
    },
    {
      "global_rank": 281865,
      "category_rank": 104,
      "domain": "thespaces.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 177383.515623517,
      "curr_month_visits": 177383.515623517,
      "unique_users": 97224.5149095028,
      "pages_per_visit": 2.62375418707677
    },
    {
      "global_rank": 2530938,
      "category_rank": 104,
      "domain": "alphaenvironmental.net",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 10972.9042221051,
      "curr_month_visits": 10972.9042221051,
      "unique_users": 5453.96150004748,
      "pages_per_visit": 1.40467944540333
    },
    {
      "global_rank": 598705,
      "category_rank": 104,
      "domain": "haisum.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 25938.0832390182,
      "curr_month_visits": 25938.0832390182,
      "unique_users": 2601.53725219835,
      "pages_per_visit": 9.88277940641813
    },
    {
      "global_rank": 470864,
      "category_rank": 104,
      "domain": "stengg.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 84412.7578604939,
      "curr_month_visits": 84412.7578604939,
      "unique_users": 41501.5222848089,
      "pages_per_visit": 3.30009743061793
    },
    {
      "global_rank": 43016,
      "category_rank": 104,
      "domain": "energia.co.jp",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1012406.22807051,
      "curr_month_visits": 1012406.22807051,
      "unique_users": 376378.215273091,
      "pages_per_visit": 7.23215689133114
    },
    {
      "global_rank": 246664,
      "category_rank": 104,
      "domain": "machinerylubrication.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 160109.220700163,
      "curr_month_visits": 160109.220700163,
      "unique_users": 86088.8802328107,
      "pages_per_visit": 2.07064889724161
    },
    {
      "global_rank": 143584,
      "category_rank": 104,
      "domain": "megyeriszabolcskerteszete.hu",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 435125.887756183,
      "curr_month_visits": 435125.887756183,
      "unique_users": 210672.599319021,
      "pages_per_visit": 2.57352589665199
    },
    {
      "global_rank": 247207,
      "category_rank": 105,
      "domain": "syensqo.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 200654.724141839,
      "curr_month_visits": 200654.724141839,
      "unique_users": 89909.3454051506,
      "pages_per_visit": 2.39055085140559
    },
    {
      "global_rank": 202079,
      "category_rank": 105,
      "domain": "technobearing.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 208991.112204071,
      "curr_month_visits": 208991.112204071,
      "unique_users": 119086.274037527,
      "pages_per_visit": 2.97707323925638
    },
    {
      "global_rank": 474048,
      "category_rank": 105,
      "domain": "aviationid.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 88441.6009206477,
      "curr_month_visits": 88441.6009206477,
      "unique_users": 22396.2078321659,
      "pages_per_visit": 4.18266339391706
    },
    {
      "global_rank": 283695,
      "category_rank": 105,
      "domain": "structurae.net",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 168557.889427845,
      "curr_month_visits": 168557.889427845,
      "unique_users": 99459.968942875,
      "pages_per_visit": 2.39122167473117
    },
    {
      "global_rank": 600776,
      "category_rank": 105,
      "domain": "waterpumpsdirect.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 64677.88903052,
      "curr_month_visits": 64677.88903052,
      "unique_users": 40131.9234348329,
      "pages_per_visit": 2.12431069743256
    },
    {
      "global_rank": 144210,
      "category_rank": 105,
      "domain": "agriexpo.online",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 362927.818642313,
      "curr_month_visits": 362927.818642313,
      "unique_users": 222217.08583154,
      "pages_per_visit": 2.67910458160052
    },
    {
      "global_rank": 2540511,
      "category_rank": 105,
      "domain": "nationalstoragetank.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 15882.9621257651,
      "curr_month_visits": 15882.9621257651,
      "unique_users": 9176.10116241034,
      "pages_per_visit": 1.6704846908096
    },
    {
      "global_rank": 57943,
      "category_rank": 105,
      "domain": "toto.jp",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 946179.64966083,
      "curr_month_visits": 946179.64966083,
      "unique_users": 557851.875431379,
      "pages_per_visit": 3.26936939669957
    },
    {
      "global_rank": 43356,
      "category_rank": 105,
      "domain": "bge.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1112711.13504113,
      "curr_month_visits": 1112711.13504113,
      "unique_users": 550033.070090866,
      "pages_per_visit": 5.91008888574992
    },
    {
      "global_rank": 247792,
      "category_rank": 106,
      "domain": "fst.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 167902.510278441,
      "curr_month_visits": 167902.510278441,
      "unique_users": 76135.0250644187,
      "pages_per_visit": 3.09979053511984
    },
    {
      "global_rank": 203679,
      "category_rank": 106,
      "domain": "ssab.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 245276.298370747,
      "curr_month_visits": 245276.298370747,
      "unique_users": 122825.321998747,
      "pages_per_visit": 2.02831043215604
    },
    {
      "global_rank": 2585612,
      "category_rank": 106,
      "domain": "ams-samplers.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 10728.7327915103,
      "curr_month_visits": 10728.7327915103,
      "unique_users": 5176.19186263208,
      "pages_per_visit": 1.98061273175142
    },
    {
      "global_rank": 479865,
      "category_rank": 106,
      "domain": "cam.com.cn",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 54548.1526096725,
      "curr_month_visits": 54548.1526096725,
      "unique_users": 27713.9028668141,
      "pages_per_visit": 9.88587965100892
    },
    {
      "global_rank": 284732,
      "category_rank": 106,
      "domain": "architectuul.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 162163.198669938,
      "curr_month_visits": 162163.198669938,
      "unique_users": 87016.4442713175,
      "pages_per_visit": 2.41442372930743
    },
    {
      "global_rank": 144597,
      "category_rank": 106,
      "domain": "lytagra.lt",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 237723.054819966,
      "curr_month_visits": 237723.054819966,
      "unique_users": 110674.724022879,
      "pages_per_visit": 5.27949589325727
    },
    {
      "global_rank": 58509,
      "category_rank": 106,
      "domain": "grandline.ru",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 1042084.62869683,
      "curr_month_visits": 1042084.62869683,
      "unique_users": 371592.999310763,
      "pages_per_visit": 5.11379820696979
    },
    {
      "global_rank": 615742,
      "category_rank": 106,
      "domain": "dxpe.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 60030.5918314625,
      "curr_month_visits": 60030.5918314625,
      "unique_users": 23213.70161402,
      "pages_per_visit": 3.37252708446666
    },
    {
      "global_rank": 43574,
      "category_rank": 106,
      "domain": "cnpc.com.cn",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1217783.12136895,
      "curr_month_visits": 1217783.12136895,
      "unique_users": 351175.761775139,
      "pages_per_visit": 6.14183025229204
    },
    {
      "global_rank": 145997,
      "category_rank": 107,
      "domain": "mvstore.hu",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 230181.260451254,
      "curr_month_visits": 230181.260451254,
      "unique_users": 113959.191564296,
      "pages_per_visit": 5.63778974113132
    },
    {
      "global_rank": 2595009,
      "category_rank": 107,
      "domain": "protherm.com.ru",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 12329.5098298935,
      "curr_month_visits": 12329.5098298935,
      "unique_users": 6538.07609628292,
      "pages_per_visit": 2.088195981369
    },
    {
      "global_rank": 618649,
      "category_rank": 107,
      "domain": "empire-cat.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 52070.2489528529,
      "curr_month_visits": 52070.2489528529,
      "unique_users": 28843.8735666834,
      "pages_per_visit": 2.41912972508989
    },
    {
      "global_rank": 43681,
      "category_rank": 107,
      "domain": "egat.co.th",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1033326.36119822,
      "curr_month_visits": 1033326.36119822,
      "unique_users": 236129.691361201,
      "pages_per_visit": 7.58991142866419
    },
    {
      "global_rank": 287938,
      "category_rank": 107,
      "domain": "archeyes.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 132825.481431809,
      "curr_month_visits": 132825.481431809,
      "unique_users": 71165.2345547817,
      "pages_per_visit": 2.67524516810111
    },
    {
      "global_rank": 248140,
      "category_rank": 107,
      "domain": "woodgrand.ru",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 203290.362563367,
      "curr_month_visits": 203290.362563367,
      "unique_users": 119426.151323751,
      "pages_per_visit": 2.07067361125405
    },
    {
      "global_rank": 203926,
      "category_rank": 107,
      "domain": "stanki-katalog.ru",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 201429.918770564,
      "curr_month_visits": 201429.918770564,
      "unique_users": 84257.0582085158,
      "pages_per_visit": 3.95602266884068
    },
    {
      "global_rank": 58695,
      "category_rank": 107,
      "domain": "constructconnect.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 844654.252687213,
      "curr_month_visits": 844654.252687213,
      "unique_users": 357092.567707229,
      "pages_per_visit": 5.75848908136169
    },
    {
      "global_rank": 484164,
      "category_rank": 107,
      "domain": "lmiaerospace.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 34922.6718110325,
      "curr_month_visits": 34922.6718110325,
      "unique_users": 4783.1748294543,
      "pages_per_visit": 34.2972657823713
    },
    {
      "global_rank": 59139,
      "category_rank": 108,
      "domain": "yanmar.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 995770.437677431,
      "curr_month_visits": 995770.437677431,
      "unique_users": 540553.741341022,
      "pages_per_visit": 3.42052493528542
    },
    {
      "global_rank": 43683,
      "category_rank": 108,
      "domain": "e-distribuzione.it",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1005055.01391779,
      "curr_month_visits": 1005055.01391779,
      "unique_users": 376314.590173035,
      "pages_per_visit": 7.29628275659796
    },
    {
      "global_rank": 248602,
      "category_rank": 108,
      "domain": "airproducts.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 162038.335212877,
      "curr_month_visits": 162038.335212877,
      "unique_users": 81449.052817274,
      "pages_per_visit": 2.67873263645065
    },
    {
      "global_rank": 2597618,
      "category_rank": 108,
      "domain": "makita.qa",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 7913.74814111733,
      "curr_month_visits": 7913.74814111733,
      "unique_users": 4126.96849913522,
      "pages_per_visit": 2.1496602150444
    },
    {
      "global_rank": 618980,
      "category_rank": 108,
      "domain": "sanlazzaro.bo.it",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 55885.446502571,
      "curr_month_visits": 55885.446502571,
      "unique_users": 30312.7501382306,
      "pages_per_visit": 2.83982517169473
    },
    {
      "global_rank": 204477,
      "category_rank": 108,
      "domain": "hzlmetals.com",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 109721.79793987,
      "curr_month_visits": 109721.79793987,
      "unique_users": 9675.37377833843,
      "pages_per_visit": 23.3689921861333
    },
    {
      "global_rank": 288024,
      "category_rank": 108,
      "domain": "mrcutout.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 109156.806366491,
      "curr_month_visits": 109156.806366491,
      "unique_users": 50817.6395293852,
      "pages_per_visit": 6.21383931360255
    },
    {
      "global_rank": 492696,
      "category_rank": 108,
      "domain": "iso-group.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 80403.4978937308,
      "curr_month_visits": 80403.4978937308,
      "unique_users": 43083.6269404853,
      "pages_per_visit": 2.47219548141294
    },
    {
      "global_rank": 147155,
      "category_rank": 108,
      "domain": "sc-engei.co.jp",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 568849.258065548,
      "curr_month_visits": 568849.258065548,
      "unique_users": 395143.02934571,
      "pages_per_visit": 1.76218953620659
    },
    {
      "global_rank": 205495,
      "category_rank": 109,
      "domain": "hakudo.co.jp",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 173506.544440776,
      "curr_month_visits": 173506.544440776,
      "unique_users": 31450.7568930392,
      "pages_per_visit": 6.72097685709073
    },
    {
      "global_rank": 59171,
      "category_rank": 109,
      "domain": "hipages.com.au",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 800327.643677827,
      "curr_month_visits": 800327.643677827,
      "unique_users": 413240.251565053,
      "pages_per_visit": 4.21510381800869
    },
    {
      "global_rank": 248842,
      "category_rank": 109,
      "domain": "yeswelder.com",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 173565.132279692,
      "curr_month_visits": 173565.132279692,
      "unique_users": 98485.1635582598,
      "pages_per_visit": 2.51710560404493
    },
    {
      "global_rank": 289177,
      "category_rank": 109,
      "domain": "finderfinders.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 230592.940684692,
      "curr_month_visits": 230592.940684692,
      "unique_users": 20857.0360105543,
      "pages_per_visit": 2.09151909205922
    },
    {
      "global_rank": 497608,
      "category_rank": 109,
      "domain": "leonardodrs.com",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 89010.6424091686,
      "curr_month_visits": 89010.6424091686,
      "unique_users": 48688.8334287038,
      "pages_per_visit": 2.40827801516462
    },
    {
      "global_rank": 620497,
      "category_rank": 109,
      "domain": "alumasa.com.br",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 20505.9406570369,
      "curr_month_visits": 20505.9406570369,
      "unique_users": 6434.58973085219,
      "pages_per_visit": 29.1359092060736
    },
    {
      "global_rank": 2651482,
      "category_rank": 109,
      "domain": "hayespump.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 14316.3644575136,
      "curr_month_visits": 14316.3644575136,
      "unique_users": 6011.98540525794,
      "pages_per_visit": 1.4304604183753
    },
    {
      "global_rank": 147760,
      "category_rank": 109,
      "domain": "ricethailand.go.th",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 203814.796340453,
      "curr_month_visits": 203814.796340453,
      "unique_users": 68503.1403990149,
      "pages_per_visit": 9.47990643835518
    },
    {
      "global_rank": 43861,
      "category_rank": 109,
      "domain": "e-reverse.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 841490.70417675,
      "curr_month_visits": 841490.70417675,
      "unique_users": 131559.3447603,
      "pages_per_visit": 12.6613191020458
    },
    {
      "global_rank": 501978,
      "category_rank": 110,
      "domain": "rgaz.ru",
      "category": "Heavy_Industry_and_Engineering/Aerospace_and_Defense",
      "avg_month_visits": 89820.65644493,
      "curr_month_visits": 89820.65644493,
      "unique_users": 12821.9681431459,
      "pages_per_visit": 2.81585431517378
    },
    {
      "global_rank": 2662568,
      "category_rank": 110,
      "domain": "livingstonfarm.com",
      "category": "Heavy_Industry_and_Engineering/Waste_Water_and_Environmental",
      "avg_month_visits": 10338.8309601791,
      "curr_month_visits": 10338.8309601791,
      "unique_users": 5562.53879733434,
      "pages_per_visit": 2.45640719445023
    },
    {
      "global_rank": 289299,
      "category_rank": 110,
      "domain": "dezeenjobs.com",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 135476.47919655,
      "curr_month_visits": 135476.47919655,
      "unique_users": 53506.9451305809,
      "pages_per_visit": 3.89156461559208
    },
    {
      "global_rank": 149401,
      "category_rank": 110,
      "domain": "lafranceagricole.fr",
      "category": "Heavy_Industry_and_Engineering/Agriculture",
      "avg_month_visits": 408463.035528214,
      "curr_month_visits": 408463.035528214,
      "unique_users": 222050.414972532,
      "pages_per_visit": 2.26338548902188
    },
    {
      "global_rank": 248853,
      "category_rank": 110,
      "domain": "ipforce.jp",
      "category": "Heavy_Industry_and_Engineering/Chemical_Industry",
      "avg_month_visits": 164134.260419524,
      "curr_month_visits": 164134.260419524,
      "unique_users": 100077.348464246,
      "pages_per_visit": 3.25918281719387
    },
    {
      "global_rank": 59511,
      "category_rank": 110,
      "domain": "fastenal.com",
      "category": "Heavy_Industry_and_Engineering/Construction_and_Maintenance",
      "avg_month_visits": 829665.750237303,
      "curr_month_visits": 829665.750237303,
      "unique_users": 457892.195673282,
      "pages_per_visit": 4.6003561126689
    },
    {
      "global_rank": 44445,
      "category_rank": 110,
      "domain": "reliant.com",
      "category": "Heavy_Industry_and_Engineering/Energy_Industry",
      "avg_month_visits": 1293756.39046027,
      "curr_month_visits": 1293756.39046027,
      "unique_users": 627940.481450597,
      "pages_per_visit": 4.7314174015537
    },
    {
      "global_rank": 622567,
      "category_rank": 110,
      "domain": "industrynet.com",
      "category": "Heavy_Industry_and_Engineering/Heavy_Industry_and_Engineering",
      "avg_month_visits": 72318.8889173367,
      "curr_month_visits": 72318.8889173367,
      "unique_users": 50033.1309876697,
      "pages_per_visit": 1.60922585715816
    },
    {
      "global_rank": 205962,
      "category_rank": 110,
      "domain": "chinalco.com.cn",
      "category": "Heavy_Industry_and_Engineering/Metals_and_Mining",
      "avg_month_visits": 156275.880001658,
      "curr_month_visits": 156275.880001658,
      "unique_users": 43449.0649871647,
      "pages_per_visit": 10.7997201909227
    },
    {
      "global_rank": 291086,
      "category_rank": 111,
      "domain": "toffu.co",
      "category": "Heavy_Industry_and_Engineering/Architecture",
      "avg_month_visits": 139151.525562692,
      "curr_month_visits": 139151.525562692,
      "unique_users": 69202.3315097229,
      "pages_per_visit": 3.11152551041091
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