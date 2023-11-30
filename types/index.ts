import { SetStateAction, Dispatch } from "react";
import { Selection } from "@nextui-org/react";

export interface Info {
  amount: number;
  date: string;
  metadata?: {
    name: string;
    type: string;
    email: string;
    product_name: string;
  };
  payment_reference: string;
  status: string;
  type: string;
}

export interface IShareProps {
  className?: string;
  setFilterOpen: Dispatch<SetStateAction<boolean>>;
  apply: (startDate: string, endDate: string, selectedType: Selection, selectedStatus: Selection) => void;
  setClearFilter: (filter: boolean) => void;
  clearFilter: boolean;
}

export interface Prop {
  setFilterOpen: Dispatch<SetStateAction<boolean>>;
  filterOpen: boolean;
}
