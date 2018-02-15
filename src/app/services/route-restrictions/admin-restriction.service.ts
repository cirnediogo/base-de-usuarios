import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AdminRestrictionService {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.isAdmin()) {
      return true;
    } else {
      this.router.navigateByUrl('/usuarios');
      return false;
    }
  }

}
