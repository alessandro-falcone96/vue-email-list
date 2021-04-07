var app = new Vue(
  {
    el: "#app",
    data: {
      email: "",
    },
    methods: {
      generateEmail: function() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((risposta) => {
          this.email = risposta.data.response;
        });
      },
    }
  }
);
