import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';

  listTask = [
    'Jantar as 6h Am',
    'Aulas de PDS 8h as 10h Am',
  ];

  onAlertView(UpdateValue: {current: number, addedNew: number}): void {
    let messager = ""
    if(UpdateValue.addedNew === 1) messager = `Novo TO-DO adiconado sua lista! 😍`;
    if(UpdateValue.current === 0) messager = `Não há TO-DO para sua lista! 😔`;
    if(UpdateValue.current > 1) messager = `Olá, foram adicinados ${UpdateValue.current} TO-DO a sua lista! 📑`;
    if(UpdateValue.current >= 10 && UpdateValue.addedNew === 0) messager = `Olá, Sua lista está lotada 😨, atingiu o limite maximo de ${UpdateValue.current} TO-DO 📑`;
    alert(messager);
  }
}
