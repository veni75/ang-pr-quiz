import { Component, EventEmitter, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Question } from '../../model/question';
import { QuestionService } from 'src/app/service/question.service';
import { Quiz } from '../../model/quiz';
import { QuizService } from 'src/app/service/quiz.service';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions$ = this.questionService.getAll();
  quiz$: Observable<Quiz> = this.activatedRoute.params.pipe(
    switchMap(params => {
      return this.quizService.get(params.id);
    })
  );


  points: number = 0;

  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

  }

  onChange(event: any) {
    //console.log(event.target.checked);    
  }

  check(event: any) {
    //console.log(event.target.parentElement.childNodes);   

    if (event.target.parentElement.childNodes[0].checked) {
      event.target.parentElement.childNodes[1].classList.add("backgr");
      this.points += 1;
    }
    
    if (event.target.parentElement.childNodes[3].checked) {

      event.target.parentElement.childNodes[4].classList.add("bgroundfalse");
    }
    if (event.target.parentElement.childNodes[6].checked) {

      event.target.parentElement.childNodes[7].classList.add("bgroundfalse");
    }
    if (event.target.parentElement.childNodes[9].checked) {

      event.target.parentElement.childNodes[10].classList.add("bgroundfalse");
    }

    event.target.parentElement.childNodes[0].setAttribute('disabled', 'disabled');
    event.target.parentElement.childNodes[3].setAttribute('disabled', 'disabled');
    event.target.parentElement.childNodes[6].setAttribute('disabled', 'disabled');
    event.target.parentElement.childNodes[9].setAttribute('disabled', 'disabled');
  }

  ngOnInit(): void {
  }

}
