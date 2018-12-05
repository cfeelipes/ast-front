import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-informacao-dialog',
  templateUrl: './informacao-dialog.component.html',
  styleUrls: ['./informacao-dialog.component.css']
})
export class InformacaoDialogComponent implements OnInit {

  mensagem: string;

  constructor(public dialogRef: MatDialogRef<InformacaoDialogComponent>) {}

  ngOnInit() {

  }

}
