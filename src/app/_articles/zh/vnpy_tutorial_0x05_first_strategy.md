---
title: VNPY tutorial 0x05 first strategy
description: VNPY quant tutorial, first strategy
keywords: VNPY, quant tutorial, first strategy
date: 2024-09-05
category: "quant" 
---

> 警告：本文由机器翻译生成，可能导致质量不佳或信息有误，请谨慎阅读！



《笨方法学Python3》（Learn Python the Hard Way），也是我自己多年前从完全0基础的小白第一次学习Python的敲门砖，50多堂课从头到尾敲一遍，只要不偷懒包敲包会，不会来找我。


策略代码放在
* mac:/Users/<USERNAME>/strategies/HackStrategy.py
* windows:google下



```python
from vnpy_ctastrategy import (
    CtaTemplate,
    StopOrder,
    TickData,
    BarData,
    TradeData,
    OrderData,
    BarGenerator,
    ArrayManager,
)

class HackStrategy(CtaTemplate):
     ""  "演示用的简单双均线"  "" 

    # 策略作者
    author = "Smart Trader" 

    # 定义参数
    fast_window = 10
    slow_window = 20

    # 定义变量
    fast_ma0 = 0.0
    fast_ma1 = 0.0
    slow_ma0 = 0.0
    slow_ma1 = 0.0

    # 添加参数和变量名到对应的列表
    parameters = ["fast_window", "slow_window"]
    variables = ["fast_ma0", "fast_ma1", "slow_ma0", "slow_ma1"]

    def __init__(self, cta_engine, strategy_name, vt_symbol, setting):
         ""  ""  "" 
        super().__init__(cta_engine, strategy_name, vt_symbol, setting)

        # K线合成器：从Tick合成分钟K线用
        self.bg = BarGenerator(self.on_bar)

        # 时间序列容器：计算技术指标用
        self.am = ArrayManager()

    def on_init(self):
         """
        当策略被初始化时调用该函数。
         """
        # 输出个日志信息，下同
        self.write_log("策略初始化")

        # 加载10天的历史数据用于初始化回放
        self.load_bar(10)

    def on_start(self):
         """
        当策略被启动时调用该函数。
         """
        self.write_log("策略启动")

        # 通知图形界面更新（策略最新状态）
        # 不调用该函数则界面不会变化
        self.put_event()

    def on_stop(self):
         """
        当策略被停止时调用该函数。
         """
        self.write_log("策略停止")

        self.put_event()

    def on_tick(self, tick: TickData):
         """
        通过该函数收到Tick推送。
         """
        self.bg.update_tick(tick)

    def on_bar(self, bar: BarData):
         """
        通过该函数收到新的1分钟K线推送。
         """
        am = self.am

        # 更新K线到时间序列容器中
        am.update_bar(bar)

        # 若缓存的K线数量尚不够计算技术指标，则直接返回
        if not am.inited:
            return

        # 计算快速均线
        fast_ma = am.sma(self.fast_window, array=True)
        self.fast_ma0 = fast_ma[-1]     # T时刻数值
        self.fast_ma1 = fast_ma[-2]     # T-1时刻数值

        # 计算慢速均线
        slow_ma = am.sma(self.slow_window, array=True)
        self.slow_ma0 = slow_ma[-1]
        self.slow_ma1 = slow_ma[-2]

        # 判断是否金叉
        cross_over = (self.fast_ma0 > self.slow_ma0 and
                      self.fast_ma1 < self.slow_ma1)

        # 判断是否死叉
        cross_below = (self.fast_ma0 < self.slow_ma0 and
                       self.fast_ma1 > self.slow_ma1)

        # 如果发生了金叉
        if cross_over:
            # 为了保证成交，在K线收盘价上加5发出限价单
            price = bar.close_price + 5

            # 当前无仓位，则直接开多
            if self.pos == 0:
                self.buy(price, 1)
            # 当前持有空头仓位，则先平空，再开多
            elif self.pos < 0:
                self.cover(price, 1)
                self.buy(price, 1)

        # 如果发生了死叉
        elif cross_below:
            price = bar.close_price - 5

            # 当前无仓位，则直接开空
            if self.pos == 0:
                self.short(price, 1)
            # 当前持有空头仓位，则先平多，再开空
            elif self.pos > 0:
                self.sell(price, 1)
                self.short(price, 1)

        self.put_event()

    def on_order(self, order: OrderData):
         """
        通过该函数收到委托状态更新推送。
         """
        pass

    def on_trade(self, trade: TradeData):
         """
        通过该函数收到成交推送。
         """
        # 成交后策略逻辑仓位发生变化，需要通知界面更新。
        self.put_event()

    def on_stop_order(self, stop_order: StopOrder):
         """
        通过该函数收到本地停止单推送。
         """
        pass
```


点击：功能-> ctastrategy，在左上角就可以找到刚才的策略。


# vnpy的策略文件存放位置修改

vnpy的策略文件存放位置：/Users/xucongyong/miniconda3/envs/vnpy_env/lib/python3.10/site-packages/vnpy_ctastrategy/engine.py

```python
def load_strategy_class(self) -> None:
	path1: Path = Path(__file__).parent.joinpath("strategies")
	self.load_strategy_class_from_folder(path1, "vnpy_ctastrategy.strategies")
	path2: Path = Path.cwd().joinpath("strategies")
	self.load_strategy_class_from_folder(path2, "strategies")
	path3: Path = '/Users/xucongyong/newstrategies/'
	self.load_strategy_class_from_folder(path3, "strategies")
```