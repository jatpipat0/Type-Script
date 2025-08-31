// Employee interface
interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}

// สร้าง array ของพนักงานอย่างน้อย 3 คน
let employees: Employee[] = [
  { id: 1, name: "Alice", position: "Manager", salary: 50000 },
  { id: 2, name: "Bob", position: "Developer", salary: 40000 },
  { id: 3, name: "Charlie", position: "Tester", salary: 30000 }
];

// ฟังก์ชันค้นหาพนักงานตามชื่อ
function findEmployeeByName(name: string): Employee | undefined {
  return employees.find(emp => emp.name.toLowerCase() === name.toLowerCase());
}

// แสดงพนักงานทั้งหมด
console.log("All Employees:");
employees.forEach(emp => console.log(emp));

// ค้นหา Bob
let result = findEmployeeByName("Bob");
if (result) {
  console.log("Found:", result);
} else {
  console.log("Employee not found");
}
