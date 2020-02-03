import {Location} from './location';
import {Skill} from './skill';
import {Company} from './company';
import {Experience} from './experience';

export interface Job {
  jobId: number;
  title: string;
  description: string;
  location: Location;
  jobSkillSet: Skill[];
  postDate: string;
  companiesJob: Company;
  salary: number;
  experience: Experience;
}
