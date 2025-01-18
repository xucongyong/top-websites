---
title: VNPY tutorial 0x08 Strategy template tutorial
description: VNPY quant tutorial, Strategy template tutorial
keywords: VNPY, quant tutorial, Strategy template tutorial
date: 2024-09-05
category: "quant" 
---

> 警告：本文由机器翻译生成，可能导致质量不佳或信息有误，请谨慎阅读！



* 策略文件放在 /users/<username>/strategies/
* 策略文件命名采用下划线模式，如boll_channel_strategy.py，而策略类命名采用驼峰式，如BollChannelStrategy。

已BollChannelStrategy策略为例子

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

其中，CtaTemplate是CTA策略模板，StopOrder、TickData、BarData、TradeData和OrderData都是储存对应信息的数据容器，BarGenerator是K线生成模块，ArrayManager是K线时间序列管理模块。

# 策略参数与变量

策略参数与变量在运行的时候会要求你填写。

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


# 类的初始化

```python
def __init__(self, cta_engine, strategy_name, vt_symbol, setting):
	 ""  ""  "" 
	super().__init__(cta_engine, strategy_name, vt_symbol, setting)
	self.bg = BarGenerator(self.on_bar, 15, self.on_15min_bar)
	self.am = ArrayManager()
```

super( )继承CTA策略模板

__init__( )传入CTA引擎、策略名称、vt_symbol和参数设置。

注意其中的CTA引擎，可以是实盘引擎或者回测引擎，这样可以方便地 **实现同一套代码同时跑回测和实盘** （以上参数均由策略引擎在使用策略类创建策略实例时自动传入，用户无需进行设置）。

2 . K线生成模块（BarGenerator）：按时间切片将Tick数据合成1分钟K线数据。
如果只基于on_bar进行交易，这里代码可以写成：

```python
self.bg = BarGenerator(self.on_bar)
```

如有需求，还可合成更长的时间周期数据，如1分钟K线。
```python
from vnpy.trader.constant import Interval
self.bg = BarGenerator(self.on_bar,1,self.on_15min_bar,Interval.MINUTE)
```

3 . 调用K线时间序列管理模块（ArrayManager）：基于K线数据，如1分钟、15分钟， 将其转化为便于向量化计算的时间序列数据结构，并在内部支持使用talib库来计算相应的技术指标。

```python
self.am = ArrayManager()
```

ArrayManager的默认长度为100，如需调整ArrayManager的长度，可传入size参数进行调整（size不能小于计算指标的周期长度）。

## CTA策略引擎调用的函数

* on_init:策略初始化执行的function
前面的你都可以看官方教材

我们说重点

### on_tick

```python
def on_tick(self, tick: TickData):
	 """
	Callback of new tick data update.
	 """
	self.bg.update_tick(tick)
```

绝大部分交易系统都只提供Tick数据的推送。即使一部分平台可以提供K线数据的推送，但是这些数据到达本地电脑的速度也会慢于Tick数据的推送，因为也需要平台合成之后才能推送过来。所以实盘的时候，VeighNa里所有的策略的K线都是由收到的Tick数据合成的。

当策略收到最新的Tick数据的行情推送时，on_tick函数会被调用。默认写法是通过BarGenerator的update_tick函数把收到的Tick数据推进前面创建的bg实例中以便合成1分钟的K线，如下方代码所示：

### on_bar

- 入参：bar: BarData
- 出参：无
    

当策略收到最新的K线数据时（实盘时默认推进来的是基于Tick合成的一分钟的K线，回测时则取决于选择参数时填入的K线数据频率），on_bar函数就会被调用。示例策略里出现过的写法有两种：

1 . 如果策略基于on_bar推进来的K线交易，那么请把交易请求类函数都写在on_bar函数下（因本次示例策略类BollChannelStrategy不是基于on_bar交易，故不作示例讲解。基于on_bar交易的示例代码可参考其他示例策略）；

2 . 如果策略需要基于on_bar推进来的K线数据通过BarGenerator合成更长时间周期的K线来交易，那么请在on_bar中调用BarGenerator的update_bar函数，把收到的这个bar推进前面创建的bg实例中即可，如下方代码所示：

```python
def on_bar(self, bar: BarData):
	 """
	Callback of new bar data update.
	 """
	self.bg.update_bar(bar)
```

### on_15min_bar

示例策略类BollChannelStrategy是通过15分钟K线数据回报来生成CTA信号的。一共有三部分，如下方代码所示：

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
- self.cancel_all()清空未成交委托：为了防止之前下的单子在上一个15分钟没有成交，但是下一个15分钟可能已经调整了价格，就用cancel_all()方法立刻撤销之前未成交的所有委托，保证策略在当前这15分钟开始时的整个状态是清晰和唯一的；
    
- 调用K线时间序列管理模块：基于最新的15分钟K线数据来计算相应的技术指标，如布林带通道上下轨、CCI指标、ATR指标等。首先获取ArrayManager对象，然后将收到的K线推送进去，检查ArrayManager的初始化状态，如果还没初始化成功就直接返回，没有必要去进行后续的交易相关的逻辑判断。因为很多技术指标计算对最少K线数量有要求，如果数量不够的话计算出来的指标会出现错误或无意义。反之，如果没有return，就可以开始计算技术指标了；
    
- 信号计算：通过持仓的判断以及结合CCI指标、布林带通道、ATR指标在通道突破点挂出停止单委托（buy/sell)，同时设置离场点(short/cover)。
    
请注意，如果需要在图形界面刷新指标数值，请不要忘记调用put_event()函数。

### 主动函数

* buy：买入开仓（Direction：LONG，Offset：OPEN）
* sell：卖出平仓（Direction：SHORT，Offset：CLOSE）
* short：卖出开仓（Direction：SHORT，Offset：OPEN）
* cover：买入平仓（Direction：LONG，Offset：CLOSE）

### put_event
- 入参：无
- 出参：无

在策略中调用put_event函数，可以通知图形界面刷新策略状态相关显示。
请注意，要策略初始化完成，inited状态变为【True】之后，才能刷新界面。


# 引用

* https://www.vnpy.com/docs/cn/community/app/cta_strategy.html