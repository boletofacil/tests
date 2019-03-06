package br.com.bb.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import br.com.bb.model.Product;

public interface ProductRepository extends Repository<Product, Long>{

	public List<Product> findByCategoryId(Long categoryId);
	
}
