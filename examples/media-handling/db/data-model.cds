namespace media;

entity Pictures {
  key ID : UUID;
  @Core.MediaType: mediatype
  content : LargeBinary;
  @Core.IsMediaType : true
  mediatype : String;
}