import Product from "../Config/modules/Product.modele.js"

export const UpdatedProduct=async(req,res)=>{

    const {id}=req.params;
    const product=req.body;
try{   
    
  var UpdatedProduct= await Product.findByIdAndUpdate(id,product,{new:true})
    res.status(200).json({Result:true,message:"Updated Successfully",data:UpdatedProduct});
}
catch(err){
    console.log(err);
    }   
}

export const DeleteProduct=async(req,res)=>{

    const {id}=req.params;
try{   
    
    await Product.findByIdAndDelete(id);
    res.status(200).json({success:true,message:"Deleted Successfully"});
}
catch(err){
    console.log(err);
    }   
}

export const AddProduct=async (req,res)=>{

    const product=req.body;

    if(!product.price || !product.Image || !product.name)
        {
            return res.status(400).json({Result:false,message:"Please provide all fields"})
        }
    const newProduct=new Product(product)
    try{
        await newProduct.save();
        res.status(201).json({Result:true,message:"New Product Created",data:newProduct})
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({Result:false,message:"Error on Server"})
    }
}

export const GetAllProduct=async(req,res)=>{
    try{      
        const products=await Product.find();
        res.status(200).json({Result:true,products});
    }
    catch(err){
        console.log(err);
        }   
    }