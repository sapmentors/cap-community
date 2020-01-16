using media as db from '../db/data-model';

service MediaService {
  entity Pictures as projection on db.Pictures;
}