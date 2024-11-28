import {ApiApi, ApiApiInterface, Configuration, Login} from "./autogen";


export class DjangoApi {
    private readonly _api: ApiApiInterface;

    constructor() {
        this._api = new ApiApi(
            new Configuration({
                basePath: 'http://localhost:8000',
                credentials: 'include',
            })
        );

    }

    public async login(login: Login): Promise<void> {
        await this._api.apiAuthLoginCreate({login}, {credentials: 'omit'});
    }

    public get api(): Omit<ApiApiInterface, 'apiAuthLoginCreate' | 'apiAuthLogoutCreate'> {
        return this._api;
    }
}
