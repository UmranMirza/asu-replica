<template>
  <section class="stories-section">
    <div class="container">
      <h2 class="stories-title">Stories of excellence</h2>

      <div class="stories-grid">
        <CardImageArticle
          v-for="story in stories"
          :key="story.title"
          :image-source="story.image"
          :image-alt="story.title"
          :title="story.title"
          :date="story.date"
          :minutes="story.minutes"
          :cta-link="story.link"
          cta-text="Read more"
          title-level="h3"
          title-size="medium"
          title-variant="dark-3"
          bg-variant="white"
          :display-border="true"
          :display-label-text="false"
          @cta-click="handleStoryClick(story)"
        >
          <p class="story-description">
            {{ story.description }}
          </p>
        </CardImageArticle>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CardImageArticle } from '@rds-vue-ui/card-image-article'

const stories = [
  {
    title: 'ASU graduate wins $100K in pitch competition',
    description:
      'Days after graduating from ASU, finance alum Logan Milano won $100,000 for his startup.',
    image: 'https://picsum.photos/800/600?random=1',
    date: 'June 17, 2026',
    minutes: '2',
    link: '#',
  },
  {
    title: 'Winners of prestigious Flinn Scholarship join ASU',
    description: 'Top Arizona high school grads have chosen ASU for its academic experience.',
    image: 'https://picsum.photos/800/600?random=2',
    date: 'June 15, 2026',
    minutes: '3',
    link: '#',
  },
  {
    title: 'Two ASU professors elected to National Academy of Sciences',
    description: 'Researchers recognized for contributions to science and innovation.',
    image: 'https://picsum.photos/800/600?random=3',
    date: 'June 12, 2026',
    minutes: '4',
    link: '#',
  },
  {
    title: 'University expands its role in chip research',
    description: 'ASU joins major initiatives accelerating semiconductor innovation.',
    image: 'https://picsum.photos/800/600?random=4',
    date: 'June 10, 2026',
    minutes: '2',
    link: '#',
  },
  {
    title: 'Barrett, The Honors College is creating bright futures',
    description: 'Students continue earning prestigious fellowships and opportunities.',
    image: 'https://picsum.photos/800/600?random=5',
    date: 'June 8, 2026',
    minutes: '3',
    link: '#',
  },
  {
    title: 'Alliance set to improve health outcomes in Arizona',
    description: 'ASU Health partnership expands clinical and research opportunities.',
    image: 'https://picsum.photos/800/600?random=6',
    date: 'June 5, 2026',
    minutes: '2',
    link: '#',
  },
]

const handleStoryClick = (story: (typeof stories)[number]) => {
  console.log('Story clicked:', story.title)
}
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
