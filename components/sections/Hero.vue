<template>
  <section class="hero">
    <!-- Desktop Video -->
    <div class="overlay" />

    <div class="container hero-content">
      <div class="hero-text">
        <h1>Study at one of the most prestigious research institutions in the nation</h1>

        <p>
          ASU is part of the Association of American Universities, a highly selective group of top
          research institutions that advocates for innovation, education and academic excellence.
        </p>

        <!-- <button class="cta-button">Find out more</button> -->
        <RdsButton class="cta-button" size="large"> Find out more </RdsButton>
      </div>

      <button class="pause-button" @click="toggleVideo">
        {{ isPlaying ? '❚❚' : '▶' }}
      </button>
    </div>
    <video v-if="!isMobile" ref="videoRef" autoplay muted loop playsinline class="hero-video">
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>

    <!-- Mobile Image -->

    <img v-else :src="mobileHeroImage" alt="ASU Research" class="hero-mobile-image" />

    <div class="overlay" />

    <div class="container hero-content">...</div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const videoRef = ref(null)
const isPlaying = ref(true)
const mobileHeroImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80'
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
const toggleVideo = () => {
  if (!videoRef.value) return

  if (isPlaying.value) {
    videoRef.value.pause()
  } else {
    videoRef.value.play()
  }

  isPlaying.value = !isPlaying.value
}
</script>

<style scoped>
.hero {
  position: relative;

  min-height: calc(75vh + 140px);

  padding-top: 140px;

  display: flex;
  align-items: center;

  overflow: hidden;
}

.hero-video {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;

  background: rgba(0, 0, 0, 0.55);
}

.hero-content {
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.hero-text {
  max-width: 700px;

  color: white;
}

.hero-text h1 {
  font-size: 4rem;
  line-height: 1.1;

  margin-bottom: 2rem;
}

.hero-text p {
  font-size: 1.4rem;
  line-height: 1.6;
}

.cta-button {
  margin-top: 2rem;

  border: none;
  border-radius: 999px;

  background: #ffc627;

  padding: 1rem 2rem;

  font-size: 1.1rem;
  font-weight: 700;
  color: #191919;
  cursor: pointer;
}

.pause-button {
  width: 60px;
  height: 60px;

  border: none;
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.25);
  color: white;

  font-size: 1.5rem;

  cursor: pointer;
}

.hero-mobile-image {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center top;
}

@media (max-width: 768px) {
  .hero {
    min-height: 580px;
    padding-top: 0;
  }

  .hero-content {
    height: 100%;

    display: flex;
    align-items: flex-end;

    padding: 0 32px 40px;
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-text h1 {
    font-size: 3.2rem;
    line-height: 1.06;

    margin-bottom: 20px;
    margin-top: 6rem;
    font-weight: 700;
  }

  .hero-text p {
    display: none;
  }

  .cta-button {
    margin-top: 0;
    position: absolute;
    bottom: -114px;
    left: 32px;

    height: 48px;

    padding: 0 28px;

    font-size: 1rem;
  }

  .pause-button {
    display: none;
  }

  .overlay {
    position: absolute;
    inset: 0;

    background: rgba(0, 0, 0, 0.55);
  }

  .hero-content {
    position: relative;
    z-index: 2;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .hero-text {
    max-width: 700px;

    color: white;
  }

  .hero-text h1 {
    font-size: 1.5rem;
    line-height: 1.1;

    margin-bottom: 2rem;
  }

  .hero-text p {
    font-size: 1.4rem;
    line-height: 1.6;
  }

  .cta-button {
    margin-top: 2rem;

    border: none;
    border-radius: 999px;

    background: #ffc627;

    padding: 1rem 2rem;

    font-size: 1rem;
    font-weight: 700;

    cursor: pointer;
  }
}
</style>
