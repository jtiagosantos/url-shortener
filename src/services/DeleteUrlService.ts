import { UrlModel } from '../models/Url';

class DeleteUrlService {
  public async execute(id: string) {
    const url = await UrlModel.findByIdAndDelete(id);
    return url;
  };
};

export { DeleteUrlService };