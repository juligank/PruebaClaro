import { Characteristics} from './characteristics.model';

export interface Versions3 {
    characteristics: Characteristics[];
    markup: number;
    price: {
      amount: number;
      units: {
        code: string;
        name: string;
      }
    };
    percentage: number;
    name: string;
    id: string;
    plaId: string;
    popType: string;
    frequency: string;
  }