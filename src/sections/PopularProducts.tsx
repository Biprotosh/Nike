import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container ">
      <div className="flex flex-col gap-5 justify-start">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-4 gap-8">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts