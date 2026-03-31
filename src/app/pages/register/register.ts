import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html'
})
export class RegisterComponent {

  user = { username: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.user).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
