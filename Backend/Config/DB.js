import mongoose from "mongoose";
export const connection=async () => {
try{
    return await mongoose.connect("mongodb+srv://zalatahmad87:bsiughuSFPqAzF8H@cluster0.uk4impd.mongodb.net/market?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>console.log(`successfull`));}

catch(err){
console.log(` ${err.message}`)
}
}
 
