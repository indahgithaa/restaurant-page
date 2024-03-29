(() => {
  "use strict";
  var e = {};
  function t() {
    const e = document.createElement("div");
    e.setAttribute("class", " breakfastDiv");
    const t = [
      new n(
        "Sweet Pumpkin Pancakes",
        "Naturally sweetened pancakes made with mashed organic pumpkin, cinnamon, and ginger. Served with fresh berries and honey. <br/><br/>Vegan, Gluten-free, Contains soy",
        "$12.30"
      ),
      new n(
        "Raspberry Chia English Muffin",
        "Fluffy and low-sugar English muffin dotted with fresh raspberries and crunchy chia seeds. Served with homemade berry jam. <br/><br/>Gluten-free, Contains egg",
        "$11.00"
      ),
      new n(
        "Guacamole",
        "Made fresh with avocadoes, onions, tomatoes, cilantro, and jalapeno. Served with lime juice. <br/><br/>Vegan, Request no onion",
        "$12.60"
      ),
      new n(
        "Sourdough Toast",
        "Available topping: <ul><li>Homemade tropical fruits jam</li><li>Unsweetened almond butter</li><li>unsweetened peanut butter</ul>",
        "$2.00"
      ),
    ];
    function i(t) {
      const n = document.createElement("div"),
        i = document.createElement("h3"),
        a = document.createElement("p"),
        o = document.createElement("p"),
        d = document.createElement("div");
      (i.textContent = t.getName()),
        (a.textContent = t.getPrice()),
        (o.innerHTML = t.getDesc()),
        d.appendChild(i),
        d.appendChild(a),
        n.appendChild(d),
        n.appendChild(o),
        i.setAttribute("id", "foodMenuName"),
        a.setAttribute("id", "foodMenuPrice"),
        o.setAttribute("id", "foodMenuDesc"),
        n.setAttribute("id", "subMenuDiv"),
        e.appendChild(n);
    }
    for (let e = 0; e < t.length; e++) i(t[e]);
    return e;
  }
  (e.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (() => {
      var t;
      e.g.importScripts && (t = e.g.location + "");
      var n = e.g.document;
      if (!t && n && (n.currentScript && (t = n.currentScript.src), !t)) {
        var i = n.getElementsByTagName("script");
        i.length && (t = i[i.length - 1].src);
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (e.p = t);
    })();
  class n {
    constructor(e, t, n) {
      (this.name = e), (this.description = t), (this.price = n);
    }
    getName = () => this.name;
    getDesc = () => this.description;
    getPrice = () => this.price;
  }
  class i {
    constructor(e, t, n) {
      (this.name = e), (this.description = t), (this.price = n);
    }
    getName = () => this.name;
    getDesc = () => this.description;
    getPrice = () => this.price;
  }
  class a {
    constructor(e, t, n) {
      (this.name = e), (this.description = t), (this.price = n);
    }
    getName = () => this.name;
    getDesc = () => this.description;
    getPrice = () => this.price;
  }
  class o {
    constructor(e, t) {
      (this.name = e), (this.price = t);
    }
    getName = () => this.name;
    getPrice = () => this.price;
  }
  const d = document.querySelector("#content");
  function r() {
    const e = document.createElement("div"),
      n = document.createElement("h1"),
      r = document.createElement("p"),
      c = document.createElement("div"),
      s = document.createElement("div"),
      l = document.createElement("div"),
      m = document.createElement("li"),
      u = document.createElement("li"),
      p = document.createElement("li"),
      h = document.createElement("li"),
      g = document.createElement("a"),
      b = document.createElement("a"),
      f = document.createElement("a"),
      C = document.createElement("a");
    m.appendChild(g),
      u.appendChild(b),
      p.appendChild(f),
      h.appendChild(C),
      s.appendChild(m),
      s.appendChild(u),
      s.appendChild(p),
      s.appendChild(h),
      c.appendChild(n),
      c.appendChild(r),
      e.setAttribute("class", "menuPage"),
      c.setAttribute("id", "titleWrap"),
      n.setAttribute("id", "menuTitle"),
      r.setAttribute("id", "titleDesc"),
      s.setAttribute("id", "menuCategory"),
      l.setAttribute("id", "menuDiv"),
      (n.textContent = "MENU"),
      (r.innerHTML =
        "For delivery in central areas, minimum order of $30 with an additional delivery fee (start from $3). <span>Free delivery for orders above $80. </span>Please WhatsApp us at least three hours before delivery time. <br/><br/>For further information about ingredients, orders, delivery, or anything, don't hesitate to <a href='#contact' id='ctcMenu'>contact us.</a>"),
      (g.textContent = "All Day Breakfast"),
      (b.textContent = "Main"),
      (f.textContent = "Snacks"),
      (C.textContent = "Beverages"),
      e.appendChild(c),
      e.appendChild(s),
      e.appendChild(l),
      d.appendChild(e);
    const E = document.querySelectorAll("#menuCategory a");
    E.forEach((e) => {
      e.addEventListener("click", (e) => {
        E.forEach((t) => {
          (e.target.style.color = "var(--color-4)"),
            (t.style.color = "var(--color-6)");
        });
      });
    }),
      (g.style.color = "var(--color-4)"),
      l.appendChild(t()),
      g.addEventListener("click", () => {
        (l.innerHTML = ""), l.appendChild(t());
      }),
      b.addEventListener("click", () => {
        (l.innerHTML = ""),
          l.appendChild(
            (function () {
              const e = document.createElement("div");
              e.setAttribute("class", " subMenuDiv");
              const t = [
                new i(
                  "Tom Yum Vermicelli (soup/stir-fried)",
                  "Gluten-free brown rice vermicelli cooked with Thai tom yum homemade seasonings. Available options: soup and stir-fried. <br/><br/>Gluten-free, Vegan, Contains soy",
                  "$11.20"
                ),
                new i(
                  "Vegetable Caponata",
                  "Slow cooked caponata with arugula and tomato salad, tossed with a creamy vegan Caesar dressing. <br/><br/> Vegan, Contains nuts, Request for no garlic and onions",
                  "$15.80"
                ),
                new i(
                  "Vegetable Urap",
                  "Traditional steamed vegetables (bean sprouts, yardlong bean, spinach) mixed with Indonesian grated coconut seasonings. <br/><br/> Vegan",
                  "$9.80"
                ),
                new i(
                  "Mushroom Aglio Olio",
                  "Pasta cooked with fresh garlic, oregano, basil, and parsley. Dressed up with sautéed mushrooms.<br/><br/> Vegan",
                  "$11.30"
                ),
                new i(
                  "Kombu Shiitake Soup",
                  "A savory and nutritious soup made with kombu seaweed, dried shiitake mushrooms, mirin, shoyu, and ginger.<br/><br/> Vegan",
                  "$12.80"
                ),
                new i(
                  "Egg and Potato Salad",
                  "Pan-fried potatoes with cherry tomatoes, fresh herbs, and soft-boiled egg. Served with vegan permesan cheese and honey mustard dressing.<br/><br/>Contains egg",
                  "$13.00"
                ),
                new i(
                  "Lemon-Herb Portobello Mushrooms",
                  "Grilled portobello mushroom in olive oil, parsley, and basil. Served with herbs and lemon juice.<br/><br/> Vegan",
                  "$14.30"
                ),
                new i(
                  "Tomato Risotto",
                  "Creamy risotto made with fresh tomatoes and brown rice. Shimmered in vegetable stock with fresh herbs. <br/><br/> Vegan",
                  "$13.20"
                ),
              ];
              function n(t) {
                const n = document.createElement("div"),
                  i = document.createElement("h3"),
                  a = document.createElement("p"),
                  o = document.createElement("p"),
                  d = document.createElement("div");
                (i.textContent = t.getName()),
                  (a.textContent = t.getPrice()),
                  (o.innerHTML = t.getDesc()),
                  d.appendChild(i),
                  d.appendChild(a),
                  n.appendChild(d),
                  n.appendChild(o),
                  i.setAttribute("id", "foodMenuName"),
                  a.setAttribute("id", "foodMenuPrice"),
                  o.setAttribute("id", "foodMenuDesc"),
                  n.setAttribute("id", "subMenuDiv"),
                  e.appendChild(n);
              }
              for (let e = 0; e < t.length; e++) n(t[e]);
              return e;
            })()
          );
      }),
      f.addEventListener("click", () => {
        (l.innerHTML = ""),
          l.appendChild(
            (function () {
              const e = document.createElement("div");
              e.setAttribute("class", " breakfastDiv");
              const t = [
                new a(
                  "Fruit Rojak",
                  "Fresh tropical fruits served with a homemade sweet, spicy, and sour Indonesian rojak sauce. <br/><br/>Vegan",
                  "$7.50"
                ),
                new a(
                  "Dumplings (fried/steamed)",
                  "8pcs of freshly steamed or golden pan-fried dumplings filled with soft tofu and vegetables. Drizzled with sesame oil. <br/><br/>Vegan, Contains nuts",
                  "$10.00"
                ),
                new a(
                  "Fried Spring Rolls",
                  "2pcs of golden fried homemade rolls filled with carrots, mushrooms, bean sprouts, tofu, and turnips. Served with sweet and tangy classic Vietnamese dipping sauce. <br/><br/>Contains soy, Vegan",
                  "$6.00"
                ),
                new a(
                  "Mixed Fruits Pie",
                  "A slice of soft and naturally sweetened pie made from self-raising flour, topped with homemade berry jam and mixed seasonal fruits. <br/><br/>Gluten-free, Contains egg",
                  "$6.00"
                ),
              ];
              function n(t) {
                const n = document.createElement("div"),
                  i = document.createElement("h3"),
                  a = document.createElement("p"),
                  o = document.createElement("p"),
                  d = document.createElement("div");
                (i.textContent = t.getName()),
                  (a.textContent = t.getPrice()),
                  (o.innerHTML = t.getDesc()),
                  d.appendChild(i),
                  d.appendChild(a),
                  n.appendChild(d),
                  n.appendChild(o),
                  i.setAttribute("id", "foodMenuName"),
                  a.setAttribute("id", "foodMenuPrice"),
                  o.setAttribute("id", "foodMenuDesc"),
                  n.setAttribute("id", "subMenuDiv"),
                  e.appendChild(n);
              }
              for (let e = 0; e < t.length; e++) n(t[e]);
              return e;
            })()
          );
      }),
      C.addEventListener("click", () => {
        (C.style.color = "var(--color-4)"),
          (l.innerHTML = ""),
          l.appendChild(
            (function () {
              const e = document.createElement("div"),
                t = document.createElement("div"),
                n = document.createElement("div"),
                i = document.createElement("div"),
                a = document.createElement("h2"),
                d = document.createElement("h2"),
                r = document.createElement("h2");
              (a.textContent = "Coffee and Chocolate"),
                (r.textContent = "Organic Tea"),
                (d.textContent = "Cold-Pressed Juice"),
                t.appendChild(a),
                n.appendChild(d),
                i.appendChild(r);
              const c = [
                  new o("Espresso", "$4.30"),
                  new o("Hot/Iced Latte", "$6.50"),
                  new o("Hot Chocolate", "$7.20"),
                  new o("Cappuccino", "$6.50"),
                ],
                s = [
                  new o("Black Tea", "$4.50"),
                  new o("Green Tea", "$5.00"),
                  new o("Dandelion", "$7.00"),
                  new o("Chamomile", "$7.00"),
                  new o("Earl Grey", "$7.00"),
                ],
                l = [
                  new o("Apple", "$8.50"),
                  new o("Orange", "$8.00"),
                  new o("Carrot", "$11.00"),
                  new o("Carrot, Orange, Pineapple", "$11.50"),
                  new o("Green Vegetable Mix", "$10.00"),
                ];
              function m(e) {
                const t = document.createElement("div"),
                  n = document.createElement("h3"),
                  i = document.createElement("p");
                return (
                  (n.textContent = e.getName()),
                  (i.textContent = e.getPrice()),
                  t.appendChild(n),
                  t.appendChild(i),
                  n.setAttribute("id", "foodMenuName"),
                  i.setAttribute("id", "foodMenuPrice"),
                  t.setAttribute("id", "subMenuDiv"),
                  (t.style.marginBottom = "10px"),
                  (i.style.marginTop = "0"),
                  t
                );
              }
              for (let e = 0; e < c.length; e++) t.appendChild(m(c[e]));
              for (let e = 0; e < s.length; e++) i.appendChild(m(s[e]));
              for (let e = 0; e < l.length; e++) n.appendChild(m(l[e]));
              return (
                e.appendChild(t),
                e.appendChild(i),
                e.appendChild(n),
                e.classList.add("beveragePage"),
                e
              );
            })()
          );
      }),
      (document.querySelector("#ctcMenu").onclick = (e) => {
        e.preventDefault(), P.click();
      });
  }
  const c = e.p + "img/pin-1584fcc96d0d9230c33c",
    s = e.p + "img/time-e67bda3acc9f8e1c0df0",
    l = e.p + "img/call-9a5e4f270f617cddd71b",
    m = e.p + "img/facebook-db7b89f230d4a4ce7f52",
    u = e.p + "img/instagram-125b2304e1b85a789e0f",
    p = e.p + "img/email-95ad9d0e43f88ed651f8";
  class h {
    constructor(e, t) {
      (this.icon = e), (this.info = t);
    }
    getIcon = () => this.icon;
    getInfo = () => this.info;
  }
  const g = e.p + "img/leaf-54eab5aad80000208c3c",
    b = document.querySelector("#content"),
    f = document.createElement("h1"),
    C = document.createElement("img");
  function E() {
    const e = document.createElement("div"),
      t = document.createElement("div"),
      n = document.createElement("div"),
      i = document.createElement("div"),
      a = document.createElement("h3"),
      o = document.createElement("h4"),
      d = document.createElement("p"),
      r = document.createElement("a");
    function c(e) {
      const t = document.createElement("div"),
        i = document.createElement("a");
      i.setAttribute("id", "creatorName"),
        (i.textContent = e.getName()),
        t.appendChild(i),
        n.appendChild(t);
    }
    (a.textContent = "Source"),
      (r.textContent = "Repo on GitHub"),
      (r.href = "https://github.com/lemonaisu888/restaurant-page"),
      (o.innerHTML = "Restaurant Page by Lemonice <br/> 2022"),
      (d.innerHTML =
        "This is only a fictional site. <br/> Created with Webpack and Vanilla JavaScript. <br/>Check out this repository on GitHub!"),
      e.setAttribute("id", "footerWrap"),
      t.setAttribute("id", "footerc1"),
      n.setAttribute("id", "footerc2"),
      i.setAttribute("id", "footerc3"),
      r.setAttribute("id", "repo");
    const s = [
      new v("Hermes Rivera, Unsplash"),
      new v("Dylan Nolte, Unsplash"),
      new v("Eiliv Aceron, Unsplash"),
      new v("Those Icons, Flaticon"),
    ];
    t.appendChild(f),
      t.appendChild(C),
      t.appendChild(o),
      n.appendChild(a),
      i.appendChild(d),
      i.appendChild(r);
    for (let e = 0; e < s.length; e++) c(s[e]);
    e.appendChild(t), e.appendChild(n), e.appendChild(i), b.appendChild(e);
  }
  f.setAttribute("id", "restonameF"),
    C.setAttribute("id", "leafF"),
    (f.textContent = "PureHut"),
    (C.src = g);
  class v {
    constructor(e) {
      this.name = e;
    }
    getName = () => this.name;
  }
  const w = e.p + "img/menu-bar-b18ca1c3ea68a687942e",
    y = document.createElement("div"),
    A = document.createElement("ul"),
    k = document.createElement("li"),
    L = document.createElement("li"),
    x = document.createElement("li"),
    M = document.createElement("li"),
    T = document.createElement("a"),
    $ = document.createElement("a"),
    P = document.createElement("a"),
    S = document.createElement("h1"),
    H = document.createElement("img"),
    D = document.createElement("img");
  function N() {
    const e = document.querySelector("#content");
    e.appendChild(A);
    const t = document.querySelectorAll("#switchdiv a");
    t.forEach((e) => {
      e.addEventListener("click", (e) => {
        t.forEach((t) => {
          e.target.classList.add("active"), t.classList.remove("active");
        });
      }),
        e.classList.contains("active")
          ? (e.style.color = "var(--color-3)")
          : (e.style.color = "var(--color-6)");
    }),
      window.addEventListener("scroll", () => {
        document.documentElement.scrollTop > 20
          ? A.classList.add("sticky")
          : A.classList.remove("sticky"),
          A.classList.contains("sticky")
            ? ((A.style.background = "white"), (A.style.height = "70px"))
            : ((A.style.background = "none"), (A.style.height = "80px"));
      });
    const n = window.matchMedia("(max-width: 840px)");
    function i() {
      D.addEventListener("click", () => {
        "0px" == y.style.marginLeft
          ? (y.style.marginLeft = "-200%")
          : (y.style.marginLeft = "0px");
      });
    }
    S.addEventListener("click", () => {
      window.location.reload();
    }),
      n.matches && i(),
      L.addEventListener("click", () => {
        window.scrollTo(0, 0),
          (e.innerHTML = ""),
          N(),
          r(),
          E(),
          n.matches &&
            ((y.style.marginLeft = "-200%"),
            i(),
            (y.style.transition = "all 0.3s ease"));
      }),
      k.addEventListener("click", () => {
        window.location.reload(), window.scrollTo(0, 0);
      }),
      x.addEventListener("click", (t) => {
        window.scrollTo(0, 0),
          t.preventDefault(),
          (e.innerHTML = ""),
          N(),
          (P.style.color = "var(--color-3)"),
          (function () {
            const e = document.querySelector("#content"),
              t = document.createElement("div"),
              n = document.createElement("div"),
              i = document.createElement("div"),
              a = document.createElement("div"),
              o = document.createElement("form"),
              d = document.createElement("input"),
              r = document.createElement("input"),
              g = document.createElement("textArea"),
              b = document.createElement("label"),
              f = document.createElement("label"),
              C = document.createElement("label"),
              E = document.createElement("button"),
              v = document.createElement("h3"),
              w = document.createElement("p"),
              y = document.createElement("div"),
              A = document.createElement("img"),
              k = document.createElement("img"),
              L = document.createElement("img");
            function x(e) {
              const t = document.createElement("div"),
                n = document.createElement("img"),
                i = document.createElement("p");
              (n.src = e.getIcon()),
                (i.textContent = e.getInfo()),
                t.setAttribute("id", "contact"),
                t.appendChild(n),
                t.appendChild(i),
                a.appendChild(t);
            }
            t.setAttribute("class", "contactpage"),
              n.setAttribute("id", "contactdiv"),
              i.setAttribute("id", "messagediv"),
              E.setAttribute("id", "sendBtn"),
              a.setAttribute("id", "infoDiv"),
              v.setAttribute("id", "ctcUs"),
              w.setAttribute("id", "ctcUsDesc"),
              L.setAttribute("id", "igIcon"),
              k.setAttribute("id", "mailIcon"),
              A.setAttribute("id", "fbIcon"),
              y.setAttribute("id", "belowIcon"),
              (b.textContent = "Name"),
              (f.textContent = "Phone"),
              (C.textContent = "Message"),
              (E.textContent = "SEND"),
              (v.textContent = "Contact Us"),
              (w.innerHTML =
                "Wanna give your feedback? It would be greatly appreciated. You can also check our menu availability via WhatsApp."),
              (A.src = m),
              (k.src = p),
              (L.src = u),
              o.appendChild(b),
              o.appendChild(d),
              o.appendChild(f),
              o.appendChild(r),
              o.appendChild(C),
              o.appendChild(g),
              o.appendChild(E);
            const M = [
              new h(l, "+628123456789"),
              new h(s, "08.00 - 20.00"),
              new h(c, "18 Sudirman Street, Denpasar"),
            ];
            a.appendChild(v), a.appendChild(w);
            for (let e = 0; e < M.length; e++) x(M[e]);
            y.appendChild(A),
              y.appendChild(L),
              y.appendChild(k),
              a.appendChild(y),
              i.appendChild(o),
              n.appendChild(i),
              n.appendChild(a),
              t.appendChild(n),
              e.appendChild(t);
          })(),
          E(),
          n.matches &&
            ((y.style.transition = "all 0.3s ease"),
            (y.style.marginLeft = "-200%"),
            i());
      });
  }
  A.setAttribute("class", "navbar-container"),
    y.setAttribute("id", "switchdiv"),
    S.setAttribute("id", "restoname"),
    H.setAttribute("id", "leaf"),
    D.setAttribute("id", "navIconImg"),
    (D.src = w),
    (T.textContent = "Home"),
    ($.textContent = "Menu"),
    (P.textContent = "Contact"),
    (S.textContent = "PureHut"),
    (H.src = g),
    T.setAttribute("href", "#home"),
    $.setAttribute("href", "#menu"),
    P.setAttribute("href", "#contact"),
    S.setAttribute("href", "#home"),
    k.appendChild(T),
    L.appendChild($),
    x.appendChild(P),
    M.appendChild(S),
    y.appendChild(k),
    y.appendChild(L),
    y.appendChild(x),
    A.appendChild(D),
    A.appendChild(y),
    A.appendChild(S),
    A.appendChild(H),
    A.classList.add("hiddenY");
  const I = e.p + "img/food1-fix-544a946bf907edc7adb2",
    V = e.p + "img/checked-7198b37246110e828fde",
    W = e.p + "img/knife-and-fork-6fa3c7c1273fa0a7482f",
    F = e.p + "img/lettuce-c36284b6806d2b240cba",
    q = e.p + "img/vegetables-70556a9f28f179e2ea8f",
    U = e.p + "img/pumpkin-pancakes-62c6bd686457af2f033a",
    G = e.p + "img/tomyum-78db52ee345e4c91b7c0",
    R = e.p + "img/vege-caponata-05b47dea783ac886f406",
    Y = document.querySelector("#content");
  class j {
    constructor(e, t, n) {
      (this.icon = e), (this.headings = t), (this.details = n);
    }
    getIcon = () => this.icon;
    getHeadings = () => this.headings;
    getDetails = () => this.details;
  }
  class O {
    constructor(e, t, n) {
      (this.pic = e), (this.foodName = t), (this.price = n);
    }
    getPic = () => this.pic;
    getName = () => this.foodName;
    getPrice = () => this.price;
  }
  window.onload = () => {
    window.scrollTo(0, 0),
      N(),
      (T.style.color = "var(--color-3)"),
      (function () {
        const e = document.createElement("div");
        e.setAttribute("class", "homepage");
        const t = document.createElement("div"),
          n = document.createElement("h1"),
          i = document.createElement("button");
        i.setAttribute("id", "expBtn"),
          t.setAttribute("id", "welcomingWrap"),
          n.setAttribute("id", "welcoming"),
          (n.innerHTML =
            "The Goodness of <span> Real Foods </span> for Your Healthier Life"),
          (i.textContent = "Explore Our Menu"),
          t.appendChild(n),
          t.appendChild(i),
          n.classList.add("hiddenX"),
          i.classList.add("hiddenYUp"),
          i.addEventListener("click", () => {
            window.scrollTo(0, 0), $.click();
          });
        const a = document.createElement("div"),
          o = document.createElement("h1"),
          d = document.createElement("p"),
          r = document.createElement("div"),
          c = document.createElement("img");
        a.setAttribute("class", "secondHome"),
          c.setAttribute("src", I),
          c.setAttribute("id", "secondImg"),
          o.setAttribute("id", "secondTitle"),
          r.setAttribute("id", "captionWrap"),
          (o.innerHTML = "Back to the <span>Wholeness</span>"),
          (d.innerHTML =
            "The food we put in our body can impacts our health and well-being. It plays a big role in our lives. <br/><br/> We're committed to promoting healthy diets based on whole foods with balanced nutritions for your body and supporting you to maintain your healthy lifestyle."),
          o.classList.add("hiddenY"),
          d.classList.add("hiddenX"),
          r.appendChild(o),
          r.appendChild(d),
          a.appendChild(r),
          a.appendChild(c);
        const s = document.createElement("div"),
          l = document.createElement("h1"),
          m = document.createElement("div");
        function u(e) {
          const t = document.createElement("div"),
            n = document.createElement("img"),
            i = document.createElement("h1"),
            a = document.createElement("p");
          t.setAttribute("id", "card"),
            n.setAttribute("id", "icon"),
            i.setAttribute("id", "headings"),
            a.setAttribute("id", "details"),
            (n.src = e.getIcon()),
            (i.textContent = e.getHeadings()),
            (a.textContent = e.getDetails()),
            t.appendChild(n),
            t.appendChild(i),
            t.appendChild(a),
            t.classList.add("hiddenYUp"),
            m.appendChild(t),
            s.appendChild(m);
        }
        s.setAttribute("class", "thirdHome"),
          l.setAttribute("id", "thirdTitle"),
          m.setAttribute("id", "cardWrap"),
          (l.innerHTML = "WHAT WE <span> OFFER </span>"),
          l.classList.add("hiddenY"),
          s.appendChild(l);
        const p = [
          new j(
            q,
            "100% Whole Foods",
            "We're all about promoting a whole foods lifestyle. That means eating natural, limiting processed foods and avoiding additives in daily basis. We never add any funky additives and preservatives in our food — we serve foods as natural and healthy as possible."
          ),
          new j(
            W,
            "All Diets-Friendly",
            "Do you have special dietary needs, like a vegan diet? Are you looking for halal menu? We've got you covered. We make sure our real foods are safe for everyone, and we even provide important information about each dish in our menu."
          ),
          new j(
            F,
            "Homemade Ingredients",
            "From traditional seasonings, homemade sauces and jams, to our authentic noodles and pasta which made from raw and organic materials, we are always dedicated to making our food using traditional methods, avoiding unnecessary modifications and ultra-processed ingredients."
          ),
          new j(
            V,
            "Customable Menu",
            "If you're intolerant to gluten, allergic to certain foods, avoiding garlic, onions and some kinds of ingredients, we are ready to provide you with safe options. Don't hesitate to let us know if you have any special requests for your food! "
          ),
        ];
        for (let e = 0; e < p.length; e++) u(p[e]);
        const h = document.createElement("div"),
          g = document.createElement("h1"),
          b = document.createElement("div");
        function f(e) {
          const t = document.createElement("div"),
            n = document.createElement("img"),
            i = document.createElement("p"),
            a = document.createElement("p");
          b.setAttribute("id", "foodCardWrap"),
            t.setAttribute("id", "foodCard"),
            n.setAttribute("id", "foodPic"),
            i.setAttribute("id", "foodName"),
            a.setAttribute("id", "foodPrice"),
            (n.src = e.getPic()),
            (i.textContent = e.getName()),
            (a.textContent = e.getPrice()),
            t.appendChild(n),
            t.appendChild(i),
            t.appendChild(a),
            t.classList.add("hiddenX"),
            b.appendChild(t),
            h.appendChild(b);
        }
        h.setAttribute("class", "fourthHome"),
          g.setAttribute("id", "fourthTitle"),
          (g.innerHTML = "OUR <span> STAR </span> MENU"),
          g.classList.add("hiddenY"),
          h.appendChild(g);
        const C = [
          new O(U, "Sweet Pumpkin Pancakes", "$12.30"),
          new O(G, "Tom Yum Vermicelli", "$11.20"),
          new O(R, "Vegetable Caponata", "$15.80"),
        ];
        for (let e = 0; e < C.length; e++) f(C[e]);
        e.appendChild(t),
          e.appendChild(a),
          e.appendChild(s),
          e.appendChild(h),
          Y.appendChild(e);
        const E = new IntersectionObserver((e) => {
            e.forEach((e) => {
              console.log(e),
                e.isIntersecting && e.target.classList.add("showX");
            });
          }),
          v = new IntersectionObserver((e) => {
            e.forEach((e) => {
              console.log(e),
                e.isIntersecting && e.target.classList.add("showY");
            });
          }),
          w = document.querySelectorAll(".hiddenX"),
          y = document.querySelectorAll(".hiddenXright"),
          A = document.querySelectorAll(".hiddenY"),
          k = document.querySelectorAll(".hiddenYUp");
        w.forEach((e) => E.observe(e)),
          y.forEach((e) => E.observe(e)),
          A.forEach((e) => v.observe(e)),
          k.forEach((e) => v.observe(e));
      })(),
      E();
  };
})();
