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

    async editUserById(id: number)
    {
        console.log(id)
    }

    async deleteUserById(id: string)
    {
        this.users = await this.storageService.remove('users', id);
    }

}
