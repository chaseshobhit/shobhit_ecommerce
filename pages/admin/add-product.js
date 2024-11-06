import { useState } from 'react';
import Layout from '../components/common/Layout';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  // ...other state variables

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement API call to add product
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="p-4">
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        {/* Add other input fields */}
        <button type="submit" className="bg-blue-500 text-white p-2">Add Product</button>
      </form>
    </Layout>
  );
};

export default AddProduct;
