export const Categories = ["Contemporary Art", "Architecture", "Sculpture", "Painting", "Fiction", "NonFiction", "Biography"] as const;

export type BookCategory = typeof Categories[number];