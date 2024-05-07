import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from 'app/types/respository.interface';
import { Observable } from 'rxjs';

export const GITHUB_API_URL = "https://api.github.com/users/brunolk1/repos"

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  getRepos(): Observable<Repository[]> {
    return this.httpClient.get <Repository[]>(GITHUB_API_URL)
  }
}
