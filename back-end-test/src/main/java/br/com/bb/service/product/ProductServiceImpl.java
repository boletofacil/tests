package br.com.bb.service.product;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.bb.model.product.Product;
import br.com.bb.repository.product.ProductRepository;

/**
 * TODO - Descrever o motivo da classe ter sido criada.
 *
 * @author dierka
 * @since 1.0 (04/03/19)
 */
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product findOne(Integer integer) {

        return productRepository.findOne(integer);
    }

    @Override
    public List<Product> findAll() {

        return productRepository.findAll();
    }

    @Override
    public List<Product> findByCategory(Integer id) {

        return productRepository.findAllByCategoryId(id);
    }
}
