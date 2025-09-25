// For client-side usage (components that use these constants)
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}/graph`
  : "http://localhost:3001/graph";

export const MAX_RETRIES = 3;
export const RETRY_DELAY = 1000;
export const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME || "Rail Route API Tester";
