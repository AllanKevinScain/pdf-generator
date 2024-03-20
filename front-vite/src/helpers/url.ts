export const getBaseUrl = () => {
  const currentEnv = import.meta.env.MODE;

  if (currentEnv === "development") {
    return import.meta.env.VITE_BASEURL_API_DEV_API;
  }

  return import.meta.env.VITE_BASEURL_API_PRD_API;
};
