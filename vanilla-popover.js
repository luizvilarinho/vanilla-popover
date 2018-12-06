function popoverVanilla() {

  let popoverObject = {};

  popoverObject.verifyPopover = function () {
    popoverObject.element = document.querySelectorAll(".vanilla-popover-ico");
    if (popoverObject.element != undefined) {
      return popoverObject;
    }
  }

  popoverObject.setPosition = function () {

    for (let i = 0; i < popoverObject.element.length; i++) {
      popoverObject.element[i].addEventListener('mouseover', function () {
        let popover = popoverObject.element[i];
        let pos = popover.getBoundingClientRect();
        let telaW = window.innerWidth;
        let telaH = window.innerHeight;
        let popoverId = popover.getAttribute("id");

        let posLeft = pos.left < telaW / 3;
        let posCenterW = pos.left > telaW / 3 && pos.left < (telaW / 3) * 2;
        let posRight = pos.left > (telaW / 3) * 2;
        let posBottom = pos.top > (telaH / 3) * 2;

        let popoverContainer = document.querySelector("div[data-popover=" + popoverId + "]");

        if (posBottom) {
          popoverContainer.classList.add("popoverBottom");
          if (telaW > 768) {
            if (posLeft) {
              popoverContainer.classList.add("popoverEsquerda");

              fadeIn(popoverContainer);

              let popoverContHeight = popoverContainer.offsetHeight;

              let top = pos.top - popoverContHeight + 'px';
              let left = pos.left + 35 + 'px';
              popoverContainer.style.top = top;
              popoverContainer.style.left = left;

            };

            if (posCenterW) {
              popoverContainer.classList.add("popoverCentro");

              fadeIn(popoverContainer);

              let popoverContWidth = popoverContainer.offsetWidth / 2 - 8; // valor 8 se refere a metade do tamanho do icone
              let popoverContHeight = popoverContainer.offsetHeight + 25;

              let top = pos.top - popoverContHeight + 'px';
              let left = pos.left - popoverContWidth + 'px';
              popoverContainer.style.top = top;
              popoverContainer.style.left = left;

            }

            if (posRight) {
              popoverContainer.classList.add("popoverDireita");

              fadeIn(popoverContainer);

              let popoverContWidth = popoverContainer.offsetWidth + 19; // 25px distancia - 16px do icone
              let popoverContHeight = popoverContainer.offsetHeight;

              let top = pos.top - popoverContHeight + 'px';
              let left = pos.left - popoverContWidth + 'px';
              popoverContainer.style.top = top;
              popoverContainer.style.left = left;

            }

          } else {
            popoverContainer.classList.add("popoverMobile");

            fadeIn(popoverContainer);

            let popoverContHeight = popoverContainer.offsetHeight + 9;
            let top = pos.top - popoverContHeight + 'px';
            popoverContainer.style.top = top;

          }
        } else {
          popoverContainer.classList.remove("popoverBottom");
          if (telaW > 768) {
            if (posLeft) {
              popoverContainer.classList.add("popoverEsquerda");

              fadeIn(popoverContainer);

              let top = pos.top + 10 + 'px';
              let left = pos.left + 35 + 'px';
              popoverContainer.style.top = top;
              popoverContainer.style.left = left;

            };

            if (posCenterW) {
              popoverContainer.classList.add("popoverCentro");

              fadeIn(popoverContainer);

              let popoverContWidth = popoverContainer.offsetWidth / 2 - 8; // valor 8 se refere a metade do tamanho do icone

              let top = pos.top + 40 + 'px';
              let left = pos.left - popoverContWidth + 'px';
              popoverContainer.style.top = top;
              popoverContainer.style.left = left;

            }

            if (posRight) {
              popoverContainer.classList.add("popoverDireita");

              fadeIn(popoverContainer);

              let popoverContWidth = popoverContainer.offsetWidth + 19; // 25px distancia - 16px do icone

              let top = pos.top + 10 + 'px';
              let left = pos.left - popoverContWidth + 'px';
              popoverContainer.style.top = top;
              popoverContainer.style.left = left;

            }

          } else {
            popoverContainer.classList.add("popoverMobile");

            fadeIn(popoverContainer);

            let top = pos.top + 25 + 'px';
            popoverContainer.style.top = top;

          }
        }

      });
    }

    return popoverObject;
  }

  popoverObject.hide = function () {
    for (let i = 0; i < popoverObject.element.length; i++) {
      let popover = popoverObject.element[i];
      let popoverId = popover.getAttribute("id");
      let popoverContainer = document.querySelector("div[data-popover=" + popoverId + "]");
      popoverObject.element[i].addEventListener('mouseout', function () {
        fadeOut(popoverContainer);
      });
      popoverContainer.addEventListener('click', function () {
        fadeOut(popoverContainer);
      });
    }
  }

  popoverObject.verifyPopover().setPosition().hide();

}

window.onload = function () {
  popoverVanilla();
}