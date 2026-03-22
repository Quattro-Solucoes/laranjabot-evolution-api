import { DifyBotType } from '@api/types/db-enums';

import { BaseChatbotDto, BaseChatbotSettingDto } from '../../base-chatbot.dto';

export class DifyDto extends BaseChatbotDto {
  botType?: DifyBotType;
  apiUrl?: string;
  apiKey?: string;
}

export class DifySettingDto extends BaseChatbotSettingDto {
  difyIdFallback?: string;
}
