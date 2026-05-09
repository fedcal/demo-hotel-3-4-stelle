import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-chi-siamo',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>La nostra storia</h1>
        <p>Tre generazioni di ospitalità sulla Riviera Romagnola dal 1978.</p>
      </div>
    </section>

    <article class="demo-container content">
      <section class="story">
        <h2>Hotel Vista Mare dal 1978</h2>
        <p>
          Nell'estate del 1978 Aldo Ferretti inaugura l'Hotel Vista Mare con 12 camere e una promessa: offrire
          agli ospiti l'autentica accoglienza romagnola con vista diretta sull'Adriatico. Da subito l'hotel
          diventa punto di riferimento per famiglie e coppie alla scoperta della Riviera.
        </p>
        <p>
          Nel 1995, dopo la ristrutturazione completa, l'hotel ottiene le 4 stelle e raddoppia la capacità
          fino alle attuali 35 camere. Figlio Stefano, dopo una formazione all'École Hôtelière de Lausanne,
          porta in dote la spa moderna e il ristorante La Terrazza nel 2005. Oggi è il nipote Marco a guidare
          la struttura, fedele alla filosofia familiare e attento all'innovazione sostenibile.
        </p>
        <p>
          Oltre 45 anni di storia, migliaia di ospiti che tornano ogni anno: questo è il risultato di una
          cura costante per il dettaglio, della qualità della cucina romagnola e di un team affiatato
          che tratta ogni ospite come un amico di vecchia data.
        </p>
      </section>

      <section class="values">
        <h2>I nostri valori</h2>
        <ul class="values-grid">
          <li>
            <h3>Ospitalità familiare</h3>
            <p>Tre generazioni di accoglienza autentica: conosciamo i nostri ospiti per nome.</p>
          </li>
          <li>
            <h3>Territorio e mare</h3>
            <p>Pesce fresco dell'Adriatico, vini Romagna DOC, prodotti dei colli riminesi.</p>
          </li>
          <li>
            <h3>Cura del dettaglio</h3>
            <p>Ogni camera è un rifugio: biancheria 400 fili, prodotti luxury, vista curata.</p>
          </li>
          <li>
            <h3>Sostenibilità</h3>
            <p>Pannelli solari, filiera corta, gestione rifiuti certificata, ricarica elettrica.</p>
          </li>
        </ul>
      </section>

      <section class="team" *ngIf="team$ | async as team">
        <h2>Il nostro team</h2>
        <ul class="team-grid">
          <li *ngFor="let m of team.team" class="team-card">
            <div class="team-card__avatar" aria-hidden="true">{{ m.nome.charAt(0) }}</div>
            <h3>{{ m.nome }}</h3>
            <p class="team-card__role">{{ m.ruolo }}</p>
            <p class="team-card__bio">{{ m.bio }}</p>
            <p class="team-card__exp">{{ m.anniEsperienza }} anni di esperienza</p>
            <ul class="team-card__skills">
              <li *ngFor="let s of m.specialita">{{ s }}</li>
            </ul>
          </li>
        </ul>
      </section>

      <section class="faq-section" *ngIf="faq$ | async as faq">
        <h2>Domande frequenti</h2>
        <ul class="faq-list">
          <li *ngFor="let item of faq.faq" class="faq-item">
            <h3>{{ item.domanda }}</h3>
            <p>{{ item.risposta }}</p>
          </li>
        </ul>
      </section>
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
      .story {
        max-width: 720px;
        margin: 0 auto 4rem;
      }
      .story h2 {
        margin-bottom: 1rem;
      }
      .story p {
        line-height: 1.7;
        margin-bottom: 1rem;
        color: var(--color-fg-muted);
      }
      .values {
        margin-bottom: 4rem;
      }
      .values h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .values-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .values-grid li {
        padding: 1.5rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-md);
      }
      .values-grid h3 {
        margin: 0 0 0.5rem;
        color: var(--color-accent);
      }
      .values-grid p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.95rem;
      }
      .team {
        margin-bottom: 4rem;
      }
      .team h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .team-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.5rem;
      }
      .team-card {
        padding: 1.5rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        text-align: center;
      }
      .team-card__avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: var(--color-accent);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 700;
        margin: 0 auto 1rem;
      }
      .team-card h3 {
        margin: 0 0 0.25rem;
      }
      .team-card__role {
        margin: 0 0 0.75rem;
        color: var(--color-accent);
        font-weight: 600;
        font-size: 0.9rem;
      }
      .team-card__bio {
        font-size: 0.9rem;
        color: var(--color-fg-muted);
        margin-bottom: 0.5rem;
        text-align: left;
        line-height: 1.5;
      }
      .team-card__exp {
        font-size: 0.8rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
      }
      .team-card__skills {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 0.4rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      .team-card__skills li {
        font-size: 0.7rem;
        background: var(--color-bg-subtle);
        padding: 0.25rem 0.5rem;
        border-radius: 9999px;
        color: var(--color-fg-muted);
      }
      .faq-section h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .faq-list {
        list-style: none;
        padding: 0;
        margin: 0;
        max-width: 760px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .faq-item {
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        padding: 1.25rem;
      }
      .faq-item h3 {
        margin: 0 0 0.5rem;
        font-size: 1rem;
        color: var(--color-accent);
      }
      .faq-item p {
        margin: 0;
        font-size: 0.9rem;
        color: var(--color-fg-muted);
        line-height: 1.6;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChiSiamoComponent {
  private readonly mockData = inject(MockDataService);

  readonly team$ = this.mockData.team$;
  readonly faq$ = this.mockData.faq$;
}
