import type { TShoeCardProps } from "../types";

const ShoeCard = ({ ...porps }: TShoeCardProps) => {

    const handleClick = () => {
        if (porps.bigShoeImg !== porps.img) porps.changeBigShoeImg(porps.img);
    };
    return (
        <div
            className={`border-2 rounded-xl ${
                porps.bigShoeImg === porps.img
                    ? "border-coral-red"
                    : "border-transparent"
            } cursor-pointer max-sm:flex-1 flex`}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-coversm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={porps.img}
                    alt="shoe collection"
                    width={127}
                    height={103}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default ShoeCard;
