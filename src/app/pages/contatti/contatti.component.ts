import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, ReactiveFormsModule],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Prenota il tuo soggiorno</h1>
        <p>Reception attiva 24h — risposta garantita entro 4 ore lavorative</p>
      </div>
    </section>

    <article class="demo-container content" *ngIf="info$ | async as info">
      <div class="contact-grid">
        <section class="info-block">
          <h2>Dove siamo</h2>
          <p>
            {{ info.indirizzo.via }}<br />
            {{ info.indirizzo.cap }} {{ info.indirizzo.citta }} ({{ info.indirizzo.provincia }})<br />
            {{ info.indirizzo.regione }}
          </p>

          <h2>Contatti diretti</h2>
          <ul class="contact-list">
            <li>
              <strong>Telefono:</strong>
              <a [href]="'tel:' + info.contatti.telefono">{{ info.contatti.telefono }}</a>
            </li>
            <li>
              <strong>WhatsApp:</strong>
              <a [href]="whatsAppLink(info.contatti.whatsapp)" target="_blank" rel="noopener">{{
                info.contatti.whatsapp
              }}</a>
            </li>
            <li>
              <strong>Email:</strong>
              <a [href]="'mailto:' + info.contatti.email">{{ info.contatti.email }}</a>
            </li>
          </ul>

          <h2>Orari chiave</h2>
          <ul class="hours-list">
            <li><span>Reception</span><span>{{ info.orari.reception }}</span></li>
            <li><span>Check-in</span><span>{{ info.orari.checkIn }}</span></li>
            <li><span>Check-out</span><span>{{ info.orari.checkOut }}</span></li>
            <li><span>Ristorante</span><span>{{ info.orari.ristorante }}</span></li>
            <li><span>Spa</span><span>{{ info.orari.spa }}</span></li>
            <li><span>Piscina</span><span>{{ info.orari.piscina }}</span></li>
          </ul>
        </section>

        <section class="form-block">
          <h2>Richiesta di prenotazione</h2>
          <form [formGroup]="form" (ngSubmit)="onSubmit()" *ngIf="!submitted(); else thankyou">
            <div class="field">
              <label for="nome">Nome e cognome *</label>
              <input id="nome" type="text" formControlName="nome" required autocomplete="name" />
            </div>
            <div class="field">
              <label for="email">Email *</label>
              <input id="email" type="email" formControlName="email" required autocomplete="email" />
            </div>
            <div class="field">
              <label for="telefono">Telefono *</label>
              <input id="telefono" type="tel" formControlName="telefono" required autocomplete="tel" />
            </div>
            <div class="row-2">
              <div class="field">
                <label for="arrivo">Data arrivo *</label>
                <input id="arrivo" type="date" formControlName="arrivo" required />
              </div>
              <div class="field">
                <label for="partenza">Data partenza *</label>
                <input id="partenza" type="date" formControlName="partenza" required />
              </div>
            </div>
            <div class="row-2">
              <div class="field">
                <label for="adulti">Adulti</label>
                <input id="adulti" type="number" formControlName="adulti" min="1" max="4" />
              </div>
              <div class="field">
                <label for="bambini">Bambini (&lt;12 anni)</label>
                <input id="bambini" type="number" formControlName="bambini" min="0" max="4" />
              </div>
            </div>
            <div class="field">
              <label for="tipologia">Tipologia camera preferita</label>
              <select id="tipologia" formControlName="tipologia">
                <option value="">-- Nessuna preferenza --</option>
                <option value="standard">Camera Standard (da €70/notte)</option>
                <option value="superior">Camera Superior — Vista mare (da €110/notte)</option>
                <option value="junior-suite">Junior Suite — Idromassaggio (da €190/notte)</option>
                <option value="suite">Suite Presidenziale (da €280/notte)</option>
              </select>
            </div>
            <div class="field">
              <label for="note">Richieste speciali (allergie, accessibilità, anniversari…)</label>
              <textarea id="note" formControlName="note" rows="3"></textarea>
            </div>

            <div class="privacy-block">
              <div class="field field--checkbox">
                <input id="privacy" type="checkbox" formControlName="privacy" />
                <label for="privacy">
                  Acconsento al trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR)
                  per la gestione della richiesta di prenotazione. I dati non saranno ceduti a terzi. *
                </label>
              </div>
              <div class="field field--checkbox">
                <input id="marketing" type="checkbox" formControlName="marketing" />
                <label for="marketing">
                  Acconsento facoltativamente a ricevere comunicazioni promozionali e offerte speciali via email.
                  Potrò revocare il consenso in qualsiasi momento.
                </label>
              </div>
            </div>

            <button type="submit" class="btn btn-primary" [disabled]="form.invalid">
              Invia richiesta di prenotazione
            </button>
            <p class="form-disclaimer">
              Demo non funzionale: nessuna prenotazione è realmente inviata. Per prenotare contattare direttamente l'hotel.
              I campi * sono obbligatori.
            </p>
          </form>
          <ng-template #thankyou>
            <div class="thankyou">
              <span class="thankyou__icon" aria-hidden="true">✓</span>
              <h3>Grazie, {{ form.value['nome'] }}!</h3>
              <p>
                La tua richiesta per il soggiorno
                <strong>{{ form.value['arrivo'] }} → {{ form.value['partenza'] }}</strong>
                ({{ form.value['adulti'] }} adulti) è stata simulata.
              </p>
              <p>In un sito reale riceveresti una email di conferma all'indirizzo indicato entro 4 ore lavorative.</p>
              <button type="button" class="btn btn-secondary" (click)="reset()">Nuova richiesta</button>
            </div>
          </ng-template>
        </section>
      </div>
    </article>
  `,
  styles: [
    `
      .page-header {
        padding: 4rem 1rem 3rem;
        background: linear-gradient(180deg, #e0f2fe 0%, var(--color-bg-subtle) 100%);
        text-align: center;
        border-bottom: 1px solid var(--color-border);
      }
      .page-header h1 {
        margin: 0 0 0.5rem;
      }
      .page-header p {
        color: var(--color-fg-muted);
        margin: 0;
      }
      .content {
        padding: 3rem 1rem;
      }
      .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 3rem;
      }
      .info-block h2 {
        margin: 1.5rem 0 0.75rem;
        font-size: 1.15rem;
      }
      .info-block h2:first-child {
        margin-top: 0;
      }
      .info-block p {
        margin: 0;
        line-height: 1.6;
        color: var(--color-fg-muted);
      }
      .contact-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }
      .contact-list li {
        font-size: 0.9rem;
      }
      .hours-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .hours-list li {
        display: flex;
        justify-content: space-between;
        padding: 0.4rem 0;
        border-bottom: 1px dashed var(--color-border);
        font-size: 0.9rem;
      }
      .hours-list li span:first-child {
        color: var(--color-fg-muted);
      }
      .form-block {
        background: var(--color-bg-subtle);
        padding: 2rem;
        border-radius: var(--radius-lg);
      }
      .form-block h2 {
        margin: 0 0 1.5rem;
      }
      .field {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
      }
      .field label {
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
      }
      .field input,
      .field textarea,
      .field select {
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        font-family: inherit;
        font-size: 0.95rem;
        background: #ffffff;
      }
      .field input:focus,
      .field textarea:focus,
      .field select:focus {
        outline: 2px solid var(--color-accent);
        outline-offset: 1px;
        border-color: var(--color-accent);
      }
      .row-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
      }
      .privacy-block {
        background: #e0f2fe;
        border: 1px solid #bae6fd;
        border-radius: var(--radius-md);
        padding: 1rem;
        margin-bottom: 1.25rem;
      }
      .privacy-block .field {
        margin-bottom: 0.75rem;
      }
      .privacy-block .field:last-child {
        margin-bottom: 0;
      }
      .field--checkbox {
        flex-direction: row;
        align-items: flex-start;
        gap: 0.5rem;
      }
      .field--checkbox input {
        margin-top: 0.15rem;
        flex-shrink: 0;
        width: auto;
        padding: 0;
      }
      .field--checkbox label {
        font-weight: 400;
        font-size: 0.82rem;
        color: var(--color-fg-muted);
        line-height: 1.4;
      }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        border: none;
        cursor: pointer;
        font-size: 0.95rem;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
        width: 100%;
        text-align: center;
      }
      .btn-primary:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .btn-primary:hover:not(:disabled) {
        background: #083d5a;
      }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
      }
      .form-disclaimer {
        font-size: 0.78rem;
        color: var(--color-fg-muted);
        font-style: italic;
        margin-top: 0.75rem;
        text-align: center;
      }
      .thankyou {
        text-align: center;
        padding: 1rem 0;
      }
      .thankyou__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: var(--color-accent);
        color: #ffffff;
        font-size: 1.75rem;
        font-weight: 700;
        margin: 0 auto 1rem;
      }
      .thankyou h3 {
        color: var(--color-accent);
        margin: 0 0 0.75rem;
      }
      .thankyou p {
        color: var(--color-fg-muted);
        margin: 0 0 0.75rem;
        font-size: 0.95rem;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContattiComponent {
  private readonly mockData = inject(MockDataService);
  private readonly fb = inject(FormBuilder);

  readonly info$ = this.mockData.info$;
  readonly submitted = signal(false);

  readonly form: FormGroup = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern(/^[+0-9 ]{6,}$/)]],
    arrivo: ['', Validators.required],
    partenza: ['', Validators.required],
    adulti: [2, [Validators.required, Validators.min(1), Validators.max(4)]],
    bambini: [0, [Validators.min(0), Validators.max(4)]],
    tipologia: [''],
    note: [''],
    privacy: [false, Validators.requiredTrue],
    marketing: [false]
  });

  whatsAppLink(num: string): string {
    const clean = num.replace(/[^0-9]/g, '');
    return `https://wa.me/${clean}`;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted.set(true);
    }
  }

  reset(): void {
    this.form.reset({ adulti: 2, bambini: 0, privacy: false, marketing: false });
    this.submitted.set(false);
  }
}
