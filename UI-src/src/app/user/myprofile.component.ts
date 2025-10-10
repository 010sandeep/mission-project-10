import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
})
export class MyprofileComponent extends BaseCtl{
   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.USER, locator, route);
  }

  myProfile() {
    var _self = this;
    this.serviceLocator.httpService.post('http://localhost:8080/User/myProfile', this.form.data, function (res: any) {
      _self.form.message = '';
      _self.form.inputerror = {};
      if (res.success) {
        _self.form.message = res.result.message;
        _self.form.data.id = res.result.data;
      } else {
        _self.form.error = true;
        if (res.result.inputerror) {
          _self.form.inputerror = res.result.inputerror;
        }
        _self.form.message = res.result.message;
      }
    });
  }

}
