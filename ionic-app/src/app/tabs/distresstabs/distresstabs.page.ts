import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distresstabs',
  templateUrl: './distresstabs.page.html',
  styleUrls: ['./distresstabs.page.scss'],
})

export class DistresstabsPage implements OnInit {

  constructor(
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }

}
