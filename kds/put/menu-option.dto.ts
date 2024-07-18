export interface KdsCreateMenuOptionChoiceDto {
  name: string;
  description?: string;
  price: number;
}

export interface KdsCreateMenuOptionDto {
  name: string;
  description?: string;
  minChoices: number;
  maxChoices: number;
  menuOptionChoices: KdsCreateMenuOptionChoiceDto[];
}
