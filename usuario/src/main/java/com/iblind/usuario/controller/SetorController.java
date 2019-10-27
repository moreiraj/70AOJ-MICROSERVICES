package com.iblind.usuario.controller;

import com.iblind.usuario.domain.Setor;
import com.iblind.usuario.services.SetorService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin
@Api(value="Setor")
public class SetorController {


    @Autowired
    private SetorService setorService;

    @ApiOperation(value = "Lista de Setores disponiveis", response = List.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successfully retrieved list"),
            @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
            @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
            @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
    })
    @RequestMapping(value = "/setores", method = RequestMethod.GET)
    public List<Setor> getAllSetor() {

        return setorService.findAll();
    }


    @RequestMapping(value = "/setores/nomes", method = RequestMethod.GET)
    public Setor findByName(@RequestParam(value = "nome") String nome) {
        return setorService.findByNome(nome);

    }

    @GetMapping("/setores/{id}")
    public Setor SetorById(@PathVariable("id") long id) {

        return setorService.findById(id);
    }

    @PostMapping("/setores")
    public void createSetor(@Valid @RequestBody Setor setor) {
        setorService.save(setor);
    }


    @PutMapping("/setores/{id}")
    public Setor updateSetor(@PathVariable(value = "id") Long id,
                             @Valid @RequestBody Setor setor) {

        Setor _setor = setorService.findById(id);


        _setor.setNome(setor.getNome());
        _setor.setStatus(setor.getStatus());

        Setor updatedSetor = setorService.save(_setor);
        return updatedSetor;
    }
        @DeleteMapping("/setores/{id}")
        public ResponseEntity<?> deleteSetor(@PathVariable(value = "id") Long id) {
            Setor setor = setorService.findById(id);


            setorService.delete(setor);

            return ResponseEntity.ok().build();
        }

    }


