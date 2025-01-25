import webpack from "webpack";
import { BuildOptions } from "./types/types";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevSever";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const isDev = options.mode === 'development'

    return {
        mode: options.mode ?? "development",
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: "[name].[contenthash].js",
            clean: true,
        },

        plugins: buildPlugins(options),

        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),

        devtool: isDev ? "eval-cheap-source-map" : "source-map",
        devServer: isDev
            ? buildDevServer(options)
            : undefined,
    };
}
