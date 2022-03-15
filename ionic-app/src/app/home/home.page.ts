import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  profile = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
  
  ) { }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  async volunteertabs() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.router.navigateByUrl('/volunteertabs', { replaceUrl: true });
    await loading.dismiss();
  }
  async distresstabs() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.router.navigateByUrl('/distresstabs', { replaceUrl: true });
    await loading.dismiss();
  }

  ngOnInit() {
  }

}
