package br.com.bb.br.com.bb.entity;

import javax.persistence.*;

@Entity
@Table(name = "PRODUCT")
public class Product {

    @Id
    @GeneratedValue(generator = "PRODUCT_SEQ", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "public", sequenceName = "PRODUCT_SEQ", allocationSize = 1)
    @Column(name = "ID", nullable = false)
    private Integer id;

    @Column(name = "NAME")
    private String name;

    @ManyToOne
    @JoinColumn(name = "CATEGORY_ID")
    private Category category;

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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", category=" + category +
                '}';
    }
}
