package br.com.bb.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.bb.model.Category;
import br.com.bb.repository.CategoryRepository;
import br.com.bb.service.CategoryService;

@Component
public class CategoryServiceImpl implements CategoryService{

	@Autowired
	private CategoryRepository categoryRepository;
	
	@Override
	public List<Category> findAll() {
		return categoryRepository.findAll();
	}

	@Override
	public Category getCategorieWithMaxCharOccurrence(char findFor) {
		
		List<Category> categories = this.findAll();
		
		Category categoryResult = new Category();
		Long maxOccurrences = 0L;
		
		for (Category category : categories) {
			
			Long catgoryOccurences = category.getName().toLowerCase().chars().filter(ch -> ch == findFor).count();
			
			if(catgoryOccurences >= maxOccurrences) {
				maxOccurrences = catgoryOccurences;
				categoryResult = category;
			}
			
		}
		
		return categoryResult;
	}

	
}
