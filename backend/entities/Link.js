import { EntitySchema } from "typeorm";

//make a database table
export default new EntitySchema({
  name: "Link",
  tableName: "link",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    longLink: {
      type: "varchar",
    },
    shortLink: {
      type: "varchar",
    },
  },
});
