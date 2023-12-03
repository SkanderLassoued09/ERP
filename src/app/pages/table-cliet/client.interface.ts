export interface Client {
  //Field in commun
  region: string;
  address: string;
  email: string;
  phone: string;
  //Simple client fields
  firstName: string;
  lastName: string;
  //Company fields
  companyName: string;
  fax: string;
  website: string;
  activitePrincipale: string;
  activiteSecondaire: string;
  raisonSociale: string;
  Exoneration: string;
  achat: {
    fullName: string;
    email: string;
    phone: string;
  };
  financier: {
    fullName: string;
    email: string;
    phone: string;
  };
  technique: {
    fullName: string;
    email: string;
    phone: string;
  };
}
