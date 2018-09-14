import { Component } from '@angular/core';
import { ServerService } from './server-service/server.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    servers = [
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
    ];

    constructor(private serverService: ServerService) { }

    onAddServer(name: string) {
        this.servers.push({
            name: name,
            capacity: 50,
            id: this.generateId()
        });
    }
    private generateId() {
        return Math.round(Math.random() * 10000);
    }

    //POST (subscriber)
    onClickSave() {
        this.serverService.storeServers(this.servers)
            .subscribe((responseData) => {
                console.log(responseData);
            },
                (err) => {
                    console.log(err);
                }
            )
    }



}
