// A lightweight mock of the Base44 API client used in the original project.
// This implementation provides only the minimal interface required by the UI
// components. It allows the site to build and run without errors, but does not
// perform any real authentication or API calls.

// Maintain a single in-memory user object so that updates persist during a session.
let currentUser = {
  full_name: "Demo User",
  email: "demo@example.com",
  phone: "",
  address: "",
  bio: "",
  organization_name: "",
  user_type: "individual",
  total_recycled: 0,
  onboarding_completed: false,
};

export const base44 = {
  auth: {
    /**
     * Returns whether the current user is authenticated.
     * Always resolves to true for the demo user.
     * @returns {Promise<boolean>}
     */
    isAuthenticated: async () => {
      return true;
    },
    /**
     * Returns a mock user object representing the currently authenticated user.
     * @returns {Promise<object>}
     */
    me: async () => {
      return currentUser;
    },
    /**
     * Updates the currently authenticated user with new data. The updates are
     * merged into the existing user object.
     * @param {object} data - Data to update
     */
    updateMe: async (data) => {
      currentUser = { ...currentUser, ...data };
      return currentUser;
    },
    /**
     * Logs out the current user by resetting the user to null. Subsequent
     * calls to isAuthenticated will return false until a new user is set.
     */
    logout: async () => {
      currentUser = null;
    },
    /**
     * Redirects the user to the login page. In this mock, we simply navigate
     * to the /login route using the browser location API.
     */
    redirectToLogin: () => {
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    },
  },
  entities: {
    RecyclingActivity: {
      /**
       * Returns a list of recycling activities. Returns a few static demo
       * activities based on the current user for illustrative purposes.
       * @param {string} sort - Sort order (ignored)
       * @returns {Promise<object[]>}
       */
      list: async (sort) => {
        if (!currentUser) return [];
        return [
          {
            id: "1",
            material_type: "plastic",
            weight: 2.5,
            location: "McKinney",
            date: "2024-01-10",
            notes: "Bottles and containers",
          },
          {
            id: "2",
            material_type: "metal",
            weight: 1.2,
            location: "Dallas",
            date: "2024-02-15",
            notes: "Cans",
          },
        ];
      },
      /**
       * Creates a new recycling activity. Adds it to the static list and
       * increases the user's total recycled weight.
       * @param {object} data - Data for the new activity
       * @returns {Promise<object>}
       */
      create: async (data) => {
        // In a real implementation this would save to a database. Here we
        // simply return the new activity with a generated id and update the
        // user's total.
        const newActivity = { id: Date.now().toString(), ...data };
        if (currentUser) {
          currentUser.total_recycled =
            (currentUser.total_recycled || 0) + parseFloat(data.weight || 0);
        }
        return newActivity;
      },
      /**
       * Deletes a recycling activity. This is a no-op in the demo.
       * @param {string} id - ID of the activity to delete
       */
      delete: async (id) => {
        // no-op in demo
      },
    },
  },
};