<template>
  <div class="font-sans text-slate-700">
    <NuxtRouteAnnouncer />
    <Navbar />
    <main>
      <h1 class="hidden">Cheryl Yu's Portfolio</h1>
      <HomeSection />
      <AboutSection />
      <WorksSection />
      <PlaygroundSection />
      <ContactSection />
    </main>
  </div>
</template>

<script setup>
useHead({
  title: "Cheryl's Portfolio",
  meta: [
    // Open Graph meta tags
    { property: 'og:title', content: "Cheryl's Portfolio" },
    { property: 'og:description', content: 'Welcome to Cheryl Yu\'s portfolio website!' },
    { property: 'og:image', content: '/og/home.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: '/' },

    // Twitter Card meta tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: "Cheryl's Portfolio" },
    { name: 'twitter:description', content: 'Welcome to Cheryl Yu\'s portfolio website!' },
    { name: 'twitter:image', content: '/og/home.png' },

    // Basic meta tags
    { name: 'author', content: 'Cheryl Yu' },
    { name: 'keywords', content: 'Cheryl Yu, portfolio, web developer, front-end developer' },
    { name: 'description', content: 'Welcome to Cheryl Yu\'s portfolio website!' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },

    // Robots meta tag
    { name: 'robots', content: 'noindex, nofollow, noarchive, nosnippet' },
  ],
  link: [
    // Apple touch icon
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },

    // Favicon links
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ]
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
