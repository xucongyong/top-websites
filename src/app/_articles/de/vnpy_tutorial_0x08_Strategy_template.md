---
title: VNPY Tutorial 0x08 Strategievorlage Tutorial
description: VNPY Quant Tutorial, Strategievorlage Tutorial
keywords: VNPY, Quant Tutorial, Strategy Template Tutorial
date: 2024-09-05
category: "quant" 
---

> Achtung: Dieser Artikel wurde maschinell übersetzt, was zu schlechter Qualität oder falschen Informationen führen kann, bitte sorgfältig lesen!



* Setzen Sie die strategische Datei in/use/<userername>/Strategies/ein
* Die Benennung der Strategiedatei nimmt den unteren Zeilenmodus an, z.

Zum Beispiel

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

Unter ihnen ist Ctatemplate eine CTA -Strategie -Vorlage, Tickdata, Bardata, Tradedata und OrderData sind alle Datencontainer, die entsprechende Informationen speichern.

# Strategische Parameter und Variablen

Strategische Parameter und Variablen müssen beim Ausführen ausfüllen.

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


# Initialisierung der Klasse

```python
def __init__(self, cta_engine, strategy_name, vt_symbol, setting):
	 ""  ""  "" 
	super().__init__(cta_engine, strategy_name, vt_symbol, setting)
	self.bg = BarGenerator(self.on_bar, 15, self.on_15min_bar)
	self.am = ArrayManager()
```

Super () Erben Sie die CTA -Strategievorlage

__init __ () wird in die Einstellungen für CTA -Engine, Strategie, VT_Symbol und Parameter eingeführt.

Beachten Sie, dass der CTA -Motor ein echter Festplattenmotor oder ein Wiederherstellungsmotor sein kann, der bequem sein kann **Erkennen Sie den gleichen Code -Satz, während Sie zurück rennen, um zu testen und realer Festplatten zu testen**(Die oben genannten Parameter werden automatisch von der Strategie -Engine eingeführt, wenn die Strategie der strategischen Erstellung verwendet wird, und der Benutzer muss sie nicht festlegen.)

2. k -line generieren Modul (Bargenrator): Einzel -Tick -Daten für 1 Minute k -Line -Daten nach Abschnitt nach Zeit.
Wenn nur auf ON_BAR basiert, kann der Code hier geschrieben werden:

```python
self.bg = BarGenerator(self.on_bar)
```

Bei Bedarf kann es auch längere Zeitzyklusdaten synthetisieren, z. B. 1 Minute K -Linie.
```python
from vnpy.trader.constant import Interval
self.bg = BarGenerator(self.on_bar,1,self.on_15min_bar,Interval.MINUTE)
```

3. Rufen Sie das K -Line -Zeitsequenzverwaltungsmodul auf (ArrayManager): Basierend auf K -Line -Daten, z. B. 1 Minute oder 15 Minuten, verwandeln Die Talib -Bibliothek innen, um die entsprechenden zu berechnen, um die entsprechenden technischen Indikatoren zu berechnen.

```python
self.am = ArrayManager()
```

Die Standardlänge von ArrayManager beträgt 100. Wenn die Länge von ArrayManager angepasst werden muss, kann sie zur Einstellung in den Größenparameter übergeben werden (die Größe kann nicht geringer sein als die Zykluslänge des Berechnungsindikators).

## CTA Strategy Engine Call -Funktion

* On_init: Funktion, die durch Strategieinitialisierung ausgeführt wird
Sie können das offizielle Lehrbuch vor dem Vorgang lesen

Wir sagen den Fokus

### on_tick

```python
def on_tick(self, tick: TickData):
	 """
	Callback of new tick data update.
	 """
	self.bg.update_tick(tick)
```

Die meisten Handelssysteme bieten nur Zeckendatenschub. Obwohl einige Plattformen K -Line -Daten -Push bereitstellen können, sind diese Daten langsamer als der Tick -Daten, wenn der lokale Computer den lokalen Computer erreicht, da die Plattform gedrückt werden muss. Daher werden auf dem realen Markt alle Strategien aller Strategien in Velhna durch die empfangenen Zeckendaten synthetisiert.

Wenn die Strategie den neuesten Tick -Datenmarkt -Push erhält, wird die On_Tick -Funktion aufgerufen. Das Standardschreiben besteht darin, die empfangenen Tick -Daten in der vorherigen BG -Instanz zu verschieben, die von der BGTick -Funktion erstellt wurde, um die folgende K -Linie zu synthetisieren, indem die empfangenden Zeckendaten wie im folgenden Code angezeigt werden:

### On_Bar

- Zahlung: Bar: Bardata
- Zahlung: Keine
    

Wenn die Strategie die neuesten K -Line -Daten erhält (der standardmäßige Drücken auf dem realen Markt ist eine Ein -Minute -K -Linie, die auf der Tick -Synthese basiert, und wenn der Test bei der Auswahl des Parameters auf die K -Line -Datenfrequenz beruht) Die On_Bar -Funktion wird aufgerufen. Es gibt zwei Möglichkeiten, in der Beispielstrategie zu schreiben:

1. Wenn die Strategie auf der k -line -Transaktion in On_Bar basiert, schreiben Sie die Funktion der Transaktionsanforderung in die Funktion ONT_BAR (da die Beispielstrategieklasse BollchanenelStrategy nicht auf der On_Bar -Transaktion basiert, daher gibt es keine Beispielerklärung. kann sich auf andere Beispielstrategien beziehen);

2. Wenn die Strategie basierend auf der K -Linie des langen Zeitzyklus basierend auf den K -Linien -Daten in ON_BAR gehandelt werden muss früher erstellt.

```python
def on_bar(self, bar: BarData):
	 """
	Callback of new bar data update.
	 """
	self.bg.update_bar(bar)
```

### On_15Min_Bar

Die Beispielstrategieklasse BollchannelStrategy erzeugt ein CTA -Signal um 15 Minuten k -Linien -Datenrenditen. Insgesamt gibt es insgesamt drei Teile, wie im folgenden Code gezeigt:

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
- Self.cancel_all () Löschen Sie die Nichttransaktionskommission: Um zu verhindern, dass die vorherige Liste in den vorherigen 15 Minuten nicht gehandelt wird, wurde der Preis möglicherweise in den nächsten 15 Minuten angepasst, und die methode cancel_all () ist sofort sofort widerrufen.
    
- Berechnen Sie das K -Line -Zeitsequenzverwaltungsmodul: Berechnen Sie die entsprechenden technischen Indikatoren basierend auf den neuesten 15 -minütigen K -Line -Daten, wie z. Erhalten Sie zunächst das ArrayManager -Objekt und prüfen Sie die empfangene K -Linie in die Initialisierung von ArrayManager. Da für die minimale Anzahl von k -Linie viele technische Indikatoren erforderlich sind, tritt die berechnete Anzeige auf Fehler oder bedeutungslos auf. Umgekehrt können Sie, wenn es keine Rückgabe gibt, technische Indikatoren berechnen.
    
- Signalberechnung: Durch das Urteil der Position und die Kombination des CCI -Indikators, des Bollinger -Kanals und des ATR -Index am Kanal -Durchbruch ist die Stop -to -Single -Kommission (Kaufen/Verkauf) zur gleichen Zeit festgelegt.
    
Bitte beachten Sie, dass, wenn Sie den Indexwert in der grafischen Schnittstelle aktualisieren müssen, nicht vergessen, die Funktion put_event () aufzurufen.

### Aktive Funktion

* Kaufen: Kaufen Sie Richtung: Lang, Offset: Open)
* Verkauf: Richtung: Kurz, Offset: Close)
* Kurz: Richtung: Kurz, Offset: Öffnen)
* Deckung: Kaufen Sie Richtung: Lang, Offset: Close)

### put_event
- Zahlung: Keine
- Zahlung: Keine

Rufen Sie die Funktion put_event in der Strategie auf, um die grafische Schnittstelle zu informieren, um die strategische Anzeige zu aktualisieren.
Bitte beachten Sie, dass nach der Initialisierung der Strategie der initierte Zustand [wahr] wird, bevor er die Schnittstelle aktualisieren kann.


# Zitat

* https://www.vnpy.com/docs/cn/community/app/cta_strategy.html