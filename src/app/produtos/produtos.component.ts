import { Component, OnInit } from '@angular/core';
import { Product, produtos } from './produtos';
import { ProdutosService } from '../produtos.service';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  public products: Product[] | undefined;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.products = this.produtosService.getAll();
  }

}
