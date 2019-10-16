using demo from '../db/schema';

service Main {
  entity Headers as projection on demo.Headers;
  entity Items as projection on demo.Items;
}
