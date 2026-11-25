import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { AppPageBase } from '../../app-page.base';
@Component({ selector: 'app-home-page', standalone: true, imports: [CommonModule, FormsModule, HttpClientModule, RouterLink], templateUrl: './home-page.html' })
export class HomePageComponent extends AppPageBase {
  constructor(http: HttpClient) { super(http); }
}
