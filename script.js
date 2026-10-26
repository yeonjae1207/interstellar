$(document).ready(function () {
  // 별 150개
  for (let i = 0; i < 150; i++) {
    let star = $("<div class='star'></div>");

    star.css({
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      animationDelay: Math.random() * 3 + "s",
    });

    $(".stars").append(star);
  }

  // 우주인 클릭 이동
  let click = 0;

  $(".poster").click(function () {
    click++;

    // 두 번 클릭하면 원래 위치로
    if (click % 2 == 0) {
      $(".astronaut").css("left", "76%");
      $(".astronaut").css("top", "40%");
    }
  });

  // 한 번클릭하면 마우스 따라가기
  $(".poster").mousemove(function (event) {
    if (click % 2 == 1) {
      let mouseX = event.pageX;
      let mouseY = event.pageY;

      let imgWidth = $(".astronaut").width() / 2;
      let imgHeight = $(".astronaut").height() / 2;

      $(".astronaut").css("left", mouseX - imgWidth + "px");
      $(".astronaut").css("top", mouseY - imgHeight + "px");
    }
  });
});
