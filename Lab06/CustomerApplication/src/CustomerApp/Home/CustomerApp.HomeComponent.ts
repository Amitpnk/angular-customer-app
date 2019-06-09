import { Component } from '@angular/core';
import { ILogger, BaseLogger } from '../Utility/CustomerApp.Logger';
@Component({
  // selector: 'app-root',
  templateUrl: './CustomerApp.HomeView.html',
})
export class HomeComponent {

  // logObj: any;

  constructor(logger: BaseLogger) {
    // this.logObj = logger;
    logger.Log();
  }

}
