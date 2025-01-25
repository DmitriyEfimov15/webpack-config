import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from 'react-refresh-typescript'

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
    const isDev = options.mode === "development";

    const svgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true
                                }
                            }
                        ]
                    }
                }
            }
        ],
      }

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    }

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            // importLoaders: 1,
            esModule: true,
            modules: {
                localIdentName: isDev
                    ? "[path][name]__[local]"
                    : "[hash:base64:8]",
                namedExport: true,
            },
        },
    };
    const cssLoader = {
        test: /\.css$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            // "css-loader"
        ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: [
            {
              loader: 'ts-loader',
              options: {
                getCustomTransformers: () => ({
                    before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                  }),
                transpileOnly: true
              }
            }
          ],
        exclude: /node_modules/,
    };

    return [assetLoader, cssLoader, tsLoader, svgrLoader];
}
