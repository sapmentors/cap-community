using my.bookshop from '../db/schema';

service CatalogService {
  entity Books as projection on bookshop.Books;
  entity Authors as select from bookshop.Authors {
    *,
    null as numberOfBooks: Integer
  }
}
