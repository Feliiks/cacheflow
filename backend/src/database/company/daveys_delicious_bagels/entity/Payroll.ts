import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";


@Entity()

export class Payroll {
  @PrimaryGeneratedColumn()
  cacheflow_id: number;

  @Column({type: "date"})
  period_start: string;

  @Column({type: "date"})
  period_end: string;

  @Column({length: 255})
  employee_first_name: string;

  @Column({length: 255})
  employee_last_name: string;

  @Column()
  employee_id: number;

  @Column()
  hours: number;

  @Column()
  payrate: number;

  @Column({type: "date"})
  cacheflow_created_at: string;

  @Column({type: "date"})
  cacheflow_updated_at: string;
}