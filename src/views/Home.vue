<template>
  <div class="container">
    <jumbotron :content="content"></jumbotron>
  </div>
</template>

<script>
import UserService from '../services/user.service';
import Jumbotron from './../components/Jumbotron'

export default {
  components: { Jumbotron },
  name: 'Home',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data.content;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>