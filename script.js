// モバイルメニュー
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('global-nav');
if (menuBtn && nav) {
menuBtn.addEventListener('click', () => {
const open = nav.classList.toggle('open');
menuBtn.setAttribute('aria-expanded', String(open));
});
}


// 今年の年号を自動表示
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// トップへ戻るボタン
const toTop = document.getElementById('toTop');
const onScroll = () => {
if (window.scrollY > 400) { toTop.classList.add('show'); } else { toTop.classList.remove('show'); }
};
window.addEventListener('scroll', onScroll);
if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));


// フォーム送信（Netlify対応）: そのままでも静的サイトで送信可能
// 他サービス(Firebase/Formspark等)に変える場合はここを書き換え