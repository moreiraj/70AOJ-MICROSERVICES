package com.iblind.usuario.services;

import com.iblind.usuario.domain.Usuario;
import com.iblind.usuario.repository.SetorRepository;
import com.iblind.usuario.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;
    @Override
    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    @Override
    public Usuario findByNome(String nome) {
        return usuarioRepository.findByNome(nome);
    }

    @Override
    public Usuario findById(long id) {
        return usuarioRepository.findById(id);
    }

    @Override
    public int validaUsuario(String email, String senha) {
        return usuarioRepository.validaUsuario(email,senha);
    }



    @Override
    public Usuario save(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @Override
    public void delete(Usuario usuario) {
    usuarioRepository.delete(usuario);
    }


}
