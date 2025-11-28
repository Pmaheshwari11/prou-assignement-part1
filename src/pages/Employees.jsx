import { useMemo, useState } from "react";
import EmployeesHeader from "../components/employees/EmployeeHeader";
import EmployeesSearch from "../components/employees/EmployeeSearch";
import EmployeesFilter from "../components/employees/EmployeeFilter";
import EmployeesGrid from "../components/employees/EmployeeGrid";
import employeesData from "../data/employees.json";

export default function Employees() {
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("");

  const filteredEmployees = useMemo(() => {
    return employeesData.filter((emp) => {
      const matchesSearch =
        emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.role.toLowerCase().includes(search.toLowerCase());

      const matchesDept = !selectedDept || emp.department === selectedDept;

      return matchesSearch && matchesDept;
    });
  }, [search, selectedDept]);

  return (
    <div className="p-6 lg:p-8 dark:bg-gray-900 min-h-screen">
      <EmployeesHeader
        total={employeesData.length}
        visible={filteredEmployees.length}
      />

      <div className="mb-8 flex flex-col lg:flex-row gap-4">
        <EmployeesSearch value={search} onChange={setSearch} />
        <EmployeesFilter value={selectedDept} onChange={setSelectedDept} />
      </div>

      <EmployeesGrid employees={filteredEmployees} />
    </div>
  );
}
