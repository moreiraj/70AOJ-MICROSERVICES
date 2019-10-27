package com.iblind.usuario.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity
@Table(name = "setor")
public class Setor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    @Size(min = 2, max = 50)
    @Column(nullable = false, length = 50)
    private String nome;

    private boolean status;

    @OneToMany(mappedBy = "setor", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Usuario> usuarios;

    public Setor(){

    }

    public Setor( long id,String nome,boolean status,Usuario usuarios){

        this.setId(id);
        this.setNome(nome);
        this.setStatus(status);
        this.usuarios = Stream.of(usuarios).collect(Collectors.toSet());
        this.usuarios.forEach(x -> x.setSetor(this));

    }

    public Setor(long id){

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

    public boolean getStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status= status;
    }

    public Set<Usuario> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Set<Usuario> filmes) {
        this.usuarios = usuarios;
    }

}