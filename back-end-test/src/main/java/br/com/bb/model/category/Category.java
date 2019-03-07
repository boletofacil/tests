package br.com.bb.model.category;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

/**
 * Model que representa as categorias de produtos.
 *
 * @author dierka
 * @since 1.0 (07/03/19)
 */
@Getter
@Setter
@Entity
@Table(name = "CATEGORY", schema = "TEST")
public class Category {

    @Id
    @SequenceGenerator(name = "CATEGORY_SEQ", sequenceName = "CATEGORY_SEQ", allocationSize = 1)
    @GeneratedValue(generator = "CATEGORY_SEQ", strategy = GenerationType.SEQUENCE)
    @Column(name = "ID", nullable = false)
    private Integer id;

    @Column(name = "NAME")
    private String name;

}
