import { TestBed } from '@angular/core/testing';
import { RequesthttpService } from './requesthttp.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';


class Myservice extends RequesthttpService {
 response = [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret"
  }];
  override getUsers(){
    return of(this.response);
  }
}

describe('RequesthttpService', () => {
  let service: RequesthttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: RequesthttpService,
        useClass: Myservice
      }]
    });
    service = TestBed.inject(RequesthttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve realizar chamada http', () => {
    const response = [{
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret"
    }];
    service.getUsers().subscribe(res => {
      expect(res).toEqual(response)
    })
  });

});
