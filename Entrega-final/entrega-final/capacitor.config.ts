import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.g2l2.entregafinal',
  appName: 'entrega-final.2',
  webDir: 'www',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    Keyboard: {
      resizeOnFullscreen: false,
    },
    EdgeToEdge: {
      // From capacitor docsThe plugin only needs to be installed. 
      // It applies insets to the web view to support edge-to-edge display on Android. 
      // The plugin also provides a method to set the background color of the status bar and navigation bar. 
      // It's recommended to use this method in combination with the Status Bar plugin.
    },
  },
};

export default config;
