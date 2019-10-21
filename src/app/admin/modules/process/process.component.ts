import { Component, OnInit, ViewChild } from '@angular/core';
import { ProcessService } from '../../_services';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioDatalist } from '../../data/schema';
import { ProcessModalComponent } from './process-modal/process-modal.component';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  isActive: boolean = false;
  showLoadMore: boolean = true;

  constructor(public processService: ProcessService, public dialog: MatDialog) { }

  ngOnInit() {
    this.processService.getList(); 

  }
  openDialog() {

    const dialogRef = this.dialog.open(ProcessModalComponent, {
        width: '50%', height: '500px',
        data: {
          action: 'add',
          details: null 
        },
        disableClose: false
      });

    dialogRef.afterClosed().subscribe(result => {
      this.processService.getList(); 
    });
  
  }

  onUpdate(data){
    const dialogRef = this.dialog.open(ProcessModalComponent, {
        width: '50%', height: '500px',
        data: {
          action: 'update',
          details: data 
        },
        disableClose: false
      });

    dialogRef.afterClosed().subscribe(result => {
      this.processService.getList(); 

    }); 
  }

  onVisibility(id: number) {
    this.processService.visibility(id).subscribe(res => {
      this.processService.getList(); 
    })
  }
}
