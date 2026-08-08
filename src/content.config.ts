import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),

	// Type-check frontmatter using a schema.
	schema: ({ image }) =>
		z
			.object({
				title: z.string(),
				description: z.string(),
				pubDate: z.union([z.string(), z.date()]),
				updatedDate: z.coerce.date().optional(),
				heroImage: z.optional(image()),
			})
			.transform((data) => {
				const sourceValue =
					data.pubDate instanceof Date
						? data.pubDate.toISOString()
						: data.pubDate.replace('@', 'T');

				return {
					...data,
					pubDate: new Date(sourceValue),
					pubDateCalendarDate: sourceValue.slice(0, 10),
				};
			}),
});

export const collections = { blog };
