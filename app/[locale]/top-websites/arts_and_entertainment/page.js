
import {Top_Website_Categories} from '@/lib/top_websites';
export const runtime = 'edge';
export const metadata = {
  title: 'Top  Websites Ranking in the World, January 2025',
  description: 'The top 1000 most visited  websites in the World by Ahrefs organic search traffic estimates. Updated monthly. January 2025',
}


export default function TopWebsite() {

  const arts_and_entertainment = [
    {
      "global_rank": 96,
      "category_rank": 1,
      "domain": "pixiv.net",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 366016009.996839,
      "curr_month_visits": 366016009.996839,
      "unique_users": 29577481.2221406,
      "pages_per_visit": 7.42871698409541
    },
    {
      "global_rank": 437,
      "category_rank": 1,
      "domain": "pikabu.ru",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 113812392.208735,
      "curr_month_visits": 113812392.208735,
      "unique_users": 34924969.5477445,
      "pages_per_visit": 3.47914274527847
    },
    {
      "global_rank": 41,
      "category_rank": 1,
      "domain": "fandom.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 818427569.823578,
      "curr_month_visits": 818427569.823578,
      "unique_users": 181523942.247102,
      "pages_per_visit": 4.1924033112278
    },
    {
      "global_rank": 1759,
      "category_rank": 1,
      "domain": "alphatron.tv",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 17115282.9606484,
      "curr_month_visits": 17115282.9606484,
      "unique_users": 2368476.42043516,
      "pages_per_visit": 4.59931376315243
    },
    {
      "global_rank": 153,
      "category_rank": 1,
      "domain": "archiveofourown.org",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 237814840.721961,
      "curr_month_visits": 237814840.721961,
      "unique_users": 11531958.3161697,
      "pages_per_visit": 8.07198795670709
    },
    {
      "global_rank": 24,
      "category_rank": 1,
      "domain": "bilibili.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 1249983443.24057,
      "curr_month_visits": 1249983443.24057,
      "unique_users": 71253902.3591465,
      "pages_per_visit": 13.3267672680198
    },
    {
      "global_rank": 64,
      "category_rank": 1,
      "domain": "spotify.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 502186518.61363,
      "curr_month_visits": 502186518.61363,
      "unique_users": 157322934.550775,
      "pages_per_visit": 5.8041325885937
    },
    {
      "global_rank": 2,
      "category_rank": 1,
      "domain": "youtube.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 28548584475.1491,
      "curr_month_visits": 28548584475.1491,
      "unique_users": 1726530275.90855,
      "pages_per_visit": 10.90407298755
    },
    {
      "global_rank": 48,
      "category_rank": 2,
      "domain": "zonatmo.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 348137599.244655,
      "curr_month_visits": 348137599.244655,
      "unique_users": 18734871.4556042,
      "pages_per_visit": 10.9158233666102
    },
    {
      "global_rank": 587,
      "category_rank": 2,
      "domain": "9gag.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 98392231.3549278,
      "curr_month_visits": 98392231.3549278,
      "unique_users": 10013735.9558036,
      "pages_per_visit": 3.99751584469044
    },
    {
      "global_rank": 26,
      "category_rank": 2,
      "domain": "netflix.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 1826923758.61596,
      "curr_month_visits": 1826923758.61596,
      "unique_users": 252071821.765411,
      "pages_per_visit": 3.74522584939886
    },
    {
      "global_rank": 113,
      "category_rank": 2,
      "domain": "dcinside.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 212344858.802398,
      "curr_month_visits": 212344858.802398,
      "unique_users": 16141346.8219884,
      "pages_per_visit": 15.1446452162942
    },
    {
      "global_rank": 308,
      "category_rank": 2,
      "domain": "wattpad.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 94526799.5762826,
      "curr_month_visits": 94526799.5762826,
      "unique_users": 19579080.8447813,
      "pages_per_visit": 11.1896154823765
    },
    {
      "global_rank": 255,
      "category_rank": 2,
      "domain": "genius.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 158164113.668344,
      "curr_month_visits": 158164113.668344,
      "unique_users": 74825986.7997305,
      "pages_per_visit": 2.9694225916065
    },
    {
      "global_rank": 258,
      "category_rank": 2,
      "domain": "deviantart.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 95405623.8065247,
      "curr_month_visits": 95405623.8065247,
      "unique_users": 19362392.3398576,
      "pages_per_visit": 12.2786969178281
    },
    {
      "global_rank": 10867,
      "category_rank": 2,
      "domain": "lk21online.mom",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 4050388.70508945,
      "curr_month_visits": 4050388.70508945,
      "unique_users": 509924.92183936,
      "pages_per_visit": 2.97015183123019
    },
    {
      "global_rank": 222,
      "category_rank": 3,
      "domain": "nate.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 119453610.193857,
      "curr_month_visits": 119453610.193857,
      "unique_users": 11825939.6440121,
      "pages_per_visit": 11.8681757113404
    },
    {
      "global_rank": 331,
      "category_rank": 3,
      "domain": "soundcloud.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 112653946.244453,
      "curr_month_visits": 112653946.244453,
      "unique_users": 32558914.0850035,
      "pages_per_visit": 5.15266162334068
    },
    {
      "global_rank": 802,
      "category_rank": 3,
      "domain": "pinimg.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 83690085.4524073,
      "curr_month_visits": 83690085.4524073,
      "unique_users": 37733880.1850873,
      "pages_per_visit": 2.47665957713902
    },
    {
      "global_rank": 13202,
      "category_rank": 3,
      "domain": "m-1gp.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 3248695.91992461,
      "curr_month_visits": 3248695.91992461,
      "unique_users": 1571671.18854637,
      "pages_per_visit": 3.0733315628883
    },
    {
      "global_rank": 75,
      "category_rank": 3,
      "domain": "imdb.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 485115819.893933,
      "curr_month_visits": 485115819.893933,
      "unique_users": 183438123.190091,
      "pages_per_visit": 4.29226512798109
    },
    {
      "global_rank": 214,
      "category_rank": 3,
      "domain": "cmoa.jp",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 112655675.763091,
      "curr_month_visits": 112655675.763091,
      "unique_users": 18287959.5294359,
      "pages_per_visit": 13.3534558101958
    },
    {
      "global_rank": 564,
      "category_rank": 3,
      "domain": "qidian.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 46994785.1798836,
      "curr_month_visits": 46994785.1798836,
      "unique_users": 7770220.08998713,
      "pages_per_visit": 16.237981055622
    },
    {
      "global_rank": 1188,
      "category_rank": 3,
      "domain": "behance.net",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 39145502.0049592,
      "curr_month_visits": 39145502.0049592,
      "unique_users": 12998783.9513031,
      "pages_per_visit": 5.61098126441109
    },
    {
      "global_rank": 13422,
      "category_rank": 4,
      "domain": "backstage.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 4438132.24554776,
      "curr_month_visits": 4438132.24554776,
      "unique_users": 1989258.71817858,
      "pages_per_visit": 4.93955843665407
    },
    {
      "global_rank": 2068,
      "category_rank": 4,
      "domain": "vsco.co",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 19256828.1860417,
      "curr_month_visits": 19256828.1860417,
      "unique_users": 5589879.50901185,
      "pages_per_visit": 7.20028351661338
    },
    {
      "global_rank": 234,
      "category_rank": 4,
      "domain": "spoilerplus.tv",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 139938327.570361,
      "curr_month_visits": 139938327.570361,
      "unique_users": 2781493.70583353,
      "pages_per_visit": 12.5860927546582
    },
    {
      "global_rank": 634,
      "category_rank": 4,
      "domain": "music.yandex.ru",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 76042965.3965306,
      "curr_month_visits": 76042965.3965306,
      "unique_users": 12500376.8882332,
      "pages_per_visit": 4.89857946397463
    },
    {
      "global_rank": 1165,
      "category_rank": 4,
      "domain": "fishki.net",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 19373019.3328742,
      "curr_month_visits": 19373019.3328742,
      "unique_users": 4378226.80199268,
      "pages_per_visit": 25.6052098888466
    },
    {
      "global_rank": 616,
      "category_rank": 4,
      "domain": "novelbin.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 78129256.8729053,
      "curr_month_visits": 78129256.8729053,
      "unique_users": 3820691.83068331,
      "pages_per_visit": 7.53124363736609
    },
    {
      "global_rank": 224,
      "category_rank": 4,
      "domain": "freepik.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 115778284.918474,
      "curr_month_visits": 115778284.918474,
      "unique_users": 42603008.794708,
      "pages_per_visit": 8.08817081798524
    },
    {
      "global_rank": 118,
      "category_rank": 4,
      "domain": "disneyplus.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 335864474.433682,
      "curr_month_visits": 335864474.433682,
      "unique_users": 76350233.7101566,
      "pages_per_visit": 4.51262059908063
    },
    {
      "global_rank": 1268,
      "category_rank": 5,
      "domain": "fanfiction.net",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 42345521.5170173,
      "curr_month_visits": 42345521.5170173,
      "unique_users": 3045902.2141553,
      "pages_per_visit": 7.57313844052419
    },
    {
      "global_rank": 14006,
      "category_rank": 5,
      "domain": "intickets.ru",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 3824538.23634435,
      "curr_month_visits": 3824538.23634435,
      "unique_users": 1941760.58676807,
      "pages_per_visit": 4.17037498142567
    },
    {
      "global_rank": 2404,
      "category_rank": 5,
      "domain": "vidshare.site",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 24062820.4166469,
      "curr_month_visits": 24062820.4166469,
      "unique_users": 3715748.21526964,
      "pages_per_visit": 3.50247585783102
    },
    {
      "global_rank": 292,
      "category_rank": 5,
      "domain": "syosetu.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 124101154.079253,
      "curr_month_visits": 124101154.079253,
      "unique_users": 6231497.41296062,
      "pages_per_visit": 10.0674690782411
    },
    {
      "global_rank": 770,
      "category_rank": 5,
      "domain": "twkan.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 57433062.9486132,
      "curr_month_visits": 57433062.9486132,
      "unique_users": 1482660.72430012,
      "pages_per_visit": 15.8538824371961
    },
    {
      "global_rank": 676,
      "category_rank": 5,
      "domain": "npr.org",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 91586208.3944505,
      "curr_month_visits": 91586208.3944505,
      "unique_users": 37015704.5005904,
      "pages_per_visit": 1.79528656433556
    },
    {
      "global_rank": 319,
      "category_rank": 5,
      "domain": "culturanimation.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 70619323.6849914,
      "curr_month_visits": 70619323.6849914,
      "unique_users": 10686905.4147894,
      "pages_per_visit": 4.99805336235112
    },
    {
      "global_rank": 120,
      "category_rank": 5,
      "domain": "hianime.to",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 332611883.835983,
      "curr_month_visits": 332611883.835983,
      "unique_users": 28535449.0781648,
      "pages_per_visit": 5.21023628151118
    },
    {
      "global_rank": 369,
      "category_rank": 6,
      "domain": "douban.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 80155845.6899263,
      "curr_month_visits": 80155845.6899263,
      "unique_users": 25094503.7659046,
      "pages_per_visit": 8.67491252631485
    },
    {
      "global_rank": 2238,
      "category_rank": 6,
      "domain": "fraviral.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 11890626.1774605,
      "curr_month_visits": 11890626.1774605,
      "unique_users": 1183740.29174497,
      "pages_per_visit": 4.71984642280235
    },
    {
      "global_rank": 122,
      "category_rank": 6,
      "domain": "kwai-video.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 571007357.588809,
      "curr_month_visits": 571007357.588809,
      "unique_users": 56501330.460474,
      "pages_per_visit": 2.07994141020585
    },
    {
      "global_rank": 796,
      "category_rank": 6,
      "domain": "discogs.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 38057057.752393,
      "curr_month_visits": 38057057.752393,
      "unique_users": 10033881.8574438,
      "pages_per_visit": 12.3180670413891
    },
    {
      "global_rank": 844,
      "category_rank": 6,
      "domain": "69shuba.cx",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 211573086.315016,
      "curr_month_visits": 211573086.315016,
      "unique_users": 5086786.98599201,
      "pages_per_visit": 12.3071907711932
    },
    {
      "global_rank": 325,
      "category_rank": 6,
      "domain": "mechacomic.jp",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 92318773.7881393,
      "curr_month_visits": 92318773.7881393,
      "unique_users": 14301394.1977031,
      "pages_per_visit": 12.2525145838279
    },
    {
      "global_rank": 14146,
      "category_rank": 6,
      "domain": "frontgatetickets.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 4446896.77224935,
      "curr_month_visits": 4446896.77224935,
      "unique_users": 2586350.79737007,
      "pages_per_visit": 3.88215428880953
    },
    {
      "global_rank": 2406,
      "category_rank": 6,
      "domain": "download.vidshare.site",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 24061998.3236566,
      "curr_month_visits": 24061998.3236566,
      "unique_users": 3715216.48751216,
      "pages_per_visit": 3.50243182299702
    },
    {
      "global_rank": 2465,
      "category_rank": 7,
      "domain": "downloadmv.site",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 22002979.2641808,
      "curr_month_visits": 22002979.2641808,
      "unique_users": 4221309.93525591,
      "pages_per_visit": 3.38693000522182
    },
    {
      "global_rank": 448,
      "category_rank": 7,
      "domain": "twimg.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 95981209.8738444,
      "curr_month_visits": 95981209.8738444,
      "unique_users": 23043809.5157365,
      "pages_per_visit": 4.15288979370336
    },
    {
      "global_rank": 143,
      "category_rank": 7,
      "domain": "rutube.ru",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 290130863.75133,
      "curr_month_visits": 290130863.75133,
      "unique_users": 69109548.9173923,
      "pages_per_visit": 3.73445713048201
    },
    {
      "global_rank": 1275,
      "category_rank": 7,
      "domain": "wuxiabox.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 38626734.7484549,
      "curr_month_visits": 38626734.7484549,
      "unique_users": 1312060.59352643,
      "pages_per_visit": 18.1822275320509
    },
    {
      "global_rank": 349,
      "category_rank": 7,
      "domain": "recetasmaria.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 67427967.4099379,
      "curr_month_visits": 67427967.4099379,
      "unique_users": 10377164.250909,
      "pages_per_visit": 4.98996146092553
    },
    {
      "global_rank": 2413,
      "category_rank": 7,
      "domain": "tenor.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 26412811.4855683,
      "curr_month_visits": 26412811.4855683,
      "unique_users": 16315464.4117654,
      "pages_per_visit": 2.58342087509075
    },
    {
      "global_rank": 16819,
      "category_rank": 7,
      "domain": "framed.wtf",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 4699603.50966114,
      "curr_month_visits": 4699603.50966114,
      "unique_users": 619705.776274125,
      "pages_per_visit": 2.30922435065972
    },
    {
      "global_rank": 891,
      "category_rank": 7,
      "domain": "ultimate-guitar.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 55544268.468032,
      "curr_month_visits": 55544268.468032,
      "unique_users": 17719885.5057037,
      "pages_per_visit": 3.58552185484097
    },
    {
      "global_rank": 1383,
      "category_rank": 8,
      "domain": "litnet.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 32329340.5412574,
      "curr_month_visits": 32329340.5412574,
      "unique_users": 2482973.71059416,
      "pages_per_visit": 9.96959552655644
    },
    {
      "global_rank": 18229,
      "category_rank": 8,
      "domain": "quicktickets.ru",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 3024634.48937211,
      "curr_month_visits": 3024634.48937211,
      "unique_users": 1251693.72201363,
      "pages_per_visit": 4.09383910878522
    },
    {
      "global_rank": 2467,
      "category_rank": 8,
      "domain": "movies.downloadmv.site",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 22002088.1428609,
      "curr_month_visits": 22002088.1428609,
      "unique_users": 4220946.27738445,
      "pages_per_visit": 3.38688393226638
    },
    {
      "global_rank": 2664,
      "category_rank": 8,
      "domain": "yaplakal.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 19365423.3907285,
      "curr_month_visits": 19365423.3907285,
      "unique_users": 2801469.29145007,
      "pages_per_visit": 7.73395347717027
    },
    {
      "global_rank": 185,
      "category_rank": 8,
      "domain": "primevideo.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 235382993.491075,
      "curr_month_visits": 235382993.491075,
      "unique_users": 75797307.487837,
      "pages_per_visit": 2.82899344131101
    },
    {
      "global_rank": 1103,
      "category_rank": 8,
      "domain": "hitmotop.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 55474153.4706577,
      "curr_month_visits": 55474153.4706577,
      "unique_users": 13629783.7667139,
      "pages_per_visit": 2.82804940618058
    },
    {
      "global_rank": 353,
      "category_rank": 8,
      "domain": "nombresmolones.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 67175105.8576408,
      "curr_month_visits": 67175105.8576408,
      "unique_users": 10255484.1320372,
      "pages_per_visit": 4.98873017761411
    },
    {
      "global_rank": 458,
      "category_rank": 8,
      "domain": "go.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 106139644.425397,
      "curr_month_visits": 106139644.425397,
      "unique_users": 48920392.9972806,
      "pages_per_visit": 2.38054493829343
    },
    {
      "global_rank": 658,
      "category_rank": 9,
      "domain": "bookmyshow.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 66672943.9538517,
      "curr_month_visits": 66672943.9538517,
      "unique_users": 27015900.4572857,
      "pages_per_visit": 4.29770333019749
    },
    {
      "global_rank": 2707,
      "category_rank": 9,
      "domain": "cheezburger.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 29676564.6991765,
      "curr_month_visits": 29676564.6991765,
      "unique_users": 7694244.84022161,
      "pages_per_visit": 2.31111518060308
    },
    {
      "global_rank": 1238,
      "category_rank": 9,
      "domain": "oobsaurt.net",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 34998697.214079,
      "curr_month_visits": 34998697.214079,
      "unique_users": 13114002.7999792,
      "pages_per_visit": 3.69000306855768
    },
    {
      "global_rank": 208,
      "category_rank": 9,
      "domain": "max.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 225181072.7793,
      "curr_month_visits": 225181072.7793,
      "unique_users": 43917166.8701498,
      "pages_per_visit": 3.64239253957366
    },
    {
      "global_rank": 366,
      "category_rank": 9,
      "domain": "mangadex.org",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 50546851.7233302,
      "curr_month_visits": 50546851.7233302,
      "unique_users": 7666265.81768839,
      "pages_per_visit": 25.8123783714335
    },
    {
      "global_rank": 20163,
      "category_rank": 9,
      "domain": "broadway.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 2581846.0613621,
      "curr_month_visits": 2581846.0613621,
      "unique_users": 1763859.74802455,
      "pages_per_visit": 3.96574563117929
    },
    {
      "global_rank": 2590,
      "category_rank": 9,
      "domain": "vecteezy.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 20704868.1423669,
      "curr_month_visits": 20704868.1423669,
      "unique_users": 12489778.3860233,
      "pages_per_visit": 3.84986918103781
    },
    {
      "global_rank": 1634,
      "category_rank": 9,
      "domain": "author.today",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 43423439.8166214,
      "curr_month_visits": 43423439.8166214,
      "unique_users": 3668516.54854703,
      "pages_per_visit": 4.78178381096022
    },
    {
      "global_rank": 405,
      "category_rank": 10,
      "domain": "aniwatchtv.to",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 112271476.343524,
      "curr_month_visits": 112271476.343524,
      "unique_users": 12208828.5719045,
      "pages_per_visit": 5.09302741995793
    },
    {
      "global_rank": 1393,
      "category_rank": 10,
      "domain": "ilbe.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 27522753.3181703,
      "curr_month_visits": 27522753.3181703,
      "unique_users": 2319972.05983833,
      "pages_per_visit": 15.7326884418424
    },
    {
      "global_rank": 814,
      "category_rank": 10,
      "domain": "2345.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 103148230.203146,
      "curr_month_visits": 103148230.203146,
      "unique_users": 14606319.8310467,
      "pages_per_visit": 1.82190029455245
    },
    {
      "global_rank": 1921,
      "category_rank": 10,
      "domain": "vitalsource.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 17995037.5050963,
      "curr_month_visits": 17995037.5050963,
      "unique_users": 3646303.64534702,
      "pages_per_visit": 16.6610226532446
    },
    {
      "global_rank": 3070,
      "category_rank": 10,
      "domain": "insta-stories-viewer.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 24691094.6850342,
      "curr_month_visits": 24691094.6850342,
      "unique_users": 3311156.57456208,
      "pages_per_visit": 2.93703580467971
    },
    {
      "global_rank": 20621,
      "category_rank": 10,
      "domain": "cirquedusoleil.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 2621528.82578495,
      "curr_month_visits": 2621528.82578495,
      "unique_users": 1719884.16235451,
      "pages_per_visit": 3.27461266202694
    },
    {
      "global_rank": 228,
      "category_rank": 10,
      "domain": "dailymotion.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 182814303.308046,
      "curr_month_visits": 182814303.308046,
      "unique_users": 74725812.1881706,
      "pages_per_visit": 2.80503884096265
    },
    {
      "global_rank": 2738,
      "category_rank": 10,
      "domain": "pngtree.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 19730226.2163665,
      "curr_month_visits": 19730226.2163665,
      "unique_users": 12277194.0094793,
      "pages_per_visit": 3.73089956630236
    },
    {
      "global_rank": 1425,
      "category_rank": 11,
      "domain": "y2mate.nu",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 35308626.060266,
      "curr_month_visits": 35308626.060266,
      "unique_users": 15154925.5483184,
      "pages_per_visit": 3.22885615506904
    },
    {
      "global_rank": 823,
      "category_rank": 11,
      "domain": "suki-kira.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 49543179.2514779,
      "curr_month_visits": 49543179.2514779,
      "unique_users": 5893162.33802001,
      "pages_per_visit": 11.4737027747339
    },
    {
      "global_rank": 1970,
      "category_rank": 11,
      "domain": "ficbook.net",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 30240329.3975405,
      "curr_month_visits": 30240329.3975405,
      "unique_users": 2581642.10399418,
      "pages_per_visit": 6.77038540652511
    },
    {
      "global_rank": 3110,
      "category_rank": 11,
      "domain": "change.org",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 21646698.7996117,
      "curr_month_visits": 21646698.7996117,
      "unique_users": 12497607.3757832,
      "pages_per_visit": 2.583794504761
    },
    {
      "global_rank": 21594,
      "category_rank": 11,
      "domain": "shiki.jp",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 2342418.62064403,
      "curr_month_visits": 2342418.62064403,
      "unique_users": 968962.824530261,
      "pages_per_visit": 5.1821943179016
    },
    {
      "global_rank": 2902,
      "category_rank": 11,
      "domain": "artstation.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 15600245.1088923,
      "curr_month_visits": 15600245.1088923,
      "unique_users": 4773685.70843127,
      "pages_per_visit": 7.53909174348229
    },
    {
      "global_rank": 434,
      "category_rank": 11,
      "domain": "mangaraw.ma",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 44289816.5110083,
      "curr_month_visits": 44289816.5110083,
      "unique_users": 2681329.70647143,
      "pages_per_visit": 15.4295336225944
    },
    {
      "global_rank": 238,
      "category_rank": 11,
      "domain": "hulu.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 172694428.337109,
      "curr_month_visits": 172694428.337109,
      "unique_users": 47658904.7346948,
      "pages_per_visit": 4.0395906879463
    },
    {
      "global_rank": 2190,
      "category_rank": 12,
      "domain": "tvtropes.org",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 21350382.8013366,
      "curr_month_visits": 21350382.8013366,
      "unique_users": 3964927.19458536,
      "pages_per_visit": 7.9770711844388
    },
    {
      "global_rank": 5485,
      "category_rank": 12,
      "domain": "demotywatory.pl",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 12904001.9738644,
      "curr_month_visits": 12904001.9738644,
      "unique_users": 1526929.5803008,
      "pages_per_visit": 4.58897588226544
    },
    {
      "global_rank": 5807,
      "category_rank": 12,
      "domain": "kaliham.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 5818531.25741132,
      "curr_month_visits": 5818531.25741132,
      "unique_users": 999698.090925587,
      "pages_per_visit": 3.34768304676974
    },
    {
      "global_rank": 828,
      "category_rank": 12,
      "domain": "bilibili.tv",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 60085370.4036079,
      "curr_month_visits": 60085370.4036079,
      "unique_users": 21978623.6925928,
      "pages_per_visit": 3.55561038077267
    },
    {
      "global_rank": 1447,
      "category_rank": 12,
      "domain": "letras.mus.br",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 49221549.5000264,
      "curr_month_visits": 49221549.5000264,
      "unique_users": 22183555.5651383,
      "pages_per_visit": 1.99709393933082
    },
    {
      "global_rank": 512,
      "category_rank": 12,
      "domain": "9animetv.to",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 95596262.731318,
      "curr_month_visits": 95596262.731318,
      "unique_users": 10466729.2662222,
      "pages_per_visit": 4.66591737788956
    },
    {
      "global_rank": 22776,
      "category_rank": 12,
      "domain": "ticketsolve.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1673923.15814865,
      "curr_month_visits": 1673923.15814865,
      "unique_users": 852170.73287775,
      "pages_per_visit": 8.46204688745481
    },
    {
      "global_rank": 267,
      "category_rank": 12,
      "domain": "kinopoisk.ru",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 152147787.953134,
      "curr_month_visits": 152147787.953134,
      "unique_users": 40565376.2906068,
      "pages_per_visit": 3.86706537415335
    },
    {
      "global_rank": 5562,
      "category_rank": 13,
      "domain": "1gr.cz",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 21509894.5523307,
      "curr_month_visits": 21509894.5523307,
      "unique_users": 1568524.56807323,
      "pages_per_visit": 2.14185638485812
    },
    {
      "global_rank": 2268,
      "category_rank": 13,
      "domain": "spaggiari.eu",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 18718858.7127591,
      "curr_month_visits": 18718858.7127591,
      "unique_users": 1938564.36186967,
      "pages_per_visit": 8.84237689192606
    },
    {
      "global_rank": 6626,
      "category_rank": 13,
      "domain": "static1.squarespace.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 13130095.2560819,
      "curr_month_visits": 13130095.2560819,
      "unique_users": 8814168.07827096,
      "pages_per_visit": 1.75238269074472
    },
    {
      "global_rank": 1005,
      "category_rank": 13,
      "domain": "oricon.co.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 61987481.7170807,
      "curr_month_visits": 61987481.7170807,
      "unique_users": 33000891.4323296,
      "pages_per_visit": 2.291160824973
    },
    {
      "global_rank": 24468,
      "category_rank": 13,
      "domain": "broadwayworld.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 2318562.24847944,
      "curr_month_visits": 2318562.24847944,
      "unique_users": 1433177.11742279,
      "pages_per_visit": 2.31350316124603
    },
    {
      "global_rank": 528,
      "category_rank": 13,
      "domain": "animeflv.net",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 100108361.722972,
      "curr_month_visits": 100108361.722972,
      "unique_users": 7844922.39675871,
      "pages_per_visit": 4.23887125137271
    },
    {
      "global_rank": 279,
      "category_rank": 13,
      "domain": "nicovideo.jp",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 133283581.058111,
      "curr_month_visits": 133283581.058111,
      "unique_users": 19051536.8987999,
      "pages_per_visit": 6.72640086490627
    },
    {
      "global_rank": 1460,
      "category_rank": 13,
      "domain": "last.fm",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 31679933.9261586,
      "curr_month_visits": 31679933.9261586,
      "unique_users": 12571820.1095856,
      "pages_per_visit": 5.60331362212069
    },
    {
      "global_rank": 1080,
      "category_rank": 14,
      "domain": "unext.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 45285072.0597846,
      "curr_month_visits": 45285072.0597846,
      "unique_users": 13069207.9436302,
      "pages_per_visit": 4.88523207141605
    },
    {
      "global_rank": 2299,
      "category_rank": 14,
      "domain": "jjwxc.net",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 22601171.8102418,
      "curr_month_visits": 22601171.8102418,
      "unique_users": 3024941.07776698,
      "pages_per_visit": 8.73253468000861
    },
    {
      "global_rank": 1642,
      "category_rank": 14,
      "domain": "letras.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 41934396.7270661,
      "curr_month_visits": 41934396.7270661,
      "unique_users": 23633322.5972842,
      "pages_per_visit": 2.01217930264195
    },
    {
      "global_rank": 5667,
      "category_rank": 14,
      "domain": "funnyjunk.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 5716620.11325887,
      "curr_month_visits": 5716620.11325887,
      "unique_users": 780742.409011871,
      "pages_per_visit": 28.7702707485731
    },
    {
      "global_rank": 284,
      "category_rank": 14,
      "domain": "xfinity.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 127895564.950983,
      "curr_month_visits": 127895564.950983,
      "unique_users": 28172646.7341834,
      "pages_per_visit": 6.13768790930982
    },
    {
      "global_rank": 24792,
      "category_rank": 14,
      "domain": "actorsaccess.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1974418.39822792,
      "curr_month_visits": 1974418.39822792,
      "unique_users": 321288.568468664,
      "pages_per_visit": 9.08597342838173
    },
    {
      "global_rank": 7984,
      "category_rank": 14,
      "domain": "ezgif.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 6478223.44391625,
      "curr_month_visits": 6478223.44391625,
      "unique_users": 2967014.98009461,
      "pages_per_visit": 5.45792021355042
    },
    {
      "global_rank": 582,
      "category_rank": 14,
      "domain": "mgeko.cc",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 73471870.5009191,
      "curr_month_visits": 73471870.5009191,
      "unique_users": 6553477.95160601,
      "pages_per_visit": 8.10292002861338
    },
    {
      "global_rank": 2359,
      "category_rank": 15,
      "domain": "afrsportsbetting.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 29653595.7420509,
      "curr_month_visits": 29653595.7420509,
      "unique_users": 16870875.7406061,
      "pages_per_visit": 1.21346327615041
    },
    {
      "global_rank": 1147,
      "category_rank": 15,
      "domain": "walkerplus.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 29317549.9852902,
      "curr_month_visits": 29317549.9852902,
      "unique_users": 17424163.7729726,
      "pages_per_visit": 6.97777037309335
    },
    {
      "global_rank": 1696,
      "category_rank": 15,
      "domain": "bandcamp.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 30697292.7646478,
      "curr_month_visits": 30697292.7646478,
      "unique_users": 11294786.7902129,
      "pages_per_visit": 4.57427674052777
    },
    {
      "global_rank": 8654,
      "category_rank": 15,
      "domain": "aryion.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 2775553.66050452,
      "curr_month_visits": 2775553.66050452,
      "unique_users": 501793.932882807,
      "pages_per_visit": 32.2696299498925
    },
    {
      "global_rank": 376,
      "category_rank": 15,
      "domain": "streamingcommunity.computer",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 107218982.082888,
      "curr_month_visits": 107218982.082888,
      "unique_users": 7312018.53837719,
      "pages_per_visit": 3.9098353831836
    },
    {
      "global_rank": 25443,
      "category_rank": 15,
      "domain": "ticketon.kz",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 2567956.69272924,
      "curr_month_visits": 2567956.69272924,
      "unique_users": 899559.38948645,
      "pages_per_visit": 2.57366807317166
    },
    {
      "global_rank": 6318,
      "category_rank": 15,
      "domain": "knowyourmeme.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 10583938.8903045,
      "curr_month_visits": 10583938.8903045,
      "unique_users": 6389854.28860478,
      "pages_per_visit": 2.78294636745947
    },
    {
      "global_rank": 619,
      "category_rank": 15,
      "domain": "spoilerplus.blog",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 29356436.6552891,
      "curr_month_visits": 29356436.6552891,
      "unique_users": 3929766.09920926,
      "pages_per_visit": 9.54130640317571
    },
    {
      "global_rank": 386,
      "category_rank": 16,
      "domain": "crunchyroll.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 122131685.051587,
      "curr_month_visits": 122131685.051587,
      "unique_users": 21692503.9494163,
      "pages_per_visit": 4.13970057009281
    },
    {
      "global_rank": 2125,
      "category_rank": 16,
      "domain": "thomann.de",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 17086149.9045399,
      "curr_month_visits": 17086149.9045399,
      "unique_users": 5689839.72523933,
      "pages_per_visit": 7.74630987547319
    },
    {
      "global_rank": 25890,
      "category_rank": 16,
      "domain": "ticketsource.co.uk",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 2040296.14675503,
      "curr_month_visits": 2040296.14675503,
      "unique_users": 1063446.57799973,
      "pages_per_visit": 4.14017122001636
    },
    {
      "global_rank": 644,
      "category_rank": 16,
      "domain": "mangago.me",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 41858259.8226728,
      "curr_month_visits": 41858259.8226728,
      "unique_users": 3283541.24571692,
      "pages_per_visit": 19.7421205995743
    },
    {
      "global_rank": 6487,
      "category_rank": 16,
      "domain": "pleated-jeans.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 8876731.81424595,
      "curr_month_visits": 8876731.81424595,
      "unique_users": 2027251.72403931,
      "pages_per_visit": 2.66876044176104
    },
    {
      "global_rank": 11364,
      "category_rank": 16,
      "domain": "3d-galleru.ru",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 4304071.60442455,
      "curr_month_visits": 4304071.60442455,
      "unique_users": 1518894.08194278,
      "pages_per_visit": 4.94393806986234
    },
    {
      "global_rank": 1298,
      "category_rank": 16,
      "domain": "pudelek.pl",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 63061254.0838102,
      "curr_month_visits": 63061254.0838102,
      "unique_users": 8583402.27450581,
      "pages_per_visit": 2.12780421099834
    },
    {
      "global_rank": 2379,
      "category_rank": 16,
      "domain": "fictionzone.net",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 16952042.5022254,
      "curr_month_visits": 16952042.5022254,
      "unique_users": 797871.629131981,
      "pages_per_visit": 12.0431708695628
    },
    {
      "global_rank": 646,
      "category_rank": 17,
      "domain": "jut.su",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 88014200.7694324,
      "curr_month_visits": 88014200.7694324,
      "unique_users": 10131471.3503238,
      "pages_per_visit": 3.76423225118
    },
    {
      "global_rank": 2170,
      "category_rank": 17,
      "domain": "iheart.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 30166131.2648977,
      "curr_month_visits": 30166131.2648977,
      "unique_users": 14526619.7708274,
      "pages_per_visit": 2.38661634890825
    },
    {
      "global_rank": 11487,
      "category_rank": 17,
      "domain": "novafork.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 4660577.55922009,
      "curr_month_visits": 4660577.55922009,
      "unique_users": 1645624.60791176,
      "pages_per_visit": 2.07286233386422
    },
    {
      "global_rank": 6797,
      "category_rank": 17,
      "domain": "kiwifarms.st",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 8122431.40853324,
      "curr_month_visits": 8122431.40853324,
      "unique_users": 718340.675565404,
      "pages_per_visit": 9.30786252035689
    },
    {
      "global_rank": 399,
      "category_rank": 17,
      "domain": "wecima.movie",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 82615344.252547,
      "curr_month_visits": 82615344.252547,
      "unique_users": 9221473.00219661,
      "pages_per_visit": 4.04933196167726
    },
    {
      "global_rank": 1536,
      "category_rank": 17,
      "domain": "mydramalist.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 29517933.5456916,
      "curr_month_visits": 29517933.5456916,
      "unique_users": 7796032.30791998,
      "pages_per_visit": 5.35807800460449
    },
    {
      "global_rank": 27868,
      "category_rank": 17,
      "domain": "e-get.jp",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1052296.14279515,
      "curr_month_visits": 1052296.14279515,
      "unique_users": 426434.20087342,
      "pages_per_visit": 13.4639472295234
    },
    {
      "global_rank": 2458,
      "category_rank": 17,
      "domain": "mtlnovels.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 13935268.8722923,
      "curr_month_visits": 13935268.8722923,
      "unique_users": 1201538.58523225,
      "pages_per_visit": 14.2696583540271
    },
    {
      "global_rank": 28806,
      "category_rank": 18,
      "domain": "broadwaydirect.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1423127.47443483,
      "curr_month_visits": 1423127.47443483,
      "unique_users": 683841.588193022,
      "pages_per_visit": 5.49032772051945
    },
    {
      "global_rank": 2533,
      "category_rank": 18,
      "domain": "rateyourmusic.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 15033098.8311943,
      "curr_month_visits": 15033098.8311943,
      "unique_users": 2826108.68736318,
      "pages_per_visit": 12.319394140272
    },
    {
      "global_rank": 476,
      "category_rank": 18,
      "domain": "loobygameshub.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 100675055.038916,
      "curr_month_visits": 100675055.038916,
      "unique_users": 4498042.45851975,
      "pages_per_visit": 4.77289474558756
    },
    {
      "global_rank": 7019,
      "category_rank": 18,
      "domain": "joemonster.org",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 8823292.50293911,
      "curr_month_visits": 8823292.50293911,
      "unique_users": 1103270.67551923,
      "pages_per_visit": 6.34138907167208
    },
    {
      "global_rank": 1600,
      "category_rank": 18,
      "domain": "syosetu.org",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 31415927.3980437,
      "curr_month_visits": 31415927.3980437,
      "unique_users": 1361239.81927864,
      "pages_per_visit": 10.7321608700073
    },
    {
      "global_rank": 11550,
      "category_rank": 18,
      "domain": "newtoki.biz",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 3003209.27935098,
      "curr_month_visits": 3003209.27935098,
      "unique_users": 738545.155315904,
      "pages_per_visit": 10.7093004827192
    },
    {
      "global_rank": 2604,
      "category_rank": 18,
      "domain": "mangabuff.ru",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 16028510.9981864,
      "curr_month_visits": 16028510.9981864,
      "unique_users": 1089921.2520961,
      "pages_per_visit": 12.0121671524301
    },
    {
      "global_rank": 672,
      "category_rank": 18,
      "domain": "mangalib.me",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 38762991.9706083,
      "curr_month_visits": 38762991.9706083,
      "unique_users": 4330492.89155586,
      "pages_per_visit": 20.7813518600575
    },
    {
      "global_rank": 2711,
      "category_rank": 19,
      "domain": "webnovel.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 17528801.5659474,
      "curr_month_visits": 17528801.5659474,
      "unique_users": 3054764.97828126,
      "pages_per_visit": 8.99050820707538
    },
    {
      "global_rank": 2682,
      "category_rank": 19,
      "domain": "cadenaser.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 31106179.2768545,
      "curr_month_visits": 31106179.2768545,
      "unique_users": 10110534.9192905,
      "pages_per_visit": 1.82720965641308
    },
    {
      "global_rank": 11701,
      "category_rank": 19,
      "domain": "emojicombos.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 7394378.52112032,
      "curr_month_visits": 7394378.52112032,
      "unique_users": 3488995.51656382,
      "pages_per_visit": 2.01931319271838
    },
    {
      "global_rank": 28975,
      "category_rank": 19,
      "domain": "ovationtix.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 2005760.50544087,
      "curr_month_visits": 2005760.50544087,
      "unique_users": 1215797.12361359,
      "pages_per_visit": 3.55476322137279
    },
    {
      "global_rank": 7593,
      "category_rank": 19,
      "domain": "thechive.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 8456046.6345898,
      "curr_month_visits": 8456046.6345898,
      "unique_users": 1377632.30461292,
      "pages_per_visit": 5.21656651841975
    },
    {
      "global_rank": 1620,
      "category_rank": 19,
      "domain": "tsite.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 31136548.8466069,
      "curr_month_visits": 31136548.8466069,
      "unique_users": 5532742.67560929,
      "pages_per_visit": 6.63866732614374
    },
    {
      "global_rank": 484,
      "category_rank": 19,
      "domain": "tenki.jp",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 146704760.81448,
      "curr_month_visits": 146704760.81448,
      "unique_users": 22770046.2543822,
      "pages_per_visit": 2.35994993252557
    },
    {
      "global_rank": 697,
      "category_rank": 19,
      "domain": "chapmanganato.to",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 62925262.3120815,
      "curr_month_visits": 62925262.3120815,
      "unique_users": 4362057.53825824,
      "pages_per_visit": 8.03352401926468
    },
    {
      "global_rank": 8446,
      "category_rank": 20,
      "domain": "kwejk.pl",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 8770995.02257788,
      "curr_month_visits": 8770995.02257788,
      "unique_users": 1048500.24285759,
      "pages_per_visit": 4.12123851002281
    },
    {
      "global_rank": 486,
      "category_rank": 20,
      "domain": "peacocktv.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 84420703.4678304,
      "curr_month_visits": 84420703.4678304,
      "unique_users": 26950220.1232257,
      "pages_per_visit": 5.11471026125026
    },
    {
      "global_rank": 752,
      "category_rank": 20,
      "domain": "kingofshojo.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 55209900.0729904,
      "curr_month_visits": 55209900.0729904,
      "unique_users": 7893605.69118121,
      "pages_per_visit": 7.88267950651701
    },
    {
      "global_rank": 2767,
      "category_rank": 20,
      "domain": "pagalfree.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 16617294.1845095,
      "curr_month_visits": 16617294.1845095,
      "unique_users": 7759459.04149563,
      "pages_per_visit": 6.50297953288437
    },
    {
      "global_rank": 29985,
      "category_rank": 20,
      "domain": "playbill.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 2423090.39534144,
      "curr_month_visits": 2423090.39534144,
      "unique_users": 1174431.91782926,
      "pages_per_visit": 2.32223783986195
    },
    {
      "global_rank": 12108,
      "category_rank": 20,
      "domain": "repelisplus.lat",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 6720628.5795042,
      "curr_month_visits": 6720628.5795042,
      "unique_users": 1956218.64210157,
      "pages_per_visit": 3.2333077079309
    },
    {
      "global_rank": 2848,
      "category_rank": 20,
      "domain": "52shuku.vip",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 14029235.4865091,
      "curr_month_visits": 14029235.4865091,
      "unique_users": 1159048.93860497,
      "pages_per_visit": 16.6498429639562
    },
    {
      "global_rank": 1626,
      "category_rank": 20,
      "domain": "tmz.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 53955371.9711155,
      "curr_month_visits": 53955371.9711155,
      "unique_users": 16283298.5520399,
      "pages_per_visit": 2.3708902834688
    },
    {
      "global_rank": 2805,
      "category_rank": 21,
      "domain": "deezer.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 18524918.4612148,
      "curr_month_visits": 18524918.4612148,
      "unique_users": 8815535.58845322,
      "pages_per_visit": 4.03407588659412
    },
    {
      "global_rank": 555,
      "category_rank": 21,
      "domain": "nhk.or.jp",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 113164758.887983,
      "curr_month_visits": 113164758.887983,
      "unique_users": 33664206.3216766,
      "pages_per_visit": 2.42191557301356
    },
    {
      "global_rank": 2995,
      "category_rank": 21,
      "domain": "issuu.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 26565257.7592816,
      "curr_month_visits": 26565257.7592816,
      "unique_users": 17507194.7274314,
      "pages_per_visit": 1.96948989527475
    },
    {
      "global_rank": 12989,
      "category_rank": 21,
      "domain": "wallhaven.cc",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 2385853.47832906,
      "curr_month_visits": 2385853.47832906,
      "unique_users": 1062735.41282336,
      "pages_per_visit": 15.4223859904185
    },
    {
      "global_rank": 8595,
      "category_rank": 21,
      "domain": "xkcd.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 7221382.42237994,
      "curr_month_visits": 7221382.42237994,
      "unique_users": 2320969.03601884,
      "pages_per_visit": 3.8942437305541
    },
    {
      "global_rank": 912,
      "category_rank": 21,
      "domain": "piccoma.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 37179002.3487563,
      "curr_month_visits": 37179002.3487563,
      "unique_users": 5396627.7689695,
      "pages_per_visit": 14.677780705963
    },
    {
      "global_rank": 30058,
      "category_rank": 21,
      "domain": "mariinsky.ru",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1224953.38423949,
      "curr_month_visits": 1224953.38423949,
      "unique_users": 471756.927322601,
      "pages_per_visit": 4.93659991154361
    },
    {
      "global_rank": 1653,
      "category_rank": 21,
      "domain": "myanimelist.net",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 32064011.1488367,
      "curr_month_visits": 32064011.1488367,
      "unique_users": 8564861.58593458,
      "pages_per_visit": 5.25046500495599
    },
    {
      "global_rank": 30354,
      "category_rank": 22,
      "domain": "kassy.ru",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1849772.08463265,
      "curr_month_visits": 1849772.08463265,
      "unique_users": 861876.507665098,
      "pages_per_visit": 3.85902127647323
    },
    {
      "global_rank": 8661,
      "category_rank": 22,
      "domain": "joyreactor.cc",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 8286614.47614657,
      "curr_month_visits": 8286614.47614657,
      "unique_users": 1539286.19997743,
      "pages_per_visit": 6.18304734063906
    },
    {
      "global_rank": 1773,
      "category_rank": 22,
      "domain": "gofundme.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 40322745.0251838,
      "curr_month_visits": 40322745.0251838,
      "unique_users": 21442832.2361457,
      "pages_per_visit": 2.33322379533482
    },
    {
      "global_rank": 915,
      "category_rank": 22,
      "domain": "manhuagui.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 26923398.280862,
      "curr_month_visits": 26923398.280862,
      "unique_users": 2854972.27525359,
      "pages_per_visit": 24.9447062006905
    },
    {
      "global_rank": 569,
      "category_rank": 22,
      "domain": "uakino.me",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 123804435.249715,
      "curr_month_visits": 123804435.249715,
      "unique_users": 9752060.4729179,
      "pages_per_visit": 2.53432316702786
    },
    {
      "global_rank": 3255,
      "category_rank": 22,
      "domain": "noveldrama.org",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 9723199.58632884,
      "curr_month_visits": 9723199.58632884,
      "unique_users": 835072.72753364,
      "pages_per_visit": 12.0874105891184
    },
    {
      "global_rank": 2846,
      "category_rank": 22,
      "domain": "uta-net.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 23862504.564246,
      "curr_month_visits": 23862504.564246,
      "unique_users": 10721996.7041471,
      "pages_per_visit": 2.65079208936286
    },
    {
      "global_rank": 13767,
      "category_rank": 22,
      "domain": "philo.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 4412444.21334339,
      "curr_month_visits": 4412444.21334339,
      "unique_users": 1915880.02291555,
      "pages_per_visit": 3.16807868517995
    },
    {
      "global_rank": 1987,
      "category_rank": 23,
      "domain": "youku.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 29335958.8537772,
      "curr_month_visits": 29335958.8537772,
      "unique_users": 7659600.79086558,
      "pages_per_visit": 4.13727446895415
    },
    {
      "global_rank": 14773,
      "category_rank": 23,
      "domain": "pximg.net",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 2824772.60201762,
      "curr_month_visits": 2824772.60201762,
      "unique_users": 979838.634332501,
      "pages_per_visit": 7.84576511091198
    },
    {
      "global_rank": 34082,
      "category_rank": 23,
      "domain": "bolshoi.ru",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1252997.93314894,
      "curr_month_visits": 1252997.93314894,
      "unique_users": 581869.490803365,
      "pages_per_visit": 4.73131305078094
    },
    {
      "global_rank": 649,
      "category_rank": 23,
      "domain": "cuevana.biz",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 88336895.2279712,
      "curr_month_visits": 88336895.2279712,
      "unique_users": 19313293.5661112,
      "pages_per_visit": 2.85219848844925
    },
    {
      "global_rank": 2972,
      "category_rank": 23,
      "domain": "radio-canada.ca",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 25888968.2507408,
      "curr_month_visits": 25888968.2507408,
      "unique_users": 6071018.26282334,
      "pages_per_visit": 2.26103102386546
    },
    {
      "global_rank": 3336,
      "category_rank": 23,
      "domain": "pensador.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 26340589.8498171,
      "curr_month_visits": 26340589.8498171,
      "unique_users": 13928026.1307965,
      "pages_per_visit": 1.57150977790522
    },
    {
      "global_rank": 942,
      "category_rank": 23,
      "domain": "flavourecipes.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 24331058.389915,
      "curr_month_visits": 24331058.389915,
      "unique_users": 5954044.46474714,
      "pages_per_visit": 7.85587776289532
    },
    {
      "global_rank": 9736,
      "category_rank": 23,
      "domain": "watchpeopledie.tv",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 4515091.57245801,
      "curr_month_visits": 4515091.57245801,
      "unique_users": 1556093.11196462,
      "pages_per_visit": 9.08739867524804
    },
    {
      "global_rank": 16132,
      "category_rank": 24,
      "domain": "vectorstock.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 4166214.71286628,
      "curr_month_visits": 4166214.71286628,
      "unique_users": 2834798.5414998,
      "pages_per_visit": 2.94370085127854
    },
    {
      "global_rank": 970,
      "category_rank": 24,
      "domain": "enginetoyou.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 26754392.8667548,
      "curr_month_visits": 26754392.8667548,
      "unique_users": 6596204.98499447,
      "pages_per_visit": 7.25389945050592
    },
    {
      "global_rank": 10380,
      "category_rank": 24,
      "domain": "cracked.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 8597541.01203315,
      "curr_month_visits": 8597541.01203315,
      "unique_users": 2102108.04938998,
      "pages_per_visit": 2.55726479811378
    },
    {
      "global_rank": 3040,
      "category_rank": 24,
      "domain": "rollingstone.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 21349730.2914971,
      "curr_month_visits": 21349730.2914971,
      "unique_users": 14912090.5722393,
      "pages_per_visit": 3.42951888633553
    },
    {
      "global_rank": 680,
      "category_rank": 24,
      "domain": "nos.nl",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 83383838.8277803,
      "curr_month_visits": 83383838.8277803,
      "unique_users": 10567857.3620603,
      "pages_per_visit": 3.36957385539052
    },
    {
      "global_rank": 2016,
      "category_rank": 24,
      "domain": "jisin.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 26124344.4978176,
      "curr_month_visits": 26124344.4978176,
      "unique_users": 14966044.755615,
      "pages_per_visit": 2.08194412073605
    },
    {
      "global_rank": 3445,
      "category_rank": 24,
      "domain": "thriftbooks.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 13268868.670054,
      "curr_month_visits": 13268868.670054,
      "unique_users": 7766807.55515739,
      "pages_per_visit": 5.26673322060037
    },
    {
      "global_rank": 37137,
      "category_rank": 24,
      "domain": "telecharge.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1534936.97517227,
      "curr_month_visits": 1534936.97517227,
      "unique_users": 790084.279428481,
      "pages_per_visit": 3.70288567559051
    },
    {
      "global_rank": 690,
      "category_rank": 25,
      "domain": "screenrant.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 88062291.744807,
      "curr_month_visits": 88062291.744807,
      "unique_users": 43097951.3464027,
      "pages_per_visit": 1.74575355453644
    },
    {
      "global_rank": 17130,
      "category_rank": 25,
      "domain": "fineartamerica.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 3355221.10407052,
      "curr_month_visits": 3355221.10407052,
      "unique_users": 1975861.78539434,
      "pages_per_visit": 4.20437893912427
    },
    {
      "global_rank": 38100,
      "category_rank": 25,
      "domain": "royalalberthall.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1436932.76461593,
      "curr_month_visits": 1436932.76461593,
      "unique_users": 769462.111374063,
      "pages_per_visit": 4.85252818270211
    },
    {
      "global_rank": 3072,
      "category_rank": 25,
      "domain": "siriusxm.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 19812896.4018037,
      "curr_month_visits": 19812896.4018037,
      "unique_users": 9208959.52950381,
      "pages_per_visit": 3.58075688665563
    },
    {
      "global_rank": 973,
      "category_rank": 25,
      "domain": "manhuatop.org",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 42950059.5068438,
      "curr_month_visits": 42950059.5068438,
      "unique_users": 7301047.3141796,
      "pages_per_visit": 8.74390135841195
    },
    {
      "global_rank": 11003,
      "category_rank": 25,
      "domain": "theonion.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 4512766.9453072,
      "curr_month_visits": 4512766.9453072,
      "unique_users": 2377323.77624817,
      "pages_per_visit": 2.49407001953774
    },
    {
      "global_rank": 3586,
      "category_rank": 25,
      "domain": "overdrive.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 14403985.3525071,
      "curr_month_visits": 14403985.3525071,
      "unique_users": 4473432.35444616,
      "pages_per_visit": 5.62106203320784
    },
    {
      "global_rank": 2018,
      "category_rank": 25,
      "domain": "super.cz",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 36254326.0077659,
      "curr_month_visits": 36254326.0077659,
      "unique_users": 3863620.97080305,
      "pages_per_visit": 2.47927564466768
    },
    {
      "global_rank": 3267,
      "category_rank": 26,
      "domain": "music.163.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 20518104.8692531,
      "curr_month_visits": 20518104.8692531,
      "unique_users": 10127254.348322,
      "pages_per_visit": 3.30252442009537
    },
    {
      "global_rank": 3625,
      "category_rank": 26,
      "domain": "doramatv.one",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 22133701.7488819,
      "curr_month_visits": 22133701.7488819,
      "unique_users": 2142780.22671657,
      "pages_per_visit": 3.94945600247961
    },
    {
      "global_rank": 17895,
      "category_rank": 26,
      "domain": "moviesda.page",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 3073720.68151848,
      "curr_month_visits": 3073720.68151848,
      "unique_users": 1035725.32158947,
      "pages_per_visit": 1.73139648458393
    },
    {
      "global_rank": 11391,
      "category_rank": 26,
      "domain": "anekdot.ru",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 6723937.93174127,
      "curr_month_visits": 6723937.93174127,
      "unique_users": 1259029.51773121,
      "pages_per_visit": 3.03149736629629
    },
    {
      "global_rank": 988,
      "category_rank": 26,
      "domain": "livesteching.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 22285681.3348576,
      "curr_month_visits": 22285681.3348576,
      "unique_users": 5500990.15129051,
      "pages_per_visit": 7.89485969199843
    },
    {
      "global_rank": 706,
      "category_rank": 26,
      "domain": "sky.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 83270300.6220275,
      "curr_month_visits": 83270300.6220275,
      "unique_users": 28843874.8484532,
      "pages_per_visit": 2.44668277007563
    },
    {
      "global_rank": 2029,
      "category_rank": 26,
      "domain": "sps-system.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 24463927.7899356,
      "curr_month_visits": 24463927.7899356,
      "unique_users": 12215237.4248642,
      "pages_per_visit": 3.95181029389519
    },
    {
      "global_rank": 38736,
      "category_rank": 26,
      "domain": "picturehouses.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1285074.51718181,
      "curr_month_visits": 1285074.51718181,
      "unique_users": 610486.285925394,
      "pages_per_visit": 3.51362969045215
    },
    {
      "global_rank": 3387,
      "category_rank": 27,
      "domain": "ygg.re",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 12909964.9679284,
      "curr_month_visits": 12909964.9679284,
      "unique_users": 1309003.88676847,
      "pages_per_visit": 9.26250514293044
    },
    {
      "global_rank": 19338,
      "category_rank": 27,
      "domain": "creativemarket.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 2820974.73291543,
      "curr_month_visits": 2820974.73291543,
      "unique_users": 1445068.67693024,
      "pages_per_visit": 4.63355100709591
    },
    {
      "global_rank": 2034,
      "category_rank": 27,
      "domain": "boredpanda.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 36730977.1700778,
      "curr_month_visits": 36730977.1700778,
      "unique_users": 12674332.9281307,
      "pages_per_visit": 2.67370138528918
    },
    {
      "global_rank": 994,
      "category_rank": 27,
      "domain": "roskertech.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 20878881.9389133,
      "curr_month_visits": 20878881.9389133,
      "unique_users": 5086650.00325933,
      "pages_per_visit": 7.85420743281782
    },
    {
      "global_rank": 3630,
      "category_rank": 27,
      "domain": "pawmanga.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 7985444.08667753,
      "curr_month_visits": 7985444.08667753,
      "unique_users": 2945684.30576637,
      "pages_per_visit": 7.42519980965244
    },
    {
      "global_rank": 42653,
      "category_rank": 27,
      "domain": "londontheatre.co.uk",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1247966.90888015,
      "curr_month_visits": 1247966.90888015,
      "unique_users": 774581.017131241,
      "pages_per_visit": 3.94957566606124
    },
    {
      "global_rank": 708,
      "category_rank": 27,
      "domain": "jiocinema.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 70752383.4479808,
      "curr_month_visits": 70752383.4479808,
      "unique_users": 17828262.4019056,
      "pages_per_visit": 3.10297737917857
    },
    {
      "global_rank": 12038,
      "category_rank": 27,
      "domain": "fontmeme.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 4910098.72646641,
      "curr_month_visits": 4910098.72646641,
      "unique_users": 2931755.85457573,
      "pages_per_visit": 3.9946764046048
    },
    {
      "global_rank": 1002,
      "category_rank": 28,
      "domain": "komikcast.cz",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 56494524.5654797,
      "curr_month_visits": 56494524.5654797,
      "unique_users": 3075323.82216161,
      "pages_per_visit": 7.94177056960262
    },
    {
      "global_rank": 741,
      "category_rank": 28,
      "domain": "rottentomatoes.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 78367562.641334,
      "curr_month_visits": 78367562.641334,
      "unique_users": 37547202.9154388,
      "pages_per_visit": 2.40384624296501
    },
    {
      "global_rank": 43905,
      "category_rank": 28,
      "domain": "eventim-inhouse.de",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1090520.67836234,
      "curr_month_visits": 1090520.67836234,
      "unique_users": 595876.981571958,
      "pages_per_visit": 4.19287160397679
    },
    {
      "global_rank": 2038,
      "category_rank": 28,
      "domain": "tokyodisneyresort.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 23626138.0328685,
      "curr_month_visits": 23626138.0328685,
      "unique_users": 6876879.97540146,
      "pages_per_visit": 5.89720373129425
    },
    {
      "global_rank": 3450,
      "category_rank": 28,
      "domain": "songsterr.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 13065897.3794355,
      "curr_month_visits": 13065897.3794355,
      "unique_users": 3594304.44619204,
      "pages_per_visit": 6.66065038631032
    },
    {
      "global_rank": 13211,
      "category_rank": 28,
      "domain": "todayhumor.co.kr",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 3440688.17755019,
      "curr_month_visits": 3440688.17755019,
      "unique_users": 923135.760879194,
      "pages_per_visit": 8.08821256855741
    },
    {
      "global_rank": 21004,
      "category_rank": 28,
      "domain": "filemate11.shop",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 4881920.66920658,
      "curr_month_visits": 4881920.66920658,
      "unique_users": 2672089.80138621,
      "pages_per_visit": 1.4638427032465
    },
    {
      "global_rank": 3703,
      "category_rank": 28,
      "domain": "xbanxia.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 13488482.2654483,
      "curr_month_visits": 13488482.2654483,
      "unique_users": 1514919.59007534,
      "pages_per_visit": 9.49561153215452
    },
    {
      "global_rank": 1057,
      "category_rank": 29,
      "domain": "mangaraw.best",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 35592902.918286,
      "curr_month_visits": 35592902.918286,
      "unique_users": 783887.540715124,
      "pages_per_visit": 13.9899086881133
    },
    {
      "global_rank": 3743,
      "category_rank": 29,
      "domain": "bqg9527.cc",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 19218336.0961511,
      "curr_month_visits": 19218336.0961511,
      "unique_users": 615487.619967333,
      "pages_per_visit": 10.9451573522473
    },
    {
      "global_rank": 806,
      "category_rank": 29,
      "domain": "playdede.eu",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 71936585.9531142,
      "curr_month_visits": 71936585.9531142,
      "unique_users": 3037819.31495701,
      "pages_per_visit": 3.8269226221648
    },
    {
      "global_rank": 2105,
      "category_rank": 29,
      "domain": "lipstickalley.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 25520350.6512901,
      "curr_month_visits": 25520350.6512901,
      "unique_users": 2352736.44653571,
      "pages_per_visit": 8.38001779266685
    },
    {
      "global_rank": 45376,
      "category_rank": 29,
      "domain": "mirvish.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 786921.540077767,
      "curr_month_visits": 786921.540077767,
      "unique_users": 418808.148229028,
      "pages_per_visit": 4.69147036620059
    },
    {
      "global_rank": 3460,
      "category_rank": 29,
      "domain": "reverb.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 15700124.5207107,
      "curr_month_visits": 15700124.5207107,
      "unique_users": 4357302.95804387,
      "pages_per_visit": 5.09821419167305
    },
    {
      "global_rank": 13742,
      "category_rank": 29,
      "domain": "notalwaysright.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 5498893.5804925,
      "curr_month_visits": 5498893.5804925,
      "unique_users": 464095.003637323,
      "pages_per_visit": 5.04117922358061
    },
    {
      "global_rank": 22106,
      "category_rank": 29,
      "domain": "artsy.net",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 2770580.92984468,
      "curr_month_visits": 2770580.92984468,
      "unique_users": 1573501.22444894,
      "pages_per_visit": 3.61023399170014
    },
    {
      "global_rank": 13862,
      "category_rank": 30,
      "domain": "idrlabs.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 4814246.66089869,
      "curr_month_visits": 4814246.66089869,
      "unique_users": 2972181.14599983,
      "pages_per_visit": 3.01677633133043
    },
    {
      "global_rank": 3494,
      "category_rank": 30,
      "domain": "mnuu.nu",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 18990853.1731779,
      "curr_month_visits": 18990853.1731779,
      "unique_users": 8603762.92426191,
      "pages_per_visit": 2.45199773666741
    },
    {
      "global_rank": 46175,
      "category_rank": 30,
      "domain": "news.autoguide.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1821389.83483414,
      "curr_month_visits": 1821389.83483414,
      "unique_users": 1337746.01074255,
      "pages_per_visit": 1.81355242507988
    },
    {
      "global_rank": 2445,
      "category_rank": 30,
      "domain": "redbubble.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 19656729.159727,
      "curr_month_visits": 19656729.159727,
      "unique_users": 11904584.4614513,
      "pages_per_visit": 4.6076433707848
    },
    {
      "global_rank": 1091,
      "category_rank": 30,
      "domain": "recetasdelmundorural.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 19956446.0175026,
      "curr_month_visits": 19956446.0175026,
      "unique_users": 4892840.27542776,
      "pages_per_visit": 7.54689353112841
    },
    {
      "global_rank": 22634,
      "category_rank": 30,
      "domain": "savetwitter.net",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 2883071.00314309,
      "curr_month_visits": 2883071.00314309,
      "unique_users": 676341.282538818,
      "pages_per_visit": 2.86965177206199
    },
    {
      "global_rank": 3758,
      "category_rank": 30,
      "domain": "freewebnovel.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 12663800.031195,
      "curr_month_visits": 12663800.031195,
      "unique_users": 704075.138171247,
      "pages_per_visit": 9.58439556245046
    },
    {
      "global_rank": 818,
      "category_rank": 30,
      "domain": "tver.jp",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 68695682.5277927,
      "curr_month_visits": 68695682.5277927,
      "unique_users": 15473029.7368934,
      "pages_per_visit": 4.2834799026108
    },
    {
      "global_rank": 23808,
      "category_rank": 31,
      "domain": "dickblick.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 2111508.12605463,
      "curr_month_visits": 2111508.12605463,
      "unique_users": 1060413.78364073,
      "pages_per_visit": 5.34751966718839
    },
    {
      "global_rank": 3765,
      "category_rank": 31,
      "domain": "stihi.ru",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 14022133.5311217,
      "curr_month_visits": 14022133.5311217,
      "unique_users": 4021484.19155047,
      "pages_per_visit": 6.20164587608608
    },
    {
      "global_rank": 46347,
      "category_rank": 31,
      "domain": "vdnh.ru",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 2659686.71585613,
      "curr_month_visits": 2659686.71585613,
      "unique_users": 655565.227201885,
      "pages_per_visit": 2.04630025418078
    },
    {
      "global_rank": 3506,
      "category_rank": 31,
      "domain": "cifraclub.com.br",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 17284899.8751407,
      "curr_month_visits": 17284899.8751407,
      "unique_users": 6025264.63094172,
      "pages_per_visit": 3.68229058644182
    },
    {
      "global_rank": 854,
      "category_rank": 31,
      "domain": "hydrahd.cc",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 52238212.932565,
      "curr_month_visits": 52238212.932565,
      "unique_users": 4994284.26446986,
      "pages_per_visit": 4.14083154080868
    },
    {
      "global_rank": 13953,
      "category_rank": 31,
      "domain": "mediatakeout.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 6217210.0955949,
      "curr_month_visits": 6217210.0955949,
      "unique_users": 443184.584573703,
      "pages_per_visit": 2.59608406758393
    },
    {
      "global_rank": 1192,
      "category_rank": 31,
      "domain": "jestful.net",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 37679066.3862418,
      "curr_month_visits": 37679066.3862418,
      "unique_users": 846500.99016747,
      "pages_per_visit": 11.8916315905817
    },
    {
      "global_rank": 2476,
      "category_rank": 31,
      "domain": "disney.go.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 20926962.1284414,
      "curr_month_visits": 20926962.1284414,
      "unique_users": 8921411.12213628,
      "pages_per_visit": 4.45518442316228
    },
    {
      "global_rank": 4249,
      "category_rank": 32,
      "domain": "ridibooks.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 11472425.2000751,
      "curr_month_visits": 11472425.2000751,
      "unique_users": 1802493.60717242,
      "pages_per_visit": 9.10419341395096
    },
    {
      "global_rank": 46514,
      "category_rank": 32,
      "domain": "kino.kz",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1283748.16431671,
      "curr_month_visits": 1283748.16431671,
      "unique_users": 479744.28819036,
      "pages_per_visit": 2.94270472180824
    },
    {
      "global_rank": 23968,
      "category_rank": 32,
      "domain": "moviesda.dad",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 2691930.99559983,
      "curr_month_visits": 2691930.99559983,
      "unique_users": 1167415.84669955,
      "pages_per_visit": 1.44184878877146
    },
    {
      "global_rank": 3596,
      "category_rank": 32,
      "domain": "y2mate.lol",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 8513184.40056704,
      "curr_month_visits": 8513184.40056704,
      "unique_users": 4030611.53129626,
      "pages_per_visit": 6.02513915930536
    },
    {
      "global_rank": 856,
      "category_rank": 32,
      "domain": "abema.tv",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 72977008.8478581,
      "curr_month_visits": 72977008.8478581,
      "unique_users": 26265014.9699898,
      "pages_per_visit": 3.13546709424705
    },
    {
      "global_rank": 2493,
      "category_rank": 32,
      "domain": "natalie.mu",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 28159725.2230342,
      "curr_month_visits": 28159725.2230342,
      "unique_users": 15109797.5613259,
      "pages_per_visit": 2.08012925927688
    },
    {
      "global_rank": 13964,
      "category_rank": 32,
      "domain": "tvfun.me",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2236273.25528717,
      "curr_month_visits": 2236273.25528717,
      "unique_users": 348448.271233104,
      "pages_per_visit": 4.88524281288406
    },
    {
      "global_rank": 1199,
      "category_rank": 32,
      "domain": "lectormangaa.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 26338996.2435121,
      "curr_month_visits": 26338996.2435121,
      "unique_users": 3053758.23221474,
      "pages_per_visit": 7.70866047787236
    },
    {
      "global_rank": 3655,
      "category_rank": 33,
      "domain": "radiko.jp",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 24579051.5502195,
      "curr_month_visits": 24579051.5502195,
      "unique_users": 4141062.54161146,
      "pages_per_visit": 2.96756262451079
    },
    {
      "global_rank": 1288,
      "category_rank": 33,
      "domain": "animego.org",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 54570783.1537366,
      "curr_month_visits": 54570783.1537366,
      "unique_users": 7804843.76816704,
      "pages_per_visit": 2.8718023781227
    },
    {
      "global_rank": 2532,
      "category_rank": 33,
      "domain": "humoruniv.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 14583110.2333252,
      "curr_month_visits": 14583110.2333252,
      "unique_users": 1557111.03855609,
      "pages_per_visit": 16.367573026697
    },
    {
      "global_rank": 49145,
      "category_rank": 33,
      "domain": "tdf.org",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 861104.886011077,
      "curr_month_visits": 861104.886011077,
      "unique_users": 262346.760221684,
      "pages_per_visit": 6.63216157524922
    },
    {
      "global_rank": 24244,
      "category_rank": 33,
      "domain": "are.na",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1952652.82912148,
      "curr_month_visits": 1952652.82912148,
      "unique_users": 737169.389395462,
      "pages_per_visit": 6.50390713921582
    },
    {
      "global_rank": 4335,
      "category_rank": 33,
      "domain": "knigavuhe.org",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 21305890.2442488,
      "curr_month_visits": 21305890.2442488,
      "unique_users": 2567881.30594236,
      "pages_per_visit": 2.76875761840591
    },
    {
      "global_rank": 861,
      "category_rank": 33,
      "domain": "paramountplus.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 58959072.3040009,
      "curr_month_visits": 58959072.3040009,
      "unique_users": 18267575.7215307,
      "pages_per_visit": 3.54941838999438
    },
    {
      "global_rank": 14791,
      "category_rank": 33,
      "domain": "thewrap.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 6797348.89247236,
      "curr_month_visits": 6797348.89247236,
      "unique_users": 5250555.71329942,
      "pages_per_visit": 1.41496230220008
    },
    {
      "global_rank": 4361,
      "category_rank": 34,
      "domain": "dramanovels.io",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 19830472.0199529,
      "curr_month_visits": 19830472.0199529,
      "unique_users": 979457.907148597,
      "pages_per_visit": 10.1498335100858
    },
    {
      "global_rank": 17739,
      "category_rank": 34,
      "domain": "ebaumsworld.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 4896711.66735515,
      "curr_month_visits": 4896711.66735515,
      "unique_users": 1107458.04903262,
      "pages_per_visit": 3.20843385633697
    },
    {
      "global_rank": 25164,
      "category_rank": 34,
      "domain": "imgix.net",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 2679486.29823413,
      "curr_month_visits": 2679486.29823413,
      "unique_users": 1837474.18642083,
      "pages_per_visit": 2.30429787111678
    },
    {
      "global_rank": 862,
      "category_rank": 34,
      "domain": "hdtodayz.to",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 38054803.5957116,
      "curr_month_visits": 38054803.5957116,
      "unique_users": 4749028.5396476,
      "pages_per_visit": 4.17044966561456
    },
    {
      "global_rank": 50680,
      "category_rank": 34,
      "domain": "kvitki.by",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1029267.8066454,
      "curr_month_visits": 1029267.8066454,
      "unique_users": 454226.883234677,
      "pages_per_visit": 4.05737122320104
    },
    {
      "global_rank": 2566,
      "category_rank": 34,
      "domain": "123av.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 3609539.61537599,
      "curr_month_visits": 3609539.61537599,
      "unique_users": 1465536.56093242,
      "pages_per_visit": 15.8449938419409
    },
    {
      "global_rank": 1340,
      "category_rank": 34,
      "domain": "mangabuddy.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 28962003.6577626,
      "curr_month_visits": 28962003.6577626,
      "unique_users": 4399121.91312064,
      "pages_per_visit": 8.57217154436439
    },
    {
      "global_rank": 3695,
      "category_rank": 34,
      "domain": "chordtela.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 15314970.1020432,
      "curr_month_visits": 15314970.1020432,
      "unique_users": 3248075.73727606,
      "pages_per_visit": 4.95640990683355
    },
    {
      "global_rank": 3718,
      "category_rank": 35,
      "domain": "notube.lol",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 13086223.4994587,
      "curr_month_visits": 13086223.4994587,
      "unique_users": 3061813.973162,
      "pages_per_visit": 6.75547149069056
    },
    {
      "global_rank": 1381,
      "category_rank": 35,
      "domain": "manhwaclan.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 30005643.9803927,
      "curr_month_visits": 30005643.9803927,
      "unique_users": 4032562.79441296,
      "pages_per_visit": 8.56463199483834
    },
    {
      "global_rank": 870,
      "category_rank": 35,
      "domain": "hotstar.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 59437900.3564358,
      "curr_month_visits": 59437900.3564358,
      "unique_users": 10629969.7105785,
      "pages_per_visit": 4.03808588622665
    },
    {
      "global_rank": 2732,
      "category_rank": 35,
      "domain": "ew.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 30327407.59662,
      "curr_month_visits": 30327407.59662,
      "unique_users": 17093992.0601719,
      "pages_per_visit": 1.55084514645217
    },
    {
      "global_rank": 28852,
      "category_rank": 35,
      "domain": "society6.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1768244.45859553,
      "curr_month_visits": 1768244.45859553,
      "unique_users": 1042155.34572987,
      "pages_per_visit": 4.74155137288101
    },
    {
      "global_rank": 17988,
      "category_rank": 35,
      "domain": "finofilipino.org",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 5722572.26083943,
      "curr_month_visits": 5722572.26083943,
      "unique_users": 602317.90086625,
      "pages_per_visit": 3.01832233139366
    },
    {
      "global_rank": 4431,
      "category_rank": 35,
      "domain": "ranobes.top",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 17939529.1496379,
      "curr_month_visits": 17939529.1496379,
      "unique_users": 990888.578440102,
      "pages_per_visit": 9.43292701963122
    },
    {
      "global_rank": 51453,
      "category_rank": 35,
      "domain": "stage-entertainment.de",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1169631.02646495,
      "curr_month_visits": 1169631.02646495,
      "unique_users": 635651.810019417,
      "pages_per_visit": 2.58026904180852
    },
    {
      "global_rank": 1382,
      "category_rank": 36,
      "domain": "bato.to",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 27746839.3459138,
      "curr_month_visits": 27746839.3459138,
      "unique_users": 2727620.78498653,
      "pages_per_visit": 11.9835969989168
    },
    {
      "global_rank": 3778,
      "category_rank": 36,
      "domain": "musescore.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 13780765.2736543,
      "curr_month_visits": 13780765.2736543,
      "unique_users": 6038501.28290376,
      "pages_per_visit": 4.42814056078581
    },
    {
      "global_rank": 29242,
      "category_rank": 36,
      "domain": "aydogs.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 4149133.43241917,
      "curr_month_visits": 4149133.43241917,
      "unique_users": 609568.621438118,
      "pages_per_visit": 1.88203482254905
    },
    {
      "global_rank": 888,
      "category_rank": 36,
      "domain": "programme-tv.net",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 70510007.2954173,
      "curr_month_visits": 70510007.2954173,
      "unique_users": 16377890.0566808,
      "pages_per_visit": 2.25725813141043
    },
    {
      "global_rank": 19278,
      "category_rank": 36,
      "domain": "geediting.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 7121525.43547621,
      "curr_month_visits": 7121525.43547621,
      "unique_users": 3584611.47637657,
      "pages_per_visit": 1.51268880050805
    },
    {
      "global_rank": 2766,
      "category_rank": 36,
      "domain": "pozdravok.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 25318723.6285624,
      "curr_month_visits": 25318723.6285624,
      "unique_users": 12371836.4924488,
      "pages_per_visit": 1.98593832657773
    },
    {
      "global_rank": 51740,
      "category_rank": 36,
      "domain": "kennedy-center.org",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1156613.55451727,
      "curr_month_visits": 1156613.55451727,
      "unique_users": 694764.453204854,
      "pages_per_visit": 2.72348029507985
    },
    {
      "global_rank": 4449,
      "category_rank": 36,
      "domain": "royalroad.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 15062571.7334791,
      "curr_month_visits": 15062571.7334791,
      "unique_users": 1175581.81137914,
      "pages_per_visit": 6.0670615863589
    },
    {
      "global_rank": 29481,
      "category_rank": 37,
      "domain": "news.artnet.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 2577792.54231927,
      "curr_month_visits": 2577792.54231927,
      "unique_users": 1659283.20591212,
      "pages_per_visit": 1.69930823771197
    },
    {
      "global_rank": 3846,
      "category_rank": 37,
      "domain": "pandora.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 18856351.1510887,
      "curr_month_visits": 18856351.1510887,
      "unique_users": 3833196.79074134,
      "pages_per_visit": 3.16726827155936
    },
    {
      "global_rank": 908,
      "category_rank": 37,
      "domain": "yandex.kz",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 44632948.7548822,
      "curr_month_visits": 44632948.7548822,
      "unique_users": 4512666.04012882,
      "pages_per_visit": 7.65065391296412
    },
    {
      "global_rank": 2999,
      "category_rank": 37,
      "domain": "deadline.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 27289671.702019,
      "curr_month_visits": 27289671.702019,
      "unique_users": 15363312.9305418,
      "pages_per_visit": 1.9799017698442
    },
    {
      "global_rank": 19397,
      "category_rank": 37,
      "domain": "noblemtl.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2841996.93372049,
      "curr_month_visits": 2841996.93372049,
      "unique_users": 357811.540249542,
      "pages_per_visit": 6.53566100776879
    },
    {
      "global_rank": 4603,
      "category_rank": 37,
      "domain": "fanqienovel.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 9934971.4482649,
      "curr_month_visits": 9934971.4482649,
      "unique_users": 3130271.9283634,
      "pages_per_visit": 7.68126824611111
    },
    {
      "global_rank": 1395,
      "category_rank": 37,
      "domain": "reader-hub.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 50740071.1938391,
      "curr_month_visits": 50740071.1938391,
      "unique_users": 2142282.25322294,
      "pages_per_visit": 3.93259811978717
    },
    {
      "global_rank": 52294,
      "category_rank": 37,
      "domain": "operadeparis.fr",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 971194.97596185,
      "curr_month_visits": 971194.97596185,
      "unique_users": 498032.930482444,
      "pages_per_visit": 5.11484283080206
    },
    {
      "global_rank": 4604,
      "category_rank": 38,
      "domain": "epub.pub",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 14150451.0918177,
      "curr_month_visits": 14150451.0918177,
      "unique_users": 1794261.89458255,
      "pages_per_visit": 5.73176587641672
    },
    {
      "global_rank": 931,
      "category_rank": 38,
      "domain": "tbs.co.jp",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 60344923.4672378,
      "curr_month_visits": 60344923.4672378,
      "unique_users": 32871052.0720617,
      "pages_per_visit": 2.82925955893214
    },
    {
      "global_rank": 1402,
      "category_rank": 38,
      "domain": "kakuyomu.jp",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 31379147.5520355,
      "curr_month_visits": 31379147.5520355,
      "unique_users": 4246832.90107468,
      "pages_per_visit": 9.9328716082598
    },
    {
      "global_rank": 53440,
      "category_rank": 38,
      "domain": "whatsonstage.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1270256.71894473,
      "curr_month_visits": 1270256.71894473,
      "unique_users": 680651.517834172,
      "pages_per_visit": 2.55374751105262
    },
    {
      "global_rank": 29921,
      "category_rank": 38,
      "domain": "movieflix4k.online",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1576953.22027556,
      "curr_month_visits": 1576953.22027556,
      "unique_users": 1233867.10186902,
      "pages_per_visit": 3.84658987937652
    },
    {
      "global_rank": 19632,
      "category_rank": 38,
      "domain": "mistrzowie.org",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 4360251.77322256,
      "curr_month_visits": 4360251.77322256,
      "unique_users": 400907.627837455,
      "pages_per_visit": 3.25287818575362
    },
    {
      "global_rank": 3852,
      "category_rank": 38,
      "domain": "radiofrance.fr",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 21503060.3234579,
      "curr_month_visits": 21503060.3234579,
      "unique_users": 8301978.84201871,
      "pages_per_visit": 1.92922925611009
    },
    {
      "global_rank": 3048,
      "category_rank": 38,
      "domain": "familyclub.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 20346886.8769717,
      "curr_month_visits": 20346886.8769717,
      "unique_users": 1818358.87201972,
      "pages_per_visit": 5.19767039080074
    },
    {
      "global_rank": 935,
      "category_rank": 39,
      "domain": "mediaset.it",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 72414042.9155863,
      "curr_month_visits": 72414042.9155863,
      "unique_users": 13474888.3261883,
      "pages_per_visit": 2.57668103437667
    },
    {
      "global_rank": 1432,
      "category_rank": 39,
      "domain": "cyclingtomorrow.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 22165333.742539,
      "curr_month_visits": 22165333.742539,
      "unique_users": 6181262.12492405,
      "pages_per_visit": 7.72963812033345
    },
    {
      "global_rank": 4650,
      "category_rank": 39,
      "domain": "loveread.ec",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 12180247.1972275,
      "curr_month_visits": 12180247.1972275,
      "unique_users": 1274933.30357591,
      "pages_per_visit": 7.72080978224762
    },
    {
      "global_rank": 3097,
      "category_rank": 39,
      "domain": "exhentai.org",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 7756954.37496081,
      "curr_month_visits": 7756954.37496081,
      "unique_users": 803078.39135231,
      "pages_per_visit": 35.3053731309583
    },
    {
      "global_rank": 3854,
      "category_rank": 39,
      "domain": "billboard.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 18393885.0639403,
      "curr_month_visits": 18393885.0639403,
      "unique_users": 12218834.9178585,
      "pages_per_visit": 2.38622243660263
    },
    {
      "global_rank": 57441,
      "category_rank": 39,
      "domain": "teatro.it",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 926328.374019146,
      "curr_month_visits": 926328.374019146,
      "unique_users": 718142.068142675,
      "pages_per_visit": 2.44453056904278
    },
    {
      "global_rank": 20259,
      "category_rank": 39,
      "domain": "mojevideo.sk",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2795405.91478012,
      "curr_month_visits": 2795405.91478012,
      "unique_users": 558633.154626904,
      "pages_per_visit": 6.84181202208899
    },
    {
      "global_rank": 31854,
      "category_rank": 39,
      "domain": "manhwax.org",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1079684.96379854,
      "curr_month_visits": 1079684.96379854,
      "unique_users": 287212.893200127,
      "pages_per_visit": 13.6539292321254
    },
    {
      "global_rank": 936,
      "category_rank": 40,
      "domain": "sky.it",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 62507538.772414,
      "curr_month_visits": 62507538.772414,
      "unique_users": 20612143.2754978,
      "pages_per_visit": 2.63902880177433
    },
    {
      "global_rank": 4966,
      "category_rank": 40,
      "domain": "uukanshu.cc",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 12545277.8290707,
      "curr_month_visits": 12545277.8290707,
      "unique_users": 1312401.72450329,
      "pages_per_visit": 8.63427345521011
    },
    {
      "global_rank": 1457,
      "category_rank": 40,
      "domain": "usagi.one",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 31286449.1306988,
      "curr_month_visits": 31286449.1306988,
      "unique_users": 1914782.76985514,
      "pages_per_visit": 9.86086913683755
    },
    {
      "global_rank": 33713,
      "category_rank": 40,
      "domain": "saatchiart.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1488998.05464133,
      "curr_month_visits": 1488998.05464133,
      "unique_users": 834160.012686169,
      "pages_per_visit": 4.64163020847779
    },
    {
      "global_rank": 20340,
      "category_rank": 40,
      "domain": "sadistic.pl",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 3689275.07355465,
      "curr_month_visits": 3689275.07355465,
      "unique_users": 621060.121210635,
      "pages_per_visit": 4.39896915713468
    },
    {
      "global_rank": 3951,
      "category_rank": 40,
      "domain": "ummn.nu",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 19576318.9619232,
      "curr_month_visits": 19576318.9619232,
      "unique_users": 7358042.21079721,
      "pages_per_visit": 2.51491945522129
    },
    {
      "global_rank": 3142,
      "category_rank": 40,
      "domain": "voici.fr",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 24659278.5276285,
      "curr_month_visits": 24659278.5276285,
      "unique_users": 8268241.70431582,
      "pages_per_visit": 2.18731703489513
    },
    {
      "global_rank": 60361,
      "category_rank": 40,
      "domain": "arts-people.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 723620.070929642,
      "curr_month_visits": 723620.070929642,
      "unique_users": 416573.089354305,
      "pages_per_visit": 4.08574826179869
    },
    {
      "global_rank": 3179,
      "category_rank": 41,
      "domain": "goguynet.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 25352649.6161328,
      "curr_month_visits": 25352649.6161328,
      "unique_users": 8874532.46139845,
      "pages_per_visit": 1.80896994416956
    },
    {
      "global_rank": 44270,
      "category_rank": 41,
      "domain": "270xs.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 550312.065162746,
      "curr_month_visits": 550312.065162746,
      "unique_users": 244676.545363125,
      "pages_per_visit": 11.1251372391394
    },
    {
      "global_rank": 63282,
      "category_rank": 41,
      "domain": "barbican.org.uk",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 805975.130959571,
      "curr_month_visits": 805975.130959571,
      "unique_users": 423648.02861561,
      "pages_per_visit": 3.53437704318744
    },
    {
      "global_rank": 4031,
      "category_rank": 41,
      "domain": "bandsintown.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 18995968.4823561,
      "curr_month_visits": 18995968.4823561,
      "unique_users": 13865163.1552306,
      "pages_per_visit": 2.28802996398637
    },
    {
      "global_rank": 21251,
      "category_rank": 41,
      "domain": "flvto.bz",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2398500.89692306,
      "curr_month_visits": 2398500.89692306,
      "unique_users": 603307.734124929,
      "pages_per_visit": 7.99121919812997
    },
    {
      "global_rank": 939,
      "category_rank": 41,
      "domain": "orf.at",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 56671887.0323068,
      "curr_month_visits": 56671887.0323068,
      "unique_users": 6851049.39979026,
      "pages_per_visit": 4.79441961429223
    },
    {
      "global_rank": 1467,
      "category_rank": 41,
      "domain": "3hentai.net",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 12048538.2658043,
      "curr_month_visits": 12048538.2658043,
      "unique_users": 4417300.24537017,
      "pages_per_visit": 26.7646007603005
    },
    {
      "global_rank": 5087,
      "category_rank": 41,
      "domain": "timotxt.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 8825815.58346848,
      "curr_month_visits": 8825815.58346848,
      "unique_users": 805742.074519879,
      "pages_per_visit": 9.32684024498517
    },
    {
      "global_rank": 21268,
      "category_rank": 42,
      "domain": "kakoysegodnyaprazdnik.ru",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 4092923.14118776,
      "curr_month_visits": 4092923.14118776,
      "unique_users": 1448907.42754524,
      "pages_per_visit": 1.52001973047333
    },
    {
      "global_rank": 63811,
      "category_rank": 42,
      "domain": "okepi.net",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 1011566.27581986,
      "curr_month_visits": 1011566.27581986,
      "unique_users": 153009.269588416,
      "pages_per_visit": 4.54998011717032
    },
    {
      "global_rank": 4053,
      "category_rank": 42,
      "domain": "worldstarhiphop.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 18278922.8861489,
      "curr_month_visits": 18278922.8861489,
      "unique_users": 1575457.33348603,
      "pages_per_visit": 4.22841641282073
    },
    {
      "global_rank": 3219,
      "category_rank": 42,
      "domain": "ngl.link",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 20638241.5283842,
      "curr_month_visits": 20638241.5283842,
      "unique_users": 8184545.91371555,
      "pages_per_visit": 3.06137242578177
    },
    {
      "global_rank": 1489,
      "category_rank": 42,
      "domain": "animanch.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 25016103.2426541,
      "curr_month_visits": 25016103.2426541,
      "unique_users": 3617868.93910309,
      "pages_per_visit": 11.4730523796556
    },
    {
      "global_rank": 5113,
      "category_rank": 42,
      "domain": "readli.net",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 9942917.37631096,
      "curr_month_visits": 9942917.37631096,
      "unique_users": 1876956.33909456,
      "pages_per_visit": 8.90559894209374
    },
    {
      "global_rank": 44572,
      "category_rank": 42,
      "domain": "heightcomparison.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1878408.20762905,
      "curr_month_visits": 1878408.20762905,
      "unique_users": 875824.259313141,
      "pages_per_visit": 1.81127940368124
    },
    {
      "global_rank": 978,
      "category_rank": 42,
      "domain": "filmoflix.bz",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 38692251.1032234,
      "curr_month_visits": 38692251.1032234,
      "unique_users": 2839222.59316949,
      "pages_per_visit": 4.052496595598
    },
    {
      "global_rank": 64455,
      "category_rank": 43,
      "domain": "wickedmovie.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 421517.920954395,
      "curr_month_visits": 421517.920954395,
      "unique_users": 322182.166663976,
      "pages_per_visit": 1.64619206689182
    },
    {
      "global_rank": 4174,
      "category_rank": 43,
      "domain": "jiosaavn.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 21103152.0403432,
      "curr_month_visits": 21103152.0403432,
      "unique_users": 14372772.7221216,
      "pages_per_visit": 1.82047070971036
    },
    {
      "global_rank": 5159,
      "category_rank": 43,
      "domain": "faloo.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 8590009.17089596,
      "curr_month_visits": 8590009.17089596,
      "unique_users": 1590259.04291718,
      "pages_per_visit": 15.4878570029435
    },
    {
      "global_rank": 990,
      "category_rank": 43,
      "domain": "vimeo.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 54886440.4038329,
      "curr_month_visits": 54886440.4038329,
      "unique_users": 27210103.3242684,
      "pages_per_visit": 3.66327514186239
    },
    {
      "global_rank": 1576,
      "category_rank": 43,
      "domain": "zbato.org",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 18604204.3113961,
      "curr_month_visits": 18604204.3113961,
      "unique_users": 2755003.86949098,
      "pages_per_visit": 14.2618414059991
    },
    {
      "global_rank": 3231,
      "category_rank": 43,
      "domain": "extra.cz",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 13746240.3076654,
      "curr_month_visits": 13746240.3076654,
      "unique_users": 3185433.03794599,
      "pages_per_visit": 8.08466824070872
    },
    {
      "global_rank": 46295,
      "category_rank": 43,
      "domain": "shotdeck.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 926983.523485402,
      "curr_month_visits": 926983.523485402,
      "unique_users": 283893.463743956,
      "pages_per_visit": 7.40593759862828
    },
    {
      "global_rank": 22111,
      "category_rank": 43,
      "domain": "atom.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2269772.71270607,
      "curr_month_visits": 2269772.71270607,
      "unique_users": 1273049.62905992,
      "pages_per_visit": 4.40854124376981
    },
    {
      "global_rank": 3251,
      "category_rank": 44,
      "domain": "pagesix.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 29606645.9545491,
      "curr_month_visits": 29606645.9545491,
      "unique_users": 14073869.9236035,
      "pages_per_visit": 1.85586508456265
    },
    {
      "global_rank": 23234,
      "category_rank": 44,
      "domain": "memedroid.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2934972.96920902,
      "curr_month_visits": 2934972.96920902,
      "unique_users": 1069298.9382394,
      "pages_per_visit": 3.94034901085365
    },
    {
      "global_rank": 5594,
      "category_rank": 44,
      "domain": "novelcool.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 8140303.24893748,
      "curr_month_visits": 8140303.24893748,
      "unique_users": 3332281.95207623,
      "pages_per_visit": 6.74050239667851
    },
    {
      "global_rank": 4296,
      "category_rank": 44,
      "domain": "gaana.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 18456574.2647682,
      "curr_month_visits": 18456574.2647682,
      "unique_users": 11665892.7225501,
      "pages_per_visit": 2.08059217759579
    },
    {
      "global_rank": 47735,
      "category_rank": 44,
      "domain": "greatbigcanvas.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 882344.07614065,
      "curr_month_visits": 882344.07614065,
      "unique_users": 551021.915044164,
      "pages_per_visit": 4.60421790202005
    },
    {
      "global_rank": 995,
      "category_rank": 44,
      "domain": "bubbiesxylaria.top",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 50897160.8719307,
      "curr_month_visits": 50897160.8719307,
      "unique_users": 19388743.8663341,
      "pages_per_visit": 2.44359335386041
    },
    {
      "global_rank": 1622,
      "category_rank": 44,
      "domain": "klz9.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 32581441.3021972,
      "curr_month_visits": 32581441.3021972,
      "unique_users": 871891.010605179,
      "pages_per_visit": 10.1660928885716
    },
    {
      "global_rank": 5709,
      "category_rank": 45,
      "domain": "keledushu.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 10410572.2792548,
      "curr_month_visits": 10410572.2792548,
      "unique_users": 742323.618777089,
      "pages_per_visit": 10.1751564779694
    },
    {
      "global_rank": 3321,
      "category_rank": 45,
      "domain": "viki.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 22752868.3423067,
      "curr_month_visits": 22752868.3423067,
      "unique_users": 5049403.35094912,
      "pages_per_visit": 3.41394375494646
    },
    {
      "global_rank": 66833,
      "category_rank": 45,
      "domain": "stuki-druki.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 894269.735631522,
      "curr_month_visits": 894269.735631522,
      "unique_users": 534615.632457088,
      "pages_per_visit": 2.3932203586699
    },
    {
      "global_rank": 1644,
      "category_rank": 45,
      "domain": "webtoons.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 25735270.0651325,
      "curr_month_visits": 25735270.0651325,
      "unique_users": 6998383.01085016,
      "pages_per_visit": 6.93329826941295
    },
    {
      "global_rank": 4366,
      "category_rank": 45,
      "domain": "ezmp3.cc",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 13674463.2318073,
      "curr_month_visits": 13674463.2318073,
      "unique_users": 5608617.63025399,
      "pages_per_visit": 2.43302300600556
    },
    {
      "global_rank": 1014,
      "category_rank": 45,
      "domain": "amedia.site",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 68289595.6562076,
      "curr_month_visits": 68289595.6562076,
      "unique_users": 2905722.03839763,
      "pages_per_visit": 4.60159400085771
    },
    {
      "global_rank": 48488,
      "category_rank": 45,
      "domain": "artmajeur.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1172652.51959382,
      "curr_month_visits": 1172652.51959382,
      "unique_users": 647203.270290933,
      "pages_per_visit": 3.64182085845614
    },
    {
      "global_rank": 23457,
      "category_rank": 45,
      "domain": "anekdotov.net",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 3053713.39479252,
      "curr_month_visits": 3053713.39479252,
      "unique_users": 531432.377343102,
      "pages_per_visit": 3.60049549717822
    },
    {
      "global_rank": 3371,
      "category_rank": 46,
      "domain": "b92.net",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 20828115.576473,
      "curr_month_visits": 20828115.576473,
      "unique_users": 2965991.37796474,
      "pages_per_visit": 3.71976997607644
    },
    {
      "global_rank": 50056,
      "category_rank": 46,
      "domain": "fakeyou.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1044887.48709879,
      "curr_month_visits": 1044887.48709879,
      "unique_users": 472060.378086735,
      "pages_per_visit": 4.93320158008279
    },
    {
      "global_rank": 1017,
      "category_rank": 46,
      "domain": "letterboxd.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 33945845.1433382,
      "curr_month_visits": 33945845.1433382,
      "unique_users": 5981466.34060801,
      "pages_per_visit": 10.9377045766324
    },
    {
      "global_rank": 5942,
      "category_rank": 46,
      "domain": "pari.ru",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 9696225.55524092,
      "curr_month_visits": 9696225.55524092,
      "unique_users": 3424449.52802896,
      "pages_per_visit": 5.94892029834008
    },
    {
      "global_rank": 4405,
      "category_rank": 46,
      "domain": "sweetwater.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 11705606.1486919,
      "curr_month_visits": 11705606.1486919,
      "unique_users": 4306817.88606357,
      "pages_per_visit": 4.47141103390112
    },
    {
      "global_rank": 67758,
      "category_rank": 46,
      "domain": "colosseum.eu",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 764369.179856372,
      "curr_month_visits": 764369.179856372,
      "unique_users": 382774.535904729,
      "pages_per_visit": 3.97933887200607
    },
    {
      "global_rank": 23621,
      "category_rank": 46,
      "domain": "vistoenlasredes.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 3532780.278707,
      "curr_month_visits": 3532780.278707,
      "unique_users": 478848.849570444,
      "pages_per_visit": 3.54926310437818
    },
    {
      "global_rank": 1670,
      "category_rank": 46,
      "domain": "otakudesu.cloud",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 29538440.5942357,
      "curr_month_visits": 29538440.5942357,
      "unique_users": 3060227.24863067,
      "pages_per_visit": 5.89182451223
    },
    {
      "global_rank": 4451,
      "category_rank": 47,
      "domain": "onlineradiobox.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 15091406.2148961,
      "curr_month_visits": 15091406.2148961,
      "unique_users": 3018784.28528887,
      "pages_per_visit": 4.13260338986735
    },
    {
      "global_rank": 3397,
      "category_rank": 47,
      "domain": "lecturas.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 22925223.2484724,
      "curr_month_visits": 22925223.2484724,
      "unique_users": 7356811.68458608,
      "pages_per_visit": 2.19089493477664
    },
    {
      "global_rank": 1029,
      "category_rank": 47,
      "domain": "egydead.center",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 89730932.555063,
      "curr_month_visits": 89730932.555063,
      "unique_users": 9469825.93403416,
      "pages_per_visit": 2.96289023890298
    },
    {
      "global_rank": 5993,
      "category_rank": 47,
      "domain": "jaomix.ru",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 12677690.7755862,
      "curr_month_visits": 12677690.7755862,
      "unique_users": 824801.163417435,
      "pages_per_visit": 7.24541187884393
    },
    {
      "global_rank": 55285,
      "category_rank": 47,
      "domain": "gallerix.ru",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 617807.800968069,
      "curr_month_visits": 617807.800968069,
      "unique_users": 343030.070452539,
      "pages_per_visit": 6.40150701982767
    },
    {
      "global_rank": 69606,
      "category_rank": 47,
      "domain": "nationaltheatre.org.uk",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 804541.27915596,
      "curr_month_visits": 804541.27915596,
      "unique_users": 446156.44400114,
      "pages_per_visit": 3.64467026271704
    },
    {
      "global_rank": 1681,
      "category_rank": 47,
      "domain": "carteldemanhwas.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 19035190.6486837,
      "curr_month_visits": 19035190.6486837,
      "unique_users": 1687945.92700296,
      "pages_per_visit": 7.57071707305015
    },
    {
      "global_rank": 24490,
      "category_rank": 47,
      "domain": "cuantarazon.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 3425954.60321199,
      "curr_month_visits": 3425954.60321199,
      "unique_users": 435471.233942725,
      "pages_per_visit": 3.50141491036876
    },
    {
      "global_rank": 26686,
      "category_rank": 48,
      "domain": "news.hometalk.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 5462609.4398776,
      "curr_month_visits": 5462609.4398776,
      "unique_users": 4056793.13597856,
      "pages_per_visit": 1.77075220062794
    },
    {
      "global_rank": 1684,
      "category_rank": 48,
      "domain": "tresdaos.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 22512626.51731,
      "curr_month_visits": 22512626.51731,
      "unique_users": 1323290.77050332,
      "pages_per_visit": 6.88440263444097
    },
    {
      "global_rank": 55290,
      "category_rank": 48,
      "domain": "artribune.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1480340.46974004,
      "curr_month_visits": 1480340.46974004,
      "unique_users": 925935.269939232,
      "pages_per_visit": 1.52246921728401
    },
    {
      "global_rank": 3493,
      "category_rank": 48,
      "domain": "cdninstagram.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 19452014.6997612,
      "curr_month_visits": 19452014.6997612,
      "unique_users": 6672770.04511778,
      "pages_per_visit": 3.02889660292803
    },
    {
      "global_rank": 1030,
      "category_rank": 48,
      "domain": "doramalive.news",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 65904819.8770325,
      "curr_month_visits": 65904819.8770325,
      "unique_users": 2887767.33608104,
      "pages_per_visit": 3.5899606761112
    },
    {
      "global_rank": 4455,
      "category_rank": 48,
      "domain": "bandlab.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 11479859.1256692,
      "curr_month_visits": 11479859.1256692,
      "unique_users": 2754684.87374823,
      "pages_per_visit": 6.42047141260532
    },
    {
      "global_rank": 71026,
      "category_rank": 48,
      "domain": "toho-navi.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 384881.29644268,
      "curr_month_visits": 384881.29644268,
      "unique_users": 127555.332974444,
      "pages_per_visit": 9.34745251371248
    },
    {
      "global_rank": 6082,
      "category_rank": 48,
      "domain": "lubimyczytac.pl",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 10501036.527901,
      "curr_month_visits": 10501036.527901,
      "unique_users": 3878161.36641777,
      "pages_per_visit": 3.40520042743697
    },
    {
      "global_rank": 1685,
      "category_rank": 49,
      "domain": "lightnovelworld.co",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 36248343.3756642,
      "curr_month_visits": 36248343.3756642,
      "unique_users": 3109559.00784853,
      "pages_per_visit": 7.70712472435309
    },
    {
      "global_rank": 1038,
      "category_rank": 49,
      "domain": "justwatch.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 58149259.6505346,
      "curr_month_visits": 58149259.6505346,
      "unique_users": 40932975.8794472,
      "pages_per_visit": 2.03471924266339
    },
    {
      "global_rank": 4474,
      "category_rank": 49,
      "domain": "cope.es",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 18977609.6967723,
      "curr_month_visits": 18977609.6967723,
      "unique_users": 7000824.05467643,
      "pages_per_visit": 1.79433458936937
    },
    {
      "global_rank": 27808,
      "category_rank": 49,
      "domain": "clearsky.app",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 696501.680917137,
      "curr_month_visits": 696501.680917137,
      "unique_users": 237978.952055931,
      "pages_per_visit": 10.8487230316394
    },
    {
      "global_rank": 6090,
      "category_rank": 49,
      "domain": "avidreaders.ru",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 5887635.95036382,
      "curr_month_visits": 5887635.95036382,
      "unique_users": 1799530.8818624,
      "pages_per_visit": 11.9041797116896
    },
    {
      "global_rank": 3570,
      "category_rank": 49,
      "domain": "kaspi.kz",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 10631101.2737485,
      "curr_month_visits": 10631101.2737485,
      "unique_users": 3014713.05617904,
      "pages_per_visit": 8.48811511741549
    },
    {
      "global_rank": 55794,
      "category_rank": 49,
      "domain": "line-of-action.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1085591.01600474,
      "curr_month_visits": 1085591.01600474,
      "unique_users": 399155.069881206,
      "pages_per_visit": 3.36996004075938
    },
    {
      "global_rank": 71331,
      "category_rank": 49,
      "domain": "newyorktheatreguide.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 628242.660712887,
      "curr_month_visits": 628242.660712887,
      "unique_users": 424449.671944662,
      "pages_per_visit": 3.18416595627312
    },
    {
      "global_rank": 1064,
      "category_rank": 50,
      "domain": "bfmtv.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 68359063.3669817,
      "curr_month_visits": 68359063.3669817,
      "unique_users": 20076121.0439024,
      "pages_per_visit": 1.76429955462298
    },
    {
      "global_rank": 1713,
      "category_rank": 50,
      "domain": "voiranime.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 35507731.6330756,
      "curr_month_visits": 35507731.6330756,
      "unique_users": 3598047.13621414,
      "pages_per_visit": 5.08925890933404
    },
    {
      "global_rank": 76044,
      "category_rank": 50,
      "domain": "gorbilet.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 889458.977404753,
      "curr_month_visits": 889458.977404753,
      "unique_users": 401855.596302509,
      "pages_per_visit": 2.02910886304362
    },
    {
      "global_rank": 6448,
      "category_rank": 50,
      "domain": "trxs.cc",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 8845672.8076592,
      "curr_month_visits": 8845672.8076592,
      "unique_users": 738130.983845383,
      "pages_per_visit": 10.4116671064247
    },
    {
      "global_rank": 28041,
      "category_rank": 50,
      "domain": "joyreactor.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1830357.96657978,
      "curr_month_visits": 1830357.96657978,
      "unique_users": 1055083.76363962,
      "pages_per_visit": 4.50528347933635
    },
    {
      "global_rank": 56663,
      "category_rank": 50,
      "domain": "art.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 873374.735683186,
      "curr_month_visits": 873374.735683186,
      "unique_users": 596249.186225003,
      "pages_per_visit": 3.62297673810128
    },
    {
      "global_rank": 4860,
      "category_rank": 50,
      "domain": "lnk.to",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 19251791.882238,
      "curr_month_visits": 19251791.882238,
      "unique_users": 14258047.9744729,
      "pages_per_visit": 1.3708962913145
    },
    {
      "global_rank": 3697,
      "category_rank": 50,
      "domain": "timeout.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 22756959.1215945,
      "curr_month_visits": 22756959.1215945,
      "unique_users": 15147148.2366441,
      "pages_per_visit": 1.79452301252371
    },
    {
      "global_rank": 28154,
      "category_rank": 51,
      "domain": "chamsko.pl",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2897597.91425031,
      "curr_month_visits": 2897597.91425031,
      "unique_users": 272395.027873189,
      "pages_per_visit": 2.95632087811834
    },
    {
      "global_rank": 1067,
      "category_rank": 51,
      "domain": "anime-nexus.ro",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 46797362.0131072,
      "curr_month_visits": 46797362.0131072,
      "unique_users": 2193540.76373499,
      "pages_per_visit": 4.19750300913016
    },
    {
      "global_rank": 6587,
      "category_rank": 51,
      "domain": "shuhaige.net",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 4875797.49153385,
      "curr_month_visits": 4875797.49153385,
      "unique_users": 923425.180827584,
      "pages_per_visit": 24.5090423376473
    },
    {
      "global_rank": 4863,
      "category_rank": 51,
      "domain": "melon.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 9212697.08920726,
      "curr_month_visits": 9212697.08920726,
      "unique_users": 3807617.38308841,
      "pages_per_visit": 6.52407693873616
    },
    {
      "global_rank": 3706,
      "category_rank": 51,
      "domain": "catawiki.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 13037603.0054735,
      "curr_month_visits": 13037603.0054735,
      "unique_users": 4222844.36349987,
      "pages_per_visit": 7.37992265799765
    },
    {
      "global_rank": 57131,
      "category_rank": 51,
      "domain": "spinspin.net",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1103815.44117249,
      "curr_month_visits": 1103815.44117249,
      "unique_users": 319816.846515173,
      "pages_per_visit": 2.61079638450357
    },
    {
      "global_rank": 80018,
      "category_rank": 51,
      "domain": "delfontmackintosh.co.uk",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 486165.135242316,
      "curr_month_visits": 486165.135242316,
      "unique_users": 282230.817152942,
      "pages_per_visit": 4.68888824743473
    },
    {
      "global_rank": 1734,
      "category_rank": 51,
      "domain": "battwo.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 21634446.5829214,
      "curr_month_visits": 21634446.5829214,
      "unique_users": 3047775.16130761,
      "pages_per_visit": 10.829839720405
    },
    {
      "global_rank": 1088,
      "category_rank": 52,
      "domain": "zdf.de",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 61381997.6490811,
      "curr_month_visits": 61381997.6490811,
      "unique_users": 18128113.0802991,
      "pages_per_visit": 2.46488534031071
    },
    {
      "global_rank": 3711,
      "category_rank": 52,
      "domain": "purepeople.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 22368496.6620853,
      "curr_month_visits": 22368496.6620853,
      "unique_users": 7000560.57122009,
      "pages_per_visit": 2.23925690456765
    },
    {
      "global_rank": 28481,
      "category_rank": 52,
      "domain": "somethingawful.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1587093.61407616,
      "curr_month_visits": 1587093.61407616,
      "unique_users": 220517.609860933,
      "pages_per_visit": 12.1624546962918
    },
    {
      "global_rank": 57375,
      "category_rank": 52,
      "domain": "inprnt.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 829117.726456986,
      "curr_month_visits": 829117.726456986,
      "unique_users": 460449.5723916,
      "pages_per_visit": 3.69256735143103
    },
    {
      "global_rank": 82365,
      "category_rank": 52,
      "domain": "ticketservices.gr",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 840161.455169234,
      "curr_month_visits": 840161.455169234,
      "unique_users": 441506.282759402,
      "pages_per_visit": 2.69872067267006
    },
    {
      "global_rank": 6750,
      "category_rank": 52,
      "domain": "akniga.org",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 12567650.3772492,
      "curr_month_visits": 12567650.3772492,
      "unique_users": 2130548.27762795,
      "pages_per_visit": 2.66773934474578
    },
    {
      "global_rank": 1737,
      "category_rank": 52,
      "domain": "myreadingmanga.info",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 19107261.6413736,
      "curr_month_visits": 19107261.6413736,
      "unique_users": 2531571.72251524,
      "pages_per_visit": 12.5801318054625
    },
    {
      "global_rank": 4866,
      "category_rank": 52,
      "domain": "pagalnew.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 7405478.64222291,
      "curr_month_visits": 7405478.64222291,
      "unique_users": 3431345.94820296,
      "pages_per_visit": 8.78350860995861
    },
    {
      "global_rank": 82862,
      "category_rank": 53,
      "domain": "medievaltimes.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 718660.829869779,
      "curr_month_visits": 718660.829869779,
      "unique_users": 470840.509587733,
      "pages_per_visit": 3.08714165339734
    },
    {
      "global_rank": 1124,
      "category_rank": 53,
      "domain": "weathernews.jp",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 74790679.0160042,
      "curr_month_visits": 74790679.0160042,
      "unique_users": 14593295.7696594,
      "pages_per_visit": 2.15994800954972
    },
    {
      "global_rank": 57681,
      "category_rank": 53,
      "domain": "knatchcoxier.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1640437.80531216,
      "curr_month_visits": 1640437.80531216,
      "unique_users": 881650.647977901,
      "pages_per_visit": 3.16101920789327
    },
    {
      "global_rank": 5009,
      "category_rank": 53,
      "domain": "sefon.pro",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 13430888.5143207,
      "curr_month_visits": 13430888.5143207,
      "unique_users": 5243914.99595226,
      "pages_per_visit": 3.38498846453031
    },
    {
      "global_rank": 3733,
      "category_rank": 53,
      "domain": "hollywoodreporter.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 23132941.7582521,
      "curr_month_visits": 23132941.7582521,
      "unique_users": 14617681.3275171,
      "pages_per_visit": 1.8312765969017
    },
    {
      "global_rank": 6993,
      "category_rank": 53,
      "domain": "sto.cx",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 9145401.77881753,
      "curr_month_visits": 9145401.77881753,
      "unique_users": 706551.314993394,
      "pages_per_visit": 9.47721397563414
    },
    {
      "global_rank": 28561,
      "category_rank": 53,
      "domain": "vocaroo.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2477496.05274688,
      "curr_month_visits": 2477496.05274688,
      "unique_users": 1267979.61126514,
      "pages_per_visit": 2.40219250301963
    },
    {
      "global_rank": 1798,
      "category_rank": 53,
      "domain": "aniworld.to",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 34666452.7321385,
      "curr_month_visits": 34666452.7321385,
      "unique_users": 2901471.55291871,
      "pages_per_visit": 5.54936188222645
    },
    {
      "global_rank": 7703,
      "category_rank": 54,
      "domain": "bookwalker.jp",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 7662355.62416304,
      "curr_month_visits": 7662355.62416304,
      "unique_users": 2953512.9067446,
      "pages_per_visit": 5.17596990533493
    },
    {
      "global_rank": 3757,
      "category_rank": 54,
      "domain": "alphapolis.co.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 12223221.1916972,
      "curr_month_visits": 12223221.1916972,
      "unique_users": 1518672.19080259,
      "pages_per_visit": 10.6500166135845
    },
    {
      "global_rank": 5199,
      "category_rank": 54,
      "domain": "albumoftheyear.org",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 7924594.0060791,
      "curr_month_visits": 7924594.0060791,
      "unique_users": 1741555.84755621,
      "pages_per_visit": 10.5812238706265
    },
    {
      "global_rank": 1127,
      "category_rank": 54,
      "domain": "canalplus.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 42911120.4263913,
      "curr_month_visits": 42911120.4263913,
      "unique_users": 10361356.8519455,
      "pages_per_visit": 4.66822201966602
    },
    {
      "global_rank": 62065,
      "category_rank": 54,
      "domain": "artnews.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1132907.67205432,
      "curr_month_visits": 1132907.67205432,
      "unique_users": 761384.539835238,
      "pages_per_visit": 2.05819449713453
    },
    {
      "global_rank": 1799,
      "category_rank": 54,
      "domain": "viajandocomida.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 16068266.6179875,
      "curr_month_visits": 16068266.6179875,
      "unique_users": 4581673.5503324,
      "pages_per_visit": 7.62086894397101
    },
    {
      "global_rank": 29061,
      "category_rank": 54,
      "domain": "korzik.net",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1638139.3282371,
      "curr_month_visits": 1638139.3282371,
      "unique_users": 158856.675701591,
      "pages_per_visit": 10.6872199788252
    },
    {
      "global_rank": 83429,
      "category_rank": 54,
      "domain": "cinestarcinemas.hr",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 636336.37866905,
      "curr_month_visits": 636336.37866905,
      "unique_users": 237856.059225473,
      "pages_per_visit": 2.54041465676944
    },
    {
      "global_rank": 5403,
      "category_rank": 55,
      "domain": "muzofond.fm",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 14689362.8213242,
      "curr_month_visits": 14689362.8213242,
      "unique_users": 6145960.57176934,
      "pages_per_visit": 2.50579530742497
    },
    {
      "global_rank": 1820,
      "category_rank": 55,
      "domain": "czbooks.net",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 21944234.5406448,
      "curr_month_visits": 21944234.5406448,
      "unique_users": 1989689.80547317,
      "pages_per_visit": 14.8903822730336
    },
    {
      "global_rank": 7722,
      "category_rank": 55,
      "domain": "piaotia.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 7180836.79086285,
      "curr_month_visits": 7180836.79086285,
      "unique_users": 926481.10348714,
      "pages_per_visit": 7.80653440812882
    },
    {
      "global_rank": 3827,
      "category_rank": 55,
      "domain": "hola.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 20864164.3048082,
      "curr_month_visits": 20864164.3048082,
      "unique_users": 7589272.17754005,
      "pages_per_visit": 2.13517472220732
    },
    {
      "global_rank": 83443,
      "category_rank": 55,
      "domain": "domorestuff.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 874938.111992044,
      "curr_month_visits": 874938.111992044,
      "unique_users": 110729.300312137,
      "pages_per_visit": 3.13159969469126
    },
    {
      "global_rank": 29798,
      "category_rank": 55,
      "domain": "ucrazy.org",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2401360.02021705,
      "curr_month_visits": 2401360.02021705,
      "unique_users": 406129.34601682,
      "pages_per_visit": 4.00886324889359
    },
    {
      "global_rank": 1132,
      "category_rank": 55,
      "domain": "myflixerz.to",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 46298202.4423812,
      "curr_month_visits": 46298202.4423812,
      "unique_users": 5699045.13693513,
      "pages_per_visit": 4.20906956255144
    },
    {
      "global_rank": 63755,
      "category_rank": 55,
      "domain": "fontsinuse.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 815242.709722612,
      "curr_month_visits": 815242.709722612,
      "unique_users": 420755.219080893,
      "pages_per_visit": 3.32003214159525
    },
    {
      "global_rank": 1191,
      "category_rank": 56,
      "domain": "filmibeat.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 47954934.3994139,
      "curr_month_visits": 47954934.3994139,
      "unique_users": 20494431.2969007,
      "pages_per_visit": 2.89413639964067
    },
    {
      "global_rank": 1824,
      "category_rank": 56,
      "domain": "mangaworld.ac",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 19401030.9172346,
      "curr_month_visits": 19401030.9172346,
      "unique_users": 2429326.0531471,
      "pages_per_visit": 12.1409779817185
    },
    {
      "global_rank": 83999,
      "category_rank": 56,
      "domain": "shop.tca-pictures.net",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 737875.514329054,
      "curr_month_visits": 737875.514329054,
      "unique_users": 142725.911645678,
      "pages_per_visit": 3.88948151399311
    },
    {
      "global_rank": 63831,
      "category_rank": 56,
      "domain": "ibispaint.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1056084.35787085,
      "curr_month_visits": 1056084.35787085,
      "unique_users": 640382.703918325,
      "pages_per_visit": 2.38835684767071
    },
    {
      "global_rank": 5470,
      "category_rank": 56,
      "domain": "smule.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 14067763.8871828,
      "curr_month_visits": 14067763.8871828,
      "unique_users": 7670933.5644381,
      "pages_per_visit": 2.32003342636324
    },
    {
      "global_rank": 3882,
      "category_rank": 56,
      "domain": "pomponik.pl",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 20938476.6658084,
      "curr_month_visits": 20938476.6658084,
      "unique_users": 4949506.18442958,
      "pages_per_visit": 1.95995243821653
    },
    {
      "global_rank": 7872,
      "category_rank": 56,
      "domain": "audiobookbay.lu",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 6158356.24142165,
      "curr_month_visits": 6158356.24142165,
      "unique_users": 1121384.76560706,
      "pages_per_visit": 8.34890479972559
    },
    {
      "global_rank": 30055,
      "category_rank": 56,
      "domain": "timeguessr.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1125526.42546884,
      "curr_month_visits": 1125526.42546884,
      "unique_users": 313787.226404694,
      "pages_per_visit": 12.4765291220501
    },
    {
      "global_rank": 3979,
      "category_rank": 57,
      "domain": "setlist.fm",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 15585384.7338564,
      "curr_month_visits": 15585384.7338564,
      "unique_users": 6551547.89517463,
      "pages_per_visit": 4.39676606115548
    },
    {
      "global_rank": 5492,
      "category_rank": 57,
      "domain": "radiozet.pl",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 17978458.2431592,
      "curr_month_visits": 17978458.2431592,
      "unique_users": 6153568.31282177,
      "pages_per_visit": 1.85559169716616
    },
    {
      "global_rank": 1832,
      "category_rank": 57,
      "domain": "mangaraw.ac",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 26050245.7389405,
      "curr_month_visits": 26050245.7389405,
      "unique_users": 1430912.11167961,
      "pages_per_visit": 8.15646571690739
    },
    {
      "global_rank": 30731,
      "category_rank": 57,
      "domain": "demotivateur.fr",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2618596.90366086,
      "curr_month_visits": 2618596.90366086,
      "unique_users": 1543753.69558782,
      "pages_per_visit": 1.57462444104022
    },
    {
      "global_rank": 85027,
      "category_rank": 57,
      "domain": "onthestage.tickets",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 405950.533510871,
      "curr_month_visits": 405950.533510871,
      "unique_users": 212203.897327677,
      "pages_per_visit": 3.7720477496653
    },
    {
      "global_rank": 1206,
      "category_rank": 57,
      "domain": "rezka-ua.tv",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 54122024.9702422,
      "curr_month_visits": 54122024.9702422,
      "unique_users": 2738726.54328805,
      "pages_per_visit": 2.97813411883492
    },
    {
      "global_rank": 7895,
      "category_rank": 57,
      "domain": "novelfull.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 8551015.00666772,
      "curr_month_visits": 8551015.00666772,
      "unique_users": 696642.510558407,
      "pages_per_visit": 10.1766543746267
    },
    {
      "global_rank": 65588,
      "category_rank": 57,
      "domain": "51yuansu.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 664397.845069165,
      "curr_month_visits": 664397.845069165,
      "unique_users": 275102.815756799,
      "pages_per_visit": 5.96450826476408
    },
    {
      "global_rank": 30962,
      "category_rank": 58,
      "domain": "ahnegao.com.br",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2223819.0817342,
      "curr_month_visits": 2223819.0817342,
      "unique_users": 367840.372810406,
      "pages_per_visit": 4.09533827157546
    },
    {
      "global_rank": 1857,
      "category_rank": 58,
      "domain": "manhuaus.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 25349583.9924165,
      "curr_month_visits": 25349583.9924165,
      "unique_users": 4543563.53379999,
      "pages_per_visit": 5.85302171400882
    },
    {
      "global_rank": 5596,
      "category_rank": 58,
      "domain": "lacuerda.net",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 10778968.5441597,
      "curr_month_visits": 10778968.5441597,
      "unique_users": 3358605.44191404,
      "pages_per_visit": 4.6649437725167
    },
    {
      "global_rank": 7945,
      "category_rank": 58,
      "domain": "novelfull.net",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 9628374.26376864,
      "curr_month_visits": 9628374.26376864,
      "unique_users": 545681.297267082,
      "pages_per_visit": 12.9144490647135
    },
    {
      "global_rank": 4004,
      "category_rank": 58,
      "domain": "zoon.ru",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 17492021.5929455,
      "curr_month_visits": 17492021.5929455,
      "unique_users": 12055745.9455444,
      "pages_per_visit": 2.45213546342681
    },
    {
      "global_rank": 68080,
      "category_rank": 58,
      "domain": "ddinstagram.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1129232.57619644,
      "curr_month_visits": 1129232.57619644,
      "unique_users": 596848.145483906,
      "pages_per_visit": 1.3758558351754
    },
    {
      "global_rank": 1208,
      "category_rank": 58,
      "domain": "filmweb.pl",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 37129261.4849918,
      "curr_month_visits": 37129261.4849918,
      "unique_users": 9907441.29684933,
      "pages_per_visit": 4.49677180811056
    },
    {
      "global_rank": 87829,
      "category_rank": 58,
      "domain": "wickedthemusical.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 367903.985704648,
      "curr_month_visits": 367903.985704648,
      "unique_users": 257565.860454985,
      "pages_per_visit": 2.46798733991583
    },
    {
      "global_rank": 88317,
      "category_rank": 59,
      "domain": "luckyseat.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 588901.111486103,
      "curr_month_visits": 588901.111486103,
      "unique_users": 244125.710103804,
      "pages_per_visit": 3.38760896371688
    },
    {
      "global_rank": 69617,
      "category_rank": 59,
      "domain": "wallpaperbetter.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 617301.268268512,
      "curr_month_visits": 617301.268268512,
      "unique_users": 367193.639514699,
      "pages_per_visit": 4.8893602721024
    },
    {
      "global_rank": 31073,
      "category_rank": 59,
      "domain": "refresher.sk",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2562644.47983305,
      "curr_month_visits": 2562644.47983305,
      "unique_users": 1140255.09238179,
      "pages_per_visit": 1.81739184814725
    },
    {
      "global_rank": 4065,
      "category_rank": 59,
      "domain": "culture.ru",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 16841194.9500128,
      "curr_month_visits": 16841194.9500128,
      "unique_users": 9687686.40758293,
      "pages_per_visit": 2.34928946415505
    },
    {
      "global_rank": 1215,
      "category_rank": 59,
      "domain": "nrk.no",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 53810278.8600187,
      "curr_month_visits": 53810278.8600187,
      "unique_users": 4250513.71228509,
      "pages_per_visit": 3.32462729059058
    },
    {
      "global_rank": 1877,
      "category_rank": 59,
      "domain": "remanga.org",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 19334807.3170013,
      "curr_month_visits": 19334807.3170013,
      "unique_users": 1970770.79202759,
      "pages_per_visit": 15.7351173823131
    },
    {
      "global_rank": 5812,
      "category_rank": 59,
      "domain": "pitchfork.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 11998909.3920069,
      "curr_month_visits": 11998909.3920069,
      "unique_users": 4340541.11805211,
      "pages_per_visit": 2.89223437004149
    },
    {
      "global_rank": 7968,
      "category_rank": 59,
      "domain": "indigo.ca",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 5470062.36957628,
      "curr_month_visits": 5470062.36957628,
      "unique_users": 2481757.6208453,
      "pages_per_visit": 5.18719301975204
    },
    {
      "global_rank": 69881,
      "category_rank": 60,
      "domain": "slideegg.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 604909.283081394,
      "curr_month_visits": 604909.283081394,
      "unique_users": 378077.836713945,
      "pages_per_visit": 3.7306219512255
    },
    {
      "global_rank": 8008,
      "category_rank": 60,
      "domain": "livelib.ru",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 8108859.90064344,
      "curr_month_visits": 8108859.90064344,
      "unique_users": 4484373.38996298,
      "pages_per_visit": 3.10048921942383
    },
    {
      "global_rank": 4351,
      "category_rank": 60,
      "domain": "tvguia.es",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 14844625.0576149,
      "curr_month_visits": 14844625.0576149,
      "unique_users": 1573175.58849963,
      "pages_per_visit": 3.45792337748477
    },
    {
      "global_rank": 1888,
      "category_rank": 60,
      "domain": "lekmanga.net",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 27167097.8920999,
      "curr_month_visits": 27167097.8920999,
      "unique_users": 2760668.73171279,
      "pages_per_visit": 7.44132782807844
    },
    {
      "global_rank": 1218,
      "category_rank": 60,
      "domain": "lookmovie2.to",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 43212986.4913108,
      "curr_month_visits": 43212986.4913108,
      "unique_users": 4231879.1122729,
      "pages_per_visit": 5.66250500046039
    },
    {
      "global_rank": 31429,
      "category_rank": 60,
      "domain": "niceoppai.net",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2027071.04101946,
      "curr_month_visits": 2027071.04101946,
      "unique_users": 249563.206545299,
      "pages_per_visit": 4.76228168841689
    },
    {
      "global_rank": 5874,
      "category_rank": 60,
      "domain": "sf-converter.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 11956924.1942858,
      "curr_month_visits": 11956924.1942858,
      "unique_users": 5772325.78830717,
      "pages_per_visit": 1.76027547507861
    },
    {
      "global_rank": 88390,
      "category_rank": 60,
      "domain": "tiyatrolar.com.tr",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 479677.825632271,
      "curr_month_visits": 479677.825632271,
      "unique_users": 277838.631301646,
      "pages_per_visit": 3.42937957446823
    },
    {
      "global_rank": 31641,
      "category_rank": 61,
      "domain": "lamebook.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1768271.5301386,
      "curr_month_visits": 1768271.5301386,
      "unique_users": 141749.002932161,
      "pages_per_visit": 6.4177598761314
    },
    {
      "global_rank": 4391,
      "category_rank": 61,
      "domain": "wikifeet.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 7899298.09662188,
      "curr_month_visits": 7899298.09662188,
      "unique_users": 1825204.09475738,
      "pages_per_visit": 13.0826501698188
    },
    {
      "global_rank": 1898,
      "category_rank": 61,
      "domain": "animeonline.ninja",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 29195184.02994,
      "curr_month_visits": 29195184.02994,
      "unique_users": 4649588.48384534,
      "pages_per_visit": 4.61536463714997
    },
    {
      "global_rank": 8197,
      "category_rank": 61,
      "domain": "quotev.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 7957415.4674582,
      "curr_month_visits": 7957415.4674582,
      "unique_users": 1814967.18051327,
      "pages_per_visit": 5.79037986395172
    },
    {
      "global_rank": 1264,
      "category_rank": 61,
      "domain": "sflix.to",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 46567456.3021944,
      "curr_month_visits": 46567456.3021944,
      "unique_users": 7025925.8601125,
      "pages_per_visit": 4.2261578803419
    },
    {
      "global_rank": 69924,
      "category_rank": 61,
      "domain": "redfrog1234.wordpress.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 524670.223150296,
      "curr_month_visits": 524670.223150296,
      "unique_users": 194032.069200786,
      "pages_per_visit": 4.93043066421697
    },
    {
      "global_rank": 88487,
      "category_rank": 61,
      "domain": "theater.nl",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 544420.055136814,
      "curr_month_visits": 544420.055136814,
      "unique_users": 426736.859862531,
      "pages_per_visit": 3.06247414984733
    },
    {
      "global_rank": 5949,
      "category_rank": 61,
      "domain": "shazam.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 14170770.6953309,
      "curr_month_visits": 14170770.6953309,
      "unique_users": 9338838.63504927,
      "pages_per_visit": 1.77604331290956
    },
    {
      "global_rank": 5982,
      "category_rank": 62,
      "domain": "tower.jp",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 10199360.0140434,
      "curr_month_visits": 10199360.0140434,
      "unique_users": 4983291.60949212,
      "pages_per_visit": 3.94880492632727
    },
    {
      "global_rank": 1294,
      "category_rank": 62,
      "domain": "allocine.fr",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 43792073.5589999,
      "curr_month_visits": 43792073.5589999,
      "unique_users": 17515705.8105167,
      "pages_per_visit": 2.7024904150896
    },
    {
      "global_rank": 70357,
      "category_rank": 62,
      "domain": "plusmate.jp",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 448592.35170544,
      "curr_month_visits": 448592.35170544,
      "unique_users": 252755.962243296,
      "pages_per_visit": 7.48606000603316
    },
    {
      "global_rank": 89142,
      "category_rank": 62,
      "domain": "thestudiodirector.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 489834.318039218,
      "curr_month_visits": 489834.318039218,
      "unique_users": 237616.527441139,
      "pages_per_visit": 7.42458212271743
    },
    {
      "global_rank": 1906,
      "category_rank": 62,
      "domain": "k-manga.jp",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 26583988.546508,
      "curr_month_visits": 26583988.546508,
      "unique_users": 7113075.36713459,
      "pages_per_visit": 7.67067858971362
    },
    {
      "global_rank": 32817,
      "category_rank": 62,
      "domain": "unsere-helden.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1133532.36138755,
      "curr_month_visits": 1133532.36138755,
      "unique_users": 815937.316139166,
      "pages_per_visit": 6.42723916854816
    },
    {
      "global_rank": 4461,
      "category_rank": 62,
      "domain": "myasiantv.ac",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 19068080.453423,
      "curr_month_visits": 19068080.453423,
      "unique_users": 1947728.59414854,
      "pages_per_visit": 3.32101840011217
    },
    {
      "global_rank": 8275,
      "category_rank": 62,
      "domain": "chitai-gorod.ru",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 6609031.66479649,
      "curr_month_visits": 6609031.66479649,
      "unique_users": 3121873.2209393,
      "pages_per_visit": 4.48233494484681
    },
    {
      "global_rank": 1908,
      "category_rank": 63,
      "domain": "demonicscans.org",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 56703628.0343952,
      "curr_month_visits": 56703628.0343952,
      "unique_users": 2553957.38924799,
      "pages_per_visit": 5.89353327445114
    },
    {
      "global_rank": 70575,
      "category_rank": 63,
      "domain": "sangtacviet.pro",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 316922.698381343,
      "curr_month_visits": 316922.698381343,
      "unique_users": 35976.4480378395,
      "pages_per_visit": 17.3041241661601
    },
    {
      "global_rank": 4477,
      "category_rank": 63,
      "domain": "jastrzabpost.pl",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 18038967.5361663,
      "curr_month_visits": 18038967.5361663,
      "unique_users": 6440984.048644,
      "pages_per_visit": 1.73208420258001
    },
    {
      "global_rank": 1332,
      "category_rank": 63,
      "domain": "fmovies.co",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 40270807.0175623,
      "curr_month_visits": 40270807.0175623,
      "unique_users": 9806223.39082806,
      "pages_per_visit": 3.93437800072415
    },
    {
      "global_rank": 5998,
      "category_rank": 63,
      "domain": "wynk.in",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 15008675.6970455,
      "curr_month_visits": 15008675.6970455,
      "unique_users": 9054685.73899526,
      "pages_per_visit": 3.2754450423778
    },
    {
      "global_rank": 32904,
      "category_rank": 63,
      "domain": "oper.ru",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2091738.9703924,
      "curr_month_visits": 2091738.9703924,
      "unique_users": 367176.426900458,
      "pages_per_visit": 3.02338314835413
    },
    {
      "global_rank": 90109,
      "category_rank": 63,
      "domain": "carnegiehall.org",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 493833.589919197,
      "curr_month_visits": 493833.589919197,
      "unique_users": 276853.536815007,
      "pages_per_visit": 3.38845235483532
    },
    {
      "global_rank": 8377,
      "category_rank": 63,
      "domain": "harrypotter.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 2525678.36029177,
      "curr_month_visits": 2525678.36029177,
      "unique_users": 1327020.2635092,
      "pages_per_visit": 7.29424480479214
    },
    {
      "global_rank": 91640,
      "category_rank": 64,
      "domain": "wordfly.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 735309.470465238,
      "curr_month_visits": 735309.470465238,
      "unique_users": 510602.257291818,
      "pages_per_visit": 1.96698169378142
    },
    {
      "global_rank": 72670,
      "category_rank": 64,
      "domain": "jerrysartarama.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 606097.819563632,
      "curr_month_visits": 606097.819563632,
      "unique_users": 330056.054725168,
      "pages_per_visit": 3.74309728175019
    },
    {
      "global_rank": 1939,
      "category_rank": 64,
      "domain": "epsilonscan.to",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 25266712.0223629,
      "curr_month_visits": 25266712.0223629,
      "unique_users": 1076823.87222391,
      "pages_per_visit": 11.1872252201359
    },
    {
      "global_rank": 6107,
      "category_rank": 64,
      "domain": "faroutmagazine.co.uk",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 11013773.7805521,
      "curr_month_visits": 11013773.7805521,
      "unique_users": 5778826.61216735,
      "pages_per_visit": 1.81661630319117
    },
    {
      "global_rank": 8467,
      "category_rank": 64,
      "domain": "kobo.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 6677386.04644067,
      "curr_month_visits": 6677386.04644067,
      "unique_users": 3515840.74412093,
      "pages_per_visit": 4.63809348332486
    },
    {
      "global_rank": 1390,
      "category_rank": 64,
      "domain": "google.se",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 26758137.7916258,
      "curr_month_visits": 26758137.7916258,
      "unique_users": 2843800.51967335,
      "pages_per_visit": 11.7868811815476
    },
    {
      "global_rank": 4487,
      "category_rank": 64,
      "domain": "kapanlagi.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 16525381.5008678,
      "curr_month_visits": 16525381.5008678,
      "unique_users": 8767913.03718367,
      "pages_per_visit": 2.64943936758001
    },
    {
      "global_rank": 32913,
      "category_rank": 64,
      "domain": "cuantocabron.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2459388.9638437,
      "curr_month_visits": 2459388.9638437,
      "unique_users": 377886.232213075,
      "pages_per_visit": 3.4468681202155
    },
    {
      "global_rank": 73260,
      "category_rank": 65,
      "domain": "pelisplushd.nz",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1555529.66675209,
      "curr_month_visits": 1555529.66675209,
      "unique_users": 397748.139558924,
      "pages_per_visit": 1.18368412596658
    },
    {
      "global_rank": 1979,
      "category_rank": 65,
      "domain": "anime-sama.fr",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 36848005.5877413,
      "curr_month_visits": 36848005.5877413,
      "unique_users": 3860275.29882458,
      "pages_per_visit": 3.10138462510504
    },
    {
      "global_rank": 4519,
      "category_rank": 65,
      "domain": "sketchfab.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 10921402.7042816,
      "curr_month_visits": 10921402.7042816,
      "unique_users": 4570056.32302909,
      "pages_per_visit": 6.54062192191384
    },
    {
      "global_rank": 6257,
      "category_rank": 65,
      "domain": "worldstar.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 11492626.0390781,
      "curr_month_visits": 11492626.0390781,
      "unique_users": 1023693.80098965,
      "pages_per_visit": 4.138172211853
    },
    {
      "global_rank": 91963,
      "category_rank": 65,
      "domain": "wrapbook.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 303559.367509804,
      "curr_month_visits": 303559.367509804,
      "unique_users": 130147.610724595,
      "pages_per_visit": 8.52577311859369
    },
    {
      "global_rank": 34350,
      "category_rank": 65,
      "domain": "futu.cl",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2999985.58661154,
      "curr_month_visits": 2999985.58661154,
      "unique_users": 617164.297607841,
      "pages_per_visit": 2.24367079213584
    },
    {
      "global_rank": 1392,
      "category_rank": 65,
      "domain": "fullhdfilmizlesene.de",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 37256038.9907373,
      "curr_month_visits": 37256038.9907373,
      "unique_users": 8816156.03805718,
      "pages_per_visit": 3.87301230418068
    },
    {
      "global_rank": 8491,
      "category_rank": 65,
      "domain": "xszj.org",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 4792446.08534802,
      "curr_month_visits": 4792446.08534802,
      "unique_users": 1325856.2031662,
      "pages_per_visit": 15.5548306604228
    },
    {
      "global_rank": 34761,
      "category_rank": 66,
      "domain": "renote.net",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2324316.17267776,
      "curr_month_visits": 2324316.17267776,
      "unique_users": 1726623.6701088,
      "pages_per_visit": 2.30606962072498
    },
    {
      "global_rank": 94105,
      "category_rank": 66,
      "domain": "xreal.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 580243.674375883,
      "curr_month_visits": 580243.674375883,
      "unique_users": 280181.917642986,
      "pages_per_visit": 2.96014660300214
    },
    {
      "global_rank": 4781,
      "category_rank": 66,
      "domain": "disney.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 11530581.7642849,
      "curr_month_visits": 11530581.7642849,
      "unique_users": 5416480.988059,
      "pages_per_visit": 4.62594436696927
    },
    {
      "global_rank": 1431,
      "category_rank": 66,
      "domain": "ivi.ru",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 43604309.8194256,
      "curr_month_visits": 43604309.8194256,
      "unique_users": 14901257.996998,
      "pages_per_visit": 2.87070904667195
    },
    {
      "global_rank": 8743,
      "category_rank": 66,
      "domain": "litmarket.ru",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 9259649.47036939,
      "curr_month_visits": 9259649.47036939,
      "unique_users": 1771240.75842082,
      "pages_per_visit": 3.40108680942123
    },
    {
      "global_rank": 77670,
      "category_rank": 66,
      "domain": "thisiscolossal.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 908415.101805288,
      "curr_month_visits": 908415.101805288,
      "unique_users": 473221.457421835,
      "pages_per_visit": 2.28424520798356
    },
    {
      "global_rank": 6444,
      "category_rank": 66,
      "domain": "pendujatt.net",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 8210149.50114879,
      "curr_month_visits": 8210149.50114879,
      "unique_users": 4654781.52702206,
      "pages_per_visit": 4.79602197665108
    },
    {
      "global_rank": 2026,
      "category_rank": 66,
      "domain": "yottytech.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 38600513.9652863,
      "curr_month_visits": 38600513.9652863,
      "unique_users": 8281762.58651042,
      "pages_per_visit": 4.34745758831692
    },
    {
      "global_rank": 36585,
      "category_rank": 67,
      "domain": "gifer.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1518115.88097624,
      "curr_month_visits": 1518115.88097624,
      "unique_users": 998226.011149936,
      "pages_per_visit": 3.46938267358315
    },
    {
      "global_rank": 95658,
      "category_rank": 67,
      "domain": "themisweb.fr",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 580048.308396078,
      "curr_month_visits": 580048.308396078,
      "unique_users": 346607.871271525,
      "pages_per_visit": 2.99714118288672
    },
    {
      "global_rank": 8783,
      "category_rank": 67,
      "domain": "proza.ru",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 8566853.95304958,
      "curr_month_visits": 8566853.95304958,
      "unique_users": 3284930.31079953,
      "pages_per_visit": 2.91141359288202
    },
    {
      "global_rank": 1461,
      "category_rank": 67,
      "domain": "hlsloader.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 10388792.2199208,
      "curr_month_visits": 10388792.2199208,
      "unique_users": 804430.320727238,
      "pages_per_visit": 72.4784953718177
    },
    {
      "global_rank": 4799,
      "category_rank": 67,
      "domain": "giphy.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 14104408.2245483,
      "curr_month_visits": 14104408.2245483,
      "unique_users": 8935200.066504,
      "pages_per_visit": 2.86207006894017
    },
    {
      "global_rank": 6585,
      "category_rank": 67,
      "domain": "rtl.fr",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 14709020.7899904,
      "curr_month_visits": 14709020.7899904,
      "unique_users": 5595315.01441451,
      "pages_per_visit": 1.59236226303212
    },
    {
      "global_rank": 2030,
      "category_rank": 67,
      "domain": "mangafire.to",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 22721246.0200644,
      "curr_month_visits": 22721246.0200644,
      "unique_users": 2536313.92301041,
      "pages_per_visit": 7.1967391800796
    },
    {
      "global_rank": 77892,
      "category_rank": 67,
      "domain": "paintingwithatwist.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 561562.364420367,
      "curr_month_visits": 561562.364420367,
      "unique_users": 307609.273327004,
      "pages_per_visit": 3.80448584467286
    },
    {
      "global_rank": 81436,
      "category_rank": 68,
      "domain": "drawabox.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 700469.058950549,
      "curr_month_visits": 700469.058950549,
      "unique_users": 208200.136351227,
      "pages_per_visit": 4.41701530034557
    },
    {
      "global_rank": 8866,
      "category_rank": 68,
      "domain": "trxs.me",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 6136656.25237982,
      "curr_month_visits": 6136656.25237982,
      "unique_users": 590001.577209249,
      "pages_per_visit": 8.8163146996787
    },
    {
      "global_rank": 5036,
      "category_rank": 68,
      "domain": "ingresso.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 11658664.2332365,
      "curr_month_visits": 11658664.2332365,
      "unique_users": 6551668.19691186,
      "pages_per_visit": 2.78930589683961
    },
    {
      "global_rank": 96029,
      "category_rank": 68,
      "domain": "muenchenticket.de",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 409985.051093972,
      "curr_month_visits": 409985.051093972,
      "unique_users": 257395.329102344,
      "pages_per_visit": 3.68338687105689
    },
    {
      "global_rank": 1471,
      "category_rank": 68,
      "domain": "123moviesfree.net",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 37429479.6810627,
      "curr_month_visits": 37429479.6810627,
      "unique_users": 8918002.14725686,
      "pages_per_visit": 4.11752081580228
    },
    {
      "global_rank": 2164,
      "category_rank": 68,
      "domain": "mangafreak.me",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 36845751.2242771,
      "curr_month_visits": 36845751.2242771,
      "unique_users": 2483362.40048707,
      "pages_per_visit": 4.27694907496692
    },
    {
      "global_rank": 40041,
      "category_rank": 68,
      "domain": "webfail.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2528411.98188595,
      "curr_month_visits": 2528411.98188595,
      "unique_users": 195048.965785851,
      "pages_per_visit": 2.12671750779799
    },
    {
      "global_rank": 6687,
      "category_rank": 68,
      "domain": "hmv.co.jp",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 9923281.44135579,
      "curr_month_visits": 9923281.44135579,
      "unique_users": 5915830.59990304,
      "pages_per_visit": 3.2485664705087
    },
    {
      "global_rank": 81779,
      "category_rank": 69,
      "domain": "capngagiangson.wordpress.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 461204.141505836,
      "curr_month_visits": 461204.141505836,
      "unique_users": 148343.811457531,
      "pages_per_visit": 4.10380399497185
    },
    {
      "global_rank": 5040,
      "category_rank": 69,
      "domain": "reurl.cc",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 17993748.0089807,
      "curr_month_visits": 17993748.0089807,
      "unique_users": 7999450.78513836,
      "pages_per_visit": 1.51089324103726
    },
    {
      "global_rank": 40094,
      "category_rank": 69,
      "domain": "interesnoe.me",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1562911.00467301,
      "curr_month_visits": 1562911.00467301,
      "unique_users": 1199437.68680052,
      "pages_per_visit": 1.64771683386212
    },
    {
      "global_rank": 1472,
      "category_rank": 69,
      "domain": "ardmediathek.de",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 44398189.5342044,
      "curr_month_visits": 44398189.5342044,
      "unique_users": 10899290.3603752,
      "pages_per_visit": 3.08014821362211
    },
    {
      "global_rank": 6900,
      "category_rank": 69,
      "domain": "musixmatch.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 10694960.8892066,
      "curr_month_visits": 10694960.8892066,
      "unique_users": 7741012.2371383,
      "pages_per_visit": 2.15374210642136
    },
    {
      "global_rank": 9002,
      "category_rank": 69,
      "domain": "litgorod.ru",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 7140761.44560841,
      "curr_month_visits": 7140761.44560841,
      "unique_users": 621025.402781649,
      "pages_per_visit": 3.96430160496149
    },
    {
      "global_rank": 2219,
      "category_rank": 69,
      "domain": "manganato.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 34139313.7603079,
      "curr_month_visits": 34139313.7603079,
      "unique_users": 2859357.36017004,
      "pages_per_visit": 3.83594165140553
    },
    {
      "global_rank": 96182,
      "category_rank": 69,
      "domain": "kremlinpalace.org",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 337490.008393388,
      "curr_month_visits": 337490.008393388,
      "unique_users": 193476.683450319,
      "pages_per_visit": 4.27640545119302
    },
    {
      "global_rank": 1488,
      "category_rank": 70,
      "domain": "movie.douban.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 31262376.2304058,
      "curr_month_visits": 31262376.2304058,
      "unique_users": 8486217.96692077,
      "pages_per_visit": 5.72289168675386
    },
    {
      "global_rank": 6924,
      "category_rank": 70,
      "domain": "sm3ha.mx",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 8987353.12563719,
      "curr_month_visits": 8987353.12563719,
      "unique_users": 5002919.44803076,
      "pages_per_visit": 3.55186750549877
    },
    {
      "global_rank": 5045,
      "category_rank": 70,
      "domain": "wcostream.tv",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 15209085.8177155,
      "curr_month_visits": 15209085.8177155,
      "unique_users": 1656929.44911584,
      "pages_per_visit": 4.1719971647933
    },
    {
      "global_rank": 96842,
      "category_rank": 70,
      "domain": "broadwayinchicago.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 524939.719132749,
      "curr_month_visits": 524939.719132749,
      "unique_users": 334693.333728286,
      "pages_per_visit": 2.43033402030221
    },
    {
      "global_rank": 2232,
      "category_rank": 70,
      "domain": "jkanime.net",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 25348462.7153287,
      "curr_month_visits": 25348462.7153287,
      "unique_users": 2768879.74169143,
      "pages_per_visit": 5.24512470586182
    },
    {
      "global_rank": 9161,
      "category_rank": 70,
      "domain": "readawrite.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 5497676.64596808,
      "curr_month_visits": 5497676.64596808,
      "unique_users": 961722.341938515,
      "pages_per_visit": 8.13209389736433
    },
    {
      "global_rank": 40814,
      "category_rank": 70,
      "domain": "iwastesomuchtime.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 2218233.84447858,
      "curr_month_visits": 2218233.84447858,
      "unique_users": 293840.66470614,
      "pages_per_visit": 2.43478967093439
    },
    {
      "global_rank": 81882,
      "category_rank": 70,
      "domain": "airbrush.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 654492.232362352,
      "curr_month_visits": 654492.232362352,
      "unique_users": 386768.140365785,
      "pages_per_visit": 2.25060703282303
    },
    {
      "global_rank": 9290,
      "category_rank": 71,
      "domain": "flibusta.su",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 7202603.64088247,
      "curr_month_visits": 7202603.64088247,
      "unique_users": 3145235.90028846,
      "pages_per_visit": 4.20108945122996
    },
    {
      "global_rank": 98127,
      "category_rank": 71,
      "domain": "kizdar.net",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 256383.319002096,
      "curr_month_visits": 256383.319002096,
      "unique_users": 133857.030381612,
      "pages_per_visit": 9.60570509372747
    },
    {
      "global_rank": 1491,
      "category_rank": 71,
      "domain": "tubitv.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 45579960.400443,
      "curr_month_visits": 45579960.400443,
      "unique_users": 12659477.2144773,
      "pages_per_visit": 3.49442562234289
    },
    {
      "global_rank": 2233,
      "category_rank": 71,
      "domain": "manhwabtt.cc",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 20198812.1982693,
      "curr_month_visits": 20198812.1982693,
      "unique_users": 930281.227209768,
      "pages_per_visit": 7.23420868829438
    },
    {
      "global_rank": 5102,
      "category_rank": 71,
      "domain": "closermag.fr",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 13789924.7830627,
      "curr_month_visits": 13789924.7830627,
      "unique_users": 5778181.75484235,
      "pages_per_visit": 2.37894930338202
    },
    {
      "global_rank": 7072,
      "category_rank": 71,
      "domain": "hifini.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 7998696.88158701,
      "curr_month_visits": 7998696.88158701,
      "unique_users": 1782105.74749193,
      "pages_per_visit": 5.13167254951319
    },
    {
      "global_rank": 42426,
      "category_rank": 71,
      "domain": "skoften.net",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1359965.89293322,
      "curr_month_visits": 1359965.89293322,
      "unique_users": 474115.448039563,
      "pages_per_visit": 4.0263999782578
    },
    {
      "global_rank": 86234,
      "category_rank": 71,
      "domain": "deserres.ca",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 431371.071609976,
      "curr_month_visits": 431371.071609976,
      "unique_users": 236977.674045431,
      "pages_per_visit": 5.87361844906834
    },
    {
      "global_rank": 1550,
      "category_rank": 72,
      "domain": "rezka.ag",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 56529164.8750503,
      "curr_month_visits": 56529164.8750503,
      "unique_users": 9521697.14759051,
      "pages_per_visit": 2.65701108964453
    },
    {
      "global_rank": 2265,
      "category_rank": 72,
      "domain": "komiku.id",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 17705993.4150439,
      "curr_month_visits": 17705993.4150439,
      "unique_users": 3699599.45075787,
      "pages_per_visit": 6.85739328512469
    },
    {
      "global_rank": 86457,
      "category_rank": 72,
      "domain": "deathtubes.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 326006.931500231,
      "curr_month_visits": 326006.931500231,
      "unique_users": 85902.8611180039,
      "pages_per_visit": 6.64888336611921
    },
    {
      "global_rank": 98194,
      "category_rank": 72,
      "domain": "stageagent.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 511806.266190038,
      "curr_month_visits": 511806.266190038,
      "unique_users": 320300.000751796,
      "pages_per_visit": 2.7956205778312
    },
    {
      "global_rank": 5174,
      "category_rank": 72,
      "domain": "dek-d.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 9947276.7485379,
      "curr_month_visits": 9947276.7485379,
      "unique_users": 2023206.36295055,
      "pages_per_visit": 7.00097042629025
    },
    {
      "global_rank": 42825,
      "category_rank": 72,
      "domain": "bokete.jp",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1591858.35577916,
      "curr_month_visits": 1591858.35577916,
      "unique_users": 656737.876140961,
      "pages_per_visit": 3.6517590007881
    },
    {
      "global_rank": 7195,
      "category_rank": 72,
      "domain": "azlyrics.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 10241115.2962555,
      "curr_month_visits": 10241115.2962555,
      "unique_users": 6161026.23930732,
      "pages_per_visit": 2.33760421442774
    },
    {
      "global_rank": 9332,
      "category_rank": 72,
      "domain": "metruyencv.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 6492491.81745894,
      "curr_month_visits": 6492491.81745894,
      "unique_users": 829013.906080948,
      "pages_per_visit": 9.47630371085667
    },
    {
      "global_rank": 43960,
      "category_rank": 73,
      "domain": "trinixy.ru",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1146316.75461499,
      "curr_month_visits": 1146316.75461499,
      "unique_users": 490956.718753052,
      "pages_per_visit": 3.84879437238786
    },
    {
      "global_rank": 9373,
      "category_rank": 73,
      "domain": "chrysanthemumgarden.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 7446977.62109051,
      "curr_month_visits": 7446977.62109051,
      "unique_users": 724542.066663622,
      "pages_per_visit": 5.71152348902295
    },
    {
      "global_rank": 7244,
      "category_rank": 73,
      "domain": "taylorswift.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 4744414.49191904,
      "curr_month_visits": 4744414.49191904,
      "unique_users": 2175378.36050864,
      "pages_per_visit": 3.87843961304918
    },
    {
      "global_rank": 1574,
      "category_rank": 73,
      "domain": "wiflix-catalogue.lol",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 66641045.2672467,
      "curr_month_visits": 66641045.2672467,
      "unique_users": 6557491.28586499,
      "pages_per_visit": 3.31164168247286
    },
    {
      "global_rank": 5180,
      "category_rank": 73,
      "domain": "tohotheater.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 13352448.1215401,
      "curr_month_visits": 13352448.1215401,
      "unique_users": 4920263.18818263,
      "pages_per_visit": 3.47959203071527
    },
    {
      "global_rank": 99139,
      "category_rank": 73,
      "domain": "wiener-staatsoper.at",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 419230.597408042,
      "curr_month_visits": 419230.597408042,
      "unique_users": 205549.179524042,
      "pages_per_visit": 4.97453440789541
    },
    {
      "global_rank": 2333,
      "category_rank": 73,
      "domain": "kaliscan.io",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 17474641.4741151,
      "curr_month_visits": 17474641.4741151,
      "unique_users": 1846755.78617596,
      "pages_per_visit": 10.4482904801246
    },
    {
      "global_rank": 88750,
      "category_rank": 73,
      "domain": "mrwallpaper.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 546819.953367786,
      "curr_month_visits": 546819.953367786,
      "unique_users": 340091.129914369,
      "pages_per_visit": 2.55816992690305
    },
    {
      "global_rank": 9405,
      "category_rank": 74,
      "domain": "ebookhunter.net",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 5273903.33520648,
      "curr_month_visits": 5273903.33520648,
      "unique_users": 838420.924894065,
      "pages_per_visit": 8.2041215646884
    },
    {
      "global_rank": 2360,
      "category_rank": 74,
      "domain": "hentai20.io",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 12974760.6266087,
      "curr_month_visits": 12974760.6266087,
      "unique_users": 2364283.69425998,
      "pages_per_visit": 12.41558080361
    },
    {
      "global_rank": 1606,
      "category_rank": 74,
      "domain": "gimy.ai",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 45176336.560585,
      "curr_month_visits": 45176336.560585,
      "unique_users": 4862873.55527858,
      "pages_per_visit": 3.84236526031846
    },
    {
      "global_rank": 89139,
      "category_rank": 74,
      "domain": "iduba.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 1376856.01859176,
      "curr_month_visits": 1376856.01859176,
      "unique_users": 116224.680330237,
      "pages_per_visit": 1.85501011917466
    },
    {
      "global_rank": 5388,
      "category_rank": 74,
      "domain": "mdpr.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 17093338.7408033,
      "curr_month_visits": 17093338.7408033,
      "unique_users": 10145631.1187231,
      "pages_per_visit": 1.75807013122358
    },
    {
      "global_rank": 45876,
      "category_rank": 74,
      "domain": "adultswim.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1574895.7453211,
      "curr_month_visits": 1574895.7453211,
      "unique_users": 863134.688366848,
      "pages_per_visit": 2.63453975014335
    },
    {
      "global_rank": 7306,
      "category_rank": 74,
      "domain": "cooperativa.cl",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 13311550.3923778,
      "curr_month_visits": 13311550.3923778,
      "unique_users": 2436526.77894835,
      "pages_per_visit": 2.4465907135484
    },
    {
      "global_rank": 100691,
      "category_rank": 74,
      "domain": "cosp.jp",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 398973.874684001,
      "curr_month_visits": 398973.874684001,
      "unique_users": 220694.574446662,
      "pages_per_visit": 6.51642876525616
    },
    {
      "global_rank": 101542,
      "category_rank": 75,
      "domain": "rsc.org.uk",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 496116.744663549,
      "curr_month_visits": 496116.744663549,
      "unique_users": 284037.177963632,
      "pages_per_visit": 2.88526644556373
    },
    {
      "global_rank": 91976,
      "category_rank": 75,
      "domain": "netfilmapp.pics",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 672601.35185914,
      "curr_month_visits": 672601.35185914,
      "unique_users": 287019.601974804,
      "pages_per_visit": 4.79450436334317
    },
    {
      "global_rank": 2366,
      "category_rank": 75,
      "domain": "fantia.jp",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 18808578.750556,
      "curr_month_visits": 18808578.750556,
      "unique_users": 4617776.29700686,
      "pages_per_visit": 6.46963820894423
    },
    {
      "global_rank": 5450,
      "category_rank": 75,
      "domain": "sonyentertainmentnetwork.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 8545385.93530426,
      "curr_month_visits": 8545385.93530426,
      "unique_users": 5196447.37737947,
      "pages_per_visit": 5.7972424294752
    },
    {
      "global_rank": 9428,
      "category_rank": 75,
      "domain": "readnovelfull.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 5185304.98946277,
      "curr_month_visits": 5185304.98946277,
      "unique_users": 405988.301898791,
      "pages_per_visit": 8.90547819496026
    },
    {
      "global_rank": 7330,
      "category_rank": 75,
      "domain": "y2meta.app",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 17998920.8214514,
      "curr_month_visits": 17998920.8214514,
      "unique_users": 5380286.22714365,
      "pages_per_visit": 3.98045411338543
    },
    {
      "global_rank": 1610,
      "category_rank": 75,
      "domain": "ntv.com.tr",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 33269359.4400127,
      "curr_month_visits": 33269359.4400127,
      "unique_users": 15463669.5958553,
      "pages_per_visit": 3.35566759962728
    },
    {
      "global_rank": 46013,
      "category_rank": 75,
      "domain": "animixplay.fun",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1607869.02985308,
      "curr_month_visits": 1607869.02985308,
      "unique_users": 423570.300237124,
      "pages_per_visit": 2.2315985996961
    },
    {
      "global_rank": 5488,
      "category_rank": 76,
      "domain": "onlinealarmkur.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 5514511.18820841,
      "curr_month_visits": 5514511.18820841,
      "unique_users": 1850410.23767007,
      "pages_per_visit": 16.5098168922335
    },
    {
      "global_rank": 49199,
      "category_rank": 76,
      "domain": "anime-portal.su",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1675432.42706423,
      "curr_month_visits": 1675432.42706423,
      "unique_users": 477988.305112953,
      "pages_per_visit": 1.70781466091652
    },
    {
      "global_rank": 96020,
      "category_rank": 76,
      "domain": "characterhub.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 681659.453367057,
      "curr_month_visits": 681659.453367057,
      "unique_users": 203787.100500967,
      "pages_per_visit": 3.90326862349168
    },
    {
      "global_rank": 1629,
      "category_rank": 76,
      "domain": "itv.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 34699581.8342058,
      "curr_month_visits": 34699581.8342058,
      "unique_users": 12837920.8096594,
      "pages_per_visit": 2.86602755892728
    },
    {
      "global_rank": 7464,
      "category_rank": 76,
      "domain": "rfi.fr",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 11590068.0348017,
      "curr_month_visits": 11590068.0348017,
      "unique_users": 5203316.13969199,
      "pages_per_visit": 1.85829823011023
    },
    {
      "global_rank": 2417,
      "category_rank": 76,
      "domain": "chapmanganelo.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 22349129.6583863,
      "curr_month_visits": 22349129.6583863,
      "unique_users": 2224338.05705495,
      "pages_per_visit": 7.33224368578453
    },
    {
      "global_rank": 103958,
      "category_rank": 76,
      "domain": "alternativateatral.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 565296.831216529,
      "curr_month_visits": 565296.831216529,
      "unique_users": 284475.934346501,
      "pages_per_visit": 2.81279690634422
    },
    {
      "global_rank": 9479,
      "category_rank": 76,
      "domain": "lightnovelworld.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 7722933.04834329,
      "curr_month_visits": 7722933.04834329,
      "unique_users": 915293.065263992,
      "pages_per_visit": 8.7500668720079
    },
    {
      "global_rank": 9530,
      "category_rank": 77,
      "domain": "hjwzw.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 6112025.80780574,
      "curr_month_visits": 6112025.80780574,
      "unique_users": 547988.189113578,
      "pages_per_visit": 10.0272050607135
    },
    {
      "global_rank": 49911,
      "category_rank": 77,
      "domain": "vkmag.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1437154.79804847,
      "curr_month_visits": 1437154.79804847,
      "unique_users": 320652.928460337,
      "pages_per_visit": 2.53926895107934
    },
    {
      "global_rank": 7481,
      "category_rank": 77,
      "domain": "pagalworld.com.sb",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 5753381.07366797,
      "curr_month_visits": 5753381.07366797,
      "unique_users": 3700876.75422991,
      "pages_per_visit": 4.64910203944071
    },
    {
      "global_rank": 96604,
      "category_rank": 77,
      "domain": "wallpapersafari.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 649789.139095771,
      "curr_month_visits": 649789.139095771,
      "unique_users": 443390.332150359,
      "pages_per_visit": 2.69178949163925
    },
    {
      "global_rank": 2425,
      "category_rank": 77,
      "domain": "tmohentai.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 7937142.00672095,
      "curr_month_visits": 7937142.00672095,
      "unique_users": 1468243.83137355,
      "pages_per_visit": 28.2326986625538
    },
    {
      "global_rank": 104209,
      "category_rank": 77,
      "domain": "comedycellar.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 536887.152220342,
      "curr_month_visits": 536887.152220342,
      "unique_users": 286985.017215795,
      "pages_per_visit": 2.77833314927876
    },
    {
      "global_rank": 5531,
      "category_rank": 77,
      "domain": "uquiz.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 6290995.41919633,
      "curr_month_visits": 6290995.41919633,
      "unique_users": 3220649.31717931,
      "pages_per_visit": 10.6317754289447
    },
    {
      "global_rank": 1645,
      "category_rank": 77,
      "domain": "filmaffinity.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 33338996.8638038,
      "curr_month_visits": 33338996.8638038,
      "unique_users": 10414574.2833111,
      "pages_per_visit": 4.01888050725825
    },
    {
      "global_rank": 7488,
      "category_rank": 78,
      "domain": "radios.com.br",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 12818744.6594403,
      "curr_month_visits": 12818744.6594403,
      "unique_users": 2884288.60105488,
      "pages_per_visit": 1.98068688550736
    },
    {
      "global_rank": 1668,
      "category_rank": 78,
      "domain": "tvn24.pl",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 43151892.3680925,
      "curr_month_visits": 43151892.3680925,
      "unique_users": 8082320.28297119,
      "pages_per_visit": 2.74639120607423
    },
    {
      "global_rank": 5572,
      "category_rank": 78,
      "domain": "frame.io",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 10989644.2242939,
      "curr_month_visits": 10989644.2242939,
      "unique_users": 2436747.20635171,
      "pages_per_visit": 5.33475751209683
    },
    {
      "global_rank": 96802,
      "category_rank": 78,
      "domain": "quickposes.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 551885.281040313,
      "curr_month_visits": 551885.281040313,
      "unique_users": 214096.375641651,
      "pages_per_visit": 2.27100263674673
    },
    {
      "global_rank": 2435,
      "category_rank": 78,
      "domain": "comic-walker.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 19686600.7811579,
      "curr_month_visits": 19686600.7811579,
      "unique_users": 3525768.83525601,
      "pages_per_visit": 6.11734059394775
    },
    {
      "global_rank": 50682,
      "category_rank": 78,
      "domain": "kakhiel.nl",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1264521.38539123,
      "curr_month_visits": 1264521.38539123,
      "unique_users": 409076.649800451,
      "pages_per_visit": 2.42278729606308
    },
    {
      "global_rank": 9552,
      "category_rank": 78,
      "domain": "elibrary.ru",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 4652513.20753123,
      "curr_month_visits": 4652513.20753123,
      "unique_users": 1709343.79746392,
      "pages_per_visit": 6.79494383585789
    },
    {
      "global_rank": 104738,
      "category_rank": 78,
      "domain": "playhousesquare.org",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 384718.805641744,
      "curr_month_visits": 384718.805641744,
      "unique_users": 224076.825070117,
      "pages_per_visit": 4.30109083854662
    },
    {
      "global_rank": 105797,
      "category_rank": 79,
      "domain": "devtiyatro.gov.tr",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 399314.246235486,
      "curr_month_visits": 399314.246235486,
      "unique_users": 227863.974727799,
      "pages_per_visit": 2.45761442371858
    },
    {
      "global_rank": 98551,
      "category_rank": 79,
      "domain": "renderosity.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 467749.860189772,
      "curr_month_visits": 467749.860189772,
      "unique_users": 158516.439137319,
      "pages_per_visit": 4.72967179101592
    },
    {
      "global_rank": 2506,
      "category_rank": 79,
      "domain": "mvlempyr.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 11598460.346916,
      "curr_month_visits": 11598460.346916,
      "unique_users": 1122143.24152217,
      "pages_per_visit": 11.85413581615
    },
    {
      "global_rank": 9563,
      "category_rank": 79,
      "domain": "wtr-lab.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 11292520.8320998,
      "curr_month_visits": 11292520.8320998,
      "unique_users": 634847.196508781,
      "pages_per_visit": 2.76863184309136
    },
    {
      "global_rank": 1744,
      "category_rank": 79,
      "domain": "staseraintv.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 25717444.908704,
      "curr_month_visits": 25717444.908704,
      "unique_users": 3168830.19620805,
      "pages_per_visit": 5.15148741150668
    },
    {
      "global_rank": 7526,
      "category_rank": 79,
      "domain": "eska.pl",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 10428509.2181174,
      "curr_month_visits": 10428509.2181174,
      "unique_users": 5748208.64604437,
      "pages_per_visit": 2.07927499257962
    },
    {
      "global_rank": 5839,
      "category_rank": 79,
      "domain": "digitalspy.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 14013902.8212213,
      "curr_month_visits": 14013902.8212213,
      "unique_users": 6492638.24055723,
      "pages_per_visit": 2.24483534031699
    },
    {
      "global_rank": 51889,
      "category_rank": 79,
      "domain": "boredbutton.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 630031.012288983,
      "curr_month_visits": 630031.012288983,
      "unique_users": 316341.149624363,
      "pages_per_visit": 8.32451409928345
    },
    {
      "global_rank": 106737,
      "category_rank": 80,
      "domain": "drphillipscenter.org",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 359704.00435421,
      "curr_month_visits": 359704.00435421,
      "unique_users": 197801.608063639,
      "pages_per_visit": 5.12663895306672
    },
    {
      "global_rank": 5873,
      "category_rank": 80,
      "domain": "afisha.ru",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 12628355.0431081,
      "curr_month_visits": 12628355.0431081,
      "unique_users": 8253134.41887885,
      "pages_per_visit": 2.04580724724396
    },
    {
      "global_rank": 98782,
      "category_rank": 80,
      "domain": "mainlinks.xyz",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 408221.815591265,
      "curr_month_visits": 408221.815591265,
      "unique_users": 125126.4104451,
      "pages_per_visit": 3.96010328449745
    },
    {
      "global_rank": 9597,
      "category_rank": 80,
      "domain": "allfreenovel.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 4746436.30338243,
      "curr_month_visits": 4746436.30338243,
      "unique_users": 827457.931893436,
      "pages_per_visit": 12.3546700534199
    },
    {
      "global_rank": 7700,
      "category_rank": 80,
      "domain": "top-radio.ru",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 13099751.7995218,
      "curr_month_visits": 13099751.7995218,
      "unique_users": 2111757.23265799,
      "pages_per_visit": 1.88390438775304
    },
    {
      "global_rank": 1755,
      "category_rank": 80,
      "domain": "filmix.fm",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 64039733.310385,
      "curr_month_visits": 64039733.310385,
      "unique_users": 6701793.04000449,
      "pages_per_visit": 2.74102627220885
    },
    {
      "global_rank": 2522,
      "category_rank": 80,
      "domain": "anitaku.pe",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 134105406.591901,
      "curr_month_visits": 134105406.591901,
      "unique_users": 6484703.61590694,
      "pages_per_visit": 3.93508680733428
    },
    {
      "global_rank": 52226,
      "category_rank": 80,
      "domain": "tusecreto.io",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 728617.733816427,
      "curr_month_visits": 728617.733816427,
      "unique_users": 230841.205163218,
      "pages_per_visit": 5.85985400952501
    },
    {
      "global_rank": 108882,
      "category_rank": 81,
      "domain": "narodni-divadlo.cz",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 293470.088293993,
      "curr_month_visits": 293470.088293993,
      "unique_users": 159525.53230377,
      "pages_per_visit": 6.02568630867202
    },
    {
      "global_rank": 101236,
      "category_rank": 81,
      "domain": "dailyartmagazine.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 600463.250298767,
      "curr_month_visits": 600463.250298767,
      "unique_users": 292810.542973385,
      "pages_per_visit": 2.01151584185924
    },
    {
      "global_rank": 52329,
      "category_rank": 81,
      "domain": "yarn.co",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 641896.526449622,
      "curr_month_visits": 641896.526449622,
      "unique_users": 375465.334829626,
      "pages_per_visit": 7.38116635601181
    },
    {
      "global_rank": 9758,
      "category_rank": 81,
      "domain": "audible.co.uk",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 6037936.81855036,
      "curr_month_visits": 6037936.81855036,
      "unique_users": 2588386.90176535,
      "pages_per_visit": 4.64760792195726
    },
    {
      "global_rank": 2536,
      "category_rank": 81,
      "domain": "bato.ing",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 10810522.2764992,
      "curr_month_visits": 10810522.2764992,
      "unique_users": 4340025.34751542,
      "pages_per_visit": 5.37734507986283
    },
    {
      "global_rank": 7720,
      "category_rank": 81,
      "domain": "mp3party.net",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 8653972.14239128,
      "curr_month_visits": 8653972.14239128,
      "unique_users": 3840741.60146597,
      "pages_per_visit": 3.07394677342109
    },
    {
      "global_rank": 5897,
      "category_rank": 81,
      "domain": "realsound.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 11659943.0528253,
      "curr_month_visits": 11659943.0528253,
      "unique_users": 7575175.75326704,
      "pages_per_visit": 2.49586860134258
    },
    {
      "global_rank": 1766,
      "category_rank": 81,
      "domain": "tv2.dk",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 39396747.850707,
      "curr_month_visits": 39396747.850707,
      "unique_users": 3402936.42749518,
      "pages_per_visit": 3.57545581711872
    },
    {
      "global_rank": 109234,
      "category_rank": 82,
      "domain": "kglteater.dk",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 266473.319346571,
      "curr_month_visits": 266473.319346571,
      "unique_users": 127995.038630191,
      "pages_per_visit": 7.47231926789151
    },
    {
      "global_rank": 102734,
      "category_rank": 82,
      "domain": "geant-beaux-arts.fr",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 387063.58238776,
      "curr_month_visits": 387063.58238776,
      "unique_users": 198775.004255035,
      "pages_per_visit": 4.94840442332692
    },
    {
      "global_rank": 5994,
      "category_rank": 82,
      "domain": "mult-fan.tv",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 13728327.5574766,
      "curr_month_visits": 13728327.5574766,
      "unique_users": 1738410.09674443,
      "pages_per_visit": 3.27435446795237
    },
    {
      "global_rank": 54310,
      "category_rank": 82,
      "domain": "koreus.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1292252.42734994,
      "curr_month_visits": 1292252.42734994,
      "unique_users": 432012.009005243,
      "pages_per_visit": 2.57302539079834
    },
    {
      "global_rank": 1796,
      "category_rank": 82,
      "domain": "soap2day.day",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 27935347.1680015,
      "curr_month_visits": 27935347.1680015,
      "unique_users": 6006656.07493699,
      "pages_per_visit": 5.79055127677252
    },
    {
      "global_rank": 2576,
      "category_rank": 82,
      "domain": "shueisha.co.jp",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 24845023.0459696,
      "curr_month_visits": 24845023.0459696,
      "unique_users": 9876452.53106221,
      "pages_per_visit": 2.94757279310318
    },
    {
      "global_rank": 7740,
      "category_rank": 82,
      "domain": "drivemusic.me",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 7445536.57438304,
      "curr_month_visits": 7445536.57438304,
      "unique_users": 3549425.97262938,
      "pages_per_visit": 4.52168071919026
    },
    {
      "global_rank": 9875,
      "category_rank": 82,
      "domain": "gutenberg.org",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 6896088.67198289,
      "curr_month_visits": 6896088.67198289,
      "unique_users": 3463798.28285386,
      "pages_per_visit": 3.34895036777461
    },
    {
      "global_rank": 9927,
      "category_rank": 83,
      "domain": "club-romance.ru",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 12471220.8744877,
      "curr_month_visits": 12471220.8744877,
      "unique_users": 1176239.60817725,
      "pages_per_visit": 2.10728197660298
    },
    {
      "global_rank": 1813,
      "category_rank": 83,
      "domain": "iqiyi.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 35258941.9074683,
      "curr_month_visits": 35258941.9074683,
      "unique_users": 9424693.04558475,
      "pages_per_visit": 3.94409306198108
    },
    {
      "global_rank": 6469,
      "category_rank": 83,
      "domain": "mantan-web.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 9395989.14161703,
      "curr_month_visits": 9395989.14161703,
      "unique_users": 5665153.38244612,
      "pages_per_visit": 3.00161407103805
    },
    {
      "global_rank": 2580,
      "category_rank": 83,
      "domain": "kunmanga.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 17526981.4362219,
      "curr_month_visits": 17526981.4362219,
      "unique_users": 3098074.33541242,
      "pages_per_visit": 6.98804994763718
    },
    {
      "global_rank": 107380,
      "category_rank": 83,
      "domain": "stickers.wiki",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 619891.880220242,
      "curr_month_visits": 619891.880220242,
      "unique_users": 357450.263061712,
      "pages_per_visit": 2.45449963306883
    },
    {
      "global_rank": 7950,
      "category_rank": 83,
      "domain": "radiopotok.ru",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 10278124.8274937,
      "curr_month_visits": 10278124.8274937,
      "unique_users": 1429321.42210336,
      "pages_per_visit": 2.62225786655784
    },
    {
      "global_rank": 109532,
      "category_rank": 83,
      "domain": "hamiltonmusical.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 461401.93698784,
      "curr_month_visits": 461401.93698784,
      "unique_users": 308092.594792248,
      "pages_per_visit": 2.5885397767077
    },
    {
      "global_rank": 55083,
      "category_rank": 83,
      "domain": "viedemerde.fr",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1680509.04452446,
      "curr_month_visits": 1680509.04452446,
      "unique_users": 199555.129835376,
      "pages_per_visit": 1.76364600294328
    },
    {
      "global_rank": 8030,
      "category_rank": 84,
      "domain": "kugou.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 6290930.660258,
      "curr_month_visits": 6290930.660258,
      "unique_users": 4116350.61082967,
      "pages_per_visit": 4.04016192943726
    },
    {
      "global_rank": 55943,
      "category_rank": 84,
      "domain": "mensby.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1416631.79331365,
      "curr_month_visits": 1416631.79331365,
      "unique_users": 762894.108378148,
      "pages_per_visit": 2.01266765267387
    },
    {
      "global_rank": 1819,
      "category_rank": 84,
      "domain": "fandango.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 17512110.1215646,
      "curr_month_visits": 17512110.1215646,
      "unique_users": 10394165.7919287,
      "pages_per_visit": 4.60531538663934
    },
    {
      "global_rank": 2669,
      "category_rank": 84,
      "domain": "toonclash.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 24108738.176707,
      "curr_month_visits": 24108738.176707,
      "unique_users": 1724306.82940032,
      "pages_per_visit": 8.37460271511363
    },
    {
      "global_rank": 6473,
      "category_rank": 84,
      "domain": "etix.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 11388806.5515619,
      "curr_month_visits": 11388806.5515619,
      "unique_users": 6129503.71322964,
      "pages_per_visit": 3.69790562475282
    },
    {
      "global_rank": 109617,
      "category_rank": 84,
      "domain": "profticket.ru",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 207329.295228328,
      "curr_month_visits": 207329.295228328,
      "unique_users": 112152.134010062,
      "pages_per_visit": 8.07842191697624
    },
    {
      "global_rank": 9991,
      "category_rank": 84,
      "domain": "twbook.cc",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 5823952.61691943,
      "curr_month_visits": 5823952.61691943,
      "unique_users": 552861.5845772,
      "pages_per_visit": 7.92579000331471
    },
    {
      "global_rank": 108462,
      "category_rank": 84,
      "domain": "sslt.xyz",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 250380.090247571,
      "curr_month_visits": 250380.090247571,
      "unique_users": 66091.6854951864,
      "pages_per_visit": 4.90919104624382
    },
    {
      "global_rank": 56324,
      "category_rank": 85,
      "domain": "memy.pl",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1251728.1789984,
      "curr_month_visits": 1251728.1789984,
      "unique_users": 221949.829706281,
      "pages_per_visit": 3.75832400668049
    },
    {
      "global_rank": 6476,
      "category_rank": 85,
      "domain": "vulture.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 13998799.3861064,
      "curr_month_visits": 13998799.3861064,
      "unique_users": 8751494.66847823,
      "pages_per_visit": 1.63335689211558
    },
    {
      "global_rank": 8041,
      "category_rank": 85,
      "domain": "music.amazon.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 8984155.91129958,
      "curr_month_visits": 8984155.91129958,
      "unique_users": 3366526.59037262,
      "pages_per_visit": 3.03492283097659
    },
    {
      "global_rank": 1830,
      "category_rank": 85,
      "domain": "moviesjoy.is",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 29281563.0225579,
      "curr_month_visits": 29281563.0225579,
      "unique_users": 3363364.08565423,
      "pages_per_visit": 5.79209768940783
    },
    {
      "global_rank": 108680,
      "category_rank": 85,
      "domain": "iamag.co",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 379485.402826395,
      "curr_month_visits": 379485.402826395,
      "unique_users": 178774.064247071,
      "pages_per_visit": 6.09290499196821
    },
    {
      "global_rank": 109820,
      "category_rank": 85,
      "domain": "centralcasting.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 600493.366640388,
      "curr_month_visits": 600493.366640388,
      "unique_users": 133079.980919804,
      "pages_per_visit": 2.84959287674389
    },
    {
      "global_rank": 10248,
      "category_rank": 85,
      "domain": "litmir.club",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 5983355.84324945,
      "curr_month_visits": 5983355.84324945,
      "unique_users": 1402269.08845442,
      "pages_per_visit": 6.62112380981467
    },
    {
      "global_rank": 2679,
      "category_rank": 85,
      "domain": "kiryuu.org",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 19350569.2004238,
      "curr_month_visits": 19350569.2004238,
      "unique_users": 1867795.94524601,
      "pages_per_visit": 9.43162156431898
    },
    {
      "global_rank": 1855,
      "category_rank": 86,
      "domain": "vrt.be",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 36081513.0183458,
      "curr_month_visits": 36081513.0183458,
      "unique_users": 6201921.56490289,
      "pages_per_visit": 3.07418332034881
    },
    {
      "global_rank": 57257,
      "category_rank": 86,
      "domain": "documentingreality.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 717238.806086742,
      "curr_month_visits": 717238.806086742,
      "unique_users": 383597.353247237,
      "pages_per_visit": 6.57551669648714
    },
    {
      "global_rank": 6771,
      "category_rank": 86,
      "domain": "plotek.pl",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 12981104.3150029,
      "curr_month_visits": 12981104.3150029,
      "unique_users": 2989925.45616719,
      "pages_per_visit": 1.75265728833381
    },
    {
      "global_rank": 2721,
      "category_rank": 86,
      "domain": "xbato.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 17771866.5042641,
      "curr_month_visits": 17771866.5042641,
      "unique_users": 3190333.35103887,
      "pages_per_visit": 11.077421241384
    },
    {
      "global_rank": 10413,
      "category_rank": 86,
      "domain": "poetryfoundation.org",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 7380190.08289179,
      "curr_month_visits": 7380190.08289179,
      "unique_users": 3848881.63087703,
      "pages_per_visit": 2.41850298657656
    },
    {
      "global_rank": 8470,
      "category_rank": 86,
      "domain": "statsforspotify.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 6186468.85064086,
      "curr_month_visits": 6186468.85064086,
      "unique_users": 2286623.27551608,
      "pages_per_visit": 4.32563499497266
    },
    {
      "global_rank": 110783,
      "category_rank": 86,
      "domain": "musicboard.app",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 293849.142594234,
      "curr_month_visits": 293849.142594234,
      "unique_users": 126178.286539281,
      "pages_per_visit": 6.29249470027162
    },
    {
      "global_rank": 109909,
      "category_rank": 86,
      "domain": "sportmaster.kz",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 285458.593640585,
      "curr_month_visits": 285458.593640585,
      "unique_users": 132546.710058048,
      "pages_per_visit": 5.39640200133608
    },
    {
      "global_rank": 8593,
      "category_rank": 87,
      "domain": "ondacero.es",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 9597965.80604866,
      "curr_month_visits": 9597965.80604866,
      "unique_users": 4528745.97921079,
      "pages_per_visit": 1.57375632004478
    },
    {
      "global_rank": 109993,
      "category_rank": 87,
      "domain": "nycballet.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 323997.671097145,
      "curr_month_visits": 323997.671097145,
      "unique_users": 186238.164517076,
      "pages_per_visit": 6.21318893993025
    },
    {
      "global_rank": 57829,
      "category_rank": 87,
      "domain": "connectionsplus.io",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 637194.051808358,
      "curr_month_visits": 637194.051808358,
      "unique_users": 207618.508885747,
      "pages_per_visit": 4.16059060389093
    },
    {
      "global_rank": 111922,
      "category_rank": 87,
      "domain": "finchcare.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 282618.438288368,
      "curr_month_visits": 282618.438288368,
      "unique_users": 192481.340726912,
      "pages_per_visit": 1.93065114967597
    },
    {
      "global_rank": 1871,
      "category_rank": 87,
      "domain": "123-hd.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 31135651.4335726,
      "curr_month_visits": 31135651.4335726,
      "unique_users": 6084634.32588171,
      "pages_per_visit": 4.13361973183259
    },
    {
      "global_rank": 10477,
      "category_rank": 87,
      "domain": "rulit.me",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 4885313.47801035,
      "curr_month_visits": 4885313.47801035,
      "unique_users": 1867098.384948,
      "pages_per_visit": 7.280345208571
    },
    {
      "global_rank": 2737,
      "category_rank": 87,
      "domain": "mangaku.lat",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 26335194.6438559,
      "curr_month_visits": 26335194.6438559,
      "unique_users": 2459755.60311536,
      "pages_per_visit": 4.29814701327136
    },
    {
      "global_rank": 7084,
      "category_rank": 87,
      "domain": "pinzuba.news",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 12189473.7678171,
      "curr_month_visits": 12189473.7678171,
      "unique_users": 7700629.57997042,
      "pages_per_visit": 1.73296498356646
    },
    {
      "global_rank": 112371,
      "category_rank": 88,
      "domain": "hemenindir.to",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 365749.763377469,
      "curr_month_visits": 365749.763377469,
      "unique_users": 247950.855416327,
      "pages_per_visit": 4.74494644560849
    },
    {
      "global_rank": 2794,
      "category_rank": 88,
      "domain": "miruro.tv",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 21375127.3428352,
      "curr_month_visits": 21375127.3428352,
      "unique_users": 2029928.85202219,
      "pages_per_visit": 3.54576216825243
    },
    {
      "global_rank": 8607,
      "category_rank": 88,
      "domain": "mp3juice.blog",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 5249999.22928811,
      "curr_month_visits": 5249999.22928811,
      "unique_users": 1571254.42340124,
      "pages_per_visit": 4.71810414933134
    },
    {
      "global_rank": 58168,
      "category_rank": 88,
      "domain": "naointendo.com.br",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1593977.6829175,
      "curr_month_visits": 1593977.6829175,
      "unique_users": 188959.657216149,
      "pages_per_visit": 1.88724308109103
    },
    {
      "global_rank": 10482,
      "category_rank": 88,
      "domain": "spcs.bio",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 5045204.75377645,
      "curr_month_visits": 5045204.75377645,
      "unique_users": 576140.312750037,
      "pages_per_visit": 6.63138835429073
    },
    {
      "global_rank": 7105,
      "category_rank": 88,
      "domain": "gulte.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 9545765.46547075,
      "curr_month_visits": 9545765.46547075,
      "unique_users": 1911570.05343824,
      "pages_per_visit": 4.20556921169404
    },
    {
      "global_rank": 1914,
      "category_rank": 88,
      "domain": "hdrezka.ag",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 29764930.0750411,
      "curr_month_visits": 29764930.0750411,
      "unique_users": 8211640.10038727,
      "pages_per_visit": 2.33991623342348
    },
    {
      "global_rank": 110480,
      "category_rank": 88,
      "domain": "denvercenter.org",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 288371.790703185,
      "curr_month_visits": 288371.790703185,
      "unique_users": 173861.737970281,
      "pages_per_visit": 6.14279065178071
    },
    {
      "global_rank": 58608,
      "category_rank": 89,
      "domain": "ispovesti.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1297302.74815392,
      "curr_month_visits": 1297302.74815392,
      "unique_users": 193363.240046713,
      "pages_per_visit": 2.82701756821118
    },
    {
      "global_rank": 8633,
      "category_rank": 89,
      "domain": "ufret.jp",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 6529043.11849609,
      "curr_month_visits": 6529043.11849609,
      "unique_users": 1327858.662813,
      "pages_per_visit": 5.3081645393861
    },
    {
      "global_rank": 110883,
      "category_rank": 89,
      "domain": "corich.jp",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 365974.523462669,
      "curr_month_visits": 365974.523462669,
      "unique_users": 169978.93962923,
      "pages_per_visit": 4.35071641548779
    },
    {
      "global_rank": 2828,
      "category_rank": 89,
      "domain": "manhwaweb.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 12850456.9361388,
      "curr_month_visits": 12850456.9361388,
      "unique_users": 1976541.15217581,
      "pages_per_visit": 8.23088967503462
    },
    {
      "global_rank": 10499,
      "category_rank": 89,
      "domain": "bookmeter.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 7209993.82041839,
      "curr_month_visits": 7209993.82041839,
      "unique_users": 3551576.98479764,
      "pages_per_visit": 2.71455551741708
    },
    {
      "global_rank": 7161,
      "category_rank": 89,
      "domain": "imgflip.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 8613043.69570447,
      "curr_month_visits": 8613043.69570447,
      "unique_users": 5038192.71338442,
      "pages_per_visit": 3.35278870282369
    },
    {
      "global_rank": 113102,
      "category_rank": 89,
      "domain": "ruplans.ru",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 260519.413021199,
      "curr_month_visits": 260519.413021199,
      "unique_users": 130210.9713243,
      "pages_per_visit": 7.55488608956021
    },
    {
      "global_rank": 1916,
      "category_rank": 89,
      "domain": "rtl.de",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 37863539.4211438,
      "curr_month_visits": 37863539.4211438,
      "unique_users": 13698809.6516581,
      "pages_per_visit": 2.70937812174704
    },
    {
      "global_rank": 110915,
      "category_rank": 90,
      "domain": "bileter.ru",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 226769.699658187,
      "curr_month_visits": 226769.699658187,
      "unique_users": 112031.246386451,
      "pages_per_visit": 4.87584011767149
    },
    {
      "global_rank": 7254,
      "category_rank": 90,
      "domain": "enorme.tv",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 4914607.16966252,
      "curr_month_visits": 4914607.16966252,
      "unique_users": 745864.811822721,
      "pages_per_visit": 4.27272382113776
    },
    {
      "global_rank": 115159,
      "category_rank": 90,
      "domain": "posemy.art",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 464843.5713135,
      "curr_month_visits": 464843.5713135,
      "unique_users": 234264.492717483,
      "pages_per_visit": 2.54767750523545
    },
    {
      "global_rank": 1923,
      "category_rank": 90,
      "domain": "dr.dk",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 36429548.2721285,
      "curr_month_visits": 36429548.2721285,
      "unique_users": 3719471.45245279,
      "pages_per_visit": 3.19620203230474
    },
    {
      "global_rank": 10816,
      "category_rank": 90,
      "domain": "xxpiaotian.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 4375867.17946691,
      "curr_month_visits": 4375867.17946691,
      "unique_users": 219629.777500797,
      "pages_per_visit": 15.2928567331208
    },
    {
      "global_rank": 8673,
      "category_rank": 90,
      "domain": "spotifydown.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 8526361.91072282,
      "curr_month_visits": 8526361.91072282,
      "unique_users": 2473748.73774799,
      "pages_per_visit": 3.8591883046136
    },
    {
      "global_rank": 59311,
      "category_rank": 90,
      "domain": "piekielni.pl",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1470660.95220941,
      "curr_month_visits": 1470660.95220941,
      "unique_users": 138669.272521649,
      "pages_per_visit": 2.6097979612059
    },
    {
      "global_rank": 2837,
      "category_rank": 90,
      "domain": "booklive.jp",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 15265780.1814059,
      "curr_month_visits": 15265780.1814059,
      "unique_users": 5168049.58996982,
      "pages_per_visit": 7.49984861773062
    },
    {
      "global_rank": 1934,
      "category_rank": 91,
      "domain": "kino-teatr.ru",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 29123776.0498264,
      "curr_month_visits": 29123776.0498264,
      "unique_users": 14044657.8253444,
      "pages_per_visit": 3.0891715198206
    },
    {
      "global_rank": 8732,
      "category_rank": 91,
      "domain": "y2meta.is",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 8558683.84251504,
      "curr_month_visits": 8558683.84251504,
      "unique_users": 3706467.20244303,
      "pages_per_visit": 4.2020192591181
    },
    {
      "global_rank": 114161,
      "category_rank": 91,
      "domain": "encora.it",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 140152.578552699,
      "curr_month_visits": 140152.578552699,
      "unique_users": 9589.62027840099,
      "pages_per_visit": 77.1041115588973
    },
    {
      "global_rank": 7277,
      "category_rank": 91,
      "domain": "allkpop.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 13046240.057231,
      "curr_month_visits": 13046240.057231,
      "unique_users": 2205832.0455554,
      "pages_per_visit": 2.44031284328893
    },
    {
      "global_rank": 10965,
      "category_rank": 91,
      "domain": "novel543.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 5335147.14934012,
      "curr_month_visits": 5335147.14934012,
      "unique_users": 1187952.26719506,
      "pages_per_visit": 7.31260573823933
    },
    {
      "global_rank": 60380,
      "category_rank": 91,
      "domain": "lelum.pl",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1334206.02343149,
      "curr_month_visits": 1334206.02343149,
      "unique_users": 567037.356772015,
      "pages_per_visit": 1.391000774519
    },
    {
      "global_rank": 117527,
      "category_rank": 91,
      "domain": "mosfilmgold.ru",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 832726.325969457,
      "curr_month_visits": 832726.325969457,
      "unique_users": 150115.490537697,
      "pages_per_visit": 1.39328313743137
    },
    {
      "global_rank": 2863,
      "category_rank": 91,
      "domain": "m440.in",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 11768565.9489254,
      "curr_month_visits": 11768565.9489254,
      "unique_users": 1317651.05683676,
      "pages_per_visit": 8.35329562286054
    },
    {
      "global_rank": 2947,
      "category_rank": 92,
      "domain": "gogoanimes.org",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 21103604.980139,
      "curr_month_visits": 21103604.980139,
      "unique_users": 3487052.21574685,
      "pages_per_visit": 5.61067389636401
    },
    {
      "global_rank": 114538,
      "category_rank": 92,
      "domain": "cinemamedley.ru",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 519791.32324646,
      "curr_month_visits": 519791.32324646,
      "unique_users": 394744.955975886,
      "pages_per_visit": 1.4383388226841
    },
    {
      "global_rank": 60710,
      "category_rank": 92,
      "domain": "spreee.pro",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 785400.701548344,
      "curr_month_visits": 785400.701548344,
      "unique_users": 448688.476202342,
      "pages_per_visit": 3.534317423473
    },
    {
      "global_rank": 1952,
      "category_rank": 92,
      "domain": "svt.se",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 28649487.1026648,
      "curr_month_visits": 28649487.1026648,
      "unique_users": 4211586.95604071,
      "pages_per_visit": 4.5517643020522
    },
    {
      "global_rank": 11129,
      "category_rank": 92,
      "domain": "flibusta.is",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 4764715.70540974,
      "curr_month_visits": 4764715.70540974,
      "unique_users": 772568.234733065,
      "pages_per_visit": 8.41154908314553
    },
    {
      "global_rank": 8927,
      "category_rank": 92,
      "domain": "artlist.io",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 6515074.93342959,
      "curr_month_visits": 6515074.93342959,
      "unique_users": 2636443.9031552,
      "pages_per_visit": 5.08661373153451
    },
    {
      "global_rank": 118437,
      "category_rank": 92,
      "domain": "characterdesignreferences.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 501062.741364278,
      "curr_month_visits": 501062.741364278,
      "unique_users": 240794.81272001,
      "pages_per_visit": 2.09624695430828
    },
    {
      "global_rank": 7374,
      "category_rank": 92,
      "domain": "ldblog.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 9847627.55816139,
      "curr_month_visits": 9847627.55816139,
      "unique_users": 1944178.04080471,
      "pages_per_visit": 3.64771156855439
    },
    {
      "global_rank": 11455,
      "category_rank": 93,
      "domain": "bookfrom.net",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 5382245.54957885,
      "curr_month_visits": 5382245.54957885,
      "unique_users": 669583.399530477,
      "pages_per_visit": 6.7935564600888
    },
    {
      "global_rank": 2957,
      "category_rank": 93,
      "domain": "mangakakalot.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 21535269.4200021,
      "curr_month_visits": 21535269.4200021,
      "unique_users": 2586926.54115127,
      "pages_per_visit": 5.34044594633758
    },
    {
      "global_rank": 119356,
      "category_rank": 93,
      "domain": "theoatmeal.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 367727.124440112,
      "curr_month_visits": 367727.124440112,
      "unique_users": 212528.271952248,
      "pages_per_visit": 3.0364875159688
    },
    {
      "global_rank": 7407,
      "category_rank": 93,
      "domain": "dorama.land",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 11388831.4394964,
      "curr_month_visits": 11388831.4394964,
      "unique_users": 1594442.450034,
      "pages_per_visit": 2.14892614990501
    },
    {
      "global_rank": 1990,
      "category_rank": 93,
      "domain": "ndr.de",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 37633250.2367555,
      "curr_month_visits": 37633250.2367555,
      "unique_users": 13883845.5227309,
      "pages_per_visit": 1.9580893857195
    },
    {
      "global_rank": 8928,
      "category_rank": 93,
      "domain": "metal-archives.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 5450940.83436922,
      "curr_month_visits": 5450940.83436922,
      "unique_users": 1312576.44032678,
      "pages_per_visit": 8.07969356387399
    },
    {
      "global_rank": 115713,
      "category_rank": 93,
      "domain": "artforintrovert.ru",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 445342.778581732,
      "curr_month_visits": 445342.778581732,
      "unique_users": 228914.057615269,
      "pages_per_visit": 2.61253868346806
    },
    {
      "global_rank": 61569,
      "category_rank": 93,
      "domain": "inpearls.ru",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1096522.69421219,
      "curr_month_visits": 1096522.69421219,
      "unique_users": 649894.788332738,
      "pages_per_visit": 1.57644550225579
    },
    {
      "global_rank": 119469,
      "category_rank": 94,
      "domain": "soyhijadelaluna.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 312325.672904899,
      "curr_month_visits": 312325.672904899,
      "unique_users": 164134.823920026,
      "pages_per_visit": 1.66375592367496
    },
    {
      "global_rank": 8936,
      "category_rank": 94,
      "domain": "creator-spring.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 9459957.18997235,
      "curr_month_visits": 9459957.18997235,
      "unique_users": 6031414.77705457,
      "pages_per_visit": 1.84596434216778
    },
    {
      "global_rank": 2959,
      "category_rank": 94,
      "domain": "snowmtl.ru",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 13427794.6050822,
      "curr_month_visits": 13427794.6050822,
      "unique_users": 1939215.09640089,
      "pages_per_visit": 9.75262340719367
    },
    {
      "global_rank": 7424,
      "category_rank": 94,
      "domain": "anodana.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 8723885.35172613,
      "curr_month_visits": 8723885.35172613,
      "unique_users": 1222300.29041307,
      "pages_per_visit": 5.82558016038892
    },
    {
      "global_rank": 62718,
      "category_rank": 94,
      "domain": "cyclowiki.org",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1240608.03837431,
      "curr_month_visits": 1240608.03837431,
      "unique_users": 918331.65704064,
      "pages_per_visit": 1.5550689050764
    },
    {
      "global_rank": 11585,
      "category_rank": 94,
      "domain": "lectulandia.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 4551378.57554698,
      "curr_month_visits": 4551378.57554698,
      "unique_users": 1909675.00028148,
      "pages_per_visit": 5.4557736570041
    },
    {
      "global_rank": 116028,
      "category_rank": 94,
      "domain": "seigura.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 332943.069076251,
      "curr_month_visits": 332943.069076251,
      "unique_users": 154160.566119558,
      "pages_per_visit": 2.58084654130079
    },
    {
      "global_rank": 2000,
      "category_rank": 94,
      "domain": "rtve.es",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 33914133.2441674,
      "curr_month_visits": 33914133.2441674,
      "unique_users": 11724288.5147458,
      "pages_per_visit": 2.60630190499702
    },
    {
      "global_rank": 2004,
      "category_rank": 95,
      "domain": "lordfilm15.ru",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 16959376.5964362,
      "curr_month_visits": 16959376.5964362,
      "unique_users": 1894268.45639244,
      "pages_per_visit": 2.81769182447873
    },
    {
      "global_rank": 63082,
      "category_rank": 95,
      "domain": "idaprikol.ru",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1105718.01320039,
      "curr_month_visits": 1105718.01320039,
      "unique_users": 397349.098932558,
      "pages_per_visit": 2.57377964720953
    },
    {
      "global_rank": 11913,
      "category_rank": 95,
      "domain": "vymanga.net",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 4567305.37649181,
      "curr_month_visits": 4567305.37649181,
      "unique_users": 1055671.86970604,
      "pages_per_visit": 7.80688350949997
    },
    {
      "global_rank": 7440,
      "category_rank": 95,
      "domain": "nunflix.org",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 4311496.8915422,
      "curr_month_visits": 4311496.8915422,
      "unique_users": 1207278.23475965,
      "pages_per_visit": 4.33136252432041
    },
    {
      "global_rank": 117860,
      "category_rank": 95,
      "domain": "placedesarts.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 329073.348441219,
      "curr_month_visits": 329073.348441219,
      "unique_users": 196472.65958292,
      "pages_per_visit": 3.34139234218421
    },
    {
      "global_rank": 2968,
      "category_rank": 95,
      "domain": "aniwave.se",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 29358603.0132423,
      "curr_month_visits": 29358603.0132423,
      "unique_users": 5384323.88121354,
      "pages_per_visit": 4.10850682525294
    },
    {
      "global_rank": 8941,
      "category_rank": 95,
      "domain": "genesishd.tv",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 2777571.80926894,
      "curr_month_visits": 2777571.80926894,
      "unique_users": 522333.773697071,
      "pages_per_visit": 4.60624046188617
    },
    {
      "global_rank": 120070,
      "category_rank": 95,
      "domain": "movie-screencaps.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 175710.109755594,
      "curr_month_visits": 175710.109755594,
      "unique_users": 79000.2268554733,
      "pages_per_visit": 15.670410851866
    },
    {
      "global_rank": 2037,
      "category_rank": 96,
      "domain": "jma.go.jp",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 38727751.9765918,
      "curr_month_visits": 38727751.9765918,
      "unique_users": 7450176.95554902,
      "pages_per_visit": 3.85306034326916
    },
    {
      "global_rank": 118189,
      "category_rank": 96,
      "domain": "whenwewereyoungfestival.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 592752.362702743,
      "curr_month_visits": 592752.362702743,
      "unique_users": 336732.041570457,
      "pages_per_visit": 2.39077747873099
    },
    {
      "global_rank": 2992,
      "category_rank": 96,
      "domain": "shonenjumpplus.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 20358306.8247154,
      "curr_month_visits": 20358306.8247154,
      "unique_users": 3506382.80746025,
      "pages_per_visit": 4.10469304249753
    },
    {
      "global_rank": 126030,
      "category_rank": 96,
      "domain": "xnjxnz.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 374719.7308952,
      "curr_month_visits": 374719.7308952,
      "unique_users": 238480.444832207,
      "pages_per_visit": 2.70215915585312
    },
    {
      "global_rank": 11940,
      "category_rank": 96,
      "domain": "uuks5.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 3777522.61508665,
      "curr_month_visits": 3777522.61508665,
      "unique_users": 529165.568406732,
      "pages_per_visit": 13.5445059668002
    },
    {
      "global_rank": 7515,
      "category_rank": 96,
      "domain": "spacebattles.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 10035363.3255921,
      "curr_month_visits": 10035363.3255921,
      "unique_users": 780975.306633118,
      "pages_per_visit": 5.70881961390184
    },
    {
      "global_rank": 8952,
      "category_rank": 96,
      "domain": "djpunjab.is",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 8653866.69841566,
      "curr_month_visits": 8653866.69841566,
      "unique_users": 4936572.9024421,
      "pages_per_visit": 3.79122448185831
    },
    {
      "global_rank": 63569,
      "category_rank": 96,
      "domain": "lostmediawiki.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 899203.667043302,
      "curr_month_visits": 899203.667043302,
      "unique_users": 458104.758694736,
      "pages_per_visit": 3.39146885640074
    },
    {
      "global_rank": 3054,
      "category_rank": 97,
      "domain": "rizzfables.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 27502810.7791359,
      "curr_month_visits": 27502810.7791359,
      "unique_users": 1608463.85989633,
      "pages_per_visit": 3.10768182943585
    },
    {
      "global_rank": 12064,
      "category_rank": 97,
      "domain": "scribblehub.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 5137638.44532349,
      "curr_month_visits": 5137638.44532349,
      "unique_users": 733210.43103838,
      "pages_per_visit": 7.79791481841224
    },
    {
      "global_rank": 127614,
      "category_rank": 97,
      "domain": "render.ru",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 419313.791185719,
      "curr_month_visits": 419313.791185719,
      "unique_users": 192108.212234154,
      "pages_per_visit": 2.43773791716053
    },
    {
      "global_rank": 118597,
      "category_rank": 97,
      "domain": "getacceptd.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 273258.166001752,
      "curr_month_visits": 273258.166001752,
      "unique_users": 98203.6912317597,
      "pages_per_visit": 5.31927066593892
    },
    {
      "global_rank": 63691,
      "category_rank": 97,
      "domain": "izismile.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 706367.311444514,
      "curr_month_visits": 706367.311444514,
      "unique_users": 152909.081277229,
      "pages_per_visit": 6.95218580189288
    },
    {
      "global_rank": 8955,
      "category_rank": 97,
      "domain": "box.net",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 11303242.0405169,
      "curr_month_visits": 11303242.0405169,
      "unique_users": 2023128.15856606,
      "pages_per_visit": 1.59475912501996
    },
    {
      "global_rank": 7586,
      "category_rank": 97,
      "domain": "ximalaya.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 10506815.6279708,
      "curr_month_visits": 10506815.6279708,
      "unique_users": 6596008.94905484,
      "pages_per_visit": 2.16281522020901
    },
    {
      "global_rank": 2055,
      "category_rank": 97,
      "domain": "pelisplushd.bz",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 39603278.1277803,
      "curr_month_visits": 39603278.1277803,
      "unique_users": 1899615.48174467,
      "pages_per_visit": 3.42499905251246
    },
    {
      "global_rank": 129334,
      "category_rank": 98,
      "domain": "theartstory.org",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 432645.658908035,
      "curr_month_visits": 432645.658908035,
      "unique_users": 239398.444420719,
      "pages_per_visit": 2.17880397090715
    },
    {
      "global_rank": 7741,
      "category_rank": 98,
      "domain": "toranoana.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 8327012.80745788,
      "curr_month_visits": 8327012.80745788,
      "unique_users": 2094627.23198703,
      "pages_per_visit": 4.627303493328
    },
    {
      "global_rank": 12100,
      "category_rank": 98,
      "domain": "hetushu.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 3334165.58729744,
      "curr_month_visits": 3334165.58729744,
      "unique_users": 523353.2092371,
      "pages_per_visit": 14.3004813958995
    },
    {
      "global_rank": 63966,
      "category_rank": 98,
      "domain": "yts.fo",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 669846.946933706,
      "curr_month_visits": 669846.946933706,
      "unique_users": 290226.211235592,
      "pages_per_visit": 3.95819724329317
    },
    {
      "global_rank": 982,
      "category_rank": 98,
      "domain": "rumble.com",
      "category": "Arts_and_Entertainment",
      "avg_month_visits": 60221620.9557605,
      "curr_month_visits": 60221620.9557605,
      "unique_users": 14462348.6921577,
      "pages_per_visit": 3.3770674900959
    },
    {
      "global_rank": 118744,
      "category_rank": 98,
      "domain": "kudamoscow.ru",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 490633.808190487,
      "curr_month_visits": 490633.808190487,
      "unique_users": 322818.430752889,
      "pages_per_visit": 2.609221653922
    },
    {
      "global_rank": 3090,
      "category_rank": 98,
      "domain": "mangakoma.onl",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 11853049.6625048,
      "curr_month_visits": 11853049.6625048,
      "unique_users": 1091930.14104345,
      "pages_per_visit": 10.6871669504949
    },
    {
      "global_rank": 2078,
      "category_rank": 98,
      "domain": "n1info.rs",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 31029206.7602269,
      "curr_month_visits": 31029206.7602269,
      "unique_users": 11336184.3855487,
      "pages_per_visit": 2.33428105535808
    },
    {
      "global_rank": 9031,
      "category_rank": 98,
      "domain": "chordify.net",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 7807059.60323645,
      "curr_month_visits": 7807059.60323645,
      "unique_users": 4529525.98142865,
      "pages_per_visit": 2.53954020611417
    },
    {
      "global_rank": 118753,
      "category_rank": 99,
      "domain": "tn-cloud.ru",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 487447.263527549,
      "curr_month_visits": 487447.263527549,
      "unique_users": 244240.633211728,
      "pages_per_visit": 2.30307615562036
    },
    {
      "global_rank": 12481,
      "category_rank": 99,
      "domain": "yaoilib.net",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 1742864.18134113,
      "curr_month_visits": 1742864.18134113,
      "unique_users": 321091.74744408,
      "pages_per_visit": 7.0882698980384
    },
    {
      "global_rank": 2093,
      "category_rank": 99,
      "domain": "goojara.to",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 29799029.2880993,
      "curr_month_visits": 29799029.2880993,
      "unique_users": 4588968.75676753,
      "pages_per_visit": 5.70694280523151
    },
    {
      "global_rank": 7803,
      "category_rank": 99,
      "domain": "ranker.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 11761146.2371255,
      "curr_month_visits": 11761146.2371255,
      "unique_users": 7244367.01560071,
      "pages_per_visit": 1.87475552766811
    },
    {
      "global_rank": 129853,
      "category_rank": 99,
      "domain": "21-draw.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 427816.226744593,
      "curr_month_visits": 427816.226744593,
      "unique_users": 185883.692671826,
      "pages_per_visit": 2.51836679977779
    },
    {
      "global_rank": 64910,
      "category_rank": 99,
      "domain": "pressa.tv",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 788480.502424632,
      "curr_month_visits": 788480.502424632,
      "unique_users": 290011.139422122,
      "pages_per_visit": 3.29294952341797
    },
    {
      "global_rank": 9220,
      "category_rank": 99,
      "domain": "caracol.com.co",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 9671980.32380023,
      "curr_month_visits": 9671980.32380023,
      "unique_users": 4231184.51529847,
      "pages_per_visit": 2.10583912055673
    },
    {
      "global_rank": 3091,
      "category_rank": 99,
      "domain": "readcomiconline.li",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 14517639.914344,
      "curr_month_visits": 14517639.914344,
      "unique_users": 2299660.14034319,
      "pages_per_visit": 9.12696129909322
    },
    {
      "global_rank": 130777,
      "category_rank": 100,
      "domain": "flim.ai",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 275691.361705602,
      "curr_month_visits": 275691.361705602,
      "unique_users": 115395.535331792,
      "pages_per_visit": 9.20707925327836
    },
    {
      "global_rank": 9231,
      "category_rank": 100,
      "domain": "distrokid.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 6641357.72872465,
      "curr_month_visits": 6641357.72872465,
      "unique_users": 1977182.49746856,
      "pages_per_visit": 4.40701313356116
    },
    {
      "global_rank": 65147,
      "category_rank": 100,
      "domain": "sikkom.nl",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1171091.22415822,
      "curr_month_visits": 1171091.22415822,
      "unique_users": 332584.4327298,
      "pages_per_visit": 1.96311109888829
    },
    {
      "global_rank": 118776,
      "category_rank": 100,
      "domain": "vakhtangov.ru",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 316406.150631976,
      "curr_month_visits": 316406.150631976,
      "unique_users": 169440.462176252,
      "pages_per_visit": 5.1242872281479
    },
    {
      "global_rank": 12624,
      "category_rank": 100,
      "domain": "interpals.net",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 3461254.18352406,
      "curr_month_visits": 3461254.18352406,
      "unique_users": 431180.942106201,
      "pages_per_visit": 15.0042481034895
    },
    {
      "global_rank": 7908,
      "category_rank": 100,
      "domain": "animension.to",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 7225016.03103091,
      "curr_month_visits": 7225016.03103091,
      "unique_users": 1055281.23757549,
      "pages_per_visit": 4.52405536492668
    },
    {
      "global_rank": 2100,
      "category_rank": 100,
      "domain": "concedederaserskyline.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 25250831.173271,
      "curr_month_visits": 25250831.173271,
      "unique_users": 13856766.9343892,
      "pages_per_visit": 3.36127943052072
    },
    {
      "global_rank": 3125,
      "category_rank": 100,
      "domain": "like-manga.net",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 22014561.3240351,
      "curr_month_visits": 22014561.3240351,
      "unique_users": 2649784.45834871,
      "pages_per_visit": 6.32150302170355
    },
    {
      "global_rank": 131199,
      "category_rank": 101,
      "domain": "coloso.jp",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 305656.043190486,
      "curr_month_visits": 305656.043190486,
      "unique_users": 87305.7695026681,
      "pages_per_visit": 3.45061532601909
    },
    {
      "global_rank": 12671,
      "category_rank": 101,
      "domain": "shanghaifantasy.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 3362789.54651177,
      "curr_month_visits": 3362789.54651177,
      "unique_users": 492655.952520908,
      "pages_per_visit": 8.78880482538637
    },
    {
      "global_rank": 7954,
      "category_rank": 101,
      "domain": "postjung.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 7369418.88672743,
      "curr_month_visits": 7369418.88672743,
      "unique_users": 1771015.34801705,
      "pages_per_visit": 5.62252306012378
    },
    {
      "global_rank": 121792,
      "category_rank": 101,
      "domain": "smart-cast.io",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 635390.556532906,
      "curr_month_visits": 635390.556532906,
      "unique_users": 24002.6868342788,
      "pages_per_visit": 2.91094183553449
    },
    {
      "global_rank": 65597,
      "category_rank": 101,
      "domain": "thebestsocial.media",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1274833.99936044,
      "curr_month_visits": 1274833.99936044,
      "unique_users": 501442.963934556,
      "pages_per_visit": 1.46161449000516
    },
    {
      "global_rank": 2113,
      "category_rank": 101,
      "domain": "raiplay.it",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 26593301.8474574,
      "curr_month_visits": 26593301.8474574,
      "unique_users": 6836438.64892653,
      "pages_per_visit": 3.57947404183505
    },
    {
      "global_rank": 9268,
      "category_rank": 101,
      "domain": "nme.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 9664943.56869312,
      "curr_month_visits": 9664943.56869312,
      "unique_users": 6067415.37887661,
      "pages_per_visit": 1.78054774840039
    },
    {
      "global_rank": 3229,
      "category_rank": 101,
      "domain": "manhwa-raw.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 11212193.1419309,
      "curr_month_visits": 11212193.1419309,
      "unique_users": 2235397.50587468,
      "pages_per_visit": 9.07328311537649
    },
    {
      "global_rank": 66674,
      "category_rank": 102,
      "domain": "goodgag.net",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 579488.432881475,
      "curr_month_visits": 579488.432881475,
      "unique_users": 217969.272133484,
      "pages_per_visit": 6.7637024267558
    },
    {
      "global_rank": 122170,
      "category_rank": 102,
      "domain": "sxodim.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 446293.778830109,
      "curr_month_visits": 446293.778830109,
      "unique_users": 249029.684276571,
      "pages_per_visit": 2.69154471296025
    },
    {
      "global_rank": 12750,
      "category_rank": 102,
      "domain": "waterstones.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 4285515.9234478,
      "curr_month_visits": 4285515.9234478,
      "unique_users": 2395846.86985394,
      "pages_per_visit": 4.30815579533059
    },
    {
      "global_rank": 2142,
      "category_rank": 102,
      "domain": "amctheatres.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 18902799.1613682,
      "curr_month_visits": 18902799.1613682,
      "unique_users": 10809006.8651089,
      "pages_per_visit": 4.62633270612637
    },
    {
      "global_rank": 8085,
      "category_rank": 102,
      "domain": "koreaboo.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 10183303.1177698,
      "curr_month_visits": 10183303.1177698,
      "unique_users": 2349246.20236804,
      "pages_per_visit": 2.82392414425391
    },
    {
      "global_rank": 9309,
      "category_rank": 102,
      "domain": "drivemusic.club",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 5214126.53296616,
      "curr_month_visits": 5214126.53296616,
      "unique_users": 2599675.04176716,
      "pages_per_visit": 5.20955647715088
    },
    {
      "global_rank": 3232,
      "category_rank": 102,
      "domain": "mto.to",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 12890272.0147586,
      "curr_month_visits": 12890272.0147586,
      "unique_users": 2613225.02524031,
      "pages_per_visit": 9.59924988412124
    },
    {
      "global_rank": 134186,
      "category_rank": 102,
      "domain": "sekaido.co.jp",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 311660.884523929,
      "curr_month_visits": 311660.884523929,
      "unique_users": 168897.452950577,
      "pages_per_visit": 3.63893812713729
    },
    {
      "global_rank": 135732,
      "category_rank": 103,
      "domain": "gdirect.cloud",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 320676.542927574,
      "curr_month_visits": 320676.542927574,
      "unique_users": 95752.7749182331,
      "pages_per_visit": 5.43634572890542
    },
    {
      "global_rank": 3356,
      "category_rank": 103,
      "domain": "wuxiaspot.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 16874885.9494462,
      "curr_month_visits": 16874885.9494462,
      "unique_users": 709715.895895866,
      "pages_per_visit": 17.633044983657
    },
    {
      "global_rank": 9406,
      "category_rank": 103,
      "domain": "vocalremover.org",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 8009618.38699002,
      "curr_month_visits": 8009618.38699002,
      "unique_users": 3146120.43004375,
      "pages_per_visit": 2.54970539056928
    },
    {
      "global_rank": 2143,
      "category_rank": 103,
      "domain": "okko.tv",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 30713044.5984995,
      "curr_month_visits": 30713044.5984995,
      "unique_users": 13645138.3164984,
      "pages_per_visit": 2.32005066895627
    },
    {
      "global_rank": 122853,
      "category_rank": 103,
      "domain": "lovetheatre.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 292838.00565007,
      "curr_month_visits": 292838.00565007,
      "unique_users": 193325.952207888,
      "pages_per_visit": 3.92018042432831
    },
    {
      "global_rank": 67155,
      "category_rank": 103,
      "domain": "nieuwspaal.nl",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1089115.03467911,
      "curr_month_visits": 1089115.03467911,
      "unique_users": 530940.909034188,
      "pages_per_visit": 1.7061878559368
    },
    {
      "global_rank": 8223,
      "category_rank": 103,
      "domain": "sheknows.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 8119938.77035719,
      "curr_month_visits": 8119938.77035719,
      "unique_users": 4209253.65694776,
      "pages_per_visit": 2.88106000781458
    },
    {
      "global_rank": 12890,
      "category_rank": 103,
      "domain": "boxnovel.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 5997183.82200929,
      "curr_month_visits": 5997183.82200929,
      "unique_users": 413021.031643379,
      "pages_per_visit": 7.52314054717318
    },
    {
      "global_rank": 13091,
      "category_rank": 104,
      "domain": "tongrenquan.org",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 4201691.57322817,
      "curr_month_visits": 4201691.57322817,
      "unique_users": 372455.442513092,
      "pages_per_visit": 8.35588804038882
    },
    {
      "global_rank": 123560,
      "category_rank": 104,
      "domain": "sagaftra.org",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 405275.933398335,
      "curr_month_visits": 405275.933398335,
      "unique_users": 190715.357688304,
      "pages_per_visit": 2.90924599601722
    },
    {
      "global_rank": 3365,
      "category_rank": 104,
      "domain": "mangaread.org",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 13859698.6500594,
      "curr_month_visits": 13859698.6500594,
      "unique_users": 1943936.59753639,
      "pages_per_visit": 10.2122211302418
    },
    {
      "global_rank": 67453,
      "category_rank": 104,
      "domain": "rsvlts.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 699918.319492372,
      "curr_month_visits": 699918.319492372,
      "unique_users": 373985.228176224,
      "pages_per_visit": 3.63957794379953
    },
    {
      "global_rank": 2182,
      "category_rank": 104,
      "domain": "tv2.no",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 29262507.6175058,
      "curr_month_visits": 29262507.6175058,
      "unique_users": 3018627.27500435,
      "pages_per_visit": 3.7270928950956
    },
    {
      "global_rank": 8312,
      "category_rank": 104,
      "domain": "hygall.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 3819341.68065715,
      "curr_month_visits": 3819341.68065715,
      "unique_users": 373208.767191224,
      "pages_per_visit": 22.5434206637661
    },
    {
      "global_rank": 136109,
      "category_rank": 104,
      "domain": "beauxarts.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 428384.260434217,
      "curr_month_visits": 428384.260434217,
      "unique_users": 257560.522592321,
      "pages_per_visit": 2.10706698208639
    },
    {
      "global_rank": 9452,
      "category_rank": 104,
      "domain": "zvuk.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 8141815.76506228,
      "curr_month_visits": 8141815.76506228,
      "unique_users": 5113865.93540102,
      "pages_per_visit": 2.23313312913106
    },
    {
      "global_rank": 9680,
      "category_rank": 105,
      "domain": "skysound7.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 5580872.44655545,
      "curr_month_visits": 5580872.44655545,
      "unique_users": 3234693.19428277,
      "pages_per_visit": 2.78915392774871
    },
    {
      "global_rank": 13459,
      "category_rank": 105,
      "domain": "honto.jp",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 4554395.25216335,
      "curr_month_visits": 4554395.25216335,
      "unique_users": 1781047.64737653,
      "pages_per_visit": 4.25362351940655
    },
    {
      "global_rank": 8322,
      "category_rank": 105,
      "domain": "tvinsider.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 8937554.41334778,
      "curr_month_visits": 8937554.41334778,
      "unique_users": 5766135.87759809,
      "pages_per_visit": 1.88494493750206
    },
    {
      "global_rank": 2247,
      "category_rank": 105,
      "domain": "lk21official.my",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 27161543.9545726,
      "curr_month_visits": 27161543.9545726,
      "unique_users": 4970501.25275553,
      "pages_per_visit": 5.00752134191354
    },
    {
      "global_rank": 136789,
      "category_rank": 105,
      "domain": "e-flux.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 438928.653352565,
      "curr_month_visits": 438928.653352565,
      "unique_users": 214872.700030765,
      "pages_per_visit": 1.75672636402069
    },
    {
      "global_rank": 124061,
      "category_rank": 105,
      "domain": "spotgroningen.nl",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 304973.209741254,
      "curr_month_visits": 304973.209741254,
      "unique_users": 155931.258249436,
      "pages_per_visit": 4.46512789864606
    },
    {
      "global_rank": 3500,
      "category_rank": 105,
      "domain": "hivetoon.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 25115124.791355,
      "curr_month_visits": 25115124.791355,
      "unique_users": 3134713.45745221,
      "pages_per_visit": 3.02359382976271
    },
    {
      "global_rank": 67485,
      "category_rank": 105,
      "domain": "speld.nl",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 748335.261242402,
      "curr_month_visits": 748335.261242402,
      "unique_users": 319406.612642861,
      "pages_per_visit": 2.95115389864625
    },
    {
      "global_rank": 9860,
      "category_rank": 106,
      "domain": "sverigesradio.se",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 8666486.45023763,
      "curr_month_visits": 8666486.45023763,
      "unique_users": 2259659.59028111,
      "pages_per_visit": 2.47547082634365
    },
    {
      "global_rank": 137588,
      "category_rank": 106,
      "domain": "nicoseiga.jp",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 402145.057120467,
      "curr_month_visits": 402145.057120467,
      "unique_users": 125977.314968316,
      "pages_per_visit": 2.68578456597138
    },
    {
      "global_rank": 2256,
      "category_rank": 106,
      "domain": "ntv.co.jp",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 33589384.0037391,
      "curr_month_visits": 33589384.0037391,
      "unique_users": 19606239.3609067,
      "pages_per_visit": 1.93023756434207
    },
    {
      "global_rank": 126614,
      "category_rank": 106,
      "domain": "scfta.org",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 277300.023117086,
      "curr_month_visits": 277300.023117086,
      "unique_users": 156856.781749277,
      "pages_per_visit": 4.62571766290697
    },
    {
      "global_rank": 67563,
      "category_rank": 106,
      "domain": "casualdating1.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 3082921.92384807,
      "curr_month_visits": 3082921.92384807,
      "unique_users": 2137122.955724,
      "pages_per_visit": 1.47253957782602
    },
    {
      "global_rank": 3573,
      "category_rank": 106,
      "domain": "ggredi.info",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 12699583.5518836,
      "curr_month_visits": 12699583.5518836,
      "unique_users": 2648776.84206366,
      "pages_per_visit": 4.54238272873235
    },
    {
      "global_rank": 13555,
      "category_rank": 106,
      "domain": "rulate.ru",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 5142386.33565566,
      "curr_month_visits": 5142386.33565566,
      "unique_users": 613971.068166392,
      "pages_per_visit": 6.43298683750131
    },
    {
      "global_rank": 8371,
      "category_rank": 106,
      "domain": "videoland.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 7464609.14640259,
      "curr_month_visits": 7464609.14640259,
      "unique_users": 1563827.45828868,
      "pages_per_visit": 4.09474199419672
    },
    {
      "global_rank": 3616,
      "category_rank": 107,
      "domain": "mangaraw.onl",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 44153262.4174642,
      "curr_month_visits": 44153262.4174642,
      "unique_users": 6969203.60303947,
      "pages_per_visit": 7.54754498635647
    },
    {
      "global_rank": 68013,
      "category_rank": 107,
      "domain": "straightdope.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 722466.723052053,
      "curr_month_visits": 722466.723052053,
      "unique_users": 455705.647262083,
      "pages_per_visit": 4.64223520992037
    },
    {
      "global_rank": 137674,
      "category_rank": 107,
      "domain": "arthive.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 419053.214449352,
      "curr_month_visits": 419053.214449352,
      "unique_users": 243196.308928871,
      "pages_per_visit": 2.49490200504448
    },
    {
      "global_rank": 8392,
      "category_rank": 107,
      "domain": "promotions.hu",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 8810434.37824631,
      "curr_month_visits": 8810434.37824631,
      "unique_users": 2303172.48901223,
      "pages_per_visit": 2.38779323288131
    },
    {
      "global_rank": 9934,
      "category_rank": 107,
      "domain": "turskeserije.tv",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 9213635.84180121,
      "curr_month_visits": 9213635.84180121,
      "unique_users": 623877.906709637,
      "pages_per_visit": 2.95295559583717
    },
    {
      "global_rank": 2275,
      "category_rank": 107,
      "domain": "tving.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 29502756.4979086,
      "curr_month_visits": 29502756.4979086,
      "unique_users": 8235381.81671809,
      "pages_per_visit": 4.74329129352957
    },
    {
      "global_rank": 126885,
      "category_rank": 107,
      "domain": "shakespearesglobe.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 405700.426552793,
      "curr_month_visits": 405700.426552793,
      "unique_users": 237149.329598185,
      "pages_per_visit": 3.42389458620187
    },
    {
      "global_rank": 13605,
      "category_rank": 107,
      "domain": "novelxo.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 3082103.38650041,
      "curr_month_visits": 3082103.38650041,
      "unique_users": 447553.615256305,
      "pages_per_visit": 14.726325558647
    },
    {
      "global_rank": 3674,
      "category_rank": 108,
      "domain": "mangaraw.plus",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 6987778.95241591,
      "curr_month_visits": 6987778.95241591,
      "unique_users": 1524340.43362001,
      "pages_per_visit": 3.6436363462648
    },
    {
      "global_rank": 68386,
      "category_rank": 108,
      "domain": "hey.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 965504.751388262,
      "curr_month_visits": 965504.751388262,
      "unique_users": 260242.397423803,
      "pages_per_visit": 4.18277888675212
    },
    {
      "global_rank": 138951,
      "category_rank": 108,
      "domain": "arsvalue.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 202974.007499556,
      "curr_month_visits": 202974.007499556,
      "unique_users": 88345.8193002428,
      "pages_per_visit": 5.80738233777868
    },
    {
      "global_rank": 127207,
      "category_rank": 108,
      "domain": "thebostoncalendar.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 331186.872604401,
      "curr_month_visits": 331186.872604401,
      "unique_users": 183861.467245641,
      "pages_per_visit": 3.94762278144678
    },
    {
      "global_rank": 8457,
      "category_rank": 108,
      "domain": "asianwiki.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 7397767.40523755,
      "curr_month_visits": 7397767.40523755,
      "unique_users": 2957641.17577562,
      "pages_per_visit": 3.90067956472161
    },
    {
      "global_rank": 2293,
      "category_rank": 108,
      "domain": "m4uhd.tv",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 20247571.7149755,
      "curr_month_visits": 20247571.7149755,
      "unique_users": 4508611.32843629,
      "pages_per_visit": 5.10009438149516
    },
    {
      "global_rank": 10055,
      "category_rank": 108,
      "domain": "lightaudio.ru",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 7123235.53945824,
      "curr_month_visits": 7123235.53945824,
      "unique_users": 4003688.17284106,
      "pages_per_visit": 2.57198720888738
    },
    {
      "global_rank": 13669,
      "category_rank": 108,
      "domain": "libcat.ru",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 3501705.51904998,
      "curr_month_visits": 3501705.51904998,
      "unique_users": 690251.808429738,
      "pages_per_visit": 10.7875597913515
    },
    {
      "global_rank": 8460,
      "category_rank": 109,
      "domain": "123telugu.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 6085674.66581412,
      "curr_month_visits": 6085674.66581412,
      "unique_users": 1448752.26583992,
      "pages_per_visit": 6.9399380606957
    },
    {
      "global_rank": 2294,
      "category_rank": 109,
      "domain": "crummydevioussucculent.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 14262059.2247354,
      "curr_month_visits": 14262059.2247354,
      "unique_users": 9463231.9524917,
      "pages_per_visit": 2.82832607717487
    },
    {
      "global_rank": 3689,
      "category_rank": 109,
      "domain": "mangakoma.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 5976380.86794308,
      "curr_month_visits": 5976380.86794308,
      "unique_users": 1832869.54514032,
      "pages_per_visit": 6.36688306965156
    },
    {
      "global_rank": 68396,
      "category_rank": 109,
      "domain": "exler.ru",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1179920.54999537,
      "curr_month_visits": 1179920.54999537,
      "unique_users": 240662.724521056,
      "pages_per_visit": 2.35652553608087
    },
    {
      "global_rank": 139480,
      "category_rank": 109,
      "domain": "neizvestniy-geniy.ru",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 278603.779939033,
      "curr_month_visits": 278603.779939033,
      "unique_users": 95309.634908412,
      "pages_per_visit": 5.56720617323493
    },
    {
      "global_rank": 127937,
      "category_rank": 109,
      "domain": "westendtheatre.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 355427.436103608,
      "curr_month_visits": 355427.436103608,
      "unique_users": 229089.132036059,
      "pages_per_visit": 2.88746832278907
    },
    {
      "global_rank": 13759,
      "category_rank": 109,
      "domain": "flibusta.site",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 4351265.34617164,
      "curr_month_visits": 4351265.34617164,
      "unique_users": 1196620.953003,
      "pages_per_visit": 4.70519249542444
    },
    {
      "global_rank": 10080,
      "category_rank": 109,
      "domain": "suamusica.com.br",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 5745108.74312389,
      "curr_month_visits": 5745108.74312389,
      "unique_users": 1844862.18908565,
      "pages_per_visit": 4.2516098941051
    },
    {
      "global_rank": 8605,
      "category_rank": 110,
      "domain": "myinstants.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 6821382.44018299,
      "curr_month_visits": 6821382.44018299,
      "unique_users": 3194900.5393867,
      "pages_per_visit": 4.05593723998985
    },
    {
      "global_rank": 13787,
      "category_rank": 110,
      "domain": "kniga-online.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 4063184.67395,
      "curr_month_visits": 4063184.67395,
      "unique_users": 623626.043258562,
      "pages_per_visit": 7.16992041918006
    },
    {
      "global_rank": 129534,
      "category_rank": 110,
      "domain": "mxat.ru",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 287992.635821674,
      "curr_month_visits": 287992.635821674,
      "unique_users": 152977.789460043,
      "pages_per_visit": 3.80251977257219
    },
    {
      "global_rank": 140882,
      "category_rank": 110,
      "domain": "artnow.ru",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 200636.6704923,
      "curr_month_visits": 200636.6704923,
      "unique_users": 109750.069617496,
      "pages_per_visit": 5.77014767242974
    },
    {
      "global_rank": 2308,
      "category_rank": 110,
      "domain": "kinolord8.pics",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 25174569.0277946,
      "curr_month_visits": 25174569.0277946,
      "unique_users": 5257679.70072406,
      "pages_per_visit": 1.73506712161643
    },
    {
      "global_rank": 10124,
      "category_rank": 110,
      "domain": "musify.club",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 5006631.205922,
      "curr_month_visits": 5006631.205922,
      "unique_users": 1550481.4022258,
      "pages_per_visit": 5.94212757859721
    },
    {
      "global_rank": 3839,
      "category_rank": 110,
      "domain": "dto.to",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 11696232.2344454,
      "curr_month_visits": 11696232.2344454,
      "unique_users": 3019312.48481831,
      "pages_per_visit": 10.1556056585539
    },
    {
      "global_rank": 69418,
      "category_rank": 110,
      "domain": "banana.by",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 944373.185415035,
      "curr_month_visits": 944373.185415035,
      "unique_users": 208725.178005481,
      "pages_per_visit": 3.93990344710447
    },
    {
      "global_rank": 14287,
      "category_rank": 111,
      "domain": "knigorai.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 6843972.89683228,
      "curr_month_visits": 6843972.89683228,
      "unique_users": 657924.341791293,
      "pages_per_visit": 2.33029142670392
    },
    {
      "global_rank": 10176,
      "category_rank": 111,
      "domain": "genyoutube.online",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 6241710.56607629,
      "curr_month_visits": 6241710.56607629,
      "unique_users": 2625278.83850272,
      "pages_per_visit": 2.34427382921674
    },
    {
      "global_rank": 141285,
      "category_rank": 111,
      "domain": "colourlovers.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 212021.771716556,
      "curr_month_visits": 212021.771716556,
      "unique_users": 107579.40102603,
      "pages_per_visit": 6.29011966841297
    },
    {
      "global_rank": 69869,
      "category_rank": 111,
      "domain": "glbimg.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 810558.751166025,
      "curr_month_visits": 810558.751166025,
      "unique_users": 572104.939199838,
      "pages_per_visit": 1.70250513027771
    },
    {
      "global_rank": 3842,
      "category_rank": 111,
      "domain": "manganelo.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 17866961.8472213,
      "curr_month_visits": 17866961.8472213,
      "unique_users": 1826880.85778336,
      "pages_per_visit": 5.28865037404939
    },
    {
      "global_rank": 130566,
      "category_rank": 111,
      "domain": "ntathome.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 258205.651535901,
      "curr_month_visits": 258205.651535901,
      "unique_users": 133542.704027118,
      "pages_per_visit": 4.61032846185669
    },
    {
      "global_rank": 2353,
      "category_rank": 111,
      "domain": "tvbs.com.tw",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 34293980.4508134,
      "curr_month_visits": 34293980.4508134,
      "unique_users": 11222173.7576283,
      "pages_per_visit": 1.69243185933259
    },
    {
      "global_rank": 8715,
      "category_rank": 111,
      "domain": "fandomwire.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 6959356.78245547,
      "curr_month_visits": 6959356.78245547,
      "unique_users": 3671717.72430048,
      "pages_per_visit": 1.59512444860422
    },
    {
      "global_rank": 69873,
      "category_rank": 112,
      "domain": "donald.pl",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1357943.72423323,
      "curr_month_visits": 1357943.72423323,
      "unique_users": 436479.554958416,
      "pages_per_visit": 1.54429989562975
    },
    {
      "global_rank": 2367,
      "category_rank": 112,
      "domain": "streamtape.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 26428224.1127159,
      "curr_month_visits": 26428224.1127159,
      "unique_users": 10180972.9513811,
      "pages_per_visit": 3.48534106681778
    },
    {
      "global_rank": 10226,
      "category_rank": 112,
      "domain": "ra.co",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 7050119.7294937,
      "curr_month_visits": 7050119.7294937,
      "unique_users": 2890637.41267151,
      "pages_per_visit": 3.25311936400685
    },
    {
      "global_rank": 3845,
      "category_rank": 112,
      "domain": "gocomics.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 8368328.30030929,
      "curr_month_visits": 8368328.30030929,
      "unique_users": 1028455.5877442,
      "pages_per_visit": 13.4417968650597
    },
    {
      "global_rank": 142413,
      "category_rank": 112,
      "domain": "pinterestvideo.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 378237.629469282,
      "curr_month_visits": 378237.629469282,
      "unique_users": 156458.912865585,
      "pages_per_visit": 2.89410933146676
    },
    {
      "global_rank": 131528,
      "category_rank": 112,
      "domain": "kinopark.kz",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 347374.639842982,
      "curr_month_visits": 347374.639842982,
      "unique_users": 154027.976591643,
      "pages_per_visit": 2.01502558596162
    },
    {
      "global_rank": 8882,
      "category_rank": 112,
      "domain": "fmoviesto.cc",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 9166255.70787717,
      "curr_month_visits": 9166255.70787717,
      "unique_users": 944176.030538718,
      "pages_per_visit": 4.05170905450492
    },
    {
      "global_rank": 14319,
      "category_rank": 112,
      "domain": "beqege.cc",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 3515601.12002129,
      "curr_month_visits": 3515601.12002129,
      "unique_users": 547135.295251552,
      "pages_per_visit": 10.382557950146
    },
    {
      "global_rank": 3878,
      "category_rank": 113,
      "domain": "nijihorosokuvtubermatome.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 20302869.773934,
      "curr_month_visits": 20302869.773934,
      "unique_users": 1011282.88161337,
      "pages_per_visit": 4.69657618588083
    },
    {
      "global_rank": 8917,
      "category_rank": 113,
      "domain": "thedirect.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 6994906.01315235,
      "curr_month_visits": 6994906.01315235,
      "unique_users": 4835215.17948747,
      "pages_per_visit": 1.36593752015694
    },
    {
      "global_rank": 10553,
      "category_rank": 113,
      "domain": "lyricstranslate.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 7711083.76036207,
      "curr_month_visits": 7711083.76036207,
      "unique_users": 5045805.51710464,
      "pages_per_visit": 2.12763926443027
    },
    {
      "global_rank": 2368,
      "category_rank": 113,
      "domain": "pelisplushd.to",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 20584917.5281462,
      "curr_month_visits": 20584917.5281462,
      "unique_users": 6512753.53097217,
      "pages_per_visit": 5.29953488641926
    },
    {
      "global_rank": 146349,
      "category_rank": 113,
      "domain": "compet.site",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 95887.4654702853,
      "curr_month_visits": 95887.4654702853,
      "unique_users": 29725.2539207586,
      "pages_per_visit": 10.0477056084939
    },
    {
      "global_rank": 70266,
      "category_rank": 113,
      "domain": "nothingtoxic.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 785785.115061445,
      "curr_month_visits": 785785.115061445,
      "unique_users": 415434.302947355,
      "pages_per_visit": 2.83870150955149
    },
    {
      "global_rank": 133152,
      "category_rank": 113,
      "domain": "teatroreal.es",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 333793.639985922,
      "curr_month_visits": 333793.639985922,
      "unique_users": 180518.555932773,
      "pages_per_visit": 4.25686577204773
    },
    {
      "global_rank": 14349,
      "category_rank": 113,
      "domain": "fanfics.me",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 5213213.07258489,
      "curr_month_visits": 5213213.07258489,
      "unique_users": 1449569.13155605,
      "pages_per_visit": 3.76244882052191
    },
    {
      "global_rank": 10565,
      "category_rank": 114,
      "domain": "cifraclub.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 7108700.03463265,
      "curr_month_visits": 7108700.03463265,
      "unique_users": 2760149.07523457,
      "pages_per_visit": 2.44373237710269
    },
    {
      "global_rank": 2382,
      "category_rank": 114,
      "domain": "srf.ch",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 29663906.1442822,
      "curr_month_visits": 29663906.1442822,
      "unique_users": 6172522.07888688,
      "pages_per_visit": 2.8475196674325
    },
    {
      "global_rank": 133339,
      "category_rank": 114,
      "domain": "tixculture.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 301372.543021401,
      "curr_month_visits": 301372.543021401,
      "unique_users": 150116.616537946,
      "pages_per_visit": 4.60566534299223
    },
    {
      "global_rank": 147256,
      "category_rank": 114,
      "domain": "nastol.com.ua",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 152691.992426806,
      "curr_month_visits": 152691.992426806,
      "unique_users": 68053.4549497452,
      "pages_per_visit": 13.2356786330415
    },
    {
      "global_rank": 3888,
      "category_rank": 114,
      "domain": "klto9.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 14569224.2591004,
      "curr_month_visits": 14569224.2591004,
      "unique_users": 249524.658984954,
      "pages_per_visit": 11.7733849036382
    },
    {
      "global_rank": 70443,
      "category_rank": 114,
      "domain": "labaq.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 802238.220689954,
      "curr_month_visits": 802238.220689954,
      "unique_users": 213455.990879834,
      "pages_per_visit": 2.97147686228173
    },
    {
      "global_rank": 8919,
      "category_rank": 114,
      "domain": "e-klase.lv",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 6256710.07820755,
      "curr_month_visits": 6256710.07820755,
      "unique_users": 434344.32742903,
      "pages_per_visit": 6.72335783001064
    },
    {
      "global_rank": 14563,
      "category_rank": 114,
      "domain": "meclib.jp",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 3038794.34099121,
      "curr_month_visits": 3038794.34099121,
      "unique_users": 1219909.54895281,
      "pages_per_visit": 7.45552275859726
    },
    {
      "global_rank": 10675,
      "category_rank": 115,
      "domain": "tidal.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 5602767.61288823,
      "curr_month_visits": 5602767.61288823,
      "unique_users": 2726502.75950546,
      "pages_per_visit": 4.50440740926537
    },
    {
      "global_rank": 133363,
      "category_rank": 115,
      "domain": "utick.be",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 286210.397787691,
      "curr_month_visits": 286210.397787691,
      "unique_users": 159586.887571984,
      "pages_per_visit": 5.41918204595266
    },
    {
      "global_rank": 3950,
      "category_rank": 115,
      "domain": "madridkings.shop",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 12677751.0857303,
      "curr_month_visits": 12677751.0857303,
      "unique_users": 5630619.43921662,
      "pages_per_visit": 1.593382262116
    },
    {
      "global_rank": 14694,
      "category_rank": 115,
      "domain": "xiaoshubao.net",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 2848772.88073661,
      "curr_month_visits": 2848772.88073661,
      "unique_users": 858198.432533217,
      "pages_per_visit": 9.13065904804672
    },
    {
      "global_rank": 148528,
      "category_rank": 115,
      "domain": "ngv.vic.gov.au",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 408495.345999375,
      "curr_month_visits": 408495.345999375,
      "unique_users": 223872.266591268,
      "pages_per_visit": 2.65674072116824
    },
    {
      "global_rank": 8943,
      "category_rank": 115,
      "domain": "ytmp4.is",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 7006039.57129964,
      "curr_month_visits": 7006039.57129964,
      "unique_users": 3495353.50678473,
      "pages_per_visit": 4.18758662949345
    },
    {
      "global_rank": 70968,
      "category_rank": 115,
      "domain": "youtube.pl",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1613940.31512056,
      "curr_month_visits": 1613940.31512056,
      "unique_users": 241911.493163356,
      "pages_per_visit": 1.23067984061928
    },
    {
      "global_rank": 2424,
      "category_rank": 115,
      "domain": "nova.cz",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 29864671.286442,
      "curr_month_visits": 29864671.286442,
      "unique_users": 4124917.8558035,
      "pages_per_visit": 3.21138423497318
    },
    {
      "global_rank": 2429,
      "category_rank": 116,
      "domain": "tf1.fr",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 27471557.9591538,
      "curr_month_visits": 27471557.9591538,
      "unique_users": 6701825.84141565,
      "pages_per_visit": 2.99549741670978
    },
    {
      "global_rank": 9006,
      "category_rank": 116,
      "domain": "prcm.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 3540346.18091001,
      "curr_month_visits": 3540346.18091001,
      "unique_users": 676119.044382047,
      "pages_per_visit": 19.5674610011386
    },
    {
      "global_rank": 70993,
      "category_rank": 116,
      "domain": "youtubers.me",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 989049.725627959,
      "curr_month_visits": 989049.725627959,
      "unique_users": 680705.382701492,
      "pages_per_visit": 1.88914227336251
    },
    {
      "global_rank": 134887,
      "category_rank": 116,
      "domain": "utick.net",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 322832.385714206,
      "curr_month_visits": 322832.385714206,
      "unique_users": 154318.209762447,
      "pages_per_visit": 4.45521792900709
    },
    {
      "global_rank": 3986,
      "category_rank": 116,
      "domain": "syosetu.si",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 5782135.79425912,
      "curr_month_visits": 5782135.79425912,
      "unique_users": 1847339.99319481,
      "pages_per_visit": 5.69715876157879
    },
    {
      "global_rank": 14735,
      "category_rank": 116,
      "domain": "book118.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 5935952.78505699,
      "curr_month_visits": 5935952.78505699,
      "unique_users": 3876237.92651052,
      "pages_per_visit": 1.7953072740332
    },
    {
      "global_rank": 149568,
      "category_rank": 116,
      "domain": "nma.art",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 298189.549105219,
      "curr_month_visits": 298189.549105219,
      "unique_users": 111164.215009681,
      "pages_per_visit": 3.09958697767334
    },
    {
      "global_rank": 10864,
      "category_rank": 116,
      "domain": "kkbox.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 7603865.7858098,
      "curr_month_visits": 7603865.7858098,
      "unique_users": 4361764.09698633,
      "pages_per_visit": 2.01835797601064
    },
    {
      "global_rank": 71067,
      "category_rank": 117,
      "domain": "starbyface.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 754472.498669668,
      "curr_month_visits": 754472.498669668,
      "unique_users": 389904.273977038,
      "pages_per_visit": 3.90560666873769
    },
    {
      "global_rank": 149774,
      "category_rank": 117,
      "domain": "boesner.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 221482.721296944,
      "curr_month_visits": 221482.721296944,
      "unique_users": 132084.43479508,
      "pages_per_visit": 5.28875462793239
    },
    {
      "global_rank": 10966,
      "category_rank": 117,
      "domain": "nhaccuatui.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 5107715.64542335,
      "curr_month_visits": 5107715.64542335,
      "unique_users": 2722757.61726017,
      "pages_per_visit": 4.2874278471042
    },
    {
      "global_rank": 2431,
      "category_rank": 117,
      "domain": "trueid.net",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 25694726.9281332,
      "curr_month_visits": 25694726.9281332,
      "unique_users": 11175818.5913196,
      "pages_per_visit": 3.05381743062282
    },
    {
      "global_rank": 4023,
      "category_rank": 117,
      "domain": "shojocrush.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 7201980.21828558,
      "curr_month_visits": 7201980.21828558,
      "unique_users": 1047245.67723417,
      "pages_per_visit": 6.5807820695539
    },
    {
      "global_rank": 9157,
      "category_rank": 117,
      "domain": "livepocket.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 6049113.84322138,
      "curr_month_visits": 6049113.84322138,
      "unique_users": 2420904.69055946,
      "pages_per_visit": 4.7012123232935
    },
    {
      "global_rank": 135207,
      "category_rank": 117,
      "domain": "qtix.com.au",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 394567.200515045,
      "curr_month_visits": 394567.200515045,
      "unique_users": 162662.352356661,
      "pages_per_visit": 4.07548518640439
    },
    {
      "global_rank": 14972,
      "category_rank": 117,
      "domain": "drxsw.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 3958305.57029635,
      "curr_month_visits": 3958305.57029635,
      "unique_users": 482989.649097286,
      "pages_per_visit": 9.28466738179459
    },
    {
      "global_rank": 15148,
      "category_rank": 118,
      "domain": "knizhin.ru",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 8219494.07499932,
      "curr_month_visits": 8219494.07499932,
      "unique_users": 849688.66453877,
      "pages_per_visit": 2.09492056983592
    },
    {
      "global_rank": 4038,
      "category_rank": 118,
      "domain": "manhwato.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 11186547.3330384,
      "curr_month_visits": 11186547.3330384,
      "unique_users": 2327083.3877057,
      "pages_per_visit": 8.60783879073191
    },
    {
      "global_rank": 150131,
      "category_rank": 118,
      "domain": "cnu.cc",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 192454.649375865,
      "curr_month_visits": 192454.649375865,
      "unique_users": 74613.5214180258,
      "pages_per_visit": 8.68892881530221
    },
    {
      "global_rank": 9258,
      "category_rank": 118,
      "domain": "anilist.co",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 6779004.8211164,
      "curr_month_visits": 6779004.8211164,
      "unique_users": 1559780.89543064,
      "pages_per_visit": 5.79103851891872
    },
    {
      "global_rank": 2491,
      "category_rank": 118,
      "domain": "csfd.cz",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 21038730.0410219,
      "curr_month_visits": 21038730.0410219,
      "unique_users": 4656673.50171528,
      "pages_per_visit": 4.83908434059491
    },
    {
      "global_rank": 135943,
      "category_rank": 118,
      "domain": "sadlerswells.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 262948.375867768,
      "curr_month_visits": 262948.375867768,
      "unique_users": 149310.32503451,
      "pages_per_visit": 4.91375692601023
    },
    {
      "global_rank": 11194,
      "category_rank": 118,
      "domain": "krakenfiles.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 5760953.39549113,
      "curr_month_visits": 5760953.39549113,
      "unique_users": 2119572.51345543,
      "pages_per_visit": 3.59706975513028
    },
    {
      "global_rank": 71288,
      "category_rank": 118,
      "domain": "amp4.cc",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 998902.695656472,
      "curr_month_visits": 998902.695656472,
      "unique_users": 367046.380694861,
      "pages_per_visit": 1.8847057644318
    },
    {
      "global_rank": 9261,
      "category_rank": 119,
      "domain": "soccersuck.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 7799640.00834347,
      "curr_month_visits": 7799640.00834347,
      "unique_users": 633094.136512155,
      "pages_per_visit": 6.36452238432153
    },
    {
      "global_rank": 135977,
      "category_rank": 119,
      "domain": "wickedthemusical.co.uk",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 217892.541227644,
      "curr_month_visits": 217892.541227644,
      "unique_users": 133605.482602642,
      "pages_per_visit": 4.04510288826145
    },
    {
      "global_rank": 4073,
      "category_rank": 119,
      "domain": "vyvymanga.net",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 14448778.8275703,
      "curr_month_visits": 14448778.8275703,
      "unique_users": 5191246.11240378,
      "pages_per_visit": 5.13547537995163
    },
    {
      "global_rank": 151461,
      "category_rank": 119,
      "domain": "bozar.be",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 247907.557378485,
      "curr_month_visits": 247907.557378485,
      "unique_users": 135346.026794309,
      "pages_per_visit": 4.26258258579084
    },
    {
      "global_rank": 15253,
      "category_rank": 119,
      "domain": "256wx.net",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 3750250.35924637,
      "curr_month_visits": 3750250.35924637,
      "unique_users": 528719.34065433,
      "pages_per_visit": 9.08209829495375
    },
    {
      "global_rank": 71629,
      "category_rank": 119,
      "domain": "flixtor.si",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 993272.835451823,
      "curr_month_visits": 993272.835451823,
      "unique_users": 162057.032997965,
      "pages_per_visit": 3.41224287693249
    },
    {
      "global_rank": 2505,
      "category_rank": 119,
      "domain": "pluto.tv",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 23119850.0119131,
      "curr_month_visits": 23119850.0119131,
      "unique_users": 9104778.21270322,
      "pages_per_visit": 3.76161138897466
    },
    {
      "global_rank": 11536,
      "category_rank": 119,
      "domain": "soundhouse.co.jp",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 4594980.15269169,
      "curr_month_visits": 4594980.15269169,
      "unique_users": 1441309.51281236,
      "pages_per_visit": 6.0668301958414
    },
    {
      "global_rank": 15270,
      "category_rank": 120,
      "domain": "xbiqugu.net",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 3456135.35575309,
      "curr_month_visits": 3456135.35575309,
      "unique_users": 423195.46273535,
      "pages_per_visit": 13.175754553755
    },
    {
      "global_rank": 136917,
      "category_rank": 120,
      "domain": "sxsw.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 397046.107683472,
      "curr_month_visits": 397046.107683472,
      "unique_users": 210885.694818178,
      "pages_per_visit": 3.03753148915253
    },
    {
      "global_rank": 4209,
      "category_rank": 120,
      "domain": "toonily.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 9502895.12596147,
      "curr_month_visits": 9502895.12596147,
      "unique_users": 2003208.72883968,
      "pages_per_visit": 9.64429093819868
    },
    {
      "global_rank": 2535,
      "category_rank": 120,
      "domain": "kinogo.inc",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 38302206.1199548,
      "curr_month_visits": 38302206.1199548,
      "unique_users": 10072413.6938269,
      "pages_per_visit": 1.5480256741546
    },
    {
      "global_rank": 72192,
      "category_rank": 120,
      "domain": "pudding.cool",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 816401.520624044,
      "curr_month_visits": 816401.520624044,
      "unique_users": 460609.846864047,
      "pages_per_visit": 2.45881131015067
    },
    {
      "global_rank": 9323,
      "category_rank": 120,
      "domain": "tikmate.cc",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 2826177.78150962,
      "curr_month_visits": 2826177.78150962,
      "unique_users": 1131866.1377051,
      "pages_per_visit": 3.99839053255372
    },
    {
      "global_rank": 11593,
      "category_rank": 120,
      "domain": "musicca.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 4183332.29758115,
      "curr_month_visits": 4183332.29758115,
      "unique_users": 2067725.26125939,
      "pages_per_visit": 5.22149886100838
    },
    {
      "global_rank": 154486,
      "category_rank": 120,
      "domain": "europosters.eu",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 288132.006698935,
      "curr_month_visits": 288132.006698935,
      "unique_users": 158277.022606924,
      "pages_per_visit": 2.95822710744849
    },
    {
      "global_rank": 139151,
      "category_rank": 121,
      "domain": "redrocksonline.com",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 677955.4158365,
      "curr_month_visits": 677955.4158365,
      "unique_users": 466224.340694177,
      "pages_per_visit": 1.89323284518226
    },
    {
      "global_rank": 156264,
      "category_rank": 121,
      "domain": "ju.mp",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 275281.137305669,
      "curr_month_visits": 275281.137305669,
      "unique_users": 131727.321305576,
      "pages_per_visit": 1.92778820190405
    },
    {
      "global_rank": 15323,
      "category_rank": 121,
      "domain": "oread8.net",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 1609285.53671051,
      "curr_month_visits": 1609285.53671051,
      "unique_users": 341422.674220196,
      "pages_per_visit": 12.6901282785788
    },
    {
      "global_rank": 9345,
      "category_rank": 121,
      "domain": "myjcom.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 7083650.58086834,
      "curr_month_visits": 7083650.58086834,
      "unique_users": 2660985.50478075,
      "pages_per_visit": 2.95110300003321
    },
    {
      "global_rank": 72297,
      "category_rank": 121,
      "domain": "twog.fr",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 977036.712400389,
      "curr_month_visits": 977036.712400389,
      "unique_users": 180910.54227819,
      "pages_per_visit": 2.96175313786058
    },
    {
      "global_rank": 2578,
      "category_rank": 121,
      "domain": "faselhds.care",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 40991415.8106362,
      "curr_month_visits": 40991415.8106362,
      "unique_users": 5501474.2900182,
      "pages_per_visit": 2.92685208978071
    },
    {
      "global_rank": 11605,
      "category_rank": 121,
      "domain": "utaten.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 6769068.86324839,
      "curr_month_visits": 6769068.86324839,
      "unique_users": 3599158.57944542,
      "pages_per_visit": 2.32130753764808
    },
    {
      "global_rank": 4231,
      "category_rank": 121,
      "domain": "novellive.app",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 17223724.9179004,
      "curr_month_visits": 17223724.9179004,
      "unique_users": 1414131.56722321,
      "pages_per_visit": 9.10635675898852
    },
    {
      "global_rank": 74493,
      "category_rank": 122,
      "domain": "anonimowe.pl",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1207920.21792757,
      "curr_month_visits": 1207920.21792757,
      "unique_users": 114145.262843348,
      "pages_per_visit": 2.4520071553176
    },
    {
      "global_rank": 4289,
      "category_rank": 122,
      "domain": "24-hd.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 13913956.5630265,
      "curr_month_visits": 13913956.5630265,
      "unique_users": 2694580.01114696,
      "pages_per_visit": 4.10627578421647
    },
    {
      "global_rank": 157146,
      "category_rank": 122,
      "domain": "sxsy03.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 159699.609770558,
      "curr_month_visits": 159699.609770558,
      "unique_users": 41015.7313531416,
      "pages_per_visit": 12.2795217503173
    },
    {
      "global_rank": 2628,
      "category_rank": 122,
      "domain": "theflixertv.to",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 25172976.9471379,
      "curr_month_visits": 25172976.9471379,
      "unique_users": 2887338.99083657,
      "pages_per_visit": 3.91449873050093
    },
    {
      "global_rank": 11625,
      "category_rank": 122,
      "domain": "radio.garden",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 5210021.63250467,
      "curr_month_visits": 5210021.63250467,
      "unique_users": 1618762.15104243,
      "pages_per_visit": 5.62319725839353
    },
    {
      "global_rank": 139496,
      "category_rank": 122,
      "domain": "bam.org",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 279033.391257121,
      "curr_month_visits": 279033.391257121,
      "unique_users": 134060.950537684,
      "pages_per_visit": 3.32812890661794
    },
    {
      "global_rank": 15529,
      "category_rank": 122,
      "domain": "fb2.top",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 4441625.5902355,
      "curr_month_visits": 4441625.5902355,
      "unique_users": 1481753.49812645,
      "pages_per_visit": 4.17191965335688
    },
    {
      "global_rank": 9383,
      "category_rank": 122,
      "domain": "gasengi.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 5648649.14882542,
      "curr_month_visits": 5648649.14882542,
      "unique_users": 371644.154043517,
      "pages_per_visit": 10.3749390098149
    },
    {
      "global_rank": 4291,
      "category_rank": 123,
      "domain": "mangatoto.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 9549840.98713635,
      "curr_month_visits": 9549840.98713635,
      "unique_users": 1632529.50490849,
      "pages_per_visit": 10.5690034785345
    },
    {
      "global_rank": 157630,
      "category_rank": 123,
      "domain": "therookies.co",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 298034.858551226,
      "curr_month_visits": 298034.858551226,
      "unique_users": 148706.663461756,
      "pages_per_visit": 2.98433408789555
    },
    {
      "global_rank": 11805,
      "category_rank": 123,
      "domain": "pagalworld.us",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 5169956.8267244,
      "curr_month_visits": 5169956.8267244,
      "unique_users": 3392421.02956946,
      "pages_per_visit": 4.53854957090002
    },
    {
      "global_rank": 74500,
      "category_rank": 123,
      "domain": "knife.media",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1155855.72306783,
      "curr_month_visits": 1155855.72306783,
      "unique_users": 654905.524486333,
      "pages_per_visit": 1.6041878865279
    },
    {
      "global_rank": 15560,
      "category_rank": 123,
      "domain": "thestorygraph.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 3275873.66416317,
      "curr_month_visits": 3275873.66416317,
      "unique_users": 1099269.26305678,
      "pages_per_visit": 5.61049757567258
    },
    {
      "global_rank": 141469,
      "category_rank": 123,
      "domain": "comedytheatre.ru",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 304439.682583021,
      "curr_month_visits": 304439.682583021,
      "unique_users": 156549.836474699,
      "pages_per_visit": 1.93226873149904
    },
    {
      "global_rank": 2636,
      "category_rank": 123,
      "domain": "tv-asahi.co.jp",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 26110061.6427173,
      "curr_month_visits": 26110061.6427173,
      "unique_users": 15147168.1391514,
      "pages_per_visit": 2.25434039680419
    },
    {
      "global_rank": 9419,
      "category_rank": 123,
      "domain": "port.hu",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 6899841.07956026,
      "curr_month_visits": 6899841.07956026,
      "unique_users": 1937819.86162644,
      "pages_per_visit": 3.37296480696085
    },
    {
      "global_rank": 160864,
      "category_rank": 124,
      "domain": "registroelettronico.cloud",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 239960.469295174,
      "curr_month_visits": 239960.469295174,
      "unique_users": 33888.6868930744,
      "pages_per_visit": 5.41225903545257
    },
    {
      "global_rank": 15811,
      "category_rank": 124,
      "domain": "ddxs.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 2313920.66466033,
      "curr_month_visits": 2313920.66466033,
      "unique_users": 391293.007049434,
      "pages_per_visit": 13.674717163963
    },
    {
      "global_rank": 4367,
      "category_rank": 124,
      "domain": "eternalmangas.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 9287046.07576361,
      "curr_month_visits": 9287046.07576361,
      "unique_users": 1129998.33744831,
      "pages_per_visit": 4.71401178495035
    },
    {
      "global_rank": 75926,
      "category_rank": 124,
      "domain": "salda.ws",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 927736.750916094,
      "curr_month_visits": 927736.750916094,
      "unique_users": 585091.921715844,
      "pages_per_visit": 1.97083488200752
    },
    {
      "global_rank": 9634,
      "category_rank": 124,
      "domain": "observatoriodocinema.uol.com.br",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 10733537.9561154,
      "curr_month_visits": 10733537.9561154,
      "unique_users": 2300012.40391935,
      "pages_per_visit": 1.30089079936884
    },
    {
      "global_rank": 143092,
      "category_rank": 124,
      "domain": "roundhouse.org.uk",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 270109.005947072,
      "curr_month_visits": 270109.005947072,
      "unique_users": 136123.884591594,
      "pages_per_visit": 3.75796798661579
    },
    {
      "global_rank": 2672,
      "category_rank": 124,
      "domain": "watchseries.bar",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 26397454.1348853,
      "curr_month_visits": 26397454.1348853,
      "unique_users": 4098387.60689451,
      "pages_per_visit": 2.97556099857748
    },
    {
      "global_rank": 12254,
      "category_rank": 124,
      "domain": "ragnet.co.jp",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 5287010.06435108,
      "curr_month_visits": 5287010.06435108,
      "unique_users": 3610989.97613494,
      "pages_per_visit": 3.29356370959443
    },
    {
      "global_rank": 143176,
      "category_rank": 125,
      "domain": "bunkamura.co.jp",
      "category": "Arts_and_Entertainment/Performing_Arts",
      "avg_month_visits": 341965.583169669,
      "curr_month_visits": 341965.583169669,
      "unique_users": 194902.802734215,
      "pages_per_visit": 3.22320983195638
    },
    {
      "global_rank": 12273,
      "category_rank": 125,
      "domain": "beatport.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 4063978.30631192,
      "curr_month_visits": 4063978.30631192,
      "unique_users": 1382764.59545836,
      "pages_per_visit": 6.11422967457924
    },
    {
      "global_rank": 15909,
      "category_rank": 125,
      "domain": "reedsy.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 3791195.70005895,
      "curr_month_visits": 3791195.70005895,
      "unique_users": 1656832.45300541,
      "pages_per_visit": 3.92828180897342
    },
    {
      "global_rank": 2751,
      "category_rank": 125,
      "domain": "iprima.cz",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 23802716.2814238,
      "curr_month_visits": 23802716.2814238,
      "unique_users": 5981824.01716506,
      "pages_per_visit": 2.81379391606718
    },
    {
      "global_rank": 76031,
      "category_rank": 125,
      "domain": "facciabuco.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 1040178.77538619,
      "curr_month_visits": 1040178.77538619,
      "unique_users": 224013.418183484,
      "pages_per_visit": 3.80363477777678
    },
    {
      "global_rank": 161704,
      "category_rank": 125,
      "domain": "pasundanekspres.id",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 216365.229266394,
      "curr_month_visits": 216365.229266394,
      "unique_users": 134307.970724949,
      "pages_per_visit": 1.63162955075029
    },
    {
      "global_rank": 9778,
      "category_rank": 125,
      "domain": "shogakukan.co.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 6865714.09168097,
      "curr_month_visits": 6865714.09168097,
      "unique_users": 4210590.10256231,
      "pages_per_visit": 3.15567595322428
    },
    {
      "global_rank": 4369,
      "category_rank": 125,
      "domain": "mangakoma01.net",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 16075787.3763666,
      "curr_month_visits": 16075787.3763666,
      "unique_users": 1574410.73344681,
      "pages_per_visit": 4.57355310572136
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
        {arts_and_entertainment.map((item, index) => (
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