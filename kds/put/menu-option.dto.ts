import { Nullable } from '../../types/nullable.type';

export interface KdsCreateMenuOptionChoiceDto {
  name: string;
  description: Nullable<string>;
  price: number;
}

export interface KdsCreateMenuOptionDto {
  name: string;
  description: Nullable<string>;
  isMultipleChoice: boolean;
  minChoices: number;
  maxChoices: number;
  required: boolean;
  menuOptionChoices: KdsCreateMenuOptionChoiceDto[];
}
