---
title: VNPY -Tutorial 0x03 Inländische Futures CTP
description: VNPY Quant Tutorial, häusliche Futures CTP
keywords: VNPY, Quant -Tutorial, häusliche Futures CTP
date: 2024-09-05
category: "quant" 
---

> Achtung: Dieser Artikel wurde maschinell übersetzt, was zu schlechter Qualität oder falschen Informationen führen kann, bitte sorgfältig lesen!


VNPY -Support -Transaktionen: Futures, Aktien, Optionen, Devisenbörse

* Inländische Futures: Vorherige Technologie -CTP -Schnittstelle
* Blockchain: Bitcoin -Vertrags -Bitmex -Schnittstelle
* Überseemarkt: Yingyou Securities IB Interface
* A -share Securities: Zhongtai Securities XTP -Schnittstelle


 [https://www.simnow.com.cn](https://www.simnow.com.cn) 

* Registrierter Investorenkonto




 ![](https://i-blog.csdnimg.cn/blog_migrate/50be935380100076e9994b8d39f3e737.png) 


Nach dem Register

Klicken Sie nach Eingabe der Hauptschnittstelle in der Menüleiste auf "System"-> "CTP verbinden", um das Dialogfeld anzuzeigen:

 ![](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzV2Fm1Pj4E7Jr1YzFMr3TK8bzjtIefib8vOkbAXRdZpywR8aickfkvU51Q/640?wx_fmt=png) 


- Benutzername: Simnows InvestoD
- Passwort: Simnows Passwort
- Brokercode: 9999
- Handelsserver: 180.168.146.187: 10101
- Marktserver: 180.168.146.187: 10111
- Produktname: Simnow_Client_test
- Autorisierter Code: 00000000000000 (16 0)
- Produktinformationen: leer gelassen, ohne auszufüllen


- Wählen Sie 1 (entsprechend dem ersten Satz von Simnow))
-The Handelsserver: 180.168.146.187: 10101
-Marcular Server: 180.168.146.187: 10111
- Wählen Sie 2 (entsprechend dem ersten Satz von Simnow))
-The Handelsserver: 218.202.237.33: 10102
-Marcular Server: 218.202.237.33: 10112
- Wählen Sie 3 (entsprechend dem zweiten Satz von Simnow))
-The Handelsserver: 180.168.146.187: 10130
-Catal Server: 180.168.146.187: 10131

Wir sehen uns, nachdem Sie sich angemeldet haben

 ![](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzVSyPWJQED2rgkHhQyqYAQZqGVBxlJaYCia81xMviaCiabvyo3XswFPic4Dw/640?wx_fmt=png) 


# Überprüfen Sie den Vertrag

Klicken Sie auf die Menüleiste "Hilfe"-> "Abfragevertrag" oder die zweite Vergrößerungsspiegelschaltfläche der Leitleistung in der Linksfunktionsnavigationsleiste, und öffnen Sie das Dialogfeld "Vertragsabfrage":

 ![](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzVf6gLafyFqgCATlXJCA9eIfoxly5qBOypp44ncpTSwWZKPibuepGamHQ/640?wx_fmt=png) 


Klicken Sie in der oberen rechten Ecke auf die Schaltfläche Abfrage, um alle Transaktionsverträge anzuzeigen, die von der CTP (Connected Trading Interface (CTP) des aktuellen VN -Händlers) unterstützt werden.


- Vertragscode -Symbol: Die einzige Identifizierung des Vertrags an einer Börse
- Exchange Code Exchange: Das eindeutige Logo im VN -Händler, in dem sich die Transaktion befindet
- Lokaler Code VT_SYMBOL: Es besteht aus dem Vertragscode und dem Austauschcode. Die Shenzhen -Börse ping eine Bank;
- Price Beating Pricetick: Dies bedeutet die Mindestwechseleinheit des Preises, wenn die Transaktionskommission falsch ist.



# Abonnementmarkt

Wählen Sie in der Handelskomponenten -Box in der oberen linken Ecke der VN Trader -Schnittstelle die Austausch- und Schnittstelle aus und geben Sie den Vertragscode in das Code -Feld ein, um zum Markt zurückzukehren, um den Markt zu abonnieren.
Wenn Sie den neuesten Markt -Tick -Push erhalten, wird er im folgenden tiefen Angebot angezeigt.
Beachten Sie, dass inländische Futures im Allgemeinen nur 1 Kauf- und Verkaufspreise bieten.


 ![](https://xcy-1251434521.cos.ap-chengdu.myqcloud.com/picture/202409051333423.png?imageSlim) 
Beachten Sie, dass die Vertragsnamenregeln jeder Börse unterschiedlich sind:
- CFFEX: Teil der Buchstaben, 2 Ziffern des Jahres, ein Beispiel für IF1908
- SHFE In der letzten Periode: Teil des Briefes, die Anzahl der Jahre beträgt 2 Ziffern, ein Beispiel für RB1910
- Energieaustausch INE: Teil der Buchstaben, die Anzahl der Jahre beträgt 2 Ziffern, ein Beispiel für SC1910
- DCE DCE: Teil der Buchstaben, die Anzahl der Jahre ist 2, zum Beispiel M1911
- Zheng Shang Institute CZCE: Teil des Briefes, die Anzahl der Jahre ist 1 Ziffer, zum Beispiel TA910

Auf dem "Markt" rechts sind die Abonnementinformationen die Informationen. Bequem für Follow -up -up führt schnell manuelle Transaktionen aus


# Transaktion einstecken

Kaufen Sie ihn, nachdem Sie den Markt kennen, nachdem Sie ihn kauften


 ![](https://xcy-1251434521.cos.ap-chengdu.myqcloud.com/picture/202409051355983.png?imageSlim) 

1. Wählen Sie eine Transaktionsrichtung: kaufen (mehr) oder verkaufen (leer)
2. Wählen Sie eine Transaktion, um die Wohnung zu öffnen: Um eine Position oder Liquidation zu öffnen, ist die spezifische Auswahl für den Vertrag in der vorherigen Periode flach oder gestern (die falsche Wahl kann nicht abgelehnt werden)
3. Wählen Sie den Preistyp: CTP-Schnittstelle unterstützt vier Provisionstypen: Preislimit, Marktpreis, FAK (FILL-and-KILL), FOK (FILL-OR-KILL). Überschneidung Überschneidung
4. Klicken Sie nach Eingabe des Preises und der Menge auf die Schaltfläche "Ansicht", um eine Transaktionsanforderung auszustellen


Nach der Einreichung des anvertrauten Antrags wird die entsprechende Provisionsrenditen an die beauftragte Komponente zurückgegeben, um den neuesten Stand des aktuellen Antrags der Kommission anzuzeigen:

Beachten Sie, dass die beauftragte Komponente in zwei unterteilt ist: Beachten Sie, dass die anvertraute Komponente in zwei unterteilt ist:

- "Aktivität": Nur die Information der Kommission des aktuellen Auszahlungszustands (eingereicht, Transaktion nicht in der Lage, und teilweise Transaktionen)
- "Provision": Zeigen Sie alle Kommissionsinformationen an (einschließlich Auszahlungskommission)

Für den Auftragsbeauftragten Staat
 **** doppelte die Zelle, die die Zellen kommen, um zu kommen**Die Funktion der Auszahlungsbestellung wird implementiert (es werden Texteingabeaufforderungen erfolgen, wenn die Maus platziert wird).
* Klicken Sie auf die Transaktionskomponente **"Vollständige Auszahlung"** lassen Sie uns die gesamte aktuelle Auszahlungskommission innerhalb des VN -Händlers erkennen.



## Kapitalbestand

Nachdem die Transaktion in Auftrag gegeben wurde, wird sich die Kapitalsituation des CTP -Kontos ändern, und die verfügbaren Mittel werden gleichzeitig reduziert.

 ![](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzVQEElpDItOibTooDWecQQvNQheNdz4tSPvWKHe89K84Fd6gicqGibpRXKA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 


Die Daten der Kapitalüberwachungskomponente im mittleren Boden des VN -Händlers werden mit einer Häufigkeit von 6 Sekunden aktualisiert, sodass Sie feststellen, dass die Daten möglicherweise nicht zu einem bestimmten Zeitpunkt die neuesten sind.


 ![](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzVyKXqiaTRHa88fP7PicS2kGvBkyD8icJmItHy4WrPdlIasZtEibKkf4T3ZA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 



# Echter Handel

  

Wenn Sie bereits mit der Simulationstestumgebung von Simnow vertraut sind, haben Sie möglicherweise den echten Handel bei der Verwendung des CTP -Zählers vorbereitet.

Für CTP Real Trading: Für CTP Real Trading:

- Der Benutzername und das Passwort sind die Informationen, die Sie direkt nach dem Öffnen eines Kontos erhalten
- Die Brokerage -Nummer und der Handelsmarktserveradress können Sie mit Ihrem Kundenmanager kontaktieren, um sie zu erhalten
- Der Produktname und die Autorisierungscodierung müssen die Penetrationszertifizierung abschließen und erhalten
