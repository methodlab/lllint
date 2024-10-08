# LLLint

LLLint (Large Language Linter) is a VSCode extension that utilizes large language models to format and stylize your code according to custom guidelines. It goes beyond traditional linting by analyzing your code, suggesting improvements, and providing explanations for its suggestions. With LLLint, you can:

- Improve coding practices across your team
- Maintain consistent code quality throughout your project
- Automate tedious code review tasks
- Learn best practices through AI-powered suggestions
- Customize linting rules to fit your project's unique needs

LLLint is API-based, currently supporting OpenAI's models, allowing you to harness state-of-the-art language understanding for your code analysis.

## Features

- **📚 Custom Coding Guidelines**: Define your own coding standards or generate them using an LLM.
- **🧠 Intelligent Linting**: Get improvement suggestions based on your custom guidelines.
- **🔍 Side-by-Side Diff View**: Compare original and modified code to review suggested changes.
- **📝 Contextual Notes**: Receive explanations for each suggestion to understand the reasoning.

## How It Works

1. **Code Analysis**: LLLint thoroughly examines your code, applying your custom guidelines to identify areas for improvement.
2. **Suggestion Generation**: It proposes specific changes to clean up, format, and stylize your code based on the analysis.
3. **Diff View**: Review suggested changes side-by-side with your original code.
4. **Contextual Notes**: Each suggestion comes with an explanation and link back to your coding guidelines.

## Installation

1. Open VSCode.
2. Go to Extensions (Ctrl+Shift+X or Cmd+Shift+X).
3. Search for "LLLint" and click "Install".
4. Reload VSCode to activate the extension.

## Usage

1. Open a code file in VSCode.
2. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P).
3. Run "LLLint: Format Current File" to analyze your code.
4. Review suggestions and apply or discard changes as needed.
5. Check the LLLint panel in the sidebar for detailed notes and explanations.

## Configuration

- **API Key Setup:**
  1. Go to `File > Preferences > Settings`.
  2. Search for "LLLint".
  3. Enter your OpenAI API key in "LLLint: API Key".

- **Model Selection:**
  - Choose your preferred language model (e.g., `gpt-4o-mini`, `gpt-4o`) in "LLLint: Model".
  - The `gpt-4o-mini` model offers a good balance of performance and efficiency for most coding tasks.

## Commands

- **LLLint: Format Current File**: Analyze and suggest improvements for the current file.
- **LLLint: Apply Changes**: Accept suggested code changes (Cmd/Ctrl+S).
- **LLLint: Discard Changes**: Reject suggested code changes (Cmd/Ctrl+W).
- **LLLint: Edit Coding Guidelines**: Modify the coding standards Mardown document.
- **LLLint: Edit System Prompt**: Modify the system prompt Markdown document.

## Coding Guidelines

The core of LLLint is your custom coding guidelines. While we provide a basic set to get you started, they're intentionally generic. For the best results:

1. **Write Your Own**: Create guidelines specific to your project or organization.
2. **Use an LLM**: Generate guidelines that combine best practices with your personal preferences.
3. **Iterate**: Refine your guidelines as you use LLLint to better suit your needs.

To edit your guidelines, use the "LLLint: Edit Coding Guidelines" command. The extension includes a simple numbering system to keep your guidelines organized.

## Screenshots

![Intelligent Linting](images/intelligent-linting.png)
*LLLint suggesting code improvements*

![Diff View](images/diff-view.png)
*Side-by-side comparison of suggested changes*

![Contextual Notes](images/ai-notes.png)
*Detailed explanations for suggestions*

## Support

- **Issues:** [GitHub Issues](https://github.com/methodlab/lllint/issues)
- **Contact:** [Email](mailto:info@methodlab.io)

## Future Plans

- Ability to cancel requests.
- Support for OpenRouter and local LLMs.

Stay tuned for these exciting updates!

## License

MIT License