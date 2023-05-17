const upButton = document.querySelectorAll(".btn-up");
const downButton = document.querySelectorAll(".btn-down");
const lift = document.querySelector("#lift");
const section = document.querySelector(".section");
let floorHeight = 120; // Height of each floor in pixels
let isInTop = false;
let isAtBottom = false;

lift.style.marginLeft = "6rem";
lift.style.width = "50px";
lift.style.backgroundColor = "blue";
lift.style.height = "80px";
lift.style.position = "absolute";
lift.style.top = "480px";
const up = {
  "floor-one": 480,
  "floor-two": 360,
  "floor-three": 240,
};
const down = {
  "floor-two": 360,
  "floor-three": 240,
  "floor-four": 120,
};

const upButtonClickHandler = (event) => {
  if (lift.style.top <= "120px") {
    return;
  } else {
    moveLift("up", up[event.target.classList[1]]);
  }
};
const downButtonClickHandler = (event) => {
  if (lift.style.top >= "480px") {
    return;
  } else {
    moveLift("down", down[event.target.classList[1]]);
  }
};

for (let button of upButton) {
  button.addEventListener("click", upButtonClickHandler);
}
for (let button of downButton) {
  button.addEventListener("click", downButtonClickHandler);
}

const moveLift = (direction, value) => {
  let liftPosition = parseInt(lift.style.top) || 480;
  let targetPosition;

  if (direction === "up" && value) {
    targetPosition = value;
  } else if (direction === "down" && value) {
    targetPosition = value;
  }

  if (direction === "up" && isInTop) {
    targetPosition = liftPosition - floorHeight;
  } else if (direction === "down" && isAtBottom) {
    targetPosition = liftPosition + floorHeight;
  }
  if (direction === "up") {
    isInTop = true;
    isAtBottom = false;
  }
  if (direction === "down") {
    isAtBottom = true;
    isInTop = false;
  }

  lift.style.transition = "top 2s ease-in-out";
  lift.style.top = targetPosition + "px";
};
