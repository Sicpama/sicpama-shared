import { MessageType, TemplateType } from '../..';
import { SnsNotificationProviderEnum } from '../../enums/sns-provider.enum';

export interface RegisterSmsTemplateRequestDto {
  providerName: SnsNotificationProviderEnum;
  templateType: TemplateType;
  subType: MessageType;
  name: string;
  content: string;
  code: string;
  metadata?: Record<string, any>;
}

export interface UpdateStoreTemplateConfigRequestDto {
  providerName: SnsNotificationProviderEnum;
  subType: MessageType;
  templateName: string;
  templateCode: string;
}
