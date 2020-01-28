import { Server, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      user: Model,
      movie: Model
    },

    seeds(server) {
      server.create("user", { name: "Bob" })
      server.create("user", { name: "Alice" })
      server.create("movie", { name: "Inception", year: 2010 })
      server.create("movie", { name: "Interstellar", year: 2014 })
      server.create("movie", { name: "Dunkirk", year: 2015 })
    },

    routes() {
      this.namespace = "api"

      this.get("/users", schema => {
        return schema.users.all()
      })
      this.get("/users/:id");

      this.get("/movies", schema => {
        return schema.movies.all()
      })
    },
  })

  return server
}
