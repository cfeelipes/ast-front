import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal-service/animal.service';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-animais-page',
  templateUrl: './animais-page.component.html',
  styleUrls: ['./animais-page.component.css']
})
export class AnimaisPageComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'tipo', 'sexo', 'idade'];
  animalService: AnimalService;
  animais: Animal[];
  teste: any;

  constructor(animalService: AnimalService) {
    this.animalService = animalService;
  }

  ngOnInit() {
    this.preencheTabela();
  }

  preencheTabela() {
    this.teste = this.animalService.listarAnimais().subscribe(animais => this.animais = animais);
    console.log(this.teste);
  }
}
