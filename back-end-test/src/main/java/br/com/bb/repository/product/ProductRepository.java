package br.com.bb.repository.product;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.bb.model.product.Product;

/**
 * Repository responsável pelas operações CRUD de Produtos.
 *
 * @author dierka
 * @since 1.0 (07/03/19)
 */
@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {

    /**
     * Listar todos os registros de {@link Product}
     * @return {@link List<Product>}
     */
    @Override
    List<Product> findAll();

    /**
     *
     * @param categoryId - {@link Integer} que representa o id de uma {@link br.com.bb.model.category.Category}
     * @return {@link List<Product>}
     */
    List<Product> findAllByCategoryId(Integer categoryId);
}
