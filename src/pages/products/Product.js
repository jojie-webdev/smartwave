import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import { getProducts } from "../../services/product";
import List from "./partials/LIst";
import OrderStatus from './partials/OrderStatus'

const CreateOrder = () => {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      return await getProducts()
    };

    fetchData().then((res) => {
      setProducts(res.data)
    });

  }, []);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
    >
      <List products={products.d}/>
      <OrderStatus />
    </Box>
  )
};

export default CreateOrder;
