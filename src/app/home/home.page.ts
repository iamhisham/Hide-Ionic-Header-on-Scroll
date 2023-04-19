import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  @ViewChild("header") header: HTMLElement;
  details = ['welcome', 'jack', 'joe doe', 'welcome', 'jack', 'joe doe', 'welcome', 'jack', 'joe doe', 'welcome', 'jack', 'joe doe', 'welcome', 'jack', 'joe doe', 'welcome', 'jack', 'joe doe', 'welcome', 'jack', 'joe doe', 'welcome', 'jack', 'joe doe', 'welcome', 'jack', 'joe doe', 'welcome', 'jack', 'joe doe', 'welcome', 'jack', 'joe doe', 'welcome', 'jack', 'joe doe'];

  constructor(public element: ElementRef,
    public renderer: Renderer2) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.renderer.setStyle(this.header['el'], 'webkitTransition', 'top 700ms');
  }

  onContentScroll(event: any) {
    if (event.detail.scrollTop >= 50) {
      this.renderer.setStyle(this.header['el'], 'top', '-76px');
    } else {
      this.renderer.setStyle(this.header['el'], 'top', '0px');
    }
  }

}
