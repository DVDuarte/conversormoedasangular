import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MoedasService } from '../../services/moedas.service';

export interface IMoedas {
  moeda: string;
  taxa: number;
}

export interface IMoedasResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: IMoedas[];
}


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss',
})
export class TabelaComponent implements AfterViewInit {
  displayedColumns: string[] = ['moeda', 'taxa'];
  dataSource: MatTableDataSource<IMoedas> = new MatTableDataSource<IMoedas>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private moedasService: MoedasService) {
  }
  

  ngAfterViewInit(): void {
    this.moedasService.listarMoedas().subscribe(
      {
        next: (res) => {
          this.dataSource = new MatTableDataSource(res.results);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
        },
        complete: () => {
          console.log("Completou");
        }
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

