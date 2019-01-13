package br.com.bb.controller;

import java.util.List;

import org.apache.commons.collections4.CollectionUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.bb.entities.Product;
import br.com.bb.repository.ProductRepository;
import lombok.NonNull;

@RestController
@RequestMapping("/product")
public class ProductController {

	private ProductRepository productRepository;
	
	public ProductController(ProductRepository productRepository) {
		super();
		this.productRepository = productRepository;
	}

	@GetMapping("/listByCategory/{categoryId}")
	public ResponseEntity<List<Product>> listByCategory(@NonNull @PathVariable Long categoryId) {
		List<Product> products = productRepository.findByCategoryId(categoryId);
		
		if( CollectionUtils.isEmpty(products) ) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.ok(products);
	}
	
}
