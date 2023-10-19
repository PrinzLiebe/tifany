let present = document.querySelector("#present");

let showPresent = (ev) => {
  let main = document.querySelector(".presentMode");
  document.querySelector(".open-menssage").remove();
  let btn = ev.currentTarget;
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let div = document.createElement("div");
  let shadowBox = document.querySelector(".shadowBox");

  p1.id = "paragOne";
  p1.className = "parag";
  p1.innerText =
    "Parabens Tifany muitas felicidades nesse dia mais que especial! Deus abençoe você e sua família nesse grande dia";

  p2.id = "paragTwo";
  p2.className = "parag";
  p2.innerText =
    "Obrigado por ser uma grande amiga desde os tempos de escola, você é uma pessoa muito especial para mim e espero poder comemorar muitos outros aniversários com você";

  p3.id = "paragThree";
  p3.className = "parag";
  p3.innerHTML =
    "Desejo tudo de bom para você e que possamos compartilhar ainda grandes momentos e conquistas!&#x1F496";

  div.id = "paragContainer";

  main.classList.remove("presentMode");
  main.classList.add("surpriseMode");

  btn.remove();

  div.append(p1, p2, p3);
  shadowBox.appendChild(div);
};

present.addEventListener("click", showPresent);
