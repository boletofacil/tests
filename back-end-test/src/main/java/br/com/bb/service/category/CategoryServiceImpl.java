package br.com.bb.service.category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.bb.model.category.Category;
import br.com.bb.repository.category.CategoryRepository;

/**
 * Service responsável pelas operações com {@link Category}
 *
 * @author dierka
 * @since 1.0 (07/03/19)
 */
@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> findAll() {

        return categoryRepository.findAll();
    }
}
