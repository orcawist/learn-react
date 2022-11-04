export const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("ERROR!!!");
  }
  const json = await res.json();
  return json;
};
