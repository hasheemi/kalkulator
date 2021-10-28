var display = $("#display");
$(document).ready(function () {
  $("#one").click(function () {
    document.forms.display.value += 1;
  });
  $("#two").click(function () {
    document.forms.display.value += 2;
  });
  $("#three").click(function () {
    document.forms.display.value += 3;
  });
  $("#four").click(function () {
    document.forms.display.value += 4;
  });
  $("#five").click(function () {
    document.forms.display.value += 5;
  });
  $("#six").click(function () {
    document.forms.display.value += 6;
  });
  $("#seven").click(function () {
    document.forms.display.value += 7;
  });
  $("#eight").click(function () {
    document.forms.display.value += 8;
  });
  $("#nine").click(function () {
    document.forms.display.value += 9;
  });
  $("#plus").click(function () {
    document.forms.display.value += "+";
  });
  $("#minus").click(function () {
    document.forms.display.value += "-";
  });
  $("#multi").click(function () {
    document.forms.display.value += "*";
  });
  $("#divide").click(function () {
    document.forms.display.value += "/";
  });
  $("#zero").click(function () {
    document.forms.display.value += 0;
  });
  $("#zero-d").click(function () {
    document.forms.display.value += "00";
  });
  $("#dot").click(function () {
    document.forms.display.value += ".";
  });
  $("#k-right").click(function () {
    document.forms.display.value = ")";
  });
  $("#k-left").click(function () {
    document.forms.display.value += "(";
  });
  $("#clear").click(function () {
    document.forms.display.value = "";
  });

  $("#equal").click(function () {
    if (document.forms.display.value == "") {
      alert("tolong masukkan angka ");
    } else {
      document.forms.display.value = eval(document.forms.display.value);
      // document.forms.display.value = Math.floor(eval(document.forms.display.value));
    }
  });
});
