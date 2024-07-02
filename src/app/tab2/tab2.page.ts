import { Component } from '@angular/core';
import { UserService } from '../services/api/user.service';
import { ModalController } from '@ionic/angular';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';
import { LoadingService } from '../services/loading/loading.service';
import { ToastService } from '../services/toast/toast.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    public users: any = [];

    constructor(
        private userService: UserService,
        private modalController: ModalController,
        private loadingService: LoadingService,
        private toastService: ToastService
    ) {}

    async ionViewDidEnter()
    {
        await this.getUsers();
    }

    async editUserById(id: string)
    {
        try {
            this.loadingService.create('Buscando informações...');
            let user = await this.userService.editUser(id);

            const modal = await this.modalController.create({
                component: EditUserModalComponent,
                componentProps: {
                    'user': user
                }
            });

            modal.present();
            
            const { data, role } = await modal.onDidDismiss();

            if (role === 'confirm') {
                await this.getUsers();
            }
        } catch (error) {
            this.toastService.toast('Erro ao editar usuário');
        }
        
    }

    async deleteUserById(id: string)
    {
        try {
            await this.loadingService.create('Deletando usuário...');
            let deleteUser = await this.userService.deleteUser(id);
            await this.loadingService.dismiss();
            await this.getUsers();
        } catch (error) {
            this.toastService.toast('Erro ao deletar usuário');
        }
    }

    async getUsers(message = 'Atualizando dados...') {
        try {
            this.loadingService.create(message)
            this.users = await this.userService.getUsers();
            this.loadingService.dismiss();    
        } catch (error) {
            this.toastService.toast('Erro ao buscar usuários');
        }
    }

}
