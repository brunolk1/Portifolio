import { Component, OnInit } from '@angular/core';
import { GithubService } from 'app/services/github.service';
import { response } from 'express';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    // this.githubService.getRepos().subscribe({
    //   next: (response) => console.log(response)
    // })
  }
}
