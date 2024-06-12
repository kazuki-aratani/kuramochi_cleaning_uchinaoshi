// アコーディオン（１層目）
$(function () {
  // タイトルをクリックすると
  $(".js-accordion-title").on("click", function () {
    // クリックしたタイトル以外のopenクラスを外す(－から＋にする)
    $(".js-accordion-title").not(this).removeClass("open");
    // クリックしたタイトル以外のコンテンツを閉じる
    $(".js-accordion-title").not(this).next().slideUp(300);
    // クリックしたタイトルにopenクラスを付け外しして＋と－を切り替える
    $(this).toggleClass("open");
    // クリックしたタイトルの次の要素(コンテンツ)を開閉
    $(this).next().slideToggle(300, function() {
      // アニメーションが完了したらスクロールする
      $('html, body').animate({
        scrollTop: $(this).prev().offset().top
      }, 300);
    });
  });
});

// アコーディオン（よくある質問２層目）
$(function () {
  // タイトルをクリックすると
  $(".js-accordion-title02").on("click", function () {
    // クリックしたタイトル以外のopenクラスを外す(－から＋にする)
    $(".js-accordion-title02").not(this).removeClass("open");
    // クリックしたタイトル以外のコンテンツを閉じる
    $(".js-accordion-title02").not(this).next().slideUp(300);
    // クリックしたタイトルにopenクラスを付け外しして＋と－を切り替える
    $(this).toggleClass("open");
    // クリックしたタイトルの次の要素(コンテンツ)を開閉
    $(this).next().slideToggle(300, function() {
      // アニメーションが完了したらスクロールする
      $('html, body').animate({
        scrollTop: $(this).prev().offset().top
      }, 300);
    });
  });
});

// スムーズスクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++){
  smoothScrollTrigger[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href');
    let targetElement = document.getElementById(href.replace('#', ''));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 60;
    const target = rect + offset - gap;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });
}