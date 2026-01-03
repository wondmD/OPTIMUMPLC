"use client";

import { useFormStatus } from "react-dom";

type Props = {
  idleLabel?: string;
  pendingLabel?: string;
  className?: string;
};

export default function SubmitButton({ idleLabel = "Send message", pendingLabel = "Sending…", className = "" }: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${className} disabled:cursor-not-allowed disabled:opacity-75`}
    >
      {pending ? pendingLabel : idleLabel}
    </button>
  );
}