import { registerApplication, start } from "single-spa";

// Module Federation
registerApplication({
  name: "@pwc/microapp",
  //@ts-ignore
  app: () => import('microapp'),
  activeWhen: ["/"],
});

// SystemJS
// registerApplication({
//   name: "@pwc/microapp",
//   //@ts-ignore
//   app: () => System.import("http://localhost:4201/main.js"),
//   activeWhen: ["/"],
// });

start({
  urlRerouteOnly: true,
});
