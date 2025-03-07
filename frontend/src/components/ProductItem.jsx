import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const fallbackImage = 'https://via.placeholder.com/150';

  // Ensure image is an array, or fallback to a single image
  const productImage = Array.isArray(image) && image.length > 0 ? image[0] : image || fallbackImage;

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img
          className='hover:scale-110 transition ease-in-out'
          src={productImage}
          alt={name}
          onError={(e) => { e.target.src = fallbackImage; }} 
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;
