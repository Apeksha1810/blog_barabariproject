import { defineCollection, z } from 'astro:content';

const C = (collection: any) => defineCollection({
	schema: z.object(collection)
});

export const collections = {
	'blog': C({
		title: z.string(),
		description: z.string().optional(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		heroImage: z.string().optional(),
		lang: z.string().optional(),
	})
};
