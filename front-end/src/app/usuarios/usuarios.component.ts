import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { ApiService } from '../services/api.service';
import { Setor } from '../model/setor';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['id','nome','setor','email','idade','acao'];
  dsUsuario: Usuario[];
  isLoadingResults:boolean;

  constructor(private _api: ApiService) { }

  ngOnInit() {


  

    this._api.getUsuarios()
    .subscribe(res => {
      this.dsUsuario = res;
      console.log(this.dsUsuario);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
