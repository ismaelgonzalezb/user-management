import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly httpService: HttpClient) {}

  getUsers() {
    return this.httpService.get(environment.apiURL + '/users');
  }

  createUser(user: any) {
    return this.httpService.post(environment.apiURL + '/users', user);
  }

  removeUser(id: number) {
    return this.httpService.delete(environment.apiURL + '/users/' + id);
  }

  updateUser(id: number, user: any) {
    return this.httpService.patch(environment.apiURL + '/users/' + id, user);
  }

  getUser(id: number) {
    return this.httpService.get(environment.apiURL + '/users/' + id);
  }
}
