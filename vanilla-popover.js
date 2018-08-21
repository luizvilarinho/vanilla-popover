 window.onload=function(){
    let popoverObject={};
    popoverObject.verifyPopover=function(){
      popoverObject.element=document.querySelectorAll(".vanilla-popover-ico");
        if(popoverObject.element != undefined){
          return popoverObject;
        }
    }
    popoverObject.setPosition=function(){
      for(let i=0; i<popoverObject.element.length; i++){
        popoverObject.element[i].addEventListener('mouseover',function(){
          let popover=popoverObject.element[i];
          let pos=popover.getBoundingClientRect();
          let tela=window.innerWidth;
          let popoverId=popover.getAttribute("id");

            console.log(pos);
            console.log(tela);
            console.log(pos.left);
            console.log(pos.top);

            let popoverContainer = document.querySelector("div[data-popover=" + popoverId + "]");

              if(tela > 467){
                if(pos.left < tela/3 && tela > 467){
                  console.log("popoverEsquerda");
                  popoverContainer.classList.add('popoverEsquerda');

                  let top=pos.top + 30 +'px';
                  let left=pos.left + 'px';
                  popoverContainer.style.top = top;
                  popoverContainer.style.left = left;

                  popoverContainer.style.display='block';
                };

                if(pos.left > tela/3 && pos.left < (tela/3)*2 || tela < 467){
                  console.log("popoverCentro");
                  popoverContainer.classList.add('popoverCentro');

                  let top=pos.top + 30 +'px';
                  let left=pos.left - 210 + 'px';
                  popoverContainer.style.top = top;
                  popoverContainer.style.left = left;

                  popoverContainer.style.display='block';
                }

                if(pos.left > (tela/3)*2 && tela > 467){
                  console.log("popoverDireita");
                  popoverContainer.classList.add('popoverDireita');

                  let top=pos.top + 30 +'px';
                  let left=pos.left - 450 + 'px';
                  popoverContainer.style.top = top;
                  popoverContainer.style.left = left;

                  popoverContainer.style.display='block';
                }
              }else{
                console.log("popoverMobile");
                popoverContainer.classList.add('popoverMobile');

                let top=pos.top + 30 +'px';
                //let left=pos.left - 450 + 'px';
                popoverContainer.style.top = top;
                popoverContainer.style.width='100%';
                //popoverContainer.style.left = left;
                popoverContainer.style.display='block';
              }


        })
      }

      return popoverObject;
    }
    popoverObject.hide=function(){
    for(let i=0; i<popoverObject.element.length; i++){
          popoverObject.element[i].addEventListener('mouseout',function(){
              let popover=popoverObject.element[i];
            let popoverId=popover.getAttribute("id");
            let popoverContainer = document.querySelector("div[data-popover=" + popoverId + "]");
            popoverContainer.style.display='none';
          })
    }
    }
    popoverObject.verifyPopover().setPosition().hide();
  }
