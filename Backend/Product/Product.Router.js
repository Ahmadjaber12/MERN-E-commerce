import {Router} from "express"
import *  as ProductController from "./Product.Controller.js"

const router=Router()

router.get("/Products",ProductController.GetAllProduct)
router.post("/Addproduct",ProductController.AddProduct)
router.delete("/deleteProduct/:id",ProductController.DeleteProduct)
router.put("/UpdateProduct/:id",ProductController.UpdatedProduct)


export default router;