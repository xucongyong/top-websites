---
title: Vnpy tutorial 0x04 IB
description: Vnpy Quant Tutorial, IB
keywords: Vnpy, quant tutorial, IB
date: 2024-09-05
category: "quant" 
---

> Warning: This page is translated by MACHINE, which may lead to POOR QUALITY or INCORRECT INFORMATION, please read with CAUTION!


IB, the full name of the Internet Brokers, a Chinese names, is a global recognized all -variety retail broker. The financial varieties provided include:


- Stocks: US stocks, Hong Kong stocks, European stocks, A shares (Shanghai -Hong Kong Stock Connect), etc.
- Futures: CME, LME, HKFE, SGX, etc. (No domestic futures)
- Options: All options of the above stocks and futures exchanges
- Solid income: Bonds of conventional exchanges and bonds between unconventional banks (call)
- Foreign exchange: leverage foreign exchange of pure ECN trading model (banks in banks)
- Precious metal spot: the same inter -bank leverage market as foreign exchange

Coupled with the more than ten years of history, IB API, which has already become a standard trading interface in the industry, basically talks about outer trading channels. IB is the first choice that is not allowed.
But it is important to emphasize that IB is not necessarily the ultimate optimal choice for certain specific trading markets or needs, but it must be the most convenient.


Unlike other interfaces, IB has three account systems:

- Live trading: real account account
- Paper Trading: Simulation Account
- Demo trading: demonstration account

## Go to IB official website to download TWS

https://www.interactivebrokers.com/en/index.php?f=14099#TWS-Software


Start after installation and see the following interface:

  

 ![picture](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblDvicMZAqhN2Dz9LweMqfxJFYSYqX3icYVdia7N3frBENCJI62YYepItia3mUAakoJXvYQThJibbRjYZ2w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

Click the "Return to the Demo" button at the bottom to open the demonstration account test interface:

  

 ![picture](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblDvicMZAqhN2Dz9LweMqfxJFaw1nYLQLHyibyGcJuCdY2fMiauOMkBlwQtbUTPMicgWibNlAvNuYiczPeHw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

After entering the mailbox address, click the "TRY DEMO" button to log in to the TWS interface entering the demonstration account:

  

 ![picture](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblDvicMZAqhN2Dz9LweMqfxJFoo3KA9iaO5THUxiaGdftaEXZ3Ems53eAHXYhmrtdSviaB49bNJQ93QkKQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

Click the gear icon in the upper right corner (the fifth guide from the right to the left), open the TWS configuration dialog box, set the "Current Language" to English on the General page, close and restart the TWS.

  

 ![picture](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLGAXLNAnBf2Tz9jXWR8CDh4HWHBxM0mlCMLR73fREN0jRJPrIxSuQtQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

Then enter "API"-> "Settings" for API access-related configuration:

  

1. Check "Enable Activex and Socket Clients" and allow external programs to access TWS;
    
2. Check "Download Open Orders on Connection", and get all the unsusted commission information when the external program is connected to TWS;
    
3. Record your port number "Socket Port" (I am 7497), which will be used to connect to TWS from VN Trader;
    
4. Click the "OK" button to save the configuration



# Interface login

  

Unlike most other API interface direct -connected broker servers, the IB interface is connected to the local trading client TWS, and then TWS is responsible for the IB server. Therefore Log in.

  

Next, according to the method of entry 1, start Vn Trader Pro, and only loads the "Yonglou Securities" interface.

  

After entering the main interface, click "System"-> "Connect IB" in the menu bar, and see the dialog box:

  

 ![picture](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblDvicMZAqhN2Dz9LweMqfxJFiaXaznoyzCxicS5bNTricO1IUlzwkxkeO1h1V679g2SsrODoRjYMremAQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

The filling of each field is as follows:

  

- TWS Address: 127.0.0.1 (IP address of this machine)
- TWS port: 7497 (previous steps)
- Customer number: Fill in 1 (unless you have multiple processes to connect TWS)


It should be emphasized that unlike other APIs such as CTP directly connected to the far -end server model from local transaction programs, the IB API connection is from local trading procedures (such as VN Trader) to local client TWS. From local to IB server connection.

  
After filling in the above, click the "Connection" button to start logging in to the CTP server and related initialization operations. In the log monitoring component in the lower right corner, you can see the original log information output:


 ![picture](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblDvicMZAqhN2Dz9LweMqfxJFJmVHCHrAsQudXnaQB30V9MH3xibnQGhSgS788n8pbU5iaU65eTqGWbrg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

There are any abnormalities in the login initialization process. The corresponding text output will be seen in the log information, which can be checked according to the content. After seeing the "server time" log, it indicates that the initialization operation has been successfully completed.

  

There will still be a series of information notifications in the follow -up. These are mainly related to the configuration of data permissions related to the IB account (to be honest, tell you that you do n’t spend money on the real -time market, you ca n’t get it now), Demo Trading does not have a special solution. It is recommended to apply for Paper Trarting after the deposit.

  

  

 **Check the contract** 

  

Due to the exchanges supported by Yinglie Securities and the contract resources, the IB API cannot provide a full contract query function similar to the CTP interface. Users need to go to the official website of Yongye Securities. On their trading product list page, find related contract information by themselves:

 [InteractiveBroker smart contract](https://www.interactivebrokers.com.hk/cn/index.php) 

  

Note that in the VN Trader, the trading contract code used for the IB interface is the only identifier of the contract in the IB system. The full name is Contract Identifier. Pay attention to the confid to a string of pure numbers. Do not mix with Symbol or Description name.

  
  

 **Subscription market** 

  

After finding the contract information you want to subscribe for the market in the previous step, you can select the exchange and interface in the trading component box in the upper left corner of the VN Trader interface, enter the contract code in the code box, and then enter the car. Quotes.

  

When receiving the latest market TICK push, it will be displayed in the in -depth quotation below. The highest update frequency of the IB interface tick push is 4 per second.
When receiving the latest market TICK push, it will be displayed in the in -depth quotation below. The highest update frequency of the IB interface tick push is 4 per second.
  

 ![picture](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzVqoiawRYv672zibLmib0NRW3sklZ7icrDlOYfh80z1H8uCZN8blKtticACJg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

After the subscription market, the IB interface will automatically query the relevant information of the contract. At this time, open the "help"-> "Contract inquiry" component to see the contract:

  

 ![picture](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLW11iaZz4Oabib8gIdkfPe5U2h1kOM3D0ic6LTpia6G92bo9VCUTSRk1U3g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

All subscribing market information will be displayed in the market monitoring component on the right side of the right, which is convenient for subsequent rapid execution of manual transactions:

  

 ![picture](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlL11Lbyrfdd1MwbYE642g8JNqALqJUVh3qqoHlCfW3u3bOXWjJrQedHg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

Pay attention to the market data on IB. Except for a small amount of free (foreign exchange, precious metal), most of the other need to pay in the background management system of the IB official website before it can be subscribed in Vn Trader. If the market subscription fails (CONID is wrong, not purchased, etc.), there will also be corresponding content output in the log component in the lower left corner to facilitate investigation.

  

  

 **Plug in transaction** 

  

After knowing where the price of the latest market is, you can pay for the order:

  

 ![picture](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLIpI9zYU0CYIh6hnCCTA6Z6rPMEqlQK7arlBiagicwnP6t9KJLQlmFuXg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

1. Choose a transaction direction: buy (more) or sell (empty)
    
2. Kaiping stays blank without choosing
    
3. Choose the price type: IB interface supports price limit, market price
    
4. After entering the price and quantity, click the "View" button to issue a transaction request
    

  

  

 **Commission** 

  

After the entrusted request is submitted, the corresponding commission returns will be returned to the commissioned component to display the latest state of the current commission request:

  

 ![picture](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLCEl4UuFx5NbNL1Sdicz4olDwv71eQ5sKGfqyMztgQE5h2EC6w92of0w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

  

Note that the commissioned component is divided into two:

  

- "Activity": Only the commission information of the current withdrawal state (submitted, unable to transaction, and partial transactions)
    
- "Commission": Display all commission information (including withdrawal commission)
    

  

Among the two components, they can be entrusted in a dismissal state.**Double -click the cell entrusted cells** the function of the withdrawal order is implemented (there will be text prompts when the mouse is placed). Or you can also click on the transaction component **"Full Withdrawal" button** let's realize all the current withdrawal commission within the Vn Trader.

  

 ![picture](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLfIJnOLibE1UlfMef0gS0uDwxOaJMb4QrB3ian7FHmmBKrjfjAcKj7qicA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

  

When the transaction occurs, the Vn Tradeer will receive the data push data and display it in the transaction monitoring component. The user can achieve and the mapping of the corresponding commission through the commission number of each transaction. Note that in the real market, each entrustment may have a transaction with multiple investors from other investors, that is, one entrustment has a record of multiple transactions.

  

 **Capital holding** 

  

After the transaction is entrusted, the account of the account will change. IB provides an independent account number for each currency funds. It can be judged by the account name suffix. Note that the base is the basic currency account of your IB account.

  

 ![picture](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLdPzW39F4gibPyPbReKO4KGVjv5O9TVTwGbkOsEK3aFTS2EX2t7JENRQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

The IB interface provides real -time pushing and updated funds and positioning data, and the net position mode is also calculated in the position of the position:

  

 ![picture](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLdmmqLKOuFM3jYuajg0lKKtQY6RZjhOWOX1pw6C3fMTBOV6CcdjgbiaQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

  

 **Real trading** 

  

When you have been familiar with IB's DEMO Trading test environment, you can start using Paper Trading for simulation transactions, or use Live Trading for real trading. You only need to select the corresponding account when you log in to TWS.

  

In addition to TWS, IB also provides a more lightweight client IB Gateway for API transactions. Only the simplest GUI interface is used to display logs, which has more advantages in resource occupation and delayed performance.


