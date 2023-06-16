import { Component } from '@angular/core';

import { IProblemTwo, ProblemsService } from '../../services/problems.service';

@Component({
  selector: 'app-problema2',
  templateUrl: './problem-2.component.html',
  styleUrls: ['./problem-2.component.css']
})
export class Problem2Component {

    a: string = '';
    result: number | null = null;

constructor(private problemService: ProblemsService) {}
submitForm() {
    
       let problemTwo : IProblemTwo = {
         a: this.a,
       }
       console.log(problemTwo)
       this.problemService.sendRequestTwo(problemTwo).subscribe({
        next: (res: any)=> {
          console.log(res);
          this.result = res.response 
      },
      error: (err)=> {
                 console.log(err);
          }
        }
      )
   }
}
        

