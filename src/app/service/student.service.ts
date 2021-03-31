import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Student } from '../model/student';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseService<Student>{

  constructor(public http:HttpClient,) { super(http,'student');}
}
