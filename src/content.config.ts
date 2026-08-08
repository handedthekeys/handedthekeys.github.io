import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),

	// Type-check frontmatter using a schema.
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),

			// Preserve the authored publication date while keeping Date behavior
			// for chronological sorting and RSS.
			pubDate: z.union([z.string(), z.date()]).transform((value) => {
				if (value instanceof Date) {
					return Object.assign(value, {
						sourceValue: value.toISOString(),
					});
				}

				const sourceValue = value.includes('@')
					? value.replace('@', 'T')
					: value;

				return Object.assign(new Date(sourceValue), {
					sourceValue,
				});
			}),

			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog };
