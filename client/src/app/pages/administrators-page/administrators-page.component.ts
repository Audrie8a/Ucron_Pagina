import { Component, OnInit } from '@angular/core';
import { AdministratorsService } from '../../services/administrators.service';

@Component({
  selector: 'app-administrators-page',
  templateUrl: './administrators-page.component.html',
  styleUrls: ['./administrators-page.component.css']
})
export class AdministratorsPageComponent implements OnInit {

  ls: any[] = []

  constructor( private as: AdministratorsService) { }

  ngOnInit(): void {
    this.as.getImages().subscribe((res: any) => {
      res.values.forEach((element: any) => {
        const push = {
          Titulo: element.type,
          Imagen: element.picture,
          Descripcion: [
            { Descripcion: "Nombre: " + element.name },
            { Descripcion: "Descripción: " + element.description }
          ]
        }
        this.ls.push(push)
      })
      let temp = this.ls[0]
      this.ls[0] = this.ls[1]
      this.ls[1] = temp
    })
  }

}
