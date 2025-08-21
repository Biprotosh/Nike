import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

    return (
        <section
            id="home"
            className="w-full min-h-screen max-container flex flex-col xl:flex-row justify-center gap-10"
        >
            <div className="flex flex-col relative items-start justify-center w-full max-xl:padding-x pt-28 xl:w-2/5">
                <p className="text-xl font-montserrat text-coral-red">
                    Our Summer Collection
                </p>
                <h1 className="mt-10 font-palanquin font-semibold text-8xl max-sm:text-[72px] max-sm:leading-[82]">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                        The New Arrival
                    </span>
                    <br />
                    <span className="text-coral-red inline-block mt-5">
                        Nike
                    </span>
                    Shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                    Discover stylish Nike arrivals, quality comfort, and
                    innovation for your active life.
                </p>
                <Button label="Shop Now" icon={arrowRight} />

                <div className="w-full flex justify-start items-start mt-20 gap-16 flex-wrap">
                    {statistics.map(({ label, value }) => (
                        <div key={label}>
                            <p className="text-4xl font-palanquin font-bold">
                                {value}
                            </p>
                            <p className="leading-7 font-montserrat text-slate-gray">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img
                    src={bigShoeImg}
                    alt="Shoe collection"
                    width={610}
                    height={500}
                    className="object-contain z-10"
                />

                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe, index) => (
                        <div key={index}>
                            <ShoeCard
                                bigShoeImg={bigShoeImg}
                                changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
                                img={shoe.thumbnail}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
