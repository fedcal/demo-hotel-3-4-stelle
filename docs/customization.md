# Customization

## Cambiare i dati mock

Edita i file in `src/assets/mock/`. Vedi [Mock Data](/mock-data).

## Cambiare i colori

I design tokens sono in `src/styles.css`:

```css
:root {
  --color-accent: #0969da;        /* Cambia qui per il colore primario */
  --color-bg-default: #ffffff;
  --color-fg-default: #1f2328;
  /* ... */
}
```

## Cambiare il logo

Sostituisci `public/favicon.ico` e aggiungi il logo SVG in `public/logo.svg`.

## Aggiungere route

1. Crea il componente in `src/app/pages/{nome}/`
2. Aggiungi la route in `src/app/app.routes.ts`:

```typescript
{
  path: 'servizi',
  loadComponent: () => import('./pages/servizi/servizi.component').then((m) => m.ServiziComponent),
  title: 'Servizi — Hotel 3-4 stelle'
}
```

## Cambiare i metadati SEO

Edita `src/index.html` per:
- `<title>` globale
- `<meta name="description">`
- Open Graph

Per metadati per-route usa `Title` e `Meta` di `@angular/platform-browser`.

## Disabilitare il prerender

In `angular.json`:

```json
"prerender": false
```

In questo caso il sito gira solo in modalità SSR runtime (più lento al cold start, più dinamico).

## White-label per cliente

1. Fork del repo o copia in nuova cartella
2. Sostituisci `hotel-3-4-stelle` con nome cliente (`acme-hotel`)
3. Sostituisci footer rimuovendo riferimento a Federico (modifica `footer.component.ts`)
4. Personalizza `vercel.json` con domain custom cliente
5. Deploy su Vercel cliente con loro account

---

## Possibili Sviluppi Customizzabili per Hotel 3-4 Stelle

### 1. Dynamic Pricing Engine AI-powered
**Scope**: ~28h | **Tier**: Avanzato | **Valore**: Revenue boost +18-22%

ML model (XGBoost) predice demand basato su: stagione, evento locale, booking pattern competitors, meteo. Auto-adjust prezzo.

### 2. Smart Check-in QR + Digital Key August
**Scope**: ~26h | **Tier**: Avanzato | **Valore**: Contactless +security, staff efficiency +30%

Guest riceve QR dopo pagamento → scansiona bypass reception → August smart lock apre stanza.

### 3. Concierge AI Chat (Ollama RAG)
**Scope**: ~24h | **Tier**: Avanzato | **Valore**: Customer satisfaction NPS +10, staff workload -25%

Bot risponde 24/7: "Ristorante vegetariano 500m?", "Transfer aeroporto €25?", "Colazione domani 7am?".

### 4. Guest Experience Score + Predictive Churn
**Scope**: ~20h | **Tier**: Premium | **Valore**: Retention strategy, upselling target

After stay: NPS + satisfaction score → predice ripetizione. Alert: "Guest tornò 2 volte, target lui con loyalty offer".

### 5. Video Room Tour 360° Matterport
**Scope**: ~18h | **Tier**: Avanzato | **Valore**: Conversion pre-booking +12%, booking cancellation -8%

Ogni tipo camera: scannerizzazione Matterport + hotspot interattivi (WiFi pwd, colazione ora, safe code).

### 6. Breakfast Buffet Management
**Scope**: ~16h | **Tier**: Intermedio+ | **Valore**: Capire demand, waste reduction

Dashboard: quanti guest breakfast domani? Intake form al booking: allergie, preferenze? Auto-adjust buffet quantità.

### 7. Partnerships Local Businesses
**Scope**: ~14h | **Tier**: Intermedio+ | **Valore**: Concierge added-value, monetization €500-1000/anno

Integra: ristoranti (prenotazione + 10% sconti per guest), museo (skip-the-line), spa (booking), transfer locale (Uber embed).

### 8. Loyalty Program Cross-Property
**Scope**: ~22h | **Tier**: Avanzato | **Valore**: Repeat booking +30% se multi-location

Guest book 3x = prossima notte 15% discount. Se 2+ hotel: accumulare punti tra proprietà.

### 9. Group Booking Configurator
**Scope**: ~25h | **Tier**: Premium | **Valore**: B2B stream €3k-8k/evento

Companies: scegli guest count → auto-suggest rooms (double vs single) → group rate quote → PDF invoice.

### 10. Email Marketing Automation (Win-Back)
**Scope**: ~17h | **Tier**: Avanzato | **Valore**: Churn reduction, reactivation 15%

Segmentazione: nunca-ritornati (6+ mesi) → email "Rivieni a trovarci, €20 sconto". Trigger su anniversario soggiorno.

### 11. Staff Management Task Board
**Scope**: ~19h | **Tier**: Avanzato | **Valore**: Housekeeping efficiency +20%, communication

Dashboard real-time: room status (dirty/clean/inspected), priority rooms, daily targets, notes per guest (VIP, extra pillow).

### 12. Sustainability Report (Green Hotel)
**Scope**: ~15h | **Tier**: Intermedio+ | **Valore**: ESG positioning, guest satisfaction eco-conscious +12%

Track: energy/water consumption, plastic-free amenities, local sourcing. Guest quiz "Vuoi risparmiare acqua?" → reward points.

**Total**: 12 customizzazioni per €5k-8k development, ROI medio 4-5 mesi.
