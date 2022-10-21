import {useState} from 'react';
import { Box, Text } from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";
import { CloseIcon } from "@chakra-ui/icons";
import { TbDiscount2 } from "react-icons/tb";



const PointedFourStar = () => <Box color="#64d2ff" fontSize="45">&#10022;</Box>;

const OrderStatus = () => {

  const [items, setItems] = useState([{
      id: '1',
      status: "Your Order has been shipped.",
      description: "We have shipped the package numbered 98613471.",
      icon: <PointedFourStar />
    },
    {
      id: '2',
      status: "Discount alert!",
      description: "Up to 50% discount on baby care and cosmetics",
      icon: <TbDiscount2 size="40" color="#773ee9"/>
    },
    {
      id: '3',
      status: "Your Order has been delivered.",
      description: "We have shipped the package numbered 98613471.",
      icon: <BsCheckCircleFill size="30" color="#773ee9"/>
    },
    {
      id: '4',
      status: "Your Order has been shipped.",
      description: "We have shipped the package numbered 98613471.",
      icon: <PointedFourStar />
    },
  ])

  const removeItemHandler = (e, id) => {
    e.preventDefault()
    const newState = items.filter(item => item.id !== id);
    setItems(newState);
  }

  return (
    <Box className="order-status" width="45%">
      <Box
      background="#fff"
      padding="25"
      borderRadius="10"
    >
        {
        items.map((item) => {
          return (
            <Box
              key={item.id}
              display="flex"
              justifyContent="space-between"
              className="status-item"
            >
              { item.icon }
              <Box flexGrow={1} pl="40px">
                <Text fontWeight="600" fontSize="20px">{item.status}</Text>
                <Text fontSize="15px" color="gray">
                  {item.description}
                </Text>
              </Box>
              <Box width="50px" textAlign="center">
                <CloseIcon alignSelf="center" cursor="pointer" onClick={(e) => removeItemHandler(e, item.id)} />
              </Box>
            </Box>
          )
        })
      }
      </Box>
    </Box>
  );
}

export default OrderStatus;