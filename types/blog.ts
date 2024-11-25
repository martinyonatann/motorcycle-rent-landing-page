export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number;
  title: string;
  mainImage?: any;
  priceDetails: PriceDetail[];
  note: string;
};

export type PriceDetail = {
  duration: string;
  price: string;
  time: string;
};