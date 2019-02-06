package br.com.bb.br.com.bb.repository;

import br.com.bb.br.com.bb.entity.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {

    Product findOneById(Integer id);

    List<Product> findAll();

    List<Product> findAllByCategoryId(Integer categoryId);

}
