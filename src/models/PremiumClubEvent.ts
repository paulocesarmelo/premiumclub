export default class PremiumClubEvent {
  id_evento: string;
  nome: string;
  data: string;
  descricao: string;
  parceiro: string;
  logo: string;
  url: string;

  constructor(obj?: any) {
    if (!obj) return;
    const {id_evento, nome, data, descricao, parceiro, logo, url} = obj;

    this.id_evento = id_evento;
    this.nome = nome;
    this.data = data;
    this.descricao = descricao;
    this.parceiro = parceiro;
    this.logo = logo;
    this.url = url;
  }

  getImage() {
    return this.logo ? `http://www.premiumclubgo.com.br/uploads/${this.logo}` : '';
  }

  getUrl() {
    return this.url ? `http://www.premiumclubgo.com.br/eventos/${this.url}` : '';
  }

}
