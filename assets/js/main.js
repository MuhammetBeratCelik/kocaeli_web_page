document.addEventListener("DOMContentLoaded", () => {
  // Projedeki modülleri başlat
  initThemeToggle();
  initHeroSlider();
  initSideGuidePanel();
  initGallerySlider();
  initPlaceFilters();
  initFormValidation();
  initMobileMenu();
});

// Koyu/Açık Tema Seçici ve localStorage yönetimi
function initThemeToggle() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeToggleIcon = document.getElementById("themeToggleIcon");
  if (!themeToggleBtn || !themeToggleIcon) return;

  // localStorage'dan kayıtlı temayı oku ve uygula
  const currentTheme = localStorage.getItem("theme") || "light";
  
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggleIcon.textContent = "🌙";
  } else {
    document.body.classList.remove("dark-mode");
    themeToggleIcon.textContent = "☀️";
  }

  // Butona tıklandığında tetiklenir
  themeToggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    
    // Geçiş efekti micro-animation
    themeToggleIcon.style.transform = "rotate(360deg)";
    setTimeout(() => {
      themeToggleIcon.style.transform = "";
    }, 300);

    if (isDark) {
      document.body.classList.remove("dark-mode");
      themeToggleIcon.textContent = "☀️";
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-mode");
      themeToggleIcon.textContent = "🌙";
      localStorage.setItem("theme", "dark");
    }
  });
}

// Giriş alanındaki ana fotoğraf sliderı
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-progress-dot");
  if (slides.length === 0) return;

  let currentSlide = 0;
  const slideIntervalTime = 4500; // 4.5 saniye otomatik geçiş
  let sliderInterval = null;

  // Slaytı indekse göre gösterir
  function showHeroSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => {
      dot.classList.remove("active");
      // Elementin animasyonunu sıfırlamak için reflow tetikle
      const fill = dot.querySelector(".hero-progress-fill");
      if (fill) {
        fill.style.animation = 'none';
        dot.offsetHeight; // reflow tetikleme
        fill.style.animation = null;
      }
    });

    slides[index].classList.add("active");
    if (dots[index]) {
      dots[index].classList.add("active");
    }
    currentSlide = index;
  }

  // Sonraki Slayta Geç
  function nextHeroSlide() {
    let nextIndex = currentSlide + 1;
    if (nextIndex >= slides.length) {
      nextIndex = 0;
    }
    showHeroSlide(nextIndex);
  }

  // Otomatik Slider Başlat
  function startHeroSlider() {
    sliderInterval = setInterval(nextHeroSlide, slideIntervalTime);
  }

  // Otomatik Slider Sıfırla
  function resetHeroSlider() {
    clearInterval(sliderInterval);
    startHeroSlider();
  }

  // Gösterge noktalarına tıklama
  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const target = e.target.closest(".hero-progress-dot");
      const targetIndex = parseInt(target.getAttribute("data-slide"));
      showHeroSlide(targetIndex);
      resetHeroSlider(); // Elle geçildiğinde süreyi sıfırlar
    });
  });

  // Slider'ı başlat
  startHeroSlider();
}

// Sağ kenarda açılan gezi rehberi paneli
function initSideGuidePanel() {
  const sideGuideBtn = document.getElementById("sideGuideBtn");
  const sideGuidePanel = document.getElementById("sideGuidePanel");
  const panelClose = document.getElementById("panelClose");

  if (!sideGuideBtn || !sideGuidePanel) return;

  // Paneli Aç
  sideGuideBtn.addEventListener("click", () => {
    sideGuidePanel.classList.add("open");
    sideGuidePanel.setAttribute("aria-hidden", "false");
  });

  // Paneli Kapat
  if (panelClose) {
    panelClose.addEventListener("click", () => {
      sideGuidePanel.classList.remove("open");
      sideGuidePanel.setAttribute("aria-hidden", "true");
    });
  }

  // Panel dışına tıklandığında paneli otomatik kapat
  document.addEventListener("click", (e) => {
    if (!sideGuidePanel.contains(e.target) && 
        !sideGuideBtn.contains(e.target) && 
        sideGuidePanel.classList.contains("open")) {
      sideGuidePanel.classList.remove("open");
      sideGuidePanel.setAttribute("aria-hidden", "true");
    }
  });
}

// Alt kısımdaki resim galerisi sliderı
function initGallerySlider() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const btnPrev = document.getElementById("sliderPrev");
  const btnNext = document.getElementById("sliderNext");
  const sliderWrapper = document.querySelector(".slider-wrapper");

  if (slides.length === 0) return;

  let currentSlideIndex = 0;
  let autoplayTimer = null;
  const slideDuration = 4000;

  function showSlide(index) {
    if (index >= slides.length) {
      currentSlideIndex = 0;
    } else if (index < 0) {
      currentSlideIndex = slides.length - 1;
    } else {
      currentSlideIndex = index;
    }

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[currentSlideIndex].classList.add("active");
    if (dots[currentSlideIndex]) {
      dots[currentSlideIndex].classList.add("active");
    }
  }

  function nextSlide() {
    showSlide(currentSlideIndex + 1);
  }

  function prevSlide() {
    showSlide(currentSlideIndex - 1);
  }

  function startAutoplay() {
    if (!autoplayTimer) {
      autoplayTimer = setInterval(nextSlide, slideDuration);
    }
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      nextSlide();
      stopAutoplay();
      startAutoplay();
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      prevSlide();
      stopAutoplay();
      startAutoplay();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const index = parseInt(e.target.getAttribute("data-index"));
      showSlide(index);
      stopAutoplay();
      startAutoplay();
    });
  });

  if (sliderWrapper) {
    sliderWrapper.addEventListener("mouseenter", stopAutoplay);
    sliderWrapper.addEventListener("mouseleave", startAutoplay);
  }

  showSlide(0);
  startAutoplay();
}

// Gezilecek yerler için filtreleme sistemi
function initPlaceFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const placeCards = document.querySelectorAll(".place-card");

  if (filterButtons.length === 0 || placeCards.length === 0) return;

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      placeCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");

        if (filterValue === "all" || cardCategory === filterValue) {
          card.classList.remove("hide");
          card.classList.add("fade-in");
        } else {
          card.classList.add("hide");
          card.classList.remove("fade-in");
        }
      });
    });
  });
}

// İletişim formu kontrolü ve karakter sayacı
function initFormValidation() {
  const form = document.getElementById("contactForm");
  const charNumSpan = document.getElementById("charNum");
  const messageTextarea = document.getElementById("message");

  if (!form) return;

  // Sayaç
  if (messageTextarea && charNumSpan) {
    messageTextarea.addEventListener("input", () => {
      const length = messageTextarea.value.length;
      charNumSpan.textContent = length;
      
      if (length >= 10) {
        charNumSpan.style.color = "";
      } else {
        charNumSpan.style.color = "var(--color-error)";
      }
    });
  }

  // Validation
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const subjectSelect = document.getElementById("subject");
    const formStatus = document.getElementById("formStatus");

    let isFormValid = true;

    // Ad Soyad
    if (fullNameInput.value.trim() === "") {
      showError(fullNameInput, "Ad ve Soyad alanı boş bırakılamaz.");
      isFormValid = false;
    } else {
      showSuccess(fullNameInput);
    }

    // E-posta
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailValue === "") {
      showError(emailInput, "E-posta adresi boş bırakılamaz.");
      isFormValid = false;
    } else if (!emailPattern.test(emailValue)) {
      showError(emailInput, "Lütfen geçerli bir e-posta adresi giriniz (örnek: ad@soyad.com).");
      isFormValid = false;
    } else {
      showSuccess(emailInput);
    }

    // Konu
    if (subjectSelect.value === "") {
      showError(subjectSelect, "Lütfen mesaj gönderme amacınızı seçiniz.");
      isFormValid = false;
    } else {
      showSuccess(subjectSelect);
    }

    // Mesaj
    const messageValue = messageTextarea.value.trim();
    if (messageValue === "") {
      showError(messageTextarea, "Mesaj alanı boş bırakılamaz.");
      isFormValid = false;
    } else if (messageValue.length < 10) {
      showError(messageTextarea, `Mesajınız en az 10 karakter olmalıdır. (Şu an: ${messageValue.length} karakter)`);
      isFormValid = false;
    } else {
      showSuccess(messageTextarea);
    }

    // Sonuç Gösterimi
    if (isFormValid) {
      formStatus.className = "form-alert success";
      formStatus.innerHTML = `<strong>Başarılı!</strong> Öneri ve mesajınız başarıyla kaydedilmiştir. Teşekkür ederiz, ${escapeHTML(fullNameInput.value)}.`;
      formStatus.style.display = "block";
      
      form.reset();
      charNumSpan.textContent = "0";
      
      const formGroups = form.querySelectorAll(".form-group");
      formGroups.forEach(group => {
        group.classList.remove("valid", "invalid");
      });
      
      setTimeout(() => {
        formStatus.style.display = "none";
      }, 7000);
      
    } else {
      formStatus.className = "form-alert error";
      formStatus.innerHTML = `<strong>Hata!</strong> Lütfen formdaki kırmızı alanları düzeltip tekrar deneyiniz.`;
      formStatus.style.display = "block";
    }
  });

  function showError(inputElement, errorMessage) {
    const formGroup = inputElement.parentElement;
    formGroup.classList.add("invalid");
    formGroup.classList.remove("valid");
    
    const errorSpan = formGroup.querySelector(".error-feedback");
    if (errorSpan) {
      errorSpan.textContent = errorMessage;
      errorSpan.style.display = "block";
    }
  }

  function showSuccess(inputElement) {
    const formGroup = inputElement.parentElement;
    formGroup.classList.add("valid");
    formGroup.classList.remove("invalid");
    
    const errorSpan = formGroup.querySelector(".error-feedback");
    if (errorSpan) {
      errorSpan.textContent = "";
      errorSpan.style.display = "none";
    }
  }

  function escapeHTML(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
  }
}

// Mobil menü açma/kapama ve scroll takibi
function initMobileMenu() {
  const navToggle = document.getElementById("navToggle");
  const navBar = document.getElementById("navBar");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!navToggle || !navBar) return;

  navToggle.addEventListener("click", () => {
    const isOpen = navBar.classList.contains("open");
    
    if (isOpen) {
      navBar.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    } else {
      navBar.classList.add("open");
      navToggle.classList.add("open");
      navToggle.setAttribute("aria-expanded", "true");
    }
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(item => item.classList.remove("active"));
      link.classList.add("active");

      if (navBar.classList.contains("open")) {
        navBar.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Sayfa yüklendiğinde mevcut scroll durumunu denetle
  const header = document.querySelector(".header");
  if (header && window.scrollY > 50) {
    header.classList.add("header-scrolled");
  }

  window.addEventListener("scroll", () => {
    // Header Kaydırma Durumu Takibi
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    }

    let currentSectionId = "";
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}
