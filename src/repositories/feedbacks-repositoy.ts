// Esse arquivo só diz ao código as operações que são possíveis fazer

export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbackRepository {
  create: (data: FeedbackCreateData) => Promise<void>; // Como se está usando essa função como assíncrona, é necessário colocar o Promisse
}