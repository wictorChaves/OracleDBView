import { Injectable }       from '@angular/core';
import { Observable }       from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Table }            from '../models/table.model';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(public afs: AngularFirestore) { }

  public getTables(): Observable<Table[]> {
    return this.afs.collection<Table>('tables').valueChanges();
  }

}