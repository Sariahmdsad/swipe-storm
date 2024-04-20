let k =document.getElementById("cx")
let m = document.getElementById("ff");
let mm = document.getElementById("yt");
let mmm = document.getElementById("tr");
let mmmm = document.getElementById("ko");
let po =document.getElementById("popo")
function lo() {
  po.play("")
  let ll = Math.floor(Math.random() * 10) + 1;
  if (ll == 1) {
    m.innerText = "تاكل صلعه";
    mmm.innerText = "لحم ني";
  } else if (ll == 2) {
    m.innerText = "يموت الف شخص";
    mmm.innerText = "يموت الف طفل";
  } else if (ll == 3) {
    m.innerText = "تصدم بنت";
    mmm.innerText = "تصدم جمل";
  } else if (ll == 4) {
    m.innerText = "ترقص في مكان عام";
    mmm.innerText = "ت صارخ الساعةاثنعش اليل";
  } else if (ll == 5){
    m.innerText = "ذاكي بس غزام";
    mmm.innerText = "طوايل بس غبي";
  }else if (ll == 6) {
    m.innerText = "  تلبس سلحفاة ولا ";
    mmm.innerText = " دباب "  ;
  } else if (ll == 7) {
    m.innerText = " تاكل غيوم ولا ";
    mmm.innerText = " تاكل طيارة ";
  } else if (ll == 8) {
    m.innerText = " تمشي على الشمس ولا ";
    mmm.innerText = "على الماي ";
  } else if (ll == 9){
    m.innerText =" انك تاكل بيبسي ولا ";
    mmm.innerText = " تاكل حمضيات ";
  
  } else if (ll == 10) {
    m.innerText = " تشرب كبسة ولا ";
    mmm.innerText = " تشرب مشويات ";
  }
}