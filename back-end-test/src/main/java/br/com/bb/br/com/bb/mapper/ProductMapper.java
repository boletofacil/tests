package br.com.bb.br.com.bb.mapper;

import br.com.bb.br.com.bb.entity.Product;
import br.com.bb.br.com.bb.model.ProductDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ProductMapper {

    private static final Logger LOGGER = LoggerFactory.getLogger(ProductMapper.class);

    public List<ProductDTO> toDto(List<Product> entityList) {
        LOGGER.info("Mapeamento um List<Product> -> List<ProductDTO>");
        return entityList.stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public ProductDTO toDto(Product entity) {
        ProductDTO dto = new ProductDTO();

        LOGGER.info("Mapeamento a entity: {}", entity);
        dto.setId(entity.getId());
        dto.setName(entity.getName());

        LOGGER.info("Entity mapeada para o DTO: {}", dto);
        return dto;
    }
}
