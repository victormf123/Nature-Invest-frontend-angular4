export interface DestaqueModel {
    _id: string,
    titulo: string,
    orcamento: number,
    moeda: string,
    imagem: string,
    estado: string,
    dataInicial: string,
    dataFinal: string,
    descricao_projeto: string,
    usuario: {
      email: string,
      name: string
    },
    categoria: {
      icon: string,
      name: string
    }
  }