const API_URL = import.meta.env.VITE_PUBLIC_API_URL;

export const load = async (lib) => {
  const loadData = async () => {
    const res = await lib.fetch(`${API_URL}/api/create-test-page-meta`);
    const data = await res.json();
    return data;
  };
  return {
    create_test_meta: loadData()
  };
};
