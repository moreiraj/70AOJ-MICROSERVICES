package com.iblind.produto.repository;

import com.iblind.produto.domain.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto,Integer> {

    List<Produto> findAll();

   // @Query(value = "SELECT c FROM Setor c WHERE c.nome = ?1")
    Produto findByNome(String nome);

    Produto findById(long id);


    Produto save(Produto produto);

    void delete(Produto produto);
}
