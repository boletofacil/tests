package br.com.bb.controller;

import br.com.bb.entity.Category;
import br.com.bb.entity.Product;
import br.com.bb.repository.CategoryRepository;
import br.com.bb.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.xml.ws.Response;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.List;

@RestController
public class ServiceController {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @RequestMapping(value="/category/listAll", method = RequestMethod.GET, produces = {"application/JSON"})
    public ResponseEntity listAll(){
        return new ResponseEntity(categoryRepository.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value="/category/findMostUsedCategory")
    public ResponseEntity getMostUsedCategory(){
        return new ResponseEntity(categoryRepository.findMostUsedCategory(), HttpStatus.OK);
    }

    @RequestMapping(value="/product/listByCategory/{categoryId}")
    public ResponseEntity listByCategory(@PathVariable("categoryId") Integer categoryId){
        return new ResponseEntity(productRepository.findAllByCategoryId(categoryId), HttpStatus.OK);
    }

}
