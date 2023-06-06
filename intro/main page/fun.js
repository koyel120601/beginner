const track = document.getElementById("image_track");

window.onmousedown = e => {
  track.dataset.mouseDownAt = e.clientX;
  track.classList.add("smooth-transition");
};

window.onmousemove = e => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100;
  const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
  const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;
  track.style.transform = `translate(${nextPercentage}%, -50%)`;

  const images = track.getElementsByClassName("image");
  for (const image of images) {
    image.style.objectPosition = `${100 + nextPercentage}% center`;
  }
};

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
  track.classList.remove("smooth-transition");
};

const imagese = document.getElementsByClassName("image");

for (const image of imagese) {
  image.onclick = function () {
    const videoUrl = this.getAttribute("data-video-url");
    const width = "50%"; // Set the width using CSS syntax
    const height = "50%"; // Set the height using CSS syntax
    const hola = this.getAttribute("something")

    if (videoUrl) {
      window.open(videoUrl, "_self", `width=${width}`,`height=${height}`,hola);
    }
  };
}