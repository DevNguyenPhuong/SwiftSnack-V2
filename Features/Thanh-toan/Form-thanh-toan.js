// Bài 2
// tránh event mặc định nhấp enter thì reload lại trang
document
  .querySelector('form[name="frm1"]')
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Call the kiemTra() function for form validation
    var isFormValid = kiemTra();

    if (isFormValid) {
      // Form is valid, you can perform additional actions or submit the form
      this.submit(); // Submit the form
    }
  });

function kiemTra() {
  // var mssv = document.frm1.mssv.value;
  var ht = document.frm1.ht.value;
  var email = document.frm1.email.value;
  var phoneNumber = document.frm1.phone_number.value;
  var address = document.frm1.address.value;
  var bosung = document.frm1.bosung.value;
  var checkboxes = document.querySelectorAll('input[name="payment"]:checked');
  var payment = Array.from(checkboxes).map(function (checkbox) {
    return checkbox.value;
  });
  var loi = "";

  // if (mssv.length == 0) {
  //     loi = loi + "MSSV không được để trống <br>";
  //     document.frm1.mssv.classList.add("bg-warning");
  // }

  if (phoneNumber.length != 10) {
    loi = loi + "Số điện thoại không hợp lệ <br>";
    document.frm1.phone_number.classList.add("bg-warning");
  }

  if (ht.length <= 0 || ht.length > 30) {
    loi = loi + "Họ tên không được bỏ trống <br>";
    document.frm1.ht.classList.add("bg-warning");
  }

  if (address.length <= 0 || address.length > 100) {
    loi = loi + "Vui lòng nhập địa chỉ nhận hàng<br>";
    document.frm1.address.classList.add("bg-warning");
  }

  // var s = parseInt(mssv);
  if (email == "") {
    loi = loi + "Email không được để trống<br>";
    document.frm1.email.classList.add("bg-warning");
  }

  if (payment.length == 0) {
    loi = loi + "Bạn chưa chọ phương thức thanh toán<br>";
    document.getElementById("payment_input").classList.add("bg-warning");
  }

  if (bosung.length < 50 || bosung.length > 200) {
    loi = loi + "Hãy nhập Thông tin bổ sung ít hơn 200 ký tự";
    document.frm1.bosung.classList.add("bg-warning");
  }

  if (loi.length > 0) {
    document.getElementById("loi").innerHTML = loi;
  }
  return false;
}

/*function ganChuoiRong() {
  document.getElementById("loi").innerHTML = "";
}
setTimeout("ganChuoiRong()", 10000);*/
var cartTotal = localStorage.getItem("cartTotal");
document.querySelector(".payment-price").textContent = cartTotal;
