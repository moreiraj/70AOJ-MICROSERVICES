import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosNovoComponent } from './usuarios-novo/usuarios-novo.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { ProdutosComponent } from './produto/produtos/produtos.component';
import { ProdutoEditarComponent } from './produto/produto-editar/produto-editar.component';
import { ProdutoDetalheComponent } from './produto/produto-detalhe/produto-detalhe.component';
import { LoginComponent } from './login/login.component';
import { ProdutoNovoComponent } from './produto/produto-novo/produto-novo.component';


const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent,
    data: { title: 'Lista de Usuarios' }
  },
  {
    path: 'usuario-novo',
    component: UsuariosNovoComponent,
    data: { title: 'Adicionar Usuario' }
  },
  {
    path: 'usuario-detalhe/:id',
    component: UsuarioDetalheComponent,
    data: { title: 'Detalhe do Usuario' }
  },
  {
    path: 'usuario-editar/:id',
    component: UsuarioEditarComponent,
    data: { title: 'Editar o Usuario' }
  },
  {
    path: 'produtos',
    component: ProdutosComponent,
    data: { title: 'Editar o Produto' }
  },
  {
    path: 'produto-editar/:id',
    component: ProdutoEditarComponent,
    data: { title: 'Editar o Produto' }
  },
  {
    path: 'produto-detalhe/:id',
    component: ProdutoDetalheComponent,
    data: { title: 'Detalhes do Produto' }
  },
  {
    path: 'produto-novo',
    component: ProdutoNovoComponent,
    data: { title: 'Adicionar Produto' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },

  { path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
