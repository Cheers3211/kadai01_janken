$(function () {
  const hands = ["グー", "チョキ", "パー"];

  $(".hand").on("click", function () {
    const player = $(this).data("hand");
    const computer = hands[Math.floor(Math.random() * 3)];

    $("#player").text(player);
    $("#computer").text(computer);

    let outcome = "";
    if (player === computer) {
      outcome = "あいこ！";
    } else if (
      (player === "グー" && computer === "チョキ") ||
      (player === "チョキ" && computer === "パー") ||
      (player === "パー" && computer === "グー")
    ) {
      outcome = "あなたの勝ち！🎉";
    } else {
      outcome = "あなたの負け…😢";
    }

    $("#outcome").text("結果：" + outcome);
  });
});
