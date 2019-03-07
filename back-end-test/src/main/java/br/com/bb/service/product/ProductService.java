package br.com.bb.service.product;

import java.util.List;

import br.com.bb.model.product.Product;

/**
 * Service responsável pelas operações com {@link Product}
 *
 * @author dierka
 * @since 1.0 (07/03/19)
 */
public interface ProductService {

    /**
     * Listar todos os registros de {@link Product}
     * @return {@link List<Product>}
     */
    List<Product> findAll();

    /**
     * Listar todos os registros de {@link Product}, filtrando por CategoryId.
     * @param categoryId - {@link Integer} que representa o id de uma {@link br.com.bb.model.category.Category}
     * @return {@link List<Product>}
     */
    List<Product> findByCategory(Integer categoryId);

}
