---
title: VNPY TUTORIAL 0x03 Domestic Futures CTP
description: Vnpy quant tutorial, domestic futures CTP
keywords: Vnpy, quant tutorial, domestic futures CTP
date: 2024-09-05
category: "quant" 
---

> Warning: This page is translated by MACHINE, which may lead to POOR QUALITY or INCORRECT INFORMATION, please read with CAUTION!


VNPY support transactions: futures, stocks, options, foreign exchange

* Domestic futures: previous technology CTP interface
* Blockchain: Bitcoin contract Bitmex interface
* Overseas market: Yingyou Securities IB interface
* A -share Securities: Zhongtai Securities XTP interface


 [https://www.simnow.com.cn](https://www.simnow.com.cn) 

* Registered investor account




 ![](https://i-blog.csdnimg.cn/blog_migrate/50be935380100076e9994b8d39f3e737.png) 


After register

After entering the main interface, click "System"-> "Connect CTP" in the menu bar to see the dialog box:

 ![](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzV2Fm1Pj4E7Jr1YzFMr3TK8bzjtIefib8vOkbAXRdZpywR8aickfkvU51Q/640?wx_fmt=png) 


- Username: SIMNOW's INVESTOD
- Password: Simnow's password
- Broker Code: 9999
- Trading server: 180.168.146.187: 10101
- Market server: 180.168.146.187: 10111
- Product name: SIMNOW_Client_test
- Authorized code: 00000000000000 (16 0)
- Product information: left blank without filling in


- Select 1 (corresponding to the first set of SIMNOW)
-The trading server: 180.168.146.187: 10101
-Marcular server: 180.168.146.187: 10111
- Select 2 (corresponding to the first set of SIMNOW)
-The trading server: 218.202.237.33: 10102
-Marcular server: 218.202.237.33: 10112
- Select 3 (corresponding to the second set of SIMNOW)
-The trading server: 180.168.146.187: 10130
-Catal server: 180.168.146.187: 10131

See you after logging in

 ![](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzVSyPWJQED2rgkHhQyqYAQZqGVBxlJaYCia81xMviaCiabvyo3XswFPic4Dw/640?wx_fmt=png) 


# Check the contract

Click the menu bar "Help"-> "Query Contract", or the second magnifying mirror button of the guidance bar on the left function navigation bar, open the contract query dialog box:

 ![](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzVf6gLafyFqgCATlXJCA9eIfoxly5qBOypp44ncpTSwWZKPibuepGamHQ/640?wx_fmt=png) 


Click the query button in the upper right corner to show all the transaction contracts supported by the current VN Trader's connected trading interface (CTP).


- Contract code SYMBOL: The only identification of the contract on a exchange
- Exchange code Exchange: The unique logo in the Vn Trader where the transaction is where the transaction is located
- Local code VT_SYMBOL: It is composed of the contract code and the exchange code. It represents the unique identifier of the contract in the VN Trader. It requires that the exchange code may be duplicated. For example In the Shenzhen Stock Exchange, the representative of the Shenzhen Stock Exchange is Ping An Bank;
- Price beating PriceTick: It means the minimum change unit of the price when the transaction commission is incorrect.



# Subscription market

In the trading component box in the upper left corner of the vn trader interface, select the exchange and interface, and enter the contract code in the code box to return to the market to subscribe to the market.
When receiving the latest market TICK push, it will be displayed in the deep quotation below. The maximum update frequency of TICK push is 2 pens per second. If there is no change, there may be no push.
Note that domestic futures generally only provide 1 -speed buying and selling prices. Some futures companies' previous periods and energy exchanges varieties can obtain 5 -speed buying and selling prices.


 ![](https://xcy-1251434521.cos.ap-chengdu.myqcloud.com/picture/202409051333423.png?imageSlim) 
Note that the contract naming rules of each exchange are different:
- CFFEX: Part of the letters, 2 digits of the year, an example of IF1908
- SHFE in the last period: part of the letter, the number of years is 2 digits, an example of RB1910
- Energy Exchange INE: Part of the letters, the number of years is 2 digits, an example of SC1910
- DCE DCE: Part of the letters, the number of years is 2, for example, M1911
- Zheng Shang Institute CZCE: Part of the letter, the number of years is 1 digit, for example, TA910

In the "market" on the right, the subscription information is the information. Convenient for follow -up quickly execute manual transactions


# Plug in transaction

After knowing the market, buy it


 ![](https://xcy-1251434521.cos.ap-chengdu.myqcloud.com/picture/202409051355983.png?imageSlim) 

1. Choose a transaction direction: buy (more) or sell (empty)
2. Choose a transaction to open the flat: To open a position or liquidation, for the contract in the previous period, the specific choice is flat or yesterday (the wrong choice will be unable to be rejected)
3. Choose the price type: CTP interface supports four commission types: price limit, market price, FAK (Fill-And-Kill), FOK (Fill-OR-Kill). Note that the SIMNOW environment does not support the market price bill! Intersection Intersection
4. After entering the price and quantity, click the "View" button to issue a transaction request


After the entrusted request is submitted, the corresponding commission returns will be returned to the commissioned component to display the latest state of the current commission request:

Note that the commissioned component is divided into two: note that the entrusted component is divided into two:

- "Activity": Only the commission information of the current withdrawal state (submitted, unable to transaction, and partial transactions)
- "Commission": Display all commission information (including withdrawal commission)

For commissioned commissioned state
 **** double -click the cell entrusted cells to come**The function of the withdrawal order is implemented (there will be text prompts when the mouse is placed).
* Click on the transaction component **"Full Withdrawal" button** let's realize all the current withdrawal commission within the Vn Trader.



## Capital holding

After the transaction is commissioned, the capital situation of the CTP account will change, and the available funds will be reduced. At the same time, the overall balance will change based on the rules of "watching the market day by day".

 ![](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzVQEElpDItOibTooDWecQQvNQheNdz4tSPvWKHe89K84Fd6gicqGibpRXKA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 


The data of the capital monitoring component in the middle bottom of the vn trader, the default is refreshed at a frequency of 6 seconds, so you see that the data may not be the latest at a certain time.


 ![](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzVyKXqiaTRHa88fP7PicS2kGvBkyD8icJmItHy4WrPdlIasZtEibKkf4T3ZA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 



# Real trading

  

When you are already familiar with Simnow's simulation test environment, you may have prepared for real trading in using the CTP counter.

For CTP real trading: For CTP real trading:

- The username and password are the information that you get directly after opening an account
- Brokerage number and trading market server address, you can contact your customer manager to get it
- The product name and authorization coding need to complete the penetration certification and get it
