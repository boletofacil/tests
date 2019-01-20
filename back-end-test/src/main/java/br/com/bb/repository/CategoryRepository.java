package br.com.bb.repository;

import br.com.bb.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Integer> {

    @Override
    List<Category> findAll();

    @Query(value = "select * from Category where id = (select category_id from (select top 1 category_id, count(id) as Total from Product group By category_id order by total desc))", nativeQuery = true)
    Category findMostUsedCategory();
}
