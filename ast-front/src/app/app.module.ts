import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AnimaisPageComponent } from './pages/animais-page/animais-page.component';
import { VoluntariosPageComponent } from './pages/voluntarios-page/voluntarios-page.component';
import { RelatoriosPageComponent } from './pages/relatorios-page/relatorios-page.component';

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
    RelatoriosPageComponent
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
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
