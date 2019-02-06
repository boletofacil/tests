package br.com.bb.controller;

import br.com.bb.Application;
import br.com.bb.br.com.bb.model.ProductDTO;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
@WebAppConfiguration
public class ProductControllerTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    private MockMvc mockMvc;

    @Before
    public void setup() {
        mockMvc = webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void getUnexistent() throws Exception {
        mockMvc.perform(get("/product/listByCategory/1123")).andExpect(status().isBadRequest());
    }

    @Test
    public void containsFeijao() throws Exception {

        ProductDTO example = new ProductDTO();
        example.setId(2);
        example.setName("Feijão");

        mockMvc.perform(get("/product/listByCategory/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", is(example)));
    }

    @Test
    public void listByCategoryAlimentos() throws Exception {
        mockMvc.perform(get("/product/listByCategory/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].id", is(1)))
                .andExpect(jsonPath("$[0].name", is("Arroz")))
                .andExpect(jsonPath("$[1].id", is(2)))
                .andExpect(jsonPath("$[1].name", is("Feijão")));
    }

    @Test
    public void listByCategoryEletrodomesticos() throws Exception {
        mockMvc.perform(get("/product/listByCategory/2"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(3)))
                .andExpect(jsonPath("$[0].id", is(3)))
                .andExpect(jsonPath("$[0].name", is("Aspirador de pó")))
                .andExpect(jsonPath("$[1].id", is(4)))
                .andExpect(jsonPath("$[1].name", is("Batedeira")))
                .andExpect(jsonPath("$[2].id", is(5)))
                .andExpect(jsonPath("$[2].name", is("Liquidificador")));
    }

    @Test
    public void listByCategoryMoveis() throws Exception {
        mockMvc.perform(get("/product/listByCategory/3"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(3)))
                .andExpect(jsonPath("$[0].id", is(6)))
                .andExpect(jsonPath("$[0].name", is("Sofá")))
                .andExpect(jsonPath("$[1].id", is(7)))
                .andExpect(jsonPath("$[1].name", is("Mesa")))
                .andExpect(jsonPath("$[2].id", is(8)))
                .andExpect(jsonPath("$[2].name", is("Estante")));
    }
}
