```javascript
// ===============================
// CONFIGURATION SUPABASE
// ===============================

const SUPABASE_URL = "TON_URL_SUPABASE";

const SUPABASE_ANON_KEY = "TA_CLE_ANON_SUPABASE";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);


// ===============================
// CONNEXION
// ===============================

async function connexion() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById("loginMessage");


    const { data, error } =
        await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });


    if (error) {

        message.textContent =
            "❌ Email ou mot de passe incorrect.";

        return;
    }


    afficherAdmin();
}


// ===============================
// AFFICHER ADMIN
// ===============================

function afficherAdmin() {

    document
        .getElementById("loginPage")
        .style.display = "none";

    document
        .getElementById("adminPage")
        .classList.add("active");
}


// ===============================
// DÉCONNEXION
// ===============================

async function deconnexion() {

    await supabaseClient.auth.signOut();

    location.reload();
}


// ===============================
// NAVIGATION
// ===============================

function afficherSection(section) {

    document
        .querySelectorAll(".admin-section")
        .forEach(element => {

            element.style.display = "none";

        });


    document
        .getElementById(section)
        .style.display = "block";
}


// ===============================
// COULEUR
// ===============================

let couleurSelectionnee = "#6366f1";


function choisirCouleur(couleur) {

    couleurSelectionnee = couleur;
}


// ===============================
// SAUVEGARDER APPARENCE
// ===============================

async function sauvegarderApparence() {

    const nom =
        document.getElementById("siteName").value;


    const { error } =
        await supabaseClient
            .from("site_settings")
            .upsert({
                id: 1,
                site_name: nom,
                primary_color: couleurSelectionnee
            });


    if (error) {

        document.getElementById("saveMessage")
            .textContent =
            "❌ Erreur : " + error.message;

        return;
    }


    document.getElementById("saveMessage")
        .textContent =
        "✅ Modifications enregistrées.";
}


// ===============================
// SAUVEGARDER CONTENU
// ===============================

async function sauvegarderContenu() {

    const title =
        document.getElementById("mainTitle").value;

    const description =
        document.getElementById("mainDescription").value;


    const { error } =
        await supabaseClient
            .from("site_settings")
            .upsert({
                id: 1,
                main_title: title,
                main_description: description
            });


    if (error) {

        alert(
            "Erreur : " + error.message
        );

        return;
    }


    alert(
        "✅ Contenu enregistré !"
    );
}


// ===============================
// VÉRIFIER LA SESSION
// ===============================

async function verifierConnexion() {

    const {
        data: { session }
    } = await supabaseClient
        .auth
        .getSession();


    if (session) {

        afficherAdmin();

    } else {

        document
            .getElementById("adminPage")
            .classList.remove("active");
    }
}


verifierConnexion();
```


