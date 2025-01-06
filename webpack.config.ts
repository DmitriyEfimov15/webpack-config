import path from "path";
import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPaths } from "./config/build/types/types";

interface EnvVariables {
    mode: BuildMode;
    port: number;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, "public")
    };

    const config: webpack.Configuration = buildWebpack({
        paths,
        port: env.port ?? 3000,
        mode: env.mode ?? "development"
    });
    return config;
};
