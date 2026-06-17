<template>
  <header :class="{ scrolled: isScrolled }">
    <!-- Utility Bar -->
    <div class="utility-bar">
      <div class="container utility-content">
        <a href="#">ASU Home</a>
        <a href="#">My ASU</a>
        <a href="#">Colleges and Schools</a>
        <a href="#">Sign In</a>

        <button class="search-btn">
          Search
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>

    <!-- Main Header -->
    <div class="main-header">
      <div class="container">
        <div class="logo-row">
          <div class="logo-section">
            <!-- Text Logo -->
            <div class="text-logo">
              <div class="asu-text">ASU</div>

              <div class="asu-subtitle">
                Arizona State University
              </div>
            </div>

            <a
              href="#"
              class="university-name"
            >
              Arizona State University
            </a>
          </div>

         <button
  class="menu-button"
  @click="mobileMenuOpen = !mobileMenuOpen"
>
  ☰
</button>
        </div>

        <nav class="main-nav">
          <a
            href="#"
            class="active home-link"
          >
            <i class="fa-solid fa-house"></i>
          </a>

          <a href="#">News and Events</a>
          <a href="#">Academics</a>
          <a href="#">Admission</a>
          <a href="#">Research</a>
          <a href="#">Athletics</a>
          <a href="#">Alumni</a>
          <a href="#">Giving</a>
          <a href="#">President</a>
          <a href="#">About ASU</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 60
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.container {
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 24px;
}

/* HEADER */

header {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;

  background: #fff;

  z-index: 9999;

  transition:
    box-shadow .25s ease,
    transform .25s ease;
}

header.scrolled {
  box-shadow: 0 3px 14px rgba(0,0,0,.14);
}

/* Utility */

.utility-bar {
  height: 34px;

  background: #ececec;

  border-bottom: 1px solid #d8d8d8;
}

.utility-content {
  height: 34px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 20px;
}

.utility-content a,
.search-btn {
  font-size: 12px;
  color: #191919;

  text-decoration: none;

  font-weight: 400;
}

.utility-content a:hover {
  text-decoration: underline;
}

.search-btn {
  border: none;
  background: transparent;

  cursor: pointer;
}

.search-btn i {
  margin-left: 5px;
  font-size: 11px;
}

/* Main */

.main-header {
  border-bottom: 1px solid #d6d6d6;

  background: white;
}

/* Logo */

.logo-row {
  height: 82px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: all .25s ease;
}

header.scrolled .logo-row {
  height: 68px;
}

.logo-section {
  display: flex;
  align-items: center;
}

.text-logo {
  width: 86px;

  transition: all .25s ease;
}

header.scrolled .text-logo {
  width: 72px;
}

.asu-text {
  color: #8c1d40;

  font-size: 50px;
  font-weight: 800;

  letter-spacing: -3px;

  line-height: .9;

  transition: all .25s ease;
}

header.scrolled .asu-text {
  font-size: 42px;
}

.asu-subtitle {
  color: #8c1d40;

  font-size: 8px;
  font-weight: 600;

  line-height: 1.2;
}

.university-name {
  margin-left: 20px;

  color: #191919;

  text-decoration: none;

  font-size: 30px;
  font-weight: 700;

  transition: all .25s ease;
}

.university-name:hover {
  text-decoration: underline;

  text-decoration-color: #191919;

  text-underline-offset: 3px;
}

header.scrolled .university-name {
  font-size: 26px;
}

/* Navigation */

/* .main-nav {
  height: 44px;
  padding-left: 89px;
  display: flex;
  align-items: center;
} */

.main-nav {
  height: 48px;
   padding-left: 109px;
  display: flex;
  align-items: center;

  transition: all 0.25s ease;
}

header.scrolled .main-nav {
  height: 38px;
   padding-left: 90px;
}

.main-nav a {
  position: relative;

  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 18px;

  color: #191919;

  text-decoration: none;

  font-size: 15px;
  font-weight: 400;

  white-space: nowrap;
}

.main-nav a::after {
  content: "";

  position: absolute;

  bottom: 0;
  left: 8px;
  right: 8px;

  height: 5px;

  background: #ffc627;

  transform: scaleX(0);

  transition: transform .2s ease;
}

.main-nav a:hover::after,
.main-nav a.active::after {
  transform: scaleX(1);
}

.home-link {
  padding-left: 0;
  padding-right: 0;

  width: 44px;
}

.home-link i {
  font-size: 16px;
}

/* Mobile */

.menu-button {
  display: none;
}
.mobile-nav {
  position: fixed;

  top: 88px; /* below mobile header */
  left: 0;
  right: 0;

  background: white;

  z-index: 99998;

  border-top: 1px solid #ddd;

  box-shadow: 0 6px 18px rgba(0,0,0,.15);
}

.mobile-nav a {
  display: block;

  padding: 18px 24px;

  color: #191919;

  text-decoration: none;

  border-bottom: 1px solid #eee;
}

.mobile-nav a:hover {
  background: #f7f7f7;
}
@media (max-width: 992px) {
  .utility-bar {
    display: none;
  }

  .main-nav {
    display: none;
  }

  .menu-button {
    display: block;

    border: none;
    background: none;

    font-size: 28px;

    cursor: pointer;
  }

  .logo-row {
    height: 70px;
  }

  .university-name {
    font-size: 22px;
  }

  .text-logo {
    width: 65px;
  }

  .asu-text {
    font-size: 38px;
  }
}

@media (max-width: 768px) {
header {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;

  background: #fff;

  z-index: 99999; /* was 9999 */
}
.menu-button {
  display: none;

  position: relative;
  z-index: 100000;

  pointer-events: auto;
}
.university-name:hover {
  text-decoration: underline;

  text-decoration-color: #191919;

  text-underline-offset: 3px;
}

header.scrolled .university-name {
  font-size: 16px;
}
  .utility-bar {
    display: none;
  }

  .main-nav {
    display: none;
  }

  .logo-row {
    height: 88px;

    padding: 0 20px;
  }

  .logo-section {
    align-items: flex-start;
  }

  .text-logo {
    width: 78px;
  }

  .asu-text {
    font-size: 34px;
  }

  .asu-subtitle {
    font-size: 7px;
  }

  .logo-section h1 {
    margin-left: 12px;

    font-size: 18px;
    line-height: 1.2;

    max-width: 140px;
  }

  .menu-button {
    display: block;

    border: none;
    background: none;

    font-size: 30px;

    padding: 0;

    cursor: pointer;
  }
}
</style>