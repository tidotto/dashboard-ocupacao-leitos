# Dashboard de Ocupação de Leitos (Angular + Tailwind)

Frontend mockado em **Angular 17 + TailwindCSS** para visualizar ocupação de leitos hospitalares — **sem backend**, dados locais (JSON).
Meu objetivo aqui é mostrar **capricho visual + leitura de dados** (KPIs, gráfico, tabela).

## ✨ O que tem
- **Cards de KPIs**: taxa de ocupação, internados, livres, manutenção
- **Gráfico (Chart.js)**: evolução da ocupação (mock)
- **Tabela responsiva**: lista de leitos com status
- **Dark mode** por padrão (estilo GitHub)

## 🧱 Estrutura
- `src/app/app.component.*` — layout e KPIs a partir do JSON
- `src/assets/mock-data.json` — dados de exemplo
- `tailwind.config.js` + `postcss.config.js` — Tailwind configurado
