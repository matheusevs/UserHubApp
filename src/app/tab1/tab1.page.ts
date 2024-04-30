import { Component } from '@angular/core';
import { StorageService } from '../services/storage/storage.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    public name: string = '';
    public telephone: string = '';
    public email: string = '';
    public users: any = [];

    constructor(
        private storageService: StorageService,
    ) {}

    async ionViewDidEnter()
    {
        this.users = await this.storageService.get('users');
    }

    async addUser()
    {
        const id = btoa(unescape(encodeURIComponent(`${this.name}-${this.telephone}-${this.email}`)));
        this.users.push({id: id, name: this.name, telephone: this.telephone, email: this.email});
        await this.storageService.set('users', this.users);
    }

}
