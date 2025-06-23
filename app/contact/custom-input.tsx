import * as React from "react"
import { cn } from "@/lib/utils"

export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        "w-full border-0 border-b border-gray-400 rounded-none bg-transparent focus:ring-0 px-0 py-2",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
CustomInput.displayName = "CustomInput"
