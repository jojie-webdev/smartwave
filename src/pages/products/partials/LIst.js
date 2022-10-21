import { useState } from 'react'
import { Box, Text } from "@chakra-ui/react";
import ImageCard from '../../../components/ImageCard';

const List = ({products}) => {

  const [hearts, setHearts] = useState([]);
  
  const handleClickProductSave = (e, name) => {
    e.preventDefault();

    let arr = [...hearts];
    const newArray = arr.includes(name)
        ? arr.filter(i => i !== name) // remove item
        : [ ...arr, name ]; // add item
    setHearts(newArray)
  }

  return (
    <Box className="container" width="45%">
      <Box
        background="#fff"
        padding="25"
        borderRadius="10"
      >
        <Box display="flex" justifyContent="space-between" mb={10}>
          <Text fontSize={25} fontWeight="600">Recomended for you</Text>
          <Text fontSize={20} color="#19b2a7" fontWeight="600" cursor="pointer">See more</Text>
        </Box>

        <Box display="flex" justifyContent="space-between" flexWrap="wrap">

          {!products && 'Loading...'}
          {
            products && products.map((product, index) => {
              return (
                <Box key={index} margin="10px">
                  <ImageCard hearts={hearts} handleClickProductSave={handleClickProductSave} name={product.name} src={product.imageUrl}/>
                  <Text fontWeight="600"my={2}>{product.name}</Text>
                  <Text fontWeight="600">{product.originalPrice}</Text>
                </Box>
              )
            })
          }
        </Box>
      </Box>
    </Box>
  );
}

export default List;