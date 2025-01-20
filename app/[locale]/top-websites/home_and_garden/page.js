
import {Top_Website_Categories} from '@/lib/top_websites';
export const runtime = 'edge';
export const metadata = {
  title: 'Top home and garden Websites Ranking in the World, 2025',
  description: 'The top 1000 most visited entertainment websites in the World by Ahrefs organic search traffic estimates. Updated monthly. 2025',
  keywords: ['Top Websites', 'Top Websites Ranking','home and garden'],
  authors: [
    { name: 'hackX', url: 'https://www.xucongyong.com' }
  ]
}


export default function TopWebsite() {

  const global_rank_all = [
    {
      "global_rank": 261,
      "category_rank": 1,
      "domain": "lowes.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 121641810.435835,
      "curr_month_visits": 121641810.435835,
      "unique_users": 55177507.0543285,
      "pages_per_visit": 4.36124663165866
    },
    {
      "global_rank": 14575,
      "category_rank": 1,
      "domain": "kaercher.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 4052851.03493535,
      "curr_month_visits": 4052851.03493535,
      "unique_users": 2495555.03541511,
      "pages_per_visit": 3.19085306940143
    },
    {
      "global_rank": 6735,
      "category_rank": 1,
      "domain": "countryliving.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 11658713.1472417,
      "curr_month_visits": 11658713.1472417,
      "unique_users": 8655829.56521818,
      "pages_per_visit": 1.7125641080904
    },
    {
      "global_rank": 125,
      "category_rank": 1,
      "domain": "ikea.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 218514149.718807,
      "curr_month_visits": 218514149.718807,
      "unique_users": 90551155.8560088,
      "pages_per_visit": 6.59938438704102
    },
    {
      "global_rank": 164,
      "category_rank": 1,
      "domain": "homedepot.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 180882810.161845,
      "curr_month_visits": 180882810.161845,
      "unique_users": 69593627.6786763,
      "pages_per_visit": 4.50585888975252
    },
    {
      "global_rank": 17676,
      "category_rank": 2,
      "domain": "shuminoengei.jp",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 4199854.9050025,
      "curr_month_visits": 4199854.9050025,
      "unique_users": 2007125.44014446,
      "pages_per_visit": 2.93471249787928
    },
    {
      "global_rank": 15937,
      "category_rank": 2,
      "domain": "praktiker.gr",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 2506033.05908146,
      "curr_month_visits": 2506033.05908146,
      "unique_users": 1118852.29826728,
      "pages_per_visit": 5.61035427731784
    },
    {
      "global_rank": 1927,
      "category_rank": 2,
      "domain": "nitori-net.jp",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 23680774.1904377,
      "curr_month_visits": 23680774.1904377,
      "unique_users": 11228473.2398652,
      "pages_per_visit": 4.12679116553406
    },
    {
      "global_rank": 1971,
      "category_rank": 2,
      "domain": "goodhousekeeping.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 33978796.0678359,
      "curr_month_visits": 33978796.0678359,
      "unique_users": 24804779.3578821,
      "pages_per_visit": 1.67262144087773
    },
    {
      "global_rank": 962,
      "category_rank": 2,
      "domain": "vseinstrumenti.ru",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 40965135.5076999,
      "curr_month_visits": 40965135.5076999,
      "unique_users": 12857233.9404302,
      "pages_per_visit": 6.07719179595632
    },
    {
      "global_rank": 16508,
      "category_rank": 3,
      "domain": "inmyroom.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 4200646.13929507,
      "curr_month_visits": 4200646.13929507,
      "unique_users": 2161916.00796089,
      "pages_per_visit": 2.47563279176548
    },
    {
      "global_rank": 3687,
      "category_rank": 3,
      "domain": "crateandbarrel.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 11856085.9102268,
      "curr_month_visits": 11856085.9102268,
      "unique_users": 6599596.51774458,
      "pages_per_visit": 4.00049008450486
    },
    {
      "global_rank": 2321,
      "category_rank": 3,
      "domain": "sikayetvar.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 24643453.0135362,
      "curr_month_visits": 24643453.0135362,
      "unique_users": 13351934.4559687,
      "pages_per_visit": 3.23356183483412
    },
    {
      "global_rank": 1087,
      "category_rank": 3,
      "domain": "harborfreight.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 44207304.2903516,
      "curr_month_visits": 44207304.2903516,
      "unique_users": 18836600.3452849,
      "pages_per_visit": 3.47662501100728
    },
    {
      "global_rank": 20260,
      "category_rank": 3,
      "domain": "mein-schoener-garten.de",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 5764616.73256347,
      "curr_month_visits": 5764616.73256347,
      "unique_users": 3247738.60865882,
      "pages_per_visit": 1.54148094168884
    },
    {
      "global_rank": 17599,
      "category_rank": 4,
      "domain": "asianpaints.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 4261297.35290538,
      "curr_month_visits": 4261297.35290538,
      "unique_users": 2469110.57826697,
      "pages_per_visit": 3.15804520072359
    },
    {
      "global_rank": 2349,
      "category_rank": 4,
      "domain": "hgtv.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 25730116.9396634,
      "curr_month_visits": 25730116.9396634,
      "unique_users": 6771441.73123352,
      "pages_per_visit": 2.63272041364859
    },
    {
      "global_rank": 1443,
      "category_rank": 4,
      "domain": "leroymerlin.fr",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 29654850.3237662,
      "curr_month_visits": 29654850.3237662,
      "unique_users": 11436380.6785122,
      "pages_per_visit": 5.19669692477164
    },
    {
      "global_rank": 21730,
      "category_rank": 4,
      "domain": "intratuin.nl",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 2144239.5248486,
      "curr_month_visits": 2144239.5248486,
      "unique_users": 1099263.25920221,
      "pages_per_visit": 3.78028433110704
    },
    {
      "global_rank": 3836,
      "category_rank": 4,
      "domain": "ashleyfurniture.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 13321569.3775722,
      "curr_month_visits": 13321569.3775722,
      "unique_users": 7567597.92226939,
      "pages_per_visit": 3.72215909871715
    },
    {
      "global_rank": 3452,
      "category_rank": 5,
      "domain": "clients.site",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 23274095.7643466,
      "curr_month_visits": 23274095.7643466,
      "unique_users": 13201709.1667978,
      "pages_per_visit": 1.6913403072351
    },
    {
      "global_rank": 3874,
      "category_rank": 5,
      "domain": "wayfair.co.uk",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 11785661.6220866,
      "curr_month_visits": 11785661.6220866,
      "unique_users": 5255280.1517998,
      "pages_per_visit": 5.08756916617044
    },
    {
      "global_rank": 18622,
      "category_rank": 5,
      "domain": "ikea.gr",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 2033625.69933377,
      "curr_month_visits": 2033625.69933377,
      "unique_users": 839334.533542244,
      "pages_per_visit": 7.89119787654988
    },
    {
      "global_rank": 1533,
      "category_rank": 5,
      "domain": "lemanapro.ru",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 30482420.1312529,
      "curr_month_visits": 30482420.1312529,
      "unique_users": 11324619.0324264,
      "pages_per_visit": 5.15221677611736
    },
    {
      "global_rank": 25479,
      "category_rank": 5,
      "domain": "rhs.org.uk",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 3228483.87922832,
      "curr_month_visits": 3228483.87922832,
      "unique_users": 1694442.42409828,
      "pages_per_visit": 2.54867350583881
    },
    {
      "global_rank": 3576,
      "category_rank": 6,
      "domain": "consumerreports.org",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 14851655.2323802,
      "curr_month_visits": 14851655.2323802,
      "unique_users": 8919152.69221335,
      "pages_per_visit": 3.44198422885279
    },
    {
      "global_rank": 28153,
      "category_rank": 6,
      "domain": "promessedefleurs.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 2369308.08624084,
      "curr_month_visits": 2369308.08624084,
      "unique_users": 1129380.91566035,
      "pages_per_visit": 3.614473184312
    },
    {
      "global_rank": 4072,
      "category_rank": 6,
      "domain": "homedepot.com.mx",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 12604397.6718213,
      "curr_month_visits": 12604397.6718213,
      "unique_users": 6046232.9888653,
      "pages_per_visit": 4.04561889524707
    },
    {
      "global_rank": 19072,
      "category_rank": 6,
      "domain": "roomclip.jp",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 3740155.678347,
      "curr_month_visits": 3740155.678347,
      "unique_users": 2248904.30895948,
      "pages_per_visit": 2.45778897044676
    },
    {
      "global_rank": 1570,
      "category_rank": 6,
      "domain": "menards.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 25546290.6708852,
      "curr_month_visits": 25546290.6708852,
      "unique_users": 10065249.3333681,
      "pages_per_visit": 5.85593543426602
    },
    {
      "global_rank": 31441,
      "category_rank": 7,
      "domain": "picturethisai.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 2854587.95065848,
      "curr_month_visits": 2854587.95065848,
      "unique_users": 1808739.83962009,
      "pages_per_visit": 1.61178928416153
    },
    {
      "global_rank": 4633,
      "category_rank": 7,
      "domain": "bbb.org",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 13368269.0044819,
      "curr_month_visits": 13368269.0044819,
      "unique_users": 9630637.30378326,
      "pages_per_visit": 2.8842886364785
    },
    {
      "global_rank": 20709,
      "category_rank": 7,
      "domain": "hubpages.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 4305060.79730112,
      "curr_month_visits": 4305060.79730112,
      "unique_users": 3114693.27423491,
      "pages_per_visit": 1.62936980816537
    },
    {
      "global_rank": 1822,
      "category_rank": 7,
      "domain": "dunelm.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 23414342.4675175,
      "curr_month_visits": 23414342.4675175,
      "unique_users": 9856445.61675112,
      "pages_per_visit": 5.86243315559168
    },
    {
      "global_rank": 6122,
      "category_rank": 7,
      "domain": "templeandwebster.com.au",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 6763640.20776809,
      "curr_month_visits": 6763640.20776809,
      "unique_users": 2551785.58633724,
      "pages_per_visit": 4.97814612756011
    },
    {
      "global_rank": 33025,
      "category_rank": 8,
      "domain": "gardeningknowhow.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 3255321.31986994,
      "curr_month_visits": 3255321.31986994,
      "unique_users": 2289074.85456035,
      "pages_per_visit": 1.4808467672036
    },
    {
      "global_rank": 5887,
      "category_rank": 8,
      "domain": "obi.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 11142785.868355,
      "curr_month_visits": 11142785.868355,
      "unique_users": 5703648.45283117,
      "pages_per_visit": 3.50321729052205
    },
    {
      "global_rank": 1856,
      "category_rank": 8,
      "domain": "homedepot.ca",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 26238648.1109087,
      "curr_month_visits": 26238648.1109087,
      "unique_users": 9595117.4807444,
      "pages_per_visit": 4.3802221718377
    },
    {
      "global_rank": 6381,
      "category_rank": 8,
      "domain": "xxxlutz.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 9148404.33404328,
      "curr_month_visits": 9148404.33404328,
      "unique_users": 4507057.47432441,
      "pages_per_visit": 3.92137806684532
    },
    {
      "global_rank": 26153,
      "category_rank": 8,
      "domain": "jysk.gr",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 1566834.78175925,
      "curr_month_visits": 1566834.78175925,
      "unique_users": 738282.111721709,
      "pages_per_visit": 4.89690722975282
    },
    {
      "global_rank": 6061,
      "category_rank": 9,
      "domain": "bauhaus.info",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 9006996.76332449,
      "curr_month_visits": 9006996.76332449,
      "unique_users": 4555938.77159001,
      "pages_per_visit": 4.84773359812357
    },
    {
      "global_rank": 37285,
      "category_rank": 9,
      "domain": "sad-i-ogorod.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 798820.446500104,
      "curr_month_visits": 798820.446500104,
      "unique_users": 377345.887990945,
      "pages_per_visit": 9.14016736018878
    },
    {
      "global_rank": 7046,
      "category_rank": 9,
      "domain": "sklum.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 6854518.62937831,
      "curr_month_visits": 6854518.62937831,
      "unique_users": 3345290.73357042,
      "pages_per_visit": 4.71635849254721
    },
    {
      "global_rank": 30617,
      "category_rank": 9,
      "domain": "jaquar.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 1941424.68595624,
      "curr_month_visits": 1941424.68595624,
      "unique_users": 1081447.51342312,
      "pages_per_visit": 3.754695021691
    },
    {
      "global_rank": 1995,
      "category_rank": 9,
      "domain": "diy.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 25815077.5156991,
      "curr_month_visits": 25815077.5156991,
      "unique_users": 11602886.1510658,
      "pages_per_visit": 4.18421274093864
    },
    {
      "global_rank": 6499,
      "category_rank": 10,
      "domain": "marthastewart.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 11422903.7704063,
      "curr_month_visits": 11422903.7704063,
      "unique_users": 7407524.89740781,
      "pages_per_visit": 1.76847966722512
    },
    {
      "global_rank": 36055,
      "category_rank": 10,
      "domain": "homestyler.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 1595655.05598068,
      "curr_month_visits": 1595655.05598068,
      "unique_users": 460057.518137441,
      "pages_per_visit": 4.81352096497519
    },
    {
      "global_rank": 39721,
      "category_rank": 10,
      "domain": "plantura.garden",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 2404647.81501038,
      "curr_month_visits": 2404647.81501038,
      "unique_users": 1642043.76349919,
      "pages_per_visit": 1.66390188108595
    },
    {
      "global_rank": 10059,
      "category_rank": 10,
      "domain": "mybobs.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 5280770.36122331,
      "curr_month_visits": 5280770.36122331,
      "unique_users": 3014319.67990286,
      "pages_per_visit": 3.65906164578697
    },
    {
      "global_rank": 2019,
      "category_rank": 10,
      "domain": "screwfix.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 24644130.7062273,
      "curr_month_visits": 24644130.7062273,
      "unique_users": 9106250.81580839,
      "pages_per_visit": 4.7650498181321
    },
    {
      "global_rank": 37053,
      "category_rank": 11,
      "domain": "westwing.pl",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 1272684.46217526,
      "curr_month_visits": 1272684.46217526,
      "unique_users": 554407.806017626,
      "pages_per_visit": 4.69492069496237
    },
    {
      "global_rank": 6698,
      "category_rank": 11,
      "domain": "hornbach.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 8761490.8212513,
      "curr_month_visits": 8761490.8212513,
      "unique_users": 4212219.10389235,
      "pages_per_visit": 4.84880521680634
    },
    {
      "global_rank": 2106,
      "category_rank": 11,
      "domain": "bunnings.com.au",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 23304632.2807904,
      "curr_month_visits": 23304632.2807904,
      "unique_users": 8015539.23946389,
      "pages_per_visit": 4.21770265534936
    },
    {
      "global_rank": 40923,
      "category_rank": 11,
      "domain": "chez-vous.info",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 1496004.69410714,
      "curr_month_visits": 1496004.69410714,
      "unique_users": 378877.202108114,
      "pages_per_visit": 2.0684804231634
    },
    {
      "global_rank": 11863,
      "category_rank": 11,
      "domain": "mattressfirm.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 5114295.09530822,
      "curr_month_visits": 5114295.09530822,
      "unique_users": 3284078.8142799,
      "pages_per_visit": 3.28226374078019
    },
    {
      "global_rank": 43854,
      "category_rank": 12,
      "domain": "7dach.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 2319423.0059101,
      "curr_month_visits": 2319423.0059101,
      "unique_users": 1463305.3000131,
      "pages_per_visit": 1.54723956062598
    },
    {
      "global_rank": 12029,
      "category_rank": 12,
      "domain": "article.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 4274757.78168134,
      "curr_month_visits": 4274757.78168134,
      "unique_users": 2349336.97012937,
      "pages_per_visit": 4.57726757608743
    },
    {
      "global_rank": 38194,
      "category_rank": 12,
      "domain": "by.me",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 1440254.10092728,
      "curr_month_visits": 1440254.10092728,
      "unique_users": 675436.915799966,
      "pages_per_visit": 4.02848080127029
    },
    {
      "global_rank": 2225,
      "category_rank": 12,
      "domain": "leroymerlin.es",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 20159281.3499346,
      "curr_month_visits": 20159281.3499346,
      "unique_users": 8345871.37339275,
      "pages_per_visit": 5.19686197100337
    },
    {
      "global_rank": 6874,
      "category_rank": 12,
      "domain": "apartmenttherapy.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 11517033.9363553,
      "curr_month_visits": 11517033.9363553,
      "unique_users": 6248157.13255301,
      "pages_per_visit": 1.88839578948396
    },
    {
      "global_rank": 2251,
      "category_rank": 13,
      "domain": "acehardware.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 24501449.4049745,
      "curr_month_visits": 24501449.4049745,
      "unique_users": 15839765.7886791,
      "pages_per_visit": 2.893555798388
    },
    {
      "global_rank": 7953,
      "category_rank": 13,
      "domain": "houzz.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 7523160.00435102,
      "curr_month_visits": 7523160.00435102,
      "unique_users": 4672490.1806252,
      "pages_per_visit": 4.88223038847141
    },
    {
      "global_rank": 12138,
      "category_rank": 13,
      "domain": "livingspaces.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 3812476.63145575,
      "curr_month_visits": 3812476.63145575,
      "unique_users": 2049395.54072985,
      "pages_per_visit": 4.61187875282821
    },
    {
      "global_rank": 44293,
      "category_rank": 13,
      "domain": "gardenersworld.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 2321169.54529312,
      "curr_month_visits": 2321169.54529312,
      "unique_users": 1426816.63536094,
      "pages_per_visit": 1.75605063408617
    },
    {
      "global_rank": 42779,
      "category_rank": 13,
      "domain": "houzz.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 1174972.83261976,
      "curr_month_visits": 1174972.83261976,
      "unique_users": 749432.29838521,
      "pages_per_visit": 3.95949553459142
    },
    {
      "global_rank": 46457,
      "category_rank": 14,
      "domain": "jardiland.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 1190160.27256279,
      "curr_month_visits": 1190160.27256279,
      "unique_users": 786297.215548005,
      "pages_per_visit": 2.75830976906931
    },
    {
      "global_rank": 44525,
      "category_rank": 14,
      "domain": "dogtas.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 1223065.95488288,
      "curr_month_visits": 1223065.95488288,
      "unique_users": 531242.100167922,
      "pages_per_visit": 6.3642776117575
    },
    {
      "global_rank": 2897,
      "category_rank": 14,
      "domain": "joann.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 13738364.0579965,
      "curr_month_visits": 13738364.0579965,
      "unique_users": 6531589.16839386,
      "pages_per_visit": 5.63611168145065
    },
    {
      "global_rank": 12783,
      "category_rank": 14,
      "domain": "wayfair.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 4100264.91694368,
      "curr_month_visits": 4100264.91694368,
      "unique_users": 2167200.18669681,
      "pages_per_visit": 4.50849763928975
    },
    {
      "global_rank": 8523,
      "category_rank": 14,
      "domain": "sherwin-williams.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 6162857.35479604,
      "curr_month_visits": 6162857.35479604,
      "unique_users": 3433465.26829975,
      "pages_per_visit": 5.69687837192588
    },
    {
      "global_rank": 48133,
      "category_rank": 15,
      "domain": "livspace.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 1457629.53643335,
      "curr_month_visits": 1457629.53643335,
      "unique_users": 892272.736600857,
      "pages_per_visit": 2.83138225098324
    },
    {
      "global_rank": 2905,
      "category_rank": 15,
      "domain": "potterybarn.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 14541126.8406719,
      "curr_month_visits": 14541126.8406719,
      "unique_users": 7344570.54775424,
      "pages_per_visit": 4.32332723912313
    },
    {
      "global_rank": 8577,
      "category_rank": 15,
      "domain": "hometalk.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 10412495.9917351,
      "curr_month_visits": 10412495.9917351,
      "unique_users": 5582482.92539931,
      "pages_per_visit": 2.34865294996549
    },
    {
      "global_rank": 12793,
      "category_rank": 15,
      "domain": "roomstogo.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 3344332.35495586,
      "curr_month_visits": 3344332.35495586,
      "unique_users": 1959372.81409244,
      "pages_per_visit": 5.30308649810509
    },
    {
      "global_rank": 46940,
      "category_rank": 15,
      "domain": "greensnap.co.jp",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 2242810.93372404,
      "curr_month_visits": 2242810.93372404,
      "unique_users": 1499151.95469518,
      "pages_per_visit": 1.30641162036341
    },
    {
      "global_rank": 56455,
      "category_rank": 16,
      "domain": "dulux.co.uk",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 843586.982586145,
      "curr_month_visits": 843586.982586145,
      "unique_users": 503859.054678971,
      "pages_per_visit": 4.30432716616471
    },
    {
      "global_rank": 53100,
      "category_rank": 16,
      "domain": "ogorod.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 1834854.95816313,
      "curr_month_visits": 1834854.95816313,
      "unique_users": 1097146.67078941,
      "pages_per_visit": 1.84759689825404
    },
    {
      "global_rank": 8962,
      "category_rank": 16,
      "domain": "petrovich.ru",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 6607049.12341328,
      "curr_month_visits": 6607049.12341328,
      "unique_users": 2804554.68674304,
      "pages_per_visit": 5.39192403953893
    },
    {
      "global_rank": 3381,
      "category_rank": 16,
      "domain": "maisonsdumonde.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 12567751.0853541,
      "curr_month_visits": 12567751.0853541,
      "unique_users": 5841777.64208736,
      "pages_per_visit": 4.79529353271839
    },
    {
      "global_rank": 13385,
      "category_rank": 16,
      "domain": "cb2.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 3965949.30402137,
      "curr_month_visits": 3965949.30402137,
      "unique_users": 2136178.85436902,
      "pages_per_visit": 3.52313916121207
    },
    {
      "global_rank": 53184,
      "category_rank": 17,
      "domain": "agro-market.net",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 1097121.76034651,
      "curr_month_visits": 1097121.76034651,
      "unique_users": 516578.695669235,
      "pages_per_visit": 4.55649490391287
    },
    {
      "global_rank": 3613,
      "category_rank": 17,
      "domain": "wayfair.ca",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 12384065.9106803,
      "curr_month_visits": 12384065.9106803,
      "unique_users": 4858211.74931091,
      "pages_per_visit": 5.7624956479561
    },
    {
      "global_rank": 58295,
      "category_rank": 17,
      "domain": "godrejinterio.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 857958.022183058,
      "curr_month_visits": 857958.022183058,
      "unique_users": 559971.029978629,
      "pages_per_visit": 3.6435560024916
    },
    {
      "global_rank": 13745,
      "category_rank": 17,
      "domain": "allmodern.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 3388049.46607455,
      "curr_month_visits": 3388049.46607455,
      "unique_users": 1951451.37394062,
      "pages_per_visit": 4.30495613706789
    },
    {
      "global_rank": 9500,
      "category_rank": 17,
      "domain": "verivox.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 4550035.44492423,
      "curr_month_visits": 4550035.44492423,
      "unique_users": 2805924.16026667,
      "pages_per_visit": 4.87123336592091
    },
    {
      "global_rank": 4021,
      "category_rank": 18,
      "domain": "uhaul.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 13858421.6504369,
      "curr_month_visits": 13858421.6504369,
      "unique_users": 6385145.78783634,
      "pages_per_visit": 5.51092549871629
    },
    {
      "global_rank": 9616,
      "category_rank": 18,
      "domain": "quechoisir.org",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 6674144.08844609,
      "curr_month_visits": 6674144.08844609,
      "unique_users": 4078918.78575009,
      "pages_per_visit": 2.54070645949122
    },
    {
      "global_rank": 60092,
      "category_rank": 18,
      "domain": "vivadecora.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 1304300.25727721,
      "curr_month_visits": 1304300.25727721,
      "unique_users": 1020573.35964365,
      "pages_per_visit": 1.55429624224487
    },
    {
      "global_rank": 54035,
      "category_rank": 18,
      "domain": "rustica.fr",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 1477871.36139397,
      "curr_month_visits": 1477871.36139397,
      "unique_users": 864473.637453709,
      "pages_per_visit": 1.8288471208746
    },
    {
      "global_rank": 14293,
      "category_rank": 18,
      "domain": "mueblesplacencia.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 3231460.41964208,
      "curr_month_visits": 3231460.41964208,
      "unique_users": 1730101.76585975,
      "pages_per_visit": 2.20917162448405
    },
    {
      "global_rank": 57172,
      "category_rank": 19,
      "domain": "ugaoo.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 747281.024594576,
      "curr_month_visits": 747281.024594576,
      "unique_users": 412568.518334702,
      "pages_per_visit": 4.46298691991008
    },
    {
      "global_rank": 65308,
      "category_rank": 19,
      "domain": "remplanner.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 872863.941491971,
      "curr_month_visits": 872863.941491971,
      "unique_users": 230894.101549807,
      "pages_per_visit": 3.54296875325847
    },
    {
      "global_rank": 11817,
      "category_rank": 19,
      "domain": "familyhandyman.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 7203025.04534783,
      "curr_month_visits": 7203025.04534783,
      "unique_users": 4527634.45832997,
      "pages_per_visit": 1.52713104416085
    },
    {
      "global_rank": 16335,
      "category_rank": 19,
      "domain": "castlery.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 3234888.76603855,
      "curr_month_visits": 3234888.76603855,
      "unique_users": 1732440.3152497,
      "pages_per_visit": 3.44937802070575
    },
    {
      "global_rank": 4049,
      "category_rank": 19,
      "domain": "wink.ru",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 19330268.6974567,
      "curr_month_visits": 19330268.6974567,
      "unique_users": 6374849.39100926,
      "pages_per_visit": 3.02560561388383
    },
    {
      "global_rank": 57868,
      "category_rank": 20,
      "domain": "greensnap.jp",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 1290769.85802611,
      "curr_month_visits": 1290769.85802611,
      "unique_users": 758948.884976267,
      "pages_per_visit": 1.45311858420357
    },
    {
      "global_rank": 4281,
      "category_rank": 20,
      "domain": "leroymerlin.com.br",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 12779556.5690403,
      "curr_month_visits": 12779556.5690403,
      "unique_users": 7116872.37541718,
      "pages_per_visit": 3.34961514371071
    },
    {
      "global_rank": 66084,
      "category_rank": 20,
      "domain": "kelebek.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 684270.264528051,
      "curr_month_visits": 684270.264528051,
      "unique_users": 355040.574868062,
      "pages_per_visit": 5.50490227225046
    },
    {
      "global_rank": 12804,
      "category_rank": 20,
      "domain": "jdpower.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 5228136.69837987,
      "curr_month_visits": 5228136.69837987,
      "unique_users": 3677158.47115387,
      "pages_per_visit": 3.1856401325476
    },
    {
      "global_rank": 16734,
      "category_rank": 20,
      "domain": "structube.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2303019.60004278,
      "curr_month_visits": 2303019.60004278,
      "unique_users": 1043650.82783351,
      "pages_per_visit": 7.30895468201453
    },
    {
      "global_rank": 57937,
      "category_rank": 21,
      "domain": "florium.ua",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 622031.251097556,
      "curr_month_visits": 622031.251097556,
      "unique_users": 280712.282100659,
      "pages_per_visit": 5.96897188807454
    },
    {
      "global_rank": 4306,
      "category_rank": 21,
      "domain": "madeiramadeira.com.br",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 12675998.8727977,
      "curr_month_visits": 12675998.8727977,
      "unique_users": 5994917.79762935,
      "pages_per_visit": 3.48356169334853
    },
    {
      "global_rank": 66728,
      "category_rank": 21,
      "domain": "enzahome.com.tr",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 1008461.70789876,
      "curr_month_visits": 1008461.70789876,
      "unique_users": 542805.10263015,
      "pages_per_visit": 4.00770676165768
    },
    {
      "global_rank": 14175,
      "category_rank": 21,
      "domain": "housebeautiful.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 5606608.12950113,
      "curr_month_visits": 5606608.12950113,
      "unique_users": 4176772.60969997,
      "pages_per_visit": 1.60120138730025
    },
    {
      "global_rank": 17133,
      "category_rank": 21,
      "domain": "hoeffner.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 3363510.16264508,
      "curr_month_visits": 3363510.16264508,
      "unique_users": 1783002.33104811,
      "pages_per_visit": 4.14819067023744
    },
    {
      "global_rank": 16113,
      "category_rank": 22,
      "domain": "billiger.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 4308055.18162024,
      "curr_month_visits": 4308055.18162024,
      "unique_users": 2958141.36106014,
      "pages_per_visit": 2.36387166617109
    },
    {
      "global_rank": 2980,
      "category_rank": 22,
      "domain": "southernliving.com",
      "category": "Home_and_Garden",
      "avg_month_visits": 22939791.3837631,
      "curr_month_visits": 22939791.3837631,
      "unique_users": 13686580.6525361,
      "pages_per_visit": 2.12036111988892
    },
    {
      "global_rank": 4373,
      "category_rank": 22,
      "domain": "therange.co.uk",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 10725642.2241476,
      "curr_month_visits": 10725642.2241476,
      "unique_users": 5646451.50908982,
      "pages_per_visit": 5.00796383331515
    },
    {
      "global_rank": 58624,
      "category_rank": 22,
      "domain": "epicgardening.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 1491957.94698959,
      "curr_month_visits": 1491957.94698959,
      "unique_users": 1000376.90702369,
      "pages_per_visit": 2.20213298781367
    },
    {
      "global_rank": 17287,
      "category_rank": 22,
      "domain": "elmueble.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 4136356.53073459,
      "curr_month_visits": 4136356.53073459,
      "unique_users": 2456237.98887867,
      "pages_per_visit": 2.8786460800872
    },
    {
      "global_rank": 74475,
      "category_rank": 22,
      "domain": "cotemaison.fr",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 575896.48777198,
      "curr_month_visits": 575896.48777198,
      "unique_users": 328837.331955806,
      "pages_per_visit": 5.62745960232328
    },
    {
      "global_rank": 59667,
      "category_rank": 23,
      "domain": "greg.app",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 1430153.05430842,
      "curr_month_visits": 1430153.05430842,
      "unique_users": 947161.197982771,
      "pages_per_visit": 1.55003393609971
    },
    {
      "global_rank": 76462,
      "category_rank": 23,
      "domain": "colorprofi.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 366597.512228171,
      "curr_month_visits": 366597.512228171,
      "unique_users": 136810.647631781,
      "pages_per_visit": 3.4373403920625
    },
    {
      "global_rank": 17890,
      "category_rank": 23,
      "domain": "thebrick.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2269389.22791693,
      "curr_month_visits": 2269389.22791693,
      "unique_users": 1162778.34050573,
      "pages_per_visit": 5.6815176994659
    },
    {
      "global_rank": 4616,
      "category_rank": 23,
      "domain": "leroymerlin.it",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 11061260.7874712,
      "curr_month_visits": 11061260.7874712,
      "unique_users": 5280807.26720402,
      "pages_per_visit": 4.43389970885239
    },
    {
      "global_rank": 16512,
      "category_rank": 23,
      "domain": "elcats.ru",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 2898891.14235497,
      "curr_month_visits": 2898891.14235497,
      "unique_users": 722309.300841622,
      "pages_per_visit": 8.1145661357144
    },
    {
      "global_rank": 4631,
      "category_rank": 24,
      "domain": "manomano.fr",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 12185183.6940468,
      "curr_month_visits": 12185183.6940468,
      "unique_users": 6020341.39137194,
      "pages_per_visit": 3.87544478398351
    },
    {
      "global_rank": 61618,
      "category_rank": 24,
      "domain": "lubera.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 1263062.72678411,
      "curr_month_visits": 1263062.72678411,
      "unique_users": 858885.316642239,
      "pages_per_visit": 2.33500569257046
    },
    {
      "global_rank": 77311,
      "category_rank": 24,
      "domain": "polihome.gr",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 584578.704501863,
      "curr_month_visits": 584578.704501863,
      "unique_users": 271676.898912936,
      "pages_per_visit": 4.34829541934264
    },
    {
      "global_rank": 17499,
      "category_rank": 24,
      "domain": "deutschlandcard.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 2988585.83680878,
      "curr_month_visits": 2988585.83680878,
      "unique_users": 1451128.4038425,
      "pages_per_visit": 3.30071005181708
    },
    {
      "global_rank": 18543,
      "category_rank": 24,
      "domain": "hermanmiller.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2198211.01383943,
      "curr_month_visits": 2198211.01383943,
      "unique_users": 1252519.36408971,
      "pages_per_visit": 4.51959437035591
    },
    {
      "global_rank": 62397,
      "category_rank": 25,
      "domain": "longwoodgardens.org",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 516378.944655566,
      "curr_month_visits": 516378.944655566,
      "unique_users": 299210.025552181,
      "pages_per_visit": 5.10965955542898
    },
    {
      "global_rank": 21756,
      "category_rank": 25,
      "domain": "altroconsumo.it",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 3324329.95955327,
      "curr_month_visits": 3324329.95955327,
      "unique_users": 2056445.28194642,
      "pages_per_visit": 2.68633364034798
    },
    {
      "global_rank": 87175,
      "category_rank": 25,
      "domain": "roomsketcher.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 599543.835613693,
      "curr_month_visits": 599543.835613693,
      "unique_users": 367635.061354877,
      "pages_per_visit": 3.25076119615517
    },
    {
      "global_rank": 18635,
      "category_rank": 25,
      "domain": "pepperfry.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 3052697.64000872,
      "curr_month_visits": 3052697.64000872,
      "unique_users": 1625315.16527444,
      "pages_per_visit": 4.56160380611672
    },
    {
      "global_rank": 5469,
      "category_rank": 25,
      "domain": "zarahome.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 8240655.8148167,
      "curr_month_visits": 8240655.8148167,
      "unique_users": 3672049.10213063,
      "pages_per_visit": 4.90835469299387
    },
    {
      "global_rank": 18767,
      "category_rank": 26,
      "domain": "dfs.co.uk",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 3033474.68975032,
      "curr_month_visits": 3033474.68975032,
      "unique_users": 1685584.89118405,
      "pages_per_visit": 4.00141055912445
    },
    {
      "global_rank": 5545,
      "category_rank": 26,
      "domain": "but.fr",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 7784988.87524764,
      "curr_month_visits": 7784988.87524764,
      "unique_users": 3797734.48727738,
      "pages_per_visit": 4.65279740599331
    },
    {
      "global_rank": 22263,
      "category_rank": 26,
      "domain": "globus-baumarkt.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 2945582.71262167,
      "curr_month_visits": 2945582.71262167,
      "unique_users": 1539941.51457232,
      "pages_per_visit": 4.31003753448222
    },
    {
      "global_rank": 66045,
      "category_rank": 26,
      "domain": "semena74.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 576875.150040461,
      "curr_month_visits": 576875.150040461,
      "unique_users": 252150.22901663,
      "pages_per_visit": 7.22841974955597
    },
    {
      "global_rank": 88691,
      "category_rank": 26,
      "domain": "kajariaceramics.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 499269.880487615,
      "curr_month_visits": 499269.880487615,
      "unique_users": 305310.904322777,
      "pages_per_visit": 5.94344048881313
    },
    {
      "global_rank": 22320,
      "category_rank": 27,
      "domain": "pissedconsumer.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 3431177.83104811,
      "curr_month_visits": 3431177.83104811,
      "unique_users": 2622428.53109676,
      "pages_per_visit": 2.14216054467864
    },
    {
      "global_rank": 19120,
      "category_rank": 27,
      "domain": "dispatchtrack.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 3185721.46756641,
      "curr_month_visits": 3185721.46756641,
      "unique_users": 1161064.12527886,
      "pages_per_visit": 5.54674740776023
    },
    {
      "global_rank": 98469,
      "category_rank": 27,
      "domain": "alessi.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 356517.310465328,
      "curr_month_visits": 356517.310465328,
      "unique_users": 203181.076035812,
      "pages_per_visit": 4.229268186572
    },
    {
      "global_rank": 67143,
      "category_rank": 27,
      "domain": "plantnet.org",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 1045078.99315083,
      "curr_month_visits": 1045078.99315083,
      "unique_users": 584725.289437115,
      "pages_per_visit": 1.86172297989614
    },
    {
      "global_rank": 5638,
      "category_rank": 27,
      "domain": "bhg.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 14534358.3461796,
      "curr_month_visits": 14534358.3461796,
      "unique_users": 8748208.61395922,
      "pages_per_visit": 2.26177771569399
    },
    {
      "global_rank": 74160,
      "category_rank": 28,
      "domain": "botanichka.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 1177494.09538282,
      "curr_month_visits": 1177494.09538282,
      "unique_users": 776429.796334269,
      "pages_per_visit": 1.50873424034211
    },
    {
      "global_rank": 19242,
      "category_rank": 28,
      "domain": "birchlane.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2558823.74585067,
      "curr_month_visits": 2558823.74585067,
      "unique_users": 1467278.1199429,
      "pages_per_visit": 3.85410419947231
    },
    {
      "global_rank": 22328,
      "category_rank": 28,
      "domain": "kainos.lt",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 2565603.85085039,
      "curr_month_visits": 2565603.85085039,
      "unique_users": 928976.677614492,
      "pages_per_visit": 3.17210438723329
    },
    {
      "global_rank": 98997,
      "category_rank": 28,
      "domain": "deco.fr",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 611814.865412731,
      "curr_month_visits": 611814.865412731,
      "unique_users": 417444.376775681,
      "pages_per_visit": 2.35848108221296
    },
    {
      "global_rank": 5706,
      "category_rank": 28,
      "domain": "dedeman.ro",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 9492058.71036315,
      "curr_month_visits": 9492058.71036315,
      "unique_users": 3256452.98800237,
      "pages_per_visit": 4.54920808943438
    },
    {
      "global_rank": 6007,
      "category_rank": 29,
      "domain": "hoff.ru",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 7762269.28374462,
      "curr_month_visits": 7762269.28374462,
      "unique_users": 3537559.78482462,
      "pages_per_visit": 6.05179194800894
    },
    {
      "global_rank": 22492,
      "category_rank": 29,
      "domain": "bestereviews.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 2544913.10497678,
      "curr_month_visits": 2544913.10497678,
      "unique_users": 1853961.24472376,
      "pages_per_visit": 1.70194741936794
    },
    {
      "global_rank": 19357,
      "category_rank": 29,
      "domain": "perigold.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2936992.211905,
      "curr_month_visits": 2936992.211905,
      "unique_users": 1604845.57393176,
      "pages_per_visit": 4.26717257528235
    },
    {
      "global_rank": 75883,
      "category_rank": 29,
      "domain": "garshinka.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 647730.113893554,
      "curr_month_visits": 647730.113893554,
      "unique_users": 326980.125797641,
      "pages_per_visit": 4.35573660776036
    },
    {
      "global_rank": 101290,
      "category_rank": 29,
      "domain": "blumart.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 402564.206133648,
      "curr_month_visits": 402564.206133648,
      "unique_users": 190811.216493379,
      "pages_per_visit": 4.37604131433388
    },
    {
      "global_rank": 22686,
      "category_rank": 30,
      "domain": "citizensadvice.org.uk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 3565616.96723788,
      "curr_month_visits": 3565616.96723788,
      "unique_users": 2342710.06822217,
      "pages_per_visit": 2.26903684587298
    },
    {
      "global_rank": 19954,
      "category_rank": 30,
      "domain": "fantasticfurniture.com.au",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2626594.44741603,
      "curr_month_visits": 2626594.44741603,
      "unique_users": 1159957.08029485,
      "pages_per_visit": 4.18800395913258
    },
    {
      "global_rank": 76475,
      "category_rank": 30,
      "domain": "baumschule-horstmann.de",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 1092793.01017783,
      "curr_month_visits": 1092793.01017783,
      "unique_users": 562132.584508982,
      "pages_per_visit": 3.65445847308785
    },
    {
      "global_rank": 102828,
      "category_rank": 30,
      "domain": "decoracaobrasil.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 543597.332629125,
      "curr_month_visits": 543597.332629125,
      "unique_users": 61253.6331591075,
      "pages_per_visit": 2.16130940715691
    },
    {
      "global_rank": 6075,
      "category_rank": 30,
      "domain": "athome.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 6192150.54307364,
      "curr_month_visits": 6192150.54307364,
      "unique_users": 3414012.70913689,
      "pages_per_visit": 5.568423118824
    },
    {
      "global_rank": 6100,
      "category_rank": 31,
      "domain": "spareroom.co.uk",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 8281942.79457237,
      "curr_month_visits": 8281942.79457237,
      "unique_users": 1855261.29414743,
      "pages_per_visit": 9.46563265564927
    },
    {
      "global_rank": 79448,
      "category_rank": 31,
      "domain": "gerbeaud.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 936396.910496232,
      "curr_month_visits": 936396.910496232,
      "unique_users": 595668.992615225,
      "pages_per_visit": 1.60646303239698
    },
    {
      "global_rank": 24167,
      "category_rank": 31,
      "domain": "bobvila.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 3911114.45949115,
      "curr_month_visits": 3911114.45949115,
      "unique_users": 2825337.23459827,
      "pages_per_visit": 1.58876363327442
    },
    {
      "global_rank": 20034,
      "category_rank": 31,
      "domain": "xxxlutz.at",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2686118.50454097,
      "curr_month_visits": 2686118.50454097,
      "unique_users": 1209531.44008477,
      "pages_per_visit": 4.10248729847729
    },
    {
      "global_rank": 103991,
      "category_rank": 31,
      "domain": "4murs.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 338694.388379175,
      "curr_month_visits": 338694.388379175,
      "unique_users": 192330.735760296,
      "pages_per_visit": 6.20646434971026
    },
    {
      "global_rank": 20428,
      "category_rank": 32,
      "domain": "homary.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2915803.26568238,
      "curr_month_visits": 2915803.26568238,
      "unique_users": 1765001.35687373,
      "pages_per_visit": 3.01785752338289
    },
    {
      "global_rank": 104130,
      "category_rank": 32,
      "domain": "centuryply.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 526120.822445241,
      "curr_month_visits": 526120.822445241,
      "unique_users": 245077.800773177,
      "pages_per_visit": 4.58889803537958
    },
    {
      "global_rank": 81169,
      "category_rank": 32,
      "domain": "santhionlineplants.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 489217.567186858,
      "curr_month_visits": 489217.567186858,
      "unique_users": 113948.142547609,
      "pages_per_visit": 8.13047453725024
    },
    {
      "global_rank": 25202,
      "category_rank": 32,
      "domain": "ivd.ru",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 3669303.83643823,
      "curr_month_visits": 3669303.83643823,
      "unique_users": 2254629.47024024,
      "pages_per_visit": 1.52833593652502
    },
    {
      "global_rank": 6136,
      "category_rank": 32,
      "domain": "toolstation.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 9723686.32209633,
      "curr_month_visits": 9723686.32209633,
      "unique_users": 4109777.05443297,
      "pages_per_visit": 4.4589677162946
    },
    {
      "global_rank": 104620,
      "category_rank": 33,
      "domain": "grahambrown.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 478934.27343288,
      "curr_month_visits": 478934.27343288,
      "unique_users": 290244.378708401,
      "pages_per_visit": 4.05168895015289
    },
    {
      "global_rank": 25552,
      "category_rank": 33,
      "domain": "consumeraffairs.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 2482034.22089966,
      "curr_month_visits": 2482034.22089966,
      "unique_users": 1905062.59836549,
      "pages_per_visit": 2.73369580721973
    },
    {
      "global_rank": 6331,
      "category_rank": 33,
      "domain": "build.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 7408346.41655298,
      "curr_month_visits": 7408346.41655298,
      "unique_users": 4053276.70660553,
      "pages_per_visit": 7.45257288199897
    },
    {
      "global_rank": 81258,
      "category_rank": 33,
      "domain": "agro-market24.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 772475.944628305,
      "curr_month_visits": 772475.944628305,
      "unique_users": 420105.447725072,
      "pages_per_visit": 3.73649842837433
    },
    {
      "global_rank": 20791,
      "category_rank": 33,
      "domain": "westwing.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2616644.79988351,
      "curr_month_visits": 2616644.79988351,
      "unique_users": 1196366.0744603,
      "pages_per_visit": 3.89521538158986
    },
    {
      "global_rank": 26455,
      "category_rank": 34,
      "domain": "ocu.org",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 3283357.5336799,
      "curr_month_visits": 3283357.5336799,
      "unique_users": 1983891.0050935,
      "pages_per_visit": 2.28696964465165
    },
    {
      "global_rank": 6339,
      "category_rank": 34,
      "domain": "buyersguide.org",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 8366834.93430964,
      "curr_month_visits": 8366834.93430964,
      "unique_users": 6605110.08987444,
      "pages_per_visit": 2.05239218584561
    },
    {
      "global_rank": 81769,
      "category_rank": 34,
      "domain": "theseedcollection.com.au",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 397422.384426091,
      "curr_month_visits": 397422.384426091,
      "unique_users": 171396.219506368,
      "pages_per_visit": 9.25394306659003
    },
    {
      "global_rank": 20886,
      "category_rank": 34,
      "domain": "divan.ru",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2300288.04577001,
      "curr_month_visits": 2300288.04577001,
      "unique_users": 1220943.40063997,
      "pages_per_visit": 4.28824221636607
    },
    {
      "global_rank": 105501,
      "category_rank": 34,
      "domain": "limia.jp",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 959799.468571944,
      "curr_month_visits": 959799.468571944,
      "unique_users": 545373.685415101,
      "pages_per_visit": 1.21717171448456
    },
    {
      "global_rank": 20966,
      "category_rank": 35,
      "domain": "wakefit.co",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 3432228.74473902,
      "curr_month_visits": 3432228.74473902,
      "unique_users": 1746588.79981388,
      "pages_per_visit": 4.18145584778031
    },
    {
      "global_rank": 107128,
      "category_rank": 35,
      "domain": "framebridge.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 257138.776480976,
      "curr_month_visits": 257138.776480976,
      "unique_users": 148978.612451573,
      "pages_per_visit": 7.02098605850209
    },
    {
      "global_rank": 26956,
      "category_rank": 35,
      "domain": "lidl.dk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1279807.28785702,
      "curr_month_visits": 1279807.28785702,
      "unique_users": 496991.845427975,
      "pages_per_visit": 9.32274205748752
    },
    {
      "global_rank": 82144,
      "category_rank": 35,
      "domain": "lovegreen.net",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 910893.545414388,
      "curr_month_visits": 910893.545414388,
      "unique_users": 580980.736684747,
      "pages_per_visit": 1.51049593604379
    },
    {
      "global_rank": 6441,
      "category_rank": 35,
      "domain": "leroymerlin.pl",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 9007293.61738305,
      "curr_month_visits": 9007293.61738305,
      "unique_users": 4038042.52668884,
      "pages_per_visit": 4.86871982696602
    },
    {
      "global_rank": 85569,
      "category_rank": 36,
      "domain": "australianplantsonline.com.au",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 447935.624435751,
      "curr_month_visits": 447935.624435751,
      "unique_users": 211645.572627414,
      "pages_per_visit": 4.5140285128432
    },
    {
      "global_rank": 6565,
      "category_rank": 36,
      "domain": "conforama.fr",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 7046641.55559969,
      "curr_month_visits": 7046641.55559969,
      "unique_users": 3456607.24101773,
      "pages_per_visit": 4.72444078247467
    },
    {
      "global_rank": 28542,
      "category_rank": 36,
      "domain": "homegoods.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 2313938.75455609,
      "curr_month_visits": 2313938.75455609,
      "unique_users": 1935290.10586438,
      "pages_per_visit": 2.14044482932235
    },
    {
      "global_rank": 4577,
      "category_rank": 36,
      "domain": "thespruce.com",
      "category": "Home_and_Garden",
      "avg_month_visits": 19025936.713667,
      "curr_month_visits": 19025936.713667,
      "unique_users": 12821232.8681187,
      "pages_per_visit": 1.60751132954001
    },
    {
      "global_rank": 21057,
      "category_rank": 36,
      "domain": "rentacenter.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2221628.41581398,
      "curr_month_visits": 2221628.41581398,
      "unique_users": 1050983.45128435,
      "pages_per_visit": 5.84973073052635
    },
    {
      "global_rank": 107732,
      "category_rank": 36,
      "domain": "caleffionline.it",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 319558.573398551,
      "curr_month_visits": 319558.573398551,
      "unique_users": 206386.005209443,
      "pages_per_visit": 4.34111844832106
    },
    {
      "global_rank": 21533,
      "category_rank": 37,
      "domain": "roller.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2562848.61759039,
      "curr_month_visits": 2562848.61759039,
      "unique_users": 1403019.06309447,
      "pages_per_visit": 3.61922573552737
    },
    {
      "global_rank": 87538,
      "category_rank": 37,
      "domain": "urvann.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 507975.999021944,
      "curr_month_visits": 507975.999021944,
      "unique_users": 203774.082883288,
      "pages_per_visit": 4.22326685113624
    },
    {
      "global_rank": 109447,
      "category_rank": 37,
      "domain": "floorplancreator.net",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 503381.444568348,
      "curr_month_visits": 503381.444568348,
      "unique_users": 238553.629271605,
      "pages_per_visit": 2.50112024373937
    },
    {
      "global_rank": 28553,
      "category_rank": 37,
      "domain": "diynot.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 2330143.3977021,
      "curr_month_visits": 2330143.3977021,
      "unique_users": 1494468.83209094,
      "pages_per_visit": 2.05758060678207
    },
    {
      "global_rank": 6570,
      "category_rank": 37,
      "domain": "lixil.co.jp",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 8865071.75608759,
      "curr_month_visits": 8865071.75608759,
      "unique_users": 3033902.00712403,
      "pages_per_visit": 4.9965395155656
    },
    {
      "global_rank": 6773,
      "category_rank": 38,
      "domain": "aquareader.net",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 8798141.05427377,
      "curr_month_visits": 8798141.05427377,
      "unique_users": 611133.564862582,
      "pages_per_visit": 8.63414133964233
    },
    {
      "global_rank": 88226,
      "category_rank": 38,
      "domain": "blomsterlandet.se",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 883448.911532979,
      "curr_month_visits": 883448.911532979,
      "unique_users": 433652.751354092,
      "pages_per_visit": 2.63926802189769
    },
    {
      "global_rank": 28946,
      "category_rank": 38,
      "domain": "thisoldhouse.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 3136775.50254353,
      "curr_month_visits": 3136775.50254353,
      "unique_users": 2271424.23046307,
      "pages_per_visit": 1.54130753794914
    },
    {
      "global_rank": 21565,
      "category_rank": 38,
      "domain": "nectarsleep.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2839366.79640379,
      "curr_month_visits": 2839366.79640379,
      "unique_users": 1894894.47987183,
      "pages_per_visit": 1.94264367203683
    },
    {
      "global_rank": 117146,
      "category_rank": 38,
      "domain": "velleahome.gr",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 329010.138061496,
      "curr_month_visits": 329010.138061496,
      "unique_users": 89382.2853456887,
      "pages_per_visit": 6.66727489246986
    },
    {
      "global_rank": 89453,
      "category_rank": 39,
      "domain": "willemsefrance.fr",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 602399.253170603,
      "curr_month_visits": 602399.253170603,
      "unique_users": 379439.770433896,
      "pages_per_visit": 3.50938758542129
    },
    {
      "global_rank": 117266,
      "category_rank": 39,
      "domain": "houzz.com.au",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 429598.934392675,
      "curr_month_visits": 429598.934392675,
      "unique_users": 251448.891780756,
      "pages_per_visit": 4.26213128144659
    },
    {
      "global_rank": 29581,
      "category_rank": 39,
      "domain": "screwfix.ie",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1605884.05955082,
      "curr_month_visits": 1605884.05955082,
      "unique_users": 662538.36720993,
      "pages_per_visit": 5.49776508440202
    },
    {
      "global_rank": 7536,
      "category_rank": 39,
      "domain": "castorama.fr",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 7672531.59129579,
      "curr_month_visits": 7672531.59129579,
      "unique_users": 3796192.17428115,
      "pages_per_visit": 3.75013583621553
    },
    {
      "global_rank": 21945,
      "category_rank": 39,
      "domain": "la-z-boy.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2052722.08343403,
      "curr_month_visits": 2052722.08343403,
      "unique_users": 1236378.85342089,
      "pages_per_visit": 4.16982979601892
    },
    {
      "global_rank": 22219,
      "category_rank": 40,
      "domain": "americanfreight.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2126772.67282014,
      "curr_month_visits": 2126772.67282014,
      "unique_users": 1282455.91382649,
      "pages_per_visit": 3.90466910217889
    },
    {
      "global_rank": 7583,
      "category_rank": 40,
      "domain": "britishgas.co.uk",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 6250300.06654199,
      "curr_month_visits": 6250300.06654199,
      "unique_users": 2789263.78352755,
      "pages_per_visit": 7.12124977157893
    },
    {
      "global_rank": 90058,
      "category_rank": 40,
      "domain": "gardena.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 734767.190072294,
      "curr_month_visits": 734767.190072294,
      "unique_users": 441237.282973465,
      "pages_per_visit": 2.9394729002466
    },
    {
      "global_rank": 118606,
      "category_rank": 40,
      "domain": "roomtodo.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 450002.628239844,
      "curr_month_visits": 450002.628239844,
      "unique_users": 214814.588915409,
      "pages_per_visit": 2.65462927411141
    },
    {
      "global_rank": 4754,
      "category_rank": 40,
      "domain": "williams-sonoma.com",
      "category": "Home_and_Garden",
      "avg_month_visits": 9463066.93973716,
      "curr_month_visits": 9463066.93973716,
      "unique_users": 5522246.2199399,
      "pages_per_visit": 3.39175258764796
    },
    {
      "global_rank": 30267,
      "category_rank": 40,
      "domain": "medizinfuchs.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1659415.35546655,
      "curr_month_visits": 1659415.35546655,
      "unique_users": 1030720.52375789,
      "pages_per_visit": 4.93492947201578
    },
    {
      "global_rank": 119197,
      "category_rank": 41,
      "domain": "hindware.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 315108.868453135,
      "curr_month_visits": 315108.868453135,
      "unique_users": 140049.320484618,
      "pages_per_visit": 8.93422642871851
    },
    {
      "global_rank": 30788,
      "category_rank": 41,
      "domain": "map.krak.dk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1158025.56301216,
      "curr_month_visits": 1158025.56301216,
      "unique_users": 572497.671559592,
      "pages_per_visit": 12.1052701954696
    },
    {
      "global_rank": 22510,
      "category_rank": 41,
      "domain": "mobly.com.br",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2245061.21732914,
      "curr_month_visits": 2245061.21732914,
      "unique_users": 1207561.17499476,
      "pages_per_visit": 6.23750625605215
    },
    {
      "global_rank": 90825,
      "category_rank": 41,
      "domain": "botanic.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 421934.046420254,
      "curr_month_visits": 421934.046420254,
      "unique_users": 263463.712763929,
      "pages_per_visit": 3.71632460223696
    },
    {
      "global_rank": 7947,
      "category_rank": 41,
      "domain": "paragonrels.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 10115447.38305,
      "curr_month_visits": 10115447.38305,
      "unique_users": 1398214.94737252,
      "pages_per_visit": 3.69313530916758
    },
    {
      "global_rank": 120717,
      "category_rank": 42,
      "domain": "roomstyler.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 427790.987194742,
      "curr_month_visits": 427790.987194742,
      "unique_users": 231850.775706558,
      "pages_per_visit": 2.57871690704146
    },
    {
      "global_rank": 31036,
      "category_rank": 42,
      "domain": "byggahus.se",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 2446800.80347269,
      "curr_month_visits": 2446800.80347269,
      "unique_users": 1119843.89339238,
      "pages_per_visit": 2.39188003814098
    },
    {
      "global_rank": 92579,
      "category_rank": 42,
      "domain": "arborday.org",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 630382.274209105,
      "curr_month_visits": 630382.274209105,
      "unique_users": 424630.331229534,
      "pages_per_visit": 3.86150772880637
    },
    {
      "global_rank": 23691,
      "category_rank": 42,
      "domain": "nonton.ru",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2150471.31323246,
      "curr_month_visits": 2150471.31323246,
      "unique_users": 1091898.97341407,
      "pages_per_visit": 5.2045853937541
    },
    {
      "global_rank": 7986,
      "category_rank": 42,
      "domain": "uncommongoods.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3582070.7074119,
      "curr_month_visits": 3582070.7074119,
      "unique_users": 2269039.96414353,
      "pages_per_visit": 4.15011965988074
    },
    {
      "global_rank": 121633,
      "category_rank": 43,
      "domain": "homelane.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 606416.943615545,
      "curr_month_visits": 606416.943615545,
      "unique_users": 406333.203049249,
      "pages_per_visit": 2.41952652643057
    },
    {
      "global_rank": 32073,
      "category_rank": 43,
      "domain": "hagebau.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1777002.61665189,
      "curr_month_visits": 1777002.61665189,
      "unique_users": 1162727.22047305,
      "pages_per_visit": 3.95776533281782
    },
    {
      "global_rank": 23831,
      "category_rank": 43,
      "domain": "daals.co.uk",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2051496.40296791,
      "curr_month_visits": 2051496.40296791,
      "unique_users": 1043412.94372075,
      "pages_per_visit": 5.36622635464797
    },
    {
      "global_rank": 8189,
      "category_rank": 43,
      "domain": "rusta.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 6380094.93910062,
      "curr_month_visits": 6380094.93910062,
      "unique_users": 2871586.23099013,
      "pages_per_visit": 3.81532182076558
    },
    {
      "global_rank": 93099,
      "category_rank": 43,
      "domain": "missouribotanicalgarden.org",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 615577.233841244,
      "curr_month_visits": 615577.233841244,
      "unique_users": 379930.801929453,
      "pages_per_visit": 2.55861733568048
    },
    {
      "global_rank": 94232,
      "category_rank": 44,
      "domain": "hitohana.tokyo",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 625958.58959,
      "curr_month_visits": 625958.58959,
      "unique_users": 432782.278178472,
      "pages_per_visit": 2.37895763188859
    },
    {
      "global_rank": 8217,
      "category_rank": 44,
      "domain": "wickes.co.uk",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 7501039.15286006,
      "curr_month_visits": 7501039.15286006,
      "unique_users": 3553230.60061845,
      "pages_per_visit": 4.45018859280202
    },
    {
      "global_rank": 32370,
      "category_rank": 44,
      "domain": "hornbach.ro",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 2010788.50310876,
      "curr_month_visits": 2010788.50310876,
      "unique_users": 965461.219946868,
      "pages_per_visit": 3.47521691132038
    },
    {
      "global_rank": 23921,
      "category_rank": 44,
      "domain": "obramat.es",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2623352.77253121,
      "curr_month_visits": 2623352.77253121,
      "unique_users": 1085145.04985774,
      "pages_per_visit": 4.21843000438334
    },
    {
      "global_rank": 126031,
      "category_rank": 44,
      "domain": "ruheindia.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 273275.715702695,
      "curr_month_visits": 273275.715702695,
      "unique_users": 160164.161951444,
      "pages_per_visit": 3.80847445954125
    },
    {
      "global_rank": 24636,
      "category_rank": 45,
      "domain": "homecentre.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1983656.47922935,
      "curr_month_visits": 1983656.47922935,
      "unique_users": 1000458.1008785,
      "pages_per_visit": 4.92882586183205
    },
    {
      "global_rank": 96392,
      "category_rank": 45,
      "domain": "infojardin.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 723661.419847094,
      "curr_month_visits": 723661.419847094,
      "unique_users": 469495.950688238,
      "pages_per_visit": 2.01595999597747
    },
    {
      "global_rank": 33085,
      "category_rank": 45,
      "domain": "nyheder24.dk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 2359335.5521437,
      "curr_month_visits": 2359335.5521437,
      "unique_users": 619955.078338742,
      "pages_per_visit": 2.07482219463472
    },
    {
      "global_rank": 8499,
      "category_rank": 45,
      "domain": "flooranddecor.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 6399990.61039601,
      "curr_month_visits": 6399990.61039601,
      "unique_users": 3140344.83261215,
      "pages_per_visit": 5.34292289188997
    },
    {
      "global_rank": 126059,
      "category_rank": 45,
      "domain": "interiordecoratingcolors.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 473204.21479374,
      "curr_month_visits": 473204.21479374,
      "unique_users": 319567.618321631,
      "pages_per_visit": 6.66848854370037
    },
    {
      "global_rank": 8583,
      "category_rank": 46,
      "domain": "ao.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 5494613.2022569,
      "curr_month_visits": 5494613.2022569,
      "unique_users": 2762413.2176039,
      "pages_per_visit": 5.12500493492831
    },
    {
      "global_rank": 129562,
      "category_rank": 46,
      "domain": "plantasdecasas.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 367610.958986411,
      "curr_month_visits": 367610.958986411,
      "unique_users": 194980.205383659,
      "pages_per_visit": 2.24563517125772
    },
    {
      "global_rank": 97853,
      "category_rank": 46,
      "domain": "semena-zakaz.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 304874.421703013,
      "curr_month_visits": 304874.421703013,
      "unique_users": 167004.43259893,
      "pages_per_visit": 8.44311188310363
    },
    {
      "global_rank": 24755,
      "category_rank": 46,
      "domain": "sleepnumber.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2246649.72992756,
      "curr_month_visits": 2246649.72992756,
      "unique_users": 1494307.96621166,
      "pages_per_visit": 3.03022434831571
    },
    {
      "global_rank": 33872,
      "category_rank": 46,
      "domain": "akcniceny.cz",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1254862.969519,
      "curr_month_visits": 1254862.969519,
      "unique_users": 567303.931402275,
      "pages_per_visit": 5.27060088645588
    },
    {
      "global_rank": 6012,
      "category_rank": 47,
      "domain": "realsimple.com",
      "category": "Home_and_Garden",
      "avg_month_visits": 12982272.3610004,
      "curr_month_visits": 12982272.3610004,
      "unique_users": 8554775.49127782,
      "pages_per_visit": 1.77060713504632
    },
    {
      "global_rank": 97941,
      "category_rank": 47,
      "domain": "semena.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 372986.09917758,
      "curr_month_visits": 372986.09917758,
      "unique_users": 202104.424112573,
      "pages_per_visit": 5.21991817878861
    },
    {
      "global_rank": 8714,
      "category_rank": 47,
      "domain": "overstock.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 4776811.51477534,
      "curr_month_visits": 4776811.51477534,
      "unique_users": 2950142.07191365,
      "pages_per_visit": 4.65778623554684
    },
    {
      "global_rank": 24987,
      "category_rank": 47,
      "domain": "arhaus.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1670324.00812171,
      "curr_month_visits": 1670324.00812171,
      "unique_users": 800703.31315593,
      "pages_per_visit": 7.01998041418797
    },
    {
      "global_rank": 133599,
      "category_rank": 47,
      "domain": "fabricut.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 201614.24568989,
      "curr_month_visits": 201614.24568989,
      "unique_users": 79601.9150771596,
      "pages_per_visit": 6.9060566776421
    },
    {
      "global_rank": 35799,
      "category_rank": 47,
      "domain": "teltarif.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 2100331.61388421,
      "curr_month_visits": 2100331.61388421,
      "unique_users": 1069810.46411389,
      "pages_per_visit": 2.03527039638058
    },
    {
      "global_rank": 9239,
      "category_rank": 48,
      "domain": "sodimac.cl",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 5268280.47373795,
      "curr_month_visits": 5268280.47373795,
      "unique_users": 2302212.33758844,
      "pages_per_visit": 6.42985255149224
    },
    {
      "global_rank": 137014,
      "category_rank": 48,
      "domain": "magicdecor.in",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 418295.259280895,
      "curr_month_visits": 418295.259280895,
      "unique_users": 216711.656721269,
      "pages_per_visit": 3.0924259744639
    },
    {
      "global_rank": 38242,
      "category_rank": 48,
      "domain": "doityourself.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 2272012.32730683,
      "curr_month_visits": 2272012.32730683,
      "unique_users": 1793161.94041179,
      "pages_per_visit": 1.45658634591953
    },
    {
      "global_rank": 24988,
      "category_rank": 48,
      "domain": "rh.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2190383.26074768,
      "curr_month_visits": 2190383.26074768,
      "unique_users": 1171152.7206801,
      "pages_per_visit": 4.28999830520963
    },
    {
      "global_rank": 98588,
      "category_rank": 48,
      "domain": "ruralsprout.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 598960.210143027,
      "curr_month_visits": 598960.210143027,
      "unique_users": 347999.704552394,
      "pages_per_visit": 1.41219436594698
    },
    {
      "global_rank": 101248,
      "category_rank": 49,
      "domain": "games.chez-vous.info",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 500164.934046681,
      "curr_month_visits": 500164.934046681,
      "unique_users": 81818.1987905119,
      "pages_per_visit": 1.92425983075972
    },
    {
      "global_rank": 25145,
      "category_rank": 49,
      "domain": "lovesac.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1921396.86703734,
      "curr_month_visits": 1921396.86703734,
      "unique_users": 1297292.19339583,
      "pages_per_visit": 3.15502033783893
    },
    {
      "global_rank": 9359,
      "category_rank": 49,
      "domain": "gamma.nl",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 5891472.36227609,
      "curr_month_visits": 5891472.36227609,
      "unique_users": 2569659.62702952,
      "pages_per_visit": 4.41054960008351
    },
    {
      "global_rank": 39693,
      "category_rank": 49,
      "domain": "telefonino.net",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1738016.07609141,
      "curr_month_visits": 1738016.07609141,
      "unique_users": 1110583.67875832,
      "pages_per_visit": 1.59554736537104
    },
    {
      "global_rank": 138221,
      "category_rank": 49,
      "domain": "faberindia.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 370502.38805041,
      "curr_month_visits": 370502.38805041,
      "unique_users": 195775.13378276,
      "pages_per_visit": 3.5103299207203
    },
    {
      "global_rank": 25540,
      "category_rank": 50,
      "domain": "habitat.co.uk",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2176652.31397954,
      "curr_month_visits": 2176652.31397954,
      "unique_users": 1359048.73132242,
      "pages_per_visit": 4.05886791578661
    },
    {
      "global_rank": 101722,
      "category_rank": 50,
      "domain": "nurserylive.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 575993.56755757,
      "curr_month_visits": 575993.56755757,
      "unique_users": 350854.572632465,
      "pages_per_visit": 2.92194847992597
    },
    {
      "global_rank": 39831,
      "category_rank": 50,
      "domain": "mr-bricolage.fr",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1272828.0948914,
      "curr_month_visits": 1272828.0948914,
      "unique_users": 783156.971036947,
      "pages_per_visit": 4.46223416875422
    },
    {
      "global_rank": 138271,
      "category_rank": 50,
      "domain": "houzz.in",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 243786.490719381,
      "curr_month_visits": 243786.490719381,
      "unique_users": 151795.143583734,
      "pages_per_visit": 4.80075634772606
    },
    {
      "global_rank": 9399,
      "category_rank": 50,
      "domain": "praxis.nl",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 5756258.76590521,
      "curr_month_visits": 5756258.76590521,
      "unique_users": 2580515.93470228,
      "pages_per_visit": 4.30415696482522
    },
    {
      "global_rank": 25686,
      "category_rank": 51,
      "domain": "leons.ca",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1568907.82710453,
      "curr_month_visits": 1568907.82710453,
      "unique_users": 853105.337670895,
      "pages_per_visit": 5.9228830801445
    },
    {
      "global_rank": 107906,
      "category_rank": 51,
      "domain": "garden.org",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 763326.255729464,
      "curr_month_visits": 763326.255729464,
      "unique_users": 445776.661972087,
      "pages_per_visit": 2.45105506265703
    },
    {
      "global_rank": 139086,
      "category_rank": 51,
      "domain": "designcafe.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 413166.259299736,
      "curr_month_visits": 413166.259299736,
      "unique_users": 239066.959070207,
      "pages_per_visit": 2.13348715927581
    },
    {
      "global_rank": 9480,
      "category_rank": 51,
      "domain": "leroymerlin.pt",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 5110522.74119131,
      "curr_month_visits": 5110522.74119131,
      "unique_users": 2000652.3105601,
      "pages_per_visit": 5.85008109917281
    },
    {
      "global_rank": 40084,
      "category_rank": 51,
      "domain": "proff.dk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1582168.01647434,
      "curr_month_visits": 1582168.01647434,
      "unique_users": 736916.07807225,
      "pages_per_visit": 3.12967720147277
    },
    {
      "global_rank": 108128,
      "category_rank": 52,
      "domain": "rosebook.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 382332.558886111,
      "curr_month_visits": 382332.558886111,
      "unique_users": 134414.765260103,
      "pages_per_visit": 4.30622004385032
    },
    {
      "global_rank": 139658,
      "category_rank": 52,
      "domain": "bergerpaints.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 376960.444997371,
      "curr_month_visits": 376960.444997371,
      "unique_users": 246421.179642233,
      "pages_per_visit": 2.79173337685026
    },
    {
      "global_rank": 25966,
      "category_rank": 52,
      "domain": "roomandboard.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1676909.74983819,
      "curr_month_visits": 1676909.74983819,
      "unique_users": 905189.536256348,
      "pages_per_visit": 5.56232065173757
    },
    {
      "global_rank": 9652,
      "category_rank": 52,
      "domain": "bricodepot.fr",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 5908982.88471715,
      "curr_month_visits": 5908982.88471715,
      "unique_users": 2843445.44378228,
      "pages_per_visit": 4.69141547797603
    },
    {
      "global_rank": 40144,
      "category_rank": 52,
      "domain": "diychatroom.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 2010433.66729178,
      "curr_month_visits": 2010433.66729178,
      "unique_users": 1513893.8362122,
      "pages_per_visit": 1.56709966865837
    },
    {
      "global_rank": 143481,
      "category_rank": 53,
      "domain": "mytyles.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 265740.205397212,
      "curr_month_visits": 265740.205397212,
      "unique_users": 158286.209878594,
      "pages_per_visit": 4.84343163133401
    },
    {
      "global_rank": 26915,
      "category_rank": 53,
      "domain": "moemax.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2375612.49136621,
      "curr_month_visits": 2375612.49136621,
      "unique_users": 1337977.41885884,
      "pages_per_visit": 3.22509586694766
    },
    {
      "global_rank": 109556,
      "category_rank": 53,
      "domain": "sadyk.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 305704.91528894,
      "curr_month_visits": 305704.91528894,
      "unique_users": 119716.522476379,
      "pages_per_visit": 2.61091344316822
    },
    {
      "global_rank": 9724,
      "category_rank": 53,
      "domain": "thumbtack.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 6492976.39399061,
      "curr_month_visits": 6492976.39399061,
      "unique_users": 3692914.23504311,
      "pages_per_visit": 3.8128178801528
    },
    {
      "global_rank": 110401,
      "category_rank": 54,
      "domain": "blackfriday.expert",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 254772.578730868,
      "curr_month_visits": 254772.578730868,
      "unique_users": 179953.761829594,
      "pages_per_visit": 1.74085753870638
    },
    {
      "global_rank": 41084,
      "category_rank": 54,
      "domain": "midrag.co.il",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1653952.99024826,
      "curr_month_visits": 1653952.99024826,
      "unique_users": 856247.264442805,
      "pages_per_visit": 2.45636246776082
    },
    {
      "global_rank": 28424,
      "category_rank": 54,
      "domain": "freedom.com.au",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1722754.6194732,
      "curr_month_visits": 1722754.6194732,
      "unique_users": 763314.566196497,
      "pages_per_visit": 4.14408443720549
    },
    {
      "global_rank": 9907,
      "category_rank": 54,
      "domain": "homesandgardens.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 9291361.35396242,
      "curr_month_visits": 9291361.35396242,
      "unique_users": 5558787.61657281,
      "pages_per_visit": 1.58918304361083
    },
    {
      "global_rank": 144165,
      "category_rank": 54,
      "domain": "orientbell.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 402173.451454338,
      "curr_month_visits": 402173.451454338,
      "unique_users": 270696.361993233,
      "pages_per_visit": 2.24900426986493
    },
    {
      "global_rank": 29139,
      "category_rank": 55,
      "domain": "moebel.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 2298712.51322222,
      "curr_month_visits": 2298712.51322222,
      "unique_users": 1543111.34022487,
      "pages_per_visit": 2.31037526517378
    },
    {
      "global_rank": 111219,
      "category_rank": 55,
      "domain": "cineblog01.tips",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 454731.304691268,
      "curr_month_visits": 454731.304691268,
      "unique_users": 102544.343378957,
      "pages_per_visit": 3.13292932588199
    },
    {
      "global_rank": 151572,
      "category_rank": 55,
      "domain": "planyourroom.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 342398.548487173,
      "curr_month_visits": 342398.548487173,
      "unique_users": 196928.580658689,
      "pages_per_visit": 1.88154332084354
    },
    {
      "global_rank": 10181,
      "category_rank": 55,
      "domain": "hornbach.nl",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 5340148.41767166,
      "curr_month_visits": 5340148.41767166,
      "unique_users": 2117721.81481283,
      "pages_per_visit": 5.0264999558976
    },
    {
      "global_rank": 43163,
      "category_rank": 55,
      "domain": "mastergrad.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1861563.73400562,
      "curr_month_visits": 1861563.73400562,
      "unique_users": 1182378.08179167,
      "pages_per_visit": 1.72152337651572
    },
    {
      "global_rank": 43180,
      "category_rank": 56,
      "domain": "backyardchickens.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1629921.53729788,
      "curr_month_visits": 1629921.53729788,
      "unique_users": 777706.604223009,
      "pages_per_visit": 2.95834145074814
    },
    {
      "global_rank": 29393,
      "category_rank": 56,
      "domain": "amartfurniture.com.au",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1709566.64545427,
      "curr_month_visits": 1709566.64545427,
      "unique_users": 844198.434692905,
      "pages_per_visit": 4.50935478143828
    },
    {
      "global_rank": 111591,
      "category_rank": 56,
      "domain": "engei.net",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 465993.287563103,
      "curr_month_visits": 465993.287563103,
      "unique_users": 255765.246190043,
      "pages_per_visit": 3.03938959778025
    },
    {
      "global_rank": 151844,
      "category_rank": 56,
      "domain": "greenice.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 250208.417311552,
      "curr_month_visits": 250208.417311552,
      "unique_users": 134732.43579661,
      "pages_per_visit": 4.40448494409471
    },
    {
      "global_rank": 10683,
      "category_rank": 56,
      "domain": "gls-group.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 7721683.73258305,
      "curr_month_visits": 7721683.73258305,
      "unique_users": 3237590.53109202,
      "pages_per_visit": 1.84487592802754
    },
    {
      "global_rank": 152235,
      "category_rank": 57,
      "domain": "deavita.fr",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 403558.117760117,
      "curr_month_visits": 403558.117760117,
      "unique_users": 294037.711176945,
      "pages_per_visit": 1.78339098488637
    },
    {
      "global_rank": 114118,
      "category_rank": 57,
      "domain": "birdsandblooms.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 568276.437153979,
      "curr_month_visits": 568276.437153979,
      "unique_users": 345447.962587858,
      "pages_per_visit": 1.82105227875296
    },
    {
      "global_rank": 10713,
      "category_rank": 57,
      "domain": "brw.pl",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 4527675.62550367,
      "curr_month_visits": 4527675.62550367,
      "unique_users": 1928267.19501168,
      "pages_per_visit": 4.58758518197495
    },
    {
      "global_rank": 29407,
      "category_rank": 57,
      "domain": "segmueller.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1500094.97893906,
      "curr_month_visits": 1500094.97893906,
      "unique_users": 892995.590036167,
      "pages_per_visit": 4.77110926324412
    },
    {
      "global_rank": 43518,
      "category_rank": 57,
      "domain": "foodtalkdaily.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1631159.92787357,
      "curr_month_visits": 1631159.92787357,
      "unique_users": 649648.737558543,
      "pages_per_visit": 2.47889040421608
    },
    {
      "global_rank": 116266,
      "category_rank": 58,
      "domain": "verdecora.es",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 509791.113035338,
      "curr_month_visits": 509791.113035338,
      "unique_users": 325555.55993283,
      "pages_per_visit": 2.55546270839371
    },
    {
      "global_rank": 32898,
      "category_rank": 58,
      "domain": "oakfurnitureland.co.uk",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1795079.60401263,
      "curr_month_visits": 1795079.60401263,
      "unique_users": 941457.100014886,
      "pages_per_visit": 3.23367170021941
    },
    {
      "global_rank": 10731,
      "category_rank": 58,
      "domain": "deere.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 4539290.44270182,
      "curr_month_visits": 4539290.44270182,
      "unique_users": 1831313.44173712,
      "pages_per_visit": 8.07681167832134
    },
    {
      "global_rank": 45105,
      "category_rank": 58,
      "domain": "onelog.ch",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1038450.53538242,
      "curr_month_visits": 1038450.53538242,
      "unique_users": 608180.658969361,
      "pages_per_visit": 3.40092503589635
    },
    {
      "global_rank": 154564,
      "category_rank": 58,
      "domain": "makemyhouse.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 255528.032819795,
      "curr_month_visits": 255528.032819795,
      "unique_users": 163198.394980405,
      "pages_per_visit": 2.9326333354786
    },
    {
      "global_rank": 45740,
      "category_rank": 59,
      "domain": "etilbudsavis.dk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 589644.447357485,
      "curr_month_visits": 589644.447357485,
      "unique_users": 245327.678143147,
      "pages_per_visit": 14.6810265287332
    },
    {
      "global_rank": 117520,
      "category_rank": 59,
      "domain": "jardiner-malin.fr",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 652380.980221294,
      "curr_month_visits": 652380.980221294,
      "unique_users": 416664.481885468,
      "pages_per_visit": 1.55314174678528
    },
    {
      "global_rank": 156930,
      "category_rank": 59,
      "domain": "tuacasa.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 819938.960478039,
      "curr_month_visits": 819938.960478039,
      "unique_users": 628875.297974494,
      "pages_per_visit": 1.39067419538082
    },
    {
      "global_rank": 10773,
      "category_rank": 59,
      "domain": "jysk.se",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 4978556.39643672,
      "curr_month_visits": 4978556.39643672,
      "unique_users": 2019678.8653409,
      "pages_per_visit": 4.59720507372908
    },
    {
      "global_rank": 33685,
      "category_rank": 59,
      "domain": "low-ya.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1807873.37482249,
      "curr_month_visits": 1807873.37482249,
      "unique_users": 935075.399286512,
      "pages_per_visit": 2.81461393832625
    },
    {
      "global_rank": 121781,
      "category_rank": 60,
      "domain": "poradnikogrodniczy.pl",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 699064.040223939,
      "curr_month_visits": 699064.040223939,
      "unique_users": 441641.078614099,
      "pages_per_visit": 1.64200869727179
    },
    {
      "global_rank": 165829,
      "category_rank": 60,
      "domain": "nerolac.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 439545.179164463,
      "curr_month_visits": 439545.179164463,
      "unique_users": 273478.833285674,
      "pages_per_visit": 2.00970533812337
    },
    {
      "global_rank": 33698,
      "category_rank": 60,
      "domain": "madesa.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1405653.25019374,
      "curr_month_visits": 1405653.25019374,
      "unique_users": 723132.927095627,
      "pages_per_visit": 3.87890806303822
    },
    {
      "global_rank": 46293,
      "category_rank": 60,
      "domain": "bauhaus.cz",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1144168.38946219,
      "curr_month_visits": 1144168.38946219,
      "unique_users": 593865.290253822,
      "pages_per_visit": 4.26927805019312
    },
    {
      "global_rank": 10949,
      "category_rank": 60,
      "domain": "toom.de",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 6723750.24023534,
      "curr_month_visits": 6723750.24023534,
      "unique_users": 3518472.2882986,
      "pages_per_visit": 3.44066991961893
    },
    {
      "global_rank": 123060,
      "category_rank": 61,
      "domain": "gardendesign.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 679903.817274675,
      "curr_month_visits": 679903.817274675,
      "unique_users": 466587.552816945,
      "pages_per_visit": 1.67408053122319
    },
    {
      "global_rank": 33856,
      "category_rank": 61,
      "domain": "valuecityfurniture.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1469510.56260264,
      "curr_month_visits": 1469510.56260264,
      "unique_users": 813877.038521098,
      "pages_per_visit": 3.18397850692299
    },
    {
      "global_rank": 170680,
      "category_rank": 61,
      "domain": "kaff.in",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 254580.815492117,
      "curr_month_visits": 254580.815492117,
      "unique_users": 94397.0438140166,
      "pages_per_visit": 4.48455892477482
    },
    {
      "global_rank": 11111,
      "category_rank": 61,
      "domain": "ruggable.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 4051529.46908708,
      "curr_month_visits": 4051529.46908708,
      "unique_users": 2224257.10474204,
      "pages_per_visit": 4.95408051019143
    },
    {
      "global_rank": 46334,
      "category_rank": 61,
      "domain": "vevor.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1135581.19511173,
      "curr_month_visits": 1135581.19511173,
      "unique_users": 548160.647266155,
      "pages_per_visit": 3.42222777310599
    },
    {
      "global_rank": 173131,
      "category_rank": 62,
      "domain": "cortinadecor.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 238507.66061641,
      "curr_month_visits": 238507.66061641,
      "unique_users": 135248.757327989,
      "pages_per_visit": 2.66457825421394
    },
    {
      "global_rank": 11128,
      "category_rank": 62,
      "domain": "ipaper.io",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3199687.03221771,
      "curr_month_visits": 3199687.03221771,
      "unique_users": 1483556.91142106,
      "pages_per_visit": 9.58620805778746
    },
    {
      "global_rank": 34134,
      "category_rank": 62,
      "domain": "koala.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1398489.15616891,
      "curr_month_visits": 1398489.15616891,
      "unique_users": 779067.098336878,
      "pages_per_visit": 3.38527418135775
    },
    {
      "global_rank": 126295,
      "category_rank": 62,
      "domain": "helpmefind.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 93953.7148325438,
      "curr_month_visits": 93953.7148325438,
      "unique_users": 41467.5040127801,
      "pages_per_visit": 29.7966236012834
    },
    {
      "global_rank": 46497,
      "category_rank": 62,
      "domain": "ilprodottomigliore.it",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1488325.29391561,
      "curr_month_visits": 1488325.29391561,
      "unique_users": 1023604.89079656,
      "pages_per_visit": 1.63561938180052
    },
    {
      "global_rank": 175573,
      "category_rank": 63,
      "domain": "smallwoodhome.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 141895.742964424,
      "curr_month_visits": 141895.742964424,
      "unique_users": 81672.4242170145,
      "pages_per_visit": 4.4979000727797
    },
    {
      "global_rank": 50744,
      "category_rank": 63,
      "domain": "newsletter-cdiscount.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1160350.24172784,
      "curr_month_visits": 1160350.24172784,
      "unique_users": 663327.18338794,
      "pages_per_visit": 1.21445889890871
    },
    {
      "global_rank": 11154,
      "category_rank": 63,
      "domain": "litfad.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 5472453.31243854,
      "curr_month_visits": 5472453.31243854,
      "unique_users": 3142493.51022783,
      "pages_per_visit": 3.60340938642366
    },
    {
      "global_rank": 35153,
      "category_rank": 63,
      "domain": "crateandbarrel.ca",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1144290.45080826,
      "curr_month_visits": 1144290.45080826,
      "unique_users": 663263.300778346,
      "pages_per_visit": 3.92837130321198
    },
    {
      "global_rank": 127594,
      "category_rank": 63,
      "domain": "venditapianteonline.it",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 354035.465302121,
      "curr_month_visits": 354035.465302121,
      "unique_users": 219243.160759334,
      "pages_per_visit": 4.3218650905873
    },
    {
      "global_rank": 35439,
      "category_rank": 64,
      "domain": "furniturevillage.co.uk",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1322893.48470882,
      "curr_month_visits": 1322893.48470882,
      "unique_users": 841690.19524526,
      "pages_per_visit": 4.22783817973886
    },
    {
      "global_rank": 11376,
      "category_rank": 64,
      "domain": "northerntool.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 5532237.46611411,
      "curr_month_visits": 5532237.46611411,
      "unique_users": 3412482.69040063,
      "pages_per_visit": 3.02006681628258
    },
    {
      "global_rank": 187081,
      "category_rank": 64,
      "domain": "kredits.su",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 353429.586908635,
      "curr_month_visits": 353429.586908635,
      "unique_users": 104248.187613229,
      "pages_per_visit": 1.38556934373069
    },
    {
      "global_rank": 51197,
      "category_rank": 64,
      "domain": "test-aankoop.be",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1023836.6305648,
      "curr_month_visits": 1023836.6305648,
      "unique_users": 619520.831655105,
      "pages_per_visit": 2.76097948389447
    },
    {
      "global_rank": 127752,
      "category_rank": 64,
      "domain": "parks.org.il",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 446960.716224559,
      "curr_month_visits": 446960.716224559,
      "unique_users": 276366.150034213,
      "pages_per_visit": 2.78916553167379
    },
    {
      "global_rank": 187809,
      "category_rank": 65,
      "domain": "plantapronta.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 181499.858105908,
      "curr_month_visits": 181499.858105908,
      "unique_users": 110270.576198742,
      "pages_per_visit": 5.07358923597499
    },
    {
      "global_rank": 35492,
      "category_rank": 65,
      "domain": "dreams.co.uk",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1556156.20050125,
      "curr_month_visits": 1556156.20050125,
      "unique_users": 959943.586333288,
      "pages_per_visit": 3.70401328001922
    },
    {
      "global_rank": 127967,
      "category_rank": 65,
      "domain": "wildflower.org",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 502330.554320202,
      "curr_month_visits": 502330.554320202,
      "unique_users": 335760.095906941,
      "pages_per_visit": 2.60708905799563
    },
    {
      "global_rank": 11380,
      "category_rank": 65,
      "domain": "gifi.fr",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3852498.63411068,
      "curr_month_visits": 3852498.63411068,
      "unique_users": 1926811.46830559,
      "pages_per_visit": 6.06179292406312
    },
    {
      "global_rank": 51461,
      "category_rank": 65,
      "domain": "octopart.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1182406.84730722,
      "curr_month_visits": 1182406.84730722,
      "unique_users": 537209.618836505,
      "pages_per_visit": 2.89068622133964
    },
    {
      "global_rank": 11485,
      "category_rank": 66,
      "domain": "freecycle.org",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 6207847.6389489,
      "curr_month_visits": 6207847.6389489,
      "unique_users": 1018045.99392883,
      "pages_per_visit": 4.82748486411882
    },
    {
      "global_rank": 128632,
      "category_rank": 66,
      "domain": "fermilon.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 1042641.11976566,
      "curr_month_visits": 1042641.11976566,
      "unique_users": 677692.821020082,
      "pages_per_visit": 1.35068009311628
    },
    {
      "global_rank": 52570,
      "category_rank": 66,
      "domain": "upstyledaily.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1369768.53214709,
      "curr_month_visits": 1369768.53214709,
      "unique_users": 535526.743605381,
      "pages_per_visit": 2.28912772871436
    },
    {
      "global_rank": 35746,
      "category_rank": 66,
      "domain": "archiproducts.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1527561.35840899,
      "curr_month_visits": 1527561.35840899,
      "unique_users": 859869.336780443,
      "pages_per_visit": 4.43982599912562
    },
    {
      "global_rank": 192105,
      "category_rank": 66,
      "domain": "casaefesta.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 267536.037659612,
      "curr_month_visits": 267536.037659612,
      "unique_users": 187306.885731736,
      "pages_per_visit": 2.14984196403533
    },
    {
      "global_rank": 35810,
      "category_rank": 67,
      "domain": "roveconcepts.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1292041.93160035,
      "curr_month_visits": 1292041.93160035,
      "unique_users": 746823.633864723,
      "pages_per_visit": 3.91967497779172
    },
    {
      "global_rank": 53490,
      "category_rank": 67,
      "domain": "klusidee.nl",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1291871.25607826,
      "curr_month_visits": 1291871.25607826,
      "unique_users": 806549.662586052,
      "pages_per_visit": 1.7921136814166
    },
    {
      "global_rank": 7730,
      "category_rank": 67,
      "domain": "castorama.pl",
      "category": "Home_and_Garden",
      "avg_month_visits": 8669706.1183977,
      "curr_month_visits": 8669706.1183977,
      "unique_users": 3991498.21975043,
      "pages_per_visit": 3.39617567143747
    },
    {
      "global_rank": 12281,
      "category_rank": 67,
      "domain": "uswitch.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 5026792.09633993,
      "curr_month_visits": 5026792.09633993,
      "unique_users": 2946773.30759982,
      "pages_per_visit": 3.94538192304632
    },
    {
      "global_rank": 129294,
      "category_rank": 67,
      "domain": "plantagen.se",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 629299.189650433,
      "curr_month_visits": 629299.189650433,
      "unique_users": 343800.601645991,
      "pages_per_visit": 2.93753392752856
    },
    {
      "global_rank": 192151,
      "category_rank": 67,
      "domain": "pufikhomes.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 285013.111591825,
      "curr_month_visits": 285013.111591825,
      "unique_users": 62548.0688961994,
      "pages_per_visit": 2.27384070328016
    },
    {
      "global_rank": 35917,
      "category_rank": 68,
      "domain": "sconto.cz",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1257796.02182988,
      "curr_month_visits": 1257796.02182988,
      "unique_users": 575812.655834529,
      "pages_per_visit": 6.64621385868584
    },
    {
      "global_rank": 193647,
      "category_rank": 68,
      "domain": "biano.gr",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 144692.826066368,
      "curr_month_visits": 144692.826066368,
      "unique_users": 75726.2528191054,
      "pages_per_visit": 4.23627809319026
    },
    {
      "global_rank": 53746,
      "category_rank": 68,
      "domain": "mouthshut.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1323669.5740782,
      "curr_month_visits": 1323669.5740782,
      "unique_users": 1002077.8503166,
      "pages_per_visit": 2.02352299477781
    },
    {
      "global_rank": 130664,
      "category_rank": 68,
      "domain": "klubsadprof.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 351544.787945476,
      "curr_month_visits": 351544.787945476,
      "unique_users": 177992.254010804,
      "pages_per_visit": 4.28017625206022
    },
    {
      "global_rank": 12582,
      "category_rank": 68,
      "domain": "jula.se",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 4791583.3790272,
      "curr_month_visits": 4791583.3790272,
      "unique_users": 1891333.69362461,
      "pages_per_visit": 3.56395740557652
    },
    {
      "global_rank": 54700,
      "category_rank": 69,
      "domain": "bookfinder.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 790424.333473906,
      "curr_month_visits": 790424.333473906,
      "unique_users": 319127.677452939,
      "pages_per_visit": 6.07974924925585
    },
    {
      "global_rank": 12979,
      "category_rank": 69,
      "domain": "homebase.co.uk",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 4538810.27237042,
      "curr_month_visits": 4538810.27237042,
      "unique_users": 2472505.19850606,
      "pages_per_visit": 4.15011417474564
    },
    {
      "global_rank": 130967,
      "category_rank": 69,
      "domain": "tomat-pomidor.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 252679.680530505,
      "curr_month_visits": 252679.680530505,
      "unique_users": 84813.1890131337,
      "pages_per_visit": 4.09404884587561
    },
    {
      "global_rank": 36912,
      "category_rank": 69,
      "domain": "woodenstreet.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1429065.74070608,
      "curr_month_visits": 1429065.74070608,
      "unique_users": 814291.365359535,
      "pages_per_visit": 4.82513710705381
    },
    {
      "global_rank": 194432,
      "category_rank": 69,
      "domain": "royaletouche.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 261337.818879042,
      "curr_month_visits": 261337.818879042,
      "unique_users": 150666.731471155,
      "pages_per_visit": 2.6232750610577
    },
    {
      "global_rank": 195886,
      "category_rank": 70,
      "domain": "interior.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 286460.577498266,
      "curr_month_visits": 286460.577498266,
      "unique_users": 145959.421362837,
      "pages_per_visit": 2.06688571274504
    },
    {
      "global_rank": 131547,
      "category_rank": 70,
      "domain": "rastenievod.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 596085.105207736,
      "curr_month_visits": 596085.105207736,
      "unique_users": 363387.522588354,
      "pages_per_visit": 1.72084859821358
    },
    {
      "global_rank": 13025,
      "category_rank": 70,
      "domain": "surlatable.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2811162.36783351,
      "curr_month_visits": 2811162.36783351,
      "unique_users": 1655206.79250233,
      "pages_per_visit": 4.10428921145395
    },
    {
      "global_rank": 37629,
      "category_rank": 70,
      "domain": "moebelix.at",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1412032.17931375,
      "curr_month_visits": 1412032.17931375,
      "unique_users": 625149.26230651,
      "pages_per_visit": 4.07752066712226
    },
    {
      "global_rank": 54784,
      "category_rank": 70,
      "domain": "minetilbud.dk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 699198.206780596,
      "curr_month_visits": 699198.206780596,
      "unique_users": 297694.184890105,
      "pages_per_visit": 5.53414865347239
    },
    {
      "global_rank": 39470,
      "category_rank": 71,
      "domain": "dwr.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1091527.25374193,
      "curr_month_visits": 1091527.25374193,
      "unique_users": 592594.915802822,
      "pages_per_visit": 4.94256935497673
    },
    {
      "global_rank": 13047,
      "category_rank": 71,
      "domain": "afamily.vn",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 6644479.69153625,
      "curr_month_visits": 6644479.69153625,
      "unique_users": 2730652.92460002,
      "pages_per_visit": 3.29351039200252
    },
    {
      "global_rank": 135032,
      "category_rank": 71,
      "domain": "sunset.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 479382.122067366,
      "curr_month_visits": 479382.122067366,
      "unique_users": 341353.881532019,
      "pages_per_visit": 2.48542689476515
    },
    {
      "global_rank": 55070,
      "category_rank": 71,
      "domain": "terrylove.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1388389.44992325,
      "curr_month_visits": 1388389.44992325,
      "unique_users": 1009484.88777789,
      "pages_per_visit": 1.65485695200996
    },
    {
      "global_rank": 198414,
      "category_rank": 71,
      "domain": "ideabrasil.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 379427.310091492,
      "curr_month_visits": 379427.310091492,
      "unique_users": 294412.452643753,
      "pages_per_visit": 1.38842825478814
    },
    {
      "global_rank": 136880,
      "category_rank": 72,
      "domain": "orton.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 483451.654014527,
      "curr_month_visits": 483451.654014527,
      "unique_users": 278921.975441305,
      "pages_per_visit": 1.69368130992926
    },
    {
      "global_rank": 199183,
      "category_rank": 72,
      "domain": "kutchina.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 214555.02392729,
      "curr_month_visits": 214555.02392729,
      "unique_users": 90737.004660227,
      "pages_per_visit": 3.33429234228876
    },
    {
      "global_rank": 57232,
      "category_rank": 72,
      "domain": "aeg.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 830821.503397481,
      "curr_month_visits": 830821.503397481,
      "unique_users": 542955.76612993,
      "pages_per_visit": 3.58983314960478
    },
    {
      "global_rank": 13125,
      "category_rank": 72,
      "domain": "delonghi.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3555613.83937039,
      "curr_month_visits": 3555613.83937039,
      "unique_users": 2171846.14158157,
      "pages_per_visit": 3.1990014288332
    },
    {
      "global_rank": 40149,
      "category_rank": 72,
      "domain": "saatva.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1556984.79839724,
      "curr_month_visits": 1556984.79839724,
      "unique_users": 1002419.6435305,
      "pages_per_visit": 2.49104322391393
    },
    {
      "global_rank": 40265,
      "category_rank": 73,
      "domain": "laredoute.es",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1031527.77337294,
      "curr_month_visits": 1031527.77337294,
      "unique_users": 529647.687668837,
      "pages_per_visit": 5.27137965275108
    },
    {
      "global_rank": 199226,
      "category_rank": 73,
      "domain": "aapkapainter.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 244750.420099403,
      "curr_month_visits": 244750.420099403,
      "unique_users": 120548.345351525,
      "pages_per_visit": 4.71785009996561
    },
    {
      "global_rank": 13326,
      "category_rank": 73,
      "domain": "bunnings.co.nz",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 4072788.13392787,
      "curr_month_visits": 4072788.13392787,
      "unique_users": 1496609.34810124,
      "pages_per_visit": 3.91741781587627
    },
    {
      "global_rank": 59087,
      "category_rank": 73,
      "domain": "sonderpreis-baumarkt.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 832893.450280506,
      "curr_month_visits": 832893.450280506,
      "unique_users": 435677.700044631,
      "pages_per_visit": 3.97266311260879
    },
    {
      "global_rank": 137123,
      "category_rank": 73,
      "domain": "bakker.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 383924.985281315,
      "curr_month_visits": 383924.985281315,
      "unique_users": 224585.717635381,
      "pages_per_visit": 3.36315393613836
    },
    {
      "global_rank": 199599,
      "category_rank": 74,
      "domain": "vobi.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 212496.712724955,
      "curr_month_visits": 212496.712724955,
      "unique_users": 61532.289522239,
      "pages_per_visit": 7.78450681177594
    },
    {
      "global_rank": 137854,
      "category_rank": 74,
      "domain": "vinograd.info",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 380853.926625922,
      "curr_month_visits": 380853.926625922,
      "unique_users": 159842.298800982,
      "pages_per_visit": 3.14824343549005
    },
    {
      "global_rank": 13479,
      "category_rank": 74,
      "domain": "mio.se",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3813954.37412692,
      "curr_month_visits": 3813954.37412692,
      "unique_users": 1487196.17303654,
      "pages_per_visit": 4.53527840030713
    },
    {
      "global_rank": 59506,
      "category_rank": 74,
      "domain": "mediakonsumen.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1029137.53564177,
      "curr_month_visits": 1029137.53564177,
      "unique_users": 496404.494517394,
      "pages_per_visit": 2.39638843671301
    },
    {
      "global_rank": 42182,
      "category_rank": 74,
      "domain": "xxxlutz.ch",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 990855.945953229,
      "curr_month_visits": 990855.945953229,
      "unique_users": 505867.554424517,
      "pages_per_visit": 5.65674031809243
    },
    {
      "global_rank": 59520,
      "category_rank": 75,
      "domain": "fixya.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1428302.69703981,
      "curr_month_visits": 1428302.69703981,
      "unique_users": 1017386.4379761,
      "pages_per_visit": 1.75031149630677
    },
    {
      "global_rank": 137861,
      "category_rank": 75,
      "domain": "kokkaen-ec.jp",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 330248.230498073,
      "curr_month_visits": 330248.230498073,
      "unique_users": 167486.498142213,
      "pages_per_visit": 5.30076384649158
    },
    {
      "global_rank": 43219,
      "category_rank": 75,
      "domain": "interiordefine.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 844882.054695904,
      "curr_month_visits": 844882.054695904,
      "unique_users": 410988.479364223,
      "pages_per_visit": 6.07668232895693
    },
    {
      "global_rank": 201575,
      "category_rank": 75,
      "domain": "pentaschool.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 223956.633509494,
      "curr_month_visits": 223956.633509494,
      "unique_users": 77391.4710173793,
      "pages_per_visit": 3.62842708332061
    },
    {
      "global_rank": 13535,
      "category_rank": 75,
      "domain": "curama.jp",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 5088367.25089887,
      "curr_month_visits": 5088367.25089887,
      "unique_users": 3339659.73738842,
      "pages_per_visit": 2.70245383762384
    },
    {
      "global_rank": 43318,
      "category_rank": 76,
      "domain": "afw.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1025962.07415127,
      "curr_month_visits": 1025962.07415127,
      "unique_users": 559171.533626379,
      "pages_per_visit": 5.17985254909285
    },
    {
      "global_rank": 203012,
      "category_rank": 76,
      "domain": "edwardgeorgelondon.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 201693.883259662,
      "curr_month_visits": 201693.883259662,
      "unique_users": 109777.26731506,
      "pages_per_visit": 2.02321540287132
    },
    {
      "global_rank": 61225,
      "category_rank": 76,
      "domain": "cleanipedia.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1514291.34807323,
      "curr_month_visits": 1514291.34807323,
      "unique_users": 1062119.61296724,
      "pages_per_visit": 1.34578149819851
    },
    {
      "global_rank": 13771,
      "category_rank": 76,
      "domain": "bsh-group.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3718615.02730486,
      "curr_month_visits": 3718615.02730486,
      "unique_users": 2143933.93902681,
      "pages_per_visit": 4.06586416427562
    },
    {
      "global_rank": 138012,
      "category_rank": 76,
      "domain": "chicagobotanic.org",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 321900.065378315,
      "curr_month_visits": 321900.065378315,
      "unique_users": 188771.239296384,
      "pages_per_visit": 3.19611661203987
    },
    {
      "global_rank": 13864,
      "category_rank": 77,
      "domain": "manomano.it",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 4665848.42129686,
      "curr_month_visits": 4665848.42129686,
      "unique_users": 2672538.90937201,
      "pages_per_visit": 3.15949797334642
    },
    {
      "global_rank": 43880,
      "category_rank": 77,
      "domain": "thuma.co",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1205813.01314693,
      "curr_month_visits": 1205813.01314693,
      "unique_users": 772085.832118981,
      "pages_per_visit": 3.13659719363794
    },
    {
      "global_rank": 138331,
      "category_rank": 77,
      "domain": "gardenista.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 466707.167809909,
      "curr_month_visits": 466707.167809909,
      "unique_users": 256366.199091305,
      "pages_per_visit": 1.97526404375947
    },
    {
      "global_rank": 208654,
      "category_rank": 77,
      "domain": "roomplannerapp.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 249723.677614501,
      "curr_month_visits": 249723.677614501,
      "unique_users": 138532.172215683,
      "pages_per_visit": 1.84046684388576
    },
    {
      "global_rank": 62983,
      "category_rank": 77,
      "domain": "elon.se",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 726368.066476058,
      "curr_month_visits": 726368.066476058,
      "unique_users": 432290.433450743,
      "pages_per_visit": 3.42450156816004
    },
    {
      "global_rank": 139219,
      "category_rank": 78,
      "domain": "gardenstory.jp",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 497359.986516667,
      "curr_month_visits": 497359.986516667,
      "unique_users": 339218.770081741,
      "pages_per_visit": 1.34733139298154
    },
    {
      "global_rank": 43990,
      "category_rank": 78,
      "domain": "emma.fr",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1143026.29901601,
      "curr_month_visits": 1143026.29901601,
      "unique_users": 668001.21442776,
      "pages_per_visit": 2.55906598282239
    },
    {
      "global_rank": 14157,
      "category_rank": 78,
      "domain": "philips-hue.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3165681.99031369,
      "curr_month_visits": 3165681.99031369,
      "unique_users": 1727510.01733338,
      "pages_per_visit": 4.24832346494063
    },
    {
      "global_rank": 208741,
      "category_rank": 78,
      "domain": "merinolaminates.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 220885.132589226,
      "curr_month_visits": 220885.132589226,
      "unique_users": 122288.948469284,
      "pages_per_visit": 2.56966205821213
    },
    {
      "global_rank": 63556,
      "category_rank": 78,
      "domain": "60millions-mag.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1018095.44488078,
      "curr_month_visits": 1018095.44488078,
      "unique_users": 745969.303955488,
      "pages_per_visit": 2.04395972738017
    },
    {
      "global_rank": 63574,
      "category_rank": 79,
      "domain": "bolius.dk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1246299.17995058,
      "curr_month_visits": 1246299.17995058,
      "unique_users": 657067.72941512,
      "pages_per_visit": 1.56923778354938
    },
    {
      "global_rank": 14302,
      "category_rank": 79,
      "domain": "karwei.nl",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 4087513.4625199,
      "curr_month_visits": 4087513.4625199,
      "unique_users": 1929757.86227431,
      "pages_per_visit": 4.08596514678558
    },
    {
      "global_rank": 139792,
      "category_rank": 79,
      "domain": "cvetok-snk.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 115105.289027122,
      "curr_month_visits": 115105.289027122,
      "unique_users": 24231.162151739,
      "pages_per_visit": 17.2602775518478
    },
    {
      "global_rank": 225893,
      "category_rank": 79,
      "domain": "resupplyapp.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 147011.137680669,
      "curr_month_visits": 147011.137680669,
      "unique_users": 94190.3643751372,
      "pages_per_visit": 3.34755195168357
    },
    {
      "global_rank": 44060,
      "category_rank": 79,
      "domain": "casper.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1622906.80914766,
      "curr_month_visits": 1622906.80914766,
      "unique_users": 1154343.10663221,
      "pages_per_visit": 2.16593580031669
    },
    {
      "global_rank": 44384,
      "category_rank": 80,
      "domain": "emma-matratze.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1041184.37631747,
      "curr_month_visits": 1041184.37631747,
      "unique_users": 631320.617797012,
      "pages_per_visit": 3.09815161420169
    },
    {
      "global_rank": 14453,
      "category_rank": 80,
      "domain": "acmetools.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2942345.94090799,
      "curr_month_visits": 2942345.94090799,
      "unique_users": 1533094.68555879,
      "pages_per_visit": 3.91139061275001
    },
    {
      "global_rank": 227209,
      "category_rank": 80,
      "domain": "vannaguide.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 179213.32984724,
      "curr_month_visits": 179213.32984724,
      "unique_users": 108782.284285767,
      "pages_per_visit": 5.52126772426729
    },
    {
      "global_rank": 65216,
      "category_rank": 80,
      "domain": "hellweg.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 851120.581332625,
      "curr_month_visits": 851120.581332625,
      "unique_users": 508293.932349556,
      "pages_per_visit": 3.83823085340718
    },
    {
      "global_rank": 140129,
      "category_rank": 80,
      "domain": "mortonarb.org",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 386324.090206966,
      "curr_month_visits": 386324.090206966,
      "unique_users": 264853.362857863,
      "pages_per_visit": 2.10065979124177
    },
    {
      "global_rank": 228437,
      "category_rank": 81,
      "domain": "decorardicas.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 172544.746184427,
      "curr_month_visits": 172544.746184427,
      "unique_users": 104615.379134835,
      "pages_per_visit": 3.19471836137516
    },
    {
      "global_rank": 141762,
      "category_rank": 81,
      "domain": "motherearthnews.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 497687.73859887,
      "curr_month_visits": 497687.73859887,
      "unique_users": 328121.37185195,
      "pages_per_visit": 1.61630117870701
    },
    {
      "global_rank": 14491,
      "category_rank": 81,
      "domain": "leroymerlin.ro",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 4764311.92811067,
      "curr_month_visits": 4764311.92811067,
      "unique_users": 1932267.13322281,
      "pages_per_visit": 3.23203862379748
    },
    {
      "global_rank": 44948,
      "category_rank": 81,
      "domain": "mnogomebeli.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 907467.900386792,
      "curr_month_visits": 907467.900386792,
      "unique_users": 461535.671072277,
      "pages_per_visit": 5.7952878318387
    },
    {
      "global_rank": 65439,
      "category_rank": 81,
      "domain": "level.ru",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 912517.806506535,
      "curr_month_visits": 912517.806506535,
      "unique_users": 454636.732226302,
      "pages_per_visit": 2.86063729482248
    },
    {
      "global_rank": 14519,
      "category_rank": 82,
      "domain": "geappliances.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 4041272.10142459,
      "curr_month_visits": 4041272.10142459,
      "unique_users": 2584418.54154972,
      "pages_per_visit": 3.43300260492623
    },
    {
      "global_rank": 45035,
      "category_rank": 82,
      "domain": "steelcase.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 870836.684097745,
      "curr_month_visits": 870836.684097745,
      "unique_users": 440282.640808256,
      "pages_per_visit": 5.77832362607599
    },
    {
      "global_rank": 66368,
      "category_rank": 82,
      "domain": "activetrail.biz",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1196672.8999107,
      "curr_month_visits": 1196672.8999107,
      "unique_users": 620112.238947776,
      "pages_per_visit": 1.48895500496243
    },
    {
      "global_rank": 234456,
      "category_rank": 82,
      "domain": "archtrends.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 205868.052907343,
      "curr_month_visits": 205868.052907343,
      "unique_users": 155283.35850404,
      "pages_per_visit": 2.48372495358604
    },
    {
      "global_rank": 142519,
      "category_rank": 82,
      "domain": "naturadb.de",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 471745.050251914,
      "curr_month_visits": 471745.050251914,
      "unique_users": 211225.581560563,
      "pages_per_visit": 2.37874911663627
    },
    {
      "global_rank": 45925,
      "category_rank": 83,
      "domain": "ikea.es",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1143942.7508103,
      "curr_month_visits": 1143942.7508103,
      "unique_users": 597944.467845513,
      "pages_per_visit": 3.92983775440299
    },
    {
      "global_rank": 14533,
      "category_rank": 83,
      "domain": "princessauto.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3756833.8692928,
      "curr_month_visits": 3756833.8692928,
      "unique_users": 1496256.30699599,
      "pages_per_visit": 4.96900505652123
    },
    {
      "global_rank": 67670,
      "category_rank": 83,
      "domain": "zeelproject.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 498166.316581039,
      "curr_month_visits": 498166.316581039,
      "unique_users": 137558.100077202,
      "pages_per_visit": 8.61277032231089
    },
    {
      "global_rank": 143382,
      "category_rank": 83,
      "domain": "davesgarden.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 427993.186398153,
      "curr_month_visits": 427993.186398153,
      "unique_users": 272979.377496093,
      "pages_per_visit": 2.76897427317094
    },
    {
      "global_rank": 235407,
      "category_rank": 83,
      "domain": "shelterness.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 177383.514638699,
      "curr_month_visits": 177383.514638699,
      "unique_users": 111188.858944809,
      "pages_per_visit": 2.90064172316789
    },
    {
      "global_rank": 14565,
      "category_rank": 84,
      "domain": "arcelik.com.tr",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 4297789.49514482,
      "curr_month_visits": 4297789.49514482,
      "unique_users": 2137916.26274202,
      "pages_per_visit": 4.18591964831965
    },
    {
      "global_rank": 145819,
      "category_rank": 84,
      "domain": "portalteplic.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 575090.321088144,
      "curr_month_visits": 575090.321088144,
      "unique_users": 216315.92285883,
      "pages_per_visit": 1.04400386557694
    },
    {
      "global_rank": 67745,
      "category_rank": 84,
      "domain": "beadaya.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 774725.179309629,
      "curr_month_visits": 774725.179309629,
      "unique_users": 422636.134972804,
      "pages_per_visit": 5.52234929463853
    },
    {
      "global_rank": 237410,
      "category_rank": 84,
      "domain": "casaeconstrucao.org",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 292121.228128898,
      "curr_month_visits": 292121.228128898,
      "unique_users": 247161.715810462,
      "pages_per_visit": 1.41733046645148
    },
    {
      "global_rank": 46102,
      "category_rank": 84,
      "domain": "tylko.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1118042.05074888,
      "curr_month_visits": 1118042.05074888,
      "unique_users": 632130.690625767,
      "pages_per_visit": 2.91455469847671
    },
    {
      "global_rank": 146749,
      "category_rank": 85,
      "domain": "unas.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 170523.067967025,
      "curr_month_visits": 170523.067967025,
      "unique_users": 39053.0073017231,
      "pages_per_visit": 13.3584003419039
    },
    {
      "global_rank": 14674,
      "category_rank": 85,
      "domain": "farmandfleet.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3233650.85288153,
      "curr_month_visits": 3233650.85288153,
      "unique_users": 1856751.99137885,
      "pages_per_visit": 3.49084458788214
    },
    {
      "global_rank": 238288,
      "category_rank": 85,
      "domain": "foccolojas.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 211592.55255239,
      "curr_month_visits": 211592.55255239,
      "unique_users": 11949.9993253185,
      "pages_per_visit": 8.12327947249927
    },
    {
      "global_rank": 46147,
      "category_rank": 85,
      "domain": "tempurpedic.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1392620.06232297,
      "curr_month_visits": 1392620.06232297,
      "unique_users": 793255.800425175,
      "pages_per_visit": 2.57622008431061
    },
    {
      "global_rank": 67934,
      "category_rank": 85,
      "domain": "lifehackin.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 931157.46045525,
      "curr_month_visits": 931157.46045525,
      "unique_users": 724526.057032681,
      "pages_per_visit": 1.98276396887216
    },
    {
      "global_rank": 67959,
      "category_rank": 86,
      "domain": "mesdepanneurs.fr",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1108608.48495803,
      "curr_month_visits": 1108608.48495803,
      "unique_users": 806999.08659773,
      "pages_per_visit": 1.36280865475217
    },
    {
      "global_rank": 239561,
      "category_rank": 86,
      "domain": "salon.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 203860.381418266,
      "curr_month_visits": 203860.381418266,
      "unique_users": 123814.146955313,
      "pages_per_visit": 1.62334253068737
    },
    {
      "global_rank": 147507,
      "category_rank": 86,
      "domain": "livelyroot.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 367451.330328369,
      "curr_month_visits": 367451.330328369,
      "unique_users": 230860.011069677,
      "pages_per_visit": 2.09749521855601
    },
    {
      "global_rank": 47282,
      "category_rank": 86,
      "domain": "sodimac.com.mx",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1052083.12771486,
      "curr_month_visits": 1052083.12771486,
      "unique_users": 604682.26868625,
      "pages_per_visit": 3.57107831567024
    },
    {
      "global_rank": 14954,
      "category_rank": 86,
      "domain": "sharkclean.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2886610.77096186,
      "curr_month_visits": 2886610.77096186,
      "unique_users": 1723476.54429874,
      "pages_per_visit": 3.60065152969453
    },
    {
      "global_rank": 242892,
      "category_rank": 87,
      "domain": "bonito.in",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 82576.3442991243,
      "curr_month_visits": 82576.3442991243,
      "unique_users": 29872.4731624015,
      "pages_per_visit": 7.82569894845721
    },
    {
      "global_rank": 68030,
      "category_rank": 87,
      "domain": "hunker.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1094773.35203686,
      "curr_month_visits": 1094773.35203686,
      "unique_users": 831927.55867899,
      "pages_per_visit": 1.63484098126883
    },
    {
      "global_rank": 147996,
      "category_rank": 87,
      "domain": "dehner.at",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 304288.902398951,
      "curr_month_visits": 304288.902398951,
      "unique_users": 168674.63682049,
      "pages_per_visit": 3.54566005584141
    },
    {
      "global_rank": 15101,
      "category_rank": 87,
      "domain": "raymourflanigan.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3351819.50121987,
      "curr_month_visits": 3351819.50121987,
      "unique_users": 1745989.52286335,
      "pages_per_visit": 4.48976910203832
    },
    {
      "global_rank": 47802,
      "category_rank": 87,
      "domain": "westelm.ca",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 799350.711463539,
      "curr_month_visits": 799350.711463539,
      "unique_users": 400684.305980839,
      "pages_per_visit": 4.77765093507286
    },
    {
      "global_rank": 15112,
      "category_rank": 88,
      "domain": "auctionninja.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2242588.06307201,
      "curr_month_visits": 2242588.06307201,
      "unique_users": 401909.69923393,
      "pages_per_visit": 18.3435772154913
    },
    {
      "global_rank": 49455,
      "category_rank": 88,
      "domain": "kohler.co.in",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1185882.46904563,
      "curr_month_visits": 1185882.46904563,
      "unique_users": 733032.749612582,
      "pages_per_visit": 2.23924706069054
    },
    {
      "global_rank": 149039,
      "category_rank": 88,
      "domain": "zielonyogrodek.pl",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 469950.471810868,
      "curr_month_visits": 469950.471810868,
      "unique_users": 310361.510529269,
      "pages_per_visit": 1.60775596723469
    },
    {
      "global_rank": 69215,
      "category_rank": 88,
      "domain": "redesigndaily.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1028498.63674892,
      "curr_month_visits": 1028498.63674892,
      "unique_users": 402102.650347421,
      "pages_per_visit": 2.1129031673117
    },
    {
      "global_rank": 246875,
      "category_rank": 88,
      "domain": "rerooms.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 238231.413733179,
      "curr_month_visits": 238231.413733179,
      "unique_users": 140984.065017311,
      "pages_per_visit": 1.6982196419416
    },
    {
      "global_rank": 15147,
      "category_rank": 89,
      "domain": "irisplaza.co.jp",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3377064.71321169,
      "curr_month_visits": 3377064.71321169,
      "unique_users": 1766408.08298074,
      "pages_per_visit": 4.51559573712553
    },
    {
      "global_rank": 70587,
      "category_rank": 89,
      "domain": "prezzoforte.it",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 676131.225330195,
      "curr_month_visits": 676131.225330195,
      "unique_users": 444320.950094965,
      "pages_per_visit": 3.15810783634324
    },
    {
      "global_rank": 149405,
      "category_rank": 89,
      "domain": "gardenexpress.com.au",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 299715.220519593,
      "curr_month_visits": 299715.220519593,
      "unique_users": 139265.46387536,
      "pages_per_visit": 5.24773409163918
    },
    {
      "global_rank": 49663,
      "category_rank": 89,
      "domain": "crompton.co.in",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1108599.32263449,
      "curr_month_visits": 1108599.32263449,
      "unique_users": 635189.327080452,
      "pages_per_visit": 3.44149847385768
    },
    {
      "global_rank": 254080,
      "category_rank": 89,
      "domain": "idei.club",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 252647.307236039,
      "curr_month_visits": 252647.307236039,
      "unique_users": 155085.813298778,
      "pages_per_visit": 1.31017320506494
    },
    {
      "global_rank": 15210,
      "category_rank": 90,
      "domain": "kitchenaid.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3054580.80524204,
      "curr_month_visits": 3054580.80524204,
      "unique_users": 2050307.35978236,
      "pages_per_visit": 3.33089034666691
    },
    {
      "global_rank": 151829,
      "category_rank": 90,
      "domain": "gardenmart24.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 497787.848177538,
      "curr_month_visits": 497787.848177538,
      "unique_users": 235163.314301299,
      "pages_per_visit": 3.23819165739729
    },
    {
      "global_rank": 49701,
      "category_rank": 90,
      "domain": "helixsleep.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 943445.15204703,
      "curr_month_visits": 943445.15204703,
      "unique_users": 615855.085481963,
      "pages_per_visit": 3.9547723442881
    },
    {
      "global_rank": 71058,
      "category_rank": 90,
      "domain": "frag-mutti.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1060853.55926365,
      "curr_month_visits": 1060853.55926365,
      "unique_users": 777288.759685208,
      "pages_per_visit": 1.62431165102854
    },
    {
      "global_rank": 255705,
      "category_rank": 90,
      "domain": "homedit.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 249418.37342594,
      "curr_month_visits": 249418.37342594,
      "unique_users": 167858.310637392,
      "pages_per_visit": 1.5531077729594
    },
    {
      "global_rank": 10446,
      "category_rank": 90,
      "domain": "managebuilding.com",
      "category": "Home_and_Garden",
      "avg_month_visits": 4470338.75835997,
      "curr_month_visits": 4470338.75835997,
      "unique_users": 1435500.79951486,
      "pages_per_visit": 8.74479715950689
    },
    {
      "global_rank": 72938,
      "category_rank": 91,
      "domain": "epodex.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 743649.245657596,
      "curr_month_visits": 743649.245657596,
      "unique_users": 399026.97549625,
      "pages_per_visit": 3.3485915834249
    },
    {
      "global_rank": 49949,
      "category_rank": 91,
      "domain": "cotswoldco.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1093197.14114866,
      "curr_month_visits": 1093197.14114866,
      "unique_users": 645644.01163472,
      "pages_per_visit": 3.28086759948852
    },
    {
      "global_rank": 152110,
      "category_rank": 91,
      "domain": "daleysfruit.com.au",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 265688.774955955,
      "curr_month_visits": 265688.774955955,
      "unique_users": 147855.360461348,
      "pages_per_visit": 3.71101114105235
    },
    {
      "global_rank": 256112,
      "category_rank": 91,
      "domain": "atldesigngroup.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 210542.335176222,
      "curr_month_visits": 210542.335176222,
      "unique_users": 140932.617372316,
      "pages_per_visit": 1.37679295419827
    },
    {
      "global_rank": 15284,
      "category_rank": 91,
      "domain": "leroymerlin.ru",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 5331648.84165517,
      "curr_month_visits": 5331648.84165517,
      "unique_users": 2592460.11309725,
      "pages_per_visit": 3.19237344935633
    },
    {
      "global_rank": 153222,
      "category_rank": 92,
      "domain": "aujardin.info",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 465074.062321821,
      "curr_month_visits": 465074.062321821,
      "unique_users": 299897.302036907,
      "pages_per_visit": 1.39798176852838
    },
    {
      "global_rank": 50174,
      "category_rank": 92,
      "domain": "beliani.pl",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 978113.611644225,
      "curr_month_visits": 978113.611644225,
      "unique_users": 599677.568127851,
      "pages_per_visit": 3.23073845039205
    },
    {
      "global_rank": 15501,
      "category_rank": 92,
      "domain": "bauhaus.se",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3775304.45739854,
      "curr_month_visits": 3775304.45739854,
      "unique_users": 1505512.57845458,
      "pages_per_visit": 4.27584984171368
    },
    {
      "global_rank": 74703,
      "category_rank": 92,
      "domain": "selbst.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1098718.00001729,
      "curr_month_visits": 1098718.00001729,
      "unique_users": 593788.395425804,
      "pages_per_visit": 2.60538032694489
    },
    {
      "global_rank": 258044,
      "category_rank": 92,
      "domain": "decorfacil.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 181214.432487484,
      "curr_month_visits": 181214.432487484,
      "unique_users": 145471.882946277,
      "pages_per_visit": 1.54159236929928
    },
    {
      "global_rank": 258489,
      "category_rank": 93,
      "domain": "home-designing.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 232803.621628497,
      "curr_month_visits": 232803.621628497,
      "unique_users": 136230.656951322,
      "pages_per_visit": 1.76707131374406
    },
    {
      "global_rank": 74791,
      "category_rank": 93,
      "domain": "systemed.fr",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1043114.26215228,
      "curr_month_visits": 1043114.26215228,
      "unique_users": 722330.003471414,
      "pages_per_visit": 1.37369623295471
    },
    {
      "global_rank": 15594,
      "category_rank": 93,
      "domain": "mitre10.co.nz",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3435682.54936876,
      "curr_month_visits": 3435682.54936876,
      "unique_users": 1345856.28007305,
      "pages_per_visit": 4.1917645847466
    },
    {
      "global_rank": 50201,
      "category_rank": 93,
      "domain": "vente-unique.es",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 622342.494981977,
      "curr_month_visits": 622342.494981977,
      "unique_users": 268399.745158866,
      "pages_per_visit": 5.33742464216144
    },
    {
      "global_rank": 153401,
      "category_rank": 93,
      "domain": "homesteadingfamily.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 390783.326099516,
      "curr_month_visits": 390783.326099516,
      "unique_users": 234130.437539169,
      "pages_per_visit": 2.31031115981315
    },
    {
      "global_rank": 15864,
      "category_rank": 94,
      "domain": "bestproductsreviews.co.uk",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3973719.41146289,
      "curr_month_visits": 3973719.41146289,
      "unique_users": 2762628.43628734,
      "pages_per_visit": 2.15690137716414
    },
    {
      "global_rank": 155324,
      "category_rank": 94,
      "domain": "diyeverywhere.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 385581.960445984,
      "curr_month_visits": 385581.960445984,
      "unique_users": 186875.341777301,
      "pages_per_visit": 1.63814295498215
    },
    {
      "global_rank": 258859,
      "category_rank": 94,
      "domain": "homify.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 208584.271199114,
      "curr_month_visits": 208584.271199114,
      "unique_users": 162088.165666582,
      "pages_per_visit": 1.96337139229362
    },
    {
      "global_rank": 74999,
      "category_rank": 94,
      "domain": "tide.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1061596.85342336,
      "curr_month_visits": 1061596.85342336,
      "unique_users": 799349.087510153,
      "pages_per_visit": 1.39514803278958
    },
    {
      "global_rank": 50218,
      "category_rank": 94,
      "domain": "nilkamalfurniture.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 909292.835108593,
      "curr_month_visits": 909292.835108593,
      "unique_users": 595911.38294821,
      "pages_per_visit": 3.97627898415613
    },
    {
      "global_rank": 158379,
      "category_rank": 95,
      "domain": "ortodacoltivare.it",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 467660.916787622,
      "curr_month_visits": 467660.916787622,
      "unique_users": 298307.177255577,
      "pages_per_visit": 1.81013719019072
    },
    {
      "global_rank": 50616,
      "category_rank": 95,
      "domain": "dico.com.mx",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 577754.248869222,
      "curr_month_visits": 577754.248869222,
      "unique_users": 315288.354039465,
      "pages_per_visit": 6.5093345029767
    },
    {
      "global_rank": 15938,
      "category_rank": 95,
      "domain": "mondoconv.it",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3250121.01223259,
      "curr_month_visits": 3250121.01223259,
      "unique_users": 1509989.82834007,
      "pages_per_visit": 5.01666984898415
    },
    {
      "global_rank": 75352,
      "category_rank": 95,
      "domain": "digital-forum.it",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 771889.143523218,
      "curr_month_visits": 771889.143523218,
      "unique_users": 231129.773987439,
      "pages_per_visit": 4.97835751039366
    },
    {
      "global_rank": 269932,
      "category_rank": 95,
      "domain": "geometrium-school.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 124410.724887505,
      "curr_month_visits": 124410.724887505,
      "unique_users": 22390.3128552589,
      "pages_per_visit": 4.74572907701469
    },
    {
      "global_rank": 51134,
      "category_rank": 96,
      "domain": "home24.at",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 809871.576051256,
      "curr_month_visits": 809871.576051256,
      "unique_users": 412610.277711868,
      "pages_per_visit": 4.85950351467608
    },
    {
      "global_rank": 16044,
      "category_rank": 96,
      "domain": "homehardware.ca",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3797167.23403716,
      "curr_month_visits": 3797167.23403716,
      "unique_users": 1992719.73703375,
      "pages_per_visit": 3.92117969672264
    },
    {
      "global_rank": 159817,
      "category_rank": 96,
      "domain": "lovethegarden.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 527855.681043705,
      "curr_month_visits": 527855.681043705,
      "unique_users": 337878.020722698,
      "pages_per_visit": 1.51668175943939
    },
    {
      "global_rank": 75786,
      "category_rank": 96,
      "domain": "taenk.dk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 642780.461377158,
      "curr_month_visits": 642780.461377158,
      "unique_users": 385057.522816188,
      "pages_per_visit": 3.1320292721137
    },
    {
      "global_rank": 275199,
      "category_rank": 96,
      "domain": "4in.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 146513.990144122,
      "curr_month_visits": 146513.990144122,
      "unique_users": 60717.5530010933,
      "pages_per_visit": 2.2745610476612
    },
    {
      "global_rank": 275469,
      "category_rank": 97,
      "domain": "foyr.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 191824.060285049,
      "curr_month_visits": 191824.060285049,
      "unique_users": 99946.1145136435,
      "pages_per_visit": 2.29464514314046
    },
    {
      "global_rank": 16240,
      "category_rank": 97,
      "domain": "pbteen.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2827902.31592189,
      "curr_month_visits": 2827902.31592189,
      "unique_users": 1683735.92740927,
      "pages_per_visit": 4.02356862099631
    },
    {
      "global_rank": 76460,
      "category_rank": 97,
      "domain": "habitissimo.es",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 891109.688856982,
      "curr_month_visits": 891109.688856982,
      "unique_users": 595861.033733986,
      "pages_per_visit": 1.95243498908514
    },
    {
      "global_rank": 160541,
      "category_rank": 97,
      "domain": "keiseirose.co.jp",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 164342.699734509,
      "curr_month_visits": 164342.699734509,
      "unique_users": 83212.9474867648,
      "pages_per_visit": 8.23021746493129
    },
    {
      "global_rank": 51212,
      "category_rank": 97,
      "domain": "stokke.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 988892.176055009,
      "curr_month_visits": 988892.176055009,
      "unique_users": 579328.349051686,
      "pages_per_visit": 2.92941371363311
    },
    {
      "global_rank": 281131,
      "category_rank": 98,
      "domain": "peredelka.tv",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 122767.261908222,
      "curr_month_visits": 122767.261908222,
      "unique_users": 56155.2035548839,
      "pages_per_visit": 4.18389819185876
    },
    {
      "global_rank": 77364,
      "category_rank": 98,
      "domain": "kokusen.go.jp",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 914561.073678204,
      "curr_month_visits": 914561.073678204,
      "unique_users": 679334.370650221,
      "pages_per_visit": 1.93115601099299
    },
    {
      "global_rank": 160904,
      "category_rank": 98,
      "domain": "provenwinners.jp",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 379209.42405716,
      "curr_month_visits": 379209.42405716,
      "unique_users": 238281.45430395,
      "pages_per_visit": 2.09296618381035
    },
    {
      "global_rank": 51694,
      "category_rank": 98,
      "domain": "yatasbedding.com.tr",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 998687.196342281,
      "curr_month_visits": 998687.196342281,
      "unique_users": 571916.66628935,
      "pages_per_visit": 4.99682259054392
    },
    {
      "global_rank": 16282,
      "category_rank": 98,
      "domain": "checkatrade.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 4259887.88274907,
      "curr_month_visits": 4259887.88274907,
      "unique_users": 2423080.56064796,
      "pages_per_visit": 3.05471751553379
    },
    {
      "global_rank": 78686,
      "category_rank": 99,
      "domain": "remotvet.ru",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1084696.24639424,
      "curr_month_visits": 1084696.24639424,
      "unique_users": 805470.903762749,
      "pages_per_visit": 1.20335547479155
    },
    {
      "global_rank": 163545,
      "category_rank": 99,
      "domain": "sadovodka.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 188231.18885295,
      "curr_month_visits": 188231.18885295,
      "unique_users": 43580.3341038319,
      "pages_per_visit": 3.79922185458365
    },
    {
      "global_rank": 51825,
      "category_rank": 99,
      "domain": "schoolhouse.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 802753.161261344,
      "curr_month_visits": 802753.161261344,
      "unique_users": 445808.049516009,
      "pages_per_visit": 4.56515442467476
    },
    {
      "global_rank": 281713,
      "category_rank": 99,
      "domain": "more4u.gr",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 46855.5087303132,
      "curr_month_visits": 46855.5087303132,
      "unique_users": 21351.5803677032,
      "pages_per_visit": 18.7977790997221
    },
    {
      "global_rank": 16521,
      "category_rank": 99,
      "domain": "dusk.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3031659.76585867,
      "curr_month_visits": 3031659.76585867,
      "unique_users": 1677608.11931367,
      "pages_per_visit": 4.62525477767587
    },
    {
      "global_rank": 282773,
      "category_rank": 100,
      "domain": "somanyceramics.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 146383.167234887,
      "curr_month_visits": 146383.167234887,
      "unique_users": 95972.2001910403,
      "pages_per_visit": 3.89375778294179
    },
    {
      "global_rank": 52334,
      "category_rank": 100,
      "domain": "moemax.at",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 797143.027179759,
      "curr_month_visits": 797143.027179759,
      "unique_users": 385297.062675356,
      "pages_per_visit": 4.08016047829128
    },
    {
      "global_rank": 163787,
      "category_rank": 100,
      "domain": "planetnatural.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 508890.059869963,
      "curr_month_visits": 508890.059869963,
      "unique_users": 351324.40162648,
      "pages_per_visit": 1.46484954371626
    },
    {
      "global_rank": 16625,
      "category_rank": 100,
      "domain": "architecturaldigest.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 5816316.95956318,
      "curr_month_visits": 5816316.95956318,
      "unique_users": 4216696.22672622,
      "pages_per_visit": 1.55904333085529
    },
    {
      "global_rank": 78893,
      "category_rank": 100,
      "domain": "spritmonitor.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 630164.658125403,
      "curr_month_visits": 630164.658125403,
      "unique_users": 325951.764061782,
      "pages_per_visit": 4.49571472141942
    },
    {
      "global_rank": 165606,
      "category_rank": 101,
      "domain": "organic-mix.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 199235.75611175,
      "curr_month_visits": 199235.75611175,
      "unique_users": 120869.408172195,
      "pages_per_visit": 2.4372537763405
    },
    {
      "global_rank": 16714,
      "category_rank": 101,
      "domain": "cozyearth.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1611693.9351233,
      "curr_month_visits": 1611693.9351233,
      "unique_users": 1018462.60553557,
      "pages_per_visit": 4.82906809396153
    },
    {
      "global_rank": 306557,
      "category_rank": 101,
      "domain": "arquitetodebolso.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 203739.944445193,
      "curr_month_visits": 203739.944445193,
      "unique_users": 127454.968047788,
      "pages_per_visit": 2.10228140854999
    },
    {
      "global_rank": 81668,
      "category_rank": 101,
      "domain": "astalegale.net",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 625594.390355484,
      "curr_month_visits": 625594.390355484,
      "unique_users": 240069.479313595,
      "pages_per_visit": 5.03805538983958
    },
    {
      "global_rank": 52827,
      "category_rank": 101,
      "domain": "panhomestores.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 901527.407720784,
      "curr_month_visits": 901527.407720784,
      "unique_users": 479622.366387068,
      "pages_per_visit": 4.24112355027229
    },
    {
      "global_rank": 83457,
      "category_rank": 102,
      "domain": "zorgkiezer.nl",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 309433.014511316,
      "curr_month_visits": 309433.014511316,
      "unique_users": 180073.274918301,
      "pages_per_visit": 2.47072036952462
    },
    {
      "global_rank": 308473,
      "category_rank": 102,
      "domain": "familiabim.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 74920.2635961277,
      "curr_month_visits": 74920.2635961277,
      "unique_users": 33248.9830266335,
      "pages_per_visit": 6.24408570348174
    },
    {
      "global_rank": 166995,
      "category_rank": 102,
      "domain": "planfor.fr",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 190589.895687171,
      "curr_month_visits": 190589.895687171,
      "unique_users": 129576.809272801,
      "pages_per_visit": 4.89234044956301
    },
    {
      "global_rank": 16780,
      "category_rank": 102,
      "domain": "portavolantino.it",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2091252.25491072,
      "curr_month_visits": 2091252.25491072,
      "unique_users": 1434716.96383433,
      "pages_per_visit": 6.34213676376722
    },
    {
      "global_rank": 53050,
      "category_rank": 102,
      "domain": "joybird.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 794288.208236625,
      "curr_month_visits": 794288.208236625,
      "unique_users": 468164.157475553,
      "pages_per_visit": 3.91621953899595
    },
    {
      "global_rank": 88254,
      "category_rank": 103,
      "domain": "construct101.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 881506.992385674,
      "curr_month_visits": 881506.992385674,
      "unique_users": 90265.5535192882,
      "pages_per_visit": 1.90269015937452
    },
    {
      "global_rank": 16815,
      "category_rank": 103,
      "domain": "zoro.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 4341227.12004937,
      "curr_month_visits": 4341227.12004937,
      "unique_users": 2613161.46880372,
      "pages_per_visit": 2.94463797779733
    },
    {
      "global_rank": 167082,
      "category_rank": 103,
      "domain": "semena-partner.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 226856.34698533,
      "curr_month_visits": 226856.34698533,
      "unique_users": 129730.275430356,
      "pages_per_visit": 5.2777475399486
    },
    {
      "global_rank": 311820,
      "category_rank": 103,
      "domain": "suprimmo.bg",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 103174.936958655,
      "curr_month_visits": 103174.936958655,
      "unique_users": 39032.6647790048,
      "pages_per_visit": 3.94639769750367
    },
    {
      "global_rank": 54343,
      "category_rank": 103,
      "domain": "ashleyhomestore.ca",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 770223.184968867,
      "curr_month_visits": 770223.184968867,
      "unique_users": 406722.518823077,
      "pages_per_visit": 4.44222998603023
    },
    {
      "global_rank": 17016,
      "category_rank": 104,
      "domain": "nfm.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2448631.7434526,
      "curr_month_visits": 2448631.7434526,
      "unique_users": 1180802.65781962,
      "pages_per_visit": 4.65228057666938
    },
    {
      "global_rank": 167916,
      "category_rank": 104,
      "domain": "yates.com.au",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 356018.088837913,
      "curr_month_visits": 356018.088837913,
      "unique_users": 210877.965188969,
      "pages_per_visit": 1.72973069762084
    },
    {
      "global_rank": 89665,
      "category_rank": 104,
      "domain": "reglomobile.fr",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 586394.402547079,
      "curr_month_visits": 586394.402547079,
      "unique_users": 276700.777061257,
      "pages_per_visit": 4.24992315825682
    },
    {
      "global_rank": 315350,
      "category_rank": 104,
      "domain": "haroldelectricals.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 129170.584099596,
      "curr_month_visits": 129170.584099596,
      "unique_users": 75522.585702788,
      "pages_per_visit": 3.1844914210713
    },
    {
      "global_rank": 54743,
      "category_rank": 104,
      "domain": "pfister.ch",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 779656.426627814,
      "curr_month_visits": 779656.426627814,
      "unique_users": 417633.523245507,
      "pages_per_visit": 5.02264941418904
    },
    {
      "global_rank": 316063,
      "category_rank": 105,
      "domain": "drfixit.co.in",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 198223.34555611,
      "curr_month_visits": 198223.34555611,
      "unique_users": 119153.334976152,
      "pages_per_visit": 2.10189323347744
    },
    {
      "global_rank": 55828,
      "category_rank": 105,
      "domain": "made.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 563655.629318115,
      "curr_month_visits": 563655.629318115,
      "unique_users": 328331.840045381,
      "pages_per_visit": 9.86176530235334
    },
    {
      "global_rank": 170431,
      "category_rank": 105,
      "domain": "finegardening.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 459476.600188363,
      "curr_month_visits": 459476.600188363,
      "unique_users": 294027.974416145,
      "pages_per_visit": 1.53200489004851
    },
    {
      "global_rank": 17017,
      "category_rank": 105,
      "domain": "natureetdecouvertes.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1835854.9698155,
      "curr_month_visits": 1835854.9698155,
      "unique_users": 1083664.60116236,
      "pages_per_visit": 4.67782254525144
    },
    {
      "global_rank": 92266,
      "category_rank": 105,
      "domain": "the-pennisaver.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 923079.459922296,
      "curr_month_visits": 923079.459922296,
      "unique_users": 785286.318535064,
      "pages_per_visit": 1.2625822282959
    },
    {
      "global_rank": 170715,
      "category_rank": 106,
      "domain": "123planten.nl",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 299665.090444985,
      "curr_month_visits": 299665.090444985,
      "unique_users": 184180.08226226,
      "pages_per_visit": 2.57137150231654
    },
    {
      "global_rank": 316829,
      "category_rank": 106,
      "domain": "craftsyhacks.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 178463.151346806,
      "curr_month_visits": 178463.151346806,
      "unique_users": 94109.377743415,
      "pages_per_visit": 2.10047616044322
    },
    {
      "global_rank": 17046,
      "category_rank": 106,
      "domain": "harald-nyborg.dk",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3045607.12969611,
      "curr_month_visits": 3045607.12969611,
      "unique_users": 1416349.15326008,
      "pages_per_visit": 4.20030547459471
    },
    {
      "global_rank": 92476,
      "category_rank": 106,
      "domain": "airmiles.nl",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 576468.302387403,
      "curr_month_visits": 576468.302387403,
      "unique_users": 289389.098698124,
      "pages_per_visit": 2.96025760049553
    },
    {
      "global_rank": 56727,
      "category_rank": 106,
      "domain": "laredoute.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 628862.22242329,
      "curr_month_visits": 628862.22242329,
      "unique_users": 302264.152371676,
      "pages_per_visit": 3.88442513142017
    },
    {
      "global_rank": 92722,
      "category_rank": 107,
      "domain": "modernize.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 666308.027992058,
      "curr_month_visits": 666308.027992058,
      "unique_users": 505897.416273039,
      "pages_per_visit": 1.94240963715388
    },
    {
      "global_rank": 319267,
      "category_rank": 107,
      "domain": "fenesta.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 133199.695730067,
      "curr_month_visits": 133199.695730067,
      "unique_users": 75993.2925484898,
      "pages_per_visit": 2.24357308240456
    },
    {
      "global_rank": 56812,
      "category_rank": 107,
      "domain": "vinterior.co",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 835858.271613707,
      "curr_month_visits": 835858.271613707,
      "unique_users": 410770.616897397,
      "pages_per_visit": 5.43318738197868
    },
    {
      "global_rank": 17213,
      "category_rank": 107,
      "domain": "containerstore.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3033288.09397361,
      "curr_month_visits": 3033288.09397361,
      "unique_users": 1822752.3358312,
      "pages_per_visit": 4.61630173653293
    },
    {
      "global_rank": 171829,
      "category_rank": 107,
      "domain": "antonovsad.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 538978.255665782,
      "curr_month_visits": 538978.255665782,
      "unique_users": 386796.615333302,
      "pages_per_visit": 1.27644025595529
    },
    {
      "global_rank": 172515,
      "category_rank": 108,
      "domain": "gardenersworldmagazine.nl",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 300124.968530735,
      "curr_month_visits": 300124.968530735,
      "unique_users": 178173.592658331,
      "pages_per_visit": 3.47592869843585
    },
    {
      "global_rank": 56891,
      "category_rank": 108,
      "domain": "earlysettler.com.au",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 676663.290872801,
      "curr_month_visits": 676663.290872801,
      "unique_users": 340893.274156191,
      "pages_per_visit": 4.4946851359735
    },
    {
      "global_rank": 93006,
      "category_rank": 108,
      "domain": "consumersearch.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 612984.990361908,
      "curr_month_visits": 612984.990361908,
      "unique_users": 477938.422111687,
      "pages_per_visit": 1.69311821359551
    },
    {
      "global_rank": 319281,
      "category_rank": 108,
      "domain": "yinjispace.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 113498.925263409,
      "curr_month_visits": 113498.925263409,
      "unique_users": 40169.0684912261,
      "pages_per_visit": 4.43125469205826
    },
    {
      "global_rank": 17245,
      "category_rank": 108,
      "domain": "kohler.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3526838.4927925,
      "curr_month_visits": 3526838.4927925,
      "unique_users": 1946884.05821404,
      "pages_per_visit": 4.17814951364288
    },
    {
      "global_rank": 325335,
      "category_rank": 109,
      "domain": "thistlewoodfarms.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 138482.980717945,
      "curr_month_visits": 138482.980717945,
      "unique_users": 87509.7602602775,
      "pages_per_visit": 1.56637415472815
    },
    {
      "global_rank": 57296,
      "category_rank": 109,
      "domain": "nordicnest.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 610234.518863813,
      "curr_month_visits": 610234.518863813,
      "unique_users": 343064.65221496,
      "pages_per_visit": 4.88988115959859
    },
    {
      "global_rank": 94610,
      "category_rank": 109,
      "domain": "loxone.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 425300.566590429,
      "curr_month_visits": 425300.566590429,
      "unique_users": 167073.814534799,
      "pages_per_visit": 4.83883937392082
    },
    {
      "global_rank": 172975,
      "category_rank": 109,
      "domain": "yaskravaklumba.com.ua",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 301232.759183676,
      "curr_month_visits": 301232.759183676,
      "unique_users": 170056.973886636,
      "pages_per_visit": 3.59715349420075
    },
    {
      "global_rank": 17589,
      "category_rank": 109,
      "domain": "victorianplumbing.co.uk",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3332651.01318202,
      "curr_month_visits": 3332651.01318202,
      "unique_users": 1580959.87468401,
      "pages_per_visit": 4.26874937939609
    },
    {
      "global_rank": 17683,
      "category_rank": 110,
      "domain": "home.bargains",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2797694.04119687,
      "curr_month_visits": 2797694.04119687,
      "unique_users": 1452362.9127042,
      "pages_per_visit": 4.27425451747224
    },
    {
      "global_rank": 325732,
      "category_rank": 110,
      "domain": "dizajninfo.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 186493.176195524,
      "curr_month_visits": 186493.176195524,
      "unique_users": 87599.5959494059,
      "pages_per_visit": 1.32777846807203
    },
    {
      "global_rank": 95390,
      "category_rank": 110,
      "domain": "which.one",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 448057.443619348,
      "curr_month_visits": 448057.443619348,
      "unique_users": 348223.891599374,
      "pages_per_visit": 1.5364215615718
    },
    {
      "global_rank": 173979,
      "category_rank": 110,
      "domain": "gardenerspath.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 521838.363981706,
      "curr_month_visits": 521838.363981706,
      "unique_users": 366058.822900826,
      "pages_per_visit": 1.45113286880105
    },
    {
      "global_rank": 57404,
      "category_rank": 110,
      "domain": "roselandfurniture.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 654794.542961381,
      "curr_month_visits": 654794.542961381,
      "unique_users": 353250.260962536,
      "pages_per_visit": 4.10641304596574
    },
    {
      "global_rank": 174469,
      "category_rank": 111,
      "domain": "practicalselfreliance.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 366012.657130237,
      "curr_month_visits": 366012.657130237,
      "unique_users": 236189.458507426,
      "pages_per_visit": 2.09426585909673
    },
    {
      "global_rank": 95627,
      "category_rank": 111,
      "domain": "mondomobileweb.it",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 743611.535822641,
      "curr_month_visits": 743611.535822641,
      "unique_users": 285623.27156335,
      "pages_per_visit": 1.77246655963934
    },
    {
      "global_rank": 328242,
      "category_rank": 111,
      "domain": "atelierclassico.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 136053.083804857,
      "curr_month_visits": 136053.083804857,
      "unique_users": 94713.4148210128,
      "pages_per_visit": 1.93078292057822
    },
    {
      "global_rank": 57427,
      "category_rank": 111,
      "domain": "cityfurniture.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 797856.442629726,
      "curr_month_visits": 797856.442629726,
      "unique_users": 449405.990309203,
      "pages_per_visit": 3.78065744802334
    },
    {
      "global_rank": 17705,
      "category_rank": 111,
      "domain": "yankeecandle.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2357862.69386776,
      "curr_month_visits": 2357862.69386776,
      "unique_users": 1217395.62297497,
      "pages_per_visit": 5.06547393240787
    },
    {
      "global_rank": 100903,
      "category_rank": 112,
      "domain": "imynest.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 332784.298806643,
      "curr_month_visits": 332784.298806643,
      "unique_users": 178848.70210683,
      "pages_per_visit": 8.60999693503882
    },
    {
      "global_rank": 57659,
      "category_rank": 112,
      "domain": "admagazine.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1497062.47243935,
      "curr_month_visits": 1497062.47243935,
      "unique_users": 998156.442368636,
      "pages_per_visit": 1.47379003482604
    },
    {
      "global_rank": 329842,
      "category_rank": 112,
      "domain": "alfemo.com.tr",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 86988.7415237277,
      "curr_month_visits": 86988.7415237277,
      "unique_users": 50891.0217898909,
      "pages_per_visit": 4.42920528941137
    },
    {
      "global_rank": 17758,
      "category_rank": 112,
      "domain": "kavehome.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2813851.67952831,
      "curr_month_visits": 2813851.67952831,
      "unique_users": 1449015.23409148,
      "pages_per_visit": 4.09249490664648
    },
    {
      "global_rank": 174611,
      "category_rank": 112,
      "domain": "mazout-on-line.be",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 471531.539727542,
      "curr_month_visits": 471531.539727542,
      "unique_users": 139280.59289022,
      "pages_per_visit": 1.42866769007283
    },
    {
      "global_rank": 12985,
      "category_rank": 112,
      "domain": "homes.co.nz",
      "category": "Home_and_Garden",
      "avg_month_visits": 2693064.19260586,
      "curr_month_visits": 2693064.19260586,
      "unique_users": 1011990.27835304,
      "pages_per_visit": 10.8206466631837
    },
    {
      "global_rank": 57968,
      "category_rank": 113,
      "domain": "anabei.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 637367.318005661,
      "curr_month_visits": 637367.318005661,
      "unique_users": 353968.45553747,
      "pages_per_visit": 4.73434418882327
    },
    {
      "global_rank": 100992,
      "category_rank": 113,
      "domain": "homebuilding.co.uk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 653911.773007842,
      "curr_month_visits": 653911.773007842,
      "unique_users": 455551.706648003,
      "pages_per_visit": 1.54679164673297
    },
    {
      "global_rank": 333016,
      "category_rank": 113,
      "domain": "suadecoracao.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 166216.430220662,
      "curr_month_visits": 166216.430220662,
      "unique_users": 139196.573369002,
      "pages_per_visit": 1.69350629935109
    },
    {
      "global_rank": 17898,
      "category_rank": 113,
      "domain": "maison-travaux.fr",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3788041.41865721,
      "curr_month_visits": 3788041.41865721,
      "unique_users": 1991056.96136399,
      "pages_per_visit": 2.92451298002671
    },
    {
      "global_rank": 175221,
      "category_rank": 113,
      "domain": "decks.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 337757.531375544,
      "curr_month_visits": 337757.531375544,
      "unique_users": 202754.334986247,
      "pages_per_visit": 2.21959583146037
    },
    {
      "global_rank": 335269,
      "category_rank": 114,
      "domain": "photostena.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 103399.271220462,
      "curr_month_visits": 103399.271220462,
      "unique_users": 62831.5995589617,
      "pages_per_visit": 3.83537355629876
    },
    {
      "global_rank": 58552,
      "category_rank": 114,
      "domain": "cozey.ca",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 574995.094589738,
      "curr_month_visits": 574995.094589738,
      "unique_users": 294506.971780323,
      "pages_per_visit": 4.88471581872023
    },
    {
      "global_rank": 176235,
      "category_rank": 114,
      "domain": "tepli4ka.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 237666.773458497,
      "curr_month_visits": 237666.773458497,
      "unique_users": 81110.5588212359,
      "pages_per_visit": 1.49621121409725
    },
    {
      "global_rank": 19239,
      "category_rank": 115,
      "domain": "lampsplus.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2861806.7544289,
      "curr_month_visits": 2861806.7544289,
      "unique_users": 1651857.8358986,
      "pages_per_visit": 4.55117034971169
    },
    {
      "global_rank": 335504,
      "category_rank": 115,
      "domain": "design-homes.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 240174.560471094,
      "curr_month_visits": 240174.560471094,
      "unique_users": 174503.335730709,
      "pages_per_visit": 1.18679739694933
    },
    {
      "global_rank": 101134,
      "category_rank": 115,
      "domain": "shop.scheppach.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 493464.367497536,
      "curr_month_visits": 493464.367497536,
      "unique_users": 273087.416575491,
      "pages_per_visit": 3.21350325683852
    },
    {
      "global_rank": 176427,
      "category_rank": 115,
      "domain": "sadfloxov.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 79131.5934783279,
      "curr_month_visits": 79131.5934783279,
      "unique_users": 34671.8297014235,
      "pages_per_visit": 12.5537506445283
    },
    {
      "global_rank": 58618,
      "category_rank": 115,
      "domain": "furniturerow.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 938412.300884723,
      "curr_month_visits": 938412.300884723,
      "unique_users": 600817.448901363,
      "pages_per_visit": 2.65208498303284
    },
    {
      "global_rank": 58723,
      "category_rank": 116,
      "domain": "silkandsnow.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 640790.840529928,
      "curr_month_visits": 640790.840529928,
      "unique_users": 356931.218252476,
      "pages_per_visit": 4.59338398527571
    },
    {
      "global_rank": 19399,
      "category_rank": 116,
      "domain": "briscoes.co.nz",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2393525.42752887,
      "curr_month_visits": 2393525.42752887,
      "unique_users": 954620.511780852,
      "pages_per_visit": 4.45044771163839
    },
    {
      "global_rank": 177491,
      "category_rank": 116,
      "domain": "directplant.nl",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 334078.79977996,
      "curr_month_visits": 334078.79977996,
      "unique_users": 181834.423472053,
      "pages_per_visit": 2.69285287789775
    },
    {
      "global_rank": 101897,
      "category_rank": 116,
      "domain": "superbrandtools.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 298771.228021249,
      "curr_month_visits": 298771.228021249,
      "unique_users": 190902.396306896,
      "pages_per_visit": 3.12500207594453
    },
    {
      "global_rank": 336843,
      "category_rank": 116,
      "domain": "decure.in",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 126689.848539071,
      "curr_month_visits": 126689.848539071,
      "unique_users": 70389.1915728137,
      "pages_per_visit": 2.75212003713713
    },
    {
      "global_rank": 177805,
      "category_rank": 117,
      "domain": "rostok-pitomnik.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 242725.394855813,
      "curr_month_visits": 242725.394855813,
      "unique_users": 143850.446967005,
      "pages_per_visit": 5.02600290278472
    },
    {
      "global_rank": 105102,
      "category_rank": 117,
      "domain": "networx.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 397033.150238588,
      "curr_month_visits": 397033.150238588,
      "unique_users": 273835.694615023,
      "pages_per_visit": 2.80883910523259
    },
    {
      "global_rank": 339289,
      "category_rank": 117,
      "domain": "interiordesign.net",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 136444.215530141,
      "curr_month_visits": 136444.215530141,
      "unique_users": 74285.4744580965,
      "pages_per_visit": 1.94191643239074
    },
    {
      "global_rank": 19412,
      "category_rank": 117,
      "domain": "benjaminmoore.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3002942.94499931,
      "curr_month_visits": 3002942.94499931,
      "unique_users": 1734935.26188878,
      "pages_per_visit": 4.32350487912466
    },
    {
      "global_rank": 59297,
      "category_rank": 117,
      "domain": "selsey.pl",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 778257.209635978,
      "curr_month_visits": 778257.209635978,
      "unique_users": 404607.425650625,
      "pages_per_visit": 3.77351951616447
    },
    {
      "global_rank": 59333,
      "category_rank": 118,
      "domain": "finnishdesignshop.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 645167.132083663,
      "curr_month_visits": 645167.132083663,
      "unique_users": 339129.702554641,
      "pages_per_visit": 4.07821324094385
    },
    {
      "global_rank": 19435,
      "category_rank": 118,
      "domain": "rugs.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2399712.67410649,
      "curr_month_visits": 2399712.67410649,
      "unique_users": 1312170.93785664,
      "pages_per_visit": 5.68115076801533
    },
    {
      "global_rank": 178432,
      "category_rank": 118,
      "domain": "pro100-cvety.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 225411.651664183,
      "curr_month_visits": 225411.651664183,
      "unique_users": 121612.688530098,
      "pages_per_visit": 1.8749466627671
    },
    {
      "global_rank": 106103,
      "category_rank": 118,
      "domain": "sostariffe.it",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 696417.272036746,
      "curr_month_visits": 696417.272036746,
      "unique_users": 519398.475914022,
      "pages_per_visit": 1.88809275969007
    },
    {
      "global_rank": 340676,
      "category_rank": 118,
      "domain": "diskill.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 164641.658242593,
      "curr_month_visits": 164641.658242593,
      "unique_users": 45543.1963285894,
      "pages_per_visit": 4.94237679966474
    },
    {
      "global_rank": 19790,
      "category_rank": 119,
      "domain": "thaiwatsadu.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2383127.95848344,
      "curr_month_visits": 2383127.95848344,
      "unique_users": 1055100.81561851,
      "pages_per_visit": 6.48814953161822
    },
    {
      "global_rank": 106879,
      "category_rank": 119,
      "domain": "hellotushy.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 378645.234089083,
      "curr_month_visits": 378645.234089083,
      "unique_users": 233198.014002905,
      "pages_per_visit": 3.23998028590588
    },
    {
      "global_rank": 346944,
      "category_rank": 119,
      "domain": "hrjohnsonindia.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 119186.165606098,
      "curr_month_visits": 119186.165606098,
      "unique_users": 67361.9865118902,
      "pages_per_visit": 4.5704656823789
    },
    {
      "global_rank": 59490,
      "category_rank": 119,
      "domain": "dreamcloudsleep.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1055629.44092406,
      "curr_month_visits": 1055629.44092406,
      "unique_users": 705130.296500048,
      "pages_per_visit": 2.27713463161241
    },
    {
      "global_rank": 183122,
      "category_rank": 119,
      "domain": "gartenjournal.net",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 536348.332691279,
      "curr_month_visits": 536348.332691279,
      "unique_users": 361721.024619246,
      "pages_per_visit": 1.61886376150159
    },
    {
      "global_rank": 107254,
      "category_rank": 120,
      "domain": "todayshomeowner.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 1306164.56328983,
      "curr_month_visits": 1306164.56328983,
      "unique_users": 1026726.8551214,
      "pages_per_visit": 1.32617573681548
    },
    {
      "global_rank": 59582,
      "category_rank": 120,
      "domain": "emma-sleep.co.uk",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 803968.51636753,
      "curr_month_visits": 803968.51636753,
      "unique_users": 430631.585286698,
      "pages_per_visit": 3.49280583832087
    },
    {
      "global_rank": 351406,
      "category_rank": 120,
      "domain": "hindwareappliances.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 84486.4386616345,
      "curr_month_visits": 84486.4386616345,
      "unique_users": 49006.1148818673,
      "pages_per_visit": 2.63222432818836
    },
    {
      "global_rank": 184865,
      "category_rank": 120,
      "domain": "pelckmans.net",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 242512.93084839,
      "curr_month_visits": 242512.93084839,
      "unique_users": 129459.769263911,
      "pages_per_visit": 4.10333942793686
    },
    {
      "global_rank": 19805,
      "category_rank": 120,
      "domain": "lakeland.co.uk",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2298591.98087562,
      "curr_month_visits": 2298591.98087562,
      "unique_users": 1561198.9001347,
      "pages_per_visit": 3.56505360316256
    },
    {
      "global_rank": 19837,
      "category_rank": 121,
      "domain": "leevalley.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2025285.16141781,
      "curr_month_visits": 2025285.16141781,
      "unique_users": 994099.819117141,
      "pages_per_visit": 4.77158680305752
    },
    {
      "global_rank": 360250,
      "category_rank": 121,
      "domain": "residencesupply.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 81021.9601432843,
      "curr_month_visits": 81021.9601432843,
      "unique_users": 43714.3180795766,
      "pages_per_visit": 4.73966037631054
    },
    {
      "global_rank": 59794,
      "category_rank": 121,
      "domain": "zurbrueggen.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 662669.48668678,
      "curr_month_visits": 662669.48668678,
      "unique_users": 388118.614490456,
      "pages_per_visit": 4.24812674114023
    },
    {
      "global_rank": 189246,
      "category_rank": 121,
      "domain": "homesteadandchill.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 360544.351054043,
      "curr_month_visits": 360544.351054043,
      "unique_users": 203865.496548916,
      "pages_per_visit": 1.6286456475026
    },
    {
      "global_rank": 107456,
      "category_rank": 121,
      "domain": "mercateo.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 299350.67694212,
      "curr_month_visits": 299350.67694212,
      "unique_users": 139309.855636249,
      "pages_per_visit": 8.713357613781
    },
    {
      "global_rank": 369772,
      "category_rank": 122,
      "domain": "aquantindia.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 94485.3953403231,
      "curr_month_visits": 94485.3953403231,
      "unique_users": 60024.8361064781,
      "pages_per_visit": 2.34511279149039
    },
    {
      "global_rank": 60811,
      "category_rank": 122,
      "domain": "beaconlighting.com.au",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 645334.68641779,
      "curr_month_visits": 645334.68641779,
      "unique_users": 330954.935653046,
      "pages_per_visit": 5.42089613653485
    },
    {
      "global_rank": 107460,
      "category_rank": 122,
      "domain": "heatinghelp.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 496311.150333076,
      "curr_month_visits": 496311.150333076,
      "unique_users": 305686.233203679,
      "pages_per_visit": 2.347103354298
    },
    {
      "global_rank": 190069,
      "category_rank": 122,
      "domain": "apiculture.net",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 249044.116784761,
      "curr_month_visits": 249044.116784761,
      "unique_users": 115349.641521833,
      "pages_per_visit": 2.92516008684197
    },
    {
      "global_rank": 20083,
      "category_rank": 122,
      "domain": "jysk.dk",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2323996.295986,
      "curr_month_visits": 2323996.295986,
      "unique_users": 1122885.79317001,
      "pages_per_visit": 4.8845901222722
    },
    {
      "global_rank": 60947,
      "category_rank": 123,
      "domain": "burrow.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 717558.818665582,
      "curr_month_visits": 717558.818665582,
      "unique_users": 422447.267247667,
      "pages_per_visit": 4.2014268028199
    },
    {
      "global_rank": 371479,
      "category_rank": 123,
      "domain": "inmyownstyle.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 135938.836385876,
      "curr_month_visits": 135938.836385876,
      "unique_users": 85503.1703239647,
      "pages_per_visit": 1.8085919311915
    },
    {
      "global_rank": 20124,
      "category_rank": 123,
      "domain": "robertdyas.co.uk",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2523488.46283807,
      "curr_month_visits": 2523488.46283807,
      "unique_users": 1572714.21301027,
      "pages_per_visit": 3.31721269630524
    },
    {
      "global_rank": 190748,
      "category_rank": 123,
      "domain": "succulentsbox.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 250926.409858196,
      "curr_month_visits": 250926.409858196,
      "unique_users": 138210.522816421,
      "pages_per_visit": 3.31198561982052
    },
    {
      "global_rank": 108658,
      "category_rank": 123,
      "domain": "mccoys.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 385408.169637209,
      "curr_month_visits": 385408.169637209,
      "unique_users": 195860.015527288,
      "pages_per_visit": 5.25509567363416
    },
    {
      "global_rank": 109053,
      "category_rank": 124,
      "domain": "condominioweb.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 520815.051565305,
      "curr_month_visits": 520815.051565305,
      "unique_users": 353327.277461839,
      "pages_per_visit": 2.12056932386932
    },
    {
      "global_rank": 374988,
      "category_rank": 124,
      "domain": "esscobathware.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 74731.6081271485,
      "curr_month_visits": 74731.6081271485,
      "unique_users": 41908.7436808023,
      "pages_per_visit": 3.92663990711132
    },
    {
      "global_rank": 61189,
      "category_rank": 124,
      "domain": "actus-interior.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 759238.222381128,
      "curr_month_visits": 759238.222381128,
      "unique_users": 421541.473336209,
      "pages_per_visit": 4.41447298983632
    },
    {
      "global_rank": 190850,
      "category_rank": 124,
      "domain": "shop.blueland.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 178788.114610849,
      "curr_month_visits": 178788.114610849,
      "unique_users": 103991.417254283,
      "pages_per_visit": 4.52504928051673
    },
    {
      "global_rank": 20391,
      "category_rank": 124,
      "domain": "thecompanystore.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2092992.94911868,
      "curr_month_visits": 2092992.94911868,
      "unique_users": 1302510.562374,
      "pages_per_visit": 3.76398575291275
    },
    {
      "global_rank": 61281,
      "category_rank": 125,
      "domain": "mathishome.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 599029.121882239,
      "curr_month_visits": 599029.121882239,
      "unique_users": 320558.355482435,
      "pages_per_visit": 3.47279977175269
    },
    {
      "global_rank": 109196,
      "category_rank": 125,
      "domain": "vurderingsportalen.dk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 321663.399853695,
      "curr_month_visits": 321663.399853695,
      "unique_users": 181110.569852518,
      "pages_per_visit": 4.72024797095864
    },
    {
      "global_rank": 20497,
      "category_rank": 125,
      "domain": "brico.be",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2539519.47694059,
      "curr_month_visits": 2539519.47694059,
      "unique_users": 1147533.45883962,
      "pages_per_visit": 4.836323967251
    },
    {
      "global_rank": 14204,
      "category_rank": 125,
      "domain": "bayut.com",
      "category": "Home_and_Garden",
      "avg_month_visits": 3922789.17562769,
      "curr_month_visits": 3922789.17562769,
      "unique_users": 1643591.40425378,
      "pages_per_visit": 5.86456663207819
    },
    {
      "global_rank": 190917,
      "category_rank": 125,
      "domain": "kokopelli-semences.fr",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 209482.266213774,
      "curr_month_visits": 209482.266213774,
      "unique_users": 105768.195289469,
      "pages_per_visit": 4.71608686199805
    },
    {
      "global_rank": 379869,
      "category_rank": 125,
      "domain": "westgard.com.ua",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 85068.9381833065,
      "curr_month_visits": 85068.9381833065,
      "unique_users": 43299.0244703955,
      "pages_per_visit": 1.69811960496433
    },
    {
      "global_rank": 195262,
      "category_rank": 126,
      "domain": "dengarden.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 437348.149366179,
      "curr_month_visits": 437348.149366179,
      "unique_users": 307037.68355541,
      "pages_per_visit": 1.38438757498547
    },
    {
      "global_rank": 20717,
      "category_rank": 126,
      "domain": "bestmebelshop.ru",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2017311.88835539,
      "curr_month_visits": 2017311.88835539,
      "unique_users": 913338.905206621,
      "pages_per_visit": 5.53412109526524
    },
    {
      "global_rank": 61454,
      "category_rank": 126,
      "domain": "schoener-wohnen.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 996076.261298459,
      "curr_month_visits": 996076.261298459,
      "unique_users": 725226.945971707,
      "pages_per_visit": 2.73036858697214
    },
    {
      "global_rank": 109291,
      "category_rank": 126,
      "domain": "lav-det-selv.dk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 552537.941671526,
      "curr_month_visits": 552537.941671526,
      "unique_users": 307764.122139008,
      "pages_per_visit": 2.16173497175493
    },
    {
      "global_rank": 383579,
      "category_rank": 126,
      "domain": "legrand.co.in",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 78318.8332938015,
      "curr_month_visits": 78318.8332938015,
      "unique_users": 49620.7045128061,
      "pages_per_visit": 4.12818238992709
    },
    {
      "global_rank": 21038,
      "category_rank": 127,
      "domain": "adt.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2839799.40304995,
      "curr_month_visits": 2839799.40304995,
      "unique_users": 1387644.42658244,
      "pages_per_visit": 4.71249970892489
    },
    {
      "global_rank": 61467,
      "category_rank": 127,
      "domain": "local.biglots.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1087036.59740344,
      "curr_month_visits": 1087036.59740344,
      "unique_users": 753881.077533787,
      "pages_per_visit": 2.00575156198717
    },
    {
      "global_rank": 197102,
      "category_rank": 127,
      "domain": "procvetok.by",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 246535.435904703,
      "curr_month_visits": 246535.435904703,
      "unique_users": 81558.6454970504,
      "pages_per_visit": 4.49423296038396
    },
    {
      "global_rank": 109428,
      "category_rank": 127,
      "domain": "milieucentraal.nl",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 551448.242875639,
      "curr_month_visits": 551448.242875639,
      "unique_users": 406805.83877995,
      "pages_per_visit": 1.68333396091617
    },
    {
      "global_rank": 385994,
      "category_rank": 127,
      "domain": "tadgikov.net",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 29977.2764991671,
      "curr_month_visits": 29977.2764991671,
      "unique_users": 21398.7416340659,
      "pages_per_visit": 10.1089811266772
    },
    {
      "global_rank": 386065,
      "category_rank": 128,
      "domain": "infurnia.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 62721.5154529714,
      "curr_month_visits": 62721.5154529714,
      "unique_users": 12300.8480394168,
      "pages_per_visit": 6.03094359701184
    },
    {
      "global_rank": 109763,
      "category_rank": 128,
      "domain": "internewsgroup.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 704026.576381308,
      "curr_month_visits": 704026.576381308,
      "unique_users": 175863.586769161,
      "pages_per_visit": 1.8351286793398
    },
    {
      "global_rank": 61804,
      "category_rank": 128,
      "domain": "sleepcountry.ca",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 733819.35916019,
      "curr_month_visits": 733819.35916019,
      "unique_users": 464226.103376622,
      "pages_per_visit": 3.43471907172758
    },
    {
      "global_rank": 197407,
      "category_rank": 128,
      "domain": "opt-hoz.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 162911.856633105,
      "curr_month_visits": 162911.856633105,
      "unique_users": 72479.6993344674,
      "pages_per_visit": 6.26537264373246
    },
    {
      "global_rank": 21229,
      "category_rank": 128,
      "domain": "leroymerlin.gr",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1933394.42911442,
      "curr_month_visits": 1933394.42911442,
      "unique_users": 868395.178148562,
      "pages_per_visit": 6.22424404917756
    },
    {
      "global_rank": 112712,
      "category_rank": 129,
      "domain": "aeldresagen.dk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 381694.778231289,
      "curr_month_visits": 381694.778231289,
      "unique_users": 234263.986284191,
      "pages_per_visit": 3.47725701104961
    },
    {
      "global_rank": 21368,
      "category_rank": 129,
      "domain": "rugsusa.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1927569.94128786,
      "curr_month_visits": 1927569.94128786,
      "unique_users": 993057.843859312,
      "pages_per_visit": 7.58759149242478
    },
    {
      "global_rank": 391433,
      "category_rank": 129,
      "domain": "hafeleindia.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 106474.118627849,
      "curr_month_visits": 106474.118627849,
      "unique_users": 65370.8174095538,
      "pages_per_visit": 3.26383272008615
    },
    {
      "global_rank": 198168,
      "category_rank": 129,
      "domain": "green-rocket.jp",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 245572.706304031,
      "curr_month_visits": 245572.706304031,
      "unique_users": 144848.129951344,
      "pages_per_visit": 2.02347299999598
    },
    {
      "global_rank": 62048,
      "category_rank": 129,
      "domain": "bassettfurniture.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 598836.239888159,
      "curr_month_visits": 598836.239888159,
      "unique_users": 346987.793191201,
      "pages_per_visit": 3.01674568408532
    },
    {
      "global_rank": 62068,
      "category_rank": 130,
      "domain": "meublesrd.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 599518.663866033,
      "curr_month_visits": 599518.663866033,
      "unique_users": 334686.975520308,
      "pages_per_visit": 4.37157509400667
    },
    {
      "global_rank": 391456,
      "category_rank": 130,
      "domain": "aequip.gr",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 49360.1509665338,
      "curr_month_visits": 49360.1509665338,
      "unique_users": 12911.8842666204,
      "pages_per_visit": 15.7331468088278
    },
    {
      "global_rank": 116424,
      "category_rank": 130,
      "domain": "bricozone.be",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 485616.687865997,
      "curr_month_visits": 485616.687865997,
      "unique_users": 303769.1552954,
      "pages_per_visit": 1.92619526190882
    },
    {
      "global_rank": 198292,
      "category_rank": 130,
      "domain": "posadka.com.ua",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 210967.961765722,
      "curr_month_visits": 210967.961765722,
      "unique_users": 91457.2535362387,
      "pages_per_visit": 5.42076096635133
    },
    {
      "global_rank": 21424,
      "category_rank": 130,
      "domain": "ouestfrance-immo.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2715004.62258764,
      "curr_month_visits": 2715004.62258764,
      "unique_users": 904493.158913109,
      "pages_per_visit": 5.16505722843976
    },
    {
      "global_rank": 198513,
      "category_rank": 131,
      "domain": "gaissmayer.de",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 219669.728295308,
      "curr_month_visits": 219669.728295308,
      "unique_users": 101826.988119011,
      "pages_per_visit": 5.6675437780041
    },
    {
      "global_rank": 391702,
      "category_rank": 131,
      "domain": "drewandjonathan.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 118460.318390251,
      "curr_month_visits": 118460.318390251,
      "unique_users": 73073.4556660484,
      "pages_per_visit": 2.3194067366479
    },
    {
      "global_rank": 62895,
      "category_rank": 131,
      "domain": "furlenco.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 876084.087782212,
      "curr_month_visits": 876084.087782212,
      "unique_users": 523507.835154727,
      "pages_per_visit": 2.98993070965507
    },
    {
      "global_rank": 116802,
      "category_rank": 131,
      "domain": "gethuman.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 422336.401646337,
      "curr_month_visits": 422336.401646337,
      "unique_users": 296762.733916949,
      "pages_per_visit": 2.35862530785457
    },
    {
      "global_rank": 21521,
      "category_rank": 131,
      "domain": "maxsold.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1559873.79421331,
      "curr_month_visits": 1559873.79421331,
      "unique_users": 307926.919518516,
      "pages_per_visit": 12.0325638495902
    },
    {
      "global_rank": 199701,
      "category_rank": 132,
      "domain": "baranoie.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 184783.757794637,
      "curr_month_visits": 184783.757794637,
      "unique_users": 53624.7462128051,
      "pages_per_visit": 5.12299050777113
    },
    {
      "global_rank": 62901,
      "category_rank": 132,
      "domain": "gosearches.net",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 1012521.9464833,
      "curr_month_visits": 1012521.9464833,
      "unique_users": 755504.614026526,
      "pages_per_visit": 1.72167964354202
    },
    {
      "global_rank": 392552,
      "category_rank": 132,
      "domain": "elicaindia.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 110927.493868306,
      "curr_month_visits": 110927.493868306,
      "unique_users": 67752.1984714993,
      "pages_per_visit": 2.4832019062903
    },
    {
      "global_rank": 21559,
      "category_rank": 132,
      "domain": "blinds-2go.co.uk",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2169712.7655825,
      "curr_month_visits": 2169712.7655825,
      "unique_users": 1064410.16074574,
      "pages_per_visit": 6.2593481894315
    },
    {
      "global_rank": 117157,
      "category_rank": 132,
      "domain": "kleineskraftwerk.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 574225.43786203,
      "curr_month_visits": 574225.43786203,
      "unique_users": 271893.94264987,
      "pages_per_visit": 1.87234775987974
    },
    {
      "global_rank": 118031,
      "category_rank": 133,
      "domain": "sme.it",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 231624.97628037,
      "curr_month_visits": 231624.97628037,
      "unique_users": 153775.862887042,
      "pages_per_visit": 3.49609316787185
    },
    {
      "global_rank": 21830,
      "category_rank": 133,
      "domain": "hisense.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2316581.18093349,
      "curr_month_visits": 2316581.18093349,
      "unique_users": 750546.382911247,
      "pages_per_visit": 8.04647310936785
    },
    {
      "global_rank": 65378,
      "category_rank": 133,
      "domain": "revivalrugs.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 627525.803337241,
      "curr_month_visits": 627525.803337241,
      "unique_users": 323383.620632185,
      "pages_per_visit": 6.57497647139548
    },
    {
      "global_rank": 403192,
      "category_rank": 133,
      "domain": "brugman.nl",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 81951.3665057603,
      "curr_month_visits": 81951.3665057603,
      "unique_users": 54458.4993962629,
      "pages_per_visit": 3.50180451111759
    },
    {
      "global_rank": 200391,
      "category_rank": 133,
      "domain": "uekipedia.jp",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 238213.830922265,
      "curr_month_visits": 238213.830922265,
      "unique_users": 165559.509050724,
      "pages_per_visit": 2.42606441705719
    },
    {
      "global_rank": 201838,
      "category_rank": 134,
      "domain": "adenium-doma.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 168006.172364857,
      "curr_month_visits": 168006.172364857,
      "unique_users": 63300.8453352511,
      "pages_per_visit": 5.5069157096972
    },
    {
      "global_rank": 22398,
      "category_rank": 134,
      "domain": "hubo.be",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2272990.41953701,
      "curr_month_visits": 2272990.41953701,
      "unique_users": 1050101.69882868,
      "pages_per_visit": 4.67092142819345
    },
    {
      "global_rank": 66560,
      "category_rank": 134,
      "domain": "jysk.co.uk",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 733637.470762972,
      "curr_month_visits": 733637.470762972,
      "unique_users": 411114.584846593,
      "pages_per_visit": 4.16250381086478
    },
    {
      "global_rank": 119942,
      "category_rank": 134,
      "domain": "einhell.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 375186.447464728,
      "curr_month_visits": 375186.447464728,
      "unique_users": 246621.68945902,
      "pages_per_visit": 3.74278494990697
    },
    {
      "global_rank": 405139,
      "category_rank": 134,
      "domain": "remont-volot.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 136726.750686768,
      "curr_month_visits": 136726.750686768,
      "unique_users": 67035.8868622627,
      "pages_per_visit": 1.70314143595545
    },
    {
      "global_rank": 120723,
      "category_rank": 135,
      "domain": "consumer.es",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 708255.709090197,
      "curr_month_visits": 708255.709090197,
      "unique_users": 491803.82979273,
      "pages_per_visit": 1.60332082687604
    },
    {
      "global_rank": 67214,
      "category_rank": 135,
      "domain": "simbasleep.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 752103.244154441,
      "curr_month_visits": 752103.244154441,
      "unique_users": 441765.919657973,
      "pages_per_visit": 3.5256581849973
    },
    {
      "global_rank": 202579,
      "category_rank": 135,
      "domain": "orchidroots.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 151737.703149618,
      "curr_month_visits": 151737.703149618,
      "unique_users": 63175.7704254875,
      "pages_per_visit": 2.79894641701057
    },
    {
      "global_rank": 22408,
      "category_rank": 135,
      "domain": "tractorhouse.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2544866.38739044,
      "curr_month_visits": 2544866.38739044,
      "unique_users": 962210.051982508,
      "pages_per_visit": 5.15471542107001
    },
    {
      "global_rank": 408223,
      "category_rank": 135,
      "domain": "goldmedalindia.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 102508.189395828,
      "curr_month_visits": 102508.189395828,
      "unique_users": 56421.5387750893,
      "pages_per_visit": 2.02194861455385
    },
    {
      "global_rank": 67897,
      "category_rank": 136,
      "domain": "1stopbedrooms.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 719400.640922787,
      "curr_month_visits": 719400.640922787,
      "unique_users": 413355.990098179,
      "pages_per_visit": 3.22407217164917
    },
    {
      "global_rank": 121179,
      "category_rank": 136,
      "domain": "kingfisher.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 307604.052600065,
      "curr_month_visits": 307604.052600065,
      "unique_users": 71745.0388720115,
      "pages_per_visit": 7.91589839727124
    },
    {
      "global_rank": 408413,
      "category_rank": 136,
      "domain": "fancyhouse-design.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 99666.2710741444,
      "curr_month_visits": 99666.2710741444,
      "unique_users": 47674.3132027141,
      "pages_per_visit": 2.4348591139435
    },
    {
      "global_rank": 203053,
      "category_rank": 136,
      "domain": "edenkert.hu",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 331472.746327135,
      "curr_month_visits": 331472.746327135,
      "unique_users": 184019.904909834,
      "pages_per_visit": 1.51328604858522
    },
    {
      "global_rank": 22569,
      "category_rank": 136,
      "domain": "imerco.dk",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1602487.8516612,
      "curr_month_visits": 1602487.8516612,
      "unique_users": 897636.106748905,
      "pages_per_visit": 4.56418336279671
    },
    {
      "global_rank": 68506,
      "category_rank": 137,
      "domain": "wfcdn.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 956258.872366036,
      "curr_month_visits": 956258.872366036,
      "unique_users": 690343.594863182,
      "pages_per_visit": 1.63640868466888
    },
    {
      "global_rank": 121553,
      "category_rank": 137,
      "domain": "checkbook.org",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 276568.508422448,
      "curr_month_visits": 276568.508422448,
      "unique_users": 161675.179651634,
      "pages_per_visit": 4.28717435325457
    },
    {
      "global_rank": 203445,
      "category_rank": 137,
      "domain": "bonsainut.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 258835.7924435,
      "curr_month_visits": 258835.7924435,
      "unique_users": 109319.028946709,
      "pages_per_visit": 2.80050633143012
    },
    {
      "global_rank": 22967,
      "category_rank": 137,
      "domain": "obi.at",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2841888.9334573,
      "curr_month_visits": 2841888.9334573,
      "unique_users": 1300815.2652754,
      "pages_per_visit": 3.55967810210236
    },
    {
      "global_rank": 411821,
      "category_rank": 137,
      "domain": "lorddecor.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 94876.8175369457,
      "curr_month_visits": 94876.8175369457,
      "unique_users": 55976.849959924,
      "pages_per_visit": 1.80146588176687
    },
    {
      "global_rank": 122925,
      "category_rank": 138,
      "domain": "miele.it",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 277730.168120463,
      "curr_month_visits": 277730.168120463,
      "unique_users": 153058.366654225,
      "pages_per_visit": 3.82332933128977
    },
    {
      "global_rank": 416338,
      "category_rank": 138,
      "domain": "roomle.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 79739.2168300435,
      "curr_month_visits": 79739.2168300435,
      "unique_users": 36279.9103313365,
      "pages_per_visit": 2.95250479862973
    },
    {
      "global_rank": 68566,
      "category_rank": 138,
      "domain": "edinos.pl",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 772042.40058145,
      "curr_month_visits": 772042.40058145,
      "unique_users": 456178.575276228,
      "pages_per_visit": 3.22007647775354
    },
    {
      "global_rank": 23073,
      "category_rank": 138,
      "domain": "homeadvisor.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3463422.9936787,
      "curr_month_visits": 3463422.9936787,
      "unique_users": 2186656.06520717,
      "pages_per_visit": 2.81238962557681
    },
    {
      "global_rank": 417687,
      "category_rank": 139,
      "domain": "simpolo.net",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 89603.56061138,
      "curr_month_visits": 89603.56061138,
      "unique_users": 46587.3227269582,
      "pages_per_visit": 3.90103991472534
    },
    {
      "global_rank": 206107,
      "category_rank": 139,
      "domain": "24garten.de",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 248246.682737701,
      "curr_month_visits": 248246.682737701,
      "unique_users": 177405.541144267,
      "pages_per_visit": 1.36076449105339
    },
    {
      "global_rank": 123383,
      "category_rank": 139,
      "domain": "ikea.is",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 280806.151276883,
      "curr_month_visits": 280806.151276883,
      "unique_users": 105267.471165323,
      "pages_per_visit": 6.5961627419731
    },
    {
      "global_rank": 23110,
      "category_rank": 139,
      "domain": "elle.co.kr",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2724403.88729679,
      "curr_month_visits": 2724403.88729679,
      "unique_users": 874631.810301472,
      "pages_per_visit": 2.90543940412111
    },
    {
      "global_rank": 68625,
      "category_rank": 139,
      "domain": "flexispot.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 678901.211533717,
      "curr_month_visits": 678901.211533717,
      "unique_users": 390620.292791001,
      "pages_per_visit": 2.84381973282531
    },
    {
      "global_rank": 206978,
      "category_rank": 140,
      "domain": "zahradnictvi-flos.cz",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 240623.829095229,
      "curr_month_visits": 240623.829095229,
      "unique_users": 125841.619181863,
      "pages_per_visit": 3.7500286311294
    },
    {
      "global_rank": 68954,
      "category_rank": 140,
      "domain": "meble.pl",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 620397.93911187,
      "curr_month_visits": 620397.93911187,
      "unique_users": 367873.784358426,
      "pages_per_visit": 4.05655918651864
    },
    {
      "global_rank": 418181,
      "category_rank": 140,
      "domain": "b0aa600df9934664bf4b.sharepoint.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 71850.0968314796,
      "curr_month_visits": 71850.0968314796,
      "unique_users": 5177.00715810002,
      "pages_per_visit": 6.45905791518991
    },
    {
      "global_rank": 23201,
      "category_rank": 140,
      "domain": "komfort.pl",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2277106.97250793,
      "curr_month_visits": 2277106.97250793,
      "unique_users": 1092574.58518067,
      "pages_per_visit": 3.9645105322347
    },
    {
      "global_rank": 123851,
      "category_rank": 140,
      "domain": "roommates.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 280565.773691779,
      "curr_month_visits": 280565.773691779,
      "unique_users": 107136.538222258,
      "pages_per_visit": 6.14683132513371
    },
    {
      "global_rank": 125175,
      "category_rank": 141,
      "domain": "byggebolig.no",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 526048.106505911,
      "curr_month_visits": 526048.106505911,
      "unique_users": 311551.27028943,
      "pages_per_visit": 1.78035983305451
    },
    {
      "global_rank": 423022,
      "category_rank": 141,
      "domain": "diplomaframe.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 82560.8357518013,
      "curr_month_visits": 82560.8357518013,
      "unique_users": 53891.2673378474,
      "pages_per_visit": 3.2102891288024
    },
    {
      "global_rank": 23209,
      "category_rank": 141,
      "domain": "spoonflower.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1978531.6465695,
      "curr_month_visits": 1978531.6465695,
      "unique_users": 974938.56618298,
      "pages_per_visit": 6.1015163171104
    },
    {
      "global_rank": 69263,
      "category_rank": 141,
      "domain": "tempur.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 756802.817062994,
      "curr_month_visits": 756802.817062994,
      "unique_users": 461939.545071627,
      "pages_per_visit": 2.77420865234772
    },
    {
      "global_rank": 208358,
      "category_rank": 141,
      "domain": "fermedesaintemarthe.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 163071.893009519,
      "curr_month_visits": 163071.893009519,
      "unique_users": 91371.7834057459,
      "pages_per_visit": 2.42040112962655
    },
    {
      "global_rank": 208403,
      "category_rank": 142,
      "domain": "123zimmerpflanzen.de",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 189180.196914245,
      "curr_month_visits": 189180.196914245,
      "unique_users": 115598.347786451,
      "pages_per_visit": 4.06609251737194
    },
    {
      "global_rank": 69758,
      "category_rank": 142,
      "domain": "ashleydirect.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 615821.011215603,
      "curr_month_visits": 615821.011215603,
      "unique_users": 74840.8938281583,
      "pages_per_visit": 7.78784756402664
    },
    {
      "global_rank": 424891,
      "category_rank": 142,
      "domain": "todeschini.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 89853.8283323189,
      "curr_month_visits": 89853.8283323189,
      "unique_users": 61801.8181035488,
      "pages_per_visit": 1.48443935036611
    },
    {
      "global_rank": 23306,
      "category_rank": 142,
      "domain": "jotex.se",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1678338.31459205,
      "curr_month_visits": 1678338.31459205,
      "unique_users": 737417.778350605,
      "pages_per_visit": 4.83284023951534
    },
    {
      "global_rank": 125465,
      "category_rank": 142,
      "domain": "woodworker.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 465126.630301914,
      "curr_month_visits": 465126.630301914,
      "unique_users": 312409.697215919,
      "pages_per_visit": 1.98314707779047
    },
    {
      "global_rank": 210282,
      "category_rank": 143,
      "domain": "nativeplanttrust.org",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 207135.940206198,
      "curr_month_visits": 207135.940206198,
      "unique_users": 112109.298633067,
      "pages_per_visit": 3.64852313108127
    },
    {
      "global_rank": 70153,
      "category_rank": 143,
      "domain": "potterybarn.ca",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 517381.093205039,
      "curr_month_visits": 517381.093205039,
      "unique_users": 283985.224701271,
      "pages_per_visit": 4.22655680103943
    },
    {
      "global_rank": 125888,
      "category_rank": 143,
      "domain": "radron.se",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 360915.035792779,
      "curr_month_visits": 360915.035792779,
      "unique_users": 252534.867638158,
      "pages_per_visit": 2.86536938512046
    },
    {
      "global_rank": 23495,
      "category_rank": 143,
      "domain": "searspartsdirect.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3125937.98470727,
      "curr_month_visits": 3125937.98470727,
      "unique_users": 1696711.6173752,
      "pages_per_visit": 2.88611489974091
    },
    {
      "global_rank": 15596,
      "category_rank": 143,
      "domain": "valuecom.com",
      "category": "Home_and_Garden",
      "avg_month_visits": 3078427.08732726,
      "curr_month_visits": 3078427.08732726,
      "unique_users": 2382145.29257346,
      "pages_per_visit": 3.4935268561455
    },
    {
      "global_rank": 428044,
      "category_rank": 143,
      "domain": "amaisd.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 35419.6510221379,
      "curr_month_visits": 35419.6510221379,
      "unique_users": 13582.7911102416,
      "pages_per_visit": 22.2366983244912
    },
    {
      "global_rank": 70821,
      "category_rank": 144,
      "domain": "bett1.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 862212.636333336,
      "curr_month_visits": 862212.636333336,
      "unique_users": 516388.108824976,
      "pages_per_visit": 2.77919347951248
    },
    {
      "global_rank": 126705,
      "category_rank": 144,
      "domain": "sanier.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 561698.700566852,
      "curr_month_visits": 561698.700566852,
      "unique_users": 396724.703122351,
      "pages_per_visit": 1.34203934847535
    },
    {
      "global_rank": 210633,
      "category_rank": 144,
      "domain": "mesarbustes.fr",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 175220.712188882,
      "curr_month_visits": 175220.712188882,
      "unique_users": 108584.80278253,
      "pages_per_visit": 3.63902015427786
    },
    {
      "global_rank": 23567,
      "category_rank": 144,
      "domain": "bestreviews.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2910417.47180538,
      "curr_month_visits": 2910417.47180538,
      "unique_users": 2390072.89851055,
      "pages_per_visit": 1.45610125024304
    },
    {
      "global_rank": 429292,
      "category_rank": 144,
      "domain": "idei-dekoru.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 85814.9116659981,
      "curr_month_visits": 85814.9116659981,
      "unique_users": 44013.247477934,
      "pages_per_visit": 2.98576578785191
    },
    {
      "global_rank": 23704,
      "category_rank": 145,
      "domain": "hemtex.se",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1771185.38072179,
      "curr_month_visits": 1771185.38072179,
      "unique_users": 939172.29927038,
      "pages_per_visit": 3.65748413346302
    },
    {
      "global_rank": 127010,
      "category_rank": 145,
      "domain": "talu.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 532643.802315432,
      "curr_month_visits": 532643.802315432,
      "unique_users": 376442.866855209,
      "pages_per_visit": 1.60446429219744
    },
    {
      "global_rank": 431946,
      "category_rank": 145,
      "domain": "mirdizajna.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 153995.209320602,
      "curr_month_visits": 153995.209320602,
      "unique_users": 65881.8043614867,
      "pages_per_visit": 1.25558708691195
    },
    {
      "global_rank": 71840,
      "category_rank": 145,
      "domain": "costway.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 678269.110884501,
      "curr_month_visits": 678269.110884501,
      "unique_users": 440236.944230588,
      "pages_per_visit": 2.64098802885289
    },
    {
      "global_rank": 211364,
      "category_rank": 145,
      "domain": "forumogrodnicze.info",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 206488.490129925,
      "curr_month_visits": 206488.490129925,
      "unique_users": 117746.313586493,
      "pages_per_visit": 3.70174738098385
    },
    {
      "global_rank": 433603,
      "category_rank": 146,
      "domain": "heatherednest.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 89902.6793237642,
      "curr_month_visits": 89902.6793237642,
      "unique_users": 55223.644556659,
      "pages_per_visit": 1.82789786815566
    },
    {
      "global_rank": 127081,
      "category_rank": 146,
      "domain": "preissuchmaschine.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 373480.261864707,
      "curr_month_visits": 373480.261864707,
      "unique_users": 299940.205109612,
      "pages_per_visit": 1.94881291701855
    },
    {
      "global_rank": 213008,
      "category_rank": 146,
      "domain": "bonsaiempire.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 295406.038300334,
      "curr_month_visits": 295406.038300334,
      "unique_users": 158898.611740288,
      "pages_per_visit": 1.97282670119914
    },
    {
      "global_rank": 23807,
      "category_rank": 146,
      "domain": "ace.co.il",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2033629.71377135,
      "curr_month_visits": 2033629.71377135,
      "unique_users": 934163.668851976,
      "pages_per_visit": 3.78671883970741
    },
    {
      "global_rank": 72893,
      "category_rank": 146,
      "domain": "luuna.mx",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 661427.881854982,
      "curr_month_visits": 661427.881854982,
      "unique_users": 386408.995046237,
      "pages_per_visit": 2.19520754859994
    },
    {
      "global_rank": 128299,
      "category_rank": 147,
      "domain": "lawnstarter.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 708168.053476166,
      "curr_month_visits": 708168.053476166,
      "unique_users": 480925.820302569,
      "pages_per_visit": 2.11518643797791
    },
    {
      "global_rank": 213505,
      "category_rank": 147,
      "domain": "parcelservice.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 246628.24200364,
      "curr_month_visits": 246628.24200364,
      "unique_users": 189219.016537385,
      "pages_per_visit": 1.2715681934303
    },
    {
      "global_rank": 72969,
      "category_rank": 147,
      "domain": "flexispot.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 553341.209784277,
      "curr_month_visits": 553341.209784277,
      "unique_users": 291233.944054132,
      "pages_per_visit": 3.16091191892432
    },
    {
      "global_rank": 24178,
      "category_rank": 147,
      "domain": "gamma.be",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2146807.05911396,
      "curr_month_visits": 2146807.05911396,
      "unique_users": 1027605.04494873,
      "pages_per_visit": 4.54958974179454
    },
    {
      "global_rank": 434008,
      "category_rank": 147,
      "domain": "iprojetei.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 72977.6309351095,
      "curr_month_visits": 72977.6309351095,
      "unique_users": 50955.7102578003,
      "pages_per_visit": 3.37980948949316
    },
    {
      "global_rank": 434638,
      "category_rank": 148,
      "domain": "stroi-market-rm.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 67412.2808072763,
      "curr_month_visits": 67412.2808072763,
      "unique_users": 24147.7895999282,
      "pages_per_visit": 3.81403643769902
    },
    {
      "global_rank": 24639,
      "category_rank": 148,
      "domain": "scentsy.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2377059.08290398,
      "curr_month_visits": 2377059.08290398,
      "unique_users": 298328.459728028,
      "pages_per_visit": 7.54481375750396
    },
    {
      "global_rank": 213747,
      "category_rank": 148,
      "domain": "gardenary.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 265023.609093859,
      "curr_month_visits": 265023.609093859,
      "unique_users": 153534.161695625,
      "pages_per_visit": 2.28113277637759
    },
    {
      "global_rank": 73562,
      "category_rank": 148,
      "domain": "happybeds.co.uk",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 678082.099254063,
      "curr_month_visits": 678082.099254063,
      "unique_users": 418384.789631705,
      "pages_per_visit": 3.58339590378244
    },
    {
      "global_rank": 129399,
      "category_rank": 148,
      "domain": "hgtvhomebysherwinwilliams.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 351135.466245344,
      "curr_month_visits": 351135.466245344,
      "unique_users": 225882.600629398,
      "pages_per_visit": 4.58724510946084
    },
    {
      "global_rank": 435095,
      "category_rank": 149,
      "domain": "egger-russia.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 63718.2730947608,
      "curr_month_visits": 63718.2730947608,
      "unique_users": 28086.5406134692,
      "pages_per_visit": 4.17069851844278
    },
    {
      "global_rank": 24654,
      "category_rank": 149,
      "domain": "canac.ca",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2366002.93077783,
      "curr_month_visits": 2366002.93077783,
      "unique_users": 885357.131153514,
      "pages_per_visit": 4.44540778818537
    },
    {
      "global_rank": 214418,
      "category_rank": 149,
      "domain": "tuigarden.co.nz",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 255600.977842868,
      "curr_month_visits": 255600.977842868,
      "unique_users": 149791.851249144,
      "pages_per_visit": 1.87899635999338
    },
    {
      "global_rank": 131093,
      "category_rank": 149,
      "domain": "tepto.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 374020.310391708,
      "curr_month_visits": 374020.310391708,
      "unique_users": 135078.680273456,
      "pages_per_visit": 4.27049545009218
    },
    {
      "global_rank": 73696,
      "category_rank": 149,
      "domain": "scs.co.uk",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 730710.982357571,
      "curr_month_visits": 730710.982357571,
      "unique_users": 479593.160861185,
      "pages_per_visit": 3.49208974434517
    },
    {
      "global_rank": 131733,
      "category_rank": 150,
      "domain": "diycraftsguide.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 317469.146772647,
      "curr_month_visits": 317469.146772647,
      "unique_users": 60562.7590624144,
      "pages_per_visit": 3.37365170283287
    },
    {
      "global_rank": 436903,
      "category_rank": 150,
      "domain": "rooms19.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 124435.22514689,
      "curr_month_visits": 124435.22514689,
      "unique_users": 101584.354884517,
      "pages_per_visit": 1.24627723432993
    },
    {
      "global_rank": 24841,
      "category_rank": 150,
      "domain": "praktiker.hu",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2614072.283085,
      "curr_month_visits": 2614072.283085,
      "unique_users": 1180422.35959141,
      "pages_per_visit": 2.88729406497212
    },
    {
      "global_rank": 214857,
      "category_rank": 150,
      "domain": "intratuin.be",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 130042.495043341,
      "curr_month_visits": 130042.495043341,
      "unique_users": 80985.2047935545,
      "pages_per_visit": 3.26674758506962
    },
    {
      "global_rank": 73825,
      "category_rank": 151,
      "domain": "sofology.co.uk",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 723641.379929958,
      "curr_month_visits": 723641.379929958,
      "unique_users": 430530.4673318,
      "pages_per_visit": 3.39655489532021
    },
    {
      "global_rank": 437493,
      "category_rank": 151,
      "domain": "bigfoto.name",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 126301.223089766,
      "curr_month_visits": 126301.223089766,
      "unique_users": 73574.5882908689,
      "pages_per_visit": 1.37032177956122
    },
    {
      "global_rank": 25012,
      "category_rank": 151,
      "domain": "traeger.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2234097.25303244,
      "curr_month_visits": 2234097.25303244,
      "unique_users": 1194647.73579265,
      "pages_per_visit": 2.24180877729625
    },
    {
      "global_rank": 214973,
      "category_rank": 151,
      "domain": "919g.co.jp",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 152103.600742741,
      "curr_month_visits": 152103.600742741,
      "unique_users": 80084.1502352918,
      "pages_per_visit": 6.61426189566327
    },
    {
      "global_rank": 133939,
      "category_rank": 151,
      "domain": "e-control.at",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 209307.827185427,
      "curr_month_visits": 209307.827185427,
      "unique_users": 114356.682747698,
      "pages_per_visit": 4.50578738543474
    },
    {
      "global_rank": 74193,
      "category_rank": 152,
      "domain": "ecosa.com.au",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 559442.701432915,
      "curr_month_visits": 559442.701432915,
      "unique_users": 262502.11701001,
      "pages_per_visit": 3.15670495917388
    },
    {
      "global_rank": 437906,
      "category_rank": 152,
      "domain": "artfabric.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 76957.9037324972,
      "curr_month_visits": 76957.9037324972,
      "unique_users": 29458.2995039985,
      "pages_per_visit": 3.7904874369829
    },
    {
      "global_rank": 215221,
      "category_rank": 152,
      "domain": "lamaison.fr",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 190756.547191772,
      "curr_month_visits": 190756.547191772,
      "unique_users": 117340.78444617,
      "pages_per_visit": 4.18527377018234
    },
    {
      "global_rank": 134067,
      "category_rank": 152,
      "domain": "heizung.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 449486.553358749,
      "curr_month_visits": 449486.553358749,
      "unique_users": 356454.959225012,
      "pages_per_visit": 1.34233064315208
    },
    {
      "global_rank": 25196,
      "category_rank": 152,
      "domain": "cdn-website.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3455775.89372092,
      "curr_month_visits": 3455775.89372092,
      "unique_users": 2500266.07995706,
      "pages_per_visit": 1.47118376075992
    },
    {
      "global_rank": 25203,
      "category_rank": 153,
      "domain": "vente-unique.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1870069.64432281,
      "curr_month_visits": 1870069.64432281,
      "unique_users": 937032.684570993,
      "pages_per_visit": 4.55796406007141
    },
    {
      "global_rank": 216394,
      "category_rank": 153,
      "domain": "strogoorganic.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 99003.0905898522,
      "curr_month_visits": 99003.0905898522,
      "unique_users": 44218.8744753989,
      "pages_per_visit": 5.39601663680977
    },
    {
      "global_rank": 438204,
      "category_rank": 153,
      "domain": "standardelectricals.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 60801.8511827133,
      "curr_month_visits": 60801.8511827133,
      "unique_users": 34845.2406602662,
      "pages_per_visit": 1.54676880852909
    },
    {
      "global_rank": 134189,
      "category_rank": 153,
      "domain": "recipesdirect.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 686299.926886946,
      "curr_month_visits": 686299.926886946,
      "unique_users": 337972.549593268,
      "pages_per_visit": 1.70297355492486
    },
    {
      "global_rank": 74687,
      "category_rank": 153,
      "domain": "aptdeco.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 752851.194495825,
      "curr_month_visits": 752851.194495825,
      "unique_users": 411579.656480828,
      "pages_per_visit": 3.10497966006277
    },
    {
      "global_rank": 438721,
      "category_rank": 154,
      "domain": "archivizer.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 47626.0243064008,
      "curr_month_visits": 47626.0243064008,
      "unique_users": 3834.629857734,
      "pages_per_visit": 31.7929117141394
    },
    {
      "global_rank": 136157,
      "category_rank": 154,
      "domain": "napravisam.bg",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 356882.553134967,
      "curr_month_visits": 356882.553134967,
      "unique_users": 184981.950415564,
      "pages_per_visit": 2.88789100974199
    },
    {
      "global_rank": 75494,
      "category_rank": 154,
      "domain": "weba.be",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 458364.431296979,
      "curr_month_visits": 458364.431296979,
      "unique_users": 220056.582226789,
      "pages_per_visit": 5.84764257681185
    },
    {
      "global_rank": 25363,
      "category_rank": 154,
      "domain": "tokstok.com.br",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2112594.66675455,
      "curr_month_visits": 2112594.66675455,
      "unique_users": 1173671.9728017,
      "pages_per_visit": 3.98018349424323
    },
    {
      "global_rank": 216399,
      "category_rank": 154,
      "domain": "moonvalleynurseries.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 235768.830941453,
      "curr_month_visits": 235768.830941453,
      "unique_users": 157748.303974568,
      "pages_per_visit": 3.12580488415707
    },
    {
      "global_rank": 440083,
      "category_rank": 155,
      "domain": "resourcefurniture.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 70491.5753074134,
      "curr_month_visits": 70491.5753074134,
      "unique_users": 42423.4898087392,
      "pages_per_visit": 3.56977184202378
    },
    {
      "global_rank": 217272,
      "category_rank": 155,
      "domain": "hausgarten.net",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 346710.684096333,
      "curr_month_visits": 346710.684096333,
      "unique_users": 264262.514060449,
      "pages_per_visit": 1.40089266401229
    },
    {
      "global_rank": 75686,
      "category_rank": 155,
      "domain": "slumberland.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 399846.036453372,
      "curr_month_visits": 399846.036453372,
      "unique_users": 253721.016398528,
      "pages_per_visit": 5.18660856507191
    },
    {
      "global_rank": 25370,
      "category_rank": 155,
      "domain": "homepro.co.th",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2183814.28783485,
      "curr_month_visits": 2183814.28783485,
      "unique_users": 1041848.17633133,
      "pages_per_visit": 4.34212576863353
    },
    {
      "global_rank": 136553,
      "category_rank": 155,
      "domain": "addall.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 417846.239480988,
      "curr_month_visits": 417846.239480988,
      "unique_users": 240798.539330137,
      "pages_per_visit": 2.30919999061943
    },
    {
      "global_rank": 446845,
      "category_rank": 156,
      "domain": "hears.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 95290.6787704444,
      "curr_month_visits": 95290.6787704444,
      "unique_users": 49146.4601335441,
      "pages_per_visit": 2.81532754077995
    },
    {
      "global_rank": 219695,
      "category_rank": 156,
      "domain": "plantaddicts.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 286240.874450885,
      "curr_month_visits": 286240.874450885,
      "unique_users": 189708.203558129,
      "pages_per_visit": 2.01758631349513
    },
    {
      "global_rank": 136665,
      "category_rank": 156,
      "domain": "tinglysning.dk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 293330.12699438,
      "curr_month_visits": 293330.12699438,
      "unique_users": 135313.553641194,
      "pages_per_visit": 4.80912009610047
    },
    {
      "global_rank": 75813,
      "category_rank": 156,
      "domain": "bambi.com.tr",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 811827.301688309,
      "curr_month_visits": 811827.301688309,
      "unique_users": 339090.795258334,
      "pages_per_visit": 4.23279555668138
    },
    {
      "global_rank": 25497,
      "category_rank": 156,
      "domain": "cupofjo.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2659502.18223389,
      "curr_month_visits": 2659502.18223389,
      "unique_users": 709820.756557933,
      "pages_per_visit": 2.70475504873728
    },
    {
      "global_rank": 25760,
      "category_rank": 157,
      "domain": "pamperedchef.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1720120.82475695,
      "curr_month_visits": 1720120.82475695,
      "unique_users": 715895.191998341,
      "pages_per_visit": 6.1665409226343
    },
    {
      "global_rank": 136731,
      "category_rank": 157,
      "domain": "rowenta.it",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 299051.983095,
      "curr_month_visits": 299051.983095,
      "unique_users": 185310.820846429,
      "pages_per_visit": 2.78928341438291
    },
    {
      "global_rank": 220418,
      "category_rank": 157,
      "domain": "7semyan.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 195061.603639416,
      "curr_month_visits": 195061.603639416,
      "unique_users": 111960.445428681,
      "pages_per_visit": 3.43862711263542
    },
    {
      "global_rank": 75932,
      "category_rank": 157,
      "domain": "porta.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 673702.081322403,
      "curr_month_visits": 673702.081322403,
      "unique_users": 455677.003903704,
      "pages_per_visit": 3.35556635092563
    },
    {
      "global_rank": 448674,
      "category_rank": 157,
      "domain": "interior3d.su",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 86489.2203362647,
      "curr_month_visits": 86489.2203362647,
      "unique_users": 49210.3447496926,
      "pages_per_visit": 1.989302067273
    },
    {
      "global_rank": 220595,
      "category_rank": 158,
      "domain": "krautundrueben.de",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 269272.108269747,
      "curr_month_visits": 269272.108269747,
      "unique_users": 194049.981842592,
      "pages_per_visit": 1.48270351495025
    },
    {
      "global_rank": 76270,
      "category_rank": 158,
      "domain": "scandinaviandesigns.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 400985.937065941,
      "curr_month_visits": 400985.937065941,
      "unique_users": 235812.780540502,
      "pages_per_visit": 6.16357004332101
    },
    {
      "global_rank": 451778,
      "category_rank": 158,
      "domain": "dipris-studio.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 107846.648602,
      "curr_month_visits": 107846.648602,
      "unique_users": 30701.2310467618,
      "pages_per_visit": 1.46377455202543
    },
    {
      "global_rank": 25899,
      "category_rank": 158,
      "domain": "westwing.com.br",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2146945.01135831,
      "curr_month_visits": 2146945.01135831,
      "unique_users": 1216543.56153329,
      "pages_per_visit": 3.37391759960239
    },
    {
      "global_rank": 138193,
      "category_rank": 158,
      "domain": "bauknecht.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 309264.635595308,
      "curr_month_visits": 309264.635595308,
      "unique_users": 217741.342782745,
      "pages_per_visit": 2.71462514575772
    },
    {
      "global_rank": 25977,
      "category_rank": 159,
      "domain": "modesdemploi.fr",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1475337.32331395,
      "curr_month_visits": 1475337.32331395,
      "unique_users": 1034617.02164503,
      "pages_per_visit": 8.02513337144454
    },
    {
      "global_rank": 453353,
      "category_rank": 159,
      "domain": "indigopaints.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 91100.1908811225,
      "curr_month_visits": 91100.1908811225,
      "unique_users": 62303.7137198276,
      "pages_per_visit": 1.82123285665596
    },
    {
      "global_rank": 221257,
      "category_rank": 159,
      "domain": "swiatkwiatow.pl",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 298359.504737105,
      "curr_month_visits": 298359.504737105,
      "unique_users": 192515.259522143,
      "pages_per_visit": 2.54459013184671
    },
    {
      "global_rank": 76477,
      "category_rank": 159,
      "domain": "velleahome.ro",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 603748.752581968,
      "curr_month_visits": 603748.752581968,
      "unique_users": 217023.007371418,
      "pages_per_visit": 4.05298964422497
    },
    {
      "global_rank": 138259,
      "category_rank": 159,
      "domain": "elektrum.lt",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 217311.903292702,
      "curr_month_visits": 217311.903292702,
      "unique_users": 137320.678687205,
      "pages_per_visit": 6.09314870754786
    },
    {
      "global_rank": 456123,
      "category_rank": 160,
      "domain": "mononova.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 121389.709827493,
      "curr_month_visits": 121389.709827493,
      "unique_users": 48801.0880435996,
      "pages_per_visit": 1.65607471208858
    },
    {
      "global_rank": 222298,
      "category_rank": 160,
      "domain": "planfor.es",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 142760.431921789,
      "curr_month_visits": 142760.431921789,
      "unique_users": 81033.1042520188,
      "pages_per_visit": 5.24924408317209
    },
    {
      "global_rank": 76705,
      "category_rank": 160,
      "domain": "mohd.it",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 403112.001622495,
      "curr_month_visits": 403112.001622495,
      "unique_users": 237624.877277297,
      "pages_per_visit": 7.60487038998514
    },
    {
      "global_rank": 138784,
      "category_rank": 160,
      "domain": "wobeleo.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 512274.957649308,
      "curr_month_visits": 512274.957649308,
      "unique_users": 138359.159075559,
      "pages_per_visit": 1.12009088503351
    },
    {
      "global_rank": 26004,
      "category_rank": 160,
      "domain": "manomano.de",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2419380.48590278,
      "curr_month_visits": 2419380.48590278,
      "unique_users": 1589776.56336801,
      "pages_per_visit": 3.07910475784667
    },
    {
      "global_rank": 140895,
      "category_rank": 161,
      "domain": "julieblanner.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 435869.901240775,
      "curr_month_visits": 435869.901240775,
      "unique_users": 292916.720650953,
      "pages_per_visit": 1.76226077557369
    },
    {
      "global_rank": 76731,
      "category_rank": 161,
      "domain": "autonomous.ai",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 610082.540716872,
      "curr_month_visits": 610082.540716872,
      "unique_users": 344410.383177587,
      "pages_per_visit": 3.35439183617224
    },
    {
      "global_rank": 458093,
      "category_rank": 161,
      "domain": "cgkit.pro",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 60381.8172167549,
      "curr_month_visits": 60381.8172167549,
      "unique_users": 8554.72865641777,
      "pages_per_visit": 7.97241940320983
    },
    {
      "global_rank": 26055,
      "category_rank": 161,
      "domain": "baby-kingdom.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2864580.17868154,
      "curr_month_visits": 2864580.17868154,
      "unique_users": 1107493.46357946,
      "pages_per_visit": 3.01446656194799
    },
    {
      "global_rank": 222661,
      "category_rank": 161,
      "domain": "semena-tut.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 122530.647218757,
      "curr_month_visits": 122530.647218757,
      "unique_users": 68637.8979032997,
      "pages_per_visit": 5.81605075727844
    },
    {
      "global_rank": 76782,
      "category_rank": 162,
      "domain": "laura-james.co.uk",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 714444.026748229,
      "curr_month_visits": 714444.026748229,
      "unique_users": 458177.047732999,
      "pages_per_visit": 3.15264905699785
    },
    {
      "global_rank": 460809,
      "category_rank": 162,
      "domain": "desenio.ca",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 43426.9844347135,
      "curr_month_visits": 43426.9844347135,
      "unique_users": 20168.9874238223,
      "pages_per_visit": 6.70518091129345
    },
    {
      "global_rank": 26457,
      "category_rank": 162,
      "domain": "bauhaus.dk",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1930675.8954633,
      "curr_month_visits": 1930675.8954633,
      "unique_users": 954122.680436569,
      "pages_per_visit": 4.2751678559276
    },
    {
      "global_rank": 222722,
      "category_rank": 162,
      "domain": "tuinadvies.nl",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 304744.874911222,
      "curr_month_visits": 304744.874911222,
      "unique_users": 189403.356114896,
      "pages_per_visit": 1.86403302104344
    },
    {
      "global_rank": 140928,
      "category_rank": 162,
      "domain": "heyloyalty.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 440544.966582306,
      "curr_month_visits": 440544.966582306,
      "unique_users": 233141.827549364,
      "pages_per_visit": 1.6140881742227
    },
    {
      "global_rank": 468753,
      "category_rank": 163,
      "domain": "kitchendecorium.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 122153.30606238,
      "curr_month_visits": 122153.30606238,
      "unique_users": 63282.0146642885,
      "pages_per_visit": 1.72342901496781
    },
    {
      "global_rank": 224608,
      "category_rank": 163,
      "domain": "dachnyuchastok.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 397690.940592877,
      "curr_month_visits": 397690.940592877,
      "unique_users": 184694.764255091,
      "pages_per_visit": 1.51679977415742
    },
    {
      "global_rank": 141095,
      "category_rank": 163,
      "domain": "commentreparer.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 387963.320412172,
      "curr_month_visits": 387963.320412172,
      "unique_users": 270005.985020817,
      "pages_per_visit": 2.02137491436764
    },
    {
      "global_rank": 26546,
      "category_rank": 163,
      "domain": "manualslib.de",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1658310.71386898,
      "curr_month_visits": 1658310.71386898,
      "unique_users": 1148421.79940638,
      "pages_per_visit": 7.13222008555709
    },
    {
      "global_rank": 77435,
      "category_rank": 163,
      "domain": "divanboss.ru",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 492737.410565464,
      "curr_month_visits": 492737.410565464,
      "unique_users": 250426.100449389,
      "pages_per_visit": 4.68561216174826
    },
    {
      "global_rank": 225079,
      "category_rank": 164,
      "domain": "earth911.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 222273.061643921,
      "curr_month_visits": 222273.061643921,
      "unique_users": 159398.570424767,
      "pages_per_visit": 2.22206835896951
    },
    {
      "global_rank": 141160,
      "category_rank": 164,
      "domain": "hausjournal.net",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 487434.318014828,
      "curr_month_visits": 487434.318014828,
      "unique_users": 349692.901889202,
      "pages_per_visit": 1.61805513478165
    },
    {
      "global_rank": 469120,
      "category_rank": 164,
      "domain": "aglasiangranito.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 64570.7323766546,
      "curr_month_visits": 64570.7323766546,
      "unique_users": 30180.7474474573,
      "pages_per_visit": 5.98163020066319
    },
    {
      "global_rank": 26785,
      "category_rank": 164,
      "domain": "replacements.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1803422.84597334,
      "curr_month_visits": 1803422.84597334,
      "unique_users": 1086939.26095999,
      "pages_per_visit": 4.11712089278651
    },
    {
      "global_rank": 77812,
      "category_rank": 164,
      "domain": "duroflexworld.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 515981.164877257,
      "curr_month_visits": 515981.164877257,
      "unique_users": 325068.19951633,
      "pages_per_visit": 2.80821744251067
    },
    {
      "global_rank": 26824,
      "category_rank": 165,
      "domain": "blinds.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1725637.31244767,
      "curr_month_visits": 1725637.31244767,
      "unique_users": 1018690.19603534,
      "pages_per_visit": 4.38995755313668
    },
    {
      "global_rank": 226239,
      "category_rank": 165,
      "domain": "jespersplanteskole.dk",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 190778.390999983,
      "curr_month_visits": 190778.390999983,
      "unique_users": 111167.964385936,
      "pages_per_visit": 6.590686228286
    },
    {
      "global_rank": 475077,
      "category_rank": 165,
      "domain": "dtalemodern.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 101780.732688828,
      "curr_month_visits": 101780.732688828,
      "unique_users": 49283.4787212459,
      "pages_per_visit": 2.58862894261353
    },
    {
      "global_rank": 141476,
      "category_rank": 165,
      "domain": "jp1880.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 255967.436150087,
      "curr_month_visits": 255967.436150087,
      "unique_users": 134122.901943445,
      "pages_per_visit": 5.42102037787964
    },
    {
      "global_rank": 78827,
      "category_rank": 165,
      "domain": "ethanallen.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 611891.139231,
      "curr_month_visits": 611891.139231,
      "unique_users": 314718.927541404,
      "pages_per_visit": 4.32366853078457
    },
    {
      "global_rank": 79394,
      "category_rank": 166,
      "domain": "colemanfurniture.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 522231.027654597,
      "curr_month_visits": 522231.027654597,
      "unique_users": 342878.928764647,
      "pages_per_visit": 2.96868652132778
    },
    {
      "global_rank": 226754,
      "category_rank": 166,
      "domain": "odla.nu",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 335293.939287153,
      "curr_month_visits": 335293.939287153,
      "unique_users": 185843.102320941,
      "pages_per_visit": 1.82759530274054
    },
    {
      "global_rank": 476693,
      "category_rank": 166,
      "domain": "loymina.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 51923.4555493093,
      "curr_month_visits": 51923.4555493093,
      "unique_users": 27047.5505801043,
      "pages_per_visit": 4.54676499928163
    },
    {
      "global_rank": 26946,
      "category_rank": 166,
      "domain": "lampenwelt.de",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1631977.34943639,
      "curr_month_visits": 1631977.34943639,
      "unique_users": 921376.840538881,
      "pages_per_visit": 4.41945277082271
    },
    {
      "global_rank": 142307,
      "category_rank": 166,
      "domain": "whirlpool.it",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 291115.883034211,
      "curr_month_visits": 291115.883034211,
      "unique_users": 194491.55689397,
      "pages_per_visit": 3.2504319696042
    },
    {
      "global_rank": 79951,
      "category_rank": 167,
      "domain": "shop.nitori-net.jp",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 647388.869371305,
      "curr_month_visits": 647388.869371305,
      "unique_users": 542494.140906446,
      "pages_per_visit": 2.23171227756473
    },
    {
      "global_rank": 477823,
      "category_rank": 167,
      "domain": "gravityblankets.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 61019.4736352561,
      "curr_month_visits": 61019.4736352561,
      "unique_users": 31965.7834229292,
      "pages_per_visit": 3.21720447693508
    },
    {
      "global_rank": 226757,
      "category_rank": 167,
      "domain": "ravnovesie.house",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 153975.120803751,
      "curr_month_visits": 153975.120803751,
      "unique_users": 82613.3909095507,
      "pages_per_visit": 2.60792912744989
    },
    {
      "global_rank": 143396,
      "category_rank": 167,
      "domain": "bestchoice.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 318862.370026379,
      "curr_month_visits": 318862.370026379,
      "unique_users": 241883.537127746,
      "pages_per_visit": 1.48112482792986
    },
    {
      "global_rank": 26997,
      "category_rank": 167,
      "domain": "rockler.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1907190.8922414,
      "curr_month_visits": 1907190.8922414,
      "unique_users": 1029672.65077931,
      "pages_per_visit": 3.37690748277031
    },
    {
      "global_rank": 144039,
      "category_rank": 168,
      "domain": "downy.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 453928.677408905,
      "curr_month_visits": 453928.677408905,
      "unique_users": 350522.932068368,
      "pages_per_visit": 1.636719583924
    },
    {
      "global_rank": 478355,
      "category_rank": 168,
      "domain": "courtneysworld.co",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 63651.3533409026,
      "curr_month_visits": 63651.3533409026,
      "unique_users": 37186.2964313108,
      "pages_per_visit": 1.71320210889802
    },
    {
      "global_rank": 26998,
      "category_rank": 168,
      "domain": "jysk.es",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1745596.21134374,
      "curr_month_visits": 1745596.21134374,
      "unique_users": 985292.336651315,
      "pages_per_visit": 4.81512844954217
    },
    {
      "global_rank": 80021,
      "category_rank": 168,
      "domain": "loungelovers.com.au",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 548653.900803222,
      "curr_month_visits": 548653.900803222,
      "unique_users": 263804.450521006,
      "pages_per_visit": 3.25944297137421
    },
    {
      "global_rank": 226827,
      "category_rank": 168,
      "domain": "giardinaggio.it",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 232755.802418589,
      "curr_month_visits": 232755.802418589,
      "unique_users": 167673.956315613,
      "pages_per_visit": 2.09267678334126
    },
    {
      "global_rank": 145374,
      "category_rank": 169,
      "domain": "momento-akustik.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 215410.80432218,
      "curr_month_visits": 215410.80432218,
      "unique_users": 102402.914061856,
      "pages_per_visit": 3.1634128694313
    },
    {
      "global_rank": 27047,
      "category_rank": 169,
      "domain": "archdaily.com.br",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1581552.16130769,
      "curr_month_visits": 1581552.16130769,
      "unique_users": 759847.02615905,
      "pages_per_visit": 8.42586005174391
    },
    {
      "global_rank": 80564,
      "category_rank": 169,
      "domain": "furniture123.co.uk",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 701820.855186687,
      "curr_month_visits": 701820.855186687,
      "unique_users": 442438.663371162,
      "pages_per_visit": 3.0348686956992
    },
    {
      "global_rank": 478663,
      "category_rank": 169,
      "domain": "hettichindiaonline.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 76488.1021829041,
      "curr_month_visits": 76488.1021829041,
      "unique_users": 37116.1769249745,
      "pages_per_visit": 2.92482498888551
    },
    {
      "global_rank": 227813,
      "category_rank": 169,
      "domain": "dobrodar.ua",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 156351.492131167,
      "curr_month_visits": 156351.492131167,
      "unique_users": 94769.7274333713,
      "pages_per_visit": 4.21968041313979
    },
    {
      "global_rank": 80862,
      "category_rank": 170,
      "domain": "avocadogreenmattress.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 646737.823282039,
      "curr_month_visits": 646737.823282039,
      "unique_users": 408894.912977072,
      "pages_per_visit": 2.67151967767043
    },
    {
      "global_rank": 228289,
      "category_rank": 170,
      "domain": "planetdesert.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 272441.840851066,
      "curr_month_visits": 272441.840851066,
      "unique_users": 152579.930672279,
      "pages_per_visit": 2.33263229274543
    },
    {
      "global_rank": 27313,
      "category_rank": 170,
      "domain": "bygghemma.se",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2049797.62905402,
      "curr_month_visits": 2049797.62905402,
      "unique_users": 1087780.60265403,
      "pages_per_visit": 3.39708139669572
    },
    {
      "global_rank": 486119,
      "category_rank": 170,
      "domain": "mebel-store.com.ua",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 42874.3871068915,
      "curr_month_visits": 42874.3871068915,
      "unique_users": 28541.2644279142,
      "pages_per_visit": 6.72086342430199
    },
    {
      "global_rank": 145821,
      "category_rank": 170,
      "domain": "younghouselove.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 439981.789723175,
      "curr_month_visits": 439981.789723175,
      "unique_users": 260262.574888035,
      "pages_per_visit": 1.69889925701967
    },
    {
      "global_rank": 28100,
      "category_rank": 171,
      "domain": "gardenweb.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2669164.51654309,
      "curr_month_visits": 2669164.51654309,
      "unique_users": 1912584.59316613,
      "pages_per_visit": 2.04314667223446
    },
    {
      "global_rank": 150294,
      "category_rank": 171,
      "domain": "test.se",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 323066.63076637,
      "curr_month_visits": 323066.63076637,
      "unique_users": 248140.114547891,
      "pages_per_visit": 2.0383880795324
    },
    {
      "global_rank": 229584,
      "category_rank": 171,
      "domain": "diggers.com.au",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 191051.148711699,
      "curr_month_visits": 191051.148711699,
      "unique_users": 90537.9340644553,
      "pages_per_visit": 3.19664272298751
    },
    {
      "global_rank": 490556,
      "category_rank": 171,
      "domain": "tatapravesh.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 84359.4795947987,
      "curr_month_visits": 84359.4795947987,
      "unique_users": 49677.6453841054,
      "pages_per_visit": 2.16961854768466
    },
    {
      "global_rank": 81399,
      "category_rank": 171,
      "domain": "bosch-home.in",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 666722.819615918,
      "curr_month_visits": 666722.819615918,
      "unique_users": 405055.295653084,
      "pages_per_visit": 4.13474717426594
    },
    {
      "global_rank": 231495,
      "category_rank": 172,
      "domain": "missionschilddruese.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 168372.865035375,
      "curr_month_visits": 168372.865035375,
      "unique_users": 98076.5245224449,
      "pages_per_visit": 1.3597725104464
    },
    {
      "global_rank": 82817,
      "category_rank": 172,
      "domain": "cb2.ca",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 459114.412544649,
      "curr_month_visits": 459114.412544649,
      "unique_users": 235945.427120307,
      "pages_per_visit": 5.13749192074062
    },
    {
      "global_rank": 491583,
      "category_rank": 172,
      "domain": "koloapp.in",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 78946.153885686,
      "curr_month_visits": 78946.153885686,
      "unique_users": 43883.6445124987,
      "pages_per_visit": 3.93163839770161
    },
    {
      "global_rank": 28266,
      "category_rank": 172,
      "domain": "hobbii.de",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1368385.60970857,
      "curr_month_visits": 1368385.60970857,
      "unique_users": 489816.549354715,
      "pages_per_visit": 6.26704243732287
    },
    {
      "global_rank": 151219,
      "category_rank": 172,
      "domain": "misspompadour.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 251860.831796354,
      "curr_month_visits": 251860.831796354,
      "unique_users": 136872.06660153,
      "pages_per_visit": 3.83492863200375
    },
    {
      "global_rank": 231898,
      "category_rank": 173,
      "domain": "wexthuset.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 233390.635204728,
      "curr_month_visits": 233390.635204728,
      "unique_users": 135000.890667792,
      "pages_per_visit": 2.2748770664081
    },
    {
      "global_rank": 85199,
      "category_rank": 173,
      "domain": "haworth.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 505498.642003069,
      "curr_month_visits": 505498.642003069,
      "unique_users": 242700.209968414,
      "pages_per_visit": 3.43901475134526
    },
    {
      "global_rank": 152238,
      "category_rank": 173,
      "domain": "diypestcontrol.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 363194.892421858,
      "curr_month_visits": 363194.892421858,
      "unique_users": 237292.725463081,
      "pages_per_visit": 2.89641788642711
    },
    {
      "global_rank": 492938,
      "category_rank": 173,
      "domain": "remont-f.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 70533.5383012758,
      "curr_month_visits": 70533.5383012758,
      "unique_users": 43073.2409356476,
      "pages_per_visit": 2.18495723175533
    },
    {
      "global_rank": 28408,
      "category_rank": 173,
      "domain": "ferguson.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2077882.57825191,
      "curr_month_visits": 2077882.57825191,
      "unique_users": 1116629.83266456,
      "pages_per_visit": 4.48565527852295
    },
    {
      "global_rank": 28413,
      "category_rank": 174,
      "domain": "snapon.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1628141.82086692,
      "curr_month_visits": 1628141.82086692,
      "unique_users": 719130.374237462,
      "pages_per_visit": 7.34409164095268
    },
    {
      "global_rank": 493584,
      "category_rank": 174,
      "domain": "nais.es",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 39313.6951015848,
      "curr_month_visits": 39313.6951015848,
      "unique_users": 19007.1266579488,
      "pages_per_visit": 12.9751542062032
    },
    {
      "global_rank": 153076,
      "category_rank": 174,
      "domain": "hometriangle.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 378340.861355236,
      "curr_month_visits": 378340.861355236,
      "unique_users": 284090.397176638,
      "pages_per_visit": 2.72536597388911
    },
    {
      "global_rank": 232058,
      "category_rank": 174,
      "domain": "conseils-et-jardin.fr",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 177033.463992356,
      "curr_month_visits": 177033.463992356,
      "unique_users": 73394.193920121,
      "pages_per_visit": 1.83643642967353
    },
    {
      "global_rank": 86473,
      "category_rank": 174,
      "domain": "eq3.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 340774.452464804,
      "curr_month_visits": 340774.452464804,
      "unique_users": 180199.978394791,
      "pages_per_visit": 6.51975600599325
    },
    {
      "global_rank": 153103,
      "category_rank": 175,
      "domain": "maxrealt.ru",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 265021.251210617,
      "curr_month_visits": 265021.251210617,
      "unique_users": 169333.991057029,
      "pages_per_visit": 3.47120800608937
    },
    {
      "global_rank": 28985,
      "category_rank": 175,
      "domain": "loberon.de",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1087097.42662501,
      "curr_month_visits": 1087097.42662501,
      "unique_users": 463532.948041362,
      "pages_per_visit": 7.35909333116751
    },
    {
      "global_rank": 493692,
      "category_rank": 175,
      "domain": "woodprime.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 59000.7842326866,
      "curr_month_visits": 59000.7842326866,
      "unique_users": 36145.0918387859,
      "pages_per_visit": 2.48597516748548
    },
    {
      "global_rank": 87438,
      "category_rank": 175,
      "domain": "kappesberg.com.br",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 498131.924757215,
      "curr_month_visits": 498131.924757215,
      "unique_users": 333607.549929518,
      "pages_per_visit": 2.9986430885552
    },
    {
      "global_rank": 232059,
      "category_rank": 175,
      "domain": "savvygardening.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 332886.774266838,
      "curr_month_visits": 332886.774266838,
      "unique_users": 215932.846838941,
      "pages_per_visit": 1.37705912617471
    },
    {
      "global_rank": 29079,
      "category_rank": 176,
      "domain": "baucenter.ru",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1936090.93588877,
      "curr_month_visits": 1936090.93588877,
      "unique_users": 841977.685969766,
      "pages_per_visit": 5.48810723217837
    },
    {
      "global_rank": 18241,
      "category_rank": 176,
      "domain": "lennar.com",
      "category": "Home_and_Garden",
      "avg_month_visits": 3548090.83686627,
      "curr_month_visits": 3548090.83686627,
      "unique_users": 2022787.96133263,
      "pages_per_visit": 3.77618180347876
    },
    {
      "global_rank": 154572,
      "category_rank": 176,
      "domain": "viivilla.se",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 371167.891676694,
      "curr_month_visits": 371167.891676694,
      "unique_users": 221297.877281332,
      "pages_per_visit": 1.85582647203408
    },
    {
      "global_rank": 232554,
      "category_rank": 176,
      "domain": "agromarket.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 193220.823758154,
      "curr_month_visits": 193220.823758154,
      "unique_users": 115651.821643824,
      "pages_per_visit": 2.16299713047028
    },
    {
      "global_rank": 494881,
      "category_rank": 176,
      "domain": "vrn-transtur.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 84780.3689804013,
      "curr_month_visits": 84780.3689804013,
      "unique_users": 25542.8044674157,
      "pages_per_visit": 1.96810188637596
    },
    {
      "global_rank": 88225,
      "category_rank": 176,
      "domain": "moebel-boss.de",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 538578.432126003,
      "curr_month_visits": 538578.432126003,
      "unique_users": 346384.53654471,
      "pages_per_visit": 3.81952592290526
    },
    {
      "global_rank": 88754,
      "category_rank": 177,
      "domain": "mysleepwell.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 613329.50097008,
      "curr_month_visits": 613329.50097008,
      "unique_users": 401332.61033869,
      "pages_per_visit": 3.13129118769202
    },
    {
      "global_rank": 495372,
      "category_rank": 177,
      "domain": "design-mate.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 78884.026790604,
      "curr_month_visits": 78884.026790604,
      "unique_users": 47551.6424258612,
      "pages_per_visit": 2.67504892085528
    },
    {
      "global_rank": 155499,
      "category_rank": 177,
      "domain": "teamhack.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 463093.053226528,
      "curr_month_visits": 463093.053226528,
      "unique_users": 241159.44297179,
      "pages_per_visit": 1.47881468709579
    },
    {
      "global_rank": 29132,
      "category_rank": 177,
      "domain": "husqvarna.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2383456.78396991,
      "curr_month_visits": 2383456.78396991,
      "unique_users": 1397808.72445572,
      "pages_per_visit": 3.23766406117181
    },
    {
      "global_rank": 233037,
      "category_rank": 177,
      "domain": "oazis.hu",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 209279.396733202,
      "curr_month_visits": 209279.396733202,
      "unique_users": 119650.058149243,
      "pages_per_visit": 3.43113302827072
    },
    {
      "global_rank": 156096,
      "category_rank": 178,
      "domain": "handyhand.dk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 346178.697723372,
      "curr_month_visits": 346178.697723372,
      "unique_users": 147882.203542117,
      "pages_per_visit": 2.78151306351896
    },
    {
      "global_rank": 89267,
      "category_rank": 178,
      "domain": "favi.pl",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 482862.595498603,
      "curr_month_visits": 482862.595498603,
      "unique_users": 289531.337726798,
      "pages_per_visit": 3.41877939521735
    },
    {
      "global_rank": 29233,
      "category_rank": 178,
      "domain": "bosch-professional.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1889025.5675709,
      "curr_month_visits": 1889025.5675709,
      "unique_users": 1134254.78837791,
      "pages_per_visit": 3.57957819054505
    },
    {
      "global_rank": 499470,
      "category_rank": 178,
      "domain": "news.hering.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 102065.92202649,
      "curr_month_visits": 102065.92202649,
      "unique_users": 69438.619728262,
      "pages_per_visit": 1.11159940313601
    },
    {
      "global_rank": 235049,
      "category_rank": 179,
      "domain": "good-harvest.ua",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 88137.0140785501,
      "curr_month_visits": 88137.0140785501,
      "unique_users": 43154.6132930209,
      "pages_per_visit": 5.75429807390093
    },
    {
      "global_rank": 29356,
      "category_rank": 179,
      "domain": "linvosges.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1113063.88404327,
      "curr_month_visits": 1113063.88404327,
      "unique_users": 564371.223804851,
      "pages_per_visit": 6.66230937793094
    },
    {
      "global_rank": 156332,
      "category_rank": 179,
      "domain": "goerdetselv.dk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 358456.250794802,
      "curr_month_visits": 358456.250794802,
      "unique_users": 224425.486468505,
      "pages_per_visit": 2.04690573504042
    },
    {
      "global_rank": 499508,
      "category_rank": 179,
      "domain": "graceinmyspace.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 62567.5184021778,
      "curr_month_visits": 62567.5184021778,
      "unique_users": 33384.6725486632,
      "pages_per_visit": 1.6066584076096
    },
    {
      "global_rank": 89355,
      "category_rank": 179,
      "domain": "meblemwm.pl",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 461694.284271039,
      "curr_month_visits": 461694.284271039,
      "unique_users": 283181.278630329,
      "pages_per_visit": 3.30474451977186
    },
    {
      "global_rank": 157735,
      "category_rank": 180,
      "domain": "comparasemplice.it",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 422686.253566992,
      "curr_month_visits": 422686.253566992,
      "unique_users": 321609.021735479,
      "pages_per_visit": 1.77748467299586
    },
    {
      "global_rank": 235296,
      "category_rank": 180,
      "domain": "shop.bosch-diy.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 228298.563254646,
      "curr_month_visits": 228298.563254646,
      "unique_users": 141345.84492455,
      "pages_per_visit": 2.03031236785058
    },
    {
      "global_rank": 89490,
      "category_rank": 180,
      "domain": "maxandlily.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 326671.176268194,
      "curr_month_visits": 326671.176268194,
      "unique_users": 165148.287944596,
      "pages_per_visit": 4.64803593237317
    },
    {
      "global_rank": 29430,
      "category_rank": 180,
      "domain": "byggmax.se",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1914678.50277696,
      "curr_month_visits": 1914678.50277696,
      "unique_users": 774392.33965758,
      "pages_per_visit": 6.50512363924094
    },
    {
      "global_rank": 508670,
      "category_rank": 180,
      "domain": "minhacasaprefabricada.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 67327.5145843307,
      "curr_month_visits": 67327.5145843307,
      "unique_users": 40228.2645604663,
      "pages_per_visit": 3.94471287122723
    },
    {
      "global_rank": 29467,
      "category_rank": 181,
      "domain": "partselect.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2020358.75595291,
      "curr_month_visits": 2020358.75595291,
      "unique_users": 1389682.55491375,
      "pages_per_visit": 3.58200393858453
    },
    {
      "global_rank": 157756,
      "category_rank": 181,
      "domain": "folketidende.dk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 381224.297642655,
      "curr_month_visits": 381224.297642655,
      "unique_users": 71252.665414082,
      "pages_per_visit": 2.28702649236411
    },
    {
      "global_rank": 509646,
      "category_rank": 181,
      "domain": "nitco.in",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 60230.361863353,
      "curr_month_visits": 60230.361863353,
      "unique_users": 36411.6462818027,
      "pages_per_visit": 3.28885050600708
    },
    {
      "global_rank": 235782,
      "category_rank": 181,
      "domain": "hanahiroba.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 207585.797173814,
      "curr_month_visits": 207585.797173814,
      "unique_users": 118704.732023067,
      "pages_per_visit": 2.13437782452277
    },
    {
      "global_rank": 89661,
      "category_rank": 181,
      "domain": "swyfthome.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 460492.139006881,
      "curr_month_visits": 460492.139006881,
      "unique_users": 246218.033371316,
      "pages_per_visit": 4.63322023204834
    },
    {
      "global_rank": 157781,
      "category_rank": 182,
      "domain": "zerspanungsbude.net",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 290119.564035169,
      "curr_month_visits": 290119.564035169,
      "unique_users": 122948.058489789,
      "pages_per_visit": 5.00550040834786
    },
    {
      "global_rank": 236966,
      "category_rank": 182,
      "domain": "dutch-bulbs.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 141920.783169997,
      "curr_month_visits": 141920.783169997,
      "unique_users": 59374.0319103676,
      "pages_per_visit": 4.34776041414851
    },
    {
      "global_rank": 510611,
      "category_rank": 182,
      "domain": "affresco.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 68845.299477658,
      "curr_month_visits": 68845.299477658,
      "unique_users": 25956.9268421877,
      "pages_per_visit": 4.46218138154673
    },
    {
      "global_rank": 29672,
      "category_rank": 182,
      "domain": "k-rauta.fi",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2199759.87582776,
      "curr_month_visits": 2199759.87582776,
      "unique_users": 985794.550687491,
      "pages_per_visit": 3.39731105740754
    },
    {
      "global_rank": 90063,
      "category_rank": 182,
      "domain": "nickscali.com.au",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 446888.091909802,
      "curr_month_visits": 446888.091909802,
      "unique_users": 182481.200691714,
      "pages_per_visit": 4.91742118572701
    },
    {
      "global_rank": 159265,
      "category_rank": 183,
      "domain": "oeffnungszeitenbuch.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 518919.683736879,
      "curr_month_visits": 518919.683736879,
      "unique_users": 405137.280227883,
      "pages_per_visit": 1.33926311740254
    },
    {
      "global_rank": 91093,
      "category_rank": 183,
      "domain": "jysk.at",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 460339.56524999,
      "curr_month_visits": 460339.56524999,
      "unique_users": 242283.52993167,
      "pages_per_visit": 3.98509282346652
    },
    {
      "global_rank": 29903,
      "category_rank": 183,
      "domain": "manomano.es",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1946900.43277938,
      "curr_month_visits": 1946900.43277938,
      "unique_users": 1090167.01550993,
      "pages_per_visit": 3.31585482964213
    },
    {
      "global_rank": 241128,
      "category_rank": 183,
      "domain": "abekker.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 234311.494241398,
      "curr_month_visits": 234311.494241398,
      "unique_users": 139445.501022259,
      "pages_per_visit": 2.54096642051635
    },
    {
      "global_rank": 514622,
      "category_rank": 183,
      "domain": "maniadedecoracao.com",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 47579.584209797,
      "curr_month_visits": 47579.584209797,
      "unique_users": 35122.3680049905,
      "pages_per_visit": 1.07809051345808
    },
    {
      "global_rank": 29945,
      "category_rank": 184,
      "domain": "stroy-podskazka.ru",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 3375199.53210627,
      "curr_month_visits": 3375199.53210627,
      "unique_users": 1915666.38597194,
      "pages_per_visit": 2.23825108435471
    },
    {
      "global_rank": 159973,
      "category_rank": 184,
      "domain": "extern.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 452378.808782796,
      "curr_month_visits": 452378.808782796,
      "unique_users": 143276.948416522,
      "pages_per_visit": 4.42346682630572
    },
    {
      "global_rank": 91897,
      "category_rank": 184,
      "domain": "puffy.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 568790.809699078,
      "curr_month_visits": 568790.809699078,
      "unique_users": 348827.919683021,
      "pages_per_visit": 2.51965277737208
    },
    {
      "global_rank": 514880,
      "category_rank": 184,
      "domain": "quartzparquet.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 63021.0880837407,
      "curr_month_visits": 63021.0880837407,
      "unique_users": 33817.7458680451,
      "pages_per_visit": 1.53377039352531
    },
    {
      "global_rank": 241481,
      "category_rank": 184,
      "domain": "xorove.fr",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 170019.334754288,
      "curr_month_visits": 170019.334754288,
      "unique_users": 46392.928752411,
      "pages_per_visit": 1.41735119511161
    },
    {
      "global_rank": 161733,
      "category_rank": 185,
      "domain": "verbraucherzentrale.nrw",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 358566.887148746,
      "curr_month_visits": 358566.887148746,
      "unique_users": 260924.626553038,
      "pages_per_visit": 1.61317564608579
    },
    {
      "global_rank": 30429,
      "category_rank": 185,
      "domain": "thdstatic.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2760516.47896776,
      "curr_month_visits": 2760516.47896776,
      "unique_users": 1939850.98520822,
      "pages_per_visit": 1.50272755285983
    },
    {
      "global_rank": 518731,
      "category_rank": 185,
      "domain": "stroimsami.online",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 102712.833970909,
      "curr_month_visits": 102712.833970909,
      "unique_users": 33127.4076348168,
      "pages_per_visit": 1.10707775953702
    },
    {
      "global_rank": 241640,
      "category_rank": 185,
      "domain": "syngenta.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 207629.436353184,
      "curr_month_visits": 207629.436353184,
      "unique_users": 112279.42442446,
      "pages_per_visit": 1.74532289354213
    },
    {
      "global_rank": 30645,
      "category_rank": 186,
      "domain": "bissell.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1889521.21442659,
      "curr_month_visits": 1889521.21442659,
      "unique_users": 1149807.91550727,
      "pages_per_visit": 3.7594589105042
    },
    {
      "global_rank": 243289,
      "category_rank": 186,
      "domain": "fronda.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 176657.199147547,
      "curr_month_visits": 176657.199147547,
      "unique_users": 113955.971687072,
      "pages_per_visit": 3.09932175435004
    },
    {
      "global_rank": 166559,
      "category_rank": 186,
      "domain": "shop.aeg.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 231486.375382018,
      "curr_month_visits": 231486.375382018,
      "unique_users": 158854.433978803,
      "pages_per_visit": 3.42294153265022
    },
    {
      "global_rank": 92096,
      "category_rank": 186,
      "domain": "upliftdesk.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 549155.606952694,
      "curr_month_visits": 549155.606952694,
      "unique_users": 310712.832017568,
      "pages_per_visit": 2.98411629358985
    },
    {
      "global_rank": 519830,
      "category_rank": 186,
      "domain": "remstroiblog.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 141418.750658001,
      "curr_month_visits": 141418.750658001,
      "unique_users": 100162.605629545,
      "pages_per_visit": 1.34013429573844
    },
    {
      "global_rank": 522063,
      "category_rank": 187,
      "domain": "casadevalentina.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 75008.2096264504,
      "curr_month_visits": 75008.2096264504,
      "unique_users": 51888.0313073751,
      "pages_per_visit": 1.63240909162921
    },
    {
      "global_rank": 245978,
      "category_rank": 187,
      "domain": "prihoz.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 207885.955932537,
      "curr_month_visits": 207885.955932537,
      "unique_users": 37916.0853754668,
      "pages_per_visit": 5.54072900033032
    },
    {
      "global_rank": 169236,
      "category_rank": 187,
      "domain": "selbermachen.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 440898.03812713,
      "curr_month_visits": 440898.03812713,
      "unique_users": 345591.923438651,
      "pages_per_visit": 1.43633784072493
    },
    {
      "global_rank": 92557,
      "category_rank": 187,
      "domain": "oakfurnituresuperstore.co.uk",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 583649.308068175,
      "curr_month_visits": 583649.308068175,
      "unique_users": 368423.279143357,
      "pages_per_visit": 2.91731766980428
    },
    {
      "global_rank": 30894,
      "category_rank": 187,
      "domain": "stihlusa.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1966840.48002994,
      "curr_month_visits": 1966840.48002994,
      "unique_users": 916617.868922326,
      "pages_per_visit": 3.92339403608477
    },
    {
      "global_rank": 93413,
      "category_rank": 188,
      "domain": "povison.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 347830.597062175,
      "curr_month_visits": 347830.597062175,
      "unique_users": 186443.437667157,
      "pages_per_visit": 5.72618923955346
    },
    {
      "global_rank": 172059,
      "category_rank": 188,
      "domain": "lenremont.ru",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 340514.346402514,
      "curr_month_visits": 340514.346402514,
      "unique_users": 213812.614395927,
      "pages_per_visit": 1.52026151773292
    },
    {
      "global_rank": 246544,
      "category_rank": 188,
      "domain": "jardinierparesseux.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 282999.927118276,
      "curr_month_visits": 282999.927118276,
      "unique_users": 144540.440909409,
      "pages_per_visit": 1.39384018036538
    },
    {
      "global_rank": 524415,
      "category_rank": 188,
      "domain": "belairmoveis.com.br",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 42455.5670232615,
      "curr_month_visits": 42455.5670232615,
      "unique_users": 20436.8337321137,
      "pages_per_visit": 6.82709161798968
    },
    {
      "global_rank": 31068,
      "category_rank": 188,
      "domain": "repairclinic.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2107700.49595546,
      "curr_month_visits": 2107700.49595546,
      "unique_users": 1369705.14394048,
      "pages_per_visit": 3.07917641719743
    },
    {
      "global_rank": 93439,
      "category_rank": 189,
      "domain": "mocka.com.au",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 480967.587122063,
      "curr_month_visits": 480967.587122063,
      "unique_users": 240979.382880976,
      "pages_per_visit": 3.40412940944669
    },
    {
      "global_rank": 31342,
      "category_rank": 189,
      "domain": "mobexpert.ro",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1125125.91886237,
      "curr_month_visits": 1125125.91886237,
      "unique_users": 426817.147120318,
      "pages_per_visit": 6.5654834256858
    },
    {
      "global_rank": 172231,
      "category_rank": 189,
      "domain": "ilsalvagente.it",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 393513.567071936,
      "curr_month_visits": 393513.567071936,
      "unique_users": 298183.448956369,
      "pages_per_visit": 1.48500872834325
    },
    {
      "global_rank": 528235,
      "category_rank": 189,
      "domain": "acchelp.in",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 68083.2159817725,
      "curr_month_visits": 68083.2159817725,
      "unique_users": 48929.9624758203,
      "pages_per_visit": 1.51909663155649
    },
    {
      "global_rank": 247607,
      "category_rank": 189,
      "domain": "dolinasad.by",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 185575.961080797,
      "curr_month_visits": 185575.961080797,
      "unique_users": 96234.5726303924,
      "pages_per_visit": 2.81230582650755
    },
    {
      "global_rank": 31577,
      "category_rank": 190,
      "domain": "cashconverters.com.au",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1479834.63961598,
      "curr_month_visits": 1479834.63961598,
      "unique_users": 567771.204877691,
      "pages_per_visit": 6.12308886201394
    },
    {
      "global_rank": 93643,
      "category_rank": 190,
      "domain": "sihoooffice.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 384989.764352127,
      "curr_month_visits": 384989.764352127,
      "unique_users": 190479.358920821,
      "pages_per_visit": 3.3279135455423
    },
    {
      "global_rank": 174631,
      "category_rank": 190,
      "domain": "electroguide.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 282419.263273445,
      "curr_month_visits": 282419.263273445,
      "unique_users": 207462.19139663,
      "pages_per_visit": 1.77351386319615
    },
    {
      "global_rank": 528744,
      "category_rank": 190,
      "domain": "topzar.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 81672.3159164273,
      "curr_month_visits": 81672.3159164273,
      "unique_users": 18832.3999557204,
      "pages_per_visit": 1.14825241671366
    },
    {
      "global_rank": 247990,
      "category_rank": 190,
      "domain": "jftd.net",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 142405.604368974,
      "curr_month_visits": 142405.604368974,
      "unique_users": 4522.6443650942,
      "pages_per_visit": 8.8081492029877
    },
    {
      "global_rank": 31624,
      "category_rank": 191,
      "domain": "idealhome.co.uk",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2335635.47107037,
      "curr_month_visits": 2335635.47107037,
      "unique_users": 1519051.55522776,
      "pages_per_visit": 1.77092285641874
    },
    {
      "global_rank": 248087,
      "category_rank": 191,
      "domain": "gardensillustrated.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 211482.951898283,
      "curr_month_visits": 211482.951898283,
      "unique_users": 118962.554784661,
      "pages_per_visit": 1.60093225100618
    },
    {
      "global_rank": 534451,
      "category_rank": 191,
      "domain": "lumories.gr",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 39144.2732595963,
      "curr_month_visits": 39144.2732595963,
      "unique_users": 21919.7888476345,
      "pages_per_visit": 5.529602166371
    },
    {
      "global_rank": 93692,
      "category_rank": 191,
      "domain": "brickenligne.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 307688.740631158,
      "curr_month_visits": 307688.740631158,
      "unique_users": 174856.025165372,
      "pages_per_visit": 4.97488574965019
    },
    {
      "global_rank": 176005,
      "category_rank": 191,
      "domain": "fagligsenior.dk",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 248646.835259755,
      "curr_month_visits": 248646.835259755,
      "unique_users": 124883.786290816,
      "pages_per_visit": 1.93378620113153
    },
    {
      "global_rank": 31726,
      "category_rank": 192,
      "domain": "joistapp.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2379447.69791106,
      "curr_month_visits": 2379447.69791106,
      "unique_users": 868349.726917415,
      "pages_per_visit": 2.80577967901508
    },
    {
      "global_rank": 537905,
      "category_rank": 192,
      "domain": "his.ua",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 52163.2554595157,
      "curr_month_visits": 52163.2554595157,
      "unique_users": 25742.4838879464,
      "pages_per_visit": 3.09630566688069
    },
    {
      "global_rank": 93783,
      "category_rank": 192,
      "domain": "meble-bogart.pl",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 313515.953820576,
      "curr_month_visits": 313515.953820576,
      "unique_users": 193608.35423392,
      "pages_per_visit": 9.46412384196352
    },
    {
      "global_rank": 176428,
      "category_rank": 192,
      "domain": "offerta.se",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 204073.159580607,
      "curr_month_visits": 204073.159580607,
      "unique_users": 54773.9262732867,
      "pages_per_visit": 4.85281519993052
    },
    {
      "global_rank": 248294,
      "category_rank": 192,
      "domain": "hana300.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 204993.266916599,
      "curr_month_visits": 204993.266916599,
      "unique_users": 151695.333126807,
      "pages_per_visit": 2.33191022486846
    },
    {
      "global_rank": 95787,
      "category_rank": 193,
      "domain": "studiodesigner.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 307123.280323419,
      "curr_month_visits": 307123.280323419,
      "unique_users": 31106.8216429573,
      "pages_per_visit": 18.5762698212263
    },
    {
      "global_rank": 31729,
      "category_rank": 193,
      "domain": "extradom.pl",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1577665.54042792,
      "curr_month_visits": 1577665.54042792,
      "unique_users": 665820.909472474,
      "pages_per_visit": 3.92710353661833
    },
    {
      "global_rank": 176971,
      "category_rank": 193,
      "domain": "hygglo.se",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 271096.24737053,
      "curr_month_visits": 271096.24737053,
      "unique_users": 174365.603239429,
      "pages_per_visit": 3.2489359157336
    },
    {
      "global_rank": 540333,
      "category_rank": 193,
      "domain": "theidearoom.net",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 64907.9535125483,
      "curr_month_visits": 64907.9535125483,
      "unique_users": 41490.2794447765,
      "pages_per_visit": 1.60250906213106
    },
    {
      "global_rank": 248300,
      "category_rank": 193,
      "domain": "osdorp.nl",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 118675.292677728,
      "curr_month_visits": 118675.292677728,
      "unique_users": 53567.1307747102,
      "pages_per_visit": 4.43333097614974
    },
    {
      "global_rank": 543368,
      "category_rank": 194,
      "domain": "moscowfy.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 110386.425716635,
      "curr_month_visits": 110386.425716635,
      "unique_users": 21547.4185933252,
      "pages_per_visit": 1.03070143818696
    },
    {
      "global_rank": 19966,
      "category_rank": 194,
      "domain": "brooklinen.com",
      "category": "Home_and_Garden",
      "avg_month_visits": 1767815.09629305,
      "curr_month_visits": 1767815.09629305,
      "unique_users": 1147668.06568998,
      "pages_per_visit": 5.10079056156379
    },
    {
      "global_rank": 177593,
      "category_rank": 194,
      "domain": "medipreis.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 207386.690236519,
      "curr_month_visits": 207386.690236519,
      "unique_users": 140624.80103636,
      "pages_per_visit": 5.12046631365681
    },
    {
      "global_rank": 249473,
      "category_rank": 194,
      "domain": "fieldco.com.tr",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 169053.257583991,
      "curr_month_visits": 169053.257583991,
      "unique_users": 8984.58527235051,
      "pages_per_visit": 5.88786675274871
    },
    {
      "global_rank": 96916,
      "category_rank": 194,
      "domain": "ifurniture.co.nz",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 350607.73547549,
      "curr_month_visits": 350607.73547549,
      "unique_users": 207233.840002965,
      "pages_per_visit": 5.06469360134831
    },
    {
      "global_rank": 31889,
      "category_rank": 194,
      "domain": "houseandgarden.co.uk",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 2158761.96515783,
      "curr_month_visits": 2158761.96515783,
      "unique_users": 1239894.3422159,
      "pages_per_visit": 2.05366778090036
    },
    {
      "global_rank": 249863,
      "category_rank": 195,
      "domain": "darvin-market.ru",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 165241.207077454,
      "curr_month_visits": 165241.207077454,
      "unique_users": 89110.3470682849,
      "pages_per_visit": 4.06872536180922
    },
    {
      "global_rank": 32048,
      "category_rank": 195,
      "domain": "bricoman.fr",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1864822.09697272,
      "curr_month_visits": 1864822.09697272,
      "unique_users": 1000359.27174724,
      "pages_per_visit": 3.45495852673962
    },
    {
      "global_rank": 546974,
      "category_rank": 195,
      "domain": "mirceramiki.kz",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 68936.3425886913,
      "curr_month_visits": 68936.3425886913,
      "unique_users": 32983.2585595283,
      "pages_per_visit": 3.11028216549906
    },
    {
      "global_rank": 97320,
      "category_rank": 195,
      "domain": "tikamoon.co.uk",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 463732.35858884,
      "curr_month_visits": 463732.35858884,
      "unique_users": 281493.01899677,
      "pages_per_visit": 2.92713867954824
    },
    {
      "global_rank": 178598,
      "category_rank": 195,
      "domain": "vegogarden.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 290049.769550481,
      "curr_month_visits": 290049.769550481,
      "unique_users": 147063.450453768,
      "pages_per_visit": 3.97543962435321
    },
    {
      "global_rank": 178917,
      "category_rank": 196,
      "domain": "woodshopdiaries.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 286284.089340761,
      "curr_month_visits": 286284.089340761,
      "unique_users": 164948.459184054,
      "pages_per_visit": 1.86499929460447
    },
    {
      "global_rank": 251345,
      "category_rank": 196,
      "domain": "procraft.ua",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 124615.772304496,
      "curr_month_visits": 124615.772304496,
      "unique_users": 57210.0847037813,
      "pages_per_visit": 4.51693807125309
    },
    {
      "global_rank": 98062,
      "category_rank": 196,
      "domain": "latiendahome.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 386827.59256049,
      "curr_month_visits": 386827.59256049,
      "unique_users": 207443.965188534,
      "pages_per_visit": 4.75088443251253
    },
    {
      "global_rank": 32198,
      "category_rank": 196,
      "domain": "hornbach.at",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1881170.4512193,
      "curr_month_visits": 1881170.4512193,
      "unique_users": 813710.246739358,
      "pages_per_visit": 4.85771649023267
    },
    {
      "global_rank": 548850,
      "category_rank": 196,
      "domain": "ebco.in",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 60880.5968783939,
      "curr_month_visits": 60880.5968783939,
      "unique_users": 32594.4079073402,
      "pages_per_visit": 3.23130314967795
    },
    {
      "global_rank": 179558,
      "category_rank": 197,
      "domain": "vzhh.de",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 340159.052780381,
      "curr_month_visits": 340159.052780381,
      "unique_users": 260417.244578852,
      "pages_per_visit": 1.39569082535304
    },
    {
      "global_rank": 32437,
      "category_rank": 197,
      "domain": "fler.cz",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 1563669.38110319,
      "curr_month_visits": 1563669.38110319,
      "unique_users": 388316.379418748,
      "pages_per_visit": 5.75311906007166
    },
    {
      "global_rank": 98065,
      "category_rank": 197,
      "domain": "idc-otsuka.jp",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 447359.559701779,
      "curr_month_visits": 447359.559701779,
      "unique_users": 271215.716232971,
      "pages_per_visit": 3.52700276515459
    },
    {
      "global_rank": 549732,
      "category_rank": 197,
      "domain": "homechart.ru",
      "category": "Home_and_Garden/Interior_Design",
      "avg_month_visits": 93943.957375265,
      "curr_month_visits": 93943.957375265,
      "unique_users": 59887.7319964513,
      "pages_per_visit": 1.61535168965356
    },
    {
      "global_rank": 251739,
      "category_rank": 197,
      "domain": "detentejardin.com",
      "category": "Home_and_Garden/Gardening",
      "avg_month_visits": 259861.700573595,
      "curr_month_visits": 259861.700573595,
      "unique_users": 180212.187348189,
      "pages_per_visit": 1.48135326925665
    },
    {
      "global_rank": 179912,
      "category_rank": 198,
      "domain": "energiesparhaus.at",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 317059.542477652,
      "curr_month_visits": 317059.542477652,
      "unique_users": 191293.421115682,
      "pages_per_visit": 2.18476131688714
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