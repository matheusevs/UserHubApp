import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(
        private toastController: ToastController
    ) { }

    async toast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 6000,
            position: 'bottom'
        });
        await toast.present();
    }
}