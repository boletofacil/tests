package br.com.bb.controller.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.bb.model.product.Product;
import br.com.bb.service.product.ProductService;

/**
 * Controller para {@link Product}.
 *
 * @author dierka
 * @since 1.0 (07/03/19)
 */
@RestController
@RequestMapping("product")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("all")
    public @ResponseBody
    List<Product> getAll() {
        return productService.findAll();
    }

    @GetMapping("listByCategory/{categoryId}")
    public @ResponseBody
    List<Product> findByCategory(@PathVariable Integer categoryId) {
        return productService.findByCategory(categoryId);
    }

}
