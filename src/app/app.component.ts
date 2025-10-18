import { Component, signal, computed, OnInit } from '@angular/core';

type LeitoStatus = 'LIVRE' | 'OCUPADO' | 'MANUTENCAO';
interface Leito { id: string; ala: string; status: LeitoStatus; }

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dashboard de Ocupação de Leitos';

  leitos = signal<Leito[]>([]);
  ocupados = computed(() => this.leitos().filter(l => l.status === 'OCUPADO').length);
  livres = computed(() => this.leitos().filter(l => l.status === 'LIVRE').length);
  manutencao = computed(() => this.leitos().filter(l => l.status === 'MANUTENCAO').length);
  total = computed(() => this.leitos().length);
  taxaOcupacao = computed(() => this.total() ? Math.round((this.ocupados() / this.total()) * 100) : 0);

  async ngOnInit() {
    const resp = await fetch('assets/mock-data.json');
    const data = await resp.json();
    this.leitos.set(data.leitos);

    // Opcional se rodar localmente: gráfico com Chart.js
    // import('chart.js/auto').then(({ default: Chart }) => { ... });
  }
}