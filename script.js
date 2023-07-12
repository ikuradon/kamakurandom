const changeColors = function () {
  const classList = [
    document.getElementById("logo").getElementsByClassName("ka"),
    document.getElementById("logo").getElementsByClassName("ma"),
    document.getElementById("logo").getElementsByClassName("ku"),
    document.getElementById("logo").getElementsByClassName("ra"),
    document.getElementById("logo").getElementsByClassName("overflow")
  ];
  for (let i = 0; i < classList.length; i++) {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    for (const element of classList[i]) {
      element.style.fill = color;
    }
  }
};

window.setInterval(changeColors, 1000);