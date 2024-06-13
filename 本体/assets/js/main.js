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

document.addEventListener("DOMContentLoaded", function() {
  const courseSelect = document.getElementById("course");
  const select155 = document.querySelector(".select_155");
  const select195 = document.querySelector(".select_195");
  const form155 = document.getElementById("form_155").querySelector('input[name="brand_info"]');
  const form195 = document.getElementById("form_195").querySelector('input[name="brand_info"]');
  const bag155Select = document.getElementById("bag_155");
  const visit155Select = document.getElementById("visit_155");
  const bag195Select = document.getElementById("bag_195");
  const visit195Select = document.getElementById("visit_195");

  const courseValues = {
    "ふわりも®︎コース 1枚": "000000000001",
    "ふわりも®︎コース 2枚": "000000000002",
    "こまとめコース": "000000000003",
    "おまとめコース": "000000000004",
    "マットレス・敷ふとんコース": "000000000005"
  };

  function updateSelectBoxes() {
    const selectedCourse = courseSelect.value;

    if (selectedCourse === "ふわりも®︎コース 1枚" ||
        selectedCourse === "ふわりも®︎コース 2枚" ||
        selectedCourse === "こまとめコース") {
      select155.style.display = "flex";
      select195.style.display = "none";
    } else if (selectedCourse === "おまとめコース" ||
                selectedCourse === "マットレス・敷ふとんコース") {
      select155.style.display = "none";
      select195.style.display = "flex";
    } else {
      select155.style.display = "none";
      select195.style.display = "none";
    }
    updateFormValues();
  }

  function updateFormValues() {
    const selectedCourse = courseSelect.value;
    const courseValue = courseValues[selectedCourse] || "";

    if (select155.style.display === "flex") {
      const bagValue = bag155Select.value;
      const visitValue = visit155Select.value;
      form155.value = `1,${courseValue},1,N,,,${bagValue},${visitValue}`;
    }

    if (select195.style.display === "flex") {
      const bagValue = bag195Select.value;
      const visitValue = visit195Select.value;
      form195.value = `1,${courseValue},1,N,,,${bagValue},${visitValue}`;
    }
  }

  // 初期状態を設定
  updateSelectBoxes();

  // コース選択が変更されたときに表示を更新
  courseSelect.addEventListener("change", updateSelectBoxes);
  bag155Select.addEventListener("change", updateFormValues);
  visit155Select.addEventListener("change", updateFormValues);
  bag195Select.addEventListener("change", updateFormValues);
  visit195Select.addEventListener("change", updateFormValues);
});
