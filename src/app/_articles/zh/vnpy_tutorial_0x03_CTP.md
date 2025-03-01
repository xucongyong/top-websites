---
title: VNPY Tutorial 0x03 国内期货CTP
description: VNPY quant tutorial, 国内期货CTP
keywords: VNPY, quant tutorial, 国内期货CTP
date: 2024-09-05
category: "quant" 
---

> 警告：本文由机器翻译生成，可能导致质量不佳或信息有误，请谨慎阅读！


vnpy支持交易：期货、股票、期权、外汇

* 国内期货：上期技术CTP接口
* blockchain：比特币合约BitMEX接口
* 海外市场：盈透证券IB接口
* A股证券：中泰证券XTP接口


 [https://www.simnow.com.cn](https://www.simnow.com.cn) 

* 注册投资者账号




 ![](https://i-blog.csdnimg.cn/blog_migrate/50be935380100076e9994b8d39f3e737.png) 


注册以后获取到investorId和密码

进入主界面后，点击菜单栏的“系统”->“连接CTP”，看到对话框：

 ![](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzV2Fm1Pj4E7Jr1YzFMr3TK8bzjtIefib8vOkbAXRdZpywR8aickfkvU51Q/640?wx_fmt=png) 


- 用户名：SimNow的investorId
- 密码：SimNow的密码
- 经纪商代码：9999
- 交易服务器：180.168.146.187:10101
- 行情服务器：180.168.146.187:10111
- 产品名称：simnow_client_test
- 授权编码：0000000000000000（16个0）
- 产品信息：留空不用填


- 选择1（对应SimNow第一套第二组）
- 交易服务器：180.168.146.187:10101
- 行情服务器：180.168.146.187:10111
- 选择2（对应SimNow第一套第三组）
- 交易服务器：218.202.237.33:10102
- 行情服务器：218.202.237.33:10112
- 选择3（对应SimNow第二套）
- 交易服务器：180.168.146.187:10130
- 行情服务器：180.168.146.187:10131

登录后看见

 ![](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzVSyPWJQED2rgkHhQyqYAQZqGVBxlJaYCia81xMviaCiabvyo3XswFPic4Dw/640?wx_fmt=png) 


# 查看合约

点击菜单栏“帮助”->“查询合约”，或者左侧功能导航栏的导数第二个放大镜按钮，打开合约查询对话框：

 ![](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzVf6gLafyFqgCATlXJCA9eIfoxly5qBOypp44ncpTSwWZKPibuepGamHQ/640?wx_fmt=png) 


点击右上角的查询按钮，显示当前VN Trader内部已连接的交易接口（CTP）的上支持的所有可交易合约。


- 合约代码symbol：该合约在某家交易所的唯一标识
- 交易所代码exchanage：该交易所在VN Trader内的唯一标识
- 本地代码vt_symbol：由合约代码以及交易所代码共同组成，代表该合约在VN Trader内的唯一标识符，需要交易所代码是因为跨交易所的代码可能存在重复，比如000001在上交所代表的是上证指数，在深交所代表的则是平安银行；
- 价格跳动pricetick：意味着交易委托时价格的最小变动单位，如果精度不对则会造成委托失败



# 订阅行情

VN Trader界面左上角的交易组件框中，选择交易所、接口后，在代码框中输入合约代码后回车，即可订阅行情。
当收到最新行情Tick推送时，会显示在下方的深度报价中，Tick推送的最高更新频率是每秒2笔，如果没有变化变则可能1笔推送都没有。
注意国内期货普遍只提供1档买卖价，部分期货公司的上期所和能源交易所品种可以获取到5档买卖价。


 ![](https://xcy-1251434521.cos.ap-chengdu.myqcloud.com/picture/202409051333423.png?imageSlim) 
注意每个交易所的合约命名规则有所区别：
- 中金所CFFEX：字母部分大写，年份数字为2位，举例IF1908
- 上期所SHFE：字母部分小写，年份数字为2位，举例rb1910
- 能源交易所INE：字母部分小写，年份数字为2位，举例sc1910
- 大商所DCE：字母部分小写，年份数字为2位，举例m1911
- 郑商所CZCE：字母部分大写，年份数字为1位，举例TA910

在右上的「行情」中就是订阅的信息。方便后续快速执行手动交易


# 交易下单

知道行情后，进行购买


 ![](https://xcy-1251434521.cos.ap-chengdu.myqcloud.com/picture/202409051355983.png?imageSlim) 

1. 选择交易方向：要买（多）还是要卖（空）
2. 选择交易开平：要开仓还是平仓，对于上期所合约则需要具体选择是平今还是平昨（选错则无法平仓会被拒单）
3. 选择价格类型：CTP接口支持限价、市价、FAK（Fill-and-Kill）、FOK（Fill-or-Kill）四种委托类型，注意SimNow环境不支持市价单！！！
4. 输入价格和数量后，点击“委托”按钮即可发出交易请求


委托请求提交后，则会返回相应的委托回报信息，显示在委托组件中，显示当前这笔委托请求的最新状态：

注意委托组件分为两个：注意委托组件分为两个：

- “活动”：只显示当前处于可撤状态（提交中、未成交、部分成交）的委托信息
- “委托”：显示所有的委托信息（包括可撤委托）

对于处于可撤状态的委托
 **** 双击该笔委托的单元格来**实现撤单的功能（鼠标放置其上时会有文字提示）。
* 交易组件上的单击 **“全撤”按钮**，来实现一键全撤VN Trader内当前所有可撤委托。



## 资金持仓

委托成交后，CTP账户的资金情况将会发生变化，可用资金将会减少，同时整体余额将基于“逐日盯市”的规则变动。

 ![](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzVQEElpDItOibTooDWecQQvNQheNdz4tSPvWKHe89K84Fd6gicqGibpRXKA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 


VN Trader中底部中间的资金监控组件的数据，默认以每6秒一次的频率查询刷新，所以某一时间点你看到数据可能并非最新情况。


 ![](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzVyKXqiaTRHa88fP7PicS2kGvBkyD8icJmItHy4WrPdlIasZtEibKkf4T3ZA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 



# 实盘交易

  

当你已经对SimNow的仿真测试环境足够熟悉后，可能已经做好了使用CTP柜台进行实盘交易的准备。

对于CTP实盘交易：对于CTP实盘交易：

- 用户名和密码，就是你开户后直接拿到的信息
- 经纪商编号和交易行情服务器地址，可以联系你的客户经理获取
- 产品名称和授权编码，则需要完成穿透式认证获取了
