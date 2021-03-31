import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends { id: number }> {
  entityName: string = '';
  list$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  apiUrl: string = "http://localhost:3000/data.json";
  constructor(
    public http: HttpClient,
    @Inject('entityName') entityName: string,
  ) {
    this.entityName = entityName;
  }

  getAll(): void {
    this.http.get<T[]>(`${this.apiUrl}/${this.entityName}`)
      .subscribe(
        list => this.list$.next(list),
        err => console.error(err)
      )
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${this.entityName}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${this.entityName}`,
      entity).pipe(
        tap(e => this.getAll())
      );
  }
  update(entity: T): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}/${this.entityName}/${entity.id}`, entity);
  }
  remove(entity: T): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${this.entityName}/${entity.id}`);
  }

  like(key:string,value:string):Observable<T[]>{
    key= `${key}_like`;
    const query = `${this.apiUrl}/${this.entityName}?${key}=${value}`;
    return this.http.get<T[]>(query);
  }

  fullText(value:string):Observable<T[]>{
    const query = `${this.apiUrl}/${this.entityName}?q=${value}`;
    return this.http.get<T[]>(query);
  }
}
