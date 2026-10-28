<script setup lang="ts">
const appUrl = "https://open.peepshare.ai/Yxf0/nhogdpsa";
const route = useRoute();
const menuOpen = ref(false);
const scrolled = ref(false);

const navItems = [
  { section: "home", href: "/home/", label: "Home" },
  { section: "event", href: "/event/", label: "Event" },
  { section: "join", href: "/join/", label: "Join with us" },
  { section: "terms", href: "/terms-and-conditions/", label: "Term and Condition" },
];

const activeSection = computed(() => {
  const path = route.path;
  if (path.startsWith("/event")) return "event";
  if (path.startsWith("/join") || path.startsWith("/partner")) return "join";
  if (path.startsWith("/terms-and-conditions")) return "terms";
  return "home";
});

function closeMenu() {
  menuOpen.value = false;
}

function syncBodyLock() {
  document.body.classList.toggle("menu-open", menuOpen.value);
}

function handleScroll() {
  scrolled.value = window.scrollY > 10;
}

function handleResize() {
  if (window.innerWidth > 960) closeMenu();
}

watch(menuOpen, syncBodyLock);
watch(() => route.fullPath, closeMenu);

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  document.body.classList.remove("menu-open");
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <header class="peep-header" :class="{ scrolled }">
    <nav class="nav container" aria-label="Primary navigation">
      <a class="brand" href="/home/" aria-label="PEEP SHARE home">
        <img class="brand-logo" src="/assets/FooterSquareLogo.png" alt="" />
        <span><span class="brand-peep">PEEP</span> <span class="brand-share">SHARE</span></span>
      </a>
      <div class="nav-links">
        <a
          v-for="item in navItems"
          :key="item.section"
          :class="{ active: item.section === activeSection }"
          :aria-current="item.section === activeSection ? 'page' : undefined"
          :href="item.href"
        >{{ item.label }}</a>
      </div>
      <a class="nav-cta" :href="appUrl">Get the App</a>
      <button
        class="menu-btn"
        type="button"
        :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <iconify-icon
          :icon="menuOpen ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear'"
          aria-hidden="true"
        />
      </button>
    </nav>
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <a
        v-for="item in navItems"
        :key="item.section"
        :class="{ active: item.section === activeSection }"
        :aria-current="item.section === activeSection ? 'page' : undefined"
        :href="item.href"
      >{{ item.label }}</a>
      <a :href="appUrl">Get the App</a>
    </div>
  </header>
</template>
