import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../service/users.service';
import { Router } from '@angular/router';
import { of, tap } from 'rxjs';
import { ReturnedUser } from 'src/app/shared/shared.interface';
import { RegisterUser } from '../../../shared/shared.interface';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let service: UsersService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [UsersListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UsersService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call delete', () => {
    let id = Number(localStorage.getItem('id'));
    spyOn(component, 'delete');
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(service, 'deleteUser');
    spyOn(router, 'navigateByUrl');

    component.delete(id);
    window.confirm('Are you sure');
    service.deleteUser(id);
    router.navigateByUrl('./register');
    expect(component.delete).toHaveBeenCalledTimes(1);
    expect(window.confirm).withContext('Are you sure').toHaveBeenCalledTimes(1);
    expect(service.deleteUser).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
  });
});
