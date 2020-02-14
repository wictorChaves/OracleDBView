import { Column } from './column.model';

export interface Table {
    id         : number;
    name       : string;
    description: string;
    columns    : Column[];
}