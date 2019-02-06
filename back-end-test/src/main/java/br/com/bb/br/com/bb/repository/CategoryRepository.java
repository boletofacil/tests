package br.com.bb.br.com.bb.repository;

import br.com.bb.br.com.bb.entity.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Integer> {

    Category findOneById(Integer id);

    List<Category> findAll();

}
