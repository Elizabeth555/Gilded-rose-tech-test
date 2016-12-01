function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []
var specialCases = ["Aged Brie", "Sulfuras, Hand of Ragnaros", "Backstage passes to a TAFKAL80ETC concert"]
var standard = []
var unique = []

function update_quality() {

  for (var i =0; i< items.length; i++) {
    for (var n =0; n< items.length; n ++) {
      if (items[i]===specialCases[n]) {
        unique.push(items[i])
      } else {
        standard.push(items[i])
      };
    };
  };

  for (var i = 0; i < standard[i]; i++) {
      (standard[i].sell_in > 0) ? standard[i].quality -1 : standard[i].quality -2;
      standard.sell_in -1
  };

//
//   for (var i = 0; i < items.length; i++) {
//     if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//       if (items[i].quality > 0) {
//         if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
//           items[i].quality = items[i].quality - 1
//         }
//       }
//     } else {
//       if (items[i].quality < 50) {
//         items[i].quality = items[i].quality + 1
//         if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//           if (items[i].sell_in < 11) {
//             if (items[i].quality < 50) {
//               items[i].quality = items[i].quality + 1
//             }
//           }
//           if (items[i].sell_in < 6) {
//             if (items[i].quality < 50) {
//               items[i].quality = items[i].quality + 1
//             }
//           }
//         }
//       }
//     }
//     if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
//       items[i].sell_in = items[i].sell_in - 1;
//     }
//     if (items[i].sell_in < 0) {
//       if (items[i].name != 'Aged Brie') {
//         if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//           if (items[i].quality > 0) {
//             if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
//               items[i].quality = items[i].quality - 1
//             }
//           }
//         } else {
//           items[i].quality = items[i].quality - items[i].quality
//         }
//       } else {
//         if (items[i].quality < 50) {
//           items[i].quality = items[i].quality + 1
//         }
//       }
//     }
//   }
}
