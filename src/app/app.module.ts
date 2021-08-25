import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CriarSalaComponent } from './criar-sala/criar-sala.component';
import { DetalhesSalaComponent } from './detalhes-sala/detalhes-sala.component';
import { ListarSalaComponent } from './listar-sala/listar-sala.component';
import { AtualizarSalaComponent } from './atualizar-sala/atualizar-sala.component';

@NgModule({
    declarations: [
        AppComponent,
        CriarSalaComponent,
        DetalhesSalaComponent,
        ListarSalaComponent,
        AtualizarSalaComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
