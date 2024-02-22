import { Logger } from '@nestjs/common';
import { Model, ModelClass, RelationExpression, transaction } from 'objection';
import { DbAccess } from './base.interface';

export abstract class BaseRepository implements DbAccess {
  private readonly model: ModelClass<Model>;

  protected constructor(model: ModelClass<Model>) {
    this.model = model;
  }

  public async create<T = any>(data: T): Promise<any> {
    Logger.log('BaseRepository.create');

    return await transaction(this.model, async (Model) => {
      return Model.query().insertGraphAndFetch(data);
    });
  }

  public async createMany<T = any>(data: T[]): Promise<any> {
    Logger.log('BaseRepository.createMany');

    return await transaction(this.model, async (Model) => {
      return Model.query().insert(data);
    });
  }

  public async findAll<T = any>(params?: T): Promise<any[]> {
    Logger.log('BaseRepository.findAll');

    return this.model.query().orderBy('created_at', 'DESC');
  }

  public async findManyWithGraph<T = any>(
    obj: T,
    relationPath: RelationExpression<Model>,
  ): Promise<any[]> {
    Logger.log('BaseRepository.findAllWithGraph');

    return this.model
      .query()
      .where(obj)
      .withGraphFetched(relationPath)
      .orderBy('created_at', 'DESC');
  }

  public async findOne<T = any>(obj: T): Promise<any> {
    Logger.log('BaseRepository.findOne');

    return this.model.query().findOne(obj);
  }

  public async findOneWithGraph<T = any>(
    obj: T,
    relationPath: RelationExpression<Model>,
  ): Promise<any> {
    Logger.log('BaseRepository.findOneWithGraph');

    return this.model.query().findOne(obj).withGraphFetched(relationPath);
  }

  public async findMany<T = any>(obj: T): Promise<any[]> {
    Logger.log('BaseRepository.findMany');

    return this.model.query().where(obj).orderBy('created_at', 'DESC');
  }

  public async findById(id: string): Promise<any> {
    Logger.log('BaseRepository.findById');

    return this.model.query().findById(id);
  }

  public async update<T = any>(id: string, data: T): Promise<any> {
    Logger.log('BaseRepository.update');

    return this.model.query().patchAndFetchById(id, data);
  }
  public async updateWithJersey<T = any>(id: string): Promise<any> {
    Logger.log('BaseRepository.update');

    return this.model.query().patchAndFetch(id);
  }

  public async delete(id: string): Promise<any> {
    Logger.log('BaseRepository.delete');

    return this.model.query().deleteById(id);
  }

  // get base on date
  public async findByDate<T = any>(date: string): Promise<any> {
    Logger.log('BaseRepository.findByDate');

    return this.model.query().where('date', date);
  }
}
