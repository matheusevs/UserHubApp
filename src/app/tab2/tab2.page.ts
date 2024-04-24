import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    public usuarios: any = [];

    constructor(
        private storage: Storage
    ) {
        this.storage.create();
        this.storage.get('usuarios').then(async (usuarios) => {
            if (usuarios) {
                this.usuarios = usuarios;
            }
        })
    }

}
