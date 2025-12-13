/**
 * Base44 client shim for the exported UI.
 * Replace this with your real backend integration later.
 */
export const base44 = {
  auth: {
    async me() {
      return null;
    },
    async updateMe(patch) {
      return { ...(patch || {}) };
    },
    async signIn() {
      return { ok: true };
    },
    async signOut() {
      return { ok: true };
    },
  },
  entities: {
    RecyclingActivity: {
      async list() {
        return [];
      },
      async create(data) {
        return { id: String(Date.now()), ...data };
      },
      async delete() {
        return { ok: true };
      },
    },
  },
};
