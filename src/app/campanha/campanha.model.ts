import {impactosQuantitativosModel} from '../campanha/input-impacto/input-impacto.model';
import { EquipeModel } from './form-equipe/equipe.model';
import { RecompensasModel } from './form-recompensa/recompensa.model';

export interface CampanhaModel {
  _id: string;
  titulo: string;
  orcamento: number;
  imagem: number;
  estado: string;
  endereco: string;
  cep: string,
  telefone: string,
  sataInicial: string,
  dataFinal: string,
  link_youtube: string,
  descricao_projecto: string,
  usuario: {
    email: string,
    nome: string,
    _id: string
  },
  categoria: {
    icon: string,
    name: string,
    _id: string
  },
  equipe: EquipeModel[],
  recompensas: RecompensasModel [],
  impactos_quantitativos: impactosQuantitativosModel []
}


