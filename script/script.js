import { getTimeFrame } from "./data.js";

let selctedTimeframe = localStorage.getItem("selectedTimeframe") || "daily";

loadData(selctedTimeframe);

function loadData(selctedTimeframe) {
  let previousTime = "";
  if (selctedTimeframe === "daily") {
    previousTime = "Yesterday";
  } else if (selctedTimeframe === "weekly") {
    previousTime = "Last Week";
  } else {
    previousTime = "Last Month";
  }

  let HTML = `<div class="grid gap-8 md:grid-cols-4">
    <div class="bg-custom-Dark-blue rounded-xl md:row-span-2">
      <div
        class="bg-custom-Blue flex items-center space-x-4 rounded-xl p-6 md:block"
      >
        <img
          src="images/image-jeremy.png"
          alt=""
          class="size-15 rounded-full ring-2 ring-white"
        />
        <div class="md:my-8">
          <p class="text-custom-Pale-Blue">Report for</p>
          <h1 class="text-2xl font-thin text-white md:text-4xl">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <div
        class="text-custom-Desaturated-blue flex items-center justify-between p-6 md:block md:space-y-5"
      >
        <div
          class="${"daily" === selctedTimeframe ? "active" : ""} js-timeframe-select-link cursor-pointer transition-colors duration-75 ease-in hover:text-white"
          data-timeframe="daily"
        >
          Daily
        </div>
        <div
          class="${"weekly" === selctedTimeframe ? "active" : ""} js-timeframe-select-link cursor-pointer transition-colors duration-75 ease-in hover:text-white"
          data-timeframe="weekly"
        >
          Weekly
        </div>
        <div
          class="${"monthly" === selctedTimeframe ? "active" : ""} js-timeframe-select-link cursor-pointer transition-colors duration-75 ease-in hover:text-white"
          data-timeframe="monthly"
        >
          Monthly
        </div>
      </div>
    </div>

    <div class="bg-custom-Light-red relative rounded-xl md:hover:scale-110 transition-transform duration-100 ease-in delay-75">
      <img src="images/icon-work.svg" alt="" class="absolute right-4 z-0 size-15" />
      <div class="bg-custom-Dark-blue relative z-10 mt-10 cursor-pointer rounded-xl p-6">
        <div class="flex items-center justify-between">
          <h2 class="text-white">Work</h2>
          <img src="images/icon-ellipsis.svg" alt="" class="cursor-pointer" />
        </div>
        <div class="flex items-center justify-between gap-4 md:my-5 md:block">
          <h3 class="text-3xl font-thin text-white md:text-5xl">${getTimeFrame("Work", selctedTimeframe).current}hrs</h3>
          <p class="text-custom-Desaturated-blue md:my-2">${previousTime} - <span>${getTimeFrame("Work", selctedTimeframe).previous}hrs</span></p>
        </div>
      </div>
    </div>

    <div class="bg-custom-Soft-blue relative rounded-xl md:hover:scale-110 transition-transform duration-100 ease-in delay-75">
      <img src="images/icon-play.svg" alt="" class="absolute right-4 z-0 size-15" />
      <div class="bg-custom-Dark-blue relative z-10 mt-10 cursor-pointer rounded-xl p-6">
        <div class="flex items-center justify-between">
          <h2 class="text-white">Play</h2>
          <img src="images/icon-ellipsis.svg" alt="" class="cursor-pointer" />
        </div>
        <div class="flex items-center justify-between gap-4 md:my-5 md:block">
          <h3 class="text-3xl font-thin text-white md:text-5xl">${getTimeFrame("Play", selctedTimeframe).current}hrs</h3>
          <p class="text-custom-Desaturated-blue md:my-2">${previousTime} - <span>${getTimeFrame("Play", selctedTimeframe).previous}hrs</span></p>
        </div>
      </div>
    </div>

    <div class="bg-custom-Light-study relative rounded-xl md:hover:scale-110 transition-transform duration-100 ease-in delay-75">
      <img src="images/icon-study.svg" alt="" class="absolute right-4 z-0 size-15" />
      <div class="bg-custom-Dark-blue relative z-10 mt-10 cursor-pointer rounded-xl p-6">
        <div class="flex items-center justify-between">
          <h2 class="text-white">Study</h2>
          <img src="images/icon-ellipsis.svg" alt="" class="cursor-pointer" />
        </div>
        <div class="flex items-center justify-between gap-4 md:my-5 md:block">
          <h3 class="text-3xl font-thin text-white md:text-5xl">${getTimeFrame("Study", selctedTimeframe).current}hrs</h3>
          <p class="text-custom-Desaturated-blue md:my-2">${previousTime} - <span>${getTimeFrame("Study", selctedTimeframe).previous}hrs</span></p>
        </div>
      </div>
    </div>

    <div class="bg-custom-Lime-green relative rounded-xl md:hover:scale-110 transition-transform duration-100 ease-in delay-75">
      <img src="images/icon-exercise.svg" alt="" class="absolute right-4 z-0 size-15" />
      <div class="bg-custom-Dark-blue relative z-10 mt-10 cursor-pointer rounded-xl p-6">
        <div class="flex items-center justify-between">
          <h2 class="text-white">Exercise</h2>
          <img src="images/icon-ellipsis.svg" alt="" class="cursor-pointer" />
        </div>
        <div class="flex items-center justify-between gap-4 md:my-5 md:block">
          <h3 class="text-3xl font-thin text-white md:text-5xl">${getTimeFrame("Exercise", selctedTimeframe).current}hrs</h3>
          <p class="text-custom-Desaturated-blue md:my-2">${previousTime} - <span>${getTimeFrame("Exercise", selctedTimeframe).previous}hrs</span></p>
        </div>
      </div>
    </div>

    <div class="bg-custom-Violet relative rounded-xl md:hover:scale-110 transition-transform duration-100 ease-in delay-75">
      <img src="images/icon-social.svg" alt="" class="absolute right-4 z-0 size-15" />
      <div class="bg-custom-Dark-blue relative z-10 mt-10 cursor-pointer rounded-xl p-6">
        <div class="flex items-center justify-between">
          <h2 class="text-white">Social</h2>
          <img src="images/icon-ellipsis.svg" alt="" class="cursor-pointer" />
        </div>
        <div class="flex items-center justify-between gap-4 md:my-5 md:block">
          <h3 class="text-3xl font-thin text-white md:text-5xl">${getTimeFrame("Social", selctedTimeframe).current}hrs</h3>
          <p class="text-custom-Desaturated-blue md:my-2">${previousTime} - <span>${getTimeFrame("Social", selctedTimeframe).previous}hrs</span></p>
        </div>
      </div>
    </div>

    <div class="bg-custom-Soft-orange relative rounded-xl md:hover:scale-110 transition-transform duration-100 ease-in delay-75">
      <img src="images/icon-self-care.svg" alt="" class="absolute right-4 z-0 size-15" />
      <div class="bg-custom-Dark-blue relative z-10 mt-10 cursor-pointer rounded-xl p-6">
        <div class="flex items-center justify-between">
          <h2 class="text-white">Self Care</h2>
          <img src="images/icon-ellipsis.svg" alt="" class="cursor-pointer" />
        </div>
        <div class="flex items-center justify-between gap-4 md:my-5 md:block">
          <h3 class="text-3xl font-thin text-white md:text-5xl">${getTimeFrame("Self Care", selctedTimeframe).current}hrs</h3>
          <p class="text-custom-Desaturated-blue md:my-2">${previousTime} - <span>${getTimeFrame("Self Care", selctedTimeframe).previous}hrs</span></p>
        </div>
      </div>
    </div>
  </div>`;

  document.querySelector(".js-container").innerHTML = HTML;

  document.querySelectorAll(".js-timeframe-select-link").forEach((elem) => {
    elem.addEventListener("click", () => {
      const timeframe = elem.dataset.timeframe;
      selctedTimeframe = timeframe;
      localStorage.setItem("selectedTimeframe", selctedTimeframe);

      loadData(selctedTimeframe);
    });
  });
}
