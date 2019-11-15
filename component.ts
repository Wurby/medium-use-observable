@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: '<h1>{{customer[0].name}} is your first customer.</h1>'
})
export class AppComponent {
  customers: Observable<any>;

  constructor(private readonly fbs: FirebaseService) {
    this.customers = this.fbs.getCustomers$();
  }
}
