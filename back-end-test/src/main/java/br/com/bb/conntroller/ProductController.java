package br.com.bb.conntroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.bb.model.Product;
import br.com.bb.service.ProductService;

@RestController
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@RequestMapping(path="/product/listByCategory/{categoryId}", method=RequestMethod.GET)
	public List<Product> findByCategoryId(@PathVariable Long categoryId) {
		return productService.findByCategoryId(categoryId);
	}
	
}
