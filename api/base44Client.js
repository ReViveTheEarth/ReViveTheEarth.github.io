/**
 * Base44 compatibility client.
 * This project was exported from Base44, but deployed outside Base44.
 * This shim uses browser localStorage so the app can build and run.
 *
 * Replace with a real backend (Supabase/Directus/etc.) when ready.
 */
function safeParse(json, fallback) {
  try { return JSON.parse(json); } catch { return fallback; }
}
function isBrowser() { return typeof window !== "undefined"; }

const KEYS = {
  user: "revive_user",
  activities: "revive_recycling_activities"
};

function getUser() {
  if (!isBrowser()) return { id: "server", total_recycled: 0 };
  const raw = window.localStorage.getItem(KEYS.user);
  return raw ? safeParse(raw, { id: "local", total_recycled: 0 }) : { id: "local", total_recycled: 0 };
}

function setUser(patch) {
  if (!isBrowser()) return getUser();
  const next = { ...getUser(), ...patch };
  window.localStorage.setItem(KEYS.user, JSON.stringify(next));
  return next;
}

function getActivities() {
  if (!isBrowser()) return [];
  const raw = window.localStorage.getItem(KEYS.activities);
  return raw ? safeParse(raw, []) : [];
}

function setActivities(list) {
  if (!isBrowser()) return;
  window.localStorage.setItem(KEYS.activities, JSON.stringify(list));
}

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export const base44 = {
  auth: {
    async me() {
      return getUser();
    },
    async updateMe(patch) {
      return setUser(patch);
    },
    async isAuthenticated() {
      // Treat having a user record as authenticated.
      if (!isBrowser()) return true;
      return !!window.localStorage.getItem(KEYS.user);
    },
    async logout() {
      if (!isBrowser()) return;
      window.localStorage.removeItem(KEYS.user);
    }
  },
  entities: {
    RecyclingActivity: {
      async list(sort = "-created_date") {
        const list = getActivities().slice();
        const desc = sort.startsWith("-");
        const key = sort.replace(/^[-+]/, "");
        list.sort((a, b) => {
          const av = a?.[key] ?? "";
          const bv = b?.[key] ?? "";
          return desc ? String(bv).localeCompare(String(av)) : String(av).localeCompare(String(bv));
        });
        return list;
      },
      async create(data) {
        const record = { id: uid(), created_date: new Date().toISOString(), ...data };
        const list = getActivities();
        list.unshift(record);
        setActivities(list);
        return record;
      },
      async delete(id) {
        const list = getActivities().filter((x) => x.id !== id);
        setActivities(list);
        return { id };
      }
    }
  }
};
