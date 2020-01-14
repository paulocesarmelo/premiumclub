export const PremiumClubCategories = {
  '18': 'Buffets, Bares e Restaurantes',
  '33': 'Mídias',
  '21': 'Roupas/Sapatos/Acessórios',
  '28': 'Estética automotiva',
  '27': 'Oficinas Mecânicas',
  '26': 'Postos de combustível',
  '38': 'Prestadores de serviços',
  '39': 'Clubes',
  '24': 'Lojas e Concessionárias de Veículos',
  '40': 'Salgados e Doces',
  '41': 'Segurança Privada',
  '29': 'Lanternagem e Pintura',
  '44': 'Aviação',
  '13': 'Saúde e Estética',
  '45': 'Consultoria Empresarial',
  '36': 'Performance e Automobilismo',
  '46': 'Tecnologia da Informação',
  '32': 'Bebidas',
  '47': 'Náutica',
  '42': 'Pneus e Rodas',
  '0': 'Todas'
};

export default class PremiumClubPartner {
  id_parceiro: string;
  nome: string;
  imagem: string;
  contato: string;
  localizacao: string;
  beneficio: string;
  categoria: string;
  link: string;

  constructor(obj?: any) {
    if (!obj) return;
    const {id_parceiro, nome, imagem, contato, localizacao, beneficio, categoria, link} = obj;

    this.id_parceiro = id_parceiro;
    this.nome = nome;
    this.imagem = imagem;
    this.contato = contato;
    this.localizacao = localizacao;
    this.beneficio = beneficio;
    this.categoria = categoria;
    this.link = link;
  }

  getImage() {
    return this.imagem ? `http://www.premiumclubgo.com.br/uploads/${this.imagem}` : '';
  }


}
