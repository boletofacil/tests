package br.com.bb.service.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.bb.model.product.Product;
import br.com.bb.repository.product.ProductRepository;

/**
 * Service responsável pelas operações com {@link Product}
 *
 * @author dierka
 * @since 1.0 (07/03/19)
 */
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> findAll() {

        return productRepository.findAll();
    }

    @Override
    public List<Product> findByCategory(Integer categoryId) {

        return productRepository.findAllByCategoryId(categoryId);
    }
}
