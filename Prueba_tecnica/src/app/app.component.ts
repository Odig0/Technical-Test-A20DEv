import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  n: number = 0;
  k: number = 0;
  rq: number = 0;
  cq: number = 0;
  obstacles: { r: number, c: number }[] = [];

  constructor(private http: HttpClient) {}

  submitForm() {
    const formData = new FormData();
    formData.append('n', this.n.toString());
    formData.append('k', this.k.toString());
    formData.append('rq', this.rq.toString());
    formData.append('cq', this.cq.toString());

    this.obstacles.forEach((obstacle, i) => {
      formData.append(`obstacle-${i}-r`, obstacle.r.toString());
      formData.append(`obstacle-${i}-c`, obstacle.c.toString());
    });

    this.http.post('http://127.0.0.1:8000/', formData)
      .subscribe((response: any) => {
        const count = response.count;
        console.log('Count:', count);
        alert(count)
      });
  }
}
