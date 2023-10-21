// Question 1: Manipulating array using Map and Filter and Reduce

const customers = [
    { customerID: 1, customerName: 'John Doe', totalBillingAmount: 2500 },
    { customerID: 2, customerName: 'Jane Doe', totalBillingAmount: 3500 },
    { customerID: 3, customerName: 'Bob Smith', totalBillingAmount: 4000 },
    { customerID: 4, customerName: 'Alice Johnson', totalBillingAmount: 2800 },
  ];
  
  const filteredCustomers = customers
    .filter(customer => customer.totalBillingAmount > 3000)
    .map(customer => {
      const { customerName, totalBillingAmount } = customer;
      return { customerName, totalBillingAmount };
    });
  
  const totalBillingAmountOfSelectedCustomers = filteredCustomers.reduce((acc, customer) => acc + customer.totalBillingAmount, 0);
  
  console.log('Selected Customers:');
  filteredCustomers.forEach(customer => {
    console.log(`Name: ${customer.customerName}, Total Billing Amount: Rs. ${customer.totalBillingAmount}`);
  });
  
  console.log(`Total Billing Amount of Selected Customers: Rs. ${totalBillingAmountOfSelectedCustomers}`);
  