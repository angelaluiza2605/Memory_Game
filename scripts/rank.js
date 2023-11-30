function backPage() {
{
      window.history.back();
    }
  }

  const backButton = document.querySelector(".backButtom");
  backButton.addEventListener("click", backPage)