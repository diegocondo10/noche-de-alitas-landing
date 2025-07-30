"use client";

import { salsas } from "@/constants/data";
import { MenuItem } from "@/types/data.type";
import { useEffect, useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import Button from "./Buttons/Button";

interface ComboSauceModalProps {
  combo: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (sauces: string[]) => void;
}

export default function ComboSauceModal({
  combo,
  isOpen,
  onClose,
  onConfirm,
}: ComboSauceModalProps) {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      setSelected([]);
    }
  }, [isOpen]);

  if (!isOpen || !combo) return null;

  const max = combo.sauceCount ?? 0;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50'>
      <div className='bg-slate-800 rounded-lg w-full max-w-md border-2 border-yellow-400 shadow-2xl p-6'>
        <h3 className='text-xl font-bold text-yellow-400 mb-2'>Escoge tus salsas</h3>
        <p className='text-orange-400 mb-4'>Puedes elegir {max} salsa{max > 1 ? "s" : ""}</p>
        <MultiSelect
          value={selected}
          options={salsas}
          onChange={(e) => setSelected(e.value)}
          selectionLimit={max}
          display='chip'
          className='w-full mb-4'
        />
        <div className='flex justify-end gap-2'>
          <Button
            onClick={onClose}
            className='bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-md'
            label='Cancelar'
          />
          <Button
            onClick={() => onConfirm(selected)}
            disabled={selected.length !== max}
            className='bg-green-500 hover:bg-green-600 disabled:bg-gray-500 text-white px-4 py-2 rounded-md'
            label='Agregar'
          />
        </div>
      </div>
    </div>
  );
}
