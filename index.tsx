import React from 'react';
import { createRoot } from 'react-dom/client';
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
  Box
} from 'spectacle'

const theme = {
  colors: {
    primary: '#1a1a1a',
    secondary: '#6366f1',
    tertiary: '#f8fafc',
    quaternary: '#10b981',
    quinary: '#ef4444'
  },
  fonts: {
    header: '"SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace'
  },
  fontSizes: {
    h1: '3.5rem',
    h2: '2.5rem',
    h3: '2rem',
    text: '1.5rem',
    monospace: '1.2rem'
  }
};

const Presentation = () => (
  <Deck theme={theme} template={() => <DefaultTemplate color="#6366f1" />}>
    
    {/* Title Slide */}
    <Slide backgroundColor="primary">
      <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
        <Heading color="secondary" fontSize="h1" margin="0 0 2rem 0">
          Cursor
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
        <ListItem margin="1rem 0">A fork of VS Code with powerful AI features</ListItem>
        <ListItem margin="1rem 0">Built by team who believed in scaling laws and GPT-4's potential</ListItem>
        <ListItem margin="1rem 0">Designed for <em>human-AI collaboration</em>, not replacement</ListItem>
        <ListItem margin="1rem 0">Used by hundreds of thousands of programmers</ListItem>
      </UnorderedList>
      <Quote color="secondary" fontSize="text" margin="2rem 0" borderLeft="4px solid">
        "Fast is fun. Programming should be delightful."
      </Quote>
    </Slide>

    {/* Core Philosophy */}
    <Slide backgroundColor="primary">
      <Heading color="secondary" fontSize="h2" margin="0 0 2rem 0">
        Core Philosophy
      </Heading>
      <FlexBox flexDirection="column" alignItems="center">
        <Text color="tertiary" fontSize="h3" margin="1rem 0" textAlign="center">
          Human Intelligence + Artificial Intelligence = Magic
        </Text>
        <UnorderedList color="tertiary" fontSize="text" margin="2rem 0">
          <ListItem margin="1rem 0">
            <strong>Human:</strong> Memory, analysis, architecture, project management
          </ListItem>
          <ListItem margin="1rem 0">
            <strong>AI:</strong> Efficient text/code generation, pattern recognition
          </ListItem>
          <ListItem margin="1rem 0">
            <strong>Together:</strong> Eliminate "zero entropy" keystrokes
          </ListItem>
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
        <ListItem margin="1rem 0">Predicts entire code changes, not just characters</ListItem>
        <ListItem margin="1rem 0">Jumps to next logical editing location</ListItem>
        <ListItem margin="1rem 0">Uses fast MOE models with speculative decoding</ListItem>
        <ListItem margin="1rem 0">Goal: Press Tab → Make progress</ListItem>
      </UnorderedList>
      <Quote color="tertiary" fontSize="text" margin="2rem 0" borderLeft="4px solid white">
        "How many Tabs can we make someone press?"
      </Quote>
    </Slide>

    {/* Context System */}
    <Slide backgroundColor="tertiary">
      <Heading color="primary" fontSize="h2" margin="0 0 2rem 0">
        Smart Context System
      </Heading>
      <FlexBox flexDirection="row" justifyContent="space-between">
        <Box width="45%">
          <Text color="secondary" fontSize="h3" margin="0 0 1rem 0">What you can add:</Text>
          <UnorderedList color="primary" fontSize="text">
            <ListItem margin="0.5rem 0">Files & folders</ListItem>
            <ListItem margin="0.5rem 0">Code snippets</ListItem>
            <ListItem margin="0.5rem 0">Documentation</ListItem>
            <ListItem margin="0.5rem 0">Git history</ListItem>
            <ListItem margin="0.5rem 0">Terminal output</ListItem>
            <ListItem margin="0.5rem 0">Lint errors</ListItem>
            <ListItem margin="0.5rem 0">Web pages</ListItem>
            <ListItem margin="0.5rem 0">Images</ListItem>
          </UnorderedList>
        </Box>
        <Box width="45%">
          <Text color="secondary" fontSize="h3" margin="0 0 1rem 0">How it works:</Text>
          <UnorderedList color="primary" fontSize="text">
            <ListItem margin="0.5rem 0">Semantic indexing of your codebase</ListItem>
            <ListItem margin="0.5rem 0">Automatic relevance detection</ListItem>
            <ListItem margin="0.5rem 0">Merkle tree sync for large repos</ListItem>
            <ListItem margin="0.5rem 0">Smart prompt engineering (JSX-like)</ListItem>
          </UnorderedList>
        </Box>
      </FlexBox>
    </Slide>

    {/* Apply Feature */}
    <Slide backgroundColor="primary">
      <Heading color="secondary" fontSize="h2" margin="0 0 2rem 0">
        Apply: From Sketch to Code
      </Heading>
      <Text color="tertiary" fontSize="text" margin="0 0 2rem 0">
        Frontier models create rough sketches → Custom models generate precise diffs
      </Text>
             <CodePane
         language="typescript"
         showLineNumbers={false}
       >{`// You write this rough idea:
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
}`}</CodePane>
    </Slide>

    {/* Diff Interface */}
    <Slide backgroundColor="tertiary">
      <Heading color="primary" fontSize="h2" margin="0 0 2rem 0">
        Intelligent Diff Interface
      </Heading>
      <UnorderedList color="primary" fontSize="text">
        <ListItem margin="1rem 0">
          <strong>Multiple diff modes:</strong> Optimized for autocomplete vs. large changes
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Smart highlighting:</strong> Show important changes, gray out repetitive ones
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Multi-file support:</strong> Coordinated changes across your codebase
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Background processing:</strong> Shadow workspace for testing changes
        </ListItem>
      </UnorderedList>
      <Text color="secondary" fontSize="text" margin="2rem 0" fontStyle="italic">
        "Code review kind of sucks. We can do much better with language models."
      </Text>
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
        <ListItem margin="1rem 0">
          <strong>Web search:</strong> Find documentation and examples
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Terminal execution:</strong> Run commands and tests
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>File system access:</strong> Create, modify, and organize files
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>MCP tools:</strong> Extensible tool ecosystem
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Planning mode:</strong> Break down complex tasks
        </ListItem>
      </UnorderedList>
    </Slide>

    {/* Technical Architecture */}
    <Slide backgroundColor="primary">
      <Heading color="secondary" fontSize="h2" margin="0 0 2rem 0">
        Under the Hood
      </Heading>
      <FlexBox flexDirection="column">
        <Text color="tertiary" fontSize="h3" margin="0 0 1rem 0">Model Ensemble:</Text>
        <UnorderedList color="tertiary" fontSize="text">
          <ListItem margin="0.5rem 0">
            <strong>Claude Sonnet:</strong> Best overall coding performance
          </ListItem>
          <ListItem margin="0.5rem 0">
            <strong>GPT-4/o1:</strong> Complex reasoning tasks
          </ListItem>
          <ListItem margin="0.5rem 0">
            <strong>Custom models:</strong> Tab completion, Apply diffs
          </ListItem>
        </UnorderedList>
        
        <Text color="tertiary" fontSize="h3" margin="2rem 0 1rem 0">Performance Optimizations:</Text>
        <UnorderedList color="tertiary" fontSize="text">
          <ListItem margin="0.5rem 0">Speculative decoding for faster generation</ListItem>
          <ListItem margin="0.5rem 0">KV cache optimization</ListItem>
          <ListItem margin="0.5rem 0">MOE (Mixture of Experts) models</ListItem>
          <ListItem margin="0.5rem 0">Cache warming and preemptive requests</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>

    {/* Best Practices */}
    <Slide backgroundColor="tertiary">
      <Heading color="primary" fontSize="h2" margin="0 0 2rem 0">
        Recommended Workflow
      </Heading>
      <UnorderedList color="primary" fontSize="text">
        <ListItem margin="1rem 0">
          <strong>Break down tasks:</strong> Decompose features into specific, implementable chunks
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Add relevant context:</strong> Include related files, docs, and examples
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Start new chats:</strong> Fresh context for each distinct task
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Be specific:</strong> Clear prompts get better results
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Iterate quickly:</strong> Make small changes and build incrementally
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Review AI output:</strong> You're the architect, AI is the implementer
        </ListItem>
      </UnorderedList>
    </Slide>

    {/* Demo Preview */}
    <Slide backgroundColor="secondary">
      <Heading color="tertiary" fontSize="h2" margin="0 0 2rem 0">
        Real-World Example
      </Heading>
      <Text color="tertiary" fontSize="text" margin="0 0 2rem 0">
        Building mcpbar: A CLI package manager for MCP servers
      </Text>
      <UnorderedList color="tertiary" fontSize="text">
        <ListItem margin="1rem 0">
          <strong>90%+ code generated</strong> by Cursor
        </ListItem>
        <ListItem margin="1rem 0">
          Bootstrapped from open source template
        </ListItem>
        <ListItem margin="1rem 0">
          Used context to understand MCP protocol
        </ListItem>
        <ListItem margin="1rem 0">
          Applied best practices for CLI design
        </ListItem>
        <ListItem margin="1rem 0">
          Iterative development with human guidance
        </ListItem>
      </UnorderedList>
      <Text color="tertiary" fontSize="text" margin="2rem 0" fontStyle="italic">
        "Human as project manager, AI as senior developer"
      </Text>
    </Slide>

    {/* Programming Challenges */}
    <Slide backgroundColor="primary">
      <Heading color="secondary" fontSize="h2" margin="0 0 2rem 0">
        Current Limitations
      </Heading>
      <UnorderedList color="tertiary" fontSize="text">
        <ListItem margin="1rem 0">
          <strong>Bug detection:</strong> Models struggle with finding subtle bugs
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Large diffs:</strong> Reviewing big changes is still challenging
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Context limits:</strong> Can't include entire large codebases
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Domain knowledge:</strong> May lack specific business context
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Latency:</strong> Some operations still take seconds
        </ListItem>
      </UnorderedList>
      <Text color="secondary" fontSize="text" margin="2rem 0" textAlign="center">
        But these are improving rapidly! 🚀
      </Text>
    </Slide>

    {/* Future Vision */}
    <Slide backgroundColor="tertiary">
      <Heading color="primary" fontSize="h2" margin="0 0 2rem 0">
        The Future of Programming
      </Heading>
      <Quote color="secondary" fontSize="text" margin="0 0 2rem 0" borderLeft="4px solid">
        "A human-AI programmer that's an order of magnitude more effective"
      </Quote>
      <UnorderedList color="primary" fontSize="text">
        <ListItem margin="1rem 0">
          <strong>Abstraction control:</strong> Move up and down the stack seamlessly
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Natural language:</strong> Sometimes, but not always
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Formal verification:</strong> AI-generated proofs for correctness
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Background agents:</strong> Autonomous helpers for routine tasks
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Human in driver's seat:</strong> You make the important decisions
        </ListItem>
      </UnorderedList>
    </Slide>

    {/* Getting Started */}
    <Slide backgroundColor="secondary">
      <Heading color="tertiary" fontSize="h2" margin="0 0 2rem 0">
        Getting Started with Cursor
      </Heading>
      <UnorderedList color="tertiary" fontSize="text">
        <ListItem margin="1rem 0">
          <strong>Download:</strong> cursor.com (free trial available)
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Import:</strong> Your existing VS Code settings and extensions
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Try Tab:</strong> Start with simple completions
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Add context:</strong> Include relevant files in chat
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Experiment:</strong> Try Apply for larger code changes
        </ListItem>
        <ListItem margin="1rem 0">
          <strong>Join community:</strong> Discord, forums, documentation
        </ListItem>
      </UnorderedList>
      <Text color="tertiary" fontSize="text" margin="2rem 0" textAlign="center">
        Remember: You're learning to collaborate with AI, not be replaced by it
      </Text>
    </Slide>

    {/* Q&A */}
    <Slide backgroundColor="primary">
      <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
        <Heading color="secondary" fontSize="h1" margin="0 0 2rem 0">
          Questions?
        </Heading>
        <Text color="tertiary" fontSize="h3" margin="0 0 1rem 0">
          Let's explore the future of programming together
        </Text>
        <Text color="tertiary" fontSize="text">
          cursor.com | @cursor_ai
        </Text>
      </FlexBox>
    </Slide>

  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);