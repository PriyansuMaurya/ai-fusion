import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";
import { CardsProp } from "@/types";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Card({
  id,
  tools,
  prompts,
  datasets,
  data,
  setModalData,
  setModalActive,
}: CardsProp) {
  const { title, description, url } = data;
  const [copied, setCopied] = useState(false);
  const resetCopied = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => {
    if (resetCopied.current) clearTimeout(resetCopied.current);
  }, []);

  function handleReadMore() {
    setModalActive(true);
    setModalData(data);
  }

  return (
    <div
      className="group flex h-full min-h-64 min-w-0 flex-col border border-[--line] bg-[--light-bg] p-6 text-[--dark-bg] transition-colors hover:bg-[--surface] dark:bg-[--dark-bg] dark:text-[--light-bg]"
    >
      <h2 className="line-clamp-2 text-2xl font-semibold tracking-[-.04em]">{title}</h2>
      <p className="mt-3 line-clamp-5 text-sm font-light">
        {description}
      </p>
      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
        {tools || datasets ? (
          url ? (
            <a
              className="inline-flex max-h-9 items-center gap-2 border border-[--dark-bg] px-4 py-[8px] text-center text-xs font-bold transition-colors hover:bg-[--primary-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--primary-color] dark:border-[--light-bg]"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              GO TO SITE <FiArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <span
              className="inline-flex max-h-9 items-center border border-[--line] px-4 py-[8px] text-center text-xs font-bold text-[--muted]"
              aria-label={`No active site link for ${title}`}
            >
              SITE UNAVAILABLE
            </span>
          )
        ) : (
          <CopyToClipboard text={description}>
            <button
              type="button"
              aria-label={`Copy ${title} prompt`}
              title="Copy prompt"
              onClick={() => {
                setCopied(true);
                if (resetCopied.current) clearTimeout(resetCopied.current);
                resetCopied.current = setTimeout(() => {
                  setCopied(false);
                }, 1000);
              }}
              className="inline-flex h-10 w-10 items-center justify-center border border-[--dark-bg] transition-colors hover:bg-[--primary-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--primary-color] dark:border-[--light-bg]"
            >
              {copied ? (
                <FiCheck aria-hidden="true" size={20} />
              ) : (
                <FiCopy aria-hidden="true" size={20} />
              )}
            </button>
          </CopyToClipboard>
        )}
        {description.length > 210 ? (
          <button
            type="button"
            onClick={handleReadMore}
            aria-label={`Read more about ${title}`}
            className="max-h-9 border border-[--primary-color] bg-[--primary-color] px-4 py-[8px] text-center text-xs font-bold text-[--dark-bg] transition-colors hover:border-[--dark-bg] hover:bg-[--light-bg] hover:text-[--dark-bg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--primary-color] dark:hover:border-[--light-bg] dark:hover:bg-[--dark-bg] dark:hover:text-[--light-bg]"
          >
            READ MORE
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
