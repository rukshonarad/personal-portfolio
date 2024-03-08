export type ButtonSize = "sm" | "md" | "lg";
export type ButtonShape = "rounded" | "circle";

export type ButtonVariant = "contained" | "outlined" | "text";

export type ButtonProps = {
    size?: ButtonSize;
    shape?: ButtonShape;
    fullWidth?: boolean;
    variant?: ButtonVariant;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    buttonRef?: React.ForwardedRef<HTMLButtonElement>;
};
