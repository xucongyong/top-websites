
import {Top_Website_Categories} from '@/lib/top_websites';

export const metadata = {
  title: 'Top Finance Websites Ranking in the World, 2025',
  description: 'The top 1000 most visited entertainment websites in the World by Ahrefs organic search traffic estimates. Updated monthly. 2025',
  keywords: ['Top Websites', 'Top Websites Ranking','Finance'],
  authors: [
    { name: 'hackX', url: 'https://www.xucongyong.com' }
  ]
}

export default function Page() {

  const global_rank_all = [
    {
      "global_rank": 54,
      "category_rank": 1,
      "domain": "paypal.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 511497490.545691,
      "curr_month_visits": 511497490.545691,
      "unique_users": 205914272.462865,
      "pages_per_visit": 4.73612460920878
    },
    {
      "global_rank": 371,
      "category_rank": 1,
      "domain": "poste.it",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 88832804.3510534,
      "curr_month_visits": 88832804.3510534,
      "unique_users": 27496231.6270567,
      "pages_per_visit": 6.47173862394509
    },
    {
      "global_rank": 276,
      "category_rank": 1,
      "domain": "intuit.com",
      "category": "Finance/Finance",
      "avg_month_visits": 109575956.771571,
      "curr_month_visits": 109575956.771571,
      "unique_users": 21859957.8160095,
      "pages_per_visit": 10.6703698330821
    },
    {
      "global_rank": 906,
      "category_rank": 1,
      "domain": "kontur.ru",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 42232600.0429377,
      "curr_month_visits": 42232600.0429377,
      "unique_users": 9122914.26391714,
      "pages_per_visit": 9.3424118466414
    },
    {
      "global_rank": 84,
      "category_rank": 1,
      "domain": "tradingview.com",
      "category": "Finance/Investing",
      "avg_month_visits": 200820271.162713,
      "curr_month_visits": 200820271.162713,
      "unique_users": 23277411.4344402,
      "pages_per_visit": 27.5374468590287
    },
    {
      "global_rank": 1572,
      "category_rank": 1,
      "domain": "progressive.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 28847870.5484096,
      "curr_month_visits": 28847870.5484096,
      "unique_users": 14960625.0111567,
      "pages_per_visit": 5.64065316562313
    },
    {
      "global_rank": 534,
      "category_rank": 2,
      "domain": "adp.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 82363004.0627144,
      "curr_month_visits": 82363004.0627144,
      "unique_users": 20809125.1440381,
      "pages_per_visit": 4.65722666373959
    },
    {
      "global_rank": 1651,
      "category_rank": 2,
      "domain": "bajajfinserv.in",
      "category": "Finance/Insurance",
      "avg_month_visits": 34538199.4575772,
      "curr_month_visits": 34538199.4575772,
      "unique_users": 18699827.5312456,
      "pages_per_visit": 3.31318002120822
    },
    {
      "global_rank": 4178,
      "category_rank": 2,
      "domain": "icai.org",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 12430174.3240941,
      "curr_month_visits": 12430174.3240941,
      "unique_users": 2284468.73651086,
      "pages_per_visit": 5.87557446175357
    },
    {
      "global_rank": 141,
      "category_rank": 2,
      "domain": "chase.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 176428223.398557,
      "curr_month_visits": 176428223.398557,
      "unique_users": 42699790.294604,
      "pages_per_visit": 8.74458819276603
    },
    {
      "global_rank": 288,
      "category_rank": 2,
      "domain": "fidelity.com",
      "category": "Finance/Investing",
      "avg_month_visits": 96101807.7839871,
      "curr_month_visits": 96101807.7839871,
      "unique_users": 18084813.706506,
      "pages_per_visit": 7.65458900739823
    },
    {
      "global_rank": 763,
      "category_rank": 2,
      "domain": "coinbase.com",
      "category": "Finance/Finance",
      "avg_month_visits": 37896339.0136609,
      "curr_month_visits": 37896339.0136609,
      "unique_users": 11316664.3338963,
      "pages_per_visit": 5.30591511585915
    },
    {
      "global_rank": 889,
      "category_rank": 3,
      "domain": "trustpilot.com",
      "category": "Finance/Finance",
      "avg_month_visits": 67085564.0248402,
      "curr_month_visits": 67085564.0248402,
      "unique_users": 42753915.6143981,
      "pages_per_visit": 2.04622735422653
    },
    {
      "global_rank": 5974,
      "category_rank": 3,
      "domain": "paysec-3dssvgw.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 8773979.40169375,
      "curr_month_visits": 8773979.40169375,
      "unique_users": 5582851.50981495,
      "pages_per_visit": 3.70799923664826
    },
    {
      "global_rank": 201,
      "category_rank": 3,
      "domain": "capitalone.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 130654155.752135,
      "curr_month_visits": 130654155.752135,
      "unique_users": 45337632.0558195,
      "pages_per_visit": 6.91996006386324
    },
    {
      "global_rank": 332,
      "category_rank": 3,
      "domain": "binance.com",
      "category": "Finance/Investing",
      "avg_month_visits": 60818469.7215697,
      "curr_month_visits": 60818469.7215697,
      "unique_users": 14044171.7579193,
      "pages_per_visit": 12.7005996076362
    },
    {
      "global_rank": 574,
      "category_rank": 3,
      "domain": "klarna.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 60109497.1173877,
      "curr_month_visits": 60109497.1173877,
      "unique_users": 31343199.6755425,
      "pages_per_visit": 4.6175137653932
    },
    {
      "global_rank": 1680,
      "category_rank": 3,
      "domain": "healthcare.gov",
      "category": "Finance/Insurance",
      "avg_month_visits": 10693861.4517555,
      "curr_month_visits": 10693861.4517555,
      "unique_users": 5905798.66617602,
      "pages_per_visit": 9.63257191092993
    },
    {
      "global_rank": 359,
      "category_rank": 4,
      "domain": "zerodha.com",
      "category": "Finance/Investing",
      "avg_month_visits": 80208838.6751281,
      "curr_month_visits": 80208838.6751281,
      "unique_users": 12180329.7332017,
      "pages_per_visit": 12.7371389191917
    },
    {
      "global_rank": 991,
      "category_rank": 4,
      "domain": "moneyforward.com",
      "category": "Finance/Finance",
      "avg_month_visits": 35506253.5630168,
      "curr_month_visits": 35506253.5630168,
      "unique_users": 9485829.14746319,
      "pages_per_visit": 8.49796310877928
    },
    {
      "global_rank": 6125,
      "category_rank": 4,
      "domain": "deloitte.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 10046629.7973898,
      "curr_month_visits": 10046629.7973898,
      "unique_users": 4349911.9762116,
      "pages_per_visit": 4.7347593946866
    },
    {
      "global_rank": 604,
      "category_rank": 4,
      "domain": "alipay.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 52954611.8966194,
      "curr_month_visits": 52954611.8966194,
      "unique_users": 26461425.4803468,
      "pages_per_visit": 6.62212986243301
    },
    {
      "global_rank": 1760,
      "category_rank": 4,
      "domain": "kaiserpermanente.org",
      "category": "Finance/Insurance",
      "avg_month_visits": 25911536.1950198,
      "curr_month_visits": 25911536.1950198,
      "unique_users": 9630740.94133814,
      "pages_per_visit": 5.74542568414563
    },
    {
      "global_rank": 260,
      "category_rank": 4,
      "domain": "wellsfargo.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 96196091.8566711,
      "curr_month_visits": 96196091.8566711,
      "unique_users": 20119378.4841499,
      "pages_per_visit": 9.46132008909905
    },
    {
      "global_rank": 1081,
      "category_rank": 5,
      "domain": "credit-agricole.fr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 36542286.5650969,
      "curr_month_visits": 36542286.5650969,
      "unique_users": 5791849.95950718,
      "pages_per_visit": 7.0397378147934
    },
    {
      "global_rank": 272,
      "category_rank": 5,
      "domain": "bankofamerica.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 108401558.281481,
      "curr_month_visits": 108401558.281481,
      "unique_users": 26466173.7626072,
      "pages_per_visit": 7.11598592087707
    },
    {
      "global_rank": 1993,
      "category_rank": 5,
      "domain": "uhc.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 19071537.6865873,
      "curr_month_visits": 19071537.6865873,
      "unique_users": 8755962.5872904,
      "pages_per_visit": 7.01309592751538
    },
    {
      "global_rank": 388,
      "category_rank": 5,
      "domain": "moneycontrol.com",
      "category": "Finance/Investing",
      "avg_month_visits": 121030035.643516,
      "curr_month_visits": 121030035.643516,
      "unique_users": 35196917.0978,
      "pages_per_visit": 3.46931554092709
    },
    {
      "global_rank": 6426,
      "category_rank": 5,
      "domain": "infomart.co.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 7331249.25396396,
      "curr_month_visits": 7331249.25396396,
      "unique_users": 1331375.60973873,
      "pages_per_visit": 8.95215975567937
    },
    {
      "global_rank": 1379,
      "category_rank": 5,
      "domain": "toyokeizai.net",
      "category": "Finance/Finance",
      "avg_month_visits": 41460623.3120474,
      "curr_month_visits": 41460623.3120474,
      "unique_users": 19652162.4157151,
      "pages_per_visit": 2.74105101907281
    },
    {
      "global_rank": 1105,
      "category_rank": 6,
      "domain": "vtb.ru",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 39927519.5658663,
      "curr_month_visits": 39927519.5658663,
      "unique_users": 15335296.2321984,
      "pages_per_visit": 4.83453790005582
    },
    {
      "global_rank": 1540,
      "category_rank": 6,
      "domain": "mercadopago.com.ar",
      "category": "Finance/Finance",
      "avg_month_visits": 35892339.9254375,
      "curr_month_visits": 35892339.9254375,
      "unique_users": 8399345.47556564,
      "pages_per_visit": 4.53969224513922
    },
    {
      "global_rank": 2031,
      "category_rank": 6,
      "domain": "usaa.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 20765464.6919204,
      "curr_month_visits": 20765464.6919204,
      "unique_users": 7511139.83426167,
      "pages_per_visit": 6.91198267747819
    },
    {
      "global_rank": 415,
      "category_rank": 6,
      "domain": "coinmarketcap.com",
      "category": "Finance/Investing",
      "avg_month_visits": 98665364.7213624,
      "curr_month_visits": 98665364.7213624,
      "unique_users": 13603211.0931739,
      "pages_per_visit": 2.90908655836852
    },
    {
      "global_rank": 330,
      "category_rank": 6,
      "domain": "americanexpress.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 99675195.6425902,
      "curr_month_visits": 99675195.6425902,
      "unique_users": 39365523.3060927,
      "pages_per_visit": 5.39513238787773
    },
    {
      "global_rank": 7312,
      "category_rank": 6,
      "domain": "cleartax.in",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 12330051.0354468,
      "curr_month_visits": 12330051.0354468,
      "unique_users": 7728144.04638192,
      "pages_per_visit": 1.87644216805027
    },
    {
      "global_rank": 2514,
      "category_rank": 7,
      "domain": "statefarm.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 17709938.1555207,
      "curr_month_visits": 17709938.1555207,
      "unique_users": 10323266.7758866,
      "pages_per_visit": 6.71744671449931
    },
    {
      "global_rank": 396,
      "category_rank": 7,
      "domain": "citi.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 115956320.097015,
      "curr_month_visits": 115956320.097015,
      "unique_users": 25259979.1470419,
      "pages_per_visit": 4.67276234751931
    },
    {
      "global_rank": 417,
      "category_rank": 7,
      "domain": "investing.com",
      "category": "Finance/Investing",
      "avg_month_visits": 131300300.94722,
      "curr_month_visits": 131300300.94722,
      "unique_users": 22519490.6613068,
      "pages_per_visit": 3.03169723145656
    },
    {
      "global_rank": 8211,
      "category_rank": 7,
      "domain": "ey.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 7048017.24928183,
      "curr_month_visits": 7048017.24928183,
      "unique_users": 4082164.04998077,
      "pages_per_visit": 4.46958502363707
    },
    {
      "global_rank": 1565,
      "category_rank": 7,
      "domain": "marketwatch.com",
      "category": "Finance/Finance",
      "avg_month_visits": 47002738.3251196,
      "curr_month_visits": 47002738.3251196,
      "unique_users": 12483870.7016982,
      "pages_per_visit": 2.63462779497252
    },
    {
      "global_rank": 1162,
      "category_rank": 7,
      "domain": "rakuten-card.co.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 39057906.9967553,
      "curr_month_visits": 39057906.9967553,
      "unique_users": 13150944.6991429,
      "pages_per_visit": 4.11145009058232
    },
    {
      "global_rank": 8790,
      "category_rank": 8,
      "domain": "ottplay.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 6925969.87169583,
      "curr_month_visits": 6925969.87169583,
      "unique_users": 4529011.30227778,
      "pages_per_visit": 2.12473556953776
    },
    {
      "global_rank": 2763,
      "category_rank": 8,
      "domain": "healthsafe-id.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 17425281.2554001,
      "curr_month_visits": 17425281.2554001,
      "unique_users": 8322612.14090995,
      "pages_per_visit": 4.79281136101892
    },
    {
      "global_rank": 418,
      "category_rank": 8,
      "domain": "schwab.com",
      "category": "Finance/Investing",
      "avg_month_visits": 81572572.5790845,
      "curr_month_visits": 81572572.5790845,
      "unique_users": 11329068.5670999,
      "pages_per_visit": 7.43877065964749
    },
    {
      "global_rank": 1200,
      "category_rank": 8,
      "domain": "mufg.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 35844923.7575926,
      "curr_month_visits": 35844923.7575926,
      "unique_users": 13300904.6829602,
      "pages_per_visit": 5.31761753717219
    },
    {
      "global_rank": 1661,
      "category_rank": 8,
      "domain": "coingecko.com",
      "category": "Finance/Finance",
      "avg_month_visits": 29713651.4251492,
      "curr_month_visits": 29713651.4251492,
      "unique_users": 5178993.33812068,
      "pages_per_visit": 3.2496041600986
    },
    {
      "global_rank": 442,
      "category_rank": 8,
      "domain": "hdfcbank.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 89080672.1225913,
      "curr_month_visits": 89080672.1225913,
      "unique_users": 24701169.4713497,
      "pages_per_visit": 5.53667360656411
    },
    {
      "global_rank": 1201,
      "category_rank": 9,
      "domain": "experian.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 40685394.0109739,
      "curr_month_visits": 40685394.0109739,
      "unique_users": 19376278.9625801,
      "pages_per_visit": 5.01537494825057
    },
    {
      "global_rank": 3141,
      "category_rank": 9,
      "domain": "aetna.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 11853250.0936272,
      "curr_month_visits": 11853250.0936272,
      "unique_users": 5280837.72572695,
      "pages_per_visit": 8.87528859550283
    },
    {
      "global_rank": 1708,
      "category_rank": 9,
      "domain": "fortune.com",
      "category": "Finance/Finance",
      "avg_month_visits": 40132670.3854992,
      "curr_month_visits": 40132670.3854992,
      "unique_users": 24911345.3101497,
      "pages_per_visit": 1.39099327675282
    },
    {
      "global_rank": 477,
      "category_rank": 9,
      "domain": "caixa.gov.br",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 73987264.3769175,
      "curr_month_visits": 73987264.3769175,
      "unique_users": 19362543.3568458,
      "pages_per_visit": 6.2154911490033
    },
    {
      "global_rank": 8961,
      "category_rank": 9,
      "domain": "paytmpayments.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 7065344.10534241,
      "curr_month_visits": 7065344.10534241,
      "unique_users": 4032451.85945082,
      "pages_per_visit": 2.72861071792573
    },
    {
      "global_rank": 449,
      "category_rank": 9,
      "domain": "rakuten-sec.co.jp",
      "category": "Finance/Investing",
      "avg_month_visits": 70715032.547186,
      "curr_month_visits": 70715032.547186,
      "unique_users": 8273508.45497137,
      "pages_per_visit": 8.88417680933554
    },
    {
      "global_rank": 1227,
      "category_rank": 10,
      "domain": "nspk.ru",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 51944246.7564154,
      "curr_month_visits": 51944246.7564154,
      "unique_users": 29959401.54926,
      "pages_per_visit": 1.47311090513273
    },
    {
      "global_rank": 1716,
      "category_rank": 10,
      "domain": "ft.com",
      "category": "Finance/Finance",
      "avg_month_visits": 35794897.5758074,
      "curr_month_visits": 35794897.5758074,
      "unique_users": 14835101.2799332,
      "pages_per_visit": 2.37403403678098
    },
    {
      "global_rank": 3612,
      "category_rank": 10,
      "domain": "cigna.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 13418161.289512,
      "curr_month_visits": 13418161.289512,
      "unique_users": 6499666.3031417,
      "pages_per_visit": 6.96797628280911
    },
    {
      "global_rank": 639,
      "category_rank": 10,
      "domain": "tinkoff.ru",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 60467808.4870065,
      "curr_month_visits": 60467808.4870065,
      "unique_users": 31047769.4136992,
      "pages_per_visit": 5.1951491595256
    },
    {
      "global_rank": 501,
      "category_rank": 10,
      "domain": "sbisec.co.jp",
      "category": "Finance/Investing",
      "avg_month_visits": 63784745.9376583,
      "curr_month_visits": 63784745.9376583,
      "unique_users": 6416884.32232809,
      "pages_per_visit": 10.1773619953826
    },
    {
      "global_rank": 9519,
      "category_rank": 10,
      "domain": "efatura.gov.tr",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 5901438.07433234,
      "curr_month_visits": 5901438.07433234,
      "unique_users": 1218991.87897801,
      "pages_per_visit": 5.61305138840085
    },
    {
      "global_rank": 3885,
      "category_rank": 11,
      "domain": "geico.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 12359101.3349831,
      "curr_month_visits": 12359101.3349831,
      "unique_users": 6928031.38069184,
      "pages_per_visit": 6.22841313852369
    },
    {
      "global_rank": 1230,
      "category_rank": 11,
      "domain": "banesconline.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 10614606.9771982,
      "curr_month_visits": 10614606.9771982,
      "unique_users": 1190292.33874542,
      "pages_per_visit": 66.9833562100079
    },
    {
      "global_rank": 510,
      "category_rank": 11,
      "domain": "economictimes.com",
      "category": "Finance/Investing",
      "avg_month_visits": 122903663.803938,
      "curr_month_visits": 122903663.803938,
      "unique_users": 50679793.3975567,
      "pages_per_visit": 1.94833428488194
    },
    {
      "global_rank": 9567,
      "category_rank": 11,
      "domain": "teachoo.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 6522005.48735589,
      "curr_month_visits": 6522005.48735589,
      "unique_users": 2492842.05593023,
      "pages_per_visit": 4.2539762002008
    },
    {
      "global_rank": 1836,
      "category_rank": 11,
      "domain": "adyen.com",
      "category": "Finance/Finance",
      "avg_month_visits": 33300065.1590128,
      "curr_month_visits": 33300065.1590128,
      "unique_users": 19795782.9724589,
      "pages_per_visit": 2.43496451221392
    },
    {
      "global_rank": 717,
      "category_rank": 11,
      "domain": "icicibank.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 46194996.5591796,
      "curr_month_visits": 46194996.5591796,
      "unique_users": 15801349.6661612,
      "pages_per_visit": 9.20319675746507
    },
    {
      "global_rank": 1853,
      "category_rank": 12,
      "domain": "money.pl",
      "category": "Finance/Finance",
      "avg_month_visits": 42095879.140098,
      "curr_month_visits": 42095879.140098,
      "unique_users": 9327566.2921187,
      "pages_per_visit": 1.67023774703989
    },
    {
      "global_rank": 10655,
      "category_rank": 12,
      "domain": "defterbeyan.gov.tr",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2599492.22060699,
      "curr_month_visits": 2599492.22060699,
      "unique_users": 327186.186674294,
      "pages_per_visit": 23.2810564222418
    },
    {
      "global_rank": 635,
      "category_rank": 12,
      "domain": "finance.yahoo.co.jp",
      "category": "Finance/Investing",
      "avg_month_visits": 74267506.4826703,
      "curr_month_visits": 74267506.4826703,
      "unique_users": 11228378.8144657,
      "pages_per_visit": 4.64088430150666
    },
    {
      "global_rank": 781,
      "category_rank": 12,
      "domain": "td.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 42088420.1263876,
      "curr_month_visits": 42088420.1263876,
      "unique_users": 10087125.490528,
      "pages_per_visit": 8.36434619084767
    },
    {
      "global_rank": 4237,
      "category_rank": 12,
      "domain": "licindia.in",
      "category": "Finance/Insurance",
      "avg_month_visits": 8842052.64259355,
      "curr_month_visits": 8842052.64259355,
      "unique_users": 3832704.52282333,
      "pages_per_visit": 10.4260269621846
    },
    {
      "global_rank": 1355,
      "category_rank": 12,
      "domain": "check24.de",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 28173960.5284919,
      "curr_month_visits": 28173960.5284919,
      "unique_users": 12709132.9615548,
      "pages_per_visit": 6.39988983892498
    },
    {
      "global_rank": 4324,
      "category_rank": 13,
      "domain": "comparethemarket.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 11034304.4367328,
      "curr_month_visits": 11034304.4367328,
      "unique_users": 5917341.980204,
      "pages_per_visit": 8.25731048230495
    },
    {
      "global_rank": 1904,
      "category_rank": 13,
      "domain": "upbit.com",
      "category": "Finance/Finance",
      "avg_month_visits": 7095958.45282229,
      "curr_month_visits": 7095958.45282229,
      "unique_users": 686491.024925913,
      "pages_per_visit": 43.673606721254
    },
    {
      "global_rank": 866,
      "category_rank": 13,
      "domain": "sberbank.ru",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 44243525.6948661,
      "curr_month_visits": 44243525.6948661,
      "unique_users": 14624226.6596818,
      "pages_per_visit": 6.2452858522014
    },
    {
      "global_rank": 1495,
      "category_rank": 13,
      "domain": "labanquepostale.fr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 24177590.7117382,
      "curr_month_visits": 24177590.7117382,
      "unique_users": 4278471.87668183,
      "pages_per_visit": 9.22055072648231
    },
    {
      "global_rank": 11657,
      "category_rank": 13,
      "domain": "accaglobal.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 3779252.05328169,
      "curr_month_visits": 3779252.05328169,
      "unique_users": 1143784.18831952,
      "pages_per_visit": 7.06605754637173
    },
    {
      "global_rank": 650,
      "category_rank": 13,
      "domain": "coinmaster.com",
      "category": "Finance/Investing",
      "avg_month_visits": 106669068.603173,
      "curr_month_visits": 106669068.603173,
      "unique_users": 11964853.5788018,
      "pages_per_visit": 3.15197122147006
    },
    {
      "global_rank": 1598,
      "category_rank": 14,
      "domain": "freee.co.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 21786512.732965,
      "curr_month_visits": 21786512.732965,
      "unique_users": 5324778.46312551,
      "pages_per_visit": 10.9134761954951
    },
    {
      "global_rank": 1980,
      "category_rank": 14,
      "domain": "xe.com",
      "category": "Finance/Finance",
      "avg_month_visits": 31123185.9787327,
      "curr_month_visits": 31123185.9787327,
      "unique_users": 12788968.4516093,
      "pages_per_visit": 3.13318291821787
    },
    {
      "global_rank": 4440,
      "category_rank": 14,
      "domain": "allstate.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 13073644.8283759,
      "curr_month_visits": 13073644.8283759,
      "unique_users": 7132720.04017923,
      "pages_per_visit": 4.71709117084622
    },
    {
      "global_rank": 670,
      "category_rank": 14,
      "domain": "eastmoney.com",
      "category": "Finance/Investing",
      "avg_month_visits": 45270275.1652462,
      "curr_month_visits": 45270275.1652462,
      "unique_users": 7884045.70204663,
      "pages_per_visit": 10.9326646110254
    },
    {
      "global_rank": 929,
      "category_rank": 14,
      "domain": "discover.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 43922323.605848,
      "curr_month_visits": 43922323.605848,
      "unique_users": 17136928.7935279,
      "pages_per_visit": 5.45687702564102
    },
    {
      "global_rank": 11658,
      "category_rank": 14,
      "domain": "paypay-card.co.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 5087116.24780473,
      "curr_month_visits": 5087116.24780473,
      "unique_users": 2712639.28151294,
      "pages_per_visit": 3.431015516517
    },
    {
      "global_rank": 2077,
      "category_rank": 15,
      "domain": "finance.naver.com",
      "category": "Finance/Finance",
      "avg_month_visits": 21504084.5321338,
      "curr_month_visits": 21504084.5321338,
      "unique_users": 1867316.68409353,
      "pages_per_visit": 7.85531472222237
    },
    {
      "global_rank": 4671,
      "category_rank": 15,
      "domain": "policybazaar.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 12388405.9987659,
      "curr_month_visits": 12388405.9987659,
      "unique_users": 7208515.96394374,
      "pages_per_visit": 4.40225282134669
    },
    {
      "global_rank": 11662,
      "category_rank": 15,
      "domain": "pwc.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 5643742.90369573,
      "curr_month_visits": 5643742.90369573,
      "unique_users": 3052519.99801913,
      "pages_per_visit": 4.29567817750344
    },
    {
      "global_rank": 958,
      "category_rank": 15,
      "domain": "bancoestado.cl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 44579309.9355298,
      "curr_month_visits": 44579309.9355298,
      "unique_users": 6941603.81735661,
      "pages_per_visit": 6.05072445112625
    },
    {
      "global_rank": 865,
      "category_rank": 15,
      "domain": "exness.com",
      "category": "Finance/Investing",
      "avg_month_visits": 75465888.1523916,
      "curr_month_visits": 75465888.1523916,
      "unique_users": 37516305.7759463,
      "pages_per_visit": 2.02583970655064
    },
    {
      "global_rank": 1675,
      "category_rank": 15,
      "domain": "caf.fr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 21099723.7662977,
      "curr_month_visits": 21099723.7662977,
      "unique_users": 7249802.78090195,
      "pages_per_visit": 10.1200837330703
    },
    {
      "global_rank": 11989,
      "category_rank": 16,
      "domain": "audit-it.ru",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 7169555.73505196,
      "curr_month_visits": 7169555.73505196,
      "unique_users": 4327049.56037236,
      "pages_per_visit": 1.75566472774118
    },
    {
      "global_rank": 1726,
      "category_rank": 16,
      "domain": "patria.org.ve",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 15621128.1605452,
      "curr_month_visits": 15621128.1605452,
      "unique_users": 1787931.41463239,
      "pages_per_visit": 17.6053358658241
    },
    {
      "global_rank": 5327,
      "category_rank": 16,
      "domain": "progressivedirect.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 8028413.93958572,
      "curr_month_visits": 8028413.93958572,
      "unique_users": 4850449.74793056,
      "pages_per_visit": 8.43382910783345
    },
    {
      "global_rank": 1015,
      "category_rank": 16,
      "domain": "royalbank.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 25884589.0267881,
      "curr_month_visits": 25884589.0267881,
      "unique_users": 5133476.01790992,
      "pages_per_visit": 13.9760709204624
    },
    {
      "global_rank": 2158,
      "category_rank": 16,
      "domain": "sberbank.com",
      "category": "Finance/Finance",
      "avg_month_visits": 31633590.582506,
      "curr_month_visits": 31633590.582506,
      "unique_users": 20211323.8176336,
      "pages_per_visit": 1.84990171256232
    },
    {
      "global_rank": 884,
      "category_rank": 16,
      "domain": "etoro.com",
      "category": "Finance/Investing",
      "avg_month_visits": 46993732.687918,
      "curr_month_visits": 46993732.687918,
      "unique_users": 15550035.4355788,
      "pages_per_visit": 3.9464361538597
    },
    {
      "global_rank": 2174,
      "category_rank": 17,
      "domain": "cafef.vn",
      "category": "Finance/Finance",
      "avg_month_visits": 31225995.6991032,
      "curr_month_visits": 31225995.6991032,
      "unique_users": 9686372.49821364,
      "pages_per_visit": 3.31219230595376
    },
    {
      "global_rank": 5438,
      "category_rank": 17,
      "domain": "humana.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 7566370.55985301,
      "curr_month_visits": 7566370.55985301,
      "unique_users": 3715921.47078782,
      "pages_per_visit": 6.13577399699452
    },
    {
      "global_rank": 948,
      "category_rank": 17,
      "domain": "visualmirage.co",
      "category": "Finance/Investing",
      "avg_month_visits": 55643525.7679351,
      "curr_month_visits": 55643525.7679351,
      "unique_users": 34474783.2467739,
      "pages_per_visit": 1.96312823287281
    },
    {
      "global_rank": 1872,
      "category_rank": 17,
      "domain": "desjardins.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 18487455.0343502,
      "curr_month_visits": 18487455.0343502,
      "unique_users": 3436151.95129294,
      "pages_per_visit": 10.7428432298613
    },
    {
      "global_rank": 12062,
      "category_rank": 17,
      "domain": "vero.fi",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 3038309.06039908,
      "curr_month_visits": 3038309.06039908,
      "unique_users": 1580511.2357853,
      "pages_per_visit": 8.57096337944807
    },
    {
      "global_rank": 1098,
      "category_rank": 17,
      "domain": "alfabank.ru",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 44036384.1664341,
      "curr_month_visits": 44036384.1664341,
      "unique_users": 14074520.502936,
      "pages_per_visit": 4.8880801749711
    },
    {
      "global_rank": 1135,
      "category_rank": 18,
      "domain": "creditkarma.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 38918702.9327658,
      "curr_month_visits": 38918702.9327658,
      "unique_users": 17089012.5768984,
      "pages_per_visit": 4.99977000596029
    },
    {
      "global_rank": 5877,
      "category_rank": 18,
      "domain": "aok.de",
      "category": "Finance/Insurance",
      "avg_month_visits": 10514309.3285876,
      "curr_month_visits": 10514309.3285876,
      "unique_users": 6614602.21115559,
      "pages_per_visit": 4.03804915530214
    },
    {
      "global_rank": 967,
      "category_rank": 18,
      "domain": "groww.in",
      "category": "Finance/Investing",
      "avg_month_visits": 48643084.4339908,
      "curr_month_visits": 48643084.4339908,
      "unique_users": 18072122.1472984,
      "pages_per_visit": 5.65993247990968
    },
    {
      "global_rank": 2204,
      "category_rank": 18,
      "domain": "ilsole24ore.com",
      "category": "Finance/Finance",
      "avg_month_visits": 31970231.2809079,
      "curr_month_visits": 31970231.2809079,
      "unique_users": 10025855.2452719,
      "pages_per_visit": 2.35667328772949
    },
    {
      "global_rank": 12094,
      "category_rank": 18,
      "domain": "hrblock.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 4271212.28500306,
      "curr_month_visits": 4271212.28500306,
      "unique_users": 2022856.2388097,
      "pages_per_visit": 5.06835165849582
    },
    {
      "global_rank": 1953,
      "category_rank": 18,
      "domain": "smbc-card.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 24424886.2013799,
      "curr_month_visits": 24424886.2013799,
      "unique_users": 10771696.6565426,
      "pages_per_visit": 4.44574826580313
    },
    {
      "global_rank": 1008,
      "category_rank": 19,
      "domain": "dexscreener.com",
      "category": "Finance/Investing",
      "avg_month_visits": 23152199.2522075,
      "curr_month_visits": 23152199.2522075,
      "unique_users": 2103409.46745373,
      "pages_per_visit": 13.4884702716381
    },
    {
      "global_rank": 1969,
      "category_rank": 19,
      "domain": "hometax.go.kr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 17540507.9756763,
      "curr_month_visits": 17540507.9756763,
      "unique_users": 3887037.51190181,
      "pages_per_visit": 10.0457855172227
    },
    {
      "global_rank": 12125,
      "category_rank": 19,
      "domain": "mykomon.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 5087114.95992694,
      "curr_month_visits": 5087114.95992694,
      "unique_users": 468513.283820713,
      "pages_per_visit": 6.84530462010515
    },
    {
      "global_rank": 2351,
      "category_rank": 19,
      "domain": "businesstoday.in",
      "category": "Finance/Finance",
      "avg_month_visits": 38168576.0998131,
      "curr_month_visits": 38168576.0998131,
      "unique_users": 20854930.3051632,
      "pages_per_visit": 1.57634720931176
    },
    {
      "global_rank": 1151,
      "category_rank": 19,
      "domain": "wise.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 42170035.4072136,
      "curr_month_visits": 42170035.4072136,
      "unique_users": 21597570.9072608,
      "pages_per_visit": 4.09338669691797
    },
    {
      "global_rank": 6649,
      "category_rank": 19,
      "domain": "health.aetna.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 6133124.78357151,
      "curr_month_visits": 6133124.78357151,
      "unique_users": 2735708.82466447,
      "pages_per_visit": 8.24707519324985
    },
    {
      "global_rank": 1341,
      "category_rank": 20,
      "domain": "synchrony.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 40420076.7678857,
      "curr_month_visits": 40420076.7678857,
      "unique_users": 20874780.0643986,
      "pages_per_visit": 3.26802826606401
    },
    {
      "global_rank": 13060,
      "category_rank": 20,
      "domain": "fakturownia.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 3708764.97346926,
      "curr_month_visits": 3708764.97346926,
      "unique_users": 601528.466441744,
      "pages_per_visit": 9.05917151031557
    },
    {
      "global_rank": 2381,
      "category_rank": 20,
      "domain": "foxbusiness.com",
      "category": "Finance/Finance",
      "avg_month_visits": 34966721.0009484,
      "curr_month_visits": 34966721.0009484,
      "unique_users": 10137662.548383,
      "pages_per_visit": 1.80003585127714
    },
    {
      "global_rank": 2102,
      "category_rank": 20,
      "domain": "smbc.co.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 22308633.3132597,
      "curr_month_visits": 22308633.3132597,
      "unique_users": 8184102.8782371,
      "pages_per_visit": 5.51947332909645
    },
    {
      "global_rank": 1009,
      "category_rank": 20,
      "domain": "bybit.com",
      "category": "Finance/Investing",
      "avg_month_visits": 23274579.1333555,
      "curr_month_visits": 23274579.1333555,
      "unique_users": 4790377.49653045,
      "pages_per_visit": 17.9958365520653
    },
    {
      "global_rank": 6672,
      "category_rank": 20,
      "domain": "monespacesante.fr",
      "category": "Finance/Insurance",
      "avg_month_visits": 7496354.89865183,
      "curr_month_visits": 7496354.89865183,
      "unique_users": 3843661.92637608,
      "pages_per_visit": 6.11276765894958
    },
    {
      "global_rank": 1205,
      "category_rank": 21,
      "domain": "robinhood.com",
      "category": "Finance/Investing",
      "avg_month_visits": 32102229.3064482,
      "curr_month_visits": 32102229.3064482,
      "unique_users": 5879864.21724464,
      "pages_per_visit": 6.28746700852486
    },
    {
      "global_rank": 2132,
      "category_rank": 21,
      "domain": "mitid.dk",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 29170792.9550046,
      "curr_month_visits": 29170792.9550046,
      "unique_users": 5693677.52043127,
      "pages_per_visit": 3.10533119301016
    },
    {
      "global_rank": 2511,
      "category_rank": 21,
      "domain": "paycomonline.net",
      "category": "Finance/Finance",
      "avg_month_visits": 23464061.2578552,
      "curr_month_visits": 23464061.2578552,
      "unique_users": 5163030.30329575,
      "pages_per_visit": 5.40168171445774
    },
    {
      "global_rank": 13932,
      "category_rank": 21,
      "domain": "sompo-japan.co.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 3021311.9915029,
      "curr_month_visits": 3021311.9915029,
      "unique_users": 1473410.47786568,
      "pages_per_visit": 7.97275525914248
    },
    {
      "global_rank": 7059,
      "category_rank": 21,
      "domain": "portoseguro.com.br",
      "category": "Finance/Insurance",
      "avg_month_visits": 7289890.59767354,
      "curr_month_visits": 7289890.59767354,
      "unique_users": 2257066.72139971,
      "pages_per_visit": 7.1942684272423
    },
    {
      "global_rank": 1446,
      "category_rank": 21,
      "domain": "serasa.com.br",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 28470924.4993477,
      "curr_month_visits": 28470924.4993477,
      "unique_users": 14437085.4464424,
      "pages_per_visit": 4.99671176055958
    },
    {
      "global_rank": 14172,
      "category_rank": 22,
      "domain": "edmbilisim.com.tr",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 3484087.16756398,
      "curr_month_visits": 3484087.16756398,
      "unique_users": 321765.272702871,
      "pages_per_visit": 9.67951788286003
    },
    {
      "global_rank": 1477,
      "category_rank": 22,
      "domain": "syf.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 38085994.2006708,
      "curr_month_visits": 38085994.2006708,
      "unique_users": 17561306.4649663,
      "pages_per_visit": 3.10241829049803
    },
    {
      "global_rank": 7392,
      "category_rank": 22,
      "domain": "huk24.de",
      "category": "Finance/Insurance",
      "avg_month_visits": 3417063.54439205,
      "curr_month_visits": 3417063.54439205,
      "unique_users": 1520811.14932146,
      "pages_per_visit": 8.84435498967709
    },
    {
      "global_rank": 2550,
      "category_rank": 22,
      "domain": "razorpay.com",
      "category": "Finance/Finance",
      "avg_month_visits": 29742797.7964844,
      "curr_month_visits": 29742797.7964844,
      "unique_users": 15636408.878764,
      "pages_per_visit": 2.93343520803293
    },
    {
      "global_rank": 1463,
      "category_rank": 22,
      "domain": "vanguard.com",
      "category": "Finance/Investing",
      "avg_month_visits": 22155517.4290538,
      "curr_month_visits": 22155517.4290538,
      "unique_users": 6728014.3012732,
      "pages_per_visit": 9.35475537196482
    },
    {
      "global_rank": 2258,
      "category_rank": 22,
      "domain": "redsys.es",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 22488646.384328,
      "curr_month_visits": 22488646.384328,
      "unique_users": 12906843.0024322,
      "pages_per_visit": 4.02959267029693
    },
    {
      "global_rank": 1649,
      "category_rank": 23,
      "domain": "mexc.com",
      "category": "Finance/Investing",
      "avg_month_visits": 17937196.4156096,
      "curr_month_visits": 17937196.4156096,
      "unique_users": 7368774.08856119,
      "pages_per_visit": 7.37634067484274
    },
    {
      "global_rank": 2587,
      "category_rank": 23,
      "domain": "bithumb.com",
      "category": "Finance/Finance",
      "avg_month_visits": 9270805.16716862,
      "curr_month_visits": 9270805.16716862,
      "unique_users": 1322884.94568054,
      "pages_per_visit": 13.0075668744542
    },
    {
      "global_rank": 15013,
      "category_rank": 23,
      "domain": "pacjent.gov.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 3135273.59345629,
      "curr_month_visits": 3135273.59345629,
      "unique_users": 1785484.88808882,
      "pages_per_visit": 5.9741637926132
    },
    {
      "global_rank": 1527,
      "category_rank": 23,
      "domain": "usbank.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 26414309.7632406,
      "curr_month_visits": 26414309.7632406,
      "unique_users": 7346414.847689,
      "pages_per_visit": 6.61312968963919
    },
    {
      "global_rank": 2440,
      "category_rank": 23,
      "domain": "mizuhobank.co.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 18787389.8915173,
      "curr_month_visits": 18787389.8915173,
      "unique_users": 5757182.31539103,
      "pages_per_visit": 5.10919033687875
    },
    {
      "global_rank": 8488,
      "category_rank": 23,
      "domain": "jgl.com.au",
      "category": "Finance/Insurance",
      "avg_month_visits": 4851302.06902315,
      "curr_month_visits": 4851302.06902315,
      "unique_users": 2120801.7808106,
      "pages_per_visit": 5.7673499090761
    },
    {
      "global_rank": 1672,
      "category_rank": 24,
      "domain": "bmo.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 23586875.8618442,
      "curr_month_visits": 23586875.8618442,
      "unique_users": 5249963.73488143,
      "pages_per_visit": 7.30981311651608
    },
    {
      "global_rank": 15279,
      "category_rank": 24,
      "domain": "corporatefinanceinstitute.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 4341165.78608114,
      "curr_month_visits": 4341165.78608114,
      "unique_users": 2553913.77390152,
      "pages_per_visit": 2.95080803239985
    },
    {
      "global_rank": 2632,
      "category_rank": 24,
      "domain": "nerdwallet.com",
      "category": "Finance/Finance",
      "avg_month_visits": 27039135.2058292,
      "curr_month_visits": 27039135.2058292,
      "unique_users": 17983338.482642,
      "pages_per_visit": 2.06747021704864
    },
    {
      "global_rank": 2510,
      "category_rank": 24,
      "domain": "anser.ne.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 13757124.3156753,
      "curr_month_visits": 13757124.3156753,
      "unique_users": 2473591.29729782,
      "pages_per_visit": 12.5120765779915
    },
    {
      "global_rank": 1650,
      "category_rank": 24,
      "domain": "angelone.in",
      "category": "Finance/Investing",
      "avg_month_visits": 19286192.4173874,
      "curr_month_visits": 19286192.4173874,
      "unique_users": 4510217.96035733,
      "pages_per_visit": 20.2275042319593
    },
    {
      "global_rank": 8793,
      "category_rank": 24,
      "domain": "lassuranceretraite.fr",
      "category": "Finance/Insurance",
      "avg_month_visits": 6011384.80318317,
      "curr_month_visits": 6011384.80318317,
      "unique_users": 2569416.40395391,
      "pages_per_visit": 6.43237761619896
    },
    {
      "global_rank": 1730,
      "category_rank": 25,
      "domain": "etrade.com",
      "category": "Finance/Investing",
      "avg_month_visits": 21291862.0520734,
      "curr_month_visits": 21291862.0520734,
      "unique_users": 3205525.14245463,
      "pages_per_visit": 9.09906041946139
    },
    {
      "global_rank": 9014,
      "category_rank": 25,
      "domain": "principal.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 4663107.82221491,
      "curr_month_visits": 4663107.82221491,
      "unique_users": 1813007.30168793,
      "pages_per_visit": 7.34752764967363
    },
    {
      "global_rank": 17715,
      "category_rank": 25,
      "domain": "biznes.gov.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2237587.70595942,
      "curr_month_visits": 2237587.70595942,
      "unique_users": 1282041.29134793,
      "pages_per_visit": 7.02814278886798
    },
    {
      "global_rank": 2526,
      "category_rank": 25,
      "domain": "transaccionesbancolombia.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 12082363.7119151,
      "curr_month_visits": 12082363.7119151,
      "unique_users": 2739400.306208,
      "pages_per_visit": 17.1441000578733
    },
    {
      "global_rank": 1697,
      "category_rank": 25,
      "domain": "maybank2u.com.my",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 21365192.1154551,
      "curr_month_visits": 21365192.1154551,
      "unique_users": 3593449.00093745,
      "pages_per_visit": 11.0373259450534
    },
    {
      "global_rank": 2746,
      "category_rank": 25,
      "domain": "teamblind.com",
      "category": "Finance/Finance",
      "avg_month_visits": 18841695.5520603,
      "curr_month_visits": 18841695.5520603,
      "unique_users": 9049440.37321758,
      "pages_per_visit": 3.88753737410025
    },
    {
      "global_rank": 1749,
      "category_rank": 26,
      "domain": "bb.com.br",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 29402700.7026776,
      "curr_month_visits": 29402700.7026776,
      "unique_users": 9039215.95997545,
      "pages_per_visit": 5.00275073090568
    },
    {
      "global_rank": 1911,
      "category_rank": 26,
      "domain": "screener.in",
      "category": "Finance/Investing",
      "avg_month_visits": 25910722.8866718,
      "curr_month_visits": 25910722.8866718,
      "unique_users": 4114312.90414588,
      "pages_per_visit": 7.09503252850903
    },
    {
      "global_rank": 2540,
      "category_rank": 26,
      "domain": "digid.nl",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 22749347.2727088,
      "curr_month_visits": 22749347.2727088,
      "unique_users": 8109724.78050426,
      "pages_per_visit": 3.67284768383874
    },
    {
      "global_rank": 9068,
      "category_rank": 26,
      "domain": "tk.de",
      "category": "Finance/Insurance",
      "avg_month_visits": 6756545.44642995,
      "curr_month_visits": 6756545.44642995,
      "unique_users": 4234581.90538534,
      "pages_per_visit": 4.17785433996861
    },
    {
      "global_rank": 2834,
      "category_rank": 26,
      "domain": "seekingalpha.com",
      "category": "Finance/Finance",
      "avg_month_visits": 18304243.9660941,
      "curr_month_visits": 18304243.9660941,
      "unique_users": 4977248.02575684,
      "pages_per_visit": 4.83381391862525
    },
    {
      "global_rank": 9278,
      "category_rank": 27,
      "domain": "metlife.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 4512588.56691237,
      "curr_month_visits": 4512588.56691237,
      "unique_users": 2014931.25266445,
      "pages_per_visit": 7.9228933595931
    },
    {
      "global_rank": 3045,
      "category_rank": 27,
      "domain": "pse.com.co",
      "category": "Finance/Finance",
      "avg_month_visits": 26532821.3128941,
      "curr_month_visits": 26532821.3128941,
      "unique_users": 10665393.9834175,
      "pages_per_visit": 1.68401589264294
    },
    {
      "global_rank": 18043,
      "category_rank": 27,
      "domain": "klerk.ru",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 4856133.50526422,
      "curr_month_visits": 4856133.50526422,
      "unique_users": 2959490.93421748,
      "pages_per_visit": 1.59140929202326
    },
    {
      "global_rank": 1786,
      "category_rank": 27,
      "domain": "cibc.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 20643001.8609582,
      "curr_month_visits": 20643001.8609582,
      "unique_users": 5491589.78898848,
      "pages_per_visit": 7.98647322054882
    },
    {
      "global_rank": 1944,
      "category_rank": 27,
      "domain": "goodreturns.in",
      "category": "Finance/Investing",
      "avg_month_visits": 35144926.7041062,
      "curr_month_visits": 35144926.7041062,
      "unique_users": 14210569.9002458,
      "pages_per_visit": 1.89272063152022
    },
    {
      "global_rank": 2595,
      "category_rank": 27,
      "domain": "afterpay.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 16029619.4146244,
      "curr_month_visits": 16029619.4146244,
      "unique_users": 7072171.447042,
      "pages_per_visit": 4.9006979900516
    },
    {
      "global_rank": 1882,
      "category_rank": 28,
      "domain": "commbank.com.au",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 22345366.7311904,
      "curr_month_visits": 22345366.7311904,
      "unique_users": 5090832.07140955,
      "pages_per_visit": 6.99022934676308
    },
    {
      "global_rank": 2603,
      "category_rank": 28,
      "domain": "cloud.afip.gob.ar",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 20673422.9119918,
      "curr_month_visits": 20673422.9119918,
      "unique_users": 3353193.44710417,
      "pages_per_visit": 6.48758238884555
    },
    {
      "global_rank": 1947,
      "category_rank": 28,
      "domain": "whitebit.com",
      "category": "Finance/Investing",
      "avg_month_visits": 29377406.205934,
      "curr_month_visits": 29377406.205934,
      "unique_users": 14585898.9331241,
      "pages_per_visit": 3.22819144713253
    },
    {
      "global_rank": 18194,
      "category_rank": 28,
      "domain": "egov-nsdl.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 3176010.48929352,
      "curr_month_visits": 3176010.48929352,
      "unique_users": 1394835.36433142,
      "pages_per_visit": 5.03046666127394
    },
    {
      "global_rank": 9436,
      "category_rank": 28,
      "domain": "huk.de",
      "category": "Finance/Insurance",
      "avg_month_visits": 3855866.0144162,
      "curr_month_visits": 3855866.0144162,
      "unique_users": 1983967.83741607,
      "pages_per_visit": 6.59678173874414
    },
    {
      "global_rank": 3064,
      "category_rank": 28,
      "domain": "payu.in",
      "category": "Finance/Finance",
      "avg_month_visits": 17506417.9971514,
      "curr_month_visits": 17506417.9971514,
      "unique_users": 9473300.46211969,
      "pages_per_visit": 4.32423046046389
    },
    {
      "global_rank": 18366,
      "category_rank": 29,
      "domain": "studycafe.in",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 4626601.78311212,
      "curr_month_visits": 4626601.78311212,
      "unique_users": 2190779.92419817,
      "pages_per_visit": 1.65551926579524
    },
    {
      "global_rank": 2659,
      "category_rank": 29,
      "domain": "billdesk.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 20963333.6340762,
      "curr_month_visits": 20963333.6340762,
      "unique_users": 9991304.55730355,
      "pages_per_visit": 4.23870395115999
    },
    {
      "global_rank": 1978,
      "category_rank": 29,
      "domain": "probo.in",
      "category": "Finance/Investing",
      "avg_month_visits": 25281357.979584,
      "curr_month_visits": 25281357.979584,
      "unique_users": 11440950.2806544,
      "pages_per_visit": 1.65287244812058
    },
    {
      "global_rank": 9437,
      "category_rank": 29,
      "domain": "theaa.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 6854292.19059834,
      "curr_month_visits": 6854292.19059834,
      "unique_users": 3510805.05121279,
      "pages_per_visit": 4.19623479392418
    },
    {
      "global_rank": 1958,
      "category_rank": 29,
      "domain": "rakuten-bank.co.jp",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 22938366.7749763,
      "curr_month_visits": 22938366.7749763,
      "unique_users": 6523902.75642339,
      "pages_per_visit": 5.69855955962857
    },
    {
      "global_rank": 3114,
      "category_rank": 29,
      "domain": "kasikornbank.com",
      "category": "Finance/Finance",
      "avg_month_visits": 18388641.8335901,
      "curr_month_visits": 18388641.8335901,
      "unique_users": 8440063.02109741,
      "pages_per_visit": 4.5199844671128
    },
    {
      "global_rank": 2014,
      "category_rank": 30,
      "domain": "investopedia.com",
      "category": "Finance/Investing",
      "avg_month_visits": 36628736.8375448,
      "curr_month_visits": 36628736.8375448,
      "unique_users": 21814618.3014393,
      "pages_per_visit": 1.74561924829507
    },
    {
      "global_rank": 2051,
      "category_rank": 30,
      "domain": "citibankonline.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 25807769.2903073,
      "curr_month_visits": 25807769.2903073,
      "unique_users": 12078760.4935326,
      "pages_per_visit": 3.74116285532979
    },
    {
      "global_rank": 18945,
      "category_rank": 30,
      "domain": "3filmydhoom.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1072155.17690124,
      "curr_month_visits": 1072155.17690124,
      "unique_users": 448475.728316852,
      "pages_per_visit": 7.01582355140318
    },
    {
      "global_rank": 3120,
      "category_rank": 30,
      "domain": "comenity.net",
      "category": "Finance/Finance",
      "avg_month_visits": 16039982.3162971,
      "curr_month_visits": 16039982.3162971,
      "unique_users": 6911108.39381326,
      "pages_per_visit": 4.69455013941011
    },
    {
      "global_rank": 2685,
      "category_rank": 30,
      "domain": "fu.do",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 11429785.5639821,
      "curr_month_visits": 11429785.5639821,
      "unique_users": 2158058.26950992,
      "pages_per_visit": 18.7556735207903
    },
    {
      "global_rank": 9952,
      "category_rank": 30,
      "domain": "starhealth.in",
      "category": "Finance/Insurance",
      "avg_month_visits": 5953162.67639919,
      "curr_month_visits": 5953162.67639919,
      "unique_users": 2575106.48657023,
      "pages_per_visit": 4.1116634441344
    },
    {
      "global_rank": 19832,
      "category_rank": 31,
      "domain": "fadv.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2286335.13616269,
      "curr_month_visits": 2286335.13616269,
      "unique_users": 858049.721513628,
      "pages_per_visit": 7.86290611137056
    },
    {
      "global_rank": 10279,
      "category_rank": 31,
      "domain": "healthsherpa.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1816556.45165464,
      "curr_month_visits": 1816556.45165464,
      "unique_users": 595863.241303271,
      "pages_per_visit": 18.7821647247866
    },
    {
      "global_rank": 2814,
      "category_rank": 31,
      "domain": "moneysavingexpert.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 24125565.331289,
      "curr_month_visits": 24125565.331289,
      "unique_users": 10941341.3986086,
      "pages_per_visit": 2.72701845791314
    },
    {
      "global_rank": 2023,
      "category_rank": 31,
      "domain": "bitget.com",
      "category": "Finance/Investing",
      "avg_month_visits": 21228329.9504315,
      "curr_month_visits": 21228329.9504315,
      "unique_users": 8178944.92733969,
      "pages_per_visit": 5.93730580040858
    },
    {
      "global_rank": 3191,
      "category_rank": 31,
      "domain": "business-standard.com",
      "category": "Finance/Finance",
      "avg_month_visits": 25934093.0971218,
      "curr_month_visits": 25934093.0971218,
      "unique_users": 14979515.3265278,
      "pages_per_visit": 1.61231958625237
    },
    {
      "global_rank": 2062,
      "category_rank": 31,
      "domain": "rabobank.nl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 22448232.1243963,
      "curr_month_visits": 22448232.1243963,
      "unique_users": 6546160.76062118,
      "pages_per_visit": 5.39386207394597
    },
    {
      "global_rank": 2094,
      "category_rank": 32,
      "domain": "dhan.co",
      "category": "Finance/Investing",
      "avg_month_visits": 13500839.3577467,
      "curr_month_visits": 13500839.3577467,
      "unique_users": 1689005.13312813,
      "pages_per_visit": 23.4744320958903
    },
    {
      "global_rank": 2131,
      "category_rank": 32,
      "domain": "scotiabank.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 20789995.8522761,
      "curr_month_visits": 20789995.8522761,
      "unique_users": 4879427.6940274,
      "pages_per_visit": 6.43066934487625
    },
    {
      "global_rank": 10339,
      "category_rank": 32,
      "domain": "onehealthcareid.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 5467184.9739318,
      "curr_month_visits": 5467184.9739318,
      "unique_users": 886309.256319142,
      "pages_per_visit": 5.54553254219184
    },
    {
      "global_rank": 20327,
      "category_rank": 32,
      "domain": "podatki.gov.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2912086.0333723,
      "curr_month_visits": 2912086.0333723,
      "unique_users": 1522786.20773517,
      "pages_per_visit": 3.89974848496194
    },
    {
      "global_rank": 2874,
      "category_rank": 32,
      "domain": "gmopg.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 18254028.8332815,
      "curr_month_visits": 18254028.8332815,
      "unique_users": 12225602.9679044,
      "pages_per_visit": 2.95470250156879
    },
    {
      "global_rank": 3206,
      "category_rank": 32,
      "domain": "gate.io",
      "category": "Finance/Finance",
      "avg_month_visits": 17142822.0355287,
      "curr_month_visits": 17142822.0355287,
      "unique_users": 7260278.17645105,
      "pages_per_visit": 4.49263058318027
    },
    {
      "global_rank": 10586,
      "category_rank": 33,
      "domain": "admiral.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 4921149.78211895,
      "curr_month_visits": 4921149.78211895,
      "unique_users": 2375409.74838924,
      "pages_per_visit": 7.33784676321514
    },
    {
      "global_rank": 3286,
      "category_rank": 33,
      "domain": "affirm.com",
      "category": "Finance/Finance",
      "avg_month_visits": 16569460.1126398,
      "curr_month_visits": 16569460.1126398,
      "unique_users": 8632525.47101669,
      "pages_per_visit": 3.38336915415706
    },
    {
      "global_rank": 2211,
      "category_rank": 33,
      "domain": "xueqiu.com",
      "category": "Finance/Investing",
      "avg_month_visits": 22850849.3051872,
      "curr_month_visits": 22850849.3051872,
      "unique_users": 4130881.24539934,
      "pages_per_visit": 5.53929681666765
    },
    {
      "global_rank": 3020,
      "category_rank": 33,
      "domain": "shinhancard.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 18276725.1809333,
      "curr_month_visits": 18276725.1809333,
      "unique_users": 7574281.30054936,
      "pages_per_visit": 3.70307624663713
    },
    {
      "global_rank": 21841,
      "category_rank": 33,
      "domain": "taxscan.in",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 3551677.56279912,
      "curr_month_visits": 3551677.56279912,
      "unique_users": 1798000.57460206,
      "pages_per_visit": 2.45012290554354
    },
    {
      "global_rank": 849,
      "category_rank": 33,
      "domain": "login.gov",
      "category": "Finance",
      "avg_month_visits": 47316733.8371495,
      "curr_month_visits": 47316733.8371495,
      "unique_users": 18992393.6951229,
      "pages_per_visit": 5.52740114143693
    },
    {
      "global_rank": 2273,
      "category_rank": 33,
      "domain": "pnc.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 24145171.137263,
      "curr_month_visits": 24145171.137263,
      "unique_users": 5618564.70581682,
      "pages_per_visit": 3.97009763695291
    },
    {
      "global_rank": 2284,
      "category_rank": 34,
      "domain": "transbank.cl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 17601276.8557635,
      "curr_month_visits": 17601276.8557635,
      "unique_users": 7550537.00873744,
      "pages_per_visit": 6.94298172148326
    },
    {
      "global_rank": 10626,
      "category_rank": 34,
      "domain": "maxlifeinsurance.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 6790788.48621336,
      "curr_month_visits": 6790788.48621336,
      "unique_users": 3561409.00544994,
      "pages_per_visit": 2.51886132764169
    },
    {
      "global_rank": 3324,
      "category_rank": 34,
      "domain": "sber.ru",
      "category": "Finance/Finance",
      "avg_month_visits": 21792394.6074501,
      "curr_month_visits": 21792394.6074501,
      "unique_users": 13393669.9667776,
      "pages_per_visit": 1.6086951997041
    },
    {
      "global_rank": 22009,
      "category_rank": 34,
      "domain": "smbcgroup-point.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2354764.12307235,
      "curr_month_visits": 2354764.12307235,
      "unique_users": 1572545.2203929,
      "pages_per_visit": 4.66463865869679
    },
    {
      "global_rank": 2303,
      "category_rank": 34,
      "domain": "upstox.com",
      "category": "Finance/Investing",
      "avg_month_visits": 16040564.2956614,
      "curr_month_visits": 16040564.2956614,
      "unique_users": 4390420.7625632,
      "pages_per_visit": 12.3683184381624
    },
    {
      "global_rank": 3055,
      "category_rank": 34,
      "domain": "santander.com.ar",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 15947407.1185999,
      "curr_month_visits": 15947407.1185999,
      "unique_users": 3119384.69364205,
      "pages_per_visit": 6.37035298291803
    },
    {
      "global_rank": 10832,
      "category_rank": 35,
      "domain": "healthybenefitsplus.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 4428649.06582526,
      "curr_month_visits": 4428649.06582526,
      "unique_users": 2034698.2079839,
      "pages_per_visit": 6.84505996001108
    },
    {
      "global_rank": 2588,
      "category_rank": 35,
      "domain": "lbank.com",
      "category": "Finance/Investing",
      "avg_month_visits": 11752108.9531141,
      "curr_month_visits": 11752108.9531141,
      "unique_users": 5484631.50207892,
      "pages_per_visit": 10.859250830393
    },
    {
      "global_rank": 3076,
      "category_rank": 35,
      "domain": "revolut.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 16945460.7486592,
      "curr_month_visits": 16945460.7486592,
      "unique_users": 9534897.40150505,
      "pages_per_visit": 4.08279676815155
    },
    {
      "global_rank": 3400,
      "category_rank": 35,
      "domain": "zupee.com",
      "category": "Finance/Finance",
      "avg_month_visits": 23667215.7554355,
      "curr_month_visits": 23667215.7554355,
      "unique_users": 10513378.8346695,
      "pages_per_visit": 1.81584666221971
    },
    {
      "global_rank": 2291,
      "category_rank": 35,
      "domain": "navyfederal.org",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 18287907.0430619,
      "curr_month_visits": 18287907.0430619,
      "unique_users": 4844925.54936078,
      "pages_per_visit": 7.33429795980232
    },
    {
      "global_rank": 22621,
      "category_rank": 35,
      "domain": "kpmg.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 3399401.88658555,
      "curr_month_visits": 3399401.88658555,
      "unique_users": 2034033.87983308,
      "pages_per_visit": 2.54120199323198
    },
    {
      "global_rank": 3081,
      "category_rank": 36,
      "domain": "sri.gob.ec",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 11256696.0999285,
      "curr_month_visits": 11256696.0999285,
      "unique_users": 1702395.17563786,
      "pages_per_visit": 13.611285613753
    },
    {
      "global_rank": 2327,
      "category_rank": 36,
      "domain": "ing.nl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 24277273.717949,
      "curr_month_visits": 24277273.717949,
      "unique_users": 8009825.00452922,
      "pages_per_visit": 3.794128129569
    },
    {
      "global_rank": 2831,
      "category_rank": 36,
      "domain": "boursorama.com",
      "category": "Finance/Investing",
      "avg_month_visits": 22116724.275788,
      "curr_month_visits": 22116724.275788,
      "unique_users": 3667656.96631623,
      "pages_per_visit": 4.73924854358472
    },
    {
      "global_rank": 3502,
      "category_rank": 36,
      "domain": "bitmart.com",
      "category": "Finance/Finance",
      "avg_month_visits": 11842548.0875029,
      "curr_month_visits": 11842548.0875029,
      "unique_users": 5816761.2407123,
      "pages_per_visit": 7.4303421184217
    },
    {
      "global_rank": 11023,
      "category_rank": 36,
      "domain": "esic.in",
      "category": "Finance/Insurance",
      "avg_month_visits": 3143152.38568766,
      "curr_month_visits": 3143152.38568766,
      "unique_users": 856886.408140745,
      "pages_per_visit": 16.087690902095
    },
    {
      "global_rank": 22677,
      "category_rank": 36,
      "domain": "action-media.ru",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2621191.51086974,
      "curr_month_visits": 2621191.51086974,
      "unique_users": 1200113.71643906,
      "pages_per_visit": 2.94263213023167
    },
    {
      "global_rank": 2343,
      "category_rank": 37,
      "domain": "banki.ru",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 29363865.8294284,
      "curr_month_visits": 29363865.8294284,
      "unique_users": 12955891.5797193,
      "pages_per_visit": 2.37117986277578
    },
    {
      "global_rank": 3515,
      "category_rank": 37,
      "domain": "altin.in",
      "category": "Finance/Finance",
      "avg_month_visits": 24607552.1327119,
      "curr_month_visits": 24607552.1327119,
      "unique_users": 1121110.70955245,
      "pages_per_visit": 4.76351373250588
    },
    {
      "global_rank": 23263,
      "category_rank": 37,
      "domain": "poradnikprzedsiebiorcy.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 4021914.22422063,
      "curr_month_visits": 4021914.22422063,
      "unique_users": 2386026.04089207,
      "pages_per_visit": 1.49808227824129
    },
    {
      "global_rank": 11227,
      "category_rank": 37,
      "domain": "canadalife.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 4149835.29623477,
      "curr_month_visits": 4149835.29623477,
      "unique_users": 1624330.24278862,
      "pages_per_visit": 6.50803773226859
    },
    {
      "global_rank": 2850,
      "category_rank": 37,
      "domain": "pump.fun",
      "category": "Finance/Investing",
      "avg_month_visits": 10260994.7604111,
      "curr_month_visits": 10260994.7604111,
      "unique_users": 1694084.25869284,
      "pages_per_visit": 7.23275769434229
    },
    {
      "global_rank": 3195,
      "category_rank": 37,
      "domain": "payu.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 18577202.5158111,
      "curr_month_visits": 18577202.5158111,
      "unique_users": 10083728.4355992,
      "pages_per_visit": 2.9791538692923
    },
    {
      "global_rank": 24071,
      "category_rank": 38,
      "domain": "infakt.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1518697.86627649,
      "curr_month_visits": 1518697.86627649,
      "unique_users": 510849.10193442,
      "pages_per_visit": 9.51773361609542
    },
    {
      "global_rank": 2357,
      "category_rank": 38,
      "domain": "itau.com.br",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 22651037.6638902,
      "curr_month_visits": 22651037.6638902,
      "unique_users": 10977045.3317196,
      "pages_per_visit": 4.30473016709193
    },
    {
      "global_rank": 11260,
      "category_rank": 38,
      "domain": "ambetterhealth.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 3258678.14566943,
      "curr_month_visits": 3258678.14566943,
      "unique_users": 1293127.56755992,
      "pages_per_visit": 6.13546413143085
    },
    {
      "global_rank": 2862,
      "category_rank": 38,
      "domain": "finviz.com",
      "category": "Finance/Investing",
      "avg_month_visits": 24789360.8124427,
      "curr_month_visits": 24789360.8124427,
      "unique_users": 2377691.51949624,
      "pages_per_visit": 4.13079254789459
    },
    {
      "global_rank": 3273,
      "category_rank": 38,
      "domain": "caisse-epargne.fr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 10995477.4246098,
      "curr_month_visits": 10995477.4246098,
      "unique_users": 2347560.08044276,
      "pages_per_visit": 10.0763795688306
    },
    {
      "global_rank": 3644,
      "category_rank": 38,
      "domain": "paypay.ne.jp",
      "category": "Finance/Finance",
      "avg_month_visits": 20991412.2353583,
      "curr_month_visits": 20991412.2353583,
      "unique_users": 11299588.5002642,
      "pages_per_visit": 1.86620261973514
    },
    {
      "global_rank": 2416,
      "category_rank": 39,
      "domain": "santander.co.uk",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 15978566.0077026,
      "curr_month_visits": 15978566.0077026,
      "unique_users": 3551192.69448289,
      "pages_per_visit": 9.43423862575419
    },
    {
      "global_rank": 3444,
      "category_rank": 39,
      "domain": "todo1.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 9694913.98566219,
      "curr_month_visits": 9694913.98566219,
      "unique_users": 3750797.03831605,
      "pages_per_visit": 11.6364224631129
    },
    {
      "global_rank": 2894,
      "category_rank": 39,
      "domain": "htx.com",
      "category": "Finance/Investing",
      "avg_month_visits": 13010969.7327574,
      "curr_month_visits": 13010969.7327574,
      "unique_users": 9319688.57847865,
      "pages_per_visit": 4.06811184890112
    },
    {
      "global_rank": 11586,
      "category_rank": 39,
      "domain": "acko.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 6166419.12917329,
      "curr_month_visits": 6166419.12917329,
      "unique_users": 4311922.65076996,
      "pages_per_visit": 2.86935482689325
    },
    {
      "global_rank": 3734,
      "category_rank": 39,
      "domain": "privatbank.ua",
      "category": "Finance/Finance",
      "avg_month_visits": 16866272.6749161,
      "curr_month_visits": 16866272.6749161,
      "unique_users": 4800411.90987668,
      "pages_per_visit": 3.95038946429056
    },
    {
      "global_rank": 24119,
      "category_rank": 39,
      "domain": "buhonline.ru",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2576869.64218637,
      "curr_month_visits": 2576869.64218637,
      "unique_users": 1315289.35527666,
      "pages_per_visit": 3.77112221200035
    },
    {
      "global_rank": 3060,
      "category_rank": 40,
      "domain": "mkvcinemas.app",
      "category": "Finance/Investing",
      "avg_month_visits": 9106499.00526017,
      "curr_month_visits": 9106499.00526017,
      "unique_users": 1178423.14317961,
      "pages_per_visit": 5.28034834792036
    },
    {
      "global_rank": 24381,
      "category_rank": 40,
      "domain": "dbd.go.th",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2266821.96993485,
      "curr_month_visits": 2266821.96993485,
      "unique_users": 649420.394841697,
      "pages_per_visit": 6.00999647075311
    },
    {
      "global_rank": 3823,
      "category_rank": 40,
      "domain": "creditmutuel.fr",
      "category": "Finance/Finance",
      "avg_month_visits": 10551832.1289385,
      "curr_month_visits": 10551832.1289385,
      "unique_users": 2568085.36297089,
      "pages_per_visit": 8.48599675426665
    },
    {
      "global_rank": 3447,
      "category_rank": 40,
      "domain": "kantangame.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 16566241.1765177,
      "curr_month_visits": 16566241.1765177,
      "unique_users": 988264.084767324,
      "pages_per_visit": 7.71592735082187
    },
    {
      "global_rank": 11762,
      "category_rank": 40,
      "domain": "discovery.co.za",
      "category": "Finance/Insurance",
      "avg_month_visits": 4860499.06379106,
      "curr_month_visits": 4860499.06379106,
      "unique_users": 1619967.42599935,
      "pages_per_visit": 4.57199548741485
    },
    {
      "global_rank": 2470,
      "category_rank": 40,
      "domain": "mbank.pl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 14332454.5034435,
      "curr_month_visits": 14332454.5034435,
      "unique_users": 2959910.00869758,
      "pages_per_visit": 11.205995138074
    },
    {
      "global_rank": 4009,
      "category_rank": 41,
      "domain": "barclaycardus.com",
      "category": "Finance/Finance",
      "avg_month_visits": 12446527.3604554,
      "curr_month_visits": 12446527.3604554,
      "unique_users": 5404753.97796836,
      "pages_per_visit": 5.03538161641598
    },
    {
      "global_rank": 3535,
      "category_rank": 41,
      "domain": "jcb.co.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 16277556.2344861,
      "curr_month_visits": 16277556.2344861,
      "unique_users": 6921011.36926654,
      "pages_per_visit": 4.00318045091284
    },
    {
      "global_rank": 24492,
      "category_rank": 41,
      "domain": "sageone.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1503191.61585193,
      "curr_month_visits": 1503191.61585193,
      "unique_users": 255184.444355168,
      "pages_per_visit": 16.4841653166486
    },
    {
      "global_rank": 3128,
      "category_rank": 41,
      "domain": "solscan.io",
      "category": "Finance/Investing",
      "avg_month_visits": 9748957.56287364,
      "curr_month_visits": 9748957.56287364,
      "unique_users": 1668819.46908804,
      "pages_per_visit": 7.33047608524057
    },
    {
      "global_rank": 11880,
      "category_rank": 41,
      "domain": "travelers.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 3799670.27351806,
      "curr_month_visits": 3799670.27351806,
      "unique_users": 1732738.5107025,
      "pages_per_visit": 8.63579336804126
    },
    {
      "global_rank": 2641,
      "category_rank": 41,
      "domain": "healthy.kaiserpermanente.org",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 19252989.7630699,
      "curr_month_visits": 19252989.7630699,
      "unique_users": 6189706.93539414,
      "pages_per_visit": 5.17840641013714
    },
    {
      "global_rank": 3211,
      "category_rank": 42,
      "domain": "tinyastro.io",
      "category": "Finance/Investing",
      "avg_month_visits": 8305706.93159298,
      "curr_month_visits": 8305706.93159298,
      "unique_users": 645385.743120987,
      "pages_per_visit": 14.6666230669341
    },
    {
      "global_rank": 2700,
      "category_rank": 42,
      "domain": "bankid.no",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 20338240.2850173,
      "curr_month_visits": 20338240.2850173,
      "unique_users": 8978331.70412648,
      "pages_per_visit": 4.09570581902891
    },
    {
      "global_rank": 11941,
      "category_rank": 42,
      "domain": "bswift.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2333281.28701294,
      "curr_month_visits": 2333281.28701294,
      "unique_users": 1074362.91009205,
      "pages_per_visit": 7.17511275635382
    },
    {
      "global_rank": 3536,
      "category_rank": 42,
      "domain": "westernunion.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 13831107.7283728,
      "curr_month_visits": 13831107.7283728,
      "unique_users": 5442908.20983088,
      "pages_per_visit": 6.45723395992477
    },
    {
      "global_rank": 24706,
      "category_rank": 42,
      "domain": "ceidg.gov.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2085114.8273472,
      "curr_month_visits": 2085114.8273472,
      "unique_users": 897701.360638338,
      "pages_per_visit": 4.09650003370404
    },
    {
      "global_rank": 4127,
      "category_rank": 42,
      "domain": "nequi.com.co",
      "category": "Finance/Finance",
      "avg_month_visits": 16132690.3211007,
      "curr_month_visits": 16132690.3211007,
      "unique_users": 6041471.09670353,
      "pages_per_visit": 2.81955867987041
    },
    {
      "global_rank": 24717,
      "category_rank": 43,
      "domain": "habuild.in",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 3808535.13083048,
      "curr_month_visits": 3808535.13083048,
      "unique_users": 944503.634865012,
      "pages_per_visit": 1.55175602583371
    },
    {
      "global_rank": 12048,
      "category_rank": 43,
      "domain": "libertymutual.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 4471015.73453674,
      "curr_month_visits": 4471015.73453674,
      "unique_users": 2482584.25491313,
      "pages_per_visit": 6.13827672436142
    },
    {
      "global_rank": 3222,
      "category_rank": 43,
      "domain": "fool.com",
      "category": "Finance/Investing",
      "avg_month_visits": 21359707.7270647,
      "curr_month_visits": 21359707.7270647,
      "unique_users": 10795150.7337078,
      "pages_per_visit": 1.95420223508958
    },
    {
      "global_rank": 3552,
      "category_rank": 43,
      "domain": "tokyo.lg.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 18139106.9637245,
      "curr_month_visits": 18139106.9637245,
      "unique_users": 10006748.2789715,
      "pages_per_visit": 3.39951249825171
    },
    {
      "global_rank": 2725,
      "category_rank": 43,
      "domain": "caixabank.es",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 19603889.2743205,
      "curr_month_visits": 19603889.2743205,
      "unique_users": 4343538.27331649,
      "pages_per_visit": 5.07389997787933
    },
    {
      "global_rank": 4265,
      "category_rank": 43,
      "domain": "bkm.com.tr",
      "category": "Finance/Finance",
      "avg_month_visits": 17133458.6424992,
      "curr_month_visits": 17133458.6424992,
      "unique_users": 9341652.92277825,
      "pages_per_visit": 2.35119815332384
    },
    {
      "global_rank": 3378,
      "category_rank": 44,
      "domain": "finance.sina.com.cn",
      "category": "Finance/Investing",
      "avg_month_visits": 20253665.6799666,
      "curr_month_visits": 20253665.6799666,
      "unique_users": 6835944.05977597,
      "pages_per_visit": 3.0834542335357
    },
    {
      "global_rank": 12432,
      "category_rank": 44,
      "domain": "aviva.co.uk",
      "category": "Finance/Insurance",
      "avg_month_visits": 4101570.37941962,
      "curr_month_visits": 4101570.37941962,
      "unique_users": 2065572.45156252,
      "pages_per_visit": 6.16288646401492
    },
    {
      "global_rank": 4276,
      "category_rank": 44,
      "domain": "infomoney.com.br",
      "category": "Finance/Finance",
      "avg_month_visits": 17901991.8140472,
      "curr_month_visits": 17901991.8140472,
      "unique_users": 7317011.02738645,
      "pages_per_visit": 2.23021540076666
    },
    {
      "global_rank": 2749,
      "category_rank": 44,
      "domain": "ideal.nl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 32422745.6692431,
      "curr_month_visits": 32422745.6692431,
      "unique_users": 12867666.5801705,
      "pages_per_visit": 1.34868828372233
    },
    {
      "global_rank": 25110,
      "category_rank": 44,
      "domain": "sodra.lt",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1512906.15268134,
      "curr_month_visits": 1512906.15268134,
      "unique_users": 529070.476513806,
      "pages_per_visit": 10.6091970869348
    },
    {
      "global_rank": 3628,
      "category_rank": 44,
      "domain": "aeon.co.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 12570654.3547776,
      "curr_month_visits": 12570654.3547776,
      "unique_users": 4439820.24183668,
      "pages_per_visit": 6.08745832894319
    },
    {
      "global_rank": 12463,
      "category_rank": 45,
      "domain": "werally.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 3121615.10378977,
      "curr_month_visits": 3121615.10378977,
      "unique_users": 1624818.69275875,
      "pages_per_visit": 7.17830317988145
    },
    {
      "global_rank": 25546,
      "category_rank": 45,
      "domain": "mybillbook.in",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2051522.00620016,
      "curr_month_visits": 2051522.00620016,
      "unique_users": 467783.218475518,
      "pages_per_visit": 6.92378057568306
    },
    {
      "global_rank": 4329,
      "category_rank": 45,
      "domain": "bankrate.com",
      "category": "Finance/Finance",
      "avg_month_visits": 16154515.2320483,
      "curr_month_visits": 16154515.2320483,
      "unique_users": 10471141.9024137,
      "pages_per_visit": 2.82838955079503
    },
    {
      "global_rank": 2824,
      "category_rank": 45,
      "domain": "axisbank.co.in",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 18768652.1251997,
      "curr_month_visits": 18768652.1251997,
      "unique_users": 6943703.85838114,
      "pages_per_visit": 4.81797626513066
    },
    {
      "global_rank": 3728,
      "category_rank": 45,
      "domain": "zus.pl",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 8147231.51822716,
      "curr_month_visits": 8147231.51822716,
      "unique_users": 3073993.30634158,
      "pages_per_visit": 11.0572788216201
    },
    {
      "global_rank": 3379,
      "category_rank": 45,
      "domain": "ml.com",
      "category": "Finance/Investing",
      "avg_month_visits": 14489234.3637695,
      "curr_month_visits": 14489234.3637695,
      "unique_users": 2881739.98950486,
      "pages_per_visit": 6.17007988411099
    },
    {
      "global_rank": 4374,
      "category_rank": 46,
      "domain": "getgrass.io",
      "category": "Finance/Finance",
      "avg_month_visits": 10068302.4621968,
      "curr_month_visits": 10068302.4621968,
      "unique_users": 1502101.68230297,
      "pages_per_visit": 3.32033293087509
    },
    {
      "global_rank": 12691,
      "category_rank": 46,
      "domain": "securecafenet.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 5567364.74588,
      "curr_month_visits": 5567364.74588,
      "unique_users": 1997367.43632059,
      "pages_per_visit": 3.51861892149384
    },
    {
      "global_rank": 3924,
      "category_rank": 46,
      "domain": "pex.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 13810462.8370238,
      "curr_month_visits": 13810462.8370238,
      "unique_users": 1489403.18131721,
      "pages_per_visit": 7.30512839121769
    },
    {
      "global_rank": 3011,
      "category_rank": 46,
      "domain": "sofi.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 15682015.3034434,
      "curr_month_visits": 15682015.3034434,
      "unique_users": 7298116.08725762,
      "pages_per_visit": 5.67665141799865
    },
    {
      "global_rank": 25882,
      "category_rank": 46,
      "domain": "taxconcept.net",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1842339.25748929,
      "curr_month_visits": 1842339.25748929,
      "unique_users": 900910.805525283,
      "pages_per_visit": 1.60383876652655
    },
    {
      "global_rank": 3386,
      "category_rank": 46,
      "domain": "xmtrading.com",
      "category": "Finance/Investing",
      "avg_month_visits": 22959660.6620068,
      "curr_month_visits": 22959660.6620068,
      "unique_users": 7457063.4164886,
      "pages_per_visit": 2.44335471293787
    },
    {
      "global_rank": 12731,
      "category_rank": 47,
      "domain": "confused.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 4267179.81092033,
      "curr_month_visits": 4267179.81092033,
      "unique_users": 2355442.68221167,
      "pages_per_visit": 6.22346616340302
    },
    {
      "global_rank": 3925,
      "category_rank": 47,
      "domain": "bbva.com.ar",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 11257375.1015823,
      "curr_month_visits": 11257375.1015823,
      "unique_users": 2520202.84102366,
      "pages_per_visit": 7.73380978450545
    },
    {
      "global_rank": 4575,
      "category_rank": 47,
      "domain": "com.nl",
      "category": "Finance/Finance",
      "avg_month_visits": 2704723.7939128,
      "curr_month_visits": 2704723.7939128,
      "unique_users": 1102585.76699796,
      "pages_per_visit": 12.0302956656368
    },
    {
      "global_rank": 3013,
      "category_rank": 47,
      "domain": "lloydsbank.co.uk",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 12519170.6696805,
      "curr_month_visits": 12519170.6696805,
      "unique_users": 2426456.02291505,
      "pages_per_visit": 10.7103921599938
    },
    {
      "global_rank": 26162,
      "category_rank": 47,
      "domain": "sevdesk.de",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1445695.71929768,
      "curr_month_visits": 1445695.71929768,
      "unique_users": 416664.299144293,
      "pages_per_visit": 11.7851771692168
    },
    {
      "global_rank": 3416,
      "category_rank": 47,
      "domain": "jiomart.com",
      "category": "Finance/Investing",
      "avg_month_visits": 13429949.7190485,
      "curr_month_visits": 13429949.7190485,
      "unique_users": 6697835.5624383,
      "pages_per_visit": 5.54947736128166
    },
    {
      "global_rank": 3514,
      "category_rank": 48,
      "domain": "kabutan.jp",
      "category": "Finance/Investing",
      "avg_month_visits": 12886117.0047644,
      "curr_month_visits": 12886117.0047644,
      "unique_users": 2388570.84526289,
      "pages_per_visit": 7.12596150533836
    },
    {
      "global_rank": 4665,
      "category_rank": 48,
      "domain": "davivienda.com",
      "category": "Finance/Finance",
      "avg_month_visits": 9566073.8137913,
      "curr_month_visits": 9566073.8137913,
      "unique_users": 2915575.23829048,
      "pages_per_visit": 7.58415351107217
    },
    {
      "global_rank": 26620,
      "category_rank": 48,
      "domain": "urzadskarbowy.gov.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1141866.96109926,
      "curr_month_visits": 1141866.96109926,
      "unique_users": 647978.478160509,
      "pages_per_visit": 13.5972746294438
    },
    {
      "global_rank": 4034,
      "category_rank": 48,
      "domain": "checkplus.co.kr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 10314829.2662063,
      "curr_month_visits": 10314829.2662063,
      "unique_users": 7033809.61605974,
      "pages_per_visit": 7.01956613326826
    },
    {
      "global_rank": 12759,
      "category_rank": 48,
      "domain": "allianz.de",
      "category": "Finance/Insurance",
      "avg_month_visits": 3539584.51447709,
      "curr_month_visits": 3539584.51447709,
      "unique_users": 2078278.46937318,
      "pages_per_visit": 5.38740505928696
    },
    {
      "global_rank": 3244,
      "category_rank": 48,
      "domain": "mercadopago.com.br",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 17214248.5488061,
      "curr_month_visits": 17214248.5488061,
      "unique_users": 7309721.83977281,
      "pages_per_visit": 4.65302463652503
    },
    {
      "global_rank": 4682,
      "category_rank": 49,
      "domain": "octopus.energy",
      "category": "Finance/Finance",
      "avg_month_visits": 11510349.104587,
      "curr_month_visits": 11510349.104587,
      "unique_users": 5117597.24442908,
      "pages_per_visit": 6.03675876221337
    },
    {
      "global_rank": 3650,
      "category_rank": 49,
      "domain": "forexfactory.com",
      "category": "Finance/Investing",
      "avg_month_visits": 26561466.6172228,
      "curr_month_visits": 26561466.6172228,
      "unique_users": 4150477.12069167,
      "pages_per_visit": 2.14235408410097
    },
    {
      "global_rank": 12768,
      "category_rank": 49,
      "domain": "iciciprulife.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 4614531.78513233,
      "curr_month_visits": 4614531.78513233,
      "unique_users": 2308230.54153577,
      "pages_per_visit": 4.6803360917688
    },
    {
      "global_rank": 26681,
      "category_rank": 49,
      "domain": "navifinserv.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2716889.48541872,
      "curr_month_visits": 2716889.48541872,
      "unique_users": 1098732.26354364,
      "pages_per_visit": 5.89191834917259
    },
    {
      "global_rank": 4067,
      "category_rank": 49,
      "domain": "saisoncard.co.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 14759250.4390336,
      "curr_month_visits": 14759250.4390336,
      "unique_users": 5391749.54768992,
      "pages_per_visit": 3.78557930515299
    },
    {
      "global_rank": 3254,
      "category_rank": 49,
      "domain": "santander.com.br",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 20819513.2738411,
      "curr_month_visits": 20819513.2738411,
      "unique_users": 8814071.79569126,
      "pages_per_visit": 2.85333767029263
    },
    {
      "global_rank": 3287,
      "category_rank": 50,
      "domain": "ing.de",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 12119806.5632791,
      "curr_month_visits": 12119806.5632791,
      "unique_users": 3290424.96855552,
      "pages_per_visit": 8.66038326852393
    },
    {
      "global_rank": 27102,
      "category_rank": 50,
      "domain": "marketplace.creditvidya.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1738592.09425323,
      "curr_month_visits": 1738592.09425323,
      "unique_users": 746376.827495314,
      "pages_per_visit": 10.0547802651534
    },
    {
      "global_rank": 3764,
      "category_rank": 50,
      "domain": "monex.co.jp",
      "category": "Finance/Investing",
      "avg_month_visits": 11512882.881654,
      "curr_month_visits": 11512882.881654,
      "unique_users": 2269992.62867701,
      "pages_per_visit": 10.2968271541887
    },
    {
      "global_rank": 4162,
      "category_rank": 50,
      "domain": "infocert.it",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 12576430.6301354,
      "curr_month_visits": 12576430.6301354,
      "unique_users": 2694296.05385214,
      "pages_per_visit": 6.75062492853401
    },
    {
      "global_rank": 4692,
      "category_rank": 50,
      "domain": "shinhan.com",
      "category": "Finance/Finance",
      "avg_month_visits": 13091568.0478133,
      "curr_month_visits": 13091568.0478133,
      "unique_users": 4224519.94862303,
      "pages_per_visit": 3.51883734752246
    },
    {
      "global_rank": 12847,
      "category_rank": 50,
      "domain": "thehartford.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 3915724.29933825,
      "curr_month_visits": 3915724.29933825,
      "unique_users": 1738869.32237431,
      "pages_per_visit": 6.23215778624888
    },
    {
      "global_rank": 4704,
      "category_rank": 51,
      "domain": "financialexpress.com",
      "category": "Finance/Finance",
      "avg_month_visits": 19296791.6568018,
      "curr_month_visits": 19296791.6568018,
      "unique_users": 11512144.2004804,
      "pages_per_visit": 1.65710353338422
    },
    {
      "global_rank": 27891,
      "category_rank": 51,
      "domain": "assistentus.ru",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2947757.98520668,
      "curr_month_visits": 2947757.98520668,
      "unique_users": 1965091.47315891,
      "pages_per_visit": 1.79456144706713
    },
    {
      "global_rank": 3816,
      "category_rank": 51,
      "domain": "finanzen.net",
      "category": "Finance/Investing",
      "avg_month_visits": 18648972.5702576,
      "curr_month_visits": 18648972.5702576,
      "unique_users": 3790432.34151711,
      "pages_per_visit": 2.92106891742103
    },
    {
      "global_rank": 4196,
      "category_rank": 51,
      "domain": "gazprombank.ru",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 13753101.293121,
      "curr_month_visits": 13753101.293121,
      "unique_users": 7591184.44418651,
      "pages_per_visit": 3.14449090374313
    },
    {
      "global_rank": 3332,
      "category_rank": 51,
      "domain": "przelewy24.pl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 18258198.1385667,
      "curr_month_visits": 18258198.1385667,
      "unique_users": 9346542.52508889,
      "pages_per_visit": 2.86647494725732
    },
    {
      "global_rank": 12903,
      "category_rank": 51,
      "domain": "gocompare.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 4243876.9268021,
      "curr_month_visits": 4243876.9268021,
      "unique_users": 2420749.4634698,
      "pages_per_visit": 6.76982646802193
    },
    {
      "global_rank": 4797,
      "category_rank": 52,
      "domain": "sbrf.ru",
      "category": "Finance/Finance",
      "avg_month_visits": 14943181.2360553,
      "curr_month_visits": 14943181.2360553,
      "unique_users": 7558718.3666919,
      "pages_per_visit": 2.81491935958877
    },
    {
      "global_rank": 3837,
      "category_rank": 52,
      "domain": "thestreet.com",
      "category": "Finance/Investing",
      "avg_month_visits": 20932261.4603555,
      "curr_month_visits": 20932261.4603555,
      "unique_users": 12077047.3741569,
      "pages_per_visit": 1.46158767725309
    },
    {
      "global_rank": 29424,
      "category_rank": 52,
      "domain": "xbees.in",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1615655.247665,
      "curr_month_visits": 1615655.247665,
      "unique_users": 492143.0739358,
      "pages_per_visit": 8.50335751856773
    },
    {
      "global_rank": 3352,
      "category_rank": 52,
      "domain": "rbcroyalbank.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 23137170.6162096,
      "curr_month_visits": 23137170.6162096,
      "unique_users": 5787187.4757086,
      "pages_per_visit": 2.14098859158859
    },
    {
      "global_rank": 13051,
      "category_rank": 52,
      "domain": "hdfclife.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 4083611.39783767,
      "curr_month_visits": 4083611.39783767,
      "unique_users": 1668686.12850374,
      "pages_per_visit": 5.51154824945832
    },
    {
      "global_rank": 4606,
      "category_rank": 52,
      "domain": "banquepopulaire.fr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 7577138.11316997,
      "curr_month_visits": 7577138.11316997,
      "unique_users": 1366787.98994138,
      "pages_per_visit": 11.654316303097
    },
    {
      "global_rank": 29513,
      "category_rank": 53,
      "domain": "netplayz.ru",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1936804.72781966,
      "curr_month_visits": 1936804.72781966,
      "unique_users": 423246.97231695,
      "pages_per_visit": 2.89083335004486
    },
    {
      "global_rank": 4823,
      "category_rank": 53,
      "domain": "sicredi.com.br",
      "category": "Finance/Finance",
      "avg_month_visits": 9314405.23829317,
      "curr_month_visits": 9314405.23829317,
      "unique_users": 2218044.18681993,
      "pages_per_visit": 8.87998652379209
    },
    {
      "global_rank": 3863,
      "category_rank": 53,
      "domain": "gmgn.ai",
      "category": "Finance/Investing",
      "avg_month_visits": 5130018.87386225,
      "curr_month_visits": 5130018.87386225,
      "unique_users": 514259.095468322,
      "pages_per_visit": 15.8310325592136
    },
    {
      "global_rank": 13563,
      "category_rank": 53,
      "domain": "vsp.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 3436520.23466545,
      "curr_month_visits": 3436520.23466545,
      "unique_users": 1608135.19746198,
      "pages_per_visit": 6.13633806032377
    },
    {
      "global_rank": 4635,
      "category_rank": 53,
      "domain": "mt.co.kr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 16282303.3398247,
      "curr_month_visits": 16282303.3398247,
      "unique_users": 7760293.33548597,
      "pages_per_visit": 1.91086141650216
    },
    {
      "global_rank": 3370,
      "category_rank": 53,
      "domain": "westpac.com.au",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 12397226.3444179,
      "curr_month_visits": 12397226.3444179,
      "unique_users": 2543331.04544299,
      "pages_per_visit": 8.77331100022812
    },
    {
      "global_rank": 3923,
      "category_rank": 54,
      "domain": "nseindia.com",
      "category": "Finance/Investing",
      "avg_month_visits": 17717454.3671087,
      "curr_month_visits": 17717454.3671087,
      "unique_users": 3897877.40082775,
      "pages_per_visit": 3.91997429778917
    },
    {
      "global_rank": 4771,
      "category_rank": 54,
      "domain": "lguplus.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 12171563.4540312,
      "curr_month_visits": 12171563.4540312,
      "unique_users": 4714867.12547354,
      "pages_per_visit": 3.24080333133951
    },
    {
      "global_rank": 3477,
      "category_rank": 54,
      "domain": "ziraatbank.com.tr",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 13401264.01104,
      "curr_month_visits": 13401264.01104,
      "unique_users": 4896929.2639371,
      "pages_per_visit": 7.11928478246495
    },
    {
      "global_rank": 13574,
      "category_rank": 54,
      "domain": "tataaig.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 4522360.97277626,
      "curr_month_visits": 4522360.97277626,
      "unique_users": 2388331.90738725,
      "pages_per_visit": 3.89150611450588
    },
    {
      "global_rank": 29690,
      "category_rank": 54,
      "domain": "lta.go.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 916535.550597358,
      "curr_month_visits": 916535.550597358,
      "unique_users": 463782.834393192,
      "pages_per_visit": 17.080094741072
    },
    {
      "global_rank": 4956,
      "category_rank": 54,
      "domain": "elster.de",
      "category": "Finance/Finance",
      "avg_month_visits": 5678280.16664475,
      "curr_month_visits": 5678280.16664475,
      "unique_users": 2692271.64693881,
      "pages_per_visit": 23.7518919878384
    },
    {
      "global_rank": 4040,
      "category_rank": 55,
      "domain": "nomura.co.jp",
      "category": "Finance/Investing",
      "avg_month_visits": 11382639.4921036,
      "curr_month_visits": 11382639.4921036,
      "unique_users": 2121915.78615296,
      "pages_per_visit": 7.48250486028367
    },
    {
      "global_rank": 3483,
      "category_rank": 55,
      "domain": "bancogalicia.com.ar",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 11292901.709538,
      "curr_month_visits": 11292901.709538,
      "unique_users": 2164363.33960767,
      "pages_per_visit": 11.0302825605833
    },
    {
      "global_rank": 13656,
      "category_rank": 55,
      "domain": "aiimsexams.ac.in",
      "category": "Finance/Insurance",
      "avg_month_visits": 3338664.72601163,
      "curr_month_visits": 3338664.72601163,
      "unique_users": 828550.072431763,
      "pages_per_visit": 6.74089744869707
    },
    {
      "global_rank": 4972,
      "category_rank": 55,
      "domain": "avanza.se",
      "category": "Finance/Finance",
      "avg_month_visits": 9040168.98688612,
      "curr_month_visits": 9040168.98688612,
      "unique_users": 1146103.53815259,
      "pages_per_visit": 9.37963957627068
    },
    {
      "global_rank": 30166,
      "category_rank": 55,
      "domain": "tra.go.tz",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1818657.21509209,
      "curr_month_visits": 1818657.21509209,
      "unique_users": 291279.89884452,
      "pages_per_visit": 9.4563679448428
    },
    {
      "global_rank": 4845,
      "category_rank": 55,
      "domain": "viabcp.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 12490019.3312379,
      "curr_month_visits": 12490019.3312379,
      "unique_users": 3084232.54640166,
      "pages_per_visit": 4.77830127064584
    },
    {
      "global_rank": 4998,
      "category_rank": 56,
      "domain": "login.gov.pl",
      "category": "Finance/Finance",
      "avg_month_visits": 11371835.0684711,
      "curr_month_visits": 11371835.0684711,
      "unique_users": 5141184.88427293,
      "pages_per_visit": 3.95508631593163
    },
    {
      "global_rank": 3558,
      "category_rank": 56,
      "domain": "natwest.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 13249764.0929735,
      "curr_month_visits": 13249764.0929735,
      "unique_users": 4453620.66788931,
      "pages_per_visit": 5.22030886150723
    },
    {
      "global_rank": 4877,
      "category_rank": 56,
      "domain": "bancolombia.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 14629824.2659364,
      "curr_month_visits": 14629824.2659364,
      "unique_users": 5478316.71376494,
      "pages_per_visit": 2.77479016740007
    },
    {
      "global_rank": 4385,
      "category_rank": 56,
      "domain": "xm.com",
      "category": "Finance/Investing",
      "avg_month_visits": 16499223.6458996,
      "curr_month_visits": 16499223.6458996,
      "unique_users": 7916831.21254758,
      "pages_per_visit": 2.92267827536437
    },
    {
      "global_rank": 30248,
      "category_rank": 56,
      "domain": "vchasno.ua",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1774417.85751013,
      "curr_month_visits": 1774417.85751013,
      "unique_users": 393330.323148679,
      "pages_per_visit": 5.45281747991217
    },
    {
      "global_rank": 13663,
      "category_rank": 56,
      "domain": "employeenavigator.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1821850.28488352,
      "curr_month_visits": 1821850.28488352,
      "unique_users": 634906.073388496,
      "pages_per_visit": 13.6693393289935
    },
    {
      "global_rank": 3597,
      "category_rank": 57,
      "domain": "centrum24.pl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 9817972.29703295,
      "curr_month_visits": 9817972.29703295,
      "unique_users": 1806558.00625715,
      "pages_per_visit": 11.3434998992327
    },
    {
      "global_rank": 30479,
      "category_rank": 57,
      "domain": "nra.bg",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1649368.60907146,
      "curr_month_visits": 1649368.60907146,
      "unique_users": 445697.657408229,
      "pages_per_visit": 7.44067291084519
    },
    {
      "global_rank": 5342,
      "category_rank": 57,
      "domain": "nordea.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 14084257.7205035,
      "curr_month_visits": 14084257.7205035,
      "unique_users": 3650506.21489627,
      "pages_per_visit": 2.39790411048845
    },
    {
      "global_rank": 13690,
      "category_rank": 57,
      "domain": "icicilombard.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 3991495.50692877,
      "curr_month_visits": 3991495.50692877,
      "unique_users": 1964049.59670817,
      "pages_per_visit": 4.99546415787231
    },
    {
      "global_rank": 5006,
      "category_rank": 57,
      "domain": "paisabazaar.com",
      "category": "Finance/Finance",
      "avg_month_visits": 13243245.9258833,
      "curr_month_visits": 13243245.9258833,
      "unique_users": 7892074.4533584,
      "pages_per_visit": 3.25235918944719
    },
    {
      "global_rank": 4475,
      "category_rank": 57,
      "domain": "shopsy.in",
      "category": "Finance/Investing",
      "avg_month_visits": 16793813.435446,
      "curr_month_visits": 16793813.435446,
      "unique_users": 8909108.79897811,
      "pages_per_visit": 3.07649231623804
    },
    {
      "global_rank": 5408,
      "category_rank": 58,
      "domain": "paychex.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 10650727.5684779,
      "curr_month_visits": 10650727.5684779,
      "unique_users": 2111942.31109499,
      "pages_per_visit": 6.33809225401383
    },
    {
      "global_rank": 4532,
      "category_rank": 58,
      "domain": "nodepay.ai",
      "category": "Finance/Investing",
      "avg_month_visits": 8049837.54555619,
      "curr_month_visits": 8049837.54555619,
      "unique_users": 771502.592404337,
      "pages_per_visit": 3.49068286479818
    },
    {
      "global_rank": 13770,
      "category_rank": 58,
      "domain": "bradescoseguros.com.br",
      "category": "Finance/Insurance",
      "avg_month_visits": 3369102.59336222,
      "curr_month_visits": 3369102.59336222,
      "unique_users": 954906.96024324,
      "pages_per_visit": 9.44175590532867
    },
    {
      "global_rank": 30644,
      "category_rank": 58,
      "domain": "nalog-nalog.ru",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2643791.35456194,
      "curr_month_visits": 2643791.35456194,
      "unique_users": 1514952.55363579,
      "pages_per_visit": 1.68250114132983
    },
    {
      "global_rank": 3672,
      "category_rank": 58,
      "domain": "ipko.pl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 14255099.4881634,
      "curr_month_visits": 14255099.4881634,
      "unique_users": 2949875.1655594,
      "pages_per_visit": 5.63692942860745
    },
    {
      "global_rank": 5082,
      "category_rank": 58,
      "domain": "hangikredi.com",
      "category": "Finance/Finance",
      "avg_month_visits": 13784725.816607,
      "curr_month_visits": 13784725.816607,
      "unique_users": 6237844.44930448,
      "pages_per_visit": 2.79950430396861
    },
    {
      "global_rank": 31173,
      "category_rank": 59,
      "domain": "ingbusiness.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1593090.96744659,
      "curr_month_visits": 1593090.96744659,
      "unique_users": 204658.893936254,
      "pages_per_visit": 6.51189054332935
    },
    {
      "global_rank": 4600,
      "category_rank": 59,
      "domain": "nikkei225jp.com",
      "category": "Finance/Investing",
      "avg_month_visits": 25581555.3236184,
      "curr_month_visits": 25581555.3236184,
      "unique_users": 1177103.30240787,
      "pages_per_visit": 2.29812916484627
    },
    {
      "global_rank": 5125,
      "category_rank": 59,
      "domain": "mypertamina.id",
      "category": "Finance/Finance",
      "avg_month_visits": 7695305.84590192,
      "curr_month_visits": 7695305.84590192,
      "unique_users": 3098594.96970781,
      "pages_per_visit": 10.5711290285311
    },
    {
      "global_rank": 14169,
      "category_rank": 59,
      "domain": "sura.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 4801520.23670255,
      "curr_month_visits": 4801520.23670255,
      "unique_users": 1771604.53371732,
      "pages_per_visit": 3.75092696733714
    },
    {
      "global_rank": 5418,
      "category_rank": 59,
      "domain": "banamex.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 9644092.18204361,
      "curr_month_visits": 9644092.18204361,
      "unique_users": 3826562.17901217,
      "pages_per_visit": 4.78778125731893
    },
    {
      "global_rank": 3680,
      "category_rank": 59,
      "domain": "interac.ca",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 20455407.55004,
      "curr_month_visits": 20455407.55004,
      "unique_users": 6278616.99317684,
      "pages_per_visit": 2.06113854897236
    },
    {
      "global_rank": 3682,
      "category_rank": 60,
      "domain": "securecafe.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 15133680.2975119,
      "curr_month_visits": 15133680.2975119,
      "unique_users": 5995992.02784543,
      "pages_per_visit": 4.54839998288056
    },
    {
      "global_rank": 14457,
      "category_rank": 60,
      "domain": "optum.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 4612652.36961927,
      "curr_month_visits": 4612652.36961927,
      "unique_users": 2466101.12731953,
      "pages_per_visit": 3.53166426725795
    },
    {
      "global_rank": 5151,
      "category_rank": 60,
      "domain": "amazon.work",
      "category": "Finance/Finance",
      "avg_month_visits": 9589825.93661251,
      "curr_month_visits": 9589825.93661251,
      "unique_users": 1368244.79483204,
      "pages_per_visit": 6.29406505320734
    },
    {
      "global_rank": 4611,
      "category_rank": 60,
      "domain": "nsdl.com",
      "category": "Finance/Investing",
      "avg_month_visits": 11412199.3534362,
      "curr_month_visits": 11412199.3534362,
      "unique_users": 4787876.1788044,
      "pages_per_visit": 6.27627595833736
    },
    {
      "global_rank": 5673,
      "category_rank": 60,
      "domain": "anwb.nl",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 10510828.406996,
      "curr_month_visits": 10510828.406996,
      "unique_users": 4604124.07141373,
      "pages_per_visit": 3.73562644975309
    },
    {
      "global_rank": 31281,
      "category_rank": 60,
      "domain": "gofin.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2211906.57584252,
      "curr_month_visits": 2211906.57584252,
      "unique_users": 1085962.27557604,
      "pages_per_visit": 2.73772296372595
    },
    {
      "global_rank": 3822,
      "category_rank": 61,
      "domain": "ally.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 13460227.5558049,
      "curr_month_visits": 13460227.5558049,
      "unique_users": 4556614.95132496,
      "pages_per_visit": 5.2723536278644
    },
    {
      "global_rank": 5779,
      "category_rank": 61,
      "domain": "ctbcbank.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 11304526.1054343,
      "curr_month_visits": 11304526.1054343,
      "unique_users": 4180378.23150633,
      "pages_per_visit": 3.56360409835346
    },
    {
      "global_rank": 14496,
      "category_rank": 61,
      "domain": "bajajfinservmarkets.in",
      "category": "Finance/Insurance",
      "avg_month_visits": 5123679.64359877,
      "curr_month_visits": 5123679.64359877,
      "unique_users": 2536066.79693674,
      "pages_per_visit": 3.01012926398043
    },
    {
      "global_rank": 4620,
      "category_rank": 61,
      "domain": "minkabu.jp",
      "category": "Finance/Investing",
      "avg_month_visits": 12832102.6997986,
      "curr_month_visits": 12832102.6997986,
      "unique_users": 3185142.92876547,
      "pages_per_visit": 4.5311796075618
    },
    {
      "global_rank": 31447,
      "category_rank": 61,
      "domain": "elogo.com.tr",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2319908.25965446,
      "curr_month_visits": 2319908.25965446,
      "unique_users": 560216.19695276,
      "pages_per_visit": 3.33744069890099
    },
    {
      "global_rank": 5152,
      "category_rank": 61,
      "domain": "kraken.com",
      "category": "Finance/Finance",
      "avg_month_visits": 6496417.80562422,
      "curr_month_visits": 6496417.80562422,
      "unique_users": 1764534.5268391,
      "pages_per_visit": 7.4775881471609
    },
    {
      "global_rank": 5294,
      "category_rank": 62,
      "domain": "benzinga.com",
      "category": "Finance/Finance",
      "avg_month_visits": 19913493.5950566,
      "curr_month_visits": 19913493.5950566,
      "unique_users": 10048305.7499569,
      "pages_per_visit": 1.7234997652842
    },
    {
      "global_rank": 3849,
      "category_rank": 62,
      "domain": "nubank.com.br",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 23431490.540044,
      "curr_month_visits": 23431490.540044,
      "unique_users": 13314062.8281464,
      "pages_per_visit": 1.55465304147646
    },
    {
      "global_rank": 5919,
      "category_rank": 62,
      "domain": "lcl.fr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 8597708.44787245,
      "curr_month_visits": 8597708.44787245,
      "unique_users": 1973198.51552155,
      "pages_per_visit": 6.32206059551529
    },
    {
      "global_rank": 31493,
      "category_rank": 62,
      "domain": "inspirafinancial.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1233424.71038816,
      "curr_month_visits": 1233424.71038816,
      "unique_users": 513164.582239104,
      "pages_per_visit": 8.28202801815065
    },
    {
      "global_rank": 14868,
      "category_rank": 62,
      "domain": "epssura.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 4072746.857844,
      "curr_month_visits": 4072746.857844,
      "unique_users": 1528422.91870458,
      "pages_per_visit": 4.47866512517628
    },
    {
      "global_rank": 4623,
      "category_rank": 62,
      "domain": "cnbctv18.com",
      "category": "Finance/Investing",
      "avg_month_visits": 21337359.1835259,
      "curr_month_visits": 21337359.1835259,
      "unique_users": 11881747.8873658,
      "pages_per_visit": 1.51796904620176
    },
    {
      "global_rank": 4638,
      "category_rank": 63,
      "domain": "deriv.com",
      "category": "Finance/Investing",
      "avg_month_visits": 11631677.4049646,
      "curr_month_visits": 11631677.4049646,
      "unique_users": 2229487.36242065,
      "pages_per_visit": 8.30501210079682
    },
    {
      "global_rank": 5995,
      "category_rank": 63,
      "domain": "myna.go.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 6911438.6253845,
      "curr_month_visits": 6911438.6253845,
      "unique_users": 4533518.70748977,
      "pages_per_visit": 5.88974459432419
    },
    {
      "global_rank": 3860,
      "category_rank": 63,
      "domain": "op.fi",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 13234268.644976,
      "curr_month_visits": 13234268.644976,
      "unique_users": 2927088.49296878,
      "pages_per_visit": 5.57928563890891
    },
    {
      "global_rank": 5316,
      "category_rank": 63,
      "domain": "latoken.com",
      "category": "Finance/Finance",
      "avg_month_visits": 6908060.17145786,
      "curr_month_visits": 6908060.17145786,
      "unique_users": 3705148.37384456,
      "pages_per_visit": 10.4332980966607
    },
    {
      "global_rank": 14984,
      "category_rank": 63,
      "domain": "fepblue.org",
      "category": "Finance/Insurance",
      "avg_month_visits": 2599244.48073615,
      "curr_month_visits": 2599244.48073615,
      "unique_users": 1024480.74972701,
      "pages_per_visit": 6.65631064682602
    },
    {
      "global_rank": 31870,
      "category_rank": 63,
      "domain": "uyum.com.tr",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1747442.84003796,
      "curr_month_visits": 1747442.84003796,
      "unique_users": 132382.561158266,
      "pages_per_visit": 6.99395245319496
    },
    {
      "global_rank": 5427,
      "category_rank": 64,
      "domain": "bnc.ca",
      "category": "Finance/Finance",
      "avg_month_visits": 7494028.455779,
      "curr_month_visits": 7494028.455779,
      "unique_users": 1490543.56758813,
      "pages_per_visit": 9.69133082178052
    },
    {
      "global_rank": 6170,
      "category_rank": 64,
      "domain": "dolarhoy.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 15067286.0346016,
      "curr_month_visits": 15067286.0346016,
      "unique_users": 3540796.73606677,
      "pages_per_visit": 2.16879105741752
    },
    {
      "global_rank": 4689,
      "category_rank": 64,
      "domain": "bettentacruela.com",
      "category": "Finance/Investing",
      "avg_month_visits": 16553516.6164261,
      "curr_month_visits": 16553516.6164261,
      "unique_users": 9416057.28367272,
      "pages_per_visit": 2.0085180910157
    },
    {
      "global_rank": 33042,
      "category_rank": 64,
      "domain": "go2bank.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1545962.47641858,
      "curr_month_visits": 1545962.47641858,
      "unique_users": 668764.554335988,
      "pages_per_visit": 4.94566209610901
    },
    {
      "global_rank": 3867,
      "category_rank": 64,
      "domain": "bancochile.cl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 11980743.355371,
      "curr_month_visits": 11980743.355371,
      "unique_users": 2767955.29947479,
      "pages_per_visit": 6.81503103011901
    },
    {
      "global_rank": 33729,
      "category_rank": 65,
      "domain": "taxfoundation.org",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1971530.67150256,
      "curr_month_visits": 1971530.67150256,
      "unique_users": 1483738.08299811,
      "pages_per_visit": 1.50567807708794
    },
    {
      "global_rank": 3883,
      "category_rank": 65,
      "domain": "comdirect.de",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 10464407.9600291,
      "curr_month_visits": 10464407.9600291,
      "unique_users": 1579323.56316537,
      "pages_per_visit": 9.84785679320045
    },
    {
      "global_rank": 15443,
      "category_rank": 65,
      "domain": "nationwide.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 3129896.21129836,
      "curr_month_visits": 3129896.21129836,
      "unique_users": 1558681.85112624,
      "pages_per_visit": 7.04605822433874
    },
    {
      "global_rank": 5686,
      "category_rank": 65,
      "domain": "capital.fr",
      "category": "Finance/Finance",
      "avg_month_visits": 14854568.1625213,
      "curr_month_visits": 14854568.1625213,
      "unique_users": 7030914.85925235,
      "pages_per_visit": 1.5762055900301
    },
    {
      "global_rank": 4778,
      "category_rank": 65,
      "domain": "icicidirect.com",
      "category": "Finance/Investing",
      "avg_month_visits": 10368367.3245156,
      "curr_month_visits": 10368367.3245156,
      "unique_users": 2034141.01831199,
      "pages_per_visit": 10.0426671605845
    },
    {
      "global_rank": 6377,
      "category_rank": 65,
      "domain": "macro.com.ar",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 8330791.72275255,
      "curr_month_visits": 8330791.72275255,
      "unique_users": 1830900.33352124,
      "pages_per_visit": 5.02786829869366
    },
    {
      "global_rank": 6519,
      "category_rank": 66,
      "domain": "piraeusbank.gr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 8413335.95619056,
      "curr_month_visits": 8413335.95619056,
      "unique_users": 1642786.27112737,
      "pages_per_visit": 5.70954198816673
    },
    {
      "global_rank": 5694,
      "category_rank": 66,
      "domain": "willbank.com.br",
      "category": "Finance/Finance",
      "avg_month_visits": 18571421.3685178,
      "curr_month_visits": 18571421.3685178,
      "unique_users": 6885191.60069232,
      "pages_per_visit": 1.20309374496251
    },
    {
      "global_rank": 33896,
      "category_rank": 66,
      "domain": "teamsystem.io",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2088982.77552834,
      "curr_month_visits": 2088982.77552834,
      "unique_users": 64493.0942918193,
      "pages_per_visit": 8.56705109535754
    },
    {
      "global_rank": 4809,
      "category_rank": 66,
      "domain": "chartink.com",
      "category": "Finance/Investing",
      "avg_month_visits": 11762149.1579207,
      "curr_month_visits": 11762149.1579207,
      "unique_users": 1248913.34094895,
      "pages_per_visit": 8.46483212288419
    },
    {
      "global_rank": 3934,
      "category_rank": 66,
      "domain": "venmo.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 13548466.2300844,
      "curr_month_visits": 13548466.2300844,
      "unique_users": 8449441.58678724,
      "pages_per_visit": 4.69776226902978
    },
    {
      "global_rank": 15685,
      "category_rank": 66,
      "domain": "optumrx.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 3343833.96457012,
      "curr_month_visits": 3343833.96457012,
      "unique_users": 1619438.78846974,
      "pages_per_visit": 5.14127490733303
    },
    {
      "global_rank": 15701,
      "category_rank": 67,
      "domain": "barmer.de",
      "category": "Finance/Insurance",
      "avg_month_visits": 4216202.99861441,
      "curr_month_visits": 4216202.99861441,
      "unique_users": 2723057.30059618,
      "pages_per_visit": 3.77950987267945
    },
    {
      "global_rank": 34019,
      "category_rank": 67,
      "domain": "financnasprava.sk",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1370526.5450259,
      "curr_month_visits": 1370526.5450259,
      "unique_users": 318676.147975208,
      "pages_per_visit": 9.05883211463595
    },
    {
      "global_rank": 6561,
      "category_rank": 67,
      "domain": "r10.to",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 13541388.8950563,
      "curr_month_visits": 13541388.8950563,
      "unique_users": 6449202.38773904,
      "pages_per_visit": 1.40644487169047
    },
    {
      "global_rank": 4924,
      "category_rank": 67,
      "domain": "bitunix.com",
      "category": "Finance/Investing",
      "avg_month_visits": 6662273.8170734,
      "curr_month_visits": 6662273.8170734,
      "unique_users": 3085534.02958279,
      "pages_per_visit": 10.9843827749659
    },
    {
      "global_rank": 3965,
      "category_rank": 67,
      "domain": "sravni.ru",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 20285243.4174484,
      "curr_month_visits": 20285243.4174484,
      "unique_users": 12889388.8159329,
      "pages_per_visit": 1.98073984036645
    },
    {
      "global_rank": 5704,
      "category_rank": 67,
      "domain": "doviz.com",
      "category": "Finance/Finance",
      "avg_month_visits": 19537187.7270699,
      "curr_month_visits": 19537187.7270699,
      "unique_users": 1690530.08581201,
      "pages_per_visit": 2.24842094738658
    },
    {
      "global_rank": 6593,
      "category_rank": 68,
      "domain": "bna.com.ar",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 12438913.4200372,
      "curr_month_visits": 12438913.4200372,
      "unique_users": 3339806.41601985,
      "pages_per_visit": 2.59543621390923
    },
    {
      "global_rank": 4939,
      "category_rank": 68,
      "domain": "jamb.gov.ng",
      "category": "Finance/Investing",
      "avg_month_visits": 9888667.39697624,
      "curr_month_visits": 9888667.39697624,
      "unique_users": 2137544.40328817,
      "pages_per_visit": 8.34096799237609
    },
    {
      "global_rank": 34128,
      "category_rank": 68,
      "domain": "rzp.io",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 2945911.6146011,
      "curr_month_visits": 2945911.6146011,
      "unique_users": 1680499.43134111,
      "pages_per_visit": 1.43475901446897
    },
    {
      "global_rank": 15877,
      "category_rank": 68,
      "domain": "newyorklife.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2701769.78254819,
      "curr_month_visits": 2701769.78254819,
      "unique_users": 934626.296050405,
      "pages_per_visit": 9.1705819926232
    },
    {
      "global_rank": 5737,
      "category_rank": 68,
      "domain": "vakinha.com.br",
      "category": "Finance/Finance",
      "avg_month_visits": 16899858.0843576,
      "curr_month_visits": 16899858.0843576,
      "unique_users": 8978860.33453948,
      "pages_per_visit": 1.51743947473131
    },
    {
      "global_rank": 3973,
      "category_rank": 68,
      "domain": "axisbank.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 17823670.6800956,
      "curr_month_visits": 17823670.6800956,
      "unique_users": 8107067.98392248,
      "pages_per_visit": 2.98931130099502
    },
    {
      "global_rank": 4960,
      "category_rank": 69,
      "domain": "bseindia.com",
      "category": "Finance/Investing",
      "avg_month_visits": 13497915.1309153,
      "curr_month_visits": 13497915.1309153,
      "unique_users": 3219559.86873291,
      "pages_per_visit": 4.77145184227013
    },
    {
      "global_rank": 35703,
      "category_rank": 69,
      "domain": "ifirma.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1299415.79563013,
      "curr_month_visits": 1299415.79563013,
      "unique_users": 380643.036577831,
      "pages_per_visit": 7.35256440764911
    },
    {
      "global_rank": 6671,
      "category_rank": 69,
      "domain": "moneysupermarket.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 7740995.77740165,
      "curr_month_visits": 7740995.77740165,
      "unique_users": 4560514.21156223,
      "pages_per_visit": 5.80435896669866
    },
    {
      "global_rank": 16003,
      "category_rank": 69,
      "domain": "hdfcergo.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 3493118.51938079,
      "curr_month_visits": 3493118.51938079,
      "unique_users": 1749501.2931168,
      "pages_per_visit": 4.89055331829076
    },
    {
      "global_rank": 3988,
      "category_rank": 69,
      "domain": "postbank.de",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 11867600.9318864,
      "curr_month_visits": 11867600.9318864,
      "unique_users": 2261635.71632656,
      "pages_per_visit": 6.53791837917129
    },
    {
      "global_rank": 5769,
      "category_rank": 69,
      "domain": "cash.app",
      "category": "Finance/Finance",
      "avg_month_visits": 15586613.8292141,
      "curr_month_visits": 15586613.8292141,
      "unique_users": 7049519.71535198,
      "pages_per_visit": 2.98007989703057
    },
    {
      "global_rank": 4013,
      "category_rank": 70,
      "domain": "abnamro.nl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 14552117.7964828,
      "curr_month_visits": 14552117.7964828,
      "unique_users": 4451468.65556744,
      "pages_per_visit": 4.04220989133414
    },
    {
      "global_rank": 6823,
      "category_rank": 70,
      "domain": "belastingdienst.nl",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 7747744.13119588,
      "curr_month_visits": 7747744.13119588,
      "unique_users": 4000898.63715846,
      "pages_per_visit": 6.13669691433955
    },
    {
      "global_rank": 5787,
      "category_rank": 70,
      "domain": "ebanx.com",
      "category": "Finance/Finance",
      "avg_month_visits": 14880076.268329,
      "curr_month_visits": 14880076.268329,
      "unique_users": 5635805.66098525,
      "pages_per_visit": 1.80036341088767
    },
    {
      "global_rank": 35803,
      "category_rank": 70,
      "domain": "tnb.org.tr",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1169149.87754036,
      "curr_month_visits": 1169149.87754036,
      "unique_users": 273635.998136302,
      "pages_per_visit": 13.5901286275363
    },
    {
      "global_rank": 16046,
      "category_rank": 70,
      "domain": "tokiomarine.com.br",
      "category": "Finance/Insurance",
      "avg_month_visits": 3498447.48398666,
      "curr_month_visits": 3498447.48398666,
      "unique_users": 611702.60881167,
      "pages_per_visit": 7.69303126279329
    },
    {
      "global_rank": 5203,
      "category_rank": 70,
      "domain": "stocktwits.com",
      "category": "Finance/Investing",
      "avg_month_visits": 14183509.7069331,
      "curr_month_visits": 14183509.7069331,
      "unique_users": 1264595.54538826,
      "pages_per_visit": 3.90664475366685
    },
    {
      "global_rank": 36027,
      "category_rank": 71,
      "domain": "sbctech.ru",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1369198.79204886,
      "curr_month_visits": 1369198.79204886,
      "unique_users": 726027.162544536,
      "pages_per_visit": 6.24537025273882
    },
    {
      "global_rank": 5377,
      "category_rank": 71,
      "domain": "coinw.com",
      "category": "Finance/Investing",
      "avg_month_visits": 10114656.2675642,
      "curr_month_visits": 10114656.2675642,
      "unique_users": 5144907.94476399,
      "pages_per_visit": 7.33133233183988
    },
    {
      "global_rank": 16186,
      "category_rank": 71,
      "domain": "deutsche-rentenversicherung.de",
      "category": "Finance/Insurance",
      "avg_month_visits": 3577032.08261937,
      "curr_month_visits": 3577032.08261937,
      "unique_users": 2183055.73219805,
      "pages_per_visit": 4.36376418562732
    },
    {
      "global_rank": 6970,
      "category_rank": 71,
      "domain": "mercantilbanco.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 7715770.94383244,
      "curr_month_visits": 7715770.94383244,
      "unique_users": 1277402.60222106,
      "pages_per_visit": 5.52693474790483
    },
    {
      "global_rank": 4062,
      "category_rank": 71,
      "domain": "nationwide.co.uk",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 11204372.1593352,
      "curr_month_visits": 11204372.1593352,
      "unique_users": 3916539.19498802,
      "pages_per_visit": 6.89280229948876
    },
    {
      "global_rank": 5801,
      "category_rank": 71,
      "domain": "gs.im",
      "category": "Finance/Finance",
      "avg_month_visits": 13519658.6112583,
      "curr_month_visits": 13519658.6112583,
      "unique_users": 9135832.83712675,
      "pages_per_visit": 1.52757909954281
    },
    {
      "global_rank": 5387,
      "category_rank": 72,
      "domain": "capital.gr",
      "category": "Finance/Investing",
      "avg_month_visits": 15026270.6986889,
      "curr_month_visits": 15026270.6986889,
      "unique_users": 2217478.07430445,
      "pages_per_visit": 2.97125791012073
    },
    {
      "global_rank": 37356,
      "category_rank": 72,
      "domain": "mikrogrup.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1110358.09050005,
      "curr_month_visits": 1110358.09050005,
      "unique_users": 243908.155262514,
      "pages_per_visit": 8.86297891638554
    },
    {
      "global_rank": 16613,
      "category_rank": 72,
      "domain": "bfin.in",
      "category": "Finance/Insurance",
      "avg_month_visits": 4039764.29000177,
      "curr_month_visits": 4039764.29000177,
      "unique_users": 2333850.37958404,
      "pages_per_visit": 2.37259706001313
    },
    {
      "global_rank": 5821,
      "category_rank": 72,
      "domain": "bitpanda.com",
      "category": "Finance/Finance",
      "avg_month_visits": 7984988.98863677,
      "curr_month_visits": 7984988.98863677,
      "unique_users": 3214202.26429401,
      "pages_per_visit": 4.02827393455899
    },
    {
      "global_rank": 4084,
      "category_rank": 72,
      "domain": "bbva.es",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 10368897.3657888,
      "curr_month_visits": 10368897.3657888,
      "unique_users": 2916789.09596431,
      "pages_per_visit": 8.00873566996131
    },
    {
      "global_rank": 7041,
      "category_rank": 72,
      "domain": "tochka.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 8753622.29878609,
      "curr_month_visits": 8753622.29878609,
      "unique_users": 2103475.18916878,
      "pages_per_visit": 4.79839243996152
    },
    {
      "global_rank": 7157,
      "category_rank": 73,
      "domain": "transunion.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 6743040.3766987,
      "curr_month_visits": 6743040.3766987,
      "unique_users": 4342258.4575722,
      "pages_per_visit": 8.39388671603001
    },
    {
      "global_rank": 5848,
      "category_rank": 73,
      "domain": "idfcfirstbank.com",
      "category": "Finance/Finance",
      "avg_month_visits": 9932669.15421027,
      "curr_month_visits": 9932669.15421027,
      "unique_users": 4870337.79192756,
      "pages_per_visit": 4.35590744864035
    },
    {
      "global_rank": 4199,
      "category_rank": 73,
      "domain": "kotak.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 15246962.4806404,
      "curr_month_visits": 15246962.4806404,
      "unique_users": 7094520.59966825,
      "pages_per_visit": 3.83436913100114
    },
    {
      "global_rank": 5549,
      "category_rank": 73,
      "domain": "dpbossss.services",
      "category": "Finance/Investing",
      "avg_month_visits": 21466725.7257146,
      "curr_month_visits": 21466725.7257146,
      "unique_users": 1042754.39955206,
      "pages_per_visit": 3.12077633231523
    },
    {
      "global_rank": 16721,
      "category_rank": 73,
      "domain": "aflac.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2826876.89319444,
      "curr_month_visits": 2826876.89319444,
      "unique_users": 1168965.72635742,
      "pages_per_visit": 7.13633691535906
    },
    {
      "global_rank": 37487,
      "category_rank": 73,
      "domain": "slovensko.sk",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1151862.10737181,
      "curr_month_visits": 1151862.10737181,
      "unique_users": 421999.610525353,
      "pages_per_visit": 9.29338713468215
    },
    {
      "global_rank": 17405,
      "category_rank": 74,
      "domain": "rac.co.uk",
      "category": "Finance/Insurance",
      "avg_month_visits": 4376373.84058757,
      "curr_month_visits": 4376373.84058757,
      "unique_users": 2832694.12490251,
      "pages_per_visit": 2.55356861338113
    },
    {
      "global_rank": 7180,
      "category_rank": 74,
      "domain": "equifax.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 7946533.16396787,
      "curr_month_visits": 7946533.16396787,
      "unique_users": 4634677.74745208,
      "pages_per_visit": 5.99854302205055
    },
    {
      "global_rank": 37950,
      "category_rank": 74,
      "domain": "ewaybill.nic.in",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1334469.2775661,
      "curr_month_visits": 1334469.2775661,
      "unique_users": 241567.115535435,
      "pages_per_visit": 8.59018613795467
    },
    {
      "global_rank": 5608,
      "category_rank": 74,
      "domain": "fyers.in",
      "category": "Finance/Investing",
      "avg_month_visits": 6880554.46614869,
      "curr_month_visits": 6880554.46614869,
      "unique_users": 1037268.05165434,
      "pages_per_visit": 16.6823405620535
    },
    {
      "global_rank": 4220,
      "category_rank": 74,
      "domain": "mysynchrony.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 13057172.0262009,
      "curr_month_visits": 13057172.0262009,
      "unique_users": 7041522.98677116,
      "pages_per_visit": 3.96155104202319
    },
    {
      "global_rank": 5914,
      "category_rank": 74,
      "domain": "pz.gov.pl",
      "category": "Finance/Finance",
      "avg_month_visits": 8331290.3041878,
      "curr_month_visits": 8331290.3041878,
      "unique_users": 3782453.0750214,
      "pages_per_visit": 6.02326596521716
    },
    {
      "global_rank": 7316,
      "category_rank": 75,
      "domain": "payoneer.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 6323955.14611647,
      "curr_month_visits": 6323955.14611647,
      "unique_users": 2113352.78147727,
      "pages_per_visit": 8.24381009765277
    },
    {
      "global_rank": 5616,
      "category_rank": 75,
      "domain": "chittorgarh.com",
      "category": "Finance/Investing",
      "avg_month_visits": 17616224.7078046,
      "curr_month_visits": 17616224.7078046,
      "unique_users": 4688482.09190967,
      "pages_per_visit": 3.30932643009633
    },
    {
      "global_rank": 37951,
      "category_rank": 75,
      "domain": "wfirma.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1466909.1719296,
      "curr_month_visits": 1466909.1719296,
      "unique_users": 226925.557637483,
      "pages_per_visit": 6.63164438254781
    },
    {
      "global_rank": 5929,
      "category_rank": 75,
      "domain": "ubs.com",
      "category": "Finance/Finance",
      "avg_month_visits": 8127550.27615232,
      "curr_month_visits": 8127550.27615232,
      "unique_users": 2849895.21498547,
      "pages_per_visit": 6.82406897983362
    },
    {
      "global_rank": 17415,
      "category_rank": 75,
      "domain": "sbilife.co.in",
      "category": "Finance/Insurance",
      "avg_month_visits": 3654844.98978653,
      "curr_month_visits": 3654844.98978653,
      "unique_users": 1798051.15112124,
      "pages_per_visit": 2.7465774434432
    },
    {
      "global_rank": 4253,
      "category_rank": 75,
      "domain": "sg.fr",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 11241946.0833939,
      "curr_month_visits": 11241946.0833939,
      "unique_users": 2602713.73562313,
      "pages_per_visit": 6.81637531959369
    },
    {
      "global_rank": 7340,
      "category_rank": 76,
      "domain": "ccavenue.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 9826013.25642525,
      "curr_month_visits": 9826013.25642525,
      "unique_users": 5938187.64592493,
      "pages_per_visit": 2.99352420871815
    },
    {
      "global_rank": 5660,
      "category_rank": 76,
      "domain": "wantgoo.com",
      "category": "Finance/Investing",
      "avg_month_visits": 15220007.3864218,
      "curr_month_visits": 15220007.3864218,
      "unique_users": 1219206.76098983,
      "pages_per_visit": 3.77980231688044
    },
    {
      "global_rank": 4261,
      "category_rank": 76,
      "domain": "tdbank.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 12267381.5771624,
      "curr_month_visits": 12267381.5771624,
      "unique_users": 2812002.49000866,
      "pages_per_visit": 5.29786006053901
    },
    {
      "global_rank": 17964,
      "category_rank": 76,
      "domain": "deltadental.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 3029892.90305419,
      "curr_month_visits": 3029892.90305419,
      "unique_users": 1558553.56856587,
      "pages_per_visit": 5.19999305436471
    },
    {
      "global_rank": 5948,
      "category_rank": 76,
      "domain": "chime.com",
      "category": "Finance/Finance",
      "avg_month_visits": 10024796.1954001,
      "curr_month_visits": 10024796.1954001,
      "unique_users": 5224649.18275396,
      "pages_per_visit": 3.50209293851626
    },
    {
      "global_rank": 38162,
      "category_rank": 76,
      "domain": "moj.gov.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1382665.30751733,
      "curr_month_visits": 1382665.30751733,
      "unique_users": 743502.340644635,
      "pages_per_visit": 4.98242067665872
    },
    {
      "global_rank": 39250,
      "category_rank": 77,
      "domain": "taiyo-seimei.co.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1612551.99206009,
      "curr_month_visits": 1612551.99206009,
      "unique_users": 1210408.07757349,
      "pages_per_visit": 1.82670837646749
    },
    {
      "global_rank": 18211,
      "category_rank": 77,
      "domain": "transamerica.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2506264.77506596,
      "curr_month_visits": 2506264.77506596,
      "unique_users": 841123.338447592,
      "pages_per_visit": 7.6364951186204
    },
    {
      "global_rank": 5717,
      "category_rank": 77,
      "domain": "investorgain.com",
      "category": "Finance/Investing",
      "avg_month_visits": 17475769.2442542,
      "curr_month_visits": 17475769.2442542,
      "unique_users": 1876404.47070022,
      "pages_per_visit": 2.85411555205392
    },
    {
      "global_rank": 4358,
      "category_rank": 77,
      "domain": "bankier.pl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 16586255.7182397,
      "curr_month_visits": 16586255.7182397,
      "unique_users": 3495207.26316353,
      "pages_per_visit": 3.49556496889444
    },
    {
      "global_rank": 5966,
      "category_rank": 77,
      "domain": "livelo.com.br",
      "category": "Finance/Finance",
      "avg_month_visits": 6560509.29978896,
      "curr_month_visits": 6560509.29978896,
      "unique_users": 3151925.9653131,
      "pages_per_visit": 6.25156452722941
    },
    {
      "global_rank": 7356,
      "category_rank": 77,
      "domain": "banesco.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 8370531.54083674,
      "curr_month_visits": 8370531.54083674,
      "unique_users": 1239043.50210948,
      "pages_per_visit": 4.78048145027085
    },
    {
      "global_rank": 18251,
      "category_rank": 78,
      "domain": "farmers.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 3155429.9136885,
      "curr_month_visits": 3155429.9136885,
      "unique_users": 1562693.06107853,
      "pages_per_visit": 4.990429433808
    },
    {
      "global_rank": 5889,
      "category_rank": 78,
      "domain": "boursobank.com",
      "category": "Finance/Investing",
      "avg_month_visits": 7692530.53372588,
      "curr_month_visits": 7692530.53372588,
      "unique_users": 1862621.57791473,
      "pages_per_visit": 7.8118064488454
    },
    {
      "global_rank": 7357,
      "category_rank": 78,
      "domain": "edaily.co.kr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 11098834.9741157,
      "curr_month_visits": 11098834.9741157,
      "unique_users": 5524523.90609519,
      "pages_per_visit": 1.77160366180276
    },
    {
      "global_rank": 6070,
      "category_rank": 78,
      "domain": "nexigroup.com",
      "category": "Finance/Finance",
      "avg_month_visits": 10635559.3770869,
      "curr_month_visits": 10635559.3770869,
      "unique_users": 6757824.24387129,
      "pages_per_visit": 3.07277193239901
    },
    {
      "global_rank": 4386,
      "category_rank": 78,
      "domain": "indusind.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 9977649.42753234,
      "curr_month_visits": 9977649.42753234,
      "unique_users": 3622741.08563552,
      "pages_per_visit": 8.49235903948299
    },
    {
      "global_rank": 39702,
      "category_rank": 78,
      "domain": "izibiz.com.tr",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1029982.8081056,
      "curr_month_visits": 1029982.8081056,
      "unique_users": 146145.409849597,
      "pages_per_visit": 8.346318684836
    },
    {
      "global_rank": 7467,
      "category_rank": 79,
      "domain": "smartasset.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 9106218.3378655,
      "curr_month_visits": 9106218.3378655,
      "unique_users": 6002212.22212934,
      "pages_per_visit": 3.11780599710323
    },
    {
      "global_rank": 5928,
      "category_rank": 79,
      "domain": "nasdaq.com",
      "category": "Finance/Investing",
      "avg_month_visits": 11720662.549716,
      "curr_month_visits": 11720662.549716,
      "unique_users": 5195314.51869197,
      "pages_per_visit": 2.40431796261249
    },
    {
      "global_rank": 6089,
      "category_rank": 79,
      "domain": "btse.com",
      "category": "Finance/Finance",
      "avg_month_visits": 5460827.09567034,
      "curr_month_visits": 5460827.09567034,
      "unique_users": 2744309.39338694,
      "pages_per_visit": 8.3104947031129
    },
    {
      "global_rank": 39854,
      "category_rank": 79,
      "domain": "stat.gov.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1388971.43987433,
      "curr_month_visits": 1388971.43987433,
      "unique_users": 677198.363099002,
      "pages_per_visit": 3.67082307589851
    },
    {
      "global_rank": 18389,
      "category_rank": 79,
      "domain": "insurify.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2975445.16205583,
      "curr_month_visits": 2975445.16205583,
      "unique_users": 2003514.96904489,
      "pages_per_visit": 5.7274211174641
    },
    {
      "global_rank": 4437,
      "category_rank": 79,
      "domain": "nab.com.au",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 10670604.7396434,
      "curr_month_visits": 10670604.7396434,
      "unique_users": 2227786.38912625,
      "pages_per_visit": 6.7321280188178
    },
    {
      "global_rank": 6105,
      "category_rank": 80,
      "domain": "haremaltin.com",
      "category": "Finance/Finance",
      "avg_month_visits": 17737342.8829684,
      "curr_month_visits": 17737342.8829684,
      "unique_users": 1668419.2341149,
      "pages_per_visit": 2.03333360384926
    },
    {
      "global_rank": 6044,
      "category_rank": 80,
      "domain": "edwardjones.com",
      "category": "Finance/Investing",
      "avg_month_visits": 9662358.16943988,
      "curr_month_visits": 9662358.16943988,
      "unique_users": 3032995.94499107,
      "pages_per_visit": 4.17995703146812
    },
    {
      "global_rank": 40699,
      "category_rank": 80,
      "domain": "publuu.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1364228.47839239,
      "curr_month_visits": 1364228.47839239,
      "unique_users": 664834.809140722,
      "pages_per_visit": 5.56813024932163
    },
    {
      "global_rank": 7565,
      "category_rank": 80,
      "domain": "firstdata.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 10236352.0099599,
      "curr_month_visits": 10236352.0099599,
      "unique_users": 5498161.21946769,
      "pages_per_visit": 2.2604741606981
    },
    {
      "global_rank": 18556,
      "category_rank": 80,
      "domain": "sbm.org.tr",
      "category": "Finance/Insurance",
      "avg_month_visits": 2393425.87766736,
      "curr_month_visits": 2393425.87766736,
      "unique_users": 399027.749469475,
      "pages_per_visit": 11.1298095221447
    },
    {
      "global_rank": 4614,
      "category_rank": 80,
      "domain": "halifax-online.co.uk",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 8855693.66959766,
      "curr_month_visits": 8855693.66959766,
      "unique_users": 1959558.195846,
      "pages_per_visit": 9.61628174635339
    },
    {
      "global_rank": 18921,
      "category_rank": 81,
      "domain": "sigortam.net",
      "category": "Finance/Insurance",
      "avg_month_visits": 3399837.87112733,
      "curr_month_visits": 3399837.87112733,
      "unique_users": 1923477.89443693,
      "pages_per_visit": 2.36359103144001
    },
    {
      "global_rank": 4677,
      "category_rank": 81,
      "domain": "barclays.co.uk",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 9457856.39807125,
      "curr_month_visits": 9457856.39807125,
      "unique_users": 3338100.39129053,
      "pages_per_visit": 8.34191414032047
    },
    {
      "global_rank": 6113,
      "category_rank": 81,
      "domain": "morningstar.com",
      "category": "Finance/Investing",
      "avg_month_visits": 10193004.4654047,
      "curr_month_visits": 10193004.4654047,
      "unique_users": 4017856.06733303,
      "pages_per_visit": 3.59597456274871
    },
    {
      "global_rank": 40759,
      "category_rank": 81,
      "domain": "ppihgroup.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 982859.580266529,
      "curr_month_visits": 982859.580266529,
      "unique_users": 335922.669113844,
      "pages_per_visit": 6.47197006155343
    },
    {
      "global_rank": 6138,
      "category_rank": 81,
      "domain": "plaid.com",
      "category": "Finance/Finance",
      "avg_month_visits": 12890773.3869114,
      "curr_month_visits": 12890773.3869114,
      "unique_users": 8811880.78684865,
      "pages_per_visit": 1.70747083817951
    },
    {
      "global_rank": 7570,
      "category_rank": 81,
      "domain": "dnb.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 9575007.40188068,
      "curr_month_visits": 9575007.40188068,
      "unique_users": 6695082.65857848,
      "pages_per_visit": 2.90845398113171
    },
    {
      "global_rank": 41307,
      "category_rank": 82,
      "domain": "glavkniga.ru",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1978350.26100399,
      "curr_month_visits": 1978350.26100399,
      "unique_users": 1263739.03176481,
      "pages_per_visit": 1.66106330389929
    },
    {
      "global_rank": 4730,
      "category_rank": 82,
      "domain": "unblockedgames.world",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 8520134.94717813,
      "curr_month_visits": 8520134.94717813,
      "unique_users": 1614759.20821579,
      "pages_per_visit": 9.07058694944605
    },
    {
      "global_rank": 7604,
      "category_rank": 82,
      "domain": "hl.co.uk",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 6367469.27371131,
      "curr_month_visits": 6367469.27371131,
      "unique_users": 1629498.75458363,
      "pages_per_visit": 7.28114188167481
    },
    {
      "global_rank": 6133,
      "category_rank": 82,
      "domain": "pocketoption.com",
      "category": "Finance/Investing",
      "avg_month_visits": 12907514.3623511,
      "curr_month_visits": 12907514.3623511,
      "unique_users": 4459342.31246382,
      "pages_per_visit": 3.12597978496912
    },
    {
      "global_rank": 6212,
      "category_rank": 82,
      "domain": "netbk.co.jp",
      "category": "Finance/Finance",
      "avg_month_visits": 7486946.7715481,
      "curr_month_visits": 7486946.7715481,
      "unique_users": 2647985.23628898,
      "pages_per_visit": 6.76760337803117
    },
    {
      "global_rank": 19282,
      "category_rank": 82,
      "domain": "godigit.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 3523541.18664177,
      "curr_month_visits": 3523541.18664177,
      "unique_users": 2125843.16603716,
      "pages_per_visit": 3.06146818725966
    },
    {
      "global_rank": 4751,
      "category_rank": 83,
      "domain": "creditonebank.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 9723439.95786347,
      "curr_month_visits": 9723439.95786347,
      "unique_users": 3638465.19900094,
      "pages_per_visit": 6.04721660795102
    },
    {
      "global_rank": 6446,
      "category_rank": 83,
      "domain": "aib.ie",
      "category": "Finance/Finance",
      "avg_month_visits": 8350839.01337824,
      "curr_month_visits": 8350839.01337824,
      "unique_users": 2292460.63613319,
      "pages_per_visit": 5.93312443556832
    },
    {
      "global_rank": 41368,
      "category_rank": 83,
      "domain": "buhexpert8.ru",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1931711.18495393,
      "curr_month_visits": 1931711.18495393,
      "unique_users": 716960.336752812,
      "pages_per_visit": 1.94909809541603
    },
    {
      "global_rank": 6173,
      "category_rank": 83,
      "domain": "kucoin.com",
      "category": "Finance/Investing",
      "avg_month_visits": 6710891.82509383,
      "curr_month_visits": 6710891.82509383,
      "unique_users": 2490403.02398961,
      "pages_per_visit": 5.39028432433251
    },
    {
      "global_rank": 19579,
      "category_rank": 83,
      "domain": "mutualofomaha.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2301468.48729535,
      "curr_month_visits": 2301468.48729535,
      "unique_users": 1174072.64142922,
      "pages_per_visit": 5.91451704465369
    },
    {
      "global_rank": 7607,
      "category_rank": 83,
      "domain": "ogone.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 9704291.7706471,
      "curr_month_visits": 9704291.7706471,
      "unique_users": 6384055.26775629,
      "pages_per_visit": 2.36087842258376
    },
    {
      "global_rank": 42064,
      "category_rank": 84,
      "domain": "orlenpaczka.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1935452.36835978,
      "curr_month_visits": 1935452.36835978,
      "unique_users": 706167.277576222,
      "pages_per_visit": 2.23045909483605
    },
    {
      "global_rank": 20379,
      "category_rank": 84,
      "domain": "budgetdirect.com.au",
      "category": "Finance/Insurance",
      "avg_month_visits": 1686216.27719493,
      "curr_month_visits": 1686216.27719493,
      "unique_users": 896049.299520854,
      "pages_per_visit": 11.6666423469869
    },
    {
      "global_rank": 4825,
      "category_rank": 84,
      "domain": "cox.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 11294262.7038726,
      "curr_month_visits": 11294262.7038726,
      "unique_users": 4489684.3491452,
      "pages_per_visit": 5.55448014355957
    },
    {
      "global_rank": 7614,
      "category_rank": 84,
      "domain": "cybersource.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 8657792.27862265,
      "curr_month_visits": 8657792.27862265,
      "unique_users": 5765596.31569682,
      "pages_per_visit": 3.13469055320593
    },
    {
      "global_rank": 6199,
      "category_rank": 84,
      "domain": "dextools.io",
      "category": "Finance/Investing",
      "avg_month_visits": 7463538.00494312,
      "curr_month_visits": 7463538.00494312,
      "unique_users": 853541.45148256,
      "pages_per_visit": 8.99975893782344
    },
    {
      "global_rank": 6450,
      "category_rank": 84,
      "domain": "nexi.it",
      "category": "Finance/Finance",
      "avg_month_visits": 7671525.88370818,
      "curr_month_visits": 7671525.88370818,
      "unique_users": 4662151.77778538,
      "pages_per_visit": 5.30082897916718
    },
    {
      "global_rank": 6658,
      "category_rank": 85,
      "domain": "short.gy",
      "category": "Finance/Finance",
      "avg_month_visits": 19286274.5542885,
      "curr_month_visits": 19286274.5542885,
      "unique_users": 8596125.24262797,
      "pages_per_visit": 1.53270544083627
    },
    {
      "global_rank": 6315,
      "category_rank": 85,
      "domain": "tradingeconomics.com",
      "category": "Finance/Investing",
      "avg_month_visits": 13190072.1260643,
      "curr_month_visits": 13190072.1260643,
      "unique_users": 4894805.87111423,
      "pages_per_visit": 2.3083264038689
    },
    {
      "global_rank": 4859,
      "category_rank": 85,
      "domain": "bancosantander.es",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 11294601.9787893,
      "curr_month_visits": 11294601.9787893,
      "unique_users": 3106858.0778591,
      "pages_per_visit": 5.05392189680776
    },
    {
      "global_rank": 42363,
      "category_rank": 85,
      "domain": "turmob.org.tr",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1376773.56808754,
      "curr_month_visits": 1376773.56808754,
      "unique_users": 606748.361772241,
      "pages_per_visit": 2.92253223373709
    },
    {
      "global_rank": 7622,
      "category_rank": 85,
      "domain": "lightspeed.app",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 6014666.88991711,
      "curr_month_visits": 6014666.88991711,
      "unique_users": 321313.427072681,
      "pages_per_visit": 14.0870829191559
    },
    {
      "global_rank": 20743,
      "category_rank": 85,
      "domain": "foragentsonly.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2441341.58365787,
      "curr_month_visits": 2441341.58365787,
      "unique_users": 162233.896258767,
      "pages_per_visit": 12.8793205770939
    },
    {
      "global_rank": 42373,
      "category_rank": 86,
      "domain": "socpoist.sk",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 930724.903031323,
      "curr_month_visits": 930724.903031323,
      "unique_users": 397259.543401057,
      "pages_per_visit": 8.29225241690859
    },
    {
      "global_rank": 7635,
      "category_rank": 86,
      "domain": "psbank.ru",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 7097652.61586608,
      "curr_month_visits": 7097652.61586608,
      "unique_users": 2358334.23803673,
      "pages_per_visit": 5.01034047785068
    },
    {
      "global_rank": 20847,
      "category_rank": 86,
      "domain": "lh1ondemand.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2368457.75341229,
      "curr_month_visits": 2368457.75341229,
      "unique_users": 988234.052109626,
      "pages_per_visit": 5.72209861099584
    },
    {
      "global_rank": 6669,
      "category_rank": 86,
      "domain": "cmoney.tw",
      "category": "Finance/Finance",
      "avg_month_visits": 9796929.98129489,
      "curr_month_visits": 9796929.98129489,
      "unique_users": 1776260.41142515,
      "pages_per_visit": 4.35665929098423
    },
    {
      "global_rank": 6401,
      "category_rank": 86,
      "domain": "matsui.co.jp",
      "category": "Finance/Investing",
      "avg_month_visits": 8305234.69109053,
      "curr_month_visits": 8305234.69109053,
      "unique_users": 1112054.19185469,
      "pages_per_visit": 8.83386104694225
    },
    {
      "global_rank": 4899,
      "category_rank": 86,
      "domain": "anz.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 9024330.77997439,
      "curr_month_visits": 9024330.77997439,
      "unique_users": 1657845.79342877,
      "pages_per_visit": 8.40929058666881
    },
    {
      "global_rank": 6498,
      "category_rank": 87,
      "domain": "xt.com",
      "category": "Finance/Investing",
      "avg_month_visits": 8393618.10761127,
      "curr_month_visits": 8393618.10761127,
      "unique_users": 4502694.11751199,
      "pages_per_visit": 6.07635156649514
    },
    {
      "global_rank": 4935,
      "category_rank": 87,
      "domain": "kbstar.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 8469784.40406136,
      "curr_month_visits": 8469784.40406136,
      "unique_users": 2954589.20884552,
      "pages_per_visit": 8.70240963444977
    },
    {
      "global_rank": 6903,
      "category_rank": 87,
      "domain": "informalnewz.com",
      "category": "Finance/Finance",
      "avg_month_visits": 10384705.6671914,
      "curr_month_visits": 10384705.6671914,
      "unique_users": 6195192.02378364,
      "pages_per_visit": 1.71829907991423
    },
    {
      "global_rank": 42547,
      "category_rank": 87,
      "domain": "taxguru.in",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1854398.20305777,
      "curr_month_visits": 1854398.20305777,
      "unique_users": 904354.292295391,
      "pages_per_visit": 2.00599158972148
    },
    {
      "global_rank": 7744,
      "category_rank": 87,
      "domain": "nhis.or.kr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 5920582.6675562,
      "curr_month_visits": 5920582.6675562,
      "unique_users": 2466763.67668741,
      "pages_per_visit": 6.49931535380284
    },
    {
      "global_rank": 20973,
      "category_rank": 87,
      "domain": "allianz.fr",
      "category": "Finance/Insurance",
      "avg_month_visits": 2396127.0560633,
      "curr_month_visits": 2396127.0560633,
      "unique_users": 1406007.10743643,
      "pages_per_visit": 3.73644796917684
    },
    {
      "global_rank": 6991,
      "category_rank": 88,
      "domain": "santandernetibe.com.br",
      "category": "Finance/Finance",
      "avg_month_visits": 5836454.54214042,
      "curr_month_visits": 5836454.54214042,
      "unique_users": 603623.490981498,
      "pages_per_visit": 14.4885284803606
    },
    {
      "global_rank": 6651,
      "category_rank": 88,
      "domain": "ourbit.com",
      "category": "Finance/Investing",
      "avg_month_visits": 6210129.21301608,
      "curr_month_visits": 6210129.21301608,
      "unique_users": 3851208.0303665,
      "pages_per_visit": 7.77244462983951
    },
    {
      "global_rank": 43280,
      "category_rank": 88,
      "domain": "onvio.us",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1740484.90180096,
      "curr_month_visits": 1740484.90180096,
      "unique_users": 135294.895905977,
      "pages_per_visit": 6.43985432547775
    },
    {
      "global_rank": 5116,
      "category_rank": 88,
      "domain": "santander.cl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 11464591.3693229,
      "curr_month_visits": 11464591.3693229,
      "unique_users": 2979645.1323729,
      "pages_per_visit": 4.93066212136913
    },
    {
      "global_rank": 7868,
      "category_rank": 88,
      "domain": "banorte.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 6117691.1898072,
      "curr_month_visits": 6117691.1898072,
      "unique_users": 1713549.7810854,
      "pages_per_visit": 6.91597102511111
    },
    {
      "global_rank": 21645,
      "category_rank": 88,
      "domain": "lft.to",
      "category": "Finance/Insurance",
      "avg_month_visits": 3890487.05580455,
      "curr_month_visits": 3890487.05580455,
      "unique_users": 1756378.90157868,
      "pages_per_visit": 1.5400414562509
    },
    {
      "global_rank": 43705,
      "category_rank": 89,
      "domain": "dtek-krem.com.ua",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1411868.99853516,
      "curr_month_visits": 1411868.99853516,
      "unique_users": 325361.749381819,
      "pages_per_visit": 1.64767292368656
    },
    {
      "global_rank": 6683,
      "category_rank": 89,
      "domain": "plus500.com",
      "category": "Finance/Investing",
      "avg_month_visits": 9403477.11851256,
      "curr_month_visits": 9403477.11851256,
      "unique_users": 4288164.01108955,
      "pages_per_visit": 3.9467327447032
    },
    {
      "global_rank": 5141,
      "category_rank": 89,
      "domain": "ingbank.pl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 9200379.41725612,
      "curr_month_visits": 9200379.41725612,
      "unique_users": 1875786.49972967,
      "pages_per_visit": 6.73461020806295
    },
    {
      "global_rank": 7925,
      "category_rank": 89,
      "domain": "vanguardinvestor.co.uk",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 5565077.22387104,
      "curr_month_visits": 5565077.22387104,
      "unique_users": 1442121.8558407,
      "pages_per_visit": 7.24537695303951
    },
    {
      "global_rank": 7100,
      "category_rank": 89,
      "domain": "antfin.com",
      "category": "Finance/Finance",
      "avg_month_visits": 9018207.12579088,
      "curr_month_visits": 9018207.12579088,
      "unique_users": 855758.394769388,
      "pages_per_visit": 5.66402476411256
    },
    {
      "global_rank": 21810,
      "category_rank": 89,
      "domain": "prima.it",
      "category": "Finance/Insurance",
      "avg_month_visits": 2435507.24527793,
      "curr_month_visits": 2435507.24527793,
      "unique_users": 1003971.21592254,
      "pages_per_visit": 6.8754318180603
    },
    {
      "global_rank": 7113,
      "category_rank": 90,
      "domain": "kbcard.com",
      "category": "Finance/Finance",
      "avg_month_visits": 7568490.60585818,
      "curr_month_visits": 7568490.60585818,
      "unique_users": 3885712.73295674,
      "pages_per_visit": 4.51621194149785
    },
    {
      "global_rank": 6751,
      "category_rank": 90,
      "domain": "iqbroker.com",
      "category": "Finance/Investing",
      "avg_month_visits": 12616641.3688019,
      "curr_month_visits": 12616641.3688019,
      "unique_users": 6813307.42852665,
      "pages_per_visit": 1.50413675866062
    },
    {
      "global_rank": 43818,
      "category_rank": 90,
      "domain": "insight.gov.in",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1817054.27891738,
      "curr_month_visits": 1817054.27891738,
      "unique_users": 618294.41545887,
      "pages_per_visit": 3.87452300141778
    },
    {
      "global_rank": 21919,
      "category_rank": 90,
      "domain": "mgen.fr",
      "category": "Finance/Insurance",
      "avg_month_visits": 1990867.31214714,
      "curr_month_visits": 1990867.31214714,
      "unique_users": 916845.5348761,
      "pages_per_visit": 7.31507708487494
    },
    {
      "global_rank": 5232,
      "category_rank": 90,
      "domain": "clover.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 10996697.1310735,
      "curr_month_visits": 10996697.1310735,
      "unique_users": 4821507.09595683,
      "pages_per_visit": 5.06690798232309
    },
    {
      "global_rank": 8048,
      "category_rank": 90,
      "domain": "eposcard.co.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 7182303.623052,
      "curr_month_visits": 7182303.623052,
      "unique_users": 2584889.78250539,
      "pages_per_visit": 5.0709132730554
    },
    {
      "global_rank": 43883,
      "category_rank": 91,
      "domain": "taxact.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1150116.24706494,
      "curr_month_visits": 1150116.24706494,
      "unique_users": 645265.307231062,
      "pages_per_visit": 5.48545995592371
    },
    {
      "global_rank": 5247,
      "category_rank": 91,
      "domain": "bdo.com.ph",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 10238176.7412915,
      "curr_month_visits": 10238176.7412915,
      "unique_users": 3166093.78872952,
      "pages_per_visit": 5.24087489365404
    },
    {
      "global_rank": 21985,
      "category_rank": 91,
      "domain": "carecredit.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 4134145.7552918,
      "curr_month_visits": 4134145.7552918,
      "unique_users": 2726758.1696149,
      "pages_per_visit": 1.98287075922335
    },
    {
      "global_rank": 8186,
      "category_rank": 91,
      "domain": "hi.co.kr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4291708.22359019,
      "curr_month_visits": 4291708.22359019,
      "unique_users": 1617003.19591799,
      "pages_per_visit": 10.8083484867358
    },
    {
      "global_rank": 7200,
      "category_rank": 91,
      "domain": "claronegocie.com.br",
      "category": "Finance/Finance",
      "avg_month_visits": 14030849.0638466,
      "curr_month_visits": 14030849.0638466,
      "unique_users": 4582793.94530226,
      "pages_per_visit": 1.3180919977894
    },
    {
      "global_rank": 6894,
      "category_rank": 91,
      "domain": "borsaitaliana.it",
      "category": "Finance/Investing",
      "avg_month_visits": 11032975.6628928,
      "curr_month_visits": 11032975.6628928,
      "unique_users": 1149010.33075252,
      "pages_per_visit": 3.82821116563098
    },
    {
      "global_rank": 8230,
      "category_rank": 92,
      "domain": "nbg.gr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 5654825.83495528,
      "curr_month_visits": 5654825.83495528,
      "unique_users": 1160404.40348441,
      "pages_per_visit": 7.73673992281126
    },
    {
      "global_rank": 5292,
      "category_rank": 92,
      "domain": "isbank.com.tr",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 11797789.2017141,
      "curr_month_visits": 11797789.2017141,
      "unique_users": 5400998.31343653,
      "pages_per_visit": 3.79047325084562
    },
    {
      "global_rank": 7321,
      "category_rank": 92,
      "domain": "di.se",
      "category": "Finance/Finance",
      "avg_month_visits": 13477599.7002032,
      "curr_month_visits": 13477599.7002032,
      "unique_users": 1469330.49447949,
      "pages_per_visit": 2.64190864615506
    },
    {
      "global_rank": 44168,
      "category_rank": 92,
      "domain": "mjs.co.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 992359.834230401,
      "curr_month_visits": 992359.834230401,
      "unique_users": 300021.157879945,
      "pages_per_visit": 7.4659682630065
    },
    {
      "global_rank": 22367,
      "category_rank": 92,
      "domain": "ergo.de",
      "category": "Finance/Insurance",
      "avg_month_visits": 2193032.27102219,
      "curr_month_visits": 2193032.27102219,
      "unique_users": 1315662.01002927,
      "pages_per_visit": 4.4752287446782
    },
    {
      "global_rank": 6908,
      "category_rank": 92,
      "domain": "interactivebrokers.com",
      "category": "Finance/Investing",
      "avg_month_visits": 6954742.3824746,
      "curr_month_visits": 6954742.3824746,
      "unique_users": 2598874.33867626,
      "pages_per_visit": 5.25789253092535
    },
    {
      "global_rank": 45003,
      "category_rank": 93,
      "domain": "bayernportal.de",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1047894.19866447,
      "curr_month_visits": 1047894.19866447,
      "unique_users": 661742.597718705,
      "pages_per_visit": 4.72040464503135
    },
    {
      "global_rank": 7010,
      "category_rank": 93,
      "domain": "5paisa.com",
      "category": "Finance/Investing",
      "avg_month_visits": 8450900.62177902,
      "curr_month_visits": 8450900.62177902,
      "unique_users": 4506098.24520044,
      "pages_per_visit": 4.64137674502427
    },
    {
      "global_rank": 7355,
      "category_rank": 93,
      "domain": "mercadopago.com.mx",
      "category": "Finance/Finance",
      "avg_month_visits": 6773534.66661809,
      "curr_month_visits": 6773534.66661809,
      "unique_users": 3515672.31430111,
      "pages_per_visit": 4.08555101680668
    },
    {
      "global_rank": 22562,
      "category_rank": 93,
      "domain": "newindia.co.in",
      "category": "Finance/Insurance",
      "avg_month_visits": 2088577.31309856,
      "curr_month_visits": 2088577.31309856,
      "unique_users": 680053.657626878,
      "pages_per_visit": 8.08622987925668
    },
    {
      "global_rank": 5354,
      "category_rank": 93,
      "domain": "53.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 8895215.86017081,
      "curr_month_visits": 8895215.86017081,
      "unique_users": 1719124.55420572,
      "pages_per_visit": 6.6965799479004
    },
    {
      "global_rank": 8346,
      "category_rank": 93,
      "domain": "cic.fr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 5177323.71181011,
      "curr_month_visits": 5177323.71181011,
      "unique_users": 1229875.78213977,
      "pages_per_visit": 8.32560443538794
    },
    {
      "global_rank": 8405,
      "category_rank": 94,
      "domain": "provincial.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 5014714.9690814,
      "curr_month_visits": 5014714.9690814,
      "unique_users": 983806.15320299,
      "pages_per_visit": 8.26708914044862
    },
    {
      "global_rank": 7014,
      "category_rank": 94,
      "domain": "orangex.com",
      "category": "Finance/Investing",
      "avg_month_visits": 6373788.18409387,
      "curr_month_visits": 6373788.18409387,
      "unique_users": 3649969.77655875,
      "pages_per_visit": 8.44200555736275
    },
    {
      "global_rank": 7382,
      "category_rank": 94,
      "domain": "beehiiv.com",
      "category": "Finance/Finance",
      "avg_month_visits": 9899281.89128202,
      "curr_month_visits": 9899281.89128202,
      "unique_users": 4554771.75343738,
      "pages_per_visit": 3.14025099405526
    },
    {
      "global_rank": 45888,
      "category_rank": 94,
      "domain": "hrylabour.gov.in",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 610993.896807304,
      "curr_month_visits": 610993.896807304,
      "unique_users": 113519.456390873,
      "pages_per_visit": 22.6131625095356
    },
    {
      "global_rank": 23021,
      "category_rank": 94,
      "domain": "cajalosandes.cl",
      "category": "Finance/Insurance",
      "avg_month_visits": 2062852.56201565,
      "curr_month_visits": 2062852.56201565,
      "unique_users": 779434.70797777,
      "pages_per_visit": 7.25156046883139
    },
    {
      "global_rank": 5425,
      "category_rank": 94,
      "domain": "commerzbank.de",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 8892656.58916721,
      "curr_month_visits": 8892656.58916721,
      "unique_users": 2409067.91799185,
      "pages_per_visit": 7.00781652432774
    },
    {
      "global_rank": 7102,
      "category_rank": 95,
      "domain": "canlidoviz.com",
      "category": "Finance/Investing",
      "avg_month_visits": 16503466.7083886,
      "curr_month_visits": 16503466.7083886,
      "unique_users": 1251227.28951886,
      "pages_per_visit": 2.09542248631217
    },
    {
      "global_rank": 23097,
      "category_rank": 95,
      "domain": "nestpensions.org.uk",
      "category": "Finance/Insurance",
      "avg_month_visits": 1804089.83557957,
      "curr_month_visits": 1804089.83557957,
      "unique_users": 873240.862551865,
      "pages_per_visit": 8.55123935812525
    },
    {
      "global_rank": 46278,
      "category_rank": 95,
      "domain": "kansaimiraibank.co.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 759005.054740732,
      "curr_month_visits": 759005.054740732,
      "unique_users": 234181.913661887,
      "pages_per_visit": 11.249003660709
    },
    {
      "global_rank": 5432,
      "category_rank": 95,
      "domain": "regions.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 9287676.27030034,
      "curr_month_visits": 9287676.27030034,
      "unique_users": 1653470.17870588,
      "pages_per_visit": 6.29605735824593
    },
    {
      "global_rank": 7393,
      "category_rank": 95,
      "domain": "empower-retirement.com",
      "category": "Finance/Finance",
      "avg_month_visits": 5428186.11219341,
      "curr_month_visits": 5428186.11219341,
      "unique_users": 1970064.64714319,
      "pages_per_visit": 7.24958474016654
    },
    {
      "global_rank": 8422,
      "category_rank": 95,
      "domain": "saashr.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 6780757.37198815,
      "curr_month_visits": 6780757.37198815,
      "unique_users": 1214338.75723057,
      "pages_per_visit": 6.70659970941571
    },
    {
      "global_rank": 23365,
      "category_rank": 96,
      "domain": "safeco.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2044617.02102785,
      "curr_month_visits": 2044617.02102785,
      "unique_users": 869596.057537176,
      "pages_per_visit": 7.89981384933424
    },
    {
      "global_rank": 8450,
      "category_rank": 96,
      "domain": "cgd.pt",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4931983.59939795,
      "curr_month_visits": 4931983.59939795,
      "unique_users": 1258325.56506201,
      "pages_per_visit": 9.41451945324761
    },
    {
      "global_rank": 46643,
      "category_rank": 96,
      "domain": "netvisor.fi",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 516299.462544861,
      "curr_month_visits": 516299.462544861,
      "unique_users": 68203.4716664566,
      "pages_per_visit": 25.9903067482183
    },
    {
      "global_rank": 7166,
      "category_rank": 96,
      "domain": "cnyes.com",
      "category": "Finance/Investing",
      "avg_month_visits": 13751754.0607108,
      "curr_month_visits": 13751754.0607108,
      "unique_users": 2871933.85834158,
      "pages_per_visit": 2.13041954566328
    },
    {
      "global_rank": 5436,
      "category_rank": 96,
      "domain": "huntington.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 8630972.13221412,
      "curr_month_visits": 8630972.13221412,
      "unique_users": 1942988.87298278,
      "pages_per_visit": 6.83536498219226
    },
    {
      "global_rank": 7548,
      "category_rank": 96,
      "domain": "digifinex.com",
      "category": "Finance/Finance",
      "avg_month_visits": 13984250.4427853,
      "curr_month_visits": 13984250.4427853,
      "unique_users": 6821970.59578675,
      "pages_per_visit": 1.6694890945252
    },
    {
      "global_rank": 5459,
      "category_rank": 97,
      "domain": "sbicard.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 11097217.6365757,
      "curr_month_visits": 11097217.6365757,
      "unique_users": 4513990.5369503,
      "pages_per_visit": 4.14159031863105
    },
    {
      "global_rank": 8753,
      "category_rank": 97,
      "domain": "nederlandseloterij.nl",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 7006934.68990342,
      "curr_month_visits": 7006934.68990342,
      "unique_users": 1908974.66860003,
      "pages_per_visit": 4.66943606896736
    },
    {
      "global_rank": 7566,
      "category_rank": 97,
      "domain": "wealthsimple.com",
      "category": "Finance/Finance",
      "avg_month_visits": 5692780.48033715,
      "curr_month_visits": 5692780.48033715,
      "unique_users": 2294748.48860835,
      "pages_per_visit": 5.28858722641778
    },
    {
      "global_rank": 23569,
      "category_rank": 97,
      "domain": "everquote.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2631449.1912395,
      "curr_month_visits": 2631449.1912395,
      "unique_users": 1846265.68663409,
      "pages_per_visit": 3.58072348674986
    },
    {
      "global_rank": 46687,
      "category_rank": 97,
      "domain": "gaodun.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1221654.32056975,
      "curr_month_visits": 1221654.32056975,
      "unique_users": 551188.296069255,
      "pages_per_visit": 3.26142645660354
    },
    {
      "global_rank": 7177,
      "category_rank": 97,
      "domain": "gradient.network",
      "category": "Finance/Investing",
      "avg_month_visits": 5398004.65837864,
      "curr_month_visits": 5398004.65837864,
      "unique_users": 569434.170210691,
      "pages_per_visit": 3.9342476650312
    },
    {
      "global_rank": 7701,
      "category_rank": 98,
      "domain": "healthequity.com",
      "category": "Finance/Finance",
      "avg_month_visits": 4549809.94596772,
      "curr_month_visits": 4549809.94596772,
      "unique_users": 2234728.78221391,
      "pages_per_visit": 10.3004959227138
    },
    {
      "global_rank": 5537,
      "category_rank": 98,
      "domain": "bbvanet.com.mx",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 6972045.55156993,
      "curr_month_visits": 6972045.55156993,
      "unique_users": 1199852.01006793,
      "pages_per_visit": 11.3996365203501
    },
    {
      "global_rank": 23645,
      "category_rank": 98,
      "domain": "bcbsfl.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1561244.85083912,
      "curr_month_visits": 1561244.85083912,
      "unique_users": 645961.747624687,
      "pages_per_visit": 9.28089002741707
    },
    {
      "global_rank": 8780,
      "category_rank": 98,
      "domain": "iess.gob.ec",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 6304117.982003,
      "curr_month_visits": 6304117.982003,
      "unique_users": 1631886.19927423,
      "pages_per_visit": 6.37081378304983
    },
    {
      "global_rank": 47100,
      "category_rank": 98,
      "domain": "taxmanagementindia.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1121482.62219509,
      "curr_month_visits": 1121482.62219509,
      "unique_users": 262886.453252604,
      "pages_per_visit": 5.8929684100944
    },
    {
      "global_rank": 7296,
      "category_rank": 98,
      "domain": "kauppalehti.fi",
      "category": "Finance/Investing",
      "avg_month_visits": 10760192.4984833,
      "curr_month_visits": 10760192.4984833,
      "unique_users": 2166247.91505926,
      "pages_per_visit": 2.86629255332821
    },
    {
      "global_rank": 7709,
      "category_rank": 99,
      "domain": "saipos.com",
      "category": "Finance/Finance",
      "avg_month_visits": 4914337.93697159,
      "curr_month_visits": 4914337.93697159,
      "unique_users": 1040512.67130829,
      "pages_per_visit": 12.5691474015969
    },
    {
      "global_rank": 5580,
      "category_rank": 99,
      "domain": "mepsfpx.com.my",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 10879906.7836871,
      "curr_month_visits": 10879906.7836871,
      "unique_users": 5683831.98234916,
      "pages_per_visit": 3.67472410830604
    },
    {
      "global_rank": 8813,
      "category_rank": 99,
      "domain": "resonabank.co.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4982649.70531515,
      "curr_month_visits": 4982649.70531515,
      "unique_users": 2061900.38131371,
      "pages_per_visit": 8.47432925286732
    },
    {
      "global_rank": 23661,
      "category_rank": 99,
      "domain": "airtalkwireless.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2279879.00262441,
      "curr_month_visits": 2279879.00262441,
      "unique_users": 930790.653557292,
      "pages_per_visit": 5.19348491163987
    },
    {
      "global_rank": 47798,
      "category_rank": 99,
      "domain": "a-saas.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 837005.554374263,
      "curr_month_visits": 837005.554374263,
      "unique_users": 76959.0058695965,
      "pages_per_visit": 11.9904587925241
    },
    {
      "global_rank": 7553,
      "category_rank": 99,
      "domain": "nguoiquansat.vn",
      "category": "Finance/Investing",
      "avg_month_visits": 18595735.8571202,
      "curr_month_visits": 18595735.8571202,
      "unique_users": 3868457.45972414,
      "pages_per_visit": 1.56364812352628
    },
    {
      "global_rank": 23664,
      "category_rank": 100,
      "domain": "usaassistanceguide.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1847318.48235119,
      "curr_month_visits": 1847318.48235119,
      "unique_users": 1113926.64868207,
      "pages_per_visit": 5.84550736143814
    },
    {
      "global_rank": 5584,
      "category_rank": 100,
      "domain": "online-banking-services.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 10847391.2341518,
      "curr_month_visits": 10847391.2341518,
      "unique_users": 1835810.7752524,
      "pages_per_visit": 4.64648005331022
    },
    {
      "global_rank": 7615,
      "category_rank": 100,
      "domain": "kinhteluatvcu.edu.vn",
      "category": "Finance/Investing",
      "avg_month_visits": 6280535.15858277,
      "curr_month_visits": 6280535.15858277,
      "unique_users": 1348001.946353,
      "pages_per_visit": 2.03426604261941
    },
    {
      "global_rank": 48339,
      "category_rank": 100,
      "domain": "icsi.edu",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1087829.29778914,
      "curr_month_visits": 1087829.29778914,
      "unique_users": 382997.382507146,
      "pages_per_visit": 5.50880708575097
    },
    {
      "global_rank": 7790,
      "category_rank": 100,
      "domain": "bmcnews.com.br",
      "category": "Finance/Finance",
      "avg_month_visits": 8965164.80104136,
      "curr_month_visits": 8965164.80104136,
      "unique_users": 5747984.24126041,
      "pages_per_visit": 1.10055382889692
    },
    {
      "global_rank": 8862,
      "category_rank": 100,
      "domain": "bancodevenezuela.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 11373063.8868383,
      "curr_month_visits": 11373063.8868383,
      "unique_users": 1568488.03110096,
      "pages_per_visit": 1.81645348940223
    },
    {
      "global_rank": 5642,
      "category_rank": 101,
      "domain": "wooribank.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 9130490.2531424,
      "curr_month_visits": 9130490.2531424,
      "unique_users": 3302360.71202112,
      "pages_per_visit": 6.19052056014262
    },
    {
      "global_rank": 8865,
      "category_rank": 101,
      "domain": "shinkin-ib.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 5092577.80169594,
      "curr_month_visits": 5092577.80169594,
      "unique_users": 936323.519699968,
      "pages_per_visit": 9.23142959539863
    },
    {
      "global_rank": 7633,
      "category_rank": 101,
      "domain": "smbcnikko.co.jp",
      "category": "Finance/Investing",
      "avg_month_visits": 6394166.60304963,
      "curr_month_visits": 6394166.60304963,
      "unique_users": 1372691.56373379,
      "pages_per_visit": 9.18795910082609
    },
    {
      "global_rank": 23815,
      "category_rank": 101,
      "domain": "lwcx.in",
      "category": "Finance/Insurance",
      "avg_month_visits": 2111621.0628517,
      "curr_month_visits": 2111621.0628517,
      "unique_users": 1108771.12913605,
      "pages_per_visit": 2.33571068075931
    },
    {
      "global_rank": 7835,
      "category_rank": 101,
      "domain": "visma.com",
      "category": "Finance/Finance",
      "avg_month_visits": 7737264.93961563,
      "curr_month_visits": 7737264.93961563,
      "unique_users": 1861083.7955114,
      "pages_per_visit": 4.33398588480555
    },
    {
      "global_rank": 49276,
      "category_rank": 101,
      "domain": "pwc.in",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 604142.461678057,
      "curr_month_visits": 604142.461678057,
      "unique_users": 291978.277292973,
      "pages_per_visit": 7.20077704683037
    },
    {
      "global_rank": 5670,
      "category_rank": 102,
      "domain": "dnb.no",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 8065193.15206513,
      "curr_month_visits": 8065193.15206513,
      "unique_users": 1958780.6127041,
      "pages_per_visit": 7.50455618603689
    },
    {
      "global_rank": 8871,
      "category_rank": 102,
      "domain": "redlink.com.ar",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 7566858.81536425,
      "curr_month_visits": 7566858.81536425,
      "unique_users": 1679352.22188306,
      "pages_per_visit": 3.66711804242066
    },
    {
      "global_rank": 24182,
      "category_rank": 102,
      "domain": "lemonade.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2103709.33297987,
      "curr_month_visits": 2103709.33297987,
      "unique_users": 1418935.6229728,
      "pages_per_visit": 5.72325417976828
    },
    {
      "global_rank": 7654,
      "category_rank": 102,
      "domain": "questrade.com",
      "category": "Finance/Investing",
      "avg_month_visits": 4016252.27579452,
      "curr_month_visits": 4016252.27579452,
      "unique_users": 968405.266515942,
      "pages_per_visit": 13.5503210517838
    },
    {
      "global_rank": 8031,
      "category_rank": 102,
      "domain": "snapmint.com",
      "category": "Finance/Finance",
      "avg_month_visits": 2208172.17743057,
      "curr_month_visits": 2208172.17743057,
      "unique_users": 1083732.13828313,
      "pages_per_visit": 37.6396485027162
    },
    {
      "global_rank": 49565,
      "category_rank": 102,
      "domain": "datev.it",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 747230.564189854,
      "curr_month_visits": 747230.564189854,
      "unique_users": 77184.9338298078,
      "pages_per_visit": 11.1800926984086
    },
    {
      "global_rank": 7711,
      "category_rank": 103,
      "domain": "investors.com",
      "category": "Finance/Investing",
      "avg_month_visits": 9021011.62123214,
      "curr_month_visits": 9021011.62123214,
      "unique_users": 3820047.86056275,
      "pages_per_visit": 2.26316696824029
    },
    {
      "global_rank": 8884,
      "category_rank": 103,
      "domain": "buckaroo.nl",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 8703499.00956703,
      "curr_month_visits": 8703499.00956703,
      "unique_users": 4786736.83092284,
      "pages_per_visit": 2.11735679238808
    },
    {
      "global_rank": 24231,
      "category_rank": 103,
      "domain": "lincolnfinancial.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1865943.3672201,
      "curr_month_visits": 1865943.3672201,
      "unique_users": 646968.359375153,
      "pages_per_visit": 7.31892855237106
    },
    {
      "global_rank": 8073,
      "category_rank": 103,
      "domain": "parentpay.com",
      "category": "Finance/Finance",
      "avg_month_visits": 6305941.4180843,
      "curr_month_visits": 6305941.4180843,
      "unique_users": 1567646.20429416,
      "pages_per_visit": 6.58466686268466
    },
    {
      "global_rank": 5681,
      "category_rank": 103,
      "domain": "intesasanpaolo.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 8840749.22004347,
      "curr_month_visits": 8840749.22004347,
      "unique_users": 2960913.30060124,
      "pages_per_visit": 5.96725320707749
    },
    {
      "global_rank": 50070,
      "category_rank": 103,
      "domain": "starpay.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1774239.71611585,
      "curr_month_visits": 1774239.71611585,
      "unique_users": 774998.964347535,
      "pages_per_visit": 2.03460750739735
    },
    {
      "global_rank": 24253,
      "category_rank": 104,
      "domain": "ipipeline.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1537537.37909328,
      "curr_month_visits": 1537537.37909328,
      "unique_users": 383384.917360863,
      "pages_per_visit": 13.5499858709827
    },
    {
      "global_rank": 5695,
      "category_rank": 104,
      "domain": "banco.bradesco",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 13928795.5166903,
      "curr_month_visits": 13928795.5166903,
      "unique_users": 5097679.54126486,
      "pages_per_visit": 1.91261933814574
    },
    {
      "global_rank": 8892,
      "category_rank": 104,
      "domain": "paycor.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 5885542.31136156,
      "curr_month_visits": 5885542.31136156,
      "unique_users": 1153936.08492488,
      "pages_per_visit": 6.90927043025839
    },
    {
      "global_rank": 8141,
      "category_rank": 104,
      "domain": "datatrans.com",
      "category": "Finance/Finance",
      "avg_month_visits": 6900760.99345248,
      "curr_month_visits": 6900760.99345248,
      "unique_users": 4276466.37252779,
      "pages_per_visit": 3.98955953351606
    },
    {
      "global_rank": 51473,
      "category_rank": 104,
      "domain": "tome.app",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1163552.99113763,
      "curr_month_visits": 1163552.99113763,
      "unique_users": 673560.544223332,
      "pages_per_visit": 3.58189118083657
    },
    {
      "global_rank": 7728,
      "category_rank": 104,
      "domain": "barrons.com",
      "category": "Finance/Investing",
      "avg_month_visits": 9282215.176043,
      "curr_month_visits": 9282215.176043,
      "unique_users": 5165239.32689183,
      "pages_per_visit": 1.96454857844354
    },
    {
      "global_rank": 7746,
      "category_rank": 105,
      "domain": "barchart.com",
      "category": "Finance/Investing",
      "avg_month_visits": 7438287.16860666,
      "curr_month_visits": 7438287.16860666,
      "unique_users": 1784856.91213424,
      "pages_per_visit": 5.62414137248765
    },
    {
      "global_rank": 53226,
      "category_rank": 105,
      "domain": "piramalfinance.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1036183.38530721,
      "curr_month_visits": 1036183.38530721,
      "unique_users": 554564.258018049,
      "pages_per_visit": 3.55678469312816
    },
    {
      "global_rank": 8164,
      "category_rank": 105,
      "domain": "bv.com.br",
      "category": "Finance/Finance",
      "avg_month_visits": 7633492.16869108,
      "curr_month_visits": 7633492.16869108,
      "unique_users": 3041847.56789748,
      "pages_per_visit": 4.67652181853209
    },
    {
      "global_rank": 8967,
      "category_rank": 105,
      "domain": "dgt.gob.es",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 6242415.92235183,
      "curr_month_visits": 6242415.92235183,
      "unique_users": 2659603.59720361,
      "pages_per_visit": 5.79995583001287
    },
    {
      "global_rank": 5773,
      "category_rank": 105,
      "domain": "poczta.home.pl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 6976452.94116715,
      "curr_month_visits": 6976452.94116715,
      "unique_users": 380731.886783131,
      "pages_per_visit": 19.461341181697
    },
    {
      "global_rank": 24752,
      "category_rank": 105,
      "domain": "bcbsil.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1819797.53133029,
      "curr_month_visits": 1819797.53133029,
      "unique_users": 854397.913234646,
      "pages_per_visit": 5.42081126095186
    },
    {
      "global_rank": 8173,
      "category_rank": 106,
      "domain": "acordocerto.com.br",
      "category": "Finance/Finance",
      "avg_month_visits": 9133229.42247151,
      "curr_month_visits": 9133229.42247151,
      "unique_users": 5226428.9636473,
      "pages_per_visit": 2.96802857963453
    },
    {
      "global_rank": 53252,
      "category_rank": 106,
      "domain": "icap.org.pk",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 796762.891858766,
      "curr_month_visits": 796762.891858766,
      "unique_users": 254200.691997204,
      "pages_per_visit": 5.96992960835084
    },
    {
      "global_rank": 24768,
      "category_rank": 106,
      "domain": "ergohestia.pl",
      "category": "Finance/Insurance",
      "avg_month_visits": 1672613.85360801,
      "curr_month_visits": 1672613.85360801,
      "unique_users": 389804.120892149,
      "pages_per_visit": 12.5987752655338
    },
    {
      "global_rank": 7755,
      "category_rank": 106,
      "domain": "zeebiz.com",
      "category": "Finance/Investing",
      "avg_month_visits": 12370437.4912052,
      "curr_month_visits": 12370437.4912052,
      "unique_users": 6403505.98471894,
      "pages_per_visit": 1.85936928732452
    },
    {
      "global_rank": 8986,
      "category_rank": 106,
      "domain": "seniat.gob.ve",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 5242547.4332003,
      "curr_month_visits": 5242547.4332003,
      "unique_users": 1135022.96477089,
      "pages_per_visit": 9.8454833263588
    },
    {
      "global_rank": 5774,
      "category_rank": 106,
      "domain": "finecobank.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 6732063.07646956,
      "curr_month_visits": 6732063.07646956,
      "unique_users": 962279.346835568,
      "pages_per_visit": 11.5874827685003
    },
    {
      "global_rank": 8307,
      "category_rank": 107,
      "domain": "infinitepay.io",
      "category": "Finance/Finance",
      "avg_month_visits": 10327905.8356597,
      "curr_month_visits": 10327905.8356597,
      "unique_users": 4994650.10869772,
      "pages_per_visit": 1.85921339549224
    },
    {
      "global_rank": 7842,
      "category_rank": 107,
      "domain": "taoguba.com.cn",
      "category": "Finance/Investing",
      "avg_month_visits": 4500629.09888578,
      "curr_month_visits": 4500629.09888578,
      "unique_users": 376932.247655417,
      "pages_per_visit": 18.9367396476406
    },
    {
      "global_rank": 53451,
      "category_rank": 107,
      "domain": "sensebank.com.ua",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1455285.63177621,
      "curr_month_visits": 1455285.63177621,
      "unique_users": 409566.612662248,
      "pages_per_visit": 2.29845547460291
    },
    {
      "global_rank": 9019,
      "category_rank": 107,
      "domain": "bbva.mx",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 8591177.68118244,
      "curr_month_visits": 8591177.68118244,
      "unique_users": 3016187.60812544,
      "pages_per_visit": 2.75843832607955
    },
    {
      "global_rank": 25172,
      "category_rank": 107,
      "domain": "bajajallianz.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2290177.94002927,
      "curr_month_visits": 2290177.94002927,
      "unique_users": 1072203.26859677,
      "pages_per_visit": 4.58444955376521
    },
    {
      "global_rank": 5791,
      "category_rank": 107,
      "domain": "ibanking-services.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 7349470.19932523,
      "curr_month_visits": 7349470.19932523,
      "unique_users": 1356635.13186769,
      "pages_per_visit": 8.91941982688567
    },
    {
      "global_rank": 5842,
      "category_rank": 108,
      "domain": "paymentus.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 9540417.26916806,
      "curr_month_visits": 9540417.26916806,
      "unique_users": 6356893.24335631,
      "pages_per_visit": 4.36482392335357
    },
    {
      "global_rank": 53732,
      "category_rank": 108,
      "domain": "credilio.in",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1433026.62809679,
      "curr_month_visits": 1433026.62809679,
      "unique_users": 973288.462325538,
      "pages_per_visit": 2.48363218001371
    },
    {
      "global_rank": 25394,
      "category_rank": 108,
      "domain": "fsastore.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1580036.10741626,
      "curr_month_visits": 1580036.10741626,
      "unique_users": 835040.568382788,
      "pages_per_visit": 5.03484602020553
    },
    {
      "global_rank": 7891,
      "category_rank": 108,
      "domain": "toobit.com",
      "category": "Finance/Investing",
      "avg_month_visits": 6198686.96775878,
      "curr_month_visits": 6198686.96775878,
      "unique_users": 3710712.71296315,
      "pages_per_visit": 5.76130689851594
    },
    {
      "global_rank": 8310,
      "category_rank": 108,
      "domain": "ton.com.br",
      "category": "Finance/Finance",
      "avg_month_visits": 13113264.8760296,
      "curr_month_visits": 13113264.8760296,
      "unique_users": 5603029.71701146,
      "pages_per_visit": 1.4327161511604
    },
    {
      "global_rank": 9081,
      "category_rank": 108,
      "domain": "servipag.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 5466550.81977893,
      "curr_month_visits": 5466550.81977893,
      "unique_users": 2581099.17858207,
      "pages_per_visit": 5.87753332131119
    },
    {
      "global_rank": 7960,
      "category_rank": 109,
      "domain": "xtb.com",
      "category": "Finance/Investing",
      "avg_month_visits": 6703113.36697933,
      "curr_month_visits": 6703113.36697933,
      "unique_users": 1455806.80684194,
      "pages_per_visit": 6.00012480516809
    },
    {
      "global_rank": 5872,
      "category_rank": 109,
      "domain": "mirconnect.ru",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 8498110.08353188,
      "curr_month_visits": 8498110.08353188,
      "unique_users": 4596534.73631472,
      "pages_per_visit": 5.31107374987407
    },
    {
      "global_rank": 25397,
      "category_rank": 109,
      "domain": "icbc.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1897609.8695303,
      "curr_month_visits": 1897609.8695303,
      "unique_users": 823060.492189137,
      "pages_per_visit": 7.16833002973784
    },
    {
      "global_rank": 53858,
      "category_rank": 109,
      "domain": "cpacanada.ca",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 903289.217316648,
      "curr_month_visits": 903289.217316648,
      "unique_users": 253803.810142119,
      "pages_per_visit": 5.53853575479893
    },
    {
      "global_rank": 8324,
      "category_rank": 109,
      "domain": "forbes.ru",
      "category": "Finance/Finance",
      "avg_month_visits": 10311557.7510912,
      "curr_month_visits": 10311557.7510912,
      "unique_users": 5854034.42241599,
      "pages_per_visit": 1.8196988987163
    },
    {
      "global_rank": 9236,
      "category_rank": 109,
      "domain": "madrid.es",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 5798501.68385853,
      "curr_month_visits": 5798501.68385853,
      "unique_users": 2582574.07292314,
      "pages_per_visit": 5.52471095082634
    },
    {
      "global_rank": 2156,
      "category_rank": 109,
      "domain": "okx.com",
      "category": "Finance",
      "avg_month_visits": 21285582.7054614,
      "curr_month_visits": 21285582.7054614,
      "unique_users": 9698954.24175702,
      "pages_per_visit": 4.62046365456593
    },
    {
      "global_rank": 25449,
      "category_rank": 110,
      "domain": "gohealth.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1992037.59212101,
      "curr_month_visits": 1992037.59212101,
      "unique_users": 901688.858968515,
      "pages_per_visit": 2.61698560927114
    },
    {
      "global_rank": 54034,
      "category_rank": 110,
      "domain": "gleim.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 538626.030760032,
      "curr_month_visits": 538626.030760032,
      "unique_users": 121765.255547004,
      "pages_per_visit": 15.4932200333303
    },
    {
      "global_rank": 9587,
      "category_rank": 110,
      "domain": "tkc.co.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4072244.16330593,
      "curr_month_visits": 4072244.16330593,
      "unique_users": 203698.065760958,
      "pages_per_visit": 19.5742949119372
    },
    {
      "global_rank": 7997,
      "category_rank": 110,
      "domain": "tipranks.com",
      "category": "Finance/Investing",
      "avg_month_visits": 7825263.23418222,
      "curr_month_visits": 7825263.23418222,
      "unique_users": 3831548.18946374,
      "pages_per_visit": 2.48511207529809
    },
    {
      "global_rank": 5913,
      "category_rank": 110,
      "domain": "hsbc.co.uk",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 8210836.36442503,
      "curr_month_visits": 8210836.36442503,
      "unique_users": 3201994.1333805,
      "pages_per_visit": 6.90506614509624
    },
    {
      "global_rank": 8370,
      "category_rank": 110,
      "domain": "nordea.fi",
      "category": "Finance/Finance",
      "avg_month_visits": 5038392.54363342,
      "curr_month_visits": 5038392.54363342,
      "unique_users": 1383038.20894463,
      "pages_per_visit": 9.04435199605562
    },
    {
      "global_rank": 9629,
      "category_rank": 111,
      "domain": "pzu.pl",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4083225.39116022,
      "curr_month_visits": 4083225.39116022,
      "unique_users": 1258749.37784322,
      "pages_per_visit": 12.8928575238133
    },
    {
      "global_rank": 6026,
      "category_rank": 111,
      "domain": "fnb.co.za",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 9891355.14173239,
      "curr_month_visits": 9891355.14173239,
      "unique_users": 1982816.82335188,
      "pages_per_visit": 5.02504251558942
    },
    {
      "global_rank": 25658,
      "category_rank": 111,
      "domain": "quotewizard.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2543376.01421971,
      "curr_month_visits": 2543376.01421971,
      "unique_users": 1154031.25052611,
      "pages_per_visit": 2.72093087102374
    },
    {
      "global_rank": 55249,
      "category_rank": 111,
      "domain": "uradprace.cz",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1108371.92598206,
      "curr_month_visits": 1108371.92598206,
      "unique_users": 496400.965274107,
      "pages_per_visit": 3.52707122372335
    },
    {
      "global_rank": 8445,
      "category_rank": 111,
      "domain": "therapservices.net",
      "category": "Finance/Finance",
      "avg_month_visits": 4210441.38633324,
      "curr_month_visits": 4210441.38633324,
      "unique_users": 219283.37464941,
      "pages_per_visit": 21.7321975267427
    },
    {
      "global_rank": 8000,
      "category_rank": 111,
      "domain": "etherscan.io",
      "category": "Finance/Investing",
      "avg_month_visits": 6904548.93399954,
      "curr_month_visits": 6904548.93399954,
      "unique_users": 1788673.02488608,
      "pages_per_visit": 5.27062470562633
    },
    {
      "global_rank": 55637,
      "category_rank": 112,
      "domain": "brightsg.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 722029.936640991,
      "curr_month_visits": 722029.936640991,
      "unique_users": 132187.961145446,
      "pages_per_visit": 11.2089451670956
    },
    {
      "global_rank": 8606,
      "category_rank": 112,
      "domain": "coinpan.com",
      "category": "Finance/Finance",
      "avg_month_visits": 5038561.06242898,
      "curr_month_visits": 5038561.06242898,
      "unique_users": 603427.978008217,
      "pages_per_visit": 7.86303753859955
    },
    {
      "global_rank": 26763,
      "category_rank": 112,
      "domain": "harel-group.co.il",
      "category": "Finance/Insurance",
      "avg_month_visits": 1772347.33984015,
      "curr_month_visits": 1772347.33984015,
      "unique_users": 718657.586387425,
      "pages_per_visit": 5.16907179940933
    },
    {
      "global_rank": 9692,
      "category_rank": 112,
      "domain": "samsungcard.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 6222493.13741303,
      "curr_month_visits": 6222493.13741303,
      "unique_users": 2615823.13742137,
      "pages_per_visit": 3.74886282807156
    },
    {
      "global_rank": 6065,
      "category_rank": 112,
      "domain": "bwanet.ca",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 18159121.6397281,
      "curr_month_visits": 18159121.6397281,
      "unique_users": 1725911.25395009,
      "pages_per_visit": 2.01989735960918
    },
    {
      "global_rank": 8115,
      "category_rank": 112,
      "domain": "fameex.com",
      "category": "Finance/Investing",
      "avg_month_visits": 5263138.73054822,
      "curr_month_visits": 5263138.73054822,
      "unique_users": 3151781.32192857,
      "pages_per_visit": 6.30406737628075
    },
    {
      "global_rank": 6194,
      "category_rank": 113,
      "domain": "hasil.gov.my",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 5492130.20929291,
      "curr_month_visits": 5492130.20929291,
      "unique_users": 1980768.39495267,
      "pages_per_visit": 8.65296943451089
    },
    {
      "global_rank": 9794,
      "category_rank": 113,
      "domain": "pluxee.app",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 7910245.22517613,
      "curr_month_visits": 7910245.22517613,
      "unique_users": 4037861.76166798,
      "pages_per_visit": 2.43630216967879
    },
    {
      "global_rank": 8188,
      "category_rank": 113,
      "domain": "bingx.com",
      "category": "Finance/Investing",
      "avg_month_visits": 5179755.33066208,
      "curr_month_visits": 5179755.33066208,
      "unique_users": 1505174.87032638,
      "pages_per_visit": 9.98576090986992
    },
    {
      "global_rank": 56563,
      "category_rank": 113,
      "domain": "charteredaccountantsanz.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 578555.934227505,
      "curr_month_visits": 578555.934227505,
      "unique_users": 133885.714365728,
      "pages_per_visit": 8.59969436877489
    },
    {
      "global_rank": 26923,
      "category_rank": 113,
      "domain": "bajajmall.in",
      "category": "Finance/Insurance",
      "avg_month_visits": 3118986.77934868,
      "curr_month_visits": 3118986.77934868,
      "unique_users": 2002847.93952712,
      "pages_per_visit": 2.54682409858164
    },
    {
      "global_rank": 8648,
      "category_rank": 113,
      "domain": "travel.capitalone.com",
      "category": "Finance/Finance",
      "avg_month_visits": 5263503.59547562,
      "curr_month_visits": 5263503.59547562,
      "unique_users": 2299410.72201848,
      "pages_per_visit": 7.51932233531629
    },
    {
      "global_rank": 8191,
      "category_rank": 114,
      "domain": "justetf.com",
      "category": "Finance/Investing",
      "avg_month_visits": 5069375.19951295,
      "curr_month_visits": 5069375.19951295,
      "unique_users": 1724249.60580644,
      "pages_per_visit": 8.62552679289184
    },
    {
      "global_rank": 57323,
      "category_rank": 114,
      "domain": "nssi.bg",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 855504.341415143,
      "curr_month_visits": 855504.341415143,
      "unique_users": 296532.491968583,
      "pages_per_visit": 4.75297298004619
    },
    {
      "global_rank": 6202,
      "category_rank": 114,
      "domain": "anz.co.nz",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 8436656.69153203,
      "curr_month_visits": 8436656.69153203,
      "unique_users": 1300300.6622564,
      "pages_per_visit": 6.28380349082035
    },
    {
      "global_rank": 8744,
      "category_rank": 114,
      "domain": "spicemoney.com",
      "category": "Finance/Finance",
      "avg_month_visits": 6456045.09173157,
      "curr_month_visits": 6456045.09173157,
      "unique_users": 1452906.27143987,
      "pages_per_visit": 6.63752489434599
    },
    {
      "global_rank": 27158,
      "category_rank": 114,
      "domain": "auto.statefarm.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1776493.37673726,
      "curr_month_visits": 1776493.37673726,
      "unique_users": 1338739.88430824,
      "pages_per_visit": 5.55150220847136
    },
    {
      "global_rank": 9873,
      "category_rank": 114,
      "domain": "santander.com.mx",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4750398.834643,
      "curr_month_visits": 4750398.834643,
      "unique_users": 1560982.24388361,
      "pages_per_visit": 7.2405219607987
    },
    {
      "global_rank": 8308,
      "category_rank": 115,
      "domain": "coinglass.com",
      "category": "Finance/Investing",
      "avg_month_visits": 6927369.21235659,
      "curr_month_visits": 6927369.21235659,
      "unique_users": 998901.607316475,
      "pages_per_visit": 5.10675576227552
    },
    {
      "global_rank": 27196,
      "category_rank": 115,
      "domain": "careinsurance.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 3492632.26949344,
      "curr_month_visits": 3492632.26949344,
      "unique_users": 1483838.23374901,
      "pages_per_visit": 3.23102917514552
    },
    {
      "global_rank": 6293,
      "category_rank": 115,
      "domain": "raiffeisen.ch",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 5812091.25760288,
      "curr_month_visits": 5812091.25760288,
      "unique_users": 1697659.41913764,
      "pages_per_visit": 10.8365927659039
    },
    {
      "global_rank": 9923,
      "category_rank": 115,
      "domain": "smart-lab.ru",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 6818644.95177384,
      "curr_month_visits": 6818644.95177384,
      "unique_users": 1221642.45856341,
      "pages_per_visit": 4.72064789131958
    },
    {
      "global_rank": 57356,
      "category_rank": 115,
      "domain": "avalara.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1097619.83787681,
      "curr_month_visits": 1097619.83787681,
      "unique_users": 620217.531017161,
      "pages_per_visit": 3.50815298787882
    },
    {
      "global_rank": 8752,
      "category_rank": 115,
      "domain": "financebuzz.com",
      "category": "Finance/Finance",
      "avg_month_visits": 9374205.05161982,
      "curr_month_visits": 9374205.05161982,
      "unique_users": 6696651.06133944,
      "pages_per_visit": 1.64158914671155
    },
    {
      "global_rank": 27350,
      "category_rank": 116,
      "domain": "greateasternlife.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1424959.50314318,
      "curr_month_visits": 1424959.50314318,
      "unique_users": 553675.329753118,
      "pages_per_visit": 9.58186386708966
    },
    {
      "global_rank": 8760,
      "category_rank": 116,
      "domain": "big.one",
      "category": "Finance/Finance",
      "avg_month_visits": 6573228.20658449,
      "curr_month_visits": 6573228.20658449,
      "unique_users": 3909860.17162212,
      "pages_per_visit": 3.85653312604718
    },
    {
      "global_rank": 57507,
      "category_rank": 116,
      "domain": "emicalculator.net",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1344553.44114276,
      "curr_month_visits": 1344553.44114276,
      "unique_users": 648214.226537613,
      "pages_per_visit": 1.89541059515785
    },
    {
      "global_rank": 6298,
      "category_rank": 116,
      "domain": "checkout.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 9964028.12130546,
      "curr_month_visits": 9964028.12130546,
      "unique_users": 6089847.56457003,
      "pages_per_visit": 2.75757659506045
    },
    {
      "global_rank": 8442,
      "category_rank": 116,
      "domain": "goldprice.org",
      "category": "Finance/Investing",
      "avg_month_visits": 12526475.033173,
      "curr_month_visits": 12526475.033173,
      "unique_users": 2476963.2379651,
      "pages_per_visit": 1.74939602401058
    },
    {
      "global_rank": 9966,
      "category_rank": 116,
      "domain": "bill.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3932845.08204276,
      "curr_month_visits": 3932845.08204276,
      "unique_users": 1139254.59896418,
      "pages_per_visit": 12.8400539437716
    },
    {
      "global_rank": 8889,
      "category_rank": 117,
      "domain": "eightfold.ai",
      "category": "Finance/Finance",
      "avg_month_visits": 7411643.46501817,
      "curr_month_visits": 7411643.46501817,
      "unique_users": 3744028.12442825,
      "pages_per_visit": 4.10137785247806
    },
    {
      "global_rank": 57966,
      "category_rank": 117,
      "domain": "novipnoad.net",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 725832.32359405,
      "curr_month_visits": 725832.32359405,
      "unique_users": 296575.057849739,
      "pages_per_visit": 4.59694079395385
    },
    {
      "global_rank": 6349,
      "category_rank": 117,
      "domain": "sovcombank.ru",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 10567710.7246789,
      "curr_month_visits": 10567710.7246789,
      "unique_users": 5518023.32918488,
      "pages_per_visit": 4.08262779746086
    },
    {
      "global_rank": 10099,
      "category_rank": 117,
      "domain": "contifico.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 2997321.6088637,
      "curr_month_visits": 2997321.6088637,
      "unique_users": 257849.247322676,
      "pages_per_visit": 29.1860744402072
    },
    {
      "global_rank": 27456,
      "category_rank": 117,
      "domain": "porto.vc",
      "category": "Finance/Insurance",
      "avg_month_visits": 3094663.25633931,
      "curr_month_visits": 3094663.25633931,
      "unique_users": 1243430.98000146,
      "pages_per_visit": 1.57284408548055
    },
    {
      "global_rank": 8474,
      "category_rank": 117,
      "domain": "cfainstitute.org",
      "category": "Finance/Investing",
      "avg_month_visits": 4889578.04844257,
      "curr_month_visits": 4889578.04844257,
      "unique_users": 1308449.73109328,
      "pages_per_visit": 8.64713846184557
    },
    {
      "global_rank": 10114,
      "category_rank": 118,
      "domain": "truelayer.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 6416644.00216933,
      "curr_month_visits": 6416644.00216933,
      "unique_users": 3116066.62368287,
      "pages_per_visit": 2.56966976765074
    },
    {
      "global_rank": 61002,
      "category_rank": 118,
      "domain": "wynagrodzenia.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 993798.726374256,
      "curr_month_visits": 993798.726374256,
      "unique_users": 610815.981441858,
      "pages_per_visit": 3.08472039210025
    },
    {
      "global_rank": 8604,
      "category_rank": 118,
      "domain": "hibt.com",
      "category": "Finance/Investing",
      "avg_month_visits": 5257755.08106132,
      "curr_month_visits": 5257755.08106132,
      "unique_users": 3337003.10546981,
      "pages_per_visit": 6.42076562207609
    },
    {
      "global_rank": 27496,
      "category_rank": 118,
      "domain": "uiic.in",
      "category": "Finance/Insurance",
      "avg_month_visits": 1117288.02020103,
      "curr_month_visits": 1117288.02020103,
      "unique_users": 331277.66469231,
      "pages_per_visit": 13.5866654161483
    },
    {
      "global_rank": 8971,
      "category_rank": 118,
      "domain": "kiwoom.com",
      "category": "Finance/Finance",
      "avg_month_visits": 6233143.95564248,
      "curr_month_visits": 6233143.95564248,
      "unique_users": 2201617.39055442,
      "pages_per_visit": 2.91833769792694
    },
    {
      "global_rank": 6408,
      "category_rank": 118,
      "domain": "bankbazaar.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 11961426.5089794,
      "curr_month_visits": 11961426.5089794,
      "unique_users": 8086222.75361353,
      "pages_per_visit": 1.9413689061762
    },
    {
      "global_rank": 6417,
      "category_rank": 119,
      "domain": "aquila-secure.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 11240281.2660757,
      "curr_month_visits": 11240281.2660757,
      "unique_users": 299719.629463495,
      "pages_per_visit": 6.02116665762043
    },
    {
      "global_rank": 61204,
      "category_rank": 119,
      "domain": "muhasebetr.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 814655.294402348,
      "curr_month_visits": 814655.294402348,
      "unique_users": 419310.639054368,
      "pages_per_visit": 1.94345270851612
    },
    {
      "global_rank": 10182,
      "category_rank": 119,
      "domain": "veritrans.co.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 7815272.98326054,
      "curr_month_visits": 7815272.98326054,
      "unique_users": 5125642.6524835,
      "pages_per_visit": 2.04430480137394
    },
    {
      "global_rank": 27508,
      "category_rank": 119,
      "domain": "sumitomolife.co.jp",
      "category": "Finance/Insurance",
      "avg_month_visits": 1613930.7516852,
      "curr_month_visits": 1613930.7516852,
      "unique_users": 812990.90309192,
      "pages_per_visit": 4.32753635626704
    },
    {
      "global_rank": 9052,
      "category_rank": 119,
      "domain": "asaas.com",
      "category": "Finance/Finance",
      "avg_month_visits": 6181020.2811602,
      "curr_month_visits": 6181020.2811602,
      "unique_users": 1946110.26947586,
      "pages_per_visit": 5.53619083318678
    },
    {
      "global_rank": 8617,
      "category_rank": 119,
      "domain": "fairplay24.in",
      "category": "Finance/Investing",
      "avg_month_visits": 10225178.3930406,
      "curr_month_visits": 10225178.3930406,
      "unique_users": 223977.401882332,
      "pages_per_visit": 11.8757781135248
    },
    {
      "global_rank": 28014,
      "category_rank": 120,
      "domain": "vsk.ru",
      "category": "Finance/Insurance",
      "avg_month_visits": 1451692.91091989,
      "curr_month_visits": 1451692.91091989,
      "unique_users": 520162.488406955,
      "pages_per_visit": 8.30338359661815
    },
    {
      "global_rank": 10238,
      "category_rank": 120,
      "domain": "regione.lombardia.it",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 5185650.45344691,
      "curr_month_visits": 5185650.45344691,
      "unique_users": 2409990.68182682,
      "pages_per_visit": 5.19884493660351
    },
    {
      "global_rank": 8685,
      "category_rank": 120,
      "domain": "finam.ru",
      "category": "Finance/Investing",
      "avg_month_visits": 7756968.67198811,
      "curr_month_visits": 7756968.67198811,
      "unique_users": 1894400.85401215,
      "pages_per_visit": 3.6512365867214
    },
    {
      "global_rank": 9110,
      "category_rank": 120,
      "domain": "milanofinanza.it",
      "category": "Finance/Finance",
      "avg_month_visits": 7425859.99844478,
      "curr_month_visits": 7425859.99844478,
      "unique_users": 1628906.39527401,
      "pages_per_visit": 3.99755086613801
    },
    {
      "global_rank": 6423,
      "category_rank": 120,
      "domain": "pekao24.pl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 7179637.27945383,
      "curr_month_visits": 7179637.27945383,
      "unique_users": 1585391.31697305,
      "pages_per_visit": 7.52047364435803
    },
    {
      "global_rank": 61762,
      "category_rank": 120,
      "domain": "cbic.gov.in",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 747306.003353691,
      "curr_month_visits": 747306.003353691,
      "unique_users": 284155.527711684,
      "pages_per_visit": 5.18797174236669
    },
    {
      "global_rank": 6458,
      "category_rank": 121,
      "domain": "hims.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 7596756.3088128,
      "curr_month_visits": 7596756.3088128,
      "unique_users": 4950431.87130151,
      "pages_per_visit": 5.45084413950498
    },
    {
      "global_rank": 9209,
      "category_rank": 121,
      "domain": "cibil.com",
      "category": "Finance/Finance",
      "avg_month_visits": 5632880.3964745,
      "curr_month_visits": 5632880.3964745,
      "unique_users": 2766315.70359667,
      "pages_per_visit": 5.91672621748028
    },
    {
      "global_rank": 28491,
      "category_rank": 121,
      "domain": "aami.com.au",
      "category": "Finance/Insurance",
      "avg_month_visits": 1339526.2586937,
      "curr_month_visits": 1339526.2586937,
      "unique_users": 697486.575011534,
      "pages_per_visit": 8.88898571379539
    },
    {
      "global_rank": 10383,
      "category_rank": 121,
      "domain": "mps.it",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3658965.6761119,
      "curr_month_visits": 3658965.6761119,
      "unique_users": 727669.706629276,
      "pages_per_visit": 10.7233546970969
    },
    {
      "global_rank": 62381,
      "category_rank": 121,
      "domain": "teamsystemdigital.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 786122.532517415,
      "curr_month_visits": 786122.532517415,
      "unique_users": 92036.2051686629,
      "pages_per_visit": 6.07245476872121
    },
    {
      "global_rank": 8695,
      "category_rank": 121,
      "domain": "stockcharts.com",
      "category": "Finance/Investing",
      "avg_month_visits": 5888716.34310561,
      "curr_month_visits": 5888716.34310561,
      "unique_users": 651833.055942118,
      "pages_per_visit": 8.73084868448835
    },
    {
      "global_rank": 64660,
      "category_rank": 122,
      "domain": "18shinwabank.co.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 478635.262228518,
      "curr_month_visits": 478635.262228518,
      "unique_users": 145767.906861685,
      "pages_per_visit": 14.1191109747367
    },
    {
      "global_rank": 10748,
      "category_rank": 122,
      "domain": "cityclub.finance",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 7249192.35010714,
      "curr_month_visits": 7249192.35010714,
      "unique_users": 3696645.48648614,
      "pages_per_visit": 2.25981762206713
    },
    {
      "global_rank": 28517,
      "category_rank": 122,
      "domain": "northwesternmutual.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1710650.54087115,
      "curr_month_visits": 1710650.54087115,
      "unique_users": 916302.51344757,
      "pages_per_visit": 5.26912025562541
    },
    {
      "global_rank": 9212,
      "category_rank": 122,
      "domain": "sumup.com",
      "category": "Finance/Finance",
      "avg_month_visits": 6881029.06551251,
      "curr_month_visits": 6881029.06551251,
      "unique_users": 3093879.61225528,
      "pages_per_visit": 3.76538345813328
    },
    {
      "global_rank": 8885,
      "category_rank": 122,
      "domain": "damangames.bet",
      "category": "Finance/Investing",
      "avg_month_visits": 3504470.14803771,
      "curr_month_visits": 3504470.14803771,
      "unique_users": 369996.651904876,
      "pages_per_visit": 11.3182942339165
    },
    {
      "global_rank": 6481,
      "category_rank": 122,
      "domain": "bankofbaroda.in",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 9001501.53777314,
      "curr_month_visits": 9001501.53777314,
      "unique_users": 4327921.01242844,
      "pages_per_visit": 4.39671987784999
    },
    {
      "global_rank": 28544,
      "category_rank": 123,
      "domain": "sulamericaseguros.com.br",
      "category": "Finance/Insurance",
      "avg_month_visits": 1651324.25101153,
      "curr_month_visits": 1651324.25101153,
      "unique_users": 437382.069995938,
      "pages_per_visit": 9.15962150927173
    },
    {
      "global_rank": 64851,
      "category_rank": 123,
      "domain": "pit.pl",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 975049.220542939,
      "curr_month_visits": 975049.220542939,
      "unique_users": 681651.650039477,
      "pages_per_visit": 1.43741752679332
    },
    {
      "global_rank": 9215,
      "category_rank": 123,
      "domain": "profinance.ru",
      "category": "Finance/Finance",
      "avg_month_visits": 9391673.22727621,
      "curr_month_visits": 9391673.22727621,
      "unique_users": 1215256.11074495,
      "pages_per_visit": 2.42777815257576
    },
    {
      "global_rank": 10774,
      "category_rank": 123,
      "domain": "s-pankki.fi",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4569539.29005268,
      "curr_month_visits": 4569539.29005268,
      "unique_users": 1298980.75230961,
      "pages_per_visit": 6.12387179566279
    },
    {
      "global_rank": 9076,
      "category_rank": 123,
      "domain": "fireant.vn",
      "category": "Finance/Investing",
      "avg_month_visits": 6013423.99557625,
      "curr_month_visits": 6013423.99557625,
      "unique_users": 393615.584410099,
      "pages_per_visit": 9.91715980450164
    },
    {
      "global_rank": 6505,
      "category_rank": 123,
      "domain": "eghrmis.gov.my",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 5021387.21123254,
      "curr_month_visits": 5021387.21123254,
      "unique_users": 1158126.62070276,
      "pages_per_visit": 12.806864892495
    },
    {
      "global_rank": 64890,
      "category_rank": 124,
      "domain": "verginet.net",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1373944.17712319,
      "curr_month_visits": 1373944.17712319,
      "unique_users": 887619.800721769,
      "pages_per_visit": 1.53443966976537
    },
    {
      "global_rank": 11305,
      "category_rank": 124,
      "domain": "kueski.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 5475579.27811023,
      "curr_month_visits": 5475579.27811023,
      "unique_users": 1833984.30373631,
      "pages_per_visit": 4.68442041042965
    },
    {
      "global_rank": 28648,
      "category_rank": 124,
      "domain": "allianz.com.tr",
      "category": "Finance/Insurance",
      "avg_month_visits": 1940564.0374884,
      "curr_month_visits": 1940564.0374884,
      "unique_users": 841445.500634791,
      "pages_per_visit": 5.04209353657344
    },
    {
      "global_rank": 6588,
      "category_rank": 124,
      "domain": "bancsabadell.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 6625652.20830504,
      "curr_month_visits": 6625652.20830504,
      "unique_users": 1751683.84201802,
      "pages_per_visit": 8.63930717828492
    },
    {
      "global_rank": 9366,
      "category_rank": 124,
      "domain": "calcalist.co.il",
      "category": "Finance/Finance",
      "avg_month_visits": 7744403.98960776,
      "curr_month_visits": 7744403.98960776,
      "unique_users": 1864404.67531041,
      "pages_per_visit": 3.06173318727926
    },
    {
      "global_rank": 9103,
      "category_rank": 124,
      "domain": "ig.com",
      "category": "Finance/Investing",
      "avg_month_visits": 9033050.5846602,
      "curr_month_visits": 9033050.5846602,
      "unique_users": 2300979.96519257,
      "pages_per_visit": 3.04980019370222
    },
    {
      "global_rank": 28689,
      "category_rank": 125,
      "domain": "devk.de",
      "category": "Finance/Insurance",
      "avg_month_visits": 1196811.90866645,
      "curr_month_visits": 1196811.90866645,
      "unique_users": 677261.359210006,
      "pages_per_visit": 4.43286365383093
    },
    {
      "global_rank": 11348,
      "category_rank": 125,
      "domain": "hyundaicard.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4480718.13813428,
      "curr_month_visits": 4480718.13813428,
      "unique_users": 2405531.39843173,
      "pages_per_visit": 4.90365012549017
    },
    {
      "global_rank": 65408,
      "category_rank": 125,
      "domain": "satta-no.org",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 3105064.89806066,
      "curr_month_visits": 3105064.89806066,
      "unique_users": 197625.43916674,
      "pages_per_visit": 2.08028320583358
    },
    {
      "global_rank": 6654,
      "category_rank": 125,
      "domain": "unicredit.it",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 7905859.45451347,
      "curr_month_visits": 7905859.45451347,
      "unique_users": 2415629.27460904,
      "pages_per_visit": 5.57503868273649
    },
    {
      "global_rank": 9426,
      "category_rank": 125,
      "domain": "gestaoclick.com",
      "category": "Finance/Finance",
      "avg_month_visits": 4015497.35115406,
      "curr_month_visits": 4015497.35115406,
      "unique_users": 166113.181347362,
      "pages_per_visit": 23.7113162502207
    },
    {
      "global_rank": 11404,
      "category_rank": 126,
      "domain": "cathaybk.com.tw",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 5241728.50304461,
      "curr_month_visits": 5241728.50304461,
      "unique_users": 2562716.76814964,
      "pages_per_visit": 3.29810073589715
    },
    {
      "global_rank": 9513,
      "category_rank": 126,
      "domain": "superlogica.net",
      "category": "Finance/Finance",
      "avg_month_visits": 4601095.93401248,
      "curr_month_visits": 4601095.93401248,
      "unique_users": 1591661.87583826,
      "pages_per_visit": 10.9078961188017
    },
    {
      "global_rank": 6749,
      "category_rank": 126,
      "domain": "mtb.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 7627008.73792994,
      "curr_month_visits": 7627008.73792994,
      "unique_users": 1637951.08739958,
      "pages_per_visit": 5.5584435601079
    },
    {
      "global_rank": 9314,
      "category_rank": 126,
      "domain": "gs.com",
      "category": "Finance/Investing",
      "avg_month_visits": 4807326.17371073,
      "curr_month_visits": 4807326.17371073,
      "unique_users": 768139.720024426,
      "pages_per_visit": 13.5017403643974
    },
    {
      "global_rank": 28809,
      "category_rank": 126,
      "domain": "joinfreedelivery.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1895019.76257475,
      "curr_month_visits": 1895019.76257475,
      "unique_users": 1466641.63188024,
      "pages_per_visit": 2.35328668075339
    },
    {
      "global_rank": 65735,
      "category_rank": 126,
      "domain": "cchifirm.ca",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 507015.886947404,
      "curr_month_visits": 507015.886947404,
      "unique_users": 93829.7953706002,
      "pages_per_visit": 16.0058112194719
    },
    {
      "global_rank": 65838,
      "category_rank": 127,
      "domain": "eshopaid.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 949409.236758891,
      "curr_month_visits": 949409.236758891,
      "unique_users": 66271.8677220149,
      "pages_per_visit": 5.90572642583195
    },
    {
      "global_rank": 6826,
      "category_rank": 127,
      "domain": "mitarbeiterangebote.de",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 6909965.73133614,
      "curr_month_visits": 6909965.73133614,
      "unique_users": 2549795.8312156,
      "pages_per_visit": 4.57481497845427
    },
    {
      "global_rank": 11429,
      "category_rank": 127,
      "domain": "samsungfire.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4665726.09087417,
      "curr_month_visits": 4665726.09087417,
      "unique_users": 2238227.03415226,
      "pages_per_visit": 4.95077132337248
    },
    {
      "global_rank": 9524,
      "category_rank": 127,
      "domain": "cointelegraph.com",
      "category": "Finance/Finance",
      "avg_month_visits": 6495831.30209503,
      "curr_month_visits": 6495831.30209503,
      "unique_users": 3087915.76786797,
      "pages_per_visit": 1.70553659895615
    },
    {
      "global_rank": 9342,
      "category_rank": 127,
      "domain": "qxbroker.com",
      "category": "Finance/Investing",
      "avg_month_visits": 8162379.27092903,
      "curr_month_visits": 8162379.27092903,
      "unique_users": 1810378.59033562,
      "pages_per_visit": 5.66908011735347
    },
    {
      "global_rank": 28832,
      "category_rank": 127,
      "domain": "comparisons.org",
      "category": "Finance/Insurance",
      "avg_month_visits": 2537498.93825953,
      "curr_month_visits": 2537498.93825953,
      "unique_users": 1974978.42993304,
      "pages_per_visit": 2.36858671213538
    },
    {
      "global_rank": 9618,
      "category_rank": 128,
      "domain": "sekai-kabuka.com",
      "category": "Finance/Finance",
      "avg_month_visits": 12083745.742982,
      "curr_month_visits": 12083745.742982,
      "unique_users": 339416.036961589,
      "pages_per_visit": 2.51643025542127
    },
    {
      "global_rank": 66234,
      "category_rank": 128,
      "domain": "e-kontur.ru",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1192265.0076945,
      "curr_month_visits": 1192265.0076945,
      "unique_users": 705784.503862956,
      "pages_per_visit": 1.49213092002895
    },
    {
      "global_rank": 6852,
      "category_rank": 128,
      "domain": "swedbank.se",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 6611010.68302517,
      "curr_month_visits": 6611010.68302517,
      "unique_users": 1967411.79323588,
      "pages_per_visit": 8.42031194171447
    },
    {
      "global_rank": 28857,
      "category_rank": 128,
      "domain": "nrma.com.au",
      "category": "Finance/Insurance",
      "avg_month_visits": 1486845.84597126,
      "curr_month_visits": 1486845.84597126,
      "unique_users": 752899.080285249,
      "pages_per_visit": 7.05180567647349
    },
    {
      "global_rank": 9418,
      "category_rank": 128,
      "domain": "kabu.co.jp",
      "category": "Finance/Investing",
      "avg_month_visits": 4507558.3193555,
      "curr_month_visits": 4507558.3193555,
      "unique_users": 410766.121219251,
      "pages_per_visit": 13.1087731342637
    },
    {
      "global_rank": 11476,
      "category_rank": 128,
      "domain": "experian.co.uk",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4961846.02882606,
      "curr_month_visits": 4961846.02882606,
      "unique_users": 2726617.67491372,
      "pages_per_visit": 4.40151817821054
    },
    {
      "global_rank": 6915,
      "category_rank": 129,
      "domain": "paytm.me",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 14236612.218532,
      "curr_month_visits": 14236612.218532,
      "unique_users": 9088212.77288623,
      "pages_per_visit": 1.81590026234453
    },
    {
      "global_rank": 9645,
      "category_rank": 129,
      "domain": "equatorialenergia.com.br",
      "category": "Finance/Finance",
      "avg_month_visits": 5650237.16937577,
      "curr_month_visits": 5650237.16937577,
      "unique_users": 2191535.36938436,
      "pages_per_visit": 5.59616029326523
    },
    {
      "global_rank": 28915,
      "category_rank": 129,
      "domain": "chubb.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1921984.91559173,
      "curr_month_visits": 1921984.91559173,
      "unique_users": 958995.105159436,
      "pages_per_visit": 4.76063853073339
    },
    {
      "global_rank": 11567,
      "category_rank": 129,
      "domain": "arba.gov.ar",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3370120.41813993,
      "curr_month_visits": 3370120.41813993,
      "unique_users": 1129823.54473534,
      "pages_per_visit": 11.4675379626048
    },
    {
      "global_rank": 9538,
      "category_rank": 129,
      "domain": "finance.eastmoney.com",
      "category": "Finance/Investing",
      "avg_month_visits": 8728619.84106328,
      "curr_month_visits": 8728619.84106328,
      "unique_users": 3035321.21802969,
      "pages_per_visit": 2.33627188599603
    },
    {
      "global_rank": 66386,
      "category_rank": 129,
      "domain": "registryagency.bg",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 692043.345415306,
      "curr_month_visits": 692043.345415306,
      "unique_users": 191565.944797959,
      "pages_per_visit": 8.36479285403544
    },
    {
      "global_rank": 9725,
      "category_rank": 130,
      "domain": "speedpay.com",
      "category": "Finance/Finance",
      "avg_month_visits": 5898897.8730864,
      "curr_month_visits": 5898897.8730864,
      "unique_users": 4282707.68259833,
      "pages_per_visit": 4.32526952004529
    },
    {
      "global_rank": 28966,
      "category_rank": 130,
      "domain": "tataaia.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2299356.32716569,
      "curr_month_visits": 2299356.32716569,
      "unique_users": 1046678.48856923,
      "pages_per_visit": 3.81101425739034
    },
    {
      "global_rank": 66551,
      "category_rank": 130,
      "domain": "iris.co.uk",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 714882.945606059,
      "curr_month_visits": 714882.945606059,
      "unique_users": 300460.656946749,
      "pages_per_visit": 5.01359237311844
    },
    {
      "global_rank": 6937,
      "category_rank": 130,
      "domain": "bancopan.com.br",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 10264215.2981217,
      "curr_month_visits": 10264215.2981217,
      "unique_users": 2964141.85902351,
      "pages_per_visit": 3.71936432339538
    },
    {
      "global_rank": 9929,
      "category_rank": 130,
      "domain": "sensibull.com",
      "category": "Finance/Investing",
      "avg_month_visits": 7296512.46766053,
      "curr_month_visits": 7296512.46766053,
      "unique_users": 973985.715004198,
      "pages_per_visit": 6.13354543173527
    },
    {
      "global_rank": 11570,
      "category_rank": 130,
      "domain": "taishinbank.com.tw",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 6037247.17782635,
      "curr_month_visits": 6037247.17782635,
      "unique_users": 2629913.82229114,
      "pages_per_visit": 2.82254216790785
    },
    {
      "global_rank": 29336,
      "category_rank": 131,
      "domain": "thegeneral.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1760321.96535197,
      "curr_month_visits": 1760321.96535197,
      "unique_users": 1107334.05172942,
      "pages_per_visit": 3.94603038062388
    },
    {
      "global_rank": 68546,
      "category_rank": 131,
      "domain": "b-kontur.ru",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1105080.90554984,
      "curr_month_visits": 1105080.90554984,
      "unique_users": 651825.385233114,
      "pages_per_visit": 1.58351428766406
    },
    {
      "global_rank": 9958,
      "category_rank": 131,
      "domain": "onvista.de",
      "category": "Finance/Investing",
      "avg_month_visits": 7021611.22698563,
      "curr_month_visits": 7021611.22698563,
      "unique_users": 958962.250719612,
      "pages_per_visit": 3.65459552670393
    },
    {
      "global_rank": 11602,
      "category_rank": 131,
      "domain": "sinopac.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4463306.14795792,
      "curr_month_visits": 4463306.14795792,
      "unique_users": 1760323.1228218,
      "pages_per_visit": 4.05944979956071
    },
    {
      "global_rank": 9735,
      "category_rank": 131,
      "domain": "crypto.com",
      "category": "Finance/Finance",
      "avg_month_visits": 4292971.88032753,
      "curr_month_visits": 4292971.88032753,
      "unique_users": 2391458.2880743,
      "pages_per_visit": 3.17408661065909
    },
    {
      "global_rank": 29384,
      "category_rank": 132,
      "domain": "ehealthinsurance.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1363424.71776388,
      "curr_month_visits": 1363424.71776388,
      "unique_users": 965287.800506045,
      "pages_per_visit": 4.45266993908568
    },
    {
      "global_rank": 11776,
      "category_rank": 132,
      "domain": "cmb.fr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3220721.6631372,
      "curr_month_visits": 3220721.6631372,
      "unique_users": 559963.947268875,
      "pages_per_visit": 10.9950212241666
    },
    {
      "global_rank": 6975,
      "category_rank": 132,
      "domain": "rocketmortgage.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 7933459.24274645,
      "curr_month_visits": 7933459.24274645,
      "unique_users": 4530721.41746836,
      "pages_per_visit": 5.07651305322242
    },
    {
      "global_rank": 9755,
      "category_rank": 132,
      "domain": "monarchmoney.com",
      "category": "Finance/Finance",
      "avg_month_visits": 4330615.18249417,
      "curr_month_visits": 4330615.18249417,
      "unique_users": 797779.821837403,
      "pages_per_visit": 9.75858856058362
    },
    {
      "global_rank": 69272,
      "category_rank": 132,
      "domain": "patriotsoftware.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 487500.682387677,
      "curr_month_visits": 487500.682387677,
      "unique_users": 240700.150420504,
      "pages_per_visit": 7.64985863962156
    },
    {
      "global_rank": 9978,
      "category_rank": 132,
      "domain": "remita.net",
      "category": "Finance/Investing",
      "avg_month_visits": 5150122.54901975,
      "curr_month_visits": 5150122.54901975,
      "unique_users": 1263423.25041874,
      "pages_per_visit": 6.62807765399249
    },
    {
      "global_rank": 11824,
      "category_rank": 133,
      "domain": "safecharge.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 6479244.214778,
      "curr_month_visits": 6479244.214778,
      "unique_users": 1980959.35289572,
      "pages_per_visit": 2.30817264175281
    },
    {
      "global_rank": 6997,
      "category_rank": 133,
      "domain": "garantibbva.com.tr",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 7534432.58394614,
      "curr_month_visits": 7534432.58394614,
      "unique_users": 2607212.28373029,
      "pages_per_visit": 5.58880401164286
    },
    {
      "global_rank": 69805,
      "category_rank": 133,
      "domain": "tampuuri.fi",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 525164.037125917,
      "curr_month_visits": 525164.037125917,
      "unique_users": 100997.609022879,
      "pages_per_visit": 9.74795927205972
    },
    {
      "global_rank": 10017,
      "category_rank": 133,
      "domain": "10jqka.com.cn",
      "category": "Finance/Investing",
      "avg_month_visits": 6868690.13803559,
      "curr_month_visits": 6868690.13803559,
      "unique_users": 2342199.45188846,
      "pages_per_visit": 2.91166640327125
    },
    {
      "global_rank": 29386,
      "category_rank": 133,
      "domain": "racv.com.au",
      "category": "Finance/Insurance",
      "avg_month_visits": 1845928.81565187,
      "curr_month_visits": 1845928.81565187,
      "unique_users": 951806.559108866,
      "pages_per_visit": 4.28581072930218
    },
    {
      "global_rank": 9899,
      "category_rank": 133,
      "domain": "voya.com",
      "category": "Finance/Finance",
      "avg_month_visits": 3903097.90602117,
      "curr_month_visits": 3903097.90602117,
      "unique_users": 1465264.63500117,
      "pages_per_visit": 8.51409889722083
    },
    {
      "global_rank": 11891,
      "category_rank": 134,
      "domain": "msa.fr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3596642.49330424,
      "curr_month_visits": 3596642.49330424,
      "unique_users": 1206278.68212963,
      "pages_per_visit": 8.72410932233437
    },
    {
      "global_rank": 7012,
      "category_rank": 134,
      "domain": "bci.cl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 8108705.89356043,
      "curr_month_visits": 8108705.89356043,
      "unique_users": 1813387.24715848,
      "pages_per_visit": 5.25155001288728
    },
    {
      "global_rank": 9937,
      "category_rank": 134,
      "domain": "finance.rambler.ru",
      "category": "Finance/Finance",
      "avg_month_visits": 9642777.43739315,
      "curr_month_visits": 9642777.43739315,
      "unique_users": 3028799.59403414,
      "pages_per_visit": 1.59011861198917
    },
    {
      "global_rank": 10070,
      "category_rank": 134,
      "domain": "vantagemarkets.com",
      "category": "Finance/Investing",
      "avg_month_visits": 8817880.69404219,
      "curr_month_visits": 8817880.69404219,
      "unique_users": 3726676.51432972,
      "pages_per_visit": 2.02132527718083
    },
    {
      "global_rank": 29440,
      "category_rank": 134,
      "domain": "segurosrivadavia.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1004799.48598856,
      "curr_month_visits": 1004799.48598856,
      "unique_users": 265672.486223035,
      "pages_per_visit": 23.4368332902048
    },
    {
      "global_rank": 70311,
      "category_rank": 134,
      "domain": "icaew.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 711668.671680413,
      "curr_month_visits": 711668.671680413,
      "unique_users": 295018.185269803,
      "pages_per_visit": 4.9649356532244
    },
    {
      "global_rank": 7104,
      "category_rank": 135,
      "domain": "bobibanking.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 5632897.49967947,
      "curr_month_visits": 5632897.49967947,
      "unique_users": 1456192.30744809,
      "pages_per_visit": 11.1194509108302
    },
    {
      "global_rank": 12019,
      "category_rank": 135,
      "domain": "visa.com.br",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3698791.03973448,
      "curr_month_visits": 3698791.03973448,
      "unique_users": 2550409.66634077,
      "pages_per_visit": 2.33300154833198
    },
    {
      "global_rank": 29468,
      "category_rank": 135,
      "domain": "onlineinsightsstudy.google",
      "category": "Finance/Insurance",
      "avg_month_visits": 2093842.42003248,
      "curr_month_visits": 2093842.42003248,
      "unique_users": 466697.301111855,
      "pages_per_visit": 3.48522611315442
    },
    {
      "global_rank": 70939,
      "category_rank": 135,
      "domain": "taiju-life.co.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 510693.342107377,
      "curr_month_visits": 510693.342107377,
      "unique_users": 339355.026180032,
      "pages_per_visit": 4.85962291177127
    },
    {
      "global_rank": 10018,
      "category_rank": 135,
      "domain": "nsandi.com",
      "category": "Finance/Finance",
      "avg_month_visits": 4489712.79720739,
      "curr_month_visits": 4489712.79720739,
      "unique_users": 2180154.31452281,
      "pages_per_visit": 8.5718686810565
    },
    {
      "global_rank": 10139,
      "category_rank": 135,
      "domain": "nysc.org.ng",
      "category": "Finance/Investing",
      "avg_month_visits": 3738027.06651181,
      "curr_month_visits": 3738027.06651181,
      "unique_users": 768298.202768809,
      "pages_per_visit": 7.63447916154214
    },
    {
      "global_rank": 10262,
      "category_rank": 136,
      "domain": "investidor10.com.br",
      "category": "Finance/Investing",
      "avg_month_visits": 6727360.54159753,
      "curr_month_visits": 6727360.54159753,
      "unique_users": 1225814.68650833,
      "pages_per_visit": 4.04373375704392
    },
    {
      "global_rank": 10032,
      "category_rank": 136,
      "domain": "sucursalelectronica.com",
      "category": "Finance/Finance",
      "avg_month_visits": 4814215.72299863,
      "curr_month_visits": 4814215.72299863,
      "unique_users": 780500.267201531,
      "pages_per_visit": 8.06642900161969
    },
    {
      "global_rank": 7110,
      "category_rank": 136,
      "domain": "capitaloneoffers.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 8411610.86706393,
      "curr_month_visits": 8411610.86706393,
      "unique_users": 5218513.186761,
      "pages_per_visit": 2.78523916961217
    },
    {
      "global_rank": 12071,
      "category_rank": 136,
      "domain": "abc.gob.ar",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3773403.71595716,
      "curr_month_visits": 3773403.71595716,
      "unique_users": 761380.535832864,
      "pages_per_visit": 9.13570875427929
    },
    {
      "global_rank": 29501,
      "category_rank": 136,
      "domain": "sharefile.io",
      "category": "Finance/Insurance",
      "avg_month_visits": 3681740.92728802,
      "curr_month_visits": 3681740.92728802,
      "unique_users": 1027964.27171532,
      "pages_per_visit": 1.6295162368341
    },
    {
      "global_rank": 70964,
      "category_rank": 136,
      "domain": "expertus.com.ua",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 679814.811077358,
      "curr_month_visits": 679814.811077358,
      "unique_users": 306991.734119378,
      "pages_per_visit": 3.43387911940308
    },
    {
      "global_rank": 71150,
      "category_rank": 137,
      "domain": "procountor.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 663395.691253702,
      "curr_month_visits": 663395.691253702,
      "unique_users": 68895.9919503368,
      "pages_per_visit": 6.89125862499119
    },
    {
      "global_rank": 29755,
      "category_rank": 137,
      "domain": "optumbank.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1567129.23032289,
      "curr_month_visits": 1567129.23032289,
      "unique_users": 743927.054365148,
      "pages_per_visit": 4.93326542966637
    },
    {
      "global_rank": 12169,
      "category_rank": 137,
      "domain": "bnpparibasfortis.be",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3822834.08636599,
      "curr_month_visits": 3822834.08636599,
      "unique_users": 1137253.3871637,
      "pages_per_visit": 7.98179345649225
    },
    {
      "global_rank": 7163,
      "category_rank": 137,
      "domain": "privat24.ua",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 7492173.00302921,
      "curr_month_visits": 7492173.00302921,
      "unique_users": 2224816.36878661,
      "pages_per_visit": 5.13296995941964
    },
    {
      "global_rank": 10314,
      "category_rank": 137,
      "domain": "degiro.nl",
      "category": "Finance/Investing",
      "avg_month_visits": 5260289.75933878,
      "curr_month_visits": 5260289.75933878,
      "unique_users": 1047806.6386287,
      "pages_per_visit": 6.97291333063493
    },
    {
      "global_rank": 10083,
      "category_rank": 137,
      "domain": "pagopa.it",
      "category": "Finance/Finance",
      "avg_month_visits": 3597589.43355194,
      "curr_month_visits": 3597589.43355194,
      "unique_users": 2279281.01308774,
      "pages_per_visit": 6.44348849651022
    },
    {
      "global_rank": 10119,
      "category_rank": 138,
      "domain": "maya.ph",
      "category": "Finance/Finance",
      "avg_month_visits": 6296163.00790569,
      "curr_month_visits": 6296163.00790569,
      "unique_users": 3004050.92328955,
      "pages_per_visit": 2.92290768738729
    },
    {
      "global_rank": 10334,
      "category_rank": 138,
      "domain": "hotcopper.com.au",
      "category": "Finance/Investing",
      "avg_month_visits": 7530427.06248749,
      "curr_month_visits": 7530427.06248749,
      "unique_users": 419217.594583235,
      "pages_per_visit": 6.27791052548886
    },
    {
      "global_rank": 7164,
      "category_rank": 138,
      "domain": "csob.cz",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 6611487.30816207,
      "curr_month_visits": 6611487.30816207,
      "unique_users": 2784264.8152765,
      "pages_per_visit": 5.81042029430775
    },
    {
      "global_rank": 30306,
      "category_rank": 138,
      "domain": "allianznet.com.br",
      "category": "Finance/Insurance",
      "avg_month_visits": 1681187.77525692,
      "curr_month_visits": 1681187.77525692,
      "unique_users": 98469.7798297337,
      "pages_per_visit": 8.97961694423051
    },
    {
      "global_rank": 12190,
      "category_rank": 138,
      "domain": "santander.pt",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4209790.44320804,
      "curr_month_visits": 4209790.44320804,
      "unique_users": 1095174.15102966,
      "pages_per_visit": 6.07093943423475
    },
    {
      "global_rank": 71251,
      "category_rank": 138,
      "domain": "ird.gov.lk",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 295007.976773387,
      "curr_month_visits": 295007.976773387,
      "unique_users": 94677.8617842157,
      "pages_per_visit": 9.39225932034194
    },
    {
      "global_rank": 7171,
      "category_rank": 139,
      "domain": "ibk.co.kr",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 6573518.10960159,
      "curr_month_visits": 6573518.10960159,
      "unique_users": 1433466.23365296,
      "pages_per_visit": 7.31555338929842
    },
    {
      "global_rank": 30418,
      "category_rank": 139,
      "domain": "hastingsdirect.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1783587.84617871,
      "curr_month_visits": 1783587.84617871,
      "unique_users": 912645.540174083,
      "pages_per_visit": 6.35905934082476
    },
    {
      "global_rank": 10357,
      "category_rank": 139,
      "domain": "interactivebrokers.co.uk",
      "category": "Finance/Investing",
      "avg_month_visits": 3929880.07749282,
      "curr_month_visits": 3929880.07749282,
      "unique_users": 978644.732315129,
      "pages_per_visit": 9.12409144226174
    },
    {
      "global_rank": 71366,
      "category_rank": 139,
      "domain": "7eminar.ua",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 597077.143149766,
      "curr_month_visits": 597077.143149766,
      "unique_users": 201801.361320238,
      "pages_per_visit": 3.89153871717479
    },
    {
      "global_rank": 12293,
      "category_rank": 139,
      "domain": "bpergroup.net",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3026823.24903345,
      "curr_month_visits": 3026823.24903345,
      "unique_users": 686930.952716537,
      "pages_per_visit": 11.0557564395253
    },
    {
      "global_rank": 10189,
      "category_rank": 139,
      "domain": "remitly.com",
      "category": "Finance/Finance",
      "avg_month_visits": 6087894.60107844,
      "curr_month_visits": 6087894.60107844,
      "unique_users": 2458205.25521945,
      "pages_per_visit": 3.8180373683742
    },
    {
      "global_rank": 10246,
      "category_rank": 140,
      "domain": "mojedatovaschranka.cz",
      "category": "Finance/Finance",
      "avg_month_visits": 4333538.88779458,
      "curr_month_visits": 4333538.88779458,
      "unique_users": 1255967.35225586,
      "pages_per_visit": 8.56329512732541
    },
    {
      "global_rank": 10362,
      "category_rank": 140,
      "domain": "clkmr.com",
      "category": "Finance/Investing",
      "avg_month_visits": 5123077.46112676,
      "curr_month_visits": 5123077.46112676,
      "unique_users": 1331442.73184822,
      "pages_per_visit": 4.46179781421945
    },
    {
      "global_rank": 12330,
      "category_rank": 140,
      "domain": "scotiabankcolpatria.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3832745.50609496,
      "curr_month_visits": 3832745.50609496,
      "unique_users": 1343356.7828454,
      "pages_per_visit": 8.11847486978889
    },
    {
      "global_rank": 30584,
      "category_rank": 140,
      "domain": "bestmoney.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2578081.33423058,
      "curr_month_visits": 2578081.33423058,
      "unique_users": 1960209.37722493,
      "pages_per_visit": 1.91751639984987
    },
    {
      "global_rank": 71486,
      "category_rank": 140,
      "domain": "3dmodels.org",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 859360.71683491,
      "curr_month_visits": 859360.71683491,
      "unique_users": 509205.943826341,
      "pages_per_visit": 2.2660601843679
    },
    {
      "global_rank": 7207,
      "category_rank": 140,
      "domain": "bri.co.id",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 7923244.9243141,
      "curr_month_visits": 7923244.9243141,
      "unique_users": 1696674.25584198,
      "pages_per_visit": 6.18772296271357
    },
    {
      "global_rank": 30588,
      "category_rank": 141,
      "domain": "thezebra.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1631545.33061158,
      "curr_month_visits": 1631545.33061158,
      "unique_users": 1238794.28345915,
      "pages_per_visit": 4.63991254374105
    },
    {
      "global_rank": 10386,
      "category_rank": 141,
      "domain": "daiwa.co.jp",
      "category": "Finance/Investing",
      "avg_month_visits": 4216569.01229388,
      "curr_month_visits": 4216569.01229388,
      "unique_users": 486170.429042514,
      "pages_per_visit": 9.72435768912787
    },
    {
      "global_rank": 7373,
      "category_rank": 141,
      "domain": "ynab.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 6903565.61011441,
      "curr_month_visits": 6903565.61011441,
      "unique_users": 940010.384124097,
      "pages_per_visit": 7.27833198195516
    },
    {
      "global_rank": 10411,
      "category_rank": 141,
      "domain": "mpago.li",
      "category": "Finance/Finance",
      "avg_month_visits": 9395304.60286192,
      "curr_month_visits": 9395304.60286192,
      "unique_users": 4924208.4890467,
      "pages_per_visit": 1.30373300875827
    },
    {
      "global_rank": 71662,
      "category_rank": 141,
      "domain": "aicpa-cima.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 798695.214142238,
      "curr_month_visits": 798695.214142238,
      "unique_users": 398434.786971114,
      "pages_per_visit": 3.21740771178689
    },
    {
      "global_rank": 12351,
      "category_rank": 141,
      "domain": "andreani.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4679505.07889662,
      "curr_month_visits": 4679505.07889662,
      "unique_users": 1191536.88829834,
      "pages_per_visit": 4.58815620777078
    },
    {
      "global_rank": 72939,
      "category_rank": 142,
      "domain": "taxmann.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 760198.527013323,
      "curr_month_visits": 760198.527013323,
      "unique_users": 342831.925667483,
      "pages_per_visit": 3.79329906323431
    },
    {
      "global_rank": 31026,
      "category_rank": 142,
      "domain": "thepersonalfinancialguide.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1493960.86285571,
      "curr_month_visits": 1493960.86285571,
      "unique_users": 848678.31470136,
      "pages_per_visit": 5.97536624431982
    },
    {
      "global_rank": 10434,
      "category_rank": 142,
      "domain": "stockanalysis.com",
      "category": "Finance/Investing",
      "avg_month_visits": 4617519.41742758,
      "curr_month_visits": 4617519.41742758,
      "unique_users": 1533391.40298881,
      "pages_per_visit": 4.96671736366395
    },
    {
      "global_rank": 10452,
      "category_rank": 142,
      "domain": "bitkub.com",
      "category": "Finance/Finance",
      "avg_month_visits": 2240340.35504903,
      "curr_month_visits": 2240340.35504903,
      "unique_users": 411798.671520793,
      "pages_per_visit": 14.8378656991308
    },
    {
      "global_rank": 12485,
      "category_rank": 142,
      "domain": "ecitizen.go.ke",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3820722.02010561,
      "curr_month_visits": 3820722.02010561,
      "unique_users": 949742.831969433,
      "pages_per_visit": 10.3546106034264
    },
    {
      "global_rank": 7451,
      "category_rank": 142,
      "domain": "standardbank.co.za",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 5798150.31283767,
      "curr_month_visits": 5798150.31283767,
      "unique_users": 1594639.33393987,
      "pages_per_visit": 8.15483876976601
    },
    {
      "global_rank": 31871,
      "category_rank": 143,
      "domain": "helsana.ch",
      "category": "Finance/Insurance",
      "avg_month_visits": 1395811.65856829,
      "curr_month_visits": 1395811.65856829,
      "unique_users": 747432.536616526,
      "pages_per_visit": 6.2453271593444
    },
    {
      "global_rank": 10490,
      "category_rank": 143,
      "domain": "mcgraw-hill.com",
      "category": "Finance/Finance",
      "avg_month_visits": 8007771.6942032,
      "curr_month_visits": 8007771.6942032,
      "unique_users": 1592180.76318346,
      "pages_per_visit": 3.54055333611132
    },
    {
      "global_rank": 7452,
      "category_rank": 143,
      "domain": "lloydsbank.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 11433066.3989707,
      "curr_month_visits": 11433066.3989707,
      "unique_users": 3635703.56974313,
      "pages_per_visit": 2.14659946745103
    },
    {
      "global_rank": 10595,
      "category_rank": 143,
      "domain": "lpl.com",
      "category": "Finance/Investing",
      "avg_month_visits": 4071186.06383566,
      "curr_month_visits": 4071186.06383566,
      "unique_users": 679493.678493591,
      "pages_per_visit": 9.18604207379341
    },
    {
      "global_rank": 73270,
      "category_rank": 143,
      "domain": "blackline.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 534626.191491697,
      "curr_month_visits": 534626.191491697,
      "unique_users": 89178.9521214495,
      "pages_per_visit": 10.7502866286689
    },
    {
      "global_rank": 12600,
      "category_rank": 143,
      "domain": "esunbank.com.tw",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4917264.02033581,
      "curr_month_visits": 4917264.02033581,
      "unique_users": 2245237.75909296,
      "pages_per_visit": 3.35554188240609
    },
    {
      "global_rank": 10518,
      "category_rank": 144,
      "domain": "juspay.in",
      "category": "Finance/Finance",
      "avg_month_visits": 7631425.00451482,
      "curr_month_visits": 7631425.00451482,
      "unique_users": 5278963.28087729,
      "pages_per_visit": 1.98452324996311
    },
    {
      "global_rank": 12660,
      "category_rank": 144,
      "domain": "minfin.com.ua",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 7085105.77930774,
      "curr_month_visits": 7085105.77930774,
      "unique_users": 2196687.26950494,
      "pages_per_visit": 2.0666820635616
    },
    {
      "global_rank": 74073,
      "category_rank": 144,
      "domain": "nettolohn.de",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 739284.451225494,
      "curr_month_visits": 739284.451225494,
      "unique_users": 437947.278458125,
      "pages_per_visit": 3.30244788761579
    },
    {
      "global_rank": 32042,
      "category_rank": 144,
      "domain": "css.ch",
      "category": "Finance/Insurance",
      "avg_month_visits": 1379613.24833378,
      "curr_month_visits": 1379613.24833378,
      "unique_users": 793606.179518444,
      "pages_per_visit": 6.5217379875566
    },
    {
      "global_rank": 7455,
      "category_rank": 144,
      "domain": "citizensbankonline.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 7119458.48812969,
      "curr_month_visits": 7119458.48812969,
      "unique_users": 1329418.14347538,
      "pages_per_visit": 5.23166346298857
    },
    {
      "global_rank": 10676,
      "category_rank": 144,
      "domain": "geckoterminal.com",
      "category": "Finance/Investing",
      "avg_month_visits": 3834315.74587094,
      "curr_month_visits": 3834315.74587094,
      "unique_users": 1042312.21390653,
      "pages_per_visit": 4.73505818887053
    },
    {
      "global_rank": 32089,
      "category_rank": 145,
      "domain": "homesite.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1709514.13026856,
      "curr_month_visits": 1709514.13026856,
      "unique_users": 1026692.79296557,
      "pages_per_visit": 4.60534750601507
    },
    {
      "global_rank": 74647,
      "category_rank": 145,
      "domain": "mykaplan.co.uk",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 608076.568284978,
      "curr_month_visits": 608076.568284978,
      "unique_users": 82665.346606209,
      "pages_per_visit": 6.31725744703783
    },
    {
      "global_rank": 7462,
      "category_rank": 145,
      "domain": "bca.co.id",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 11210369.8622483,
      "curr_month_visits": 11210369.8622483,
      "unique_users": 5029257.596515,
      "pages_per_visit": 2.95097788112127
    },
    {
      "global_rank": 10709,
      "category_rank": 145,
      "domain": "marketbeat.com",
      "category": "Finance/Investing",
      "avg_month_visits": 5370473.99257862,
      "curr_month_visits": 5370473.99257862,
      "unique_users": 2575515.91611477,
      "pages_per_visit": 2.45440124344794
    },
    {
      "global_rank": 12809,
      "category_rank": 145,
      "domain": "eurobank.gr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4453490.20710814,
      "curr_month_visits": 4453490.20710814,
      "unique_users": 780617.531899451,
      "pages_per_visit": 5.00903023074267
    },
    {
      "global_rank": 10663,
      "category_rank": 145,
      "domain": "heromotocorp.biz",
      "category": "Finance/Finance",
      "avg_month_visits": 2632823.87930268,
      "curr_month_visits": 2632823.87930268,
      "unique_users": 89650.5193416822,
      "pages_per_visit": 35.2352874491017
    },
    {
      "global_rank": 75144,
      "category_rank": 146,
      "domain": "zeiken.co.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 707451.653963474,
      "curr_month_visits": 707451.653963474,
      "unique_users": 312181.121480091,
      "pages_per_visit": 3.56622979899797
    },
    {
      "global_rank": 13056,
      "category_rank": 146,
      "domain": "signicat.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 5422119.9298316,
      "curr_month_visits": 5422119.9298316,
      "unique_users": 2865099.60438246,
      "pages_per_visit": 2.30134765889093
    },
    {
      "global_rank": 10801,
      "category_rank": 146,
      "domain": "kurzy.cz",
      "category": "Finance/Investing",
      "avg_month_visits": 6961086.27116985,
      "curr_month_visits": 6961086.27116985,
      "unique_users": 2496840.28150121,
      "pages_per_visit": 2.51527577526117
    },
    {
      "global_rank": 7521,
      "category_rank": 146,
      "domain": "deutsche-bank.de",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 5958161.30958064,
      "curr_month_visits": 5958161.30958064,
      "unique_users": 1403660.36212662,
      "pages_per_visit": 8.25292781144301
    },
    {
      "global_rank": 32382,
      "category_rank": 146,
      "domain": "scored-itt.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 2783106.59681048,
      "curr_month_visits": 2783106.59681048,
      "unique_users": 1646061.71778349,
      "pages_per_visit": 3.54292153616582
    },
    {
      "global_rank": 10667,
      "category_rank": 146,
      "domain": "opensea.io",
      "category": "Finance/Finance",
      "avg_month_visits": 5372616.38901745,
      "curr_month_visits": 5372616.38901745,
      "unique_users": 2382904.82827677,
      "pages_per_visit": 4.10075166015878
    },
    {
      "global_rank": 7551,
      "category_rank": 147,
      "domain": "optimum.net",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 7065374.21377642,
      "curr_month_visits": 7065374.21377642,
      "unique_users": 1834800.37331511,
      "pages_per_visit": 6.61026755084159
    },
    {
      "global_rank": 13073,
      "category_rank": 147,
      "domain": "fss.or.kr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4204130.80351111,
      "curr_month_visits": 4204130.80351111,
      "unique_users": 1374613.4727961,
      "pages_per_visit": 4.68238573904672
    },
    {
      "global_rank": 32634,
      "category_rank": 147,
      "domain": "health.policybazaar.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1537799.62294512,
      "curr_month_visits": 1537799.62294512,
      "unique_users": 758960.572121033,
      "pages_per_visit": 5.97248508232468
    },
    {
      "global_rank": 10692,
      "category_rank": 147,
      "domain": "money.it",
      "category": "Finance/Finance",
      "avg_month_visits": 8366429.17599848,
      "curr_month_visits": 8366429.17599848,
      "unique_users": 4423602.24664806,
      "pages_per_visit": 1.59198662001089
    },
    {
      "global_rank": 10835,
      "category_rank": 147,
      "domain": "aastocks.com",
      "category": "Finance/Investing",
      "avg_month_visits": 6350825.03245543,
      "curr_month_visits": 6350825.03245543,
      "unique_users": 836826.425056663,
      "pages_per_visit": 6.43422650080531
    },
    {
      "global_rank": 75583,
      "category_rank": 147,
      "domain": "activenow.io",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 648881.543121398,
      "curr_month_visits": 648881.543121398,
      "unique_users": 176588.038140147,
      "pages_per_visit": 7.715686074656
    },
    {
      "global_rank": 10860,
      "category_rank": 148,
      "domain": "business-gazeta.ru",
      "category": "Finance/Finance",
      "avg_month_visits": 7303690.28695455,
      "curr_month_visits": 7303690.28695455,
      "unique_users": 2291613.8131005,
      "pages_per_visit": 2.69016353827252
    },
    {
      "global_rank": 7563,
      "category_rank": 148,
      "domain": "mastercard.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 10095541.5734276,
      "curr_month_visits": 10095541.5734276,
      "unique_users": 5995233.31676764,
      "pages_per_visit": 2.55740770295541
    },
    {
      "global_rank": 10847,
      "category_rank": 148,
      "domain": "commsec.com.au",
      "category": "Finance/Investing",
      "avg_month_visits": 4561212.26025096,
      "curr_month_visits": 4561212.26025096,
      "unique_users": 668823.911245804,
      "pages_per_visit": 9.41737945404169
    },
    {
      "global_rank": 13249,
      "category_rank": 148,
      "domain": "macif.fr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3286511.25461886,
      "curr_month_visits": 3286511.25461886,
      "unique_users": 1634274.74252131,
      "pages_per_visit": 6.84726404591378
    },
    {
      "global_rank": 32700,
      "category_rank": 148,
      "domain": "gnp.com.mx",
      "category": "Finance/Insurance",
      "avg_month_visits": 1480979.86309556,
      "curr_month_visits": 1480979.86309556,
      "unique_users": 340201.101596989,
      "pages_per_visit": 7.56988019934844
    },
    {
      "global_rank": 75673,
      "category_rank": 148,
      "domain": "manulife.co.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 394174.012336346,
      "curr_month_visits": 394174.012336346,
      "unique_users": 263115.790932692,
      "pages_per_visit": 5.16455610958913
    },
    {
      "global_rank": 32853,
      "category_rank": 149,
      "domain": "umr.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1403294.33689612,
      "curr_month_visits": 1403294.33689612,
      "unique_users": 582481.764734556,
      "pages_per_visit": 6.00189529896246
    },
    {
      "global_rank": 7578,
      "category_rank": 149,
      "domain": "invoicecloud.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 6210173.95042575,
      "curr_month_visits": 6210173.95042575,
      "unique_users": 3963667.22402999,
      "pages_per_visit": 5.86338793997564
    },
    {
      "global_rank": 13308,
      "category_rank": 149,
      "domain": "monobank.ua",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 6301533.31747087,
      "curr_month_visits": 6301533.31747087,
      "unique_users": 2554337.42941657,
      "pages_per_visit": 1.98339473335342
    },
    {
      "global_rank": 10904,
      "category_rank": 149,
      "domain": "coinspot.com.au",
      "category": "Finance/Investing",
      "avg_month_visits": 3427489.38290073,
      "curr_month_visits": 3427489.38290073,
      "unique_users": 401672.564701867,
      "pages_per_visit": 6.6124645939216
    },
    {
      "global_rank": 75737,
      "category_rank": 149,
      "domain": "tax2win.in",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 879798.639174582,
      "curr_month_visits": 879798.639174582,
      "unique_users": 627476.932612353,
      "pages_per_visit": 1.88572139570113
    },
    {
      "global_rank": 10942,
      "category_rank": 149,
      "domain": "addi.com",
      "category": "Finance/Finance",
      "avg_month_visits": 4735479.44838097,
      "curr_month_visits": 4735479.44838097,
      "unique_users": 1834447.20186971,
      "pages_per_visit": 3.94604718603551
    },
    {
      "global_rank": 7628,
      "category_rank": 150,
      "domain": "clearscore.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 7779372.4651132,
      "curr_month_visits": 7779372.4651132,
      "unique_users": 3497283.1013102,
      "pages_per_visit": 3.6591395943309
    },
    {
      "global_rank": 76532,
      "category_rank": 150,
      "domain": "steuertipps.de",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 750293.49469168,
      "curr_month_visits": 750293.49469168,
      "unique_users": 562645.38142561,
      "pages_per_visit": 2.23105742283317
    },
    {
      "global_rank": 32966,
      "category_rank": 150,
      "domain": "ezlynx.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1208311.03924181,
      "curr_month_visits": 1208311.03924181,
      "unique_users": 47259.5774984546,
      "pages_per_visit": 26.5813448113587
    },
    {
      "global_rank": 13335,
      "category_rank": 150,
      "domain": "bkash.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 5427743.25987514,
      "curr_month_visits": 5427743.25987514,
      "unique_users": 2321276.86955156,
      "pages_per_visit": 2.7528864435636
    },
    {
      "global_rank": 10993,
      "category_rank": 150,
      "domain": "quiteja.com.br",
      "category": "Finance/Finance",
      "avg_month_visits": 6889154.97613421,
      "curr_month_visits": 6889154.97613421,
      "unique_users": 1663815.40613889,
      "pages_per_visit": 1.8437205884602
    },
    {
      "global_rank": 10977,
      "category_rank": 150,
      "domain": "trendlyne.com",
      "category": "Finance/Investing",
      "avg_month_visits": 5875516.44528601,
      "curr_month_visits": 5875516.44528601,
      "unique_users": 1826522.0060754,
      "pages_per_visit": 4.16169641873768
    },
    {
      "global_rank": 11096,
      "category_rank": 151,
      "domain": "metamask.io",
      "category": "Finance/Finance",
      "avg_month_visits": 4239664.98317884,
      "curr_month_visits": 4239664.98317884,
      "unique_users": 1965626.64520224,
      "pages_per_visit": 4.02811282604484
    },
    {
      "global_rank": 7970,
      "category_rank": 151,
      "domain": "akbank.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 9102320.78853265,
      "curr_month_visits": 9102320.78853265,
      "unique_users": 4377423.84299039,
      "pages_per_visit": 2.8549355779972
    },
    {
      "global_rank": 13386,
      "category_rank": 151,
      "domain": "sunlife.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 2442895.10487083,
      "curr_month_visits": 2442895.10487083,
      "unique_users": 1090831.81453077,
      "pages_per_visit": 10.9836119403258
    },
    {
      "global_rank": 76797,
      "category_rank": 151,
      "domain": "fibe.in",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 814225.771945289,
      "curr_month_visits": 814225.771945289,
      "unique_users": 425805.467143795,
      "pages_per_visit": 2.76315580092575
    },
    {
      "global_rank": 32980,
      "category_rank": 151,
      "domain": "mysedgwick.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1693590.70882305,
      "curr_month_visits": 1693590.70882305,
      "unique_users": 477274.80808547,
      "pages_per_visit": 4.59017054251061
    },
    {
      "global_rank": 11006,
      "category_rank": 151,
      "domain": "bitvavo.com",
      "category": "Finance/Investing",
      "avg_month_visits": 3789762.28444775,
      "curr_month_visits": 3789762.28444775,
      "unique_users": 738908.490701283,
      "pages_per_visit": 5.06012203744038
    },
    {
      "global_rank": 33177,
      "category_rank": 152,
      "domain": "segurossura.com.co",
      "category": "Finance/Insurance",
      "avg_month_visits": 2302947.37689327,
      "curr_month_visits": 2302947.37689327,
      "unique_users": 1041998.0682216,
      "pages_per_visit": 3.0887499926899
    },
    {
      "global_rank": 11138,
      "category_rank": 152,
      "domain": "traderepublic.com",
      "category": "Finance/Investing",
      "avg_month_visits": 2958471.21984729,
      "curr_month_visits": 2958471.21984729,
      "unique_users": 1390324.0881113,
      "pages_per_visit": 10.5896908155694
    },
    {
      "global_rank": 77031,
      "category_rank": 152,
      "domain": "mybusinesscourse.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 630755.908638657,
      "curr_month_visits": 630755.908638657,
      "unique_users": 67186.4742406163,
      "pages_per_visit": 9.64537623619831
    },
    {
      "global_rank": 13472,
      "category_rank": 152,
      "domain": "clearpay.co.uk",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4171790.57847732,
      "curr_month_visits": 4171790.57847732,
      "unique_users": 1452833.45185265,
      "pages_per_visit": 3.85376801845756
    },
    {
      "global_rank": 11254,
      "category_rank": 152,
      "domain": "mobills.com.br",
      "category": "Finance/Finance",
      "avg_month_visits": 6421811.77951536,
      "curr_month_visits": 6421811.77951536,
      "unique_users": 4343296.59158183,
      "pages_per_visit": 2.05195048479344
    },
    {
      "global_rank": 8024,
      "category_rank": 152,
      "domain": "key.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 6140014.14767579,
      "curr_month_visits": 6140014.14767579,
      "unique_users": 1299294.81744488,
      "pages_per_visit": 6.05588872953517
    },
    {
      "global_rank": 13504,
      "category_rank": 153,
      "domain": "orico.co.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3865757.64114355,
      "curr_month_visits": 3865757.64114355,
      "unique_users": 1686837.20574273,
      "pages_per_visit": 5.64607422592366
    },
    {
      "global_rank": 11212,
      "category_rank": 153,
      "domain": "mql5.com",
      "category": "Finance/Investing",
      "avg_month_visits": 5191818.78413595,
      "curr_month_visits": 5191818.78413595,
      "unique_users": 1742327.38266604,
      "pages_per_visit": 5.35716390980257
    },
    {
      "global_rank": 11266,
      "category_rank": 153,
      "domain": "financial-net.com",
      "category": "Finance/Finance",
      "avg_month_visits": 4722258.33119035,
      "curr_month_visits": 4722258.33119035,
      "unique_users": 621582.27818069,
      "pages_per_visit": 5.71473961673456
    },
    {
      "global_rank": 33209,
      "category_rank": 153,
      "domain": "nivabupa.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1846486.58665564,
      "curr_month_visits": 1846486.58665564,
      "unique_users": 812111.540947783,
      "pages_per_visit": 3.72068991770578
    },
    {
      "global_rank": 8032,
      "category_rank": 153,
      "domain": "bancainternet.com.ar",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 7660889.2246572,
      "curr_month_visits": 7660889.2246572,
      "unique_users": 1259564.37377495,
      "pages_per_visit": 4.77855665243871
    },
    {
      "global_rank": 77122,
      "category_rank": 153,
      "domain": "vehicleinfo.app",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 549056.575519847,
      "curr_month_visits": 549056.575519847,
      "unique_users": 392123.285283956,
      "pages_per_visit": 2.48008782765838
    },
    {
      "global_rank": 11361,
      "category_rank": 154,
      "domain": "hapitas.jp",
      "category": "Finance/Finance",
      "avg_month_visits": 4391727.40795589,
      "curr_month_visits": 4391727.40795589,
      "unique_users": 894604.762766528,
      "pages_per_visit": 6.18038830316448
    },
    {
      "global_rank": 2955,
      "category_rank": 154,
      "domain": "moppy.jp",
      "category": "Finance",
      "avg_month_visits": 19494736.5836713,
      "curr_month_visits": 19494736.5836713,
      "unique_users": 1402417.08214888,
      "pages_per_visit": 6.04721395786328
    },
    {
      "global_rank": 8277,
      "category_rank": 154,
      "domain": "uhaul.net",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 5466142.51680532,
      "curr_month_visits": 5466142.51680532,
      "unique_users": 850398.202985463,
      "pages_per_visit": 13.032082430559
    },
    {
      "global_rank": 78233,
      "category_rank": 154,
      "domain": "karbonhq.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 628935.965255124,
      "curr_month_visits": 628935.965255124,
      "unique_users": 142375.290492985,
      "pages_per_visit": 7.79764254794924
    },
    {
      "global_rank": 11253,
      "category_rank": 154,
      "domain": "morganstanleyclientserv.com",
      "category": "Finance/Investing",
      "avg_month_visits": 4989223.60750536,
      "curr_month_visits": 4989223.60750536,
      "unique_users": 808020.106297349,
      "pages_per_visit": 5.34857012973595
    },
    {
      "global_rank": 13539,
      "category_rank": 154,
      "domain": "bochk.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3263019.12468482,
      "curr_month_visits": 3263019.12468482,
      "unique_users": 1076840.30752868,
      "pages_per_visit": 7.4812298516675
    },
    {
      "global_rank": 11575,
      "category_rank": 155,
      "domain": "suramericana.com",
      "category": "Finance/Finance",
      "avg_month_visits": 4217139.3078315,
      "curr_month_visits": 4217139.3078315,
      "unique_users": 1453073.67827972,
      "pages_per_visit": 7.12475541943295
    },
    {
      "global_rank": 8287,
      "category_rank": 155,
      "domain": "yapikredi.com.tr",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 9025146.404963,
      "curr_month_visits": 9025146.404963,
      "unique_users": 4101503.84345716,
      "pages_per_visit": 2.65964385986519
    },
    {
      "global_rank": 11274,
      "category_rank": 155,
      "domain": "deepcoin.com",
      "category": "Finance/Investing",
      "avg_month_visits": 3320448.04805854,
      "curr_month_visits": 3320448.04805854,
      "unique_users": 1665594.73360015,
      "pages_per_visit": 10.0783496496695
    },
    {
      "global_rank": 34174,
      "category_rank": 155,
      "domain": "bcbsm.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1180952.56055896,
      "curr_month_visits": 1180952.56055896,
      "unique_users": 581484.710876671,
      "pages_per_visit": 7.05001154294712
    },
    {
      "global_rank": 78508,
      "category_rank": 155,
      "domain": "guardianwall.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 789207.804491985,
      "curr_month_visits": 789207.804491985,
      "unique_users": 300843.547107103,
      "pages_per_visit": 2.88128134354525
    },
    {
      "global_rank": 13560,
      "category_rank": 155,
      "domain": "raiffeisen.ru",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4566945.59822944,
      "curr_month_visits": 4566945.59822944,
      "unique_users": 1528953.28354349,
      "pages_per_visit": 4.70065833887055
    },
    {
      "global_rank": 8338,
      "category_rank": 156,
      "domain": "swedbank.lt",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 5711610.18029364,
      "curr_month_visits": 5711610.18029364,
      "unique_users": 1235879.54009313,
      "pages_per_visit": 7.28546370908191
    },
    {
      "global_rank": 13796,
      "category_rank": 156,
      "domain": "independer.nl",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 2996347.57248865,
      "curr_month_visits": 2996347.57248865,
      "unique_users": 1751013.17447127,
      "pages_per_visit": 4.37441097394893
    },
    {
      "global_rank": 11338,
      "category_rank": 156,
      "domain": "troweprice.com",
      "category": "Finance/Investing",
      "avg_month_visits": 3591413.21653543,
      "curr_month_visits": 3591413.21653543,
      "unique_users": 1297759.50683924,
      "pages_per_visit": 7.09552824938542
    },
    {
      "global_rank": 78599,
      "category_rank": 156,
      "domain": "kros.sk",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 607945.451369583,
      "curr_month_visits": 607945.451369583,
      "unique_users": 181484.109480198,
      "pages_per_visit": 5.13962459445725
    },
    {
      "global_rank": 11582,
      "category_rank": 156,
      "domain": "dlocal.com",
      "category": "Finance/Finance",
      "avg_month_visits": 7377375.78906389,
      "curr_month_visits": 7377375.78906389,
      "unique_users": 3767576.25142708,
      "pages_per_visit": 1.97697025939646
    },
    {
      "global_rank": 34282,
      "category_rank": 156,
      "domain": "hepiyi.com.tr",
      "category": "Finance/Insurance",
      "avg_month_visits": 1360972.61121293,
      "curr_month_visits": 1360972.61121293,
      "unique_users": 481080.109020021,
      "pages_per_visit": 5.50633069498872
    },
    {
      "global_rank": 34458,
      "category_rank": 157,
      "domain": "ergo.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1163118.74763008,
      "curr_month_visits": 1163118.74763008,
      "unique_users": 459499.785968037,
      "pages_per_visit": 6.01592588243944
    },
    {
      "global_rank": 13808,
      "category_rank": 157,
      "domain": "info-retraite.fr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3162490.54057335,
      "curr_month_visits": 3162490.54057335,
      "unique_users": 1766891.05873727,
      "pages_per_visit": 7.65618894519677
    },
    {
      "global_rank": 78994,
      "category_rank": 157,
      "domain": "kk.bank",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 466150.38852489,
      "curr_month_visits": 466150.38852489,
      "unique_users": 132733.732800885,
      "pages_per_visit": 9.15394252608917
    },
    {
      "global_rank": 11352,
      "category_rank": 157,
      "domain": "nordnet.no",
      "category": "Finance/Investing",
      "avg_month_visits": 4789610.87998318,
      "curr_month_visits": 4789610.87998318,
      "unique_users": 636152.88757966,
      "pages_per_visit": 6.58618528343368
    },
    {
      "global_rank": 8456,
      "category_rank": 157,
      "domain": "sc.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 6440306.07863626,
      "curr_month_visits": 6440306.07863626,
      "unique_users": 3017621.42331009,
      "pages_per_visit": 5.58072435087545
    },
    {
      "global_rank": 11674,
      "category_rank": 157,
      "domain": "bnpparibas.pl",
      "category": "Finance/Finance",
      "avg_month_visits": 4089478.00756236,
      "curr_month_visits": 4089478.00756236,
      "unique_users": 943536.217702251,
      "pages_per_visit": 7.36598451990722
    },
    {
      "global_rank": 8483,
      "category_rank": 158,
      "domain": "mabanque.bnpparibas",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 5661963.58133499,
      "curr_month_visits": 5661963.58133499,
      "unique_users": 1479021.23658191,
      "pages_per_visit": 6.55801006634943
    },
    {
      "global_rank": 11682,
      "category_rank": 158,
      "domain": "zeptonow.com",
      "category": "Finance/Finance",
      "avg_month_visits": 5078467.4518555,
      "curr_month_visits": 5078467.4518555,
      "unique_users": 2974626.77105907,
      "pages_per_visit": 2.74997301511234
    },
    {
      "global_rank": 34504,
      "category_rank": 158,
      "domain": "mediassist.in",
      "category": "Finance/Insurance",
      "avg_month_visits": 1271731.1231701,
      "curr_month_visits": 1271731.1231701,
      "unique_users": 434209.08350867,
      "pages_per_visit": 6.06083191888009
    },
    {
      "global_rank": 11444,
      "category_rank": 158,
      "domain": "cls.cn",
      "category": "Finance/Investing",
      "avg_month_visits": 7024866.86717229,
      "curr_month_visits": 7024866.86717229,
      "unique_users": 632526.869077168,
      "pages_per_visit": 2.90382454910097
    },
    {
      "global_rank": 13814,
      "category_rank": 158,
      "domain": "cnops.org.ma",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4562748.11965914,
      "curr_month_visits": 4562748.11965914,
      "unique_users": 573734.171090796,
      "pages_per_visit": 3.16968876587478
    },
    {
      "global_rank": 79215,
      "category_rank": 158,
      "domain": "life8739.co.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 603165.211002756,
      "curr_month_visits": 603165.211002756,
      "unique_users": 361078.080968982,
      "pages_per_visit": 2.62332586090444
    },
    {
      "global_rank": 79900,
      "category_rank": 159,
      "domain": "taxslayerpro.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 215307.615987027,
      "curr_month_visits": 215307.615987027,
      "unique_users": 101806.786112347,
      "pages_per_visit": 16.3584818640235
    },
    {
      "global_rank": 11471,
      "category_rank": 159,
      "domain": "kotaksecurities.com",
      "category": "Finance/Investing",
      "avg_month_visits": 6805356.90492985,
      "curr_month_visits": 6805356.90492985,
      "unique_users": 1918765.55044166,
      "pages_per_visit": 5.06726631032373
    },
    {
      "global_rank": 13818,
      "category_rank": 159,
      "domain": "alpha.gr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3713309.04413481,
      "curr_month_visits": 3713309.04413481,
      "unique_users": 808350.274090359,
      "pages_per_visit": 6.79268609264005
    },
    {
      "global_rank": 34673,
      "category_rank": 159,
      "domain": "urbanair.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1508192.28432499,
      "curr_month_visits": 1508192.28432499,
      "unique_users": 820883.853590067,
      "pages_per_visit": 3.35046820471952
    },
    {
      "global_rank": 8610,
      "category_rank": 159,
      "domain": "smarthub.coop",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 5253674.28416692,
      "curr_month_visits": 5253674.28416692,
      "unique_users": 2945474.93710242,
      "pages_per_visit": 6.44472811615335
    },
    {
      "global_rank": 11775,
      "category_rank": 159,
      "domain": "buildinglink.com",
      "category": "Finance/Finance",
      "avg_month_visits": 3542114.51122459,
      "curr_month_visits": 3542114.51122459,
      "unique_users": 543944.465807397,
      "pages_per_visit": 18.083424656808
    },
    {
      "global_rank": 79931,
      "category_rank": 160,
      "domain": "asahi-life.co.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 684068.137649351,
      "curr_month_visits": 684068.137649351,
      "unique_users": 489047.75284024,
      "pages_per_visit": 2.50458436421725
    },
    {
      "global_rank": 11478,
      "category_rank": 160,
      "domain": "delta.exchange",
      "category": "Finance/Investing",
      "avg_month_visits": 2842686.81541652,
      "curr_month_visits": 2842686.81541652,
      "unique_users": 516875.743982521,
      "pages_per_visit": 16.2395134715143
    },
    {
      "global_rank": 13877,
      "category_rank": 160,
      "domain": "vbr.ru",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 5411362.18486944,
      "curr_month_visits": 5411362.18486944,
      "unique_users": 3663597.97484289,
      "pages_per_visit": 2.19637989381844
    },
    {
      "global_rank": 34688,
      "category_rank": 160,
      "domain": "uhcjarvis.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1124547.82128541,
      "curr_month_visits": 1124547.82128541,
      "unique_users": 108861.134206767,
      "pages_per_visit": 8.27745497438993
    },
    {
      "global_rank": 8621,
      "category_rank": 160,
      "domain": "unionbankofindia.co.in",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 6965950.04146025,
      "curr_month_visits": 6965950.04146025,
      "unique_users": 3168372.0514272,
      "pages_per_visit": 4.61864547505376
    },
    {
      "global_rank": 12259,
      "category_rank": 160,
      "domain": "nellisauction.com",
      "category": "Finance/Finance",
      "avg_month_visits": 3835245.38251267,
      "curr_month_visits": 3835245.38251267,
      "unique_users": 438811.558501698,
      "pages_per_visit": 9.56487899572781
    },
    {
      "global_rank": 35101,
      "category_rank": 161,
      "domain": "comparethemarket.com.au",
      "category": "Finance/Insurance",
      "avg_month_visits": 1104158.36548196,
      "curr_month_visits": 1104158.36548196,
      "unique_users": 705487.686330717,
      "pages_per_visit": 8.28263934446412
    },
    {
      "global_rank": 12337,
      "category_rank": 161,
      "domain": "adbtc.top",
      "category": "Finance/Finance",
      "avg_month_visits": 2021571.70410985,
      "curr_month_visits": 2021571.70410985,
      "unique_users": 269537.308192179,
      "pages_per_visit": 39.0078506251709
    },
    {
      "global_rank": 11696,
      "category_rank": 161,
      "domain": "ehr.com",
      "category": "Finance/Investing",
      "avg_month_visits": 2999638.72273705,
      "curr_month_visits": 2999638.72273705,
      "unique_users": 1311902.49480398,
      "pages_per_visit": 7.34159525543088
    },
    {
      "global_rank": 8668,
      "category_rank": 161,
      "domain": "krungthai.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 7282400.19462846,
      "curr_month_visits": 7282400.19462846,
      "unique_users": 2646922.10381341,
      "pages_per_visit": 4.03943759779357
    },
    {
      "global_rank": 80062,
      "category_rank": 161,
      "domain": "clevertap-prod.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 1219926.19348513,
      "curr_month_visits": 1219926.19348513,
      "unique_users": 537379.923021012,
      "pages_per_visit": 1.25928075100741
    },
    {
      "global_rank": 13890,
      "category_rank": 161,
      "domain": "aeonbank.co.jp",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3627152.56708161,
      "curr_month_visits": 3627152.56708161,
      "unique_users": 1829989.93203121,
      "pages_per_visit": 5.26252124363222
    },
    {
      "global_rank": 11744,
      "category_rank": 162,
      "domain": "biconomy.com",
      "category": "Finance/Investing",
      "avg_month_visits": 5794825.40494284,
      "curr_month_visits": 5794825.40494284,
      "unique_users": 3613671.08733093,
      "pages_per_visit": 5.88408452512798
    },
    {
      "global_rank": 12392,
      "category_rank": 162,
      "domain": "manulife.ca",
      "category": "Finance/Finance",
      "avg_month_visits": 3219866.29168122,
      "curr_month_visits": 3219866.29168122,
      "unique_users": 1122873.53258527,
      "pages_per_visit": 7.81950275896076
    },
    {
      "global_rank": 14056,
      "category_rank": 162,
      "domain": "ingos.ru",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3968466.35667734,
      "curr_month_visits": 3968466.35667734,
      "unique_users": 1443176.04962505,
      "pages_per_visit": 5.64201204932761
    },
    {
      "global_rank": 8674,
      "category_rank": 162,
      "domain": "scotiabank.cl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 6362335.94108464,
      "curr_month_visits": 6362335.94108464,
      "unique_users": 1310279.26071431,
      "pages_per_visit": 5.50084815499111
    },
    {
      "global_rank": 35339,
      "category_rank": 162,
      "domain": "creditacceptance.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1284180.00849156,
      "curr_month_visits": 1284180.00849156,
      "unique_users": 377964.539123465,
      "pages_per_visit": 9.36052058718318
    },
    {
      "global_rank": 80346,
      "category_rank": 162,
      "domain": "gib-life.co.jp",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 365083.021478076,
      "curr_month_visits": 365083.021478076,
      "unique_users": 204521.409896747,
      "pages_per_visit": 7.97476740472222
    },
    {
      "global_rank": 8683,
      "category_rank": 163,
      "domain": "postfinance.ch",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 5311027.41549398,
      "curr_month_visits": 5311027.41549398,
      "unique_users": 2038171.66185061,
      "pages_per_visit": 6.52655219668816
    },
    {
      "global_rank": 11786,
      "category_rank": 163,
      "domain": "ipowatch.in",
      "category": "Finance/Investing",
      "avg_month_visits": 9524734.58712403,
      "curr_month_visits": 9524734.58712403,
      "unique_users": 2151728.74509194,
      "pages_per_visit": 2.12095721097585
    },
    {
      "global_rank": 12615,
      "category_rank": 163,
      "domain": "rbi.org.in",
      "category": "Finance/Finance",
      "avg_month_visits": 5302924.19297933,
      "curr_month_visits": 5302924.19297933,
      "unique_users": 2561839.56487332,
      "pages_per_visit": 3.92648878305803
    },
    {
      "global_rank": 14070,
      "category_rank": 163,
      "domain": "bancoprovincia.com.ar",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 6468696.32308158,
      "curr_month_visits": 6468696.32308158,
      "unique_users": 1938980.45158745,
      "pages_per_visit": 2.09120112546305
    },
    {
      "global_rank": 80719,
      "category_rank": 163,
      "domain": "payusatax.com",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 572346.303751168,
      "curr_month_visits": 572346.303751168,
      "unique_users": 390422.339909921,
      "pages_per_visit": 4.72904381535175
    },
    {
      "global_rank": 35343,
      "category_rank": 163,
      "domain": "unitedhealthgroup.com",
      "category": "Finance/Insurance",
      "avg_month_visits": 1964387.56819886,
      "curr_month_visits": 1964387.56819886,
      "unique_users": 1222815.61438997,
      "pages_per_visit": 3.26463980819218
    },
    {
      "global_rank": 81319,
      "category_rank": 164,
      "domain": "buh.ru",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 912503.897811935,
      "curr_month_visits": 912503.897811935,
      "unique_users": 518347.317862083,
      "pages_per_visit": 1.51516783272376
    },
    {
      "global_rank": 11947,
      "category_rank": 164,
      "domain": "marketscreener.com",
      "category": "Finance/Investing",
      "avg_month_visits": 5189558.70764878,
      "curr_month_visits": 5189558.70764878,
      "unique_users": 2514953.27956144,
      "pages_per_visit": 3.83784529702543
    },
    {
      "global_rank": 12652,
      "category_rank": 164,
      "domain": "anlikaltinfiyatlari.com",
      "category": "Finance/Finance",
      "avg_month_visits": 10098321.6076142,
      "curr_month_visits": 10098321.6076142,
      "unique_users": 660189.874682024,
      "pages_per_visit": 2.2569023244123
    },
    {
      "global_rank": 8734,
      "category_rank": 164,
      "domain": "bancofalabella.cl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 7524070.77303847,
      "curr_month_visits": 7524070.77303847,
      "unique_users": 2797581.00157931,
      "pages_per_visit": 3.69870904862284
    },
    {
      "global_rank": 35382,
      "category_rank": 164,
      "domain": "allianz.pl",
      "category": "Finance/Insurance",
      "avg_month_visits": 1297519.82204005,
      "curr_month_visits": 1297519.82204005,
      "unique_users": 546251.50779198,
      "pages_per_visit": 7.33523542632721
    },
    {
      "global_rank": 14222,
      "category_rank": 164,
      "domain": "quicken.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 3010624.60221873,
      "curr_month_visits": 3010624.60221873,
      "unique_users": 1161094.58950301,
      "pages_per_visit": 5.28197951711567
    },
    {
      "global_rank": 12705,
      "category_rank": 165,
      "domain": "sgp.net.br",
      "category": "Finance/Finance",
      "avg_month_visits": 2897939.89125535,
      "curr_month_visits": 2897939.89125535,
      "unique_users": 656095.970539568,
      "pages_per_visit": 17.4707898053209
    },
    {
      "global_rank": 14225,
      "category_rank": 165,
      "domain": "pichincha.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 4097183.51370073,
      "curr_month_visits": 4097183.51370073,
      "unique_users": 1089726.55925936,
      "pages_per_visit": 5.3785383567796
    },
    {
      "global_rank": 8969,
      "category_rank": 165,
      "domain": "fisglobal.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 7833187.13902002,
      "curr_month_visits": 7833187.13902002,
      "unique_users": 3105020.90997513,
      "pages_per_visit": 3.00969124988577
    },
    {
      "global_rank": 11966,
      "category_rank": 165,
      "domain": "oanda.com",
      "category": "Finance/Investing",
      "avg_month_visits": 5350721.35585641,
      "curr_month_visits": 5350721.35585641,
      "unique_users": 2114560.28966459,
      "pages_per_visit": 3.67787154329292
    },
    {
      "global_rank": 35489,
      "category_rank": 165,
      "domain": "hdi.com.br",
      "category": "Finance/Insurance",
      "avg_month_visits": 1571593.32934792,
      "curr_month_visits": 1571593.32934792,
      "unique_users": 186151.978761728,
      "pages_per_visit": 5.85855110287275
    },
    {
      "global_rank": 82002,
      "category_rank": 165,
      "domain": "portal-bereich.de",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 440085.332113063,
      "curr_month_visits": 440085.332113063,
      "unique_users": 159344.937188597,
      "pages_per_visit": 7.24749639067212
    },
    {
      "global_rank": 12790,
      "category_rank": 166,
      "domain": "eduzz.com",
      "category": "Finance/Finance",
      "avg_month_visits": 5806866.05294205,
      "curr_month_visits": 5806866.05294205,
      "unique_users": 2522449.9203606,
      "pages_per_visit": 2.51440546148255
    },
    {
      "global_rank": 36052,
      "category_rank": 166,
      "domain": "netchexonline.net",
      "category": "Finance/Insurance",
      "avg_month_visits": 1497865.697428,
      "curr_month_visits": 1497865.697428,
      "unique_users": 118784.524579664,
      "pages_per_visit": 7.48962682459002
    },
    {
      "global_rank": 82301,
      "category_rank": 166,
      "domain": "cpaaustralia.com.au",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 602141.271075296,
      "curr_month_visits": 602141.271075296,
      "unique_users": 221672.781431032,
      "pages_per_visit": 7.25088205815301
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