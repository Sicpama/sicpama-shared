interface KdsMenuSaleDto {
  ranking: number;
  category: string;
  name: string;
  salesVolumeShareRatio: number;
  quantity: number;
  sales: number;
}

export interface KdsStoreSalesResDto {
  totalSales: number;
  fees: number;
  vat: number;
  sicpamaFees: number;
  netDeposit: number;
  menuSales: KdsMenuSaleDto[];
  totalPageMenuSales: number;
}
