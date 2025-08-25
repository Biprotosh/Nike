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
            className={`group flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none border border-coral-red
              ${backgroundColor ? backgroundColor : "bg-coral-red"} 
              ${textColor ? textColor : "text-white"} rounded-full 
              ${borderColor ? borderColor : ""} hover:bg-white hover:text-coral-red duration-150
              `}
        >
            {label}
            {icon && (
                <img
                    src={icon}
                    alt="arrow right icon"
                    className="ml-2 rounded-full w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1 "
                />
            )}
        </button>
    );
};

export default Button;

