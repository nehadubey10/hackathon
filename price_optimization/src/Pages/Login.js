import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Icon,
    Container,
    SimpleGrid,
    Text
  } from '@chakra-ui/react';
  import { useDispatch , useSelector} from 'react-redux';
  import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { loginUser } from '../Redux/LoginRedux/action';
  
   function Login() {

    const handleSubmit = () => {
        const cred = {
          email,
          password
        }
        dispatch(loginUser(cred))
      };

    const [email, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();

    const { isAuthenticated, token } = useSelector((state) => state.login);
    const navigate = useNavigate() ;

    if (isAuthenticated) {
        return <Navigate to="/fill" />
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
                    Price Optimization
                    <Text
                        as={'span'}
                        bgGradient="linear(to-r, red.400,pink.400)"
                        bgClip="text">
                        {' '}Login Page
                    </Text>{' '}
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
                        SignIn
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
              <FormControl id="email">
                <FormLabel color={'#000'}>Email address</FormLabel>
                <Input 
                placeholder="Email"
                type="email" 
                onChange={(e) => setUsername(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel color={'#000'}>Password</FormLabel>
                <Input
                placeholder="Password"
                type="password" onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
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
                  Sign in
                </Button>
                <Box>
                <Text align={'center'}>
                New user? <Link href="/" color={'blue.400'}>Sign-Up</Link>
              </Text>
                </Box>
              </Stack>
              </Box>
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


  export default Login;