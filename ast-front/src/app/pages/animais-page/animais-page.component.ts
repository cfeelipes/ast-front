import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal-service/animal.service';
import { Animal } from 'src/app/models/animal';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-animais-page',
  templateUrl: './animais-page.component.html',
  styleUrls: ['./animais-page.component.css']
})
export class AnimaisPageComponent implements OnInit {

  dataSource = new AnimalDataSource(this.animalService);
  displayedColumns = ['id', 'nome', 'tipo', 'idade', 'sexo', 'acoes'];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {

  }

  editarAnimal() {

  }

  deletarAnimal(animal) {
    this.animalService.deletarAnimal(animal.id)
      .subscribe(
        res => alert('Animal deletado com sucesso'),
        error => console.log(error)
      );
  }
}

export class AnimalDataSource extends DataSource<any> {
  constructor(private animalService: AnimalService) {
    super();
  }
  connect(): Observable<Animal[]> {
    return this.animalService.listarAnimais();
  }
  disconnect() {}
}
