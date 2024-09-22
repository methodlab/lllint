# MLint - Methodlab Smart Code Formatter

MLint is a powerful VSCode extension that provides intelligent code formatting and analysis using advanced language models. It's designed to help developers improve their code quality and maintain consistent coding standards across projects.

## Features

- **Smart Formatting**: Automatically format your code using AI-powered suggestions.
- **Coding Guidelines**: Apply and customize project-specific coding guidelines.
- **Diff View**: Compare original and formatted code side-by-side.
- **Note Tree**: View AI-generated notes and suggestions for your code.
- **Jump to Line**: Quickly navigate to specific lines in your code.
- **Customizable Prompts**: Edit system prompts and coding guidelines to tailor the AI's behavior.
- **Automatic Guideline Renumbering**: Easily maintain the structure of your coding guidelines.

## Installation

### Installation for Users

To install MLint in your VSCode:

1. Obtain the latest `.vsix` file from the internal distribution channel or build it yourself (see Development section).
2. Open VSCode.
3. Go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X).
4. Click on the "..." menu in the top-right corner of the Extensions view.
5. Select "Install from VSIX...".
6. Navigate to the `.vsix` file and select it.
7. Click "Install" when prompted.
8. Reload VSCode when installation is complete.

### Installation for Development

#### Prerequisites

- Node.js 20.x or later
- Yarn package manager

To set up MLint for development:

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/mlint.git
   cd mlint
   ```

2. Install dependencies:
   ```
   yarn install
   ```

3. Open the project in VSCode:
   ```
   code .
   ```

4. Press F5 to run the extension in debug mode.

## Usage

1. Open a code file in VSCode.
2. Use the command palette (Ctrl+Shift+P or Cmd+Shift+P) and search for "MLint: Smart Format" to format your code.
3. Review the suggested changes in the diff view.
4. Use the "Apply Formatting Changes" or "Discard Formatting Changes" options in the diff view.
5. Use the MLint panel at the bottom of the editor to view AI-generated notes and suggestions.

## Configuration

To use MLint, you need to configure your OpenAI API key:

1. Go to File > Preferences > Settings (or Code > Preferences > Settings on macOS)
2. Search for "MLint"
3. Enter your OpenAI API key in the "Mlint: Api Key" field

You can also choose the OpenAI model to use:

- Set the "Mlint: Model" field to your preferred model (e.g., "gpt-4o" or "gpt-4o-mini")

## Commands

MLint provides the following commands:

- `MLint: Smart Format`: Apply AI-powered formatting to your code
- `MLint: Edit System Prompt`: Customize the system prompt used by the AI
- `MLint: Edit Coding Guidelines`: Modify the coding guidelines for your project
- `MLint: Apply Formatting Changes`: Apply the suggested formatting changes
- `MLint: Discard Formatting Changes`: Discard the suggested formatting changes
- `MLint: Jump to Line`: Navigate to a specific line in your code
- `MLint: Renumber Coding Guidelines`: Automatically renumber sections and guidelines in the coding guidelines document

To access these commands, use the command palette (Ctrl+Shift+P or Cmd+Shift+P) and search for "MLint".

## Customizing Behavior

You can customize MLint's behavior by editing the system prompt and coding guidelines:

1. Use the command palette to run "MLint: Edit System Prompt" or "MLint: Edit Coding Guidelines"
2. Modify the content in the opened file
3. Save the file to apply your changes

These customizations allow you to tailor the AI's suggestions to your specific project needs and coding standards.

To maintain the structure of your coding guidelines after making changes:

1. Use the command palette to run "MLint: Renumber Coding Guidelines"
2. The extension will automatically update the numbering of all sections and guidelines based on the current structure

## Project Structure

- `src/extension.ts`: Main extension file
- `src/commands/`: Command implementations
  - `smartFormat.ts`: Implements the smart formatting feature
  - `editCodingGuidelines.ts`: Handles editing of coding guidelines
  - `editSystemPrompt.ts`: Handles editing of the system prompt
  - `applyFormatting.ts`: Applies formatting changes
  - `discardFormatting.ts`: Discards formatting changes
  - `jumpToLine.ts`: Implements the jump to line feature
  - `renumberCodingGuidelines.ts`: Implements automatic renumbering of coding guidelines
- `src/providers/`: VSCode providers
  - `FormattedDocumentProvider.ts`: Manages the formatted document content
  - `MLintCodeLensProvider.ts`: Provides code lens for apply/discard actions
  - `NoteTreeProvider.ts`: Manages the note tree view
- `prompts/`: Contains the system prompt and coding guidelines
- `esbuild.js`: Configuration for building the extension

## Development

To run the extension in development mode:

1. Open the project in VSCode
2. Press F5 to start debugging
3. In the new VSCode window that opens, you can test the extension

To run tests:

```
yarn test
```

To package the extension:

1. Install the `vsce` package globally:
   ```
   npm install -g @vscode/vsce
   ```

2. Use `vsce` to package the extension:
   ```
   vsce package
   ```

This will create a .vsix file in the current directory that can be installed in VSCode.

---

MLint is an internal tool developed by Methodlab to enhance code quality and consistency. For any issues or suggestions, please contact the development team.
