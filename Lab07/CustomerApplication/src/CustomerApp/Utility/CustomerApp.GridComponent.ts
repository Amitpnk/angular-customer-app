import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'grid-ui',
    templateUrl: './CustomerApp.GridView.html'
})

export class GridComponent {

    gridColumns: Array<Object> = new Array<Object>();
    gridData: Array<Object> = new Array<Object>();


    @Input('grid-columns')
    set setGridColumns(grdColumn: Array<Object>) {
        this.gridColumns = grdColumn;
    }

    @Input('grid-data')
    set setGridData(grdData: Array<Object>) {
        this.gridData = grdData;
    }

    // tslint:disable-next-line: no-output-rename
    @Output('grid-selected')
    eventEmitter: EventEmitter<Object> = new EventEmitter<Object>();
    SelectedGrid(selected: Object) {
        this.eventEmitter.emit(selected);
    }

}

