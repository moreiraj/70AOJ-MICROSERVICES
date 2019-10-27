import { Component, OnInit } from '@angular/core';
import { Produto } from '../../model/produto';
import { ApiService } from 'src/app/services/api.service';
import { ProdutosApiService } from '../../services/produtos-api.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  displayedColumns: string[] = ['id','nome','categoria','descricao','cor','preco','acao'];
  dsProduto: Produto[];
  isLoadingResults:boolean;

  constructor(private _api: ProdutosApiService) { }

  ngOnInit() {


    this._api.getProdutos()
    .subscribe(res => {
      this.dsProduto = res;
      console.log(this.dsProduto);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
