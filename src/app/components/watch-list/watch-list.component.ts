import { Component, OnInit } from '@angular/core';
import { CurtidosService } from 'src/app/services/curtidos.service';
import { FilmesService } from 'src/app/services/filmes.service';
import { Filme } from 'src/app/shared/filme';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  listaFilmes: any;
  isCurtir: boolean = false;

  constructor(
    private filmesService: FilmesService,
    private curtidoService: CurtidosService
  ) { }

  ngOnInit(): void {
    this.buscarFilmes();
  }

  //TODO: Criar um evento para essa função

  onFavClick(filme: any): void {

    this.curtidoService.getFilmePorId(filme.id).subscribe((res => {
      let filmeFormatado = { idFilme: filme.id, curtido: true, img: filme.poster_path, titulo: filme.title };
      if (!res) {

        this.curtidoService.saveFilme(filmeFormatado).subscribe({
          next: (res) => {
            this.isCurtir = true;
            this.listaFilmes
            res
          },
        })
      } else {
        this.curtidoService.updateFilmePorId(filmeFormatado.idFilme, filmeFormatado).subscribe({
          next: (res) => {
            res
          },
        })
      }
    }));

    const indexOfObject = this.listaFilmes.findIndex((object: { id: any; }) => {
      return object.id === filme.id;
    });

    if (indexOfObject !== -1) {
      this.listaFilmes.splice(indexOfObject, 1);
    }
  }

  buscarFilmes() {
    let filmes: any;
    this.curtidoService.allFilmesCurtidos.subscribe(
      res => {
        filmes = res

      }
    )

    this.filmesService.getFilmes.subscribe(
      res => {
        this.listaFilmes = res.results.slice(0, 10);
        this.listaFilmes.forEach((el: any) => {
          this.curtidoService.getFilmePorId(el.id).subscribe((res) => {
            if (res.idFilme == el.id && res.curtido == true) {
              const indexOfObject = this.listaFilmes.findIndex((object: { id: any; }) => {
                return object.id === el.id;
              });

              if (indexOfObject !== -1) {
                this.listaFilmes.splice(indexOfObject, 1);
              }
            }
          })
        });
      }
    );
  }


}
