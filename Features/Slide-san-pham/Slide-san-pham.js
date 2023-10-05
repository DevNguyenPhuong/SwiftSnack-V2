const bai1_imgPosition = document.querySelectorAll(
  ".bai1_slider-container img"
);
const bai1_imgContainer = document.querySelector(".bai1_slider-container");
let bai1_imgNumber = bai1_imgPosition.length;
let bai1_index = 0;
document.getElementById("image-position").innerHTML =
  "Ảnh " + String(parseInt(bai1_index + 1)) + "/" + bai1_imgNumber;
bai1_imgPosition.forEach(function (bai1_image, bai1_index) {
  bai1_image.style.left = bai1_index * 100 + "%";
});

function bai1_imgSlide() {
  bai1_index++;
  if (bai1_index >= bai1_imgNumber) {
    bai1_index = 0;
  }
  bai1_slider(bai1_index);
}

function bai1_slider(bai1_index) {
  bai1_imgContainer.style.left = "-" + bai1_index * 100 + "%";
  document.getElementById("image-position").innerHTML =
    "Ảnh " + String(parseInt(bai1_index + 1)) + "/" + bai1_imgNumber;
}
setInterval(bai1_imgSlide, 5000);

function anhke() {
  bai1_index++;
  if (bai1_index >= bai1_imgNumber) {
    bai1_index = 0;
  }
  bai1_slider(bai1_index);
}

function anhtruoc() {
  bai1_index--;
  if (bai1_index < 0) {
    bai1_index = bai1_imgNumber - 1;
  }
  bai1_slider(bai1_index);
}
