import * as eta from "https://deno.land/x/eta@v1.12.3/mod.ts";

/**
 * @param {string} fileName
 * @param {object} viewModel
 * @returns {string} HTML Literal
  */
export async function view(fileName, viewModel){
    const template = await Deno.readTextFile(fileName);
    return await eta.render(template, viewModel);
}