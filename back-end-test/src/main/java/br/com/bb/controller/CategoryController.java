package br.com.bb.controller;

import java.util.List;
import java.util.Optional;

import org.apache.commons.collections4.CollectionUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.bb.entities.Category;
import br.com.bb.repository.CategoryRepository;
import lombok.NonNull;

@RestController
@RequestMapping("/category")
public class CategoryController {

	private CategoryRepository categoryRepository;
	
	public CategoryController(CategoryRepository categoryRepository) {
		super();
		this.categoryRepository = categoryRepository;
	}

	@GetMapping("/listAll")
	public ResponseEntity<List<Category>> listAll() {
		List<Category> categories = categoryRepository.findAll();
		
		if( CollectionUtils.isEmpty(categories) ) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.ok(categories);
	}
	
	@GetMapping("/findCategoryWithLongestName/{query}")
	public ResponseEntity<Category> findCategoryWithLongestName(@NonNull @PathVariable("query") String query) {
		Optional<Category> category = categoryRepository.findCategoryWithLongestName(query.toUpperCase());
		
		if( !category.isPresent() ) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.ok(category.get());
	}
	
}
