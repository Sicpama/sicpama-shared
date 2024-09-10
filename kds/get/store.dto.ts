import { MessageType, Nullable, PaymentGatewayInfo, ReceiptPrinter } from '../..';

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
  isOpen?: boolean;
  snsNotificationTemplate?: Nullable<Record<MessageType, string>>;
  paymentGatewayInfo?: Nullable<PaymentGatewayInfo>;
}

export interface KdsStoreAttributeResDto {
  id: number;
  name: string;
  value: string;
}

export interface KdsStoreResDto extends KdsStoreDetailsResDto {
  attributes: KdsStoreAttributeResDto[];
  receiptPrinters?: ReceiptPrinter[];
}
