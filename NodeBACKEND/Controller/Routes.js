import express from 'express'
import {get_all_product_details} from '../Service/getProducts.js'
import { create_product_details } from '../Service/createProduct.js';
import { edit_product_details_by_id } from '../Service/editProduct.js';
import { delete_product_details_by_id } from '../Service/deleteProduct.js';

const app =express();

app.use(express.json());

const CrudRouter = express.Router();

CrudRouter.get("/",get_all_product_details);
CrudRouter.post("/",create_product_details);
CrudRouter.put("/id/:id",edit_product_details_by_id);
CrudRouter.delete("/id/:id",delete_product_details_by_id);



export default CrudRouter;

