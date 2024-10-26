import { Component, OnInit } from '@angular/core';
import { SchnaService } from './schna.service';


@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.page.html',
  styleUrls: ['./lazy.page.scss'],
})
export class LazyPage implements OnInit {

  items:any;
  constructor(
    private SchnaService : SchnaService
  ) { }

  ngOnInit(): void {
    this.SchnaService.ObtenerPelicula().subscribe((peliculas)=>{
      this.items= peliculas;
      localStorage.setItem('peliculas',JSON.stringify(this.items));
    })
    
  }

}
