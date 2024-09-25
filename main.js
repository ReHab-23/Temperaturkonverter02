/*
FUNKTIONEN
zuruecksetzen
temperaturrechnung
*/

function zuruecksetzen() {
    //zurücksetzen der Eingabefelder
    ergebnis = "XXX";
    document.getElementById('output1').innerText = ergebnis;
}

function konvertieren() {
    // Werte aus Eingabefelder in HTML-Dokument holen
    const einheit_geg1 = String(document.getElementById('einheit_geg1').value);
    const einheit_ges1 = String(document.getElementById('einheit_ges1').value);
    const zahlenwert = parseFloat(document.getElementById('zahlenwert').value);

    //if-Statement
    //Umrechnen der jeweiligen Werte -> gegeben wird in gesucht umgerechnet
    if (einheit_geg1 == einheit_ges1)
        {
            ergebnis = zahlenwert;
        } else if (einheit_geg1 == 'c' && einheit_ges1 == 'f')
        {
            ergebnis = (zahlenwert * 1.8) + 32;
        } else if (einheit_geg1 == 'f' && einheit_ges1 == 'c')
        {
            ergebnis = (zahlenwert-32)/1.8;
        } else if (einheit_geg1 == 'c' && einheit_ges1 == 'k')
        {
            ergebnis = zahlenwert + 273.15 ;
        } else if (einheit_geg1 == 'k' && einheit_ges1 == 'c')
        {
            ergebnis = zahlenwert - 273.15;
        } else if (einheit_geg1 == 'f' && einheit_ges1 == 'k')
        {
            ergebnis = (zahlenwert - 32) * (5 / 9) + 273.15;
        } else if (einheit_geg1 == 'k' && einheit_ges1 == 'f')
        {
            ergebnis = (zahlenwert - 273.15) * (9 / 5) + 32;
        }


    //Ergebnis im HTML-Dokument anzeigen
    document.getElementById('output1').innerText = ergebnis;
}