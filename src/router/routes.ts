export const routes = {
  register: "/register",
  login: "/login",
  forgetPassword: "/forgetPassword",
  dashboard: "/",
  settings: "/settings",
  applicationDetail: "/application/:id",
  createRouteApplicationDetail: (id: string) => `/application/${id}`,
};
