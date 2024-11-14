"use client";

import React from "react";
import {
  CiCircleCheck,
  CiCircleRemove,
  CiInboxIn,
  CiInboxOut,
  CiSearch,
  CiTrash,
} from "react-icons/ci";

type iconProps = {
  type: string;
};

export default function Icon({ type }: iconProps) {
  const className = `w-8 h-8 fill-white m-2`;
  switch (type) {
    case "entrada": {
      return <CiInboxIn className={className} />;
    }
    case "saida": {
      return <CiInboxOut className={className} />;
    }
    case "filtro": {
      return <CiSearch className={className} />;
    }
    case "salvar": {
      return <CiCircleCheck className={className} />;
    }
    case "deletar": {
      return <CiTrash className={className} />;
    }
    case "cancelar": {
      return <CiCircleRemove className={className} />;
    }
  }
}
