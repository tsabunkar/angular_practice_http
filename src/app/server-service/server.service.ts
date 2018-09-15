import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//*imports from rxjs
import { Observable, throwError, of } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { Server } from '../models/server.model';


@Injectable()//this @Injectable() decorator is required if ur injecting the service into a service
export class ServerService {

    // constructor(private http: Http) { }
    constructor(private httpClient: HttpClient) { }
    url: string = 'https://ng-practice-http.firebaseio.com/data.json';

    //POST (Sending Array of items from client to server)
    storeServers(payload: Server) {

        const httpHeaderOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // 'Authorization': 'my-auth-token'
            })
        };

        return this.httpClient.post(this.url, payload, httpHeaderOptions).pipe(
            map((responseData) => {
                console.log(responseData);
                console.log(responseData['name']);

            }),
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
        return this.httpClient.get<Server[]>(this.url)
            .pipe(

                map((resp) => { //! No need to specifiy the (resp: Response) as data Type since we r mentioning the type in get<any>
                    //! Also we can directly use data type as required interface data-type rather converting it from Response type
                    //! this is offered by HttpClient, but which was not present in Http
                    console.log(resp);

                    console.log(Object.keys(resp));
                    console.log(Object.keys(resp).length);
                    console.log(Object.keys(resp)[0]);
                    console.log(Object.keys(resp)[1]);
                    console.log('value 1', resp[Object.keys(resp)[0]]);
                    console.log('value 2', resp[Object.keys(resp)[1]]);

                    let requiredResopnseData: Server[] = [];

                    for (let index = 0; index < Object.keys(resp).length; index++) {
                        const propValuesObj = resp[Object.keys(resp)[index]];
                        console.log(propValuesObj);
                        requiredResopnseData.push(propValuesObj)
                    }
                    console.log(requiredResopnseData);
                    return requiredResopnseData;
                }),
                catchError(err => {
                    this.handlerError(err);
                    throw err;
                })
            )


    }

    editServers(servers: any[]) {
        const httpHeaderOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // 'Authorization': 'my-auth-token'
            })
        };

        return this.httpClient.put<any>(this.url, servers, httpHeaderOptions).pipe(
            catchError(err => {
                this.handlerError(err);
                throw err;
            })
        );
    }

    deleteServer(payload: Server) {
        return this.httpClient.delete<any>(this.url,  payload)
            .pipe(
                map((responseData) => {
                    console.log('---');
                    console.log(responseData);
                }),
                catchError(err => {
                    this.handlerError(err);
                    throw err;
                })
            )
    }

    getAppName() {
        return this.httpClient.get('https://ng-practice-http.firebaseio.com/data/appName.json').pipe(
            map((resp: Response) => {
                console.log(resp);
                const data = JSON.stringify(resp);
                return data;
            }),
            catchError(err => {
                this.handlerError(err);
                throw err;
            })
        )
    }




    handlerError(err: any) {
        console.log('error has occured bro:', err);
    }


}