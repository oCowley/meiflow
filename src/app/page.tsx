import Link from 'next/link';
import Image from 'next/image';
import { BarChart3, DollarSign, Users, TrendingUp, FileText, Zap, Check } from 'lucide-react';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.landing}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/MEIflow-logo.png"
              alt="MEIFlow Logo"
              width={50}
              height={50}
              className={styles.logo}
            />
            <span className={styles.logoText}>
              <span className={styles.logoMain}>MEI</span>
              <span className={styles.logoSub}>flow</span>
            </span>
          </div>
          <nav className={styles.nav}>
            <Link href="#features" className={styles.navLink}>
              Recursos
            </Link>
            <Link href="#about" className={styles.navLink}>
              Sobre
            </Link>
            <Link href="/login" className={styles.navLink}>
              Entrar
            </Link>
            <Link href="/login?mode=signup">
              <Button variant="primary">Começar Grátis</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Gestão Inteligente
                <span className={styles.highlight}> para MEIs</span>
              </h1>
              <p className={styles.heroDescription}>
                Simplifique a gestão do seu negócio com uma plataforma desenvolvida
                especialmente para microempreendedores individuais. Controle clientes,
                vendas, finanças e muito mais em um só lugar.
              </p>
              <div className={styles.heroActions}>
                <Link href="/login?mode=signup">
                  <Button variant="primary" size="lg">
                    Começar Agora
                  </Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" size="lg">
                    Conhecer Recursos
                  </Button>
                </Link>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.glowOrb}></div>
              <div className={styles.cardGrid}>
                <div className={styles.card}><BarChart3 size={48} /></div>
                <div className={styles.card}><DollarSign size={48} /></div>
                <div className={styles.card}><Users size={48} /></div>
                <div className={styles.card}><TrendingUp size={48} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Recursos Poderosos</h2>
          <p className={styles.sectionDescription}>
            Tudo que você precisa para gerenciar seu negócio de forma eficiente
          </p>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Users size={48} /></div>
              <h3 className={styles.featureTitle}>Gestão de Clientes</h3>
              <p className={styles.featureDescription}>
                Organize e acompanhe todos os seus clientes em um só lugar
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><DollarSign size={48} /></div>
              <h3 className={styles.featureTitle}>Controle Financeiro</h3>
              <p className={styles.featureDescription}>
                Acompanhe receitas, despesas e tenha controle total das suas finanças
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><BarChart3 size={48} /></div>
              <h3 className={styles.featureTitle}>Dashboard Inteligente</h3>
              <p className={styles.featureDescription}>
                Visualize métricas importantes e tome decisões baseadas em dados
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><FileText size={48} /></div>
              <h3 className={styles.featureTitle}>Documentos</h3>
              <p className={styles.featureDescription}>
                Centralize e organize todos os documentos do seu negócio
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><TrendingUp size={48} /></div>
              <h3 className={styles.featureTitle}>Relatórios</h3>
              <p className={styles.featureDescription}>
                Gere relatórios detalhados sobre o desempenho do seu negócio
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Zap size={48} /></div>
              <h3 className={styles.featureTitle}>Simples e Rápido</h3>
              <p className={styles.featureDescription}>
                Interface intuitiva que você aprende a usar em minutos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>Por que escolher o MEIFlow?</h2>
              <p className={styles.aboutDescription}>
                O MEIFlow é uma plataforma de gestão desenvolvida para atender
                microempreendedores individuais (MEIs) que precisam de uma solução
                simples, acessível e eficiente para organizar suas operações.
              </p>
              <p className={styles.aboutDescription}>
                Diferente dos CRMs tradicionais, muitas vezes caros e complexos, o
                MEIFlow foi projetado para entregar praticidade, baixo custo e alto
                valor agregado. A proposta é facilitar o dia a dia do MEI, apoiar a
                tomada de decisões e contribuir para o crescimento sustentável do seu
                empreendimento.
              </p>
              <div className={styles.benefits}>
                <div className={styles.benefit}>
                  <Check size={20} className={styles.benefitIcon} />
                  <span>Simples e intuitivo</span>
                </div>
                <div className={styles.benefit}>
                  <Check size={20} className={styles.benefitIcon} />
                  <span>Acessível e econômico</span>
                </div>
                <div className={styles.benefit}>
                  <Check size={20} className={styles.benefitIcon} />
                  <span>Focado no MEI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Pronto para transformar sua gestão?</h2>
            <p className={styles.ctaDescription}>
              Comece hoje mesmo e veja a diferença que uma gestão inteligente faz
            </p>
            <Link href="/login?mode=signup">
              <Button variant="primary" size="lg">
                Criar Conta Grátis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <Image
                src="/images/MEIflow-logo.png"
                alt="MEIFlow Logo"
                width={40}
                height={40}
              />
              <span className={styles.footerLogoText}>
                <span>MEI</span>
                <span>flow</span>
              </span>
            </div>
            <p className={styles.footerText}>
              Gestão inteligente para MEIs
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
