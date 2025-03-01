---
title: VNPY Tutorial 0x04 ib
description: Vnpy quant tutorial, ib
keywords: VNPY, Quant Tutorial, ib
date: 2024-09-05
category: "quant" 
---

> Achtung: Dieser Artikel wurde maschinell übersetzt, was zu schlechter Qualität oder falschen Informationen führen kann, bitte sorgfältig lesen!


IB, der vollständige Name der Internet -Broker, ein chinesischer Namen, ist ein globaler anerkannter Einzelhandelsmakler.


- Aktien: US -Aktien, Hongkong -Aktien, europäische Aktien, A -Aktien (Shanghai -Hong Kong -Aktienanschluss) usw.
- Futures: CME, LME, HKFE, SGX usw. (Keine Haushaltsfutures)
- Optionen: Alle Optionen der oben genannten Aktien und Futures -Börsen
- Solides Einkommen: Anleihen konventioneller Börsen und Anleihen zwischen unkonventionellen Banken (Call)
- Devisenaustausch: Nutzen Sie den Devisen des reinen ECN -Handelsmodells (Banken in Banken)
- Edelmetallspot: Der gleiche Markt für Inter -Bank -Hebel wie Devisen

In Verbindung mit den mehr als zehn Jahren der Geschichte wird die IB -API, die bereits zu einer Standard -Handelsschnittstelle in der Branche geworden ist, im Grunde genommen über Außenhandelskanäle die erste Wahl, die nicht zulässig ist.
Es ist jedoch wichtig zu betonen, dass IB nicht unbedingt die ultimative optimale Wahl für bestimmte spezifische Handelsmärkte oder -bedürfnisse ist, aber es muss die bequemste sein.


Im Gegensatz zu anderen Schnittstellen verfügt IB über drei Kontosysteme:

- Live -Handel: Reales Kontokonto
- Papierhandel: Simulationskonto
- Demohandel: Demonstrationskonto

## Gehen Sie auf der offiziellen IB -Website, um TWS herunterzuladen

https://www.interactiveBrokers.com/en/index.php?f=14099#TWS-Software


Beginnen Sie nach der Installation und sehen Sie sich die folgende Schnittstelle an:

  

 ![Bild](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblDvicMZAqhN2Dz9LweMqfxJFYSYqX3icYVdia7N3frBENCJI62YYepItia3mUAakoJXvYQThJibbRjYZ2w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

Klicken Sie unten auf die Schaltfläche "zur Demo zurückkehren", um die Demonstrationskonto -Testschnittstelle zu öffnen:

  

 ![Bild](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblDvicMZAqhN2Dz9LweMqfxJFaw1nYLQLHyibyGcJuCdY2fMiauOMkBlwQtbUTPMicgWibNlAvNuYiczPeHw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

Klicken Sie nach Eingabe der Mailbox -Adresse auf die Schaltfläche "Demo versuchen", um sich an der TWS -Schnittstelle anzumelden, die das Demonstrationskonto eingibt:

  

 ![Bild](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblDvicMZAqhN2Dz9LweMqfxJFoo3KA9iaO5THUxiaGdftaEXZ3Ems53eAHXYhmrtdSviaB49bNJQ93QkKQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

Klicken Sie in der oberen rechten Ecke auf das Zahnradsymbol (die fünfte Anleitung von rechts nach links). Öffnen Sie das Dialogfeld "TWS -Konfiguration" und legen Sie die "Aktuelle Sprache" auf der allgemeinen Seite auf Englisch fest, schließen und starten Sie die TWS neu.

  

 ![Bild](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLGAXLNAnBf2Tz9jXWR8CDh4HWHBxM0mlCMLR73fREN0jRJPrIxSuQtQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

Geben Sie dann "API"-> "Einstellungen" für die API-Zugriffskonfiguration ein:

  

1. Überprüfen Sie "ActiveX- und Socket -Clients aktivieren" und erlauben Sie externe Programme, auf TWS zuzugreifen.
    
2. Überprüfen Sie "Offene Bestellungen für Verbindungen herunterladen" und erhalten Sie alle nicht nachhaltigen Provisionsinformationen, wenn das externe Programm mit TWS verbunden ist.
    
3. Notieren Sie Ihre Portnummer "Socket -Port" (ich bin 7497), mit der eine Verbindung zu TWS von VN Trader hergestellt wird.
    
4. Klicken Sie auf die Schaltfläche "OK", um die Konfiguration zu speichern



# Schnittstellenanmeldung

  

Im Gegensatz zu den meisten anderen API -Schnittstellen, die Direct -Connected Broker -Server haben, ist die IB -Schnittstelle mit den lokalen Trading Client TWS verbunden, und dann ist TWS für den IB -Server verantwortlich.

  

Als nächstes starten Sie nach der Eintragsmethode VN Trader Pro und lädt nur die Schnittstelle "Yonglou Securities".

  

Klicken Sie nach Eingabe der Hauptschnittstelle in der Menüleiste auf "System"-> "Verbinden Sie IB" und sehen Sie sich das Dialogfeld an:

  

 ![Bild](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblDvicMZAqhN2Dz9LweMqfxJFiaXaznoyzCxicS5bNTricO1IUlzwkxkeO1h1V679g2SsrODoRjYMremAQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

Die Füllung jedes Feldes ist wie folgt:

  

- TWS -Adresse: 127.0.0.1 (IP -Adresse dieses Geräts)
- TWS Port: 7497 (vorherige Schritte)
- Kundennummer: Füllen Sie 1 aus (es sei denn, Sie haben mehrere Prozesse, um TWS zu verbinden)


Es sollte betont werden, dass im Gegensatz zu anderen APIs wie CTP direkt mit dem FAR -End -Servermodell aus lokalen Transaktionsprogrammen verbunden ist, die IB -API -Verbindung von lokalen Handelsverfahren (wie VN Trader) zu lokalen Client -TWs stammt. Verbindung.

  
Klicken Sie nach dem Ausfüllen der oben genannten Schaltfläche "Verbindungen", um sich auf den CTP -Server und die zugehörigen Initialisierungsvorgänge anzumelden.


 ![Bild](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblDvicMZAqhN2Dz9LweMqfxJFJmVHCHrAsQudXnaQB30V9MH3xibnQGhSgS788n8pbU5iaU65eTqGWbrg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

Es gibt Abnormalitäten im Anmeldungsinitialisierungsprozess. Nachdem das Protokoll "Server Time" angezeigt wurde, zeigt dies an, dass der Initialisierungsvorgang erfolgreich abgeschlossen wurde.

  

Es wird immer noch eine Reihe von Informationsbenachrichtigungen in der Follow -up geben. Markt, Sie können es jetzt nicht bekommen), Demo -Handel hat keine spezielle Lösung.

  

  

 **Überprüfen Sie den Vertrag** 

  

Aufgrund der von Yinglie Securities und den Vertragsressourcen unterstützten Börsen kann die IB -API keine vollständige Vertragsabfragefunktion bereitstellen, die der CTP -Schnittstelle ähnlich ist. Benutzer müssen auf der offiziellen Website von Yongye Securities auf ihrer Handelsproduktliste gehen und selbst zu verwandte Vertragsinformationen finden:

 [InteractiveBroker Smart Contract](https://www.interactivebrokers.com.hk/cn/index.php) 

  

Beachten Sie, dass im VN -Händler der für die IB -Schnittstelle verwendete Handelsvertragscode der einzige Kennung des Vertrags im IB -System ist mit Symbol oder Beschreibung Name.

  
  

 **Abonnementmarkt** 

  

Nachdem Sie die Vertragsinformationen gefunden haben, die Sie im vorherigen Schritt für den Markt abonnieren möchten, können Sie die Exchange und die Schnittstelle im Kästchen Trading Component in der oberen linken Ecke der VN Trader -Schnittstelle auswählen, den Vertragscode in das Code -Kästchen eingeben und eingeben und eingeben. Geben Sie dann das Auto ein.

  

Wenn Sie den neuesten Markt -Tick -Push erhalten, wird er in der folgenden In -Tiefen -Angabe angezeigt.
Wenn Sie den neuesten Markt -Tick -Push erhalten, wird er in der folgenden In -Tiefen -Angabe angezeigt.
  

 ![Bild](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblBlC7XKiauJqp1EcQfwYFUzVqoiawRYv672zibLmib0NRW3sklZ7icrDlOYfh80z1H8uCZN8blKtticACJg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

Nach dem Abonnementmarkt wird die IB-Schnittstelle automatisch die relevanten Informationen des Vertrags abfragt.

  

 ![Bild](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLW11iaZz4Oabib8gIdkfPe5U2h1kOM3D0ic6LTpia6G92bo9VCUTSRk1U3g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

Alle Abonnement -Marktinformationen werden in der Marktüberwachungskomponente auf der rechten Seite der rechten Seite angezeigt, was für die anschließende schnelle Ausführung manueller Transaktionen geeignet ist:

  

 ![Bild](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlL11Lbyrfdd1MwbYE642g8JNqALqJUVh3qqoHlCfW3u3bOXWjJrQedHg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

Achten Sie auf die Marktdaten auf IB. Wenn das Marktabonnement fehlschlägt (Conid ist falsch, nicht gekauft usw.), gibt es auch entsprechende Inhaltsausgaben in der Protokollkomponente in der unteren linken Ecke, um die Untersuchung zu erleichtern.

  

  

 **Transaktion einstecken** 

  

Nachdem Sie wissen, wo der Preis des neuesten Marktes ist, können Sie die Bestellung bezahlen:

  

 ![Bild](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLIpI9zYU0CYIh6hnCCTA6Z6rPMEqlQK7arlBiagicwnP6t9KJLQlmFuXg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

1. Wählen Sie eine Transaktionsrichtung: kaufen (mehr) oder verkaufen (leer)
    
2. Kaiping bleibt leer, ohne zu wählen
    
3. Wählen Sie den Preistyp: IB Interface unterstützt das Preislimit, den Marktpreis
    
4. Klicken Sie nach Eingabe des Preises und der Menge auf die Schaltfläche "Ansicht", um eine Transaktionsanforderung auszustellen
    

  

  

 **Kommission** 

  

Nach der Einreichung des anvertrauten Antrags wird die entsprechende Provisionsrenditen an die beauftragte Komponente zurückgegeben, um den neuesten Stand des aktuellen Antrags der Kommission anzuzeigen:

  

 ![Bild](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLCEl4UuFx5NbNL1Sdicz4olDwv71eQ5sKGfqyMztgQE5h2EC6w92of0w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

  

Beachten Sie, dass die beauftragte Komponente in zwei unterteilt ist:

  

- "Aktivität": Nur die Information der Kommission des aktuellen Auszahlungszustands (eingereicht, Transaktion nicht in der Lage, und teilweise Transaktionen)
    
- "Provision": Zeigen Sie alle Kommissionsinformationen an (einschließlich Auszahlungskommission)
    

  

Unter den beiden Komponenten können sie in einem Entlassungszustand betraut werden.**Double -Klicken Sie auf die Zellen, die die Zellen anvertraut haben** die Funktion der Auszahlungsbestellung wird implementiert (es werden Texteingabeaufforderungen erfolgen, wenn die Maus platziert wird). Oder Sie können auch auf die Transaktionskomponente klicken **"Vollständige Auszahlung"** lassen Sie uns die gesamte aktuelle Auszahlungskommission innerhalb des VN -Händlers erkennen.

  

 ![Bild](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLfIJnOLibE1UlfMef0gS0uDwxOaJMb4QrB3ian7FHmmBKrjfjAcKj7qicA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

  

Wenn die Transaktion auftritt, erhält der VN -Tradeer die Daten -Push -Daten und zeigt sie in der Transaktionsüberwachungskomponente an. Beachten Sie, dass auf dem realen Markt jede Verantwortung eine Transaktion mit mehreren Anlegern anderer Anleger abhalten kann, dh eine Verantwortung hat eine Aufzeichnung mehrerer Transaktionen.

  

 **Kapitalbestand** 

  

Nach der Übertragung der Transaktion ändert sich das Konto des Kontos.

  

 ![Bild](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLdPzW39F4gibPyPbReKO4KGVjv5O9TVTwGbkOsEK3aFTS2EX2t7JENRQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

Die IB -Schnittstelle bietet reale Pushing- und Aktualisierung von Fonds und Positionierungsdaten, und der Netto -Positionsmodus wird auch in der Position der Position berechnet:

  

 ![Bild](https://mmbiz.qpic.cn/mmbiz_png/3HpBCK3bblANLeb0M3ISCx63NPJkOhlLdmmqLKOuFM3jYuajg0lKKtQY6RZjhOWOX1pw6C3fMTBOV6CcdjgbiaQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

  

  

 **Echter Handel** 

  

Wenn Sie mit der Demo -Handelstestumgebung von IB vertraut sind, können Sie den Papierhandel für Simulationstransaktionen verwenden oder Live -Handel für den echten Handel verwenden.

  

Zusätzlich zu TWS bietet IB auch ein leichteres Client -IB -Gateway für API -Transaktionen.


