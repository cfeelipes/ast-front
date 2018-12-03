import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Animal } from '../../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }
  APIEndpoint = environment.APIEndpoint;

  listarAnimais(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.APIEndpoint);
  }

  recuperarAnimal(id: string) {
    return this.http.get<Animal[]>(this.APIEndpoint + id);
  }

  criarAnimal(animal: Animal) {
    return this.http.post(this.APIEndpoint, animal);
  }

  alterarAnimal(id: string, animal: Animal) {
    return this.http.put(this.APIEndpoint + id, animal);
  }

  deletarAnimal(id: string) {
    return this.http.delete<Animal[]>(this.APIEndpoint + id);
  }
}
