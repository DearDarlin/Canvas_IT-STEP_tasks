function showMessage(button, text) {
      let message = document.createElement("div");
      let rect = button.getBoundingClientRect();
      
      message.className = "tooltip";
      message.textContent = text;
      button.appendChild(message);
      message.style.display = "block";

      if (rect.top < 60) {
        message.style.top = "120%";
        message.classList.add("bottom");
      } else {
        message.style.top = "-45px";
        message.classList.add("top");
      }
      button.onmouseleave = () => message.remove();
    }

    document.getElementById("btn1").onmouseenter = function () {
      showMessage(this, "Tool tip 1");
    };

    document.getElementById("btn2").onmouseenter = function () {
      showMessage(this, "Tool tip 2");
    };