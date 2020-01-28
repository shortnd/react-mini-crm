import { Server, Model, belongsTo, hasMany } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      user: Model,
      company: Model.extend({
        employees: hasMany()
      }),
      employees: Model.extend({
        company: belongsTo()
      })
    },

    seeds(server) {
    },

    routes() {
      this.namespace = "api"

      this.resource("users");
    },
  })

  return server
}
