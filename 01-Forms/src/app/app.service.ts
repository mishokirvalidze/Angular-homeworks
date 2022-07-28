import { Injectable } from '@angular/core';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  usersList: User[] = [
    {
      email: 'email@gmail.com',
      password: '1234567',
      confirmPassword: '1234567',
      nickname: 'nickName',
      phoneNumber: '+995 555-302-050',
      website: 'website.com',
    },
    {
      email: 'example@mail.com',
      password: '12345678',
      confirmPassword: '12345678',
      nickname: 'nick-name',
      phoneNumber: '+995 555-453-214',
      website: 'web.com',
    },
  ];
}
