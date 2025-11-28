import { Eye, FileText, Plus } from 'lucide-react';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function VendasPage() {
  const vendas = [
    { id: 1, cliente: 'João Silva', produto: 'Serviço de Consultoria', valor: 'R$ 1.200,00', data: '15/03/2024', status: 'pago' },
    { id: 2, cliente: 'Maria Santos', produto: 'Produto X', valor: 'R$ 450,00', data: '14/03/2024', status: 'pendente' },
    { id: 3, cliente: 'Pedro Oliveira', produto: 'Serviço de Design', valor: 'R$ 800,00', data: '13/03/2024', status: 'pago' },
  ];

  return (
    <div className={styles.vendas}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Vendas</h1>
          <p className={styles.subtitle}>Acompanhe todas as suas vendas</p>
        </div>
        <Button variant="primary" size="lg">
          <Plus size={20} /> Nova Venda
        </Button>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Total do Mês</span>
          <span className={styles.statValue}>R$ 12.450,00</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Vendas Realizadas</span>
          <span className={styles.statValue}>42</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Ticket Médio</span>
          <span className={styles.statValue}>R$ 296,43</span>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Produto/Serviço</th>
              <th>Valor</th>
              <th>Data</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {vendas.map((venda) => (
              <tr key={venda.id}>
                <td>{venda.cliente}</td>
                <td>{venda.produto}</td>
                <td>{venda.valor}</td>
                <td>{venda.data}</td>
                <td>
                  <span className={`${styles.status} ${styles[venda.status]}`}>
                    {venda.status}
                  </span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.actionBtn} title="Visualizar">
                      <Eye size={18} />
                    </button>
                    <button className={styles.actionBtn} title="Documento">
                      <FileText size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

