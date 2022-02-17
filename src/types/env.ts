type ApaaSEnv = {
  isPreview: boolean;
  isWeChat: boolean;
  isWxWork: boolean;
  appCode: boolean;
  appVersion: boolean;
  wxAgentConfig(jsApiList: string[]): Promise<void>;
}

export default ApaaSEnv;