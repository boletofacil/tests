package br.com.bb.service.product;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.bb.model.product.Product;

/**
 * TODO - Descrever o motivo da classe ter sido criada.
 *
 * @author dierka
 * @since 1.0 (04/03/19)
 */
public interface ProductService {

    Product findOne(Integer integer);

    List<Product> findAll();

    List<Product> findByCategory(Integer id);

}
