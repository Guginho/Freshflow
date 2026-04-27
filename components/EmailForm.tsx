"use client";

import { useFormState, useFormStatus } from "react-dom";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { subscribe, type SubscribeState } from "@/app/actions";
import { cn } from "@/lib/utils";

const initialState: SubscribeState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-6 text-sm font-semibold text-white shadow-soft transition-all hover:bg-brand-deep active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none"
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Envoi…
        </>
      ) : (
        <>
          Rejoindre la bêta
          <ArrowRight className="h-4 w-4" />
        </>
      )}
    </button>
  );
}

export function EmailForm() {
  const [state, formAction] = useFormState(subscribe, initialState);
  const isSuccess = state.status === "success";

  return (
    <div className="w-full max-w-xl">
      <form
        action={formAction}
        className={cn(
          "flex flex-col sm:flex-row gap-2 p-1.5 rounded-2xl sm:rounded-full border bg-white shadow-card",
          state.status === "error"
            ? "border-brand-orange/50"
            : "border-border",
        )}
      >
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <label htmlFor="email" className="sr-only">
          Adresse e-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="ton@email.com"
          disabled={isSuccess}
          className="flex-1 h-12 px-5 rounded-full bg-transparent text-[15px] text-ink placeholder:text-ink-mute focus:outline-none disabled:opacity-60"
        />
        <SubmitButton />
      </form>

      <div className="mt-3 min-h-[1.25rem] text-sm" aria-live="polite">
        {state.status === "error" && (
          <p className="text-brand-orange font-medium">{state.message}</p>
        )}
        {state.status === "success" && (
          <p className="inline-flex items-center gap-2 text-brand-deep font-medium">
            <CheckCircle2 className="h-4 w-4 text-brand-green" />
            {state.message}
          </p>
        )}
        {state.status === "idle" && (
          <p className="text-white/70">
            Pas de spam. Juste l'invitation et un mail quand on ouvre.
          </p>
        )}
      </div>
    </div>
  );
}
