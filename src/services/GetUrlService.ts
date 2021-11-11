import { UrlModel } from '../models/Url';

class GetUrlService {
  public async execute(query: string) {
    const url = await UrlModel.findOne({ hash: query });
    return url;
  };
};

export { GetUrlService };