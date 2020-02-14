import { Component, OnInit } from '@angular/core';
import { Subject }           from 'rxjs';
import { Table }             from 'src/app/models/table.model';
import { FormControl }       from '@angular/forms';
import { Router }            from '@angular/router';
import { ViewportScroller }  from '@angular/common';
import { AccordionHelper }   from '../../Helper/Accordion.helper';
import { SearchFilter }      from './filter/search-filter';
import { TablesService }     from 'src/app/services/tables.service';

@Component({
  selector   : 'app-list-tables',
  templateUrl: './list-tables.component.html',
  styleUrls  : ['./list-tables.component.css'],
  providers  : [
    AccordionHelper,
    SearchFilter
  ]
})
export class ListTablesComponent implements OnInit {

  public tables$: Subject<Table[]> = new Subject<Table[]>();
  public allTables: Table[]        = [];
  public search                    = new FormControl('');
  public checkTable                = new FormControl(true);
  public checkColumn               = new FormControl(true);

  constructor(
    public  router          : Router,
    private viewportScroller: ViewportScroller,
    public  accordionHelper : AccordionHelper,
    public  searchFilter    : SearchFilter,
    public  tablesService   : TablesService
  ) { }

  ngOnInit() {
    this.tablesService.getTables().subscribe(this._firstLoad.bind(this));
    this.search.valueChanges.subscribe(this._search.bind(this));
    this.checkTable.valueChanges.subscribe(value => this._search(this.search.value));
    this.checkColumn.valueChanges.subscribe(value => this._search(this.search.value));
  }

  private _firstLoad(tables) {
    this.allTables = tables;
    this.tables$.next(this.allTables);
  }

  private _search(value: string) {
    if (value.length <= 0) return this.tables$.next(this.allTables);
    this.tables$.next(this.allTables.filter(table => this.searchFilter.filtrar(table, value, this.checkTable.value, this.checkColumn.value)));
  }

  public GoToTable(elementId: string): void {
    this.accordionHelper.OpenAccordion(Number(elementId));
    this.viewportScroller.scrollToAnchor(elementId);
    var             currentPosition = this.viewportScroller.getScrollPosition();
    currentPosition[1]              = currentPosition[1] - 100;
    this.viewportScroller.scrollToPosition(currentPosition);
  }

  public GetDescription(id: number) {
    return this.allTables.find(t => t.id == id).description;
  }

}