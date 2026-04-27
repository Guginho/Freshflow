import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-brand-mint text-brand-deep",
        leaf: "bg-brand-leaf text-white",
        green: "bg-brand-green text-white",
        soft: "bg-brand-light text-brand-deep border border-border",
        warning: "bg-brand-alert text-[#7A5A11]",
        orange: "bg-brand-orange text-white",
        outline: "border border-border bg-white text-ink-soft",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
