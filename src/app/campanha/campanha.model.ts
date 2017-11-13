import {impactosQuantitativosModel} from '../campanha/input-impacto/input-impacto.model';
import { EquipeModel } from './form-equipe/equipe.model';
import { RecompensasModel } from './form-recompensa/recompensa.model';

export interface CampanhaModel {
  _id: string,
  titulo: string,
  orcamento: number,
  moeda: string,
  status: string,
  imagem: string,
  estado: string,
  endereco: string,
  cep: string,
  telefone: string,
  dataInicial: string,
  dataFinal: string,
  link_youtube: string,
  descricao_projeto: string,
  boolRecompensa: boolean,
  usuario: {
    email: string,
    name: string
  },
  categoria: {
    icon: string,
    name: string
  },
  equipe: EquipeModel[],
  recompensas: RecompensasModel [],
  impactos_quantitativos: impactosQuantitativosModel []
}


