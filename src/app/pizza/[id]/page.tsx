import axios from "axios";
import { cache } from "react";
import Image from "next/image";

import { Item } from "../../../redux/items/types";

interface PageParams {
  params: {
    id: string;
  };
}

async function fetchData(id: string): Promise<Item> {
  const resp = await axios.get(`https://6556acbdbd4bcef8b6118adc.mockapi.io/api/items/${id}`);
  return resp.data;
}

const fetchDataCached = cache(fetchData);

export async function generateMetadata({ params: { id } }: PageParams) {
  const item = await fetchDataCached(id);
  return {
    title: item.title || "React Pizza",
  };
}

export function generateStaticParams() {
  return [...new Array(10)].map((_, i) => ({ id: String(i) }));
}

export const dynamicParams = false;

const Page = async ({ params: { id } }: PageParams) => {
  const item = await fetchDataCached(id);
  return (
    <div className="container">
      <h1>PizzaInfo</h1>
      <Image src={item.imageUrl} alt={item.title} />
      <h2>Name: {item.title}</h2>
      <h2>Price: {item.price} $</h2>
    </div>
  );
};

export default Page;
