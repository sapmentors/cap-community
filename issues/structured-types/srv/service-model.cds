using cap.com.st as st from '../db/data-model';

service StructuredTypes {
    entity Equipments as projection on st.Equipments;
    entity Divers as projection on st.Divers;
}