/* eslint-disable react/prop-types */
import { Box, Button, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast, VStack } from "@chakra-ui/react"
import {DeleteIcon, EditIcon} from "@chakra-ui/icons"
import { useProductStore } from "../Store/product.js"
import { useState } from "react"

const ProductCard=({product})=>{
    const textColor=useColorModeValue("gray.600","gray.200")
    const bg=useColorModeValue("white","gray.800")
    const {DeleteProduct,UpdatedProduct} =useProductStore();
    const [Updatedproduct,setUpdatedProduct]=useState(product)
    const toast=useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleUpdatedProduct=async(pid,Updatedprodct)=>{
          const {success,message}=await  UpdatedProduct(pid,Updatedprodct);
            
            onClose();
            if(!success)
                toast({
                    title:"Error",description:message ,status:"error"})
            
            else
            {toast({title:"Success",description:message,status:"success"})}

    }
    const HandleDeleteProduct=async (id)=>{
           const {success,message}= await DeleteProduct(id);
           
           if(!success)
            toast({
                title:"Error",description:message ,status:"error"})
        
        else
        {toast({title:"Success",description:message,status:"success"})}
            }
    return (
        <Box
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        transition='all 0.3s'
        _hover={{transform:"translateY(-5px)",shadow:'xl'}}  bg={bg}  >
                <Image src={product.Image} alt={product.name} h={48} w='full' objectFit='cover'/>
            <Box p={4}>
                <Heading as='h3' size='md' mb={2}>
                    {product.name}
                </Heading>
                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                ${product.price}
                </Text>
                <HStack spacing={2}>
                    <IconButton icon={<EditIcon/>} onClick={onOpen} colorScheme="blue" />
                    <IconButton icon={<DeleteIcon />} onClick={()=> HandleDeleteProduct(product._id)} colorScheme="red" />
                </HStack>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Product</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input placeholder="Product Name" name="name" value={Updatedproduct.name} onChange={(e)=>setUpdatedProduct({...Updatedproduct,name:e.target.value})}/>
                            <Input placeholder="Product Price" name="price" value={Updatedproduct.price} onChange={(e)=>setUpdatedProduct({...Updatedproduct,price:e.target.value})}/>
                            <Input placeholder="Product Image" name="Image" value={Updatedproduct.Image} onChange={(e)=>setUpdatedProduct({...Updatedproduct,Image:e.target.value})}/>

                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={()=>handleUpdatedProduct(product._id,Updatedproduct)}>
                            Update
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>

            </Modal>
        </Box>
    )
}
export default ProductCard;