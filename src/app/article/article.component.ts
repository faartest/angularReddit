import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
    this.article = new Article('angular', 'http://angular.io', 10);
  }

  voteUp() {
    this.article.voteUp();
    return false; /*
    con poner false evitamos que se recargue la pagina cada ves que apretamos voteUp y voteDown. El reload sucede debido a que js propaga los eventos al parent, como encuetra un link vacio, el browser recarga la pagina
    */
  }
  voteDown() {
    this.article.voteDown();
    return false;
  }
  ngOnInit(): void {}
}
