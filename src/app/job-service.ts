import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  apiUrl = "https://690ed39bbd0fefc30a05984a.mockapi.io/ITV-Jobs";

  constructor(private httpClient : HttpClient){}
  
    getJobs(): Observable<any>
    {
      return this.httpClient.get(this.apiUrl);
    }
  

    postJob(data: {
      title: string,
      description:string,
      openings:string
    }): Observable<any>
    {
      return this.httpClient.post(this.apiUrl,data);
    }

    deleteJob(jobId: string): Observable<any>
    {
      return this.httpClient.delete(this.apiUrl+"/"+jobId)
    }
  
}
