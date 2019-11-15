export class FirebaseService {
  private customerCollection: AngularFirestoreCollection;

  customers$: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.customerCollection = db.collection('customers');
    this.customers$ = this.customerCollection.valueChanges();
  }
}
