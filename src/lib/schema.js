import { z } from 'zod';

export const routeTestFormSchema = z.object({
	name: z.string().min(2).max(50),
	description: z.string().min(2).max(250),
	terms: z.boolean().default(false)
});
