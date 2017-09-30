import { Component, ReflectiveInjector, Inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoComponent implements OnInit {
  userName: string;
  userService: UserService;

  constructor(@Inject('API_URL') apiUrl: string) {

    console.log(apiUrl); // Possible to inject also strings


    // MANUAL WAY BELOW, could be done with injecting service into constructor

    // Create an _injector_ and ask for it to resolve and create a UserService
    const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);

    // use the injector to **get the instance** of the UserService
    this.userService = injector.get(UserService);

    // Above could be accomplished with adding the service as a provider
    // and injecting it in the constructor as 'private'

  }

  ngOnInit() {
    
  }

  signIn(): void {
    this.userService.setUser({
      name: 'Nate Murray'
    });

    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName);
  }

}
