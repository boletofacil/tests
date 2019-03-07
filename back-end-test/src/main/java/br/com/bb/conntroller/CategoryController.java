package br.com.bb.conntroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.bb.model.Category;
import br.com.bb.service.CategoryService;

@RestController
public class CategoryController {

	@Autowired
	private CategoryService categoryService;
	
	@RequestMapping(path="/category/listAll", method=RequestMethod.GET)
	public List<Category> findAll() {
		return categoryService.findAll();
	}
	
	@RequestMapping(path="/category/maxcharoccurrence/{findFor}", method=RequestMethod.GET)
	public Category getCategorieWithMaxCharOccurrence(@PathVariable char findFor) {
		return categoryService.getCategorieWithMaxCharOccurrence(Character.toLowerCase(findFor));
	}
	
}
