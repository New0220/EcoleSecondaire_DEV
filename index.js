// Importations des modules installés
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';

// Pour avoir accès au fichier .env
import dotenv from 'dotenv';
const env=dotenv.config().parsed;

// Création de l'application
const app = express();

// Utilisations des modules importés dans l'application
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(compression());
const PORT = 5000;

// Importation des routeurs
import RouteAnneScolaire from './Route/RouteAnneScolaire.js'
import RouteClasse from './Route/RouteClasse.js'
import RouteCours from './Route/RouteClasse.js'
import RouteEleve from './Route/RouteEleve.js'
import RouteEmploiDuTemps from './Route/RouteEmploiDuTemps.js'
import RouteEnseignant from './Route/RouteEnseignant.js'
import RouteInscription from './Route/RouteInscription.js'
import RouteMatiere from './Route/RouteMatiere.js'
import RouteNote from './Route/RouteNote.js'
import RouteRole from './Route/RouteRole.js'
import RouteSalleDeClasse from './Route/RouteSalleDeClasse.js'
import RouteUtilisateur from './Route/RouteUtilisateur.js'
import authRoute from './Route/RouteLogin.js';

// Importation de la configuration de la base de données
import database from './Config/Connexion.js';

// Synchronisation de la base de données
database.sync().then(() => {
    console.log('Base de données synchronisée');
});

// Routes de base pour tester le serveur
app.get('/salutations', (req, res) => {
    res.send('Bonjour de EcoleSecondaire');
});

// Utilisation des routeurs
app.use('/api', RouteAnneScolaire);
app.use('/api', RouteClasse);
app.use('/api', RouteCours);
app.use('/api', RouteEleve);
app.use('/api', RouteEmploiDuTemps);
app.use('/api', RouteEnseignant);    
app.use('/api', RouteInscription);
app.use('/api', RouteMatiere);
app.use('/api', RouteNote);
app.use('/api', RouteRole);
app.use('/api', RouteSalleDeClasse);
app.use('/api', RouteUtilisateur);
app.use('/api', authRoute);

// Démarrage du serveur
app.listen(PORT, () => console.log(`Le serveur tourne sur ${PORT}`));
