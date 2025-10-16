import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const cafes = pgTable("cafes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  location: text("location").notNull(),
  distance: text("distance").notNull(),
  image: text("image").notNull(),
  rating: real("rating").notNull(),
  pcAvailable: integer("pc_available").notNull(),
  pcTotal: integer("pc_total").notNull(),
  ps5Available: integer("ps5_available").notNull(),
  ps5Total: integer("ps5_total").notNull(),
  pricePerHour: integer("price_per_hour").notNull(),
  description: text("description").notNull(),
  amenities: text("amenities").array().notNull(),
  phone: text("phone").notNull(),
  whatsapp: text("whatsapp").notNull(),
  latitude: real("latitude").notNull(),
  longitude: real("longitude").notNull(),
  pcGames: text("pc_games").array().notNull(),
  ps5Games: text("ps5_games").array().notNull(),
});

export const insertCafeSchema = createInsertSchema(cafes).omit({ id: true });

export type InsertCafe = z.infer<typeof insertCafeSchema>;
export type Cafe = typeof cafes.$inferSelect;
