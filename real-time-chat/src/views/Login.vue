<template>
  <div class="container">
    <div id="login-row" class="row justify-content-center align-items-center">
      <div id="login-column" class="col-md-6">
        <div class="box">
          <div class="shape1"></div>
          <div class="shape2"></div>
          <div class="shape3"></div>
          <div class="shape4"></div>
          <div class="shape5"></div>
          <div class="shape6"></div>
          <div class="shape7"></div>
          <div class="float">
            <div class="form">
              <div class="form-group">
                <span>Enter a Display Name and Hit Enter</span>
                <input
                  class="form-control"
                  @keypress.enter="login"
                  v-model="displayName"
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
          displayName: ""
      },
    };
  },
  methods: {
    login() {
      //   const user = firebase
      //     .auth()
      //     .signInAnonymously()
      //     .then(this.$router.push("/"))
      //     .catch(function(error) {
      //       // Handle Errors here.
      //       var errorCode = error.code;
      //       var errorMessage = error.message;
      //       console.log(`${errorCode} - ${errorMessage}`);
      //       // ...
      //     });
      //   console.log(user);
      this.user.displayName = displayName;
      console.log(this.displayName);
      this.$router.push("/chat");
    }
  }
};
</script>

<style scoped>
.box {
  width: 500px;
  margin: 200px 0;
}

.shape1 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  float: left;
  margin-right: -50px;
}
.shape2 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  margin-top: -30px;
  float: left;
}
.shape3 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  margin-top: -30px;
  float: left;
  margin-left: -31px;
}
.shape4 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  margin-top: -25px;
  float: left;
  margin-left: -32px;
}
.shape5 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  float: left;
  margin-right: -48px;
  margin-left: -32px;
  margin-top: -30px;
}
.shape6 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  float: left;
  margin-right: -20px;
  margin-top: -35px;
}
.shape7 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  float: left;
  margin-right: -20px;
  margin-top: -57px;
}
.float {
  position: absolute;
  z-index: 2;
}

.form {
  margin-top: 48px;
  margin-left: 145px;
}
</style>
