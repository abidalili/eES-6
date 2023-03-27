const selectFontSize = document.getElementById("selectFrontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetBtn = document.getElementById("resetBtn");
const mainElement = document.querySelector("main");

const setValues = (fontSize, BgColor) => {
  selectFontSize.value = fontSize;
  selectBgColor.value = BgColor;
  mainElement.style.fontSize = fontSize;
  mainElement.style.backgroundColor = BgColor;
};
//loadLocalStorageValue
const initialSetup = () => {
  const fontSize = localStorage.getItem("fontSize");
  const BgColor = localStorage.getItem("backgroundColor");
  if (fontSize && BgColor) {
    setValues(fontSize, BgColor);
  }
  if (!fontSize && !BgColor) {
    setValues("16px", "Light Gray");
  }
  if (!BgColor && fontSize) {
    setValues(fontSize, "Light Gray");
    if (!fontSize && BgColor) {
      setValues("16px", BgColor);
    }
  }
};

//change font-size
const changeFontSize = (event) => {
  const selectedFontSize = event.target.value;
  mainElement.style.fontSize = selectedFontSize;
  localStorage.setItem("fontSize", selectedFontSize);
};
//change bg color
const changeBgColor = (event) => {
  const selectedBackgroundColor = event.target.value;
  mainElement.style.backgroundColor = selectedBackgroundColor;
  localStorage.setItem("backgroundColor", selectedBackgroundColor);
};

//clearLocalStorage
const clearLocalStorage = () => {
  localStorage.removeItem("fontSize");
  localStorage.removeItem("backgroundColor");
  setValues("16px", "Light Gray");
};
//add eventListener
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetBtn.addEventListener("click", clearLocalStorage);

initialSetup();
