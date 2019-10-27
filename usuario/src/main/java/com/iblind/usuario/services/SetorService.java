package com.iblind.usuario.services;

import com.iblind.usuario.domain.Setor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface SetorService {

    List<Setor> findAll();


    Setor findByNome(String nome);

    Setor findById(long id);

    Setor save(Setor setor);

    void delete(Setor setor);
}
