---
title: VNPY Tutorial 0x06 Backtest
description: VNPY Quant Tutorial, Backtest
keywords: VNPY, Quant Tutorial, Backtest
date: 2024-09-05
category: "quant" 
---

> Achtung: Dieser Artikel wurde maschinell übersetzt, was zu schlechter Qualität oder falschen Informationen führen kann, bitte sorgfältig lesen!



Nachdem die Daten gemäß [[[vnpy_tutorial_0x02_futu]]]]]]]]]


Öffnen Sie das Wiederherstellungssystem: Funktion -> ctabacktester


* Strategiestrategie: Hackstrategy
* VTSymbol Lokalcode: Geben Sie 00700.sehk ein
* Startdatum Startzeit: 01.01.24
* Angstrate: 0,000025
* SIP -Seiten -Transaktionsinventar: 0.2
* Größenvertragsmultiplikation 300
* Preis Tickpreis schlägt 0,2
* Capital Returga Back Testing Funds: 1000000.0




Geben Sie 0,000025 (0,25) in das Bearbeitungsfeld der Handhabungsrate ein, 0,2 Eingang des Transaktions -rutschigen Punkt Auch 0,2 (Stock Index Futures Futures Futures (Stock Index Futures Futures Die Mindestpreisänderungen), wir verwenden 1 Million für die Wiederherstellungsfonds.

Klicken Sie auf die Schaltfläche "Test" starten ", um das Dialogfeld Parameterkonfiguration zu überholen:
* Klicken Sie dann auf Start Backtesting

 ![](https://xcy-1251434521.cos.ap-chengdu.myqcloud.com/picture/202409111301001.png?imageSlim) 

Die Fast_window und Slow_window hier sind die Parameternamen, die wir der Parameterliste zuvor hinzugefügt haben.
Unsere Back -Test -Engine startet automatisch den gesamten Prozess des Strategie -Back -Tests:

Lastdaten, Daten zurück, simulierte Übereinstimmung, Berechnung des täglichen Gewinns und Verlusts, statistische Indikatoren,

endlich eine Tabelle zeichnen:

```shell
13:03:21	Initializing BacktesterEngine
13:03:21	Strategies imported
13:03:27	----------------------------------------
13:03:27	Start loading historical data
13:03:27	Loading progress: # [0%]
13:03:28	Loading progress: # [10%]
13:03:28	Loading progress: ## [20%]
13:03:29	Loading progress: ### [30%]
13:03:30	Loading progress: #### [40%]
13:03:31	Loading progress: ##### [50%]
13:03:32	Loading progress: ###### [59%]
13:03:33	Loading progress: ####### [69%]
13:03:34	Loading progress: ######## [79%]
13:03:35	Loading progress: ######### [89%]
13:03:36	Loading progress: ########## [99%]
13:03:36	Historical data loading completed, data count: 89852
13:03:36	Strategy initialization complete
13:03:36	Start replaying historical data
13:03:36	Backtesting progress: = [0%]
13:03:36	Backtesting progress: == [10%]
13:03:37	Backtesting progress: === [20%]
13:03:37	Backtesting progress: ==== [30%]
13:03:37	Backtesting progress: ===== [40%]
13:03:38	Backtesting progress: ====== [50%]
13:03:38	Backtesting progress: ======= [60%]
13:03:38	Backtesting progress: ======== [70%]
13:03:39	Backtesting progress: ========= [80%]
13:03:39	Backtesting progress: ========== [90%]
13:03:39	Backtesting progress: =========== [100%]
13:03:39	Historical backtest complete
13:03:39	Start calculating daily mark-to-market profit and loss
13:03:39	The daily mark-to-market profit and loss calculation is complete
13:03:39	Start calculating strategy statistical indicators
13:03:39	Strategy statistical indicators calculation completedcompleted```


 ![](https://xcy-1251434521.cos.ap-chengdu.myqcloud.com/picture/202409111309963.png?imageSlim) 


- 子图1：资金变化曲线，笔直向下说明稳定亏损
- 子图2：最大回撤曲线，越来越大说明策略亏损越来越多
- 子图3：每日盈亏统计，红绿分布平均，但绿色密度更大（亏损）
- 子图4：盈亏的概率分布图，尖峰在0轴左侧（中位数日期发生亏损）


中间的数据说明

| 功能                           | 数据                |
| ---------------------------- | ----------------- |
| 首个交易日                        | 2016-08-15        |
| 最后交易日                        | 2019-07-31        |
| 总交易日                         | 721               |
| 盈利交易日                        | 265               |
| 亏损交易日                        | 456               |
| 起始资金                         | 1,000,000.00      |
| 结束资金                         | -1,204,558.24     |
| 总收益率                         | -220.46%          |
| 年化收益                         | -73.38%           |
| Max Drawdown最大回撤             | -2,219,999.08     |
| Max Drawdown Duration百分比最大回撤 | -220.15%          |
| Toal Net P&L总盈亏              | -2,204,558.24     |
| Total Commission总手续费         | 519,338.24        |
| Total Slippage总滑点            | 1,154,700.00      |
| Total Turnover总成交额           | 20,773,529,520.00 |
| Total Trade Count 总成交笔数      | 19245             |
| 日均盈亏                         | -3,057.64         |
| 日均手续费                        | 720.30            |
| 日均滑点                         | 1,601.53          |

# 功能说明


* Backtesting Trades 回测交易
* Backtesting Orders 回测订单
* Daily Results 每日资金数据结果
* Candle Chart 蜡烛图
* Start Optimization 开始优化
* Optimization Results 优化结果
* Edit Strategy Code 编辑策略代码
* Reload Strategy Class 重新载入策略代码


# 策略自定义参数


在HackStrategies.py中，改数据

```python

# Definitionsparameter

Fast_window = 10
Slow_window = 20
+test_window = 30


# Definitionsvariable
Fast_ma0 = 0,0
Fast_ma1 = 0,0
Slow_ma0 = 0,0
Slow_ma1 = 0,0
+test_ma0 = 0.0
+test_ma1 = 0,0

# Fügen Sie der entsprechenden Liste Parameter und variabler Name hinzu
#parameters = [[[[[[["fast_window",,,,"slow_window"]
Parameter = ["fast_window",,,,"slow_window",,,,"test_window"]
#variables = [[[[[[["fast_ma0",,,,"fast_ma1",,,,"slow_ma0",,,,"slow_ma1"]
Variablen = ["fast_ma0",,,,"fast_ma1",,,,"slow_ma0",,,,"slow_ma1",,,,"test_ma0",,,,"test_ma1"]
```

下面的Start Optimization 开始优化章节会提到。

# Start Optimization 开始优化

点start Backtesting（开始回测）
 ![](https://xcy-1251434521.cos.ap-chengdu.myqcloud.com/picture/20240911img.png?imageSlim) 


我们想要看看
* fast_window，从2到20（步进2），
* slow_window，从20到100（步进10）
* test_window，先不管。

* step:增加步数。例：开始1，结束100，步数为2，那么1,3,5,7

* Brutal force optimization暴力穷举优化：把所有可能都显示一次
* Genetic algorithm optimization遗传算法优化

我们选择Brutal force optimization暴力穷举优化开始跑数据，等待结果出来


 

查看优化结果，点击Optimization Results 优化结果可以看见哪个参数的效果最好。

 ![](https://xcy-1251434521.cos.ap-chengdu.myqcloud.com/picture/202409111556904.png?imageSlim) 


fast_window数据：30
slow_window数据：90

效果最好，亏得最少。只有-17%，本来亏损是64%，进步很大
2
本来





 [回测教程](https://www.vnpy.com/forum/topic/1955-vn-pykuai-su-ru-men-7-li-shi-shu-ju-hui-ce-you-hua) 