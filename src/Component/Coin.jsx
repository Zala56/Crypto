import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '..'
import { Container, Heading, HStack, VStack,Image,Text, Button, RadioGroup,Radio } from '@chakra-ui/react'
import Loader from './Loader'
import Exchangeca from './Exchangeca '
import Coincard from './Coincard'
import coin from "../Desig/coin.css";
import Err from './Err'

function Coin() {
    const[emp,Setemp] = useState([])
    const[loading,Setloading] = useState(true)
    const[error,Seterror] = useState(false)
    const[page,Setpage] = useState(1)
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const[currency,Setcurrency] = useState("inr")
    const [limit, setLimit] = useState(20);

    const totalPages = 40;

    const currencySymbol = currency	=== "inr"?"₹":currency	=== "eur"?"€":"$";

    const handlePreviousClick = () => {
     if (page > 1) {
    Setpage(page - 1);
    }
    
};
const handleNextClick= () => {
    if (page < totalPages) {
    Setpage(page + 1);
    }
    if(page==10)
    {
        <Err/>
    }
};


  

    useEffect(()=>{

        const fetchExchange  = async()=>{
           try{
            const {data}  = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
            Setemp(data)
            Setloading(false)
           }catch(error)
           {
           Seterror(true);
            Setloading(false);
              
           }
        }
        fetchExchange()

    },[currency,page])

    if(error)
        return <Err/>
  return (
       
    
    
        <Container maxW ={"container.xl"}>
            {


                loading?<Loader/>:(
                    <>
                    
                    <HStack spacing={"4"}>
                    <RadioGroup defaultValue={currency} onChange={Setcurrency}>
                        <Radio value ={"inr"}>₹</Radio>
                        <Radio value ={"usd"}>$</Radio>
                        <Radio value ={"eur"}>€</Radio>

                    </RadioGroup>
                    
    



                    </HStack>
                    <HStack wrap={"wrap"}>
                       {
                    emp.slice(0, limit ? limit : emp.length).map((i)=>(
                            <Coincard
                              id={i.id}
                              name={i.name}
                              image={i.image} 
                              rank={i.trust_score_rank}
                              symbol={i.symbol} 
                              price	={i.current_price}
                              currencySymbol={currencySymbol}/>


                        ))
                       }
                       </HStack>
                       <HStack>
                       <div>
   
  </div>
                       </HStack>
                       <HStack>
                       
                       
                     </HStack>
                    
                    
                        
                          
                    
                                  
                                  
                    

                    
                    </>
                )
            }

        </Container>
  )
}



export default Coin