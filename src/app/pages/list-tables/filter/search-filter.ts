import { Table } from 'src/app/models/table.model';

export class SearchFilter {

    public filtrar(table: Table, value: string, checkTable: boolean, checkColumn: boolean) {
        return (this._searchTable(table, value) && checkTable) || (this._searchColumn(table, value) && checkColumn);
    }

    private _searchTable(table: Table, value: string): boolean {
        return this._normalizeString(table.id.toString()).includes(this._normalizeString(value))
            || this._normalizeString(table.name).includes(this._normalizeString(value))
            || this._normalizeString(table.description).includes(this._normalizeString(value))
    }

    private _searchColumn(table: Table, value: string): boolean {
        return table.columns.filter(column =>
            this._normalizeString(column.name).includes(this._normalizeString(value))
            || this._normalizeString(column.description).includes(this._normalizeString(value))
            || this._normalizeString(column.type).includes(this._normalizeString(value))
        ).length > 0;
    }

    private _normalizeString(value: string) {
        return value.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

}