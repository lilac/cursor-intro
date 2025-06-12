# Create a deck on cursor's features and how it works

## Introduction

- Cursor帮你提效，你是否好奇它是如何实现的
- 前有大厂的Github Copilot，Cursor凭什么突围成为黑马？
- Cursor有护城河吗？
- 带着这些问题，让我们打开它的引擎盖子，看看它如何用3年时间成长为[估值99亿](https://www.cursor.com/cn/blog/series-c)的现象级产品。

## Features

- Tab autocomplete
  - Use a fast prediction model on where to jump next.
  - Autocomplete code at current cursor
- Context
  - Allow user to add content as chat context
  - File & folder
  - Code
  - Docs
  - Git
  - Past chats
  - Terminals
  - Lint errors
  - Web page (via URL)
  - Images
- Code index
- Tools
  - Fetch web content via user provided URL
  - Web search
  - Exec commands via terminal
  - MCP tools
- Agent mode
  - Planner to call tools as appropriate
  - I guess it outputs code diff instead of raw code?
  - Apply code changes

## My thoughts

- Cursor is mostly for pair programming
- Magic = Human intelligence + Artificial intelligence
  - Human good at memory and analysis
  - Human as architect and project manager
  - AI is much more efficient at generating text/code
  - AI as code writer
- My workflow
  - Break down product design into seperate specific tasks
  - For each task come up with basic change
  - Create new chat and add related code files as context
  - Write specific prompt for the task
- Demo
  - A full CLI app called mcpbar, package manager of MCP servers
  - How cursor write >90% code of [mcpbar](https://github.com/in-fun/mcpbar)
  - Use open source template to bootstrap new projects

## Reference

### Leaked prompts
- [Agent](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/blob/main/Cursor%20Prompts/Agent%20Prompt.txt)
- [Chat](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/blob/main/Cursor%20Prompts/Chat%20Prompt.txt)

### Interview

[Interview on YouTube](https://www.youtube.com/watch?v=oFfVt3S51T4)
[Transcript of an interview with Cursor team](./cursor-interview.md)
