import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { AppPageBase } from '../../app-page.base';
@Component({ selector: 'app-blog-admin-page', standalone: true, imports: [CommonModule, FormsModule, RouterLink], templateUrl: './blog-admin-page.html' })
export class BlogAdminPageComponent extends AppPageBase {
  constructor(http: HttpClient) { super(http); }
}
