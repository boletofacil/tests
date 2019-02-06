package br.com.bb.br.com.bb.controller;

import br.com.bb.br.com.bb.model.ProductDTO;
import br.com.bb.br.com.bb.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService service;

    private static final Logger LOGGER = LoggerFactory.getLogger(ProductController.class);

    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable Integer id) {
        try {
            LOGGER.info("Carregando o produto de id: {}", id);
            ProductDTO productDTO = service.findOneById(id);

            LOGGER.info("Produto encontrado: {}", productDTO);
            return ResponseEntity.ok(productDTO);
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/listAll")
    public ResponseEntity findAll() {
        try {
            LOGGER.info("Listando todos os produtos");
            List<ProductDTO> list = service.findAll();

            LOGGER.info("Quantidade de produtos encontrados: {}", list.size());
            return ResponseEntity.ok(list);
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


    @GetMapping("/listByCategory/{categoryId}")
    public ResponseEntity findByCategory(@PathVariable Integer categoryId) {
        try {
            LOGGER.info("Listando produtos da categoria: {}", categoryId);
            return ResponseEntity.ok(service.findByCategory(categoryId));
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
