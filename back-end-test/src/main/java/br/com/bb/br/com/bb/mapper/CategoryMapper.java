package br.com.bb.br.com.bb.mapper;

import br.com.bb.br.com.bb.entity.Category;
import br.com.bb.br.com.bb.model.CategoryDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CategoryMapper {

    private static final Logger LOGGER = LoggerFactory.getLogger(CategoryMapper.class);

    public List<CategoryDTO> toDto(List<Category> categories) {
        LOGGER.info("Mapeamento um List<Category> -> List<CategoryDTO>");
        return categories.stream().map(this::toDto).collect(Collectors.toList());
    }

    public CategoryDTO toDto(Category entity) {
        CategoryDTO dto = new CategoryDTO();

        LOGGER.info("Mapeamento a entity: {}", entity);
        dto.setName(entity.getName());
        dto.setId(entity.getId());

        LOGGER.info("Entity mapeada para o DTO: {}", dto);
        return dto;
    }
}
