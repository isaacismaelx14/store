export const storage = {
  token: {
    saveLocal: (token: string) => {
      localStorage.setItem("token", token);
    },
    getLocal: (): string | null => {
      try {
        return localStorage.getItem("token");
      } catch (error) {}
      return null;
    },
    removeLocal: () => {
      localStorage.removeItem("token");
    },
  },
};
