export type IAppCtx = {
  userDir: string;
  initServer: boolean;
  appName: string;
};

export type INullAble<T> = T | null;

export type IPromiseOrType<T> = Promise<T> | T;

export type ICtxWith<T> = IAppCtx & T;

export type ICtx = ICtxWith<{ installers: string[] }>;

export type IConfig = {
  files?: Array<IFile>;
  pkgs?: IPkg;
  scripts?: Record<string, string>;
  env?: IEnv[];
};

type IInstallerCB = (ctx: ICtx) => IPromiseOrType<IConfig>;
export type IInstaller = IConfig | IInstallerCB;

export type IPkgInfo = {
  customVersion?: string;
  devMode?: boolean;
};
export type IPkg = Record<string, IPkgInfo>;

export type IFile = {
  to: string;
  content?: string;
  type?: "copy" | "exec" | "delete" | "write";
  path?: string;
};

export type IEnv = {
  type: string;
  key: string;
  defaulValue?: any;
  ignore?: boolean;
};

export type IUtil = (ctx: ICtx) => string;