let selectedBox = null;

function changeSelectedBox(box) {
  if (selectedBox == null) {
    selectedBox = box;
    document.getElementById(box).classList.add("selectedBox");
  } else {
    document.getElementById(selectedBox).classList.remove("selectedBox");
    document.getElementById(box).classList.add("selectedBox");
    selectedBox = box;
  }
}
