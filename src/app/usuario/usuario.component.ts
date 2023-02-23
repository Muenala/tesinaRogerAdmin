import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements AfterViewInit {
  dataSource:any = []
  constructor(private http: HttpClient) { 
    this.http
    .get("https://34.205.54.79/api/usuario/", {}).subscribe((res:any)=>{
    
      this.dataSource = new MatTableDataSource<any>(res);
      this.dataSource.paginator = this.paginator;
    })
  }
  displayedColumns: string[] = ['nombres', 'correo_usuario', 'lenguaGrabacion','lenguaMadre', 'ciudad', 
          'nota','edad','genero'];
        
 

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}



