import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Sala } from '../sala';
import { SalaService } from '../sala.service';

@Component({
    selector: 'app-atualizar-sala',
    templateUrl: './atualizar-sala.component.html',
    styleUrls: ['./atualizar-sala.component.css']
})
export class AtualizarSalaComponent implements OnInit {

    id: number;
    sala: Sala;
    submitted: boolean;

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

        // Seta essa propriedade para false, pois a mesma está sendo monitorada no teplate
        this.submitted = false;

        // Chama o método de buscar dados da sala do service para popular a instância antes criada
        this.salaService.buscar(this.id).subscribe(
            resultado => {
                console.log(resultado);
                this.sala = resultado;
            },
            erro => console.log(erro)
        );
    }

    atualizar() {
        // Chama o método de atualizar do service passando o ID e a entidade preenchida
        this.salaService.atualizar(this.id, this.sala).subscribe(
            resultado => console.log(resultado),
            erro => console.log(erro)
        );

        this.sala = new Sala();
        this.irParaListagem();
    }

    /**
     * Método padrão acionado quando um evento de SBMIT ocorre no formulário dentro do template indicado via Component
     */
    onSubmit() {
        this.submitted = true;
        this.atualizar();
    }

    irParaListagem() {
        this.router.navigate(['salas']);
    }

}
