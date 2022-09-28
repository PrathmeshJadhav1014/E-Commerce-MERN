const cartSchema = require('../Models/cart');

exports.createCart = async(req,res)=>{
    try{
        const saveData = await new cartSchema(req.body).save();
        res.json(saveData);
    }
    catch{(err)=>res.json(err)};
}

exports.getCarts = async(req,res)=>{
    try{
        const getusers = await cartSchema.find();
        res.json(getusers);
    }
    catch{(err)=>res.json(err)};
}
exports.getCart = async (req,res)=>{
    try{
        const user = await cartSchema.find({uid:req.params.id});
        res.json(user);
    }catch(err){
        res.json({err});
    }
}
exports.deleteCart =(req,res)=>{
 
    cartSchema.findOneAndDelete({_id:req.params.id},(err,data)=>{
        if(err){
            res.json({err});
        }else{
            res.json(data);
        }
    });
}

