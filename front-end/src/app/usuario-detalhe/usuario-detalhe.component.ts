import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit {

  usuario: Usuario = { id: null , nome: '', email: '',senha:'', idade: null,setor:null  };
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }


  ngOnInit() {

  this.getUsuario(this.route.snapshot.params['id'])
    
  }

  getUsuario(id) {
    this.api.getUsuario(id)
      .subscribe(data => {
        this.usuario = data;
        console.log(this.usuario);
        this.isLoadingResults = false;
      });
  }
  

  deleteUsuario(id) {
    this.isLoadingResults = true;
    this.api.deleteUsuario(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/usuarios']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}

