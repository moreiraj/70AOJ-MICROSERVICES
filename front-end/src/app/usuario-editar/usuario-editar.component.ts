import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Usuario } from '../model/usuario';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Setor } from '../model/setor';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  usuarioForm: FormGroup;
   id:number=null ; 
   nome:String= ''; 
   email:String= '';
   senha:String= '';  
   idade:number= null; 
   setor:Setor = null 
  isLoadingResults = false;
  dsSetor: Setor[];
  selectedOption:String='';
  constructor(private router: Router, private route: ActivatedRoute, 
              private api: ApiService,private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.getUsuario(this.route.snapshot.params['id']);

    this.selectedOption = '2';
    
    this.usuarioForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'setor' : [null, Validators.required],
      'email' : [null, Validators.required],
      'senha' : [null, Validators.required],
      'idade' : [null, Validators.required], 
    
  });

  this.api.getSetores()
  .subscribe(res => {
    this.dsSetor = res;
    console.log(this.dsSetor);
    this.isLoadingResults = false;
  }, err => {
    console.log(err);
    this.isLoadingResults = false;
  });
}

  getUsuario(id) {
       this.api.getUsuario(id).subscribe(data => {
      this.id = data.id;
      this.usuarioForm.setValue({
        nome: data.nome,
        email: data.email,
        senha: data.senha,
        idade: data.idade,
        setor: data.setor
      });
    });
  }
  
  updateUsuario(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateUsuario(this.id, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/usuario-detalhe/' + this.id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  
 }