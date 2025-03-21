<script>
export default {
  mounted() {
    require('@syncfusion/ej2-base/styles.css');
  },
}
</script>

<template>
    <div>
        <Navbar />
          <slot />
    </div>
</template>