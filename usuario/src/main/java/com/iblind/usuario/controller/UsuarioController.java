package com.iblind.usuario.controller;

import com.iblind.usuario.domain.Setor;
import com.iblind.usuario.domain.Usuario;
import com.iblind.usuario.services.SetorService;
import com.iblind.usuario.services.UsuarioService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin
@Api(value="Produto")
public class UsuarioController {


    @Autowired
    private UsuarioService usuarioService;


    @ApiOperation(value = "Lista de Usuarios disponiveis", response = List.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successfully retrieved list"),
            @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
            @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
            @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
    })
    @RequestMapping(value = "/usuarios", method = RequestMethod.GET)
    public List<Usuario> getAllUsuarios() {

        return usuarioService.findAll();
    }


    @RequestMapping(value = "/usuarios/nomes", method = RequestMethod.GET)
    public Usuario findByName(@RequestParam(value = "nome") String nome) {
        return usuarioService.findByNome(nome);

    }
    @GetMapping("/usuarios/{id}")
    public Usuario UsuarioById(@PathVariable("id") long id) {

        return usuarioService.findById(id);
    }

    @RequestMapping(value = "/valida", method = RequestMethod.GET)

    public int ValidaUsuario(@RequestParam(value = "email") String email,
                                 @RequestParam(value = "senha")String senha) {

        return   usuarioService.validaUsuario(email,senha);



    }


    @PostMapping("/usuarios")
    public  Usuario  createUsuario(@Valid @RequestBody Usuario usuario) {
        return usuarioService.save(usuario);
    }


    @PutMapping("/usuarios/{id}")
    public Usuario updateUsuarios(@PathVariable(value = "id") Long id,
                             @Valid @RequestBody Usuario usuario) {

        Usuario _usuario = usuarioService.findById(id);


        _usuario.setNome(usuario.getNome());
        _usuario.setEmail(usuario.getEmail());
        _usuario.setSenha(usuario.getSenha());
        _usuario.setIdade(usuario.getIdade());
        _usuario.setSetor(usuario.getSetor());

        Usuario updatedUsuario = usuarioService.save(_usuario);
        return updatedUsuario;

    }

    @DeleteMapping("/usuarios/{id}")
    public ResponseEntity<?> deleteUsuario(@PathVariable(value = "id") Long id) {
        Usuario usuario = usuarioService.findById(id);


        usuarioService.delete(usuario);

        return ResponseEntity.ok().build();
    }

}
