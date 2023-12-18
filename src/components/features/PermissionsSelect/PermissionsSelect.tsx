import React from "react";
import { Permission } from "../../../models/interfaces";
import MultiSelect from "../../common/MultiSelect/MultiSelect";

interface PermissionsSelectProps {
  permissions: Permission[];
  setPermissions: React.Dispatch<React.SetStateAction<Permission[]>>;
}

const options = [
  {
    value: "Модерация объявлений",
    label: "Модерация объявлений",
  },
  { value: "Блог", label: "Блог" },
  { value: "Тех. поддержка", label: "Тех. поддержка" },
  { value: "Обращения клиентов", label: "Обращения клиентов" },
  { value: "Аналитика", label: "Аналитика" },
  { value: "Акции", label: "Акции" },
];

const PermissionsSelect = ({
  permissions,
  setPermissions,
}: PermissionsSelectProps) => {
  return (
    <MultiSelect
      value={permissions as any}
      changeValue={setPermissions as any}
      placeholder="Выберите права доступа"
      options={options}
    />
  );
};

export default PermissionsSelect;
