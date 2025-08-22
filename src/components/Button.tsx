import type { TButtonProps } from "../types";

const Button = ({
    label,
    icon,
    backgroundColor,
    borderColor,
    textColor,
}: TButtonProps) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4  font-montserrat text-lg leading-none border
              ${backgroundColor ? backgroundColor : "bg-coral-red"} 
              ${textColor ? textColor : "text-white"} rounded-full 
              ${borderColor ? borderColor : ""}
              `}
        >
            {label}
            {icon && (
                <img
                    src={icon}
                    alt="arrow right icon"
                    className="ml-2 rounded-full w-5 h-5"
                />
            )}
        </button>
    );
};

export default Button;
