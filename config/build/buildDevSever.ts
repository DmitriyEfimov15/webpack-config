import { BuildOptions } from "./types/types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        open: true,
        // при настройке nginx необходимо надо сделать проксированиие на index.html
        historyApiFallback: true,
        hot: true
    }
} 