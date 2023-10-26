<script>
import PocketBase from 'pocketbase'
var connected = false;
var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
pocketbase_ip = "http://tavue.yannisborel.fr:80";
else pocketbase_ip = "http://127.0.0.1:8090";
const pb = new PocketBase(pocketbase_ip);
var currentUser;
export default {
  methods: {
    //this method allows a new user to sign up the system. Once done, the user receives an email
    //asking for account validation. Once the validation made the user is added to the system
    async login() {
      await pb
        .collection("users")
        .authWithPassword(
          document.getElementById("email").value,
          document.getElementById("passwd").value
        );

      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "Vous êtes maintenant connecté(e)";
        connected = true;
        currentUser = pb.authStore.model;
        document.getElementById("signOut").style.visibility = "hidden";
        document.getElementById("addPoem").style.visibility = "visible";
      }
    },
    //this method allows the already registred user to log in the system.
    async register() {
      currentUser = await pb.collection("users").create({
        email: document.getElementById("email").value,
        password: document.getElementById("passwd").value,
        passwordConfirm: document.getElementById("passwd").value,
        name: email.value,
      });
      if (currentUser) {
        document.getElementById("status").innerHTML =
          "Nous vous avons envoyer un mail de vérifictaion ...";
        await pb
          .collection("users")
          .requestVerification(document.getElementById("email").value);
      }
    },
    async googlelogin() {
      await pb.collection("users").authWithOAuth2({ provider: "google" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in";
        connected = true;
        currentUser = pb.authStore.model;
        document.getElementById("signOut").style.visibility = "hidden";
        document.getElementById("addPoem").style.visibility = "visible";
      }
    },
    async loginGithub() {
      await pb.collection("users").authWithOAuth2({ provider: "github" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "Vous êtes maintenant connecté avec Github";
        connected = true;
        currentUser=pb.authStore.model;
      }
    },
    async createPoem() {
      const record = await pb.collection("poems").create({
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
        private: document.getElementById("notpublic").value,
        email: currentUser.email,
        illustration: document.getElementById("file").files[0],
      });
    },
},
};
</script>
<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-200">
        <div class="card max-w-xl mx-auto p-8 bg-white shadow-lg rounded-xl text-center">
            <h1 class="text-4xl font-bold text-black mb-6">Connectez-vous !</h1>
            <div>
                <label class="block text-xl font-bold text-black mb-2 text-left">Adresse mail: </label>
                <input type="email" required id="email" placeholder="username@domain.tld" class="mb-4 w-full p-2 border border-gray-300 rounded-md"/>
                <label class="block text-xl font-bold text-black mb-2 text-left">Mot de passe: </label>
                <input type="password" required id="passwd" class="mb-4 w-full p-2 border border-gray-300 rounded-md"/>
                <div class="flex justify-center space-x-12 mb-6">
                    <button v-on:click="register()" class="bg-indigo-600 text-white py-2 px-6 rounded-full transition hover:bg-indigo-500">S'inscrire</button>
                    <button v-on:click="login()" class="bg-indigo-600 text-white py-2 px-6 rounded-full transition hover:bg-indigo-500">Se connecter</button>
                </div>
                <div class="mb-6">
                    <button v-on:click="loginGithub()" class="flex items-center justify-center space-x-2 bg-gray-200 text-black py-2 px-5 rounded-full transition hover:bg-gray-400 ">
                        <img src="../assets/Github.svg" alt="github" class="w-10 h-10">
                        <span>Se connecter avec Github</span>
                    </button>
                </div>
                <p id="status" class="text-red-500">TaVue la connexion</p>
            </div>
        </div>
    </div>
</template>


