namespace my.bookshop;
//using { User, Country, managed } from '@sap/cds/common';

entity Books {
  key ID : Integer;
  title  : String;
  chapters : Composition of many Chapters on chapters.book = $self;
  stock  : Integer;
}

entity Chapters {
    key ID : Integer;
    book : Association to Books;
    number : Integer;
    name    : String;
}