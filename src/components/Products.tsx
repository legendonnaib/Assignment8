import Link from "next/link";
import Image from "next/image";
import { client } from "../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: string) {
  return builder.image(source);
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}

async function fetchProductList() {
  const products = await client.fetch(`*[_type == "Products"]`);
  return products;
}

export default async function ProductList() {
  let products: Product[] = [];
  try {
    products = await fetchProductList();
  } catch (error) {
    console.error("Failed to fetch products", error);
  }

  return (
    <div className="container bg-gray-50 mx-auto px-6 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
        Our Product Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.length > 1 ? (
          products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center text-2xl text-red-500">
            No products found. Please add products.
          </div>
        )}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const maxDescriptionLength = 150;
  const description =
    product.description.length > maxDescriptionLength
      ? product.description.substring(0, maxDescriptionLength) + "..."
      : product.description;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64">
        <Image
          src={urlFor(product.image).width(1920).height(1080).url()}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-indigo-600">${product.price.toFixed(2)}</p>
          <div className="text-yellow-500 flex items-center">
            <span className="text-sm font-medium mr-1">{product.rating}</span>
            <span>&#9733;</span>
          </div>
        </div>
      </div>
      <div className="p-6 border-t">
        <Link
          href={`#`}
          className="text-indigo-600 hover:underline font-medium"
        ></Link>
        </div>
        
    </div>)}

