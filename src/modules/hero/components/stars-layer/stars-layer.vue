<template>
  <mh-layer>
    <div>
      <svg id="sky">
        <circle
          v-for="y in 60" 
          :cx="getRandomX()"
          :cy="getRandomY()"
          :r="randomRadius()"
          stroke="none"
          strokeWidth="0"
          fill="white"
          :key="y"
          class="star"
        />
      
      </svg>
       <div id="shootingstars">
            <div v-for="y in 30"
              :key="y"
              class="wish"
              :style="{
                left: `${getRandomY()}px`,
                top: `${getRandomX()}px`
              }"
            />
        </div>
    </div>
  </mh-layer>
</template>

<script>
import anime from "animejs";
export default {
  data() {
    return {
      anime,
      num: 60,
      vw: Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      ),
      vh: Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      ),
    };
  },
  methods: {
    starryNight() {
      this.anime({
        targets: ["#sky .star"],
        opacity: [
          {
            duration: 700,
            value: "0",
          },
          {
            duration: 700,
            value: "1",
          },
        ],
        easing: "linear",
        loop: true,
        delay: (el, i) => 50 * i,
      });
    },
    shootingStars() {
      anime({
      targets: ["#shootingstars .wish"],
      easing: "linear",
      loop: true,
      delay: (el, i) => 4000 * i,
      opacity: [
        {
          duration: 1000,
          value: "1"
        }
      ],
      width: [
        {
          value: "200px"
        },
        {
          value: "0px"
        }
      ],
      translateX: 550
    });
    },
    randomRadius() {
      return Math.random() * 0.7 + 0.6;
    },
    getRandomX() {
      return Math.floor(Math.random() * Math.floor(this.vw)).toString();
    },
    getRandomY() {
      return Math.floor(Math.random() * Math.floor(this.vh)).toString();
    },
  },
   mounted() {
    this.starryNight();
    this.shootingStars();
  }
};
</script>

<style>
#sky {
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

#shootingstars {
  margin: 0;
  padding: 0;
  width: 150vh;
  height: 100vw;
  position: fixed;
  overflow: hidden;
  transform: translatex(calc(50vw - 50%)) translatey(calc(50vh - 50%))
    rotate(120deg);
}

.wish {
  height: 2px;
  top: 300px;
  width: 100px;
  margin: 0;
  opacity: 0;
  padding: 0;
  background-color: white;
  position: absolute;
  background: linear-gradient(-45deg, white, rgba(0, 0, 255, 0));
  filter: drop-shadow(0 0 6px white);
  overflow: hidden;
}
</style>