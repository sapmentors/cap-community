using demo from '../db/schema';

service Main {
  entity Head as projection on demo.Heads;
  entity Node1 as projection on demo.Nodes1;
  entity Node2 as projection on demo.Nodes2;
  entity Node3 as projection on demo.Nodes3;
  entity Node4 as projection on demo.Nodes4;
  entity Node5 as projection on demo.Nodes5;
}
