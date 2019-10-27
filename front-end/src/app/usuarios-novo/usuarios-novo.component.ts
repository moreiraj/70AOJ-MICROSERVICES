import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Setor } from '../model/setor';


@Component({
  selector: 'app-usuarios-novo',
  templateUrl: './usuarios-novo.component.html',
  styleUrls: ['./usuarios-novo.component.css']
})
export class UsuariosNovoComponent implements OnInit {
  
  usuarioForm: FormGroup;
  isLoadingResults = false;
  dsSetor: Setor[];

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.usuarioForm = this.formBuilder.group({
   'nome' : [null, Validators.required],
   'setor' : [null, Validators.required],
   'email' : [null, [Validators.required, Validators.minLength(4)]],
   'idade' : [null, Validators.required],
   'senha' : [null, Validators.required]
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


 addUsuario(form: NgForm) {

  
  this.isLoadingResults = true;
  this.api.addUsuario(form)
    .subscribe(res => {
        const id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/usuario-detalhe', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
}

}
