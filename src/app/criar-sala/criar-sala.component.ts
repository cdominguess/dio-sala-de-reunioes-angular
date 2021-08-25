import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Sala } from '../sala';
import { SalaService } from '../sala.service';

@Component({
    selector: 'app-criar-sala',
    templateUrl: './criar-sala.component.html',
    styleUrls: ['./criar-sala.component.css']
})
export class CriarSalaComponent implements OnInit {
    
    sala: Sala;
    submitted: boolean;

    constructor(private salaService: SalaService, private router: Router) { 

    }

    /**
     * Método que inicializa o componente quando o mesmo é acionado por algum evento
     */
    ngOnInit(): void {
        // Cria uma instância da model sala
        this.sala = new Sala();

        // Seta essa propriedade para false, pois a mesma está sendo monitorada no teplate
        this.submitted = false;
    }

    criar() {
        this.salaService.criar(this.sala).subscribe(
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
        this.criar();
    }
    
    irParaListagem() {
         this.router.navigate(['salas']);
    }
}
