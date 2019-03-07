package br.com.bb.model.product;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import br.com.bb.model.category.Category;

import lombok.Getter;
import lombok.Setter;

/**
 * Model que representa os produtos.
 *
 * @author dierka
 * @since 1.0 (07/03/19)
 */
@Getter
@Setter
@Entity
@Table(name = "PRODUCT", schema = "TEST")
public class Product {

    @Id
    @SequenceGenerator(name = "PRODUCT_SEQ", sequenceName = "PRODUCT_SEQ", allocationSize = 1)
    @GeneratedValue(generator = "PRODUCT_SEQ", strategy = GenerationType.SEQUENCE)
    @Column(name = "ID", nullable = false)
    private Integer id;

    @Column(name = "NAME")
    private String Name;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "CATEGORY_ID")
    private Category category;

}
