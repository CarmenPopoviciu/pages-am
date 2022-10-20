export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		if (url.pathname.startsWith("/hello")) {
			return new Response("Bonjour alligator ✌️!");
		}

		if (url.pathname.startsWith("/goodbye")) {
			return new Response("A plus tard alligator 👋");
		}

		if (url.pathname.startsWith("/party")) {
			return new Response("Oops! Tous les alligators sont allés à la fête 🎉");
		}

		if (url.pathname === "/") {
			return new Response("🐊 ROOT 🐊");
		}

		return env.ASSETS.fetch(request);
	},
};