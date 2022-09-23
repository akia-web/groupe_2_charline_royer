const app = Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      recherche: null,
      categorie: null,
      popup: false,

      categories: ["bricolage", "entretient"],
      tuto: [
        {
          titre: "Comment changer son ampoule ?",
          image: "images/ampoule.png",
          categorie: "bricolage",
          populaire: true,
          url: "ampoule.html",
        },
        {
          titre: "Comment nettoyer sa machine à lavée ?",
          image: "images/machine.jpg",
          categorie: "entretient",
          populaire: true,
          url: "machine-a-laver.html",
        },
        {
          titre: "Comment tapisser son mur ?",
          image: "images/tapisser.png",
          categorie: "bricolage",
          populaire: false,
          url: "tapisser.html",
        },
        {
          titre: "Comment nettoyer son frigo ?",
          image: "images/frigo.jpg",
          categorie: "entretient",
          populaire: false,
          url: "frigo.html",
        },
      ],
    };
  },
  methods: {
    goTo(url) {
      window.location.href = url;
    },
    getSelectedCategorie(item) {
      this.categorie = item;
      this.popup = false;
    },
  },
  beforeMount() {
    this.categorie = "populaire";
  },
});
app.mount("#app");
