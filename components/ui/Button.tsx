type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  return <button className={`button ${variant === "secondary" ? "secondary" : ""} ${className}`} {...props} />;
}
