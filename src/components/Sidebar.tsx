'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  LayoutDashboard, 
  Users, 
  DollarSign, 
  CreditCard, 
  FileText, 
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';
import styles from './Sidebar.module.css';

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Clientes', href: '/dashboard/clientes', icon: Users },
  { label: 'Vendas', href: '/dashboard/vendas', icon: DollarSign },
  { label: 'Financeiro', href: '/dashboard/financeiro', icon: CreditCard },
  { label: 'Documentos', href: '/dashboard/documentos', icon: FileText },
  { label: 'Métricas', href: '/dashboard/metricas', icon: TrendingUp },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // Aqui você pode adicionar lógica de logout (limpar tokens, etc.)
    router.push('/login');
  };

  return (
    <aside className={`${styles.sidebar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/MEIflow-logo.png"
            alt="MEIFlow Logo"
            width={40}
            height={40}
            className={styles.logo}
          />
          {isExpanded && (
            <div className={styles.logoText}>
              <span className={styles.logoMain}>MEI</span>
              <span className={styles.logoSub}>flow</span>
            </div>
          )}
        </div>
        <button
          className={styles.toggleButton}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Toggle sidebar"
        >
          {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                >
                  <item.icon size={20} className={styles.navIcon} />
                  {isExpanded && <span className={styles.navLabel}>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={styles.footer}>
        {isExpanded && (
          <div className={styles.userInfo}>
            <div className={styles.userAvatar}>MEI</div>
            <div className={styles.userDetails}>
              <div className={styles.userName}>Usuário MEI</div>
              <div className={styles.userEmail}>usuario@meiflow.com</div>
            </div>
          </div>
        )}
        <button
          className={styles.logoutButton}
          onClick={handleLogout}
          title="Sair"
        >
          <LogOut size={20} className={styles.logoutIcon} />
          {isExpanded && <span className={styles.logoutLabel}>Sair</span>}
        </button>
      </div>
    </aside>
  );
}

