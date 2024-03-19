import { Component } from '@angular/core';
import { GraczNew } from './gracz-new';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'tabelagraczy';
    id: any;
    imie: any;
    nazwisko: any;
    nick: any;
    game: any;

    graczelol = new Array<GraczNew>();
    graczeval = new Array<GraczNew>();
    graczecs2 = new Array<GraczNew>();

   Add(){
    console.log(this.imie);
    if(this.imie == "" || this.nazwisko == "" || this.nick == "" || this.game == "")
    {
      alert("Wszystkie pola muszą być wypełnione");
    }else
    {
      switch(this.game){
        case "lol":
  
          if(this.graczelol.length == 5)
          {
            alert("Lol ma 5 graczy");
            return;
          }
          else
          {
            this.graczelol.push(new GraczNew(this.id, this.imie, this.nazwisko, this.nick, this.game));
          }
          this.imie,this.nazwisko,this.nick,this.game = null;
          break;
        case "val":
          if(this.graczeval.length == 5)
          {
            alert("valorant ma 5 graczy");
            return;
          }else
          {
            
            this.graczeval.push(new GraczNew(this.id, this.imie, this.nazwisko, this.nick, this.game));
            this.imie,this.nazwisko,this.nick,this.game = null;
            break;
          }
        case "cs2":
          if(this.graczecs2.length == 5)
          {
            alert("CS2 ma 5 graczy");
            return;
          }else
          { 
            
            this.graczecs2.push(new GraczNew(this.id, this.imie, this.nazwisko, this.nick, this.game));
          }
          this.imie,this.nazwisko,this.nick,this.game = null;
          break;
      }
    }
    
   }
}
