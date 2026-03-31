import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  user = { username: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.user).subscribe((res: any) => {
      this.auth.saveToken(res.token);
      this.router.navigate(['/dashboard']);
    });
  }
}
