var overlay = document.getElementById("frame-container");
var iframe = document.createElement("iframe");

function showIframe(url) {
  const pdfUrl = url.includes("#") ? `${url}&zoom=fit` : `${url}#zoom=fit`;
  iframe.id = "frame";
  iframe.src = "";
  setTimeout(() => {
    iframe.src = pdfUrl;
  }, 50);
  overlay.appendChild(iframe);
  overlay.style.display = "flex";
}

const closeButton = document.getElementById("close-button");

function closeIframe() {    
closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "none";
    iframe.src = "";
    iframe.remove();
});
}

