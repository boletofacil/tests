package br.com.bb.service;

import java.util.List;

import br.com.bb.model.Product;

public interface ProductService {

	public List<Product> findByCategoryId(Long categoryId);
	
}
