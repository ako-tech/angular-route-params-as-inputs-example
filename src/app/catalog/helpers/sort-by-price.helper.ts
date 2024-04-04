import { Products } from '../product.interface';

export const sortByPrice = ([products, orderBy]: [Products, string | null]) => {
  if (!orderBy) {
    return products;
  }

  return orderBy === 'priceASC'
    ? [...products].sort((a, b) => a.price - b.price)
    : [...products].sort((a, b) => b.price - a.price);
};
