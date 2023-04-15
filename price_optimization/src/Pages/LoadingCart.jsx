import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Center,
  CircularProgress
} from '@chakra-ui/react'
import React from 'react'
import { useSelector } from "react-redux"
import Lottie from "lottie-react";
import groovyWalkAnimation from "../components/46448-turn-peoples-comments-into-money.json";


function LoadingCart() {
  const OverlayOne = () => (



    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )


  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)



  return (
    <>
     <Modal isCentered isOpen>
          <OverlayOne />
          <ModalContent bg="none" boxShadow={"none"} >
            <Center>
              <Lottie animationData={groovyWalkAnimation} loop={true} />
            </Center>
          </ModalContent>
        </Modal>
    </>
  )
}
export default LoadingCart;