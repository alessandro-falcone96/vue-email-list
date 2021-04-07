var app = new Vue(
  {
    el: "#app",
    data: {
      email: "",
      listaEmail: [],
      numero: ""
    },
    methods: {
      generaEmail: function() {
        this.listaEmail = [];
        for (var i = 0; i < this.numero; i++) {
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((risposta) => {
            this.email = risposta.data.response;
            this.listaEmail.push(this.email);
          });
        };
        this.numero = "";
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
