import {
  Dropdown,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";
import { AutoDeskIcon } from "../../public/logo_desk.png"

interface Company {
  name: string;
  location: string;
  logo: React.ReactNode;
}

export const CompaniesDropdown = () => {
  const [company, setCompany] = useState<Company>({
    name: "App AutoDesk",
    location: "",
    logo: "",
  });
  return (
    <Dropdown
      classNames={{
        base: "w-full min-w-[260px]",
      }}
    >
      <DropdownTrigger className="cursor-pointer">
        <div className="flex items-center gap-2">
          {company.logo}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium m-0 text-default-900 -mb-4 whitespace-nowrap">
              {company.name}
            </h3>
            <span className="text-xs font-medium text-default-500">
              {company.location}
            </span>
          </div>
        </div>
      </DropdownTrigger>
      
    </Dropdown>
  );
};
