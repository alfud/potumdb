function copyToClipboard(code) {
    navigator.clipboard.writeText(code).then(() => {
      showToast("Code copied to clipboard: " + code);
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  }

  function showToast(message) {
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    document.body.appendChild(toast);
    toast.classList.add("show");
    setTimeout(function() {
      toast.classList.remove("show");
      document.body.removeChild(toast);
    }, 3000);
  }