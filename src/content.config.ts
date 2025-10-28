import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    genres: z.array(z.string()).optional(),
    date: z.date(), 
    author: z.string(),
    comments: z.number(),
    draft: z.boolean().optional(),
    albumCover: z.string().optional(),
  }),
});

const diaryCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    mood: z.string().optional(),
  })
})

export const collections = {
  blog: blogCollection, 
  diary: diaryCollection,
};