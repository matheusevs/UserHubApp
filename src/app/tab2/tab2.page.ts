import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from '../services/storage/storage.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    public users: any = [];

    constructor(
        private storageService: StorageService
    ) {}

    async ionViewDidEnter()
    {
        this.users = await this.storageService.get('users');
    }

    async editUserById(id: string)
    {
        console.log(id)
        // const user = {id: id, name: this.name, telephone: this.telephone, email: this.email};
        // this.users = await this.storageService.update('users', id, user);
    }

    async deleteUserById(id: string)
    {
        this.users = await this.storageService.remove('users', id);
    }

}
