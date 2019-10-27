package com.iblind.produto.services;

import com.iblind.produto.domain.Categoria;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoriaService {

    List<Categoria> findAll();


    Categoria findByNome(String nome);

    Categoria findById(long id);

    Categoria save(Categoria categoria);

    void delete(Categoria categoria);
}

