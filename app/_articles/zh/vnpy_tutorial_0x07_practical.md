---
title: VNPY tutorial 0x07 practical
description: VNPY quant tutorial, practical
keywords: VNPY, quant tutorial, practical
date: 2024-09-05
category: "quant" 
---

> 警告：本文由机器翻译生成，可能导致质量不佳或信息有误，请谨慎阅读！



* “功能”->“CTA策略”
* 左上角选择HackStrategy，然后点增加策略。输入测试最有策略

 ![](https://xcy-1251434521.cos.ap-chengdu.myqcloud.com/picture/202409111616368.png?imageSlim) 

* strategy_name: demo
* vs_symbol（合约代码 + 交易所名称）:00700.SEHK
* fast_window: 30
* slow_window: 90


 ![](https://xcy-1251434521.cos.ap-chengdu.myqcloud.com/picture/202409111619630.png?imageSlim) 

顶部按钮用于控制和管理策略实例，

* 第一行表格显示了策略内部的参数信息
* 第二行表格则显示了策略运行过程中的变量信息（变量名需要写在策略的variables列表中）。

* inited：字段表示当前策略的初始化状态（是否已经完成了历史数据回放），
* trading： 字段表示策略当前是否开始交易。

注意上方显示的所有变量信息，需要在策略中 **调用put_event函数**，界面上才会 **进行数据刷新**。有时用户会发现自己写的策略，无论跑多久这些变量信息都不动，这种情况请检查策略中是否漏掉了对put_event函数的调用。