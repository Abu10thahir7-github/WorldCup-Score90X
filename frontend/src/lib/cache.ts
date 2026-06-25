const cache = new Map();

export const getCache = (key: string) => {
  const item = cache.get(key);

  if (!item) return null;

  if (Date.now() > item.expiry) {
    cache.delete(key);
    return null;
  }

  return item.data;
};

export const setCache = (
  key: string,
  data: any,
  ttl = 1000 * 60 * 30
) => {
  cache.set(key, {
    data,
    expiry: Date.now() + ttl,
  });
};