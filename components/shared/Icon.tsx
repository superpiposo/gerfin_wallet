"use client";

import React from "react";
import { BiSolidLogOutCircle } from "react-icons/bi";
import {
  CiCircleCheck,
  CiCircleRemove,
  CiSearch,
  CiWallet,
} from "react-icons/ci";
import { FaCaretDown, FaPlus } from "react-icons/fa";
import {
  GiMoon,
  GiPayMoney,
  GiReceiveMoney,
  GiSettingsKnobs,
  GiSun,
  GiTrashCan,
} from "react-icons/gi";
import { RiAccountCircleFill } from "react-icons/ri";

type iconProps = {
  type: string;
  size?: string;
  color?: string;
};

export default function Icon({ type, size, color }: iconProps) {
  const className = `${
    size === "small"
      ? "w-4 h-4 m-2"
      : size === "medium"
      ? "w-6 h-6 m-1"
      : "w-8 h-8 m-3"
  }
  ${
    color === "white"
      ? "fill-stone-600"
      : color === "red"
      ? "fill-red group-hover:fill-white"
      : color === "green"
      ? "fill-green group-hover:fill-white"
      : color === "blue"
      ? "fill-blue group-hover:fill-white"
      : "fill-white"
  }`;
  switch (type) {
    case "entrada": {
      return <GiReceiveMoney className={className} />;
    }
    case "saida": {
      return <GiPayMoney className={className} />;
    }
    case "filtro": {
      return <CiSearch className={className} />;
    }
    case "salvar": {
      return <CiCircleCheck className={className} />;
    }
    case "deletar": {
      return <GiTrashCan className={className} />;
    }
    case "cancelar": {
      return <CiCircleRemove className={className} />;
    }
    case "config": {
      return <GiSettingsKnobs className={className} />;
    }
    case "profile": {
      return <RiAccountCircleFill className={className} />;
    }
    case "moon": {
      return <GiMoon className={className} />;
    }
    case "sun": {
      return <GiSun className={className} />;
    }
    case "logout": {
      return <BiSolidLogOutCircle className={className} />;
    }
    case "carteira": {
      return <CiWallet className={className} />;
    }
    case "down": {
      return <FaCaretDown className={className} />;
    }
    case "mais": {
      return <FaPlus className={className} />;
    }
  }
}
