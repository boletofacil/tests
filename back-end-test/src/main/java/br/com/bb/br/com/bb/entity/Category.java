package br.com.bb.br.com.bb.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "CATEGORY")
public class Category {

    @Id
    @GeneratedValue(generator = "CATEGORY_SEQ", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "public", sequenceName = "CATEGORY_SEQ", allocationSize = 1)
    @Column(name = "ID", nullable = false)
    private Integer id;

    @Column(name = "NAME")
    private String name;

    @OneToMany(targetEntity = Product.class)
    private List<Product> products;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", products=" + products +
                '}';
    }
}
