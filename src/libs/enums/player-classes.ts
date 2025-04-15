import {pgEnum} from "npm:drizzle-orm@0.41.0/pg-core";

export const PlayerClasses = pgEnum("playerClases", ["fighter", "wizard", "priest", "thief"]);



