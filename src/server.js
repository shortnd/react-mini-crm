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
      server.create("user", { name: 'Admin', email: 'admin@admin.com', password: 'password' })
      server.create("company", { name: 'Little Cesar\'s', email: 'pizza@littlecesars.com', logo: '', website: 'https://littlecaesars.com/' })
    },

    routes() {
      this.namespace = "api"

      this.get("/users", ({ users }) => {
        return users.all();
      });
      this.get("/users/:id", ({users}, request) => {
        return users.find(request.params.id);
      });

      this.post("/users", ({users}, request) => {
        return users.create(request.requestBody);
      });

      this.post("/users/:id", ({ users }, request) => {
        let id = request.params.id
        return users.find(id).update(request.requestBody);
      });

      this.delete("/users/:id/delete", ({ users }, request) => {
        let id = request.params.id
        return users.find(id).destroy();
      });

      this.get("/companies", ({ companies }) => {
        return companies.all()
      });
      this.post("/companies", ({ companies }, request) => {
        return companies.create(request.requestBody);
      });

      this.get("/companies/:id", ({ companies }, request) => {
        return companies.find(request.params.id)
      })

      this.put("/companies/:id", ({ companies }, request) => {
        return companies.find(request.params.id).update(request.requestBody);
      })
    },
  })

  return server
}
