import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    genres: z.array(z.string()).optional(),
    date: z.coerce.date(), 
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
    date: z.coerce.date(),
    mood: z.string().optional(),
  })
})

const showsCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    venue: z.string(),
    bands: z.array(z.string()).optional(),
    city: z.string().optional(),
    ticketPrice: z.number().optional(), 
  }),
});

export const collections = {
  blog: blogCollection, 
  diary: diaryCollection,
  shows: showsCollection,
};