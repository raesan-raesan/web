import { json } from '@sveltejs/kit';
const API_URL = import.meta.env.VITE_PUBLIC_API_URL;

export const POST = async (lib) => {
	const req_data = await lib.request.json();

	const res = await lib.fetch(`${API_URL}/api/create-test`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(req_data)
	});
	const data = await res.json();

	return json(data);
};
