import { Component } from '@angular/core';
import { GithubService } from 'app/services/github.service';
import { Repository } from 'app/types/respository.interface';
import { map, OperatorFunction, pipe } from 'rxjs';




@Component({
  selector: 'app-main-section-projects',
  templateUrl: './main-section.projects.component.html',
  styleUrl: './main-section.projects.component.scss'
})
export class MainSectionProjectsComponent {

  repositoryList: Repository[] = [] 
  

  constructor(private readonly reposGitHub: GithubService) {}

  private getRepository() {
    this.reposGitHub.getRepos().subscribe((data) => {
      this.repositoryList = data;
      //console.log(data)
      
      /*pipe(
        map((listRepos: any[]) => listRepos.map(repo => ({
          name: repo.name,
          html_url: repo.html_url,
          description: repo.description,
          languages_url: repo.languages_url
        } as Repository)))
      )*/
    
      
    })
    
  }
  ngOnInit(): void {
    this.getRepository()
  }

}
