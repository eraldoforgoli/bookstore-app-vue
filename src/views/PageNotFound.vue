<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12 text-center">
        <iframe
          width="500"
          height="500"
          src="https://lottiefiles.com/iframe/330-empty-status"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <div class="mb-4 lead">Oops! We can't seem to find the page you are looking for.</div>
        <a href="/home" class="btn btn-link">Back to Home</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style>
  body {
    background: #eee;
  }

  .container {
    padding: 5%;
  }

  .lead {
    background: #fff;
    padding: 4%;
  }
  <style>
