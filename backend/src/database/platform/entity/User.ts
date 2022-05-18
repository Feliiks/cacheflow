import {
  Entity,
  Column,
  PrimaryGeneratedColumn, OneToMany,
} from "typeorm";

import {User_company} from "./User_company";
import {User_model} from "./User_model";


@Entity()

export class User {
  @PrimaryGeneratedColumn('increment')
  cacheflow_id: number;

  @Column({length: 255, unique: true})
  email: string;

  @Column({length: 255, unique: true})
  uid: string;

  @Column({length: 255})
  first_name: string;

  @Column({length: 255})
  last_name: string;

  @Column({type: "date", unique: true})
  cacheflow_created_at: string;

  @Column({type: "date"})
  cacheflow_updated_at: string;

  @OneToMany(type => User_company, user_company => user_company.user)
  user_company: User_company[];

  @OneToMany(type => User_model, user_model => user_model.user)
  user_model: User_model[];
}