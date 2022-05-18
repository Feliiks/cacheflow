import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne, JoinColumn,
} from "typeorm";

import { User } from "./User"
import { Company } from "./Company"

@Entity()

export class User_company {
  @PrimaryGeneratedColumn('increment')
  cacheflow_id: number;

  @ManyToOne(type => Company, Company => Company.user_company)
  @JoinColumn({ name: "company_cacheflow_id" })
  company: Company;

  @ManyToOne(type => User, User => User.user_company)
  @JoinColumn({ name: "user_cacheflow_id" })
  user: User;

  @Column({type: "date"})
  cacheflow_created_at: string;

  @Column({type: "date"})
  cacheflow_updated_at: string;
}