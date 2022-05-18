import {
  Entity,
  Column,
  PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn,
} from "typeorm";
import { Company } from "./Company";

import {User_model} from "./User_model";


@Entity()

export class Model {
  @PrimaryGeneratedColumn('increment')
  cacheflow_id: number;

  @Column({length: 255, unique: true})
  name: string;

  @Column({length: 255, unique: true})
  ui_name: string;

  @Column()
  upload: boolean;

  @Column()
  crud: boolean;

  @Column()
  read: boolean;

  @Column()
  write: boolean;

  @Column({type: "date", unique: true})
  cacheflow_created_at: string;

  @Column({type: "date"})
  cacheflow_updated_at: string;

  @OneToOne(type => Company, Company => Company.model)
  @JoinColumn({ name: "company_cacheflow_id" })
  company: Company;

  @OneToMany(type => User_model, User_model => User_model.model)
  user_model: User_model[];
}