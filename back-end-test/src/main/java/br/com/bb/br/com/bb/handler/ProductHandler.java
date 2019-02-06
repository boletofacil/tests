package br.com.bb.br.com.bb.handler;

import br.com.bb.br.com.bb.entity.Product;
import br.com.bb.br.com.bb.mapper.ProductMapper;
import br.com.bb.br.com.bb.model.ProductDTO;
import br.com.bb.br.com.bb.repository.ProductRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProductHandler {

    @Autowired
    private ProductRepository repository;

    @Autowired
    private ProductMapper mapper;

    private static final Logger LOGGER = LoggerFactory.getLogger(ProductHandler.class);

    public List<ProductDTO> findByCategory(Integer categoryId) {
        LOGGER.info("Carregando produtos da base de dados");
        List<Product> products = repository.findAllByCategoryId(categoryId);
        LOGGER.info("Dados carregados");
        return mapper.toDto(products);
    }

    public List<ProductDTO> findAll() {
        return mapper.toDto(repository.findAll());
    }

    public ProductDTO findOneById(Integer id) {
        return mapper.toDto(repository.findOneById(id));
    }
}
