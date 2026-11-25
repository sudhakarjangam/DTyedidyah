import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page';
import { BlogPageComponent } from './pages/blog-page/blog-page';
import { BlogAdminPageComponent } from './pages/blog-admin-page/blog-admin-page';
import { AdminPageComponent } from './pages/admin-page/admin-page';
export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog/:slug', component: BlogPageComponent },
  { path: 'admin/blogs', component: BlogAdminPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: '**', redirectTo: '' }
];
