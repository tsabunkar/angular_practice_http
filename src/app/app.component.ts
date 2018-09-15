import { Component } from '@angular/core';
import { ServerService } from './server-service/server.service';
import { Server } from './models/server.model';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
   /*  servers = [
        {
            name: 'Testserver',
            capacity: 10,
            id: this.generateId()
        },
        {
            name: 'Liveserver',
            capacity: 100,
            id: this.generateId()
        }
    ]; */

    servers: Server[];

    constructor(private serverService: ServerService) { }

    private generateId() {
        // return Math.round(Math.random() * 10000);
        return 10;
    }




    //POST (subscriber)
    onClickSave(serverName: string) {

        let payload: Server = {
            name: serverName,
            capacity: 50,
            id: this.generateId()
        }

        this.serverService.storeServers(payload)
            .subscribe((responseData) => {
                console.log(responseData);
            },
                (err) => {
                    console.log(err);
                }
            )
    }

    //GET ALL
    onClickGet() {
        this.serverService.getServers()
            .subscribe((data: Server[]) => {
                /*   const data = JSON.stringify(responseData) //unwrapping the response (datatype) to json 
                    console.log(responseData);
                  console.log(data); */
                // console.log(data);
                console.log('----subscriber----');
                console.log(data);
                this.servers = data

            },
                (err) => {
                    console.log(err);
                }
            )
    }


    //PUT
    onClickEdit() {
        this.serverService.editServers(this.servers)
            .subscribe((responseData) => {
                console.log(responseData);
            },
                (err) => {
                    console.log(err);
                }
            )
    }

    onClickDelete() {

        let payload: Server = {
            name: 'test1',
            capacity: 50,
            id: this.generateId()
        }

        this.serverService.deleteServer(payload)
            .subscribe((responseData) => {
                console.log(responseData);
            },
                (err) => {
                    console.log(err);
                }
            )
    }

    appName = this.serverService.getAppName();//Note this getAppName() will return Observable
    //so here we need to subscribe it then we can get that data value, rather we r not subcribing it
    //but using 'async' pipe which will do the subcription for us :)



}
