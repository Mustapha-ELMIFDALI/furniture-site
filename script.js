{
  const U = (id, w = 600) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------- Data ---------- */
  const rooms = [
    { name: 'Living Room', items: '2,500+', price: '$1,500', img: U('1586023492125-27b2c045efd7') },
    { name: 'Bed Room', items: '1,500+', price: '$980', img: U('1505693416388-ac5ce068fe85') },
    { name: 'Dining Room', items: '1,200+', price: '$760', img: U('1617806118233-18e1de247200') },
    { name: 'Office', items: '900+', price: '$540', img: U('1524758631624-e2822e304c36') }
  ];

  const products = [
    { name: 'Wooden Sofa Chair', cat: 'Chair', price: 80, old: 160, rate: 4.9, off: 50, img: U('1592078615290-033ee584e267'), tags: ['latest', 'featured'], timer: true },
    { name: 'Circular Sofa Chair', cat: 'Chair', price: 108, old: 120, rate: 5.0, off: 10, img: U('1567538096630-e0c55bd6374c'), tags: ['latest', 'best'] },
    { name: 'Wooden Nightstand', cat: 'Nightstand', price: 54, old: 60, rate: 4.8, off: 10, img: U('1532372320572-cda25653a26d'), tags: ['latest'] },
    { name: 'Bean Bag Chair', cat: 'Chair', price: 72, old: 80, rate: 4.7, off: 10, img: U('1598300042247-d088f8ab3a91'), tags: ['latest', 'best'] },
    { name: 'Modern Green Sofa', cat: 'Sofa', price: 499, old: 620, rate: 4.9, off: 20, img: U('1555041469-a586c61ea9bc'), tags: ['best', 'featured'] },
    { name: 'Brass Pendant Lamp', cat: 'Lighting', price: 65, old: 85, rate: 4.6, off: 25, img: U('1507473885765-e6ed057f782c'), tags: ['featured'] },
    { name: 'Classic Grey Sofa', cat: 'Sofa', price: 420, old: 520, rate: 4.8, off: 20, img: U('1540574163026-643ea20ade25'), tags: ['best'] },
    { name: 'Table Lamp Duo', cat: 'Lighting', price: 39, old: 49, rate: 4.5, off: 20, img: U('1519710164239-da123dc03ef4'), tags: ['featured'] }
  ];

  const deals = [
    { name: 'Recliner Chair Wood', price: 105, old: 150, rate: 5.0, off: 30, img: U('1506439773649-6e0eb8cfb237') },
    { name: 'Recliner Chair Steel', price: 80, old: 100, rate: 4.9, off: 20, img: U('1580480055273-228ff5388ef8') },
    { name: 'Lounge Armchair', price: 140, old: 280, rate: 4.8, off: 50, img: U('1549497538-303791108f95') },
    { name: 'Velvet Accent Chair', price: 96, old: 120, rate: 4.7, off: 20, img: U('1592078615290-033ee584e267') }
  ];

  const testimonials = [
    { name: 'Leslie Alexander', role: 'Architecture', img: U('1494790108377-be9c29b29330', 200), text: 'The sofa arrived two days early and looks even better than the photos. Solid build, soft fabric and the delivery team was wonderful.' },
    { name: 'Jenny Wilson', role: 'Interior Designer', img: U('1438761681033-6461ffad8d80', 200), text: 'I source pieces for clients every week — the finish quality and the range of styles here make my job so much easier.' },
    { name: 'Robert Fox', role: 'Photographer', img: U('1500648767791-00dcc994a43e', 200), text: 'My studio finally feels finished. The pendant lights and the oak desk are exactly the warm look I was going for.' },
    { name: 'Devon Lane', role: 'Software Engineer', img: U('1507003211169-0a1dd7228f2d', 200), text: 'Comfortable gaming chair, easy assembly, and support answered my questions at midnight. Highly recommend.' }
  ];

  const blogs = [
    { title: "Furniture Trends 2026: What's Hot and What's Not", date: '12 Nov 2026', img: U('1618221195710-dd6b41faaea6', 700) },
    { title: 'The Ultimate Guide to Choosing the Perfect Sofa', date: '05 Nov 2026', img: U('1493663284031-b7e3aefcae8e', 700) },
    { title: 'Choosing the Right Dining Table for Your Lifestyle', date: '28 Oct 2026', img: U('1616486338812-3dadae4b4ace', 700) }
  ];

  const insta = ['1600210492486-724fe5c67fb0', '1615874959474-d609969a20ed', '1586105251261-72a756497a11', '1513694203232-719a280e022f', '1538688525198-9b88f6f53126', '1631679706909-1844bbd07221', '1484101403633-562f891dc89a'];

  const faqs = [
    ['What types of furniture do you offer?', 'We carry chairs, sofas, beds, tables, storage and lighting for the living room, bedroom, dining room and home office.'],
    ['What payment methods do you accept?', 'We accept all major credit and debit cards, PayPal, Apple Pay, Google Pay and interest-free instalments on orders over $300.'],
    ['Can I track my furniture delivery?', 'Yes. As soon as your order ships you receive a tracking link by email and SMS, and you can follow it from your account.'],
    ['What is your return policy?', 'Unused items can be returned within 30 days in their original packaging for a full refund. Return pickup is free on orders above $180.'],
    ['What materials are used in your furniture?', 'Mostly FSC-certified solid wood, powder-coated steel, and durable performance fabrics that are easy to clean.'],
    ['Are there any discounts or promotions available?', 'Subscribe to our newsletter for 20% off your first order, and check the Flash Sale and Deals of the Day sections for weekly offers.']
  ];

  /* ---------- Helpers ---------- */
  const icons = {
    heart: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
    expand: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>',
    bag: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 7h12l1 14H5L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
    star: '<svg class="w-4 h-4 inline -mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>',
    arrow: '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    ig: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>'
  };
  const money = n => '$' + n.toFixed(2);
  const fallback = (seed, w = 600, h = 600) => `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
  const img = (src, alt, cls = '') => `<img src="${src}" alt="${alt}" class="${cls}" loading="lazy" data-fb="${alt}">`;

  const actions = (i) => `
    <div class="p-actions">
      <button aria-label="Add to wishlist" data-wish="${i}">${icons.heart}</button>
      <button aria-label="Quick view" data-view="${i}">${icons.expand}</button>
      <button aria-label="Add to cart" data-cart="${i}">${icons.bag}</button>
    </div>`;

  /* ---------- Renderers ---------- */
  $('#heroSlider').innerHTML = rooms.map(r => `
    <article class="room-card">
      <div class="relative">
        ${img(r.img, r.name)}
        <span class="hotspot" style="left:38%;top:30%"></span>
        <span class="hotspot" style="left:62%;top:62%"></span>
        <span class="price-tag">${r.price}</span>
      </div>
      <div class="flex items-center justify-between px-1 pt-3 pb-1">
        <div><h3 class="font-semibold">${r.name}</h3><p class="text-xs text-gray-500 dark:text-gray-400">${r.items} Items</p></div>
        <a href="#categories" class="round-btn !w-10 !h-10 bg-brand text-white" aria-label="Open ${r.name}"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></a>
      </div>
    </article>`).join('');

  const renderProducts = (tab) => {
    const list = tab === 'all' ? products : products.filter(p => p.tags.includes(tab));
    $('#productGrid').innerHTML = list.map((p, k) => {
      const i = products.indexOf(p);
      return `
      <article class="p-card" style="animation-delay:${k * 60}ms">
        <div class="p-media">
          <span class="off">${p.off}% off</span>
          ${actions(i)}
          ${img(p.img, p.name)}
          ${p.timer ? `<div class="mini-timer" data-mini><div><b data-u="d">00</b><span>Days</span></div><div><b data-u="h">00</b><span>Hours</span></div><div><b data-u="m">00</b><span>Mins</span></div><div><b data-u="s">00</b><span>Sec</span></div></div>` : ''}
        </div>
        <div class="pt-3">
          <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400"><span>${p.cat}</span><span class="font-semibold text-ink dark:text-white"><span class="stars">${icons.star}</span> ${p.rate.toFixed(1)}</span></div>
          <h3 class="font-semibold mt-1">${p.name}</h3>
          <p class="mt-1 font-semibold">${money(p.price)} <s class="text-gray-400 font-normal text-sm ml-1">${money(p.old)}</s></p>
        </div>
      </article>`;
    }).join('');
    tick();
  };

  $('#dealSlider').innerHTML = deals.map((d, i) => `
    <article class="deal-card">
      <div class="p-media"><span class="off">${d.off}% off</span>
        <div class="p-actions"><button aria-label="Add to wishlist" data-wish="d${i}">${icons.heart}</button><button aria-label="Add to cart" data-cart="d${i}">${icons.bag}</button></div>
        ${img(d.img, d.name)}
      </div>
      <div class="py-2 pr-2 flex flex-col">
        <p class="text-xs text-gray-500 dark:text-gray-400">Chair</p>
        <h3 class="font-semibold mt-0.5">${d.name}</h3>
        <p class="mt-1 font-semibold">${money(d.price)} <s class="text-gray-400 font-normal text-sm">${money(d.old)}</s></p>
        <p class="mt-1 text-sm"><span class="stars">${icons.star}</span> ${d.rate.toFixed(1)}</p>
        <p class="mt-2 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">Padded seat, smooth recline and a frame built for years of daily use.</p>
        <a href="#products" class="mt-auto pt-3 text-xs font-semibold text-brand dark:text-accent inline-flex items-center gap-1">Shop Now ${icons.arrow}</a>
      </div>
    </article>`).join('');

  $('#testiSlider').innerHTML = testimonials.map(t => `
    <article class="t-card">
      <div class="t-head">
        ${img(t.img, t.name, 't-photo')}
        <div>
          <h3 class="font-semibold">${t.name}</h3>
          <p class="text-xs text-gray-500 dark:text-gray-400">${t.role}</p>
          <p class="stars mt-1">${icons.star.repeat(5)} <span class="text-sm font-semibold text-ink dark:text-white">5.0</span></p>
        </div>
        <span class="quote">“</span>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-2">${t.text}</p>
    </article>`).join('');
  $('#testiDots').innerHTML = testimonials.map((_, i) => `<button class="dot${i ? '' : ' active'}" aria-label="Testimonial ${i + 1}" data-dot="${i}"></button>`).join('');

  $('#blogGrid').innerHTML = blogs.map(b => `
    <article class="b-card group">
      <div class="b-media">${img(b.img, b.title)}<span class="b-date">${b.date}</span></div>
      <h3 class="font-semibold mt-4 leading-snug group-hover:text-brand dark:group-hover:text-accent transition">${b.title}</h3>
      <a href="#blog" class="mt-2 inline-flex items-center gap-1 text-sm underline underline-offset-4">Read More ${icons.arrow}</a>
    </article>`).join('');

  $('#instaRow').innerHTML = insta.map((id, i) => `
    <a href="#" class="insta ${i === 1 ? 'feat' : ''} ${i > 5 ? 'hidden lg:block' : ''} ${i > 2 && i < 6 ? '' : ''}" aria-label="Instagram post">${img(U(id, 400), 'Interior inspiration')}${icons.ig}</a>`).join('');

  $('#faqList').innerHTML = faqs.map(([q, a], i) => `
    <div class="faq${i === 1 ? ' open' : ''}">
      <button aria-expanded="${i === 1}"><span>${q}</span><span class="sign">${i === 1 ? '−' : '+'}</span></button>
      <div class="ans"><div>${a}</div></div>
    </div>`).join('');

  /* ---------- Image fallback (if a web photo fails to load) ---------- */
  document.addEventListener('error', (e) => {
    const el = e.target;
    if (el.tagName === 'IMG' && !el.dataset.failed) {
      el.dataset.failed = '1';
      el.src = fallback((el.alt || 'furniture') + el.width, 600, 600);
    }
  }, true);

  /* ---------- Countdown timers ---------- */
  const end = Date.now() + ((4 * 24 + 14) * 3600 + 48 * 60 + 18) * 1000;
  const pad = n => String(n).padStart(2, '0');
  function tick() {
    let s = Math.max(0, Math.floor((end - Date.now()) / 1000));
    const v = { d: Math.floor(s / 86400), h: Math.floor(s % 86400 / 3600), m: Math.floor(s % 3600 / 60), s: s % 60 };
    $$('#flashTimer [data-u], [data-mini] [data-u]').forEach(el => { el.textContent = pad(v[el.dataset.u]); });
  }
  setInterval(tick, 1000);

  /* ---------- Tabs ---------- */
  $('#productTabs').addEventListener('click', e => {
    const b = e.target.closest('.tab'); if (!b) return;
    $$('.tab').forEach(t => t.classList.toggle('active', t === b));
    renderProducts(b.dataset.tab);
  });
  renderProducts('latest');

  /* ---------- Cart / wishlist ---------- */
  let cart = 0; const wish = new Set();
  const toast = (msg) => { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 1800); };
  document.addEventListener('click', e => {
    const w = e.target.closest('[data-wish]'), c = e.target.closest('[data-cart]'), v = e.target.closest('[data-view]');
    if (w) { const k = w.dataset.wish; wish.has(k) ? wish.delete(k) : wish.add(k); w.classList.toggle('on', wish.has(k)); $('#wishCount').textContent = wish.size; toast(wish.has(k) ? 'Added to wishlist' : 'Removed from wishlist'); }
    if (c) { cart++; $('#cartCount').textContent = cart; toast('Added to cart'); }
    if (v) { toast(products[v.dataset.view].name + ' – ' + money(products[v.dataset.view].price)); }
  });

  /* ---------- Sliders ---------- */
  const step = (id, dir) => { const s = $('#' + id); const card = s.firstElementChild; const gap = parseFloat(getComputedStyle(s).columnGap) || 20; const w = card.offsetWidth + gap;
    const max = s.scrollWidth - s.clientWidth;
    if (dir > 0 && s.scrollLeft >= max - 4) s.scrollTo({ left: 0 }); else if (dir < 0 && s.scrollLeft <= 4) s.scrollTo({ left: max }); else s.scrollBy({ left: dir * w }); };
  $$('[data-slide]').forEach(b => b.addEventListener('click', () => step(b.dataset.slide, +b.dataset.dir)));
  $$('.slider').forEach(s => { s.tabIndex = 0; s.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { e.preventDefault(); step(s.id, 1); } if (e.key === 'ArrowLeft') { e.preventDefault(); step(s.id, -1); } }); });

  const ts = $('#testiSlider');
  ts.addEventListener('scroll', () => { const w = ts.firstElementChild.offsetWidth + 20; const i = Math.round(ts.scrollLeft / w); $$('.dot').forEach((d, k) => d.classList.toggle('active', k === Math.min(i, testimonials.length - 1))); });
  $('#testiDots').addEventListener('click', e => { const d = e.target.closest('[data-dot]'); if (d) ts.children[+d.dataset.dot].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' }); });
  let auto = setInterval(() => step('testiSlider', 1), 5000);
  ts.addEventListener('pointerdown', () => clearInterval(auto));

  /* ---------- FAQ accordion ---------- */
  $('#faqList').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const item = b.parentElement; const open = !item.classList.contains('open');
    $$('.faq').forEach(f => { f.classList.remove('open'); f.querySelector('.sign').textContent = '+'; f.querySelector('button').setAttribute('aria-expanded', 'false'); });
    if (open) { item.classList.add('open'); item.querySelector('.sign').textContent = '−'; b.setAttribute('aria-expanded', 'true'); }
  });

  /* ---------- Theme toggle ---------- */
  $('#themeToggle').addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('dark');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  });

  /* ---------- Mobile menu & search ---------- */
  const menu = $('#mobileMenu'), mBtn = $('#menuBtn');
  mBtn.addEventListener('click', () => { const h = menu.classList.toggle('hidden'); mBtn.setAttribute('aria-expanded', String(!h)); });
  $$('.m-link').forEach(a => a.addEventListener('click', () => { menu.classList.add('hidden'); mBtn.setAttribute('aria-expanded', 'false'); }));
  $('#searchBtn').addEventListener('click', () => { const s = $('#searchBar'); s.classList.toggle('hidden'); if (!s.classList.contains('hidden')) s.querySelector('input').focus(); });

  /* ---------- Newsletter ---------- */
  $('#newsForm').addEventListener('submit', e => {
    e.preventDefault();
    const v = $('#newsEmail').value.trim(), msg = $('#newsMsg');
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    msg.textContent = ok ? 'Thanks! Your 20% code is on its way.' : 'Please enter a valid email address.';
    msg.className = 'mt-3 text-sm h-5 ' + (ok ? 'text-brand dark:text-accent' : 'text-red-600');
    if (ok) e.target.reset();
  });

  /* ---------- Scroll effects ---------- */
  const header = $('#header'), top = $('#toTop');
  const links = $$('.nav-link'), secs = links.map(l => $(l.getAttribute('href')));
  addEventListener('scroll', () => {
    header.classList.toggle('scrolled', scrollY > 10);
    top.classList.toggle('show', scrollY > 600);
    let cur = 0; secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < 140) cur = i; });
    links.forEach((l, i) => l.classList.toggle('active', i === cur));
  }, { passive: true });
  top.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .12 });
  $$('.reveal').forEach(el => io.observe(el));

  $('#year').textContent = new Date().getFullYear();
}
