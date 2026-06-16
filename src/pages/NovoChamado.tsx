import React, { useState } from 'react';
import { useNavigation } from '../contexts/NavigationContext';

const categories = ['Informática/TI', 'Elétrica', 'Predial', 'Segurança', 'Telecom', 'Outros'];
const priorities = [
  { value: 'baixa', label: 'Baixa', color: 'text-slate-500', dot: 'bg-slate-400' },
  { value: 'media', label: 'Média', color: 'text-blue-500', dot: 'bg-blue-400' },
  { value: 'alta', label: 'Alta', color: 'text-orange-600', dot: 'bg-orange-500' },
  { value: 'critica', label: 'Crítica', color: 'text-error', dot: 'bg-error' },
];

export function NovoChamado() {
  const { navigate } = useNavigation();
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    priority: 'media',
    location: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate('meus-chamados');
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-6">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <span className="material-symbols-outlined text-5xl text-green-600">check_circle</span>
        </div>
        <h2 className="text-headline-lg font-bold text-primary text-center">Chamado criado com sucesso!</h2>
        <p className="text-body-md text-on-surface-variant text-center">
          Seu chamado foi registrado. Redirecionando para Meus Chamados...
        </p>
        <div className="w-48 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-[progress_2s_linear_forwards]" style={{ animation: 'progress 2s linear forwards' }} />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-stack-lg max-w-2xl">
      {/* Page Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('meus-chamados')}
          className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-on-surface-variant"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div>
          <h2 className="text-headline-lg font-bold text-primary">Novo Chamado</h2>
          <p className="text-body-md text-on-surface-variant">
            Preencha as informações abaixo para abrir um novo chamado de suporte.
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
        {/* Header da seção */}
        <div className="p-stack-lg border-b border-outline-variant bg-surface-container-low">
          <h3 className="text-headline-md font-bold text-primary">Informações do Chamado</h3>
          <p className="text-caption text-on-surface-variant mt-1">Todos os campos marcados com * são obrigatórios.</p>
        </div>

        <div className="p-stack-lg space-y-5">
          {/* Título */}
          <div>
            <label className="block text-label-md font-bold text-on-surface mb-1.5">
              Título do Chamado <span className="text-error">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="Descreva brevemente o problema..."
              className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/50"
            />
          </div>

          {/* Categoria + Prioridade */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-label-md font-bold text-on-surface mb-1.5">
                Categoria <span className="text-error">*</span>
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer"
              >
                <option value="">Selecione uma categoria</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-label-md font-bold text-on-surface mb-1.5">
                Prioridade <span className="text-error">*</span>
              </label>
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer"
              >
                {priorities.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Localização */}
          <div>
            <label className="block text-label-md font-bold text-on-surface mb-1.5">
              Localização / Setor
            </label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Ex.: Bloco B, Sala 04, Recepção..."
              className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/50"
            />
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-label-md font-bold text-on-surface mb-1.5">
              Descrição Detalhada <span className="text-error">*</span>
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Descreva o problema com mais detalhes, incluindo quando começou, com que frequência ocorre, e qualquer informação relevante..."
              className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/50 resize-none"
            />
          </div>

          {/* Priority Visual Preview */}
          {form.priority && (
            <div className="bg-surface-container-low rounded-lg p-4 border border-outline-variant flex items-start gap-3">
              <span className="material-symbols-outlined text-on-surface-variant mt-0.5">info</span>
              <div>
                <p className="text-label-md font-bold text-on-surface">Prioridade Selecionada</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`w-2 h-2 rounded-full ${priorities.find(p => p.value === form.priority)?.dot}`}></span>
                  <span className={`text-body-md font-bold ${priorities.find(p => p.value === form.priority)?.color}`}>
                    {priorities.find(p => p.value === form.priority)?.label}
                  </span>
                </div>
                {form.priority === 'critica' && (
                  <p className="text-caption text-error mt-1">⚠ Chamados críticos são escalados imediatamente para a equipe de plantão.</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="p-stack-lg border-t border-outline-variant bg-surface-container-low flex flex-col sm:flex-row gap-3 justify-end">
          <button
            type="button"
            onClick={() => navigate('meus-chamados')}
            className="px-6 py-2.5 border border-outline-variant rounded-lg text-body-md hover:bg-surface-container-high transition-colors font-bold"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-lg font-bold hover:opacity-90 transition-opacity text-body-md"
          >
            <span className="material-symbols-outlined">send</span>
            Abrir Chamado
          </button>
        </div>
      </form>
    </div>
  );
}
