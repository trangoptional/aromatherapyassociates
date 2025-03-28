document.addEventListener("DOMContentLoaded", function () {
  // swiper banner
  // new Swiper(".banner-slider", {
  //   loop: true,
  //   autoplay: { delay: 3000, disableOnInteraction: false },
  //   pagination: { el: ".swiper-pagination", clickable: true },
  //   navigation: {
  //     nextEl: ".banner-next",
  //     prevEl: ".banner-prev",
  //   },
  // });

  // Swiper Best Seller
  new Swiper(".best-seller-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: ".best-seller-next",
      prevEl: ".best-seller-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 4, // Khi lớn hơn hoặc bằng 768px, hiển thị 4 slide
      },
      0: {
        slidesPerView: 1, // Khi màn hình nhỏ hơn 768px, hiển thị 1 slide
      }
    }
  });

  ////////
  var swiper = new Swiper(".blog-carousel__content__slide", {
    slidesPerView: 3, 
    spaceBetween: 10, 
    loop: true, 
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
    speed: 1000, 
  });

  // fake data list shop
  const shopList = document.getElementById("shop-list");

  const shops = [
    {
      id: 1,
      title: "DEEP RELAX BATH & SHOWER OIL",
      desc: "Experience a bath before bed with our iconic award-winner",
      img: "//www.aromatherapyassociates.com/cdn/shop/files/ATOMISER_AND_ROSE_PURE_ESSENTIAL_OIL_AND_CANDLE_1.png",
    },
    {
      id: 2,
      title: "DEEP RELAX SLEEP MIST",
      desc: "Switch off as you spritz your way to deep slumber",
      img: "//www.aromatherapyassociates.com/cdn/shop/files/rose_pink_clay_mask_texture.jpg",
    },
    {
      id: 3,
      title: "DEEP RELAX HOME FRAGRANCE",
      desc: "Let herbal, woody and earthy aromas carry you to the land of nod",
      img: "//www.aromatherapyassociates.com/cdn/shop/files/rose_bath_shower_oil_rose_shower_oil.png",
    },
    {
      id: 1,
      title: "DEEP RELAX BODY CARE",
      desc: "Cocoon in hydration with our spa-inspired Body Oils & Creams",
      img: "//www.aromatherapyassociates.com/cdn/shop/files/ATOMISER_AND_ROSE_PURE_ESSENTIAL_OIL_AND_CANDLE_1.png",
    },
  ];

  shops.forEach((shop) => {
    const shopCard = document.createElement("div");
    shopCard.classList.add("shop-card");

    shopCard.innerHTML = `
      <div class="shop-image">
        <img src="${shop.img}" alt="${shop.title}" />
      </div>
      <div class="shop-detail">
        <h4 class="shop-title">${shop.title}</h4>
        <div class="shop-desc">${shop.desc}</div>
        <button class="buy-button">SHOP NOW</button>
      </div>
    `;

    shopList.appendChild(shopCard);
  });
});
