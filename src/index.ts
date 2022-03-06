import { Project } from "ts-morph";

/**
 * Extract imports from file or directory
 * @param fileGlobs path to file or directory 
 * @param mapCallback a map function to trnaform the given imports
 */
export function extractImports(fileGlobs: string | ReadonlyArray<string>, mapCallback: (importsData: string[]) => string[]): void {
    const project = new Project();
    project.addSourceFilesAtPaths(fileGlobs);
    const sourceFiles = project.getSourceFiles();

    let importsData: string[] = [];

    sourceFiles.forEach((sourceFile) => {
        const imports = sourceFile.getImportDeclarations();
        imports.reduce((prev, importDec) => {
            prev.push(importDec.getText());
            return prev;
        }, importsData);
    });

    mapCallback(importsData);
}
