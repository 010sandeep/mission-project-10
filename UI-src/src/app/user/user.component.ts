import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent extends BaseCtl{
  [x: string]: any;

  getKey = false;
  selected = null;
  fileToUpload: any=null;
  userForm: any = null;
  uploadForm: any;

    constructor(public locator: ServiceLocatorService, route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.USER, locator, route);
  }


onFileSelect(e: Event): void {
  const input = e.target as HTMLInputElement;

  if (input.files && input.files.length > 0) {
    this.fileToUpload = input.files[0];
    console.log('Selected file:', this.fileToUpload);
  }
}



  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }


  myFile() {
    console.log(this.form.data.id + 'after super.submit-----');
    this.onSubmitProfile(this.fileToUpload, this.userForm).subscribe(data => {

      console.log(this.fileToUpload);
    }, error => {
      console.log(error);
    });

  }

  onSubmitProfile(fileToUpload: File, userform: FormGroup) {
    const formData = new FormData();
    let phone = null;
    formData.append('file', fileToUpload);
    console.log(this.form.data.id + 'this id number ======');
    return this.httpClient.post("http://localhost:8080/User/profilePic/" + this.form.data.id, formData);
  }

}
