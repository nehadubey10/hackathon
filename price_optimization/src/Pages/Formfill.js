import React, { useState } from 'react';
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    SimpleGrid,
    Heading

} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import Nav from './Navbar';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../components/46448-turn-peoples-comments-into-money.json";
import LoadingCart from './LoadingCart';

function Formfill() {

    const [productName, setProductName] = useState("")
    const [productName1, setProductName1] = useState("")
    const [productName2, setProductName2] = useState("")
    const [productName3, setProductName3] = useState("")
    const [productName4, setProductName4] = useState("")
    const [productName5, setProductName5] = useState("")
    const [productName6, setProductName6] = useState("")
    const [productName7, setProductName7] = useState("")
    const [productName8, setProductName8] = useState("")
    const [productName9, setProductName9] = useState("")
    const [productName10, setProductName10] = useState("")
    const [productName11, setProductName11] = useState("")
    const [productName24, setProductName24] = useState("")
    const [productName25, setProductName25] = useState("")
    const [productName26, setProductName26] = useState("")
    const [productName27, setProductName27] = useState("")
    const [productName28, setProductName28] = useState("")
    const [productName29, setProductName29] = useState("")
    const [productName30, setProductName30] = useState("")
    const [productName31, setProductName31] = useState("")
    const [productName32, setProductName32] = useState("")
    const [productName33, setProductName33] = useState("")
    const [productName34, setProductName34] = useState("")
    const [productName12, setProductName12] = useState("")
    const [productName13, setProductName13] = useState("")
    const [productName14, setProductName14] = useState("")
    const [productName15, setProductName15] = useState("")
    const [productName16, setProductName16] = useState("")
    const [productName17, setProductName17] = useState("")
    const [productName18, setProductName18] = useState("")
    const [productName19, setProductName19] = useState("")
    const [productName20, setProductName20] = useState("")
    const [productName21, setProductName21] = useState("")
    const [productName22, setProductName22] = useState("")
    const [productName23, setProductName23] = useState("")
    const [output, setOutput] = useState(0)
    const [output1, setOutput1] = useState(0)
    const [showLoaderSatet, setShowLoader] = useState(false)


    const submitData = () => {
        showLoader()
            // axios.post("https://a7ba-103-131-25-173.ngrok-free.app/model/predict", data).then((res) => console.log({ res }))
            //     .catch((err) => console.log(err.message))

            fetch("https://a7ba-103-131-25-173.ngrok-free.app/model/predict", {
                method: "POST",
                body: JSON.stringify({
                    freight_price: productName2,
                    product_name_lenght: productName3,
                    product_description_lenght: productName4,
                    product_photos_qty: productName5,
                    product_weight_g: productName6,
                    product_score: productName7,
                    customers: productName8,
                    weekday: productName9,
                    weekend: productName10,
                    holiday: productName11,
                    month: productName12,
                    year: productName13,
                    s: productName14,
                    volume: productName15,
                    comp_1: productName16,
                    ps1: productName17,
                    fp1: productName18,
                    comp_2: productName19,
                    ps2: productName20,
                    fp2: productName21,
                    comp_3: productName22,
                    ps3: productName23,
                    fp3: productName24,
                    bed_bath_table: productName25,
                    computers_accessories: productName26,
                    consoles_games: productName27,
                    cool_stuff: productName28,
                    furniture_decor: productName29,
                    health_beauty: productName30,
                    garden_tools: productName31,
                    perfumery: productName32,
                    watches_gifts: productName33
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => { 
                if (res.ok) {
                    res.json().then(json => {
                      console.log({json});
                setOutput({json})
                      
                    });
                  }
                console.log("-----------------", output?.json?.message); 
               // setOutput1(output?.json?.message)
                 })
                .catch((err) => console.log("=======", err.message))
    }

    const showLoader = ()=>{
        setShowLoader(true);
      let time =   setTimeout(()=>{
           setShowLoader(false);
           console.log(showLoaderSatet)
            clearTimeout(time)

        },2500)

    }


    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);
    return (
        <>
             
    <Nav />
    <Box mt={30}
        ml={100}>
        <Heading>
       Output: {(output?.json?.message)}
       </Heading>
    </Box>
    <Box>
    </Box>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
                <Box
                    style={{ width: '80%' }}>
                    <Flex gap={20}
                        mt={20}>
                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                Freight Price
                            </FormLabel>
                            <Input onChange={(e) => setProductName2(e.target.value)} />
                        </FormControl>
                        <FormControl >
                        <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                            Product Name Lenght
                        </FormLabel>
                        <Input onChange={(e) => setProductName3(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                            Product Description Lenght
                        </FormLabel>
                        <Input onChange={(e) => setProductName4(e.target.value)} />
                    </FormControl>
                    </Flex>
                    <Flex gap={20}
                        mt={15}>
                      
                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                Product Photos Qty
                            </FormLabel>
                            <Input onChange={(e) => setProductName5(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                            Product Weight_g
                        </FormLabel>
                        <Input onChange={(e) => setProductName6(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                            Product_score
                        </FormLabel>
                        <Input onChange={(e) => setProductName7(e.target.value)} />
                    </FormControl>
                    </Flex>
                    <Flex gap={20}
                        mt={15}>
                       
                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                Customers
                            </FormLabel>
                            <Input onChange={(e) => setProductName8(e.target.value)} />
                        </FormControl>

                        <FormControl>
                        <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                            Weekday
                        </FormLabel>
                        <Input onChange={(e) => setProductName9(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                            Weekend
                        </FormLabel>
                        <Input onChange={(e) => setProductName10(e.target.value)} />
                    </FormControl>
                    </Flex>
                    <Flex gap={20}
                        mt={15}>
                       
                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                Holiday
                            </FormLabel>
                            <Input onChange={(e) => setProductName11(e.target.value)} />
                        </FormControl>

                        <FormControl>
                        <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                            Month
                        </FormLabel>
                        <Input onChange={(e) => setProductName12(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                            Year
                        </FormLabel>
                        <Input onChange={(e) => setProductName13(e.target.value)} />
                    </FormControl>
                    </Flex>
                    <Flex gap={20}
                        mt={15}>
                       
                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                S
                            </FormLabel>
                            <Input onChange={(e) => setProductName14(e.target.value)} />
                        </FormControl>

                        <FormControl>
                        <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                            Volume
                        </FormLabel>
                        <Input onChange={(e) => setProductName15(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                            COMP_1
                        </FormLabel>
                        <Input onChange={(e) => setProductName16(e.target.value)} />
                    </FormControl>
                    </Flex>
                    <Flex
                        gap={20}
                        mt={15}>
                       

                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                PS1
                            </FormLabel>
                            <Input onChange={(e) => setProductName17(e.target.value)} />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                FP1
                            </FormLabel>
                            <Input onChange={(e) => setProductName18(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                COMP_2
                            </FormLabel>
                            <Input onChange={(e) => setProductName19(e.target.value)} />
                        </FormControl>
                    </Flex>
                    <Flex gap={20}
                        mt={15}>
                        
                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                PS2
                            </FormLabel>
                            <Input onChange={(e) => setProductName20(e.target.value)} />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                FP2
                            </FormLabel>
                            <Input onChange={(e) => setProductName21(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                COMP_3
                            </FormLabel>
                            <Input onChange={(e) => setProductName22(e.target.value)} />
                        </FormControl>
                    </Flex>
                    <Flex gap={20}
                        mt={15}>
                        
                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                PS3
                            </FormLabel>
                            <Input onChange={(e) => setProductName23(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                FP3
                            </FormLabel>
                            <Input onChange={(e) => setProductName24(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                Bed Bath Table
                            </FormLabel>
                            <Input onChange={(e) => setProductName25(e.target.value)} />
                        </FormControl>
                    </Flex>
                    <Flex gap={20}
                        mt={15}>
                        
                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                Computers Accessories
                            </FormLabel>
                            <Input onChange={(e) => setProductName26(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                Consoles Games
                            </FormLabel>
                            <Input onChange={(e) => setProductName27(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                Cool Stuff
                            </FormLabel>
                            <Input onChange={(e) => setProductName28(e.target.value)} />
                        </FormControl>
                    </Flex>
                    <Flex gap={20}
                        mt={15}>
                        

                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                Furniture Decor
                            </FormLabel>
                            <Input onChange={(e) => setProductName29(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                            Health Heauty
                        </FormLabel>
                        <Input onChange={(e) => setProductName30(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                            Garden Tools
                        </FormLabel>
                        <Input onChange={(e) => setProductName31(e.target.value)} />
                    </FormControl>
                    </Flex>
                    <Flex gap={20}
                        mt={15}>
                      
                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                Watches Gifts
                            </FormLabel>
                            <Input onChange={(e) => setProductName33(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                Perfumery
                            </FormLabel>
                            <Input onChange={(e) => setProductName32(e.target.value)} />
                        </FormControl>
                    </Flex>
                   

                    <Button
                        w="100%"
                        mt={20}
                        mb={30}
                        colorScheme="red"
                        variant="solid"
                        onClick={() => {
                            submitData()
                        }}
                    >
                        Submit
                    </Button>

                </Box>
            </Box>
      
           
          {showLoaderSatet &&  <LoadingCart/> }
            
        </>
    );
}


export default Formfill