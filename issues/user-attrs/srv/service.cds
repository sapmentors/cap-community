using my.bookshop from '../db/schema';

service CatalogService @(
    requires: 'test_role'
) {
  
  entity Books @(
        readonly,
        restrict: [ { grant: ['READ'], where: '$user.author = author_ID' } ]
    ) as projection on bookshop.Books;

  entity Authors @(
        readonly,
        restrict: [ { grant: ['READ'], where: '$user.author = ID' } ]
    ) as select from bookshop.Authors;
}
