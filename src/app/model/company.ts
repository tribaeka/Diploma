import {Contact} from './contact';

export class Company {
  companyId: number;
  name: string;
  siteUrl: string;
  size: string;
  contactSet: Contact[];
  logoPath: string;
}
