namespace media;

entity Pictures {
  key ID : UUID;
  @Core.MediaType: 'image/png'
  content : LargeBinary;
}