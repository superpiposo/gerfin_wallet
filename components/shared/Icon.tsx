"use client";

import React from "react";
import {
  CiCircleCheck,
  CiCircleRemove,
  CiEdit,
  CiInboxIn,
  CiInboxOut,
  CiSearch,
} from "react-icons/ci";

type iconProps = {
  type: string;
  size?: string;
  color?: string;
};

export default function Icon({ type, size, color }: iconProps) {
  const className = `${size === "small" ? "w-4 h-4 m-2" : "w-8 h-8 m-3"}
  ${color === "white" ? "fill-stone-600" : "fill-white"}`;
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
      return <CiEdit className={className} />;
    }
    case "cancelar": {
      return <CiCircleRemove className={className} />;
    }
  }
}
