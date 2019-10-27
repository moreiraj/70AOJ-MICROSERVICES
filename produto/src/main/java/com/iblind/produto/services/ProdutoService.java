package com.iblind.produto.services;

import com.iblind.produto.domain.Produto;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ProdutoService {

    List<Produto> findAll();


    Produto findByNome(String nome);

    Produto findById(long id);


    Produto save(Produto produto);

    void delete(Produto produto);
}

