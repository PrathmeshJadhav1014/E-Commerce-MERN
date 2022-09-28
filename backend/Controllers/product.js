const productSchema = require('../Models/product');

exports.createProduct = async(req,res)=>{
    try{
        const saveData = await new productSchema(req.body).save();
        res.json(saveData);
    }
    catch{(err)=>res.json(err)};
}

exports.getProduct = async(req,res)=>{
    try{
        const getusers = await productSchema.find();
        res.json(getusers);
    }
    catch{(err)=>res.json(err)};
}
exports.getP = async (req,res)=>{
    try{
        const user = await productSchema.find({_id:req.params.id});
        res.json(user);
    }catch(err){
        res.json({err});
    }
}
exports.updateP = (req,res)=>{
    productSchema.findOneAndUpdate({_id:req.params.id} ,(req.body),{new:true},(err,data)=>{
        try{
            res.json(data);
        }catch(err){
            res.json({err});
        }
    })
}
exports.deleteProduct =(req,res)=>{
 
    productSchema.findOneAndDelete({_id:req.params.id},(err,data)=>{
        if(err){
            res.json({err});
        }else{
            res.json(data);
        }
    });
}