---
title: VNPY Tutorial 0x07 Praktisch
description: VNPY Quant Tutorial, praktisch
keywords: VNPY, Quant Tutorial, praktisch
date: 2024-09-05
category: "quant" 
---

> Achtung: Dieser Artikel wurde maschinell übersetzt, was zu schlechter Qualität oder falschen Informationen führen kann, bitte sorgfältig lesen!



* "Funktion"-> "CTA-Strategie" 
* Wählen Sie Hackstrategy in der oberen linken Ecke und klicken Sie dann, um die Strategie zu erhöhen. Eingabetests die strategischsten

 ![](https://xcy-1251434521.cos.ap-chengdu.myqcloud.com/picture/202409111616368.png?imageSlim) 

* Strategy_Name: Demo
* VS_SYMBOL (Vertragscode + Austauschname): 00700.sehk
* Fast_window: 30
* Slow_window: 90


 ![](https://xcy-1251434521.cos.ap-chengdu.myqcloud.com/picture/202409111619630.png?imageSlim) 

Die obere Taste wird verwendet, um die Strategieinstanz zu steuern und zu verwalten.

* Das erste Zeilenformular zeigt die Parameterinformationen innerhalb der Strategie
* Das zweite Zeilenformular zeigt variable Informationen während des Strategievorgangs (Variablennamen müssen in die Variablenliste der Strategie geschrieben werden).

* Inited: Felder repräsentieren die Initialisierung der aktuellen Strategie (ob die historischen Daten veröffentlicht werden).
* Handel: Die Felder repräsentieren, ob Strategien mit dem Handel beginnen.

Beachten Sie alle oben angezeigten variablen Informationen, Sie müssen in der Strategie sein **Rufen Sie die Funktion put_event auf** nur auf der Schnittstelle **Aktualisieren Sie die Daten**.Manchmal finden Benutzer ihre eigenen Strategien.