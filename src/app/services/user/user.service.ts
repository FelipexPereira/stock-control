import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { AuthResponse } from 'src/app/models/interfaces/user/auth/AuthResponse';
import { SignupUserResponse } from 'src/app/models/interfaces/user/signupUserResponse';
import { enviroments } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = enviroments.API_URL;

  constructor(private http: HttpClient) {}

  // METODO DE CRIAR USUARIO
  signupUser(requestDatas: SignupUserRequest): Observable<SignupUserResponse> {
    return this.http.post<SignupUserResponse>(
      `${this.API_URL}/user`,
      requestDatas
    );
  }

  // METODO DE AUTENTICAÇÃO DE USUARIO
  authUser(requestDatas: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth`, requestDatas);
  }
}
