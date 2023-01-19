/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_GOOGLE_AUTH_CLIENT_ID: string
  readonly VITE_GOOGLE_AUTH_CLIENT_SECRET: string
  readonly VITE_CALL_BACK_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
