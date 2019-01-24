import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test';
  serverCreated = false;
  servers = ['Testserver','Testserver 2'];

  constructor() { 
    setTimeout(()=>{this.allowNewServer=true;},2000)
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated =true;
    this.servers.push(this.serverName)//push a new server on it
    this.serverCreationStatus='Server was created! The server name is '+ this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }


  

}
