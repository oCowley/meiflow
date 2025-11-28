import { FileText, Search, Eye, Download, Trash2, FolderPlus, Plus } from 'lucide-react';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function DocumentosPage() {
  const documentos = [
    {
      id: 1,
      nome: 'Contrato de Prestação de Serviços',
      tipo: 'Contrato',
      data: '15/03/2024',
      tamanho: '2.4 MB',
      status: 'ativo',
    },
    {
      id: 2,
      nome: 'Nota Fiscal Eletrônica - 001',
      tipo: 'Nota Fiscal',
      data: '12/03/2024',
      tamanho: '1.8 MB',
      status: 'ativo',
    },
    {
      id: 3,
      nome: 'Declaração Anual do MEI',
      tipo: 'Declaração',
      data: '01/03/2024',
      tamanho: '3.2 MB',
      status: 'ativo',
    },
    {
      id: 4,
      nome: 'Comprovante de Pagamento',
      tipo: 'Comprovante',
      data: '28/02/2024',
      tamanho: '856 KB',
      status: 'ativo',
    },
    {
      id: 5,
      nome: 'Alvará de Funcionamento',
      tipo: 'Alvará',
      data: '20/02/2024',
      tamanho: '1.5 MB',
      status: 'ativo',
    },
  ];

  const tiposDocumentos = [
    { tipo: 'Todos', count: documentos.length },
    { tipo: 'Contratos', count: 1 },
    { tipo: 'Notas Fiscais', count: 1 },
    { tipo: 'Declarações', count: 1 },
    { tipo: 'Comprovantes', count: 1 },
    { tipo: 'Alvarás', count: 1 },
  ];

  return (
    <div className={styles.documentos}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Documentos</h1>
          <p className={styles.subtitle}>Gerencie todos os documentos do seu negócio</p>
        </div>
        <Button variant="primary" size="lg">
          <Plus size={20} /> Novo Documento
        </Button>
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        <div className={styles.filterTabs}>
          {tiposDocumentos.map((item) => (
            <button
              key={item.tipo}
              className={`${styles.filterTab} ${item.tipo === 'Todos' ? styles.active : ''}`}
            >
              {item.tipo} ({item.count})
            </button>
          ))}
        </div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Buscar documentos..."
            className={styles.searchInput}
          />
          <Search size={18} className={styles.searchIcon} />
        </div>
      </div>

      {/* Documents Grid */}
      <div className={styles.documentsGrid}>
        {documentos.map((doc) => (
          <div key={doc.id} className={styles.documentCard}>
            <div className={styles.documentHeader}>
              <div className={styles.documentIcon}>
                <FileText size={32} />
              </div>
              <div className={styles.documentActions}>
                <button className={styles.actionIcon} title="Visualizar">
                  <Eye size={18} />
                </button>
                <button className={styles.actionIcon} title="Download">
                  <Download size={18} />
                </button>
                <button className={styles.actionIcon} title="Excluir">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <div className={styles.documentContent}>
              <h3 className={styles.documentName}>{doc.nome}</h3>
              <div className={styles.documentMeta}>
                <span className={styles.documentType}>{doc.tipo}</span>
                <span className={styles.documentDate}>{doc.data}</span>
              </div>
              <div className={styles.documentFooter}>
                <span className={styles.documentSize}>{doc.tamanho}</span>
                <span className={`${styles.documentStatus} ${styles[doc.status]}`}>
                  {doc.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (commented out, but available if needed) */}
      {documentos.length === 0 && (
        <div className={styles.emptyState}>
          <FolderPlus size={64} className={styles.emptyIcon} />
          <h3 className={styles.emptyTitle}>Nenhum documento encontrado</h3>
          <p className={styles.emptyDescription}>
            Comece adicionando seu primeiro documento
          </p>
          <Button variant="primary">Adicionar Documento</Button>
        </div>
      )}
    </div>
  );
}

