import mongoose from "mongoose";

const uri = "mongodb://zalatahmad87:rROy1OoPsXHv3T11@cluster0.gvz45.mongodb.net/Market?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your actual connection string

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB Atlas!"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

