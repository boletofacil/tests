package br.com.bb.br.com.bb.service;

import br.com.bb.br.com.bb.handler.CategoryHandler;
import br.com.bb.br.com.bb.model.CategoryDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CategoryService {

    @Autowired
    private CategoryHandler handler;

    private static final Logger LOGGER = LoggerFactory.getLogger(CategoryService.class);

    public List<CategoryDTO> findAll() {
        return handler.findAll();
    }

    public String findOneByMaxOccurrences(String character) {
        CategoryDTO categoryDTO = handler.findOneByMaxOccurrences(character);
        LOGGER.info("Verificando se é possível extrair o nome da categoria");
        return categoryDTO != null ? categoryDTO.getName() : null;
    }

    public CategoryDTO findOneById(Integer id) {
        return handler.findOneById(id);
    }
}
