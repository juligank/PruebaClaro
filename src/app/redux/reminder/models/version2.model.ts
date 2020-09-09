
import { CharacteristicValues } from './characteristicValues.model';
import { Properties } from './propeties.model';

export interface Versions2 {
    displayValue?: string;
    validFor: {
      startDateTime: string;
    };
    valueType: string;
    name: string;
    id: string;
    type: string;
    characteristicValues: CharacteristicValues[];
    properties: Properties[];
    valueTypeSpecification?: {
      id: string;
    }
    value?: string;
}