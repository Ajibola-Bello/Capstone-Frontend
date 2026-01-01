import { CONFIG } from "../config/config.js";

export async function checkBackend() {
  const response = await fetch(`${CONFIG.API_BASE_URL}/health`);
  return response.json();
}
