import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.nonahisa.novelai",
  appName: "統合小説執筆環境",
  webDir: "dist",
  android: {
    /**
     * 実機のWebViewを、パソコンのChromeから覗けるようにする（chrome://inspect）。
     * 縦書きや日本語入力の不具合は画面写真では分からないので、これが要る。
     * 配布時は false にする。
     */
    webContentsDebuggingEnabled: true,
  },
};

export default config;
