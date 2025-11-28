import styles from './page.module.css';

export default function FinanceiroPage() {
  return (
    <div className={styles.financeiro}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Financeiro</h1>
          <p className={styles.subtitle}>Controle completo das suas finanças</p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Receitas</span>
          <span className={styles.statValue}>R$ 45.230,00</span>
          <span className={styles.statChange}>↑ 12.5%</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Despesas</span>
          <span className={styles.statValue}>R$ 18.450,00</span>
          <span className={styles.statChange}>↓ 5.2%</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Saldo</span>
          <span className={styles.statValue}>R$ 26.780,00</span>
          <span className={styles.statChange}>↑ 18.3%</span>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Últimas Transações</h2>
          <div className={styles.transactions}>
            {[
              { tipo: 'receita', descricao: 'Venda - João Silva', valor: 'R$ 1.200,00', data: '15/03/2024' },
              { tipo: 'despesa', descricao: 'Fornecedor X', valor: 'R$ 450,00', data: '14/03/2024' },
              { tipo: 'receita', descricao: 'Venda - Maria Santos', valor: 'R$ 800,00', data: '13/03/2024' },
            ].map((trans, index) => (
              <div key={index} className={styles.transaction}>
                <div className={styles.transactionInfo}>
                  <span className={styles.transactionDesc}>{trans.descricao}</span>
                  <span className={styles.transactionDate}>{trans.data}</span>
                </div>
                <span className={`${styles.transactionValue} ${styles[trans.tipo]}`}>
                  {trans.tipo === 'receita' ? '+' : '-'} {trans.valor}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Categorias de Despesas</h2>
          <div className={styles.categories}>
            {[
              { nome: 'Fornecedores', valor: 'R$ 8.200,00', porcentagem: 44 },
              { nome: 'Marketing', valor: 'R$ 4.500,00', porcentagem: 24 },
              { nome: 'Infraestrutura', valor: 'R$ 3.750,00', porcentagem: 20 },
              { nome: 'Outros', valor: 'R$ 2.000,00', porcentagem: 12 },
            ].map((cat, index) => (
              <div key={index} className={styles.category}>
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryName}>{cat.nome}</span>
                  <span className={styles.categoryValue}>{cat.valor}</span>
                </div>
                <div className={styles.categoryBar}>
                  <div
                    className={styles.categoryBarFill}
                    style={{ width: `${cat.porcentagem}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

