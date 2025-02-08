import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react'
import  { useState } from 'react'
import { useProductStore } from '../Store/product'

const CreatePage = () => {
    const toast = useToast();
    const {createProduct}=useProductStore();
    const [newProduct,setNewProduct]=useState({
        name:"",
        price:"",
        Image:""
    })
    const handleAddProduct=async ()=>{
        const {success,message}=await createProduct(newProduct);
        if(!success)
            toast({
        title:"Error",description:message ,status:"error"})
        
        else
        {toast({title:"Success",description:message,status:"success"})
        setNewProduct({name:"",price:"",Image:""})}


    }

  return (
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading as={'h1'} size={'2xl'} textAlign={"center"} mb={8}>
                    Create New Product
                </Heading>
                <Box w={'full'} bg={useColorModeValue('white',"gray.800")}p={6} rounded={"lg"} shadow={'md'}>
                    <VStack spacing={4}>
                         <Input placeholder='Product Name' name='name' value={newProduct.name} onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})}/>
                         <Input placeholder='Product Price' name='price' value={newProduct.price} onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}/>
                         <Input placeholder='Product Image' name='image' value={newProduct.Image} onChange={(e)=>setNewProduct({...newProduct,Image:e.target.value})}/>
                        <Button colorScheme='blue' onClick={handleAddProduct} w={"full"}>Add Product</Button>
                    </VStack>

                </Box>
            </VStack>
        </Container>

)
}

export default CreatePage