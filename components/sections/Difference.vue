<template>
  <section class="difference-section">
    <div class="difference-header">
      <div class="container">
        <div class="difference-content">
          <p class="eyebrow">The ASU difference:</p>

          <h2 class="difference-title">
            We are measured not by whom we exclude, but by
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
        <CardImageTile
          v-for="feature in features"
          :key="feature.title"
          :bg-image-src="feature.image"
          :title="feature.title"
          :text="feature.description"
          cta-text="Learn more"
          cta-link="#"
          title-size="xl"
          title-variant="white"
          text-size="medium"
          text-variant="dark-3"
          :display-gradient="true"
          :gradient-opacity="0.85"
          :display-cta="true"
          :display-cta-button="true"
          cta-button-mobile-variant="secondary"
          cta-button-desktop-variant="secondary"
          :clickable-card="true"
          @click="handleLearnMore(feature)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CardImageTile } from '@rds-vue-ui/card-image-tile'

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
      'As ASU focuses on research and discovery of public value, the Knowledge Enterprise advances research, innovation, partnerships, entrepreneurship and technology transfer.',
    image: 'https://picsum.photos/800/600?random=8',
  },
  {
    title: 'Serving all learners at every stage of life',
    description:
      "Assuming fundamental responsibility for the communities it serves, ASU's Learning Enterprise aims to serve learners at every stage of life by providing accessible opportunities to everyone.",
    image: 'https://picsum.photos/800/600?random=9',
  },
]

const handleLearnMore = (feature: (typeof features)[number]) => {
  console.log('Learn more:', feature.title)
}
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
   Grid
========================================== */

.difference-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 28px;
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
}

/* ==========================================
   Tablets / Mobile
========================================== */

@media (max-width: 992px) {
  .difference-header {
    padding-top: 72px;
    padding-bottom: 64px;
  }

  .difference-header .container {
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

  .difference-grid {
    grid-template-columns: 1fr;
  }
}
</style>
