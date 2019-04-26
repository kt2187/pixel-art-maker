function makeGrid() {
  const canvas = $("#pixelCanvas");
  canvas.empty();

  const inputheight = $("#inputHeight");
  const inputwidth = $("#inputWidth");
  const colorPicker = $("#colorPicker");

  const height = inputheight.val();
  const width = inputwidth.val();

  for (let i = 0; i < height; i++) {
    let row = $("<tr></tr>").appendTo(canvas);

    let j = 0;
    while (j < width) {
      let cell = $("<td></td>");
      row.append(cell);
      cell.on("click", function() {
        let selectedColor = colorPicker.val();
        $(this).css("background-color", selectedColor);
      });
      j++;
    }
  }
}
$("document").ready(makeGrid);
