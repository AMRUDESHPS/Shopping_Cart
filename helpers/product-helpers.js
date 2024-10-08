var db=require('../config/connection')
var collection=require('../config/collections');
var objectId = require("mongodb").ObjectId;
module.exports={
    addProduct:(product,callback)=>{
        console.log(product);
        db.get().collection('product').insertOne(product).then((data)=>{
           
            callback(data.insertedId)
        })
    },
    getAllProduct:()=>{
       return new Promise(async(resolve,reject)=>{
        let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
        resolve(products)
       })
    },
}