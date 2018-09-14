import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//*imports from rxjs
import { Observable, throwError, of } from "rxjs";
import { catchError, map } from 'rxjs/operators';




@Injectable()//this @Injectable() decorator is required if ur injecting the service into a service
export class ServerService {

    // constructor(private http: Http) { }
    constructor(private http: HttpClient) { }
    url: string = 'https://ng-practice-http.firebaseio.com/data.json';

    //POST (Sending Array of items from client to server)
    storeServers(servers: any[]) {

        const httpHeaderOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // 'Authorization': 'my-auth-token'
            })
        };

        return this.http.post<any>(this.url, servers, httpHeaderOptions).pipe(
            catchError(err => {
                this.handlerError(err);
                throw err;
            })
        );
        //post() , pipe() -> method return type is - Observable<Resopnse>
        //data.json -> at end of url tells firbase that it this post request is JSON format
    }


    //GET ALL (Fetching data from backend to client)
    getServers() {
        return this.http.get<any>(this.url)
          /*   .pipe(

                map((resp: Response) => {
                    console.log(resp);
                }),
                catchError(err => {
                    this.handlerError(err);
                    throw err;
                })
            ) */


    }


    handlerError(err: any) {
        console.log('error hass occured :', err);
    }


}