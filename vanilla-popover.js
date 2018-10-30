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

        console.log(pos);
        console.log(telaW);
        console.log("telaH", telaH);
        console.log(pos.left);
        console.log(pos.top);

        let popoverContainer = document.querySelector("div[data-popover=" + popoverId + "]");

        if (posBottom) {
          if (telaW > 768) {
            if (posLeft) {
              popoverContainer.classList.add("popoverEsquerda");
              console.log("popoverEsquerda");

              //popoverContainer.style.display = 'block';
              $(popoverContainer).fadeIn();

              let popoverContHeight = popoverContainer.offsetHeight + 9; // 25px distancia - 16px do icone

              let top = pos.top - popoverContHeight + 'px';
              let left = pos.left + 25 + 'px';
              popoverContainer.style.top = top;
              popoverContainer.style.left = left;

            };

            if (posCenterW) {
              popoverContainer.classList.add("popoverCentro");
              console.log("popoverCentro");

              //popoverContainer.style.display = 'block';
              $(popoverContainer).fadeIn();

              let popoverContWidth = popoverContainer.offsetWidth / 2 - 8; // valor 8 se refere a metade do tamanho do icone
              let popoverContHeight = popoverContainer.offsetHeight + 9; // 25px distancia - 16px do icone

              let top = pos.top - popoverContHeight + 'px';
              let left = pos.left - popoverContWidth + 'px';
              popoverContainer.style.top = top;
              popoverContainer.style.left = left;

            }

            if (posRight) {
              popoverContainer.classList.add("popoverDireita");
              console.log("popoverDireita");

              //popoverContainer.style.display = 'block';
              $(popoverContainer).fadeIn();

              let popoverContWidth = popoverContainer.offsetWidth + 9; // 25px distancia - 16px do icone
              let popoverContHeight = popoverContainer.offsetHeight + 9; // 25px distancia - 16px do icone

              let top = pos.top - popoverContHeight + 'px';
              let left = pos.left - popoverContWidth + 'px';
              popoverContainer.style.top = top;
              popoverContainer.style.left = left;

            }

          } else {
            popoverContainer.classList.add("popoverMobile");
            console.log("popoverMobile");

            //popoverContainer.style.display = 'block';
            $(popoverContainer).fadeIn();

            let popoverContHeight = popoverContainer.offsetHeight + 9;
            let top = pos.top - popoverContHeight + 'px';
            popoverContainer.style.top = top;

          }
        } else {
          if (telaW > 768) {
            if (posLeft) {
              popoverContainer.classList.add("popoverEsquerda");
              console.log("popoverEsquerda");

              //popoverContainer.style.display = 'block';
              $(popoverContainer).fadeIn();

              let top = pos.top + 25 + 'px';
              let left = pos.left + 25 + 'px';
              popoverContainer.style.top = top;
              popoverContainer.style.left = left;

            };

            if (posCenterW) {
              popoverContainer.classList.add("popoverCentro");
              console.log("popoverCentro");

              //popoverContainer.style.display = 'block';
              $(popoverContainer).fadeIn();

              let popoverContWidth = popoverContainer.offsetWidth / 2 - 8; // valor 8 se refere a metade do tamanho do icone

              let top = pos.top + 25 + 'px';
              let left = pos.left - popoverContWidth + 'px';
              popoverContainer.style.top = top;
              popoverContainer.style.left = left;

            }

            if (posRight) {
              popoverContainer.classList.add("popoverDireita");
              console.log("popoverDireita");

              //popoverContainer.style.display = 'block';
              $(popoverContainer).fadeIn();

              let popoverContWidth = popoverContainer.offsetWidth + 9; // 25px distancia - 16px do icone
              console.log(popoverContWidth);

              let top = pos.top + 25 + 'px';
              let left = pos.left - popoverContWidth + 'px';
              popoverContainer.style.top = top;
              popoverContainer.style.left = left;

            }

          } else {
            popoverContainer.classList.add("popoverMobile");
            console.log("popoverMobile");

            //popoverContainer.style.display = 'block';
            $(popoverContainer).fadeIn();

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
        $(popoverContainer).fadeOut("fast");
      });
      $(popoverContainer).click(function () {
        $(popoverContainer).fadeOut("fast");
      });
    }
  }

  popoverObject.verifyPopover().setPosition().hide();

}

window.onload = function () {
  popoverVanilla();
}