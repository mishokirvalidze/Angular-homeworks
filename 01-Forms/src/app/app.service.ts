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
      website: 'facebook.com',
    },
    {
      email: 'example@mail.com',
      password: 'password',
      confirmPassword: 'password',
      nickname: 'nick-name',
      phoneNumber: '+995 555-453-214',
      website: 'google.com',
    },
  ];
}
