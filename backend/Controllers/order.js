const orderSchema = require('../Models/order');

exports.createOrder = async(req,res)=>{
    try{
        const saveData = await new orderSchema(req.body).save();
        res.json(saveData);
    }
    catch{(err)=>res.json(err)};
}

exports.getOrder = async(req,res)=>{
    try{
        const getusers = await orderSchema.find();
        res.json(getusers);
    }
    catch{(err)=>res.json(err)};
}
exports.deleteOrder =(req,res)=>{
 
    orderSchema.findOneAndDelete({_id:req.params.id},(err,data)=>{
        if(err){
            res.json({err});
        }else{
            res.json(data);
        }
    });
}
exports.updateOrder = (req,res)=>{
    orderSchema.findOneAndUpdate({_id:req.params.id} ,(req.body),{new:true},(err,data)=>{
        try{
            res.json(data);
        }catch(err){
            res.json({err});
        }
    })
}

