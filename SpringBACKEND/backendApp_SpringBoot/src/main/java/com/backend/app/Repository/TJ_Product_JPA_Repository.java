package com.backend.app.Repository;

import com.backend.app.Entity.TJ_Product_Detail_Structure;
import org.springframework.data.jpa.repository.JpaRepository;


//we donot need to annotate repository with @Repository  as already done in class simpleJpa Respo
public interface TJ_Product_JPA_Repository extends JpaRepository<TJ_Product_Detail_Structure,Long> {

    //How to save enity in database table //


}
