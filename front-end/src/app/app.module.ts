import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosNovoComponent } from './usuarios-novo/usuarios-novo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {  
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { ProdutosComponent } from './produto/produtos/produtos.component';
import { ProdutoNovoComponent } from './produto/produto-novo/produto-novo.component';
import { ProdutoDetalheComponent } from './produto/produto-detalhe/produto-detalhe.component';
import { ProdutoEditarComponent } from './produto/produto-editar/produto-editar.component';
import { ProdutoDeletarComponent } from './produto/produto-deletar/produto-deletar.component';
import { HeaderComponent } from './navigation/header/header.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuariosNovoComponent,
   MenuComponent,
    UsuarioDetalheComponent,
    UsuarioEditarComponent,
    ProdutosComponent,
    ProdutoNovoComponent,
    ProdutoDetalheComponent,
    ProdutoEditarComponent,
    ProdutoDeletarComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,  
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule, 
    MatSelectModule,
    MatSidenavModule,  
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
