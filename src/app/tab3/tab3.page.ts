import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  contactname="";
  contactnumber="";
  contacts: any = [];


  constructor(public alertCtrl: AlertController)  {}

  save() {
    let contact = {
      name: this.contactname,
      number: this.contactnumber

    }
    this.contacts.push(contact);
    console.log(this.contacts);
    this.clearField();

  }
  clearField() {
    this.contactname = "";
    this.contactnumber = "";
  }
  

  async delete(cont) {
    const confirm = await this.alertCtrl.create({
      header: 'Delete!',
      message: 'Are you sure you want to delete this contact?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: 'Delete',
          handler: () => {
            let index = this.contacts.indexOf(cont);
            if(index > -1){
              this.contacts.splice(index,1);
            }
        }
        }
      ]
    } );

    await confirm.present();
  }

}
