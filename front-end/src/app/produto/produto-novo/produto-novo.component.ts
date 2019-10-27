import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Categoria } from '../../model/categoria';
import { Router } from '@angular/router';
import { ProdutosApiService } from '../../services/produtos-api.service';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.css']
})
export class ProdutoNovoComponent implements OnInit {

  produtoForm: FormGroup;
  isLoadingResults = false;
  dsCategoria: Categoria[];

  constructor(private router: Router, private api: ProdutosApiService, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.produtoForm = this.formBuilder.group({
   'nome' : [null, Validators.required],
   'categoria' : [null, Validators.required],
   'descricao' : [null, Validators.required],
   'cor' : [null, Validators.required],
   'preco' : [null, Validators.required]
   
 });

 this.api.getCategorias()
 .subscribe(res => {
   this.dsCategoria = res;
   console.log(this.dsCategoria);
   this.isLoadingResults = false;
 }, err => {
   console.log(err);
   this.isLoadingResults = false;
 });

 }


 addProduto(form: NgForm) {

  
  this.isLoadingResults = true;
  this.api.addProduto(form)
    .subscribe(res => {
        const id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/produto-detalhe', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
}

}

