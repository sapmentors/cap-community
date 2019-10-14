namespace cap.com.st;

type Suite : {
    formfactor : String(6) enum {
        kid;
        female;
        male
    };
}

entity Equipments {
    key ID    : UUID @odata.Type : 'Edm.String';
        suite : Suite;
        diver : Association to Divers;
}

entity Divers {
    key ID              : UUID @odata.Type : 'Edm.String';
        name            : String;
        equipmentToOne  : Association to one Equipments;
        equipmentToMany : Association to many Equipments on equipmentToMany.diver=$self;
}