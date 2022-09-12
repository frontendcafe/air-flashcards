import React, { useState } from "react";
import CollectionForm from "./CollectionForm";
import CardForm from "@/modules/Cards/components/CardForm";

const CollectionFormsView = () => {
  // si no tiene estado crea una nueva coleccion
  // si recibe estado deberia actualizar una coleccion

  return (
    <div>
      <CollectionForm />
    </div>
  );
};

export default CollectionFormsView;
