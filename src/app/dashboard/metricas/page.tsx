'use client';

import { useState } from 'react';
import { TrendingUp, Clock, RefreshCw, Briefcase, ArrowUp, ArrowDown } from 'lucide-react';
import styles from './page.module.css';

export default function MetricasPage() {
  const revenueData = [
    { month: 'Jan', value: 12500, label: 'R$ 12.500' },
    { month: 'Fev', value: 18500, label: 'R$ 18.500' },
    { month: 'Mar', value: 15200, label: 'R$ 15.200' },
    { month: 'Abr', value: 22400, label: 'R$ 22.400' },
    { month: 'Mai', value: 19800, label: 'R$ 19.800' },
    { month: 'Jun', value: 28500, label: 'R$ 28.500' },
    { month: 'Jul', value: 31200, label: 'R$ 31.200' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const maxValue = Math.max(...revenueData.map(d => d.value));
  const minValue = Math.min(...revenueData.map(d => d.value));
  const range = maxValue - minValue;

  const getYPosition = (value: number) => {
    return 100 - ((value - minValue) / range) * 85;
  };

  const getPathD = () => {
    const points = revenueData.map((data, index) => {
      const x = (index / (revenueData.length - 1)) * 100;
      const y = getYPosition(data.value);
      return `${x},${y}`;
    });
    return `M ${points.join(' L ')}`;
  };

  const getAreaPathD = () => {
    const points = revenueData.map((data, index) => {
      const x = (index / (revenueData.length - 1)) * 100;
      const y = getYPosition(data.value);
      return `${x},${y}`;
    });
    const firstX = 0;
    const lastX = 100;
    return `M ${firstX},100 L ${points.join(' L ')} L ${lastX},100 Z`;
  };

  return (
    <div className={styles.metricas}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Métricas</h1>
          <p className={styles.subtitle}>Análise detalhada do desempenho do seu negócio</p>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <TrendingUp size={24} className={styles.metricIcon} />
            <span className={styles.metricLabel}>Taxa de Conversão</span>
          </div>
          <div className={styles.metricValue}>24.5%</div>
          <div className={styles.metricChange}>
            <ArrowUp size={14} /> 3.2% vs mês anterior
          </div>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <Clock size={24} className={styles.metricIcon} />
            <span className={styles.metricLabel}>Tempo Médio de Resposta</span>
          </div>
          <div className={styles.metricValue}>2.4h</div>
          <div className={styles.metricChange}>
            <ArrowDown size={14} /> 15% vs mês anterior
          </div>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <RefreshCw size={24} className={styles.metricIcon} />
            <span className={styles.metricLabel}>Taxa de Retenção</span>
          </div>
          <div className={styles.metricValue}>87%</div>
          <div className={styles.metricChange}>
            <ArrowUp size={14} /> 5.1% vs mês anterior
          </div>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <Briefcase size={24} className={styles.metricIcon} />
            <span className={styles.metricLabel}>Clientes Ativos</span>
          </div>
          <div className={styles.metricValue}>89</div>
          <div className={styles.metricChange}>
            <ArrowUp size={14} /> 12 novos este mês
          </div>
        </div>
      </div>

      <div className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h2 className={styles.chartTitle}>Evolução de Receitas</h2>
            <div className={styles.chartStats}>
              <div className={styles.chartStat}>
                <span className={styles.chartStatLabel}>Total</span>
                <span className={styles.chartStatValue}>R$ 149.100</span>
              </div>
              <div className={styles.chartStat}>
                <span className={styles.chartStatLabel}>Crescimento</span>
                <span className={styles.chartStatValue}>+149%</span>
              </div>
            </div>
          </div>
          <div className={styles.chartContainer}>
            <div className={styles.chartWrapper}>
              <svg className={styles.chartSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Grid lines */}
                {[0, 25, 50, 75, 100].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="100"
                    y2={y}
                    className={styles.gridLine}
                  />
                ))}
                
                {/* Area fill */}
                <path
                  d={getAreaPathD()}
                  className={styles.areaPath}
                  fill="url(#areaGradient)"
                />
                
                {/* Line */}
                <path
                  d={getPathD()}
                  className={styles.linePath}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="0.5"
                />
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-primary)" />
                    <stop offset="100%" stopColor="var(--color-primary-light)" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Data points */}
              <div className={styles.dataPoints}>
                {revenueData.map((data, index) => {
                  const x = (index / (revenueData.length - 1)) * 100;
                  const y = getYPosition(data.value);
                  const isHovered = hoveredIndex === index;
                  
                  return (
                    <div
                      key={index}
                      className={styles.dataPointWrapper}
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className={`${styles.dataPoint} ${isHovered ? styles.hovered : ''}`}>
                        {isHovered && (
                          <div className={styles.tooltip}>
                            <div className={styles.tooltipValue}>{data.label}</div>
                            <div className={styles.tooltipMonth}>{data.month}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* X-axis labels */}
              <div className={styles.xAxis}>
                {revenueData.map((data, index) => (
                  <div
                    key={index}
                    className={styles.xAxisLabel}
                    style={{ left: `${(index / (revenueData.length - 1)) * 100}%` }}
                  >
                    {data.month}
                  </div>
                ))}
              </div>
              
              {/* Y-axis labels */}
              <div className={styles.yAxis}>
                {[0, 25, 50, 75, 100].map((percent) => {
                  const value = minValue + (range * (100 - percent) / 100);
                  return (
                    <div
                      key={percent}
                      className={styles.yAxisLabel}
                      style={{ bottom: `${percent}%` }}
                    >
                      R$ {(value / 1000).toFixed(0)}k
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>Distribuição de Vendas</h2>
          <div className={styles.distributionChart}>
            <div className={styles.distItem}>
              <span className={styles.distLabel}>Manhã</span>
              <div className={styles.distBar}>
                <div className={styles.distBarFill} style={{ width: '35%' }}></div>
              </div>
              <span className={styles.distValue}>35%</span>
            </div>
            <div className={styles.distItem}>
              <span className={styles.distLabel}>Tarde</span>
              <div className={styles.distBar}>
                <div className={styles.distBarFill} style={{ width: '45%' }}></div>
              </div>
              <span className={styles.distValue}>45%</span>
            </div>
            <div className={styles.distItem}>
              <span className={styles.distLabel}>Noite</span>
              <div className={styles.distBar}>
                <div className={styles.distBarFill} style={{ width: '20%' }}></div>
              </div>
              <span className={styles.distValue}>20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

