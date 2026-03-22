export enum InstanceConnectionStatus {
  open = 'open',
  close = 'close',
  connecting = 'connecting',
}

export enum DeviceMessage {
  ios = 'ios',
  android = 'android',
  web = 'web',
  unknown = 'unknown',
  desktop = 'desktop',
}

export enum SessionStatus {
  opened = 'opened',
  closed = 'closed',
  paused = 'paused',
}

export enum TriggerType {
  all = 'all',
  keyword = 'keyword',
  none = 'none',
  advanced = 'advanced',
}

export enum TriggerOperator {
  contains = 'contains',
  equals = 'equals',
  startsWith = 'startsWith',
  endsWith = 'endsWith',
  regex = 'regex',
}

export enum OpenaiBotType {
  assistant = 'assistant',
  chatCompletion = 'chatCompletion',
}

export enum DifyBotType {
  chatBot = 'chatBot',
  textGenerator = 'textGenerator',
  agent = 'agent',
  workflow = 'workflow',
}
