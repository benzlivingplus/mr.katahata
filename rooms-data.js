// ████████████████████████████████████████████████████████████████
// 📋 ROOMS-DATA.JS — ไฟล์กลาง แก้ที่นี่ที่เดียว
//    ข้อมูลนี้จะแสดงบน: index.html (cards) + slider ทุกห้อง
//
//    ⚠️  หลังแก้ไขไฟล์นี้ ต้อง upload ขึ้น GitHub ใหม่ทุกครั้ง
// ████████████████████████████████████████████████████████████████

const ROOMS_DATA = [

  // ── ROOM 1 ──────────────────────────────────────────────────────
  {
    file:        "room1.html",          // ชื่อไฟล์ HTML ของห้องนี้
    name:        "Room 1",              // ชื่อห้อง (notranslate)
    type:        "Condominium · Low Rise · Resale",
    price:       "3,900,000",           // ราคา (ไม่ต้องใส่ ฿)
    sqm:         "40",                  // ขนาด (ไม่ต้องใส่ ตร.ม.)
    pricePerSqm: "97,500",              // ราคา/ตร.ม. (ไม่ต้องใส่ ฿)
    bedBath:     "1/1",
    cover: "https://drive.google.com/thumbnail?id=1QjK_nPsXd0-Yye24kjeD0s35xnJCbDUI&sz=w1200",
    // ถ้า cover ว่าง ("") → card จะซ่อนรูปปก แต่ยังแสดง card
    // ถ้า price ว่าง ("") → card ทั้งใบจะซ่อนอัตโนมัติ
  },

  // ── ROOM 2 ──────────────────────────────────────────────────────
  {
    file:        "room2.html",
    name:        "Room 2",
    type:        "Condominium · Low Rise · Resale",
    price:       "4,900,000",                    // ← ว่าง = ซ่อน card
    sqm:         "60",
    pricePerSqm: "81,600",
    bedBath:     "2/1",
    cover:       "https://drive.google.com/thumbnail?id=1zTrGfByha2XsZSEYNW0SI9-Nk2Aaqebq&sz=w1200",
  },

  // ── ROOM 3 ──────────────────────────────────────────────────────
  {
    file:        "room3.html",
    name:        "Room 3",
    type:        "Condominium · Low Rise · Resale",
    price:       "4,390,000",
    sqm:         "47",
    pricePerSqm: "93,400",
    bedBath:     "2/1",    
    cover:       "https://drive.google.com/thumbnail?id=1iOhN31oCZQMbwmkoZe3piOGobTCSUoJx&sz=w1200",
  },

  // ── ROOM 4 ──────────────────────────────────────────────────────
  {
    file:        "room4.html",
    name:        "Room 4",
    type:        "Condominium · Hi Rise · Resale",
    price:       "3,990,000",
    sqm:         "38.5",
    pricePerSqm: "103,600",
    cover:       "https://drive.google.com/thumbnail?id=1kOHyG37GilebNoEsMNtBNxSUFvBc7XhV&sz=w1200",
  },

  // ── ROOM 5 ──────────────────────────────────────────────────────
  {
    file:        "room5.html",
    name:        "Room 5",
    type:        "Condominium · Hi Rise · Resale",
    price:       "3,200,000",
    sqm:         "30.48",
    pricePerSqm: "105,000",
    cover:       "https://drive.google.com/thumbnail?id=1NMxCH-wM7KyQxuylFBM-9OEgjMrAxOya&sz=w1200",
  },

  // ── ROOM 6 ──────────────────────────────────────────────────────
  {
    file:        "room6.html",
    name:        "Room 6",
    type:        "Condominium · Hi Rise · Resale",
    price:       "3,990,000",
    sqm:         "38.56",
    pricePerSqm: "103,600",
    cover:       "https://drive.google.com/thumbnail?id=1jyQZunbOUbR0e9cIgfTo_iUQrRZYcr4Q&sz=w1200",
  },

  // ── ROOM 7 ──────────────────────────────────────────────────────
  {
    file:        "room7.html",
    name:        "Room 7",
    type:        "Condominium · Bangkok · For Sale",
    price:       "",
    sqm:         "",
    pricePerSqm: "",
    cover:       "",
  },

  // ── ROOM 8 ──────────────────────────────────────────────────────
  {
    file:        "room8.html",
    name:        "Room 8",
    type:        "Condominium · Bangkok · For Sale",
    price:       "",
    sqm:         "",
    pricePerSqm: "",
    cover:       "",
  },

  // ── ROOM 9 ──────────────────────────────────────────────────────
  {
    file:        "room9.html",
    name:        "Room 9",
    type:        "Condominium · Bangkok · For Sale",
    price:       "",
    sqm:         "",
    pricePerSqm: "",
    cover:       "",
  },

  // ── ROOM 10 ─────────────────────────────────────────────────────
  {
    file:        "room10.html",
    name:        "Room 10",
    type:        "Condominium · Bangkok · For Sale",
    price:       "",
    sqm:         "",
    pricePerSqm: "",
    cover:       "",
  },

];
