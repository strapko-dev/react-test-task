import React from "react";
import { Permission } from "../../../models/interfaces";
import MultiSelect from "../../common/MultiSelect/MultiSelect";

interface PermissionsSelectProps {
  permissions: Permission[];
  setPermissions: React.Dispatch<React.SetStateAction<Permission[]>>;
}

const options = [
  {
    value: "Moderation",
    label: "Moderation",
  },
  { value: "Blog", label: "Blog" },
  { value: "Technical support", label: "Technical support" },
  { value: "Customer appeal", label: "Customer appeal" },
  { value: "Analytics", label: "Analytics" },
  { value: "Stock", label: "Stock" },
];

const PermissionsSelect = ({
  permissions,
  setPermissions,
}: PermissionsSelectProps) => {
  return (
    <MultiSelect
      value={permissions as any}
      changeValue={setPermissions as any}
      placeholder="Choose Permissions"
      options={options}
    />
  );
};

export default PermissionsSelect;
