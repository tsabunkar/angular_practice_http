import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//*imports from rxjs
import { Observable, throwError, of } from "rxjs";
import { catchError, map } from 'rxjs/operators';




@Injectable()//this @Injectable() decorator is required if ur injecting the service into a service
export class ServerService {

    // constructor(private http: Http) { }
    constructor(private http: HttpClient) { }
    url: string = 'https://ng-practice-http.firebaseio.com/data.json';

    //POST (Sending Array of items)
    storeServers(servers: any[]) {
        return this.http.post<any>(this.url, servers).pipe(
            catchError(err => {
                this.handlerError(err);
                throw err;
            })
        );
        //post() -> method return type is - Observable<Resopnse>
        //data.json -> at end of url tells firbase that it this post request is JSON format
    }


    handlerError(err: any) {
        console.log('error hass occured :', err);
    }


}