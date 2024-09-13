'use strict';
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {
  ...defaultSettings,
  ...overrideSettings,
};



// Виклик методів для перевірки
// console.log(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
console.log(finalSettings);
// console.log(bestScore);
// console.log(worstScore);


// console.log(atTheOldToad.addPotion("Healing Potion"));
