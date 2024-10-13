// addproduct , removeproduct , allproducts
import { Product } from "../models/product.model.js";

export const addProductController = async()=>{
 
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else {
        id = 1;
    }
    
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
})

}

export const removeProductController =  async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
      console.log("Removed");

      res.json({
        success:true,
        name:req.body.name,
      })
}

export const allProducts = async(req,res)=>{
    let products=await Product.find({})
    console.log("All Products fetched");
    res.send(products);
}

export const newCollectionController = async(req,res)=>{
    let products = await Product.find({});
    let newcollection=products.slice(1).slice(-8);

    console.log("New Collection Fetched");
    res.send(newcollection);
}


export const popularinwomenController = async(req,res)=>{
    let products = await Product.find({category:"women"});
    let popular_in_women=products.slice(0,4);
    console.log("Popular in women fetched");
    res.send(popular_in_women);
}