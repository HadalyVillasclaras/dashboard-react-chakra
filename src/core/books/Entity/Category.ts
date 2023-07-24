export const Categories = ["Contemporary Art", "Architecture", "Sculpture", "Painting", "Fiction", "NonFiction", "Biography"] as const;

export type Category = typeof Categories[number];