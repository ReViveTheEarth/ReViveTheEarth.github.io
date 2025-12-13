// Minimal Base44 client shim for non-Base44 hosting (e.g., Vercel/Next.js).
// It provides the methods used by this project so the UI can run.

let _user = {
  id: "demo-user",
  email: "demo@revive.earth",
  full_name: "Demo User",
  total_recycled: 0
};

let _records = [];

function delay(ms = 50) {
  return new Promise((r) => setTimeout(r, ms));
}

export const base44 = {
  auth: {
    async me() {
      // Return a demo user so pages render.
      await delay();
      return _user;
    },
    async updateMe(patch) {
      await delay();
      _user = { ..._user, ...patch };
      return _user;
    },
    redirectToLogin() {
      // In a real Base44 app, this would redirect to the Base44 auth flow.
      // Here we keep it simple.
      if (typeof window !== "undefined") {
        window.alert("Login is not configured on this deployment. (Demo mode)");
      }
    },
    async logout() {
      await delay();
      _user = null;
      return true;
    }
  },
  entities: {
    RecyclingRecord: {
      async list() {
        await delay();
        return _records;
      },
      async create(record) {
        await delay();
        const newRec = { id: String(Date.now()), created_at: new Date().toISOString(), ...record };
        _records = [newRec, ..._records];
        return newRec;
      },
      async delete(id) {
        await delay();
        _records = _records.filter((r) => r.id !== id);
        return true;
      }
    }
  }
};
