import { Eye, Edit, Trash2, Plus } from 'lucide-react';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function ClientesPage() {
  const clientes = [
    { id: 1, nome: 'João Silva', email: 'joao@email.com', telefone: '(11) 99999-9999', totalVendas: 'R$ 5.400,00' },
    { id: 2, nome: 'Maria Santos', email: 'maria@email.com', telefone: '(11) 88888-8888', totalVendas: 'R$ 3.200,00' },
    { id: 3, nome: 'Pedro Oliveira', email: 'pedro@email.com', telefone: '(11) 77777-7777', totalVendas: 'R$ 8.100,00' },
  ];

  return (
    <div className={styles.clientes}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Clientes</h1>
          <p className={styles.subtitle}>Gerencie sua base de clientes</p>
        </div>
        <Button variant="primary" size="lg">
          <Plus size={20} /> Novo Cliente
        </Button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Total em Vendas</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.totalVendas}</td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.actionBtn} title="Visualizar">
                      <Eye size={18} />
                    </button>
                    <button className={styles.actionBtn} title="Editar">
                      <Edit size={18} />
                    </button>
                    <button className={styles.actionBtn} title="Excluir">
                      <Trash2 size={18} />
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

