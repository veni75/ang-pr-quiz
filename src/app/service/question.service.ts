import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Question } from '../model/question';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService  {
  serverUrl: string = 'http://localhost:3000/question';
  constructor(
    private http: HttpClient,
  ) {    
   }

   getAll():Observable<Question[]>{    
     return this.http.get<Question[]>(this.serverUrl);
   }
   
   get(question:Question):Observable<Question>{    
     return this.http.get<Question>(`${this.serverUrl}/${question.id}`);
   }
   
   create(question:Question):Observable<Question>{      
     return this.http.post<Question>(this.serverUrl,question);
   } 
   
   remove(question:Question):Observable<Question>{    
     return this.http.delete<Question>(`${this.serverUrl}/${question.id}`);
   }
   
   update(question:Question):Observable<Question>{     
     return this.http.patch<Question>(`${this.serverUrl}/${question.id}`,question);
   }
}
