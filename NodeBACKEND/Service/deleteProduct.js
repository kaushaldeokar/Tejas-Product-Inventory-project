import {TJ_Product_Structure} from '../Entity/TJ_Product_Structure.js'

const delete_product_details_by_id =async(req,res)=>{
    try{

        try {
            console.log(req.params.id);
            const result = await TJ_Product_Structure.destroy({
                where: { id: req.params.id }
              });

            
            
            return res.status(200).json(
                {message:"Product Deleted Successfully"}

            )
          } catch (error) {
            console.error('Error Deleting products:', error);
            throw error;
          }

        
        
    }catch(err){
        return res.status(402).json({
            message : "Product details cannot be deleted",
        })
    }
}


export {delete_product_details_by_id};

