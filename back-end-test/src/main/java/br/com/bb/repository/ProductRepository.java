package br.com.bb.repository;

import br.com.bb.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {
    @Query(value = "select p.* FROM Product p inner join Category c on c.id=p.category_id where c.id=:categoryId", nativeQuery = true)
    List<Product> findAllByCategoryId(@Param("categoryId") Integer categoryId);
}
