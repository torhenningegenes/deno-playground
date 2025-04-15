import {
  boolean,
  foreignKey,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "npm:drizzle-orm@0.41.0/pg-core";
import {PlayerClasses} from "../libs/enums/player-classes.ts";

export const dinosaurs = pgTable("dinosaurs", {
  id: serial().primaryKey().notNull(),
  name: text(),
  description: text(),
});


export const players = pgTable("players", {
  id: serial().primaryKey().notNull(),
  dateCreated: timestamp("date_created", { mode: "string" }).defaultNow(),
  name: text(),
  character: text(),
  characterClass: PlayerClasses(),
})
