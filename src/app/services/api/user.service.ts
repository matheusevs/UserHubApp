import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private hostApi = 'http://127.0.0.1:8000/api'

    constructor(
        private http: HttpClient
    ) { }

    async getUsers() {
        return this.http.get(`${this.hostApi}/getUsers`).toPromise();
    }

    async editUser(id: string) {
        return this.http.get(`${this.hostApi}/editUser/${id}`).toPromise();
    }

    async createUser(user: any) {
        return this.http.post(`${this.hostApi}/createUser`, user).toPromise();
    }

    async deleteUser(id: string) {
        return this.http.delete(`${this.hostApi}/deleteUser/${id}`).toPromise();
    }

    async updateUser(id: string, user: any) {
        return this.http.put(`${this.hostApi}/updateUser/${id}`, user).toPromise();
    }
}
