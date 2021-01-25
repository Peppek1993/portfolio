<template>
  <div class="h-full px-6 overflow-y-auto font-extralight text-center pb-6">
    <section>
      <h2 class="skillsHeadline">
        Skills
      </h2>
      <p class="pb-4 border-b">
        I'm not a type of person to list 25 libraries/technologies/languages
        that I barely spent a few hours on and mark myself as proficient in
        them. I'm going to use this page to inform you on what areas of WebDev I
        feel confident in and can move around freely.
      </p>
    </section>
    <section>
      <h2 class="skillsHeadline">
        Basics
      </h2>
      <div class="flex items-center justify-center pb-2">
        <div class="skillsIcon">
          <img
            src="https://s.svgbox.net/files.svg?ic=html&fill=000"
            width="48"
            height="48"
          />
          <h2>HTML</h2>
        </div>
        <div class="skillsIcon">
          <img
            src="https://s.svgbox.net/files.svg?ic=css&fill=000"
            width="48"
            height="48"
          />
          <h2>CSS</h2>
        </div>
        <div class="skillsIcon">
          <img
            src="https://s.svgbox.net/files.svg?ic=js&fill=000"
            width="48"
            height="48"
          />
          <h2>Javascript</h2>
        </div>
      </div>
      <p class="pb-4 border-b">
        The Triforce of Web Dev - HTML, CSS & Javascript. I can say that I'm
        fairly confident in these and have spent countless hours learning the
        ins & outs of each.
      </p>
    </section>
    <section>
      <h2 class="skillsHeadline">Vue</h2>
      <div class="items-center flex flex-col pb-4 border-b">
        <img
          src="https://s.svgbox.net/files.svg?ic=vue&fill=000"
          width="48"
          height="48"
        />
        <p>
          My framework of choice is Vue and I feel the strongest in it. I've
          tried all the "Big 3" frameworks and fell in love with Vue
          immediately. I'm proficient in Vuex and Vue-Router and I've used and
          learned a handful of useful vue-specific libraries.
        </p>
      </div>
    </section>
    <section>
      <h2 class="skillsHeadline">Tailwind</h2>
      <div class="items-center flex flex-col pb-4 border-b">
        <img
          src="https://s.svgbox.net/files.svg?ic=tailwind&fill=000"
          width="48"
          height="48"
        />
        <p>
          To write clean and efficient CSS I mostly use Tailwind. I've started
          using it while developing my first "serious" project (Lightning Bet)
          and stuck with it. It feels very intuitive and gives me the ability to
          style my website fairly quickly.
        </p>
      </div>
    </section>
    <section>
      <h2 class="skillsHeadline">Other</h2>
      <div class="flex items-center justify-center pb-4">
        <div class="skillsIcon">
          <img
            src="https://s.svgbox.net/files.svg?ic=git&fill=000"
            width="48"
            height="48"
          />
          <h2>GIT</h2>
        </div>
        <div class="skillsIcon">
          <img src="./../../assets/icons/gsap.svg" width="48" height="48" />
          <h2>GSAP</h2>
        </div>
        <div class="skillsIcon">
          <img src="./../../assets/icons/rwd.png" width="48" height="48" />
          <h2>RWD</h2>
        </div>
        <div class="skillsIcon">
          <img src="./../../assets/icons/rest.png" width="48" height="48" />
          <h2>REST API</h2>
        </div>
      </div>
      <p>
        I'm familiar with GIT version control system and REST API. I've also
        started using GSAP to implement animations and transitions to my
        projects and I always make sure that all of my websites are mobile
        friendly and are fully responsive across multiple devices.
      </p>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['items'])
  }
}
</script>

<style></style>
