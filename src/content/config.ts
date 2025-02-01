import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        imgSrc: z.string(),
        introduction: z.string(),
        alt: z.string(),
        githubUrl: z.string().url(),
        youtubeUrl: z.string().url().optional(),
        sale: z.boolean(),
        skills: z.array(z.string())
    })
});

export const collections = { projects };