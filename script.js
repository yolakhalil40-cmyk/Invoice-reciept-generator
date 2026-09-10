```javascript
// Add a new item
function addItem() {

    const items = document.getElementById("items");

    const item = document.createElement("div");

    item.className = "item";

    item.innerHTML = `
        <input type="text" class="itemName" placeholder="Item / Service">

        <input type="number"
               class="quantity"
               placeholder="Qty"
               value="1">

        <input type="number"
               class="price"
               placeholder="Price">
    `;

    items.appendChild(item);
}


// Generate invoice
function generateInvoice() {

    // Business information
    const businessName =
        document.getElementById("businessName").value;

    const businessPhone =
        document.getElementById("businessPhone").value;

    const businessAddress =
        document.getElementById("businessAddress").value;

    const customerName =
        document.getElementById("customerName").value;


    // Display business information
    document.getElementById("displayBusiness").textContent =
        businessName || "Your Business";

    document.getElementById("displayPhone").textContent =
        businessPhone;

    document.getElementById("displayAddress").textContent =
        businessAddress;

    document.getElementById("displayCustomer").textContent =
        customerName || "Walk-in Customer";


    // Generate invoice number
    const invoiceNumber =
        "INV-" + Math.floor(10000 + Math.random() * 90000);

    document.getElementById("invoiceNumber").textContent =
        invoiceNumber;


    // Current date
    const today = new Date();

    document.getElementById("invoiceDate").textContent =
        today.toLocaleDateString();


    // Get items
    const itemNames =
        document.querySelectorAll(".itemName");

    const quantities =
        document.querySelectorAll(".quantity");

    const prices =
        document.querySelectorAll(".price");

    const invoiceItems =
        document.getElementById("invoiceItems");


    // Clear previous invoice items
    invoiceItems.innerHTML = "";


    let subtotal = 0;


    // Add each item to invoice
    for (let i = 0; i < itemNames.length; i++) {

        const name =
            itemNames[i].value || "Item";

        const quantity =
            Number(quantities[i].value) || 0;

        const price =
            Number(prices[i].value) || 0;


        const total =
            quantity * price;


        subtotal += total;


        const row =
            document.createElement("tr");


        row.innerHTML = `
            <td>${name}</td>
            <td>${quantity}</td>
            <td>₦${price.toLocaleString()}</td>
            <td>₦${total.toLocaleString()}</td>
        `;


        invoiceItems.appendChild(row);
    }


    // Amount paid
    const amountPaid =
        Number(
            document.getElementById("amountPaid").value
        ) || 0;


    // Calculate balance
    const balance =
        subtotal - amountPaid;


    // Display totals
    document.getElementById("subtotal").textContent =
        subtotal.toLocaleString();

    document.getElementById("paid").textContent =
        amountPaid.toLocaleString();

    document.getElementById("balance").textContent =
        balance.toLocaleString();
}
```

