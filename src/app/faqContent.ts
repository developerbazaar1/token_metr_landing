export const landingFaqs = [
  {
    q: 'Does TokenMetr read or store my prompts?',
    a: 'No. TokenMetr processes your prompts entirely inside your browser. Your prompt data never leaves your device, no remote inference is performed, and nothing is stored on our servers. We have no access to your prompts, workflows, or AI conversations. This makes TokenMetr suitable for sensitive workflows, enterprise environments, and confidential prompt engineering use cases.',
  },
  {
    q: 'What exactly does TokenMetr do?',
    a: 'TokenMetr is an AI prompt optimization and semantic compression platform that reduces unnecessary token usage while preserving instruction quality, reasoning structure, and operational intent. It helps users create more efficient, scalable, and reliable AI workflows across models like ChatGPT, Claude, Gemini, DeepSeek, and other LLMs.',
  },
  {
    q: 'Will optimization preserve prompt quality?',
    a: 'Yes. TokenMetr is designed to preserve critical instructions, workflow logic, reasoning flow, and execution behavior while removing redundant prompt overhead.',
  },
  {
    q: 'How is this different from just shortening prompts?',
    a: 'Simple shortening often removes important context and instructions. TokenMetr focuses on semantic optimization, preserving prompt behavior and structure while improving efficiency. It also offers prompt advisor and cost calculation analytics so users know how much cost they saved.',
  },
  {
    q: 'Does TokenMetr reduce API costs?',
    a: 'Reducing unnecessary tokens can significantly lower token consumption in API workflows, especially for large prompts, repeated operations, and production-scale AI systems.',
  },
  {
    q: 'Which AI models does it support?',
    a: 'TokenMetr is designed to work across major AI platforms including ChatGPT, Claude, Gemini, DeepSeek, and Perplexity.',
  },
  {
    q: 'Is the Developer Platform available yet?',
    a: 'The TokenMetr Developer Platform is currently planned as an upcoming capability. It is being designed for teams that want token intelligence, prompt optimization, and cost visibility inside their own products, APIs, and internal AI workflows.',
  },
  {
    q: 'Can it handle large or complex prompts?',
    a: 'Yes. TokenMetr is built for advanced workflows including long-context prompts, multi-role systems, AI agents, technical instructions, and enterprise-scale prompt operations.',
  },
];

export const detailedFaqSections = [
  {
    title: 'Safety & Trust',
    subtitle: 'Privacy and security questions users ask first.',
    faqs: [
      landingFaqs[0],
      {
        q: 'Is TokenMetr safe for enterprise or confidential workflows?',
        a: 'Yes. Since optimization runs locally in-browser, your prompts remain fully under your control. TokenMetr is designed to support professional and enterprise AI workflows where privacy, confidentiality, and prompt integrity are critical.',
      },
      {
        q: 'Are my prompts sent to OpenAI, Claude, or any external AI model?',
        a: 'No. TokenMetr does not send your prompts to external AI providers for processing. Optimization happens locally on your device without transmitting your prompt content externally.',
      },
      {
        q: 'Can I verify how TokenMetr works?',
        a: 'Yes. TokenMetr browser extension architecture and processing flow are transparent and designed for user trust. Users can independently inspect how local processing works directly through the extension codebase.',
      },
    ],
  },
  {
    title: 'Product Understanding',
    subtitle: 'What TokenMetr does and who it helps.',
    faqs: [
      landingFaqs[1],
      {
        q: 'What problem does TokenMetr solve?',
        a: 'Large prompts often become expensive, repetitive, difficult to maintain, and inefficient across AI workflows. TokenMetr helps reduce token overhead, improve prompt structure, preserve instruction clarity, and make prompts easier to scale across production AI systems.',
      },
      {
        q: 'Is TokenMetr a prompt summarizer?',
        a: 'No. Traditional summarization tools focus on shortening text for readability. TokenMetr is designed specifically for AI prompts and semantic compression, where preserving instruction hierarchy, constraints, workflow logic, and operational intent is critical.',
      },
      {
        q: 'Who is TokenMetr built for?',
        a: 'TokenMetr is built for developers, prompt engineers, AI automation builders, researchers, SaaS teams, agencies, enterprise operators, and advanced AI users who work extensively with LLM-based workflows.',
      },
      {
        q: 'Do I need prompt engineering experience to use TokenMetr?',
        a: 'No. TokenMetr is designed to work for both beginners and advanced users. You can optimize prompts using a simple workflow without needing technical or prompt engineering expertise.',
      },
    ],
  },
  {
    title: 'Prompt Compression & Quality',
    subtitle: 'How optimization protects meaning and structure.',
    faqs: [
      {
        q: 'How does prompt compression work?',
        a: 'TokenMetr analyzes prompt structure, instruction patterns, semantic redundancy, and workflow intent to reduce unnecessary token usage while preserving execution behavior and reasoning quality.',
      },
      {
        q: 'Will optimization remove important instructions?',
        a: 'TokenMetr is specifically designed to preserve critical instructions, role definitions, constraints, reasoning flow, and operational intent while removing redundant or inefficient prompt structures.',
      },
      {
        q: 'What if optimization changes the meaning of my prompt?',
        a: 'Optimization is designed to preserve functional intent and workflow behavior as closely as possible. Users can always review, compare, and refine optimized prompts before using them in production workflows.',
      },
      {
        q: 'Will compressed prompts generate the same outputs?',
        a: 'LLM outputs are inherently probabilistic, so identical outputs cannot be guaranteed. However, TokenMetr is designed to preserve functional behavior, reasoning objectives, and operational structure while improving efficiency.',
      },
      {
        q: 'Can TokenMetr optimize complex prompts?',
        a: 'Yes. TokenMetr is designed for advanced workflows including multi-role prompts, chain-of-thought structures, AI agents, system prompts, enterprise workflows, technical instructions, and large-context prompt systems.',
      },
      {
        q: 'How much token reduction can I expect?',
        a: 'Results vary depending on prompt complexity, redundancy, and structure. Many workflows achieve meaningful token reductions while maintaining prompt quality, instruction integrity, and reasoning behavior.',
      },
      {
        q: 'Does TokenMetr improve AI response quality too?',
        a: 'Cleaner and more structured prompts often help reduce ambiguity and improve instruction clarity, which can contribute to more consistent AI outputs and better workflow reliability.',
      },
    ],
  },
  {
    title: 'AI Model & Platform Compatibility',
    subtitle: 'Where TokenMetr fits into AI workflows.',
    faqs: [
      {
        q: 'Which AI models does TokenMetr support?',
        a: 'TokenMetr is designed to work across major LLM platforms including ChatGPT, Claude, Gemini, DeepSeek, Llama-based systems, and other AI models that rely on prompt-based interactions.',
      },
      {
        q: 'Does TokenMetr work with custom GPTs and AI agents?',
        a: 'Yes. TokenMetr can be used with custom GPTs, AI agents, agentic workflows, automation systems, and multi-step AI pipelines.',
      },
      {
        q: 'Does optimization differ between AI models?',
        a: 'Yes. Different models interpret prompts differently based on context windows, instruction handling, and reasoning behavior. TokenMetr is designed to improve prompt efficiency while remaining adaptable across models.',
      },
      {
        q: 'What platforms does TokenMetr work on?',
        a: 'TokenMetr is designed to integrate naturally into modern AI workflows through browser-based usage and AI platform interactions.',
      },
    ],
  },
  {
    title: 'Performance & Workflow Benefits',
    subtitle: 'Cost, context, and productivity gains.',
    faqs: [
      {
        q: 'Does TokenMetr reduce API costs?',
        a: 'Reducing unnecessary tokens can help lower overall token consumption in API-based workflows, especially at scale where prompt efficiency directly impacts operational costs.',
      },
      {
        q: 'Does TokenMetr help with context window limits?',
        a: 'Yes. By reducing prompt overhead and redundancy, TokenMetr helps users fit more meaningful context and instructions within model context windows.',
      },
      {
        q: 'Will TokenMetr slow down my browser?',
        a: 'No significant performance impact is expected during normal usage. Optimization is designed to run efficiently within the browser environment.',
      },
      {
        q: 'Can I optimize very large prompts?',
        a: 'Yes. TokenMetr is designed to handle large prompts, structured workflows, enterprise instructions, and long-context AI systems.',
      },
      {
        q: 'Can optimized prompts be edited manually afterward?',
        a: 'Absolutely. Users retain full control over optimized prompts and can further refine, modify, or customize them at any time.',
      },
    ],
  },
  {
    title: 'Differentiation & Positioning',
    subtitle: 'How TokenMetr differs from manual or generic tools.',
    faqs: [
      {
        q: 'How is this different from just writing shorter prompts?',
        a: 'Manually shortening prompts often removes important structure, reasoning logic, or instruction detail. TokenMetr focuses on semantic optimization that preserves operational behavior while improving efficiency.',
      },
      {
        q: 'Why not just use ChatGPT or Claude to optimize prompts?',
        a: 'General-purpose AI models are not specialized semantic compression systems. TokenMetr is specifically designed for prompt optimization workflows with a stronger focus on instruction preservation, workflow structure, token efficiency, and repeatable optimization behavior.',
      },
      {
        q: 'Why is prompt optimization difficult?',
        a: 'Modern prompts often contain layered instructions, hidden dependencies, role hierarchies, workflow logic, and reasoning constraints. Effective optimization requires preserving these relationships while reducing unnecessary token overhead.',
      },
      {
        q: 'Is TokenMetr replacing prompt engineers?',
        a: 'No. TokenMetr is designed to augment prompt engineering workflows by improving efficiency, scalability, consistency, and optimization speed, not replace human expertise.',
      },
    ],
  },
  {
    title: 'Advanced & Enterprise Workflows',
    subtitle: 'Support for larger teams and production AI operations.',
    faqs: [
      {
        q: 'Can TokenMetr support enterprise AI operations?',
        a: 'Yes. TokenMetr is designed for scalable AI workflows including enterprise prompt systems, internal AI operations, automation pipelines, and large-context prompt management.',
      },
      {
        q: 'Can organizations standardize prompts across teams?',
        a: 'Yes. Prompt optimization and consistent structure can help teams maintain reusable AI workflow standards and operational consistency.',
      },
      {
        q: 'Can TokenMetr be used in AI automation pipelines?',
        a: 'Yes. TokenMetr can fit naturally into AI orchestration systems, backend prompt workflows, automation pipelines, and agentic architectures.',
      },
      {
        q: 'Does TokenMetr support advanced AI workflows?',
        a: 'Yes. TokenMetr is built to support advanced use cases including reasoning systems, structured prompting, long-context workflows, AI agents, and production-scale prompt operations.',
      },
    ],
  },
  {
    title: 'Getting Started',
    subtitle: 'Using TokenMetr in your workflow.',
    faqs: [
      {
        q: 'How do I start using TokenMetr?',
        a: 'Simply open TokenMetr within your AI workflow, paste or load your prompt, and run optimization directly from the interface.',
      },
      {
        q: 'Do I need to install anything?',
        a: 'TokenMetr is designed for lightweight workflow integration through browser-based usage.',
      },
      {
        q: 'Is there a learning curve?',
        a: 'Most users can begin optimizing prompts immediately. Advanced users can additionally leverage TokenMetr for large-scale prompt systems and sophisticated AI workflows.',
      },
    ],
  },
];
