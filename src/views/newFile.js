import { pocketbase_ip } from './Inscription.vue';

if (import.meta.env.MODE === "production")
pocketbase_ip = "https://tavuefr:443";
else pocketbase_ip = "http://127.0.0.1:8090";
