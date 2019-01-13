package br.com.bb.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.bb.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{

	@Query(value = " SELECT C.* " +
				   " FROM TESTE_BB.CATEGORY C " +
				   " WHERE LENGTH(C.DESCRIPTION) = " +
				   "         (SELECT MAX(LENGTH(CC.DESCRIPTION)) " +
				   "          FROM TESTE_BB.CATEGORY CC " +
				   "          WHERE UPPER(CC.DESCRIPTION) LIKE %:query%) AND UPPER(C.DESCRIPTION) LIKE %:query%",
		   nativeQuery = true)
	public Optional<Category> findCategoryWithLongestName(@Param("query") String query);
}
