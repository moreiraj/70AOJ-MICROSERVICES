package com.iblind.usuario.repository;

import com.iblind.usuario.domain.Setor;
import com.iblind.usuario.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface SetorRepository extends JpaRepository<Setor,Integer> {

    List<Setor> findAll();

    @Query(value = "SELECT c FROM Setor c WHERE c.nome = ?1")
    Setor findByNome(String nome);

    Setor findById(long id);


    Setor save(Setor setor);

    void delete(Setor setor);
}
