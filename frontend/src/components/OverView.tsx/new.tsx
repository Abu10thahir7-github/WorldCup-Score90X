'use client';

import { Newspaper, Clock } from 'lucide-react';

interface NewsItem {
  pageid: number;
  title: string;
  snippet: string;
  timestamp: string;
}

interface Props {
  news: NewsItem[];
}

export default function WorldCupNews({ news }: Props) {
  return (
    <div className="rounded-xl   p-4">
      {/* Header */}

      <h1 className="text-sm     text-white mb-2">News & Updates</h1>


      {/* News List */}
      <div className="space-y-1  h-[27vh] overflow-auto   pr-1">
        {news.map((item) => (
          <div
            key={item.pageid}
            className="group relative overflow-hidden rounded-xl border px-3 py-2 border-slate-800/50  bg-slate-950/70   transition-all hover:border-blue-500/50 hover:bg-slate-900"
          >

            <div className="relative z-10">
              <h3 className="font-semibold text-white line-clamp-2">
                {item.title}
              </h3>

              <p
                className=" text-sm text-slate-400 line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: item.snippet.replace(
                    /<\/?span[^>]*>/g,
                    '',
                  ),
                }}
              />

              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock size={12} />
                  {new Date(item.timestamp).toLocaleString()}
                </div>

                <a
                  href={`https://en.wikipedia.org/?curid=${item.pageid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-blue-400 hover:text-blue-300"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}