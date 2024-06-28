import { Component } from '@angular/core';
import { UserService } from '../services/api/user.service';

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
        private userService: UserService
    ) {}

    async addUser()
    {
        let user = {name: this.name, telephone: this.telephone, email: this.email};
        let retorno = await this.userService.createUser(user);
        console.log(retorno);
    }
}
