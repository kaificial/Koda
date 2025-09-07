import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-green-600 text-white hover:bg-green-700 hover:-translate-y-0.5 shadow-uvodo-card hover:shadow-uvodo-hover",
        destructive:
          "bg-uvodo-error text-white hover:bg-red-600 hover:-translate-y-0.5 shadow-uvodo-card hover:shadow-uvodo-hover",
        outline:
          "border-2 border-green-600 bg-transparent text-green-600 hover:bg-green-600 hover:text-white hover:-translate-y-0.5",
        secondary:
          "bg-uvodo-gray-100 text-uvodo-gray-900 hover:bg-uvodo-gray-200 hover:-translate-y-0.5",
        ghost: "text-uvodo-gray-600 hover:text-uvodo-gray-900 hover:bg-uvodo-gray-100",
        link: "text-green-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
