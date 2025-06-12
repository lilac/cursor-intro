import React from "react";
import { createRoot } from "react-dom/client";
import {
  Deck,
  DefaultTemplate,
  Slide,
  FlexBox,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  CodePane,
  Quote,
  Image,
  Box,
  Appear,
  Link,
} from "spectacle";

const theme = {
  colors: {
    primary: "#1a1a1a",
    secondary: "#6366f1",
    tertiary: "#f8fafc",
    quaternary: "#10b981",
    quinary: "#ef4444",
  },
  fonts: {
    header: '"SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace',
  },
  fontSizes: {
    h1: "3.5rem",
    h2: "2.5rem",
    h3: "2rem",
    text: "1.5rem",
    monospace: "1.2rem",
  },
};

const Presentation = () => (
  <Deck theme={theme} template={() => <DefaultTemplate color="#6366f1" />}>
    {/* Title Slide */}
    <Slide backgroundColor="primary">
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          color="secondary"
          fontSize="h1"
          margin="0 0 2rem 0"
          className="rounded-none"
        >
          Cursor Editor
        </Heading>
        <Text color="tertiary" fontSize="h3" margin="0 0 1rem 0">
          The AI-Powered Code Editor
        </Text>

        <Text color="tertiary" fontSize="text" textAlign="center">
          Revolutionizing Programming with Human-AI Collaboration
        </Text>
      </FlexBox>
    </Slide>

    {/* What is Cursor */}
    <Slide backgroundColor="tertiary">
      <Heading color="primary" fontSize="h2" margin="0 0 2rem 0">
        What is Cursor?
      </Heading>
      <UnorderedList color="primary" fontSize="text">
        <Appear>
          <ListItem margin="1rem 0">
            A fork of VS Code with powerful AI features
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            Built by team who believed in scaling laws and GPT-4's potential
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            Designed for <em>human-AI collaboration</em>, not replacement
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            Used by hundreds of thousands of programmers
          </ListItem>
        </Appear>
      </UnorderedList>
      <Appear>
        <Quote
          color="secondary"
          fontSize="text"
          margin="2rem 0"
          borderLeft="4px solid"
        >
          "Fast is fun. Programming should be delightful."
        </Quote>
      </Appear>
    </Slide>

    {/* Core Philosophy */}
    <Slide backgroundColor="primary">
      <FlexBox
        height="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Heading color="secondary" fontSize="h2" margin="0 0 2rem 0">
          Core Philosophy
        </Heading>
        <Text color="tertiary" fontSize="h3" margin="1rem 0" textAlign="center">
          Human Intelligence + Artificial Intelligence = Magic
        </Text>
        <UnorderedList color="tertiary" fontSize="text" margin="2rem 0">
          <Appear>
            <ListItem margin="1rem 0">
              <strong>Human:</strong> Memory, analysis, architecture, project
              management
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="1rem 0">
              <strong>AI:</strong> Efficient text/code generation, pattern
              recognition
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="1rem 0">
              <strong>Together:</strong> Eliminate "zero entropy" keystrokes
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    {/* Tab Feature */}
    <Slide backgroundColor="secondary">
      <Heading color="tertiary" fontSize="h2" margin="0 0 2rem 0">
        🔥 Cursor Tab
      </Heading>
      <Text color="tertiary" fontSize="text" margin="0 0 2rem 0">
        The all-knowing autocomplete that predicts your next move
      </Text>
      <UnorderedList color="tertiary" fontSize="text">
        <Appear>
          <ListItem margin="1rem 0">
            Predicts entire code changes, not just characters
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            Jumps to next logical editing location
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            Uses fast MOE models with speculative decoding
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">Goal: Press Tab → Make progress</ListItem>
        </Appear>
      </UnorderedList>
      <Appear>
        <Quote
          color="tertiary"
          fontSize="text"
          margin="2rem 0"
          borderLeft="4px solid white"
        >
          "How many Tabs can we make someone press?"
        </Quote>
      </Appear>
    </Slide>

    {/* Next Move Prediction Deep Dive */}
    <Slide backgroundColor="primary">
      <Heading color="secondary" fontSize="h2" margin="0 0 1.5rem 0">
        How Next Move Prediction Works
      </Heading>
      <Text color="tertiary" fontSize="text" margin="0 0 1.5rem 0">
        [Fill-in-the-middle](https://github.com/QwenLM/Qwen2.5-Coder): A generalization of code completion
      </Text>
      <FlexBox flexDirection="row" justifyContent="space-between">
        <Box width="48%">
          <Text color="secondary" fontSize="h3" margin="0 0 1rem 0">
            What you see:
          </Text>
          <CodePane language="python" showLineNumbers={true}>
            {`def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    |  # ← cursor here
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)`}
          </CodePane>
        </Box>
        <Box width="48%">
          <Text color="secondary" fontSize="h3" margin="0 0 1rem 0">
            What the AI sees:
          </Text>
          <CodePane language="python" showLineNumbers={false}>
            {`<|fim_prefix|>def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    <|fim_suffix|>
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
<|fim_middle|>`}
          </CodePane>
          <Appear>
            <Text color="tertiary" fontSize="text" margin="1rem 0 0 0">
              Model generates: <code style={{color: "#10b981"}}>left = [x for x in arr if x &lt; pivot]</code>
            </Text>
          </Appear>
        </Box>
      </FlexBox>
      {/* <Appear>
        <Text color="tertiary" fontSize="text" margin="1.5rem 0 0 0" textAlign="center">
          Custom models trained on massive code datasets predict the missing piece
        </Text>
      </Appear> */}
    </Slide>

    {/* Smart Context System */}
    <Slide backgroundColor="tertiary">
      <Heading color="primary" fontSize="h2" margin="0 0 2rem 0">
        Smart Context System
      </Heading>
      <FlexBox flexDirection="row" justifyContent="space-between">
        <Box width="45%">
          <Text color="secondary" fontSize="h3" margin="0 0 1rem 0">
            What you can add:
          </Text>
          <UnorderedList color="primary" fontSize="text">
            <Appear>
              <ListItem margin="0.5rem 0">Files & folders</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0.5rem 0">Code snippets</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0.5rem 0">Documentation</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0.5rem 0">Git history</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0.5rem 0">Terminal output</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0.5rem 0">Lint errors</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0.5rem 0">Web pages</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0.5rem 0">Images</ListItem>
            </Appear>
          </UnorderedList>
        </Box>
        <Box width="45%">
          <Text color="secondary" fontSize="h3" margin="0 0 1rem 0">
            How it works:
          </Text>
          <UnorderedList color="primary" fontSize="text">
            <Appear>
              <ListItem margin="0.5rem 0">Semantic codebase indexing</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0.5rem 0">
                Merkle tree sync for large repos
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0.5rem 0">
                Privacy-preserving embeddings
              </ListItem>
            </Appear>
          </UnorderedList>
        </Box>
      </FlexBox>
    </Slide>

    {/* Codebase Indexing Deep Dive */}
    <Slide backgroundColor="primary">
      <Heading color="secondary" fontSize="h2" margin="0 0 2rem 0">
        🔍 Codebase Indexing Deep Dive
      </Heading>
      <Text color="tertiary" fontSize="text" margin="0 0 2rem 0">
        Semantic understanding of your entire codebase without storing your code
      </Text>
      <FlexBox flexDirection="column">
        <Text color="secondary" fontSize="h3" margin="0 0 1rem 0">
          How it works:
        </Text>
        <UnorderedList color="tertiary" fontSize="text">
          <Appear>
            <ListItem margin="0.8rem 0">
              <strong>File scanning:</strong> Computes Merkle tree of hashes,
              respects .gitignore/.cursorignore
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="0.8rem 0">
              <strong>Incremental sync:</strong> Checks every 10 minutes,
              uploads only changed files
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="0.8rem 0">
              <strong>Server processing:</strong> Chunks and embeds files,
              stores in Turbopuffer vector DB
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="0.8rem 0">
              <strong>Privacy-preserving storage:</strong> Only embeddings +
              obfuscated paths stored
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="0.8rem 0">
              <strong>Smart retrieval:</strong> Nearest neighbor search → local
              file read → context to AI
            </ListItem>
          </Appear>
        </UnorderedList>
        <Appear>
          <Text
            color="tertiary"
            fontSize="text"
            margin="2rem 0"
            textAlign="center"
          >
            <Link href="https://www.cursor.com/cn/security#codebase-indexing">
              Learn more
            </Link>
          </Text>
        </Appear>
      </FlexBox>
    </Slide>

    {/* Apply Feature */}
    <Slide backgroundColor="primary">
      <Heading color="secondary" fontSize="h2" margin="0 0 2rem 0">
        Apply: From Sketch to Code
      </Heading>
      <Text color="tertiary" fontSize="text" margin="0 0 2rem 0">
        Frontier models create rough sketches → Custom models generate precise
        diffs
      </Text>
      <CodePane language="typescript" showLineNumbers={false}>
        {`// You write this rough idea:
function processUsers() {
  // TODO: fetch users from API
  // validate data
  // transform to our format
  // save to database
}

// Cursor Apply generates the actual implementation
async function processUsers() {
  const response = await fetch('/api/users');
  const users = await response.json();
  
  const validUsers = users.filter(user => 
    user.email && user.name && typeof user.id === 'number'
  );
  
  const transformedUsers = validUsers.map(user => ({
    id: user.id,
    email: user.email.toLowerCase(),
    displayName: user.name.trim(),
    createdAt: new Date().toISOString()
  }));
  
  await db.users.insertMany(transformedUsers);
}`}
      </CodePane>
    </Slide>

    {/* Diff Interface */}
    <Slide backgroundColor="tertiary">
      <Heading color="primary" fontSize="h2" margin="0 0 2rem 0">
        Intelligent Diff Interface
      </Heading>
      <UnorderedList color="primary" fontSize="text">
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Multiple diff modes:</strong> Optimized for autocomplete vs.
            large changes
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Smart highlighting:</strong> Show important changes, gray
            out repetitive ones
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Multi-file support:</strong> Coordinated changes across your
            codebase
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Background processing:</strong> Shadow workspace for testing
            changes
          </ListItem>
        </Appear>
      </UnorderedList>
      <Appear>
        <Text
          color="secondary"
          fontSize="text"
          margin="2rem 0"
          fontStyle="italic"
        >
          "Code review kind of sucks. We can do much better with language
          models."
        </Text>
      </Appear>
    </Slide>

    {/* Agent Mode */}
    <Slide backgroundColor="secondary">
      <Heading color="tertiary" fontSize="h2" margin="0 0 2rem 0">
        🤖 Agent Mode
      </Heading>
      <Text color="tertiary" fontSize="text" margin="0 0 2rem 0">
        AI that can use tools and make coordinated changes
      </Text>
      <UnorderedList color="tertiary" fontSize="text">
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Web search:</strong> Find documentation and examples
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Terminal execution:</strong> Run commands and tests
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>File system access:</strong> Create, modify, and organize
            files
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>MCP tools:</strong> Extensible tool ecosystem
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Planning mode:</strong> Break down complex tasks
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>

    {/* Technical Architecture */}
    <Slide backgroundColor="primary">
      <Heading color="secondary" fontSize="h2" margin="0 0 2rem 0">
        <Link href="https://newsletter.pragmaticengineer.com/p/cursor" target="_blank">Under the Hood</Link>
      </Heading>
      <FlexBox flexDirection="column">
        <Text color="tertiary" fontSize="h3" margin="0 0 1rem 0">
          Model Ensemble:
        </Text>
        <UnorderedList color="tertiary" fontSize="text">
          <Appear>
            <ListItem margin="0.5rem 0">
              <strong>Claude Sonnet:</strong> Best overall coding performance
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="0.5rem 0">
              <strong>GPT-4/o1:</strong> Complex reasoning tasks
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="0.5rem 0">
              <strong>Custom models:</strong> Tab completion, Apply diffs
            </ListItem>
          </Appear>
        </UnorderedList>

        <Text color="tertiary" fontSize="h3" margin="2rem 0 1rem 0">
          Performance Optimizations:
        </Text>
        <UnorderedList color="tertiary" fontSize="text">
          <Appear>
            <ListItem margin="0.5rem 0">
              Speculative decoding for faster generation
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="0.5rem 0">KV cache optimization</ListItem>
          </Appear>
          <Appear>
            <ListItem margin="0.5rem 0">
              MOE (Mixture of Experts) models
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="0.5rem 0">
              Cache warming and preemptive requests
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    {/* Best Practices */}
    <Slide backgroundColor="tertiary">
      <Heading color="primary" fontSize="h2" margin="0 0 2rem 0">
        Recommended Workflow
      </Heading>
      <UnorderedList color="primary" fontSize="text">
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Break down tasks:</strong> Decompose features into specific,
            implementable chunks
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Add relevant context:</strong> Include related files, docs,
            and examples
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Start new chats:</strong> Fresh context for each distinct
            task
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Be specific:</strong> Clear prompts get better results
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Iterate quickly:</strong> Make small changes and build
            incrementally
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Review AI output:</strong> You're the architect, AI is the
            implementer
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>

    {/* Demo Preview */}
    <Slide backgroundColor="secondary">
      <Heading color="tertiary" fontSize="h2" margin="0 0 2rem 0">
        Real-World Example
      </Heading>
      <Text color="tertiary" fontSize="text" margin="0 0 2rem 0">
        Building <Link href="https://github.com/in-fun/mcpbar" target="_blank">mcpbar</Link>:
        A CLI package manager for MCP servers
      </Text>
      <UnorderedList color="tertiary" fontSize="text">
        <Appear>
          <ListItem margin="1rem 0">
            <strong>90%+ code generated</strong> by Cursor
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            Bootstrapped from open source template
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            Used context to understand MCP protocol
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            Applied best practices for CLI design
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            Iterative development with human guidance
          </ListItem>
        </Appear>
      </UnorderedList>
      <Appear>
        <Text
          color="tertiary"
          fontSize="text"
          margin="2rem 0"
          fontStyle="italic"
        >
          "Human as project manager, AI as highly productive developer"
        </Text>
      </Appear>
    </Slide>

    {/* Programming Challenges */}
    <Slide backgroundColor="primary">
      <Heading color="secondary" fontSize="h2" margin="0 0 2rem 0">
        Current Limitations
      </Heading>
      <UnorderedList color="tertiary" fontSize="text">
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Bug detection:</strong> Models struggle with finding subtle
            bugs
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Large diffs:</strong> Reviewing big changes is still
            challenging
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Context limits:</strong> Can't include entire large
            codebases
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Domain knowledge:</strong> May lack specific business
            context
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Latency:</strong> Some operations still take seconds
          </ListItem>
        </Appear>
      </UnorderedList>
      <Appear>
        <Text
          color="secondary"
          fontSize="text"
          margin="2rem 0"
          textAlign="center"
        >
          But these are improving rapidly! 🚀
        </Text>
      </Appear>
    </Slide>

    {/* Future Vision */}
    <Slide backgroundColor="tertiary">
      <Heading color="primary" fontSize="h2" margin="0 0 2rem 0">
        The Future of Programming
      </Heading>
      <Quote
        color="secondary"
        fontSize="text"
        margin="0 0 2rem 0"
        borderLeft="4px solid"
      >
        "A human-AI programmer that's an order of magnitude more effective"
      </Quote>

      {/* Complementary Strengths Section */}
      <FlexBox flexDirection="row" justifyContent="space-between" margin="0 0 2rem 0">
        <Box width="48%">
          <Text color="secondary" fontSize="h3" margin="0 0 1rem 0">
            Human Strengths:
          </Text>
          <UnorderedList color="primary" fontSize="text">
            <ListItem margin="0.5rem 0">Intent understanding</ListItem>
            <ListItem margin="0.5rem 0">Long-term memory</ListItem>
            <ListItem margin="0.5rem 0">Business context</ListItem>
            <ListItem margin="0.5rem 0">Architecture decisions</ListItem>
          </UnorderedList>
          <Text color="quinary" fontSize="text" margin="1rem 0 0 0">
            <strong>Weakness:</strong> Slow at code production
          </Text>
        </Box>
        <Box width="48%">
          <Text color="secondary" fontSize="h3" margin="0 0 1rem 0">
            AI Strengths:
          </Text>
          <UnorderedList color="primary" fontSize="text">
            <ListItem margin="0.5rem 0">Very productive code writing</ListItem>
            <ListItem margin="0.5rem 0">Pattern recognition</ListItem>
            <ListItem margin="0.5rem 0">Syntax perfection</ListItem>
            <ListItem margin="0.5rem 0">Rapid iteration</ListItem>
          </UnorderedList>
          <Text color="quinary" fontSize="text" margin="1rem 0 0 0">
            <strong>Weakness:</strong> Limited context & memory
          </Text>
        </Box>
      </FlexBox>

      <UnorderedList color="primary" fontSize="text">
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Abstraction control:</strong> Move up and down the stack
            seamlessly
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Natural language:</strong> Sometimes, but not always
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Background agents:</strong> Autonomous helpers for routine
            tasks
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>

    {/* Getting Started */}
    {/* <Slide backgroundColor="secondary">
      <Heading color="tertiary" fontSize="h2" margin="0 0 2rem 0">
        Getting Started with Cursor
      </Heading>
      <UnorderedList color="tertiary" fontSize="text">
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Download:</strong> cursor.com (free trial available)
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Import:</strong> Your existing VS Code settings and
            extensions
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Try Tab:</strong> Start with simple completions
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Add context:</strong> Include relevant files in chat
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Experiment:</strong> Try Apply for larger code changes
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1rem 0">
            <strong>Join community:</strong> Discord, forums, documentation
          </ListItem>
        </Appear>
      </UnorderedList>
      <Appear>
        <Text
          color="tertiary"
          fontSize="text"
          margin="2rem 0"
          textAlign="center"
        >
          Remember: You're learning to collaborate with AI, not be replaced by
          it
        </Text>
      </Appear>
    </Slide> */}

    {/* Bonus Slide */}
    <Slide backgroundColor="secondary">
      <Heading color="tertiary" fontSize="h2" margin="0 0 2rem 0">
        🎁 Bonus for Curious Minds
      </Heading>
      <Text color="tertiary" fontSize="text" margin="0 0 2rem 0">
        Want to dive deeper into how Cursor works?
      </Text>
      <UnorderedList color="tertiary" fontSize="text">
        <Appear>
          <ListItem margin="1.5rem 0">
            <strong>Peek behind the curtain:</strong> View the{" "}
            <Link 
              href="https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/blob/main/Cursor%20Prompts/Agent%20Prompt.txt" 
              target="_blank"
              color="tertiary"
              textDecoration="underline"
            >
              leaked prompt
            </Link>{" "}
            from Cursor's agent mode to understand in-depth how it works
          </ListItem>
        </Appear>
        <Appear>
          <ListItem margin="1.5rem 0">
            <strong>See AI in action:</strong> This slide deck itself was written in Cursor 
            and co-edited by the Cursor agent! Check out the{" "}
            <Link 
              href="https://github.com/lilac/cursor-intro" 
              target="_blank"
              color="tertiary"
              textDecoration="underline"
            >
              source code
            </Link>{" "}
            to see how I automate slide creation with AI
          </ListItem>
        </Appear>
      </UnorderedList>
      <Appear>
        <Text
          color="tertiary"
          fontSize="text"
          margin="2rem 0"
          textAlign="center"
          fontStyle="italic"
        >
          "Meta-programming: Using AI to create slides about AI" 🤖✨
        </Text>
      </Appear>
    </Slide>

    {/* Q&A */}
    <Slide backgroundColor="primary">
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="secondary" fontSize="h1" margin="0 0 2rem 0">
          Questions?
        </Heading>
        <Text color="tertiary" fontSize="h3" margin="0 0 1rem 0">
          Let's explore the future of programming together
        </Text>
        {/* <Text color="tertiary" fontSize="text">
          cursor.com | @cursor_ai
        </Text> */}
      </FlexBox>
    </Slide>
  </Deck>
);

createRoot(document.getElementById("app")!).render(<Presentation />);
