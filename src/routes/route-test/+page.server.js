import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { routeTestFormSchema } from "$lib/schema";
import { zod } from "sveltekit-superforms/adapters";

export const load = async () => {
  return {
    form: await superValidate(zod(routeTestFormSchema))
  };
};
export const actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(routeTestFormSchema));
    if (!form.valid) {
      return fail(400, {
        form
      });
    }
    console.log(form);
    return {
      form
    };
  }
};
