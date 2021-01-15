<template>
  <div
    class="h-full rounded-b-xl font-light text-lg overflow-y-auto sm:overflow-hidden overflow-x-hidden relative"
  >
    <svg
      id="blobSvg"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute blob"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color: rgb(255, 95, 109);"></stop>
          <stop offset="100%" style="stop-color: rgb(255, 195, 113);"></stop>
        </linearGradient>
      </defs>
      <path
        id="blob"
        d="M415.5,321.5Q393,393,321.5,434.5Q250,476,192,421Q134,366,67.5,308Q1,250,48.5,173Q96,96,173,85Q250,74,319,93Q388,112,413,181Q438,250,415.5,321.5Z"
        fill="url(#gradient)"
      ></path>
    </svg>
    <div class="p-4">
      <img
        src="./../../assets/aboutme.jpg"
        class="w-32 sm:w-48 rounded-md shadow float-left mr-2"
      />
      <section class="">
        <h1 class="font-medium text-3xl text-yellow-400">Hey!</h1>
        <p class="text-base">
          My name is Adam Partyka, I'm 27 years old and I live in Cracow,
          Poland. I'm a self-taught web developer, focusing mostly on the front
          end. I've graduated from Kielce University of Technology with
          Engineering degree in Surveying and Cartography. I've spent majority
          of my life working with computers in some form so I figured I might as
          well give this whole "programming" thing a go. Turns out I quite like
          it so I stuck with it until now - started about 1.5 year ago. My main
          approach when building a website is to think outside the box. I never
          liked doing the same thing everyone else is doing. That's my approach
          to life c:
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.imagePosition {
  position: absolute;
  top: 25px;
  left: 10px;
}

.blob {
  z-index: -1;
  animation: move 10s ease-in-out infinite;
  transform-origin: 50% 50%;
}
@keyframes move {
  0% {
    transform: scale(1) translate(10px, -30px);
  }
  38% {
    transform: scale(0.8, 1) translate(20vw, 30vh) rotate(160deg);
  }
  40% {
    transform: scale(0.8, 1) translate(20vw, 30vh) rotate(160deg);
  }
  78% {
    transform: scale(1.3) translate(0vw, 20vh) rotate(-20deg);
  }
  80% {
    transform: scale(1.3) translate(0vw, 20vh) rotate(-20deg);
  }
  100% {
    transform: scale(1) translate(10px, -30px);
  }
}
</style>
