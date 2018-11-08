import {Component} from '@angular/core';

@Component({
  selector: 'server-component',
  templateUrl: './server.component.html',
  styles: [
    `
      .hello {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 10;
  allowButton: boolean = false;
  serverStatus: string = 'not creaed';
  serverName: string = 'server';
  name: string = '';
  notEmpty: boolean = false;
  clickedButton: boolean = false;
  clicked = [];
  count: number = 0;

  getServer() {
    return this.serverId;
  }
  constructor() {
    setTimeout(() => {
      this.allowButton = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverStatus = 'heloo this was created!';
  }
  click() {
    this.name = '';
  }
  fetchDetails() {
    this.clickedButton = !this.clickedButton;
    this.clicked.push(this.count++);
  }
  getColor() {
    return this.count > 5 ? 'green' : 'white';
  }
}
