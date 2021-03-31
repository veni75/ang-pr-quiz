import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //quiz: Quiz=new Quiz();
  quizzes$ = this.quizService.getAll();
  constructor(
    private quizService: QuizService,
  ) { }

  ngOnInit(): void {
  }

}
