import { Router } from "express";
import { addtocart, removefromcart ,getcart} from '../controllers/cart.controller.js'
import { fetchUser } from "../middlewares/fetch.middleware.js";

const router = Router()

router.route(fetchUser, "/addtocart").post(addtocart)

router.route(fetchUser, "/removefromcart").post(removefromcart)


router.route(fetchUser,"/getcart").post(getcart)


export default router