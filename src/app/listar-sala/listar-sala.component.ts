import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Sala } from '../sala';
import { SalaService } from '../sala.service';

@Component({
    selector: 'app-listar-sala',
    templateUrl: './listar-sala.component.html',
    styleUrls: ['./listar-sala.component.css']
})
export class ListarSalaComponent implements OnInit {

    salas: Observable<Sala[]>;

    constructor(private salaService: SalaService, private router: Router) {

    }

    ngOnInit(): void {
        this.listar();
    }

    listar() {
        this.salas = this.salaService.listar();
    }

    excluir(id: number) {
        this.salaService.excluir(id).subscribe(
            resultado => {
                console.log(resultado);
                this.listar();
            },
            erro => console.log(erro)
        );
    }

    detalhes(id: number) {
        // Entre colchetes está o nome da rota a ser criada e o parâmetro
        this.router.navigate(['detalhes', id]);
    }
    
    atualizar(id: number) {
        // Entre colchetes está o nome da rota a ser criada e o parâmetro
        this.router.navigate(['atualizar', id]);
    }
}
