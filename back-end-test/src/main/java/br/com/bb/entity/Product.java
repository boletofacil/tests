package br.com.bb.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name = "Product")
public class Product {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column
    int id;

    @Column(name = "name", nullable = false, length = 50)
    String name;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name = "category_id")
    private Category category;

    public Product(){}

    public Product(int id, String name, Category category){
        this.id=id;
        this.name=name;
        this.category=category;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
