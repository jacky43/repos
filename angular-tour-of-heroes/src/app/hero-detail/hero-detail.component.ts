import {Component, Input} from '@angular/core';
import {NgIf, UpperCasePipe, NgFor} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from '../heroes/hero';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ResultatTB } from './table';
import { JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, NgIf, UpperCasePipe, MatPaginatorModule,
    MatTableModule, MatTooltipModule,NgFor, JsonPipe],
})
export class HeroDetailComponent {
  @Input() hero?: Hero;

  constructor() {}

  ngOnInit(): void {

  }

}

