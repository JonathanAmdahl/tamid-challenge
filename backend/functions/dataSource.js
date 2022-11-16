import "reflect-metadata";
import { DataSource } from "typeorm";
import Link from "../entities/Link.js";

//details for database
//note: this isn't actually the login
export default new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "replace",
  database: "tamid",
  synchronize: true,
  logging: true,
  entities: [Link],
  subscribers: [],
  migrations: [],
});
