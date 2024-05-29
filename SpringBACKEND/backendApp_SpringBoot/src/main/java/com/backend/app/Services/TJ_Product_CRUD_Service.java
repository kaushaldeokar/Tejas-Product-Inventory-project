package com.backend.app.Services;


import com.backend.app.Entity.TJ_Product_Detail_Structure;
import com.backend.app.Repository.TJ_Product_JPA_Repository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//Controller ------>> Service ------->> repository
//Here we will implement repository methods //
@Service
public class TJ_Product_CRUD_Service {

    @Autowired
    private TJ_Product_JPA_Repository tjProductJpaRepository;

    @Transactional
    public TJ_Product_Detail_Structure crud_create_tj_product_detail(TJ_Product_Detail_Structure post){
       return  tjProductJpaRepository.save(post);
    }

    @Transactional
    public List<TJ_Product_Detail_Structure> crud_get_all_tj_product_details(){
        return  tjProductJpaRepository.findAll();
    }

    public TJ_Product_Detail_Structure crud_get_tj_product_detail_by_id(Long myID){
        return  tjProductJpaRepository.findById(myID).orElse(null);
    }

    public void crud_delete_tj_product_detail_by_id(Long id) {
        tjProductJpaRepository.deleteById(id);
    }

    public void crud_delete_tj_product_detail_all() {
        tjProductJpaRepository.deleteAll();
    }

    public void crud_update_tj_product_detail_by_id(TJ_Product_Detail_Structure my_entry) {
        tjProductJpaRepository.save(my_entry);

    }

    public boolean crud_find_tj_product_detail_by_name(TJ_Product_Detail_Structure my_entry){
        return false;
    }


}
