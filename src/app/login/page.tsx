'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { BarChart3, DollarSign, TrendingUp, User, Mail, Lock } from 'lucide-react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import styles from './page.module.css';

function LoginForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const modeParam = searchParams.get('mode');
    if (modeParam === 'signup') {
      setMode('signup');
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (mode === 'signup' && !formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }

    if (mode === 'signup') {
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'As senhas não coincidem';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simular login/cadastro
      console.log(mode === 'login' ? 'Login' : 'Cadastro', formData);
      router.push('/dashboard');
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <div className={styles.leftPanel}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/images/MEIflow-logo.png"
              alt="MEIFlow Logo"
              width={60}
              height={60}
              className={styles.logo}
            />
            <div className={styles.logoText}>
              <span className={styles.logoMain}>MEI</span>
              <span className={styles.logoSub}>flow</span>
            </div>
          </Link>
          <div className={styles.illustration}>
            <div className={styles.glowOrb}></div>
            <div className={styles.cards}>
              <div className={styles.card}><BarChart3 size={40} /></div>
              <div className={styles.card}><DollarSign size={40} /></div>
              <div className={styles.card}><TrendingUp size={40} /></div>
            </div>
          </div>
          <p className={styles.tagline}>
            Gestão inteligente para microempreendedores individuais
          </p>
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h1 className={styles.title}>
                {mode === 'login' ? 'Bem-vindo de volta' : 'Criar conta'}
              </h1>
              <p className={styles.subtitle}>
                {mode === 'login'
                  ? 'Entre para continuar gerenciando seu negócio'
                  : 'Comece sua jornada de gestão inteligente'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              {mode === 'signup' && (
                <Input
                  label="Nome completo"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Seu nome"
                  icon={<User size={18} />}
                />
              )}

              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="seu@email.com"
                icon={<Mail size={18} />}
              />

              <Input
                label="Senha"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                placeholder="••••••••"
                icon={<Lock size={18} />}
              />

              {mode === 'signup' && (
                <Input
                  label="Confirmar senha"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  placeholder="••••••••"
                  icon={<Lock size={18} />}
                />
              )}

              {mode === 'login' && (
                <div className={styles.formFooter}>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>Lembrar-me</span>
                  </label>
                  <Link href="#" className={styles.forgotLink}>
                    Esqueceu a senha?
                  </Link>
                </div>
              )}

              <Button type="submit" variant="primary" size="lg" fullWidth>
                {mode === 'login' ? 'Entrar' : 'Criar conta'}
              </Button>
            </form>

            <div className={styles.switchMode}>
              <p>
                {mode === 'login' ? 'Não tem uma conta? ' : 'Já tem uma conta? '}
                <button
                  type="button"
                  className={styles.switchButton}
                  onClick={() => {
                    setMode(mode === 'login' ? 'signup' : 'login');
                    setErrors({});
                    setFormData({
                      name: '',
                      email: '',
                      password: '',
                      confirmPassword: '',
                    });
                  }}
                >
                  {mode === 'login' ? 'Criar conta' : 'Fazer login'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className={styles.loginPage}>
        <div className={styles.container}>
          <div className={styles.rightPanel}>
            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <h1 className={styles.title}>Carregando...</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}

