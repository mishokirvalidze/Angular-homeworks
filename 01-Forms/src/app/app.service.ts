import { Injectable } from '@angular/core';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  usersList: User[] = [
    {
      id: 1,
      email: 'email@gmail.com',
      password: '1234',
      confirmPassword: '1234',
      nickname: 'nick',
      phoneNumber: 995302050,
      Website: 'website.com',
    },
    {
      id: 2,
      email: 'example@mail.com',
      password: '12345',
      confirmPassword: '12345',
      nickname: 'nick__',
      phoneNumber: 995453214,
      Website: 'web.com',
    },
  ];
}
