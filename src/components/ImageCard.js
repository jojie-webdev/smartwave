import { useState } from 'react';
import { Box, Image } from '@chakra-ui/react'
import { FaRegHeart } from "react-icons/fa";

const ImageCard = ({id, src}) => {

  const [hearts, setHearts] = useState([]);

  const handleClickProductSave = (e) => {
    e.preventDefault();
    setHearts(oldHearts => [...oldHearts, id])
  }

  return (
    <Box
      backgroundColor="#f0f0f1"
      padding={25}
      width="250px"
      height="300px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius={10}
      position="relative"
    >
      <Box position="absolute" top={0} right={0}>
        <Box
          padding={15}
          backgroundColor="#fff"
          mt="10px"
          mr="10px"
          borderRadius={10}
        >
          <FaRegHeart
            size="30"
            cursor="pointer"
            color={`${hearts.includes(id) ? '#19b2a7' : '#000' }`}
            onClick={(e) => handleClickProductSave(e, id)}
          />
        </Box>
      </Box>
      <Image
        boxSize='150px'
        objectFit='cover'
        src={src}
        alt='Dan Abramov'
      />
    </Box>
  );
}
 
export default ImageCard;