import { json } from "@sveltejs/kit";
const API_URL = import.meta.env.VITE_PUBLIC_API_URL;

export const GET = async (lib) => {
  const res = await lib.fetch(`${API_URL}/api/create-test-page-meta`);
  const data = await res.json();
  return json(data);
};
