
import {Top_Website_Categories} from '@/lib/top_websites';
export const runtime = "edge";

export const metadata = {
  title: 'Top  Websites Ranking in the World, January 2025',
  description: 'The top 1000 most visited  websites in the World by Ahrefs organic search traffic estimates. Updated monthly. January 2025',
}


export default function TopWebsite() {

  const global_rank_all = [
    {
      "global_rank": 1,
      "domain": "google.com",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 83031760828.1841,
      "curr_month_visits": 83031760828.1841,
      "unique_users": 3167055371.30663,
      "pages_per_visit": 8.18125630079051
    },
    {
      "global_rank": 2,
      "domain": "youtube.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 28548584475.1491,
      "curr_month_visits": 28548584475.1491,
      "unique_users": 1726530275.90855,
      "pages_per_visit": 10.90407298755
    },
    {
      "global_rank": 3,
      "domain": "facebook.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 12255212858.4894,
      "curr_month_visits": 12255212858.4894,
      "unique_users": 1044936236.29721,
      "pages_per_visit": 11.6633803249807
    },
    {
      "global_rank": 4,
      "domain": "instagram.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 5883323985.96745,
      "curr_month_visits": 5883323985.96745,
      "unique_users": 930794196.309991,
      "pages_per_visit": 11.5968271381245
    },
    {
      "global_rank": 5,
      "domain": "x.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 4442070868.03339,
      "curr_month_visits": 4442070868.03339,
      "unique_users": 448279381.693166,
      "pages_per_visit": 12.1978200019982
    },
    {
      "global_rank": 6,
      "domain": "whatsapp.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 4552556385.2281,
      "curr_month_visits": 4552556385.2281,
      "unique_users": 596386130.855537,
      "pages_per_visit": 8.27156687680346
    },
    {
      "global_rank": 7,
      "domain": "amazon.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 2693005261.65523,
      "curr_month_visits": 2693005261.65523,
      "unique_users": 514500833.410255,
      "pages_per_visit": 9.1266379812669
    },
    {
      "global_rank": 8,
      "domain": "wikipedia.org",
      "category": "All",
      "avg_month_visits": 3933425871.4513,
      "curr_month_visits": 3933425871.4513,
      "unique_users": 907894223.017558,
      "pages_per_visit": 3.1060500967498
    },
    {
      "global_rank": 9,
      "domain": "reddit.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 3503703059.19359,
      "curr_month_visits": 3503703059.19359,
      "unique_users": 642003452.121363,
      "pages_per_visit": 4.60308315015688
    },
    {
      "global_rank": 10,
      "domain": "yahoo.co.jp",
      "category": "All",
      "avg_month_visits": 3215535181.2165,
      "curr_month_visits": 3215535181.2165,
      "unique_users": 141535291.593639,
      "pages_per_visit": 7.48975517260789
    },
    {
      "global_rank": 11,
      "domain": "yandex.ru",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 2796617509.75704,
      "curr_month_visits": 2796617509.75704,
      "unique_users": 179543273.392549,
      "pages_per_visit": 8.36689733883158
    },
    {
      "global_rank": 12,
      "domain": "yahoo.com",
      "category": "All",
      "avg_month_visits": 3450601359.85227,
      "curr_month_visits": 3450601359.85227,
      "unique_users": 402836982.358684,
      "pages_per_visit": 5.2268889540358
    },
    {
      "global_rank": 13,
      "domain": "chatgpt.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 3525493749.38801,
      "curr_month_visits": 3525493749.38801,
      "unique_users": 310132633.058912,
      "pages_per_visit": 3.67184775904401
    },
    {
      "global_rank": 14,
      "domain": "baidu.com",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 2403435984.26671,
      "curr_month_visits": 2403435984.26671,
      "unique_users": 137697501.261984,
      "pages_per_visit": 8.35695784720615
    },
    {
      "global_rank": 15,
      "domain": "tiktok.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 2203521610.88966,
      "curr_month_visits": 2203521610.88966,
      "unique_users": 743019325.006741,
      "pages_per_visit": 4.95035867161551
    },
    {
      "global_rank": 16,
      "domain": "pornhub.com",
      "category": "Adult",
      "avg_month_visits": 1732768279.36556,
      "curr_month_visits": 1732768279.36556,
      "unique_users": 283839386.236562,
      "pages_per_visit": 7.6118586885613
    },
    {
      "global_rank": 17,
      "domain": "linkedin.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 1700062042.56749,
      "curr_month_visits": 1700062042.56749,
      "unique_users": 318265771.175383,
      "pages_per_visit": 7.78276331905713
    },
    {
      "global_rank": 18,
      "domain": "xvideos.com",
      "category": "Adult",
      "avg_month_visits": 1295672336.47136,
      "curr_month_visits": 1295672336.47136,
      "unique_users": 196001523.691863,
      "pages_per_visit": 9.47220178550455
    },
    {
      "global_rank": 19,
      "domain": "naver.com",
      "category": "All",
      "avg_month_visits": 1582216978.22371,
      "curr_month_visits": 1582216978.22371,
      "unique_users": 54285909.3605281,
      "pages_per_visit": 11.216995607354
    },
    {
      "global_rank": 20,
      "domain": "live.com",
      "category": "Computers_Electronics_and_Technology/Email",
      "avg_month_visits": 1626175466.34285,
      "curr_month_visits": 1626175466.34285,
      "unique_users": 239887294.108614,
      "pages_per_visit": 6.89674140661984
    },
    {
      "global_rank": 21,
      "domain": "bing.com",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 1779493982.00365,
      "curr_month_visits": 1779493982.00365,
      "unique_users": 217528665.346985,
      "pages_per_visit": 5.12882267332156
    },
    {
      "global_rank": 22,
      "domain": "office.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 1606228446.82335,
      "curr_month_visits": 1606228446.82335,
      "unique_users": 157280686.703488,
      "pages_per_visit": 6.76658797190773
    },
    {
      "global_rank": 23,
      "domain": "vk.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 1145867366.14745,
      "curr_month_visits": 1145867366.14745,
      "unique_users": 108718972.392342,
      "pages_per_visit": 11.9527426496485
    },
    {
      "global_rank": 24,
      "domain": "bilibili.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 1249983443.24057,
      "curr_month_visits": 1249983443.24057,
      "unique_users": 71253902.3591465,
      "pages_per_visit": 13.3267672680198
    },
    {
      "global_rank": 25,
      "domain": "pinterest.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 1169876013.97518,
      "curr_month_visits": 1169876013.97518,
      "unique_users": 368297409.462943,
      "pages_per_visit": 6.9241645445544
    },
    {
      "global_rank": 26,
      "domain": "netflix.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 1826923758.61596,
      "curr_month_visits": 1826923758.61596,
      "unique_users": 252071821.765411,
      "pages_per_visit": 3.74522584939886
    },
    {
      "global_rank": 27,
      "domain": "xhamster.com",
      "category": "Adult",
      "avg_month_visits": 984325255.290028,
      "curr_month_visits": 984325255.290028,
      "unique_users": 209034000.102715,
      "pages_per_visit": 7.45754934310465
    },
    {
      "global_rank": 28,
      "domain": "microsoftonline.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 1821184176.99952,
      "curr_month_visits": 1821184176.99952,
      "unique_users": 286148664.013264,
      "pages_per_visit": 2.64855595682426
    },
    {
      "global_rank": 29,
      "domain": "xnxx.com",
      "category": "Adult",
      "avg_month_visits": 780748913.354672,
      "curr_month_visits": 780748913.354672,
      "unique_users": 136766709.819272,
      "pages_per_visit": 10.5603924397549
    },
    {
      "global_rank": 30,
      "domain": "dzen.ru",
      "category": "Community_and_Society/Community_and_Society",
      "avg_month_visits": 1577987332.57421,
      "curr_month_visits": 1577987332.57421,
      "unique_users": 213214015.200675,
      "pages_per_visit": 4.20856482364415
    },
    {
      "global_rank": 31,
      "domain": "mail.ru",
      "category": "Computers_Electronics_and_Technology/Email",
      "avg_month_visits": 998369339.965447,
      "curr_month_visits": 998369339.965447,
      "unique_users": 107913541.214083,
      "pages_per_visit": 9.02479919259209
    },
    {
      "global_rank": 32,
      "domain": "microsoft.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 1276326201.3721,
      "curr_month_visits": 1276326201.3721,
      "unique_users": 447457599.037091,
      "pages_per_visit": 3.31917614361172
    },
    {
      "global_rank": 33,
      "domain": "news.yahoo.co.jp",
      "category": "All",
      "avg_month_visits": 1116463752.06656,
      "curr_month_visits": 1116463752.06656,
      "unique_users": 68265022.8313024,
      "pages_per_visit": 4.71158993306897
    },
    {
      "global_rank": 34,
      "domain": "canva.com",
      "category": "Computers_Electronics_and_Technology/Graphics_Multimedia_and_Web_Design",
      "avg_month_visits": 771096743.852023,
      "curr_month_visits": 771096743.852023,
      "unique_users": 158603628.82135,
      "pages_per_visit": 6.710691538643
    },
    {
      "global_rank": 35,
      "domain": "sharepoint.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 923659232.028496,
      "curr_month_visits": 923659232.028496,
      "unique_users": 104648946.290118,
      "pages_per_visit": 6.14865316389122
    },
    {
      "global_rank": 36,
      "domain": "xhamster43.desi",
      "category": "All",
      "avg_month_visits": 196335245.954777,
      "curr_month_visits": 196335245.954777,
      "unique_users": 37686479.815306,
      "pages_per_visit": 8.92629630221685
    },
    {
      "global_rank": 37,
      "domain": "temu.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 667652568.925775,
      "curr_month_visits": 667652568.925775,
      "unique_users": 254211018.146827,
      "pages_per_visit": 6.72472442222022
    },
    {
      "global_rank": 38,
      "domain": "twitch.tv",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 1144495774.35325,
      "curr_month_visits": 1144495774.35325,
      "unique_users": 77587834.1727267,
      "pages_per_visit": 4.49957344458633
    },
    {
      "global_rank": 39,
      "domain": "aliexpress.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 621426116.252432,
      "curr_month_visits": 621426116.252432,
      "unique_users": 222289059.29671,
      "pages_per_visit": 5.07077182508291
    },
    {
      "global_rank": 40,
      "domain": "eporner.com",
      "category": "Adult",
      "avg_month_visits": 512548430.694049,
      "curr_month_visits": 512548430.694049,
      "unique_users": 163886279.711445,
      "pages_per_visit": 8.27463774500267
    },
    {
      "global_rank": 41,
      "domain": "fandom.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 818427569.823578,
      "curr_month_visits": 818427569.823578,
      "unique_users": 181523942.247102,
      "pages_per_visit": 4.1924033112278
    },
    {
      "global_rank": 42,
      "domain": "chaturbate.com",
      "category": "Adult",
      "avg_month_visits": 516349947.80605,
      "curr_month_visits": 516349947.80605,
      "unique_users": 111105380.02962,
      "pages_per_visit": 9.32694716284404
    },
    {
      "global_rank": 43,
      "domain": "duckduckgo.com",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 773156533.032613,
      "curr_month_visits": 773156533.032613,
      "unique_users": 43872827.0683478,
      "pages_per_visit": 6.30009336239209
    },
    {
      "global_rank": 44,
      "domain": "stripchat.com",
      "category": "Adult",
      "avg_month_visits": 626893150.690341,
      "curr_month_visits": 626893150.690341,
      "unique_users": 221189504.94996,
      "pages_per_visit": 5.93665629496615
    },
    {
      "global_rank": 45,
      "domain": "ebay.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 602814646.882731,
      "curr_month_visits": 602814646.882731,
      "unique_users": 155894311.201089,
      "pages_per_visit": 6.933224646625
    },
    {
      "global_rank": 46,
      "domain": "amazon.co.jp",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 548766537.273387,
      "curr_month_visits": 548766537.273387,
      "unique_users": 82643079.4580994,
      "pages_per_visit": 7.51557824526947
    },
    {
      "global_rank": 47,
      "domain": "amazon.de",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 441143271.817091,
      "curr_month_visits": 441143271.817091,
      "unique_users": 76045290.5994107,
      "pages_per_visit": 9.30099401840862
    },
    {
      "global_rank": 48,
      "domain": "zonatmo.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 348137599.244655,
      "curr_month_visits": 348137599.244655,
      "unique_users": 18734871.4556042,
      "pages_per_visit": 10.9158233666102
    },
    {
      "global_rank": 49,
      "domain": "samsung.com",
      "category": "Computers_Electronics_and_Technology/Consumer_Electronics",
      "avg_month_visits": 886128753.103057,
      "curr_month_visits": 886128753.103057,
      "unique_users": 298850322.602824,
      "pages_per_visit": 2.46544391090079
    },
    {
      "global_rank": 50,
      "domain": "twitter.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 649513520.579739,
      "curr_month_visits": 649513520.579739,
      "unique_users": 166803600.617561,
      "pages_per_visit": 6.06835580475139
    },
    {
      "global_rank": 51,
      "domain": "ozon.ru",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 419587382.54893,
      "curr_month_visits": 419587382.54893,
      "unique_users": 100895339.704235,
      "pages_per_visit": 11.2070955173719
    },
    {
      "global_rank": 52,
      "domain": "telegram.org",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 433856651.395276,
      "curr_month_visits": 433856651.395276,
      "unique_users": 65432528.5508621,
      "pages_per_visit": 14.7794926928895
    },
    {
      "global_rank": 53,
      "domain": "discord.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 546872998.911234,
      "curr_month_visits": 546872998.911234,
      "unique_users": 88121986.2794847,
      "pages_per_visit": 9.35821971758664
    },
    {
      "global_rank": 54,
      "domain": "paypal.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 511497490.545691,
      "curr_month_visits": 511497490.545691,
      "unique_users": 205914272.462865,
      "pages_per_visit": 4.73612460920878
    },
    {
      "global_rank": 55,
      "domain": "msn.com",
      "category": "All",
      "avg_month_visits": 603018934.454002,
      "curr_month_visits": 603018934.454002,
      "unique_users": 125098617.075345,
      "pages_per_visit": 4.94702513683162
    },
    {
      "global_rank": 56,
      "domain": "rakuten.co.jp",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 463711112.590966,
      "curr_month_visits": 463711112.590966,
      "unique_users": 67842540.8223808,
      "pages_per_visit": 7.49689784567187
    },
    {
      "global_rank": 57,
      "domain": "walmart.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 459891259.26575,
      "curr_month_visits": 459891259.26575,
      "unique_users": 162773480.728843,
      "pages_per_visit": 4.58935271401806
    },
    {
      "global_rank": 58,
      "domain": "booking.com",
      "category": "All",
      "avg_month_visits": 477430635.822282,
      "curr_month_visits": 477430635.822282,
      "unique_users": 194027714.742191,
      "pages_per_visit": 7.38177711193126
    },
    {
      "global_rank": 59,
      "domain": "spankbang.com",
      "category": "Adult",
      "avg_month_visits": 420372298.504601,
      "curr_month_visits": 420372298.504601,
      "unique_users": 99222451.8908299,
      "pages_per_visit": 8.14603147206115
    },
    {
      "global_rank": 60,
      "domain": "google.co.jp",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 409651823.284585,
      "curr_month_visits": 409651823.284585,
      "unique_users": 44232454.3458999,
      "pages_per_visit": 12.2756552716542
    },
    {
      "global_rank": 61,
      "domain": "roblox.com",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 579896828.140117,
      "curr_month_visits": 579896828.140117,
      "unique_users": 44728141.6732717,
      "pages_per_visit": 7.74372868144378
    },
    {
      "global_rank": 62,
      "domain": "missav.com",
      "category": "Adult",
      "avg_month_visits": 297330347.235224,
      "curr_month_visits": 297330347.235224,
      "unique_users": 42982850.0579178,
      "pages_per_visit": 15.1568939099941
    },
    {
      "global_rank": 63,
      "domain": "t.me",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 717937795.424078,
      "curr_month_visits": 717937795.424078,
      "unique_users": 249001151.197185,
      "pages_per_visit": 2.50839945760414
    },
    {
      "global_rank": 64,
      "domain": "spotify.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 502186518.61363,
      "curr_month_visits": 502186518.61363,
      "unique_users": 157322934.550775,
      "pages_per_visit": 5.8041325885937
    },
    {
      "global_rank": 65,
      "domain": "wildberries.ru",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 346783081.806122,
      "curr_month_visits": 346783081.806122,
      "unique_users": 53984623.202456,
      "pages_per_visit": 13.113642486425
    },
    {
      "global_rank": 66,
      "domain": "amazon.co.uk",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 394439203.814288,
      "curr_month_visits": 394439203.814288,
      "unique_users": 80847687.4050535,
      "pages_per_visit": 7.93836111559504
    },
    {
      "global_rank": 67,
      "domain": "pari-match-in.com",
      "category": "Gambling/Sports_Betting",
      "avg_month_visits": 391339237.007977,
      "curr_month_visits": 391339237.007977,
      "unique_users": 119946091.195003,
      "pages_per_visit": 2.11093937441776
    },
    {
      "global_rank": 68,
      "domain": "google.de",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 449189975.290877,
      "curr_month_visits": 449189975.290877,
      "unique_users": 40383523.5268511,
      "pages_per_visit": 9.77721968320748
    },
    {
      "global_rank": 69,
      "domain": "etsy.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 424882280.830648,
      "curr_month_visits": 424882280.830648,
      "unique_users": 167816169.732124,
      "pages_per_visit": 6.08132445937648
    },
    {
      "global_rank": 70,
      "domain": "amazon.in",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 457433308.242207,
      "curr_month_visits": 457433308.242207,
      "unique_users": 168471193.47131,
      "pages_per_visit": 6.98806637228757
    },
    {
      "global_rank": 71,
      "domain": "zillow.com",
      "category": "Business_and_Consumer_Services/Real_Estate",
      "avg_month_visits": 318318307.011988,
      "curr_month_visits": 318318307.011988,
      "unique_users": 93770319.8052772,
      "pages_per_visit": 13.2558559751443
    },
    {
      "global_rank": 72,
      "domain": "github.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 499660903.33284,
      "curr_month_visits": 499660903.33284,
      "unique_users": 118702465.374697,
      "pages_per_visit": 5.73166873174596
    },
    {
      "global_rank": 73,
      "domain": "quora.com",
      "category": "All",
      "avg_month_visits": 720579941.945205,
      "curr_month_visits": 720579941.945205,
      "unique_users": 305909807.078215,
      "pages_per_visit": 2.09736361597194
    },
    {
      "global_rank": 74,
      "domain": "globo.com",
      "category": "All",
      "avg_month_visits": 839106853.312655,
      "curr_month_visits": 839106853.312655,
      "unique_users": 100796710.617578,
      "pages_per_visit": 2.33179849206577
    },
    {
      "global_rank": 75,
      "domain": "imdb.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 485115819.893933,
      "curr_month_visits": 485115819.893933,
      "unique_users": 183438123.190091,
      "pages_per_visit": 4.29226512798109
    },
    {
      "global_rank": 76,
      "domain": "zoom.us",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 651880803.463366,
      "curr_month_visits": 651880803.463366,
      "unique_users": 156498266.862325,
      "pages_per_visit": 3.07091395580112
    },
    {
      "global_rank": 77,
      "domain": "indeed.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 387328596.067381,
      "curr_month_visits": 387328596.067381,
      "unique_users": 111139620.100032,
      "pages_per_visit": 8.5410396788851
    },
    {
      "global_rank": 78,
      "domain": "weather.com",
      "category": "All",
      "avg_month_visits": 788474574.67335,
      "curr_month_visits": 788474574.67335,
      "unique_users": 229979473.824713,
      "pages_per_visit": 1.78672684741184
    },
    {
      "global_rank": 79,
      "domain": "ok.ru",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 402460099.651931,
      "curr_month_visits": 402460099.651931,
      "unique_users": 41449629.7845235,
      "pages_per_visit": 9.02279108887544
    },
    {
      "global_rank": 80,
      "domain": "daum.net",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 413697653.623282,
      "curr_month_visits": 413697653.623282,
      "unique_users": 30370523.8132715,
      "pages_per_visit": 9.45275100479893
    },
    {
      "global_rank": 81,
      "domain": "apple.com",
      "category": "Computers_Electronics_and_Technology/Consumer_Electronics",
      "avg_month_visits": 522426424.430446,
      "curr_month_visits": 522426424.430446,
      "unique_users": 269371497.036135,
      "pages_per_visit": 3.22004829810255
    },
    {
      "global_rank": 82,
      "domain": "nytimes.com",
      "category": "All",
      "avg_month_visits": 622257747.193204,
      "curr_month_visits": 622257747.193204,
      "unique_users": 154757497.179511,
      "pages_per_visit": 2.76221970831594
    },
    {
      "global_rank": 83,
      "domain": "avito.ru",
      "category": "E-commerce_and_Shopping/Classifieds",
      "avg_month_visits": 318726573.572633,
      "curr_month_visits": 318726573.572633,
      "unique_users": 41636552.5027702,
      "pages_per_visit": 12.2849777953082
    },
    {
      "global_rank": 84,
      "domain": "tradingview.com",
      "category": "Finance/Investing",
      "avg_month_visits": 200820271.162713,
      "curr_month_visits": 200820271.162713,
      "unique_users": 23277411.4344402,
      "pages_per_visit": 27.5374468590287
    },
    {
      "global_rank": 85,
      "domain": "cnn.com",
      "category": "All",
      "avg_month_visits": 609447674.961061,
      "curr_month_visits": 609447674.961061,
      "unique_users": 132235903.84158,
      "pages_per_visit": 2.22662993955071
    },
    {
      "global_rank": 86,
      "domain": "espn.com",
      "category": "All",
      "avg_month_visits": 563857742.980836,
      "curr_month_visits": 563857742.980836,
      "unique_users": 76410947.6750017,
      "pages_per_visit": 3.81035173955586
    },
    {
      "global_rank": 87,
      "domain": "docomo.ne.jp",
      "category": "Computers_Electronics_and_Technology/Telecommunications",
      "avg_month_visits": 535190090.548532,
      "curr_month_visits": 535190090.548532,
      "unique_users": 30998004.5836734,
      "pages_per_visit": 4.93331245158185
    },
    {
      "global_rank": 88,
      "domain": "instructure.com",
      "category": "All",
      "avg_month_visits": 469000116.118247,
      "curr_month_visits": 469000116.118247,
      "unique_users": 25962629.7498777,
      "pages_per_visit": 7.66182432198976
    },
    {
      "global_rank": 89,
      "domain": "bbc.co.uk",
      "category": "All",
      "avg_month_visits": 555036046.435217,
      "curr_month_visits": 555036046.435217,
      "unique_users": 66273437.8484868,
      "pages_per_visit": 3.34545056422664
    },
    {
      "global_rank": 90,
      "domain": "ya.ru",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 455795296.639457,
      "curr_month_visits": 455795296.639457,
      "unique_users": 51319582.8618712,
      "pages_per_visit": 4.85494014506066
    },
    {
      "global_rank": 91,
      "domain": "google.com.br",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 355179525.795232,
      "curr_month_visits": 355179525.795232,
      "unique_users": 38936335.5207987,
      "pages_per_visit": 7.68929015900904
    },
    {
      "global_rank": 92,
      "domain": "openai.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 541212425.993007,
      "curr_month_visits": 541212425.993007,
      "unique_users": 204258370.988547,
      "pages_per_visit": 2.16552405649967
    },
    {
      "global_rank": 93,
      "domain": "music.youtube.com",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 281961056.821595,
      "curr_month_visits": 281961056.821595,
      "unique_users": 32254332.6196033,
      "pages_per_visit": 11.3928354908095
    },
    {
      "global_rank": 94,
      "domain": "xnxx.health",
      "category": "Adult",
      "avg_month_visits": 309363457.893322,
      "curr_month_visits": 309363457.893322,
      "unique_users": 94739376.4396754,
      "pages_per_visit": 10.354726699614
    },
    {
      "global_rank": 95,
      "domain": "qq.com",
      "category": "All",
      "avg_month_visits": 444577948.006064,
      "curr_month_visits": 444577948.006064,
      "unique_users": 79209428.5642081,
      "pages_per_visit": 3.75818907669421
    },
    {
      "global_rank": 96,
      "domain": "pixiv.net",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 366016009.996839,
      "curr_month_visits": 366016009.996839,
      "unique_users": 29577481.2221406,
      "pages_per_visit": 7.42871698409541
    },
    {
      "global_rank": 97,
      "domain": "messenger.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 285600489.858342,
      "curr_month_visits": 285600489.858342,
      "unique_users": 23687803.6612896,
      "pages_per_visit": 13.4168223792925
    },
    {
      "global_rank": 98,
      "domain": "faphouse.com",
      "category": "Adult",
      "avg_month_visits": 385484896.33673,
      "curr_month_visits": 385484896.33673,
      "unique_users": 170591988.330697,
      "pages_per_visit": 2.8284170697117
    },
    {
      "global_rank": 99,
      "domain": "xhamster.desi",
      "category": "Adult",
      "avg_month_visits": 313728144.290329,
      "curr_month_visits": 313728144.290329,
      "unique_users": 96810362.3091453,
      "pages_per_visit": 4.95708262003033
    },
    {
      "global_rank": 100,
      "domain": "bbc.com",
      "category": "All",
      "avg_month_visits": 479895094.698125,
      "curr_month_visits": 479895094.698125,
      "unique_users": 148415573.298634,
      "pages_per_visit": 2.29109510149256
    },
    {
      "global_rank": 101,
      "domain": "google.it",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 298580889.448495,
      "curr_month_visits": 298580889.448495,
      "unique_users": 30444459.441373,
      "pages_per_visit": 9.3419214809425
    },
    {
      "global_rank": 102,
      "domain": "google.co.uk",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 300275250.440031,
      "curr_month_visits": 300275250.440031,
      "unique_users": 35087576.610009,
      "pages_per_visit": 8.52382889557001
    },
    {
      "global_rank": 103,
      "domain": "adobe.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 342758135.97225,
      "curr_month_visits": 342758135.97225,
      "unique_users": 157488504.173663,
      "pages_per_visit": 4.36234333173848
    },
    {
      "global_rank": 104,
      "domain": "google.fr",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 274560012.471393,
      "curr_month_visits": 274560012.471393,
      "unique_users": 33108766.757812,
      "pages_per_visit": 9.65561860366851
    },
    {
      "global_rank": 105,
      "domain": "amazon.ca",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 208666880.180291,
      "curr_month_visits": 208666880.180291,
      "unique_users": 42996771.6968459,
      "pages_per_visit": 10.182469047909
    },
    {
      "global_rank": 106,
      "domain": "amazon.it",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 214879853.077226,
      "curr_month_visits": 214879853.077226,
      "unique_users": 45480395.616376,
      "pages_per_visit": 8.99150321062228
    },
    {
      "global_rank": 107,
      "domain": "mercadolivre.com.br",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 239147544.918394,
      "curr_month_visits": 239147544.918394,
      "unique_users": 55727175.6002,
      "pages_per_visit": 8.45717098981302
    },
    {
      "global_rank": 108,
      "domain": "craigslist.org",
      "category": "E-commerce_and_Shopping/Classifieds",
      "avg_month_visits": 144920238.527649,
      "curr_month_visits": 144920238.527649,
      "unique_users": 26067646.3790884,
      "pages_per_visit": 28.5287855971619
    },
    {
      "global_rank": 110,
      "domain": "douyin.com",
      "category": "All",
      "avg_month_visits": 264419221.497001,
      "curr_month_visits": 264419221.497001,
      "unique_users": 35790448.0896924,
      "pages_per_visit": 9.5073298929501
    },
    {
      "global_rank": 111,
      "domain": "amazon.fr",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 201030166.238255,
      "curr_month_visits": 201030166.238255,
      "unique_users": 51040364.0697761,
      "pages_per_visit": 8.36350475661366
    },
    {
      "global_rank": 112,
      "domain": "coupang.com",
      "category": "E-commerce_and_Shopping/E-commerce_and_Shopping",
      "avg_month_visits": 259987484.487388,
      "curr_month_visits": 259987484.487388,
      "unique_users": 67472981.7623716,
      "pages_per_visit": 6.16018590500875
    },
    {
      "global_rank": 113,
      "domain": "dcinside.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 212344858.802398,
      "curr_month_visits": 212344858.802398,
      "unique_users": 16141346.8219884,
      "pages_per_visit": 15.1446452162942
    },
    {
      "global_rank": 114,
      "domain": "uol.com.br",
      "category": "All",
      "avg_month_visits": 365750809.708351,
      "curr_month_visits": 365750809.708351,
      "unique_users": 57795556.2049097,
      "pages_per_visit": 3.83842295918233
    },
    {
      "global_rank": 115,
      "domain": "office365.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 329056491.687922,
      "curr_month_visits": 329056491.687922,
      "unique_users": 35157700.6555462,
      "pages_per_visit": 5.91555277679427
    },
    {
      "global_rank": 116,
      "domain": "dmm.co.jp",
      "category": "Adult",
      "avg_month_visits": 208902500.997388,
      "curr_month_visits": 208902500.997388,
      "unique_users": 32928407.6854026,
      "pages_per_visit": 9.49777259284079
    },
    {
      "global_rank": 117,
      "domain": "aol.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 275263508.973118,
      "curr_month_visits": 275263508.973118,
      "unique_users": 27417382.1590343,
      "pages_per_visit": 8.15832720710842
    },
    {
      "global_rank": 118,
      "domain": "disneyplus.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 335864474.433682,
      "curr_month_visits": 335864474.433682,
      "unique_users": 76350233.7101566,
      "pages_per_visit": 4.51262059908063
    },
    {
      "global_rank": 119,
      "domain": "asuracomic.net",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 419546155.450766,
      "curr_month_visits": 419546155.450766,
      "unique_users": 12314690.5964065,
      "pages_per_visit": 4.61045188363136
    },
    {
      "global_rank": 120,
      "domain": "hianime.to",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 332611883.835983,
      "curr_month_visits": 332611883.835983,
      "unique_users": 28535449.0781648,
      "pages_per_visit": 5.21023628151118
    },
    {
      "global_rank": 121,
      "domain": "taobao.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 195741219.016881,
      "curr_month_visits": 195741219.016881,
      "unique_users": 38226639.6574171,
      "pages_per_visit": 10.9456156060482
    },
    {
      "global_rank": 122,
      "domain": "kwai-video.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 571007357.588809,
      "curr_month_visits": 571007357.588809,
      "unique_users": 56501330.460474,
      "pages_per_visit": 2.07994141020585
    },
    {
      "global_rank": 123,
      "domain": "shein.com",
      "category": "All",
      "avg_month_visits": 208778401.629143,
      "curr_month_visits": 208778401.629143,
      "unique_users": 85897420.291495,
      "pages_per_visit": 6.90566609378825
    },
    {
      "global_rank": 124,
      "domain": "allegro.pl",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 193328384.890896,
      "curr_month_visits": 193328384.890896,
      "unique_users": 29546462.7393509,
      "pages_per_visit": 9.69738577536759
    },
    {
      "global_rank": 125,
      "domain": "ikea.com",
      "category": "Home_and_Garden/Furniture",
      "avg_month_visits": 218514149.718807,
      "curr_month_visits": 218514149.718807,
      "unique_users": 90551155.8560088,
      "pages_per_visit": 6.59938438704102
    },
    {
      "global_rank": 126,
      "domain": "ilovepdf.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 273203939.880182,
      "curr_month_visits": 273203939.880182,
      "unique_users": 87983595.6110738,
      "pages_per_visit": 4.68657631448424
    },
    {
      "global_rank": 127,
      "domain": "xvv1deos.com",
      "category": "Adult",
      "avg_month_visits": 207369657.937178,
      "curr_month_visits": 207369657.937178,
      "unique_users": 80563918.0299615,
      "pages_per_visit": 8.09494851939916
    },
    {
      "global_rank": 128,
      "domain": "foxnews.com",
      "category": "All",
      "avg_month_visits": 307004697.730473,
      "curr_month_visits": 307004697.730473,
      "unique_users": 49531036.4183083,
      "pages_per_visit": 3.65338351472776
    },
    {
      "global_rank": 129,
      "domain": "wp.pl",
      "category": "All",
      "avg_month_visits": 258021608.958799,
      "curr_month_visits": 258021608.958799,
      "unique_users": 20425146.4004809,
      "pages_per_visit": 7.15459786169862
    },
    {
      "global_rank": 130,
      "domain": "onlyfans.com",
      "category": "Adult",
      "avg_month_visits": 266924950.818693,
      "curr_month_visits": 266924950.818693,
      "unique_users": 64749385.1154986,
      "pages_per_visit": 5.10927551559437
    },
    {
      "global_rank": 131,
      "domain": "namu.wiki",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 301526767.728101,
      "curr_month_visits": 301526767.728101,
      "unique_users": 32581956.3530268,
      "pages_per_visit": 4.60589573135482
    },
    {
      "global_rank": 132,
      "domain": "amazon.com.br",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 191779874.490887,
      "curr_month_visits": 191779874.490887,
      "unique_users": 79946313.6355746,
      "pages_per_visit": 5.85118479279432
    },
    {
      "global_rank": 133,
      "domain": "ebay.co.uk",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 207031628.088084,
      "curr_month_visits": 207031628.088084,
      "unique_users": 40083549.0010274,
      "pages_per_visit": 8.52650532968093
    },
    {
      "global_rank": 134,
      "domain": "erome.com",
      "category": "Adult",
      "avg_month_visits": 129432243.509886,
      "curr_month_visits": 129432243.509886,
      "unique_users": 34100542.1585899,
      "pages_per_visit": 15.6488837511909
    },
    {
      "global_rank": 135,
      "domain": "news.google.com",
      "category": "All",
      "avg_month_visits": 332588651.49235,
      "curr_month_visits": 332588651.49235,
      "unique_users": 47657130.578944,
      "pages_per_visit": 3.87898225080473
    },
    {
      "global_rank": 136,
      "domain": "deepl.com",
      "category": "All",
      "avg_month_visits": 208899571.654999,
      "curr_month_visits": 208899571.654999,
      "unique_users": 32720223.2596981,
      "pages_per_visit": 8.50894717507817
    },
    {
      "global_rank": 137,
      "domain": "onet.pl",
      "category": "All",
      "avg_month_visits": 275859432.434544,
      "curr_month_visits": 275859432.434544,
      "unique_users": 25397674.1368853,
      "pages_per_visit": 5.22559052246655
    },
    {
      "global_rank": 138,
      "domain": "target.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 189162478.585431,
      "curr_month_visits": 189162478.585431,
      "unique_users": 85474001.7851803,
      "pages_per_visit": 4.56160114696968
    },
    {
      "global_rank": 139,
      "domain": "chess.com",
      "category": "Games/Board_and_Card_Games",
      "avg_month_visits": 178316559.121102,
      "curr_month_visits": 178316559.121102,
      "unique_users": 19329966.2040186,
      "pages_per_visit": 14.2001981309435
    },
    {
      "global_rank": 140,
      "domain": "theguardian.com",
      "category": "All",
      "avg_month_visits": 319381609.654852,
      "curr_month_visits": 319381609.654852,
      "unique_users": 85724220.239674,
      "pages_per_visit": 2.74135464519242
    },
    {
      "global_rank": 141,
      "domain": "chase.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 176428223.398557,
      "curr_month_visits": 176428223.398557,
      "unique_users": 42699790.294604,
      "pages_per_visit": 8.74458819276603
    },
    {
      "global_rank": 142,
      "domain": "xhamsterlive.com",
      "category": "Adult",
      "avg_month_visits": 206187698.986245,
      "curr_month_visits": 206187698.986245,
      "unique_users": 45248164.292369,
      "pages_per_visit": 6.54877371090273
    },
    {
      "global_rank": 143,
      "domain": "rutube.ru",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 290130863.75133,
      "curr_month_visits": 290130863.75133,
      "unique_users": 69109548.9173923,
      "pages_per_visit": 3.73445713048201
    },
    {
      "global_rank": 144,
      "domain": "noodlemagazine.com",
      "category": "Adult",
      "avg_month_visits": 151220273.752386,
      "curr_month_visits": 151220273.752386,
      "unique_users": 51091735.2170922,
      "pages_per_visit": 8.77961518397401
    },
    {
      "global_rank": 145,
      "domain": "xnxx.es",
      "category": "Adult",
      "avg_month_visits": 160704805.045831,
      "curr_month_visits": 160704805.045831,
      "unique_users": 34259716.7830134,
      "pages_per_visit": 9.63447831219532
    },
    {
      "global_rank": 146,
      "domain": "google.es",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 188974453.481663,
      "curr_month_visits": 188974453.481663,
      "unique_users": 24424246.0406831,
      "pages_per_visit": 9.43312288448432
    },
    {
      "global_rank": 147,
      "domain": "market.yandex.ru",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 149735745.014003,
      "curr_month_visits": 149735745.014003,
      "unique_users": 36393509.6684761,
      "pages_per_visit": 10.0645433243653
    },
    {
      "global_rank": 148,
      "domain": "xhamster42.desi",
      "category": "Computers_Electronics_and_Technology/File_Sharing_and_Hosting",
      "avg_month_visits": 739555864.87321,
      "curr_month_visits": 739555864.87321,
      "unique_users": 130250293.754311,
      "pages_per_visit": 8.65582803528015
    },
    {
      "global_rank": 149,
      "domain": "rule34.xxx",
      "category": "Adult",
      "avg_month_visits": 93650610.359709,
      "curr_month_visits": 93650610.359709,
      "unique_users": 14145115.6075306,
      "pages_per_visit": 30.4076741296521
    },
    {
      "global_rank": 150,
      "domain": "xham.live",
      "category": "Adult",
      "avg_month_visits": 159597832.082763,
      "curr_month_visits": 159597832.082763,
      "unique_users": 50069798.9451075,
      "pages_per_visit": 4.91203665187314
    },
    {
      "global_rank": 151,
      "domain": "zhihu.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 281720493.184138,
      "curr_month_visits": 281720493.184138,
      "unique_users": 51550059.6508217,
      "pages_per_visit": 3.5327211744912
    },
    {
      "global_rank": 152,
      "domain": "usps.com",
      "category": "Business_and_Consumer_Services/Shipping_and_Logistics",
      "avg_month_visits": 309007525.613612,
      "curr_month_visits": 309007525.613612,
      "unique_users": 72903947.6346013,
      "pages_per_visit": 2.72980196359083
    },
    {
      "global_rank": 153,
      "domain": "archiveofourown.org",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 237814840.721961,
      "curr_month_visits": 237814840.721961,
      "unique_users": 11531958.3161697,
      "pages_per_visit": 8.07198795670709
    },
    {
      "global_rank": 154,
      "domain": "shopify.com",
      "category": "Business_and_Consumer_Services/Business_Services",
      "avg_month_visits": 141156671.821912,
      "curr_month_visits": 141156671.821912,
      "unique_users": 40516632.134802,
      "pages_per_visit": 12.083377025343
    },
    {
      "global_rank": 155,
      "domain": "fmkorea.com",
      "category": "All",
      "avg_month_visits": 111648841.0791,
      "curr_month_visits": 111648841.0791,
      "unique_users": 13797809.2961339,
      "pages_per_visit": 25.8085654411644
    },
    {
      "global_rank": 156,
      "domain": "google.ca",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 203468143.613447,
      "curr_month_visits": 203468143.613447,
      "unique_users": 22235847.5294749,
      "pages_per_visit": 7.95486466840042
    },
    {
      "global_rank": 157,
      "domain": "nhentai.net",
      "category": "Adult",
      "avg_month_visits": 77205448.0613549,
      "curr_month_visits": 77205448.0613549,
      "unique_users": 9841375.82913299,
      "pages_per_visit": 39.2310910974865
    },
    {
      "global_rank": 158,
      "domain": "flipkart.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 225699232.431618,
      "curr_month_visits": 225699232.431618,
      "unique_users": 82340630.6134691,
      "pages_per_visit": 6.20578073589609
    },
    {
      "global_rank": 159,
      "domain": "infobae.com",
      "category": "All",
      "avg_month_visits": 289405517.118601,
      "curr_month_visits": 289405517.118601,
      "unique_users": 94189093.9569617,
      "pages_per_visit": 2.33878307635187
    },
    {
      "global_rank": 160,
      "domain": "google.co.in",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 217351041.845474,
      "curr_month_visits": 217351041.845474,
      "unique_users": 32822551.1854015,
      "pages_per_visit": 6.18986885431817
    },
    {
      "global_rank": 161,
      "domain": "cricbuzz.com",
      "category": "All",
      "avg_month_visits": 306707466.099913,
      "curr_month_visits": 306707466.099913,
      "unique_users": 40125104.8012544,
      "pages_per_visit": 2.54582253653418
    },
    {
      "global_rank": 162,
      "domain": "brave.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 254729201.765584,
      "curr_month_visits": 254729201.765584,
      "unique_users": 49594416.8072424,
      "pages_per_visit": 3.78388997556697
    },
    {
      "global_rank": 163,
      "domain": "seznam.cz",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 229017090.966256,
      "curr_month_visits": 229017090.966256,
      "unique_users": 9572293.71373036,
      "pages_per_visit": 6.05224214616788
    },
    {
      "global_rank": 164,
      "domain": "homedepot.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 180882810.161845,
      "curr_month_visits": 180882810.161845,
      "unique_users": 69593627.6786763,
      "pages_per_visit": 4.50585888975252
    },
    {
      "global_rank": 165,
      "domain": "dood.li",
      "category": "Adult",
      "avg_month_visits": 112362822.041729,
      "curr_month_visits": 112362822.041729,
      "unique_users": 30324739.4700124,
      "pages_per_visit": 9.97393689973785
    },
    {
      "global_rank": 166,
      "domain": "force.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 136981720.174713,
      "curr_month_visits": 136981720.174713,
      "unique_users": 9106739.98885327,
      "pages_per_visit": 19.8844110156482
    },
    {
      "global_rank": 167,
      "domain": "google.pl",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 157684744.76807,
      "curr_month_visits": 157684744.76807,
      "unique_users": 14339239.8570802,
      "pages_per_visit": 10.7459431910594
    },
    {
      "global_rank": 168,
      "domain": "sahibinden.com",
      "category": "E-commerce_and_Shopping/Classifieds",
      "avg_month_visits": 108523623.606797,
      "curr_month_visits": 108523623.606797,
      "unique_users": 18689898.4740077,
      "pages_per_visit": 17.7691797576775
    },
    {
      "global_rank": 169,
      "domain": "optvz.com",
      "category": "All",
      "avg_month_visits": 142132512.995676,
      "curr_month_visits": 142132512.995676,
      "unique_users": 76548263.0151588,
      "pages_per_visit": 1.7497240809689
    },
    {
      "global_rank": 170,
      "domain": "shopee.vn",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 173692826.287466,
      "curr_month_visits": 173692826.287466,
      "unique_users": 55974023.3904738,
      "pages_per_visit": 5.78188814572452
    },
    {
      "global_rank": 171,
      "domain": "ameblo.jp",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 237742052.630565,
      "curr_month_visits": 237742052.630565,
      "unique_users": 42406706.3624581,
      "pages_per_visit": 3.4233603323103
    },
    {
      "global_rank": 172,
      "domain": "scribd.com",
      "category": "All",
      "avg_month_visits": 210538311.387205,
      "curr_month_visits": 210538311.387205,
      "unique_users": 118597301.683676,
      "pages_per_visit": 2.95232146153556
    },
    {
      "global_rank": 173,
      "domain": "steampowered.com",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 193605898.268679,
      "curr_month_visits": 193605898.268679,
      "unique_users": 75614209.1892549,
      "pages_per_visit": 4.03468752036271
    },
    {
      "global_rank": 174,
      "domain": "ixxx.com",
      "category": "Adult",
      "avg_month_visits": 151053647.554856,
      "curr_month_visits": 151053647.554856,
      "unique_users": 44709396.3485795,
      "pages_per_visit": 6.85739006266341
    },
    {
      "global_rank": 175,
      "domain": "mercari.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 151302402.386979,
      "curr_month_visits": 151302402.386979,
      "unique_users": 44600294.8913665,
      "pages_per_visit": 8.01609754789974
    },
    {
      "global_rank": 176,
      "domain": "porno365.wiki",
      "category": "All",
      "avg_month_visits": 133690914.034173,
      "curr_month_visits": 133690914.034173,
      "unique_users": 17274457.0094264,
      "pages_per_visit": 6.49475132324659
    },
    {
      "global_rank": 177,
      "domain": "kwai.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 194058552.294621,
      "curr_month_visits": 194058552.294621,
      "unique_users": 66871779.5106668,
      "pages_per_visit": 2.01318403460918
    },
    {
      "global_rank": 178,
      "domain": "orange.fr",
      "category": "Computers_Electronics_and_Technology/Telecommunications",
      "avg_month_visits": 187528341.88585,
      "curr_month_visits": 187528341.88585,
      "unique_users": 23328320.4529144,
      "pages_per_visit": 6.19278343299105
    },
    {
      "global_rank": 179,
      "domain": "cityheaven.net",
      "category": "Adult",
      "avg_month_visits": 150868548.206864,
      "curr_month_visits": 150868548.206864,
      "unique_users": 11746920.3456612,
      "pages_per_visit": 12.081850071799
    },
    {
      "global_rank": 180,
      "domain": "dailymail.co.uk",
      "category": "All",
      "avg_month_visits": 268837311.321798,
      "curr_month_visits": 268837311.321798,
      "unique_users": 58160057.1811137,
      "pages_per_visit": 3.03947921930316
    },
    {
      "global_rank": 181,
      "domain": "google.com.mx",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 143917180.873563,
      "curr_month_visits": 143917180.873563,
      "unique_users": 20475923.6645793,
      "pages_per_visit": 9.55493861808666
    },
    {
      "global_rank": 182,
      "domain": "gosuslugi.ru",
      "category": "All",
      "avg_month_visits": 156381151.53009,
      "curr_month_visits": 156381151.53009,
      "unique_users": 38918748.88044,
      "pages_per_visit": 6.23649626237272
    },
    {
      "global_rank": 183,
      "domain": "yandex.com",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 152481418.365332,
      "curr_month_visits": 152481418.365332,
      "unique_users": 37698088.3536194,
      "pages_per_visit": 6.68987807687488
    },
    {
      "global_rank": 184,
      "domain": "duosecurity.com",
      "category": "Computers_Electronics_and_Technology/Computer_Security",
      "avg_month_visits": 233167933.453479,
      "curr_month_visits": 233167933.453479,
      "unique_users": 26042053.8117823,
      "pages_per_visit": 3.26601173486736
    },
    {
      "global_rank": 185,
      "domain": "primevideo.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 235382993.491075,
      "curr_month_visits": 235382993.491075,
      "unique_users": 75797307.487837,
      "pages_per_visit": 2.82899344131101
    },
    {
      "global_rank": 186,
      "domain": "amazon.es",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 120495860.234693,
      "curr_month_visits": 120495860.234693,
      "unique_users": 28911383.347676,
      "pages_per_visit": 8.76027877893802
    },
    {
      "global_rank": 187,
      "domain": "accuweather.com",
      "category": "All",
      "avg_month_visits": 261456522.78645,
      "curr_month_visits": 261456522.78645,
      "unique_users": 78903807.917948,
      "pages_per_visit": 2.29868355815924
    },
    {
      "global_rank": 188,
      "domain": "kakao.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 200095152.273525,
      "curr_month_visits": 200095152.273525,
      "unique_users": 45965709.0808514,
      "pages_per_visit": 3.65337410853003
    },
    {
      "global_rank": 189,
      "domain": "news.naver.com",
      "category": "All",
      "avg_month_visits": 233323941.558616,
      "curr_month_visits": 233323941.558616,
      "unique_users": 19125422.9510498,
      "pages_per_visit": 3.80309123255644
    },
    {
      "global_rank": 190,
      "domain": "nih.gov",
      "category": "Health/Health",
      "avg_month_visits": 219814316.419072,
      "curr_month_visits": 219814316.419072,
      "unique_users": 86702164.5151219,
      "pages_per_visit": 3.17016904654298
    },
    {
      "global_rank": 191,
      "domain": "pornhub.org",
      "category": "Adult",
      "avg_month_visits": 125040505.533501,
      "curr_month_visits": 125040505.533501,
      "unique_users": 29361710.7041221,
      "pages_per_visit": 8.49301502717409
    },
    {
      "global_rank": 192,
      "domain": "notion.so",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 156820439.243322,
      "curr_month_visits": 156820439.243322,
      "unique_users": 18061065.5418655,
      "pages_per_visit": 9.1107468231359
    },
    {
      "global_rank": 193,
      "domain": "archive.org",
      "category": "All",
      "avg_month_visits": 138002260.706957,
      "curr_month_visits": 138002260.706957,
      "unique_users": 68105354.3828363,
      "pages_per_visit": 6.70860978411257
    },
    {
      "global_rank": 194,
      "domain": "finance.yahoo.com",
      "category": "All",
      "avg_month_visits": 223149842.858148,
      "curr_month_visits": 223149842.858148,
      "unique_users": 45196876.0578871,
      "pages_per_visit": 3.52288135961697
    },
    {
      "global_rank": 195,
      "domain": "character.ai",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 185327231.608321,
      "curr_month_visits": 185327231.608321,
      "unique_users": 10169682.1537866,
      "pages_per_visit": 8.773126843127
    },
    {
      "global_rank": 196,
      "domain": "zara.com",
      "category": "All",
      "avg_month_visits": 99836380.584235,
      "curr_month_visits": 99836380.584235,
      "unique_users": 41641921.4525747,
      "pages_per_visit": 9.05300421185387
    },
    {
      "global_rank": 197,
      "domain": "nike.com",
      "category": "All",
      "avg_month_visits": 126279817.28253,
      "curr_month_visits": 126279817.28253,
      "unique_users": 61994712.059806,
      "pages_per_visit": 4.88865048376208
    },
    {
      "global_rank": 198,
      "domain": "youporn.com",
      "category": "Adult",
      "avg_month_visits": 136045861.833909,
      "curr_month_visits": 136045861.833909,
      "unique_users": 48946439.5749342,
      "pages_per_visit": 5.53841061205127
    },
    {
      "global_rank": 199,
      "domain": "cybozu.com",
      "category": "Business_and_Consumer_Services/Business_Services",
      "avg_month_visits": 127234342.432402,
      "curr_month_visits": 127234342.432402,
      "unique_users": 2932031.80997111,
      "pages_per_visit": 20.072897252395
    },
    {
      "global_rank": 200,
      "domain": "xiaohongshu.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 95483681.2561596,
      "curr_month_visits": 95483681.2561596,
      "unique_users": 21601377.8885348,
      "pages_per_visit": 17.913661015876
    },
    {
      "global_rank": 201,
      "domain": "capitalone.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 130654155.752135,
      "curr_month_visits": 130654155.752135,
      "unique_users": 45337632.0558195,
      "pages_per_visit": 6.91996006386324
    },
    {
      "global_rank": 202,
      "domain": "bestbuy.com",
      "category": "Computers_Electronics_and_Technology/Consumer_Electronics",
      "avg_month_visits": 117463988.158745,
      "curr_month_visits": 117463988.158745,
      "unique_users": 51129829.4624698,
      "pages_per_visit": 4.2784597282732
    },
    {
      "global_rank": 203,
      "domain": "holahupa.com",
      "category": "Adult",
      "avg_month_visits": 194893235.487989,
      "curr_month_visits": 194893235.487989,
      "unique_users": 71540302.2582956,
      "pages_per_visit": 3.60479512005704
    },
    {
      "global_rank": 204,
      "domain": "poki.com",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 155694311.784879,
      "curr_month_visits": 155694311.784879,
      "unique_users": 34800224.47489,
      "pages_per_visit": 5.38148938475376
    },
    {
      "global_rank": 205,
      "domain": "livejasmin.com",
      "category": "Adult",
      "avg_month_visits": 251217806.196132,
      "curr_month_visits": 251217806.196132,
      "unique_users": 104191046.299252,
      "pages_per_visit": 1.92323673472158
    },
    {
      "global_rank": 206,
      "domain": "ebay.de",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 133088642.556758,
      "curr_month_visits": 133088642.556758,
      "unique_users": 28127641.7219329,
      "pages_per_visit": 7.6706786899333
    },
    {
      "global_rank": 207,
      "domain": "txnhh.com",
      "category": "Adult",
      "avg_month_visits": 142534703.154143,
      "curr_month_visits": 142534703.154143,
      "unique_users": 62014190.9245386,
      "pages_per_visit": 6.52551332712877
    },
    {
      "global_rank": 208,
      "domain": "max.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 225181072.7793,
      "curr_month_visits": 225181072.7793,
      "unique_users": 43917166.8701498,
      "pages_per_visit": 3.64239253957366
    },
    {
      "global_rank": 209,
      "domain": "weibo.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 160518664.12171,
      "curr_month_visits": 160518664.12171,
      "unique_users": 26771641.8023805,
      "pages_per_visit": 6.76154351986399
    },
    {
      "global_rank": 210,
      "domain": "turkiye.gov.tr",
      "category": "All",
      "avg_month_visits": 143803622.361968,
      "curr_month_visits": 143803622.361968,
      "unique_users": 38695328.6429031,
      "pages_per_visit": 6.24253393385704
    },
    {
      "global_rank": 211,
      "domain": "pornpics.com",
      "category": "Adult",
      "avg_month_visits": 69379940.9915785,
      "curr_month_visits": 69379940.9915785,
      "unique_users": 18010557.4738532,
      "pages_per_visit": 24.9708792596129
    },
    {
      "global_rank": 212,
      "domain": "163.com",
      "category": "All",
      "avg_month_visits": 168837665.796642,
      "curr_month_visits": 168837665.796642,
      "unique_users": 51929024.3561053,
      "pages_per_visit": 4.48737017022617
    },
    {
      "global_rank": 213,
      "domain": "trendyol.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 119034122.39339,
      "curr_month_visits": 119034122.39339,
      "unique_users": 27894025.8500015,
      "pages_per_visit": 8.26254596555994
    },
    {
      "global_rank": 214,
      "domain": "cmoa.jp",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 112655675.763091,
      "curr_month_visits": 112655675.763091,
      "unique_users": 18287959.5294359,
      "pages_per_visit": 13.3534558101958
    },
    {
      "global_rank": 215,
      "domain": "ups.com",
      "category": "Business_and_Consumer_Services/Shipping_and_Logistics",
      "avg_month_visits": 199129720.48536,
      "curr_month_visits": 199129720.48536,
      "unique_users": 57476797.4127113,
      "pages_per_visit": 3.21740933904218
    },
    {
      "global_rank": 216,
      "domain": "leboncoin.fr",
      "category": "E-commerce_and_Shopping/Classifieds",
      "avg_month_visits": 125529291.644949,
      "curr_month_visits": 125529291.644949,
      "unique_users": 20225889.5464714,
      "pages_per_visit": 8.88659559654443
    },
    {
      "global_rank": 217,
      "domain": "hm.com",
      "category": "All",
      "avg_month_visits": 108403618.747,
      "curr_month_visits": 108403618.747,
      "unique_users": 51153816.3715303,
      "pages_per_visit": 7.32410659228978
    },
    {
      "global_rank": 218,
      "domain": "usatoday.com",
      "category": "All",
      "avg_month_visits": 209485081.349855,
      "curr_month_visits": 209485081.349855,
      "unique_users": 97547750.2324611,
      "pages_per_visit": 1.82091312757061
    },
    {
      "global_rank": 219,
      "domain": "shopee.com.br",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 127765454.21073,
      "curr_month_visits": 127765454.21073,
      "unique_users": 44761683.8594685,
      "pages_per_visit": 7.02713789505743
    },
    {
      "global_rank": 220,
      "domain": "dropbox.com",
      "category": "Computers_Electronics_and_Technology/File_Sharing_and_Hosting",
      "avg_month_visits": 141668053.904403,
      "curr_month_visits": 141668053.904403,
      "unique_users": 47360006.3589166,
      "pages_per_visit": 6.33852100837822
    },
    {
      "global_rank": 221,
      "domain": "tumblr.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 150225181.906334,
      "curr_month_visits": 150225181.906334,
      "unique_users": 35978698.1980806,
      "pages_per_visit": 6.09509891476408
    },
    {
      "global_rank": 222,
      "domain": "nate.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 119453610.193857,
      "curr_month_visits": 119453610.193857,
      "unique_users": 11825939.6440121,
      "pages_per_visit": 11.8681757113404
    },
    {
      "global_rank": 223,
      "domain": "webpkgcache.com",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 268511466.044812,
      "curr_month_visits": 268511466.044812,
      "unique_users": 129264679.635211,
      "pages_per_visit": 1.17671076153621
    },
    {
      "global_rank": 224,
      "domain": "freepik.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 115778284.918474,
      "curr_month_visits": 115778284.918474,
      "unique_users": 42603008.794708,
      "pages_per_visit": 8.08817081798524
    },
    {
      "global_rank": 225,
      "domain": "wordpress.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 192306534.951351,
      "curr_month_visits": 192306534.951351,
      "unique_users": 98278410.5748208,
      "pages_per_visit": 2.79893250961463
    },
    {
      "global_rank": 226,
      "domain": "fc2.com",
      "category": "Computers_Electronics_and_Technology/Web_Hosting_and_Domain_Names",
      "avg_month_visits": 133151705.943191,
      "curr_month_visits": 133151705.943191,
      "unique_users": 23313206.1670948,
      "pages_per_visit": 6.64204924647177
    },
    {
      "global_rank": 227,
      "domain": "kleinanzeigen.de",
      "category": "E-commerce_and_Shopping/E-commerce_and_Shopping",
      "avg_month_visits": 116375901.731416,
      "curr_month_visits": 116375901.731416,
      "unique_users": 31710562.534476,
      "pages_per_visit": 9.44527778973981
    },
    {
      "global_rank": 228,
      "domain": "dailymotion.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 182814303.308046,
      "curr_month_visits": 182814303.308046,
      "unique_users": 74725812.1881706,
      "pages_per_visit": 2.80503884096265
    },
    {
      "global_rank": 229,
      "domain": "livedoor.jp",
      "category": "All",
      "avg_month_visits": 214218624.46964,
      "curr_month_visits": 214218624.46964,
      "unique_users": 18404704.7380059,
      "pages_per_visit": 3.66654742222685
    },
    {
      "global_rank": 230,
      "domain": "marca.com",
      "category": "All",
      "avg_month_visits": 222450953.844463,
      "curr_month_visits": 222450953.844463,
      "unique_users": 44125939.9738032,
      "pages_per_visit": 2.74293024034634
    },
    {
      "global_rank": 231,
      "domain": "hitomi.la",
      "category": "Adult",
      "avg_month_visits": 60381222.5559144,
      "curr_month_visits": 60381222.5559144,
      "unique_users": 9500650.65268886,
      "pages_per_visit": 29.8053526214801
    },
    {
      "global_rank": 232,
      "domain": "shopee.co.id",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 124163605.532306,
      "curr_month_visits": 124163605.532306,
      "unique_users": 33785314.2664243,
      "pages_per_visit": 7.25791133792401
    },
    {
      "global_rank": 233,
      "domain": "t-online.de",
      "category": "All",
      "avg_month_visits": 155624906.865592,
      "curr_month_visits": 155624906.865592,
      "unique_users": 21670380.4973913,
      "pages_per_visit": 5.39586871646194
    },
    {
      "global_rank": 234,
      "domain": "spoilerplus.tv",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 139938327.570361,
      "curr_month_visits": 139938327.570361,
      "unique_users": 2781493.70583353,
      "pages_per_visit": 12.5860927546582
    },
    {
      "global_rank": 235,
      "domain": "qorno.com",
      "category": "Adult",
      "avg_month_visits": 120640085.472671,
      "curr_month_visits": 120640085.472671,
      "unique_users": 31840805.4886993,
      "pages_per_visit": 5.40349686540244
    },
    {
      "global_rank": 236,
      "domain": "auone.jp",
      "category": "All",
      "avg_month_visits": 179713280.001522,
      "curr_month_visits": 179713280.001522,
      "unique_users": 16692178.5252391,
      "pages_per_visit": 4.16222873365088
    },
    {
      "global_rank": 237,
      "domain": "threads.net",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 154028947.306764,
      "curr_month_visits": 154028947.306764,
      "unique_users": 55430811.3822829,
      "pages_per_visit": 3.79996919466643
    },
    {
      "global_rank": 238,
      "domain": "hulu.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 172694428.337109,
      "curr_month_visits": 172694428.337109,
      "unique_users": 47658904.7346948,
      "pages_per_visit": 4.0395906879463
    },
    {
      "global_rank": 239,
      "domain": "bild.de",
      "category": "All",
      "avg_month_visits": 195824675.333959,
      "curr_month_visits": 195824675.333959,
      "unique_users": 22319804.5197186,
      "pages_per_visit": 3.50705933634924
    },
    {
      "global_rank": 240,
      "domain": "indiatimes.com",
      "category": "All",
      "avg_month_visits": 178061319.848172,
      "curr_month_visits": 178061319.848172,
      "unique_users": 71814058.5363365,
      "pages_per_visit": 2.42731770762164
    },
    {
      "global_rank": 241,
      "domain": "mercadolibre.com.ar",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 97622345.0413593,
      "curr_month_visits": 97622345.0413593,
      "unique_users": 18007432.7190578,
      "pages_per_visit": 10.3648410405571
    },
    {
      "global_rank": 242,
      "domain": "snapchat.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 129207449.59374,
      "curr_month_visits": 129207449.59374,
      "unique_users": 37115520.1887954,
      "pages_per_visit": 6.17421993095233
    },
    {
      "global_rank": 243,
      "domain": "uniqlo.com",
      "category": "Lifestyle/Fashion_and_Apparel",
      "avg_month_visits": 89310304.1966203,
      "curr_month_visits": 89310304.1966203,
      "unique_users": 39067396.1271499,
      "pages_per_visit": 6.47112502091297
    },
    {
      "global_rank": 244,
      "domain": "ecosia.org",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 197057820.882081,
      "curr_month_visits": 197057820.882081,
      "unique_users": 11890197.5880352,
      "pages_per_visit": 4.30890338178128
    },
    {
      "global_rank": 245,
      "domain": "costco.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 104215675.579392,
      "curr_month_visits": 104215675.579392,
      "unique_users": 41791409.5918692,
      "pages_per_visit": 5.3782829608325
    },
    {
      "global_rank": 246,
      "domain": "rightmove.co.uk",
      "category": "Business_and_Consumer_Services/Real_Estate",
      "avg_month_visits": 84972031.6130493,
      "curr_month_visits": 84972031.6130493,
      "unique_users": 18626955.0199515,
      "pages_per_visit": 15.4572438106005
    },
    {
      "global_rank": 247,
      "domain": "airbnb.com",
      "category": "Travel_and_Tourism/Accommodation_and_Hotels",
      "avg_month_visits": 85849321.4727823,
      "curr_month_visits": 85849321.4727823,
      "unique_users": 34908730.4258009,
      "pages_per_visit": 13.9528582705582
    },
    {
      "global_rank": 248,
      "domain": "amazon.com.mx",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 94358220.7912878,
      "curr_month_visits": 94358220.7912878,
      "unique_users": 37085236.0787033,
      "pages_per_visit": 6.9365684585193
    },
    {
      "global_rank": 249,
      "domain": "figma.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 82045697.1218074,
      "curr_month_visits": 82045697.1218074,
      "unique_users": 11312353.8116066,
      "pages_per_visit": 18.5069451812208
    },
    {
      "global_rank": 250,
      "domain": "macys.com",
      "category": "Lifestyle/Fashion_and_Apparel",
      "avg_month_visits": 84403961.5739491,
      "curr_month_visits": 84403961.5739491,
      "unique_users": 33252285.6866104,
      "pages_per_visit": 5.26138107226585
    },
    {
      "global_rank": 251,
      "domain": "tabelog.com",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 123682982.625635,
      "curr_month_visits": 123682982.625635,
      "unique_users": 44252907.4824298,
      "pages_per_visit": 4.87286870910888
    },
    {
      "global_rank": 252,
      "domain": "map.naver.com",
      "category": "Reference_Materials/Maps",
      "avg_month_visits": 75702582.0165844,
      "curr_month_visits": 75702582.0165844,
      "unique_users": 11931267.3949374,
      "pages_per_visit": 17.5316878918984
    },
    {
      "global_rank": 253,
      "domain": "detik.com",
      "category": "All",
      "avg_month_visits": 201798491.186203,
      "curr_month_visits": 201798491.186203,
      "unique_users": 43093137.7658224,
      "pages_per_visit": 2.39949884730226
    },
    {
      "global_rank": 254,
      "domain": "mediafire.com",
      "category": "Computers_Electronics_and_Technology/File_Sharing_and_Hosting",
      "avg_month_visits": 160905571.210578,
      "curr_month_visits": 160905571.210578,
      "unique_users": 59627957.673469,
      "pages_per_visit": 3.35307501890102
    },
    {
      "global_rank": 255,
      "domain": "genius.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 158164113.668344,
      "curr_month_visits": 158164113.668344,
      "unique_users": 74825986.7997305,
      "pages_per_visit": 2.9694225916065
    },
    {
      "global_rank": 256,
      "domain": "shopping.yahoo.co.jp",
      "category": "E-commerce_and_Shopping/E-commerce_and_Shopping",
      "avg_month_visits": 139689512.144188,
      "curr_month_visits": 139689512.144188,
      "unique_users": 45606639.2890505,
      "pages_per_visit": 3.49555361612715
    },
    {
      "global_rank": 257,
      "domain": "bsky.app",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 92323830.8316448,
      "curr_month_visits": 92323830.8316448,
      "unique_users": 13418787.8854152,
      "pages_per_visit": 8.24104989593677
    },
    {
      "global_rank": 258,
      "domain": "deviantart.com",
      "category": "Arts_and_Entertainment/Visual_Arts_and_Design",
      "avg_month_visits": 95405623.8065247,
      "curr_month_visits": 95405623.8065247,
      "unique_users": 19362392.3398576,
      "pages_per_visit": 12.2786969178281
    },
    {
      "global_rank": 259,
      "domain": "interia.pl",
      "category": "All",
      "avg_month_visits": 148263368.853324,
      "curr_month_visits": 148263368.853324,
      "unique_users": 16907735.1626869,
      "pages_per_visit": 5.05652663381621
    },
    {
      "global_rank": 260,
      "domain": "wellsfargo.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 96196091.8566711,
      "curr_month_visits": 96196091.8566711,
      "unique_users": 20119378.4841499,
      "pages_per_visit": 9.46132008909905
    },
    {
      "global_rank": 261,
      "domain": "lowes.com",
      "category": "Home_and_Garden/Home_Improvement_and_Maintenance",
      "avg_month_visits": 121641810.435835,
      "curr_month_visits": 121641810.435835,
      "unique_users": 55177507.0543285,
      "pages_per_visit": 4.36124663165866
    },
    {
      "global_rank": 262,
      "domain": "news.yahoo.com",
      "category": "All",
      "avg_month_visits": 190881089.834994,
      "curr_month_visits": 190881089.834994,
      "unique_users": 50868092.449654,
      "pages_per_visit": 2.39447821333592
    },
    {
      "global_rank": 263,
      "domain": "sxyprn.com",
      "category": "Adult",
      "avg_month_visits": 83232489.3964409,
      "curr_month_visits": 83232489.3964409,
      "unique_users": 11310713.9058494,
      "pages_per_visit": 11.8058561727262
    },
    {
      "global_rank": 264,
      "domain": "steamcommunity.com",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 154822227.604829,
      "curr_month_visits": 154822227.604829,
      "unique_users": 42968048.5663378,
      "pages_per_visit": 3.63019933507825
    },
    {
      "global_rank": 265,
      "domain": "line.me",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 200521071.896807,
      "curr_month_visits": 200521071.896807,
      "unique_users": 52353777.1826143,
      "pages_per_visit": 2.08288189176689
    },
    {
      "global_rank": 266,
      "domain": "yelp.com",
      "category": "All",
      "avg_month_visits": 131537130.244324,
      "curr_month_visits": 131537130.244324,
      "unique_users": 82622028.2494433,
      "pages_per_visit": 4.19748861311216
    },
    {
      "global_rank": 267,
      "domain": "kinopoisk.ru",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 152147787.953134,
      "curr_month_visits": 152147787.953134,
      "unique_users": 40565376.2906068,
      "pages_per_visit": 3.86706537415335
    },
    {
      "global_rank": 268,
      "domain": "mat6tube.com",
      "category": "Adult",
      "avg_month_visits": 80600084.9052437,
      "curr_month_visits": 80600084.9052437,
      "unique_users": 36635631.6107343,
      "pages_per_visit": 8.07404981138635
    },
    {
      "global_rank": 269,
      "domain": "fedex.com",
      "category": "Business_and_Consumer_Services/Shipping_and_Logistics",
      "avg_month_visits": 156524918.984754,
      "curr_month_visits": 156524918.984754,
      "unique_users": 45022392.7953739,
      "pages_per_visit": 3.82251420791984
    },
    {
      "global_rank": 270,
      "domain": "jw.org",
      "category": "Community_and_Society/Faith_and_Beliefs",
      "avg_month_visits": 116024059.4348,
      "curr_month_visits": 116024059.4348,
      "unique_users": 15319269.7352315,
      "pages_per_visit": 7.1740764108365
    },
    {
      "global_rank": 271,
      "domain": "apnews.com",
      "category": "All",
      "avg_month_visits": 133086979.505376,
      "curr_month_visits": 133086979.505376,
      "unique_users": 56980038.8729705,
      "pages_per_visit": 2.08201501708505
    },
    {
      "global_rank": 272,
      "domain": "bankofamerica.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 108401558.281481,
      "curr_month_visits": 108401558.281481,
      "unique_users": 26466173.7626072,
      "pages_per_visit": 7.11598592087707
    },
    {
      "global_rank": 273,
      "domain": "gap.com",
      "category": "Lifestyle/Fashion_and_Apparel",
      "avg_month_visits": 75949583.8235403,
      "curr_month_visits": 75949583.8235403,
      "unique_users": 29675025.4725906,
      "pages_per_visit": 8.43777201964834
    },
    {
      "global_rank": 274,
      "domain": "linktr.ee",
      "category": "Business_and_Consumer_Services/Online_Marketing",
      "avg_month_visits": 199456898.512069,
      "curr_month_visits": 199456898.512069,
      "unique_users": 98218507.3356894,
      "pages_per_visit": 1.85227499161384
    },
    {
      "global_rank": 275,
      "domain": "jd.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 91476398.2672623,
      "curr_month_visits": 91476398.2672623,
      "unique_users": 24865289.3712111,
      "pages_per_visit": 9.48380789153351
    },
    {
      "global_rank": 276,
      "domain": "intuit.com",
      "category": "Finance/Finance",
      "avg_month_visits": 109575956.771571,
      "curr_month_visits": 109575956.771571,
      "unique_users": 21859957.8160095,
      "pages_per_visit": 10.6703698330821
    },
    {
      "global_rank": 277,
      "domain": "xvideos.es",
      "category": "Adult",
      "avg_month_visits": 89053322.8466347,
      "curr_month_visits": 89053322.8466347,
      "unique_users": 27966398.9395592,
      "pages_per_visit": 9.58981563501835
    },
    {
      "global_rank": 278,
      "domain": "mercadolibre.com.mx",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 93192269.2087241,
      "curr_month_visits": 93192269.2087241,
      "unique_users": 25728293.6908484,
      "pages_per_visit": 8.08059830797435
    },
    {
      "global_rank": 279,
      "domain": "nicovideo.jp",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 133283581.058111,
      "curr_month_visits": 133283581.058111,
      "unique_users": 19051536.8987999,
      "pages_per_visit": 6.72640086490627
    },
    {
      "global_rank": 280,
      "domain": "xnxx2.com",
      "category": "Adult",
      "avg_month_visits": 84089177.7269184,
      "curr_month_visits": 84089177.7269184,
      "unique_users": 39105550.1906045,
      "pages_per_visit": 7.30807404038965
    },
    {
      "global_rank": 281,
      "domain": "vnexpress.net",
      "category": "All",
      "avg_month_visits": 145678909.474253,
      "curr_month_visits": 145678909.474253,
      "unique_users": 20029754.4736438,
      "pages_per_visit": 4.63731624444262
    },
    {
      "global_rank": 282,
      "domain": "map.baidu.com",
      "category": "Reference_Materials/Maps",
      "avg_month_visits": 38937288.4354681,
      "curr_month_visits": 38937288.4354681,
      "unique_users": 12597077.3540833,
      "pages_per_visit": 57.8258088468946
    },
    {
      "global_rank": 283,
      "domain": "iporntv.net",
      "category": "Adult",
      "avg_month_visits": 93811383.2089748,
      "curr_month_visits": 93811383.2089748,
      "unique_users": 36209087.8150196,
      "pages_per_visit": 7.22849610884842
    },
    {
      "global_rank": 284,
      "domain": "xfinity.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 127895564.950983,
      "curr_month_visits": 127895564.950983,
      "unique_users": 28172646.7341834,
      "pages_per_visit": 6.13768790930982
    },
    {
      "global_rank": 285,
      "domain": "news18.com",
      "category": "All",
      "avg_month_visits": 207924241.171368,
      "curr_month_visits": 207924241.171368,
      "unique_users": 68429570.1695158,
      "pages_per_visit": 1.94082541580896
    },
    {
      "global_rank": 286,
      "domain": "lanovels.net",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 58000567.6999406,
      "curr_month_visits": 58000567.6999406,
      "unique_users": 2503177.05910454,
      "pages_per_visit": 7.30697590578887
    },
    {
      "global_rank": 287,
      "domain": "slack.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 132326700.489313,
      "curr_month_visits": 132326700.489313,
      "unique_users": 12048303.7781825,
      "pages_per_visit": 8.02538999531389
    },
    {
      "global_rank": 288,
      "domain": "fidelity.com",
      "category": "Finance/Investing",
      "avg_month_visits": 96101807.7839871,
      "curr_month_visits": 96101807.7839871,
      "unique_users": 18084813.706506,
      "pages_per_visit": 7.65458900739823
    },
    {
      "global_rank": 289,
      "domain": "google.ru",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 112393483.463592,
      "curr_month_visits": 112393483.463592,
      "unique_users": 15361062.2125351,
      "pages_per_visit": 7.87123011873021
    },
    {
      "global_rank": 290,
      "domain": "bakusai.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 112089488.34191,
      "curr_month_visits": 112089488.34191,
      "unique_users": 6769261.91179607,
      "pages_per_visit": 11.3079079901657
    },
    {
      "global_rank": 291,
      "domain": "india.com",
      "category": "All",
      "avg_month_visits": 168094494.939025,
      "curr_month_visits": 168094494.939025,
      "unique_users": 60275777.4621154,
      "pages_per_visit": 2.0207835253275
    },
    {
      "global_rank": 292,
      "domain": "syosetu.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 124101154.079253,
      "curr_month_visits": 124101154.079253,
      "unique_users": 6231497.41296062,
      "pages_per_visit": 10.0674690782411
    },
    {
      "global_rank": 293,
      "domain": "isolatedovercomepasted.com",
      "category": "Adult",
      "avg_month_visits": 65322696.3628938,
      "curr_month_visits": 65322696.3628938,
      "unique_users": 25319524.0767144,
      "pages_per_visit": 4.56483669636024
    },
    {
      "global_rank": 294,
      "domain": "sexvid.pro",
      "category": "Adult",
      "avg_month_visits": 58380963.2498496,
      "curr_month_visits": 58380963.2498496,
      "unique_users": 28950433.0100548,
      "pages_per_visit": 14.3993600398388
    },
    {
      "global_rank": 295,
      "domain": "rakuten.com",
      "category": "E-commerce_and_Shopping/Coupons_and_Rebates",
      "avg_month_visits": 143896499.503507,
      "curr_month_visits": 143896499.503507,
      "unique_users": 57317712.5218531,
      "pages_per_visit": 2.24513871829687
    },
    {
      "global_rank": 296,
      "domain": "researchgate.net",
      "category": "All",
      "avg_month_visits": 125933534.64669,
      "curr_month_visits": 125933534.64669,
      "unique_users": 54012135.3170069,
      "pages_per_visit": 3.3612940341462
    },
    {
      "global_rank": 297,
      "domain": "tistory.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 160784062.247334,
      "curr_month_visits": 160784062.247334,
      "unique_users": 27637578.0914332,
      "pages_per_visit": 2.64845267127364
    },
    {
      "global_rank": 298,
      "domain": "tmall.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 72738789.6431871,
      "curr_month_visits": 72738789.6431871,
      "unique_users": 18011884.5419882,
      "pages_per_visit": 12.9292526667784
    },
    {
      "global_rank": 299,
      "domain": "olx.pl",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 90323668.6369034,
      "curr_month_visits": 90323668.6369034,
      "unique_users": 14339707.9731726,
      "pages_per_visit": 10.3259861357458
    },
    {
      "global_rank": 300,
      "domain": "espncricinfo.com",
      "category": "All",
      "avg_month_visits": 157101587.675618,
      "curr_month_visits": 157101587.675618,
      "unique_users": 26050373.9949262,
      "pages_per_visit": 2.90850916161595
    },
    {
      "global_rank": 302,
      "domain": "nbcnews.com",
      "category": "All",
      "avg_month_visits": 128929939.867899,
      "curr_month_visits": 128929939.867899,
      "unique_users": 59350864.326926,
      "pages_per_visit": 1.85065537439293
    },
    {
      "global_rank": 303,
      "domain": "okta.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 169048270.138548,
      "curr_month_visits": 169048270.138548,
      "unique_users": 19495495.8977216,
      "pages_per_visit": 3.44295724695969
    },
    {
      "global_rank": 304,
      "domain": "huawei.com",
      "category": "Computers_Electronics_and_Technology/Consumer_Electronics",
      "avg_month_visits": 97858351.271949,
      "curr_month_visits": 97858351.271949,
      "unique_users": 29520960.9030072,
      "pages_per_visit": 8.34170919391423
    },
    {
      "global_rank": 305,
      "domain": "realtor.com",
      "category": "Business_and_Consumer_Services/Real_Estate",
      "avg_month_visits": 119621411.229843,
      "curr_month_visits": 119621411.229843,
      "unique_users": 41969658.882844,
      "pages_per_visit": 4.95468496857094
    },
    {
      "global_rank": 306,
      "domain": "kindred.co",
      "category": "Business_and_Consumer_Services",
      "avg_month_visits": 187880579.75657,
      "curr_month_visits": 187880579.75657,
      "unique_users": 35488947.1736515,
      "pages_per_visit": 1.29381157111971
    },
    {
      "global_rank": 307,
      "domain": "nextdoor.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 165566330.742873,
      "curr_month_visits": 165566330.742873,
      "unique_users": 31621767.1552112,
      "pages_per_visit": 2.53380239514002
    },
    {
      "global_rank": 308,
      "domain": "wattpad.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 94526799.5762826,
      "curr_month_visits": 94526799.5762826,
      "unique_users": 19579080.8447813,
      "pages_per_visit": 11.1896154823765
    },
    {
      "global_rank": 309,
      "domain": "icloud.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 106696983.315886,
      "curr_month_visits": 106696983.315886,
      "unique_users": 35994784.2903679,
      "pages_per_visit": 5.9821580476726
    },
    {
      "global_rank": 310,
      "domain": "aajtak.in",
      "category": "All",
      "avg_month_visits": 161977873.490403,
      "curr_month_visits": 161977873.490403,
      "unique_users": 35110621.9029343,
      "pages_per_visit": 3.25033652368388
    },
    {
      "global_rank": 311,
      "domain": "shopee.co.th",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 111703552.443616,
      "curr_month_visits": 111703552.443616,
      "unique_users": 31664315.1097525,
      "pages_per_visit": 5.32836183527741
    },
    {
      "global_rank": 312,
      "domain": "people.com",
      "category": "All",
      "avg_month_visits": 187140420.855426,
      "curr_month_visits": 187140420.855426,
      "unique_users": 68035178.2984866,
      "pages_per_visit": 1.8822340056051
    },
    {
      "global_rank": 313,
      "domain": "wayfair.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 92016455.8422662,
      "curr_month_visits": 92016455.8422662,
      "unique_users": 38120546.935873,
      "pages_per_visit": 5.5053525571819
    },
    {
      "global_rank": 314,
      "domain": "atlassian.net",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 132169928.598593,
      "curr_month_visits": 132169928.598593,
      "unique_users": 8435838.56171664,
      "pages_per_visit": 7.29019636364397
    },
    {
      "global_rank": 315,
      "domain": "google.nl",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 93975267.4775967,
      "curr_month_visits": 93975267.4775967,
      "unique_users": 10562139.5585245,
      "pages_per_visit": 10.4125685747522
    },
    {
      "global_rank": 317,
      "domain": "google.com.tr",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 106350102.20925,
      "curr_month_visits": 106350102.20925,
      "unique_users": 12497417.5047146,
      "pages_per_visit": 7.51224783718228
    },
    {
      "global_rank": 318,
      "domain": "service.gov.uk",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 90909591.9932285,
      "curr_month_visits": 90909591.9932285,
      "unique_users": 24185400.0950752,
      "pages_per_visit": 8.74887498230478
    },
    {
      "global_rank": 319,
      "domain": "culturanimation.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 70619323.6849914,
      "curr_month_visits": 70619323.6849914,
      "unique_users": 10686905.4147894,
      "pages_per_visit": 4.99805336235112
    },
    {
      "global_rank": 320,
      "domain": "forbes.com",
      "category": "All",
      "avg_month_visits": 178766116.531622,
      "curr_month_visits": 178766116.531622,
      "unique_users": 95300266.4748039,
      "pages_per_visit": 1.53119801320941
    },
    {
      "global_rank": 321,
      "domain": "liteapks.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 90017613.7079871,
      "curr_month_visits": 90017613.7079871,
      "unique_users": 26093681.0564123,
      "pages_per_visit": 5.86233920453141
    },
    {
      "global_rank": 322,
      "domain": "lichess.org",
      "category": "Games/Board_and_Card_Games",
      "avg_month_visits": 61719304.5611309,
      "curr_month_visits": 61719304.5611309,
      "unique_users": 5357928.82650847,
      "pages_per_visit": 24.2137047277679
    },
    {
      "global_rank": 323,
      "domain": "note.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 167149125.064602,
      "curr_month_visits": 167149125.064602,
      "unique_users": 45465080.2203441,
      "pages_per_visit": 2.05862270683049
    },
    {
      "global_rank": 324,
      "domain": "sp.gov.br",
      "category": "All",
      "avg_month_visits": 108909293.435535,
      "curr_month_visits": 108909293.435535,
      "unique_users": 26082384.9546623,
      "pages_per_visit": 5.74906313613921
    },
    {
      "global_rank": 325,
      "domain": "mechacomic.jp",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 92318773.7881393,
      "curr_month_visits": 92318773.7881393,
      "unique_users": 14301394.1977031,
      "pages_per_visit": 12.2525145838279
    },
    {
      "global_rank": 326,
      "domain": "cloud.mail.ru",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 136174162.108213,
      "curr_month_visits": 136174162.108213,
      "unique_users": 20671444.0156978,
      "pages_per_visit": 3.73907465929828
    },
    {
      "global_rank": 328,
      "domain": "savefrom.net",
      "category": "Computers_Electronics_and_Technology/File_Sharing_and_Hosting",
      "avg_month_visits": 129705399.585924,
      "curr_month_visits": 129705399.585924,
      "unique_users": 44775696.2861954,
      "pages_per_visit": 3.15171364294564
    },
    {
      "global_rank": 329,
      "domain": "mega.nz",
      "category": "Computers_Electronics_and_Technology/File_Sharing_and_Hosting",
      "avg_month_visits": 103657226.404655,
      "curr_month_visits": 103657226.404655,
      "unique_users": 39117587.854983,
      "pages_per_visit": 5.38247675381166
    },
    {
      "global_rank": 330,
      "domain": "americanexpress.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 99675195.6425902,
      "curr_month_visits": 99675195.6425902,
      "unique_users": 39365523.3060927,
      "pages_per_visit": 5.39513238787773
    },
    {
      "global_rank": 331,
      "domain": "soundcloud.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 112653946.244453,
      "curr_month_visits": 112653946.244453,
      "unique_users": 32558914.0850035,
      "pages_per_visit": 5.15266162334068
    },
    {
      "global_rank": 332,
      "domain": "binance.com",
      "category": "Finance/Investing",
      "avg_month_visits": 60818469.7215697,
      "curr_month_visits": 60818469.7215697,
      "unique_users": 14044171.7579193,
      "pages_per_visit": 12.7005996076362
    },
    {
      "global_rank": 333,
      "domain": "kohls.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 66214068.7676723,
      "curr_month_visits": 66214068.7676723,
      "unique_users": 30656371.7802053,
      "pages_per_visit": 5.76511803385433
    },
    {
      "global_rank": 334,
      "domain": "nypost.com",
      "category": "All",
      "avg_month_visits": 160664988.375181,
      "curr_month_visits": 160664988.375181,
      "unique_users": 54095149.7319983,
      "pages_per_visit": 2.08391798315637
    },
    {
      "global_rank": 335,
      "domain": "truyenqqto.com",
      "category": "Games/Games",
      "avg_month_visits": 93553683.5719389,
      "curr_month_visits": 93553683.5719389,
      "unique_users": 5035636.38832986,
      "pages_per_visit": 9.32943877189695
    },
    {
      "global_rank": 336,
      "domain": "healthline.com",
      "category": "Health/Health",
      "avg_month_visits": 126451712.260201,
      "curr_month_visits": 126451712.260201,
      "unique_users": 74867945.8165169,
      "pages_per_visit": 3.34532256038736
    },
    {
      "global_rank": 337,
      "domain": "diagramjawlineunhappy.com",
      "category": "Adult",
      "avg_month_visits": 74283155.8041666,
      "curr_month_visits": 74283155.8041666,
      "unique_users": 31564981.2141295,
      "pages_per_visit": 3.85663782545372
    },
    {
      "global_rank": 338,
      "domain": "allrecipes.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 131431818.815047,
      "curr_month_visits": 131431818.815047,
      "unique_users": 63847592.1075756,
      "pages_per_visit": 1.90980007842878
    },
    {
      "global_rank": 339,
      "domain": "google.co.kr",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 90369724.2699898,
      "curr_month_visits": 90369724.2699898,
      "unique_users": 14473407.0461206,
      "pages_per_visit": 7.83685658783175
    },
    {
      "global_rank": 340,
      "domain": "bankingbloatedcaptive.com",
      "category": "Adult",
      "avg_month_visits": 49484501.9054238,
      "curr_month_visits": 49484501.9054238,
      "unique_users": 21961738.6020282,
      "pages_per_visit": 4.72788657727963
    },
    {
      "global_rank": 342,
      "domain": "cookpad.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 145908886.163352,
      "curr_month_visits": 145908886.163352,
      "unique_users": 57072043.0084977,
      "pages_per_visit": 2.2672380694281
    },
    {
      "global_rank": 343,
      "domain": "xhamster2.com",
      "category": "Adult",
      "avg_month_visits": 81916669.1175198,
      "curr_month_visits": 81916669.1175198,
      "unique_users": 33223870.9462863,
      "pages_per_visit": 6.68627357264621
    },
    {
      "global_rank": 346,
      "domain": "kahoot.it",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 54870986.686821,
      "curr_month_visits": 54870986.686821,
      "unique_users": 25140781.5604658,
      "pages_per_visit": 16.3974990962907
    },
    {
      "global_rank": 347,
      "domain": "redtube.com",
      "category": "Adult",
      "avg_month_visits": 83789319.761397,
      "curr_month_visits": 83789319.761397,
      "unique_users": 30926279.683602,
      "pages_per_visit": 6.51089901508259
    },
    {
      "global_rank": 348,
      "domain": "google.co.th",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 103342424.949893,
      "curr_month_visits": 103342424.949893,
      "unique_users": 14319147.6619458,
      "pages_per_visit": 6.77137651998141
    },
    {
      "global_rank": 349,
      "domain": "recetasmaria.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 67427967.4099379,
      "curr_month_visits": 67427967.4099379,
      "unique_users": 10377164.250909,
      "pages_per_visit": 4.98996146092553
    },
    {
      "global_rank": 350,
      "domain": "xgroovy.com",
      "category": "Adult",
      "avg_month_visits": 94454615.811113,
      "curr_month_visits": 94454615.811113,
      "unique_users": 45615678.9735771,
      "pages_per_visit": 4.30600359423862
    },
    {
      "global_rank": 351,
      "domain": "agoda.com",
      "category": "Travel_and_Tourism/Accommodation_and_Hotels",
      "avg_month_visits": 89125734.2556621,
      "curr_month_visits": 89125734.2556621,
      "unique_users": 41560398.9132748,
      "pages_per_visit": 6.2861388559762
    },
    {
      "global_rank": 352,
      "domain": "tnaflix.com",
      "category": "Adult",
      "avg_month_visits": 116218242.56087,
      "curr_month_visits": 116218242.56087,
      "unique_users": 49465168.4942242,
      "pages_per_visit": 3.72489156263112
    },
    {
      "global_rank": 353,
      "domain": "nombresmolones.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 67175105.8576408,
      "curr_month_visits": 67175105.8576408,
      "unique_users": 10255484.1320372,
      "pages_per_visit": 4.98873017761411
    },
    {
      "global_rank": 354,
      "domain": "shopping.naver.com",
      "category": "E-commerce_and_Shopping/E-commerce_and_Shopping",
      "avg_month_visits": 92439729.6193988,
      "curr_month_visits": 92439729.6193988,
      "unique_users": 13590713.1045068,
      "pages_per_visit": 6.47420549784657
    },
    {
      "global_rank": 355,
      "domain": "aliexpress.ru",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 74438640.3661965,
      "curr_month_visits": 74438640.3661965,
      "unique_users": 20220097.1472666,
      "pages_per_visit": 8.26003436226961
    },
    {
      "global_rank": 356,
      "domain": "hepsiburada.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 75727886.8029923,
      "curr_month_visits": 75727886.8029923,
      "unique_users": 22566951.2582673,
      "pages_per_visit": 6.22582223915796
    },
    {
      "global_rank": 357,
      "domain": "game8.jp",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 116075879.05243,
      "curr_month_visits": 116075879.05243,
      "unique_users": 15124413.1682023,
      "pages_per_visit": 3.19506698242437
    },
    {
      "global_rank": 358,
      "domain": "wa.me",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 157447574.099297,
      "curr_month_visits": 157447574.099297,
      "unique_users": 36738727.9711797,
      "pages_per_visit": 2.12570032595701
    },
    {
      "global_rank": 359,
      "domain": "zerodha.com",
      "category": "Finance/Investing",
      "avg_month_visits": 80208838.6751281,
      "curr_month_visits": 80208838.6751281,
      "unique_users": 12180329.7332017,
      "pages_per_visit": 12.7371389191917
    },
    {
      "global_rank": 360,
      "domain": "hot-sex-tube.com",
      "category": "Adult",
      "avg_month_visits": 74029122.8491443,
      "curr_month_visits": 74029122.8491443,
      "unique_users": 29685145.8262983,
      "pages_per_visit": 6.00615974642045
    },
    {
      "global_rank": 362,
      "domain": "myntra.com",
      "category": "Lifestyle/Fashion_and_Apparel",
      "avg_month_visits": 88291615.8059688,
      "curr_month_visits": 88291615.8059688,
      "unique_users": 34197100.1996691,
      "pages_per_visit": 6.22206405925169
    },
    {
      "global_rank": 363,
      "domain": "att.com",
      "category": "Computers_Electronics_and_Technology/Telecommunications",
      "avg_month_visits": 123451780.37561,
      "curr_month_visits": 123451780.37561,
      "unique_users": 34586675.2980026,
      "pages_per_visit": 3.72544726895502
    },
    {
      "global_rank": 364,
      "domain": "justdial.com",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 120753005.922893,
      "curr_month_visits": 120753005.922893,
      "unique_users": 66428289.551318,
      "pages_per_visit": 2.58341565662696
    },
    {
      "global_rank": 365,
      "domain": "bycd3.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 103504105.622335,
      "curr_month_visits": 103504105.622335,
      "unique_users": 5677176.18080042,
      "pages_per_visit": 6.89416956513602
    },
    {
      "global_rank": 366,
      "domain": "mangadex.org",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 50546851.7233302,
      "curr_month_visits": 50546851.7233302,
      "unique_users": 7666265.81768839,
      "pages_per_visit": 25.8123783714335
    },
    {
      "global_rank": 367,
      "domain": "rambler.ru",
      "category": "All",
      "avg_month_visits": 121314343.881164,
      "curr_month_visits": 121314343.881164,
      "unique_users": 20185527.011566,
      "pages_per_visit": 4.37918377879007
    },
    {
      "global_rank": 368,
      "domain": "web.de",
      "category": "Computers_Electronics_and_Technology/Email",
      "avg_month_visits": 100856034.925453,
      "curr_month_visits": 100856034.925453,
      "unique_users": 11232294.452723,
      "pages_per_visit": 6.99284173734062
    },
    {
      "global_rank": 369,
      "domain": "douban.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 80155845.6899263,
      "curr_month_visits": 80155845.6899263,
      "unique_users": 25094503.7659046,
      "pages_per_visit": 8.67491252631485
    },
    {
      "global_rank": 370,
      "domain": "goo.gl",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 180623050.354099,
      "curr_month_visits": 180623050.354099,
      "unique_users": 98697271.7041349,
      "pages_per_visit": 1.28557376399043
    },
    {
      "global_rank": 371,
      "domain": "poste.it",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 88832804.3510534,
      "curr_month_visits": 88832804.3510534,
      "unique_users": 27496231.6270567,
      "pages_per_visit": 6.47173862394509
    },
    {
      "global_rank": 372,
      "domain": "bol.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 75397671.2129318,
      "curr_month_visits": 75397671.2129318,
      "unique_users": 18790779.4497763,
      "pages_per_visit": 6.20823344050821
    },
    {
      "global_rank": 373,
      "domain": "as.com",
      "category": "All",
      "avg_month_visits": 148005080.012157,
      "curr_month_visits": 148005080.012157,
      "unique_users": 29401218.1235945,
      "pages_per_visit": 2.79208384543806
    },
    {
      "global_rank": 374,
      "domain": "ticketmaster.com",
      "category": "E-commerce_and_Shopping/Tickets",
      "avg_month_visits": 113341719.792339,
      "curr_month_visits": 113341719.792339,
      "unique_users": 62439992.6877246,
      "pages_per_visit": 3.42759691941851
    },
    {
      "global_rank": 375,
      "domain": "stripchatgirls.com",
      "category": "Adult",
      "avg_month_visits": 119330304.239563,
      "curr_month_visits": 119330304.239563,
      "unique_users": 46971442.0127653,
      "pages_per_visit": 2.5504652810177
    },
    {
      "global_rank": 376,
      "domain": "streamingcommunity.computer",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 107218982.082888,
      "curr_month_visits": 107218982.082888,
      "unique_users": 7312018.53837719,
      "pages_per_visit": 3.9098353831836
    },
    {
      "global_rank": 377,
      "domain": "gov.br",
      "category": "All",
      "avg_month_visits": 131001936.878597,
      "curr_month_visits": 131001936.878597,
      "unique_users": 55282360.0519989,
      "pages_per_visit": 2.90655598249836
    },
    {
      "global_rank": 378,
      "domain": "olx.com.br",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 82928134.3891784,
      "curr_month_visits": 82928134.3891784,
      "unique_users": 22218374.2504174,
      "pages_per_visit": 7.25875957022946
    },
    {
      "global_rank": 379,
      "domain": "site.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 80631577.5877202,
      "curr_month_visits": 80631577.5877202,
      "unique_users": 25737295.6123821,
      "pages_per_visit": 8.30721011140807
    },
    {
      "global_rank": 380,
      "domain": "amazon.com.au",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 68693382.844569,
      "curr_month_visits": 68693382.844569,
      "unique_users": 21377879.2347404,
      "pages_per_visit": 6.86331983001667
    },
    {
      "global_rank": 381,
      "domain": "dinotube.com",
      "category": "Adult",
      "avg_month_visits": 61224054.7148864,
      "curr_month_visits": 61224054.7148864,
      "unique_users": 19356422.3545641,
      "pages_per_visit": 6.49828502745669
    },
    {
      "global_rank": 382,
      "domain": "zalo.me",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 109331246.311871,
      "curr_month_visits": 109331246.311871,
      "unique_users": 19483600.4896917,
      "pages_per_visit": 4.81188279601946
    },
    {
      "global_rank": 383,
      "domain": "hetapus.com",
      "category": "Adult",
      "avg_month_visits": 113423114.390666,
      "curr_month_visits": 113423114.390666,
      "unique_users": 61769759.3432926,
      "pages_per_visit": 2.47762355934886
    },
    {
      "global_rank": 384,
      "domain": "elmundo.es",
      "category": "All",
      "avg_month_visits": 116304168.494684,
      "curr_month_visits": 116304168.494684,
      "unique_users": 26037749.1653267,
      "pages_per_visit": 2.85571202896987
    },
    {
      "global_rank": 385,
      "domain": "hollywoodbets.net",
      "category": "Gambling/Sports_Betting",
      "avg_month_visits": 56565490.4747342,
      "curr_month_visits": 56565490.4747342,
      "unique_users": 3769676.86916475,
      "pages_per_visit": 15.6814729274679
    },
    {
      "global_rank": 386,
      "domain": "crunchyroll.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 122131685.051587,
      "curr_month_visits": 122131685.051587,
      "unique_users": 21692503.9494163,
      "pages_per_visit": 4.13970057009281
    },
    {
      "global_rank": 387,
      "domain": "google.com.tw",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 72822114.3843904,
      "curr_month_visits": 72822114.3843904,
      "unique_users": 7823097.36253759,
      "pages_per_visit": 12.1400471786544
    },
    {
      "global_rank": 388,
      "domain": "moneycontrol.com",
      "category": "Finance/Investing",
      "avg_month_visits": 121030035.643516,
      "curr_month_visits": 121030035.643516,
      "unique_users": 35196917.0978,
      "pages_per_visit": 3.46931554092709
    },
    {
      "global_rank": 389,
      "domain": "corriere.it",
      "category": "All",
      "avg_month_visits": 115494178.558646,
      "curr_month_visits": 115494178.558646,
      "unique_users": 24276003.5577881,
      "pages_per_visit": 3.7093633325727
    },
    {
      "global_rank": 390,
      "domain": "shop.app",
      "category": "Business_and_Consumer_Services/Business_Services",
      "avg_month_visits": 93767940.8140392,
      "curr_month_visits": 93767940.8140392,
      "unique_users": 53611480.2281754,
      "pages_per_visit": 2.34719530043431
    },
    {
      "global_rank": 391,
      "domain": "mos.ru",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 90828217.1161141,
      "curr_month_visits": 90828217.1161141,
      "unique_users": 17393258.1180461,
      "pages_per_visit": 7.76705118966337
    },
    {
      "global_rank": 392,
      "domain": "hdtube.porn",
      "category": "Adult",
      "avg_month_visits": 79578614.2824118,
      "curr_month_visits": 79578614.2824118,
      "unique_users": 47139147.5109716,
      "pages_per_visit": 3.80753312611667
    },
    {
      "global_rank": 393,
      "domain": "nexusmods.com",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 58978278.7771028,
      "curr_month_visits": 58978278.7771028,
      "unique_users": 12004001.2348219,
      "pages_per_visit": 14.6524462766548
    },
    {
      "global_rank": 394,
      "domain": "uchi.ru",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 54870822.0729137,
      "curr_month_visits": 54870822.0729137,
      "unique_users": 12813550.0835573,
      "pages_per_visit": 14.1208971429335
    },
    {
      "global_rank": 395,
      "domain": "drom.ru",
      "category": "Vehicles/Vehicles",
      "avg_month_visits": 66992365.8299687,
      "curr_month_visits": 66992365.8299687,
      "unique_users": 14537439.6607335,
      "pages_per_visit": 12.7446933582673
    },
    {
      "global_rank": 396,
      "domain": "citi.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 115956320.097015,
      "curr_month_visits": 115956320.097015,
      "unique_users": 25259979.1470419,
      "pages_per_visit": 4.67276234751931
    },
    {
      "global_rank": 397,
      "domain": "thisvid.com",
      "category": "Adult",
      "avg_month_visits": 55210593.8044411,
      "curr_month_visits": 55210593.8044411,
      "unique_users": 12230557.7223634,
      "pages_per_visit": 13.5312159524617
    },
    {
      "global_rank": 398,
      "domain": "gmail.com",
      "category": "Computers_Electronics_and_Technology/Email",
      "avg_month_visits": 191263387.29697,
      "curr_month_visits": 191263387.29697,
      "unique_users": 66271336.0656006,
      "pages_per_visit": 1.22793677699778
    },
    {
      "global_rank": 399,
      "domain": "wecima.movie",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 82615344.252547,
      "curr_month_visits": 82615344.252547,
      "unique_users": 9221473.00219661,
      "pages_per_visit": 4.04933196167726
    },
    {
      "global_rank": 400,
      "domain": "yandex.com.tr",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 69707023.0451605,
      "curr_month_visits": 69707023.0451605,
      "unique_users": 17012915.7773623,
      "pages_per_visit": 8.42936287022766
    },
    {
      "global_rank": 401,
      "domain": "wetransfer.com",
      "category": "Computers_Electronics_and_Technology/File_Sharing_and_Hosting",
      "avg_month_visits": 110455349.584523,
      "curr_month_visits": 110455349.584523,
      "unique_users": 38441382.6777674,
      "pages_per_visit": 3.57958772107152
    },
    {
      "global_rank": 402,
      "domain": "dlsite.com",
      "category": "Adult",
      "avg_month_visits": 81739564.1070831,
      "curr_month_visits": 81739564.1070831,
      "unique_users": 17478486.1588662,
      "pages_per_visit": 6.23334600239121
    },
    {
      "global_rank": 403,
      "domain": "quizlet.com",
      "category": "All",
      "avg_month_visits": 111298916.055672,
      "curr_month_visits": 111298916.055672,
      "unique_users": 31359204.5894978,
      "pages_per_visit": 4.47691042490059
    },
    {
      "global_rank": 404,
      "domain": "patreon.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 104444660.73264,
      "curr_month_visits": 104444660.73264,
      "unique_users": 33514588.7389376,
      "pages_per_visit": 3.87705341249393
    },
    {
      "global_rank": 405,
      "domain": "aniwatchtv.to",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 112271476.343524,
      "curr_month_visits": 112271476.343524,
      "unique_users": 12208828.5719045,
      "pages_per_visit": 5.09302741995793
    },
    {
      "global_rank": 406,
      "domain": "elpais.com",
      "category": "All",
      "avg_month_visits": 127590701.817831,
      "curr_month_visits": 127590701.817831,
      "unique_users": 37050415.2733539,
      "pages_per_visit": 2.30560076160089
    },
    {
      "global_rank": 407,
      "domain": "quizizz.com",
      "category": "Science_and_Education/History",
      "avg_month_visits": 63039135.3250692,
      "curr_month_visits": 63039135.3250692,
      "unique_users": 23947073.2048527,
      "pages_per_visit": 9.1756014160688
    },
    {
      "global_rank": 408,
      "domain": "tripadvisor.com",
      "category": "All",
      "avg_month_visits": 121589939.395881,
      "curr_month_visits": 121589939.395881,
      "unique_users": 75383322.3079876,
      "pages_per_visit": 2.95586652871035
    },
    {
      "global_rank": 409,
      "domain": "maps.google.com",
      "category": "All",
      "avg_month_visits": 186108888.34899,
      "curr_month_visits": 186108888.34899,
      "unique_users": 61002749.8281286,
      "pages_per_visit": 1.22492192413975
    },
    {
      "global_rank": 410,
      "domain": "tribunnews.com",
      "category": "All",
      "avg_month_visits": 107279394.626952,
      "curr_month_visits": 107279394.626952,
      "unique_users": 25399016.9212752,
      "pages_per_visit": 3.09801872096258
    },
    {
      "global_rank": 411,
      "domain": "sohu.com",
      "category": "All",
      "avg_month_visits": 118655600.54193,
      "curr_month_visits": 118655600.54193,
      "unique_users": 38984675.6613017,
      "pages_per_visit": 3.10653105872888
    },
    {
      "global_rank": 412,
      "domain": "salesforce.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 104178798.640369,
      "curr_month_visits": 104178798.640369,
      "unique_users": 13630608.9555356,
      "pages_per_visit": 5.92281947204038
    },
    {
      "global_rank": 413,
      "domain": "hindustantimes.com",
      "category": "All",
      "avg_month_visits": 134471618.348738,
      "curr_month_visits": 134471618.348738,
      "unique_users": 62434124.3368011,
      "pages_per_visit": 1.79373823073096
    },
    {
      "global_rank": 415,
      "domain": "coinmarketcap.com",
      "category": "Finance/Investing",
      "avg_month_visits": 98665364.7213624,
      "curr_month_visits": 98665364.7213624,
      "unique_users": 13603211.0931739,
      "pages_per_visit": 2.90908655836852
    },
    {
      "global_rank": 417,
      "domain": "investing.com",
      "category": "Finance/Investing",
      "avg_month_visits": 131300300.94722,
      "curr_month_visits": 131300300.94722,
      "unique_users": 22519490.6613068,
      "pages_per_visit": 3.03169723145656
    },
    {
      "global_rank": 418,
      "domain": "schwab.com",
      "category": "Finance/Investing",
      "avg_month_visits": 81572572.5790845,
      "curr_month_visits": 81572572.5790845,
      "unique_users": 11329068.5670999,
      "pages_per_visit": 7.43877065964749
    },
    {
      "global_rank": 419,
      "domain": "zendesk.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 73720195.9934132,
      "curr_month_visits": 73720195.9934132,
      "unique_users": 37568366.4946963,
      "pages_per_visit": 6.65675983179385
    },
    {
      "global_rank": 420,
      "domain": "trilltrill.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 169811682.161002,
      "curr_month_visits": 169811682.161002,
      "unique_users": 24084816.8777945,
      "pages_per_visit": 1.68448283957083
    },
    {
      "global_rank": 421,
      "domain": "translate.goog",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 122528835.298042,
      "curr_month_visits": 122528835.298042,
      "unique_users": 66853843.1859989,
      "pages_per_visit": 2.62961094311652
    },
    {
      "global_rank": 422,
      "domain": "alibaba.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 73569387.1665873,
      "curr_month_visits": 73569387.1665873,
      "unique_users": 32420606.4276821,
      "pages_per_visit": 6.96209075601781
    },
    {
      "global_rank": 423,
      "domain": "hotpepper.jp",
      "category": "Food_and_Drink/Food_and_Drink",
      "avg_month_visits": 73639683.4146593,
      "curr_month_visits": 73639683.4146593,
      "unique_users": 27299500.7152654,
      "pages_per_visit": 6.54618425403795
    },
    {
      "global_rank": 424,
      "domain": "gamewith.jp",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 120196429.20257,
      "curr_month_visits": 120196429.20257,
      "unique_users": 13980391.9758669,
      "pages_per_visit": 3.06428479732164
    },
    {
      "global_rank": 425,
      "domain": "acesso.gov.br",
      "category": "All",
      "avg_month_visits": 120220620.442149,
      "curr_month_visits": 120220620.442149,
      "unique_users": 35567363.6662185,
      "pages_per_visit": 3.00776570886153
    },
    {
      "global_rank": 426,
      "domain": "washingtonpost.com",
      "category": "All",
      "avg_month_visits": 124152275.512545,
      "curr_month_visits": 124152275.512545,
      "unique_users": 41625052.1059526,
      "pages_per_visit": 2.65638908915243
    },
    {
      "global_rank": 427,
      "domain": "desitales2.com",
      "category": "Adult",
      "avg_month_visits": 50073847.3315674,
      "curr_month_visits": 50073847.3315674,
      "unique_users": 19457565.2358777,
      "pages_per_visit": 8.28379337138957
    },
    {
      "global_rank": 428,
      "domain": "bet365.com",
      "category": "Gambling/Sports_Betting",
      "avg_month_visits": 106603619.706933,
      "curr_month_visits": 106603619.706933,
      "unique_users": 14212536.8987461,
      "pages_per_visit": 6.24246900293841
    },
    {
      "global_rank": 429,
      "domain": "aws.amazon.com",
      "category": "Computers_Electronics_and_Technology/Web_Hosting_and_Domain_Names",
      "avg_month_visits": 63130415.6197802,
      "curr_month_visits": 63130415.6197802,
      "unique_users": 11474464.1188085,
      "pages_per_visit": 13.4652448671594
    },
    {
      "global_rank": 430,
      "domain": "ukr.net",
      "category": "All",
      "avg_month_visits": 102233458.939982,
      "curr_month_visits": 102233458.939982,
      "unique_users": 8529058.25180147,
      "pages_per_visit": 5.99192797337992
    },
    {
      "global_rank": 431,
      "domain": "youjizz.com",
      "category": "Adult",
      "avg_month_visits": 70113545.1291878,
      "curr_month_visits": 70113545.1291878,
      "unique_users": 21250304.4606283,
      "pages_per_visit": 7.09125097605049
    },
    {
      "global_rank": 432,
      "domain": "box.com",
      "category": "Computers_Electronics_and_Technology/File_Sharing_and_Hosting",
      "avg_month_visits": 72800406.0774701,
      "curr_month_visits": 72800406.0774701,
      "unique_users": 11298491.1834996,
      "pages_per_visit": 10.4816720294458
    },
    {
      "global_rank": 433,
      "domain": "imgur.com",
      "category": "Computers_Electronics_and_Technology/File_Sharing_and_Hosting",
      "avg_month_visits": 100695097.062116,
      "curr_month_visits": 100695097.062116,
      "unique_users": 37405324.1529591,
      "pages_per_visit": 3.66194245713309
    },
    {
      "global_rank": 434,
      "domain": "mangaraw.ma",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 44289816.5110083,
      "curr_month_visits": 44289816.5110083,
      "unique_users": 2681329.70647143,
      "pages_per_visit": 15.4295336225944
    },
    {
      "global_rank": 435,
      "domain": "t-mobile.com",
      "category": "Computers_Electronics_and_Technology/Telecommunications",
      "avg_month_visits": 122440472.474496,
      "curr_month_visits": 122440472.474496,
      "unique_users": 25494656.0909008,
      "pages_per_visit": 3.17343367592712
    },
    {
      "global_rank": 436,
      "domain": "gismeteo.ru",
      "category": "All",
      "avg_month_visits": 130049322.247868,
      "curr_month_visits": 130049322.247868,
      "unique_users": 17080840.5151885,
      "pages_per_visit": 2.70607590935093
    },
    {
      "global_rank": 437,
      "domain": "pikabu.ru",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 113812392.208735,
      "curr_month_visits": 113812392.208735,
      "unique_users": 34924969.5477445,
      "pages_per_visit": 3.47914274527847
    },
    {
      "global_rank": 438,
      "domain": "blackboard.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 91187386.5452171,
      "curr_month_visits": 91187386.5452171,
      "unique_users": 6661788.94921832,
      "pages_per_visit": 8.25917935260467
    },
    {
      "global_rank": 439,
      "domain": "csdn.net",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 126404781.578377,
      "curr_month_visits": 126404781.578377,
      "unique_users": 24546495.0147743,
      "pages_per_visit": 2.48959628502227
    },
    {
      "global_rank": 440,
      "domain": "amazon.sa",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 51243518.3893576,
      "curr_month_visits": 51243518.3893576,
      "unique_users": 25377587.4768266,
      "pages_per_visit": 9.27069637505477
    },
    {
      "global_rank": 442,
      "domain": "hdfcbank.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 89080672.1225913,
      "curr_month_visits": 89080672.1225913,
      "unique_users": 24701169.4713497,
      "pages_per_visit": 5.53667360656411
    },
    {
      "global_rank": 443,
      "domain": "repubblica.it",
      "category": "All",
      "avg_month_visits": 114737755.691671,
      "curr_month_visits": 114737755.691671,
      "unique_users": 19208347.2094383,
      "pages_per_visit": 3.27883750578449
    },
    {
      "global_rank": 444,
      "domain": "cvs.com",
      "category": "Health/Pharmacy",
      "avg_month_visits": 88992872.0115962,
      "curr_month_visits": 88992872.0115962,
      "unique_users": 36940758.9441721,
      "pages_per_visit": 4.79384760407882
    },
    {
      "global_rank": 445,
      "domain": "outlook.com",
      "category": "Computers_Electronics_and_Technology/Email",
      "avg_month_visits": 158688023.061215,
      "curr_month_visits": 158688023.061215,
      "unique_users": 35082822.7352309,
      "pages_per_visit": 1.54187713412759
    },
    {
      "global_rank": 446,
      "domain": "sciencedirect.com",
      "category": "All",
      "avg_month_visits": 105032179.377382,
      "curr_month_visits": 105032179.377382,
      "unique_users": 36307822.455995,
      "pages_per_visit": 3.33258935887789
    },
    {
      "global_rank": 447,
      "domain": "pornhat.com",
      "category": "Adult",
      "avg_month_visits": 53778053.9088377,
      "curr_month_visits": 53778053.9088377,
      "unique_users": 24409393.5238115,
      "pages_per_visit": 5.17880467506744
    },
    {
      "global_rank": 448,
      "domain": "twimg.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 95981209.8738444,
      "curr_month_visits": 95981209.8738444,
      "unique_users": 23043809.5157365,
      "pages_per_visit": 4.15288979370336
    },
    {
      "global_rank": 449,
      "domain": "rakuten-sec.co.jp",
      "category": "Finance/Investing",
      "avg_month_visits": 70715032.547186,
      "curr_month_visits": 70715032.547186,
      "unique_users": 8273508.45497137,
      "pages_per_visit": 8.88417680933554
    },
    {
      "global_rank": 450,
      "domain": "yandex.by",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 76518986.3826856,
      "curr_month_visits": 76518986.3826856,
      "unique_users": 5695793.30029628,
      "pages_per_visit": 9.52778447158329
    },
    {
      "global_rank": 451,
      "domain": "pornzog.com",
      "category": "Adult",
      "avg_month_visits": 88861656.9296688,
      "curr_month_visits": 88861656.9296688,
      "unique_users": 45637104.5125544,
      "pages_per_visit": 3.43573639838626
    },
    {
      "global_rank": 453,
      "domain": "redfin.com",
      "category": "Business_and_Consumer_Services/Real_Estate",
      "avg_month_visits": 93905605.7389542,
      "curr_month_visits": 93905605.7389542,
      "unique_users": 31924465.9874416,
      "pages_per_visit": 4.75905591112743
    },
    {
      "global_rank": 454,
      "domain": "blog.jp",
      "category": "Computers_Electronics_and_Technology/Web_Hosting_and_Domain_Names",
      "avg_month_visits": 119356423.314927,
      "curr_month_visits": 119356423.314927,
      "unique_users": 17263730.6053396,
      "pages_per_visit": 3.23106600140126
    },
    {
      "global_rank": 455,
      "domain": "rbc.ru",
      "category": "All",
      "avg_month_visits": 118670918.752784,
      "curr_month_visits": 118670918.752784,
      "unique_users": 22965378.4967129,
      "pages_per_visit": 2.74679789460626
    },
    {
      "global_rank": 456,
      "domain": "reverso.net",
      "category": "Reference_Materials/Maps",
      "avg_month_visits": 61098249.2373448,
      "curr_month_visits": 61098249.2373448,
      "unique_users": 26123921.1901512,
      "pages_per_visit": 9.38801879118312
    },
    {
      "global_rank": 457,
      "domain": "dmm.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 100532338.039622,
      "curr_month_visits": 100532338.039622,
      "unique_users": 22482806.1211001,
      "pages_per_visit": 4.24292782416511
    },
    {
      "global_rank": 458,
      "domain": "go.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 106139644.425397,
      "curr_month_visits": 106139644.425397,
      "unique_users": 48920392.9972806,
      "pages_per_visit": 2.38054493829343
    },
    {
      "global_rank": 459,
      "domain": "videy.co",
      "category": "Computers_Electronics_and_Technology/File_Sharing_and_Hosting",
      "avg_month_visits": 40234723.7569579,
      "curr_month_visits": 40234723.7569579,
      "unique_users": 10530167.8741057,
      "pages_per_visit": 12.4028847631364
    },
    {
      "global_rank": 460,
      "domain": "google.com.hk",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 82686072.7281546,
      "curr_month_visits": 82686072.7281546,
      "unique_users": 11524805.0600537,
      "pages_per_visit": 6.89955537764737
    },
    {
      "global_rank": 461,
      "domain": "supjav.com",
      "category": "Adult",
      "avg_month_visits": 48516170.7840032,
      "curr_month_visits": 48516170.7840032,
      "unique_users": 6455123.73433589,
      "pages_per_visit": 17.2453516551121
    },
    {
      "global_rank": 463,
      "domain": "goodreads.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 84932988.9238817,
      "curr_month_visits": 84932988.9238817,
      "unique_users": 34885055.0871007,
      "pages_per_visit": 4.67104376315287
    },
    {
      "global_rank": 464,
      "domain": "betano.com",
      "category": "Gambling/Sports_Betting",
      "avg_month_visits": 112403019.288335,
      "curr_month_visits": 112403019.288335,
      "unique_users": 49619614.4348013,
      "pages_per_visit": 3.02689865674899
    },
    {
      "global_rank": 465,
      "domain": "n-tv.de",
      "category": "All",
      "avg_month_visits": 131959197.944892,
      "curr_month_visits": 131959197.944892,
      "unique_users": 17606029.7120209,
      "pages_per_visit": 2.93119140830482
    },
    {
      "global_rank": 466,
      "domain": "comick.io",
      "category": "Computers_Electronics_and_Technology/Computer_Hardware",
      "avg_month_visits": 97766142.2981176,
      "curr_month_visits": 97766142.2981176,
      "unique_users": 5724338.27696224,
      "pages_per_visit": 6.87781721507903
    },
    {
      "global_rank": 467,
      "domain": "perplexity.ai",
      "category": "Reference_Materials/Dictionaries_and_Encyclopedias",
      "avg_month_visits": 88834706.0387959,
      "curr_month_visits": 88834706.0387959,
      "unique_users": 12677159.8423141,
      "pages_per_visit": 4.1557330456654
    },
    {
      "global_rank": 468,
      "domain": "jable.tv",
      "category": "Adult",
      "avg_month_visits": 58302579.6888415,
      "curr_month_visits": 58302579.6888415,
      "unique_users": 11412580.8865118,
      "pages_per_visit": 9.88875438594773
    },
    {
      "global_rank": 469,
      "domain": "clarosva.com",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 142127591.286751,
      "curr_month_visits": 142127591.286751,
      "unique_users": 24395350.6430836,
      "pages_per_visit": 1.63768020087855
    },
    {
      "global_rank": 470,
      "domain": "goo.ne.jp",
      "category": "All",
      "avg_month_visits": 108885432.537986,
      "curr_month_visits": 108885432.537986,
      "unique_users": 31384075.2639532,
      "pages_per_visit": 2.66939425070043
    },
    {
      "global_rank": 471,
      "domain": "boyfriendtv.com",
      "category": "Adult",
      "avg_month_visits": 52907414.0679202,
      "curr_month_visits": 52907414.0679202,
      "unique_users": 10355956.4933935,
      "pages_per_visit": 10.9067887900564
    },
    {
      "global_rank": 472,
      "domain": "japanpost.jp",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 97753609.2686613,
      "curr_month_visits": 97753609.2686613,
      "unique_users": 31766922.7024217,
      "pages_per_visit": 3.79354290686579
    },
    {
      "global_rank": 473,
      "domain": "myworkdayjobs.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 97520882.46645,
      "curr_month_visits": 97520882.46645,
      "unique_users": 33030784.708812,
      "pages_per_visit": 4.23326625285933
    },
    {
      "global_rank": 474,
      "domain": "flickr.com",
      "category": "Hobbies_and_Leisure/Photography",
      "avg_month_visits": 45211894.0752894,
      "curr_month_visits": 45211894.0752894,
      "unique_users": 22577407.0491134,
      "pages_per_visit": 16.7844093191992
    },
    {
      "global_rank": 475,
      "domain": "windy.com",
      "category": "Sports/Baseball",
      "avg_month_visits": 61622932.423886,
      "curr_month_visits": 61622932.423886,
      "unique_users": 11760719.7209602,
      "pages_per_visit": 14.2178151721892
    },
    {
      "global_rank": 476,
      "domain": "loobygameshub.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 100675055.038916,
      "curr_month_visits": 100675055.038916,
      "unique_users": 4498042.45851975,
      "pages_per_visit": 4.77289474558756
    },
    {
      "global_rank": 477,
      "domain": "caixa.gov.br",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 73987264.3769175,
      "curr_month_visits": 73987264.3769175,
      "unique_users": 19362543.3568458,
      "pages_per_visit": 6.2154911490033
    },
    {
      "global_rank": 478,
      "domain": "hqporner.com",
      "category": "Adult",
      "avg_month_visits": 62358016.0217049,
      "curr_month_visits": 62358016.0217049,
      "unique_users": 13618801.3489587,
      "pages_per_visit": 7.13936625669614
    },
    {
      "global_rank": 479,
      "domain": "casinoplus.com.ph",
      "category": "Gambling/Casinos",
      "avg_month_visits": 74330920.4597434,
      "curr_month_visits": 74330920.4597434,
      "unique_users": 11051823.9462986,
      "pages_per_visit": 7.11932630045402
    },
    {
      "global_rank": 480,
      "domain": "bingoplus.com",
      "category": "Gambling/Lottery",
      "avg_month_visits": 62905536.0596436,
      "curr_month_visits": 62905536.0596436,
      "unique_users": 5016816.16043282,
      "pages_per_visit": 10.9025940778765
    },
    {
      "global_rank": 481,
      "domain": "sportybet.com",
      "category": "Gambling/Sports_Betting",
      "avg_month_visits": 68951763.7829145,
      "curr_month_visits": 68951763.7829145,
      "unique_users": 4377538.6009681,
      "pages_per_visit": 15.6687934083328
    },
    {
      "global_rank": 482,
      "domain": "liftoff.io",
      "category": "Business_and_Consumer_Services/Business_and_Consumer_Services",
      "avg_month_visits": 126968710.340246,
      "curr_month_visits": 126968710.340246,
      "unique_users": 54419492.3837004,
      "pages_per_visit": 1.50821529410215
    },
    {
      "global_rank": 483,
      "domain": "fapello.com",
      "category": "Adult",
      "avg_month_visits": 57520673.2573476,
      "curr_month_visits": 57520673.2573476,
      "unique_users": 21182753.4797224,
      "pages_per_visit": 7.98815273113004
    },
    {
      "global_rank": 484,
      "domain": "tenki.jp",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 146704760.81448,
      "curr_month_visits": 146704760.81448,
      "unique_users": 22770046.2543822,
      "pages_per_visit": 2.35994993252557
    },
    {
      "global_rank": 485,
      "domain": "tokopedia.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 69495711.7901148,
      "curr_month_visits": 69495711.7901148,
      "unique_users": 18000947.2725273,
      "pages_per_visit": 7.9679434073581
    },
    {
      "global_rank": 486,
      "domain": "peacocktv.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 84420703.4678304,
      "curr_month_visits": 84420703.4678304,
      "unique_users": 26950220.1232257,
      "pages_per_visit": 5.11471026125026
    },
    {
      "global_rank": 487,
      "domain": "google.com.ar",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 72128168.514587,
      "curr_month_visits": 72128168.514587,
      "unique_users": 9896712.40018978,
      "pages_per_visit": 7.61003130554049
    },
    {
      "global_rank": 489,
      "domain": "getadblock.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 142562021.549653,
      "curr_month_visits": 142562021.549653,
      "unique_users": 76925485.2913078,
      "pages_per_visit": 1.17442861649544
    },
    {
      "global_rank": 490,
      "domain": "gmx.net",
      "category": "Computers_Electronics_and_Technology/Email",
      "avg_month_visits": 80837119.634091,
      "curr_month_visits": 80837119.634091,
      "unique_users": 7726343.38666814,
      "pages_per_visit": 6.97072838544158
    },
    {
      "global_rank": 491,
      "domain": "weather.yahoo.co.jp",
      "category": "All",
      "avg_month_visits": 151985105.152215,
      "curr_month_visits": 151985105.152215,
      "unique_users": 19575933.1671762,
      "pages_per_visit": 2.09935685976703
    },
    {
      "global_rank": 492,
      "domain": "ndtv.com",
      "category": "All",
      "avg_month_visits": 114095157.035012,
      "curr_month_visits": 114095157.035012,
      "unique_users": 35027453.4344615,
      "pages_per_visit": 2.13000058041746
    },
    {
      "global_rank": 493,
      "domain": "stackoverflow.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 141661615.87267,
      "curr_month_visits": 141661615.87267,
      "unique_users": 30764641.1827505,
      "pages_per_visit": 2.04182152801172
    },
    {
      "global_rank": 494,
      "domain": "betnacional.com",
      "category": "Gambling/Sports_Betting",
      "avg_month_visits": 104425343.413179,
      "curr_month_visits": 104425343.413179,
      "unique_users": 23737743.128516,
      "pages_per_visit": 2.51878601214721
    },
    {
      "global_rank": 495,
      "domain": "betika.com",
      "category": "Gambling/Gambling",
      "avg_month_visits": 56246876.1384095,
      "curr_month_visits": 56246876.1384095,
      "unique_users": 4207678.7684996,
      "pages_per_visit": 19.5342252604014
    },
    {
      "global_rank": 496,
      "domain": "otto.de",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 55584534.216548,
      "curr_month_visits": 55584534.216548,
      "unique_users": 20126729.8260824,
      "pages_per_visit": 7.43059648639691
    },
    {
      "global_rank": 497,
      "domain": "4kporn.xxx",
      "category": "Adult",
      "avg_month_visits": 84602611.9678009,
      "curr_month_visits": 84602611.9678009,
      "unique_users": 44456368.9752559,
      "pages_per_visit": 3.96562024109049
    },
    {
      "global_rank": 498,
      "domain": "lenta.ru",
      "category": "All",
      "avg_month_visits": 103454780.963637,
      "curr_month_visits": 103454780.963637,
      "unique_users": 19677233.7700983,
      "pages_per_visit": 3.0704445566316
    },
    {
      "global_rank": 499,
      "domain": "medium.com",
      "category": "Business_and_Consumer_Services/Business_and_Consumer_Services",
      "avg_month_visits": 121027087.926402,
      "curr_month_visits": 121027087.926402,
      "unique_users": 59648114.876804,
      "pages_per_visit": 2.08735457222823
    },
    {
      "global_rank": 500,
      "domain": "livescore.com",
      "category": "Sports/Soccer",
      "avg_month_visits": 95799533.6554921,
      "curr_month_visits": 95799533.6554921,
      "unique_users": 11412483.1575206,
      "pages_per_visit": 4.60875251148761
    },
    {
      "global_rank": 501,
      "domain": "sbisec.co.jp",
      "category": "Finance/Investing",
      "avg_month_visits": 63784745.9376583,
      "curr_month_visits": 63784745.9376583,
      "unique_users": 6416884.32232809,
      "pages_per_visit": 10.1773619953826
    },
    {
      "global_rank": 502,
      "domain": "oraclecloud.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 69463916.6836239,
      "curr_month_visits": 69463916.6836239,
      "unique_users": 21004546.2846764,
      "pages_per_visit": 6.26822073774199
    },
    {
      "global_rank": 504,
      "domain": "newsweek.com",
      "category": "All",
      "avg_month_visits": 123192026.896619,
      "curr_month_visits": 123192026.896619,
      "unique_users": 62289368.2542823,
      "pages_per_visit": 1.49357106613364
    },
    {
      "global_rank": 505,
      "domain": "chatwork.com",
      "category": "Business_and_Consumer_Services/Business_Services",
      "avg_month_visits": 62085615.3645031,
      "curr_month_visits": 62085615.3645031,
      "unique_users": 3509752.81458955,
      "pages_per_visit": 17.4366601385157
    },
    {
      "global_rank": 506,
      "domain": "udemy.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 81660393.6249841,
      "curr_month_visits": 81660393.6249841,
      "unique_users": 19951081.1307609,
      "pages_per_visit": 5.68083785786109
    },
    {
      "global_rank": 507,
      "domain": "spankbang.party",
      "category": "Adult",
      "avg_month_visits": 53009623.9567132,
      "curr_month_visits": 53009623.9567132,
      "unique_users": 23232856.7914029,
      "pages_per_visit": 7.15870373073923
    },
    {
      "global_rank": 508,
      "domain": "shopee.ph",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 59434000.8112797,
      "curr_month_visits": 59434000.8112797,
      "unique_users": 20964919.0280356,
      "pages_per_visit": 7.33913176613764
    },
    {
      "global_rank": 509,
      "domain": "stake.bet",
      "category": "Gambling/Gambling",
      "avg_month_visits": 42528721.3789079,
      "curr_month_visits": 42528721.3789079,
      "unique_users": 22856529.8686445,
      "pages_per_visit": 2.69922617140981
    },
    {
      "global_rank": 510,
      "domain": "economictimes.com",
      "category": "Finance/Investing",
      "avg_month_visits": 122903663.803938,
      "curr_month_visits": 122903663.803938,
      "unique_users": 50679793.3975567,
      "pages_per_visit": 1.94833428488194
    },
    {
      "global_rank": 512,
      "domain": "9animetv.to",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 95596262.731318,
      "curr_month_visits": 95596262.731318,
      "unique_users": 10466729.2662222,
      "pages_per_visit": 4.66591737788956
    },
    {
      "global_rank": 514,
      "domain": "fanmtl.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 85062941.2428798,
      "curr_month_visits": 85062941.2428798,
      "unique_users": 3331207.52415071,
      "pages_per_visit": 18.2869290587644
    },
    {
      "global_rank": 515,
      "domain": "tokyomotion.net",
      "category": "Adult",
      "avg_month_visits": 38953789.7825047,
      "curr_month_visits": 38953789.7825047,
      "unique_users": 6443629.44222879,
      "pages_per_visit": 21.49655568447
    },
    {
      "global_rank": 516,
      "domain": "zoho.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 62429009.9675838,
      "curr_month_visits": 62429009.9675838,
      "unique_users": 7995493.59174072,
      "pages_per_visit": 12.5125717640796
    },
    {
      "global_rank": 517,
      "domain": "trello.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 81402214.8163899,
      "curr_month_visits": 81402214.8163899,
      "unique_users": 8256519.28248856,
      "pages_per_visit": 7.49606664803606
    },
    {
      "global_rank": 518,
      "domain": "kakaku.com",
      "category": "E-commerce_and_Shopping/Price_Comparison",
      "avg_month_visits": 77297495.6561251,
      "curr_month_visits": 77297495.6561251,
      "unique_users": 23604867.4593303,
      "pages_per_visit": 4.47937101447037
    },
    {
      "global_rank": 519,
      "domain": "snapinsta.app",
      "category": "Computers_Electronics_and_Technology/File_Sharing_and_Hosting",
      "avg_month_visits": 108747584.642697,
      "curr_month_visits": 108747584.642697,
      "unique_users": 22246505.3948332,
      "pages_per_visit": 2.74296421335235
    },
    {
      "global_rank": 521,
      "domain": "e-hentai.org",
      "category": "Adult",
      "avg_month_visits": 33383027.2774467,
      "curr_month_visits": 33383027.2774467,
      "unique_users": 6005191.55481066,
      "pages_per_visit": 30.2262260459798
    },
    {
      "global_rank": 523,
      "domain": "expedia.com",
      "category": "Travel_and_Tourism/Accommodation_and_Hotels",
      "avg_month_visits": 63692779.9653302,
      "curr_month_visits": 63692779.9653302,
      "unique_users": 33538221.4603526,
      "pages_per_visit": 6.95902048916535
    },
    {
      "global_rank": 524,
      "domain": "shopee.tw",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 60034329.9747521,
      "curr_month_visits": 60034329.9747521,
      "unique_users": 10867097.8840437,
      "pages_per_visit": 9.41462391336834
    },
    {
      "global_rank": 525,
      "domain": "fetlife.com",
      "category": "Adult",
      "avg_month_visits": 54024371.6852638,
      "curr_month_visits": 54024371.6852638,
      "unique_users": 3170331.69073122,
      "pages_per_visit": 18.1677690573175
    },
    {
      "global_rank": 526,
      "domain": "netkeiba.com",
      "category": "Gambling/Gambling",
      "avg_month_visits": 56491379.942155,
      "curr_month_visits": 56491379.942155,
      "unique_users": 4579015.65390449,
      "pages_per_visit": 12.6276307864603
    },
    {
      "global_rank": 527,
      "domain": "dns-shop.ru",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 69820089.2698058,
      "curr_month_visits": 69820089.2698058,
      "unique_users": 21341203.8308652,
      "pages_per_visit": 5.50652808947393
    },
    {
      "global_rank": 528,
      "domain": "animeflv.net",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 100108361.722972,
      "curr_month_visits": 100108361.722972,
      "unique_users": 7844922.39675871,
      "pages_per_visit": 4.23887125137271
    },
    {
      "global_rank": 529,
      "domain": "asos.com",
      "category": "Lifestyle/Fashion_and_Apparel",
      "avg_month_visits": 55101187.1509882,
      "curr_month_visits": 55101187.1509882,
      "unique_users": 25273143.9636032,
      "pages_per_visit": 7.31543994965935
    },
    {
      "global_rank": 530,
      "domain": "ancestry.com",
      "category": "Hobbies_and_Leisure/Ancestry_and_Genealogy",
      "avg_month_visits": 37848442.5546079,
      "curr_month_visits": 37848442.5546079,
      "unique_users": 14733633.2441873,
      "pages_per_visit": 20.3666310113839
    },
    {
      "global_rank": 531,
      "domain": "lefigaro.fr",
      "category": "All",
      "avg_month_visits": 101859059.563547,
      "curr_month_visits": 101859059.563547,
      "unique_users": 29622674.1516706,
      "pages_per_visit": 2.55841094379669
    },
    {
      "global_rank": 532,
      "domain": "byjus.com",
      "category": "All",
      "avg_month_visits": 102034526.412274,
      "curr_month_visits": 102034526.412274,
      "unique_users": 38504278.6486738,
      "pages_per_visit": 2.58928059843962
    },
    {
      "global_rank": 533,
      "domain": "gamer.com.tw",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 84984231.397406,
      "curr_month_visits": 84984231.397406,
      "unique_users": 10519882.7709101,
      "pages_per_visit": 5.46280542304302
    },
    {
      "global_rank": 534,
      "domain": "adp.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 82363004.0627144,
      "curr_month_visits": 82363004.0627144,
      "unique_users": 20809125.1440381,
      "pages_per_visit": 4.65722666373959
    },
    {
      "global_rank": 536,
      "domain": "slickdeals.net",
      "category": "E-commerce_and_Shopping/Coupons_and_Rebates",
      "avg_month_visits": 81096116.0372823,
      "curr_month_visits": 81096116.0372823,
      "unique_users": 9205169.93202913,
      "pages_per_visit": 4.10641720839656
    },
    {
      "global_rank": 537,
      "domain": "motherless.com",
      "category": "Adult",
      "avg_month_visits": 39776814.3360517,
      "curr_month_visits": 39776814.3360517,
      "unique_users": 12006260.7738615,
      "pages_per_visit": 15.0568288866106
    },
    {
      "global_rank": 538,
      "domain": "idealista.com",
      "category": "Business_and_Consumer_Services/Real_Estate",
      "avg_month_visits": 53032559.5135981,
      "curr_month_visits": 53032559.5135981,
      "unique_users": 13084986.0874466,
      "pages_per_visit": 13.244907242819
    },
    {
      "global_rank": 539,
      "domain": "olx.ua",
      "category": "E-commerce_and_Shopping/Classifieds",
      "avg_month_visits": 58466351.2241768,
      "curr_month_visits": 58466351.2241768,
      "unique_users": 10798835.7678644,
      "pages_per_visit": 10.0824863356749
    },
    {
      "global_rank": 541,
      "domain": "kick.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 98238775.4019518,
      "curr_month_visits": 98238775.4019518,
      "unique_users": 11291350.2301129,
      "pages_per_visit": 4.15469672221797
    },
    {
      "global_rank": 542,
      "domain": "fuq.com",
      "category": "Adult",
      "avg_month_visits": 56291733.4856401,
      "curr_month_visits": 56291733.4856401,
      "unique_users": 13448364.8664452,
      "pages_per_visit": 7.78286515585273
    },
    {
      "global_rank": 543,
      "domain": "trip.com",
      "category": "Travel_and_Tourism/Travel_and_Tourism",
      "avg_month_visits": 82140184.6524167,
      "curr_month_visits": 82140184.6524167,
      "unique_users": 45782218.4372722,
      "pages_per_visit": 3.22062355432029
    },
    {
      "global_rank": 544,
      "domain": "kuronekoyamato.co.jp",
      "category": "Business_and_Consumer_Services/Shipping_and_Logistics",
      "avg_month_visits": 80571933.9484765,
      "curr_month_visits": 80571933.9484765,
      "unique_users": 24843749.1132155,
      "pages_per_visit": 4.55478162063059
    },
    {
      "global_rank": 545,
      "domain": "clever.com",
      "category": "All",
      "avg_month_visits": 113611739.497801,
      "curr_month_visits": 113611739.497801,
      "unique_users": 12277744.1192299,
      "pages_per_visit": 3.62635671983718
    },
    {
      "global_rank": 546,
      "domain": "xvideos2.com",
      "category": "Adult",
      "avg_month_visits": 53970080.3185567,
      "curr_month_visits": 53970080.3185567,
      "unique_users": 13699637.1600838,
      "pages_per_visit": 8.14857169145842
    },
    {
      "global_rank": 547,
      "domain": "janitorai.com",
      "category": "Hobbies_and_Leisure/Photography",
      "avg_month_visits": 58759133.0716943,
      "curr_month_visits": 58759133.0716943,
      "unique_users": 2963680.1809718,
      "pages_per_visit": 11.3700800634498
    },
    {
      "global_rank": 549,
      "domain": "answers.microsoft.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 115804442.750596,
      "curr_month_visits": 115804442.750596,
      "unique_users": 76448757.8983431,
      "pages_per_visit": 1.68550457918105
    },
    {
      "global_rank": 550,
      "domain": "ruliweb.com",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 52997460.7122845,
      "curr_month_visits": 52997460.7122845,
      "unique_users": 6048520.19073527,
      "pages_per_visit": 16.6890681259603
    },
    {
      "global_rank": 551,
      "domain": "amazonaws.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 92854115.6671849,
      "curr_month_visits": 92854115.6671849,
      "unique_users": 42612649.0622303,
      "pages_per_visit": 2.93119225821445
    },
    {
      "global_rank": 552,
      "domain": "2gis.ru",
      "category": "Reference_Materials/Maps",
      "avg_month_visits": 57193243.4427416,
      "curr_month_visits": 57193243.4427416,
      "unique_users": 25073576.3679085,
      "pages_per_visit": 8.14865586959949
    },
    {
      "global_rank": 553,
      "domain": "orbsrv.com",
      "category": "Computers_Electronics_and_Technology/Advertising_Networks",
      "avg_month_visits": 134266613.1205,
      "curr_month_visits": 134266613.1205,
      "unique_users": 80467044.0191555,
      "pages_per_visit": 1.21953319319468
    },
    {
      "global_rank": 554,
      "domain": "hupu.com",
      "category": "Sports/Golf",
      "avg_month_visits": 65810843.9606565,
      "curr_month_visits": 65810843.9606565,
      "unique_users": 5910411.36284788,
      "pages_per_visit": 9.71242795713713
    },
    {
      "global_rank": 555,
      "domain": "nhk.or.jp",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 113164758.887983,
      "curr_month_visits": 113164758.887983,
      "unique_users": 33664206.3216766,
      "pages_per_visit": 2.42191557301356
    },
    {
      "global_rank": 557,
      "domain": "doordash.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 68911545.6617199,
      "curr_month_visits": 68911545.6617199,
      "unique_users": 31144981.3822427,
      "pages_per_visit": 5.09876220579083
    },
    {
      "global_rank": 558,
      "domain": "erothots1.com",
      "category": "Adult",
      "avg_month_visits": 51656439.3871654,
      "curr_month_visits": 51656439.3871654,
      "unique_users": 24555516.3819216,
      "pages_per_visit": 7.14378432122138
    },
    {
      "global_rank": 560,
      "domain": "gov.uk",
      "category": "All",
      "avg_month_visits": 103750026.960402,
      "curr_month_visits": 103750026.960402,
      "unique_users": 35767613.2381143,
      "pages_per_visit": 2.41153283458989
    },
    {
      "global_rank": 561,
      "domain": "eroterest.net",
      "category": "Adult",
      "avg_month_visits": 51174353.8150878,
      "curr_month_visits": 51174353.8150878,
      "unique_users": 11621628.0442869,
      "pages_per_visit": 10.1283938293302
    },
    {
      "global_rank": 562,
      "domain": "heylink.me",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 139252207.357405,
      "curr_month_visits": 139252207.357405,
      "unique_users": 23485262.1957613,
      "pages_per_visit": 2.07502692602261
    },
    {
      "global_rank": 564,
      "domain": "qidian.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 46994785.1798836,
      "curr_month_visits": 46994785.1798836,
      "unique_users": 7770220.08998713,
      "pages_per_visit": 16.237981055622
    },
    {
      "global_rank": 565,
      "domain": "oneindia.com",
      "category": "All",
      "avg_month_visits": 100218601.701271,
      "curr_month_visits": 100218601.701271,
      "unique_users": 28508560.2512153,
      "pages_per_visit": 2.29106766086659
    },
    {
      "global_rank": 566,
      "domain": "shallalflexors.top",
      "category": "Pets_and_Animals/Pets_and_Animals",
      "avg_month_visits": 58386888.7730739,
      "curr_month_visits": 58386888.7730739,
      "unique_users": 28975366.5197008,
      "pages_per_visit": 2.88038545546919
    },
    {
      "global_rank": 567,
      "domain": "epicgames.com",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 69657396.9704133,
      "curr_month_visits": 69657396.9704133,
      "unique_users": 30250537.3103278,
      "pages_per_visit": 4.17890066824631
    },
    {
      "global_rank": 568,
      "domain": "ign.com",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 116530472.316828,
      "curr_month_visits": 116530472.316828,
      "unique_users": 43882802.8228387,
      "pages_per_visit": 1.85560982905251
    },
    {
      "global_rank": 569,
      "domain": "uakino.me",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 123804435.249715,
      "curr_month_visits": 123804435.249715,
      "unique_users": 9752060.4729179,
      "pages_per_visit": 2.53432316702786
    },
    {
      "global_rank": 570,
      "domain": "cnbc.com",
      "category": "All",
      "avg_month_visits": 109919650.771472,
      "curr_month_visits": 109919650.771472,
      "unique_users": 37363604.5172958,
      "pages_per_visit": 1.93359163833604
    },
    {
      "global_rank": 571,
      "domain": "speedtest.net",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 100533393.713086,
      "curr_month_visits": 100533393.713086,
      "unique_users": 46306086.5179039,
      "pages_per_visit": 2.27936978567806
    },
    {
      "global_rank": 573,
      "domain": "page.link",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 126436544.968347,
      "curr_month_visits": 126436544.968347,
      "unique_users": 68064514.6101071,
      "pages_per_visit": 1.5926306042833
    },
    {
      "global_rank": 574,
      "domain": "klarna.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 60109497.1173877,
      "curr_month_visits": 60109497.1173877,
      "unique_users": 31343199.6755425,
      "pages_per_visit": 4.6175137653932
    },
    {
      "global_rank": 576,
      "domain": "bongacams.com",
      "category": "Adult",
      "avg_month_visits": 80613336.1121459,
      "curr_month_visits": 80613336.1121459,
      "unique_users": 29484230.2224501,
      "pages_per_visit": 3.55531634506183
    },
    {
      "global_rank": 577,
      "domain": "cbsnews.com",
      "category": "All",
      "avg_month_visits": 103143209.433,
      "curr_month_visits": 103143209.433,
      "unique_users": 62048986.1572057,
      "pages_per_visit": 1.55704755623169
    },
    {
      "global_rank": 578,
      "domain": "5ch.net",
      "category": "Games/Games",
      "avg_month_visits": 101808004.815628,
      "curr_month_visits": 101808004.815628,
      "unique_users": 10619106.7819682,
      "pages_per_visit": 4.2225788032784
    },
    {
      "global_rank": 579,
      "domain": "independent.co.uk",
      "category": "All",
      "avg_month_visits": 106253342.592462,
      "curr_month_visits": 106253342.592462,
      "unique_users": 55533861.9533923,
      "pages_per_visit": 1.75926470385715
    },
    {
      "global_rank": 580,
      "domain": "sports.yahoo.co.jp",
      "category": "All",
      "avg_month_visits": 102074261.231101,
      "curr_month_visits": 102074261.231101,
      "unique_users": 9550872.98147046,
      "pages_per_visit": 3.89703520503611
    },
    {
      "global_rank": 581,
      "domain": "librus.pl",
      "category": "Science_and_Education/History",
      "avg_month_visits": 63586925.2171497,
      "curr_month_visits": 63586925.2171497,
      "unique_users": 3631238.94273011,
      "pages_per_visit": 8.85442339320266
    },
    {
      "global_rank": 582,
      "domain": "mgeko.cc",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 73471870.5009191,
      "curr_month_visits": 73471870.5009191,
      "unique_users": 6553477.95160601,
      "pages_per_visit": 8.10292002861338
    },
    {
      "global_rank": 584,
      "domain": "tbank.ru",
      "category": "Jobs_and_Career",
      "avg_month_visits": 70469311.1848126,
      "curr_month_visits": 70469311.1848126,
      "unique_users": 25746427.5665495,
      "pages_per_visit": 4.19386597342409
    },
    {
      "global_rank": 585,
      "domain": "indianexpress.com",
      "category": "All",
      "avg_month_visits": 103734641.664269,
      "curr_month_visits": 103734641.664269,
      "unique_users": 42419400.994559,
      "pages_per_visit": 2.01555437342227
    },
    {
      "global_rank": 586,
      "domain": "duolingo.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 66629291.2394134,
      "curr_month_visits": 66629291.2394134,
      "unique_users": 15292420.045483,
      "pages_per_visit": 5.7636846218638
    },
    {
      "global_rank": 587,
      "domain": "9gag.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 98392231.3549278,
      "curr_month_visits": 98392231.3549278,
      "unique_users": 10013735.9558036,
      "pages_per_visit": 3.99751584469044
    },
    {
      "global_rank": 588,
      "domain": "jra.go.jp",
      "category": "Gambling/Gambling",
      "avg_month_visits": 45333348.8482913,
      "curr_month_visits": 45333348.8482913,
      "unique_users": 4748215.17889873,
      "pages_per_visit": 14.6096484097217
    },
    {
      "global_rank": 589,
      "domain": "jalan.net",
      "category": "Travel_and_Tourism",
      "avg_month_visits": 62788273.0525721,
      "curr_month_visits": 62788273.0525721,
      "unique_users": 26269067.4357908,
      "pages_per_visit": 6.26127820771614
    },
    {
      "global_rank": 590,
      "domain": "eci.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 37158102.7998313,
      "curr_month_visits": 37158102.7998313,
      "unique_users": 15201981.875451,
      "pages_per_visit": 8.10111715337648
    },
    {
      "global_rank": 591,
      "domain": "adjust.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 118879752.430227,
      "curr_month_visits": 118879752.430227,
      "unique_users": 55380934.2612699,
      "pages_per_visit": 1.52932974645024
    },
    {
      "global_rank": 592,
      "domain": "next.co.uk",
      "category": "Lifestyle/Fashion_and_Apparel",
      "avg_month_visits": 31018369.916056,
      "curr_month_visits": 31018369.916056,
      "unique_users": 11001367.3052379,
      "pages_per_visit": 20.632372895498
    },
    {
      "global_rank": 594,
      "domain": "weibo.cn",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 70102447.7416468,
      "curr_month_visits": 70102447.7416468,
      "unique_users": 14533365.0227509,
      "pages_per_visit": 5.84843690541076
    },
    {
      "global_rank": 595,
      "domain": "cambridge.org",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 75905660.5554147,
      "curr_month_visits": 75905660.5554147,
      "unique_users": 31258775.0248612,
      "pages_per_visit": 3.81178795021283
    },
    {
      "global_rank": 596,
      "domain": "fractionfridgejudiciary.com",
      "category": "Adult",
      "avg_month_visits": 65744404.3721241,
      "curr_month_visits": 65744404.3721241,
      "unique_users": 28877481.6068037,
      "pages_per_visit": 4.91134350839319
    },
    {
      "global_rank": 597,
      "domain": "sniffies.com",
      "category": "Adult",
      "avg_month_visits": 43785191.6880404,
      "curr_month_visits": 43785191.6880404,
      "unique_users": 4694967.72271682,
      "pages_per_visit": 18.9387930968325
    },
    {
      "global_rank": 598,
      "domain": "hh.ru",
      "category": "Jobs_and_Career",
      "avg_month_visits": 62549619.9985435,
      "curr_month_visits": 62549619.9985435,
      "unique_users": 12722831.8702122,
      "pages_per_visit": 7.55242661697879
    },
    {
      "global_rank": 599,
      "domain": "superbet.com",
      "category": "Gambling/Sports_Betting",
      "avg_month_visits": 84719140.0766308,
      "curr_month_visits": 84719140.0766308,
      "unique_users": 27540963.6906218,
      "pages_per_visit": 3.19322546336268
    },
    {
      "global_rank": 600,
      "domain": "gdz.ru",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 70172754.8762747,
      "curr_month_visits": 70172754.8762747,
      "unique_users": 14795189.5821293,
      "pages_per_visit": 4.17024194497699
    },
    {
      "global_rank": 601,
      "domain": "ubereats.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 49496058.6550944,
      "curr_month_visits": 49496058.6550944,
      "unique_users": 21467411.8108825,
      "pages_per_visit": 8.69627373594672
    },
    {
      "global_rank": 602,
      "domain": "zozo.jp",
      "category": "Lifestyle/Fashion_and_Apparel",
      "avg_month_visits": 50280754.5188892,
      "curr_month_visits": 50280754.5188892,
      "unique_users": 10836566.2076305,
      "pages_per_visit": 7.9607648978455
    },
    {
      "global_rank": 603,
      "domain": "ssstik.io",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 111494768.629516,
      "curr_month_visits": 111494768.629516,
      "unique_users": 22145198.6003818,
      "pages_per_visit": 2.25183397555256
    },
    {
      "global_rank": 604,
      "domain": "alipay.com",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 52954611.8966194,
      "curr_month_visits": 52954611.8966194,
      "unique_users": 26461425.4803468,
      "pages_per_visit": 6.62212986243301
    },
    {
      "global_rank": 605,
      "domain": "google.com.au",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 64595942.3110042,
      "curr_month_visits": 64595942.3110042,
      "unique_users": 8073398.90034027,
      "pages_per_visit": 7.51405491760322
    },
    {
      "global_rank": 606,
      "domain": "tktube.com",
      "category": "Adult",
      "avg_month_visits": 49947407.610319,
      "curr_month_visits": 49947407.610319,
      "unique_users": 12925890.7970915,
      "pages_per_visit": 8.60401561756456
    },
    {
      "global_rank": 607,
      "domain": "livehindustan.com",
      "category": "All",
      "avg_month_visits": 113163108.606558,
      "curr_month_visits": 113163108.606558,
      "unique_users": 38008885.7590154,
      "pages_per_visit": 1.97342707864511
    },
    {
      "global_rank": 608,
      "domain": "sephora.com",
      "category": "Lifestyle/Beauty_and_Cosmetics",
      "avg_month_visits": 49446534.4262564,
      "curr_month_visits": 49446534.4262564,
      "unique_users": 23439103.0744837,
      "pages_per_visit": 4.31509580336684
    },
    {
      "global_rank": 609,
      "domain": "bet9ja.com",
      "category": "Gambling/Sports_Betting",
      "avg_month_visits": 59186057.804158,
      "curr_month_visits": 59186057.804158,
      "unique_users": 4753084.32757429,
      "pages_per_visit": 12.7720158461294
    },
    {
      "global_rank": 610,
      "domain": "simpcity.su",
      "category": "Adult",
      "avg_month_visits": 50330232.5762161,
      "curr_month_visits": 50330232.5762161,
      "unique_users": 5673343.79611686,
      "pages_per_visit": 11.8972770935538
    },
    {
      "global_rank": 611,
      "domain": "nikkansports.com",
      "category": "Sports/Boxing",
      "avg_month_visits": 97402831.7423508,
      "curr_month_visits": 97402831.7423508,
      "unique_users": 32125277.1845654,
      "pages_per_visit": 2.75662814075564
    },
    {
      "global_rank": 613,
      "domain": "love4porn.com",
      "category": "Adult",
      "avg_month_visits": 84966598.8502221,
      "curr_month_visits": 84966598.8502221,
      "unique_users": 42972682.9670655,
      "pages_per_visit": 4.03578786015996
    },
    {
      "global_rank": 614,
      "domain": "biblegateway.com",
      "category": "Community_and_Society/Faith_and_Beliefs",
      "avg_month_visits": 89205720.2761443,
      "curr_month_visits": 89205720.2761443,
      "unique_users": 26149614.5181664,
      "pages_per_visit": 2.90001442842972
    },
    {
      "global_rank": 615,
      "domain": "arca.live",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 41282207.1799864,
      "curr_month_visits": 41282207.1799864,
      "unique_users": 4313602.1587445,
      "pages_per_visit": 18.1133927082044
    },
    {
      "global_rank": 616,
      "domain": "novelbin.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 78129256.8729053,
      "curr_month_visits": 78129256.8729053,
      "unique_users": 3820691.83068331,
      "pages_per_visit": 7.53124363736609
    },
    {
      "global_rank": 617,
      "domain": "office.net",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 102051520.806916,
      "curr_month_visits": 102051520.806916,
      "unique_users": 16632009.9920286,
      "pages_per_visit": 2.48893769276589
    },
    {
      "global_rank": 618,
      "domain": "shutterstock.com",
      "category": "Hobbies_and_Leisure/Photography",
      "avg_month_visits": 70061876.0611332,
      "curr_month_visits": 70061876.0611332,
      "unique_users": 40471847.5881705,
      "pages_per_visit": 3.95601817177828
    },
    {
      "global_rank": 619,
      "domain": "spoilerplus.blog",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 29356436.6552891,
      "curr_month_visits": 29356436.6552891,
      "unique_users": 3929766.09920926,
      "pages_per_visit": 9.54130640317571
    },
    {
      "global_rank": 620,
      "domain": "itmedia.co.jp",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 83217528.7805284,
      "curr_month_visits": 83217528.7805284,
      "unique_users": 26547861.8768081,
      "pages_per_visit": 2.81512917233773
    },
    {
      "global_rank": 621,
      "domain": "meta.me",
      "category": "Computers_Electronics_and_Technology/Advertising_Networks",
      "avg_month_visits": 109394013.497043,
      "curr_month_visits": 109394013.497043,
      "unique_users": 61340698.6552206,
      "pages_per_visit": 1.29324425088588
    },
    {
      "global_rank": 622,
      "domain": "funda.nl",
      "category": "Business_and_Consumer_Services/Real_Estate",
      "avg_month_visits": 28795923.381352,
      "curr_month_visits": 28795923.381352,
      "unique_users": 5897336.01797101,
      "pages_per_visit": 31.1491727727458
    },
    {
      "global_rank": 623,
      "domain": "google.cl",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 62558917.4872604,
      "curr_month_visits": 62558917.4872604,
      "unique_users": 5855848.86203368,
      "pages_per_visit": 7.18633312826569
    },
    {
      "global_rank": 624,
      "domain": "croxyproxy.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 60401622.5260322,
      "curr_month_visits": 60401622.5260322,
      "unique_users": 12424102.4129121,
      "pages_per_visit": 4.1061606105485
    },
    {
      "global_rank": 625,
      "domain": "claude.ai",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 80689879.6030781,
      "curr_month_visits": 80689879.6030781,
      "unique_users": 10211193.8922604,
      "pages_per_visit": 3.63382871024035
    },
    {
      "global_rank": 628,
      "domain": "quillbot.com",
      "category": "Science_and_Education/Science_and_Education",
      "avg_month_visits": 78000300.984551,
      "curr_month_visits": 78000300.984551,
      "unique_users": 24984479.3023415,
      "pages_per_visit": 3.44223446641704
    },
    {
      "global_rank": 629,
      "domain": "microsoft365.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 95764198.5782561,
      "curr_month_visits": 95764198.5782561,
      "unique_users": 29524235.3724425,
      "pages_per_visit": 2.40427837590144
    },
    {
      "global_rank": 630,
      "domain": "myworkday.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 54316572.2050709,
      "curr_month_visits": 54316572.2050709,
      "unique_users": 10150951.9910709,
      "pages_per_visit": 8.43343064316988
    },
    {
      "global_rank": 631,
      "domain": "eksisozluk.com",
      "category": "Reference_Materials/Dictionaries_and_Encyclopedias",
      "avg_month_visits": 65496669.8353024,
      "curr_month_visits": 65496669.8353024,
      "unique_users": 10172977.7148698,
      "pages_per_visit": 6.26574978061728
    },
    {
      "global_rank": 633,
      "domain": "fatalmodel.com",
      "category": "Adult",
      "avg_month_visits": 45442896.5380658,
      "curr_month_visits": 45442896.5380658,
      "unique_users": 6611353.78584101,
      "pages_per_visit": 11.8264430979492
    },
    {
      "global_rank": 634,
      "domain": "music.yandex.ru",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 76042965.3965306,
      "curr_month_visits": 76042965.3965306,
      "unique_users": 12500376.8882332,
      "pages_per_visit": 4.89857946397463
    },
    {
      "global_rank": 635,
      "domain": "finance.yahoo.co.jp",
      "category": "Finance/Investing",
      "avg_month_visits": 74267506.4826703,
      "curr_month_visits": 74267506.4826703,
      "unique_users": 11228378.8144657,
      "pages_per_visit": 4.64088430150666
    },
    {
      "global_rank": 636,
      "domain": "ptt.cc",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 57547565.7432676,
      "curr_month_visits": 57547565.7432676,
      "unique_users": 9660517.9136953,
      "pages_per_visit": 8.0554581438132
    },
    {
      "global_rank": 637,
      "domain": "verizon.com",
      "category": "Computers_Electronics_and_Technology/Telecommunications",
      "avg_month_visits": 55200883.185187,
      "curr_month_visits": 55200883.185187,
      "unique_users": 29420049.2240405,
      "pages_per_visit": 6.21086815881293
    },
    {
      "global_rank": 638,
      "domain": "service-now.com",
      "category": "Business_and_Consumer_Services/Business_Services",
      "avg_month_visits": 59175430.1505086,
      "curr_month_visits": 59175430.1505086,
      "unique_users": 9824649.24564834,
      "pages_per_visit": 9.41569988372072
    },
    {
      "global_rank": 639,
      "domain": "tinkoff.ru",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 60467808.4870065,
      "curr_month_visits": 60467808.4870065,
      "unique_users": 31047769.4136992,
      "pages_per_visit": 5.1951491595256
    },
    {
      "global_rank": 640,
      "domain": "rule34video.com",
      "category": "Adult",
      "avg_month_visits": 42820416.1202385,
      "curr_month_visits": 42820416.1202385,
      "unique_users": 11596787.4205606,
      "pages_per_visit": 10.5336034605395
    },
    {
      "global_rank": 641,
      "domain": "sports.yahoo.com",
      "category": "All",
      "avg_month_visits": 107447363.185979,
      "curr_month_visits": 107447363.185979,
      "unique_users": 24612837.9786986,
      "pages_per_visit": 2.0280594139675
    },
    {
      "global_rank": 642,
      "domain": "livedoor.com",
      "category": "All",
      "avg_month_visits": 100576137.551764,
      "curr_month_visits": 100576137.551764,
      "unique_users": 14669274.0377832,
      "pages_per_visit": 3.19486006000426
    },
    {
      "global_rank": 644,
      "domain": "mangago.me",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 41858259.8226728,
      "curr_month_visits": 41858259.8226728,
      "unique_users": 3283541.24571692,
      "pages_per_visit": 19.7421205995743
    },
    {
      "global_rank": 645,
      "domain": "azure.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 53660436.8495956,
      "curr_month_visits": 53660436.8495956,
      "unique_users": 6289679.19873487,
      "pages_per_visit": 11.6153362957983
    },
    {
      "global_rank": 646,
      "domain": "jut.su",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 88014200.7694324,
      "curr_month_visits": 88014200.7694324,
      "unique_users": 10131471.3503238,
      "pages_per_visit": 3.76423225118
    },
    {
      "global_rank": 647,
      "domain": "quark.cn",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 68068676.7432445,
      "curr_month_visits": 68068676.7432445,
      "unique_users": 25136444.8232697,
      "pages_per_visit": 4.16175759585887
    },
    {
      "global_rank": 648,
      "domain": "mit.edu",
      "category": "Science_and_Education/Universities_and_Colleges",
      "avg_month_visits": 47560486.5138589,
      "curr_month_visits": 47560486.5138589,
      "unique_users": 15437090.3544937,
      "pages_per_visit": 9.23139010619359
    },
    {
      "global_rank": 649,
      "domain": "cuevana.biz",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 88336895.2279712,
      "curr_month_visits": 88336895.2279712,
      "unique_users": 19313293.5661112,
      "pages_per_visit": 2.85219848844925
    },
    {
      "global_rank": 650,
      "domain": "coinmaster.com",
      "category": "Finance/Investing",
      "avg_month_visits": 106669068.603173,
      "curr_month_visits": 106669068.603173,
      "unique_users": 11964853.5788018,
      "pages_per_visit": 3.15197122147006
    },
    {
      "global_rank": 651,
      "domain": "magazineluiza.com.br",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 63672863.0852251,
      "curr_month_visits": 63672863.0852251,
      "unique_users": 27932260.7318069,
      "pages_per_visit": 3.35796750118147
    },
    {
      "global_rank": 655,
      "domain": "shopee.com.my",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 54847176.9232728,
      "curr_month_visits": 54847176.9232728,
      "unique_users": 15383221.0678169,
      "pages_per_visit": 7.19495476697154
    },
    {
      "global_rank": 656,
      "domain": "mobile.de",
      "category": "Vehicles/Vehicles",
      "avg_month_visits": 49143807.0803157,
      "curr_month_visits": 49143807.0803157,
      "unique_users": 12584070.4871935,
      "pages_per_visit": 9.86132144260092
    },
    {
      "global_rank": 657,
      "domain": "pornhat.one",
      "category": "Adult",
      "avg_month_visits": 68413053.409309,
      "curr_month_visits": 68413053.409309,
      "unique_users": 26551604.0528146,
      "pages_per_visit": 6.09704726105594
    },
    {
      "global_rank": 658,
      "domain": "bookmyshow.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 66672943.9538517,
      "curr_month_visits": 66672943.9538517,
      "unique_users": 27015900.4572857,
      "pages_per_visit": 4.29770333019749
    },
    {
      "global_rank": 659,
      "domain": "divisiondrearilyunfiled.com",
      "category": "Adult",
      "avg_month_visits": 37871888.9762212,
      "curr_month_visits": 37871888.9762212,
      "unique_users": 14389652.6825701,
      "pages_per_visit": 5.45707978405291
    },
    {
      "global_rank": 660,
      "domain": "hp.com",
      "category": "Computers_Electronics_and_Technology/Consumer_Electronics",
      "avg_month_visits": 64683663.8870456,
      "curr_month_visits": 64683663.8870456,
      "unique_users": 38240662.3922963,
      "pages_per_visit": 4.19520677406994
    },
    {
      "global_rank": 662,
      "domain": "xxxvideo.link",
      "category": "Adult",
      "avg_month_visits": 53540922.6552044,
      "curr_month_visits": 53540922.6552044,
      "unique_users": 30925311.660835,
      "pages_per_visit": 7.27247433113124
    },
    {
      "global_rank": 663,
      "domain": "mynavi.jp",
      "category": "Business_and_Consumer_Services/Business_Services",
      "avg_month_visits": 76945280.6213026,
      "curr_month_visits": 76945280.6213026,
      "unique_users": 31065579.3105941,
      "pages_per_visit": 3.15269820694015
    },
    {
      "global_rank": 664,
      "domain": "is.fi",
      "category": "Computers_Electronics_and_Technology",
      "avg_month_visits": 84805272.8628448,
      "curr_month_visits": 84805272.8628448,
      "unique_users": 4763333.90533659,
      "pages_per_visit": 4.09793650022208
    },
    {
      "global_rank": 666,
      "domain": "worksmobile.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 37286367.5753416,
      "curr_month_visits": 37286367.5753416,
      "unique_users": 2147410.98372913,
      "pages_per_visit": 26.2285699527738
    },
    {
      "global_rank": 667,
      "domain": "xhamster19.com",
      "category": "Adult",
      "avg_month_visits": 28652474.4314756,
      "curr_month_visits": 28652474.4314756,
      "unique_users": 12415376.2008333,
      "pages_per_visit": 7.16325886325253
    },
    {
      "global_rank": 668,
      "domain": "vietjack.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 75388966.2445603,
      "curr_month_visits": 75388966.2445603,
      "unique_users": 17080958.2148559,
      "pages_per_visit": 3.92751226496441
    },
    {
      "global_rank": 670,
      "domain": "eastmoney.com",
      "category": "Finance/Investing",
      "avg_month_visits": 45270275.1652462,
      "curr_month_visits": 45270275.1652462,
      "unique_users": 7884045.70204663,
      "pages_per_visit": 10.9326646110254
    },
    {
      "global_rank": 671,
      "domain": "opera.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 85087354.439804,
      "curr_month_visits": 85087354.439804,
      "unique_users": 43453758.5022229,
      "pages_per_visit": 2.22558320894673
    },
    {
      "global_rank": 672,
      "domain": "mangalib.me",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 38762991.9706083,
      "curr_month_visits": 38762991.9706083,
      "unique_users": 4330492.89155586,
      "pages_per_visit": 20.7813518600575
    },
    {
      "global_rank": 673,
      "domain": "studocu.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 71716975.4971405,
      "curr_month_visits": 71716975.4971405,
      "unique_users": 36193648.6113469,
      "pages_per_visit": 3.35475740325065
    },
    {
      "global_rank": 675,
      "domain": "computrabajo.com",
      "category": "Jobs_and_Career",
      "avg_month_visits": 49680481.0235451,
      "curr_month_visits": 49680481.0235451,
      "unique_users": 10737107.7702058,
      "pages_per_visit": 10.0654696794487
    },
    {
      "global_rank": 676,
      "domain": "npr.org",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 91586208.3944505,
      "curr_month_visits": 91586208.3944505,
      "unique_users": 37015704.5005904,
      "pages_per_visit": 1.79528656433556
    },
    {
      "global_rank": 679,
      "domain": "kemdikbud.go.id",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 74942667.8739656,
      "curr_month_visits": 74942667.8739656,
      "unique_users": 18438572.8981403,
      "pages_per_visit": 6.10540272420197
    },
    {
      "global_rank": 680,
      "domain": "nos.nl",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 83383838.8277803,
      "curr_month_visits": 83383838.8277803,
      "unique_users": 10567857.3620603,
      "pages_per_visit": 3.36957385539052
    },
    {
      "global_rank": 681,
      "domain": "suumo.jp",
      "category": "Business_and_Consumer_Services/Real_Estate",
      "avg_month_visits": 55069917.276366,
      "curr_month_visits": 55069917.276366,
      "unique_users": 14195604.927264,
      "pages_per_visit": 7.16106972763806
    },
    {
      "global_rank": 682,
      "domain": "gsmarena.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 75885676.0676676,
      "curr_month_visits": 75885676.0676676,
      "unique_users": 28968182.0469164,
      "pages_per_visit": 3.5831353429686
    },
    {
      "global_rank": 685,
      "domain": "slideshare.net",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 78942687.622549,
      "curr_month_visits": 78942687.622549,
      "unique_users": 41341751.7364399,
      "pages_per_visit": 2.88196933998657
    },
    {
      "global_rank": 686,
      "domain": "xnxx-arabic.com",
      "category": "Adult",
      "avg_month_visits": 43935276.1814986,
      "curr_month_visits": 43935276.1814986,
      "unique_users": 8541078.26662624,
      "pages_per_visit": 12.2424472420322
    },
    {
      "global_rank": 687,
      "domain": "state.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 47250414.7017216,
      "curr_month_visits": 47250414.7017216,
      "unique_users": 20436722.5780644,
      "pages_per_visit": 7.69682741384712
    },
    {
      "global_rank": 688,
      "domain": "ppomppu.co.kr",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 51948058.1796268,
      "curr_month_visits": 51948058.1796268,
      "unique_users": 5457007.97359412,
      "pages_per_visit": 12.1535426304011
    },
    {
      "global_rank": 689,
      "domain": "irctc.co.in",
      "category": "Travel_and_Tourism/Travel_and_Tourism",
      "avg_month_visits": 54907048.2464769,
      "curr_month_visits": 54907048.2464769,
      "unique_users": 17791777.0941817,
      "pages_per_visit": 5.00029401579098
    },
    {
      "global_rank": 690,
      "domain": "screenrant.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 88062291.744807,
      "curr_month_visits": 88062291.744807,
      "unique_users": 43097951.3464027,
      "pages_per_visit": 1.74575355453644
    },
    {
      "global_rank": 691,
      "domain": "immobiliare.it",
      "category": "Business_and_Consumer_Services/Real_Estate",
      "avg_month_visits": 35270628.9541214,
      "curr_month_visits": 35270628.9541214,
      "unique_users": 9835576.6356356,
      "pages_per_visit": 17.110086749353
    },
    {
      "global_rank": 692,
      "domain": "pch.com",
      "category": "Games/Games",
      "avg_month_visits": 32303442.350196,
      "curr_month_visits": 32303442.350196,
      "unique_users": 3874766.70620942,
      "pages_per_visit": 20.9997270913562
    },
    {
      "global_rank": 693,
      "domain": "line.biz",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 35293791.6234355,
      "curr_month_visits": 35293791.6234355,
      "unique_users": 2512179.1211841,
      "pages_per_visit": 28.2191801403295
    },
    {
      "global_rank": 694,
      "domain": "uber.com",
      "category": "Travel_and_Tourism/Ground_Transportation",
      "avg_month_visits": 73813329.851336,
      "curr_month_visits": 73813329.851336,
      "unique_users": 38130764.4102731,
      "pages_per_visit": 3.05755536190263
    },
    {
      "global_rank": 695,
      "domain": "nintendo.com",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 54929285.9118896,
      "curr_month_visits": 54929285.9118896,
      "unique_users": 25204852.5997545,
      "pages_per_visit": 4.32745920670674
    },
    {
      "global_rank": 696,
      "domain": "kemono.su",
      "category": "Games/Games",
      "avg_month_visits": 40916846.119912,
      "curr_month_visits": 40916846.119912,
      "unique_users": 8095155.3005682,
      "pages_per_visit": 12.3213587387167
    },
    {
      "global_rank": 697,
      "domain": "chapmanganato.to",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 62925262.3120815,
      "curr_month_visits": 62925262.3120815,
      "unique_users": 4362057.53825824,
      "pages_per_visit": 8.03352401926468
    },
    {
      "global_rank": 698,
      "domain": "idealo.de",
      "category": "E-commerce_and_Shopping/Price_Comparison",
      "avg_month_visits": 56373966.2592674,
      "curr_month_visits": 56373966.2592674,
      "unique_users": 20352972.7777867,
      "pages_per_visit": 3.36106330476779
    },
    {
      "global_rank": 699,
      "domain": "esportesdasorte.com",
      "category": "Gambling/Sports_Betting",
      "avg_month_visits": 77857982.7015389,
      "curr_month_visits": 77857982.7015389,
      "unique_users": 14100589.3285382,
      "pages_per_visit": 6.7972928278694
    },
    {
      "global_rank": 700,
      "domain": "movie.eroterest.net",
      "category": "Adult",
      "avg_month_visits": 43225771.8542558,
      "curr_month_visits": 43225771.8542558,
      "unique_users": 10163184.1675583,
      "pages_per_visit": 10.0107167019193
    },
    {
      "global_rank": 701,
      "domain": "uptodown.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 75580824.9004169,
      "curr_month_visits": 75580824.9004169,
      "unique_users": 45025715.5275594,
      "pages_per_visit": 2.93914031455214
    },
    {
      "global_rank": 702,
      "domain": "nba.com",
      "category": "Sports/Basketball",
      "avg_month_visits": 44777446.1299432,
      "curr_month_visits": 44777446.1299432,
      "unique_users": 15555466.3198991,
      "pages_per_visit": 3.20829823046129
    },
    {
      "global_rank": 703,
      "domain": "douyu.com",
      "category": "Games/Games",
      "avg_month_visits": 80828696.9560025,
      "curr_month_visits": 80828696.9560025,
      "unique_users": 5651457.95835629,
      "pages_per_visit": 5.02939810965013
    },
    {
      "global_rank": 704,
      "domain": "blooket.com",
      "category": "Science_and_Education/Physics",
      "avg_month_visits": 38496905.1105087,
      "curr_month_visits": 38496905.1105087,
      "unique_users": 11802263.236598,
      "pages_per_visit": 11.4767593549413
    },
    {
      "global_rank": 705,
      "domain": "coomer.su",
      "category": "Adult",
      "avg_month_visits": 24268029.2284597,
      "curr_month_visits": 24268029.2284597,
      "unique_users": 5977963.48565853,
      "pages_per_visit": 20.1490064670881
    },
    {
      "global_rank": 706,
      "domain": "sky.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 83270300.6220275,
      "curr_month_visits": 83270300.6220275,
      "unique_users": 28843874.8484532,
      "pages_per_visit": 2.44668277007563
    },
    {
      "global_rank": 707,
      "domain": "stripe.com",
      "category": "Computers_Electronics_and_Technology",
      "avg_month_visits": 68091421.4524428,
      "curr_month_visits": 68091421.4524428,
      "unique_users": 33745863.2765267,
      "pages_per_visit": 3.2714932308741
    },
    {
      "global_rank": 708,
      "domain": "jiocinema.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 70752383.4479808,
      "curr_month_visits": 70752383.4479808,
      "unique_users": 17828262.4019056,
      "pages_per_visit": 3.10297737917857
    },
    {
      "global_rank": 709,
      "domain": "dynamics.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 43141823.3875054,
      "curr_month_visits": 43141823.3875054,
      "unique_users": 8417453.29251829,
      "pages_per_visit": 14.2473399295667
    },
    {
      "global_rank": 710,
      "domain": "so.com",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 73964020.6974928,
      "curr_month_visits": 73964020.6974928,
      "unique_users": 23604187.122228,
      "pages_per_visit": 4.03883073173474
    },
    {
      "global_rank": 712,
      "domain": "flightradar24.com",
      "category": "Vehicles/Aviation",
      "avg_month_visits": 54057770.6801031,
      "curr_month_visits": 54057770.6801031,
      "unique_users": 15504295.8186946,
      "pages_per_visit": 9.65847131846619
    },
    {
      "global_rank": 713,
      "domain": "kamababa.desi",
      "category": "Adult",
      "avg_month_visits": 35071863.2724974,
      "curr_month_visits": 35071863.2724974,
      "unique_users": 13694937.9633096,
      "pages_per_visit": 10.5473259462403
    },
    {
      "global_rank": 714,
      "domain": "si.com",
      "category": "Sports/Climbing",
      "avg_month_visits": 88612791.9050904,
      "curr_month_visits": 88612791.9050904,
      "unique_users": 35148287.7507562,
      "pages_per_visit": 1.65535645920184
    },
    {
      "global_rank": 715,
      "domain": "hotmart.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 56986989.0743781,
      "curr_month_visits": 56986989.0743781,
      "unique_users": 15268330.8753176,
      "pages_per_visit": 5.35604003141315
    },
    {
      "global_rank": 717,
      "domain": "icicibank.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 46194996.5591796,
      "curr_month_visits": 46194996.5591796,
      "unique_users": 15801349.6661612,
      "pages_per_visit": 9.20319675746507
    },
    {
      "global_rank": 718,
      "domain": "redgifs.com",
      "category": "Adult",
      "avg_month_visits": 46576104.5781124,
      "curr_month_visits": 46576104.5781124,
      "unique_users": 19480906.1502568,
      "pages_per_visit": 6.42472220208148
    },
    {
      "global_rank": 719,
      "domain": "finn.no",
      "category": "E-commerce_and_Shopping/Classifieds",
      "avg_month_visits": 33339735.5380022,
      "curr_month_visits": 33339735.5380022,
      "unique_users": 3829610.24131428,
      "pages_per_visit": 20.5880170237123
    },
    {
      "global_rank": 720,
      "domain": "mayoclinic.org",
      "category": "Health/Medicine",
      "avg_month_visits": 104877633.756016,
      "curr_month_visits": 104877633.756016,
      "unique_users": 71374867.8621026,
      "pages_per_visit": 1.51829188724845
    },
    {
      "global_rank": 721,
      "domain": "playstation.com",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 62289146.8904549,
      "curr_month_visits": 62289146.8904549,
      "unique_users": 31349468.0549376,
      "pages_per_visit": 3.71073994296352
    },
    {
      "global_rank": 724,
      "domain": "search.app",
      "category": "Business_and_Consumer_Services/Business_Services",
      "avg_month_visits": 51808174.8018567,
      "curr_month_visits": 51808174.8018567,
      "unique_users": 30216972.5314454,
      "pages_per_visit": 1.59411027977009
    },
    {
      "global_rank": 725,
      "domain": "mundodeportivo.com",
      "category": "All",
      "avg_month_visits": 99732185.4333813,
      "curr_month_visits": 99732185.4333813,
      "unique_users": 23345506.271953,
      "pages_per_visit": 2.60227905740422
    },
    {
      "global_rank": 726,
      "domain": "xnxx.com.se",
      "category": "Adult",
      "avg_month_visits": 51012888.6666053,
      "curr_month_visits": 51012888.6666053,
      "unique_users": 28192134.6254807,
      "pages_per_visit": 3.76802491488896
    },
    {
      "global_rank": 727,
      "domain": "subito.it",
      "category": "E-commerce_and_Shopping/Classifieds",
      "avg_month_visits": 52152195.851944,
      "curr_month_visits": 52152195.851944,
      "unique_users": 9583238.03247774,
      "pages_per_visit": 8.11936703355501
    },
    {
      "global_rank": 728,
      "domain": "chewy.com",
      "category": "Pets_and_Animals/Pet_Food_and_Supplies",
      "avg_month_visits": 47766260.4233839,
      "curr_month_visits": 47766260.4233839,
      "unique_users": 23238028.9355999,
      "pages_per_visit": 5.80396418809721
    },
    {
      "global_rank": 729,
      "domain": "gmarket.co.kr",
      "category": "E-commerce_and_Shopping/E-commerce_and_Shopping",
      "avg_month_visits": 49479585.0114785,
      "curr_month_visits": 49479585.0114785,
      "unique_users": 13660396.8706164,
      "pages_per_visit": 6.0677276380679
    },
    {
      "global_rank": 730,
      "domain": "apkpure.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 59264717.4256634,
      "curr_month_visits": 59264717.4256634,
      "unique_users": 32029340.0021553,
      "pages_per_visit": 4.01721143295348
    },
    {
      "global_rank": 731,
      "domain": "cutt.ly",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 82783246.3726596,
      "curr_month_visits": 82783246.3726596,
      "unique_users": 35304286.3908261,
      "pages_per_visit": 1.81620993867478
    },
    {
      "global_rank": 732,
      "domain": "clobberprocurertightwad.com",
      "category": "Adult",
      "avg_month_visits": 86703992.8745643,
      "curr_month_visits": 86703992.8745643,
      "unique_users": 32308382.0700416,
      "pages_per_visit": 4.5001311317667
    },
    {
      "global_rank": 733,
      "domain": "schoology.com",
      "category": "Science_and_Education/Environmental_Science",
      "avg_month_visits": 71891285.7500176,
      "curr_month_visits": 71891285.7500176,
      "unique_users": 5335404.85678606,
      "pages_per_visit": 6.90102196893933
    },
    {
      "global_rank": 735,
      "domain": "doods.pro",
      "category": "Adult",
      "avg_month_visits": 16072102.6454478,
      "curr_month_visits": 16072102.6454478,
      "unique_users": 5499816.27039017,
      "pages_per_visit": 14.16404406732
    },
    {
      "global_rank": 737,
      "domain": "yts.mx",
      "category": "Computers_Electronics_and_Technology/File_Sharing_and_Hosting",
      "avg_month_visits": 59599065.9512624,
      "curr_month_visits": 59599065.9512624,
      "unique_users": 7915030.87840133,
      "pages_per_visit": 5.5509291803252
    },
    {
      "global_rank": 738,
      "domain": "rozetka.com.ua",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 49085872.8758126,
      "curr_month_visits": 49085872.8758126,
      "unique_users": 14775417.1213534,
      "pages_per_visit": 5.91932424103151
    },
    {
      "global_rank": 741,
      "domain": "rottentomatoes.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 78367562.641334,
      "curr_month_visits": 78367562.641334,
      "unique_users": 37547202.9154388,
      "pages_per_visit": 2.40384624296501
    },
    {
      "global_rank": 742,
      "domain": "nga.cn",
      "category": "Games/Games",
      "avg_month_visits": 49951114.0206685,
      "curr_month_visits": 49951114.0206685,
      "unique_users": 5991405.64840864,
      "pages_per_visit": 13.3891076498821
    },
    {
      "global_rank": 743,
      "domain": "goal.com",
      "category": "Sports/Sports",
      "avg_month_visits": 84385516.0965509,
      "curr_month_visits": 84385516.0965509,
      "unique_users": 32915020.8920143,
      "pages_per_visit": 2.38283520295099
    },
    {
      "global_rank": 744,
      "domain": "clevelandclinic.org",
      "category": "Health/Medicine",
      "avg_month_visits": 90931379.278595,
      "curr_month_visits": 90931379.278595,
      "unique_users": 61203458.4158278,
      "pages_per_visit": 1.79803488290678
    },
    {
      "global_rank": 745,
      "domain": "wikimedia.org",
      "category": "Reference_Materials/Reference_Materials",
      "avg_month_visits": 67700208.0385579,
      "curr_month_visits": 67700208.0385579,
      "unique_users": 41569768.6685494,
      "pages_per_visit": 3.15309015681936
    },
    {
      "global_rank": 746,
      "domain": "appointeeivyspongy.com",
      "category": "Adult",
      "avg_month_visits": 34949671.0894646,
      "curr_month_visits": 34949671.0894646,
      "unique_users": 15666906.2931402,
      "pages_per_visit": 3.80552786555556
    },
    {
      "global_rank": 747,
      "domain": "xbox.com",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 55397408.700507,
      "curr_month_visits": 55397408.700507,
      "unique_users": 26870667.0821452,
      "pages_per_visit": 3.95048389816551
    },
    {
      "global_rank": 749,
      "domain": "google.com.vn",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 61760894.318934,
      "curr_month_visits": 61760894.318934,
      "unique_users": 8153700.98529188,
      "pages_per_visit": 5.48622769000916
    },
    {
      "global_rank": 750,
      "domain": "pantip.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 75582894.3870095,
      "curr_month_visits": 75582894.3870095,
      "unique_users": 19216070.0970232,
      "pages_per_visit": 2.62440865603314
    },
    {
      "global_rank": 751,
      "domain": "playtime.ph",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 63480113.4614502,
      "curr_month_visits": 63480113.4614502,
      "unique_users": 4431622.07076826,
      "pages_per_visit": 4.73324316257516
    },
    {
      "global_rank": 752,
      "domain": "kingofshojo.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 55209900.0729904,
      "curr_month_visits": 55209900.0729904,
      "unique_users": 7893605.69118121,
      "pages_per_visit": 7.88267950651701
    },
    {
      "global_rank": 753,
      "domain": "jeuxvideo.com",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 50479916.9209478,
      "curr_month_visits": 50479916.9209478,
      "unique_users": 11284379.8919517,
      "pages_per_visit": 6.38035244886692
    },
    {
      "global_rank": 754,
      "domain": "dictionary.cambridge.org",
      "category": "Reference_Materials/Dictionaries_and_Encyclopedias",
      "avg_month_visits": 62589282.1042942,
      "curr_month_visits": 62589282.1042942,
      "unique_users": 25505399.6475749,
      "pages_per_visit": 3.96510380081813
    },
    {
      "global_rank": 755,
      "domain": "uidai.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 58689633.9333212,
      "curr_month_visits": 58689633.9333212,
      "unique_users": 15866868.0507848,
      "pages_per_visit": 6.0374554839583
    },
    {
      "global_rank": 757,
      "domain": "4chan.org",
      "category": "Adult",
      "avg_month_visits": 48668972.5960562,
      "curr_month_visits": 48668972.5960562,
      "unique_users": 4345607.50313255,
      "pages_per_visit": 10.2170747929523
    },
    {
      "global_rank": 758,
      "domain": "livecamrips.su",
      "category": "Adult",
      "avg_month_visits": 30280360.2232057,
      "curr_month_visits": 30280360.2232057,
      "unique_users": 4630145.44005836,
      "pages_per_visit": 21.8021118374284
    },
    {
      "global_rank": 760,
      "domain": "pw.live",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 53287843.0363339,
      "curr_month_visits": 53287843.0363339,
      "unique_users": 12108215.4517256,
      "pages_per_visit": 6.36816558479994
    },
    {
      "global_rank": 761,
      "domain": "theporndude.com",
      "category": "Adult",
      "avg_month_visits": 66914170.1738898,
      "curr_month_visits": 66914170.1738898,
      "unique_users": 28837701.9587917,
      "pages_per_visit": 2.79290802381512
    },
    {
      "global_rank": 762,
      "domain": "coursera.org",
      "category": "Science_and_Education/Literature",
      "avg_month_visits": 46659295.8784829,
      "curr_month_visits": 46659295.8784829,
      "unique_users": 14068782.3551024,
      "pages_per_visit": 8.76568717533958
    },
    {
      "global_rank": 763,
      "domain": "coinbase.com",
      "category": "Finance/Finance",
      "avg_month_visits": 37896339.0136609,
      "curr_month_visits": 37896339.0136609,
      "unique_users": 11316664.3338963,
      "pages_per_visit": 5.30591511585915
    },
    {
      "global_rank": 764,
      "domain": "fazenda.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 53741539.0986955,
      "curr_month_visits": 53741539.0986955,
      "unique_users": 13258728.2098426,
      "pages_per_visit": 6.79618139201746
    },
    {
      "global_rank": 765,
      "domain": "pornone.com",
      "category": "Adult",
      "avg_month_visits": 43087981.4781487,
      "curr_month_visits": 43087981.4781487,
      "unique_users": 19322033.4897587,
      "pages_per_visit": 5.97673624005539
    },
    {
      "global_rank": 768,
      "domain": "newtoki465.com",
      "category": "Vehicles/Automotive_Industry",
      "avg_month_visits": 17160888.101276,
      "curr_month_visits": 17160888.101276,
      "unique_users": 1839325.85666116,
      "pages_per_visit": 10.4623468766552
    },
    {
      "global_rank": 769,
      "domain": "dmsik.com",
      "category": "All",
      "avg_month_visits": 114892772.629422,
      "curr_month_visits": 114892772.629422,
      "unique_users": 28642607.3853676,
      "pages_per_visit": 1.07786696528116
    },
    {
      "global_rank": 770,
      "domain": "twkan.com",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 57433062.9486132,
      "curr_month_visits": 57433062.9486132,
      "unique_users": 1482660.72430012,
      "pages_per_visit": 15.8538824371961
    },
    {
      "global_rank": 771,
      "domain": "indiamart.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 55947338.873958,
      "curr_month_visits": 55947338.873958,
      "unique_users": 30166147.847715,
      "pages_per_visit": 4.94555893596698
    },
    {
      "global_rank": 773,
      "domain": "argos.co.uk",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 46918582.39287,
      "curr_month_visits": 46918582.39287,
      "unique_users": 17955344.7912644,
      "pages_per_visit": 4.39813318552772
    },
    {
      "global_rank": 774,
      "domain": "ssa.gov",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 38789397.3417144,
      "curr_month_visits": 38789397.3417144,
      "unique_users": 19142480.424578,
      "pages_per_visit": 8.36904157860186
    },
    {
      "global_rank": 775,
      "domain": "realtor.ca",
      "category": "Business_and_Consumer_Services/Real_Estate",
      "avg_month_visits": 31473492.0667176,
      "curr_month_visits": 31473492.0667176,
      "unique_users": 7844612.5735491,
      "pages_per_visit": 18.3716669922646
    },
    {
      "global_rank": 776,
      "domain": "ytmp3.la",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 38282971.8366087,
      "curr_month_visits": 38282971.8366087,
      "unique_users": 11603513.9997448,
      "pages_per_visit": 3.22281285090784
    },
    {
      "global_rank": 777,
      "domain": "hubspot.com",
      "category": "Business_and_Consumer_Services/Online_Marketing",
      "avg_month_visits": 39167120.4321896,
      "curr_month_visits": 39167120.4321896,
      "unique_users": 8684179.68576878,
      "pages_per_visit": 15.6965042109695
    },
    {
      "global_rank": 778,
      "domain": "1688.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 40379791.6959478,
      "curr_month_visits": 40379791.6959478,
      "unique_users": 10032547.7299378,
      "pages_per_visit": 11.2317386029909
    },
    {
      "global_rank": 779,
      "domain": "softonic.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 57073863.3592328,
      "curr_month_visits": 57073863.3592328,
      "unique_users": 41526623.2304573,
      "pages_per_visit": 3.6505113468503
    },
    {
      "global_rank": 780,
      "domain": "literotica.com",
      "category": "Adult",
      "avg_month_visits": 44670308.9803127,
      "curr_month_visits": 44670308.9803127,
      "unique_users": 6831725.31514047,
      "pages_per_visit": 9.22420222613139
    },
    {
      "global_rank": 781,
      "domain": "td.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 42088420.1263876,
      "curr_month_visits": 42088420.1263876,
      "unique_users": 10087125.490528,
      "pages_per_visit": 8.36434619084767
    },
    {
      "global_rank": 782,
      "domain": "sex-studentki.plus",
      "category": "Vehicles/Automotive_Industry",
      "avg_month_visits": 20873475.8514695,
      "curr_month_visits": 20873475.8514695,
      "unique_users": 5765963.79675407,
      "pages_per_visit": 5.53660765685808
    },
    {
      "global_rank": 786,
      "domain": "nordstrom.com",
      "category": "Lifestyle/Fashion_and_Apparel",
      "avg_month_visits": 47038303.0793498,
      "curr_month_visits": 47038303.0793498,
      "unique_users": 21691308.1785512,
      "pages_per_visit": 4.21270910460642
    },
    {
      "global_rank": 787,
      "domain": "mileroticos.com",
      "category": "Adult",
      "avg_month_visits": 26575112.182395,
      "curr_month_visits": 26575112.182395,
      "unique_users": 4060449.71541028,
      "pages_per_visit": 22.5637778273648
    },
    {
      "global_rank": 788,
      "domain": "bheestybaulk.top",
      "category": "Gambling/Sports_Betting",
      "avg_month_visits": 61552462.9888826,
      "curr_month_visits": 61552462.9888826,
      "unique_users": 20930418.9743006,
      "pages_per_visit": 2.90710625274954
    },
    {
      "global_rank": 790,
      "domain": "amazon.com.tr",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 39971363.2888705,
      "curr_month_visits": 39971363.2888705,
      "unique_users": 19073499.9784221,
      "pages_per_visit": 6.78611950460965
    },
    {
      "global_rank": 791,
      "domain": "qualtrics.com",
      "category": "Business_and_Consumer_Services/Business_Services",
      "avg_month_visits": 81844814.8591481,
      "curr_month_visits": 81844814.8591481,
      "unique_users": 45627168.6472581,
      "pages_per_visit": 1.95415131619074
    },
    {
      "global_rank": 792,
      "domain": "google.pt",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 45542649.6267382,
      "curr_month_visits": 45542649.6267382,
      "unique_users": 5607106.18649997,
      "pages_per_visit": 9.49064772505829
    },
    {
      "global_rank": 793,
      "domain": "walgreens.com",
      "category": "Health/Health",
      "avg_month_visits": 57814576.4661245,
      "curr_month_visits": 57814576.4661245,
      "unique_users": 26079837.7080302,
      "pages_per_visit": 4.52842082147554
    },
    {
      "global_rank": 794,
      "domain": "pages.dev",
      "category": "Computers_Electronics_and_Technology/Computer_Security",
      "avg_month_visits": 80947584.6346089,
      "curr_month_visits": 80947584.6346089,
      "unique_users": 32646022.2211653,
      "pages_per_visit": 2.51668259787724
    },
    {
      "global_rank": 795,
      "domain": "nfl.com",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 76683643.414298,
      "curr_month_visits": 76683643.414298,
      "unique_users": 22997528.1229143,
      "pages_per_visit": 3.41468665696851
    },
    {
      "global_rank": 796,
      "domain": "discogs.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 38057057.752393,
      "curr_month_visits": 38057057.752393,
      "unique_users": 10033881.8574438,
      "pages_per_visit": 12.3180670413891
    },
    {
      "global_rank": 797,
      "domain": "realestate.com.au",
      "category": "Business_and_Consumer_Services/Real_Estate",
      "avg_month_visits": 48225568.2122527,
      "curr_month_visits": 48225568.2122527,
      "unique_users": 10496447.1581213,
      "pages_per_visit": 6.59163394374913
    },
    {
      "global_rank": 798,
      "domain": "heovl.blog",
      "category": "Adult",
      "avg_month_visits": 38403394.0799193,
      "curr_month_visits": 38403394.0799193,
      "unique_users": 11261340.8255802,
      "pages_per_visit": 6.26110210211625
    },
    {
      "global_rank": 799,
      "domain": "xero.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 33290165.3129711,
      "curr_month_visits": 33290165.3129711,
      "unique_users": 5574748.90662003,
      "pages_per_visit": 19.5819118990969
    },
    {
      "global_rank": 800,
      "domain": "travel.rakuten.co.jp",
      "category": "Travel_and_Tourism/Travel_and_Tourism",
      "avg_month_visits": 51657462.4323988,
      "curr_month_visits": 51657462.4323988,
      "unique_users": 11499870.2976914,
      "pages_per_visit": 6.55086943347022
    },
    {
      "global_rank": 802,
      "domain": "pinimg.com",
      "category": "Arts_and_Entertainment/Humor",
      "avg_month_visits": 83690085.4524073,
      "curr_month_visits": 83690085.4524073,
      "unique_users": 37733880.1850873,
      "pages_per_visit": 2.47665957713902
    },
    {
      "global_rank": 803,
      "domain": "poshmark.com",
      "category": "E-commerce_and_Shopping/E-commerce_and_Shopping",
      "avg_month_visits": 49360164.3176944,
      "curr_month_visits": 49360164.3176944,
      "unique_users": 21185917.07884,
      "pages_per_visit": 5.59032985315556
    },
    {
      "global_rank": 804,
      "domain": "gazzetta.it",
      "category": "Sports/Soccer",
      "avg_month_visits": 84390319.9924058,
      "curr_month_visits": 84390319.9924058,
      "unique_users": 13571879.4762762,
      "pages_per_visit": 3.04622917744355
    },
    {
      "global_rank": 805,
      "domain": "aa.com",
      "category": "Travel_and_Tourism/Air_Travel",
      "avg_month_visits": 51499309.5426349,
      "curr_month_visits": 51499309.5426349,
      "unique_users": 18551430.9147976,
      "pages_per_visit": 6.61288433504227
    },
    {
      "global_rank": 806,
      "domain": "playdede.eu",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 71936585.9531142,
      "curr_month_visits": 71936585.9531142,
      "unique_users": 3037819.31495701,
      "pages_per_visit": 3.8269226221648
    },
    {
      "global_rank": 807,
      "domain": "afip.gob.ar",
      "category": "Law_and_Government/Law_and_Government",
      "avg_month_visits": 33120873.5629155,
      "curr_month_visits": 33120873.5629155,
      "unique_users": 6630528.41072786,
      "pages_per_visit": 17.9201396161136
    },
    {
      "global_rank": 808,
      "domain": "diretta.it",
      "category": "Sports/Winter_Sports",
      "avg_month_visits": 49613016.2987909,
      "curr_month_visits": 49613016.2987909,
      "unique_users": 3975078.20178298,
      "pages_per_visit": 9.40079272937379
    },
    {
      "global_rank": 808,
      "domain": "indiatoday.in",
      "category": "news_and_media",
      "avg_month_visits": null,
      "curr_month_visits": null,
      "unique_users": null,
      "pages_per_visit": null
    },
    {
      "global_rank": 809,
      "domain": "xhopen.com",
      "category": "Adult",
      "avg_month_visits": 34403593.7220967,
      "curr_month_visits": 34403593.7220967,
      "unique_users": 18472769.2717009,
      "pages_per_visit": 4.04023539878989
    },
    {
      "global_rank": 810,
      "domain": "mercadolibre.com.co",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 39758481.0424943,
      "curr_month_visits": 39758481.0424943,
      "unique_users": 14127966.7761595,
      "pages_per_visit": 7.71101246826911
    },
    {
      "global_rank": 811,
      "domain": "parivahan.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 34541801.4068316,
      "curr_month_visits": 34541801.4068316,
      "unique_users": 11546672.7075111,
      "pages_per_visit": 12.4232084193531
    },
    {
      "global_rank": 812,
      "domain": "dhl.de",
      "category": "Business_and_Consumer_Services/Shipping_and_Logistics",
      "avg_month_visits": 75632825.8595857,
      "curr_month_visits": 75632825.8595857,
      "unique_users": 18779424.192617,
      "pages_per_visit": 2.58401545086936
    },
    {
      "global_rank": 813,
      "domain": "momon-ga.com",
      "category": "Adult",
      "avg_month_visits": 43237169.611894,
      "curr_month_visits": 43237169.611894,
      "unique_users": 9602425.43277302,
      "pages_per_visit": 7.28160250227592
    },
    {
      "global_rank": 814,
      "domain": "2345.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 103148230.203146,
      "curr_month_visits": 103148230.203146,
      "unique_users": 14606319.8310467,
      "pages_per_visit": 1.82190029455245
    },
    {
      "global_rank": 816,
      "domain": "drive2.ru",
      "category": "Vehicles/Vehicles",
      "avg_month_visits": 66464021.7039045,
      "curr_month_visits": 66464021.7039045,
      "unique_users": 16876399.3265816,
      "pages_per_visit": 3.17034329177773
    },
    {
      "global_rank": 817,
      "domain": "emag.ro",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 35219221.2855357,
      "curr_month_visits": 35219221.2855357,
      "unique_users": 7938343.45013251,
      "pages_per_visit": 8.26217296956592
    },
    {
      "global_rank": 818,
      "domain": "tver.jp",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 68695682.5277927,
      "curr_month_visits": 68695682.5277927,
      "unique_users": 15473029.7368934,
      "pages_per_visit": 4.2834799026108
    },
    {
      "global_rank": 819,
      "domain": "tinder.com",
      "category": "Community_and_Society/Romance_and_Relationships",
      "avg_month_visits": 57400725.4802994,
      "curr_month_visits": 57400725.4802994,
      "unique_users": 7097680.19852555,
      "pages_per_visit": 7.78421173142562
    },
    {
      "global_rank": 821,
      "domain": "homes.com",
      "category": "Business_and_Consumer_Services/Real_Estate",
      "avg_month_visits": 42585650.7814158,
      "curr_month_visits": 42585650.7814158,
      "unique_users": 25208765.2734753,
      "pages_per_visit": 6.32001638175599
    },
    {
      "global_rank": 822,
      "domain": "samsclub.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 47145764.7069843,
      "curr_month_visits": 47145764.7069843,
      "unique_users": 21519786.8873621,
      "pages_per_visit": 4.37128027553067
    },
    {
      "global_rank": 823,
      "domain": "suki-kira.com",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 49543179.2514779,
      "curr_month_visits": 49543179.2514779,
      "unique_users": 5893162.33802001,
      "pages_per_visit": 11.4737027747339
    },
    {
      "global_rank": 825,
      "domain": "ulta.com",
      "category": "Lifestyle/Beauty_and_Cosmetics",
      "avg_month_visits": 38634079.0311577,
      "curr_month_visits": 38634079.0311577,
      "unique_users": 18754590.3925595,
      "pages_per_visit": 5.00567365012278
    },
    {
      "global_rank": 826,
      "domain": "njav.tv",
      "category": "Adult",
      "avg_month_visits": 37717171.1649423,
      "curr_month_visits": 37717171.1649423,
      "unique_users": 13522855.9857346,
      "pages_per_visit": 9.46868132494835
    },
    {
      "global_rank": 827,
      "domain": "aznude.com",
      "category": "Adult",
      "avg_month_visits": 48022830.0919544,
      "curr_month_visits": 48022830.0919544,
      "unique_users": 19885452.1035535,
      "pages_per_visit": 5.94692823057292
    },
    {
      "global_rank": 828,
      "domain": "bilibili.tv",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 60085370.4036079,
      "curr_month_visits": 60085370.4036079,
      "unique_users": 21978623.6925928,
      "pages_per_visit": 3.55561038077267
    },
    {
      "global_rank": 829,
      "domain": "mi.com",
      "category": "Computers_Electronics_and_Technology/Consumer_Electronics",
      "avg_month_visits": 52173138.1915408,
      "curr_month_visits": 52173138.1915408,
      "unique_users": 27687027.2685513,
      "pages_per_visit": 4.0676974055751
    },
    {
      "global_rank": 830,
      "domain": "xnxxcom.xyz",
      "category": "Adult",
      "avg_month_visits": 50417071.4290241,
      "curr_month_visits": 50417071.4290241,
      "unique_users": 19787788.8674708,
      "pages_per_visit": 7.24385180644138
    },
    {
      "global_rank": 831,
      "domain": "atid.me",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 66981253.0158177,
      "curr_month_visits": 66981253.0158177,
      "unique_users": 28244038.0681936,
      "pages_per_visit": 1.90833359386972
    },
    {
      "global_rank": 832,
      "domain": "sooplive.co.kr",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 27136551.015997,
      "curr_month_visits": 27136551.015997,
      "unique_users": 1781785.96291503,
      "pages_per_visit": 11.753237890125
    },
    {
      "global_rank": 833,
      "domain": "mheducation.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 39378314.0569072,
      "curr_month_visits": 39378314.0569072,
      "unique_users": 5067496.76017663,
      "pages_per_visit": 15.7531623365378
    },
    {
      "global_rank": 834,
      "domain": "cam4.com",
      "category": "Adult",
      "avg_month_visits": 46921199.8619155,
      "curr_month_visits": 46921199.8619155,
      "unique_users": 15404058.0252308,
      "pages_per_visit": 6.87153275914961
    },
    {
      "global_rank": 836,
      "domain": "skroutz.gr",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 37623724.8413293,
      "curr_month_visits": 37623724.8413293,
      "unique_users": 6922263.35383687,
      "pages_per_visit": 8.06556334588157
    },
    {
      "global_rank": 837,
      "domain": "inven.co.kr",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 48070318.2077723,
      "curr_month_visits": 48070318.2077723,
      "unique_users": 5449106.64103037,
      "pages_per_visit": 10.2712569487523
    },
    {
      "global_rank": 838,
      "domain": "narvar.com",
      "category": "Business_and_Consumer_Services/Business_Services",
      "avg_month_visits": 81304055.1011901,
      "curr_month_visits": 81304055.1011901,
      "unique_users": 27156632.2459347,
      "pages_per_visit": 1.83580318791787
    },
    {
      "global_rank": 839,
      "domain": "stake.com",
      "category": "Gambling/Gambling",
      "avg_month_visits": 60350667.602673,
      "curr_month_visits": 60350667.602673,
      "unique_users": 21971519.2053698,
      "pages_per_visit": 4.7140170877965
    },
    {
      "global_rank": 840,
      "domain": "jav.guru",
      "category": "Adult",
      "avg_month_visits": 31092915.8442186,
      "curr_month_visits": 31092915.8442186,
      "unique_users": 7541053.66340871,
      "pages_per_visit": 11.8399813273003
    },
    {
      "global_rank": 841,
      "domain": "google.co.id",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 48652586.3154086,
      "curr_month_visits": 48652586.3154086,
      "unique_users": 15774602.6580989,
      "pages_per_visit": 6.13436431259614
    },
    {
      "global_rank": 842,
      "domain": "amzn.to",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 59465933.3795304,
      "curr_month_visits": 59465933.3795304,
      "unique_users": 22841079.3273542,
      "pages_per_visit": 2.78174447921914
    },
    {
      "global_rank": 844,
      "domain": "69shuba.cx",
      "category": "Arts_and_Entertainment/Books_and_Literature",
      "avg_month_visits": 211573086.315016,
      "curr_month_visits": 211573086.315016,
      "unique_users": 5086786.98599201,
      "pages_per_visit": 12.3071907711932
    },
    {
      "global_rank": 845,
      "domain": "remove.bg",
      "category": "Computers_Electronics_and_Technology/Graphics_Multimedia_and_Web_Design",
      "avg_month_visits": 72290351.9095952,
      "curr_month_visits": 72290351.9095952,
      "unique_users": 22341814.1069947,
      "pages_per_visit": 2.76190852272751
    },
    {
      "global_rank": 846,
      "domain": "g.co",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 92421090.8063695,
      "curr_month_visits": 92421090.8063695,
      "unique_users": 60670720.5299334,
      "pages_per_visit": 1.37244343731315
    },
    {
      "global_rank": 847,
      "domain": "list-manage.com",
      "category": "Computers_Electronics_and_Technology/Email",
      "avg_month_visits": 77695846.7646322,
      "curr_month_visits": 77695846.7646322,
      "unique_users": 42129343.9534447,
      "pages_per_visit": 1.71941534231025
    },
    {
      "global_rank": 848,
      "domain": "ukdevilz.com",
      "category": "Adult",
      "avg_month_visits": 35788978.1919588,
      "curr_month_visits": 35788978.1919588,
      "unique_users": 15644411.5876296,
      "pages_per_visit": 7.91408577121679
    },
    {
      "global_rank": 849,
      "domain": "login.gov",
      "category": "Finance",
      "avg_month_visits": 47316733.8371495,
      "curr_month_visits": 47316733.8371495,
      "unique_users": 18992393.6951229,
      "pages_per_visit": 5.52740114143693
    },
    {
      "global_rank": 850,
      "domain": "hentaihvn.tv",
      "category": "Adult",
      "avg_month_visits": 14376621.7214602,
      "curr_month_visits": 14376621.7214602,
      "unique_users": 2299542.52326192,
      "pages_per_visit": 21.582226319394
    },
    {
      "global_rank": 851,
      "domain": "skokka.com",
      "category": "Adult",
      "avg_month_visits": 31658789.5604961,
      "curr_month_visits": 31658789.5604961,
      "unique_users": 4812785.42212277,
      "pages_per_visit": 15.4024940650728
    },
    {
      "global_rank": 852,
      "domain": "nalog.ru",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 42920608.6257355,
      "curr_month_visits": 42920608.6257355,
      "unique_users": 16001076.8870802,
      "pages_per_visit": 5.78479416817293
    },
    {
      "global_rank": 853,
      "domain": "cbssports.com",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 73678770.7468101,
      "curr_month_visits": 73678770.7468101,
      "unique_users": 24251625.9972608,
      "pages_per_visit": 2.6513347662242
    },
    {
      "global_rank": 854,
      "domain": "hydrahd.cc",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 52238212.932565,
      "curr_month_visits": 52238212.932565,
      "unique_users": 4994284.26446986,
      "pages_per_visit": 4.14083154080868
    },
    {
      "global_rank": 856,
      "domain": "abema.tv",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 72977008.8478581,
      "curr_month_visits": 72977008.8478581,
      "unique_users": 26265014.9699898,
      "pages_per_visit": 3.13546709424705
    },
    {
      "global_rank": 857,
      "domain": "hao123.com",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 91034580.7716492,
      "curr_month_visits": 91034580.7716492,
      "unique_users": 7797404.13845004,
      "pages_per_visit": 1.98938848809071
    },
    {
      "global_rank": 858,
      "domain": "google.ch",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 43480780.8917694,
      "curr_month_visits": 43480780.8917694,
      "unique_users": 4915638.73462644,
      "pages_per_visit": 9.95047573119609
    },
    {
      "global_rank": 859,
      "domain": "ptailadsol.net",
      "category": "Gambling/Casinos",
      "avg_month_visits": 59295968.9650237,
      "curr_month_visits": 59295968.9650237,
      "unique_users": 24636695.4823977,
      "pages_per_visit": 2.89826513765724
    },
    {
      "global_rank": 860,
      "domain": "musinsa.com",
      "category": "Lifestyle/Fashion_and_Apparel",
      "avg_month_visits": 32874499.4665266,
      "curr_month_visits": 32874499.4665266,
      "unique_users": 11970152.8594959,
      "pages_per_visit": 7.21603763585318
    },
    {
      "global_rank": 861,
      "domain": "paramountplus.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 58959072.3040009,
      "curr_month_visits": 58959072.3040009,
      "unique_users": 18267575.7215307,
      "pages_per_visit": 3.54941838999438
    },
    {
      "global_rank": 862,
      "domain": "hdtodayz.to",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 38054803.5957116,
      "curr_month_visits": 38054803.5957116,
      "unique_users": 4749028.5396476,
      "pages_per_visit": 4.17044966561456
    },
    {
      "global_rank": 865,
      "domain": "exness.com",
      "category": "Finance/Investing",
      "avg_month_visits": 75465888.1523916,
      "curr_month_visits": 75465888.1523916,
      "unique_users": 37516305.7759463,
      "pages_per_visit": 2.02583970655064
    },
    {
      "global_rank": 866,
      "domain": "sberbank.ru",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 44243525.6948661,
      "curr_month_visits": 44243525.6948661,
      "unique_users": 14624226.6596818,
      "pages_per_visit": 6.2452858522014
    },
    {
      "global_rank": 867,
      "domain": "mediaexpert.pl",
      "category": "Computers_Electronics_and_Technology/Consumer_Electronics",
      "avg_month_visits": 45820805.1410503,
      "curr_month_visits": 45820805.1410503,
      "unique_users": 18021934.3287084,
      "pages_per_visit": 4.04522836518943
    },
    {
      "global_rank": 868,
      "domain": "ut.ac.id",
      "category": "Sports/Fishing",
      "avg_month_visits": 21198908.7394247,
      "curr_month_visits": 21198908.7394247,
      "unique_users": 3586642.1998484,
      "pages_per_visit": 12.9156614420818
    },
    {
      "global_rank": 869,
      "domain": "imagefap.com",
      "category": "Adult",
      "avg_month_visits": 16457224.2901345,
      "curr_month_visits": 16457224.2901345,
      "unique_users": 3341995.87630187,
      "pages_per_visit": 50.3347662699263
    },
    {
      "global_rank": 870,
      "domain": "hotstar.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 59437900.3564358,
      "curr_month_visits": 59437900.3564358,
      "unique_users": 10629969.7105785,
      "pages_per_visit": 4.03808588622665
    },
    {
      "global_rank": 872,
      "domain": "xv-ru.com",
      "category": "Adult",
      "avg_month_visits": 41042798.4957472,
      "curr_month_visits": 41042798.4957472,
      "unique_users": 7448937.08944311,
      "pages_per_visit": 9.07448171474259
    },
    {
      "global_rank": 873,
      "domain": "grammarly.com",
      "category": "Science_and_Education/Grants_Scholarships_and_Financial_Aid",
      "avg_month_visits": 66253291.9144496,
      "curr_month_visits": 66253291.9144496,
      "unique_users": 28059957.8128891,
      "pages_per_visit": 2.906801679111
    },
    {
      "global_rank": 874,
      "domain": "7games.bet",
      "category": "Gambling/Sports_Betting",
      "avg_month_visits": 51582867.1687111,
      "curr_month_visits": 51582867.1687111,
      "unique_users": 9471593.8109087,
      "pages_per_visit": 4.94398932458145
    },
    {
      "global_rank": 875,
      "domain": "fiverr.com",
      "category": "Computers_Electronics_and_Technology",
      "avg_month_visits": 45567471.6422127,
      "curr_month_visits": 45567471.6422127,
      "unique_users": 8976679.00342345,
      "pages_per_visit": 8.93847275952121
    },
    {
      "global_rank": 876,
      "domain": "marriott.com",
      "category": "Travel_and_Tourism/Accommodation_and_Hotels",
      "avg_month_visits": 51615955.6103279,
      "curr_month_visits": 51615955.6103279,
      "unique_users": 26392286.0843744,
      "pages_per_visit": 4.69004379328563
    },
    {
      "global_rank": 877,
      "domain": "webmd.com",
      "category": "Health/Health_Conditions_and_Concerns",
      "avg_month_visits": 85535251.2923891,
      "curr_month_visits": 85535251.2923891,
      "unique_users": 55912075.1235315,
      "pages_per_visit": 1.56340845732633
    },
    {
      "global_rank": 878,
      "domain": "ryanair.com",
      "category": "Travel_and_Tourism/Air_Travel",
      "avg_month_visits": 49047348.1177598,
      "curr_month_visits": 49047348.1177598,
      "unique_users": 20874849.248853,
      "pages_per_visit": 5.83448974785497
    },
    {
      "global_rank": 879,
      "domain": "marktplaats.nl",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 41729327.7020036,
      "curr_month_visits": 41729327.7020036,
      "unique_users": 7405378.64661401,
      "pages_per_visit": 8.92613716685181
    },
    {
      "global_rank": 880,
      "domain": "google.hu",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 49778448.2137685,
      "curr_month_visits": 49778448.2137685,
      "unique_users": 4360282.71123511,
      "pages_per_visit": 7.24444192520089
    },
    {
      "global_rank": 883,
      "domain": "pussyspace.com",
      "category": "Adult",
      "avg_month_visits": 35841072.7839992,
      "curr_month_visits": 35841072.7839992,
      "unique_users": 17675007.4069478,
      "pages_per_visit": 5.78604002254881
    },
    {
      "global_rank": 884,
      "domain": "etoro.com",
      "category": "Finance/Investing",
      "avg_month_visits": 46993732.687918,
      "curr_month_visits": 46993732.687918,
      "unique_users": 15550035.4355788,
      "pages_per_visit": 3.9464361538597
    },
    {
      "global_rank": 886,
      "domain": "ebay.it",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 43049419.5848296,
      "curr_month_visits": 43049419.5848296,
      "unique_users": 12387210.1558708,
      "pages_per_visit": 6.45244701613171
    },
    {
      "global_rank": 887,
      "domain": "suno.com",
      "category": "Computers_Electronics_and_Technology",
      "avg_month_visits": 51281663.6161364,
      "curr_month_visits": 51281663.6161364,
      "unique_users": 11505832.5438058,
      "pages_per_visit": 5.34027260819966
    },
    {
      "global_rank": 888,
      "domain": "programme-tv.net",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 70510007.2954173,
      "curr_month_visits": 70510007.2954173,
      "unique_users": 16377890.0566808,
      "pages_per_visit": 2.25725813141043
    },
    {
      "global_rank": 889,
      "domain": "trustpilot.com",
      "category": "Finance/Finance",
      "avg_month_visits": 67085564.0248402,
      "curr_month_visits": 67085564.0248402,
      "unique_users": 42753915.6143981,
      "pages_per_visit": 2.04622735422653
    },
    {
      "global_rank": 890,
      "domain": "bikewale.com",
      "category": "Vehicles/Motorcycles",
      "avg_month_visits": 50948819.6974802,
      "curr_month_visits": 50948819.6974802,
      "unique_users": 23617051.4822377,
      "pages_per_visit": 3.88155729292587
    },
    {
      "global_rank": 891,
      "domain": "ultimate-guitar.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 55544268.468032,
      "curr_month_visits": 55544268.468032,
      "unique_users": 17719885.5057037,
      "pages_per_visit": 3.58552185484097
    },
    {
      "global_rank": 892,
      "domain": "listcrawler.eu",
      "category": "Adult",
      "avg_month_visits": 28572552.9545034,
      "curr_month_visits": 28572552.9545034,
      "unique_users": 2557409.068255,
      "pages_per_visit": 17.4917513102521
    },
    {
      "global_rank": 894,
      "domain": "googlevideo.com",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 61081347.5609581,
      "curr_month_visits": 61081347.5609581,
      "unique_users": 24293626.1893422,
      "pages_per_visit": 2.61592273492823
    },
    {
      "global_rank": 895,
      "domain": "dhl.com",
      "category": "Business_and_Consumer_Services/Shipping_and_Logistics",
      "avg_month_visits": 57751753.5316768,
      "curr_month_visits": 57751753.5316768,
      "unique_users": 19773839.2369443,
      "pages_per_visit": 3.85917144510321
    },
    {
      "global_rank": 896,
      "domain": "canada.ca",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 54284314.8997635,
      "curr_month_visits": 54284314.8997635,
      "unique_users": 18973433.8288354,
      "pages_per_visit": 3.95791819937357
    },
    {
      "global_rank": 897,
      "domain": "lego.com",
      "category": "Games/Games",
      "avg_month_visits": 34603535.895073,
      "curr_month_visits": 34603535.895073,
      "unique_users": 16226366.7505453,
      "pages_per_visit": 5.37896595860236
    },
    {
      "global_rank": 898,
      "domain": "aliexpress.us",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 36823290.4381323,
      "curr_month_visits": 36823290.4381323,
      "unique_users": 13442643.6558344,
      "pages_per_visit": 6.78294206373788
    },
    {
      "global_rank": 899,
      "domain": "abc.net.au",
      "category": "news_and_media",
      "avg_month_visits": null,
      "curr_month_visits": null,
      "unique_users": null,
      "pages_per_visit": null
    },
    {
      "global_rank": 899,
      "domain": "bunkr.ph",
      "category": "Jobs_and_Career",
      "avg_month_visits": 33390400.3217325,
      "curr_month_visits": 33390400.3217325,
      "unique_users": 6525430.37725447,
      "pages_per_visit": 4.4839975836609
    },
    {
      "global_rank": 900,
      "domain": "beauty.hotpepper.jp",
      "category": "Lifestyle/Beauty_and_Cosmetics",
      "avg_month_visits": 41270840.3011952,
      "curr_month_visits": 41270840.3011952,
      "unique_users": 15039544.8065234,
      "pages_per_visit": 7.24514604097877
    },
    {
      "global_rank": 901,
      "domain": "otomoto.pl",
      "category": "E-commerce_and_Shopping/Classifieds",
      "avg_month_visits": 43770323.6478305,
      "curr_month_visits": 43770323.6478305,
      "unique_users": 8591199.66577952,
      "pages_per_visit": 7.00452759388256
    },
    {
      "global_rank": 903,
      "domain": "xnxx.tv",
      "category": "Adult",
      "avg_month_visits": 52063686.6533898,
      "curr_month_visits": 52063686.6533898,
      "unique_users": 19439763.237225,
      "pages_per_visit": 8.02121799581439
    },
    {
      "global_rank": 904,
      "domain": "ea.com",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 61106319.8734012,
      "curr_month_visits": 61106319.8734012,
      "unique_users": 23479527.8317827,
      "pages_per_visit": 3.74085447121256
    },
    {
      "global_rank": 905,
      "domain": "spectrum.net",
      "category": "Computers_Electronics_and_Technology/Telecommunications",
      "avg_month_visits": 53484449.6935167,
      "curr_month_visits": 53484449.6935167,
      "unique_users": 16180667.5755046,
      "pages_per_visit": 4.78779711902016
    },
    {
      "global_rank": 906,
      "domain": "kontur.ru",
      "category": "Finance/Accounting_and_Auditing",
      "avg_month_visits": 42232600.0429377,
      "curr_month_visits": 42232600.0429377,
      "unique_users": 9122914.26391714,
      "pages_per_visit": 9.3424118466414
    },
    {
      "global_rank": 907,
      "domain": "godaddy.com",
      "category": "Computers_Electronics_and_Technology/Web_Hosting_and_Domain_Names",
      "avg_month_visits": 41945569.2434333,
      "curr_month_visits": 41945569.2434333,
      "unique_users": 17286333.7840234,
      "pages_per_visit": 5.75800522961989
    },
    {
      "global_rank": 908,
      "domain": "yandex.kz",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 44632948.7548822,
      "curr_month_visits": 44632948.7548822,
      "unique_users": 4512666.04012882,
      "pages_per_visit": 7.65065391296412
    },
    {
      "global_rank": 909,
      "domain": "1337x.to",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 39442841.7643088,
      "curr_month_visits": 39442841.7643088,
      "unique_users": 6629100.31193192,
      "pages_per_visit": 8.46999856197047
    },
    {
      "global_rank": 911,
      "domain": "carwale.com",
      "category": "Vehicles/Vehicles",
      "avg_month_visits": 46830070.0965892,
      "curr_month_visits": 46830070.0965892,
      "unique_users": 20893885.0058387,
      "pages_per_visit": 4.00889481965863
    },
    {
      "global_rank": 912,
      "domain": "piccoma.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 37179002.3487563,
      "curr_month_visits": 37179002.3487563,
      "unique_users": 5396627.7689695,
      "pages_per_visit": 14.677780705963
    },
    {
      "global_rank": 913,
      "domain": "europa.eu",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 50229131.2570512,
      "curr_month_visits": 50229131.2570512,
      "unique_users": 25364746.731808,
      "pages_per_visit": 4.38188536067295
    },
    {
      "global_rank": 915,
      "domain": "manhuagui.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 26923398.280862,
      "curr_month_visits": 26923398.280862,
      "unique_users": 2854972.27525359,
      "pages_per_visit": 24.9447062006905
    },
    {
      "global_rank": 916,
      "domain": "ssg.com",
      "category": "E-commerce_and_Shopping/E-commerce_and_Shopping",
      "avg_month_visits": 50646467.2657736,
      "curr_month_visits": 50646467.2657736,
      "unique_users": 12664215.8735765,
      "pages_per_visit": 3.30255134937476
    },
    {
      "global_rank": 917,
      "domain": "toasttab.com",
      "category": "Food_and_Drink/Restaurants_and_Delivery",
      "avg_month_visits": 48934819.7876782,
      "curr_month_visits": 48934819.7876782,
      "unique_users": 25340603.5270925,
      "pages_per_visit": 4.15652844975586
    },
    {
      "global_rank": 918,
      "domain": "jpg5.su",
      "category": "Adult",
      "avg_month_visits": 44950013.4607826,
      "curr_month_visits": 44950013.4607826,
      "unique_users": 7965350.46266408,
      "pages_per_visit": 6.60223125403403
    },
    {
      "global_rank": 919,
      "domain": "gaymaletube.com",
      "category": "Adult",
      "avg_month_visits": 38026714.9162685,
      "curr_month_visits": 38026714.9162685,
      "unique_users": 7426644.83162756,
      "pages_per_visit": 7.63045515838168
    },
    {
      "global_rank": 920,
      "domain": "meb.gov.tr",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 41841436.9883542,
      "curr_month_visits": 41841436.9883542,
      "unique_users": 11154137.9792095,
      "pages_per_visit": 6.06375553186438
    },
    {
      "global_rank": 923,
      "domain": "librefutbol.su",
      "category": "Sports/Volleyball",
      "avg_month_visits": 59358158.7942831,
      "curr_month_visits": 59358158.7942831,
      "unique_users": 12385594.3688307,
      "pages_per_visit": 3.5874950574322
    },
    {
      "global_rank": 925,
      "domain": "autotrader.co.uk",
      "category": "Vehicles/Vehicles",
      "avg_month_visits": 36362983.9969445,
      "curr_month_visits": 36362983.9969445,
      "unique_users": 9897846.89133871,
      "pages_per_visit": 10.5648119884823
    },
    {
      "global_rank": 926,
      "domain": "free.fr",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 49011784.1975632,
      "curr_month_visits": 49011784.1975632,
      "unique_users": 12288229.5580819,
      "pages_per_visit": 5.12765362950173
    },
    {
      "global_rank": 929,
      "domain": "discover.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 43922323.605848,
      "curr_month_visits": 43922323.605848,
      "unique_users": 17136928.7935279,
      "pages_per_visit": 5.45687702564102
    },
    {
      "global_rank": 930,
      "domain": "markt.de",
      "category": "E-commerce_and_Shopping/E-commerce_and_Shopping",
      "avg_month_visits": 36126279.405042,
      "curr_month_visits": 36126279.405042,
      "unique_users": 3984225.50980621,
      "pages_per_visit": 13.9728978652638
    },
    {
      "global_rank": 931,
      "domain": "tbs.co.jp",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 60344923.4672378,
      "curr_month_visits": 60344923.4672378,
      "unique_users": 32871052.0720617,
      "pages_per_visit": 2.82925955893214
    },
    {
      "global_rank": 932,
      "domain": "crazygames.com",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 58886386.5419987,
      "curr_month_visits": 58886386.5419987,
      "unique_users": 13258125.8394079,
      "pages_per_visit": 3.75924685930248
    },
    {
      "global_rank": 934,
      "domain": "amazon.nl",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 32360041.0544434,
      "curr_month_visits": 32360041.0544434,
      "unique_users": 10234221.7360545,
      "pages_per_visit": 7.25501344121285
    },
    {
      "global_rank": 935,
      "domain": "mediaset.it",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 72414042.9155863,
      "curr_month_visits": 72414042.9155863,
      "unique_users": 13474888.3261883,
      "pages_per_visit": 2.57668103437667
    },
    {
      "global_rank": 936,
      "domain": "sky.it",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 62507538.772414,
      "curr_month_visits": 62507538.772414,
      "unique_users": 20612143.2754978,
      "pages_per_visit": 2.63902880177433
    },
    {
      "global_rank": 937,
      "domain": "immobilienscout24.de",
      "category": "Business_and_Consumer_Services/Real_Estate",
      "avg_month_visits": 39793139.9114445,
      "curr_month_visits": 39793139.9114445,
      "unique_users": 10458636.9072363,
      "pages_per_visit": 8.0525492490457
    },
    {
      "global_rank": 939,
      "domain": "orf.at",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 56671887.0323068,
      "curr_month_visits": 56671887.0323068,
      "unique_users": 6851049.39979026,
      "pages_per_visit": 4.79441961429223
    },
    {
      "global_rank": 940,
      "domain": "dell.com",
      "category": "Computers_Electronics_and_Technology/Computer_Hardware",
      "avg_month_visits": 42937854.3218465,
      "curr_month_visits": 42937854.3218465,
      "unique_users": 21860864.0963905,
      "pages_per_visit": 4.51995051360954
    },
    {
      "global_rank": 941,
      "domain": "jcpenney.com",
      "category": "Lifestyle/Fashion_and_Apparel",
      "avg_month_visits": 32430680.9612563,
      "curr_month_visits": 32430680.9612563,
      "unique_users": 15387799.2199978,
      "pages_per_visit": 5.23685433195999
    },
    {
      "global_rank": 942,
      "domain": "flavourecipes.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 24331058.389915,
      "curr_month_visits": 24331058.389915,
      "unique_users": 5954044.46474714,
      "pages_per_visit": 7.85587776289532
    },
    {
      "global_rank": 943,
      "domain": "1asb.com",
      "category": "Gambling/Sports_Betting",
      "avg_month_visits": 70658067.9234382,
      "curr_month_visits": 70658067.9234382,
      "unique_users": 38615905.0413296,
      "pages_per_visit": 1.5560331638582
    },
    {
      "global_rank": 944,
      "domain": "navitime.co.jp",
      "category": "Travel_and_Tourism/Travel_and_Tourism",
      "avg_month_visits": 63750785.2364549,
      "curr_month_visits": 63750785.2364549,
      "unique_users": 26923351.7053336,
      "pages_per_visit": 2.71176345955311
    },
    {
      "global_rank": 945,
      "domain": "superporn.com",
      "category": "Adult",
      "avg_month_visits": 43759442.7558509,
      "curr_month_visits": 43759442.7558509,
      "unique_users": 22179379.5480521,
      "pages_per_visit": 4.55340305572584
    },
    {
      "global_rank": 946,
      "domain": "sotwe.com",
      "category": "Adult",
      "avg_month_visits": 45341460.110769,
      "curr_month_visits": 45341460.110769,
      "unique_users": 11796076.5134202,
      "pages_per_visit": 6.25308294791161
    },
    {
      "global_rank": 947,
      "domain": "hochi.news",
      "category": "Sports/Extreme_Sports",
      "avg_month_visits": 75899762.9926259,
      "curr_month_visits": 75899762.9926259,
      "unique_users": 30318309.62062,
      "pages_per_visit": 1.85356860669095
    },
    {
      "global_rank": 948,
      "domain": "visualmirage.co",
      "category": "Finance/Investing",
      "avg_month_visits": 55643525.7679351,
      "curr_month_visits": 55643525.7679351,
      "unique_users": 34474783.2467739,
      "pages_per_visit": 1.96312823287281
    },
    {
      "global_rank": 949,
      "domain": "op.gg",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 61259105.9830363,
      "curr_month_visits": 61259105.9830363,
      "unique_users": 7366812.86690773,
      "pages_per_visit": 3.95178096598785
    },
    {
      "global_rank": 952,
      "domain": "y2mate.com",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 52137270.7460119,
      "curr_month_visits": 52137270.7460119,
      "unique_users": 12319896.5947598,
      "pages_per_visit": 5.29224910290825
    },
    {
      "global_rank": 953,
      "domain": "zalando.de",
      "category": "Lifestyle/Fashion_and_Apparel",
      "avg_month_visits": 31019489.3546281,
      "curr_month_visits": 31019489.3546281,
      "unique_users": 11677516.5336058,
      "pages_per_visit": 8.26168955787552
    },
    {
      "global_rank": 954,
      "domain": "medicalnewstoday.com",
      "category": "Health/Health",
      "avg_month_visits": 59270082.4557576,
      "curr_month_visits": 59270082.4557576,
      "unique_users": 42034026.6053662,
      "pages_per_visit": 2.82598357359393
    },
    {
      "global_rank": 956,
      "domain": "270towin.com",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 35807651.2992642,
      "curr_month_visits": 35807651.2992642,
      "unique_users": 16349735.6833617,
      "pages_per_visit": 2.51840336982593
    },
    {
      "global_rank": 957,
      "domain": "studentaid.gov",
      "category": "Sports/American_Football",
      "avg_month_visits": 28609453.9918476,
      "curr_month_visits": 28609453.9918476,
      "unique_users": 14318957.0345799,
      "pages_per_visit": 9.89393704964486
    },
    {
      "global_rank": 958,
      "domain": "bancoestado.cl",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 44579309.9355298,
      "curr_month_visits": 44579309.9355298,
      "unique_users": 6941603.81735661,
      "pages_per_visit": 6.05072445112625
    },
    {
      "global_rank": 959,
      "domain": "br4bet.com",
      "category": "Gambling/Sports_Betting",
      "avg_month_visits": 35595749.4513158,
      "curr_month_visits": 35595749.4513158,
      "unique_users": 15810953.7896456,
      "pages_per_visit": 1.30678991034103
    },
    {
      "global_rank": 960,
      "domain": "wix.com",
      "category": "Computers_Electronics_and_Technology/Web_Hosting_and_Domain_Names",
      "avg_month_visits": 41156162.092126,
      "curr_month_visits": 41156162.092126,
      "unique_users": 13084020.1666647,
      "pages_per_visit": 7.06644589386374
    },
    {
      "global_rank": 961,
      "domain": "alibaba-inc.com",
      "category": "E-commerce_and_Shopping/E-commerce_and_Shopping",
      "avg_month_visits": 48673481.4280307,
      "curr_month_visits": 48673481.4280307,
      "unique_users": 3848153.30087841,
      "pages_per_visit": 8.06726377855266
    },
    {
      "global_rank": 962,
      "domain": "vseinstrumenti.ru",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 40965135.5076999,
      "curr_month_visits": 40965135.5076999,
      "unique_users": 12857233.9404302,
      "pages_per_visit": 6.07719179595632
    },
    {
      "global_rank": 964,
      "domain": "brazino777.com",
      "category": "Gambling/Sports_Betting",
      "avg_month_visits": 70035750.7681424,
      "curr_month_visits": 70035750.7681424,
      "unique_users": 39464352.1743695,
      "pages_per_visit": 1.54744052359688
    },
    {
      "global_rank": 965,
      "domain": "okxxx2.com",
      "category": "Adult",
      "avg_month_visits": 37811300.5243607,
      "curr_month_visits": 37811300.5243607,
      "unique_users": 15242104.0466787,
      "pages_per_visit": 4.92208443669606
    },
    {
      "global_rank": 967,
      "domain": "groww.in",
      "category": "Finance/Investing",
      "avg_month_visits": 48643084.4339908,
      "curr_month_visits": 48643084.4339908,
      "unique_users": 18072122.1472984,
      "pages_per_visit": 5.65993247990968
    },
    {
      "global_rank": 969,
      "domain": "mts.ru",
      "category": "Computers_Electronics_and_Technology/Telecommunications",
      "avg_month_visits": 54927349.8473423,
      "curr_month_visits": 54927349.8473423,
      "unique_users": 22851595.7693837,
      "pages_per_visit": 3.3713363208761
    },
    {
      "global_rank": 970,
      "domain": "enginetoyou.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 26754392.8667548,
      "curr_month_visits": 26754392.8667548,
      "unique_users": 6596204.98499447,
      "pages_per_visit": 7.25389945050592
    },
    {
      "global_rank": 971,
      "domain": "sex.com",
      "category": "Adult",
      "avg_month_visits": 26500518.0198839,
      "curr_month_visits": 26500518.0198839,
      "unique_users": 10902606.4175411,
      "pages_per_visit": 13.7250200845607
    },
    {
      "global_rank": 972,
      "domain": "walmart.ca",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 37534575.3801441,
      "curr_month_visits": 37534575.3801441,
      "unique_users": 14979437.4489028,
      "pages_per_visit": 4.74988302350148
    },
    {
      "global_rank": 973,
      "domain": "manhuatop.org",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 42950059.5068438,
      "curr_month_visits": 42950059.5068438,
      "unique_users": 7301047.3141796,
      "pages_per_visit": 8.74390135841195
    },
    {
      "global_rank": 974,
      "domain": "yodobashi.com",
      "category": "Computers_Electronics_and_Technology/Consumer_Electronics",
      "avg_month_visits": 39905623.9631596,
      "curr_month_visits": 39905623.9631596,
      "unique_users": 12831121.2479193,
      "pages_per_visit": 5.99881766795962
    },
    {
      "global_rank": 975,
      "domain": "cian.ru",
      "category": "Business_and_Consumer_Services/Real_Estate",
      "avg_month_visits": 35211171.0931398,
      "curr_month_visits": 35211171.0931398,
      "unique_users": 11379575.6452509,
      "pages_per_visit": 9.42189341272179
    },
    {
      "global_rank": 976,
      "domain": "southwest.com",
      "category": "Travel_and_Tourism/Air_Travel",
      "avg_month_visits": 46295629.2390251,
      "curr_month_visits": 46295629.2390251,
      "unique_users": 19413029.2828402,
      "pages_per_visit": 5.5056109454592
    },
    {
      "global_rank": 977,
      "domain": "sportbox.ru",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 67213253.4073797,
      "curr_month_visits": 67213253.4073797,
      "unique_users": 5894041.24807205,
      "pages_per_visit": 3.23585865305586
    },
    {
      "global_rank": 978,
      "domain": "filmoflix.bz",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 38692251.1032234,
      "curr_month_visits": 38692251.1032234,
      "unique_users": 2839222.59316949,
      "pages_per_visit": 4.052496595598
    },
    {
      "global_rank": 980,
      "domain": "merriam-webster.com",
      "category": "Reference_Materials/Dictionaries_and_Encyclopedias",
      "avg_month_visits": 62686883.9464851,
      "curr_month_visits": 62686883.9464851,
      "unique_users": 32608026.7936526,
      "pages_per_visit": 2.30618451076099
    },
    {
      "global_rank": 981,
      "domain": "apartments.com",
      "category": "Business_and_Consumer_Services/Real_Estate",
      "avg_month_visits": 37463162.0723097,
      "curr_month_visits": 37463162.0723097,
      "unique_users": 18730237.5960908,
      "pages_per_visit": 6.52523929926482
    },
    {
      "global_rank": 982,
      "domain": "rumble.com",
      "category": "Arts_and_Entertainment",
      "avg_month_visits": 60221620.9557605,
      "curr_month_visits": 60221620.9557605,
      "unique_users": 14462348.6921577,
      "pages_per_visit": 3.3770674900959
    },
    {
      "global_rank": 983,
      "domain": "classlink.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 68621307.8560132,
      "curr_month_visits": 68621307.8560132,
      "unique_users": 7841011.10829218,
      "pages_per_visit": 3.44034264147962
    },
    {
      "global_rank": 986,
      "domain": "johnlewis.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 29910544.6823404,
      "curr_month_visits": 29910544.6823404,
      "unique_users": 13020096.9072451,
      "pages_per_visit": 5.80760203970566
    },
    {
      "global_rank": 987,
      "domain": "beeg.com",
      "category": "Adult",
      "avg_month_visits": 43277046.1373159,
      "curr_month_visits": 43277046.1373159,
      "unique_users": 14645430.0846889,
      "pages_per_visit": 4.00108920239761
    },
    {
      "global_rank": 988,
      "domain": "livesteching.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 22285681.3348576,
      "curr_month_visits": 22285681.3348576,
      "unique_users": 5500990.15129051,
      "pages_per_visit": 7.89485969199843
    },
    {
      "global_rank": 989,
      "domain": "clips4sale.com",
      "category": "Adult",
      "avg_month_visits": 45226568.5184785,
      "curr_month_visits": 45226568.5184785,
      "unique_users": 18903551.2881783,
      "pages_per_visit": 4.09877912523444
    },
    {
      "global_rank": 990,
      "domain": "vimeo.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 54886440.4038329,
      "curr_month_visits": 54886440.4038329,
      "unique_users": 27210103.3242684,
      "pages_per_visit": 3.66327514186239
    },
    {
      "global_rank": 991,
      "domain": "moneyforward.com",
      "category": "Finance/Finance",
      "avg_month_visits": 35506253.5630168,
      "curr_month_visits": 35506253.5630168,
      "unique_users": 9485829.14746319,
      "pages_per_visit": 8.49796310877928
    },
    {
      "global_rank": 992,
      "domain": "kooora.com",
      "category": "Sports/Tennis",
      "avg_month_visits": 66941658.0239651,
      "curr_month_visits": 66941658.0239651,
      "unique_users": 7474339.88321731,
      "pages_per_visit": 3.17176177155765
    },
    {
      "global_rank": 993,
      "domain": "y41w4.com",
      "category": "Games/Games",
      "avg_month_visits": 54964327.57797,
      "curr_month_visits": 54964327.57797,
      "unique_users": 4618588.26025873,
      "pages_per_visit": 2.50203272349321
    },
    {
      "global_rank": 994,
      "domain": "roskertech.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 20878881.9389133,
      "curr_month_visits": 20878881.9389133,
      "unique_users": 5086650.00325933,
      "pages_per_visit": 7.85420743281782
    },
    {
      "global_rank": 995,
      "domain": "bubbiesxylaria.top",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 50897160.8719307,
      "curr_month_visits": 50897160.8719307,
      "unique_users": 19388743.8663341,
      "pages_per_visit": 2.44359335386041
    },
    {
      "global_rank": 996,
      "domain": "affinity.net",
      "category": "Computers_Electronics_and_Technology/Graphics_Multimedia_and_Web_Design",
      "avg_month_visits": 56820027.6903669,
      "curr_month_visits": 56820027.6903669,
      "unique_users": 37561701.2728409,
      "pages_per_visit": 2.4874943882032
    },
    {
      "global_rank": 997,
      "domain": "google.be",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 36372005.4731038,
      "curr_month_visits": 36372005.4731038,
      "unique_users": 3853921.84132871,
      "pages_per_visit": 10.3839139671768
    },
    {
      "global_rank": 998,
      "domain": "lenovo.com",
      "category": "Computers_Electronics_and_Technology/Computer_Hardware",
      "avg_month_visits": 42696866.0810102,
      "curr_month_visits": 42696866.0810102,
      "unique_users": 21230031.1768679,
      "pages_per_visit": 4.27592679308911
    },
    {
      "global_rank": 999,
      "domain": "cbc.ca",
      "category": "news_and_media",
      "avg_month_visits": null,
      "curr_month_visits": null,
      "unique_users": null,
      "pages_per_visit": null
    },
    {
      "global_rank": 999,
      "domain": "thuvienphapluat.vn",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 53070979.3763588,
      "curr_month_visits": 53070979.3763588,
      "unique_users": 25661236.3127268,
      "pages_per_visit": 2.90504633202212
    },
    {
      "global_rank": 1000,
      "domain": "cloud.google.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 33870654.0747439,
      "curr_month_visits": 33870654.0747439,
      "unique_users": 12812331.3988956,
      "pages_per_visit": 9.50208179390142
    },
    {
      "global_rank": 1002,
      "domain": "komikcast.cz",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 56494524.5654797,
      "curr_month_visits": 56494524.5654797,
      "unique_users": 3075323.82216161,
      "pages_per_visit": 7.94177056960262
    },
    {
      "global_rank": 1004,
      "domain": "clip2vip.com",
      "category": "Adult",
      "avg_month_visits": 35218310.7599815,
      "curr_month_visits": 35218310.7599815,
      "unique_users": 9073695.44570624,
      "pages_per_visit": 8.02124026681247
    },
    {
      "global_rank": 1005,
      "domain": "oricon.co.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 61987481.7170807,
      "curr_month_visits": 61987481.7170807,
      "unique_users": 33000891.4323296,
      "pages_per_visit": 2.291160824973
    },
    {
      "global_rank": 1007,
      "domain": "condles-temark.com",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 77584258.3316978,
      "curr_month_visits": 77584258.3316978,
      "unique_users": 47634473.5390477,
      "pages_per_visit": 1.27033577822856
    },
    {
      "global_rank": 1008,
      "domain": "dexscreener.com",
      "category": "Finance/Investing",
      "avg_month_visits": 23152199.2522075,
      "curr_month_visits": 23152199.2522075,
      "unique_users": 2103409.46745373,
      "pages_per_visit": 13.4884702716381
    },
    {
      "global_rank": 1009,
      "domain": "bybit.com",
      "category": "Finance/Investing",
      "avg_month_visits": 23274579.1333555,
      "curr_month_visits": 23274579.1333555,
      "unique_users": 4790377.49653045,
      "pages_per_visit": 17.9958365520653
    },
    {
      "global_rank": 1010,
      "domain": "calculator.net",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 50955999.0951855,
      "curr_month_visits": 50955999.0951855,
      "unique_users": 29021909.029616,
      "pages_per_visit": 3.42778782665982
    },
    {
      "global_rank": 1011,
      "domain": "b-cdn.net",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 110609941.521968,
      "curr_month_visits": 110609941.521968,
      "unique_users": 58995836.4546481,
      "pages_per_visit": 1.67382523478732
    },
    {
      "global_rank": 1012,
      "domain": "elcorteingles.es",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 28442489.3437315,
      "curr_month_visits": 28442489.3437315,
      "unique_users": 10768600.229097,
      "pages_per_visit": 7.0180082790858
    },
    {
      "global_rank": 1013,
      "domain": "meesho.com",
      "category": "E-commerce_and_Shopping/E-commerce_and_Shopping",
      "avg_month_visits": 39873826.6167204,
      "curr_month_visits": 39873826.6167204,
      "unique_users": 13354233.5462492,
      "pages_per_visit": 5.95421814690799
    },
    {
      "global_rank": 1014,
      "domain": "amedia.site",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 68289595.6562076,
      "curr_month_visits": 68289595.6562076,
      "unique_users": 2905722.03839763,
      "pages_per_visit": 4.60159400085771
    },
    {
      "global_rank": 1015,
      "domain": "royalbank.com",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 25884589.0267881,
      "curr_month_visits": 25884589.0267881,
      "unique_users": 5133476.01790992,
      "pages_per_visit": 13.9760709204624
    },
    {
      "global_rank": 1016,
      "domain": "lazada.co.th",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 39652758.9197344,
      "curr_month_visits": 39652758.9197344,
      "unique_users": 13793764.5382711,
      "pages_per_visit": 5.77621377667754
    },
    {
      "global_rank": 1017,
      "domain": "letterboxd.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 33945845.1433382,
      "curr_month_visits": 33945845.1433382,
      "unique_users": 5981466.34060801,
      "pages_per_visit": 10.9377045766324
    },
    {
      "global_rank": 1018,
      "domain": "k12.com",
      "category": "Science_and_Education/Philosophy",
      "avg_month_visits": 38920971.8045062,
      "curr_month_visits": 38920971.8045062,
      "unique_users": 1576289.97509305,
      "pages_per_visit": 18.518464671478
    },
    {
      "global_rank": 1019,
      "domain": "marksandspencer.com",
      "category": "Lifestyle/Fashion_and_Apparel",
      "avg_month_visits": 32599174.7218668,
      "curr_month_visits": 32599174.7218668,
      "unique_users": 13389248.9249707,
      "pages_per_visit": 6.61904934721117
    },
    {
      "global_rank": 1020,
      "domain": "kroger.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 44097319.0385149,
      "curr_month_visits": 44097319.0385149,
      "unique_users": 16651250.5142243,
      "pages_per_visit": 4.24555592931061
    },
    {
      "global_rank": 1021,
      "domain": "docusign.net",
      "category": "Business_and_Consumer_Services/Business_Services",
      "avg_month_visits": 53312881.5351242,
      "curr_month_visits": 53312881.5351242,
      "unique_users": 26211452.5564095,
      "pages_per_visit": 3.4193067135981
    },
    {
      "global_rank": 1023,
      "domain": "sports.naver.com",
      "category": "Sports/Rugby",
      "avg_month_visits": 59799292.3352468,
      "curr_month_visits": 59799292.3352468,
      "unique_users": 7531522.32451024,
      "pages_per_visit": 4.1341793534583
    },
    {
      "global_rank": 1024,
      "domain": "vinted.fr",
      "category": "Lifestyle/Fashion_and_Apparel",
      "avg_month_visits": 29417067.5020514,
      "curr_month_visits": 29417067.5020514,
      "unique_users": 4553677.58663397,
      "pages_per_visit": 13.5144116101951
    },
    {
      "global_rank": 1025,
      "domain": "kicker.de",
      "category": "Sports/Tennis",
      "avg_month_visits": 60221306.2522433,
      "curr_month_visits": 60221306.2522433,
      "unique_users": 7440734.805918,
      "pages_per_visit": 3.80768534765636
    },
    {
      "global_rank": 1027,
      "domain": "id.me",
      "category": "Law_and_Government/National_Security",
      "avg_month_visits": 32275358.3998699,
      "curr_month_visits": 32275358.3998699,
      "unique_users": 15241482.2303217,
      "pages_per_visit": 7.86012945880258
    },
    {
      "global_rank": 1028,
      "domain": "ebay.com.au",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 38708905.3053665,
      "curr_month_visits": 38708905.3053665,
      "unique_users": 9536661.26961909,
      "pages_per_visit": 6.79032239800803
    },
    {
      "global_rank": 1029,
      "domain": "egydead.center",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 89730932.555063,
      "curr_month_visits": 89730932.555063,
      "unique_users": 9469825.93403416,
      "pages_per_visit": 2.96289023890298
    },
    {
      "global_rank": 1030,
      "domain": "doramalive.news",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 65904819.8770325,
      "curr_month_visits": 65904819.8770325,
      "unique_users": 2887767.33608104,
      "pages_per_visit": 3.5899606761112
    },
    {
      "global_rank": 1031,
      "domain": "delta.com",
      "category": "Travel_and_Tourism/Air_Travel",
      "avg_month_visits": 42100547.3912334,
      "curr_month_visits": 42100547.3912334,
      "unique_users": 17225962.6550487,
      "pages_per_visit": 5.94551867631765
    },
    {
      "global_rank": 1032,
      "domain": "startpage.com",
      "category": "Computers_Electronics_and_Technology/Search_Engines",
      "avg_month_visits": 62615472.4610649,
      "curr_month_visits": 62615472.4610649,
      "unique_users": 4951351.72016815,
      "pages_per_visit": 3.77437211887097
    },
    {
      "global_rank": 1033,
      "domain": "11st.co.kr",
      "category": "E-commerce_and_Shopping/E-commerce_and_Shopping",
      "avg_month_visits": 43685741.3159487,
      "curr_month_visits": 43685741.3159487,
      "unique_users": 10976438.3656518,
      "pages_per_visit": 4.59714750923672
    },
    {
      "global_rank": 1034,
      "domain": "xxxbp.tv",
      "category": "Adult",
      "avg_month_visits": 24040903.9669272,
      "curr_month_visits": 24040903.9669272,
      "unique_users": 12233514.3992031,
      "pages_per_visit": 6.98144778179317
    },
    {
      "global_rank": 1035,
      "domain": "futbin.com",
      "category": "Games/Video_Games_Consoles_and_Accessories",
      "avg_month_visits": 42485489.4641719,
      "curr_month_visits": 42485489.4641719,
      "unique_users": 4770785.444096,
      "pages_per_visit": 8.95348040715239
    },
    {
      "global_rank": 1036,
      "domain": "news.sportbox.ru",
      "category": "Sports/Golf",
      "avg_month_visits": 65114403.6569857,
      "curr_month_visits": 65114403.6569857,
      "unique_users": 5843029.99462435,
      "pages_per_visit": 3.11417499342929
    },
    {
      "global_rank": 1037,
      "domain": "txxx.com",
      "category": "Adult",
      "avg_month_visits": 48292761.6318704,
      "curr_month_visits": 48292761.6318704,
      "unique_users": 22773732.3180518,
      "pages_per_visit": 3.61304847613138
    },
    {
      "global_rank": 1038,
      "domain": "justwatch.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 58149259.6505346,
      "curr_month_visits": 58149259.6505346,
      "unique_users": 40932975.8794472,
      "pages_per_visit": 2.03471924266339
    },
    {
      "global_rank": 1039,
      "domain": "satta-king-fast.com",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 61061522.3153825,
      "curr_month_visits": 61061522.3153825,
      "unique_users": 3065319.06282359,
      "pages_per_visit": 2.30234320811167
    },
    {
      "global_rank": 1041,
      "domain": "modyolo.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 34079910.1281155,
      "curr_month_visits": 34079910.1281155,
      "unique_users": 12864027.5996819,
      "pages_per_visit": 6.26829523390244
    },
    {
      "global_rank": 1043,
      "domain": "getallmylinks.com",
      "category": "Adult",
      "avg_month_visits": 59651753.6641136,
      "curr_month_visits": 59651753.6641136,
      "unique_users": 28587215.2028556,
      "pages_per_visit": 1.48704325758268
    },
    {
      "global_rank": 1044,
      "domain": "smallpdf.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 48387373.910483,
      "curr_month_visits": 48387373.910483,
      "unique_users": 25525082.952431,
      "pages_per_visit": 3.7239217211884
    },
    {
      "global_rank": 1046,
      "domain": "streameast.gd",
      "category": "Sports/Fantasy_Sports",
      "avg_month_visits": 47936349.7827752,
      "curr_month_visits": 47936349.7827752,
      "unique_users": 11584678.5117295,
      "pages_per_visit": 3.09284298971942
    },
    {
      "global_rank": 1047,
      "domain": "powerbi.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 47194976.3002999,
      "curr_month_visits": 47194976.3002999,
      "unique_users": 6492748.30111668,
      "pages_per_visit": 6.11803260567049
    },
    {
      "global_rank": 1048,
      "domain": "carfax.com",
      "category": "Vehicles/Vehicles",
      "avg_month_visits": 47640944.7130092,
      "curr_month_visits": 47640944.7130092,
      "unique_users": 19094493.0745097,
      "pages_per_visit": 4.13919945190215
    },
    {
      "global_rank": 1050,
      "domain": "stripchat.global",
      "category": "Adult",
      "avg_month_visits": 17168896.4485525,
      "curr_month_visits": 17168896.4485525,
      "unique_users": 4195922.5961625,
      "pages_per_visit": 25.8696049817491
    },
    {
      "global_rank": 1051,
      "domain": "mhlw.go.jp",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 47383173.9589393,
      "curr_month_visits": 47383173.9589393,
      "unique_users": 18534981.0796393,
      "pages_per_visit": 4.64548095762649
    },
    {
      "global_rank": 1052,
      "domain": "pearson.com",
      "category": "Science_and_Education/Libraries_and_Museums",
      "avg_month_visits": 50184321.7110931,
      "curr_month_visits": 50184321.7110931,
      "unique_users": 7490550.76316598,
      "pages_per_visit": 6.35716783473661
    },
    {
      "global_rank": 1053,
      "domain": "aliyun.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 34953094.2217669,
      "curr_month_visits": 34953094.2217669,
      "unique_users": 5856020.63141546,
      "pages_per_visit": 8.34626472095278
    },
    {
      "global_rank": 1054,
      "domain": "aarp.org",
      "category": "Health/Health",
      "avg_month_visits": 37238274.7416014,
      "curr_month_visits": 37238274.7416014,
      "unique_users": 14602892.1255343,
      "pages_per_visit": 6.78262787135675
    },
    {
      "global_rank": 1055,
      "domain": "instacart.com",
      "category": "Food_and_Drink/Groceries",
      "avg_month_visits": 38560136.6344794,
      "curr_month_visits": 38560136.6344794,
      "unique_users": 20227212.9852268,
      "pages_per_visit": 5.71415324972065
    },
    {
      "global_rank": 1056,
      "domain": "nvidia.com",
      "category": "Computers_Electronics_and_Technology/Computer_Hardware",
      "avg_month_visits": 33087241.4544753,
      "curr_month_visits": 33087241.4544753,
      "unique_users": 19899016.5060963,
      "pages_per_visit": 4.8211319584557
    },
    {
      "global_rank": 1057,
      "domain": "mangaraw.best",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 35592902.918286,
      "curr_month_visits": 35592902.918286,
      "unique_users": 783887.540715124,
      "pages_per_visit": 13.9899086881133
    },
    {
      "global_rank": 1058,
      "domain": "upwork.com",
      "category": "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
      "avg_month_visits": 38372021.3868366,
      "curr_month_visits": 38372021.3868366,
      "unique_users": 6554597.90551073,
      "pages_per_visit": 9.46834765072028
    },
    {
      "global_rank": 1061,
      "domain": "idealista.it",
      "category": "Business_and_Consumer_Services/Real_Estate",
      "avg_month_visits": 31579317.7761508,
      "curr_month_visits": 31579317.7761508,
      "unique_users": 10304111.7747337,
      "pages_per_visit": 10.3909175274326
    },
    {
      "global_rank": 1062,
      "domain": "auction.co.kr",
      "category": "E-commerce_and_Shopping/Auctions",
      "avg_month_visits": 32533329.3332502,
      "curr_month_visits": 32533329.3332502,
      "unique_users": 10038554.5737532,
      "pages_per_visit": 6.1056449990711
    },
    {
      "global_rank": 1063,
      "domain": "proton.me",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 44413096.6609692,
      "curr_month_visits": 44413096.6609692,
      "unique_users": 6844664.48133925,
      "pages_per_visit": 6.31048031101704
    },
    {
      "global_rank": 1064,
      "domain": "bfmtv.com",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 68359063.3669817,
      "curr_month_visits": 68359063.3669817,
      "unique_users": 20076121.0439024,
      "pages_per_visit": 1.76429955462298
    },
    {
      "global_rank": 1067,
      "domain": "anime-nexus.ro",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 46797362.0131072,
      "curr_month_visits": 46797362.0131072,
      "unique_users": 2193540.76373499,
      "pages_per_visit": 4.19750300913016
    },
    {
      "global_rank": 1068,
      "domain": "istockphoto.com",
      "category": "Hobbies_and_Leisure/Photography",
      "avg_month_visits": 43116101.2973338,
      "curr_month_visits": 43116101.2973338,
      "unique_users": 29005729.7808469,
      "pages_per_visit": 3.84169576653222
    },
    {
      "global_rank": 1070,
      "domain": "familysearch.org",
      "category": "Hobbies_and_Leisure/Ancestry_and_Genealogy",
      "avg_month_visits": 21819617.2364025,
      "curr_month_visits": 21819617.2364025,
      "unique_users": 8790068.53976729,
      "pages_per_visit": 17.8593921778639
    },
    {
      "global_rank": 1071,
      "domain": "wordwall.net",
      "category": "Science_and_Education/Math",
      "avg_month_visits": 42058879.2326208,
      "curr_month_visits": 42058879.2326208,
      "unique_users": 16195347.7525239,
      "pages_per_visit": 4.38734994925085
    },
    {
      "global_rank": 1072,
      "domain": "feishu.cn",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 42529405.2866964,
      "curr_month_visits": 42529405.2866964,
      "unique_users": 6391384.59569832,
      "pages_per_visit": 6.33299867498573
    },
    {
      "global_rank": 1073,
      "domain": "methstreams.com",
      "category": "Sports/Martial_Arts",
      "avg_month_visits": 41757712.0323464,
      "curr_month_visits": 41757712.0323464,
      "unique_users": 6212969.94389102,
      "pages_per_visit": 4.11147089289937
    },
    {
      "global_rank": 1074,
      "domain": "doctolib.fr",
      "category": "Health/Health",
      "avg_month_visits": 38684213.7410674,
      "curr_month_visits": 38684213.7410674,
      "unique_users": 13756225.7774782,
      "pages_per_visit": 6.50485617100308
    },
    {
      "global_rank": 1075,
      "domain": "vrbo.com",
      "category": "Travel_and_Tourism/Accommodation_and_Hotels",
      "avg_month_visits": 32776976.8123671,
      "curr_month_visits": 32776976.8123671,
      "unique_users": 17194917.3034286,
      "pages_per_visit": 8.73087863059132
    },
    {
      "global_rank": 1076,
      "domain": "akakce.com",
      "category": "E-commerce_and_Shopping/Price_Comparison",
      "avg_month_visits": 41847130.7242337,
      "curr_month_visits": 41847130.7242337,
      "unique_users": 20089199.416365,
      "pages_per_visit": 3.83166318313076
    },
    {
      "global_rank": 1077,
      "domain": "snaptik.app",
      "category": "Computers_Electronics_and_Technology/Social_Networks_and_Online_Communities",
      "avg_month_visits": 66100530.9566721,
      "curr_month_visits": 66100530.9566721,
      "unique_users": 14879582.1791077,
      "pages_per_visit": 2.62739600904363
    },
    {
      "global_rank": 1079,
      "domain": "testbook.com",
      "category": "Science_and_Education/Education",
      "avg_month_visits": 51814995.1851674,
      "curr_month_visits": 51814995.1851674,
      "unique_users": 21087152.5024156,
      "pages_per_visit": 3.76081275720747
    },
    {
      "global_rank": 1080,
      "domain": "unext.jp",
      "category": "Arts_and_Entertainment/Arts_and_Entertainment",
      "avg_month_visits": 45285072.0597846,
      "curr_month_visits": 45285072.0597846,
      "unique_users": 13069207.9436302,
      "pages_per_visit": 4.88523207141605
    },
    {
      "global_rank": 1081,
      "domain": "credit-agricole.fr",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 36542286.5650969,
      "curr_month_visits": 36542286.5650969,
      "unique_users": 5791849.95950718,
      "pages_per_visit": 7.0397378147934
    },
    {
      "global_rank": 1083,
      "domain": "attn.tv",
      "category": "Business_and_Consumer_Services/Business_and_Consumer_Services",
      "avg_month_visits": 61470161.9883302,
      "curr_month_visits": 61470161.9883302,
      "unique_users": 25012060.5838521,
      "pages_per_visit": 1.27380565471625
    },
    {
      "global_rank": 1084,
      "domain": "wiktionary.org",
      "category": "Reference_Materials/Maps",
      "avg_month_visits": 51906814.8007122,
      "curr_month_visits": 51906814.8007122,
      "unique_users": 31307353.1220916,
      "pages_per_visit": 2.8005789387614
    },
    {
      "global_rank": 1085,
      "domain": "lululemon.com",
      "category": "Lifestyle/Fashion_and_Apparel",
      "avg_month_visits": 31023795.9911659,
      "curr_month_visits": 31023795.9911659,
      "unique_users": 15003368.2024301,
      "pages_per_visit": 4.77472984273419
    },
    {
      "global_rank": 1086,
      "domain": "premierleague.com",
      "category": "Sports/Water_Sports",
      "avg_month_visits": 55736558.1082968,
      "curr_month_visits": 55736558.1082968,
      "unique_users": 8734447.02611173,
      "pages_per_visit": 4.60006576639675
    },
    {
      "global_rank": 1087,
      "domain": "harborfreight.com",
      "category": "Home_and_Garden/Home_and_Garden",
      "avg_month_visits": 44207304.2903516,
      "curr_month_visits": 44207304.2903516,
      "unique_users": 18836600.3452849,
      "pages_per_visit": 3.47662501100728
    },
    {
      "global_rank": 1088,
      "domain": "zdf.de",
      "category": "Arts_and_Entertainment/TV_Movies_and_Streaming",
      "avg_month_visits": 61381997.6490811,
      "curr_month_visits": 61381997.6490811,
      "unique_users": 18128113.0802991,
      "pages_per_visit": 2.46488534031071
    },
    {
      "global_rank": 1090,
      "domain": "bcgame.li",
      "category": "Gambling/Sports_Betting",
      "avg_month_visits": 44185571.6930267,
      "curr_month_visits": 44185571.6930267,
      "unique_users": 28990151.9925574,
      "pages_per_visit": 1.50102047659358
    },
    {
      "global_rank": 1091,
      "domain": "recetasdelmundorural.com",
      "category": "Arts_and_Entertainment/Animation_and_Comics",
      "avg_month_visits": 19956446.0175026,
      "curr_month_visits": 19956446.0175026,
      "unique_users": 4892840.27542776,
      "pages_per_visit": 7.54689353112841
    },
    {
      "global_rank": 1093,
      "domain": "liverpool.com.mx",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 32281573.9159191,
      "curr_month_visits": 32281573.9159191,
      "unique_users": 13534735.3888201,
      "pages_per_visit": 4.95052895714476
    },
    {
      "global_rank": 1094,
      "domain": "action.com",
      "category": "E-commerce_and_Shopping/Marketplace",
      "avg_month_visits": 34674024.7841067,
      "curr_month_visits": 34674024.7841067,
      "unique_users": 15094246.2952844,
      "pages_per_visit": 5.11812075536811
    },
    {
      "global_rank": 1095,
      "domain": "gst.gov.in",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 29935441.9122912,
      "curr_month_visits": 29935441.9122912,
      "unique_users": 5193179.29634881,
      "pages_per_visit": 12.6450475313419
    },
    {
      "global_rank": 1098,
      "domain": "alfabank.ru",
      "category": "Finance/Banking_Credit_and_Lending",
      "avg_month_visits": 44036384.1664341,
      "curr_month_visits": 44036384.1664341,
      "unique_users": 14074520.502936,
      "pages_per_visit": 4.8880801749711
    },
    {
      "global_rank": 1099,
      "domain": "xozilla.com",
      "category": "Adult",
      "avg_month_visits": 40979015.8496041,
      "curr_month_visits": 40979015.8496041,
      "unique_users": 23081314.7698275,
      "pages_per_visit": 2.97072558173139
    },
    {
      "global_rank": 1100,
      "domain": "latamairlines.com",
      "category": "Travel_and_Tourism/Air_Travel",
      "avg_month_visits": 42220592.6920891,
      "curr_month_visits": 42220592.6920891,
      "unique_users": 18477744.0027592,
      "pages_per_visit": 3.98489213388068
    },
    {
      "global_rank": 1101,
      "domain": "makemytrip.com",
      "category": "Travel_and_Tourism/Travel_and_Tourism",
      "avg_month_visits": 38330646.1017073,
      "curr_month_visits": 38330646.1017073,
      "unique_users": 18834046.4343082,
      "pages_per_visit": 4.49433266565163
    },
    {
      "global_rank": 1102,
      "domain": "weather.gov",
      "category": "Sports/American_Football",
      "avg_month_visits": 62364872.1194771,
      "curr_month_visits": 62364872.1194771,
      "unique_users": 9959700.5153939,
      "pages_per_visit": 2.6474465699869
    },
    {
      "global_rank": 1103,
      "domain": "hitmotop.com",
      "category": "Arts_and_Entertainment/Music",
      "avg_month_visits": 55474153.4706577,
      "curr_month_visits": 55474153.4706577,
      "unique_users": 13629783.7667139,
      "pages_per_visit": 2.82804940618058
    },
    {
      "global_rank": 1104,
      "domain": "wikihow.com",
      "category": "Reference_Materials/Reference_Materials",
      "avg_month_visits": 70530283.1336708,
      "curr_month_visits": 70530283.1336708,
      "unique_users": 51472362.0463994,
      "pages_per_visit": 1.52588782985664
    },
    {
      "global_rank": 1105,
      "domain": "vtb.ru",
      "category": "Finance/Financial_Planning_and_Management",
      "avg_month_visits": 39927519.5658663,
      "curr_month_visits": 39927519.5658663,
      "unique_users": 15335296.2321984,
      "pages_per_visit": 4.83453790005582
    },
    {
      "global_rank": 1107,
      "domain": "mg.gov.br",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 39056834.2360334,
      "curr_month_visits": 39056834.2360334,
      "unique_users": 7739195.92525761,
      "pages_per_visit": 7.60996663692488
    },
    {
      "global_rank": 1108,
      "domain": "mango.com",
      "category": "Lifestyle/Fashion_and_Apparel",
      "avg_month_visits": 34308065.0816853,
      "curr_month_visits": 34308065.0816853,
      "unique_users": 15192279.1160161,
      "pages_per_visit": 4.9495619947899
    },
    {
      "global_rank": 1112,
      "domain": "russianfood.com",
      "category": "Food_and_Drink/Cooking_and_Recipes",
      "avg_month_visits": 55962985.2803372,
      "curr_month_visits": 55962985.2803372,
      "unique_users": 22026163.4554151,
      "pages_per_visit": 2.56818048996431
    },
    {
      "global_rank": 1113,
      "domain": "1mg.com",
      "category": "Health/Health",
      "avg_month_visits": 54305041.937928,
      "curr_month_visits": 54305041.937928,
      "unique_users": 25162149.1726331,
      "pages_per_visit": 2.66049365785289
    },
    {
      "global_rank": 1114,
      "domain": "docusign.com",
      "category": "Computers_Electronics_and_Technology/Programming_and_Developer_Software",
      "avg_month_visits": 40065913.7130896,
      "curr_month_visits": 40065913.7130896,
      "unique_users": 15664987.4148169,
      "pages_per_visit": 6.12726883853608
    },
    {
      "global_rank": 1115,
      "domain": "royalmail.com",
      "category": "Law_and_Government/Government",
      "avg_month_visits": 46787982.3422882,
      "curr_month_visits": 46787982.3422882,
      "unique_users": 14143451.9519482,
      "pages_per_visit": 4.09643703378527
    },
    
  ]

function formatVisits(visits) {
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