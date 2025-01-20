
import {Top_Website_Categories} from '@/lib/top_websites';
export const runtime = 'edge';
export const metadata = {
  title: 'Top law and government Websites Ranking in the World, 2025',
  description: 'The top 1000 most visited entertainment websites in the World by Ahrefs organic search traffic estimates. Updated monthly. 2025',
  keywords: ['Top Websites', 'Top Websites Ranking','law and government'],
  authors: [
    { name: 'hackX', url: 'https://www.xucongyong.com' }
  ]
}


export default function TopWebsite() {

  const global_rank_all = [
    {
      "global_rank": 807,
      "category_rank": 1,
      "domain": "afip.gob.ar",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 33120873.5629155,
      "curr_month_visits": 33120873.5629155,
      "unique_users": 6630528.41072786,
      "pages_per_visit": 17.9201396161136
    },
    {
      "global_rank": 5107,
      "category_rank": 1,
      "domain": "truthfinder.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 12610859.1043422,
      "curr_month_visits": 12610859.1043422,
      "unique_users": 9390808.05452289,
      "pages_per_visit": 3.12039610113077
    },
    {
      "global_rank": 1140,
      "category_rank": 1,
      "domain": "consultant.ru",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 45590132.1847459,
      "curr_month_visits": 45590132.1847459,
      "unique_users": 17160007.4726149,
      "pages_per_visit": 3.55304156914923
    },
    {
      "global_rank": 2702,
      "category_rank": 1,
      "domain": "travel.state.gov",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 22684262.8953172,
      "curr_month_visits": 22684262.8953172,
      "unique_users": 11865761.6318689,
      "pages_per_visit": 2.98485039963069
    },
    {
      "global_rank": 1027,
      "category_rank": 1,
      "domain": "id.me",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 32275358.3998699,
      "curr_month_visits": 32275358.3998699,
      "unique_users": 15241482.2303217,
      "pages_per_visit": 7.86012945880258
    },
    {
      "global_rank": 34385,
      "category_rank": 2,
      "domain": "arrests.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 1757270.31916137,
      "curr_month_visits": 1757270.31916137,
      "unique_users": 406383.574832572,
      "pages_per_visit": 4.86363613687048
    },
    {
      "global_rank": 6529,
      "category_rank": 2,
      "domain": "usvisa-info.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 7449326.16844316,
      "curr_month_visits": 7449326.16844316,
      "unique_users": 1790599.83291991,
      "pages_per_visit": 8.03568232159821
    },
    {
      "global_rank": 1415,
      "category_rank": 2,
      "domain": "agenziaentrate.gov.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 20449460.0638326,
      "curr_month_visits": 20449460.0638326,
      "unique_users": 5687046.23796608,
      "pages_per_visit": 17.0053414440179
    },
    {
      "global_rank": 1139,
      "category_rank": 2,
      "domain": "va.gov",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 32337654.0366459,
      "curr_month_visits": 32337654.0366459,
      "unique_users": 10141503.8433807,
      "pages_per_visit": 7.21408813686989
    },
    {
      "global_rank": 1413,
      "category_rank": 2,
      "domain": "tjsp.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 29660442.8795211,
      "curr_month_visits": 29660442.8795211,
      "unique_users": 3040911.69140664,
      "pages_per_visit": 10.5507190584241
    },
    {
      "global_rank": 35862,
      "category_rank": 3,
      "domain": "bustednewspaper.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 1594598.2980613,
      "curr_month_visits": 1594598.2980613,
      "unique_users": 334457.376095057,
      "pages_per_visit": 6.16239019032344
    },
    {
      "global_rank": 1761,
      "category_rank": 3,
      "domain": "uscis.gov",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 23963580.5191112,
      "curr_month_visits": 23963580.5191112,
      "unique_users": 7669164.80753135,
      "pages_per_visit": 6.82933783559206
    },
    {
      "global_rank": 8500,
      "category_rank": 3,
      "domain": "homeaffairs.gov.au",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 8007335.67125071,
      "curr_month_visits": 8007335.67125071,
      "unique_users": 3351948.2503283,
      "pages_per_visit": 3.36889920043629
    },
    {
      "global_rank": 318,
      "category_rank": 3,
      "domain": "service.gov.uk",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 90909591.9932285,
      "curr_month_visits": 90909591.9932285,
      "unique_users": 24185400.0950752,
      "pages_per_visit": 8.74887498230478
    },
    {
      "global_rank": 1420,
      "category_rank": 3,
      "domain": "jusbrasil.com.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 45110071.0065864,
      "curr_month_visits": 45110071.0065864,
      "unique_users": 18582434.3640843,
      "pages_per_visit": 3.41913024907542
    },
    {
      "global_rank": 2996,
      "category_rank": 3,
      "domain": "topwar.ru",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 23670774.2880913,
      "curr_month_visits": 23670774.2880913,
      "unique_users": 4246028.38175499,
      "pages_per_visit": 3.39764495772965
    },
    {
      "global_rank": 5560,
      "category_rank": 4,
      "domain": "eb.mil.br",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 9719152.01342792,
      "curr_month_visits": 9719152.01342792,
      "unique_users": 2717505.72466778,
      "pages_per_visit": 6.86945757604966
    },
    {
      "global_rank": 1577,
      "category_rank": 4,
      "domain": "chinatax.gov.cn",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 23097561.0778549,
      "curr_month_visits": 23097561.0778549,
      "unique_users": 8342114.36460474,
      "pages_per_visit": 9.60055292822943
    },
    {
      "global_rank": 39051,
      "category_rank": 4,
      "domain": "govsalaries.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 1016087.82393037,
      "curr_month_visits": 1016087.82393037,
      "unique_users": 738024.869785173,
      "pages_per_visit": 7.17217210096748
    },
    {
      "global_rank": 8528,
      "category_rank": 4,
      "domain": "ustraveldocs.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 5315700.93224304,
      "curr_month_visits": 5315700.93224304,
      "unique_users": 1705255.53747464,
      "pages_per_visit": 9.65650896489918
    },
    {
      "global_rank": 2033,
      "category_rank": 4,
      "domain": "juntadeandalucia.es",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 19484377.2804306,
      "curr_month_visits": 19484377.2804306,
      "unique_users": 4550013.96151267,
      "pages_per_visit": 8.64296715519199
    },
    {
      "global_rank": 9770,
      "category_rank": 5,
      "domain": "immi.gov.au",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 3890711.46433185,
      "curr_month_visits": 3890711.46433185,
      "unique_users": 1170456.32636669,
      "pages_per_visit": 11.2250582239048
    },
    {
      "global_rank": 8627,
      "category_rank": 5,
      "domain": "army.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 6533368.52063666,
      "curr_month_visits": 6533368.52063666,
      "unique_users": 3247496.70998195,
      "pages_per_visit": 4.74882718478607
    },
    {
      "global_rank": 2868,
      "category_rank": 5,
      "domain": "garant.ru",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 17121114.6281832,
      "curr_month_visits": 17121114.6281832,
      "unique_users": 8498690.45615695,
      "pages_per_visit": 5.12257716139546
    },
    {
      "global_rank": 2998,
      "category_rank": 5,
      "domain": "passportindia.gov.in",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 11074918.3471676,
      "curr_month_visits": 11074918.3471676,
      "unique_users": 3740147.22921456,
      "pages_per_visit": 12.786498749566
    },
    {
      "global_rank": 39078,
      "category_rank": 5,
      "domain": "websleuths.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 1594344.663378,
      "curr_month_visits": 1594344.663378,
      "unique_users": 198471.545601802,
      "pages_per_visit": 6.3936198599627
    },
    {
      "global_rank": 391,
      "category_rank": 6,
      "domain": "mos.ru",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 90828217.1161141,
      "curr_month_visits": 90828217.1161141,
      "unique_users": 17393258.1180461,
      "pages_per_visit": 7.76705118966337
    },
    {
      "global_rank": 11185,
      "category_rank": 6,
      "domain": "usvisascheduling.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 3507938.30397573,
      "curr_month_visits": 3507938.30397573,
      "unique_users": 552239.726923203,
      "pages_per_visit": 11.0360274899426
    },
    {
      "global_rank": 9767,
      "category_rank": 6,
      "domain": "defence24.pl",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 8657123.57550975,
      "curr_month_visits": 8657123.57550975,
      "unique_users": 1592866.78573738,
      "pages_per_visit": 1.89391509469105
    },
    {
      "global_rank": 4093,
      "category_rank": 6,
      "domain": "arbitr.ru",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 12567803.9043747,
      "curr_month_visits": 12567803.9043747,
      "unique_users": 1926222.16772271,
      "pages_per_visit": 8.00928794550522
    },
    {
      "global_rank": 3465,
      "category_rank": 6,
      "domain": "winred.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 25210337.7664452,
      "curr_month_visits": 25210337.7664452,
      "unique_users": 7933776.28723548,
      "pages_per_visit": 2.07616152320786
    },
    {
      "global_rank": 47004,
      "category_rank": 6,
      "domain": "spotcrime.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 1309574.54883864,
      "curr_month_visits": 1309574.54883864,
      "unique_users": 703484.82688454,
      "pages_per_visit": 3.11568987315056
    },
    {
      "global_rank": 4435,
      "category_rank": 7,
      "domain": "sudrf.ru",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 14296286.2066565,
      "curr_month_visits": 14296286.2066565,
      "unique_users": 3022475.40508708,
      "pages_per_visit": 4.69423131582919
    },
    {
      "global_rank": 10102,
      "category_rank": 7,
      "domain": "tsp.gov",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 3571252.47629504,
      "curr_month_visits": 3571252.47629504,
      "unique_users": 1382766.39797347,
      "pages_per_visit": 8.56542505504119
    },
    {
      "global_rank": 13566,
      "category_rank": 7,
      "domain": "kyivindependent.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 6389184.88638371,
      "curr_month_visits": 6389184.88638371,
      "unique_users": 2620346.07203643,
      "pages_per_visit": 1.70738408229116
    },
    {
      "global_rank": 54162,
      "category_rank": 7,
      "domain": "civicshout.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 944450.810501696,
      "curr_month_visits": 944450.810501696,
      "unique_users": 197228.812929042,
      "pages_per_visit": 2.4542782642809
    },
    {
      "global_rank": 4116,
      "category_rank": 7,
      "domain": "oantagonista.com.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 26470426.1027304,
      "curr_month_visits": 26470426.1027304,
      "unique_users": 12498777.2480165,
      "pages_per_visit": 1.29211538616351
    },
    {
      "global_rank": 4517,
      "category_rank": 8,
      "domain": "pje.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 11754484.1446028,
      "curr_month_visits": 11754484.1446028,
      "unique_users": 1378388.33201952,
      "pages_per_visit": 7.30611482745892
    },
    {
      "global_rank": 10698,
      "category_rank": 8,
      "domain": "military.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 7018095.21058308,
      "curr_month_visits": 7018095.21058308,
      "unique_users": 4225756.66558902,
      "pages_per_visit": 1.76564892039271
    },
    {
      "global_rank": 16371,
      "category_rank": 8,
      "domain": "icp.gov.ae",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 3089655.85431126,
      "curr_month_visits": 3089655.85431126,
      "unique_users": 680395.009329686,
      "pages_per_visit": 6.87708416277135
    },
    {
      "global_rank": 472,
      "category_rank": 8,
      "domain": "japanpost.jp",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 97753609.2686613,
      "curr_month_visits": 97753609.2686613,
      "unique_users": 31766922.7024217,
      "pages_per_visit": 3.79354290686579
    },
    {
      "global_rank": 58477,
      "category_rank": 8,
      "domain": "law.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 1258067.65748499,
      "curr_month_visits": 1258067.65748499,
      "unique_users": 815384.385402962,
      "pages_per_visit": 1.78358752429106
    },
    {
      "global_rank": 4878,
      "category_rank": 8,
      "domain": "interno.gov.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 10393896.7698517,
      "curr_month_visits": 10393896.7698517,
      "unique_users": 5486155.14666872,
      "pages_per_visit": 4.98285606803113
    },
    {
      "global_rank": 32138,
      "category_rank": 9,
      "domain": "canadavisa.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 2234734.19513192,
      "curr_month_visits": 2234734.19513192,
      "unique_users": 1082041.01936293,
      "pages_per_visit": 2.82675853767352
    },
    {
      "global_rank": 60461,
      "category_rank": 9,
      "domain": "smartbackgroundchecks.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 686186.756943461,
      "curr_month_visits": 686186.756943461,
      "unique_users": 505049.282600073,
      "pages_per_visit": 3.9165710612527
    },
    {
      "global_rank": 6421,
      "category_rank": 9,
      "domain": "luatminhkhue.vn",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 13839265.1400361,
      "curr_month_visits": 13839265.1400361,
      "unique_users": 8934147.40437797,
      "pages_per_visit": 1.88002039992965
    },
    {
      "global_rank": 11506,
      "category_rank": 9,
      "domain": "navy.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 6139543.08117441,
      "curr_month_visits": 6139543.08117441,
      "unique_users": 2771057.71934929,
      "pages_per_visit": 4.16025490326685
    },
    {
      "global_rank": 5094,
      "category_rank": 9,
      "domain": "tse.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 33487242.7498264,
      "curr_month_visits": 33487242.7498264,
      "unique_users": 15370490.0328226,
      "pages_per_visit": 4.4293922506784
    },
    {
      "global_rank": 7057,
      "category_rank": 10,
      "domain": "redstate.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 10745001.3878852,
      "curr_month_visits": 10745001.3878852,
      "unique_users": 1298859.24230625,
      "pages_per_visit": 3.35762450537177
    },
    {
      "global_rank": 48251,
      "category_rank": 10,
      "domain": "joinsherpa.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 1577070.28637935,
      "curr_month_visits": 1577070.28637935,
      "unique_users": 970209.558093553,
      "pages_per_visit": 1.79612032283841
    },
    {
      "global_rank": 12641,
      "category_rank": 10,
      "domain": "opm.gov",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 3406134.96286725,
      "curr_month_visits": 3406134.96286725,
      "unique_users": 1977721.26375415,
      "pages_per_visit": 4.16341526592813
    },
    {
      "global_rank": 79983,
      "category_rank": 10,
      "domain": "neighbor.report",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 703410.126123793,
      "curr_month_visits": 703410.126123793,
      "unique_users": 605567.548870124,
      "pages_per_visit": 2.0030945698167
    },
    {
      "global_rank": 590,
      "category_rank": 10,
      "domain": "eci.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 37158102.7998313,
      "curr_month_visits": 37158102.7998313,
      "unique_users": 15201981.875451,
      "pages_per_visit": 8.10111715337648
    },
    {
      "global_rank": 5109,
      "category_rank": 10,
      "domain": "tjmg.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 9045200.53636122,
      "curr_month_visits": 9045200.53636122,
      "unique_users": 1180969.29480948,
      "pages_per_visit": 11.5317414842252
    },
    {
      "global_rank": 679,
      "category_rank": 11,
      "domain": "kemdikbud.go.id",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 74942667.8739656,
      "curr_month_visits": 74942667.8739656,
      "unique_users": 18438572.8981403,
      "pages_per_visit": 6.10540272420197
    },
    {
      "global_rank": 7289,
      "category_rank": 11,
      "domain": "g2b.go.kr",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 5603888.09479694,
      "curr_month_visits": 5603888.09479694,
      "unique_users": 796772.213426435,
      "pages_per_visit": 9.20633445446733
    },
    {
      "global_rank": 51191,
      "category_rank": 11,
      "domain": "paragontesting.ca",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 575028.118934805,
      "curr_month_visits": 575028.118934805,
      "unique_users": 126557.750398794,
      "pages_per_visit": 17.031946370138
    },
    {
      "global_rank": 91334,
      "category_rank": 11,
      "domain": "publicrecordreports.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 430016.378573518,
      "curr_month_visits": 430016.378573518,
      "unique_users": 361877.330963774,
      "pages_per_visit": 5.11561388460639
    },
    {
      "global_rank": 13039,
      "category_rank": 11,
      "domain": "osd.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 4538313.82732142,
      "curr_month_visits": 4538313.82732142,
      "unique_users": 1830314.16809136,
      "pages_per_visit": 4.9233622207394
    },
    {
      "global_rank": 5735,
      "category_rank": 11,
      "domain": "zakon.kz",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 14702422.0839098,
      "curr_month_visits": 14702422.0839098,
      "unique_users": 3537508.7345218,
      "pages_per_visit": 2.86931398943325
    },
    {
      "global_rank": 7877,
      "category_rank": 12,
      "domain": "ip.tv",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 8287826.29324781,
      "curr_month_visits": 8287826.29324781,
      "unique_users": 2182325.10084018,
      "pages_per_visit": 3.74841959087535
    },
    {
      "global_rank": 13688,
      "category_rank": 12,
      "domain": "af.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 4467074.73947254,
      "curr_month_visits": 4467074.73947254,
      "unique_users": 2272303.58588256,
      "pages_per_visit": 4.47828169777636
    },
    {
      "global_rank": 102367,
      "category_rank": 12,
      "domain": "cyberbackgroundchecks.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 289928.621747541,
      "curr_month_visits": 289928.621747541,
      "unique_users": 124233.626093516,
      "pages_per_visit": 9.55294941749968
    },
    {
      "global_rank": 6916,
      "category_rank": 12,
      "domain": "tjsc.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5270603.79243779,
      "curr_month_visits": 5270603.79243779,
      "unique_users": 789900.217805258,
      "pages_per_visit": 19.3702200559556
    },
    {
      "global_rank": 65723,
      "category_rank": 12,
      "domain": "cicnews.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 1055936.10584904,
      "curr_month_visits": 1055936.10584904,
      "unique_users": 541227.069574883,
      "pages_per_visit": 2.20141239791267
    },
    {
      "global_rank": 687,
      "category_rank": 12,
      "domain": "state.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 47250414.7017216,
      "curr_month_visits": 47250414.7017216,
      "unique_users": 20436722.5780644,
      "pages_per_visit": 7.69682741384712
    },
    {
      "global_rank": 7937,
      "category_rank": 13,
      "domain": "pami.org.ar",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 6005662.42338635,
      "curr_month_visits": 6005662.42338635,
      "unique_users": 1104377.45340715,
      "pages_per_visit": 10.5976322891323
    },
    {
      "global_rank": 68823,
      "category_rank": 13,
      "domain": "blsspainvisa.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 998491.023951374,
      "curr_month_visits": 998491.023951374,
      "unique_users": 391218.737580214,
      "pages_per_visit": 2.90362406671804
    },
    {
      "global_rank": 14833,
      "category_rank": 13,
      "domain": "idrw.org",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 7419426.53569644,
      "curr_month_visits": 7419426.53569644,
      "unique_users": 1205257.09993547,
      "pages_per_visit": 2.47638640779318
    },
    {
      "global_rank": 755,
      "category_rank": 13,
      "domain": "uidai.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 58689633.9333212,
      "curr_month_visits": 58689633.9333212,
      "unique_users": 15866868.0507848,
      "pages_per_visit": 6.0374554839583
    },
    {
      "global_rank": 6939,
      "category_rank": 13,
      "domain": "tjrs.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5597936.89249166,
      "curr_month_visits": 5597936.89249166,
      "unique_users": 717870.197389698,
      "pages_per_visit": 14.9572760843187
    },
    {
      "global_rank": 108797,
      "category_rank": 13,
      "domain": "arre.st",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 331933.417863023,
      "curr_month_visits": 331933.417863023,
      "unique_users": 79706.5586030258,
      "pages_per_visit": 7.27445645866979
    },
    {
      "global_rank": 7064,
      "category_rank": 14,
      "domain": "brocardi.it",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 10352650.1612039,
      "curr_month_visits": 10352650.1612039,
      "unique_users": 4888469.67716561,
      "pages_per_visit": 2.3022652725441
    },
    {
      "global_rank": 18245,
      "category_rank": 14,
      "domain": "dfas.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 3204666.25828428,
      "curr_month_visits": 3204666.25828428,
      "unique_users": 1431816.24212764,
      "pages_per_visit": 4.29154254772808
    },
    {
      "global_rank": 113115,
      "category_rank": 14,
      "domain": "rainn.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 489547.930936049,
      "curr_month_visits": 489547.930936049,
      "unique_users": 317013.299514317,
      "pages_per_visit": 1.84386455920746
    },
    {
      "global_rank": 8184,
      "category_rank": 14,
      "domain": "officestation.jp",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 4947989.05531347,
      "curr_month_visits": 4947989.05531347,
      "unique_users": 1542469.26786529,
      "pages_per_visit": 6.00177882682604
    },
    {
      "global_rank": 764,
      "category_rank": 14,
      "domain": "fazenda.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 53741539.0986955,
      "curr_month_visits": 53741539.0986955,
      "unique_users": 13258728.2098426,
      "pages_per_visit": 6.79618139201746
    },
    {
      "global_rank": 70335,
      "category_rank": 14,
      "domain": "dmsu.gov.ua",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 1054909.75833097,
      "curr_month_visits": 1054909.75833097,
      "unique_users": 333932.735512533,
      "pages_per_visit": 3.10585390397149
    },
    {
      "global_rank": 70376,
      "category_rank": 15,
      "domain": "visaguide.world",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 1083639.66010077,
      "curr_month_visits": 1083639.66010077,
      "unique_users": 647995.418013781,
      "pages_per_visit": 1.86746540717484
    },
    {
      "global_rank": 8590,
      "category_rank": 15,
      "domain": "skatteverket.se",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 5703282.57636824,
      "curr_month_visits": 5703282.57636824,
      "unique_users": 2379865.50418721,
      "pages_per_visit": 7.07731521282168
    },
    {
      "global_rank": 774,
      "category_rank": 15,
      "domain": "ssa.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 38789397.3417144,
      "curr_month_visits": 38789397.3417144,
      "unique_users": 19142480.424578,
      "pages_per_visit": 8.36904157860186
    },
    {
      "global_rank": 20154,
      "category_rank": 15,
      "domain": "fab.mil.br",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 2902353.76202661,
      "curr_month_visits": 2902353.76202661,
      "unique_users": 1071301.72471065,
      "pages_per_visit": 3.54780181401718
    },
    {
      "global_rank": 7172,
      "category_rank": 15,
      "domain": "roaep.ro",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3033610.61236998,
      "curr_month_visits": 3033610.61236998,
      "unique_users": 1047115.83722811,
      "pages_per_visit": 5.20087511156767
    },
    {
      "global_rank": 114428,
      "category_rank": 15,
      "domain": "publicrecordscenter.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 574450.880605525,
      "curr_month_visits": 574450.880605525,
      "unique_users": 528342.354409147,
      "pages_per_visit": 1.41184469540907
    },
    {
      "global_rank": 7183,
      "category_rank": 16,
      "domain": "gov.ro",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 9015532.99281429,
      "curr_month_visits": 9015532.99281429,
      "unique_users": 2657358.36014804,
      "pages_per_visit": 4.38774669434101
    },
    {
      "global_rank": 73792,
      "category_rank": 16,
      "domain": "ric.com.br",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 1274469.73106508,
      "curr_month_visits": 1274469.73106508,
      "unique_users": 757044.592802981,
      "pages_per_visit": 1.31021150454843
    },
    {
      "global_rank": 114734,
      "category_rank": 16,
      "domain": "police.uk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 431210.011825579,
      "curr_month_visits": 431210.011825579,
      "unique_users": 312156.994744715,
      "pages_per_visit": 3.25049342453923
    },
    {
      "global_rank": 9120,
      "category_rank": 16,
      "domain": "econodata.com.br",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 9408049.06122419,
      "curr_month_visits": 9408049.06122419,
      "unique_users": 6458734.0616784,
      "pages_per_visit": 1.97874842026376
    },
    {
      "global_rank": 21244,
      "category_rank": 16,
      "domain": "understandingwar.org",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 4093532.70347495,
      "curr_month_visits": 4093532.70347495,
      "unique_users": 1362239.93731656,
      "pages_per_visit": 2.3732156319886
    },
    {
      "global_rank": 811,
      "category_rank": 16,
      "domain": "parivahan.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 34541801.4068316,
      "curr_month_visits": 34541801.4068316,
      "unique_users": 11546672.7075111,
      "pages_per_visit": 12.4232084193531
    },
    {
      "global_rank": 76541,
      "category_rank": 17,
      "domain": "esdc.gc.ca",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 725627.555651517,
      "curr_month_visits": 725627.555651517,
      "unique_users": 347994.811358911,
      "pages_per_visit": 4.18739018515449
    },
    {
      "global_rank": 22148,
      "category_rank": 17,
      "domain": "apps.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 2459391.72002598,
      "curr_month_visits": 2459391.72002598,
      "unique_users": 458845.339219447,
      "pages_per_visit": 7.70513048224075
    },
    {
      "global_rank": 122498,
      "category_rank": 17,
      "domain": "primecrime.ru",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 283055.931964619,
      "curr_month_visits": 283055.931964619,
      "unique_users": 93102.463411104,
      "pages_per_visit": 5.8543279380462
    },
    {
      "global_rank": 9421,
      "category_rank": 17,
      "domain": "poliziadistato.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 6592378.44088794,
      "curr_month_visits": 6592378.44088794,
      "unique_users": 2243311.75750099,
      "pages_per_visit": 5.323952294457
    },
    {
      "global_rank": 7347,
      "category_rank": 17,
      "domain": "trf1.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 6348191.06413752,
      "curr_month_visits": 6348191.06413752,
      "unique_users": 1007406.57518799,
      "pages_per_visit": 9.97109087424789
    },
    {
      "global_rank": 852,
      "category_rank": 17,
      "domain": "nalog.ru",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 42920608.6257355,
      "curr_month_visits": 42920608.6257355,
      "unique_users": 16001076.8870802,
      "pages_per_visit": 5.78479416817293
    },
    {
      "global_rank": 7571,
      "category_rank": 18,
      "domain": "westlaw.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 6241388.15434368,
      "curr_month_visits": 6241388.15434368,
      "unique_users": 890059.061333095,
      "pages_per_visit": 11.0610760691995
    },
    {
      "global_rank": 896,
      "category_rank": 18,
      "domain": "canada.ca",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 54284314.8997635,
      "curr_month_visits": 54284314.8997635,
      "unique_users": 18973433.8288354,
      "pages_per_visit": 3.95791819937357
    },
    {
      "global_rank": 93131,
      "category_rank": 18,
      "domain": "visajourney.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 608824.181680146,
      "curr_month_visits": 608824.181680146,
      "unique_users": 325394.778933257,
      "pages_per_visit": 2.74277643587105
    },
    {
      "global_rank": 9777,
      "category_rank": 18,
      "domain": "tjba.jus.br",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 5269422.1116282,
      "curr_month_visits": 5269422.1116282,
      "unique_users": 599043.964579265,
      "pages_per_visit": 9.07294071946114
    },
    {
      "global_rank": 23928,
      "category_rank": 18,
      "domain": "news.va.gov",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1639472.15391568,
      "curr_month_visits": 1639472.15391568,
      "unique_users": 1004387.71197801,
      "pages_per_visit": 1.65907696454077
    },
    {
      "global_rank": 127365,
      "category_rank": 18,
      "domain": "fintel.com.br",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 233737.195079517,
      "curr_month_visits": 233737.195079517,
      "unique_users": 93753.4662510281,
      "pages_per_visit": 8.23661868315377
    },
    {
      "global_rank": 24597,
      "category_rank": 19,
      "domain": "defencepension.gov.in",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1464943.93522564,
      "curr_month_visits": 1464943.93522564,
      "unique_users": 575571.069553653,
      "pages_per_visit": 6.52839264127423
    },
    {
      "global_rank": 7678,
      "category_rank": 19,
      "domain": "tjrj.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 6994595.17343379,
      "curr_month_visits": 6994595.17343379,
      "unique_users": 1087767.67357836,
      "pages_per_visit": 8.17991010058868
    },
    {
      "global_rank": 95068,
      "category_rank": 19,
      "domain": "immigrationnewscanada.ca",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 772406.234017365,
      "curr_month_visits": 772406.234017365,
      "unique_users": 428161.330793142,
      "pages_per_visit": 1.71539788193135
    },
    {
      "global_rank": 9822,
      "category_rank": 19,
      "domain": "nso.ru",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 6276696.46646787,
      "curr_month_visits": 6276696.46646787,
      "unique_users": 926304.019741428,
      "pages_per_visit": 5.65752340160504
    },
    {
      "global_rank": 913,
      "category_rank": 19,
      "domain": "europa.eu",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 50229131.2570512,
      "curr_month_visits": 50229131.2570512,
      "unique_users": 25364746.731808,
      "pages_per_visit": 4.38188536067295
    },
    {
      "global_rank": 141783,
      "category_rank": 19,
      "domain": "innocenceproject.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 982308.875370714,
      "curr_month_visits": 982308.875370714,
      "unique_users": 668220.08758069,
      "pages_per_visit": 2.14752389041213
    },
    {
      "global_rank": 7843,
      "category_rank": 20,
      "domain": "tjdft.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 7305900.28162213,
      "curr_month_visits": 7305900.28162213,
      "unique_users": 2680944.35764042,
      "pages_per_visit": 7.06766594912879
    },
    {
      "global_rank": 10641,
      "category_rank": 20,
      "domain": "mahkamahagung.go.id",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 5928405.72748965,
      "curr_month_visits": 5928405.72748965,
      "unique_users": 1421607.86102387,
      "pages_per_visit": 5.74705932689994
    },
    {
      "global_rank": 25396,
      "category_rank": 20,
      "domain": "defense.gov",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 3032479.55723492,
      "curr_month_visits": 3032479.55723492,
      "unique_users": 2118379.46624177,
      "pages_per_visit": 1.84146017647994
    },
    {
      "global_rank": 102467,
      "category_rank": 20,
      "domain": "blsindia-canada.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 493692.188792852,
      "curr_month_visits": 493692.188792852,
      "unique_users": 153719.597798672,
      "pages_per_visit": 3.80364210361048
    },
    {
      "global_rank": 151735,
      "category_rank": 20,
      "domain": "cocofinder.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 218783.266107873,
      "curr_month_visits": 218783.266107873,
      "unique_users": 171100.870330834,
      "pages_per_visit": 3.11126405523814
    },
    {
      "global_rank": 920,
      "category_rank": 20,
      "domain": "meb.gov.tr",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 41841436.9883542,
      "curr_month_visits": 41841436.9883542,
      "unique_users": 11154137.9792095,
      "pages_per_visit": 6.06375553186438
    },
    {
      "global_rank": 105017,
      "category_rank": 21,
      "domain": "migrationpolicy.org",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 547534.763963663,
      "curr_month_visits": 547534.763963663,
      "unique_users": 360925.236236953,
      "pages_per_visit": 1.63735955606202
    },
    {
      "global_rank": 7989,
      "category_rank": 21,
      "domain": "court.gov.cn",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 6195381.53618225,
      "curr_month_visits": 6195381.53618225,
      "unique_users": 2507163.11048381,
      "pages_per_visit": 5.66251884318941
    },
    {
      "global_rank": 27632,
      "category_rank": 21,
      "domain": "itbpolice.nic.in",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1596906.09495683,
      "curr_month_visits": 1596906.09495683,
      "unique_users": 554136.742901898,
      "pages_per_visit": 6.54158486727011
    },
    {
      "global_rank": 158627,
      "category_rank": 21,
      "domain": "mugshotlook.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 270882.244233026,
      "curr_month_visits": 270882.244233026,
      "unique_users": 211508.345463613,
      "pages_per_visit": 3.55141224363505
    },
    {
      "global_rank": 11032,
      "category_rank": 21,
      "domain": "masothue.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 6760473.05517215,
      "curr_month_visits": 6760473.05517215,
      "unique_users": 2437703.70594431,
      "pages_per_visit": 2.86475935636083
    },
    {
      "global_rank": 956,
      "category_rank": 21,
      "domain": "270towin.com",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 35807651.2992642,
      "curr_month_visits": 35807651.2992642,
      "unique_users": 16349735.6833617,
      "pages_per_visit": 2.51840336982593
    },
    {
      "global_rank": 113457,
      "category_rank": 22,
      "domain": "nyidanmark.dk",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 361155.075882067,
      "curr_month_visits": 361155.075882067,
      "unique_users": 167818.298648874,
      "pages_per_visit": 5.37052138566414
    },
    {
      "global_rank": 167578,
      "category_rank": 22,
      "domain": "eji.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 317236.064192121,
      "curr_month_visits": 317236.064192121,
      "unique_users": 194695.988155051,
      "pages_per_visit": 2.21768658791422
    },
    {
      "global_rank": 999,
      "category_rank": 22,
      "domain": "thuvienphapluat.vn",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 53070979.3763588,
      "curr_month_visits": 53070979.3763588,
      "unique_users": 25661236.3127268,
      "pages_per_visit": 2.90504633202212
    },
    {
      "global_rank": 29936,
      "category_rank": 22,
      "domain": "gsa.gov",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1977868.31463568,
      "curr_month_visits": 1977868.31463568,
      "unique_users": 1126711.21858136,
      "pages_per_visit": 3.87504201166243
    },
    {
      "global_rank": 7996,
      "category_rank": 22,
      "domain": "legifrance.gouv.fr",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 9027498.92309923,
      "curr_month_visits": 9027498.92309923,
      "unique_users": 4218405.05739973,
      "pages_per_visit": 2.60260797368508
    },
    {
      "global_rank": 11449,
      "category_rank": 22,
      "domain": "lto.gov.ph",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 4100635.66346827,
      "curr_month_visits": 4100635.66346827,
      "unique_users": 2169099.94839477,
      "pages_per_visit": 7.88936586353697
    },
    {
      "global_rank": 8110,
      "category_rank": 23,
      "domain": "uscourts.gov",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 6795785.68913592,
      "curr_month_visits": 6795785.68913592,
      "unique_users": 3105352.4149096,
      "pages_per_visit": 6.08169134354895
    },
    {
      "global_rank": 173027,
      "category_rank": 23,
      "domain": "americafirstpolicy.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 140198.212922618,
      "curr_month_visits": 140198.212922618,
      "unique_users": 88977.2824791317,
      "pages_per_visit": 2.57016921097109
    },
    {
      "global_rank": 115077,
      "category_rank": 23,
      "domain": "skillselect.gov.au",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 215249.893569511,
      "curr_month_visits": 215249.893569511,
      "unique_users": 86815.3868823144,
      "pages_per_visit": 12.4468737005743
    },
    {
      "global_rank": 11461,
      "category_rank": 23,
      "domain": "camara.leg.br",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 7051500.4745932,
      "curr_month_visits": 7051500.4745932,
      "unique_users": 4528694.4702282,
      "pages_per_visit": 2.16383155752701
    },
    {
      "global_rank": 1039,
      "category_rank": 23,
      "domain": "satta-king-fast.com",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 61061522.3153825,
      "curr_month_visits": 61061522.3153825,
      "unique_users": 3065319.06282359,
      "pages_per_visit": 2.30234320811167
    },
    {
      "global_rank": 30355,
      "category_rank": 23,
      "domain": "sarkarinetwork.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 3187946.36354326,
      "curr_month_visits": 3187946.36354326,
      "unique_users": 513300.548081913,
      "pages_per_visit": 2.52965910519119
    },
    {
      "global_rank": 1051,
      "category_rank": 24,
      "domain": "mhlw.go.jp",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 47383173.9589393,
      "curr_month_visits": 47383173.9589393,
      "unique_users": 18534981.0796393,
      "pages_per_visit": 4.64548095762649
    },
    {
      "global_rank": 11698,
      "category_rank": 24,
      "domain": "vote.org",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 5773865.12603688,
      "curr_month_visits": 5773865.12603688,
      "unique_users": 4618628.21216004,
      "pages_per_visit": 1.77327879461119
    },
    {
      "global_rank": 182366,
      "category_rank": 24,
      "domain": "crimemapping.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 291333.845308193,
      "curr_month_visits": 291333.845308193,
      "unique_users": 179877.568838575,
      "pages_per_visit": 2.43164830028048
    },
    {
      "global_rank": 30564,
      "category_rank": 24,
      "domain": "miluim.idf.il",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1479209.38243125,
      "curr_month_visits": 1479209.38243125,
      "unique_users": 330901.758003551,
      "pages_per_visit": 6.20760852469801
    },
    {
      "global_rank": 8168,
      "category_rank": 24,
      "domain": "clio.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 6028597.4035321,
      "curr_month_visits": 6028597.4035321,
      "unique_users": 785205.741762482,
      "pages_per_visit": 12.4983868507188
    },
    {
      "global_rank": 115247,
      "category_rank": 24,
      "domain": "iasservices.org.uk",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 546040.268193877,
      "curr_month_visits": 546040.268193877,
      "unique_users": 348318.742819615,
      "pages_per_visit": 1.51445563527643
    },
    {
      "global_rank": 11999,
      "category_rank": 25,
      "domain": "kojinbango-card.go.jp",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 3832499.13597574,
      "curr_month_visits": 3832499.13597574,
      "unique_users": 2294512.76890815,
      "pages_per_visit": 4.57684109359887
    },
    {
      "global_rank": 30862,
      "category_rank": 25,
      "domain": "vettix.org",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1776465.3956292,
      "curr_month_visits": 1776465.3956292,
      "unique_users": 577812.757156243,
      "pages_per_visit": 5.57595936473737
    },
    {
      "global_rank": 189732,
      "category_rank": 25,
      "domain": "themarshallproject.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 377233.977280063,
      "curr_month_visits": 377233.977280063,
      "unique_users": 266190.905643019,
      "pages_per_visit": 1.55226561692543
    },
    {
      "global_rank": 8562,
      "category_rank": 25,
      "domain": "9111.ru",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5762593.46135985,
      "curr_month_visits": 5762593.46135985,
      "unique_users": 2895892.4249836,
      "pages_per_visit": 5.14831034610347
    },
    {
      "global_rank": 125978,
      "category_rank": 25,
      "domain": "enterfinland.fi",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 353254.149221117,
      "curr_month_visits": 353254.149221117,
      "unique_users": 116475.876656667,
      "pages_per_visit": 5.82399335857545
    },
    {
      "global_rank": 1095,
      "category_rank": 25,
      "domain": "gst.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 29935441.9122912,
      "curr_month_visits": 29935441.9122912,
      "unique_users": 5193179.29634881,
      "pages_per_visit": 12.6450475313419
    },
    {
      "global_rank": 8637,
      "category_rank": 26,
      "domain": "giustizia.it",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 6891447.85860241,
      "curr_month_visits": 6891447.85860241,
      "unique_users": 2593117.59119283,
      "pages_per_visit": 6.68032195808668
    },
    {
      "global_rank": 1107,
      "category_rank": 26,
      "domain": "mg.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 39056834.2360334,
      "curr_month_visits": 39056834.2360334,
      "unique_users": 7739195.92525761,
      "pages_per_visit": 7.60996663692488
    },
    {
      "global_rank": 194509,
      "category_rank": 26,
      "domain": "mugshots.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 197684.39278362,
      "curr_month_visits": 197684.39278362,
      "unique_users": 116350.634983419,
      "pages_per_visit": 3.69178073209271
    },
    {
      "global_rank": 33780,
      "category_rank": 26,
      "domain": "health.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1489720.99355511,
      "curr_month_visits": 1489720.99355511,
      "unique_users": 683517.932590413,
      "pages_per_visit": 5.4762918724895
    },
    {
      "global_rank": 12842,
      "category_rank": 26,
      "domain": "escavador.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 6524336.89447654,
      "curr_month_visits": 6524336.89447654,
      "unique_users": 4240527.99073936,
      "pages_per_visit": 1.94977798416628
    },
    {
      "global_rank": 126080,
      "category_rank": 26,
      "domain": "migri.fi",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 385424.832974218,
      "curr_month_visits": 385424.832974218,
      "unique_users": 175452.927982019,
      "pages_per_visit": 3.58831840088946
    },
    {
      "global_rank": 34819,
      "category_rank": 27,
      "domain": "mynavyexchange.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 936511.380267616,
      "curr_month_visits": 936511.380267616,
      "unique_users": 401122.924986753,
      "pages_per_visit": 6.34429689324507
    },
    {
      "global_rank": 13425,
      "category_rank": 27,
      "domain": "iros.go.kr",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2646614.58469434,
      "curr_month_visits": 2646614.58469434,
      "unique_users": 966070.920000376,
      "pages_per_visit": 13.137577079723
    },
    {
      "global_rank": 8804,
      "category_rank": 27,
      "domain": "law.go.kr",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 6520863.22917109,
      "curr_month_visits": 6520863.22917109,
      "unique_users": 1953686.5314022,
      "pages_per_visit": 4.60503065666394
    },
    {
      "global_rank": 195902,
      "category_rank": 27,
      "domain": "asacp.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 211577.777684982,
      "curr_month_visits": 211577.777684982,
      "unique_users": 133491.041743531,
      "pages_per_visit": 1.68075358878405
    },
    {
      "global_rank": 130670,
      "category_rank": 27,
      "domain": "celpip.ca",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 416472.265196188,
      "curr_month_visits": 416472.265196188,
      "unique_users": 172478.19367646,
      "pages_per_visit": 2.24669518584607
    },
    {
      "global_rank": 1115,
      "category_rank": 27,
      "domain": "royalmail.com",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 46787982.3422882,
      "curr_month_visits": 46787982.3422882,
      "unique_users": 14143451.9519482,
      "pages_per_visit": 4.09643703378527
    },
    {
      "global_rank": 35142,
      "category_rank": 28,
      "domain": "mcas-gov.us",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1276246.17072557,
      "curr_month_visits": 1276246.17072557,
      "unique_users": 134738.866226626,
      "pages_per_visit": 11.8251591259495
    },
    {
      "global_rank": 1150,
      "category_rank": 28,
      "domain": "karnataka.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 25883630.1271163,
      "curr_month_visits": 25883630.1271163,
      "unique_users": 4818140.68595834,
      "pages_per_visit": 12.342361758293
    },
    {
      "global_rank": 8950,
      "category_rank": 28,
      "domain": "justia.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 9341957.91907181,
      "curr_month_visits": 9341957.91907181,
      "unique_users": 6123606.73444263,
      "pages_per_visit": 2.07284450914208
    },
    {
      "global_rank": 211091,
      "category_rank": 28,
      "domain": "crimestoppers-uk.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 177966.317974085,
      "curr_month_visits": 177966.317974085,
      "unique_users": 117030.803707409,
      "pages_per_visit": 3.38930326067656
    },
    {
      "global_rank": 131122,
      "category_rank": 28,
      "domain": "americanimmigrationcouncil.org",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 357498.114556088,
      "curr_month_visits": 357498.114556088,
      "unique_users": 248463.953105161,
      "pages_per_visit": 1.66184572170564
    },
    {
      "global_rank": 13439,
      "category_rank": 28,
      "domain": "nzpost.co.nz",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 5275841.12250272,
      "curr_month_visits": 5275841.12250272,
      "unique_users": 1392817.04415887,
      "pages_per_visit": 3.20465960136645
    },
    {
      "global_rank": 13709,
      "category_rank": 29,
      "domain": "mininterno.net",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2749350.55068441,
      "curr_month_visits": 2749350.55068441,
      "unique_users": 492828.318879799,
      "pages_per_visit": 13.5184308517674
    },
    {
      "global_rank": 1161,
      "category_rank": 29,
      "domain": "epfindia.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 26586263.1394364,
      "curr_month_visits": 26586263.1394364,
      "unique_users": 6852109.30424214,
      "pages_per_visit": 10.6558338687529
    },
    {
      "global_rank": 218101,
      "category_rank": 29,
      "domain": "courtrecords.us",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 124291.40685646,
      "curr_month_visits": 124291.40685646,
      "unique_users": 87419.7471896564,
      "pages_per_visit": 7.68353348454506
    },
    {
      "global_rank": 9199,
      "category_rank": 29,
      "domain": "justice.gov",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 8931436.08046929,
      "curr_month_visits": 8931436.08046929,
      "unique_users": 5656149.54675629,
      "pages_per_visit": 1.95752090998384
    },
    {
      "global_rank": 135828,
      "category_rank": 29,
      "domain": "usafis.org",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 406528.686191758,
      "curr_month_visits": 406528.686191758,
      "unique_users": 231219.812172142,
      "pages_per_visit": 2.24965794532797
    },
    {
      "global_rank": 35502,
      "category_rank": 29,
      "domain": "uaa.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1429800.30795689,
      "curr_month_visits": 1429800.30795689,
      "unique_users": 269398.858022903,
      "pages_per_visit": 8.76418728281891
    },
    {
      "global_rank": 9498,
      "category_rank": 30,
      "domain": "lexis.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 4087262.14297681,
      "curr_month_visits": 4087262.14297681,
      "unique_users": 608549.515754354,
      "pages_per_visit": 14.5054046753355
    },
    {
      "global_rank": 137429,
      "category_rank": 30,
      "domain": "visahq.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 484570.487433004,
      "curr_month_visits": 484570.487433004,
      "unique_users": 266166.140864253,
      "pages_per_visit": 2.03048384052127
    },
    {
      "global_rank": 13973,
      "category_rank": 30,
      "domain": "cntd.ru",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 6021109.12499359,
      "curr_month_visits": 6021109.12499359,
      "unique_users": 3078151.00815449,
      "pages_per_visit": 1.92347301479872
    },
    {
      "global_rank": 229510,
      "category_rank": 30,
      "domain": "mspsor.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 106391.831021696,
      "curr_month_visits": 106391.831021696,
      "unique_users": 68461.0170558355,
      "pages_per_visit": 7.28155722579599
    },
    {
      "global_rank": 35924,
      "category_rank": 30,
      "domain": "benefeds.gov",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 453284.923448565,
      "curr_month_visits": 453284.923448565,
      "unique_users": 241343.860289398,
      "pages_per_visit": 10.3327233920671
    },
    {
      "global_rank": 1225,
      "category_rank": 30,
      "domain": "my.gov.au",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 31557278.2815955,
      "curr_month_visits": 31557278.2815955,
      "unique_users": 10191144.5107769,
      "pages_per_visit": 8.16415354004702
    },
    {
      "global_rank": 9671,
      "category_rank": 31,
      "domain": "sp1-brevo.net",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 9227181.26640299,
      "curr_month_visits": 9227181.26640299,
      "unique_users": 6095694.02116524,
      "pages_per_visit": 1.51372511505351
    },
    {
      "global_rank": 16901,
      "category_rank": 31,
      "domain": "agenziaentrateriscossione.gov.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2236729.94111123,
      "curr_month_visits": 2236729.94111123,
      "unique_users": 1047100.3346278,
      "pages_per_visit": 10.3748696074285
    },
    {
      "global_rank": 150187,
      "category_rank": 31,
      "domain": "immigration.ca",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 405591.054032764,
      "curr_month_visits": 405591.054032764,
      "unique_users": 240896.626119323,
      "pages_per_visit": 1.93236202690381
    },
    {
      "global_rank": 1256,
      "category_rank": 31,
      "domain": "rajasthan.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 25966911.623729,
      "curr_month_visits": 25966911.623729,
      "unique_users": 4795146.6388638,
      "pages_per_visit": 14.6035502358798
    },
    {
      "global_rank": 240080,
      "category_rank": 31,
      "domain": "iwf.org.uk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 150330.635729531,
      "curr_month_visits": 150330.635729531,
      "unique_users": 81914.4554526142,
      "pages_per_visit": 2.84422178330462
    },
    {
      "global_rank": 37607,
      "category_rank": 31,
      "domain": "marinha.mil.br",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1855755.49391234,
      "curr_month_visits": 1855755.49391234,
      "unique_users": 733035.270641219,
      "pages_per_visit": 3.20674463600916
    },
    {
      "global_rank": 9717,
      "category_rank": 32,
      "domain": "sudact.ru",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 6558220.76318927,
      "curr_month_visits": 6558220.76318927,
      "unique_users": 3585465.16263959,
      "pages_per_visit": 2.78680871358321
    },
    {
      "global_rank": 40685,
      "category_rank": 32,
      "domain": "cisf.gov.in",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1590330.24292902,
      "curr_month_visits": 1590330.24292902,
      "unique_users": 559162.41508635,
      "pages_per_visit": 11.5114427567454
    },
    {
      "global_rank": 244677,
      "category_rank": 32,
      "domain": "offenderradar.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 220146.158308093,
      "curr_month_visits": 220146.158308093,
      "unique_users": 91090.7710637058,
      "pages_per_visit": 2.08120904354928
    },
    {
      "global_rank": 151261,
      "category_rank": 32,
      "domain": "expatforum.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 396179.78132235,
      "curr_month_visits": 396179.78132235,
      "unique_users": 217637.792872361,
      "pages_per_visit": 2.47831921620179
    },
    {
      "global_rank": 1260,
      "category_rank": 32,
      "domain": "indiapost.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 35404677.0416951,
      "curr_month_visits": 35404677.0416951,
      "unique_users": 13919466.3536684,
      "pages_per_visit": 4.24638843100511
    },
    {
      "global_rank": 17026,
      "category_rank": 32,
      "domain": "ftc.gov",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 4747663.17631582,
      "curr_month_visits": 4747663.17631582,
      "unique_users": 3500781.33198721,
      "pages_per_visit": 1.99872456418756
    },
    {
      "global_rank": 17063,
      "category_rank": 33,
      "domain": "fedresurs.ru",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 3037577.03249934,
      "curr_month_visits": 3037577.03249934,
      "unique_users": 756857.762014045,
      "pages_per_visit": 7.15794520054647
    },
    {
      "global_rank": 152214,
      "category_rank": 33,
      "domain": "visaenvoy.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 359175.50374592,
      "curr_month_visits": 359175.50374592,
      "unique_users": 211999.822846539,
      "pages_per_visit": 1.93169281705695
    },
    {
      "global_rank": 1263,
      "category_rank": 33,
      "domain": "correios.com.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 47145743.3357305,
      "curr_month_visits": 47145743.3357305,
      "unique_users": 14047274.5148537,
      "pages_per_visit": 3.13454374782511
    },
    {
      "global_rank": 245043,
      "category_rank": 33,
      "domain": "namus.gov",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 127467.956655149,
      "curr_month_visits": 127467.956655149,
      "unique_users": 70569.2303094628,
      "pages_per_visit": 8.28264654248741
    },
    {
      "global_rank": 41272,
      "category_rank": 33,
      "domain": "jandarma.gov.tr",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1799410.09458874,
      "curr_month_visits": 1799410.09458874,
      "unique_users": 754076.261265543,
      "pages_per_visit": 3.49806130882279
    },
    {
      "global_rank": 10071,
      "category_rank": 33,
      "domain": "trf3.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5604974.8309524,
      "curr_month_visits": 5604974.8309524,
      "unique_users": 922227.14874117,
      "pages_per_visit": 7.52404345159415
    },
    {
      "global_rank": 41333,
      "category_rank": 34,
      "domain": "dubaipolice.gov.ae",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1399792.58318624,
      "curr_month_visits": 1399792.58318624,
      "unique_users": 586488.87772547,
      "pages_per_visit": 3.6626901137564
    },
    {
      "global_rank": 255884,
      "category_rank": 34,
      "domain": "casebook.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 93557.5306577992,
      "curr_month_visits": 93557.5306577992,
      "unique_users": 35433.8650534908,
      "pages_per_visit": 5.98867871598511
    },
    {
      "global_rank": 17350,
      "category_rank": 34,
      "domain": "comune.roma.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2429158.9609055,
      "curr_month_visits": 2429158.9609055,
      "unique_users": 944906.0116697,
      "pages_per_visit": 8.55762331745206
    },
    {
      "global_rank": 155192,
      "category_rank": 34,
      "domain": "citizenpath.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 339615.507523671,
      "curr_month_visits": 339615.507523671,
      "unique_users": 221593.162741207,
      "pages_per_visit": 1.68470539077473
    },
    {
      "global_rank": 1270,
      "category_rank": 34,
      "domain": "inps.it",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 23036256.7405057,
      "curr_month_visits": 23036256.7405057,
      "unique_users": 7320946.95599943,
      "pages_per_visit": 11.6292121911707
    },
    {
      "global_rank": 10084,
      "category_rank": 34,
      "domain": "metaso.cn",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 7116732.1989608,
      "curr_month_visits": 7116732.1989608,
      "unique_users": 1607588.28719601,
      "pages_per_visit": 3.00938400493334
    },
    {
      "global_rank": 17463,
      "category_rank": 35,
      "domain": "inpa.gov.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2737924.19883871,
      "curr_month_visits": 2737924.19883871,
      "unique_users": 912776.223023569,
      "pages_per_visit": 6.65304321011168
    },
    {
      "global_rank": 10649,
      "category_rank": 35,
      "domain": "ird.govt.nz",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3839708.69939184,
      "curr_month_visits": 3839708.69939184,
      "unique_users": 1461630.94306656,
      "pages_per_visit": 9.37270940110538
    },
    {
      "global_rank": 157661,
      "category_rank": 35,
      "domain": "usavisaconsultant.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 399269.025135787,
      "curr_month_visits": 399269.025135787,
      "unique_users": 147597.006141266,
      "pages_per_visit": 2.36825263450085
    },
    {
      "global_rank": 256139,
      "category_rank": 35,
      "domain": "crimewatch.net",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 158362.682889985,
      "curr_month_visits": 158362.682889985,
      "unique_users": 96263.3016445067,
      "pages_per_visit": 4.13042581687628
    },
    {
      "global_rank": 1304,
      "category_rank": 35,
      "domain": "sat.gob.mx",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 25046886.8340013,
      "curr_month_visits": 25046886.8340013,
      "unique_users": 6291484.13210983,
      "pages_per_visit": 12.4603111219174
    },
    {
      "global_rank": 41689,
      "category_rank": 35,
      "domain": "goarmy.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1494835.05710551,
      "curr_month_visits": 1494835.05710551,
      "unique_users": 986758.223970669,
      "pages_per_visit": 2.83871281520576
    },
    {
      "global_rank": 41760,
      "category_rank": 36,
      "domain": "navy.mi.th",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1551768.65109055,
      "curr_month_visits": 1551768.65109055,
      "unique_users": 381042.00853455,
      "pages_per_visit": 4.61482463700032
    },
    {
      "global_rank": 256518,
      "category_rank": 36,
      "domain": "bizprofile.net",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 280942.711131473,
      "curr_month_visits": 280942.711131473,
      "unique_users": 197624.393368266,
      "pages_per_visit": 1.57126166173103
    },
    {
      "global_rank": 18311,
      "category_rank": 36,
      "domain": "trt15.jus.br",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2440525.22809683,
      "curr_month_visits": 2440525.22809683,
      "unique_users": 380901.008810409,
      "pages_per_visit": 11.438116102855
    },
    {
      "global_rank": 161143,
      "category_rank": 36,
      "domain": "immihelp.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 382451.031427325,
      "curr_month_visits": 382451.031427325,
      "unique_users": 233542.679077907,
      "pages_per_visit": 1.87621972910868
    },
    {
      "global_rank": 10701,
      "category_rank": 36,
      "domain": "anaf.ro",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 4205823.73864144,
      "curr_month_visits": 4205823.73864144,
      "unique_users": 918627.986401197,
      "pages_per_visit": 10.3660108725366
    },
    {
      "global_rank": 1371,
      "category_rank": 36,
      "domain": "impots.gouv.fr",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 31574080.6665781,
      "curr_month_visits": 31574080.6665781,
      "unique_users": 13612638.6427038,
      "pages_per_visit": 6.5444174742261
    },
    {
      "global_rank": 10785,
      "category_rank": 37,
      "domain": "sec.gov",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5845920.87744063,
      "curr_month_visits": 5845920.87744063,
      "unique_users": 2772199.7112752,
      "pages_per_visit": 3.75545144553454
    },
    {
      "global_rank": 1435,
      "category_rank": 37,
      "domain": "gob.mx",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 47203322.3585886,
      "curr_month_visits": 47203322.3585886,
      "unique_users": 21902980.3703238,
      "pages_per_visit": 2.15485042283835
    },
    {
      "global_rank": 260322,
      "category_rank": 37,
      "domain": "amnesty.it",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 222871.262585149,
      "curr_month_visits": 222871.262585149,
      "unique_users": 155875.88453308,
      "pages_per_visit": 1.95555016471295
    },
    {
      "global_rank": 41993,
      "category_rank": 37,
      "domain": "usmc.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 783723.956712463,
      "curr_month_visits": 783723.956712463,
      "unique_users": 158036.250421771,
      "pages_per_visit": 13.345460577128
    },
    {
      "global_rank": 167517,
      "category_rank": 37,
      "domain": "checkvisaslots.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 299069.032694188,
      "curr_month_visits": 299069.032694188,
      "unique_users": 80796.0789367713,
      "pages_per_visit": 3.02134959408137
    },
    {
      "global_rank": 18443,
      "category_rank": 37,
      "domain": "defense.gouv.fr",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2932253.89165694,
      "curr_month_visits": 2932253.89165694,
      "unique_users": 1429792.11997633,
      "pages_per_visit": 4.4850416396746
    },
    {
      "global_rank": 10947,
      "category_rank": 38,
      "domain": "gesetze-im-internet.de",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5463406.37549291,
      "curr_month_visits": 5463406.37549291,
      "unique_users": 2742820.10313604,
      "pages_per_visit": 3.5515273809164
    },
    {
      "global_rank": 42088,
      "category_rank": 38,
      "domain": "joinindianarmy.nic.in",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1338444.42932582,
      "curr_month_visits": 1338444.42932582,
      "unique_users": 571908.028035407,
      "pages_per_visit": 6.01815895296726
    },
    {
      "global_rank": 175036,
      "category_rank": 38,
      "domain": "trackitt.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 266140.029207374,
      "curr_month_visits": 266140.029207374,
      "unique_users": 130718.663932789,
      "pages_per_visit": 2.81899178832753
    },
    {
      "global_rank": 18917,
      "category_rank": 38,
      "domain": "wahlrecht.de",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 3341794.73781021,
      "curr_month_visits": 3341794.73781021,
      "unique_users": 997039.263743419,
      "pages_per_visit": 1.93940675852014
    },
    {
      "global_rank": 1462,
      "category_rank": 38,
      "domain": "enabiz.gov.tr",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 24143765.0956771,
      "curr_month_visits": 24143765.0956771,
      "unique_users": 9034045.60014222,
      "pages_per_visit": 9.2727609819273
    },
    {
      "global_rank": 269864,
      "category_rank": 38,
      "domain": "crimerate.co.uk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 132753.542780862,
      "curr_month_visits": 132753.542780862,
      "unique_users": 87523.1294252658,
      "pages_per_visit": 2.87539078552261
    },
    {
      "global_rank": 19243,
      "category_rank": 39,
      "domain": "vmi.lt",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1372577.7865632,
      "curr_month_visits": 1372577.7865632,
      "unique_users": 531258.928766436,
      "pages_per_visit": 16.5924240723445
    },
    {
      "global_rank": 1481,
      "category_rank": 39,
      "domain": "irs.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 32665427.2467928,
      "curr_month_visits": 32665427.2467928,
      "unique_users": 15702081.6418729,
      "pages_per_visit": 5.03516115160471
    },
    {
      "global_rank": 178160,
      "category_rank": 39,
      "domain": "davidsonmorris.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 353765.829334473,
      "curr_month_visits": 353765.829334473,
      "unique_users": 219631.27629831,
      "pages_per_visit": 1.65715907383994
    },
    {
      "global_rank": 42899,
      "category_rank": 39,
      "domain": "bundeswehr.de",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1329006.87572237,
      "curr_month_visits": 1329006.87572237,
      "unique_users": 803324.101615721,
      "pages_per_visit": 3.06741415439426
    },
    {
      "global_rank": 270096,
      "category_rank": 39,
      "domain": "12388.gov.cn",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 197970.769159004,
      "curr_month_visits": 197970.769159004,
      "unique_users": 97259.5948523559,
      "pages_per_visit": 3.09304390448725
    },
    {
      "global_rank": 11043,
      "category_rank": 39,
      "domain": "tjgo.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 4287383.5517978,
      "curr_month_visits": 4287383.5517978,
      "unique_users": 463292.526033207,
      "pages_per_visit": 11.1669888966381
    },
    {
      "global_rank": 43890,
      "category_rank": 40,
      "domain": "nbis.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 463815.933846812,
      "curr_month_visits": 463815.933846812,
      "unique_users": 127579.613963607,
      "pages_per_visit": 29.0266346640815
    },
    {
      "global_rank": 19356,
      "category_rank": 40,
      "domain": "stf.jus.br",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 3729061.30555846,
      "curr_month_visits": 3729061.30555846,
      "unique_users": 1692185.02642015,
      "pages_per_visit": 2.98536889942025
    },
    {
      "global_rank": 11045,
      "category_rank": 40,
      "domain": "livelaw.in",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 8563476.81837159,
      "curr_month_visits": 8563476.81837159,
      "unique_users": 3275390.40462556,
      "pages_per_visit": 1.79452106699298
    },
    {
      "global_rank": 285419,
      "category_rank": 40,
      "domain": "marshallso.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 123852.215500926,
      "curr_month_visits": 123852.215500926,
      "unique_users": 32199.0669310706,
      "pages_per_visit": 3.51966825952224
    },
    {
      "global_rank": 178473,
      "category_rank": 40,
      "domain": "vetassess.com.au",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 217389.300363477,
      "curr_month_visits": 217389.300363477,
      "unique_users": 88095.3936681902,
      "pages_per_visit": 5.13381898232049
    },
    {
      "global_rank": 1503,
      "category_rank": 40,
      "domain": "ny.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 28019205.4667764,
      "curr_month_visits": 28019205.4667764,
      "unique_users": 9324420.81687355,
      "pages_per_visit": 6.45086457018311
    },
    {
      "global_rank": 11256,
      "category_rank": 41,
      "domain": "deped.gov.ph",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 4892057.78094139,
      "curr_month_visits": 4892057.78094139,
      "unique_users": 1638479.64846343,
      "pages_per_visit": 13.3083844134476
    },
    {
      "global_rank": 1517,
      "category_rank": 41,
      "domain": "sarkariresult.com",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 53028311.680295,
      "curr_month_visits": 53028311.680295,
      "unique_users": 6277596.65685784,
      "pages_per_visit": 3.19976223771299
    },
    {
      "global_rank": 294283,
      "category_rank": 41,
      "domain": "nsvrc.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 165659.245779605,
      "curr_month_visits": 165659.245779605,
      "unique_users": 101907.065350203,
      "pages_per_visit": 1.63545639253323
    },
    {
      "global_rank": 45583,
      "category_rank": 41,
      "domain": "airforce.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1400970.52189427,
      "curr_month_visits": 1400970.52189427,
      "unique_users": 803848.131670509,
      "pages_per_visit": 3.09141745310032
    },
    {
      "global_rank": 20036,
      "category_rank": 41,
      "domain": "neoenergia.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2958014.60811731,
      "curr_month_visits": 2958014.60811731,
      "unique_users": 1622008.63551654,
      "pages_per_visit": 3.61767121325234
    },
    {
      "global_rank": 180050,
      "category_rank": 41,
      "domain": "casestatusext.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 249205.729598623,
      "curr_month_visits": 249205.729598623,
      "unique_users": 35478.0185917619,
      "pages_per_visit": 3.35719097104569
    },
    {
      "global_rank": 1548,
      "category_rank": 42,
      "domain": "uyap.gov.tr",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 24868805.3272424,
      "curr_month_visits": 24868805.3272424,
      "unique_users": 4059151.63793632,
      "pages_per_visit": 10.0220972493201
    },
    {
      "global_rank": 46181,
      "category_rank": 42,
      "domain": "bulgarianmilitary.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1542493.05394869,
      "curr_month_visits": 1542493.05394869,
      "unique_users": 675527.889704241,
      "pages_per_visit": 2.19861353027427
    },
    {
      "global_rank": 295788,
      "category_rank": 42,
      "domain": "pascocorrections.net",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 129123.672762235,
      "curr_month_visits": 129123.672762235,
      "unique_users": 49027.0150179654,
      "pages_per_visit": 3.35651905567918
    },
    {
      "global_rank": 180290,
      "category_rank": 42,
      "domain": "amu.tv",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 215386.588267365,
      "curr_month_visits": 215386.588267365,
      "unique_users": 122059.852820769,
      "pages_per_visit": 1.42583401855981
    },
    {
      "global_rank": 11403,
      "category_rank": 42,
      "domain": "just.ro",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5124910.70860995,
      "curr_month_visits": 5124910.70860995,
      "unique_users": 1342602.08033634,
      "pages_per_visit": 5.31547462755185
    },
    {
      "global_rank": 20148,
      "category_rank": 42,
      "domain": "marina.gov.ph",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1964680.07915336,
      "curr_month_visits": 1964680.07915336,
      "unique_users": 374163.395564972,
      "pages_per_visit": 11.2036171036213
    },
    {
      "global_rank": 20243,
      "category_rank": 43,
      "domain": "jasb.com.br",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 3187426.7738694,
      "curr_month_visits": 3187426.7738694,
      "unique_users": 298068.275005379,
      "pages_per_visit": 4.56065255159651
    },
    {
      "global_rank": 1579,
      "category_rank": 43,
      "domain": "pr.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 29127202.1343372,
      "curr_month_visits": 29127202.1343372,
      "unique_users": 6896586.74508232,
      "pages_per_visit": 6.36908489889563
    },
    {
      "global_rank": 11893,
      "category_rank": 43,
      "domain": "stj.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5406130.24053164,
      "curr_month_visits": 5406130.24053164,
      "unique_users": 1762265.94873254,
      "pages_per_visit": 4.40949012173344
    },
    {
      "global_rank": 298922,
      "category_rank": 43,
      "domain": "antimafiaduemila.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 187693.378344374,
      "curr_month_visits": 187693.378344374,
      "unique_users": 113633.722605865,
      "pages_per_visit": 1.59378912087294
    },
    {
      "global_rank": 47898,
      "category_rank": 43,
      "domain": "cloud.navy.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 848551.396767586,
      "curr_month_visits": 848551.396767586,
      "unique_users": 267101.806343081,
      "pages_per_visit": 5.6608451421149
    },
    {
      "global_rank": 183602,
      "category_rank": 43,
      "domain": "envoyglobal.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 260653.697148457,
      "curr_month_visits": 260653.697148457,
      "unique_users": 66516.1807063661,
      "pages_per_visit": 4.46203518990504
    },
    {
      "global_rank": 48380,
      "category_rank": 44,
      "domain": "armyrecognition.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1355919.6778592,
      "curr_month_visits": 1355919.6778592,
      "unique_users": 732234.499650745,
      "pages_per_visit": 1.76298386463081
    },
    {
      "global_rank": 12001,
      "category_rank": 44,
      "domain": "ecourts.gov.in",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5860681.55213443,
      "curr_month_visits": 5860681.55213443,
      "unique_users": 1876172.91350233,
      "pages_per_visit": 4.16232306105436
    },
    {
      "global_rank": 187453,
      "category_rank": 44,
      "domain": "immigrationboards.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 341451.397370348,
      "curr_month_visits": 341451.397370348,
      "unique_users": 172591.512132443,
      "pages_per_visit": 2.44402072289843
    },
    {
      "global_rank": 20435,
      "category_rank": 44,
      "domain": "france-visas.gouv.fr",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2182522.78157192,
      "curr_month_visits": 2182522.78157192,
      "unique_users": 884341.986080407,
      "pages_per_visit": 7.90260174638388
    },
    {
      "global_rank": 302215,
      "category_rank": 44,
      "domain": "westmorelandcountypa.gov",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 84976.187840205,
      "curr_month_visits": 84976.187840205,
      "unique_users": 46519.0902554709,
      "pages_per_visit": 3.21698773072791
    },
    {
      "global_rank": 1617,
      "category_rank": 44,
      "domain": "laposte.fr",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 35823669.5671256,
      "curr_month_visits": 35823669.5671256,
      "unique_users": 12683760.5740244,
      "pages_per_visit": 3.4839280204809
    },
    {
      "global_rank": 1655,
      "category_rank": 45,
      "domain": "nsw.gov.au",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 34509192.1157937,
      "curr_month_visits": 34509192.1157937,
      "unique_users": 11083643.8200707,
      "pages_per_visit": 3.91662356556227
    },
    {
      "global_rank": 12033,
      "category_rank": 45,
      "domain": "nrw.de",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5075744.33795957,
      "curr_month_visits": 5075744.33795957,
      "unique_users": 2439148.88238963,
      "pages_per_visit": 3.73881347314893
    },
    {
      "global_rank": 20651,
      "category_rank": 45,
      "domain": "regione.campania.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2359532.74041165,
      "curr_month_visits": 2359532.74041165,
      "unique_users": 945746.413954656,
      "pages_per_visit": 6.32288261023435
    },
    {
      "global_rank": 306504,
      "category_rank": 45,
      "domain": "stopitnow.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 181810.462481199,
      "curr_month_visits": 181810.462481199,
      "unique_users": 116387.462419006,
      "pages_per_visit": 1.73371270312124
    },
    {
      "global_rank": 49012,
      "category_rank": 45,
      "domain": "mod.gov.il",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 913476.167878574,
      "curr_month_visits": 913476.167878574,
      "unique_users": 357514.23670132,
      "pages_per_visit": 4.34338223846869
    },
    {
      "global_rank": 188179,
      "category_rank": 45,
      "domain": "uaelegislation.gov.ae",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 273438.941807354,
      "curr_month_visits": 273438.941807354,
      "unique_users": 140230.457486639,
      "pages_per_visit": 2.11958357791249
    },
    {
      "global_rank": 12469,
      "category_rank": 46,
      "domain": "csc.gov.ph",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3229063.61722678,
      "curr_month_visits": 3229063.61722678,
      "unique_users": 1288104.49466456,
      "pages_per_visit": 6.12524792684704
    },
    {
      "global_rank": 21088,
      "category_rank": 46,
      "domain": "go2senkyo.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 6203619.65369005,
      "curr_month_visits": 6203619.65369005,
      "unique_users": 4155327.61357635,
      "pages_per_visit": 2.90237037105816
    },
    {
      "global_rank": 49967,
      "category_rank": 46,
      "domain": "onlineupdatestm.in",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1048138.13453259,
      "curr_month_visits": 1048138.13453259,
      "unique_users": 420661.162771716,
      "pages_per_visit": 2.65060199957441
    },
    {
      "global_rank": 311256,
      "category_rank": 46,
      "domain": "govbackgroundchecks.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 178360.841439004,
      "curr_month_visits": 178360.841439004,
      "unique_users": 142490.140536871,
      "pages_per_visit": 1.39143229674303
    },
    {
      "global_rank": 192260,
      "category_rank": 46,
      "domain": "cis.org",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 304283.720358251,
      "curr_month_visits": 304283.720358251,
      "unique_users": 222683.049114387,
      "pages_per_visit": 1.49940548922074
    },
    {
      "global_rank": 1686,
      "category_rank": 46,
      "domain": "nta.go.jp",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 20859181.4987268,
      "curr_month_visits": 20859181.4987268,
      "unique_users": 7774759.66818858,
      "pages_per_visit": 6.00408319510172
    },
    {
      "global_rank": 322741,
      "category_rank": 47,
      "domain": "insideprison.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 102890.022463163,
      "curr_month_visits": 102890.022463163,
      "unique_users": 80783.494684725,
      "pages_per_visit": 3.52697258856092
    },
    {
      "global_rank": 1719,
      "category_rank": 47,
      "domain": "saglik.gov.tr",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 27675278.9950721,
      "curr_month_visits": 27675278.9950721,
      "unique_users": 8684519.56040967,
      "pages_per_visit": 5.41722326348603
    },
    {
      "global_rank": 21119,
      "category_rank": 47,
      "domain": "fcc.gov",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2753347.87030053,
      "curr_month_visits": 2753347.87030053,
      "unique_users": 1815837.88407045,
      "pages_per_visit": 3.84163031952106
    },
    {
      "global_rank": 194519,
      "category_rank": 47,
      "domain": "college-ic.ca",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 222846.150718522,
      "curr_month_visits": 222846.150718522,
      "unique_users": 94830.1557513478,
      "pages_per_visit": 3.39056878979823
    },
    {
      "global_rank": 12551,
      "category_rank": 47,
      "domain": "dcourts.gov.in",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5321526.95244217,
      "curr_month_visits": 5321526.95244217,
      "unique_users": 1779099.8657986,
      "pages_per_visit": 4.02646278087271
    },
    {
      "global_rank": 50119,
      "category_rank": 47,
      "domain": "marines.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1444645.59159069,
      "curr_month_visits": 1444645.59159069,
      "unique_users": 796803.743193883,
      "pages_per_visit": 2.09096254981363
    },
    {
      "global_rank": 12893,
      "category_rank": 48,
      "domain": "hukumonline.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 6213275.13869592,
      "curr_month_visits": 6213275.13869592,
      "unique_users": 3566472.40648806,
      "pages_per_visit": 2.29594170408
    },
    {
      "global_rank": 1741,
      "category_rank": 48,
      "domain": "sunat.gob.pe",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 27230041.1752254,
      "curr_month_visits": 27230041.1752254,
      "unique_users": 4749592.77576161,
      "pages_per_visit": 7.3739779345979
    },
    {
      "global_rank": 199329,
      "category_rank": 48,
      "domain": "immigration.gov.ph",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 238999.458021215,
      "curr_month_visits": 238999.458021215,
      "unique_users": 115889.296502945,
      "pages_per_visit": 2.44706899664065
    },
    {
      "global_rank": 22283,
      "category_rank": 48,
      "domain": "finanze.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1985865.4704252,
      "curr_month_visits": 1985865.4704252,
      "unique_users": 850264.196118365,
      "pages_per_visit": 10.314960374887
    },
    {
      "global_rank": 55394,
      "category_rank": 48,
      "domain": "federalnewsnetwork.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 972961.425903974,
      "curr_month_visits": 972961.425903974,
      "unique_users": 579557.441428822,
      "pages_per_visit": 2.21089079349135
    },
    {
      "global_rank": 326816,
      "category_rank": 48,
      "domain": "victimsupport.org.uk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 88310.0668698578,
      "curr_month_visits": 88310.0668698578,
      "unique_users": 49802.2337018974,
      "pages_per_visit": 4.47857281186212
    },
    {
      "global_rank": 329497,
      "category_rank": 49,
      "domain": "privatereports.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 92886.2448948688,
      "curr_month_visits": 92886.2448948688,
      "unique_users": 70214.5040949097,
      "pages_per_visit": 5.78709141817468
    },
    {
      "global_rank": 1902,
      "category_rank": 49,
      "domain": "sii.cl",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 15005817.191669,
      "curr_month_visits": 15005817.191669,
      "unique_users": 3322318.65605432,
      "pages_per_visit": 16.9601503204626
    },
    {
      "global_rank": 22299,
      "category_rank": 49,
      "domain": "trf5.jus.br",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2165234.45657529,
      "curr_month_visits": 2165234.45657529,
      "unique_users": 355546.720613059,
      "pages_per_visit": 9.96616717232863
    },
    {
      "global_rank": 13075,
      "category_rank": 49,
      "domain": "conjur.com.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 7534535.18483304,
      "curr_month_visits": 7534535.18483304,
      "unique_users": 3769281.33629016,
      "pages_per_visit": 1.42728935443384
    },
    {
      "global_rank": 201749,
      "category_rank": 49,
      "domain": "trackmyvisanow.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 187741.147029977,
      "curr_month_visits": 187741.147029977,
      "unique_users": 40493.8756294499,
      "pages_per_visit": 2.53932350290094
    },
    {
      "global_rank": 55583,
      "category_rank": 49,
      "domain": "defence-blog.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1332857.42994524,
      "curr_month_visits": 1332857.42994524,
      "unique_users": 629898.718380519,
      "pages_per_visit": 1.80096999289164
    },
    {
      "global_rank": 22515,
      "category_rank": 50,
      "domain": "cia.gov",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2970658.92666615,
      "curr_month_visits": 2970658.92666615,
      "unique_users": 1922294.08070836,
      "pages_per_visit": 2.93203445664943
    },
    {
      "global_rank": 13120,
      "category_rank": 50,
      "domain": "mos-gorsud.ru",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 4553034.51495129,
      "curr_month_visits": 4553034.51495129,
      "unique_users": 1119984.36474145,
      "pages_per_visit": 4.76640282951738
    },
    {
      "global_rank": 55869,
      "category_rank": 50,
      "domain": "andaman.gov.in",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 731731.630347927,
      "curr_month_visits": 731731.630347927,
      "unique_users": 323186.566898349,
      "pages_per_visit": 7.35517599340071
    },
    {
      "global_rank": 202550,
      "category_rank": 50,
      "domain": "liveinmelbourne.vic.gov.au",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 211235.114882171,
      "curr_month_visits": 211235.114882171,
      "unique_users": 102349.11436448,
      "pages_per_visit": 3.76462542859081
    },
    {
      "global_rank": 330685,
      "category_rank": 50,
      "domain": "thepublicindex.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 102444.273991237,
      "curr_month_visits": 102444.273991237,
      "unique_users": 66782.1413249946,
      "pages_per_visit": 3.46019658679661
    },
    {
      "global_rank": 1981,
      "category_rank": 50,
      "domain": "rj.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 26376576.4383382,
      "curr_month_visits": 26376576.4383382,
      "unique_users": 6951336.35970786,
      "pages_per_visit": 5.04031286053774
    },
    {
      "global_rank": 205178,
      "category_rank": 51,
      "domain": "moving2canada.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 259716.489993225,
      "curr_month_visits": 259716.489993225,
      "unique_users": 124285.640991084,
      "pages_per_visit": 2.34604873768007
    },
    {
      "global_rank": 1986,
      "category_rank": 51,
      "domain": "gujarat.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 16761701.0292364,
      "curr_month_visits": 16761701.0292364,
      "unique_users": 3621244.06453406,
      "pages_per_visit": 14.7528444280002
    },
    {
      "global_rank": 22839,
      "category_rank": 51,
      "domain": "twincn.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 3534377.96931826,
      "curr_month_visits": 3534377.96931826,
      "unique_users": 1948868.28445439,
      "pages_per_visit": 2.11687011782527
    },
    {
      "global_rank": 55891,
      "category_rank": 51,
      "domain": "mod.gov.ua",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1378280.64673957,
      "curr_month_visits": 1378280.64673957,
      "unique_users": 428485.565110295,
      "pages_per_visit": 2.00709638369436
    },
    {
      "global_rank": 13476,
      "category_rank": 51,
      "domain": "meinvoice.vn",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 4336990.991328,
      "curr_month_visits": 4336990.991328,
      "unique_users": 791172.842886036,
      "pages_per_visit": 7.0579615484768
    },
    {
      "global_rank": 332219,
      "category_rank": 51,
      "domain": "cityprotect.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 76877.4315442747,
      "curr_month_visits": 76877.4315442747,
      "unique_users": 45731.1892399581,
      "pages_per_visit": 10.0767164908875
    },
    {
      "global_rank": 13548,
      "category_rank": 52,
      "domain": "trt2.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3626566.80881791,
      "curr_month_visits": 3626566.80881791,
      "unique_users": 691267.48623867,
      "pages_per_visit": 10.7883582883142
    },
    {
      "global_rank": 23018,
      "category_rank": 52,
      "domain": "tjms.jus.br",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2208494.70300313,
      "curr_month_visits": 2208494.70300313,
      "unique_users": 330249.003642564,
      "pages_per_visit": 8.44059392036301
    },
    {
      "global_rank": 2017,
      "category_rank": 52,
      "domain": "kemenag.go.id",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 23531977.8900734,
      "curr_month_visits": 23531977.8900734,
      "unique_users": 7493588.31458985,
      "pages_per_visit": 5.25255431354288
    },
    {
      "global_rank": 56521,
      "category_rank": 52,
      "domain": "wp.mil.pl",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 837439.710288571,
      "curr_month_visits": 837439.710288571,
      "unique_users": 385201.304163872,
      "pages_per_visit": 3.90725573502866
    },
    {
      "global_rank": 220872,
      "category_rank": 52,
      "domain": "acces-maroc.ma",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 182767.012939089,
      "curr_month_visits": 182767.012939089,
      "unique_users": 69571.0686000959,
      "pages_per_visit": 4.33838337712867
    },
    {
      "global_rank": 338881,
      "category_rank": 52,
      "domain": "securushelp.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 132411.854953071,
      "curr_month_visits": 132411.854953071,
      "unique_users": 92489.1867555542,
      "pages_per_visit": 2.50891192081731
    },
    {
      "global_rank": 56923,
      "category_rank": 53,
      "domain": "usni.org",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1284653.95123625,
      "curr_month_visits": 1284653.95123625,
      "unique_users": 741481.704285339,
      "pages_per_visit": 1.64891945523563
    },
    {
      "global_rank": 2032,
      "category_rank": 53,
      "domain": "fivethirtyeight.com",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 48980980.0771734,
      "curr_month_visits": 48980980.0771734,
      "unique_users": 14682579.43101,
      "pages_per_visit": 2.55495945714133
    },
    {
      "global_rank": 13828,
      "category_rank": 53,
      "domain": "sa.gov.pl",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3031247.8200372,
      "curr_month_visits": 3031247.8200372,
      "unique_users": 436335.470566958,
      "pages_per_visit": 12.3435367409662
    },
    {
      "global_rank": 23053,
      "category_rank": 53,
      "domain": "difesa.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2470759.23511788,
      "curr_month_visits": 2470759.23511788,
      "unique_users": 983553.244843825,
      "pages_per_visit": 4.39938760397863
    },
    {
      "global_rank": 342534,
      "category_rank": 53,
      "domain": "marionmugshots.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 73036.4742659328,
      "curr_month_visits": 73036.4742659328,
      "unique_users": 16992.3654870937,
      "pages_per_visit": 15.8866641074751
    },
    {
      "global_rank": 225025,
      "category_rank": 53,
      "domain": "immigration.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 216142.813297426,
      "curr_month_visits": 216142.813297426,
      "unique_users": 136611.281062971,
      "pages_per_visit": 1.81673482969863
    },
    {
      "global_rank": 14093,
      "category_rank": 54,
      "domain": "pnp.gov.ph",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2730235.32191142,
      "curr_month_visits": 2730235.32191142,
      "unique_users": 901612.115676468,
      "pages_per_visit": 7.85137823029276
    },
    {
      "global_rank": 59496,
      "category_rank": 54,
      "domain": "d2b.go.kr",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 392974.164297021,
      "curr_month_visits": 392974.164297021,
      "unique_users": 78836.984856964,
      "pages_per_visit": 13.3825564990264
    },
    {
      "global_rank": 229130,
      "category_rank": 54,
      "domain": "irb-cisr.gc.ca",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 200475.572405385,
      "curr_month_visits": 200475.572405385,
      "unique_users": 93322.4553657091,
      "pages_per_visit": 2.37378901400088
    },
    {
      "global_rank": 2049,
      "category_rank": 54,
      "domain": "tn.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 18040907.2259947,
      "curr_month_visits": 18040907.2259947,
      "unique_users": 4066803.61804813,
      "pages_per_visit": 10.44593330965
    },
    {
      "global_rank": 345598,
      "category_rank": 54,
      "domain": "sentencingproject.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 120640.144577133,
      "curr_month_visits": 120640.144577133,
      "unique_users": 71200.1377645929,
      "pages_per_visit": 1.7226963431074
    },
    {
      "global_rank": 23386,
      "category_rank": 54,
      "domain": "voterrecords.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2080203.09487041,
      "curr_month_visits": 2080203.09487041,
      "unique_users": 1478430.37566806,
      "pages_per_visit": 3.98697024828719
    },
    {
      "global_rank": 345684,
      "category_rank": 55,
      "domain": "peoplesearcher.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 90004.5946302518,
      "curr_month_visits": 90004.5946302518,
      "unique_users": 53720.5977078138,
      "pages_per_visit": 3.44965936363872
    },
    {
      "global_rank": 60233,
      "category_rank": 55,
      "domain": "adfcareers.gov.au",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 695443.963833921,
      "curr_month_visits": 695443.963833921,
      "unique_users": 320989.274760565,
      "pages_per_visit": 6.91181211706007
    },
    {
      "global_rank": 23426,
      "category_rank": 55,
      "domain": "molit.go.kr",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2577543.49439815,
      "curr_month_visits": 2577543.49439815,
      "unique_users": 1066856.31448429,
      "pages_per_visit": 4.66551951427101
    },
    {
      "global_rank": 14190,
      "category_rank": 55,
      "domain": "def.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3449927.83864015,
      "curr_month_visits": 3449927.83864015,
      "unique_users": 1299041.73872749,
      "pages_per_visit": 7.73465564466077
    },
    {
      "global_rank": 234505,
      "category_rank": 55,
      "domain": "schengenvisas.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 246819.066813565,
      "curr_month_visits": 246819.066813565,
      "unique_users": 127836.816298863,
      "pages_per_visit": 1.71795460344355
    },
    {
      "global_rank": 2064,
      "category_rank": 55,
      "domain": "gouv.qc.ca",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 24372364.393084,
      "curr_month_visits": 24372364.393084,
      "unique_users": 7331886.03064167,
      "pages_per_visit": 6.01655772988637
    },
    {
      "global_rank": 14250,
      "category_rank": 56,
      "domain": "mycase.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3708356.86821444,
      "curr_month_visits": 3708356.86821444,
      "unique_users": 544281.815978135,
      "pages_per_visit": 9.94351273159714
    },
    {
      "global_rank": 242947,
      "category_rank": 56,
      "domain": "naati.com.au",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 161896.433104094,
      "curr_month_visits": 161896.433104094,
      "unique_users": 68081.5198392563,
      "pages_per_visit": 4.5318109319253
    },
    {
      "global_rank": 358568,
      "category_rank": 56,
      "domain": "doenetwork.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 101142.820109849,
      "curr_month_visits": 101142.820109849,
      "unique_users": 48384.1788805881,
      "pages_per_visit": 3.8990675321583
    },
    {
      "global_rank": 2088,
      "category_rank": 56,
      "domain": "service-public.fr",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 33849524.5363453,
      "curr_month_visits": 33849524.5363453,
      "unique_users": 17409611.0333803,
      "pages_per_visit": 2.34694658472213
    },
    {
      "global_rank": 61237,
      "category_rank": 56,
      "domain": "fastjobsearchers.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1137792.07951777,
      "curr_month_visits": 1137792.07951777,
      "unique_users": 292076.084197351,
      "pages_per_visit": 2.7271337300028
    },
    {
      "global_rank": 23846,
      "category_rank": 56,
      "domain": "pontomais.com.br",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 3133439.62462054,
      "curr_month_visits": 3133439.62462054,
      "unique_users": 249227.243383615,
      "pages_per_visit": 5.660146228697
    },
    {
      "global_rank": 14304,
      "category_rank": 57,
      "domain": "avvo.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5761551.41888895,
      "curr_month_visits": 5761551.41888895,
      "unique_users": 4320915.90887015,
      "pages_per_visit": 1.90037884878437
    },
    {
      "global_rank": 361980,
      "category_rank": 57,
      "domain": "streetgangs.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 94478.8186130233,
      "curr_month_visits": 94478.8186130233,
      "unique_users": 48684.338712676,
      "pages_per_visit": 3.92675786584224
    },
    {
      "global_rank": 243768,
      "category_rank": 57,
      "domain": "immigratemanitoba.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 157459.364157588,
      "curr_month_visits": 157459.364157588,
      "unique_users": 74169.7557985464,
      "pages_per_visit": 3.42494136464812
    },
    {
      "global_rank": 24043,
      "category_rank": 57,
      "domain": "sistemi.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2071464.49185877,
      "curr_month_visits": 2071464.49185877,
      "unique_users": 366647.269742793,
      "pages_per_visit": 6.38501694169803
    },
    {
      "global_rank": 2140,
      "category_rank": 57,
      "domain": "inss.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 21348221.674805,
      "curr_month_visits": 21348221.674805,
      "unique_users": 4489496.89900686,
      "pages_per_visit": 7.28279096692616
    },
    {
      "global_rank": 62413,
      "category_rank": 57,
      "domain": "crpf.gov.in",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 467370.363662944,
      "curr_month_visits": 467370.363662944,
      "unique_users": 200599.840699375,
      "pages_per_visit": 16.0679182787314
    },
    {
      "global_rank": 62651,
      "category_rank": 58,
      "domain": "moi.gov.ae",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 713033.355775364,
      "curr_month_visits": 713033.355775364,
      "unique_users": 213806.014944828,
      "pages_per_visit": 7.00683394124188
    },
    {
      "global_rank": 14420,
      "category_rank": 58,
      "domain": "gsxt.gov.cn",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2731743.79912659,
      "curr_month_visits": 2731743.79912659,
      "unique_users": 1489138.60071749,
      "pages_per_visit": 8.28560760049172
    },
    {
      "global_rank": 2145,
      "category_rank": 58,
      "domain": "vnptioffice.vn",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 15997689.4554582,
      "curr_month_visits": 15997689.4554582,
      "unique_users": 2783459.82706425,
      "pages_per_visit": 9.58543826106702
    },
    {
      "global_rank": 401362,
      "category_rank": 58,
      "domain": "precinctcentral.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 62535.5078644843,
      "curr_month_visits": 62535.5078644843,
      "unique_users": 25077.4869753044,
      "pages_per_visit": 12.647051619291
    },
    {
      "global_rank": 254840,
      "category_rank": 58,
      "domain": "immi-usa.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 197687.280935509,
      "curr_month_visits": 197687.280935509,
      "unique_users": 131057.705471149,
      "pages_per_visit": 1.5686117878516
    },
    {
      "global_rank": 24471,
      "category_rank": 58,
      "domain": "marxists.org",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2718731.1605083,
      "curr_month_visits": 2718731.1605083,
      "unique_users": 1311332.83030073,
      "pages_per_visit": 2.85467833956563
    },
    {
      "global_rank": 404528,
      "category_rank": 59,
      "domain": "floridacourtrecords.us",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 72228.9563924041,
      "curr_month_visits": 72228.9563924041,
      "unique_users": 54028.5843999184,
      "pages_per_visit": 3.37401300013724
    },
    {
      "global_rank": 262525,
      "category_rank": 59,
      "domain": "immigration.go.kr",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 170803.51651111,
      "curr_month_visits": 170803.51651111,
      "unique_users": 103789.79372058,
      "pages_per_visit": 2.19224030577045
    },
    {
      "global_rank": 14434,
      "category_rank": 59,
      "domain": "plusgrade.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5851854.63829457,
      "curr_month_visits": 5851854.63829457,
      "unique_users": 3686938.64918399,
      "pages_per_visit": 2.09177441120215
    },
    {
      "global_rank": 63064,
      "category_rank": 59,
      "domain": "airshow.com.cn",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 493689.752231122,
      "curr_month_visits": 493689.752231122,
      "unique_users": 217022.294726767,
      "pages_per_visit": 9.54021149877604
    },
    {
      "global_rank": 2153,
      "category_rank": 59,
      "domain": "pdffiller.com",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 21848008.8141045,
      "curr_month_visits": 21848008.8141045,
      "unique_users": 15609903.6768375,
      "pages_per_visit": 4.93736587246386
    },
    {
      "global_rank": 24495,
      "category_rank": 59,
      "domain": "teamsystem.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 3053713.36325689,
      "curr_month_visits": 3053713.36325689,
      "unique_users": 642272.585638007,
      "pages_per_visit": 3.0135740728386
    },
    {
      "global_rank": 24501,
      "category_rank": 60,
      "domain": "ufficiocamerale.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 3120350.2151076,
      "curr_month_visits": 3120350.2151076,
      "unique_users": 1861646.29321001,
      "pages_per_visit": 2.22962529009868
    },
    {
      "global_rank": 262646,
      "category_rank": 60,
      "domain": "welcomebc.ca",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 188127.608609087,
      "curr_month_visits": 188127.608609087,
      "unique_users": 86420.8755004378,
      "pages_per_visit": 2.24082661534358
    },
    {
      "global_rank": 405433,
      "category_rank": 60,
      "domain": "gladiknow.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 82861.2300519734,
      "curr_month_visits": 82861.2300519734,
      "unique_users": 51109.858287871,
      "pages_per_visit": 5.45725298675368
    },
    {
      "global_rank": 2167,
      "category_rank": 60,
      "domain": "ap.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 18279109.2370146,
      "curr_month_visits": 18279109.2370146,
      "unique_users": 4042979.21740226,
      "pages_per_visit": 7.28643602798481
    },
    {
      "global_rank": 64170,
      "category_rank": 60,
      "domain": "hcg.gr",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 690545.863270488,
      "curr_month_visits": 690545.863270488,
      "unique_users": 94285.1453043854,
      "pages_per_visit": 10.3562527617229
    },
    {
      "global_rank": 14444,
      "category_rank": 60,
      "domain": "pravoved.ru",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5407723.21995311,
      "curr_month_visits": 5407723.21995311,
      "unique_users": 3773688.45647752,
      "pages_per_visit": 2.14008143860279
    },
    {
      "global_rank": 411828,
      "category_rank": 61,
      "domain": "madisoncountyil.gov",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 100453.378554811,
      "curr_month_visits": 100453.378554811,
      "unique_users": 47341.3864476104,
      "pages_per_visit": 1.78664962120151
    },
    {
      "global_rank": 14448,
      "category_rank": 61,
      "domain": "cnipa.gov.cn",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2739130.97793305,
      "curr_month_visits": 2739130.97793305,
      "unique_users": 909096.03098613,
      "pages_per_visit": 9.70156542141265
    },
    {
      "global_rank": 263490,
      "category_rank": 61,
      "domain": "total.law",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 186137.761642026,
      "curr_month_visits": 186137.761642026,
      "unique_users": 110571.76181378,
      "pages_per_visit": 1.53189764872929
    },
    {
      "global_rank": 25384,
      "category_rank": 61,
      "domain": "ipindia.gov.in",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1996342.41804461,
      "curr_month_visits": 1996342.41804461,
      "unique_users": 692718.19466499,
      "pages_per_visit": 7.13540482535347
    },
    {
      "global_rank": 2186,
      "category_rank": 61,
      "domain": "mlit.go.jp",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 23501599.665209,
      "curr_month_visits": 23501599.665209,
      "unique_users": 7856129.04228484,
      "pages_per_visit": 4.7016013110261
    },
    {
      "global_rank": 65926,
      "category_rank": 61,
      "domain": "globalfirepower.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 830984.909881211,
      "curr_month_visits": 830984.909881211,
      "unique_users": 486986.821622545,
      "pages_per_visit": 3.72062019993445
    },
    {
      "global_rank": 2224,
      "category_rank": 62,
      "domain": "argentina.gob.ar",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 27066353.6777549,
      "curr_month_visits": 27066353.6777549,
      "unique_users": 11623157.601635,
      "pages_per_visit": 3.17181750041792
    },
    {
      "global_rank": 25898,
      "category_rank": 62,
      "domain": "ihk.de",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2581984.92490252,
      "curr_month_visits": 2581984.92490252,
      "unique_users": 1435983.64160458,
      "pages_per_visit": 2.92511415125716
    },
    {
      "global_rank": 14471,
      "category_rank": 62,
      "domain": "indiankanoon.org",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5079728.3978098,
      "curr_month_visits": 5079728.3978098,
      "unique_users": 2381844.78750986,
      "pages_per_visit": 3.16481655892809
    },
    {
      "global_rank": 267080,
      "category_rank": 62,
      "domain": "onlineappointmentscheduling.net.au",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 94349.3431110528,
      "curr_month_visits": 94349.3431110528,
      "unique_users": 38500.3008691023,
      "pages_per_visit": 10.4938878925672
    },
    {
      "global_rank": 67925,
      "category_rank": 62,
      "domain": "navy.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1079671.35914964,
      "curr_month_visits": 1079671.35914964,
      "unique_users": 755882.509159927,
      "pages_per_visit": 2.04269313118966
    },
    {
      "global_rank": 412411,
      "category_rank": 62,
      "domain": "texascourtrecords.us",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 82358.8460355151,
      "curr_month_visits": 82358.8460355151,
      "unique_users": 61849.4512702168,
      "pages_per_visit": 3.98593554832856
    },
    {
      "global_rank": 70186,
      "category_rank": 63,
      "domain": "adpolice.gov.ae",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 740953.23878002,
      "curr_month_visits": 740953.23878002,
      "unique_users": 252436.946099014,
      "pages_per_visit": 4.66932522533298
    },
    {
      "global_rank": 440495,
      "category_rank": 63,
      "domain": "recordspage.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 112178.745098007,
      "curr_month_visits": 112178.745098007,
      "unique_users": 85607.0161078861,
      "pages_per_visit": 1.68445384130256
    },
    {
      "global_rank": 14887,
      "category_rank": 63,
      "domain": "oabsp.org.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3532014.16706988,
      "curr_month_visits": 3532014.16706988,
      "unique_users": 597911.010985555,
      "pages_per_visit": 7.35284504378598
    },
    {
      "global_rank": 26584,
      "category_rank": 63,
      "domain": "baseconnect.in",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2806483.98872192,
      "curr_month_visits": 2806483.98872192,
      "unique_users": 2194654.14241717,
      "pages_per_visit": 2.30879304167327
    },
    {
      "global_rank": 2329,
      "category_rank": 63,
      "domain": "bihar.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 18891835.1190847,
      "curr_month_visits": 18891835.1190847,
      "unique_users": 3479665.37861141,
      "pages_per_visit": 10.4649306043931
    },
    {
      "global_rank": 273783,
      "category_rank": 63,
      "domain": "visagrader.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 130174.672566583,
      "curr_month_visits": 130174.672566583,
      "unique_users": 76495.8008208838,
      "pages_per_visit": 2.81305674453775
    },
    {
      "global_rank": 26933,
      "category_rank": 64,
      "domain": "powerlineblog.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 3041328.0987439,
      "curr_month_visits": 3041328.0987439,
      "unique_users": 287341.888555825,
      "pages_per_visit": 3.62080720953171
    },
    {
      "global_rank": 70687,
      "category_rank": 64,
      "domain": "armees.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 462957.20925202,
      "curr_month_visits": 462957.20925202,
      "unique_users": 233845.487435332,
      "pages_per_visit": 1.72926144260282
    },
    {
      "global_rank": 443613,
      "category_rank": 64,
      "domain": "paperdollspenpals.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 57489.6933443143,
      "curr_month_visits": 57489.6933443143,
      "unique_users": 8351.47159092759,
      "pages_per_visit": 7.26925717247179
    },
    {
      "global_rank": 2338,
      "category_rank": 64,
      "domain": "texas.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 23930855.7333592,
      "curr_month_visits": 23930855.7333592,
      "unique_users": 9995079.11405794,
      "pages_per_visit": 4.68230829748028
    },
    {
      "global_rank": 15063,
      "category_rank": 64,
      "domain": "tylertech.cloud",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3805214.52194361,
      "curr_month_visits": 3805214.52194361,
      "unique_users": 854613.260245401,
      "pages_per_visit": 6.18933915884121
    },
    {
      "global_rank": 274129,
      "category_rank": 64,
      "domain": "consultant.net.ua",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 174533.451499556,
      "curr_month_visits": 174533.451499556,
      "unique_users": 107781.000644337,
      "pages_per_visit": 1.4196297645625
    },
    {
      "global_rank": 2354,
      "category_rank": 65,
      "domain": "up.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 13434741.794899,
      "curr_month_visits": 13434741.794899,
      "unique_users": 2746536.81681808,
      "pages_per_visit": 15.0535895403424
    },
    {
      "global_rank": 71140,
      "category_rank": 65,
      "domain": "avionslegendaires.net",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1005505.30079119,
      "curr_month_visits": 1005505.30079119,
      "unique_users": 358078.350951714,
      "pages_per_visit": 1.67157231373317
    },
    {
      "global_rank": 15082,
      "category_rank": 65,
      "domain": "microsoftonline.us",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 4669030.15388648,
      "curr_month_visits": 4669030.15388648,
      "unique_users": 728114.891016648,
      "pages_per_visit": 4.09569640256263
    },
    {
      "global_rank": 26990,
      "category_rank": 65,
      "domain": "payten.com.tr",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2762024.13179663,
      "curr_month_visits": 2762024.13179663,
      "unique_users": 1717218.83532234,
      "pages_per_visit": 2.42186525234271
    },
    {
      "global_rank": 449599,
      "category_rank": 65,
      "domain": "techsafety.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 66266.9540595111,
      "curr_month_visits": 66266.9540595111,
      "unique_users": 36303.523792032,
      "pages_per_visit": 4.33280985692281
    },
    {
      "global_rank": 275800,
      "category_rank": 65,
      "domain": "jcfcorporatespecialservices.org",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 58256.2806785202,
      "curr_month_visits": 58256.2806785202,
      "unique_users": 23645.3536427308,
      "pages_per_visit": 10.4308977390005
    },
    {
      "global_rank": 277898,
      "category_rank": 66,
      "domain": "immigrationbarrister.co.uk",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 178292.901749497,
      "curr_month_visits": 178292.901749497,
      "unique_users": 108907.074477055,
      "pages_per_visit": 1.56921955862155
    },
    {
      "global_rank": 464389,
      "category_rank": 66,
      "domain": "floridaresidentsdirectory.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 63933.9956583648,
      "curr_month_visits": 63933.9956583648,
      "unique_users": 44783.6951644856,
      "pages_per_visit": 3.4943247368965
    },
    {
      "global_rank": 72390,
      "category_rank": 66,
      "domain": "nationalguard.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 773225.59377722,
      "curr_month_visits": 773225.59377722,
      "unique_users": 514954.830561538,
      "pages_per_visit": 2.56520316746343
    },
    {
      "global_rank": 15164,
      "category_rank": 66,
      "domain": "prc.gov.ph",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 4083186.68646406,
      "curr_month_visits": 4083186.68646406,
      "unique_users": 1507834.80297172,
      "pages_per_visit": 4.17827793737595
    },
    {
      "global_rank": 2380,
      "category_rank": 66,
      "domain": "nyc.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 19826407.6302952,
      "curr_month_visits": 19826407.6302952,
      "unique_users": 6419222.62339248,
      "pages_per_visit": 5.81015323595235
    },
    {
      "global_rank": 28319,
      "category_rank": 66,
      "domain": "vfsvisaonline.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2026897.83619844,
      "curr_month_visits": 2026897.83619844,
      "unique_users": 638252.752571887,
      "pages_per_visit": 4.64798949576008
    },
    {
      "global_rank": 15209,
      "category_rank": 67,
      "domain": "interpol.int",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5566295.006234,
      "curr_month_visits": 5566295.006234,
      "unique_users": 1735977.05302363,
      "pages_per_visit": 2.87389343497669
    },
    {
      "global_rank": 28349,
      "category_rank": 67,
      "domain": "fiscoetasse.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2851790.96240366,
      "curr_month_visits": 2851790.96240366,
      "unique_users": 1845789.11933463,
      "pages_per_visit": 1.64354377081329
    },
    {
      "global_rank": 486988,
      "category_rank": 67,
      "domain": "blounttn.gov",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 56401.1098518807,
      "curr_month_visits": 56401.1098518807,
      "unique_users": 31277.3332344085,
      "pages_per_visit": 2.29695835253754
    },
    {
      "global_rank": 2390,
      "category_rank": 67,
      "domain": "udiseplus.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 10631096.158885,
      "curr_month_visits": 10631096.158885,
      "unique_users": 2041078.99377675,
      "pages_per_visit": 14.1057255527331
    },
    {
      "global_rank": 73390,
      "category_rank": 67,
      "domain": "fbijobs.gov",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 697201.348440407,
      "curr_month_visits": 697201.348440407,
      "unique_users": 422739.199016239,
      "pages_per_visit": 3.46390922042727
    },
    {
      "global_rank": 279510,
      "category_rank": 67,
      "domain": "manifestlaw.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 112691.578508505,
      "curr_month_visits": 112691.578508505,
      "unique_users": 70683.0504396476,
      "pages_per_visit": 2.38638255633302
    },
    {
      "global_rank": 15217,
      "category_rank": 68,
      "domain": "casetext.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5209478.84926763,
      "curr_month_visits": 5209478.84926763,
      "unique_users": 3252137.95983606,
      "pages_per_visit": 2.35600287027609
    },
    {
      "global_rank": 74577,
      "category_rank": 68,
      "domain": "hamraazmp8.gov.in",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 567444.779211596,
      "curr_month_visits": 567444.779211596,
      "unique_users": 236617.226665837,
      "pages_per_visit": 7.47625211921168
    },
    {
      "global_rank": 279937,
      "category_rank": 68,
      "domain": "nationwidevisas.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 197313.919934664,
      "curr_month_visits": 197313.919934664,
      "unique_users": 115318.663742492,
      "pages_per_visit": 1.60039660878919
    },
    {
      "global_rank": 497504,
      "category_rank": 68,
      "domain": "parlament.ua",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 95177.539024619,
      "curr_month_visits": 95177.539024619,
      "unique_users": 43703.9488723589,
      "pages_per_visit": 1.47489166731835
    },
    {
      "global_rank": 29115,
      "category_rank": 68,
      "domain": "ehoadon.vn",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2320377.62884202,
      "curr_month_visits": 2320377.62884202,
      "unique_users": 374336.337457305,
      "pages_per_visit": 3.99636830650836
    },
    {
      "global_rank": 2449,
      "category_rank": 68,
      "domain": "ato.gov.au",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 19835942.5213633,
      "curr_month_visits": 19835942.5213633,
      "unique_users": 7852552.01561132,
      "pages_per_visit": 7.59134652865582
    },
    {
      "global_rank": 2464,
      "category_rank": 69,
      "domain": "gencat.cat",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 18343023.5705786,
      "curr_month_visits": 18343023.5705786,
      "unique_users": 5161593.31710496,
      "pages_per_visit": 5.91426333109748
    },
    {
      "global_rank": 29225,
      "category_rank": 69,
      "domain": "regione.fvg.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1664694.87318298,
      "curr_month_visits": 1664694.87318298,
      "unique_users": 660615.253495867,
      "pages_per_visit": 5.36211397691222
    },
    {
      "global_rank": 74651,
      "category_rank": 69,
      "domain": "militaryonesource.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 925312.434117929,
      "curr_month_visits": 925312.434117929,
      "unique_users": 662004.610206763,
      "pages_per_visit": 2.05231884298117
    },
    {
      "global_rank": 283866,
      "category_rank": 69,
      "domain": "ecimsglobal.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 96428.7164649704,
      "curr_month_visits": 96428.7164649704,
      "unique_users": 30175.7260317488,
      "pages_per_visit": 9.3236746683488
    },
    {
      "global_rank": 504087,
      "category_rank": 69,
      "domain": "vanburencountymi.gov",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 38152.5126512065,
      "curr_month_visits": 38152.5126512065,
      "unique_users": 19666.868259579,
      "pages_per_visit": 4.02200425960251
    },
    {
      "global_rank": 15251,
      "category_rank": 69,
      "domain": "luatvietnam.vn",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5738793.33643204,
      "curr_month_visits": 5738793.33643204,
      "unique_users": 3334966.59105817,
      "pages_per_visit": 1.81033280691193
    },
    {
      "global_rank": 29437,
      "category_rank": 70,
      "domain": "nbi.gov.ph",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1683628.02997669,
      "curr_month_visits": 1683628.02997669,
      "unique_users": 682385.139002597,
      "pages_per_visit": 6.27519292731937
    },
    {
      "global_rank": 75399,
      "category_rank": 70,
      "domain": "uso.org",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 669190.331391745,
      "curr_month_visits": 669190.331391745,
      "unique_users": 447757.234581802,
      "pages_per_visit": 2.05745657585582
    },
    {
      "global_rank": 507136,
      "category_rank": 70,
      "domain": "epcountytx.gov",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 48867.6563266388,
      "curr_month_visits": 48867.6563266388,
      "unique_users": 15021.8333588837,
      "pages_per_visit": 8.35367651088266
    },
    {
      "global_rank": 16117,
      "category_rank": 70,
      "domain": "uspto.gov",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3238839.02402158,
      "curr_month_visits": 3238839.02402158,
      "unique_users": 1302168.05722351,
      "pages_per_visit": 6.03573001474477
    },
    {
      "global_rank": 286495,
      "category_rank": 70,
      "domain": "canadianvisaexpert.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 152886.566582022,
      "curr_month_visits": 152886.566582022,
      "unique_users": 85942.3158477369,
      "pages_per_visit": 2.79839946929039
    },
    {
      "global_rank": 2508,
      "category_rank": 70,
      "domain": "iam.gov.sa",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 19630352.7554579,
      "curr_month_visits": 19630352.7554579,
      "unique_users": 6322234.61184632,
      "pages_per_visit": 5.45020071374561
    },
    {
      "global_rank": 2596,
      "category_rank": 71,
      "domain": "gva.es",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 16195230.0535112,
      "curr_month_visits": 16195230.0535112,
      "unique_users": 3171423.71112043,
      "pages_per_visit": 7.632419118347
    },
    {
      "global_rank": 519950,
      "category_rank": 71,
      "domain": "crime-stoppers.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 99333.7387438948,
      "curr_month_visits": 99333.7387438948,
      "unique_users": 30041.7534534599,
      "pages_per_visit": 1.15817301081425
    },
    {
      "global_rank": 29705,
      "category_rank": 71,
      "domain": "regione.sicilia.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1806758.35506441,
      "curr_month_visits": 1806758.35506441,
      "unique_users": 594983.244290009,
      "pages_per_visit": 5.65428502566799
    },
    {
      "global_rank": 16182,
      "category_rank": 71,
      "domain": "scjn.gob.mx",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3325709.08330541,
      "curr_month_visits": 3325709.08330541,
      "unique_users": 1156620.85281844,
      "pages_per_visit": 5.38522304063173
    },
    {
      "global_rank": 287596,
      "category_rank": 71,
      "domain": "immigrationhelp.org",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 195923.843275123,
      "curr_month_visits": 195923.843275123,
      "unique_users": 122124.965269731,
      "pages_per_visit": 1.49730276326117
    },
    {
      "global_rank": 77483,
      "category_rank": 71,
      "domain": "airandspaceforces.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 975100.493984747,
      "curr_month_visits": 975100.493984747,
      "unique_users": 584972.365556858,
      "pages_per_visit": 1.54887803119155
    },
    {
      "global_rank": 2609,
      "category_rank": 72,
      "domain": "gib.gov.tr",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 16822232.4031893,
      "curr_month_visits": 16822232.4031893,
      "unique_users": 5570329.39289125,
      "pages_per_visit": 7.21818108355022
    },
    {
      "global_rank": 523036,
      "category_rank": 72,
      "domain": "phishing.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 69412.720577607,
      "curr_month_visits": 69412.720577607,
      "unique_users": 37133.2557729136,
      "pages_per_visit": 1.35241703022102
    },
    {
      "global_rank": 30086,
      "category_rank": 72,
      "domain": "checkpeople.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2700281.13449674,
      "curr_month_visits": 2700281.13449674,
      "unique_users": 2123509.97345174,
      "pages_per_visit": 3.04053450342764
    },
    {
      "global_rank": 77734,
      "category_rank": 72,
      "domain": "dla.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 596114.598316867,
      "curr_month_visits": 596114.598316867,
      "unique_users": 243403.529128136,
      "pages_per_visit": 4.99845575566941
    },
    {
      "global_rank": 16235,
      "category_rank": 72,
      "domain": "bengo4.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 4203542.9370608,
      "curr_month_visits": 4203542.9370608,
      "unique_users": 2982971.13905111,
      "pages_per_visit": 2.39094669262894
    },
    {
      "global_rank": 287971,
      "category_rank": 72,
      "domain": "apnatoronto.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 148700.1651235,
      "curr_month_visits": 148700.1651235,
      "unique_users": 50188.9375380188,
      "pages_per_visit": 3.70973025426814
    },
    {
      "global_rank": 30383,
      "category_rank": 73,
      "domain": "editorialedomani.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 3283401.35281898,
      "curr_month_visits": 3283401.35281898,
      "unique_users": 901031.260543414,
      "pages_per_visit": 2.45119167735099
    },
    {
      "global_rank": 16390,
      "category_rank": 73,
      "domain": "66law.cn",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5612376.85481964,
      "curr_month_visits": 5612376.85481964,
      "unique_users": 4082037.08781421,
      "pages_per_visit": 1.30800949633233
    },
    {
      "global_rank": 2612,
      "category_rank": 73,
      "domain": "gov.hu",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 14716741.8760079,
      "curr_month_visits": 14716741.8760079,
      "unique_users": 4059137.62966528,
      "pages_per_visit": 8.71868623438841
    },
    {
      "global_rank": 289774,
      "category_rank": 73,
      "domain": "indiancitizenshiponline.nic.in",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 109333.813532142,
      "curr_month_visits": 109333.813532142,
      "unique_users": 55265.4116060209,
      "pages_per_visit": 4.23719509600369
    },
    {
      "global_rank": 78450,
      "category_rank": 73,
      "domain": "uscg.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 868320.681349186,
      "curr_month_visits": 868320.681349186,
      "unique_users": 442359.066014699,
      "pages_per_visit": 2.98100785865283
    },
    {
      "global_rank": 297107,
      "category_rank": 74,
      "domain": "pipefile.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 188906.447189078,
      "curr_month_visits": 188906.447189078,
      "unique_users": 82751.7654968782,
      "pages_per_visit": 2.33110031406505
    },
    {
      "global_rank": 78547,
      "category_rank": 74,
      "domain": "bteexam.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 667365.159470606,
      "curr_month_visits": 667365.159470606,
      "unique_users": 154772.121775821,
      "pages_per_visit": 10.5223907474516
    },
    {
      "global_rank": 30590,
      "category_rank": 74,
      "domain": "cgn.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1535678.90624657,
      "curr_month_visits": 1535678.90624657,
      "unique_users": 172469.565250842,
      "pages_per_visit": 11.2705886403613
    },
    {
      "global_rank": 524592,
      "category_rank": 74,
      "domain": "cookcountysheriffil.gov",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 69389.6308207934,
      "curr_month_visits": 69389.6308207934,
      "unique_users": 42693.436278455,
      "pages_per_visit": 2.06025232806654
    },
    {
      "global_rank": 2613,
      "category_rank": 74,
      "domain": "kerala.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 16992171.8097681,
      "curr_month_visits": 16992171.8097681,
      "unique_users": 4439231.77658192,
      "pages_per_visit": 6.36461240441691
    },
    {
      "global_rank": 16541,
      "category_rank": 74,
      "domain": "wipo.int",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2814244.96755047,
      "curr_month_visits": 2814244.96755047,
      "unique_users": 1272601.69251873,
      "pages_per_visit": 7.3158435759392
    },
    {
      "global_rank": 16667,
      "category_rank": 75,
      "domain": "tylerhost.net",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3333290.17207161,
      "curr_month_visits": 3333290.17207161,
      "unique_users": 822489.728977893,
      "pages_per_visit": 6.4831277767717
    },
    {
      "global_rank": 30607,
      "category_rank": 75,
      "domain": "achgut.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2617561.0183045,
      "curr_month_visits": 2617561.0183045,
      "unique_users": 419966.043196398,
      "pages_per_visit": 2.5684664689634
    },
    {
      "global_rank": 539221,
      "category_rank": 75,
      "domain": "federalcriminaldefenseattorney.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 66899.1764910681,
      "curr_month_visits": 66899.1764910681,
      "unique_users": 43651.2689943582,
      "pages_per_visit": 1.89258229406481
    },
    {
      "global_rank": 2614,
      "category_rank": 75,
      "domain": "rosminzdrav.ru",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 9403213.48143915,
      "curr_month_visits": 9403213.48143915,
      "unique_users": 3338776.04405155,
      "pages_per_visit": 15.9180864908246
    },
    {
      "global_rank": 78618,
      "category_rank": 75,
      "domain": "army.gr",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 578023.737790035,
      "curr_month_visits": 578023.737790035,
      "unique_users": 198926.603946264,
      "pages_per_visit": 5.20120265908328
    },
    {
      "global_rank": 297767,
      "category_rank": 75,
      "domain": "acro.police.uk",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 128302.91336369,
      "curr_month_visits": 128302.91336369,
      "unique_users": 60790.8556566027,
      "pages_per_visit": 3.4549061882605
    },
    {
      "global_rank": 79553,
      "category_rank": 76,
      "domain": "ksb.gov.in",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 405297.214704752,
      "curr_month_visits": 405297.214704752,
      "unique_users": 155806.152446924,
      "pages_per_visit": 8.63260447066602
    },
    {
      "global_rank": 299937,
      "category_rank": 76,
      "domain": "visaslots.info",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 180426.918033919,
      "curr_month_visits": 180426.918033919,
      "unique_users": 27194.1787249539,
      "pages_per_visit": 2.70601750165759
    },
    {
      "global_rank": 16729,
      "category_rank": 76,
      "domain": "findlaw.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 5130502.59777156,
      "curr_month_visits": 5130502.59777156,
      "unique_users": 3807162.40777294,
      "pages_per_visit": 1.74212723625692
    },
    {
      "global_rank": 540644,
      "category_rank": 76,
      "domain": "idtheftcenter.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 57482.9447110411,
      "curr_month_visits": 57482.9447110411,
      "unique_users": 36672.2841766428,
      "pages_per_visit": 1.94853575044937
    },
    {
      "global_rank": 30637,
      "category_rank": 76,
      "domain": "concorsando.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2339982.63725779,
      "curr_month_visits": 2339982.63725779,
      "unique_users": 1056136.31766123,
      "pages_per_visit": 2.6212886731398
    },
    {
      "global_rank": 2622,
      "category_rank": 76,
      "domain": "ecsn.gov.au",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 13148771.017484,
      "curr_month_visits": 13148771.017484,
      "unique_users": 6758011.62385253,
      "pages_per_visit": 9.58912160586151
    },
    {
      "global_rank": 30966,
      "category_rank": 77,
      "domain": "iclnoticias.com.br",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 3071226.92447259,
      "curr_month_visits": 3071226.92447259,
      "unique_users": 1374121.44347973,
      "pages_per_visit": 1.59979647613791
    },
    {
      "global_rank": 2654,
      "category_rank": 77,
      "domain": "slate.com",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 26695337.8884612,
      "curr_month_visits": 26695337.8884612,
      "unique_users": 10810342.665741,
      "pages_per_visit": 2.32858194850088
    },
    {
      "global_rank": 552716,
      "category_rank": 77,
      "domain": "virginiacourtrecords.us",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 55553.2007539201,
      "curr_month_visits": 55553.2007539201,
      "unique_users": 38057.1717280599,
      "pages_per_visit": 3.22277168679584
    },
    {
      "global_rank": 16907,
      "category_rank": 77,
      "domain": "lexisnexis.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 4023736.34205977,
      "curr_month_visits": 4023736.34205977,
      "unique_users": 1586828.27071608,
      "pages_per_visit": 3.62134778387046
    },
    {
      "global_rank": 82526,
      "category_rank": 77,
      "domain": "defensie.nl",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 841652.327970418,
      "curr_month_visits": 841652.327970418,
      "unique_users": 462350.647231178,
      "pages_per_visit": 2.62527211694255
    },
    {
      "global_rank": 308974,
      "category_rank": 77,
      "domain": "celpip.biz",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 89776.3137957868,
      "curr_month_visits": 89776.3137957868,
      "unique_users": 37688.2160685241,
      "pages_per_visit": 4.4314171969716
    },
    {
      "global_rank": 311160,
      "category_rank": 78,
      "domain": "all-migration.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 209451.668507236,
      "curr_month_visits": 209451.668507236,
      "unique_users": 125298.220030318,
      "pages_per_visit": 1.74717389434212
    },
    {
      "global_rank": 559617,
      "category_rank": 78,
      "domain": "mikesblog.me",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 72431.6724567302,
      "curr_month_visits": 72431.6724567302,
      "unique_users": 56147.7162746353,
      "pages_per_visit": 1.6625519629331
    },
    {
      "global_rank": 2692,
      "category_rank": 78,
      "domain": "maharashtra.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 21421503.5198913,
      "curr_month_visits": 21421503.5198913,
      "unique_users": 7751628.73092401,
      "pages_per_visit": 6.39766222214493
    },
    {
      "global_rank": 17417,
      "category_rank": 78,
      "domain": "tjmt.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2632113.76210625,
      "curr_month_visits": 2632113.76210625,
      "unique_users": 389941.578907822,
      "pages_per_visit": 12.1973989479906
    },
    {
      "global_rank": 83064,
      "category_rank": 78,
      "domain": "joinindiannavy.gov.in",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 1185596.34839048,
      "curr_month_visits": 1185596.34839048,
      "unique_users": 619033.766067287,
      "pages_per_visit": 5.90981688818277
    },
    {
      "global_rank": 31175,
      "category_rank": 78,
      "domain": "novascotia.ca",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1722022.07383779,
      "curr_month_visits": 1722022.07383779,
      "unique_users": 638003.456277915,
      "pages_per_visit": 4.30053987481033
    },
    {
      "global_rank": 582202,
      "category_rank": 79,
      "domain": "personsearchers.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 30447.8792588815,
      "curr_month_visits": 30447.8792588815,
      "unique_users": 16224.2973224325,
      "pages_per_visit": 3.94677280345435
    },
    {
      "global_rank": 17729,
      "category_rank": 79,
      "domain": "ssadafile.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3083180.46929393,
      "curr_month_visits": 3083180.46929393,
      "unique_users": 426304.88755595,
      "pages_per_visit": 11.1050626061653
    },
    {
      "global_rank": 31750,
      "category_rank": 79,
      "domain": "politie.nl",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1795639.32857961,
      "curr_month_visits": 1795639.32857961,
      "unique_users": 1124366.52809715,
      "pages_per_visit": 3.39277518277436
    },
    {
      "global_rank": 317625,
      "category_rank": 79,
      "domain": "settlement.org",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 152873.111485905,
      "curr_month_visits": 152873.111485905,
      "unique_users": 107460.261769192,
      "pages_per_visit": 1.75443415036316
    },
    {
      "global_rank": 2708,
      "category_rank": 79,
      "domain": "pa.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 17343780.7949138,
      "curr_month_visits": 17343780.7949138,
      "unique_users": 6734054.92213158,
      "pages_per_visit": 5.24720056766223
    },
    {
      "global_rank": 83071,
      "category_rank": 79,
      "domain": "arrse.co.uk",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 357578.214289948,
      "curr_month_visits": 357578.214289948,
      "unique_users": 124347.354910066,
      "pages_per_visit": 10.6715784630625
    },
    {
      "global_rank": 319925,
      "category_rank": 80,
      "domain": "lefrancaisdesaffaires.fr",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 132583.268103906,
      "curr_month_visits": 132583.268103906,
      "unique_users": 66286.4026822926,
      "pages_per_visit": 3.06240278645472
    },
    {
      "global_rank": 32413,
      "category_rank": 80,
      "domain": "pna.gov.ph",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2739096.06560122,
      "curr_month_visits": 2739096.06560122,
      "unique_users": 1789540.59552414,
      "pages_per_visit": 1.70364499722875
    },
    {
      "global_rank": 2727,
      "category_rank": 80,
      "domain": "clave.gob.es",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 19150503.2104884,
      "curr_month_visits": 19150503.2104884,
      "unique_users": 8127105.14961853,
      "pages_per_visit": 5.15337596967044
    },
    {
      "global_rank": 596521,
      "category_rank": 80,
      "domain": "phose.co.kr",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 29334.3716283968,
      "curr_month_visits": 29334.3716283968,
      "unique_users": 10433.8689879822,
      "pages_per_visit": 5.83960337332737
    },
    {
      "global_rank": 83263,
      "category_rank": 80,
      "domain": "legion.org",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 565570.640002692,
      "curr_month_visits": 565570.640002692,
      "unique_users": 392638.889098476,
      "pages_per_visit": 2.55731798981541
    },
    {
      "global_rank": 17852,
      "category_rank": 80,
      "domain": "msd.govt.nz",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2991290.0719508,
      "curr_month_visits": 2991290.0719508,
      "unique_users": 662210.580249217,
      "pages_per_visit": 5.3136089318126
    },
    {
      "global_rank": 83654,
      "category_rank": 81,
      "domain": "navalnews.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 893058.30456278,
      "curr_month_visits": 893058.30456278,
      "unique_users": 440630.980811774,
      "pages_per_visit": 1.63400363987457
    },
    {
      "global_rank": 600087,
      "category_rank": 81,
      "domain": "ein-taxfiling.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 42211.0333580173,
      "curr_month_visits": 42211.0333580173,
      "unique_users": 30565.2299213791,
      "pages_per_visit": 2.55210389438881
    },
    {
      "global_rank": 32835,
      "category_rank": 81,
      "domain": "jfrs.jus.br",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1320070.75441029,
      "curr_month_visits": 1320070.75441029,
      "unique_users": 188905.827070383,
      "pages_per_visit": 11.5570679207869
    },
    {
      "global_rank": 323746,
      "category_rank": 81,
      "domain": "pica.gov.jm",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 120183.276272255,
      "curr_month_visits": 120183.276272255,
      "unique_users": 62801.1372901911,
      "pages_per_visit": 2.84769011763148
    },
    {
      "global_rank": 2762,
      "category_rank": 81,
      "domain": "cdmx.gob.mx",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 20154133.9482219,
      "curr_month_visits": 20154133.9482219,
      "unique_users": 5923596.84558966,
      "pages_per_visit": 5.38095215278473
    },
    {
      "global_rank": 17978,
      "category_rank": 81,
      "domain": "onr.org.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3033639.38531921,
      "curr_month_visits": 3033639.38531921,
      "unique_users": 676930.474123778,
      "pages_per_visit": 8.83769948158773
    },
    {
      "global_rank": 2765,
      "category_rank": 82,
      "domain": "franceconnect.gouv.fr",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 25021226.2607069,
      "curr_month_visits": 25021226.2607069,
      "unique_users": 11932088.2202112,
      "pages_per_visit": 2.72132523749938
    },
    {
      "global_rank": 18091,
      "category_rank": 82,
      "domain": "inpi.fr",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2690216.35714857,
      "curr_month_visits": 2690216.35714857,
      "unique_users": 981974.148056347,
      "pages_per_visit": 7.19494439140869
    },
    {
      "global_rank": 326279,
      "category_rank": 82,
      "domain": "apps.gc.ca",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 75250.0904052604,
      "curr_month_visits": 75250.0904052604,
      "unique_users": 38244.8788774698,
      "pages_per_visit": 6.18380423762313
    },
    {
      "global_rank": 83896,
      "category_rank": 82,
      "domain": "federalpay.org",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 685684.604566864,
      "curr_month_visits": 685684.604566864,
      "unique_users": 475003.772054163,
      "pages_per_visit": 3.84277240179762
    },
    {
      "global_rank": 602473,
      "category_rank": 82,
      "domain": "zodiackillerfacts.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 46029.6242830333,
      "curr_month_visits": 46029.6242830333,
      "unique_users": 22172.648041354,
      "pages_per_visit": 3.4850526689773
    },
    {
      "global_rank": 33165,
      "category_rank": 82,
      "domain": "zucchetti.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1783320.48775391,
      "curr_month_visits": 1783320.48775391,
      "unique_users": 232732.79911723,
      "pages_per_visit": 7.00504246204176
    },
    {
      "global_rank": 2879,
      "category_rank": 83,
      "domain": "ba.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 17265394.584178,
      "curr_month_visits": 17265394.584178,
      "unique_users": 4213297.23362533,
      "pages_per_visit": 5.92915162268599
    },
    {
      "global_rank": 329807,
      "category_rank": 83,
      "domain": "migration.sa.gov.au",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 129082.623561407,
      "curr_month_visits": 129082.623561407,
      "unique_users": 58750.3439289679,
      "pages_per_visit": 5.00310630112817
    },
    {
      "global_rank": 84959,
      "category_rank": 83,
      "domain": "wojsko-polskie.pl",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 647827.467397554,
      "curr_month_visits": 647827.467397554,
      "unique_users": 336777.871867922,
      "pages_per_visit": 3.15413859115501
    },
    {
      "global_rank": 33538,
      "category_rank": 83,
      "domain": "jacobin.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2387738.00796347,
      "curr_month_visits": 2387738.00796347,
      "unique_users": 919143.086619052,
      "pages_per_visit": 1.99895611095501
    },
    {
      "global_rank": 603471,
      "category_rank": 83,
      "domain": "rosprizyv.ru",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 100669.109530715,
      "curr_month_visits": 100669.109530715,
      "unique_users": 50958.7566749321,
      "pages_per_visit": 1.59962558179817
    },
    {
      "global_rank": 18607,
      "category_rank": 83,
      "domain": "tjce.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2738370.41183444,
      "curr_month_visits": 2738370.41183444,
      "unique_users": 354557.773777861,
      "pages_per_visit": 11.1936142008566
    },
    {
      "global_rank": 85970,
      "category_rank": 84,
      "domain": "geniusjankari.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 740956.448941471,
      "curr_month_visits": 740956.448941471,
      "unique_users": 385186.691507388,
      "pages_per_visit": 1.86780855458094
    },
    {
      "global_rank": 18838,
      "category_rank": 84,
      "domain": "etebligat.gov.tr",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2867701.66353298,
      "curr_month_visits": 2867701.66353298,
      "unique_users": 873631.383662799,
      "pages_per_visit": 5.04144097865034
    },
    {
      "global_rank": 331655,
      "category_rank": 84,
      "domain": "xn----ymcerm2jld2c.xn--mgbaam7a8h",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 118441.049707632,
      "curr_month_visits": 118441.049707632,
      "unique_users": 25690.2972689969,
      "pages_per_visit": 6.72099758870732
    },
    {
      "global_rank": 2906,
      "category_rank": 84,
      "domain": "gob.pe",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 24613966.3638744,
      "curr_month_visits": 24613966.3638744,
      "unique_users": 8119841.88183157,
      "pages_per_visit": 2.73286134634189
    },
    {
      "global_rank": 608116,
      "category_rank": 84,
      "domain": "justiceinspectorates.gov.uk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 61503.7629274718,
      "curr_month_visits": 61503.7629274718,
      "unique_users": 36878.7712414698,
      "pages_per_visit": 2.10410778000695
    },
    {
      "global_rank": 33746,
      "category_rank": 84,
      "domain": "lawnet.vn",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2170310.08970369,
      "curr_month_visits": 2170310.08970369,
      "unique_users": 1557828.80841743,
      "pages_per_visit": 1.79769774999132
    },
    {
      "global_rank": 18974,
      "category_rank": 85,
      "domain": "wolterskluwer.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 4552018.34147905,
      "curr_month_visits": 4552018.34147905,
      "unique_users": 2687372.11083321,
      "pages_per_visit": 1.88610096449107
    },
    {
      "global_rank": 2943,
      "category_rank": 85,
      "domain": "wa.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 14919170.362482,
      "curr_month_visits": 14919170.362482,
      "unique_users": 5445582.48483788,
      "pages_per_visit": 6.78104554521545
    },
    {
      "global_rank": 34301,
      "category_rank": 85,
      "domain": "tangerino.com.br",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2049193.23781848,
      "curr_month_visits": 2049193.23781848,
      "unique_users": 444666.853918206,
      "pages_per_visit": 3.84611854253084
    },
    {
      "global_rank": 87966,
      "category_rank": 85,
      "domain": "defense-arab.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 661257.574827351,
      "curr_month_visits": 661257.574827351,
      "unique_users": 180074.814080716,
      "pages_per_visit": 4.96991631335192
    },
    {
      "global_rank": 335361,
      "category_rank": 85,
      "domain": "simplecitizen.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 80186.4678300589,
      "curr_month_visits": 80186.4678300589,
      "unique_users": 33141.9222477221,
      "pages_per_visit": 5.63931369600867
    },
    {
      "global_rank": 610328,
      "category_rank": 85,
      "domain": "kriminalforsorgen.dk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 52104.3518241925,
      "curr_month_visits": 52104.3518241925,
      "unique_users": 28204.3870434146,
      "pages_per_visit": 2.87750556493348
    },
    {
      "global_rank": 88788,
      "category_rank": 86,
      "domain": "dod.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 423879.17615246,
      "curr_month_visits": 423879.17615246,
      "unique_users": 277417.67960742,
      "pages_per_visit": 6.02310317863799
    },
    {
      "global_rank": 343391,
      "category_rank": 86,
      "domain": "bal.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 103201.175880131,
      "curr_month_visits": 103201.175880131,
      "unique_users": 59974.8342593409,
      "pages_per_visit": 1.55503234581709
    },
    {
      "global_rank": 2945,
      "category_rank": 86,
      "domain": "telangana.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 13363291.6328612,
      "curr_month_visits": 13363291.6328612,
      "unique_users": 3571153.7117084,
      "pages_per_visit": 8.86386507816514
    },
    {
      "global_rank": 615912,
      "category_rank": 86,
      "domain": "inmatessearcher.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 49993.7983772957,
      "curr_month_visits": 49993.7983772957,
      "unique_users": 32745.9297026326,
      "pages_per_visit": 3.99005500835819
    },
    {
      "global_rank": 19188,
      "category_rank": 86,
      "domain": "tjpe.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2533416.38083851,
      "curr_month_visits": 2533416.38083851,
      "unique_users": 351735.089807748,
      "pages_per_visit": 10.4559370093409
    },
    {
      "global_rank": 35125,
      "category_rank": 86,
      "domain": "justice.gc.ca",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2564797.40611019,
      "curr_month_visits": 2564797.40611019,
      "unique_users": 1428706.59816847,
      "pages_per_visit": 2.12359667216085
    },
    {
      "global_rank": 90010,
      "category_rank": 87,
      "domain": "qtcm.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 477814.169938731,
      "curr_month_visits": 477814.169938731,
      "unique_users": 129547.167777009,
      "pages_per_visit": 7.27257371247119
    },
    {
      "global_rank": 348732,
      "category_rank": 87,
      "domain": "immigrationlawyers-london.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 175458.575858636,
      "curr_month_visits": 175458.575858636,
      "unique_users": 106458.182807201,
      "pages_per_visit": 1.66925747560931
    },
    {
      "global_rank": 2960,
      "category_rank": 87,
      "domain": "anses.gob.ar",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 14822543.4105793,
      "curr_month_visits": 14822543.4105793,
      "unique_users": 4354691.04075791,
      "pages_per_visit": 6.64007133680617
    },
    {
      "global_rank": 619877,
      "category_rank": 87,
      "domain": "nicic.gov",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 58737.6166170182,
      "curr_month_visits": 58737.6166170182,
      "unique_users": 33040.2591322708,
      "pages_per_visit": 1.83394314870156
    },
    {
      "global_rank": 35133,
      "category_rank": 87,
      "domain": "moreigr.org",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1432023.75125108,
      "curr_month_visits": 1432023.75125108,
      "unique_users": 719145.933358407,
      "pages_per_visit": 6.3426451053067
    },
    {
      "global_rank": 19287,
      "category_rank": 87,
      "domain": "tjpa.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2187903.28506291,
      "curr_month_visits": 2187903.28506291,
      "unique_users": 367789.055862499,
      "pages_per_visit": 11.7259867687534
    },
    {
      "global_rank": 357288,
      "category_rank": 88,
      "domain": "freemovement.org.uk",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 109718.300566755,
      "curr_month_visits": 109718.300566755,
      "unique_users": 58549.3787742408,
      "pages_per_visit": 1.96639473214439
    },
    {
      "global_rank": 90309,
      "category_rank": 88,
      "domain": "mod.gov.cn",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 510611.070741818,
      "curr_month_visits": 510611.070741818,
      "unique_users": 334842.3419219,
      "pages_per_visit": 2.33115634274658
    },
    {
      "global_rank": 621166,
      "category_rank": 88,
      "domain": "penalreform.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 56606.0728949388,
      "curr_month_visits": 56606.0728949388,
      "unique_users": 27619.2652990129,
      "pages_per_visit": 1.68494219981907
    },
    {
      "global_rank": 35271,
      "category_rank": 88,
      "domain": "registroimprese.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1332755.25919888,
      "curr_month_visits": 1332755.25919888,
      "unique_users": 505576.061707808,
      "pages_per_visit": 6.27095818286901
    },
    {
      "global_rank": 19775,
      "category_rank": 88,
      "domain": "instantcheckmate.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3315973.87825578,
      "curr_month_visits": 3315973.87825578,
      "unique_users": 2415968.45773814,
      "pages_per_visit": 3.82314309810024
    },
    {
      "global_rank": 2961,
      "category_rank": 88,
      "domain": "rs.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 17628209.1072386,
      "curr_month_visits": 17628209.1072386,
      "unique_users": 5095952.96069866,
      "pages_per_visit": 4.82469235840008
    },
    {
      "global_rank": 19977,
      "category_rank": 89,
      "domain": "cnj.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3440897.43515032,
      "curr_month_visits": 3440897.43515032,
      "unique_users": 1522079.22752232,
      "pages_per_visit": 3.87108600739444
    },
    {
      "global_rank": 91566,
      "category_rank": 89,
      "domain": "rmc.ca",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 548849.509347967,
      "curr_month_visits": 548849.509347967,
      "unique_users": 30485.1006951183,
      "pages_per_visit": 8.35584389211336
    },
    {
      "global_rank": 35559,
      "category_rank": 89,
      "domain": "informazionescuola.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2717304.73385,
      "curr_month_visits": 2717304.73385,
      "unique_users": 1744997.15723526,
      "pages_per_visit": 1.51124606760255
    },
    {
      "global_rank": 357936,
      "category_rank": 89,
      "domain": "immigrer.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 124588.237801283,
      "curr_month_visits": 124588.237801283,
      "unique_users": 72158.5292578615,
      "pages_per_visit": 1.70637133535607
    },
    {
      "global_rank": 3005,
      "category_rank": 89,
      "domain": "kemenkeu.go.id",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 15014462.7280944,
      "curr_month_visits": 15014462.7280944,
      "unique_users": 3779200.17371298,
      "pages_per_visit": 7.58472691033554
    },
    {
      "global_rank": 627432,
      "category_rank": 89,
      "domain": "zodiackiller.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 46857.9492355997,
      "curr_month_visits": 46857.9492355997,
      "unique_users": 22827.7770891964,
      "pages_per_visit": 5.07973312072287
    },
    {
      "global_rank": 3024,
      "category_rank": 90,
      "domain": "admin.ch",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 16688120.9595156,
      "curr_month_visits": 16688120.9595156,
      "unique_users": 5337187.79251106,
      "pages_per_visit": 5.61340987845065
    },
    {
      "global_rank": 362717,
      "category_rank": 90,
      "domain": "visaplace.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 145468.083456013,
      "curr_month_visits": 145468.083456013,
      "unique_users": 89219.9274918318,
      "pages_per_visit": 1.79741093070735
    },
    {
      "global_rank": 92627,
      "category_rank": 90,
      "domain": "mar.mil.br",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 489138.751272262,
      "curr_month_visits": 489138.751272262,
      "unique_users": 155989.308733041,
      "pages_per_visit": 4.68855013446478
    },
    {
      "global_rank": 20394,
      "category_rank": 90,
      "domain": "immigration.govt.nz",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2786454.15322583,
      "curr_month_visits": 2786454.15322583,
      "unique_users": 1103121.48007539,
      "pages_per_visit": 6.16991189796003
    },
    {
      "global_rank": 638542,
      "category_rank": 90,
      "domain": "voragine.co",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 106716.858314574,
      "curr_month_visits": 106716.858314574,
      "unique_users": 56567.8006045953,
      "pages_per_visit": 1.61043130547439
    },
    {
      "global_rank": 36118,
      "category_rank": 90,
      "domain": "nuwber.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1669721.33872485,
      "curr_month_visits": 1669721.33872485,
      "unique_users": 1317100.21179554,
      "pages_per_visit": 2.86842571704309
    },
    {
      "global_rank": 3073,
      "category_rank": 91,
      "domain": "madrid.org",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 13907219.1286167,
      "curr_month_visits": 13907219.1286167,
      "unique_users": 2560274.61933231,
      "pages_per_visit": 7.90842836770433
    },
    {
      "global_rank": 20424,
      "category_rank": 91,
      "domain": "diputados.gob.mx",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3843274.32361181,
      "curr_month_visits": 3843274.32361181,
      "unique_users": 1680271.61965265,
      "pages_per_visit": 2.4651326150261
    },
    {
      "global_rank": 92628,
      "category_rank": 91,
      "domain": "forcesnews.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 858770.558410187,
      "curr_month_visits": 858770.558410187,
      "unique_users": 518624.163665631,
      "pages_per_visit": 1.55542107759102
    },
    {
      "global_rank": 36202,
      "category_rank": 91,
      "domain": "minv.sk",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1668946.84467989,
      "curr_month_visits": 1668946.84467989,
      "unique_users": 645747.404800051,
      "pages_per_visit": 3.99133772830792
    },
    {
      "global_rank": 640175,
      "category_rank": 91,
      "domain": "inmatesearchtexas.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 39172.339508559,
      "curr_month_visits": 39172.339508559,
      "unique_users": 25453.7715243685,
      "pages_per_visit": 1.78465386775777
    },
    {
      "global_rank": 378598,
      "category_rank": 91,
      "domain": "rapidtranslate.org",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 116992.653234039,
      "curr_month_visits": 116992.653234039,
      "unique_users": 58698.219612577,
      "pages_per_visit": 1.65275285141064
    },
    {
      "global_rank": 36390,
      "category_rank": 92,
      "domain": "quiz-lounge.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1242815.31434278,
      "curr_month_visits": 1242815.31434278,
      "unique_users": 825883.410143958,
      "pages_per_visit": 16.1063365188643
    },
    {
      "global_rank": 20453,
      "category_rank": 92,
      "domain": "aclu.org",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2292108.3508322,
      "curr_month_visits": 2292108.3508322,
      "unique_users": 1661103.86943569,
      "pages_per_visit": 1.75332377362769
    },
    {
      "global_rank": 386531,
      "category_rank": 92,
      "domain": "myimmitracker.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 87084.6451423479,
      "curr_month_visits": 87084.6451423479,
      "unique_users": 31252.7778258193,
      "pages_per_visit": 3.40873135765947
    },
    {
      "global_rank": 3115,
      "category_rank": 92,
      "domain": "ohio.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 13517978.6732027,
      "curr_month_visits": 13517978.6732027,
      "unique_users": 4477772.37041315,
      "pages_per_visit": 7.50952725938881
    },
    {
      "global_rank": 654314,
      "category_rank": 92,
      "domain": "mansjumis.lv",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 47294.1441551501,
      "curr_month_visits": 47294.1441551501,
      "unique_users": 13814.9340352985,
      "pages_per_visit": 6.22468843313428
    },
    {
      "global_rank": 94504,
      "category_rank": 92,
      "domain": "crmforce.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 439580.771424994,
      "curr_month_visits": 439580.771424994,
      "unique_users": 200729.047779643,
      "pages_per_visit": 4.28968956921961
    },
    {
      "global_rank": 657087,
      "category_rank": 93,
      "domain": "freebackgroundchecks.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 29882.8496994165,
      "curr_month_visits": 29882.8496994165,
      "unique_users": 19654.0132821584,
      "pages_per_visit": 2.05409617806182
    },
    {
      "global_rank": 20508,
      "category_rank": 93,
      "domain": "judicial.gov.tw",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2791232.32879924,
      "curr_month_visits": 2791232.32879924,
      "unique_users": 1057385.52459461,
      "pages_per_visit": 4.69086524402827
    },
    {
      "global_rank": 97411,
      "category_rank": 93,
      "domain": "conservativeundergroundnews.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 591874.523107784,
      "curr_month_visits": 591874.523107784,
      "unique_users": 140323.809599224,
      "pages_per_visit": 1.92027812748613
    },
    {
      "global_rank": 36590,
      "category_rank": 93,
      "domain": "impresainungiorno.gov.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 820740.559231514,
      "curr_month_visits": 820740.559231514,
      "unique_users": 194055.61828495,
      "pages_per_visit": 17.4299779726786
    },
    {
      "global_rank": 3193,
      "category_rank": 93,
      "domain": "belgium.be",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 16305300.6482776,
      "curr_month_visits": 16305300.6482776,
      "unique_users": 6452481.08220532,
      "pages_per_visit": 4.86728945916261
    },
    {
      "global_rank": 390734,
      "category_rank": 93,
      "domain": "kyivcnap.gov.ua",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 103505.650768781,
      "curr_month_visits": 103505.650768781,
      "unique_users": 57533.4263935074,
      "pages_per_visit": 3.11122518826237
    },
    {
      "global_rank": 36814,
      "category_rank": 94,
      "domain": "51fapiao.cn",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2212165.32574236,
      "curr_month_visits": 2212165.32574236,
      "unique_users": 1194194.13219588,
      "pages_per_visit": 2.16699030500664
    },
    {
      "global_rank": 393905,
      "category_rank": 94,
      "domain": "immigrationforum.org",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 112035.562688212,
      "curr_month_visits": 112035.562688212,
      "unique_users": 78681.084792195,
      "pages_per_visit": 1.34900175696847
    },
    {
      "global_rank": 3234,
      "category_rank": 94,
      "domain": "sc.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 15725280.6565404,
      "curr_month_visits": 15725280.6565404,
      "unique_users": 4312338.57200482,
      "pages_per_visit": 6.31174862289049
    },
    {
      "global_rank": 664120,
      "category_rank": 94,
      "domain": "kdissw.or.kr",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 37597.6705681254,
      "curr_month_visits": 37597.6705681254,
      "unique_users": 12706.4833421479,
      "pages_per_visit": 6.96379688276375
    },
    {
      "global_rank": 99838,
      "category_rank": 94,
      "domain": "sarkariresult.tools",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 669430.761665827,
      "curr_month_visits": 669430.761665827,
      "unique_users": 349320.027481962,
      "pages_per_visit": 5.48082112795275
    },
    {
      "global_rank": 20909,
      "category_rank": 94,
      "domain": "oeffentlicher-dienst.info",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2373278.88887147,
      "curr_month_visits": 2373278.88887147,
      "unique_users": 1225265.96878805,
      "pages_per_visit": 4.81290954340549
    },
    {
      "global_rank": 20936,
      "category_rank": 95,
      "domain": "tjma.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2210274.01345475,
      "curr_month_visits": 2210274.01345475,
      "unique_users": 344045.948867493,
      "pages_per_visit": 10.7201283123854
    },
    {
      "global_rank": 398443,
      "category_rank": 95,
      "domain": "fairus.org",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 115328.982749204,
      "curr_month_visits": 115328.982749204,
      "unique_users": 85264.5969875456,
      "pages_per_visit": 1.46515533909852
    },
    {
      "global_rank": 100040,
      "category_rank": 95,
      "domain": "msa.gov.cn",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 415868.524292075,
      "curr_month_visits": 415868.524292075,
      "unique_users": 169469.565978105,
      "pages_per_visit": 5.79831011619319
    },
    {
      "global_rank": 671577,
      "category_rank": 95,
      "domain": "illinoiscourtrecords.us",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 47586.6303102478,
      "curr_month_visits": 47586.6303102478,
      "unique_users": 33350.908238956,
      "pages_per_visit": 3.22462685167799
    },
    {
      "global_rank": 3246,
      "category_rank": 95,
      "domain": "nvi.gov.tr",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 11938872.6992361,
      "curr_month_visits": 11938872.6992361,
      "unique_users": 5421729.32152615,
      "pages_per_visit": 4.38745542854034
    },
    {
      "global_rank": 37287,
      "category_rank": 95,
      "domain": "regione.puglia.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1441527.82717364,
      "curr_month_visits": 1441527.82717364,
      "unique_users": 523040.191821103,
      "pages_per_visit": 5.51950001413851
    },
    {
      "global_rank": 100270,
      "category_rank": 96,
      "domain": "sss.gov",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 652221.571259204,
      "curr_month_visits": 652221.571259204,
      "unique_users": 479500.907683823,
      "pages_per_visit": 2.08921018614354
    },
    {
      "global_rank": 399680,
      "category_rank": 96,
      "domain": "migration.wa.gov.au",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 101756.756388466,
      "curr_month_visits": 101756.756388466,
      "unique_users": 45311.067849024,
      "pages_per_visit": 3.62306810170199
    },
    {
      "global_rank": 679652,
      "category_rank": 96,
      "domain": "judgeanthony.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 70336.5453639171,
      "curr_month_visits": 70336.5453639171,
      "unique_users": 37332.6575129007,
      "pages_per_visit": 2.1895213035458
    },
    {
      "global_rank": 21058,
      "category_rank": 96,
      "domain": "javeng.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2182741.81881126,
      "curr_month_visits": 2182741.81881126,
      "unique_users": 756019.09363893,
      "pages_per_visit": 7.59300865664259
    },
    {
      "global_rank": 3285,
      "category_rank": 96,
      "domain": "gov.kr",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 8773509.76080526,
      "curr_month_visits": 8773509.76080526,
      "unique_users": 5035737.55092511,
      "pages_per_visit": 14.4812670062041
    },
    {
      "global_rank": 37391,
      "category_rank": 96,
      "domain": "midiamax.uol.com.br",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2678537.01022199,
      "curr_month_visits": 2678537.01022199,
      "unique_users": 1103218.47300958,
      "pages_per_visit": 1.89546884659967
    },
    {
      "global_rank": 37438,
      "category_rank": 97,
      "domain": "vineapps.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1644272.65561836,
      "curr_month_visits": 1644272.65561836,
      "unique_users": 720832.725276812,
      "pages_per_visit": 3.57780232534636
    },
    {
      "global_rank": 415586,
      "category_rank": 97,
      "domain": "immigrant.today",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 114360.617512081,
      "curr_month_visits": 114360.617512081,
      "unique_users": 64408.4156085565,
      "pages_per_visit": 1.9210138199369
    },
    {
      "global_rank": 21111,
      "category_rank": 97,
      "domain": "rocketlawyer.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2278784.94797207,
      "curr_month_visits": 2278784.94797207,
      "unique_users": 1471091.20620239,
      "pages_per_visit": 6.50626477047495
    },
    {
      "global_rank": 3294,
      "category_rank": 97,
      "domain": "virginia.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 13906318.0799433,
      "curr_month_visits": 13906318.0799433,
      "unique_users": 5085627.48330064,
      "pages_per_visit": 6.44875188652994
    },
    {
      "global_rank": 686638,
      "category_rank": 97,
      "domain": "nnedv.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 61862.7017644453,
      "curr_month_visits": 61862.7017644453,
      "unique_users": 33933.7373120714,
      "pages_per_visit": 1.63126332770187
    },
    {
      "global_rank": 104978,
      "category_rank": 97,
      "domain": "esut.de",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 591817.65016266,
      "curr_month_visits": 591817.65016266,
      "unique_users": 289496.964449957,
      "pages_per_visit": 1.81823990108764
    },
    {
      "global_rank": 21388,
      "category_rank": 98,
      "domain": "legalzoom.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2559319.58214123,
      "curr_month_visits": 2559319.58214123,
      "unique_users": 1481104.8398226,
      "pages_per_visit": 4.54213003634904
    },
    {
      "global_rank": 691412,
      "category_rank": 98,
      "domain": "freebackgroundcheck.io",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 55379.8160993656,
      "curr_month_visits": 55379.8160993656,
      "unique_users": 27887.9638743218,
      "pages_per_visit": 1.54110801336776
    },
    {
      "global_rank": 38352,
      "category_rank": 98,
      "domain": "wnd.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1825895.64641123,
      "curr_month_visits": 1825895.64641123,
      "unique_users": 320714.135418881,
      "pages_per_visit": 2.9445138363325
    },
    {
      "global_rank": 3319,
      "category_rank": 98,
      "domain": "kpu.go.id",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 7917095.49986593,
      "curr_month_visits": 7917095.49986593,
      "unique_users": 3329981.54522278,
      "pages_per_visit": 6.6010913557667
    },
    {
      "global_rank": 418295,
      "category_rank": 98,
      "domain": "eservices.police.lk",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 67425.419825686,
      "curr_month_visits": 67425.419825686,
      "unique_users": 15106.8239020509,
      "pages_per_visit": 4.64919079327803
    },
    {
      "global_rank": 105822,
      "category_rank": 98,
      "domain": "decea.mil.br",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 416109.620291725,
      "curr_month_visits": 416109.620291725,
      "unique_users": 98306.7496757828,
      "pages_per_visit": 5.86853012514217
    },
    {
      "global_rank": 419182,
      "category_rank": 99,
      "domain": "highcommission.gov.au",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 123545.308889579,
      "curr_month_visits": 123545.308889579,
      "unique_users": 67490.0607263642,
      "pages_per_visit": 1.85041404011914
    },
    {
      "global_rank": 39402,
      "category_rank": 99,
      "domain": "ilcorsaronero.link",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 990583.479101226,
      "curr_month_visits": 990583.479101226,
      "unique_users": 191197.981459834,
      "pages_per_visit": 5.54076693839978
    },
    {
      "global_rank": 3376,
      "category_rank": 99,
      "domain": "agenciatributaria.gob.es",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 13212336.0136409,
      "curr_month_visits": 13212336.0136409,
      "unique_users": 6072239.2829043,
      "pages_per_visit": 8.37907223303705
    },
    {
      "global_rank": 21623,
      "category_rank": 99,
      "domain": "court.gov.il",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1879298.2484239,
      "curr_month_visits": 1879298.2484239,
      "unique_users": 243418.388371561,
      "pages_per_visit": 12.5746151435481
    },
    {
      "global_rank": 106573,
      "category_rank": 99,
      "domain": "usamm.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 302057.282143388,
      "curr_month_visits": 302057.282143388,
      "unique_users": 199505.496577316,
      "pages_per_visit": 6.48222257363741
    },
    {
      "global_rank": 698952,
      "category_rank": 99,
      "domain": "prisonlegalnews.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 58253.6460251152,
      "curr_month_visits": 58253.6460251152,
      "unique_users": 40966.7787616693,
      "pages_per_visit": 1.37142591430058
    },
    {
      "global_rank": 39839,
      "category_rank": 100,
      "domain": "realrawnews.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 2259326.8346463,
      "curr_month_visits": 2259326.8346463,
      "unique_users": 381005.36090793,
      "pages_per_visit": 1.93887640653171
    },
    {
      "global_rank": 3382,
      "category_rank": 100,
      "domain": "gsis.gr",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 15805214.9163678,
      "curr_month_visits": 15805214.9163678,
      "unique_users": 3855226.34907154,
      "pages_per_visit": 4.96014007351508
    },
    {
      "global_rank": 701275,
      "category_rank": 100,
      "domain": "driverlicenseguide.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 36306.1145236256,
      "curr_month_visits": 36306.1145236256,
      "unique_users": 24522.9329350137,
      "pages_per_visit": 2.36906710206137
    },
    {
      "global_rank": 106905,
      "category_rank": 100,
      "domain": "surveysdrc.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 258523.922626615,
      "curr_month_visits": 258523.922626615,
      "unique_users": 122882.367607687,
      "pages_per_visit": 24.5714114982936
    },
    {
      "global_rank": 21691,
      "category_rank": 100,
      "domain": "jornaljf.com.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3881814.73072209,
      "curr_month_visits": 3881814.73072209,
      "unique_users": 1619233.59387594,
      "pages_per_visit": 1.17967944589387
    },
    {
      "global_rank": 420765,
      "category_rank": 100,
      "domain": "ubss.edu.au",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 52632.88886654,
      "curr_month_visits": 52632.88886654,
      "unique_users": 15267.3741447547,
      "pages_per_visit": 7.75495442298651
    },
    {
      "global_rank": 39844,
      "category_rank": 101,
      "domain": "companium.ru",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1343768.39684506,
      "curr_month_visits": 1343768.39684506,
      "unique_users": 904437.517684631,
      "pages_per_visit": 3.60601871918234
    },
    {
      "global_rank": 107706,
      "category_rank": 101,
      "domain": "dtic.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 667332.425833655,
      "curr_month_visits": 667332.425833655,
      "unique_users": 418043.482612936,
      "pages_per_visit": 1.71672997602462
    },
    {
      "global_rank": 3407,
      "category_rank": 101,
      "domain": "pajak.go.id",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 12068316.9533296,
      "curr_month_visits": 12068316.9533296,
      "unique_users": 3631234.34361198,
      "pages_per_visit": 9.35159424604537
    },
    {
      "global_rank": 718554,
      "category_rank": 101,
      "domain": "missingpersons.gov.au",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 40360.3267971943,
      "curr_month_visits": 40360.3267971943,
      "unique_users": 17559.8771787704,
      "pages_per_visit": 9.36215462192711
    },
    {
      "global_rank": 21776,
      "category_rank": 101,
      "domain": "astrea.net.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2883800.56439276,
      "curr_month_visits": 2883800.56439276,
      "unique_users": 117188.673650481,
      "pages_per_visit": 10.902416286733
    },
    {
      "global_rank": 421463,
      "category_rank": 101,
      "domain": "icascanada.ca",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 75989.4893448419,
      "curr_month_visits": 75989.4893448419,
      "unique_users": 30706.9013126013,
      "pages_per_visit": 3.8718762811821
    },
    {
      "global_rank": 3476,
      "category_rank": 102,
      "domain": "suomi.fi",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 14046771.2727241,
      "curr_month_visits": 14046771.2727241,
      "unique_users": 3993825.22393099,
      "pages_per_visit": 5.5892127485117
    },
    {
      "global_rank": 428780,
      "category_rank": 102,
      "domain": "schengenvisainfo.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 162916.405856982,
      "curr_month_visits": 162916.405856982,
      "unique_users": 95116.5838854011,
      "pages_per_visit": 1.92895686141275
    },
    {
      "global_rank": 21850,
      "category_rank": 102,
      "domain": "lawphil.net",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 4458343.12181532,
      "curr_month_visits": 4458343.12181532,
      "unique_users": 1629402.11290164,
      "pages_per_visit": 2.40052713872907
    },
    {
      "global_rank": 108810,
      "category_rank": 102,
      "domain": "britishlegion.org.uk",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 312798.556288523,
      "curr_month_visits": 312798.556288523,
      "unique_users": 218493.354330574,
      "pages_per_visit": 2.21110658927282
    },
    {
      "global_rank": 719577,
      "category_rank": 102,
      "domain": "ohiocourtrecords.us",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 34174.7033594985,
      "curr_month_visits": 34174.7033594985,
      "unique_users": 24110.6874496362,
      "pages_per_visit": 3.5642671731216
    },
    {
      "global_rank": 40708,
      "category_rank": 102,
      "domain": "odin.study",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1170973.29427904,
      "curr_month_visits": 1170973.29427904,
      "unique_users": 89219.6647556418,
      "pages_per_visit": 9.21524737170208
    },
    {
      "global_rank": 725191,
      "category_rank": 103,
      "domain": "powerthepolls.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 107932.500337535,
      "curr_month_visits": 107932.500337535,
      "unique_users": 72016.4751081779,
      "pages_per_visit": 1.67173254960444
    },
    {
      "global_rank": 21927,
      "category_rank": 103,
      "domain": "trf6.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1853550.07158037,
      "curr_month_visits": 1853550.07158037,
      "unique_users": 347172.236593259,
      "pages_per_visit": 12.162074608274
    },
    {
      "global_rank": 436068,
      "category_rank": 103,
      "domain": "idstation.online",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 69382.6052251139,
      "curr_month_visits": 69382.6052251139,
      "unique_users": 41376.6405628295,
      "pages_per_visit": 3.46579893612584
    },
    {
      "global_rank": 112067,
      "category_rank": 103,
      "domain": "disa.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 333601.73958279,
      "curr_month_visits": 333601.73958279,
      "unique_users": 183472.102430191,
      "pages_per_visit": 6.43632020268216
    },
    {
      "global_rank": 41717,
      "category_rank": 103,
      "domain": "regione.sardegna.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1248437.36975782,
      "curr_month_visits": 1248437.36975782,
      "unique_users": 391792.280886542,
      "pages_per_visit": 4.80310610977601
    },
    {
      "global_rank": 3480,
      "category_rank": 103,
      "domain": "go.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 13651018.4984234,
      "curr_month_visits": 13651018.4984234,
      "unique_users": 2994740.46169401,
      "pages_per_visit": 8.06537649310642
    },
    {
      "global_rank": 41950,
      "category_rank": 104,
      "domain": "minzdrav.gov.ru",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1339084.51641813,
      "curr_month_visits": 1339084.51641813,
      "unique_users": 665099.692033335,
      "pages_per_visit": 3.32523574313371
    },
    {
      "global_rank": 112694,
      "category_rank": 104,
      "domain": "rojgarbihar.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 333271.202332043,
      "curr_month_visits": 333271.202332043,
      "unique_users": 80447.0891877043,
      "pages_per_visit": 4.28195554929759
    },
    {
      "global_rank": 438550,
      "category_rank": 104,
      "domain": "visaglobal.com.ua",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 122284.396547205,
      "curr_month_visits": 122284.396547205,
      "unique_users": 65486.6494284493,
      "pages_per_visit": 1.46560819225878
    },
    {
      "global_rank": 3555,
      "category_rank": 104,
      "domain": "sss.gov.ph",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 10872661.0865749,
      "curr_month_visits": 10872661.0865749,
      "unique_users": 3974064.30402477,
      "pages_per_visit": 9.97227992679498
    },
    {
      "global_rank": 21964,
      "category_rank": 104,
      "domain": "eais.go.kr",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1700212.80125369,
      "curr_month_visits": 1700212.80125369,
      "unique_users": 201178.268448754,
      "pages_per_visit": 11.1166750710906
    },
    {
      "global_rank": 727352,
      "category_rank": 104,
      "domain": "nvsexoffenders.gov",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 20672.937075382,
      "curr_month_visits": 20672.937075382,
      "unique_users": 11135.2471215763,
      "pages_per_visit": 7.68481106024862
    },
    {
      "global_rank": 728659,
      "category_rank": 105,
      "domain": "icmec.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 57699.0109423602,
      "curr_month_visits": 57699.0109423602,
      "unique_users": 30219.7215082946,
      "pages_per_visit": 1.52168378617019
    },
    {
      "global_rank": 22617,
      "category_rank": 105,
      "domain": "eum.go.kr",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2047778.39505333,
      "curr_month_visits": 2047778.39505333,
      "unique_users": 465985.84401087,
      "pages_per_visit": 5.58716034648053
    },
    {
      "global_rank": 439159,
      "category_rank": 105,
      "domain": "cmsny.org",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 57354.2440444286,
      "curr_month_visits": 57354.2440444286,
      "unique_users": 39186.2778456367,
      "pages_per_visit": 1.93846157068188
    },
    {
      "global_rank": 42855,
      "category_rank": 105,
      "domain": "halleyas.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 855454.342310774,
      "curr_month_visits": 855454.342310774,
      "unique_users": 79644.7937696184,
      "pages_per_visit": 17.0684996594971
    },
    {
      "global_rank": 3704,
      "category_rank": 105,
      "domain": "istruzione.it",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 13332219.9466962,
      "curr_month_visits": 13332219.9466962,
      "unique_users": 4205320.71544979,
      "pages_per_visit": 7.91916203474222
    },
    {
      "global_rank": 113701,
      "category_rank": 105,
      "domain": "janes.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 489892.34571531,
      "curr_month_visits": 489892.34571531,
      "unique_users": 240351.939557601,
      "pages_per_visit": 2.13436081725935
    },
    {
      "global_rank": 729007,
      "category_rank": 106,
      "domain": "lavialibera.it",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 71002.2937593026,
      "curr_month_visits": 71002.2937593026,
      "unique_users": 49724.5052989173,
      "pages_per_visit": 1.39995709467314
    },
    {
      "global_rank": 43210,
      "category_rank": 106,
      "domain": "conservativejournalreview.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1765386.12516599,
      "curr_month_visits": 1765386.12516599,
      "unique_users": 296781.978322734,
      "pages_per_visit": 2.19417297513959
    },
    {
      "global_rank": 444342,
      "category_rank": 106,
      "domain": "apostille.gov.ph",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 103810.880207548,
      "curr_month_visits": 103810.880207548,
      "unique_users": 48322.8289672444,
      "pages_per_visit": 4.01034250204371
    },
    {
      "global_rank": 22779,
      "category_rank": 106,
      "domain": "trellis.law",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3063773.24858223,
      "curr_month_visits": 3063773.24858223,
      "unique_users": 2423081.53782592,
      "pages_per_visit": 2.96731628842967
    },
    {
      "global_rank": 3717,
      "category_rank": 106,
      "domain": "postnl.nl",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 18904783.9685527,
      "curr_month_visits": 18904783.9685527,
      "unique_users": 5816376.5300505,
      "pages_per_visit": 3.10833119976925
    },
    {
      "global_rank": 114369,
      "category_rank": 106,
      "domain": "defenceweb.co.za",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 575637.331909508,
      "curr_month_visits": 575637.331909508,
      "unique_users": 312816.132882858,
      "pages_per_visit": 1.56992393393511
    },
    {
      "global_rank": 43770,
      "category_rank": 107,
      "domain": "yapms.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1053814.48866192,
      "curr_month_visits": 1053814.48866192,
      "unique_users": 194444.77722957,
      "pages_per_visit": 4.86274161432197
    },
    {
      "global_rank": 748168,
      "category_rank": 107,
      "domain": "absolutepeoplesearch.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 61417.4856158058,
      "curr_month_visits": 61417.4856158058,
      "unique_users": 41540.7419788735,
      "pages_per_visit": 2.22849634563815
    },
    {
      "global_rank": 22827,
      "category_rank": 107,
      "domain": "trt3.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1922209.98944884,
      "curr_month_visits": 1922209.98944884,
      "unique_users": 403902.49969868,
      "pages_per_visit": 11.6979543752522
    },
    {
      "global_rank": 3729,
      "category_rank": 107,
      "domain": "centrelink.gov.au",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 13095501.3663999,
      "curr_month_visits": 13095501.3663999,
      "unique_users": 4010463.51141053,
      "pages_per_visit": 6.25397239236246
    },
    {
      "global_rank": 114425,
      "category_rank": 107,
      "domain": "bharat-rakshak.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 436768.853121245,
      "curr_month_visits": 436768.853121245,
      "unique_users": 143765.026111141,
      "pages_per_visit": 4.23989115363923
    },
    {
      "global_rank": 446178,
      "category_rank": 107,
      "domain": "findersfinder.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 117571.853928974,
      "curr_month_visits": 117571.853928974,
      "unique_users": 14037.7393177043,
      "pages_per_visit": 2.14057063041234
    },
    {
      "global_rank": 757750,
      "category_rank": 108,
      "domain": "prisonstudies.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 39584.9560072553,
      "curr_month_visits": 39584.9560072553,
      "unique_users": 20652.6940853747,
      "pages_per_visit": 1.90904670547563
    },
    {
      "global_rank": 23754,
      "category_rank": 108,
      "domain": "sicurezzapostale.it",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2628253.59040447,
      "curr_month_visits": 2628253.59040447,
      "unique_users": 338063.658487371,
      "pages_per_visit": 5.35913365471696
    },
    {
      "global_rank": 446521,
      "category_rank": 108,
      "domain": "blsspain-russia.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 84604.1344944318,
      "curr_month_visits": 84604.1344944318,
      "unique_users": 32450.3577772706,
      "pages_per_visit": 3.31510148235774
    },
    {
      "global_rank": 114537,
      "category_rank": 108,
      "domain": "capnhq.gov",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 341860.537293199,
      "curr_month_visits": 341860.537293199,
      "unique_users": 55022.1868180109,
      "pages_per_visit": 9.22862025056912
    },
    {
      "global_rank": 3762,
      "category_rank": 108,
      "domain": "cra-arc.gc.ca",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 8970823.45118906,
      "curr_month_visits": 8970823.45118906,
      "unique_users": 3823648.5157713,
      "pages_per_visit": 14.4400103954055
    },
    {
      "global_rank": 44395,
      "category_rank": 108,
      "domain": "migrationsverket.se",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1319241.52724796,
      "curr_month_visits": 1319241.52724796,
      "unique_users": 360462.784661028,
      "pages_per_visit": 5.29096835582272
    },
    {
      "global_rank": 761096,
      "category_rank": 109,
      "domain": "prison-insider.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 50536.5703132257,
      "curr_month_visits": 50536.5703132257,
      "unique_users": 25090.4176665749,
      "pages_per_visit": 1.64815713486743
    },
    {
      "global_rank": 46271,
      "category_rank": 109,
      "domain": "urbi.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 878900.792995349,
      "curr_month_visits": 878900.792995349,
      "unique_users": 172311.668735174,
      "pages_per_visit": 10.4796331576564
    },
    {
      "global_rank": 24132,
      "category_rank": 109,
      "domain": "tspolice.gov.in",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2732262.8264225,
      "curr_month_visits": 2732262.8264225,
      "unique_users": 1275675.33883717,
      "pages_per_visit": 2.63226358223452
    },
    {
      "global_rank": 456116,
      "category_rank": 109,
      "domain": "nilc.org",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 95043.1992758043,
      "curr_month_visits": 95043.1992758043,
      "unique_users": 66605.5978313673,
      "pages_per_visit": 1.50213347290998
    },
    {
      "global_rank": 116659,
      "category_rank": 109,
      "domain": "realcleardefense.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 544306.072177622,
      "curr_month_visits": 544306.072177622,
      "unique_users": 205979.051619333,
      "pages_per_visit": 1.97872419493377
    },
    {
      "global_rank": 3793,
      "category_rank": 109,
      "domain": "ewaybillgst.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 12395940.2830412,
      "curr_month_visits": 12395940.2830412,
      "unique_users": 1821438.58515949,
      "pages_per_visit": 8.8001762988373
    },
    {
      "global_rank": 456315,
      "category_rank": 110,
      "domain": "eoiriyadh.gov.in",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 75661.778819403,
      "curr_month_visits": 75661.778819403,
      "unique_users": 45857.9394851261,
      "pages_per_visit": 1.84011742818626
    },
    {
      "global_rank": 46479,
      "category_rank": 110,
      "domain": "camcom.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1368508.57828938,
      "curr_month_visits": 1368508.57828938,
      "unique_users": 792350.648157119,
      "pages_per_visit": 2.82168555054062
    },
    {
      "global_rank": 117346,
      "category_rank": 110,
      "domain": "resultbharat.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 787745.183236516,
      "curr_month_visits": 787745.183236516,
      "unique_users": 138404.137898913,
      "pages_per_visit": 3.18998455366715
    },
    {
      "global_rank": 24321,
      "category_rank": 110,
      "domain": "cjf.gob.mx",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1580076.47331742,
      "curr_month_visits": 1580076.47331742,
      "unique_users": 403484.902920598,
      "pages_per_visit": 7.52938824574481
    },
    {
      "global_rank": 3800,
      "category_rank": 110,
      "domain": "interieur.gouv.fr",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 14414711.3451756,
      "curr_month_visits": 14414711.3451756,
      "unique_users": 5088963.91859703,
      "pages_per_visit": 5.38635038499254
    },
    {
      "global_rank": 761399,
      "category_rank": 110,
      "domain": "crimeandjustice.org.uk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 41538.9148291657,
      "curr_month_visits": 41538.9148291657,
      "unique_users": 22381.54212782,
      "pages_per_visit": 1.53236793669366
    },
    {
      "global_rank": 118345,
      "category_rank": 111,
      "domain": "orfonline.org",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 618511.141978305,
      "curr_month_visits": 618511.141978305,
      "unique_users": 315386.408720638,
      "pages_per_visit": 1.96029208310213
    },
    {
      "global_rank": 24394,
      "category_rank": 111,
      "domain": "tst.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2749887.16040998,
      "curr_month_visits": 2749887.16040998,
      "unique_users": 1103271.17328173,
      "pages_per_visit": 3.54872919851038
    },
    {
      "global_rank": 460095,
      "category_rank": 111,
      "domain": "gisti.org",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 101747.696108229,
      "curr_month_visits": 101747.696108229,
      "unique_users": 64983.5868417074,
      "pages_per_visit": 1.73687247590061
    },
    {
      "global_rank": 46665,
      "category_rank": 111,
      "domain": "unz.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1568388.41628129,
      "curr_month_visits": 1568388.41628129,
      "unique_users": 298433.719137089,
      "pages_per_visit": 2.95741489411988
    },
    {
      "global_rank": 3811,
      "category_rank": 111,
      "domain": "dhs.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 15433156.6333783,
      "curr_month_visits": 15433156.6333783,
      "unique_users": 7993974.06558852,
      "pages_per_visit": 4.47169133001281
    },
    {
      "global_rank": 766227,
      "category_rank": 111,
      "domain": "stuartmillersolicitors.co.uk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 54131.064693449,
      "curr_month_visits": 54131.064693449,
      "unique_users": 34759.6571468319,
      "pages_per_visit": 1.40917803940687
    },
    {
      "global_rank": 468629,
      "category_rank": 112,
      "domain": "nwivisas.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 84727.3259420526,
      "curr_month_visits": 84727.3259420526,
      "unique_users": 36480.1457566972,
      "pages_per_visit": 3.34113235361084
    },
    {
      "global_rank": 118773,
      "category_rank": 112,
      "domain": "togetherweserved.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 372891.055358069,
      "curr_month_visits": 372891.055358069,
      "unique_users": 240638.030760713,
      "pages_per_visit": 4.70982124593627
    },
    {
      "global_rank": 772730,
      "category_rank": 112,
      "domain": "thegeorgiavoterguide.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 30403.6543177256,
      "curr_month_visits": 30403.6543177256,
      "unique_users": 18962.8060203485,
      "pages_per_visit": 1.97879095123462
    },
    {
      "global_rank": 24438,
      "category_rank": 112,
      "domain": "realme.govt.nz",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2618842.58591136,
      "curr_month_visits": 2618842.58591136,
      "unique_users": 950870.62032536,
      "pages_per_visit": 3.07478210399613
    },
    {
      "global_rank": 46859,
      "category_rank": 112,
      "domain": "pingone.com.au",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1629519.22592111,
      "curr_month_visits": 1629519.22592111,
      "unique_users": 254461.733794666,
      "pages_per_visit": 2.76492486612467
    },
    {
      "global_rank": 3953,
      "category_rank": 112,
      "domain": "saude.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 11608416.3127179,
      "curr_month_visits": 11608416.3127179,
      "unique_users": 3773957.73597866,
      "pages_per_visit": 9.04743947750545
    },
    {
      "global_rank": 781407,
      "category_rank": 113,
      "domain": "victimconnect.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 29954.0918498542,
      "curr_month_visits": 29954.0918498542,
      "unique_users": 16890.3841000573,
      "pages_per_visit": 2.00731559822484
    },
    {
      "global_rank": 24557,
      "category_rank": 113,
      "domain": "jfrj.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1893532.97122497,
      "curr_month_visits": 1893532.97122497,
      "unique_users": 272874.896285638,
      "pages_per_visit": 11.5680164648796
    },
    {
      "global_rank": 4017,
      "category_rank": 113,
      "domain": "claveunica.gob.cl",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 19094666.4896641,
      "curr_month_visits": 19094666.4896641,
      "unique_users": 6585866.75250217,
      "pages_per_visit": 2.36472416865026
    },
    {
      "global_rank": 473431,
      "category_rank": 113,
      "domain": "rapidvisa.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 89275.0793035776,
      "curr_month_visits": 89275.0793035776,
      "unique_users": 44759.3752404443,
      "pages_per_visit": 4.10496654417445
    },
    {
      "global_rank": 46982,
      "category_rank": 113,
      "domain": "provinz.bz.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1816176.12576729,
      "curr_month_visits": 1816176.12576729,
      "unique_users": 397802.748849073,
      "pages_per_visit": 2.67013750320125
    },
    {
      "global_rank": 119487,
      "category_rank": 113,
      "domain": "bsf.gov.in",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 312186.352042531,
      "curr_month_visits": 312186.352042531,
      "unique_users": 140792.10640448,
      "pages_per_visit": 4.19452961202224
    },
    {
      "global_rank": 483145,
      "category_rank": 114,
      "domain": "canadianvisa.org",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 92801.430036011,
      "curr_month_visits": 92801.430036011,
      "unique_users": 33993.8178958563,
      "pages_per_visit": 5.10036459142466
    },
    {
      "global_rank": 4070,
      "category_rank": 114,
      "domain": "absher.sa",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 8777556.05086757,
      "curr_month_visits": 8777556.05086757,
      "unique_users": 3172929.69859792,
      "pages_per_visit": 11.8520501467968
    },
    {
      "global_rank": 782730,
      "category_rank": 114,
      "domain": "trafficcamarchive.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 32897.425315412,
      "curr_month_visits": 32897.425315412,
      "unique_users": 19306.3610966789,
      "pages_per_visit": 4.05813198015192
    },
    {
      "global_rank": 47261,
      "category_rank": 114,
      "domain": "delhipolice.gov.in",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1142414.31943731,
      "curr_month_visits": 1142414.31943731,
      "unique_users": 510645.696893779,
      "pages_per_visit": 5.1085552167872
    },
    {
      "global_rank": 24745,
      "category_rank": 114,
      "domain": "trf4.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2617238.96287887,
      "curr_month_visits": 2617238.96287887,
      "unique_users": 577183.880795277,
      "pages_per_visit": 4.25476182281656
    },
    {
      "global_rank": 119663,
      "category_rank": 114,
      "domain": "armymwr.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 477250.508784984,
      "curr_month_visits": 477250.508784984,
      "unique_users": 298036.252022512,
      "pages_per_visit": 2.24040647467948
    },
    {
      "global_rank": 484105,
      "category_rank": 115,
      "domain": "americandream.de",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 98434.2536614418,
      "curr_month_visits": 98434.2536614418,
      "unique_users": 58610.1066324576,
      "pages_per_visit": 1.93108639056793
    },
    {
      "global_rank": 47333,
      "category_rank": 115,
      "domain": "technicalranjay.net",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1023034.37979103,
      "curr_month_visits": 1023034.37979103,
      "unique_users": 652634.999080017,
      "pages_per_visit": 1.724812723718
    },
    {
      "global_rank": 4081,
      "category_rank": 115,
      "domain": "mp.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 11811297.2383911,
      "curr_month_visits": 11811297.2383911,
      "unique_users": 2721392.24953304,
      "pages_per_visit": 8.2959767192115
    },
    {
      "global_rank": 24863,
      "category_rank": 115,
      "domain": "zan.kz",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3633747.90021522,
      "curr_month_visits": 3633747.90021522,
      "unique_users": 1221372.4495011,
      "pages_per_visit": 2.28122996783849
    },
    {
      "global_rank": 120391,
      "category_rank": 115,
      "domain": "nmd.go.th",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 233283.581061661,
      "curr_month_visits": 233283.581061661,
      "unique_users": 107433.278364307,
      "pages_per_visit": 8.2456347001965
    },
    {
      "global_rank": 788783,
      "category_rank": 115,
      "domain": "peacelink.it",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 49397.7852742318,
      "curr_month_visits": 49397.7852742318,
      "unique_users": 37989.4279790408,
      "pages_per_visit": 1.51881248648638
    },
    {
      "global_rank": 495086,
      "category_rank": 116,
      "domain": "visalettersapplication.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 73176.6284867303,
      "curr_month_visits": 73176.6284867303,
      "unique_users": 59566.1949467341,
      "pages_per_visit": 2.3231865518937
    },
    {
      "global_rank": 798645,
      "category_rank": 116,
      "domain": "prisonjournalismproject.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 39720.7898649007,
      "curr_month_visits": 39720.7898649007,
      "unique_users": 24094.9148659256,
      "pages_per_visit": 2.97952923270035
    },
    {
      "global_rank": 121457,
      "category_rank": 116,
      "domain": "drdo.gov.in",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 465955.928987996,
      "curr_month_visits": 465955.928987996,
      "unique_users": 276457.012265797,
      "pages_per_visit": 3.04297298240621
    },
    {
      "global_rank": 24908,
      "category_rank": 116,
      "domain": "polisen.se",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2933273.77498613,
      "curr_month_visits": 2933273.77498613,
      "unique_users": 1298959.81316029,
      "pages_per_visit": 3.06485190192635
    },
    {
      "global_rank": 4083,
      "category_rank": 116,
      "domain": "seg-social.gob.es",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 11094400.8783124,
      "curr_month_visits": 11094400.8783124,
      "unique_users": 5250335.8111933,
      "pages_per_visit": 7.66575233200865
    },
    {
      "global_rank": 47945,
      "category_rank": 116,
      "domain": "pacourts.us",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1057344.49216961,
      "curr_month_visits": 1057344.49216961,
      "unique_users": 481255.479833988,
      "pages_per_visit": 5.16300239004727
    },
    {
      "global_rank": 48529,
      "category_rank": 117,
      "domain": "baiwang.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1320554.71286278,
      "curr_month_visits": 1320554.71286278,
      "unique_users": 750654.098460661,
      "pages_per_visit": 2.32159334691662
    },
    {
      "global_rank": 25326,
      "category_rank": 117,
      "domain": "mevzuat.gov.tr",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3573300.82444936,
      "curr_month_visits": 3573300.82444936,
      "unique_users": 1705935.19763983,
      "pages_per_visit": 2.08652222724142
    },
    {
      "global_rank": 4133,
      "category_rank": 117,
      "domain": "un.org",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 17694825.2824478,
      "curr_month_visits": 17694825.2824478,
      "unique_users": 10166954.3195103,
      "pages_per_visit": 2.70906846948956
    },
    {
      "global_rank": 815755,
      "category_rank": 117,
      "domain": "augurisk.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 34095.5374545624,
      "curr_month_visits": 34095.5374545624,
      "unique_users": 22159.1549944704,
      "pages_per_visit": 1.87004366164204
    },
    {
      "global_rank": 495779,
      "category_rank": 117,
      "domain": "curbelolaw.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 117267.610259134,
      "curr_month_visits": 117267.610259134,
      "unique_users": 67192.4540973785,
      "pages_per_visit": 1.41356498459413
    },
    {
      "global_rank": 122272,
      "category_rank": 117,
      "domain": "veteran.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 391159.413302869,
      "curr_month_visits": 391159.413302869,
      "unique_users": 249660.610235243,
      "pages_per_visit": 1.75308618693154
    },
    {
      "global_rank": 821452,
      "category_rank": 118,
      "domain": "coloradocourtrecords.us",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 28710.7665407885,
      "curr_month_visits": 28710.7665407885,
      "unique_users": 19000.0275518573,
      "pages_per_visit": 3.36152654748218
    },
    {
      "global_rank": 519313,
      "category_rank": 118,
      "domain": "australiaforum.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 76656.3646969655,
      "curr_month_visits": 76656.3646969655,
      "unique_users": 47872.4764001023,
      "pages_per_visit": 1.9715426026479
    },
    {
      "global_rank": 123541,
      "category_rank": 118,
      "domain": "defesaemfoco.com.br",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 555221.356562949,
      "curr_month_visits": 555221.356562949,
      "unique_users": 223026.147178618,
      "pages_per_visit": 2.23481432766327
    },
    {
      "global_rank": 25387,
      "category_rank": 118,
      "domain": "gazzettaufficiale.it",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2951478.78088212,
      "curr_month_visits": 2951478.78088212,
      "unique_users": 1678809.95464371,
      "pages_per_visit": 2.09434909798346
    },
    {
      "global_rank": 4153,
      "category_rank": 118,
      "domain": "michigan.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 11838199.7394686,
      "curr_month_visits": 11838199.7394686,
      "unique_users": 4318005.31089665,
      "pages_per_visit": 5.4850093203546
    },
    {
      "global_rank": 821851,
      "category_rank": 119,
      "domain": "jailbabes.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 23708.0918051351,
      "curr_month_visits": 23708.0918051351,
      "unique_users": 7335.97679216959,
      "pages_per_visit": 5.05620794206882
    },
    {
      "global_rank": 124778,
      "category_rank": 119,
      "domain": "jten.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 340909.283563822,
      "curr_month_visits": 340909.283563822,
      "unique_users": 125819.533974965,
      "pages_per_visit": 8.85965234488041
    },
    {
      "global_rank": 523759,
      "category_rank": 119,
      "domain": "notarypro.ca",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 60942.3677772382,
      "curr_month_visits": 60942.3677772382,
      "unique_users": 32415.5945547477,
      "pages_per_visit": 3.00088879845516
    },
    {
      "global_rank": 25805,
      "category_rank": 119,
      "domain": "registrocivil.org.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2581905.22246724,
      "curr_month_visits": 2581905.22246724,
      "unique_users": 463356.72055383,
      "pages_per_visit": 6.57321975151842
    },
    {
      "global_rank": 49096,
      "category_rank": 119,
      "domain": "bop.gov",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1223947.19425248,
      "curr_month_visits": 1223947.19425248,
      "unique_users": 647775.294556739,
      "pages_per_visit": 2.96268976188386
    },
    {
      "global_rank": 4171,
      "category_rank": 119,
      "domain": "ballotpedia.org",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 14288847.9854015,
      "curr_month_visits": 14288847.9854015,
      "unique_users": 10431052.5075947,
      "pages_per_visit": 2.82781272284619
    },
    {
      "global_rank": 525184,
      "category_rank": 120,
      "domain": "emcmo.mosreg.ru",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 62988.4472845699,
      "curr_month_visits": 62988.4472845699,
      "unique_users": 35825.5711415687,
      "pages_per_visit": 2.21198148746904
    },
    {
      "global_rank": 50360,
      "category_rank": 120,
      "domain": "dauthau.asia",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1537510.48719617,
      "curr_month_visits": 1537510.48719617,
      "unique_users": 457982.005318215,
      "pages_per_visit": 3.43232692154308
    },
    {
      "global_rank": 831347,
      "category_rank": 120,
      "domain": "themesatribune.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 50403.9445035506,
      "curr_month_visits": 50403.9445035506,
      "unique_users": 30101.6268178684,
      "pages_per_visit": 1.65911416774829
    },
    {
      "global_rank": 125564,
      "category_rank": 120,
      "domain": "oryxspioenkop.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 548297.985865596,
      "curr_month_visits": 548297.985865596,
      "unique_users": 181129.174789374,
      "pages_per_visit": 2.52172185364368
    },
    {
      "global_rank": 25897,
      "category_rank": 120,
      "domain": "tjpb.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1788038.08159391,
      "curr_month_visits": 1788038.08159391,
      "unique_users": 254526.009303281,
      "pages_per_visit": 10.3311320757571
    },
    {
      "global_rank": 4260,
      "category_rank": 120,
      "domain": "dian.gov.co",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 12892817.3908519,
      "curr_month_visits": 12892817.3908519,
      "unique_users": 3146690.25187097,
      "pages_per_visit": 10.4209980543188
    },
    {
      "global_rank": 50595,
      "category_rank": 121,
      "domain": "minvoice.com.vn",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 615519.793932689,
      "curr_month_visits": 615519.793932689,
      "unique_users": 83577.1103015595,
      "pages_per_visit": 25.5358034766028
    },
    {
      "global_rank": 527426,
      "category_rank": 121,
      "domain": "investontario.ca",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 38135.0827997707,
      "curr_month_visits": 38135.0827997707,
      "unique_users": 20108.6713388714,
      "pages_per_visit": 1.58794846921576
    },
    {
      "global_rank": 26252,
      "category_rank": 121,
      "domain": "altalex.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3461480.15680384,
      "curr_month_visits": 3461480.15680384,
      "unique_users": 1897039.65108812,
      "pages_per_visit": 1.67602063527456
    },
    {
      "global_rank": 4337,
      "category_rank": 121,
      "domain": "email.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 12317052.9915632,
      "curr_month_visits": 12317052.9915632,
      "unique_users": 865554.911732308,
      "pages_per_visit": 10.2850763552118
    },
    {
      "global_rank": 126475,
      "category_rank": 121,
      "domain": "mod.gov.uk",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 214731.512032021,
      "curr_month_visits": 214731.512032021,
      "unique_users": 74687.814855789,
      "pages_per_visit": 13.3551448844901
    },
    {
      "global_rank": 831410,
      "category_rank": 121,
      "domain": "fightcybercrime.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 18200.024686001,
      "curr_month_visits": 18200.024686001,
      "unique_users": 10276.4098051587,
      "pages_per_visit": 4.07981754131893
    },
    {
      "global_rank": 126913,
      "category_rank": 122,
      "domain": "awm.gov.au",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 415088.52009205,
      "curr_month_visits": 415088.52009205,
      "unique_users": 241757.040056157,
      "pages_per_visit": 2.68764256827123
    },
    {
      "global_rank": 535239,
      "category_rank": 122,
      "domain": "hzadeducation.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 63717.7995127465,
      "curr_month_visits": 63717.7995127465,
      "unique_users": 28238.4790924088,
      "pages_per_visit": 2.12269503661239
    },
    {
      "global_rank": 26307,
      "category_rank": 122,
      "domain": "lawdepot.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1728572.89275346,
      "curr_month_visits": 1728572.89275346,
      "unique_users": 1122797.31897958,
      "pages_per_visit": 7.18631982381801
    },
    {
      "global_rank": 832520,
      "category_rank": 122,
      "domain": "crime-scene-investigator.net",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 43879.1583991602,
      "curr_month_visits": 43879.1583991602,
      "unique_users": 25639.0426875815,
      "pages_per_visit": 1.93197294437425
    },
    {
      "global_rank": 50718,
      "category_rank": 122,
      "domain": "elegislation.gov.hk",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 900054.281598635,
      "curr_month_visits": 900054.281598635,
      "unique_users": 344297.334568576,
      "pages_per_visit": 5.60910108467669
    },
    {
      "global_rank": 4352,
      "category_rank": 122,
      "domain": "gov.pl",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 17860561.5787015,
      "curr_month_visits": 17860561.5787015,
      "unique_users": 9075760.73514902,
      "pages_per_visit": 2.41652094963058
    },
    {
      "global_rank": 50970,
      "category_rank": 123,
      "domain": "astrobl.ru",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 934699.22834454,
      "curr_month_visits": 934699.22834454,
      "unique_users": 193810.755886838,
      "pages_per_visit": 4.14763079801157
    },
    {
      "global_rank": 537289,
      "category_rank": 123,
      "domain": "searchingfinders.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 85230.9271257776,
      "curr_month_visits": 85230.9271257776,
      "unique_users": 10418.6607083949,
      "pages_per_visit": 2.11291036716838
    },
    {
      "global_rank": 26536,
      "category_rank": 123,
      "domain": "tjam.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1406176.68288027,
      "curr_month_visits": 1406176.68288027,
      "unique_users": 231999.845658348,
      "pages_per_visit": 13.7137193424717
    },
    {
      "global_rank": 127467,
      "category_rank": 123,
      "domain": "msu.edu.tr",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 362135.091637282,
      "curr_month_visits": 362135.091637282,
      "unique_users": 204428.404432743,
      "pages_per_visit": 2.98769696520706
    },
    {
      "global_rank": 4406,
      "category_rank": 123,
      "domain": "cic.gc.ca",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 11045180.7622415,
      "curr_month_visits": 11045180.7622415,
      "unique_users": 2692518.26916613,
      "pages_per_visit": 8.35675265034178
    },
    {
      "global_rank": 838358,
      "category_rank": 123,
      "domain": "prisonreformtrust.org.uk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 36274.7134928571,
      "curr_month_visits": 36274.7134928571,
      "unique_users": 20132.7292953395,
      "pages_per_visit": 1.55360982597574
    },
    {
      "global_rank": 4408,
      "category_rank": 124,
      "domain": "siigo.com",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 10650469.2068092,
      "curr_month_visits": 10650469.2068092,
      "unique_users": 1639148.4036673,
      "pages_per_visit": 10.8083301025644
    },
    {
      "global_rank": 538183,
      "category_rank": 124,
      "domain": "cgimilan.gov.in",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 52639.369661588,
      "curr_month_visits": 52639.369661588,
      "unique_users": 25659.3814336575,
      "pages_per_visit": 3.52668877129591
    },
    {
      "global_rank": 26583,
      "category_rank": 124,
      "domain": "avvocatoandreani.it",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2410454.17404067,
      "curr_month_visits": 2410454.17404067,
      "unique_users": 991891.726831831,
      "pages_per_visit": 3.56462393890853
    },
    {
      "global_rank": 127662,
      "category_rank": 124,
      "domain": "19fortyfive.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 206064.961613781,
      "curr_month_visits": 206064.961613781,
      "unique_users": 122912.102308246,
      "pages_per_visit": 1.60001034637882
    },
    {
      "global_rank": 51075,
      "category_rank": 124,
      "domain": "politicalcompass.org",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 837037.299464815,
      "curr_month_visits": 837037.299464815,
      "unique_users": 479720.114705374,
      "pages_per_visit": 4.81635853352974
    },
    {
      "global_rank": 844053,
      "category_rank": 124,
      "domain": "rewirenewsgroup.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 39470.3455293994,
      "curr_month_visits": 39470.3455293994,
      "unique_users": 22672.9585885339,
      "pages_per_visit": 1.46568032066363
    },
    {
      "global_rank": 539521,
      "category_rank": 125,
      "domain": "fileright.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 46162.8447664636,
      "curr_month_visits": 46162.8447664636,
      "unique_users": 32665.2011411638,
      "pages_per_visit": 3.06360209809714
    },
    {
      "global_rank": 51246,
      "category_rank": 125,
      "domain": "bonoculturajoven.gob.es",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1214171.14089709,
      "curr_month_visits": 1214171.14089709,
      "unique_users": 461124.772042533,
      "pages_per_visit": 3.95914230304534
    },
    {
      "global_rank": 4421,
      "category_rank": 125,
      "domain": "ce.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 12090100.2419871,
      "curr_month_visits": 12090100.2419871,
      "unique_users": 2916865.86435386,
      "pages_per_visit": 6.8363560661457
    },
    {
      "global_rank": 127960,
      "category_rank": 125,
      "domain": "evg.ae",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 376472.959705484,
      "curr_month_visits": 376472.959705484,
      "unique_users": 87169.7509890256,
      "pages_per_visit": 5.48765132018093
    },
    {
      "global_rank": 26654,
      "category_rank": 125,
      "domain": "austlii.edu.au",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2920686.38920263,
      "curr_month_visits": 2920686.38920263,
      "unique_users": 1098175.49435212,
      "pages_per_visit": 4.05938690258207
    },
    {
      "global_rank": 850777,
      "category_rank": 125,
      "domain": "atlanteguerre.it",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 31398.7983836901,
      "curr_month_visits": 31398.7983836901,
      "unique_users": 18892.5914509914,
      "pages_per_visit": 1.66374553249426
    },
    {
      "global_rank": 4462,
      "category_rank": 126,
      "domain": "in.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 12012707.3353491,
      "curr_month_visits": 12012707.3353491,
      "unique_users": 3909634.28180674,
      "pages_per_visit": 5.33913312779952
    },
    {
      "global_rank": 51378,
      "category_rank": 126,
      "domain": "carabinieri.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1349066.82172088,
      "curr_month_visits": 1349066.82172088,
      "unique_users": 410329.706513418,
      "pages_per_visit": 3.07725141922347
    },
    {
      "global_rank": 852153,
      "category_rank": 126,
      "domain": "justicemap.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 50663.6469784653,
      "curr_month_visits": 50663.6469784653,
      "unique_users": 18092.4915127028,
      "pages_per_visit": 1.82964833611256
    },
    {
      "global_rank": 130880,
      "category_rank": 126,
      "domain": "nsa.gov",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 525946.015172676,
      "curr_month_visits": 525946.015172676,
      "unique_users": 320802.43138949,
      "pages_per_visit": 1.78446429977278
    },
    {
      "global_rank": 554608,
      "category_rank": 126,
      "domain": "ukvcas.co.uk",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 253609.494667724,
      "curr_month_visits": 253609.494667724,
      "unique_users": 91731.5314747576,
      "pages_per_visit": 8.97360641016484
    },
    {
      "global_rank": 26698,
      "category_rank": 126,
      "domain": "judiciary.gov.ph",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3105016.98892503,
      "curr_month_visits": 3105016.98892503,
      "unique_users": 1358428.86906351,
      "pages_per_visit": 2.55291254219405
    },
    {
      "global_rank": 557268,
      "category_rank": 127,
      "domain": "visahq.co.uk",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 76770.2819601322,
      "curr_month_visits": 76770.2819601322,
      "unique_users": 33384.5647783582,
      "pages_per_visit": 2.98611728057983
    },
    {
      "global_rank": 26774,
      "category_rank": 127,
      "domain": "trt1.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1812951.31009916,
      "curr_month_visits": 1812951.31009916,
      "unique_users": 278907.178941341,
      "pages_per_visit": 9.6591874926962
    },
    {
      "global_rank": 51533,
      "category_rank": 127,
      "domain": "vypiska-nalog.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1576302.49548661,
      "curr_month_visits": 1576302.49548661,
      "unique_users": 1197473.81370853,
      "pages_per_visit": 1.26511735798757
    },
    {
      "global_rank": 133090,
      "category_rank": 127,
      "domain": "okta.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 263192.471652034,
      "curr_month_visits": 263192.471652034,
      "unique_users": 115080.397975112,
      "pages_per_visit": 4.55941521644992
    },
    {
      "global_rank": 852738,
      "category_rank": 127,
      "domain": "ganglandnews.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 27800.8882670534,
      "curr_month_visits": 27800.8882670534,
      "unique_users": 11756.536286403,
      "pages_per_visit": 3.2643829478908
    },
    {
      "global_rank": 4496,
      "category_rank": 127,
      "domain": "zakupki.gov.ru",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 10338523.8447139,
      "curr_month_visits": 10338523.8447139,
      "unique_users": 1341060.14128665,
      "pages_per_visit": 10.4373071371372
    },
    {
      "global_rank": 51992,
      "category_rank": 128,
      "domain": "cloud.urbi.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 750409.228123795,
      "curr_month_visits": 750409.228123795,
      "unique_users": 142973.244842189,
      "pages_per_visit": 10.8953126602112
    },
    {
      "global_rank": 558074,
      "category_rank": 128,
      "domain": "securerelease.us",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 40230.115358289,
      "curr_month_visits": 40230.115358289,
      "unique_users": 16792.6058771871,
      "pages_per_visit": 6.20606867640009
    },
    {
      "global_rank": 26866,
      "category_rank": 128,
      "domain": "brandenburg.de",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2641851.59934325,
      "curr_month_visits": 2641851.59934325,
      "unique_users": 1066633.92320198,
      "pages_per_visit": 4.41357573325897
    },
    {
      "global_rank": 136245,
      "category_rank": 128,
      "domain": "cyber.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 207272.34066002,
      "curr_month_visits": 207272.34066002,
      "unique_users": 119844.082388538,
      "pages_per_visit": 12.1216604230528
    },
    {
      "global_rank": 870288,
      "category_rank": 128,
      "domain": "counciloncj.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 50994.5948520158,
      "curr_month_visits": 50994.5948520158,
      "unique_users": 32133.6444355779,
      "pages_per_visit": 1.6410570957603
    },
    {
      "global_rank": 4507,
      "category_rank": 128,
      "domain": "odisha.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 10785242.6386923,
      "curr_month_visits": 10785242.6386923,
      "unique_users": 2485224.14040194,
      "pages_per_visit": 7.44806892267468
    },
    {
      "global_rank": 52026,
      "category_rank": 129,
      "domain": "bhxh.gov.vn",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 384129.077609111,
      "curr_month_visits": 384129.077609111,
      "unique_users": 24270.3286850061,
      "pages_per_visit": 55.5541086790017
    },
    {
      "global_rank": 562477,
      "category_rank": 129,
      "domain": "anzscosearch.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 82710.0430704906,
      "curr_month_visits": 82710.0430704906,
      "unique_users": 36426.4803181627,
      "pages_per_visit": 3.50957961944289
    },
    {
      "global_rank": 4508,
      "category_rank": 129,
      "domain": "df.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 11594011.6349214,
      "curr_month_visits": 11594011.6349214,
      "unique_users": 2994407.54356049,
      "pages_per_visit": 7.00183899781185
    },
    {
      "global_rank": 872850,
      "category_rank": 129,
      "domain": "vawnet.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 44850.9898197514,
      "curr_month_visits": 44850.9898197514,
      "unique_users": 25640.0686445587,
      "pages_per_visit": 1.59697003304202
    },
    {
      "global_rank": 136976,
      "category_rank": 129,
      "domain": "americanforcestravel.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 249650.923704839,
      "curr_month_visits": 249650.923704839,
      "unique_users": 113011.741651067,
      "pages_per_visit": 5.5224866871254
    },
    {
      "global_rank": 27546,
      "category_rank": 129,
      "domain": "lege5.ro",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3211593.75839401,
      "curr_month_visits": 3211593.75839401,
      "unique_users": 1605714.305663,
      "pages_per_visit": 1.94654499509993
    },
    {
      "global_rank": 874632,
      "category_rank": 130,
      "domain": "libera.it",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 25703.1532877191,
      "curr_month_visits": 25703.1532877191,
      "unique_users": 18206.3119476511,
      "pages_per_visit": 2.55006409011777
    },
    {
      "global_rank": 562637,
      "category_rank": 130,
      "domain": "visa-to-travel.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 84908.7594505724,
      "curr_month_visits": 84908.7594505724,
      "unique_users": 40213.2435170969,
      "pages_per_visit": 2.37235256241806
    },
    {
      "global_rank": 52039,
      "category_rank": 130,
      "domain": "cnpj.info",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1658528.00544334,
      "curr_month_visits": 1658528.00544334,
      "unique_users": 1185330.99921954,
      "pages_per_visit": 1.62510745150491
    },
    {
      "global_rank": 137417,
      "category_rank": 130,
      "domain": "warontherocks.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 471036.644771259,
      "curr_month_visits": 471036.644771259,
      "unique_users": 245749.890390795,
      "pages_per_visit": 1.69047397078684
    },
    {
      "global_rank": 27982,
      "category_rank": 130,
      "domain": "easyinvoice.com.vn",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1796172.73759363,
      "curr_month_visits": 1796172.73759363,
      "unique_users": 319236.219165368,
      "pages_per_visit": 7.13276227260506
    },
    {
      "global_rank": 4526,
      "category_rank": 130,
      "domain": "pe.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 11130483.4497006,
      "curr_month_visits": 11130483.4497006,
      "unique_users": 2644724.29710939,
      "pages_per_visit": 7.15528402984003
    },
    {
      "global_rank": 28306,
      "category_rank": 131,
      "domain": "netvoyage.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2331278.36731792,
      "curr_month_visits": 2331278.36731792,
      "unique_users": 83776.7708250698,
      "pages_per_visit": 8.29989651265981
    },
    {
      "global_rank": 567728,
      "category_rank": 131,
      "domain": "europortal.biz.ua",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 81701.2756442168,
      "curr_month_visits": 81701.2756442168,
      "unique_users": 29953.1484199032,
      "pages_per_visit": 1.55382148510333
    },
    {
      "global_rank": 878182,
      "category_rank": 131,
      "domain": "cybertip.ca",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 31414.8986917724,
      "curr_month_visits": 31414.8986917724,
      "unique_users": 16442.4694591823,
      "pages_per_visit": 2.57032342168562
    },
    {
      "global_rank": 137469,
      "category_rank": 131,
      "domain": "mil.ru",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 536976.722916114,
      "curr_month_visits": 536976.722916114,
      "unique_users": 340886.887125069,
      "pages_per_visit": 1.698932480269
    },
    {
      "global_rank": 4557,
      "category_rank": 131,
      "domain": "mygov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 9314320.68421694,
      "curr_month_visits": 9314320.68421694,
      "unique_users": 5622065.68835541,
      "pages_per_visit": 4.23695822180701
    },
    {
      "global_rank": 52105,
      "category_rank": 131,
      "domain": "civis.bz.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 816305.318976911,
      "curr_month_visits": 816305.318976911,
      "unique_users": 288182.08469859,
      "pages_per_visit": 6.15245985249497
    },
    {
      "global_rank": 880931,
      "category_rank": 132,
      "domain": "safehorizon.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 35539.8676263987,
      "curr_month_visits": 35539.8676263987,
      "unique_users": 20983.0453941846,
      "pages_per_visit": 2.0980418429956
    },
    {
      "global_rank": 29051,
      "category_rank": 132,
      "domain": "canlii.org",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1670484.74900298,
      "curr_month_visits": 1670484.74900298,
      "unique_users": 452427.356416423,
      "pages_per_visit": 6.65335928699206
    },
    {
      "global_rank": 4684,
      "category_rank": 132,
      "domain": "boe.es",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 13957940.8599682,
      "curr_month_visits": 13957940.8599682,
      "unique_users": 4984556.03469486,
      "pages_per_visit": 3.30673481403045
    },
    {
      "global_rank": 137494,
      "category_rank": 132,
      "domain": "haf.gr",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 288235.748643586,
      "curr_month_visits": 288235.748643586,
      "unique_users": 86440.1837790441,
      "pages_per_visit": 4.61999884319129
    },
    {
      "global_rank": 570356,
      "category_rank": 132,
      "domain": "tradesrecognitionaustralia.gov.au",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 75942.8650682646,
      "curr_month_visits": 75942.8650682646,
      "unique_users": 31456.9988715495,
      "pages_per_visit": 2.56846807086626
    },
    {
      "global_rank": 52239,
      "category_rank": 132,
      "domain": "italiaoggi.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1060430.76661643,
      "curr_month_visits": 1060430.76661643,
      "unique_users": 661298.247285674,
      "pages_per_visit": 2.54313595614827
    },
    {
      "global_rank": 571537,
      "category_rank": 133,
      "domain": "citizenshipsupport.ca",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 39778.6065652463,
      "curr_month_visits": 39778.6065652463,
      "unique_users": 16940.5947343139,
      "pages_per_visit": 4.39181769889331
    },
    {
      "global_rank": 52953,
      "category_rank": 133,
      "domain": "campact.de",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1934609.3911807,
      "curr_month_visits": 1934609.3911807,
      "unique_users": 1161757.09285102,
      "pages_per_visit": 2.17630243348695
    },
    {
      "global_rank": 4757,
      "category_rank": 133,
      "domain": "mo.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 10484948.516483,
      "curr_month_visits": 10484948.516483,
      "unique_users": 3487878.01524089,
      "pages_per_visit": 5.97160576214333
    },
    {
      "global_rank": 137955,
      "category_rank": 133,
      "domain": "marines.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 411000.487932605,
      "curr_month_visits": 411000.487932605,
      "unique_users": 266066.024393905,
      "pages_per_visit": 1.98300489738299
    },
    {
      "global_rank": 29350,
      "category_rank": 133,
      "domain": "tesda.gov.ph",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1489206.3178039,
      "curr_month_visits": 1489206.3178039,
      "unique_users": 531297.917790878,
      "pages_per_visit": 7.22153234373039
    },
    {
      "global_rank": 882895,
      "category_rank": 133,
      "domain": "victimsofcrime.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 36874.1926218607,
      "curr_month_visits": 36874.1926218607,
      "unique_users": 21812.7641844556,
      "pages_per_visit": 1.74632028254976
    },
    {
      "global_rank": 571997,
      "category_rank": 134,
      "domain": "cestina-pro-cizince.cz",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 72300.1871254593,
      "curr_month_visits": 72300.1871254593,
      "unique_users": 28356.4405808283,
      "pages_per_visit": 4.00144931832782
    },
    {
      "global_rank": 4765,
      "category_rank": 134,
      "domain": "aade.gr",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 7063266.60572157,
      "curr_month_visits": 7063266.60572157,
      "unique_users": 2196976.08188246,
      "pages_per_visit": 9.2530197703297
    },
    {
      "global_rank": 884934,
      "category_rank": 134,
      "domain": "cnoas.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 31696.1685926619,
      "curr_month_visits": 31696.1685926619,
      "unique_users": 19038.5470168365,
      "pages_per_visit": 1.91491590793907
    },
    {
      "global_rank": 29392,
      "category_rank": 134,
      "domain": "tjes.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1551857.99543957,
      "curr_month_visits": 1551857.99543957,
      "unique_users": 315993.771288957,
      "pages_per_visit": 10.2875995022456
    },
    {
      "global_rank": 53158,
      "category_rank": 134,
      "domain": "flpbac.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 533116.808417161,
      "curr_month_visits": 533116.808417161,
      "unique_users": 308943.272283801,
      "pages_per_visit": 1.44086471971573
    },
    {
      "global_rank": 137969,
      "category_rank": 134,
      "domain": "qwertcorp.in",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 129834.307652543,
      "curr_month_visits": 129834.307652543,
      "unique_users": 35506.3219787723,
      "pages_per_visit": 14.7485020519888
    },
    {
      "global_rank": 53456,
      "category_rank": 135,
      "domain": "phhc.gov.in",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 755505.650657827,
      "curr_month_visits": 755505.650657827,
      "unique_users": 136001.766108415,
      "pages_per_visit": 8.72222586332474
    },
    {
      "global_rank": 906560,
      "category_rank": 135,
      "domain": "rain-street.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 50508.3404921496,
      "curr_month_visits": 50508.3404921496,
      "unique_users": 30109.6644165572,
      "pages_per_visit": 2.35512091723862
    },
    {
      "global_rank": 138852,
      "category_rank": 135,
      "domain": "structure.mil.ru",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 412053.358004582,
      "curr_month_visits": 412053.358004582,
      "unique_users": 264818.945554267,
      "pages_per_visit": 1.98482335629868
    },
    {
      "global_rank": 4794,
      "category_rank": 135,
      "domain": "maryland.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 10618126.1948107,
      "curr_month_visits": 10618126.1948107,
      "unique_users": 4023263.44975529,
      "pages_per_visit": 5.86754347266228
    },
    {
      "global_rank": 29461,
      "category_rank": 135,
      "domain": "sci.gov.in",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1994472.19927298,
      "curr_month_visits": 1994472.19927298,
      "unique_users": 737151.36264297,
      "pages_per_visit": 4.18897435872972
    },
    {
      "global_rank": 578144,
      "category_rank": 135,
      "domain": "dirco1.azurewebsites.net",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 42009.1619259973,
      "curr_month_visits": 42009.1619259973,
      "unique_users": 23490.5978471891,
      "pages_per_visit": 2.08773225890877
    },
    {
      "global_rank": 4804,
      "category_rank": 136,
      "domain": "gem.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 7149869.24934098,
      "curr_month_visits": 7149869.24934098,
      "unique_users": 1186340.38435649,
      "pages_per_visit": 18.9165752710656
    },
    {
      "global_rank": 53581,
      "category_rank": 136,
      "domain": "yesform.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 954979.90614943,
      "curr_month_visits": 954979.90614943,
      "unique_users": 714401.376716377,
      "pages_per_visit": 3.48445749257514
    },
    {
      "global_rank": 30050,
      "category_rank": 136,
      "domain": "ohchr.org",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2515809.9085625,
      "curr_month_visits": 2515809.9085625,
      "unique_users": 1434335.11027496,
      "pages_per_visit": 2.12704458714173
    },
    {
      "global_rank": 139173,
      "category_rank": 136,
      "domain": "usgovcloudapi.net",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 399698.760957498,
      "curr_month_visits": 399698.760957498,
      "unique_users": 229633.760358168,
      "pages_per_visit": 2.3607696504953
    },
    {
      "global_rank": 907473,
      "category_rank": 136,
      "domain": "institutomariadapenha.org.br",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 43498.0115340844,
      "curr_month_visits": 43498.0115340844,
      "unique_users": 29413.8073294052,
      "pages_per_visit": 1.80994512003353
    },
    {
      "global_rank": 579702,
      "category_rank": 136,
      "domain": "path2usa.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 69595.8935416447,
      "curr_month_visits": 69595.8935416447,
      "unique_users": 44340.1062884715,
      "pages_per_visit": 1.53040720209198
    },
    {
      "global_rank": 594331,
      "category_rank": 137,
      "domain": "yoonhjs.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 46607.6165045606,
      "curr_month_visits": 46607.6165045606,
      "unique_users": 11160.8764098725,
      "pages_per_visit": 8.02180227844769
    },
    {
      "global_rank": 54105,
      "category_rank": 137,
      "domain": "salto.bz",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1499999.7834499,
      "curr_month_visits": 1499999.7834499,
      "unique_users": 286668.440690538,
      "pages_per_visit": 2.58638211074812
    },
    {
      "global_rank": 139512,
      "category_rank": 137,
      "domain": "legion.ca",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 202333.142801764,
      "curr_month_visits": 202333.142801764,
      "unique_users": 135729.915827458,
      "pages_per_visit": 2.69354436034444
    },
    {
      "global_rank": 30415,
      "category_rank": 137,
      "domain": "lacourt.org",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1725396.055473,
      "curr_month_visits": 1725396.055473,
      "unique_users": 532477.537681798,
      "pages_per_visit": 5.99799516377136
    },
    {
      "global_rank": 941553,
      "category_rank": 137,
      "domain": "publicoffices.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 41888.820459379,
      "curr_month_visits": 41888.820459379,
      "unique_users": 30112.7009707699,
      "pages_per_visit": 1.64278022176839
    },
    {
      "global_rank": 4827,
      "category_rank": 137,
      "domain": "planalto.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 19506234.2738446,
      "curr_month_visits": 19506234.2738446,
      "unique_users": 5530503.22659799,
      "pages_per_visit": 2.13370907093242
    },
    {
      "global_rank": 139666,
      "category_rank": 138,
      "domain": "defproc.gov.in",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 283616.725244215,
      "curr_month_visits": 283616.725244215,
      "unique_users": 53487.7527365259,
      "pages_per_visit": 7.62395656817011
    },
    {
      "global_rank": 4848,
      "category_rank": 138,
      "domain": "gov.bc.ca",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 10983576.583659,
      "curr_month_visits": 10983576.583659,
      "unique_users": 3678097.81989558,
      "pages_per_visit": 5.50558992295183
    },
    {
      "global_rank": 595827,
      "category_rank": 138,
      "domain": "immigrantquebec.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 74837.1057145874,
      "curr_month_visits": 74837.1057145874,
      "unique_users": 45383.7537443311,
      "pages_per_visit": 1.61044449838002
    },
    {
      "global_rank": 30439,
      "category_rank": 138,
      "domain": "advbox.com.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1702238.65089074,
      "curr_month_visits": 1702238.65089074,
      "unique_users": 348663.584336579,
      "pages_per_visit": 9.84240804681977
    },
    {
      "global_rank": 941759,
      "category_rank": 138,
      "domain": "inmatesearchflorida.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 40616.4964349157,
      "curr_month_visits": 40616.4964349157,
      "unique_users": 22936.196917507,
      "pages_per_visit": 1.85485024434863
    },
    {
      "global_rank": 54138,
      "category_rank": 138,
      "domain": "telmate.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 753751.501343755,
      "curr_month_visits": 753751.501343755,
      "unique_users": 202073.265676372,
      "pages_per_visit": 7.79573271659052
    },
    {
      "global_rank": 600005,
      "category_rank": 139,
      "domain": "smithstonewalters.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 81188.8092024717,
      "curr_month_visits": 81188.8092024717,
      "unique_users": 41093.5047131836,
      "pages_per_visit": 1.36564240522227
    },
    {
      "global_rank": 143205,
      "category_rank": 139,
      "domain": "abudhabipay.gov.ae",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 301342.612236884,
      "curr_month_visits": 301342.612236884,
      "unique_users": 138126.859063219,
      "pages_per_visit": 4.2860422294069
    },
    {
      "global_rank": 54140,
      "category_rank": 139,
      "domain": "vnlis.vn",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 690866.085796301,
      "curr_month_visits": 690866.085796301,
      "unique_users": 10403.6730876074,
      "pages_per_visit": 30.108599793768
    },
    {
      "global_rank": 30994,
      "category_rank": 139,
      "domain": "vbest.jp",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2782501.67517403,
      "curr_month_visits": 2782501.67517403,
      "unique_users": 2118170.04493846,
      "pages_per_visit": 1.53084908547114
    },
    {
      "global_rank": 4885,
      "category_rank": 139,
      "domain": "es.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 10908913.5878718,
      "curr_month_visits": 10908913.5878718,
      "unique_users": 2763462.92889103,
      "pages_per_visit": 6.19518247641946
    },
    {
      "global_rank": 942751,
      "category_rank": 139,
      "domain": "prisonguide.co.uk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 29887.8421555956,
      "curr_month_visits": 29887.8421555956,
      "unique_users": 17225.7104471213,
      "pages_per_visit": 1.88022128332323
    },
    {
      "global_rank": 4928,
      "category_rank": 140,
      "domain": "csc.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 13191804.2357929,
      "curr_month_visits": 13191804.2357929,
      "unique_users": 1888820.05920844,
      "pages_per_visit": 5.29050800267292
    },
    {
      "global_rank": 54675,
      "category_rank": 140,
      "domain": "regione.calabria.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 829544.029190209,
      "curr_month_visits": 829544.029190209,
      "unique_users": 220866.329095969,
      "pages_per_visit": 7.37317745526853
    },
    {
      "global_rank": 600999,
      "category_rank": 140,
      "domain": "ayjsolicitors.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 70032.0752615917,
      "curr_month_visits": 70032.0752615917,
      "unique_users": 38076.9394495181,
      "pages_per_visit": 1.59776191915999
    },
    {
      "global_rank": 956668,
      "category_rank": 140,
      "domain": "mankind.org.uk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 35737.0772787449,
      "curr_month_visits": 35737.0772787449,
      "unique_users": 19485.0280249976,
      "pages_per_visit": 1.92178931000225
    },
    {
      "global_rank": 143985,
      "category_rank": 140,
      "domain": "airforce.mil.kr",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 249266.541948516,
      "curr_month_visits": 249266.541948516,
      "unique_users": 87231.9596218824,
      "pages_per_visit": 6.93275432887847
    },
    {
      "global_rank": 31083,
      "category_rank": 140,
      "domain": "msudrf.ru",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2137270.6599236,
      "curr_month_visits": 2137270.6599236,
      "unique_users": 754524.747268169,
      "pages_per_visit": 4.79492550939475
    },
    {
      "global_rank": 144662,
      "category_rank": 141,
      "domain": "thedefensepost.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 450056.054337088,
      "curr_month_visits": 450056.054337088,
      "unique_users": 254045.299086528,
      "pages_per_visit": 1.60542116687796
    },
    {
      "global_rank": 602656,
      "category_rank": 141,
      "domain": "studentscenter.in",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 61087.517405856,
      "curr_month_visits": 61087.517405856,
      "unique_users": 19955.1413423643,
      "pages_per_visit": 6.48120598720009
    },
    {
      "global_rank": 959657,
      "category_rank": 141,
      "domain": "bellcountydetention.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 43082.1566467245,
      "curr_month_visits": 43082.1566467245,
      "unique_users": 17006.4499489609,
      "pages_per_visit": 1.20045961787199
    },
    {
      "global_rank": 54967,
      "category_rank": 141,
      "domain": "yaylahaber.com.tr",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 538951.47669375,
      "curr_month_visits": 538951.47669375,
      "unique_users": 349665.06526678,
      "pages_per_visit": 2.63817532154121
    },
    {
      "global_rank": 4953,
      "category_rank": 141,
      "domain": "minsa.gob.pe",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 8682400.43835002,
      "curr_month_visits": 8682400.43835002,
      "unique_users": 2152622.71310874,
      "pages_per_visit": 12.7234802854677
    },
    {
      "global_rank": 31159,
      "category_rank": 141,
      "domain": "cloud.tjpe.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1392407.98483591,
      "curr_month_visits": 1392407.98483591,
      "unique_users": 134396.884556176,
      "pages_per_visit": 13.9294784861481
    },
    {
      "global_rank": 971975,
      "category_rank": 142,
      "domain": "prisonwriters.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 29022.7970750719,
      "curr_month_visits": 29022.7970750719,
      "unique_users": 17732.433367092,
      "pages_per_visit": 1.97832722031919
    },
    {
      "global_rank": 55880,
      "category_rank": 142,
      "domain": "speedjob.in",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1464426.48549694,
      "curr_month_visits": 1464426.48549694,
      "unique_users": 352871.391474004,
      "pages_per_visit": 1.77510505393042
    },
    {
      "global_rank": 5117,
      "category_rank": 142,
      "domain": "nj.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 11449256.4128964,
      "curr_month_visits": 11449256.4128964,
      "unique_users": 4591321.92415025,
      "pages_per_visit": 3.70774042327058
    },
    {
      "global_rank": 31587,
      "category_rank": 142,
      "domain": "hrw.org",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2544945.97567336,
      "curr_month_visits": 2544945.97567336,
      "unique_users": 1706374.03984041,
      "pages_per_visit": 1.56002921013473
    },
    {
      "global_rank": 603548,
      "category_rank": 142,
      "domain": "usgreencardoffice.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 50712.1437623591,
      "curr_month_visits": 50712.1437623591,
      "unique_users": 27363.0905141941,
      "pages_per_visit": 1.98617483164541
    },
    {
      "global_rank": 146555,
      "category_rank": 142,
      "domain": "jamisprime.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 245707.206688651,
      "curr_month_visits": 245707.206688651,
      "unique_users": 23981.6732118963,
      "pages_per_visit": 7.89874022463855
    },
    {
      "global_rank": 31599,
      "category_rank": 143,
      "domain": "idaptive.app",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 3063269.68280906,
      "curr_month_visits": 3063269.68280906,
      "unique_users": 375755.85697921,
      "pages_per_visit": 3.11116652037064
    },
    {
      "global_rank": 605948,
      "category_rank": 143,
      "domain": "elaarimmigration.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 113151.582868889,
      "curr_month_visits": 113151.582868889,
      "unique_users": 60898.2091517625,
      "pages_per_visit": 1.40737576201478
    },
    {
      "global_rank": 5226,
      "category_rank": 143,
      "domain": "portaldasfinancas.gov.pt",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 6594873.62268772,
      "curr_month_visits": 6594873.62268772,
      "unique_users": 1973569.6634409,
      "pages_per_visit": 12.6909459330832
    },
    {
      "global_rank": 972233,
      "category_rank": 143,
      "domain": "mugshotsearch.net",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 24512.399437482,
      "curr_month_visits": 24512.399437482,
      "unique_users": 14004.5279933636,
      "pages_per_visit": 4.62429632564346
    },
    {
      "global_rank": 56429,
      "category_rank": 143,
      "domain": "dallascounty.org",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 865673.555906038,
      "curr_month_visits": 865673.555906038,
      "unique_users": 379016.227407574,
      "pages_per_visit": 4.10650515331023
    },
    {
      "global_rank": 146700,
      "category_rank": 143,
      "domain": "travel.dod.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 312149.284583145,
      "curr_month_visits": 312149.284583145,
      "unique_users": 212737.572029193,
      "pages_per_visit": 2.88502198309408
    },
    {
      "global_rank": 56448,
      "category_rank": 144,
      "domain": "amministrazionicomunali.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 737428.632982356,
      "curr_month_visits": 737428.632982356,
      "unique_users": 486291.381486452,
      "pages_per_visit": 3.51599955157436
    },
    {
      "global_rank": 606226,
      "category_rank": 144,
      "domain": "argovisa.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 47083.5296631099,
      "curr_month_visits": 47083.5296631099,
      "unique_users": 21084.0897825901,
      "pages_per_visit": 2.81198064829581
    },
    {
      "global_rank": 146903,
      "category_rank": 144,
      "domain": "navylookout.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 425841.176300053,
      "curr_month_visits": 425841.176300053,
      "unique_users": 175636.193027861,
      "pages_per_visit": 1.73824765136861
    },
    {
      "global_rank": 5256,
      "category_rank": 144,
      "domain": "authedu.mosreg.ru",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 12629755.6708168,
      "curr_month_visits": 12629755.6708168,
      "unique_users": 1970704.41426883,
      "pages_per_visit": 6.84055567936819
    },
    {
      "global_rank": 976798,
      "category_rank": 144,
      "domain": "crimelocal.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 14295.3216516521,
      "curr_month_visits": 14295.3216516521,
      "unique_users": 8404.66625115269,
      "pages_per_visit": 2.45415600916219
    },
    {
      "global_rank": 31674,
      "category_rank": 144,
      "domain": "cloud.pje.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2240150.50393322,
      "curr_month_visits": 2240150.50393322,
      "unique_users": 553916.592058772,
      "pages_per_visit": 2.02986697705553
    },
    {
      "global_rank": 5356,
      "category_rank": 145,
      "domain": "homeoffice.gov.uk",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 5955825.64663349,
      "curr_month_visits": 5955825.64663349,
      "unique_users": 2730085.45834977,
      "pages_per_visit": 13.2339758224437
    },
    {
      "global_rank": 608205,
      "category_rank": 145,
      "domain": "australianskilledmigration.com.au",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 68167.2888699326,
      "curr_month_visits": 68167.2888699326,
      "unique_users": 32858.6182156586,
      "pages_per_visit": 2.49414757997184
    },
    {
      "global_rank": 56738,
      "category_rank": 145,
      "domain": "sprout.ph",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1310685.5360354,
      "curr_month_visits": 1310685.5360354,
      "unique_users": 286717.370046666,
      "pages_per_visit": 3.04666989661108
    },
    {
      "global_rank": 146946,
      "category_rank": 145,
      "domain": "vaclaimsinsider.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 312298.966168129,
      "curr_month_visits": 312298.966168129,
      "unique_users": 174980.757325961,
      "pages_per_visit": 3.36810897028209
    },
    {
      "global_rank": 31760,
      "category_rank": 145,
      "domain": "tjpi.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1232789.38090495,
      "curr_month_visits": 1232789.38090495,
      "unique_users": 164458.635078644,
      "pages_per_visit": 14.1205576520102
    },
    {
      "global_rank": 977514,
      "category_rank": 145,
      "domain": "findtheinmate.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 39266.6679666081,
      "curr_month_visits": 39266.6679666081,
      "unique_users": 6463.87493968165,
      "pages_per_visit": 5.20531865863726
    },
    {
      "global_rank": 31774,
      "category_rank": 146,
      "domain": "lovdata.no",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1503348.68360344,
      "curr_month_visits": 1503348.68360344,
      "unique_users": 482949.326423423,
      "pages_per_visit": 5.73162100218013
    },
    {
      "global_rank": 5382,
      "category_rank": 146,
      "domain": "actblue.com",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 20297012.7105676,
      "curr_month_visits": 20297012.7105676,
      "unique_users": 7215070.08287421,
      "pages_per_visit": 2.17966800944144
    },
    {
      "global_rank": 147068,
      "category_rank": 146,
      "domain": "defence-network.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 402575.772210284,
      "curr_month_visits": 402575.772210284,
      "unique_users": 220101.617242894,
      "pages_per_visit": 1.53400926181508
    },
    {
      "global_rank": 610633,
      "category_rank": 146,
      "domain": "sterling-law.co.uk",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 46062.7033436569,
      "curr_month_visits": 46062.7033436569,
      "unique_users": 23402.2207337834,
      "pages_per_visit": 3.0503952948282
    },
    {
      "global_rank": 56937,
      "category_rank": 146,
      "domain": "vlex.es",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1231378.88149192,
      "curr_month_visits": 1231378.88149192,
      "unique_users": 708699.327832672,
      "pages_per_visit": 1.79931633131731
    },
    {
      "global_rank": 980502,
      "category_rank": 146,
      "domain": "crimeinformer.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 54249.0456924643,
      "curr_month_visits": 54249.0456924643,
      "unique_users": 11603.0944478927,
      "pages_per_visit": 2.62046586369876
    },
    {
      "global_rank": 147594,
      "category_rank": 147,
      "domain": "spumandiexam.in",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 340232.802405312,
      "curr_month_visits": 340232.802405312,
      "unique_users": 38372.7223319429,
      "pages_per_visit": 5.88114107479261
    },
    {
      "global_rank": 990756,
      "category_rank": 147,
      "domain": "inquest.org.uk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 28231.8100743538,
      "curr_month_visits": 28231.8100743538,
      "unique_users": 16144.2740063652,
      "pages_per_visit": 1.83627294747896
    },
    {
      "global_rank": 31976,
      "category_rank": 147,
      "domain": "tjrn.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1497578.24020954,
      "curr_month_visits": 1497578.24020954,
      "unique_users": 188024.907643419,
      "pages_per_visit": 9.05263699341634
    },
    {
      "global_rank": 57524,
      "category_rank": 147,
      "domain": "patriotpulse.net",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1276006.82189224,
      "curr_month_visits": 1276006.82189224,
      "unique_users": 274720.780208768,
      "pages_per_visit": 1.88023974550776
    },
    {
      "global_rank": 618050,
      "category_rank": 147,
      "domain": "newlandchase.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 65213.8524772049,
      "curr_month_visits": 65213.8524772049,
      "unique_users": 34518.0826672899,
      "pages_per_visit": 1.93625257175367
    },
    {
      "global_rank": 5473,
      "category_rank": 148,
      "domain": "gba.gob.ar",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 9805305.25499375,
      "curr_month_visits": 9805305.25499375,
      "unique_users": 3195273.91604685,
      "pages_per_visit": 6.58038434071505
    },
    {
      "global_rank": 619384,
      "category_rank": 148,
      "domain": "dsg.or.jp",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 67095.1458054487,
      "curr_month_visits": 67095.1458054487,
      "unique_users": 36417.5522039433,
      "pages_per_visit": 1.77392557337034
    },
    {
      "global_rank": 148555,
      "category_rank": 148,
      "domain": "sandboxx.us",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 460551.726909562,
      "curr_month_visits": 460551.726909562,
      "unique_users": 296891.939139599,
      "pages_per_visit": 1.76237177300393
    },
    {
      "global_rank": 32006,
      "category_rank": 148,
      "domain": "polizei.nrw",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2128179.42304438,
      "curr_month_visits": 2128179.42304438,
      "unique_users": 1247745.16152524,
      "pages_per_visit": 2.36814654096825
    },
    {
      "global_rank": 57864,
      "category_rank": 148,
      "domain": "tc.br",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 906748.837826215,
      "curr_month_visits": 906748.837826215,
      "unique_users": 311237.398082087,
      "pages_per_visit": 6.22933411190843
    },
    {
      "global_rank": 58077,
      "category_rank": 149,
      "domain": "americandigest.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1439748.10437985,
      "curr_month_visits": 1439748.10437985,
      "unique_users": 352171.500986837,
      "pages_per_visit": 1.95758965250865
    },
    {
      "global_rank": 32505,
      "category_rank": 149,
      "domain": "blsspainglobal.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1241281.7730446,
      "curr_month_visits": 1241281.7730446,
      "unique_users": 304953.609876624,
      "pages_per_visit": 10.1316206790144
    },
    {
      "global_rank": 5558,
      "category_rank": 149,
      "domain": "polri.go.id",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 6491625.45267202,
      "curr_month_visits": 6491625.45267202,
      "unique_users": 1714476.9910716,
      "pages_per_visit": 9.98122668921435
    },
    {
      "global_rank": 626946,
      "category_rank": 149,
      "domain": "slec.ph",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 43356.3296882508,
      "curr_month_visits": 43356.3296882508,
      "unique_users": 18631.4000385281,
      "pages_per_visit": 3.94765286042265
    },
    {
      "global_rank": 149417,
      "category_rank": 149,
      "domain": "indiandefencereview.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 271770.1521483,
      "curr_month_visits": 271770.1521483,
      "unique_users": 167664.141075065,
      "pages_per_visit": 1.47951418238879
    },
    {
      "global_rank": 1006739,
      "category_rank": 149,
      "domain": "venturasheriff.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 39734.2917479537,
      "curr_month_visits": 39734.2917479537,
      "unique_users": 20166.400370218,
      "pages_per_visit": 1.88922401847327
    },
    {
      "global_rank": 32829,
      "category_rank": 150,
      "domain": "beck.de",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1404618.34160102,
      "curr_month_visits": 1404618.34160102,
      "unique_users": 459856.936199021,
      "pages_per_visit": 8.71213620496895
    },
    {
      "global_rank": 629416,
      "category_rank": 150,
      "domain": "cnps.cm",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 89464.9737184156,
      "curr_month_visits": 89464.9737184156,
      "unique_users": 29718.492259455,
      "pages_per_visit": 1.92716147668756
    },
    {
      "global_rank": 150329,
      "category_rank": 150,
      "domain": "kak-spasti-mir.ru",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 276896.34781492,
      "curr_month_visits": 276896.34781492,
      "unique_users": 45551.7749919002,
      "pages_per_visit": 3.35068051962968
    },
    {
      "global_rank": 58357,
      "category_rank": 150,
      "domain": "anticorruzione.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 656359.265500992,
      "curr_month_visits": 656359.265500992,
      "unique_users": 253643.722394053,
      "pages_per_visit": 9.22157059937876
    },
    {
      "global_rank": 5577,
      "category_rank": 150,
      "domain": "ga.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 9662389.72125376,
      "curr_month_visits": 9662389.72125376,
      "unique_users": 3948084.82795027,
      "pages_per_visit": 6.64792948910228
    },
    {
      "global_rank": 1008008,
      "category_rank": 150,
      "domain": "linncountyor.gov",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 26955.6684700899,
      "curr_month_visits": 26955.6684700899,
      "unique_users": 14840.1165594158,
      "pages_per_visit": 2.04921910237839
    },
    {
      "global_rank": 33009,
      "category_rank": 151,
      "domain": "njcourts.gov",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1465408.41578739,
      "curr_month_visits": 1465408.41578739,
      "unique_users": 619547.622808125,
      "pages_per_visit": 7.14709035503345
    },
    {
      "global_rank": 58519,
      "category_rank": 151,
      "domain": "alaskasnewssource.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1032130.60696282,
      "curr_month_visits": 1032130.60696282,
      "unique_users": 369684.432164159,
      "pages_per_visit": 2.28014357883968
    },
    {
      "global_rank": 630821,
      "category_rank": 151,
      "domain": "immigrationimpact.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 62628.4316636375,
      "curr_month_visits": 62628.4316636375,
      "unique_users": 42080.7221925792,
      "pages_per_visit": 1.43798977421835
    },
    {
      "global_rank": 5630,
      "category_rank": 151,
      "domain": "digilocker.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 8437756.89172752,
      "curr_month_visits": 8437756.89172752,
      "unique_users": 4830634.55652499,
      "pages_per_visit": 5.85541582842201
    },
    {
      "global_rank": 152347,
      "category_rank": 151,
      "domain": "fdd.org",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 354204.214871539,
      "curr_month_visits": 354204.214871539,
      "unique_users": 194868.091220753,
      "pages_per_visit": 1.70003245718723
    },
    {
      "global_rank": 635618,
      "category_rank": 152,
      "domain": "canadacitizenshipstudyguide.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 33058.2354374396,
      "curr_month_visits": 33058.2354374396,
      "unique_users": 6116.94426275562,
      "pages_per_visit": 7.26378286750913
    },
    {
      "global_rank": 33235,
      "category_rank": 152,
      "domain": "renovabe.com.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2642540.52387942,
      "curr_month_visits": 2642540.52387942,
      "unique_users": 1711923.67143693,
      "pages_per_visit": 1.32643094223626
    },
    {
      "global_rank": 152640,
      "category_rank": 152,
      "domain": "spaceforce.mil",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 395800.925255775,
      "curr_month_visits": 395800.925255775,
      "unique_users": 243288.583198227,
      "pages_per_visit": 1.94169629107509
    },
    {
      "global_rank": 59205,
      "category_rank": 152,
      "domain": "saskatchewan.ca",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1035212.77205217,
      "curr_month_visits": 1035212.77205217,
      "unique_users": 426541.61270761,
      "pages_per_visit": 3.55282009174015
    },
    {
      "global_rank": 5640,
      "category_rank": 152,
      "domain": "nha.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 7662395.31284661,
      "curr_month_visits": 7662395.31284661,
      "unique_users": 2584525.24172224,
      "pages_per_visit": 5.03245864562834
    },
    {
      "global_rank": 1028335,
      "category_rank": 152,
      "domain": "jacksoncountymunicipalcourt.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 15974.3122899085,
      "curr_month_visits": 15974.3122899085,
      "unique_users": 8895.77783985306,
      "pages_per_visit": 7.64429444859276
    },
    {
      "global_rank": 5645,
      "category_rank": 153,
      "domain": "rosreestr.ru",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 7141965.10599471,
      "curr_month_visits": 7141965.10599471,
      "unique_users": 1775941.23949464,
      "pages_per_visit": 13.1882175158601
    },
    {
      "global_rank": 653731,
      "category_rank": 153,
      "domain": "deltaimmigration.com.au",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 60470.4445035994,
      "curr_month_visits": 60470.4445035994,
      "unique_users": 31575.5635666693,
      "pages_per_visit": 1.95086575301915
    },
    {
      "global_rank": 1029581,
      "category_rank": 153,
      "domain": "pennsylvaniacourtrecords.us",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 41045.4082146427,
      "curr_month_visits": 41045.4082146427,
      "unique_users": 26013.1991502727,
      "pages_per_visit": 3.10676293160941
    },
    {
      "global_rank": 33492,
      "category_rank": 153,
      "domain": "ipleaders.in",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2061277.67331245,
      "curr_month_visits": 2061277.67331245,
      "unique_users": 936508.493451759,
      "pages_per_visit": 2.07346407355089
    },
    {
      "global_rank": 152812,
      "category_rank": 153,
      "domain": "hsiplatform.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 345167.706355589,
      "curr_month_visits": 345167.706355589,
      "unique_users": 99419.086014663,
      "pages_per_visit": 5.16467174701797
    },
    {
      "global_rank": 59315,
      "category_rank": 153,
      "domain": "halleyweb.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 909845.552873313,
      "curr_month_visits": 909845.552873313,
      "unique_users": 349241.364829872,
      "pages_per_visit": 3.42335085656551
    },
    {
      "global_rank": 33794,
      "category_rank": 154,
      "domain": "belediye.gov.tr",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1512787.44686458,
      "curr_month_visits": 1512787.44686458,
      "unique_users": 170357.201672587,
      "pages_per_visit": 11.2937362490868
    },
    {
      "global_rank": 668551,
      "category_rank": 154,
      "domain": "sreci.gob.hn",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 63157.7282204699,
      "curr_month_visits": 63157.7282204699,
      "unique_users": 27842.5512299823,
      "pages_per_visit": 2.13782783107478
    },
    {
      "global_rank": 59349,
      "category_rank": 154,
      "domain": "piplbharat.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 991386.035010857,
      "curr_month_visits": 991386.035010857,
      "unique_users": 568371.181197892,
      "pages_per_visit": 1.84665601534445
    },
    {
      "global_rank": 5685,
      "category_rank": 154,
      "domain": "tkgm.gov.tr",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 10184223.2085553,
      "curr_month_visits": 10184223.2085553,
      "unique_users": 2686706.02509375,
      "pages_per_visit": 5.44822607161472
    },
    {
      "global_rank": 153052,
      "category_rank": 154,
      "domain": "usalearning.gov",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 290507.6521486,
      "curr_month_visits": 290507.6521486,
      "unique_users": 133329.752402806,
      "pages_per_visit": 7.51780624092024
    },
    {
      "global_rank": 1049330,
      "category_rank": 155,
      "domain": "criminalinjurieshelpline.co.uk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 14064.0690387112,
      "curr_month_visits": 14064.0690387112,
      "unique_users": 7817.55489743748,
      "pages_per_visit": 2.55654387140942
    },
    {
      "global_rank": 154182,
      "category_rank": 155,
      "domain": "bgov.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 169387.781416686,
      "curr_month_visits": 169387.781416686,
      "unique_users": 93767.7058237107,
      "pages_per_visit": 4.76179640180232
    },
    {
      "global_rank": 33807,
      "category_rank": 155,
      "domain": "tagme.com.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1707981.13879039,
      "curr_month_visits": 1707981.13879039,
      "unique_users": 818801.8917333,
      "pages_per_visit": 3.99068625563199
    },
    {
      "global_rank": 672290,
      "category_rank": 155,
      "domain": "stadinao.fi",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 48029.9098925041,
      "curr_month_visits": 48029.9098925041,
      "unique_users": 20234.018235323,
      "pages_per_visit": 3.69168631855935
    },
    {
      "global_rank": 60414,
      "category_rank": 155,
      "domain": "sledcom.ru",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 967676.56742161,
      "curr_month_visits": 967676.56742161,
      "unique_users": 557851.823376558,
      "pages_per_visit": 2.57843856414929
    },
    {
      "global_rank": 5708,
      "category_rank": 155,
      "domain": "pa.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 8312293.31765169,
      "curr_month_visits": 8312293.31765169,
      "unique_users": 1850444.75999626,
      "pages_per_visit": 6.67944321567734
    },
    {
      "global_rank": 155143,
      "category_rank": 156,
      "domain": "militaryfactory.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 290434.356041389,
      "curr_month_visits": 290434.356041389,
      "unique_users": 170507.4818872,
      "pages_per_visit": 2.58518356237593
    },
    {
      "global_rank": 60416,
      "category_rank": 156,
      "domain": "alio.go.kr",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 704124.249823194,
      "curr_month_visits": 704124.249823194,
      "unique_users": 186741.425460958,
      "pages_per_visit": 5.39933629431455
    },
    {
      "global_rank": 678327,
      "category_rank": 156,
      "domain": "workpermit.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 59499.4181245166,
      "curr_month_visits": 59499.4181245166,
      "unique_users": 34227.6269176438,
      "pages_per_visit": 1.70740642207207
    },
    {
      "global_rank": 34139,
      "category_rank": 156,
      "domain": "oab.org.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1891491.40460327,
      "curr_month_visits": 1891491.40460327,
      "unique_users": 873509.060825399,
      "pages_per_visit": 3.4511773915456
    },
    {
      "global_rank": 1052175,
      "category_rank": 156,
      "domain": "nacro.org.uk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 31801.9077675198,
      "curr_month_visits": 31801.9077675198,
      "unique_users": 17358.4696375618,
      "pages_per_visit": 1.91698634462047
    },
    {
      "global_rank": 5739,
      "category_rank": 156,
      "domain": "alberta.ca",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 10592015.1707154,
      "curr_month_visits": 10592015.1707154,
      "unique_users": 4744030.19492113,
      "pages_per_visit": 4.5066302576193
    },
    {
      "global_rank": 1053235,
      "category_rank": 157,
      "domain": "stalkingawareness.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 29876.2088453701,
      "curr_month_visits": 29876.2088453701,
      "unique_users": 17099.874729739,
      "pages_per_visit": 1.93712380992416
    },
    {
      "global_rank": 61338,
      "category_rank": 157,
      "domain": "ico.org.uk",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 897222.195078,
      "curr_month_visits": 897222.195078,
      "unique_users": 501124.481276623,
      "pages_per_visit": 3.88479275858503
    },
    {
      "global_rank": 689448,
      "category_rank": 157,
      "domain": "rtb.gov.rw",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 31810.0032920539,
      "curr_month_visits": 31810.0032920539,
      "unique_users": 8992.84696047009,
      "pages_per_visit": 11.6031742659448
    },
    {
      "global_rank": 34158,
      "category_rank": 157,
      "domain": "normattiva.it",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2278456.92666149,
      "curr_month_visits": 2278456.92666149,
      "unique_users": 1119922.32220772,
      "pages_per_visit": 2.28371219814259
    },
    {
      "global_rank": 155825,
      "category_rank": 157,
      "domain": "dav.org",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 398914.241170474,
      "curr_month_visits": 398914.241170474,
      "unique_users": 240598.973551628,
      "pages_per_visit": 2.10290275185158
    },
    {
      "global_rank": 5741,
      "category_rank": 157,
      "domain": "bund.de",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 10650195.3920605,
      "curr_month_visits": 10650195.3920605,
      "unique_users": 6486497.36328815,
      "pages_per_visit": 4.15006662730075
    },
    {
      "global_rank": 62610,
      "category_rank": 158,
      "domain": "guruja.com.br",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 388956.417388127,
      "curr_month_visits": 388956.417388127,
      "unique_users": 20342.6802715401,
      "pages_per_visit": 15.5268506128605
    },
    {
      "global_rank": 5783,
      "category_rank": 158,
      "domain": "mohfw.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 7479280.22038036,
      "curr_month_visits": 7479280.22038036,
      "unique_users": 2111399.2415385,
      "pages_per_visit": 9.42583746438812
    },
    {
      "global_rank": 689958,
      "category_rank": 158,
      "domain": "visafirst.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 57421.1510703476,
      "curr_month_visits": 57421.1510703476,
      "unique_users": 30358.7405494667,
      "pages_per_visit": 1.55655930490213
    },
    {
      "global_rank": 156086,
      "category_rank": 158,
      "domain": "rojgarresult.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 362865.835830789,
      "curr_month_visits": 362865.835830789,
      "unique_users": 149408.171557877,
      "pages_per_visit": 2.60489363026143
    },
    {
      "global_rank": 1067964,
      "category_rank": 158,
      "domain": "oip.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 34422.6306572584,
      "curr_month_visits": 34422.6306572584,
      "unique_users": 20078.1172685198,
      "pages_per_visit": 1.49897556427202
    },
    {
      "global_rank": 34217,
      "category_rank": 158,
      "domain": "ojp.gov",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2192552.92180089,
      "curr_month_visits": 2192552.92180089,
      "unique_users": 1489060.06700033,
      "pages_per_visit": 1.89304043250723
    },
    {
      "global_rank": 62620,
      "category_rank": 159,
      "domain": "np.gov.ua",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 550948.915458335,
      "curr_month_visits": 550948.915458335,
      "unique_users": 99795.5187720466,
      "pages_per_visit": 11.3688597305124
    },
    {
      "global_rank": 34302,
      "category_rank": 159,
      "domain": "tjro.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1267533.92283906,
      "curr_month_visits": 1267533.92283906,
      "unique_users": 146099.748713915,
      "pages_per_visit": 12.8132545540678
    },
    {
      "global_rank": 1083369,
      "category_rank": 159,
      "domain": "prisonpenpals.com",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 16828.1078440513,
      "curr_month_visits": 16828.1078440513,
      "unique_users": 7726.44517178163,
      "pages_per_visit": 10.8371820615165
    },
    {
      "global_rank": 5818,
      "category_rank": 159,
      "domain": "buenosaires.gob.ar",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 9759688.15233842,
      "curr_month_visits": 9759688.15233842,
      "unique_users": 3901044.16072231,
      "pages_per_visit": 4.4961257964128
    },
    {
      "global_rank": 691797,
      "category_rank": 159,
      "domain": "hciottawa.gov.in",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 66957.7589066229,
      "curr_month_visits": 66957.7589066229,
      "unique_users": 42254.3799388891,
      "pages_per_visit": 1.59871663223509
    },
    {
      "global_rank": 5831,
      "category_rank": 160,
      "domain": "wb.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 7538308.4782331,
      "curr_month_visits": 7538308.4782331,
      "unique_users": 1771790.04696899,
      "pages_per_visit": 7.89378665826963
    },
    {
      "global_rank": 34637,
      "category_rank": 160,
      "domain": "eforms.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1973133.23305181,
      "curr_month_visits": 1973133.23305181,
      "unique_users": 1346716.18923635,
      "pages_per_visit": 2.85241301239741
    },
    {
      "global_rank": 693237,
      "category_rank": 160,
      "domain": "af.ca",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 47611.9222988857,
      "curr_month_visits": 47611.9222988857,
      "unique_users": 24336.434037126,
      "pages_per_visit": 2.95075410853037
    },
    {
      "global_rank": 1116490,
      "category_rank": 160,
      "domain": "anccastenaso.altervista.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 40466.9197099215,
      "curr_month_visits": 40466.9197099215,
      "unique_users": 3944.86113588601,
      "pages_per_visit": 1.46412821782286
    },
    {
      "global_rank": 156890,
      "category_rank": 160,
      "domain": "althouse.blogspot.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 473229.008528306,
      "curr_month_visits": 473229.008528306,
      "unique_users": 52604.7186578518,
      "pages_per_visit": 1.81630103816756
    },
    {
      "global_rank": 62903,
      "category_rank": 160,
      "domain": "fsin.gov.ru",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 753026.439180437,
      "curr_month_visits": 753026.439180437,
      "unique_users": 262133.445508969,
      "pages_per_visit": 3.55412866685191
    },
    {
      "global_rank": 34729,
      "category_rank": 161,
      "domain": "quimbee.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2106353.51926626,
      "curr_month_visits": 2106353.51926626,
      "unique_users": 232612.107673874,
      "pages_per_visit": 3.24533237134356
    },
    {
      "global_rank": 5833,
      "category_rank": 161,
      "domain": "lkpp.go.id",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 6411850.28625221,
      "curr_month_visits": 6411850.28625221,
      "unique_users": 1565471.15021329,
      "pages_per_visit": 11.8611696031336
    },
    {
      "global_rank": 694379,
      "category_rank": 161,
      "domain": "telerion.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 48705.7945969728,
      "curr_month_visits": 48705.7945969728,
      "unique_users": 21280.8394568767,
      "pages_per_visit": 2.05487314480115
    },
    {
      "global_rank": 1122886,
      "category_rank": 161,
      "domain": "ilgiornaledellambiente.it",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 24169.3024401989,
      "curr_month_visits": 24169.3024401989,
      "unique_users": 15124.0394556833,
      "pages_per_visit": 2.44064250990171
    },
    {
      "global_rank": 64641,
      "category_rank": 161,
      "domain": "mss.go.kr",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 503629.586031888,
      "curr_month_visits": 503629.586031888,
      "unique_users": 205666.344028314,
      "pages_per_visit": 7.59553577438678
    },
    {
      "global_rank": 157539,
      "category_rank": 161,
      "domain": "defesaaereanaval.com.br",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 446418.635021975,
      "curr_month_visits": 446418.635021975,
      "unique_users": 151430.325844596,
      "pages_per_visit": 1.96614992211814
    },
    {
      "global_rank": 5901,
      "category_rank": 162,
      "domain": "gov.on.ca",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 9031776.13311869,
      "curr_month_visits": 9031776.13311869,
      "unique_users": 3702664.02386648,
      "pages_per_visit": 7.10326101806509
    },
    {
      "global_rank": 1142165,
      "category_rank": 162,
      "domain": "iars.org.uk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 22888.7899398821,
      "curr_month_visits": 22888.7899398821,
      "unique_users": 9654.20732683187,
      "pages_per_visit": 3.42116170063581
    },
    {
      "global_rank": 65026,
      "category_rank": 162,
      "domain": "mateusmais.com.br",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 945024.83789487,
      "curr_month_visits": 945024.83789487,
      "unique_users": 228580.291845705,
      "pages_per_visit": 2.60185416267173
    },
    {
      "global_rank": 697167,
      "category_rank": 162,
      "domain": "aussizzgroup.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 74900.118671456,
      "curr_month_visits": 74900.118671456,
      "unique_users": 38994.1746748024,
      "pages_per_visit": 1.56026089850333
    },
    {
      "global_rank": 35058,
      "category_rank": 162,
      "domain": "googleplex.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 2739584.83164682,
      "curr_month_visits": 2739584.83164682,
      "unique_users": 112572.69056817,
      "pages_per_visit": 4.17749948867235
    },
    {
      "global_rank": 158507,
      "category_rank": 162,
      "domain": "osw.waw.pl",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 358440.682846801,
      "curr_month_visits": 358440.682846801,
      "unique_users": 155287.573474756,
      "pages_per_visit": 1.89230993115163
    },
    {
      "global_rank": 35761,
      "category_rank": 163,
      "domain": "pravo.ru",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1795723.29998756,
      "curr_month_visits": 1795723.29998756,
      "unique_users": 988615.636363527,
      "pages_per_visit": 2.56482209663347
    },
    {
      "global_rank": 1152529,
      "category_rank": 163,
      "domain": "crime-statistics.co.uk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 33832.4058151421,
      "curr_month_visits": 33832.4058151421,
      "unique_users": 22619.038264252,
      "pages_per_visit": 2.999522135644
    },
    {
      "global_rank": 159656,
      "category_rank": 163,
      "domain": "plantao24horasnews.com.br",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 421343.057636862,
      "curr_month_visits": 421343.057636862,
      "unique_users": 65368.5626208893,
      "pages_per_visit": 2.05881354572066
    },
    {
      "global_rank": 699199,
      "category_rank": 163,
      "domain": "britsimonsays.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 34586.496215271,
      "curr_month_visits": 34586.496215271,
      "unique_users": 16405.4033123638,
      "pages_per_visit": 1.99250240202905
    },
    {
      "global_rank": 65307,
      "category_rank": 163,
      "domain": "seac.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 585504.695193952,
      "curr_month_visits": 585504.695193952,
      "unique_users": 118950.759093318,
      "pages_per_visit": 8.61633743859959
    },
    {
      "global_rank": 5945,
      "category_rank": 163,
      "domain": "fgov.be",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 8289461.79059097,
      "curr_month_visits": 8289461.79059097,
      "unique_users": 3519896.46799796,
      "pages_per_visit": 5.95135619471506
    },
    {
      "global_rank": 159940,
      "category_rank": 164,
      "domain": "foujiadda.in",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 225516.377952605,
      "curr_month_visits": 225516.377952605,
      "unique_users": 139848.737457134,
      "pages_per_visit": 5.49264066684141
    },
    {
      "global_rank": 700497,
      "category_rank": 164,
      "domain": "americanexperience.ro",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 25073.5283761964,
      "curr_month_visits": 25073.5283761964,
      "unique_users": 9413.98457771228,
      "pages_per_visit": 4.90686216421613
    },
    {
      "global_rank": 1165327,
      "category_rank": 164,
      "domain": "niwrc.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 23218.591130311,
      "curr_month_visits": 23218.591130311,
      "unique_users": 14127.5063091027,
      "pages_per_visit": 1.94030683301936
    },
    {
      "global_rank": 5988,
      "category_rank": 164,
      "domain": "gprocurement.go.th",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 3936581.76266794,
      "curr_month_visits": 3936581.76266794,
      "unique_users": 532870.033520205,
      "pages_per_visit": 34.4594036615441
    },
    {
      "global_rank": 66406,
      "category_rank": 164,
      "domain": "lawyersgunsmoneyblog.com",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 1083192.98836259,
      "curr_month_visits": 1083192.98836259,
      "unique_users": 110949.066341017,
      "pages_per_visit": 3.88555863058522
    },
    {
      "global_rank": 35822,
      "category_rank": 164,
      "domain": "legalplace.fr",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1668483.79819935,
      "curr_month_visits": 1668483.79819935,
      "unique_users": 928703.968803431,
      "pages_per_visit": 2.97912542163541
    },
    {
      "global_rank": 66466,
      "category_rank": 165,
      "domain": "fips.ru",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 661862.069301402,
      "curr_month_visits": 661862.069301402,
      "unique_users": 198466.665701119,
      "pages_per_visit": 8.44750715704361
    },
    {
      "global_rank": 711746,
      "category_rank": 165,
      "domain": "migration.tas.gov.au",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 65024.1166882559,
      "curr_month_visits": 65024.1166882559,
      "unique_users": 19199.7337061844,
      "pages_per_visit": 2.30458671542744
    },
    {
      "global_rank": 35978,
      "category_rank": 165,
      "domain": "jfpr.jus.br",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1101731.53273199,
      "curr_month_visits": 1101731.53273199,
      "unique_users": 128489.071803518,
      "pages_per_visit": 14.3979650317015
    },
    {
      "global_rank": 6060,
      "category_rank": 165,
      "domain": "moph.go.th",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 9142257.27102759,
      "curr_month_visits": 9142257.27102759,
      "unique_users": 3101554.86116695,
      "pages_per_visit": 4.87716011511039
    },
    {
      "global_rank": 1166705,
      "category_rank": 165,
      "domain": "nnw.org",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 23391.9678687087,
      "curr_month_visits": 23391.9678687087,
      "unique_users": 13632.3384021771,
      "pages_per_visit": 2.68031789399206
    },
    {
      "global_rank": 160384,
      "category_rank": 165,
      "domain": "rusi.org",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 390358.060824651,
      "curr_month_visits": 390358.060824651,
      "unique_users": 190318.962534377,
      "pages_per_visit": 1.89827181288563
    },
    {
      "global_rank": 161338,
      "category_rank": 166,
      "domain": "45office.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 184119.946355662,
      "curr_month_visits": 184119.946355662,
      "unique_users": 107733.258291602,
      "pages_per_visit": 2.81887043453644
    },
    {
      "global_rank": 713431,
      "category_rank": 166,
      "domain": "examencitoyennete.ca",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 23817.9223117125,
      "curr_month_visits": 23817.9223117125,
      "unique_users": 9041.96324291981,
      "pages_per_visit": 5.00150550680671
    },
    {
      "global_rank": 6069,
      "category_rank": 166,
      "domain": "gd.gov.cn",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 9116003.36507563,
      "curr_month_visits": 9116003.36507563,
      "unique_users": 3108440.94196343,
      "pages_per_visit": 5.13936199695076
    },
    {
      "global_rank": 67010,
      "category_rank": 166,
      "domain": "comune.genova.it",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 579925.256387598,
      "curr_month_visits": 579925.256387598,
      "unique_users": 247310.740795212,
      "pages_per_visit": 8.10985929652132
    },
    {
      "global_rank": 1167354,
      "category_rank": 166,
      "domain": "murdermap.co.uk",
      "category": "Law_and_Government/Law_Enforcement_and_Protective_Services",
      "avg_month_visits": 22538.9674731727,
      "curr_month_visits": 22538.9674731727,
      "unique_users": 12732.8991912426,
      "pages_per_visit": 4.43254816767811
    },
    {
      "global_rank": 36043,
      "category_rank": 166,
      "domain": "qydjw.com",
      "category": "Law_and_Government/Legal",
      "avg_month_visits": 1244728.53782438,
      "curr_month_visits": 1244728.53782438,
      "unique_users": 984609.454877451,
      "pages_per_visit": 2.61481090351621
    },
    {
      "global_rank": 713744,
      "category_rank": 167,
      "domain": "immigrationdirect.com",
      "category": "Law_and_Government/Immigration_and_Visas",
      "avg_month_visits": 33909.237794745,
      "curr_month_visits": 33909.237794745,
      "unique_users": 23623.7588504397,
      "pages_per_visit": 3.15570537076194
    },
    {
      "global_rank": 162338,
      "category_rank": 167,
      "domain": "highergov.com",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 266553.143057559,
      "curr_month_visits": 266553.143057559,
      "unique_users": 167151.802140158,
      "pages_per_visit": 3.06234196551603
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