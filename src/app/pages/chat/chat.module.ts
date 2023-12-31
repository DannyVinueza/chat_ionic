import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';
import { ChatBoxComponent } from 'src/app/components/chat-box/chat-box.component';
import { EmptyScreenComponent } from 'src/app/components/empty-screen/empty-screen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
  ],
  declarations: [ChatPage, ChatBoxComponent, EmptyScreenComponent]
})
export class ChatPageModule { }
