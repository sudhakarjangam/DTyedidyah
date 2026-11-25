import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { AppPageBase } from '../../app-page.base';
@Component({ selector: 'app-blog-page', standalone: true, imports: [CommonModule, FormsModule, HttpClientModule, RouterLink], templateUrl: './blog-page.html' })
export class BlogPageComponent extends AppPageBase {
  constructor(http: HttpClient) { super(http); }
}
