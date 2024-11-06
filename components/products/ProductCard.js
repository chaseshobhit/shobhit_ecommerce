// components/products/ProductCard.js
import Link from 'next/link';

const ProductCard = ({ product }) => (
  <div className="border p-4 rounded">
    <img src={product.image} alt={product.title} className="h-48 w-full object-cover" />
    <h2 className="font-semibold text-lg mt-2">{product.title}</h2>
    <p className="text-gray-600">${product.price}</p>
    <Link href={`/products/${product.id}`}>View Details</Link>
  </div>
);

export default ProductCard;
