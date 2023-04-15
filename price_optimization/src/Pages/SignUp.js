import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Icon,
    Link
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { Register } from '../Redux/SignupRedux/action';
import { Navigate, useNavigate } from 'react-router-dom';


function SignUp() {

    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [user_name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
const navigate = useNavigate()
    const { isAuthention } = useSelector((store) => store.sign);
    // const navigate = useNavigate();
    if (isAuthention) {
      return <Navigate to="/login" />
    }

    const handleSubmit = () => {
        const payload = {
            user_name,
          email,
          mobile,
          password,
        }
        dispatch(Register(payload))
      }

    return (
        <Box position={'relative'}>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}>
                <Stack spacing={{ base: 10, md: 20 }}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                       Welcome to 
                        <Text
                            as={'span'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            bgClip="text">
                            {' '}Price
                        </Text>{' '}
                        Optimization
                    </Heading>

                </Stack>
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={4}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                            Register
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text">
                                !
                            </Text>
                        </Heading>
                    </Stack>
                    <Box as={'form'} mt={10}>
                        <Stack spacing={4}>
                            <Input
                                placeholder="User_name"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Input
                                placeholder="Email"
                                type={'email'}
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                placeholder="Mobile"
                                bg={'gray.100'}
                                type={'Number'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                            <Input
                                placeholder="Password"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Stack>
                        <Button
                            fontFamily={'heading'}
                            mt={8}
                            w={'full'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            color={'white'}
                            _hover={{
                                bgGradient: 'linear(to-r, red.400,pink.400)',
                                boxShadow: 'xl',
                            }}
                            onClick={handleSubmit}>
                           Sign Up
                        </Button>
                    </Box>
                    <Text color={'#000'} align={'center'}>
                  Already a user? <Text style={{cursor:'pointer'}} onClick={()=>navigate("/login")} color={"blue"}>Login</Text>
                </Text>
                </Stack>
            </Container>
            <Blur
                position={'absolute'}
                top={-10}
                left={-10}
                style={{ filter: 'blur(70px)' }}
            />
        </Box>
    );
}

export const Blur = (IconProps) => {
    return (
        <Icon
            width={{ base: '100%', md: '40vw', lg: '30vw' }}
            zIndex={{ base: -1, md: -1, lg: 0 }}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...IconProps}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    );
};



export default SignUp