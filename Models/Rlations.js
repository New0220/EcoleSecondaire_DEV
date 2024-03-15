// Importer tous les modèles
import Role from "./Role.js";
import Utilisateur from "./Utilisateur.js";
import AnneeScolaire from "./AnneeScolaire.js";
import Matiere from "./Matiere.js";
import SalleDeClasse from "./SalleDeClasse.js";
import Enseignant from "./Enseignant.js";
import Classe from "./Classe.js";
import Cours from "./Cours.js";
import Eleve from "./Eleve.js";
import Inscription from "./Inscription.js";
import Note from "./Note.js";
import EmploiDuTemps from "./EmploiDuTemps.js";

// Définition des relations

// Relations pour Utilisateur et Role
Utilisateur.belongsTo(Role, { foreignKey: 'RoleID' });
Role.hasMany(Utilisateur, { foreignKey: 'RoleID' });

// Relations pour Enseignant et Utilisateur
Enseignant.belongsTo(Utilisateur, { foreignKey: 'UtilisateurID' });

// Relations pour Élève et Utilisateur
Eleve.belongsTo(Utilisateur, { foreignKey: 'UtilisateurID' });

// Relations pour Classe et AnnéeScolaire
Classe.belongsTo(AnneeScolaire, { foreignKey: 'AnneeScolaireID' });
AnneeScolaire.hasMany(Classe, { foreignKey: 'AnneeScolaireID' });

// Relations pour Cours, Enseignant et Matière
Cours.belongsTo(Enseignant, { foreignKey: 'EnseignantID' });
Enseignant.hasMany(Cours, { foreignKey: 'EnseignantID' });
Cours.belongsTo(Matiere, { foreignKey: 'MatiereID' });
Matiere.hasMany(Cours, { foreignKey: 'MatiereID' });

// Relations pour Élève et Classe
Eleve.belongsTo(Classe, { foreignKey: 'ClasseID' });
Classe.hasMany(Eleve, { foreignKey: 'ClasseID' });

// Relations pour Inscription, Élève, Cours et AnnéeScolaire
Inscription.belongsTo(Eleve, { foreignKey: 'EleveID' });
Eleve.hasMany(Inscription, { foreignKey: 'EleveID' });
Inscription.belongsTo(Cours, { foreignKey: 'CoursID' });
Cours.hasMany(Inscription, { foreignKey: 'CoursID' });
Inscription.belongsTo(AnneeScolaire, { foreignKey: 'AnneeScolaireID' });
AnneeScolaire.hasMany(Inscription, { foreignKey: 'AnneeScolaireID' });

// Relations pour Note, Élève et Cours
Note.belongsTo(Eleve, { foreignKey: 'EleveID' });
Eleve.hasMany(Note, { foreignKey: 'EleveID' });
Note.belongsTo(Cours, { foreignKey: 'CoursID' });
Cours.hasMany(Note, { foreignKey: 'CoursID' });

// Relations pour EmploiDuTemps, Cours et SalleDeClasse
EmploiDuTemps.belongsTo(Cours, { foreignKey: 'CoursID' });
Cours.hasMany(EmploiDuTemps, { foreignKey: 'CoursID' });
EmploiDuTemps.belongsTo(SalleDeClasse, { foreignKey: 'SalleDeClasseID' });
SalleDeClasse.hasMany(EmploiDuTemps, { foreignKey: 'SalleDeClasseID' });

// Exporter tous les modèles et leurs associations
export {
    Role, Utilisateur, AnneeScolaire, Matiere, SalleDeClasse, Enseignant,
    Classe, Cours, Eleve, Inscription, Note, EmploiDuTemps
};
