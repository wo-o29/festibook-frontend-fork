declare module "next-linaria" {
  import { NextConfig, webpack } from "next";

  interface WebpackRule {
    loader?: string;
    options?: {
      modules?: {
        mode?: string;
        auto?: boolean;
        exportGlobals?: boolean;
        exportOnlyLocals?: boolean;
        getLocalIdent?: (
          context: { resourcePath: string },
          localIdentName: string,
          exportName: string,
          options: any,
        ) => string;
      };
    };
    use?: WebpackRule[] | WebpackRule;
    oneOf?: WebpackRule[];
  }

  function traverse(rules: WebpackRule[]): void;

  const nextLinariaConfig: (nextConfig?: NextConfig) => NextConfig & {
    webpack: (
      config: webpack.Configuration,
      options: { dev: boolean },
    ) => webpack.Configuration;
  };

  export default nextLinariaConfig;
}
