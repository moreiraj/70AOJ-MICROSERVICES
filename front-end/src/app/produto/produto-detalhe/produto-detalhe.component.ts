import { Component, OnInit } from '@angular/core';
import { ProdutosApiService } from '../../services/produtos-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  produto: Produto = { id: null , nome: '', descricao: '',cor:'', preco: null,categoria:null  };
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ProdutosApiService) { }


  ngOnInit() {

  this.getProduto(this.route.snapshot.params['id']);
    
  }

  getProduto(id) {
    this.api.getProduto(id)
      .subscribe(data => {
        this.produto = data;
        console.log(this.produto);
        this.isLoadingResults = false;
      });
  }

  deleteProduto(id) {
    this.isLoadingResults = true;
    this.api.deleteProduto(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/produtos']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}

