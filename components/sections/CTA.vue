<template>
  <section class="cta-wrapper">
    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-card">
          <h2>Carve your path</h2>

          <p>
            At Arizona State University, you'll join a community that will help you explore your
            interests and learn new skills. Through quality academics, enrichment opportunities and
            support from friends and faculty, you'll graduate prepared to accomplish your goals
            throughout your life.
            <a href="#">Find the experience</a>
            that fits you.
          </p>

          <div class="cta-buttons">
            <button class="cta-btn maroon">Visit ASU</button>

            <button class="cta-btn maroon">Request information</button>

            <button class="cta-btn gold">Apply now</button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.cta-wrapper {
  padding: 72px 0;
  /* background: #f5f5f5; */
}

.cta-section {
  position: relative;

  max-width: 1920px;
  /* margin: 0 auto; */

  height: 600px;

  display: flex;
  align-items: center;

  overflow: hidden;

  background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2400&auto=format&fit=crop');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  /* Parallax effect */
  background-attachment: fixed;
}

.cta-container {
  width: 100%;
  max-width: 1240px;

  margin: 0 auto;
  padding: 0 32px;
}

.cta-card {
  width: 560px;
  min-height: 470px;

  background: #f2f2f2;

  padding: 48px;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cta-card h2 {
  margin: 0 0 28px;

  color: #191919;

  font-size: 60px;
  font-weight: 700;
  line-height: 1.05;
}

.cta-card p {
  margin: 0 0 34px;

  color: #191919;

  font-size: 18px;
  line-height: 1.7;
}

.cta-card p a {
  color: #8c1d40;
  font-weight: 700;
  text-decoration: underline;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

.cta-btn {
  height: 52px;

  padding: 0 30px;

  border: none;
  border-radius: 999px;

  font-size: 18px;
  font-weight: 700;

  cursor: pointer;

  transition: all 0.25s ease;
}

.cta-btn.maroon {
  background: #8c1d40;
  color: white;
}

.cta-btn.gold {
  background: #ffc627;
  color: #191919;
}

.cta-btn:hover {
  transform: translateY(-2px);
}

.cta-btn.maroon:hover {
  background: #6f1732;
}

.cta-btn.gold:hover {
  background: #eab308;
}

@media (max-width: 992px) {
  .cta-section {
    height: auto;
    padding: 80px 0;

    background-attachment: scroll;
  }

  .cta-container {
    padding: 0 24px;
  }

  .cta-card {
    width: 100%;
    min-height: auto;

    padding: 36px 28px;
  }

  .cta-card h2 {
    font-size: 42px;
  }

  .cta-card p {
    font-size: 16px;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .cta-wrapper {
    padding: 40px 0;
  }

  .cta-section {
    height: auto;
    padding: 40px 0;

    background-attachment: scroll;
  }

  .cta-container {
    padding: 0 16px;
  }

  .cta-card {
    width: 100%;
    min-height: auto;

    padding: 24px 20px;

    background: #ffffff;
  }

  .cta-card h2 {
    margin: 0 0 16px;

    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
  }

  .cta-card p {
    margin: 0 0 20px;

    font-size: 14px;
    line-height: 1.6;
  }

  .cta-card p a {
    font-size: 14px;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 12px;
  }

  .cta-btn {
    width: 100%;
    height: 44px;

    padding: 0 24px;

    font-size: 15px;
    font-weight: 700;
  }

  .cta-btn:hover {
    transform: none;
  }
}
</style>
