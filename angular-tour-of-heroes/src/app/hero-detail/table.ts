// table.model.ts

export interface ResultatEnvir {
    RaisonInatif: string;
    AlertEchec: string;
    DatePremierAlerte: string;
    DatePremierEchec: string;
    NomEvir: string;
    DateHeure: string;
    Statut: number;
    StatutTxt: string;
    Performance: number;
  }
  
  export interface Technologie {
    NomTechn: string;
    ResultatEnvir: ResultatEnvir[];
  }
  
  export interface ResultatTB {
    DelaiEnvi: number;
    NbFichiersTbBord: number;
    TechnoEnvir: Technologie[][];
  }
  