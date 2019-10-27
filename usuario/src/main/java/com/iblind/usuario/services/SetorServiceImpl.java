package com.iblind.usuario.services;

import com.iblind.usuario.domain.Setor;
import com.iblind.usuario.repository.SetorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SetorServiceImpl implements SetorService {

    @Autowired
    SetorRepository setorRepository;
    @Override
    public List<Setor> findAll() {
        return setorRepository.findAll();
    }

    @Override
    public Setor findByNome(String nome) {
        return setorRepository.findByNome(nome);
    }

    @Override
    public Setor findById(long id) {
        return setorRepository.findById(id);
    }

    @Override
    public Setor save(Setor setor) {
      return   setorRepository.save(setor);
    }

    @Override
    public void delete(Setor setor) {
        setorRepository.delete(setor);
    }


}
