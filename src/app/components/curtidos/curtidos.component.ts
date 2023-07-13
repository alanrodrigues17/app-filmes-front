import { Component, OnInit } from '@angular/core';
import { CurtidosService } from 'src/app/services/curtidos.service';

@Component({
  selector: 'app-curtidos',
  templateUrl: './curtidos.component.html',
  styleUrls: ['./curtidos.component.scss']
})
export class CurtidosComponent implements OnInit {
  listaFilmes: any[] = [];

  constructor(
    private curtidoService: CurtidosService
  ) { }

  ngOnInit(): void {
    this.buscarFilmes();
  }


  buscarFilmes() {
    this.curtidoService.allFilmesCurtidos.subscribe(
      res => {
        res.forEach((element: any) => {

          if (element.curtido) {
            this.listaFilmes.push(element);
          }
        });
      }
    );

  }

  onFavClick(filme: any): void {
    let filmeFormatado = { idFilme: filme.idFilme, curtido: false, img: filme.img, titulo: filme.titulo };
    this.curtidoService.updateFilmePorId(filme.idFilme, filmeFormatado).subscribe({
      next: (res) => {
        res
      },
      error: (e) => (console.log(e))
    })

    const indexOfObject = this.listaFilmes.findIndex((object: { idFilme: any; }) => {
      return object.idFilme === filme.idFilme;
    });

    if (indexOfObject !== -1) {
      this.listaFilmes.splice(indexOfObject, 1);
    }

  }

}
