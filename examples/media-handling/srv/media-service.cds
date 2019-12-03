using media as db from '../db/data-model';

service MediaService {
  entity Pictures as projection on db.Pictures;
  entity Other as projection on db.Other;
}