package br.com.bb.maxoccurrence;

import java.util.List;

import org.springframework.stereotype.Component;

import br.com.bb.model.Category;

@Component
public class CategorieWithMaxCharOccurrence {

	public Category getCategorieWithMaxCharOccurrence(List<Category> categories, char findFor) {
		
		Category categoryResult = null;
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
