<template>
  <section class="difference-section">
   <div class="difference-header">
  <div class="container">
    <div class="difference-content">
      <p class="eyebrow">
        The ASU difference:
      </p>

      <h2 class="difference-title">
        We are measured not by whom we exclude,
        but by
        <span>whom we include</span>
        and
        <span>how they succeed</span>
      </h2>

      <p class="charter">
        — Excerpt from
        <a href="#">ASU charter</a>
      </p>
    </div>
  </div>
</div>

<div class="container">
  <div class="difference-grid">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="difference-card"
        >
          <img
            :src="feature.image"
            :alt="feature.title"
            class="card-image"
          />

          <div class="overlay"></div>

          <!-- Default Title -->
          <div class="card-title">
            <h3>{{ feature.title }}</h3>
          </div>

          <!-- Hover Content -->
          <div class="card-content">
            <h3>{{ feature.title }}</h3>

            <p>
              {{ feature.description }}
            </p>

            <button>
              Learn more
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Experience world-class academics',
    description:
      'As a comprehensive public research university, ASU is committed to providing excellence in education through the Academic Enterprise, empowering every student and expanding access to higher education for all.',
    image: 'https://picsum.photos/800/600?random=7',
  },
  {
    title: 'Discovery and innovation that serves the public',
    description:
      "As ASU focuses on research and discovery of public value, the Knowledge Enterprise advances research, innovation, partnerships, entrepreneurship and technology transfer.",
    image: 'https://picsum.photos/800/600?random=8',
  },
  {
    title: 'Serving all learners at every stage of life',
    description:
      "Assuming fundamental responsibility for the communities it serves, ASU's Learning Enterprise aims to serve learners at every stage of life by providing accessible opportunities to everyone.",
    image: 'https://picsum.photos/800/600?random=9',
  },
]
</script>

<style scoped>
/* ==========================================
   ASU Difference Quote Section
========================================== */
.container {
    max-width: 1248px;
    margin: 0 auto;
    padding: 100px 24px;
}
.difference-header {
  background: #f5f5f5;

 padding-top: 72px;
  padding-bottom: 48px;
}

.difference-header .container {
  max-width: 1240px;

  margin: 0 auto;
  padding: 0 32px;
}

.difference-content {
  max-width: 1020px;
}

.eyebrow {
  margin: 0 0 34px;

  color: #191919;

  font-size: 17px;
  font-weight: 700;
  line-height: 1.3;
}

.difference-title {
  margin: 0;

  color: #191919;

  font-size: 62px;
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -2px;
}

.difference-title span {
  display: inline;

  background: #ffc627;

  padding: 2px 8px;

  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.charter {
  margin-top: 26px;

  color: #191919;

  font-size: 16px;
  line-height: 1.5;
}

.charter a {
  color: inherit;
  text-decoration: underline;
}

/* ==========================================
   Cards Wrapper
========================================== */

.difference-cards {
  background: #f5f5f5;

  padding-top: 48px;
  /* padding-bottom: 100px; */
}

.difference-cards .container {
  max-width: 1240px;

  margin: 0 auto;
  padding: 0 32px;
}

/* ==========================================
   Grid
========================================== */

.difference-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 28px;
}

/* ==========================================
   Card
========================================== */

.difference-card {
  position: relative;

  overflow: hidden;

  width: 100%;
  height: 620px;

  cursor: pointer;
}

/* ==========================================
   Image
========================================== */

.card-image {
  width: 100%;
  height: 100%;

  object-fit: cover;
  display: block;

  transition:
    transform .5s ease,
    filter .5s ease;
}

/* ==========================================
   Dark Gradient Overlay
========================================== */

.overlay {
  position: absolute;
  inset: 0;

  z-index: 1;

  background:
    linear-gradient(
      to top,
      rgba(0, 0, 0, .82) 0%,
      rgba(0, 0, 0, .30) 45%,
      rgba(0, 0, 0, 0) 75%
    );

  transition: opacity .3s ease;
}

/* ==========================================
   Bottom Title
========================================== */

.card-title {
  position: absolute;

  left: 36px;
  right: 36px;
  bottom: 38px;

  z-index: 2;

  transition:
    opacity .3s ease,
    transform .3s ease;
}

.card-title h3 {
  margin: 0;

  color: white;

  font-size: 32px;
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -1px;
}

/* ==========================================
   Hover White Panel
========================================== */

.card-content {
  position: absolute;

  top: 50%;
  left: 32px;
  right: 32px;

  transform:
    translateY(-50%)
    scale(.96);

  opacity: 0;

  z-index: 3;

  background: white;

  padding: 34px;
  box-sizing: border-box;

  transition: all .35s ease;
}

.card-content h3 {
  margin: 0 0 24px;

  color: #191919;

  font-size: 42px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;
}

.card-content p {
  margin: 0 0 28px;

  color: #191919;

  font-size: 16px;
  line-height: 1.7;
}

.card-content button {
  border: none;
  border-radius: 999px;

  background: #ffc627;
  color: #000;

  padding: 14px 24px;

  font-size: 15px;
  font-weight: 700;

  cursor: pointer;

  transition: all .2s ease;
}

.card-content button:hover {
  background: #f2b600;
}

/* ==========================================
   Hover Effects
========================================== */

.difference-card:hover .card-image {
  transform: scale(1.06);
}

.difference-card:hover .card-title {
  opacity: 0;

  transform: translateY(12px);
}

.difference-card:hover .card-content {
  opacity: 1;

  transform:
    translateY(-50%)
    scale(1);
}

/* ==========================================
   Large Tablets
========================================== */

@media (max-width: 1200px) {
  .difference-header {
    padding-top: 90px;
    padding-bottom: 80px;
  }

  .difference-title {
    font-size: 54px;
  }

  .difference-content {
    max-width: 920px;
  }

  .difference-card {
    height: 560px;
  }

  .card-title h3 {
    font-size: 28px;
  }

  .card-content h3 {
    font-size: 36px;
  }
}

/* ==========================================
   Tablets / Mobile
========================================== */

@media (max-width: 992px) {
  .difference-header {
    padding-top: 72px;
    padding-bottom: 64px;
  }

  .difference-header .container,
  .difference-cards .container {
    padding: 0 24px;
  }

  .difference-content {
    max-width: 100%;
  }

  .difference-title {
    font-size: 42px;
    line-height: 1.12;
    letter-spacing: -1px;
  }

  .eyebrow {
    font-size: 16px;
  }

  .charter {
    font-size: 15px;
  }

  .difference-cards {
    padding-top: 64px;
    padding-bottom: 80px;
  }

  .difference-grid {
    grid-template-columns: 1fr;
  }

  .difference-card {
    height: 520px;
  }

  .card-title {
    left: 24px;
    right: 24px;
    bottom: 28px;
  }

  .card-title h3 {
    font-size: 36px;
  }

  .card-content {
    left: 24px;
    right: 24px;

    padding: 28px;
  }

  .card-content h3 {
    font-size: 32px;
  }
}
</style>