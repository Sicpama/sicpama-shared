export interface KdsMenuAndRequiredQuantitiesDto {
  menuId: number;
  requiredQuantity: number;
}

export interface KdsInventoryDto {
  inventoryName: string;
  storeId: number;
  menuAndMenuQuantities: KdsMenuAndRequiredQuantitiesDto[];
}

export interface KdsPostInventoryDto extends KdsInventoryDto {
  setQuantity: number; // setQuantity, used for stock take
}

export interface KdsPutMenuToInventoryItemDto extends KdsMenuAndRequiredQuantitiesDto {
  id: number;
}

export interface KdsPutInventoryDto extends KdsInventoryDto {
  id: number;
  setQuantity?: number; // setQuantity, used for stock take
  updateQuantity?: number; // updateQuantity, used for restocking and adjustment
  menuAndMenuQuantities: KdsPutMenuToInventoryItemDto[];
}
