package br.com.bb.br.com.bb.service;

import br.com.bb.br.com.bb.handler.ProductHandler;
import br.com.bb.br.com.bb.model.ProductDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProductService {

    @Autowired
    private ProductHandler handler;

    private static final Logger LOGGER = LoggerFactory.getLogger(ProductService.class);

    public List<ProductDTO> findByCategory(Integer categoryId) {
        List<ProductDTO> list = handler.findByCategory(categoryId);
        LOGGER.info("Quantidade de produtos encontrados: {}", list.size());
        return list;
    }

    public List<ProductDTO> findAll() {
        return handler.findAll();
    }

    public ProductDTO findOneById(Integer id) {
        return handler.findOneById(id);
    }
}
