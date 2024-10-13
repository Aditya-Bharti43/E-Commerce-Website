import Router from "express";
import { newCollectionController, allProducts, popularinwomenController, removeProductController, addProductController } from "../controllers/product.controller.js";



const router = Router()
router.route("/addproduct").post(addProductController)

router.route("/removeproduct").post(removeProductController)


router.route("/allproducts").get(allProducts)

router.route("/newcollections").get(newCollectionController)

router.route("/popularinwomen").get(popularinwomenController)


export default router