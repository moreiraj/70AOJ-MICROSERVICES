package com.iblind.produto.services;

import com.iblind.produto.domain.Produto;
import com.iblind.produto.repository.CategoriaRepository;
import com.iblind.produto.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProdutoServiceImpl implements ProdutoService {

    @Autowired
    ProdutoRepository produtoRepository;

    @Override
    public List<Produto> findAll() {
        return produtoRepository.findAll();
    }

    @Override
    public Produto findByNome(String nome) {
        return produtoRepository.findByNome(nome);
    }

    @Override
    public Produto findById(long id) {
        return produtoRepository.findById(id);
    }

    @Override
    public Produto save(Produto produto) {
        return produtoRepository.save(produto);
    }

    @Override
    public void delete(Produto produto) {
        produtoRepository.delete(produto);
    }
}
