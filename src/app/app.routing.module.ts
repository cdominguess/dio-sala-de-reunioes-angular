import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualizarSalaComponent } from './atualizar-sala/atualizar-sala.component';
import { CriarSalaComponent } from './criar-sala/criar-sala.component';
import { DetalhesSalaComponent } from './detalhes-sala/detalhes-sala.component';
import { ListarSalaComponent } from './listar-sala/listar-sala.component';

const routes: Routes = [
    { path: 'salas', component: ListarSalaComponent },
    { path: 'adicionar', component: CriarSalaComponent },
    { path: 'atualizar/:id', component: AtualizarSalaComponent },
    { path: 'detalhes/:id', component: DetalhesSalaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }