(()=>{"use strict";var e={};function t(){const e=document.createElement("div");e.setAttribute("class"," breakfastDiv");const t=[new n("Sweet Pumpkin Pancakes","Naturally sweetened pancakes made with mashed organic pumpkin, cinnamon, and ginger. Served with fresh berries and honey. <br/><br/>Vegan, Gluten-free, Contains soy","$12.30"),new n("Raspberry Chia English Muffin","Fluffy and low-sugar English muffin dotted with fresh raspberries and crunchy chia seeds. Served with homemade berry jam. <br/><br/>Gluten-free, Contains egg","$11.00"),new n("Guacamole","Made fresh with avocadoes, onions, tomatoes, cilantro, and jalapeno. Served with lime juice. <br/><br/>Vegan, Request no onion","$12.60"),new n("Sourdough Toast","Available topping: <ul><li>Homemade tropical fruits jam</li><li>Unsweetened almond butter</li><li>unsweetened peanut butter</ul>","$2.00")];function i(t){const n=document.createElement("div"),i=document.createElement("h3"),a=document.createElement("p"),o=document.createElement("p"),r=document.createElement("div");i.textContent=t.getName(),a.textContent=t.getPrice(),o.innerHTML=t.getDesc(),r.appendChild(i),r.appendChild(a),n.appendChild(r),n.appendChild(o),i.setAttribute("id","foodMenuName"),a.setAttribute("id","foodMenuPrice"),o.setAttribute("id","foodMenuDesc"),n.setAttribute("id","subMenuDiv"),e.appendChild(n)}for(let e=0;e<t.length;e++)i(t[e]);return e}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();class n{constructor(e,t,n){this.name=e,this.description=t,this.price=n}getName=()=>this.name;getDesc=()=>this.description;getPrice=()=>this.price}class i{constructor(e,t,n){this.name=e,this.description=t,this.price=n}getName=()=>this.name;getDesc=()=>this.description;getPrice=()=>this.price}class a{constructor(e,t,n){this.name=e,this.description=t,this.price=n}getName=()=>this.name;getDesc=()=>this.description;getPrice=()=>this.price}class o{constructor(e,t){this.name=e,this.price=t}getName=()=>this.name;getPrice=()=>this.price}const r=e.p+"img/pin-279174f3c728a9e8ff4a",d=e.p+"img/time-1bffcfccd1637cb3d046",c=e.p+"img/call-1160486779c87f7d797c",l=e.p+"img/facebook-ae029ab7b556e342b1ed",s=e.p+"img/instagram-0f12ab85ae2cdf15ebcb",m=e.p+"img/email-afa9e1d46e54c22d89b7";class u{constructor(e,t){this.icon=e,this.info=t}getIcon=()=>this.icon;getInfo=()=>this.info}const p=document.querySelector("#content");function h(){const e=document.createElement("div"),n=document.createElement("h1"),r=document.createElement("p"),d=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div"),s=document.createElement("li"),m=document.createElement("li"),u=document.createElement("li"),h=document.createElement("li"),b=document.createElement("a"),g=document.createElement("a"),C=document.createElement("a"),f=document.createElement("a");s.appendChild(b),m.appendChild(g),u.appendChild(C),h.appendChild(f),c.appendChild(s),c.appendChild(m),c.appendChild(u),c.appendChild(h),d.appendChild(n),d.appendChild(r),e.setAttribute("class","menuPage"),d.setAttribute("id","titleWrap"),n.setAttribute("id","menuTitle"),r.setAttribute("id","titleDesc"),c.setAttribute("id","menuCategory"),l.setAttribute("id","menuDiv"),n.textContent="MENU",r.innerHTML="For delivery in central areas, minimum order of $30 with an additional delivery fee (start from $3). <span>Free delivery for orders above $80. </span>Please WhatsApp us at least three hours before delivery time. <br/><br/>For further information about ingredients, orders, delivery, or anything, don't hesitate to <a href='#contact' id='ctcMenu'>contact us.</a>",b.textContent="All Day Breakfast",g.textContent="Main",C.textContent="Snacks",f.textContent="Beverages",e.appendChild(d),e.appendChild(c),e.appendChild(l),p.appendChild(e);const E=document.querySelectorAll("#menuCategory a");E.forEach((e=>{e.addEventListener("click",(e=>{E.forEach((t=>{e.target.style.color="var(--color-4)",t.style.color="var(--color-6)"}))}))})),b.style.color="var(--color-4)",l.appendChild(t()),b.addEventListener("click",(()=>{l.innerHTML="",l.appendChild(t())})),g.addEventListener("click",(()=>{l.innerHTML="",l.appendChild(function(){const e=document.createElement("div");e.setAttribute("class"," subMenuDiv");const t=[new i("Tom Yum Vermicelli (soup/stir-fried)","Gluten-free brown rice vermicelli cooked with Thai tom yum homemade seasonings. Available options: soup and stir-fried. <br/><br/>Gluten-free, Vegan, Contains soy","$11.20"),new i("Vegetable Caponata","Slow cooked caponata with arugula and tomato salad, tossed with a creamy vegan Caesar dressing. <br/><br/> Vegan, Contains nuts, Request for no garlic and onions","$15.80"),new i("Vegetable Urap","Traditional steamed vegetables (bean sprouts, yardlong bean, spinach) mixed with Indonesian grated coconut seasonings. <br/><br/> Vegan","$9.80"),new i("Mushroom Aglio Olio","Pasta cooked with fresh garlic, oregano, basil, and parsley. Dressed up with sautéed mushrooms.<br/><br/> Vegan","$11.30"),new i("Kombu Shiitake Soup","A savory and nutritious soup made with kombu seaweed, dried shiitake mushrooms, mirin, shoyu, and ginger.<br/><br/> Vegan","$12.80"),new i("Egg and Potato Salad","Pan-fried potatoes with cherry tomatoes, fresh herbs, and soft-boiled egg. Served with vegan permesan cheese and honey mustard dressing.<br/><br/>Contains egg","$13.00"),new i("Lemon-Herb Portobello Mushrooms","Grilled portobello mushroom in olive oil, parsley, and basil. Served with herbs and lemon juice.<br/><br/> Vegan","$14.30"),new i("Tomato Risotto","Creamy risotto made with fresh tomatoes and brown rice. Shimmered in vegetable stock with fresh herbs. <br/><br/> Vegan","$13.20")];function n(t){const n=document.createElement("div"),i=document.createElement("h3"),a=document.createElement("p"),o=document.createElement("p"),r=document.createElement("div");i.textContent=t.getName(),a.textContent=t.getPrice(),o.innerHTML=t.getDesc(),r.appendChild(i),r.appendChild(a),n.appendChild(r),n.appendChild(o),i.setAttribute("id","foodMenuName"),a.setAttribute("id","foodMenuPrice"),o.setAttribute("id","foodMenuDesc"),n.setAttribute("id","subMenuDiv"),e.appendChild(n)}for(let e=0;e<t.length;e++)n(t[e]);return e}())})),C.addEventListener("click",(()=>{l.innerHTML="",l.appendChild(function(){const e=document.createElement("div");e.setAttribute("class"," breakfastDiv");const t=[new a("Fruit Rojak","Fresh tropical fruits served with a homemade sweet, spicy, and sour Indonesian rojak sauce. <br/><br/>Vegan","$7.50"),new a("Dumplings (fried/steamed)","8pcs of freshly steamed or golden pan-fried dumplings filled with soft tofu and vegetables. Drizzled with sesame oil. <br/><br/>Vegan, Contains nuts","$10.00"),new a("Fried Spring Rolls","2pcs of golden fried homemade rolls filled with carrots, mushrooms, bean sprouts, tofu, and turnips. Served with sweet and tangy classic Vietnamese dipping sauce. <br/><br/>Contains soy, Vegan","$6.00"),new a("Mixed Fruits Pie","A slice of soft and naturally sweetened pie made from self-raising flour, topped with homemade berry jam and mixed seasonal fruits. <br/><br/>Gluten-free, Contains egg","$6.00")];function n(t){const n=document.createElement("div"),i=document.createElement("h3"),a=document.createElement("p"),o=document.createElement("p"),r=document.createElement("div");i.textContent=t.getName(),a.textContent=t.getPrice(),o.innerHTML=t.getDesc(),r.appendChild(i),r.appendChild(a),n.appendChild(r),n.appendChild(o),i.setAttribute("id","foodMenuName"),a.setAttribute("id","foodMenuPrice"),o.setAttribute("id","foodMenuDesc"),n.setAttribute("id","subMenuDiv"),e.appendChild(n)}for(let e=0;e<t.length;e++)n(t[e]);return e}())})),f.addEventListener("click",(()=>{f.style.color="var(--color-4)",l.innerHTML="",l.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),a=document.createElement("h2"),r=document.createElement("h2"),d=document.createElement("h2");a.textContent="Coffee and Chocolate",d.textContent="Organic Tea",r.textContent="Cold-Pressed Juice",t.appendChild(a),n.appendChild(r),i.appendChild(d);const c=[new o("Espresso","$4.30"),new o("Hot/Iced Latte","$6.50"),new o("Hot Chocolate","$7.20"),new o("Cappuccino","$6.50")],l=[new o("Black Tea","$4.50"),new o("Green Tea","$5.00"),new o("Dandelion","$7.00"),new o("Chamomile","$7.00"),new o("Earl Grey","$7.00")],s=[new o("Apple","$8.50"),new o("Orange","$8.00"),new o("Carrot","$11.00"),new o("Carrot, Orange, Pineapple","$11.50"),new o("Green Vegetable Mix","$10.00")];function m(e){const t=document.createElement("div"),n=document.createElement("h3"),i=document.createElement("p");return n.textContent=e.getName(),i.textContent=e.getPrice(),t.appendChild(n),t.appendChild(i),n.setAttribute("id","foodMenuName"),i.setAttribute("id","foodMenuPrice"),t.setAttribute("id","subMenuDiv"),t.style.marginBottom="10px",i.style.marginTop="0",t}for(let e=0;e<c.length;e++)t.appendChild(m(c[e]));for(let e=0;e<l.length;e++)i.appendChild(m(l[e]));for(let e=0;e<s.length;e++)n.appendChild(m(s[e]));return e.appendChild(t),e.appendChild(i),e.appendChild(n),e.classList.add("beveragePage"),e}())})),document.querySelector("#ctcMenu").onclick=e=>{e.preventDefault(),R.click()}}const b=e.p+"img/leaf-e59a3b6f5e478b5d5c20",g=document.querySelector("#content"),C=document.createElement("h1"),f=document.createElement("img");function E(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),a=document.createElement("h3"),o=document.createElement("h4"),r=document.createElement("p"),d=document.createElement("a");function c(e){const t=document.createElement("div"),i=document.createElement("a");i.setAttribute("id","creatorName"),i.textContent=e.getName(),t.appendChild(i),n.appendChild(t)}a.textContent="Source",d.textContent="Repo on GitHub",d.href="https://github.com/lemonaisu888/restaurant-page",o.innerHTML="Restaurant Page by Lemonice <br/> 2022",r.innerHTML="This is only a fictional site. <br/> Created with Webpack and Vanilla JavaScript. <br/>Check out this repository on GitHub!",e.setAttribute("id","footerWrap"),t.setAttribute("id","footerc1"),n.setAttribute("id","footerc2"),i.setAttribute("id","footerc3"),d.setAttribute("id","repo");const l=[new v("Louis Hansel, Unsplash"),new v("Dylan Nolte, Unsplash"),new v("Eiliv Aceron, Unsplash"),new v("Those Icons, Flaticon")];t.appendChild(C),t.appendChild(f),t.appendChild(o),n.appendChild(a),i.appendChild(r),i.appendChild(d);for(let e=0;e<l.length;e++)c(l[e]);e.appendChild(t),e.appendChild(n),e.appendChild(i),g.appendChild(e)}C.setAttribute("id","restonameF"),f.setAttribute("id","leafF"),C.textContent="PureHut",f.src=b;class v{constructor(e){this.name=e}getName=()=>this.name}const w=e.p+"img/food1-fix-b09e1808ec312649b783",A=e.p+"img/checked-f042427018140ab95044",y=e.p+"img/knife-and-fork-04f1e608171cb68c9ff1",M=e.p+"img/lettuce-809d576fcde192ed607d",k=e.p+"img/vegetables-ab2412a5969533c3d851",L=e.p+"img/pumpkin-pancakes-d7f935276eea7f4e155b",T=e.p+"img/tomyum-fbaa5e363ccf66bdd6c4",x=e.p+"img/vege-caponata-58540d1f70c7d26546b9",P=document.querySelector("#content");function N(){const e=document.createElement("div");e.setAttribute("class","homepage");const t=document.createElement("div"),n=document.createElement("h1"),i=document.createElement("button");i.setAttribute("id","expBtn"),t.setAttribute("id","welcomingWrap"),n.setAttribute("id","welcoming"),n.innerHTML="The Goodness of <span> Real Foods </span> for Your Healthier Life",i.textContent="Explore Our Menu",t.appendChild(n),t.appendChild(i),i.addEventListener("click",(()=>{window.scrollTo(0,0),P.innerHTML="",B(),W.style.color="var(--color-6)",G.style.color="var(--color-3)",h(),E()}));const a=document.createElement("div"),o=document.createElement("h1"),r=document.createElement("p"),d=document.createElement("div"),c=document.createElement("img");a.setAttribute("class","secondHome"),c.setAttribute("src",w),c.setAttribute("id","secondImg"),o.setAttribute("id","secondTitle"),d.setAttribute("id","captionWrap"),o.innerHTML="Back to the <span>Wholeness</span>",r.innerHTML="The food we put in our body can impacts our health and well-being. It plays a big role in our lives. <br/><br/> We're committed to promoting healthy diets based on whole foods with balanced nutritions for your body and supporting you to maintain your healthy lifestyle.",d.appendChild(o),d.appendChild(r),a.appendChild(d),a.appendChild(c);const l=document.createElement("div"),s=document.createElement("h1"),m=document.createElement("div");function u(e){const t=document.createElement("div"),n=document.createElement("img"),i=document.createElement("h1"),a=document.createElement("p");t.setAttribute("id","card"),n.setAttribute("id","icon"),i.setAttribute("id","headings"),a.setAttribute("id","details"),n.src=e.getIcon(),i.textContent=e.getHeadings(),a.textContent=e.getDetails(),t.appendChild(n),t.appendChild(i),t.appendChild(a),m.appendChild(t),l.appendChild(m)}l.setAttribute("class","thirdHome"),s.setAttribute("id","thirdTitle"),m.setAttribute("id","cardWrap"),s.innerHTML="WHAT WE <span> OFFER </span>",l.appendChild(s);const p=[new $(k,"100% Whole Foods","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut magna vitae libero sagittis elementum. Phasellus ac molestie nibh. Aliquam ultricies magna a mattis pretium. Nullam in ultrices erat. Nulla a tristique purus. "),new $(M,"Homemade Ingredients","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut magna vitae libero sagittis elementum. Phasellus ac molestie nibh. Aliquam ultricies magna a mattis pretium. Nullam in ultrices erat. Nulla a tristique purus. "),new $(A,"Customable Menu","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut magna vitae libero sagittis elementum. Phasellus ac molestie nibh. Aliquam ultricies magna a mattis pretium. Nullam in ultrices erat. Nulla a tristique purus. "),new $(y,"All Diets-Friendly","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut magna vitae libero sagittis elementum. Phasellus ac molestie nibh. Aliquam ultricies magna a mattis pretium. Nullam in ultrices erat. Nulla a tristique purus. ")];for(let e=0;e<p.length;e++)u(p[e]);const b=document.createElement("div"),g=document.createElement("h1"),C=document.createElement("div");function f(e){const t=document.createElement("div"),n=document.createElement("img"),i=document.createElement("p"),a=document.createElement("p");C.setAttribute("id","foodCardWrap"),t.setAttribute("id","foodCard"),n.setAttribute("id","foodPic"),i.setAttribute("id","foodName"),a.setAttribute("id","foodPrice"),n.src=e.getPic(),i.textContent=e.getName(),a.textContent=e.getPrice(),t.appendChild(n),t.appendChild(i),t.appendChild(a),C.appendChild(t),b.appendChild(C)}b.setAttribute("class","fourthHome"),g.setAttribute("id","fourthTitle"),g.innerHTML="OUR <span> STAR </span> MENU",b.appendChild(g);const v=[new H(L,"Sweet Pumpkin Pancakes","$12.30"),new H(T,"Tom Yum Vermicelli","$11.20"),new H(x,"Vegetable Caponata","$15.80")];for(let e=0;e<v.length;e++)f(v[e]);e.appendChild(t),e.appendChild(a),e.appendChild(l),e.appendChild(b),P.appendChild(e)}class ${constructor(e,t,n){this.icon=e,this.headings=t,this.details=n}getIcon=()=>this.icon;getHeadings=()=>this.headings;getDetails=()=>this.details}class H{constructor(e,t,n){this.pic=e,this.foodName=t,this.price=n}getPic=()=>this.pic;getName=()=>this.foodName;getPrice=()=>this.price}const D=document.createElement("div"),S=document.createElement("ul"),V=document.createElement("li"),q=document.createElement("li"),I=document.createElement("li"),F=document.createElement("li"),W=document.createElement("a"),G=document.createElement("a"),R=document.createElement("a"),U=document.createElement("h1"),j=document.createElement("img");function B(){const e=document.querySelector("#content");e.appendChild(S);const t=document.querySelectorAll("#switchdiv a");t.forEach((e=>{e.addEventListener("click",(e=>{t.forEach((t=>{e.target.classList.add("active"),t.classList.remove("active")}))})),e.classList.contains("active")?e.style.color="var(--color-3)":e.style.color="var(--color-6)"})),window.addEventListener("scroll",(()=>{document.documentElement.scrollTop>20?S.classList.add("sticky"):S.classList.remove("sticky"),S.classList.contains("sticky")?(S.style.background="white",S.style.height="70px"):(S.style.background="none",S.style.height="80px")})),U.addEventListener("click",(()=>{window.location.reload()})),q.addEventListener("click",(()=>{window.scrollTo(0,0),e.innerHTML="",B(),h(),E()})),V.addEventListener("click",(()=>{window.scrollTo(0,0),e.innerHTML="",B(),N(),E()})),I.addEventListener("click",(t=>{window.scrollTo(0,0),t.preventDefault(),e.innerHTML="",B(),R.style.color="var(--color-3)",function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),o=document.createElement("form"),p=document.createElement("input"),h=document.createElement("input"),b=document.createElement("textArea"),g=document.createElement("label"),C=document.createElement("label"),f=document.createElement("label"),E=document.createElement("button"),v=document.createElement("h3"),w=document.createElement("p"),A=document.createElement("div"),y=document.createElement("img"),M=document.createElement("img"),k=document.createElement("img");function L(e){const t=document.createElement("div"),n=document.createElement("img"),i=document.createElement("p");n.src=e.getIcon(),i.textContent=e.getInfo(),t.setAttribute("id","contact"),t.appendChild(n),t.appendChild(i),a.appendChild(t)}t.setAttribute("class","contactpage"),n.setAttribute("id","contactdiv"),i.setAttribute("id","messagediv"),E.setAttribute("id","sendBtn"),a.setAttribute("id","infoDiv"),v.setAttribute("id","ctcUs"),w.setAttribute("id","ctcUsDesc"),k.setAttribute("id","igIcon"),M.setAttribute("id","mailIcon"),y.setAttribute("id","fbIcon"),A.setAttribute("id","belowIcon"),g.textContent="Name",C.textContent="Phone",f.textContent="Message",E.textContent="SEND",v.textContent="Contact Us",w.innerHTML="Wanna give your feedback? It would be greatly appreciated. You can also check our menu availability via WhatsApp.",y.src=l,M.src=m,k.src=s,o.appendChild(g),o.appendChild(p),o.appendChild(C),o.appendChild(h),o.appendChild(f),o.appendChild(b),o.appendChild(E);const T=[new u(c,"+628123456789"),new u(d,"08.00 - 20.00"),new u(r,"18 Sudirman Street, Denpasar")];a.appendChild(v),a.appendChild(w);for(let e=0;e<T.length;e++)L(T[e]);A.appendChild(y),A.appendChild(k),A.appendChild(M),a.appendChild(A),i.appendChild(o),n.appendChild(i),n.appendChild(a),t.appendChild(n),e.appendChild(t)}(),E()}))}S.setAttribute("class","navbar-container"),D.setAttribute("id","switchdiv"),U.setAttribute("id","restoname"),j.setAttribute("id","leaf"),W.textContent="Home",G.textContent="Menu",R.textContent="Contact",U.textContent="PureHut",j.src=b,W.setAttribute("href","#home"),G.setAttribute("href","#menu"),R.setAttribute("href","#contact"),U.setAttribute("href","#home"),V.appendChild(W),q.appendChild(G),I.appendChild(R),F.appendChild(U),D.appendChild(V),D.appendChild(q),D.appendChild(I),S.appendChild(D),S.appendChild(U),S.appendChild(j),window.onload=()=>{B(),N(),E()}})();