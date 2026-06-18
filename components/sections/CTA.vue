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
            <a href="#" class="btn btn-lg btn-primary"> Visit ASU </a>

            <a href="#" class="btn btn-lg btn-primary"> Request information </a>

            <a href="#" class="btn btn-lg btn-secondary"> Apply now </a>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.cta-wrapper {
  padding: 72px 0;
}

.cta-section {
  position: relative;
  max-width: 1920px;
  height: 600px;

  display: flex;
  align-items: center;
  overflow: hidden;

  background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2400&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Parallax */
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

/* RDS Buttons */
.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

.cta-buttons .btn {
  border-radius: 999px;
  font-weight: 700;
  min-width: 180px;
  text-decoration: none;
}

/* Tablet */
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

  .cta-buttons .btn {
    width: 100%;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .cta-buttons {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .cta-buttons .btn {
    width: fit-content;
    min-width: 220px;
    padding: 12px 28px;
    font-size: 16px;
    border-radius: 999px;
  }
}
</style>
