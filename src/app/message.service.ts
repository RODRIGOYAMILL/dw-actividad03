import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = []; // Lista de mensajes

  add(message: string) {
    this.messages.push(message); // Agregar un nuevo mensaje a la lista
  }

  clear() {
    this.messages = []; // Limpiar la lista de mensajes
  }
}