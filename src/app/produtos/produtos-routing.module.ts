import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { ErrorComponent } from '../error/error.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutosComponent
  },
  {
    path: ':id',
    component: DetalhesProdutoComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
