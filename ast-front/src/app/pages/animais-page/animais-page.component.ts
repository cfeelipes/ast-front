import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AnimalService } from '../../services/animal-service/animal.service';
import { Animal } from 'src/app/models/animal';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { ConfirmacaoDialogComponent } from 'src/app/confirmacao-dialog/confirmacao-dialog.component';
// tslint:disable-next-line:max-line-length
import { FormularioCadastroAnimalDialogComponent } from 'src/app/formulario-cadastro-animal-dialog/formulario-cadastro-animal-dialog.component';
import { InformacaoDialogComponent } from 'src/app/informacao-dialog/informacao-dialog.component';

@Component({
  selector: 'app-animais-page',
  templateUrl: './animais-page.component.html',
  styleUrls: ['./animais-page.component.css']
})
export class AnimaisPageComponent implements OnInit {

  dialogRefConfirmacao: MatDialogRef<ConfirmacaoDialogComponent>;
  dialogRefInformacao: MatDialogRef<InformacaoDialogComponent>;
  dataSource: any;
  animal: Animal;
  animais: Animal[];
  displayedColumns = ['id', 'nome', 'tipo', 'idade', 'sexo', 'acoes'];

  nome: string;
  tipo: string;
  idade: number;
  sexo: string;

  constructor(private animalService: AnimalService, private dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.refresh();
  }

  adicionarAnimal() {
    const dialogRef = this.dialog.open(FormularioCadastroAnimalDialogComponent, {
      width: '500px',
      data: {
        nome: this.nome,
        tipo: this.tipo,
        idade: this.idade,
        sexo: this.sexo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
      this.animalService.criarAnimal(this.animal)
        .subscribe(
          () => this.dialogInformacao('Animal adicionado com sucesso!'),
          err => console.log(err)
        );
    });
  }

  editarAnimal(animal) {
    this.animalService.recuperarAnimal(animal.id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );

    // console.log(this.animal);
    // const idAnimalEmEdicao = this.animal.id;

    const dialogRef = this.dialog.open(FormularioCadastroAnimalDialogComponent, {
      width: '500px',
      data: {
        nome: animal.nome,
        tipo: animal.tipo,
        idade: animal.idade,
        sexo: animal.sexo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      const novoAnimal: Animal = result;
      this.animalService.alterarAnimal(animal.id, novoAnimal)
        .subscribe(
          () => this.dialogInformacao('Animal editado com sucesso!'),
          err => console.log(err)
        );
    });
  }

  deletarAnimal(animal) {
    this.animalService.deletarAnimal(animal.id)
      .subscribe(
        () => this.dialogInformacao('Animal removido com sucesso!'),
        () => this.dialogInformacao('Ocorreu um erro, por favor tente novamente.')
      );
  }

  dialogConfirmacaoDeletarAnimal(animal) {
    this.dialogRefConfirmacao = this.dialog.open(ConfirmacaoDialogComponent, {
      disableClose: false
    });
    this.dialogRefConfirmacao.componentInstance.confirmMessage = 'Tem certeza que deseja deletar o animal?';

    this.dialogRefConfirmacao.afterClosed().subscribe(result => {
      if (result) {
        this.deletarAnimal(animal);
      }
      this.dialogRefConfirmacao = null;
      this.refresh();
    });
  }

  dialogInformacao(mensagem: string) {
    this.dialogRefInformacao = this.dialog.open(InformacaoDialogComponent, {
      disableClose: false
    });

    this.dialogRefInformacao.componentInstance.mensagem = mensagem;

    this.dialogRefInformacao.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  refresh() {
    this.animalService.listarAnimais().subscribe((res) => {
      this.dataSource = new AnimalDataSource(res);
      this.changeDetectorRefs.detectChanges();
    });
  }
}

export class AnimalDataSource extends DataSource<any> {

  constructor(private animais) {
    super();
  }

  connect(): Observable<any> {
    return of(this.animais);
  }

  disconnect() {
    // No-op
  }
}
