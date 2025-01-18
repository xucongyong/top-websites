---
title: VNPY tutorial 0x04 IB
description: VNPY quant tutorial, IB
keywords: VNPY, quant tutorial, IB
date: 2024-09-05
category: "quant" 
---

> 警告：本文由机器翻译生成，可能导致质量不佳或信息有误，请谨慎阅读！


IB，全称Interactive Brokers，中文名盈透证券，是全球公认第一的全品种零售经纪商，提供的金融品种包括：


- 股票：美股、港股、欧股、A股（沪港通）等
- 期货：CME、LME、HKFE、SGX等（没有国内期货）
- 期权：上述股票和期货交易所的所有期权品种
- 固收：常规交易所的债券以及非常规银行间的债券（打电话）
- 外汇：纯ECN交易模式的杠杆外汇（银行间做市商）
- 贵金属现货：和外汇一样的银行间杠杆市场

加上已有十多年历史早已成为行业标准的交易接口IB API，基本上说起外盘交易通道，IB就是当仁不让的第一选择了。
但需要额外强调的是，针对某些特定的交易市场或者需求，IB未必是最终的最优选择，但一定是最方便的。


和其他接口不同的是，IB一共有三套账户体系：

- Live Trading：实盘账户
- Paper Trading：仿真账户
- Demo Trading：演示账户

## 前往IB官网下载TWS

https://www.interactivebrokers.com/en/index.php?f=14099#tws-software


安装后启动，看到以下界面：

  

 ![图片](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblDvicMZAqhN2Dz9LweMqfxJFYSYqX3icYVdia7N3frBENCJI62YYepItia3mUAakoJXvYQThJibbRjYZ2w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

点击底部的“Return to the demo”按钮，打开演示账户测试界面：

  

 ![图片](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblDvicMZAqhN2Dz9LweMqfxJFaw1nYLQLHyibyGcJuCdY2fMiauOMkBlwQtbUTPMicgWibNlAvNuYiczPeHw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

输入邮箱地址后，点击“Try Demo”按钮，即可登录进入演示账户的TWS界面：

  

 ![图片](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblDvicMZAqhN2Dz9LweMqfxJFoo3KA9iaO5THUxiaGdftaEXZ3Ems53eAHXYhmrtdSviaB49bNJQ93QkKQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

点击右上角的齿轮图标（从右往左导数第五个），打开TWS配置对话框，在General页面，将“Current Language”设为English后，关闭并重启TWS。

  

 ![图片](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLGAXLNAnBf2Tz9jXWR8CDh4HWHBxM0mlCMLR73fREN0jRJPrIxSuQtQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

然后进入到“API”->“Settings”来进行API接入相关的配置：

  

1. 勾选“Enable ActiveX and Socket Clients”，允许外部程序接入TWS；
    
2. 勾选“Download open orders on connection”，在外部程序连上TWS时获取所有未成交委托信息；
    
3. 记录你的端口号“Socket Port”（我这里是7497），将用于后续从VN Trader发起到TWS的连接；
    
4. 点击“OK”按钮，保存配置



# 接口登录

  

和其他大多数API接口直连经纪商服务器的模式不同，IB接口连接的是位于本地的交易客户端TWS，再由TWS负责连接到IB的服务器，因此在启动VN Trader前需要先启动TWS完成账户登录。

  

接下来照着入门1中的方法，启动VN Trader Pro，只加载“盈透证券”接口。

  

进入主界面后，点击菜单栏的“系统”->“连接IB”，看到对话框：

  

 ![图片](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblDvicMZAqhN2Dz9LweMqfxJFiaXaznoyzCxicS5bNTricO1IUlzwkxkeO1h1V679g2SsrODoRjYMremAQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

各个字段的填写如下：

  

- TWS地址：127.0.0.1（本机IP地址）
- TWS端口：7497（之前步骤）
- 客户号：填写1即可（除非你有多个进程连接TWS）


需要强调的是，和CTP等其他API从本地交易程序直连远端服务器的模式不同，IB API的连接是从本地交易程序（如VN Trader），到本地的客户端TWS，背后由TWS负责维护从本地到IB服务器的连接。

  
以上都填好后，点击“连接”按钮开始登录CTP服务器以及相关初始化操作，在右下角的日志监控组件中，可以看到初始化相关的日志信息输出：


 ![图片](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblDvicMZAqhN2Dz9LweMqfxJFJmVHCHrAsQudXnaQB30V9MH3xibnQGhSgS788n8pbU5iaU65eTqGWbrg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

登录初始化过程中有任何异常情况，日志信息中都会看到相应的文字输出，可以根据内容自行排查。看到“服务器时间”这条日志后，说明已经成功完成了初始化操作。

  

后续依旧会有一系列的信息通知，这些主要和IB账户相关的数据权限配置有关（说白了就是告诉你那些实时行情你没花钱买，现在获取不到），Demo Trading没有特别好的解决办法，推荐还是入金后申请Paper Trading。

  

  

 **查看合约** 

  

由于盈透证券支持的交易所以及合约资源实在太多，IB API无法提供和CTP接口类似的全合约查询功能。用户需要前往盈透证券的官方网站，在其交易产品列表页面，自行寻找相关的合约信息：

 [interactivebrokers智能合约](https://www.interactivebrokers.com.hk/cn/index.php) 

  

注意在VN Trader中，针对IB接口所使用的交易合约代码，是该合约在IB系统内的唯一标识符Conid，全称Contract Identifier，注意Conid为一串纯数字，不要和Symbol或者Description Name搞混。

  
  

 **订阅行情** 

  

在上一步中找到自己想要订阅行情的合约信息后，则可以在VN Trader界面左上角的交易组件框中，选择交易所、接口后，在代码框中输入合约代码后回车，即可订阅行情。

  

当收到最新行情Tick推送时，会显示在下方的深度报价中，IB接口的Tick推送的最高更新频率是每秒4笔。
当收到最新行情Tick推送时，会显示在下方的深度报价中，IB接口的Tick推送的最高更新频率是每秒4笔。
  

 ![图片](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzVqoiawRYv672zibLmib0NRW3sklZ7icrDlOYfh80z1H8uCZN8blKtticACJg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

订阅行情后，IB接口也会自动查询该合约的相关信息，此时再打开“帮助”->“合约查询”组件，即可看到该合约：

  

 ![图片](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLW11iaZz4Oabib8gIdkfPe5U2h1kOM3D0ic6LTpia6G92bo9VCUTSRk1U3g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

所有已订阅的行情信息，都会显示在右侧顶部的行情监控组件中，方便后续快速执行手动交易：

  

 ![图片](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlL11Lbyrfdd1MwbYE642g8JNqALqJUVh3qqoHlCfW3u3bOXWjJrQedHg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

需要注意IB上的行情数据，除少量免费提供外（外汇、贵金属），其他大部分都需要在IB官网的后台管理系统中付费购买后，才能在VN Trader中订阅使用。如果行情订阅失败（Conid填错、没有购买等），在左下角的日志组件中也会有相应的内容输出，方便排查。

  

  

 **交易下单** 

  

知道最新行情的价格在哪里后，就可以进行买卖下单：

  

 ![图片](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLIpI9zYU0CYIh6hnCCTA6Z6rPMEqlQK7arlBiagicwnP6t9KJLQlmFuXg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

1. 选择交易方向：要买（多）还是要卖（空）
    
2. 开平留空不用选
    
3. 选择价格类型：IB接口支持限价、市价
    
4. 输入价格和数量后，点击“委托”按钮即可发出交易请求
    

  

  

 **委托成交** 

  

委托请求提交后，则会返回相应的委托回报信息，显示在委托组件中，显示当前这笔委托请求的最新状态：

  

 ![图片](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLCEl4UuFx5NbNL1Sdicz4olDwv71eQ5sKGfqyMztgQE5h2EC6w92of0w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

  

注意委托组件分为两个：

  

- “活动”：只显示当前处于可撤状态（提交中、未成交、部分成交）的委托信息
    
- “委托”：显示所有的委托信息（包括可撤委托）
    

  

两个组件中，对于处于可撤状态的委托，均可 **双击该笔委托的单元格来** 实现撤单的功能（鼠标放置其上时会有文字提示）。或者也可以通过交易组件上的单击 **“全撤”按钮**，来实现一键全撤VN Trader内当前所有可撤委托。

  

 ![图片](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLfIJnOLibE1UlfMef0gS0uDwxOaJMb4QrB3ian7FHmmBKrjfjAcKj7qicA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

  

当委托发生成交后，VN Trader会收到成交推送的数据，并显示在成交监控组件中，用户可以通过每笔成交的委托号来实现和对应委托的映射。注意在实盘中，每笔委托可能和多笔反向来自其他投资者的委托发生成交，即一笔委托对应有多笔成交记录。

  

 **资金持仓** 

  

委托成交后，账户的资金情况将会发生变化，IB针对每个币种的资金提供独立的账号，可以通过账号名后缀来判断，注意其中的BASE是你的IB账户的基础币种账号。

  

 ![图片](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLdPzW39F4gibPyPbReKO4KGVjv5O9TVTwGbkOsEK3aFTS2EX2t7JENRQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

IB接口提供实时推送更新的资金和持仓数据，在持仓方向上也采取净仓模式来计算：

  

 ![图片](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLdmmqLKOuFM3jYuajg0lKKtQY6RZjhOWOX1pw6C3fMTBOV6CcdjgbiaQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

  

 **实盘交易** 

  

当你已经对IB的Demo Trading测试环境足够熟悉后，可以开始用Paper Trading来进行仿真交易，或者使用Live Trading进行实盘交易，只需要在TWS登录的时候选择对应的账号即可。

  

除了TWS外，IB针对API交易还提供了一套更加轻量级的客户端IB Gateway，只有最简单的GUI界面用于显示日志，在资源占用和延时性能方面更有优势。


