import { UrlModel } from '../models/Url';

type QueryProps = {
  hash?: string,
  originURL?: string,
};

class GetUrlService {
  public async execute(query: QueryProps) {
    const url = await UrlModel.findOne(query);
    return url;
  };
};

export { GetUrlService };