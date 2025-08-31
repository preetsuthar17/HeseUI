import TurndownService from 'turndown';

export function generateComponentMarkdown(componentId: string): string {
  const mainContent = document.querySelector('main');
  if (!mainContent) {
    return `# Component: ${componentId}\n\nContent not available.`;
  }

  const titleElement = document.querySelector('h1');
  const title = titleElement?.textContent || componentId;

  const componentSection = mainContent.querySelector(
    '[data-component-section]'
  );

  if (!componentSection) {
    return `# ${title}\n\nComponent content not available.`;
  }

  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    emDelimiter: '*',
    bulletListMarker: '-',
    strongDelimiter: '**',
  });

  turndownService.addRule('codeBlocks', {
    filter: ['pre'],
    replacement: function (content: string, node: Node) {
      const codeElement = (node as HTMLElement).querySelector('code');
      const language =
        codeElement?.className?.match(/language-(\w+)/)?.[1] || 'tsx';
      return `\n\`\`\`${language}\n${codeElement?.textContent || content}\n\`\`\`\n\n`;
    },
  });

  turndownService.addRule('buttons', {
    filter: ['button'],
    replacement: function (content: string, node: Node) {
      const link = (node as HTMLElement).querySelector('a');
      if (link) {
        return `[${link.textContent}](${link.href})`;
      }
      return content;
    },
  });

  const markdown = turndownService.turndown(componentSection as HTMLElement);

  let result = `---\n`;
  result += `title: ${title}\n`;
  result += `subtitle: ${title}\n`;
  result += `description: ${title} component from HeseUI component library.\n`;
  result += `---\n\n`;
  result += `# ${title}\n\n`;
  result += markdown;
  result += `\n\n---\n\n`;
  result += `*Generated from [HeseUI Component Library](https://www.heseui.com)*\n`;

  return result;
}
