import {TJ_Product_Structure} from '../Entity/TJ_Product_Structure.js'

const create_product_details =async(req,res)=>{
    try{

        try {
            const product = await TJ_Product_Structure.create(req.body);
            console.log('Product saved:', product);
            
            return res.status(200).json(
                "Product Created"

            )
          } catch (error) {
            console.error('Error fetching Products:', error);
            throw error;
          }

        
        
    }catch(err){
        return res.status(402).json({
            message : "Product details cannot be fetched",
        })
    }
}


export {create_product_details};

