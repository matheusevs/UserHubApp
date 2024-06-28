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

    async createUser(user: any) {
        return this.http.post(`${this.hostApi}/createUser`, user).toPromise();
    }

    async deleteUser(id: string) {
        return this.http.delete(`${this.hostApi}/deleteUser/${id}`).toPromise();
    }

    async editUser(id: string, user: any) {
        return this.http.put(`${this.hostApi}/editUser/${id}`, user).toPromise();
    }
}
