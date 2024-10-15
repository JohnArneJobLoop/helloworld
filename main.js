let teller = 0;

function endreTekst() {
  let p = document.getElementById("teksten");
  let b = document.getElementsByTagName("body");

  if (teller == 0) {
    p.innerHTML = "Hallo Verden!";
    p.style.background = "grey";
    teller += 1;
  } else if (teller === 1) {
    p.innerHTML = "Slutt å klikk!";
    teller +=1;
  } else if (teller == 2) {
    p.innerHTML = "SLUTT Å KLIKKE PÅ MEG, SA JEG!";
    p.style.fontSize="100px";
    p.style.color = "red";
    teller +=1;
  } else {
    p.innerHTML = "Ok. Du kan få klikke på meg :)";
    p.style.fontSize=b.style.fontSize;
    p.style.color = "blue";
    teller = 0;
  }
}