import { Component, OnInit } from '@angular/core';
import { openDb } from 'idb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public user: IUser;
  private dbInstance;
  /**
   * idb.open(name, version, upgradeCallback)
   * To ensure database integrity, object stores can only be created and removed in the callback function in idb.open.
   * The callback receives an instance of UpgradeDB, a special object in the IDB Promised library that is used to create object stores
   */
  ngOnInit(): void {
    if (!('indexedDB' in window)) {
      console.log('This browser doesn\'t support IndexedDB');
      return;
    }

    this.dbInstance = openDb('demo-indexdb', 1, (upgradeDb) => {
      console.log('making a new object store');

      if (!upgradeDb.objectStoreNames.contains('people')) {
        upgradeDb.createObjectStore('people', {keyPath: 'id', autoIncrement: true});
      }
    });
  }

  saveData() {
    this.dbInstance.then((db) => {
      const tx = db.transaction('people', 'readwrite');
      const store = tx.objectStore('people');
      const user: IUser = {
        name: 'Admin',
        email: 'admin@gmail.com',
        description: 'admin of HR department',
        created: new Date()
      };
      store.add(user);
      return tx.complete;
    }).then(() => {
      console.log('added item to the store');
    });
  }

  async getData() {
    const db = await this.dbInstance;
    return db.transaction('people').objectStore('people').get(1).then(val => this.user = val);
  }

  async updateData(key: any) {
    const db = await this.dbInstance;
    const tx = db.transaction('people', 'readwrite');
    const user = {
      id: key,
      name: 'Admin1',
      email: 'admin1@gmail.com',
      description: 'admin1 of HR department',
      created: new Date().getTime()
    };
    tx.objectStore('people').put(user);
    return tx.complete;
  }

  getAll() {
    this.dbInstance.then((db) => {
      const tx = db.transaction('people', 'readonly');
      const store = tx.objectStore('people');
      return store.getAll();
    }).then((items) => {
      console.log('Items by name:', items);
    });
  }

  async delete(key: any) {
    const db = await this.dbInstance;
    const tx = db.transaction('people', 'readwrite');
    tx.objectStore('people').delete(key);
    return tx.complete;
  }
}


interface IUser {
  id?: number;
  name: string;
  email: string;
  description: string;
  created: Date;
}
