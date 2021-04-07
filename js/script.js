var app = new Vue(
  {
    el: "#app",
    data: {
      email: "",
      listaEmail: []
    },
    methods: {
      generaEmail: function() {
        this.listaEmail = [];
        for (var i = 0; i < 10; i++) {
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((risposta) => {
            this.email = risposta.data.response;
            this.listaEmail.push(this.email);
          });
        };
      }
    },
    // mounted: function() {
    //   for (var i = 0; i < 10; i++) {
    //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    //     .then((risposta) => {
    //       this.email = risposta.data.response;
    //       this.listaEmail.push(this.email);
    //     });
    //   };
    // }
  }
);
