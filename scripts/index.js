import mac_img from "../images/mac.png";
import mac_big_img from "../images/mac_big.png";
(() => {
  const events = ["orientationchange", "resize", "load"];
  const mac = document.getElementById("mac_img");
  const showcaseTitle = document.getElementById("showcase_title");
  events.forEach(event =>
    window.addEventListener(event, () => {
      const width = document.documentElement.clientWidth;
      if (width > 992) {
        mac.src = mac_img;
      } else {
        mac.src = mac_big_img;
      }

      const height = document.documentElement.clientHeight;
      if (height < 515) {
        showcaseTitle.style.fontSize = "32px";
      }
    })
  );
})();
