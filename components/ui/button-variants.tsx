import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

type ButtonProps = React.ComponentProps<typeof Button> & {
  children: ReactNode;
};

export function PrimaryButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-4 h-auto font-medium transition-all duration-300 transform hover:scale-[0.99]",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

export function SecondaryButton({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Button
      className={cn(
        "bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-6 py-4 h-auto font-medium transition-all duration-300 transform hover:scale-[0.99]",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

export function OutlineButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      variant='outline'
      className={cn(
        "border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary rounded-full px-6 py-6 h-auto font-medium transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

export function GhostButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      variant='ghost'
      className={cn(
        "text-primary hover:bg-primary/10 hover:text-primary rounded-full px-6 py-2 h-auto font-medium transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
