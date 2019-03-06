package br.com.bb.repository;

import java.util.List;

import org.springframework.data.repository.Repository;
import org.springframework.stereotype.Component;

import br.com.bb.model.Category;

@Component
public interface CategoryRepository extends Repository<Category, Long>{

	public List<Category> findAll();
	
}
