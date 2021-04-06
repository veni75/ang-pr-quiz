import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../model/quiz';
//import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  serverUrl: string = 'http://localhost:3000/quiz';

  constructor(
    private http: HttpClient,
    ) {}

  getAll():Observable<Quiz[]>{    
    return this.http.get<Quiz[]>(this.serverUrl);
  }

  get(id:number):Observable<Quiz>{    
    return this.http.get<Quiz>(`${this.serverUrl}/${id}`);
  }

  create(quiz:Quiz):Observable<Quiz>{      
    return this.http.post<Quiz>(this.serverUrl,quiz);
  } 

  remove(quiz:Quiz):Observable<Quiz>{    
    return this.http.delete<Quiz>(`${this.serverUrl}/${quiz.id}`);
  }

  update(quiz:Quiz):Observable<Quiz>{     
    return this.http.patch<Quiz>(`${this.serverUrl}/${quiz.id}`,quiz);
  }
}