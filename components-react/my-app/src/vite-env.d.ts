/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string; // Declare todas as variáveis de ambiente que você usa
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }