import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../services/api/user.service';
import { LoadingService } from '../services/loading/loading.service';
import { ToastService } from '../services/toast/toast.service';

@Component({
    selector: 'app-edit-user-modal',
    templateUrl: './edit-user-modal.component.html',
    styleUrls: ['./edit-user-modal.component.scss'],
})
export class EditUserModalComponent {
    public name: string = '';
    public telephone: string = '';
    public email: string = '';
    @Input() user: any = {};

    constructor(
        private modalController: ModalController,
        private loadingService: LoadingService,
        private userService: UserService,
        private toastService: ToastService
    ) { }

    ionViewDidEnter() {
        this.name = this.user.name;
        this.telephone = this.user.telephone;
        this.email = this.user.email;
        this.loadingService.dismiss();
    }

    cancel() {
        return this.modalController.dismiss();
    }
    
    async confirm() {
        try {
            this.loadingService.create('Atualizando usuário...');
            let userUpdate = await this.userService.updateUser(this.user.id, { name: this.name, telephone: this.telephone });
            this.loadingService.dismiss();
            return this.modalController.dismiss(userUpdate, 'confirm');
        } catch (error) {
            this.loadingService.dismiss();
            this.toastService.toast('Erro ao atualizar usuário');
            return error;
        }
    }

}
