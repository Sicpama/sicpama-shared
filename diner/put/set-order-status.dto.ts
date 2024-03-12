import { OrderStatus } from 'submodules/sicpama-shared';

export interface DinerSetOrderStatusBodyDto {
  status: OrderStatus;
  phoneNumber?: string;
  isMarketingAgreed?: boolean;
  isTermsAgreed?: boolean;
}
