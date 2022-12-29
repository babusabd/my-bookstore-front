import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/domain/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent {
  books:  Observable<Book[]>;
  constructor(private service: BooksService) {
    this.books = service.getAllbooks();
  }
}
