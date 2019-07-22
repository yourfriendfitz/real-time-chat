<template>
  <div class="home">
    <div class="container">
      <h3 class="text-center">Fitz Chat</h3>
      <div class="input_msg_write">
        <input type="text" v-model="displayName" placeholder="Display Name" />
      </div>
      <div class="messaging">
        <div class="inbox_msg">
          <div class="mesgs">
            <div class="msg_history">
              <div v-for="message in messages" class="incoming_msg">
                <div class="incoming_msg_img">
                  <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                  <h6 class="displayName">{{message.displayName}}</h6>
                </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>{{message.message}}</p>
                    <span class="time_date">{{message.timestamp}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="type_msg">
              <div class="input_msg_write">
                <input
                  @keyup.enter="saveMessage"
                  v-model="message"
                  type="text"
                  class="write_msg"
                  placeholder="Type a message"
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
  name: "PrivateChat",
  data() {
    return {
      message: null,
      messages: [],
      displayName: "",
    };
  },
  methods: {
    test() {
      console.log(this.displayName);
    },
    fetchMessages() {
      db.collection("chat")
        .orderBy("time")
        .get()
        .then(querySnapshot => {
          let allMessages = [];
          querySnapshot.forEach(doc => {
            allMessages.push(doc.data());
          });
          this.messages = allMessages;
        });
    },
    saveMessage() {
      // save to firestore database
      db.collection("chat").add({
        // grab message from v-model=message
        message: this.message,
        displayName: this.displayName,
        time: new Date(),
        timestamp: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`
      });
      // clear message field
      this.message = null;
      this.fetchMessages();
    }
  },
  // fetch chats from firestore
  created() {
    this.fetchMessages();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$on("displayName", displayName => {
        console.log(displayName);
        this.displayName = displayName;
        next();
      });
    });
  }
};
</script>

<style scoped="">
.container {
  max-width: 1170px;
  margin: auto;
}
img {
  max-width: 100%;
}
.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%;
  border-right: 1px solid #c4c4c4;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}
.top_spac {
  margin: 20px 0 0;
}


.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}
.srch_bar input {
  border: 1px solid #cdcdcd;
  border-width: 0 0 1px 0;
  width: 80%;
  padding: 2px 0 4px 6px;
  background: none;
}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon {
  margin: 0 0 0 -27px;
}

.chat_ib h5 {
  font-size: 15px;
  color: #464646;
  margin: 0 0 8px 0;
}
.chat_ib h5 span {
  font-size: 13px;
  float: right;
}
.chat_ib p {
  font-size: 14px;
  color: #989898;
  margin: auto;
}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}


.incoming_msg_img {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 6%;
  text-align: center;
}
.incoming_msg_img h6 {
  margin: 8px;
}

.incoming_msg {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
}

.received_msg {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 75vw;
  margin: auto;
}
.received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg {
  width: 57%;
}
.mesgs {
  float: left;
  padding: 30px 15px 0 25px;
  width: 100%;
}

.outgoing_msg {
  overflow: hidden;
  margin: 26px 0 26px;
}
.sent_msg {
  float: right;
  width: 46%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
  padding: 8px;
}

.type_msg {
  border-top: 1px solid #c4c4c4;
  position: relative;
}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.messaging {
  padding: 0 0 50px 0;
}
.msg_history {
  height: 516px;
  overflow-y: auto;
}
</style>
