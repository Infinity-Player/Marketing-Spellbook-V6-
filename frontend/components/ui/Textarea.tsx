import { TextareaHTMLAttributes } from "react";

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`
        w-full rounded-xl border px-3 py-2 outline-none
        bg-white text-black border-gray-300
        dark:bg-white/5 dark:text-white dark:border-white/15
        classic:bg-white classic:text-[#131929] classic:border-[#13192933]
        ${props.className || ""}
      `}
    />
  );
}
