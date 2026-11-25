import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { AppPageBase } from '../../app-page.base';
@Component({ selector: 'app-admin-page', standalone: true, imports: [CommonModule, FormsModule, HttpClientModule, RouterLink], templateUrl: './admin-page.html' })
export class AdminPageComponent extends AppPageBase {
  constructor(http: HttpClient) { super(http); }
}
