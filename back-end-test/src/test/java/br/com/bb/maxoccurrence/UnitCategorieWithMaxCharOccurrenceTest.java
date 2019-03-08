package br.com.bb.maxoccurrence;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import br.com.bb.Application;
import br.com.bb.model.Category;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
@WebAppConfiguration
public class UnitCategorieWithMaxCharOccurrenceTest {

	@Autowired
	private CategorieWithMaxCharOccurrence categorieWithMaxCharOccurrence;
	
	@Test
	public void maxcharoccurrenceM() {
		Category result = categorieWithMaxCharOccurrence.getCategorieWithMaxCharOccurrence(getCategories(), 'm');
		assertEquals(result.getName(), "Medicamentos");
	}
	
	@Test
	public void maxcharoccurrenceV() {
		Category result = categorieWithMaxCharOccurrence.getCategorieWithMaxCharOccurrence(getCategories(), 'v');
		assertEquals(result.getName(), "Móveis");
	}
	
	@Test
	public void maxcharoccurrenceE() {
		Category result = categorieWithMaxCharOccurrence.getCategorieWithMaxCharOccurrence(getCategories(), 'e');
		assertEquals(result.getName(), "Medicamentos");
	}
	
	public List<Category> getCategories(){
		
		List<Category> categories = new ArrayList<Category>();
		
		Category c1 = new Category();
		c1.setName("Alimentos");
		categories.add(c1);
		
		Category c2 = new Category();
		c2.setName("Eletrodomésticos");
		categories.add(c2);
		
		Category c3 = new Category();
		c3.setName("Móveis");
		categories.add(c3);
		
		Category c4 = new Category();
		c4.setName("Brinquedos");
		categories.add(c4);
		
		Category c5 = new Category();
		c5.setName("Medicamentos");
		categories.add(c5);
		
		return categories;
	
	}
	
}
