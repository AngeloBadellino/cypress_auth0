import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    env: {
      auth0_domain: "https://dev-qmqp0m4ztvtnjw8c.us.auth0.com",
      auth0_client_id: "kRgNoBSSNQl0QGxpmlHlv4xPuhtJqxMZ",
      auth0_username: "siceje8523@lewenbo.com",
      auth0_password: "qwert12345!"
    }
  },
});