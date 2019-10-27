package com.iblind.usuario.domain;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity
@Table(name = "usuario")
public class Usuario {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(nullable = false)
    @Email(message = "Email deve ser valido")
    private String email;

    @Size(min = 2, max = 100)
    @Column(nullable = false, length = 100)
    private String nome;

    private int idade;

    @Size(min = 2, max = 100)
    @Column(nullable = false, length = 100)
    private String senha;

    @ManyToOne
    @JoinColumn( name = "setorId")
    // @JsonIgnore
    private Setor setor;



    public static class  Builder {

        private long id;
        private String email;
        private String nome;
        private int idade;
        private String senha;
        private Setor setor;

        public Builder(long id) {
            this.id = id;
        }

        public Builder email() {

            this.email = email;
            return this;
        }
        public Builder nome() {

            this.nome = nome;
            return this;
        }

        public Builder idade() {

            this.idade = idade;
            return this;
        }

        public Builder senha() {

            this.senha = senha;
            return this;
        }

        public Builder setor() {

            this.setor = setor;
            return this;
        }

        public Usuario build(){
            Usuario usuario = new Usuario();
            usuario.id = this.id;
            usuario.email = this.email;
            usuario.nome = this.nome;
            usuario.senha = this.senha;
            usuario.idade = this.idade;
            usuario.setor = this.setor;
            return usuario;
        }
    }

    private Usuario(){

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }


    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public Setor getSetor() {
        return setor;
    }

    public void setSetor(Setor setor) {
        this.setor = setor;
    }


    }

