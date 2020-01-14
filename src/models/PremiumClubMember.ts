export default class PremiumClubMember {
  id_membro: string;
  nome: string;
  carro: string;
  descricao: string;
  imagem: string;
  url: string;

  constructor(obj?: any) {
    if (!obj) return;
    const {id_membro, carro, nome,descricao, imagem, url} = obj;

    this.id_membro = id_membro;
    this.nome = nome;
    this.carro = carro;
    this.descricao = descricao;
    this.imagem = imagem;
    this.url = url;
  }

  getImage() {
    return this.imagem ? `http://www.premiumclubgo.com.br/uploads/${this.imagem}` : '';
  }

  getUrl() {
    return this.url ? `http://www.premiumclubgo.com.br/membros/${this.url}` : '';
  }

}
