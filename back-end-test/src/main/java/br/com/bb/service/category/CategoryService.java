package br.com.bb.service.category;

import java.util.List;

import br.com.bb.model.category.Category;

/**
 * Service responsável pelas operações com {@link Category}
 *
 * @author dierka
 * @since 1.0 (07/03/19)
 */
public interface CategoryService {

    /**
     * Listar todos os registros de {@link Category}
     * @return {@link List<Category>}
     */
    List<Category> findAll();

}
