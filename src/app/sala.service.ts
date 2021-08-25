import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Classe responsável pela comunicação com o backend.
 * Cada componente  de listar, criar, etc SEMPRE terá injetado no contructor esta classe e depois chamará o respectivo método
 */
@Injectable({ providedIn: 'root' })
export class SalaService {

    private baseUrl = 'http://localhost:8082/api/v1/salas';

    constructor(private http: HttpClient) {

    }

    criar(sala: Object): Observable<any> {
        return this.http.post(`${this.baseUrl}/`, sala);
    }

    atualizar(id: number, valor: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, valor);
    }

    listar(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    buscar(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    excluir(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
}
