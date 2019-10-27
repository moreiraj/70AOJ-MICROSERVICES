package com.iblind.produto.repository;

import com.iblind.produto.domain.Categoria;
import com.iblind.produto.domain.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CategoriaRepository extends JpaRepository<Categoria,Integer> {

    List<Categoria> findAll();

    // @Query(value = "SELECT c FROM Setor c WHERE c.nome = ?1")
    Categoria findByNome(String nome);

    Categoria findById(long id);


    Categoria save(Categoria setor);

    void delete(Categoria categoria);
}
