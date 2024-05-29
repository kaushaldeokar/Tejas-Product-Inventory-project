import {TJ_Product_Structure} from '../Entity/TJ_Product_Structure.js'

const get_all_product_details =async(req,res)=>{
    try{

        try {
            const product_details = await TJ_Product_Structure.findAll();
            
            return res.status(200).json(
                product_details
            )
          } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
          }

        
        
    }catch(err){
        return res.status(402).json({
            message : "Product details cannot be fetched",
        })
    }
}


export {get_all_product_details};

