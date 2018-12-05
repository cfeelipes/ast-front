import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ChangeDetectorRef } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AnimaisPageComponent } from './pages/animais-page/animais-page.component';
import { VoluntariosPageComponent } from './pages/voluntarios-page/voluntarios-page.component';
import { RelatoriosPageComponent } from './pages/relatorios-page/relatorios-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmacaoDialogComponent } from './confirmacao-dialog/confirmacao-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioCadastroAnimalDialogComponent } from './formulario-cadastro-animal-dialog/formulario-cadastro-animal-dialog.component';
import { InformacaoDialogComponent } from './informacao-dialog/informacao-dialog.component';

const appRoutes: Routes = [
  { path: 'animais-page', component: AnimaisPageComponent },
  { path: 'voluntarios-page', component: VoluntariosPageComponent },
  { path: 'relatorios-page', component: RelatoriosPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    AnimaisPageComponent,
    VoluntariosPageComponent,
    RelatoriosPageComponent,
    ConfirmacaoDialogComponent,
    FormularioCadastroAnimalDialogComponent,
    InformacaoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  entryComponents: [
    ConfirmacaoDialogComponent,
    FormularioCadastroAnimalDialogComponent,
    InformacaoDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
