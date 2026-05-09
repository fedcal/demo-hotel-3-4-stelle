import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-camere',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, NgFor, NgIf, RouterLink],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Camere e Suite</h1>
        <p>35 camere in 4 tipologie — dalla Standard alla Suite Presidenziale con terrazza sul mare</p>
      </div>
    </section>

    <article class="demo-container content" *ngIf="camere$ | async as camere">
      <ul class="camere-list">
        <li *ngFor="let camera of camere.tipologie" class="camera-item">
          <div class="camera-item__header">
            <div class="camera-item__title-block">
              <h2>{{ camera.nome }}</h2>
              <span class="camera-vista">{{ camera.vista }}</span>
              <span *ngIf="camera.badge" class="badge badge--luxury">{{ camera.badge }}</span>
            </div>
            <div class="camera-item__pricing">
              <div class="price-row">
                <span class="price-label">Da</span>
                <span class="price-main">{{ camera.prezzoPerNotte | currency: 'EUR' }}</span>
                <span class="price-unit">/notte</span>
              </div>
              <div class="price-weekend">
                Week-end: {{ camera.prezzoWeekend | currency: 'EUR' }}/notte
              </div>
            </div>
          </div>

          <p class="camera-item__desc">{{ camera.descrizione }}</p>

          <div class="camera-item__specs">
            <span class="spec"><strong>Superficie:</strong> {{ camera.mq }} m²</span>
            <span class="spec"><strong>Letti:</strong> {{ camera.letti }}</span>
            <span class="spec"><strong>Ospiti max:</strong> {{ camera.maxOspiti }}</span>
            <span class="spec"><strong>Disponibili:</strong> {{ camera.disponibili }}</span>
          </div>

          <div class="camera-item__dotazioni">
            <h3>Dotazioni incluse</h3>
            <ul class="dotazioni-grid">
              <li *ngFor="let d of camera.dotazioni">{{ d }}</li>
            </ul>
          </div>

          <a routerLink="/contatti" class="btn btn-primary">Richiedi disponibilità</a>
        </li>
      </ul>

      <aside class="note-prezzo">
        <p>
          <strong>Note sui prezzi:</strong> Tariffe per camera per notte, colazione inclusa, IVA 10% inclusa.
          Prezzi indicativi riferiti a bassa stagione. Disponibilità e prezzi aggiornati su richiesta.
          <em>Questa è una demo — nessun pagamento è reale.</em>
        </p>
      </aside>
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
      .camere-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
      .camera-item {
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        padding: 2rem;
        background: #ffffff;
      }
      .camera-item__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1.5rem;
        margin-bottom: 1rem;
        flex-wrap: wrap;
      }
      .camera-item__title-block {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }
      .camera-item__title-block h2 {
        margin: 0;
        font-size: 1.4rem;
      }
      .camera-vista {
        font-size: 0.85rem;
        color: var(--color-accent);
        font-weight: 600;
      }
      .badge {
        display: inline-block;
        font-size: 0.7rem;
        padding: 0.2rem 0.6rem;
        border-radius: 9999px;
        font-weight: 600;
        margin-top: 0.1rem;
        width: fit-content;
      }
      .badge--luxury {
        background: #e0f2fe;
        color: var(--color-accent);
      }
      .camera-item__pricing {
        text-align: right;
        flex-shrink: 0;
      }
      .price-row {
        display: flex;
        align-items: baseline;
        gap: 0.25rem;
        justify-content: flex-end;
      }
      .price-label {
        font-size: 0.85rem;
        color: var(--color-fg-muted);
      }
      .price-main {
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-accent);
        line-height: 1;
      }
      .price-unit {
        font-size: 0.85rem;
        color: var(--color-fg-muted);
      }
      .price-weekend {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        margin-top: 0.25rem;
      }
      .camera-item__desc {
        color: var(--color-fg-muted);
        line-height: 1.7;
        margin: 0 0 1.25rem;
      }
      .camera-item__specs {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
        padding: 0.75rem 1rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-md);
      }
      .spec {
        font-size: 0.9rem;
      }
      .camera-item__dotazioni h3 {
        font-size: 0.95rem;
        margin: 0 0 0.75rem;
      }
      .dotazioni-grid {
        list-style: none;
        padding: 0;
        margin: 0 0 1.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0.4rem;
      }
      .dotazioni-grid li {
        font-size: 0.85rem;
        color: var(--color-fg-muted);
        padding-left: 1rem;
        position: relative;
      }
      .dotazioni-grid li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--color-accent);
        font-weight: 700;
      }
      .btn {
        display: inline-block;
        padding: 0.65rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
      }
      .btn-primary:hover {
        background: #083d5a;
      }
      .note-prezzo {
        margin-top: 3rem;
        padding: 1rem 1.25rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: var(--color-bg-subtle);
      }
      .note-prezzo p {
        margin: 0;
        font-size: 0.85rem;
        color: var(--color-fg-muted);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CamereComponent {
  private readonly mockData = inject(MockDataService);

  readonly camere$ = this.mockData.camere$;
}
