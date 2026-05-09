# Funzionalità per Tier — Hotel 3-4 Stelle

Tre livelli di template per hotel e resort, dalla vetrina online alla piattaforma completa con check-in mobile e concierge AI.

## Tier Base — €700-1.000 (consegna 2-3 settimane)

**Per chi**: Hotel che vuole presence online e ridurre dipendenza 100% da Booking.com.  
**Sforzo stimato**: ~100h.

### Funzionalità incluse

- **Home Hero** facciata hotel professionale + CTA "Prenota"
- **Gallery Camere Strutturate** (6 tipologie):
  - Single, Double, Suite, Deluxe, Twin, Accessible
  - 4-6 foto per camera (letto, bagno, vista, amenity)
  - Prezzo/notte + disponibilità generica
- **Descrizione Struttura**:
  - Storia hotel (anni apertura, renovazione, proprietario)
  - Amenity checklist (WiFi, TV, A/C, Safe, etc.)
- **Mappa + POI Vicinanza**
  - Distanza stazione/aeroporto/centro città
  - Attrazioni principali (musei, ristoranti, piazze)
- **Carousel Recensioni** TripAdvisor/Booking widget
- **Schema Hotel + AggregateRating** JSON-LD
- **Mobile-first responsive** (LCP <2.5s)

### Cosa NON è incluso

- Booking calendar realtime
- Guest portal / pre-check-in
- Multi-lingua
- POS integration
- Analytics

### Pricing add-on

| Add-on | Costo | Note |
|--------|-------|------|
| Dominio .it | €9/anno | Incluso anno 1 |
| Hosting + SSL | €60/anno | Hotel traffic higher |

---

## Tier Intermedio — €2.000-2.800 (consegna 4-6 settimane)

**Per chi**: Hotel consolidato che vuole booking diretto e gestire prenotazioni internamente.  
**Sforzo stimato**: ~320h.

### Funzionalità incluse (oltre al Base)

- **Booking Engine Completo**
  - Calendar realtime multi-room (evita overbooking)
  - Selezione numero camere + tipo
  - Check-in/Check-out date picker
  - Add-on facoltativo: Colazione (€8-12), Parking (€10-15), WiFi premium (€3-5)
  - Dynamic pricing: weekend 30% premium vs feriale
  - Stripe caparra 30-50% (confirm email + SMS)
  - Guest pre-arrival info email (WiFi password, check-in time)
  - Cancellazione self-service (fino 72h prima)

- **Channel Manager Simulato** (Booking.com / Expedia / Airbnb sync)
  - Carica inventory una volta → multi-channel distribution
  - Gestione no-overbooking automatico
  - Revenue management: stessa camera, prezzo unificato per canali

- **Guest Portal Pre/Post Stay**
  - Pre-arrival: email con info WiFi, colazione ora, parcheggio
  - Post-stay: feedback form NPS (Net Promoter Score)
  - Upsell servizi (spa booking, restaurant reservation, tour booking)

- **Multi-lingua IT/EN/DE/FR/ES**
  - Attrae clientela internazionale

- **Newsletter Offerta**
  - Weekend romantici (Valentine, ponte, festa locale)
  - Business package (7 notti + parking + colazione)
  - Seasonal: "Maggio in Toscana", "Agosto al mare"

- **Google Business Profile Auto-Sync**
  - Foto, hours, reply to reviews

### Integrazioni

| Stack | Costo/anno | Note |
|-------|-----------|------|
| Stripe | 1.4% + €0.30 | Payment processor |
| Twilio SMS | €20-40 | Prenotazione confirmation |
| SendGrid Email | €30-60 | Transactional + newsletter |

---

## Tier Avanzato — €5.000-7.500 (consegna 10-12 settimane)

**Per chi**: Catena 2-5 hotel o struttura stellata con esigenze concierge AI e upselling.  
**Sforzo stimato**: ~600h.

### Funzionalità incluse (oltre all'Intermedio)

- **Smart Check-in QR Mobile Key**
  - Guest riceve QR dopo pagamento → scansiona bypass reception
  - Digital key per room (integrazione August/Yale smart lock)
  - No chiave fisica: +security, -housekeeping overhead
  - Emergency check-in bypass (staff override)

- **Concierge AI Chatbot** (RAG on-prem Ollama llama3.1:8b)
  - Knowledge base: servizi hotel (laundry, room service, pet policy), cibi (allergie), eventi locali
  - Query realtime: "Ristoranti vegetariani 1km?"
  - Smart replies: "Spedizione cibo alle 19:30 camera 304 €8"
  - Upselling AI: "Notato preferisci colazione alle 7am, ti riserviamo tavolo ristorante?"

- **Experience Booking** integrato
  - Museum tickets (Uffizi, Accademia)
  - Wine tour prenotazione + transfer
  - Spa booking (massaggio, fango toscano)
  - Cooking class + chef meetup

- **Upselling AI Engine**
  - Guest profiling: 2 notti → "Suggerisco upgrade suite vista +€45/notte"
  - Dining upsell: "Cena gourmet chef tavolo privato domani €85pp"
  - Activity cross-sell basato su booking history

- **Staff Dashboard Task Management**
  - Housekeeping: room status (dirty, clean, inspected), priority rooms
  - Room service queue: ordini + ETA delivery kitchen
  - Front desk alerts: VIP arrivals, anniversary, pet-friendly flag

- **Integrazione PMS Completa**
  - Lightspeed / HotelXP / IHG property management
  - Real-time room inventory sync
  - Guest history (stays, preferences, allergies)
  - Accounting: split payment, taxes, commissions

- **Virtual Tour 360° Camere**
  - Matterport scan ogni tipo camera
  - Interactive hotspot: "Clik questo per info WiFi password"
  - Pre-booking room type selector

- **Multi-location Consolidated**
  - Dashboard 2-5 hotel: occupancy vs target
  - Unified loyalty: guest stays Milano + Roma → ponti sconti
  - Cross-property opportunity (trasferisci guest a location partner)

### Integrazioni Enterprise

| Stack | Costo/anno | Note |
|-------|-----------|------|
| Ollama AI (on-prem) | €0 | llama3.1:8b VPS locale |
| Lightspeed PMS | €300-600 | Enterprise property management |
| August Smart Lock | €100-200 | Digital room keys |
| Matterport 360 | €300-800 | Virtual tours for 5+ rooms |
| Google Experience API | Free | Museum/activity booking |

---

## Confronto Tier

| Funzionalità | Base | Intermedio | Avanzato |
|---|:---:|:---:|:---:|
| Gallery Camere | ✓ | ✓ | ✓ |
| Mappa + POI | ✓ | ✓ | ✓ |
| Schema JSON-LD | ✓ | ✓ | ✓ |
| **Booking Calendar** | — | ✓ | ✓ |
| **Add-on Facoltativo** | — | ✓ | ✓ |
| **Dynamic Pricing** | — | ✓ | ✓ |
| **Multi-lingua** | — | ✓ | ✓ |
| **Guest Portal** | — | ✓ | ✓ |
| **Newsletter** | — | ✓ | ✓ |
| **Smart Check-in QR** | — | — | ✓ |
| **Concierge AI RAG** | — | — | ✓ |
| **Experience Booking** | — | — | ✓ |
| **Upselling AI** | — | — | ✓ |
| **Staff Dashboard** | — | — | ✓ |
| **PMS Integration** | — | — | ✓ |
| **Virtual Tour 360** | — | — | ✓ |
| **Multi-location** | — | — | ✓ |

---

## Manutenzione Ricorrente

| Piano | €/mese | Incluso |
|-------|---------|---------|
| **Basic** | €80 | Hosting + SSL + 1 backup/sett + email support |
| **Standard** | €160 | Basic + 8h modifiche/mese + phone support |
| **Premium** | €320 | Standard + 24h modifiche/mese + CDN + AI model updates + competitor rate monitoring |

---

## Timeline Post-Deploy

### Sett. 1-4 (incluso)
- Lancio booking engine
- Setup SMS + email transactional
- Training staff reception

### Mese 2-3 (Standard plan)
- Gallery foto fine-tuning
- SEO optimization locale + Google Business
- Newsletter campaign test

### Mese 4+ (Premium plan)
- Concierge AI live
- Smart check-in QR integration
- Experience booking setup
- Multi-location se applicabile

---

## Caso Studio Reale

**Hotel Y (60 camere, Firenze centro)**:
- Base: €800 (sito vetrina)
- + Intermedio: €2.300 (booking online)
- Risultato: 35% prenotazioni via sito vs 5% prima
- ROI: 6-7 mesi (margine booking diretto 5-8% vs 15-25% OTA commission)

---

**Contatta Federico per quotazione personalizzata.**

