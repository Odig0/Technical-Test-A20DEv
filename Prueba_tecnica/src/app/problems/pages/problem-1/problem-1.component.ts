import { Component } from '@angular/core';

import { IProblemOne, ProblemsService } from '../../services/problems.service';
@Component({
  selector: 'app-problema1',
  templateUrl: './problem-1.component.html',
  styleUrls: ['./problem-1.component.css']
})
export class Problem1Component  {

    n: number = 0;
    k: number = 0;
    rq: number = 0;
    cq: number = 0;
    obstacles: { r: number, c: number }[] = [];
    auxobstacles : string = "";
    mapObstacles!: [number,number] [] ;
    result2: number | null = null;
    tmpArray = Array<string>()
  
    constructor(private problemService: ProblemsService ) {}
    onChange(event: any){
        let numbers = event.split(",").filter((e:string)=>e!="")
        console.log(numbers)
        if (numbers.length == this.k * 2){
          // stopwriting()
          console.log("stop")
        }
        console.log(event)
    }
    convertToMatrix() {
      const obstacles = this.auxobstacles.split(',').filter(e => e !== ''); // Obtener un array de strings ['4', '5', '8', '9']
      this.obstacles = [];
      for (let index = 0; index < obstacles.length; index += 2) {
        const x = parseInt(obstacles[index], 10); // Convertir el primer número a entero
        const y = parseInt(obstacles[index + 1], 10); // Convertir el segundo número a entero
        this.obstacles.push({ r: y, c: x }); // Agregar el par de coordenadas al arreglo de obstáculos
      }
    }
    
    submitForm() {
      let problemOne: IProblemOne = {
        n: this.n,
        k: this.k,
        rq: this.rq,
        cq: this.cq,
        obstacles: this.obstacles.map(ele => [ele.c, ele.r])
      };
    
      console.log(problemOne);
      this.problemService.sendRequest(problemOne).subscribe({
        next: (res: any) => {
          console.log(res);
          this.result2 = res.response;
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }