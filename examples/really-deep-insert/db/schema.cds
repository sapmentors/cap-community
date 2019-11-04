namespace demo;

using cuid from '@sap/cds/common';

entity Heads : cuid {
    name : String;
    node : Composition of one Nodes1 on node.parent = $self;
}

entity Nodes1 : cuid {
    parent : Association to Heads;
    name   : String;
    node   : Composition of one Nodes2 on node.parent = $self;
}

entity Nodes2 : cuid {
    parent : Association to Nodes1;
    name   : String;
    node   : Composition of one Nodes3 on node.parent = $self;
}

entity Nodes3 : cuid {
    parent : Association to Nodes2;
    name   : String;
    node   : Composition of one Nodes4 on node.parent = $self;
}

entity Nodes4 : cuid {
    parent : Association to Nodes3;
    name   : String;
    node   : Composition of one Nodes5 on node.parent = $self;
}

entity Nodes5 : cuid {
    parent : Association to Nodes4;
    name   : String;
}