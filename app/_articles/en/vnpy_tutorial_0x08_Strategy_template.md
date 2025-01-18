---
title: VNPY TUTORIAL 0x08 Strategy Template Tutorial
description: Vnpy Quant Tutorial, Strategy Template Tutorial
keywords: Vnpy, Quant Tutorial, Strategy Template Tutorial
date: 2024-09-05
category: "quant" 
---

> Warning: This page is translated by MACHINE, which may lead to POOR QUALITY or INCORRECT INFORMATION, please read with CAUTION!



* Put the strategic file in/use/<username>/Strategies/
* The naming of the strategy file adopts the lower line mode, such as BOLL_Channel_Strategy.py, and the strategy name uses a hump type, such as Bollchannelstrategy.

For example

```python
from vnpy_ctastrategy import (
    CtaTemplate,
    StopOrder,
    TickData,
    BarData,
    TradeData,
    OrderData,
    BarGenerator,
    ArrayManager
)
```

Among them, CTATEMPlate is a CTA strategy template. Stoporder, TickData, Bardata, Tradedata, and OrderData are all data containers that store corresponding information. Bargenrator is the K -line generating module. ArrayManager is the K -line time sequence management module.

# Strategic parameters and variables

Strategic parameters and variables are required to fill in when running.

```python
    author = "用Python的交易员" 

    boll_window = 18
    boll_dev = 3.4
    cci_window = 10
    atr_window = 30
    sl_multiplier = 5.2
    fixed_size = 1

    boll_up = 0
    boll_down = 0
    cci_value = 0
    atr_value = 0

    intra_trade_high = 0
    intra_trade_low = 0
    long_stop = 0
    short_stop = 0

    parameters = [
         "boll_window",
         "boll_dev",
         "cci_window",
         "atr_window",
         "sl_multiplier",
         "fixed_size" 
    ]
    variables = [
         "boll_up",
         "boll_down",
         "cci_value",
         "atr_value",
         "intra_trade_high",
         "intra_trade_low",
         "long_stop",
         "short_stop" 
    ]
```


# Initialization of class

```python
def __init__(self, cta_engine, strategy_name, vt_symbol, setting):
	 ""  ""  "" 
	super().__init__(cta_engine, strategy_name, vt_symbol, setting)
	self.bg = BarGenerator(self.on_bar, 15, self.on_15min_bar)
	self.am = ArrayManager()
```

Super () inherit the CTA strategy template

__init __ () is introduced into the CTA engine, strategy name, VT_SYMBOL and parameter settings.

Note that the CTA engine can be a real disk engine or a recovery engine, which can be convenient **Realize the same set of code while running back to test and real disk**(The above parameters are automatically introduced by the strategy engine when using the strategic creation strategy, and the user does not need to set it).

2. K -line generate module (Bargenrator): Single Tick data for 1 minute K -line data by section by time.
If only based on on_bar, the code can be written here:

```python
self.bg = BarGenerator(self.on_bar)
```

If there is a need, it can also synthesize longer time cycle data, such as 1 minute K line.
```python
from vnpy.trader.constant import Interval
self.bg = BarGenerator(self.on_bar,1,self.on_15min_bar,Interval.MINUTE)
```

3. Call the K -line time sequence management module (ArrayManager): Based on K -line data, such as 1 minute or 15 minutes, transform it into a time sequence data structure that is convenient for vectorization, and support the use of the Talib library inside to calculate the corresponding ones to calculate the corresponding ones Technical indicators.

```python
self.am = ArrayManager()
```

ArrayManager's default length is 100. If the length of ArrayManager needs to be adjusted, it can be passed into the size parameter for adjustment (SIZE cannot be less than the cycle length of the calculation indicator).

## CTA strategy engine call function

* ON_INIT: Function executed by strategy initialization
You can read the official textbook in front

We say the focus

### on_Tick

```python
def on_tick(self, tick: TickData):
	 """
	Callback of new tick data update.
	 """
	self.bg.update_tick(tick)
```

Most trading systems only provide Tick data push. Even though some platforms can provide K -line data push, these data will be slower than the Tick data push when the local computer reaches the local computer, because the platform is required to be pushed over. Therefore, in the real market, all the strategies of all strategies in velhna are synthesized by the received Tick data.

When the strategy receives the latest Tick data market push, the ON_TICK function is called. The default writing is to push the received Tick data in the previous BG instance created by the BGTICK function to synthesize the K -line below by pushing the receiving Tick data. As shown in the code below:

### on_bar

- Payment: Bar: Bardata
- Payment: None
    

When the strategy receives the latest K -line data (the default pushing in in the real market is a one -minute K -line based on TICK synthesis, and when the test is relying on the K -line data frequency when selecting the parameter), the on_bar function will be Will be called. There are two ways to write in the example strategy:

1. If the strategy is based on the K -line transaction pushed in on_bar, then please write the transaction request function to the on_bar function (because the example strategy class Bollchanenelstrategy is not based on on_bar transaction, so there is no example explanation. You can refer to other example strategies);

2. If the strategy needs to be traded based on the K -line of the long time cycle based on the K -line data pushed in on_bar, then please call the Bargenerator's Update_bar function in the on_bar to push the received BAR in the BG instance created earlier. That's it, as shown in the following code:

```python
def on_bar(self, bar: BarData):
	 """
	Callback of new bar data update.
	 """
	self.bg.update_bar(bar)
```

### on_15min_bar

The example strategy class Bollchannelstrategy generates a CTA signal by 15 minutes of K -line data returns. There are three parts in total, as shown in the following code:

```python
def on_15min_bar(self, bar: BarData):
	 ""  ""  "" 
	self.cancel_all()
	am = self.am
	am.update_bar(bar)
	if not am.inited:
		return
	self.boll_up, self.boll_down = am.boll(self.boll_window, self.boll_dev)
	self.cci_value = am.cci(self.cci_window)
	self.atr_value = am.atr(self.atr_window)

	if self.pos == 0:
		self.intra_trade_high = bar.high_price
		self.intra_trade_low = bar.low_price
		if self.cci_value > 0:
			self.buy(self.boll_up, self.fixed_size, True)
		elif self.cci_value < 0:
			self.short(self.boll_down, self.fixed_size, True)
	elif self.pos > 0:
		self.intra_trade_high = max(self.intra_trade_high, bar.high_price)
		self.intra_trade_low = bar.low_price
		self.long_stop = self.intra_trade_high - self.atr_value * self.sl_multiplier
		self.sell(self.long_stop, abs(self.pos), True)
	elif self.pos < 0:
		self.intra_trade_high = bar.high_price
		self.intra_trade_low = min(self.intra_trade_low, bar.low_price)
		self.short_stop = self.intra_trade_low + self.atr_value * self.sl_multiplier
		self.cover(self.short_stop, abs(self.pos), True)
	self.put_event()
```
- Self.cancel_all () Clear the non -transaction commission: In order to prevent the previous list from not being traded in the previous 15 minutes, but the price may have been adjusted in the next 15 minutes, and the Cancel_all () method is immediately revoked immediately. The entire state of the guarantee strategy at the beginning of the current 15 minutes is clear and unique;
    
- Calculate the K -line time sequence management module: Calculate the corresponding technical indicators based on the latest 15 -minute K -line data, such as the upper and lower rails of the Bollinger Channel, the CCI indicator, and the ATR indicator. First obtain the ArrayManager object, then push the received K -line in, check the initialization of ArrayManager. If it is successful before the initialization is successful, it is not necessary to go to subsequent transaction -related logic judgments. Because many technical indicators are required for the minimum number of K -line, if the number is not enough, the indicator calculated will occur errors or meaningless. Conversely, if there is no RETURN, you can start calculating technical indicators;
    
- Signal calculation: Through the judgment of the position and the combination of the CCI indicator, the Bollinger channel, and the ATR index at the channel breakthrough point, the stop -to -single commission (Buy/Sell) is set at the same time.
    
Please note that if you need to refresh the index value in the graphical interface, do not forget to call the PUT_EVENT () function.

### Active function

* Buy: Buy Direction: Long, OFFSET: Open)
* Sell: Direction: SHORT, Offset: CLOSE)
* SHORT: Direction: SHORT, Offset: Open)
* Cover: Buy Direction: Long, Offset: CLOSE)

### put_event
- Payment: None
- Payment: None

Call the Put_Event function in the strategy to notify the graphical interface to refresh the strategic display.
Please note that after the strategy is initialized, the Inited state becomes [true] before it can refresh the interface.


# Quote

* https://www.vnpy.com/docs/cn/community/app/cta_strategy.html