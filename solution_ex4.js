const bookingReservation = {
  roomType: "Deluxe",
  roomPrice: 1500000,
  "check-in": "09:00",
  "guest-name": "Trần Minh Quang"
};

console.log("--- 1. TRUY CẬP THUỘC TÍNH TĨNH ---");

console.log("Room Type:", bookingReservation.roomType);
console.log("Room Price:", bookingReservation.roomPrice);

console.log("--- 2. TRUY CẬP QUA BIẾN ĐỘNG ---");

const priceKey = "roomPrice";

console.log("Sai với Dot Notation:", bookingReservation.priceKey);
console.log("Đúng với Bracket Notation:", bookingReservation[priceKey]);

console.log("--- 3. KEY CÓ DẤU GẠCH NGANG ---");

console.log("Check-in:", bookingReservation["check-in"]);
console.log("Guest Name:", bookingReservation["guest-name"]);

console.log("--- 4. DUYỆT BẰNG FOR...IN ---");

for (const key in bookingReservation) {
  console.log(key + ": " + bookingReservation[key]);
}

console.log("--- 5. SO SÁNH DOT VÀ BRACKET ---");

console.log("Dot Notation:");
console.log(bookingReservation.roomType);

console.log("Bracket Notation:");
console.log(bookingReservation["roomType"]);