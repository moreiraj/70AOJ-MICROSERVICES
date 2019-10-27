package com.iblind.usuario.repository;

import com.iblind.usuario.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {

    List<Usuario> findAll();

    @Query(value = "SELECT c FROM Usuario c WHERE c.nome = ?1")
    Usuario findByNome(String nome);

    @Query(value = "SELECT CASE WHEN COUNT(u.email) > 0 THEN 1 ELSE 0 END FROM usuario u WHERE u.email = :email  and u.senha = :senha",nativeQuery = true)
    int validaUsuario(@Param("email") String email, @Param("senha")  String senha);

    Usuario findById(long id);


    Usuario save(Usuario usuario);

    void delete(Usuario usuario);
}
