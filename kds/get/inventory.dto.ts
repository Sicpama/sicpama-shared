export interface KdsInventoryMenuAndMenuQuantities {
  id: number;
  menuId: number;
  menuName: string;
  requiredQuantity: number;
}

export interface KdsInventoryDomain {
  id: number;
  name: string;
  quantity: number;
  storeId: number;
  menuAndMenuQuantities: KdsInventoryMenuAndMenuQuantities[];
}
