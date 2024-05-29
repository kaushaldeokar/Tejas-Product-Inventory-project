package com.backend.app.Entity;

import jakarta.persistence.*;

//component Structure
// decleared this as JPA entity anything changed in this refected in table structure//

 //ENTITY IS ALSO KNOWN AS MODEL
@Entity
@Table(
        name ="products"
//        uniqueConstraints = {@UniqueConstraint(columnNames = "title")}
)
public class TJ_Product_Detail_Structure {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     private long id;
//    to specify as primary key //


     private String title;
     private String content;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
