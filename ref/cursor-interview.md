Introduction
- The following is a conversation with the founding members of the Cursor Team, Michael Truell, Sualeh Asif, Arvid Lunnemark,
and Aman Sanger. Cursor is a code editor based on VS Code
that adds a lot of powerful features for AI-assisted coding. It has captivated the attention and excitement
of the programming and AI communities. So I thought, this is an excellent opportunity
to dive deep into the role of AI in programming. This is a super technical conversation
that is bigger than just about one code editor. It's about the future of programming,
and in general, the future of human AI collaboration in designing and engineering complicated
and powerful systems. This is the "Lex Fridman Podcast." To support it, please check out our sponsors in the description.
And now, dear friends, here's Michael, Sualeh, Arvid and Aman.
Code editor basics
All right, this is awesome. We have Michael, Aman, Sualeh, Arvid here from the Cursor Team.
First up, big ridiculous question. What's the point of a code editor?
- So the code editor is largely the place where you build software. And today or for a long time, that's meant the place
where you text edit a formal programming language. And for people who aren't programmers,
the way to think of a code editor is a really souped up word processor for programmers, where the reason it's souped up
is code has a lot of structure. And so the, quote, unquote, "word processor,"
the code editor can actually do a lot for you that word processors in the writing space
haven't been able to do for people editing texts there. And so that's everything from giving you visual differentiation
of the actual tokens in the code so you can scan it quickly, to letting you navigate around the code base,
like you're navigating around the internet with hyperlinks, you're going to definitions of things you're using to error checking to catch rudimentary bugs.
And so traditionally, that's what a code editor has meant. And I think that what a code editor is,
is going to change a lot over the next 10 years as what it means to build software maybe starts to look a bit different.
- I think also a code editor should just be fun. - Yes, that is very important, that is very important.
And it's actually an underrated aspect of how we decide what to build.
A lot of the things that we build and then we try them out, we do an experiment and then we actually throw them out
because they're not fun. And so, a big part of being fun is being fast a lot of the time.
Fast is fun. - Yeah, fast is. (chuckles) Yeah, that should be a T-shirt.
(group chuckling) - Fundamentally, I think one of the things that draws a lot of people to building stuff on computers
is this insane iteration speed, where in other disciplines you might be gate capped by resources or the ability.
Even the ability to get a large group together and coding is this amazing thing where it's you and the computer and that alone,
you can build really cool stuff really quickly. - So for people who don't know, Cursor is this super cool new editor
GitHub Copilot
that's a fork of VS Code. It would be interesting to get your explanation
of your own journey of editors. I think all of you were big fans of VS Code with Copilot.
How did you arrive to VS Code and how did that lead to your journey with Cursor? - Yeah, so I think a lot of us,
well, all of us were originally Vim users. - Pure Vim. - Pure Vim, yeah. No Neovim, just pure Vim and a terminal.
And at least for myself, it was around the time that Copilot came out,
so 2021 that I really wanted to try it.
So, I went into VS Code, the only code editor in which it was available, and even though I really enjoyed using Vim,
just the experience of Copilot with VS Code was more than good enough to convince me to switch.
And so that kind of was the default until we started working on Cursor. - And maybe we should explain what Copilot does.
It's a really nice auto complete. As you start writing a thing, it suggests one or two or three lines
how to complete the thing. And there's a fun experience in that. You know like when you have a close friendship
and your friend completes your sentences? (group chuckles) When it's done well, there's an intimate feeling.
There's probably a better word than intimate, but there's a cool feeling of like, "Holy shit, it gets me."
(all chuckles) And then, there's an unpleasant feeling when it doesn't get you. And so, there's that kind of friction.
But I would say for a lot of people, the feeling that it gets me overpowers that it doesn't. - And, I think, actually one of the underrated aspects
of Github Copilot is that even when it's wrong, it's a little bit annoying, but it's not that bad because you just type another character,
and then maybe then it gets you, or you type another character and then it gets you. So even when it's wrong, it's not that bad.
- Yeah, you can iterate and fix it. I mean, the other underrated part of Copilot for me
was just the first real AI product. So the first language model consumer product.
- So, Copilot was like the first killer app for LLMs. - Yeah. - Yeah, and the beta was out in 2021.
- Right, okay. So, what's the origin story of Cursor?
- So around 2020, the scaling loss papers came out from OpenAI, and that was a moment
where this looked like clear predictable progress for the field where even if we didn't have any more ideas,
it looked like you could make these models a lot better if you had more compute and more data. - By the way, we'll probably talk for three to four hours
on the topic of scaling loss. (group chuckling) But just to summarize, it's a paper in a set of papers in a set of ideas
that say bigger might be better for model size and data size in the realm of machine learning.
- It's bigger and better, but predictably better. - Okay, that's another topic of conversation. - Yes. - Yeah.
- So around that time for some of us, there were a lot of conceptual conversations about what's this gonna look like?
What's the story gonna be for all these different knowledge worker fields about how they're gonna be made better
by this technology getting better? And then, I think, there were a couple of moments where the theoretical gains predicted
in that paper started to feel really concrete, and it started to feel like a moment where you could actually go and not do a PhD
if you wanted to do useful work in AI. It actually felt like now there was this whole set
of systems one could build that were really useful. And I think that the first moment we already talked about a little bit, which was playing with the early beta of Copilot,
that was awesome and magical. I think that the next big moment where everything kind of clicked together
was actually getting early access to GPT-4. So, it was sort of end of 2022 was when we were tinkering with that model,
and the step-upping capabilities felt enormous. And previous to that, we had been working on a couple of different projects.
Because of Copilot, because of scaling odds, because of our prior interest in the technology, we had been tinkering around with tools for programmers,
but things that are very specific. So, we were building tools for financial professionals
who have to work within a Jupyter Notebook or playing around with can you do static analysis with these models? And then, the step-up in GPT-4 felt like,
look, that really made concrete the theoretical gains that we had predicted before.
It felt like you could build a lot more just immediately at that point in time. And also, if we were being consistent, it really felt like
this wasn't just gonna be a point solution thing. This was gonna be all of programming was gonna flow through these models. And it felt like that demanded a different type
of programming environment, a different type of programming. And so, we set off to build that larger vision around then.
- There's one that I distinctly remember. So, my roommate is an IMO Gold winner
and there's a competition in the US called the PUTNAM, which is the IMO for college people, and it's this math competition.
It's exceptionally good. So, Shengtong and Aman I remember, sort of June of 2022,
had this bet on whether the 2024 June or July,
you were going to win a gold medal in the IMO with models. - IMO is the International Math Olympiad.
- Yeah, IMO is International Math Olympiad. And so, Arvid and I are both also competing in it.
So, it was sort of personal. (group chuckling) And I remember thinking, "Matt, this is not gonna happen."
Even though I sort of believed in progress, I thought IMO Gold, Aman is delusional.
And to be honest, I mean, I was, to be clear, very wrong. But that was maybe the most prescient bet in the group.
- So the new results from DeepMind, it turned out that you were correct.
(group chattering) - [Arvid] Technically not. - Technically incorrect but one point away. - Aman was very enthusiastic about this stuff back then.
And before, Aman had this scaling loss T-shirt that he would wear around where it had the charts and the formulas on it.
- So, you felt the AGI or you felt the scaling loss. - Yeah, I distinctly remember there was this one conversation I had with Michael
before I hadn't thought super deeply and critically about scaling laws. And he kind of posed the question,
why isn't scaling all you need, or why isn't scaling gonna result in massive gains in progress?
And I think I went through the stages of grief. There is anger, denial, and then finally at the end
just thinking about it, acceptance. And I think I've been quite hopeful
and optimistic about progress since. I think one thing I'll caveat is, I think, it also depends
on which domains you're gonna see progress. Math is a great domain especially formal theorem proving
because you get this fantastic signal of actually verifying if the thing was correct.
And so this means something like RL can work really, really well, and I think you could have systems that are perhaps very superhuman in math
and still not technically have AGI. - Okay, so can we take it all the way to Cursor.
Cursor
And what is Cursor? It's a fork of VS Code, and VS Code is one of the most popular editors
for a long time. Everybody fell in love with it. Everybody left Vim, I left DMAX for it.
Sorry. (all laughing) So, unified in some fundamental way the developer community.
And then, you look at the space of things, you look at the scaling laws, AI is becoming amazing.
And you decided, okay, it's not enough to just write an extension via VS Code
because there's a lot of limitations to that. If AI is gonna keep getting better and better and better,
we need to really rethink how the AI is gonna be part of the editing process.
And so, you decided to fork VS Code, and start to build a lot of the amazing features
we'll be able to talk about. But what was that decision like? Because there's a lot of extensions, including Copilot,
of VS Code that are doing sort of AI type stuff. What was the decision like to just fork VS Code?
- So the decision to do an editor seemed self-evident to us for at least what we wanted to do and achieve,
because when we started working on the editor, the idea was these models are gonna get much better, their capabilities are gonna improve,
and it's gonna entirely change how you build software, both in a you will have big productivity gains but also radical and now the active building software
is gonna change a lot. And so, you're very limited in the control you have over a code editor
if you're a plugin to an existing coding environment, and we didn't wanna get locked in by those limitations.
We wanted to be able to just build the most useful stuff. - Okay. Well then, the natural question is,
VS Code is kind of with Copilot a competitor, so how do you win?
Is it basically just the speed and the quality of the features? - Yeah, I mean, I think this is a space
that is quite interesting, perhaps quite unique where if you look at previous tech waves,
maybe there's kind of one major thing that happened and it unlocked a new wave of companies, but every single year, every single model capability
or jump you get in model capabilities, you now unlock this new wave of features,
things that are possible, especially in programming. And so, I think, in AI programming,
being even just a few months ahead, let alone a year ahead, makes your product much, much, much more useful.
I think the Cursor a year from now will need to make the Cursor of today look obsolete.
And I think Microsoft has done a number of fantastic things, but I don't think they're in a great place
to really keep innovating and pushing on this in the way that a startup can. - Just rapidly implementing features.
- Yeah, and doing the research experimentation necessary
to really push the ceiling. - I don't know if I think of it in terms of features as I think of it in terms of capabilities for programmers.
As the new o1 model came out, and I'm sure there are gonna be more models
of different types, like longer context and maybe faster, there's all these crazy ideas that you can try,
and hopefully 10% of the crazy ideas will make it into something kind of cool and useful
and we want people to have that sooner.
To rephrase, an underrated fact is we're making it for ourself. When we started Cursor,
you really felt this frustration that models, you could see models getting better,
but the Copilot experience had not changed. It was like, "Man, the ceiling is getting higher,
why are they not making new things? They should be making new things. Where's all the alpha features?
There were no alpha features." I'm sure it was selling well.
I'm sure it was a great business, I'm one of these people that really want to try and use new things,
and there was no new thing for a very long while. - Yeah, it's interesting.
I don't know how you put that into words, but when you compare a Cursor with Copilot, Copilot pretty quickly started to feel stale
for some reason. - Yeah, I think one thing that I think helps us is that we're doing it all in one
where we're developing the UX and the way you interact with the model at the same time as we're developing
how we actually make the model give better answers. So, how you build up the prompt or how do you find the context and for a Cursor Tab,
how do you train the model? So, I think that helps us to have all of it the same people working on the entire experience end to end.
- Yeah, it's like the person making the UI and the person training the model sit like 18 feet away.
- [Aman] Often the same person even. - Yeah, often even the same person. You can create things that are sort of not possible
if you're not talking, you're not experimenting. - And you're using, like you said, Cursor to write Cursor?
- Of course. - Oh, yeah. - Yeah. - Well, let's talk about some of these features. Let's talk about the all-knowing,
the all-powerful praise be to the Tab, (group chuckles) auto complete on steroids basically.
So how does Tab work? What is Tab? - To highlight and summarize at a high level, I'd say that there are two things
that Cursor is pretty good at right now. There are other things that it does, but two things that it helps programmers with.
One is this idea of looking over your shoulder, and being a really fast colleague
who can kind of jump ahead of you, and type, and figure out what you're gonna do next.
That was the kernel of the idea behind a good auto complete was predicting what you're gonna do next, but you can make that concept even more ambitious
by not just predicting the characters after your Cursor but actually predicting the next entire change you're gonna make, the next diff,
next place you're gonna jump to. And the second thing Cursor is pretty good at right now too
is helping you sometimes jump ahead of the AI and tell it what to do and go from instructions to code.
And on both of those, we've done a lot of work on making the editing experience for those things ergonomic and also making those things smart and fast.
Cursor Tab
- One of the things we really wanted, was we wanted the model to be able to edit code for us. That was kind of a wish and we had multiple attempts at it
before we had a good model that could edit code for you.
Then after we had a good model, I think there've been a lot of effort to make the inference fast for having a good experience,
and we've been starting to incorporate, I mean, Michael sort of mentioned this ability
to jump to different places, and that jump to different places I think came from a feeling of once you accept an edit,
it's like, "Man, it should be just really obvious where to go next." It's like, "I'd made this change, the model should just know
that the next place to go to is 18 lines down." If you're a WIM user, you could press 18JJ or whatever,
but why am I doing this? The model should just know it. So the idea was you just press Tab,
it would go 18 lines down, and then show you the next edit and you would press Tab, so as long as you could keep pressing Tab.
And so the internal competition was, how many Tabs can we make someone press? Once you have the idea, more abstractly,
the thing to think about is how are the edits zero entropy?
There's no new bits of information to finish your thought, but you still have to type some characters
to make the computer understand what you're actually thinking, then maybe the model should just read your mind
and all the zero entropy bits should just be tabbed away.
That was sort of the abstract version. - There's this interesting thing where if you look at language model loss on different domains, I believe the bits per byte,
which is a kind of character normalize loss for code is lower than language,
which means in general, there are a lot of tokens in code that are super predictable, a lot of characters that are super predictable.
And this is I think even magnified when you're not just trying to auto complete code, but predicting what the user's going to do next
in their editing of existing code. And so, the goal of Cursor Tab is let's eliminate
all the low entropy actions you take inside of the editor. When the intent is effectively determined,
let's just jump you forward in time, skip you forward. - Well, what's the intuition and what's the technical details
of how to do next Cursor prediction? That jump, that's not so intuitive I think to people.
- Yeah. I think I can speak to a few of the details on how to make these things work.
They're incredibly low latency, so you need to train small models on this task.
In particular, they're incredibly pre-fill token hungry.
What that means is they have these really, really long prompts where they see a lot of your code and they're not actually generating that many tokens.
And so, the perfect fit for that is using a sparse model, meaning an MOE model.
So that was one breakthrough we made that substantially improved its performance at longer context.
The other being a variant of speculative decoding that we built out called speculative edits.
These are two, I think, important pieces of what make it quite high quality and very fast.
- Okay, so MoE, Mixture of Experts, the input is huge, the output is small. - Yeah. - Okay.
Does caching play a role- - Oh, caching plays a huge role. Because you're dealing with this many input tokens,
if every single keystroke that you're typing in a given line you had to rerun the model on all of those tokens passed in,
you're just going to one, significantly degrade latency, two, you're gonna kill your GPUs with load.
So, you need to design the actual prompts you use for the model such that they're caching aware.
And then yeah, you need to reuse the KV cache across requests just so that you're spending less work, less compute.
- Again, what are the things that Tab is supposed to be able to do in the near term, just to linger on that?
Generate code, fill empty space, also edit code across multiple lines,
and then jump to different locations inside the same file, and then- - Hopefully, jump to different files also.
So if you make an edit in one file, and maybe you have to go to another file
to finish your thought, it should go to the second file also. - The full generalization is next action prediction.
Sometimes, you need to run a command in the terminal and it should be able to suggest the command based
on the code that you wrote too.
It suggests something, but it's hard for you to know if it's correct because you actually need some more information to learn.
You need to know the type to be able to verify that it's correct. And so maybe it should actually take you to a place
that's the definition of something, and then take you back so that you have all the requisite knowledge
to be able to accept the next completion. - So providing the human the knowledge. - [Arvid] Yes.
- Right. - Mm-hmm, yeah. - I just gotten to know a guy named Primeagen.
You can order coffee via SSH. - (chuckles) Oh, yeah. - We did that. - We did that.
- So, can also the model do that and provide you with caffeine?
Okay, so that's the general framework. - Yeah.
- Programming is this weird discipline where sometimes the next five minutes, not always,
but sometimes the next five minutes of what you're gonna do is actually predictable from the stuff you've done recently. And so, can you get to a world where that next five minutes
either happens by you disengaging and it taking you through? Or maybe a little bit more of just you seeing next step
what it's gonna do and you're like, "Okay, that's good, that's good, that's good, that's good," and you can just tap, tap through these big changes.
Code diff
- As we're talking about this, I should mention one of the really cool and noticeable things about Cursor is that
there's this whole diff interface situation going on. So, the model suggests with the red and the green
of here's how we're gonna modify the code, and in the chat window you can apply and it shows you the diff and you can accept the diff.
So, maybe can you speak to whatever direction of that? - We'll probably have four or five different kinds of diffs.
So we have optimized the diff for the auto complete, so that has a different diff interface
than when you're reviewing larger blocks of code. And then we're trying to optimize another diff thing
for when you're doing multiple different files. And at a high level, the difference is
for when you're doing auto-complete, it should be really, really fast to read.
Actually, it should be really fast to read in all situations, but in auto-complete your eyes are focused in one area.
The humans can't look in too many different places. - So, you're talking about on the interface side? - On the interface side. So it currently has this box on this side.
So we have the current box, and it you tries to delete code in some place and tries to add other code,
it tries to show you a box on the side. - You can maybe show it if we pull it up in cursor.com. This is what we're talking.
- So that box- - Exactly here. - It was like three or four different attempts at trying to make this thing work
where first the attempt was this blue crossed out line. So before it was a box on the side,
it used to show you the code to delete by showing you Google Docs style,
you would see a line through it and then you would see the new code. That was super distracting.
There was deletions, there was trying the red highlight. Then the next iteration of it, which is sort of funny,
you would hold the, on Mac, the Option button. So, it would highlight a region of code
to show you that there might be something coming. So, maybe in this example, the input and the value would all get blue.
And the blue was to highlight that the AI had a suggestion for you. So instead of directly showing you the thing,
it would just hint that the AI had a suggestion and if you really wanted to see it, you would hold the Option button,
and then you would see the new suggestion. And if you release the Option button, you would then see your original code.
- Mm-hmm, by the way, that's pretty nice, but you have to know to hold the Option button. - Yeah.
- And by the way, I'm not a Mac user, but I got it, Option. It's a button I guess you people have.
- Again, it's just not intuitive. I think that's the key thing. - And there's a chance this is also not the final version of it.
- I am personally very excited for making a lot of improvements in this area.
We often talk about it as the verification problem where these diffs are great for small edits.
For large edits or when it's multiple files or something, it's actually a little bit prohibitive
to review these diffs. So, there are a couple of different ideas here.
One idea that we have is, okay, parts of the diffs are important. They have a lot of information.
And then parts of the diff are just very low entropy. They're the same thing over and over again.
And so maybe you can highlight the important pieces and then gray out the not so important pieces.
Or maybe you can have a model that looks at the diff and sees, oh, there's a likely bug here.
I will mark this with a little red squiggly and say, "You should probably review this part of the diff."
Ideas in that vein I think are exciting. - Yeah, that's a really fascinating space
of UX design engineering. So you're, basically, trying to guide the human programmer
through all the things they need to read and nothing more, optimally. - Yeah, and you want an intelligent model to do it.
Currently, diff algorithms, they're just like normal algorithms.
There's no intelligence. There's intelligence that went into designing the algorithm, but then you don't care if it's about this thing
or this thing as you want the model to do this. - So, I think the general question is like,
man, these models are going to get much smarter. As the models get much smarter,
changes they will be able to propose are much bigger. So as the changes gets bigger and bigger and bigger,
the humans have to do more and more and more verification work.
You need to help them out. I don't wanna spend all my time reviewing code.
- Can you say a little more across multiple files diff? - Yeah, I mean, so GitHub tries to solve this, right,
with code review. When you're doing code review, you're reviewing multiple diffs across multiple files.
But like Arvid said earlier, I think you can do much better than code review.
Code review kind of sucks. You spend a lot of time trying to grok this code that's often quite unfamiliar to you
and it often doesn't even actually catch that many bugs.
And I think you can significantly improve that review experience using language models, for example, using the kinds of tricks that Arvid had described
of maybe pointing you towards the regions that actually matter.
I think also if the code is produced by these language models and it's not produced by someone else.
The code review experience is design for both the reviewer
and the person that produced the code. In the case where the person that produced the code is a language model,
you don't have to care that much about their experience and you can design the entire thing around the reviewer such that the reviewer's job is as fun,
as easy, as productive as possible. I think that feels like the issue with just naively trying
to make these things look like code review. I think you can be a lot more creative
and push the boundary on what's possible. - And just one idea there is, I think ordering matters.
Generally, when you review a PR, you have this list of files and you're reviewing them from top to bottom,
but you actually wanna understand this part first because that came logically first,
and then you want to understand the next part. And you don't want to have to figure out that yourself.
You want a model to guide you through the thing. - And is the step of creation going to be more
and more natural language, is the goal versus with actual writing the book? - I think sometimes. I don't think it's going to be the case
that all of programming will be natural language, and the reason for that is if I'm pair programming with Sualeh,
and Sualeh is at the computer and the keyboard, and sometimes if I'm driving, I want to say to Sualeh,
"Hey, implement this function," and that works. And then sometimes it's just so annoying
to explain to Sualeh what I want him to do, and so I actually take over the keyboard and I show him.
I write part of the example and then it makes sense and that's the easiest way to communicate.
And so, I think that's also the case for AI. Sometimes the easiest way to communicate with the AI will be to show an example
and then it goes and does the thing everywhere else. Or sometimes if you're making a website, for example,
the easiest way to show to the AI what you want is not to tell it what to do but drag things around or draw things,
and maybe eventually, we will get to brain machine interfaces or whatever
and you can understand what you're thinking. And so, I think natural language will have a place. I think it will definitely not be the way
most people program most of the time. - I'm really feeling the AGI with this editor.
ML details
(group chuckling) It feels like there's a lot of machine learning going on underneath. Tell me about some of the ML stuff that makes it all work?
- Where Cursor really works via this ensemble of custom models that we've trained alongside the frontier models
that are fantastic at the reasoning intense things. And so Cursor Tab, for example, is a great example
of where you can specialize this model to be, even better than even frontier models if you look at evals on the task we set it at.
The other domain, which it's surprising that it requires custom models but it's necessary and works quite well, is in Apply.
The frontier models are quite good at sketching out plans for code and generating rough sketches of the change,
but actually, creating diffs is quite hard
for frontier models, for your training models. You try to do this with Sonnet, with o1, any frontier model
and it really messes up stupid things like counting line numbers, especially in super, super large files.
And so what we've done to alleviate this is we let the model sketch out this rough code block
that indicates what the change will be and we train a model to then Apply that change to the file.
- And we should say that Apply is the model looks at your code, it gives you a really damn good suggestion
of what new things to do. And the seemingly for humans trivial step
of combining the two, you're saying is not so trivial. - Contrary to popular perception,
it is not a deterministic algorithm. - Yeah, I think you see shallow copies of Apply elsewhere
and it just breaks most of the time because you think you can try to do some deterministic matching, and then it fails at least 40% of the time
and that just results in a terrible product experience.
I think in general, this regime of you are going to get smarter and smarter models.
So one other thing that Apply lets you do is it lets you use fewer tokens
with the most intelligent models. This is both expensive in terms of latency for generating all these tokens and cost.
So, you can give this very, very rough sketch and then have your model models go and implement it
because it's a much easier task to implement, this very, very sketched out code. And I think that this regime will continue
where you can use smarter and smarter models to do the planning and then maybe the implementation details
can be handled by the less intelligent ones. Perhaps you'll have maybe o1, maybe it'll be even more capable models
given an even higher level plan that is recursively applied by Sauna
and then the Apply model. - Maybe we should talk about how to make it fast if you like. Fast is always an interesting detail.
- [Arvid] Fast is good. - Yeah, how do you make it fast? - Yeah, so one big component
of making it fast is speculative edits. So, speculative edits are a variant of speculative decoding,
and maybe it'd be helpful to briefly describe speculative decoding. With speculative decoding,
what you do is you can take advantage of the fact that most of the time, and I'll add the caveat
that it would be when you're memory bound in language model generation,
if you process multiple tokens at once, it is faster than generating one token at a time.
So this is the same reason why if you look at tokens per second with prompt tokens
versus generated tokens, it's much much faster for prompt tokens.
So what we do is instead of using what speculative decoding normally does, which is using a really small model
to predict these draft tokens that your larger model will then go in and verify,
with code edits, we have a very strong prior of what the existing code will look like, and that prior is literally the same exact code.
So you can do is you can just feed chunks of the original code back into the model,
and then the model will just pretty much agree most of the time that, "Okay, I'm just gonna spit this code back out."
And so, you can process all of those lines in parallel and you just do this with sufficiently many chunks. And then eventually, you'll reach a point of disagreement
where the model will now predict text that is different from the ground truth original code.
It'll generate those tokens and then we will decide after enough tokens match the original code
to re-start speculating in chunks of code. What this actually ends up looking like
is just a much faster version of normal editing code. So, it looks like a much faster version
of the model rewriting all the code. So, we can use the same exact interface that we use for diffs,
but it will just stream down a lot faster. - And then the advantage is that while it's streaming,
you can just also start reviewing the code before it's done so there's no big loading screen.
Maybe that is part of the advantage. - So, the human can start reading before the thing is done.
- I think the interesting riff here is something like, I feel like speculation is a fairly common idea nowadays.
It's not only in language models. There's obviously speculation in CPUs and there's speculation for databases
and there's speculation all over the place. - Well, let me ask the ridiculous question
GPT vs Claude
of which LLM is better at coding? GPT, Claude, who wins in the context of programming?
And I'm sure the answer is much more nuanced because it sounds like every single part of this involves a different model.
- Yeah, I think there's no model that Pareto dominates others,
meaning, it is better in all categories that we think matter, the categories being speed,
ability to edit code, ability to process lots of code, long context, a couple of other things
and coding capabilities. The one that I'd say right now is just net best is Sonnet.
I think this is a consensus opinion. O1's really interesting and it's really good at reasoning.
So if you give it really hard programming interview style problems or lead code problems,
it can do quite well on them, but it doesn't feel like it understands your rough intent
as well as Sonnet does. If you look at a lot of the other frontier models,
one qualm I have is it feels like they're not necessarily over, I'm not saying they train on benchmarks,
but they perform really well in benchmarks relative to everything that's in the middle.
So if you tried on all these benchmarks and things that are in the distribution of the benchmarks they're evaluated on, they'll do really well.
But when you push them a little bit outside of that, Sonnet is I think the one that does best
at maintaining that same capability. You have the same capability in the benchmark
as when you try to instruct it to do anything with coding. - Another ridiculous question is the difference
between the normal programming experience versus what benchmarks represent?
Where do benchmarks fall short, do you think, when we're evaluating these models? - By the way, that's a really, really hard,
critically important detail of how different benchmarks are versus real coding,
where real coding, it's not interview style coding.
Humans are saying half-broken English sometimes and sometimes you're saying, "Oh, do what I did before."
Sometimes you're saying, "Go add this thing and then do this other thing for me
and then make this UI element." And then, it's just a lot of things are context dependent.
You really want to understand the human and then do what the human wants, as opposed to this,
maybe the way to put it abstractly is the interview problems are very well specified.
They lean a lot on specification while the human stuff is less specified.
- Yeah. I think that this benchmark question is both complicated by what Sualeh just mentioned,
and then also what Aman was getting into,
there's this problem of the skew between what can you actually model in a benchmark versus real programming,
and that can be sometimes hard to encapsulate because it's real programming's very messy and sometimes things aren't super well specified
what's correct or what isn't. But then it's also doubly hard because of this public benchmark problem.
And that's both because public benchmarks are sometimes hill climbed on, then it's really, really hard to also get the data
from the public benchmarks out of the models. And so for instance,
one of the most popular agent benchmarks, SWE-Bench,
is really, really contaminated in the training data of these foundation models. And so if you ask these foundation models
to do a SWE-Bench problem, but you actually don't give them the context of a code base, they can hallucinate the right file pass, they can hallucinate the right function names.
And so, it's also just the public aspect of these things is tricky. - Yeah, in that case, it could be trained
on the literal issues or pull requests themselves, and maybe the labs will start to do a better job
or they've already done a good job at decontaminating those things, but they're not going to omit the actual training data
of the repository itself. These are all some of the most popular Python repositories. SimPy is one example.
I don't think they're going to handicap their models on SimPy and all these popular Python repositories
in order to get true evaluation scores in these benchmarks. - I think that given the dirts in benchmarks,
there have been a few interesting crutches that places that build systems with these models or build these models actually use
to get a sense of are they going the right direction or not. And in a lot of places, people will actually just have humans play with the things
and give qualitative feedback on these. One or two of the foundation model companies, they have people that's a big part of their role.
And internally, we also qualitatively assess these models and actually lean on that a lot
in addition to private emails that we have. - [Arvid] It's like the vibe. - The vibe, yeah, the vibe. - It's like the vibe.
- The vibe benchmark, human benchmark, the humans. You pull in the humans to do a vibe check.
- Yeah. (chuckles) - Okay. That's what I do, just reading online forums and Reddit and X.
Well, I don't know how to properly load in people's opinions
'cause they'll say things like, "I feel like Claude or GPT has gotten dumber," or something.
They'll say, "I feel like." And then I sometimes feel like that too, but I wonder if it's the model's problem or mine.
- With Claude, there's an interesting take I heard where I think AWS has different chips,
and I suspect they have slightly different numerics than Nvidia GPUs,
and someone speculated that Claude's degraded performance had to do with maybe using the quantized version
that existed on AWS Bedrock versus whatever was running on Anthropics GPUs.
- I interview a bunch of people that have conspiracy theories, so I'm glad you spoke to this conspiracy.
- Well, it's not like conspiracy theory as much as humans.
Humans are humans and there's these details. - [Lex] Yes. - And you're doing this queasy amount of flops
and chips are messy and man, you can just have bugs.
It's hard to overstate how hard bugs are to avoid. - What's the role of a good prompt in all of this?
Prompt engineering
We mentioned that benchmarks have really structured, well-formulated prompts.
What should a human be doing to maximize success and what's the importance of what the humans,
you wrote a blog post, you called it Prompt Design. - Yeah, I think it depends on which model you're using,
and all of them are slightly different and they respond differently to different prompts, but I think the original GPT-4
and the original (indistinct) models last year, they were quite sensitive to the prompts,
and they also had a very small context window. And so, we have all of these pieces of information
around the code base that would maybe be relevant in the prompt. You have the docs, you have the files that you add,
you have the conversation history, and then there's a problem like how do you decide what you actually put in the prompt
and when you have a limited space? And even for today's models, even when you have long context,
filling out the entire context window means that it's slower. It means that sometimes the model actually gets confused
and some models get more confused than others. And we have this one system internally that we call Preempt,
which helps us with that a little bit. And I think it was built for the era before
where we had 8,000 token contact windows. And it's a little bit similar
to when you're making a website. You want it to work on mobile,
you want it to work on a desktop screen, and you have this dynamic information which you don't have.
For example, if you're designing a print magazine, you know exactly where you can put stuff. But when you have a website or when you have a prompt,
you have these inputs and then you need to format them to always work, even if the input is really big, then you might have to cut something down.
And so the idea was, okay, let's take some inspiration. What's the best way to design websites?
Well, the thing that we really like is React and the declarative approach where you use JSX in JavaScript, and then you declare,
"This is what I want and I think this has higher priority or this has higher Z index than something else."
And then, you have this rendering engine in web design. It's like Chrome, and in our case it's a preempt renderer,
which then fits everything onto the page. And as you declare, decide what you want and then it figures out what you want.
And so, we have found that to be quite helpful and I think the role of it has shifted over time
where initially it was to fit to these small context windows. Now, it's really useful because it helps us with splitting up the data
that goes into the prompt and the actual rendering of it. And so, it's easier to debug
because you can change the rendering of the prompt and then try it on old prompts because you have the raw data that went into the prompt,
and then you can see, "Did my change actually improve it for this entire eval set?" - So, do you literally prompt with JSX?
- Yes, yes. - Yeah. - So it looks like React, there are components. We have one component that's a file component
and it takes in the Cursor. Usually, there's one line where the Cursor is in your file
and that's probably the most important line because that's the one you're looking at. And so, then you can give priorities, so that line has the highest priority,
and then you subtract one for every line that is farther away. And then eventually, when it's rendered,
it figures out how many lines can actually fit and it centers around that thing. - That's amazing. - Yeah.
- And you can do other fancy things where if you have lots of code blocks from the entire code base, you could use retrieval
and things like embedding and re-ranking scores to add priorities for you through these components.
- So should humans when they ask questions, also try to use something like that? Would it be beneficial to write JSX in the problem
or the whole idea is this should be loose and messy? - I think our goal is that you should just do whatever
is the most natural thing for you, and then our job is to figure out
how do we actually retrieve the relative event things so that your thinking actually makes sense? - Well, this is the discussion I had
with Aravind of Perplexity is his whole idea is you should let the person be as lazy as he wants.
- Yeah. - Mm-hmm. - Yeah, that's a beautiful thing, but I feel like you're allowed
to ask more of programmers, right? - Yes. - So if you say, "Just do what you want,"
I mean, humans are lazy. There's a tension between just being lazy versus provide more as be prompted,
almost like the system pressuring you or inspiring you to be articulate.
Not in terms of the grammar of the sentences, but in terms of the depth of thoughts that you convey inside the prompts.
- I think even as a system gets closer to some level of perfection, often when you ask the model for something,
not enough intent is conveyed to know what to do. And there are a few ways to resolve that intent.
One is the simple thing of having the model just ask you, "I'm not sure how to do these parts based on your query.
Could you clarify that?" I think the other could be maybe
if there are five or six possible generations, "Given the uncertainty present in your query so far,
why don't we just actually show you all of those and let you pick them?" - How hard is it for the model to choose to talk back?
It's hard, how deal with the uncertainty. Do I choose to ask for more information
to reduce the ambiguity? - So, I mean, one of the things we do,
it's like a recent addition, is try to suggest files that you can add.
And while you're typing, one can guess what the uncertainty is
and maybe suggest that maybe you're writing your API
and we can guess using the commits
that you've made previously in the same file that the client and the server is super useful
and there's a hard technical problem of how do you resolve it across all commits?
Which files are the most important given your current prompt? And we're still initial version is ruled out
and I'm sure we can make it much more accurate. It's very experimental, but then the idea is we show you,
do you just want to add this file, this file, this file also to tell the model to edit those files for you?
Because if maybe you're making the API, you should also edit the client and the server that is using the API and the other one resolving the API.
So that would be cool as both there's the phase where you're writing a prompt.
Before you even click, "Enter," maybe we can help resolve some of the uncertainty. - To what degree do you use agentic approaches?
AI agents
How useful are agents? - We think agents are really, really cool.
- [Lex] (chuckles) Okay. - I think agents, it's like resembles like a human.
You can feel that you're getting closer to AGI because you see a demo where it acts as a human would
and it's really, really cool. I think agents are not yet super useful for many things.
I think we're getting close to where they will actually be useful. And so, I think there are certain types of tasks
where having an agent would be really nice. I would love to have an agent. For example, if we have a bug
where you sometimes can't Command+C and Command+V inside our chat input box,
and that's a task that's super well specified. I just want to say in two sentences, "This does not work, please fix it."
And then I would love to have an agent that just goes off, does it, and then a day later, I come back and I review the thing.
- You mean it goes, finds the right file? - Yeah, it finds the right files, it tries to reproduce the bug,
it fixes the bug and then it verifies that it's correct. And this could be a process that takes a long time.
And so, I think I would love to have that. And then I think a lot of programming,
there is often this belief that agents will take over all of programming.
I don't think we think that that's the case because a lot of programming, a lot of the value is in iterating,
or you don't actually want to specify something upfront because you don't really know what you want until you have seen an initial version
and then you want to iterate on that, and then you provide more information. And so, for a lot of programming,
I think you actually want a system that's instant, that gives you an initial version instantly back and then you can iterate super, super quickly.
- What about something like that recently came out, replica agent, that does also setting up
the development environment and solving software packages, configuring everything, configuring the databases
and actually deploying the app. Is that also in the set of things you dream about?
- I think so. I think that would be really cool. For certain types of programming, it would be really cool.
- Is that within scope of Cursor? - Yeah, we aren't actively working on it right now.
We want to make the programmer's life easier and more fun and some things are just really tedious
and you need to go through a bunch of steps and you want to delegate that to an agent. And then some things you can actually have an agent
in the background while you're working. Let's say you have a PR that's both backend and frontend,
and you're working in the frontend, and then you can have a background agent that doesn't work and figure out what you're doing.
And then, when you get to the backend part of your PR, then you have some initial piece of code
that you can iterate on. And so that would also be really cool.
- One of the things we already talked about is speed, but I wonder if we can just linger on that some more
in the various places that the technical details involved
in making this thing really fast. So every single aspect of Cursor, most aspects of Cursor feel really fast.
Like I mentioned, the Apply is probably the slowest thing. I'm sorry, the pain on Arvid's face as I say that.
- I know. It's a pain, it's a pain that we're feeling and we're working on fixing it. (Arvid and Lex chuckling)
- Yeah, it says something that feels, I don't know what it is, like one second or two seconds,
that feels slow. That means that actually shows that everything else is just really, really fast.
So, is there some technical details about how to make some of these models, how to make the chat fast, how to make the diffs fast?
Is there something that just jumps to mind? - Yeah. So, we can go over a lot of the strategies that we use. One interesting thing is cache warming.
You're probably going to use some piece of context and you can know that before the user's done typing.
So as we discussed before, reusing the KV cache results in lower latency,
lower costs, cross requests. So as the user starts typing, you can immediately warm the cache with let's say the current file contents,
and then when they press Enter, there's very few tokens it actually has to pre-fill
and compute before starting the generation. This will significantly lower TTFT. - Can you explain how KV cache works?
- [Aman] Yeah, so the way transformers work. (group chuckling) - I like it.
(group chuckling)
- The mechanism that allows transformers to not just independently look at each token, but see previous tokens are the keys
and values to attention. And generally, the way attention works is you have at your current token some query,
and then you've all the keys and values of all your previous tokens, which are some kind of representation
that the model stores internally of all the previous tokens in the prompt. And by default, when you're doing a chat, the model has to,
for every single token, do this forward pass through the entire model.
That's a lot of matrix multiplies that happen, and that is really, really slow. Instead, if you have already done that
and you stored the keys and values and you keep that in the GPU,
let's say I have to sort it for the last N tokens. If I now wanna compute the output token for the N+1nth token,
I don't need to pass those first N tokens through the entire model because I already have all those keys and values.
And so, you just need to do the forward pass through that last token. And then when you're doing attention,
you're reusing those keys and values that have been computed, which is the only kind of sequential part
or sequentially dependent part of the transformer. - Is there higher level caching of caching of the prompts
or that kind of stuff that could help? - I see. Yeah, there's other types of caching you can do.
One interesting thing that you can do for Cursor Tab is you can basically predict ahead
as if the user would've accepted the suggestion and then trigger another request.
And so then you've cached, you've done the speculative. It's a mix of speculation and caching, right? Because speculating what would happen if they accepted it.
And then you have this value that is cached this suggestion. And then when they press Tab,
the next one would be waiting for them immediately. It's a clever heuristic/trick
that uses a higher level caching. It feels fast despite there not actually being any changes
in the model. - And if you can make the KV cache smaller, one of the advantages you get is like maybe you can speculate even more.
Maybe you can guess, "Here's the 10 things that could be useful,
predict the next 10," and then it's possible the user hits the one of the 10. It's much higher chance than the user hits the exact one
that you showed them. Maybe they type in other character and hit something else in the cache.
The general phenomena here is, I think it's also super useful for RL
is maybe a single sample from the model isn't very good, but if you predict 10 different things,
turns out that one of the 10 that's right is the probability is much higher. There's these passive K curves and part of RL,
what RL does is you can exploit this passive K phenomena to make many different predictions.
And one way to think about this, the model knows internally has some uncertainty
over which of the key things is correct or which of the key things does the human wants? When we RL our Cursor Tab model,
one of the things we're doing is we're predicting
which of the 100 different suggestions the model produces is more amenable for humans?
Which of them do humans more like than other things? Maybe there's something
where the model can predict very far ahead versus a little bit, maybe somewhere in the middle.
And then you can give a reward to the things that humans would like more and punish the things that it would like, and then train the model to output the suggestions
that humans would like more. You have these RL loops that are very useful that exploit these passive K curves.
Aman, maybe can go into even more detail. - Yeah, it is a little different than speed,
but technically, you tie it back in because you can get away with the smaller model
if you RL your smaller model and it gets the same performance as the bigger one.
So while I was mentioning stuff about KV, about reducing the size of your KV cache, there are other techniques there as well
that are really helpful for speed. So, kind of back in the day, all the way two years ago,
people mainly use multi-head attention, and I think there's been a migration towards more efficient attention schemes like group query
or multi-query attention, and this is really helpful for then with larger batch sizes
being able to generate the tokens much faster. The interesting thing here is this now has no effect
on that time to first token pre-fill speed. The thing this matters for is now generating tokens.
And why is that? 'Cause when you're generating tokens, instead of being bottlenecked
by doing these super parallelizable matrix multiplies across all your tokens, you're bottlenecked,
for a long context with large batch sizes, by how quickly you can read those cache, keys, and values.
And so then that's memory bandwidth, and how can we make this faster? We can try to compress the size of these keys and values.
So multi-query attention is the most aggressive of these. Where normally with multi-head attention,
you have some number of, quote, unquote, "attention heads,"
and some number of query heads. Multi-query just preserves the query heads,
gets rid of all the key value heads. So there's only one kind of key value head,
and there's all the remaining query heads. With group query, you instead preserve all the query heads.
There are fewer heads for the keys and values, but you're not reducing it to just one. But anyways, the whole point here
is you're just reducing the size of your KV cache. - And then there is MLA.
- Yeah, multi-latent. That's a little more complicated. And the way that this works is it kind of turns the entirety
of your keys and values across all your heads into this one latent vector
that has then kind of expanded in for its time. - But MLA is from this company called DeepSeek.
It's quite an interesting algorithm. Maybe the key idea is in both MQA and in other places,
what you're doing is you're reducing the number of KV heads.
And the advantage you get from that is there's less of them.
You want each of the keys and values to actually be different. So, one way to reduce the size is you keep one big shared vector
for all the keys and values, and then you have smaller vectors for every single token. So that you can store the only the smaller thing
as some sort of low-rank reduction. At the end of the time,
when you eventually wanna compute the final thing, remember that your memory band, which means that you still have some compute left
that you can use for these things. And if you can expand the latent vector back out
and somehow this is far more efficient because you're reducing, for example,
maybe you're reducing vec 32 or something like the size of the vector that you're keeping. - Yeah, there's perhaps some richness
in having a separate set of keys and values and query that kind of pairwise match up
versus compressing that all into one in that interaction at least.
- Okay, and all of that is dealing with being memory bound. - Yeah.
- I mean, ultimately, how does that map to the user experience? Trying to get the- - Yeah, the two things that it maps to
is you can now make your cache a lot larger because you've less space allocated for the KV cache.
You can maybe cache a lot more aggressively in a lot more things, so you get more cache hits, which are helpful for reducing the time to first token
for the reasons that were kind of described earlier. And then the second being, when you start doing inference with more and more requests
and larger and larger batch sizes, you don't see much of a slowdown
as it's generating the tokens at the speed of that. - Well, it also allows you to make your prompt bigger for certain- - Yeah, yeah.
So, the size of your KV cache is both the size of all your prompts,
multiplied by the number of prompts being processed in parallel. So you could increase either those dimensions, right? The batch size or the size of your prompts
without degrading the latency of generating tokens. - Arvid, you wrote a blog post,
Running code in background
"Shadow Workspace: Iterating on Code in the Background." So, what's going on?
- So, to be clear, we want there to be a lot of stuff happening in the background, and we're experimenting with a lot of things.
Right now, we don't have much stuff happening other than the cache warming
or figuring out the right context that goes into your command key prompts, for example.
But the idea is if you can actually spend computation in the background, then you can help the user
maybe at a slightly longer time horizon than just predicting the next few lines
that you're gonna make. But actually in the next 10 minutes, what are you going to make? And by doing it in background,
you can spend more computation doing that. And so the idea of the Shadow Workspace that we implemented,
and we use it internally for experiments is that to actually get advantage
of doing stuff in the background, you want some kind of feedback signal to give back to the model
because otherwise, you can get higher performance by just letting the model think for longer,
and so o1 is a good example of that. But another way you can improve performance is by letting the model iterate and get feedback.
And so, one very important piece of feedback when you're a programmer is the language server,
which is this thing, it exists for most different languages,
and there's a separate language server per language. And it can tell you, "You're using the wrong type here,"
and then gives you an error, or it can allow you to go to definition and understands the structure of your code.
There is a TypeScript language server developed by the TypeScript people, a Rust language server developed by the Rust people, and then they all interface
over the language server protocol to VS Code. So that VS Code doesn't need to have all of the different languages built into VS Code
but rather you can use the existing compiler infrastructure. - For linting purposes, what- - It's for linting.
It's for going to definition, and for seeing the right types that you're using.
- So it's doing type checking also? - Yes, type checking and going to references.
And that's like when you're working in a big project, you kind of need that. If you don't have that, it's really hard to code in a big project.
- Can you say, again, how that's being used inside Cursor, the language server protocol communication thing?
- So it's being used in Cursor to show to the programmer just like in VS Code, but then the idea is you want to show that same information to the models,
the IM models, and you want to do that in a way that doesn't affect the user
because you want to do it in background. And so the idea behind the Shadow Workspace was, okay, one way we can do this is we spawn a separate window
of Cursor that's hidden, and so you can set this flag in it and like turn it's hidden.
There is a window but you don't actually see it. And inside of this window, the AI agents can modify code
however they want as long as they don't save it because it's still the same folder, and then can get feedback from the linters
and go to definition and iterate on their code. - So literally run everything in the background,
right, maybe even run the code. - So that's the eventual version and that's what you want.
And a lot of the blog post is actually about how do you make that happen
because it's a little bit tricky. You want it to be on the user's machine so that it exactly mirrors the user's environment.
And then on Linux, you can do this cool thing where you can actually mirror the file system
and have the AI make changes to the files, and it thinks that it's operating on the file level,
but actually, that's stored in memory and you can create this kernel-like extension
to make it work. Whereas on Mac and Windows, it's a little bit more difficult,
but it's a fun technical problem, so that's why. - One may be hacky but interesting idea that I like is holding a lock on saving.
And so basically, you can then have the language model kind of hold the lock on saving to disk,
and then instead of you operating in the ground truth version of the files that are saved to disk, you actually are operating
what was the Shadow Workspace before and these unsaved things that only exist in memory that you still get linter errors for, and you can code in.
And then when you try to maybe run code, it's just like there's a small warning that there's a lock, and then you kind of will take back the lock
from the language server if you're trying to do things concurrently or from the Shadow Workspace if you're trying to do things concurrently.
Debugging
- That's such an exciting future by the way. It's a bit of a tangent, but to allow a model to change files,
it's scary for people but it's really cool, to be able to just let the agent do a set of tasks
and you come back the next day and kind of observe, like it's a colleague or something like that.
- And I think there may be different versions of runability for the simple things where you're doing things
in the span of a few minutes on behalf of the user as they're programming, it makes sense to make something work locally in their machine.
I think for the more aggressive things where you're making larger changes that take longer periods of time, you'll probably wanna do this
in some sandbox remote environment and that's another incredibly tricky problem of how do you exactly reproduce
or mostly reproduce to the point of it being effectively equivalent for running code the user's environment with this remote sandbox.
- I'm curious what kind of agents you want for coding? Do you want them to find bugs?
Do you want them to implement new features? What agents do you want? - So by the way, when I think about agents,
I don't think just about coding. I think so for this particular podcast,
there's video editing and if you look in Adobe, there's code behind.
It's very poorly documented code, but you can interact with Premiere, for example, using code,
and basically all the uploading, everything I do on YouTube, everything as you could probably imagine,
I do all of that through code and including translation and overdubbing, all of this.
So, I envision all of those kinds of tasks. So automating many of the tasks
that don't have to do directly with the editing, so that. Okay, that's what I was thinking about.
But in terms of coding, I would be fundamentally thinking about bug finding,
many levels of kind of bug finding and also bug finding like logical bugs, not logical like spiritual bugs or something.
(group chuckling) Ones like big directions of implementation, that kind of stuff.
- Magical (indistinct) and bug finding. - Yeah, I mean, it's really interesting that these models are so bad at bug finding
when just naively prompted to find a bug. They're incredibly poorly calibrated.
- Even the smartest models. - Exactly, even o1. - How do you explain that?
Is there a good intuition? - I think these models are really strong reflection
of the pre-training distribution, and I do think they generalize as the loss gets lower and lower,
but I don't think the loss is low enough such that they're really fully generalizing on code.
The things that we use these things for, the frontier models that they're quite good at, are really code generation and question answering.
And these things exist in massive quantities in pre-training with all of the code in GitHub on the scale
of many, many trillions of tokens and questions and answers on things like stack overflow and maybe GitHub issues.
And so, when you try to push one of these things that really don't exist very much online,
for example, the Cursor Tab objective of predicting the next edit given the edits done so far, the brittleness kind of shows.
And then bug detection is another great example, where there aren't really that many examples of actually detecting real bugs and then proposing fixes
and the models just kind of really struggle at it. But I think it's a question of transferring the model
in the same way that you get this fantastic transfer from pre-trained models just on code in general
to the Cursor Tab objective. You'll see a very, very similar thing with generalized models that are really good at code
to bug detection. It just takes a little bit of kind nudging in that direction. - Look, to be clear, I think, they understand code really well.
While they're being pre-trained, the representation that's being built up almost certainly
like somewhere in the stream, the model knows that maybe there's something sketchy going on.
Part of it is that humans are really calibrated on which bugs are really important.
It's not just actually saying there's something sketchy. It's like it's this sketchy trivial, it's this sketchy like you're gonna take the server down.
Part of it is maybe the cultural knowledge of why is a staff engineer is good
because they know that three years ago someone wrote a really sketchy piece of code
that took the server down. (group chuckling)
This thing is an experiment. So, a few bugs are fine, you're just trying to experiment
and get the feel of the thing. And so if the model gets really annoying when you're writing an experiment, that's really bad,
but if you're writing something for super production, you're writing a database. You're writing code in Postgres or Linux or whatever.
You're Linus Torvalds. It's sort of unacceptable to have even an edge case and just having the calibration of how paranoid is the user.
- But even then if you're putting in a maximum paranoia, it still just doesn't quite get it.
- Yeah, yeah, yeah. - I mean, but this is hard for humans too to understand
Dangerous code
which line of code is important, which is not. I think one of your principles on a website says
if a code can do a lot of damage, one should add a comment that say,
"This line of code is dangerous." - And all caps, repeated 10 times.
(group chuckling) - No, you say for every single line of code inside the function you have to, and that's quite profound,
that says something about human beings because the engineers move on,
even the same person might just forget how it can sink the Titanic a single function.
You might not intuit that quite clearly by looking at the single piece of code. - Yeah, and I think that one is partially also
for today's AI models where if you actually write dangerous, dangerous, dangerous
in every single line, the models will pay more attention to that
and will be more likely to find bugs in that region. - That's actually just straight up a really good practice
of labeling code of how much damages can do. - Yeah, I mean, it's controversial.
Some people think it's ugly. Sualeh does not like it. - In fact, I actually think this is one of the things
I learned from Arvid. Aesthetically, I don't like it,
but I think there's certainly something where it's useful for the models and humans just forget a lot,
and it's really easy to make a small mistake.
Just bring down the server. Of course, we test a lot and whatever,
but there's always these things that you have to be very careful. - Yeah, like with just normal docstrings,
I think people will often just skim it when making a change and think, "Oh, I know how to do this,"
and you really need to point it out to them so that doesn't slip through. - Yeah, you have to be reminded
that you could do a lot of damage, that's like we don't really think about that.
You think about, "Okay, how do I figure out how this works so I can improve it?" You don't think about the other direction that it could-
- Until we have formal verification for everything, then you can do whatever you want
and you know for certain that you have not introduced a bug if the proof pass. - Well, concretely, what do you think that future
would look like? - I think people will just not write to tests anymore.
You write a function, the model will suggest a spec, and you review the spec. And in the meantime, smart reasoning model computes a proof
that the implementation follows the spec, and I think that happens for most functions.
- Do you think this gets at a little bit some of the stuff you were talking about earlier with the difficulty of specifying intent for what you want with software,
where sometimes it might be because the intent is really hard to specify, it's also then going to be really hard to prove
that it's actually matching whatever your intent is? - You think that spec is hard to generate?
- Yeah, or just for a given spec.
I think there is a question of, can you actually do the formal verification? Is that possible? I think that there's more to dig into there, but then also-
- Even if you have the spec? - If you have the spec- - Even if you have the spec, is the spec written in natural language?
Or is it- - No, the spec would be formal. - But how easier would that be (indistinct). - Okay, so then I think that you care about things
that are not going to be easily well specified in the spec language. - I see, I see, yeah, yeah. - Would be maybe an argument against formal verification
is all you need. - The worry is there's this massive document- - Replacing something like unit tests, sure.
- Yeah, yeah. I think you can probably also evolve the spec languages
to capture some of the things that they don't really capture right now.
I don't know, I think it's very exciting. - And you're speaking not just about single functions,
you're speaking about entire code bases. - I think entire code bases is harder, but that is what I would love to have
and I think it should be possible. There's a lot of work recently
where you can prove formally verified down to the hardware.
You formally verify the C code, and then you formally verify through the GCC compiler, and then through the Verilog down to the hardware.
And that's incredibly big system, but it actually works. And I think big code bases are sort of similar in that
and they're like multi-layered system. And if you can decompose it and formally verify each part,
then I think it should be possible. I think this specification problem is a real problem. - How do you handle side effects or how do you handle,
I guess, external dependencies like calling the Stripe API? - Maybe Stripe would write a spec for their API.
- But you can't do this for everything. Can you do this for everything you use?
Maybe people will use language models as primitives in the programs they write, and there's a dependence on it
and how do you now include that? - I think you might be able to prove that still.
- Prove what about language models? - I think it feels possible that you could actually prove that a language model is aligned, for example,
or you can prove that it actually gives the right answer.
- That's the dream. - Yeah, I mean, if it's possible. That's your I have a dream speech.
If it's possible, that will certainly help with making sure your code doesn't have bugs
and making sure AI doesn't destroy all human civilization. So, the full spectrum of AI safety to just bug finding.
So, you said the models struggle with bug finding. What's the hope? - My hope initially is, and I can let Michael chime in too,
but it was like it should first help with the stupid bugs.
It should query quickly, catch the stupid bugs off by one error. Sometimes you write something in a comment
and do the other way. It's very common. I do this. I write less than in a comment and I maybe write the greater than or something like that.
And the model is like, "Yeah, you looks sketchy. You sure you wanna do that?"
But eventually, it should be able to catch harder bugs too. - Yeah, and I think that it's also important to note
that having good bug, finding models feels necessary to get to the highest reaches
of having AI do more and more programming for you. If AI is building more and more of the system for you,
you need to not just generate but also verify. And without that, some of the problems that we've talked about before with programming,
with these models will just become untenable. So it's not just for humans like you write a bug,
I write a bug, find the bug for me, but it's also being able to verify the AI's code and check it is really important.
- Yeah, and then how do you actually do this? We have had a lot of contentious dinner discussions of how do you actually train a bug model,
but one very popular idea is it's potentially easy to introduce a bug than actually finding the bug.
And so, you can train a model to introduce bugs in existing code, and then you can train a reverse bug model then
that can find bugs using this synthetic data. So that's one example,
but there are lots of ideas for how to (indistinct). - You can also do a bunch of work not even at the model level of taking the biggest models
and then maybe giving them access to a lot of information that's not just the code.
It's a hard problem to stare at a file and be like, "Where's the bug?" And that's hard for humans often, right?
And so often, you have to run the code and being able to see things like traces and step through a debugger,
there's another whole other direction where it tends toward that. - It could also be that there are two different product form factors here.
It could be that you have a really specialty model that's quite fast that's running in the background and trying to spot bugs.
And it might be that sometimes to Arvid's earlier example about some nefarious input box bug.
You know there's a bug, you're not just checking hypothesis free, you're like, "This is a problem, I really wanna solve it,"
and you zap that with tons and tons and tons of compute, and you're willing to put in $50 to solve that bug or something even more.
- Have you thought about integrating money into this whole thing? I would pay probably a large amount of money if you found a bug or even generated code
that I really appreciated. I had a moment a few days ago when I started using Cursor where it generated perfect three functions
for interacting with the YouTube API to update captions
for localization in different languages. The API documentation is not very good and the code across.
I googled it for a while. I couldn't find exactly, there's a lot of confusing information, and Cursor generated perfectly.
I just sit back, I read the code, I was like, "This is correct, I tested it, it's correct." I was like, "I wanna tip."
I want a button that goes, "Here's $5." One that's really good just to support the company
and support what the interface is. And the other is that probably sends a strong signal like good job.
(all chuckling) So, there's this much stronger signal than just accepting the code, right? You just actually send a strong good job.
That and for bug finding, obviously, there's a lot of people
that would pay a huge amount of money for a bug bounty thing, right?
You guys think about that? - Yeah, it's a controversial idea inside the company. I think it depends
on how much you believe in humanity almost.
I think it would be really cool if you spend nothing to try to find a bug.
And if it doesn't find a bug, you spend $0. And then if it does find a bug and you click accept,
then it also shows in parentheses like $1. And so, you spend $1 to accept the bug.
And then, of course, there's a worry like, "Okay, we spent a lot of computation, maybe people will just copy paste."
I think that's a worry. Then there is also the worry that introducing money into the product.
It doesn't feel as fun anymore. You have to think about money. And all you want to think about is the code,
and so maybe it actually makes more sense to separate it out, and you pay some fee every month,
and then you get all of these things for free. - But there could be a tipping component which is not like it cost this-
- Yes, but it still has that dollar symbol. I think it's fine, but I also see the point where maybe you don't want to introduce it.
- Yeah, I was gonna say the moment that feels like people do this is when they share it. When they have this fantastic example, they just share it with their friends.
- There is also a potential world where there's a technical solution to this like honor system problem too, where if we can get to a place
where we understand the output of the system more, I mean, to the stuff we were talking about with error checking with the LSP
and then also running the code. But if you could get to a place where you could actually somehow verify, "Oh, I have fixed the bug," maybe then the bounty system
doesn't need to rely on the honor system too. - How much interaction is there between the terminal and the code?
Branching file systems
How much information is gained from if you run the code in the terminal?
Can you do a loop where it runs the code and suggests how to change the code?
If the code and runtime gets an error? Is right now there's separate worlds completely?
I know you can do control K inside the terminal to help you write the code. - You can use terminal context as well
inside of check Command+K kind of everything. We don't have the looping part yet,
so we suspect something like this could make a lot of sense. There's a question of whether it happens in the foreground too or if it happens in the background
like what we've been discussing. - Sure, the background's pretty cool. I could be running the code in different ways.
Plus there's a database side to this, which how do you protect it from not modifying the database, but okay.
(group chuckling) - I mean, there's certainly cool solutions there. There's this new API that is being developed.
It's not in AWS, but it certainly, I think,
it's in PlanetScale. I don't know if PlanetScale was the first one to you add it. It's this ability sort of add branches to a database,
which is like if you're working on a feature and you wanna test against the broad database, but you don't actually want to test
against the broad database, you could add a branch to the database. And the way they do that is they add a branch to the write-ahead log.
And there's obviously a lot of technical complexity in doing it correctly. I guess database companies need new things to do.
(group chuckling) They have good databases now.
And I think turbopuffer, which is one of the databases we use, is going to add maybe branching to the write-ahead log.
So maybe the AI agents will use branching, they'll test against some branch,
and it's gonna be a requirement for the database to support branching or something.
- It would be really interesting if you could branch a file system, right? - Yeah. I feel like everything needs branching.
- [Aman] Yeah. - Yeah. The problem with the multiverse, right? (group chuckling)
If you branch on everything that's like a lot. - There's obviously these super clever algorithms to make sure that you don't actually use a lot of space
or CPU or whatever. - Okay, this is a good place to ask about infrastructure. So, you guys mostly use AWS,
what are some interesting details? What are some interesting challenges? Why'd you choose AWS? Why is AWS still winning?
Hashtag. - AWS is just really, really good. It is really good.
Whenever you use an AWS product, you just know that it's going to work.
It might be absolute hell to go through the steps to set it up.
- Why is the interface so horrible? - Because it's. (chuckles) - It's just so good. It doesn't need to- - It's the nature of winning.
(group chuckling) - I think it's exactly, it's just nature they're winning. - Yeah, yeah. But AWS we can always trust, it will always work.
And if there is a problem, it's probably your problem. (Lex chuckles) Yeah.
Scaling challenges
- Okay, is there some interesting challenges, you guys are pretty new startup to scaling,
to so many people. - Yeah, I think that it has been an interesting journey
adding each extra zero to the request per second. (Lex chuckles) You run into all of these with the general components
you're using for caching and databases, run into issues as you make things bigger and bigger, and now we're at the scale where we get into overflows
on our tables and things like that. And then, also there have been some custom systems
that we've built. For instance, our retrieval system for computing, a semantic index of your code base and answering questions
about a code base that have continually, I feel like, been one of the trickier things to scale.
- I have a few friends who are super senior engineers and one of their lines is, it's very hard to predict
where systems will break when you scale them. You can try to predict in advance,
but there's always something weird that's gonna happen when you add these extras here.
You thought through everything, which you didn't actually think through everything. But I think for that particular system,
we chunk up all of your code, and then we send up the code for embedding
and we embed the code. And then, we store the embeddings in a database, but we don't actually store any of the code.
And then there's reasons around making sure that we don't introduce client bugs because we're very, very paranoid about client bugs.
We store much of the details on the server.
Everything is encrypted. So, one of the technical challenges is always making sure
that the local index, the local code base state is the same as the state that is on the server.
The way, technically, we ended up doing that is, for every single file you can keep this hash,
and then for every folder you can keep a hash, which is the hash of all of its children.
You can recursively do that until the top. Why do something complicated?
One thing you could do is you could keep a hash for every file, and every minute, you could try to download the hashes
that are on the server, figure out what are the files that don't exist on the server. Maybe you just created a new file, maybe you just deleted a file,
maybe you checked out a new branch, and try to reconcile the state between the client and the server.
But that introduces absolutely ginormous network overhead both on the client side.
Nobody really wants us to hammer their WiFi all the time if you're using Cursor.
But also, it would introduce ginormous overhead on the database. It would be reading these tens of terabytes database,
approaching 20 terabytes or something data base every second. That's just crazy.
You definitely don't wanna do that. So what you do, you just try to reconcile the single hash,
which is at the root of the project. And then if something mismatches, then you go, you find where all the things disagree.
Maybe you look at the children and see if the hashes match. If the hashes don't match, go look at their children and so on. But you only do that in the scenario
where things don't match. For most people, most of the time, the hashes match. - So it's like a hierarchical reconciliation
of hashes. - Yeah, something like that. - Yeah, it's called a Merkle tree. - Yeah, Merkle. - Yeah. - Yeah.
This is cool to see that you have to think through all these problems. - The reason it's gotten hard
is just because the number of people using it and some of your customers have really, really large code bases.
We originally reordered dark code base, which is big, but it's just not the size of some company
that's been there for 20 years and has a ginormous number of files and you wanna scale that across programmers.
There's all these details where building the simple thing is easy, but scaling it to a lot of people,
a lot of companies is obviously a difficult problem, which is independent of, actually, so that there's part of this scaling.
Our current solution is also coming up with new ideas that, obviously, we're working on,
but then scaling all of that in the last few weeks, months. - Yeah. And there are a lot of clever things,
additional things that go into this indexing system. For example, the bottleneck in terms of costs
is not soaring things in the vector database or the database, it's actually embedding the code. You don't wanna re-embed the code base
for every single person in a company that is using the same exact code except for maybe they're a different branch
with a few different files or they've made a few local changes. Because again, embeddings are the bottleneck,
you can do this one clever trick and not have to worry about the complexity of dealing with branches and the other databases
where you just have some cash on the actual vectors computed
from the hash of a given chunk. - Mm-hmm. - So this means that when the nth person at a company goes
and embed their code base, it's really, really fast. You do all this without actually storing any code
on our servers at all. No code data is stored. We just store the vectors in the vector database and the vector cache.
- What's the biggest gains at this time you get from indexing the code base?
Just out of curiosity, what benefit do users have? It seems like longer term,
there'll be more and more benefit, but in the short term, just asking questions of the code base,
what's the usefulness of that? - I think the most obvious one is just, you want to find out
where something is happening in your large code base, and you have a fuzzy memory of,
"Okay, I want to find the place where we do X," but you don't exactly know what to search for
in a normal text search. So you ask a chat, you hit Command+Enter to ask with the code base chat.
And then very often, it finds the right place that you were thinking of.
- Like you mentioned, in the future, I think there's only going to get more and more powerful, where we're working a lot on improving the quality
of our retrieval. I think the ceiling for that is really, really much higher than people give the credit for.
- One question that's good to ask here, have you considered and why haven't you much done local stuff,
it seems like everything was just discussed as exceptionally difficult to do. To go to the cloud, you have to think about all these things
with the caching and the large code base
where a large number of programmers are using the same code base. You have to figure out the puzzle of that. A lot of it, most software
just does this heavy computational stuff locally. So, have you considered doing embeddings locally?
- Yeah, we thought about it, and I think it would be cool to do it locally. I think it's just really hard.
One thing to keep in mind is that some of our users use the latest MacBook Pro,
but most of our users, more than 80% of our users are in Windows machines, which many of them are not very powerful.
So, local models really only works on the latest computers, and it's also a big overhead to build that in.
So even if we would like to do that, it's currently not something that we are able to focus on.
I think there are some people that do that, and I think that's great,
but especially as models get bigger and bigger and you want to do fancier things with bigger models,
it becomes even harder to do it locally. - Yeah, it's not a problem of weaker computers.
It's just that for example, if you're some big company, you have big company code base.
It's just really hard to process big company code base even on the beefiest MacBook Pros.
It's not even a matter of if you're just a student or something.
I think, if you're the best programmer at a big company, you're still gonna have a horrible experience.
If you do everything locally where you could do it and scrape by, but again, it wouldn't be fun anymore.
- Yeah, like at approximate nearest neighbors and this massive code base is gonna just eat up your memory and your CPU, and it's based off of that.
That's just that. Let's talk about also the modeling side where, as Arvid said, there are these massive headwinds
against local models where one, things that seem to move towards MOEs, which one benefit
is maybe their more memory bandwidth bound, which plays in favor of local versus using GPUs
or using Nvidia GPUs. But the downside is, these models are just bigger in total,
and they're gonna need to fit, often not even on a single node but multiple nodes.
There's no way that's gonna fit inside of even really good MacBooks. I think especially for coding,
it's not a question as much of, does it clear some bar of the model's good enough
to do these things and then we're satisfied? Which may be the case for other problems and maybe where local models shine,
but people are always gonna want the best, the most intelligent, the most capable things, and that's gonna be really, really hard to run
for almost all people, locally. - Don't you want the most capable model?
You want Sonnet too? - And also o1- (Lex chuckling) - I like how you're pitching me. (group chuckling)
- O1 is another- - Would you be satisfied with an inferior model? Listen, yes, I'm one of those,
but there's some people that like to do stuff locally, really, there's a whole obviously open source movement
that resists. It's good that they exist actually because you wanna resist the power centers
that are growing our- - There's actually an alternative to local models that I am particularly fond of.
I think it's still very much in the research stage, but you could imagine to do homomorphic encryption
for language model inference. So you encrypt your input on your local machine, then you send that up,
and then the server can use loss of computation.
They can run models that you cannot run locally on this encrypted data, but they cannot see what the data is,
and then they send back the answer and you decrypt the answer and only you can see the answer. So I think that's still very much research
and all of it is about trying to make the overhead lower because right now, the overhead is really big,
but if you can make that happen, I think that would be really, really cool, and I think it would be really, really impactful
because I think one thing that's actually worrisome is that, as these models get better and better, they're going to become more and more economically useful.
And so, more and more of the world's information and data will flow through one or two centralized actors.
And then there are worries about, there can be traditional hacker attempts,
but it also creates this scary part where if all of the world's information is flowing
through one node in plaintext, you can have surveillance in very bad ways.
Initially, will be good reasons. People will want to try to protect against bad actors using AI models in bad ways,
and then you will add in some surveillance code. And then, someone else will come in and you're on a slippery slope, and then you start doing bad things
with a lot of the world's data. So, I am very hopeful that we can solve homomorphic encryption
for language model inference. - Yeah, and doing privacy, preserving machine learning. But I would say, that's the challenge we have with all software these days.
It's like, there's so many features that can be provided from the cloud and all us increasingly rely on it
and make our life awesome. But there's downsides, and that's why you rely on really good security to protect from basic attacks.
But there's also only a small set of companies that are controlling that data,
and they obviously have leverage and they could be infiltrated in all kinds of ways. That's the world we live in.
- Yeah, the thing I'm just actually quite worried about is Anthropic has this responsible scaling policy
where we're the low ASLs, which is the Anthropic security level or whatever of the models.
But as we get to, quote, unquote, "ASL-3, ASL-4," whatever models which are very powerful.
But for mostly reasonable security reasons, you would wanna monitor all the prompts.
But I think that's reasonable and understandable where everyone is coming from. But man, it'd be really horrible
if all the world's information is monitored that heavily, it's way too centralized.
It's like this really fine line you're walking where on the one side,
you don't want the models to go rogue. On the other side, humans like, I don't know if I trust all the world's information
to pass through three model providers. - Yeah. - Why do you think it's different than cloud providers?
- Because I think a lot of this data would never have gone
to the cloud providers in the first place.
You want to give more data to the AI models, you want to give personal data that you would never have put online in the first place
to these companies or to these models. It also centralizes control where right now, for cloud,
you can often use your own encryption keys, and AWS can't really do much.
But here, it's just centralized actors that see the exact plain text of everything.
Context
- On the topic of a context, that's actually been a friction for me. When I'm writing code in Python,
there's a bunch of stuff imported. You could probably intuit the kind of stuff
I would like to include in the context. How hard is it to auto figure out the context?
- It's tricky. I think we can do a lot better at computing the context automatically in the future.
One thing that's important to note is, there are trade-offs with including automatic context. So, the more context you include for these models,
first of all, the slower they are and the more expensive those requests are,
which means you can then do less model calls and do less fancy stuff in the background. Also, for a lot of these models, they get confused
if you have a lot of information in the prompt. So the bar for accuracy and for relevance
of the context you include should be quite high.
Already, we do some automatic context in some places within the product. It's definitely something we wanna get a lot better at.
I think that there are a lot of cool ideas to try there, both on the learning better retrieval systems,
like better embedding models, better rerankers. I think that there are also cool academic ideas,
stuff we've tried out internally, but also the field is grappling with writ large about, can you get language models to a place
where you can actually just have the model itself understand a new corpus of information? The most popular talked about version of this is
can you make the context windows infinite? Then if you make the context windows infinite, can you make the model actually pay attention to the infinite context?
And then, after you can make it pay attention to the infinite context to make it somewhat feasible to actually do it, can you then do caching
for that infinite context? You don't have to recompute that all the time. But there are other cool ideas that are being tried,
that are a little bit more analogous to fine-tuning of actually learning this information in the weights of the model.
It might be that you actually get a qualitative lead different type of understanding
if you do it more at the weight level than if you do it at the in-context learning level. I think the jury's still a little bit out
on how this is all gonna work in the end? But in the interim, us as a company, we are really excited about better retrieval systems
and picking the parts of the code base that are most relevant to what you're doing, and we could do that a lot better.
- One interesting proof of concept for the learning this knowledge directly in the weights
is with VS Code. So, we're in a VS Code fork and VS Code.
The code is all public. So these models in pre-training have seen all the code.
They've probably also seen questions and answers about it. And then, they've been fine-tuned and RLHFed
to be able to answer questions about code in general. So when you ask it a question about VS Code,
sometimes it'll hallucinate, but sometimes it actually does a pretty good job at answering the question.
It happens to be okay, but what if you could actually specifically train or post-train a model such that it really was built
to understand this code base? It's an open research question, one that we're quite interested in.
And then there's also uncertainty of, do you want the model to be the thing that end-to-end is doing everything,
i.e., it's doing the retrieval in its internals, and then answering a question, creating the code,
or do you want to separate the retrieval from the frontier model,
where maybe you'll get some really capable models that are much better than the best open source ones in a handful of months?
And then, you'll want to separately train a really good open source model to be the retriever, to be the thing that feeds in the context
to these larger models. - Can you speak a little more to post-training a model to understand the code base?
What do you mean by that? Is this a synthetic data direction? Is this- - Yeah, there are many possible ways you could try doing it.
There's certainly no shortage of ideas. It's just a question of going in and trying all of them
and being empirical about which one works best. One very naive thing is to try to replicate what's done
with VS Code and these frontier models. So, let's continue pre-training.
Some kind of continued pre-training that includes general code data but also throws in of the data of some particular repository
that you care about. And then in post-training, meaning, let's just start with instruction fine-tuning.
You have a normal instruction fine-tuning data set about code. Then you throw in a lot of questions about code
in that repository. So, you could either get ground truth ones, which might be difficult or you could do what you hinted at
or suggested using synthetic data, i.e., having the model ask questions
about various recent pieces of the code. So you take the pieces of the code, then prompt the model or have a model propose a question
for that piece of code, and then add those as instruction fine-tuning data points. And then in theory, this might unlock the model's ability
to answer questions about that code base. - Let me ask you about OpenAI o1.
OpenAI o1
What do you think is the role of that kind of test time compute system in programming? - I think test time compute is really, really interesting.
So, there's been the pre-training regime as you scale up the amount of data
and the size of your model, get you better and better performance both on loss, and then on downstream benchmarks
and just general performance, so we use it for coding or other tasks.
We're starting to hit a bit of a data wall, meaning, it's going to be hard to continue
scaling up this regime. So, scaling up test time compute is an interesting way, if now increasing the number of inference time flops.
Yeah, as you increase the number of flops you use inference time getting corresponding improvements in the performance of these models.
Traditionally, we just had to literally train a bigger model that always used that many more flops,
but now, we could perhaps use the same size model and run it for longer to be able to get an answer
at the quality of a much larger model. And so, the really interesting thing I like about this is there are some problems that perhaps require
100 trillion parameter model intelligence trained on 100 trillion tokens. But that's maybe 1%, maybe .1% of all queries.
So are you going to spend all of this effort, all of this compute training a model that costs that much
and then run it so infrequently?
You train the model that is capable of doing the 99.9% of queries, then you have a way of inference time running it longer
for those few people that really, really want max intelligence. - How do you figure out which problem requires
what level of intelligence? Is that possible to dynamically figure out when to use GPT-4, when to use a small model
and when you need the o1? (group chuckles)
- Yeah, that's an open research problem, certainly. I don't think anyone's actually cracked this model routing problem quite well.
We have initial implementations of this for something like Cursor Tab,
but at the level of going between 4o Sonnet to o1,
it's a bit trickier. There's also a question like, what level of intelligence do you need to determine if the thing is too hard for the four level model?
Maybe you need the o1 level model. It's really unclear.
- But you mentioned this. So, there's a pre-training process then there's post-training,
and then there's test time compute. Is that fair to separate? Where's the biggest gains?
- Well, it's weird because test time compute, there's a whole training strategy needed
to get test time compute to work. The other really weird thing about this is outside of the big labs and maybe even just OpenAI,
no one really knows how it works. There've been some really interesting papers that show hints of what they might be doing.
So, perhaps they're doing something with tree search using process reward models.
But yeah, I think the issue is we don't quite know exactly what it looks like, so it would be hard to comment on where it fits in.
I would put it in post-training, but maybe the compute spent for this forgetting test time compute to work for a model
is going to dwarf pre-training eventually. - So we don't even know if o1 is using just chain of thought
or we don't know how they're using any of these? We don't know anything? - It's fun to speculate. (group chuckling)
- If you were to build a competing model, what would you do? - Yeah, so one thing to do would be,
I think you probably need to train a process reward model. So maybe we can get into reward models
and outcome reward models versus process reward models. Outcome reward models are the traditional reward models
that people are trained for language modeling, and it's just looking at the final thing.
So if you're doing some math problem, let's look at that final thing. You've done everything and let's assign a grade to it,
how likely we think. What's the reward for this outcome? Process reward models instead try to grade the chain of thought.
And so OpenAI had preliminary paper on this, I think, last summer where they use human labelers
to get this pretty large several hundred thousand data set of creating chains of thought.
Ultimately, it feels like I haven't seen anything interesting in the ways that people use process reward models
outside of just using it as a means of affecting
how we choose between a bunch of samples. So, what people do in all these papers is they sample a bunch of outputs from the language model,
and then use the process reward models to grade all those generations
alongside maybe some other heuristics, and then use that to choose the best answer. The really interesting thing that people think might work
and people want to work is tree search with these process reward models. Because if you really can grade every single step
of the chain of thought, then you can branch out and explore multiple paths of this chain of thought
and then use these process reward models to evaluate how good is this branch that you're taking.
- Yeah, when the quality of the branch is somehow strongly correlated with the quality of the outcome at the very end,
so you have a good model of knowing which branch to take. So not just in the short term, in the long term?
- Yeah. The interesting work that I think has been done is figuring out how to properly train the process, or the interesting work that has been open sourced
and people I think talk about is how to train the process reward models,
maybe in a more automated way. I could be wrong here, could not be mentioning some papers. I haven't seen anything super that seems to work really well
for using the process reward models creatively to do tree search and code.
- This is an AI safety, maybe a bit of a philosophy question. So OpenAI says that they're hiding the chain of thought
from the user, and they've said that that was a difficult decision to make.
Instead of showing the chain of thought, they're asking the model to summarize the chain of thought.
They're also in the background saying they're going to monitor the chain of thought to make sure the model is not trying to manipulate the user,
which is a fascinating possibility. But anyway, what do you think about hiding the chain of thought?
- One consideration for OpenAI, and this is completely speculative, could be that they wanna make it hard for people
to distill these capabilities out of their model. It might actually be easier if you had access to that hidden chain of thought
to replicate the technology, because pretty important data, like seeing the steps that the model took
to get to the final results. - So, you could probably train on that also? - And there was a mirror situation with this,
with some of the large language model providers, and also this is speculation, but some of these APIs used to offer easy access
to log probabilities for all the tokens that they're generating and also log probabilities over the prompt tokens.
And then some of these APIs took those away. Again, complete speculation, but one of the thoughts
is that the reason those were taken away is if you have access to log probabilities similar to this hidden chain of thought,
that can give you even more information to try and distill these capabilities out of the APIs, out of these biggest models and to models you control.
As an asterisk on also the previous discussion about us integrating o1,
I think that we're still learning how to use this model. So, we made o1 available in Cursor
because when we got the model, we were really interested in trying it out. I think a lot of programmers are gonna be interested
in trying it out. O1 is not part of the default Cursor experience
in any way up, and we still haven't found a way to yet integrate it
into the editor in a way that we reach for every hour, maybe even every day.
So, I think that the jury's still out on how to use the model, and we haven't seen examples yet of people releasing things
where it seems really clear like, "Oh, that's now the use case." The obvious one to turn to
is maybe this can make it easier for you to have these background things running, to have these models and loops, to have these models be agentic.
But we're still discovering. - To be clear, we have ideas. We just need to try and get something incredibly useful
before we put it out there. - But it has these significant limitations. Even barring capabilities, it does not stream.
That means it's really, really painful to use for things where you want to supervise the output.
Instead, you're just waiting for the wall text to show up. Also, it does feel like the early innings of test time,
compute and search where it's just a very, very much a v0, and there's so many things that don't feel quite right.
I suspect in parallel to people increasing the amount
of pre-training data and the size of the models and pre-training and finding tricks there, you'll now have this other thread
of getting search to work better and better. - So, let me ask you about strawberry tomorrow eyes.
(group chuckles) So, it looks like GitHub Copilot might be integrating o1
in some kind of way, and I think some of the comments are saying, does this mean Cursor is done?
(group chuckles) I think I saw one comment saying that. - It's a time to shut down Cursor, yeah.
- Time to shut down Cursor, thank you. (group chuckling) So, is it time to shut down Cursor? - I think this space is a little bit different
from past software spaces over the 2010s, where I think that the ceiling here
is really, really, really incredibly high. So, I think that the best product in three to four years
will just be soon much more useful than the best product today. You can wax poetic about moats this and brand that
and this is our advantage, but I think in the end, just if you stop innovating on the product, you will lose.
That's also great for startups, that's great for people trying to enter this market because it means you have an opportunity
to win against people who have lots of users already by just building something better.
And so, I think over the next few years, it's just about building the best product, building the best system, and that both comes down
to the modeling engine side of things, and it also comes down to the editing experience.
- Yeah, I think most of the additional value from Cursor versus everything else out there
is not just integrating the new model fast like o1. It comes from all of the depth
that goes into these custom models that you don't realize are working for you in every facet of the product,
as well as the really thoughtful UX with every single feature.
Synthetic data
- All right, from that profound answer, let's descend back down to the technical. You mentioned you have a taxonomy of synthetic data.
- (chuckles) Oh, yeah. - Can you please explain? - Yeah, I think there are three main kinds
of synthetic data. So what is synthetic data, first? So there's normal data, like non-synthetic data,
which is just data that's naturally created, i.e., usually it'll be from humans having done things.
So, from some human process you get this data. Synthetic data, the first one would be distillation.
So having a language model, output tokens or probability distributions over tokens,
and then you can train some less capable model on this. This approach is not gonna get you a more capable model
than the original one that has produced the tokens, but it's really useful if there's some capability you wanna elicit
from some really expensive high-latency model. You can then distill that down into some smaller task-specific model.
The second kind is when one direction of the problem is easier than the reverse.
So, a great example of this is bug detection, like we mentioned earlier, where it's a lot easier to introduce reasonable-looking bugs
than it is to actually detect them. And this is probably the case for humans too.
And so what you can do, is you can get a model that's not trained in that much data, that's not that smart,
to introduce a bunch of bugs and code. And then, you can use that to then train. Use the synthetic data to train a model
that can be really good at detecting bugs. The last category I think is, I guess the main one
that it feels like the big labs are doing for synthetic data, which is producing text
with language models that can then be verified easily.
So, extreme example of this is if you have a verification system that can detect if language is Shakespeare level,
and then you have a bunch of monkeys typing and typewriters. You can eventually get enough training data to train a Shakespeare-level language model.
And I mean this is very much the case for math where verification is actually really, really easy
for formal languages. And then what you can do, is you can have an okay model,
generate a ton of rollouts, and then choose the ones that you know have actually proved
the ground truth theorems, and train that further. There's similar things you can do for code with lead code like problems,
where if you have some set of tests that you know correspond to if something passes these tests, it actually solved problem. You could do the same thing
where you verify that it's passed the test and then train the model in the outputs that have passed the tests.
I think it's gonna be a little tricky getting this to work in all domains, or just in general.
Having the perfect verifier feels really, really hard to do with just open-ended miscellaneous tasks.
You give the model or more long horizon tasks, even in coding. - [Lex] That's 'cause you're not as optimistic as Arvid.
But yeah, so yeah, (Aman chuckles) that third category requires having a verifier.
- Yeah. Verification, it feels like it's best when you know for a fact that it's correct.
And then it wouldn't be like using a language model to verify, it would be using tests or formal systems.
- Or running the thing too. Doing the human form of verification, where you just do manual quality control.
- Yeah. - Yeah. - But the language model version of that, where it's running the thing and it actually understands the output.
- Yeah, no, that's- - I'm sure it's somewhere in between. - Yeah. I think that's the category that is most likely to result
in massive gains. - What about RL with feedback side RLHF versus RLAIF?
RLHF vs RLAIF
What's the role of that in getting better performance on the models?
- Yeah. So, RLHF is when the reward model you use is trained
from some labels you've collected from humans giving feedback.
I think this works if you have the ability to get a ton of human feedback
for this kind of task that you care about. RLAIF is interesting
because it's depending on the constraint that verification is actually a decent bit easier than generation.
Because it feels like, okay, what are you doing? Are you using this language model to look at the language model outputs and then prove the language model?
But no, it actually may work if the language model has a much easier time verifying
some solution than it does generating it. Then you actually could perhaps get this recursive loop.
But I don't think it's gonna look exactly like that. The other thing you could do, that we kind of do,
is a little bit of a mix of RLAIF and RLHF, where usually the model is actually quite correct
and this is the case of precursor tap picking between two possible generations of what is the better one.
And then, it just needs a little bit of human nudging with only on the order 50, 100 examples
to align that prior the model has with exactly with what you want.
It looks different than I think normal RLHF where you're usually training these reward models in tons of examples.
Fields Medal for AI
- What's your intuition when you compare generation and verification or generation and ranking?
Is ranking way easier than generation? - My intuition would just say, yeah, it should be.
Like, if you believe P does not equal NP, then there's this massive class of problems
that are much, much easier to verify given proof, than actually proving it. - I wonder if the same thing will prove P not equal to NP
or P equal to NP. - (chuckles) That would be really cool. - That'd be a whatever Field's Medal
(group giggling) by AI. Who gets the credit? Another the open philosophical question.
(group chuckling) - Whoever prompted it. (group chuckling) - I'm actually surprisingly curious
what a good bet for one AI will get the Field's Medal will be. I actually don't have- - Isn't this
Aman's specialty? - I don't know what Aman's bet here is. - Oh, sorry, Nobel Prize or Field's Medal first?
- Field's Medal- - Oh, Field's Medal level? - Field's Medal comes first, I think. - Field's Medal comes first. Well, you would say that, of course.
(group chuckling) - But it's also this isolated system you verify. - Sure. - Yeah. - I don't even know if I-
- You don't need to do (indistinct). - I feel like I have much more to do there. It felt like the path to get to IMO was a little bit more clear.
Because it already could get a few IMO problems and there was a bunch of low-hanging fruit,
given the literature at the time, of what tactics people could take. I think I'm, one, much less versed
in the space of theorem proving now. And two, less intuition about how close we are to solving
these really, really hard open problems. - So you think you'll be Field's Medal first?
It won't be in physics or in- - Oh, 100%, I think that's probably more likely.
It is probably much more likely that it'll get in. Yeah, yeah, yeah. Well, I think it both to, I don't know, BSD,
which is a Birch and Swinnerton-Dyer conjecture, or (indistinct) iPods, or any one of these hard math problems
are just actually really hard. It's unclear what the path to get even a solution looks like.
We don't even know what a path looks like, let alone (indistinct). - And you don't buy the idea this is just like an isolated system
and you can actually have a good reward system, and it feels like it's easier to train for that.
- I think we might get Field's Medal before AGI. - I mean, I'd be very happy.
I'd be very happy. But I don't know if I think 2028, 2030.
(Aman chuckles) - For Field's Medal? - Field's Medal. - All right. It feels like forever from now,
given how fast things have been going. Speaking of how fast things have been going, let's talk about scaling laws.
Scaling laws
So, for people who don't know, maybe it's good to talk about this whole idea
of scaling laws. What are they, where'd you think stand, and where do you think things are going?
- I think it was interesting. The original scaling laws paper by OpenAI was slightly wrong. 'Cause I think of some issues they did
with learning right schedules. And then, Chinchilla showed a more correct version.
And then, from then people have again deviated from doing the compute optimal thing. 'Cause people start now optimizing more so
for making the thing work really well given an inference budget.
And I think there are a lot more dimensions to these curves than what we originally used,
of just compute number of parameters and data.
Like inference compute is the obvious one. I think context length is another obvious one. Let's say you care about the two things
of inference compute and then context window, maybe the thing you wanna train is some kind of SSM.
Because they're much, much cheaper and faster at super, super long context. And even if, maybe it was 10 X more scaling properties
during training, meaning, you spend 10 X more compute to train the thing to get the same level of capabilities,
it's worth it because you care most about that inference budget for really long context windows.
So, it'll be interesting to see how people play with all these dimensions. - So, yeah, I mean, you speak to the multiple dimensions, obviously.
The original conception was just looking at the variables of the size of the model as measured by parameters,
and the size of the data as measured by the number of tokens, and looking at the ratio of the two. - Yeah.
- And it's kind of a compelling notion that there is a number, or at least a minimum.
And it seems like one was emerging. Do you still believe that there is a kind of bigger is better?
- I mean, I think bigger is certainly better for just raw performance.
- And raw intelligence. - And raw intelligence. I think the path that people might take, I'm particularly bullish on distillation.
And how many knobs can you turn to, if we spend a ton, ton of money on training,
get the most capable cheap model. Really, really caring as much as you can.
'Cause the naive version of caring as much as you can about inference time compute, is what people have already done with the Llama models.
Or just over-training the shit out of 7B models on way, way, way more tokens than is essential optimal.
But if you really care about it, maybe the thing to do is what Gamma did, which is let's not just train on tokens, let's literally train on minimizing the KL divergence
with the distribution of gemma 27B, right? So knowledge distillation there.
And you're spending the compute of literally training this 27 billion parameter model
on all these tokens, just to get out this, I don't know, smaller model. - And the distillation gives you just a faster model,
smaller means faster. - Yeah, distillation in theory is,
I think, getting out more signal from the data that you're training on. And it's perhaps another way of getting over,
not completely over, but partially helping with the data wall. Where you only have so much data to train on,
let's train this really, really big model on all these tokens and we'll distill it into this smaller one. And maybe we can get more signal per token
for this much smaller model than we would've originally if we trained it. - So if I gave you $10 trillion, how would you spend it?
(Aman chuckles) I mean, you can't buy an island or whatever. How would you allocate it in terms of improving the big model
versus maybe paying for HF in the RLHF?
- Yeah, yeah. I think, there's a lot of these secrets and details
about training these large models that I just don't know, and are only privy to the large labs. And the issue is, I would waste a lot of that money
if I even attempted this, because I wouldn't know those things. Suspending a lot of disbelief
and assuming you had the know-how, or if you're saying you have to operate
with the limited information you have now. - No, no, no, actually, I would say, you swoop in and you get all the information,
all the little heuristics, all the little parameters, all the parameters that define how the thing is trained.
- Mm-hmm. - If we look in how to invest money for the next five years
in terms of maximizing what you called raw intelligence. - I mean, isn't the answer really simple?
You just try to get as much compute as possible. At the end of the day, all you need to buy is the GPUs.
You can tune whether you want to pre-train a big model or a small model.
- Well, this gets into the question of are you really limited by compute and money, or are you limited by these other things?
- I'm more privy to Arvid's belief that we're idea-limited, but there's always that like-
- But if you have a lot of compute, you can run a lot of experiments.
- So you would run a lot of experiments versus use that compute to trend a gigantic model?
- I would, but I do believe that we are limited in terms of ideas that we have.
- I think yeah, 'cause even with all this compute, and all the data you could collect in the world,
I think you really are ultimately limited by not even ideas, but just really good engineering.
There aren't that many people in the world who really can make the difference here. And there's so much work that goes into research
that is just pure, really, really hard engineering work. As a very hand-wavy example,
if you look at the original Transformer paper, how much work was joining together a lot of these really interesting concepts embedded
in the literature, versus then going in and writing all the codes, maybe the CUDA kernels,
maybe whatever else. I don't know if it ran them GPUs or TPUs. Originally, such that it actually saturated the GPU performance.
Getting GNOME Azure to go in and do all this code. And GNOME is probably one of the best engineers in the world.
Or maybe going a step further, like the next generation of models, having these things. Like getting model parallelism to work,
and scaling it on thousands of, or maybe tens of thousands of V100s, which I think GBDE-III may have been.
There's just so much engineering effort that has to go into all of these things to make it work.
If you really brought that cost down to maybe not zero,
but just made it 10 X easier, made it super easy for someone with really fantastic ideas,
to immediately get to the version of the new architecture they dreamed up, that is getting 50, 40% utilization on their GPUs,
I think that would just speed up research by a ton. - I mean, I think if you see a clear path to improvement,
you should always take the low-hanging fruit first, right? I think probably OpenAI and all the other labs
that did the right thing to pick off the low-hanging fruit. Where the low-hanging fruit is like,
you could scale up to a GPT-4.25 scale
and you just keep scaling, and things keep getting better.
There's no point of experimenting with new ideas when everything is working. And you should bang on
and to try to get as much as much juice out of the possible.
I think if you're spending $10 trillion, you probably wanna spend some, then actually reevaluate your ideas,
probably your idea a little bit at that point. - I think all of us believe new ideas are probably needed
to get all the way there to AGI. And all of us also probably believe
there exist ways of testing out those ideas at smaller scales, and being fairly confident
that they'll play out. It's just quite difficult for the labs
in their current position to dedicate their very limited research and engineering talent to exploring all these other ideas,
when there's this core thing that will probably improve performance
for some decent amount of time. - Yeah, but also, these big labs like winning.
(Lex chuckles) So, they're just going wild. Okay. (all chuckling)
So, big question, looking out into the future. You're now at the center of the programming world.
The future of programming
How do you think programming, the nature of programming changes in the next few months, in the next year, in the next two years
and the next five years, 10 years? - I think we're really excited about a future
where the programmer is in the driver's seat for a long time. And you've heard us talk about this a little bit,
but one that emphasizes speed and agency for the programmer and control.
The ability to modify anything you wanna modify, the ability to iterate really fast on what you're building.
And this is a little different, I think, than where some people are jumping to in the space,
where I think one idea that's captivated people, is can you talk to your computer?
Can you have it build software for you? As if you're talking to an engineering department or an engineer over Slack. And can it just be this sort of isolated text box?
And part of the reason we're not excited about that,
is some of the stuff we've talked about with latency, but then a big piece, a reason we're not excited about that,
is because that comes with giving up a lot of control. It's much harder to be really specific when you're talking in the text box.
And if you're necessarily just going to communicate with a thing like you would be communicating with an engineering department,
you're actually advocating tons of really important decisions to this bot.
And this kind of gets at, fundamentally, what engineering is.
I think that some people who are a little bit more removed from engineering might think of it as the spec is completely written out
and then the engineers just come and they just implement. And it's just about making the thing happen in code
and making the thing exist. But I think a lot of the best engineering,
the engineering we enjoy, involves tons of tiny micro decisions about what exactly you're building,
and about really hard trade-offs between speed and cost and just all the other things involved in a system.
As long as humans are actually the ones designing the software and the ones specifying what they want to be built,
and it's not just like company run by all AIs, we think you'll really want the human in a driver's seat dictating these decisions.
And so the jury's still out on what that looks like. I think that one weird idea for what that could look like,
is it could look like you can control the level of abstraction you view a code base at.
And you can point at specific parts of a code base,
like, maybe you digest a code base by looking at it in the form of pseudocode. And you can actually edit that pseudocode too,
and then have changes get made down at the formal programming level. And you can gesture at any piece of logic
in your software component of programming. You keep the inflow text editing component of programming,
you keep the control of, you can even go down into the code, you can go at higher levels of abstraction,
while also giving you these big productivity gains. - It'd be nice if you can go up and down the abstraction stack.
- Yeah. And there are a lot of details to figure out there that's sort of like a fuzzy idea. Time will tell if it actually works. But these principles of control and speed
in the human in the driver's seat, we think are really important. We think for some things like Arvid mentioned before,
for some styles of programming, you can hand it off chatbot-style. If you have a bug that's really well specified.
But that's not most of programming, and that's also not most of the programming we think a lot of people value.
- What about the fundamental skill of programming? There's a lot of people, like young people right now scared,
'cause they love programming, but they're scared about, "Will I be able to have a future if I pursue this career path?"
Do you think the very skill of programming will change fundamentally? - I actually think this is a really, really exciting time
to be building software. We remember what programming was like in 2013, 2012, whatever it was.
And there was just so much more cruft and boilerplate and looking up something really gnarly.
And that stuff still exists, it's definitely not at zero. But programming today is way more fun than back then.
It's like we're really getting down to the delight concentration. And all the things that really draw people to programming,
for instance, this element of being able to build things really fast and speed, and also individual control,
all those are just being turned up a ton. And so I think it's gonna be a really, really fun time
for people who build software. I think that the skills will probably change too. I think that people's taste and creative ideas
will be magnified. And it will be maybe less, a little bit, about boilerplate text editing.
Maybe even a little bit less about carefulness, which I think is really important today
if you're a programmer. I think it'll be a lot more fun. - What do you guys think? - I agree.
I'm very excited to be able to change. One thing that happened recently,
was we wanted to do a relatively big migration to our code base. We were using AsyncLocalStorage in Node.js,
which is known to be not very performant, and we wanted to migrate to a context object. And this is a big migration
and affects the entire code base. Sualeh and I spent, I don't know, five days working through this, even with today's AI tools.
And I am really excited for a future where I can just show a couple of examples
and then the AI applies that to all of the locations. And then it highlights, "Oh, this is a new example, what should I do?"
And then, I show exactly what to do there. And then, that can be done in 10 minutes. And then, you can iterate much, much faster.
Then, you don't have to think as much upfront and stand at the blackboard and think, "Exactly, how are we gonna do this,
because the cost is so high?" But you can just try something first and you realize, "Oh, this is not actually exactly what I want."
And then, you can change it instantly again after. And so, yeah, I think being a programmer in the future
is going to be a lot of fun. - Yeah, I really like that point. It feels like a lot of the time with programming,
there are two ways you can go about it. One is you think really hard, carefully upfront
about the best possible way to do it, and then you spend your limited time of engineering to actually implement it.
But I must refer just getting in the code and taking a crack at seeing how it lays out
and then iterating really quickly on that. That feels more fun.
- Yeah, just speaking to generate the boilerplate, is great. So you just focus on the nuanced,
difficult design decisions. Migration, I feel like this is a cool one.
It seems like a larger language models is able to basically translate for one program language to another. Or translate, migrate in the general sense
of what migrate is. But that's in the current moment. So mean the fear has to do with,
okay, as these models get better and better, then you're doing less and less creative decisions. And is it going to kind of move to a place
where you're operating in the design space of natural language
where natural language is the main programming language? And, I guess, I could ask that by way of advice.
If somebody's interested in programming now, what do you think they should learn?
You guys started in some Java. (group chuckling) And I forget, oh, some PHP.
- PHP. - Objective-C. - Objective-C, there you go. I mean in the end, we all know JavaScript was going to win
(group chuckling) and not TypeScript. It's going to be like vanilla JavaScript.
It's just going to eat the world and maybe live with PHP. And I mean, it also brings up the question of,
I think Don Knuth has this idea that some percent of the population is geeks,
and there's a particular kind of psychology in mind required for programming.
And it feels like more and more that expands the kind of person that should be able to,
can do great programming might expand. - I think different people do programming
for different reasons. But I think the true, maybe the best programmers
are the ones that really love, just absolutely love programming.
For example, there are folks on our team who literally when they get back from work,
they go and then they boot up Cursor, and then they start coding on their side projects
for the entire night, and they stay up until 3:00 am doing that. And when they're sad, they said,
"I just really need to code." (group chuckling) And I think there's that level of programmer
where this obsession and love of programming, I think makes, really, the best programmers.
And I think these types of people will really get into the details of how things work.
- I guess the question I'm asking, that exact programmer, let's think about that person.
When the super Tab, the super awesome praise be the Tab succeeds,
and you keep pressing Tab. - That person in the team loves Cursor Tab more than anybody else, right?
- Yeah. Pressing Tab is just pressing Tab. That's the easy way to say it in the catchphrase.
But what you're actually doing when you're pressing Tab, is that you're injecting intent all the time
while you're doing it. Sometimes you're rejecting it, sometimes you're typing a few more characters.
And that's the way that you're shaping the things
that's being created. And I think programming will change a lot to just, "What is it that you want to make?"
- It's sort of higher bandwidth. The communication to the computer just becomes higher and higher bandwidth as opposed to just typing as much lower bandwidth
than communicating intent. - I mean, this goes to your manifesto
titled Engineering Genius. "We are an applied research lab building extraordinary productive human AI systems."
So, speaking to this hybrid element. "To start, we're building the engineer of the future,
a human AI programmer that's an order of magnitude more effective than any one engineer.
This hybrid engineer will have effortless control over their code base and no low entropy keystrokes.
They will iterate at the speed of their judgment, even in the most complex systems.
Using a combination of AI and human ingenuity, they will out-smart and out-engineer
the best pure AI systems. We are a group of researchers and engineers. We build software and models to invent
at the edge of what's useful and what's possible. Our work has already improved the lives of hundreds of thousands of programmers."
And on the way to that, we'll at least make programming more fun. So, thank you for talking today.
- Thank you. - Thanks for having us. - Thank you. - Thank you. - Thanks for listening to this conversation with Michael, Sualeh, Arvid and Aman.
To support this podcast, please check out our sponsors in the description. And now, let me leave you with a random, funny,
and perhaps profound programming code I saw on Reddit. Nothing is as permanent as a temporary solution that works.
Thank you for listening and hope to see you next time.