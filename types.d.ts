import { ButtonProps as ShadcnButtonProps } from "@/components/ui/button";
import { SheetContentProps as ShadcnSheetContentProps } from "@/components/ui/sheet";

declare module "@/components/ui/button" {
  interface ButtonProps extends ShadcnButtonProps {
    variant?:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link";
    size?: "default" | "sm" | "lg" | "icon";
  }
}

declare module "@/components/ui/sheet" {
  interface SheetContentProps extends ShadcnSheetContentProps {
    side?: "top" | "right" | "bottom" | "left";
    children?: React.ReactNode;
  }
}
