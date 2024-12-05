import { Routes } from '@angular/router';
import { HomeComponent } from '@components/home/home.component';
import { SobreComponent } from '@components/sobre/sobre.component';
import { CadastroComponent } from '@components/cadastro/cadastro.component';
import { LoginComponent } from '@components/login/login.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
