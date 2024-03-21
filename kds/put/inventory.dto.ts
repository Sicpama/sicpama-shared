import { InventoryTransactionReason } from '../../enums/inventory.enum';

export interface KdsPostMenuAndMenuQuantitiesDto {
  menuId: number;
  requiredQuantity: number;
}

export interface KdsPutMenuAndMenuQuantitiesDto extends KdsPostMenuAndMenuQuantitiesDto {
  id: number;
}

export interface KdsPostInventoryDto {
  inventoryName: string;
  storeId: number;
  currentQuantity: number;
  menuAndMenuQuantities: KdsPostMenuAndMenuQuantitiesDto[];
}

export interface KdsPutInventoryDto {
  id: number;
  inventoryName: string;
  currentQuantity?: number;
  quantityChange?: number;
  reason: InventoryTransactionReason;
  storeId: number;
}
