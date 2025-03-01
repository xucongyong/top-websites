---
title: Vnpy tutorial 0x07 practical
description: Vnpy Quant Tutorial, Practical
keywords: Vnpy, Quant Tutorial, Practical
date: 2024-09-05
category: "quant" 
---

> Warning: This page is translated by MACHINE, which may lead to POOR QUALITY or INCORRECT INFORMATION, please read with CAUTION!



* "Function"-> "CTA Strategy" 
* Select Hackstrategy in the upper left corner, and then click to increase the strategy. Input testing the most strategic

 ![](https://xcy-1251434521.cos.ap-chengdu.myqcloud.com/picture/202409111616368.png?imageSlim) 

* Strategy_name: Demo
* vs_symbol (contract code + exchange name): 00700.sehk
* FAST_WINDOW: 30
* Slow_window: 90


 ![](https://xcy-1251434521.cos.ap-chengdu.myqcloud.com/picture/202409111619630.png?imageSlim) 

The top button is used to control and manage the strategy instance,

* The first line form shows the parameter information inside the strategy
* The second line form shows variable information during the strategy operation (variable names need to be written in the Variables list of strategy).

* Inited: Fields represent the initialization of the current strategy (whether the historical data is released),
* Trading: Fields represent whether strategies start trading.

Note all variable information displayed above, you need to be in the strategy **Call the put_event function**, Only on the interface **Refresh the data**.Sometimes users will find their own strategies. No matter how long these variable information runs, please check whether the PUT_EVENT function is missed in this case.