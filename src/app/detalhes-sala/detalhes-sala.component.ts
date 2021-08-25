import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Sala } from '../sala';
import { SalaService } from '../sala.service';
import { ListarSalaComponent } from '../listar-sala/listar-sala.component';

@Component({
    selector: 'app-detalhes-sala',
    templateUrl: './detalhes-sala.component.html',
    styleUrls: ['./detalhes-sala.component.css']
})
export class DetalhesSalaComponent implements OnInit {

    id: number;
    sala: Sala;

    constructor(private route: ActivatedRoute, private router: Router, private salaService: SalaService) {

    }

    /**
     * Método que inicializa o componente quando o mesmo é acionado por algum evento
     */
     ngOnInit() {
        // BUsca o ID que foi apssado por parâmetro
        this.id = this.route.snapshot.params['id'];

        // Cria uma instância da model sala
        this.sala = new Sala();
        
        // Chama o método de buscar dados da sala do service para popular a instância antes criada
        this.salaService.buscar(this.id).subscribe(
            resultado => {
                console.log(resultado);
                this.sala = resultado;
            },
            erro => console.log(erro)
        );
    }

    irParaListagem() {
        this.router.navigate(['salas']);
    }

}
