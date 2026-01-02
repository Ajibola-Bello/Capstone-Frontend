import { checkBackend } from "./api.js";

const statusEl = document.getElementById("status");
const messageEl = document.getElementById("message");

async function init() {
  try {
    const data = await checkBackend();
    statusEl.textContent = "Hello World 👋";
    messageEl.textContent = data.message;
  } catch {
    statusEl.textContent = "Connection Failed ❌";
    messageEl.textContent = "Backend not reachable";
  }
}

init();
