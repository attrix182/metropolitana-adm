import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp({
          apiKey: 'AIzaSyDgxbYprqi2dGaBFhX99HTsS2kgaUHaBDY',
          authDomain: 'admin-territorio.firebaseapp.com',
          projectId: 'admin-territorio',
          storageBucket: 'admin-territorio.appspot.com',
          messagingSenderId: '898741641283',
          appId: '1:898741641283:web:7e8963feaed579d48574f6',
          measurementId: 'G-YRJ9K6Z931'
        })
      ]
    });
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
