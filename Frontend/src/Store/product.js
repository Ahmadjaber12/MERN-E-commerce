import {create} from "zustand"
export const useProductStore=create((set)=>({
    products:[],
    setProducts:(products)=>set({products}),
    createProduct:async(newProduct)=>{
        if(!newProduct.name || ! newProduct.price  || ! newProduct.Image)
            return {success: false,message:"Please fill all the fields"}

        const res=await fetch("http://localhost:4000/Addproduct",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const {data}=await res.json();
        set((state)=>({products:[...state.products,data]}))
        return {success:true,message:"Product created successfully "}
    },
    fetchProducts:async ()=>{
        const res=await fetch("http://localhost:4000/Products")
        const data=await res.json();
        set({products:data.products})
    },
    DeleteProduct:async(id)=>{
        const res=await fetch(`http://localhost:4000/deleteProduct/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data=await res.json(); 
        set(state=>({products:state.products.filter(pro=>pro._id !== id)}))
        return {success:true,message:data.message};
    },
    UpdatedProduct:async(pid,product)=>{
            const res=await fetch(`http://localhost:4000/UpdateProduct/${pid}`,{
            method:"PUT"  ,
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(product)
    })
    const data=await res.json();
    if(!data.message) return {success:false,message:data.message};
    set((state)=>({
        products:state.products.map((p)=>(p._id===pid ? data.data : p))
    }))
    return {success:true,message:data.message} 
    }
}))
