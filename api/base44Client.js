// Minimal Base44 client shim for static/preview builds.
// Replace with real API calls when you wire a backend.
export const base44 = {
  auth: {
    async me() {
      // Try to read a mocked user from localStorage for demos.
      if (typeof window !== "undefined") {
        try {
          const raw = window.localStorage.getItem("base44_user");
          if (raw) return JSON.parse(raw);
        } catch {}
      }
      return { id: "demo", role: "user", onboarding_completed: false };
    },
    async signOut() {
      if (typeof window !== "undefined") {
        try { window.localStorage.removeItem("base44_user"); } catch {}
      }
      return true;
    }
  },

  // Generic table-like API used by some Base44 exports; keep it permissive.
  async get() { return []; },
  async list() { return []; },
  async create() { return {}; },
  async update() { return {}; },
  async remove() { return true; }
};
