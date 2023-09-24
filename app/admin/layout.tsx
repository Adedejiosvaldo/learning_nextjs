import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex justify-between">
      <aside className="bg-slate-200 p-5 mr-5">Admin SideBAr</aside>
      <div className="">{children}</div>
    </div>
  );
};

export default AdminLayout;
