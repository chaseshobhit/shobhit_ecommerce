// pages/products/[id].js
import { useRouter } from 'next/router';
import { fetchProducts } from '../../utils/api';
import Layout from '../components/common/Layout';

const ProductDetail = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="p-4">
        <img src={product.image} alt={product.title} className="h-64 w-full object-cover" />
        <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
        <p className="mt-2">${product.price}</p>
        <p className="mt-4">{product.description}</p>
        {/* Add to Cart button here */}
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const products = await fetchProducts();
  const paths = products.map(product => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const product = await fetch(`https://fakestoreapi.com/products/${params.id}`).then(res => res.json());
  return { props: { product } };
}

export default ProductDetail;
