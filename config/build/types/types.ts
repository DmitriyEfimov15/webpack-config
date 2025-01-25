export interface BuildPaths {
    entry: string,
    output: string,
    html: string,
    src: string,
    public: string
}

export type BuildMode = "production" | "development";

export interface BuildOptions {
    paths: BuildPaths,
    mode: BuildMode,
    port: number
}