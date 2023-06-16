import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface IProblemOne {
  n: number, 
  k: number, 
  rq: number,  
  cq: number,  
  obstacles: [number, number] [],  
}
export interface IProblemTwo {
  a: string, 
}

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {
  
  outputText: string = "";
  private apiUrl: string = 'http://127.0.0.1:8000'
  constructor( private http: HttpClient ) { }

  sendRequest(problemOne: IProblemOne) {
    const url = `${this.apiUrl}/problem-1/chess/`
    const inputData = {...problemOne};    
    return this.http.post(url, inputData)
  
    
    }
    sendRequestTwo(problemTwo: IProblemTwo) {
    const url = `${this.apiUrl}/problem-1/string/`
    const inputData = JSON.stringify(problemTwo); 
    return this.http.post(url, inputData, { headers: { 'Content-Type': 'application/json' } });
      
    }
  }
  