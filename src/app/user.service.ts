import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _url = "http://localhost:3000/rest/api/load";
    //_url1 = "http://localhost:3000/rest/api/post";
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this._url)
  }


  postData(ename:string,eage:number):Observable<any>{
      return this.http.post('http://localhost:3000/rest/api/post',{
        name:ename,
        age:eage
      });
    }
}



  

    
                       