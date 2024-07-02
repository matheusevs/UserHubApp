import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    private loading: HTMLIonLoadingElement | null = null;

    constructor(
        private loadingController: LoadingController
    ) { }

    async create(message: string = 'Aguarde...'){
        this.loading = await this.loadingController.create({
            message
        });

        return await this.loading.present();
    }

    async dismiss() {
        if (this.loading) {
            await this.loading.dismiss();
            this.loading = null;
        }
    }
}
