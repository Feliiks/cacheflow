import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany, OneToOne
} from "typeorm";

import {User_company} from "./User_company";
import {Model} from "./Model";


@Entity()

export class Company {
  @PrimaryGeneratedColumn('increment')
  cacheflow_id: number;

  @Column({length: 255})
  company_name: string;

  @Column({length: 255, unique: true})
  database_name: string;

  @Column({length: 255})
  domain: string;

  @Column({type: "date"})
  cacheflow_created_at: string;

  @Column({type: "date"})
  cacheflow_updated_at: string;

  @OneToOne(type => Model, Model => Model.company)
  model: Model;

  @OneToMany(type => User_company, User_company => User_company.company)
  user_company: User_company[];
}