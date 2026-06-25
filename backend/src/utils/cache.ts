type CacheItem<T> = {
  data: T;
  timestamp: number;
};

const cache = new Map<string, CacheItem<any>>();

export async function getCachedData<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl = 5 * 60 * 1000,
): Promise<T> {
  const cached = cache.get(key);

  if (cached && Date.now() - cached.timestamp < ttl) {
    console.log(`🟢 CACHE HIT: ${key}`);
    return cached.data;
  }

  console.log(`🔴 CACHE MISS: ${key}`);

  console.log(`Cache Miss: ${key}`);

  const data = await fetcher();

  cache.set(key, {
    data,
    timestamp: Date.now(),
  });

  return data;
}
