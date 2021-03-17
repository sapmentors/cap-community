using { cuid, managed } from '@sap/cds/common';

namespace media;

entity Pictures: cuid, managed {
  @Core.MediaType: mediatype
  content : LargeBinary;
  @Core.IsMediaType : true
  mediatype : String;
}