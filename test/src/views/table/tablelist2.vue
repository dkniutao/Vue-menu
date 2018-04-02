<template>
  <div class="">
    表格2
  </div>
</template>

<script>
export default {
  components: {
  },
  props: [
  ],
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  created () {
    this.$http.get('http://localhost:8080/api/seller').then((response) => {
      console.log(response.data)
    })
  },
  mounted () {
  }
}
</script>
