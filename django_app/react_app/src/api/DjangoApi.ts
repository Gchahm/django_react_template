import {ApiApi, ApiApiInterface, Configuration, Login, Middleware, RequestContext} from "./autogen";


export class DjangoApi {
    private readonly _api: ApiApiInterface;
    private readonly apiAuthMiddleware = new ApiAuthMiddleware();

    constructor() {
        this._api = new ApiApi(
            new Configuration({
                basePath: 'http://localhost:8000',
                credentials: 'omit',
                middleware: [this.apiAuthMiddleware]
            })
        );

    }

    public async login(login: Login): Promise<void> {
        const result = await this._api.apiAuthLoginCreate({login});
        console.log('login', result);
        this.apiAuthMiddleware.setToken(result.key);
    }

    public get api(): Omit<ApiApiInterface, 'apiAuthLoginCreate' | 'apiAuthLogoutCreate'> {
        return this._api;
    }
}

class ApiAuthMiddleware implements Middleware {
    private _token: string | null = null;

    public setToken(token: string): void {
        this._token = token;
    }

    public async pre(context: RequestContext): Promise<void> {
        console.log('pre', context);
        if (this._token) {
            console.log('pre token exists', context);
            context.init.credentials = 'include';
            if (context.init?.headers && typeof context.init.headers === 'object') {
                // (context.init.headers as Record<string, string>)['sessionid'] = this._token;
            }
        }
    }
}