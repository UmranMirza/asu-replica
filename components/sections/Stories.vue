<template>
  <section class="stories-section">
    <div class="container">
      <h2 class="stories-title">
        Stories of excellence
      </h2>

      <div class="stories-grid">
        <article
          v-for="story in stories"
          :key="story.title"
          class="story-card"
        >
          <div class="image-wrapper">
            <img
              :src="story.image"
              :alt="story.title"
            />
          </div>

          <div class="story-content">
            <h3>{{ story.title }}</h3>

            <p>{{ story.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stories = [
  {
    title: 'ASU graduate wins $100K in pitch competition',
    description:
      'Days after graduating from ASU, finance alum Logan Milano won $100,000 for his startup, Amryth, at Arizona’s premier collegiate entrepreneurship competition.',
    image: 'https://picsum.photos/800/600?random=1',
  },
  {
    title: 'Winners of prestigious Flinn Scholarship join ASU',
    description:
      'Top Arizona high school grads and winners of the Flinn Scholarship have chosen ASU for its academic experience, research opportunities and outstanding honors education.',
    image: 'https://picsum.photos/800/600?random=2',
  },
  {
    title: 'Two ASU professors elected to National Academy of Sciences',
    description:
      'Amber Wutich and Robert Page were recognized by the renowned institution for their research in water insecurity and behavior of social insects.',
    image: 'https://picsum.photos/800/600?random=3',
  },
  {
    title: 'University expands its role in chip research',
    description:
      'ASU is joining Applied Materials’ new EPIC Center, connecting universities and tech companies to accelerate semiconductor research and manufacturing innovation.',
    image: 'https://picsum.photos/800/600?random=4',
  },
  {
    title: 'Barrett, The Honors College is creating bright futures',
    description:
      'Barrett students go on to attend the best graduate schools, win prestigious fellowships and accept positions with some of the world’s leading organizations.',
    image: 'https://picsum.photos/800/600?random=5',
  },
  {
    title: 'Alliance set to improve health outcomes in Arizona',
    description:
      'ASU Health’s partnership with HonorHealth will provide clinical training and research collaboration opportunities for students in the School of Medicine.',
    image: 'https://picsum.photos/800/600?random=6',
  },
]
</script>

<style scoped>
.stories-section {
  padding: 72px 0;
}

.stories-title {
  display: inline-block;

  margin: 0 0 50px;

  padding: 4px 12px;

  background: #ffc627;

  font-size: 54px;
  font-weight: 700;
  line-height: 1;
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.story-card {
  cursor: pointer;
}

.image-wrapper {
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 240px;

  object-fit: cover;

  transition: transform 0.5s ease;
}

.story-content {
  position: relative;

  width: calc(100% - 32px);

  margin: -32px auto 0;

  padding: 20px 18px;

  background: white;

  transition: all 0.3s ease;
}

.story-content h3 {
  margin: 0 0 12px;

  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
}

.story-content p {
  margin: 0;

  font-size: 16px;
  line-height: 1.6;

  color: #191919;
}

/* Hover Effects */
.story-card:hover .image-wrapper img {
  transform: scale(1.08);
}

.story-card:hover .story-content {
  transform: translateY(-8px);
}

@media (max-width: 992px) {
  .stories-grid {
    grid-template-columns: 1fr;
  }

  .stories-title {
    font-size: 38px;
  }

  .story-content h3 {
    font-size: 22px;
  }
}
</style>