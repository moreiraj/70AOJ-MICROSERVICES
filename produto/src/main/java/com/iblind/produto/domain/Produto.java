package com.iblind.produto.domain;


import com.iblind.produto.models.Cor;
import org.apache.kafka.connect.data.Decimal;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "produto")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    @Size(min = 2, max = 20)
    @Column(nullable = false, length = 100)
    private String nome;


    private String descricao;

    private String cor;

    private Double preco;


    @ManyToOne
    @JoinColumn( name = "categoriaId")
    // @JsonIgnore
    private Categoria categoria;

    public Produto(){

    }
    public Produto(long id, String nome, String descricao,String cor,Categoria categoria,Double preco) {

        this.setId(id);
        this.setDescricao(descricao);
        this.setNome(nome);
        this.setCor(cor);
        this.setPreco(preco);
        this.setCategoria(categoria);


    }
    public Produto(long id){
        this.setId(id);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }




    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }



    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

}


