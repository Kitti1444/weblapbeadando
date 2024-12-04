document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculate").addEventListener("click", function () {
      // Adatok beolvasása
      const price = parseFloat(document.getElementById("price").value);
      const quantity = parseFloat(document.getElementById("quantity").value);
      const cost = parseFloat(document.getElementById("cost").value);
  
      // Validálás
      if (isNaN(price) || isNaN(quantity) || isNaN(cost) || price < 0 || quantity < 0 || cost < 0) {
        document.getElementById("profit").innerText = "Kérjük, adjon meg érvényes adatokat!";
        return;
      }
  
      // Profit kiszámítása
      const revenue = price * quantity; // Árbevétel (P * Q)
      const totalCost = cost * quantity; // Összköltség (MC * Q)
      const profit = revenue - totalCost; // Profit (Árbevétel - Összköltség)
  
      // Eredmény megjelenítése
      if (profit >= 0) {
        document.getElementById("profit").innerText = `Profit: ${profit.toLocaleString()} egység`;
      } else {
        document.getElementById("profit").innerText = `Veszteség: ${Math.abs(profit).toLocaleString()} egység`;
      }
    });
  });
  