using { my.bookshop } from '../db/data-model';
//using { my.bookshop, sap.common } from '../db/data-model';

service CatalogService {
  entity Books as projection on bookshop.Books;
  entity Chapters as projection on bookshop.Chapters;
}