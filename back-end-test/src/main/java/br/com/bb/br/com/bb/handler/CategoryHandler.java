package br.com.bb.br.com.bb.handler;

import br.com.bb.br.com.bb.entity.Category;
import br.com.bb.br.com.bb.mapper.CategoryMapper;
import br.com.bb.br.com.bb.model.CategoryDTO;
import br.com.bb.br.com.bb.repository.CategoryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CategoryHandler {

    @Autowired
    private CategoryRepository repository;

    @Autowired
    private CategoryMapper mapper;

    private static final Logger LOGGER = LoggerFactory.getLogger(CategoryHandler.class);

    public List<CategoryDTO> findAll() {
        LOGGER.info("Carregando categorias da base de dados");
        List<Category> categories = repository.findAll();
        LOGGER.info("Dados carregados");
        return mapper.toDto(categories);
    }

    public CategoryDTO findOneByMaxOccurrences(String character) {
        return repository.findAll()
                .stream()
                .map(mapper::toDto)
                .filter(categoryDTO -> categoryDTO.getName().contains(character))
                .max((categoryA, categoryB) -> {
                    Integer lengthA = categoryA.getName().split(character).length;
                    Integer lengthB = categoryB.getName().split(character).length;

                    LOGGER.info("Quantidade de vezes que a letra {} aparece na categoria {}", lengthA, categoryA);
                    LOGGER.info("Quantidade de vezes que a letra {} aparece na categoria {}", lengthB, categoryB);

                    return lengthA.compareTo(lengthB);
                })
                .orElse(null);
    }

    public CategoryDTO findOneById(Integer id) {
        return mapper.toDto(repository.findOneById(id));
    }
}
