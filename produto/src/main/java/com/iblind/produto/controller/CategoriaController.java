package com.iblind.produto.controller;

import com.iblind.produto.domain.Categoria;
import com.iblind.produto.services.CategoriaService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
@Api(value="Categoria")
@CrossOrigin
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @ApiOperation(value = "Lista de Categorias disponiveis", response = List.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successfully retrieved list"),
            @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
            @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
            @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
    })

    @RequestMapping(value = "/categorias", method = RequestMethod.GET)
    public List<Categoria> getAllCategorias() {

        return categoriaService.findAll();
    }


    @RequestMapping(value = "/categorias/nomes", method = RequestMethod.GET)
    public Categoria findByName(@RequestParam(value = "nome") String nome) {
        return categoriaService.findByNome(nome);

    }
    @GetMapping("/categorias/{id}")
    public Categoria CategoriaById(@PathVariable("id") long id) {

        return categoriaService.findById(id);
    }

    @PostMapping("/categorias")
    public  void  createCategorias(@Valid @RequestBody Categoria categoria)
    {
        categoriaService.save(categoria);
    }

    @PutMapping("/categorias/{id}")
    public Categoria updateCategoria(@PathVariable(value = "id") Long id,
                             @Valid @RequestBody Categoria categoria) {

        Categoria _categoria = categoriaService.findById(id);


        _categoria.setNome(categoria.getNome());
        _categoria.setStatus(categoria.getStatus());

        Categoria updatedCategoria = categoriaService.save(_categoria);
        return updatedCategoria;
    }
    @DeleteMapping("/categorias/{id}")
    public ResponseEntity<?> deleteCategoria(@PathVariable(value = "id") Long id) {
        Categoria categoria = categoriaService.findById(id);


        categoriaService.delete(categoria);

        return ResponseEntity.ok().build();
    }

}

