import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { server } from '..'
import btcSrc from "../assets/btc1.png";
import { motion } from "framer-motion";
import axios from 'axios';

const Home = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

 async function handleSearch(event) {
    const query = event.target.value;
    setQuery(query);
    const response = await axios.get(`${server}/coins?q=${query}`);
    setResults(response.data);
  }

 
  return (
    <>
   
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        Xcrypto
      </Text>
    </Box>
    </>
  );
};

export default Home;