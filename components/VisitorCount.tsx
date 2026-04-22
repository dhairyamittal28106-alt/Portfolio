"use client";

import { useEffect, useState } from "react";
import { Eye, Orbit } from "lucide-react";

const COUNT_API_KEY = "dhairya-mittal-portfolio-site-visits";
const SESSION_STORAGE_KEY = "portfolio-visitor-counted";

type CountApiResponse = {
  value: number | string;
};

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchCount = async () => {
      try {
        const hasCounted = sessionStorage.getItem(SESSION_STORAGE_KEY) === "true";
        const endpoint = hasCounted
          ? `https://countapi.mileshilliard.com/api/v1/get/${COUNT_API_KEY}`
          : `https://countapi.mileshilliard.com/api/v1/hit/${COUNT_API_KEY}`;

        const response = await fetch(endpoint, { cache: "no-store" });

        if (!response.ok && hasCounted) {
          const retryResponse = await fetch(
            `https://countapi.mileshilliard.com/api/v1/hit/${COUNT_API_KEY}`,
            { cache: "no-store" }
          );

          if (!retryResponse.ok) {
            throw new Error("Failed to fetch visitor count");
          }

          const retryData = (await retryResponse.json()) as CountApiResponse;

          sessionStorage.setItem(SESSION_STORAGE_KEY, "true");

          if (isMounted) {
            setCount(Number(retryData.value));
          }

          return;
        }

        if (!response.ok) {
          throw new Error("Failed to fetch visitor count");
        }

        const data = (await response.json()) as CountApiResponse;

        if (!hasCounted) {
          sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
        }

        if (isMounted) {
          setCount(Number(data.value));
          setHasError(false);
        }
      } catch {
        if (isMounted) {
          setHasError(true);
        }
      }
    };

    fetchCount();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <footer className="pb-12 pt-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[1.8rem] border border-black/5 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(255,242,238,0.8))] px-5 py-5 shadow-[0_18px_70px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] dark:shadow-none sm:px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(248,113,113,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.08),transparent_30%)]" />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                Portfolio Traffic
              </p>
              <p className="mt-2 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                A small live counter for people who have explored my portfolio.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 self-start rounded-full border border-orange-500/20 bg-white/80 px-4 py-3 text-sm font-medium text-neutral-900 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur dark:border-sky-500/20 dark:bg-white/[0.05] dark:text-white dark:shadow-none">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(249,115,22,0.14),rgba(248,113,113,0.12))] text-orange-700 dark:bg-sky-500/10 dark:text-sky-300">
                {hasError ? <Orbit className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </span>

              <span className="flex flex-col leading-tight">
                <span className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  Visitors
                </span>
                <span className="mt-1 text-lg font-semibold text-neutral-950 dark:text-white">
                  {hasError ? "Counter unavailable" : count?.toLocaleString() ?? "Loading..."}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
