import { Component } from '@angular/core';
import { UserService } from '../services/api/user.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    public users: any = [];

    constructor(
        private userService: UserService
    ) {}

    async ionViewDidEnter()
    {
        this.users = await this.userService.getUsers();
        console.log(this.users)
    }

    async editUserById(id: string)
    {
        console.log(id)
    }

    async deleteUserById(id: string)
    {
        let deleteUser = await this.userService.deleteUser(id);
        console.log(deleteUser);
    }

}
