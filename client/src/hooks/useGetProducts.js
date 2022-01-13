import react from "react";
import { getProducts } from "../pages/api/getProducts";

export const useGetProducts = () => {
  const fetchData = async () => {
    const r = await getProducts({ pages: 1 });
    if (r.products.length) {
    }
  };

  useEffect(() => {
    await fetchData();
  }, []);
};
