
package br.com.bb.controller;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;

import br.com.bb.Application;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
@WebAppConfiguration
public class IntegrationCategoryControllerTest {

	@Autowired
    private WebApplicationContext webApplicationContext;

	private MockMvc mockMvc;

	@Before
    public void setup() throws Exception {
        this.mockMvc = webAppContextSetup(webApplicationContext).build();
	}

	@Test
    public void listAll() throws Exception {
        mockMvc.perform(get("/category/listAll"))
        .andExpect(status().isOk())
	    		.andExpect(jsonPath("$", hasSize(5)))
	        .andExpect(jsonPath("$[0].id", is(1)))
	        .andExpect(jsonPath("$[0].name", is("Alimentos")))
	        .andExpect(jsonPath("$[1].id", is(2)))
	        .andExpect(jsonPath("$[1].name", is("Eletrodomésticos")))
	        .andExpect(jsonPath("$[2].id", is(3)))
	        .andExpect(jsonPath("$[2].name", is("Móveis")))
    		.andExpect(jsonPath("$[3].id", is(4)))
	        .andExpect(jsonPath("$[3].name", is("Brinquedos")))
    		.andExpect(jsonPath("$[4].id", is(5)))
	        .andExpect(jsonPath("$[4].name", is("Medicamentos")));
        
    }
	
	@Test
	public void maxcharoccurrenceE() throws Exception{
		mockMvc.perform(get("/category/maxcharoccurrence/e"))
        .andExpect(status().isOk())
	    		.andExpect(jsonPath("$.id", is(5)))
		        .andExpect(jsonPath("$.name", is("Medicamentos")));
	}
	
	@Test
	public void maxcharoccurrenceM() throws Exception{
		mockMvc.perform(get("/category/maxcharoccurrence/m"))
        .andExpect(status().isOk())
	    		.andExpect(jsonPath("$.id", is(5)))
		        .andExpect(jsonPath("$.name", is("Medicamentos")));
	}
	
	@Test
	public void maxcharoccurrenceV() throws Exception{
		mockMvc.perform(get("/category/maxcharoccurrence/v"))
        .andExpect(status().isOk())
	    		.andExpect(jsonPath("$.id", is(3)))
		        .andExpect(jsonPath("$.name", is("Móveis")));
	}
	
	@Test
	public void maxcharoccurrenceZ() throws Exception{
		mockMvc.perform(get("/category/maxcharoccurrence/z")).andExpect(status().isNotFound());
	}
	
}
