const SUPABASE_URL =
    "https://llgmpyuzaefuyjyklqoz.supabase.co";

const SUPABASE_ANON_KEY =
    "sb_publishable_TA_CLE_ICI";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY
    );
```javascript
// ===============================
// CONFIGURATION SUPABASE
// ===============================

const SUPABASE_URL =
    "https://llgmpyuzaefuyjyklqoz.supabase.co";

const SUPABASE_ANON_KEY =
    "COLLE_ICI_TA_CLE_SB_PUBLISHABLE";


const supabaseClient =
    window.supabase.createClient(
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


    message.textContent = "Connexion...";


    const { data, error } =
        await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });


    if (error) {

        message.textContent =
            "❌ Email ou mot de passe incorrect.";

        console.error(error);

        return;
    }


    message.textContent =
        "✅ Connexion réussie !";


    afficherAdmin();
}


// ===============================
// AFFICHER ADMIN
// ===============================

function afficherAdmin() {

    const loginPage =
        document.getElementById("loginPage");

    const adminPage =
        document.getElementById("adminPage");


    if (loginPage) {
        loginPage.style.display = "none";
    }


    if (adminPage) {
        adminPage.classList.add("active");
    }
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


    const sectionElement =
        document.getElementById(section);


    if (sectionElement) {

        sectionElement.style.display = "block";

    }
}


// ===============================
// COULEUR
// ===============================

let couleurSelectionnee =
    "#6366f1";


function choisirCouleur(couleur) {

    couleurSelectionnee =
        couleur;


    document.documentElement.style.setProperty(
        "--couleur-principale",
        couleur
    );
}


// ===============================
// SAUVEGARDER APPARENCE
// ===============================

async function sauvegarderApparence() {

    const siteNameElement =
        document.getElementById("siteName");


    const saveMessage =
        document.getElementById("saveMessage");


    const nom =
        siteNameElement
            ? siteNameElement.value
            : "EduNova";


    const { error } =
        await supabaseClient
            .from("site_settings")
            .upsert({
                id: 1,
                site_name: nom,
                primary_color:
                    couleurSelectionnee
            });


    if (error) {

        console.error(error);


        if (saveMessage) {

            saveMessage.textContent =
                "❌ Erreur : " +
                error.message;

        }

        return;
    }


    if (saveMessage) {

        saveMessage.textContent =
            "✅ Modifications enregistrées.";

    }
}


// ===============================
// SAUVEGARDER CONTENU
// ===============================

async function sauvegarderContenu() {

    const titleElement =
        document.getElementById("mainTitle");


    const descriptionElement =
        document.getElementById(
            "mainDescription"
        );


    const title =
        titleElement
            ? titleElement.value
            : "";


    const description =
        descriptionElement
            ? descriptionElement.value
            : "";


    const { error } =
        await supabaseClient
            .from("site_settings")
            .upsert({
                id: 1,
                main_title: title,
                main_description:
                    description
            });


    if (error) {

        console.error(error);


        alert(
            "❌ Erreur : " +
            error.message
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
        data: {
            session
        }
    } =
        await supabaseClient
            .auth
            .getSession();


    if (session) {

        afficherAdmin();

    } else {

        const adminPage =
            document.getElementById(
                "adminPage"
            );


        if (adminPage) {

            adminPage.classList.remove(
                "active"
            );

        }
    }
}


// ===============================
// LANCEMENT
// ===============================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        verifierConnexion();

    }
);
```
