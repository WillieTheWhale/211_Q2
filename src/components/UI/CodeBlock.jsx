export default function CodeBlock({ code, language = '', className = '' }) {
  return (
    <pre className={`code-block ${className}`} role="code" aria-label={`${language || 'Code'} block`}>
      <code>{code}</code>
    </pre>
  )
}
