import { prop, getModelForClass } from '@typegoose/typegoose';

class Url {
  @prop({ required: true })
  public originURL?: string;

  @prop({ required: true })
  public hash?: string;

  @prop({ required: true })
  public shortenedURL?: string;

  @prop()
  public views?: number;
};

export const UrlModel = getModelForClass(Url);