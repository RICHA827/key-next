import { config, list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, password } from "@keystone-6/core/fields";
import { withAuth, session } from "./auth";
const lists = {
  User: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({ validation: { isRequired: true }, isIndexed: "unique" }),
      password: password({ validation: { isRequired: true } }),
    },
  }),
};

export default config(
  withAuth({
    db: {
      provider: "sqlite",
      url: "file:./keystone.db",
    },
    lists,
    session,
    server: {
      cors: {
        origin: ["http://localhost:3000"],
        Credentials: true,
      },
      port: 3001,
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
  })
);
