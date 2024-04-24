import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    public nome: string = '';
    public telefone: string = '';
    public email: string = '';
    public usuarios: any = [];

    constructor(
        private storage: Storage,
    ) {
        this.storage.create();
        this.storage.get('usuarios').then(async (usuarios) => {
            if (usuarios) {
                this.usuarios = usuarios;
            }
        });
    }

    adicionarUsuario() {
        const id = btoa(unescape(encodeURIComponent(`${this.nome}-${this.telefone}-${this.email}`)));
        this.usuarios.push({id: id, nome: this.nome, telefone: this.telefone, email: this.email});
        this.storage.set('usuarios', this.usuarios);
    }

}
