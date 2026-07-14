import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "landing-page-clean-routes",
      configureServer(server) {
        const routeMap = [
          {
            route: "/grc",
            source: "/GRC"
          },
          {
            route: "/emiratisation-webinar",
            source: "/Emiratisation%202026"
          }
        ];

        server.middlewares.use((req, res, next) => {
          const url = req.url || "/";

          for (const { route, source } of routeMap) {
            if (url === route) {
              res.statusCode = 302;
              res.setHeader("Location", `${route}/`);
              res.end();
              return;
            }

            if (url === `${route}/` || url.startsWith(`${route}/`)) {
              req.url = `${source}${url.slice(route.length)}`;
              break;
            }
          }

          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        grc: resolve(__dirname, "GRC/index.html"),
        emiratisationWebinar: resolve(__dirname, "Emiratisation 2026/index.html")
      }
    }
  }
});
