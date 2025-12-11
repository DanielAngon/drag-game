$(function () {
console.log("document is ready!");
//
// 1. MAKE FLOPPER DRAGGABLE
//
$("#flopper-pic").draggable({
containment: "#containment-wrapper",
scroll: false,
drag: function () {
calculateWow(); // live scoring as user drags
},
stop: function () {
calculateWow(); // final update
}
});
//
// 2. FLOPPER SCORE CALCULATION
//
function calculateWow() {
var pos = $("#flopper-pic").position();
// score value based on flopper position
var score = Math.floor(pos.top + pos.left);
// update text output box (legacy behavior)
if (score < 500) {
$("#wow-output").html('<h2>not much wow (' + score + ')</h2>');
} else {
$("#wow-output").html('<h2>so much wow (' + score + ')!!</h2>');
}
//
// ---- NEW GAME UI UPDATES ----
//
// Score text
$("#score-display").text(score);
// Progress bar (max 1000)
var percent = Math.min((score / 1000) * 100, 100);
$("#score-progress").css("width", percent + "%");
// Status message
if (score < 0) {
$("#status-message").text("Flopper is confused... HOW DID YOU DO DIS");
}
else if (score < 300) {
$("#status-message").text("Flopper is drying up...");
} else if (score < 600) {
$("#status-message").text("Wow! Flopper is gaining power!");
} else if (score < 900) {
$("#status-message").text("Much skill. Very drag. Wow.");
} else {
$("#status-message").text("MAXIMUM FLOPPER ACHIEVED! ￿￿");
}
}
});

// Reset button //

$("#reset-btn").click(function () {
  $("#score-display").text("0");
  $("#score-progress").css("width", "0%");
  $("#status-message").text("Game reset! Drag Flopper to begin again.");
  $("#flopper-pic").css({ top: 0, left: 0 });
});


