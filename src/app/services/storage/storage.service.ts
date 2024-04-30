import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(
        private storage: Storage
    ) { 
        this.init();
    }

    async init()
    {
        await this.storage.create();
    }

    async get(key: string) 
    {
        const users = await this.storage.get(key);
        return users || [];
    }

    async set(key: string, value: any)
    {
        this.storage.set(key, value);
    }

    async remove(key: string, id: string)
    {
        const users = await this.get(key);
        const filteredUsers = users.filter((user: any) => user.id !== id);
        await this.set(key, filteredUsers);
        return filteredUsers;
    }

    async update(key: string, id: string, value: any)
    {
        const users = await this.get(key);
        const index = users.findIndex((user: any) => user.id === id);
        if (index !== -1) {
            users[index] = value;
            await this.set(key, users);
        }
    }
}
