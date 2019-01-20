package br.com.bb.entity;

import javax.persistence.*;

@Entity
@Table(name = "Category")
public class Category {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column
    int id;

    @Column(name = "name", nullable = false, length = 50)
    String name;

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

}
