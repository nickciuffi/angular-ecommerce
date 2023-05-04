import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/produtos.service';
import { Product } from '../produtos';
import { ActivatedRoute } from '@angular/router';
import { isEmpty } from 'rxjs';
import { NotificacaoService } from 'src/app/notificacao.service';
import { CarrinhoService } from 'src/app/carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.scss']
})
export class DetalhesProdutoComponent implements OnInit {

  qtd = 1;
  product: Product | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificator: NotificacaoService,
    private carrinho: CarrinhoService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const prod = this.produtosService.getOne(Number(routeParams.get("id") as string))
    if (typeof prod === 'string') return;
    this.product = prod;

    if (this.product) {
      this.product.img = `../../assets/${this.product.img}`
    }
  }

  adicionaCarrinho() {
    this.notificator.notify("Item adicionado ao carrinho");
    if (!this.product) return;
    this.carrinho.saveItem(this.product, this.qtd);
  }


}
