import { Animal } from 'src/app/models/animal';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-formulario-cadastro-animal-dialog',
  templateUrl: './formulario-cadastro-animal-dialog.component.html',
  styleUrls: ['./formulario-cadastro-animal-dialog.component.css']
})
export class FormularioCadastroAnimalDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FormularioCadastroAnimalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Animal) { }


  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
