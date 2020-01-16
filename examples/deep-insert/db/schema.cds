namespace demo;
using { cuid, managed } from '@sap/cds/common';

entity Headers : cuid, managed {
	identifier : String;
	items      : Composition of many Items on items.parent = $self;
}

entity Items : cuid {
	parent : Association to Headers;
	data   : String;
}
