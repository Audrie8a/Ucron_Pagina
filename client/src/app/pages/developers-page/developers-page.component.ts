import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DevelopersPageService } from 'src/app/services/developers-page.service';

@Component({
  selector: 'app-developers-page',
  templateUrl: './developers-page.component.html',
  styleUrls: ['./developers-page.component.css']
})
export class DevelopersPageComponent implements OnInit {

  LstContenido = [
    {
      Titulo: "Vice Presidente",
      Imagen: "https://getwallpapers.com/wallpaper/full/e/3/a/204906.jpg",
      Descripcion: [
        { Descripcion: "Nombre: Audrie" },
        { Descripcion: "Carnet: 201801263" },
        { Descripcion: "Curso: Redes 2" },

      ]
    },
    {
      Titulo: "Vice Presidente",
      Imagen: "https://getwallpapers.com/wallpaper/full/c/3/2/49498.jpg",
      Descripcion: [
        { Descripcion: "Nombre: Annelisse" },
        { Descripcion: "Carnet: 201801263" },
        { Descripcion: "Curso: Redes 2" },
      ]
    },
    {
      Titulo: "Vice Presidente",
      Imagen: "https://getwallpapers.com/wallpaper/full/2/2/2/207263.jpg",
      Descripcion: [
        { Descripcion: "Nombre: Elizabeth" },
        { Descripcion: "Carnet: 201801263" },
        { Descripcion: "Curso: Redes 2" },
      ]
    }
  ]


  constructor(private devsService: DevelopersPageService) { }

  ngOnInit(): void {
    this.devsService.getData_Devs().subscribe({
      next: (data: any) => {
        console.log(data);
        this.LstContenido = data.values.map(function (dt: any) {
          return {
            Titulo: dt.type,
            Imagen: dt.picture,
            Descripcion: [
              { Descripcion: "Nombre:  " + dt.name },
              { Descripcion: "Carnet:  " + dt.carnet },
              { Descripcion: "Curso:  " + dt.course }
            ]
          }
        });

      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
