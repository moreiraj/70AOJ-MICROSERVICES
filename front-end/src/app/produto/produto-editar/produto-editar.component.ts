import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Categoria } from '../../model/categoria';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutosApiService } from '../../services/produtos-api.service';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css']
})
export class ProdutoEditarComponent implements OnInit {

  produtoForm: FormGroup;
  id:number=null ; 
  nome:String= ''; 
  descricao:String= ''; 
  cor:string= ''; 
  categoria:Categoria = null;
  preco:String=null ; 

 isLoadingResults = false;
 dsCategoria: Categoria[];
 selectedOption:String='';
 constructor(private router: Router, private route: ActivatedRoute, 
             private api: ProdutosApiService,private formBuilder: FormBuilder) { }

 ngOnInit() {

   this.getProduto(this.route.snapshot.params['id']);

   this.selectedOption = '2';
   
   this.produtoForm = this.formBuilder.group({
     'nome' : [null, Validators.required],
     'descricao' : [null, Validators.required],
     'categoria' : [null, Validators.required],
     'cor' : [null, Validators.required],
     'preco' : [null, Validators.required], 
   
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

 getProduto(id) {
      this.api.getProduto(id).subscribe(data => {
     this.id = data.id;
     this.produtoForm.setValue({
       nome: data.nome,
       descricao: data.descricao,
       cor: data.cor,
       categoria: data.categoria,
       preco: data.preco
     });
   });
 }



 
 updateProduto(form: NgForm) {
   this.isLoadingResults = true;
   this.api.updateProduto(this.id, form)
     .subscribe(res => {
         this.isLoadingResults = false;
         this.router.navigate(['/produto-detalhe/' + this.id]);
       }, (err) => {
         console.log(err);
         this.isLoadingResults = false;
       }
     );
 }

 
}