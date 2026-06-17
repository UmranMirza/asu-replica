<template>
  <section
    class="asu-you-section"
    :style="{
      backgroundImage: `url(${bgImage})`
    }"
  >
    <!-- Decorative Typography -->
    <div class="asu-for-you">
      <!-- Left YOU -->
      <span class="y-left">Y</span>
      <span class="o-left">O</span>
      <span class="u-left">U</span>

      <!-- ASU for -->
      <div class="asu-logo-text">
        <span class="asu-text">ASU</span>

        <svg
          class="for-curve"
          viewBox="0 0 140 100"
        >
          <defs>
            <path
              id="forPath"
              d="M15,10 C55,20 75,55 95,100"
            />
          </defs>

          <text>
            <textPath
              href="#forPath"
              startOffset="0%"
            >
              for
            </textPath>
          </text>
        </svg>
      </div>

      <!-- Right side cropped letters -->
      <span class="o-right">O</span>
      <span class="y-right">Y</span>
    </div>

    <!-- Content Card -->
    <div class="content-card">
      <h2>
        Reimagining education for everyone
      </h2>

      <span class="tag">
        New programs for all ages
      </span>

      <p>
        Ambition, curiosity, creativity and passion don't fit in any one box.
        No matter who you are or how you learn, ASU is ready to serve learners
        at every stage of life.
      </p>

      <p>
        ASU for You is the first step in a larger movement that is breaking
        down education barriers and building up high quality, affordable and
        accessible learning opportunities for everyone, from K-12 to
        midcareer to postretirement and every individual in between.
      </p>

      <button>
        Learn more
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const bgImage =
  'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=2000&q=80'
</script>



<style scoped>
.asu-you-section {
  position: relative;
  overflow: hidden;

  height: 760px;

  display: flex;
  align-items: center;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

/* ===========================
   ASU FOR YOU OVERLAY
=========================== */

.asu-for-you {
  position: absolute;
  inset: 0;

  overflow: hidden;

  z-index: 2;
  pointer-events: none;
}

/* Left Y */
.y-left {
  position: absolute;

  left: 8px;
  top: 340px;

  font-size: 300px;
  font-weight: 700;
  line-height: 0.8;

  color: rgba(255, 255, 255, 0.95);

  z-index: 2;
}

/* Left O */
.o-left {
  position: absolute;

  left: 85px;
  top: 505px;

  font-size: 300px;
  font-weight: 700;
  line-height: 0.8;

  color: rgba(255, 255, 255, 0.95);

  z-index: 2;
}

/* Left U */
.u-left {
  position: absolute;

  left: 470px;
  top: 560px;

  font-size: 300px;
  font-weight: 700;
  line-height: 0.8;

  color: rgba(255, 255, 255, 0.95);

  z-index: 2;
}

/* Right O */
.o-right {
  position: absolute;

  right: -95px;
  top: 120px;

  font-size: 300px;
  font-weight: 700;
  line-height: 0.8;

  color: rgba(255, 255, 255, 0.95);

  z-index: 2;
}

/* Bottom Right Y */
.y-right {
  position: absolute;

  right: 120px;
  bottom: -130px;

  font-size: 290px;
  font-weight: 700;
  line-height: 0.8;

  color: rgba(255, 255, 255, 0.95);

  z-index: 2;
}

/* ===========================
   ASU FOR CURVE
=========================== */

.asu-logo-text {
  position: absolute;

  left: 285px;
  top: 300px;

  z-index: 4;
}

.asu-text {
  display: block;

  color: #ffffff;

  font-size: 78px;
  font-weight: 700;
  line-height: 1;
}

.for-curve {
  position: absolute;

  left: 135px;
  top: 55px;

  width: 125px;
  height: 120px;

  overflow: visible;
}

.for-curve text {
  fill: #ffffff;

  font-size: 72px;
  font-weight: 700;
}

/* ===========================
   CONTENT CARD
=========================== */

.content-card {
  position: relative;

  z-index: 5;

  width: 560px;

  margin-left: auto;
  margin-right: 14%;

  background: #efefef;

  padding: 56px 48px;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.content-card h2 {
  margin: 0 0 28px;

  color: #191919;

  font-size: 58px;
  font-weight: 700;
  line-height: 1.05;
}

.tag {
  display: inline-block;

  margin-bottom: 32px;

  padding: 4px 8px;

  background: #ffc627;

  color: #191919;

  font-size: 28px;
  font-weight: 700;
}

.content-card p {
  margin: 0 0 28px;

  color: #191919;

  font-size: 20px;
  line-height: 1.7;
}

.content-card button {
  margin-top: 12px;

  border: none;
  border-radius: 999px;

  background: #8c1d40;
  color: #ffffff;

  padding: 16px 34px;

  font-size: 18px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.content-card button:hover {
  background: #6d1632;
  transform: translateY(-2px);
}

/* ===========================
   TABLET
=========================== */

@media (max-width: 1200px) {
  .content-card {
    margin-right: 5%;
    width: 520px;
  }

  .content-card h2 {
    font-size: 50px;
  }
}

/* ===========================
   MOBILE
=========================== */

@media (max-width: 992px) {
  .asu-you-section {
    height: auto;

    padding: 80px 24px;

    background-attachment: scroll;
  }

  .asu-for-you {
    display: none;
  }

  .content-card {
    width: 100%;

    margin: 0 auto;

    padding: 32px 28px;
  }

  .content-card h2 {
    font-size: 40px;
  }

  .tag {
    font-size: 22px;
  }

  .content-card p {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .asu-you-section {
    padding: 40px 16px;
  }

  .content-card {
    padding: 24px 20px;
  }

  .content-card h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  .tag {
    font-size: 18px;
    margin-bottom: 24px;
  }

  .content-card p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .content-card button {
    width: 100%;
    padding: 14px 24px;
    font-size: 16px;
  }
}
</style>