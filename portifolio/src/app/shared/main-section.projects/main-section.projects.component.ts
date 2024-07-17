import { Component } from '@angular/core';
import { GithubService } from 'app/services/github.service';
import { Repository } from 'app/types/respository.interface';

@Component({
  selector: 'app-main-section-projects',
  templateUrl: './main-section.projects.component.html',
  styleUrl: './main-section.projects.component.scss'
})
export class MainSectionProjectsComponent {

  repositoryList: Repository = {} as Repository 


  constructor(private readonly reposGitHub: GithubService) {}

  private getRepository() {
    this.reposGitHub.getRepos().subscribe((listRepos: Repository[]) => {
      this.repositoryList = listRepos[0]
    })
    
  }

}
