package br.com.bb.controller.category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.bb.model.category.Category;
import br.com.bb.service.category.CategoryService;

/**
 * Controller para {@link Category}.
 *
 * @author dierka
 * @since 1.0 (07/03/19)
 */
@RestController
@RequestMapping("category")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("listAll")
    public @ResponseBody
    List<Category> findAll() {
        return categoryService.findAll();
    }

}
