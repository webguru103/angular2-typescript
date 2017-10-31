// tslint:disable:max-line-length
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FindingsDataTableService } from '../../../../app/services/data-services/findings-data-table.service';
import { ImageService } from '../../../../app/services/data-services/image.service';
import { FindingimageComponent } from '../../../../app/manager-view/filter/finding/finding-image/finding-image.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('FindingimageComponent', () => {
  let component: FindingimageComponent;
  let fixture: ComponentFixture<FindingimageComponent>;
  beforeEach(async(() => {
    FindingimageComponent
    TestBed.configureTestingModule({
      declarations: [FindingimageComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: FindingsDataTableService }
      ]
    }).compileComponents();
    TestBed.overrideComponent(FindingimageComponent, {
      set: {
        providers: [
          { provide: ImageService, useClass: MockImageService }
        ]
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindingimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create FindingimageComponent', () => {
    expect(component).toBeTruthy();
  });
});

class MockImageService {
  getImageForDownload(count: number): Observable<any> {
    let toReturn: Array<any> = [];
    return Observable.of([]);
  };
}
