// tslint:disable:max-line-length
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FindingTagAddDialogComponent } from '../../../../app/manager-view/filter/finding/finding-tags/dialog/finding-tag-add-dialog/finding-tag-add-dialog.component';
import { TagService } from '../../../../app/services/data-services/tag.service';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('FindingTagAddDialogComponent', () => {
  let component: FindingTagAddDialogComponent;
  let fixture: ComponentFixture<FindingTagAddDialogComponent>;
  beforeEach(async(() => {
    FindingTagAddDialogComponent
    TestBed.configureTestingModule({
      declarations: [FindingTagAddDialogComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
    TestBed.overrideComponent(FindingTagAddDialogComponent, {
      set: {
        providers: [
          { provide: TagService, useClass: MockTagService }
        ]
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindingTagAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create FindingTagAddDialogComponent', () => {
    expect(component).toBeTruthy();
  });
});

class MockTagService {
  getAllAvailableForFinding(count: number): Observable<any> {
    let toReturn: Array<any> = [];
    return Observable.of([]);
  };
}
