import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  JoinColumn
} from "typeorm";

import { User } from "./User"
import { Model } from "./Model"

@Entity()

export class User_model {
  @PrimaryGeneratedColumn('increment')
  cacheflow_id: number;

  @ManyToOne(type => Model, Model => Model.user_model)
  @JoinColumn({ name: "model_cacheflow_id" })
  model: Model;

  @ManyToOne(type => User, User => User.user_model)
  @JoinColumn({ name: "user_cacheflow_id" })
  user: User;

  @Column()
  read: boolean;

  @Column()
  write: boolean;

  @Column({type: "date"})
  cacheflow_created_at: string;

  @Column({type: "date"})
  cacheflow_updated_at: string;
}