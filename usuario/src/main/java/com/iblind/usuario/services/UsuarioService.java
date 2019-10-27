package com.iblind.usuario.services;

import com.iblind.usuario.domain.Usuario;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface UsuarioService {

    List<Usuario> findAll();


    Usuario findByNome(String nome);

    Usuario findById(long id);
    int validaUsuario(String email, String senha);

    Usuario save(Usuario usuario);

    void delete(Usuario usuario);
}
