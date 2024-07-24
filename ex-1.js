function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < customers.length; i++) {
    for (let j = 0; j < customers.length - i - 1; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  return customers;
}

let customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];

let result = sortCustomerName(customers);

console.log(result);

// ตอบคำถามตรงนี้จ้า
//BigO = O n^2
