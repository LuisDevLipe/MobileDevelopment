import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "entrega-final.2",
  webDir: "www",
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    Keyboard: {
      resizeOnFullscreen: true,
    },
    EdgeToEdge: {
      enabled: false,
    },
  },
};

export default config;
