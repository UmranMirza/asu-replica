<template>
  <section class="campus-section">
    <div class="campus-container">
      <h2 class="section-title">
        <span>One university, many places</span>
      </h2>

      <div class="carousel">
        <button class="nav prev" @click="prevSlide">‹</button>

        <div class="viewport">
          <div
            class="track"
            :style="{
              '--slide-offset': currentIndex,
            }"
          >
            <div v-for="campus in campuses" :key="campus.name" class="slide">
              <img :src="campus.image" :alt="campus.name" />

              <div class="slide-content">
                <h3>{{ campus.name }}</h3>

                <button>Visit</button>
              </div>
            </div>
          </div>
        </div>

        <button class="nav next" @click="nextSlide">›</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const campuses = [
  {
    name: 'Polytechnic campus',
    image: 'https://picsum.photos/1600/900?11',
  },
  {
    name: 'Tempe campus',
    image: 'https://picsum.photos/1600/900?12',
  },
  {
    name: 'West Valley campus',
    image: 'https://picsum.photos/1600/900?13',
  },
  {
    name: 'Washington D.C.',
    image: 'https://picsum.photos/1600/900?14',
  },
  {
    name: 'Media and Immersive',
    image: 'https://picsum.photos/1600/900?15',
  },
]

const currentIndex = ref(1)

const nextSlide = () => {
  currentIndex.value = currentIndex.value === campuses.length - 1 ? 0 : currentIndex.value + 1
}

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? campuses.length - 1 : currentIndex.value - 1
}
</script>

<style scoped>
.campus-section {
  background: #efefef;
  padding: 0 0 80px;
  overflow: hidden;
}

.campus-container {
  max-width: 100%;
}

.section-title {
  max-width: 1280px;
  margin: 0 auto 28px;
  padding: 0 32px;
}

.section-title span {
  display: inline-block;

  background: #ffc627;
  color: #191919;

  padding: 4px 8px;

  font-size: 58px;
  font-weight: 700;
  line-height: 1.1;
}

.carousel {
  position: relative;
}

.viewport {
  overflow: hidden;
}

.track {
  display: flex;
  gap: 24px;

  transition: transform 0.5s ease;
  transform: translateX(calc(-1 * var(--slide-offset) * 80% - var(--slide-offset) * 24px));
}

.slide {
  position: relative;

  flex: 0 0 80%;

  height: 620px;

  overflow: hidden;
  border-radius: 24px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
}

.slide img {
  width: 100%;
  height: 100%;

  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.slide:hover img {
  transform: scale(1.03);
}

.slide-content {
  position: absolute;

  left: 32px;
  bottom: 32px;
  right: 32px;

  display: flex;
  flex-direction: column;
  gap: 14px;
}

.slide-content h3 {
  display: inline-flex;
  align-items: center;

  margin: 0;

  background: rgba(255, 255, 255, 0.95);
  color: #191919;

  padding: 14px 22px;

  font-size: 28px;
  font-weight: 700;
  line-height: 1.1;

  border-radius: 999px;
}

.slide-content button {
  align-self: flex-start;

  border: none;
  border-radius: 999px;

  background: #ffc627;
  color: #191919;

  padding: 14px 28px;

  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.16);
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.slide-content button:hover {
  transform: translateY(-1px);
  background: #e6b30f;
}

.nav {
  position: absolute;
  top: 50%;

  transform: translateY(-50%);

  width: 56px;
  height: 56px;

  border: none;
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.95);

  font-size: 42px;
  line-height: 1;

  cursor: pointer;

  z-index: 20;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.prev {
  left: 14px;
}

.next {
  right: 14px;
}

@media (max-width: 992px) {
  .section-title {
    padding: 0 24px;
  }

  .section-title span {
    font-size: 38px;
  }

  .slide {
    flex: 0 0 100%;
    height: 420px;
  }

  .slide-content {
    left: 24px;
    bottom: 24px;
  }

  .slide-content h3 {
    font-size: 28px;
  }

  .track {
    gap: 0;
  }

  .nav {
    width: 48px;
    height: 48px;

    font-size: 34px;
  }
}

@media (max-width: 768px) {
  .campus-section {
    padding-bottom: 40px;
  }

  .section-title {
    padding: 0 16px;
  }

  .section-title span {
    font-size: 30px;
  }

  .carousel {
    padding: 0 16px;
  }

  .viewport {
    overflow: hidden;
  }

  .track {
    gap: 0;
    transform: translateX(calc(-1 * var(--slide-offset) * 100%));
  }

  .slide {
    flex: 0 0 100%;
    height: 320px;
    max-width: 100%;
  }

  .slide-content {
    left: 16px;
    bottom: 16px;
  }

  .slide-content h3 {
    font-size: 24px;
  }

  .slide-content button {
    padding: 12px 22px;
    font-size: 14px;
  }

  .nav {
    width: 42px;
    height: 42px;
    font-size: 28px;
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }
}
</style>
