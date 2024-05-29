import {TJ_Product_Structure} from '../Entity/TJ_Product_Structure.js'

const edit_product_details_by_id =async(req,res)=>{
    try{

        try {
            console.log(req.params.id);
            const result = await TJ_Product_Structure.update(req.body, {
                where: { id: req.params.id }
              });

            
            
            return res.status(200).json(
                {message:"Product Updated Successfully"}

            )
          } catch (error) {
            console.error('Error Updating Products:', error);
            throw error;
          }

        
        
    }catch(err){
        return res.status(402).json({
            message : "Product details cannot be fetched",
        })
    }
}


export {edit_product_details_by_id};

