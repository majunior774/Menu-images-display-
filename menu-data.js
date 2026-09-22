const MENU_ITEMS = [
  {
    "category": "Soup",
    "name": "Tomato Soup",
    "price": "Half ₹65 · Full ₹80",
    "filename": "01_soup_tomato_soup.jpg",
    "id": 1,
    "image": "images/01_soup_tomato_soup.jpg"
  },
  {
    "category": "Soup",
    "name": "Small Chicken Soup",
    "price": "Full ₹80",
    "filename": "02_soup_small_chicken_soup.jpg",
    "id": 2,
    "image": "images/02_soup_small_chicken_soup.jpg"
  },
  {
    "category": "Soup",
    "name": "Big Chicken Soup",
    "price": "Full ₹90",
    "filename": "03_soup_big_chicken_soup.jpg",
    "id": 3,
    "image": "images/03_soup_big_chicken_soup.jpg"
  },
  {
    "category": "Soup",
    "name": "Special Large Leg Chicken Soup",
    "price": "Full ₹130",
    "filename": "04_soup_special_large_leg_chicken_soup.jpg",
    "id": 4,
    "image": "images/04_soup_special_large_leg_chicken_soup.jpg"
  },
  {
    "category": "Chowmein",
    "name": "Chowmein",
    "price": "Half ₹80 · Full ₹130",
    "filename": "05_chowmein_chowmein.jpg",
    "id": 5,
    "image": "images/05_chowmein_chowmein.jpg"
  },
  {
    "category": "Chowmein",
    "name": "Hakka Noodles",
    "price": "Half ₹80 · Full ₹155",
    "filename": "06_chowmein_hakka_noodles.jpg",
    "id": 6,
    "image": "images/06_chowmein_hakka_noodles.jpg"
  },
  {
    "category": "Chowmein",
    "name": "Egg Chowmein (1 Egg / 2 Egg)",
    "price": "Half ₹90 · Full ₹170",
    "filename": "07_chowmein_egg_chowmein_1_egg_2_egg.jpg",
    "id": 7,
    "image": "images/07_chowmein_egg_chowmein_1_egg_2_egg.jpg"
  },
  {
    "category": "Chowmein",
    "name": "Singapuri Chowmein",
    "price": "Half ₹105 · Full ₹195",
    "filename": "08_chowmein_singapuri_chowmein.jpg",
    "id": 8,
    "image": "images/08_chowmein_singapuri_chowmein.jpg"
  },
  {
    "category": "Chowmein",
    "name": "Chicken Chowmein",
    "price": "Half ₹115 · Full ₹220",
    "filename": "09_chowmein_chicken_chowmein.jpg",
    "id": 9,
    "image": "images/09_chowmein_chicken_chowmein.jpg"
  },
  {
    "category": "Chowmein",
    "name": "Egg Chicken Chowmein (1 Egg / 2 Egg)",
    "price": "Half ₹130 · Full ₹210",
    "filename": "10_chowmein_egg_chicken_chowmein_1_egg_2_egg.jpg",
    "id": 10,
    "image": "images/10_chowmein_egg_chicken_chowmein_1_egg_2_egg.jpg"
  },
  {
    "category": "Kathi Roll",
    "name": "Egg Roll (1 Egg / 2 Egg)",
    "price": "Half ₹80 · Full ₹90",
    "filename": "11_kathi_roll_egg_roll_1_egg_2_egg.jpg",
    "id": 11,
    "image": "images/11_kathi_roll_egg_roll_1_egg_2_egg.jpg"
  },
  {
    "category": "Kathi Roll",
    "name": "Chicken Roll",
    "price": "Full ₹115",
    "filename": "12_kathi_roll_chicken_roll.jpg",
    "id": 12,
    "image": "images/12_kathi_roll_chicken_roll.jpg"
  },
  {
    "category": "Kathi Roll",
    "name": "Egg Chicken Roll (1 Egg / 2 Egg)",
    "price": "Half ₹145 · Full ₹155",
    "filename": "13_kathi_roll_egg_chicken_roll_1_egg_2_egg.jpg",
    "id": 13,
    "image": "images/13_kathi_roll_egg_chicken_roll_1_egg_2_egg.jpg"
  },
  {
    "category": "Kathi Roll",
    "name": "Chicken Sikh Egg Roll (2 Pcs)",
    "price": "Full ₹155",
    "filename": "14_kathi_roll_chicken_sikh_egg_roll_2_pcs.jpg",
    "id": 14,
    "image": "images/14_kathi_roll_chicken_sikh_egg_roll_2_pcs.jpg"
  },
  {
    "category": "Veg Items",
    "name": "Tandoori Paneer Momos",
    "price": "Half ₹105 · Full ₹195",
    "filename": "15_veg_items_tandoori_paneer_momos.jpg",
    "id": 15,
    "image": "images/15_veg_items_tandoori_paneer_momos.jpg"
  },
  {
    "category": "Veg Items",
    "name": "Chilli Potato",
    "price": "Half ₹90 · Full ₹170",
    "filename": "16_veg_items_chilli_potato.jpg",
    "id": 16,
    "image": "images/16_veg_items_chilli_potato.jpg"
  },
  {
    "category": "Veg Items",
    "name": "Chowmien",
    "price": "Half ₹80 · Full ₹130",
    "filename": "17_veg_items_chowmien.jpg",
    "id": 17,
    "image": "images/17_veg_items_chowmien.jpg"
  },
  {
    "category": "Veg Items",
    "name": "Tandoori Paneer Tikka",
    "price": "Half ₹170 · Full ₹325",
    "filename": "18_veg_items_tandoori_paneer_tikka.jpg",
    "id": 18,
    "image": "images/18_veg_items_tandoori_paneer_tikka.jpg"
  },
  {
    "category": "Veg Items",
    "name": "Tandoori Chap Tikka",
    "price": "Half ₹130 · Full ₹235",
    "filename": "19_veg_items_tandoori_chap_tikka.jpg",
    "id": 19,
    "image": "images/19_veg_items_tandoori_chap_tikka.jpg"
  },
  {
    "category": "Veg Items",
    "name": "Veg. Spring Roll",
    "price": "Half ₹65 · Full ₹105",
    "filename": "20_veg_items_veg_spring_roll.jpg",
    "id": 20,
    "image": "images/20_veg_items_veg_spring_roll.jpg"
  },
  {
    "category": "Veg Items",
    "name": "Finger (Veg)",
    "price": "Half ₹80 · Full ₹130",
    "filename": "21_veg_items_finger_veg.jpg",
    "id": 21,
    "image": "images/21_veg_items_finger_veg.jpg"
  },
  {
    "category": "Gravy Items",
    "name": "Gravy Chicken",
    "price": "Half ₹455 · Full ₹715",
    "filename": "22_gravy_items_gravy_chicken.jpg",
    "id": 22,
    "image": "images/22_gravy_items_gravy_chicken.jpg"
  },
  {
    "category": "Gravy Items",
    "name": "Butter Chicken",
    "price": "Half ₹455 · Full ₹715",
    "filename": "23_gravy_items_butter_chicken.jpg",
    "id": 23,
    "image": "images/23_gravy_items_butter_chicken.jpg"
  },
  {
    "category": "Gravy Items",
    "name": "Rumali Roti",
    "price": "₹10 per piece",
    "filename": "24_gravy_items_rumali_roti.jpg",
    "id": 24,
    "image": "images/24_gravy_items_rumali_roti.jpg"
  },
  {
    "category": "Roasted Items",
    "name": "Tandoori Chicken (7 Pcs / 14 Pcs)",
    "price": "Half ₹235 · Full ₹440",
    "filename": "25_roasted_items_tandoori_chicken_7_pcs_14_pcs.jpg",
    "id": 25,
    "image": "images/25_roasted_items_tandoori_chicken_7_pcs_14_pcs.jpg"
  },
  {
    "category": "Roasted Items",
    "name": "Afghani Chicken (7 Pcs / 14 Pcs)",
    "price": "Half ₹260 · Full ₹495",
    "filename": "26_roasted_items_afghani_chicken_7_pcs_14_pcs.jpg",
    "id": 26,
    "image": "images/26_roasted_items_afghani_chicken_7_pcs_14_pcs.jpg"
  },
  {
    "category": "Roasted Items",
    "name": "Tandoori Leg (2 Pcs / 4 Pcs)",
    "price": "Half ₹130 · Full ₹235",
    "filename": "27_roasted_items_tandoori_leg_2_pcs_4_pcs.jpg",
    "id": 27,
    "image": "images/27_roasted_items_tandoori_leg_2_pcs_4_pcs.jpg"
  },
  {
    "category": "Roasted Items",
    "name": "Afghani Leg (2 Pcs / 4 Pcs)",
    "price": "Half ₹130 · Full ₹235",
    "filename": "28_roasted_items_afghani_leg_2_pcs_4_pcs.jpg",
    "id": 28,
    "image": "images/28_roasted_items_afghani_leg_2_pcs_4_pcs.jpg"
  },
  {
    "category": "Roasted Items",
    "name": "Tandoori Wings - After Cut (8 Pcs / 16 Pcs)",
    "price": "Half ₹195 · Full ₹365",
    "filename": "29_roasted_items_tandoori_wings_after_cut_8_pcs_16_pcs.jpg",
    "id": 29,
    "image": "images/29_roasted_items_tandoori_wings_after_cut_8_pcs_16_pcs.jpg"
  },
  {
    "category": "Roasted Items",
    "name": "Afghani Wings - After Cut (8 Pcs / 16 Pcs)",
    "price": "Half ₹195 · Full ₹365",
    "filename": "30_roasted_items_afghani_wings_after_cut_8_pcs_16_pcs.jpg",
    "id": 30,
    "image": "images/30_roasted_items_afghani_wings_after_cut_8_pcs_16_pcs.jpg"
  },
  {
    "category": "Roasted Items",
    "name": "Tandoori Tikka (8 Pcs / 16 Pcs)",
    "price": "Half ₹195 · Full ₹365",
    "filename": "31_roasted_items_tandoori_tikka_8_pcs_16_pcs.jpg",
    "id": 31,
    "image": "images/31_roasted_items_tandoori_tikka_8_pcs_16_pcs.jpg"
  },
  {
    "category": "Roasted Items",
    "name": "Afghani Tikka (8 Pcs / 16 Pcs)",
    "price": "Half ₹195 · Full ₹365",
    "filename": "32_roasted_items_afghani_tikka_8_pcs_16_pcs.jpg",
    "id": 32,
    "image": "images/32_roasted_items_afghani_tikka_8_pcs_16_pcs.jpg"
  },
  {
    "category": "Roasted Items",
    "name": "Kabab Roll (1 Pc / 2 Pcs / 3 Pcs)",
    "price": "₹65 / ₹115 / ₹170",
    "filename": "33_roasted_items_kabab_roll_1_pc_2_pcs_3_pcs.jpg",
    "id": 33,
    "image": "images/33_roasted_items_kabab_roll_1_pc_2_pcs_3_pcs.jpg"
  },
  {
    "category": "Roasted Items",
    "name": "Chicken Tikka Roll",
    "price": "Half ₹220 · Full ₹415",
    "filename": "34_roasted_items_chicken_tikka_roll.jpg",
    "id": 34,
    "image": "images/34_roasted_items_chicken_tikka_roll.jpg"
  },
  {
    "category": "Roasted Items",
    "name": "Chicken Lollipop (2 Pcs / 4 Pcs)",
    "price": "Half ₹90 · Full ₹180",
    "filename": "35_roasted_items_chicken_lollipop_2_pcs_4_pcs.jpg",
    "id": 35,
    "image": "images/35_roasted_items_chicken_lollipop_2_pcs_4_pcs.jpg"
  },
  {
    "category": "Roasted Items",
    "name": "Fish (Seasonal)",
    "price": "Seasonal",
    "filename": "36_roasted_items_fish_seasonal.jpg",
    "id": 36,
    "image": "images/36_roasted_items_fish_seasonal.jpg"
  },
  {
    "category": "Roasted Items",
    "name": "Fried Chicken",
    "price": "Half ₹325 · Full ₹520",
    "filename": "37_roasted_items_fried_chicken.jpg",
    "id": 37,
    "image": "images/37_roasted_items_fried_chicken.jpg"
  },
  {
    "category": "Rolls",
    "name": "Veg. Spring Roll",
    "price": "1 pc ₹50 · 2 pcs ₹90",
    "filename": "38_rolls_veg_spring_roll.jpg",
    "id": 38,
    "image": "images/38_rolls_veg_spring_roll.jpg"
  },
  {
    "category": "Rolls",
    "name": "Chicken Spring Roll",
    "price": "1 pc ₹65 · 2 pcs ₹115",
    "filename": "39_rolls_chicken_spring_roll.jpg",
    "id": 39,
    "image": "images/39_rolls_chicken_spring_roll.jpg"
  },
  {
    "category": "Rolls",
    "name": "Seekh Kabab Roll (2 Pcs / 3 Pcs)",
    "price": "1 pc ₹115 · 2 pcs ₹170",
    "filename": "40_rolls_seekh_kabab_roll_2_pcs_3_pcs.jpg",
    "id": 40,
    "image": "images/40_rolls_seekh_kabab_roll_2_pcs_3_pcs.jpg"
  },
  {
    "category": "Rolls",
    "name": "Chap Roll",
    "price": "Half ₹155 · Full ₹285",
    "filename": "41_rolls_chap_roll.jpg",
    "id": 41,
    "image": "images/41_rolls_chap_roll.jpg"
  },
  {
    "category": "Rolls",
    "name": "Paneer Tikka Roll",
    "price": "Half ₹195 · Full ₹365",
    "filename": "42_rolls_paneer_tikka_roll.jpg",
    "id": 42,
    "image": "images/42_rolls_paneer_tikka_roll.jpg"
  },
  {
    "category": "Momos",
    "name": "Veg. Momos Steam",
    "price": "Half ₹65 · Full ₹105",
    "filename": "43_momos_veg_momos_steam.jpg",
    "id": 43,
    "image": "images/43_momos_veg_momos_steam.jpg"
  },
  {
    "category": "Momos",
    "name": "Veg. Momos Fried",
    "price": "Half ₹65 · Full ₹130",
    "filename": "44_momos_veg_momos_fried.jpg",
    "id": 44,
    "image": "images/44_momos_veg_momos_fried.jpg"
  },
  {
    "category": "Momos",
    "name": "Veg. Momos Gravy",
    "price": "Half ₹80 · Full ₹155",
    "filename": "45_momos_veg_momos_gravy.jpg",
    "id": 45,
    "image": "images/45_momos_veg_momos_gravy.jpg"
  },
  {
    "category": "Momos",
    "name": "Veg. Momos Kurkure",
    "price": "Half ₹80 · Full ₹155",
    "filename": "46_momos_veg_momos_kurkure.jpg",
    "id": 46,
    "image": "images/46_momos_veg_momos_kurkure.jpg"
  },
  {
    "category": "Momos",
    "name": "Special Veg. Momos",
    "price": "Half ₹80 · Full ₹155",
    "filename": "47_momos_special_veg_momos.jpg",
    "id": 47,
    "image": "images/47_momos_special_veg_momos.jpg"
  },
  {
    "category": "Momos",
    "name": "Special Veg. Momos Afghani",
    "price": "Half ₹80 · Full ₹155",
    "filename": "48_momos_special_veg_momos_afghani.jpg",
    "id": 48,
    "image": "images/48_momos_special_veg_momos_afghani.jpg"
  },
  {
    "category": "Momos",
    "name": "Steam Chicken Momos (6 Pcs / 10 Pcs)",
    "price": "Half ₹80 · Full ₹130",
    "filename": "49_momos_steam_chicken_momos_6_pcs_10_pcs.jpg",
    "id": 49,
    "image": "images/49_momos_steam_chicken_momos_6_pcs_10_pcs.jpg"
  },
  {
    "category": "Momos",
    "name": "Fried Chicken Momos",
    "price": "Half ₹80 · Full ₹155",
    "filename": "50_momos_fried_chicken_momos.jpg",
    "id": 50,
    "image": "images/50_momos_fried_chicken_momos.jpg"
  },
  {
    "category": "Momos",
    "name": "Gravy Chicken Momos",
    "price": "Half ₹105 · Full ₹195",
    "filename": "51_momos_gravy_chicken_momos.jpg",
    "id": 51,
    "image": "images/51_momos_gravy_chicken_momos.jpg"
  },
  {
    "category": "Momos",
    "name": "Kurkure Chicken Momos",
    "price": "Half ₹105 · Full ₹195",
    "filename": "52_momos_kurkure_chicken_momos.jpg",
    "id": 52,
    "image": "images/52_momos_kurkure_chicken_momos.jpg"
  },
  {
    "category": "Momos",
    "name": "Tandoori Chicken Momos",
    "price": "Half ₹105 · Full ₹195",
    "filename": "53_momos_tandoori_chicken_momos.jpg",
    "id": 53,
    "image": "images/53_momos_tandoori_chicken_momos.jpg"
  },
  {
    "category": "Momos",
    "name": "Afghani Chicken Momos",
    "price": "Half ₹105 · Full ₹195",
    "filename": "54_momos_afghani_chicken_momos.jpg",
    "id": 54,
    "image": "images/54_momos_afghani_chicken_momos.jpg"
  },
  {
    "category": "Momos",
    "name": "Special Kurkure Momos Gravy",
    "price": "Half ₹105 · Full ₹210",
    "filename": "55_momos_special_kurkure_momos_gravy.jpg",
    "id": 55,
    "image": "images/55_momos_special_kurkure_momos_gravy.jpg"
  },
  {
    "category": "Momos",
    "name": "Paneer Momos (6 Pcs / 10 Pcs)",
    "price": "Half ₹80 · Full ₹130",
    "filename": "56_momos_paneer_momos_6_pcs_10_pcs.jpg",
    "id": 56,
    "image": "images/56_momos_paneer_momos_6_pcs_10_pcs.jpg"
  },
  {
    "category": "Momos",
    "name": "Paneer Momos Fried",
    "price": "Half ₹80 · Full ₹155",
    "filename": "57_momos_paneer_momos_fried.jpg",
    "id": 57,
    "image": "images/57_momos_paneer_momos_fried.jpg"
  },
  {
    "category": "Momos",
    "name": "Paneer Momos Gravy",
    "price": "Half ₹105 · Full ₹195",
    "filename": "58_momos_paneer_momos_gravy.jpg",
    "id": 58,
    "image": "images/58_momos_paneer_momos_gravy.jpg"
  },
  {
    "category": "Momos",
    "name": "Paneer Momos Kurkure",
    "price": "Half ₹105 · Full ₹195",
    "filename": "59_momos_paneer_momos_kurkure.jpg",
    "id": 59,
    "image": "images/59_momos_paneer_momos_kurkure.jpg"
  },
  {
    "category": "Momos",
    "name": "Special Paneer Momos Tandoori",
    "price": "Half ₹105 · Full ₹195",
    "filename": "60_momos_special_paneer_momos_tandoori.jpg",
    "id": 60,
    "image": "images/60_momos_special_paneer_momos_tandoori.jpg"
  },
  {
    "category": "Momos",
    "name": "Special Paneer Momos Afghani",
    "price": "Half ₹105 · Full ₹195",
    "filename": "61_momos_special_paneer_momos_afghani.jpg",
    "id": 61,
    "image": "images/61_momos_special_paneer_momos_afghani.jpg"
  },
  {
    "category": "Momos",
    "name": "Special Kurkure Momos Gravy (Paneer)",
    "price": "Half ₹105 · Full ₹210",
    "filename": "62_momos_special_kurkure_momos_gravy_paneer.jpg",
    "id": 62,
    "image": "images/62_momos_special_kurkure_momos_gravy_paneer.jpg"
  },
  {
    "category": "Chilli Chicken & Paneer",
    "name": "Chilli Chicken (Boneless) (8 Pcs / 16 Pcs)",
    "price": "Half ₹285 · Full ₹495",
    "filename": "63_chilli_chicken_and_paneer_chilli_chicken_boneless_8_pcs_16_pcs.jpg",
    "id": 63,
    "image": "images/63_chilli_chicken_and_paneer_chilli_chicken_boneless_8_pcs_16_pcs.jpg"
  },
  {
    "category": "Chilli Chicken & Paneer",
    "name": "Chilli Paneer (5 Pcs / 10 Pcs)",
    "price": "Half ₹195 · Full ₹365",
    "filename": "64_chilli_chicken_and_paneer_chilli_paneer_5_pcs_10_pcs.jpg",
    "id": 64,
    "image": "images/64_chilli_chicken_and_paneer_chilli_paneer_5_pcs_10_pcs.jpg"
  },
  {
    "category": "Chilli Chicken & Paneer",
    "name": "Honey Chilli Potato",
    "price": "Half ₹105 · Full ₹180",
    "filename": "65_chilli_chicken_and_paneer_honey_chilli_potato.jpg",
    "id": 65,
    "image": "images/65_chilli_chicken_and_paneer_honey_chilli_potato.jpg"
  },
  {
    "category": "Chilli Chicken & Paneer",
    "name": "Chilli Potato",
    "price": "Half ₹90 · Full ₹170",
    "filename": "66_chilli_chicken_and_paneer_chilli_potato.jpg",
    "id": 66,
    "image": "images/66_chilli_chicken_and_paneer_chilli_potato.jpg"
  }
];
