import { Products } from '../product.interface';

export const filterByProductName = ([products, filter]: [
  Products,
  string | null
]) =>
  filter
    ? products.filter((product) =>
        product.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
    : products;
