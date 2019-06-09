import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'grid-ui',
    templateUrl: './CustomerApp.GridView.html'
})

export class GridComponent {

    gridColumns: Array<object> = new Array<object>();
    gridData: Array<object> = new Array<object>();


    @Input('grid-columns')
    set setGridColumns(grdColumn: Array<object>) {
        this.gridColumns = grdColumn;
    }

    @Input('grid-data')
    set setGridData(grdData: Array<object>) {
        this.gridData = grdData;
    }

    // tslint:disable-next-line: no-output-rename
    @Output('grid-selected')
    eventEmitter: EventEmitter<object> = new EventEmitter<object>();
    SelectedGrid(selected: object) {
        this.eventEmitter.emit(selected);
    }

    constructor() {
        console.log('Constructor fired'); // 1
    }

    ngOnInit() {
        console.log('On init'); // 2
    }

    ngAfterContentInit() {
        console.log('After content init'); //3
    }

    ngAfterViewInit() {
        console.log('After view init'); //4
    }
    ngDoCheck() {
        console.log('Do Check');
    }
    ngAfterContentChecked() {
        console.log('After content Checked');
    }
    ngAfterViewChecked() {
        console.log('After View  Checked');
    }
    ngOnChanges() {
        console.log('On changes fired');
    }
}

