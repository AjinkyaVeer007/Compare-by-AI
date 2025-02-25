const tvsBikeList = [
  // Early TVS Models
  { label: "TVS 50", value: "TVS 50" },
  { label: "TVS Champ", value: "TVS Champ" },
  { label: "TVS Max 100", value: "TVS Max 100" },
  { label: "TVS Samurai", value: "TVS Samurai" },
  { label: "TVS Shogun", value: "TVS Shogun" },
  { label: "TVS Shaolin", value: "TVS Shaolin" },

  // TVS Commuter Bikes
  { label: "TVS Star", value: "TVS Star" },
  { label: "TVS Star City", value: "TVS Star City" },
  { label: "TVS Star City Plus", value: "TVS Star City Plus" },
  { label: "TVS Radeon", value: "TVS Radeon" },
  { label: "TVS Sport", value: "TVS Sport" },

  // TVS Apache Series (Performance Bikes)
  { label: "TVS Apache RTR 160", value: "TVS Apache RTR 160" },
  { label: "TVS Apache RTR 160 4V", value: "TVS Apache RTR 160 4V" },
  { label: "TVS Apache RTR 180", value: "TVS Apache RTR 180" },
  { label: "TVS Apache RTR 180 ABS", value: "TVS Apache RTR 180 ABS" },
  { label: "TVS Apache RTR 200 4V", value: "TVS Apache RTR 200 4V" },
  { label: "TVS Apache RR 310", value: "TVS Apache RR 310" },

  // TVS Scooters
  { label: "TVS Scooty", value: "TVS Scooty" },
  { label: "TVS Scooty Pep+", value: "TVS Scooty Pep+" },
  { label: "TVS Scooty Streak", value: "TVS Scooty Streak" },
  { label: "TVS Scooty Zest 110", value: "TVS Scooty Zest 110" },
  { label: "TVS Jupiter", value: "TVS Jupiter" },
  { label: "TVS Jupiter ZX", value: "TVS Jupiter ZX" },
  { label: "TVS Jupiter Classic", value: "TVS Jupiter Classic" },
  { label: "TVS Wego", value: "TVS Wego" },
  { label: "TVS Ntorq 125", value: "TVS Ntorq 125" },

  // TVS Electric Scooters
  { label: "TVS iQube Electric", value: "TVS iQube Electric" },

  // TVS Adventure & Off-Road
  { label: "TVS XL 100", value: "TVS XL 100" },
  { label: "TVS XL Super", value: "TVS XL Super" },
  { label: "TVS X", value: "TVS X" }, // New premium electric scooter
];

const bajajBikeList = [
  // Early Bajaj Models
  { label: "Bajaj Chetak (2-Stroke)", value: "Bajaj Chetak (2-Stroke)" },
  { label: "Bajaj Super", value: "Bajaj Super" },
  { label: "Bajaj Priya", value: "Bajaj Priya" },
  { label: "Bajaj M80", value: "Bajaj M80" },
  { label: "Bajaj Boxer", value: "Bajaj Boxer" },
  { label: "Bajaj KB100", value: "Bajaj KB100" },
  { label: "Bajaj KB125", value: "Bajaj KB125" },
  { label: "Bajaj Caliber", value: "Bajaj Caliber" },
  { label: "Bajaj Wind 125", value: "Bajaj Wind 125" },

  // Bajaj Commuter Bikes
  { label: "Bajaj Platina 100", value: "Bajaj Platina 100" },
  { label: "Bajaj Platina 110", value: "Bajaj Platina 110" },
  { label: "Bajaj Platina 110 ABS", value: "Bajaj Platina 110 ABS" },
  { label: "Bajaj CT 100", value: "Bajaj CT 100" },
  { label: "Bajaj CT 110", value: "Bajaj CT 110" },
  { label: "Bajaj Discover 100", value: "Bajaj Discover 100" },
  { label: "Bajaj Discover 110", value: "Bajaj Discover 110" },
  { label: "Bajaj Discover 125", value: "Bajaj Discover 125" },
  { label: "Bajaj Discover 150", value: "Bajaj Discover 150" },

  // Bajaj Pulsar Series (Sports & Performance Bikes)
  { label: "Bajaj Pulsar 125", value: "Bajaj Pulsar 125" },
  { label: "Bajaj Pulsar 150", value: "Bajaj Pulsar 150" },
  { label: "Bajaj Pulsar NS125", value: "Bajaj Pulsar NS125" },
  { label: "Bajaj Pulsar NS160", value: "Bajaj Pulsar NS160" },
  { label: "Bajaj Pulsar NS200", value: "Bajaj Pulsar NS200" },
  { label: "Bajaj Pulsar 180", value: "Bajaj Pulsar 180" },
  { label: "Bajaj Pulsar 220F", value: "Bajaj Pulsar 220F" },
  { label: "Bajaj Pulsar RS200", value: "Bajaj Pulsar RS200" },
  { label: "Bajaj Pulsar N250", value: "Bajaj Pulsar N250" },
  { label: "Bajaj Pulsar F250", value: "Bajaj Pulsar F250" },

  // Bajaj Avenger Series (Cruisers)
  { label: "Bajaj Avenger Street 160", value: "Bajaj Avenger Street 160" },
  { label: "Bajaj Avenger Street 220", value: "Bajaj Avenger Street 220" },
  { label: "Bajaj Avenger Cruise 220", value: "Bajaj Avenger Cruise 220" },

  // Bajaj Dominar Series (Touring & Sports Touring)
  { label: "Bajaj Dominar 250", value: "Bajaj Dominar 250" },
  { label: "Bajaj Dominar 400", value: "Bajaj Dominar 400" },

  // Bajaj Electric Vehicles
  { label: "Bajaj Chetak Electric", value: "Bajaj Chetak Electric" },

  // Bajaj Adventure & Off-Road
  { label: "Bajaj Enduro SX", value: "Bajaj Enduro SX" },
];

const royalEnfieldBikeList = [
  // Classic Royal Enfield Models
  {
    label: "Royal Enfield Bullet 350 (Cast Iron)",
    value: "Royal Enfield Bullet 350 (Cast Iron)",
  },
  { label: "Royal Enfield Bullet 500", value: "Royal Enfield Bullet 500" },
  {
    label: "Royal Enfield Bullet Electra",
    value: "Royal Enfield Bullet Electra",
  },
  {
    label: "Royal Enfield Lightning 535",
    value: "Royal Enfield Lightning 535",
  },
  { label: "Royal Enfield Machismo", value: "Royal Enfield Machismo" },

  // Royal Enfield Classic Series
  { label: "Royal Enfield Classic 350", value: "Royal Enfield Classic 350" },
  { label: "Royal Enfield Classic 500", value: "Royal Enfield Classic 500" },

  // Royal Enfield Meteor Series
  { label: "Royal Enfield Meteor 350", value: "Royal Enfield Meteor 350" },

  // Royal Enfield Thunderbird Series
  {
    label: "Royal Enfield Thunderbird 350",
    value: "Royal Enfield Thunderbird 350",
  },
  {
    label: "Royal Enfield Thunderbird 500",
    value: "Royal Enfield Thunderbird 500",
  },
  {
    label: "Royal Enfield Thunderbird X 350",
    value: "Royal Enfield Thunderbird X 350",
  },
  {
    label: "Royal Enfield Thunderbird X 500",
    value: "Royal Enfield Thunderbird X 500",
  },

  // Royal Enfield Interceptor & Continental GT Series (Twin-Cylinder)
  {
    label: "Royal Enfield Interceptor 650",
    value: "Royal Enfield Interceptor 650",
  },
  {
    label: "Royal Enfield Continental GT 650",
    value: "Royal Enfield Continental GT 650",
  },

  // Royal Enfield Adventure & Touring
  { label: "Royal Enfield Himalayan", value: "Royal Enfield Himalayan" },
  {
    label: "Royal Enfield Himalayan 450",
    value: "Royal Enfield Himalayan 450",
  },
  { label: "Royal Enfield Scram 411", value: "Royal Enfield Scram 411" },

  // Royal Enfield Electric (Upcoming)
  {
    label: "Royal Enfield Electric Motorcycle (Upcoming)",
    value: "Royal Enfield Electric Motorcycle (Upcoming)",
  },
];

const yamahaBikeList = [
  // Early Yamaha Models
  { label: "Yamaha RX100", value: "Yamaha RX100" },
  { label: "Yamaha RX135", value: "Yamaha RX135" },
  { label: "Yamaha RXZ", value: "Yamaha RXZ" },
  { label: "Yamaha RD350", value: "Yamaha RD350" },
  { label: "Yamaha Crux", value: "Yamaha Crux" },
  { label: "Yamaha Libero", value: "Yamaha Libero" },

  // Yamaha Commuter Bikes
  { label: "Yamaha YBR 110", value: "Yamaha YBR 110" },
  { label: "Yamaha YBR 125", value: "Yamaha YBR 125" },
  { label: "Yamaha Saluto", value: "Yamaha Saluto" },
  { label: "Yamaha SZ-RR", value: "Yamaha SZ-RR" },

  // Yamaha FZ Series (Street & Performance)
  { label: "Yamaha FZ 16", value: "Yamaha FZ 16" },
  { label: "Yamaha FZ-S", value: "Yamaha FZ-S" },
  { label: "Yamaha FZ-X", value: "Yamaha FZ-X" },
  { label: "Yamaha FZ FI V3", value: "Yamaha FZ FI V3" },
  { label: "Yamaha FZS FI V3", value: "Yamaha FZS FI V3" },
  { label: "Yamaha FZS 25", value: "Yamaha FZS 25" },

  // Yamaha R Series (SuperSport)
  { label: "Yamaha R15 V1", value: "Yamaha R15 V1" },
  { label: "Yamaha R15 V2", value: "Yamaha R15 V2" },
  { label: "Yamaha R15 V3", value: "Yamaha R15 V3" },
  { label: "Yamaha R15 V4", value: "Yamaha R15 V4" },
  { label: "Yamaha R3", value: "Yamaha R3" },

  // Yamaha MT Series (Naked Sports)
  { label: "Yamaha MT-15", value: "Yamaha MT-15" },
  { label: "Yamaha MT-03", value: "Yamaha MT-03" },
  { label: "Yamaha MT-07", value: "Yamaha MT-07" },
  { label: "Yamaha MT-09", value: "Yamaha MT-09" },

  // Yamaha Adventure & Touring
  { label: "Yamaha XTZ 125", value: "Yamaha XTZ 125" },
  { label: "Yamaha Tenere 700", value: "Yamaha Tenere 700" },

  // Yamaha Scooters
  { label: "Yamaha Ray Z", value: "Yamaha Ray Z" },
  { label: "Yamaha Ray ZR", value: "Yamaha Ray ZR" },
  { label: "Yamaha Fascino 125", value: "Yamaha Fascino 125" },
  { label: "Yamaha Aerox 155", value: "Yamaha Aerox 155" },

  // Yamaha Electric (Upcoming)
  {
    label: "Yamaha E01 Electric Scooter (Upcoming)",
    value: "Yamaha E01 Electric Scooter (Upcoming)",
  },
];

const hondaBikeList = [
  // Early Honda Models
  { label: "Honda CD 100", value: "Honda CD 100" },
  { label: "Honda CD 110 Dream", value: "Honda CD 110 Dream" },
  { label: "Honda CD Dawn", value: "Honda CD Dawn" },
  { label: "Honda CD Deluxe", value: "Honda CD Deluxe" },

  // Honda Commuter Bikes
  { label: "Honda Shine", value: "Honda Shine" },
  { label: "Honda Shine 125", value: "Honda Shine 125" },
  { label: "Honda SP 125", value: "Honda SP 125" },
  { label: "Honda Livo", value: "Honda Livo" },
  { label: "Honda Unicorn 150", value: "Honda Unicorn 150" },
  { label: "Honda Unicorn 160", value: "Honda Unicorn 160" },
  { label: "Honda CB Trigger", value: "Honda CB Trigger" },
  { label: "Honda CB Twister", value: "Honda CB Twister" },

  // Honda CB Series (Street & Performance)
  { label: "Honda CB Hornet 160R", value: "Honda CB Hornet 160R" },
  { label: "Honda CB200X", value: "Honda CB200X" },
  { label: "Honda CB300F", value: "Honda CB300F" },
  { label: "Honda CB300R", value: "Honda CB300R" },
  { label: "Honda CB500X", value: "Honda CB500X" },

  // Honda CBR Series (Sportbikes)
  { label: "Honda CBR 150R", value: "Honda CBR 150R" },
  { label: "Honda CBR 250R", value: "Honda CBR 250R" },
  { label: "Honda CBR 500R", value: "Honda CBR 500R" },
  { label: "Honda CBR 650R", value: "Honda CBR 650R" },
  {
    label: "Honda CBR 1000RR-R Fireblade",
    value: "Honda CBR 1000RR-R Fireblade",
  },

  // Honda Adventure & Touring
  { label: "Honda Africa Twin", value: "Honda Africa Twin" },
  { label: "Honda NX500", value: "Honda NX500" },

  // Honda Cruiser Bikes
  { label: "Honda H'ness CB350", value: "Honda H'ness CB350" },
  { label: "Honda CB350RS", value: "Honda CB350RS" },
  { label: "Honda Rebel 500", value: "Honda Rebel 500" },

  // Honda Scooters
  { label: "Honda Activa 3G", value: "Honda Activa 3G" },
  { label: "Honda Activa 5G", value: "Honda Activa 5G" },
  { label: "Honda Activa 6G", value: "Honda Activa 6G" },
  { label: "Honda Dio", value: "Honda Dio" },
  { label: "Honda Grazia", value: "Honda Grazia" },
  { label: "Honda Aviator", value: "Honda Aviator" },

  // Honda Electric (Upcoming)
  {
    label: "Honda Electric Scooter (Upcoming)",
    value: "Honda Electric Scooter (Upcoming)",
  },
];

const heroBikeList = [
  // Early Hero Honda Models
  { label: "Hero Honda CD 100", value: "Hero Honda CD 100" },
  { label: "Hero Honda CD 100 SS", value: "Hero Honda CD 100 SS" },
  { label: "Hero Honda Sleek", value: "Hero Honda Sleek" },
  { label: "Hero Honda CD Dawn", value: "Hero Honda CD Dawn" },
  { label: "Hero Honda CD Deluxe", value: "Hero Honda CD Deluxe" },
  { label: "Hero Honda Street", value: "Hero Honda Street" },
  { label: "Hero Honda Passion", value: "Hero Honda Passion" },
  { label: "Hero Honda Passion Plus", value: "Hero Honda Passion Plus" },
  { label: "Hero Honda Splendor", value: "Hero Honda Splendor" },
  { label: "Hero Honda Splendor Plus", value: "Hero Honda Splendor Plus" },
  { label: "Hero Honda Super Splendor", value: "Hero Honda Super Splendor" },
  { label: "Hero Honda Glamour", value: "Hero Honda Glamour" },
  { label: "Hero Honda CBZ", value: "Hero Honda CBZ" },
  { label: "Hero Honda CBZ Star", value: "Hero Honda CBZ Star" },
  { label: "Hero Honda CBZ Xtreme", value: "Hero Honda CBZ Xtreme" },
  { label: "Hero Honda Karizma", value: "Hero Honda Karizma" },
  { label: "Hero Honda Karizma R", value: "Hero Honda Karizma R" },
  { label: "Hero Honda Karizma ZMR", value: "Hero Honda Karizma ZMR" },
  { label: "Hero Honda Hunk", value: "Hero Honda Hunk" },
  { label: "Hero Honda Achiever", value: "Hero Honda Achiever" },

  // Hero Commuter Bikes (Post Hero-Honda Split)
  { label: "Hero HF Dawn", value: "Hero HF Dawn" },
  { label: "Hero HF Deluxe", value: "Hero HF Deluxe" },
  { label: "Hero Splendor Plus", value: "Hero Splendor Plus" },
  { label: "Hero Super Splendor", value: "Hero Super Splendor" },
  { label: "Hero Glamour", value: "Hero Glamour" },
  { label: "Hero Passion Pro", value: "Hero Passion Pro" },
  { label: "Hero Passion Xpro", value: "Hero Passion Xpro" },
  { label: "Hero Achiever 150", value: "Hero Achiever 150" },

  // Hero Sports & Performance
  { label: "Hero Xtreme 150", value: "Hero Xtreme 150" },
  { label: "Hero Xtreme 160R", value: "Hero Xtreme 160R" },
  { label: "Hero Xtreme 200R", value: "Hero Xtreme 200R" },
  { label: "Hero Xtreme 200S", value: "Hero Xtreme 200S" },
  { label: "Hero Karizma XMR 210", value: "Hero Karizma XMR 210" },

  // Hero Adventure & Off-Road
  { label: "Hero Xpulse 200", value: "Hero Xpulse 200" },
  { label: "Hero Xpulse 200T", value: "Hero Xpulse 200T" },
  { label: "Hero Impulse", value: "Hero Impulse" },

  // Hero Scooters
  { label: "Hero Pleasure", value: "Hero Pleasure" },
  { label: "Hero Pleasure Plus", value: "Hero Pleasure Plus" },
  { label: "Hero Maestro", value: "Hero Maestro" },
  { label: "Hero Maestro Edge", value: "Hero Maestro Edge" },
  { label: "Hero Duet", value: "Hero Duet" },
  { label: "Hero Destini 125", value: "Hero Destini 125" },

  // Hero Electric (Upcoming)
  { label: "Hero Vida V1 Electric", value: "Hero Vida V1 Electric" },
];

const suzukiBikeList = [
  // Early Suzuki Models
  { label: "Suzuki Samurai", value: "Suzuki Samurai" },
  { label: "Suzuki Shogun", value: "Suzuki Shogun" },
  { label: "Suzuki Max 100", value: "Suzuki Max 100" },
  { label: "Suzuki Fiero", value: "Suzuki Fiero" },

  // Suzuki Commuter Bikes
  { label: "Suzuki Heat 125", value: "Suzuki Heat 125" },
  { label: "Suzuki Zeus 125", value: "Suzuki Zeus 125" },
  { label: "Suzuki Slingshot", value: "Suzuki Slingshot" },
  { label: "Suzuki Hayate", value: "Suzuki Hayate" },
  { label: "Suzuki Hayate EP", value: "Suzuki Hayate EP" },

  // Suzuki Gixxer Series (Street & Performance)
  { label: "Suzuki Gixxer 150", value: "Suzuki Gixxer 150" },
  { label: "Suzuki Gixxer SF 150", value: "Suzuki Gixxer SF 150" },
  { label: "Suzuki Gixxer 250", value: "Suzuki Gixxer 250" },
  { label: "Suzuki Gixxer SF 250", value: "Suzuki Gixxer SF 250" },

  // Suzuki GSX Series (Performance & Sportbikes)
  { label: "Suzuki GSX-S1000", value: "Suzuki GSX-S1000" },
  { label: "Suzuki GSX-S750", value: "Suzuki GSX-S750" },
  { label: "Suzuki GSX-R1000", value: "Suzuki GSX-R1000" },
  { label: "Suzuki GSX-R750", value: "Suzuki GSX-R750" },
  { label: "Suzuki GSX-R600", value: "Suzuki GSX-R600" },

  // Suzuki Adventure & Touring
  { label: "Suzuki V-Strom 650 XT", value: "Suzuki V-Strom 650 XT" },
  { label: "Suzuki V-Strom 800 DE", value: "Suzuki V-Strom 800 DE" },
  { label: "Suzuki V-Strom 1050 XT", value: "Suzuki V-Strom 1050 XT" },

  // Suzuki Cruisers
  { label: "Suzuki Intruder 150", value: "Suzuki Intruder 150" },
  { label: "Suzuki Intruder M1800R", value: "Suzuki Intruder M1800R" },
  { label: "Suzuki Boulevard M109R", value: "Suzuki Boulevard M109R" },

  // Suzuki Scooters
  { label: "Suzuki Access 125", value: "Suzuki Access 125" },
  { label: "Suzuki Access 110", value: "Suzuki Access 110" },
  { label: "Suzuki Swish 125", value: "Suzuki Swish 125" },
  { label: "Suzuki Let's", value: "Suzuki Let's" },
  { label: "Suzuki Burgman Street 125", value: "Suzuki Burgman Street 125" },
  { label: "Suzuki Burgman 400", value: "Suzuki Burgman 400" },

  // Suzuki Electric (Upcoming)
  {
    label: "Suzuki Electric Scooter (Upcoming)",
    value: "Suzuki Electric Scooter (Upcoming)",
  },
];

const ktmBikeList = [
  // Early KTM Models
  { label: "KTM Duke 125 (1st Gen)", value: "KTM Duke 125 (1st Gen)" },
  { label: "KTM Duke 200 (1st Gen)", value: "KTM Duke 200 (1st Gen)" },
  { label: "KTM Duke 390 (1st Gen)", value: "KTM Duke 390 (1st Gen)" },

  // KTM Duke Series (Street Bikes)
  { label: "KTM Duke 125", value: "KTM Duke 125" },
  { label: "KTM Duke 200", value: "KTM Duke 200" },
  { label: "KTM Duke 250", value: "KTM Duke 250" },
  { label: "KTM Duke 390", value: "KTM Duke 390" },
  { label: "KTM Duke 790", value: "KTM Duke 790" },
  { label: "KTM Duke 890 R", value: "KTM Duke 890 R" },
  { label: "KTM Duke 990", value: "KTM Duke 990" },
  { label: "KTM Duke 1290 Super Duke R", value: "KTM Duke 1290 Super Duke R" },

  // KTM RC Series (Sports Bikes)
  { label: "KTM RC 125", value: "KTM RC 125" },
  { label: "KTM RC 200", value: "KTM RC 200" },
  { label: "KTM RC 250", value: "KTM RC 250" },
  { label: "KTM RC 390", value: "KTM RC 390" },
  { label: "KTM RC 8C", value: "KTM RC 8C" },

  // KTM Adventure Series (Touring & Adventure)
  { label: "KTM 250 Adventure", value: "KTM 250 Adventure" },
  { label: "KTM 390 Adventure", value: "KTM 390 Adventure" },
  { label: "KTM 790 Adventure", value: "KTM 790 Adventure" },
  { label: "KTM 890 Adventure", value: "KTM 890 Adventure" },
  { label: "KTM 1290 Super Adventure R", value: "KTM 1290 Super Adventure R" },
  { label: "KTM 1290 Super Adventure S", value: "KTM 1290 Super Adventure S" },

  // KTM Motocross & Enduro
  { label: "KTM 250 SX-F", value: "KTM 250 SX-F" },
  { label: "KTM 350 SX-F", value: "KTM 350 SX-F" },
  { label: "KTM 450 SX-F", value: "KTM 450 SX-F" },
  { label: "KTM 250 EXC-F", value: "KTM 250 EXC-F" },
  { label: "KTM 300 EXC", value: "KTM 300 EXC" },
  { label: "KTM 450 EXC-F", value: "KTM 450 EXC-F" },

  // KTM Electric (Upcoming)
  { label: "KTM E-Duke (Upcoming)", value: "KTM E-Duke (Upcoming)" },
  {
    label: "KTM E-Ride Electric Bike (Upcoming)",
    value: "KTM E-Ride Electric Bike (Upcoming)",
  },
];

const jawaBikeList = [
  // Classic Jawa Models
  { label: "Jawa 250 Type 353", value: "Jawa 250 Type 353" },
  { label: "Jawa 350 Type 354", value: "Jawa 350 Type 354" },
  { label: "Jawa 250 California", value: "Jawa 250 California" },
  { label: "Jawa 350 Californian", value: "Jawa 350 Californian" },
  { label: "Jawa 250 Perak", value: "Jawa 250 Perak" },
  { label: "Jawa 350 Twin Sport", value: "Jawa 350 Twin Sport" },

  // Jawa Yezdi Era (India - 1970s to 1990s)
  { label: "Yezdi 250 Classic", value: "Yezdi 250 Classic" },
  { label: "Yezdi Roadking", value: "Yezdi Roadking" },
  { label: "Yezdi Monarch", value: "Yezdi Monarch" },
  { label: "Yezdi Deluxe", value: "Yezdi Deluxe" },

  // Modern Jawa Bikes (Relaunched in 2018)
  { label: "Jawa 42", value: "Jawa 42" },
  { label: "Jawa 42 Bobber", value: "Jawa 42 Bobber" },
  { label: "Jawa Classic", value: "Jawa Classic" },
  { label: "Jawa Perak", value: "Jawa Perak" },
  { label: "Jawa 350", value: "Jawa 350" },
  { label: "Jawa 42 Dual Tone", value: "Jawa 42 Dual Tone" },

  // Jawa Adventure & Scrambler (Upcoming)
  { label: "Jawa Scrambler (Upcoming)", value: "Jawa Scrambler (Upcoming)" },
  { label: "Jawa Adventure (Upcoming)", value: "Jawa Adventure (Upcoming)" },
];

const harleyDavidsonBikeList = [
  // Early Harley-Davidson Models
  { label: "Harley-Davidson Model 1", value: "Harley-Davidson Model 1" },
  { label: "Harley-Davidson JD", value: "Harley-Davidson JD" },
  {
    label: "Harley-Davidson EL Knucklehead",
    value: "Harley-Davidson EL Knucklehead",
  },
  { label: "Harley-Davidson WL", value: "Harley-Davidson WL" },
  { label: "Harley-Davidson Panhead", value: "Harley-Davidson Panhead" },
  { label: "Harley-Davidson Shovelhead", value: "Harley-Davidson Shovelhead" },

  // Harley-Davidson Sportster Series
  { label: "Harley-Davidson Iron 883", value: "Harley-Davidson Iron 883" },
  {
    label: "Harley-Davidson Forty-Eight",
    value: "Harley-Davidson Forty-Eight",
  },
  {
    label: "Harley-Davidson Sportster 1200 Custom",
    value: "Harley-Davidson Sportster 1200 Custom",
  },
  { label: "Harley-Davidson Nightster", value: "Harley-Davidson Nightster" },
  {
    label: "Harley-Davidson Sportster S",
    value: "Harley-Davidson Sportster S",
  },

  // Harley-Davidson Softail Series
  { label: "Harley-Davidson Street Bob", value: "Harley-Davidson Street Bob" },
  {
    label: "Harley-Davidson Softail Standard",
    value: "Harley-Davidson Softail Standard",
  },
  {
    label: "Harley-Davidson Fat Bob 114",
    value: "Harley-Davidson Fat Bob 114",
  },
  {
    label: "Harley-Davidson Fat Boy 114",
    value: "Harley-Davidson Fat Boy 114",
  },
  {
    label: "Harley-Davidson Low Rider S",
    value: "Harley-Davidson Low Rider S",
  },
  {
    label: "Harley-Davidson Low Rider ST",
    value: "Harley-Davidson Low Rider ST",
  },

  // Harley-Davidson Touring Series
  { label: "Harley-Davidson Road King", value: "Harley-Davidson Road King" },
  {
    label: "Harley-Davidson Street Glide",
    value: "Harley-Davidson Street Glide",
  },
  { label: "Harley-Davidson Road Glide", value: "Harley-Davidson Road Glide" },
  {
    label: "Harley-Davidson Electra Glide",
    value: "Harley-Davidson Electra Glide",
  },
  {
    label: "Harley-Davidson Ultra Limited",
    value: "Harley-Davidson Ultra Limited",
  },

  // Harley-Davidson Cruiser Series
  {
    label: "Harley-Davidson Breakout 117",
    value: "Harley-Davidson Breakout 117",
  },
  {
    label: "Harley-Davidson Heritage Classic",
    value: "Harley-Davidson Heritage Classic",
  },

  // Harley-Davidson Adventure Touring
  {
    label: "Harley-Davidson Pan America 1250",
    value: "Harley-Davidson Pan America 1250",
  },
  {
    label: "Harley-Davidson Pan America 1250 Special",
    value: "Harley-Davidson Pan America 1250 Special",
  },

  // Harley-Davidson Electric
  { label: "Harley-Davidson LiveWire", value: "Harley-Davidson LiveWire" },
  {
    label: "Harley-Davidson LiveWire One",
    value: "Harley-Davidson LiveWire One",
  },
  { label: "Harley-Davidson S2 Del Mar", value: "Harley-Davidson S2 Del Mar" },

  // Harley-Davidson Trikes
  {
    label: "Harley-Davidson Freewheeler",
    value: "Harley-Davidson Freewheeler",
  },
  {
    label: "Harley-Davidson Tri Glide Ultra",
    value: "Harley-Davidson Tri Glide Ultra",
  },
  {
    label: "Harley-Davidson CVO Tri Glide",
    value: "Harley-Davidson CVO Tri Glide",
  },

  // Harley-Davidson CVO (Custom Vehicle Operations)
  {
    label: "Harley-Davidson CVO Road Glide",
    value: "Harley-Davidson CVO Road Glide",
  },
  {
    label: "Harley-Davidson CVO Street Glide",
    value: "Harley-Davidson CVO Street Glide",
  },
  {
    label: "Harley-Davidson CVO Limited",
    value: "Harley-Davidson CVO Limited",
  },
];

const kawasakiBikeList = [
  // Classic Kawasaki Models
  { label: "Kawasaki B8", value: "Kawasaki B8" },
  { label: "Kawasaki W1", value: "Kawasaki W1" },
  { label: "Kawasaki Z1", value: "Kawasaki Z1" },
  { label: "Kawasaki KZ1000", value: "Kawasaki KZ1000" },
  { label: "Kawasaki GPZ900R", value: "Kawasaki GPZ900R" },

  // Kawasaki Ninja Series (Sportbikes)
  { label: "Kawasaki Ninja 125", value: "Kawasaki Ninja 125" },
  { label: "Kawasaki Ninja 250", value: "Kawasaki Ninja 250" },
  { label: "Kawasaki Ninja 300", value: "Kawasaki Ninja 300" },
  { label: "Kawasaki Ninja 400", value: "Kawasaki Ninja 400" },
  { label: "Kawasaki Ninja 500", value: "Kawasaki Ninja 500" },
  { label: "Kawasaki Ninja 650", value: "Kawasaki Ninja 650" },
  { label: "Kawasaki Ninja 1000SX", value: "Kawasaki Ninja 1000SX" },
  { label: "Kawasaki Ninja ZX-4R", value: "Kawasaki Ninja ZX-4R" },
  { label: "Kawasaki Ninja ZX-6R", value: "Kawasaki Ninja ZX-6R" },
  { label: "Kawasaki Ninja ZX-10R", value: "Kawasaki Ninja ZX-10R" },
  { label: "Kawasaki Ninja ZX-10RR", value: "Kawasaki Ninja ZX-10RR" },
  { label: "Kawasaki Ninja H2", value: "Kawasaki Ninja H2" },
  { label: "Kawasaki Ninja H2R", value: "Kawasaki Ninja H2R" },

  // Kawasaki Z Series (Naked Streetfighters)
  { label: "Kawasaki Z125", value: "Kawasaki Z125" },
  { label: "Kawasaki Z250", value: "Kawasaki Z250" },
  { label: "Kawasaki Z400", value: "Kawasaki Z400" },
  { label: "Kawasaki Z650", value: "Kawasaki Z650" },
  { label: "Kawasaki Z900", value: "Kawasaki Z900" },
  { label: "Kawasaki Z900RS", value: "Kawasaki Z900RS" },
  { label: "Kawasaki Z1000", value: "Kawasaki Z1000" },
  { label: "Kawasaki Z H2", value: "Kawasaki Z H2" },

  // Kawasaki Versys Series (Touring & Adventure)
  { label: "Kawasaki Versys-X 300", value: "Kawasaki Versys-X 300" },
  { label: "Kawasaki Versys 650", value: "Kawasaki Versys 650" },
  { label: "Kawasaki Versys 1000", value: "Kawasaki Versys 1000" },

  // Kawasaki KLR Series (Dual-Sport)
  { label: "Kawasaki KLR 650", value: "Kawasaki KLR 650" },

  // Kawasaki KX & KLX Series (Motocross & Off-Road)
  { label: "Kawasaki KLX 140", value: "Kawasaki KLX 140" },
  { label: "Kawasaki KLX 230", value: "Kawasaki KLX 230" },
  { label: "Kawasaki KLX 300", value: "Kawasaki KLX 300" },
  { label: "Kawasaki KX 250", value: "Kawasaki KX 250" },
  { label: "Kawasaki KX 450", value: "Kawasaki KX 450" },

  // Kawasaki Vulcan Series (Cruisers)
  { label: "Kawasaki Vulcan S", value: "Kawasaki Vulcan S" },
  { label: "Kawasaki Vulcan 900", value: "Kawasaki Vulcan 900" },
  {
    label: "Kawasaki Vulcan 1700 Vaquero",
    value: "Kawasaki Vulcan 1700 Vaquero",
  },

  // Kawasaki Electric & Hybrid (Upcoming)
  { label: "Kawasaki Ninja e-1", value: "Kawasaki Ninja e-1" },
  { label: "Kawasaki Z e-1", value: "Kawasaki Z e-1" },
  { label: "Kawasaki Hybrid Ninja 7", value: "Kawasaki Hybrid Ninja 7" },
];

export const bikeList = [
  {
    label: "TVS",
    options: tvsBikeList,
  },
  {
    label: "Bajaj",
    options: bajajBikeList,
  },
  {
    label: "Royal Enfield",
    options: royalEnfieldBikeList,
  },
  {
    label: "Yamaha",
    options: yamahaBikeList,
  },
  {
    label: "Honda",
    options: hondaBikeList,
  },
  {
    label: "Hero",
    options: heroBikeList,
  },
  {
    label: "Suzuki",
    options: suzukiBikeList,
  },
  {
    label: "KTM",
    options: ktmBikeList,
  },
  {
    label: "Jawa",
    options: jawaBikeList,
  },
  {
    label: "Harley Davidson",
    options: harleyDavidsonBikeList,
  },
  {
    label: "Kawasaki",
    options: kawasakiBikeList,
  },
];
