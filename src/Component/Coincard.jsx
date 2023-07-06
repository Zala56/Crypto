import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Heading, HStack, VStack,Image,Text } from '@chakra-ui/react'
import CoDetail from './CoDetail'

const  Coincard=({id, name,image,symbol,price,currencySymbol="₹"})=> (

        <Link to={`/coin/${id}`}>
        
                <VStack w={"52"} shadow={"lg"} p={"8"}  borderRadius={"lg"} transition={"all 0.3s"}   m ={"4"}
                css ={{
                    "&:hover":{
                        transform:"scale(1.1)"
                    }
                }}>
                    <Image src ={image} w ={"10"} h={"10"} 	 objectFit={"contain"}/>
                    <Heading size={"md"} noOfLines={"1"}>{symbol}</Heading>
                    <Text noOfLines={"1"}>{name}</Text>
                    <Text noOfLines={"1"}>{price?`${currencySymbol}${price}`:"na"}</Text>
                </VStack>
                
        </Link>
        
        )
        
export default Coincard