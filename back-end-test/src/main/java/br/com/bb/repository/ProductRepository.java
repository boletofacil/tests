package br.com.bb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.bb.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

	public List<Product> findByCategoryId(Long id);
}
