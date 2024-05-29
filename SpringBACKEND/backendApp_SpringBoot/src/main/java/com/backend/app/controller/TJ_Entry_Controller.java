package com.backend.app.controller;


import com.backend.app.Entity.TJ_Product_Detail_Structure;
import com.backend.app.Services.TJ_Product_CRUD_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jackson.JsonComponentModule;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/TJ")
public class TJ_Entry_Controller {

//      currently we donot have db so we created it as table //
        private Map<Long, TJ_Product_Detail_Structure> tj_product_db = new HashMap<>();

//      Create Service Object by bean
        @Autowired
        private TJ_Product_CRUD_Service tjProductCrudService;

        @Autowired
        private JsonComponentModule jsonComponentModule;

        //      returns all posts in form of array list
        @GetMapping
        public List<TJ_Product_Detail_Structure> get_all_tj_product_details(){
              return tjProductCrudService.crud_get_all_tj_product_details();
//            return new ArrayList<>(Blog_posts.values());
        }

//
        @PostMapping
        public String create_tj_product_detail(@RequestBody TJ_Product_Detail_Structure my_entry){

                try{
                        tj_product_db.put(my_entry.getId(), my_entry);
                        
                        if (tjProductCrudService.crud_find_tj_product_detail_by_name(my_entry)){
                                throw new RuntimeException("TJ product detail already exists PLEASE EDIT ");
                        }

                        tjProductCrudService.crud_create_tj_product_detail(my_entry);
                }catch (Exception e){
                        return "ERROR : " + e  ;
                }

                return "post created";
        }

        @DeleteMapping
        public String delete_tj_product_detail_all(){
                tjProductCrudService.crud_delete_tj_product_detail_all();
                return "All Posts Deleted Successfully";
        }
//
        @GetMapping("/id/{myID}")
        public TJ_Product_Detail_Structure get_tj_product_detail_by_id(@PathVariable Long myID){
                  return tjProductCrudService.crud_get_tj_product_detail_by_id(myID);
//                return Blog_posts.get(myID);
        }

        //here if GetMapping hi rakha toh chalega hi nahi verb change krke DeleteMapping krna pdega
        @DeleteMapping("/id/{myID}")
        public String delete_tj_product_detail_by_id(@PathVariable Long myID){
                tjProductCrudService.crud_delete_tj_product_detail_by_id(myID);
                tj_product_db.remove(myID);
                return "Post Deleted Successfully";
        }

        @PutMapping("/id/{myID}")
        public String update_tj_product_detail_by_id(@PathVariable Long myID,@RequestBody TJ_Product_Detail_Structure my_entry){
//
                my_entry.setId(myID);
                tjProductCrudService.crud_update_tj_product_detail_by_id(my_entry);
                return "Post Updated Successfully ";
        }
}
