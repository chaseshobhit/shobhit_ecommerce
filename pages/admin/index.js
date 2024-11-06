import { fetchProducts } from '../utils/api';
import Layout from '../components/common/Layout';
import ProductList from '../components/products/ProductList';

const Home = ({ products }) => (
  <Layout>
    <ProductList products={products} />
  </Layout>
);

export async function getStaticProps() {
  const products = await fetchProducts();
  return { props: { products } };
}

export default Home;
