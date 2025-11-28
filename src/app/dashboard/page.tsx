import { 
  BarChart3, 
  DollarSign, 
  Users, 
  TrendingUp, 
  FileText, 
  CreditCard, 
  Settings,
  ArrowUp
} from 'lucide-react';
import styles from './page.module.css';

export default function DashboardPage() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles.subtitle}>Visão geral do seu negócio</p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.actionButton}>
            <BarChart3 size={18} /> Relatório
          </button>
          <button className={styles.actionButton}>
            <Settings size={18} /> Configurações
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <DollarSign size={24} className={styles.statIcon} />
            <span className={styles.statLabel}>Receita Total</span>
          </div>
          <div className={styles.statValue}>R$ 45.230,00</div>
          <div className={styles.statChange}>
            <span className={styles.positive}>
              <ArrowUp size={14} /> 12.5%
            </span>
            <span className={styles.statPeriod}>vs mês anterior</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <BarChart3 size={24} className={styles.statIcon} />
            <span className={styles.statLabel}>Vendas</span>
          </div>
          <div className={styles.statValue}>142</div>
          <div className={styles.statChange}>
            <span className={styles.positive}>
              <ArrowUp size={14} /> 8.2%
            </span>
            <span className={styles.statPeriod}>vs mês anterior</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <Users size={24} className={styles.statIcon} />
            <span className={styles.statLabel}>Clientes</span>
          </div>
          <div className={styles.statValue}>89</div>
          <div className={styles.statChange}>
            <span className={styles.positive}>
              <ArrowUp size={14} /> 5.7%
            </span>
            <span className={styles.statPeriod}>novos este mês</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <TrendingUp size={24} className={styles.statIcon} />
            <span className={styles.statLabel}>Crescimento</span>
          </div>
          <div className={styles.statValue}>+18.3%</div>
          <div className={styles.statChange}>
            <span className={styles.positive}>
              <ArrowUp size={14} /> 3.1%
            </span>
            <span className={styles.statPeriod}>vs mês anterior</span>
          </div>
        </div>
      </div>

      {/* Charts and Tables */}
      <div className={styles.contentGrid}>
        <div className={styles.chartCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Receita Mensal</h2>
            <select className={styles.select}>
              <option>Últimos 6 meses</option>
              <option>Últimos 12 meses</option>
            </select>
          </div>
          <div className={styles.chartPlaceholder}>
            <div className={styles.chartBars}>
              {[65, 80, 45, 90, 70, 85].map((height, index) => (
                <div key={index} className={styles.barContainer}>
                  <div
                    className={styles.bar}
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className={styles.chartLabels}>
              <span>Jan</span>
              <span>Fev</span>
              <span>Mar</span>
              <span>Abr</span>
              <span>Mai</span>
              <span>Jun</span>
            </div>
          </div>
        </div>

        <div className={styles.chartCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Vendas por Categoria</h2>
          </div>
          <div className={styles.pieChart}>
            <div className={styles.pieSegment} style={{ '--percentage': '40%' } as React.CSSProperties}>
              <div className={styles.pieLabel}>Produtos</div>
              <div className={styles.pieValue}>40%</div>
            </div>
            <div className={styles.pieSegment} style={{ '--percentage': '35%' } as React.CSSProperties}>
              <div className={styles.pieLabel}>Serviços</div>
              <div className={styles.pieValue}>35%</div>
            </div>
            <div className={styles.pieSegment} style={{ '--percentage': '25%' } as React.CSSProperties}>
              <div className={styles.pieLabel}>Outros</div>
              <div className={styles.pieValue}>25%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className={styles.activityCard}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Atividades Recentes</h2>
          <button className={styles.viewAllButton}>Ver todas</button>
        </div>
        <div className={styles.activityList}>
          {[
            { icon: DollarSign, title: 'Nova venda realizada', time: '2 horas atrás', amount: 'R$ 450,00' },
            { icon: Users, title: 'Novo cliente cadastrado', time: '5 horas atrás', amount: '' },
            { icon: FileText, title: 'Documento enviado', time: '1 dia atrás', amount: '' },
            { icon: CreditCard, title: 'Pagamento recebido', time: '2 dias atrás', amount: 'R$ 1.200,00' },
            { icon: BarChart3, title: 'Relatório gerado', time: '3 dias atrás', amount: '' },
          ].map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div key={index} className={styles.activityItem}>
                <div className={styles.activityIcon}>
                  <IconComponent size={24} />
                </div>
                <div className={styles.activityContent}>
                  <div className={styles.activityTitle}>{activity.title}</div>
                  <div className={styles.activityTime}>{activity.time}</div>
                </div>
                {activity.amount && (
                  <div className={styles.activityAmount}>{activity.amount}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

