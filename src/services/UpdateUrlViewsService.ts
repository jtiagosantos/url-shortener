import { UrlModel } from '../models/Url';

class UpdateUrlViewsService {
  public async execute(id: string, views: number) {
    await UrlModel.findByIdAndUpdate(id, { views: views + 1 });
  };
};

export { UpdateUrlViewsService };