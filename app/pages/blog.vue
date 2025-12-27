<template>
  <div>
    <h1>Blog Posts</h1>
    <p>Like every semi-experienced software developer do I have some opinions on a lot of topics. This and more about my projects, ideas and whatever I feel like writing about can be found here.</p>
    <ul v-if="blogs">
      <li v-for="blog in blogs" :key="blog.id">
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.description }}</p>
        <a :href="blog.path">Read here</a>
      </li>
    </ul>
    <p v-else>Loading blogs...</p>
  </div>
</template>

<script setup lang="ts">
const { data: blogs } = await useAsyncData(
  `blogs`,
  () => queryCollection('content')
    .where('path', 'LIKE', '/blog/%')
    .all()
)
useTitle().value = 'Blogs'
</script>

<style scoped lang="sass">
ul
  padding: 0
  list-style: none
</style>