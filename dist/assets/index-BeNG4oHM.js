(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
document.querySelector(".user-nav__profile");
const contactBtn = document.querySelector(".contact__btn");
document.querySelector(".signin-form__btn-item-lgn");
const formSignin$1 = document.querySelector(".signin");
const formLogin$1 = document.querySelector(".login");
const modalWindow = document.querySelector(".modal-window");
const overlay$1 = document.querySelector(".overlay");
const close = document.querySelectorAll(".modal-window__exit");
document.querySelector(".animation-play");
const btnCncl = document.querySelector(".login-form__btn-cncl");
const scrollOff$1 = document.body;
contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalWindow.classList.remove("hidden");
  overlay$1.classList.remove("hidden");
  modalWindow.classList.add("animation-play");
  scrollOff$1.style.overflow = "hidden";
});
close.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    if (confirm("exit?")) {
      formSignin$1.classList.add("hidden");
      formSignin$1.classList.remove("animation-play");
      formLogin$1.classList.add("hidden");
      formLogin$1.classList.remove("animation-play");
      modalWindow.classList.add("hidden");
      modalWindow.classList.remove("animation-play");
      scrollOff$1.style.overflow = "scroll";
      overlay$1.classList.add("hidden");
    }
  });
});
overlay$1.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("exit?")) {
    formSignin$1.classList.add("hidden");
    formSignin$1.classList.remove("animation-play");
    formLogin$1.classList.add("hidden");
    formLogin$1.classList.remove("animation-play");
    modalWindow.classList.add("hidden");
    modalWindow.classList.remove("animation-play");
    scrollOff$1.style.overflow = "scroll";
    overlay$1.classList.add("hidden");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!overlay$1.classList.contains("hidden")) {
      if (confirm("exit?")) {
        formSignin$1.classList.add("hidden");
        formSignin$1.classList.remove("animation-play");
        formLogin$1.classList.add("hidden");
        formLogin$1.classList.remove("animation-play");
        modalWindow.classList.add("hidden");
        modalWindow.classList.remove("animation-play");
        scrollOff$1.style.overflow = "scroll";
        overlay$1.classList.add("hidden");
      }
    }
  }
});
btnCncl.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("exit?")) {
    formLogin$1.classList.add("hidden");
    formLogin$1.classList.remove("animation-play");
    scrollOff$1.style.overflow = "scroll";
    overlay$1.classList.add("hidden");
  }
});
const areaItem = document.querySelector(".form__area-item");
let counterNumb = document.querySelector(".counter__numb");
areaItem.addEventListener("input", (e) => {
  counterNumb.innerHTML = areaItem.value.length;
});
const accBtn = document.querySelectorAll(".accordion__btn");
accBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.classList.toggle("accordion__active");
    let exam = btn.classList.contains("accordion__active");
    let pActive = btn.nextElementSibling;
    console.log(pActive);
    if (!exam) {
      pActive.style.maxHeight = 0;
    } else {
      pActive.style.display = "block";
      pActive.style.maxHeight = pActive.scrollHeight + "px";
    }
  });
});
const nav = document.querySelector(".nav");
const banner = document.querySelector(".banner");
const navHeight = nav.getBoundingClientRect().height;
const callback = (entries) => {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
const options$1 = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
};
const headerObserve = new IntersectionObserver(callback, options$1);
headerObserve.observe(banner);
const btnProfile = document.querySelector(".user-nav__profile");
document.querySelector(".contact__btn");
const btnLogin = document.querySelector(".signin-form__btn-item-lgn");
const formSignin = document.querySelector(".signin");
const formLogin = document.querySelector(".login");
document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
document.querySelectorAll(".modal-window__exit");
document.querySelector(".animation-play");
const scrollOff = document.body;
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  formLogin.classList.remove("hidden");
  formSignin.classList.add("hidden");
  formLogin.classList.add("animation-play");
  formSignin.classList.remove("animation-play");
  scrollOff.style.overflow = "hidden";
});
btnProfile.addEventListener("click", (e) => {
  e.preventDefault();
  formSignin.classList.remove("hidden");
  formSignin.classList.add("animation-play");
  overlay.classList.remove("hidden");
  scrollOff.style.overflow = "hidden";
});
const spanPassEye = document.querySelectorAll(".form__eye");
const passSg = document.getElementById("password-sg");
const passLg1 = document.getElementById("password-lg1");
const passLg2 = document.getElementById("password-lg2");
const btnReg = document.querySelector(".login-form__btn-reg");
const inpPas = document.querySelector(".login-form__inp-pas");
const inpCnfPas = document.querySelector(".login-form__inp-cnf-pas");
const lgnChbx = document.querySelector(".login-form__chbx");
const nickname = document.getElementById("nickname");
const emailLg = document.getElementById("email-lg");
const loverSymbol = /[a-z]/g;
const upperSymbol = /[A-Z]/g;
const numbSymbol = /[0-9]/g;
const wngItms = document.querySelectorAll(".login__warning");
const [wngItm1, wngItm2, wngItm3, wngItm4] = wngItms;
const verifLgnChbx = function(e) {
  if (lgnChbx.checked) {
    wngItm1.classList.add("hidden");
    return true;
  } else {
    e.preventDefault();
  }
};
const verifNickname = function(e) {
  if (nickname.value.length >= 5) {
    nickname.style.border = "1px solid #0f0";
    wngItm1.classList.add("hidden");
    return true;
  } else {
    e.preventDefault();
    nickname.style.border = "1px solid #f00";
    wngItm1.classList.remove("hidden");
  }
};
const verifEmailLg = function(e) {
  if (emailLg.value.length >= 10) {
    emailLg.style.border = "1px solid #0f0";
    wngItm2.classList.add("hidden");
    return true;
  } else {
    e.preventDefault();
    emailLg.style.border = "1px solid #f00";
    wngItm2.classList.remove("hidden");
  }
};
const comparePass = function(e) {
  if (inpPas.value === inpCnfPas.value && inpPas.value.match(loverSymbol) && inpPas.value.match(upperSymbol) && inpPas.value.match(numbSymbol) && inpPas.value.length >= 5) {
    inpPas.style.border = "1px solid #0f0";
    inpCnfPas.style.border = "1px solid #0f0";
    wngItm3.classList.add("hidden");
    wngItm4.classList.add("hidden");
    return true;
  } else {
    e.preventDefault();
    inpPas.style.border = "1px solid #f00";
    inpCnfPas.style.border = "1px solid #f00";
    console.log(false);
    wngItm3.classList.remove("hidden");
    wngItm4.classList.remove("hidden");
  }
};
btnReg.addEventListener("click", (e) => {
  verifLgnChbx(e);
  verifNickname(e);
  verifEmailLg(e);
  comparePass(e);
  if (verifLgnChbx(e) && verifNickname(e) && verifEmailLg(e) && comparePass(e)) {
    alert("Регистарция прошла успешно ");
  } else {
    alert("В одном из полей допущена ошибка");
  }
});
spanPassEye.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    element.classList.toggle("close-eye");
    const open = element.classList.toggle("open-eye");
    if (open) {
      passSg.setAttribute("type", "text");
      passLg1.setAttribute("type", "text");
      passLg2.setAttribute("type", "text");
    } else {
      passSg.setAttribute("type", "password");
      passLg1.setAttribute("type", "password");
      passLg2.setAttribute("type", "password");
    }
  });
});
const imgListItems = document.querySelectorAll(".gallery__list-item");
document.querySelectorAll(".gallery__img-item");
const arrowLeft = document.querySelector(".arrow-left-img");
const arrowRight = document.querySelector(".arrow-right-img");
let currentSlide = 0;
const maxSlides = imgListItems.length;
function movingSlide(element) {
  imgListItems.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - element) * 110}%)`;
    slide.style.transition = "all 0.9s";
  });
}
movingSlide(0);
function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 3;
  } else {
    currentSlide--;
  }
  movingSlide(currentSlide);
}
function nextSlide() {
  if (currentSlide === maxSlides - 3) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  movingSlide(currentSlide);
}
arrowLeft.addEventListener("click", prevSlide);
arrowRight.addEventListener("click", nextSlide);
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft")
    prevSlide();
  if (e.key === "ArrowRight")
    nextSlide();
});
document.querySelector(".block-hidden-lazy");
const allSection = document.querySelectorAll(".section");
const appearanceSection = function(entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting)
    return;
  entry.target.classList.remove("block-hidden-lazy");
  observer.unobserve(entry.target);
};
const sectionObserveOptions = {
  root: null,
  threshold: 0.3
  // rootMargin: 0,
};
const sectionObserve = new IntersectionObserver(appearanceSection, sectionObserveOptions);
allSection.forEach((section) => {
  section.classList.add("block-hidden-lazy");
  sectionObserve.observe(section);
});
const lazyImages = document.querySelectorAll("img[data-src]");
const loadImages = function(entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting)
    return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function() {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};
const lazyImagesObserver = new IntersectionObserver(loadImages, { root: null, threshold: 0.7 });
lazyImages.forEach((img) => {
  lazyImagesObserver.observe(img);
});
const menuList = document.querySelector(".menu__list");
menuList.addEventListener("click", function(e) {
  e.preventDefault();
  if (e.target.classList.contains("menu__link")) {
    console.log(e.target);
    const href = e.target.getAttribute("href");
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  }
});
const headList = document.querySelector(".table-menu__head-list");
const tableBL = document.querySelector(".table-menu__body-list");
const titleCurrentDate = document.querySelector(".current-date");
let clickCount = 0;
const url = "https://www.cbr-xml-daily.ru/daily_json.js";
const options = [];
const promiseFetch = fetch(url, [options]);
promiseFetch.then(function(response) {
  return response.json();
}).then((data) => {
  const objectValutes = Object.entries(data.Valute);
  let date = new Date(data.Date);
  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  titleCurrentDate.insertAdjacentHTML("beforeend", `${day}.${month}.${year}`);
  let voluteList = [];
  objectValutes.forEach((valute) => {
    voluteList.push(valute[1]);
  });
  voluteList.forEach((valute, index) => {
    let currencyDiff = valute.Value / valute.Previous * 100;
    let percent = 100 - currencyDiff;
    let currentArrow = "";
    if (percent > 0) {
      currentArrow = "arrow-vl-up";
    } else if (percent < 0) {
      currentArrow = "arrow-vl-down";
    } else {
      return "";
    }
    tableBL.innerHTML += `
        <tr class="table-menu__row">
            <td class="table-menu__col">${index + 1}</td>
            <td class="table-menu__col">${valute.CharCode}</td>
            <td class="table-menu__col">${valute.Name}</td>
           
            <td class="table-menu__col">${valute.Nominal}</td>
            <td class="table-menu__col">${valute.NumCode}</td>
            <td class="table-menu__col">${valute.Value}<span class="arrow-vl ${currentArrow}">${percent.toFixed(3)}%</span></td>
        </tr>
        `;
  });
}).then(() => {
  headList.addEventListener("click", function(e) {
    e.preventDefault();
    clickCount++;
    const rows = Array.from(document.querySelectorAll(".table-menu__row"));
    if (clickCount % 2 === 0) {
      rows.sort((a, b) => {
        if (e.target.dataset.position == 1 || e.target.dataset.position == 2) {
          const aValue = a.querySelectorAll(".table-menu__col")[e.target.dataset.position].innerText;
          const bValue = b.querySelectorAll(".table-menu__col")[e.target.dataset.position].innerText;
          return aValue.localeCompare(bValue);
        } else {
          const aValue = parseFloat(a.querySelectorAll(".table-menu__col")[e.target.dataset.position].innerText);
          const bValue = parseFloat(b.querySelectorAll(".table-menu__col")[e.target.dataset.position].innerText);
          return aValue - bValue;
        }
      });
    } else {
      rows.sort((a, b) => {
        if (e.target.dataset.position == 1 || e.target.dataset.position == 2) {
          const aValue = a.querySelectorAll(".table-menu__col")[e.target.dataset.position].innerText;
          const bValue = b.querySelectorAll(".table-menu__col")[e.target.dataset.position].innerText;
          return bValue.localeCompare(aValue);
        } else {
          const aValue = parseFloat(a.querySelectorAll(".table-menu__col")[e.target.dataset.position].innerText);
          const bValue = parseFloat(b.querySelectorAll(".table-menu__col")[e.target.dataset.position].innerText);
          return bValue - aValue;
        }
      });
    }
    const tableBody = document.querySelector(".table-menu__body-list");
    rows.forEach((row) => tableBody.appendChild(row));
  });
}).catch((error) => {
  console.error("Error", error);
});
