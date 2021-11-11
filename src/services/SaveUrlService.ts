import { UrlModel } from '../models/Url';

type BodyProps = {
  originURL: string,
  hash: string,
  shortenedURL: string,
  views: number,
};

class SaveUrlService {
  public async execute(body: BodyProps) {
    const newUrl = await UrlModel.create(body);
    return newUrl;
  };
};

export { SaveUrlService };