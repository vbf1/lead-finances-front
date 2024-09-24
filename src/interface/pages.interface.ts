export interface IRoute {
  path: string;
  component: React.ReactNode;
}

export interface IRouteType {
  public: IRoute[];
  private: IRoute[];
}
