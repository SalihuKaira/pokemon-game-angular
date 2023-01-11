import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-iniciar-sessio',
  templateUrl: './iniciar-sessio.component.html',
  styleUrls: ['./iniciar-sessio.component.css']
})
export class IniciarSessioComponent implements OnInit {


  formJugador = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  jugar() {
    localStorage.setItem('formJugador', JSON.stringify(this.formJugador.value))
  }

}
