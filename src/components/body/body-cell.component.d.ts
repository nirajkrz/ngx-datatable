import { EventEmitter, ElementRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { SortDirection } from '../../types';
import { TableColumn } from '../../types/table-column.type';
export declare class DataTableBodyCellComponent implements OnDestroy {
    row: any;
    column: TableColumn;
    rowHeight: number;
    isSelected: boolean;
    sorts: any[];
    activate: EventEmitter<any>;
    cellTemplate: ViewContainerRef;
    readonly columnCssClasses: any;
    readonly width: number;
    readonly height: string | number;
    readonly value: any;
    sortDir: SortDirection;
    element: any;
    _sorts: any[];
    isFocused: boolean;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
    onFocus(): void;
    onBlur(): void;
    onClick(event: MouseEvent): void;
    onDblClick(event: MouseEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    onCheckboxChange(event: any): void;
    calcSortDir(sorts: any[]): any;
}
