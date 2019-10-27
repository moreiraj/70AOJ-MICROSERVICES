package com.iblind.produto.controller;

import com.iblind.produto.domain.Categoria;
import com.iblind.produto.domain.Produto;
import com.iblind.produto.services.CategoriaService;
import com.iblind.produto.services.ProdutoService;
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
@CrossOrigin
@Api(value="Produto")
public class ProdutoController {
    @Autowired
    private ProdutoService produtoService;
    @ApiOperation(value = "Lista de Produtos disponiveis", response = List.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successfully retrieved list"),
            @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
            @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
            @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
    })

    @RequestMapping(value = "/produtos", method = RequestMethod.GET)
    public List<Produto> getAllProdutos() {

        return produtoService.findAll();
    }


    @RequestMapping(value = "/produtos/nomes", method = RequestMethod.GET)
    public Produto findByName(@RequestParam(value = "nome") String nome) {
        return produtoService.findByNome(nome);

    }
    @GetMapping("/produtos/{id}")
    public Produto ProdutosById(@PathVariable("id") long id) {

        return produtoService.findById(id);
    }

    @PostMapping("/produtos")
    public  Produto  createProdutos(@Valid @RequestBody Produto produto)

    {
        return produtoService.save(produto);
    }

    @PutMapping("/produtos/{id}")
    public Produto updateProdutos(@PathVariable(value = "id") Long id,
                                  @Valid @RequestBody Produto produto) {

        Produto _produto = produtoService.findById(id);


        _produto.setNome(produto.getNome());
        _produto.setDescricao(produto.getDescricao());
        _produto.setCor(produto.getCor());
        _produto.setPreco(produto.getPreco());
        _produto.setCategoria(produto.getCategoria());


        Produto updatedProduto = produtoService.save(_produto);
        return updatedProduto;

    }

    @DeleteMapping("/produtos/{id}")
    public ResponseEntity<?> deleteProduto(@PathVariable(value = "id") Long id) {
        Produto produto = produtoService.findById(id);


        produtoService.delete(produto);

        return ResponseEntity.ok().build();
    }

}

