package br.com.bb.br.com.bb.controller;

import br.com.bb.br.com.bb.model.CategoryDTO;
import br.com.bb.br.com.bb.service.CategoryService;
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
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService service;

    private static final Logger LOGGER = LoggerFactory.getLogger(CategoryController.class);

    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable Integer id) {
        try {
            LOGGER.info("Carregando a categoria de id: {}", id);
            CategoryDTO categoryDTO = service.findOneById(id);

            LOGGER.info("Categoria encontrada: {}", categoryDTO);
            return ResponseEntity.ok(categoryDTO);
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/listAll")
    public ResponseEntity findAll() {
        try {
            LOGGER.info("Listando categorias");
            List<CategoryDTO> list = service.findAll();

            LOGGER.info("Quantidade de categorias encontradas: {}", list.size());
            return ResponseEntity.ok(list);
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/byMaxOccurrences/{character}")
    public ResponseEntity byMaxOccurrences(@PathVariable String character) {
        try {
            LOGGER.info("Carregando categoria que possui mais ocorrencias da letra: {}", character);
            String categoryName = service.findOneByMaxOccurrences(character);

            LOGGER.info("Categorias encontrada: {}, com {} ocorrencias.", categoryName, categoryName.split(character).length);
            return ResponseEntity.ok(categoryName);
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
