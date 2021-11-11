import { UrlModel } from '../models/Url';

class GetAllUrlsService {
  public async execute() {
    const urls = await UrlModel.find();
    return urls;
  };
};

export { GetAllUrlsService };