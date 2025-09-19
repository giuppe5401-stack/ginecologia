
# Landing Ginecologo/a • Genova (DEMO)

Questo pacchetto contiene una **versione statica** della landing page: basta aprire `index.html` con un browser moderno.
Non servono build tools o installazioni.

## Come usare
1) Apri `index.html` per vedere la pagina.
2) In alto al file, nel blocco **CONFIGURAZIONE RAPIDA**, imposta:
   - `WHATSAPP_NUMBER` (es. +393331234567)
   - `CALL_NUMBER`
   - `FORM_ENDPOINT` (Formspree, Getform o la tua Web App di Google Apps Script)

## Integrazione con Google Sheets (Apps Script)
- Vedi il file `apps_script_example.js` per lo snippet di esempio.
- Pubblica la tua Web App e incolla l’URL in `FORM_ENDPOINT`.

## Versione React
- Il file `GynecologistLandingGenova.jsx` contiene il componente React originale.
- Puoi integrarlo in un progetto React/Vite/Next.js e riutilizzare il markup.
