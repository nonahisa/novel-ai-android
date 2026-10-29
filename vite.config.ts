import { defineConfig } from "vite";

/**
 * 開発中の3段階の確かめ方（設計メモ「テストの3段階」）を、この設定で支える。
 *
 * 1. パソコンのブラウザ  … `npm run dev` → http://localhost:5173
 * 2. スマホのブラウザ    … 同じWi-Fiから http://<パソコンのIP>:5173
 *                          ビルドもインストールも要らず、指で触れる。
 *                          日本語入力と縦書きの確認はここでやる
 * 3. APK                 … `npm run android`
 *
 * `host: true` が2段階目の肝。既定（localhost限定）のままだと、
 * スマホからは決してつながらない。
 */
export default defineConfig({
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  build: {
    // AndroidのWebViewはPlayストア経由で更新されるので、
    // minSdk 24（Android 7）でも新しい文法が使える
    target: "es2022",
  },
});
