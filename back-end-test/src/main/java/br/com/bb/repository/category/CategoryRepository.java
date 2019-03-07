package br.com.bb.repository.category;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.bb.model.category.Category;

/**
 * Repository responsável pelas operações CRUD de Categorias.
 *
 * @author dierka
 * @since 1.0 (07/03/19)
 */
@Repository
public interface CategoryRepository extends CrudRepository<Category, Integer> {

    /**
     * Listar todos os registros de {@link Category}
     * @return {@link List<Category>}
     */
    @Override
    List<Category> findAll();

}
