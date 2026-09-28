```javascript
/* =========================
   OUVRIR / FERMER
   ========================= */

function ouvrirPersonnalisation() {

    document
        .getElementById("customPanel")
        .classList.add("active");
}


function fermerPersonnalisation() {

    document
        .getElementById("customPanel")
        .classList.remove("active");
}


/* =========================
   CHANGER LA COULEUR
   ========================= */

function changerCouleur(couleur) {

    document.documentElement
        .style.setProperty("--couleur-principale", couleur);

    localStorage.setItem(
        "couleur",
        couleur
    );
}


/* =========================
   MODE CLAIR
   ========================= */

function modeClair() {

    document.body.classList.remove("dark");

    localStorage.setItem(
        "theme",
        "clair"
    );
}


/* =========================
   MODE SOMBRE
   ========================= */

function modeSombre() {

    document.body.classList.add("dark");

    localStorage.setItem(
        "theme",
        "sombre"
    );
}


/* =========================
   BOUTON 🌙
   ========================= */

function changerTheme() {

    if (
        document.body.classList.contains("dark")
    ) {

        modeClair();

    } else {

        modeSombre();
    }
}


/* =========================
   NOM DU SITE
   ========================= */

function changerNom() {

    const input =
        document.getElementById("nameInput");

    const nom =
        input.value.trim();

    if (nom !== "") {

        document
            .getElementById("siteName")
            .textContent = nom;

        localStorage.setItem(
            "nomSite",
            nom
        );
    }
}


/* =========================
   TAILLE DU TEXTE
   ========================= */

function changerTaille(taille) {

    if (taille === "small") {

        document.body.style.fontSize = "14px";

    }

    if (taille === "normal") {

        document.body.style.fontSize = "16px";

    }

    if (taille === "large") {

        document.body.style.fontSize = "19px";

    }

    localStorage.setItem(
        "taille",
        taille
    );
}


/* =========================
   ENREGISTRER
   ========================= */

function sauvegarder() {

    changerNom();

    alert(
        "✅ Personnalisation enregistrée !"
    );
}


/* =========================
   RÉINITIALISER
   ========================= */

function reinitialiser() {

    localStorage.clear();

    document.documentElement
        .style.setProperty(
            "--couleur-principale",
            "#6366f1"
        );

    document.body
        .classList.remove("dark");

    document
        .getElementById("siteName")
        .textContent = "EduNova";

    document
        .getElementById("nameInput")
        .value = "";

    document.body.style.fontSize = "16px";
}


/* =========================
   CHARGER LES PARAMÈTRES
   ========================= */

window.addEventListener(
    "DOMContentLoaded",
    function () {

        const couleur =
            localStorage.getItem("couleur");

        const theme =
            localStorage.getItem("theme");

        const nom =
            localStorage.getItem("nomSite");

        const taille =
            localStorage.getItem("taille");


        if (couleur) {

            document.documentElement
                .style.setProperty(
                    "--couleur-principale",
                    couleur
                );
        }


        if (theme === "sombre") {

            document.body
                .classList.add("dark");
        }


        if (nom) {

            document
                .getElementById("siteName")
                .textContent = nom;

            document
                .getElementById("nameInput")
                .value = nom;
        }


        if (taille) {

            changerTaille(taille);
        }

    }
);
```

