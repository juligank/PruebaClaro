import { Characteristics} from './characteristics.model';
import { ProductOfferingPrices} from './productOfferingPrices.model';

export interface Versions {
    characteristics: Characteristics[];
    productOfferingPrices: ProductOfferingPrices[];
    name: string;
    id: string;
  }