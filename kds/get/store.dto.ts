export interface KdsStoreDetailsResDto {
  id: number;
  countryCode: string;
  currency: string;
  name: string;
  displayName: string;
  color: string | null;
  address: string | null;
  registrationNumber: string;
  coverPhotoKey: string | null;
  phoneNumber: string | null;
  openTime: string | null;
  closeTime: string | null;
  foodCourtId: string | null;
  vendorIds: string[] | null;
}

export interface KdsStoreAttributeResDto {
  id: number;
  name: string;
  value: string;
}

export interface KdsThermalPrinter {
  vendorId: number;
}

export interface KdsStoreResDto extends KdsStoreDetailsResDto {
  attributes: KdsStoreAttributeResDto[];
  receiptPrinters?: KdsThermalPrinter[];
}
