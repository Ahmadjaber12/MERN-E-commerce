import mongoose from "mongoose";
export const connection=async () => {
try{
    return await mongoose.connect("mongodb://localhost:27017/market")
    .then(()=>console.log(`successfull`));}

catch(err){
console.log(` ${err.message}`)
}
}

